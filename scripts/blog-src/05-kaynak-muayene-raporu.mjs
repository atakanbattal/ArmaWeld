export default {
  order: 5,
  slug: 'kaynak-muayene-raporu-nasil-okunur',
  key: 'p05_report',
  date: '2025-12-11',
  keywords: 'kaynak muayene raporu, NDT raporu nasıl okunur, VT raporu, UT raporu, kaynak kontrol raporu, weld inspection report, NDT report, Schweißnahtprüfbericht',
  related: ['ndt-tahribatsiz-muayene-yontemleri', 'iso-5817-kalite-seviyeleri', 'kaynak-kalite-kontrol', 'malzeme-sertifikasi-en-10204-3-1'],
  tr: {
    title: 'Kaynak Muayene Raporu Nasıl Okunur? VT, PT, MT, UT ve RT Raporları',
    meta: 'Kaynak muayene raporunda neler bulunmalı? VT, PT, MT, UT ve RT raporlarındaki standart, kabul seviyesi, muayene kapsamı, bulgu ve personel bilgisi nasıl okunur; alıcı neyi kontrol etmeli?',
    og: 'Kaynak Muayene Raporu Nasıl Okunur?',
    tag: 'Kalite · NDT',
    h1: 'Kaynak Muayene Raporu Nasıl Okunur? Alıcının Kontrol Etmesi Gereken Alanlar',
    crumb: 'Muayene Raporu',
    read: '8 dk okuma',
    body: `
<p>Kaynaklı bir parça teslim edildiğinde yanında gelen muayene raporları, parçanın şartnameye uygun üretildiğinin yazılı kanıtıdır. Ancak birçok satın alma ve kalite ekibi bu raporları yalnızca "kabul" yazıp yazmadığına bakarak dosyalar. Raporun gerçekten bir şey kanıtlayıp kanıtlamadığını anlamak için hangi alanlara bakmanız gerektiğini bu yazıda anlatıyoruz.</p>
<h2>Her Muayene Raporunda Bulunması Gereken Bilgiler</h2>
<p>Yöntem ne olursa olsun, izlenebilir bir rapor şu bilgileri içermelidir:</p>
<table class="data-table"><thead><tr><th>Alan</th><th>Neden önemli?</th></tr></thead><tbody>
<tr><td>Parça, çizim ve revizyon numarası</td><td>Raporun hangi parçaya ait olduğunu kesinleştirir</td></tr>
<tr><td>Kaynak veya dikiş numarası</td><td>Kaynak haritasıyla eşleştirme sağlar</td></tr>
<tr><td>Muayene standardı</td><td>Testin nasıl yapıldığını tanımlar (örn. ISO 17637, ISO 17640)</td></tr>
<tr><td>Kabul standardı ve seviyesi</td><td>Hangi bulgunun kabul edileceğini belirler (örn. ISO 5817 B, ISO 11666 seviye 2)</td></tr>
<tr><td>Muayene kapsamı</td><td>Dikişin yüzde kaçının kontrol edildiği</td></tr>
<tr><td>Muayene zamanı</td><td>Kaynaktan ne kadar sonra yapıldığı (gecikmeli çatlak riski olan çeliklerde kritik)</td></tr>
<tr><td>Ekipman ve kalibrasyon</td><td>Cihazın seri numarası, kalibrasyon tarihi</td></tr>
<tr><td>Bulgular ve konumları</td><td>Bulunan süreksizlikler, ölçüleri ve yerleri</td></tr>
<tr><td>Sonuç</td><td>Kabul veya ret, her dikiş için ayrı</td></tr>
<tr><td>Personel ve seviye</td><td>Muayeneyi yapan ve onaylayan kişi, ISO 9712 seviyesi</td></tr>
</tbody></table>
<p>Bu alanlardan biri eksikse rapor, bir denetimde veya bir hasar incelemesinde sorun çıkarabilir.</p>
<h2>Muayene Standardı ile Kabul Standardı Farkı</h2>
<p>En çok karıştırılan nokta budur. Muayene standardı testin <em>nasıl</em> yapılacağını, kabul standardı ise sonucun <em>nasıl değerlendirileceğini</em> söyler.</p>
<table class="data-table"><thead><tr><th>Yöntem</th><th>Muayene standardı</th><th>Tipik kabul standardı</th></tr></thead><tbody>
<tr><td>Gözle muayene (VT)</td><td>EN ISO 17637</td><td>EN ISO 5817</td></tr>
<tr><td>Penetrant (PT)</td><td>EN ISO 3452-1</td><td>EN ISO 23277</td></tr>
<tr><td>Manyetik parçacık (MT)</td><td>EN ISO 17638</td><td>EN ISO 23278</td></tr>
<tr><td>Ultrasonik (UT)</td><td>EN ISO 17640</td><td>EN ISO 11666</td></tr>
<tr><td>Radyografi (RT)</td><td>EN ISO 17636-1</td><td>EN ISO 10675-1</td></tr>
</tbody></table>
<p>Kabul standardının seviyesi de çizimdeki ISO 5817 kalite seviyesiyle uyumlu olmalıdır. Örneğin ISO 5817 B için UT'de genellikle ISO 11666 kabul seviyesi 2, RT'de ISO 10675-1 seviye 1 kullanılır. Bu eşleşme ISO 17635'te tarif edilir.</p>
<h2>VT Raporu</h2>
<p>Gözle muayene her kaynakta yapılır ve diğer tüm yöntemlerin ön koşuludur. İyi bir VT raporunda şunlar görülür:</p>
<ul>
<li>Köşe kaynaklarında ölçülen a ölçüsü veya bacak boyu</li>
<li>Alın kaynaklarında kep yüksekliği, yanma oluğu ve kenar uyumsuzluğu</li>
<li>Yüzey gözenekleri, çatlak, sıçrantı ve ark izleri</li>
<li>Kullanılan ölçüm aracı (kaynak mastarı) ve aydınlatma koşulu</li>
</ul>
<p>"Gözle kontrol edildi, uygun" yazan tek satırlık bir not VT raporu sayılmaz.</p>
<h2>PT ve MT Raporları</h2>
<p>Yüzey çatlaklarını ortaya çıkaran bu yöntemlerin raporlarında kullanılan malzeme setinin (penetrant, geliştirici veya manyetik toz) tipi ve parti numarası, yüzey hazırlığı, bekleme süresi ve MT için mıknatıslama tekniği yazılmalıdır. MT yalnızca ferromanyetik malzemelerde uygulanabilir; paslanmaz östenitik çelikte PT kullanılır.</p>
<h2>UT Raporu</h2>
<p>UT raporları daha tekniktir. Kontrol etmeniz gerekenler:</p>
<ul>
<li>Prob tipi, açısı ve frekansı</li>
<li>Referans bloğu ve kalibrasyon yöntemi (DAC, DGS veya TCG)</li>
<li>Muayene seviyesi (ISO 17640'a göre A, B, C veya D)</li>
<li>Kaydedilen yansımaların yeri, uzunluğu ve genliği</li>
<li>Kabul seviyesine göre her bulgunun değerlendirmesi</li>
</ul>
<p>"Hata bulunmadı" yazan bir UT raporunda tarama kapsamı ve kayıt eşiği belirtilmemişse, raporun neyi kapsadığı belirsizdir.</p>
<h2>RT Raporu</h2>
<p>RT raporunda film veya dijital görüntü numarası, kaynak tipi (X ışını veya izotop), görüntü kalitesi göstergesi (IQI) değeri, film yoğunluğu ve her filmdeki bulgu tanımı bulunmalıdır. Film arşivi raporun ayrılmaz parçasıdır; alıcı istediğinde filmler incelemeye açık olmalıdır.</p>
<h2>Muayene Kapsamı: %10 Ne Demek?</h2>
<p>Şartnamede "%10 UT" yazıyorsa bu, her dikişin %10'u veya dikişlerin %10'u anlamına gelebilir. Hangisinin kastedildiği sözleşmede açık olmalıdır. EN 1090-2, yürütme sınıfına ve kaynak tipine göre ek NDT oranlarını tanımlar. Örnek alınan bölgede ret çıkarsa, kapsamın genişletilmesi kuralları da standartta yer alır.</p>
<h2>Alıcı Olarak Neye Dikkat Etmelisiniz?</h2>
<ol>
<li>Rapordaki parça ve revizyon numarası teslim edilen parçayla eşleşiyor mu?</li>
<li>Kabul seviyesi çizimdeki kalite seviyesine uygun mu?</li>
<li>Kapsam şartnamedeki orana eşit mi?</li>
<li>Muayeneyi yapan kişinin ISO 9712 sertifikası geçerli mi ve yöntemi kapsıyor mu?</li>
<li>Ret alan dikişler varsa onarım ve tekrar muayene raporları ekli mi?</li>
<li>Bekleme süresi gereken çeliklerde muayene zamanı yazılmış mı?</li>
</ol>
<div class="callout"><p><strong>ArmaWeld'de:</strong> VT ve UT muayeneleri ISO 9712 Seviye 2 sertifikalı personelimiz tarafından yapılır. RT çekimi iş ortağımız tarafından yapılır, filmler ekibimizde Seviye 2 personel tarafından değerlendirilir. Raporlar parça, dikiş ve revizyon numarasıyla eşleştirilir ve müşteri portalında siparişe bağlı olarak saklanır. <a href="../ndt.html">NDT hizmetlerimizi inceleyin →</a></p></div>
`,
    faq: [
      ['Muayene raporunu kim imzalamalı?', 'Sonucu değerlendiren ve raporu onaylayan kişi ilgili yöntemde ISO 9712 Seviye 2 veya Seviye 3 sertifikalı olmalıdır. Seviye 1 personel muayeneyi yapabilir ancak sonucu tek başına değerlendiremez.'],
      ['Rapordaki "kayıt seviyesi" ile "kabul seviyesi" farkı nedir?', 'Kayıt seviyesi, raporda not edilmesi gereken en küçük bulguyu tanımlar. Kabul seviyesi ise hangi bulgunun ret sebebi olduğunu belirler. Kayıt edilen her bulgu ret anlamına gelmez.'],
      ['Muayene raporları ne kadar süre saklanmalı?', 'Süre sözleşme, ürün standardı ve sektörle değişir. EN 1090 ve basınçlı ekipman projelerinde genellikle on yıl veya daha uzun saklama istenir. Süreyi sözleşmede belirtmenizi öneririz.'],
      ['Dijital rapor kabul edilir mi?', 'Evet, kimin onayladığı ve ne zaman onaylandığı izlenebiliyorsa elektronik onaylı raporlar kabul görür. Islak imza şartı varsa bu sözleşmede ayrıca belirtilmelidir.']
    ],
    cta_h3: 'Muayene raporlarıyla birlikte teslim edilen kaynaklı parça mı arıyorsunuz?',
    cta_p: 'Çiziminizi ve muayene şartnamenizi gönderin; NDT kapsamını ve rapor setini teklifte netleştirelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'How to Read a Weld Inspection Report: VT, PT, MT, UT and RT',
    meta: 'What should a weld inspection report contain? How to read the standard, acceptance level, extent of testing, indications and personnel data on VT, PT, MT, UT and RT reports, and what buyers should check.',
    og: 'How to Read a Weld Inspection Report',
    tag: 'Quality · NDT',
    h1: 'How to Read a Weld Inspection Report: The Fields a Buyer Should Check',
    crumb: 'Inspection Report',
    read: '8 min read',
    body: `
<p>The inspection reports that arrive with a welded part are the written proof that it was made to specification. Yet many purchasing and quality teams file them after checking only whether they say "accepted". This article explains which fields to look at to judge whether a report actually proves anything.</p>
<h2>What Every Inspection Report Should Contain</h2>
<p>Whatever the method, a traceable report should include:</p>
<table class="data-table"><thead><tr><th>Field</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Part, drawing and revision number</td><td>Ties the report to a specific part</td></tr>
<tr><td>Weld or seam number</td><td>Links to the weld map</td></tr>
<tr><td>Testing standard</td><td>Defines how the test was done (e.g. ISO 17637, ISO 17640)</td></tr>
<tr><td>Acceptance standard and level</td><td>Defines which indications are acceptable (e.g. ISO 5817 B, ISO 11666 level 2)</td></tr>
<tr><td>Extent of testing</td><td>What percentage of the weld was tested</td></tr>
<tr><td>Time of testing</td><td>How long after welding (critical for steels at risk of delayed cracking)</td></tr>
<tr><td>Equipment and calibration</td><td>Instrument serial number, calibration date</td></tr>
<tr><td>Indications and positions</td><td>Discontinuities found, their size and location</td></tr>
<tr><td>Result</td><td>Accept or reject, per weld</td></tr>
<tr><td>Personnel and level</td><td>Who tested and who approved, ISO 9712 level</td></tr>
</tbody></table>
<p>If any of these is missing, the report may cause trouble in an audit or a failure investigation.</p>
<h2>Testing Standard vs Acceptance Standard</h2>
<p>This is the point most often confused. The testing standard says <em>how</em> the test is performed, the acceptance standard says <em>how the result is judged</em>.</p>
<table class="data-table"><thead><tr><th>Method</th><th>Testing standard</th><th>Typical acceptance standard</th></tr></thead><tbody>
<tr><td>Visual (VT)</td><td>EN ISO 17637</td><td>EN ISO 5817</td></tr>
<tr><td>Penetrant (PT)</td><td>EN ISO 3452-1</td><td>EN ISO 23277</td></tr>
<tr><td>Magnetic particle (MT)</td><td>EN ISO 17638</td><td>EN ISO 23278</td></tr>
<tr><td>Ultrasonic (UT)</td><td>EN ISO 17640</td><td>EN ISO 11666</td></tr>
<tr><td>Radiography (RT)</td><td>EN ISO 17636-1</td><td>EN ISO 10675-1</td></tr>
</tbody></table>
<p>The acceptance level must also match the ISO 5817 quality level on the drawing. For ISO 5817 B, UT usually uses ISO 11666 acceptance level 2 and RT uses ISO 10675-1 level 1. ISO 17635 describes this correlation.</p>
<h2>The VT Report</h2>
<p>Visual testing is done on every weld and is a precondition for all other methods. A good VT report shows:</p>
<ul>
<li>Measured throat thickness or leg length on fillet welds</li>
<li>Cap height, undercut and misalignment on butt welds</li>
<li>Surface porosity, cracks, spatter and arc strikes</li>
<li>The gauge used and lighting conditions</li>
</ul>
<p>A one-line note saying "visually checked, OK" is not a VT report.</p>
<h2>PT and MT Reports</h2>
<p>These surface-crack methods should record the type and batch of consumables (penetrant, developer or magnetic ink), surface preparation, dwell time and, for MT, the magnetisation technique. MT only works on ferromagnetic materials; austenitic stainless steel needs PT.</p>
<h2>The UT Report</h2>
<p>UT reports are more technical. Check:</p>
<ul>
<li>Probe type, angle and frequency</li>
<li>Reference block and calibration method (DAC, DGS or TCG)</li>
<li>Testing level (A, B, C or D to ISO 17640)</li>
<li>Position, length and amplitude of recorded indications</li>
<li>Assessment of each indication against the acceptance level</li>
</ul>
<p>A UT report that says "no defects found" without stating scan coverage and recording threshold leaves unclear what it covers.</p>
<h2>The RT Report</h2>
<p>An RT report should list the film or image number, source type (X-ray or isotope), image quality indicator (IQI) value, film density and the indications on each film. The film archive is part of the report and should be available to the buyer on request.</p>
<h2>Extent of Testing: What Does 10% Mean?</h2>
<p>"10% UT" in a specification can mean 10% of each weld or 10% of the welds. The contract should say which. EN 1090-2 defines supplementary NDT rates by execution class and weld type, and the standard also sets rules for extending the scope when a sampled area fails.</p>
<h2>What Should a Buyer Check?</h2>
<ol>
<li>Do the part and revision numbers match the delivered part?</li>
<li>Does the acceptance level match the quality level on the drawing?</li>
<li>Is the extent equal to the specified rate?</li>
<li>Is the inspector's ISO 9712 certificate valid and does it cover the method?</li>
<li>If welds were rejected, are the repair and re-test reports attached?</li>
<li>For steels needing a hold time, is the time of testing stated?</li>
</ol>
<div class="callout"><p><strong>At ArmaWeld:</strong> VT and UT are carried out by our ISO 9712 Level 2 certified personnel. RT exposure is performed by our partner and films are evaluated by Level 2 personnel in our team. Reports are matched to part, weld and revision numbers and stored against the order in the customer portal. <a href="../ndt.html">See our NDT services →</a></p></div>
`,
    faq: [
      ['Who should sign an inspection report?', 'The person evaluating the result and approving the report should hold ISO 9712 Level 2 or Level 3 in the method. Level 1 personnel may perform the test but cannot evaluate the result on their own.'],
      ['What is the difference between recording level and acceptance level?', 'The recording level defines the smallest indication that must be noted. The acceptance level defines which indications cause rejection. A recorded indication is not automatically a reject.'],
      ['How long should inspection reports be kept?', 'It depends on contract, product standard and sector. EN 1090 and pressure equipment projects usually require ten years or more. We recommend stating the period in the contract.'],
      ['Are digital reports accepted?', 'Yes, as long as it is traceable who approved them and when. If wet signatures are required, this should be stated in the contract.']
    ],
    cta_h3: 'Looking for welded parts delivered with full inspection reports?',
    cta_p: 'Send your drawing and inspection specification and we will define the NDT scope and report set in our quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Schweißnahtprüfbericht richtig lesen: VT, PT, MT, UT und RT',
    meta: 'Was gehört in einen Schweißnahtprüfbericht? So lesen Sie Prüfnorm, Bewertungsgruppe, Prüfumfang, Anzeigen und Personalangaben in VT-, PT-, MT-, UT- und RT-Berichten, und was Einkäufer prüfen sollten.',
    og: 'Schweißnahtprüfbericht richtig lesen',
    tag: 'Qualität · ZfP',
    h1: 'Schweißnahtprüfbericht richtig lesen: Diese Angaben sollte der Einkauf prüfen',
    crumb: 'Prüfbericht',
    read: '8 Min. Lesezeit',
    body: `
<p>Die Prüfberichte, die mit einem geschweißten Bauteil geliefert werden, sind der schriftliche Nachweis, dass es spezifikationsgerecht gefertigt wurde. Viele Einkaufs- und Qualitätsabteilungen legen sie jedoch ab, sobald „i.O." darauf steht. Dieser Beitrag zeigt, welche Angaben Sie prüfen sollten, um zu beurteilen, ob ein Bericht tatsächlich etwas belegt.</p>
<h2>Was jeder Prüfbericht enthalten sollte</h2>
<p>Unabhängig vom Verfahren gehört in einen rückverfolgbaren Bericht:</p>
<table class="data-table"><thead><tr><th>Angabe</th><th>Warum wichtig?</th></tr></thead><tbody>
<tr><td>Teil-, Zeichnungs- und Revisionsnummer</td><td>Ordnet den Bericht eindeutig einem Teil zu</td></tr>
<tr><td>Naht- oder Schweißnummer</td><td>Verknüpft mit dem Schweißnahtplan</td></tr>
<tr><td>Prüfnorm</td><td>Legt fest, wie geprüft wurde (z. B. ISO 17637, ISO 17640)</td></tr>
<tr><td>Zulässigkeitsnorm und -grenze</td><td>Legt fest, welche Anzeigen zulässig sind (z. B. ISO 5817 B, ISO 11666 Stufe 2)</td></tr>
<tr><td>Prüfumfang</td><td>Welcher Anteil der Naht geprüft wurde</td></tr>
<tr><td>Prüfzeitpunkt</td><td>Abstand zum Schweißen (kritisch bei Gefahr verzögerter Rissbildung)</td></tr>
<tr><td>Gerät und Kalibrierung</td><td>Seriennummer, Kalibrierdatum</td></tr>
<tr><td>Anzeigen und Lage</td><td>Gefundene Unregelmäßigkeiten, Größe und Position</td></tr>
<tr><td>Ergebnis</td><td>Zulässig oder unzulässig, je Naht</td></tr>
<tr><td>Personal und Stufe</td><td>Prüfer und Freigebender, Stufe nach ISO 9712</td></tr>
</tbody></table>
<p>Fehlt eine dieser Angaben, kann der Bericht bei einem Audit oder einer Schadensanalyse zum Problem werden.</p>
<h2>Prüfnorm und Zulässigkeitsnorm</h2>
<p>Das wird am häufigsten verwechselt. Die Prüfnorm beschreibt, <em>wie</em> geprüft wird, die Zulässigkeitsnorm, <em>wie das Ergebnis bewertet</em> wird.</p>
<table class="data-table"><thead><tr><th>Verfahren</th><th>Prüfnorm</th><th>Typische Zulässigkeitsnorm</th></tr></thead><tbody>
<tr><td>Sichtprüfung (VT)</td><td>DIN EN ISO 17637</td><td>DIN EN ISO 5817</td></tr>
<tr><td>Eindringprüfung (PT)</td><td>DIN EN ISO 3452-1</td><td>DIN EN ISO 23277</td></tr>
<tr><td>Magnetpulverprüfung (MT)</td><td>DIN EN ISO 17638</td><td>DIN EN ISO 23278</td></tr>
<tr><td>Ultraschallprüfung (UT)</td><td>DIN EN ISO 17640</td><td>DIN EN ISO 11666</td></tr>
<tr><td>Durchstrahlungsprüfung (RT)</td><td>DIN EN ISO 17636-1</td><td>DIN EN ISO 10675-1</td></tr>
</tbody></table>
<p>Die Zulässigkeitsgrenze muss zur Bewertungsgruppe nach ISO 5817 auf der Zeichnung passen. Für ISO 5817 B gilt bei UT meist ISO 11666 Zulässigkeitsgrenze 2, bei RT ISO 10675-1 Stufe 1. Diese Zuordnung beschreibt ISO 17635.</p>
<h2>Der VT-Bericht</h2>
<p>Die Sichtprüfung erfolgt an jeder Naht und ist Voraussetzung für alle weiteren Verfahren. Ein guter VT-Bericht enthält:</p>
<ul>
<li>Gemessenes a-Maß oder Schenkellänge bei Kehlnähten</li>
<li>Nahtüberhöhung, Einbrandkerben und Kantenversatz bei Stumpfnähten</li>
<li>Oberflächenporen, Risse, Spritzer und Zündstellen</li>
<li>Verwendete Messlehre und Beleuchtung</li>
</ul>
<p>Eine Zeile „Sichtgeprüft, i.O." ist kein VT-Bericht.</p>
<h2>PT- und MT-Berichte</h2>
<p>Bei diesen Oberflächenrissprüfungen gehören Art und Charge der Prüfmittel (Eindringmittel, Entwickler oder Prüfmittel für MT), die Oberflächenvorbereitung, die Eindringzeit und bei MT die Magnetisierungstechnik in den Bericht. MT funktioniert nur bei ferromagnetischen Werkstoffen; austenitischer Edelstahl wird mit PT geprüft.</p>
<h2>Der UT-Bericht</h2>
<p>UT-Berichte sind technischer. Prüfen Sie:</p>
<ul>
<li>Prüfkopftyp, Winkel und Frequenz</li>
<li>Vergleichskörper und Justierverfahren (DAC, AVG oder TCG)</li>
<li>Prüfklasse (A, B, C oder D nach ISO 17640)</li>
<li>Lage, Länge und Echohöhe der registrierten Anzeigen</li>
<li>Bewertung jeder Anzeige gegen die Zulässigkeitsgrenze</li>
</ul>
<p>Ein UT-Bericht mit „keine Anzeigen" ohne Angabe von Prüfumfang und Registriergrenze lässt offen, was er abdeckt.</p>
<h2>Der RT-Bericht</h2>
<p>Ein RT-Bericht nennt Film- oder Bildnummer, Strahlenquelle (Röntgen oder Isotop), Bildgüteprüfkörper (BPK), Filmschwärzung und die Anzeigen je Film. Das Filmarchiv gehört zum Bericht und sollte dem Kunden auf Wunsch zugänglich sein.</p>
<h2>Prüfumfang: Was heißt 10 %?</h2>
<p>„10 % UT" kann 10 % jeder Naht oder 10 % der Nähte bedeuten. Der Vertrag sollte das festlegen. EN 1090-2 definiert ergänzende ZfP-Umfänge nach Ausführungsklasse und Nahtart sowie Regeln für die Erweiterung, wenn eine Stichprobe unzulässig ist.</p>
<h2>Was der Einkäufer prüfen sollte</h2>
<ol>
<li>Stimmen Teil- und Revisionsnummer mit dem gelieferten Teil überein?</li>
<li>Passt die Zulässigkeitsgrenze zur Bewertungsgruppe auf der Zeichnung?</li>
<li>Entspricht der Umfang der Vorgabe?</li>
<li>Ist das ISO-9712-Zertifikat des Prüfers gültig und für das Verfahren?</li>
<li>Liegen bei unzulässigen Nähten Reparatur- und Wiederholungsberichte bei?</li>
<li>Ist bei Stählen mit Wartezeit der Prüfzeitpunkt angegeben?</li>
</ol>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> VT und UT führt unser nach ISO 9712 Stufe 2 zertifiziertes Personal durch. RT-Aufnahmen erstellt unser Partner, die Filme bewertet Stufe-2-Personal in unserem Team. Berichte werden Teil-, Naht- und Revisionsnummer zugeordnet und im Kundenportal beim Auftrag abgelegt. <a href="../ndt.html">Unsere ZfP-Leistungen →</a></p></div>
`,
    faq: [
      ['Wer muss einen Prüfbericht unterschreiben?', 'Wer das Ergebnis bewertet und freigibt, braucht im jeweiligen Verfahren ISO 9712 Stufe 2 oder 3. Stufe-1-Personal darf prüfen, aber nicht eigenständig bewerten.'],
      ['Was unterscheidet Registriergrenze und Zulässigkeitsgrenze?', 'Die Registriergrenze legt die kleinste zu dokumentierende Anzeige fest, die Zulässigkeitsgrenze, welche Anzeige zur Zurückweisung führt. Nicht jede registrierte Anzeige ist unzulässig.'],
      ['Wie lange werden Prüfberichte aufbewahrt?', 'Das hängt von Vertrag, Produktnorm und Branche ab. Bei EN 1090 und Druckgeräten sind zehn Jahre oder mehr üblich. Legen Sie die Frist im Vertrag fest.'],
      ['Werden digitale Berichte akzeptiert?', 'Ja, sofern nachvollziehbar ist, wer wann freigegeben hat. Wird eine handschriftliche Unterschrift gefordert, muss das im Vertrag stehen.']
    ],
    cta_h3: 'Sie suchen Schweißteile mit vollständigen Prüfberichten?',
    cta_p: 'Senden Sie Zeichnung und Prüfspezifikation. Wir legen ZfP-Umfang und Berichtsumfang im Angebot fest.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Cómo leer un informe de inspección de soldadura: VT, PT, MT, UT y RT',
    meta: '¿Qué debe incluir un informe de inspección de soldadura? Cómo leer norma, nivel de aceptación, alcance, indicaciones y datos del personal en informes VT, PT, MT, UT y RT, y qué debe revisar el comprador.',
    og: 'Cómo leer un informe de inspección de soldadura',
    tag: 'Calidad · END',
    h1: 'Cómo leer un informe de inspección de soldadura: los campos que el comprador debe revisar',
    crumb: 'Informe de inspección',
    read: '8 min de lectura',
    body: `
<p>Los informes de inspección que acompañan a una pieza soldada son la prueba escrita de que se fabricó según especificación. Sin embargo, muchos equipos de compras y calidad los archivan tras comprobar solo que ponen "aceptado". Explicamos qué campos mirar para saber si un informe demuestra realmente algo.</p>
<h2>Lo que debe contener todo informe</h2>
<p>Sea cual sea el método, un informe trazable debe incluir:</p>
<table class="data-table"><thead><tr><th>Campo</th><th>Por qué importa</th></tr></thead><tbody>
<tr><td>Pieza, plano y revisión</td><td>Vincula el informe a una pieza concreta</td></tr>
<tr><td>Número de soldadura o cordón</td><td>Enlaza con el mapa de soldaduras</td></tr>
<tr><td>Norma de ensayo</td><td>Define cómo se hizo el ensayo (p. ej. ISO 17637, ISO 17640)</td></tr>
<tr><td>Norma y nivel de aceptación</td><td>Define qué indicaciones se aceptan (p. ej. ISO 5817 B, ISO 11666 nivel 2)</td></tr>
<tr><td>Alcance del ensayo</td><td>Qué porcentaje del cordón se ensayó</td></tr>
<tr><td>Momento del ensayo</td><td>Tiempo transcurrido desde la soldadura (clave si hay riesgo de fisuración diferida)</td></tr>
<tr><td>Equipo y calibración</td><td>Número de serie, fecha de calibración</td></tr>
<tr><td>Indicaciones y posición</td><td>Discontinuidades, tamaño y ubicación</td></tr>
<tr><td>Resultado</td><td>Aceptado o rechazado, por cordón</td></tr>
<tr><td>Personal y nivel</td><td>Quién ensayó y quién aprobó, nivel ISO 9712</td></tr>
</tbody></table>
<p>Si falta alguno, el informe puede dar problemas en una auditoría o en un análisis de fallo.</p>
<h2>Norma de ensayo frente a norma de aceptación</h2>
<p>Es lo que más se confunde. La norma de ensayo dice <em>cómo</em> se realiza; la de aceptación, <em>cómo se juzga</em> el resultado.</p>
<table class="data-table"><thead><tr><th>Método</th><th>Norma de ensayo</th><th>Norma de aceptación típica</th></tr></thead><tbody>
<tr><td>Visual (VT)</td><td>EN ISO 17637</td><td>EN ISO 5817</td></tr>
<tr><td>Líquidos penetrantes (PT)</td><td>EN ISO 3452-1</td><td>EN ISO 23277</td></tr>
<tr><td>Partículas magnéticas (MT)</td><td>EN ISO 17638</td><td>EN ISO 23278</td></tr>
<tr><td>Ultrasonidos (UT)</td><td>EN ISO 17640</td><td>EN ISO 11666</td></tr>
<tr><td>Radiografía (RT)</td><td>EN ISO 17636-1</td><td>EN ISO 10675-1</td></tr>
</tbody></table>
<p>El nivel de aceptación debe corresponder al nivel de calidad ISO 5817 del plano. Para ISO 5817 B se suele usar en UT el nivel de aceptación 2 de ISO 11666 y en RT el nivel 1 de ISO 10675-1. La ISO 17635 describe esta correspondencia.</p>
<h2>El informe VT</h2>
<p>La inspección visual se hace en todos los cordones y es requisito previo de los demás métodos. Un buen informe VT recoge:</p>
<ul>
<li>Garganta o lado medido en soldaduras en ángulo</li>
<li>Sobreespesor, mordeduras y desalineación en soldaduras a tope</li>
<li>Poros superficiales, fisuras, proyecciones y cebados de arco</li>
<li>Galga utilizada y condiciones de iluminación</li>
</ul>
<p>Una línea que diga "revisado visualmente, conforme" no es un informe VT.</p>
<h2>Informes PT y MT</h2>
<p>En estos métodos de detección de fisuras superficiales deben constar el tipo y lote de productos (penetrante, revelador o tinta magnética), la preparación superficial, el tiempo de penetración y, en MT, la técnica de magnetización. MT solo sirve en materiales ferromagnéticos; el inoxidable austenítico requiere PT.</p>
<h2>El informe UT</h2>
<p>Es más técnico. Revise:</p>
<ul>
<li>Tipo de palpador, ángulo y frecuencia</li>
<li>Bloque de referencia y método de calibración (DAC, DGS o TCG)</li>
<li>Nivel de ensayo (A, B, C o D según ISO 17640)</li>
<li>Posición, longitud y amplitud de las indicaciones registradas</li>
<li>Evaluación de cada indicación frente al nivel de aceptación</li>
</ul>
<p>Un informe UT con "sin defectos" que no indica cobertura ni umbral de registro deja abierto lo que realmente cubre.</p>
<h2>El informe RT</h2>
<p>Debe indicar número de película o imagen, tipo de fuente (rayos X o isótopo), valor del indicador de calidad de imagen (IQI), densidad y las indicaciones de cada película. El archivo de películas forma parte del informe y debe estar disponible para el cliente.</p>
<h2>Alcance: ¿qué significa 10 %?</h2>
<p>"10 % UT" puede significar el 10 % de cada cordón o el 10 % de los cordones. El contrato debe aclararlo. La EN 1090-2 define porcentajes de END complementarios según clase de ejecución y tipo de soldadura, y reglas para ampliar el alcance si una muestra resulta rechazada.</p>
<h2>Qué debe revisar el comprador</h2>
<ol>
<li>¿Coinciden pieza y revisión con lo entregado?</li>
<li>¿El nivel de aceptación corresponde al nivel de calidad del plano?</li>
<li>¿El alcance es el especificado?</li>
<li>¿El certificado ISO 9712 del inspector está vigente y cubre el método?</li>
<li>Si hubo rechazos, ¿se adjuntan los informes de reparación y reensayo?</li>
<li>En aceros con tiempo de espera, ¿consta el momento del ensayo?</li>
</ol>
<div class="callout"><p><strong>En ArmaWeld:</strong> VT y UT los realiza nuestro personal certificado ISO 9712 nivel 2. La exposición RT la hace nuestro socio y las películas las evalúa personal de nivel 2 de nuestro equipo. Los informes se vinculan a pieza, cordón y revisión y se guardan con el pedido en el portal del cliente. <a href="../ndt.html">Nuestros servicios de END →</a></p></div>
`,
    faq: [
      ['¿Quién debe firmar un informe de inspección?', 'Quien evalúa el resultado y aprueba el informe debe tener nivel 2 o 3 ISO 9712 en el método. El personal de nivel 1 puede ensayar, pero no evaluar por sí solo.'],
      ['¿Qué diferencia hay entre nivel de registro y nivel de aceptación?', 'El nivel de registro fija la indicación más pequeña que debe anotarse; el de aceptación, cuáles provocan rechazo. Una indicación registrada no es automáticamente un rechazo.'],
      ['¿Cuánto tiempo se guardan los informes?', 'Depende del contrato, la norma de producto y el sector. En EN 1090 y equipos a presión suele pedirse diez años o más. Recomendamos fijarlo en el contrato.'],
      ['¿Se aceptan informes digitales?', 'Sí, siempre que conste quién aprobó y cuándo. Si se exige firma manuscrita, debe indicarse en el contrato.']
    ],
    cta_h3: '¿Busca piezas soldadas entregadas con informes de inspección completos?',
    cta_p: 'Envíe plano y especificación de inspección; definimos el alcance de END y el conjunto de informes en la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Lire un rapport de contrôle de soudure : VT, PT, MT, UT et RT',
    meta: 'Que doit contenir un rapport de contrôle de soudure ? Comment lire la norme, le niveau d’acceptation, l’étendue, les indications et le personnel sur les rapports VT, PT, MT, UT et RT, et ce que l’acheteur doit vérifier.',
    og: 'Lire un rapport de contrôle de soudure',
    tag: 'Qualité · CND',
    h1: 'Lire un rapport de contrôle de soudure : les champs que l’acheteur doit vérifier',
    crumb: 'Rapport de contrôle',
    read: '8 min de lecture',
    body: `
<p>Les rapports de contrôle livrés avec une pièce soudée sont la preuve écrite qu’elle a été fabriquée selon la spécification. Pourtant, beaucoup d’équipes achats et qualité les archivent après avoir seulement vérifié la mention « conforme ». Voici les champs à regarder pour savoir si un rapport prouve réellement quelque chose.</p>
<h2>Ce que tout rapport doit contenir</h2>
<p>Quelle que soit la méthode, un rapport traçable comporte :</p>
<table class="data-table"><thead><tr><th>Champ</th><th>Pourquoi c’est important</th></tr></thead><tbody>
<tr><td>Pièce, plan et indice</td><td>Rattache le rapport à une pièce précise</td></tr>
<tr><td>Numéro de soudure ou de cordon</td><td>Lien avec le plan de soudage</td></tr>
<tr><td>Norme de contrôle</td><td>Définit comment le contrôle est fait (ex. ISO 17637, ISO 17640)</td></tr>
<tr><td>Norme et niveau d’acceptation</td><td>Définit les indications admissibles (ex. ISO 5817 B, ISO 11666 niveau 2)</td></tr>
<tr><td>Étendue du contrôle</td><td>Pourcentage du cordon contrôlé</td></tr>
<tr><td>Moment du contrôle</td><td>Délai après soudage (critique en cas de risque de fissuration différée)</td></tr>
<tr><td>Équipement et étalonnage</td><td>Numéro de série, date d’étalonnage</td></tr>
<tr><td>Indications et position</td><td>Discontinuités, dimensions et emplacement</td></tr>
<tr><td>Résultat</td><td>Accepté ou refusé, par cordon</td></tr>
<tr><td>Personnel et niveau</td><td>Contrôleur et approbateur, niveau ISO 9712</td></tr>
</tbody></table>
<p>Si l’un de ces champs manque, le rapport peut poser problème lors d’un audit ou d’une expertise.</p>
<h2>Norme de contrôle et norme d’acceptation</h2>
<p>C’est la confusion la plus fréquente. La norme de contrôle dit <em>comment</em> contrôler, la norme d’acceptation <em>comment juger</em> le résultat.</p>
<table class="data-table"><thead><tr><th>Méthode</th><th>Norme de contrôle</th><th>Norme d’acceptation courante</th></tr></thead><tbody>
<tr><td>Visuel (VT)</td><td>NF EN ISO 17637</td><td>NF EN ISO 5817</td></tr>
<tr><td>Ressuage (PT)</td><td>NF EN ISO 3452-1</td><td>NF EN ISO 23277</td></tr>
<tr><td>Magnétoscopie (MT)</td><td>NF EN ISO 17638</td><td>NF EN ISO 23278</td></tr>
<tr><td>Ultrasons (UT)</td><td>NF EN ISO 17640</td><td>NF EN ISO 11666</td></tr>
<tr><td>Radiographie (RT)</td><td>NF EN ISO 17636-1</td><td>NF EN ISO 10675-1</td></tr>
</tbody></table>
<p>Le niveau d’acceptation doit correspondre au niveau de qualité ISO 5817 du plan. Pour ISO 5817 B, on utilise généralement en UT le niveau d’acceptation 2 de l’ISO 11666 et en RT le niveau 1 de l’ISO 10675-1. L’ISO 17635 décrit cette correspondance.</p>
<h2>Le rapport VT</h2>
<p>Le contrôle visuel est fait sur chaque cordon et précède toutes les autres méthodes. Un bon rapport VT indique :</p>
<ul>
<li>La gorge ou le côté mesuré des soudures d’angle</li>
<li>La surépaisseur, les caniveaux et le désalignement des soudures bout à bout</li>
<li>Les soufflures débouchantes, fissures, projections et amorçages</li>
<li>La jauge utilisée et l’éclairage</li>
</ul>
<p>Une ligne « contrôlé visuellement, conforme » n’est pas un rapport VT.</p>
<h2>Rapports PT et MT</h2>
<p>Ces méthodes de recherche de fissures débouchantes doivent préciser le type et le lot des produits (pénétrant, révélateur ou liqueur magnétique), la préparation de surface, le temps d’imprégnation et, en MT, la technique d’aimantation. La MT ne s’applique qu’aux matériaux ferromagnétiques ; l’inox austénitique se contrôle par ressuage.</p>
<h2>Le rapport UT</h2>
<p>Plus technique, il doit indiquer :</p>
<ul>
<li>Type de traducteur, angle et fréquence</li>
<li>Bloc de référence et méthode de réglage (DAC, DGS ou TCG)</li>
<li>Niveau de contrôle (A, B, C ou D selon ISO 17640)</li>
<li>Position, longueur et amplitude des indications enregistrées</li>
<li>Évaluation de chaque indication par rapport au niveau d’acceptation</li>
</ul>
<p>Un rapport UT « aucun défaut » sans couverture ni seuil d’enregistrement laisse flou ce qu’il couvre.</p>
<h2>Le rapport RT</h2>
<p>Il mentionne le numéro de film ou d’image, la source (rayons X ou isotope), la valeur de l’indicateur de qualité d’image (IQI), la densité et les indications de chaque film. L’archive des films fait partie du rapport et doit être accessible au client.</p>
<h2>Étendue : que veut dire 10 % ?</h2>
<p>« 10 % UT » peut signifier 10 % de chaque cordon ou 10 % des cordons. Le contrat doit préciser. L’EN 1090-2 définit des taux de CND complémentaires selon la classe d’exécution et le type de soudure, ainsi que les règles d’extension si un échantillon est refusé.</p>
<h2>Ce que l’acheteur doit vérifier</h2>
<ol>
<li>Pièce et indice correspondent-ils à la pièce livrée ?</li>
<li>Le niveau d’acceptation correspond-il au niveau de qualité du plan ?</li>
<li>L’étendue est-elle celle spécifiée ?</li>
<li>Le certificat ISO 9712 du contrôleur est-il valide pour la méthode ?</li>
<li>En cas de refus, les rapports de réparation et de recontrôle sont-ils joints ?</li>
<li>Pour les aciers nécessitant un délai, le moment du contrôle est-il indiqué ?</li>
</ol>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> VT et UT sont réalisés par notre personnel certifié ISO 9712 niveau 2. Les tirs RT sont réalisés par notre partenaire et les films interprétés par du personnel niveau 2 de notre équipe. Les rapports sont rattachés à la pièce, au cordon et à l’indice et archivés avec la commande dans le portail client. <a href="../ndt.html">Nos prestations CND →</a></p></div>
`,
    faq: [
      ['Qui doit signer un rapport de contrôle ?', 'La personne qui interprète le résultat et approuve le rapport doit être certifiée ISO 9712 niveau 2 ou 3 dans la méthode. Un niveau 1 peut contrôler mais pas interpréter seul.'],
      ['Différence entre niveau d’enregistrement et niveau d’acceptation ?', 'Le niveau d’enregistrement fixe la plus petite indication à consigner ; le niveau d’acceptation, celles qui entraînent un refus. Une indication enregistrée n’est pas forcément refusée.'],
      ['Combien de temps conserver les rapports ?', 'Selon le contrat, la norme produit et le secteur. En EN 1090 et équipements sous pression, dix ans ou plus sont courants. Précisez la durée au contrat.'],
      ['Les rapports numériques sont-ils acceptés ?', 'Oui, si l’on peut tracer qui a approuvé et quand. Si une signature manuscrite est exigée, le contrat doit le préciser.']
    ],
    cta_h3: 'Vous cherchez des pièces soudées livrées avec rapports de contrôle complets ?',
    cta_p: 'Envoyez plan et spécification de contrôle ; nous définissons l’étendue CND et le dossier de rapports dans l’offre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Come leggere un rapporto di controllo saldature: VT, PT, MT, UT e RT',
    meta: 'Cosa deve contenere un rapporto di controllo delle saldature? Come leggere norma, livello di accettabilità, estensione, indicazioni e personale nei rapporti VT, PT, MT, UT e RT, e cosa deve verificare l’acquirente.',
    og: 'Come leggere un rapporto di controllo saldature',
    tag: 'Qualità · CND',
    h1: 'Come leggere un rapporto di controllo saldature: i campi che l’acquirente deve verificare',
    crumb: 'Rapporto di controllo',
    read: '8 min di lettura',
    body: `
<p>I rapporti di controllo che accompagnano un pezzo saldato sono la prova scritta che è stato realizzato secondo specifica. Molti uffici acquisti e qualità però li archiviano dopo aver controllato solo la dicitura "conforme". Spieghiamo quali campi guardare per capire se un rapporto dimostra davvero qualcosa.</p>
<h2>Cosa deve contenere ogni rapporto</h2>
<p>Qualunque sia il metodo, un rapporto tracciabile riporta:</p>
<table class="data-table"><thead><tr><th>Campo</th><th>Perché conta</th></tr></thead><tbody>
<tr><td>Pezzo, disegno e revisione</td><td>Collega il rapporto a un pezzo preciso</td></tr>
<tr><td>Numero di saldatura o cordone</td><td>Collega alla mappa saldature</td></tr>
<tr><td>Norma di prova</td><td>Definisce come è stata eseguita la prova (es. ISO 17637, ISO 17640)</td></tr>
<tr><td>Norma e livello di accettabilità</td><td>Definisce quali indicazioni sono accettabili (es. ISO 5817 B, ISO 11666 livello 2)</td></tr>
<tr><td>Estensione del controllo</td><td>Percentuale del cordone controllata</td></tr>
<tr><td>Momento del controllo</td><td>Tempo trascorso dalla saldatura (critico se c’è rischio di cricche ritardate)</td></tr>
<tr><td>Strumento e taratura</td><td>Numero di serie, data di taratura</td></tr>
<tr><td>Indicazioni e posizione</td><td>Discontinuità rilevate, dimensione e posizione</td></tr>
<tr><td>Esito</td><td>Accettato o respinto, per cordone</td></tr>
<tr><td>Personale e livello</td><td>Chi ha controllato e chi ha approvato, livello ISO 9712</td></tr>
</tbody></table>
<p>Se manca uno di questi campi, il rapporto può creare problemi in un audit o in un’analisi di guasto.</p>
<h2>Norma di prova e norma di accettabilità</h2>
<p>È la confusione più frequente. La norma di prova dice <em>come</em> si esegue il controllo, quella di accettabilità <em>come si giudica</em> il risultato.</p>
<table class="data-table"><thead><tr><th>Metodo</th><th>Norma di prova</th><th>Norma di accettabilità tipica</th></tr></thead><tbody>
<tr><td>Visivo (VT)</td><td>UNI EN ISO 17637</td><td>UNI EN ISO 5817</td></tr>
<tr><td>Liquidi penetranti (PT)</td><td>UNI EN ISO 3452-1</td><td>UNI EN ISO 23277</td></tr>
<tr><td>Magnetoscopia (MT)</td><td>UNI EN ISO 17638</td><td>UNI EN ISO 23278</td></tr>
<tr><td>Ultrasuoni (UT)</td><td>UNI EN ISO 17640</td><td>UNI EN ISO 11666</td></tr>
<tr><td>Radiografia (RT)</td><td>UNI EN ISO 17636-1</td><td>UNI EN ISO 10675-1</td></tr>
</tbody></table>
<p>Il livello di accettabilità deve corrispondere al livello di qualità ISO 5817 a disegno. Per ISO 5817 B si usa di solito in UT il livello 2 della ISO 11666 e in RT il livello 1 della ISO 10675-1. La ISO 17635 descrive questa corrispondenza.</p>
<h2>Il rapporto VT</h2>
<p>Il controllo visivo si esegue su ogni cordone ed è prerequisito di tutti gli altri metodi. Un buon rapporto VT riporta:</p>
<ul>
<li>Sezione di gola o lato misurati nelle saldature d’angolo</li>
<li>Sovrametallo, incisioni marginali e disallineamento nelle saldature testa a testa</li>
<li>Porosità superficiali, cricche, spruzzi e colpi d’arco</li>
<li>Calibro usato e condizioni di illuminazione</li>
</ul>
<p>Una riga "controllato visivamente, conforme" non è un rapporto VT.</p>
<h2>Rapporti PT e MT</h2>
<p>Per questi metodi di ricerca di cricche superficiali vanno indicati tipo e lotto dei prodotti (penetrante, rivelatore o liquido magnetico), preparazione della superficie, tempo di penetrazione e, per MT, la tecnica di magnetizzazione. La MT si applica solo a materiali ferromagnetici; l’inox austenitico si controlla con PT.</p>
<h2>Il rapporto UT</h2>
<p>È più tecnico. Verificate:</p>
<ul>
<li>Tipo di sonda, angolo e frequenza</li>
<li>Blocco di riferimento e metodo di taratura (DAC, DGS o TCG)</li>
<li>Livello di prova (A, B, C o D secondo ISO 17640)</li>
<li>Posizione, lunghezza e ampiezza delle indicazioni registrate</li>
<li>Valutazione di ogni indicazione rispetto al livello di accettabilità</li>
</ul>
<p>Un rapporto UT con "nessun difetto" senza copertura e soglia di registrazione lascia indefinito ciò che copre.</p>
<h2>Il rapporto RT</h2>
<p>Riporta numero di pellicola o immagine, sorgente (raggi X o isotopo), valore dell’indicatore di qualità d’immagine (IQI), densità e indicazioni per ogni pellicola. L’archivio pellicole fa parte del rapporto e deve essere disponibile al cliente.</p>
<h2>Estensione: cosa significa 10%?</h2>
<p>"10% UT" può voler dire il 10% di ogni cordone o il 10% dei cordoni. Il contratto deve chiarirlo. La EN 1090-2 definisce percentuali di CND supplementari per classe di esecuzione e tipo di saldatura, e regole di estensione se un campione risulta non accettabile.</p>
<h2>Cosa deve verificare l’acquirente</h2>
<ol>
<li>Pezzo e revisione coincidono con quanto consegnato?</li>
<li>Il livello di accettabilità corrisponde al livello di qualità a disegno?</li>
<li>L’estensione è quella prescritta?</li>
<li>Il certificato ISO 9712 dell’operatore è valido per il metodo?</li>
<li>In caso di rifiuti, sono allegati i rapporti di riparazione e ricontrollo?</li>
<li>Per acciai con tempo di attesa, è indicato il momento del controllo?</li>
</ol>
<div class="callout"><p><strong>In ArmaWeld:</strong> VT e UT sono eseguiti dal nostro personale certificato ISO 9712 livello 2. Le esposizioni RT sono eseguite dal nostro partner e le pellicole interpretate da personale di livello 2 del nostro team. I rapporti sono collegati a pezzo, cordone e revisione e archiviati con l’ordine nel portale clienti. <a href="../ndt.html">I nostri servizi CND →</a></p></div>
`,
    faq: [
      ['Chi deve firmare un rapporto di controllo?', 'Chi valuta il risultato e approva il rapporto deve essere certificato ISO 9712 livello 2 o 3 nel metodo. Il livello 1 può eseguire la prova ma non valutarla da solo.'],
      ['Differenza tra livello di registrazione e livello di accettabilità?', 'Il livello di registrazione fissa la più piccola indicazione da annotare; quello di accettabilità quali indicazioni portano al rifiuto. Un’indicazione registrata non è automaticamente un rifiuto.'],
      ['Per quanto tempo si conservano i rapporti?', 'Dipende da contratto, norma di prodotto e settore. Per EN 1090 e attrezzature a pressione sono comuni dieci anni o più. Consigliamo di indicarlo nel contratto.'],
      ['I rapporti digitali sono accettati?', 'Sì, se è tracciabile chi ha approvato e quando. Se è richiesta la firma autografa, va indicato nel contratto.']
    ],
    cta_h3: 'Cercate pezzi saldati consegnati con rapporti di controllo completi?',
    cta_p: 'Inviateci disegno e specifica di controllo; definiamo estensione CND e set di rapporti nell’offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Een lasinspectierapport lezen: VT, PT, MT, UT en RT',
    meta: 'Wat hoort in een lasinspectierapport? Zo leest u norm, acceptatieniveau, omvang, indicaties en personeelsgegevens in VT-, PT-, MT-, UT- en RT-rapporten, en wat een inkoper moet controleren.',
    og: 'Een lasinspectierapport lezen',
    tag: 'Kwaliteit · NDO',
    h1: 'Een lasinspectierapport lezen: de velden die een inkoper moet controleren',
    crumb: 'Inspectierapport',
    read: '8 min lezen',
    body: `
<p>De inspectierapporten die met een gelast onderdeel meekomen, zijn het schriftelijke bewijs dat het volgens specificatie is gemaakt. Toch archiveren veel inkoop- en kwaliteitsafdelingen ze zodra er "goedgekeurd" op staat. We leggen uit naar welke velden u moet kijken om te beoordelen of een rapport echt iets aantoont.</p>
<h2>Wat elk inspectierapport moet bevatten</h2>
<p>Ongeacht de methode bevat een traceerbaar rapport:</p>
<table class="data-table"><thead><tr><th>Veld</th><th>Waarom belangrijk?</th></tr></thead><tbody>
<tr><td>Onderdeel-, tekening- en revisienummer</td><td>Koppelt het rapport aan één onderdeel</td></tr>
<tr><td>Las- of naadnummer</td><td>Koppeling met het lasplan</td></tr>
<tr><td>Beproevingsnorm</td><td>Bepaalt hoe is getest (bijv. ISO 17637, ISO 17640)</td></tr>
<tr><td>Acceptatienorm en -niveau</td><td>Bepaalt welke indicaties toelaatbaar zijn (bijv. ISO 5817 B, ISO 11666 niveau 2)</td></tr>
<tr><td>Omvang van de beproeving</td><td>Welk percentage van de las is getest</td></tr>
<tr><td>Tijdstip van beproeving</td><td>Hoe lang na het lassen (kritisch bij risico op vertraagde scheurvorming)</td></tr>
<tr><td>Apparatuur en kalibratie</td><td>Serienummer, kalibratiedatum</td></tr>
<tr><td>Indicaties en positie</td><td>Gevonden onvolkomenheden, grootte en plaats</td></tr>
<tr><td>Resultaat</td><td>Goed- of afgekeurd, per las</td></tr>
<tr><td>Personeel en niveau</td><td>Wie testte en wie goedkeurde, niveau volgens ISO 9712</td></tr>
</tbody></table>
<p>Ontbreekt één hiervan, dan kan het rapport problemen geven bij een audit of schadeonderzoek.</p>
<h2>Beproevingsnorm versus acceptatienorm</h2>
<p>Dit wordt het vaakst verward. De beproevingsnorm zegt <em>hoe</em> wordt getest, de acceptatienorm <em>hoe het resultaat wordt beoordeeld</em>.</p>
<table class="data-table"><thead><tr><th>Methode</th><th>Beproevingsnorm</th><th>Gangbare acceptatienorm</th></tr></thead><tbody>
<tr><td>Visueel (VT)</td><td>NEN-EN-ISO 17637</td><td>NEN-EN-ISO 5817</td></tr>
<tr><td>Penetrant (PT)</td><td>NEN-EN-ISO 3452-1</td><td>NEN-EN-ISO 23277</td></tr>
<tr><td>Magnetisch (MT)</td><td>NEN-EN-ISO 17638</td><td>NEN-EN-ISO 23278</td></tr>
<tr><td>Ultrasoon (UT)</td><td>NEN-EN-ISO 17640</td><td>NEN-EN-ISO 11666</td></tr>
<tr><td>Radiografie (RT)</td><td>NEN-EN-ISO 17636-1</td><td>NEN-EN-ISO 10675-1</td></tr>
</tbody></table>
<p>Het acceptatieniveau moet passen bij het ISO 5817-kwaliteitsniveau op de tekening. Voor ISO 5817 B geldt bij UT meestal ISO 11666 acceptatieniveau 2 en bij RT ISO 10675-1 niveau 1. ISO 17635 beschrijft deze koppeling.</p>
<h2>Het VT-rapport</h2>
<p>Visuele inspectie gebeurt bij elke las en is voorwaarde voor alle andere methoden. Een goed VT-rapport toont:</p>
<ul>
<li>Gemeten a-maat of beenlengte bij hoeklassen</li>
<li>Lasoverhoogte, inkarteling en kantverschuiving bij stompe lassen</li>
<li>Oppervlakteporiën, scheuren, spatten en ontstekingsplekken</li>
<li>Gebruikte lasmeter en verlichting</li>
</ul>
<p>Eén regel "visueel gecontroleerd, akkoord" is geen VT-rapport.</p>
<h2>PT- en MT-rapporten</h2>
<p>Bij deze methoden voor oppervlaktescheuren horen type en batch van de middelen (penetrant, ontwikkelaar of magnetische inkt), oppervlaktevoorbereiding, indringtijd en bij MT de magnetiseringstechniek in het rapport. MT werkt alleen bij ferromagnetische materialen; austenitisch rvs wordt met PT getest.</p>
<h2>Het UT-rapport</h2>
<p>UT-rapporten zijn technischer. Controleer:</p>
<ul>
<li>Type taster, hoek en frequentie</li>
<li>Referentieblok en kalibratiemethode (DAC, DGS of TCG)</li>
<li>Beproevingsniveau (A, B, C of D volgens ISO 17640)</li>
<li>Positie, lengte en amplitude van geregistreerde indicaties</li>
<li>Beoordeling van elke indicatie tegen het acceptatieniveau</li>
</ul>
<p>Een UT-rapport met "geen fouten" zonder dekking en registratiedrempel laat open wat het werkelijk omvat.</p>
<h2>Het RT-rapport</h2>
<p>Een RT-rapport vermeldt film- of beeldnummer, stralingsbron (röntgen of isotoop), waarde van de beeldkwaliteitsindicator (IQI), filmzwarting en de indicaties per film. Het filmarchief hoort bij het rapport en moet op verzoek beschikbaar zijn.</p>
<h2>Omvang: wat betekent 10%?</h2>
<p>"10% UT" kan 10% van elke las of 10% van de lassen betekenen. Het contract moet dat vastleggen. EN 1090-2 definieert aanvullende NDO-percentages per uitvoeringsklasse en lastype, plus regels voor uitbreiding als een steekproef wordt afgekeurd.</p>
<h2>Wat een inkoper moet controleren</h2>
<ol>
<li>Komen onderdeel- en revisienummer overeen met het geleverde deel?</li>
<li>Past het acceptatieniveau bij het kwaliteitsniveau op de tekening?</li>
<li>Is de omvang gelijk aan de voorgeschreven omvang?</li>
<li>Is het ISO 9712-certificaat van de inspecteur geldig voor de methode?</li>
<li>Zijn bij afgekeurde lassen reparatie- en herkeuringsrapporten bijgevoegd?</li>
<li>Is bij staalsoorten met wachttijd het tijdstip van beproeving vermeld?</li>
</ol>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> VT en UT worden uitgevoerd door ons ISO 9712 niveau 2 gecertificeerde personeel. RT-opnamen maakt onze partner, de films worden beoordeeld door niveau 2-personeel in ons team. Rapporten worden gekoppeld aan onderdeel-, las- en revisienummer en bij de order opgeslagen in het klantenportaal. <a href="../ndt.html">Onze NDO-diensten →</a></p></div>
`,
    faq: [
      ['Wie moet een inspectierapport ondertekenen?', 'Wie het resultaat beoordeelt en het rapport goedkeurt, moet ISO 9712 niveau 2 of 3 in de methode hebben. Niveau 1 mag testen, maar niet zelfstandig beoordelen.'],
      ['Wat is het verschil tussen registratieniveau en acceptatieniveau?', 'Het registratieniveau bepaalt de kleinste indicatie die moet worden vastgelegd, het acceptatieniveau welke indicaties tot afkeur leiden. Niet elke geregistreerde indicatie is een afkeur.'],
      ['Hoe lang bewaart u inspectierapporten?', 'Dat hangt af van contract, productnorm en sector. Bij EN 1090 en drukapparatuur is tien jaar of langer gebruikelijk. Leg de termijn vast in het contract.'],
      ['Worden digitale rapporten geaccepteerd?', 'Ja, zolang traceerbaar is wie wanneer heeft goedgekeurd. Is een natte handtekening vereist, dan moet dat in het contract staan.']
    ],
    cta_h3: 'Op zoek naar gelaste delen met volledige inspectierapporten?',
    cta_p: 'Stuur tekening en inspectiespecificatie; we leggen de NDO-omvang en rapportset vast in de offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Slik leser du en sveiseinspeksjonsrapport: VT, PT, MT, UT og RT',
    meta: 'Hva skal en sveiseinspeksjonsrapport inneholde? Slik leser du standard, akseptnivå, omfang, indikasjoner og personell i VT-, PT-, MT-, UT- og RT-rapporter, og hva innkjøper bør kontrollere.',
    og: 'Slik leser du en sveiseinspeksjonsrapport',
    tag: 'Kvalitet · NDT',
    h1: 'Slik leser du en sveiseinspeksjonsrapport: feltene innkjøper bør kontrollere',
    crumb: 'Inspeksjonsrapport',
    read: '8 min lesing',
    body: `
<p>Inspeksjonsrapportene som følger en sveist del, er det skriftlige beviset på at den er laget etter spesifikasjon. Likevel arkiverer mange innkjøps- og kvalitetsavdelinger dem så snart det står "godkjent". Her forklarer vi hvilke felter du bør se på for å vurdere om en rapport faktisk dokumenterer noe.</p>
<h2>Hva enhver inspeksjonsrapport bør inneholde</h2>
<p>Uansett metode bør en sporbar rapport ha:</p>
<table class="data-table"><thead><tr><th>Felt</th><th>Hvorfor viktig?</th></tr></thead><tbody>
<tr><td>Del-, tegnings- og revisjonsnummer</td><td>Knytter rapporten til én bestemt del</td></tr>
<tr><td>Sveise- eller sømnummer</td><td>Kobling til sveisekartet</td></tr>
<tr><td>Prøvingsstandard</td><td>Angir hvordan prøvingen ble utført (f.eks. ISO 17637, ISO 17640)</td></tr>
<tr><td>Akseptstandard og nivå</td><td>Angir hvilke indikasjoner som godtas (f.eks. ISO 5817 B, ISO 11666 nivå 2)</td></tr>
<tr><td>Prøvingsomfang</td><td>Hvor stor andel av sveisen som er prøvd</td></tr>
<tr><td>Tidspunkt for prøving</td><td>Hvor lenge etter sveising (kritisk ved fare for forsinket sprekkdannelse)</td></tr>
<tr><td>Utstyr og kalibrering</td><td>Serienummer, kalibreringsdato</td></tr>
<tr><td>Indikasjoner og posisjon</td><td>Funnet diskontinuiteter, størrelse og plassering</td></tr>
<tr><td>Resultat</td><td>Godkjent eller avvist, per sveis</td></tr>
<tr><td>Personell og nivå</td><td>Hvem prøvde og hvem godkjente, nivå etter ISO 9712</td></tr>
</tbody></table>
<p>Mangler ett av disse, kan rapporten skape problemer i en revisjon eller en skadeundersøkelse.</p>
<h2>Prøvingsstandard og akseptstandard</h2>
<p>Dette blandes oftest. Prøvingsstandarden sier <em>hvordan</em> det prøves, akseptstandarden <em>hvordan resultatet vurderes</em>.</p>
<table class="data-table"><thead><tr><th>Metode</th><th>Prøvingsstandard</th><th>Vanlig akseptstandard</th></tr></thead><tbody>
<tr><td>Visuell (VT)</td><td>NS-EN ISO 17637</td><td>NS-EN ISO 5817</td></tr>
<tr><td>Penetrant (PT)</td><td>NS-EN ISO 3452-1</td><td>NS-EN ISO 23277</td></tr>
<tr><td>Magnetpulver (MT)</td><td>NS-EN ISO 17638</td><td>NS-EN ISO 23278</td></tr>
<tr><td>Ultralyd (UT)</td><td>NS-EN ISO 17640</td><td>NS-EN ISO 11666</td></tr>
<tr><td>Radiografi (RT)</td><td>NS-EN ISO 17636-1</td><td>NS-EN ISO 10675-1</td></tr>
</tbody></table>
<p>Akseptnivået må samsvare med kvalitetsnivået etter ISO 5817 på tegningen. For ISO 5817 B brukes ved UT vanligvis ISO 11666 akseptnivå 2 og ved RT ISO 10675-1 nivå 1. ISO 17635 beskriver denne koblingen.</p>
<h2>VT-rapporten</h2>
<p>Visuell kontroll gjøres på alle sveiser og er en forutsetning for de andre metodene. En god VT-rapport viser:</p>
<ul>
<li>Målt a-mål eller benlengde på kilsveiser</li>
<li>Overhøyde, sidekutt og kantforskyvning på buttsveiser</li>
<li>Overflateporer, sprekker, sprut og tennmerker</li>
<li>Sveisemåler som er brukt og lysforhold</li>
</ul>
<p>En linje med "visuelt kontrollert, OK" er ingen VT-rapport.</p>
<h2>PT- og MT-rapporter</h2>
<p>For disse overflatesprekkmetodene skal type og batch av forbruksmidler (penetrant, fremkaller eller magnetvæske), overflateforberedelse, inntrengningstid og for MT magnetiseringsteknikken stå i rapporten. MT fungerer bare på ferromagnetiske materialer; austenittisk rustfritt stål prøves med PT.</p>
<h2>UT-rapporten</h2>
<p>UT-rapporter er mer tekniske. Kontroller:</p>
<ul>
<li>Probetype, vinkel og frekvens</li>
<li>Referanseblokk og kalibreringsmetode (DAC, DGS eller TCG)</li>
<li>Prøvingsnivå (A, B, C eller D etter ISO 17640)</li>
<li>Posisjon, lengde og amplitude for registrerte indikasjoner</li>
<li>Vurdering av hver indikasjon mot akseptnivået</li>
</ul>
<p>En UT-rapport med "ingen feil" uten dekning og registreringsterskel gjør det uklart hva den dekker.</p>
<h2>RT-rapporten</h2>
<p>En RT-rapport oppgir film- eller bildenummer, strålekilde (røntgen eller isotop), verdi for bildekvalitetsindikator (IQI), filmtetthet og indikasjonene på hver film. Filmarkivet er en del av rapporten og bør være tilgjengelig for kunden ved forespørsel.</p>
<h2>Omfang: hva betyr 10 %?</h2>
<p>"10 % UT" kan bety 10 % av hver sveis eller 10 % av sveisene. Kontrakten bør si hvilket. EN 1090-2 angir tilleggsomfang for NDT etter utførelsesklasse og sveisetype, og regler for utvidelse hvis et stikkprøveområde avvises.</p>
<h2>Hva innkjøper bør kontrollere</h2>
<ol>
<li>Stemmer del- og revisjonsnummer med levert del?</li>
<li>Samsvarer akseptnivået med kvalitetsnivået på tegningen?</li>
<li>Er omfanget lik det spesifiserte?</li>
<li>Er inspektørens ISO 9712-sertifikat gyldig for metoden?</li>
<li>Er reparasjons- og omprøvingsrapporter vedlagt for avviste sveiser?</li>
<li>Er prøvingstidspunktet oppgitt for stål som krever ventetid?</li>
</ol>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> VT og UT utføres av vårt ISO 9712 nivå 2-sertifiserte personell. RT-eksponering utføres av vår partner, og filmene vurderes av nivå 2-personell i vårt team. Rapportene knyttes til del-, sveise- og revisjonsnummer og lagres på ordren i kundeportalen. <a href="../ndt.html">Våre NDT-tjenester →</a></p></div>
`,
    faq: [
      ['Hvem skal signere en inspeksjonsrapport?', 'Den som vurderer resultatet og godkjenner rapporten, må ha ISO 9712 nivå 2 eller 3 i metoden. Nivå 1-personell kan utføre prøvingen, men ikke vurdere resultatet alene.'],
      ['Hva er forskjellen på registreringsnivå og akseptnivå?', 'Registreringsnivået angir den minste indikasjonen som skal noteres, akseptnivået hvilke indikasjoner som fører til avvisning. En registrert indikasjon er ikke automatisk en avvisning.'],
      ['Hvor lenge bør inspeksjonsrapporter oppbevares?', 'Det avhenger av kontrakt, produktstandard og bransje. For EN 1090 og trykkutstyr er ti år eller mer vanlig. Vi anbefaler å avtale perioden i kontrakten.'],
      ['Godtas digitale rapporter?', 'Ja, så lenge det er sporbart hvem som godkjente og når. Kreves våt signatur, må det stå i kontrakten.']
    ],
    cta_h3: 'Ser du etter sveiste deler levert med komplette inspeksjonsrapporter?',
    cta_p: 'Send tegning og inspeksjonsspesifikasjon, så definerer vi NDT-omfang og rapportsett i tilbudet.',
    cta_btn: 'Be om tilbud →'
  }
};
