export default {
  order: 65,
  slug: 'should-cost-hedef-fiyat-kaynakli-parca',
  key: 'p65_shouldcost',
  date: '2025-12-15',
  keywords: 'should cost analizi, hedef fiyat, kaynaklı parça maliyet modeli, maliyet kırılımı, cost breakdown kaynaklı imalat, should-cost welded parts, target price fabrication, Kostenaufschlüsselung Schweißteil, Should-Cost-Analyse, análisis should cost piezas soldadas, analyse should cost pièces soudées',
  related: ['kaynak-maliyeti-hesaplama', 'kaynakli-imalat-fiyati', 'maliyet-optimizasyon', 'kaynakli-parca-teklif-karsilastirma'],
  tr: {
    title: 'Kaynaklı Parçada Should-Cost ve Hedef Fiyat: Bir Parça Ne Kadar Tutmalı?',
    meta: 'Kaynaklı parçalar için should-cost analizi: malzeme, kesim, büküm, kaynak, NDT, yüzey işlemi, genel gider ve kârdan oluşan maliyet kırılımı, hedef fiyatın nasıl kurulduğu, tedarikçiyle maliyet görüşmesi ve sık yapılan hesap hataları.',
    og: 'Should-cost ve hedef fiyat',
    tag: 'Satın Alma · Maliyet',
    h1: 'Kaynaklı Parçada Should-Cost ve Hedef Fiyat: Bir Parça Ne Kadar Tutmalı?',
    crumb: 'Should-cost analizi',
    read: '8 dk okuma',
    body: `
<p>Should-cost analizi, bir parçanın "ne kadara satıldığını" değil, verimli bir üreticide "ne kadara mal olması gerektiğini" tahmin eder. Satın alma ekipleri bu yöntemi tedarikçiyle konuşmayı rakamlara dayandırmak, anormal teklifleri fark etmek ve tasarımda maliyet düşürme fırsatlarını görmek için kullanır. Kaynaklı parçalarda yöntem oldukça şeffaftır, çünkü maliyetin büyük kısmı ölçülebilir kalemlerden gelir.</p>
<h2>Maliyet Kırılımı</h2>
<table>
<thead><tr><th>Kalem</th><th>Nasıl tahmin edilir?</th></tr></thead>
<tbody>
<tr><td>Malzeme</td><td>Brüt ağırlık (fire dahil) × güncel kg fiyatı + sertifika farkı</td></tr>
<tr><td>Kesim</td><td>Kesim uzunluğu ve delik sayısına göre lazer veya plazma süresi</td></tr>
<tr><td>Büküm</td><td>Büküm sayısı × ayar ve işlem süresi</td></tr>
<tr><td>Hazırlık ve punta</td><td>Parça sayısı ve montaj karmaşıklığına göre süre</td></tr>
<tr><td>Kaynak</td><td>Dikiş uzunluğu, kesit ve yöntemin yığma hızından ark süresi; ark süresi oranıyla toplam süre</td></tr>
<tr><td>Düzeltme ve taşlama</td><td>Distorsiyon riski ve yüzey şartına göre pay</td></tr>
<tr><td>Muayene</td><td>VT, NDT yöntemi ve oranı, ölçüm raporu</td></tr>
<tr><td>Yüzey işlemi</td><td>m² veya kg başına kumlama, boya ya da galvaniz</td></tr>
<tr><td>Ambalaj ve nakliye</td><td>Teslim şekline (Incoterm) göre</td></tr>
<tr><td>Genel gider ve kâr</td><td>Atölye saat ücretinin içinde veya ayrı oran olarak</td></tr>
</tbody>
</table>
<h2>Kaynak Süresini Tahmin Etmek</h2>
<p>Kaynak kalemi çoğu zaman en çok tartışılan kalemdir. Pratik bir yol: dikiş kesitinden kaynak metali ağırlığını hesaplayın, yöntemin yığma hızına bölün ve bulduğunuz ark süresini bir ark süresi oranına (gerçek kaynak yapılan zamanın toplam çalışma süresine oranı) bölün. Elle MAG kaynağında bu oran genellikle düşüktür; parça çevirme, cüruf temizleme, pozisyon değiştirme ve ara kontroller zamanın önemli kısmını alır. Ayrıntılar için <a href="kaynak-maliyeti-hesaplama.html">kaynak maliyeti hesaplama</a> yazısına bakın.</p>
<h2>Saat Ücreti Neleri Kapsar?</h2>
<p>Atölye saat ücreti sadece kaynakçının maaşı değildir. Ekipman amortismanı, gaz ve tel dışındaki sarf, enerji, bina, kalite kontrol, planlama ve yönetim giderleri bu ücrete dağıtılır. Should-cost modelinde ülke ve bölgeye göre makul bir saat ücreti aralığı kullanılır; amaç tedarikçinin iç maliyetini birebir bilmek değil, büyüklük sırasını doğru yakalamaktır.</p>
<h2>Hedef Fiyat Nasıl Kurulur?</h2>
<ol>
<li>Should-cost toplamını bulun.</li>
<li>Makul bir kâr marjı ekleyin; marjı sıfıra yakın düşünmek sürdürülebilir bir tedarik ilişkisi kurmaz.</li>
<li>Hacim, parti büyüklüğü ve teslim şekline göre düzeltin.</li>
<li>Gelen tekliflerle karşılaştırın ve büyük sapmaları kalem bazında konuşun (bkz. <a href="kaynakli-parca-teklif-karsilastirma.html">teklif karşılaştırma</a>).</li>
</ol>
<h2>Tedarikçiyle Maliyet Görüşmesi</h2>
<p>Should-cost bir pazarlık silahı olarak değil, ortak bir dil olarak kullanıldığında en çok fayda sağlar. "Fiyatınız yüksek" demek yerine "kaynak süresini sizde 3 saat, bizim hesabımızda 2 saat görüyoruz; fark nereden geliyor?" diye sormak hem doğru bilgiyi açığa çıkarır hem de tasarım iyileştirmesine kapı açar. Çoğu zaman fark, çizimde gereğinden büyük bir köşe kaynağı, gereksiz sıkı bir tolerans veya pahalı bir yüzey şartından gelir (bkz. <a href="maliyet-optimizasyon.html">maliyet optimizasyonu</a>).</p>
<h2>Sık Yapılan Hesap Hataları</h2>
<ul>
<li>Net ağırlık kullanmak, fire ve kesim kayıplarını atlamak.</li>
<li>Sadece ark süresini hesaplamak, hazırlık ve taşıma zamanını unutmak.</li>
<li>Küçük partilerde ayar süresinin adet başına etkisini göz ardı etmek.</li>
<li>NDT, ölçüm raporu ve dokümantasyonu sıfır saymak.</li>
<li>Malzeme fiyatının tarihini ve geçerliliğini kontrol etmemek.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Tekliflerimizi malzeme, kaynak, muayene, yüzey işlemi ve teslim kalemlerine ayırarak hazırlıyoruz. Should-cost modeliniz varsa kalem bazında karşılaştırmaktan ve tasarımda maliyet düşürme fırsatlarını birlikte aramaktan memnuniyet duyarız. <a href="../kaynakli-imalat.html">Kaynaklı imalat →</a></p></div>
`,
    faq: [
      ['Should-cost analizi nedir?', 'Bir parçanın verimli bir üreticide ne kadara mal olması gerektiğini malzeme, işçilik, süreç ve genel gider kalemlerinden tahmin etme yöntemidir.'],
      ['Kaynak maliyeti nasıl tahmin edilir?', 'Dikiş kesitinden kaynak metali ağırlığı bulunur, yığma hızına bölünerek ark süresi hesaplanır ve ark süresi oranıyla toplam süreye çevrilir.'],
      ['Hedef fiyat should-cost ile aynı mı?', 'Hayır. Hedef fiyat, should-cost toplamına makul kâr ve hacim, parti, teslim şekli düzeltmeleri eklenerek kurulur.'],
      ['En sık yapılan hata nedir?', 'Fire ve hazırlık sürelerini atlamak, NDT ve dokümantasyonu sıfır saymaktır.']
    ],
    cta_h3: 'Maliyet kırılımlı teklif mi istiyorsunuz?',
    cta_p: 'Çiziminizi gönderin; kalemlere ayrılmış teklifimizi should-cost modelinizle karşılaştırabilirsiniz.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Should-Cost and Target Price for Welded Parts: What Should a Part Cost?',
    meta: 'Should-cost analysis for welded parts: cost breakdown into material, cutting, bending, welding, NDT, surface treatment, overhead and profit, how to build a target price, cost discussions with suppliers and common calculation mistakes.',
    og: 'Should-cost and target price',
    tag: 'Purchasing · Cost',
    h1: 'Should-Cost and Target Price for Welded Parts: What Should a Part Cost?',
    crumb: 'Should-cost analysis',
    read: '8 min read',
    body: `
<p>A should-cost analysis estimates not what a part "sells for" but what it "should cost" at an efficient manufacturer. Purchasing teams use it to base supplier discussions on numbers, to spot abnormal quotes and to find cost reduction opportunities in the design. For welded parts the method is quite transparent, because most of the cost comes from measurable items.</p>
<h2>Cost Breakdown</h2>
<table>
<thead><tr><th>Item</th><th>How to estimate</th></tr></thead>
<tbody>
<tr><td>Material</td><td>Gross weight (incl. scrap) × current price per kg + certificate surcharge</td></tr>
<tr><td>Cutting</td><td>Laser or plasma time from cut length and number of holes</td></tr>
<tr><td>Bending</td><td>Number of bends × set-up and operation time</td></tr>
<tr><td>Preparation and tacking</td><td>Time from number of parts and assembly complexity</td></tr>
<tr><td>Welding</td><td>Arc time from weld length, cross-section and deposition rate; total time via arc time ratio</td></tr>
<tr><td>Straightening and grinding</td><td>Allowance based on distortion risk and surface requirement</td></tr>
<tr><td>Inspection</td><td>VT, NDT method and rate, dimensional report</td></tr>
<tr><td>Surface treatment</td><td>Blasting, painting or galvanising per m² or kg</td></tr>
<tr><td>Packaging and freight</td><td>According to delivery terms (Incoterm)</td></tr>
<tr><td>Overhead and profit</td><td>Included in the shop rate or as a separate percentage</td></tr>
</tbody>
</table>
<h2>Estimating Welding Time</h2>
<p>Welding is usually the most debated item. A practical approach: calculate the weld metal weight from the weld cross-section, divide by the process deposition rate, then divide the resulting arc time by an arc time ratio (the share of total working time actually spent welding). For manual MAG welding this ratio is usually low; turning the part, cleaning, changing position and in-process checks take a large share of the time. See <a href="kaynak-maliyeti-hesaplama.html">welding cost calculation</a> for details.</p>
<h2>What Does the Shop Rate Cover?</h2>
<p>A shop hourly rate is not just the welder's wage. Equipment depreciation, consumables other than gas and wire, energy, buildings, quality control, planning and management are all spread over it. A should-cost model uses a reasonable rate range for the country and region; the goal is not to know the supplier's internal cost exactly but to get the order of magnitude right.</p>
<h2>How to Build a Target Price</h2>
<ol>
<li>Find the should-cost total.</li>
<li>Add a reasonable profit margin; assuming a margin near zero does not build a sustainable supply relationship.</li>
<li>Adjust for volume, batch size and delivery terms.</li>
<li>Compare with incoming quotes and discuss large deviations item by item (see <a href="kaynakli-parca-teklif-karsilastirma.html">comparing quotes</a>).</li>
</ol>
<h2>Cost Discussions with Suppliers</h2>
<p>Should-cost works best as a common language rather than a negotiating weapon. Instead of "your price is too high", asking "you show 3 hours of welding, our model shows 2; where does the difference come from?" brings out the right information and opens the door to design improvements. Often the gap comes from an oversized fillet weld, an unnecessarily tight tolerance or an expensive surface requirement on the drawing (see <a href="maliyet-optimizasyon.html">cost optimisation</a>).</p>
<h2>Common Calculation Mistakes</h2>
<ul>
<li>Using net weight and ignoring scrap and cutting losses.</li>
<li>Calculating arc time only and forgetting preparation and handling.</li>
<li>Ignoring the per-piece effect of set-up time in small batches.</li>
<li>Counting NDT, dimensional reports and documentation as zero.</li>
<li>Not checking the date and validity of the material price.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> we prepare our quotes broken down into material, welding, inspection, surface treatment and delivery. If you have a should-cost model, we are happy to compare item by item and look for design cost savings together. <a href="../kaynakli-imalat.html">Welded fabrication →</a></p></div>
`,
    faq: [
      ['What is a should-cost analysis?', 'A method of estimating what a part should cost at an efficient manufacturer from material, labour, process and overhead items.'],
      ['How is welding cost estimated?', 'Weld metal weight is derived from the cross-section, divided by deposition rate to get arc time, and converted to total time with an arc time ratio.'],
      ['Is the target price the same as should-cost?', 'No. The target price adds a reasonable profit and adjustments for volume, batch size and delivery terms to the should-cost total.'],
      ['What is the most common mistake?', 'Leaving out scrap and preparation time, and counting NDT and documentation as zero.']
    ],
    cta_h3: 'Want a quote with a cost breakdown?',
    cta_p: 'Send your drawing; you can compare our itemised quote with your should-cost model.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Should-Cost und Zielpreis für Schweißteile: Was sollte ein Teil kosten?',
    meta: 'Should-Cost-Analyse für Schweißteile: Kostenaufschlüsselung in Werkstoff, Zuschnitt, Kanten, Schweißen, ZfP, Oberfläche, Gemeinkosten und Gewinn, Aufbau eines Zielpreises, Kostengespräche mit Lieferanten und typische Rechenfehler.',
    og: 'Should-Cost und Zielpreis',
    tag: 'Einkauf · Kosten',
    h1: 'Should-Cost und Zielpreis für Schweißteile: Was sollte ein Teil kosten?',
    crumb: 'Should-Cost-Analyse',
    read: '8 Min. Lesezeit',
    body: `
<p>Eine Should-Cost-Analyse schätzt nicht, wofür ein Teil „verkauft wird", sondern was es bei einem effizienten Hersteller „kosten sollte". Einkaufsteams nutzen sie, um Lieferantengespräche auf Zahlen zu stützen, auffällige Angebote zu erkennen und Kostensenkungspotenziale in der Konstruktion zu finden. Bei Schweißteilen ist die Methode recht transparent, weil der Großteil der Kosten aus messbaren Positionen stammt.</p>
<h2>Kostenaufschlüsselung</h2>
<table>
<thead><tr><th>Position</th><th>Schätzung</th></tr></thead>
<tbody>
<tr><td>Werkstoff</td><td>Bruttogewicht (inkl. Verschnitt) × aktueller kg-Preis + Zeugniszuschlag</td></tr>
<tr><td>Zuschnitt</td><td>Laser- oder Plasmazeit aus Schnittlänge und Lochanzahl</td></tr>
<tr><td>Kanten</td><td>Anzahl Biegungen × Rüst- und Bearbeitungszeit</td></tr>
<tr><td>Vorbereitung und Heften</td><td>Zeit nach Teilezahl und Montagekomplexität</td></tr>
<tr><td>Schweißen</td><td>Lichtbogenzeit aus Nahtlänge, Querschnitt und Abschmelzleistung; Gesamtzeit über Lichtbogenzeitanteil</td></tr>
<tr><td>Richten und Schleifen</td><td>Zuschlag nach Verzugsrisiko und Oberflächenanforderung</td></tr>
<tr><td>Prüfung</td><td>VT, ZfP-Verfahren und -Umfang, Messprotokoll</td></tr>
<tr><td>Oberfläche</td><td>Strahlen, Lackieren oder Verzinken je m² oder kg</td></tr>
<tr><td>Verpackung und Fracht</td><td>Nach Lieferbedingung (Incoterm)</td></tr>
<tr><td>Gemeinkosten und Gewinn</td><td>Im Stundensatz enthalten oder als separater Prozentsatz</td></tr>
</tbody>
</table>
<h2>Schweißzeit schätzen</h2>
<p>Das Schweißen ist meist die am stärksten diskutierte Position. Ein praktischer Weg: Schweißgutmasse aus dem Nahtquerschnitt berechnen, durch die Abschmelzleistung des Verfahrens teilen und die so ermittelte Lichtbogenzeit durch den Lichtbogenzeitanteil (Anteil der tatsächlichen Schweißzeit an der Gesamtarbeitszeit) dividieren. Beim manuellen MAG-Schweißen ist dieser Anteil meist niedrig; Wenden, Reinigen, Positionswechsel und Zwischenprüfungen kosten viel Zeit. Details unter <a href="kaynak-maliyeti-hesaplama.html">Schweißkosten berechnen</a>.</p>
<h2>Was deckt der Stundensatz ab?</h2>
<p>Der Werkstattstundensatz ist nicht nur der Lohn des Schweißers. Abschreibungen, Verbrauchsmaterial außer Gas und Draht, Energie, Gebäude, Qualitätskontrolle, Planung und Verwaltung werden darauf umgelegt. Ein Should-Cost-Modell verwendet eine plausible Spanne für Land und Region; Ziel ist nicht, die internen Kosten des Lieferanten exakt zu kennen, sondern die Größenordnung zu treffen.</p>
<h2>Einen Zielpreis aufbauen</h2>
<ol>
<li>Should-Cost-Summe ermitteln.</li>
<li>Eine angemessene Marge addieren; eine Marge nahe null schafft keine tragfähige Lieferbeziehung.</li>
<li>Für Menge, Losgröße und Lieferbedingung korrigieren.</li>
<li>Mit eingehenden Angeboten vergleichen und große Abweichungen positionsweise besprechen (siehe <a href="kaynakli-parca-teklif-karsilastirma.html">Angebotsvergleich</a>).</li>
</ol>
<h2>Kostengespräche mit Lieferanten</h2>
<p>Should-Cost wirkt am besten als gemeinsame Sprache, nicht als Verhandlungswaffe. Statt „Ihr Preis ist zu hoch" lieber fragen: „Sie kalkulieren 3 Stunden Schweißen, unser Modell 2; woher kommt der Unterschied?" Das bringt die richtigen Informationen hervor und öffnet die Tür für Konstruktionsverbesserungen. Oft liegt die Differenz in einer überdimensionierten Kehlnaht, einer unnötig engen Toleranz oder einer teuren Oberflächenanforderung (siehe <a href="maliyet-optimizasyon.html">Kostenoptimierung</a>).</p>
<h2>Typische Rechenfehler</h2>
<ul>
<li>Nettogewicht verwenden und Verschnitt sowie Schnittverluste übersehen.</li>
<li>Nur die Lichtbogenzeit rechnen und Vorbereitung und Handling vergessen.</li>
<li>Den Stückkosteneffekt der Rüstzeit bei kleinen Losen ignorieren.</li>
<li>ZfP, Messprotokolle und Dokumentation mit null ansetzen.</li>
<li>Datum und Gültigkeit des Werkstoffpreises nicht prüfen.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Unsere Angebote gliedern wir in Werkstoff, Schweißen, Prüfung, Oberfläche und Lieferung. Wenn Sie ein Should-Cost-Modell haben, vergleichen wir gerne Position für Position und suchen gemeinsam nach Einsparungen in der Konstruktion. <a href="../kaynakli-imalat.html">Schweißfertigung →</a></p></div>
`,
    faq: [
      ['Was ist eine Should-Cost-Analyse?', 'Eine Methode, aus Werkstoff, Arbeit, Prozess und Gemeinkosten zu schätzen, was ein Teil bei einem effizienten Hersteller kosten sollte.'],
      ['Wie schätzt man die Schweißkosten?', 'Aus dem Nahtquerschnitt die Schweißgutmasse ermitteln, durch die Abschmelzleistung teilen und über den Lichtbogenzeitanteil in Gesamtzeit umrechnen.'],
      ['Ist der Zielpreis gleich Should-Cost?', 'Nein. Der Zielpreis ergänzt die Should-Cost-Summe um eine angemessene Marge und Korrekturen für Menge, Losgröße und Lieferbedingung.'],
      ['Was ist der häufigste Fehler?', 'Verschnitt und Vorbereitungszeiten weglassen sowie ZfP und Dokumentation mit null ansetzen.']
    ],
    cta_h3: 'Ein Angebot mit Kostenaufschlüsselung?',
    cta_p: 'Senden Sie Ihre Zeichnung; unser aufgeschlüsseltes Angebot können Sie mit Ihrem Should-Cost-Modell abgleichen.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Should-cost y precio objetivo en piezas soldadas: ¿cuánto debería costar una pieza?',
    meta: 'Análisis should-cost para piezas soldadas: desglose en material, corte, plegado, soldadura, END, tratamiento superficial, gastos generales y beneficio, cómo fijar un precio objetivo, conversación de costes con el proveedor y errores frecuentes.',
    og: 'Should-cost y precio objetivo',
    tag: 'Compras · Costes',
    h1: 'Should-cost y precio objetivo en piezas soldadas: ¿cuánto debería costar una pieza?',
    crumb: 'Análisis should-cost',
    read: '8 min de lectura',
    body: `
<p>El análisis should-cost no estima a cuánto "se vende" una pieza, sino cuánto "debería costar" en un fabricante eficiente. Los equipos de compras lo usan para apoyar en cifras la conversación con el proveedor, detectar ofertas anómalas y encontrar ahorros en el diseño. En piezas soldadas el método es bastante transparente, porque la mayor parte del coste procede de partidas medibles.</p>
<h2>Desglose de costes</h2>
<table>
<thead><tr><th>Partida</th><th>Cómo estimarla</th></tr></thead>
<tbody>
<tr><td>Material</td><td>Peso bruto (con merma) × precio actual por kg + recargo de certificado</td></tr>
<tr><td>Corte</td><td>Tiempo de láser o plasma según longitud de corte y número de taladros</td></tr>
<tr><td>Plegado</td><td>Número de pliegues × tiempo de preparación y operación</td></tr>
<tr><td>Preparación y punteado</td><td>Tiempo según número de piezas y complejidad del montaje</td></tr>
<tr><td>Soldadura</td><td>Tiempo de arco según longitud, sección y tasa de deposición; tiempo total mediante el factor de arco</td></tr>
<tr><td>Enderezado y amolado</td><td>Margen según riesgo de distorsión y exigencia superficial</td></tr>
<tr><td>Inspección</td><td>VT, método y porcentaje de END, informe dimensional</td></tr>
<tr><td>Tratamiento superficial</td><td>Granallado, pintura o galvanizado por m² o kg</td></tr>
<tr><td>Embalaje y transporte</td><td>Según condiciones de entrega (Incoterm)</td></tr>
<tr><td>Gastos generales y beneficio</td><td>Dentro de la tarifa horaria o como porcentaje aparte</td></tr>
</tbody>
</table>
<h2>Estimar el tiempo de soldadura</h2>
<p>La soldadura suele ser la partida más discutida. Un método práctico: calcule el peso de metal depositado a partir de la sección del cordón, divídalo por la tasa de deposición del proceso y divida el tiempo de arco obtenido por el factor de arco (proporción del tiempo total dedicada realmente a soldar). En MAG manual este factor suele ser bajo; voltear la pieza, limpiar, cambiar de posición y los controles intermedios consumen mucho tiempo. Más detalles en <a href="kaynak-maliyeti-hesaplama.html">cálculo de costes de soldadura</a>.</p>
<h2>¿Qué cubre la tarifa horaria?</h2>
<p>La tarifa horaria del taller no es solo el salario del soldador. Incluye amortización de equipos, consumibles distintos de gas e hilo, energía, edificios, control de calidad, planificación y dirección. El modelo should-cost usa un rango razonable para el país y la región; el objetivo no es conocer exactamente el coste interno del proveedor, sino acertar con el orden de magnitud.</p>
<h2>Cómo fijar un precio objetivo</h2>
<ol>
<li>Calcule el total should-cost.</li>
<li>Añada un margen razonable; suponer un margen casi nulo no crea una relación de suministro sostenible.</li>
<li>Ajuste por volumen, tamaño de lote y condiciones de entrega.</li>
<li>Compárelo con las ofertas recibidas y analice las desviaciones grandes partida por partida (ver <a href="kaynakli-parca-teklif-karsilastirma.html">comparar ofertas</a>).</li>
</ol>
<h2>Conversación de costes con el proveedor</h2>
<p>El should-cost funciona mejor como lenguaje común que como arma de negociación. En lugar de "su precio es alto", preguntar "ustedes calculan 3 horas de soldadura y nuestro modelo 2; ¿de dónde sale la diferencia?" saca a la luz la información correcta y abre la puerta a mejoras de diseño. A menudo la diferencia está en un cordón en ángulo sobredimensionado, una tolerancia innecesariamente estrecha o una exigencia superficial cara (ver <a href="maliyet-optimizasyon.html">optimización de costes</a>).</p>
<h2>Errores de cálculo frecuentes</h2>
<ul>
<li>Usar el peso neto e ignorar mermas y pérdidas de corte.</li>
<li>Calcular solo el tiempo de arco y olvidar preparación y manipulación.</li>
<li>Ignorar el efecto por pieza del tiempo de preparación en lotes pequeños.</li>
<li>Contar END, informes dimensionales y documentación como cero.</li>
<li>No comprobar la fecha y la validez del precio del material.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> preparamos nuestras ofertas desglosadas en material, soldadura, inspección, tratamiento superficial y entrega. Si tiene un modelo should-cost, con gusto lo comparamos partida por partida y buscamos juntos ahorros en el diseño. <a href="../kaynakli-imalat.html">Fabricación soldada →</a></p></div>
`,
    faq: [
      ['¿Qué es un análisis should-cost?', 'Un método para estimar cuánto debería costar una pieza en un fabricante eficiente a partir de material, mano de obra, procesos y gastos generales.'],
      ['¿Cómo se estima el coste de soldadura?', 'Se obtiene el peso de metal depositado de la sección, se divide por la tasa de deposición para el tiempo de arco y se convierte en tiempo total con el factor de arco.'],
      ['¿El precio objetivo es igual al should-cost?', 'No. El precio objetivo añade al should-cost un beneficio razonable y ajustes por volumen, lote y condiciones de entrega.'],
      ['¿Cuál es el error más común?', 'Omitir mermas y tiempos de preparación y contar END y documentación como cero.']
    ],
    cta_h3: '¿Quiere una oferta con desglose de costes?',
    cta_p: 'Envíe su plano; podrá comparar nuestra oferta desglosada con su modelo should-cost.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Should-cost et prix cible des pièces soudées : combien une pièce devrait-elle coûter ?',
    meta: 'Analyse should-cost pour pièces soudées : décomposition en matière, découpe, pliage, soudage, CND, traitement de surface, frais généraux et marge, construction d\'un prix cible, discussion des coûts avec le fournisseur et erreurs de calcul fréquentes.',
    og: 'Should-cost et prix cible',
    tag: 'Achats · Coûts',
    h1: 'Should-cost et prix cible des pièces soudées : combien une pièce devrait-elle coûter ?',
    crumb: 'Analyse should-cost',
    read: '8 min de lecture',
    body: `
<p>L'analyse should-cost n'estime pas le prix auquel une pièce « se vend », mais ce qu'elle « devrait coûter » chez un fabricant efficace. Les acheteurs l'utilisent pour appuyer la discussion fournisseur sur des chiffres, repérer les devis anormaux et identifier des économies dans la conception. Pour les pièces soudées, la méthode est assez transparente car l'essentiel du coût provient de postes mesurables.</p>
<h2>Décomposition des coûts</h2>
<table>
<thead><tr><th>Poste</th><th>Comment l'estimer</th></tr></thead>
<tbody>
<tr><td>Matière</td><td>Poids brut (chutes comprises) × prix actuel au kg + supplément certificat</td></tr>
<tr><td>Découpe</td><td>Temps laser ou plasma selon longueur de coupe et nombre de trous</td></tr>
<tr><td>Pliage</td><td>Nombre de plis × temps de réglage et d'opération</td></tr>
<tr><td>Préparation et pointage</td><td>Temps selon le nombre de pièces et la complexité d'assemblage</td></tr>
<tr><td>Soudage</td><td>Temps d'arc selon longueur, section et taux de dépôt ; temps total via le facteur de marche</td></tr>
<tr><td>Dressage et meulage</td><td>Marge selon risque de déformation et exigence de surface</td></tr>
<tr><td>Contrôle</td><td>VT, méthode et taux de CND, rapport dimensionnel</td></tr>
<tr><td>Traitement de surface</td><td>Grenaillage, peinture ou galvanisation au m² ou au kg</td></tr>
<tr><td>Emballage et transport</td><td>Selon les conditions de livraison (Incoterm)</td></tr>
<tr><td>Frais généraux et marge</td><td>Inclus dans le taux horaire ou en pourcentage séparé</td></tr>
</tbody>
</table>
<h2>Estimer le temps de soudage</h2>
<p>Le soudage est souvent le poste le plus discuté. Une approche pratique : calculer la masse de métal déposé à partir de la section du cordon, la diviser par le taux de dépôt du procédé, puis diviser le temps d'arc obtenu par le facteur de marche (part du temps total réellement passée à souder). En MAG manuel, ce facteur est généralement faible ; retourner la pièce, nettoyer, changer de position et les contrôles intermédiaires prennent beaucoup de temps. Détails dans <a href="kaynak-maliyeti-hesaplama.html">calcul du coût de soudage</a>.</p>
<h2>Que couvre le taux horaire ?</h2>
<p>Le taux horaire de l'atelier n'est pas seulement le salaire du soudeur. Amortissements, consommables autres que gaz et fil, énergie, bâtiments, contrôle qualité, planification et direction y sont répartis. Le modèle should-cost utilise une fourchette plausible pour le pays et la région ; il ne s'agit pas de connaître exactement le coût interne du fournisseur, mais d'avoir le bon ordre de grandeur.</p>
<h2>Construire un prix cible</h2>
<ol>
<li>Calculer le total should-cost.</li>
<li>Ajouter une marge raisonnable ; une marge proche de zéro ne crée pas une relation fournisseur durable.</li>
<li>Corriger selon le volume, la taille de lot et les conditions de livraison.</li>
<li>Comparer aux devis reçus et discuter des grands écarts poste par poste (voir <a href="kaynakli-parca-teklif-karsilastirma.html">comparer des devis</a>).</li>
</ol>
<h2>Discuter des coûts avec le fournisseur</h2>
<p>Le should-cost est plus utile comme langage commun que comme arme de négociation. Plutôt que « votre prix est trop élevé », demander « vous comptez 3 heures de soudage, notre modèle 2 ; d'où vient l'écart ? » fait émerger la bonne information et ouvre la voie à des améliorations de conception. Souvent, l'écart vient d'une soudure d'angle surdimensionnée, d'une tolérance inutilement serrée ou d'une exigence de surface coûteuse (voir <a href="maliyet-optimizasyon.html">optimisation des coûts</a>).</p>
<h2>Erreurs de calcul fréquentes</h2>
<ul>
<li>Utiliser le poids net et oublier chutes et pertes de découpe.</li>
<li>Calculer seulement le temps d'arc et oublier préparation et manutention.</li>
<li>Ignorer l'effet par pièce du temps de réglage sur les petits lots.</li>
<li>Compter les CND, rapports dimensionnels et documentation pour zéro.</li>
<li>Ne pas vérifier la date et la validité du prix matière.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nos devis sont décomposés en matière, soudage, contrôle, traitement de surface et livraison. Si vous disposez d'un modèle should-cost, nous le comparons volontiers poste par poste et cherchons ensemble des économies de conception. <a href="../kaynakli-imalat.html">Fabrication soudée →</a></p></div>
`,
    faq: [
      ['Qu\'est-ce qu\'une analyse should-cost ?', 'Une méthode pour estimer ce qu\'une pièce devrait coûter chez un fabricant efficace à partir de la matière, de la main-d\'œuvre, des procédés et des frais généraux.'],
      ['Comment estimer le coût du soudage ?', 'On déduit la masse de métal déposé de la section, on la divise par le taux de dépôt pour le temps d\'arc, puis on convertit en temps total avec le facteur de marche.'],
      ['Le prix cible est-il égal au should-cost ?', 'Non. Le prix cible ajoute au should-cost une marge raisonnable et des corrections pour volume, lot et conditions de livraison.'],
      ['Quelle est l\'erreur la plus fréquente ?', 'Oublier chutes et temps de préparation, et compter CND et documentation pour zéro.']
    ],
    cta_h3: 'Un devis avec décomposition des coûts ?',
    cta_p: 'Envoyez votre plan ; vous pourrez comparer notre devis détaillé à votre modèle should-cost.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Should-cost e prezzo obiettivo per parti saldate: quanto dovrebbe costare un pezzo?',
    meta: 'Analisi should-cost per parti saldate: scomposizione in materiale, taglio, piegatura, saldatura, CND, trattamento superficiale, spese generali e margine, come costruire un prezzo obiettivo, confronto sui costi con il fornitore ed errori frequenti.',
    og: 'Should-cost e prezzo obiettivo',
    tag: 'Acquisti · Costi',
    h1: 'Should-cost e prezzo obiettivo per parti saldate: quanto dovrebbe costare un pezzo?',
    crumb: 'Analisi should-cost',
    read: '8 min di lettura',
    body: `
<p>L'analisi should-cost non stima a quanto un pezzo "si vende", ma quanto "dovrebbe costare" presso un produttore efficiente. Gli uffici acquisti la usano per basare sui numeri il confronto con il fornitore, individuare offerte anomale e trovare risparmi nel progetto. Per le parti saldate il metodo è piuttosto trasparente, perché gran parte del costo deriva da voci misurabili.</p>
<h2>Scomposizione dei costi</h2>
<table>
<thead><tr><th>Voce</th><th>Come stimarla</th></tr></thead>
<tbody>
<tr><td>Materiale</td><td>Peso lordo (sfridi inclusi) × prezzo attuale al kg + supplemento certificato</td></tr>
<tr><td>Taglio</td><td>Tempo laser o plasma da lunghezza di taglio e numero di fori</td></tr>
<tr><td>Piegatura</td><td>Numero di pieghe × tempo di attrezzaggio e lavorazione</td></tr>
<tr><td>Preparazione e puntatura</td><td>Tempo secondo numero di pezzi e complessità di assemblaggio</td></tr>
<tr><td>Saldatura</td><td>Tempo d'arco da lunghezza, sezione e tasso di deposito; tempo totale tramite fattore d'arco</td></tr>
<tr><td>Raddrizzatura e molatura</td><td>Margine secondo rischio di distorsione e requisito superficiale</td></tr>
<tr><td>Controllo</td><td>VT, metodo e percentuale CND, rapporto dimensionale</td></tr>
<tr><td>Trattamento superficiale</td><td>Sabbiatura, verniciatura o zincatura per m² o kg</td></tr>
<tr><td>Imballo e trasporto</td><td>Secondo la resa (Incoterm)</td></tr>
<tr><td>Spese generali e margine</td><td>Incluse nella tariffa oraria o come percentuale separata</td></tr>
</tbody>
</table>
<h2>Stimare il tempo di saldatura</h2>
<p>La saldatura è di solito la voce più discussa. Un approccio pratico: calcolare il peso del metallo depositato dalla sezione del cordone, dividerlo per il tasso di deposito del processo e dividere il tempo d'arco ottenuto per il fattore d'arco (quota del tempo totale effettivamente dedicata a saldare). Nella MAG manuale questo fattore è in genere basso; ribaltare il pezzo, pulire, cambiare posizione e i controlli intermedi richiedono molto tempo. Dettagli in <a href="kaynak-maliyeti-hesaplama.html">calcolo del costo di saldatura</a>.</p>
<h2>Cosa copre la tariffa oraria?</h2>
<p>La tariffa oraria dell'officina non è solo il salario del saldatore. Vi sono ripartiti ammortamenti, consumabili diversi da gas e filo, energia, edifici, controllo qualità, pianificazione e direzione. Il modello should-cost usa un intervallo plausibile per paese e regione; lo scopo non è conoscere esattamente il costo interno del fornitore, ma cogliere l'ordine di grandezza.</p>
<h2>Come costruire un prezzo obiettivo</h2>
<ol>
<li>Calcolare il totale should-cost.</li>
<li>Aggiungere un margine ragionevole; un margine vicino a zero non crea un rapporto di fornitura sostenibile.</li>
<li>Correggere per volume, dimensione del lotto e resa.</li>
<li>Confrontare con le offerte ricevute e discutere le grandi differenze voce per voce (vedi <a href="kaynakli-parca-teklif-karsilastirma.html">confronto offerte</a>).</li>
</ol>
<h2>Discutere i costi con il fornitore</h2>
<p>Lo should-cost funziona meglio come linguaggio comune che come arma negoziale. Invece di "il vostro prezzo è alto", chiedere "voi calcolate 3 ore di saldatura, il nostro modello 2; da dove nasce la differenza?" fa emergere le informazioni giuste e apre la strada a miglioramenti di progetto. Spesso la differenza sta in una saldatura d'angolo sovradimensionata, una tolleranza inutilmente stretta o un requisito superficiale costoso (vedi <a href="maliyet-optimizasyon.html">ottimizzazione dei costi</a>).</p>
<h2>Errori di calcolo frequenti</h2>
<ul>
<li>Usare il peso netto e ignorare sfridi e perdite di taglio.</li>
<li>Calcolare solo il tempo d'arco dimenticando preparazione e movimentazione.</li>
<li>Ignorare l'effetto per pezzo del tempo di attrezzaggio nei piccoli lotti.</li>
<li>Considerare CND, rapporti dimensionali e documentazione a costo zero.</li>
<li>Non verificare data e validità del prezzo del materiale.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> prepariamo le offerte suddivise in materiale, saldatura, controllo, trattamento superficiale e consegna. Se avete un modello should-cost, lo confrontiamo volentieri voce per voce e cerchiamo insieme risparmi nel progetto. <a href="../kaynakli-imalat.html">Carpenteria saldata →</a></p></div>
`,
    faq: [
      ['Cos\'è un\'analisi should-cost?', 'Un metodo per stimare quanto dovrebbe costare un pezzo presso un produttore efficiente partendo da materiale, manodopera, processi e spese generali.'],
      ['Come si stima il costo della saldatura?', 'Si ricava il peso del metallo depositato dalla sezione, lo si divide per il tasso di deposito per ottenere il tempo d\'arco e lo si converte in tempo totale con il fattore d\'arco.'],
      ['Il prezzo obiettivo coincide con lo should-cost?', 'No. Il prezzo obiettivo aggiunge allo should-cost un margine ragionevole e correzioni per volume, lotto e resa.'],
      ['Qual è l\'errore più comune?', 'Tralasciare sfridi e tempi di preparazione e considerare CND e documentazione a costo zero.']
    ],
    cta_h3: 'Volete un\'offerta con scomposizione dei costi?',
    cta_p: 'Inviate il disegno; potrete confrontare la nostra offerta dettagliata con il vostro modello should-cost.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Should-cost en doelprijs voor gelaste onderdelen: wat zou een onderdeel moeten kosten?',
    meta: 'Should-cost-analyse voor gelaste onderdelen: kostenopbouw uit materiaal, snijden, zetten, lassen, NDO, oppervlaktebehandeling, overhead en winst, een doelprijs opstellen, kostengesprekken met leveranciers en veelgemaakte rekenfouten.',
    og: 'Should-cost en doelprijs',
    tag: 'Inkoop · Kosten',
    h1: 'Should-cost en doelprijs voor gelaste onderdelen: wat zou een onderdeel moeten kosten?',
    crumb: 'Should-cost-analyse',
    read: '8 min lezen',
    body: `
<p>Een should-cost-analyse schat niet waarvoor een onderdeel "verkocht wordt", maar wat het bij een efficiënte producent "zou moeten kosten". Inkoopteams gebruiken het om leveranciersgesprekken op cijfers te baseren, afwijkende offertes te herkennen en besparingen in het ontwerp te vinden. Bij gelaste onderdelen is de methode vrij transparant, omdat het grootste deel van de kosten uit meetbare posten komt.</p>
<h2>Kostenopbouw</h2>
<table>
<thead><tr><th>Post</th><th>Hoe schatten</th></tr></thead>
<tbody>
<tr><td>Materiaal</td><td>Brutogewicht (incl. snijverlies) × actuele kg-prijs + certificaattoeslag</td></tr>
<tr><td>Snijden</td><td>Laser- of plasmatijd uit snijlengte en aantal gaten</td></tr>
<tr><td>Zetten</td><td>Aantal zettingen × insteltijd en bewerkingstijd</td></tr>
<tr><td>Voorbereiden en hechten</td><td>Tijd naar aantal delen en complexiteit van de samenbouw</td></tr>
<tr><td>Lassen</td><td>Boogtijd uit naadlengte, doorsnede en neersmeltsnelheid; totale tijd via boogtijdfactor</td></tr>
<tr><td>Richten en slijpen</td><td>Opslag naar vervormingsrisico en oppervlakte-eis</td></tr>
<tr><td>Inspectie</td><td>VT, NDO-methode en percentage, maatrapport</td></tr>
<tr><td>Oppervlaktebehandeling</td><td>Stralen, lakken of verzinken per m² of kg</td></tr>
<tr><td>Verpakking en transport</td><td>Volgens leveringsvoorwaarden (Incoterm)</td></tr>
<tr><td>Overhead en winst</td><td>In het uurtarief of als apart percentage</td></tr>
</tbody>
</table>
<h2>Lastijd schatten</h2>
<p>Lassen is meestal de meest besproken post. Een praktische aanpak: bereken het neergesmolten lasmetaal uit de naaddoorsnede, deel door de neersmeltsnelheid van het proces en deel de gevonden boogtijd door de boogtijdfactor (het deel van de totale werktijd dat echt gelast wordt). Bij handmatig MAG-lassen is die factor meestal laag; keren, reinigen, van positie wisselen en tussentijdse controles kosten veel tijd. Meer in <a href="kaynak-maliyeti-hesaplama.html">laskosten berekenen</a>.</p>
<h2>Wat dekt het uurtarief?</h2>
<p>Het uurtarief van een werkplaats is niet alleen het loon van de lasser. Afschrijving, verbruiksmateriaal naast gas en draad, energie, gebouwen, kwaliteitscontrole, planning en management worden erover verdeeld. Een should-cost-model gebruikt een redelijke bandbreedte voor land en regio; het doel is niet de interne kosten van de leverancier precies te kennen, maar de orde van grootte goed te hebben.</p>
<h2>Een doelprijs opstellen</h2>
<ol>
<li>Bepaal het should-cost-totaal.</li>
<li>Tel een redelijke marge op; uitgaan van een marge rond nul levert geen duurzame leveranciersrelatie op.</li>
<li>Corrigeer voor volume, seriegrootte en leveringsvoorwaarden.</li>
<li>Vergelijk met de ontvangen offertes en bespreek grote afwijkingen per post (zie <a href="kaynakli-parca-teklif-karsilastirma.html">offertes vergelijken</a>).</li>
</ol>
<h2>Kostengesprekken met de leverancier</h2>
<p>Should-cost werkt het best als gemeenschappelijke taal, niet als onderhandelingswapen. In plaats van "uw prijs is te hoog" vragen: "u rekent 3 uur lassen, ons model 2; waar zit het verschil?" brengt de juiste informatie boven en opent de deur naar ontwerpverbeteringen. Vaak zit het verschil in een te zware hoeklas, een onnodig nauwe tolerantie of een dure oppervlakte-eis (zie <a href="maliyet-optimizasyon.html">kostenoptimalisatie</a>).</p>
<h2>Veelgemaakte rekenfouten</h2>
<ul>
<li>Nettogewicht gebruiken en snijverlies vergeten.</li>
<li>Alleen boogtijd rekenen en voorbereiding en handling vergeten.</li>
<li>Het effect per stuk van insteltijd bij kleine series negeren.</li>
<li>NDO, maatrapporten en documentatie op nul zetten.</li>
<li>Datum en geldigheid van de materiaalprijs niet controleren.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> onze offertes zijn opgesplitst in materiaal, lassen, inspectie, oppervlaktebehandeling en levering. Heeft u een should-cost-model, dan vergelijken we graag post voor post en zoeken we samen naar besparingen in het ontwerp. <a href="../kaynakli-imalat.html">Laswerk →</a></p></div>
`,
    faq: [
      ['Wat is een should-cost-analyse?', 'Een methode om uit materiaal, arbeid, processen en overhead te schatten wat een onderdeel bij een efficiënte producent zou moeten kosten.'],
      ['Hoe schat je laskosten?', 'Bereken het lasmetaal uit de doorsnede, deel door de neersmeltsnelheid voor de boogtijd en reken via de boogtijdfactor om naar totale tijd.'],
      ['Is de doelprijs gelijk aan should-cost?', 'Nee. De doelprijs voegt aan het should-cost-totaal een redelijke marge en correcties voor volume, serie en levering toe.'],
      ['Wat is de meest gemaakte fout?', 'Snijverlies en voorbereidingstijd weglaten en NDO en documentatie op nul zetten.']
    ],
    cta_h3: 'Een offerte met kostenopbouw?',
    cta_p: 'Stuur uw tekening; u kunt onze uitgesplitste offerte naast uw should-cost-model leggen.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Should-cost og målpris for sveiste deler: hva bør en del koste?',
    meta: 'Should-cost-analyse for sveiste deler: kostnadsfordeling på materiale, skjæring, bukking, sveising, NDT, overflatebehandling, indirekte kostnader og fortjeneste, hvordan målpris settes, kostnadsdialog med leverandør og vanlige regnefeil.',
    og: 'Should-cost og målpris',
    tag: 'Innkjøp · Kostnad',
    h1: 'Should-cost og målpris for sveiste deler: hva bør en del koste?',
    crumb: 'Should-cost-analyse',
    read: '8 min lesing',
    body: `
<p>En should-cost-analyse anslår ikke hva en del «selges for», men hva den «bør koste» hos en effektiv produsent. Innkjøpsavdelinger bruker metoden for å basere leverandørdialogen på tall, oppdage unormale tilbud og finne kostnadsbesparelser i konstruksjonen. For sveiste deler er metoden ganske gjennomsiktig, fordi det meste av kostnaden kommer fra målbare poster.</p>
<h2>Kostnadsfordeling</h2>
<table>
<thead><tr><th>Post</th><th>Slik anslås den</th></tr></thead>
<tbody>
<tr><td>Materiale</td><td>Bruttovekt (inkl. svinn) × dagens kilopris + sertifikattillegg</td></tr>
<tr><td>Skjæring</td><td>Laser- eller plasmatid fra skjærelengde og antall hull</td></tr>
<tr><td>Bukking</td><td>Antall bukk × oppsett- og operasjonstid</td></tr>
<tr><td>Forberedelse og heftsveising</td><td>Tid etter antall deler og hvor komplisert sammenstillingen er</td></tr>
<tr><td>Sveising</td><td>Lysbuetid fra sveiselengde, tverrsnitt og avsetningsrate; total tid via lysbuefaktor</td></tr>
<tr><td>Retting og sliping</td><td>Tillegg etter deformasjonsrisiko og overflatekrav</td></tr>
<tr><td>Kontroll</td><td>VT, NDT-metode og omfang, målerapport</td></tr>
<tr><td>Overflatebehandling</td><td>Blåsing, maling eller galvanisering per m² eller kg</td></tr>
<tr><td>Emballasje og frakt</td><td>Etter leveringsbetingelse (Incoterm)</td></tr>
<tr><td>Indirekte kostnader og fortjeneste</td><td>I timeprisen eller som egen prosent</td></tr>
</tbody>
</table>
<h2>Anslå sveisetid</h2>
<p>Sveising er som regel den mest omdiskuterte posten. En praktisk tilnærming: beregn mengden sveisemetall fra sveisens tverrsnitt, del på prosessens avsetningsrate, og del lysbuetiden du får på en lysbuefaktor (andelen av total arbeidstid som faktisk er sveising). Ved manuell MAG-sveising er denne faktoren normalt lav; vending, rengjøring, posisjonsbytte og mellomkontroller tar mye tid. Se <a href="kaynak-maliyeti-hesaplama.html">beregning av sveisekostnad</a>.</p>
<h2>Hva dekker timeprisen?</h2>
<p>Verkstedets timepris er ikke bare sveiserens lønn. Avskrivninger, forbruksmateriell utover gass og tråd, energi, bygg, kvalitetskontroll, planlegging og ledelse fordeles på den. En should-cost-modell bruker et rimelig spenn for land og region; målet er ikke å kjenne leverandørens interne kostnad nøyaktig, men å treffe størrelsesordenen.</p>
<h2>Slik setter du en målpris</h2>
<ol>
<li>Finn should-cost-summen.</li>
<li>Legg til en rimelig margin; å anta margin nær null gir ikke et bærekraftig leverandørforhold.</li>
<li>Juster for volum, partistørrelse og leveringsbetingelse.</li>
<li>Sammenlign med innkomne tilbud og diskuter store avvik post for post (se <a href="kaynakli-parca-teklif-karsilastirma.html">sammenligne tilbud</a>).</li>
</ol>
<h2>Kostnadsdialog med leverandøren</h2>
<p>Should-cost fungerer best som et felles språk, ikke som forhandlingsvåpen. I stedet for «prisen deres er for høy» kan man spørre: «dere regner 3 timer sveising, vår modell 2; hvor kommer forskjellen fra?» Det får fram riktig informasjon og åpner for konstruksjonsforbedringer. Ofte ligger forskjellen i en overdimensjonert kilsveis, en unødig stram toleranse eller et dyrt overflatekrav (se <a href="maliyet-optimizasyon.html">kostnadsoptimalisering</a>).</p>
<h2>Vanlige regnefeil</h2>
<ul>
<li>Å bruke nettovekt og glemme svinn og skjæretap.</li>
<li>Å regne bare lysbuetid og glemme forberedelse og håndtering.</li>
<li>Å overse effekten av oppsettstid per del i små partier.</li>
<li>Å sette NDT, målerapporter og dokumentasjon til null.</li>
<li>Å ikke sjekke dato og gyldighet for materialprisen.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> tilbudene våre er delt opp i materiale, sveising, kontroll, overflatebehandling og levering. Har du en should-cost-modell, sammenligner vi gjerne post for post og ser etter besparelser i konstruksjonen sammen med deg. <a href="../kaynakli-imalat.html">Sveiseproduksjon →</a></p></div>
`,
    faq: [
      ['Hva er en should-cost-analyse?', 'En metode for å anslå hva en del bør koste hos en effektiv produsent, ut fra materiale, arbeid, prosesser og indirekte kostnader.'],
      ['Hvordan anslås sveisekostnaden?', 'Mengden sveisemetall beregnes fra tverrsnittet, deles på avsetningsraten for lysbuetid og regnes om til total tid med lysbuefaktoren.'],
      ['Er målpris det samme som should-cost?', 'Nei. Målprisen legger rimelig margin og justeringer for volum, parti og leveringsbetingelse til should-cost-summen.'],
      ['Hva er den vanligste feilen?', 'Å utelate svinn og forberedelsestid og sette NDT og dokumentasjon til null.']
    ],
    cta_h3: 'Vil du ha et tilbud med kostnadsfordeling?',
    cta_p: 'Send tegningen; du kan sammenligne vårt oppdelte tilbud med din should-cost-modell.',
    cta_btn: 'Be om tilbud →'
  }
};
