export default {
  order: 49,
  slug: 'cerceve-siparis-kaynakli-parca-abruf',
  key: 'p49_framework',
  date: '2026-11-16',
  keywords: 'çerçeve sipariş, çerçeve anlaşma, açık sipariş, blanket order, Abrufauftrag, Rahmenvertrag, çağrı siparişi, dondurulmuş bölge, forecast, emniyet stoku, kaynaklı parça seri tedarik, framework agreement welded parts',
  related: ['fason-kaynak-sozlesmesi-maddeler', 'kaynakli-imalat-teslim-suresi-planlama', 'kaynak-fiksturu-tasarimi-seri-uretim', 'kaynakli-imalat-fiyati'],
  tr: {
    title: 'Kaynaklı Parçada Çerçeve Sipariş (Abruf): Nasıl Kurulur, Nelere Dikkat Edilir?',
    meta: 'Kaynaklı parçaların seri tedarikinde çerçeve sipariş ve çağrı siparişi (Abruf) nasıl çalışır? Yıllık hacim ve tahmin, dondurulmuş bölge, emniyet stoku, malzeme fiyat maddesi, minimum çağrı miktarı, revizyon yönetimi, dönem sonu sorumluluğu ve teslimat performansı.',
    og: 'Çerçeve sipariş',
    tag: 'Tedarik · Seri üretim',
    h1: 'Kaynaklı Parçada Çerçeve Sipariş (Abruf): Nasıl Kurulur, Nelere Dikkat Edilir?',
    crumb: 'Çerçeve sipariş',
    read: '7 dk okuma',
    body: `
<p>Bir kaynaklı parça prototipten seriye geçtiğinde her parti için ayrı teklif ve sipariş açmak hem alıcıyı hem tedarikçiyi yorar. Avrupalı makine üreticilerinin çoğu bu noktada çerçeve sipariş (Rahmenauftrag) ile çağrı siparişi (Abruf) modeline geçer. Doğru kurulduğunda fiyat sabitlenir, teslim süresi kısalır ve iki taraf da planlama yapabilir.</p>
<h2>Çerçeve Sipariş Nedir?</h2>
<p>Belirli bir dönem (genellikle 12 ay) için toplam miktar, birim fiyat ve teslim koşullarının önceden anlaşıldığı siparişlerdir. Gerçek teslimatlar, alıcının dönem içinde gönderdiği çağrılarla (Abruf) tetiklenir. Böylece her teslimat için yeniden pazarlık yapılmaz.</p>
<h2>Çerçeve Siparişin İçeriği</h2>
<ul>
<li>Parça numarası ve çizim revizyonu,</li>
<li>Dönem ve toplam (tahmini) miktar,</li>
<li>Birim fiyat ve geçerlilik koşulları,</li>
<li>Minimum ve maksimum çağrı miktarı,</li>
<li>Çağrıdan teslimata kadar süre,</li>
<li>Emniyet stoku veya hazır bekleyen yarı mamul miktarı,</li>
<li>Malzeme fiyat maddesi,</li>
<li>Ambalaj, Incoterms ve doküman gereklilikleri,</li>
<li>Dönem sonunda kalan malzeme ve parçalar için sorumluluk.</li>
</ul>
<h2>Tahmin ve Dondurulmuş Bölge</h2>
<p>İyi bir çerçeve sipariş, alıcının yuvarlanan bir tahmin (forecast) paylaşmasına dayanır. Tahmin genellikle üç bölgeye ayrılır:</p>
<table>
<thead><tr><th>Bölge</th><th>Anlamı</th><th>Tipik kullanım</th></tr></thead>
<tbody>
<tr><td>Kesin (dondurulmuş)</td><td>Miktar ve tarih değişmez</td><td>Üretimi başlamış veya malzemesi kesilmiş partiler</td></tr>
<tr><td>Malzeme onayı</td><td>Tedarikçi malzemeyi alabilir, üretim henüz başlamaz</td><td>Sac ve profil siparişi verilen dönem</td></tr>
<tr><td>Tahmin</td><td>Yalnızca planlama içindir</td><td>Kapasite planı, bağlayıcı değil</td></tr>
</tbody>
</table>
<p>Bu bölgelerin süreleri parça ve malzeme tedarik süresine göre belirlenir. Malzeme onayı bölgesi, tedarikçinin özel kalite sac veya uzun teslimli profil sipariş edebilmesi için önemlidir.</p>
<h2>Emniyet Stoku ve Yarı Mamul</h2>
<p>Çağrıdan teslimata süreyi kısaltmanın en etkili yolu, tedarikçide belirli bir miktar hazır parça veya kesilmiş, bükülmüş yarı mamul bulundurmaktır. Bunun maliyeti ve sorumluluğu çerçeve siparişte açıkça yazılmalıdır: alıcı bu stoğu dönem sonunda almayı taahhüt ediyor mu?</p>
<h2>Fiyat ve Malzeme Maddesi</h2>
<p>Çelik fiyatları bir yıl içinde belirgin şekilde değişebilir. İki yaygın yaklaşım vardır:</p>
<ul>
<li><strong>Sabit fiyat:</strong> tedarikçi riski fiyata yansıtır; kısa dönemlerde uygundur.</li>
<li><strong>Malzeme endeksli fiyat:</strong> birim fiyat, malzeme ve işçilik olarak ayrılır; malzeme payı belirli aralıklarla, üzerinde anlaşılmış bir endekse göre güncellenir.</li>
</ul>
<p>Endeksli modelde endeksin kaynağı, güncelleme sıklığı ve eşik değeri (ör. belirli bir yüzde değişimin altında güncelleme yapılmaması) yazılmalıdır.</p>
<h2>Revizyon Yönetimi</h2>
<p>Seri üretimde çizim revizyonu kaçınılmazdır. Çerçeve siparişte şunlar tanımlanmalıdır:</p>
<ul>
<li>Revizyonun hangi çağrıdan itibaren geçerli olacağı,</li>
<li>Eski revizyonda kalan stok ve yarı mamulün durumu,</li>
<li>Fikstür veya WPS değişikliği gerekiyorsa maliyetin kimde olduğu,</li>
<li>Gerekiyorsa yeni ilk parça onayı.</li>
</ul>
<h2>Fikstür ve Takımlar</h2>
<p>Seri üretim için yapılan kaynak fikstürlerinin mülkiyeti, bakım sorumluluğu ve ayrılık durumunda iadesi çerçeve sipariş veya ayrı bir takım anlaşmasıyla belirlenmelidir (bkz. <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">seri üretim için kaynak fikstürü</a>).</p>
<h2>Performans Göstergeleri</h2>
<ul>
<li>Zamanında ve tam teslimat oranı (OTIF),</li>
<li>Çağrıdan teslimata gerçekleşen süre,</li>
<li>Parti başına uygunsuzluk sayısı ve 8D kapanma süresi,</li>
<li>Doküman eksiksizliği.</li>
</ul>
<p>Bu göstergelerin üç ayda bir birlikte gözden geçirilmesi, sorunları büyümeden yakalar.</p>
<h2>Sık Yapılan Hatalar</h2>
<ul>
<li>Tahmin paylaşmadan kısa teslim beklemek,</li>
<li>Dönem sonu sorumluluğunu yazmamak,</li>
<li>Revizyonları çağrılara bağlamadan e-postayla bildirmek,</li>
<li>Çok küçük minimum çağrı miktarıyla kurulum maliyetini her partide tekrar ödemek.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Seri parçalarda çerçeve sipariş ve çağrı modeliyle çalışabiliyoruz. Siparişlerinizin durumunu, belgelerini ve sevkiyatlarını müşteri portalından takip edebilirsiniz. <a href="../konya-fason-kaynak.html">Fason kaynak hizmetimiz →</a></p></div>
`,
    faq: [
      ['Çerçeve sipariş ile normal sipariş arasındaki fark nedir?', 'Normal sipariş tek bir teslimat için verilir. Çerçeve sipariş bir dönem için miktar ve fiyatı sabitler; teslimatlar dönem içindeki çağrılarla yapılır.'],
      ['Dondurulmuş bölge ne demektir?', 'Tahminin miktar ve tarihinin artık değişmeyeceği, üretimi başlamış veya malzemesi kesilmiş kısmıdır.'],
      ['Dönem sonunda kalan stok kime aittir?', 'Bu, çerçeve siparişte yazılmalıdır. Genellikle alıcı, onayladığı malzeme ve emniyet stoğunu almayı taahhüt eder.'],
      ['Malzeme fiyatı yükselirse ne olur?', 'Sabit fiyatta risk tedarikçidedir. Endeksli modelde malzeme payı anlaşılan endekse göre güncellenir.']
    ],
    cta_h3: 'Seri parçalarınız için planlı tedarik',
    cta_p: 'Çizimlerinizi ve yıllık tahmini gönderin; çerçeve sipariş teklifi hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Framework Orders and Call-Offs for Welded Parts: How to Set Them Up',
    meta: 'How do framework (blanket) orders and call-offs work for series supply of welded parts? Annual volume and forecast, frozen zone, safety stock, material price clause, minimum call-off quantity, revision management, end-of-term liability and delivery performance.',
    og: 'Framework orders',
    tag: 'Sourcing · Series production',
    h1: 'Framework Orders and Call-Offs for Welded Parts: How to Set Them Up',
    crumb: 'Framework orders',
    read: '7 min read',
    body: `
<p>When a welded part moves from prototype to series, quoting and ordering every batch separately wears out both buyer and supplier. Most European machine builders then switch to a framework (blanket) order with call-offs. Set up properly, it fixes the price, shortens lead time and lets both sides plan.</p>
<h2>What Is a Framework Order?</h2>
<p>An order in which total quantity, unit price and delivery terms are agreed in advance for a period, usually 12 months. Actual deliveries are triggered by call-offs the buyer sends during that period, so there is no renegotiation for each delivery.</p>
<h2>What a Framework Order Contains</h2>
<ul>
<li>Part number and drawing revision,</li>
<li>Period and total (forecast) quantity,</li>
<li>Unit price and validity conditions,</li>
<li>Minimum and maximum call-off quantity,</li>
<li>Time from call-off to delivery,</li>
<li>Safety stock or quantity of semi-finished parts held ready,</li>
<li>Material price clause,</li>
<li>Packaging, Incoterms and documentation requirements,</li>
<li>Liability for remaining material and parts at the end of the term.</li>
</ul>
<h2>Forecast and Frozen Zone</h2>
<p>A good framework order relies on the buyer sharing a rolling forecast, usually split into three zones:</p>
<table>
<thead><tr><th>Zone</th><th>Meaning</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td>Firm (frozen)</td><td>Quantity and date no longer change</td><td>Batches in production or with material already cut</td></tr>
<tr><td>Material release</td><td>Supplier may buy material, production not yet started</td><td>Period in which plate and sections are ordered</td></tr>
<tr><td>Forecast</td><td>For planning only</td><td>Capacity planning, not binding</td></tr>
</tbody>
</table>
<p>The length of each zone depends on the part and on material lead times. The material release zone matters so the supplier can order special-grade plate or long-lead sections.</p>
<h2>Safety Stock and Semi-Finished Parts</h2>
<p>The most effective way to shorten call-off lead time is for the supplier to hold a quantity of finished parts or cut and bent blanks. Its cost and liability must be written into the framework order: does the buyer commit to taking this stock at the end of the term?</p>
<h2>Price and Material Clause</h2>
<p>Steel prices can move significantly within a year. Two approaches are common:</p>
<ul>
<li><strong>Fixed price:</strong> the supplier prices in the risk; suitable for short terms.</li>
<li><strong>Material-indexed price:</strong> the unit price is split into material and labour; the material share is updated at set intervals against an agreed index.</li>
</ul>
<p>In the indexed model, state the index source, update frequency and a threshold (for example no update below a certain percentage change).</p>
<h2>Revision Management</h2>
<p>Drawing revisions are inevitable in series production. The framework order should define:</p>
<ul>
<li>From which call-off a revision applies,</li>
<li>What happens to stock and blanks of the old revision,</li>
<li>Who pays if a fixture or WPS change is needed,</li>
<li>A new first article approval where needed.</li>
</ul>
<h2>Fixtures and Tooling</h2>
<p>Ownership, maintenance and return on termination of welding fixtures built for series production should be set out in the framework order or a separate tooling agreement (see <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">welding fixtures for series production</a>).</p>
<h2>Performance Indicators</h2>
<ul>
<li>On-time in-full rate (OTIF),</li>
<li>Actual call-off-to-delivery time,</li>
<li>Nonconformities per batch and 8D closure time,</li>
<li>Completeness of documentation.</li>
</ul>
<p>Reviewing these together every quarter catches problems before they grow.</p>
<h2>Common Mistakes</h2>
<ul>
<li>Expecting short lead times without sharing a forecast,</li>
<li>Not stating end-of-term liability,</li>
<li>Announcing revisions by email without linking them to call-offs,</li>
<li>Very small minimum call-offs that repeat set-up cost on every batch.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> we can work with framework orders and call-offs for series parts. You can follow order status, documents and shipments in our customer portal. <a href="../konya-fason-kaynak.html">Our contract welding service →</a></p></div>
`,
    faq: [
      ['How does a framework order differ from a normal order?', 'A normal order covers a single delivery. A framework order fixes quantity and price for a period; deliveries are made through call-offs during that period.'],
      ['What does frozen zone mean?', 'The part of the forecast where quantity and date no longer change because production has started or material has been cut.'],
      ['Who owns remaining stock at the end of the term?', 'This must be written into the framework order. Usually the buyer commits to taking released material and agreed safety stock.'],
      ['What if material prices rise?', 'With a fixed price the risk lies with the supplier. In an indexed model the material share is updated against the agreed index.']
    ],
    cta_h3: 'Planned supply for your series parts',
    cta_p: 'Send your drawings and annual forecast; we will quote a framework order.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Rahmenauftrag und Abruf für Schweißteile: richtig aufsetzen',
    meta: 'Wie funktionieren Rahmenauftrag und Abruf bei der Serienbeschaffung von Schweißteilen? Jahresmenge und Prognose, Frozen Zone, Sicherheitsbestand, Materialpreisklausel, Mindestabrufmenge, Änderungsmanagement, Restmengenhaftung und Liefertreue.',
    og: 'Rahmenauftrag und Abruf',
    tag: 'Beschaffung · Serie',
    h1: 'Rahmenauftrag und Abruf für Schweißteile: richtig aufsetzen',
    crumb: 'Rahmenauftrag',
    read: '7 Min. Lesezeit',
    body: `
<p>Geht ein Schweißteil vom Prototyp in die Serie, ist es für Einkauf und Lieferant mühsam, jedes Los einzeln anzufragen und zu bestellen. Die meisten europäischen Maschinenbauer wechseln dann zu Rahmenauftrag und Abruf. Richtig aufgesetzt, fixiert das Modell den Preis, verkürzt die Lieferzeit und ermöglicht beiden Seiten Planung.</p>
<h2>Was ist ein Rahmenauftrag?</h2>
<p>Ein Auftrag, bei dem Gesamtmenge, Stückpreis und Lieferbedingungen für einen Zeitraum, meist 12 Monate, im Voraus vereinbart werden. Die tatsächlichen Lieferungen werden durch Abrufe des Kunden ausgelöst, ohne jedes Mal neu zu verhandeln.</p>
<h2>Inhalt eines Rahmenauftrags</h2>
<ul>
<li>Teilenummer und Zeichnungsstand,</li>
<li>Laufzeit und (prognostizierte) Gesamtmenge,</li>
<li>Stückpreis und Gültigkeitsbedingungen,</li>
<li>Mindest- und Höchstabrufmenge,</li>
<li>Zeit vom Abruf bis zur Lieferung,</li>
<li>Sicherheitsbestand bzw. vorgehaltene Halbfabrikate,</li>
<li>Materialpreisklausel,</li>
<li>Verpackung, Incoterms und Dokumentationsanforderungen,</li>
<li>Haftung für Restmaterial und Restteile am Laufzeitende.</li>
</ul>
<h2>Prognose und Frozen Zone</h2>
<p>Ein guter Rahmenauftrag beruht auf einer rollierenden Prognose des Kunden, meist in drei Zonen:</p>
<table>
<thead><tr><th>Zone</th><th>Bedeutung</th><th>Typische Verwendung</th></tr></thead>
<tbody>
<tr><td>Fertigungsfreigabe (Frozen Zone)</td><td>Menge und Termin ändern sich nicht mehr</td><td>Lose in Fertigung oder mit bereits zugeschnittenem Material</td></tr>
<tr><td>Materialfreigabe</td><td>Lieferant darf Material beschaffen, Fertigung beginnt noch nicht</td><td>Zeitraum der Blech- und Profilbestellung</td></tr>
<tr><td>Prognose</td><td>Nur zur Planung</td><td>Kapazitätsplanung, unverbindlich</td></tr>
</tbody>
</table>
<p>Die Länge der Zonen richtet sich nach Teil und Materialbeschaffungszeit. Die Materialfreigabe ist wichtig, damit der Lieferant Sondergüten oder Profile mit langer Lieferzeit bestellen kann.</p>
<h2>Sicherheitsbestand und Halbfabrikate</h2>
<p>Am wirksamsten verkürzt man die Abruflieferzeit, wenn der Lieferant eine Menge Fertigteile oder zugeschnittene und gekantete Zuschnitte vorhält. Kosten und Haftung dafür gehören in den Rahmenauftrag: Verpflichtet sich der Kunde, diesen Bestand am Laufzeitende abzunehmen?</p>
<h2>Preis und Materialklausel</h2>
<p>Stahlpreise können sich innerhalb eines Jahres deutlich bewegen. Zwei Ansätze sind verbreitet:</p>
<ul>
<li><strong>Festpreis:</strong> der Lieferant preist das Risiko ein; geeignet für kurze Laufzeiten.</li>
<li><strong>Materialindexierter Preis:</strong> der Stückpreis wird in Material und Arbeit geteilt; der Materialanteil wird in festen Abständen nach einem vereinbarten Index angepasst.</li>
</ul>
<p>Beim Indexmodell sollten Indexquelle, Anpassungsrhythmus und eine Schwelle (z. B. keine Anpassung unter einer bestimmten prozentualen Änderung) festgelegt werden.</p>
<h2>Änderungsmanagement</h2>
<p>Zeichnungsänderungen sind in der Serie unvermeidlich. Der Rahmenauftrag sollte regeln:</p>
<ul>
<li>ab welchem Abruf eine Änderung gilt,</li>
<li>was mit Bestand und Zuschnitten des alten Stands geschieht,</li>
<li>wer die Kosten trägt, wenn Vorrichtung oder WPS geändert werden müssen,</li>
<li>ob eine neue Erstmusterprüfung nötig ist.</li>
</ul>
<h2>Vorrichtungen und Werkzeuge</h2>
<p>Eigentum, Wartung und Rückgabe bei Vertragsende von Serienschweißvorrichtungen sollten im Rahmenauftrag oder einer separaten Werkzeugvereinbarung geregelt sein (siehe <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">Schweißvorrichtungen für die Serie</a>).</p>
<h2>Kennzahlen</h2>
<ul>
<li>Liefertreue (OTIF),</li>
<li>tatsächliche Zeit vom Abruf bis zur Lieferung,</li>
<li>Abweichungen je Los und 8D-Abschlusszeit,</li>
<li>Vollständigkeit der Dokumentation.</li>
</ul>
<p>Eine gemeinsame Quartalsbesprechung dieser Kennzahlen erkennt Probleme, bevor sie wachsen.</p>
<h2>Häufige Fehler</h2>
<ul>
<li>kurze Lieferzeiten erwarten, ohne Prognosen zu teilen,</li>
<li>Restmengenhaftung nicht regeln,</li>
<li>Änderungen per E-Mail ankündigen, ohne sie an Abrufe zu koppeln,</li>
<li>sehr kleine Mindestabrufe, die Rüstkosten bei jedem Los wiederholen.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Für Serienteile arbeiten wir mit Rahmenauftrag und Abruf. Auftragsstatus, Dokumente und Sendungen können Sie in unserem Kundenportal verfolgen. <a href="../konya-fason-kaynak.html">Unsere Lohnschweißung →</a></p></div>
`,
    faq: [
      ['Was unterscheidet Rahmenauftrag und Einzelauftrag?', 'Ein Einzelauftrag betrifft eine Lieferung. Ein Rahmenauftrag fixiert Menge und Preis für einen Zeitraum; geliefert wird über Abrufe.'],
      ['Was bedeutet Frozen Zone?', 'Der Teil der Prognose, in dem Menge und Termin nicht mehr geändert werden, weil die Fertigung begonnen hat oder Material zugeschnitten ist.'],
      ['Wem gehört der Restbestand am Laufzeitende?', 'Das muss im Rahmenauftrag stehen. Meist verpflichtet sich der Kunde, freigegebenes Material und vereinbarten Sicherheitsbestand abzunehmen.'],
      ['Was passiert bei steigenden Materialpreisen?', 'Beim Festpreis trägt der Lieferant das Risiko. Beim Indexmodell wird der Materialanteil nach dem vereinbarten Index angepasst.']
    ],
    cta_h3: 'Planbare Versorgung für Ihre Serienteile',
    cta_p: 'Senden Sie Zeichnungen und Jahresprognose; wir bieten einen Rahmenauftrag an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Pedido marco y llamadas de entrega para piezas soldadas: cómo configurarlos',
    meta: '¿Cómo funcionan el pedido marco y las llamadas de entrega en el suministro en serie de piezas soldadas? Volumen anual y previsión, zona congelada, stock de seguridad, cláusula de precio de material, cantidad mínima, gestión de revisiones, responsabilidad al final del periodo y cumplimiento de entregas.',
    og: 'Pedido marco',
    tag: 'Compras · Serie',
    h1: 'Pedido marco y llamadas de entrega para piezas soldadas: cómo configurarlos',
    crumb: 'Pedido marco',
    read: '7 min de lectura',
    body: `
<p>Cuando una pieza soldada pasa de prototipo a serie, pedir oferta y cursar pedido por cada lote cansa tanto al comprador como al proveedor. La mayoría de los fabricantes europeos de maquinaria pasa entonces a un pedido marco con llamadas de entrega. Bien configurado, fija el precio, acorta el plazo y permite planificar a ambas partes.</p>
<h2>¿Qué es un pedido marco?</h2>
<p>Un pedido en el que cantidad total, precio unitario y condiciones de entrega se acuerdan de antemano para un periodo, normalmente 12 meses. Las entregas reales se activan con llamadas que el comprador envía durante el periodo, sin renegociar cada vez.</p>
<h2>Qué incluye un pedido marco</h2>
<ul>
<li>referencia y revisión del plano,</li>
<li>periodo y cantidad total (prevista),</li>
<li>precio unitario y condiciones de validez,</li>
<li>cantidad mínima y máxima por llamada,</li>
<li>plazo desde la llamada hasta la entrega,</li>
<li>stock de seguridad o semielaborados preparados,</li>
<li>cláusula de precio de material,</li>
<li>embalaje, Incoterms y requisitos documentales,</li>
<li>responsabilidad sobre material y piezas restantes al final del periodo.</li>
</ul>
<h2>Previsión y zona congelada</h2>
<p>Un buen pedido marco se apoya en una previsión rodante del comprador, normalmente dividida en tres zonas:</p>
<table>
<thead><tr><th>Zona</th><th>Significado</th><th>Uso típico</th></tr></thead>
<tbody>
<tr><td>Firme (congelada)</td><td>Cantidad y fecha ya no cambian</td><td>Lotes en producción o con material ya cortado</td></tr>
<tr><td>Liberación de material</td><td>El proveedor puede comprar material; la producción aún no empieza</td><td>Periodo de pedido de chapa y perfiles</td></tr>
<tr><td>Previsión</td><td>Solo para planificar</td><td>Planificación de capacidad, no vinculante</td></tr>
</tbody>
</table>
<p>La duración de cada zona depende de la pieza y del plazo del material. La zona de liberación de material es clave para que el proveedor pueda pedir chapa de calidad especial o perfiles de largo plazo.</p>
<h2>Stock de seguridad y semielaborados</h2>
<p>La forma más eficaz de acortar el plazo de llamada es que el proveedor mantenga piezas terminadas o recortes cortados y plegados. Su coste y responsabilidad deben figurar en el pedido marco: ¿se compromete el comprador a retirar ese stock al final del periodo?</p>
<h2>Precio y cláusula de material</h2>
<p>El precio del acero puede variar bastante en un año. Hay dos enfoques habituales:</p>
<ul>
<li><strong>Precio fijo:</strong> el proveedor incluye el riesgo en el precio; adecuado para periodos cortos.</li>
<li><strong>Precio indexado al material:</strong> el precio se divide en material y mano de obra; la parte de material se actualiza periódicamente según un índice acordado.</li>
</ul>
<p>En el modelo indexado conviene fijar la fuente del índice, la frecuencia de revisión y un umbral (por ejemplo, sin ajuste por debajo de cierto porcentaje).</p>
<h2>Gestión de revisiones</h2>
<p>En serie, las revisiones de plano son inevitables. El pedido marco debe definir:</p>
<ul>
<li>a partir de qué llamada se aplica la revisión,</li>
<li>qué ocurre con el stock y los recortes de la revisión anterior,</li>
<li>quién paga si hay que cambiar el utillaje o la WPS,</li>
<li>si hace falta una nueva aprobación de primera pieza.</li>
</ul>
<h2>Utillajes</h2>
<p>La propiedad, el mantenimiento y la devolución al finalizar la relación de los utillajes de soldadura para serie deben fijarse en el pedido marco o en un acuerdo aparte (ver <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">utillajes de soldadura para serie</a>).</p>
<h2>Indicadores de desempeño</h2>
<ul>
<li>entregas a tiempo y completas (OTIF),</li>
<li>plazo real desde la llamada hasta la entrega,</li>
<li>no conformidades por lote y tiempo de cierre del 8D,</li>
<li>integridad de la documentación.</li>
</ul>
<p>Revisarlos juntos cada trimestre permite detectar problemas antes de que crezcan.</p>
<h2>Errores frecuentes</h2>
<ul>
<li>esperar plazos cortos sin compartir previsiones,</li>
<li>no fijar la responsabilidad al final del periodo,</li>
<li>comunicar revisiones por correo sin vincularlas a llamadas,</li>
<li>cantidades mínimas muy pequeñas que repiten el coste de preparación en cada lote.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> trabajamos con pedido marco y llamadas de entrega para piezas de serie. Puede seguir el estado, los documentos y los envíos de sus pedidos en nuestro portal de clientes. <a href="../konya-fason-kaynak.html">Nuestro servicio de soldadura a terceros →</a></p></div>
`,
    faq: [
      ['¿En qué se diferencia un pedido marco de uno normal?', 'Un pedido normal cubre una entrega. Un pedido marco fija cantidad y precio para un periodo; las entregas se hacen mediante llamadas.'],
      ['¿Qué es la zona congelada?', 'La parte de la previsión en la que cantidad y fecha ya no cambian porque la producción ha empezado o el material está cortado.'],
      ['¿De quién es el stock restante al final?', 'Debe figurar en el pedido marco. Normalmente el comprador se compromete a retirar el material liberado y el stock de seguridad acordado.'],
      ['¿Qué pasa si sube el precio del material?', 'Con precio fijo el riesgo es del proveedor. En el modelo indexado, la parte de material se ajusta según el índice acordado.']
    ],
    cta_h3: 'Suministro planificado para sus piezas de serie',
    cta_p: 'Envíenos planos y previsión anual; ofertamos un pedido marco.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Commande cadre et appels de livraison pour pièces soudées : bien les mettre en place',
    meta: 'Comment fonctionnent commande cadre et appels de livraison pour l’approvisionnement en série de pièces soudées ? Volume annuel et prévisions, zone figée, stock de sécurité, clause matière, quantité minimale d’appel, gestion des révisions, responsabilité en fin de période et taux de service.',
    og: 'Commande cadre',
    tag: 'Achats · Série',
    h1: 'Commande cadre et appels de livraison pour pièces soudées : bien les mettre en place',
    crumb: 'Commande cadre',
    read: '7 min de lecture',
    body: `
<p>Quand une pièce soudée passe du prototype à la série, consulter et commander chaque lot séparément épuise acheteur et fournisseur. La plupart des constructeurs européens passent alors à une commande cadre avec appels de livraison. Bien conçue, elle fige le prix, réduit le délai et permet aux deux parties de planifier.</p>
<h2>Qu’est-ce qu’une commande cadre ?</h2>
<p>Une commande dont la quantité totale, le prix unitaire et les conditions de livraison sont convenus à l’avance pour une période, souvent 12 mois. Les livraisons réelles sont déclenchées par des appels envoyés par l’acheteur, sans renégociation à chaque fois.</p>
<h2>Contenu d’une commande cadre</h2>
<ul>
<li>référence et indice de plan,</li>
<li>période et quantité totale (prévisionnelle),</li>
<li>prix unitaire et conditions de validité,</li>
<li>quantités minimale et maximale par appel,</li>
<li>délai entre appel et livraison,</li>
<li>stock de sécurité ou semi-finis tenus prêts,</li>
<li>clause de prix matière,</li>
<li>emballage, Incoterms et exigences documentaires,</li>
<li>responsabilité pour la matière et les pièces restantes en fin de période.</li>
</ul>
<h2>Prévisions et zone figée</h2>
<p>Une bonne commande cadre repose sur des prévisions glissantes de l’acheteur, souvent en trois zones :</p>
<table>
<thead><tr><th>Zone</th><th>Signification</th><th>Usage typique</th></tr></thead>
<tbody>
<tr><td>Ferme (figée)</td><td>Quantité et date ne changent plus</td><td>Lots en fabrication ou matière déjà découpée</td></tr>
<tr><td>Lancement matière</td><td>Le fournisseur peut acheter la matière ; la fabrication ne démarre pas encore</td><td>Période de commande des tôles et profilés</td></tr>
<tr><td>Prévision</td><td>Pour la planification uniquement</td><td>Planification de capacité, non engageante</td></tr>
</tbody>
</table>
<p>La durée de chaque zone dépend de la pièce et des délais matière. La zone de lancement matière permet au fournisseur de commander des nuances spéciales ou des profilés à long délai.</p>
<h2>Stock de sécurité et semi-finis</h2>
<p>Le moyen le plus efficace de réduire le délai d’appel est que le fournisseur tienne des pièces finies ou des flans découpés et pliés. Leur coût et la responsabilité associée doivent figurer dans la commande cadre : l’acheteur s’engage-t-il à reprendre ce stock en fin de période ?</p>
<h2>Prix et clause matière</h2>
<p>Le prix de l’acier peut varier sensiblement en un an. Deux approches sont courantes :</p>
<ul>
<li><strong>Prix ferme :</strong> le fournisseur intègre le risque ; adapté aux périodes courtes.</li>
<li><strong>Prix indexé matière :</strong> le prix est scindé en matière et main-d’œuvre ; la part matière est révisée à intervalles fixes selon un indice convenu.</li>
</ul>
<p>Dans le modèle indexé, précisez la source de l’indice, la fréquence de révision et un seuil (par ex. pas de révision en dessous d’un certain pourcentage).</p>
<h2>Gestion des révisions</h2>
<p>Les modifications de plan sont inévitables en série. La commande cadre doit définir :</p>
<ul>
<li>à partir de quel appel la révision s’applique,</li>
<li>le sort du stock et des flans de l’ancien indice,</li>
<li>qui paie si un gabarit ou un DMOS doit changer,</li>
<li>si une nouvelle validation premier article est nécessaire.</li>
</ul>
<h2>Gabarits et outillages</h2>
<p>Propriété, entretien et restitution en fin de relation des gabarits de soudage de série doivent être fixés dans la commande cadre ou un accord d’outillage séparé (voir <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">gabarits de soudage pour la série</a>).</p>
<h2>Indicateurs de performance</h2>
<ul>
<li>taux de livraison à l’heure et complète (OTIF),</li>
<li>délai réel entre appel et livraison,</li>
<li>non-conformités par lot et délai de clôture des 8D,</li>
<li>complétude de la documentation.</li>
</ul>
<p>Une revue trimestrielle commune de ces indicateurs repère les problèmes avant qu’ils ne grossissent.</p>
<h2>Erreurs fréquentes</h2>
<ul>
<li>attendre des délais courts sans partager de prévisions,</li>
<li>ne pas préciser la responsabilité en fin de période,</li>
<li>annoncer les révisions par e-mail sans les lier aux appels,</li>
<li>des minimums d’appel trop faibles qui répètent les coûts de réglage à chaque lot.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous travaillons en commande cadre avec appels de livraison pour les pièces de série. Vous suivez l’état, les documents et les expéditions de vos commandes dans notre portail client. <a href="../konya-fason-kaynak.html">Notre soudage en sous-traitance →</a></p></div>
`,
    faq: [
      ['Quelle différence entre commande cadre et commande ferme classique ?', 'Une commande classique couvre une livraison. La commande cadre fige quantité et prix pour une période ; les livraisons se font par appels.'],
      ['Que signifie zone figée ?', 'La partie des prévisions où quantité et date ne changent plus, car la fabrication a démarré ou la matière est découpée.'],
      ['À qui appartient le stock restant en fin de période ?', 'Cela doit être écrit dans la commande cadre. En général, l’acheteur s’engage à reprendre la matière lancée et le stock de sécurité convenu.'],
      ['Et si le prix matière augmente ?', 'En prix ferme, le risque est chez le fournisseur. En modèle indexé, la part matière est révisée selon l’indice convenu.']
    ],
    cta_h3: 'Un approvisionnement planifié pour vos pièces de série',
    cta_p: 'Envoyez plans et prévisions annuelles ; nous chiffrons une commande cadre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Ordine quadro e richiami di consegna per pezzi saldati: come impostarli',
    meta: 'Come funzionano ordine quadro e richiami di consegna nella fornitura in serie di pezzi saldati? Volume annuo e previsioni, zona congelata, scorta di sicurezza, clausola prezzo materiale, quantità minima di richiamo, gestione delle revisioni, responsabilità a fine periodo e puntualità.',
    og: 'Ordine quadro',
    tag: 'Acquisti · Serie',
    h1: 'Ordine quadro e richiami di consegna per pezzi saldati: come impostarli',
    crumb: 'Ordine quadro',
    read: '7 min di lettura',
    body: `
<p>Quando un pezzo saldato passa dal prototipo alla serie, chiedere offerta e ordinare ogni lotto separatamente stanca sia il buyer sia il fornitore. La maggior parte dei costruttori europei passa allora a un ordine quadro con richiami di consegna. Se impostato bene, blocca il prezzo, accorcia i tempi e consente a entrambi di pianificare.</p>
<h2>Cos’è un ordine quadro?</h2>
<p>Un ordine in cui quantità totale, prezzo unitario e condizioni di consegna sono concordati in anticipo per un periodo, di solito 12 mesi. Le consegne effettive partono dai richiami che il cliente invia nel periodo, senza rinegoziare ogni volta.</p>
<h2>Cosa contiene un ordine quadro</h2>
<ul>
<li>codice e revisione del disegno,</li>
<li>periodo e quantità totale (prevista),</li>
<li>prezzo unitario e condizioni di validità,</li>
<li>quantità minima e massima per richiamo,</li>
<li>tempo dal richiamo alla consegna,</li>
<li>scorta di sicurezza o semilavorati pronti,</li>
<li>clausola prezzo materiale,</li>
<li>imballo, Incoterms e requisiti documentali,</li>
<li>responsabilità per materiale e pezzi residui a fine periodo.</li>
</ul>
<h2>Previsioni e zona congelata</h2>
<p>Un buon ordine quadro si basa su una previsione mobile del cliente, di solito divisa in tre zone:</p>
<table>
<thead><tr><th>Zona</th><th>Significato</th><th>Uso tipico</th></tr></thead>
<tbody>
<tr><td>Fissa (congelata)</td><td>Quantità e data non cambiano più</td><td>Lotti in produzione o con materiale già tagliato</td></tr>
<tr><td>Rilascio materiale</td><td>Il fornitore può acquistare il materiale; la produzione non parte ancora</td><td>Periodo di ordine di lamiere e profili</td></tr>
<tr><td>Previsione</td><td>Solo per pianificare</td><td>Pianificazione della capacità, non vincolante</td></tr>
</tbody>
</table>
<p>La durata delle zone dipende dal pezzo e dai tempi di approvvigionamento del materiale. La zona di rilascio materiale serve perché il fornitore possa ordinare qualità speciali o profili a lunga consegna.</p>
<h2>Scorta di sicurezza e semilavorati</h2>
<p>Il modo più efficace per ridurre il tempo di richiamo è che il fornitore tenga pezzi finiti o sviluppi tagliati e piegati. Costo e responsabilità vanno scritti nell’ordine quadro: il cliente si impegna a ritirare questa scorta a fine periodo?</p>
<h2>Prezzo e clausola materiale</h2>
<p>Il prezzo dell’acciaio può variare molto in un anno. Due approcci comuni:</p>
<ul>
<li><strong>Prezzo fisso:</strong> il fornitore incorpora il rischio; adatto a periodi brevi.</li>
<li><strong>Prezzo indicizzato al materiale:</strong> il prezzo si divide in materiale e manodopera; la quota materiale si aggiorna a intervalli fissi secondo un indice concordato.</li>
</ul>
<p>Nel modello indicizzato vanno indicati fonte dell’indice, frequenza di aggiornamento e una soglia (es. nessun adeguamento sotto una certa variazione percentuale).</p>
<h2>Gestione delle revisioni</h2>
<p>In serie le revisioni di disegno sono inevitabili. L’ordine quadro deve stabilire:</p>
<ul>
<li>da quale richiamo vale la revisione,</li>
<li>cosa succede a scorte e sviluppi della revisione precedente,</li>
<li>chi paga se serve modificare maschera o WPS,</li>
<li>se serve una nuova approvazione del primo articolo.</li>
</ul>
<h2>Maschere e attrezzature</h2>
<p>Proprietà, manutenzione e restituzione a fine rapporto delle maschere di saldatura di serie vanno definite nell’ordine quadro o in un accordo separato (vedi <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">maschere di saldatura per la serie</a>).</p>
<h2>Indicatori di prestazione</h2>
<ul>
<li>consegne puntuali e complete (OTIF),</li>
<li>tempo reale dal richiamo alla consegna,</li>
<li>non conformità per lotto e tempo di chiusura degli 8D,</li>
<li>completezza della documentazione.</li>
</ul>
<p>Rivederli insieme ogni trimestre permette di intercettare i problemi prima che crescano.</p>
<h2>Errori frequenti</h2>
<ul>
<li>aspettarsi tempi brevi senza condividere previsioni,</li>
<li>non scrivere la responsabilità a fine periodo,</li>
<li>comunicare revisioni via e-mail senza collegarle ai richiami,</li>
<li>quantità minime troppo basse che ripetono i costi di attrezzaggio a ogni lotto.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> lavoriamo con ordine quadro e richiami di consegna per i pezzi di serie. Stato, documenti e spedizioni dei vostri ordini si seguono nel nostro portale clienti. <a href="../konya-fason-kaynak.html">Il nostro servizio di saldatura conto terzi →</a></p></div>
`,
    faq: [
      ['Che differenza c’è tra ordine quadro e ordine normale?', 'Un ordine normale copre una consegna. L’ordine quadro fissa quantità e prezzo per un periodo; le consegne avvengono tramite richiami.'],
      ['Cosa significa zona congelata?', 'La parte della previsione in cui quantità e data non cambiano più perché la produzione è partita o il materiale è tagliato.'],
      ['Di chi è la scorta residua a fine periodo?', 'Va scritto nell’ordine quadro. Di solito il cliente si impegna a ritirare il materiale rilasciato e la scorta di sicurezza concordata.'],
      ['E se il prezzo del materiale sale?', 'Con prezzo fisso il rischio è del fornitore. Nel modello indicizzato la quota materiale si adegua all’indice concordato.']
    ],
    cta_h3: 'Fornitura pianificata per i vostri pezzi di serie',
    cta_p: 'Inviateci disegni e previsione annua; quotiamo un ordine quadro.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Raamorder en afroep voor lasdelen: zo zet u het goed op',
    meta: 'Hoe werken raamorder en afroep bij serielevering van lasdelen? Jaarvolume en forecast, bevroren zone, veiligheidsvoorraad, materiaalprijsclausule, minimale afroephoeveelheid, revisiebeheer, aansprakelijkheid aan het einde van de looptijd en leverbetrouwbaarheid.',
    og: 'Raamorder en afroep',
    tag: 'Inkoop · Serie',
    h1: 'Raamorder en afroep voor lasdelen: zo zet u het goed op',
    crumb: 'Raamorder',
    read: '7 min lezen',
    body: `
<p>Gaat een lasdeel van prototype naar serie, dan is het voor inkoper en leverancier vermoeiend om elke batch apart te offreren en te bestellen. De meeste Europese machinebouwers stappen dan over op een raamorder met afroepen. Goed opgezet ligt de prijs vast, wordt de levertijd korter en kunnen beide partijen plannen.</p>
<h2>Wat is een raamorder?</h2>
<p>Een order waarin totale hoeveelheid, stuksprijs en leveringsvoorwaarden vooraf voor een periode worden afgesproken, meestal 12 maanden. De werkelijke leveringen worden gestart met afroepen van de klant, zonder telkens opnieuw te onderhandelen.</p>
<h2>Inhoud van een raamorder</h2>
<ul>
<li>artikelnummer en tekeningrevisie,</li>
<li>looptijd en totale (verwachte) hoeveelheid,</li>
<li>stuksprijs en geldigheidsvoorwaarden,</li>
<li>minimale en maximale afroephoeveelheid,</li>
<li>tijd van afroep tot levering,</li>
<li>veiligheidsvoorraad of gereedliggende halffabricaten,</li>
<li>materiaalprijsclausule,</li>
<li>verpakking, Incoterms en documentatie-eisen,</li>
<li>aansprakelijkheid voor restmateriaal en restdelen aan het einde.</li>
</ul>
<h2>Forecast en bevroren zone</h2>
<p>Een goede raamorder steunt op een rollende forecast van de klant, meestal in drie zones:</p>
<table>
<thead><tr><th>Zone</th><th>Betekenis</th><th>Typisch gebruik</th></tr></thead>
<tbody>
<tr><td>Vast (bevroren)</td><td>Hoeveelheid en datum wijzigen niet meer</td><td>Batches in productie of met reeds gesneden materiaal</td></tr>
<tr><td>Materiaalvrijgave</td><td>Leverancier mag materiaal kopen, productie start nog niet</td><td>Periode van plaat- en profielbestelling</td></tr>
<tr><td>Forecast</td><td>Alleen voor planning</td><td>Capaciteitsplanning, niet bindend</td></tr>
</tbody>
</table>
<p>De lengte van de zones hangt af van het onderdeel en de levertijd van het materiaal. De materiaalvrijgave is belangrijk zodat de leverancier speciale kwaliteiten of profielen met lange levertijd kan bestellen.</p>
<h2>Veiligheidsvoorraad en halffabricaten</h2>
<p>De effectiefste manier om de afroeplevertijd te verkorten, is dat de leverancier gereed product of gesneden en gezette plaatdelen aanhoudt. Kosten en aansprakelijkheid horen in de raamorder: verplicht de klant zich deze voorraad aan het einde af te nemen?</p>
<h2>Prijs en materiaalclausule</h2>
<p>Staalprijzen kunnen binnen een jaar flink bewegen. Twee benaderingen zijn gangbaar:</p>
<ul>
<li><strong>Vaste prijs:</strong> de leverancier prijst het risico in; geschikt voor korte looptijden.</li>
<li><strong>Materiaalgeïndexeerde prijs:</strong> de prijs wordt gesplitst in materiaal en arbeid; het materiaaldeel wordt periodiek aangepast volgens een afgesproken index.</li>
</ul>
<p>Leg bij indexering de indexbron, de aanpassingsfrequentie en een drempel vast (bijv. geen aanpassing onder een bepaald percentage).</p>
<h2>Revisiebeheer</h2>
<p>Tekeningwijzigingen zijn in serie onvermijdelijk. De raamorder moet regelen:</p>
<ul>
<li>vanaf welke afroep een revisie geldt,</li>
<li>wat er gebeurt met voorraad en plaatdelen van de oude revisie,</li>
<li>wie betaalt als een mal of WPS moet wijzigen,</li>
<li>of een nieuwe eerste-artikelgoedkeuring nodig is.</li>
</ul>
<h2>Mallen en gereedschap</h2>
<p>Eigendom, onderhoud en teruggave bij beëindiging van seriemallen moeten in de raamorder of een aparte gereedschapsovereenkomst staan (zie <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">lasmallen voor serieproductie</a>).</p>
<h2>Prestatie-indicatoren</h2>
<ul>
<li>op tijd en compleet geleverd (OTIF),</li>
<li>werkelijke tijd van afroep tot levering,</li>
<li>afwijkingen per batch en doorlooptijd van 8D’s,</li>
<li>volledigheid van de documentatie.</li>
</ul>
<p>Door deze elk kwartaal samen te bespreken, worden problemen opgemerkt voordat ze groeien.</p>
<h2>Veelgemaakte fouten</h2>
<ul>
<li>korte levertijden verwachten zonder forecast te delen,</li>
<li>de aansprakelijkheid aan het einde niet vastleggen,</li>
<li>revisies per e-mail melden zonder ze aan afroepen te koppelen,</li>
<li>zeer kleine minimale afroepen waardoor insteltijd per batch terugkomt.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> voor seriedelen werken we met raamorders en afroepen. Status, documenten en zendingen van uw orders volgt u in ons klantenportaal. <a href="../konya-fason-kaynak.html">Ons loonlaswerk →</a></p></div>
`,
    faq: [
      ['Wat is het verschil tussen raamorder en gewone order?', 'Een gewone order betreft één levering. Een raamorder legt hoeveelheid en prijs vast voor een periode; leveringen gaan via afroepen.'],
      ['Wat betekent bevroren zone?', 'Het deel van de forecast waarin hoeveelheid en datum niet meer wijzigen, omdat productie is gestart of materiaal is gesneden.'],
      ['Van wie is de restvoorraad aan het einde?', 'Dat moet in de raamorder staan. Meestal verplicht de klant zich vrijgegeven materiaal en de afgesproken veiligheidsvoorraad af te nemen.'],
      ['Wat als de materiaalprijs stijgt?', 'Bij een vaste prijs ligt het risico bij de leverancier. Bij indexering wordt het materiaaldeel volgens de afgesproken index aangepast.']
    ],
    cta_h3: 'Planbare levering voor uw seriedelen',
    cta_p: 'Stuur tekeningen en jaarforecast; we offreren een raamorder.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Rammeavtale og avrop for sveisede deler: slik setter du det opp',
    meta: 'Hvordan fungerer rammeavtale og avrop ved serieleveranser av sveisede deler? Årsvolum og prognose, frossen sone, sikkerhetslager, materialprisklausul, minste avropsmengde, revisjonsstyring, ansvar ved periodens slutt og leveringspresisjon.',
    og: 'Rammeavtale og avrop',
    tag: 'Innkjøp · Serie',
    h1: 'Rammeavtale og avrop for sveisede deler: slik setter du det opp',
    crumb: 'Rammeavtale',
    read: '7 min lesing',
    body: `
<p>Når en sveiset del går fra prototype til serie, blir det slitsomt for både innkjøper og leverandør å be om tilbud og bestille hvert parti for seg. De fleste europeiske maskinprodusenter går da over til rammeavtale med avrop. Riktig satt opp låser det prisen, korter ned leveringstiden og gir begge parter mulighet til å planlegge.</p>
<h2>Hva er en rammeavtale?</h2>
<p>En avtale der totalmengde, stykkpris og leveringsbetingelser avtales på forhånd for en periode, ofte 12 måneder. De faktiske leveransene utløses av avrop som kunden sender i perioden, uten ny forhandling hver gang.</p>
<h2>Innholdet i en rammeavtale</h2>
<ul>
<li>delenummer og tegningsrevisjon,</li>
<li>periode og total (forventet) mengde,</li>
<li>stykkpris og gyldighetsbetingelser,</li>
<li>minste og største avropsmengde,</li>
<li>tid fra avrop til levering,</li>
<li>sikkerhetslager eller halvfabrikata klar,</li>
<li>materialprisklausul,</li>
<li>emballasje, Incoterms og dokumentasjonskrav,</li>
<li>ansvar for gjenværende materiale og deler ved periodens slutt.</li>
</ul>
<h2>Prognose og frossen sone</h2>
<p>En god rammeavtale bygger på en rullerende prognose fra kunden, som regel i tre soner:</p>
<table>
<thead><tr><th>Sone</th><th>Betydning</th><th>Typisk bruk</th></tr></thead>
<tbody>
<tr><td>Fast (frossen)</td><td>Mengde og dato endres ikke lenger</td><td>Partier i produksjon eller med materiale allerede kuttet</td></tr>
<tr><td>Materialfrigivelse</td><td>Leverandøren kan kjøpe materiale, produksjonen starter ikke ennå</td><td>Perioden for bestilling av plater og profiler</td></tr>
<tr><td>Prognose</td><td>Kun for planlegging</td><td>Kapasitetsplan, ikke bindende</td></tr>
</tbody>
</table>
<p>Lengden på sonene avhenger av delen og materialets leveringstid. Materialfrigivelsen er viktig for at leverandøren kan bestille spesialkvaliteter eller profiler med lang leveringstid.</p>
<h2>Sikkerhetslager og halvfabrikata</h2>
<p>Den mest effektive måten å korte ned avropstiden på er at leverandøren holder ferdige deler eller kuttede og bukkede emner. Kostnad og ansvar må stå i rammeavtalen: forplikter kunden seg til å ta dette lageret ved periodens slutt?</p>
<h2>Pris og materialklausul</h2>
<p>Stålprisene kan endre seg betydelig i løpet av et år. To tilnærminger er vanlige:</p>
<ul>
<li><strong>Fast pris:</strong> leverandøren priser inn risikoen; egnet for korte perioder.</li>
<li><strong>Materialindeksert pris:</strong> prisen deles i materiale og arbeid; materialandelen justeres med faste intervaller etter en avtalt indeks.</li>
</ul>
<p>I indeksmodellen bør indekskilde, justeringsfrekvens og en terskel (f.eks. ingen justering under en viss prosentendring) avtales.</p>
<h2>Revisjonsstyring</h2>
<p>Tegningsrevisjoner er uunngåelige i serie. Rammeavtalen bør fastsette:</p>
<ul>
<li>fra hvilket avrop en revisjon gjelder,</li>
<li>hva som skjer med lager og emner av gammel revisjon,</li>
<li>hvem som betaler hvis jigg eller WPS må endres,</li>
<li>om ny førsteartikkelgodkjenning trengs.</li>
</ul>
<h2>Jigger og verktøy</h2>
<p>Eierskap, vedlikehold og tilbakelevering ved avslutning for seriesveisejigger bør avtales i rammeavtalen eller en egen verktøyavtale (se <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">sveisejigger for serieproduksjon</a>).</p>
<h2>Nøkkeltall</h2>
<ul>
<li>levert i tide og komplett (OTIF),</li>
<li>faktisk tid fra avrop til levering,</li>
<li>avvik per parti og lukketid for 8D,</li>
<li>fullstendig dokumentasjon.</li>
</ul>
<p>Felles gjennomgang hvert kvartal fanger opp problemer før de vokser.</p>
<h2>Vanlige feil</h2>
<ul>
<li>forvente kort leveringstid uten å dele prognoser,</li>
<li>ikke avtale ansvar ved periodens slutt,</li>
<li>varsle revisjoner på e-post uten å knytte dem til avrop,</li>
<li>svært små minste avrop som gjentar oppstartskostnaden for hvert parti.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> for seriedeler arbeider vi med rammeavtale og avrop. Status, dokumenter og forsendelser for ordrene følger du i kundeportalen vår. <a href="../konya-fason-kaynak.html">Vår leiesveising →</a></p></div>
`,
    faq: [
      ['Hva er forskjellen på rammeavtale og vanlig ordre?', 'En vanlig ordre gjelder én leveranse. En rammeavtale låser mengde og pris for en periode; leveransene skjer via avrop.'],
      ['Hva betyr frossen sone?', 'Den delen av prognosen der mengde og dato ikke lenger endres fordi produksjonen er startet eller materialet er kuttet.'],
      ['Hvem eier restlageret ved periodens slutt?', 'Det må stå i rammeavtalen. Som regel forplikter kunden seg til å ta frigitt materiale og avtalt sikkerhetslager.'],
      ['Hva skjer om materialprisen stiger?', 'Med fast pris ligger risikoen hos leverandøren. I indeksmodellen justeres materialandelen etter avtalt indeks.']
    ],
    cta_h3: 'Planlagt forsyning av seriedelene dine',
    cta_p: 'Send tegninger og årsprognose; vi gir tilbud på en rammeavtale.',
    cta_btn: 'Be om tilbud →'
  }
};
