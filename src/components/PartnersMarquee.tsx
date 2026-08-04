import Image from "next/image";

interface Partner {
  id: string;
  name: string;
  src: string;
}

// 상세페이지에 등장하는 실제 협력사·고객사 로고 전체
const PARTNERS: Partner[] = [
  { id: "kakao-enterprise", name: "Kakao Enterprise", src: "/images/partners-mt/kakao-enterprise.png" },
  { id: "naver-cloud", name: "Naver Cloud", src: "/images/partners-mt/naver-cloud.png" },
  { id: "sejong-telecom", name: "Sejong Telecom", src: "/images/partners-mt/sejong-telecom.png" },
  { id: "dk-techin", name: "dk techin", src: "/images/partners-mt/dk-techin.png" },
  { id: "personaai", name: "PersonaAI", src: "/images/partners-mt/personaai.png" },
  { id: "42maru", name: "42Maru", src: "/images/partners-mt/42maru.png" },
  { id: "kp-mobile", name: "KP Mobile", src: "/images/partners-mt/kp-mobile.png" },
  { id: "aws", name: "AWS", src: "/images/clients/aws.png" },
  { id: "bespin-global", name: "Bespin Global", src: "/images/clients/bespin-global.png" },
  { id: "smartro", name: "Smartro", src: "/images/clients/smartro.png" },
  { id: "korea-univ", name: "고려대학교", src: "/images/clients/korea-univ.png" },
  { id: "hansung-univ", name: "한성대학교", src: "/images/clients/hansung-univ.png" },
  { id: "certilife", name: "CertiLife", src: "/images/partners-mt/certilife.png" },
  { id: "dentium", name: "Dentium", src: "/images/clients/dentium.png" },
  { id: "hiness", name: "Hiness Implant", src: "/images/clients/hiness.png" },
  { id: "zeiss", name: "ZEISS", src: "/images/clients/zeiss.png" },
  { id: "datadriven", name: "Data Driven", src: "/images/clients/datadriven.png" },
  { id: "im-capital", name: "iM Capital", src: "/images/clients/im-capital.png" },
  { id: "renew-medical", name: "Renew Medical", src: "/images/clients/renew-medical.png" },
  { id: "dental-master", name: "Dental Master", src: "/images/clients/dental-master.png" },
  { id: "seoul-vidi-dental", name: "서울비디치과", src: "/images/clients/seoul-vidi-dental.png" },
  { id: "mma", name: "병무청", src: "/images/clients/mma.png" },
  { id: "nis", name: "국가정보원", src: "/images/clients/nis.png" },
  { id: "seolbi", name: "기계설비건설공제조합", src: "/images/clients/seolbi.png" },
  { id: "ideas-k", name: "한국국방획득혁신학회", src: "/images/clients/ideas-k.png" },
  { id: "gb-dental", name: "경상북도치과의사회", src: "/images/clients/gb-dental.png" },
];

const half = Math.ceil(PARTNERS.length / 2);
const ROW_A = PARTNERS.slice(0, half);
const ROW_B = PARTNERS.slice(half);

function PartnerRow({
  items,
  direction,
  suffix,
}: {
  items: Partner[];
  direction: "left" | "right";
  suffix: "a" | "b";
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {[...items, ...items].map((partner, i) => (
          <div
            key={`${partner.id}-${suffix}-${i}`}
            className="flex w-[200px] shrink-0 items-center justify-center lg:w-[240px] xl:w-[260px]"
          >
            <Image
              src={partner.src}
              alt={partner.name}
              width={160}
              height={60}
              className="max-h-[40px] max-w-[160px] object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <section className="py-[100px] lg:py-[120px] 2xl:pt-[140px] 2xl:pb-[150px]">
      <div className="mb-12">
        <PartnerRow items={ROW_A} direction="left" suffix="a" />
      </div>
      <div>
        <PartnerRow items={ROW_B} direction="right" suffix="b" />
      </div>
    </section>
  );
}
