export default {
  order: 33,
  slug: 'kaynak-fiksturu-tasarimi-seri-uretim',
  key: 'p33_fixture',
  date: '2026-11-16',
  keywords: 'kaynak fikstürü, kaynak aparatı, fikstür tasarımı, 3-2-1 prensibi, modüler kaynak masası, seri kaynaklı üretim, kaynak kalıbı, welding fixture, Schweißvorrichtung, gabarit de soudage',
  related: ['kaynak-distorsiyonu', 'iso-13920-kaynakli-imalat-tolerans-tablosu', 'ilk-parca-onayi-kaynakli-imalat', 'boyutsal-tolerans'],
  tr: {
    title: 'Kaynak Fikstürü: Seri Üretimde Tekrarlanabilir Ölçü İçin Tasarım İlkeleri',
    meta: 'Kaynak fikstürü ne işe yarar, ne zaman kendini amorti eder? 3-2-1 konumlandırma ilkesi, pim ve dayamalar, bağlama elemanları, modüler kaynak masası, çarpılma payı ve fikstürün ilk parça onayıyla doğrulanması.',
    og: 'Kaynak Fikstürü Tasarımı',
    tag: 'Üretim · Fikstür',
    h1: 'Kaynak Fikstürü: Seri Üretimde Tekrarlanabilir Ölçü İçin Tasarım İlkeleri',
    crumb: 'Kaynak Fikstürü',
    read: '6 dk okuma',
    body: `
<p>Kaynak fikstürü, parçaları kaynak öncesinde ve sırasında doğru konumda tutan aparattır. Tek bir parça için ölçü alarak, gönye ve mengeneyle çalışmak mümkündür; ancak aynı parça onlarca veya yüzlerce kez üretilecekse, ölçünün her seferinde aynı çıkması ancak iyi bir fikstürle sağlanır. Fikstür; ölçü tekrarlanabilirliği, hız ve çarpılma kontrolü için en etkili araçlardan biridir.</p>
<h2>Fikstür Ne Zaman Kendini Amorti Eder?</h2>
<ul>
<li><strong>Adet:</strong> Tekrarlayan siparişlerde ve seri işlerde.</li>
<li><strong>Tolerans:</strong> Delik ekseni, bağlantı noktası veya montaj yüzeyi gibi kritik ölçüler sıkı olduğunda.</li>
<li><strong>Karmaşıklık:</strong> Çok sayıda parçanın birbirine göre konumlandığı montajlarda.</li>
<li><strong>Sonraki işlem:</strong> Talaşlı işleme veya montajın kaynaklı parçanın ölçüsüne bağlı olduğu durumlarda.</li>
</ul>
<p>Basit bir hesap fikir verir: fikstür, parça başına 6 dakika ölçü ve hizalama süresi kazandırıyorsa, 500 adetlik bir işte bu yaklaşık 50 saat demektir. Fikstür maliyeti bu kazançla ve hurda riskinin azalmasıyla birlikte değerlendirilir.</p>
<h2>Temel İlke: 3-2-1 Konumlandırma</h2>
<p>Bir parçanın uzaydaki konumu altı serbestlik derecesiyle tanımlanır. 3-2-1 ilkesinde parça; birinci referans yüzeyinde üç noktaya, ikinci yüzeyde iki noktaya ve üçüncü yüzeyde bir noktaya dayanır. Böylece parça fazla sınırlanmadan tam olarak konumlanır. Referans noktaları mümkün olduğunca teknik resimdeki referans (datum) yüzeyleriyle aynı seçilir; böylece fikstürde tutulan ölçü, çizimde ölçülen ölçüyle örtüşür.</p>
<h2>Fikstür Elemanları</h2>
<ul>
<li><strong>Dayamalar ve pimler:</strong> Konumu belirler. Delikli parçalarda bir silindirik ve bir elmas (yassı) pim kombinasyonu, aşırı sınırlamayı önler.</li>
<li><strong>Bağlama elemanları:</strong> Mafsallı (toggle) bağlayıcılar, vidalı baskılar veya pnömatik bağlayıcılar parçayı dayamalara bastırır. Bağlama kuvveti, parçayı deforme etmeyecek şekilde dayamaların üzerine gelmelidir.</li>
<li><strong>Taban:</strong> Rijit bir çelik konstrüksiyon veya delikli modüler kaynak masası.</li>
<li><strong>Bakır veya seramik altlıklar:</strong> Kök tarafında destek ve şekil için.</li>
<li><strong>Topraklama:</strong> Kaynak akımının bağlayıcılardan ve pimlerden geçmesini önlemek için tanımlı bir şase bağlantısı.</li>
</ul>
<h2>Modüler Kaynak Masaları</h2>
<p>Delikli modüler masalar, gönye, dayama ve bağlayıcıların sistem deliklerine takılmasıyla hızlıca fikstür kurmayı sağlar. Prototip ve küçük seriler için özel fikstür yapmadan tekrarlanabilir bir kurulum elde edilir; kurulum fotoğraflanıp kayıt altına alınırsa bir sonraki siparişte aynı düzen yeniden kurulabilir. Büyük serilerde ise genellikle parçaya özel fikstür daha hızlıdır.</p>
<h2>Kaynak Fikstürüne Özgü Tasarım Noktaları</h2>
<ul>
<li><strong>Çekme payı:</strong> Kaynak soğurken çeker. Fikstür, parçayı nominal ölçüde değil, gerektiğinde ters açı veya ön gerdirmeyle kaynak sonrası nominal ölçüye gelecek şekilde tutabilir. Bu değerler ilk parçalarda ölçülerek belirlenir (bkz. <a href="kaynak-distorsiyonu.html">kaynak distorsiyonu</a>).</li>
<li><strong>Erişim:</strong> Torç, tüm dikişlere doğru açıyla ulaşabilmelidir. Fikstür elemanları dikiş bölgesini kapatmamalıdır.</li>
<li><strong>Sıçrantı ve ısı:</strong> Pim ve dayamalar sıçrantıdan korunmalı veya kolay temizlenebilir olmalıdır; dikişe yakın elemanlar ısıyla genleşmeyi hesaba katmalıdır.</li>
<li><strong>Parçanın çıkarılması:</strong> Kaynaktan sonra çeken parça pimlere sıkışabilir. Sökülebilir pimler veya yeterli boşluk önceden düşünülmelidir.</li>
<li><strong>Puntala ve çıkar mı, tamamen fikstürde mi?</strong> Bazı işlerde parça fikstürde puntalanır ve kaynak ayrı pozisyonlayıcıda tamamlanır; bazılarında ise tüm kaynak fikstürde yapılır. Seçim, çarpılma ve erişime göre yapılır.</li>
</ul>
<h2>Fikstürün Doğrulanması</h2>
<p>Yeni bir fikstürün ürettiği ilk parçalar tam ölçüyle kontrol edilir; sonuçlar, istenen toleransla (örneğin <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> sınıfları veya çizim toleransları) karşılaştırılır. Fikstür, bu ilk parça onayıyla “hazır” kabul edilir (bkz. <a href="ilk-parca-onayi-kaynakli-imalat.html">ilk parça onayı</a>). Seri boyunca belirli aralıklarla kontrol ölçüleri alınır; aşınan pim ve dayamalar yenilenir.</p>
<h2>Fikstür Kimin Malıdır?</h2>
<p>Parçaya özel fikstürlerde maliyet ve mülkiyet, teklif ve sözleşmede açıkça belirtilmelidir: fikstür bedeli ayrı bir kalem olarak mı gösterilecek, parça fiyatına mı dağıtılacak, sipariş bittiğinde fikstür kimde kalacak ve ne süre saklanacak? Bu sorular baştan konuşulursa sonraki siparişlerde sürpriz yaşanmaz.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Seri ve tekrarlayan işlerde fikstür ihtiyacını teklif aşamasında değerlendirir, fikstür bedelini ve mülkiyetini teklifte açıkça gösteririz. Yeni bir kurulumun ilk parçaları ölçülerek kayda alınır. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['Kaynak fikstürü nedir?', 'Parçaları kaynak öncesinde ve sırasında doğru konumda tutan aparattır. Seri üretimde ölçünün her parçada aynı çıkmasını, işin hızlanmasını ve çarpılmanın kontrolünü sağlar.'],
      ['3-2-1 prensibi nedir?', 'Parçanın birinci yüzeyde üç, ikinci yüzeyde iki ve üçüncü yüzeyde bir noktaya dayanarak altı serbestlik derecesinin tam ve fazla sınırlamadan belirlenmesidir.'],
      ['Fikstür ne zaman gerekir?', 'Tekrarlayan ve seri işlerde, sıkı toleranslı kritik ölçülerde ve çok parçalı montajlarda fikstür genellikle kendini amorti eder.'],
      ['Fikstür bedeli nasıl fiyatlanır?', 'Ayrı bir kalem olarak veya parça fiyatına dağıtılarak. Mülkiyet ve saklama süresi teklifte açıkça belirtilmelidir.']
    ],
    cta_h3: 'Seri işte her parça aynı ölçüde',
    cta_p: 'Çizim ve yıllık adet bilginizi gönderin; fikstür ihtiyacıyla birlikte teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Welding Fixtures: Design Principles for Repeatable Dimensions in Series Production',
    meta: 'What does a welding fixture do and when does it pay off? The 3-2-1 locating principle, pins and stops, clamps, modular welding tables, shrinkage allowance and verifying the fixture through first article inspection.',
    og: 'Welding Fixture Design',
    tag: 'Production · Fixtures',
    h1: 'Welding Fixtures: Design Principles for Repeatable Dimensions in Series Production',
    crumb: 'Welding Fixtures',
    read: '6 min read',
    body: `
<p>A welding fixture holds parts in the right position before and during welding. For a single part you can work with measurements, squares and clamps; but when the same part is made dozens or hundreds of times, only a good fixture ensures the dimensions come out the same every time. A fixture is one of the most effective tools for repeatability, speed and distortion control.</p>
<h2>When Does a Fixture Pay Off?</h2>
<ul>
<li><strong>Quantity:</strong> repeat orders and series work.</li>
<li><strong>Tolerance:</strong> when critical dimensions such as hole axes, connection points or mounting faces are tight.</li>
<li><strong>Complexity:</strong> assemblies where many parts are positioned relative to each other.</li>
<li><strong>Downstream operations:</strong> when machining or assembly depends on the welded part’s dimensions.</li>
</ul>
<p>A simple calculation gives an idea: if a fixture saves 6 minutes of measuring and aligning per part, on a 500-piece job that is about 50 hours. Fixture cost is weighed against this gain and the reduced scrap risk.</p>
<h2>The Basic Principle: 3-2-1 Locating</h2>
<p>A part’s position in space is defined by six degrees of freedom. In the 3-2-1 principle the part rests on three points on the primary reference surface, two on the secondary and one on the tertiary. The part is fully located without being over-constrained. Reference points are chosen to match the datum surfaces on the drawing as far as possible, so that what the fixture holds matches what the drawing measures.</p>
<h2>Fixture Elements</h2>
<ul>
<li><strong>Stops and pins:</strong> define the position. For parts with holes, one round and one diamond (relieved) pin prevent over-constraint.</li>
<li><strong>Clamps:</strong> toggle clamps, screw clamps or pneumatic clamps press the part against the stops. Clamping force should act over the stops so it does not deform the part.</li>
<li><strong>Base:</strong> a rigid steel frame or a modular welding table with a hole pattern.</li>
<li><strong>Copper or ceramic backing:</strong> to support and shape the root.</li>
<li><strong>Earthing:</strong> a defined earth connection so welding current does not pass through clamps and pins.</li>
</ul>
<h2>Modular Welding Tables</h2>
<p>Modular tables with a hole grid let you build a fixture quickly by inserting squares, stops and clamps into the system holes. Prototypes and small series get a repeatable set-up without a dedicated fixture; if the set-up is photographed and recorded, it can be rebuilt for the next order. For large series a dedicated fixture is usually faster.</p>
<h2>Design Points Specific to Welding Fixtures</h2>
<ul>
<li><strong>Shrinkage allowance:</strong> welds shrink as they cool. The fixture can hold the part not at nominal but with a counter-angle or preset so that it reaches nominal after welding. These values are set by measuring the first parts (see <a href="kaynak-distorsiyonu.html">weld distortion</a>).</li>
<li><strong>Access:</strong> the torch must reach every weld at the right angle; fixture elements must not cover the weld zone.</li>
<li><strong>Spatter and heat:</strong> pins and stops must be protected from spatter or easy to clean; elements near the weld must allow for thermal expansion.</li>
<li><strong>Part removal:</strong> after welding, the shrinking part can lock onto pins. Removable pins or enough clearance must be planned.</li>
<li><strong>Tack and remove, or weld fully in the fixture?</strong> In some jobs the part is tacked in the fixture and welding is completed on a positioner; in others all welding is done in the fixture. The choice depends on distortion and access.</li>
</ul>
<h2>Verifying the Fixture</h2>
<p>The first parts from a new fixture are fully measured and compared with the required tolerance (for example <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> classes or drawing tolerances). The fixture is considered ready once this first article is approved (see <a href="ilk-parca-onayi-kaynakli-imalat.html">first article inspection</a>). During the series, check measurements are taken at intervals and worn pins and stops are replaced.</p>
<h2>Who Owns the Fixture?</h2>
<p>For part-specific fixtures, cost and ownership should be clearly stated in the quotation and contract: is the fixture shown as a separate item or spread over the part price, who keeps it when the order ends, and for how long is it stored? Agreeing this up front avoids surprises on later orders.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> on series and repeat work we assess the need for a fixture at quotation and show its cost and ownership clearly in the offer. The first parts from a new set-up are measured and recorded. <a href="../cizime-gore-imalat.html">Build-to-print manufacturing →</a></p></div>
`,
    faq: [
      ['What is a welding fixture?', 'A device that holds parts in the right position before and during welding. In series production it makes dimensions repeatable, speeds up work and helps control distortion.'],
      ['What is the 3-2-1 principle?', 'Locating a part on three points on the first surface, two on the second and one on the third, fully defining the six degrees of freedom without over-constraint.'],
      ['When is a fixture needed?', 'Fixtures usually pay off on repeat and series work, on tight critical dimensions and on multi-part assemblies.'],
      ['How is a fixture priced?', 'As a separate item or spread over the part price. Ownership and storage period should be stated clearly in the quotation.']
    ],
    cta_h3: 'Every part the same in series work',
    cta_p: 'Send your drawing and annual quantity; we will quote including the fixture requirement.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Schweißvorrichtungen: Konstruktionsprinzipien für wiederholgenaue Maße in der Serie',
    meta: 'Wozu dient eine Schweißvorrichtung und wann rechnet sie sich? 3-2-1-Prinzip, Bolzen und Anschläge, Spanner, modulare Schweißtische, Schrumpfvorhalt und Freigabe der Vorrichtung über die Erstmusterprüfung.',
    og: 'Schweißvorrichtungen konstruieren',
    tag: 'Fertigung · Vorrichtungen',
    h1: 'Schweißvorrichtungen: Konstruktionsprinzipien für wiederholgenaue Maße in der Serie',
    crumb: 'Schweißvorrichtungen',
    read: '6 Min. Lesezeit',
    body: `
<p>Eine Schweißvorrichtung hält die Teile vor und während des Schweißens in der richtigen Lage. Bei einem Einzelteil kann man mit Maßband, Winkel und Zwingen arbeiten; wird dasselbe Teil aber dutzend- oder hundertfach gefertigt, sorgt nur eine gute Vorrichtung dafür, dass die Maße jedes Mal gleich ausfallen. Die Vorrichtung ist eines der wirksamsten Mittel für Wiederholgenauigkeit, Tempo und Verzugskontrolle.</p>
<h2>Wann rechnet sich eine Vorrichtung?</h2>
<ul>
<li><strong>Stückzahl:</strong> Wiederholaufträge und Serien.</li>
<li><strong>Toleranz:</strong> wenn kritische Maße wie Bohrungsachsen, Anschlusspunkte oder Montageflächen eng toleriert sind.</li>
<li><strong>Komplexität:</strong> Baugruppen mit vielen zueinander positionierten Teilen.</li>
<li><strong>Folgeprozesse:</strong> wenn Bearbeitung oder Montage von den Maßen des Schweißteils abhängen.</li>
</ul>
<p>Eine einfache Rechnung: Spart die Vorrichtung je Teil 6 Minuten Messen und Ausrichten, sind das bei 500 Stück rund 50 Stunden. Die Vorrichtungskosten werden gegen diesen Gewinn und das geringere Ausschussrisiko abgewogen.</p>
<h2>Grundprinzip: 3-2-1-Lagebestimmung</h2>
<p>Die Lage eines Teils im Raum ist durch sechs Freiheitsgrade bestimmt. Nach dem 3-2-1-Prinzip liegt das Teil an drei Punkten der Hauptbezugsfläche, zwei Punkten der zweiten und einem Punkt der dritten Fläche an. So ist es vollständig bestimmt, ohne überbestimmt zu sein. Die Bezugspunkte werden möglichst identisch mit den Bezügen der Zeichnung gewählt, damit das in der Vorrichtung gehaltene Maß dem gemessenen Zeichnungsmaß entspricht.</p>
<h2>Elemente einer Vorrichtung</h2>
<ul>
<li><strong>Anschläge und Bolzen:</strong> bestimmen die Lage. Bei Teilen mit Bohrungen verhindert die Kombination aus Rund- und Rautenbolzen eine Überbestimmung.</li>
<li><strong>Spanner:</strong> Kniehebel-, Schraub- oder Pneumatikspanner drücken das Teil an die Anschläge. Die Spannkraft soll über den Anschlägen wirken, damit das Teil nicht verformt wird.</li>
<li><strong>Grundkörper:</strong> ein steifer Stahlrahmen oder ein modularer Schweißtisch mit Lochraster.</li>
<li><strong>Kupfer- oder Keramikunterlagen:</strong> zur Stützung und Formung der Wurzel.</li>
<li><strong>Masseanschluss:</strong> definierte Masse, damit der Schweißstrom nicht über Spanner und Bolzen fließt.</li>
</ul>
<h2>Modulare Schweißtische</h2>
<p>Modulare Tische mit Lochraster erlauben einen schnellen Vorrichtungsaufbau mit Winkeln, Anschlägen und Spannern in den Systembohrungen. Prototypen und Kleinserien erhalten so ohne eigene Vorrichtung einen wiederholbaren Aufbau; fotografiert und dokumentiert, lässt er sich für den nächsten Auftrag wieder aufbauen. Für große Serien ist eine teilespezifische Vorrichtung meist schneller.</p>
<h2>Besonderheiten bei Schweißvorrichtungen</h2>
<ul>
<li><strong>Schrumpfvorhalt:</strong> Nähte schrumpfen beim Abkühlen. Die Vorrichtung kann das Teil mit Gegenwinkel oder Vorspannung halten, damit es nach dem Schweißen das Nennmaß erreicht. Die Werte werden an den ersten Teilen gemessen (siehe <a href="kaynak-distorsiyonu.html">Schweißverzug</a>).</li>
<li><strong>Zugänglichkeit:</strong> Der Brenner muss alle Nähte im richtigen Winkel erreichen; Vorrichtungselemente dürfen den Nahtbereich nicht verdecken.</li>
<li><strong>Spritzer und Wärme:</strong> Bolzen und Anschläge vor Spritzern schützen oder leicht reinigbar gestalten; nahtnahe Elemente müssen Wärmeausdehnung berücksichtigen.</li>
<li><strong>Entnahme:</strong> Das schrumpfende Teil kann sich auf den Bolzen festsetzen. Ziehbare Bolzen oder ausreichendes Spiel einplanen.</li>
<li><strong>Heften und umsetzen oder komplett in der Vorrichtung schweißen?</strong> Teils wird in der Vorrichtung geheftet und auf einem Positionierer fertig geschweißt, teils komplett in der Vorrichtung. Entscheidend sind Verzug und Zugänglichkeit.</li>
</ul>
<h2>Freigabe der Vorrichtung</h2>
<p>Die ersten Teile einer neuen Vorrichtung werden vollständig vermessen und mit der geforderten Toleranz verglichen (z. B. Klassen nach <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> oder Zeichnungstoleranzen). Mit der Erstmusterfreigabe gilt die Vorrichtung als einsatzbereit (siehe <a href="ilk-parca-onayi-kaynakli-imalat.html">Erstmusterprüfung</a>). Während der Serie werden in Abständen Kontrollmaße genommen und verschlissene Bolzen und Anschläge ersetzt.</p>
<h2>Wem gehört die Vorrichtung?</h2>
<p>Bei teilespezifischen Vorrichtungen sollten Kosten und Eigentum in Angebot und Vertrag klar geregelt sein: separate Position oder auf den Teilepreis umgelegt, wer behält sie nach Auftragsende und wie lange wird sie gelagert? Wer das vorab klärt, erlebt bei Folgeaufträgen keine Überraschungen.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei Serien- und Wiederholteilen prüfen wir den Vorrichtungsbedarf bereits im Angebot und weisen Kosten und Eigentum klar aus. Die ersten Teile eines neuen Aufbaus werden vermessen und dokumentiert. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Was ist eine Schweißvorrichtung?', 'Ein Hilfsmittel, das Teile vor und während des Schweißens in der richtigen Lage hält. In der Serie sorgt es für wiederholgenaue Maße, schnellere Arbeit und Verzugskontrolle.'],
      ['Was ist das 3-2-1-Prinzip?', 'Das Anlegen eines Teils an drei Punkte der ersten, zwei der zweiten und einen der dritten Fläche, sodass alle sechs Freiheitsgrade ohne Überbestimmung festgelegt sind.'],
      ['Wann braucht man eine Vorrichtung?', 'Bei Wiederhol- und Serienteilen, eng tolerierten kritischen Maßen und mehrteiligen Baugruppen rechnet sie sich meist.'],
      ['Wie wird eine Vorrichtung berechnet?', 'Als separate Position oder auf den Teilepreis umgelegt. Eigentum und Lagerdauer gehören klar ins Angebot.']
    ],
    cta_h3: 'In der Serie jedes Teil maßgleich',
    cta_p: 'Senden Sie Zeichnung und Jahresmenge; wir bieten inklusive Vorrichtungsbedarf an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Utillajes de soldadura: principios de diseño para medidas repetibles en serie',
    meta: '¿Para qué sirve un utillaje de soldadura y cuándo se amortiza? Principio de posicionamiento 3-2-1, pasadores y topes, amarres, mesas modulares, compensación de la contracción y validación con la inspección de primera pieza.',
    og: 'Diseño de utillajes de soldadura',
    tag: 'Producción · Utillajes',
    h1: 'Utillajes de soldadura: principios de diseño para medidas repetibles en serie',
    crumb: 'Utillajes de soldadura',
    read: '6 min de lectura',
    body: `
<p>Un utillaje de soldadura mantiene las piezas en la posición correcta antes y durante la soldadura. Para una pieza única se puede trabajar con metro, escuadra y sargentos; pero si la misma pieza se fabrica decenas o cientos de veces, solo un buen utillaje garantiza que las medidas salgan iguales cada vez. Es una de las herramientas más eficaces para la repetibilidad, la rapidez y el control de la deformación.</p>
<h2>¿Cuándo se amortiza un utillaje?</h2>
<ul>
<li><strong>Cantidad:</strong> pedidos repetitivos y series.</li>
<li><strong>Tolerancia:</strong> cuando son estrictas medidas críticas como ejes de taladros, puntos de unión o superficies de montaje.</li>
<li><strong>Complejidad:</strong> conjuntos con muchas piezas posicionadas entre sí.</li>
<li><strong>Procesos posteriores:</strong> cuando el mecanizado o el montaje dependen de las medidas de la pieza soldada.</li>
</ul>
<p>Un cálculo sencillo orienta: si el utillaje ahorra 6 minutos de medición y alineación por pieza, en un trabajo de 500 piezas son unas 50 horas. El coste del utillaje se compara con ese ahorro y con el menor riesgo de rechazo.</p>
<h2>Principio básico: posicionamiento 3-2-1</h2>
<p>La posición de una pieza en el espacio se define por seis grados de libertad. Con el principio 3-2-1 la pieza apoya en tres puntos de la superficie de referencia principal, dos de la secundaria y uno de la terciaria. Así queda totalmente posicionada sin sobrerrestricción. Los puntos de referencia se eligen, en lo posible, iguales a las referencias (datums) del plano, para que lo que sujeta el utillaje coincida con lo que se mide en el plano.</p>
<h2>Elementos del utillaje</h2>
<ul>
<li><strong>Topes y pasadores:</strong> fijan la posición. En piezas con taladros, un pasador cilíndrico y uno rombo evitan la sobrerrestricción.</li>
<li><strong>Amarres:</strong> rodilleras (toggle), amarres de tornillo o neumáticos presionan la pieza contra los topes. La fuerza debe actuar sobre los topes para no deformar la pieza.</li>
<li><strong>Base:</strong> un bastidor de acero rígido o una mesa modular perforada.</li>
<li><strong>Respaldos de cobre o cerámicos:</strong> para soportar y formar la raíz.</li>
<li><strong>Masa:</strong> una conexión de masa definida para que la corriente no pase por amarres y pasadores.</li>
</ul>
<h2>Mesas de soldadura modulares</h2>
<p>Las mesas modulares con retícula de agujeros permiten montar un utillaje rápidamente colocando escuadras, topes y amarres en los agujeros del sistema. Prototipos y series cortas obtienen así un montaje repetible sin utillaje dedicado; si se fotografía y registra, puede reconstruirse para el siguiente pedido. En series grandes suele ser más rápido un utillaje específico.</p>
<h2>Aspectos propios de los utillajes de soldadura</h2>
<ul>
<li><strong>Compensación de la contracción:</strong> las soldaduras contraen al enfriarse. El utillaje puede sujetar la pieza con contraángulo o predeformación para que alcance la medida nominal tras soldar. Estos valores se fijan midiendo las primeras piezas (ver <a href="kaynak-distorsiyonu.html">deformación por soldadura</a>).</li>
<li><strong>Acceso:</strong> la antorcha debe llegar a todos los cordones con el ángulo correcto; los elementos no deben tapar la zona de soldadura.</li>
<li><strong>Proyecciones y calor:</strong> pasadores y topes protegidos o fáciles de limpiar; los elementos cercanos al cordón deben prever la dilatación.</li>
<li><strong>Extracción de la pieza:</strong> al contraer, la pieza puede quedar atrapada en los pasadores. Hay que prever pasadores extraíbles o holgura suficiente.</li>
<li><strong>¿Puntear y sacar o soldar todo en el utillaje?</strong> En algunos trabajos la pieza se puntea en el utillaje y se termina en un posicionador; en otros se suelda por completo en el utillaje. Depende de la deformación y del acceso.</li>
</ul>
<h2>Validación del utillaje</h2>
<p>Las primeras piezas de un utillaje nuevo se miden por completo y se comparan con la tolerancia exigida (por ejemplo clases de <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> o tolerancias del plano). El utillaje se considera listo con la aprobación de la primera pieza (ver <a href="ilk-parca-onayi-kaynakli-imalat.html">inspección de primera pieza</a>). Durante la serie se toman medidas de control periódicas y se sustituyen pasadores y topes desgastados.</p>
<h2>¿De quién es el utillaje?</h2>
<p>En utillajes específicos, el coste y la propiedad deben figurar claramente en la oferta y el contrato: ¿partida aparte o repartido en el precio de la pieza?, ¿quién lo conserva al terminar el pedido y durante cuánto tiempo se almacena? Acordarlo desde el principio evita sorpresas en pedidos posteriores.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> en trabajos en serie y repetitivos evaluamos la necesidad de utillaje en la oferta y mostramos su coste y propiedad con claridad. Las primeras piezas de un montaje nuevo se miden y se registran. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Qué es un utillaje de soldadura?', 'Un dispositivo que mantiene las piezas en posición antes y durante la soldadura. En serie da medidas repetibles, acelera el trabajo y ayuda a controlar la deformación.'],
      ['¿Qué es el principio 3-2-1?', 'Apoyar la pieza en tres puntos de la primera superficie, dos de la segunda y uno de la tercera, definiendo los seis grados de libertad sin sobrerrestricción.'],
      ['¿Cuándo hace falta un utillaje?', 'Suele amortizarse en trabajos repetitivos y en serie, con medidas críticas estrictas y en conjuntos de muchas piezas.'],
      ['¿Cómo se presupuesta un utillaje?', 'Como partida aparte o repartido en el precio de la pieza. Propiedad y plazo de almacenaje deben figurar en la oferta.']
    ],
    cta_h3: 'En serie, todas las piezas iguales',
    cta_p: 'Envíenos plano y cantidad anual; ofertamos incluyendo la necesidad de utillaje.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Gabarits de soudage : principes de conception pour des cotes répétables en série',
    meta: 'À quoi sert un gabarit de soudage et quand est-il rentable ? Principe d’isostatisme 3-2-1, pions et butées, brides, tables modulaires, compensation du retrait et validation par l’inspection du premier article.',
    og: 'Conception de gabarits de soudage',
    tag: 'Production · Gabarits',
    h1: 'Gabarits de soudage : principes de conception pour des cotes répétables en série',
    crumb: 'Gabarits de soudage',
    read: '6 min de lecture',
    body: `
<p>Un gabarit de soudage maintient les pièces en bonne position avant et pendant le soudage. Pour une pièce unique, on peut travailler au mètre, à l’équerre et aux serre-joints ; mais quand la même pièce est produite des dizaines ou des centaines de fois, seul un bon gabarit garantit des cotes identiques à chaque fois. C’est l’un des outils les plus efficaces pour la répétabilité, la rapidité et la maîtrise des déformations.</p>
<h2>Quand un gabarit est-il rentable ?</h2>
<ul>
<li><strong>Quantité :</strong> commandes répétitives et séries.</li>
<li><strong>Tolérance :</strong> quand des cotes critiques comme des axes de perçage, points de liaison ou faces d’appui sont serrées.</li>
<li><strong>Complexité :</strong> ensembles où de nombreuses pièces sont positionnées les unes par rapport aux autres.</li>
<li><strong>Opérations suivantes :</strong> quand l’usinage ou le montage dépendent des cotes de la pièce soudée.</li>
</ul>
<p>Un calcul simple donne une idée : si le gabarit fait gagner 6 minutes de mesure et d’alignement par pièce, sur 500 pièces cela fait environ 50 heures. Le coût du gabarit se compare à ce gain et à la réduction du risque de rebut.</p>
<h2>Principe de base : isostatisme 3-2-1</h2>
<p>La position d’une pièce dans l’espace est définie par six degrés de liberté. Selon le principe 3-2-1, la pièce s’appuie sur trois points de la surface de référence principale, deux de la secondaire et un de la tertiaire. Elle est ainsi entièrement positionnée sans hyperstatisme. Les points de référence sont choisis autant que possible identiques aux références du plan, pour que ce que tient le gabarit corresponde à ce qui est mesuré sur le plan.</p>
<h2>Éléments du gabarit</h2>
<ul>
<li><strong>Butées et pions :</strong> fixent la position. Pour les pièces percées, un pion cylindrique et un pion losange évitent l’hyperstatisme.</li>
<li><strong>Brides :</strong> sauterelles, brides à vis ou pneumatiques plaquent la pièce sur les butées. L’effort doit s’appliquer au droit des butées pour ne pas déformer la pièce.</li>
<li><strong>Socle :</strong> un bâti acier rigide ou une table de soudage modulaire perforée.</li>
<li><strong>Supports envers cuivre ou céramique :</strong> pour soutenir et former la racine.</li>
<li><strong>Masse :</strong> une prise de masse définie pour que le courant ne traverse pas brides et pions.</li>
</ul>
<h2>Tables de soudage modulaires</h2>
<p>Les tables modulaires à trame de trous permettent de monter rapidement un gabarit en insérant équerres, butées et brides dans les trous du système. Prototypes et petites séries obtiennent un montage répétable sans gabarit dédié ; photographié et enregistré, il peut être reconstruit à la commande suivante. Pour les grandes séries, un gabarit spécifique est en général plus rapide.</p>
<h2>Points de conception propres au soudage</h2>
<ul>
<li><strong>Compensation du retrait :</strong> les soudures se rétractent en refroidissant. Le gabarit peut tenir la pièce avec un contre-angle ou une précontrainte pour qu’elle revienne à la cote nominale après soudage. Ces valeurs se déterminent en mesurant les premières pièces (voir <a href="kaynak-distorsiyonu.html">déformations de soudage</a>).</li>
<li><strong>Accessibilité :</strong> la torche doit atteindre chaque soudure sous le bon angle ; les éléments ne doivent pas masquer la zone soudée.</li>
<li><strong>Projections et chaleur :</strong> protéger pions et butées ou les rendre faciles à nettoyer ; les éléments proches du joint doivent tenir compte de la dilatation.</li>
<li><strong>Démoulage :</strong> en se rétractant, la pièce peut se coincer sur les pions. Prévoir des pions amovibles ou un jeu suffisant.</li>
<li><strong>Pointer puis sortir, ou souder entièrement dans le gabarit ?</strong> Parfois la pièce est pointée dans le gabarit et terminée sur un positionneur ; parfois tout est soudé dans le gabarit. Le choix dépend des déformations et de l’accès.</li>
</ul>
<h2>Validation du gabarit</h2>
<p>Les premières pièces d’un nouveau gabarit sont entièrement mesurées et comparées à la tolérance requise (par exemple les classes de l’<a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> ou les tolérances du plan). Le gabarit est validé avec l’approbation du premier article (voir <a href="ilk-parca-onayi-kaynakli-imalat.html">inspection du premier article</a>). En cours de série, des cotes de contrôle sont relevées à intervalles et les pions et butées usés sont remplacés.</p>
<h2>À qui appartient le gabarit ?</h2>
<p>Pour un gabarit spécifique, coût et propriété doivent être clairement indiqués dans le devis et le contrat : poste séparé ou réparti sur le prix pièce, qui le conserve en fin de commande, et combien de temps est-il stocké ? Le convenir dès le départ évite les surprises lors des commandes suivantes.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> sur les séries et les pièces répétitives, nous évaluons le besoin de gabarit dès le devis et indiquons clairement son coût et sa propriété. Les premières pièces d’un nouveau montage sont mesurées et enregistrées. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Qu’est-ce qu’un gabarit de soudage ?', 'Un outillage qui maintient les pièces en position avant et pendant le soudage. En série, il rend les cotes répétables, accélère le travail et aide à maîtriser les déformations.'],
      ['Qu’est-ce que le principe 3-2-1 ?', 'Appuyer la pièce sur trois points de la première surface, deux de la deuxième et un de la troisième, pour fixer les six degrés de liberté sans hyperstatisme.'],
      ['Quand faut-il un gabarit ?', 'Il est généralement rentable pour les séries et pièces répétitives, les cotes critiques serrées et les ensembles multi-pièces.'],
      ['Comment un gabarit est-il chiffré ?', 'En poste séparé ou réparti sur le prix pièce. Propriété et durée de stockage doivent figurer au devis.']
    ],
    cta_h3: 'En série, chaque pièce à la même cote',
    cta_p: 'Envoyez votre plan et la quantité annuelle ; nous chiffrons en incluant le besoin de gabarit.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Maschere di saldatura: principi di progettazione per quote ripetibili in serie',
    meta: 'A cosa serve una maschera di saldatura e quando si ripaga? Principio di posizionamento 3-2-1, spine e battute, morsetti, banchi modulari, compensazione del ritiro e validazione con il primo pezzo.',
    og: 'Progettazione di maschere di saldatura',
    tag: 'Produzione · Maschere',
    h1: 'Maschere di saldatura: principi di progettazione per quote ripetibili in serie',
    crumb: 'Maschere di saldatura',
    read: '6 min di lettura',
    body: `
<p>Una maschera di saldatura tiene i pezzi nella posizione corretta prima e durante la saldatura. Per un pezzo singolo si può lavorare con metro, squadra e morsetti; ma se lo stesso pezzo va prodotto decine o centinaia di volte, solo una buona maschera assicura che le quote escano uguali ogni volta. È uno degli strumenti più efficaci per ripetibilità, velocità e controllo delle deformazioni.</p>
<h2>Quando si ripaga una maschera?</h2>
<ul>
<li><strong>Quantità:</strong> ordini ripetuti e serie.</li>
<li><strong>Tolleranza:</strong> quando quote critiche come assi dei fori, punti di attacco o superfici di montaggio sono strette.</li>
<li><strong>Complessità:</strong> assiemi con molti pezzi posizionati tra loro.</li>
<li><strong>Lavorazioni successive:</strong> quando lavorazione meccanica o montaggio dipendono dalle quote del pezzo saldato.</li>
</ul>
<p>Un semplice calcolo dà un’idea: se la maschera fa risparmiare 6 minuti di misura e allineamento a pezzo, su 500 pezzi sono circa 50 ore. Il costo della maschera si confronta con questo risparmio e con il minor rischio di scarti.</p>
<h2>Principio base: posizionamento 3-2-1</h2>
<p>La posizione di un pezzo nello spazio è definita da sei gradi di libertà. Con il principio 3-2-1 il pezzo poggia su tre punti della superficie di riferimento primaria, due della secondaria e uno della terziaria. Così è posizionato completamente senza iperstaticità. I punti di riferimento si scelgono il più possibile coincidenti con i riferimenti del disegno, così ciò che la maschera tiene coincide con ciò che il disegno misura.</p>
<h2>Elementi della maschera</h2>
<ul>
<li><strong>Battute e spine:</strong> definiscono la posizione. Per pezzi forati, una spina cilindrica e una a rombo evitano l’iperstaticità.</li>
<li><strong>Morsetti:</strong> a leva (toggle), a vite o pneumatici premono il pezzo contro le battute. La forza deve agire sulle battute per non deformare il pezzo.</li>
<li><strong>Base:</strong> un telaio d’acciaio rigido o un banco di saldatura modulare forato.</li>
<li><strong>Supporti al rovescio in rame o ceramica:</strong> per sostenere e formare la radice.</li>
<li><strong>Massa:</strong> un collegamento di massa definito perché la corrente non passi per morsetti e spine.</li>
</ul>
<h2>Banchi di saldatura modulari</h2>
<p>I banchi modulari con griglia di fori permettono di montare rapidamente una maschera inserendo squadre, battute e morsetti nei fori del sistema. Prototipi e piccole serie ottengono un allestimento ripetibile senza maschera dedicata; fotografato e registrato, può essere rimontato al prossimo ordine. Per grandi serie una maschera dedicata è di solito più rapida.</p>
<h2>Aspetti specifici delle maschere di saldatura</h2>
<ul>
<li><strong>Compensazione del ritiro:</strong> le saldature ritirano raffreddandosi. La maschera può tenere il pezzo con un contro-angolo o una pre-deformazione perché arrivi alla quota nominale dopo la saldatura. I valori si definiscono misurando i primi pezzi (vedi <a href="kaynak-distorsiyonu.html">deformazioni da saldatura</a>).</li>
<li><strong>Accessibilità:</strong> la torcia deve raggiungere ogni cordone con l’angolo giusto; gli elementi non devono coprire la zona di saldatura.</li>
<li><strong>Spruzzi e calore:</strong> spine e battute protette dagli spruzzi o facili da pulire; gli elementi vicini al cordone devono tenere conto della dilatazione.</li>
<li><strong>Estrazione del pezzo:</strong> ritirando, il pezzo può bloccarsi sulle spine. Prevedere spine estraibili o gioco sufficiente.</li>
<li><strong>Puntare e togliere o saldare tutto in maschera?</strong> In alcuni lavori il pezzo si punta in maschera e si completa su un posizionatore; in altri si salda tutto in maschera. Dipende da deformazioni e accesso.</li>
</ul>
<h2>Validazione della maschera</h2>
<p>I primi pezzi di una nuova maschera vengono misurati completamente e confrontati con la tolleranza richiesta (per esempio classi <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> o tolleranze a disegno). La maschera è considerata pronta con l’approvazione del primo pezzo (vedi <a href="ilk-parca-onayi-kaynakli-imalat.html">ispezione del primo pezzo</a>). Durante la serie si prendono misure di controllo a intervalli e si sostituiscono spine e battute usurate.</p>
<h2>Di chi è la maschera?</h2>
<p>Per le maschere dedicate, costo e proprietà vanno indicati chiaramente in offerta e contratto: voce separata o ripartita sul prezzo del pezzo, chi la tiene a fine ordine e per quanto tempo viene conservata? Concordarlo all’inizio evita sorprese negli ordini successivi.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> su serie e pezzi ripetitivi valutiamo la necessità di una maschera già in offerta e ne indichiamo chiaramente costo e proprietà. I primi pezzi di un nuovo allestimento vengono misurati e registrati. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Cos’è una maschera di saldatura?', 'Un’attrezzatura che tiene i pezzi in posizione prima e durante la saldatura. In serie rende le quote ripetibili, accelera il lavoro e aiuta a controllare le deformazioni.'],
      ['Cos’è il principio 3-2-1?', 'Appoggiare il pezzo su tre punti della prima superficie, due della seconda e uno della terza, definendo i sei gradi di libertà senza iperstaticità.'],
      ['Quando serve una maschera?', 'Di solito si ripaga su lavori ripetuti e di serie, quote critiche strette e assiemi con molti pezzi.'],
      ['Come si quota una maschera?', 'Come voce separata o ripartita sul prezzo del pezzo. Proprietà e durata di conservazione vanno indicate in offerta.']
    ],
    cta_h3: 'In serie, ogni pezzo alla stessa quota',
    cta_p: 'Inviateci disegno e quantità annua; quotiamo includendo la necessità di maschera.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Lasmallen: ontwerpprincipes voor herhaalbare maten in serieproductie',
    meta: 'Waarvoor dient een lasmal en wanneer verdient hij zich terug? Het 3-2-1-positioneerprincipe, pennen en aanslagen, klemmen, modulaire lastafels, krimpcompensatie en validatie via de eerste-artikelinspectie.',
    og: 'Lasmallen ontwerpen',
    tag: 'Productie · Mallen',
    h1: 'Lasmallen: ontwerpprincipes voor herhaalbare maten in serieproductie',
    crumb: 'Lasmallen',
    read: '6 min lezen',
    body: `
<p>Een lasmal houdt onderdelen voor en tijdens het lassen in de juiste positie. Voor één stuk kun je met meetlint, winkelhaak en lijmklemmen werken; maar wordt hetzelfde onderdeel tientallen of honderden keren gemaakt, dan zorgt alleen een goede mal dat de maten elke keer gelijk uitvallen. Een mal is een van de effectiefste middelen voor herhaalbaarheid, snelheid en beheersing van vervorming.</p>
<h2>Wanneer verdient een mal zich terug?</h2>
<ul>
<li><strong>Aantal:</strong> herhaalorders en series.</li>
<li><strong>Tolerantie:</strong> als kritische maten zoals gatassen, aansluitpunten of montagevlakken krap zijn.</li>
<li><strong>Complexiteit:</strong> samenstellingen met veel delen die ten opzichte van elkaar gepositioneerd worden.</li>
<li><strong>Vervolgbewerkingen:</strong> als verspanen of montage afhangt van de maten van het lasdeel.</li>
</ul>
<p>Een eenvoudige rekensom: bespaart de mal 6 minuten meten en uitlijnen per stuk, dan is dat bij 500 stuks ongeveer 50 uur. De malkosten worden afgewogen tegen deze winst en het kleinere afkeurrisico.</p>
<h2>Basisprincipe: 3-2-1-positionering</h2>
<p>De positie van een onderdeel in de ruimte wordt bepaald door zes vrijheidsgraden. Volgens het 3-2-1-principe rust het onderdeel op drie punten van het primaire referentievlak, twee van het secundaire en één van het tertiaire. Zo is het volledig bepaald zonder overbepaling. Referentiepunten worden zoveel mogelijk gelijk gekozen aan de referenties (datums) op de tekening, zodat wat de mal vasthoudt overeenkomt met wat de tekening meet.</p>
<h2>Onderdelen van een mal</h2>
<ul>
<li><strong>Aanslagen en pennen:</strong> bepalen de positie. Bij onderdelen met gaten voorkomt een ronde en een ruitvormige pen overbepaling.</li>
<li><strong>Klemmen:</strong> snelspanners, schroefklemmen of pneumatische klemmen drukken het deel tegen de aanslagen. De klemkracht moet boven de aanslagen aangrijpen om het deel niet te vervormen.</li>
<li><strong>Basis:</strong> een stijf stalen frame of een modulaire lastafel met gatenpatroon.</li>
<li><strong>Koperen of keramische onderlegstrips:</strong> om de grondlaag te ondersteunen en te vormen.</li>
<li><strong>Massa:</strong> een vaste massa-aansluiting zodat de lasstroom niet via klemmen en pennen loopt.</li>
</ul>
<h2>Modulaire lastafels</h2>
<p>Modulaire tafels met een gatenraster maken het mogelijk snel een mal op te bouwen door winkelhaken, aanslagen en klemmen in de systeemgaten te plaatsen. Prototypes en kleine series krijgen zo zonder speciale mal een herhaalbare opstelling; gefotografeerd en vastgelegd kan die bij de volgende order opnieuw worden opgebouwd. Bij grote series is een productspecifieke mal meestal sneller.</p>
<h2>Specifieke ontwerppunten voor lasmallen</h2>
<ul>
<li><strong>Krimpcompensatie:</strong> lassen krimpen bij afkoelen. De mal kan het deel met een tegenhoek of voorspanning vasthouden zodat het na het lassen op nominale maat komt. Deze waarden worden bepaald door de eerste delen te meten (zie <a href="kaynak-distorsiyonu.html">lasvervorming</a>).</li>
<li><strong>Bereikbaarheid:</strong> de toorts moet elke las onder de juiste hoek bereiken; malonderdelen mogen de laszone niet afdekken.</li>
<li><strong>Spatten en warmte:</strong> pennen en aanslagen beschermen tegen spatten of makkelijk reinigbaar maken; onderdelen dicht bij de las moeten rekening houden met uitzetting.</li>
<li><strong>Uitnemen:</strong> het krimpende deel kan op de pennen vastlopen. Uitneembare pennen of voldoende speling vooraf inplannen.</li>
<li><strong>Hechten en uitnemen, of volledig in de mal lassen?</strong> Soms wordt het deel in de mal gehecht en op een positioneerder afgelast, soms gebeurt al het laswerk in de mal. De keuze hangt af van vervorming en bereikbaarheid.</li>
</ul>
<h2>Validatie van de mal</h2>
<p>De eerste delen uit een nieuwe mal worden volledig gemeten en vergeleken met de vereiste tolerantie (bijvoorbeeld klassen uit <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> of tekeningtoleranties). Met de goedkeuring van het eerste artikel geldt de mal als gereed (zie <a href="ilk-parca-onayi-kaynakli-imalat.html">eerste-artikelinspectie</a>). Tijdens de serie worden periodiek controlematen genomen en versleten pennen en aanslagen vervangen.</p>
<h2>Van wie is de mal?</h2>
<p>Bij productspecifieke mallen moeten kosten en eigendom duidelijk in offerte en contract staan: aparte post of verrekend in de stukprijs, wie houdt de mal na afloop van de order en hoe lang wordt hij bewaard? Wie dat vooraf afspreekt, voorkomt verrassingen bij volgende orders.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij serie- en herhaalwerk beoordelen we de malbehoefte al in de offerte en vermelden we kosten en eigendom duidelijk. De eerste delen van een nieuwe opstelling worden gemeten en vastgelegd. <a href="../cizime-gore-imalat.html">Productie volgens tekening →</a></p></div>
`,
    faq: [
      ['Wat is een lasmal?', 'Een hulpmiddel dat onderdelen voor en tijdens het lassen in positie houdt. In serie zorgt het voor herhaalbare maten, sneller werk en beheersing van vervorming.'],
      ['Wat is het 3-2-1-principe?', 'Een deel laten rusten op drie punten van het eerste vlak, twee van het tweede en één van het derde, zodat de zes vrijheidsgraden zonder overbepaling vastliggen.'],
      ['Wanneer is een mal nodig?', 'Bij herhaal- en seriewerk, krappe kritische maten en samenstellingen met veel delen verdient een mal zich meestal terug.'],
      ['Hoe wordt een mal geprijsd?', 'Als aparte post of verrekend in de stukprijs. Eigendom en bewaartermijn horen duidelijk in de offerte.']
    ],
    cta_h3: 'In serie elk deel op dezelfde maat',
    cta_p: 'Stuur tekening en jaaraantal; we offreren inclusief malbehoefte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Sveisejigger: konstruksjonsprinsipper for repeterbare mål i serieproduksjon',
    meta: 'Hva gjør en sveisejigg, og når lønner den seg? 3-2-1-prinsippet for posisjonering, pinner og anlegg, klemmer, modulære sveisebord, krympekompensasjon og godkjenning av jiggen gjennom førsteartikkelinspeksjon.',
    og: 'Konstruksjon av sveisejigger',
    tag: 'Produksjon · Jigger',
    h1: 'Sveisejigger: konstruksjonsprinsipper for repeterbare mål i serieproduksjon',
    crumb: 'Sveisejigger',
    read: '6 min lesing',
    body: `
<p>En sveisejigg holder delene i riktig posisjon før og under sveising. For én enkelt del kan man jobbe med målebånd, vinkel og tvinger; men når samme del lages titalls eller hundrevis av ganger, er det bare en god jigg som sikrer at målene blir like hver gang. Jiggen er et av de mest effektive verktøyene for repeterbarhet, hastighet og kontroll med deformasjon.</p>
<h2>Når lønner en jigg seg?</h2>
<ul>
<li><strong>Antall:</strong> gjentatte ordrer og serier.</li>
<li><strong>Toleranse:</strong> når kritiske mål som hullakser, tilkoblingspunkter eller monteringsflater er stramme.</li>
<li><strong>Kompleksitet:</strong> sammenstillinger der mange deler posisjoneres i forhold til hverandre.</li>
<li><strong>Videre operasjoner:</strong> når maskinering eller montering avhenger av målene på den sveiste delen.</li>
</ul>
<p>Et enkelt regnestykke gir en idé: sparer jiggen 6 minutter med måling og oppretting per del, blir det omtrent 50 timer på en jobb med 500 deler. Jiggkostnaden vurderes mot denne gevinsten og redusert risiko for vrak.</p>
<h2>Grunnprinsipp: 3-2-1-posisjonering</h2>
<p>En dels posisjon i rommet er definert av seks frihetsgrader. Etter 3-2-1-prinsippet hviler delen på tre punkter på primær referanseflate, to på sekundær og ett på tertiær. Dermed er den fullt posisjonert uten overbestemmelse. Referansepunktene velges så langt som mulig lik referansene (datum) på tegningen, slik at det jiggen holder stemmer med det tegningen måler.</p>
<h2>Elementer i en jigg</h2>
<ul>
<li><strong>Anlegg og pinner:</strong> bestemmer posisjonen. For deler med hull hindrer én rund og én rombepinne overbestemmelse.</li>
<li><strong>Klemmer:</strong> knevippe-, skrue- eller pneumatiske klemmer presser delen mot anleggene. Klemkraften bør virke over anleggene så delen ikke deformeres.</li>
<li><strong>Bunn:</strong> en stiv stålramme eller et modulært sveisebord med hullmønster.</li>
<li><strong>Kobber- eller keramisk rotstøtte:</strong> for å støtte og forme roten.</li>
<li><strong>Jording:</strong> en definert jordforbindelse så sveisestrømmen ikke går gjennom klemmer og pinner.</li>
</ul>
<h2>Modulære sveisebord</h2>
<p>Modulære bord med hullraster gjør det mulig å bygge en jigg raskt ved å sette vinkler, anlegg og klemmer i systemhullene. Prototyper og små serier får dermed et repeterbart oppsett uten egen jigg; fotografert og dokumentert kan det bygges opp igjen ved neste ordre. For store serier er en dedikert jigg vanligvis raskere.</p>
<h2>Konstruksjonspunkter som gjelder sveisejigger</h2>
<ul>
<li><strong>Krympekompensasjon:</strong> sveiser krymper når de kjøles. Jiggen kan holde delen med motvinkel eller forspenning slik at den når nominelt mål etter sveising. Verdiene fastsettes ved å måle de første delene (se <a href="kaynak-distorsiyonu.html">sveisedeformasjon</a>).</li>
<li><strong>Tilgang:</strong> pistolen må nå alle sveiser i riktig vinkel; jiggelementer må ikke dekke sveisesonen.</li>
<li><strong>Sprut og varme:</strong> pinner og anlegg beskyttes mot sprut eller gjøres lette å rengjøre; elementer nær sveisen må ta høyde for varmeutvidelse.</li>
<li><strong>Uttak av delen:</strong> delen som krymper kan låse seg på pinnene. Uttakbare pinner eller nok klaring må planlegges.</li>
<li><strong>Heftsveise og ta ut, eller sveise ferdig i jiggen?</strong> Noen ganger heftes delen i jiggen og sveises ferdig på en posisjoneringsenhet; andre ganger sveises alt i jiggen. Valget avhenger av deformasjon og tilgang.</li>
</ul>
<h2>Godkjenning av jiggen</h2>
<p>De første delene fra en ny jigg måles fullt ut og sammenlignes med kravet til toleranse (for eksempel klasser i <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> eller tegningstoleranser). Jiggen regnes som klar når førsteartikkelen er godkjent (se <a href="ilk-parca-onayi-kaynakli-imalat.html">førsteartikkelinspeksjon</a>). Gjennom serien tas kontrollmål med jevne mellomrom, og slitte pinner og anlegg byttes.</p>
<h2>Hvem eier jiggen?</h2>
<p>For deldedikerte jigger bør kostnad og eierskap stå tydelig i tilbud og kontrakt: egen post eller fordelt på delprisen, hvem beholder jiggen når ordren er ferdig, og hvor lenge lagres den? Avtales dette på forhånd, unngår man overraskelser ved senere ordrer.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> på serie- og gjentakende arbeid vurderer vi jiggbehovet allerede i tilbudet og viser kostnad og eierskap tydelig. De første delene fra et nytt oppsett måles og registreres. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hva er en sveisejigg?', 'Et hjelpemiddel som holder delene i posisjon før og under sveising. I serie gir den repeterbare mål, raskere arbeid og bedre kontroll med deformasjon.'],
      ['Hva er 3-2-1-prinsippet?', 'Å la delen hvile på tre punkter på første flate, to på andre og ett på tredje, slik at de seks frihetsgradene bestemmes uten overbestemmelse.'],
      ['Når trengs en jigg?', 'På gjentakende og serielt arbeid, stramme kritiske mål og sammenstillinger med mange deler lønner en jigg seg vanligvis.'],
      ['Hvordan prises en jigg?', 'Som egen post eller fordelt på delprisen. Eierskap og lagringstid bør stå tydelig i tilbudet.']
    ],
    cta_h3: 'I serie får hver del samme mål',
    cta_p: 'Send tegning og årlig antall; vi gir tilbud inkludert jiggbehov.',
    cta_btn: 'Be om tilbud →'
  }
};
