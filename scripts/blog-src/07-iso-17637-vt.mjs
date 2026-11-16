export default {
  order: 7,
  slug: 'iso-17637-kaynak-gozle-muayene',
  key: 'p07_vt',
  date: '2025-12-24',
  keywords: 'ISO 17637, kaynak gözle muayene, VT muayenesi, kaynak görsel kontrol, kaynak mastarı, visual testing welds, Sichtprüfung Schweißnaht, ISO 17637 visual inspection',
  related: ['iso-5817-kalite-seviyeleri', 'kaynak-muayene-raporu-nasil-okunur', 'ndt-tahribatsiz-muayene-yontemleri', 'kaynak-hatalari-onarim'],
  tr: {
    title: 'ISO 17637 Kaynak Gözle Muayene (VT): Koşullar, Ölçümler ve Rapor',
    meta: 'ISO 17637\'ye göre kaynak gözle muayenesi: aydınlatma ve bakış koşulları, kaynaktan önce, sırasında ve sonra yapılacak kontroller, ölçülen büyüklükler, kullanılan mastarlar ve VT raporu.',
    og: 'ISO 17637 Kaynak Gözle Muayene (VT)',
    tag: 'Kalite · NDT',
    h1: 'ISO 17637 Kaynak Gözle Muayene (VT): En Ucuz ve En Çok Hata Yakalayan Kontrol',
    crumb: 'ISO 17637 VT',
    read: '7 dk okuma',
    body: `
<p>Gözle muayene (VT), kaynak kalite kontrolünde en basit görünen ama en çok hatayı yakalayan yöntemdir. Yüzeye açılan çatlak, yanma oluğu, eksik dolgu, yetersiz a ölçüsü ve geometrik uygunsuzlukların büyük kısmı gözle muayenede bulunur. Doğru yapılmış bir VT, sonraki UT veya RT muayenesini de anlamlı kılar. Bu yöntemin standardı <strong>EN ISO 17637</strong>'dir.</p>
<h2>ISO 17637 Neyi Tanımlar?</h2>
<p>Standart, ergitme kaynaklarının gözle muayenesinin nasıl yapılacağını tanımlar: muayene koşulları, kullanılacak araçlar, muayene zamanı ve raporlama. Kabul kriteri vermez; kabul için genellikle EN ISO 5817 (çelik) veya EN ISO 10042 (alüminyum) kullanılır.</p>
<h2>Muayene Koşulları</h2>
<ul>
<li><strong>Aydınlatma:</strong> Muayene yüzeyinde en az 350 lx, tercihen 500 lx aydınlatma.</li>
<li><strong>Bakış mesafesi ve açısı:</strong> Göz ile yüzey arası en fazla 600 mm, bakış açısı yüzeye 30°'den az olmamalı.</li>
<li><strong>Erişim:</strong> Doğrudan bakılamayan yerlerde ayna, boroskop veya kamera gibi yardımcı araçlar kullanılır.</li>
<li><strong>Yüzey:</strong> Cüruf, sıçrantı ve kir temizlenmiş olmalı; aksi halde hatalar gizlenir.</li>
</ul>
<h2>Ne Zaman Yapılır?</h2>
<p>VT yalnızca kaynak bittikten sonra yapılan bir kontrol değildir. İyi uygulamada üç aşamada yapılır:</p>
<table class="data-table"><thead><tr><th>Aşama</th><th>Kontrol edilenler</th></tr></thead><tbody>
<tr><td>Kaynaktan önce</td><td>Kaynak ağzı açısı, kök aralığı, kök yüzü, ağız temizliği, puntaların durumu, parça uyumu ve kenar kaçıklığı</td></tr>
<tr><td>Kaynak sırasında</td><td>Paso arası temizlik, kök pasonun durumu, paso arası sıcaklık, karşı taraf oyma (gouging) sonrası yüzey</td></tr>
<tr><td>Kaynaktan sonra</td><td>Dikiş boyutları, yüzey hataları, sıçrantı ve ark izleri, distorsiyon, temizlik</td></tr>
</tbody></table>
<p>Kaynaktan önce yakalanan bir ağız hatası, kaynaktan sonra bulunacak ergime eksikliğinden çok daha ucuza düzeltilir.</p>
<h2>Kaynak Sonrası Ölçülen Büyüklükler</h2>
<ul>
<li><strong>Köşe kaynağı:</strong> a ölçüsü (boğaz kalınlığı) ve z ölçüsü (bacak boyu), içbükeylik veya dışbükeylik, bacak eşitsizliği.</li>
<li><strong>Alın kaynağı:</strong> Kep yüksekliği, kök taşması, yetersiz dolgu, kenar kaçıklığı, kök çekmesi.</li>
<li><strong>Her iki tip:</strong> Yanma oluğu derinliği, yüzey gözenekleri, krater çatlakları, dikiş başlangıç ve bitişleri, sıçrantı, ark izi.</li>
</ul>
<h2>Kullanılan Araçlar</h2>
<ul>
<li>Çok amaçlı kaynak mastarı (a ölçüsü, kep yüksekliği, yanma oluğu derinliği, ağız açısı)</li>
<li>Köşe kaynağı mastarı seti</li>
<li>Kumpas, cetvel ve şerit metre</li>
<li>Büyüteç (2x–5x), el feneri, ayna</li>
<li>Gerektiğinde yüzey sıcaklık ölçer (paso arası sıcaklık için)</li>
</ul>
<h2>VT Raporunda Ne Olmalı?</h2>
<p>Raporda parça ve dikiş tanımı, uygulanan standart ve kabul seviyesi, muayene aşaması, kullanılan araçlar, ölçülen değerler, bulguların yeri ve boyutu, sonuç ve muayeneyi yapan kişinin bilgileri yer almalıdır. Kabul edilen dikişler için de ölçülen değerlerin yazılması, raporun gerçek bir ölçüm kaydı olduğunu gösterir.</p>
<h2>VT Personelinin Yeterliliği</h2>
<p>EN 1090-2 ve ISO 3834 kapsamında VT'yi yapan kişinin yeterli olması istenir. Pratikte bu, ISO 9712'ye göre VT sertifikası veya kaynak koordinasyon personelinin eğitimi demektir. Personelin göz muayenesi de (yakın görme keskinliği, renk ayrımı) düzenli olarak yapılmalıdır.</p>
<h2>VT'nin Sınırları</h2>
<p>Gözle muayene yalnızca yüzeyi görür. İç gözenek, iç çatlak ve ergime eksikliği VT ile bulunamaz; bunlar için UT veya RT gerekir. Çok ince yüzey çatlakları da gözden kaçabilir; şüpheli bölgelerde PT veya MT uygulanır. Bu nedenle VT tek başına değil, NDT planının ilk halkası olarak düşünülmelidir.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Her dikiş, ISO 9712 Seviye 2 VT sertifikalı personelimiz tarafından ISO 17637'ye göre muayene edilir ve ölçülen değerler rapora işlenir. Kritik parçalarda kaynak öncesi ağız kontrolü de kayıt altına alınır. <a href="../kalite.html">Kalite yaklaşımımızı inceleyin →</a></p></div>
`,
    faq: [
      ['VT için minimum aydınlatma ne kadardır?', 'ISO 17637 muayene yüzeyinde en az 350 lx ister, 500 lx önerilir. Atölye genel aydınlatması bu seviyeye ulaşmıyorsa el feneri veya portatif lamba kullanılır.'],
      ['Gözle muayene için sertifika şart mı?', 'EN 1090-2 ve ISO 3834 yeterli personel ister. Müşteri şartnameleri genellikle ISO 9712\'ye göre VT Seviye 2 sertifikası talep eder.'],
      ['VT ne zaman yapılmalı?', 'Kaynak öncesi (ağız ve uyum), kaynak sırasında (paso arası) ve kaynak sonrası. Gecikmeli çatlak riski olan yüksek mukavemetli çeliklerde son muayene, standartta belirtilen bekleme süresinden sonra yapılır.'],
      ['VT kabul kriteri hangi standartta?', 'ISO 17637 kabul kriteri vermez. Çelik için genellikle EN ISO 5817, alüminyum için EN ISO 10042 kalite seviyeleri kullanılır.']
    ],
    cta_h3: 'Her dikişi ölçülmüş ve raporlanmış kaynaklı parçalar',
    cta_p: 'Çiziminizi gönderin; VT ve NDT kapsamını teklifimizde açıkça belirtelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'ISO 17637 Visual Testing of Welds (VT): Conditions, Measurements and Report',
    meta: 'Visual testing of welds to ISO 17637: lighting and viewing conditions, checks before, during and after welding, measured features, gauges used and the VT report.',
    og: 'ISO 17637 Visual Testing of Welds',
    tag: 'Quality · NDT',
    h1: 'ISO 17637 Visual Testing of Welds (VT): The Cheapest Check That Finds the Most Defects',
    crumb: 'ISO 17637 VT',
    read: '7 min read',
    body: `
<p>Visual testing (VT) looks like the simplest method in weld quality control, yet it catches the most defects. Surface-breaking cracks, undercut, incompletely filled grooves, insufficient throat thickness and geometric deviations are mostly found visually. Properly performed VT also makes later UT or RT meaningful. The standard for the method is <strong>EN ISO 17637</strong>.</p>
<h2>What Does ISO 17637 Define?</h2>
<p>The standard defines how visual testing of fusion welds is performed: testing conditions, tools, timing and reporting. It does not give acceptance criteria; acceptance normally follows EN ISO 5817 (steel) or EN ISO 10042 (aluminium).</p>
<h2>Testing Conditions</h2>
<ul>
<li><strong>Lighting:</strong> at least 350 lx on the surface, preferably 500 lx.</li>
<li><strong>Viewing distance and angle:</strong> eye no more than 600 mm from the surface, viewing angle not less than 30° to the surface.</li>
<li><strong>Access:</strong> mirrors, borescopes or cameras where direct viewing is not possible.</li>
<li><strong>Surface:</strong> free of slag, spatter and dirt, otherwise defects are hidden.</li>
</ul>
<h2>When Is It Done?</h2>
<p>VT is not only a check after welding. Good practice applies it in three stages:</p>
<table class="data-table"><thead><tr><th>Stage</th><th>What is checked</th></tr></thead><tbody>
<tr><td>Before welding</td><td>Groove angle, root gap, root face, cleanliness, tack welds, fit-up and misalignment</td></tr>
<tr><td>During welding</td><td>Inter-pass cleaning, root pass condition, interpass temperature, surface after back-gouging</td></tr>
<tr><td>After welding</td><td>Weld dimensions, surface defects, spatter and arc strikes, distortion, cleanliness</td></tr>
</tbody></table>
<p>A groove error caught before welding is far cheaper to fix than the lack of fusion found afterwards.</p>
<h2>Features Measured After Welding</h2>
<ul>
<li><strong>Fillet welds:</strong> throat thickness a and leg length z, concavity or convexity, unequal legs.</li>
<li><strong>Butt welds:</strong> cap height, excess root penetration, incompletely filled groove, misalignment, root concavity.</li>
<li><strong>Both:</strong> undercut depth, surface porosity, crater cracks, weld starts and stops, spatter, arc strikes.</li>
</ul>
<h2>Tools Used</h2>
<ul>
<li>Multi-purpose weld gauge (throat, cap height, undercut depth, groove angle)</li>
<li>Fillet weld gauge set</li>
<li>Calliper, rule and tape measure</li>
<li>Magnifier (2x–5x), torch, mirror</li>
<li>Surface thermometer where needed (interpass temperature)</li>
</ul>
<h2>What Should a VT Report Contain?</h2>
<p>Part and weld identification, applied standard and acceptance level, testing stage, tools used, measured values, location and size of indications, result and inspector details. Recording measured values for accepted welds as well shows the report is a real measurement record.</p>
<h2>Competence of VT Personnel</h2>
<p>EN 1090-2 and ISO 3834 require VT personnel to be competent. In practice this means VT certification to ISO 9712 or training as welding coordination personnel. Inspectors' eyesight (near vision acuity, colour perception) should also be checked regularly.</p>
<h2>Limits of VT</h2>
<p>Visual testing only sees the surface. Internal porosity, internal cracks and lack of fusion cannot be found with VT; UT or RT is needed. Very fine surface cracks may also be missed; suspicious areas get PT or MT. VT should therefore be seen as the first link of the NDT plan, not as a stand-alone check.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> every weld is visually tested to ISO 17637 by our ISO 9712 Level 2 VT certified personnel, and measured values are entered in the report. On critical parts, pre-weld groove checks are also recorded. <a href="../kalite.html">See our quality approach →</a></p></div>
`,
    faq: [
      ['What is the minimum lighting for VT?', 'ISO 17637 requires at least 350 lx on the surface and recommends 500 lx. Where workshop lighting is insufficient, a torch or portable lamp is used.'],
      ['Is certification required for visual testing?', 'EN 1090-2 and ISO 3834 require competent personnel. Customer specifications usually ask for VT Level 2 certification to ISO 9712.'],
      ['When should VT be performed?', 'Before welding (groove and fit-up), during welding (between passes) and after welding. For high-strength steels at risk of delayed cracking, final inspection follows the hold time given in the standard.'],
      ['Which standard gives VT acceptance criteria?', 'ISO 17637 does not. Steel usually uses the quality levels of EN ISO 5817, aluminium those of EN ISO 10042.']
    ],
    cta_h3: 'Welded parts with every weld measured and reported',
    cta_p: 'Send your drawing and we will state the VT and NDT scope clearly in our quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'ISO 17637 Sichtprüfung von Schweißnähten (VT): Bedingungen, Messungen, Bericht',
    meta: 'Sichtprüfung von Schmelzschweißverbindungen nach ISO 17637: Beleuchtung und Betrachtungsbedingungen, Prüfungen vor, während und nach dem Schweißen, Messgrößen, Lehren und VT-Bericht.',
    og: 'ISO 17637 Sichtprüfung von Schweißnähten',
    tag: 'Qualität · ZfP',
    h1: 'ISO 17637 Sichtprüfung (VT): Die günstigste Prüfung mit den meisten Befunden',
    crumb: 'ISO 17637 VT',
    read: '7 Min. Lesezeit',
    body: `
<p>Die Sichtprüfung (VT) wirkt wie das einfachste Verfahren der Schweißnahtprüfung, findet aber die meisten Unregelmäßigkeiten. Oberflächenrisse, Einbrandkerben, nicht vollständig gefüllte Nähte, zu kleine a-Maße und Formabweichungen werden überwiegend visuell entdeckt. Eine korrekte VT macht auch nachfolgende UT oder RT erst aussagekräftig. Maßgebend ist <strong>DIN EN ISO 17637</strong>.</p>
<h2>Was regelt ISO 17637?</h2>
<p>Die Norm beschreibt die Durchführung der Sichtprüfung an Schmelzschweißverbindungen: Prüfbedingungen, Hilfsmittel, Zeitpunkt und Dokumentation. Zulässigkeitskriterien enthält sie nicht; dafür gelten meist DIN EN ISO 5817 (Stahl) oder DIN EN ISO 10042 (Aluminium).</p>
<h2>Prüfbedingungen</h2>
<ul>
<li><strong>Beleuchtung:</strong> mindestens 350 lx auf der Prüffläche, empfohlen 500 lx.</li>
<li><strong>Abstand und Winkel:</strong> Auge höchstens 600 mm von der Oberfläche, Betrachtungswinkel nicht unter 30°.</li>
<li><strong>Zugang:</strong> Spiegel, Endoskop oder Kamera, wo direkte Sicht nicht möglich ist.</li>
<li><strong>Oberfläche:</strong> frei von Schlacke, Spritzern und Schmutz, sonst werden Fehler verdeckt.</li>
</ul>
<h2>Wann wird geprüft?</h2>
<p>VT ist nicht nur eine Endkontrolle. Gute Praxis prüft in drei Phasen:</p>
<table class="data-table"><thead><tr><th>Phase</th><th>Prüfinhalt</th></tr></thead><tbody>
<tr><td>Vor dem Schweißen</td><td>Öffnungswinkel, Spalt, Steghöhe, Sauberkeit, Heftstellen, Passung und Kantenversatz</td></tr>
<tr><td>Während des Schweißens</td><td>Reinigung zwischen den Lagen, Wurzellage, Zwischenlagentemperatur, Fläche nach dem Ausfugen</td></tr>
<tr><td>Nach dem Schweißen</td><td>Nahtmaße, Oberflächenfehler, Spritzer und Zündstellen, Verzug, Sauberkeit</td></tr>
</tbody></table>
<p>Ein vor dem Schweißen erkannter Fugenfehler ist wesentlich günstiger zu beheben als ein später gefundener Bindefehler.</p>
<h2>Messgrößen nach dem Schweißen</h2>
<ul>
<li><strong>Kehlnähte:</strong> a-Maß und Schenkellänge z, Wölbung oder Einfall, ungleiche Schenkel.</li>
<li><strong>Stumpfnähte:</strong> Nahtüberhöhung, Wurzelüberhöhung, Decklagenunterwölbung, Kantenversatz, Wurzelrückfall.</li>
<li><strong>Beide:</strong> Tiefe der Einbrandkerben, Oberflächenporen, Endkraterrisse, Ansatzstellen, Spritzer, Zündstellen.</li>
</ul>
<h2>Hilfsmittel</h2>
<ul>
<li>Universal-Schweißnahtlehre (a-Maß, Überhöhung, Kerbtiefe, Öffnungswinkel)</li>
<li>Kehlnahtlehrensatz</li>
<li>Messschieber, Maßstab, Bandmaß</li>
<li>Lupe (2- bis 5-fach), Lampe, Spiegel</li>
<li>Bei Bedarf Oberflächenthermometer (Zwischenlagentemperatur)</li>
</ul>
<h2>Inhalt des VT-Berichts</h2>
<p>Teil- und Nahtkennzeichnung, angewandte Norm und Bewertungsgruppe, Prüfphase, Hilfsmittel, Messwerte, Lage und Größe der Anzeigen, Ergebnis und Angaben zum Prüfer. Werden auch bei zulässigen Nähten Messwerte eingetragen, ist erkennbar, dass tatsächlich gemessen wurde.</p>
<h2>Qualifikation des Prüfpersonals</h2>
<p>EN 1090-2 und ISO 3834 fordern qualifiziertes Personal. In der Praxis bedeutet das eine VT-Zertifizierung nach ISO 9712 oder eine Ausbildung als Schweißaufsichtsperson. Auch das Sehvermögen (Nahvisus, Farbsehen) ist regelmäßig nachzuweisen.</p>
<h2>Grenzen der Sichtprüfung</h2>
<p>VT erfasst nur die Oberfläche. Innere Poren, innere Risse und Bindefehler sind visuell nicht erkennbar; dafür braucht es UT oder RT. Sehr feine Oberflächenrisse können übersehen werden; verdächtige Bereiche werden mit PT oder MT geprüft. VT ist daher das erste Glied des ZfP-Plans, keine alleinige Prüfung.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Jede Naht wird von unserem nach ISO 9712 Stufe 2 VT-zertifizierten Personal nach ISO 17637 geprüft, die Messwerte werden protokolliert. Bei kritischen Teilen wird auch die Fugenprüfung vor dem Schweißen dokumentiert. <a href="../kalite.html">Unser Qualitätsansatz →</a></p></div>
`,
    faq: [
      ['Welche Mindestbeleuchtung gilt für VT?', 'ISO 17637 fordert mindestens 350 lx auf der Prüffläche, empfohlen sind 500 lx. Reicht die Hallenbeleuchtung nicht, wird eine Handlampe eingesetzt.'],
      ['Ist für die Sichtprüfung ein Zertifikat nötig?', 'EN 1090-2 und ISO 3834 verlangen qualifiziertes Personal. Kundenspezifikationen fordern meist VT Stufe 2 nach ISO 9712.'],
      ['Wann wird die Sichtprüfung durchgeführt?', 'Vor dem Schweißen (Fuge und Passung), während des Schweißens (zwischen den Lagen) und danach. Bei hochfesten Stählen mit Kaltrissgefahr erfolgt die Endprüfung nach der in der Norm angegebenen Wartezeit.'],
      ['Wo stehen die Zulässigkeitskriterien für VT?', 'Nicht in ISO 17637. Für Stahl gelten meist die Bewertungsgruppen der DIN EN ISO 5817, für Aluminium die der DIN EN ISO 10042.']
    ],
    cta_h3: 'Schweißteile mit gemessener und protokollierter Naht',
    cta_p: 'Senden Sie Ihre Zeichnung. VT- und ZfP-Umfang legen wir im Angebot klar fest.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'ISO 17637 inspección visual de soldaduras (VT): condiciones, mediciones e informe',
    meta: 'Inspección visual de soldaduras según ISO 17637: iluminación y condiciones de observación, controles antes, durante y después de soldar, magnitudes medidas, galgas e informe VT.',
    og: 'ISO 17637 inspección visual de soldaduras',
    tag: 'Calidad · END',
    h1: 'ISO 17637 inspección visual (VT): el control más barato y el que más defectos detecta',
    crumb: 'ISO 17637 VT',
    read: '7 min de lectura',
    body: `
<p>La inspección visual (VT) parece el método más simple del control de soldaduras, pero es el que más defectos detecta. Fisuras superficiales, mordeduras, falta de relleno, garganta insuficiente y desviaciones geométricas se encuentran en su mayoría a simple vista. Una VT bien hecha da sentido también a la UT o RT posteriores. La norma del método es la <strong>EN ISO 17637</strong>.</p>
<h2>¿Qué define la ISO 17637?</h2>
<p>Define cómo realizar la inspección visual de soldaduras por fusión: condiciones, herramientas, momento y registro. No da criterios de aceptación; para ello se usan normalmente EN ISO 5817 (acero) o EN ISO 10042 (aluminio).</p>
<h2>Condiciones de inspección</h2>
<ul>
<li><strong>Iluminación:</strong> al menos 350 lx en la superficie, preferiblemente 500 lx.</li>
<li><strong>Distancia y ángulo:</strong> ojo a no más de 600 mm, ángulo de observación no inferior a 30°.</li>
<li><strong>Acceso:</strong> espejos, boroscopios o cámaras donde no hay visión directa.</li>
<li><strong>Superficie:</strong> sin escoria, proyecciones ni suciedad, que ocultan defectos.</li>
</ul>
<h2>¿Cuándo se realiza?</h2>
<p>La VT no es solo un control final. La buena práctica la aplica en tres fases:</p>
<table class="data-table"><thead><tr><th>Fase</th><th>Qué se controla</th></tr></thead><tbody>
<tr><td>Antes de soldar</td><td>Ángulo del chaflán, separación en raíz, talón, limpieza, punteados, ajuste y desalineación</td></tr>
<tr><td>Durante la soldadura</td><td>Limpieza entre pasadas, pasada de raíz, temperatura entre pasadas, superficie tras el saneado</td></tr>
<tr><td>Después de soldar</td><td>Dimensiones, defectos superficiales, proyecciones y cebados, distorsión, limpieza</td></tr>
</tbody></table>
<p>Un error de chaflán detectado antes de soldar es mucho más barato de corregir que una falta de fusión encontrada después.</p>
<h2>Magnitudes medidas tras soldar</h2>
<ul>
<li><strong>Soldaduras en ángulo:</strong> garganta a y lado z, concavidad o convexidad, lados desiguales.</li>
<li><strong>Soldaduras a tope:</strong> sobreespesor, exceso de penetración, falta de relleno, desalineación, rechupe de raíz.</li>
<li><strong>Ambas:</strong> profundidad de mordedura, poros superficiales, fisuras de cráter, empalmes, proyecciones, cebados.</li>
</ul>
<h2>Herramientas</h2>
<ul>
<li>Galga de soldadura multiuso (garganta, sobreespesor, mordedura, ángulo)</li>
<li>Juego de galgas para soldaduras en ángulo</li>
<li>Calibre, regla y cinta métrica</li>
<li>Lupa (2x–5x), linterna, espejo</li>
<li>Termómetro de superficie si es necesario (temperatura entre pasadas)</li>
</ul>
<h2>¿Qué debe incluir el informe VT?</h2>
<p>Identificación de pieza y cordón, norma y nivel de aceptación, fase de inspección, herramientas, valores medidos, posición y tamaño de las indicaciones, resultado y datos del inspector. Anotar valores también en los cordones aceptados demuestra que el informe es un registro real de medición.</p>
<h2>Competencia del personal</h2>
<p>La EN 1090-2 y la ISO 3834 exigen personal competente. En la práctica, certificación VT según ISO 9712 o formación como coordinador de soldadura. También debe comprobarse periódicamente la visión del inspector (agudeza cercana, percepción del color).</p>
<h2>Límites de la VT</h2>
<p>La inspección visual solo ve la superficie. Poros internos, fisuras internas y faltas de fusión no se detectan con VT; se necesita UT o RT. Las fisuras superficiales muy finas pueden pasar desapercibidas; en zonas dudosas se aplica PT o MT. Por eso la VT es el primer eslabón del plan de END, no un control aislado.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> cada cordón lo inspecciona visualmente según ISO 17637 nuestro personal certificado VT nivel 2 ISO 9712, y los valores medidos se registran en el informe. En piezas críticas también se documenta el control del chaflán antes de soldar. <a href="../kalite.html">Nuestro enfoque de calidad →</a></p></div>
`,
    faq: [
      ['¿Cuál es la iluminación mínima para VT?', 'La ISO 17637 exige al menos 350 lx en la superficie y recomienda 500 lx. Si la iluminación del taller no basta, se usa una linterna o lámpara portátil.'],
      ['¿Hace falta certificación para la inspección visual?', 'La EN 1090-2 y la ISO 3834 exigen personal competente. Las especificaciones de cliente suelen pedir VT nivel 2 según ISO 9712.'],
      ['¿Cuándo debe hacerse la VT?', 'Antes de soldar (chaflán y ajuste), durante (entre pasadas) y después. En aceros de alta resistencia con riesgo de fisuración diferida, la inspección final se hace tras el tiempo de espera indicado en la norma.'],
      ['¿Qué norma da los criterios de aceptación VT?', 'La ISO 17637 no. En acero se usan los niveles de calidad de la EN ISO 5817, en aluminio los de la EN ISO 10042.']
    ],
    cta_h3: 'Piezas soldadas con cada cordón medido e informado',
    cta_p: 'Envíe su plano; indicamos claramente el alcance VT y END en la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'ISO 17637 contrôle visuel des soudures (VT) : conditions, mesures et rapport',
    meta: 'Contrôle visuel des soudures selon l’ISO 17637 : éclairage et conditions d’observation, contrôles avant, pendant et après soudage, grandeurs mesurées, jauges et rapport VT.',
    og: 'ISO 17637 contrôle visuel des soudures',
    tag: 'Qualité · CND',
    h1: 'ISO 17637 contrôle visuel (VT) : le contrôle le moins cher qui trouve le plus de défauts',
    crumb: 'ISO 17637 VT',
    read: '7 min de lecture',
    body: `
<p>Le contrôle visuel (VT) semble la méthode la plus simple du contrôle des soudures, mais c’est celle qui détecte le plus de défauts. Fissures débouchantes, caniveaux, manques d’épaisseur, gorges insuffisantes et écarts géométriques sont en grande partie trouvés à l’œil. Un VT bien réalisé donne aussi tout son sens à l’UT ou à la RT qui suivent. La norme de référence est la <strong>NF EN ISO 17637</strong>.</p>
<h2>Que définit l’ISO 17637 ?</h2>
<p>Elle définit la réalisation du contrôle visuel des assemblages soudés par fusion : conditions, outils, moment et rapport. Elle ne donne pas de critères d’acceptation ; on utilise en général la NF EN ISO 5817 (acier) ou la NF EN ISO 10042 (aluminium).</p>
<h2>Conditions de contrôle</h2>
<ul>
<li><strong>Éclairage :</strong> au moins 350 lx sur la surface, 500 lx recommandés.</li>
<li><strong>Distance et angle :</strong> œil à 600 mm maximum, angle d’observation d’au moins 30°.</li>
<li><strong>Accès :</strong> miroirs, endoscopes ou caméras là où la vision directe est impossible.</li>
<li><strong>Surface :</strong> exempte de laitier, projections et salissures qui masquent les défauts.</li>
</ul>
<h2>Quand contrôler ?</h2>
<p>Le VT n’est pas qu’un contrôle final. La bonne pratique l’applique en trois temps :</p>
<table class="data-table"><thead><tr><th>Étape</th><th>Points contrôlés</th></tr></thead><tbody>
<tr><td>Avant soudage</td><td>Angle de chanfrein, écartement, talon, propreté, pointages, accostage et désalignement</td></tr>
<tr><td>Pendant soudage</td><td>Nettoyage entre passes, passe de racine, température entre passes, surface après gougeage</td></tr>
<tr><td>Après soudage</td><td>Dimensions, défauts de surface, projections et amorçages, déformations, propreté</td></tr>
</tbody></table>
<p>Une erreur de chanfrein repérée avant soudage coûte bien moins cher qu’un manque de fusion découvert après.</p>
<h2>Grandeurs mesurées après soudage</h2>
<ul>
<li><strong>Soudures d’angle :</strong> gorge a et côté z, concavité ou convexité, côtés inégaux.</li>
<li><strong>Soudures bout à bout :</strong> surépaisseur, excès de pénétration, manque d’épaisseur, désalignement, retassure de racine.</li>
<li><strong>Les deux :</strong> profondeur de caniveau, soufflures débouchantes, fissures de cratère, reprises, projections, amorçages.</li>
</ul>
<h2>Outils</h2>
<ul>
<li>Jauge de soudure multifonction (gorge, surépaisseur, caniveau, angle)</li>
<li>Jeu de jauges pour soudures d’angle</li>
<li>Pied à coulisse, réglet et mètre ruban</li>
<li>Loupe (2x–5x), lampe, miroir</li>
<li>Thermomètre de surface si besoin (température entre passes)</li>
</ul>
<h2>Contenu du rapport VT</h2>
<p>Identification de la pièce et du cordon, norme et niveau d’acceptation, étape de contrôle, outils, valeurs mesurées, position et taille des indications, résultat et identité du contrôleur. Noter les valeurs aussi pour les cordons acceptés montre que le rapport est une vraie trace de mesure.</p>
<h2>Compétence du personnel</h2>
<p>L’EN 1090-2 et l’ISO 3834 exigent un personnel compétent. En pratique : certification VT selon ISO 9712 ou formation de coordinateur en soudage. L’acuité visuelle (vision de près, perception des couleurs) doit aussi être vérifiée régulièrement.</p>
<h2>Limites du VT</h2>
<p>Le contrôle visuel ne voit que la surface. Soufflures internes, fissures internes et manques de fusion ne sont pas détectables en VT ; il faut l’UT ou la RT. Des fissures superficielles très fines peuvent échapper à l’œil ; les zones suspectes reçoivent un ressuage ou une magnétoscopie. Le VT est donc le premier maillon du plan de CND, pas un contrôle isolé.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> chaque cordon est contrôlé visuellement selon l’ISO 17637 par notre personnel certifié VT niveau 2 ISO 9712, et les valeurs mesurées sont reportées au rapport. Sur pièces critiques, le contrôle du chanfrein avant soudage est aussi enregistré. <a href="../kalite.html">Notre démarche qualité →</a></p></div>
`,
    faq: [
      ['Quel éclairage minimal pour le VT ?', 'L’ISO 17637 exige au moins 350 lx sur la surface et recommande 500 lx. Si l’éclairage de l’atelier ne suffit pas, on utilise une lampe portative.'],
      ['Faut-il une certification pour le contrôle visuel ?', 'L’EN 1090-2 et l’ISO 3834 exigent un personnel compétent. Les spécifications client demandent généralement le VT niveau 2 selon ISO 9712.'],
      ['Quand réaliser le VT ?', 'Avant soudage (chanfrein et accostage), pendant (entre passes) et après. Sur aciers à haute limite élastique sensibles à la fissuration différée, le contrôle final intervient après le délai d’attente prévu par la norme.'],
      ['Quelle norme fixe les critères d’acceptation VT ?', 'Pas l’ISO 17637. Pour l’acier, on applique les niveaux de qualité de la NF EN ISO 5817, pour l’aluminium ceux de la NF EN ISO 10042.']
    ],
    cta_h3: 'Des pièces soudées dont chaque cordon est mesuré et tracé',
    cta_p: 'Envoyez votre plan ; nous précisons clairement l’étendue VT et CND dans l’offre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'ISO 17637 esame visivo delle saldature (VT): condizioni, misure e rapporto',
    meta: 'Esame visivo delle saldature secondo ISO 17637: illuminazione e condizioni di osservazione, controlli prima, durante e dopo la saldatura, grandezze misurate, calibri e rapporto VT.',
    og: 'ISO 17637 esame visivo delle saldature',
    tag: 'Qualità · CND',
    h1: 'ISO 17637 esame visivo (VT): il controllo più economico che trova più difetti',
    crumb: 'ISO 17637 VT',
    read: '7 min di lettura',
    body: `
<p>L’esame visivo (VT) sembra il metodo più semplice del controllo saldature, ma è quello che trova più difetti. Cricche superficiali, incisioni marginali, mancanza di riempimento, sezioni di gola insufficienti e scostamenti geometrici si individuano per lo più a vista. Un VT eseguito bene dà senso anche a UT o RT successivi. La norma di riferimento è la <strong>UNI EN ISO 17637</strong>.</p>
<h2>Cosa definisce la ISO 17637?</h2>
<p>Definisce come eseguire l’esame visivo dei giunti saldati per fusione: condizioni, strumenti, tempistica e registrazione. Non fornisce criteri di accettabilità; per quelli si usano di norma UNI EN ISO 5817 (acciaio) o UNI EN ISO 10042 (alluminio).</p>
<h2>Condizioni d’esame</h2>
<ul>
<li><strong>Illuminazione:</strong> almeno 350 lx sulla superficie, preferibilmente 500 lx.</li>
<li><strong>Distanza e angolo:</strong> occhio a non più di 600 mm, angolo di osservazione non inferiore a 30°.</li>
<li><strong>Accesso:</strong> specchi, endoscopi o telecamere dove la visione diretta non è possibile.</li>
<li><strong>Superficie:</strong> priva di scoria, spruzzi e sporco, che nascondono i difetti.</li>
</ul>
<h2>Quando si esegue?</h2>
<p>Il VT non è solo un controllo finale. La buona pratica lo applica in tre fasi:</p>
<table class="data-table"><thead><tr><th>Fase</th><th>Cosa si controlla</th></tr></thead><tbody>
<tr><td>Prima della saldatura</td><td>Angolo del cianfrino, luce alla radice, spalla, pulizia, puntature, accoppiamento e disallineamento</td></tr>
<tr><td>Durante la saldatura</td><td>Pulizia tra le passate, passata di radice, temperatura interpass, superficie dopo la scriccatura</td></tr>
<tr><td>Dopo la saldatura</td><td>Dimensioni, difetti superficiali, spruzzi e colpi d’arco, deformazioni, pulizia</td></tr>
</tbody></table>
<p>Un errore di cianfrino individuato prima della saldatura costa molto meno di una mancanza di fusione scoperta dopo.</p>
<h2>Grandezze misurate dopo la saldatura</h2>
<ul>
<li><strong>Saldature d’angolo:</strong> sezione di gola a e lato z, concavità o convessità, lati disuguali.</li>
<li><strong>Saldature testa a testa:</strong> sovrametallo, eccesso di penetrazione, mancanza di riempimento, disallineamento, ritiro alla radice.</li>
<li><strong>Entrambe:</strong> profondità delle incisioni, porosità superficiali, cricche di cratere, riprese, spruzzi, colpi d’arco.</li>
</ul>
<h2>Strumenti</h2>
<ul>
<li>Calibro multifunzione per saldature (gola, sovrametallo, incisioni, angolo)</li>
<li>Set di calibri per saldature d’angolo</li>
<li>Calibro a corsoio, righello e metro</li>
<li>Lente (2x–5x), torcia, specchio</li>
<li>Termometro di superficie se necessario (temperatura interpass)</li>
</ul>
<h2>Cosa deve contenere il rapporto VT</h2>
<p>Identificazione di pezzo e cordone, norma e livello di accettabilità, fase d’esame, strumenti, valori misurati, posizione e dimensione delle indicazioni, esito e dati dell’ispettore. Riportare i valori anche per i cordoni accettati dimostra che il rapporto è una vera registrazione di misura.</p>
<h2>Competenza del personale</h2>
<p>EN 1090-2 e ISO 3834 richiedono personale competente. In pratica significa certificazione VT secondo ISO 9712 o formazione come coordinatore di saldatura. Anche la vista dell’ispettore (acuità ravvicinata, percezione dei colori) va verificata periodicamente.</p>
<h2>Limiti del VT</h2>
<p>L’esame visivo vede solo la superficie. Porosità interne, cricche interne e mancanze di fusione non sono rilevabili con VT; servono UT o RT. Cricche superficiali molto sottili possono sfuggire; nelle zone sospette si applicano PT o MT. Il VT è quindi il primo anello del piano CND, non un controllo isolato.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> ogni cordone viene esaminato a vista secondo ISO 17637 dal nostro personale certificato VT livello 2 ISO 9712 e i valori misurati vengono riportati nel rapporto. Sui pezzi critici viene registrato anche il controllo del cianfrino prima della saldatura. <a href="../kalite.html">Il nostro approccio alla qualità →</a></p></div>
`,
    faq: [
      ['Qual è l’illuminazione minima per il VT?', 'La ISO 17637 richiede almeno 350 lx sulla superficie e raccomanda 500 lx. Se l’illuminazione d’officina non basta si usa una torcia o una lampada portatile.'],
      ['Serve una certificazione per l’esame visivo?', 'EN 1090-2 e ISO 3834 richiedono personale competente. Le specifiche cliente chiedono di solito VT livello 2 secondo ISO 9712.'],
      ['Quando va eseguito il VT?', 'Prima della saldatura (cianfrino e accoppiamento), durante (tra le passate) e dopo. Sugli acciai ad alta resistenza a rischio di cricche ritardate, l’esame finale segue il tempo di attesa previsto dalla norma.'],
      ['Quale norma fissa i criteri di accettabilità VT?', 'Non la ISO 17637. Per l’acciaio si usano i livelli di qualità della UNI EN ISO 5817, per l’alluminio quelli della UNI EN ISO 10042.']
    ],
    cta_h3: 'Pezzi saldati con ogni cordone misurato e registrato',
    cta_p: 'Inviateci il disegno; indichiamo chiaramente l’estensione VT e CND nell’offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'ISO 17637 visuele inspectie van lassen (VT): voorwaarden, metingen en rapport',
    meta: 'Visuele inspectie van lassen volgens ISO 17637: verlichting en kijkvoorwaarden, controles vóór, tijdens en na het lassen, gemeten grootheden, lasmeters en het VT-rapport.',
    og: 'ISO 17637 visuele inspectie van lassen',
    tag: 'Kwaliteit · NDO',
    h1: 'ISO 17637 visuele inspectie (VT): de goedkoopste controle die de meeste fouten vindt',
    crumb: 'ISO 17637 VT',
    read: '7 min lezen',
    body: `
<p>Visuele inspectie (VT) lijkt de eenvoudigste methode van lascontrole, maar vindt de meeste fouten. Oppervlaktescheuren, inkartelingen, onvolledig gevulde naden, te kleine a-maten en vormafwijkingen worden grotendeels met het oog gevonden. Een goed uitgevoerde VT maakt ook latere UT of RT zinvol. De norm voor deze methode is <strong>NEN-EN-ISO 17637</strong>.</p>
<h2>Wat legt ISO 17637 vast?</h2>
<p>De norm beschrijft hoe visuele inspectie van smeltlassen wordt uitgevoerd: voorwaarden, hulpmiddelen, tijdstip en rapportage. Acceptatiecriteria staan er niet in; daarvoor gelden meestal NEN-EN-ISO 5817 (staal) of NEN-EN-ISO 10042 (aluminium).</p>
<h2>Inspectievoorwaarden</h2>
<ul>
<li><strong>Verlichting:</strong> minimaal 350 lx op het oppervlak, bij voorkeur 500 lx.</li>
<li><strong>Afstand en hoek:</strong> oog maximaal 600 mm van het oppervlak, kijkhoek niet kleiner dan 30°.</li>
<li><strong>Toegang:</strong> spiegels, endoscopen of camera’s waar direct zicht niet mogelijk is.</li>
<li><strong>Oppervlak:</strong> vrij van slak, spatten en vuil, anders blijven fouten verborgen.</li>
</ul>
<h2>Wanneer wordt geïnspecteerd?</h2>
<p>VT is niet alleen een eindcontrole. Goede praktijk past haar in drie fasen toe:</p>
<table class="data-table"><thead><tr><th>Fase</th><th>Wat wordt gecontroleerd</th></tr></thead><tbody>
<tr><td>Vóór het lassen</td><td>Naadhoek, opening, staande kant, reinheid, hechtlassen, passing en kantverschuiving</td></tr>
<tr><td>Tijdens het lassen</td><td>Reiniging tussen de lagen, grondlaag, tussenlaagtemperatuur, oppervlak na het gutsen</td></tr>
<tr><td>Na het lassen</td><td>Lasafmetingen, oppervlaktefouten, spatten en ontstekingsplekken, vervorming, reinheid</td></tr>
</tbody></table>
<p>Een naadfout die vóór het lassen wordt ontdekt, is veel goedkoper te herstellen dan een bindingsfout die achteraf wordt gevonden.</p>
<h2>Gemeten grootheden na het lassen</h2>
<ul>
<li><strong>Hoeklassen:</strong> a-maat en beenlengte z, holle of bolle las, ongelijke benen.</li>
<li><strong>Stompe lassen:</strong> lasoverhoogte, doorlasoverhoogte, onvolledig gevulde naad, kantverschuiving, worteluitholling.</li>
<li><strong>Beide:</strong> diepte van inkarteling, oppervlakteporiën, kraterscheuren, aanzetplekken, spatten, ontstekingsplekken.</li>
</ul>
<h2>Hulpmiddelen</h2>
<ul>
<li>Universele lasmeter (a-maat, overhoogte, inkarteling, naadhoek)</li>
<li>Set hoeklasmeters</li>
<li>Schuifmaat, liniaal en rolmaat</li>
<li>Loep (2x–5x), lamp, spiegel</li>
<li>Zo nodig oppervlaktethermometer (tussenlaagtemperatuur)</li>
</ul>
<h2>Wat hoort in een VT-rapport?</h2>
<p>Identificatie van onderdeel en las, toegepaste norm en kwaliteitsniveau, inspectiefase, hulpmiddelen, gemeten waarden, positie en grootte van indicaties, resultaat en gegevens van de inspecteur. Wie ook bij goedgekeurde lassen meetwaarden noteert, laat zien dat het rapport een echte meetregistratie is.</p>
<h2>Bekwaamheid van het personeel</h2>
<p>EN 1090-2 en ISO 3834 eisen bekwaam personeel. In de praktijk betekent dat een VT-certificaat volgens ISO 9712 of een opleiding als lascoördinator. Ook het gezichtsvermogen (nabijzicht, kleurwaarneming) moet regelmatig worden getest.</p>
<h2>Grenzen van VT</h2>
<p>Visuele inspectie ziet alleen het oppervlak. Inwendige porositeit, inwendige scheuren en bindingsfouten zijn met VT niet te vinden; daarvoor is UT of RT nodig. Zeer fijne oppervlaktescheuren kunnen worden gemist; verdachte zones krijgen PT of MT. VT is dus de eerste schakel van het NDO-plan, geen losstaande controle.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> elke las wordt volgens ISO 17637 visueel geïnspecteerd door ons ISO 9712 niveau 2 VT-gecertificeerde personeel, en de meetwaarden worden in het rapport vastgelegd. Bij kritische delen wordt ook de naadcontrole vóór het lassen geregistreerd. <a href="../kalite.html">Onze kwaliteitsaanpak →</a></p></div>
`,
    faq: [
      ['Wat is de minimale verlichting voor VT?', 'ISO 17637 eist minimaal 350 lx op het oppervlak en adviseert 500 lx. Is de werkplaatsverlichting onvoldoende, dan wordt een handlamp gebruikt.'],
      ['Is certificering nodig voor visuele inspectie?', 'EN 1090-2 en ISO 3834 eisen bekwaam personeel. Klantspecificaties vragen meestal VT niveau 2 volgens ISO 9712.'],
      ['Wanneer moet VT worden uitgevoerd?', 'Vóór het lassen (naad en passing), tijdens (tussen de lagen) en erna. Bij hogesterktestaal met risico op vertraagde scheurvorming volgt de eindinspectie na de wachttijd uit de norm.'],
      ['Welke norm geeft de acceptatiecriteria voor VT?', 'Niet ISO 17637. Voor staal gelden meestal de kwaliteitsniveaus van NEN-EN-ISO 5817, voor aluminium die van NEN-EN-ISO 10042.']
    ],
    cta_h3: 'Gelaste delen waarvan elke las is gemeten en gerapporteerd',
    cta_p: 'Stuur uw tekening; we leggen de omvang van VT en NDO duidelijk vast in de offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'ISO 17637 visuell kontroll av sveiser (VT): forhold, målinger og rapport',
    meta: 'Visuell kontroll av sveiser etter ISO 17637: belysning og synsforhold, kontroller før, under og etter sveising, målte størrelser, sveisemålere og VT-rapporten.',
    og: 'ISO 17637 visuell kontroll av sveiser',
    tag: 'Kvalitet · NDT',
    h1: 'ISO 17637 visuell kontroll (VT): den billigste kontrollen som finner flest feil',
    crumb: 'ISO 17637 VT',
    read: '7 min lesing',
    body: `
<p>Visuell kontroll (VT) virker som den enkleste metoden i sveisekontroll, men den finner flest feil. Overflatesprekker, sidekutt, ufylte fuger, for små a-mål og geometriske avvik oppdages for det meste med øyet. En riktig utført VT gjør også senere UT eller RT meningsfull. Standarden for metoden er <strong>NS-EN ISO 17637</strong>.</p>
<h2>Hva definerer ISO 17637?</h2>
<p>Standarden beskriver hvordan visuell kontroll av smeltesveiser utføres: forhold, hjelpemidler, tidspunkt og rapportering. Den gir ikke akseptkriterier; til det brukes normalt NS-EN ISO 5817 (stål) eller NS-EN ISO 10042 (aluminium).</p>
<h2>Kontrollforhold</h2>
<ul>
<li><strong>Belysning:</strong> minst 350 lx på overflaten, helst 500 lx.</li>
<li><strong>Avstand og vinkel:</strong> øyet maks 600 mm fra overflaten, synsvinkel ikke under 30°.</li>
<li><strong>Tilgang:</strong> speil, boroskop eller kamera der direkte innsyn ikke er mulig.</li>
<li><strong>Overflate:</strong> fri for slagg, sprut og smuss, ellers skjules feil.</li>
</ul>
<h2>Når utføres den?</h2>
<p>VT er ikke bare en sluttkontroll. God praksis bruker den i tre faser:</p>
<table class="data-table"><thead><tr><th>Fase</th><th>Hva kontrolleres</th></tr></thead><tbody>
<tr><td>Før sveising</td><td>Fugevinkel, rotåpning, rotflate, renhet, heftsveiser, tilpasning og kantforskyvning</td></tr>
<tr><td>Under sveising</td><td>Rengjøring mellom strengene, rotstreng, mellomstrengtemperatur, flate etter fugesliping</td></tr>
<tr><td>Etter sveising</td><td>Sveisemål, overflatefeil, sprut og tennmerker, deformasjon, renhet</td></tr>
</tbody></table>
<p>En fugefeil som oppdages før sveising, er langt billigere å rette enn en bindingsfeil som finnes etterpå.</p>
<h2>Målte størrelser etter sveising</h2>
<ul>
<li><strong>Kilsveiser:</strong> a-mål og benlengde z, konkav eller konveks form, ulike ben.</li>
<li><strong>Buttsveiser:</strong> overhøyde, rotoverhøyde, ufylt fuge, kantforskyvning, rotkonkavitet.</li>
<li><strong>Begge:</strong> dybde på sidekutt, overflateporer, kratersprekker, start- og stoppunkter, sprut, tennmerker.</li>
</ul>
<h2>Hjelpemidler</h2>
<ul>
<li>Universal sveisemåler (a-mål, overhøyde, sidekutt, fugevinkel)</li>
<li>Sett med kilsveismålere</li>
<li>Skyvelære, linjal og målebånd</li>
<li>Lupe (2x–5x), lykt, speil</li>
<li>Overflatetermometer ved behov (mellomstrengtemperatur)</li>
</ul>
<h2>Hva skal VT-rapporten inneholde?</h2>
<p>Identifikasjon av del og sveis, anvendt standard og kvalitetsnivå, kontrollfase, hjelpemidler, målte verdier, plassering og størrelse på indikasjoner, resultat og opplysninger om kontrolløren. Når målte verdier også føres for godkjente sveiser, viser rapporten at det faktisk er målt.</p>
<h2>Kompetanse hos personellet</h2>
<p>EN 1090-2 og ISO 3834 krever kompetent personell. I praksis betyr det VT-sertifikat etter ISO 9712 eller opplæring som sveisekoordinator. Synet (nærsyn, fargesyn) bør også kontrolleres jevnlig.</p>
<h2>Begrensninger ved VT</h2>
<p>Visuell kontroll ser bare overflaten. Indre porer, indre sprekker og bindingsfeil kan ikke finnes med VT; da trengs UT eller RT. Svært fine overflatesprekker kan også overses; mistenkelige områder får PT eller MT. VT bør derfor sees som første ledd i NDT-planen, ikke som en frittstående kontroll.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> hver sveis kontrolleres visuelt etter ISO 17637 av vårt ISO 9712 nivå 2 VT-sertifiserte personell, og målte verdier føres i rapporten. På kritiske deler registreres også fugekontrollen før sveising. <a href="../kalite.html">Vår kvalitetstilnærming →</a></p></div>
`,
    faq: [
      ['Hva er minimum belysning for VT?', 'ISO 17637 krever minst 350 lx på overflaten og anbefaler 500 lx. Er verkstedbelysningen for svak, brukes lykt eller bærbar lampe.'],
      ['Kreves sertifikat for visuell kontroll?', 'EN 1090-2 og ISO 3834 krever kompetent personell. Kundespesifikasjoner krever som regel VT nivå 2 etter ISO 9712.'],
      ['Når skal VT utføres?', 'Før sveising (fuge og tilpasning), under (mellom strengene) og etter. For høyfast stål med fare for forsinket sprekkdannelse gjøres sluttkontrollen etter ventetiden i standarden.'],
      ['Hvilken standard gir akseptkriterier for VT?', 'Ikke ISO 17637. For stål brukes som regel kvalitetsnivåene i NS-EN ISO 5817, for aluminium de i NS-EN ISO 10042.']
    ],
    cta_h3: 'Sveiste deler der hver sveis er målt og rapportert',
    cta_p: 'Send tegningen, så angir vi omfanget av VT og NDT tydelig i tilbudet.',
    cta_btn: 'Be om tilbud →'
  }
};
