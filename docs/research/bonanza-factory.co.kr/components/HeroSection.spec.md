# HeroSection Specification (section1)

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/hero-section1.jpg`
- **Interaction model:** time-driven entrance (on mount), static thereafter
- Client component for the mount-fade animation (or use CSS `animation` with no JS needed — prefer pure CSS).

## DOM Structure
Full-viewport section (`height:100vh`) with a background image, headline text overlay, and a slide-dot indicator at the bottom (decorative, single slide).

## Computed Styles
- Container: `position:relative; height:100vh; overflow:hidden`
- Background image: `<Image>` `fill`, `object-fit:cover`, `src="/images/hero-desktop.jpg"` (mobile: `/images/hero-mobile.png` via `sm:hidden` / `hidden sm:block` pair, swap at 768px breakpoint)
- Background zoom animation: `transform: scale(1) → scale(1.05)`, `animation-duration:3s`, `animation-delay:.5s`, `animation-timing-function:linear`, `animation-fill-mode:forwards` (use the `hero-zoom` keyframe already defined in `globals.css`)
- Text wrapper: `position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:100%; max-width:1700px; padding:0 50px` (mobile: `top:40%`, `padding:0 20px`)
- Headline `<p>`: color:#fff; font-weight:700
  - Desktop (>=1640px): font-size:55px; line-height:80px; margin-bottom:50px
  - 1024–1439px: font-size:46px; line-height:70px
  - <=767px: font-size:30px; line-height:44px; margin-bottom:40px
- Headline entrance: starts `opacity:0`, fades + slides up slightly to `opacity:1, translateY(0)` over ~800ms on mount (simple CSS animation, no scroll-trigger needed — it's above the fold on load)
- Slide-dot nav: `position:absolute; bottom:70px; left:50%; transform:translateX(-50%)`, single active dot rendered as a 30px-wide white pill (`border-radius:30px`, `background:#fff`), height 10px — purely decorative since there is only one real slide

## Text Content (verbatim)
```
더 나은 생각과 기술로
세상의 연결을 주도합니다
```
(two `<span>`/`<br>` lines, each its own line per the site's `<p>` with a line break)

## Assets
- `/images/hero-desktop.jpg` (1920x980, desktop background)
- `/images/hero-mobile.png` (750x1366, mobile background — swap via responsive `<picture>`-style Tailwind classes: desktop img `hidden md:block`, mobile img `block md:hidden`)

## Responsive Behavior
- **Desktop (>=1024px):** full headline size, background `hero-desktop.jpg`
- **Mobile (<768px):** background swaps to `hero-mobile.png` (portrait crop), headline shrinks to 30px/44px, text block shifts to `top:40%`
- Section height always `100vh` at every breakpoint
