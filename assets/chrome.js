// ============================================
// ArmaWeld — Shared Chrome (Nav + Footer)
// ============================================

const PORTAL_LOGIN_URL = 'https://portal.armaweld.com/login';

const ARMAWELD_MAP_QUERY = 'Fevzi%C3%A7akmak+10758.+Sk.+No%3A+25%2FH+Karatay+Konya';
const ARMAWELD_MAPS = {
  query: ARMAWELD_MAP_QUERY,
  place: 'https://www.google.com/maps/search/?api=1&query=' + ARMAWELD_MAP_QUERY,
  directions: 'https://www.google.com/maps/dir/?api=1&destination=' + ARMAWELD_MAP_QUERY,
  embed: 'https://maps.google.com/maps?q=' + ARMAWELD_MAP_QUERY + '&hl=tr&z=16&output=embed'
};
window.ARMAWELD_MAPS = ARMAWELD_MAPS;

const NAV_LABELS = {
  nav_home: 'Ana Sayfa',
  nav_services: 'Hizmetler',
  nav_engineering: 'Mühendislik',
  nav_quality: 'Kalite',
  nav_blog: 'Blog',
  nav_contact: 'İletişim',
  nav_about: 'Hakkımızda',
  nav_welding: 'Kaynak',
  nav_ndt: 'NDT',
  nav_sectors: 'Sektörler',
  nav_projects: 'Projeler',
  nav_faq: 'SSS',
};

function isLocalDevHost() {
  var host = location.hostname;
  return host === 'localhost' || host === '127.0.0.1' || host === '[::1]';
}

function getPortalUrl() {
  if (isLocalDevHost()) {
    return location.protocol + '//' + location.host + '/login';
  }
  return PORTAL_LOGIN_URL;
}

function applyPortalLinks() {
  var url = getPortalUrl();
  var sameTab = isLocalDevHost();
  document.querySelectorAll('[data-portal-link], .nav-portal, .nav-drawer-btn--portal').forEach(function (a) {
    a.href = url;
    if (sameTab) {
      a.removeAttribute('target');
      a.removeAttribute('rel');
    } else {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

function injectNavTypography() {
  if (document.getElementById('aw-nav-type')) return;
  const style = document.createElement('style');
  style.id = 'aw-nav-type';
  style.textContent = `
    .nav .nav-links { gap: 2px; text-transform: none; flex-wrap: nowrap; }
    .nav .nav-desktop { min-width: 0; overflow: visible; }
    .nav .nav-desktop .nav-links { overflow: visible; max-width: 100%; }
    .nav .nav-inner { overflow: visible; }
    .nav .nav-links .nav-link {
      font-family: 'Archivo', system-ui, -apple-system, sans-serif !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      font-style: normal !important;
      letter-spacing: -0.015em !important;
      text-transform: none !important;
      font-variant: normal !important;
      -webkit-font-smoothing: antialiased;
      color: var(--steel-3) !important;
    }
    .nav .nav-links .nav-link:hover,
    .nav .nav-links .nav-link.active {
      color: var(--bone) !important;
      font-weight: 600 !important;
    }
    @media (max-width: 1280px) {
      .nav .nav-links .nav-link { font-size: 13px !important; padding: 8px 9px !important; }
    }
    @media (max-width: 1200px) {
      .nav-drawer .nav-links .nav-link {
        font-size: 16px !important;
        padding: 14px 0 !important;
      }
    }
    .nav .nav-more-menu {
      left: auto !important;
      right: 0 !important;
      transform: none !important;
    }
    .nav .nav-portal {
      font-family: 'Archivo', system-ui, sans-serif !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      letter-spacing: -0.01em !important;
      color: var(--arc-2) !important;
      padding: 7px 11px !important;
      border: 1px solid rgba(255,122,26,.35) !important;
      border-radius: 4px !important;
      white-space: nowrap !important;
      transition: background .2s, border-color .2s !important;
    }
    @media (max-width: 1400px) {
      .nav .nav-portal { font-size: 11px !important; padding: 7px 9px !important; }
    }
    .nav .nav-portal:hover {
      background: rgba(255,122,26,.1) !important;
      border-color: var(--arc-2) !important;
    }
  `;
  document.head.appendChild(style);
}

function buildNav(activePage, base) {
  const b = base || '';
  const primaryLinks = [
    { id: 'index',       i18n: 'nav_home',        href: b + 'index.html' },
    { id: 'hizmetler',   i18n: 'nav_services',    href: b + 'hizmetler.html' },
    { id: 'kalite',      i18n: 'nav_quality',     href: b + 'kalite.html' },
    { id: 'ndt',         i18n: 'nav_ndt',         href: b + 'ndt.html' },
    { id: 'sektorler',   i18n: 'nav_sectors',     href: b + 'sektorler.html' },
    { id: 'projeler',    i18n: 'nav_projects',    href: b + 'projeler.html' },
    { id: 'iletisim',    i18n: 'nav_contact',     href: b + 'iletisim.html' },
    { id: 'blog',        i18n: 'nav_blog',        href: b + 'blog/' },
  ];
  const moreLinks = [
    { id: 'hakkimizda',  i18n: 'nav_about',       href: b + 'hakkimizda.html' },
    { id: 'muhendislik', i18n: 'nav_engineering', href: b + 'muhendislik.html' },
    { id: 'kaynak',      i18n: 'nav_welding',     href: b + 'kaynak-yontemleri.html' },
    { id: 'sss',         i18n: 'nav_faq',         href: b + 'sss.html' },
  ];
  const allLinks = primaryLinks.concat(moreLinks);

  const portalUrl = getPortalUrl();
  const isMoreActive = moreLinks.some(function (l) { return l.id === activePage; });

  function renderLink(l) {
    const label = NAV_LABELS[l.i18n] || '';
    return '<a class="nav-link ' + (l.id === activePage ? 'active' : '') + '" href="' + l.href + '" data-i18n="' + l.i18n + '">' + label + '</a>';
  }

  const desktopLinksHtml = primaryLinks.map(renderLink).join('') +
    '<div class="nav-more' + (isMoreActive ? ' active' : '') + '">' +
      '<button type="button" class="nav-link nav-more-btn' + (isMoreActive ? ' active' : '') + '" aria-expanded="false" aria-haspopup="true" data-i18n-aria="nav_aria_more" aria-label="">' +
        '<span data-i18n="nav_more">Diğer</span>' +
        '<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>' +
      '</button>' +
      '<div class="nav-more-menu" role="menu">' +
        moreLinks.map(function (l) {
          const label = NAV_LABELS[l.i18n] || '';
          return '<a class="nav-more-item ' + (l.id === activePage ? 'active' : '') + '" href="' + l.href + '" role="menuitem" data-i18n="' + l.i18n + '">' + label + '</a>';
        }).join('') +
      '</div>' +
    '</div>';

  const mobileLinksHtml = allLinks.map(renderLink).join('');

  const currentTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('armaweld-theme') || 'light';

  return `
  <nav class="nav">
    <div class="nav-inner">
      <a href="${b}index.html" class="logo" data-i18n-aria="nav_aria_home" aria-label="">
        <img id="nav-logo" src="${b}assets/${currentTheme === 'dark' ? 'logo-dark.png' : 'logo-light.png'}" alt="ArmaWeld" class="logo-img" />
      </a>
      <div class="nav-desktop">
        <div class="nav-links">
          ${desktopLinksHtml}
        </div>
      </div>
      <div class="nav-right">
        <button class="theme-toggle" data-i18n-aria="nav_aria_theme" aria-label="" onclick="toggleTheme()" title="">
          <svg class="tt-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <circle cx="12" cy="12" r="4"/>
            <line x1="12" y1="2" x2="12" y2="5"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
            <line x1="4.2" y1="4.2" x2="6.3" y2="6.3"/>
            <line x1="17.7" y1="17.7" x2="19.8" y2="19.8"/>
            <line x1="2" y1="12" x2="5" y2="12"/>
            <line x1="19" y1="12" x2="22" y2="12"/>
            <line x1="4.2" y1="19.8" x2="6.3" y2="17.7"/>
            <line x1="17.7" y1="6.3" x2="19.8" y2="4.2"/>
          </svg>
          <svg class="tt-moon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 14.5A8 8 0 0 1 9.5 6.5 0.5 0.5 0 0 1 10 6a8 8 0 1 0 8 8 0.5 0.5 0 0 1-0.5 0.5z"/>
          </svg>
        </button>

        <div class="lang-switcher" id="langSwitcher">
          <button class="lang-btn" id="lang-current" onclick="toggleLangMenu()" data-i18n-aria="nav_aria_lang" aria-label=""></button>
          <div class="lang-dropdown" id="langDropdown">
            <button class="lang-option" data-lang="tr" onclick="selectLang('tr')">🇹🇷 Türkçe</button>
            <button class="lang-option" data-lang="en" onclick="selectLang('en')">🇬🇧 English</button>
            <button class="lang-option" data-lang="de" onclick="selectLang('de')">🇩🇪 Deutsch</button>
            <button class="lang-option" data-lang="es" onclick="selectLang('es')">🇪🇸 Español</button>
            <button class="lang-option" data-lang="fr" onclick="selectLang('fr')">🇫🇷 Français</button>
          </div>
        </div>

        <a href="${portalUrl}" class="nav-portal" data-portal-link data-i18n="nav_portal" target="_blank" rel="noopener noreferrer">Müşteri Portalı</a>
        <a href="${b}iletisim.html" class="nav-cta" data-i18n="nav_cta">Teklif Al →</a>
        <button class="nav-burger" data-i18n-aria="nav_aria_menu" aria-label="" aria-expanded="false" aria-controls="navDrawer" onclick="toggleMobileNav()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
  <div class="nav-drawer" id="navDrawer" aria-hidden="true">
    <div class="nav-drawer-actions">
      <a href="${portalUrl}" class="nav-drawer-btn nav-drawer-btn--portal" data-portal-link data-i18n="nav_portal" target="_blank" rel="noopener noreferrer">Müşteri Portalı</a>
      <a href="${b}iletisim.html" class="nav-drawer-btn nav-drawer-btn--cta" data-i18n="nav_cta">Teklif Al →</a>
    </div>
    <div class="nav-links">
      ${mobileLinksHtml}
    </div>
  </div>
  `;
}

function buildFooter(base) {
  const b = base || '';
  const currentTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('armaweld-theme') || 'light';
  const logoSrc = b + 'assets/' + (currentTheme === 'dark' ? 'logo-dark.png' : 'logo-light.png');

  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <p class="footer-tag" data-i18n="footer_tag"></p>
          <p class="footer-contact" data-i18n="footer_desc"></p>
        </div>
        <div>
          <h5 data-i18n="footer_services_h"></h5>
          <ul>
            <li><a href="${b}hizmetler.html" data-i18n="footer_s1"></a></li>
            <li><a href="${b}hizmetler.html#fason" data-i18n="footer_fason"></a></li>
            <li><a href="${b}hizmetler.html" data-i18n="footer_s2"></a></li>
            <li><a href="${b}hizmetler.html" data-i18n="footer_s3"></a></li>
            <li><a href="${b}hizmetler.html" data-i18n="footer_s4"></a></li>
            <li><a href="${b}muhendislik.html" data-i18n="footer_s7"></a></li>
            <li><a href="${b}kaynak-yontemleri.html" data-i18n="footer_s5"></a></li>
            <li><a href="${b}ndt.html" data-i18n="footer_s6"></a></li>
          </ul>
        </div>
        <div>
          <h5 data-i18n="footer_corporate_h"></h5>
          <ul>
            <li><a href="${b}hakkimizda.html" data-i18n="footer_c1"></a></li>
            <li><a href="${b}muhendislik.html" data-i18n="footer_c7"></a></li>
            <li><a href="${b}kalite.html" data-i18n="footer_c2"></a></li>
            <li><a href="${b}sektorler.html" data-i18n="footer_c3"></a></li>
            <li><a href="${b}projeler.html" data-i18n="footer_c4"></a></li>
            <li><a href="${b}sss.html" data-i18n="footer_c5"></a></li>
            <li><a href="${b}iletisim.html" data-i18n="footer_c6"></a></li>
            <li><a href="${b}gizlilik-kvkk.html" data-i18n="footer_kvkk"></a></li>
            <li><a href="${b}yetkinlik.html" data-i18n="footer_cap_link">Yetkinlik Profili →</a></li>
          </ul>
        </div>
        <div>
          <h5 data-i18n="footer_contact_h"></h5>
          <p class="footer-contact">
            <a href="${ARMAWELD_MAPS.place}" class="footer-addr-link" target="_blank" rel="noopener noreferrer" data-map-place>
              <span class="footer-addr-line" data-i18n="footer_addr1"></span>
              <span class="footer-addr-line" data-i18n="footer_addr2"></span>
            </a>
            <span class="footer-map-links">
              <a href="${ARMAWELD_MAPS.place}" target="_blank" rel="noopener noreferrer" data-map-place data-i18n="map_open_google">Google Maps'te aç →</a>
              <a href="${ARMAWELD_MAPS.directions}" target="_blank" rel="noopener noreferrer" data-map-dir data-i18n="map_directions">Yol tarifi al →</a>
            </span><br/><br/>
            <a href="mailto:info@armaweld.com">info@armaweld.com</a><br/>
            <a href="tel:+905438400332">+90 543 840 0332</a>
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <span data-i18n="footer_copy"></span>
        <span data-i18n="footer_certs"></span>
        <span data-i18n="footer_ver"></span>
      </div>
      <div class="footer-legal" data-i18n="footer_legal"></div>
    </div>
  </footer>
  `;
}

// Scroll reveal — unified .in + .visible
function initReveals() {
  const els = document.querySelectorAll('.reveal:not(.in):not(.visible)');
  if (!els.length) return;
  function show(el) {
    el.classList.add('in', 'visible');
  }
  function showAll() {
    document.querySelectorAll('.reveal:not(.in):not(.visible)').forEach(show);
  }
  // Safety net: never leave content invisible if IO fails or i18n stalls
  var fallbackTimer = setTimeout(showAll, 2500);
  if (!('IntersectionObserver' in window)) {
    clearTimeout(fallbackTimer);
    showAll();
    return;
  }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        show(e.target);
        io.unobserve(e.target);
      }
    });
    if (!document.querySelector('.reveal:not(.in):not(.visible)')) {
      clearTimeout(fallbackTimer);
    }
  }, { threshold: 0.06, rootMargin: '0px 0px 8% 0px' });
  els.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      show(el);
    } else {
      io.observe(el);
    }
  });
}

// Animated counter
function initCounters() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-counter]').forEach(function (el) {
      const target = parseFloat(el.dataset.counter);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      el.textContent = target.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    });
    return;
  }
  const els = document.querySelectorAll('[data-counter]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.counter);
      const decimals = parseInt(el.dataset.decimals || '0');
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = target * eased;
        el.textContent = v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  els.forEach(el => io.observe(el));
}

function buildScrollBar() {
  return `<div class="scroll-bar" id="scrollBar" aria-hidden="true"></div>`;
}

function initScrollBar() {
  const bar = document.getElementById('scrollBar');
  if (!bar) return;
  const update = () => {
    const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initCookieConsent() {
  if (document.getElementById('aw-cookie') || localStorage.getItem('armaweld-cookie')) return;
  const el = document.createElement('div');
  el.id = 'aw-cookie';
  el.className = 'cookie-banner';
  el.innerHTML = `
    <div class="cookie-banner__body">
      <p class="cookie-banner__title" data-i18n="cookie_title">Çerez tercihleri</p>
      <p class="cookie-banner__text" data-i18n="cookie_text"></p>
      <p class="cookie-banner__legal" data-i18n-html="cookie_privacy_link"></p>
    </div>
    <div class="cookie-banner__actions">
      <button type="button" class="cookie-banner__btn cookie-banner__btn--ghost" data-cookie="essential" data-i18n="cookie_essential"></button>
      <button type="button" class="cookie-banner__btn cookie-banner__btn--primary" data-cookie="all" data-i18n="cookie_accept"></button>
    </div>`;
  el.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-cookie]');
    if (!btn) return;
    const choice = btn.dataset.cookie;
    localStorage.setItem('armaweld-cookie', choice);
    if (choice === 'all' && typeof gtag === 'function') {
      gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    el.classList.add('cookie-banner--hide');
    document.body.classList.remove('has-cookie-banner');
    setTimeout(function () { el.remove(); }, 400);
  });
  document.body.appendChild(el);
  document.body.classList.add('has-cookie-banner');
  if (window.i18n) window.i18n.apply();
}


function initNavMore() {
  document.querySelectorAll('.nav-more-btn').forEach(function (btn) {
    if (btn.dataset.navMoreBound === '1') return;
    btn.dataset.navMoreBound = '1';
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var wrap = btn.closest('.nav-more');
      if (!wrap) return;
      var wasOpen = wrap.classList.contains('open');
      document.querySelectorAll('.nav-more.open').forEach(function (el) {
        el.classList.remove('open');
        var otherBtn = el.querySelector('.nav-more-btn');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        wrap.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('.nav-more')) return;
    document.querySelectorAll('.nav-more.open').forEach(function (el) {
      el.classList.remove('open');
      var btn = el.querySelector('.nav-more-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-more.open').forEach(function (el) {
        el.classList.remove('open');
        var btn = el.querySelector('.nav-more-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

function initMobileNav() {
  document.querySelectorAll('.nav-link, .nav-drawer-btn').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileNav();
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileNav();
  });
}

function toggleMobileNav() {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var open = nav.classList.toggle('open');
  document.body.classList.toggle('nav-open', open);
  var drawer = document.getElementById('navDrawer');
  var burger = document.querySelector('.nav-burger');
  if (drawer) drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
  if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function closeMobileNav() {
  var nav = document.querySelector('.nav');
  if (!nav || !nav.classList.contains('open')) return;
  nav.classList.remove('open');
  document.body.classList.remove('nav-open');
  var drawer = document.getElementById('navDrawer');
  var burger = document.querySelector('.nav-burger');
  if (drawer) drawer.setAttribute('aria-hidden', 'true');
  if (burger) burger.setAttribute('aria-expanded', 'false');
}

function initBlogSchema() {
  const published = document.querySelector('meta[property="article:published_time"]');
  if (!published || document.getElementById('aw-article-schema')) return;
  const title = document.title || '';
  const desc = (document.querySelector('meta[name="description"]') || {}).content || '';
  const url = (document.querySelector('link[rel="canonical"]') || {}).href || location.href;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: desc,
    url: url,
    datePublished: published.content,
    author: { '@type': 'Organization', name: 'ArmaWeld Mühendislik' },
    publisher: {
      '@type': 'Organization',
      name: 'ArmaWeld',
      logo: { '@type': 'ImageObject', url: 'https://www.armaweld.com/assets/og-image.jpg' }
    },
    image: 'https://www.armaweld.com/assets/og-image.jpg'
  };
  const el = document.createElement('script');
  el.id = 'aw-article-schema';
  el.type = 'application/ld+json';
  el.textContent = JSON.stringify(schema);
  document.head.appendChild(el);
}

function injectMobileCSS(base) {
  if (document.getElementById('aw-mobile-css')) return;
  const link = document.createElement('link');
  link.id = 'aw-mobile-css';
  link.rel = 'stylesheet';
  link.href = (base || '') + 'assets/mobile.css?v=202605255';
  document.head.appendChild(link);
}

function injectSiteEnhancements(base) {
  var b = base || '';
  if (!document.getElementById('aw-site-enh-css')) {
    var css = document.createElement('link');
    css.id = 'aw-site-enh-css';
    css.rel = 'stylesheet';
    css.href = b + 'assets/site-enhancements.css?v=202606162';
    document.head.appendChild(css);
  }
  if (!document.getElementById('aw-site-enh-js')) {
    var js = document.createElement('script');
    js.id = 'aw-site-enh-js';
    js.src = b + 'assets/site-enhancements.js?v=202606162';
    js.defer = true;
    document.body.appendChild(js);
  }
}

function wrapWideTables() {
  const sel = '.accept-tbl, .doc-table, .svc-table, .specs-table, table.table, .mat-table, .deep-table:not(.deep-table-wide)';
  document.querySelectorAll(sel).forEach(function (tbl) {
    const parent = tbl.parentElement;
    if (!parent || parent.classList.contains('table-scroll') || parent.classList.contains('deep-table-wrap') || parent.classList.contains('mat-wrap')) return;
    const wrap = document.createElement('div');
    wrap.className = tbl.classList.contains('deep-table') ? 'deep-table-wrap' : 'table-scroll';
    tbl.parentNode.insertBefore(wrap, tbl);
    wrap.appendChild(tbl);
  });
}

function initMobileEnhancements() {
  wrapWideTables();
}

function initMapLinks() {
  var m = window.ARMAWELD_MAPS;
  if (!m) return;
  document.querySelectorAll('[data-map-place]').forEach(function (a) { a.href = m.place; });
  document.querySelectorAll('[data-map-dir]').forEach(function (a) { a.href = m.directions; });
  var embed = document.querySelector('.map-embed iframe[data-map-embed]');
  if (embed) embed.src = m.embed;
}

function syncThemeColorMeta(theme) {
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', theme === 'dark' ? '#07080a' : '#f7f5f0');
}

function mountChrome(activePage, base) {
  const doMount = function () {
  const savedTheme = localStorage.getItem('armaweld-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  syncThemeColorMeta(savedTheme);

  injectMobileCSS(base);
  injectSiteEnhancements(base);
  injectNavTypography();
  document.body.insertAdjacentHTML('afterbegin', buildScrollBar() + buildNav(activePage, base));
  document.body.insertAdjacentHTML('beforeend', buildFooter(base));

  applyPortalLinks();

  // Apply translations to injected chrome
  if (window.i18n) {
    window.i18n.apply();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initReveals();
    initCounters();
    initScrollBar();
    initCookieConsent();
    initMobileNav();
    initNavMore();
    initBlogSchema();
    initMobileEnhancements();
    initMapLinks();
    if (window.i18n) window.i18n.apply();
    requestAnimationFrame(initMobileEnhancements);
  });
  if (document.readyState !== 'loading') {
    initReveals();
    initCounters();
    initScrollBar();
    initCookieConsent();
    initMobileNav();
    initNavMore();
    initBlogSchema();
    initMobileEnhancements();
    initMapLinks();
  }
  document.addEventListener('langchange', () => {
    requestAnimationFrame(initMobileEnhancements);
  });
  document.dispatchEvent(new CustomEvent('armaweld:chrome-ready'));
  };

  // Mount nav/footer/reveals immediately — never block the page on i18n bundles
  doMount();

  if (window.i18n && window.i18n.ready) {
    return window.i18n.ready()
      .then(function () {
        if (window.i18n) window.i18n.apply();
        initReveals();
      })
      .catch(function (err) {
        console.warn('[ArmaWeld] i18n bundle failed; using inline fallbacks.', err);
        if (window.i18n) window.i18n.apply();
        initReveals();
      });
  }
  return Promise.resolve();
}

function toggleTheme() {
  const root = document.documentElement;
  const current = root.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('armaweld-theme', next);
  syncThemeColorMeta(next);

  const navLogo = document.getElementById('nav-logo');
  const footerLogo = document.getElementById('footer-logo');
  const logoSrc = next === 'dark' ? 'assets/logo-dark.png' : 'assets/logo-light.png';
  if (navLogo) navLogo.src = logoSrc;
  if (footerLogo) footerLogo.src = logoSrc;
}

// ── WhatsApp Floating Button ────────────────────────────────────────────────
(function () {
  const PHONE = '905438400332';
  const MESSAGE = encodeURIComponent('Merhaba, ArmaWeld hakkında bilgi almak istiyorum.');
  const HREF = 'https://wa.me/' + PHONE + '?text=' + MESSAGE;

  const style = document.createElement('style');
  style.textContent = `
    .wa-fab {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 9000;
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
    }
    @media (hover: hover) and (pointer: fine) {
      .wa-fab { animation: wa-bounce 2.4s ease-in-out infinite; }
    }
    .wa-fab__label {
      background: #fff;
      color: #128C7E;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,.18);
      white-space: nowrap;
      opacity: 0;
      transform: translateX(8px);
      transition: opacity .25s, transform .25s;
      pointer-events: none;
    }
    .wa-fab:hover .wa-fab__label {
      opacity: 1;
      transform: translateX(0);
    }
    .wa-fab__icon {
      width: 58px;
      height: 58px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(37,211,102,.45);
      flex-shrink: 0;
    }
    .wa-fab__icon svg {
      width: 32px;
      height: 32px;
      fill: #fff;
    }
    @keyframes wa-bounce {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-6px); }
    }
    @media (prefers-reduced-motion: reduce) {
      .wa-fab { animation: none; }
    }
    @media (max-width: 768px) {
      .wa-fab {
        bottom: 20px;
        right: 16px;
        animation: none !important;
      }
      .wa-fab__label { display: none !important; }
      .wa-fab__icon { width: 50px; height: 50px; }
      .wa-fab__icon svg { width: 28px; height: 28px; }
    }
  `;
  document.head.appendChild(style);

  const a = document.createElement('a');
  a.className = 'wa-fab';
  a.href = HREF;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.setAttribute('aria-label', 'WhatsApp');
  a.innerHTML = `
    <span class="wa-fab__label" data-i18n="wa_fab_label"></span>
    <span class="wa-fab__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </span>
  `;

  let touchMoved = false;
  a.addEventListener('touchstart', function () {
    touchMoved = false;
  }, { passive: true });
  a.addEventListener('touchmove', function () {
    touchMoved = true;
  }, { passive: true });
  a.addEventListener('click', function (e) {
    if (touchMoved) {
      e.preventDefault();
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(a);
    if (window.i18n) window.i18n.apply();
  });
  if (document.readyState !== 'loading') {
    document.body.appendChild(a);
    if (window.i18n) window.i18n.apply();
  }
  document.addEventListener('armaweld:chrome-ready', function () {
    if (window.i18n) window.i18n.apply();
  });
})();
