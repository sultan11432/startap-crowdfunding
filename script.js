
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
 