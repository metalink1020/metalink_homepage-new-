import type { Metadata } from "next";
import { BrainCircuit, Server, Megaphone, Layers } from "lucide-react";
import { SubPageHero } from "@/components/subpages/SubPageHero";
import { StatsCounter } from "@/components/subpages/StatsCounter";
import { SectionTitle } from "@/components/subpages/SectionTitle";
import { ClientNames } from "@/components/subpages/ClientNames";
import { HistoryTimeline } from "./HistoryTimeline";
import { AwardsCarousel } from "./AwardsCarousel";

export const metadata: Metadata = {
  title: "회사소개 | 주식회사 메타링크",
  description:
    "메타링크는 기술과 사람을 잇는 IT·마케팅 전문기업입니다. AI 채팅봇·음성봇, 클라우드형 IPCC, RAG/LLM 기반 생성형 AI, 기업 메시징과 IT SI/SM·디지털 마케팅까지 하나의 흐름으로 연결합니다.",
};

export default function AboutPage() {
  return (
    <>
      <SubPageHero
        title={"Your Innovative\nAI Partner"}
        description={"기술과 사람을 잇고, 성과로 증명하는 AI·IT·마케팅 전문기업입니다."}
        bgImage="/images/subpages/svisual-about.jpg"
      />

      {/* 인트로 */}
      <section className="mx-auto max-w-[900px] px-5 py-16 text-center md:px-10 md:py-[100px]">
        <p className="text-balance text-2xl font-bold leading-[1.5] text-[#222] md:text-[32px] md:leading-[1.45]">
          기술보다 먼저, 왜? 누구를 위한 기술인지 생각합니다.
        </p>
      </section>

      {/* 실적 통계 */}
      <StatsCounter
        title={"이미 118곳이 선택한\n검증된 AI 파트너"}
        stats={[
          { value: "118", unit: "곳", label: "누적 계약 거래처" },
          { value: "196", unit: "건", label: "누적 상품 공급" },
          { value: "20", unit: "여 종", label: "서비스 라인업" },
        ]}
        footnote="※ 2026년 8월 기준"
      />

      {/* 핵심 사업 영역 */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>핵심 사업 영역</SectionTitle>
          <div className="mt-[60px] flex flex-wrap justify-center gap-x-10 gap-y-14 md:gap-x-[70px]">
            {[
              {
                Icon: BrainCircuit,
                title: "AI",
                lines: ["AI 콜봇·챗봇·Agent·GRC", "고객 접점 자동화"],
              },
              {
                Icon: Server,
                title: "SI / SM",
                lines: ["시스템 구축·운영", "홈페이지·쇼핑몰 구축·운영"],
              },
              {
                Icon: Megaphone,
                title: "MARKETING",
                lines: ["SEO·AEO·GEO 기반", "통합 디지털 마케팅"],
              },
              {
                Icon: Layers,
                title: "ETC",
                lines: ["문자·PG/VAN·클라우드", "비즈니스 인프라 연결"],
              },
            ].map(({ Icon, title, lines }) => (
              <div key={title} className="w-[200px] text-center">
                <Icon className="mx-auto h-14 w-14 text-brand" strokeWidth={1.5} />
                <h3 className="relative mt-6 pb-4 text-xl font-bold text-[#222] after:absolute after:bottom-0 after:left-1/2 after:block after:h-px after:w-[24px] after:-translate-x-1/2 after:bg-[#222]">
                  {title}
                </h3>
                <p className="mt-5 text-[15px] leading-[26px] text-[#666]">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 고객사 */}
      <section className="bg-[#F7F8FC]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>주요 협력사</SectionTitle>
          <div className="mt-[60px]">
            <ClientNames
              names={[
                "카카오엔터프라이즈",
                "DKT",
                "네이버클라우드",
                "세종텔레콤",
                "페르소나AI",
                "42마루",
                "KP모바일",
                "AWS코리아",
                "스마트로",
                "고려대학교",
                "한성대학교",
                "베스핀글로벌",
              ]}
            />
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <HistoryTimeline />

      {/* 인증 및 수상 */}
      <AwardsCarousel />
    </>
  );
}
