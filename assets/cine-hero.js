/* Cinematic hero: the welding-hall film plays by itself once, muted, on every
   device; captions follow the film's own clock and the page headline with its
   buttons settles on the final frame. Phones get a 720p file, larger screens
   1080p. With reduced motion, or when the browser refuses to autoplay, the
   still frame and the headline are shown instead. */
(function () {
  var cine = document.querySelector('.cine');
  if (!cine) return;
  var stage = cine.querySelector('.cine-stage');
  var video = cine.querySelector('.cine-video');
  var poster = cine.querySelector('.cine-poster');
  var rail = cine.querySelector('.cine-rail');
  var replay = cine.querySelector('.cine-replay');

  var clamp = function (v, lo, hi) { return Math.min(hi, Math.max(lo, v)); };
  var smoothstep = function (p, e0, e1) {
    var t = clamp((p - e0) / (e1 - e0), 0, 1);
    return t * t * (3 - 2 * t);
  };
  function rng(seed) {
    var s = seed >>> 0;
    return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }

  // ---- split headlines into word / character spans ----
  function split(band, idx) {
    var h = band.querySelector('.cine-h');
    var text = h.querySelector('.sr-only').textContent.trim();
    var old = h.querySelector('[aria-hidden]');
    if (old) old.remove();
    if (band.getAttribute('data-fx') === 'focus') {
      var wrap = document.createElement('span');
      wrap.setAttribute('aria-hidden', 'true');
      wrap.innerHTML = '<span class="soft"></span><span class="sharp"></span>';
      wrap.querySelector('.soft').textContent = text;
      wrap.querySelector('.sharp').textContent = text;
      h.appendChild(wrap);
      return;
    }
    var r = rng(1031 + idx * 977);
    var vis = document.createElement('span');
    vis.className = 'cine-split';
    vis.setAttribute('aria-hidden', 'true');
    var words = text.split(/\s+/);
    var total = text.replace(/\s+/g, '').length, ci = 0;
    var spread = Number(band.getAttribute('data-spread')) || 0.5;
    words.forEach(function (word, wi) {
      var w = document.createElement('span');
      w.className = 'w';
      w.style.setProperty('--th', (wi / Math.max(1, words.length) * 0.45).toFixed(3));
      Array.from(word).forEach(function (ch) {
        var c = document.createElement('span');
        c.className = 'c';
        c.textContent = ch;
        c.style.setProperty('--th', (ci / total * spread + r() * 0.06).toFixed(3));
        c.style.setProperty('--jx', ((r() * 26 + 10) * (r() < 0.5 ? -1 : 1)).toFixed(1) + 'px');
        ci++;
        w.appendChild(c);
      });
      vis.appendChild(w);
      if (wi < words.length - 1) vis.appendChild(document.createTextNode(' '));
    });
    h.appendChild(vis);
  }

  var bands = Array.prototype.map.call(cine.querySelectorAll('.cine-band'), function (el, i) {
    var r = el.getAttribute('data-range').split(',').map(Number);
    return { el: el, a: r[0], b: r[1], ramp: Number(el.getAttribute('data-ramp')) || 0, last: el.classList.contains('cine-settle'), op: -1, k: -1, on: null };
  });
  bands.forEach(function (b, i) { if (!b.last) split(b.el, i); });

  // ---- captions follow the film's progress p (0..1) ----
  function updateCaptions(p) {
    for (var i = 0; i < bands.length; i++) {
      var b = bands[i];
      var f = Math.min(0.025, (b.b - b.a) / 3);
      var op = b.last ? smoothstep(p, b.a, b.a + f) : smoothstep(p, b.a, b.a + f) * (1 - smoothstep(p, b.b - f, b.b));
      var k = clamp((p - b.a) / (b.ramp || (b.last ? 0.08 : Math.min(0.05, (b.b - b.a) * 0.35))), 0, 1);
      op = Math.round(op * 1000) / 1000;
      if (op !== b.op) { b.op = op; b.el.style.opacity = op; }
      if (Math.abs(k - b.k) >= 0.008 || (k === 1 && b.k !== 1) || (k === 0 && b.k !== 0)) { b.k = k; b.el.style.setProperty('--k', k.toFixed(3)); }
      var on = op > 0.5;
      if (on !== b.on) { b.on = on; b.el.classList.toggle('is-on', on); b.el.toggleAttribute('inert', !on); }
    }
    if (rail) rail.style.setProperty('--p', (Math.round(p * 500) / 500));
  }

  var rafId = null;
  function tick() {
    rafId = null;
    if (video.duration) updateCaptions(clamp(video.currentTime / video.duration, 0, 1));
    if (!video.paused && !video.ended) rafId = requestAnimationFrame(tick);
  }
  function run() { if (rafId === null) rafId = requestAnimationFrame(tick); }

  function showStill() {
    stage.classList.add('is-still');
    bands.forEach(function (b) { b.el.style.removeProperty('opacity'); b.el.style.removeProperty('--k'); b.el.removeAttribute('inert'); b.op = -1; b.k = -1; b.on = null; });
  }
  function finish() {
    stage.classList.add('is-ended');
    updateCaptions(1);
  }

  var still = cine.getAttribute('data-still');
  if (still) cine.style.setProperty('--cine-still', "url('" + still + "')");
  var posterUrl = cine.getAttribute('data-poster');
  if (posterUrl) poster.style.backgroundImage = "url('" + posterUrl + "')";

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { showStill(); return; }

  var small = window.matchMedia('(max-width: 900px), (pointer: coarse) and (max-width: 1366px)').matches;
  video.src = cine.getAttribute(small ? 'data-video-sm' : 'data-video');
  updateCaptions(0);

  video.addEventListener('playing', function () { stage.classList.add('video-ready'); stage.classList.remove('is-ended'); run(); });
  video.addEventListener('ended', finish);
  video.addEventListener('error', showStill);

  function play() {
    var pr = video.play();
    if (pr && pr.catch) pr.catch(function () { if (video.paused) showStill(); });
  }
  play();

  if (replay) replay.addEventListener('click', function () {
    stage.classList.remove('is-still', 'is-ended');
    video.currentTime = 0;
    updateCaptions(0);
    play();
  });

  // pause off screen, carry on when the visitor comes back before the film ends
  new IntersectionObserver(function (es) {
    if (es[0].isIntersecting) { if (video.paused && !video.ended && stage.classList.contains('video-ready')) play(); }
    else if (!video.paused) video.pause();
  }).observe(cine);

  document.addEventListener('visibilitychange', function () {
    document.body.classList.toggle('paused', document.hidden);
  });
})();
