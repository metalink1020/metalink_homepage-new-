import { SectionTitle } from "@/components/subpages/SectionTitle";

interface Award {
  date: string;
  org: string;
  text: string;
}

// ▼▼▼ 데이터 교체 지점: 메타링크 인증·수상 내역 ▼▼▼
const AWARDS: Award[] = [
  { date: "2018.11", org: "국방전산정보원", text: "정보화업무 유공\n(원장표창)" },
  { date: "2019.11", org: "국방부", text: "정보화업무 유공\n(장관표창)" },
  {
    date: "2026.03",
    org: "ISO/IEC 42001:2023",
    text: "AI 경영시스템\n인증심사원 자격 취득",
  },
  {
    date: "2026.03",
    org: "한성대학교",
    text: "가족회사 협약 MOU\n(산학협력·인재양성)",
  },
  {
    date: "2026.04",
    org: "고려대학교",
    text: "산학협력 MOU\n(국방 AI·안보융합기술)",
  },
  {
    date: "2026.05",
    org: "서티라이프",
    text: "전략적 업무 제휴 MOU\n(의료 특화 AI 서비스)",
  },
  {
    date: "2026.07",
    org: "스마트로",
    text: "전략적 업무 제휴 MOU\n(디지털 플랫폼·결제)",
  },
];
// ▲▲▲ 데이터 교체 지점 끝 ▲▲▲

export function AwardsCarousel() {
  return (
    <section className="overflow-hidden px-5 py-20 md:px-10 md:py-[100px]">
      <SectionTitle>인증 및 수상</SectionTitle>

      <div className="relative mt-[60px] w-full overflow-hidden">
        <div className="flex w-max gap-10 animate-marquee-left hover:[animation-play-state:paused]">
          {[...AWARDS, ...AWARDS].map((award, i) => (
            <div
              key={`${award.org}-${i}`}
              className="flex h-[280px] w-[220px] shrink-0 flex-col items-center rounded-[20px] bg-[#4A70FC] px-6 py-11 text-center text-white"
            >
              <span className="text-base font-bold">{award.org}</span>
              <span className="my-4 block h-px w-[24px] bg-white/60" aria-hidden />
              <p className="whitespace-pre-line text-sm leading-[1.6]">
                {award.text}
              </p>
              <span className="mt-auto pt-5 text-xs text-white/80">
                {award.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
