import type { Metadata } from "next";
import { SubPageHero } from "@/components/subpages/SubPageHero";
import NewsBoard from "./NewsBoard";

export const metadata: Metadata = {
  title: "회사소식 | 주식회사 메타링크",
  description: "메타링크의 사업 성과와 새로운 소식을 전해드립니다.",
};

export default function NewsPage() {
  return (
    <>
      <SubPageHero
        title="Newsroom"
        description="메타링크의 사업 성과와 새로운 소식을 전해드립니다."
        bgImage="/images/subpages/svisual-news.jpg"
      />
      <NewsBoard />
    </>
  );
}
