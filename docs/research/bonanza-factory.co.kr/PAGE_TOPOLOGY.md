# Page Topology — bonanza-factory.co.kr (homepage)

Scope: homepage only (`/`), per project scope defaults. Site is a Korean corporate
site (fintech/reg-tech). Other nav destinations (`/company/about.php`,
`/business/*.php`, news, contact) are out of scope — links are preserved but
point to routes that are not built.

DOM root: `body > .header` (fixed overlay) + `.main_container` (4 sections) + `.footer`.

## Layers (z-index / stacking)
1. `.header` — `position:fixed`, `z-index:100`, full width, transparent over hero, spans entire page height-wise as an overlay
2. `.main_container` — normal flow, 4 sections
3. `.footer` — normal flow, dark background
4. `.footer .gotop` — fixed scroll-to-top button, appears after scrolling (class `.go_on` on `.footer`)

## Section order

1. **Header/Nav** (`.header.gmain`) — fixed overlay, transparent→white on scroll
2. **Section 1 — Hero** (`.section1`) — full viewport height, dark gradient/flow-lines background image, headline, slick-dot navigation (single slide in practice)
3. **Section 2 — Products** (`.section2`) — "디지털자산과 금융의 연결고리를 만들어갑니다." + 3 product cards (TranSafer, TranSight, DayFin), scroll-pinned left title + 3D-reveal cards on the right
4. **Section 3 — Business Capabilities** (`.section3`) — "끊임없는 혁신과 노하우로 가치있는 고객경험을 제공합니다" + 5 vertical accordion panels (Compliance / Payment / Authentication / Data / Blockchain & AI), full-bleed dark section
5. **Section 4 — Partner Logos Marquee** (`.section4`) — two infinite-scroll rows of 14 partner/client logos, opposite directions
6. **Footer** (`.footer`) — legal links, Family Site dropdown, company info, ISO/ISMS certification badges

## Layout system
- Content max-width container: `.inner { max-width:1700px; padding:0 50px; margin:0 auto; }`
- No CSS grid; flexbox + absolute/fixed positioning for scroll-pinned elements
- `html,body { overflow-x:hidden; }`

## Responsive breakpoints (from actual site CSS, not guessed)
Real breakpoints found in stylesheet media queries: `1920`, `1639/1640`, `1440`,
`1280`, `1023/1024`, `767`.
- **≥1640px**: full desktop layout, `.inner` padding-left on section2 driven by fixed px offsets
- **1440–1639px**: section2 `.inner` switches to `padding-left:40%` (percentage-based), card straddle padding becomes `52%`
- **1024–1439px**: `.section2` margin shrinks to `120px 0 150px`, hero text shrinks to 46px/70px line-height, section3 hover text 44px
- **768–1023px**: header switches to mobile hamburger menu (full-screen slide-in gnb), section3 accordion becomes a static stacked column (no hover-expand), business images swap to `_m` variants with a dark gradient overlay, product cards become a **slick.js horizontal swipe carousel** (`.slick-list`/`.slick-slide`)
- **≤767px**: further size reductions (header 60px height, hero text 30px/44px, footer stacks to column, certification badges go horizontal with smaller icons)

## Note on env limitation
Browser window resize did not take effect in this session (viewport stayed at
1920px throughout). Responsive behavior below was extracted directly from the
site's shipped CSS media-query rules (ground truth), not from live resizing —
this is more reliable than visual inspection alone.
