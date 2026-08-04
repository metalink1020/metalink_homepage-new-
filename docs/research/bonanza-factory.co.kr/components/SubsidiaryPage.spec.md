# SubsidiaryPage Specification

## Overview
- **Target file:** `src/app/company/subsidiary/page.tsx`
- **Route:** `/company/subsidiary`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/page-subsidiary.jpg`
- **Interaction model:** static list (no hover/scroll-driven behavior beyond a simple sticky heading on desktop, same pattern as About)
- Use the shared `SubPageHero` component (`src/components/subpages/SubPageHero.tsx`).

## Page Structure
1. `SubPageHero` — title "Bonanza Companies", description "각 기업의 전문성 및 계열사 간 시너지를 통해\n미래 성장동력을 확보합니다.", bgImage `/images/subpages/svisual-subsidiary.jpg`, default heightClass (700px)
2. Section heading "계열사 소개" (left-aligned, font-size 35px bold) — on desktop this heading can sit in a left column that stays in view (`md:sticky md:top-[150px] md:self-start`) while the 4 company cards scroll on the right; simpler flat stacked layout with the heading above the cards is also acceptable if the sticky column feels awkward at this content length — prioritize a clean readable layout over forcing the sticky behavior.
3. Four subsidiary cards, each: `background: url(bg_subsidiary.png) #F7FAFF no-repeat right bottom / contain; padding: 50px; border-radius: 12px` (source has no explicit border-radius on `.subsidiary_box` — use `rounded-2xl` for a clean modern look since this is a content card), containing:
   - A `<dl>` header row: company logo image (left, `height: 40px` roughly) + company name (large bold, 22px) — separated from the body by a dashed bottom border
   - Subtitle/tagline (bold, 22px)
   - Body paragraph (gray `#666`, line-height 30px)
   - Optional "OOO 홈페이지 바로가기" external link pill button (top-right corner on desktop: `position:absolute; top:85px; right:60px`, blue `#628BE8` background, white text, rounded-full, with an external-link arrow icon) — only present for 보난자랩 (DayFin) per the source text

## Text Content (verbatim, in this order)
1. **보난자랩** — logo: `/images/subpages/subsidiary-bonanzalab.png`
   - Subtitle: "디지털자산 투자정보 데이터 솔루션"
   - Body: "디지털자산 특화 데이터 솔루션 DayFin을 제공합니다.\n\n금융 전문성과 데이터 활용역량을 바탕으로 디지털자산에 특화된 다양한 투자정보와 인사이트를 제공합니다. 이용기업과 투자자가 신뢰할 수 있는 서비스를 제공함으로써 디지털자산 투자정보 데이터의 새로운 기준을 제시합니다."
   - Link button: "DayFin 홈페이지 바로가기" → href="#" (external site, out of scope — link is decorative)
2. **플러그앤엑스** — logo: `/images/subpages/subsidiary-plugnx.png`
   - Subtitle: "디지털 인증·서명 솔루션"
   - Body: "누구에게나 안전한 금융서비스 환경을 제공합니다.\n\n본인인증, 전자서명, 전자문서 솔루션과 서비스를 금융사, 가상자산거래소, 이커머스 등에 제공함으로써 고객의 금융활동을 안전하게 만듭니다. 특히 가상자산업계의 인증 점유율은 60%를 상회하며 건전한 가상자산 투자문화를 선도하고 있습니다."
3. **트라버스** — logo: `/images/subpages/subsidiary-traverse.png`
   - Subtitle: "블록체인 데이터 및 인공지능 솔루션"
   - Body: "빠르게 변화해가고 있는 블록체인 금융생태계에 가장 효율적이고 빠른 답을 제시합니다.\n\n블록체인 데이터의 수집, 가공, 분석, 검증부터 인공지능을 통한 확장과 예측까지, KYT솔루션 및 가상자산 AML, 스마트 컨트랙트 감사 등의 소프트웨어를 개발하고 공급합니다."
4. **바이스** — logo: `/images/subpages/subsidiary-vice.png`
   - Subtitle: "마케팅 솔루션 기획/개발/지급·결제대행 서비스"
   - Body: "마케팅 솔루션 기획/개발/지급·결제대행 서비스를 제공합니다.\n\n데이터 기반의 인사이트를 통해 문제를 해결하는 신사업 전문 기업입니다."

## Assets (in `public/images/subpages/`)
- `svisual-subsidiary.jpg`, `bg_subsidiary.png`
- `subsidiary-bonanzalab.png`, `subsidiary-plugnx.png`, `subsidiary-traverse.png`, `subsidiary-vice.png`
- `icon_link.svg` (external link arrow for the DayFin button)

## Responsive Behavior
- **Desktop (>=1024px):** heading + 4-card list, generous padding
- **Mobile (<768px):** cards stack full-width, reduced padding (`p-8` instead of `p-[50px]`), link button becomes a full-width block below the text instead of an absolutely-positioned corner pill
