export default {
  order: 23,
  slug: 's355jr-s355j2-s355k2-s355nl-farki',
  key: 'p23_s355',
  date: '2026-11-16',
  keywords: 'S355JR, S355J2, S355K2, S355NL, S355J2+N, S355 farkı, EN 10025-2, EN 10025-3, çentik darbe, Charpy, karbon eşdeğeri CEV, S355 difference, S355 Unterschied',
  related: ['malzeme-sertifikasi-en-10204-3-1', 'on-isitma-hesaplama', 'lamellar-yirtilma-z-kalite-celik', 'celik-konstruksiyon-imalat'],
  tr: {
    title: 'S355JR, S355J2, S355K2 ve S355NL Farkı: Hangi S355 Kalitesi Seçilmeli?',
    meta: 'S355JR, J0, J2, K2 ile S355N, NL ve M, ML arasındaki fark nedir? EN 10025’e göre çentik darbe sıcaklıkları, kalınlığa göre akma dayanımı, CEV sınırları, teslim durumu (+AR, +N) ve EN 1993-1-10 ile kalite seçimi.',
    og: 'S355JR, J2, K2 ve NL Farkı',
    tag: 'Malzeme · Çelik Kaliteleri',
    h1: 'S355JR, S355J2, S355K2 ve S355NL Farkı: Hangi S355 Kalitesi Seçilmeli?',
    crumb: 'S355 Kaliteleri',
    read: '6 dk okuma',
    body: `
<p>Kaynaklı imalatta en çok kullanılan yapı çeliği S355’tir. Ancak çizimde yalnızca “S355” yazması yetmez; harflerle belirtilen <strong>tokluk kalitesi</strong>, parçanın soğukta gevrek kırılmaya karşı davranışını belirler. Yanlış kalite seçimi ya gereksiz maliyet getirir ya da düşük sıcaklıkta risk oluşturur.</p>
<h2>İsimlendirme Ne Anlatır?</h2>
<p><strong>S</strong> yapı çeliğini, <strong>355</strong> en küçük kalınlık aralığındaki minimum akma dayanımını (MPa) gösterir. Sonraki harfler, Charpy V çentik darbe deneyinin hangi sıcaklıkta ve hangi enerjiyle sağlandığını anlatır.</p>
<table class="data-table"><thead><tr><th>Kalite</th><th>Standart</th><th>Çentik darbe şartı (boyuna)</th></tr></thead><tbody>
<tr><td>S355JR</td><td>EN 10025-2</td><td>27 J, +20 °C</td></tr>
<tr><td>S355J0</td><td>EN 10025-2</td><td>27 J, 0 °C</td></tr>
<tr><td>S355J2</td><td>EN 10025-2</td><td>27 J, −20 °C</td></tr>
<tr><td>S355K2</td><td>EN 10025-2</td><td>40 J, −20 °C</td></tr>
<tr><td>S355N</td><td>EN 10025-3 (normalize)</td><td>40 J, −20 °C</td></tr>
<tr><td>S355NL</td><td>EN 10025-3 (normalize)</td><td>27 J, −50 °C</td></tr>
<tr><td>S355M / ML</td><td>EN 10025-4 (termomekanik)</td><td>40 J, −20 °C / 27 J, −50 °C</td></tr>
</tbody></table>
<h2>Kalınlık Arttıkça Akma Dayanımı Düşer</h2>
<p>“355” değeri ince saclar içindir. EN 10025-2’ye göre S355’te minimum akma dayanımı tipik olarak şöyledir: 16 mm’ye kadar 355 MPa, 16–40 mm arası 345 MPa, 40–63 mm arası 335 MPa. Çekme dayanımı 3–100 mm aralığında 470–630 MPa’dır. Kalın parçalı hesaplarda bu düşüş dikkate alınmalıdır.</p>
<h2>Kaynak Kabiliyeti: CEV</h2>
<p>Kaynak açısından önemli olan, karbon eşdeğeridir (CEV). EN 10025-2’de S355 için CEV sınırı kalınlığa göre yaklaşık 0,45 ile 0,47 arasındadır. Siparişte daha düşük CEV istenebilir. CEV ve kalınlık arttıkça ön ısıtma ihtiyacı doğar (bkz. <a href="on-isitma-hesaplama.html">ön ısıtma hesabı</a>); bu nedenle sertifikadaki gerçek kimyasal analiz önemlidir.</p>
<h2>Teslim Durumu: +AR ve +N</h2>
<p>EN 10025-2 kaliteleri haddelenmiş (+AR) veya normalize haddelenmiş (+N) teslim edilebilir. <strong>S355J2+N</strong>, normalize teslimle daha homojen bir tane yapısı ve daha güvenilir tokluk sağlar; özellikle sonradan ısıl işlem veya sıcak şekillendirme yapılacak parçalarda tercih edilir. N ve NL kaliteleri ise ayrı bir standart olan EN 10025-3 kapsamında, normalize durumdadır.</p>
<h2>Hangi Kalite Ne Zaman?</h2>
<ul>
<li><strong>S355JR:</strong> Kapalı ortamda, düşük sıcaklık ve dinamik yük riski olmayan, ince ve orta kalınlıklı parçalar.</li>
<li><strong>S355J2:</strong> Genel çelik yapı ve makine imalatında en yaygın tercih; açık hava ve orta kalınlıklar.</li>
<li><strong>S355K2:</strong> Kalın parçalar, yüksek tutulma, dinamik yük veya daha soğuk iklim.</li>
<li><strong>S355NL / ML:</strong> −50 °C’ye kadar tokluk gereken, kuzey ülkeleri veya soğuk depolama gibi uygulamalar.</li>
</ul>
<p>Kesin seçim, <strong>EN 1993-1-10</strong> tablosuyla yapılır: en düşük kullanım sıcaklığı, gerilme seviyesi ve sac kalınlığına göre her kalite için izin verilen en büyük kalınlık okunur. Örneğin aynı sıcaklıkta J2 ile izin verilen kalınlık, JR’ye göre belirgin şekilde daha büyüktür.</p>
<h2>Sertifika Kontrolü</h2>
<p>Malzeme girişinde EN 10204 3.1 sertifikası üzerinden kalite, teslim durumu, kimyasal analiz, CEV, çekme ve çentik darbe sonuçları kontrol edilmelidir (bkz. <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a>). Kalın T birleşimlerde ayrıca Z kalite gerekebilir (bkz. <a href="lamellar-yirtilma-z-kalite-celik.html">lamellar yırtılma</a>).</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Çizimde istenen S355 kalitesini malzeme sertifikası üzerinden kontrol eder, ısı numarasıyla izlenebilirliği kayıt altına alırız. Kalite belirtilmemişse kullanım koşulunu sorar, uygun seçeneği teklif aşamasında öneririz. <a href="../kaynakli-imalat.html">Kaynaklı imalat hizmetimiz →</a></p></div>
`,
    faq: [
      ['S355JR ile S355J2 arasındaki fark nedir?', 'Akma dayanımı aynıdır; fark tokluktadır. JR 27 J şartını +20 °C’de, J2 ise −20 °C’de sağlar. J2 soğukta gevrek kırılmaya karşı daha güvenlidir.'],
      ['S355K2 ne zaman seçilir?', 'Kalın parçalar, yüksek tutulma, dinamik yük veya soğuk iklimde. K2, −20 °C’de 40 J ile J2’den daha yüksek tokluk sunar.'],
      ['S355NL nedir?', 'EN 10025-3’e göre normalize edilmiş, −50 °C’de 27 J çentik darbe şartını sağlayan, düşük sıcaklık uygulamaları için S355 kalitesidir.'],
      ['S355J2+N ne demek?', 'Normalize veya normalize haddelenmiş teslim edilen S355J2’dir; daha homojen yapı ve güvenilir tokluk sağlar.']
    ],
    cta_h3: 'Doğru malzeme, izlenebilir imalat',
    cta_p: 'Çiziminizi gönderin; malzeme kalitesini, kalınlığı ve kullanım koşulunu birlikte değerlendirelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'S355JR vs S355J2 vs S355K2 vs S355NL: Which S355 Grade Should You Choose?',
    meta: 'What is the difference between S355JR, J0, J2, K2 and S355N, NL and M, ML? Impact test temperatures to EN 10025, yield strength by thickness, CEV limits, delivery condition (+AR, +N) and grade selection with EN 1993-1-10.',
    og: 'S355JR, J2, K2 and NL Compared',
    tag: 'Materials · Steel Grades',
    h1: 'S355JR vs S355J2 vs S355K2 vs S355NL: Which S355 Grade Should You Choose?',
    crumb: 'S355 Grades',
    read: '6 min read',
    body: `
<p>S355 is the most widely used structural steel in welded fabrication. But “S355” on a drawing is not enough: the letters for <strong>toughness quality</strong> determine how the part behaves against brittle fracture in the cold. The wrong grade either adds unnecessary cost or creates risk at low temperature.</p>
<h2>What the Designation Says</h2>
<p><strong>S</strong> means structural steel, <strong>355</strong> is the minimum yield strength (MPa) in the thinnest range. The letters that follow state the temperature and energy for the Charpy V-notch impact test.</p>
<table class="data-table"><thead><tr><th>Grade</th><th>Standard</th><th>Impact requirement (longitudinal)</th></tr></thead><tbody>
<tr><td>S355JR</td><td>EN 10025-2</td><td>27 J at +20 °C</td></tr>
<tr><td>S355J0</td><td>EN 10025-2</td><td>27 J at 0 °C</td></tr>
<tr><td>S355J2</td><td>EN 10025-2</td><td>27 J at −20 °C</td></tr>
<tr><td>S355K2</td><td>EN 10025-2</td><td>40 J at −20 °C</td></tr>
<tr><td>S355N</td><td>EN 10025-3 (normalized)</td><td>40 J at −20 °C</td></tr>
<tr><td>S355NL</td><td>EN 10025-3 (normalized)</td><td>27 J at −50 °C</td></tr>
<tr><td>S355M / ML</td><td>EN 10025-4 (thermomechanical)</td><td>40 J at −20 °C / 27 J at −50 °C</td></tr>
</tbody></table>
<h2>Yield Strength Falls with Thickness</h2>
<p>The “355” applies to thin plate. Per EN 10025-2, typical minimum yield for S355 is 355 MPa up to 16 mm, 345 MPa for 16–40 mm and 335 MPa for 40–63 mm. Tensile strength is 470–630 MPa for 3–100 mm. Design of thick parts must account for this reduction.</p>
<h2>Weldability: CEV</h2>
<p>For welding, the carbon equivalent (CEV) matters. EN 10025-2 limits CEV for S355 to about 0.45–0.47 depending on thickness, and a lower CEV can be ordered. Higher CEV and thickness create a need for preheat (see <a href="on-isitma-hesaplama.html">preheat calculation</a>), so the actual analysis on the certificate is important.</p>
<h2>Delivery Condition: +AR and +N</h2>
<p>EN 10025-2 grades can be delivered as rolled (+AR) or normalized rolled (+N). <strong>S355J2+N</strong> gives a more uniform grain structure and more reliable toughness, preferred especially for parts that will be heat treated or hot formed later. N and NL grades belong to a separate standard, EN 10025-3, in the normalized condition.</p>
<h2>Which Grade When?</h2>
<ul>
<li><strong>S355JR:</strong> indoor, thin and medium parts with no low-temperature or dynamic-load risk.</li>
<li><strong>S355J2:</strong> the most common choice for general steel structures and machine fabrication; outdoor and medium thickness.</li>
<li><strong>S355K2:</strong> thick parts, high restraint, dynamic loading or colder climate.</li>
<li><strong>S355NL / ML:</strong> toughness down to −50 °C, e.g. Nordic countries or cold storage.</li>
</ul>
<p>The exact choice is made with the <strong>EN 1993-1-10</strong> table: for the lowest service temperature, stress level and plate thickness, the maximum permitted thickness for each grade is read. At the same temperature, J2 allows considerably greater thickness than JR.</p>
<h2>Certificate Check</h2>
<p>At goods receipt, the EN 10204 3.1 certificate should be checked for grade, delivery condition, chemical analysis, CEV, tensile and impact results (see <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a>). Thick T joints may also need a Z grade (see <a href="lamellar-yirtilma-z-kalite-celik.html">lamellar tearing</a>).</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> we check the S355 grade required on the drawing against the material certificate and record traceability by heat number. If no grade is stated, we ask about service conditions and propose a suitable option at quotation. <a href="../kaynakli-imalat.html">Our welded fabrication service →</a></p></div>
`,
    faq: [
      ['What is the difference between S355JR and S355J2?', 'Yield strength is the same; the difference is toughness. JR meets 27 J at +20 °C, J2 at −20 °C, so J2 is safer against brittle fracture in the cold.'],
      ['When is S355K2 chosen?', 'For thick parts, high restraint, dynamic loads or cold climates. K2 offers 40 J at −20 °C, higher toughness than J2.'],
      ['What is S355NL?', 'A normalized S355 grade to EN 10025-3 meeting 27 J at −50 °C, for low-temperature applications.'],
      ['What does S355J2+N mean?', 'S355J2 delivered normalized or normalized rolled, giving a more uniform structure and reliable toughness.']
    ],
    cta_h3: 'The right material, traceable fabrication',
    cta_p: 'Send your drawing; we will review material grade, thickness and service conditions with you.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'S355JR, S355J2, S355K2 und S355NL im Vergleich: Welche S355-Güte wählen?',
    meta: 'Worin unterscheiden sich S355JR, J0, J2, K2 sowie S355N, NL und M, ML? Kerbschlagtemperaturen nach EN 10025, Streckgrenze nach Dicke, CEV-Grenzen, Lieferzustand (+AR, +N) und Gütewahl nach EN 1993-1-10.',
    og: 'S355JR, J2, K2 und NL im Vergleich',
    tag: 'Werkstoffe · Stahlgüten',
    h1: 'S355JR, S355J2, S355K2 und S355NL im Vergleich: Welche S355-Güte wählen?',
    crumb: 'S355-Güten',
    read: '6 Min. Lesezeit',
    body: `
<p>S355 ist der meistverwendete Baustahl in der Schweißfertigung. „S355“ allein reicht auf der Zeichnung aber nicht: Die Buchstaben der <strong>Gütegruppe</strong> bestimmen das Verhalten gegen Sprödbruch bei Kälte. Eine falsche Güte kostet entweder unnötig Geld oder bringt Risiko bei tiefen Temperaturen.</p>
<h2>Was die Bezeichnung aussagt</h2>
<p><strong>S</strong> steht für Baustahl, <strong>355</strong> für die Mindeststreckgrenze (MPa) im dünnsten Bereich. Die folgenden Buchstaben geben Temperatur und Energie des Kerbschlagbiegeversuchs (Charpy-V) an.</p>
<table class="data-table"><thead><tr><th>Güte</th><th>Norm</th><th>Kerbschlagarbeit (längs)</th></tr></thead><tbody>
<tr><td>S355JR</td><td>EN 10025-2</td><td>27 J bei +20 °C</td></tr>
<tr><td>S355J0</td><td>EN 10025-2</td><td>27 J bei 0 °C</td></tr>
<tr><td>S355J2</td><td>EN 10025-2</td><td>27 J bei −20 °C</td></tr>
<tr><td>S355K2</td><td>EN 10025-2</td><td>40 J bei −20 °C</td></tr>
<tr><td>S355N</td><td>EN 10025-3 (normalisiert)</td><td>40 J bei −20 °C</td></tr>
<tr><td>S355NL</td><td>EN 10025-3 (normalisiert)</td><td>27 J bei −50 °C</td></tr>
<tr><td>S355M / ML</td><td>EN 10025-4 (thermomechanisch)</td><td>40 J bei −20 °C / 27 J bei −50 °C</td></tr>
</tbody></table>
<h2>Streckgrenze sinkt mit der Dicke</h2>
<p>„355“ gilt für dünne Bleche. Nach EN 10025-2 beträgt die Mindeststreckgrenze typischerweise 355 MPa bis 16 mm, 345 MPa für 16–40 mm und 335 MPa für 40–63 mm. Die Zugfestigkeit liegt bei 470–630 MPa (3–100 mm). Bei dicken Teilen ist dies in der Bemessung zu berücksichtigen.</p>
<h2>Schweißeignung: CEV</h2>
<p>Für das Schweißen zählt das Kohlenstoffäquivalent (CEV). EN 10025-2 begrenzt es für S355 je nach Dicke auf etwa 0,45–0,47; ein niedrigerer Wert kann bestellt werden. Mit steigendem CEV und steigender Dicke wird Vorwärmen nötig (siehe <a href="on-isitma-hesaplama.html">Vorwärmberechnung</a>), daher ist die Ist-Analyse im Zeugnis wichtig.</p>
<h2>Lieferzustand: +AR und +N</h2>
<p>Güten nach EN 10025-2 werden walzroh (+AR) oder normalisierend gewalzt (+N) geliefert. <strong>S355J2+N</strong> bietet ein gleichmäßigeres Gefüge und zuverlässigere Zähigkeit, besonders bei späterer Wärmebehandlung oder Warmumformung. N- und NL-Güten gehören zur eigenen Norm EN 10025-3 im normalisierten Zustand.</p>
<h2>Welche Güte wann?</h2>
<ul>
<li><strong>S355JR:</strong> Innenbereich, dünne bis mittlere Teile ohne Tieftemperatur- oder dynamische Belastung.</li>
<li><strong>S355J2:</strong> Standardwahl im Stahl- und Maschinenbau; außen und mittlere Dicken.</li>
<li><strong>S355K2:</strong> dicke Teile, hohe Einspannung, dynamische Last oder kälteres Klima.</li>
<li><strong>S355NL / ML:</strong> Zähigkeit bis −50 °C, z. B. Skandinavien oder Kühlhäuser.</li>
</ul>
<p>Die genaue Wahl erfolgt mit der Tabelle aus <strong>EN 1993-1-10</strong>: Für tiefste Einsatztemperatur, Spannungsniveau und Blechdicke wird die zulässige Höchstdicke je Güte abgelesen. Bei gleicher Temperatur erlaubt J2 deutlich größere Dicken als JR.</p>
<h2>Zeugnisprüfung</h2>
<p>Beim Wareneingang sind Güte, Lieferzustand, chemische Analyse, CEV, Zug- und Kerbschlagwerte im Zeugnis 3.1 nach EN 10204 zu prüfen (siehe <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a>). Dicke T-Stöße können zusätzlich eine Z-Güte erfordern (siehe <a href="lamellar-yirtilma-z-kalite-celik.html">Terrassenbruch</a>).</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Wir prüfen die in der Zeichnung geforderte S355-Güte anhand des Werkstoffzeugnisses und dokumentieren die Rückverfolgbarkeit über die Schmelzennummer. Fehlt die Angabe, fragen wir nach den Einsatzbedingungen und schlagen im Angebot eine passende Güte vor. <a href="../kaynakli-imalat.html">Unsere Schweißfertigung →</a></p></div>
`,
    faq: [
      ['Unterschied zwischen S355JR und S355J2?', 'Die Streckgrenze ist gleich, der Unterschied liegt in der Zähigkeit: JR erreicht 27 J bei +20 °C, J2 bei −20 °C. J2 ist bei Kälte sicherer gegen Sprödbruch.'],
      ['Wann wählt man S355K2?', 'Bei dicken Teilen, hoher Einspannung, dynamischer Last oder kaltem Klima. K2 bietet 40 J bei −20 °C.'],
      ['Was ist S355NL?', 'Eine normalisierte S355-Güte nach EN 10025-3 mit 27 J bei −50 °C für Tieftemperaturanwendungen.'],
      ['Was bedeutet S355J2+N?', 'S355J2 im normalisierten bzw. normalisierend gewalzten Lieferzustand mit gleichmäßigerem Gefüge und zuverlässiger Zähigkeit.']
    ],
    cta_h3: 'Richtiger Werkstoff, rückverfolgbare Fertigung',
    cta_p: 'Senden Sie Ihre Zeichnung; wir prüfen Güte, Dicke und Einsatzbedingungen gemeinsam mit Ihnen.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'S355JR, S355J2, S355K2 y S355NL: ¿qué calidad de S355 elegir?',
    meta: 'Diferencias entre S355JR, J0, J2, K2 y S355N, NL y M, ML: temperaturas de ensayo de impacto según EN 10025, límite elástico según espesor, límites de CEV, estado de suministro (+AR, +N) y selección con la EN 1993-1-10.',
    og: 'S355JR, J2, K2 y NL comparados',
    tag: 'Materiales · Calidades de acero',
    h1: 'S355JR, S355J2, S355K2 y S355NL: ¿qué calidad de S355 elegir?',
    crumb: 'Calidades S355',
    read: '6 min de lectura',
    body: `
<p>El S355 es el acero estructural más usado en fabricación soldada. Pero «S355» en el plano no basta: las letras de <strong>calidad de tenacidad</strong> determinan el comportamiento frente a la rotura frágil con frío. Una calidad equivocada añade coste innecesario o crea riesgo a baja temperatura.</p>
<h2>Qué indica la designación</h2>
<p><strong>S</strong> es acero estructural y <strong>355</strong> el límite elástico mínimo (MPa) en el rango más delgado. Las letras siguientes indican temperatura y energía del ensayo Charpy V.</p>
<table class="data-table"><thead><tr><th>Calidad</th><th>Norma</th><th>Requisito de impacto (longitudinal)</th></tr></thead><tbody>
<tr><td>S355JR</td><td>EN 10025-2</td><td>27 J a +20 °C</td></tr>
<tr><td>S355J0</td><td>EN 10025-2</td><td>27 J a 0 °C</td></tr>
<tr><td>S355J2</td><td>EN 10025-2</td><td>27 J a −20 °C</td></tr>
<tr><td>S355K2</td><td>EN 10025-2</td><td>40 J a −20 °C</td></tr>
<tr><td>S355N</td><td>EN 10025-3 (normalizado)</td><td>40 J a −20 °C</td></tr>
<tr><td>S355NL</td><td>EN 10025-3 (normalizado)</td><td>27 J a −50 °C</td></tr>
<tr><td>S355M / ML</td><td>EN 10025-4 (termomecánico)</td><td>40 J a −20 °C / 27 J a −50 °C</td></tr>
</tbody></table>
<h2>El límite elástico baja con el espesor</h2>
<p>El «355» vale para chapa fina. Según EN 10025-2, el mínimo típico es 355 MPa hasta 16 mm, 345 MPa de 16 a 40 mm y 335 MPa de 40 a 63 mm. La resistencia a tracción es 470–630 MPa (3–100 mm). En piezas gruesas hay que considerarlo en el cálculo.</p>
<h2>Soldabilidad: CEV</h2>
<p>Para soldar importa el carbono equivalente (CEV). La EN 10025-2 lo limita para S355 a aproximadamente 0,45–0,47 según el espesor, y se puede pedir un valor menor. Con más CEV y espesor aparece la necesidad de precalentar (ver <a href="on-isitma-hesaplama.html">cálculo del precalentamiento</a>); por eso importa el análisis real del certificado.</p>
<h2>Estado de suministro: +AR y +N</h2>
<p>Las calidades EN 10025-2 se suministran en bruto de laminación (+AR) o laminado normalizante (+N). <strong>S355J2+N</strong> da una estructura más homogénea y una tenacidad más fiable, preferible si habrá tratamiento térmico o conformado en caliente. Las calidades N y NL pertenecen a otra norma, la EN 10025-3, en estado normalizado.</p>
<h2>¿Qué calidad y cuándo?</h2>
<ul>
<li><strong>S355JR:</strong> interior, piezas finas y medias sin riesgo de baja temperatura ni carga dinámica.</li>
<li><strong>S355J2:</strong> la opción más común en estructura metálica y fabricación de maquinaria; exterior y espesores medios.</li>
<li><strong>S355K2:</strong> piezas gruesas, alto embridamiento, carga dinámica o clima más frío.</li>
<li><strong>S355NL / ML:</strong> tenacidad hasta −50 °C, p. ej. países nórdicos o cámaras frigoríficas.</li>
</ul>
<p>La elección exacta se hace con la tabla de la <strong>EN 1993-1-10</strong>: según temperatura mínima de servicio, nivel de tensión y espesor se lee el espesor máximo permitido por calidad. A igual temperatura, J2 permite bastante más espesor que JR.</p>
<h2>Control del certificado</h2>
<p>En la recepción hay que revisar en el certificado EN 10204 3.1 calidad, estado de suministro, análisis químico, CEV, tracción e impacto (ver <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a>). Las uniones en T gruesas pueden requerir además calidad Z (ver <a href="lamellar-yirtilma-z-kalite-celik.html">desgarro laminar</a>).</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> comprobamos con el certificado de material la calidad S355 exigida en el plano y registramos la trazabilidad por número de colada. Si no se indica, preguntamos por las condiciones de servicio y proponemos una opción adecuada en la oferta. <a href="../kaynakli-imalat.html">Nuestro servicio de fabricación soldada →</a></p></div>
`,
    faq: [
      ['¿Diferencia entre S355JR y S355J2?', 'El límite elástico es igual; cambia la tenacidad. JR cumple 27 J a +20 °C y J2 a −20 °C, por lo que J2 es más seguro frente a rotura frágil.'],
      ['¿Cuándo elegir S355K2?', 'En piezas gruesas, alto embridamiento, cargas dinámicas o clima frío. K2 ofrece 40 J a −20 °C.'],
      ['¿Qué es S355NL?', 'Una calidad S355 normalizada según EN 10025-3 que cumple 27 J a −50 °C, para baja temperatura.'],
      ['¿Qué significa S355J2+N?', 'S355J2 suministrado normalizado o con laminado normalizante, con estructura más homogénea y tenacidad fiable.']
    ],
    cta_h3: 'El material correcto, fabricación trazable',
    cta_p: 'Envíenos su plano; revisamos con usted calidad, espesor y condiciones de servicio.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'S355JR, S355J2, S355K2 et S355NL : quelle nuance S355 choisir ?',
    meta: 'Quelle différence entre S355JR, J0, J2, K2 et S355N, NL et M, ML ? Températures d’essai de résilience selon EN 10025, limite d’élasticité selon l’épaisseur, limites de CEV, état de livraison (+AR, +N) et choix avec l’EN 1993-1-10.',
    og: 'S355JR, J2, K2 et NL comparés',
    tag: 'Matériaux · Nuances d’acier',
    h1: 'S355JR, S355J2, S355K2 et S355NL : quelle nuance S355 choisir ?',
    crumb: 'Nuances S355',
    read: '6 min de lecture',
    body: `
<p>Le S355 est l’acier de construction le plus utilisé en fabrication soudée. Mais « S355 » sur un plan ne suffit pas : les lettres de <strong>qualité de ténacité</strong> déterminent le comportement à la rupture fragile par temps froid. Une mauvaise qualité ajoute un coût inutile ou crée un risque à basse température.</p>
<h2>Ce que dit la désignation</h2>
<p><strong>S</strong> désigne l’acier de construction, <strong>355</strong> la limite d’élasticité minimale (MPa) dans la plage la plus mince. Les lettres suivantes indiquent la température et l’énergie de l’essai Charpy V.</p>
<table class="data-table"><thead><tr><th>Nuance</th><th>Norme</th><th>Exigence de résilience (long.)</th></tr></thead><tbody>
<tr><td>S355JR</td><td>EN 10025-2</td><td>27 J à +20 °C</td></tr>
<tr><td>S355J0</td><td>EN 10025-2</td><td>27 J à 0 °C</td></tr>
<tr><td>S355J2</td><td>EN 10025-2</td><td>27 J à −20 °C</td></tr>
<tr><td>S355K2</td><td>EN 10025-2</td><td>40 J à −20 °C</td></tr>
<tr><td>S355N</td><td>EN 10025-3 (normalisé)</td><td>40 J à −20 °C</td></tr>
<tr><td>S355NL</td><td>EN 10025-3 (normalisé)</td><td>27 J à −50 °C</td></tr>
<tr><td>S355M / ML</td><td>EN 10025-4 (thermomécanique)</td><td>40 J à −20 °C / 27 J à −50 °C</td></tr>
</tbody></table>
<h2>La limite d’élasticité baisse avec l’épaisseur</h2>
<p>Le « 355 » concerne les tôles minces. Selon l’EN 10025-2, le minimum typique est 355 MPa jusqu’à 16 mm, 345 MPa de 16 à 40 mm et 335 MPa de 40 à 63 mm. La résistance à la traction est de 470–630 MPa (3–100 mm). Le calcul des pièces épaisses doit en tenir compte.</p>
<h2>Soudabilité : CEV</h2>
<p>Pour le soudage, le carbone équivalent (CEV) compte. L’EN 10025-2 le limite pour le S355 à environ 0,45–0,47 selon l’épaisseur ; une valeur plus basse peut être commandée. Avec un CEV et une épaisseur plus élevés, un préchauffage devient nécessaire (voir <a href="on-isitma-hesaplama.html">calcul du préchauffage</a>) ; l’analyse réelle du certificat est donc importante.</p>
<h2>État de livraison : +AR et +N</h2>
<p>Les nuances EN 10025-2 sont livrées brutes de laminage (+AR) ou en laminage normalisant (+N). Le <strong>S355J2+N</strong> offre une structure plus homogène et une ténacité plus fiable, préférable pour les pièces traitées thermiquement ou formées à chaud ensuite. Les nuances N et NL relèvent d’une autre norme, l’EN 10025-3, à l’état normalisé.</p>
<h2>Quelle nuance, quand ?</h2>
<ul>
<li><strong>S355JR :</strong> intérieur, pièces minces et moyennes sans risque de basse température ni de charge dynamique.</li>
<li><strong>S355J2 :</strong> choix le plus courant en charpente et construction de machines ; extérieur et épaisseurs moyennes.</li>
<li><strong>S355K2 :</strong> pièces épaisses, bridage élevé, charges dynamiques ou climat plus froid.</li>
<li><strong>S355NL / ML :</strong> ténacité jusqu’à −50 °C, p. ex. pays nordiques ou entrepôts frigorifiques.</li>
</ul>
<p>Le choix exact se fait avec le tableau de l’<strong>EN 1993-1-10</strong> : selon la température minimale de service, le niveau de contrainte et l’épaisseur, on lit l’épaisseur maximale admissible par nuance. À température égale, J2 admet nettement plus d’épaisseur que JR.</p>
<h2>Contrôle du certificat</h2>
<p>À la réception, vérifier sur le certificat EN 10204 3.1 la nuance, l’état de livraison, l’analyse chimique, le CEV, la traction et la résilience (voir <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a>). Les assemblages en T épais peuvent aussi exiger une qualité Z (voir <a href="lamellar-yirtilma-z-kalite-celik.html">arrachement lamellaire</a>).</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous vérifions sur le certificat matière la nuance S355 demandée sur le plan et enregistrons la traçabilité par numéro de coulée. Si la nuance manque, nous demandons les conditions de service et proposons une option adaptée au devis. <a href="../kaynakli-imalat.html">Notre fabrication soudée →</a></p></div>
`,
    faq: [
      ['Différence entre S355JR et S355J2 ?', 'La limite d’élasticité est identique ; la ténacité diffère. JR atteint 27 J à +20 °C, J2 à −20 °C : J2 est plus sûr contre la rupture fragile.'],
      ['Quand choisir S355K2 ?', 'Pour pièces épaisses, bridage élevé, charges dynamiques ou climat froid. K2 offre 40 J à −20 °C.'],
      ['Qu’est-ce que le S355NL ?', 'Une nuance S355 normalisée selon EN 10025-3 atteignant 27 J à −50 °C, pour basses températures.'],
      ['Que signifie S355J2+N ?', 'Un S355J2 livré normalisé ou en laminage normalisant, à structure plus homogène et ténacité fiable.']
    ],
    cta_h3: 'Le bon matériau, une fabrication traçable',
    cta_p: 'Envoyez votre plan ; nous examinons avec vous nuance, épaisseur et conditions de service.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'S355JR, S355J2, S355K2 e S355NL: quale qualità S355 scegliere?',
    meta: 'Differenze tra S355JR, J0, J2, K2 e S355N, NL e M, ML: temperature di prova di resilienza secondo EN 10025, snervamento in funzione dello spessore, limiti CEV, stato di fornitura (+AR, +N) e scelta con la EN 1993-1-10.',
    og: 'S355JR, J2, K2 e NL a confronto',
    tag: 'Materiali · Qualità di acciaio',
    h1: 'S355JR, S355J2, S355K2 e S355NL: quale qualità S355 scegliere?',
    crumb: 'Qualità S355',
    read: '6 min di lettura',
    body: `
<p>L’S355 è l’acciaio da costruzione più usato nella carpenteria saldata. Ma «S355» a disegno non basta: le lettere della <strong>qualità di tenacità</strong> determinano il comportamento contro la rottura fragile al freddo. Una qualità sbagliata aggiunge costi inutili o crea rischi a bassa temperatura.</p>
<h2>Cosa indica la designazione</h2>
<p><strong>S</strong> indica acciaio strutturale, <strong>355</strong> lo snervamento minimo (MPa) nella fascia più sottile. Le lettere successive indicano temperatura ed energia della prova Charpy V.</p>
<table class="data-table"><thead><tr><th>Qualità</th><th>Norma</th><th>Requisito di resilienza (long.)</th></tr></thead><tbody>
<tr><td>S355JR</td><td>EN 10025-2</td><td>27 J a +20 °C</td></tr>
<tr><td>S355J0</td><td>EN 10025-2</td><td>27 J a 0 °C</td></tr>
<tr><td>S355J2</td><td>EN 10025-2</td><td>27 J a −20 °C</td></tr>
<tr><td>S355K2</td><td>EN 10025-2</td><td>40 J a −20 °C</td></tr>
<tr><td>S355N</td><td>EN 10025-3 (normalizzato)</td><td>40 J a −20 °C</td></tr>
<tr><td>S355NL</td><td>EN 10025-3 (normalizzato)</td><td>27 J a −50 °C</td></tr>
<tr><td>S355M / ML</td><td>EN 10025-4 (termomeccanico)</td><td>40 J a −20 °C / 27 J a −50 °C</td></tr>
</tbody></table>
<h2>Lo snervamento cala con lo spessore</h2>
<p>Il «355» vale per lamiere sottili. Secondo la EN 10025-2 il minimo tipico è 355 MPa fino a 16 mm, 345 MPa da 16 a 40 mm e 335 MPa da 40 a 63 mm. La resistenza a trazione è 470–630 MPa (3–100 mm). Nei pezzi spessi va considerato nel calcolo.</p>
<h2>Saldabilità: CEV</h2>
<p>Per la saldatura conta il carbonio equivalente (CEV). La EN 10025-2 lo limita per l’S355 a circa 0,45–0,47 secondo lo spessore; si può ordinare un valore inferiore. Con CEV e spessore maggiori serve il preriscaldo (vedi <a href="on-isitma-hesaplama.html">calcolo del preriscaldo</a>); per questo conta l’analisi reale del certificato.</p>
<h2>Stato di fornitura: +AR e +N</h2>
<p>Le qualità EN 10025-2 si forniscono grezze di laminazione (+AR) o con laminazione normalizzante (+N). <strong>S355J2+N</strong> offre una struttura più omogenea e una tenacità più affidabile, preferibile se seguiranno trattamenti termici o formatura a caldo. Le qualità N e NL appartengono a un’altra norma, la EN 10025-3, allo stato normalizzato.</p>
<h2>Quale qualità e quando?</h2>
<ul>
<li><strong>S355JR:</strong> interni, pezzi sottili e medi senza rischio di bassa temperatura o carichi dinamici.</li>
<li><strong>S355J2:</strong> la scelta più comune in carpenteria e costruzione di macchine; esterni e spessori medi.</li>
<li><strong>S355K2:</strong> pezzi spessi, vincolo elevato, carichi dinamici o clima più freddo.</li>
<li><strong>S355NL / ML:</strong> tenacità fino a −50 °C, ad esempio paesi nordici o celle frigorifere.</li>
</ul>
<p>La scelta esatta si fa con la tabella della <strong>EN 1993-1-10</strong>: in base a temperatura minima di esercizio, livello di tensione e spessore si legge lo spessore massimo ammesso per qualità. A parità di temperatura, J2 ammette spessori molto maggiori di JR.</p>
<h2>Controllo del certificato</h2>
<p>In accettazione vanno verificati sul certificato EN 10204 3.1 qualità, stato di fornitura, analisi chimica, CEV, trazione e resilienza (vedi <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a>). I giunti a T spessi possono richiedere anche la qualità Z (vedi <a href="lamellar-yirtilma-z-kalite-celik.html">strappo lamellare</a>).</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> verifichiamo sul certificato di materiale la qualità S355 richiesta a disegno e registriamo la tracciabilità con il numero di colata. Se la qualità manca, chiediamo le condizioni d’esercizio e proponiamo un’opzione adatta in offerta. <a href="../kaynakli-imalat.html">La nostra carpenteria saldata →</a></p></div>
`,
    faq: [
      ['Differenza tra S355JR e S355J2?', 'Lo snervamento è uguale; cambia la tenacità. JR raggiunge 27 J a +20 °C, J2 a −20 °C: J2 è più sicuro contro la rottura fragile.'],
      ['Quando scegliere S355K2?', 'Per pezzi spessi, vincolo elevato, carichi dinamici o clima freddo. K2 offre 40 J a −20 °C.'],
      ['Cos’è l’S355NL?', 'Una qualità S355 normalizzata secondo EN 10025-3 che raggiunge 27 J a −50 °C, per basse temperature.'],
      ['Cosa significa S355J2+N?', 'S355J2 fornito normalizzato o con laminazione normalizzante, con struttura più omogenea e tenacità affidabile.']
    ],
    cta_h3: 'Il materiale giusto, una fabbricazione tracciabile',
    cta_p: 'Inviateci il disegno; valutiamo insieme qualità, spessore e condizioni d’esercizio.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'S355JR, S355J2, S355K2 en S355NL: welke S355-kwaliteit kiezen?',
    meta: 'Wat is het verschil tussen S355JR, J0, J2, K2 en S355N, NL en M, ML? Kerfslagtemperaturen volgens EN 10025, vloeigrens naar dikte, CEV-grenzen, leveringstoestand (+AR, +N) en kwaliteitskeuze met EN 1993-1-10.',
    og: 'S355JR, J2, K2 en NL vergeleken',
    tag: 'Materialen · Staalkwaliteiten',
    h1: 'S355JR, S355J2, S355K2 en S355NL: welke S355-kwaliteit kiezen?',
    crumb: 'S355-kwaliteiten',
    read: '6 min lezen',
    body: `
<p>S355 is het meest gebruikte constructiestaal in de lasfabricage. Maar alleen “S355” op de tekening is niet genoeg: de letters voor de <strong>taaiheidsklasse</strong> bepalen hoe het deel zich bij kou gedraagt tegen brosse breuk. Een verkeerde kwaliteit kost onnodig geld of geeft risico bij lage temperatuur.</p>
<h2>Wat de aanduiding zegt</h2>
<p><strong>S</strong> staat voor constructiestaal, <strong>355</strong> voor de minimale vloeigrens (MPa) in het dunste bereik. De letters daarna geven temperatuur en energie van de Charpy-V-kerfslagproef.</p>
<table class="data-table"><thead><tr><th>Kwaliteit</th><th>Norm</th><th>Kerfslageis (langs)</th></tr></thead><tbody>
<tr><td>S355JR</td><td>EN 10025-2</td><td>27 J bij +20 °C</td></tr>
<tr><td>S355J0</td><td>EN 10025-2</td><td>27 J bij 0 °C</td></tr>
<tr><td>S355J2</td><td>EN 10025-2</td><td>27 J bij −20 °C</td></tr>
<tr><td>S355K2</td><td>EN 10025-2</td><td>40 J bij −20 °C</td></tr>
<tr><td>S355N</td><td>EN 10025-3 (genormaliseerd)</td><td>40 J bij −20 °C</td></tr>
<tr><td>S355NL</td><td>EN 10025-3 (genormaliseerd)</td><td>27 J bij −50 °C</td></tr>
<tr><td>S355M / ML</td><td>EN 10025-4 (thermomechanisch)</td><td>40 J bij −20 °C / 27 J bij −50 °C</td></tr>
</tbody></table>
<h2>De vloeigrens daalt met de dikte</h2>
<p>De “355” geldt voor dunne plaat. Volgens EN 10025-2 is de minimale vloeigrens typisch 355 MPa tot 16 mm, 345 MPa voor 16–40 mm en 335 MPa voor 40–63 mm. De treksterkte is 470–630 MPa (3–100 mm). Bij dikke delen moet de berekening hiermee rekening houden.</p>
<h2>Lasbaarheid: CEV</h2>
<p>Voor lassen telt het koolstofequivalent (CEV). EN 10025-2 beperkt het voor S355 afhankelijk van de dikte tot ongeveer 0,45–0,47; een lagere waarde kan worden besteld. Met hogere CEV en dikte wordt voorwarmen nodig (zie <a href="on-isitma-hesaplama.html">berekening van voorwarmen</a>), daarom is de werkelijke analyse op het certificaat belangrijk.</p>
<h2>Leveringstoestand: +AR en +N</h2>
<p>Kwaliteiten volgens EN 10025-2 worden walsruw (+AR) of normaliserend gewalst (+N) geleverd. <strong>S355J2+N</strong> geeft een homogenere structuur en betrouwbaardere taaiheid, vooral gewenst bij latere warmtebehandeling of warmvervormen. N- en NL-kwaliteiten vallen onder een aparte norm, EN 10025-3, in genormaliseerde toestand.</p>
<h2>Welke kwaliteit wanneer?</h2>
<ul>
<li><strong>S355JR:</strong> binnen, dunne en middeldikke delen zonder risico op lage temperatuur of dynamische belasting.</li>
<li><strong>S355J2:</strong> de meest gekozen kwaliteit in staalbouw en machinebouw; buiten en middelgrote diktes.</li>
<li><strong>S355K2:</strong> dikke delen, hoge inklemming, dynamische belasting of kouder klimaat.</li>
<li><strong>S355NL / ML:</strong> taaiheid tot −50 °C, bijvoorbeeld Scandinavië of koelopslag.</li>
</ul>
<p>De exacte keuze gebeurt met de tabel uit <strong>EN 1993-1-10</strong>: voor de laagste gebruikstemperatuur, het spanningsniveau en de plaatdikte wordt per kwaliteit de maximaal toelaatbare dikte afgelezen. Bij dezelfde temperatuur staat J2 aanzienlijk grotere diktes toe dan JR.</p>
<h2>Certificaatcontrole</h2>
<p>Bij ontvangst moeten op het EN 10204 3.1-certificaat kwaliteit, leveringstoestand, chemische analyse, CEV, trek- en kerfslagwaarden worden gecontroleerd (zie <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a>). Dikke T-verbindingen kunnen daarnaast Z-kwaliteit vragen (zie <a href="lamellar-yirtilma-z-kalite-celik.html">lamellair scheuren</a>).</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> we controleren de op de tekening gevraagde S355-kwaliteit aan de hand van het materiaalcertificaat en leggen traceerbaarheid vast via het chargenummer. Staat de kwaliteit er niet op, dan vragen we naar de gebruiksomstandigheden en stellen we bij de offerte een passende kwaliteit voor. <a href="../kaynakli-imalat.html">Onze lasfabricage →</a></p></div>
`,
    faq: [
      ['Verschil tussen S355JR en S355J2?', 'De vloeigrens is gelijk; het verschil zit in taaiheid. JR haalt 27 J bij +20 °C, J2 bij −20 °C. J2 is bij kou veiliger tegen brosse breuk.'],
      ['Wanneer kies je S355K2?', 'Bij dikke delen, hoge inklemming, dynamische belasting of koud klimaat. K2 biedt 40 J bij −20 °C.'],
      ['Wat is S355NL?', 'Een genormaliseerde S355-kwaliteit volgens EN 10025-3 met 27 J bij −50 °C, voor lage temperaturen.'],
      ['Wat betekent S355J2+N?', 'S355J2 geleverd genormaliseerd of normaliserend gewalst, met homogenere structuur en betrouwbare taaiheid.']
    ],
    cta_h3: 'Het juiste materiaal, traceerbare fabricage',
    cta_p: 'Stuur uw tekening; we bekijken samen kwaliteit, dikte en gebruiksomstandigheden.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'S355JR, S355J2, S355K2 og S355NL: hvilken S355-kvalitet bør du velge?',
    meta: 'Hva er forskjellen på S355JR, J0, J2, K2 og S355N, NL og M, ML? Slagseighetstemperaturer etter EN 10025, flytegrense etter tykkelse, CEV-grenser, leveringstilstand (+AR, +N) og valg med EN 1993-1-10.',
    og: 'S355JR, J2, K2 og NL sammenlignet',
    tag: 'Materialer · Stålkvaliteter',
    h1: 'S355JR, S355J2, S355K2 og S355NL: hvilken S355-kvalitet bør du velge?',
    crumb: 'S355-kvaliteter',
    read: '6 min lesing',
    body: `
<p>S355 er det mest brukte konstruksjonsstålet i sveiset tilvirkning. Men «S355» på tegningen er ikke nok: bokstavene for <strong>seighetsklasse</strong> bestemmer hvordan delen oppfører seg mot sprøbrudd i kulde. Feil kvalitet gir enten unødvendig kostnad eller risiko ved lav temperatur.</p>
<h2>Hva betegnelsen forteller</h2>
<p><strong>S</strong> står for konstruksjonsstål, <strong>355</strong> for minste flytegrense (MPa) i det tynneste området. Bokstavene etterpå angir temperatur og energi for Charpy V-slagprøven.</p>
<table class="data-table"><thead><tr><th>Kvalitet</th><th>Standard</th><th>Slagseighetskrav (langs)</th></tr></thead><tbody>
<tr><td>S355JR</td><td>EN 10025-2</td><td>27 J ved +20 °C</td></tr>
<tr><td>S355J0</td><td>EN 10025-2</td><td>27 J ved 0 °C</td></tr>
<tr><td>S355J2</td><td>EN 10025-2</td><td>27 J ved −20 °C</td></tr>
<tr><td>S355K2</td><td>EN 10025-2</td><td>40 J ved −20 °C</td></tr>
<tr><td>S355N</td><td>EN 10025-3 (normalisert)</td><td>40 J ved −20 °C</td></tr>
<tr><td>S355NL</td><td>EN 10025-3 (normalisert)</td><td>27 J ved −50 °C</td></tr>
<tr><td>S355M / ML</td><td>EN 10025-4 (termomekanisk)</td><td>40 J ved −20 °C / 27 J ved −50 °C</td></tr>
</tbody></table>
<h2>Flytegrensen synker med tykkelsen</h2>
<p>«355» gjelder tynn plate. Etter EN 10025-2 er typisk minste flytegrense 355 MPa opp til 16 mm, 345 MPa for 16–40 mm og 335 MPa for 40–63 mm. Strekkfastheten er 470–630 MPa (3–100 mm). Ved tykke deler må dette tas med i dimensjoneringen.</p>
<h2>Sveisbarhet: CEV</h2>
<p>For sveising teller karbonekvivalenten (CEV). EN 10025-2 begrenser den for S355 til omtrent 0,45–0,47 avhengig av tykkelse, og lavere verdi kan bestilles. Med høyere CEV og tykkelse blir forvarming nødvendig (se <a href="on-isitma-hesaplama.html">beregning av forvarming</a>), derfor er den faktiske analysen i sertifikatet viktig.</p>
<h2>Leveringstilstand: +AR og +N</h2>
<p>Kvaliteter etter EN 10025-2 leveres valset (+AR) eller normaliserende valset (+N). <strong>S355J2+N</strong> gir jevnere struktur og mer pålitelig seighet, særlig ønskelig ved senere varmebehandling eller varmforming. N- og NL-kvaliteter hører til en egen standard, EN 10025-3, i normalisert tilstand.</p>
<h2>Hvilken kvalitet når?</h2>
<ul>
<li><strong>S355JR:</strong> innendørs, tynne og middels tykke deler uten risiko for lav temperatur eller dynamisk last.</li>
<li><strong>S355J2:</strong> det vanligste valget i stålkonstruksjoner og maskinbygging; utendørs og middels tykkelser.</li>
<li><strong>S355K2:</strong> tykke deler, høy innspenning, dynamisk last eller kaldere klima.</li>
<li><strong>S355NL / ML:</strong> seighet ned til −50 °C, for eksempel i Norden eller kjølelager.</li>
</ul>
<p>Det eksakte valget gjøres med tabellen i <strong>EN 1993-1-10</strong>: ut fra laveste brukstemperatur, spenningsnivå og platetykkelse leses største tillatte tykkelse for hver kvalitet. Ved samme temperatur tillater J2 betydelig større tykkelse enn JR.</p>
<h2>Kontroll av sertifikat</h2>
<p>Ved mottak skal EN 10204 3.1-sertifikatet kontrolleres for kvalitet, leveringstilstand, kjemisk analyse, CEV, strekk- og slagverdier (se <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a>). Tykke T-forbindelser kan i tillegg kreve Z-kvalitet (se <a href="lamellar-yirtilma-z-kalite-celik.html">lamellær riving</a>).</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> vi kontrollerer S355-kvaliteten som kreves på tegningen mot materialsertifikatet og registrerer sporbarhet med smeltenummer. Mangler kvaliteten, spør vi om bruksforholdene og foreslår et egnet alternativ i tilbudet. <a href="../kaynakli-imalat.html">Vår sveisede tilvirkning →</a></p></div>
`,
    faq: [
      ['Forskjell på S355JR og S355J2?', 'Flytegrensen er lik; forskjellen er seighet. JR oppfyller 27 J ved +20 °C, J2 ved −20 °C. J2 er sikrere mot sprøbrudd i kulde.'],
      ['Når velges S355K2?', 'For tykke deler, høy innspenning, dynamisk last eller kaldt klima. K2 gir 40 J ved −20 °C.'],
      ['Hva er S355NL?', 'En normalisert S355-kvalitet etter EN 10025-3 som oppfyller 27 J ved −50 °C, for lave temperaturer.'],
      ['Hva betyr S355J2+N?', 'S355J2 levert normalisert eller normaliserende valset, med jevnere struktur og pålitelig seighet.']
    ],
    cta_h3: 'Riktig materiale, sporbar tilvirkning',
    cta_p: 'Send tegningen; vi går gjennom kvalitet, tykkelse og bruksforhold sammen med deg.',
    cta_btn: 'Be om tilbud →'
  }
};
