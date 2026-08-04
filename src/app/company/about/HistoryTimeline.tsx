"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MonthEntry {
  month: string;
  events: string[];
}

interface YearEntry {
  year: string;
  months: MonthEntry[];
}

// ▼▼▼ 데이터 교체 지점: 연혁(법인 설립 · MOU·업무협약) ▼▼▼
const HISTORY: YearEntry[] = [
  {
    year: "2026",
    months: [
      {
        month: "07",
        events: ["스마트로 전략적 업무 제휴 (디지털 플랫폼·결제 서비스 부문)"],
      },
      {
        month: "04",
        events: [
          "고려대학교 기술경영전문대학원 산학협력 (국방 AI·안보융합기술 부문)",
        ],
      },
      {
        month: "03",
        events: [
          "한성대학교 산학협력단 가족회사 협약 (산학협력·인재양성 부문)",
        ],
      },
    ],
  },
  {
    year: "2025",
    months: [
      {
        month: "10",
        events: ["주식회사 메타링크 법인 설립"],
      },
    ],
  },
];
// ▲▲▲ 데이터 교체 지점 끝 ▲▲▲

function YearGroup({ entry }: { entry: YearEntry }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => setActive(e.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {entry.months.map((m, mi) => (
        <div key={m.month} className="relative flex items-start py-6 first:pt-0">
          {/* 좌: 연도 라벨 (해당 연도 첫 월에만) */}
          <div className="w-[64px] shrink-0 pr-4 text-right md:w-[150px] md:pr-10">
            {mi === 0 && (
              <span
                className={cn(
                  "text-[26px] font-black leading-none transition-colors duration-300 md:text-[40px]",
                  active ? "text-[#1640DB]" : "text-[#222]"
                )}
              >
                {entry.year}
              </span>
            )}
          </div>

          {/* 세로선 위의 원형 마커 (해당 연도 첫 월에만) */}
          {mi === 0 && (
            <span className="absolute left-[64px] top-[4px] -translate-x-1/2 md:left-[150px] md:top-[8px]">
              <span
                className={cn(
                  "block h-[14px] w-[14px] rounded-full border-2 transition-colors duration-300",
                  active
                    ? "border-[#1640DB] bg-[#1640DB] shadow-[0_0_0_4px_rgba(22,64,219,0.15)]"
                    : "border-[#B9C0CE] bg-white"
                )}
              />
            </span>
          )}

          {/* 우: 월 + 이벤트 */}
          <div className="flex flex-1 gap-5 pl-8 md:gap-8 md:pl-14">
            <span className="w-7 shrink-0 text-base font-bold text-[#222] md:text-lg">
              {m.month}
            </span>
            <ul className="flex flex-col gap-2">
              {m.events.map((ev) => (
                <li
                  key={ev}
                  className="flex gap-2 text-sm leading-[24px] text-[#666] md:text-[15px]"
                >
                  <span aria-hidden className="text-[#B9C0CE]">
                    •
                  </span>
                  <span>{ev}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HistoryTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] py-20 md:py-[100px]">
      <Image
        src="/images/subpages/bg_about02.png"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover opacity-40"
      />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-5 md:flex-row md:gap-20 md:px-10">
        <div className="md:sticky md:top-[150px] md:h-fit md:w-[300px] md:self-start">
          <h2 className="text-3xl font-bold leading-[1.4] text-[#222] md:text-[40px]">
            메타링크가
            <br />
            걸어온 길
          </h2>
        </div>

        {/* 타임라인 (중앙 세로선) */}
        <div className="relative min-w-0 flex-1">
          <div
            className="absolute left-[64px] top-2 bottom-2 w-px bg-[#D5DAE3] md:left-[150px]"
            aria-hidden
          />
          {HISTORY.map((entry) => (
            <YearGroup key={entry.year} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
