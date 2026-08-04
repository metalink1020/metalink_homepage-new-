import Image from "next/image";

const LOGOS: { file: string; name: string }[] = [
  { file: "kakao-enterprise.png", name: "Kakao Enterprise" },
  { file: "naver-cloud.png", name: "Naver Cloud" },
  { file: "sejong-telecom.png", name: "Sejong Telecom" },
  { file: "dk-techin.png", name: "dk techin" },
  { file: "certilife.png", name: "certilife" },
  { file: "personaai.png", name: "personaai" },
  { file: "42maru.png", name: "42maru" },
  { file: "kp-mobile.png", name: "KP mobile" },
];

export function ClientLogos({
  note = "※ 메타링크가 함께한 주요 고객사·협력 파트너입니다.",
}: {
  note?: string;
}) {
  return (
    <div>
      <div className="grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-4">
        {LOGOS.map((logo) => (
          <div key={logo.file} className="flex items-center justify-center">
            <Image
              src={`/images/partners-mt/${logo.file}`}
              alt={logo.name}
              width={160}
              height={48}
              className="max-h-[32px] max-w-[130px] object-contain"
            />
          </div>
        ))}
      </div>
      {note && <p className="mt-12 text-center text-sm text-[#999]">{note}</p>}
    </div>
  );
}
