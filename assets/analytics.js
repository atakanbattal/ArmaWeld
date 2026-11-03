// ArmaWeld — GA4 event helpers
(function () {
  'use strict';

  function track(name, params) {
    if (typeof gtag === 'function') {
      gtag('event', name, params || {});
    }
  }

  window.awTrack = track;

  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="tel:"]');
    if (a) track('phone_click', { link_url: a.href });
    const wa = e.target.closest('a.wa-fab, a[href*="wa.me"]');
    if (wa) track('whatsapp_click', { link_url: wa.href });
    const mail = e.target.closest('a[href^="mailto:"]');
    if (mail) track('email_click', { link_url: mail.href.split('?')[0] });
    const cta = e.target.closest('.nav-cta, .sticky-cta__btn, .btn-primary[href*="iletisim"]');
    if (cta) track('cta_click', { link_text: (cta.textContent || '').trim().slice(0, 40) });
  }, true);

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('selectLang, .lang-option').forEach(function () {});
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        track('lang_switch', { language: btn.dataset.lang });
      });
    });
  });
})();
