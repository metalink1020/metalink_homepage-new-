import Image from "next/image";

// 이름 → 실제 로고 파일 경로 매핑.
// 정부·공공기관(병무청·국가정보원·기계설비건설공제조합·한국국방획득혁신학회·경상북도치과의사회 등)은
// 엠블럼 사용제한 우려로 매핑하지 않고 텍스트로 표기한다.
const LOGO_MAP: Record<string, string> = {
  // 협력사 (보유 파일)
  "카카오엔터프라이즈": "/images/partners-mt/kakao-enterprise.png",
  "네이버클라우드": "/images/partners-mt/naver-cloud.png",
  "세종텔레콤": "/images/partners-mt/sejong-telecom.png",
  "DKT": "/images/partners-mt/dk-techin.png",
  "서티라이프": "/images/partners-mt/certilife.png",
  "페르소나AI": "/images/partners-mt/personaai.png",
  "42마루": "/images/partners-mt/42maru.png",
  "KP모바일": "/images/partners-mt/kp-mobile.png",
  // 협력사 (공식 로고)
  "AWS코리아": "/images/clients/aws.png",
  "스마트로": "/images/clients/smartro.png",
  "고려대학교": "/images/clients/korea-university.png",
  "한성대학교": "/images/clients/hansung-univ.png",
  "베스핀글로벌": "/images/clients/bespin-global.png",
  // 고객사 (공식 로고)
  "덴티움": "/images/clients/dentium.png",
  "하이니스": "/images/clients/hiness.png",
  "ZEISS 코리아": "/images/clients/zeiss.png",
  "데이터드리븐": "/images/clients/datadriven.png",
  "iM캐피탈": "/images/clients/im-capital.png",
  "리뉴메디컬": "/images/clients/renew-medical.png",
  "덴탈마스터": "/images/clients/dental-master.png",
  "서울비디치과": "/images/clients/seoul-vidi-dental.png",
  // 고객사 (공공·기관·의료단체)
  "병무청": "/images/clients/mma.png",
  "국가정보원": "/images/clients/nis.png",
  "기계설비건설공제조합": "/images/clients/seolbi.png",
  "한국국방획득혁신학회": "/images/clients/ideas-k.png",
  "경상북도치과의사회": "/images/clients/gb-dental.png",
  "인천광역시": "/images/clients/incheon.png",
};

export function ClientNames({
  names,
  note = "",
}: {
  names: string[];
  note?: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {names.map((name) => {
          const logo = LOGO_MAP[name];
          return (
            <div
              key={name}
              className="flex h-[88px] w-[calc(50%-8px)] items-center justify-center rounded-2xl border border-[#EBEBEB] bg-white px-4 text-center sm:w-[200px] md:h-[104px] md:w-[220px]"
            >
              {logo ? (
                <Image
                  src={logo}
                  alt={name}
                  width={160}
                  height={48}
                  className="max-h-[40px] max-w-[150px] object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              ) : (
                <span className="text-base font-bold text-[#222] md:text-lg">
                  {name}
                </span>
              )}
            </div>
          );
        })}
      </div>
      {note && <p className="mt-12 text-center text-sm text-[#999]">{note}</p>}
    </div>
  );
}
