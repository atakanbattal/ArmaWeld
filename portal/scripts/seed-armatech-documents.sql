-- ArmaTech kalite belgeleri — mevcut storage PDF'lerine referans
DO $$
DECLARE
  v_customer_id uuid := '19218e4a-0c89-48c9-bb6e-8714b9719195';
  v_order record;
  v_stage record;
  v_max_stage int;
  v_date text;
  rec record;
BEGIN
  CREATE TEMP TABLE IF NOT EXISTS _doc_tpl (
    stage_number int NOT NULL,
    document_type document_type NOT NULL,
    file_path text NOT NULL,
    name_suffix text NOT NULL
  ) ON COMMIT DROP;
  TRUNCATE _doc_tpl;

  INSERT INTO _doc_tpl VALUES
    (1, 'wpqr', 'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/JOB-2026-0004_WPQR_20260302.pdf', 'WPQR'),
    (1, 'wps', 'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/JOB-2026-0004_WPS_20260302.pdf', 'WPS'),
    (2, 'mtc', 'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/JOB-2026-0004_MTC_20260304.pdf', 'MTC'),
    (2, 'incoming_inspection', 'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/JOB-2026-0004_INCOMING-INSPECTION_20260304.pdf', 'INCOMING-INSPECTION'),
    (3, 'dimension_report', 'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/JOB-2026-0004_DIMENSION-REPORT_20260310.pdf', 'DIMENSION-REPORT'),
    (4, 'wps', 'd5a15790-9180-4ad1-bd98-5787cc3220c9/JOB-2026-0002_WPS_20260411.pdf', 'WPS'),
    (4, 'welder_cert', 'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/JOB-2026-0004_WELDER-CERT_20260320.pdf', 'WELDER-CERT'),
    (5, 'ndt', 'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/JOB-2026-0004_NDT_20260323.pdf', 'NDT'),
    (6, 'coating_report', 'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/JOB-2026-0004_COATING-REPORT_20260402.pdf', 'COATING-REPORT'),
    (7, 'shipping_doc', 'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/JOB-2026-0004_SHIPPING-DOC_20260515.pdf', 'SHIPPING-DOC'),
    (7, 'ce_dop', 'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/JOB-2026-0004_CE-DOP_20260515.pdf', 'CE-DOP');

  FOR v_order IN
    SELECT id, job_number, status, current_stage, created_at
    FROM orders
    WHERE customer_id = v_customer_id
  LOOP
    v_date := to_char(v_order.created_at, 'YYYYMMDD');

    IF v_order.status = 'shipped' THEN
      v_max_stage := 7;
    ELSIF v_order.status = 'completed' THEN
      v_max_stage := 6;
    ELSIF v_order.status = 'cancelled' THEN
      v_max_stage := 0;
    ELSIF v_order.current_stage = 1 THEN
      v_max_stage := 1;
    ELSE
      v_max_stage := v_order.current_stage - 1;
    END IF;

    FOR rec IN
      SELECT t.*, os.id AS stage_id
      FROM _doc_tpl t
      JOIN order_stages os ON os.order_id = v_order.id AND os.stage_number = t.stage_number
      WHERE t.stage_number <= v_max_stage
    LOOP
      INSERT INTO order_documents (
        order_id, stage_id, name, document_type, file_path,
        file_size, mime_type, is_visible_to_customer, is_official, uploader_type, created_at
      ) VALUES (
        v_order.id,
        rec.stage_id,
        v_order.job_number || '_' || rec.name_suffix || '_' || v_date || '.pdf',
        rec.document_type,
        rec.file_path,
        4096,
        'application/pdf',
        true,
        true,
        'admin',
        v_order.created_at + (rec.stage_number * interval '2 days')
      );
    END LOOP;

    IF v_order.status = 'shipped' THEN
      INSERT INTO order_documents (
        order_id, stage_id, name, document_type, file_path,
        file_size, mime_type, is_visible_to_customer, is_official, uploader_type, created_at
      ) VALUES (
        v_order.id,
        NULL,
        v_order.job_number || '_TESLIMAT-PAKETI.pdf',
        'other',
        'b4d9f5a2-3c7e-4f02-a01b-2e3f4a5b6c7d/general/JOB-2026-0004_TESLIMAT-PAKETI.pdf',
        4096,
        'application/pdf',
        true,
        true,
        'admin',
        v_order.created_at + interval '60 days'
      );
    END IF;
  END LOOP;
END $$;
