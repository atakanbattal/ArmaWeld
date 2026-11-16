export default {
  order: 11,
  slug: 'ppap-kaynakli-parca-onayi',
  key: 'p11_ppap',
  date: '2026-01-19',
  keywords: 'PPAP nedir, PPAP seviyeleri, kaynaklı parça PPAP, üretim parçası onay süreci, PSW, PPAP welding parts, PPAP Schweißteile, Produktionsteil-Freigabe',
  related: ['ilk-parca-onayi-kaynakli-imalat', 'otomotiv-yan-sanayi-kaynak', 'itp-muayene-ve-test-plani', 'kaynakli-imalat-tedarikci-denetimi'],
  tr: {
    title: 'PPAP Nedir? Kaynaklı Parçalarda Üretim Parçası Onay Süreci',
    meta: 'PPAP (Production Part Approval Process) nedir? 18 PPAP elemanı, 5 sunum seviyesi, PSW, PFMEA, kontrol planı ve kaynaklı parçalara özel noktalar: WPS, kaynak penetrasyon testi, kesit makro ve kapasite.',
    og: 'PPAP: Kaynaklı Parçalarda Üretim Parçası Onayı',
    tag: 'Kalite · Otomotiv',
    h1: 'PPAP Nedir? Kaynaklı Parçalar İçin Üretim Parçası Onay Süreci',
    crumb: 'PPAP',
    read: '8 dk okuma',
    body: `
<p><strong>PPAP (Production Part Approval Process)</strong>, otomotiv sanayisinde doğmuş ve bugün iş makinesi, tarım makinesi, treyler ve beyaz eşya gibi seri üretim yapan sektörlerde de kullanılan bir tedarikçi onay sürecidir. Amaç, tedarikçinin müşteri şartlarını anladığını ve seri üretimde bu şartları istikrarlı biçimde karşılayabildiğini kanıtlamaktır. İlk parça onayından (FAI) farkı, yalnızca ilk parçayı değil <em>üretim sürecini</em> onaylamasıdır.</p>
<h2>PPAP Ne Zaman İstenir?</h2>
<ul>
<li>Yeni parça veya yeni tedarikçi</li>
<li>Çizim veya şartname değişikliği</li>
<li>Malzeme, alt tedarikçi veya üretim yeri değişikliği</li>
<li>Yeni kalıp, fikstür veya ekipman</li>
<li>Uzun süre (genellikle 12 ay) üretilmemiş parçanın yeniden üretimi</li>
</ul>
<h2>18 PPAP Elemanı</h2>
<table class="data-table"><thead><tr><th>No</th><th>Eleman</th><th>Kaynaklı parçada karşılığı</th></tr></thead><tbody>
<tr><td>1</td><td>Tasarım kayıtları</td><td>Onaylı çizim ve kaynak sembolleri</td></tr>
<tr><td>2</td><td>Mühendislik değişiklik dokümanları</td><td>Revizyon onayları</td></tr>
<tr><td>3</td><td>Müşteri mühendislik onayı</td><td>Gerekiyorsa</td></tr>
<tr><td>4</td><td>Tasarım FMEA</td><td>Tasarım sorumluluğu tedarikçideyse</td></tr>
<tr><td>5</td><td>Proses akış diyagramı</td><td>Kesim, büküm, montaj, kaynak, kontrol, yüzey işlem adımları</td></tr>
<tr><td>6</td><td>Proses FMEA</td><td>Kaynak hataları, distorsiyon, yanlış montaj riskleri</td></tr>
<tr><td>7</td><td>Kontrol planı</td><td>Her adımın kontrol yöntemi, sıklığı ve reaksiyon planı</td></tr>
<tr><td>8</td><td>Ölçüm sistemi analizi (MSA)</td><td>Mastar ve fikstür için Gage R&amp;R</td></tr>
<tr><td>9</td><td>Boyutsal sonuçlar</td><td>Balonlu çizim ve tüm ölçülerin raporu</td></tr>
<tr><td>10</td><td>Malzeme ve performans test sonuçları</td><td>Malzeme sertifikaları, kaynak kesit makro, çekme veya yorulma testleri</td></tr>
<tr><td>11</td><td>Ön proses yeterlilik çalışması</td><td>Kritik ölçüler için Cpk/Ppk</td></tr>
<tr><td>12</td><td>Yetkin laboratuvar dokümantasyonu</td><td>Akredite laboratuvar sertifikaları</td></tr>
<tr><td>13</td><td>Görünüm onay raporu</td><td>Boyalı veya görünür yüzeyler için</td></tr>
<tr><td>14</td><td>Numune parçalar</td><td>Seri üretim koşullarında üretilmiş parçalar</td></tr>
<tr><td>15</td><td>Referans numune</td><td>Saklanan onaylı parça</td></tr>
<tr><td>16</td><td>Kontrol aparatları</td><td>Kontrol fikstürleri ve mastarlar</td></tr>
<tr><td>17</td><td>Müşteriye özel şartlar</td><td>Müşteri el kitabındaki ek şartlar</td></tr>
<tr><td>18</td><td>Parça sunum garantisi (PSW)</td><td>Tedarikçinin imzaladığı özet belge</td></tr>
</tbody></table>
<h2>Beş Sunum Seviyesi</h2>
<table class="data-table"><thead><tr><th>Seviye</th><th>Müşteriye gönderilen</th></tr></thead><tbody>
<tr><td>1</td><td>Yalnızca PSW</td></tr>
<tr><td>2</td><td>PSW, numune ve sınırlı destek dokümanları</td></tr>
<tr><td>3</td><td>PSW, numune ve tüm destek dokümanları (varsayılan seviye)</td></tr>
<tr><td>4</td><td>PSW ve müşterinin tanımladığı diğer şartlar</td></tr>
<tr><td>5</td><td>PSW, numune ve tüm dokümanlar; tedarikçi sahasında inceleme</td></tr>
</tbody></table>
<h2>Kaynaklı Parçalarda PPAP'in Özel Noktaları</h2>
<ul>
<li><strong>WPS ve kaynakçı yeterliliği:</strong> Seri üretimde kullanılacak WPS'ler ve kaynakçı sertifikaları PPAP dosyasına eklenir. Parametre değişikliği PPAP'i yeniden tetikleyebilir.</li>
<li><strong>Kesit makro (penetrasyon) testi:</strong> Kritik dikişlerden alınan kesitlerde nüfuziyet, a ölçüsü ve ergime görülür. Otomotivde bu test, üretim boyunca belirli aralıklarla tekrarlanır.</li>
<li><strong>Fikstür:</strong> Seri tekrarlanabilirliğin temeli kaynak fikstürüdür. Fikstür doğrulaması ve bakım planı kontrol planında yer almalıdır.</li>
<li><strong>Distorsiyon:</strong> Kritik ölçülerin kaynak sonrası değişimi Cpk çalışmasında görünür. Kaynak sırası sabitlenmeden yeterlilik elde edilemez.</li>
<li><strong>Yüzey işlem:</strong> Boya veya galvaniz alt tedarikçide yapılıyorsa, o tedarikçinin süreç onayı da zincire dahil edilir.</li>
</ul>
<h2>PFMEA'da Kaynak Riskleri</h2>
<p>İyi bir PFMEA, kaynakla ilgili tipik hata modlarını içerir: eksik dikiş, yanlış konumda dikiş, yetersiz a ölçüsü, ergime eksikliği, çatlak, gözenek, aşırı sıçrantı, distorsiyon ve yanlış malzeme. Her hata modu için önleme kontrolü (fikstür, poka-yoke, WPS) ve tespit kontrolü (VT, mastar, kesit testi) tanımlanır.</p>
<h2>PPAP ile FAI Arasındaki Fark</h2>
<p>FAI tek bir parçanın çizime uygunluğunu doğrular. PPAP ise sürecin, belirli bir üretim hızında, istikrarlı biçimde uygun parça üretebildiğini kanıtlar. Otomotiv dışı sektörlerde çoğu zaman FAI ile başlanır, seri yükseldikçe PPAP benzeri bir onay istenir.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Seri kaynaklı parçalarda proses akışı, kontrol planı, balonlu ölçü raporu ve kesit makro testleriyle ilk onay dosyasını hazırlarız. Kesim, büküm veya boya gibi iş ortaklarımızla koordine ettiğimiz adımlar da proses akışında gösterilir. Seviye ve içerik müşterinin el kitabına göre belirlenir. <a href="ilk-parca-onayi-kaynakli-imalat.html">İlk parça onayı yazımızı okuyun →</a></p></div>
`,
    faq: [
      ['PPAP sadece otomotivde mi kullanılır?', 'Hayır. Otomotivde doğmuştur ancak iş makinesi, tarım makinesi, treyler, beyaz eşya ve elektrik ekipmanı üreticileri de PPAP veya benzeri süreçler ister.'],
      ['PSW nedir?', 'Part Submission Warrant, tedarikçinin parçanın tüm şartları karşıladığını beyan ettiği ve imzaladığı özet belgedir. Müşteri onayı PSW üzerinden verilir.'],
      ['Kaynak parametresi değişirse PPAP yenilenir mi?', 'Müşteriye bildirim gerekir. Değişikliğin etkisine göre müşteri yeni bir PPAP sunumu isteyebilir. Bu yüzden WPS değişiklikleri kontrollü yapılmalıdır.'],
      ['PPAP için kaç numune üretilir?', 'Seri üretim koşullarında, genellikle en az bir saatlik veya 300 parçalık üretim önerilir. Kaynaklı büyük parçalarda bu sayı müşteriyle ayrıca kararlaştırılır.']
    ],
    cta_h3: 'Seri kaynaklı parçalarınız için onay dosyası hazırlayalım',
    cta_p: 'Çiziminizi, yıllık adetlerinizi ve müşteri el kitabınızı gönderin; onay sürecini teklifte birlikte planlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'What Is PPAP? Production Part Approval for Welded Parts',
    meta: 'What is PPAP (Production Part Approval Process)? The 18 elements, 5 submission levels, PSW, PFMEA, control plan, and points specific to welded parts: WPS, weld penetration cut-and-etch tests, fixtures and capability.',
    og: 'PPAP: Production Part Approval for Welded Parts',
    tag: 'Quality · Automotive',
    h1: 'What Is PPAP? The Production Part Approval Process for Welded Parts',
    crumb: 'PPAP',
    read: '8 min read',
    body: `
<p><strong>PPAP (Production Part Approval Process)</strong> originated in the automotive industry and is now also used in construction machinery, agricultural machinery, trailers and appliances. Its purpose is to prove that the supplier understands customer requirements and can meet them consistently in series production. Unlike first article inspection (FAI), it approves the <em>production process</em>, not just the first part.</p>
<h2>When Is PPAP Required?</h2>
<ul>
<li>New part or new supplier</li>
<li>Drawing or specification change</li>
<li>Change of material, sub-supplier or production site</li>
<li>New tooling, fixture or equipment</li>
<li>Restart of a part not produced for a long time (typically 12 months)</li>
</ul>
<h2>The 18 PPAP Elements</h2>
<table class="data-table"><thead><tr><th>No</th><th>Element</th><th>For a welded part</th></tr></thead><tbody>
<tr><td>1</td><td>Design records</td><td>Approved drawing with weld symbols</td></tr>
<tr><td>2</td><td>Engineering change documents</td><td>Revision approvals</td></tr>
<tr><td>3</td><td>Customer engineering approval</td><td>If required</td></tr>
<tr><td>4</td><td>Design FMEA</td><td>If the supplier is design-responsible</td></tr>
<tr><td>5</td><td>Process flow diagram</td><td>Cutting, bending, fit-up, welding, inspection, surface treatment</td></tr>
<tr><td>6</td><td>Process FMEA</td><td>Weld defects, distortion, wrong assembly risks</td></tr>
<tr><td>7</td><td>Control plan</td><td>Inspection method, frequency and reaction plan per step</td></tr>
<tr><td>8</td><td>Measurement system analysis (MSA)</td><td>Gage R&amp;R for gauges and check fixtures</td></tr>
<tr><td>9</td><td>Dimensional results</td><td>Ballooned drawing and full dimensional report</td></tr>
<tr><td>10</td><td>Material and performance test results</td><td>Material certificates, weld macro sections, tensile or fatigue tests</td></tr>
<tr><td>11</td><td>Initial process studies</td><td>Cpk/Ppk for critical dimensions</td></tr>
<tr><td>12</td><td>Qualified laboratory documentation</td><td>Accredited lab certificates</td></tr>
<tr><td>13</td><td>Appearance approval report</td><td>For painted or visible surfaces</td></tr>
<tr><td>14</td><td>Sample parts</td><td>Parts made under series conditions</td></tr>
<tr><td>15</td><td>Master sample</td><td>Retained approved part</td></tr>
<tr><td>16</td><td>Checking aids</td><td>Check fixtures and gauges</td></tr>
<tr><td>17</td><td>Customer-specific requirements</td><td>Additional requirements from the customer manual</td></tr>
<tr><td>18</td><td>Part submission warrant (PSW)</td><td>Summary document signed by the supplier</td></tr>
</tbody></table>
<h2>Five Submission Levels</h2>
<table class="data-table"><thead><tr><th>Level</th><th>Submitted to customer</th></tr></thead><tbody>
<tr><td>1</td><td>PSW only</td></tr>
<tr><td>2</td><td>PSW with samples and limited supporting data</td></tr>
<tr><td>3</td><td>PSW with samples and complete supporting data (default)</td></tr>
<tr><td>4</td><td>PSW and other requirements defined by the customer</td></tr>
<tr><td>5</td><td>PSW, samples and complete data reviewed at the supplier’s site</td></tr>
</tbody></table>
<h2>What Is Specific to Welded Parts</h2>
<ul>
<li><strong>WPS and welder qualification:</strong> the WPSs and welder certificates used in series production go into the PPAP file. A parameter change can trigger a new PPAP.</li>
<li><strong>Macro cut-and-etch test:</strong> sections through critical welds show penetration, throat and fusion. In automotive, this test is repeated at set intervals throughout production.</li>
<li><strong>Fixtures:</strong> series repeatability rests on the welding fixture. Fixture verification and maintenance belong in the control plan.</li>
<li><strong>Distortion:</strong> post-weld change of critical dimensions shows up in the Cpk study. Capability cannot be reached until the welding sequence is fixed.</li>
<li><strong>Surface treatment:</strong> if painting or galvanizing is done by a sub-supplier, that supplier's process approval is part of the chain.</li>
</ul>
<h2>Welding Risks in the PFMEA</h2>
<p>A good PFMEA covers typical welding failure modes: missing weld, weld in the wrong position, undersized throat, lack of fusion, cracks, porosity, excessive spatter, distortion and wrong material. Each needs a prevention control (fixture, poka-yoke, WPS) and a detection control (VT, gauge, macro test).</p>
<h2>PPAP vs FAI</h2>
<p>FAI verifies that a single part conforms to the drawing. PPAP proves that the process can produce conforming parts consistently at a given rate. Outside automotive, buyers often start with FAI and ask for a PPAP-like approval as volumes grow.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> for series welded parts we prepare the initial approval file with process flow, control plan, ballooned dimensional report and macro section tests. Steps we coordinate with partners, such as cutting, bending or painting, are shown in the process flow. Level and contents follow the customer's manual. <a href="ilk-parca-onayi-kaynakli-imalat.html">Read our first article approval guide →</a></p></div>
`,
    faq: [
      ['Is PPAP only used in automotive?', 'No. It started there, but construction and agricultural machinery, trailer, appliance and electrical equipment makers also ask for PPAP or similar processes.'],
      ['What is a PSW?', 'The Part Submission Warrant is the summary document in which the supplier declares and signs that the part meets all requirements. Customer approval is given on the PSW.'],
      ['Does a welding parameter change require a new PPAP?', 'The customer must be notified. Depending on the impact, the customer may request a new submission. WPS changes should therefore be controlled.'],
      ['How many samples are produced for PPAP?', 'Under series conditions, typically at least one hour or 300 pieces of production. For large welded parts the quantity is agreed with the customer.']
    ],
    cta_h3: 'Let us prepare the approval file for your series welded parts',
    cta_p: 'Send your drawing, annual volumes and customer manual and we will plan the approval process in our quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Was ist PPAP? Produktionsteil-Freigabe für Schweißteile',
    meta: 'Was ist PPAP (Production Part Approval Process)? Die 18 Elemente, 5 Vorlagestufen, PSW, PFMEA, Produktionslenkungsplan und Besonderheiten bei Schweißteilen: WPS, Makroschliff, Vorrichtungen und Prozessfähigkeit.',
    og: 'PPAP: Produktionsteil-Freigabe für Schweißteile',
    tag: 'Qualität · Automotive',
    h1: 'Was ist PPAP? Der Freigabeprozess für Produktionsteile bei Schweißbaugruppen',
    crumb: 'PPAP',
    read: '8 Min. Lesezeit',
    body: `
<p><strong>PPAP (Production Part Approval Process)</strong> stammt aus der Automobilindustrie und wird heute auch bei Bau- und Landmaschinen, Anhängern und Hausgeräten eingesetzt. Ziel ist der Nachweis, dass der Lieferant die Kundenanforderungen verstanden hat und in der Serie stabil erfüllen kann. Anders als die Erstmusterprüfung (FAI) gibt PPAP den <em>Fertigungsprozess</em> frei, nicht nur das erste Teil. Im deutschen Umfeld entspricht dem weitgehend die PPF-Vorlage nach VDA Band 2.</p>
<h2>Wann wird PPAP gefordert?</h2>
<ul>
<li>Neues Teil oder neuer Lieferant</li>
<li>Zeichnungs- oder Spezifikationsänderung</li>
<li>Wechsel von Werkstoff, Unterlieferant oder Fertigungsstandort</li>
<li>Neues Werkzeug, neue Vorrichtung oder Anlage</li>
<li>Wiederaufnahme nach längerer Pause (meist 12 Monate)</li>
</ul>
<h2>Die 18 PPAP-Elemente</h2>
<table class="data-table"><thead><tr><th>Nr.</th><th>Element</th><th>Beim Schweißteil</th></tr></thead><tbody>
<tr><td>1</td><td>Konstruktionsunterlagen</td><td>Freigegebene Zeichnung mit Schweißsymbolen</td></tr>
<tr><td>2</td><td>Änderungsdokumente</td><td>Revisionsfreigaben</td></tr>
<tr><td>3</td><td>Technische Kundenfreigabe</td><td>Falls gefordert</td></tr>
<tr><td>4</td><td>Konstruktions-FMEA</td><td>Bei Entwicklungsverantwortung des Lieferanten</td></tr>
<tr><td>5</td><td>Prozessablaufdiagramm</td><td>Zuschnitt, Kanten, Heften, Schweißen, Prüfen, Oberfläche</td></tr>
<tr><td>6</td><td>Prozess-FMEA</td><td>Schweißfehler, Verzug, Fehlmontage</td></tr>
<tr><td>7</td><td>Produktionslenkungsplan</td><td>Prüfmethode, Häufigkeit, Reaktionsplan je Schritt</td></tr>
<tr><td>8</td><td>Messsystemanalyse (MSA)</td><td>Gage R&amp;R für Lehren und Prüfvorrichtungen</td></tr>
<tr><td>9</td><td>Maßliche Ergebnisse</td><td>Zeichnung mit Ballons und vollständiges Maßprotokoll</td></tr>
<tr><td>10</td><td>Werkstoff- und Funktionsprüfungen</td><td>Zeugnisse, Makroschliffe, Zug- oder Schwingversuche</td></tr>
<tr><td>11</td><td>Vorläufige Prozessfähigkeit</td><td>Cpk/Ppk für kritische Maße</td></tr>
<tr><td>12</td><td>Nachweis qualifizierter Labore</td><td>Akkreditierungsurkunden</td></tr>
<tr><td>13</td><td>Freigabe des Erscheinungsbilds</td><td>Für lackierte oder sichtbare Flächen</td></tr>
<tr><td>14</td><td>Musterteile</td><td>Unter Serienbedingungen gefertigt</td></tr>
<tr><td>15</td><td>Referenzmuster</td><td>Aufbewahrtes freigegebenes Teil</td></tr>
<tr><td>16</td><td>Prüfmittel</td><td>Prüfvorrichtungen und Lehren</td></tr>
<tr><td>17</td><td>Kundenspezifische Anforderungen</td><td>Zusatzforderungen aus dem Lieferantenhandbuch</td></tr>
<tr><td>18</td><td>Teilevorlagebestätigung (PSW)</td><td>Vom Lieferanten unterzeichnetes Deckblatt</td></tr>
</tbody></table>
<h2>Fünf Vorlagestufen</h2>
<table class="data-table"><thead><tr><th>Stufe</th><th>An den Kunden</th></tr></thead><tbody>
<tr><td>1</td><td>Nur PSW</td></tr>
<tr><td>2</td><td>PSW mit Mustern und eingeschränkten Unterlagen</td></tr>
<tr><td>3</td><td>PSW mit Mustern und vollständigen Unterlagen (Standard)</td></tr>
<tr><td>4</td><td>PSW und vom Kunden definierte Unterlagen</td></tr>
<tr><td>5</td><td>PSW, Muster und vollständige Unterlagen, Prüfung beim Lieferanten vor Ort</td></tr>
</tbody></table>
<h2>Besonderheiten bei Schweißteilen</h2>
<ul>
<li><strong>WPS und Schweißerqualifikation:</strong> In der Serie verwendete WPS und Schweißerzertifikate gehören in die Vorlage. Parameteränderungen können eine neue Vorlage auslösen.</li>
<li><strong>Makroschliff:</strong> Schliffe durch kritische Nähte zeigen Einbrand, a-Maß und Bindung. Im Automobilbau wird diese Prüfung in festen Intervallen während der Serie wiederholt.</li>
<li><strong>Vorrichtung:</strong> Die Wiederholgenauigkeit in der Serie beruht auf der Schweißvorrichtung. Verifizierung und Wartung gehören in den Lenkungsplan.</li>
<li><strong>Verzug:</strong> Maßänderungen nach dem Schweißen zeigen sich in der Cpk-Studie. Ohne festgelegte Schweißfolge ist keine Fähigkeit zu erreichen.</li>
<li><strong>Oberflächenbehandlung:</strong> Wird lackiert oder verzinkt beim Unterlieferanten, gehört dessen Prozessfreigabe zur Kette.</li>
</ul>
<h2>Schweißrisiken in der PFMEA</h2>
<p>Eine gute PFMEA enthält typische Fehlerarten: fehlende Naht, Naht an falscher Stelle, zu kleines a-Maß, Bindefehler, Risse, Poren, starke Spritzer, Verzug und falscher Werkstoff. Für jede werden eine Vermeidungsmaßnahme (Vorrichtung, Poka-Yoke, WPS) und eine Entdeckungsmaßnahme (VT, Lehre, Makroschliff) festgelegt.</p>
<h2>PPAP und Erstmusterprüfung</h2>
<p>Die Erstmusterprüfung bestätigt, dass ein einzelnes Teil der Zeichnung entspricht. PPAP belegt, dass der Prozess bei einer bestimmten Rate dauerhaft gute Teile liefert. Außerhalb der Automobilbranche beginnt man oft mit der Erstmusterprüfung und fordert mit steigenden Stückzahlen eine PPAP-ähnliche Freigabe.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Für Serienschweißteile erstellen wir die Erstfreigabe mit Prozessablauf, Lenkungsplan, Maßprotokoll mit Ballonzeichnung und Makroschliffen. Mit Partnern koordinierte Schritte wie Zuschnitt, Kanten oder Lackieren sind im Prozessablauf dargestellt. Stufe und Umfang richten sich nach dem Kundenhandbuch. <a href="ilk-parca-onayi-kaynakli-imalat.html">Zur Erstmusterprüfung →</a></p></div>
`,
    faq: [
      ['Wird PPAP nur im Automobilbau verwendet?', 'Nein. Es stammt von dort, wird aber auch von Bau- und Landmaschinen-, Anhänger-, Hausgeräte- und Elektroherstellern gefordert.'],
      ['Was ist ein PSW?', 'Das Part Submission Warrant ist das zusammenfassende Dokument, in dem der Lieferant die Erfüllung aller Anforderungen bestätigt und unterzeichnet. Die Kundenfreigabe erfolgt darauf.'],
      ['Löst eine Änderung der Schweißparameter eine neue Vorlage aus?', 'Der Kunde muss informiert werden. Je nach Auswirkung kann er eine neue Vorlage verlangen. WPS-Änderungen sollten daher gelenkt erfolgen.'],
      ['Wie viele Musterteile werden gefertigt?', 'Unter Serienbedingungen meist mindestens eine Stunde oder 300 Teile. Bei großen Schweißbaugruppen wird die Menge mit dem Kunden vereinbart.']
    ],
    cta_h3: 'Wir erstellen die Freigabeunterlagen für Ihre Serienschweißteile',
    cta_p: 'Senden Sie Zeichnung, Jahresmengen und Lieferantenhandbuch. Den Freigabeprozess planen wir im Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: '¿Qué es el PPAP? Aprobación de piezas de producción soldadas',
    meta: 'Qué es el PPAP (Production Part Approval Process): los 18 elementos, 5 niveles de presentación, PSW, AMFE de proceso, plan de control y aspectos propios de las piezas soldadas: WPS, macrografía, utillajes y capacidad.',
    og: 'PPAP: aprobación de piezas de producción soldadas',
    tag: 'Calidad · Automoción',
    h1: '¿Qué es el PPAP? El proceso de aprobación de piezas de producción soldadas',
    crumb: 'PPAP',
    read: '8 min de lectura',
    body: `
<p>El <strong>PPAP (Production Part Approval Process)</strong> nació en la automoción y hoy se usa también en maquinaria de obra y agrícola, remolques y electrodomésticos. Su objetivo es demostrar que el proveedor entiende los requisitos del cliente y puede cumplirlos de forma estable en serie. A diferencia de la inspección de primera pieza (FAI), aprueba el <em>proceso de producción</em>, no solo la primera pieza.</p>
<h2>¿Cuándo se exige?</h2>
<ul>
<li>Pieza nueva o proveedor nuevo</li>
<li>Cambio de plano o especificación</li>
<li>Cambio de material, subproveedor o lugar de fabricación</li>
<li>Nuevo útil, utillaje o equipo</li>
<li>Reanudación tras mucho tiempo sin fabricar (normalmente 12 meses)</li>
</ul>
<h2>Los 18 elementos del PPAP</h2>
<table class="data-table"><thead><tr><th>N.º</th><th>Elemento</th><th>En una pieza soldada</th></tr></thead><tbody>
<tr><td>1</td><td>Registros de diseño</td><td>Plano aprobado con símbolos de soldadura</td></tr>
<tr><td>2</td><td>Documentos de cambio de ingeniería</td><td>Aprobaciones de revisión</td></tr>
<tr><td>3</td><td>Aprobación de ingeniería del cliente</td><td>Si se requiere</td></tr>
<tr><td>4</td><td>AMFE de diseño</td><td>Si el proveedor es responsable del diseño</td></tr>
<tr><td>5</td><td>Diagrama de flujo del proceso</td><td>Corte, plegado, armado, soldadura, inspección, tratamiento superficial</td></tr>
<tr><td>6</td><td>AMFE de proceso</td><td>Defectos de soldadura, distorsión, montaje erróneo</td></tr>
<tr><td>7</td><td>Plan de control</td><td>Método, frecuencia y plan de reacción por paso</td></tr>
<tr><td>8</td><td>Análisis del sistema de medición (MSA)</td><td>Gage R&amp;R de galgas y útiles de control</td></tr>
<tr><td>9</td><td>Resultados dimensionales</td><td>Plano globado e informe dimensional completo</td></tr>
<tr><td>10</td><td>Ensayos de material y prestaciones</td><td>Certificados, macrografías, ensayos de tracción o fatiga</td></tr>
<tr><td>11</td><td>Estudios iniciales de proceso</td><td>Cpk/Ppk de cotas críticas</td></tr>
<tr><td>12</td><td>Documentación de laboratorio cualificado</td><td>Certificados de acreditación</td></tr>
<tr><td>13</td><td>Informe de aprobación de aspecto</td><td>Superficies pintadas o visibles</td></tr>
<tr><td>14</td><td>Muestras</td><td>Fabricadas en condiciones de serie</td></tr>
<tr><td>15</td><td>Muestra patrón</td><td>Pieza aprobada conservada</td></tr>
<tr><td>16</td><td>Medios de control</td><td>Útiles de control y galgas</td></tr>
<tr><td>17</td><td>Requisitos específicos del cliente</td><td>Requisitos adicionales del manual del cliente</td></tr>
<tr><td>18</td><td>PSW (garantía de presentación de pieza)</td><td>Documento resumen firmado por el proveedor</td></tr>
</tbody></table>
<h2>Cinco niveles de presentación</h2>
<table class="data-table"><thead><tr><th>Nivel</th><th>Se envía al cliente</th></tr></thead><tbody>
<tr><td>1</td><td>Solo el PSW</td></tr>
<tr><td>2</td><td>PSW, muestras y documentación limitada</td></tr>
<tr><td>3</td><td>PSW, muestras y documentación completa (nivel por defecto)</td></tr>
<tr><td>4</td><td>PSW y otros requisitos definidos por el cliente</td></tr>
<tr><td>5</td><td>PSW, muestras y documentación completa revisadas en planta del proveedor</td></tr>
</tbody></table>
<h2>Lo específico de las piezas soldadas</h2>
<ul>
<li><strong>WPS y cualificación de soldadores:</strong> las WPS de serie y los certificados de soldador van al expediente. Un cambio de parámetros puede requerir un nuevo PPAP.</li>
<li><strong>Macrografía:</strong> los cortes en soldaduras críticas muestran penetración, garganta y fusión. En automoción se repite a intervalos fijos durante la serie.</li>
<li><strong>Utillaje:</strong> la repetibilidad en serie depende del utillaje de soldadura. Su verificación y mantenimiento van en el plan de control.</li>
<li><strong>Distorsión:</strong> la variación de cotas tras soldar aparece en el estudio Cpk. Sin secuencia de soldadura fija no se alcanza capacidad.</li>
<li><strong>Tratamiento superficial:</strong> si la pintura o el galvanizado los hace un subproveedor, su aprobación de proceso forma parte de la cadena.</li>
</ul>
<h2>Riesgos de soldadura en el AMFE</h2>
<p>Un buen AMFE de proceso incluye los modos de fallo típicos: cordón ausente, cordón mal situado, garganta insuficiente, falta de fusión, fisuras, poros, exceso de proyecciones, distorsión y material equivocado. Para cada uno se define un control de prevención (utillaje, poka-yoke, WPS) y uno de detección (VT, galga, macrografía).</p>
<h2>PPAP frente a FAI</h2>
<p>La FAI verifica que una pieza concreta cumple el plano. El PPAP demuestra que el proceso produce piezas conformes de forma estable a un ritmo dado. Fuera de la automoción se suele empezar por la FAI y pedir una aprobación tipo PPAP al crecer los volúmenes.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> para piezas soldadas de serie preparamos el expediente de aprobación inicial con flujo de proceso, plan de control, informe dimensional globado y macrografías. Los pasos que coordinamos con socios, como corte, plegado o pintura, aparecen en el flujo de proceso. Nivel y contenido siguen el manual del cliente. <a href="ilk-parca-onayi-kaynakli-imalat.html">Lea nuestra guía de primera pieza →</a></p></div>
`,
    faq: [
      ['¿El PPAP solo se usa en automoción?', 'No. Nació allí, pero también lo piden fabricantes de maquinaria de obra y agrícola, remolques, electrodomésticos y equipos eléctricos.'],
      ['¿Qué es el PSW?', 'El Part Submission Warrant es el documento resumen en el que el proveedor declara y firma que la pieza cumple todos los requisitos. La aprobación del cliente se da sobre el PSW.'],
      ['¿Un cambio de parámetros de soldadura exige nuevo PPAP?', 'Debe notificarse al cliente; según el impacto puede pedir una nueva presentación. Por eso los cambios de WPS deben controlarse.'],
      ['¿Cuántas muestras se fabrican?', 'En condiciones de serie, normalmente al menos una hora o 300 piezas. En conjuntos soldados grandes la cantidad se acuerda con el cliente.']
    ],
    cta_h3: 'Preparamos el expediente de aprobación de sus piezas soldadas de serie',
    cta_p: 'Envíe plano, volúmenes anuales y manual del cliente; planificamos la aprobación en la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Qu’est-ce que le PPAP ? Validation des pièces de production soudées',
    meta: 'Qu’est-ce que le PPAP (Production Part Approval Process) ? Les 18 éléments, 5 niveaux de soumission, PSW, AMDEC process, plan de surveillance et points propres aux pièces soudées : DMOS, macrographie, gabarits et capabilité.',
    og: 'PPAP : validation des pièces de production soudées',
    tag: 'Qualité · Automobile',
    h1: 'Qu’est-ce que le PPAP ? Le processus de validation des pièces soudées de série',
    crumb: 'PPAP',
    read: '8 min de lecture',
    body: `
<p>Le <strong>PPAP (Production Part Approval Process)</strong> est né dans l’automobile et s’applique aujourd’hui aussi aux engins de chantier et agricoles, remorques et électroménager. Il vise à prouver que le fournisseur a compris les exigences du client et peut les tenir durablement en série. Contrairement à l’inspection de premier article (FAI), il valide le <em>processus de production</em>, pas seulement la première pièce.</p>
<h2>Quand le PPAP est-il exigé ?</h2>
<ul>
<li>Nouvelle pièce ou nouveau fournisseur</li>
<li>Modification de plan ou de spécification</li>
<li>Changement de matière, de sous-traitant ou de site</li>
<li>Nouvel outillage, gabarit ou équipement</li>
<li>Reprise après un long arrêt (généralement 12 mois)</li>
</ul>
<h2>Les 18 éléments du PPAP</h2>
<table class="data-table"><thead><tr><th>N°</th><th>Élément</th><th>Pour une pièce soudée</th></tr></thead><tbody>
<tr><td>1</td><td>Dossier de conception</td><td>Plan validé avec symboles de soudage</td></tr>
<tr><td>2</td><td>Documents de modification</td><td>Validations des indices</td></tr>
<tr><td>3</td><td>Approbation technique client</td><td>Si requise</td></tr>
<tr><td>4</td><td>AMDEC produit</td><td>Si le fournisseur est responsable de la conception</td></tr>
<tr><td>5</td><td>Synoptique du processus</td><td>Découpe, pliage, accostage, soudage, contrôle, traitement de surface</td></tr>
<tr><td>6</td><td>AMDEC processus</td><td>Défauts de soudure, déformations, erreurs d’assemblage</td></tr>
<tr><td>7</td><td>Plan de surveillance</td><td>Méthode, fréquence et plan de réaction par étape</td></tr>
<tr><td>8</td><td>Analyse du système de mesure (MSA)</td><td>Gage R&amp;R des calibres et montages de contrôle</td></tr>
<tr><td>9</td><td>Résultats dimensionnels</td><td>Plan bullé et rapport dimensionnel complet</td></tr>
<tr><td>10</td><td>Essais matière et performance</td><td>Certificats, macrographies, essais de traction ou fatigue</td></tr>
<tr><td>11</td><td>Études de capabilité initiales</td><td>Cpk/Ppk des cotes critiques</td></tr>
<tr><td>12</td><td>Documentation laboratoire qualifié</td><td>Attestations d’accréditation</td></tr>
<tr><td>13</td><td>Rapport d’approbation d’aspect</td><td>Surfaces peintes ou visibles</td></tr>
<tr><td>14</td><td>Échantillons</td><td>Fabriqués en conditions de série</td></tr>
<tr><td>15</td><td>Pièce type</td><td>Pièce validée conservée</td></tr>
<tr><td>16</td><td>Moyens de contrôle</td><td>Montages de contrôle et calibres</td></tr>
<tr><td>17</td><td>Exigences spécifiques client</td><td>Exigences complémentaires du manuel fournisseur</td></tr>
<tr><td>18</td><td>PSW (garantie de soumission)</td><td>Document récapitulatif signé par le fournisseur</td></tr>
</tbody></table>
<h2>Cinq niveaux de soumission</h2>
<table class="data-table"><thead><tr><th>Niveau</th><th>Remis au client</th></tr></thead><tbody>
<tr><td>1</td><td>PSW seul</td></tr>
<tr><td>2</td><td>PSW, échantillons et données partielles</td></tr>
<tr><td>3</td><td>PSW, échantillons et données complètes (niveau par défaut)</td></tr>
<tr><td>4</td><td>PSW et autres exigences définies par le client</td></tr>
<tr><td>5</td><td>PSW, échantillons et données complètes examinés chez le fournisseur</td></tr>
</tbody></table>
<h2>Spécificités des pièces soudées</h2>
<ul>
<li><strong>DMOS et qualification des soudeurs :</strong> les DMOS de série et les certificats soudeurs entrent dans le dossier. Un changement de paramètres peut déclencher un nouveau PPAP.</li>
<li><strong>Macrographie :</strong> les coupes dans les soudures critiques montrent pénétration, gorge et fusion. En automobile, cet essai est répété à intervalles fixes en série.</li>
<li><strong>Gabarits :</strong> la répétabilité en série repose sur le gabarit de soudage. Sa vérification et sa maintenance figurent au plan de surveillance.</li>
<li><strong>Déformations :</strong> la variation des cotes après soudage apparaît dans l’étude Cpk. Sans séquence de soudage figée, pas de capabilité.</li>
<li><strong>Traitement de surface :</strong> si la peinture ou la galvanisation sont sous-traitées, la validation de ce sous-traitant fait partie de la chaîne.</li>
</ul>
<h2>Risques de soudage dans l’AMDEC</h2>
<p>Une bonne AMDEC processus couvre les modes de défaillance courants : soudure manquante, mal positionnée, gorge insuffisante, manque de fusion, fissures, soufflures, projections excessives, déformations et mauvaise matière. Chacun reçoit une maîtrise préventive (gabarit, détrompeur, DMOS) et une maîtrise de détection (VT, calibre, macrographie).</p>
<h2>PPAP et FAI</h2>
<p>La FAI vérifie qu’une pièce donnée est conforme au plan. Le PPAP prouve que le processus produit des pièces conformes de façon stable à une cadence donnée. Hors automobile, on commence souvent par la FAI et l’on exige une validation de type PPAP quand les volumes augmentent.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> pour les pièces soudées de série, nous préparons le dossier de validation initiale avec synoptique, plan de surveillance, rapport dimensionnel bullé et macrographies. Les étapes coordonnées avec nos partenaires, comme la découpe, le pliage ou la peinture, figurent au synoptique. Niveau et contenu suivent le manuel du client. <a href="ilk-parca-onayi-kaynakli-imalat.html">Lire notre guide premier article →</a></p></div>
`,
    faq: [
      ['Le PPAP ne concerne-t-il que l’automobile ?', 'Non. Il y est né, mais les constructeurs d’engins, de machines agricoles, de remorques, d’électroménager et de matériel électrique le demandent aussi.'],
      ['Qu’est-ce que le PSW ?', 'Le Part Submission Warrant est le document récapitulatif où le fournisseur déclare et signe que la pièce satisfait toutes les exigences. La validation client se fait sur le PSW.'],
      ['Un changement de paramètres de soudage impose-t-il un nouveau PPAP ?', 'Le client doit être informé ; selon l’impact, il peut exiger une nouvelle soumission. Les modifications de DMOS doivent donc être maîtrisées.'],
      ['Combien d’échantillons faut-il ?', 'En conditions de série, généralement au moins une heure ou 300 pièces. Pour de grands ensembles soudés, la quantité est convenue avec le client.']
    ],
    cta_h3: 'Nous préparons le dossier de validation de vos pièces soudées de série',
    cta_p: 'Envoyez plan, volumes annuels et manuel fournisseur ; nous planifions la validation dans l’offre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Cos’è il PPAP? Approvazione dei pezzi di produzione saldati',
    meta: 'Cos’è il PPAP (Production Part Approval Process)? I 18 elementi, 5 livelli di sottomissione, PSW, PFMEA, piano di controllo e aspetti specifici dei pezzi saldati: WPS, macrografie, maschere e capacità di processo.',
    og: 'PPAP: approvazione dei pezzi di produzione saldati',
    tag: 'Qualità · Automotive',
    h1: 'Cos’è il PPAP? Il processo di approvazione dei pezzi saldati di serie',
    crumb: 'PPAP',
    read: '8 min di lettura',
    body: `
<p>Il <strong>PPAP (Production Part Approval Process)</strong> è nato nell’automotive ed è oggi usato anche per macchine movimento terra e agricole, rimorchi ed elettrodomestici. Lo scopo è dimostrare che il fornitore ha compreso i requisiti del cliente e può soddisfarli in modo stabile in serie. A differenza dell’ispezione del primo articolo (FAI), approva il <em>processo produttivo</em>, non solo il primo pezzo.</p>
<h2>Quando è richiesto?</h2>
<ul>
<li>Nuovo pezzo o nuovo fornitore</li>
<li>Modifica di disegno o specifica</li>
<li>Cambio di materiale, subfornitore o sito produttivo</li>
<li>Nuovo stampo, maschera o attrezzatura</li>
<li>Ripresa dopo un lungo fermo (di solito 12 mesi)</li>
</ul>
<h2>I 18 elementi del PPAP</h2>
<table class="data-table"><thead><tr><th>N.</th><th>Elemento</th><th>Per un pezzo saldato</th></tr></thead><tbody>
<tr><td>1</td><td>Documentazione di progetto</td><td>Disegno approvato con simboli di saldatura</td></tr>
<tr><td>2</td><td>Documenti di modifica</td><td>Approvazioni di revisione</td></tr>
<tr><td>3</td><td>Approvazione tecnica del cliente</td><td>Se richiesta</td></tr>
<tr><td>4</td><td>FMEA di progetto</td><td>Se il fornitore ha la responsabilità di progetto</td></tr>
<tr><td>5</td><td>Diagramma di flusso del processo</td><td>Taglio, piegatura, assemblaggio, saldatura, controllo, trattamento superficiale</td></tr>
<tr><td>6</td><td>FMEA di processo</td><td>Difetti di saldatura, deformazioni, errori di montaggio</td></tr>
<tr><td>7</td><td>Piano di controllo</td><td>Metodo, frequenza e piano di reazione per fase</td></tr>
<tr><td>8</td><td>Analisi del sistema di misura (MSA)</td><td>Gage R&amp;R di calibri e maschere di controllo</td></tr>
<tr><td>9</td><td>Risultati dimensionali</td><td>Disegno con palloncini e rapporto dimensionale completo</td></tr>
<tr><td>10</td><td>Prove su materiale e prestazioni</td><td>Certificati, macrografie, prove di trazione o fatica</td></tr>
<tr><td>11</td><td>Studi iniziali di processo</td><td>Cpk/Ppk per quote critiche</td></tr>
<tr><td>12</td><td>Documentazione del laboratorio qualificato</td><td>Certificati di accreditamento</td></tr>
<tr><td>13</td><td>Rapporto di approvazione estetica</td><td>Superfici verniciate o a vista</td></tr>
<tr><td>14</td><td>Campioni</td><td>Prodotti in condizioni di serie</td></tr>
<tr><td>15</td><td>Campione master</td><td>Pezzo approvato conservato</td></tr>
<tr><td>16</td><td>Mezzi di controllo</td><td>Maschere di controllo e calibri</td></tr>
<tr><td>17</td><td>Requisiti specifici del cliente</td><td>Requisiti aggiuntivi del manuale fornitori</td></tr>
<tr><td>18</td><td>PSW (garanzia di presentazione)</td><td>Documento riepilogativo firmato dal fornitore</td></tr>
</tbody></table>
<h2>Cinque livelli di sottomissione</h2>
<table class="data-table"><thead><tr><th>Livello</th><th>Inviato al cliente</th></tr></thead><tbody>
<tr><td>1</td><td>Solo PSW</td></tr>
<tr><td>2</td><td>PSW, campioni e documentazione limitata</td></tr>
<tr><td>3</td><td>PSW, campioni e documentazione completa (livello predefinito)</td></tr>
<tr><td>4</td><td>PSW e altri requisiti definiti dal cliente</td></tr>
<tr><td>5</td><td>PSW, campioni e documentazione completa verificati presso il fornitore</td></tr>
</tbody></table>
<h2>Aspetti specifici dei pezzi saldati</h2>
<ul>
<li><strong>WPS e qualifica dei saldatori:</strong> le WPS di serie e i patentini entrano nel fascicolo. Una modifica dei parametri può richiedere un nuovo PPAP.</li>
<li><strong>Macrografia:</strong> le sezioni sulle saldature critiche mostrano penetrazione, gola e fusione. Nell’automotive la prova si ripete a intervalli fissi durante la serie.</li>
<li><strong>Maschere:</strong> la ripetibilità in serie si basa sulla maschera di saldatura. Verifica e manutenzione vanno nel piano di controllo.</li>
<li><strong>Deformazioni:</strong> la variazione delle quote dopo la saldatura emerge nello studio Cpk. Senza sequenza di saldatura fissata non si ottiene capacità.</li>
<li><strong>Trattamento superficiale:</strong> se verniciatura o zincatura sono esterne, l’approvazione del processo del subfornitore fa parte della catena.</li>
</ul>
<h2>Rischi di saldatura nella PFMEA</h2>
<p>Una buona PFMEA comprende i modi di guasto tipici: cordone mancante, cordone in posizione errata, gola insufficiente, mancanza di fusione, cricche, porosità, spruzzi eccessivi, deformazioni e materiale errato. Per ognuno si definiscono un controllo preventivo (maschera, poka-yoke, WPS) e uno di rilevazione (VT, calibro, macrografia).</p>
<h2>PPAP e FAI</h2>
<p>La FAI verifica che un singolo pezzo sia conforme al disegno. Il PPAP dimostra che il processo produce pezzi conformi in modo stabile a una data cadenza. Fuori dall’automotive si parte spesso dalla FAI e si chiede un’approvazione di tipo PPAP quando i volumi crescono.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> per i pezzi saldati di serie prepariamo il fascicolo di prima approvazione con diagramma di flusso, piano di controllo, rapporto dimensionale con palloncini e macrografie. Le fasi coordinate con i partner, come taglio, piegatura o verniciatura, compaiono nel diagramma di flusso. Livello e contenuto seguono il manuale del cliente. <a href="ilk-parca-onayi-kaynakli-imalat.html">Leggi la guida al primo articolo →</a></p></div>
`,
    faq: [
      ['Il PPAP si usa solo nell’automotive?', 'No. È nato lì, ma lo richiedono anche costruttori di macchine movimento terra e agricole, rimorchi, elettrodomestici e apparecchiature elettriche.'],
      ['Cos’è il PSW?', 'Il Part Submission Warrant è il documento riepilogativo in cui il fornitore dichiara e firma che il pezzo soddisfa tutti i requisiti. L’approvazione del cliente avviene sul PSW.'],
      ['Una modifica dei parametri di saldatura richiede un nuovo PPAP?', 'Il cliente va informato; secondo l’impatto può chiedere una nuova sottomissione. Le modifiche alle WPS vanno quindi gestite in modo controllato.'],
      ['Quanti campioni si producono?', 'In condizioni di serie, di solito almeno un’ora o 300 pezzi. Per grandi assiemi saldati la quantità si concorda con il cliente.']
    ],
    cta_h3: 'Prepariamo il fascicolo di approvazione per i vostri pezzi saldati di serie',
    cta_p: 'Inviateci disegno, volumi annui e manuale fornitori; pianifichiamo l’approvazione nell’offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Wat is PPAP? Goedkeuring van productieonderdelen voor gelaste delen',
    meta: 'Wat is PPAP (Production Part Approval Process)? De 18 elementen, 5 indieningsniveaus, PSW, PFMEA, beheersplan en wat specifiek is voor gelaste delen: WPS, macro-etsproeven, mallen en procescapabiliteit.',
    og: 'PPAP: goedkeuring van gelaste productieonderdelen',
    tag: 'Kwaliteit · Automotive',
    h1: 'Wat is PPAP? Het goedkeuringsproces voor gelaste productieonderdelen',
    crumb: 'PPAP',
    read: '8 min lezen',
    body: `
<p><strong>PPAP (Production Part Approval Process)</strong> komt uit de auto-industrie en wordt nu ook gebruikt bij bouw- en landbouwmachines, aanhangwagens en huishoudapparatuur. Het doel is aan te tonen dat de leverancier de klanteisen begrijpt en ze in serieproductie stabiel kan halen. Anders dan eerste-artikelinspectie (FAI) keurt PPAP het <em>productieproces</em> goed, niet alleen het eerste onderdeel.</p>
<h2>Wanneer is PPAP vereist?</h2>
<ul>
<li>Nieuw onderdeel of nieuwe leverancier</li>
<li>Wijziging van tekening of specificatie</li>
<li>Wijziging van materiaal, onderleverancier of productielocatie</li>
<li>Nieuw gereedschap, nieuwe mal of nieuwe installatie</li>
<li>Herstart na lange tijd zonder productie (meestal 12 maanden)</li>
</ul>
<h2>De 18 PPAP-elementen</h2>
<table class="data-table"><thead><tr><th>Nr.</th><th>Element</th><th>Bij een gelast onderdeel</th></tr></thead><tbody>
<tr><td>1</td><td>Ontwerpdocumentatie</td><td>Goedgekeurde tekening met lassymbolen</td></tr>
<tr><td>2</td><td>Wijzigingsdocumenten</td><td>Revisiegoedkeuringen</td></tr>
<tr><td>3</td><td>Technische goedkeuring klant</td><td>Indien vereist</td></tr>
<tr><td>4</td><td>Ontwerp-FMEA</td><td>Als de leverancier ontwerpverantwoordelijk is</td></tr>
<tr><td>5</td><td>Processtroomdiagram</td><td>Snijden, zetten, samenbouw, lassen, inspectie, oppervlaktebehandeling</td></tr>
<tr><td>6</td><td>Proces-FMEA</td><td>Lasfouten, vervorming, verkeerde montage</td></tr>
<tr><td>7</td><td>Beheersplan</td><td>Controlemethode, frequentie en reactieplan per stap</td></tr>
<tr><td>8</td><td>Meetsysteemanalyse (MSA)</td><td>Gage R&amp;R voor meetmiddelen en controlemallen</td></tr>
<tr><td>9</td><td>Maatresultaten</td><td>Tekening met ballonnen en volledig maatrapport</td></tr>
<tr><td>10</td><td>Materiaal- en functieproeven</td><td>Certificaten, macro-etsproeven, trek- of vermoeiingsproeven</td></tr>
<tr><td>11</td><td>Initiële processtudies</td><td>Cpk/Ppk voor kritische maten</td></tr>
<tr><td>12</td><td>Documentatie gekwalificeerd laboratorium</td><td>Accreditatiecertificaten</td></tr>
<tr><td>13</td><td>Goedkeuring uiterlijk</td><td>Voor gelakte of zichtbare oppervlakken</td></tr>
<tr><td>14</td><td>Monsteronderdelen</td><td>Gemaakt onder serieomstandigheden</td></tr>
<tr><td>15</td><td>Referentiemonster</td><td>Bewaard goedgekeurd onderdeel</td></tr>
<tr><td>16</td><td>Controlemiddelen</td><td>Controlemallen en meetmiddelen</td></tr>
<tr><td>17</td><td>Klantspecifieke eisen</td><td>Aanvullende eisen uit het leveranciershandboek</td></tr>
<tr><td>18</td><td>PSW (Part Submission Warrant)</td><td>Samenvattend document ondertekend door de leverancier</td></tr>
</tbody></table>
<h2>Vijf indieningsniveaus</h2>
<table class="data-table"><thead><tr><th>Niveau</th><th>Naar de klant</th></tr></thead><tbody>
<tr><td>1</td><td>Alleen PSW</td></tr>
<tr><td>2</td><td>PSW met monsters en beperkte documentatie</td></tr>
<tr><td>3</td><td>PSW met monsters en volledige documentatie (standaard)</td></tr>
<tr><td>4</td><td>PSW en andere eisen van de klant</td></tr>
<tr><td>5</td><td>PSW, monsters en volledige documentatie, beoordeeld bij de leverancier</td></tr>
</tbody></table>
<h2>Specifiek voor gelaste delen</h2>
<ul>
<li><strong>WPS en lasserkwalificatie:</strong> de WPS’en en lassercertificaten voor de serie gaan in het PPAP-dossier. Een parameterwijziging kan een nieuwe PPAP vragen.</li>
<li><strong>Macro-etsproef:</strong> doorsneden van kritische lassen tonen inbranding, a-maat en binding. In de automotive wordt deze proef met vaste intervallen herhaald.</li>
<li><strong>Mallen:</strong> herhaalbaarheid in serie berust op de lasmal. Verificatie en onderhoud horen in het beheersplan.</li>
<li><strong>Vervorming:</strong> maatverandering na het lassen blijkt uit de Cpk-studie. Zonder vaste lasvolgorde geen capabiliteit.</li>
<li><strong>Oppervlaktebehandeling:</strong> als lakken of verzinken bij een onderleverancier gebeurt, hoort diens procesgoedkeuring bij de keten.</li>
</ul>
<h2>Lasrisico’s in de PFMEA</h2>
<p>Een goede PFMEA bevat de typische faalwijzen: ontbrekende las, las op de verkeerde plek, te kleine a-maat, bindingsfout, scheuren, porositeit, veel spatten, vervorming en verkeerd materiaal. Voor elk ervan wordt een preventieve beheersing (mal, poka-yoke, WPS) en een detectiebeheersing (VT, meetmiddel, macro-etsproef) bepaald.</p>
<h2>PPAP en FAI</h2>
<p>FAI bevestigt dat één onderdeel aan de tekening voldoet. PPAP toont aan dat het proces bij een bepaald tempo stabiel goede delen maakt. Buiten de automotive begint men vaak met FAI en vraagt men bij hogere volumes een PPAP-achtige goedkeuring.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> voor gelaste seriedelen stellen we het eerste goedkeuringsdossier op met processtroom, beheersplan, maatrapport met ballontekening en macro-etsproeven. Stappen die we met partners coördineren, zoals snijden, zetten of lakken, staan in de processtroom. Niveau en inhoud volgen het klanthandboek. <a href="ilk-parca-onayi-kaynakli-imalat.html">Lees onze gids over eerste-artikelgoedkeuring →</a></p></div>
`,
    faq: [
      ['Wordt PPAP alleen in de automotive gebruikt?', 'Nee. Het komt daarvandaan, maar ook fabrikanten van bouw- en landbouwmachines, aanhangers, huishoudapparatuur en elektrische apparatuur vragen PPAP of iets vergelijkbaars.'],
      ['Wat is een PSW?', 'De Part Submission Warrant is het samenvattende document waarin de leverancier verklaart en tekent dat het onderdeel aan alle eisen voldoet. De klant keurt goed op basis van de PSW.'],
      ['Vraagt een wijziging van lasparameters een nieuwe PPAP?', 'De klant moet worden geïnformeerd; afhankelijk van de impact kan hij een nieuwe indiening vragen. WPS-wijzigingen moeten dus beheerst verlopen.'],
      ['Hoeveel monsters worden gemaakt?', 'Onder serieomstandigheden meestal minstens één uur of 300 stuks. Bij grote lasconstructies wordt het aantal met de klant afgesproken.']
    ],
    cta_h3: 'Wij stellen het goedkeuringsdossier op voor uw gelaste seriedelen',
    cta_p: 'Stuur tekening, jaarvolumes en leveranciershandboek; we plannen de goedkeuring in de offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Hva er PPAP? Godkjenning av produksjonsdeler for sveiste deler',
    meta: 'Hva er PPAP (Production Part Approval Process)? De 18 elementene, 5 innsendingsnivåer, PSW, PFMEA, kontrollplan og det som er spesielt for sveiste deler: WPS, makroslip, fiksturer og prosesskapabilitet.',
    og: 'PPAP: godkjenning av sveiste produksjonsdeler',
    tag: 'Kvalitet · Bil',
    h1: 'Hva er PPAP? Godkjenningsprosessen for sveiste produksjonsdeler',
    crumb: 'PPAP',
    read: '8 min lesing',
    body: `
<p><strong>PPAP (Production Part Approval Process)</strong> stammer fra bilindustrien og brukes i dag også for anleggs- og landbruksmaskiner, tilhengere og hvitevarer. Målet er å dokumentere at leverandøren forstår kundens krav og kan oppfylle dem stabilt i serieproduksjon. I motsetning til førsteartikkelinspeksjon (FAI) godkjenner PPAP <em>produksjonsprosessen</em>, ikke bare den første delen.</p>
<h2>Når kreves PPAP?</h2>
<ul>
<li>Ny del eller ny leverandør</li>
<li>Endring av tegning eller spesifikasjon</li>
<li>Endring av materiale, underleverandør eller produksjonssted</li>
<li>Nytt verktøy, ny fikstur eller nytt utstyr</li>
<li>Gjenopptatt produksjon etter lang pause (vanligvis 12 måneder)</li>
</ul>
<h2>De 18 PPAP-elementene</h2>
<table class="data-table"><thead><tr><th>Nr.</th><th>Element</th><th>For en sveist del</th></tr></thead><tbody>
<tr><td>1</td><td>Konstruksjonsunderlag</td><td>Godkjent tegning med sveisesymboler</td></tr>
<tr><td>2</td><td>Endringsdokumenter</td><td>Revisjonsgodkjenninger</td></tr>
<tr><td>3</td><td>Teknisk kundegodkjenning</td><td>Ved behov</td></tr>
<tr><td>4</td><td>Design-FMEA</td><td>Hvis leverandøren har konstruksjonsansvar</td></tr>
<tr><td>5</td><td>Prosessflytdiagram</td><td>Kapping, bukking, tilpasning, sveising, kontroll, overflatebehandling</td></tr>
<tr><td>6</td><td>Prosess-FMEA</td><td>Sveisefeil, deformasjon, feilmontering</td></tr>
<tr><td>7</td><td>Kontrollplan</td><td>Metode, frekvens og reaksjonsplan per trinn</td></tr>
<tr><td>8</td><td>Målesystemanalyse (MSA)</td><td>Gage R&amp;R for målere og kontrollfiksturer</td></tr>
<tr><td>9</td><td>Måleresultater</td><td>Ballongtegning og komplett målerapport</td></tr>
<tr><td>10</td><td>Material- og funksjonsprøver</td><td>Sertifikater, makroslip, strekk- eller utmattingsprøver</td></tr>
<tr><td>11</td><td>Innledende prosesstudier</td><td>Cpk/Ppk for kritiske mål</td></tr>
<tr><td>12</td><td>Dokumentasjon for kvalifisert laboratorium</td><td>Akkrediteringsbevis</td></tr>
<tr><td>13</td><td>Godkjenning av utseende</td><td>For malte eller synlige flater</td></tr>
<tr><td>14</td><td>Prøvedeler</td><td>Laget under serieforhold</td></tr>
<tr><td>15</td><td>Referanseprøve</td><td>Oppbevart godkjent del</td></tr>
<tr><td>16</td><td>Kontrollhjelpemidler</td><td>Kontrollfiksturer og målere</td></tr>
<tr><td>17</td><td>Kundespesifikke krav</td><td>Tilleggskrav fra leverandørhåndboken</td></tr>
<tr><td>18</td><td>PSW (Part Submission Warrant)</td><td>Sammendrag signert av leverandøren</td></tr>
</tbody></table>
<h2>Fem innsendingsnivåer</h2>
<table class="data-table"><thead><tr><th>Nivå</th><th>Sendes til kunden</th></tr></thead><tbody>
<tr><td>1</td><td>Kun PSW</td></tr>
<tr><td>2</td><td>PSW med prøver og begrenset dokumentasjon</td></tr>
<tr><td>3</td><td>PSW med prøver og komplett dokumentasjon (standard)</td></tr>
<tr><td>4</td><td>PSW og andre krav definert av kunden</td></tr>
<tr><td>5</td><td>PSW, prøver og komplett dokumentasjon gjennomgått hos leverandøren</td></tr>
</tbody></table>
<h2>Det som er spesielt for sveiste deler</h2>
<ul>
<li><strong>WPS og sveiserkvalifikasjon:</strong> WPS-ene og sveisesertifikatene som brukes i serie, legges i PPAP-filen. En parameterendring kan utløse ny PPAP.</li>
<li><strong>Makroslip:</strong> snitt gjennom kritiske sveiser viser innbrenning, a-mål og binding. I bilindustrien gjentas prøven med faste intervaller i serien.</li>
<li><strong>Fiksturer:</strong> repeterbarhet i serie bygger på sveisefiksturen. Verifisering og vedlikehold hører hjemme i kontrollplanen.</li>
<li><strong>Deformasjon:</strong> målendring etter sveising viser seg i Cpk-studien. Uten fast sveiserekkefølge oppnås ikke kapabilitet.</li>
<li><strong>Overflatebehandling:</strong> utføres maling eller galvanisering hos en underleverandør, inngår dens prosessgodkjenning i kjeden.</li>
</ul>
<h2>Sveiserisiko i PFMEA</h2>
<p>En god PFMEA dekker typiske feilmoder: manglende sveis, sveis på feil sted, for lite a-mål, bindingsfeil, sprekker, porer, mye sprut, deformasjon og feil materiale. Hver feilmode får et forebyggende tiltak (fikstur, poka-yoke, WPS) og et oppdagende tiltak (VT, måler, makroslip).</p>
<h2>PPAP og FAI</h2>
<p>FAI bekrefter at én enkelt del samsvarer med tegningen. PPAP dokumenterer at prosessen lager samsvarende deler stabilt ved en gitt takt. Utenfor bilindustrien starter man ofte med FAI og krever en PPAP-lignende godkjenning når volumene øker.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> for sveiste seriedeler utarbeider vi første godkjenningsfil med prosessflyt, kontrollplan, målerapport med ballongtegning og makroslip. Trinn vi koordinerer med partnere, som kapping, bukking eller maling, vises i prosessflyten. Nivå og innhold følger kundens håndbok. <a href="ilk-parca-onayi-kaynakli-imalat.html">Les vår guide om førsteartikkelgodkjenning →</a></p></div>
`,
    faq: [
      ['Brukes PPAP bare i bilindustrien?', 'Nei. Den startet der, men også produsenter av anleggs- og landbruksmaskiner, tilhengere, hvitevarer og elektrisk utstyr krever PPAP eller lignende.'],
      ['Hva er en PSW?', 'Part Submission Warrant er sammendraget der leverandøren erklærer og signerer at delen oppfyller alle krav. Kundens godkjenning gis på PSW-en.'],
      ['Krever endrede sveiseparametere ny PPAP?', 'Kunden må varsles; avhengig av konsekvensen kan kunden kreve ny innsending. WPS-endringer bør derfor styres.'],
      ['Hvor mange prøvedeler lages?', 'Under serieforhold vanligvis minst én times produksjon eller 300 deler. For store sveisekonstruksjoner avtales antallet med kunden.']
    ],
    cta_h3: 'Vi utarbeider godkjenningsfilen for dine sveiste seriedeler',
    cta_p: 'Send tegning, årsvolumer og leverandørhåndbok, så planlegger vi godkjenningen i tilbudet.',
    cta_btn: 'Be om tilbud →'
  }
};
