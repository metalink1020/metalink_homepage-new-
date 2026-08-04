# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/hero-section1.jpg` (header visible at top, transparent over hero)
- **Interaction model:** scroll-driven (background swap) + hover-driven (desktop dropdowns) + click-driven (mobile menu)
- Client component (`"use client"`) — needs scroll listener and mobile-menu state.

## DOM Structure
`<header>` fixed, full width, z-index 100.
- `.inner` (logo left, nav center, contact+lang right, hamburger right on mobile)
  - Logo: wordmark text "Bonanza Factory" (site uses two logo image swaps; simplest correct approach: render `Bonanza Factory` wordmark as text using the Poppins font, color white by default / black when scrolled — do NOT need the actual logo.svg mask trick, just swap text color)
  - Nav (`gnb`): 4 items — "회사소개" (has dropdown), "사업분야" (has dropdown), "회사소식" (no dropdown), each `<Link>`
  - Right: "사업문의" contact link + language indicator "KR" with chevron (non-functional dropdown, static "KR" is fine)
  - Mobile: hamburger button (3 bars) replacing nav on <1024px, opens full-screen slide-in menu

## Nav items & links
1. 회사소개 → `/company/about.php` — dropdown: 보난자팩토리 (`/company/about.php`), 계열사소개 (`/company/subsidiary.php`)
2. 사업분야 → `/business/compliance.php` — dropdown: Compliance (`/business/compliance.php`), Payment (`/business/payment.php`), Authentication (`/business/authentication.php`), Data (`/business/data.php`), Blockchain & AI (`/business/blockchain_ai.php`)
3. 회사소식 → `/news` (no dropdown)
4. Right side: 사업문의 → `/contact` (plain link)

These target routes are NOT built (out of scope) — render as plain `<a href="...">` (not Next `<Link>`, to avoid prefetch 404 noise) so no build errors occur; clicking them is fine to 404 since they're out of scope.

## Computed Styles (exact values)
### `.header` container
- position: fixed; top:0; left:0; width:100%; z-index:100
- height: 80px (desktop), 60px (<=767px)
- border-bottom: 1px solid rgba(255,255,255,.1) at top state; `border-bottom:0` once scrolled
- transition: background-color .2s linear

### State A — top (scrollY < 100px)
- background: transparent
- nav link color: #fff (font-size:15px; font-weight:500; line-height:80px; each `<a>` has `padding:0 75px` horizontally — i.e. large horizontal hit area, adjust down for real content width, use `px-8` as a reasonable equivalent)
- contact link + "KR" color: #fff

### State B — scrolled (scrollY >= 100px)
- background: #fff
- nav link color: #000
- contact link + "KR" color: #000
- (no box-shadow in source; keep clean flat white)

### Logo
- font-weight 700, letter-spacing tight, ~18-20px, color inherits header text color (white/black per state) — matches "Bonanza Factory" wordmark look in screenshot

### Dropdown (`.snb`, desktop only, `min-width:1024px`)
- position: absolute; top:80px (full header height); left:50%; transform:translateX(-50%)
- width: 150px; background:#fff; border-radius:10px; padding:10px
- box-shadow: 0 0 10px rgba(0,0,0,.1)
- display:none → shown on `li:hover`
- each link: font-size:14px; color:#666; line-height:22px; text-align:center; padding:5px 0; hover color `#1640DB` + font-weight 700

### Mobile menu (<1024px)
- Hamburger `.btn_menu`: 80px x 80px (60px x 60px @<=767px) hit area, 3 horizontal bars (20-30px wide, 2px thick)
- Open state: bars morph into X (top bar rotate 135deg, middle width→0, bottom rotate -135deg), `transition:.2s linear`
- Panel: fixed, full-screen, slides in from `right:-100%` → `right:0`, white background, `transition:.2s linear`
- Nav items stack vertically, font-size 20px, font-weight 700, line-height 80px, padding `0 20px`
- Active/open nav item: background `#1640DB`, color `#fff`
- Submenus expand inline below the parent (accordion), not a hover popover

## Assets
- No icon files strictly needed — dropdown chevrons/hamburger built with CSS or a small inline SVG arrow
- Brand color: `#1640DB` (Tailwind arbitrary `text-[#1640DB]` or add to globals as `--brand`, already defined)

## Text Content (verbatim)
- Logo: "Bonanza Factory"
- Nav: 회사소개, 사업분야, 회사소식
- 회사소개 submenu: 보난자팩토리, 계열사소개
- 사업분야 submenu: Compliance, Payment, Authentication, Data, Blockchain & AI
- Contact: 사업문의
- Lang: KR

## Responsive Behavior
- **Desktop (>=1024px):** horizontal nav, hover dropdowns, contact+lang visible
- **Tablet/Mobile (<1024px):** hamburger + full-screen slide-in nav, contact link hidden, submenus become inline accordions
- **<=767px:** header height 60px, logo/hamburger scale down proportionally
