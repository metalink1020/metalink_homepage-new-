# AboutPage Specification

## Overview
- **Target file:** `src/app/company/about/page.tsx`
- **Route:** `/company/about`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/page-about.jpg`
- **Interaction model:** scroll-driven (stats count-up, history timeline scroll progress, awards carousel)
- Use the already-built shared components: `SubPageHero` (`src/components/subpages/SubPageHero.tsx`), `StatsCounter` (`src/components/subpages/StatsCounter.tsx`), `Header`/`Footer` (already wired site-wide via root layout — do NOT re-import them, they render from a layout; just build the page content between them). Check `src/app/layout.tsx` — if Header/Footer aren't already rendered by a shared layout wrapping all routes, add a `src/app/company/layout.tsx` or render them directly; confirm current structure first.

## Page Structure (top to bottom)
1. `SubPageHero` — title "Digital Asset Compliance Leading Company" (two lines, break after "Compliance"), description "보난자팩토리는 가상자산사업자, 금융회사, 고객 등의\n디지털자산 거래를 보다 안전하게 할 수 있도록 지원하는\n디지털자산 컴플라이언스 기업입니다." bgImage `/images/subpages/svisual-about.jpg`, heightClass `h-[980px]` (this hero is taller than the standard 700px subpage hero — matches source CSS `.svisual.g01.s01 {height:980px}`)
2. Intro line: "보난자팩토리는 불가능을 가능으로 바꾸며\n업계를 선도해왔습니다." — centered, font-size 20px, margin `100px 0 60px`
3. `StatsCounter` — title "은행 · 가상자산거래소 입출금\n시장점유율 업계1위", stats (4 items, use `value` as the raw number string for count-up, `unit` as the suffix shown after the number):
   - { value: "1091", unit: "만", label: "입출금 서비스 이용고객수" }
   - { value: "1026", unit: "조", label: "누적 입출금 검증 금액" }
   - { value: "671", unit: "만", label: "이상거래 탐지 건수" }
   - { value: "35318", unit: "만", label: "인증 중개 건수" }
   footnote: "*TranSafer, 2026. 06 기준"
4. History timeline section — background `#F7FAFF`, centered eyebrow "HISTORY", heading "보난자팩토리가\n걸어온 길" (pinned/sticky on desktop via `md:sticky md:top-[150px] md:self-start`, in a 2-column flex layout with the timeline list on the right)
   - Right column: a vertical list, each year group is a heading (e.g. "2026") followed by month sub-entries, each with a bullet list of events. Render as: year (large bold number) → for each month, a small month label + bullet list of `•` prefixed event strings.
   - Data (verbatim, most-recent-first — this is real content from the live site; some older entries below 2022 were not fully captured during extraction, so treat 2019–2022 as a representative sample, not guaranteed exhaustive):
     ```
     2026
       06: 경찰청에 가상자산 분석 지원 용역 제공
       05: 국세청에 가상자산 탈세대응 거래추적 소프트웨어 제공 / 신뢰 기반 브랜딩 프로필 서비스 Byro 개발 중
       04: 한국금융연구원·한국금융범죄예방협회 주관 '제3회 금융범죄예방을 위한 정책세미나'에서 '가상자산 거래의 불법 지갑 주소 추적과 효과' 발표 / 베트남 MB Bank와 전략적 제휴 체결 / 트라버스-안암145, 디지털자산 지갑 공동개발을 위한 MOU 체결 / BYTH 상표출원
       03: 보난자랩-에프앤가이드, 디지털자산 분류 체계 'K-DACS' 공동 공개
       02: 보난자랩 Pre-A 투자 유치
       01: 가상자산 범죄 및 자금세탁 보고서 최초 발간
     2025
       11: BYRO 상표출원
       09: 중기부 '아기유니콘 육성사업 수익성장형 트랙 기업' 선정
       04: 가상자산 투자자 플랫폼 "세이퍼블록(SaferBlock)" 출시 / 한국금융연구원 주관, '제2회 금융범죄예방을 위한 정책세미나'에서 '가상자산 활용 범죄 추적 및 사례' 발표
     2024
       12: 중소벤처기업부 주관, 성과공유기업 지정 / 벤처창업진흥 유공 중기부 장관상 수상
       08: '디지털자산 거래 추적 기술 개발' 정부 국책 과제 수주
       06: 가상자산 사기 피해 신고·조회 서비스 출시
     2022
       05: 한국인터넷진흥원 ISMS 인증획득 (통합입출금 서비스 외)
     2021
       12: 중소벤처기업부 기술혁신형 중소기업 인증 획득 AA 등급
       10: 서울핀테크랩 핀테크기업 매출부분 최우수상 수상 / 경찰청 행사발전 기여 감사장 수상
     2019
       08: 과학기술정보통신부 혁신성장형 벤처기업 인증 획득
     ```
   - Behavior: as the user scrolls, a vertical progress line/bar next to the year fills downward (source CSS: `.about_wrap .section2 .con_right .line .bar`, blue `#1640DB` fill on a `#ddd` track, 1px wide) — implement with a simple `IntersectionObserver` per year block that adds an `.on` (active/highlighted) state to the nearest year in view; the exact scroll-linked fill-height math from the source is complex custom JS, so a simpler equivalent (highlight the active year number in `#1640DB` as its block enters the viewport, via IntersectionObserver) satisfies the "scroll-driven, not click-driven" requirement without needing to be pixel-identical.
5. Awards/certifications section — a horizontal row of cards (source is a slick carousel with prev/next arrows and duplicated items for infinite loop; build as a horizontal `overflow-x-auto` scroll-snap row with simple prev/next buttons that scroll by one card width — no need for true infinite looping). Each card: date (e.g. "2019.08"), issuing org (e.g. "과학기술정보통신부"), award text (e.g. "혁신성장형\n벤처기업 인증 획득"). Card style: `width:285px; height:300px; background:#4A70FC; border-radius:20px; color:#fff; text-align:center`, org name has a thin underline divider below it. Data (9 unique cards, in this order):
   - 2019.08 — 과학기술정보통신부 — 혁신성장형 벤처기업 인증 획득
   - 2021.10 — 경찰청 — 행사발전 기여 감사장 수상
   - 2021.10 — 서울핀테크랩 — 핀테크기업 매출부분 최우수상 수상
   - 2021.12 — 중소벤처기업부 — 기술혁신형 중소기업 인증 획득 AA 등급
   - 2022.05 — 한국인터넷진흥원 — ISMS 인증획득 통합입출금 서비스 외
   - 2024.01 — EURO CERT — 국제표준인증획득 ISO9001·14001
   - 2024.11 — 중소벤처기업부 — 벤처창업진흥 유공 중기부 장관상 수상
   - 2024.12 — 중소벤처기업부 — '아기유니콘 육성사업 수익성장형 트랙 기업' 선정
   - 2025.09 — 금융위원회 — 규제샌드박스 위탁테스트 선정
6. Decorative right-side product image `about01.png` (absolutely positioned, `right:50px; bottom:100px`, hidden or full-width centered on mobile) — place near the history section per the source (`.about_wrap .section1 .img`), or, simpler, place it as a floating decorative image within the intro/stats area if that reads more naturally in the rebuilt layout.

## Assets (in `public/images/subpages/`)
- `svisual-about.jpg`, `about01.png`, `bg_about02.png` (optional faint decorative background, opacity .4, behind the history section)
- `icon_about01.svg`..`icon_about04.svg` (small icons — not required if the StatsCounter component doesn't use per-stat icons; skip if unused)

## Text Content
All verbatim above.

## Responsive Behavior
- **Desktop (>=1024px):** two-column history layout with sticky left title
- **Mobile (<768px):** history title sits above the timeline (not sticky), stats wrap 2-per-row, awards row remains horizontally scrollable
