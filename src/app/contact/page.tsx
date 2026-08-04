import type { Metadata } from "next";
import { SubPageHero } from "@/components/subpages/SubPageHero";
import { SectionTitle } from "@/components/subpages/SectionTitle";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "사업문의 | 주식회사 메타링크",
  description:
    "문의를 남겨주시면 담당자가 24시간 이내에 빠르게 답변드립니다. 전화 02-6941-1702 · help@mtlink.kr (AI사업 ai@mtlink.kr)",
};

const CONTACT_INFO: { k: string; v: React.ReactNode }[] = [
  { k: "TEL", v: "02-6941-1702" },
  {
    k: "EMAIL",
    v: (
      <>
        help@mtlink.kr
        <br />
        <span className="text-[#999]">(AI사업 문의 ai@mtlink.kr)</span>
      </>
    ),
  },
  {
    k: "운영시간",
    v: (
      <>
        평일 10:00 – 19:00
        <br />
        <span className="text-[#999]">(주말·공휴일 휴무)</span>
      </>
    ),
  },
  { k: "주소", v: "서울특별시 강남구 강남대로114길 19, 3층 (논현동)" },
];

export default function ContactPage() {
  return (
    <>
      <SubPageHero
        title={"Start Your\nSuccessful Business"}
        description="문의를 남겨주시면 담당자가 24시간 이내에 빠르게 답변드립니다."
        bgImage="/images/subpages/svisual-inquiry.jpg"
      />

      {/* 인트로 */}
      <section className="mx-auto max-w-[900px] px-5 py-16 text-center md:px-10 md:py-20">
        <p className="text-2xl font-bold leading-[1.5] text-[#222] text-balance md:text-[32px] md:leading-[1.45]">
          작은 문의도 괜찮습니다. 프로젝트 아이디어부터 견적·기술 상담까지
          메타링크 담당자가 함께 답을 찾아드립니다.
        </p>
      </section>

      {/* 문의하기 */}
      <section className="bg-[#F7F8FC]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>문의하기</SectionTitle>
          <div className="mt-[60px] grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
            {/* 연락처 정보 */}
            <div>
              <dl className="flex flex-col divide-y divide-[#EBEBEB] border-t-2 border-[#222]">
                {CONTACT_INFO.map((row) => (
                  <div key={row.k} className="flex gap-6 py-6">
                    <dt className="w-[80px] shrink-0 font-bold text-brand">
                      {row.k}
                    </dt>
                    <dd className="text-[15px] leading-[24px] text-[#222]">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* 문의 폼 */}
            <div className="rounded-2xl border border-[#EBEBEB] bg-white p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
