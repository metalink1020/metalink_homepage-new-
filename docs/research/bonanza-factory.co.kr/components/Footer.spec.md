# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/marquee-footer.jpg` (bottom half of the screenshot)
- **Interaction model:** click-driven (Family Site dropdown accordion) + scroll-driven (go-to-top button visibility)
- Client component — needs local state for the Family Site dropdown open/closed, and a scroll listener for the go-to-top button.

## DOM Structure
- `.fcon_top` — top row: legal links (left) + Family Site dropdown (right), separated from bottom by a `1px solid rgba(255,255,255,.12)` divider
- `.fcon_btm` — footer logo image + company info (left) + certification badges (right)
- Fixed go-to-top button, bottom-right of viewport, appears once scrolled down

## Computed Styles
- Section: `background:#000; padding:30px 0 40px` (30px 0 55px @<=767px)
- `.fcon_top`: `display:flex; justify-content:space-between; align-items:center; padding-bottom:30px; border-bottom:1px solid rgba(255,255,255,.12)`
  - Legal links: "개인정보 처리방침" (font-size:15px, font-weight:800, color:#fff), "사업문의" (font-size:14px, font-weight:500, color:#fff), gap 35px between them
  - Family Site dropdown button: `width:200px; height:40px; background:#31363E; border-radius:40px` (closed) → `border-radius:24px 24px 0 0` (open), text "Family Site" font-size:14px color:#fff opacity:.8, chevron icon rotates 180deg when open; expanded panel below: `background:#31363E`, `border-radius:0 0 24px 24px`, height animates `0 → auto` — since this dropdown has no real linked family sites in the extracted content, render it as a static UI affordance with an empty/placeholder list item (non-functional dropdown is acceptable — no real destination sites were found)
- `.fcon_btm`: `padding-top:30px`, flex row `justify-content:space-between; align-items:flex-end` (column on mobile)
  - Footer logo: `max-width:220px` (160px @<=767px)
  - Brand name: "주식회사 보난자팩토리" — font-size:14px, font-weight:700, color:#fff
  - Address line: font-size:14px, color:#F2F2F2, opacity:.6, items separated by a `1px` vertical divider (`|`-style), items: 서울특별시 영등포구 양평로 12, 정오빌딩 7층 / 대표이사 : 김영석 / 개인정보보호책임자 : 이찬행 / 사업자등록번호 : 818-88-00715
  - Copyright: "ⓒ Bonanza Factory Co.,Ltd. All rights reserved." — font-size:14px, color:#F2F2F2, opacity:.5
  - Certification badges (right side): `display:flex; gap:50px`, each badge = icon (opacity .4, height 32px) + 2-line label (font-size:14px, font-weight:500, color:#fff, opacity:.4):
    1. EURO CERT icon — "품질경영 국제표준 / ISO 9001, ISO 14001"
    2. ISMS icon — "통합입출금서비스 / 블록체인고위험거래검증관련서비스 / 2024.01.18 ~ 2027.01.17"
- Go-to-top button: `position:fixed; bottom:40px; right:30px; width:50px; height:50px; border-radius:50%; background:#1640DB`, up-chevron icon centered (white), `display:none` by default, shown once `scrollY > 600` (reasonable trigger — exact original threshold not isolated)

## Assets (downloaded to `public/images/`)
- `f_logo.svg` — footer wordmark logo
- `certi01.svg` — EURO CERT icon (ISO 9001/14001)
- `certi02.svg` — ISMS icon
- `go_top_arrow_w.svg` — up-chevron for the go-to-top button
- `family_btn.svg` — chevron for the Family Site dropdown

## Text Content (verbatim)
See Computed Styles section above for exact copy — reproduced in full there.

## Responsive Behavior
- **Desktop:** as described
- **<=767px:** `.fcon_top` wraps (`flex-wrap:wrap`, `align-items:flex-start`, no bottom border), Family Site button shrinks to `150x30px` with 10px font, `.fcon_btm` stacks to a single column, address line wraps with smaller dividers, certification badges go horizontal with smaller icons (24px) and 10px text, go-to-top button shrinks to `35x35px` at `bottom:20px;right:20px`
