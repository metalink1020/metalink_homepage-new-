import Image from "next/image";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/types/subpages";

export function FeatureList({ items }: { items: FeatureItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={item.heading}
          className={cn(
            "flex flex-col items-center gap-10 py-[60px] first:pt-0 last:pb-0 md:flex-row md:gap-0 md:py-0",
            i % 2 === 1 ? "md:flex-row-reverse" : "",
            i > 0 && "md:mt-[100px]"
          )}
        >
          <div
            className={cn(
              "w-full text-center",
              item.image
                ? "md:w-1/2 md:text-left"
                : "mx-auto md:max-w-[700px]",
              item.image && (i % 2 === 1 ? "md:pl-[170px]" : "md:pr-[170px]")
            )}
          >
            <h3 className="text-2xl font-bold leading-[1.3] md:text-[32px] md:leading-[44px]">
              {item.heading}
            </h3>
            <p className="mt-[30px] text-base leading-[32px] text-[#222]">
              {item.body}
            </p>
          </div>
          {item.image && (
            <div className="flex w-full justify-center md:w-1/2">
              <Image
                src={item.image}
                alt={item.imageAlt ?? item.heading}
                width={480}
                height={480}
                className="h-auto w-full max-w-[420px]"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
