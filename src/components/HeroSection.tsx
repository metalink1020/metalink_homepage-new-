import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/images/hero-desktop.jpg"
        alt="메타링크 메인 비주얼"
        fill
        priority
        sizes="(min-width: 768px) 100vw, 0px"
        className="hidden object-cover animate-hero-zoom md:block"
      />
      <Image
        src="/images/hero-mobile.png"
        alt="메타링크 메인 비주얼"
        fill
        priority
        sizes="(min-width: 768px) 0px, 100vw"
        className="block object-cover animate-hero-zoom md:hidden"
      />

      <div className="absolute left-1/2 top-[40%] w-full max-w-[1700px] -translate-x-1/2 -translate-y-1/2 px-5 md:top-1/2 md:px-[50px]">
        <h1 className="animate-fade-up mb-6 text-[30px] font-bold leading-[44px] text-white md:mb-8 md:text-[46px] md:leading-[70px] xl:text-[55px] xl:leading-[80px]">
          기술과 사람을 잇는
          <br />
          혁신적인 AI 파트너, 메타링크
        </h1>
        <p className="animate-fade-up max-w-[760px] text-base leading-[28px] text-white/90 md:text-xl md:leading-[34px]">
          AI 콜봇·챗봇부터 시스템 구축·운영, 디지털 마케팅까지 고객
          <br className="hidden md:block" />
          비즈니스에 필요한 모든 연결을 하나의 흐름으로 설계합니다.
        </p>
      </div>

      <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2">
        <span className="block h-[10px] w-[30px] rounded-[30px] bg-white" />
      </div>
    </section>
  );
}
