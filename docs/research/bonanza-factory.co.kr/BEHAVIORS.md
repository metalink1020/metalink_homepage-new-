# Behaviors — bonanza-factory.co.kr (homepage)

Ground truth extracted from the site's own `styles.css` / `reactive.css`
(downloaded to `docs/research/bonanza-factory.co.kr/raw-css/`), cross-checked
live via `getComputedStyle` and JS scroll-event simulation. Site uses AOS
(Animate On Scroll) library, slick.js (mobile carousel), and custom JS for
scroll-pinning and the marquee.

## 1. Header — scroll-triggered background swap
- **Trigger:** `window.scrollY` — measured threshold is between 100px and 105px (real DOM class toggle observed at 105px, not yet toggled at 100px). Use **100px** as the implementation threshold.
- **State A (top, scrollY < 100):** `.header.gmain` — `background: transparent`, border-bottom `1px solid rgba(255,255,255,.1)`, logo = `htop_logo` (white wordmark), nav link color `#fff`
- **State B (scrolled, scrollY >= 100):** adds class `.fixed` — `background:#fff`, logo swaps to `fixed_logo` (dark wordmark), nav link color `#000`, lang button color `#000`
- **Transition:** `transition: .2s linear` on `.header` itself (background swap is a hard class toggle, not an animated color — the `.2s linear` transition covers other properties like the mobile menu btn bars)
- **Implementation:** `window.scroll` listener toggling a boolean/class at `scrollY > 100`

## 2. Header — nav dropdown (desktop)
- **Trigger:** hover (`li:hover > .snb` → `display:block`), desktop only (`min-width:1024px` context; on mobile it's click-driven inside the slide-in menu)
- Only "회사소개" and "사업분야" have submenus (`.snb`); "회사소식" is a plain link
- **Style:** `.snb` is `position:absolute`, white rounded card, `box-shadow:0 0 10px rgba(0,0,0,.1)`, centered under the parent link, `display:none` → `block` on hover, no transition defined (instant show/hide)

## 3. Header — mobile menu (<=1023px)
- **INTERACTION MODEL: click-driven.** Hamburger button (`.btn_menu`, 3 bars) toggles `.header.on`
- Bars morph into an X: top bar rotates 135deg, middle bar width→0, bottom bar rotates -135deg, `transition:.2s linear`
- `.gnb` panel slides in from the right: `right:-100% → right:0`, full-screen white background, `transition:.2s linear`
- Submenus become in-place expanding accordions (`li.open > a` → highlighted blue background, arrow rotates 180deg) rather than hover popovers

## 4. Section 1 (Hero) — entrance + slide indicator
- **INTERACTION MODEL: time-driven on load; static thereafter** (no scroll-driven change within the hero itself — the header's scroll listener is separate)
- Built as a slick.js slider with a single active slide (`.slick-current`)
- Background image: `animation: mvisual 3s linear forwards; animation-delay:.5s` — `transform: scale(1) → scale(1.05)` (slow Ken-Burns zoom-in)
- Headline text (`p` inside `.mv_txt`) starts `opacity:0` — animated in on load (AOS-style fade, exact AOS attributes not confirmed in the static CSS dump but the library is loaded — use a simple fade+slight-up entrance, duration ~800ms, on mount)
- Slide dots (`.slick-dots`) at bottom center; active dot widens to 30px pill; play/pause control next to dots (present in markup but only one real slide, so decorative — build as static UI, non-functional is acceptable since there is only 1 slide)

## 5. Section 2 (Products) — scroll-pinned title + 3D card reveal
- **INTERACTION MODEL: scroll-driven**, custom JS (not IntersectionObserver-confirmed, but behaves like one) — NOT click-based
- `.con_left` (title "디지털자산과 금융의 연결고리를 만들어갑니다.") becomes `position:fixed` (class `.page_start` added to `.section2`) while the section is in range, pinning the title in the viewport while cards scroll past on the right; reverts to `position:absolute; bottom:0` once scrolled past (class `.mc02_end`)
- Each product card (`.mv a`) default state: `transform: translateY(40vh) rotateX(-30deg)`, `transform-origin: center top`, `transition: 1s`
- Reveal state: class `.show` added → `transform: translate(0,0)` (card flies/rotates up into place as it scrolls into view)
- A bottom progress nav (`.navi .prograss .mc2bar`) fills to 1/3, 2/3, 3/3 width depending which card index is active (`#mc2_navi_01/02/03`), `transition:.2s linear`
- **Hover (desktop):** card icon circle (`i:after`) scales to 1.5x; a background `hover_img` layer scales to 1.2x — both `transition:.2s linear`
- Cards: TranSafer (blue #1540DB card, diagonal cut top via clip/skew look from screenshot), TranSight, DayFin — each `380x450px` max, `border-radius:20px`, `background:#1540DB`

## 6. Section 3 (Business capabilities) — hover accordion (desktop) / static stack (mobile)
- **INTERACTION MODEL: hover-driven on desktop (>=1024px), NOT click.** This is the #1 mistake to avoid per project guidelines — confirmed via CSS: `.business_area.hover_set li {width:9.6%}` / `.hover_set li.hover {width:52%}`
- 5 panels laid out `display:table-cell`, each `width: calc(100%/6)` at rest (structural CSS says /6 but only 5 are rendered)
- On hover: panel widens to 52%, background-image swaps to a `_hover` variant (brighter/full-color version), text reveals:
  - `.tt` (small caption, always visible at rest, opacity .3) → fades out on hover
  - `.htt` (big heading, `font-size:50px`, `height:0; opacity:0` at rest) → `opacity:1; height:50px`, `transition-delay:.2s`
  - `.stt` (subtitle) → `opacity:1; height:auto`, `transition-delay:.2s`
  - arrow icon `i` (opacity .3 at rest) fades to opacity 0 on hover; a second arrow (`txt_box:after`) grows from `height:0` to `height:40px` opacity 1
- Non-hovered siblings get class `.unhover`: text_box padding shrinks, `.tt` font-size drops to 18px, and a `backdrop-filter:blur(5px)` darkening overlay is added via `a:before`
- Transition: `.3s linear` on the `li` width itself; `.2s linear` on inner text/icon transitions
- **Mobile (<=1023px):** accordion behavior is disabled entirely — `.business_area { flex-direction:column }`, each li full width/auto height, background swaps to `_m` image variants with a left-to-right dark gradient overlay (`linear-gradient(to right,#000f,#0000)`) for text legibility, `.htt`/`.tt` always visible, `.stt` hidden (`display:none`)

## 7. Section 4 (Partner marquee) — infinite auto-scroll
- **INTERACTION MODEL: time-driven, continuous, no user input**
- Two rows (`.marquee.top`, `.marquee.btm`), each containing the same 14 logos rendered twice back-to-back (for seamless looping) inside `.str_move` (`position:relative; left:0`)
- The CSS keyframe version (`@keyframes marquee`/`marquee2`, `left:0 → -100%`) is commented out in the shipped CSS — the live animation is driven by JS directly animating the `left` (or a transform) of `.str_move` every frame
- Rows move in **opposite directions** (confirmed visually: top row's rightmost logos differ from bottom row's at the same scroll offset, consistent with a mirrored/reverse marquee)
- Each logo tile: fixed width (`295px` desktop / `280px` @1440 / `220px` @1024), centered logo image, opacity ~1 (not dimmed)
- Recommended implementation: CSS `@keyframes` translateX loop (`0% translateX(0)`, `100% translateX(-50%)`) on a flex row containing the logo list duplicated 2x, `animation: marquee 30s linear infinite` (top) and `marquee-reverse 30s linear infinite` (bottom) — functionally equivalent, avoids hand-rolled JS raf loop

## 8. Footer
- **Family Site dropdown:** click-driven accordion, `.family_wrap` toggles `.on` → height animates `0 → auto`, chevron icon rotates 180deg, `transition:.2s linear`
- **Go-to-top button:** `.footer .gotop` is `display:none` by default, becomes `display:block` when `.footer` gets class `.go_on` (added once user has scrolled down some distance — exact threshold not isolated, implement as "visible once scrolled past the hero", i.e. same 100px+ heuristic as header, or past section1 height for less aggressive appearance — use `scrollY > 600` as a reasonable trigger since it's a "back to top" affordance, not critical to match exactly)
- Static content otherwise: legal links, company registration info, ISO 9001/14001 + ISMS certification badges (opacity .4 icons)

## Responsive summary (see PAGE_TOPOLOGY.md for full breakpoint list)
- Mobile nav: hamburger + full-screen slide-in menu (behavior #3)
- Mobile section2: cards become a slick.js horizontal swipe carousel instead of scroll-pinned 3D reveal
- Mobile section3: hover-accordion disabled, static stacked cards with always-visible headings
- Header/footer font sizes and paddings step down at 1024px and 767px per the raw CSS
