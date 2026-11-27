// ArmaWeld — GA4 event helpers
(function () {
  'use strict';

  // Google Ads dönüşümü: "Giden tıklama" (AW-18132638200). Teklif formu, mail,
  // telefon ve WhatsApp tıklamaları potansiyel müşteri sayılır. Dönüşüm işlemi
  // reklam tıklaması başına bir kez sayar, aynı kişinin tekrarları şişirmez.
  var ADS_LEAD = 'AW-18132638200/7CA3CIrSwqgcEPizqMZD';
  var LEAD_EVENTS = { form_submit: 1, email_click: 1, phone_click: 1, whatsapp_click: 1 };

  function track(name, params) {
    if (typeof gtag !== 'function') return;
    gtag('event', name, Object.assign({ transport_type: 'beacon' }, params || {}));
    if (LEAD_EVENTS[name]) {
      gtag('event', 'conversion', { send_to: ADS_LEAD, transport_type: 'beacon' });
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
