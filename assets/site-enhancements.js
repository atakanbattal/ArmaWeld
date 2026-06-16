// ArmaWeld — Site-wide UX enhancements
(function () {
  'use strict';

  function t(key) {
    return window.i18n ? window.i18n.get(key) : key;
  }

  function basePath() {
    var p = location.pathname;
    if (p.indexOf('/blog/') !== -1) return '../';
    return '';
  }

  /* ── Sticky CTA (mobile) ── */
  function initStickyCta() {
    if (document.getElementById('aw-sticky-cta')) return;
    var bar = document.createElement('div');
    bar.id = 'aw-sticky-cta';
    bar.className = 'sticky-cta';
    bar.innerHTML =
      '<a href="' + basePath() + 'iletisim.html" class="sticky-cta__btn sticky-cta__btn--quote" data-i18n="sticky_quote">Teklif Al</a>' +
      '<a href="' + basePath() + 'iletisim.html#upload" class="sticky-cta__btn sticky-cta__btn--upload" data-i18n="sticky_upload">Dosya Yükle</a>';
    document.body.appendChild(bar);
    document.body.classList.add('has-sticky-cta');
    var shown = false;
    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (y > 400 && !shown) {
        bar.classList.add('visible');
        shown = true;
      } else if (y <= 400 && shown) {
        bar.classList.remove('visible');
        shown = false;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (window.i18n) window.i18n.apply();
  }

  /* ── Organization schema (non-index pages) ── */
  function initOrgSchema() {
    if (document.getElementById('aw-org-schema') || /index\.html?$/.test(location.pathname) && !location.pathname.includes('/blog/')) return;
    if (location.pathname === '/' || location.pathname.endsWith('/')) return;
    var schema = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness'],
      name: 'ArmaWeld Metal & Kaynak Mühendisliği',
      url: 'https://www.armaweld.com',
      logo: 'https://www.armaweld.com/assets/og-image.jpg',
      email: 'info@armaweld.com',
      telephone: '+905438400332',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Fevziçakmak Mah. 10758. Sk. No: 25/H',
        addressLocality: 'Karatay',
        addressRegion: 'Konya',
        addressCountry: 'TR'
      }
    };
    var el = document.createElement('script');
    el.id = 'aw-org-schema';
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
  }

  /* ── FAQ search ── */
  function initFaqSearch() {
    var main = document.querySelector('.faq-main');
    if (!main || document.getElementById('faq-search')) return;
    var wrap = document.createElement('div');
    wrap.className = 'faq-search-wrap';
    wrap.innerHTML =
      '<input type="search" id="faq-search" class="faq-search" autocomplete="off" data-i18n-placeholder="faq_search_ph" placeholder="Sorularda ara…">' +
      '<div class="faq-no-results" id="faq-no-results" data-i18n="faq_search_empty">Eşleşen soru bulunamadı.</div>';
    main.parentNode.insertBefore(wrap, main);
    var input = document.getElementById('faq-search');
    var empty = document.getElementById('faq-no-results');
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      var any = false;
      document.querySelectorAll('.faq-group').forEach(function (group) {
        var groupAny = false;
        group.querySelectorAll('details.q').forEach(function (d) {
          var text = (d.textContent || '').toLowerCase();
          var match = !q || text.indexOf(q) !== -1;
          d.classList.toggle('faq-hidden', !match);
          if (match) { any = true; groupAny = true; }
        });
        group.classList.toggle('faq-group-empty', !groupAny);
      });
      empty.classList.toggle('visible', q.length > 0 && !any);
    });
    if (window.i18n) window.i18n.apply();
  }

  /* ── Project filter URL sync ── */
  function initProjectFilters() {
    var pills = document.querySelectorAll('.f-pill[data-f]');
    if (!pills.length) return;
    function applyFilter(f) {
      pills.forEach(function (p) {
        p.classList.toggle('active', p.dataset.f === f);
      });
      document.querySelectorAll('.proj').forEach(function (card) {
        card.classList.toggle('hidden', !(f === 'all' || card.dataset.cat === f));
      });
    }
    pills.forEach(function (p) {
      p.addEventListener('click', function () {
        var f = p.dataset.f;
        applyFilter(f);
        var url = new URL(location.href);
        if (f === 'all') url.searchParams.delete('sektor');
        else url.searchParams.set('sektor', f);
        history.replaceState(null, '', url.pathname + url.search);
      });
    });
    var params = new URLSearchParams(location.search);
    var initial = params.get('sektor') || 'all';
    if (initial !== 'all') applyFilter(initial);
  }

  /* ── Blog CTA injection ── */
  function initBlogCta() {
    if (!location.pathname.includes('/blog/') || location.pathname.endsWith('/blog/') || location.pathname.endsWith('/blog/index.html')) return;
    if (document.getElementById('aw-blog-cta')) return;
    var article = document.querySelector('.article-body, .post-body, article .container, main .container');
    if (!article) {
      var main = document.querySelector('article, main');
      article = main;
    }
    if (!article) return;
    var b = basePath();
    var bar = document.createElement('div');
    bar.id = 'aw-blog-cta';
    bar.className = 'blog-cta-bar';
    bar.innerHTML =
      '<div>' +
        '<h3 data-i18n="blog_cta_h">Bu konuda projeniz mi var?</h3>' +
        '<p data-i18n="blog_cta_p">Teknik ekibimiz WPS, NDT ve belge paketi ile birlikte 48 saat içinde teklif hazırlar.</p>' +
      '</div>' +
      '<div style="display:flex;gap:12px;flex-wrap:wrap">' +
        '<a href="' + b + 'iletisim.html" class="btn btn-primary" data-i18n="blog_cta_quote">Teklif Al →</a>' +
        '<a href="' + b + 'hizmetler.html" class="btn btn-ghost" data-i18n="blog_cta_services">Hizmetler →</a>' +
      '</div>';
    article.appendChild(bar);
    if (window.i18n) window.i18n.apply();
  }

  /* ── RFQ mode tabs (iletisim) ── */
  function initRfqMode() {
    var form = document.getElementById('rfq');
    if (!form || document.getElementById('rfq-mode-tabs')) return;
    var head = document.querySelector('.rfq-head');
    if (!head) return;

    var tabs = document.createElement('div');
    tabs.id = 'rfq-mode-tabs';
    tabs.className = 'rfq-mode-tabs';
    tabs.innerHTML =
      '<button type="button" class="rfq-mode-tab active" data-mode="full">' +
        '<span class="t" data-i18n="contact_tab_full">Detaylı RFQ</span>' +
        '<span class="d" data-i18n="contact_tab_full_d">Malzeme, NDT, tolerans ve dosya — tam kapsamlı teklif</span>' +
      '</button>' +
      '<button type="button" class="rfq-mode-tab" data-mode="quick">' +
        '<span class="t" data-i18n="contact_tab_quick">Hızlı Teklif</span>' +
        '<span class="d" data-i18n="contact_tab_quick_d">5 alan + dosya — 48 saat içinde ilk dönüş</span>' +
      '</button>';
    head.parentNode.insertBefore(tabs, head);

    var descField = form.querySelector('textarea[name="desc"]');
    if (descField) descField.removeAttribute('required');

    function setMode(mode) {
      document.body.classList.toggle('rfq-mode-quick', mode === 'quick');
      tabs.querySelectorAll('.rfq-mode-tab').forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.mode === mode);
      });
      if (descField) {
        if (mode === 'quick') descField.removeAttribute('required');
        else descField.setAttribute('required', 'required');
      }
    }

    tabs.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-mode]');
      if (!btn) return;
      setMode(btn.dataset.mode);
      var url = new URL(location.href);
      if (btn.dataset.mode === 'quick') url.searchParams.set('mode', 'quick');
      else url.searchParams.delete('mode');
      history.replaceState(null, '', url.pathname + url.search + location.hash);
    });

    var params = new URLSearchParams(location.search);
    if (params.get('mode') === 'quick') setMode('quick');
    else setMode('full');
    if (window.i18n) window.i18n.apply();
  }

  /* ── Fit wizard ── */
  function initFitWizard() {
    var root = document.getElementById('fit-wizard');
    if (!root) return;

    var sectors = [
      { id: 'machine', key: 'fit_sec_machine' },
      { id: 'structural', key: 'fit_sec_structural' },
      { id: 'pressure', key: 'fit_sec_pressure' },
      { id: 'energy', key: 'fit_sec_energy' },
      { id: 'rail', key: 'fit_sec_rail' },
      { id: 'other', key: 'fit_sec_other' }
    ];
    var mats = [
      { id: 'carbon', key: 'fit_mat_carbon' },
      { id: 'high', key: 'fit_mat_high' },
      { id: 'ss', key: 'fit_mat_ss' },
      { id: 'hardox', key: 'fit_mat_hardox' },
      { id: 'alu', key: 'fit_mat_alu' }
    ];
    var scopes = [
      { id: 'exc2', key: 'fit_scope_exc2' },
      { id: 'exc3', key: 'fit_scope_exc3' },
      { id: 'ped', key: 'fit_scope_ped' },
      { id: 'standard', key: 'fit_scope_standard' }
    ];

    function opts(items) {
      return items.map(function (i) {
        return '<option value="' + i.id + '">' + t(i.key) + '</option>';
      }).join('');
    }

    root.innerHTML =
      '<div class="fit-wizard-grid">' +
        '<div class="fit-field"><label data-i18n="fit_lbl_sector">Sektör</label><select id="fit-sector">' + opts(sectors) + '</select></div>' +
        '<div class="fit-field"><label data-i18n="fit_lbl_material">Malzeme</label><select id="fit-material">' + opts(mats) + '</select></div>' +
        '<div class="fit-field"><label data-i18n="fit_lbl_scope">Kalite kapsamı</label><select id="fit-scope">' + opts(scopes) + '</select></div>' +
      '</div>' +
      '<div class="fit-result" id="fit-result"></div>';

    function render() {
      var s = document.getElementById('fit-sector').value;
      var m = document.getElementById('fit-material').value;
      var sc = document.getElementById('fit-scope').value;
      var parts = [t('fit_result_intro')];
      if (sc === 'exc3' || sc === 'ped') parts.push(t('fit_msg_certified'));
      if (sc === 'ped') parts.push(t('fit_msg_ped'));
      if (m === 'hardox' || m === 'high') parts.push(t('fit_msg_wps'));
      if (m === 'ss' || m === 'alu') parts.push(t('fit_msg_tig'));
      if (s === 'rail') parts.push(t('fit_msg_rail'));
      if (s === 'pressure') parts.push(t('fit_msg_pressure'));
      parts.push(t('fit_result_outro'));
      var b = basePath();
      document.getElementById('fit-result').innerHTML =
        '<h4 data-i18n="fit_result_h">Değerlendirme</h4>' +
        '<p>' + parts.join(' ') + '</p>' +
        '<div class="actions">' +
          '<a href="' + b + 'iletisim.html" class="btn btn-primary" data-i18n="fit_cta_quote">Teklif Al →</a>' +
          '<a href="' + b + 'yetkinlik.html" class="btn btn-ghost" data-i18n="fit_cta_cap">Yetkinlik profili →</a>' +
        '</div>';
      if (window.i18n) window.i18n.apply();
    }

    root.querySelectorAll('select').forEach(function (sel) {
      sel.addEventListener('change', render);
    });
    document.addEventListener('langchange', function () {
      var sector = document.getElementById('fit-sector');
      if (!sector) return;
      document.getElementById('fit-sector').innerHTML = opts(sectors);
      document.getElementById('fit-material').innerHTML = opts(mats);
      document.getElementById('fit-scope').innerHTML = opts(scopes);
      render();
    });
    render();
  }

  /* ── Project detail page ── */
  function initProjectDetail() {
    if (!document.getElementById('proj-detail-root')) return;
    if (!window.PROJECT_DETAILS) return;

    function render() {
      var params = new URLSearchParams(location.search);
      var id = params.get('p') || '1';
      var proj = window.PROJECT_DETAILS[id];
      if (!proj) {
        document.getElementById('proj-detail-root').innerHTML = '<p>Proje bulunamadı. <a href="projeler.html">Projelere dön</a></p>';
        return;
      }
      var prefix = 'proj' + id + '_';
      function tk(suffix) { return t(prefix + suffix); }

      var imgHtml = proj.image
        ? '<picture><source srcset="' + proj.imageWebp + '" type="image/webp"><img src="' + proj.image + '" alt="" loading="lazy"></picture>'
        : '<div style="display:grid;place-items:center;height:100%;color:var(--steel-2);font-family:var(--ff-mono)">' + tk('pi') + '</div>';

      document.getElementById('proj-detail-root').innerHTML =
        '<div class="proj-detail-layout">' +
          '<div>' +
            '<div class="proj-detail-img">' + imgHtml + '</div>' +
            '<div class="proj-detail-meta">' +
              '<div><div class="k">' + tk('m1k') + '</div><div class="v">' + tk('m1v') + '</div></div>' +
              '<div><div class="k">' + tk('m2k') + '</div><div class="v">' + tk('m2v') + '</div></div>' +
              '<div><div class="k">' + tk('m3k') + '</div><div class="v">' + tk('m3v') + '</div></div>' +
            '</div>' +
          '</div>' +
          '<div class="proj-detail-block">' +
            '<div class="eyebrow">' + tk('badge') + '</div>' +
            '<h1 class="display h2" style="margin:16px 0 24px;color:var(--bone)">' + tk('h3') + '</h1>' +
            '<p>' + tk('p') + '</p>' +
            '<h3 data-i18n="proj_detail_challenge">Zorluk</h3><p>' + tk('challenge') + '</p>' +
            '<h3 data-i18n="proj_detail_approach">Yaklaşım</h3><p>' + tk('approach') + '</p>' +
            '<h3 data-i18n="proj_detail_deliverables">Teslim edilen belgeler</h3><ul>' +
              (proj.deliverables || []).map(function (d) { return '<li>' + t(d) + '</li>'; }).join('') +
            '</ul>' +
            '<div style="margin-top:32px;display:flex;gap:12px;flex-wrap:wrap">' +
              '<a href="iletisim.html" class="btn btn-primary" data-i18n="proj_detail_cta">Benzer proje için teklif →</a>' +
              '<a href="projeler.html" class="btn btn-ghost" data-i18n="proj_detail_back">Tüm projeler</a>' +
            '</div>' +
          '</div>' +
        '</div>';

      document.title = tk('h3') + ' — ArmaWeld';
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', tk('p'));
      if (window.i18n) window.i18n.apply();
    }

    if (window.i18n && window.i18n.ready) {
      window.i18n.ready().then(render);
    } else {
      render();
    }
  }

  function boot() {
    initStickyCta();
    initOrgSchema();
    initFaqSearch();
    initProjectFilters();
    initBlogCta();
    initRfqMode();
    initFitWizard();
    initProjectDetail();
  }

  document.addEventListener('DOMContentLoaded', boot);
  document.addEventListener('armaweld:chrome-ready', boot);
  document.addEventListener('langchange', function () {
    initFitWizard();
    initProjectDetail();
  });
  if (document.readyState !== 'loading') boot();
})();
