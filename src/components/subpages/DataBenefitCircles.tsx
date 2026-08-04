import Image from "next/image";
import type { DataBenefitItem } from "@/types/subpages";

export function DataBenefitCircles({ items }: { items: DataBenefitItem[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:flex-nowrap md:gap-0">
      {items.map((item) => (
        <div
          key={item.heading}
          className="flex h-[280px] w-[280px] flex-col items-center justify-center rounded-full text-center md:-mx-5 md:h-[380px] md:w-[380px] xl:h-[460px] xl:w-[460px]"
          style={{ backgroundColor: item.bg }}
        >
          <Image src={item.icon} alt="" width={60} height={48} className="h-12 w-auto" />
          <h3 className="mt-8 text-xl font-bold md:text-2xl">{item.heading}</h3>
          <p className="mt-3 text-base leading-[26px] text-[#222]">
            {item.body.split("\n").map((line, i, arr) => (
              <span key={line}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
