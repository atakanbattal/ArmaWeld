export default {
  order: 6,
  slug: 'ultrasonik-muayene-mi-radyografi-mi',
  key: 'p06_utrt',
  date: '2026-11-16',
  keywords: 'ultrasonik muayene mi radyografi mi, UT RT farkı, kaynak ultrasonik test, radyografik muayene kaynak, PAUT, TOFD, UT vs RT welding, Ultraschall oder Durchstrahlung',
  related: ['ndt-tahribatsiz-muayene-yontemleri', 'kaynak-muayene-raporu-nasil-okunur', 'iso-5817-kalite-seviyeleri', 'kaynak-hatalari-onarim'],
  tr: {
    title: 'Ultrasonik Muayene mi, Radyografi mi? Kaynakta UT ve RT Karşılaştırması',
    meta: 'Kaynak muayenesinde UT ile RT arasındaki farklar: hangi hatayı hangisi daha iyi bulur, kalınlık sınırları, maliyet, süre, iş güvenliği, kayıt ve EN 1090-2 kapsamında yöntem seçimi.',
    og: 'Ultrasonik Muayene mi, Radyografi mi?',
    tag: 'Kalite · NDT',
    h1: 'Ultrasonik Muayene mi, Radyografi mi? Kaynakta UT ve RT Seçimi',
    crumb: 'UT mi RT mi',
    read: '7 dk okuma',
    body: `
<p>Hacimsel kaynak muayenesinde iki ana yöntem vardır: ultrasonik muayene (UT) ve radyografik muayene (RT). İkisi de kaynağın içini kontrol eder, ancak farklı fiziksel ilkelere dayanır ve farklı hata türlerini farklı başarıyla bulur. Şartnamede yöntem belirtilmemişse veya "UT veya RT" yazıyorsa doğru seçim parçanın geometrisine, kalınlığına ve aranan hata tipine bağlıdır.</p>
<h2>Temel Fark</h2>
<p><strong>UT</strong>, malzemeye yüksek frekanslı ses dalgası gönderir ve süreksizliklerden dönen yansımaları değerlendirir. <strong>RT</strong> ise X ışını veya gama ışını ile kaynağın bir görüntüsünü filme veya dijital dedektöre düşürür. RT bir fotoğraf gibidir; UT ise bir sonar gibidir.</p>
<h2>Hangi Hatayı Hangisi Daha İyi Bulur?</h2>
<table class="data-table"><thead><tr><th>Hata türü</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Çatlak (düzlemsel)</td><td>Çok iyi, yönelime bağlı</td><td>Işın yönüne paralel değilse zayıf</td></tr>
<tr><td>Ergime eksikliği (yan duvar)</td><td>Çok iyi</td><td>Zayıf ila orta</td></tr>
<tr><td>Kök nüfuziyet eksikliği</td><td>İyi</td><td>İyi</td></tr>
<tr><td>Gözenek (hacimsel)</td><td>Orta</td><td>Çok iyi</td></tr>
<tr><td>Cüruf kalıntısı</td><td>İyi</td><td>Çok iyi</td></tr>
<tr><td>Tungsten kalıntısı</td><td>Zayıf</td><td>Çok iyi</td></tr>
</tbody></table>
<p>Kısaca: düzlemsel ve tehlikeli hatalarda UT, hacimsel hatalarda RT daha güçlüdür. Yorulma yüküne maruz yapılarda çatlak ve ergime eksikliği en kritik hatalar olduğu için UT çoğu zaman tercih edilir.</p>
<h2>Kalınlık ve Geometri</h2>
<ul>
<li><strong>UT</strong> genellikle 8 mm ve üzeri kalınlıklarda verimlidir. EN ISO 17640 standart olarak 8 mm ile 100 mm arası ferritik çelikleri kapsar; daha ince malzemelerde özel teknik gerekir. Kalınlık arttıkça UT'nin avantajı büyür.</li>
<li><strong>RT</strong> ince malzemelerde çok iyi sonuç verir. Kalınlık arttıkça daha güçlü kaynak ve daha uzun pozlama süresi gerekir, görüntü hassasiyeti düşer.</li>
<li>RT için kaynağın iki tarafına erişim gerekir (bir tarafta kaynak, diğer tarafta film). UT tek taraftan yapılabilir.</li>
<li>Köşe kaynakları ve T birleşimlerde RT görüntüsünü yorumlamak zordur; UT bu geometrilerde daha uygundur.</li>
</ul>
<h2>Malzeme</h2>
<p>İri taneli östenitik paslanmaz çelik ve dupleks kaynaklarında ses dalgası saçılır, klasik UT zorlaşır. Bu malzemelerde RT veya özel UT teknikleri (TRL probları, PAUT) kullanılır. Karbon ve düşük alaşımlı yapı çeliklerinde UT sorunsuz uygulanır.</p>
<h2>Kayıt ve İzlenebilirlik</h2>
<p>RT'nin en büyük avantajı kalıcı bir görüntü üretmesidir. Film yıllar sonra tekrar incelenebilir. Klasik manuel UT'de ise kayıt, operatörün rapora yazdığı bulgulardan ibarettir. Faz dizinli ultrasonik (PAUT) ve TOFD teknikleri bu açığı kapatır; tarama verisi dijital olarak saklanır ve tekrar değerlendirilebilir.</p>
<h2>Süre, Maliyet ve İş Güvenliği</h2>
<table class="data-table"><thead><tr><th>Kriter</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Sonuç süresi</td><td>Anında</td><td>Film banyosu veya dijital işlem sonrası</td></tr>
<tr><td>Saha güvenliği</td><td>Radyasyon yok, çalışma kesilmez</td><td>Radyasyon alanı boşaltılır</td></tr>
<tr><td>Kalın parçada maliyet</td><td>Düşük</td><td>Yüksek</td></tr>
<tr><td>İnce parçada maliyet</td><td>Teknik zorlaşır</td><td>Uygun</td></tr>
<tr><td>Operatör bağımlılığı</td><td>Yüksek</td><td>Daha düşük (yorum aşamasında)</td></tr>
</tbody></table>
<p>RT sırasında radyasyon nedeniyle çevredeki çalışmanın durması, üretim planını etkiler. Bu yüzden RT çekimleri genellikle vardiya dışında veya ayrı bir alanda yapılır.</p>
<h2>Standartlar Ne Diyor?</h2>
<p>EN 1090-2, hacimsel muayene için yöntemi zorunlu tutmaz; seçimi kalınlık, birleşim tipi ve malzemeye göre yapmayı ister ve kalın alın kaynaklarında UT'yi öne çıkarır. Basınçlı ekipmanda (EN 13445, PED) ve bazı müşteri şartnamelerinde yöntem açıkça belirtilir. Şartnamede yöntem yoksa teklif aşamasında yazılı olarak netleştirilmelidir.</p>
<h2>Pratik Seçim Rehberi</h2>
<ul>
<li>Kalın alın kaynağı (15 mm üzeri), yorulma yükü, çatlak riski: <strong>UT</strong></li>
<li>İnce cidarlı boru ve sac alın kaynağı, gözenek kontrolü: <strong>RT</strong></li>
<li>Kalıcı görüntü kaydı şartı: <strong>RT</strong> veya <strong>PAUT</strong></li>
<li>Östenitik paslanmaz kaynak: <strong>RT</strong> veya özel UT</li>
<li>T ve köşe birleşimleri: <strong>UT</strong></li>
<li>Kritik kaynaklar: iki yöntemin birlikte kullanılması</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> UT muayenesini ekibimizdeki ISO 9712 Seviye 2 sertifikalı personel yapar. RT çekimi iş ortağımız tarafından yapılır; filmleri ekibimizdeki Seviye 2 personel değerlendirir ve raporlar. Hangi yöntemin uygun olduğunu çiziminiz ve şartnamenize göre teklif aşamasında öneririz. <a href="../ndt.html">NDT hizmetlerimizi inceleyin →</a></p></div>
`,
    faq: [
      ['UT ve RT birlikte kullanılır mı?', 'Evet. Kritik kaynaklarda iki yöntem birbirini tamamlar: UT düzlemsel hataları, RT hacimsel hataları daha iyi bulur. Bazı şartnameler belirli dikişler için ikisini birden ister.'],
      ['PAUT ve TOFD nedir?', 'PAUT (faz dizinli ultrasonik) çok elemanlı problarla ses demetini elektronik olarak yönlendirir ve tarama görüntüsü üretir. TOFD, uçlardan kırınan sinyallerle hatanın yüksekliğini ölçer. İkisi de kayıt bırakır ve RT yerine kullanılabilir.'],
      ['İnce saclarda UT yapılabilir mi?', 'Klasik UT 8 mm altında zorlaşır. İnce malzemede RT veya yüksek frekanslı özel UT teknikleri tercih edilir.'],
      ['Hangi yöntem daha ucuz?', 'Kalın parçalarda UT genellikle daha ucuz ve hızlıdır. İnce cidarlı ve seri boru kaynaklarında RT daha ekonomik olabilir. Toplam maliyete üretim durmasını da eklemek gerekir.']
    ],
    cta_h3: 'Kaynaklarınız için doğru NDT yöntemini birlikte seçelim',
    cta_p: 'Çiziminizi ve şartnamenizi gönderin; muayene yöntemini ve kapsamını teklifte netleştirelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Ultrasonic or Radiographic Testing? UT vs RT for Welds',
    meta: 'UT vs RT for weld inspection: which method finds which defect, thickness limits, cost, time, safety, records and how to choose under EN 1090-2.',
    og: 'Ultrasonic or Radiographic Testing for Welds?',
    tag: 'Quality · NDT',
    h1: 'Ultrasonic or Radiographic Testing? Choosing Between UT and RT for Welds',
    crumb: 'UT vs RT',
    read: '7 min read',
    body: `
<p>There are two main methods for volumetric weld inspection: ultrasonic testing (UT) and radiographic testing (RT). Both look inside the weld, but they rely on different physics and find different defects with different success. If the specification names no method, or says "UT or RT", the right choice depends on geometry, thickness and the type of defect you are looking for.</p>
<h2>The Basic Difference</h2>
<p><strong>UT</strong> sends high-frequency sound into the material and evaluates the echoes returning from discontinuities. <strong>RT</strong> projects an image of the weld onto film or a digital detector using X-rays or gamma rays. RT works like a photograph, UT like sonar.</p>
<h2>Which Defect Does Each Find Best?</h2>
<table class="data-table"><thead><tr><th>Defect type</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Crack (planar)</td><td>Very good, orientation-dependent</td><td>Poor unless parallel to the beam</td></tr>
<tr><td>Lack of sidewall fusion</td><td>Very good</td><td>Poor to fair</td></tr>
<tr><td>Incomplete root penetration</td><td>Good</td><td>Good</td></tr>
<tr><td>Porosity (volumetric)</td><td>Fair</td><td>Very good</td></tr>
<tr><td>Slag inclusion</td><td>Good</td><td>Very good</td></tr>
<tr><td>Tungsten inclusion</td><td>Poor</td><td>Very good</td></tr>
</tbody></table>
<p>In short: UT is stronger on planar, dangerous defects, RT on volumetric ones. Because cracks and lack of fusion are the most critical defects in fatigue-loaded structures, UT is often preferred there.</p>
<h2>Thickness and Geometry</h2>
<ul>
<li><strong>UT</strong> is usually efficient from 8 mm upward. EN ISO 17640 covers ferritic steel from 8 to 100 mm as standard; thinner material needs special techniques. The thicker the part, the bigger UT's advantage.</li>
<li><strong>RT</strong> gives excellent results on thin material. With increasing thickness it needs a stronger source and longer exposure, and sensitivity drops.</li>
<li>RT needs access to both sides of the weld (source on one side, film on the other). UT can be done from one side.</li>
<li>RT images of fillet welds and T-joints are hard to interpret; UT suits these geometries better.</li>
</ul>
<h2>Material</h2>
<p>In coarse-grained austenitic stainless and duplex welds, sound is scattered and conventional UT becomes difficult. These materials use RT or special UT techniques (TRL probes, PAUT). In carbon and low-alloy structural steels, UT works without problems.</p>
<h2>Records and Traceability</h2>
<p>RT's biggest advantage is a permanent image that can be reviewed years later. With conventional manual UT, the record is only what the operator writes in the report. Phased array (PAUT) and TOFD close this gap: scan data is stored digitally and can be re-evaluated.</p>
<h2>Time, Cost and Safety</h2>
<table class="data-table"><thead><tr><th>Criterion</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Time to result</td><td>Immediate</td><td>After film processing or digital readout</td></tr>
<tr><td>Site safety</td><td>No radiation, work continues</td><td>Radiation area cleared</td></tr>
<tr><td>Cost on thick parts</td><td>Low</td><td>High</td></tr>
<tr><td>Cost on thin parts</td><td>Technique harder</td><td>Reasonable</td></tr>
<tr><td>Operator dependence</td><td>High</td><td>Lower (at interpretation stage)</td></tr>
</tbody></table>
<p>Because surrounding work must stop during RT, it affects the production plan. RT exposures are therefore often done outside shifts or in a separate area.</p>
<h2>What Do the Standards Say?</h2>
<p>EN 1090-2 does not prescribe the volumetric method; it asks for a choice based on thickness, joint type and material, and favours UT for thick butt welds. Pressure equipment (EN 13445, PED) and some customer specifications state the method explicitly. If the specification does not, clarify it in writing at quotation stage.</p>
<h2>Practical Selection Guide</h2>
<ul>
<li>Thick butt weld (over 15 mm), fatigue loading, crack risk: <strong>UT</strong></li>
<li>Thin-wall pipe and sheet butt welds, porosity control: <strong>RT</strong></li>
<li>Permanent image record required: <strong>RT</strong> or <strong>PAUT</strong></li>
<li>Austenitic stainless welds: <strong>RT</strong> or special UT</li>
<li>T-joints and corner joints: <strong>UT</strong></li>
<li>Critical welds: both methods combined</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> UT is carried out by ISO 9712 Level 2 certified personnel in our team. RT exposure is done by our partner; films are evaluated and reported by Level 2 personnel in our team. We recommend the suitable method at quotation stage based on your drawing and specification. <a href="../ndt.html">See our NDT services →</a></p></div>
`,
    faq: [
      ['Are UT and RT used together?', 'Yes. On critical welds the methods complement each other: UT finds planar defects better, RT volumetric ones. Some specifications require both on certain welds.'],
      ['What are PAUT and TOFD?', 'PAUT (phased array UT) steers the sound beam electronically with multi-element probes and produces a scan image. TOFD measures defect height from signals diffracted at the tips. Both leave a record and can replace RT.'],
      ['Can thin sheet be tested with UT?', 'Conventional UT becomes difficult below 8 mm. RT or special high-frequency UT techniques are preferred on thin material.'],
      ['Which method is cheaper?', 'UT is usually cheaper and faster on thick parts. RT can be more economical on thin-wall, repetitive pipe welds. Include production downtime in the total cost.']
    ],
    cta_h3: 'Let us choose the right NDT method for your welds',
    cta_p: 'Send your drawing and specification and we will define the inspection method and extent in our quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Ultraschall oder Durchstrahlung? UT und RT bei Schweißnähten im Vergleich',
    meta: 'UT oder RT für die Schweißnahtprüfung: Welches Verfahren findet welche Unregelmäßigkeit, Dickenbereiche, Kosten, Zeit, Strahlenschutz, Dokumentation und Auswahl nach EN 1090-2.',
    og: 'Ultraschall oder Durchstrahlung bei Schweißnähten?',
    tag: 'Qualität · ZfP',
    h1: 'Ultraschall oder Durchstrahlung? UT und RT bei Schweißnähten richtig wählen',
    crumb: 'UT oder RT',
    read: '7 Min. Lesezeit',
    body: `
<p>Für die volumetrische Schweißnahtprüfung gibt es zwei Hauptverfahren: die Ultraschallprüfung (UT) und die Durchstrahlungsprüfung (RT). Beide prüfen das Nahtinnere, beruhen aber auf unterschiedlichen physikalischen Prinzipien und finden verschiedene Unregelmäßigkeiten unterschiedlich gut. Nennt die Spezifikation kein Verfahren oder steht dort „UT oder RT", hängt die richtige Wahl von Geometrie, Dicke und gesuchter Fehlerart ab.</p>
<h2>Der grundlegende Unterschied</h2>
<p><strong>UT</strong> schickt hochfrequenten Schall in den Werkstoff und wertet die Echos von Unregelmäßigkeiten aus. <strong>RT</strong> bildet die Naht mit Röntgen- oder Gammastrahlung auf Film oder Digitaldetektor ab. RT gleicht einer Fotografie, UT einem Sonar.</p>
<h2>Welches Verfahren findet was?</h2>
<table class="data-table"><thead><tr><th>Unregelmäßigkeit</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Riss (flächig)</td><td>Sehr gut, orientierungsabhängig</td><td>Schwach, außer parallel zur Strahlrichtung</td></tr>
<tr><td>Flankenbindefehler</td><td>Sehr gut</td><td>Schwach bis mittel</td></tr>
<tr><td>Ungenügende Durchschweißung</td><td>Gut</td><td>Gut</td></tr>
<tr><td>Poren (volumetrisch)</td><td>Mittel</td><td>Sehr gut</td></tr>
<tr><td>Schlackeneinschluss</td><td>Gut</td><td>Sehr gut</td></tr>
<tr><td>Wolframeinschluss</td><td>Schwach</td><td>Sehr gut</td></tr>
</tbody></table>
<p>Kurz: UT ist bei flächigen, gefährlichen Fehlern stärker, RT bei volumetrischen. Da Risse und Bindefehler bei schwingbeanspruchten Konstruktionen am kritischsten sind, wird dort häufig UT bevorzugt.</p>
<h2>Dicke und Geometrie</h2>
<ul>
<li><strong>UT</strong> ist meist ab 8 mm effizient. DIN EN ISO 17640 gilt standardmäßig für ferritische Stähle von 8 bis 100 mm; dünnere Werkstoffe erfordern Sondertechniken. Je dicker, desto größer der Vorteil.</li>
<li><strong>RT</strong> liefert bei dünnen Werkstoffen sehr gute Ergebnisse. Mit zunehmender Dicke braucht es stärkere Quellen und längere Belichtung, die Empfindlichkeit sinkt.</li>
<li>RT erfordert Zugang zu beiden Seiten (Quelle und Film). UT ist einseitig möglich.</li>
<li>Bei Kehlnähten und T-Stößen sind RT-Bilder schwer auszuwerten; UT eignet sich hier besser.</li>
</ul>
<h2>Werkstoff</h2>
<p>In grobkörnigen austenitischen und Duplex-Schweißgütern wird der Schall gestreut, konventionelle UT wird schwierig. Hier werden RT oder Sonderverfahren (SEL-Prüfköpfe, PAUT) eingesetzt. Bei unlegierten und niedriglegierten Baustählen ist UT problemlos.</p>
<h2>Dokumentation und Rückverfolgbarkeit</h2>
<p>Der größte Vorteil von RT ist ein dauerhaftes Bild, das auch Jahre später geprüft werden kann. Bei konventioneller Hand-UT besteht die Dokumentation nur aus den Angaben des Prüfers. Phased Array (PAUT) und TOFD schließen diese Lücke: Die Scandaten werden digital gespeichert und können erneut bewertet werden.</p>
<h2>Zeit, Kosten und Strahlenschutz</h2>
<table class="data-table"><thead><tr><th>Kriterium</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Ergebnis</td><td>Sofort</td><td>Nach Filmentwicklung oder digitaler Auswertung</td></tr>
<tr><td>Arbeitssicherheit</td><td>Keine Strahlung, Arbeit läuft weiter</td><td>Strahlenschutzbereich wird geräumt</td></tr>
<tr><td>Kosten bei dicken Teilen</td><td>Niedrig</td><td>Hoch</td></tr>
<tr><td>Kosten bei dünnen Teilen</td><td>Technik schwieriger</td><td>Angemessen</td></tr>
<tr><td>Prüferabhängigkeit</td><td>Hoch</td><td>Geringer (bei der Auswertung)</td></tr>
</tbody></table>
<p>Da während der RT umliegende Arbeiten ruhen müssen, beeinflusst sie die Fertigungsplanung. RT-Aufnahmen erfolgen daher oft außerhalb der Schichten oder in einem separaten Bereich.</p>
<h2>Was sagen die Normen?</h2>
<p>EN 1090-2 schreibt das volumetrische Verfahren nicht vor; die Wahl soll sich nach Dicke, Stoßart und Werkstoff richten, bei dicken Stumpfnähten wird UT bevorzugt. Bei Druckgeräten (EN 13445, DGRL) und in manchen Kundenspezifikationen ist das Verfahren festgelegt. Fehlt die Angabe, sollte sie im Angebot schriftlich geklärt werden.</p>
<h2>Praxisleitfaden</h2>
<ul>
<li>Dicke Stumpfnaht (über 15 mm), Schwingbeanspruchung, Rissgefahr: <strong>UT</strong></li>
<li>Dünnwandige Rohr- und Blechstumpfnähte, Porenkontrolle: <strong>RT</strong></li>
<li>Dauerhafte Bilddokumentation gefordert: <strong>RT</strong> oder <strong>PAUT</strong></li>
<li>Austenitische Edelstahlnähte: <strong>RT</strong> oder Sonder-UT</li>
<li>T-Stöße und Ecknähte: <strong>UT</strong></li>
<li>Kritische Nähte: beide Verfahren kombiniert</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> UT führt nach ISO 9712 Stufe 2 zertifiziertes Personal in unserem Team durch. RT-Aufnahmen erstellt unser Partner; die Filme bewertet und protokolliert Stufe-2-Personal in unserem Team. Das passende Verfahren empfehlen wir im Angebot anhand Ihrer Zeichnung und Spezifikation. <a href="../ndt.html">Unsere ZfP-Leistungen →</a></p></div>
`,
    faq: [
      ['Werden UT und RT kombiniert?', 'Ja. Bei kritischen Nähten ergänzen sie sich: UT findet flächige, RT volumetrische Fehler besser. Manche Spezifikationen fordern beide für bestimmte Nähte.'],
      ['Was sind PAUT und TOFD?', 'PAUT (Phased Array) steuert den Schallstrahl elektronisch mit Gruppenstrahlern und erzeugt ein Scanbild. TOFD misst die Fehlerhöhe über Beugungssignale an den Fehlerspitzen. Beide sind dokumentierbar und können RT ersetzen.'],
      ['Ist UT bei dünnen Blechen möglich?', 'Konventionelle UT wird unter 8 mm schwierig. Bei dünnen Werkstoffen werden RT oder hochfrequente Sondertechniken bevorzugt.'],
      ['Welches Verfahren ist günstiger?', 'Bei dicken Teilen ist UT meist günstiger und schneller. Bei dünnwandigen Serienrohrnähten kann RT wirtschaftlicher sein. Produktionsstillstand gehört in die Gesamtkosten.']
    ],
    cta_h3: 'Wählen wir gemeinsam das passende ZfP-Verfahren',
    cta_p: 'Senden Sie Zeichnung und Spezifikation. Wir legen Prüfverfahren und Prüfumfang im Angebot fest.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: '¿Ultrasonidos o radiografía? UT frente a RT en soldadura',
    meta: 'UT frente a RT en la inspección de soldaduras: qué defecto detecta mejor cada método, límites de espesor, coste, tiempo, seguridad, registro y elección según EN 1090-2.',
    og: '¿Ultrasonidos o radiografía en soldadura?',
    tag: 'Calidad · END',
    h1: '¿Ultrasonidos o radiografía? Cómo elegir entre UT y RT en soldadura',
    crumb: 'UT o RT',
    read: '7 min de lectura',
    body: `
<p>Hay dos métodos principales para la inspección volumétrica de soldaduras: los ultrasonidos (UT) y la radiografía (RT). Ambos miran dentro del cordón, pero se basan en principios físicos distintos y detectan defectos diferentes con distinta eficacia. Si la especificación no indica método o dice "UT o RT", la elección depende de la geometría, el espesor y el tipo de defecto buscado.</p>
<h2>La diferencia básica</h2>
<p><strong>UT</strong> introduce sonido de alta frecuencia en el material y evalúa los ecos de las discontinuidades. <strong>RT</strong> proyecta una imagen del cordón sobre película o detector digital con rayos X o gamma. La RT funciona como una fotografía; la UT, como un sonar.</p>
<h2>¿Qué detecta mejor cada uno?</h2>
<table class="data-table"><thead><tr><th>Defecto</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Fisura (plana)</td><td>Muy bien, según orientación</td><td>Mal, salvo paralela al haz</td></tr>
<tr><td>Falta de fusión lateral</td><td>Muy bien</td><td>Mal a regular</td></tr>
<tr><td>Falta de penetración</td><td>Bien</td><td>Bien</td></tr>
<tr><td>Poros (volumétrico)</td><td>Regular</td><td>Muy bien</td></tr>
<tr><td>Inclusión de escoria</td><td>Bien</td><td>Muy bien</td></tr>
<tr><td>Inclusión de tungsteno</td><td>Mal</td><td>Muy bien</td></tr>
</tbody></table>
<p>En resumen: la UT es más fuerte en defectos planos y peligrosos; la RT, en volumétricos. Como las fisuras y faltas de fusión son los defectos más críticos en estructuras sometidas a fatiga, allí suele preferirse UT.</p>
<h2>Espesor y geometría</h2>
<ul>
<li><strong>UT</strong> suele ser eficiente desde 8 mm. La EN ISO 17640 cubre de forma estándar aceros ferríticos de 8 a 100 mm; por debajo se necesitan técnicas especiales. Cuanto más grueso, mayor ventaja.</li>
<li><strong>RT</strong> da excelentes resultados en espesores finos. Al aumentar el espesor requiere fuentes más potentes y más exposición, y la sensibilidad baja.</li>
<li>La RT necesita acceso a ambos lados (fuente y película). La UT puede hacerse desde un lado.</li>
<li>En soldaduras en ángulo y uniones en T, la imagen RT es difícil de interpretar; la UT es más adecuada.</li>
</ul>
<h2>Material</h2>
<p>En soldaduras de inoxidable austenítico y dúplex de grano grueso el sonido se dispersa y la UT convencional se complica. Ahí se usa RT o técnicas UT especiales (palpadores TRL, PAUT). En aceros estructurales al carbono y baja aleación, la UT funciona sin problemas.</p>
<h2>Registro y trazabilidad</h2>
<p>La gran ventaja de la RT es una imagen permanente que puede revisarse años después. En la UT manual convencional, el registro se limita a lo que anota el operador. Phased array (PAUT) y TOFD cierran esa brecha: los datos se guardan digitalmente y pueden reevaluarse.</p>
<h2>Tiempo, coste y seguridad</h2>
<table class="data-table"><thead><tr><th>Criterio</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Resultado</td><td>Inmediato</td><td>Tras revelado o lectura digital</td></tr>
<tr><td>Seguridad</td><td>Sin radiación, el trabajo sigue</td><td>Se despeja la zona de radiación</td></tr>
<tr><td>Coste en piezas gruesas</td><td>Bajo</td><td>Alto</td></tr>
<tr><td>Coste en piezas finas</td><td>Técnica más difícil</td><td>Razonable</td></tr>
<tr><td>Dependencia del operador</td><td>Alta</td><td>Menor (en la interpretación)</td></tr>
</tbody></table>
<p>Como durante la RT debe pararse el trabajo cercano, afecta a la planificación. Por eso las exposiciones suelen hacerse fuera de turno o en una zona aparte.</p>
<h2>¿Qué dicen las normas?</h2>
<p>La EN 1090-2 no impone el método volumétrico; pide elegir según espesor, tipo de unión y material, y favorece la UT en soldaduras a tope gruesas. En equipos a presión (EN 13445, PED) y algunas especificaciones de cliente el método está fijado. Si no lo está, aclárelo por escrito en la oferta.</p>
<h2>Guía práctica</h2>
<ul>
<li>Soldadura a tope gruesa (más de 15 mm), fatiga, riesgo de fisura: <strong>UT</strong></li>
<li>Tubo y chapa de pared fina, control de poros: <strong>RT</strong></li>
<li>Se exige registro permanente: <strong>RT</strong> o <strong>PAUT</strong></li>
<li>Inoxidable austenítico: <strong>RT</strong> o UT especial</li>
<li>Uniones en T y de esquina: <strong>UT</strong></li>
<li>Soldaduras críticas: ambos métodos</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> la UT la realiza personal de nuestro equipo certificado ISO 9712 nivel 2. La exposición RT la hace nuestro socio; las películas las evalúa e informa personal de nivel 2 de nuestro equipo. Recomendamos el método adecuado en la oferta según su plano y especificación. <a href="../ndt.html">Nuestros servicios de END →</a></p></div>
`,
    faq: [
      ['¿Se usan UT y RT juntos?', 'Sí. En soldaduras críticas se complementan: UT detecta mejor los defectos planos y RT los volumétricos. Algunas especificaciones exigen ambos en ciertos cordones.'],
      ['¿Qué son PAUT y TOFD?', 'PAUT (ultrasonidos phased array) orienta el haz electrónicamente con palpadores multielemento y genera una imagen. TOFD mide la altura del defecto con señales difractadas en sus extremos. Ambos dejan registro y pueden sustituir a la RT.'],
      ['¿Se puede hacer UT en chapa fina?', 'La UT convencional se complica por debajo de 8 mm. En material fino se prefiere RT o UT especial de alta frecuencia.'],
      ['¿Qué método es más barato?', 'En piezas gruesas la UT suele ser más barata y rápida. En soldaduras repetitivas de tubo de pared fina la RT puede ser más económica. Incluya las paradas de producción en el coste total.']
    ],
    cta_h3: 'Elijamos juntos el método de END adecuado',
    cta_p: 'Envíe plano y especificación; definimos método y alcance de inspección en la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Ultrasons ou radiographie ? UT et RT pour le contrôle des soudures',
    meta: 'UT ou RT pour le contrôle des soudures : quel défaut chaque méthode détecte le mieux, limites d’épaisseur, coût, délai, sécurité, traçabilité et choix selon l’EN 1090-2.',
    og: 'Ultrasons ou radiographie pour les soudures ?',
    tag: 'Qualité · CND',
    h1: 'Ultrasons ou radiographie ? Bien choisir entre UT et RT pour les soudures',
    crumb: 'UT ou RT',
    read: '7 min de lecture',
    body: `
<p>Le contrôle volumique des soudures repose sur deux méthodes principales : les ultrasons (UT) et la radiographie (RT). Toutes deux examinent l’intérieur du cordon, mais reposent sur des principes physiques différents et détectent les défauts avec une efficacité différente. Si la spécification n’impose rien ou indique « UT ou RT », le bon choix dépend de la géométrie, de l’épaisseur et du défaut recherché.</p>
<h2>La différence de base</h2>
<p>L’<strong>UT</strong> envoie des ondes sonores haute fréquence dans le matériau et analyse les échos des discontinuités. La <strong>RT</strong> projette une image du cordon sur film ou détecteur numérique au moyen de rayons X ou gamma. La RT fonctionne comme une photographie, l’UT comme un sonar.</p>
<h2>Quel défaut chaque méthode détecte-t-elle le mieux ?</h2>
<table class="data-table"><thead><tr><th>Défaut</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Fissure (plane)</td><td>Très bien, selon l’orientation</td><td>Faible, sauf parallèle au faisceau</td></tr>
<tr><td>Manque de fusion latéral</td><td>Très bien</td><td>Faible à moyen</td></tr>
<tr><td>Manque de pénétration</td><td>Bien</td><td>Bien</td></tr>
<tr><td>Soufflures (volumiques)</td><td>Moyen</td><td>Très bien</td></tr>
<tr><td>Inclusion de laitier</td><td>Bien</td><td>Très bien</td></tr>
<tr><td>Inclusion de tungstène</td><td>Faible</td><td>Très bien</td></tr>
</tbody></table>
<p>En bref : l’UT est plus performante sur les défauts plans et dangereux, la RT sur les défauts volumiques. Les fissures et manques de fusion étant les plus critiques en fatigue, l’UT y est souvent préférée.</p>
<h2>Épaisseur et géométrie</h2>
<ul>
<li>L’<strong>UT</strong> est généralement efficace à partir de 8 mm. La NF EN ISO 17640 couvre en standard les aciers ferritiques de 8 à 100 mm ; en dessous, des techniques spéciales sont nécessaires. Plus c’est épais, plus l’avantage est net.</li>
<li>La <strong>RT</strong> donne d’excellents résultats sur faibles épaisseurs. Quand l’épaisseur augmente, il faut une source plus forte et une exposition plus longue, et la sensibilité baisse.</li>
<li>La RT exige l’accès aux deux faces (source et film). L’UT se pratique d’un seul côté.</li>
<li>Sur soudures d’angle et assemblages en T, l’image RT est difficile à interpréter ; l’UT convient mieux.</li>
</ul>
<h2>Matériau</h2>
<p>Dans les soudures inox austénitiques et duplex à gros grains, le son est diffusé et l’UT conventionnelle devient délicate. On utilise alors la RT ou des techniques UT spéciales (traducteurs TRL, PAUT). Sur aciers de construction au carbone et faiblement alliés, l’UT ne pose pas de problème.</p>
<h2>Enregistrement et traçabilité</h2>
<p>Le grand atout de la RT est une image permanente, consultable des années plus tard. En UT manuelle conventionnelle, l’enregistrement se limite à ce que note l’opérateur. Le multiéléments (PAUT) et le TOFD comblent cet écart : les données sont stockées numériquement et réévaluables.</p>
<h2>Délai, coût et sécurité</h2>
<table class="data-table"><thead><tr><th>Critère</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Résultat</td><td>Immédiat</td><td>Après développement ou lecture numérique</td></tr>
<tr><td>Sécurité</td><td>Pas de rayonnement, le travail continue</td><td>Zone balisée et évacuée</td></tr>
<tr><td>Coût sur pièces épaisses</td><td>Faible</td><td>Élevé</td></tr>
<tr><td>Coût sur pièces minces</td><td>Technique plus difficile</td><td>Raisonnable</td></tr>
<tr><td>Dépendance à l’opérateur</td><td>Forte</td><td>Moindre (à l’interprétation)</td></tr>
</tbody></table>
<p>Comme les travaux voisins doivent s’arrêter pendant la RT, elle pèse sur le planning. Les tirs sont donc souvent faits hors poste ou dans une zone dédiée.</p>
<h2>Que disent les normes ?</h2>
<p>L’EN 1090-2 n’impose pas la méthode volumique ; elle demande un choix selon l’épaisseur, le type d’assemblage et le matériau, et privilégie l’UT pour les soudures bout à bout épaisses. Les équipements sous pression (EN 13445, DESP) et certaines spécifications client fixent la méthode. Sinon, précisez-la par écrit dès l’offre.</p>
<h2>Guide pratique</h2>
<ul>
<li>Soudure bout à bout épaisse (plus de 15 mm), fatigue, risque de fissure : <strong>UT</strong></li>
<li>Tubes et tôles minces, contrôle des soufflures : <strong>RT</strong></li>
<li>Image permanente exigée : <strong>RT</strong> ou <strong>PAUT</strong></li>
<li>Soudures inox austénitiques : <strong>RT</strong> ou UT spéciale</li>
<li>Assemblages en T et d’angle : <strong>UT</strong></li>
<li>Soudures critiques : les deux méthodes</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> l’UT est réalisée par du personnel de notre équipe certifié ISO 9712 niveau 2. Les tirs RT sont effectués par notre partenaire ; les films sont interprétés et rapportés par du personnel niveau 2 de notre équipe. Nous recommandons la méthode adaptée dès l’offre selon votre plan et votre spécification. <a href="../ndt.html">Nos prestations CND →</a></p></div>
`,
    faq: [
      ['UT et RT sont-ils combinés ?', 'Oui. Sur soudures critiques, ils se complètent : l’UT détecte mieux les défauts plans, la RT les défauts volumiques. Certaines spécifications exigent les deux sur certains cordons.'],
      ['Que sont le PAUT et le TOFD ?', 'Le PAUT (ultrasons multiéléments) oriente le faisceau électroniquement et produit une image. Le TOFD mesure la hauteur du défaut grâce aux signaux diffractés à ses extrémités. Tous deux laissent un enregistrement et peuvent remplacer la RT.'],
      ['Peut-on contrôler une tôle mince par UT ?', 'L’UT conventionnelle devient difficile sous 8 mm. Sur faible épaisseur, on préfère la RT ou une UT spéciale haute fréquence.'],
      ['Quelle méthode coûte le moins ?', 'Sur pièces épaisses, l’UT est généralement moins chère et plus rapide. Sur tubes minces en série, la RT peut être plus économique. Intégrez les arrêts de production au coût total.']
    ],
    cta_h3: 'Choisissons ensemble la bonne méthode de CND',
    cta_p: 'Envoyez plan et spécification ; nous définissons la méthode et l’étendue du contrôle dans l’offre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Ultrasuoni o radiografia? UT e RT a confronto sulle saldature',
    meta: 'UT o RT per il controllo delle saldature: quale difetto rileva meglio ciascun metodo, limiti di spessore, costi, tempi, sicurezza, registrazione e scelta secondo EN 1090-2.',
    og: 'Ultrasuoni o radiografia per le saldature?',
    tag: 'Qualità · CND',
    h1: 'Ultrasuoni o radiografia? Come scegliere tra UT e RT per le saldature',
    crumb: 'UT o RT',
    read: '7 min di lettura',
    body: `
<p>Per il controllo volumetrico delle saldature esistono due metodi principali: ultrasuoni (UT) e radiografia (RT). Entrambi guardano all’interno del cordone, ma si basano su principi fisici diversi e rilevano difetti diversi con diversa efficacia. Se la specifica non indica il metodo o riporta "UT o RT", la scelta dipende da geometria, spessore e tipo di difetto cercato.</p>
<h2>La differenza di base</h2>
<p>L’<strong>UT</strong> invia onde sonore ad alta frequenza nel materiale e valuta gli echi delle discontinuità. La <strong>RT</strong> proietta un’immagine del cordone su pellicola o rivelatore digitale con raggi X o gamma. La RT funziona come una fotografia, l’UT come un sonar.</p>
<h2>Quale difetto rileva meglio ciascuno?</h2>
<table class="data-table"><thead><tr><th>Difetto</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Cricca (planare)</td><td>Molto bene, dipende dall’orientamento</td><td>Scarso, salvo se parallela al fascio</td></tr>
<tr><td>Mancanza di fusione laterale</td><td>Molto bene</td><td>Scarso o discreto</td></tr>
<tr><td>Mancata penetrazione</td><td>Bene</td><td>Bene</td></tr>
<tr><td>Porosità (volumetrica)</td><td>Discreto</td><td>Molto bene</td></tr>
<tr><td>Inclusione di scoria</td><td>Bene</td><td>Molto bene</td></tr>
<tr><td>Inclusione di tungsteno</td><td>Scarso</td><td>Molto bene</td></tr>
</tbody></table>
<p>In sintesi: l’UT è più forte sui difetti planari e pericolosi, la RT su quelli volumetrici. Poiché cricche e mancanze di fusione sono i difetti più critici nelle strutture soggette a fatica, lì si preferisce spesso l’UT.</p>
<h2>Spessore e geometria</h2>
<ul>
<li>L’<strong>UT</strong> è di solito efficiente da 8 mm in su. La UNI EN ISO 17640 copre di norma acciai ferritici da 8 a 100 mm; sotto servono tecniche speciali. Più il pezzo è spesso, maggiore il vantaggio.</li>
<li>La <strong>RT</strong> dà ottimi risultati su spessori sottili. Con spessori crescenti servono sorgenti più forti ed esposizioni più lunghe, e la sensibilità cala.</li>
<li>La RT richiede accesso da entrambi i lati (sorgente e pellicola). L’UT si esegue da un solo lato.</li>
<li>Su saldature d’angolo e giunti a T l’immagine RT è difficile da interpretare; l’UT è più adatta.</li>
</ul>
<h2>Materiale</h2>
<p>Nelle saldature di inox austenitico e duplex a grano grosso il suono si disperde e l’UT convenzionale diventa difficile. Si usano allora RT o tecniche UT speciali (sonde TRL, PAUT). Sugli acciai strutturali al carbonio e basso legati l’UT funziona senza problemi.</p>
<h2>Registrazione e tracciabilità</h2>
<p>Il grande vantaggio della RT è un’immagine permanente, riesaminabile anche anni dopo. Nell’UT manuale convenzionale la registrazione si limita a quanto annotato dall’operatore. Phased array (PAUT) e TOFD colmano questa lacuna: i dati di scansione vengono salvati digitalmente e possono essere rivalutati.</p>
<h2>Tempi, costi e sicurezza</h2>
<table class="data-table"><thead><tr><th>Criterio</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Esito</td><td>Immediato</td><td>Dopo sviluppo o lettura digitale</td></tr>
<tr><td>Sicurezza</td><td>Nessuna radiazione, il lavoro continua</td><td>Area di radiazione sgomberata</td></tr>
<tr><td>Costo su pezzi spessi</td><td>Basso</td><td>Alto</td></tr>
<tr><td>Costo su pezzi sottili</td><td>Tecnica più difficile</td><td>Ragionevole</td></tr>
<tr><td>Dipendenza dall’operatore</td><td>Alta</td><td>Minore (in fase di interpretazione)</td></tr>
</tbody></table>
<p>Poiché durante la RT i lavori vicini vanno sospesi, incide sulla pianificazione. Le esposizioni si fanno quindi spesso fuori turno o in un’area separata.</p>
<h2>Cosa dicono le norme?</h2>
<p>La EN 1090-2 non impone il metodo volumetrico; chiede di scegliere in base a spessore, tipo di giunto e materiale, e privilegia l’UT per le saldature testa a testa spesse. Nelle attrezzature a pressione (EN 13445, PED) e in alcune specifiche cliente il metodo è fissato. Altrimenti va chiarito per iscritto in offerta.</p>
<h2>Guida pratica</h2>
<ul>
<li>Testa a testa spessa (oltre 15 mm), fatica, rischio cricche: <strong>UT</strong></li>
<li>Tubi e lamiere sottili, controllo porosità: <strong>RT</strong></li>
<li>Richiesta registrazione permanente: <strong>RT</strong> o <strong>PAUT</strong></li>
<li>Saldature inox austenitico: <strong>RT</strong> o UT speciale</li>
<li>Giunti a T e d’angolo: <strong>UT</strong></li>
<li>Saldature critiche: entrambi i metodi</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> l’UT è eseguita da personale del nostro team certificato ISO 9712 livello 2. Le esposizioni RT sono eseguite dal nostro partner; le pellicole vengono interpretate e refertate da personale di livello 2 del nostro team. In offerta raccomandiamo il metodo adatto in base a disegno e specifica. <a href="../ndt.html">I nostri servizi CND →</a></p></div>
`,
    faq: [
      ['UT e RT si usano insieme?', 'Sì. Sulle saldature critiche si completano: l’UT rileva meglio i difetti planari, la RT quelli volumetrici. Alcune specifiche richiedono entrambi su certi cordoni.'],
      ['Cosa sono PAUT e TOFD?', 'Il PAUT (ultrasuoni phased array) orienta elettronicamente il fascio con sonde multielemento e genera un’immagine. Il TOFD misura l’altezza del difetto dai segnali diffratti alle sue estremità. Entrambi lasciano una registrazione e possono sostituire la RT.'],
      ['Si può fare UT su lamiera sottile?', 'L’UT convenzionale diventa difficile sotto 8 mm. Su spessori sottili si preferisce la RT o un’UT speciale ad alta frequenza.'],
      ['Quale metodo costa meno?', 'Sui pezzi spessi l’UT è di solito più economica e rapida. Su saldature di tubi sottili in serie la RT può convenire di più. Nel costo totale vanno considerati i fermi produzione.']
    ],
    cta_h3: 'Scegliamo insieme il metodo CND giusto',
    cta_p: 'Inviateci disegno e specifica; definiamo metodo ed estensione del controllo nell’offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Ultrasoon of radiografie? UT en RT bij lassen vergeleken',
    meta: 'UT of RT voor lasinspectie: welke methode vindt welke fout, diktegrenzen, kosten, tijd, veiligheid, registratie en de keuze volgens EN 1090-2.',
    og: 'Ultrasoon of radiografie bij lassen?',
    tag: 'Kwaliteit · NDO',
    h1: 'Ultrasoon of radiografie? De juiste keuze tussen UT en RT bij lassen',
    crumb: 'UT of RT',
    read: '7 min lezen',
    body: `
<p>Voor volumetrische lasinspectie zijn er twee hoofdmethoden: ultrasoon onderzoek (UT) en radiografisch onderzoek (RT). Beide kijken in de las, maar berusten op verschillende fysische principes en vinden verschillende fouten met wisselend succes. Noemt de specificatie geen methode of staat er "UT of RT", dan hangt de juiste keuze af van geometrie, dikte en het type fout dat u zoekt.</p>
<h2>Het basisverschil</h2>
<p><strong>UT</strong> stuurt hoogfrequent geluid het materiaal in en beoordeelt de echo’s van onvolkomenheden. <strong>RT</strong> projecteert met röntgen- of gammastraling een beeld van de las op film of digitale detector. RT werkt als een foto, UT als een sonar.</p>
<h2>Welke fout vindt welke methode het best?</h2>
<table class="data-table"><thead><tr><th>Fouttype</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Scheur (vlak)</td><td>Zeer goed, afhankelijk van oriëntatie</td><td>Zwak, tenzij evenwijdig aan de bundel</td></tr>
<tr><td>Flankbindingsfout</td><td>Zeer goed</td><td>Zwak tot matig</td></tr>
<tr><td>Onvoldoende doorlassing</td><td>Goed</td><td>Goed</td></tr>
<tr><td>Porositeit (volumetrisch)</td><td>Matig</td><td>Zeer goed</td></tr>
<tr><td>Slakinsluiting</td><td>Goed</td><td>Zeer goed</td></tr>
<tr><td>Wolfraaminsluiting</td><td>Zwak</td><td>Zeer goed</td></tr>
</tbody></table>
<p>Kort gezegd: UT is sterker bij vlakke, gevaarlijke fouten, RT bij volumetrische. Omdat scheuren en bindingsfouten het meest kritisch zijn bij vermoeiingsbelaste constructies, krijgt UT daar vaak de voorkeur.</p>
<h2>Dikte en geometrie</h2>
<ul>
<li><strong>UT</strong> is meestal efficiënt vanaf 8 mm. NEN-EN-ISO 17640 dekt standaard ferritisch staal van 8 tot 100 mm; dunner materiaal vraagt speciale technieken. Hoe dikker, hoe groter het voordeel.</li>
<li><strong>RT</strong> geeft uitstekende resultaten bij dun materiaal. Bij grotere dikte zijn een sterkere bron en langere belichting nodig en daalt de gevoeligheid.</li>
<li>RT vraagt toegang tot beide zijden (bron en film). UT kan van één kant.</li>
<li>Bij hoeklassen en T-verbindingen zijn RT-beelden moeilijk te beoordelen; UT past hier beter.</li>
</ul>
<h2>Materiaal</h2>
<p>In grofkorrelige austenitische rvs- en duplexlassen wordt geluid verstrooid en wordt conventionele UT lastig. Hier gebruikt men RT of speciale UT-technieken (TRL-tasters, PAUT). Bij ongelegeerd en laaggelegeerd constructiestaal werkt UT probleemloos.</p>
<h2>Registratie en traceerbaarheid</h2>
<p>Het grootste voordeel van RT is een blijvend beeld dat jaren later nog te beoordelen is. Bij conventionele handmatige UT bestaat de registratie alleen uit wat de operator noteert. Phased array (PAUT) en TOFD dichten dit gat: scandata worden digitaal opgeslagen en kunnen opnieuw worden beoordeeld.</p>
<h2>Tijd, kosten en veiligheid</h2>
<table class="data-table"><thead><tr><th>Criterium</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Resultaat</td><td>Direct</td><td>Na ontwikkeling of digitale uitlezing</td></tr>
<tr><td>Veiligheid</td><td>Geen straling, werk gaat door</td><td>Stralingsgebied wordt ontruimd</td></tr>
<tr><td>Kosten bij dikke delen</td><td>Laag</td><td>Hoog</td></tr>
<tr><td>Kosten bij dunne delen</td><td>Techniek lastiger</td><td>Redelijk</td></tr>
<tr><td>Operatorafhankelijkheid</td><td>Hoog</td><td>Lager (bij de beoordeling)</td></tr>
</tbody></table>
<p>Omdat werk in de buurt tijdens RT moet stilliggen, beïnvloedt het de planning. RT-opnamen gebeuren daarom vaak buiten diensttijd of in een aparte ruimte.</p>
<h2>Wat zeggen de normen?</h2>
<p>EN 1090-2 schrijft de volumetrische methode niet voor; de keuze moet passen bij dikte, verbindingstype en materiaal, met voorkeur voor UT bij dikke stompe lassen. Bij drukapparatuur (EN 13445, PED) en sommige klantspecificaties ligt de methode vast. Zo niet, leg die dan schriftelijk vast in de offertefase.</p>
<h2>Praktische keuzehulp</h2>
<ul>
<li>Dikke stompe las (meer dan 15 mm), vermoeiing, scheurrisico: <strong>UT</strong></li>
<li>Dunwandige buis- en plaatlassen, porositeitscontrole: <strong>RT</strong></li>
<li>Blijvende beeldregistratie vereist: <strong>RT</strong> of <strong>PAUT</strong></li>
<li>Austenitische rvs-lassen: <strong>RT</strong> of speciale UT</li>
<li>T- en hoekverbindingen: <strong>UT</strong></li>
<li>Kritische lassen: beide methoden</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> UT wordt uitgevoerd door ISO 9712 niveau 2 gecertificeerd personeel in ons team. RT-opnamen maakt onze partner; de films worden beoordeeld en gerapporteerd door niveau 2-personeel in ons team. In de offerte adviseren we de juiste methode op basis van uw tekening en specificatie. <a href="../ndt.html">Onze NDO-diensten →</a></p></div>
`,
    faq: [
      ['Worden UT en RT gecombineerd?', 'Ja. Bij kritische lassen vullen ze elkaar aan: UT vindt vlakke fouten beter, RT volumetrische. Sommige specificaties eisen beide voor bepaalde lassen.'],
      ['Wat zijn PAUT en TOFD?', 'PAUT (phased array) stuurt de geluidsbundel elektronisch met meerelements-tasters en maakt een scanbeeld. TOFD meet de hoogte van de fout via buigingssignalen aan de foutuiteinden. Beide zijn registreerbaar en kunnen RT vervangen.'],
      ['Kan dun plaatmateriaal met UT worden getest?', 'Conventionele UT wordt onder 8 mm lastig. Bij dun materiaal krijgen RT of speciale hoogfrequente UT de voorkeur.'],
      ['Welke methode is goedkoper?', 'Bij dikke delen is UT meestal goedkoper en sneller. Bij dunwandige seriebuislassen kan RT voordeliger zijn. Reken productiestilstand mee in de totale kosten.']
    ],
    cta_h3: 'Laten we samen de juiste NDO-methode kiezen',
    cta_p: 'Stuur tekening en specificatie; we leggen methode en omvang van de inspectie vast in de offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Ultralyd eller radiografi? UT og RT for sveiser sammenlignet',
    meta: 'UT eller RT for sveiseinspeksjon: hvilken metode finner hvilke feil, tykkelsesgrenser, kostnad, tid, sikkerhet, dokumentasjon og valg etter EN 1090-2.',
    og: 'Ultralyd eller radiografi for sveiser?',
    tag: 'Kvalitet · NDT',
    h1: 'Ultralyd eller radiografi? Riktig valg mellom UT og RT for sveiser',
    crumb: 'UT eller RT',
    read: '7 min lesing',
    body: `
<p>For volumetrisk sveiseinspeksjon finnes det to hovedmetoder: ultralydprøving (UT) og radiografisk prøving (RT). Begge ser inn i sveisen, men bygger på ulike fysiske prinsipper og finner ulike feil med ulik treffsikkerhet. Angir spesifikasjonen ingen metode, eller står det "UT eller RT", avhenger riktig valg av geometri, tykkelse og hvilken feiltype man leter etter.</p>
<h2>Den grunnleggende forskjellen</h2>
<p><strong>UT</strong> sender høyfrekvent lyd inn i materialet og vurderer ekko fra diskontinuiteter. <strong>RT</strong> avbilder sveisen på film eller digital detektor med røntgen- eller gammastråling. RT fungerer som et fotografi, UT som en sonar.</p>
<h2>Hvilken feil finner hver metode best?</h2>
<table class="data-table"><thead><tr><th>Feiltype</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Sprekk (plan)</td><td>Svært god, avhenger av orientering</td><td>Svak, unntatt parallelt med strålen</td></tr>
<tr><td>Bindingsfeil i sidevegg</td><td>Svært god</td><td>Svak til middels</td></tr>
<tr><td>Manglende rotgjennomtrengning</td><td>God</td><td>God</td></tr>
<tr><td>Porer (volumetrisk)</td><td>Middels</td><td>Svært god</td></tr>
<tr><td>Slagginneslutning</td><td>God</td><td>Svært god</td></tr>
<tr><td>Wolframinneslutning</td><td>Svak</td><td>Svært god</td></tr>
</tbody></table>
<p>Kort sagt: UT er sterkest på plane, farlige feil, RT på volumetriske. Fordi sprekker og bindingsfeil er mest kritiske i utmattingsbelastede konstruksjoner, foretrekkes UT ofte der.</p>
<h2>Tykkelse og geometri</h2>
<ul>
<li><strong>UT</strong> er vanligvis effektiv fra 8 mm. NS-EN ISO 17640 dekker som standard ferrittisk stål fra 8 til 100 mm; tynnere materiale krever spesialteknikker. Jo tykkere, desto større fordel.</li>
<li><strong>RT</strong> gir svært gode resultater på tynt materiale. Med økende tykkelse trengs sterkere kilde og lengre eksponering, og følsomheten synker.</li>
<li>RT krever tilgang fra begge sider (kilde og film). UT kan utføres fra én side.</li>
<li>Ved kilsveiser og T-forbindelser er RT-bilder vanskelige å tolke; UT passer bedre her.</li>
</ul>
<h2>Materiale</h2>
<p>I grovkornede austenittiske rustfrie og duplekssveiser spres lyden, og konvensjonell UT blir vanskelig. Her brukes RT eller spesielle UT-teknikker (TRL-prober, PAUT). I karbon- og lavlegert konstruksjonsstål fungerer UT uten problemer.</p>
<h2>Dokumentasjon og sporbarhet</h2>
<p>RTs største fordel er et varig bilde som kan vurderes på nytt flere år senere. Ved konvensjonell manuell UT består dokumentasjonen bare av det operatøren skriver i rapporten. Phased array (PAUT) og TOFD tetter dette hullet: skannedata lagres digitalt og kan vurderes på nytt.</p>
<h2>Tid, kostnad og sikkerhet</h2>
<table class="data-table"><thead><tr><th>Kriterium</th><th>UT</th><th>RT</th></tr></thead><tbody>
<tr><td>Resultat</td><td>Umiddelbart</td><td>Etter fremkalling eller digital avlesning</td></tr>
<tr><td>Sikkerhet</td><td>Ingen stråling, arbeidet fortsetter</td><td>Strålingsområdet ryddes</td></tr>
<tr><td>Kostnad på tykke deler</td><td>Lav</td><td>Høy</td></tr>
<tr><td>Kostnad på tynne deler</td><td>Teknikken vanskeligere</td><td>Rimelig</td></tr>
<tr><td>Operatøravhengighet</td><td>Høy</td><td>Lavere (ved tolkning)</td></tr>
</tbody></table>
<p>Fordi arbeid i nærheten må stanse under RT, påvirker metoden produksjonsplanen. RT-eksponering gjøres derfor ofte utenfor skift eller i et eget område.</p>
<h2>Hva sier standardene?</h2>
<p>EN 1090-2 foreskriver ikke den volumetriske metoden; valget skal baseres på tykkelse, forbindelsestype og materiale, og UT foretrekkes for tykke buttsveiser. For trykkutstyr (EN 13445, PED) og i noen kundespesifikasjoner er metoden fastsatt. Hvis ikke, bør den avklares skriftlig i tilbudsfasen.</p>
<h2>Praktisk valgguide</h2>
<ul>
<li>Tykk buttsveis (over 15 mm), utmatting, sprekkfare: <strong>UT</strong></li>
<li>Tynnveggede rør- og platesveiser, porekontroll: <strong>RT</strong></li>
<li>Krav om varig bildedokumentasjon: <strong>RT</strong> eller <strong>PAUT</strong></li>
<li>Austenittiske rustfrie sveiser: <strong>RT</strong> eller spesial-UT</li>
<li>T- og hjørneforbindelser: <strong>UT</strong></li>
<li>Kritiske sveiser: begge metoder</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> UT utføres av ISO 9712 nivå 2-sertifisert personell i vårt team. RT-eksponering utføres av vår partner; filmene vurderes og rapporteres av nivå 2-personell i vårt team. Vi anbefaler riktig metode i tilbudet basert på tegning og spesifikasjon. <a href="../ndt.html">Våre NDT-tjenester →</a></p></div>
`,
    faq: [
      ['Brukes UT og RT sammen?', 'Ja. På kritiske sveiser utfyller de hverandre: UT finner plane feil bedre, RT volumetriske. Noen spesifikasjoner krever begge på bestemte sveiser.'],
      ['Hva er PAUT og TOFD?', 'PAUT (phased array) styrer lydstrålen elektronisk med flerelementprober og lager et skannebilde. TOFD måler feilhøyden ut fra diffrakterte signaler ved feilens ender. Begge gir dokumentasjon og kan erstatte RT.'],
      ['Kan tynn plate prøves med UT?', 'Konvensjonell UT blir vanskelig under 8 mm. På tynt materiale foretrekkes RT eller spesiell høyfrekvent UT.'],
      ['Hvilken metode er billigst?', 'På tykke deler er UT som regel billigere og raskere. På tynnveggede seriesveiser i rør kan RT være mer økonomisk. Ta med produksjonsstans i totalkostnaden.']
    ],
    cta_h3: 'La oss velge riktig NDT-metode sammen',
    cta_p: 'Send tegning og spesifikasjon, så fastsetter vi metode og omfang i tilbudet.',
    cta_btn: 'Be om tilbud →'
  }
};
