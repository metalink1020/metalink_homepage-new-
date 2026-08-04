"use client";

import { cn } from "@/lib/utils";
import type { TabItem } from "@/types/subpages";

export function AsideTabs({
  items,
  activeHref,
}: {
  items: TabItem[];
  activeHref: string;
}) {
  return (
    <div className="border-b border-[#EBEBEB]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center px-5 md:px-10">
        {items.map((item) => {
          const isActive = item.href === activeHref;
          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative block px-6 py-8 text-lg leading-none md:px-[45px] md:text-xl md:leading-[100px] md:py-0",
                isActive ? "font-bold text-brand" : "text-[#222]"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute bottom-[-1px] left-0 h-[2px] bg-brand transition-all duration-200 ease-linear",
                  isActive ? "w-full" : "w-0"
                )}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
