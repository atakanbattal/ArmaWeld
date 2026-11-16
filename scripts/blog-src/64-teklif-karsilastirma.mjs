export default {
  order: 64,
  slug: 'kaynakli-parca-teklif-karsilastirma',
  key: 'p64_quotecompare',
  date: '2025-12-08',
  keywords: 'kaynaklı parça teklif karşılaştırma, teklif değerlendirme, toplam sahip olma maliyeti, fiyat karşılaştırma tablosu, kaynaklı imalat teklifi, compare welding quotes, quote comparison fabrication, Angebotsvergleich Schweißteile, comparar ofertas piezas soldadas, comparer devis pièces soudées',
  related: ['kaynakli-imalat-fiyati', 'kaynakli-imalat-teklif-hazirlama', 'kaynak-maliyeti-hesaplama', 'kaynakli-parca-ihracat-paketleme-incoterms'],
  tr: {
    title: 'Kaynaklı Parça Tekliflerini Doğru Karşılaştırmak: Birim Fiyatın Ötesine Bakın',
    meta: 'Kaynaklı parça tekliflerini karşılaştırırken nelere bakılmalı: kapsam farkları, malzeme ve sertifika, NDT ve dokümantasyon, yüzey işlemi, Incoterms ve nakliye, fikstür ve onay maliyetleri, ödeme şartları ve toplam maliyet tablosu.',
    og: 'Teklif karşılaştırma rehberi',
    tag: 'Satın Alma · Maliyet',
    h1: 'Kaynaklı Parça Tekliflerini Doğru Karşılaştırmak: Birim Fiyatın Ötesine Bakın',
    crumb: 'Teklif karşılaştırma',
    read: '7 dk okuma',
    body: `
<p>Aynı çizim için üç tedarikçiden teklif aldınız ve fiyatlar arasında %40 fark var. İlk refleks en düşük fiyatı seçmektir. Ancak kaynaklı parçalarda fiyat farkının büyük kısmı, tekliflerin aynı şeyi kapsamamasından gelir. Doğru karşılaştırma, önce kapsamı eşitlemek, sonra toplam maliyete bakmaktır.</p>
<h2>Fiyat Farkları Nereden Gelir?</h2>
<ul>
<li><strong>Malzeme:</strong> biri S355JR, diğeri S355J2 fiyatlamış olabilir; biri 3.1 sertifikayı dahil etmiş, diğeri etmemiş olabilir.</li>
<li><strong>Muayene:</strong> görsel muayene ile %10 UT arasında ciddi maliyet farkı vardır.</li>
<li><strong>Yüzey:</strong> astar mı, tam boya sistemi mi, galvaniz mi?</li>
<li><strong>Dokümantasyon:</strong> ölçüm raporu, NDT raporları ve data book fiyata dahil mi?</li>
<li><strong>Teslim şekli:</strong> EXW ile DAP arasında nakliye, ambalaj ve gümrük farkı vardır (bkz. <a href="kaynakli-parca-ihracat-paketleme-incoterms.html">ihracat paketleme ve Incoterms</a>).</li>
<li><strong>Tek seferlik maliyetler:</strong> fikstür, programlama, ilk parça onayı ayrı mı yazılmış, birim fiyata mı gömülmüş?</li>
</ul>
<h2>Adım 1: Kapsamı Eşitleyin</h2>
<p>Teklifleri yan yana koymadan önce her birinin neyi kapsadığını aynı tabloda işaretleyin:</p>
<table>
<thead><tr><th>Kalem</th><th>Tedarikçi A</th><th>Tedarikçi B</th><th>Tedarikçi C</th></tr></thead>
<tbody>
<tr><td>Malzeme kalitesi ve sertifika</td><td>✓ / ✗</td><td>✓ / ✗</td><td>✓ / ✗</td></tr>
<tr><td>Kesim ve büküm</td><td></td><td></td><td></td></tr>
<tr><td>Kaynak ve kalite seviyesi</td><td></td><td></td><td></td></tr>
<tr><td>NDT yöntem ve oranı</td><td></td><td></td><td></td></tr>
<tr><td>Talaşlı işleme</td><td></td><td></td><td></td></tr>
<tr><td>Kumlama ve boya sistemi</td><td></td><td></td><td></td></tr>
<tr><td>Ölçüm raporu ve dokümantasyon</td><td></td><td></td><td></td></tr>
<tr><td>Ambalaj ve teslim şekli</td><td></td><td></td><td></td></tr>
<tr><td>Fikstür ve tek seferlik maliyetler</td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>Eksik kalemler için tedarikçiden ek fiyat isteyin veya kendi tahmininizi ekleyin. Ancak bu şekilde "elmayla elma" karşılaştırması yapılabilir.</p>
<h2>Adım 2: Toplam Maliyeti Hesaplayın</h2>
<p>Parçanın size gerçek maliyeti, birim fiyattan fazlasıdır:</p>
<ul>
<li>Birim fiyat × yıllık adet</li>
<li>+ Tek seferlik maliyetler (fikstür, ilk parça, programlama)</li>
<li>+ Nakliye, ambalaj, gümrük ve sigorta</li>
<li>+ Giriş kontrolü ve olası red maliyeti</li>
<li>+ Stok maliyeti (uzun teslim süresi daha fazla stok demektir)</li>
<li>+ Ödeme şartının finansman etkisi</li>
</ul>
<p>Uzak bir tedarikçinin düşük birim fiyatı, yüksek nakliye ve daha büyük güvenlik stoğu ile eşitlenebilir. Tersine, biraz daha pahalı ama dokümantasyonu eksiksiz bir tedarikçi, giriş kontrolünde harcanan zamanı azaltabilir.</p>
<h2>Adım 3: Riskleri Puanlayın</h2>
<p>Fiyat dışındaki faktörler için basit bir puanlama tablosu kullanılabilir: teknik soruların ne kadar iyi sorulduğu, teslim süresinin gerçekçiliği, kalite sistemi ve sertifikalar, referanslar, iletişim hızı. Teklif aşamasında hiç soru sormayan bir tedarikçi, çizimi gerçekten incelememiş olabilir.</p>
<h2>Şüpheli Derecede Düşük Teklifler</h2>
<p>Diğerlerinden çok daha düşük bir teklif geldiğinde şunları sorun:</p>
<ul>
<li>Malzeme fiyatı hangi tarihe göre alınmış, geçerlilik süresi ne?</li>
<li>Kaynak süresi nasıl tahmin edilmiş? (bkz. <a href="kaynak-maliyeti-hesaplama.html">kaynak maliyeti hesaplama</a>)</li>
<li>NDT ve dokümantasyon gerçekten dahil mi?</li>
<li>Kapasite var mı, yoksa sipariş alındıktan sonra mı planlanacak?</li>
</ul>
<p>Düşük fiyat her zaman kötü değildir; verimli bir süreç veya uygun malzeme stoğu gerçek bir avantaj olabilir. Önemli olan, farkın nedenini anlamaktır.</p>
<h2>Tedarikçiye Açık Teklif Talebi Gönderin</h2>
<p>Karşılaştırılabilir teklif almanın en iyi yolu, net bir teklif talebidir: güncel çizim, malzeme ve sertifika şartı, kalite seviyesi, NDT kapsamı, yüzey işlemi, yıllık ve parti adetleri, teslim yeri ve Incoterm. Talep ne kadar net olursa teklifler o kadar kolay karşılaştırılır (bkz. <a href="kaynakli-imalat-teklif-hazirlama.html">teklif talebi hazırlama</a>).</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Tekliflerimizde malzeme, kaynak, NDT, yüzey işlemi, dokümantasyon, ambalaj ve teslim şeklini ayrı satırlarda yazıyoruz; tek seferlik maliyetleri birim fiyattan ayırıyoruz. Böylece teklifimizi diğerleriyle kalem kalem karşılaştırabilirsiniz. <a href="../iletisim.html">Teklif talebi →</a></p></div>
`,
    faq: [
      ['Kaynaklı parça teklifleri arasında neden büyük fiyat farkı olur?', 'Genellikle teklifler aynı kapsamı içermez: malzeme sertifikası, NDT, yüzey işlemi, dokümantasyon, nakliye ve tek seferlik maliyetler farklı ele alınır.'],
      ['Teklifleri nasıl eşit karşılaştırırım?', 'Önce kapsamı aynı tabloda eşitleyin, eksik kalemleri fiyatlatın, sonra toplam maliyeti hesaplayın.'],
      ['Toplam maliyete neler girer?', 'Birim fiyat, tek seferlik maliyetler, nakliye ve gümrük, giriş kontrolü, stok maliyeti ve ödeme şartının finansman etkisi.'],
      ['En düşük teklifi seçmek riskli mi?', 'Farkın nedeni anlaşılmadan seçmek risklidir; malzeme, NDT ve kapasite varsayımlarını sorun.']
    ],
    cta_h3: 'Karşılaştırılabilir bir teklif mi istiyorsunuz?',
    cta_p: 'Çizim ve şartlarınızı gönderin; kalem kalem ayrılmış bir teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Comparing Quotes for Welded Parts: Look Beyond the Unit Price',
    meta: 'What to check when comparing welded part quotes: scope differences, material and certificates, NDT and documentation, surface treatment, Incoterms and freight, fixture and approval costs, payment terms and a total cost table.',
    og: 'Comparing welded part quotes',
    tag: 'Purchasing · Cost',
    h1: 'Comparing Quotes for Welded Parts: Look Beyond the Unit Price',
    crumb: 'Comparing quotes',
    read: '7 min read',
    body: `
<p>You received quotes from three suppliers for the same drawing and the prices differ by 40%. The first reflex is to pick the cheapest. With welded parts, however, most of the price gap comes from quotes not covering the same thing. A proper comparison first equalises scope, then looks at total cost.</p>
<h2>Where Do Price Differences Come From?</h2>
<ul>
<li><strong>Material:</strong> one may have priced S355JR, another S355J2; one may include a 3.1 certificate, the other not.</li>
<li><strong>Inspection:</strong> visual inspection and 10% UT differ considerably in cost.</li>
<li><strong>Surface:</strong> primer only, a full paint system or galvanising?</li>
<li><strong>Documentation:</strong> are dimensional reports, NDT reports and a data book included?</li>
<li><strong>Delivery terms:</strong> EXW and DAP differ in freight, packaging and customs (see <a href="kaynakli-parca-ihracat-paketleme-incoterms.html">export packaging and Incoterms</a>).</li>
<li><strong>One-off costs:</strong> are fixtures, programming and first article approval listed separately or buried in the unit price?</li>
</ul>
<h2>Step 1: Equalise the Scope</h2>
<p>Before putting quotes side by side, mark what each one covers in the same table:</p>
<table>
<thead><tr><th>Item</th><th>Supplier A</th><th>Supplier B</th><th>Supplier C</th></tr></thead>
<tbody>
<tr><td>Material grade and certificate</td><td>✓ / ✗</td><td>✓ / ✗</td><td>✓ / ✗</td></tr>
<tr><td>Cutting and bending</td><td></td><td></td><td></td></tr>
<tr><td>Welding and quality level</td><td></td><td></td><td></td></tr>
<tr><td>NDT method and rate</td><td></td><td></td><td></td></tr>
<tr><td>Machining</td><td></td><td></td><td></td></tr>
<tr><td>Blasting and paint system</td><td></td><td></td><td></td></tr>
<tr><td>Dimensional report and documentation</td><td></td><td></td><td></td></tr>
<tr><td>Packaging and delivery terms</td><td></td><td></td><td></td></tr>
<tr><td>Fixtures and one-off costs</td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>For missing items, ask the supplier for a price or add your own estimate. Only then can you compare like with like.</p>
<h2>Step 2: Calculate Total Cost</h2>
<p>What the part really costs you is more than the unit price:</p>
<ul>
<li>Unit price × annual quantity</li>
<li>+ One-off costs (fixtures, first article, programming)</li>
<li>+ Freight, packaging, customs and insurance</li>
<li>+ Incoming inspection and the cost of possible rejections</li>
<li>+ Inventory cost (a longer lead time means more stock)</li>
<li>+ The financing effect of payment terms</li>
</ul>
<p>A distant supplier's low unit price can be cancelled out by high freight and a larger safety stock. Conversely, a slightly more expensive supplier with complete documentation can cut the time spent on incoming inspection.</p>
<h2>Step 3: Score the Risks</h2>
<p>For factors other than price, a simple scoring table works: how well the technical questions were asked, how realistic the lead time is, quality system and certificates, references, speed of communication. A supplier who asks no questions at quotation stage may not have really studied the drawing.</p>
<h2>Suspiciously Low Quotes</h2>
<p>When one quote is far below the others, ask:</p>
<ul>
<li>What date is the material price based on, and how long is it valid?</li>
<li>How was the welding time estimated? (see <a href="kaynak-maliyeti-hesaplama.html">welding cost calculation</a>)</li>
<li>Are NDT and documentation really included?</li>
<li>Is there capacity, or will it be planned after the order?</li>
</ul>
<p>A low price is not always bad; an efficient process or suitable material in stock can be a real advantage. What matters is understanding the reason for the gap.</p>
<h2>Send a Clear Request for Quotation</h2>
<p>The best way to get comparable quotes is a clear RFQ: current drawing, material and certificate requirement, quality level, NDT scope, surface treatment, annual and batch quantities, delivery place and Incoterm. The clearer the request, the easier the comparison (see <a href="kaynakli-imalat-teklif-hazirlama.html">preparing an RFQ</a>).</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> our quotes list material, welding, NDT, surface treatment, documentation, packaging and delivery terms on separate lines, and we keep one-off costs apart from the unit price. That lets you compare our quote with others item by item. <a href="../iletisim.html">Request a quote →</a></p></div>
`,
    faq: [
      ['Why do welded part quotes differ so much in price?', 'Usually the quotes do not cover the same scope: material certificates, NDT, surface treatment, documentation, freight and one-off costs are handled differently.'],
      ['How do I compare quotes fairly?', 'First equalise scope in one table, get prices for missing items, then calculate total cost.'],
      ['What goes into total cost?', 'Unit price, one-off costs, freight and customs, incoming inspection, inventory cost and the financing effect of payment terms.'],
      ['Is choosing the lowest quote risky?', 'It is risky without understanding the reason for the gap; ask about material, NDT and capacity assumptions.']
    ],
    cta_h3: 'Want a quote you can compare?',
    cta_p: 'Send your drawings and requirements; we will prepare a quote broken down item by item.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Angebote für Schweißteile richtig vergleichen: Mehr als nur der Stückpreis',
    meta: 'Worauf beim Vergleich von Angeboten für Schweißteile zu achten ist: Umfangsunterschiede, Werkstoff und Zeugnisse, ZfP und Dokumentation, Oberfläche, Incoterms und Fracht, Vorrichtungs- und Freigabekosten, Zahlungsbedingungen und Gesamtkostentabelle.',
    og: 'Angebotsvergleich Schweißteile',
    tag: 'Einkauf · Kosten',
    h1: 'Angebote für Schweißteile richtig vergleichen: Mehr als nur der Stückpreis',
    crumb: 'Angebotsvergleich',
    read: '7 Min. Lesezeit',
    body: `
<p>Sie haben für dieselbe Zeichnung drei Angebote erhalten, und die Preise liegen 40 % auseinander. Der erste Reflex ist, das günstigste zu nehmen. Bei Schweißteilen entsteht der Großteil der Preisdifferenz jedoch dadurch, dass die Angebote nicht dasselbe umfassen. Ein sauberer Vergleich gleicht zuerst den Umfang an und betrachtet dann die Gesamtkosten.</p>
<h2>Woher kommen die Preisunterschiede?</h2>
<ul>
<li><strong>Werkstoff:</strong> einer kalkuliert S355JR, ein anderer S355J2; einer schließt ein 3.1-Zeugnis ein, der andere nicht.</li>
<li><strong>Prüfung:</strong> Sichtprüfung und 10 % UT unterscheiden sich deutlich im Aufwand.</li>
<li><strong>Oberfläche:</strong> nur Grundierung, komplettes Beschichtungssystem oder Feuerverzinkung?</li>
<li><strong>Dokumentation:</strong> Sind Messprotokolle, ZfP-Berichte und Dokumentationsmappe enthalten?</li>
<li><strong>Lieferbedingungen:</strong> EXW und DAP unterscheiden sich bei Fracht, Verpackung und Zoll (siehe <a href="kaynakli-parca-ihracat-paketleme-incoterms.html">Exportverpackung und Incoterms</a>).</li>
<li><strong>Einmalkosten:</strong> Werden Vorrichtungen, Programmierung und Erstmuster getrennt ausgewiesen oder im Stückpreis versteckt?</li>
</ul>
<h2>Schritt 1: Umfang angleichen</h2>
<p>Bevor Sie die Angebote nebeneinanderlegen, markieren Sie in einer Tabelle, was jedes abdeckt:</p>
<table>
<thead><tr><th>Position</th><th>Lieferant A</th><th>Lieferant B</th><th>Lieferant C</th></tr></thead>
<tbody>
<tr><td>Werkstoffgüte und Zeugnis</td><td>✓ / ✗</td><td>✓ / ✗</td><td>✓ / ✗</td></tr>
<tr><td>Zuschnitt und Kanten</td><td></td><td></td><td></td></tr>
<tr><td>Schweißen und Bewertungsgruppe</td><td></td><td></td><td></td></tr>
<tr><td>ZfP-Verfahren und -Umfang</td><td></td><td></td><td></td></tr>
<tr><td>Mechanische Bearbeitung</td><td></td><td></td><td></td></tr>
<tr><td>Strahlen und Beschichtungssystem</td><td></td><td></td><td></td></tr>
<tr><td>Messprotokoll und Dokumentation</td><td></td><td></td><td></td></tr>
<tr><td>Verpackung und Lieferbedingung</td><td></td><td></td><td></td></tr>
<tr><td>Vorrichtungen und Einmalkosten</td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>Für fehlende Positionen fragen Sie einen Preis an oder setzen eine eigene Schätzung ein. Erst dann vergleichen Sie Gleiches mit Gleichem.</p>
<h2>Schritt 2: Gesamtkosten berechnen</h2>
<p>Was das Teil Sie tatsächlich kostet, ist mehr als der Stückpreis:</p>
<ul>
<li>Stückpreis × Jahresmenge</li>
<li>+ Einmalkosten (Vorrichtungen, Erstmuster, Programmierung)</li>
<li>+ Fracht, Verpackung, Zoll und Versicherung</li>
<li>+ Wareneingangsprüfung und Kosten möglicher Rückweisungen</li>
<li>+ Bestandskosten (längere Lieferzeit bedeutet mehr Bestand)</li>
<li>+ Finanzierungseffekt der Zahlungsbedingungen</li>
</ul>
<p>Ein niedriger Stückpreis eines weit entfernten Lieferanten kann durch hohe Fracht und größeren Sicherheitsbestand aufgezehrt werden. Umgekehrt kann ein etwas teurerer Lieferant mit vollständiger Dokumentation den Aufwand im Wareneingang senken.</p>
<h2>Schritt 3: Risiken bewerten</h2>
<p>Für Faktoren jenseits des Preises eignet sich eine einfache Punktetabelle: Qualität der technischen Rückfragen, Realismus der Lieferzeit, QM-System und Zertifikate, Referenzen, Reaktionsgeschwindigkeit. Ein Lieferant, der in der Angebotsphase keine Fragen stellt, hat die Zeichnung womöglich nicht wirklich gelesen.</p>
<h2>Auffällig niedrige Angebote</h2>
<p>Liegt ein Angebot weit unter den anderen, fragen Sie:</p>
<ul>
<li>Auf welchen Stichtag bezieht sich der Materialpreis, wie lange gilt er?</li>
<li>Wie wurde die Schweißzeit geschätzt? (siehe <a href="kaynak-maliyeti-hesaplama.html">Schweißkosten berechnen</a>)</li>
<li>Sind ZfP und Dokumentation wirklich enthalten?</li>
<li>Ist Kapazität vorhanden oder wird erst nach Auftragseingang geplant?</li>
</ul>
<p>Ein niedriger Preis ist nicht automatisch schlecht; ein effizienter Prozess oder passendes Material auf Lager kann ein echter Vorteil sein. Entscheidend ist, den Grund für die Differenz zu verstehen.</p>
<h2>Eine klare Anfrage senden</h2>
<p>Vergleichbare Angebote erhalten Sie am besten mit einer klaren Anfrage: aktuelle Zeichnung, Werkstoff- und Zeugnisanforderung, Bewertungsgruppe, ZfP-Umfang, Oberfläche, Jahres- und Losmengen, Lieferort und Incoterm. Je klarer die Anfrage, desto einfacher der Vergleich (siehe <a href="kaynakli-imalat-teklif-hazirlama.html">Anfrage vorbereiten</a>).</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> In unseren Angeboten stehen Werkstoff, Schweißen, ZfP, Oberfläche, Dokumentation, Verpackung und Lieferbedingung in getrennten Zeilen, Einmalkosten weisen wir separat vom Stückpreis aus. So können Sie unser Angebot Position für Position mit anderen vergleichen. <a href="../iletisim.html">Anfrage senden →</a></p></div>
`,
    faq: [
      ['Warum unterscheiden sich Angebote für Schweißteile so stark?', 'Meist decken sie nicht denselben Umfang ab: Werkstoffzeugnisse, ZfP, Oberfläche, Dokumentation, Fracht und Einmalkosten werden unterschiedlich behandelt.'],
      ['Wie vergleiche ich Angebote fair?', 'Erst den Umfang in einer Tabelle angleichen, fehlende Positionen bepreisen, dann die Gesamtkosten berechnen.'],
      ['Was gehört zu den Gesamtkosten?', 'Stückpreis, Einmalkosten, Fracht und Zoll, Wareneingangsprüfung, Bestandskosten und Finanzierungseffekt der Zahlungsbedingungen.'],
      ['Ist das günstigste Angebot riskant?', 'Ja, wenn der Grund der Differenz unklar ist; fragen Sie nach Annahmen zu Werkstoff, ZfP und Kapazität.']
    ],
    cta_h3: 'Sie möchten ein vergleichbares Angebot?',
    cta_p: 'Senden Sie Zeichnungen und Anforderungen; wir erstellen ein Angebot mit Einzelpositionen.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Comparar ofertas de piezas soldadas: mire más allá del precio unitario',
    meta: 'Qué revisar al comparar ofertas de piezas soldadas: diferencias de alcance, material y certificados, END y documentación, tratamiento superficial, Incoterms y transporte, utillajes y aprobaciones, condiciones de pago y tabla de coste total.',
    og: 'Comparar ofertas de piezas soldadas',
    tag: 'Compras · Costes',
    h1: 'Comparar ofertas de piezas soldadas: mire más allá del precio unitario',
    crumb: 'Comparar ofertas',
    read: '7 min de lectura',
    body: `
<p>Ha recibido ofertas de tres proveedores para el mismo plano y los precios difieren un 40 %. El primer reflejo es elegir la más barata. En piezas soldadas, sin embargo, la mayor parte de la diferencia se debe a que las ofertas no cubren lo mismo. Una comparación correcta iguala primero el alcance y después mira el coste total.</p>
<h2>¿De dónde salen las diferencias?</h2>
<ul>
<li><strong>Material:</strong> uno puede haber cotizado S355JR y otro S355J2; uno incluye certificado 3.1 y otro no.</li>
<li><strong>Inspección:</strong> la inspección visual y un 10 % de UT tienen costes muy distintos.</li>
<li><strong>Superficie:</strong> ¿solo imprimación, sistema de pintura completo o galvanizado?</li>
<li><strong>Documentación:</strong> ¿se incluyen informe dimensional, informes de END y dossier?</li>
<li><strong>Condiciones de entrega:</strong> EXW y DAP difieren en transporte, embalaje y aduanas (ver <a href="kaynakli-parca-ihracat-paketleme-incoterms.html">embalaje de exportación e Incoterms</a>).</li>
<li><strong>Costes únicos:</strong> ¿utillajes, programación y primera pieza van aparte o dentro del precio unitario?</li>
</ul>
<h2>Paso 1: igualar el alcance</h2>
<p>Antes de comparar, marque en una misma tabla qué cubre cada oferta:</p>
<table>
<thead><tr><th>Partida</th><th>Proveedor A</th><th>Proveedor B</th><th>Proveedor C</th></tr></thead>
<tbody>
<tr><td>Calidad de material y certificado</td><td>✓ / ✗</td><td>✓ / ✗</td><td>✓ / ✗</td></tr>
<tr><td>Corte y plegado</td><td></td><td></td><td></td></tr>
<tr><td>Soldadura y nivel de calidad</td><td></td><td></td><td></td></tr>
<tr><td>Método y porcentaje de END</td><td></td><td></td><td></td></tr>
<tr><td>Mecanizado</td><td></td><td></td><td></td></tr>
<tr><td>Granallado y sistema de pintura</td><td></td><td></td><td></td></tr>
<tr><td>Informe dimensional y documentación</td><td></td><td></td><td></td></tr>
<tr><td>Embalaje y condiciones de entrega</td><td></td><td></td><td></td></tr>
<tr><td>Utillajes y costes únicos</td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>Para las partidas que falten, pida precio al proveedor o añada su propia estimación. Solo así se compara lo mismo con lo mismo.</p>
<h2>Paso 2: calcular el coste total</h2>
<p>Lo que realmente le cuesta la pieza es más que el precio unitario:</p>
<ul>
<li>Precio unitario × cantidad anual</li>
<li>+ Costes únicos (utillajes, primera pieza, programación)</li>
<li>+ Transporte, embalaje, aduanas y seguro</li>
<li>+ Inspección de recepción y coste de posibles rechazos</li>
<li>+ Coste de inventario (más plazo significa más stock)</li>
<li>+ Efecto financiero de las condiciones de pago</li>
</ul>
<p>El precio bajo de un proveedor lejano puede quedar anulado por un transporte caro y un stock de seguridad mayor. A la inversa, un proveedor algo más caro con documentación completa puede reducir el tiempo de recepción.</p>
<h2>Paso 3: puntuar los riesgos</h2>
<p>Para lo que no es precio, sirve una tabla de puntuación sencilla: calidad de las preguntas técnicas, realismo del plazo, sistema de calidad y certificados, referencias, rapidez de comunicación. Un proveedor que no hace ninguna pregunta en la fase de oferta quizá no ha estudiado el plano de verdad.</p>
<h2>Ofertas sospechosamente bajas</h2>
<p>Cuando una oferta está muy por debajo de las demás, pregunte:</p>
<ul>
<li>¿A qué fecha corresponde el precio del material y cuánto tiempo es válido?</li>
<li>¿Cómo se ha estimado el tiempo de soldadura? (ver <a href="kaynak-maliyeti-hesaplama.html">cálculo de costes de soldadura</a>)</li>
<li>¿Están realmente incluidos los END y la documentación?</li>
<li>¿Hay capacidad o se planificará después del pedido?</li>
</ul>
<p>Un precio bajo no siempre es malo; un proceso eficiente o material adecuado en stock pueden ser una ventaja real. Lo importante es entender el motivo de la diferencia.</p>
<h2>Envíe una solicitud de oferta clara</h2>
<p>La mejor forma de recibir ofertas comparables es una solicitud clara: plano vigente, requisito de material y certificado, nivel de calidad, alcance de END, tratamiento superficial, cantidades anuales y por lote, lugar de entrega e Incoterm. Cuanto más clara la solicitud, más fácil la comparación (ver <a href="kaynakli-imalat-teklif-hazirlama.html">preparar una solicitud de oferta</a>).</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> nuestras ofertas detallan en líneas separadas material, soldadura, END, tratamiento superficial, documentación, embalaje y condiciones de entrega, y separamos los costes únicos del precio unitario. Así puede comparar nuestra oferta partida por partida. <a href="../iletisim.html">Solicitar oferta →</a></p></div>
`,
    faq: [
      ['¿Por qué varían tanto las ofertas de piezas soldadas?', 'Normalmente no cubren el mismo alcance: certificados, END, superficie, documentación, transporte y costes únicos se tratan de forma distinta.'],
      ['¿Cómo comparo ofertas de forma justa?', 'Iguale primero el alcance en una tabla, valore las partidas que faltan y calcule el coste total.'],
      ['¿Qué incluye el coste total?', 'Precio unitario, costes únicos, transporte y aduanas, inspección de recepción, coste de inventario y efecto financiero de las condiciones de pago.'],
      ['¿Es arriesgado elegir la oferta más baja?', 'Sí, si no se entiende el motivo de la diferencia; pregunte por las hipótesis de material, END y capacidad.']
    ],
    cta_h3: '¿Quiere una oferta comparable?',
    cta_p: 'Envíe planos y requisitos; prepararemos una oferta desglosada partida por partida.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Comparer des devis de pièces soudées : regarder au-delà du prix unitaire',
    meta: 'Points à vérifier pour comparer des devis de pièces soudées : différences de périmètre, matière et certificats, CND et documentation, traitement de surface, Incoterms et transport, gabarits et validations, conditions de paiement et tableau du coût total.',
    og: 'Comparer des devis de pièces soudées',
    tag: 'Achats · Coûts',
    h1: 'Comparer des devis de pièces soudées : regarder au-delà du prix unitaire',
    crumb: 'Comparer des devis',
    read: '7 min de lecture',
    body: `
<p>Vous avez reçu trois devis pour le même plan et les prix varient de 40 %. Le premier réflexe est de choisir le moins cher. Pour des pièces soudées, l'essentiel de l'écart vient pourtant du fait que les devis ne couvrent pas la même chose. Une bonne comparaison commence par aligner le périmètre, puis regarde le coût total.</p>
<h2>D'où viennent les écarts de prix ?</h2>
<ul>
<li><strong>Matière :</strong> l'un a chiffré du S355JR, l'autre du S355J2 ; l'un inclut un certificat 3.1, l'autre non.</li>
<li><strong>Contrôle :</strong> un contrôle visuel et 10 % d'UT n'ont pas du tout le même coût.</li>
<li><strong>Surface :</strong> primaire seul, système de peinture complet ou galvanisation ?</li>
<li><strong>Documentation :</strong> rapport dimensionnel, rapports CND et dossier de fin de fabrication sont-ils inclus ?</li>
<li><strong>Conditions de livraison :</strong> EXW et DAP diffèrent en transport, emballage et douane (voir <a href="kaynakli-parca-ihracat-paketleme-incoterms.html">emballage export et Incoterms</a>).</li>
<li><strong>Coûts ponctuels :</strong> gabarits, programmation et première pièce sont-ils séparés ou noyés dans le prix unitaire ?</li>
</ul>
<h2>Étape 1 : aligner le périmètre</h2>
<p>Avant de comparer, notez dans un même tableau ce que couvre chaque devis :</p>
<table>
<thead><tr><th>Poste</th><th>Fournisseur A</th><th>Fournisseur B</th><th>Fournisseur C</th></tr></thead>
<tbody>
<tr><td>Nuance matière et certificat</td><td>✓ / ✗</td><td>✓ / ✗</td><td>✓ / ✗</td></tr>
<tr><td>Découpe et pliage</td><td></td><td></td><td></td></tr>
<tr><td>Soudage et niveau de qualité</td><td></td><td></td><td></td></tr>
<tr><td>Méthode et taux de CND</td><td></td><td></td><td></td></tr>
<tr><td>Usinage</td><td></td><td></td><td></td></tr>
<tr><td>Grenaillage et système de peinture</td><td></td><td></td><td></td></tr>
<tr><td>Rapport dimensionnel et documentation</td><td></td><td></td><td></td></tr>
<tr><td>Emballage et conditions de livraison</td><td></td><td></td><td></td></tr>
<tr><td>Gabarits et coûts ponctuels</td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>Pour les postes manquants, demandez un prix au fournisseur ou ajoutez votre propre estimation. C'est seulement ainsi qu'on compare des choses comparables.</p>
<h2>Étape 2 : calculer le coût total</h2>
<p>Le coût réel de la pièce dépasse le prix unitaire :</p>
<ul>
<li>Prix unitaire × quantité annuelle</li>
<li>+ Coûts ponctuels (gabarits, première pièce, programmation)</li>
<li>+ Transport, emballage, douane et assurance</li>
<li>+ Contrôle de réception et coût des rejets éventuels</li>
<li>+ Coût de stock (un délai plus long signifie plus de stock)</li>
<li>+ Effet financier des conditions de paiement</li>
</ul>
<p>Le prix bas d'un fournisseur éloigné peut être annulé par un transport élevé et un stock de sécurité plus important. À l'inverse, un fournisseur un peu plus cher mais à la documentation complète peut réduire le temps passé en réception.</p>
<h2>Étape 3 : noter les risques</h2>
<p>Pour ce qui n'est pas le prix, un tableau de notation simple suffit : qualité des questions techniques, réalisme du délai, système qualité et certificats, références, réactivité. Un fournisseur qui ne pose aucune question au stade du devis n'a peut-être pas vraiment étudié le plan.</p>
<h2>Devis anormalement bas</h2>
<p>Quand un devis est très en dessous des autres, demandez :</p>
<ul>
<li>À quelle date correspond le prix matière et quelle est sa validité ?</li>
<li>Comment le temps de soudage a-t-il été estimé ? (voir <a href="kaynak-maliyeti-hesaplama.html">calcul du coût de soudage</a>)</li>
<li>Les CND et la documentation sont-ils vraiment inclus ?</li>
<li>La capacité existe-t-elle ou sera-t-elle planifiée après la commande ?</li>
</ul>
<p>Un prix bas n'est pas toujours mauvais ; un procédé efficace ou une matière disponible en stock peuvent être un vrai avantage. L'important est de comprendre la raison de l'écart.</p>
<h2>Envoyer une demande de prix claire</h2>
<p>La meilleure façon d'obtenir des devis comparables est une demande claire : plan en vigueur, exigence matière et certificat, niveau de qualité, étendue des CND, traitement de surface, quantités annuelles et par lot, lieu de livraison et Incoterm. Plus la demande est claire, plus la comparaison est simple (voir <a href="kaynakli-imalat-teklif-hazirlama.html">préparer une demande de prix</a>).</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nos devis présentent sur des lignes séparées la matière, le soudage, les CND, le traitement de surface, la documentation, l'emballage et les conditions de livraison, et nous séparons les coûts ponctuels du prix unitaire. Vous pouvez ainsi comparer notre devis poste par poste. <a href="../iletisim.html">Demande de devis →</a></p></div>
`,
    faq: [
      ['Pourquoi les devis de pièces soudées varient-ils autant ?', 'Le plus souvent, ils ne couvrent pas le même périmètre : certificats, CND, surface, documentation, transport et coûts ponctuels sont traités différemment.'],
      ['Comment comparer équitablement des devis ?', 'Alignez d\'abord le périmètre dans un tableau, chiffrez les postes manquants, puis calculez le coût total.'],
      ['Que comprend le coût total ?', 'Prix unitaire, coûts ponctuels, transport et douane, contrôle de réception, coût de stock et effet financier des conditions de paiement.'],
      ['Choisir le devis le plus bas est-il risqué ?', 'Oui, si l\'on ne comprend pas l\'écart ; interrogez le fournisseur sur ses hypothèses matière, CND et capacité.']
    ],
    cta_h3: 'Vous souhaitez un devis comparable ?',
    cta_p: 'Envoyez vos plans et exigences ; nous établirons un devis détaillé poste par poste.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Confrontare le offerte per parti saldate: guardare oltre il prezzo unitario',
    meta: 'Cosa verificare nel confronto di offerte per parti saldate: differenze di perimetro, materiale e certificati, CND e documentazione, trattamento superficiale, Incoterms e trasporto, attrezzature e approvazioni, condizioni di pagamento e tabella del costo totale.',
    og: 'Confrontare offerte di parti saldate',
    tag: 'Acquisti · Costi',
    h1: 'Confrontare le offerte per parti saldate: guardare oltre il prezzo unitario',
    crumb: 'Confronto offerte',
    read: '7 min di lettura',
    body: `
<p>Avete ricevuto offerte da tre fornitori per lo stesso disegno e i prezzi differiscono del 40 %. Il primo istinto è scegliere la più economica. Per le parti saldate, però, gran parte della differenza nasce dal fatto che le offerte non coprono la stessa cosa. Un confronto corretto allinea prima il perimetro e poi guarda il costo totale.</p>
<h2>Da dove nascono le differenze?</h2>
<ul>
<li><strong>Materiale:</strong> uno può aver quotato S355JR, un altro S355J2; uno include il certificato 3.1, l'altro no.</li>
<li><strong>Controlli:</strong> esame visivo e 10 % di UT hanno costi molto diversi.</li>
<li><strong>Superficie:</strong> solo primer, ciclo di verniciatura completo o zincatura?</li>
<li><strong>Documentazione:</strong> rapporto dimensionale, rapporti CND e dossier sono inclusi?</li>
<li><strong>Resa:</strong> EXW e DAP differiscono per trasporto, imballo e dogana (vedi <a href="kaynakli-parca-ihracat-paketleme-incoterms.html">imballo per l'export e Incoterms</a>).</li>
<li><strong>Costi una tantum:</strong> attrezzature, programmazione e primo pezzo sono separati o inclusi nel prezzo unitario?</li>
</ul>
<h2>Passo 1: allineare il perimetro</h2>
<p>Prima del confronto, segnate in un'unica tabella cosa copre ogni offerta:</p>
<table>
<thead><tr><th>Voce</th><th>Fornitore A</th><th>Fornitore B</th><th>Fornitore C</th></tr></thead>
<tbody>
<tr><td>Grado del materiale e certificato</td><td>✓ / ✗</td><td>✓ / ✗</td><td>✓ / ✗</td></tr>
<tr><td>Taglio e piegatura</td><td></td><td></td><td></td></tr>
<tr><td>Saldatura e livello di qualità</td><td></td><td></td><td></td></tr>
<tr><td>Metodo e percentuale CND</td><td></td><td></td><td></td></tr>
<tr><td>Lavorazioni meccaniche</td><td></td><td></td><td></td></tr>
<tr><td>Sabbiatura e ciclo di verniciatura</td><td></td><td></td><td></td></tr>
<tr><td>Rapporto dimensionale e documentazione</td><td></td><td></td><td></td></tr>
<tr><td>Imballo e resa</td><td></td><td></td><td></td></tr>
<tr><td>Attrezzature e costi una tantum</td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>Per le voci mancanti chiedete un prezzo al fornitore o aggiungete una vostra stima. Solo così si confrontano cose confrontabili.</p>
<h2>Passo 2: calcolare il costo totale</h2>
<p>Il costo reale del pezzo è più del prezzo unitario:</p>
<ul>
<li>Prezzo unitario × quantità annua</li>
<li>+ Costi una tantum (attrezzature, primo pezzo, programmazione)</li>
<li>+ Trasporto, imballo, dogana e assicurazione</li>
<li>+ Controllo in accettazione e costo di eventuali scarti</li>
<li>+ Costo di magazzino (tempi più lunghi significano più scorta)</li>
<li>+ Effetto finanziario delle condizioni di pagamento</li>
</ul>
<p>Il prezzo basso di un fornitore lontano può essere annullato da trasporti elevati e da una scorta di sicurezza maggiore. Al contrario, un fornitore un po' più caro ma con documentazione completa può ridurre il tempo speso in accettazione.</p>
<h2>Passo 3: valutare i rischi</h2>
<p>Per ciò che non è prezzo basta una semplice tabella a punteggio: qualità delle domande tecniche, realismo dei tempi, sistema qualità e certificati, referenze, rapidità di comunicazione. Un fornitore che non fa alcuna domanda in fase di offerta forse non ha davvero studiato il disegno.</p>
<h2>Offerte sospettosamente basse</h2>
<p>Quando un'offerta è molto più bassa delle altre, chiedete:</p>
<ul>
<li>A quale data si riferisce il prezzo del materiale e per quanto è valido?</li>
<li>Come è stato stimato il tempo di saldatura? (vedi <a href="kaynak-maliyeti-hesaplama.html">calcolo del costo di saldatura</a>)</li>
<li>CND e documentazione sono davvero inclusi?</li>
<li>C'è capacità o verrà pianificata dopo l'ordine?</li>
</ul>
<p>Un prezzo basso non è sempre negativo; un processo efficiente o materiale adatto a magazzino possono essere un vantaggio reale. Conta capire il motivo della differenza.</p>
<h2>Inviare una richiesta d'offerta chiara</h2>
<p>Il modo migliore per ricevere offerte confrontabili è una richiesta chiara: disegno corrente, requisito di materiale e certificato, livello di qualità, estensione dei CND, trattamento superficiale, quantità annue e per lotto, luogo di consegna e Incoterm. Più la richiesta è chiara, più facile è il confronto (vedi <a href="kaynakli-imalat-teklif-hazirlama.html">preparare una richiesta d'offerta</a>).</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> nelle nostre offerte materiale, saldatura, CND, trattamento superficiale, documentazione, imballo e resa compaiono su righe separate, e i costi una tantum sono distinti dal prezzo unitario. Così potete confrontare la nostra offerta voce per voce. <a href="../iletisim.html">Richiesta d'offerta →</a></p></div>
`,
    faq: [
      ['Perché le offerte per parti saldate variano così tanto?', 'Di solito non coprono lo stesso perimetro: certificati, CND, superficie, documentazione, trasporto e costi una tantum sono trattati in modo diverso.'],
      ['Come confronto le offerte in modo equo?', 'Allineate prima il perimetro in una tabella, quotate le voci mancanti e poi calcolate il costo totale.'],
      ['Cosa comprende il costo totale?', 'Prezzo unitario, costi una tantum, trasporto e dogana, controllo in accettazione, costo di magazzino ed effetto finanziario del pagamento.'],
      ['Scegliere l\'offerta più bassa è rischioso?', 'Sì, se non si capisce la differenza; chiedete le ipotesi su materiale, CND e capacità.']
    ],
    cta_h3: 'Volete un\'offerta confrontabile?',
    cta_p: 'Inviate disegni e requisiti; prepareremo un\'offerta dettagliata voce per voce.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Offertes voor gelaste onderdelen vergelijken: kijk verder dan de stukprijs',
    meta: 'Waar u op let bij het vergelijken van offertes voor gelaste onderdelen: verschillen in scope, materiaal en certificaten, NDO en documentatie, oppervlaktebehandeling, Incoterms en transport, mal- en goedkeuringskosten, betalingsvoorwaarden en een totaalkostentabel.',
    og: 'Offertes gelaste onderdelen vergelijken',
    tag: 'Inkoop · Kosten',
    h1: 'Offertes voor gelaste onderdelen vergelijken: kijk verder dan de stukprijs',
    crumb: 'Offertes vergelijken',
    read: '7 min lezen',
    body: `
<p>U heeft voor dezelfde tekening drie offertes ontvangen en de prijzen verschillen 40%. De eerste reflex is de goedkoopste te kiezen. Bij gelaste onderdelen komt het grootste deel van het verschil echter doordat de offertes niet hetzelfde omvatten. Een goede vergelijking trekt eerst de scope gelijk en kijkt daarna naar de totale kosten.</p>
<h2>Waar komen prijsverschillen vandaan?</h2>
<ul>
<li><strong>Materiaal:</strong> de een rekent met S355JR, de ander met S355J2; de een neemt een 3.1-certificaat mee, de ander niet.</li>
<li><strong>Inspectie:</strong> visuele inspectie en 10% UT verschillen sterk in kosten.</li>
<li><strong>Oppervlak:</strong> alleen primer, een volledig verfsysteem of thermisch verzinken?</li>
<li><strong>Documentatie:</strong> zijn maatrapport, NDO-rapporten en een databook inbegrepen?</li>
<li><strong>Leveringsvoorwaarden:</strong> EXW en DAP verschillen in transport, verpakking en douane (zie <a href="kaynakli-parca-ihracat-paketleme-incoterms.html">exportverpakking en Incoterms</a>).</li>
<li><strong>Eenmalige kosten:</strong> staan mallen, programmering en eerste artikel apart of zitten ze in de stukprijs?</li>
</ul>
<h2>Stap 1: trek de scope gelijk</h2>
<p>Zet voor het vergelijken in één tabel wat elke offerte omvat:</p>
<table>
<thead><tr><th>Post</th><th>Leverancier A</th><th>Leverancier B</th><th>Leverancier C</th></tr></thead>
<tbody>
<tr><td>Materiaalsoort en certificaat</td><td>✓ / ✗</td><td>✓ / ✗</td><td>✓ / ✗</td></tr>
<tr><td>Snijden en zetten</td><td></td><td></td><td></td></tr>
<tr><td>Lassen en kwaliteitsniveau</td><td></td><td></td><td></td></tr>
<tr><td>NDO-methode en percentage</td><td></td><td></td><td></td></tr>
<tr><td>Verspanen</td><td></td><td></td><td></td></tr>
<tr><td>Stralen en verfsysteem</td><td></td><td></td><td></td></tr>
<tr><td>Maatrapport en documentatie</td><td></td><td></td><td></td></tr>
<tr><td>Verpakking en leveringsvoorwaarden</td><td></td><td></td><td></td></tr>
<tr><td>Mallen en eenmalige kosten</td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>Vraag voor ontbrekende posten een prijs op of vul een eigen schatting in. Pas dan vergelijkt u appels met appels.</p>
<h2>Stap 2: bereken de totale kosten</h2>
<p>Wat het onderdeel u werkelijk kost, is meer dan de stukprijs:</p>
<ul>
<li>Stukprijs × jaarvolume</li>
<li>+ Eenmalige kosten (mallen, eerste artikel, programmering)</li>
<li>+ Transport, verpakking, douane en verzekering</li>
<li>+ Ingangscontrole en kosten van mogelijke afkeur</li>
<li>+ Voorraadkosten (langere levertijd betekent meer voorraad)</li>
<li>+ Financieringseffect van de betalingsvoorwaarden</li>
</ul>
<p>De lage stukprijs van een verre leverancier kan wegvallen tegen hoge transportkosten en een grotere veiligheidsvoorraad. Omgekeerd kan een iets duurdere leverancier met complete documentatie de tijd voor ingangscontrole verkorten.</p>
<h2>Stap 3: scoor de risico's</h2>
<p>Voor factoren buiten de prijs werkt een eenvoudige scoretabel: kwaliteit van de technische vragen, realisme van de levertijd, kwaliteitssysteem en certificaten, referenties, communicatiesnelheid. Een leverancier die in de offertefase geen enkele vraag stelt, heeft de tekening misschien niet echt bestudeerd.</p>
<h2>Verdacht lage offertes</h2>
<p>Ligt een offerte ver onder de andere, vraag dan:</p>
<ul>
<li>Op welke datum is de materiaalprijs gebaseerd en hoe lang is die geldig?</li>
<li>Hoe is de lastijd geschat? (zie <a href="kaynak-maliyeti-hesaplama.html">laskosten berekenen</a>)</li>
<li>Zijn NDO en documentatie echt inbegrepen?</li>
<li>Is er capaciteit, of wordt die pas na de order gepland?</li>
</ul>
<p>Een lage prijs is niet altijd slecht; een efficiënt proces of geschikt materiaal op voorraad kan een echt voordeel zijn. Het gaat erom de reden van het verschil te begrijpen.</p>
<h2>Stuur een duidelijke offerteaanvraag</h2>
<p>Vergelijkbare offertes krijgt u het best met een duidelijke aanvraag: actuele tekening, materiaal- en certificaateis, kwaliteitsniveau, NDO-omvang, oppervlaktebehandeling, jaar- en serieaantallen, leverplaats en Incoterm. Hoe duidelijker de aanvraag, hoe eenvoudiger de vergelijking (zie <a href="kaynakli-imalat-teklif-hazirlama.html">een offerteaanvraag opstellen</a>).</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> in onze offertes staan materiaal, lassen, NDO, oppervlaktebehandeling, documentatie, verpakking en leveringsvoorwaarden op aparte regels, en houden we eenmalige kosten gescheiden van de stukprijs. Zo kunt u onze offerte post voor post vergelijken. <a href="../iletisim.html">Offerte aanvragen →</a></p></div>
`,
    faq: [
      ['Waarom verschillen offertes voor gelaste onderdelen zo sterk?', 'Meestal omvatten ze niet dezelfde scope: certificaten, NDO, oppervlak, documentatie, transport en eenmalige kosten worden verschillend behandeld.'],
      ['Hoe vergelijk ik offertes eerlijk?', 'Trek eerst de scope gelijk in één tabel, laat ontbrekende posten prijzen en bereken dan de totale kosten.'],
      ['Wat hoort bij de totale kosten?', 'Stukprijs, eenmalige kosten, transport en douane, ingangscontrole, voorraadkosten en het financieringseffect van betalingsvoorwaarden.'],
      ['Is de laagste offerte kiezen riskant?', 'Ja, als u de reden van het verschil niet begrijpt; vraag naar de aannames over materiaal, NDO en capaciteit.']
    ],
    cta_h3: 'Een offerte die u kunt vergelijken?',
    cta_p: 'Stuur tekeningen en eisen; we maken een offerte die post voor post is uitgesplitst.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Sammenligne tilbud på sveiste deler: se forbi stykkprisen',
    meta: 'Hva du bør sjekke når du sammenligner tilbud på sveiste deler: forskjeller i omfang, materiale og sertifikater, NDT og dokumentasjon, overflatebehandling, Incoterms og frakt, fikstur- og godkjenningskostnader, betalingsbetingelser og totalkostnadstabell.',
    og: 'Sammenligne tilbud på sveiste deler',
    tag: 'Innkjøp · Kostnad',
    h1: 'Sammenligne tilbud på sveiste deler: se forbi stykkprisen',
    crumb: 'Sammenligne tilbud',
    read: '7 min lesing',
    body: `
<p>Du har fått tilbud fra tre leverandører på samme tegning, og prisene spriker med 40 %. Første refleks er å velge det billigste. For sveiste deler kommer likevel det meste av prisforskjellen av at tilbudene ikke dekker det samme. En riktig sammenligning likestiller først omfanget og ser deretter på totalkostnaden.</p>
<h2>Hvor kommer prisforskjellene fra?</h2>
<ul>
<li><strong>Materiale:</strong> én har priset S355JR, en annen S355J2; én inkluderer 3.1-sertifikat, den andre ikke.</li>
<li><strong>Kontroll:</strong> visuell kontroll og 10 % UT koster svært ulikt.</li>
<li><strong>Overflate:</strong> bare primer, fullt malingssystem eller varmforsinking?</li>
<li><strong>Dokumentasjon:</strong> er målerapport, NDT-rapporter og sluttdokumentasjon inkludert?</li>
<li><strong>Leveringsbetingelser:</strong> EXW og DAP skiller seg i frakt, emballasje og toll (se <a href="kaynakli-parca-ihracat-paketleme-incoterms.html">eksportemballasje og Incoterms</a>).</li>
<li><strong>Engangskostnader:</strong> står fiksturer, programmering og førsteartikkel separat eller er de bakt inn i stykkprisen?</li>
</ul>
<h2>Trinn 1: likestill omfanget</h2>
<p>Før tilbudene legges side om side, marker hva hvert av dem dekker i samme tabell:</p>
<table>
<thead><tr><th>Post</th><th>Leverandør A</th><th>Leverandør B</th><th>Leverandør C</th></tr></thead>
<tbody>
<tr><td>Materialkvalitet og sertifikat</td><td>✓ / ✗</td><td>✓ / ✗</td><td>✓ / ✗</td></tr>
<tr><td>Skjæring og bukking</td><td></td><td></td><td></td></tr>
<tr><td>Sveising og kvalitetsnivå</td><td></td><td></td><td></td></tr>
<tr><td>NDT-metode og omfang</td><td></td><td></td><td></td></tr>
<tr><td>Maskinering</td><td></td><td></td><td></td></tr>
<tr><td>Blåsing og malingssystem</td><td></td><td></td><td></td></tr>
<tr><td>Målerapport og dokumentasjon</td><td></td><td></td><td></td></tr>
<tr><td>Emballasje og leveringsbetingelser</td><td></td><td></td><td></td></tr>
<tr><td>Fiksturer og engangskostnader</td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>For poster som mangler, be leverandøren om pris eller legg inn eget anslag. Først da sammenligner du likt med likt.</p>
<h2>Trinn 2: beregn totalkostnaden</h2>
<p>Det delen faktisk koster deg, er mer enn stykkprisen:</p>
<ul>
<li>Stykkpris × årsvolum</li>
<li>+ Engangskostnader (fiksturer, førsteartikkel, programmering)</li>
<li>+ Frakt, emballasje, toll og forsikring</li>
<li>+ Mottakskontroll og kostnad ved mulige avvisninger</li>
<li>+ Lagerkostnad (lengre leveringstid betyr mer lager)</li>
<li>+ Finansieringseffekten av betalingsbetingelsene</li>
</ul>
<p>Lav stykkpris hos en fjern leverandør kan spises opp av høy frakt og større sikkerhetslager. Omvendt kan en litt dyrere leverandør med komplett dokumentasjon redusere tiden som brukes på mottakskontroll.</p>
<h2>Trinn 3: vurder risikoen</h2>
<p>For forhold utenom pris holder en enkel poengtabell: kvaliteten på de tekniske spørsmålene, hvor realistisk leveringstiden er, kvalitetssystem og sertifikater, referanser, svartid. En leverandør som ikke stiller ett eneste spørsmål i tilbudsfasen, har kanskje ikke studert tegningen ordentlig.</p>
<h2>Mistenkelig lave tilbud</h2>
<p>Når ett tilbud ligger langt under de andre, spør:</p>
<ul>
<li>Hvilken dato er materialprisen basert på, og hvor lenge gjelder den?</li>
<li>Hvordan er sveisetiden anslått? (se <a href="kaynak-maliyeti-hesaplama.html">beregning av sveisekostnad</a>)</li>
<li>Er NDT og dokumentasjon virkelig inkludert?</li>
<li>Finnes kapasiteten, eller planlegges den etter ordren?</li>
</ul>
<p>Lav pris er ikke alltid dårlig; en effektiv prosess eller passende materiale på lager kan være en reell fordel. Det viktige er å forstå årsaken til forskjellen.</p>
<h2>Send en tydelig forespørsel</h2>
<p>Sammenlignbare tilbud får du best med en tydelig forespørsel: gjeldende tegning, krav til materiale og sertifikat, kvalitetsnivå, NDT-omfang, overflatebehandling, års- og partistørrelser, leveringssted og Incoterm. Jo tydeligere forespørsel, desto enklere sammenligning (se <a href="kaynakli-imalat-teklif-hazirlama.html">utarbeide en forespørsel</a>).</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> i tilbudene våre står materiale, sveising, NDT, overflatebehandling, dokumentasjon, emballasje og leveringsbetingelser på egne linjer, og engangskostnader holdes atskilt fra stykkprisen. Da kan du sammenligne tilbudet vårt post for post. <a href="../iletisim.html">Be om tilbud →</a></p></div>
`,
    faq: [
      ['Hvorfor varierer tilbud på sveiste deler så mye?', 'Som regel dekker de ikke samme omfang: sertifikater, NDT, overflate, dokumentasjon, frakt og engangskostnader behandles ulikt.'],
      ['Hvordan sammenligner jeg tilbud rettferdig?', 'Likestill omfanget i én tabell, få pris på manglende poster og beregn deretter totalkostnaden.'],
      ['Hva inngår i totalkostnaden?', 'Stykkpris, engangskostnader, frakt og toll, mottakskontroll, lagerkostnad og finansieringseffekten av betalingsbetingelsene.'],
      ['Er det risikabelt å velge det laveste tilbudet?', 'Ja, hvis man ikke forstår forskjellen; spør om forutsetningene for materiale, NDT og kapasitet.']
    ],
    cta_h3: 'Vil du ha et tilbud du kan sammenligne?',
    cta_p: 'Send tegninger og krav; vi lager et tilbud som er brutt ned post for post.',
    cta_btn: 'Be om tilbud →'
  }
};
