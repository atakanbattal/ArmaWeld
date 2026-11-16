export default {
  order: 9,
  slug: 'itp-muayene-ve-test-plani',
  key: 'p09_itp',
  date: '2026-01-05',
  keywords: 'ITP nedir, muayene ve test planı, inspection and test plan, hold point witness point, kaynaklı imalat ITP, Prüfplan Schweißen, ITP welding fabrication',
  related: ['kaynak-kalite-kontrol', 'kaynak-muayene-raporu-nasil-okunur', 'ilk-parca-onayi-kaynakli-imalat', 'kaynakli-imalat-tedarikci-denetimi'],
  tr: {
    title: 'ITP Nedir? Kaynaklı İmalatta Muayene ve Test Planı Nasıl Hazırlanır?',
    meta: 'ITP (Inspection and Test Plan) nedir, kaynaklı imalatta hangi adımları kapsar? Hold, witness, review ve monitor noktaları, örnek ITP tablosu ve alıcının ITP\'de dikkat etmesi gerekenler.',
    og: 'ITP: Kaynaklı İmalatta Muayene ve Test Planı',
    tag: 'Kalite · Proje',
    h1: 'ITP Nedir? Kaynaklı İmalatta Muayene ve Test Planı',
    crumb: 'ITP',
    read: '7 dk okuma',
    body: `
<p>Büyük bir kaynaklı parça veya proje için sipariş verdiğinizde, tedarikçiden genellikle bir <strong>ITP (Inspection and Test Plan, Muayene ve Test Planı)</strong> istenir. ITP; hangi kontrolün, hangi aşamada, hangi standarda göre, kim tarafından yapılacağını ve sonucunun hangi kayıtla belgeleneceğini tek tabloda gösterir. İyi hazırlanmış bir ITP, teslimatta sürpriz çıkmasını önler.</p>
<h2>ITP Neden Gerekir?</h2>
<ul>
<li>Alıcı ile üretici arasında kontrol kapsamı konusunda yazılı mutabakat sağlar.</li>
<li>Alıcının veya üçüncü taraf muayene kuruluşunun hangi aşamalara katılacağını önceden belirler.</li>
<li>Teslim dosyasında (data book) hangi kayıtların yer alacağını tanımlar.</li>
<li>Hataların bir sonraki üretim adımına geçmeden yakalanmasını sağlar.</li>
</ul>
<h2>Kontrol Noktası Türleri</h2>
<table class="data-table"><thead><tr><th>Kod</th><th>Anlamı</th><th>Uygulama</th></tr></thead><tbody>
<tr><td>H (Hold)</td><td>Bekleme noktası</td><td>Alıcı veya temsilcisi kontrol edip onay vermeden üretim bir sonraki adıma geçemez</td></tr>
<tr><td>W (Witness)</td><td>Tanık noktası</td><td>Alıcıya önceden haber verilir; katılmazsa üretim devam eder</td></tr>
<tr><td>R (Review)</td><td>Doküman inceleme</td><td>Kayıt veya belge alıcı tarafından incelenir</td></tr>
<tr><td>M (Monitor)</td><td>İzleme</td><td>Alıcı, faaliyeti planlamadan, rastgele izleyebilir</td></tr>
<tr><td>P (Perform)</td><td>Uygulama</td><td>Kontrolü üretici yapar ve kaydeder</td></tr>
</tbody></table>
<p>Her hold noktası üretimi durdurur. Bu yüzden hold sayısı gerçekten kritik adımlarla sınırlı tutulmalı ve bildirim süresi (örneğin 48 saat) ITP'de yazılmalıdır.</p>
<h2>Kaynaklı İmalatta Tipik ITP Adımları</h2>
<table class="data-table"><thead><tr><th>No</th><th>Faaliyet</th><th>Referans</th><th>Kayıt</th><th>Üretici</th><th>Alıcı</th></tr></thead><tbody>
<tr><td>1</td><td>WPS / WPQR ve kaynakçı sertifikalarının onayı</td><td>ISO 15614-1, ISO 9606-1</td><td>WPS, WPQR, sertifikalar</td><td>P</td><td>R</td></tr>
<tr><td>2</td><td>Malzeme giriş kontrolü</td><td>EN 10204 3.1, çizim</td><td>Malzeme sertifikası, giriş raporu</td><td>P</td><td>R</td></tr>
<tr><td>3</td><td>Kesim ve ağız hazırlığı kontrolü</td><td>Çizim, ISO 9692-1</td><td>Ölçü kontrol formu</td><td>P</td><td>M</td></tr>
<tr><td>4</td><td>Montaj ve puntalama sonrası ölçü kontrolü</td><td>Çizim, ISO 13920</td><td>Ölçü raporu</td><td>P</td><td>W</td></tr>
<tr><td>5</td><td>Kaynak sırasında parametre ve ön ısıtma kontrolü</td><td>WPS</td><td>Kaynak kayıt formu</td><td>P</td><td>M</td></tr>
<tr><td>6</td><td>Gözle muayene (VT)</td><td>ISO 17637, ISO 5817</td><td>VT raporu</td><td>P</td><td>R</td></tr>
<tr><td>7</td><td>Hacimsel ve yüzey NDT</td><td>ISO 17640, ISO 17638</td><td>UT, MT raporları</td><td>P</td><td>W</td></tr>
<tr><td>8</td><td>Son ölçü kontrolü</td><td>Çizim</td><td>Son ölçü raporu</td><td>P</td><td>H</td></tr>
<tr><td>9</td><td>Yüzey hazırlığı ve boya kontrolü</td><td>ISO 8501-1, ISO 12944</td><td>Boya raporu</td><td>P</td><td>W</td></tr>
<tr><td>10</td><td>Paketleme ve sevkiyat öncesi kontrol</td><td>Paketleme talimatı</td><td>Sevk kontrol formu</td><td>P</td><td>R</td></tr>
<tr><td>11</td><td>Teslim dosyası</td><td>Sözleşme</td><td>Data book</td><td>P</td><td>R</td></tr>
</tbody></table>
<p>Tablo bir örnektir; gerçek ITP parçanın yürütme sınıfına, müşteri şartnamesine ve kritik özelliklere göre hazırlanır.</p>
<h2>ITP'de Bulunması Gereken Sütunlar</h2>
<ul>
<li>Adım numarası ve faaliyet tanımı</li>
<li>Referans doküman (standart, çizim, prosedür)</li>
<li>Kabul kriteri</li>
<li>Kontrol kapsamı (yüzde, adet, her parça)</li>
<li>Kayıt veya rapor adı</li>
<li>Üretici, alıcı ve varsa üçüncü taraf için kontrol kodu (H, W, R, M, P)</li>
<li>İmza ve tarih alanları</li>
</ul>
<h2>Sık Yapılan Hatalar</h2>
<ul>
<li><strong>Her adımı hold yapmak:</strong> Üretimi kilitler, teslim süresini uzatır.</li>
<li><strong>Kabul kriteri yazmamak:</strong> "Kontrol edilecek" ifadesi neye göre kontrol edileceğini söylemez.</li>
<li><strong>Revizyon takibi yapmamak:</strong> Çizim değiştiğinde ITP de revize edilmelidir.</li>
<li><strong>Alt yüklenici adımlarını unutmak:</strong> Galvaniz, boya veya talaşlı işleme gibi dış işlemler de ITP'de yer almalıdır.</li>
</ul>
<h2>ITP ile Kalite Planı Farkı</h2>
<p>Kalite planı (ISO 10005) projenin genel kalite yönetimini tanımlar: organizasyon, sorumluluklar, doküman kontrolü, uygunsuzluk yönetimi. ITP ise bu planın içindeki muayene ve test adımlarını sıralar. Küçük projelerde ITP tek başına yeterli olabilir; büyük projelerde ikisi birlikte istenir.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Proje bazlı işlerde ITP'yi sipariş öncesinde müşteriyle birlikte netleştiririz. Hold ve witness noktalarına müşteri veya üçüncü taraf muayene kuruluşu katılabilir. Kesim, büküm veya talaşlı işleme gibi iş ortaklarımızla koordine ettiğimiz adımlar da ITP'ye dahil edilir. Kayıtlar müşteri portalında siparişe bağlı olarak paylaşılır. <a href="../kalite.html">Kalite sistemimizi inceleyin →</a></p></div>
`,
    faq: [
      ['ITP\'yi kim hazırlar?', 'Genellikle üretici hazırlar ve alıcı onaylar. Bazı projelerde alıcı kendi ITP şablonunu verir; üretici bunu kendi süreçlerine göre doldurur.'],
      ['Hold noktası ile witness noktası arasındaki fark nedir?', 'Hold noktasında alıcı onay vermeden üretim durur. Witness noktasında alıcıya haber verilir; alıcı katılmazsa üretim devam eder.'],
      ['ITP sözleşmenin parçası mıdır?', 'Onaylanan ITP genellikle sözleşmenin eki olarak kabul edilir. Bu nedenle değişiklikler revizyon numarasıyla yönetilmelidir.'],
      ['Küçük bir sipariş için de ITP gerekir mi?', 'Basit parçalarda çoğu zaman gerekmez; kontrol planı veya ilk parça onayı yeterlidir. EN 1090 EXC3, basınçlı ekipman veya kritik makine parçalarında ITP istenmesi yaygındır.']
    ],
    cta_h3: 'Projeniz için ITP ile birlikte teklif alın',
    cta_p: 'Çiziminizi ve şartnamenizi gönderin; muayene ve test planını teklif dosyasında birlikte sunalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'What Is an ITP? Inspection and Test Plans for Welded Fabrication',
    meta: 'What is an ITP (Inspection and Test Plan) and which steps does it cover in welded fabrication? Hold, witness, review and monitor points, a sample ITP table and what buyers should check.',
    og: 'ITP: Inspection and Test Plan for Welded Fabrication',
    tag: 'Quality · Projects',
    h1: 'What Is an ITP? The Inspection and Test Plan in Welded Fabrication',
    crumb: 'ITP',
    read: '7 min read',
    body: `
<p>When you order a large welded part or project, the supplier is usually asked for an <strong>ITP (Inspection and Test Plan)</strong>. An ITP shows in one table which check is done at which stage, to which standard, by whom, and with which record. A well-prepared ITP prevents surprises at delivery.</p>
<h2>Why Is an ITP Needed?</h2>
<ul>
<li>It creates written agreement between buyer and manufacturer on the scope of checks.</li>
<li>It defines in advance which stages the buyer or a third-party inspector will attend.</li>
<li>It defines which records go into the final documentation (data book).</li>
<li>It catches errors before they move to the next production step.</li>
</ul>
<h2>Types of Inspection Points</h2>
<table class="data-table"><thead><tr><th>Code</th><th>Meaning</th><th>In practice</th></tr></thead><tbody>
<tr><td>H (Hold)</td><td>Hold point</td><td>Production cannot proceed until the buyer or representative has checked and released</td></tr>
<tr><td>W (Witness)</td><td>Witness point</td><td>Buyer is notified in advance; if they do not attend, production continues</td></tr>
<tr><td>R (Review)</td><td>Document review</td><td>Record or document is reviewed by the buyer</td></tr>
<tr><td>M (Monitor)</td><td>Monitoring</td><td>Buyer may observe the activity at random, without scheduling</td></tr>
<tr><td>P (Perform)</td><td>Perform</td><td>Manufacturer performs and records the check</td></tr>
</tbody></table>
<p>Every hold point stops production. Keep holds to truly critical steps and state the notice period (for example 48 hours) in the ITP.</p>
<h2>Typical ITP Steps in Welded Fabrication</h2>
<table class="data-table"><thead><tr><th>No</th><th>Activity</th><th>Reference</th><th>Record</th><th>Manuf.</th><th>Buyer</th></tr></thead><tbody>
<tr><td>1</td><td>Approval of WPS/WPQR and welder certificates</td><td>ISO 15614-1, ISO 9606-1</td><td>WPS, WPQR, certificates</td><td>P</td><td>R</td></tr>
<tr><td>2</td><td>Incoming material inspection</td><td>EN 10204 3.1, drawing</td><td>Material certificate, receiving report</td><td>P</td><td>R</td></tr>
<tr><td>3</td><td>Cutting and edge preparation check</td><td>Drawing, ISO 9692-1</td><td>Dimensional check form</td><td>P</td><td>M</td></tr>
<tr><td>4</td><td>Dimensional check after fit-up and tacking</td><td>Drawing, ISO 13920</td><td>Dimensional report</td><td>P</td><td>W</td></tr>
<tr><td>5</td><td>Parameter and preheat check during welding</td><td>WPS</td><td>Welding record</td><td>P</td><td>M</td></tr>
<tr><td>6</td><td>Visual testing (VT)</td><td>ISO 17637, ISO 5817</td><td>VT report</td><td>P</td><td>R</td></tr>
<tr><td>7</td><td>Volumetric and surface NDT</td><td>ISO 17640, ISO 17638</td><td>UT, MT reports</td><td>P</td><td>W</td></tr>
<tr><td>8</td><td>Final dimensional check</td><td>Drawing</td><td>Final dimensional report</td><td>P</td><td>H</td></tr>
<tr><td>9</td><td>Surface preparation and coating check</td><td>ISO 8501-1, ISO 12944</td><td>Coating report</td><td>P</td><td>W</td></tr>
<tr><td>10</td><td>Packing and pre-shipment check</td><td>Packing instruction</td><td>Shipping check form</td><td>P</td><td>R</td></tr>
<tr><td>11</td><td>Final documentation</td><td>Contract</td><td>Data book</td><td>P</td><td>R</td></tr>
</tbody></table>
<p>The table is an example; the real ITP depends on execution class, customer specification and critical characteristics.</p>
<h2>Columns an ITP Should Have</h2>
<ul>
<li>Step number and activity description</li>
<li>Reference document (standard, drawing, procedure)</li>
<li>Acceptance criterion</li>
<li>Extent of inspection (percentage, quantity, every part)</li>
<li>Record or report name</li>
<li>Inspection code for manufacturer, buyer and any third party (H, W, R, M, P)</li>
<li>Signature and date fields</li>
</ul>
<h2>Common Mistakes</h2>
<ul>
<li><strong>Making every step a hold:</strong> it locks production and extends lead time.</li>
<li><strong>No acceptance criterion:</strong> "to be checked" does not say against what.</li>
<li><strong>No revision control:</strong> when the drawing changes, the ITP must be revised too.</li>
<li><strong>Forgetting subcontracted steps:</strong> galvanizing, painting or machining belong in the ITP as well.</li>
</ul>
<h2>ITP vs Quality Plan</h2>
<p>A quality plan (ISO 10005) covers overall quality management of the project: organisation, responsibilities, document control, nonconformity handling. The ITP lists the inspection and test steps within it. On small projects an ITP alone may be enough; large projects usually ask for both.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> on project work we agree the ITP with the customer before the order. Customers or third-party inspectors may attend hold and witness points. Steps we coordinate with partners, such as cutting, bending or machining, are included in the ITP. Records are shared against the order in the customer portal. <a href="../kalite.html">See our quality system →</a></p></div>
`,
    faq: [
      ['Who prepares the ITP?', 'Usually the manufacturer prepares it and the buyer approves it. On some projects the buyer provides its own ITP template, which the manufacturer completes based on its processes.'],
      ['What is the difference between a hold point and a witness point?', 'At a hold point, production stops until the buyer releases it. At a witness point, the buyer is notified; if they do not attend, production continues.'],
      ['Is the ITP part of the contract?', 'An approved ITP is usually treated as a contract annex, so changes should be managed with revision numbers.'],
      ['Does a small order need an ITP?', 'Simple parts often do not; a control plan or first article approval is enough. ITPs are common for EN 1090 EXC3, pressure equipment and critical machine parts.']
    ],
    cta_h3: 'Get a quotation with an ITP for your project',
    cta_p: 'Send your drawing and specification and we will include the inspection and test plan in our quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Was ist ein ITP? Prüf- und Testplan in der Schweißfertigung',
    meta: 'Was ist ein ITP (Inspection and Test Plan) und welche Schritte umfasst er in der Schweißfertigung? Hold-, Witness-, Review- und Monitor-Punkte, Beispieltabelle und worauf Einkäufer achten sollten.',
    og: 'ITP: Prüf- und Testplan in der Schweißfertigung',
    tag: 'Qualität · Projekte',
    h1: 'Was ist ein ITP? Der Prüf- und Testplan in der Schweißfertigung',
    crumb: 'ITP',
    read: '7 Min. Lesezeit',
    body: `
<p>Bei größeren Schweißbaugruppen oder Projekten wird vom Lieferanten meist ein <strong>ITP (Inspection and Test Plan, Prüf- und Testplan)</strong> verlangt. Der ITP zeigt in einer Tabelle, welche Prüfung in welcher Fertigungsphase, nach welcher Norm, durch wen und mit welchem Nachweis erfolgt. Ein guter ITP verhindert Überraschungen bei der Abnahme.</p>
<h2>Wozu ein ITP?</h2>
<ul>
<li>Schriftliche Einigung zwischen Kunde und Hersteller über den Prüfumfang.</li>
<li>Vorab festgelegt, an welchen Schritten Kunde oder Drittprüfer teilnehmen.</li>
<li>Definiert, welche Nachweise in die Enddokumentation (Data Book) gehören.</li>
<li>Fehler werden erkannt, bevor sie in den nächsten Fertigungsschritt gehen.</li>
</ul>
<h2>Arten von Prüfpunkten</h2>
<table class="data-table"><thead><tr><th>Code</th><th>Bedeutung</th><th>Praxis</th></tr></thead><tbody>
<tr><td>H (Hold)</td><td>Haltepunkt</td><td>Die Fertigung geht erst nach Prüfung und Freigabe durch den Kunden weiter</td></tr>
<tr><td>W (Witness)</td><td>Zeugenpunkt</td><td>Der Kunde wird vorab informiert; erscheint er nicht, läuft die Fertigung weiter</td></tr>
<tr><td>R (Review)</td><td>Dokumentenprüfung</td><td>Nachweis oder Dokument wird vom Kunden geprüft</td></tr>
<tr><td>M (Monitor)</td><td>Überwachung</td><td>Der Kunde kann die Tätigkeit stichprobenartig ohne Termin beobachten</td></tr>
<tr><td>P (Perform)</td><td>Durchführung</td><td>Der Hersteller prüft und dokumentiert</td></tr>
</tbody></table>
<p>Jeder Haltepunkt stoppt die Fertigung. Haltepunkte sollten daher auf wirklich kritische Schritte begrenzt und die Vorankündigungsfrist (z. B. 48 Stunden) im ITP genannt werden.</p>
<h2>Typische ITP-Schritte in der Schweißfertigung</h2>
<table class="data-table"><thead><tr><th>Nr.</th><th>Tätigkeit</th><th>Referenz</th><th>Nachweis</th><th>Hersteller</th><th>Kunde</th></tr></thead><tbody>
<tr><td>1</td><td>Freigabe von WPS/WPQR und Schweißerzertifikaten</td><td>ISO 15614-1, ISO 9606-1</td><td>WPS, WPQR, Zertifikate</td><td>P</td><td>R</td></tr>
<tr><td>2</td><td>Wareneingangsprüfung Material</td><td>EN 10204 3.1, Zeichnung</td><td>Abnahmeprüfzeugnis, Eingangsbericht</td><td>P</td><td>R</td></tr>
<tr><td>3</td><td>Prüfung Zuschnitt und Fugenvorbereitung</td><td>Zeichnung, ISO 9692-1</td><td>Maßprüfformular</td><td>P</td><td>M</td></tr>
<tr><td>4</td><td>Maßprüfung nach Zusammenbau und Heften</td><td>Zeichnung, ISO 13920</td><td>Maßprotokoll</td><td>P</td><td>W</td></tr>
<tr><td>5</td><td>Parameter- und Vorwärmkontrolle beim Schweißen</td><td>WPS</td><td>Schweißprotokoll</td><td>P</td><td>M</td></tr>
<tr><td>6</td><td>Sichtprüfung (VT)</td><td>ISO 17637, ISO 5817</td><td>VT-Bericht</td><td>P</td><td>R</td></tr>
<tr><td>7</td><td>Volumen- und Oberflächenprüfung</td><td>ISO 17640, ISO 17638</td><td>UT-, MT-Berichte</td><td>P</td><td>W</td></tr>
<tr><td>8</td><td>Endmaßprüfung</td><td>Zeichnung</td><td>Endmaßprotokoll</td><td>P</td><td>H</td></tr>
<tr><td>9</td><td>Oberflächenvorbereitung und Beschichtung</td><td>ISO 8501-1, ISO 12944</td><td>Beschichtungsprotokoll</td><td>P</td><td>W</td></tr>
<tr><td>10</td><td>Verpackung und Versandkontrolle</td><td>Verpackungsanweisung</td><td>Versandprüfformular</td><td>P</td><td>R</td></tr>
<tr><td>11</td><td>Enddokumentation</td><td>Vertrag</td><td>Data Book</td><td>P</td><td>R</td></tr>
</tbody></table>
<p>Die Tabelle ist ein Beispiel; der tatsächliche ITP richtet sich nach Ausführungsklasse, Kundenspezifikation und kritischen Merkmalen.</p>
<h2>Spalten eines ITP</h2>
<ul>
<li>Schrittnummer und Beschreibung</li>
<li>Referenzdokument (Norm, Zeichnung, Verfahrensanweisung)</li>
<li>Annahmekriterium</li>
<li>Prüfumfang (Prozent, Stückzahl, jedes Teil)</li>
<li>Name des Nachweises</li>
<li>Prüfcode für Hersteller, Kunde und ggf. Dritte (H, W, R, M, P)</li>
<li>Felder für Unterschrift und Datum</li>
</ul>
<h2>Häufige Fehler</h2>
<ul>
<li><strong>Jeder Schritt als Haltepunkt:</strong> blockiert die Fertigung und verlängert die Lieferzeit.</li>
<li><strong>Kein Annahmekriterium:</strong> „wird geprüft" sagt nicht, wogegen.</li>
<li><strong>Keine Revisionsführung:</strong> Ändert sich die Zeichnung, muss auch der ITP revidiert werden.</li>
<li><strong>Fremdleistungen vergessen:</strong> Verzinken, Beschichten oder Zerspanen gehören ebenfalls in den ITP.</li>
</ul>
<h2>ITP und Qualitätsplan</h2>
<p>Ein Qualitätsplan (ISO 10005) beschreibt das Qualitätsmanagement des Projekts: Organisation, Verantwortung, Dokumentenlenkung, Umgang mit Abweichungen. Der ITP listet die Prüf- und Testschritte darin auf. Bei kleinen Projekten genügt oft der ITP allein, bei großen werden beide verlangt.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei Projektaufträgen stimmen wir den ITP vor der Bestellung mit dem Kunden ab. Kunden oder Drittprüfer können an Halte- und Zeugenpunkten teilnehmen. Schritte, die wir mit Partnern koordinieren, etwa Zuschnitt, Kanten oder Zerspanung, sind im ITP enthalten. Nachweise stellen wir im Kundenportal beim Auftrag bereit. <a href="../kalite.html">Unser Qualitätssystem →</a></p></div>
`,
    faq: [
      ['Wer erstellt den ITP?', 'In der Regel der Hersteller, freigegeben wird er vom Kunden. Manche Kunden geben eine eigene Vorlage vor, die der Hersteller nach seinen Abläufen ausfüllt.'],
      ['Was unterscheidet Halte- und Zeugenpunkt?', 'Am Haltepunkt ruht die Fertigung bis zur Freigabe durch den Kunden. Am Zeugenpunkt wird der Kunde informiert; erscheint er nicht, läuft die Fertigung weiter.'],
      ['Ist der ITP Vertragsbestandteil?', 'Ein freigegebener ITP gilt meist als Vertragsanlage. Änderungen sind daher über Revisionsstände zu führen.'],
      ['Braucht auch ein kleiner Auftrag einen ITP?', 'Bei einfachen Teilen meist nicht; ein Prüfplan oder eine Erstmusterfreigabe genügt. Bei EN 1090 EXC3, Druckgeräten und kritischen Maschinenteilen ist ein ITP üblich.']
    ],
    cta_h3: 'Angebot mit ITP für Ihr Projekt',
    cta_p: 'Senden Sie Zeichnung und Spezifikation. Den Prüf- und Testplan legen wir dem Angebot bei.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: '¿Qué es un PPI (ITP)? Plan de puntos de inspección en fabricación soldada',
    meta: 'Qué es un ITP o plan de puntos de inspección y qué pasos cubre en la fabricación soldada: puntos de espera, presenciados, revisión y supervisión, tabla de ejemplo y qué debe revisar el comprador.',
    og: 'Plan de inspección y ensayos (ITP) en fabricación soldada',
    tag: 'Calidad · Proyectos',
    h1: '¿Qué es un ITP? El plan de inspección y ensayos en la fabricación soldada',
    crumb: 'ITP',
    read: '7 min de lectura',
    body: `
<p>Al encargar una pieza soldada grande o un proyecto, se suele pedir al proveedor un <strong>ITP (Inspection and Test Plan, plan de inspección y ensayos o PPI)</strong>. El ITP muestra en una tabla qué control se hace en qué fase, según qué norma, quién lo hace y con qué registro. Un ITP bien preparado evita sorpresas en la entrega.</p>
<h2>¿Por qué hace falta un ITP?</h2>
<ul>
<li>Crea un acuerdo escrito entre comprador y fabricante sobre el alcance de los controles.</li>
<li>Define de antemano a qué fases asistirá el comprador o un inspector externo.</li>
<li>Define qué registros irán al dossier final (data book).</li>
<li>Detecta errores antes de que pasen a la siguiente fase.</li>
</ul>
<h2>Tipos de puntos de inspección</h2>
<table class="data-table"><thead><tr><th>Código</th><th>Significado</th><th>En la práctica</th></tr></thead><tbody>
<tr><td>H (Hold)</td><td>Punto de espera</td><td>La producción no avanza hasta que el comprador revisa y libera</td></tr>
<tr><td>W (Witness)</td><td>Punto presenciado</td><td>Se avisa al comprador; si no asiste, la producción continúa</td></tr>
<tr><td>R (Review)</td><td>Revisión documental</td><td>El comprador revisa el registro o documento</td></tr>
<tr><td>M (Monitor)</td><td>Supervisión</td><td>El comprador puede observar la actividad al azar, sin cita</td></tr>
<tr><td>P (Perform)</td><td>Ejecución</td><td>El fabricante realiza y registra el control</td></tr>
</tbody></table>
<p>Cada punto de espera detiene la producción. Conviene limitarlos a pasos realmente críticos y fijar en el ITP el plazo de aviso (por ejemplo 48 horas).</p>
<h2>Pasos típicos de un ITP en fabricación soldada</h2>
<table class="data-table"><thead><tr><th>N.º</th><th>Actividad</th><th>Referencia</th><th>Registro</th><th>Fabric.</th><th>Cliente</th></tr></thead><tbody>
<tr><td>1</td><td>Aprobación de WPS/WPQR y certificados de soldadores</td><td>ISO 15614-1, ISO 9606-1</td><td>WPS, WPQR, certificados</td><td>P</td><td>R</td></tr>
<tr><td>2</td><td>Control de recepción de material</td><td>EN 10204 3.1, plano</td><td>Certificado, informe de recepción</td><td>P</td><td>R</td></tr>
<tr><td>3</td><td>Control de corte y preparación de bordes</td><td>Plano, ISO 9692-1</td><td>Formulario dimensional</td><td>P</td><td>M</td></tr>
<tr><td>4</td><td>Control dimensional tras armado y punteado</td><td>Plano, ISO 13920</td><td>Informe dimensional</td><td>P</td><td>W</td></tr>
<tr><td>5</td><td>Control de parámetros y precalentamiento</td><td>WPS</td><td>Registro de soldadura</td><td>P</td><td>M</td></tr>
<tr><td>6</td><td>Inspección visual (VT)</td><td>ISO 17637, ISO 5817</td><td>Informe VT</td><td>P</td><td>R</td></tr>
<tr><td>7</td><td>END volumétricos y superficiales</td><td>ISO 17640, ISO 17638</td><td>Informes UT, MT</td><td>P</td><td>W</td></tr>
<tr><td>8</td><td>Control dimensional final</td><td>Plano</td><td>Informe dimensional final</td><td>P</td><td>H</td></tr>
<tr><td>9</td><td>Preparación superficial y pintura</td><td>ISO 8501-1, ISO 12944</td><td>Informe de pintura</td><td>P</td><td>W</td></tr>
<tr><td>10</td><td>Embalaje y control previo al envío</td><td>Instrucción de embalaje</td><td>Formulario de expedición</td><td>P</td><td>R</td></tr>
<tr><td>11</td><td>Dossier final</td><td>Contrato</td><td>Data book</td><td>P</td><td>R</td></tr>
</tbody></table>
<p>La tabla es un ejemplo; el ITP real depende de la clase de ejecución, la especificación del cliente y las características críticas.</p>
<h2>Columnas de un ITP</h2>
<ul>
<li>Número de paso y descripción</li>
<li>Documento de referencia (norma, plano, procedimiento)</li>
<li>Criterio de aceptación</li>
<li>Alcance (porcentaje, cantidad, todas las piezas)</li>
<li>Nombre del registro o informe</li>
<li>Código de inspección para fabricante, cliente y tercero (H, W, R, M, P)</li>
<li>Campos de firma y fecha</li>
</ul>
<h2>Errores frecuentes</h2>
<ul>
<li><strong>Convertir cada paso en punto de espera:</strong> bloquea la producción y alarga el plazo.</li>
<li><strong>Sin criterio de aceptación:</strong> "a controlar" no dice frente a qué.</li>
<li><strong>Sin control de revisiones:</strong> si cambia el plano, también debe revisarse el ITP.</li>
<li><strong>Olvidar los pasos subcontratados:</strong> galvanizado, pintura o mecanizado también van en el ITP.</li>
</ul>
<h2>ITP frente a plan de calidad</h2>
<p>El plan de calidad (ISO 10005) cubre la gestión de calidad del proyecto: organización, responsabilidades, control documental, no conformidades. El ITP enumera los pasos de inspección y ensayo dentro de él. En proyectos pequeños puede bastar el ITP; en los grandes se piden ambos.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> en trabajos por proyecto acordamos el ITP con el cliente antes del pedido. El cliente o un inspector externo pueden asistir a los puntos de espera y presenciados. Los pasos que coordinamos con socios, como corte, plegado o mecanizado, se incluyen en el ITP. Los registros se comparten con el pedido en el portal del cliente. <a href="../kalite.html">Nuestro sistema de calidad →</a></p></div>
`,
    faq: [
      ['¿Quién prepara el ITP?', 'Normalmente el fabricante lo prepara y el comprador lo aprueba. En algunos proyectos el comprador entrega su propia plantilla, que el fabricante completa según sus procesos.'],
      ['¿Diferencia entre punto de espera y punto presenciado?', 'En el punto de espera la producción se detiene hasta que el comprador libera. En el presenciado se avisa al comprador; si no asiste, la producción sigue.'],
      ['¿El ITP forma parte del contrato?', 'Un ITP aprobado suele considerarse anexo del contrato, por lo que los cambios deben gestionarse con número de revisión.'],
      ['¿Un pedido pequeño necesita ITP?', 'En piezas sencillas a menudo no; basta un plan de control o la aprobación de primera pieza. Es habitual en EN 1090 EXC3, equipos a presión y piezas de máquina críticas.']
    ],
    cta_h3: 'Pida una oferta con ITP para su proyecto',
    cta_p: 'Envíe plano y especificación; incluimos el plan de inspección y ensayos en la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Qu’est-ce qu’un PCE (ITP) ? Plan de contrôle et d’essais en mécano-soudure',
    meta: 'Qu’est-ce qu’un ITP (plan de contrôle et d’essais) et quelles étapes couvre-t-il en fabrication soudée ? Points d’arrêt, points témoins, revue et surveillance, tableau type et points de vigilance pour l’acheteur.',
    og: 'Plan de contrôle et d’essais (ITP) en mécano-soudure',
    tag: 'Qualité · Projets',
    h1: 'Qu’est-ce qu’un ITP ? Le plan de contrôle et d’essais en fabrication soudée',
    crumb: 'ITP',
    read: '7 min de lecture',
    body: `
<p>Pour une grande pièce soudée ou un projet, on demande généralement au fournisseur un <strong>ITP (Inspection and Test Plan, plan de contrôle et d’essais)</strong>. L’ITP indique dans un tableau quel contrôle est fait à quelle étape, selon quelle norme, par qui et avec quel enregistrement. Un ITP bien conçu évite les surprises à la livraison.</p>
<h2>Pourquoi un ITP ?</h2>
<ul>
<li>Il formalise l’accord entre acheteur et fabricant sur l’étendue des contrôles.</li>
<li>Il fixe à l’avance les étapes auxquelles assiste l’acheteur ou un organisme tiers.</li>
<li>Il définit les enregistrements du dossier final (data book).</li>
<li>Il permet de détecter les erreurs avant l’étape suivante.</li>
</ul>
<h2>Types de points de contrôle</h2>
<table class="data-table"><thead><tr><th>Code</th><th>Signification</th><th>En pratique</th></tr></thead><tbody>
<tr><td>H (Hold)</td><td>Point d’arrêt</td><td>La fabrication ne reprend qu’après contrôle et libération par l’acheteur</td></tr>
<tr><td>W (Witness)</td><td>Point témoin</td><td>L’acheteur est prévenu ; s’il ne vient pas, la fabrication continue</td></tr>
<tr><td>R (Review)</td><td>Revue documentaire</td><td>L’acheteur examine l’enregistrement ou le document</td></tr>
<tr><td>M (Monitor)</td><td>Surveillance</td><td>L’acheteur peut observer l’activité de façon aléatoire, sans rendez-vous</td></tr>
<tr><td>P (Perform)</td><td>Réalisation</td><td>Le fabricant réalise et enregistre le contrôle</td></tr>
</tbody></table>
<p>Chaque point d’arrêt immobilise la fabrication. Mieux vaut les limiter aux étapes vraiment critiques et préciser le délai de convocation (par exemple 48 heures) dans l’ITP.</p>
<h2>Étapes types d’un ITP en fabrication soudée</h2>
<table class="data-table"><thead><tr><th>N°</th><th>Activité</th><th>Référence</th><th>Enregistrement</th><th>Fabric.</th><th>Client</th></tr></thead><tbody>
<tr><td>1</td><td>Validation des DMOS/QMOS et certificats soudeurs</td><td>ISO 15614-1, ISO 9606-1</td><td>DMOS, QMOS, certificats</td><td>P</td><td>R</td></tr>
<tr><td>2</td><td>Contrôle de réception matière</td><td>EN 10204 3.1, plan</td><td>Certificat matière, PV de réception</td><td>P</td><td>R</td></tr>
<tr><td>3</td><td>Contrôle découpe et chanfreins</td><td>Plan, ISO 9692-1</td><td>Fiche de contrôle dimensionnel</td><td>P</td><td>M</td></tr>
<tr><td>4</td><td>Contrôle dimensionnel après accostage et pointage</td><td>Plan, ISO 13920</td><td>Rapport dimensionnel</td><td>P</td><td>W</td></tr>
<tr><td>5</td><td>Contrôle des paramètres et du préchauffage</td><td>DMOS</td><td>Fiche de soudage</td><td>P</td><td>M</td></tr>
<tr><td>6</td><td>Contrôle visuel (VT)</td><td>ISO 17637, ISO 5817</td><td>Rapport VT</td><td>P</td><td>R</td></tr>
<tr><td>7</td><td>CND volumiques et surfaciques</td><td>ISO 17640, ISO 17638</td><td>Rapports UT, MT</td><td>P</td><td>W</td></tr>
<tr><td>8</td><td>Contrôle dimensionnel final</td><td>Plan</td><td>Rapport dimensionnel final</td><td>P</td><td>H</td></tr>
<tr><td>9</td><td>Préparation de surface et peinture</td><td>ISO 8501-1, ISO 12944</td><td>Rapport peinture</td><td>P</td><td>W</td></tr>
<tr><td>10</td><td>Emballage et contrôle avant expédition</td><td>Instruction d’emballage</td><td>Fiche d’expédition</td><td>P</td><td>R</td></tr>
<tr><td>11</td><td>Dossier final</td><td>Contrat</td><td>Data book</td><td>P</td><td>R</td></tr>
</tbody></table>
<p>Ce tableau est un exemple ; l’ITP réel dépend de la classe d’exécution, de la spécification client et des caractéristiques critiques.</p>
<h2>Colonnes d’un ITP</h2>
<ul>
<li>Numéro et description de l’étape</li>
<li>Document de référence (norme, plan, procédure)</li>
<li>Critère d’acceptation</li>
<li>Étendue (pourcentage, quantité, chaque pièce)</li>
<li>Nom de l’enregistrement</li>
<li>Code d’intervention fabricant, client et tiers (H, W, R, M, P)</li>
<li>Champs de visa et date</li>
</ul>
<h2>Erreurs fréquentes</h2>
<ul>
<li><strong>Mettre un point d’arrêt partout :</strong> la fabrication est bloquée, le délai s’allonge.</li>
<li><strong>Pas de critère d’acceptation :</strong> « à contrôler » ne dit pas par rapport à quoi.</li>
<li><strong>Pas de suivi des indices :</strong> si le plan change, l’ITP doit être révisé.</li>
<li><strong>Oublier la sous-traitance :</strong> galvanisation, peinture ou usinage figurent aussi dans l’ITP.</li>
</ul>
<h2>ITP et plan qualité</h2>
<p>Le plan qualité (ISO 10005) décrit le management de la qualité du projet : organisation, responsabilités, maîtrise documentaire, non-conformités. L’ITP liste les étapes de contrôle et d’essai qui s’y rattachent. Sur un petit projet, l’ITP seul peut suffire ; les grands projets demandent les deux.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> sur les projets, nous validons l’ITP avec le client avant la commande. Le client ou un organisme tiers peut assister aux points d’arrêt et points témoins. Les étapes coordonnées avec nos partenaires, comme la découpe, le pliage ou l’usinage, sont intégrées à l’ITP. Les enregistrements sont partagés avec la commande dans le portail client. <a href="../kalite.html">Notre système qualité →</a></p></div>
`,
    faq: [
      ['Qui rédige l’ITP ?', 'En général le fabricant, l’acheteur l’approuve. Sur certains projets, l’acheteur fournit son propre modèle que le fabricant complète selon ses procédés.'],
      ['Différence entre point d’arrêt et point témoin ?', 'Au point d’arrêt, la fabrication s’arrête jusqu’à libération par l’acheteur. Au point témoin, l’acheteur est prévenu ; s’il ne vient pas, la fabrication continue.'],
      ['L’ITP fait-il partie du contrat ?', 'Un ITP approuvé est généralement considéré comme une annexe contractuelle ; les modifications se gèrent donc par indice.'],
      ['Une petite commande nécessite-t-elle un ITP ?', 'Pour des pièces simples, souvent non ; un plan de contrôle ou une validation de première pièce suffit. L’ITP est courant en EN 1090 EXC3, équipements sous pression et pièces critiques.']
    ],
    cta_h3: 'Une offre accompagnée d’un ITP pour votre projet',
    cta_p: 'Envoyez plan et spécification ; nous joignons le plan de contrôle et d’essais à l’offre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Cos’è un PCQ (ITP)? Piano di controllo e prova nella carpenteria saldata',
    meta: 'Cos’è un ITP (piano di ispezione e prova) e quali fasi copre nella carpenteria saldata? Punti di arresto, testimoniati, revisione e monitoraggio, tabella di esempio e cosa deve verificare l’acquirente.',
    og: 'Piano di ispezione e prova (ITP) nella carpenteria saldata',
    tag: 'Qualità · Progetti',
    h1: 'Cos’è un ITP? Il piano di ispezione e prova nella carpenteria saldata',
    crumb: 'ITP',
    read: '7 min di lettura',
    body: `
<p>Quando si ordina un grande pezzo saldato o un progetto, al fornitore si chiede di solito un <strong>ITP (Inspection and Test Plan, piano di ispezione e prova o PCQ)</strong>. L’ITP mostra in una tabella quale controllo si fa in quale fase, secondo quale norma, da chi e con quale registrazione. Un ITP ben fatto evita sorprese alla consegna.</p>
<h2>Perché serve un ITP?</h2>
<ul>
<li>Crea un accordo scritto tra cliente e costruttore sull’estensione dei controlli.</li>
<li>Stabilisce in anticipo a quali fasi parteciperà il cliente o un ente terzo.</li>
<li>Definisce quali registrazioni confluiscono nel dossier finale (data book).</li>
<li>Intercetta gli errori prima della fase successiva.</li>
</ul>
<h2>Tipi di punti di controllo</h2>
<table class="data-table"><thead><tr><th>Codice</th><th>Significato</th><th>In pratica</th></tr></thead><tbody>
<tr><td>H (Hold)</td><td>Punto di arresto</td><td>La produzione non prosegue finché il cliente non controlla e rilascia</td></tr>
<tr><td>W (Witness)</td><td>Punto testimoniato</td><td>Il cliente è avvisato; se non partecipa, la produzione continua</td></tr>
<tr><td>R (Review)</td><td>Revisione documentale</td><td>Il cliente esamina la registrazione o il documento</td></tr>
<tr><td>M (Monitor)</td><td>Monitoraggio</td><td>Il cliente può osservare l’attività a campione, senza appuntamento</td></tr>
<tr><td>P (Perform)</td><td>Esecuzione</td><td>Il costruttore esegue e registra il controllo</td></tr>
</tbody></table>
<p>Ogni punto di arresto ferma la produzione. Va quindi limitato alle fasi davvero critiche e nell’ITP va indicato il preavviso (ad esempio 48 ore).</p>
<h2>Fasi tipiche di un ITP nella carpenteria saldata</h2>
<table class="data-table"><thead><tr><th>N.</th><th>Attività</th><th>Riferimento</th><th>Registrazione</th><th>Costrutt.</th><th>Cliente</th></tr></thead><tbody>
<tr><td>1</td><td>Approvazione WPS/WPQR e patentini dei saldatori</td><td>ISO 15614-1, ISO 9606-1</td><td>WPS, WPQR, patentini</td><td>P</td><td>R</td></tr>
<tr><td>2</td><td>Controllo in accettazione del materiale</td><td>EN 10204 3.1, disegno</td><td>Certificato, verbale di accettazione</td><td>P</td><td>R</td></tr>
<tr><td>3</td><td>Controllo taglio e preparazione dei lembi</td><td>Disegno, ISO 9692-1</td><td>Modulo dimensionale</td><td>P</td><td>M</td></tr>
<tr><td>4</td><td>Controllo dimensionale dopo assemblaggio e puntatura</td><td>Disegno, ISO 13920</td><td>Rapporto dimensionale</td><td>P</td><td>W</td></tr>
<tr><td>5</td><td>Controllo parametri e preriscaldo</td><td>WPS</td><td>Registro di saldatura</td><td>P</td><td>M</td></tr>
<tr><td>6</td><td>Esame visivo (VT)</td><td>ISO 17637, ISO 5817</td><td>Rapporto VT</td><td>P</td><td>R</td></tr>
<tr><td>7</td><td>CND volumetrici e superficiali</td><td>ISO 17640, ISO 17638</td><td>Rapporti UT, MT</td><td>P</td><td>W</td></tr>
<tr><td>8</td><td>Controllo dimensionale finale</td><td>Disegno</td><td>Rapporto dimensionale finale</td><td>P</td><td>H</td></tr>
<tr><td>9</td><td>Preparazione superficiale e verniciatura</td><td>ISO 8501-1, ISO 12944</td><td>Rapporto verniciatura</td><td>P</td><td>W</td></tr>
<tr><td>10</td><td>Imballaggio e controllo pre-spedizione</td><td>Istruzione di imballo</td><td>Modulo di spedizione</td><td>P</td><td>R</td></tr>
<tr><td>11</td><td>Dossier finale</td><td>Contratto</td><td>Data book</td><td>P</td><td>R</td></tr>
</tbody></table>
<p>La tabella è un esempio; l’ITP reale dipende da classe di esecuzione, specifica cliente e caratteristiche critiche.</p>
<h2>Colonne di un ITP</h2>
<ul>
<li>Numero e descrizione della fase</li>
<li>Documento di riferimento (norma, disegno, procedura)</li>
<li>Criterio di accettazione</li>
<li>Estensione (percentuale, quantità, ogni pezzo)</li>
<li>Nome della registrazione</li>
<li>Codice di intervento per costruttore, cliente ed ente terzo (H, W, R, M, P)</li>
<li>Campi firma e data</li>
</ul>
<h2>Errori frequenti</h2>
<ul>
<li><strong>Ogni fase come punto di arresto:</strong> blocca la produzione e allunga i tempi.</li>
<li><strong>Nessun criterio di accettazione:</strong> "da controllare" non dice rispetto a cosa.</li>
<li><strong>Nessun controllo revisioni:</strong> se cambia il disegno, va rivisto anche l’ITP.</li>
<li><strong>Dimenticare le lavorazioni esterne:</strong> zincatura, verniciatura o lavorazioni meccaniche vanno inserite nell’ITP.</li>
</ul>
<h2>ITP e piano della qualità</h2>
<p>Il piano della qualità (ISO 10005) descrive la gestione qualità del progetto: organizzazione, responsabilità, controllo documenti, non conformità. L’ITP elenca le fasi di ispezione e prova al suo interno. Nei piccoli progetti può bastare l’ITP; nei grandi si chiedono entrambi.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> per le commesse a progetto concordiamo l’ITP con il cliente prima dell’ordine. Il cliente o un ente terzo possono partecipare ai punti di arresto e testimoniati. Le fasi che coordiniamo con i partner, come taglio, piegatura o lavorazioni meccaniche, sono incluse nell’ITP. Le registrazioni sono condivise con l’ordine nel portale clienti. <a href="../kalite.html">Il nostro sistema qualità →</a></p></div>
`,
    faq: [
      ['Chi prepara l’ITP?', 'Di norma il costruttore, approvato dal cliente. In alcuni progetti il cliente fornisce un proprio modello che il costruttore compila secondo i propri processi.'],
      ['Differenza tra punto di arresto e punto testimoniato?', 'Al punto di arresto la produzione si ferma fino al rilascio del cliente. Al punto testimoniato il cliente viene avvisato; se non partecipa, si prosegue.'],
      ['L’ITP fa parte del contratto?', 'Un ITP approvato è di solito considerato un allegato contrattuale, quindi le modifiche vanno gestite con numero di revisione.'],
      ['Serve un ITP anche per un piccolo ordine?', 'Per pezzi semplici spesso no; basta un piano di controllo o l’approvazione del primo pezzo. È comune per EN 1090 EXC3, attrezzature a pressione e parti di macchina critiche.']
    ],
    cta_h3: 'Offerta con ITP per il vostro progetto',
    cta_p: 'Inviateci disegno e specifica; alleghiamo il piano di ispezione e prova all’offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Wat is een ITP? Inspectie- en testplan in de lasfabricage',
    meta: 'Wat is een ITP (Inspection and Test Plan) en welke stappen omvat het in de lasfabricage? Hold-, witness-, review- en monitorpunten, een voorbeeldtabel en waar inkopers op moeten letten.',
    og: 'ITP: inspectie- en testplan in de lasfabricage',
    tag: 'Kwaliteit · Projecten',
    h1: 'Wat is een ITP? Het inspectie- en testplan in de lasfabricage',
    crumb: 'ITP',
    read: '7 min lezen',
    body: `
<p>Bij een groot gelast onderdeel of project wordt de leverancier meestal om een <strong>ITP (Inspection and Test Plan, inspectie- en testplan)</strong> gevraagd. Een ITP toont in één tabel welke controle in welke fase, volgens welke norm, door wie en met welk registratiedocument plaatsvindt. Een goed ITP voorkomt verrassingen bij oplevering.</p>
<h2>Waarom een ITP?</h2>
<ul>
<li>Schriftelijke afspraak tussen koper en fabrikant over de omvang van de controles.</li>
<li>Vooraf vastgelegd bij welke stappen de koper of een externe inspecteur aanwezig is.</li>
<li>Bepaalt welke registraties in het opleverdossier (data book) komen.</li>
<li>Fouten worden ontdekt voordat ze naar de volgende stap gaan.</li>
</ul>
<h2>Soorten inspectiepunten</h2>
<table class="data-table"><thead><tr><th>Code</th><th>Betekenis</th><th>In de praktijk</th></tr></thead><tbody>
<tr><td>H (Hold)</td><td>Stoppunt</td><td>Productie gaat pas verder na controle en vrijgave door de koper</td></tr>
<tr><td>W (Witness)</td><td>Getuigepunt</td><td>Koper wordt vooraf geïnformeerd; komt hij niet, dan gaat de productie door</td></tr>
<tr><td>R (Review)</td><td>Documentbeoordeling</td><td>Koper beoordeelt de registratie of het document</td></tr>
<tr><td>M (Monitor)</td><td>Toezicht</td><td>Koper kan de activiteit steekproefsgewijs zonder afspraak volgen</td></tr>
<tr><td>P (Perform)</td><td>Uitvoering</td><td>Fabrikant voert de controle uit en registreert</td></tr>
</tbody></table>
<p>Elk stoppunt legt de productie stil. Beperk stoppunten tot echt kritische stappen en leg de aankondigingstermijn (bijvoorbeeld 48 uur) vast in het ITP.</p>
<h2>Typische ITP-stappen in de lasfabricage</h2>
<table class="data-table"><thead><tr><th>Nr.</th><th>Activiteit</th><th>Referentie</th><th>Registratie</th><th>Fabr.</th><th>Koper</th></tr></thead><tbody>
<tr><td>1</td><td>Goedkeuring WPS/WPQR en lassercertificaten</td><td>ISO 15614-1, ISO 9606-1</td><td>WPS, WPQR, certificaten</td><td>P</td><td>R</td></tr>
<tr><td>2</td><td>Ingangscontrole materiaal</td><td>EN 10204 3.1, tekening</td><td>Materiaalcertificaat, ontvangstrapport</td><td>P</td><td>R</td></tr>
<tr><td>3</td><td>Controle snijden en naadvoorbewerking</td><td>Tekening, ISO 9692-1</td><td>Maatcontroleformulier</td><td>P</td><td>M</td></tr>
<tr><td>4</td><td>Maatcontrole na samenbouw en hechten</td><td>Tekening, ISO 13920</td><td>Maatrapport</td><td>P</td><td>W</td></tr>
<tr><td>5</td><td>Controle parameters en voorwarmen</td><td>WPS</td><td>Lasregistratie</td><td>P</td><td>M</td></tr>
<tr><td>6</td><td>Visuele inspectie (VT)</td><td>ISO 17637, ISO 5817</td><td>VT-rapport</td><td>P</td><td>R</td></tr>
<tr><td>7</td><td>Volumetrisch en oppervlakte-NDO</td><td>ISO 17640, ISO 17638</td><td>UT-, MT-rapporten</td><td>P</td><td>W</td></tr>
<tr><td>8</td><td>Eindmaatcontrole</td><td>Tekening</td><td>Eindmaatrapport</td><td>P</td><td>H</td></tr>
<tr><td>9</td><td>Oppervlaktevoorbehandeling en coating</td><td>ISO 8501-1, ISO 12944</td><td>Coatingrapport</td><td>P</td><td>W</td></tr>
<tr><td>10</td><td>Verpakking en controle vóór verzending</td><td>Verpakkingsinstructie</td><td>Verzendcontroleformulier</td><td>P</td><td>R</td></tr>
<tr><td>11</td><td>Opleverdossier</td><td>Contract</td><td>Data book</td><td>P</td><td>R</td></tr>
</tbody></table>
<p>De tabel is een voorbeeld; het werkelijke ITP hangt af van uitvoeringsklasse, klantspecificatie en kritische kenmerken.</p>
<h2>Kolommen van een ITP</h2>
<ul>
<li>Stapnummer en omschrijving</li>
<li>Referentiedocument (norm, tekening, procedure)</li>
<li>Acceptatiecriterium</li>
<li>Omvang (percentage, aantal, elk deel)</li>
<li>Naam van registratie of rapport</li>
<li>Inspectiecode voor fabrikant, koper en eventuele derde (H, W, R, M, P)</li>
<li>Velden voor paraaf en datum</li>
</ul>
<h2>Veelgemaakte fouten</h2>
<ul>
<li><strong>Van elke stap een stoppunt maken:</strong> blokkeert de productie en verlengt de levertijd.</li>
<li><strong>Geen acceptatiecriterium:</strong> "wordt gecontroleerd" zegt niet waartegen.</li>
<li><strong>Geen revisiebeheer:</strong> verandert de tekening, dan moet ook het ITP worden herzien.</li>
<li><strong>Uitbesteed werk vergeten:</strong> verzinken, coaten of verspanen horen ook in het ITP.</li>
</ul>
<h2>ITP en kwaliteitsplan</h2>
<p>Een kwaliteitsplan (ISO 10005) beschrijft het kwaliteitsbeheer van het project: organisatie, verantwoordelijkheden, documentbeheer, afwijkingen. Het ITP somt de inspectie- en teststappen daarbinnen op. Bij kleine projecten volstaat vaak het ITP; grote projecten vragen beide.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij projectwerk stemmen we het ITP vóór de order af met de klant. Klant of externe inspecteur kan bij stop- en getuigepunten aanwezig zijn. Stappen die we met partners coördineren, zoals snijden, zetten of verspanen, zijn in het ITP opgenomen. Registraties delen we bij de order in het klantenportaal. <a href="../kalite.html">Ons kwaliteitssysteem →</a></p></div>
`,
    faq: [
      ['Wie stelt het ITP op?', 'Meestal de fabrikant, de koper keurt het goed. Bij sommige projecten levert de koper een eigen sjabloon aan, dat de fabrikant volgens zijn processen invult.'],
      ['Wat is het verschil tussen een stoppunt en een getuigepunt?', 'Bij een stoppunt ligt de productie stil tot de koper vrijgeeft. Bij een getuigepunt wordt de koper geïnformeerd; komt hij niet, dan gaat de productie door.'],
      ['Is het ITP onderdeel van het contract?', 'Een goedgekeurd ITP geldt meestal als contractbijlage; wijzigingen worden daarom met revisienummers beheerd.'],
      ['Heeft een kleine order een ITP nodig?', 'Bij eenvoudige delen vaak niet; een controleplan of eerste-artikelgoedkeuring volstaat. Bij EN 1090 EXC3, drukapparatuur en kritische machinedelen is een ITP gebruikelijk.']
    ],
    cta_h3: 'Offerte met ITP voor uw project',
    cta_p: 'Stuur tekening en specificatie; we voegen het inspectie- en testplan bij de offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Hva er en ITP? Inspeksjons- og testplan i sveiseproduksjon',
    meta: 'Hva er en ITP (Inspection and Test Plan), og hvilke trinn dekker den i sveiseproduksjon? Hold-, vitne-, gjennomgangs- og overvåkingspunkter, eksempeltabell og hva innkjøper bør se etter.',
    og: 'ITP: inspeksjons- og testplan i sveiseproduksjon',
    tag: 'Kvalitet · Prosjekter',
    h1: 'Hva er en ITP? Inspeksjons- og testplanen i sveiseproduksjon',
    crumb: 'ITP',
    read: '7 min lesing',
    body: `
<p>Når du bestiller en stor sveist del eller et prosjekt, blir leverandøren som regel bedt om en <strong>ITP (Inspection and Test Plan, inspeksjons- og testplan)</strong>. En ITP viser i én tabell hvilken kontroll som gjøres i hvilken fase, etter hvilken standard, av hvem og med hvilken registrering. En godt utarbeidet ITP hindrer overraskelser ved levering.</p>
<h2>Hvorfor trengs en ITP?</h2>
<ul>
<li>Den gir skriftlig enighet mellom kjøper og produsent om kontrollomfanget.</li>
<li>Den fastsetter på forhånd hvilke trinn kjøper eller tredjepartsinspektør deltar på.</li>
<li>Den definerer hvilke registreringer som skal inn i sluttdokumentasjonen (data book).</li>
<li>Feil fanges opp før de går videre til neste produksjonstrinn.</li>
</ul>
<h2>Typer kontrollpunkter</h2>
<table class="data-table"><thead><tr><th>Kode</th><th>Betydning</th><th>I praksis</th></tr></thead><tbody>
<tr><td>H (Hold)</td><td>Holdepunkt</td><td>Produksjonen kan ikke fortsette før kjøper har kontrollert og frigitt</td></tr>
<tr><td>W (Witness)</td><td>Vitnepunkt</td><td>Kjøper varsles på forhånd; møter han ikke, fortsetter produksjonen</td></tr>
<tr><td>R (Review)</td><td>Dokumentgjennomgang</td><td>Kjøper gjennomgår registreringen eller dokumentet</td></tr>
<tr><td>M (Monitor)</td><td>Overvåking</td><td>Kjøper kan følge aktiviteten stikkprøvevis uten avtale</td></tr>
<tr><td>P (Perform)</td><td>Utførelse</td><td>Produsenten utfører og registrerer kontrollen</td></tr>
</tbody></table>
<p>Hvert holdepunkt stopper produksjonen. Begrens dem til virkelig kritiske trinn, og angi varslingsfristen (for eksempel 48 timer) i ITP-en.</p>
<h2>Typiske ITP-trinn i sveiseproduksjon</h2>
<table class="data-table"><thead><tr><th>Nr.</th><th>Aktivitet</th><th>Referanse</th><th>Registrering</th><th>Prod.</th><th>Kjøper</th></tr></thead><tbody>
<tr><td>1</td><td>Godkjenning av WPS/WPQR og sveisesertifikater</td><td>ISO 15614-1, ISO 9606-1</td><td>WPS, WPQR, sertifikater</td><td>P</td><td>R</td></tr>
<tr><td>2</td><td>Mottakskontroll av materiale</td><td>EN 10204 3.1, tegning</td><td>Materialsertifikat, mottaksrapport</td><td>P</td><td>R</td></tr>
<tr><td>3</td><td>Kontroll av kapping og fugeforberedelse</td><td>Tegning, ISO 9692-1</td><td>Målekontrollskjema</td><td>P</td><td>M</td></tr>
<tr><td>4</td><td>Målekontroll etter tilpasning og hefting</td><td>Tegning, ISO 13920</td><td>Målerapport</td><td>P</td><td>W</td></tr>
<tr><td>5</td><td>Kontroll av parametere og forvarming</td><td>WPS</td><td>Sveiselogg</td><td>P</td><td>M</td></tr>
<tr><td>6</td><td>Visuell kontroll (VT)</td><td>ISO 17637, ISO 5817</td><td>VT-rapport</td><td>P</td><td>R</td></tr>
<tr><td>7</td><td>Volumetrisk og overflate-NDT</td><td>ISO 17640, ISO 17638</td><td>UT-, MT-rapporter</td><td>P</td><td>W</td></tr>
<tr><td>8</td><td>Endelig målekontroll</td><td>Tegning</td><td>Endelig målerapport</td><td>P</td><td>H</td></tr>
<tr><td>9</td><td>Overflatebehandling og maling</td><td>ISO 8501-1, ISO 12944</td><td>Malingsrapport</td><td>P</td><td>W</td></tr>
<tr><td>10</td><td>Pakking og kontroll før forsendelse</td><td>Pakkeinstruks</td><td>Forsendelsesskjema</td><td>P</td><td>R</td></tr>
<tr><td>11</td><td>Sluttdokumentasjon</td><td>Kontrakt</td><td>Data book</td><td>P</td><td>R</td></tr>
</tbody></table>
<p>Tabellen er et eksempel; den faktiske ITP-en avhenger av utførelsesklasse, kundespesifikasjon og kritiske egenskaper.</p>
<h2>Kolonner en ITP bør ha</h2>
<ul>
<li>Trinnnummer og beskrivelse</li>
<li>Referansedokument (standard, tegning, prosedyre)</li>
<li>Akseptkriterium</li>
<li>Omfang (prosent, antall, hver del)</li>
<li>Navn på registrering eller rapport</li>
<li>Kontrollkode for produsent, kjøper og eventuell tredjepart (H, W, R, M, P)</li>
<li>Felt for signatur og dato</li>
</ul>
<h2>Vanlige feil</h2>
<ul>
<li><strong>Holdepunkt på alle trinn:</strong> låser produksjonen og forlenger leveringstiden.</li>
<li><strong>Ingen akseptkriterier:</strong> "skal kontrolleres" sier ikke mot hva.</li>
<li><strong>Ingen revisjonsstyring:</strong> endres tegningen, må også ITP-en revideres.</li>
<li><strong>Glemte underleveranser:</strong> galvanisering, maling eller maskinering hører også hjemme i ITP-en.</li>
</ul>
<h2>ITP og kvalitetsplan</h2>
<p>En kvalitetsplan (ISO 10005) beskriver kvalitetsstyringen i prosjektet: organisasjon, ansvar, dokumentstyring, avvikshåndtering. ITP-en lister inspeksjons- og testtrinnene innenfor den. I små prosjekter kan ITP alene være nok; store prosjekter krever begge.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> i prosjektarbeid avtaler vi ITP-en med kunden før ordre. Kunde eller tredjepartsinspektør kan delta på hold- og vitnepunkter. Trinn vi koordinerer med partnere, som kapping, bukking eller maskinering, inngår i ITP-en. Registreringene deles på ordren i kundeportalen. <a href="../kalite.html">Vårt kvalitetssystem →</a></p></div>
`,
    faq: [
      ['Hvem utarbeider ITP-en?', 'Som regel produsenten, og kjøper godkjenner. I noen prosjekter gir kjøper en egen mal som produsenten fyller ut etter sine prosesser.'],
      ['Hva er forskjellen på holdepunkt og vitnepunkt?', 'Ved holdepunkt stopper produksjonen til kjøper frigir. Ved vitnepunkt varsles kjøper; møter han ikke, fortsetter produksjonen.'],
      ['Er ITP-en en del av kontrakten?', 'En godkjent ITP regnes vanligvis som kontraktsvedlegg, så endringer bør styres med revisjonsnummer.'],
      ['Trenger en liten ordre ITP?', 'For enkle deler ofte ikke; en kontrollplan eller førsteartikkelgodkjenning er nok. ITP er vanlig for EN 1090 EXC3, trykkutstyr og kritiske maskindeler.']
    ],
    cta_h3: 'Få tilbud med ITP for prosjektet ditt',
    cta_p: 'Send tegning og spesifikasjon, så legger vi inspeksjons- og testplanen ved tilbudet.',
    cta_btn: 'Be om tilbud →'
  }
};
