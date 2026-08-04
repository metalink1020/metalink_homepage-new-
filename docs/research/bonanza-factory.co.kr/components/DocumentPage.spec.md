# DocumentPage Specification

## Overview
- **Target file:** `src/app/business/document/page.tsx`
- **Route:** `/business/document`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/page-document.jpg`
- **Interaction model:** static content, identical template to the existing Authentication page (this is Authentication's second tab: 본인인증 vs 전자문서)
- Sibling of the already-built `/business/authentication` page.

## Already-built shared components — use them, do not rebuild
- `SubPageHero`, `AsideTabs`, `FeatureList`, `ExtraServiceList`, `InquiryCTA` (all in `src/components/subpages/`)

## Page Structure
1. `SubPageHero` — title "Authentication", description "고객이 안심할 수 있는 비대면 거래를 위한 디지털 기반 고객인증 및 증명을 지원합니다.", bgImage `/images/subpages/svisual-authentication.jpg` (reuse Authentication's hero image)
2. `AsideTabs` items: `[{label:"본인인증", href:"/business/authentication"}, {label:"전자문서", href:"/business/document"}]`, activeHref `/business/document`
3. `FeatureList` (1 item): heading "공인전자문서 솔루션", body "기업이 고객에게 종이로 발송하던 고지서 및 통지서를 전자문서중계기관(카카오,네이버)을 통해 본인명의 휴대폰으로 전달하는 서비스입니다.", image `/images/subpages/img_document01.svg`
4. Three plain feature blocks (centered heading+body, no images — same `mx-auto max-w-[700px] py-16 text-center` pattern used elsewhere):
   1. "높은 수신율 및 열람률" — "다양한 연령층의 사용자를 보유한 중계기관의 플랫폼에서 전자문서를 발송함으로써, 열람률을 제고합니다."
   2. "높은 서비스 신뢰성" — "전자문서 인증과 열람에 필요한 라이선스를 모두 확보하여 서비스의 신뢰도를 담보합니다."
   3. "운영 안정성 제고" — "전자문서 이용 고객의 권리 보장을 위해 필요한 기능을 직관적으로 탑재하였으며, 비대면 고객센터 운영을 통해 발송기관의 운영 부담을 최소화합니다."
5. `ExtraServiceList`: title "고객 민원을 최소화하고, 신속한 문서 열람을 지원합니다", items:
   - { icon: "/images/subpages/img_document02.svg", heading: "유통증명 서비스", body: "전자문서 송 · 수신 및 열람 이력 정보를 증빙할 수 있는 유통증명서 발급" }
   - { icon: "/images/subpages/img_document03.svg", heading: "간편문서 서비스", body: "본인확인이 불필요한 전자문서를 별도의 인증 절차 없이 열람" }
6. `InquiryCTA` with `mailto="contact@bonanza-plug.co.kr"`

## Assets (already downloaded to `public/images/subpages/`)
- `svisual-authentication.jpg` (shared with Authentication page)
- `img_document01.svg` (FeatureList image), `img_document02.svg`, `img_document03.svg` (ExtraServiceList icons)
- `img_document01_m.svg`, `img_document04.svg` unused, skip them

## Responsive Behavior
- **Desktop (>=1024px):** FeatureList side-by-side, ExtraServiceList items in a row
- **Mobile (<768px):** FeatureList stacks, ExtraServiceList items stack

=== END SPEC ===

When done:
1. Run `npx tsc --noEmit` and fix any type errors.
2. Run `npm run build` to confirm the whole project still compiles.
3. Commit your work with a clear commit message.
4. Report back: file path created, confirmation of build/typecheck status.
