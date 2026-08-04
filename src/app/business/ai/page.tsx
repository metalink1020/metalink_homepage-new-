import type { Metadata } from "next";
import {
  PhoneCall,
  MessagesSquare,
  Headset,
  BrainCircuit,
  Database,
  ShieldCheck,
} from "lucide-react";
import { SubPageHero } from "@/components/subpages/SubPageHero";
import { SectionTitle } from "@/components/subpages/SectionTitle";
import { ServiceCards } from "@/components/subpages/ServiceCards";
import { ClientNames } from "@/components/subpages/ClientNames";
import { InquiryCTA } from "@/components/subpages/InquiryCTA";

export const metadata: Metadata = {
  title: "AI 솔루션 | 사업분야 | 메타링크",
  description:
    "메타링크의 AI 솔루션 — AI 콜봇·챗봇, 클라우드형 IPCC, RAG/LLM, AI 거버넌스(GRC)까지. 상담 자동화부터 사내 지식 활용, AI 규제 대응까지 한 흐름으로 설계합니다.",
};

export default function BusinessAIPage() {
  return (
    <>
      <SubPageHero
        title="AI"
        description="고객 접점을 지능적으로 자동화하는 다양한 AI 커뮤니케이션 솔루션을 제공합니다."
        bgImage="/images/subpages/svisual-blockchain-ai.jpg"
      />

      {/* 인트로 */}
      <section className="mx-auto max-w-[900px] px-5 py-16 text-center md:px-10 md:py-20">
        <p className="text-2xl font-bold leading-[1.5] text-[#222] text-balance md:text-[32px] md:leading-[1.45]">
          상담 자동화부터 사내 지식 활용, AI 규제 대응까지 기업용 AI 도입의
          전 과정을 쉽고 안전하게 설계합니다.
        </p>
      </section>

      {/* AI 서비스 구성 */}
      <section className="bg-[#F7F8FC]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>AI 서비스 구성</SectionTitle>
          <div className="mt-[60px]">
            <ServiceCards
              items={[
                {
                  icon: PhoneCall,
                  role: "전화 상담 자동화",
                  title: "AI 콜봇",
                  desc: "STT·LLM·TTS로 고객 전화를 사람처럼 응대하고 스마트 콜백까지 지원합니다.",
                },
                {
                  icon: MessagesSquare,
                  role: "옴니채널 상담",
                  title: "AI 챗봇",
                  desc: "카카오·웹·톡톡을 하나로 묶어 24시간 다국어로 정확하게 답합니다.",
                },
                {
                  icon: Headset,
                  role: "구독형 컨택센터",
                  title: "클라우드형 IPCC",
                  desc: "IVR·녹취·호분배를 구축 없이 구독형으로 쓰는 클라우드 컨택센터입니다.",
                },
                {
                  icon: BrainCircuit,
                  role: "자율형 업무 에이전트",
                  title: "AI Agent",
                  desc: "사내 시스템과 연동해 스스로 계획·실행하는 자율형 업무 에이전트입니다.",
                },
                {
                  icon: ShieldCheck,
                  role: "AI 거버넌스",
                  title: "AI GRC",
                  desc: "AI 입력·응답과 도구 실행을 실시간 통제·감사하는 AI 거버넌스입니다.",
                },
                {
                  icon: Database,
                  role: "프라이빗 생성형 AI",
                  title: "RAG/LLM",
                  desc: "사내 데이터를 근거로 답하는 설치형 프라이빗 생성형 AI입니다.",
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
                "병무청",
                "기계설비건설공제조합",
                "덴티움",
                "하이니스",
                "ZEISS 코리아",
                "데이터드리븐",
                "서티라이프",
                "서울비디치과",
              ]}
            />
          </div>
        </div>
      </section>

      <InquiryCTA
        heading="AI 도입, 어디서부터 시작할지 고민되시나요?"
        buttonLabel="AI 솔루션 도입 문의"
      />
    </>
  );
}
