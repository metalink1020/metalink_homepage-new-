# ExtraPage Specification

## Overview
- **Target file:** `src/app/business/extra/page.tsx`
- **Route:** `/business/extra`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/page-extra.jpg`
- **Interaction model:** static content, identical template to the existing Payment page (this is Payment's second tab: 실명인증가상계좌 vs 부가서비스)
- Sibling of the already-built `/business/payment` page — same hero + `AsideTabs`, different body content (a 6-item feature grid instead of the usual 1+3 FeatureList pattern).

## Already-built shared components — use them, do not rebuild
- `SubPageHero`, `AsideTabs`, `InquiryCTA` (all in `src/components/subpages/`)

## New component you need to build
**`src/components/subpages/AddonServiceGrid.tsx`** — a grid of icon+heading+body+bullet-list cards (6 items here, but make it generic for N items).
- Props: `{ items: { icon: string; heading: string; body: string; bullets: string[] }[] }`
- Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10`, each card: icon image (`h-12 w-12` or similar, via `next/image`), heading (`text-xl font-bold mt-4`), body paragraph (`text-sm text-[#666] mt-2`), then a bulleted list of the 2 bullet strings (small dot or dash prefix, `text-sm text-[#222] mt-3 space-y-1`)

## Page Structure
1. `SubPageHero` — title "Payment", description "지급결제 비즈니스에 최적화된 솔루션을 추천하고, 편리한 연동을 지원합니다.", bgImage `/images/subpages/svisual-payment.jpg` (reuse Payment's hero image)
2. `AsideTabs` items: `[{label:"실명인증가상계좌", href:"/business/payment"}, {label:"부가서비스", href:"/business/extra"}]`, activeHref `/business/extra`
3. Section intro (centered): heading "지급결제 관련 제휴 부가서비스", body "다양한 비즈니스에 필요한 인증 및 검증 솔루션을 제공하여 쉽고 빠르게 비즈니스에 적용할 수 있도록 지원합니다." (same style as other pages' section intros — `text-2xl md:text-[32px] font-bold` heading, `mt-[30px] text-base text-[#222]` body, centered, `max-w-[700px] mx-auto`)
4. `AddonServiceGrid` with 6 items (verbatim text, in this order):
   1. icon `/images/subpages/img_extra01.svg` — heading "입금이체" — body "비대면으로 기업이 지급해야 할 각종 자금을 기업계좌에서 다수의 고객계좌로 입금해 주는 서비스" — bullets: ["제휴은행과의 3자 계약을 통해 기업 자금 예치 없이 이용기관의 계좌에서 안정적 이체 지원", "기업에 필요한 대량의 입금 업무를 실시간 입금으로 정산 자동화"]
   2. icon `/images/subpages/img_extra02.svg` — heading "ARS 인증" — body "고객 본인확인, 출금동의 등 실시간 ARS 인증을 활용한 비대면 본인인증 서비스" — bullets: ["기업의 용도에 맞는 ARS 인증 시나리오 제공", "개발 환경에 맞는 최적화된 연동방식 제공"]
   3. icon `/images/subpages/img_extra03.svg` — heading "1원 계좌인증" — body "고객계좌로 1원을 송금하고 예금주명의 인증코드를 검증하는 비대면 본인인증 서비스" — bullets: ["편리한 API 연동으로 본인인증 절차 적용 가능", "다양한 인증코드를 구현하여 신뢰성 높은 인증 절차 마련"]
   4. icon `/images/subpages/img_extra04.svg` — heading "예금주 조회" — body "고객의 계좌번호를 활용하여 실시간으로 예금주명과 계좌유효성을 간편하게 확인하는 서비스" — bullets: ["실시간 계좌 검증 조회로 정확한 계좌 송금/출금 처리", "계좌 검증을 통한 입출금 사고 사전 방지"]
   5. icon `/images/subpages/img_extra05.svg` — heading "전자결제(PG)" — body "상품 및 서비스 등을 신용카드로 안전하고 편리하게 결제할 수 있도록 지원하는 서비스" — bullets: ["신용카드,계좌이체,가상계좌 등 다양한 수단의 결제 서비스 제공", "선정산 서비스 제공 (D+1)"]
   6. icon `/images/subpages/img_extra06.svg` — heading "기업메시징(알림톡, 네이버톡톡)" — body "기업이 정보(광고)성 메시지를 카카오톡, 네이버채널을 통해 사용자에게 텍스트, 이미지 등 다양한 형태로 메시지 발송" — bullets: ["문자보다 저렴한 가격으로 텍스트, 이미지 등 다양한 형태의 Biz 메시지 발송", "타겟 고객에게 마케팅 메시지 발송"]
5. `InquiryCTA` with `mailto="contact@bonanza-story.co.kr"`
6. Partner teaser block below InquiryCTA (same pattern as the Payment page — copy its existing JSX structure if visible in `src/app/business/payment/page.tsx`): centered card/banner with `/images/subpages/logo_coocon.svg` and text "보난자스토리 핵심파트너" plus a "바로가기 →" link to `https://www.coocon.net/` (`target="_blank" rel="noopener noreferrer"`)

## Assets (already downloaded to `public/images/subpages/`)
- `svisual-payment.jpg` (shared with Payment page)
- `img_extra01.svg` through `img_extra06.svg`
- `logo_coocon.svg` (shared)

## Responsive Behavior
- **Desktop (>=1024px):** 3-column grid
- **Tablet (768-1023px):** 2-column grid
- **Mobile (<768px):** 1-column stacked

=== END SPEC ===

When done:
1. Run `npx tsc --noEmit` and fix any type errors.
2. Run `npm run build` to confirm the whole project still compiles.
3. Commit your work with a clear commit message.
4. Report back: file paths created, confirmation of build/typecheck status.
