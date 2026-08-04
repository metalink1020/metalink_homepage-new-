"use client";

import { useEffect, useRef, useState } from "react";
import type { StatItem } from "@/types/subpages";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function Counter({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const value = useCountUp(Number(stat.value), inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-1/2 lg:w-1/4">
      <div className="flex items-end justify-center gap-[10px]">
        <span className="text-[40px] font-bold leading-none tracking-[-2px] md:text-[48px] lg:text-[60px]">
          {value.toLocaleString()}
        </span>
        <span className="pb-1 text-lg font-bold md:text-2xl">
          {stat.unit}
        </span>
      </div>
      <p className="mt-3 text-sm text-[#222] md:text-base">{stat.label}</p>
    </div>
  );
}

export function StatsCounter({
  title,
  stats,
  footnote,
}: {
  title: string;
  stats: StatItem[];
  footnote?: string;
}) {
  return (
    <div className="bg-[#F7F8FC] px-5 py-20 text-center md:py-[100px]">
      <p className="text-lg font-medium text-[#222] md:text-xl">
        {title.split("\n").map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </p>
      <div className="mx-auto mt-10 flex max-w-[900px] flex-wrap justify-center gap-8 md:mt-[60px] lg:gap-0">
        {stats.map((stat) => (
          <Counter key={stat.label} stat={stat} />
        ))}
      </div>
      {footnote && <p className="mt-10 text-sm text-[#999]">{footnote}</p>}
    </div>
  );
}
