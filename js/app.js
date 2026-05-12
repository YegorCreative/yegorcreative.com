/* YegorCreative — app.js */

/* Cursor */
;(function () {
  if (window.matchMedia('(hover:none)').matches) return;
  const dot  = Object.assign(document.createElement('div'), { className: 'cursor-dot' });
  const ring = Object.assign(document.createElement('div'), { className: 'cursor-ring' });
  document.body.append(dot, ring);
  let mx = -200, my = -200, rx = -200, ry = -200;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
  });
  (function lerp() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(lerp);
  })();
  function bindGrow() {
    document.querySelectorAll('a,button,[role=button]').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('grow'));
      el.addEventListener('mouseleave', () => ring.classList.remove('grow'));
    });
  }
  bindGrow();
  new MutationObserver(bindGrow).observe(document.body, { childList: true, subtree: true });
})();

/* Scroll Reveals */
;(function () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal,.reveal-fade').forEach(el => obs.observe(el));

  const stObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); stObs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.stagger').forEach(el => stObs.observe(el));
})();

/* Sticky Nav */
;(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* Hamburger */
;(function () {
  const burger = document.getElementById('hamburger');
  const links  = document.getElementById('navLinks');
  if (!burger || !links) return;
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    links.classList.remove('open');
  }));
})();

/* Accordion */
;(function () {
  document.querySelectorAll('.ac-item').forEach(item => {
    const btn  = item.querySelector('.ac-btn');
    const body = item.querySelector('.ac-body');
    if (!btn || !body) return;
    btn.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.ac-item.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.ac-body').style.maxHeight = null;
      });
      if (!open) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
})();

/* Active Nav Link */
;(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if ((a.getAttribute('href') || '').split('/').pop() === page) a.classList.add('active');
  });
})();

/* Contact Form */
;(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (res.ok) {
        document.getElementById('form-fields').style.display = 'none';
        document.getElementById('form-result').classList.add('show');
      } else {
        btn.textContent = 'Error — try again';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Network error — try again';
      btn.disabled = false;
    }
  });
})();
