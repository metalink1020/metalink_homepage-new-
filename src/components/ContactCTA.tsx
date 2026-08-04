import Image from "next/image";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/subpages/bg_compliance_wrap04.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand/70" aria-hidden />
      <div className="relative z-[1] mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-5 py-20 text-center md:px-10 md:py-[110px]">
        <h2 className="text-3xl font-bold leading-[1.35] text-white md:text-[44px]">
          성공적인 비즈니스,
          <br />
          지금 바로 시작하세요.
        </h2>
        <p className="text-base text-white md:text-lg">
          궁금한 점을 남겨주시면 담당자가 24시간 이내에 답변드립니다.
        </p>
        <Link
          href="/contact"
          className="mt-2 flex h-[50px] w-[190px] items-center justify-center rounded-[30px] border border-white text-base font-bold text-white transition hover:bg-white hover:text-[#222]"
        >
          사업 문의하기
        </Link>
      </div>
    </section>
  );
}
