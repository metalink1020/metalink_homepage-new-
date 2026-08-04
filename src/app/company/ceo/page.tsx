import type { Metadata } from "next";
import Image from "next/image";
import { SubPageHero } from "@/components/subpages/SubPageHero";

export const metadata: Metadata = {
  title: "CEO 소개 | 주식회사 메타링크",
  description:
    "메타링크 대표이사 연정욱의 CEO 인사말. 사람과 기술, 비즈니스와 미래를 잇는 IT·마케팅 파트너 메타링크를 소개합니다.",
};

const PARAGRAPHS = [
  "안녕하십니까, 주식회사 메타링크 대표이사 연정욱입니다.",
  "메타링크는 사람과 기술을 잇는 AI·IT·마케팅 전문기업입니다. 우리는 시스템을 만드는 회사가 아니라, 기술을 통해 사람의 일과 기업의 성과를 변화시키는 파트너를 지향합니다. 최신 기술을 앞세우기보다 왜 필요한지, 누구를 위한 기술인지를 먼저 묻고, 사람이 실제로 체감하는 변화를 기술의 기준으로 삼습니다.",
  "이 기준 위에서 메타링크는 AI 콜봇·챗봇과 클라우드형 IPCC, 사내 데이터를 안전하게 활용하는 RAG/LLM, AI를 신뢰할 수 있게 통제·운영하는 AI 거버넌스(GRC)까지, 고객 접점과 업무 현장을 지능적으로 자동화하는 AI 솔루션을 제공합니다.",
  "기술과 마케팅을 분리하지 않는 것도 메타링크의 방식입니다. IT 시스템 구축·운영(SI/SM), 홈페이지·블로그·쇼핑몰 구축, SEO·AEO·GEO 기반의 통합 디지털 마케팅을 하나의 흐름으로 연결해 시스템과 콘텐츠, 운영과 성과가 끊기지 않도록 설계합니다.",
  "이미 다수의 고객사가 메타링크를 선택했고, AI 경영시스템 국제표준(ISO/IEC 42001) 인증과 국방·공공 분야의 수행 경험, 카카오엔터프라이즈·네이버클라우드·AWS 등과의 협력, 고려대학교·한성대학교와의 산학협력을 통해 기술과 신뢰를 함께 쌓아가고 있습니다.",
  "기술은 계속 진화하지만, 그 기술을 사용하는 주체는 언제나 사람입니다. 메타링크는 사람과 기술, 비즈니스와 미래를 잇는 AI·IT·마케팅 파트너로서 고객의 성장에 끝까지 함께하겠습니다.",
  "감사합니다.",
];

const BIO = [
  { period: "前", text: "국정원·국방부·iM금융그룹 근무" },
  { period: "現", text: "한국국방획득혁신학회 이사" },
  { period: "現", text: "고려대학교 안보기술융합연구실 선임전문연구원" },
  { period: "現", text: "주식회사 메타링크 대표이사" },
];

export default function CeoPage() {
  return (
    <>
      <SubPageHero
        title="CEO Message"
        description="사람과 기술, 비즈니스와 미래를 잇는 IT·마케팅 파트너 메타링크입니다."
        bgImage="/images/subpages/svisual-subsidiary.jpg"
      />

      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_380px] lg:gap-20">
          {/* 좌: 인사말 */}
          <div>
            <h2 className="text-[26px] font-bold leading-[1.4] text-[#222] md:text-[38px] md:leading-[1.35]">
              기술을 넘어 가치를 연결하는
              <br />
              <span className="text-brand">AI 파트너가 되겠습니다.</span>
            </h2>

            <div className="mt-10 flex flex-col gap-6">
              {PARAGRAPHS.map((text, i) => (
                <p
                  key={i}
                  className="text-pretty text-[15px] leading-[30px] text-[#666] md:text-base"
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <span
                style={{ fontFamily: "'Alex Brush', cursive" }}
                className="block text-[56px] leading-none text-[#222] md:text-[64px]"
              >
                Jeongwook Yeon
              </span>
              <p className="mt-3 text-[15px] text-[#666]">
                연정욱 <span className="text-[#CCC]">·</span> 주식회사 메타링크 대표이사
              </p>
            </div>
          </div>

          {/* 우: 사진 + 약력 */}
          <div>
            {/* 대표 사진 */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#EBEBEB] bg-[#F7F8FC]">
              <Image
                src="/images/ceo.jpg"
                alt="메타링크 대표이사 연정욱"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 380px, 100vw"
              />
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {BIO.map((item) => (
                <li
                  key={item.text}
                  className="flex gap-2 text-[15px] leading-[24px] text-[#222]"
                >
                  <span aria-hidden className="text-brand">
                    •
                  </span>
                  <span>
                    <span className="font-bold text-brand">{item.period})</span>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
