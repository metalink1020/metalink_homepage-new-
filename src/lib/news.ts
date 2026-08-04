export type NewsTag = "보도자료" | "사업소식" | "공지사항";

export interface NewsItem {
  no: number;
  date: string; // YYYY-MM-DD
  title: string;
  tag: NewsTag;
  notice?: boolean; // 게시판에서 '공지' 뱃지 표시
}

// 홈 미리보기와 /news 게시판이 공유하는 단일 소스 (최신순)
export const NEWS_ITEMS: NewsItem[] = [
  {
    no: 9,
    date: "2026-07-17",
    title: "메타링크, 스마트로와 디지털 플랫폼·결제 서비스 협력 업무협약(MOU) 체결",
    tag: "보도자료",
  },
  {
    no: 8,
    date: "2026-04-22",
    title: "메타링크·코드라이브, 기업 맞춤형 AI 챗봇 공동 개발 협약 체결",
    tag: "보도자료",
  },
  {
    no: 7,
    date: "2026-04-07",
    title: "메타링크, 고려대학교 기술경영전문대학원과 국방분야 산학협력 MOU 체결",
    tag: "보도자료",
  },
  {
    no: 6,
    date: "2026-03-17",
    title: "메타링크, 한성대학교 산학협력단과 산학협력 가족회사 협약(MOU) 체결",
    tag: "보도자료",
  },
  {
    no: 0,
    date: "2026-02-17",
    title: "메타링크 본사 사무실 이전 안내",
    tag: "공지사항",
    notice: true,
  },
  {
    no: 5,
    date: "2026-02-17",
    title: "메타링크, 병무청 AI 워크메이트(챗봇) 구축 사업 수주",
    tag: "사업소식",
  },
  {
    no: 4,
    date: "2026-02-10",
    title: "통합 디지털 마케팅(AEO·GEO·SEO) 서비스 정식 출시",
    tag: "사업소식",
  },
  {
    no: 3,
    date: "2026-01-15",
    title: "AI 콜봇·챗봇(AICC)·클라우드 IPCC 서비스 라인업 확대",
    tag: "공지사항",
  },
  {
    no: 2,
    date: "2025-10-20",
    title: "주식회사 메타링크 법인 설립",
    tag: "공지사항",
    notice: true,
  },
];
