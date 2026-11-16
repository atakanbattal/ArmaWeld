export default {
  order: 67,
  slug: 'tedarikci-performans-kpi-otd-ppm',
  key: 'p67_kpi',
  date: '2025-12-29',
  keywords: 'tedarikçi performans göstergeleri, OTD, zamanında teslim oranı, PPM hata oranı, tedarikçi karnesi, supplier scorecard, supplier KPI welding, Lieferantenbewertung Liefertreue PPM, KPI proveedor entrega a tiempo, indicateurs fournisseur taux de service',
  related: ['kaynakli-imalat-tedarikci-denetimi', 'uygunsuzluk-raporu-ncr-8d-kaynakli-imalat', 'kaynakli-imalat-teslim-suresi-planlama', 'fason-kaynak-tedarikci-secimi'],
  tr: {
    title: 'Kaynak Tedarikçisi Performans Göstergeleri: OTD, PPM ve Tedarikçi Karnesi',
    meta: 'Kaynaklı parça tedarikçisini ölçmek için kullanılan göstergeler: zamanında teslim (OTD), PPM ve red oranı, 8D kapanış süresi, dokümantasyon doğruluğu, teklif yanıt süresi; doğru tanımlar, hesaplama örnekleri ve tedarikçi karnesi hazırlama.',
    og: 'Tedarikçi KPI: OTD ve PPM',
    tag: 'Satın Alma · Kalite',
    h1: 'Kaynak Tedarikçisi Performans Göstergeleri: OTD, PPM ve Tedarikçi Karnesi',
    crumb: 'Tedarikçi KPI',
    read: '7 dk okuma',
    body: `
<p>"Bu tedarikçi iyi mi?" sorusunun cevabı hislere değil rakamlara dayanmalıdır. Tedarikçi karnesi, satın alma ve kalite ekiplerinin aynı veriye bakarak konuşmasını sağlar. Ancak bir göstergenin işe yaraması için tanımının net olması gerekir; aksi halde tedarikçi %98 zamanında teslim derken müşteri %80 görebilir.</p>
<h2>Temel Göstergeler</h2>
<table>
<thead><tr><th>Gösterge</th><th>Tanım</th><th>Dikkat edilecek nokta</th></tr></thead>
<tbody>
<tr><td>OTD (zamanında teslim)</td><td>Zamanında teslim edilen sipariş satırı / toplam sipariş satırı</td><td>Hangi tarih esas: ilk onaylanan mı, revize edilen mi?</td></tr>
<tr><td>OTIF</td><td>Zamanında ve tam miktarda teslim edilen satırlar</td><td>Eksik teslim OTD'de görünmez, OTIF'te görünür</td></tr>
<tr><td>PPM</td><td>Reddedilen parça / teslim edilen parça × 1.000.000</td><td>Büyük ve az adetli parçalarda PPM yanıltıcı olabilir</td></tr>
<tr><td>Uygunsuzluk sayısı</td><td>Dönem içinde açılan NCR adedi</td><td>Düşük adetli işlerde PPM'den daha anlamlı</td></tr>
<tr><td>8D kapanış süresi</td><td>Şikâyetten etkili kapanışa kadar geçen gün</td><td>Geçici önlem ve kalıcı çözüm ayrı ölçülmeli</td></tr>
<tr><td>Dokümantasyon doğruluğu</td><td>Eksiksiz ve doğru belgeyle gelen sevkiyat oranı</td><td>Sertifika, ölçüm ve NDT raporu ayrı ayrı izlenebilir</td></tr>
<tr><td>Teklif yanıt süresi</td><td>Teklif talebinden teklife kadar geçen gün</td><td>Proje işlerinde önemli bir hız göstergesi</td></tr>
</tbody>
</table>
<h2>OTD'yi Doğru Tanımlamak</h2>
<p>OTD tartışmalarının çoğu tanım farkından çıkar. Netleştirilmesi gerekenler:</p>
<ul>
<li><strong>Referans tarih:</strong> tedarikçinin onayladığı ilk tarih mi, sonradan anlaşılan tarih mi? Sürekli revize edilen tarihlere göre ölçmek performansı olduğundan iyi gösterir.</li>
<li><strong>Tolerans penceresi:</strong> örneğin 2 gün erken ile 0 gün geç arası "zamanında" sayılabilir. Çok erken teslim de depo sorunu yaratabilir.</li>
<li><strong>Ölçüm noktası:</strong> tedarikçiden çıkış mı, müşteriye varış mı? EXW ve DAP teslimlerde fark büyüktür.</li>
<li><strong>Birim:</strong> sipariş satırı mı, adet mi? Bir satırda 100 parçadan 99'u gelmişse satır bazında geç sayılır.</li>
</ul>
<h2>PPM Kaynaklı Parçalarda Ne Kadar Anlamlı?</h2>
<p>PPM, yüksek adetli küçük parçalarda güçlü bir göstergedir. Ancak yılda birkaç yüz adet büyük şasi alınıyorsa tek bir red PPM değerini binlerle ifade eder ve göstergeyi oynak hale getirir. Bu tür işlerde NCR sayısı, tamir saatleri ve hatanın tipi (ölçü, kaynak, yüzey, doküman) daha faydalı bilgi verir. Hata tipine göre ayrım, kök nedeni bulmayı da kolaylaştırır (bkz. <a href="uygunsuzluk-raporu-ncr-8d-kaynakli-imalat.html">NCR ve 8D</a>).</p>
<h2>Örnek Hesap</h2>
<p>Bir çeyrekte 40 sipariş satırı açılmış, 36'sı anlaşılan tarih penceresinde teslim edilmiş, 2'si tam miktarda gelmemiş olsun. OTD = 36/40 = %90. Tam miktar şartı eklenince OTIF = 34/40 = %85. Aynı dönemde 1.200 parça teslim edilmiş ve 3 parça reddedilmişse PPM = 3/1.200 × 1.000.000 = 2.500.</p>
<h2>Tedarikçi Karnesi Hazırlarken</h2>
<ul>
<li>Az ama doğru gösterge seçin; on beş göstergeli karne kimse tarafından okunmaz.</li>
<li>Her göstergenin tanımını tedarikçiyle paylaşın ve onun verisiyle karşılaştırın.</li>
<li>Ağırlıklandırmayı açık yapın (ör. teslim %40, kalite %40, iletişim ve doküman %20).</li>
<li>Trendi gösterin; tek bir kötü ay yerine üç-altı aylık eğilim daha anlamlıdır.</li>
<li>Karneyi düzenli bir toplantıda konuşun; sadece e-postayla göndermek değişiklik yaratmaz.</li>
</ul>
<h2>Göstergeler Neyi Göstermez?</h2>
<p>İyi bir karne, tedarikçinin her zaman doğru parçayı ürettiğini garanti etmez. Tedarikçi denetimleri, süreç incelemeleri ve kritik parçalar için ara muayeneler göstergeleri tamamlar (bkz. <a href="kaynakli-imalat-tedarikci-denetimi.html">tedarikçi denetimi</a>). Ayrıca müşteri kaynaklı gecikmeler, örneğin geç gelen çizim revizyonları veya onay beklemeleri, ayrı kayıt altına alınmalıdır; aksi halde tedarikçiye haksız puan düşer.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Siparişlerin üretim aşamalarını, sevkiyatlarını ve kalite belgelerini müşteri portalımızda gösteriyoruz; teslim ve kalite verisini karnenizle karşılaştırmanız kolaylaşıyor. Müşterilerimizin karne tanımlarını sipariş başında konuşmayı tercih ediyoruz. <a href="../musteri-portali.html">Müşteri portalı →</a></p></div>
`,
    faq: [
      ['OTD nedir?', 'Zamanında teslim edilen sipariş satırlarının toplam sipariş satırlarına oranıdır; referans tarih ve tolerans penceresi net tanımlanmalıdır.'],
      ['OTD ile OTIF farkı nedir?', 'OTIF, zamanında olmanın yanında tam miktarda teslimi de şart koşar; eksik teslimler OTIF\'te görünür.'],
      ['PPM nasıl hesaplanır?', 'Reddedilen parça sayısı teslim edilen parça sayısına bölünür ve 1.000.000 ile çarpılır.'],
      ['Az adetli büyük parçalarda hangi gösterge daha iyi?', 'NCR sayısı, tamir saatleri ve hata tipine göre dağılım, PPM\'den daha anlamlı bilgi verir.']
    ],
    cta_h3: 'Ölçülebilir bir tedarikçi mi arıyorsunuz?',
    cta_p: 'Karne tanımlarınızı ve parçalarınızı paylaşın; teslim ve kalite verisini nasıl raporlayacağımızı birlikte belirleyelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Welding Supplier Performance KPIs: OTD, PPM and the Supplier Scorecard',
    meta: 'Indicators for measuring a welded parts supplier: on-time delivery (OTD), PPM and reject rate, 8D closure time, documentation accuracy, quote response time; clear definitions, calculation examples and how to build a supplier scorecard.',
    og: 'Supplier KPIs: OTD and PPM',
    tag: 'Purchasing · Quality',
    h1: 'Welding Supplier Performance KPIs: OTD, PPM and the Supplier Scorecard',
    crumb: 'Supplier KPIs',
    read: '7 min read',
    body: `
<p>The answer to "is this supplier good?" should rest on numbers, not feelings. A supplier scorecard lets purchasing and quality teams discuss the same data. But an indicator only works if its definition is clear; otherwise the supplier reports 98% on-time delivery while the customer sees 80%.</p>
<h2>Key Indicators</h2>
<table>
<thead><tr><th>Indicator</th><th>Definition</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>OTD (on-time delivery)</td><td>Order lines delivered on time / total order lines</td><td>Which date counts: first confirmed or revised?</td></tr>
<tr><td>OTIF</td><td>Lines delivered on time and in full</td><td>Short deliveries are invisible in OTD but visible in OTIF</td></tr>
<tr><td>PPM</td><td>Rejected parts / delivered parts × 1,000,000</td><td>Can mislead for large, low-volume parts</td></tr>
<tr><td>Number of non-conformities</td><td>NCRs opened in the period</td><td>More meaningful than PPM for low volumes</td></tr>
<tr><td>8D closure time</td><td>Days from complaint to effective closure</td><td>Measure containment and permanent fix separately</td></tr>
<tr><td>Documentation accuracy</td><td>Share of shipments arriving with complete, correct documents</td><td>Track certificates, dimensional and NDT reports separately</td></tr>
<tr><td>Quote response time</td><td>Days from RFQ to quote</td><td>An important speed indicator for project work</td></tr>
</tbody>
</table>
<h2>Defining OTD Correctly</h2>
<p>Most OTD disputes come from definitions. Points to clarify:</p>
<ul>
<li><strong>Reference date:</strong> the first date confirmed by the supplier, or a date agreed later? Measuring against constantly revised dates makes performance look better than it is.</li>
<li><strong>Tolerance window:</strong> for example, 2 days early to 0 days late counts as "on time". Very early deliveries can also cause warehouse problems.</li>
<li><strong>Measurement point:</strong> leaving the supplier, or arriving at the customer? The difference is large between EXW and DAP.</li>
<li><strong>Unit:</strong> order line or quantity? If 99 of 100 parts on a line arrive, the line is late.</li>
</ul>
<h2>How Meaningful Is PPM for Welded Parts?</h2>
<p>PPM is a strong indicator for small parts in high volumes. But if a few hundred large frames are bought per year, a single rejection puts PPM in the thousands and makes the indicator volatile. For this kind of work, the number of NCRs, repair hours and defect type (dimensional, weld, surface, documentation) are more useful. Sorting by defect type also makes root causes easier to find (see <a href="uygunsuzluk-raporu-ncr-8d-kaynakli-imalat.html">NCR and 8D</a>).</p>
<h2>Example Calculation</h2>
<p>In one quarter 40 order lines were opened, 36 were delivered within the agreed date window and 2 arrived short. OTD = 36/40 = 90%. Adding the in-full condition gives OTIF = 34/40 = 85%. If 1,200 parts were delivered in the same period and 3 were rejected, PPM = 3/1,200 × 1,000,000 = 2,500.</p>
<h2>Building a Supplier Scorecard</h2>
<ul>
<li>Choose few but correct indicators; a fifteen-indicator scorecard is read by nobody.</li>
<li>Share each definition with the supplier and compare it with their data.</li>
<li>Make the weighting explicit (e.g. delivery 40%, quality 40%, communication and documentation 20%).</li>
<li>Show the trend; a three-to-six-month trend says more than one bad month.</li>
<li>Discuss the scorecard in a regular meeting; just e-mailing it changes nothing.</li>
</ul>
<h2>What Indicators Do Not Show</h2>
<p>A good scorecard does not guarantee that the supplier always makes the right part. Supplier audits, process reviews and in-process inspections for critical parts complement the indicators (see <a href="kaynakli-imalat-tedarikci-denetimi.html">supplier audits</a>). Customer-caused delays, such as late drawing revisions or pending approvals, should also be recorded separately; otherwise the supplier is marked down unfairly.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> our customer portal shows the production stages, shipments and quality documents of each order, which makes it easy to compare delivery and quality data with your scorecard. We prefer to agree scorecard definitions with customers at the start of an order. <a href="../musteri-portali.html">Customer portal →</a></p></div>
`,
    faq: [
      ['What is OTD?', 'The share of order lines delivered on time out of all order lines; the reference date and tolerance window must be clearly defined.'],
      ['What is the difference between OTD and OTIF?', 'OTIF also requires delivery in full; short deliveries show up in OTIF.'],
      ['How is PPM calculated?', 'Rejected parts divided by delivered parts, multiplied by 1,000,000.'],
      ['Which indicator suits large, low-volume parts?', 'Number of NCRs, repair hours and defect-type breakdown are more meaningful than PPM.']
    ],
    cta_h3: 'Looking for a supplier you can measure?',
    cta_p: 'Share your scorecard definitions and parts; we will agree with you how to report delivery and quality data.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Kennzahlen für Schweißlieferanten: Liefertreue, PPM und Lieferantenbewertung',
    meta: 'Kennzahlen zur Bewertung eines Lieferanten für Schweißteile: Liefertreue (OTD), PPM und Ausschussquote, 8D-Abschlusszeit, Dokumentationsqualität, Angebotsreaktionszeit; klare Definitionen, Rechenbeispiele und Aufbau einer Lieferantenbewertung.',
    og: 'Lieferanten-KPI: Liefertreue und PPM',
    tag: 'Einkauf · Qualität',
    h1: 'Kennzahlen für Schweißlieferanten: Liefertreue, PPM und Lieferantenbewertung',
    crumb: 'Lieferanten-KPI',
    read: '7 Min. Lesezeit',
    body: `
<p>Die Antwort auf „Ist dieser Lieferant gut?" sollte auf Zahlen beruhen, nicht auf Bauchgefühl. Eine Lieferantenbewertung sorgt dafür, dass Einkauf und Qualität über dieselben Daten sprechen. Eine Kennzahl funktioniert aber nur mit klarer Definition; sonst meldet der Lieferant 98 % Liefertreue, während der Kunde 80 % sieht.</p>
<h2>Wichtige Kennzahlen</h2>
<table>
<thead><tr><th>Kennzahl</th><th>Definition</th><th>Worauf achten</th></tr></thead>
<tbody>
<tr><td>Liefertreue (OTD)</td><td>Pünktlich gelieferte Bestellpositionen / alle Bestellpositionen</td><td>Welcher Termin gilt: erster bestätigter oder geänderter?</td></tr>
<tr><td>OTIF</td><td>Pünktlich und vollständig gelieferte Positionen</td><td>Teillieferungen fallen in OTD nicht auf, in OTIF schon</td></tr>
<tr><td>PPM</td><td>Beanstandete Teile / gelieferte Teile × 1.000.000</td><td>Bei großen Teilen in kleinen Stückzahlen irreführend</td></tr>
<tr><td>Anzahl Abweichungen</td><td>Im Zeitraum eröffnete Abweichungsberichte</td><td>Bei kleinen Mengen aussagekräftiger als PPM</td></tr>
<tr><td>8D-Abschlusszeit</td><td>Tage von Reklamation bis wirksamem Abschluss</td><td>Sofortmaßnahme und Abstellmaßnahme getrennt messen</td></tr>
<tr><td>Dokumentationsqualität</td><td>Anteil der Lieferungen mit vollständigen, korrekten Unterlagen</td><td>Zeugnisse, Mess- und ZfP-Berichte getrennt verfolgen</td></tr>
<tr><td>Angebotsreaktionszeit</td><td>Tage von Anfrage bis Angebot</td><td>Wichtiger Geschwindigkeitsindikator im Projektgeschäft</td></tr>
</tbody>
</table>
<h2>Liefertreue richtig definieren</h2>
<p>Die meisten Diskussionen über Liefertreue entstehen aus unterschiedlichen Definitionen. Zu klären sind:</p>
<ul>
<li><strong>Referenztermin:</strong> erster vom Lieferanten bestätigter Termin oder später vereinbarter? Wer gegen ständig verschobene Termine misst, beschönigt die Leistung.</li>
<li><strong>Toleranzfenster:</strong> z. B. 2 Tage zu früh bis 0 Tage zu spät gilt als „pünktlich". Sehr frühe Lieferungen können ebenfalls Lagerprobleme verursachen.</li>
<li><strong>Messpunkt:</strong> Warenausgang beim Lieferanten oder Wareneingang beim Kunden? Bei EXW und DAP ist der Unterschied groß.</li>
<li><strong>Einheit:</strong> Bestellposition oder Stückzahl? Kommen 99 von 100 Teilen einer Position, ist die Position verspätet.</li>
</ul>
<h2>Wie aussagekräftig ist PPM bei Schweißteilen?</h2>
<p>PPM ist bei kleinen Teilen in hohen Stückzahlen eine starke Kennzahl. Werden aber nur einige hundert große Rahmen pro Jahr bezogen, treibt eine einzige Beanstandung den PPM-Wert in die Tausende und macht ihn sprunghaft. Hier sind Anzahl der Abweichungen, Nacharbeitsstunden und Fehlerart (Maß, Naht, Oberfläche, Dokumentation) nützlicher. Die Gliederung nach Fehlerart erleichtert auch die Ursachensuche (siehe <a href="uygunsuzluk-raporu-ncr-8d-kaynakli-imalat.html">NCR und 8D</a>).</p>
<h2>Rechenbeispiel</h2>
<p>In einem Quartal wurden 40 Bestellpositionen eröffnet, 36 im vereinbarten Terminfenster geliefert und 2 unvollständig. Liefertreue = 36/40 = 90 %. Mit der Vollständigkeitsbedingung ergibt sich OTIF = 34/40 = 85 %. Wurden im selben Zeitraum 1.200 Teile geliefert und 3 beanstandet, gilt PPM = 3/1.200 × 1.000.000 = 2.500.</p>
<h2>Eine Lieferantenbewertung aufbauen</h2>
<ul>
<li>Wenige, aber richtige Kennzahlen wählen; eine Bewertung mit fünfzehn Kennzahlen liest niemand.</li>
<li>Jede Definition mit dem Lieferanten teilen und mit dessen Daten abgleichen.</li>
<li>Gewichtung offenlegen (z. B. Lieferung 40 %, Qualität 40 %, Kommunikation und Dokumentation 20 %).</li>
<li>Den Trend zeigen; drei bis sechs Monate sagen mehr als ein schlechter Monat.</li>
<li>Die Bewertung in einem regelmäßigen Termin besprechen; nur per E-Mail verschickt bewirkt sie nichts.</li>
</ul>
<h2>Was Kennzahlen nicht zeigen</h2>
<p>Eine gute Bewertung garantiert nicht, dass der Lieferant immer das richtige Teil fertigt. Lieferantenaudits, Prozessprüfungen und Zwischenprüfungen bei kritischen Teilen ergänzen die Kennzahlen (siehe <a href="kaynakli-imalat-tedarikci-denetimi.html">Lieferantenaudit</a>). Kundenbedingte Verzögerungen, etwa späte Zeichnungsänderungen oder ausstehende Freigaben, sollten getrennt erfasst werden; sonst wird der Lieferant unfair abgewertet.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Unser Kundenportal zeigt Fertigungsstufen, Lieferungen und Qualitätsdokumente je Auftrag; so lassen sich Liefer- und Qualitätsdaten leicht mit Ihrer Bewertung abgleichen. Die Definitionen Ihrer Lieferantenbewertung besprechen wir am liebsten schon zu Auftragsbeginn. <a href="../musteri-portali.html">Kundenportal →</a></p></div>
`,
    faq: [
      ['Was ist Liefertreue (OTD)?', 'Der Anteil pünktlich gelieferter Bestellpositionen an allen Positionen; Referenztermin und Toleranzfenster müssen klar definiert sein.'],
      ['Was unterscheidet OTD und OTIF?', 'OTIF verlangt zusätzlich vollständige Lieferung; Teillieferungen werden sichtbar.'],
      ['Wie berechnet man PPM?', 'Beanstandete Teile geteilt durch gelieferte Teile, multipliziert mit 1.000.000.'],
      ['Welche Kennzahl passt zu großen Teilen in kleinen Stückzahlen?', 'Anzahl der Abweichungen, Nacharbeitsstunden und Verteilung nach Fehlerart sind aussagekräftiger als PPM.']
    ],
    cta_h3: 'Sie suchen einen messbaren Lieferanten?',
    cta_p: 'Teilen Sie Ihre Bewertungsdefinitionen und Teile; wir legen gemeinsam fest, wie wir Liefer- und Qualitätsdaten berichten.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Indicadores de rendimiento del proveedor de soldadura: OTD, PPM y evaluación de proveedores',
    meta: 'Indicadores para medir a un proveedor de piezas soldadas: entrega a tiempo (OTD), PPM y tasa de rechazo, tiempo de cierre 8D, exactitud documental, tiempo de respuesta a ofertas; definiciones claras, ejemplos de cálculo y cómo crear una tarjeta de evaluación.',
    og: 'KPI de proveedores: OTD y PPM',
    tag: 'Compras · Calidad',
    h1: 'Indicadores de rendimiento del proveedor de soldadura: OTD, PPM y evaluación de proveedores',
    crumb: 'KPI de proveedores',
    read: '7 min de lectura',
    body: `
<p>La respuesta a "¿es bueno este proveedor?" debe apoyarse en cifras, no en impresiones. Una tarjeta de evaluación permite que compras y calidad hablen sobre los mismos datos. Pero un indicador solo funciona si su definición es clara; si no, el proveedor declara un 98 % de entregas a tiempo mientras el cliente ve un 80 %.</p>
<h2>Indicadores clave</h2>
<table>
<thead><tr><th>Indicador</th><th>Definición</th><th>Atención a</th></tr></thead>
<tbody>
<tr><td>OTD (entrega a tiempo)</td><td>Líneas de pedido entregadas a tiempo / total de líneas</td><td>¿Qué fecha cuenta: la primera confirmada o la revisada?</td></tr>
<tr><td>OTIF</td><td>Líneas entregadas a tiempo y completas</td><td>Las entregas incompletas no aparecen en OTD, sí en OTIF</td></tr>
<tr><td>PPM</td><td>Piezas rechazadas / piezas entregadas × 1.000.000</td><td>Puede engañar en piezas grandes de bajo volumen</td></tr>
<tr><td>Número de no conformidades</td><td>NCR abiertas en el periodo</td><td>Más significativo que el PPM en volúmenes bajos</td></tr>
<tr><td>Tiempo de cierre 8D</td><td>Días desde la reclamación hasta el cierre eficaz</td><td>Medir por separado contención y solución definitiva</td></tr>
<tr><td>Exactitud documental</td><td>Porcentaje de envíos con documentos completos y correctos</td><td>Seguir aparte certificados, informes dimensionales y de END</td></tr>
<tr><td>Tiempo de respuesta a ofertas</td><td>Días desde la solicitud hasta la oferta</td><td>Indicador de rapidez importante en trabajos por proyecto</td></tr>
</tbody>
</table>
<h2>Definir bien el OTD</h2>
<p>La mayoría de las discusiones sobre OTD nacen de definiciones distintas. Hay que aclarar:</p>
<ul>
<li><strong>Fecha de referencia:</strong> ¿la primera confirmada por el proveedor o una acordada después? Medir frente a fechas revisadas constantemente maquilla el rendimiento.</li>
<li><strong>Ventana de tolerancia:</strong> por ejemplo, de 2 días antes a 0 días después cuenta como "a tiempo". Las entregas muy anticipadas también pueden crear problemas de almacén.</li>
<li><strong>Punto de medición:</strong> ¿salida del proveedor o llegada al cliente? Con EXW y DAP la diferencia es grande.</li>
<li><strong>Unidad:</strong> ¿línea de pedido o cantidad? Si llegan 99 de 100 piezas de una línea, la línea va retrasada.</li>
</ul>
<h2>¿Qué sentido tiene el PPM en piezas soldadas?</h2>
<p>El PPM es un indicador sólido para piezas pequeñas en grandes volúmenes. Pero si se compran unos cientos de bastidores grandes al año, un solo rechazo dispara el PPM a miles y lo vuelve inestable. En este tipo de trabajo son más útiles el número de NCR, las horas de reparación y el tipo de defecto (dimensional, soldadura, superficie, documentación). Clasificar por tipo de defecto también facilita encontrar la causa raíz (ver <a href="uygunsuzluk-raporu-ncr-8d-kaynakli-imalat.html">NCR y 8D</a>).</p>
<h2>Ejemplo de cálculo</h2>
<p>En un trimestre se abrieron 40 líneas de pedido; 36 se entregaron dentro de la ventana acordada y 2 llegaron incompletas. OTD = 36/40 = 90 %. Con la condición de entrega completa, OTIF = 34/40 = 85 %. Si en el mismo periodo se entregaron 1.200 piezas y se rechazaron 3, PPM = 3/1.200 × 1.000.000 = 2.500.</p>
<h2>Cómo crear una tarjeta de evaluación</h2>
<ul>
<li>Elija pocos indicadores pero correctos; una tarjeta con quince indicadores no la lee nadie.</li>
<li>Comparta cada definición con el proveedor y contrástela con sus datos.</li>
<li>Haga explícita la ponderación (p. ej. entrega 40 %, calidad 40 %, comunicación y documentación 20 %).</li>
<li>Muestre la tendencia; tres a seis meses dicen más que un mal mes.</li>
<li>Comente la tarjeta en una reunión periódica; enviarla solo por correo no cambia nada.</li>
</ul>
<h2>Lo que los indicadores no muestran</h2>
<p>Una buena tarjeta no garantiza que el proveedor fabrique siempre la pieza correcta. Las auditorías, las revisiones de proceso y las inspecciones intermedias en piezas críticas complementan los indicadores (ver <a href="kaynakli-imalat-tedarikci-denetimi.html">auditoría de proveedores</a>). Los retrasos causados por el cliente, como revisiones de plano tardías o aprobaciones pendientes, deben registrarse aparte; si no, se penaliza injustamente al proveedor.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> nuestro portal de clientes muestra las etapas de fabricación, los envíos y los documentos de calidad de cada pedido, lo que facilita comparar los datos de entrega y calidad con su tarjeta de evaluación. Preferimos acordar las definiciones al inicio del pedido. <a href="../musteri-portali.html">Portal de clientes →</a></p></div>
`,
    faq: [
      ['¿Qué es el OTD?', 'La proporción de líneas de pedido entregadas a tiempo sobre el total; deben definirse claramente la fecha de referencia y la ventana de tolerancia.'],
      ['¿Qué diferencia hay entre OTD y OTIF?', 'OTIF exige además la entrega completa; las entregas incompletas se hacen visibles.'],
      ['¿Cómo se calcula el PPM?', 'Piezas rechazadas divididas entre piezas entregadas, multiplicado por 1.000.000.'],
      ['¿Qué indicador sirve para piezas grandes de bajo volumen?', 'El número de NCR, las horas de reparación y el desglose por tipo de defecto son más significativos que el PPM.']
    ],
    cta_h3: '¿Busca un proveedor medible?',
    cta_p: 'Comparta sus definiciones de evaluación y sus piezas; acordaremos cómo reportar los datos de entrega y calidad.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Indicateurs de performance d\'un fournisseur en soudage : OTD, PPM et tableau de bord fournisseur',
    meta: 'Indicateurs pour mesurer un fournisseur de pièces soudées : livraison à l\'heure (OTD), PPM et taux de rejet, délai de clôture 8D, exactitude documentaire, délai de réponse aux devis ; définitions claires, exemples de calcul et construction d\'un tableau de bord.',
    og: 'KPI fournisseur : OTD et PPM',
    tag: 'Achats · Qualité',
    h1: 'Indicateurs de performance d\'un fournisseur en soudage : OTD, PPM et tableau de bord fournisseur',
    crumb: 'KPI fournisseur',
    read: '7 min de lecture',
    body: `
<p>La réponse à « ce fournisseur est-il bon ? » doit reposer sur des chiffres, pas sur des impressions. Un tableau de bord fournisseur permet aux achats et à la qualité de discuter des mêmes données. Mais un indicateur ne fonctionne que si sa définition est claire ; sinon le fournisseur annonce 98 % de livraisons à l'heure quand le client en voit 80 %.</p>
<h2>Indicateurs clés</h2>
<table>
<thead><tr><th>Indicateur</th><th>Définition</th><th>Point d'attention</th></tr></thead>
<tbody>
<tr><td>OTD (livraison à l'heure)</td><td>Lignes livrées à l'heure / total des lignes de commande</td><td>Quelle date compte : la première confirmée ou la révisée ?</td></tr>
<tr><td>OTIF</td><td>Lignes livrées à l'heure et complètes</td><td>Les livraisons partielles n'apparaissent pas dans l'OTD, mais dans l'OTIF</td></tr>
<tr><td>PPM</td><td>Pièces rejetées / pièces livrées × 1 000 000</td><td>Trompeur pour des pièces volumineuses en faible quantité</td></tr>
<tr><td>Nombre de non-conformités</td><td>NC ouvertes sur la période</td><td>Plus parlant que le PPM en petites séries</td></tr>
<tr><td>Délai de clôture 8D</td><td>Jours entre réclamation et clôture efficace</td><td>Mesurer séparément l'action immédiate et la solution définitive</td></tr>
<tr><td>Exactitude documentaire</td><td>Part des expéditions avec documents complets et corrects</td><td>Suivre séparément certificats, rapports dimensionnels et CND</td></tr>
<tr><td>Délai de réponse aux devis</td><td>Jours entre la demande et le devis</td><td>Indicateur de réactivité important pour les projets</td></tr>
</tbody>
</table>
<h2>Bien définir l'OTD</h2>
<p>La plupart des désaccords sur l'OTD viennent des définitions. À préciser :</p>
<ul>
<li><strong>Date de référence :</strong> la première date confirmée par le fournisseur ou une date convenue ensuite ? Mesurer par rapport à des dates sans cesse révisées embellit la performance.</li>
<li><strong>Fenêtre de tolérance :</strong> par exemple, de 2 jours d'avance à 0 jour de retard compte comme « à l'heure ». Des livraisons très en avance peuvent aussi poser des problèmes de stockage.</li>
<li><strong>Point de mesure :</strong> sortie fournisseur ou arrivée chez le client ? En EXW et DAP, l'écart est important.</li>
<li><strong>Unité :</strong> ligne de commande ou quantité ? Si 99 pièces sur 100 arrivent, la ligne est en retard.</li>
</ul>
<h2>Le PPM a-t-il un sens pour les pièces soudées ?</h2>
<p>Le PPM est un bon indicateur pour de petites pièces en grande série. Mais si l'on achète quelques centaines de grands châssis par an, un seul rejet fait grimper le PPM à plusieurs milliers et le rend instable. Pour ce type de travail, le nombre de NC, les heures de retouche et le type de défaut (cote, soudure, surface, documentation) sont plus utiles. Le tri par type de défaut facilite aussi la recherche des causes (voir <a href="uygunsuzluk-raporu-ncr-8d-kaynakli-imalat.html">NCR et 8D</a>).</p>
<h2>Exemple de calcul</h2>
<p>Sur un trimestre, 40 lignes de commande ont été ouvertes, 36 livrées dans la fenêtre convenue et 2 incomplètes. OTD = 36/40 = 90 %. Avec la condition de complétude, OTIF = 34/40 = 85 %. Si 1 200 pièces ont été livrées sur la période et 3 rejetées, PPM = 3/1 200 × 1 000 000 = 2 500.</p>
<h2>Construire un tableau de bord fournisseur</h2>
<ul>
<li>Choisissez peu d'indicateurs, mais les bons ; personne ne lit un tableau à quinze indicateurs.</li>
<li>Partagez chaque définition avec le fournisseur et comparez avec ses données.</li>
<li>Rendez la pondération explicite (p. ex. livraison 40 %, qualité 40 %, communication et documentation 20 %).</li>
<li>Montrez la tendance ; trois à six mois en disent plus qu'un mauvais mois.</li>
<li>Discutez le tableau en réunion régulière ; un simple envoi par e-mail ne change rien.</li>
</ul>
<h2>Ce que les indicateurs ne montrent pas</h2>
<p>Un bon tableau de bord ne garantit pas que le fournisseur fabrique toujours la bonne pièce. Audits fournisseurs, revues de procédé et contrôles intermédiaires sur pièces critiques complètent les indicateurs (voir <a href="kaynakli-imalat-tedarikci-denetimi.html">audit fournisseur</a>). Les retards dus au client, comme des révisions de plan tardives ou des validations en attente, doivent être enregistrés à part ; sinon le fournisseur est pénalisé injustement.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> notre portail client affiche les étapes de fabrication, les expéditions et les documents qualité de chaque commande, ce qui facilite la comparaison avec votre tableau de bord. Nous préférons convenir des définitions dès le début de la commande. <a href="../musteri-portali.html">Portail client →</a></p></div>
`,
    faq: [
      ['Qu\'est-ce que l\'OTD ?', 'La part des lignes de commande livrées à l\'heure ; la date de référence et la fenêtre de tolérance doivent être clairement définies.'],
      ['Quelle différence entre OTD et OTIF ?', 'L\'OTIF exige en plus une livraison complète ; les livraisons partielles deviennent visibles.'],
      ['Comment calculer le PPM ?', 'Pièces rejetées divisées par pièces livrées, multiplié par 1 000 000.'],
      ['Quel indicateur pour de grandes pièces en petite série ?', 'Le nombre de NC, les heures de retouche et la répartition par type de défaut sont plus parlants que le PPM.']
    ],
    cta_h3: 'Vous cherchez un fournisseur mesurable ?',
    cta_p: 'Partagez vos définitions d\'indicateurs et vos pièces ; nous conviendrons ensemble du reporting livraison et qualité.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'KPI del fornitore di saldatura: OTD, PPM e scheda di valutazione fornitori',
    meta: 'Indicatori per misurare un fornitore di parti saldate: consegna puntuale (OTD), PPM e tasso di scarto, tempo di chiusura 8D, accuratezza documentale, tempo di risposta alle offerte; definizioni chiare, esempi di calcolo e come costruire una scheda di valutazione.',
    og: 'KPI fornitori: OTD e PPM',
    tag: 'Acquisti · Qualità',
    h1: 'KPI del fornitore di saldatura: OTD, PPM e scheda di valutazione fornitori',
    crumb: 'KPI fornitori',
    read: '7 min di lettura',
    body: `
<p>La risposta a "questo fornitore è buono?" deve basarsi sui numeri, non sulle sensazioni. Una scheda di valutazione permette ad acquisti e qualità di discutere sugli stessi dati. Ma un indicatore funziona solo se la sua definizione è chiara; altrimenti il fornitore dichiara il 98 % di consegne puntuali mentre il cliente ne vede l'80 %.</p>
<h2>Indicatori principali</h2>
<table>
<thead><tr><th>Indicatore</th><th>Definizione</th><th>Attenzione a</th></tr></thead>
<tbody>
<tr><td>OTD (consegna puntuale)</td><td>Righe d'ordine consegnate in tempo / totale righe</td><td>Quale data vale: la prima confermata o quella rivista?</td></tr>
<tr><td>OTIF</td><td>Righe consegnate in tempo e complete</td><td>Le consegne parziali non si vedono nell'OTD, sì nell'OTIF</td></tr>
<tr><td>PPM</td><td>Pezzi scartati / pezzi consegnati × 1.000.000</td><td>Fuorviante per pezzi grandi a basso volume</td></tr>
<tr><td>Numero di non conformità</td><td>NC aperte nel periodo</td><td>Più significativo del PPM per bassi volumi</td></tr>
<tr><td>Tempo di chiusura 8D</td><td>Giorni dal reclamo alla chiusura efficace</td><td>Misurare separatamente contenimento e soluzione definitiva</td></tr>
<tr><td>Accuratezza documentale</td><td>Quota di spedizioni con documenti completi e corretti</td><td>Seguire a parte certificati, rapporti dimensionali e CND</td></tr>
<tr><td>Tempo di risposta alle offerte</td><td>Giorni dalla richiesta all'offerta</td><td>Indicatore di rapidità importante nei lavori a progetto</td></tr>
</tbody>
</table>
<h2>Definire correttamente l'OTD</h2>
<p>La maggior parte delle discussioni sull'OTD nasce dalle definizioni. Da chiarire:</p>
<ul>
<li><strong>Data di riferimento:</strong> la prima confermata dal fornitore o una concordata dopo? Misurare rispetto a date continuamente riviste abbellisce la prestazione.</li>
<li><strong>Finestra di tolleranza:</strong> per esempio da 2 giorni in anticipo a 0 giorni di ritardo conta come "puntuale". Consegne molto anticipate possono creare problemi di magazzino.</li>
<li><strong>Punto di misura:</strong> uscita dal fornitore o arrivo dal cliente? Con EXW e DAP la differenza è grande.</li>
<li><strong>Unità:</strong> riga d'ordine o quantità? Se arrivano 99 pezzi su 100, la riga è in ritardo.</li>
</ul>
<h2>Il PPM ha senso per le parti saldate?</h2>
<p>Il PPM è un buon indicatore per piccoli pezzi ad alto volume. Ma se si acquistano poche centinaia di grandi telai l'anno, un solo scarto porta il PPM a migliaia e lo rende instabile. In questi casi sono più utili numero di NC, ore di riparazione e tipo di difetto (dimensionale, saldatura, superficie, documentazione). La classificazione per tipo di difetto facilita anche la ricerca delle cause (vedi <a href="uygunsuzluk-raporu-ncr-8d-kaynakli-imalat.html">NCR e 8D</a>).</p>
<h2>Esempio di calcolo</h2>
<p>In un trimestre sono state aperte 40 righe d'ordine; 36 consegnate nella finestra concordata e 2 incomplete. OTD = 36/40 = 90 %. Con la condizione di completezza, OTIF = 34/40 = 85 %. Se nello stesso periodo sono stati consegnati 1.200 pezzi e 3 scartati, PPM = 3/1.200 × 1.000.000 = 2.500.</p>
<h2>Costruire una scheda di valutazione</h2>
<ul>
<li>Scegliere pochi indicatori ma giusti; una scheda con quindici indicatori non la legge nessuno.</li>
<li>Condividere ogni definizione con il fornitore e confrontarla con i suoi dati.</li>
<li>Rendere esplicita la ponderazione (es. consegna 40 %, qualità 40 %, comunicazione e documentazione 20 %).</li>
<li>Mostrare il trend; tre-sei mesi dicono più di un mese negativo.</li>
<li>Discutere la scheda in una riunione periodica; inviarla solo per e-mail non cambia nulla.</li>
</ul>
<h2>Cosa gli indicatori non mostrano</h2>
<p>Una buona scheda non garantisce che il fornitore produca sempre il pezzo giusto. Audit, verifiche di processo e controlli intermedi sui pezzi critici completano gli indicatori (vedi <a href="kaynakli-imalat-tedarikci-denetimi.html">audit dei fornitori</a>). I ritardi causati dal cliente, come revisioni tardive dei disegni o approvazioni in sospeso, vanno registrati a parte; altrimenti il fornitore viene penalizzato ingiustamente.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> il nostro portale clienti mostra fasi di produzione, spedizioni e documenti qualità di ogni ordine, rendendo facile il confronto con la vostra scheda di valutazione. Preferiamo concordare le definizioni all'inizio dell'ordine. <a href="../musteri-portali.html">Portale clienti →</a></p></div>
`,
    faq: [
      ['Cos\'è l\'OTD?', 'La quota di righe d\'ordine consegnate puntualmente sul totale; data di riferimento e finestra di tolleranza vanno definite chiaramente.'],
      ['Che differenza c\'è tra OTD e OTIF?', 'L\'OTIF richiede anche la consegna completa; le consegne parziali diventano visibili.'],
      ['Come si calcola il PPM?', 'Pezzi scartati divisi per pezzi consegnati, moltiplicato per 1.000.000.'],
      ['Quale indicatore per pezzi grandi a basso volume?', 'Numero di NC, ore di riparazione e ripartizione per tipo di difetto sono più significativi del PPM.']
    ],
    cta_h3: 'Cercate un fornitore misurabile?',
    cta_p: 'Condividete le definizioni della vostra scheda e i pezzi; concorderemo insieme il reporting su consegne e qualità.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Prestatie-indicatoren voor lasleveranciers: OTD, PPM en leveranciersbeoordeling',
    meta: 'Indicatoren om een leverancier van gelaste onderdelen te meten: leverbetrouwbaarheid (OTD), PPM en afkeurpercentage, 8D-doorlooptijd, documentatienauwkeurigheid, reactietijd op offerteaanvragen; heldere definities, rekenvoorbeelden en een leveranciersscorecard opstellen.',
    og: 'Leveranciers-KPI: OTD en PPM',
    tag: 'Inkoop · Kwaliteit',
    h1: 'Prestatie-indicatoren voor lasleveranciers: OTD, PPM en leveranciersbeoordeling',
    crumb: 'Leveranciers-KPI',
    read: '7 min lezen',
    body: `
<p>Het antwoord op "is deze leverancier goed?" hoort op cijfers te rusten, niet op gevoel. Een leveranciersscorecard zorgt dat inkoop en kwaliteit over dezelfde data praten. Maar een indicator werkt alleen met een heldere definitie; anders meldt de leverancier 98% op tijd terwijl de klant 80% ziet.</p>
<h2>Belangrijkste indicatoren</h2>
<table>
<thead><tr><th>Indicator</th><th>Definitie</th><th>Let op</th></tr></thead>
<tbody>
<tr><td>OTD (op tijd geleverd)</td><td>Op tijd geleverde orderregels / alle orderregels</td><td>Welke datum telt: eerst bevestigd of herzien?</td></tr>
<tr><td>OTIF</td><td>Regels op tijd én volledig geleverd</td><td>Deelleveringen zie je niet in OTD, wel in OTIF</td></tr>
<tr><td>PPM</td><td>Afgekeurde delen / geleverde delen × 1.000.000</td><td>Misleidend bij grote onderdelen in kleine aantallen</td></tr>
<tr><td>Aantal afwijkingen</td><td>In de periode geopende NCR's</td><td>Zinvoller dan PPM bij kleine volumes</td></tr>
<tr><td>8D-doorlooptijd</td><td>Dagen van klacht tot effectieve afsluiting</td><td>Noodmaatregel en definitieve oplossing apart meten</td></tr>
<tr><td>Documentatienauwkeurigheid</td><td>Aandeel zendingen met volledige, juiste documenten</td><td>Certificaten, maat- en NDO-rapporten apart volgen</td></tr>
<tr><td>Reactietijd offertes</td><td>Dagen van aanvraag tot offerte</td><td>Belangrijke snelheidsindicator bij projectwerk</td></tr>
</tbody>
</table>
<h2>OTD goed definiëren</h2>
<p>De meeste discussies over OTD komen voort uit definities. Te verduidelijken:</p>
<ul>
<li><strong>Referentiedatum:</strong> de eerste door de leverancier bevestigde datum of een later afgesproken datum? Meten tegen steeds herziene data laat de prestatie beter lijken dan ze is.</li>
<li><strong>Tolerantievenster:</strong> bijvoorbeeld 2 dagen te vroeg tot 0 dagen te laat telt als "op tijd". Erg vroege leveringen kunnen ook magazijnproblemen geven.</li>
<li><strong>Meetpunt:</strong> vertrek bij de leverancier of aankomst bij de klant? Bij EXW en DAP is het verschil groot.</li>
<li><strong>Eenheid:</strong> orderregel of aantal? Komen 99 van de 100 delen van een regel, dan is de regel te laat.</li>
</ul>
<h2>Hoe zinvol is PPM bij gelaste onderdelen?</h2>
<p>PPM is een sterke indicator voor kleine onderdelen in grote aantallen. Maar worden er per jaar maar een paar honderd grote frames gekocht, dan stuwt één afkeur de PPM naar duizenden en wordt de indicator grillig. Bij zulk werk zeggen het aantal NCR's, hersteluren en het type fout (maat, las, oppervlak, documentatie) meer. Indelen naar fouttype maakt de oorzaak ook makkelijker te vinden (zie <a href="uygunsuzluk-raporu-ncr-8d-kaynakli-imalat.html">NCR en 8D</a>).</p>
<h2>Rekenvoorbeeld</h2>
<p>In een kwartaal zijn 40 orderregels geopend; 36 zijn binnen het afgesproken venster geleverd en 2 kwamen onvolledig. OTD = 36/40 = 90%. Met de volledigheidseis wordt OTIF = 34/40 = 85%. Zijn in dezelfde periode 1.200 delen geleverd en 3 afgekeurd, dan is PPM = 3/1.200 × 1.000.000 = 2.500.</p>
<h2>Een leveranciersscorecard opstellen</h2>
<ul>
<li>Kies weinig maar juiste indicatoren; een scorecard met vijftien indicatoren leest niemand.</li>
<li>Deel elke definitie met de leverancier en vergelijk met zijn data.</li>
<li>Maak de weging expliciet (bijv. levering 40%, kwaliteit 40%, communicatie en documentatie 20%).</li>
<li>Toon de trend; drie tot zes maanden zeggen meer dan één slechte maand.</li>
<li>Bespreek de scorecard in een vast overleg; alleen mailen verandert niets.</li>
</ul>
<h2>Wat indicatoren niet laten zien</h2>
<p>Een goede scorecard garandeert niet dat de leverancier altijd het juiste onderdeel maakt. Leveranciersaudits, procesbeoordelingen en tussentijdse inspecties bij kritische onderdelen vullen de indicatoren aan (zie <a href="kaynakli-imalat-tedarikci-denetimi.html">leveranciersaudit</a>). Vertragingen door de klant, zoals late tekeningwijzigingen of uitblijvende goedkeuringen, moeten apart worden vastgelegd; anders krijgt de leverancier onterecht een lagere score.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> ons klantenportaal toont per order de productiefasen, zendingen en kwaliteitsdocumenten, zodat u lever- en kwaliteitsdata eenvoudig naast uw scorecard legt. We spreken de definities het liefst aan het begin van een order af. <a href="../musteri-portali.html">Klantenportaal →</a></p></div>
`,
    faq: [
      ['Wat is OTD?', 'Het aandeel op tijd geleverde orderregels van alle regels; referentiedatum en tolerantievenster moeten duidelijk zijn vastgelegd.'],
      ['Wat is het verschil tussen OTD en OTIF?', 'OTIF vereist ook volledige levering; deelleveringen worden zichtbaar.'],
      ['Hoe bereken je PPM?', 'Afgekeurde delen gedeeld door geleverde delen, maal 1.000.000.'],
      ['Welke indicator past bij grote onderdelen in kleine aantallen?', 'Aantal NCR\'s, hersteluren en verdeling naar fouttype zeggen meer dan PPM.']
    ],
    cta_h3: 'Op zoek naar een meetbare leverancier?',
    cta_p: 'Deel uw scorecarddefinities en onderdelen; we spreken samen af hoe we lever- en kwaliteitsdata rapporteren.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Ytelsesindikatorer for sveiseleverandører: OTD, PPM og leverandørevaluering',
    meta: 'Indikatorer for å måle en leverandør av sveiste deler: leveringspresisjon (OTD), PPM og avvisningsrate, lukketid for 8D, dokumentasjonsnøyaktighet, svartid på forespørsler; tydelige definisjoner, regneeksempler og hvordan man lager et leverandørkort.',
    og: 'Leverandør-KPI: OTD og PPM',
    tag: 'Innkjøp · Kvalitet',
    h1: 'Ytelsesindikatorer for sveiseleverandører: OTD, PPM og leverandørevaluering',
    crumb: 'Leverandør-KPI',
    read: '7 min lesing',
    body: `
<p>Svaret på «er denne leverandøren god?» bør bygge på tall, ikke magefølelse. Et leverandørkort gjør at innkjøp og kvalitet snakker om de samme dataene. Men en indikator virker bare når definisjonen er tydelig; ellers melder leverandøren 98 % leveringspresisjon mens kunden ser 80 %.</p>
<h2>Viktige indikatorer</h2>
<table>
<thead><tr><th>Indikator</th><th>Definisjon</th><th>Pass på</th></tr></thead>
<tbody>
<tr><td>OTD (levert i tide)</td><td>Ordrelinjer levert i tide / alle ordrelinjer</td><td>Hvilken dato gjelder: først bekreftet eller revidert?</td></tr>
<tr><td>OTIF</td><td>Linjer levert i tide og komplett</td><td>Delleveranser synes ikke i OTD, men i OTIF</td></tr>
<tr><td>PPM</td><td>Avviste deler / leverte deler × 1 000 000</td><td>Misvisende for store deler i små antall</td></tr>
<tr><td>Antall avvik</td><td>Avviksrapporter åpnet i perioden</td><td>Mer meningsfullt enn PPM ved lave volum</td></tr>
<tr><td>Lukketid for 8D</td><td>Dager fra reklamasjon til effektiv lukking</td><td>Mål strakstiltak og varig løsning hver for seg</td></tr>
<tr><td>Dokumentasjonsnøyaktighet</td><td>Andel forsendelser med komplette og riktige dokumenter</td><td>Følg sertifikater, måle- og NDT-rapporter hver for seg</td></tr>
<tr><td>Svartid på forespørsler</td><td>Dager fra forespørsel til tilbud</td><td>Viktig hastighetsindikator i prosjektarbeid</td></tr>
</tbody>
</table>
<h2>Definer OTD riktig</h2>
<p>De fleste diskusjoner om OTD skyldes definisjoner. Dette må avklares:</p>
<ul>
<li><strong>Referansedato:</strong> den første datoen leverandøren bekreftet, eller en som ble avtalt senere? Å måle mot stadig reviderte datoer får ytelsen til å se bedre ut enn den er.</li>
<li><strong>Toleransevindu:</strong> for eksempel 2 dager tidlig til 0 dager sent regnes som «i tide». Svært tidlige leveranser kan også gi lagerproblemer.</li>
<li><strong>Målepunkt:</strong> avsendelse fra leverandør eller ankomst hos kunde? Med EXW og DAP er forskjellen stor.</li>
<li><strong>Enhet:</strong> ordrelinje eller antall? Kommer 99 av 100 deler på en linje, er linjen forsinket.</li>
</ul>
<h2>Hvor nyttig er PPM for sveiste deler?</h2>
<p>PPM er en sterk indikator for små deler i store volum. Men kjøpes bare noen hundre store rammer i året, sender én avvisning PPM opp i tusenvis og gjør indikatoren ustabil. For slikt arbeid gir antall avvik, reparasjonstimer og feiltype (mål, sveis, overflate, dokumentasjon) mer nyttig informasjon. Inndeling etter feiltype gjør det også lettere å finne rotårsaken (se <a href="uygunsuzluk-raporu-ncr-8d-kaynakli-imalat.html">NCR og 8D</a>).</p>
<h2>Regneeksempel</h2>
<p>I et kvartal ble det åpnet 40 ordrelinjer; 36 ble levert innenfor avtalt vindu og 2 kom ufullstendige. OTD = 36/40 = 90 %. Med kravet om komplett levering blir OTIF = 34/40 = 85 %. Ble det levert 1 200 deler i samme periode og 3 avvist, er PPM = 3/1 200 × 1 000 000 = 2 500.</p>
<h2>Lage et leverandørkort</h2>
<ul>
<li>Velg få, men riktige indikatorer; et kort med femten indikatorer leser ingen.</li>
<li>Del hver definisjon med leverandøren og sammenlign med deres data.</li>
<li>Gjør vektingen tydelig (f.eks. levering 40 %, kvalitet 40 %, kommunikasjon og dokumentasjon 20 %).</li>
<li>Vis trenden; tre til seks måneder sier mer enn én dårlig måned.</li>
<li>Gå gjennom kortet i et fast møte; å bare sende det på e-post endrer ingenting.</li>
</ul>
<h2>Hva indikatorene ikke viser</h2>
<p>Et godt leverandørkort garanterer ikke at leverandøren alltid lager riktig del. Leverandørrevisjoner, prosessgjennomganger og mellomkontroller av kritiske deler utfyller indikatorene (se <a href="kaynakli-imalat-tedarikci-denetimi.html">leverandørrevisjon</a>). Forsinkelser forårsaket av kunden, som sene tegningsrevisjoner eller ventende godkjenninger, bør registreres separat; ellers får leverandøren urettferdig trekk.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> kundeportalen vår viser produksjonstrinn, forsendelser og kvalitetsdokumenter for hver ordre, så det er enkelt å sammenligne leverings- og kvalitetsdata med leverandørkortet ditt. Vi avtaler gjerne definisjonene ved oppstart av ordren. <a href="../musteri-portali.html">Kundeportal →</a></p></div>
`,
    faq: [
      ['Hva er OTD?', 'Andelen ordrelinjer levert i tide av alle linjer; referansedato og toleransevindu må defineres tydelig.'],
      ['Hva er forskjellen på OTD og OTIF?', 'OTIF krever i tillegg komplett levering; delleveranser blir synlige.'],
      ['Hvordan beregnes PPM?', 'Avviste deler delt på leverte deler, ganget med 1 000 000.'],
      ['Hvilken indikator passer for store deler i små antall?', 'Antall avvik, reparasjonstimer og fordeling etter feiltype sier mer enn PPM.']
    ],
    cta_h3: 'Ser du etter en målbar leverandør?',
    cta_p: 'Del definisjonene i leverandørkortet og delene dine; vi avtaler sammen hvordan vi rapporterer leverings- og kvalitetsdata.',
    cta_btn: 'Be om tilbud →'
  }
};
