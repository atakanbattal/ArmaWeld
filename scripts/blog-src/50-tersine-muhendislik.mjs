export default {
  order: 50,
  slug: 'tersine-muhendislik-kaynakli-parca',
  key: 'p50_reverse',
  date: '2026-09-14',
  keywords: 'tersine mühendislik, numuneden imalat, çizimi olmayan parça, yedek parça imalatı, kaynaklı parça tersine mühendislik, ölçü alma, malzeme tespiti, sertlik ölçümü, reverse engineering welded parts, Reverse Engineering Schweißteil, Nachbau Ersatzteil',
  related: ['ilk-parca-onayi-kaynakli-imalat', 'boyutsal-tolerans', 'kaynak-agzi-hazirligi-iso-9692-1', 'malzeme-sertifikasi-en-10204-3-1'],
  tr: {
    title: 'Kaynaklı Parçada Tersine Mühendislik: Çizimi Olmayan Parçayı Doğru Üretmek',
    meta: 'Çizimi olmayan, eskimiş veya kırılmış kaynaklı bir parça nasıl yeniden üretilir? Ölçü alma yöntemleri, malzeme ve sertlik tespiti, kaynak dikişlerinin çözümlenmesi, hangi bilgilerin tahmin edilemeyeceği, fikri haklar, çizim paketi ve ilk parça doğrulaması.',
    og: 'Tersine mühendislik',
    tag: 'Mühendislik · Yedek parça',
    h1: 'Kaynaklı Parçada Tersine Mühendislik: Çizimi Olmayan Parçayı Doğru Üretmek',
    crumb: 'Tersine mühendislik',
    read: '7 dk okuma',
    body: `
<p>Eski bir makinenin şasisi çatladı, üreticisi artık yok ve elinizde çizim de yok. Ya da yıllardır kullanılan bir taşıyıcı parçanın ikinci tedarikçisini arıyorsunuz ama çizim güncel değil. Bu durumlarda çözüm tersine mühendisliktir: mevcut parçadan yola çıkarak üretilebilir bir teknik paket oluşturmak.</p>
<h2>Ne Zaman Gerekir?</h2>
<ul>
<li>Üreticisi kapanmış veya parça desteği bitmiş makinelerde yedek parça,</li>
<li>Çizimi kaybolmuş veya sahada çok değiştirilmiş parçalar,</li>
<li>Tekrar eden arızaları olan bir parçanın iyileştirilmiş versiyonu,</li>
<li>Kâğıt çizimlerin dijital ve üretilebilir hale getirilmesi.</li>
</ul>
<h2>Fikri Haklar</h2>
<p>Başlamadan önce parçayı yeniden üretme hakkınız olduğundan emin olun. Kendi makinenizin yedek parçası çoğu durumda sorun değildir; ancak tasarım koruması veya sözleşme kısıtı varsa hukuki görüş alınmalıdır. İmalatçı, müşterinin bu konuda yazılı beyanını isteyebilir.</p>
<h2>1. Ölçü Alma</h2>
<table>
<thead><tr><th>Yöntem</th><th>Uygun olduğu durum</th><th>Not</th></tr></thead>
<tbody>
<tr><td>El ölçü aletleri (şerit metre, kumpas, açı ölçer)</td><td>Basit, prizmatik parçalar</td><td>Ucuz ve hızlı, karmaşık geometride sınırlı</td></tr>
<tr><td>Referans yüzey ve mastarlarla ölçüm</td><td>Delik aksları, bağlantı noktaları</td><td>Montaj fonksiyonu için kritik ölçüler</td></tr>
<tr><td>3B tarama</td><td>Karmaşık, eğri veya büyük parçalar</td><td>Genellikle uzman bir çözüm ortağıyla yapılır</td></tr>
<tr><td>Karşı parça ölçümü</td><td>Parçanın bağlandığı makine mevcutsa</td><td>Gerçek montaj ölçülerini verir</td></tr>
</tbody>
</table>
<p>Önemli olan, parçanın bugünkü haliyle tasarım halini ayırt etmektir. Kullanılmış bir parça aşınmış, çarpılmış veya sahada onarılmış olabilir. Ölçülen değer her zaman tasarım değeri değildir.</p>
<h2>2. Malzeme Tespiti</h2>
<ul>
<li><strong>Kimyasal analiz (spektrometre / PMI):</strong> çeliğin sınıfını belirlemeye yardım eder; genellikle akredite bir laboratuvar veya mobil cihazla çözüm ortağı tarafından yapılır.</li>
<li><strong>Sertlik ölçümü:</strong> dayanım sınıfı ve ısıl işlem hakkında fikir verir.</li>
<li><strong>Kalınlık ölçümü:</strong> korozyon kaybı olan parçalarda ultrasonik kalınlık ölçümü.</li>
</ul>
<p>Kimyasal analiz yapı çeliği sınıfını yaklaşık verir; ancak çentik darbe değeri (J2, K2 gibi) analizle kesin olarak belirlenemez. Bu nedenle yeni parçada malzeme, uygulamaya göre bilinçli olarak seçilmelidir (bkz. <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355 alt sınıfları</a>).</p>
<h2>3. Kaynakların Çözümlenmesi</h2>
<ul>
<li>Dikiş türü ve ölçüsü (köşe kaynağı a ölçüsü, küt kaynakta tam veya kısmi nüfuziyet),</li>
<li>Kaynak ağzı şekli (kesitten veya kenar izlerinden),</li>
<li>Kaynak yöntemi izleri (cüruf, sıçrantı, dikiş görünümü),</li>
<li>Gerekirse hurdaya ayrılmış bir numuneden makro kesit.</li>
</ul>
<p>Tam nüfuziyet olup olmadığı dışarıdan her zaman anlaşılamaz. Taşıyıcı bir bağlantıda emin değilseniz tam nüfuziyetli tasarlamak ve WPS’i buna göre seçmek güvenli tarafta kalmaktır.</p>
<h2>4. Tahmin Edilemeyen Bilgiler</h2>
<p>Tersine mühendislik her şeyi geri getiremez. Şunlar genellikle bilinemez veya varsayım gerektirir:</p>
<ul>
<li>Orijinal toleranslar ve hangi ölçünün fonksiyonel olduğu,</li>
<li>Orijinal tasarım yükleri ve emniyet katsayıları,</li>
<li>Uygulanmışsa gerilim giderme ısıl işlemi,</li>
<li>Orijinal muayene kapsamı ve kalite seviyesi.</li>
</ul>
<p>Bu varsayımlar çizimde ve teklifte açıkça yazılmalı, müşteri tarafından onaylanmalıdır.</p>
<h2>5. İyileştirme Fırsatı</h2>
<p>Parça tekrar tekrar aynı yerden çatlıyorsa, birebir kopya aynı arızayı tekrarlar. Tersine mühendislik, kaynak bitişlerini yüksek gerilmeli bölgelerden uzaklaştırmak, keskin köşeleri yumuşatmak veya malzeme sınıfını yükseltmek için iyi bir fırsattır (bkz. <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">kaynaklı bağlantılarda yorulma</a>).</p>
<h2>6. Teknik Paket</h2>
<ul>
<li>Ölçülendirilmiş üretim çizimi ve kaynak sembolleri,</li>
<li>Malzeme listesi ve malzeme sınıfları,</li>
<li>Gerekirse 3B model,</li>
<li>Kaynak ve muayene gereklilikleri,</li>
<li>Varsayımlar listesi.</li>
</ul>
<h2>7. Doğrulama</h2>
<p>İlk parça, ölçü raporu ile birlikte üretilir ve mümkünse makineye takılarak fonksiyon testi yapılır. Onaydan sonra çizim revizyonu dondurulur ve sonraki üretimler bu revizyona göre yapılır (bkz. <a href="ilk-parca-onayi-kaynakli-imalat.html">ilk parça onayı</a>).</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Numune parçadan ölçü alarak üretim çizimi hazırlıyor, kaynak detaylarını ve malzemeyi sizinle birlikte belirliyoruz. Gerektiğinde 3B tarama ve malzeme analizini çözüm ortaklarımızla yaptırıyoruz. <a href="../muhendislik.html">Mühendislik desteğimiz →</a></p></div>
`,
    faq: [
      ['Çizimi olmayan bir parça üretilebilir mi?', 'Evet. Mevcut parçadan ölçü alınır, malzeme ve kaynaklar çözümlenir, üretim çizimi hazırlanır ve ilk parça ile doğrulanır.'],
      ['Malzeme sınıfı nasıl bulunur?', 'Kimyasal analiz ve sertlik ölçümü fikir verir; ancak çentik darbe değeri gibi özellikler analizle kesin belirlenemez, bu yüzden yeni malzeme uygulamaya göre seçilir.'],
      ['Aşınmış bir parçadan alınan ölçü doğru mudur?', 'Her zaman değil. Aşınma, çarpılma ve saha onarımları dikkate alınmalı; mümkünse karşı parça ölçülmelidir.'],
      ['Parçayı kopyalamak yasal mı?', 'Kendi makinenizin yedek parçası çoğu zaman sorun değildir; tasarım koruması veya sözleşme kısıtı varsa hukuki görüş alınmalıdır.']
    ],
    cta_h3: 'Elinizde sadece numune mi var?',
    cta_p: 'Parçanın fotoğraflarını ve kullanım bilgisini gönderin; tersine mühendislik ve imalat için yol haritası çıkaralım.',
    cta_btn: 'Bilgi Gönder →'
  },
  en: {
    title: 'Reverse Engineering Welded Parts: Making a Part Correctly Without a Drawing',
    meta: 'How do you remake an old, worn or broken welded part that has no drawing? Measuring methods, material and hardness identification, analysing the welds, what cannot be recovered, intellectual property, the drawing package and first article verification.',
    og: 'Reverse engineering',
    tag: 'Engineering · Spare parts',
    h1: 'Reverse Engineering Welded Parts: Making a Part Correctly Without a Drawing',
    crumb: 'Reverse engineering',
    read: '7 min read',
    body: `
<p>The frame of an old machine has cracked, its manufacturer no longer exists and you have no drawing. Or you want a second source for a load-bearing part used for years, but the drawing is out of date. The answer is reverse engineering: creating a manufacturable technical package from the existing part.</p>
<h2>When Is It Needed?</h2>
<ul>
<li>Spare parts for machines whose maker has closed or ended support,</li>
<li>Parts whose drawing is lost or that were heavily modified in the field,</li>
<li>An improved version of a part with recurring failures,</li>
<li>Turning paper drawings into digital, manufacturable ones.</li>
</ul>
<h2>Intellectual Property</h2>
<p>Before starting, make sure you have the right to reproduce the part. Spare parts for your own machine are usually fine; if there is design protection or a contractual restriction, get legal advice. The fabricator may ask for a written statement from the customer.</p>
<h2>1. Measuring</h2>
<table>
<thead><tr><th>Method</th><th>Suits</th><th>Note</th></tr></thead>
<tbody>
<tr><td>Hand tools (tape, calliper, protractor)</td><td>Simple, prismatic parts</td><td>Cheap and fast, limited for complex shapes</td></tr>
<tr><td>Measuring from datums and gauges</td><td>Hole axes, interface points</td><td>Critical dimensions for assembly function</td></tr>
<tr><td>3D scanning</td><td>Complex, curved or large parts</td><td>Usually done with a specialist partner</td></tr>
<tr><td>Measuring the mating part</td><td>When the host machine is available</td><td>Gives real assembly dimensions</td></tr>
</tbody>
</table>
<p>The key is to separate the part as it is today from the part as designed. A used part may be worn, distorted or repaired in the field. A measured value is not always the design value.</p>
<h2>2. Identifying the Material</h2>
<ul>
<li><strong>Chemical analysis (spectrometer / PMI):</strong> helps identify the steel grade; usually done by an accredited lab or a partner with a mobile device.</li>
<li><strong>Hardness testing:</strong> gives an idea of strength class and heat treatment.</li>
<li><strong>Thickness measurement:</strong> ultrasonic thickness testing on corroded parts.</li>
</ul>
<p>Chemical analysis gives an approximate structural steel grade, but impact toughness (such as J2 or K2) cannot be determined from analysis. So the new part’s material should be chosen deliberately for the application (see <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355 sub-grades</a>).</p>
<h2>3. Analysing the Welds</h2>
<ul>
<li>Weld type and size (fillet throat a, full or partial penetration for butt welds),</li>
<li>Joint preparation (from cross-sections or edge marks),</li>
<li>Traces of the welding process (slag, spatter, bead appearance),</li>
<li>A macro section from a scrapped sample if needed.</li>
</ul>
<p>Full penetration cannot always be seen from outside. For a load-bearing joint, if in doubt, designing for full penetration and choosing the WPS accordingly keeps you on the safe side.</p>
<h2>4. What Cannot Be Recovered</h2>
<p>Reverse engineering cannot bring everything back. These are usually unknown or need assumptions:</p>
<ul>
<li>Original tolerances and which dimensions are functional,</li>
<li>Original design loads and safety factors,</li>
<li>Any stress-relief heat treatment applied,</li>
<li>Original inspection scope and quality level.</li>
</ul>
<p>These assumptions must be written into the drawing and quote and approved by the customer.</p>
<h2>5. A Chance to Improve</h2>
<p>If the part keeps cracking in the same place, an exact copy will fail the same way. Reverse engineering is a good chance to move weld toes away from high-stress zones, soften sharp corners or upgrade the material grade (see <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">fatigue in welded joints</a>).</p>
<h2>6. Technical Package</h2>
<ul>
<li>Dimensioned production drawing with weld symbols,</li>
<li>Bill of materials and material grades,</li>
<li>3D model where needed,</li>
<li>Welding and inspection requirements,</li>
<li>List of assumptions.</li>
</ul>
<h2>7. Verification</h2>
<p>The first part is made with a dimensional report and, where possible, fitted to the machine for a function test. After approval the drawing revision is frozen and later production follows that revision (see <a href="ilk-parca-onayi-kaynakli-imalat.html">first article approval</a>).</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> we measure from your sample part, prepare a production drawing and agree weld details and material with you. Where needed, 3D scanning and material analysis are done through our partners. <a href="../muhendislik.html">Our engineering support →</a></p></div>
`,
    faq: [
      ['Can a part without a drawing be made?', 'Yes. The existing part is measured, material and welds are analysed, a production drawing is prepared and verified with a first article.'],
      ['How is the material grade found?', 'Chemical analysis and hardness give an indication, but properties like impact toughness cannot be determined, so the new material is chosen for the application.'],
      ['Are measurements from a worn part accurate?', 'Not always. Wear, distortion and field repairs must be considered; measure the mating part where possible.'],
      ['Is copying the part legal?', 'Spare parts for your own machine are usually fine; get legal advice if there is design protection or a contractual restriction.']
    ],
    cta_h3: 'Only have a sample part?',
    cta_p: 'Send photos and usage details; we will outline a route to reverse engineering and fabrication.',
    cta_btn: 'Send Details →'
  },
  de: {
    title: 'Reverse Engineering von Schweißteilen: Teile ohne Zeichnung richtig nachfertigen',
    meta: 'Wie fertigt man ein altes, verschlissenes oder gebrochenes Schweißteil ohne Zeichnung nach? Messmethoden, Werkstoff- und Härtebestimmung, Analyse der Nähte, was sich nicht rekonstruieren lässt, Schutzrechte, Zeichnungspaket und Erstmusterprüfung.',
    og: 'Reverse Engineering',
    tag: 'Engineering · Ersatzteile',
    h1: 'Reverse Engineering von Schweißteilen: Teile ohne Zeichnung richtig nachfertigen',
    crumb: 'Reverse Engineering',
    read: '7 Min. Lesezeit',
    body: `
<p>Der Rahmen einer alten Maschine ist gerissen, den Hersteller gibt es nicht mehr, eine Zeichnung fehlt. Oder Sie suchen eine zweite Bezugsquelle für ein seit Jahren genutztes tragendes Teil, aber die Zeichnung ist veraltet. Die Lösung ist Reverse Engineering: aus dem vorhandenen Teil ein fertigungsfähiges technisches Paket erstellen.</p>
<h2>Wann ist es nötig?</h2>
<ul>
<li>Ersatzteile für Maschinen, deren Hersteller nicht mehr existiert oder keinen Support mehr bietet,</li>
<li>Teile mit verlorener Zeichnung oder starken Änderungen im Feld,</li>
<li>verbesserte Version eines Teils mit wiederkehrenden Ausfällen,</li>
<li>Digitalisierung von Papierzeichnungen zu fertigungsfähigen Unterlagen.</li>
</ul>
<h2>Schutzrechte</h2>
<p>Klären Sie vorab, ob Sie das Teil nachfertigen dürfen. Ersatzteile für die eigene Maschine sind meist unproblematisch; bei Designschutz oder vertraglichen Einschränkungen sollte rechtlicher Rat eingeholt werden. Der Fertiger kann eine schriftliche Erklärung des Kunden verlangen.</p>
<h2>1. Vermessen</h2>
<table>
<thead><tr><th>Methode</th><th>Geeignet für</th><th>Hinweis</th></tr></thead>
<tbody>
<tr><td>Handmessmittel (Maßband, Messschieber, Winkelmesser)</td><td>Einfache, prismatische Teile</td><td>Günstig und schnell, bei komplexer Geometrie begrenzt</td></tr>
<tr><td>Messen von Bezugsflächen und mit Lehren</td><td>Bohrungsachsen, Anschlusspunkte</td><td>Funktionskritische Maße für die Montage</td></tr>
<tr><td>3D-Scan</td><td>Komplexe, gekrümmte oder große Teile</td><td>Meist mit spezialisiertem Partner</td></tr>
<tr><td>Vermessen des Gegenstücks</td><td>Wenn die Maschine vorhanden ist</td><td>Liefert reale Einbaumaße</td></tr>
</tbody>
</table>
<p>Entscheidend ist, den heutigen Zustand vom Konstruktionszustand zu trennen. Ein gebrauchtes Teil kann verschlissen, verzogen oder im Feld repariert sein. Ein Messwert ist nicht immer das Konstruktionsmaß.</p>
<h2>2. Werkstoffbestimmung</h2>
<ul>
<li><strong>Chemische Analyse (Spektrometer / PMI):</strong> hilft bei der Bestimmung der Stahlsorte; meist durch akkreditiertes Labor oder Partner mit mobilem Gerät.</li>
<li><strong>Härteprüfung:</strong> gibt Hinweise auf Festigkeitsklasse und Wärmebehandlung.</li>
<li><strong>Dickenmessung:</strong> Ultraschall-Wanddickenmessung bei korrodierten Teilen.</li>
</ul>
<p>Die Analyse liefert die Baustahlsorte nur näherungsweise; die Kerbschlagzähigkeit (z. B. J2, K2) lässt sich daraus nicht bestimmen. Der Werkstoff des Neuteils sollte deshalb bewusst für die Anwendung gewählt werden (siehe <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355-Gütegruppen</a>).</p>
<h2>3. Analyse der Schweißnähte</h2>
<ul>
<li>Nahtart und -größe (a-Maß der Kehlnaht, voll oder teilweise durchgeschweißte Stumpfnaht),</li>
<li>Nahtvorbereitung (aus Schnitten oder Kantenspuren),</li>
<li>Spuren des Schweißprozesses (Schlacke, Spritzer, Nahtbild),</li>
<li>bei Bedarf Makroschliff aus einem Ausschussteil.</li>
</ul>
<p>Ob eine Naht voll durchgeschweißt ist, sieht man von außen nicht immer. Bei tragenden Verbindungen ist im Zweifel eine voll durchgeschweißte Auslegung mit passender WPS die sichere Wahl.</p>
<h2>4. Was sich nicht rekonstruieren lässt</h2>
<p>Reverse Engineering bringt nicht alles zurück. Meist unbekannt oder nur annehmbar sind:</p>
<ul>
<li>ursprüngliche Toleranzen und welche Maße funktional sind,</li>
<li>ursprüngliche Auslegungslasten und Sicherheitsfaktoren,</li>
<li>eine eventuelle Spannungsarmglühung,</li>
<li>ursprünglicher Prüfumfang und Bewertungsgruppe.</li>
</ul>
<p>Diese Annahmen gehören in Zeichnung und Angebot und müssen vom Kunden freigegeben werden.</p>
<h2>5. Chance zur Verbesserung</h2>
<p>Reißt das Teil immer an derselben Stelle, wiederholt eine exakte Kopie den Schaden. Reverse Engineering ist eine gute Gelegenheit, Nahtübergänge aus hochbeanspruchten Zonen zu verlegen, scharfe Ecken zu entschärfen oder die Werkstoffgüte zu erhöhen (siehe <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">Ermüdung geschweißter Verbindungen</a>).</p>
<h2>6. Technisches Paket</h2>
<ul>
<li>bemaßte Fertigungszeichnung mit Schweißsymbolen,</li>
<li>Stückliste und Werkstoffgüten,</li>
<li>bei Bedarf 3D-Modell,</li>
<li>Schweiß- und Prüfanforderungen,</li>
<li>Liste der Annahmen.</li>
</ul>
<h2>7. Verifizierung</h2>
<p>Das erste Teil wird mit Maßbericht gefertigt und möglichst an der Maschine funktionsgeprüft. Nach Freigabe wird der Zeichnungsstand eingefroren; die Folgefertigung erfolgt nach diesem Stand (siehe <a href="ilk-parca-onayi-kaynakli-imalat.html">Erstmusterprüfung</a>).</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Wir vermessen Ihr Musterteil, erstellen eine Fertigungszeichnung und legen Nahtdetails und Werkstoff mit Ihnen fest. 3D-Scan und Werkstoffanalyse lassen wir bei Bedarf über Partner durchführen. <a href="../muhendislik.html">Unsere Engineering-Unterstützung →</a></p></div>
`,
    faq: [
      ['Kann man ein Teil ohne Zeichnung fertigen?', 'Ja. Das vorhandene Teil wird vermessen, Werkstoff und Nähte analysiert, eine Fertigungszeichnung erstellt und mit einem Erstmuster verifiziert.'],
      ['Wie bestimmt man die Werkstoffsorte?', 'Chemische Analyse und Härte geben Hinweise; Eigenschaften wie die Kerbschlagzähigkeit lassen sich nicht bestimmen, daher wird der neue Werkstoff anwendungsgerecht gewählt.'],
      ['Sind Maße von einem verschlissenen Teil korrekt?', 'Nicht immer. Verschleiß, Verzug und Feldreparaturen sind zu berücksichtigen; wenn möglich das Gegenstück vermessen.'],
      ['Ist das Nachfertigen legal?', 'Ersatzteile für die eigene Maschine sind meist unproblematisch; bei Designschutz oder vertraglichen Einschränkungen rechtlichen Rat einholen.']
    ],
    cta_h3: 'Sie haben nur ein Musterteil?',
    cta_p: 'Senden Sie Fotos und Einsatzangaben; wir skizzieren den Weg zu Reverse Engineering und Fertigung.',
    cta_btn: 'Angaben senden →'
  },
  es: {
    title: 'Ingeniería inversa de piezas soldadas: fabricar bien una pieza sin plano',
    meta: '¿Cómo se vuelve a fabricar una pieza soldada antigua, desgastada o rota que no tiene plano? Métodos de medición, identificación de material y dureza, análisis de las soldaduras, lo que no se puede recuperar, propiedad intelectual, paquete de planos y verificación de primera pieza.',
    og: 'Ingeniería inversa',
    tag: 'Ingeniería · Repuestos',
    h1: 'Ingeniería inversa de piezas soldadas: fabricar bien una pieza sin plano',
    crumb: 'Ingeniería inversa',
    read: '7 min de lectura',
    body: `
<p>El bastidor de una máquina antigua se ha fisurado, el fabricante ya no existe y no hay plano. O busca una segunda fuente para una pieza estructural que usa desde hace años, pero el plano está desactualizado. La solución es la ingeniería inversa: crear un paquete técnico fabricable a partir de la pieza existente.</p>
<h2>¿Cuándo se necesita?</h2>
<ul>
<li>repuestos de máquinas cuyo fabricante cerró o dejó de dar soporte,</li>
<li>piezas sin plano o muy modificadas en campo,</li>
<li>versión mejorada de una pieza con fallos repetidos,</li>
<li>pasar planos en papel a documentación digital fabricable.</li>
</ul>
<h2>Propiedad intelectual</h2>
<p>Antes de empezar, asegúrese de que tiene derecho a reproducir la pieza. Los repuestos para su propia máquina suelen no plantear problemas; si hay protección de diseño o restricciones contractuales, pida asesoramiento legal. El fabricante puede solicitar una declaración escrita del cliente.</p>
<h2>1. Medición</h2>
<table>
<thead><tr><th>Método</th><th>Adecuado para</th><th>Nota</th></tr></thead>
<tbody>
<tr><td>Instrumentos manuales (cinta, calibre, goniómetro)</td><td>Piezas sencillas y prismáticas</td><td>Barato y rápido, limitado en geometrías complejas</td></tr>
<tr><td>Medición desde referencias y con galgas</td><td>Ejes de agujeros, puntos de unión</td><td>Cotas críticas para el montaje</td></tr>
<tr><td>Escaneado 3D</td><td>Piezas complejas, curvas o grandes</td><td>Normalmente con un socio especializado</td></tr>
<tr><td>Medición de la pieza de acoplamiento</td><td>Si la máquina está disponible</td><td>Da cotas reales de montaje</td></tr>
</tbody>
</table>
<p>Lo clave es distinguir la pieza tal como está hoy de la pieza tal como se diseñó. Una pieza usada puede estar desgastada, deformada o reparada. El valor medido no siempre es el valor de diseño.</p>
<h2>2. Identificación del material</h2>
<ul>
<li><strong>Análisis químico (espectrómetro / PMI):</strong> ayuda a identificar el grado de acero; suele hacerlo un laboratorio acreditado o un socio con equipo portátil.</li>
<li><strong>Dureza:</strong> orienta sobre la clase de resistencia y el tratamiento térmico.</li>
<li><strong>Medición de espesor:</strong> por ultrasonidos en piezas con corrosión.</li>
</ul>
<p>El análisis químico da un grado de acero estructural aproximado, pero la tenacidad (J2, K2, etc.) no se puede determinar así. Por eso el material de la pieza nueva se elige conscientemente según la aplicación (ver <a href="s355jr-s355j2-s355k2-s355nl-farki.html">subgrados de S355</a>).</p>
<h2>3. Análisis de las soldaduras</h2>
<ul>
<li>tipo y tamaño del cordón (garganta a en ángulo, penetración total o parcial en soldaduras a tope),</li>
<li>preparación de bordes (por secciones o marcas en los cantos),</li>
<li>huellas del proceso (escoria, proyecciones, aspecto del cordón),</li>
<li>macrografía de una muestra desechada si hace falta.</li>
</ul>
<p>La penetración total no siempre se aprecia desde fuera. En uniones estructurales, ante la duda, diseñar con penetración total y elegir la WPS en consecuencia es lo seguro.</p>
<h2>4. Lo que no se puede recuperar</h2>
<p>La ingeniería inversa no lo recupera todo. Suelen ser desconocidos o requerir supuestos:</p>
<ul>
<li>tolerancias originales y qué cotas son funcionales,</li>
<li>cargas de diseño y coeficientes de seguridad originales,</li>
<li>un posible tratamiento térmico de alivio de tensiones,</li>
<li>alcance de inspección y nivel de calidad originales.</li>
</ul>
<p>Estos supuestos deben figurar en el plano y la oferta y ser aprobados por el cliente.</p>
<h2>5. Oportunidad de mejora</h2>
<p>Si la pieza se fisura siempre en el mismo sitio, una copia exacta fallará igual. Es buen momento para alejar los pies de cordón de zonas de alta tensión, suavizar esquinas o mejorar el grado de material (ver <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">fatiga en uniones soldadas</a>).</p>
<h2>6. Paquete técnico</h2>
<ul>
<li>plano de fabricación acotado con símbolos de soldadura,</li>
<li>lista de materiales y grados,</li>
<li>modelo 3D si hace falta,</li>
<li>requisitos de soldadura e inspección,</li>
<li>lista de supuestos.</li>
</ul>
<h2>7. Verificación</h2>
<p>La primera pieza se fabrica con informe dimensional y, si es posible, se monta en la máquina para una prueba funcional. Tras la aprobación se congela la revisión del plano y la producción posterior la sigue (ver <a href="ilk-parca-onayi-kaynakli-imalat.html">aprobación de primera pieza</a>).</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> medimos su pieza muestra, preparamos el plano de fabricación y definimos con usted los detalles de soldadura y el material. Si hace falta, el escaneado 3D y el análisis de material se realizan con nuestros socios. <a href="../muhendislik.html">Nuestro apoyo de ingeniería →</a></p></div>
`,
    faq: [
      ['¿Se puede fabricar una pieza sin plano?', 'Sí. Se mide la pieza existente, se analizan material y soldaduras, se prepara un plano y se verifica con una primera pieza.'],
      ['¿Cómo se determina el grado del material?', 'El análisis químico y la dureza orientan, pero propiedades como la tenacidad no se pueden determinar; el nuevo material se elige según la aplicación.'],
      ['¿Son fiables las medidas de una pieza desgastada?', 'No siempre. Hay que considerar desgaste, deformación y reparaciones; mida la pieza de acoplamiento si es posible.'],
      ['¿Es legal copiar la pieza?', 'Los repuestos para su propia máquina suelen no tener problema; pida asesoramiento si hay protección de diseño o restricción contractual.']
    ],
    cta_h3: '¿Solo tiene una pieza muestra?',
    cta_p: 'Envíe fotos y datos de uso; le proponemos un camino de ingeniería inversa y fabricación.',
    cta_btn: 'Enviar datos →'
  },
  fr: {
    title: 'Rétro-ingénierie de pièces soudées : refaire correctement une pièce sans plan',
    meta: 'Comment refabriquer une pièce soudée ancienne, usée ou cassée sans plan ? Méthodes de relevé, identification de la matière et de la dureté, analyse des soudures, ce qui ne peut pas être retrouvé, propriété intellectuelle, dossier de plans et validation premier article.',
    og: 'Rétro-ingénierie',
    tag: 'Ingénierie · Pièces de rechange',
    h1: 'Rétro-ingénierie de pièces soudées : refaire correctement une pièce sans plan',
    crumb: 'Rétro-ingénierie',
    read: '7 min de lecture',
    body: `
<p>Le châssis d’une vieille machine est fissuré, son fabricant n’existe plus et il n’y a pas de plan. Ou vous cherchez une seconde source pour une pièce porteuse utilisée depuis des années, mais le plan n’est plus à jour. La réponse est la rétro-ingénierie : créer à partir de la pièce existante un dossier technique fabricable.</p>
<h2>Quand est-ce nécessaire ?</h2>
<ul>
<li>pièces de rechange de machines dont le fabricant a disparu ou n’assure plus le support,</li>
<li>pièces au plan perdu ou fortement modifiées sur site,</li>
<li>version améliorée d’une pièce aux défaillances répétées,</li>
<li>passage de plans papier à une documentation numérique fabricable.</li>
</ul>
<h2>Propriété intellectuelle</h2>
<p>Avant de commencer, assurez-vous d’avoir le droit de reproduire la pièce. Les pièces de rechange de votre propre machine posent rarement problème ; en cas de protection de dessin ou de restriction contractuelle, demandez un avis juridique. Le fabricant peut demander une déclaration écrite du client.</p>
<h2>1. Relevé dimensionnel</h2>
<table>
<thead><tr><th>Méthode</th><th>Adaptée à</th><th>Remarque</th></tr></thead>
<tbody>
<tr><td>Outils manuels (mètre, pied à coulisse, rapporteur)</td><td>Pièces simples, prismatiques</td><td>Économique et rapide, limité pour les formes complexes</td></tr>
<tr><td>Mesure depuis des références et avec calibres</td><td>Axes de perçages, points d’interface</td><td>Cotes critiques pour le montage</td></tr>
<tr><td>Numérisation 3D</td><td>Pièces complexes, courbes ou grandes</td><td>Généralement avec un partenaire spécialisé</td></tr>
<tr><td>Mesure de la pièce associée</td><td>Si la machine est disponible</td><td>Donne les cotes réelles de montage</td></tr>
</tbody>
</table>
<p>L’essentiel est de distinguer l’état actuel de l’état de conception. Une pièce usagée peut être usée, déformée ou réparée. Une valeur mesurée n’est pas toujours la cote de conception.</p>
<h2>2. Identification de la matière</h2>
<ul>
<li><strong>Analyse chimique (spectromètre / PMI) :</strong> aide à identifier la nuance ; réalisée en général par un laboratoire accrédité ou un partenaire équipé d’un appareil portable.</li>
<li><strong>Dureté :</strong> donne une idée de la classe de résistance et du traitement thermique.</li>
<li><strong>Mesure d’épaisseur :</strong> par ultrasons sur les pièces corrodées.</li>
</ul>
<p>L’analyse donne une nuance approximative d’acier de construction, mais la résilience (J2, K2…) ne peut pas en être déduite. La matière de la pièce neuve doit donc être choisie en fonction de l’application (voir <a href="s355jr-s355j2-s355k2-s355nl-farki.html">sous-nuances S355</a>).</p>
<h2>3. Analyse des soudures</h2>
<ul>
<li>type et dimension (gorge a des soudures d’angle, pénétration totale ou partielle des soudures bout à bout),</li>
<li>préparation des bords (par coupes ou traces sur les chants),</li>
<li>traces du procédé (laitier, projections, aspect du cordon),</li>
<li>macrographie sur une pièce rebutée si nécessaire.</li>
</ul>
<p>La pénétration totale ne se voit pas toujours de l’extérieur. Pour un assemblage porteur, dans le doute, concevoir en pleine pénétration et choisir le DMOS en conséquence reste la voie sûre.</p>
<h2>4. Ce qui ne peut pas être retrouvé</h2>
<p>La rétro-ingénierie ne restitue pas tout. Sont généralement inconnus ou à supposer :</p>
<ul>
<li>les tolérances d’origine et les cotes fonctionnelles,</li>
<li>les charges de calcul et coefficients de sécurité d’origine,</li>
<li>un éventuel traitement de détensionnement,</li>
<li>l’étendue des contrôles et le niveau de qualité d’origine.</li>
</ul>
<p>Ces hypothèses doivent figurer sur le plan et l’offre, et être validées par le client.</p>
<h2>5. Une occasion d’améliorer</h2>
<p>Si la pièce se fissure toujours au même endroit, une copie exacte cassera de la même façon. C’est le moment d’éloigner les pieds de cordon des zones très sollicitées, d’adoucir les angles vifs ou de monter en nuance (voir <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">fatigue des assemblages soudés</a>).</p>
<h2>6. Dossier technique</h2>
<ul>
<li>plan de fabrication coté avec symboles de soudure,</li>
<li>nomenclature et nuances,</li>
<li>modèle 3D si nécessaire,</li>
<li>exigences de soudage et de contrôle,</li>
<li>liste des hypothèses.</li>
</ul>
<h2>7. Validation</h2>
<p>La première pièce est fabriquée avec un rapport dimensionnel et, si possible, montée sur la machine pour un essai fonctionnel. Après validation, l’indice du plan est figé et la production suivante s’y conforme (voir <a href="ilk-parca-onayi-kaynakli-imalat.html">validation premier article</a>).</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous relevons votre pièce modèle, établissons un plan de fabrication et définissons avec vous les détails de soudure et la matière. Numérisation 3D et analyse matière sont réalisées si besoin avec nos partenaires. <a href="../muhendislik.html">Notre appui en ingénierie →</a></p></div>
`,
    faq: [
      ['Peut-on fabriquer une pièce sans plan ?', 'Oui. La pièce existante est relevée, matière et soudures analysées, un plan établi puis validé par un premier article.'],
      ['Comment déterminer la nuance ?', 'Analyse chimique et dureté donnent une indication, mais des propriétés comme la résilience ne peuvent pas être déterminées ; la nouvelle matière est choisie selon l’application.'],
      ['Les cotes d’une pièce usée sont-elles fiables ?', 'Pas toujours. Il faut tenir compte de l’usure, des déformations et des réparations ; mesurez la pièce associée si possible.'],
      ['Copier la pièce est-il légal ?', 'Les pièces de rechange de votre propre machine posent rarement problème ; demandez un avis juridique en cas de protection ou de restriction contractuelle.']
    ],
    cta_h3: 'Vous n’avez qu’une pièce modèle ?',
    cta_p: 'Envoyez photos et conditions d’utilisation ; nous proposons une démarche de rétro-ingénierie et de fabrication.',
    cta_btn: 'Envoyer les informations →'
  },
  it: {
    title: 'Reverse engineering di pezzi saldati: rifare correttamente un pezzo senza disegno',
    meta: 'Come si rifà un pezzo saldato vecchio, usurato o rotto senza disegno? Metodi di rilievo, identificazione di materiale e durezza, analisi delle saldature, cosa non si può ricostruire, proprietà intellettuale, pacchetto disegni e verifica del primo articolo.',
    og: 'Reverse engineering',
    tag: 'Ingegneria · Ricambi',
    h1: 'Reverse engineering di pezzi saldati: rifare correttamente un pezzo senza disegno',
    crumb: 'Reverse engineering',
    read: '7 min di lettura',
    body: `
<p>Il telaio di una vecchia macchina si è criccato, il costruttore non esiste più e il disegno non c’è. Oppure cercate una seconda fonte per un pezzo strutturale usato da anni, ma il disegno non è aggiornato. La risposta è il reverse engineering: creare dal pezzo esistente un pacchetto tecnico producibile.</p>
<h2>Quando serve?</h2>
<ul>
<li>ricambi per macchine il cui costruttore ha chiuso o non dà più supporto,</li>
<li>pezzi senza disegno o molto modificati sul campo,</li>
<li>versione migliorata di un pezzo con guasti ricorrenti,</li>
<li>trasformazione di disegni cartacei in documentazione digitale producibile.</li>
</ul>
<h2>Proprietà intellettuale</h2>
<p>Prima di iniziare verificate di avere il diritto di riprodurre il pezzo. I ricambi per la propria macchina di solito non sono un problema; in presenza di tutela del design o vincoli contrattuali serve un parere legale. Il fabbricante può chiedere una dichiarazione scritta del cliente.</p>
<h2>1. Rilievo</h2>
<table>
<thead><tr><th>Metodo</th><th>Adatto a</th><th>Nota</th></tr></thead>
<tbody>
<tr><td>Strumenti manuali (metro, calibro, goniometro)</td><td>Pezzi semplici, prismatici</td><td>Economico e veloce, limitato per geometrie complesse</td></tr>
<tr><td>Misura da riferimenti e con calibri</td><td>Assi dei fori, punti di interfaccia</td><td>Quote critiche per il montaggio</td></tr>
<tr><td>Scansione 3D</td><td>Pezzi complessi, curvi o grandi</td><td>Di solito con un partner specializzato</td></tr>
<tr><td>Misura del pezzo accoppiato</td><td>Se la macchina è disponibile</td><td>Fornisce le quote reali di montaggio</td></tr>
</tbody>
</table>
<p>L’importante è distinguere il pezzo com’è oggi dal pezzo come era progettato. Un pezzo usato può essere usurato, deformato o riparato. Il valore misurato non è sempre il valore di progetto.</p>
<h2>2. Identificazione del materiale</h2>
<ul>
<li><strong>Analisi chimica (spettrometro / PMI):</strong> aiuta a individuare il grado dell’acciaio; di solito eseguita da un laboratorio accreditato o da un partner con strumento portatile.</li>
<li><strong>Durezza:</strong> indica la classe di resistenza e l’eventuale trattamento termico.</li>
<li><strong>Misura dello spessore:</strong> a ultrasuoni sui pezzi corrosi.</li>
</ul>
<p>L’analisi chimica dà un grado di acciaio strutturale approssimativo, ma la resilienza (J2, K2 ecc.) non si ricava. Il materiale del pezzo nuovo va quindi scelto consapevolmente in base all’applicazione (vedi <a href="s355jr-s355j2-s355k2-s355nl-farki.html">sottogradi S355</a>).</p>
<h2>3. Analisi delle saldature</h2>
<ul>
<li>tipo e dimensione (sezione di gola a, piena o parziale penetrazione nei giunti testa a testa),</li>
<li>preparazione dei lembi (da sezioni o tracce sui bordi),</li>
<li>tracce del processo (scoria, spruzzi, aspetto del cordone),</li>
<li>macrografia da un campione scartato se necessario.</li>
</ul>
<p>La piena penetrazione non sempre si vede dall’esterno. Per giunti strutturali, nel dubbio, progettare a piena penetrazione e scegliere la WPS di conseguenza è la scelta sicura.</p>
<h2>4. Cosa non si può ricostruire</h2>
<p>Il reverse engineering non restituisce tutto. Di solito restano ignoti o da ipotizzare:</p>
<ul>
<li>tolleranze originali e quote funzionali,</li>
<li>carichi di progetto e coefficienti di sicurezza originali,</li>
<li>un eventuale trattamento di distensione,</li>
<li>estensione dei controlli e livello di qualità originali.</li>
</ul>
<p>Queste ipotesi vanno scritte su disegno e offerta e approvate dal cliente.</p>
<h2>5. Occasione di miglioramento</h2>
<p>Se il pezzo si cricca sempre nello stesso punto, una copia esatta cederà allo stesso modo. È il momento di spostare i piedi di saldatura dalle zone più sollecitate, raccordare spigoli vivi o aumentare il grado del materiale (vedi <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">fatica nei giunti saldati</a>).</p>
<h2>6. Pacchetto tecnico</h2>
<ul>
<li>disegno di produzione quotato con simboli di saldatura,</li>
<li>distinta materiali e gradi,</li>
<li>modello 3D se necessario,</li>
<li>requisiti di saldatura e controllo,</li>
<li>elenco delle ipotesi.</li>
</ul>
<h2>7. Verifica</h2>
<p>Il primo pezzo si produce con rapporto dimensionale e, se possibile, si monta sulla macchina per una prova funzionale. Dopo l’approvazione la revisione del disegno si congela e la produzione successiva la segue (vedi <a href="ilk-parca-onayi-kaynakli-imalat.html">approvazione del primo articolo</a>).</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> rileviamo il vostro pezzo campione, prepariamo il disegno di produzione e definiamo con voi dettagli di saldatura e materiale. Scansione 3D e analisi del materiale si eseguono, se servono, tramite i nostri partner. <a href="../muhendislik.html">Il nostro supporto ingegneristico →</a></p></div>
`,
    faq: [
      ['Si può produrre un pezzo senza disegno?', 'Sì. Il pezzo esistente viene rilevato, materiale e saldature analizzati, si prepara un disegno e lo si verifica con un primo articolo.'],
      ['Come si determina il grado del materiale?', 'Analisi chimica e durezza danno indicazioni, ma proprietà come la resilienza non si ricavano; il nuovo materiale si sceglie per l’applicazione.'],
      ['Le misure di un pezzo usurato sono affidabili?', 'Non sempre. Occorre considerare usura, deformazioni e riparazioni; se possibile misurare il pezzo accoppiato.'],
      ['Copiare il pezzo è legale?', 'I ricambi per la propria macchina di solito non sono un problema; chiedete un parere legale in caso di tutela del design o vincoli contrattuali.']
    ],
    cta_h3: 'Avete solo un pezzo campione?',
    cta_p: 'Inviateci foto e condizioni d’uso; vi proponiamo un percorso di reverse engineering e produzione.',
    cta_btn: 'Invia i dati →'
  },
  nl: {
    title: 'Reverse engineering van lasdelen: een deel zonder tekening correct namaken',
    meta: 'Hoe maak je een oud, versleten of gebroken lasdeel zonder tekening opnieuw? Meetmethoden, bepaling van materiaal en hardheid, analyse van de lassen, wat niet te achterhalen is, intellectueel eigendom, tekeningpakket en eerste-artikelverificatie.',
    og: 'Reverse engineering',
    tag: 'Engineering · Reserveonderdelen',
    h1: 'Reverse engineering van lasdelen: een deel zonder tekening correct namaken',
    crumb: 'Reverse engineering',
    read: '7 min lezen',
    body: `
<p>Het frame van een oude machine is gescheurd, de fabrikant bestaat niet meer en er is geen tekening. Of u zoekt een tweede bron voor een dragend deel dat al jaren wordt gebruikt, maar de tekening is verouderd. Het antwoord is reverse engineering: uit het bestaande deel een maakbaar technisch pakket opstellen.</p>
<h2>Wanneer is het nodig?</h2>
<ul>
<li>reserveonderdelen voor machines waarvan de fabrikant is gestopt of geen support meer biedt,</li>
<li>delen zonder tekening of sterk aangepast in het veld,</li>
<li>verbeterde versie van een deel met terugkerende storingen,</li>
<li>papieren tekeningen omzetten naar digitale, maakbare documentatie.</li>
</ul>
<h2>Intellectueel eigendom</h2>
<p>Controleer vooraf of u het deel mag namaken. Reserveonderdelen voor uw eigen machine zijn meestal geen probleem; bij modelbescherming of contractuele beperkingen is juridisch advies nodig. De fabrikant kan om een schriftelijke verklaring van de klant vragen.</p>
<h2>1. Opmeten</h2>
<table>
<thead><tr><th>Methode</th><th>Geschikt voor</th><th>Opmerking</th></tr></thead>
<tbody>
<tr><td>Handmeetmiddelen (meetlint, schuifmaat, hoekmeter)</td><td>Eenvoudige, prismatische delen</td><td>Goedkoop en snel, beperkt bij complexe vormen</td></tr>
<tr><td>Meten vanaf referentievlakken en met mallen</td><td>Gatassen, aansluitpunten</td><td>Kritieke maten voor montage</td></tr>
<tr><td>3D-scan</td><td>Complexe, gebogen of grote delen</td><td>Meestal met een gespecialiseerde partner</td></tr>
<tr><td>Meten van het tegendeel</td><td>Als de machine beschikbaar is</td><td>Geeft werkelijke montagematen</td></tr>
</tbody>
</table>
<p>Het gaat erom het deel zoals het nu is te scheiden van het deel zoals het ontworpen werd. Een gebruikt deel kan versleten, vervormd of gerepareerd zijn. Een gemeten waarde is niet altijd de ontwerpmaat.</p>
<h2>2. Materiaal bepalen</h2>
<ul>
<li><strong>Chemische analyse (spectrometer / PMI):</strong> helpt de staalsoort te bepalen; meestal door een geaccrediteerd lab of een partner met mobiel apparaat.</li>
<li><strong>Hardheidsmeting:</strong> geeft een indicatie van sterkteklasse en warmtebehandeling.</li>
<li><strong>Diktemeting:</strong> ultrasoon bij gecorrodeerde delen.</li>
</ul>
<p>Chemische analyse geeft bij benadering de constructiestaalsoort, maar de kerfslagwaarde (J2, K2 enz.) is daaruit niet te bepalen. Kies het materiaal van het nieuwe deel daarom bewust voor de toepassing (zie <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355-subkwaliteiten</a>).</p>
<h2>3. Lassen analyseren</h2>
<ul>
<li>lassoort en -maat (a-maat van hoeklassen, volle of gedeeltelijke doorlassing bij stomplassen),</li>
<li>naadvoorbereiding (uit doorsneden of kantsporen),</li>
<li>sporen van het lasproces (slak, spatten, lasuiterlijk),</li>
<li>zo nodig een macro-doorsnede uit een afgekeurd monster.</li>
</ul>
<p>Volle doorlassing is van buiten niet altijd te zien. Bij dragende verbindingen is bij twijfel een ontwerp met volle doorlassing en een passende WPS de veilige keuze.</p>
<h2>4. Wat niet te achterhalen is</h2>
<p>Reverse engineering brengt niet alles terug. Meestal onbekend of aan te nemen:</p>
<ul>
<li>oorspronkelijke toleranties en welke maten functioneel zijn,</li>
<li>oorspronkelijke ontwerpbelastingen en veiligheidsfactoren,</li>
<li>een eventuele spanningsarmgloeiing,</li>
<li>oorspronkelijke inspectieomvang en kwaliteitsniveau.</li>
</ul>
<p>Deze aannames horen op tekening en offerte en moeten door de klant worden goedgekeurd.</p>
<h2>5. Kans om te verbeteren</h2>
<p>Scheurt het deel steeds op dezelfde plek, dan faalt een exacte kopie net zo. Dit is het moment om lasovergangen uit hoogbelaste zones te halen, scherpe hoeken af te ronden of een hogere materiaalsoort te kiezen (zie <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">vermoeiing van lasverbindingen</a>).</p>
<h2>6. Technisch pakket</h2>
<ul>
<li>gemaatvoerde productietekening met lassymbolen,</li>
<li>stuklijst en materiaalsoorten,</li>
<li>zo nodig 3D-model,</li>
<li>las- en inspectie-eisen,</li>
<li>lijst met aannames.</li>
</ul>
<h2>7. Verificatie</h2>
<p>Het eerste deel wordt gemaakt met maatrapport en waar mogelijk op de machine functioneel getest. Na goedkeuring wordt de tekeningrevisie bevroren en volgt verdere productie die revisie (zie <a href="ilk-parca-onayi-kaynakli-imalat.html">eerste-artikelgoedkeuring</a>).</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> we meten uw monsterdeel op, maken een productietekening en leggen lasdetails en materiaal met u vast. 3D-scan en materiaalanalyse laten we zo nodig via partners uitvoeren. <a href="../muhendislik.html">Onze engineeringondersteuning →</a></p></div>
`,
    faq: [
      ['Kan een deel zonder tekening worden gemaakt?', 'Ja. Het bestaande deel wordt opgemeten, materiaal en lassen geanalyseerd, een productietekening gemaakt en met een eerste artikel geverifieerd.'],
      ['Hoe bepaal je de materiaalsoort?', 'Chemische analyse en hardheid geven een indicatie, maar eigenschappen als kerfslagwaarde zijn niet te bepalen; het nieuwe materiaal wordt voor de toepassing gekozen.'],
      ['Kloppen maten van een versleten deel?', 'Niet altijd. Houd rekening met slijtage, vervorming en reparaties; meet zo mogelijk het tegendeel.'],
      ['Is namaken legaal?', 'Reserveonderdelen voor uw eigen machine zijn meestal geen probleem; vraag juridisch advies bij modelbescherming of contractuele beperkingen.']
    ],
    cta_h3: 'Heeft u alleen een monsterdeel?',
    cta_p: 'Stuur foto’s en gebruiksgegevens; we schetsen een route voor reverse engineering en productie.',
    cta_btn: 'Gegevens sturen →'
  },
  no: {
    title: 'Reverse engineering av sveisede deler: lage en del riktig uten tegning',
    meta: 'Hvordan lager man en gammel, slitt eller ødelagt sveiset del på nytt uten tegning? Målemetoder, bestemmelse av materiale og hardhet, analyse av sveisene, hva som ikke kan gjenskapes, immaterielle rettigheter, tegningspakke og førsteartikkelverifikasjon.',
    og: 'Reverse engineering',
    tag: 'Ingeniørarbeid · Reservedeler',
    h1: 'Reverse engineering av sveisede deler: lage en del riktig uten tegning',
    crumb: 'Reverse engineering',
    read: '7 min lesing',
    body: `
<p>Rammen på en gammel maskin har sprukket, produsenten finnes ikke lenger, og det finnes ingen tegning. Eller du vil ha en ekstra leverandør av en bærende del som er brukt i årevis, men tegningen er utdatert. Svaret er reverse engineering: å lage en produserbar teknisk pakke ut fra den eksisterende delen.</p>
<h2>Når trengs det?</h2>
<ul>
<li>reservedeler til maskiner der produsenten er borte eller har avsluttet støtten,</li>
<li>deler uten tegning eller som er kraftig endret i felt,</li>
<li>forbedret versjon av en del med gjentatte feil,</li>
<li>overgang fra papirtegninger til digital, produserbar dokumentasjon.</li>
</ul>
<h2>Immaterielle rettigheter</h2>
<p>Før du starter, sørg for at du har rett til å reprodusere delen. Reservedeler til egen maskin er som regel uproblematisk; ved designbeskyttelse eller kontraktsbegrensninger bør du innhente juridisk råd. Produsenten kan be om en skriftlig erklæring fra kunden.</p>
<h2>1. Oppmåling</h2>
<table>
<thead><tr><th>Metode</th><th>Egnet for</th><th>Merknad</th></tr></thead>
<tbody>
<tr><td>Håndverktøy (målebånd, skyvelære, vinkelmåler)</td><td>Enkle, prismatiske deler</td><td>Billig og raskt, begrenset for komplekse former</td></tr>
<tr><td>Måling fra referanseflater og med lærer</td><td>Hullakser, tilkoblingspunkter</td><td>Kritiske mål for montering</td></tr>
<tr><td>3D-skanning</td><td>Komplekse, buede eller store deler</td><td>Som regel med en spesialisert partner</td></tr>
<tr><td>Måling av motstykket</td><td>Når maskinen er tilgjengelig</td><td>Gir reelle monteringsmål</td></tr>
</tbody>
</table>
<p>Det viktige er å skille delen slik den er i dag fra delen slik den ble konstruert. En brukt del kan være slitt, deformert eller reparert. En målt verdi er ikke alltid konstruksjonsmålet.</p>
<h2>2. Bestemme materialet</h2>
<ul>
<li><strong>Kjemisk analyse (spektrometer / PMI):</strong> hjelper å bestemme stålkvaliteten; utføres som regel av et akkreditert laboratorium eller en partner med mobilt utstyr.</li>
<li><strong>Hardhetsmåling:</strong> gir en indikasjon på fasthetsklasse og varmebehandling.</li>
<li><strong>Tykkelsesmåling:</strong> med ultralyd på korroderte deler.</li>
</ul>
<p>Kjemisk analyse gir en omtrentlig konstruksjonsstålkvalitet, men slagseigheten (J2, K2 osv.) kan ikke bestemmes slik. Materialet i den nye delen bør derfor velges bevisst for bruken (se <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355-underkvaliteter</a>).</p>
<h2>3. Analyse av sveisene</h2>
<ul>
<li>sveisetype og -størrelse (a-mål for kilsveis, full eller delvis gjennomsveising i buttsveis),</li>
<li>fugeforberedelse (fra snitt eller kantspor),</li>
<li>spor av sveiseprosessen (slagg, sprut, sveiseutseende),</li>
<li>makroslip fra en kassert prøve ved behov.</li>
</ul>
<p>Full gjennomsveising kan ikke alltid ses utenfra. For bærende forbindelser er det ved tvil trygt å konstruere for full gjennomsveising og velge WPS deretter.</p>
<h2>4. Hva som ikke kan gjenskapes</h2>
<p>Reverse engineering gir ikke alt tilbake. Ofte ukjent eller basert på antakelser:</p>
<ul>
<li>opprinnelige toleranser og hvilke mål som er funksjonelle,</li>
<li>opprinnelige dimensjonerende laster og sikkerhetsfaktorer,</li>
<li>eventuell spenningsarmgløding,</li>
<li>opprinnelig kontrollomfang og kvalitetsnivå.</li>
</ul>
<p>Disse antakelsene skal stå i tegning og tilbud og godkjennes av kunden.</p>
<h2>5. En sjanse til forbedring</h2>
<p>Sprekker delen alltid på samme sted, vil en nøyaktig kopi svikte på samme måte. Det er en god anledning til å flytte sveisetåer bort fra høyt belastede soner, runde av skarpe hjørner eller oppgradere materialkvaliteten (se <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">utmatting i sveiste forbindelser</a>).</p>
<h2>6. Teknisk pakke</h2>
<ul>
<li>målsatt produksjonstegning med sveisesymboler,</li>
<li>stykkliste og materialkvaliteter,</li>
<li>3D-modell ved behov,</li>
<li>krav til sveising og kontroll,</li>
<li>liste over antakelser.</li>
</ul>
<h2>7. Verifikasjon</h2>
<p>Første del lages med målrapport og monteres om mulig på maskinen for funksjonstest. Etter godkjenning fryses tegningsrevisjonen, og senere produksjon følger den (se <a href="ilk-parca-onayi-kaynakli-imalat.html">førsteartikkelgodkjenning</a>).</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> vi måler opp prøvedelen din, lager produksjonstegning og avtaler sveisedetaljer og materiale med deg. 3D-skanning og materialanalyse utføres ved behov gjennom våre partnere. <a href="../muhendislik.html">Vår ingeniørstøtte →</a></p></div>
`,
    faq: [
      ['Kan en del uten tegning produseres?', 'Ja. Den eksisterende delen måles opp, materiale og sveiser analyseres, en produksjonstegning lages og verifiseres med en førsteartikkel.'],
      ['Hvordan finner man materialkvaliteten?', 'Kjemisk analyse og hardhet gir en indikasjon, men egenskaper som slagseighet kan ikke bestemmes; nytt materiale velges for bruken.'],
      ['Er mål fra en slitt del riktige?', 'Ikke alltid. Ta hensyn til slitasje, deformasjon og reparasjoner; mål motstykket om mulig.'],
      ['Er det lovlig å kopiere delen?', 'Reservedeler til egen maskin er som regel uproblematisk; innhent juridisk råd ved designbeskyttelse eller kontraktsbegrensninger.']
    ],
    cta_h3: 'Har du bare en prøvedel?',
    cta_p: 'Send bilder og bruksopplysninger; vi skisserer en vei for reverse engineering og produksjon.',
    cta_btn: 'Send opplysninger →'
  }
};
