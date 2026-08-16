/* Module Tech UK — shared site behaviour */

// Footer year
var yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// Mobile nav toggle
var menuBtn = document.querySelector('.menu-btn');
var siteNav = document.querySelector('nav.links');
if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', function () {
    var open = siteNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.textContent = open ? 'Close' : 'Menu';
  });
  // Close after choosing a destination
  siteNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && siteNav.classList.contains('open')) {
      siteNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = 'Menu';
    }
  });
}
