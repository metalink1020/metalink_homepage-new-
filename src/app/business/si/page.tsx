import type { Metadata } from "next";
import { Server, Settings, Cloud } from "lucide-react";
import { SubPageHero } from "@/components/subpages/SubPageHero";
import { SectionTitle } from "@/components/subpages/SectionTitle";
import { ServiceCards } from "@/components/subpages/ServiceCards";
import { ClientNames } from "@/components/subpages/ClientNames";
import { InquiryCTA } from "@/components/subpages/InquiryCTA";

export const metadata: Metadata = {
  title: "IT 시스템 구축·운영 (SI/SM) | 사업분야 | 메타링크",
  description:
    "메타링크는 산업별 특화 SI 구축과 365일 무중단 SM 운영관리, 클라우드 매니지드(MSP)까지 원스톱 IT 서비스를 제공합니다.",
};

export default function BusinessSIPage() {
  return (
    <>
      <SubPageHero
        title="SI / SM"
        description="기획·구축부터 365일 무중단 운영까지 IT 시스템의 전 과정을 지원합니다."
        bgImage="/images/subpages/svisual-compliance.jpg"
      />

      {/* 인트로 */}
      <section className="mx-auto max-w-[900px] px-5 py-16 text-center md:px-10 md:py-20">
        <p className="text-2xl font-bold leading-[1.5] text-[#222] text-balance md:text-[32px] md:leading-[1.45]">
          메타링크는 비즈니스 환경을 정밀하게 분석해 산업별 특화 시스템 구축(SI)과
          365일 무중단 운영관리(SM)를 제공합니다.
        </p>
      </section>

      {/* 서비스 구성 */}
      <section className="bg-[#F7F8FC]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>서비스 구성</SectionTitle>
          <div className="mt-[60px]">
            <ServiceCards
              items={[
                {
                  icon: Server,
                  role: "업종별 맞춤 구축",
                  title: "시스템 구축",
                  desc: "요구분석부터 개발·이행까지 업종 특화 시스템을 구축합니다.",
                },
                {
                  icon: Settings,
                  role: "365일 무중단",
                  title: "시스템 유지보수",
                  desc: "365일 모니터링과 선제적 장애 예방으로 무중단 운영합니다.",
                },
                {
                  icon: Cloud,
                  role: "클라우드 매니지드",
                  title: "MSP",
                  desc: "클라우드 인프라의 구축·운영·모니터링을 대행 관리합니다.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 주요 고객사 */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>주요 고객사</SectionTitle>
          <div className="mt-[60px]">
            <ClientNames
              names={[
                "국가정보원",
                "iM캐피탈",
              ]}
            />
          </div>
        </div>
      </section>

      <InquiryCTA
        heading="시스템 구축·운영이 필요하신가요?"
        buttonLabel="IT 서비스 도입 문의"
      />
    </>
  );
}
