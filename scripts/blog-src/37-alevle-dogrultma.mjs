export default {
  order: 37,
  slug: 'alevle-dogrultma-kaynak-carpilmasi',
  key: 'p37_flame',
  date: '2026-11-16',
  keywords: 'alevle doğrultma, kaynak çarpılması düzeltme, ısıl doğrultma, kama ısıtma, nokta ısıtma, çizgi ısıtma, doğrultma sıcaklığı, flame straightening, Flammrichten, dressage à la flamme',
  related: ['kaynak-distorsiyonu', 's355jr-s355j2-s355k2-s355nl-farki', 'iso-13920-kaynakli-imalat-tolerans-tablosu', 'boyutsal-tolerans'],
  tr: {
    title: 'Alevle Doğrultma: Kaynak Çarpılmasını Isıyla Düzeltmenin Kuralları',
    meta: 'Alevle doğrultma nasıl çalışır? Nokta, çizgi ve kama ısıtma desenleri, çelik türüne göre sıcaklık sınırları, sıcaklık ölçümü, soğutma, paslanmaz ve alüminyumda dikkat edilecekler ve EN 1090-2’nin doğrultma için istedikleri.',
    og: 'Alevle Doğrultma',
    tag: 'Üretim · Çarpılma',
    h1: 'Alevle Doğrultma: Kaynak Çarpılmasını Isıyla Düzeltmenin Kuralları',
    crumb: 'Alevle Doğrultma',
    read: '6 dk okuma',
    body: `
<p>En iyi planlanmış kaynak sırası bile çarpılmayı tamamen ortadan kaldırmaz. Toleransın dışına çıkan bir kiriş, şasi veya levha için en yaygın düzeltme yöntemlerinden biri <strong>alevle doğrultmadır</strong>. Doğru yapıldığında hızlı ve etkilidir; yanlış yapıldığında ise malzemenin mekanik özelliklerini bozabilir. Bu yüzden alevle doğrultma bir el becerisi olduğu kadar kontrollü bir süreçtir.</p>
<h2>Nasıl Çalışır?</h2>
<p>Çeliğin küçük bir bölgesi hızla ısıtılır. Isınan bölge genleşmek ister ama çevresindeki soğuk malzeme buna izin vermez; bölge kalıcı olarak “yığılır” (kısalarak kalınlaşır). Soğurken bu bölge çeker ve parçayı ısıtılan tarafa doğru büker. Yani alevle doğrultma, kaynağın çarpılmayı yaratan mekanizmasını, ters yönde ve kontrollü olarak kullanır (bkz. <a href="kaynak-distorsiyonu.html">kaynak distorsiyonu</a>).</p>
<h2>Isıtma Desenleri</h2>
<table class="data-table"><thead><tr><th>Desen</th><th>Nerede kullanılır</th><th>Etkisi</th></tr></thead><tbody>
<tr><td>Nokta ısıtma</td><td>İnce saclarda bombe ve dalgalanma</td><td>Yerel çekme ile yüzeyi gerer</td></tr>
<tr><td>Çizgi ısıtma</td><td>Levhalarda açısal çarpılma, flanş dönmesi</td><td>Isıtılan çizgi boyunca açısal düzeltme</td></tr>
<tr><td>Kama (üçgen) ısıtma</td><td>Kiriş ve profillerde eğrilik, kamburluk</td><td>Kama tabanı tarafına doğru eğme</td></tr>
</tbody></table>
<p>Kama ısıtmada üçgenin tepesi tarafsız eksene, tabanı düzeltilmek istenen kenara gelir; ısıtma tepeden tabana doğru ilerler. Kirişin gövdesi ile flanşı birlikte ısıtılarak profilin tamamı düzeltilir.</p>
<h2>Sıcaklık Sınırları</h2>
<p>Alevle doğrultmada en önemli kural, maksimum sıcaklığın aşılmamasıdır. Sınır, çeliğin üretim yöntemine bağlıdır:</p>
<ul>
<li><strong>Haddelenmiş ve normalize çelikler (ör. S235, S355 +AR/+N):</strong> Genellikle yaklaşık 650 °C civarında bir üst sınır uygulanır; kısa süreli olarak biraz üstü bazı kaynaklarda kabul edilir.</li>
<li><strong>Termomekanik haddelenmiş çelikler (M, ML):</strong> Daha düşük sınırlar uygulanır; yüksek sıcaklık, haddelemede kazanılan ince taneli yapıyı ve mukavemeti bozabilir.</li>
<li><strong>Su verilmiş ve temperlenmiş çelikler (Q, QL):</strong> Temperleme sıcaklığının altında kalınmalıdır; aksi halde mukavemet kaybı yaşanır.</li>
</ul>
<p>Kesin değerler çelik üreticisinin önerisinden ve şartnameden alınır (bkz. <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355 kaliteleri</a>). EN 1090-2, alevle düzeltmede uygulanan prosedürün, maksimum sıcaklığın ve soğutma yönteminin tanımlanıp belgelenmesini ister.</p>
<h2>Sıcaklık Nasıl Kontrol Edilir?</h2>
<p>Çeliğin rengine bakarak sıcaklık tahmini, ortam ışığına göre büyük hata payı taşır. Bu yüzden ısı kalemi (termokroma), temaslı termometre veya kızılötesi ölçüm kullanılır. Kızılötesi ölçümde yüzey emisivitesinin ayarı önemlidir.</p>
<h2>Soğutma</h2>
<p>Yapı çeliklerinde parça genellikle havada soğumaya bırakılır. Su ile hızlı soğutma, bazı çeliklerde sert ve kırılgan bölge oluşturabileceği için şartnamede izin verilmedikçe uygulanmaz; yüksek mukavemetli çeliklerde özellikle kaçınılır.</p>
<h2>Paslanmaz ve Alüminyumda</h2>
<ul>
<li><strong>Östenitik paslanmaz:</strong> Isıl genleşmesi yüksek, iletkenliği düşük olduğu için güçlü tepki verir. Ancak yaklaşık 450–850 °C aralığında uzun süre kalmak karbür çökelmesine ve korozyon direncinin düşmesine yol açabilir; düşük karbonlu (L) kaliteler tercih edilir ve ısıtma kısa tutulur. Isı rengi sonradan giderilmelidir.</li>
<li><strong>Alüminyum:</strong> Erime sıcaklığı düşüktür ve renk değiştirmediği için sıcaklık gözle anlaşılmaz. Isıl işlemle sertleştirilmiş alaşımlarda doğrultma, mukavemet kaybına neden olabilir; genellikle mekanik doğrultma tercih edilir.</li>
</ul>
<h2>Önce Önleme, Sonra Düzeltme</h2>
<p>Alevle doğrultma ek işçilik ve risk demektir. Ters açı verme, uygun kaynak sırası, fikstür ve dengeli kaynak dizilimi ile çarpılmayı baştan azaltmak çoğu zaman daha ekonomiktir. Doğrultma gerektiğinde ise sonrasında ölçü kontrolü yapılarak sonucun toleransa (örneğin <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> sınıfları) uygunluğu doğrulanır.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Çarpılmayı önce kaynak sırası, ters açı ve fikstürle sınırlamaya çalışırız. Alevle doğrultma gerektiğinde sıcaklığı çeliğin türüne uygun sınırda tutar, ölçeriz ve doğrultma sonrası ölçüleri kayda alırız. <a href="../kaynakli-imalat.html">Kaynaklı imalat →</a></p></div>
`,
    faq: [
      ['Alevle doğrultma nedir?', 'Çeliğin belirli bir bölgesini hızla ısıtıp soğurken oluşan çekmeyle çarpılmayı ters yönde düzeltme yöntemidir.'],
      ['Alevle doğrultmada sıcaklık kaç derece olmalı?', 'Çeliğin türüne bağlıdır. Haddelenmiş ve normalize yapı çeliklerinde genellikle yaklaşık 650 °C civarında bir üst sınır uygulanır; termomekanik ve su verilmiş çeliklerde sınır daha düşüktür. Kesin değer üretici önerisi ve şartnameye göre belirlenir.'],
      ['Doğrultmadan sonra su ile soğutulur mu?', 'Şartname izin vermedikçe genellikle hayır; yapı çelikleri havada soğutulur. Yüksek mukavemetli çeliklerde su ile soğutmadan özellikle kaçınılır.'],
      ['Paslanmaz alevle doğrultulabilir mi?', 'Evet ama dikkatle: kısa ısıtma, düşük karbonlu kaliteler ve sonrasında ısı renginin giderilmesi gerekir; uzun süre 450–850 °C aralığında kalmak korozyon direncini düşürebilir.']
    ],
    cta_h3: 'Ölçüsünde teslim edilen kaynaklı parçalar',
    cta_p: 'Çizim ve tolerans bilginizi gönderin; çarpılma kontrolü ve ölçü planıyla teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Flame Straightening: Rules for Correcting Weld Distortion with Heat',
    meta: 'How does flame straightening work? Spot, line and wedge heating patterns, temperature limits by steel type, temperature measurement, cooling, care with stainless and aluminium, and what EN 1090-2 requires for straightening.',
    og: 'Flame Straightening',
    tag: 'Production · Distortion',
    h1: 'Flame Straightening: Rules for Correcting Weld Distortion with Heat',
    crumb: 'Flame Straightening',
    read: '6 min read',
    body: `
<p>Even the best-planned welding sequence does not eliminate distortion completely. For a beam, chassis or plate that is out of tolerance, one of the most common correction methods is <strong>flame straightening</strong>. Done right it is fast and effective; done wrong it can damage the material’s mechanical properties. That is why flame straightening is a controlled process as much as a manual skill.</p>
<h2>How It Works</h2>
<p>A small area of steel is heated rapidly. The heated area wants to expand but the cold surrounding material prevents it, so the area is permanently “upset” (shortened and thickened). As it cools it contracts and bends the part towards the heated side. Flame straightening uses the same mechanism that causes weld distortion, in the opposite direction and under control (see <a href="kaynak-distorsiyonu.html">weld distortion</a>).</p>
<h2>Heating Patterns</h2>
<table class="data-table"><thead><tr><th>Pattern</th><th>Where it is used</th><th>Effect</th></tr></thead><tbody>
<tr><td>Spot heating</td><td>Bulging and buckling in thin sheet</td><td>Tightens the surface through local shrinkage</td></tr>
<tr><td>Line heating</td><td>Angular distortion of plates, flange rotation</td><td>Angular correction along the heated line</td></tr>
<tr><td>Wedge (triangle) heating</td><td>Camber and sweep in beams and sections</td><td>Bends towards the wedge base</td></tr>
</tbody></table>
<p>In wedge heating the apex of the triangle sits at the neutral axis and the base at the edge to be corrected; heating progresses from apex to base. Web and flange are heated together to correct the whole section.</p>
<h2>Temperature Limits</h2>
<p>The most important rule in flame straightening is not to exceed the maximum temperature. The limit depends on how the steel was produced:</p>
<ul>
<li><strong>As-rolled and normalised steels (e.g. S235, S355 +AR/+N):</strong> an upper limit of about 650 °C is generally applied; some sources accept slightly higher for short periods.</li>
<li><strong>Thermomechanically rolled steels (M, ML):</strong> lower limits apply; high temperature can destroy the fine-grained structure and strength gained in rolling.</li>
<li><strong>Quenched and tempered steels (Q, QL):</strong> must stay below the tempering temperature, otherwise strength is lost.</li>
</ul>
<p>Exact values come from the steel producer’s recommendation and the specification (see <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355 grades</a>). EN 1090-2 requires the procedure used for flame correction, the maximum temperature and the cooling method to be defined and documented.</p>
<h2>How Is Temperature Checked?</h2>
<p>Judging temperature by the colour of the steel carries a large error depending on ambient light. Temperature-indicating crayons, contact thermometers or infrared measurement are used instead. With infrared, the surface emissivity setting matters.</p>
<h2>Cooling</h2>
<p>For structural steels the part is generally left to cool in air. Rapid water cooling can create hard, brittle zones in some steels, so it is not used unless the specification allows it, and it is particularly avoided on high-strength steels.</p>
<h2>Stainless and Aluminium</h2>
<ul>
<li><strong>Austenitic stainless:</strong> high thermal expansion and low conductivity make it respond strongly. But dwelling in roughly 450–850 °C can cause carbide precipitation and reduced corrosion resistance; low-carbon (L) grades are preferred and heating is kept short. Heat tint must be removed afterwards.</li>
<li><strong>Aluminium:</strong> low melting point and no colour change, so temperature cannot be judged by eye. On heat-treatable alloys straightening can cause loss of strength; mechanical straightening is usually preferred.</li>
</ul>
<h2>Prevent First, Correct Second</h2>
<p>Flame straightening means extra labour and risk. Reducing distortion from the start with presetting, an appropriate welding sequence, fixtures and balanced weld placement is often more economical. When straightening is needed, a dimensional check afterwards confirms that the result meets the tolerance (for example <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> classes).</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> we first try to limit distortion through welding sequence, presetting and fixtures. When flame straightening is needed, we keep and measure the temperature within the limit for the steel type and record the dimensions after straightening. <a href="../kaynakli-imalat.html">Welded fabrication →</a></p></div>
`,
    faq: [
      ['What is flame straightening?', 'A method of correcting distortion by rapidly heating a specific area of steel and using the shrinkage on cooling to bend the part back.'],
      ['What temperature is used for flame straightening?', 'It depends on the steel. For as-rolled and normalised structural steels an upper limit of about 650 °C is generally applied; for thermomechanical and quenched steels the limit is lower. The exact value follows the producer’s recommendation and the specification.'],
      ['Is the part water-cooled after straightening?', 'Generally not unless the specification allows it; structural steels are air-cooled. Water cooling is particularly avoided on high-strength steels.'],
      ['Can stainless be flame straightened?', 'Yes, with care: short heating, low-carbon grades and removal of heat tint afterwards; long dwell in 450–850 °C can lower corrosion resistance.']
    ],
    cta_h3: 'Welded parts delivered to size',
    cta_p: 'Send your drawing and tolerances; we will quote with a distortion control and dimensional plan.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Flammrichten: Regeln für das Korrigieren von Schweißverzug mit Wärme',
    meta: 'Wie funktioniert Flammrichten? Punkt-, Strich- und Keilwärmung, Temperaturgrenzen je Stahlsorte, Temperaturmessung, Abkühlung, Besonderheiten bei Edelstahl und Aluminium und was EN 1090-2 für das Richten verlangt.',
    og: 'Flammrichten',
    tag: 'Fertigung · Verzug',
    h1: 'Flammrichten: Regeln für das Korrigieren von Schweißverzug mit Wärme',
    crumb: 'Flammrichten',
    read: '6 Min. Lesezeit',
    body: `
<p>Selbst die beste Schweißfolge verhindert Verzug nicht vollständig. Für Träger, Rahmen oder Bleche außerhalb der Toleranz ist <strong>Flammrichten</strong> eine der gängigsten Korrekturmethoden. Richtig ausgeführt ist es schnell und wirksam; falsch ausgeführt kann es die mechanischen Eigenschaften schädigen. Flammrichten ist daher ebenso ein kontrollierter Prozess wie eine handwerkliche Fertigkeit.</p>
<h2>Funktionsweise</h2>
<p>Ein kleiner Bereich des Stahls wird schnell erwärmt. Er will sich ausdehnen, wird aber vom kalten Umfeld daran gehindert und dadurch bleibend „gestaucht“. Beim Abkühlen schrumpft er und biegt das Teil zur erwärmten Seite. Flammrichten nutzt also denselben Mechanismus, der Schweißverzug verursacht – kontrolliert und in Gegenrichtung (siehe <a href="kaynak-distorsiyonu.html">Schweißverzug</a>).</p>
<h2>Wärmemuster</h2>
<table class="data-table"><thead><tr><th>Muster</th><th>Einsatz</th><th>Wirkung</th></tr></thead><tbody>
<tr><td>Punktwärmung</td><td>Beulen und Welligkeit bei Dünnblech</td><td>Strafft die Fläche durch örtliche Schrumpfung</td></tr>
<tr><td>Strichwärmung</td><td>Winkelverzug von Blechen, Flanschverdrehung</td><td>Winkelkorrektur entlang der Wärmelinie</td></tr>
<tr><td>Keilwärmung</td><td>Krümmung von Trägern und Profilen</td><td>Biegt zur Keilbasis hin</td></tr>
</tbody></table>
<p>Bei der Keilwärmung liegt die Keilspitze an der neutralen Faser, die Basis an der zu korrigierenden Kante; gewärmt wird von der Spitze zur Basis. Steg und Flansch werden gemeinsam gewärmt, um den ganzen Querschnitt zu richten.</p>
<h2>Temperaturgrenzen</h2>
<p>Die wichtigste Regel ist, die Höchsttemperatur nicht zu überschreiten. Sie hängt vom Herstellweg des Stahls ab:</p>
<ul>
<li><strong>Warmgewalzte und normalisierte Stähle (z. B. S235, S355 +AR/+N):</strong> meist Obergrenze um etwa 650 °C; manche Quellen lassen kurzzeitig etwas mehr zu.</li>
<li><strong>Thermomechanisch gewalzte Stähle (M, ML):</strong> niedrigere Grenzen; hohe Temperaturen können das feinkörnige Gefüge und die erwalzte Festigkeit zerstören.</li>
<li><strong>Vergütete Stähle (Q, QL):</strong> unterhalb der Anlasstemperatur bleiben, sonst sinkt die Festigkeit.</li>
</ul>
<p>Genaue Werte liefern Stahlhersteller und Spezifikation (siehe <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355-Güten</a>). EN 1090-2 verlangt, dass Verfahren, Höchsttemperatur und Abkühlung beim Flammrichten festgelegt und dokumentiert werden.</p>
<h2>Wie wird die Temperatur geprüft?</h2>
<p>Die Glühfarbe ist je nach Umgebungslicht ein ungenauer Indikator. Verwendet werden Temperaturmessstifte, Kontaktthermometer oder Infrarotmessung; bei Infrarot ist der Emissionsgrad richtig einzustellen.</p>
<h2>Abkühlung</h2>
<p>Baustähle kühlen in der Regel an Luft ab. Schnelles Abkühlen mit Wasser kann bei manchen Stählen harte, spröde Zonen erzeugen und wird nur angewandt, wenn die Spezifikation es zulässt; bei hochfesten Stählen wird es besonders vermieden.</p>
<h2>Edelstahl und Aluminium</h2>
<ul>
<li><strong>Austenitischer Edelstahl:</strong> hohe Wärmeausdehnung und geringe Leitfähigkeit sorgen für starke Reaktion. Längeres Verweilen bei etwa 450–850 °C kann Karbidausscheidung und geringere Korrosionsbeständigkeit verursachen; L-Güten bevorzugen und kurz wärmen. Anlauffarben anschließend entfernen.</li>
<li><strong>Aluminium:</strong> niedriger Schmelzpunkt und keine Glühfarbe, die Temperatur ist mit bloßem Auge nicht erkennbar. Bei aushärtbaren Legierungen kann Richten Festigkeit kosten; meist wird mechanisch gerichtet.</li>
</ul>
<h2>Erst vermeiden, dann korrigieren</h2>
<p>Flammrichten bedeutet Mehraufwand und Risiko. Verzug von Beginn an durch Vorbiegen, passende Schweißfolge, Vorrichtungen und ausgewogene Nahtanordnung zu begrenzen, ist oft wirtschaftlicher. Wird gerichtet, bestätigt eine anschließende Maßkontrolle die Einhaltung der Toleranz (z. B. Klassen nach <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>).</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Verzug begrenzen wir zuerst über Schweißfolge, Vorbiegen und Vorrichtungen. Ist Flammrichten nötig, halten und messen wir die Temperatur innerhalb der für die Stahlsorte zulässigen Grenze und dokumentieren die Maße nach dem Richten. <a href="../kaynakli-imalat.html">Schweißtechnische Fertigung →</a></p></div>
`,
    faq: [
      ['Was ist Flammrichten?', 'Ein Verfahren, bei dem ein Stahlbereich schnell erwärmt wird und die Schrumpfung beim Abkühlen das Teil zurückbiegt.'],
      ['Welche Temperatur beim Flammrichten?', 'Je nach Stahl. Bei warmgewalzten und normalisierten Baustählen meist eine Obergrenze um etwa 650 °C; bei thermomechanischen und vergüteten Stählen niedriger. Maßgebend sind Herstellerangabe und Spezifikation.'],
      ['Wird nach dem Richten mit Wasser gekühlt?', 'In der Regel nicht, sofern die Spezifikation es nicht erlaubt; Baustähle kühlen an Luft. Bei hochfesten Stählen wird Wasserkühlung besonders vermieden.'],
      ['Kann man Edelstahl flammrichten?', 'Ja, mit Vorsicht: kurz wärmen, L-Güten verwenden und Anlauffarben entfernen; langes Verweilen bei 450–850 °C kann die Korrosionsbeständigkeit senken.']
    ],
    cta_h3: 'Maßhaltig gelieferte Schweißteile',
    cta_p: 'Senden Sie Zeichnung und Toleranzen; wir bieten mit Verzugs- und Maßkontrollplan an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Enderezado a la llama: reglas para corregir la deformación de soldadura con calor',
    meta: 'Cómo funciona el enderezado a la llama: calentamientos por puntos, líneas y cuñas, límites de temperatura según el acero, medición de temperatura, enfriamiento, precauciones en inoxidable y aluminio y lo que exige la EN 1090-2.',
    og: 'Enderezado a la llama',
    tag: 'Producción · Deformación',
    h1: 'Enderezado a la llama: reglas para corregir la deformación de soldadura con calor',
    crumb: 'Enderezado a la llama',
    read: '6 min de lectura',
    body: `
<p>Ni la mejor secuencia de soldadura elimina por completo la deformación. Para una viga, un chasis o una chapa fuera de tolerancia, uno de los métodos de corrección más habituales es el <strong>enderezado a la llama</strong>. Bien hecho es rápido y eficaz; mal hecho puede dañar las propiedades mecánicas del material. Por eso es tanto un proceso controlado como una destreza manual.</p>
<h2>Cómo funciona</h2>
<p>Se calienta rápidamente una zona pequeña del acero. La zona quiere dilatarse, pero el material frío que la rodea lo impide, y queda “recalcada” de forma permanente (más corta y gruesa). Al enfriarse se contrae y curva la pieza hacia el lado calentado. Es decir, usa el mismo mecanismo que genera la deformación por soldadura, en sentido contrario y de forma controlada (ver <a href="kaynak-distorsiyonu.html">deformación por soldadura</a>).</p>
<h2>Patrones de calentamiento</h2>
<table class="data-table"><thead><tr><th>Patrón</th><th>Dónde se usa</th><th>Efecto</th></tr></thead><tbody>
<tr><td>Por puntos</td><td>Abombamientos y ondulaciones en chapa fina</td><td>Tensa la superficie por contracción local</td></tr>
<tr><td>Por líneas</td><td>Deformación angular de chapas, giro de alas</td><td>Corrección angular a lo largo de la línea</td></tr>
<tr><td>Por cuñas (triángulo)</td><td>Flechas y combas en vigas y perfiles</td><td>Curva hacia la base de la cuña</td></tr>
</tbody></table>
<p>En el calentamiento por cuña, el vértice del triángulo se sitúa en el eje neutro y la base en el borde que se quiere corregir; se calienta del vértice a la base. Alma y ala se calientan juntas para corregir toda la sección.</p>
<h2>Límites de temperatura</h2>
<p>La regla más importante es no superar la temperatura máxima, que depende del proceso de fabricación del acero:</p>
<ul>
<li><strong>Aceros laminados y normalizados (p. ej. S235, S355 +AR/+N):</strong> en general un límite superior de unos 650 °C; algunas fuentes admiten algo más durante poco tiempo.</li>
<li><strong>Aceros termomecánicos (M, ML):</strong> límites más bajos; la alta temperatura puede destruir la estructura de grano fino y la resistencia obtenida en la laminación.</li>
<li><strong>Aceros templados y revenidos (Q, QL):</strong> deben quedar por debajo de la temperatura de revenido, o perderán resistencia.</li>
</ul>
<p>Los valores exactos proceden de la recomendación del fabricante del acero y de la especificación (ver <a href="s355jr-s355j2-s355k2-s355nl-farki.html">calidades S355</a>). La EN 1090-2 exige definir y documentar el procedimiento de corrección a la llama, la temperatura máxima y el método de enfriamiento.</p>
<h2>¿Cómo se controla la temperatura?</h2>
<p>Estimarla por el color del acero tiene un gran margen de error según la luz ambiente. Se usan lápices termoindicadores, termómetros de contacto o medición infrarroja; en infrarrojo es importante ajustar la emisividad.</p>
<h2>Enfriamiento</h2>
<p>En aceros estructurales la pieza suele enfriarse al aire. El enfriamiento rápido con agua puede crear zonas duras y frágiles en algunos aceros, por lo que no se aplica salvo que la especificación lo permita, y se evita especialmente en aceros de alta resistencia.</p>
<h2>Inoxidable y aluminio</h2>
<ul>
<li><strong>Inoxidable austenítico:</strong> su alta dilatación y baja conductividad hacen que reaccione mucho. Pero permanecer entre unos 450–850 °C puede provocar precipitación de carburos y menor resistencia a la corrosión; se prefieren calidades L y calentamientos breves. Después hay que eliminar la coloración.</li>
<li><strong>Aluminio:</strong> bajo punto de fusión y sin cambio de color, así que la temperatura no se aprecia a simple vista. En aleaciones bonificables, enderezar puede reducir la resistencia; suele preferirse el enderezado mecánico.</li>
</ul>
<h2>Primero prevenir, luego corregir</h2>
<p>El enderezado a la llama supone mano de obra y riesgo adicionales. Reducir la deformación desde el principio con predeformación, una secuencia adecuada, utillajes y cordones equilibrados suele ser más económico. Cuando hay que enderezar, un control dimensional posterior confirma que se cumple la tolerancia (por ejemplo clases de <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>).</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> primero intentamos limitar la deformación con secuencia de soldadura, predeformación y utillajes. Cuando hace falta enderezar a la llama, mantenemos y medimos la temperatura dentro del límite del tipo de acero y registramos las medidas después. <a href="../kaynakli-imalat.html">Fabricación soldada →</a></p></div>
`,
    faq: [
      ['¿Qué es el enderezado a la llama?', 'Un método que corrige la deformación calentando rápidamente una zona del acero y aprovechando la contracción al enfriarse para devolver la pieza a su forma.'],
      ['¿A qué temperatura se endereza a la llama?', 'Depende del acero. En aceros estructurales laminados y normalizados, en general un límite de unos 650 °C; en termomecánicos y templados, más bajo. El valor exacto según fabricante y especificación.'],
      ['¿Se enfría con agua tras enderezar?', 'Normalmente no, salvo que la especificación lo permita; los aceros estructurales se enfrían al aire. En alta resistencia se evita especialmente.'],
      ['¿Se puede enderezar inoxidable a la llama?', 'Sí, con cuidado: calentamiento breve, calidades L y eliminación posterior de la coloración; permanecer mucho entre 450 y 850 °C puede reducir la resistencia a la corrosión.']
    ],
    cta_h3: 'Piezas soldadas entregadas a medida',
    cta_p: 'Envíenos plano y tolerancias; ofertamos con plan de control de deformación y medidas.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Dressage à la flamme : règles pour corriger les déformations de soudage par la chaleur',
    meta: 'Comment fonctionne le dressage à la flamme ? Chauffes par points, lignes et triangles, limites de température selon l’acier, mesure de température, refroidissement, précautions sur inox et aluminium et exigences de l’EN 1090-2.',
    og: 'Dressage à la flamme',
    tag: 'Production · Déformations',
    h1: 'Dressage à la flamme : règles pour corriger les déformations de soudage par la chaleur',
    crumb: 'Dressage à la flamme',
    read: '6 min de lecture',
    body: `
<p>Même la meilleure séquence de soudage n’élimine pas totalement les déformations. Pour une poutre, un châssis ou une tôle hors tolérance, l’une des méthodes de correction les plus courantes est le <strong>dressage à la flamme</strong>. Bien mené, il est rapide et efficace ; mal mené, il peut altérer les caractéristiques mécaniques. C’est donc autant un procédé maîtrisé qu’un savoir-faire manuel.</p>
<h2>Principe</h2>
<p>On chauffe rapidement une petite zone de l’acier. Elle veut se dilater, mais le métal froid qui l’entoure l’en empêche ; elle se trouve alors « refoulée » de façon permanente. En refroidissant, elle se rétracte et courbe la pièce vers le côté chauffé. Le dressage utilise donc le mécanisme même qui crée les déformations de soudage, en sens inverse et de façon contrôlée (voir <a href="kaynak-distorsiyonu.html">déformations de soudage</a>).</p>
<h2>Motifs de chauffe</h2>
<table class="data-table"><thead><tr><th>Motif</th><th>Utilisation</th><th>Effet</th></tr></thead><tbody>
<tr><td>Chauffe par points</td><td>Bombements et ondulations des tôles fines</td><td>Retend la surface par retrait local</td></tr>
<tr><td>Chauffe en ligne</td><td>Déformation angulaire des tôles, rotation des ailes</td><td>Correction angulaire le long de la ligne</td></tr>
<tr><td>Chauffe en triangle</td><td>Flèches et cintrages des poutres et profilés</td><td>Courbure vers la base du triangle</td></tr>
</tbody></table>
<p>En chauffe triangulaire, la pointe se place sur l’axe neutre et la base sur le bord à corriger ; on chauffe de la pointe vers la base. Âme et aile sont chauffées ensemble pour corriger toute la section.</p>
<h2>Limites de température</h2>
<p>La règle essentielle est de ne pas dépasser la température maximale, qui dépend du mode d’élaboration de l’acier :</p>
<ul>
<li><strong>Aciers bruts de laminage et normalisés (ex. S235, S355 +AR/+N) :</strong> limite supérieure généralement d’environ 650 °C ; certaines sources tolèrent un peu plus brièvement.</li>
<li><strong>Aciers thermomécaniques (M, ML) :</strong> limites plus basses ; une température élevée peut détruire la structure à grain fin et la résistance obtenues au laminage.</li>
<li><strong>Aciers trempés et revenus (Q, QL) :</strong> rester sous la température de revenu, sinon perte de résistance.</li>
</ul>
<p>Les valeurs exactes proviennent du producteur d’acier et de la spécification (voir <a href="s355jr-s355j2-s355k2-s355nl-farki.html">nuances S355</a>). L’EN 1090-2 exige que le mode opératoire de dressage à la flamme, la température maximale et le mode de refroidissement soient définis et documentés.</p>
<h2>Contrôle de la température</h2>
<p>Juger la température à la couleur de l’acier est très imprécis selon l’éclairage. On utilise des crayons thermosensibles, des thermomètres de contact ou la mesure infrarouge, en réglant correctement l’émissivité.</p>
<h2>Refroidissement</h2>
<p>Les aciers de construction refroidissent en général à l’air. Un refroidissement rapide à l’eau peut créer des zones dures et fragiles sur certains aciers ; il n’est appliqué que si la spécification l’autorise, et il est particulièrement évité sur les aciers à haute résistance.</p>
<h2>Inox et aluminium</h2>
<ul>
<li><strong>Inox austénitique :</strong> forte dilatation et faible conductivité, donc réaction marquée. Mais un séjour prolongé vers 450–850 °C peut provoquer une précipitation de carbures et une baisse de tenue à la corrosion ; on préfère les nuances L et des chauffes brèves, puis on élimine les colorations.</li>
<li><strong>Aluminium :</strong> point de fusion bas et pas de changement de couleur, la température ne se voit pas. Sur les alliages à durcissement structural, le dressage peut faire perdre de la résistance ; le dressage mécanique est souvent préféré.</li>
</ul>
<h2>Prévenir d’abord, corriger ensuite</h2>
<p>Le dressage à la flamme représente main-d’œuvre et risque supplémentaires. Limiter les déformations dès le départ par prédéformation, séquence adaptée, gabarits et soudures équilibrées est souvent plus économique. Quand un dressage est nécessaire, un contrôle dimensionnel ensuite confirme le respect de la tolérance (par exemple les classes de l’<a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>).</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous cherchons d’abord à limiter les déformations par la séquence de soudage, la prédéformation et les gabarits. Quand un dressage à la flamme s’impose, nous maintenons et mesurons la température dans la limite propre à l’acier et enregistrons les cotes après dressage. <a href="../kaynakli-imalat.html">Fabrication soudée →</a></p></div>
`,
    faq: [
      ['Qu’est-ce que le dressage à la flamme ?', 'Une méthode qui corrige les déformations en chauffant rapidement une zone de l’acier et en utilisant le retrait au refroidissement pour ramener la pièce.'],
      ['Quelle température pour le dressage à la flamme ?', 'Selon l’acier. Pour les aciers de construction bruts de laminage et normalisés, limite généralement d’environ 650 °C ; plus basse pour les thermomécaniques et trempés. Valeur exacte selon le producteur et la spécification.'],
      ['Refroidit-on à l’eau après dressage ?', 'En général non, sauf autorisation de la spécification ; les aciers de construction refroidissent à l’air. On l’évite particulièrement sur les aciers à haute résistance.'],
      ['Peut-on dresser l’inox à la flamme ?', 'Oui, avec précaution : chauffe brève, nuances L et élimination des colorations ; un séjour prolongé vers 450–850 °C peut réduire la tenue à la corrosion.']
    ],
    cta_h3: 'Des pièces soudées livrées à la cote',
    cta_p: 'Envoyez votre plan et vos tolérances ; nous chiffrons avec un plan de maîtrise des déformations et de contrôle dimensionnel.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Raddrizzatura a fiamma: regole per correggere le deformazioni di saldatura con il calore',
    meta: 'Come funziona la raddrizzatura a fiamma? Riscaldi a punti, a linee e a cuneo, limiti di temperatura per tipo di acciaio, misura della temperatura, raffreddamento, attenzioni su inox e alluminio e cosa richiede la EN 1090-2.',
    og: 'Raddrizzatura a fiamma',
    tag: 'Produzione · Deformazioni',
    h1: 'Raddrizzatura a fiamma: regole per correggere le deformazioni di saldatura con il calore',
    crumb: 'Raddrizzatura a fiamma',
    read: '6 min di lettura',
    body: `
<p>Nemmeno la migliore sequenza di saldatura elimina del tutto le deformazioni. Per una trave, un telaio o una lamiera fuori tolleranza, uno dei metodi di correzione più diffusi è la <strong>raddrizzatura a fiamma</strong>. Fatta bene è rapida ed efficace; fatta male può danneggiare le proprietà meccaniche. Per questo è un processo controllato tanto quanto un’abilità manuale.</p>
<h2>Come funziona</h2>
<p>Si riscalda rapidamente una piccola zona dell’acciaio. La zona vorrebbe dilatarsi ma il materiale freddo circostante lo impedisce, così viene “ricalcata” in modo permanente. Raffreddandosi ritira e piega il pezzo verso il lato riscaldato. La raddrizzatura usa quindi lo stesso meccanismo che crea la deformazione da saldatura, in senso opposto e in modo controllato (vedi <a href="kaynak-distorsiyonu.html">deformazioni da saldatura</a>).</p>
<h2>Schemi di riscaldo</h2>
<table class="data-table"><thead><tr><th>Schema</th><th>Dove si usa</th><th>Effetto</th></tr></thead><tbody>
<tr><td>A punti</td><td>Bombature e ondulazioni su lamiere sottili</td><td>Tende la superficie con ritiro locale</td></tr>
<tr><td>A linee</td><td>Deformazione angolare di lamiere, rotazione delle ali</td><td>Correzione angolare lungo la linea</td></tr>
<tr><td>A cuneo (triangolo)</td><td>Frecce e curvature di travi e profili</td><td>Piega verso la base del cuneo</td></tr>
</tbody></table>
<p>Nel riscaldo a cuneo il vertice del triangolo sta sull’asse neutro e la base sul bordo da correggere; si riscalda dal vertice verso la base. Anima e ala vengono riscaldate insieme per correggere l’intera sezione.</p>
<h2>Limiti di temperatura</h2>
<p>La regola principale è non superare la temperatura massima, che dipende dal processo produttivo dell’acciaio:</p>
<ul>
<li><strong>Acciai laminati e normalizzati (es. S235, S355 +AR/+N):</strong> di solito un limite superiore intorno a 650 °C; alcune fonti ammettono qualcosa in più per brevi periodi.</li>
<li><strong>Acciai termomeccanici (M, ML):</strong> limiti più bassi; l’alta temperatura può distruggere la struttura a grano fine e la resistenza ottenute in laminazione.</li>
<li><strong>Acciai bonificati (Q, QL):</strong> restare sotto la temperatura di rinvenimento, altrimenti si perde resistenza.</li>
</ul>
<p>I valori esatti vengono dalle indicazioni del produttore dell’acciaio e dalla specifica (vedi <a href="s355jr-s355j2-s355k2-s355nl-farki.html">qualità S355</a>). La EN 1090-2 richiede che procedura di raddrizzatura a fiamma, temperatura massima e modalità di raffreddamento siano definite e documentate.</p>
<h2>Come si controlla la temperatura?</h2>
<p>Stimarla dal colore dell’acciaio comporta grandi errori secondo la luce ambiente. Si usano gessetti termoindicatori, termometri a contatto o misura a infrarossi, impostando correttamente l’emissività.</p>
<h2>Raffreddamento</h2>
<p>Negli acciai da costruzione il pezzo si lascia di solito raffreddare in aria. Il raffreddamento rapido in acqua può creare zone dure e fragili su alcuni acciai; si applica solo se la specifica lo consente ed è da evitare soprattutto sugli acciai ad alta resistenza.</p>
<h2>Inox e alluminio</h2>
<ul>
<li><strong>Inox austenitico:</strong> alta dilatazione e bassa conducibilità lo rendono molto reattivo. Ma sostare a lungo tra circa 450 e 850 °C può causare precipitazione di carburi e minore resistenza alla corrosione; si preferiscono qualità L e riscaldi brevi, poi si rimuovono le colorazioni.</li>
<li><strong>Alluminio:</strong> basso punto di fusione e nessun cambio di colore, la temperatura non si vede a occhio. Sulle leghe da trattamento termico la raddrizzatura può ridurre la resistenza; si preferisce di solito la raddrizzatura meccanica.</li>
</ul>
<h2>Prima prevenire, poi correggere</h2>
<p>La raddrizzatura a fiamma comporta lavoro e rischio aggiuntivi. Ridurre le deformazioni fin dall’inizio con presetting, sequenza adeguata, maschere e cordoni bilanciati è spesso più economico. Quando serve raddrizzare, un controllo dimensionale successivo conferma il rispetto della tolleranza (per esempio classi <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>).</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> cerchiamo prima di limitare le deformazioni con sequenza di saldatura, presetting e maschere. Quando serve la raddrizzatura a fiamma, manteniamo e misuriamo la temperatura entro il limite del tipo di acciaio e registriamo le quote dopo la raddrizzatura. <a href="../kaynakli-imalat.html">Carpenteria saldata →</a></p></div>
`,
    faq: [
      ['Cos’è la raddrizzatura a fiamma?', 'Un metodo che corregge le deformazioni riscaldando rapidamente una zona dell’acciaio e sfruttando il ritiro al raffreddamento per riportare il pezzo in forma.'],
      ['A che temperatura si raddrizza a fiamma?', 'Dipende dall’acciaio. Per acciai da costruzione laminati e normalizzati, di solito un limite intorno a 650 °C; per termomeccanici e bonificati più basso. Il valore esatto secondo produttore e specifica.'],
      ['Si raffredda in acqua dopo la raddrizzatura?', 'Di norma no, salvo che la specifica lo consenta; gli acciai da costruzione si raffreddano in aria. Sugli alta resistenza si evita in particolare.'],
      ['Si può raddrizzare l’inox a fiamma?', 'Sì, con attenzione: riscaldi brevi, qualità L e rimozione delle colorazioni; sostare a lungo tra 450 e 850 °C può ridurre la resistenza alla corrosione.']
    ],
    cta_h3: 'Pezzi saldati consegnati a quota',
    cta_p: 'Inviateci disegno e tolleranze; quotiamo con piano di controllo delle deformazioni e delle quote.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Vlamrichten: regels voor het corrigeren van lasvervorming met warmte',
    meta: 'Hoe werkt vlamrichten? Punt-, lijn- en wigverwarming, temperatuurgrenzen per staalsoort, temperatuurmeting, afkoeling, aandachtspunten bij RVS en aluminium en wat EN 1090-2 eist voor richten.',
    og: 'Vlamrichten',
    tag: 'Productie · Vervorming',
    h1: 'Vlamrichten: regels voor het corrigeren van lasvervorming met warmte',
    crumb: 'Vlamrichten',
    read: '6 min lezen',
    body: `
<p>Zelfs de best geplande lasvolgorde voorkomt vervorming niet helemaal. Voor een ligger, chassis of plaat buiten tolerantie is <strong>vlamrichten</strong> een van de meest gebruikte correctiemethoden. Goed uitgevoerd is het snel en effectief; verkeerd uitgevoerd kan het de mechanische eigenschappen schaden. Vlamrichten is daarom evenzeer een beheerst proces als een vakvaardigheid.</p>
<h2>Werking</h2>
<p>Een klein deel van het staal wordt snel verwarmd. Het wil uitzetten, maar het koude materiaal eromheen verhindert dat, waardoor het gebied blijvend wordt “gestuikt”. Bij afkoelen krimpt het en buigt het onderdeel naar de verwarmde kant. Vlamrichten gebruikt dus hetzelfde mechanisme dat lasvervorming veroorzaakt, beheerst en in tegengestelde richting (zie <a href="kaynak-distorsiyonu.html">lasvervorming</a>).</p>
<h2>Verwarmingspatronen</h2>
<table class="data-table"><thead><tr><th>Patroon</th><th>Toepassing</th><th>Effect</th></tr></thead><tbody>
<tr><td>Puntverwarming</td><td>Bolling en golving bij dunne plaat</td><td>Spant het vlak door lokale krimp</td></tr>
<tr><td>Lijnverwarming</td><td>Hoekvervorming van platen, flensverdraaiing</td><td>Hoekcorrectie langs de verwarmde lijn</td></tr>
<tr><td>Wigverwarming</td><td>Zeeg en kromming van liggers en profielen</td><td>Buigt naar de basis van de wig</td></tr>
</tbody></table>
<p>Bij wigverwarming ligt de punt van de driehoek op de neutrale lijn en de basis aan de te corrigeren rand; er wordt van punt naar basis verwarmd. Lijf en flens worden samen verwarmd om de hele doorsnede te richten.</p>
<h2>Temperatuurgrenzen</h2>
<p>De belangrijkste regel is de maximumtemperatuur niet te overschrijden. Die hangt af van de productiewijze van het staal:</p>
<ul>
<li><strong>Gewalste en genormaliseerde staalsoorten (bijv. S235, S355 +AR/+N):</strong> meestal een bovengrens rond ongeveer 650 °C; sommige bronnen staan kortstondig iets meer toe.</li>
<li><strong>Thermomechanisch gewalste staalsoorten (M, ML):</strong> lagere grenzen; hoge temperatuur kan de fijnkorrelige structuur en de gewalste sterkte tenietdoen.</li>
<li><strong>Veredelde staalsoorten (Q, QL):</strong> onder de ontlaattemperatuur blijven, anders gaat sterkte verloren.</li>
</ul>
<p>Exacte waarden komen van de staalproducent en uit de specificatie (zie <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355-kwaliteiten</a>). EN 1090-2 eist dat de procedure voor vlamrichten, de maximumtemperatuur en de afkoelmethode zijn vastgelegd en gedocumenteerd.</p>
<h2>Hoe wordt de temperatuur gecontroleerd?</h2>
<p>De gloeikleur is afhankelijk van het omgevingslicht en dus onnauwkeurig. Gebruikt worden temperatuurkrijt, contactthermometers of infraroodmeting; bij infrarood moet de emissiviteit juist zijn ingesteld.</p>
<h2>Afkoeling</h2>
<p>Constructiestaal koelt doorgaans af aan de lucht. Snel afkoelen met water kan bij sommige staalsoorten harde, brosse zones geven en wordt alleen toegepast als de specificatie het toestaat; bij hogesterktestaal wordt het in het bijzonder vermeden.</p>
<h2>RVS en aluminium</h2>
<ul>
<li><strong>Austenitisch RVS:</strong> door hoge uitzetting en lage geleidbaarheid reageert het sterk. Lang verblijven tussen ongeveer 450 en 850 °C kan carbideprecipitatie en lagere corrosiebestendigheid veroorzaken; L-kwaliteiten en korte verwarming verdienen de voorkeur. Aanloopkleuren daarna verwijderen.</li>
<li><strong>Aluminium:</strong> laag smeltpunt en geen kleurverandering, de temperatuur is met het oog niet te zien. Bij precipitatiehardende legeringen kan richten sterkte kosten; mechanisch richten heeft meestal de voorkeur.</li>
</ul>
<h2>Eerst voorkomen, dan corrigeren</h2>
<p>Vlamrichten betekent extra arbeid en risico. Vervorming vanaf het begin beperken met voorinstellen, een passende lasvolgorde, mallen en evenwichtig geplaatste lassen is vaak voordeliger. Wordt er toch gericht, dan bevestigt een maatcontrole daarna dat de tolerantie is gehaald (bijvoorbeeld klassen uit <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>).</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> we beperken vervorming eerst met lasvolgorde, voorinstellen en mallen. Is vlamrichten nodig, dan houden en meten we de temperatuur binnen de grens voor de staalsoort en leggen we de maten na het richten vast. <a href="../kaynakli-imalat.html">Gelaste constructies →</a></p></div>
`,
    faq: [
      ['Wat is vlamrichten?', 'Een methode die vervorming corrigeert door een deel van het staal snel te verwarmen en de krimp bij afkoelen te gebruiken om het onderdeel terug te buigen.'],
      ['Welke temperatuur bij vlamrichten?', 'Afhankelijk van het staal. Bij gewalst en genormaliseerd constructiestaal meestal een bovengrens rond 650 °C; bij thermomechanisch en veredeld staal lager. De exacte waarde volgens producent en specificatie.'],
      ['Wordt na het richten met water gekoeld?', 'Meestal niet, tenzij de specificatie het toestaat; constructiestaal koelt aan de lucht. Bij hogesterktestaal wordt het in het bijzonder vermeden.'],
      ['Kan RVS met de vlam gericht worden?', 'Ja, met zorg: kort verwarmen, L-kwaliteiten en aanloopkleuren verwijderen; lang verblijven tussen 450 en 850 °C kan de corrosiebestendigheid verlagen.']
    ],
    cta_h3: 'Gelaste delen op maat geleverd',
    cta_p: 'Stuur tekening en toleranties; we offreren met een plan voor vervormingsbeheersing en maatcontrole.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Flammeretting: regler for å rette sveisedeformasjon med varme',
    meta: 'Hvordan fungerer flammeretting? Punkt-, linje- og kilevarming, temperaturgrenser etter ståltype, temperaturmåling, avkjøling, forsiktighet med rustfritt og aluminium og hva EN 1090-2 krever ved retting.',
    og: 'Flammeretting',
    tag: 'Produksjon · Deformasjon',
    h1: 'Flammeretting: regler for å rette sveisedeformasjon med varme',
    crumb: 'Flammeretting',
    read: '6 min lesing',
    body: `
<p>Selv den best planlagte sveiserekkefølgen fjerner ikke deformasjon helt. For en bjelke, et chassis eller en plate utenfor toleranse er <strong>flammeretting</strong> en av de vanligste korreksjonsmetodene. Gjort riktig er den rask og effektiv; gjort feil kan den skade materialets mekaniske egenskaper. Flammeretting er derfor like mye en kontrollert prosess som en håndverksferdighet.</p>
<h2>Slik fungerer det</h2>
<p>Et lite område av stålet varmes raskt. Området vil utvide seg, men det kalde materialet rundt hindrer det, så området blir varig “stuket”. Ved avkjøling krymper det og bøyer delen mot den oppvarmede siden. Flammeretting bruker altså samme mekanisme som gir sveisedeformasjon, kontrollert og i motsatt retning (se <a href="kaynak-distorsiyonu.html">sveisedeformasjon</a>).</p>
<h2>Varmemønstre</h2>
<table class="data-table"><thead><tr><th>Mønster</th><th>Bruk</th><th>Effekt</th></tr></thead><tbody>
<tr><td>Punktvarming</td><td>Buler og bølger i tynnplate</td><td>Strammer flaten ved lokal krymping</td></tr>
<tr><td>Linjevarming</td><td>Vinkeldeformasjon i plater, flensvridning</td><td>Vinkelkorreksjon langs linjen</td></tr>
<tr><td>Kilevarming</td><td>Krumning og pilhøyde i bjelker og profiler</td><td>Bøyer mot kilens basis</td></tr>
</tbody></table>
<p>Ved kilevarming ligger trekantens spiss ved nøytralaksen og basisen ved kanten som skal rettes; det varmes fra spiss mot basis. Steg og flens varmes sammen for å rette hele tverrsnittet.</p>
<h2>Temperaturgrenser</h2>
<p>Den viktigste regelen er å ikke overskride maksimumstemperaturen. Den avhenger av hvordan stålet er produsert:</p>
<ul>
<li><strong>Valsede og normaliserte stål (f.eks. S235, S355 +AR/+N):</strong> vanligvis en øvre grense rundt ca. 650 °C; noen kilder tillater litt mer i kort tid.</li>
<li><strong>Termomekanisk valsede stål (M, ML):</strong> lavere grenser; høy temperatur kan ødelegge den finkornede strukturen og styrken fra valsingen.</li>
<li><strong>Seigherdede stål (Q, QL):</strong> holdes under anløpstemperaturen, ellers tapes styrke.</li>
</ul>
<p>Eksakte verdier kommer fra stålprodusentens anbefaling og spesifikasjonen (se <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355-kvaliteter</a>). EN 1090-2 krever at prosedyren for flammeretting, maksimumstemperaturen og avkjølingsmetoden er definert og dokumentert.</p>
<h2>Hvordan kontrolleres temperaturen?</h2>
<p>Å bedømme temperaturen etter stålets farge gir stor feil avhengig av lyset. Det brukes temperaturkritt, kontakttermometer eller infrarød måling; ved infrarød må emissiviteten stilles riktig.</p>
<h2>Avkjøling</h2>
<p>Konstruksjonsstål avkjøles vanligvis i luft. Rask vannkjøling kan gi harde, sprø soner i noen stål og brukes bare hvis spesifikasjonen tillater det; på høyfast stål unngås det spesielt.</p>
<h2>Rustfritt og aluminium</h2>
<ul>
<li><strong>Austenittisk rustfritt:</strong> høy varmeutvidelse og lav ledningsevne gjør at det reagerer kraftig. Men lang tid ved ca. 450–850 °C kan gi karbidutskillelse og lavere korrosjonsbestandighet; L-kvaliteter og kort oppvarming foretrekkes. Anløpsfarger fjernes etterpå.</li>
<li><strong>Aluminium:</strong> lavt smeltepunkt og ingen fargeendring, så temperaturen kan ikke bedømmes med øyet. På herdbare legeringer kan retting gi styrketap; mekanisk retting foretrekkes vanligvis.</li>
</ul>
<h2>Forebygg først, rett etterpå</h2>
<p>Flammeretting betyr ekstra arbeid og risiko. Å begrense deformasjon fra start med forhåndsvinkling, riktig sveiserekkefølge, jigger og balansert sveiseplassering er ofte mer økonomisk. Når retting trengs, bekrefter en målkontroll etterpå at resultatet er innenfor toleransen (f.eks. klasser i <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>).</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> vi forsøker først å begrense deformasjon med sveiserekkefølge, forhåndsvinkling og jigger. Når flammeretting trengs, holder og måler vi temperaturen innenfor grensen for ståltypen og registrerer målene etter rettingen. <a href="../kaynakli-imalat.html">Sveiset tilvirkning →</a></p></div>
`,
    faq: [
      ['Hva er flammeretting?', 'En metode som retter deformasjon ved å varme et område av stålet raskt og bruke krympingen ved avkjøling til å bøye delen tilbake.'],
      ['Hvilken temperatur ved flammeretting?', 'Det avhenger av stålet. For valsede og normaliserte konstruksjonsstål vanligvis en grense rundt 650 °C; for termomekaniske og seigherdede lavere. Eksakt verdi etter produsent og spesifikasjon.'],
      ['Kjøles delen med vann etter retting?', 'Vanligvis ikke, med mindre spesifikasjonen tillater det; konstruksjonsstål kjøles i luft. På høyfast stål unngås vannkjøling spesielt.'],
      ['Kan rustfritt flammerettes?', 'Ja, med forsiktighet: kort oppvarming, L-kvaliteter og fjerning av anløpsfarger; lang tid ved 450–850 °C kan redusere korrosjonsbestandigheten.']
    ],
    cta_h3: 'Sveiste deler levert på mål',
    cta_p: 'Send tegning og toleranser; vi gir tilbud med plan for deformasjonskontroll og målkontroll.',
    cta_btn: 'Be om tilbud →'
  }
};
