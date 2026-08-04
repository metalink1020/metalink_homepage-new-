# ContactPage Specification

## Overview
- **Target file:** `src/app/contact/page.tsx`
- **Route:** `/contact` (this is the destination of the "사업문의" header/footer link, corresponding to the source's `/news/inquiry.php`)
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/page-inquiry.jpg`
- **Interaction model:** static card grid, no forms or real submission (out of scope — "문의하기" buttons are decorative/non-functional, e.g. `href="#"` or a disabled-looking button)
- Use `SubPageHero` (`src/components/subpages/SubPageHero.tsx`).

## Page Structure
1. `SubPageHero` — title "사업문의", description "각 사업분야 별로 궁금하신 점이나 제휴, 사업제안 등을 남겨주시면\n확인 후 신속하게 연락 드리겠습니다.", bgImage `/images/subpages/svisual-inquiry.jpg`
2. Card grid section — background decorative image `/images/subpages/bg_inquiry.jpg` (full-bleed, `object-cover`, behind the cards) with two additional decorative overlay layers if feasible (large blurred circular pattern `ptn_inquiry.svg` bottom-right, faint large wordmark `txt_inquiry.svg` bottom-left with `mix-blend-mode: multiply`) — these are subtle background decoration; if they complicate the layout, a plain `bg_inquiry.jpg` background alone is an acceptable simplification, but try to include at least the `ptn_inquiry.svg` circular pattern since it's visually distinctive in the screenshot
3. 5 cards in a 2-column grid (`grid grid-cols-1 md:grid-cols-2 gap-[60px]`), each card: `background:#fff; border-radius:20px; padding:60px; min-height:340px; box-shadow:0 3px 10px rgba(0,0,0,.02)`, containing:
   - Small company logo (top)
   - Company name (`font-size:16px; font-weight:500`, small gap below logo)
   - Bold title line + optional parenthetical product list (gray, smaller)
   - A "문의하기" pill button anchored to the bottom-right corner of the card (`position:absolute` bottom-right on desktop, or just placed at the bottom of the card content on mobile), style: border `1px solid #ddd`, rounded-full, `height:55px; width:190px`, arrow icon after the text (`arrow_link.svg`), non-functional (`href="#"`)

## Text Content & Assets (verbatim, in order — logo files already in `public/images/subpages/`)
1. **보난자팩토리** — logo `inquiry-bonanzafactory.png` — "디지털자산 컴플라이언스" — "(TranSafer, TranSight)"
2. **보난자랩** — logo `inquiry-bonanzalab.png` — "디지털자산 투자정보" — "(DayFin)"
3. **플러그앤엑스** — logo `inquiry-plugnx.png` — "디지털 인증·서명 솔루션" — "(본인인증, 전자문서)"
4. **트라버스** — logo `inquiry-traverse.png` — "블록체인 데이터 및 인공지능 솔루션" — (no parenthetical product list)
5. **바이스** — logo `inquiry-vice.png` — "마케팅 솔루션 기획/개발/지급·결제대행 서비스" — "(Byro)"

## Assets (all in `public/images/subpages/`)
- `svisual-inquiry.jpg`, `bg_inquiry.jpg`, `ptn_inquiry.svg`, `txt_inquiry.svg`, `arrow_link.svg`
- `inquiry-bonanzafactory.png`, `inquiry-bonanzalab.png`, `inquiry-plugnx.png`, `inquiry-traverse.png`, `inquiry-vice.png`

## Responsive Behavior
- **Desktop (>=1024px):** 2-column card grid as described
- **Mobile (<768px):** single-column stacked cards, "문의하기" button becomes a normal in-flow block at the bottom of each card rather than absolutely positioned
