// METALINK 공통 스크립트

// Header scroll state
const header = document.getElementById('header');
if (header) {
  addEventListener('scroll', () => {
    header.classList.toggle('scrolled', scrollY > 40);
  }, { passive: true });
}

// Mobile menu
const moBtn = document.getElementById('moBtn');
const moNav = document.getElementById('moNav');
if (moBtn && moNav) {
  moBtn.addEventListener('click', () => moNav.classList.toggle('open'));
  moNav.addEventListener('click', () => moNav.classList.remove('open'));
}

// Hero slider (메인 전용)
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('#heroDots button');
if (slides.length) {
  let cur = 0, timer;
  const goTo = i => {
    slides[cur].classList.remove('active');
    dots[cur]?.classList.remove('on');
    cur = i % slides.length;
    slides[cur].classList.add('active');
    dots[cur]?.classList.add('on');
  };
  const autoNext = () => { timer = setInterval(() => goTo(cur + 1), 5000); };
  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(timer); goTo(i); autoNext(); }));
  autoNext();
}

// Marquee: 무한루프용 콘텐츠 복제
document.querySelectorAll('.marquee').forEach(ul => { ul.innerHTML += ul.innerHTML; });

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// 숫자 카운터: <span class="cnt" data-count="120">0</span>
const cntIo = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    cntIo.unobserve(e.target);
    const el = e.target, target = parseFloat(el.dataset.count) || 0;
    const dur = 1400, t0 = performance.now();
    const step = now => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}, { threshold: .4 });
document.querySelectorAll('.cnt[data-count]').forEach(el => cntIo.observe(el));
