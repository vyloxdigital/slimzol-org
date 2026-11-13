/* Slimzol — slimzol-org.vercel.app */
(function () {
  'use strict';

  function menu() {
    var btn = document.querySelector('.nav-btn');
    var list = document.getElementById('nav-list');
    if (!btn || !list) return;
    function shut() {
      list.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.addEventListener('click', function () {
      btn.setAttribute('aria-expanded', list.classList.toggle('is-open') ? 'true' : 'false');
    });
    list.addEventListener('click', function (e) { if (e.target.closest('a')) shut(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') shut(); });
  }

  /* Order bar appears below the hero and steps aside over the pricing. */
  function dock() {
    var bar = document.querySelector('.dock');
    var hero = document.querySelector('.hero');
    var prices = document.getElementById('prices');
    if (!bar || !hero || !('IntersectionObserver' in window)) return;
    var past = false, onPrices = false;
    function set() { bar.classList.toggle('is-up', past && !onPrices); }
    new IntersectionObserver(function (e) { past = !e[0].isIntersecting; set(); }).observe(hero);
    if (prices) new IntersectionObserver(function (e) { onPrices = e[0].isIntersecting; set(); }).observe(prices);
  }

  function start() { menu(); dock(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
