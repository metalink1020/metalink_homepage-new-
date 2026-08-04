"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BusinessPanel {
  caption: string;
  heading: string;
  subtitle: string;
  href: string;
  base: string;
  hover: string;
  mobile: string;
}

const PANELS: BusinessPanel[] = [
  {
    caption: "AI",
    heading: "AI 솔루션",
    subtitle: "AI 콜봇·챗봇, 클라우드 IPCC, RAG/LLM, AI 거버넌스(GRC)로 고객 접점을 지능적으로 자동화",
    href: "/business/ai",
    base: "/images/m3_business01.jpg",
    hover: "/images/m3_business01_hover.jpg",
    mobile: "/images/m3_business01_m.jpg",
  },
  {
    caption: "SI / SM",
    heading: "IT 시스템 구축·운영",
    subtitle: "기획·구축부터 365일 무중단 운영관리, 홈페이지·쇼핑몰 구축까지 원스톱 지원",
    href: "/business/si",
    base: "/images/m3_business03.jpg",
    hover: "/images/m3_business03_hover.jpg",
    mobile: "/images/m3_business03_m.jpg",
  },
  {
    caption: "Marketing",
    heading: "통합 디지털 마케팅",
    subtitle: "SEO·AEO·GEO 홈페이지부터 검색 상위노출, 로컬·오프라인 마케팅까지 전환 설계",
    href: "/business/marketing",
    base: "/images/m3_business04.jpg",
    hover: "/images/m3_business04_hover.jpg",
    mobile: "/images/m3_business04_m.jpg",
  },
  {
    caption: "ETC",
    heading: "문자 · PG/VAN · 클라우드",
    subtitle: "KP모바일(문자)·스마트로(PG/VAN)·AWS(클라우드) 등 검증된 파트너십으로 인프라를 연결",
    href: "/business/etc",
    base: "/images/m3_business02.jpg",
    hover: "/images/m3_business02_hover.jpg",
    mobile: "/images/m3_business02_m.jpg",
  },
];

export default function BusinessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-black">
      <div className="relative px-4 pt-[64px] pb-[48px] text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-3xl -translate-x-1/2 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 70%)",
          }}
          aria-hidden="true"
        />
        <h2 className="relative text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          메타링크가 연결하는 네 가지 비즈니스
        </h2>
      </div>

      {/* Desktop / tablet-large: hover accordion */}
      <div className="hidden lg:flex lg:h-[calc(100vh-200px)] lg:min-h-[420px] lg:w-full">
        {PANELS.map((panel, index) => {
          const isHovered = hoveredIndex === index;
          const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <a
              key={panel.href}
              href={panel.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "group relative block h-full overflow-hidden transition-[flex-basis] duration-300 ease-linear",
                hoveredIndex === null
                  ? "flex-[0_0_25%]"
                  : isHovered
                  ? "flex-[0_0_52%]"
                  : "flex-[0_0_16%]"
              )}
            >
              <Image
                src={panel.base}
                alt={panel.subtitle}
                fill
                className="object-cover object-center"
                sizes="52vw"
              />
              <Image
                src={panel.hover}
                alt=""
                fill
                className={cn(
                  "object-cover object-center opacity-0 transition-opacity duration-300",
                  isHovered && "opacity-100"
                )}
                sizes="52vw"
                aria-hidden="true"
              />

              {isDimmed && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              )}

              <div
                className="absolute left-0 right-0 flex flex-col items-center px-[66px]"
                style={{ top: "40%" }}
              >
                <span
                  className={cn(
                    "text-center text-2xl font-semibold text-white opacity-30 transition-opacity duration-200",
                    isDimmed && "text-lg",
                    isHovered && "opacity-0"
                  )}
                >
                  {panel.caption}
                </span>

                <span
                  className={cn(
                    "h-0 w-full text-left text-[50px] font-bold leading-[1.2] text-white opacity-0 transition-all duration-300",
                    isHovered && "h-[64px] opacity-100 delay-200"
                  )}
                >
                  {panel.heading}
                </span>

                <span
                  className={cn(
                    "mt-5 h-0 w-full text-left text-[22px] leading-[1.5] text-white opacity-0 transition-all duration-300",
                    isHovered && "h-auto opacity-100 delay-200"
                  )}
                >
                  {panel.subtitle}
                </span>
              </div>

              <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4">
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full opacity-30 transition-opacity duration-200",
                    isHovered && "opacity-0"
                  )}
                >
                  <Image src="/images/m3_arrow.svg" alt="" width={40} height={40} />
                </span>

                <span
                  className={cn(
                    "flex h-0 items-center justify-center overflow-hidden opacity-0 transition-all duration-300",
                    isHovered && "h-10 opacity-100 delay-200"
                  )}
                >
                  <Image src="/images/m3_arrow.svg" alt="" width={40} height={40} />
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Mobile / tablet: stacked, no hover-accordion */}
      <div className="flex flex-col lg:hidden">
        {PANELS.map((panel) => (
          <a
            key={panel.href}
            href={panel.href}
            className="relative block h-[220px] w-full overflow-hidden sm:h-[280px]"
          >
            <Image
              src={panel.mobile}
              alt={panel.subtitle}
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-center px-8">
              <span className="text-lg font-semibold text-white">
                {panel.caption}
              </span>
              <span className="text-3xl font-bold text-white">
                {panel.heading}
              </span>
              <span className="hidden text-lg text-white">
                {panel.subtitle}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
