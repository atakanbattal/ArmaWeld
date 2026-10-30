/* Home service reel: hover plays the card video on desktop, scrolling into view plays it on touch screens. */
(function () {
  var cards = document.querySelectorAll('.reel-card');
  if (!cards.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var touch = matchMedia('(hover: none), (pointer: coarse)').matches;

  function load(v) {
    if (v.dataset.src && !v.src) { v.src = v.dataset.src; v.load(); }
  }
  function play(card) {
    var v = card.querySelector('video');
    if (!v) return;
    load(v);
    v.muted = true;
    var p = v.play();
    card.classList.add('is-playing');
    if (p && p.catch) p.catch(function () { card.classList.remove('is-playing'); });
  }
  function stop(card) {
    var v = card.querySelector('video');
    card.classList.remove('is-playing');
    if (v && !v.paused) v.pause();
  }

  if (!touch) {
    cards.forEach(function (c) {
      c.addEventListener('mouseenter', function () { play(c); });
      c.addEventListener('mouseleave', function () { stop(c); });
      c.addEventListener('focus', function () { play(c); });
      c.addEventListener('blur', function () { stop(c); });
    });
    return;
  }
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.intersectionRatio >= 0.6) play(e.target); else stop(e.target); });
  }, { threshold: [0, 0.6] });
  cards.forEach(function (c) { io.observe(c); });
})();
