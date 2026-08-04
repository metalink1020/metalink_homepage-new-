# ProductsSection Specification (section2)

## Overview
- **Target file:** `src/components/ProductsSection.tsx`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/products-section2.jpg`
- **Interaction model:** scroll-driven on desktop (pinned title + 3D card reveal), horizontal swipe carousel on mobile — **NOT click-driven**. This is the section most at risk of being built wrong; do not build simple always-visible cards.
- Client component — needs an `IntersectionObserver` (one per card) to add a `show`/`in-view` class when each card scrolls into the viewport, since the real site's custom scroll-linked JS is not reverse-engineerable 1:1 — an IntersectionObserver-triggered CSS transition is the correct equivalent and satisfies "scroll-driven, not click-driven."

## DOM Structure
Two-column layout: left column = pinned title, right column = 3 stacked cards, each revealed as it scrolls into view.
- `.con_left` (title) — becomes `sticky` (use `position:sticky; top:150px` — simpler and equally correct in Next/CSS than replicating the original's raw `position:fixed` + manual bounds math) while its parent section is in the viewport
- `.con_right` — 3 product cards, each ~`450px` tall, spaced with generous vertical gap, alternating slight horizontal offset (odd cards left-aligned, even cards right-aligned) to match the diagonal cascade in the screenshot

## Computed Styles
- Section: `margin: 160px 0 200px` (120px 0 150px at 1024–1439px)
- Title: font-size 35px, font-weight 700 (`m_title` — 30px at 1024–1439px, 24px at <=767px)
- Card link (`a`): `width:380px; max-width:350px; height:450px; padding:60px 40px; background:#1540DB; border-radius:20px; overflow:hidden`
- Card default (off-screen) state: `transform: translateY(40vh) rotateX(-30deg); transform-origin:center top; transition:1s`
- Card in-view state (`.show`): `transform:translate(0,0)`
- Card title (`.tt`): font-family Poppins, font-size:36px, font-weight:700, line-height:54px, color:#fff
- Card description (`p`): font-size:18px, font-weight:600, line-height:28px, color:#fff, margin-top:18px
- "+" circle icon button bottom-right: `width:48px;height:48px;border-radius:50%;background:#fff`, centered plus glyph (use lucide `Plus` icon, dark blue color)
- Hover (desktop): icon circle's soft outer ring scales to 1.5x (an absolutely-positioned pseudo-ring behind the button, opacity .26, scale on hover); use a simple `group-hover:scale-150` on a ring `<span>` behind the icon button

## Text Content (verbatim)
- Section heading: "디지털자산과 금융의\n연결고리를 만들어갑니다."
- Card 1 — TranSafer: "실명계좌 기반 AML/FDS\n원화입출금 검증 솔루션" — href `/business/compliance.php`
- Card 2 — TranSight: "국내 특화 가상자산\n지갑 검증 솔루션" — href `/business/tranSight.php`
- Card 3 — DayFin: "디지털자산 투자정보\n데이터 솔루션" — href `/business/data.php`

## Assets
- Cards are solid `#1540DB` backgrounds with decorative curved overlay shapes visible in the screenshot (soft lighter-blue diagonal swoosh) — approximate with a `radial-gradient`/`conic-gradient` overlay inside the card, no downloaded asset strictly required (the `m2_img01-09.svg` files downloaded to `public/images/` are decorative hover-layer graphics from the original; use `m2_img01.svg`/`m2_img02.svg`/`m2_img03.svg` as a subtle absolutely-positioned background layer per card if they visually match the swoosh in the screenshot, else fall back to the gradient)

## Responsive Behavior
- **Desktop (>=1024px):** sticky left title, scroll-revealed cascading cards, hover ring effect active
- **Tablet/Mobile (<1024px):** convert to a horizontal swipeable row (`overflow-x:auto; scroll-snap-type:x mandatory`, each card `scroll-snap-align:start`) — this replaces the slick.js carousel from the original; title sits above, not pinned
- **<=767px:** card height uses `65vw` sizing instead of a fixed 450px so cards stay proportional on narrow screens
