# NewsPage Specification

## Overview
- **Target file:** `src/app/news/page.tsx`
- **Route:** `/news`
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/page-news.jpg`
- **Interaction model:** click-driven category filter (pill tabs) + static table + non-functional pagination (no real backend, out of scope — render pagination as static UI)
- Use `SubPageHero` (`src/components/subpages/SubPageHero.tsx`) and `PillTabs` (`src/components/subpages/PillTabs.tsx`, already built).

## Page Structure
1. `SubPageHero` — title "회사소식", no description (pass an empty string or make `description` optional in `SubPageHeroProps` if it isn't already — check the component; if `description` is required, pass an empty string and ensure the paragraph doesn't render an awkward empty gap, e.g. conditionally render the `<p>` only when `description` is non-empty), bgImage `/images/subpages/svisual-news.jpg`
2. `PillTabs` with items: `[{label:"전체보기", href:"#"}, {label:"언론보도", href:"#"}, {label:"공지사항", href:"#"}, {label:"동영상", href:"#"}]` (client-side active-state only, no real filtering since there's no backend — clicking just changes which pill looks active)
3. Search bar row (right-aligned): a text input (placeholder "검색", height 50px, border `#EBEBEB`, border-radius 5px, width ~380px) + a dark search button (`background:#222; color:#fff; font-weight:700; width:100px; height:50px; border-radius:5px`) — non-functional, no real search
4. Board table:
   - Header row: `NO.` | `제목` (title, left-aligned) | `작성일` (date)
   - Top border `border-top:2px solid #222`, header row border-bottom `1px solid #EBEBEB`, each data row `height:70px` with a `1px solid #EBEBEB` bottom border
   - Use the real news items below (verbatim from the live site) as static rows — this is real content, not backend-driven, so hardcode it as an array in the page file
5. Pagination row (centered): numbered page buttons 1-10 styled as circles (`width/height:40px; border-radius:50%`), active page filled `background:#1640DB; color:#fff`, plus "맨끝" (last) / "이전" (prev) / "다음" (next) text-style nav controls on either end — static, page 1 active, no real navigation needed (links can be `href="#"`)

## Text Content — News Items (verbatim, No / Title / Date)
```
93 | 보난자랩, 타이거리서치와 디지털자산 데이터·리서치 협력 MOU | 2026-07-24
92 | 원화 스테이블코인 생태계 지도, 누가 어느 자리 노리나 | 2026-07-23
91 | [단독]가상자산 범죄 3000여건…코인 환수는 통계조차 없어[코인 무법지대]③ | 2026-07-08
90 | 허위 코인 'VEC' 상장 미끼로 투자금 모으는데…추적도 처벌도 어렵다 | 2026-07-07
89 | "하루 1.3%, 年수백% 수익 보장"…267억원 모은 코인 폰지사기 | 2026-06-30
88 | 코인 침체기 불공정거래 신고는 급증…시세조종만 50건 | 2026-06-29
87 | 국세청 이어 경찰청까지…보난자팩토리, 공공 가상자산 추적 사업 잇단 수주 | 2026-06-18
86 | "연내 도입 수요 있다" 스테이블코인 발행 앞둔 은행들이 최근 눈독들이는 것은? [크립토360] | 2026-06-15
85 | 올해 마약사범 10명 중 1명은 가상자산 이용 | 2026-06-11
84 | 국세청, 가상자산 탈세 추적 강화…거래추적 사업자에 보난자팩토리 선정 | 2026-05-22
```

## Assets
- `svisual-news.jpg` (in `public/images/subpages/`)

## Responsive Behavior
- **Desktop (>=1024px):** full table with all 3 columns visible
- **Mobile (<768px):** pill tabs wrap to 2 rows if needed, table can either scroll horizontally (`overflow-x-auto` wrapper) or collapse the date column to stack below the title — pick whichever reads cleaner; horizontal scroll on a wrapping `<div>` is the simpler, safer choice
