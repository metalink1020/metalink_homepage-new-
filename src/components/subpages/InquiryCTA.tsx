import Image from "next/image";
import Link from "next/link";

export function InquiryCTA({
  heading = "좀 더 자세한 정보를 얻고 싶으신가요?",
  buttonLabel = "문의하기",
  href = "/contact",
}: {
  heading?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <div className="relative overflow-hidden py-20">
      <Image
        src="/images/subpages/bg_compliance_wrap04.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="relative z-[1] mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-5 text-center md:px-10">
        <p className="text-lg text-white md:text-xl">{heading}</p>
        <Link
          href={href}
          className="flex h-[50px] w-[190px] items-center justify-center gap-[10px] rounded-[30px] border border-white text-base font-bold text-white transition hover:bg-white hover:text-[#222]"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
