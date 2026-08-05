import type { Metadata } from "next";
import {
  Globe,
  TrendingUp,
  Store,
  Wrench,
  Search,
  MapPin,
  Link2,
  Clock,
  NotebookPen,
  Star,
  PhoneCall,
  Building2,
  Truck,
} from "lucide-react";
import { SubPageHero } from "@/components/subpages/SubPageHero";
import { SectionTitle } from "@/components/subpages/SectionTitle";
import { ServiceCards } from "@/components/subpages/ServiceCards";
import { ClientNames } from "@/components/subpages/ClientNames";
import { InquiryCTA } from "@/components/subpages/InquiryCTA";

export const metadata: Metadata = {
  title: "통합 디지털 마케팅 | 사업분야 | 메타링크",
  description:
    "검색·AI 답변엔진 최적화부터 검색 상위노출, 콘텐츠·리뷰 운영, 로컬·오프라인까지 — 메타링크의 통합 디지털 마케팅 서비스.",
};

export default function BusinessMarketingPage() {
  return (
    <>
      <SubPageHero
        title="Digital Marketing"
        description="검색부터 로컬·오프라인까지 전환 중심의 통합 디지털 마케팅을 제공합니다."
        bgImage="/images/subpages/svisual-payment.jpg"
      />

      {/* 인트로 */}
      <section className="mx-auto max-w-[900px] px-5 py-16 text-center md:px-10 md:py-20">
        <p className="text-2xl font-bold leading-[1.5] text-[#222] text-balance md:text-[32px] md:leading-[1.45]">
          노출이 아닌 전환을 설계합니다.
        </p>
      </section>

      {/* 웹·쇼핑몰 제작 */}
      <section className="bg-[#F7F8FC]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>웹·쇼핑몰 제작</SectionTitle>
          <div className="mt-[60px]">
            <ServiceCards
              items={[
                {
                  icon: Globe,
                  title: "SEO·AEO·GEO 홈페이지 제작",
                  desc: "검색엔진과 AI 답변엔진 양쪽에서 발견되는 홈페이지입니다.",
                },
                {
                  icon: Store,
                  title: "쇼핑몰 제작",
                  desc: "결제까지 매끄럽게 이어지는 반응형 커머스를 구축합니다.",
                },
                {
                  icon: Wrench,
                  title: "홈페이지 유지관리",
                  desc: "콘텐츠 수정·보안 업데이트를 월 단위로 안정 운영합니다.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 검색 상위노출 */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>검색 상위노출</SectionTitle>
          <div className="mt-[60px]">
            <ServiceCards
              cols={4}
              items={[
                {
                  icon: Search,
                  title: "네이버 웹문서 상위노출",
                  desc: "C-Rank·D.I.A. 로직에 맞춰 통합검색 노출을 강화합니다.",
                },
                {
                  icon: TrendingUp,
                  title: "구글 검색 상위노출",
                  desc: "E-E-A-T 기반 SEO로 구글 검색 상위 노출을 최적화합니다.",
                },
                {
                  icon: MapPin,
                  title: "네이버플레이스 상위노출",
                  desc: "스마트플레이스 최적화로 지역·지도 검색 상위에 노출합니다.",
                },
                {
                  icon: Link2,
                  title: "백링크 구축",
                  desc: "연관성 높은 고품질 외부링크로 도메인 신뢰도를 높입니다.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 콘텐츠·리뷰 운영 */}
      <section className="bg-[#F7F8FC]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>콘텐츠·리뷰 운영</SectionTitle>
          <div className="mt-[60px]">
            <ServiceCards
              items={[
                {
                  icon: Clock,
                  title: "오토포스팅",
                  desc: "검수한 콘텐츠를 예약·자동 발행해 채널을 꾸준히 갱신합니다.",
                },
                {
                  icon: NotebookPen,
                  title: "블로그 위탁운영",
                  desc: "기획·제작·발행·관리까지 브랜드 블로그를 대행 운영합니다.",
                },
                {
                  icon: Star,
                  title: "구글 리뷰 관리",
                  desc: "리뷰 적립과 응대로 지역 검색 평판을 지속 관리합니다.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 로컬·오프라인 */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>로컬·오프라인</SectionTitle>
          <div className="mt-[60px]">
            <ServiceCards
              items={[
                {
                  icon: PhoneCall,
                  title: "리마인드 콜 예약",
                  desc: "정기검진·재방문 시점을 안내해 예약과 재방문을 늘립니다.",
                },
                {
                  icon: Building2,
                  title: "엘리베이터 광고",
                  desc: "아파트·건물 엘리베이터의 생활동선 밀착형 OOH 광고입니다.",
                },
                {
                  icon: Truck,
                  title: "택배차량 래핑 광고",
                  desc: "배송 루트를 순회하는 이동식 옥외광고(OOH)입니다.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 주요 고객사 */}
      <section className="bg-[#F7F8FC]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
          <SectionTitle>주요 고객사</SectionTitle>
          <div className="mt-[60px]">
            <ClientNames
              names={["인천광역시", "한국국방획득혁신학회", "경상북도치과의사회"]}
            />
          </div>
        </div>
      </section>

      <InquiryCTA
        heading="노출을 넘어 전환이 필요하신가요?"
        buttonLabel="마케팅 서비스 도입 문의"
      />
    </>
  );
}
