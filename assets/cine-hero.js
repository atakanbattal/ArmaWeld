/* Cinematic scroll hero: scroll progress through .cine drives the hero video.
   Engineering notes: the video is fetched whole as a Blob (works on hosts without
   Range support), displayed time eases toward the scroll target in a rAF loop
   that rests when converged, seeks are gated so they never overlap, and the DOM
   is written only when a value changes. Phones, portrait tablets and reduced
   motion get the static hero; the five gates match cine-hero.css exactly. */
(function () {
  var cine = document.querySelector('.cine');
  if (!cine) return;
  var stage = cine.querySelector('.cine-stage');
  var video = cine.querySelector('.cine-video');
  var poster = cine.querySelector('.cine-poster');
  var cue = cine.querySelector('.cine-cue');
  var ringEl = cine.querySelector('.cine-ring');
  var rail = cine.querySelector('.cine-rail');
  var VIDEO_URL = cine.getAttribute('data-video');
  var POSTER_URL = cine.getAttribute('data-poster');
  var VIDEO_BYTES = Number(cine.getAttribute('data-bytes')) || 6000000;

  var clamp = function (v, lo, hi) { return Math.min(hi, Math.max(lo, v)); };
  var smoothstep = function (p, e0, e1) {
    var t = clamp((p - e0) / (e1 - e0), 0, 1);
    return t * t * (3 - 2 * t);
  };
  function rng(seed) {
    var s = seed >>> 0;
    return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }

  // ---- split headlines into word / character spans (once, after i18n has run) ----
  function split(band, idx) {
    var h = band.querySelector('.cine-h');
    var src = h.querySelector('.sr-only');
    var text = src.textContent.trim();
    var fx = band.getAttribute('data-fx');
    var old = h.querySelector('[aria-hidden]');
    if (old) old.remove();
    if (fx === 'focus') {
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
    return { el: el, a: r[0], b: r[1], ramp: Number(el.getAttribute('data-ramp')) || 0, first: i === 0, last: el.classList.contains('cine-settle'), op: -1, k: -1, on: null };
  });
  bands.forEach(function (b, i) { if (!b.last) split(b.el, i); });

  // ---- progress through the pinned section ----
  function heroProgress() {
    var r = cine.getBoundingClientRect();
    var range = cine.offsetHeight - window.innerHeight;
    return range > 0 ? clamp(-r.top / range, 0, 1) : 0;
  }

  var loadK = 0, loadStart = 0;
  function updateCaptions(p) {
    for (var i = 0; i < bands.length; i++) {
      var b = bands[i];
      var f = Math.min(0.02, (b.b - b.a) / 3);
      var inE = b.first ? 1 : smoothstep(p, b.a, b.a + f);
      var outE = b.last ? 1 : 1 - smoothstep(p, b.b - f, b.b);
      var op = (b.last ? smoothstep(p, b.a, b.a + f) : inE * outE);
      var k = clamp((p - b.a) / (b.ramp || Math.min(0.025, (b.b - b.a) * 0.35)), 0, 1);
      if (b.first) k = Math.max(k, loadK);
      if (b.last) k = clamp((p - b.a) / (b.ramp || 0.12), 0, 1);
      op = Math.round(op * 1000) / 1000;
      if (op !== b.op) { b.op = op; b.el.style.opacity = op; }
      if (Math.abs(k - b.k) >= 0.008 || (k === 1 && b.k !== 1) || (k === 0 && b.k !== 0)) { b.k = k; b.el.style.setProperty('--k', k.toFixed(3)); }
      var on = op > 0.5;
      if (on !== b.on) { b.on = on; b.el.classList.toggle('is-on', on); b.el.toggleAttribute('inert', !on); }
    }
    var pp = Math.round(p * 500) / 500;
    if (rail && pp !== lastRail) { lastRail = pp; rail.style.setProperty('--p', pp); }
    var gone = p > 0.04;
    if (gone !== cueGone && cueReady) { cueGone = gone; cue.classList.toggle('is-gone', gone); }
  }
  var lastRail = -1, cueGone = null, cueReady = false;

  // ---- gated seeks ----
  var seekBusy = false, pendingTime = null;
  function requestSeek(t) {
    if (!video.duration || !isFinite(video.duration)) return;
    t = clamp(t, 0, video.duration - 0.04);
    if (seekBusy) { pendingTime = t; return; }
    if (Math.abs(video.currentTime - t) < 0.001) return;
    seekBusy = true;
    video.currentTime = t;
  }
  video.addEventListener('seeked', function () {
    seekBusy = false;
    if (pendingTime !== null) { var t = pendingTime; pendingTime = null; requestSeek(t); }
  });
  video.addEventListener('error', function () { seekBusy = false; pendingTime = null; failVideo(); });

  // ---- the eased drive loop ----
  var target = 0, shown = 0, rafId = null, lastTick = 0, heroOnScreen = true;
  function tick(now) {
    var dt = Math.min(100, now - (lastTick || now));
    lastTick = now;
    if (loadK < 1) {
      loadK = clamp((now - loadStart) / 1100, 0, 1);
      loadK = 1 - Math.pow(1 - loadK, 3);
    }
    shown += (target - shown) * (1 - Math.pow(1 - 0.16, dt / 16.667));
    var settled = Math.abs(target - shown) < 0.0005 && loadK >= 1;
    if (settled) { shown = target; rafId = null; lastTick = 0; }
    else rafId = requestAnimationFrame(tick);
    requestSeek(shown * (video.duration || 0));
    updateCaptions(shown);
  }
  function kick() { if (rafId === null && heroOnScreen && scrubOn) rafId = requestAnimationFrame(tick); }
  function onScroll() { target = heroProgress(); kick(); }

  new IntersectionObserver(function (es) {
    heroOnScreen = es[0].isIntersecting;
    if (heroOnScreen) onScroll();
  }).observe(cine);

  // ---- streamed Blob loader with an honest ring ----
  var started = false, inited = false;
  function setRing(frac) { if (ringEl) ringEl.style.setProperty('--ld', Math.round(126 * (1 - frac))); }
  function makeChevron() {
    var c = document.createElement('span');
    c.className = 'cine-chev';
    c.setAttribute('aria-hidden', 'true');
    return c;
  }
  function failVideo() {
    stage.classList.add('video-failed');
    if (ringEl && ringEl.parentNode) ringEl.replaceWith(makeChevron());
    cueReady = true;
  }
  function loadHeroBlob() {
    if (!VIDEO_URL || !window.fetch || !window.ReadableStream) return Promise.reject(new Error('no video'));
    var ctrl = new AbortController();
    var watchdog = setTimeout(function () { ctrl.abort(); }, 20000);
    return fetch(VIDEO_URL, { priority: 'low', signal: ctrl.signal }).then(function (res) {
      if (!res.ok || !res.body) throw new Error('video ' + res.status);
      var total = Number(res.headers.get('Content-Length')) || VIDEO_BYTES;
      var reader = res.body.getReader(), chunks = [], got = 0, lastRing = 0;
      function pump() {
        return reader.read().then(function (r) {
          if (r.done) return;
          clearTimeout(watchdog);
          watchdog = setTimeout(function () { ctrl.abort(); }, 20000);
          chunks.push(r.value);
          got += r.value.length;
          var frac = Math.min(1, got / total), now = performance.now();
          if (now - lastRing > 100 || frac === 1) { lastRing = now; setRing(frac); }
          return pump();
        });
      }
      return pump().then(function () {
        clearTimeout(watchdog);
        setRing(1);
        video.src = URL.createObjectURL(new Blob(chunks, { type: 'video/mp4' }));
        video.load();
        video.addEventListener('loadeddata', function () {
          stage.classList.add('video-ready');
          if (ringEl && ringEl.parentNode) ringEl.replaceWith(makeChevron());
          cueReady = true;
          requestSeek(heroProgress() * video.duration);
        }, { once: true });
      });
    });
  }
  function initHeroOnce() {
    if (inited) return;
    inited = true;
    var start = function () { if (started) return; started = true; loadHeroBlob().catch(failVideo); };
    if (POSTER_URL) {
      poster.style.backgroundImage = "url('" + POSTER_URL + "')";
      var img = new Image();
      img.onload = start; img.onerror = start;
      img.src = POSTER_URL;
      setTimeout(start, 4000);
    } else start();
  }

  // ---- the five static-hero gates, decided live ----
  var GATES = [
    '(max-width: 720px)',
    '(orientation: portrait) and (max-width: 1024px)',
    '(orientation: portrait) and (pointer: coarse)',
    '(orientation: landscape) and (pointer: coarse) and (max-height: 560px)',
    '(prefers-reduced-motion: reduce)'
  ];
  var scrubOn = false;
  function pinStatic() {
    bands.forEach(function (b) { b.el.style.removeProperty('opacity'); b.el.style.removeProperty('--k'); b.el.removeAttribute('inert'); b.op = -1; b.k = -1; b.on = null; });
  }
  function enableScrub() {
    if (scrubOn) return;
    scrubOn = true;
    initHeroOnce();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    bands.forEach(function (b) { b.op = -1; b.k = -1; b.on = null; });
    loadStart = performance.now();
    shown = target = heroProgress();
    updateCaptions(shown);
    onScroll();
  }
  function disableScrub() {
    if (!scrubOn && inited) return;
    scrubOn = false;
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
    pinStatic();
  }
  function applyHeroMode() {
    if (MQLS.some(function (m) { return m.matches; })) disableScrub(); else enableScrub();
  }
  var MQLS = GATES.map(function (q) { return window.matchMedia(q); });
  MQLS.forEach(function (m) {
    if (m.addEventListener) m.addEventListener('change', applyHeroMode); else m.addListener(applyHeroMode);
  });
  // the static hero image is set here only, so phones never download the scrub assets
  var still = cine.getAttribute('data-still');
  if (still) cine.style.setProperty('--cine-still', "url('" + still + "')");
  applyHeroMode();

  document.addEventListener('visibilitychange', function () {
    document.body.classList.toggle('paused', document.hidden);
  });
})();
