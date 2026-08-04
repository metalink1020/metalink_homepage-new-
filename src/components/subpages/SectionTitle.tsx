import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "relative pb-5 text-center text-2xl font-bold leading-[1.4] after:absolute after:bottom-0 after:left-1/2 after:block after:h-px after:w-[30px] after:-translate-x-1/2 after:bg-[#222] md:text-[26px]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function CategoryLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-8 text-center text-sm font-bold tracking-[2px] text-brand md:text-base">
      {children}
    </p>
  );
}
