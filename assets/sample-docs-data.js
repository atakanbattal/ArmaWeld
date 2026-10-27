// Homepage trace panel — i18n-aware mini documents (JOB-A142)
(function () {
  'use strict';

  var JOB = { id: 'JOB-A142', serial: 'SER-0142', heat: 'A41E2', grade: 'S355 J2+N', wps: 'WPS-142-A Rev.02' };

  function t(key) {
    return (window.i18n && window.i18n.get(key)) || key;
  }

  function tv(val) {
    if (typeof val === 'string' && val.indexOf('trace_doc_') === 0) return t(val);
    return val;
  }

  function buildDocs() {
    return {
      eng: {
        title: 'trace_doc_eng_title',
        sub: 'trace_doc_eng_sub',
        stamp: 'trace_doc_eng_stamp',
        fields: [
          ['trace_doc_lbl_job', JOB.id],
          ['trace_doc_lbl_serial', JOB.serial],
          ['trace_doc_lbl_drawing', 'DWG-A142 · Rev.02'],
          ['trace_doc_lbl_customer_ref', 'PRJ-2026-0142'],
          ['trace_doc_lbl_material', JOB.grade],
          ['trace_doc_lbl_wps_plan', JOB.wps],
          ['trace_doc_lbl_wpqr', 'trace_doc_val_wpqr_nb'],
          ['trace_doc_lbl_ndt_plan', 'trace_doc_val_ndt_plan'],
          ['trace_doc_lbl_tolerance', 'EN ISO 13920 · Class B'],
          ['trace_doc_lbl_engineer', 'IWE · Ali Eren'],
          ['trace_doc_lbl_approval_date', '10 / 03 / 2026'],
          ['trace_doc_lbl_delivery_target', '22 / 03 / 2026']
        ],
        tables: [{
          title: 'trace_doc_eng_t1_title',
          head: ['trace_doc_tbl_step', 'trace_doc_tbl_owner', 'trace_doc_tbl_status'],
          rows: [
            ['trace_doc_val_mat_in', 'Q.Insp', 'trace_doc_st_done'],
            ['trace_doc_val_cut_form', 'CNC', 'trace_doc_st_planned'],
            ['trace_doc_val_welding', 'W-07', 'trace_doc_st_queue']
          ]
        }]
      },
      mtc: {
        title: 'trace_doc_mtc_title',
        sub: 'trace_doc_mtc_sub',
        stamp: 'trace_doc_mtc_stamp',
        fields: [
          ['trace_doc_lbl_cert_no', 'MTC-2026-4182'],
          ['trace_doc_lbl_heat', JOB.heat],
          ['trace_doc_lbl_incoming', 'trace_doc_val_incoming_ok'],
          ['trace_doc_lbl_manufacturer', 'Metalurji A.Ş.'],
          ['trace_doc_lbl_product', 'trace_doc_val_hot_rolled'],
          ['trace_doc_lbl_standard', 'EN 10025-2'],
          ['trace_doc_lbl_grade', JOB.grade],
          ['trace_doc_lbl_dimensions', '12 × 1500 × 6000 mm'],
          ['trace_doc_lbl_storage', 'trace_doc_val_storage'],
          ['trace_doc_lbl_inspector', 'trace_doc_val_insp'],
          ['trace_doc_lbl_job_match', JOB.id],
          ['trace_doc_lbl_date', '11 / 03 / 2026']
        ],
        tables: [
          {
            title: 'trace_doc_mtc_t1_title',
            head: ['C', 'Si', 'Mn', 'P', 'S', 'CEV'],
            rows: [['0.168', '0.32', '1.42', '0.012', '0.008', '0.438']]
          },
          {
            title: 'trace_doc_mtc_t2_title',
            head: ['ReH', 'Rm', 'A', 'KV₂ −20°C'],
            rows: [['382 MPa', '518 MPa', '26%', '98 / 92 / 104 J']]
          }
        ],
        badge: 'trace_doc_mtc_badge'
      },
      cut: {
        title: 'trace_doc_cut_title',
        sub: 'trace_doc_cut_sub',
        stamp: 'trace_doc_cut_stamp',
        fields: [
          ['trace_doc_lbl_job', JOB.id],
          ['trace_doc_lbl_serial', JOB.serial],
          ['trace_doc_lbl_heat', JOB.heat],
          ['trace_doc_lbl_program', 'NC / DXF · Rev.02'],
          ['trace_doc_lbl_machine', 'CNC Plazma · P-03'],
          ['trace_doc_lbl_part_count', 'trace_doc_val_14pcs'],
          ['trace_doc_lbl_thickness', 't = 12 mm'],
          ['trace_doc_lbl_tolerance', 'EN ISO 13920 · B'],
          ['trace_doc_lbl_control', 'trace_doc_val_digital_protractor'],
          ['trace_doc_lbl_label', 'QR · ' + JOB.heat],
          ['trace_doc_lbl_operator', 'CNC Op. · M. Yıldız'],
          ['trace_doc_lbl_date', '12 / 03 / 2026']
        ],
        tables: [{
          title: 'trace_doc_cut_t1_title',
          head: ['trace_doc_tbl_part', 'trace_doc_tbl_qty', 'trace_doc_tbl_status'],
          rows: [
            ['trace_doc_val_part_main', '2', 'trace_doc_st_cut'],
            ['trace_doc_val_part_flange', '4', 'trace_doc_st_cut'],
            ['trace_doc_val_part_conn', '8', 'trace_doc_st_cut']
          ]
        }]
      },
      welder: {
        title: 'trace_doc_welder_title',
        sub: 'trace_doc_welder_sub',
        stamp: 'trace_doc_welder_stamp',
        fields: [
          ['trace_doc_lbl_welder', 'Kemal Demir'],
          ['trace_doc_lbl_welder_code', 'W-07'],
          ['trace_doc_lbl_doc_no', 'AW-WL-07-2026'],
          ['trace_doc_lbl_weld_log', 'LOG-A142'],
          ['trace_doc_lbl_wps', JOB.wps],
          ['trace_doc_lbl_process', 'trace_doc_val_root_fill'],
          ['trace_doc_lbl_wire_gas', 'G3Si1 · M21'],
          ['trace_doc_lbl_station', 'trace_doc_val_weld_line'],
          ['trace_doc_lbl_preheat', 'T ≥ 20 °C'],
          ['trace_doc_lbl_interpass', 'T ≤ 250 °C'],
          ['trace_doc_lbl_validity', '2026-02 → 2028-02'],
          ['trace_doc_lbl_date', '15 / 03 / 2026']
        ],
        tables: [
          {
            title: 'trace_doc_welder_t1_title',
            head: ['trace_doc_tbl_process', 'trace_doc_tbl_position', 'trace_doc_tbl_thickness'],
            rows: [
              ['135 (MAG)', 'PA · PB · PF', '3 – 24 mm'],
              ['141 (TIG)', 'trace_doc_val_all', '2 – 12 mm']
            ]
          },
          {
            title: 'trace_doc_welder_t2_title',
            head: ['trace_doc_tbl_seam', 'trace_doc_tbl_pass', 'trace_doc_tbl_current', 'trace_doc_tbl_status'],
            rows: [
              ['W-01', '4 / 4', '220–240 A', 'trace_doc_st_done'],
              ['W-02', '4 / 4', '220–240 A', 'trace_doc_st_done'],
              ['W-03', '3 / 4', '210 A', 'trace_doc_st_ongoing']
            ]
          }
        ],
        badge: 'trace_doc_welder_badge'
      },
      ndt: {
        title: 'trace_doc_ndt_title',
        sub: 'trace_doc_ndt_sub',
        stamp: 'trace_doc_ndt_stamp',
        fields: [
          ['trace_doc_lbl_report_no', 'NDT-2026-0248'],
          ['trace_doc_lbl_job', JOB.id],
          ['trace_doc_lbl_serial', JOB.serial],
          ['trace_doc_lbl_inspector_ndt', 'S. Kaya · L2 · 18920'],
          ['trace_doc_lbl_wps', JOB.wps],
          ['trace_doc_lbl_heat', JOB.heat],
          ['trace_doc_lbl_weld_log', 'LOG-A142'],
          ['trace_doc_lbl_criterion', 'trace_doc_val_criterion_b'],
          ['trace_doc_lbl_vt_scope', '%100'],
          ['trace_doc_lbl_ut_scope', 'W-01 · W-02 · W-03'],
          ['trace_doc_lbl_result', 'trace_doc_st_accept_upper'],
          ['trace_doc_lbl_date', '18 / 03 / 2026']
        ],
        tables: [
          {
            title: 'trace_doc_ndt_t1_title',
            head: ['trace_doc_tbl_seam', 'trace_doc_tbl_length', 'trace_doc_tbl_status'],
            rows: [
              ['W-01', '1250 mm', 'trace_doc_st_accept'],
              ['W-02', '820 mm', 'trace_doc_st_accept'],
              ['W-03', '640 mm', 'trace_doc_st_accept']
            ]
          },
          {
            title: 'trace_doc_ndt_t2_title',
            head: ['trace_doc_tbl_seam', 'trace_doc_tbl_probe', 'trace_doc_tbl_defect', 'trace_doc_tbl_status'],
            rows: [
              ['W-01', 'WB60 · 5 MHz', 'trace_doc_st_none', 'trace_doc_st_accept'],
              ['W-02', 'WB60 · 5 MHz', 'trace_doc_st_below_limit', 'trace_doc_st_accept'],
              ['W-03', 'WB70 · 5 MHz', 'trace_doc_st_none', 'trace_doc_st_accept']
            ]
          }
        ]
      },
      coat: {
        title: 'trace_doc_coat_title',
        sub: 'trace_doc_coat_sub',
        stamp: 'trace_doc_coat_stamp',
        fields: [
          ['trace_doc_lbl_job', JOB.id],
          ['trace_doc_lbl_serial', JOB.serial],
          ['trace_doc_lbl_heat', JOB.heat],
          ['trace_doc_lbl_blasting', 'Sa 2½'],
          ['trace_doc_lbl_profile', '40–70 µm'],
          ['trace_doc_lbl_paint_system', 'ISO 12944 · C4'],
          ['trace_doc_lbl_coat_count', 'trace_doc_val_coating_2k'],
          ['trace_doc_lbl_dft_avg', '120 µm'],
          ['trace_doc_lbl_dft_range', '108 – 134 µm'],
          ['trace_doc_lbl_colour', 'RAL 7035'],
          ['trace_doc_lbl_operator', 'trace_doc_val_paint_line'],
          ['trace_doc_lbl_date', '20 / 03 / 2026']
        ],
        tables: [{
          title: 'trace_doc_coat_t1_title',
          head: ['trace_doc_tbl_point', 'trace_doc_tbl_um', 'trace_doc_tbl_status'],
          rows: [
            ['N-01', '118', 'trace_doc_st_ok'],
            ['N-02', '122', 'trace_doc_st_ok'],
            ['N-03', '125', 'trace_doc_st_ok'],
            ['N-04', '120', 'trace_doc_st_ok']
          ]
        }],
        badge: 'trace_doc_coat_badge'
      },
      dop: {
        title: 'trace_doc_dop_title',
        sub: 'trace_doc_dop_sub',
        stamp: 'trace_doc_dop_stamp',
        fields: [
          ['trace_doc_lbl_dop_no', 'AW-DOP-2026-0142'],
          ['trace_doc_lbl_delivery_note', 'IRS-A142-2026'],
          ['trace_doc_lbl_job', JOB.id],
          ['trace_doc_lbl_serial', JOB.serial],
          ['trace_doc_lbl_heat', JOB.heat],
          ['trace_doc_lbl_product_type', 'trace_doc_val_steel_element'],
          ['trace_doc_lbl_exc_class', 'EXC3'],
          ['trace_doc_lbl_material', JOB.grade],
          ['trace_doc_lbl_wps_pack', JOB.wps],
          ['trace_doc_lbl_portal', 'portal.armaweld.com/t/A142'],
          ['trace_doc_lbl_responsible', 'trace_doc_val_quality_mgr'],
          ['trace_doc_lbl_date', '22 / 03 / 2026']
        ],
        tables: [{
          title: 'trace_doc_dop_t1_title',
          head: ['trace_doc_tbl_document', 'trace_doc_tbl_ref', 'trace_doc_tbl_status'],
          rows: [
            ['MTC 3.1', 'MTC-2026-4182', 'trace_doc_st_ok'],
            ['WPS / WPQR', 'WPS-142-A', 'trace_doc_st_ok'],
            ['trace_doc_val_welder_cert', 'AW-WL-07-2026', 'trace_doc_st_ok'],
            ['trace_doc_val_ndt_report', 'NDT-2026-0248', 'trace_doc_st_ok'],
            ['DoP / CE', 'AW-DOP-2026-0142', 'trace_doc_st_ok']
          ]
        }],
        badge: 'trace_doc_dop_badge'
      }
    };
  }

  var STEP_DOC_KEYS = ['eng', 'mtc', 'cut', 'welder', 'ndt', 'coat', 'dop'];

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function renderTable(tbl) {
    var title = tv(tbl.title) || t('trace_doc_tbl_detail');
    return (
      '<div class="trace-mini-section">' + esc(title) + '</div>' +
      '<table class="trace-mini-tbl"><thead><tr>' +
      tbl.head.map(function (h) { return '<th>' + esc(tv(h)) + '</th>'; }).join('') +
      '</tr></thead><tbody>' +
      tbl.rows.map(function (row) {
        return '<tr>' + row.map(function (c) { return '<td>' + esc(tv(c)) + '</td>'; }).join('') + '</tr>';
      }).join('') +
      '</tbody></table>'
    );
  }

  function renderTraceMiniDoc(key) {
    var d = buildDocs()[key];
    if (!d) return '';

    var fieldsHtml = d.fields.map(function (pair) {
      return '<div class="trace-mini-field"><span class="k">' + esc(t(pair[0])) + '</span><span class="v">' + esc(tv(pair[1])) + '</span></div>';
    }).join('');

    var tables = d.tables || [];
    var tableHtml = tables.map(renderTable).join('');
    var badgeHtml = d.badge ? '<div class="trace-mini-badge">' + esc(t(d.badge)) + '</div>' : '';
    var stampHtml = t(d.stamp);

    return (
      '<div class="trace-mini-doc">' +
        '<div class="trace-mini-head">' +
          '<div><div class="trace-mini-title">' + esc(t(d.title)) + '</div><div class="trace-mini-sub">' + esc(t(d.sub)) + '</div></div>' +
          '<div class="trace-mini-logo">ArmaWeld</div>' +
        '</div>' +
        '<div class="trace-mini-grid">' + fieldsHtml + '</div>' +
        tableHtml +
        badgeHtml +
        '<div class="trace-mini-stamp"><div class="trace-mini-stamp-mark">' + stampHtml + '</div></div>' +
      '</div>'
    );
  }

  window.TRACE_SAMPLE_JOB = JOB;
  window.TRACE_STEP_DOC_KEYS = STEP_DOC_KEYS;
  window.renderTraceMiniDoc = renderTraceMiniDoc;
})();
