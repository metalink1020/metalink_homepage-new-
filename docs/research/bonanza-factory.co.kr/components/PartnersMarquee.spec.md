# PartnersMarquee Specification (section4)

## Overview
- **Target file:** `src/components/PartnersMarquee.tsx`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/marquee-footer.jpg`
- **Interaction model:** time-driven, continuous, no user input (no pause-on-hover in the original — keep it always animating)
- Pure CSS component, no client JS needed (uses the `animate-marquee-left` / `animate-marquee-right` keyframes already defined in `globals.css`).

## DOM Structure
Two rows, each a flex container holding the 14 partner logos duplicated twice back-to-back (28 total renders per row) so the loop is seamless. Top row scrolls one direction, bottom row the opposite direction.

## Computed Styles
- Section: `padding:140px 0 150px` (120px 0 @1024–1639px, 100px 0 @<=1023px)
- Each `.marquee` row: `position:relative; overflow:hidden; width:100%`, `margin-bottom:20px` between the two rows
- Row inner track: `display:flex`, animated via `animate-marquee-left` (top row) / `animate-marquee-right` (bottom row), both `animation-duration: 40s`, `linear infinite`
- Each logo tile: fixed width `295px` (desktop), `280px` @1440, `220px` @1024, centered logo image (`object-fit:contain`, natural logo colors, no dimming/opacity applied in the original)

## Assets (downloaded to `public/images/partners/partner01.png` … `partner14.png`)
Order (left to right as seen live, use this exact order for both rows):
1. partner01 — Coinone (`coinone`)
2. partner02 — NAVER
3. partner03 — 두나무 (Dunamu)
4. partner04 — MIRAE ASSET (미래에셋대우)
5. partner05 — KB국민은행
6. partner06 — 광주은행
7. partner07 — kakaopay
8. partner08 — kakao
9. partner09 — Samsung SDS (삼성SDS)
10. partner10 — LG CNS
11. partner11 — KPMG
12. partner12 — kakaobank
13. partner13 — Kbank
14. partner14 — coocon

(Exact filename↔brand mapping was inferred from on-screen visual order during the scroll sweep since the source filenames are content-hashed; if a builder finds a mismatch when rendering, prioritize visual correctness over this list's order — the goal is "these 14 real partner logos appear," not a guaranteed 1:1 filename mapping.)

## Text Content
No text — logo images only.

## Responsive Behavior
- Tile width shrinks at each breakpoint (295px → 280px @1440 → 220px @1024) but the marquee keeps running at all sizes, including mobile
- No layout restructuring beyond tile width — this section does not change to a grid or list at any breakpoint
