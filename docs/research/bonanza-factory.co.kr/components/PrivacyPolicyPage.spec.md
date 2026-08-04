# PrivacyPolicyPage Specification

## Overview
- **Target file:** `src/app/privacy/page.tsx`
- **Route:** `/privacy` (destination of the footer's "개인정보 처리방침" link, corresponding to the source's `/terms/privacy_policy.php`)
- **Screenshot:** `docs/design-references/bonanza-factory.co.kr/page-privacy.jpg`
- **Interaction model:** static long-form legal text with an in-page anchor jump nav at the top (click a numbered item → smooth-scrolls to that section, plain `<a href="#section-id">` + CSS `scroll-behavior: smooth` on the container is sufficient, no JS needed)
- No `SubPageHero` on this page — the source renders a plain heading + a version-date dropdown, not a background-image hero. Do NOT use `SubPageHero` here.

## Page Structure
1. Plain header block, centered content within `max-w-[900px] mx-auto`, top padding `pt-[150px] md:pt-[200px]` (this page has no image hero, just breathing room below the fixed site header):
   - Large heading: "개인정보처리방침" (`text-3xl md:text-4xl font-bold`)
   - A small right-aligned "2025.12.11 개정" date label near the heading (static text, no real dropdown functionality needed — render as plain text, optionally with a small chevron icon for visual fidelity, but it doesn't need to open/close anything)
2. Intro paragraphs (verbatim, `text-[#666] leading-[1.8]` styling matching the rest of the site's body-copy gray):
   ```
   (주)보난자팩토리(이하"회사")는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「 개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립 · 공개합니다. 회사는 이용자들의 개인정보보호를 매우 중요시하며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호에 관한 법률」등 정보통신서비스 제공자가 준수하여야 할 규정을 준수하고 있습니다.

   회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
   ```
3. "회사의 개인정보처리방침은 다음과 같은 내용을 담고 있습니다." followed by a numbered jump-nav list (each item links to its matching section id below via `<a href="#section-N">`):
   1. 처리하는 개인정보의 항목 → `#section-1`
   2. 개인정보의 수집 및 이용목적 → `#section-2`
   3. 개인정보의 보유 및 이용기간 → `#section-3`
   4. 개인정보의 파기절차 및 방법 → `#section-4`
   5. 개인정보의 처리위탁 → `#section-5`
   6. 이용자 및 법정대리인의 권리와 그 행사 방법 → `#section-6`
   7. 개인정보 안전성 확보 조치 → `#section-7`
   8. 개인정보보호책임자 및 담당자의 연락처 → `#section-8`
   9. 권익침해 및 구조방법 → `#section-9`
   10. 고지의 의무 → `#section-10`
4. Numbered sections below (each with `id="section-N"`, a bold heading `text-xl font-bold mt-[60px] mb-[30px]` matching the nav label, and body paragraphs `text-[#666] leading-[1.8]`; bulleted sub-items marked with "○" in the source — render each "○ ..." line as its own paragraph/list item with the ○ kept as a literal leading character, no need for custom bullet styling):

**섹션 1. 처리하는 개인정보의 항목**
회사는 서비스 제공을 위해 필요 최소한의 범위에서 개인정보를 수집.이용 합니다.

1). 정보주체의 동의를 받지 않고 처리하는 개인정보 항목
회사에서 이용자(정보주체)의 동의를 받지 않고 처리하는 개인정보 항목은 다음과 같습니다.
○ 서비스 제공을 위하여 자체 수집되는 정보
- 법적근거 : 개인정보보호법 제20조
- 수집항목 : 가상자산 지갑주소

2) 정보주체의 동의를 받아 처리하는 개인정보 항목
회사는 다음의 개인정보 항목을 '개인정보보호법 15조 제1항 제1호에 따라 정보주체의 동의를 받아 처리하고 있습니다.
○ 통합 입출금 서비스 제공 동의로 수집되는 정보
- 수집항목 : 이름, CI, 계좌번호, 휴대전화번호, 생년월일, 성별

**섹션 2. 개인정보 수집 및 이용목적**
회사는 수집한 정보를 다음 목적을 위해 처리합니다.
○ 서비스 제공
- TranSafer 솔루션
- TranSight 솔루션

**섹션 3. 개인정보 보유 및 이용기간**
회사는 법령에 따른 개인정보 보유·이용기간 또는 이용자로부터 개인정보를 수집시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간동안 보존합니다.
○ 회사의 내부방침에 의한 정보보유 사유
- TranSafer 솔루션 기록 : 출금동의, 입금 및 출금 내역 등
- 보존기간 : 5년
- TranSight 솔루션 기록 : 가상자산 지갑주소
- 보존기간 : 사용 목적달성시 까지

**섹션 4. 개인정보의 파기 절차 및 방법**
이용자의 개인정보는 개인정보처리 목적이 달성된 후 해당 정보를 지체없이 파기하며, 아래와 같은 방법으로 파기합니다.
○ 파기 절차
회사는 개인정보처리 목적이 달성된 후 해당 정보를 지체없이 파기합니다. 이용자의 서비스 이용 등을 위해 수집한 정보는 목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는 별도의 DB로 옮겨져 내부방침 및 기타 관련 법령에 의한 정보보호사유에 따라(보유 및 이용기간 참조) 일정기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유 이외의 다른 목적으로 이용되지 않습니다.
○ 파기 방법
- 종이에 출력된 개인정보 : 파쇄기로 파쇄하거나 소각
- 전자적 파일 형태로 저장된 개인정보 : 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제

**섹션 5. 개인정보의 처리위탁**
회사는 서비스의 원활한 제공을 위해 개인정보를 위탁처리하고 있으며, 관계 법령에 따라 위탁계약시 개인정보가 안전하게 관리될 수 있도록 목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자 관리·감독, 손해배상 등 책임에 관한 사항을 규정하고, 개인정보를 안전하게 처리하는지 감독하고 있습니다. 회사의 개인정보 위탁처리기관 및 위탁업무의 내용은 아래와 같습니다.
○ 수탁업체: (주)쿠콘 / 위탁업무 내용: 본인확인
○ 수탁업체: (주)카카오 / 위탁업무 내용: 본인확인
○ 수탁업체: 주식회사 하나은행 / 위탁업무 내용: 본인확인
○ 수탁업체: 주식회사 네이버 / 위탁업무 내용: 본인확인
○ 수탁업체: 주식회사 삼성SDS / 위탁업무 내용: 본인확인
○ 수탁업체: (주)트라버스 / 위탁업무 내용: TranSight 서비스 운영

**섹션 6. 이용자 및 법정대리인의 권리와 그 행사 방법**
○ 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
○ 권리행사는 회사에 대해 「개인정보보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.
○ 권리행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 "개인정보처리 방법에 관한 고시(제2023-12호)" 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
○ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다.
○ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
○ 회사는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.

**섹션 7. 개인정보의 안전성 확보조치**
회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
○ 정기적인 자체감사 실시 — 개인정보취급 관련 안정성 확보를 위해 정기적(연1회)으로 자체감사를 실시하고 있습니다.
○ 개인정보 취급직원의 최소화 및 교육 — 개인정보를 취급하는 직원을 최소한으로 지정하고 적절한 관리·감독을 수행하고 있으며, 정기적으로 필요한 교육을 실시하고 있습니다.
○ 내부관리계획의 수립 및 시행 — 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.
○ 해킹 등에 대비한 기술적 대책 — 회사는 해킹이나 컴퓨터바이러스 등에 의한 개인정보유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
○ 개인정보의 암호화 — 이용자의 개인정보 중 비밀번호는 암호화되어 저장 및 관리되고 있어 본인만이 알 수 있으며, 중요한 데이터는 파일 및 전송데이터를 암호화하거나 파일잠금 기능을 사용하는 등 별도 보안 기능을 사용하고 있습니다.
○ 접속기록의 보관 및 위변조방지 — 개인정보처리시스템에 접속한 기록을 최소 2년 이상 보관, 관리하고 있으며, 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.
○ 개인정보에 대한 접근제한 — 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단접근을 통제하고 있습니다.
○ 문서보안을 위한 잠금장치 사용 — 개인정보가 포함된 서류, 보조저장 매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.
○ 비인가자에 대한 출입통제 — 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고, 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.

**섹션 8. 개인정보보호 책임자 및 담당자 연락처**
회사는 개인정보처리에 관한 업무를 총괄해서 책임지고, 개인정보처리와 관련한 정보주체의 불만처리 및 피해구제, 개인정보의 열람 청구 등을 위하여 아래와 같이 개인정보보호책임자 및 담당부서를 지정하고 있습니다.

▶ 개인정보보호책임자
담당자: 이찬행 이사
연락처: 02-2632-7774
이메일: cs@bonanza-factory.co.kr
※ 개인정보보호 담당부서로 연결됩니다.

▶ 개인정보보호 담당부서
부서명: IT본부
연락처: 02-2632-7774
이메일: cs@bonanza-factory.co.kr

○ 정보주체는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제, 개인정보의 열람 청구 등에 관한 사항을 개인정보보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
○ 「개인정보보호법」 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.

**섹션 9. 권익침해 및 구조 방법**
정보주체는 개인정보 침해로 인한 구제를 받기 위하여 개인정보 분쟁조정위원회, 한국인터넷진흥원 개인정보침해 신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖의 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
○ 개인정보분쟁조정위원회: (국번없이)1833-6972 (www.kopico.go.kr)
○ 개인정보침해신고센터: (국번없이)118 (privacy.kisa.or.kr)
○ 대검찰청: (국번없이)1301 (www.spo.go.kr)
○ 경찰청 사이버범죄 신고시스템: (국번없이)182 (ecrm.police.go.kr)

**섹션 10. 고지의 의무**
현 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 시에는 그 즉시 홈페이지의 '개인정보처리방침' 메뉴를 통해 고지할 것입니다.

## Assets
None needed — this is a plain text legal page, no images.

## Responsive Behavior
- **Desktop (>=1024px):** `max-w-[900px] mx-auto` centered column, generous side padding
- **Mobile (<768px):** same single-column layout, reduce horizontal padding to `px-5`, jump-nav list wraps naturally

=== END SPEC ===

When done:
1. Run `npx tsc --noEmit` and fix any type errors.
2. Run `npm run build` to confirm the whole project still compiles.
3. Commit your work with a clear commit message.
4. Report back: file path created, confirmation of build/typecheck status.
