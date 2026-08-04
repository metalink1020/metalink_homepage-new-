# BusinessSection Specification (section3)

## Overview
- **Target file:** `src/components/BusinessSection.tsx`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/business-section3-default.jpg` (rest state) and `docs/design-references/bonanza-factory.co.kr/business-section3-hover.jpg` (Payment panel hovered — confirms exact expand behavior)
- **Interaction model: HOVER-driven accordion on desktop (>=1024px). NOT click-driven.** This is confirmed directly from the site's CSS (`.hover_set li {width:9.6%}` / `.hover_set li.hover {width:52%}`) and from a live hover test. Getting this wrong (building it as click-tabs) is the single most expensive mistake per project guidelines — do not do it.
- Client component — hover state per panel via local `useState`/`onMouseEnter`/`onMouseLeave` (CSS `:hover` alone is enough actually since there's no JS-computed value needed — pure CSS `group-hover` works and is simpler; use CSS-only if possible).

## DOM Structure
Full-bleed dark section, heading centered at top (overlapping the panels slightly), 5 panels laid out `display:flex` (table-cell equivalent), each `flex:1` at rest.

## Computed Styles
### Section
- `position:relative; min-height:980px; background:#000` (mobile: background forced `#000` explicitly)
- Heading (`.m_title`): centered, `padding:90px 0 130px`, sits above the panel row with a subtle radial glow background (`m3_txtbg.png`, decorative — can approximate with a soft radial-gradient glow instead if simpler)

### Panel row (desktop, >=1024px)
- `display:flex; height:100%` (each panel `flex:1`, i.e. ~20% each at rest for 5 panels — note the site's raw CSS says 9.6%/6-panel math but only 5 panels actually render, so use `flex-basis: 20%` at rest, not 9.6%)
- Each panel: `position:relative; transition: flex-basis .3s linear` (or `width` — flex-basis is the modern equivalent), background image `cover center`, full section height
- **Hover state:** hovered panel → `flex-basis: 52%`; siblings compress proportionally (flex handles this automatically once one grows)
- Background image swaps to the `_hover` variant on hover (brighter/full-color image) — implement as two stacked `<Image fill>` layers (base + hover), hover layer `opacity:0 → opacity:1` on `group-hover`, OR swap `src` conditionally; **prefer the opacity-crossfade approach** since it needs no state and is closer to real browser behavior
- Text block (`.txt_box`): positioned ~40% from top, `padding:0 66px`
  - `.tt` (caption, e.g. "Compliance"): font-family Poppins, font-size:24px, font-weight:600, color:#fff, opacity:.3 at rest, text-align:center — fades OUT on hover
  - `.htt` (big heading, same text repeated larger): font-size:50px, font-weight:700, color:#fff, text-align:left, `opacity:0,height:0` at rest → `opacity:1,height:50px` on hover, `transition-delay:.2s`
  - `.stt` (Korean subtitle): font-size:25px, color:#fff, `opacity:0,height:0` at rest → `opacity:1,height:auto` on hover, `transition-delay:.2s`
  - Arrow icon (40x40 circle, centered, opacity .3): fades to opacity 0 on hover; a second larger arrow grows in from the bottom of the text box (`height:0→40px, opacity:0→1`) on hover
- Non-hovered siblings while one panel is hovered: apply `backdrop-blur-sm` (approximates the original's `backdrop-filter:blur(5px)` darkening overlay) and shrink `.tt` to font-size 18px

## Text Content (verbatim, in order)
1. Compliance — "디지털자산 컴플라이언스 솔루션" — `/business/compliance.php`
2. Payment — "지급결제 비즈니스 지원 솔루션" — `/business/payment.php`
3. Authentication — "디지털 인증·서명 솔루션" — `/business/authentication.php`
4. Data — "디지털자산 투자정보 데이터 솔루션" — `/business/data.php`
5. Blockchain & AI — "블록체인 데이터 및 인공지능 솔루션" — `/business/blockchain_data_ai_solution.php`
- Section heading: "끊임없는 혁신과 노하우로 가치있는 고객경험을 제공합니다"

## Assets (all downloaded to `public/images/`)
- Base images: `m3_business01.jpg` … `m3_business05.jpg` (Compliance…Blockchain&AI, in order)
- Hover images: `m3_business01_hover.jpg` … `m3_business05_hover.jpg`
- Mobile images: `m3_business01_m.jpg` … `m3_business05_m.jpg`
- Arrow icon: `m3_arrow.svg`

## Responsive Behavior
- **Desktop (>=1024px):** hover-accordion as described above
- **<1024px (tablet/mobile): hover-accordion is DISABLED entirely.** Stack panels vertically (`flex-direction:column`), each full-width with auto height, background swaps to the `_m` image variant, apply a left-to-right dark gradient overlay (`bg-gradient-to-r from-black/70 to-transparent`) for text legibility, show `.tt`+`.htt` always (no hover needed), hide `.stt` (`display:none` per source CSS)
