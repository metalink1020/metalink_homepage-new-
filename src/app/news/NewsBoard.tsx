"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { NEWS_ITEMS, type NewsTag } from "@/lib/news";

const TABS: { label: string; value: "all" | NewsTag }[] = [
  { label: "전체보기", value: "all" },
  { label: "보도자료", value: "보도자료" },
  { label: "사업소식", value: "사업소식" },
  { label: "공지사항", value: "공지사항" },
];

export default function NewsBoard() {
  const [tab, setTab] = useState<"all" | NewsTag>("all");
  const [query, setQuery] = useState("");
  const [applied, setApplied] = useState("");

  const rows = useMemo(() => {
    return NEWS_ITEMS.filter((n) => tab === "all" || n.tag === tab).filter(
      (n) => applied === "" || n.title.includes(applied)
    );
  }, [tab, applied]);

  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-[100px]">
      {/* 탭 */}
      <div className="mb-[50px] flex flex-wrap items-center justify-center gap-3 md:gap-5">
        {TABS.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setTab(t.value)}
            className={cn(
              "h-[50px] w-[160px] rounded-[30px] border text-center font-medium leading-[48px] transition md:w-[200px]",
              tab === t.value
                ? "border-[#4A70FC] bg-[#4A70FC] text-white"
                : "border-[#ddd] text-[#222] hover:border-brand hover:text-brand"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 검색 */}
      <div className="mb-5 flex items-center gap-2.5 md:justify-end">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setApplied(query.trim());
          }}
          placeholder="검색어를 입력하세요."
          className="h-[50px] min-w-0 flex-1 rounded-[5px] border border-[#EBEBEB] px-4 text-sm outline-none focus:border-brand md:w-[380px] md:flex-none"
        />
        <button
          type="button"
          onClick={() => setApplied(query.trim())}
          className="h-[50px] w-[80px] shrink-0 rounded-[5px] bg-[#222] font-bold text-white md:w-[100px]"
        >
          검색
        </button>
      </div>

      {/* 목록 */}
      <div className="overflow-x-auto">
        <table className="w-full border-t-2 border-[#222] text-center">
          <thead>
            <tr className="h-[60px] border-b border-[#EBEBEB]">
              <th className="w-[52px] font-medium text-[#222] md:w-[100px]">NO.</th>
              <th className="text-left font-medium text-[#222]">제목</th>
              <th className="hidden w-[160px] font-medium text-[#222] md:table-cell">
                작성일
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr className="h-[120px] border-b border-[#EBEBEB]">
                <td colSpan={3} className="text-[#999]">
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : (
              rows.map((item) => (
                <tr
                  key={`${item.no}-${item.title}`}
                  className="h-[70px] border-b border-[#EBEBEB]"
                >
                  <td>
                    {item.notice ? (
                      <span className="inline-block rounded bg-brand px-2 py-1 text-xs font-bold text-white">
                        공지
                      </span>
                    ) : (
                      <span className="text-[#666]">{item.no}</span>
                    )}
                  </td>
                  <td className="py-3 text-left">
                    <a
                      href="#"
                      className="flex flex-wrap items-center gap-2 text-[#222] hover:text-brand"
                    >
                      <span className="hover:underline">{item.title}</span>
                      <span className="shrink-0 rounded-full bg-[#F7F8FC] px-2 py-0.5 text-xs font-semibold text-brand">
                        {item.tag}
                      </span>
                    </a>
                    <span className="mt-1 block text-xs text-[#999] md:hidden">
                      {item.date}
                    </span>
                  </td>
                  <td className="hidden text-[#666] md:table-cell">{item.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      <div className="mt-[50px] flex items-center justify-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-medium text-white">
          1
        </span>
      </div>
    </section>
  );
}
