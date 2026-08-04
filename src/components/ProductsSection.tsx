"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardData {
  name: string;
  lines: [string, string];
  href: string;
}

const PRODUCT_CARDS: ProductCardData[] = [
  {
    name: "검증된 기술",
    lines: ["의료·공공·금융 등 다양한 산업 현장에서", "AI를 직접 구축·운영해 온 실전 경험"],
    href: "/company/about",
  },
  {
    name: "연결된 흐름",
    lines: ["AI·시스템·마케팅을 따로 맡기지 않고", "기획부터 운영까지 하나로 연결하는 설계"],
    href: "/company/about",
  },
  {
    name: "지속 파트너십",
    lines: ["구축에서 끝내지 않고 운영·고도화까지", "성과를 함께 키우는 장기 파트너"],
    href: "/company/about",
  },
];

interface ProductCardProps {
  card: ProductCardData;
  index: number;
  inView: boolean;
  cardRef?: (el: HTMLAnchorElement | null) => void;
  className?: string;
}

function ProductCard({ card, index, inView, cardRef, className }: ProductCardProps) {
  return (
    <a
      ref={cardRef}
      href={card.href}
      data-card-index={index}
      className={cn(
        "group relative flex w-[380px] max-w-[350px] shrink-0 flex-col justify-between overflow-hidden rounded-[20px] bg-[#1540DB] p-10 px-8 pt-[60px] pb-[60px]",
        "h-[65vw] max-h-[450px] lg:h-[450px] lg:max-h-none",
        "transition-transform duration-1000 ease-out [transform-origin:center_top]",
        inView
          ? "lg:translate-y-0 lg:[transform:translate(0,0)]"
          : "lg:[transform:translateY(40vh)_rotateX(-30deg)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-transparent"
      />

      <div className="relative z-10">
        <h3 className="font-sans text-[36px] font-bold leading-[54px] text-white">
          {card.name}
        </h3>
        <p className="mt-[18px] text-[18px] font-semibold leading-[28px] text-white">
          {card.lines[0]}
          <br />
          {card.lines[1]}
        </p>
      </div>

      <div className="relative z-10 flex justify-end">
        <span className="relative flex h-12 w-12 items-center justify-center">
          <span className="absolute inset-0 scale-100 rounded-full bg-white opacity-[.26] transition-transform duration-300 group-hover:scale-150" />
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <Plus className="h-5 w-5 text-[#1540DB]" strokeWidth={2.5} />
          </span>
        </span>
      </div>
    </a>
  );
}

export default function ProductsSection() {
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const indexAttr = (entry.target as HTMLElement).dataset.cardIndex;
          if (indexAttr === undefined) return;
          const index = Number(indexAttr);
          setVisibleCards((prev) => {
            if (prev.has(index)) return prev;
            const next = new Set(prev);
            next.add(index);
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto mt-[120px] mb-[150px] max-w-[1400px] px-6 xl:mt-[160px] xl:mb-[200px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr] lg:gap-12">
        <div className="lg:sticky lg:top-[150px] lg:self-start">
          <h2 className="text-2xl font-bold leading-tight text-foreground md:text-[28px] lg:text-[30px] xl:text-[35px]">
            기술보다 먼저,
            <br />
            사람과 성과를 생각합니다.
          </h2>
        </div>

        <div>
          {/* Desktop: 좌 2장(위·아래) + 우 1장(중앙) */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-6">
            <div className="flex flex-col gap-10">
              {[0, 2].map((index) => (
                <ProductCard
                  key={PRODUCT_CARDS[index].name}
                  card={PRODUCT_CARDS[index]}
                  index={index}
                  inView={visibleCards.has(index)}
                  cardRef={(el) => {
                    cardRefs.current[index] = el;
                  }}
                />
              ))}
            </div>
            <div className="flex justify-start">
              <ProductCard
                card={PRODUCT_CARDS[1]}
                index={1}
                inView={visibleCards.has(1)}
                cardRef={(el) => {
                  cardRefs.current[1] = el;
                }}
              />
            </div>
          </div>

          {/* Mobile/tablet: horizontal swipe carousel */}
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 lg:hidden">
            {PRODUCT_CARDS.map((card, index) => (
              <ProductCard
                key={card.name}
                card={card}
                index={index}
                inView
                className="w-[85vw] max-w-[350px] snap-start"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
