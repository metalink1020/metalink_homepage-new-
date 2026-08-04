# Business Pages Specification (5 routes sharing one template)

## Overview
- **Target files:**
  - `src/app/business/compliance/page.tsx`
  - `src/app/business/payment/page.tsx`
  - `src/app/business/authentication/page.tsx`
  - `src/app/business/data/page.tsx`
  - `src/app/business/blockchain-ai/page.tsx`
- **Screenshots:** `docs/design-references/bonanza-factory.co.kr/page-compliance.jpg`, `page-payment.jpg`, `page-authentication.jpg`, `page-data.jpg`, `page-blockchain-ai.jpg`
- **Interaction model:** static content with a product sub-tab bar (`AsideTabs`) that is purely a link (not a JS tab switch — each tab is a distinct page/section, so plain links are correct); one scroll-driven stats block on Compliance only.
- These 5 pages share an identical structural template. Build the shared pieces once, then 5 thin page files with per-page content.

## Shared components already built (use them, do not rebuild)
- `SubPageHero` (`src/components/subpages/SubPageHero.tsx`) — hero banner
- `AsideTabs` (`src/components/subpages/AsideTabs.tsx`) — underline product-tab bar directly below the hero
- `FeatureList` (`src/components/subpages/FeatureList.tsx`) — alternating image/text feature rows
- `StatsCounter` (`src/components/subpages/StatsCounter.tsx`) — scroll-triggered count-up stats block (Compliance page only)
- `InquiryCTA` (`src/components/subpages/InquiryCTA.tsx`) — bottom "문의하기" CTA, identical on all 5 pages

## New shared components you need to build for this task
1. **`ExtraServiceList`** (`src/components/subpages/ExtraServiceList.tsx`) — a centered heading + row of 2-3 icon items (icon image on top, heading, body text, each item separated by a vertical divider on desktop). Used on Authentication (2 items) and reused visually for Blockchain & AI's 3-item icon row (component should accept 2-4 items generically).
   - Props: `{ title: string; items: { icon: string; heading: string; body?: string }[] }`
   - Style: title centered `font-size:26px` with a small underline dash beneath it (`width:30px;height:1px;background:#222`), items in a flex row (`justify-center`, gap ~40-80px), each item: icon `height:60-68px`, heading `font-size:22-30px font-weight:700` with its own underline dash, optional body text below.
2. **`DataBenefitCircles`** (`src/components/subpages/DataBenefitCircles.tsx`) — 3 large circular cards in a row, each with an icon, bold number/label line, and description. Props: `{ items: { icon: string; heading: string; body: string; bg: string }[] }`. Style: circle `width/height: clamp(280px, 30vw, 460px); border-radius:50%; display:flex; flex-direction:column; justify-content:center; align-items:center`, background colors per item (`rgba(235,242,255,.5)`, `rgba(201,222,255,.3)`, `rgba(193,205,255,.3)`), slight horizontal overlap on desktop (`md:-mx-5`) — used on Data page only.

## Per-Page Content

### 1. Compliance (`/business/compliance`)
- Hero: title "Compliance", desc "디지털자산의 안전한 거래를 위한 다양한 컴플라이언스 솔루션을 제공합니다.", bg `/images/subpages/svisual-compliance.jpg`
- AsideTabs: `[{label:"TranSafer", href:"/business/compliance"}, {label:"TranSight", href:"#"}]`, active = TranSafer (TranSight has no built page — link is decorative, out of scope)
- FeatureList (1 item): heading "TranSafer" sub-line "고객 실명계좌 기반 자금세탁방지(AML), 이상거래탐지(FDS) 원화입출금 솔루션", body "TranSafer는 이용기업과 금융회사 간의 원화 입출금을 객관적으로 검증하고, 이를 기반으로 이상거래 고객 및 패턴을 필터링하여 안전한 거래를 지원합니다.", image `/images/subpages/img_compliance01.svg`
- StatsCounter: title "은행 · 가상자산거래소 입출금\n시장점유율 업계1위", stats `[{value:"1091",unit:"만",label:"입출금 서비스 이용고객수"},{value:"1026",unit:"조",label:"누적 입출금 검증금액"},{value:"671",unit:"만",label:"이상거래 탐지건수"}]`, footnote "*TranSafer, 2026. 06 기준"
- Three additional feature blocks (plain heading+body pairs, no images, centered text, generous vertical spacing ~`py-16`):
  1. "비정상 고객 및 거래패턴 분석 노하우 기반\n자체 AML/FDS 필터링 제공" — "원화입출금 중계기관으로써 다양한 이용기업과 금융회사의 거래정보를 활용·분석하여 이상거래 원천 차단을 지원합니다."
  2. "제3자 인증절차를 통한\n사고방지 및 편의성 제고" — "고객동의 및 입출금 처리 시 TranSafer에서 직접 인증을 처리함으로써 이용기업의 임의출금 리스크 및 관리 포인트를 줄일 수 있습니다."
  3. "지급정지계좌 실시간 통지서비스 제공" — "보이스피싱 등 전기통신금융사기 범죄에 연루된 지급정지계좌 정보를 이용기업에 즉각 제공함으로써 추가 피해예방을 위해 신속하게 대응합니다."
- `InquiryCTA`

### 2. Payment (`/business/payment`)
- Hero: title "Payment", desc "지급결제 비즈니스에 최적화된 솔루션을 추천하고, 편리한 연동을 지원합니다.", bg `/images/subpages/svisual-payment.jpg`
- AsideTabs: `[{label:"실명인증가상계좌", href:"/business/payment"}, {label:"부가서비스", href:"#"}]`, active = 실명인증가상계좌
- FeatureList (1 item): heading "본인확인 및 실계좌 기반 가상계좌 서비스", body "비대면 본인 확인과 블랙리스트 검증 후 고객 은행계좌와 연결된 가상계좌를 발급하여 가상계좌거래의 편리함과 안전함을 지원합니다.", image `/images/subpages/img_payment01.svg`
- Three plain feature blocks (same layout as Compliance's extra 3 blocks):
  1. "가상계좌 부정사용 방지" — "이용기관 고객확인 수행 여부를 체크하기 위해 휴대폰 인증, 예금주 조회, 1원 계좌인증 등 복수의 인증 수단을 체계적으로 적용합니다"
  2. "제3자 인증을 통한 위험고객 입금 사전 차단\n(AML/FDS 보조기능)" — "블랙리스트 (은행연합회, 경찰청, 가상자산거래소 등) 여부를 확인하여 계좌의 불법 사용을 방지합니다."
  3. "안전한 금융거래 지원" — "가상계좌 발급 시 이용기관 정보 및 가상계좌 사용 이력을 실시간으로 안내합니다."
- `InquiryCTA`
- Partner teaser block (below InquiryCTA or above it — place directly above InquiryCTA): centered small card/banner with `logo_coocon.svg` (`/images/subpages/logo_coocon.svg`) and text "보난자스토리 핵심파트너" with a "바로가기 →" link (href="#", decorative, external partner site out of scope)

### 3. Authentication (`/business/authentication`)
- Hero: title "Authentication", desc "고객이 안심할 수 있는 비대면 거래를 위한 디지털 기반 고객인증 및 증명을 지원합니다.", bg `/images/subpages/svisual-authentication.jpg`
- AsideTabs: `[{label:"본인인증", href:"/business/authentication"}, {label:"전자문서", href:"#"}]`, active = 본인인증
- FeatureList (1 item): heading "인증서비스 앱을 통한 간편 본인인증 및 전자서명", body "국내 대표 간편인증사업자(카카오, 네이버)의 인증서로 최소한의 정보만 입력하여 간편하게 신원을 인증하고 각종 동의가 필요한 문서에 전자서명 할 수 있는 서비스입니다.", image `/images/subpages/img_authentication01.svg`
- Three plain feature blocks:
  1. "간편한 발급절차" — "본인확인기관을 통한 신원확인 후 인증서(3년 유효)를 간단하게 발급 가능합니다."
  2. "검증된 보안 표준" — "공인인증서와 동일한 공개키(PKI) 기반구조가 적용되어 있으며, 관리적/물리직/기술적 보안 정책 하에 운영합니다."
  3. "사용성을 고려한 전자서명 프로세스" — "전자서명 요청 수신 후 지문/안면/PIN을 활용하여 실시간 서명을 진행합니다."
- `ExtraServiceList`: title "복잡한 인증 절차가 적용된 업무를 효율적으로 개선합니다", items:
  - { icon: "/images/subpages/icon_extra_service01.svg", heading: "간편로그인 서비스", body: "간편한 비밀번호 입력과 생체인증을 통한 로그인 지원" }
  - { icon: "/images/subpages/icon_extra_service02.svg", heading: "자동이체 출금동의 서비스", body: "공인인증서, ARS, 녹취, 서면 대신 간편인증으로 자동이체 동의" }
- `InquiryCTA`

### 4. Data (`/business/data`)
- Hero: title "Data", desc "다양한 형태로 빠르게 증가하는 데이터를 수집·가공하여,\n기업이 쉽게 활용할 수 있는 투자정보를 제공합니다.", bg `/images/subpages/svisual-data.jpg`
- AsideTabs: `[{label:"DayFin", href:"/business/data"}]` (single tab, still active/underlined)
- FeatureList (1 item): heading "디지털자산 투자정보 데이터 솔루션 DayFin", body "디지털자산과 관련된 다양한 투자정보와 인사이트를 제공합니다.", image `/images/subpages/img_data01.svg`
- Three plain feature blocks:
  1. "디지털자산 인사이트 확보를 위한\n다양한 데이터셋 제공" — "시장 동향 및 지표, 트렌드 정보, 위험 감지 등 투자자들이 필요로 하는 정보를 종합적으로 제공합니다."
  2. "표준화된 데이터 제공" — "다수의 거래소, 블록체인 등 다양한 형태의 데이터를 표준화하여 개발 편의성을 제공합니다."
  3. "다양한 활용 지원" — "기업별 서비스 전략에 따라 Data API 또는 플랫폼 형태로 맞춤 제공합니다."
- `DataBenefitCircles`: title above it "고객사별 필요한 서비스를 선별하여 제공합니다", items:
  - { icon: "/images/subpages/img_data_benefit01.svg", heading: "금융사 · 핀테크", body: "디지털 자산관리\n서비스 선도", bg: "rgba(235,242,255,.5)" }
  - { icon: "/images/subpages/img_data_benefit02.svg", heading: "가상자산 거래소", body: "투자자보호\n기능 강화", bg: "rgba(201,222,255,.3)" }
  - { icon: "/images/subpages/img_data_benefit03.svg", heading: "포털 · 언론", body: "자산관리\n콘텐츠 다양화", bg: "rgba(193,205,255,.3)" }
- `InquiryCTA`
- Below InquiryCTA (or as a small link near it): "DayFin 소개 페이지 바로가기" (href="#", decorative, external site out of scope)

### 5. Blockchain & AI (`/business/blockchain-ai`)
- Hero: title "Blockchain & AI", desc "안전한 디지털 금융 환경 구축을 위해 Blockchain과 AI 기술을 결합합니다.", bg `/images/subpages/svisual-blockchain-ai.jpg`
- AsideTabs: `[{label:"Blockchain & AI", href:"/business/blockchain-ai"}]` (single tab, active/underlined)
- FeatureList (2 items, no images needed — pass `image: undefined`, so FeatureList should gracefully render text-only centered blocks when no image is given — verify `FeatureList.tsx` handles a missing `image` gracefully; if not, adjust it to center the text block full-width when `image` is absent):
  1. heading "블록체인 데이터 가공 및 분석", body "블록체인 데이터를 저장하고 정제하는 프로세스를 자동화하여, 다양한 메인넷에서 발생되는 방대한 양의 트랜잭션 및 거래 주체에 대해 효율적으로 분석합니다."
  2. heading "인공지능 예측 및 진단", body "생성형 모델을 사용하여 대량의 데이터셋을 구축하고 도메인 지식이 포함된 알고리즘으로 데이터를 학습하여, 블록체인 솔루션의 예측 및 진단에 최적화된 기술을 제공합니다."
- `ExtraServiceList` (reused for the 3-column icon row): title "혁신적인 인사이트 발굴을 위한 Blockchain & AI 기술을 제공합니다.", items:
  - { icon: "/images/subpages/icon_blockchain01.svg", heading: "메인넷 분석", body: "· 프로젝트 안전성 조사\n· 분석 리포트 생성" }
  - { icon: "/images/subpages/icon_blockchain02.svg", heading: "디지털자산 위험평가", body: "· 실시간 모니터링\n· 심층적 위험 탐지" }
  - { icon: "/images/subpages/icon_blockchain03.svg", heading: "애널리틱스", body: "· 규제 환경 대응\n· 트렌드 예측" }
- `InquiryCTA`

## Responsive Behavior (all 5 pages)
- **Desktop (>=1024px):** FeatureList rows are side-by-side (text + image), ExtraServiceList/DataBenefitCircles items in a row
- **Mobile (<768px):** FeatureList rows stack (text above image), ExtraServiceList/DataBenefitCircles items stack vertically or wrap 2-per-row, AsideTabs remain horizontally scrollable if they overflow

## Build order
Build the 2 new shared components (`ExtraServiceList`, `DataBenefitCircles`) FIRST, verify `npx tsc --noEmit`, then create all 5 page files. Run `npx tsc --noEmit` again at the end to confirm everything compiles together.
