// ArmaWeld i18n Engine — lazy language bundles
(function () {
  'use strict';
  const STORAGE_KEY = 'armaweld-lang';
  const DEFAULT = 'tr';
  const SUPPORTED = ['tr', 'en', 'de', 'es', 'fr'];
  const BUNDLE_V = '202606123';

  let lang = localStorage.getItem(STORAGE_KEY) || DEFAULT;
  if (!SUPPORTED.includes(lang)) lang = DEFAULT;

  window.TRANSLATIONS = window.TRANSLATIONS || {};
  let readyPromise = null;

  function basePath() {
    const p = location.pathname;
    if (p.includes('/blog/')) return '../assets/lang/';
    return 'assets/lang/';
  }

  function loadScript(src, opts) {
    opts = opts || {};
    return new Promise(function (resolve, reject) {
      if (opts.force) {
        document.querySelectorAll('script[src="' + src + '"]').forEach(function (node) {
          node.remove();
        });
      }
      var existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        if (!opts.force && existing.getAttribute('data-i18n-loaded') === '1') {
          resolve();
          return;
        }
        if (!opts.force && (existing.readyState === 'complete' || existing.readyState === 'loaded')) {
          existing.setAttribute('data-i18n-loaded', '1');
          resolve();
          return;
        }
        existing.addEventListener('load', function () { resolve(); });
        existing.addEventListener('error', function () { reject(new Error('Failed: ' + src)); });
        return;
      }
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = function () {
        s.setAttribute('data-i18n-loaded', '1');
        resolve();
      };
      s.onerror = function () { reject(new Error('Failed: ' + src)); };
      document.head.appendChild(s);
    });
  }

  function loadLangBundle(code, force) {
    if (!force && bundleReady(code)) return Promise.resolve();
    return loadScript(basePath() + code + '.js?v=' + BUNDLE_V, { force: !!force });
  }

  function needsBlogBundle() {
    return /\/blog\//.test(location.pathname);
  }

  function bundleReady(code) {
    var bundle = window.TRANSLATIONS && window.TRANSLATIONS[code];
    return !!(bundle && bundle.nav_home);
  }

  function reapplyDeep() {
    var deep = window.__AW_DEEP_TRANSLATIONS__;
    if (!deep || !window.TRANSLATIONS) return;
    for (var code in deep) {
      if (!window.TRANSLATIONS[code]) window.TRANSLATIONS[code] = {};
      Object.assign(window.TRANSLATIONS[code], deep[code]);
    }
  }

  function reapplyToolsExt() {
    var ext = window.__AW_TOOLS_EXT__;
    if (!ext || !window.TRANSLATIONS) return;
    for (var code in ext) {
      if (!window.TRANSLATIONS[code]) window.TRANSLATIONS[code] = {};
      Object.assign(window.TRANSLATIONS[code], ext[code]);
    }
  }

  function reapplyTraceDocs() {
    var docs = window.__AW_TRACE_DOCS__;
    if (!docs || !window.TRANSLATIONS) return;
    for (var code in docs) {
      if (!window.TRANSLATIONS[code]) window.TRANSLATIONS[code] = {};
      Object.assign(window.TRANSLATIONS[code], docs[code]);
    }
  }

  function loadDeepBundle() {
    var deepPath = location.pathname.includes('/blog/')
      ? '../assets/i18n-content.js?v=' + BUNDLE_V
      : 'assets/i18n-content.js?v=' + BUNDLE_V;
    document.querySelectorAll('script[src*="i18n-deep.js"], script[src*="i18n-content.js"]').forEach(function (node) {
      node.remove();
    });
    return loadScript(deepPath, { force: true }).catch(function () {}).then(reapplyDeep);
  }

  function loadToolsExtBundle() {
    var extPath = location.pathname.includes('/blog/')
      ? '../assets/i18n-tools-ext.js?v=' + BUNDLE_V
      : 'assets/i18n-tools-ext.js?v=' + BUNDLE_V;
    return loadScript(extPath).catch(function () {}).then(reapplyToolsExt);
  }

  function loadTraceDocsBundle() {
    var docsPath = location.pathname.includes('/blog/')
      ? '../assets/i18n-trace-docs.js?v=' + BUNDLE_V
      : 'assets/i18n-trace-docs.js?v=' + BUNDLE_V;
    return loadScript(docsPath).catch(function () {}).then(reapplyTraceDocs);
  }

  function loadBundles(l, forceTarget) {
    var jobs = [loadLangBundle(DEFAULT, false)];
    if (l !== DEFAULT) jobs.push(loadLangBundle(l, !!forceTarget));
    return Promise.all(jobs).then(function () {
      if (!bundleReady(DEFAULT)) {
        throw new Error('Default translation bundle missing');
      }
      if (l !== DEFAULT && !bundleReady(l)) {
        console.warn('[i18n] Translation bundle incomplete:', l);
      }
      return loadDeepBundle().then(loadToolsExtBundle).then(loadTraceDocsBundle);
    }).then(function () {
      if (needsBlogBundle()) {
        var blogPath = location.pathname.includes('/blog/')
          ? '../assets/blog-translations-2026.js?v=' + BUNDLE_V
          : 'assets/blog-translations-2026.js?v=' + BUNDLE_V;
        return loadScript(blogPath).catch(function () {});
      }
    });
  }

  function resolve(key) {
    var t = window.TRANSLATIONS;
    if (!t) return null;
    if (t[lang] && t[lang][key]) return t[lang][key];
    if (t[DEFAULT] && t[DEFAULT][key]) return t[DEFAULT][key];
    return null;
  }

  function get(key) {
    return resolve(key) || key;
  }

  function decodeEntities(text) {
    if (!text || text.indexOf('&') === -1) return text;
    var el = document.createElement('textarea');
    el.innerHTML = text;
    return el.value;
  }

  function apply() {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = resolve(el.dataset.i18n);
      if (v) {
        v = decodeEntities(v);
        if (el.tagName === 'META') el.setAttribute('content', v);
        else if (el.tagName === 'TITLE') el.textContent = v;
        else el.textContent = v;
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = resolve(el.dataset.i18nHtml);
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var v = resolve(el.dataset.i18nPlaceholder);
      if (v) el.placeholder = decodeEntities(v);
    });
    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      var v = resolve(el.dataset.i18nValue);
      if (v) el.value = decodeEntities(v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = resolve(el.dataset.i18nAria);
      if (v) el.setAttribute('aria-label', decodeEntities(v));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var v = resolve(el.dataset.i18nTitle);
      if (v) el.title = decodeEntities(v);
    });

    var titleKey = document.documentElement.dataset.i18nTitle;
    if (titleKey) {
      var tv = resolve(titleKey);
      if (tv) document.title = decodeEntities(tv);
    }

    updateUI();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function updateUI() {
    var btn = document.getElementById('lang-current');
    if (btn) btn.textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(function (el) {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
  }

  function setLang(l) {
    if (!SUPPORTED.includes(l) || l === lang) return;
    lang = l;
    localStorage.setItem(STORAGE_KEY, l);
    loadBundles(l, true).then(apply);
  }

  function ready() {
    if (!readyPromise) {
      readyPromise = loadBundles(lang, !bundleReady(lang)).then(apply);
    }
    return readyPromise;
  }

  window.i18n = { apply: apply, setLang: setLang, getLang: function () { return lang; }, get: get, ready: ready };
  window.selectLang = function (l) {
    setLang(l);
    ['langDropdown', 'langDropdownMobile'].forEach(function (id) {
      var dd = document.getElementById(id);
      if (dd) dd.classList.remove('open');
    });
  };
  window.toggleLangMenu = function (suffix) {
    var id = 'langDropdown' + (suffix || '');
    var dd = document.getElementById(id);
    if (dd) dd.classList.toggle('open');
  };

  document.addEventListener('click', function (e) {
    ['langSwitcher', 'langSwitcherMobile'].forEach(function (swId) {
      var sw = document.getElementById(swId);
      if (sw && !sw.contains(e.target)) {
        var dd = sw.querySelector('.lang-dropdown');
        if (dd) dd.classList.remove('open');
      }
    });
  });
})();
