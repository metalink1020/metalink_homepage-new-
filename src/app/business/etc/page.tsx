import type { Metadata } from "next";
import { MessageSquareText, CreditCard, Cloud } from "lucide-react";
import { SubPageHero } from "@/components/subpages/SubPageHero";
import { SectionTitle } from "@/components/subpages/SectionTitle";
import { ServiceCards } from "@/components/subpages/ServiceCards";
import { ClientNames } from "@/components/subpages/ClientNames";
import { InquiryCTA } from "@/components/subpages/InquiryCTA";

export const metadata: Metadata = {
  title: "ETC (문자·PG/VAN·클라우드) | 사업분야 | 메타링크",
  description:
    "메타링크는 KP모바일(문자), 스마트로(PG/VAN), AWS(클라우드) 등 검증된 파트너십으로 기업 운영에 필요한 인프라를 연결합니다.",
};

export default function BusinessETCPage() {
  return (
    <>
      <SubPageHero
        title="ETC"
        description="문자·결제·클라우드까지 비즈니스에 필요한 인프라를 파트너십으로 연결합니다."
        bgImage="/images/subpages/svisual-authentication.jpg"
      />

      {/* 인트로 */}
      <section className="mx-auto max-w-[900px] px-5 py-16 text-center md:px-10 md:py-20">
        <p className="text-2xl font-bold leading-[1.5] text-[#222] text-balance md:text-[32px] md:leading-[1.45]">
          신뢰할 수 있는 파트너와 함께 문자, PG/VAN, 클라우드까지 기업 운영에
          필요한 인프라를 하나로 연결합니다.
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
                  icon: MessageSquareText,
                  title: "문자",
                  desc: "SMS·LMS·MMS 기업 메시징을 합리적 단가로 안정 발송합니다.",
                },
                {
                  icon: CreditCard,
                  title: "PG / VAN",
                  desc: "온·오프라인 카드결제와 VAN을 안전하게 연계·정산합니다.",
                },
                {
                  icon: Cloud,
                  title: "클라우드",
                  desc: "클라우드 인프라의 설계·구축·운영을 안정적으로 지원합니다.",
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
            <ClientNames names={["리뉴메디컬", "덴탈마스터"]} />
          </div>
        </div>
      </section>

      <InquiryCTA
        heading="필요한 인프라를 한 번에 연결하세요."
        buttonLabel="ETC 서비스 도입 문의"
      />
    </>
  );
}
