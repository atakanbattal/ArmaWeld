export default {
  order: 10,
  slug: 'kaynakli-imalat-data-book-mdr',
  key: 'p10_databook',
  date: '2026-11-16',
  keywords: 'data book nedir, MDR manufacturing data record, imalat dosyası, kaynaklı imalat teslim dosyası, kalite dosyası, Dokumentation Schweißen Data Book, final documentation welding',
  related: ['itp-muayene-ve-test-plani', 'malzeme-sertifikasi-en-10204-3-1', 'kaynak-muayene-raporu-nasil-okunur', 'kaynakta-dijital-izlenebilirlik'],
  tr: {
    title: 'Data Book (MDR) Nedir? Kaynaklı İmalatta Teslim Dosyasında Ne Olmalı?',
    meta: 'Data book veya MDR (Manufacturing Data Record) nedir? Kaynaklı imalat teslim dosyasının içeriği: malzeme sertifikaları, WPS/WPQR, kaynakçı belgeleri, kaynak haritası, NDT ve ölçü raporları, DoP ve uygunluk beyanı.',
    og: 'Data Book (MDR): Kaynaklı İmalat Teslim Dosyası',
    tag: 'Kalite · Dokümantasyon',
    h1: 'Data Book (MDR) Nedir? Kaynaklı İmalat Teslim Dosyasının İçeriği',
    crumb: 'Data Book',
    read: '7 dk okuma',
    body: `
<p>Kaynaklı bir parçanın teslimatı yalnızca fiziksel parçadan ibaret değildir. Özellikle çelik yapı, basınçlı ekipman, enerji ve ihracat projelerinde parçayla birlikte <strong>data book</strong>, diğer adıyla <strong>MDR (Manufacturing Data Record)</strong> veya imalat dosyası istenir. Bu dosya, parçanın şartnameye uygun üretildiğinin kanıtıdır ve yıllar sonra bir hasar veya denetimde ilk bakılan belgedir.</p>
<h2>Data Book Ne İşe Yarar?</h2>
<ul>
<li>Malzemeden son kontrole kadar her adımın izlenebilirliğini sağlar.</li>
<li>Alıcının kabul sürecini hızlandırır; parça teslim alındığında belgeler eksiksizdir.</li>
<li>CE işaretlemesi, DoP veya uygunluk beyanı gibi yasal belgelerin dayanağıdır.</li>
<li>Garanti, hasar ve sigorta süreçlerinde teknik kanıt sunar.</li>
</ul>
<h2>Tipik Data Book İçeriği</h2>
<table class="data-table"><thead><tr><th>Bölüm</th><th>İçerik</th></tr></thead><tbody>
<tr><td>1. Kapak ve içindekiler</td><td>Proje, sipariş, parça no, revizyon, dosya onayı</td></tr>
<tr><td>2. Uygunluk belgeleri</td><td>Uygunluk sertifikası (CoC), EN 1090 için DoP ve CE etiketi, PED için uygunluk beyanı</td></tr>
<tr><td>3. Çizimler</td><td>Onaylı imalat çizimleri ve as-built çizimler, revizyon listesi</td></tr>
<tr><td>4. ITP</td><td>İmzalı muayene ve test planı</td></tr>
<tr><td>5. Malzeme</td><td>EN 10204 3.1 sertifikaları, malzeme izlenebilirlik listesi (heat no ↔ parça no)</td></tr>
<tr><td>6. Kaynak</td><td>WPS listesi, WPQR'ler, kaynakçı ve operatör sertifikaları, sarf malzeme sertifikaları</td></tr>
<tr><td>7. Kaynak haritası</td><td>Her dikişin numarası, WPS'i, kaynakçısı ve muayene sonucu</td></tr>
<tr><td>8. Muayene raporları</td><td>VT, PT, MT, UT, RT raporları; onarım ve tekrar muayene kayıtları</td></tr>
<tr><td>9. Isıl işlem</td><td>PWHT grafikleri ve raporu (varsa)</td></tr>
<tr><td>10. Ölçü kontrol</td><td>Son ölçü raporları</td></tr>
<tr><td>11. Testler</td><td>Basınç testi, sızdırmazlık testi, yük testi (varsa)</td></tr>
<tr><td>12. Yüzey işlem</td><td>Kumlama, boya veya galvaniz raporları, kalınlık ölçümleri</td></tr>
<tr><td>13. Uygunsuzluklar</td><td>NCR'ler, sapma onayları (concession), kapanış kayıtları</td></tr>
<tr><td>14. Personel</td><td>NDT personel sertifikaları, kaynak koordinatörü belgeleri</td></tr>
<tr><td>15. Kalibrasyon</td><td>Kullanılan ölçüm ve test cihazlarının kalibrasyon sertifikaları</td></tr>
<tr><td>16. Sevkiyat</td><td>Paketleme listesi, sevk kontrol kaydı</td></tr>
</tbody></table>
<p>Her proje bu bölümlerin hepsini istemez. İçerik sözleşmede veya ITP'de tanımlanmalıdır.</p>
<h2>Kaynak Haritası: Dosyanın Omurgası</h2>
<p>Kaynak haritası (weld map), çizim üzerinde her dikişe bir numara verir ve bir tabloyla şu bilgileri eşleştirir: dikiş numarası, birleşim tipi, WPS numarası, kaynakçı damgası, kaynak tarihi, VT sonucu, NDT yöntemi ve rapor numarası. Bu tablo sayesinde yıllar sonra bile bir dikişin kim tarafından, hangi prosedürle kaynaklandığı ve nasıl muayene edildiği bulunabilir.</p>
<h2>Malzeme İzlenebilirliği</h2>
<p>EN 1090-2 EXC3 ve EXC4'te, basınçlı ekipmanda ve birçok müşteri şartnamesinde her parçanın hangi döküm (heat) numaralı malzemeden kesildiği belgelenmelidir. Bu, kesim aşamasında parça numarasının işaretlenmesi ve sertifika numarasıyla eşleştirilmesiyle yapılır. Malzeme izlenebilirlik listesi data book'un en çok sorgulanan bölümlerinden biridir.</p>
<h2>Data Book Ne Zaman Hazırlanır?</h2>
<p>Data book en sona bırakılırsa eksik belge bulmak zorlaşır ve teslimat gecikir. Doğru yöntem, dosyayı üretimle birlikte doldurmaktır: malzeme geldiğinde sertifika, kaynak bittiğinde VT raporu, NDT yapıldığında rapor dosyaya eklenir. Üretim bittiğinde dosyanın yalnızca son kontrolü ve onayı kalır.</p>
<h2>Fiziksel mi, Dijital mi?</h2>
<p>Günümüzde çoğu alıcı data book'u aranabilir PDF olarak, bölüm yer imleriyle birlikte ister. Bazı projeler ıslak imzalı basılı kopya da talep eder. Dijital dosyada her belgenin taranmış değil, mümkünse orijinal elektronik hali bulunmalı ve dosya boyutu e-postayla gönderilebilir seviyede tutulmalıdır.</p>
<h2>Alıcı Olarak Ne İstemelisiniz?</h2>
<ol>
<li>Data book içeriğini teklif aşamasında listeleyin.</li>
<li>Dosya formatını (PDF, yer imleri, dil) belirtin.</li>
<li>Teslim süresini yazın: parçayla birlikte mi, belirli gün içinde mi?</li>
<li>Ön onay için taslak içindekiler sayfası isteyin.</li>
<li>Saklama süresini sözleşmeye ekleyin.</li>
</ol>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Malzeme sertifikaları, WPS/WPQR, kaynakçı belgeleri, kaynak haritası, NDT ve ölçü raporları üretim sırasında siparişe bağlı olarak toplanır ve müşteri portalında paylaşılır. Teslimatta data book, sözleşmede istenen bölümlerle tek bir PDF olarak hazırlanır. <a href="../kaynakli-imalat.html">Kaynaklı imalat hizmetimizi inceleyin →</a></p></div>
`,
    faq: [
      ['Data book ile MDR aynı şey mi?', 'Pratikte evet. MDR (Manufacturing Data Record), data book, imalat dosyası veya final documentation aynı belge setini ifade eder. Sektöre göre isim değişir.'],
      ['Data book hangi dilde hazırlanır?', 'Sözleşmede belirtilen dilde. Avrupa projelerinde genellikle İngilizce veya Almanca istenir. Standart formlar çift dilli hazırlanabilir.'],
      ['Data book ne kadar sürede teslim edilir?', 'Üretimle eş zamanlı doldurulduğunda parçayla birlikte teslim edilebilir. Sözleşmede genellikle sevkiyattan sonraki belirli bir gün sayısı da tanımlanır.'],
      ['Her sipariş için data book gerekir mi?', 'Hayır. Basit seri parçalarda uygunluk sertifikası ve malzeme sertifikası yeterli olabilir. Proje bazlı, EN 1090 veya basınçlı ekipman işlerinde data book standarttır.']
    ],
    cta_h3: 'Belgeleri eksiksiz teslim edilen kaynaklı parçalar',
    cta_p: 'Çiziminizi ve doküman şartnamenizi gönderin; data book içeriğini teklifte birlikte netleştirelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'What Is a Data Book (MDR)? Final Documentation for Welded Fabrication',
    meta: 'What is a data book or MDR (Manufacturing Data Record)? Contents of the final documentation for welded fabrication: material certificates, WPS/WPQR, welder certificates, weld map, NDT and dimensional reports, DoP and declaration of conformity.',
    og: 'Data Book (MDR): Final Documentation for Weldments',
    tag: 'Quality · Documentation',
    h1: 'What Is a Data Book (MDR)? What Final Documentation for Welded Parts Contains',
    crumb: 'Data Book',
    read: '7 min read',
    body: `
<p>Delivering a welded part is not just about the physical part. Especially in steel structures, pressure equipment, energy and export projects, the part comes with a <strong>data book</strong>, also called an <strong>MDR (Manufacturing Data Record)</strong> or final documentation. It proves the part was made to specification and is the first thing consulted years later in a failure investigation or audit.</p>
<h2>What Is a Data Book For?</h2>
<ul>
<li>It provides traceability of every step from material to final inspection.</li>
<li>It speeds up acceptance; documents are complete when the part arrives.</li>
<li>It underpins legal documents such as CE marking, DoP or declaration of conformity.</li>
<li>It provides technical evidence in warranty, damage and insurance cases.</li>
</ul>
<h2>Typical Data Book Contents</h2>
<table class="data-table"><thead><tr><th>Section</th><th>Contents</th></tr></thead><tbody>
<tr><td>1. Cover and index</td><td>Project, order, part number, revision, dossier approval</td></tr>
<tr><td>2. Conformity documents</td><td>Certificate of conformity (CoC), DoP and CE label for EN 1090, declaration of conformity for PED</td></tr>
<tr><td>3. Drawings</td><td>Approved fabrication and as-built drawings, revision list</td></tr>
<tr><td>4. ITP</td><td>Signed inspection and test plan</td></tr>
<tr><td>5. Material</td><td>EN 10204 3.1 certificates, material traceability list (heat no. ↔ part no.)</td></tr>
<tr><td>6. Welding</td><td>WPS list, WPQRs, welder and operator certificates, consumable certificates</td></tr>
<tr><td>7. Weld map</td><td>Number, WPS, welder and inspection result for each weld</td></tr>
<tr><td>8. Inspection reports</td><td>VT, PT, MT, UT, RT reports; repair and re-test records</td></tr>
<tr><td>9. Heat treatment</td><td>PWHT charts and report (if any)</td></tr>
<tr><td>10. Dimensional</td><td>Final dimensional reports</td></tr>
<tr><td>11. Tests</td><td>Pressure, leak or load tests (if any)</td></tr>
<tr><td>12. Surface treatment</td><td>Blasting, coating or galvanizing reports, thickness readings</td></tr>
<tr><td>13. Nonconformities</td><td>NCRs, concessions, close-out records</td></tr>
<tr><td>14. Personnel</td><td>NDT personnel certificates, welding coordinator documents</td></tr>
<tr><td>15. Calibration</td><td>Calibration certificates of measuring and test equipment used</td></tr>
<tr><td>16. Shipping</td><td>Packing list, pre-shipment check record</td></tr>
</tbody></table>
<p>Not every project needs every section. Contents should be defined in the contract or ITP.</p>
<h2>The Weld Map: Backbone of the Dossier</h2>
<p>The weld map numbers every weld on the drawing and links in a table: weld number, joint type, WPS number, welder stamp, welding date, VT result, NDT method and report number. Thanks to this table, years later you can still find who welded a seam, with which procedure, and how it was inspected.</p>
<h2>Material Traceability</h2>
<p>In EN 1090-2 EXC3 and EXC4, pressure equipment and many customer specifications, each part must be traceable to the heat number of the material it was cut from. This is done by marking the part number at cutting and linking it to the certificate number. The material traceability list is one of the most frequently queried sections of a data book.</p>
<h2>When Is the Data Book Prepared?</h2>
<p>If the data book is left to the end, missing documents are hard to find and delivery is delayed. The right way is to build it along with production: the certificate goes in when material arrives, the VT report when welding is finished, the NDT report when testing is done. When production ends, only the final review and approval remain.</p>
<h2>Paper or Digital?</h2>
<p>Most buyers today want the data book as a searchable PDF with section bookmarks. Some projects also want a wet-signed printed copy. In a digital dossier, use original electronic documents rather than scans where possible, and keep the file size small enough to email.</p>
<h2>What Should a Buyer Ask For?</h2>
<ol>
<li>List the data book contents at quotation stage.</li>
<li>Specify format (PDF, bookmarks, language).</li>
<li>State the delivery deadline: with the part or within a set number of days?</li>
<li>Ask for a draft index for prior approval.</li>
<li>Add the retention period to the contract.</li>
</ol>
<div class="callout"><p><strong>At ArmaWeld:</strong> material certificates, WPS/WPQR, welder certificates, weld map, NDT and dimensional reports are collected against the order during production and shared in the customer portal. At delivery, the data book is compiled as one PDF with the sections required by the contract. <a href="../kaynakli-imalat.html">See our welded fabrication service →</a></p></div>
`,
    faq: [
      ['Are a data book and an MDR the same?', 'In practice, yes. MDR (Manufacturing Data Record), data book, fabrication dossier and final documentation all refer to the same set of documents. The name varies by sector.'],
      ['In which language is the data book prepared?', 'In the language stated in the contract. European projects usually ask for English or German. Standard forms can be bilingual.'],
      ['How quickly is the data book delivered?', 'When it is built alongside production, it can be delivered with the part. Contracts often also set a number of days after shipment.'],
      ['Does every order need a data book?', 'No. For simple series parts, a certificate of conformity and material certificates may be enough. For project work, EN 1090 or pressure equipment, a data book is standard.']
    ],
    cta_h3: 'Welded parts delivered with complete documentation',
    cta_p: 'Send your drawing and documentation requirements and we will define the data book contents in our quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Was ist ein Data Book (MDR)? Enddokumentation in der Schweißfertigung',
    meta: 'Was ist ein Data Book bzw. MDR (Manufacturing Data Record)? Inhalt der Enddokumentation für Schweißteile: Abnahmeprüfzeugnisse, WPS/WPQR, Schweißerzertifikate, Schweißnahtplan, ZfP- und Maßprotokolle, DoP und Konformitätserklärung.',
    og: 'Data Book (MDR): Enddokumentation für Schweißteile',
    tag: 'Qualität · Dokumentation',
    h1: 'Was ist ein Data Book (MDR)? Inhalt der Enddokumentation für Schweißteile',
    crumb: 'Data Book',
    read: '7 Min. Lesezeit',
    body: `
<p>Zur Lieferung eines Schweißteils gehört mehr als das Teil selbst. Vor allem im Stahlbau, bei Druckgeräten, in der Energietechnik und im Export wird ein <strong>Data Book</strong> verlangt, auch <strong>MDR (Manufacturing Data Record)</strong>, Herstellerdokumentation oder Enddokumentation genannt. Es belegt die spezifikationsgerechte Fertigung und ist Jahre später bei Schadensfällen oder Audits das erste Dokument, das herangezogen wird.</p>
<h2>Wozu dient ein Data Book?</h2>
<ul>
<li>Rückverfolgbarkeit jedes Schritts vom Werkstoff bis zur Endprüfung.</li>
<li>Schnellere Abnahme, weil die Unterlagen bei Lieferung vollständig sind.</li>
<li>Grundlage für CE-Kennzeichnung, Leistungserklärung (DoP) oder Konformitätserklärung.</li>
<li>Technischer Nachweis bei Gewährleistung, Schaden und Versicherung.</li>
</ul>
<h2>Typischer Inhalt</h2>
<table class="data-table"><thead><tr><th>Abschnitt</th><th>Inhalt</th></tr></thead><tbody>
<tr><td>1. Deckblatt und Inhaltsverzeichnis</td><td>Projekt, Bestellung, Teilenummer, Revision, Freigabe</td></tr>
<tr><td>2. Konformitätsnachweise</td><td>Konformitätsbescheinigung (CoC), DoP und CE-Kennzeichnung für EN 1090, Konformitätserklärung für die DGRL</td></tr>
<tr><td>3. Zeichnungen</td><td>Freigegebene Fertigungs- und Bestandszeichnungen, Revisionsliste</td></tr>
<tr><td>4. ITP</td><td>Unterzeichneter Prüf- und Testplan</td></tr>
<tr><td>5. Werkstoff</td><td>Abnahmeprüfzeugnisse 3.1 nach EN 10204, Werkstoffrückverfolgbarkeit (Schmelze ↔ Teil)</td></tr>
<tr><td>6. Schweißen</td><td>WPS-Liste, WPQR, Schweißer- und Bedienerzertifikate, Zusatzwerkstoffzeugnisse</td></tr>
<tr><td>7. Schweißnahtplan</td><td>Nummer, WPS, Schweißer und Prüfergebnis je Naht</td></tr>
<tr><td>8. Prüfberichte</td><td>VT, PT, MT, UT, RT; Reparatur- und Wiederholungsprüfungen</td></tr>
<tr><td>9. Wärmebehandlung</td><td>PWHT-Schrieb und Bericht (falls zutreffend)</td></tr>
<tr><td>10. Maßprüfung</td><td>Endmaßprotokolle</td></tr>
<tr><td>11. Prüfungen</td><td>Druck-, Dichtheits- oder Belastungsprüfung (falls zutreffend)</td></tr>
<tr><td>12. Oberflächenschutz</td><td>Strahl-, Beschichtungs- oder Verzinkungsprotokolle, Schichtdickenmessungen</td></tr>
<tr><td>13. Abweichungen</td><td>NCR, Sonderfreigaben, Abschlussnachweise</td></tr>
<tr><td>14. Personal</td><td>ZfP-Zertifikate, Nachweise der Schweißaufsicht</td></tr>
<tr><td>15. Kalibrierung</td><td>Kalibrierscheine der eingesetzten Mess- und Prüfmittel</td></tr>
<tr><td>16. Versand</td><td>Packliste, Versandkontrolle</td></tr>
</tbody></table>
<p>Nicht jedes Projekt braucht alle Abschnitte. Der Inhalt sollte im Vertrag oder im ITP festgelegt sein.</p>
<h2>Der Schweißnahtplan als Rückgrat</h2>
<p>Der Schweißnahtplan nummeriert jede Naht auf der Zeichnung und verknüpft in einer Tabelle: Nahtnummer, Stoßart, WPS, Schweißerkennzeichen, Datum, VT-Ergebnis, ZfP-Verfahren und Berichtsnummer. So lässt sich auch Jahre später feststellen, wer eine Naht nach welcher Anweisung geschweißt hat und wie sie geprüft wurde.</p>
<h2>Werkstoffrückverfolgbarkeit</h2>
<p>Bei EN 1090-2 EXC3 und EXC4, bei Druckgeräten und in vielen Kundenspezifikationen muss jedes Teil der Schmelznummer des Ausgangsmaterials zugeordnet werden können. Dazu wird beim Zuschnitt die Teilenummer markiert und mit der Zeugnisnummer verknüpft. Die Rückverfolgbarkeitsliste ist einer der am häufigsten geprüften Abschnitte.</p>
<h2>Wann wird das Data Book erstellt?</h2>
<p>Wird es ans Ende geschoben, sind fehlende Unterlagen schwer zu beschaffen und die Lieferung verzögert sich. Richtig ist, es fertigungsbegleitend zu füllen: Zeugnis bei Wareneingang, VT-Bericht nach dem Schweißen, ZfP-Bericht nach der Prüfung. Am Ende bleiben nur Schlussprüfung und Freigabe.</p>
<h2>Papier oder digital?</h2>
<p>Die meisten Kunden wünschen heute ein durchsuchbares PDF mit Lesezeichen je Abschnitt. Manche Projekte verlangen zusätzlich eine handschriftlich unterzeichnete Papierfassung. Digital sollten möglichst Originaldateien statt Scans verwendet und die Dateigröße per E-Mail versendbar gehalten werden.</p>
<h2>Was sollten Einkäufer fordern?</h2>
<ol>
<li>Inhalt des Data Books bereits in der Anfrage auflisten.</li>
<li>Format festlegen (PDF, Lesezeichen, Sprache).</li>
<li>Liefertermin nennen: mit dem Teil oder innerhalb einer Frist?</li>
<li>Entwurf des Inhaltsverzeichnisses zur Vorabfreigabe anfordern.</li>
<li>Aufbewahrungsfrist im Vertrag festhalten.</li>
</ol>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Abnahmeprüfzeugnisse, WPS/WPQR, Schweißerzertifikate, Schweißnahtplan, ZfP- und Maßprotokolle werden fertigungsbegleitend dem Auftrag zugeordnet und im Kundenportal bereitgestellt. Zur Lieferung erstellen wir das Data Book als ein PDF mit den vertraglich geforderten Abschnitten. <a href="../kaynakli-imalat.html">Unsere Schweißfertigung →</a></p></div>
`,
    faq: [
      ['Sind Data Book und MDR dasselbe?', 'In der Praxis ja. MDR, Data Book, Herstellerdokumentation und Enddokumentation bezeichnen denselben Unterlagensatz; der Begriff variiert je Branche.'],
      ['In welcher Sprache wird das Data Book erstellt?', 'In der vertraglich vereinbarten Sprache. Europäische Projekte fordern meist Englisch oder Deutsch. Standardformulare können zweisprachig sein.'],
      ['Wie schnell wird das Data Book geliefert?', 'Fertigungsbegleitend erstellt, kann es mit dem Teil geliefert werden. Verträge nennen oft zusätzlich eine Frist nach Versand.'],
      ['Braucht jeder Auftrag ein Data Book?', 'Nein. Bei einfachen Serienteilen genügen oft Konformitätsbescheinigung und Werkstoffzeugnisse. Bei Projekten, EN 1090 oder Druckgeräten ist ein Data Book Standard.']
    ],
    cta_h3: 'Schweißteile mit vollständiger Dokumentation',
    cta_p: 'Senden Sie Zeichnung und Dokumentationsanforderungen. Den Inhalt des Data Books legen wir im Angebot fest.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: '¿Qué es un data book (MDR)? Dossier final en fabricación soldada',
    meta: 'Qué es un data book o MDR (Manufacturing Data Record) y qué contiene el dossier final de fabricación soldada: certificados de material, WPS/WPQR, certificados de soldador, mapa de soldaduras, informes END y dimensionales, DoP y declaración de conformidad.',
    og: 'Data book (MDR): dossier final de fabricación soldada',
    tag: 'Calidad · Documentación',
    h1: '¿Qué es un data book (MDR)? Contenido del dossier final de piezas soldadas',
    crumb: 'Data book',
    read: '7 min de lectura',
    body: `
<p>Entregar una pieza soldada no es solo entregar la pieza. Sobre todo en estructura metálica, equipos a presión, energía y proyectos de exportación, la pieza va acompañada de un <strong>data book</strong>, también llamado <strong>MDR (Manufacturing Data Record)</strong> o dossier de calidad. Demuestra que se fabricó según especificación y es lo primero que se consulta años después ante un fallo o una auditoría.</p>
<h2>¿Para qué sirve?</h2>
<ul>
<li>Da trazabilidad de cada paso, del material a la inspección final.</li>
<li>Agiliza la aceptación: la documentación está completa al recibir la pieza.</li>
<li>Respalda documentos legales como el marcado CE, la DoP o la declaración de conformidad.</li>
<li>Aporta pruebas técnicas en garantías, siniestros y seguros.</li>
</ul>
<h2>Contenido típico</h2>
<table class="data-table"><thead><tr><th>Sección</th><th>Contenido</th></tr></thead><tbody>
<tr><td>1. Portada e índice</td><td>Proyecto, pedido, número de pieza, revisión, aprobación del dossier</td></tr>
<tr><td>2. Documentos de conformidad</td><td>Certificado de conformidad (CoC), DoP y marcado CE para EN 1090, declaración de conformidad para PED</td></tr>
<tr><td>3. Planos</td><td>Planos de fabricación aprobados y as-built, lista de revisiones</td></tr>
<tr><td>4. ITP</td><td>Plan de inspección y ensayos firmado</td></tr>
<tr><td>5. Material</td><td>Certificados 3.1 EN 10204, lista de trazabilidad (colada ↔ pieza)</td></tr>
<tr><td>6. Soldadura</td><td>Lista de WPS, WPQR, certificados de soldadores y operadores, certificados de consumibles</td></tr>
<tr><td>7. Mapa de soldaduras</td><td>Número, WPS, soldador y resultado de inspección de cada cordón</td></tr>
<tr><td>8. Informes de inspección</td><td>VT, PT, MT, UT, RT; registros de reparación y reensayo</td></tr>
<tr><td>9. Tratamiento térmico</td><td>Gráficas e informe de PWHT (si aplica)</td></tr>
<tr><td>10. Dimensional</td><td>Informes dimensionales finales</td></tr>
<tr><td>11. Ensayos</td><td>Prueba de presión, estanqueidad o carga (si aplica)</td></tr>
<tr><td>12. Tratamiento superficial</td><td>Informes de chorreado, pintura o galvanizado, medición de espesores</td></tr>
<tr><td>13. No conformidades</td><td>NCR, concesiones, registros de cierre</td></tr>
<tr><td>14. Personal</td><td>Certificados de personal END, documentos del coordinador de soldadura</td></tr>
<tr><td>15. Calibración</td><td>Certificados de calibración de los equipos usados</td></tr>
<tr><td>16. Expedición</td><td>Lista de embalaje, control previo al envío</td></tr>
</tbody></table>
<p>No todos los proyectos piden todas las secciones. El contenido debe definirse en el contrato o en el ITP.</p>
<h2>El mapa de soldaduras: la columna vertebral</h2>
<p>El mapa de soldaduras numera cada cordón en el plano y vincula en una tabla: número, tipo de unión, WPS, sello del soldador, fecha, resultado VT, método END y número de informe. Gracias a esta tabla, años después se puede saber quién soldó un cordón, con qué procedimiento y cómo se inspeccionó.</p>
<h2>Trazabilidad del material</h2>
<p>En EN 1090-2 EXC3 y EXC4, equipos a presión y muchas especificaciones de cliente, cada pieza debe poder vincularse al número de colada del material del que se cortó. Se marca el número de pieza en el corte y se enlaza con el número de certificado. La lista de trazabilidad es una de las secciones más consultadas.</p>
<h2>¿Cuándo se prepara?</h2>
<p>Si se deja para el final, cuesta encontrar los documentos que faltan y la entrega se retrasa. Lo correcto es llenarlo junto con la producción: certificado al llegar el material, informe VT al terminar la soldadura, informe END tras el ensayo. Al acabar, solo quedan la revisión y aprobación finales.</p>
<h2>¿Papel o digital?</h2>
<p>La mayoría de compradores quiere hoy un PDF con búsqueda y marcadores por sección. Algunos proyectos piden además una copia impresa con firma manuscrita. En digital conviene usar documentos electrónicos originales en lugar de escaneos y mantener un tamaño que permita enviarlo por correo.</p>
<h2>¿Qué debe pedir el comprador?</h2>
<ol>
<li>Enumerar el contenido del data book en la petición de oferta.</li>
<li>Especificar el formato (PDF, marcadores, idioma).</li>
<li>Fijar el plazo: ¿con la pieza o en un número de días?</li>
<li>Pedir un índice borrador para aprobación previa.</li>
<li>Incluir el periodo de conservación en el contrato.</li>
</ol>
<div class="callout"><p><strong>En ArmaWeld:</strong> certificados de material, WPS/WPQR, certificados de soldadores, mapa de soldaduras e informes END y dimensionales se recopilan con el pedido durante la producción y se comparten en el portal del cliente. En la entrega preparamos el data book como un único PDF con las secciones exigidas en el contrato. <a href="../kaynakli-imalat.html">Nuestra fabricación soldada →</a></p></div>
`,
    faq: [
      ['¿Data book y MDR son lo mismo?', 'En la práctica sí. MDR, data book, dossier de fabricación o documentación final se refieren al mismo conjunto de documentos; el nombre cambia según el sector.'],
      ['¿En qué idioma se prepara?', 'En el indicado en el contrato. En Europa suele pedirse inglés o alemán. Los formularios estándar pueden ser bilingües.'],
      ['¿Cuándo se entrega?', 'Si se llena durante la producción, puede entregarse con la pieza. Los contratos suelen fijar además un plazo tras el envío.'],
      ['¿Todo pedido necesita data book?', 'No. En piezas de serie sencillas pueden bastar el certificado de conformidad y los de material. En proyectos, EN 1090 o equipos a presión, el data book es estándar.']
    ],
    cta_h3: 'Piezas soldadas entregadas con documentación completa',
    cta_p: 'Envíe plano y requisitos documentales; definimos el contenido del data book en la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Qu’est-ce qu’un data book (MDR) ? Dossier de fin de fabrication en mécano-soudure',
    meta: 'Qu’est-ce qu’un data book ou MDR (Manufacturing Data Record) ? Contenu du dossier de fin de fabrication : certificats matière, DMOS/QMOS, certificats soudeurs, plan de soudage, rapports CND et dimensionnels, DoP et déclaration de conformité.',
    og: 'Data book (MDR) : dossier de fin de fabrication',
    tag: 'Qualité · Documentation',
    h1: 'Qu’est-ce qu’un data book (MDR) ? Contenu du dossier de fin de fabrication',
    crumb: 'Data book',
    read: '7 min de lecture',
    body: `
<p>Livrer une pièce soudée, ce n’est pas seulement livrer la pièce. En charpente, équipements sous pression, énergie et à l’export, la pièce s’accompagne d’un <strong>data book</strong>, aussi appelé <strong>MDR (Manufacturing Data Record)</strong> ou dossier de fin de fabrication (DFF). Il prouve la conformité de la fabrication et c’est le premier document consulté, des années plus tard, lors d’une expertise ou d’un audit.</p>
<h2>À quoi sert-il ?</h2>
<ul>
<li>Il assure la traçabilité de chaque étape, de la matière au contrôle final.</li>
<li>Il accélère la réception : les documents sont complets à la livraison.</li>
<li>Il fonde les documents réglementaires : marquage CE, DoP ou déclaration de conformité.</li>
<li>Il apporte la preuve technique en cas de garantie, sinistre ou assurance.</li>
</ul>
<h2>Contenu type</h2>
<table class="data-table"><thead><tr><th>Section</th><th>Contenu</th></tr></thead><tbody>
<tr><td>1. Page de garde et sommaire</td><td>Projet, commande, référence pièce, indice, validation du dossier</td></tr>
<tr><td>2. Documents de conformité</td><td>Certificat de conformité (CoC), DoP et marquage CE pour l’EN 1090, déclaration de conformité DESP</td></tr>
<tr><td>3. Plans</td><td>Plans de fabrication validés et plans de récolement, liste des indices</td></tr>
<tr><td>4. ITP</td><td>Plan de contrôle et d’essais visé</td></tr>
<tr><td>5. Matière</td><td>Certificats 3.1 EN 10204, liste de traçabilité (coulée ↔ pièce)</td></tr>
<tr><td>6. Soudage</td><td>Liste des DMOS, QMOS, certificats soudeurs et opérateurs, certificats des produits d’apport</td></tr>
<tr><td>7. Plan de soudage</td><td>Numéro, DMOS, soudeur et résultat de contrôle par cordon</td></tr>
<tr><td>8. Rapports de contrôle</td><td>VT, PT, MT, UT, RT ; réparations et recontrôles</td></tr>
<tr><td>9. Traitement thermique</td><td>Enregistrements et rapport de TTAS (le cas échéant)</td></tr>
<tr><td>10. Contrôle dimensionnel</td><td>Rapports dimensionnels finaux</td></tr>
<tr><td>11. Essais</td><td>Épreuve hydraulique, étanchéité ou charge (le cas échéant)</td></tr>
<tr><td>12. Traitement de surface</td><td>Rapports de grenaillage, peinture ou galvanisation, mesures d’épaisseur</td></tr>
<tr><td>13. Non-conformités</td><td>NCR, dérogations, clôtures</td></tr>
<tr><td>14. Personnel</td><td>Certificats CND, documents du coordinateur en soudage</td></tr>
<tr><td>15. Étalonnage</td><td>Certificats d’étalonnage des moyens de mesure utilisés</td></tr>
<tr><td>16. Expédition</td><td>Liste de colisage, contrôle avant expédition</td></tr>
</tbody></table>
<p>Tous les projets n’exigent pas toutes les sections. Le contenu doit être défini au contrat ou dans l’ITP.</p>
<h2>Le plan de soudage, colonne vertébrale du dossier</h2>
<p>Le plan de soudage numérote chaque cordon sur le plan et relie dans un tableau : numéro, type d’assemblage, DMOS, poinçon du soudeur, date, résultat VT, méthode CND et numéro de rapport. Des années plus tard, on retrouve ainsi qui a soudé un cordon, avec quel mode opératoire et comment il a été contrôlé.</p>
<h2>Traçabilité matière</h2>
<p>En EN 1090-2 EXC3 et EXC4, en équipements sous pression et dans de nombreuses spécifications, chaque pièce doit être rattachée au numéro de coulée de sa matière. On marque la référence pièce à la découpe et on la relie au numéro de certificat. La liste de traçabilité est l’une des sections les plus examinées.</p>
<h2>Quand constituer le data book ?</h2>
<p>Laissé pour la fin, il devient difficile de retrouver les documents manquants et la livraison prend du retard. La bonne méthode consiste à l’alimenter au fil de la fabrication : certificat à la réception matière, rapport VT après soudage, rapport CND après contrôle. À la fin, il ne reste que la revue et la validation.</p>
<h2>Papier ou numérique ?</h2>
<p>La plupart des clients veulent aujourd’hui un PDF consultable avec signets par section. Certains projets exigent en plus un exemplaire papier signé. En numérique, privilégiez les documents électroniques d’origine plutôt que des scans et gardez une taille compatible avec l’envoi par e-mail.</p>
<h2>Ce que l’acheteur doit demander</h2>
<ol>
<li>Lister le contenu du data book dès l’appel d’offres.</li>
<li>Préciser le format (PDF, signets, langue).</li>
<li>Fixer le délai : avec la pièce ou sous un nombre de jours ?</li>
<li>Demander un sommaire provisoire pour validation.</li>
<li>Inscrire la durée de conservation au contrat.</li>
</ol>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> certificats matière, DMOS/QMOS, certificats soudeurs, plan de soudage, rapports CND et dimensionnels sont rattachés à la commande pendant la fabrication et partagés dans le portail client. À la livraison, le data book est constitué en un seul PDF avec les sections exigées par le contrat. <a href="../kaynakli-imalat.html">Notre fabrication mécano-soudée →</a></p></div>
`,
    faq: [
      ['Data book et MDR, est-ce la même chose ?', 'En pratique oui. MDR, data book, dossier de fabrication ou DFF désignent le même ensemble de documents ; le terme varie selon le secteur.'],
      ['Dans quelle langue est-il rédigé ?', 'Dans celle prévue au contrat. En Europe, l’anglais ou l’allemand sont courants. Les formulaires standards peuvent être bilingues.'],
      ['Quand est-il livré ?', 'Alimenté au fil de la fabrication, il peut être livré avec la pièce. Les contrats fixent souvent aussi un délai après expédition.'],
      ['Chaque commande exige-t-elle un data book ?', 'Non. Pour des pièces de série simples, un certificat de conformité et les certificats matière peuvent suffire. Pour les projets, l’EN 1090 ou les équipements sous pression, il est standard.']
    ],
    cta_h3: 'Des pièces soudées livrées avec un dossier complet',
    cta_p: 'Envoyez plan et exigences documentaires ; nous définissons le contenu du data book dans l’offre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Cos’è un data book (MDR)? Dossier finale nella carpenteria saldata',
    meta: 'Cos’è un data book o MDR (Manufacturing Data Record) e cosa contiene il dossier finale della carpenteria saldata: certificati materiale, WPS/WPQR, patentini, mappa saldature, rapporti CND e dimensionali, DoP e dichiarazione di conformità.',
    og: 'Data book (MDR): dossier finale della carpenteria saldata',
    tag: 'Qualità · Documentazione',
    h1: 'Cos’è un data book (MDR)? Contenuto del dossier finale dei pezzi saldati',
    crumb: 'Data book',
    read: '7 min di lettura',
    body: `
<p>Consegnare un pezzo saldato non significa solo consegnare il pezzo. Soprattutto in carpenteria strutturale, attrezzature a pressione, energia ed export, il pezzo arriva con un <strong>data book</strong>, detto anche <strong>MDR (Manufacturing Data Record)</strong> o dossier di costruzione. Dimostra la conformità della fabbricazione ed è il primo documento consultato, anni dopo, in caso di guasto o audit.</p>
<h2>A cosa serve?</h2>
<ul>
<li>Garantisce la tracciabilità di ogni fase, dal materiale al controllo finale.</li>
<li>Accelera l’accettazione: i documenti sono completi alla consegna.</li>
<li>È la base di documenti legali come marcatura CE, DoP o dichiarazione di conformità.</li>
<li>Fornisce prove tecniche per garanzie, sinistri e assicurazioni.</li>
</ul>
<h2>Contenuto tipico</h2>
<table class="data-table"><thead><tr><th>Sezione</th><th>Contenuto</th></tr></thead><tbody>
<tr><td>1. Copertina e indice</td><td>Progetto, ordine, codice pezzo, revisione, approvazione del dossier</td></tr>
<tr><td>2. Documenti di conformità</td><td>Certificato di conformità (CoC), DoP e marcatura CE per EN 1090, dichiarazione di conformità PED</td></tr>
<tr><td>3. Disegni</td><td>Disegni costruttivi approvati e as-built, elenco revisioni</td></tr>
<tr><td>4. ITP</td><td>Piano di ispezione e prova firmato</td></tr>
<tr><td>5. Materiale</td><td>Certificati 3.1 EN 10204, elenco di tracciabilità (colata ↔ pezzo)</td></tr>
<tr><td>6. Saldatura</td><td>Elenco WPS, WPQR, patentini di saldatori e operatori, certificati dei consumabili</td></tr>
<tr><td>7. Mappa saldature</td><td>Numero, WPS, saldatore ed esito del controllo per ogni cordone</td></tr>
<tr><td>8. Rapporti di controllo</td><td>VT, PT, MT, UT, RT; riparazioni e ricontrolli</td></tr>
<tr><td>9. Trattamento termico</td><td>Diagrammi e rapporto PWHT (se previsto)</td></tr>
<tr><td>10. Dimensionale</td><td>Rapporti dimensionali finali</td></tr>
<tr><td>11. Prove</td><td>Prova idraulica, di tenuta o di carico (se previste)</td></tr>
<tr><td>12. Trattamento superficiale</td><td>Rapporti di sabbiatura, verniciatura o zincatura, misure di spessore</td></tr>
<tr><td>13. Non conformità</td><td>NCR, deroghe, chiusure</td></tr>
<tr><td>14. Personale</td><td>Certificati del personale CND, documenti del coordinatore di saldatura</td></tr>
<tr><td>15. Taratura</td><td>Certificati di taratura degli strumenti usati</td></tr>
<tr><td>16. Spedizione</td><td>Packing list, controllo pre-spedizione</td></tr>
</tbody></table>
<p>Non tutti i progetti richiedono tutte le sezioni. Il contenuto va definito nel contratto o nell’ITP.</p>
<h2>La mappa saldature, spina dorsale del dossier</h2>
<p>La mappa saldature numera ogni cordone sul disegno e collega in una tabella: numero, tipo di giunto, WPS, punzone del saldatore, data, esito VT, metodo CND e numero di rapporto. Così, anche anni dopo, si sa chi ha saldato un cordone, con quale procedura e come è stato controllato.</p>
<h2>Tracciabilità del materiale</h2>
<p>In EN 1090-2 EXC3 ed EXC4, nelle attrezzature a pressione e in molte specifiche cliente, ogni pezzo deve essere riconducibile al numero di colata del materiale da cui è stato tagliato. Si marca il codice pezzo al taglio e lo si collega al numero di certificato. L’elenco di tracciabilità è tra le sezioni più verificate.</p>
<h2>Quando si prepara?</h2>
<p>Se lo si lascia alla fine, è difficile recuperare i documenti mancanti e la consegna slitta. Il modo corretto è compilarlo durante la produzione: certificato all’arrivo del materiale, rapporto VT a fine saldatura, rapporto CND dopo la prova. A fine produzione restano solo revisione e approvazione.</p>
<h2>Cartaceo o digitale?</h2>
<p>Oggi la maggior parte dei clienti vuole un PDF ricercabile con segnalibri per sezione. Alcuni progetti chiedono anche una copia cartacea firmata. In digitale meglio usare documenti elettronici originali anziché scansioni e mantenere una dimensione inviabile via e-mail.</p>
<h2>Cosa deve chiedere l’acquirente</h2>
<ol>
<li>Elencare il contenuto del data book già nella richiesta d’offerta.</li>
<li>Specificare il formato (PDF, segnalibri, lingua).</li>
<li>Fissare la scadenza: con il pezzo o entro un numero di giorni?</li>
<li>Chiedere un indice in bozza per approvazione preventiva.</li>
<li>Inserire il periodo di conservazione nel contratto.</li>
</ol>
<div class="callout"><p><strong>In ArmaWeld:</strong> certificati materiale, WPS/WPQR, patentini, mappa saldature, rapporti CND e dimensionali vengono raccolti con l’ordine durante la produzione e condivisi nel portale clienti. Alla consegna prepariamo il data book come un unico PDF con le sezioni richieste dal contratto. <a href="../kaynakli-imalat.html">La nostra carpenteria saldata →</a></p></div>
`,
    faq: [
      ['Data book e MDR sono la stessa cosa?', 'In pratica sì. MDR, data book, dossier di costruzione e documentazione finale indicano lo stesso insieme di documenti; il nome cambia per settore.'],
      ['In che lingua si prepara?', 'In quella indicata nel contratto. In Europa si chiedono di solito inglese o tedesco. I moduli standard possono essere bilingui.'],
      ['Quando viene consegnato?', 'Se compilato durante la produzione, può essere consegnato con il pezzo. I contratti fissano spesso anche un termine dopo la spedizione.'],
      ['Ogni ordine richiede un data book?', 'No. Per pezzi di serie semplici possono bastare certificato di conformità e certificati materiale. Per progetti, EN 1090 o attrezzature a pressione il data book è lo standard.']
    ],
    cta_h3: 'Pezzi saldati consegnati con documentazione completa',
    cta_p: 'Inviateci disegno e requisiti documentali; definiamo il contenuto del data book nell’offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Wat is een databook (MDR)? Opleverdossier in de lasfabricage',
    meta: 'Wat is een databook of MDR (Manufacturing Data Record)? Inhoud van het opleverdossier voor gelaste delen: materiaalcertificaten, WPS/WPQR, lassercertificaten, lasplan, NDO- en maatrapporten, DoP en conformiteitsverklaring.',
    og: 'Databook (MDR): opleverdossier voor gelaste delen',
    tag: 'Kwaliteit · Documentatie',
    h1: 'Wat is een databook (MDR)? Inhoud van het opleverdossier voor gelaste delen',
    crumb: 'Databook',
    read: '7 min lezen',
    body: `
<p>Een gelast onderdeel leveren is meer dan alleen het onderdeel. Vooral in staalbouw, drukapparatuur, energie en export komt bij het onderdeel een <strong>databook</strong>, ook wel <strong>MDR (Manufacturing Data Record)</strong> of opleverdossier genoemd. Het bewijst dat volgens specificatie is gefabriceerd en is jaren later bij schade of audit het eerste document dat wordt geraadpleegd.</p>
<h2>Waarvoor dient een databook?</h2>
<ul>
<li>Traceerbaarheid van elke stap, van materiaal tot eindinspectie.</li>
<li>Snellere acceptatie, omdat de documenten bij levering compleet zijn.</li>
<li>Basis voor wettelijke documenten zoals CE-markering, DoP of conformiteitsverklaring.</li>
<li>Technisch bewijs bij garantie, schade en verzekering.</li>
</ul>
<h2>Typische inhoud</h2>
<table class="data-table"><thead><tr><th>Sectie</th><th>Inhoud</th></tr></thead><tbody>
<tr><td>1. Voorblad en inhoud</td><td>Project, order, onderdeelnummer, revisie, goedkeuring dossier</td></tr>
<tr><td>2. Conformiteitsdocumenten</td><td>Certificaat van overeenstemming (CoC), DoP en CE-markering voor EN 1090, conformiteitsverklaring voor PED</td></tr>
<tr><td>3. Tekeningen</td><td>Goedgekeurde werk- en revisietekeningen, revisielijst</td></tr>
<tr><td>4. ITP</td><td>Ondertekend inspectie- en testplan</td></tr>
<tr><td>5. Materiaal</td><td>3.1-certificaten EN 10204, traceerbaarheidslijst (charge ↔ onderdeel)</td></tr>
<tr><td>6. Lassen</td><td>WPS-lijst, WPQR’s, lasser- en operatorcertificaten, certificaten toevoegmateriaal</td></tr>
<tr><td>7. Lasplan</td><td>Nummer, WPS, lasser en inspectieresultaat per las</td></tr>
<tr><td>8. Inspectierapporten</td><td>VT, PT, MT, UT, RT; reparatie- en herkeuringsregistraties</td></tr>
<tr><td>9. Warmtebehandeling</td><td>PWHT-grafieken en rapport (indien van toepassing)</td></tr>
<tr><td>10. Maatcontrole</td><td>Eindmaatrapporten</td></tr>
<tr><td>11. Beproevingen</td><td>Druk-, lek- of belastingproef (indien van toepassing)</td></tr>
<tr><td>12. Oppervlaktebehandeling</td><td>Straal-, coating- of verzinkrapporten, laagdiktemetingen</td></tr>
<tr><td>13. Afwijkingen</td><td>NCR’s, concessies, afsluitregistraties</td></tr>
<tr><td>14. Personeel</td><td>NDO-certificaten, documenten van de lascoördinator</td></tr>
<tr><td>15. Kalibratie</td><td>Kalibratiecertificaten van gebruikte meet- en testmiddelen</td></tr>
<tr><td>16. Verzending</td><td>Paklijst, verzendcontrole</td></tr>
</tbody></table>
<p>Niet elk project vraagt alle secties. De inhoud moet in het contract of ITP zijn vastgelegd.</p>
<h2>Het lasplan als ruggengraat</h2>
<p>Het lasplan nummert elke las op de tekening en koppelt in een tabel: lasnummer, verbindingstype, WPS, lassersstempel, datum, VT-resultaat, NDO-methode en rapportnummer. Zo is jaren later nog te achterhalen wie een las heeft gemaakt, volgens welke procedure, en hoe die is geïnspecteerd.</p>
<h2>Materiaaltraceerbaarheid</h2>
<p>Bij EN 1090-2 EXC3 en EXC4, drukapparatuur en veel klantspecificaties moet elk onderdeel te herleiden zijn tot het chargenummer van het materiaal waaruit het is gesneden. Bij het snijden wordt het onderdeelnummer gemarkeerd en gekoppeld aan het certificaatnummer. De traceerbaarheidslijst is een van de meest gecontroleerde secties.</p>
<h2>Wanneer wordt het databook opgesteld?</h2>
<p>Wordt het tot het einde uitgesteld, dan zijn ontbrekende documenten moeilijk te vinden en loopt de levering vertraging op. Beter is het tijdens de productie te vullen: certificaat bij ontvangst van materiaal, VT-rapport na het lassen, NDO-rapport na de beproeving. Aan het einde rest alleen de eindcontrole en goedkeuring.</p>
<h2>Papier of digitaal?</h2>
<p>De meeste kopers willen nu een doorzoekbare PDF met bladwijzers per sectie. Sommige projecten vragen daarnaast een papieren exemplaar met natte handtekening. Gebruik digitaal bij voorkeur originele elektronische documenten in plaats van scans en houd het bestand klein genoeg om te mailen.</p>
<h2>Wat moet een inkoper vragen?</h2>
<ol>
<li>De inhoud van het databook al in de aanvraag opsommen.</li>
<li>Het formaat vastleggen (PDF, bladwijzers, taal).</li>
<li>De levertermijn noemen: met het onderdeel of binnen een aantal dagen?</li>
<li>Een conceptinhoudsopgave ter goedkeuring vragen.</li>
<li>De bewaartermijn in het contract opnemen.</li>
</ol>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> materiaalcertificaten, WPS/WPQR, lassercertificaten, lasplan, NDO- en maatrapporten worden tijdens de productie aan de order gekoppeld en in het klantenportaal gedeeld. Bij levering stellen we het databook op als één PDF met de secties die het contract vraagt. <a href="../kaynakli-imalat.html">Onze lasfabricage →</a></p></div>
`,
    faq: [
      ['Zijn databook en MDR hetzelfde?', 'In de praktijk wel. MDR, databook, fabricagedossier en opleverdossier verwijzen naar dezelfde set documenten; de naam verschilt per sector.'],
      ['In welke taal wordt het databook opgesteld?', 'In de taal uit het contract. Europese projecten vragen meestal Engels of Duits. Standaardformulieren kunnen tweetalig zijn.'],
      ['Wanneer wordt het geleverd?', 'Als het tijdens de productie wordt gevuld, kan het met het onderdeel mee. Contracten noemen vaak ook een termijn na verzending.'],
      ['Heeft elke order een databook nodig?', 'Nee. Bij eenvoudige seriedelen volstaan vaak een certificaat van overeenstemming en materiaalcertificaten. Bij projecten, EN 1090 of drukapparatuur is een databook standaard.']
    ],
    cta_h3: 'Gelaste delen met volledige documentatie',
    cta_p: 'Stuur tekening en documentatie-eisen; we leggen de inhoud van het databook vast in de offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Hva er en data book (MDR)? Sluttdokumentasjon i sveiseproduksjon',
    meta: 'Hva er en data book eller MDR (Manufacturing Data Record)? Innhold i sluttdokumentasjonen for sveiste deler: materialsertifikater, WPS/WPQR, sveisesertifikater, sveisekart, NDT- og målerapporter, DoP og samsvarserklæring.',
    og: 'Data book (MDR): sluttdokumentasjon for sveiste deler',
    tag: 'Kvalitet · Dokumentasjon',
    h1: 'Hva er en data book (MDR)? Innholdet i sluttdokumentasjonen for sveiste deler',
    crumb: 'Data book',
    read: '7 min lesing',
    body: `
<p>Å levere en sveist del handler ikke bare om selve delen. Særlig i stålkonstruksjoner, trykkutstyr, energi og eksportprosjekter følger det med en <strong>data book</strong>, også kalt <strong>MDR (Manufacturing Data Record)</strong> eller sluttdokumentasjon. Den beviser at delen er laget etter spesifikasjon, og er det første man ser i ved en skade eller revisjon flere år senere.</p>
<h2>Hva brukes en data book til?</h2>
<ul>
<li>Sporbarhet for hvert trinn, fra materiale til sluttkontroll.</li>
<li>Raskere mottak, fordi dokumentene er komplette ved levering.</li>
<li>Grunnlag for lovpålagte dokumenter som CE-merking, DoP eller samsvarserklæring.</li>
<li>Teknisk dokumentasjon ved garanti, skade og forsikring.</li>
</ul>
<h2>Typisk innhold</h2>
<table class="data-table"><thead><tr><th>Seksjon</th><th>Innhold</th></tr></thead><tbody>
<tr><td>1. Forside og innhold</td><td>Prosjekt, ordre, delnummer, revisjon, godkjenning</td></tr>
<tr><td>2. Samsvarsdokumenter</td><td>Samsvarssertifikat (CoC), DoP og CE-merke for EN 1090, samsvarserklæring for PED</td></tr>
<tr><td>3. Tegninger</td><td>Godkjente produksjons- og som-bygget-tegninger, revisjonsliste</td></tr>
<tr><td>4. ITP</td><td>Signert inspeksjons- og testplan</td></tr>
<tr><td>5. Materiale</td><td>3.1-sertifikater etter EN 10204, sporbarhetsliste (charge ↔ del)</td></tr>
<tr><td>6. Sveising</td><td>WPS-liste, WPQR, sveiser- og operatørsertifikater, sertifikater for tilsettmateriale</td></tr>
<tr><td>7. Sveisekart</td><td>Nummer, WPS, sveiser og kontrollresultat for hver sveis</td></tr>
<tr><td>8. Inspeksjonsrapporter</td><td>VT, PT, MT, UT, RT; reparasjoner og omprøving</td></tr>
<tr><td>9. Varmebehandling</td><td>PWHT-diagrammer og rapport (hvis aktuelt)</td></tr>
<tr><td>10. Målekontroll</td><td>Endelige målerapporter</td></tr>
<tr><td>11. Prøver</td><td>Trykk-, tetthets- eller lastprøve (hvis aktuelt)</td></tr>
<tr><td>12. Overflatebehandling</td><td>Blåse-, malings- eller galvaniseringsrapporter, tykkelsesmålinger</td></tr>
<tr><td>13. Avvik</td><td>NCR, dispensasjoner, lukking</td></tr>
<tr><td>14. Personell</td><td>NDT-sertifikater, dokumentasjon for sveisekoordinator</td></tr>
<tr><td>15. Kalibrering</td><td>Kalibreringssertifikater for måle- og prøveutstyr</td></tr>
<tr><td>16. Forsendelse</td><td>Pakkliste, kontroll før forsendelse</td></tr>
</tbody></table>
<p>Ikke alle prosjekter krever alle seksjoner. Innholdet bør defineres i kontrakten eller ITP-en.</p>
<h2>Sveisekartet er ryggraden</h2>
<p>Sveisekartet nummererer hver sveis på tegningen og knytter i en tabell sammen: sveisenummer, forbindelsestype, WPS, sveiserstempel, dato, VT-resultat, NDT-metode og rapportnummer. Dermed kan man også flere år senere finne ut hvem som sveiste en søm, etter hvilken prosedyre, og hvordan den ble kontrollert.</p>
<h2>Materialsporbarhet</h2>
<p>Ved EN 1090-2 EXC3 og EXC4, trykkutstyr og mange kundespesifikasjoner må hver del kunne spores til chargenummeret på materialet den ble kappet fra. Delnummeret merkes ved kapping og knyttes til sertifikatnummeret. Sporbarhetslisten er blant seksjonene det oftest stilles spørsmål ved.</p>
<h2>Når utarbeides den?</h2>
<p>Utsettes den til slutt, blir manglende dokumenter vanskelige å finne og leveransen forsinkes. Riktig metode er å fylle den underveis: sertifikat når materialet kommer, VT-rapport når sveisingen er ferdig, NDT-rapport etter prøving. Når produksjonen er ferdig, gjenstår bare sluttgjennomgang og godkjenning.</p>
<h2>Papir eller digitalt?</h2>
<p>De fleste kjøpere ønsker i dag en søkbar PDF med bokmerker per seksjon. Noen prosjekter krever i tillegg en papirkopi med våt signatur. Digitalt bør man helst bruke originale elektroniske dokumenter i stedet for skann, og holde filstørrelsen liten nok til e-post.</p>
<h2>Hva bør innkjøper be om?</h2>
<ol>
<li>List opp innholdet i data booken allerede i forespørselen.</li>
<li>Angi format (PDF, bokmerker, språk).</li>
<li>Angi leveringsfrist: med delen eller innen et antall dager?</li>
<li>Be om et utkast til innholdsfortegnelse for forhåndsgodkjenning.</li>
<li>Ta med oppbevaringstid i kontrakten.</li>
</ol>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> materialsertifikater, WPS/WPQR, sveisesertifikater, sveisekart, NDT- og målerapporter samles på ordren underveis i produksjonen og deles i kundeportalen. Ved levering setter vi sammen data booken som én PDF med seksjonene kontrakten krever. <a href="../kaynakli-imalat.html">Vår sveiseproduksjon →</a></p></div>
`,
    faq: [
      ['Er data book og MDR det samme?', 'I praksis ja. MDR, data book, produksjonsdossier og sluttdokumentasjon betegner det samme dokumentsettet; navnet varierer etter bransje.'],
      ['På hvilket språk utarbeides den?', 'På språket i kontrakten. Europeiske prosjekter ber som regel om engelsk eller tysk. Standardskjemaer kan være tospråklige.'],
      ['Når leveres den?', 'Fylles den underveis, kan den leveres sammen med delen. Kontrakter angir ofte også en frist etter forsendelse.'],
      ['Trenger alle ordrer en data book?', 'Nei. For enkle seriedeler kan samsvarssertifikat og materialsertifikater være nok. For prosjekter, EN 1090 eller trykkutstyr er data book standard.']
    ],
    cta_h3: 'Sveiste deler levert med komplett dokumentasjon',
    cta_p: 'Send tegning og dokumentasjonskrav, så fastsetter vi innholdet i data booken i tilbudet.',
    cta_btn: 'Be om tilbud →'
  }
};
