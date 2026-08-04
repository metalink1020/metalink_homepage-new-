import Image from "next/image";
import type { ExtraServiceItem } from "@/types/subpages";

export function ExtraServiceList({
  title,
  items,
}: {
  title: string;
  items: ExtraServiceItem[];
}) {
  return (
    <div>
      <h2 className="relative pb-5 text-center text-2xl font-bold leading-[1.4] after:absolute after:bottom-0 after:left-1/2 after:block after:h-px after:w-[30px] after:-translate-x-1/2 after:bg-[#222] md:text-[26px]">
        {title}
      </h2>
      <div className="mt-[60px] flex flex-wrap justify-center gap-10 md:gap-20">
        {items.map((item) => (
          <div key={item.heading} className="w-full max-w-[280px] text-center">
            <Image
              src={item.icon}
              alt=""
              width={68}
              height={68}
              className="mx-auto h-[60px] w-auto md:h-[68px]"
            />
            <h3 className="relative mt-6 pb-3 text-xl font-bold after:absolute after:bottom-0 after:left-1/2 after:block after:h-px after:w-[20px] after:-translate-x-1/2 after:bg-[#222] md:text-2xl">
              {item.heading}
            </h3>
            {item.body && (
              <p className="mt-4 text-base leading-[26px] text-[#222]">
                {item.body.split("\n").map((line, i, arr) => (
                  <span key={line}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
