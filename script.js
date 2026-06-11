
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
 
if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    burger.setAttribute('aria-expanded', isOpen);
  });
 
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('header__nav--open');
      burger.setAttribute('aria-expanded', false);
    }
  });
}
 
function scrollToContact() {
  const contact = document.getElementById('contact');
  const input = document.getElementById('input-name');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { if (input) input.focus(); }, 600);
  }
}
 
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const id = this.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (nav.classList.contains('header__nav--open')) {
        nav.classList.remove('header__nav--open');
      }
    }
  });
});
 