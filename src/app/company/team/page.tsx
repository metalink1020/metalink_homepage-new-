import type { Metadata } from "next";
import { SubPageHero } from "@/components/subpages/SubPageHero";
import { SectionTitle } from "@/components/subpages/SectionTitle";
import { InquiryCTA } from "@/components/subpages/InquiryCTA";

export const metadata: Metadata = {
  title: "임직원 소개 | 주식회사 메타링크",
  description:
    "기술과 사람을 잇는 메타링크의 사람들. 대표이사 연정욱과 SMB사업본부 임직원을 소개합니다.",
};

interface Member {
  label: string; // 카드 세로 라벨(영문 부서)
  dept: string; // 부서·팀
  name: string;
  title: string; // 직함
  photo: string;
  career: string[];
}

const MEMBERS: Member[] = [
  {
    label: "CEO",
    dept: "대표이사",
    name: "연정욱",
    title: "대표이사",
    photo: "/images/team/yeon-jeongwook.jpg",
    career: [
      "前) 국정원·국방부·iM금융그룹 근무",
      "現) 한국국방획득혁신학회 이사",
      "現) 고려대학교 안보기술융합연구실 선임전문연구원",
    ],
  },
  {
    label: "AI BUSINESS",
    dept: "SMB사업본부",
    name: "김현석",
    title: "본부장",
    photo: "/images/team/kim-hyeonseok.jpg",
    career: [
      "前) 리뉴메디칼 마케팅 기획 총괄",
      "前) 피알엔젤 데이터 분석 및 브랜드 기획 실장",
      "現) 메타링크 SMB사업본부 본부장",
    ],
  },
  {
    label: "DEVELOPER",
    dept: "SMB사업본부 설치지원팀",
    name: "김진배",
    title: "팀장",
    photo: "/images/team/kim-jinbae.jpg",
    career: ["現) 메타링크 SMB사업본부 설치지원팀 팀장"],
  },
  {
    label: "SALES SUPPORT",
    dept: "SMB사업본부 영업지원팀",
    name: "이봄",
    title: "팀장",
    photo: "/images/team/lee-bom.jpg",
    career: [
      "前) 리뉴메디칼 영업지원",
      "前) 제노팜 경영지원 총괄",
      "現) 메타링크 SMB사업본부 영업지원팀 팀장",
    ],
  },
  {
    label: "OPERATION",
    dept: "SMB사업본부 운영지원팀",
    name: "이한나",
    title: "팀장",
    photo: "/images/team/lee-hanna.jpg",
    career: [
      "치과위생사 면허 / 치과건강보험청구사 2급 보유",
      "병원서비스 코디네이터 수료",
      "現) 메타링크 SMB사업본부 운영지원팀 팀장",
    ],
  },
  {
    label: "MARKETING",
    dept: "SMB사업본부 마케팅팀",
    name: "서해리",
    title: "팀장",
    photo: "/images/team/seo-haeri.jpg",
    career: [
      "美 상담심리학 석사 / 전문 코칭 자격 보유",
      "前) 유학 컨설팅 기관 운영 총괄",
      "現) 메타링크 SMB사업본부 마케팅팀 팀장",
    ],
  },
];

function TeamCard({ member }: { member: Member }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#EBEBEB] bg-white">
      {/* 사진 영역 */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white">
        {/* 인물 사진: 기본 흑백 → 호버 시 컬러 */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
          style={{ backgroundImage: `url('${member.photo}')` }}
        />
        {/* 세로 영문 역할 라벨 */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-3 top-4 z-10 select-none font-bold uppercase leading-none tracking-[2px] text-brand/25 [writing-mode:vertical-rl] md:left-4 md:top-5 md:text-[34px]"
          style={{ fontSize: "24px" }}
        >
          {member.label}
        </span>
      </div>

      {/* 정보 영역 */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs font-bold tracking-[1px] text-brand">
          {member.dept}
        </p>
        <h3 className="mt-2 text-lg font-bold text-[#222] md:text-xl">
          {member.name}
          <span className="ml-2 text-[14px] font-medium text-[#666]">
            {member.title}
          </span>
        </h3>
        <ul className="mt-4 flex flex-col gap-1.5">
          {member.career.map((line) => (
            <li
              key={line}
              className="flex gap-2 text-[13px] leading-[20px] text-[#666] md:text-[14px] md:leading-[22px]"
            >
              <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" />
              <span className="text-pretty">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <SubPageHero
        title="Our People"
        description="기술과 사람을 잇는 힘, 메타링크의 사람들을 소개합니다."
        bgImage="/images/subpages/svisual-about.jpg"
      />

      {/* 인트로 */}
      <section className="mx-auto max-w-[900px] px-5 py-16 text-center md:px-10 md:py-20">
        <p className="text-2xl font-bold leading-[1.5] text-[#222] text-balance md:text-[32px] md:leading-[1.45]">
          기술보다 먼저 사람을 생각하는 전문가들이
          <br className="hidden md:block" /> 고객의 성장을 함께 만들어갑니다.
        </p>
      </section>

      {/* 임직원 그리드 */}
      <section className="bg-[#F7F8FC]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>임직원 소개</SectionTitle>
          <div className="mt-[60px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERS.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <InquiryCTA
        heading="메타링크와 함께 성장할 동료를 찾습니다"
        buttonLabel="채용·협업 문의"
      />
    </>
  );
}
