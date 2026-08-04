import Link from "next/link";
import { NEWS_ITEMS } from "@/lib/news";

export default function HomeNews() {
  const items = NEWS_ITEMS.slice(0, 3);
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 md:py-[100px]">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#222] md:text-[40px]">회사소식</h2>
          <p className="mt-4 text-base text-[#666] md:text-lg">
            계약·수주 성과부터 신규 서비스까지, 메타링크의 걸음을 전합니다.
          </p>
        </div>
        <Link
          href="/news"
          className="inline-flex h-[50px] w-fit items-center justify-center rounded-full border border-[#ddd] px-7 text-sm font-semibold text-[#222] transition hover:border-brand hover:text-brand"
        >
          소식 전체 보기
        </Link>
      </div>

      <ul className="mt-10 border-t-2 border-[#222]">
        {items.map((item) => (
          <li key={item.no} className="border-b border-[#EBEBEB]">
            <Link
              href="/news"
              className="group flex flex-col gap-2 py-6 md:flex-row md:items-center md:gap-8"
            >
              <span className="shrink-0 text-sm font-medium text-[#999] md:w-[120px]">
                {item.date.replace(/-/g, ".")}
              </span>
              <h3 className="flex-1 text-lg font-semibold text-[#222] transition group-hover:text-brand md:text-xl">
                {item.title}
              </h3>
              <span className="w-fit shrink-0 rounded-full bg-[#F7F8FC] px-3 py-1 text-xs font-semibold text-brand">
                {item.tag}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
