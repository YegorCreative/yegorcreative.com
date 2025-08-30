(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('[data-nav]');
  if(!btn || !nav) return;

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // Close menu when a link is clicked (mobile)
  nav.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });
})();
