import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SubPageHeroProps } from "@/types/subpages";

export function SubPageHero({
  title,
  description,
  bgImage,
  heightClass = "h-screen",
}: SubPageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        heightClass
      )}
    >
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-hero-zoom object-cover"
      />
      <div className="animate-fade-up relative z-[1] mx-auto max-w-[1440px] px-5 text-center md:px-10">
        <h1 className="text-balance font-sans text-[32px] font-semibold leading-[44px] text-white md:text-[45px] md:leading-[64px]">
          {title.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h1>
        {description ? (
          <p className="mt-[30px] text-balance text-sm leading-[26px] text-white md:text-[15px]">
            {description.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}
