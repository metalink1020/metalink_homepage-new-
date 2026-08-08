/* METALINK — bonanza-skeleton behaviors (static port of com.js + SiteScripts).
   Reproduces the original class-toggle interactions 1:1 so bonanza's authored
   CSS drives every transition. */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var q = function (s) { return document.querySelector(s); };
    var qa = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

    var header = q(".header");
    var footer = q(".footer");

    function docTop(el) { return el.getBoundingClientRect().top + window.scrollY; }

    function setVh() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", vh + "px");
    }

    // Header fixed / footer TOP + section2 scroll-driven states.
    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (header) header.classList.toggle("fixed", y > 100);
      if (footer) footer.classList.toggle("go_on", y > 100);

      if (window.innerWidth > 767) {
        var s2 = q(".section2");
        var start = q(".section2_start");
        var end = q(".section2_end");
        if (s2 && start && end) {
          if (y > docTop(start)) { s2.classList.add("page_start"); s2.classList.remove("mc02_end"); }
          else { s2.classList.remove("page_start"); }
          if (y > docTop(end)) { s2.classList.add("mc02_end"); s2.classList.remove("page_start"); }
          else { s2.classList.remove("mc02_end"); }
        }
        for (var i = 1; i <= 3; i++) {
          var marker = q(".mc02_b0" + i);
          var link = q(".i0" + i + " a");
          if (marker && link) link.classList.toggle("show", y > docTop(marker));
        }
      }
    }

    // Language dropdown
    var langBtn = q(".header .lang > button");
    var langWrap = q(".header .lang");
    if (langBtn) langBtn.addEventListener("click", function (e) { e.preventDefault(); langWrap.classList.toggle("on"); });

    // Family Site dropdown
    var famBtn = q(".family_wrap > button");
    var famWrap = q(".family_wrap");
    if (famBtn) famBtn.addEventListener("click", function (e) { e.preventDefault(); famWrap.classList.toggle("on"); });

    // Close dropdowns on outside click
    document.addEventListener("click", function (e) {
      if (langWrap && !e.target.closest(".header .lang")) langWrap.classList.remove("on");
      if (famWrap && !e.target.closest(".family_wrap")) famWrap.classList.remove("on");
    });

    // Mobile hamburger
    var btnMenu = q(".btn_menu");
    if (btnMenu) btnMenu.addEventListener("click", function (e) {
      e.preventDefault();
      document.documentElement.classList.toggle("over_h");
      document.body.classList.toggle("over_h");
      header.classList.toggle("on");
    });

    // Mobile submenu accordion
    qa(".header .gnb li .mo_vw").forEach(function (lnk) {
      lnk.addEventListener("click", function (e) {
        e.preventDefault();
        var li = lnk.closest("li");
        if (!li) return;
        li.classList.toggle("open");
        Array.prototype.slice.call(li.parentElement.children).forEach(function (sib) {
          if (sib !== li) sib.classList.remove("open");
        });
      });
    });

    // Section3 business list hover (bonanza com.js): active li raises, siblings dim
    var baItems = qa(".business_area li");
    baItems.forEach(function (li) {
      li.addEventListener("mouseenter", function () {
        li.classList.add("hover");
        li.classList.remove("unhover");
        Array.prototype.slice.call(li.parentElement.children).forEach(function (sib) {
          if (sib !== li) { sib.classList.add("unhover"); sib.classList.remove("hover"); }
        });
        li.parentElement.classList.add("hover_set");
      });
    });
    var baWrap = q(".business_area");
    if (baWrap) baWrap.addEventListener("mouseleave", function () {
      baItems.forEach(function (li) { li.classList.remove("hover", "unhover"); });
      baWrap.classList.remove("hover_set");
    });

    // Scroll-to-top
    var gotop = q(".gotop");
    if (gotop) gotop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Disable context menu (bonanza original behavior)
    document.addEventListener("contextmenu", function (e) { e.preventDefault(); });

    setVh();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setVh);
    window.addEventListener("resize", onScroll);
  });
})();
