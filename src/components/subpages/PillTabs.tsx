"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { TabItem } from "@/types/subpages";

export function PillTabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(items[0]?.label);

  return (
    <div className="mb-[60px] flex flex-wrap items-center justify-center gap-3 md:gap-5">
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={() => setActive(item.label)}
          className={cn(
            "h-[50px] w-[160px] rounded-[30px] border text-center font-medium leading-[48px] md:w-[200px]",
            active === item.label
              ? "border-[#4A70FC] bg-[#4A70FC] text-white"
              : "border-[#ddd] text-[#222]"
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
