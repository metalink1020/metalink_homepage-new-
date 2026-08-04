"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ADDRESS_ITEMS = [
  "서울특별시 강남구 강남대로114길 19, 3층",
  "대표이사 : 연정욱",
  "사업자등록번호 : 263-87-03782",
  "통신판매업 : 제2026-서울강남-0193호",
];

const CONTACT_ITEMS = [
  { label: "대표전화", value: "02-6941-1702", href: "tel:02-6941-1702" },
  { label: "일반문의", value: "help@mtlink.kr", href: "mailto:help@mtlink.kr" },
  { label: "AI사업문의", value: "ai@mtlink.kr", href: "mailto:ai@mtlink.kr" },
];

export default function Footer() {
  const [isFamilySiteOpen, setIsFamilySiteOpen] = useState(false);

  return (
    <footer className="bg-black px-4 py-[30px] sm:px-8 sm:py-[30px] md:px-[60px]">
      <div className="mx-auto max-w-[1440px]">
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-y-4 pb-[30px] sm:flex-nowrap sm:items-center sm:border-b sm:border-white/12">
          <div className="flex items-center gap-5 sm:gap-[35px]">
            <a
              href="/privacy"
              className="text-[15px] font-extrabold text-white"
            >
              개인정보 처리방침
            </a>
            <a href="/contact" className="text-sm font-medium text-white">
              사업문의
            </a>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsFamilySiteOpen((prev) => !prev)}
              aria-expanded={isFamilySiteOpen}
              className={cn(
                "flex h-[30px] w-[150px] items-center justify-between bg-[#31363E] px-4 text-[10px] text-white/80 transition-colors sm:h-10 sm:w-[200px] sm:text-sm",
                isFamilySiteOpen
                  ? "rounded-t-3xl rounded-b-none"
                  : "rounded-full"
              )}
            >
              <span>Family Site</span>
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  isFamilySiteOpen && "rotate-180"
                )}
              />
            </button>

            {isFamilySiteOpen && (
              <div className="absolute right-0 z-10 w-[150px] rounded-b-3xl bg-[#31363E] px-4 py-3 sm:w-[200px]">
                <ul className="flex flex-col gap-1">
                  <li>
                    <a
                      href="https://blog.naver.com/meta_link"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] text-white/70 hover:text-white sm:text-sm"
                    >
                      네이버 블로그
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-start gap-8 pt-[30px] sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/metalink-logo.png"
              alt="METALINK"
              width={220}
              height={60}
              className="h-auto max-w-[130px] brightness-0 invert sm:max-w-[170px]"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-white">
                주식회사 메타링크
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-[#F2F2F2]/60">
                {ADDRESS_ITEMS.map((item) => (
                  <span key={item} className="whitespace-nowrap">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#F2F2F2]/50">
                ⓒ METALINK Co.,Ltd. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 text-sm text-[#F2F2F2]/60"
              >
                <span className="w-[70px] shrink-0 font-medium text-white/50">
                  {item.label}
                </span>
                <a href={item.href} className="text-white/80 hover:text-white">
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
