# TranSightPage Specification

## Overview
- **Target file:** `src/app/business/transight/page.tsx`
- **Route:** `/business/transight`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/page-transight.jpg`
- **Interaction model:** static content, identical template to the existing Compliance page (this is Compliance's second product tab: TranSafer vs TranSight)
- This page is a sibling of the already-built `/business/compliance` page — it shares the exact same hero copy and `AsideTabs` bar, just with TranSight active and different body content.

## Already-built shared components — use them, do not rebuild
- `SubPageHero` (`src/components/subpages/SubPageHero.tsx`)
- `AsideTabs` (`src/components/subpages/AsideTabs.tsx`)
- `FeatureList` (`src/components/subpages/FeatureList.tsx`)
- `InquiryCTA` (`src/components/subpages/InquiryCTA.tsx`) — takes an optional `mailto` prop

## Page Structure
1. `SubPageHero` — title "Compliance" (yes, same title as the Compliance page — this product lives under the same business category), description "디지털자산의 안전한 거래를 위한 다양한 컴플라이언스 솔루션을 제공합니다.", bgImage `/images/subpages/svisual-compliance.jpg` (reuse the same hero image as Compliance)
2. `AsideTabs` items: `[{label:"TranSafer", href:"/business/compliance"}, {label:"TranSight", href:"/business/transight"}]`, activeHref `/business/transight`
3. `FeatureList` (1 item): heading "딥러닝 기반 국내 특화 가상자산 지갑검증 솔루션", body "TranSight는 고위험 가상자산 지갑주소와 트랜잭션(거래) 분석을 바탕으로 지갑의 범죄 연관성 및 위험도를 판별하여 가상자산 관련 범죄 예방을 지원합니다.", image `/images/subpages/img_transight01.svg`
4. Three plain feature blocks (centered heading+body, no images, same layout pattern as the Compliance/Payment/Data pages' extra blocks — `mx-auto max-w-[700px] py-16 text-center`):
   1. "한국형 범죄에 특화된\n고위험 가상자산 지갑 DB" — "마약, 성범죄 등 국내 범죄 트렌드의 이해와 다양한 범죄 은어 정보를 바탕으로 키워드 딕셔너리를 구축하여 한국 가상자산 관련 범죄에 특화된 DB를 보유하고 있습니다."
   2. "국내외 규제동향을 반영한 위험평가모델" — "삼정KPMG와의 협업을 통해 가상자산 특화 위험평가모델을 구축하여 보다 체계적인 스코어링을 제공합니다."
   3. "딥러닝 기반 분석 커버리지 확대" — "GAT(Graph Attention Network) 기술을 바탕으로 고위험 지갑의 N차 거래 레이어까지 분석을 확대하여 범죄 거래에 간접적으로 연관된 지갑까지 종합적으로 모니터링 합니다."
5. `InquiryCTA` with `mailto="contact@bonanza-factory.co.kr"`

## Assets (already downloaded to `public/images/subpages/`)
- `svisual-compliance.jpg` (shared with Compliance page)
- `img_transight01.svg`, `img_transight01_m.svg`, `img_transight02.svg`, `img_transight03.svg`, `img_transight04.svg` (use `img_transight01.svg` for the FeatureList image; the others are unused decorative variants, skip them)

## Responsive Behavior
- **Desktop (>=1024px):** FeatureList side-by-side (text + image)
- **Mobile (<768px):** FeatureList stacks (text above image)

=== END SPEC ===

When done:
1. Run `npx tsc --noEmit` and fix any type errors.
2. Run `npm run build` to confirm the whole project still compiles.
3. Commit your work with a clear commit message.
4. Report back: file path created, confirmation of build/typecheck status.
