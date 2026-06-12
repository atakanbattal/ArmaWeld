-- ArmaTech demo seed: ahmet.yilmaz@armatech.com
-- 18 orders spanning Apr 2024 – Jun 2026 with full 7-stage production flow
-- Kalite belgeleri için ardından çalıştırın: seed-armatech-documents.sql

DO $$
DECLARE
  v_customer_id uuid := '19218e4a-0c89-48c9-bb6e-8714b9719195';
  v_actor text := 'ArmaWeld Yönetim';
  v_order_id uuid;
  v_stage_id uuid;
  v_i int;
  v_j int;
  v_created timestamptz;
  v_shipped timestamptz;
  v_stage_start timestamptz;
  v_stage_end timestamptz;
  v_stages jsonb;
  rec record;
BEGIN
  UPDATE customers
  SET created_at = '2024-04-01 09:00:00+00'
  WHERE id = v_customer_id;

  CREATE TEMP TABLE IF NOT EXISTS _seed_orders (
    id uuid PRIMARY KEY,
    job_number text NOT NULL,
    title text NOT NULL,
    description text,
    material text,
    quantity text,
    standard text,
    status order_status NOT NULL,
    current_stage int NOT NULL,
    created_at timestamptz NOT NULL,
    shipped_at timestamptz,
    expected_delivery date,
    delay_reason text
  ) ON COMMIT DROP;

  TRUNCATE _seed_orders;

  INSERT INTO _seed_orders (id, job_number, title, description, material, quantity, standard, status, current_stage, created_at, shipped_at, expected_delivery, delay_reason) VALUES
    (gen_random_uuid(), 'JOB-2024-0005', 'Prototip Test Jig Taşıyıcı', 'ArmaTech ile ilk iş birliği — prototip test jig kaynak grubu', 'S355JR', '2 adet', 'EN 1090 EXC2', 'shipped', 7, '2024-03-01 09:00+00', '2024-03-15 14:00+00', '2024-03-18', NULL),
    (gen_random_uuid(), 'JOB-2024-0001', 'Savunma Araç Şasi Alt Grubu', 'Zırhlı araç alt şasi kaynaklı imalat — seri üretim lot 1', 'S690QL', '12 adet', 'EN 1090 EXC3', 'shipped', 7, '2024-04-15 10:00+00', '2024-06-20 14:00+00', '2024-06-22', NULL),
    (gen_random_uuid(), 'JOB-2024-0002', 'Elektronik Kabin Taşıyıcı Frame', 'Saha elektronik kabini taşıyıcı çerçeve — TIG+MAG hibrit', 'S355J2', '8 adet', 'EN 15085 CL2', 'shipped', 7, '2024-06-10 09:30+00', '2024-08-12 11:00+00', '2024-08-14', NULL),
    (gen_random_uuid(), 'JOB-2024-0003', 'Radar Platformu Kaynak Çerçevesi', 'Sabit radar platformu ana konstrüksiyon', 'S355JR', '4 adet', 'EN 1090 EXC2', 'shipped', 7, '2024-09-05 08:00+00', '2024-11-18 16:30+00', '2024-11-20', NULL),
    (gen_random_uuid(), 'JOB-2024-0004', 'Zırhlı Kapı Paneli Seti', 'Balistik koruma sınıfı kapı paneli — STANAG 4569 Level 3', 'Armox 500T', '6 set', 'STANAG 4569', 'shipped', 7, '2024-11-20 10:15+00', '2025-01-30 09:00+00', '2025-02-05', NULL),
    (gen_random_uuid(), 'JOB-2025-0001', 'Anten Direği Konstrüksiyon', 'Mobil haberleşme aracı anten direği — galvaniz sonrası', 'S235JR', '10 adet', 'EN 1090 EXC2', 'shipped', 7, '2025-02-14 11:00+00', '2025-04-22 13:00+00', '2025-04-25', NULL),
    (gen_random_uuid(), 'JOB-2025-0002', 'Jeneratör Şasisi Kaynak Grubu', 'Taktik jeneratör seti taşıyıcı şasi', 'S355J2+N', '5 adet', 'EN ISO 3834-2', 'shipped', 7, '2025-04-08 09:00+00', '2025-06-15 15:00+00', '2025-06-18', NULL),
    (gen_random_uuid(), 'JOB-2025-0003', 'Askeri İletişim Modülü Gövdesi', 'Saha iletişim modülü dış gövde — aşınmaya dayanıklı', 'Hardox 450', '15 adet', 'MIL-STD', 'shipped', 7, '2025-06-20 08:30+00', '2025-08-28 10:00+00', '2025-08-20', 'UT muayenesinde şartlı kabul sonrası tamir kaynağı ve tekrar NDT nedeniyle sevkiyat 8 gün ertelendi. ArmaTech bilgilendirildi.'),
    (gen_random_uuid(), 'JOB-2025-0004', 'GPS Anten Braketi Seri Üretimi', 'Alüminyum anten montaj braketi — EN ISO 15614-2 WPQR', 'EN AW-5754', '50 adet', 'EN ISO 15614-2', 'shipped', 7, '2025-08-15 10:00+00', '2025-10-20 14:30+00', '2025-10-22', NULL),
    (gen_random_uuid(), 'JOB-2025-0005', 'Elektronik Soğutma Kanalı', 'Rack soğutma kanalı — alüminyum TIG kaynak', '6082-T6', '20 adet', 'EN 15085 CL2', 'shipped', 7, '2025-10-05 09:15+00', '2025-12-12 11:45+00', '2025-12-15', NULL),
    (gen_random_uuid(), 'JOB-2025-0006', 'Kamera Kule Konstrüksiyonu', 'Gece görüş kamera kulesi taşıyıcı — EXC3', 'S355J2', '3 adet', 'EN 1090 EXC3', 'shipped', 7, '2025-12-02 08:00+00', '2026-02-10 16:00+00', '2026-02-12', NULL),
    (gen_random_uuid(), 'JOB-2026-0034', 'Taktik Drone Gövde Parçası', 'İHA gövde alt taşıyıcı — S960QL ön ısıtma kontrollü', 'S960QL', '25 adet', 'EN ISO 3834-2', 'completed', 7, '2026-01-15 10:00+00', NULL, '2026-06-20', NULL),
    (gen_random_uuid(), 'JOB-2026-0035', 'HUD Ekran Montaj Şasisi', 'Kokpit HUD montaj şasisi — NDT aşamasında', 'S700MC', '8 adet', 'EN 15085 CL2', 'active', 5, '2026-03-10 09:00+00', NULL, '2026-05-15', 'NDT laboratuvar yoğunluğu nedeniyle muayene slotu kaydı — revize teslim: 20 Haziran 2026.'),
    (gen_random_uuid(), 'JOB-2026-0036', 'Fiber Optik Kablo Kanalı', 'Komuta aracı fiber optik kanal sistemi', 'S355J2', '12 adet', 'EN 1090 EXC2', 'active', 4, '2026-04-02 11:30+00', NULL, '2026-06-10', NULL),
    (gen_random_uuid(), 'JOB-2026-0037', 'Sensör Modülü Koruyucu Kafes', 'LIDAR sensör koruyucu kafes — malzeme girişinde', 'Hardox 500', '30 adet', 'EN ISO 3834-2', 'active', 2, '2026-05-05 08:45+00', NULL, '2026-07-01', NULL),
    (gen_random_uuid(), 'JOB-2026-0038', 'Komuta Kontrol Ünitesi Kabini', 'Saha komuta ünitesi dış kabin — mühendislik onayında', 'S355JR', '2 adet', 'EN 1090 EXC3', 'active', 1, '2026-05-18 10:00+00', NULL, '2026-08-15', NULL),
    (gen_random_uuid(), 'JOB-2026-0039', 'Hava Savunma Simülatör Platformu', 'Eğitim simülatörü taşıyıcı platform — müşteri revizyonu bekleniyor', 'S690QL', '1 adet', 'EN 1090 EXC3', 'on_hold', 3, '2026-05-20 09:00+00', NULL, '2026-06-30', 'Müşteri revizyon çizimi onayı bekleniyor — kesim aşaması durduruldu.'),
    (gen_random_uuid(), 'JOB-2026-0040', 'Elektromanyetik Kalkan Braketi', 'EMI kalkan montaj braketi — proje iptal', 'P355NH', '40 adet', 'EN 13445', 'cancelled', 1, '2026-05-25 14:00+00', NULL, '2026-07-20', NULL),
    (gen_random_uuid(), 'JOB-2026-0041', 'Uydu Haberleşme Anten Ayakları', 'Uydu terminali anten ayak seti — boya aşamasında', 'S355J2+N', '6 set', 'EN 1090 EXC3', 'active', 6, '2026-05-28 08:30+00', NULL, '2026-06-20', NULL);

  FOR rec IN SELECT * FROM _seed_orders ORDER BY created_at LOOP
    v_order_id := rec.id;
    v_created := rec.created_at;

    INSERT INTO orders (
      id, customer_id, job_number, serial_number, title, description,
      material, quantity, standard, status, current_stage,
      heat_number, wps_ref, expected_delivery, shipped_at,
      traceability_token, warranty_days, delay_reason, created_at, updated_at
    ) VALUES (
      v_order_id,
      v_customer_id,
      rec.job_number,
      'SER-AT-' || substring(rec.job_number from 5),
      rec.title,
      rec.description,
      rec.material,
      rec.quantity,
      rec.standard,
      rec.status,
      rec.current_stage,
      'HEAT-' || split_part(rec.job_number, '-', 3),
      'WPS-' || (split_part(rec.job_number, '-', 3)::int) || '-A',
      rec.expected_delivery,
      rec.shipped_at,
      encode(gen_random_bytes(12), 'hex'),
      CASE WHEN rec.status IN ('shipped', 'completed') THEN 730 ELSE 365 END,
      rec.delay_reason,
      v_created,
      COALESCE(rec.shipped_at, v_created + interval '14 days')
    );

    INSERT INTO order_activity (order_id, action, description, actor_name, created_at)
    VALUES (
      v_order_id,
      'order_created',
      'Sipariş açıldı: ' || rec.job_number || ' — ' || rec.title,
      v_actor,
      v_created
    );

    v_stages := '[
      {"n":1,"code":"SOP.REV.ENG","title":"Mühendislik Onayı"},
      {"n":2,"code":"MAT.INCOMING","title":"Malzeme Giriş Kontrolü"},
      {"n":3,"code":"CUT.FORM","title":"Kesim & Şekillendirme"},
      {"n":4,"code":"WELD.ACTIVE","title":"Kaynak Üretimi"},
      {"n":5,"code":"NDT.INSPECT","title":"NDT Muayene"},
      {"n":6,"code":"SURFACE.COAT","title":"Yüzey İşlem / Boya"},
      {"n":7,"code":"SHIP.DOSSIER","title":"Sevkiyat & Dosya Teslimi"}
    ]'::jsonb;

    FOR v_i IN 1..7 LOOP
      v_stage_start := v_created + ((v_i - 1) * interval '3 days');
      v_stage_end := v_stage_start + interval '2 days';

      INSERT INTO order_stages (
        order_id, stage_number, stage_code, title, status,
        operator_name, operator_role,
        heat_number, wps_ref,
        started_at, completed_at, created_at
      ) VALUES (
        v_order_id,
        v_i,
        (v_stages->(v_i-1)->>'code'),
        (v_stages->(v_i-1)->>'title'),
        CASE
          WHEN rec.status = 'cancelled' AND v_i = 1 THEN 'pending'::stage_status
          WHEN rec.status = 'cancelled' THEN 'pending'::stage_status
          WHEN v_i < rec.current_stage THEN 'completed'::stage_status
          WHEN v_i = rec.current_stage AND rec.status IN ('active', 'on_hold') THEN 'in_progress'::stage_status
          WHEN v_i = rec.current_stage AND rec.status IN ('completed', 'shipped') THEN 'completed'::stage_status
          WHEN v_i <= 7 AND rec.status IN ('completed', 'shipped') THEN 'completed'::stage_status
          ELSE 'pending'::stage_status
        END,
        CASE WHEN v_i <= rec.current_stage AND rec.status NOT IN ('cancelled') THEN
          (ARRAY['Mehmet Kaya','Ali Demir','Fatma Öztürk','Serkan Yıldız','Emre Çelik','Burak Arslan','Canan Aktaş'])[1 + (v_i % 7)]
        ELSE NULL END,
        CASE WHEN v_i <= rec.current_stage AND rec.status NOT IN ('cancelled') THEN
          (ARRAY['Mühendis','Kalite','Operatör','Kaynakçı','NDT Teknisyeni','Boya Operatörü','Lojistik'])[v_i]
        ELSE NULL END,
        CASE WHEN v_i = 2 THEN 'HEAT-' || split_part(rec.job_number, '-', 3) ELSE NULL END,
        CASE WHEN v_i = 4 THEN 'WPS-' || (split_part(rec.job_number, '-', 3)::int) || '-A' ELSE NULL END,
        CASE
          WHEN rec.status = 'cancelled' THEN NULL
          WHEN v_i <= rec.current_stage THEN v_stage_start
          WHEN v_i = rec.current_stage AND rec.status IN ('active', 'on_hold') THEN v_stage_start
          ELSE NULL
        END,
        CASE
          WHEN rec.status = 'cancelled' THEN NULL
          WHEN v_i < rec.current_stage THEN v_stage_end
          WHEN v_i = rec.current_stage AND rec.status IN ('completed', 'shipped') THEN COALESCE(rec.shipped_at, v_stage_end)
          WHEN rec.status IN ('completed', 'shipped') THEN COALESCE(rec.shipped_at, v_stage_end)
          ELSE NULL
        END,
        v_created
      )
      RETURNING id INTO v_stage_id;

      IF v_i < rec.current_stage OR (v_i = rec.current_stage AND rec.status IN ('completed', 'shipped')) THEN
        IF rec.status != 'cancelled' OR v_i = 1 THEN
          INSERT INTO order_activity (order_id, stage_id, action, description, actor_name, created_at)
          VALUES (
            v_order_id,
            v_stage_id,
            'stage_updated',
            (v_stages->(v_i-1)->>'title') || ' → Tamamlandı',
            v_actor,
            v_stage_end
          );
        END IF;
      ELSIF v_i = rec.current_stage AND rec.status IN ('active', 'on_hold') THEN
        INSERT INTO order_activity (order_id, stage_id, action, description, actor_name, created_at)
        VALUES (
          v_order_id,
          v_stage_id,
          'stage_updated',
          (v_stages->(v_i-1)->>'title') || ' → Devam Ediyor',
          v_actor,
          v_stage_start
        );
      END IF;

      -- NDT records for stage 5 completed orders
      IF v_i = 5 AND v_i < rec.current_stage AND rec.status NOT IN ('cancelled') THEN
        INSERT INTO ndt_records (order_id, stage_id, method, result, inspector_name, report_number, notes, tested_at, created_at)
        VALUES
          (v_order_id, v_stage_id, 'vt', 'pass', 'Hakan Yılmaz', 'NDT-' || rec.job_number || '-VT', 'Görsel muayene — kabul', v_stage_end, v_stage_end),
          (v_order_id, v_stage_id, 'ut', 'pass', 'Hakan Yılmaz', 'NDT-' || rec.job_number || '-UT', 'Ultrasonik muayene — kabul', v_stage_end + interval '4 hours', v_stage_end);
      END IF;
    END LOOP;

    -- Shipments for shipped orders
    IF rec.status = 'shipped' AND rec.shipped_at IS NOT NULL THEN
      INSERT INTO shipments (order_id, carrier, tracking_number, shipped_at, estimated_arrival, notes, created_at)
      VALUES (
        v_order_id,
        (ARRAY['MNG Kargo','Aras Kargo','Yurtiçi Kargo','DHL Freight','Horoz Lojistik'])[1 + (abs(hashtext(rec.job_number)) % 5)],
        'TRK' || split_part(rec.job_number, '-', 3) || 'AT',
        rec.shipped_at,
        rec.shipped_at + interval '5 days',
        'ArmaTech teslimat adresi — ' || rec.title,
        rec.shipped_at + interval '1 hour'
      );
    END IF;
  END LOOP;

  -- Portal messages (conversation threads)
  INSERT INTO portal_messages (customer_id, order_id, thread_id, category, subject, body, sender_type, sender_name, is_read_by_admin, is_read_by_customer, created_at)
  SELECT
    v_customer_id,
    s.id,
    ('b2000000-0000-4000-8000-' || lpad((row_number() OVER ())::text, 12, '0'))::uuid,
    'order',
    s.job_number || ' · ' || s.title,
    'Ahmet Bey, ' || s.title || ' için üretim planı onaylandı. Portal üzerinden aşama takibi yapabilirsiniz.',
    'admin',
    'ArmaWeld Destek',
    true,
    true,
    s.created_at + interval '2 hours'
  FROM _seed_orders s
  WHERE s.status IN ('shipped', 'completed', 'active')
  ORDER BY s.created_at
  LIMIT 8;

  INSERT INTO portal_messages (customer_id, order_id, thread_id, category, subject, body, sender_type, sender_name, is_read_by_admin, is_read_by_customer, created_at)
  SELECT
    v_customer_id,
    s.id,
    ('b2000000-0000-4000-8000-' || lpad((row_number() OVER () + 20)::text, 12, '0'))::uuid,
    'order',
    s.job_number || ' · Teknik soru',
    'Ahmet Bey, WPS revizyonu portala yüklendi. Kalite ekibinizin onayını bekliyoruz.',
    'customer',
    'Ahmet Yılmaz',
    true,
    true,
    s.created_at + interval '5 days'
  FROM _seed_orders s
  WHERE s.job_number IN ('JOB-2026-0035', 'JOB-2026-0036', 'JOB-2026-0041')
  ORDER BY s.created_at;

  -- RFQ history
  INSERT INTO rfq_requests (customer_id, title, description, material, quantity, standard, deadline, status, created_at, updated_at)
  VALUES
    (v_customer_id, 'Uydu Terminali Anten Ayakları', '6 set anten ayak — EN 1090 EXC3', 'S355J2+N', '6 set', 'EN 1090 EXC3', '2026-06-15', 'converted', '2026-05-10 10:00+00', '2026-05-28 08:30+00'),
    (v_customer_id, 'Taktik İHA Gövde Serisi', '25 adet drone gövde alt taşıyıcı', 'S960QL', '25 adet', 'EN ISO 3834-2', '2026-03-01', 'converted', '2025-12-20 09:00+00', '2026-01-15 10:00+00'),
    (v_customer_id, 'EMI Kalkan Braket Serisi', '40 adet EMI braket — iptal edildi', 'P355NH', '40 adet', 'EN 13445', '2026-07-20', 'rejected', '2026-05-01 11:00+00', '2026-05-22 14:00+00'),
    (v_customer_id, 'LIDAR Sensör Kafes Prototip', 'Prototip kafes — teklif aşamasında', 'Hardox 500', '5 adet', 'EN ISO 3834-2', '2026-08-01', 'quoted', '2026-05-30 08:00+00', '2026-06-03 16:00+00');

  UPDATE rfq_requests SET converted_order_id = (SELECT id FROM _seed_orders WHERE job_number = 'JOB-2026-0041')
    WHERE customer_id = v_customer_id AND title = 'Uydu Terminali Anten Ayakları';
  UPDATE rfq_requests SET converted_order_id = (SELECT id FROM _seed_orders WHERE job_number = 'JOB-2026-0034')
    WHERE customer_id = v_customer_id AND title = 'Taktik İHA Gövde Serisi';

  -- Notifications
  INSERT INTO portal_notifications (audience, customer_id, order_id, type, title, body, link, is_read, created_at)
  SELECT
    'customer',
    v_customer_id,
    s.id,
    'stage_changed',
    s.job_number || ' — Aşama güncellendi',
    s.title || ' üretim aşaması güncellendi. Detaylar için sipariş sayfasını ziyaret edin.',
    '/orders/' || s.id,
    CASE WHEN s.status = 'shipped' THEN true ELSE false END,
    s.created_at + interval '10 days'
  FROM _seed_orders s
  WHERE s.status IN ('active', 'on_hold')
  LIMIT 4;

END $$;
