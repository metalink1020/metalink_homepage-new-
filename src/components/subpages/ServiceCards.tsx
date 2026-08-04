import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCardItem {
  icon: LucideIcon;
  role?: string;
  title: string;
  desc: string;
}

export function ServiceCards({
  items,
  cols = 3,
}: {
  items: ServiceCardItem[];
  cols?: 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:gap-y-16",
        cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="mx-auto w-full max-w-[240px] text-center"
          >
            <Icon className="mx-auto h-14 w-14 text-brand" strokeWidth={1.5} />
            {item.role && (
              <p className="mt-5 text-xs font-bold tracking-[1px] text-brand">
                {item.role}
              </p>
            )}
            <h3 className="mt-5 whitespace-normal text-lg font-bold text-[#222] lg:whitespace-nowrap md:text-xl">
              {item.title}
            </h3>
            <p className="mt-5 text-pretty text-[15px] leading-[26px] text-[#666]">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
