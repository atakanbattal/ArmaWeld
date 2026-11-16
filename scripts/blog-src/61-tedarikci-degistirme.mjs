export default {
  order: 61,
  slug: 'kaynakli-parca-tedarikcisi-degistirme',
  key: 'p61_resourcing',
  date: '2025-11-20',
  keywords: 'kaynaklı parça tedarikçisi değiştirme, tedarikçi transferi, üretim taşıma, yeni tedarikçiye geçiş, resourcing welded parts, supplier transfer checklist, Lieferantenwechsel Schweißteile, Verlagerung Fertigung, cambio de proveedor piezas soldadas, changement de fournisseur pièces soudées',
  related: ['fason-kaynak-tedarikci-secimi', 'ilk-parca-onayi-kaynakli-imalat', 'ppap-kaynakli-parca-onayi', 'kaynakli-imalat-tedarikci-denetimi'],
  tr: {
    title: 'Kaynaklı Parça Tedarikçisi Değiştirme: Üretimi Sorunsuz Taşımanın Adımları',
    meta: 'Kaynaklı parça üretimini yeni bir tedarikçiye taşırken izlenecek adımlar: veri paketi, fikstür ve aparatlar, WPS devri, ilk parça onayı, paralel üretim dönemi, stok tamponu ve en sık yapılan hatalar.',
    og: 'Tedarikçi değiştirme rehberi',
    tag: 'Satın Alma · Tedarik',
    h1: 'Kaynaklı Parça Tedarikçisi Değiştirme: Üretimi Sorunsuz Taşımanın Adımları',
    crumb: 'Tedarikçi değiştirme',
    read: '8 dk okuma',
    body: `
<p>Kaynaklı bir parçanın tedarikçisini değiştirmek kâğıt üzerinde basit görünür: yeni firmaya çizimi gönderirsiniz, fiyatı alırsınız, sipariş verirsiniz. Gerçekte ise eski tedarikçide yıllar içinde biriken pek çok bilgi hiçbir çizimde yazmaz. Kaynak sırası, fikstürdeki küçük bir ön gerilme, montajda sorun çıkaran bir delik için yapılan sessiz bir düzeltme... Taşıma planı bu yazılı olmayan bilgiyi açığa çıkarmak için yapılır.</p>
<h2>Neden Tedarikçi Değiştirilir?</h2>
<ul>
<li>Teslim performansının sürekli düşmesi veya kapasitenin yetmemesi.</li>
<li>Tekrarlayan kalite sorunları ve kapanmayan düzeltici faaliyetler.</li>
<li>Maliyet baskısı, döviz veya enerji kaynaklı fiyat artışları.</li>
<li>Tek tedarikçiye bağımlılığı azaltma isteği (bkz. <a href="cift-tedarikci-dual-sourcing-kaynakli-parca.html">çift tedarikçi stratejisi</a>).</li>
<li>Eski tedarikçinin işi bırakması veya ürün grubundan çıkması.</li>
</ul>
<p>Sebep ne olursa olsun, taşıma sırasında müşterinin hattı durmamalıdır. Bu yüzden zaman planı, teknik devir ve stok planı birlikte yürütülür.</p>
<h2>1. Teknik Veri Paketini Toplayın</h2>
<p>Yeni tedarikçiye yalnızca PDF çizim göndermek en sık yapılan hatadır. Eksiksiz bir paket şunları içermelidir:</p>
<table>
<thead><tr><th>Belge</th><th>Neden önemli?</th></tr></thead>
<tbody>
<tr><td>Güncel revizyonlu çizim ve 3D model</td><td>Kesim ve büküm programları modelden üretilir</td></tr>
<tr><td>Malzeme ve sertifika şartı</td><td>Örneğin S355J2 ve EN 10204 3.1</td></tr>
<tr><td>Kaynak sınıfı ve kalite seviyesi</td><td>ISO 5817 seviyesi, EN 1090 EXC sınıfı gibi</td></tr>
<tr><td>Muayene planı ve NDT oranları</td><td>Hangi dikişe hangi yöntem, yüzde kaç</td></tr>
<tr><td>Yüzey işlemi şartnamesi</td><td>Kumlama derecesi, boya sistemi, kalınlık</td></tr>
<tr><td>Son NCR'ler ve müşteri şikâyetleri</td><td>Bilinen sorunların tekrarını önler</td></tr>
<tr><td>Ambalaj ve etiketleme talimatı</td><td>Hattın beklediği teslim şekli</td></tr>
</tbody>
</table>
<p>Eski tedarikçiyle ilişki iyi durumdaysa kaynak sırası, fikstür fotoğrafları ve ölçüm raporları da istenmelidir. Bu bilgiler yeni tedarikçinin öğrenme süresini ciddi biçimde kısaltır.</p>
<h2>2. Fikstür, Aparat ve Mastarlar Kimin?</h2>
<p>Müşteriye ait kaynak fikstürleri, kontrol mastarları ve özel kalıplar varsa sözleşmeye göre geri alınıp yeni tedarikçiye gönderilir. Nakliye öncesi durumları fotoğraflanmalı ve ölçülmelidir; hasarlı bir fikstürle başlamak ilk parçada uyumsuzluk demektir. Fikstür müşteriye ait değilse yenisinin tasarımı ve imalatı plana eklenir (bkz. <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">kaynak fikstürü tasarımı</a>).</p>
<h2>3. Kaynak Prosedürleri ve Yeterlilikler</h2>
<p>WPS'ler tedarikçiye özgüdür; eski tedarikçinin WPS'i yeni atölyede doğrudan kullanılamaz. Yeni tedarikçi, gereken malzeme, kalınlık ve pozisyon aralığını kapsayan onaylı WPQR'lere ve buna uygun kaynakçı sertifikalarına sahip olmalıdır. Eksik varsa yeni prosedür onayı zaman alır ve plana yazılmalıdır (bkz. <a href="wps-nedir.html">WPS nedir?</a>).</p>
<h2>4. İlk Parça Onayı</h2>
<p>Yeni tedarikçinin ilk ürettiği parçalar seri üretimden önce tam ölçüm, kaynak muayenesi ve malzeme belgesi kontrolünden geçmelidir. Otomotiv ve benzeri sektörlerde bu süreç PPAP ile yapılır; diğer sektörlerde ilk parça raporu çoğu zaman yeterlidir (bkz. <a href="ilk-parca-onayi-kaynakli-imalat.html">ilk parça onayı</a>). Müşteri hattında montaj denemesi yapılması, ölçü raporunun gösteremediği uyum sorunlarını ortaya çıkarır.</p>
<h2>5. Paralel Dönem ve Stok Tamponu</h2>
<p>Taşımanın en riskli kısmı, eski tedarikçinin bıraktığı ile yenisinin tam hıza ulaştığı an arasındaki boşluktur. İki pratik önlem vardır:</p>
<ul>
<li><strong>Stok tamponu:</strong> eski tedarikçiden, geçiş süresini karşılayacak kadar ek parça alınır.</li>
<li><strong>Paralel üretim:</strong> bir süre iki tedarikçi aynı parçayı üretir; yeni tedarikçinin payı kademeli artırılır.</li>
</ul>
<p>Tampon miktarı, ilk parça onayı ve olası bir düzeltme turunun süresine göre hesaplanmalıdır. İlk denemede her şeyin onaylanacağını varsaymak iyimser bir plandır.</p>
<h2>6. Örnek Zaman Çizelgesi</h2>
<table>
<thead><tr><th>Aşama</th><th>İçerik</th></tr></thead>
<tbody>
<tr><td>Hazırlık</td><td>Veri paketi, teklif, denetim veya fabrika ziyareti</td></tr>
<tr><td>Teknik devir</td><td>Fikstür transferi veya imalatı, WPS kontrolü, malzeme tedariki</td></tr>
<tr><td>İlk parça</td><td>Numune üretimi, ölçüm, muayene, montaj denemesi</td></tr>
<tr><td>Paralel dönem</td><td>Küçük partiler, performans takibi</td></tr>
<tr><td>Tam geçiş</td><td>Eski tedarikçinin kapatılması, stok tamponunun tüketilmesi</td></tr>
</tbody>
</table>
<p>Her aşamanın süresi parçanın karmaşıklığına, malzeme tedarik süresine ve fikstür ihtiyacına bağlıdır; bu yüzden takvim tedarikçiyle birlikte, gerçek tedarik süreleriyle yazılmalıdır.</p>
<h2>En Sık Yapılan Hatalar</h2>
<ul>
<li>Eski revizyonlu çizimle teklif almak.</li>
<li>Bilinen sorunları yeni tedarikçiden saklamak ve aynı hatanın tekrarlanmasını beklemek.</li>
<li>Fiyatı yalnızca birim fiyatla karşılaştırmak; fikstür, nakliye ve onay maliyetini atlamak.</li>
<li>Stok tamponu olmadan eski tedarikçiyi kapatmak.</li>
<li>İlk parça onayını sadece ölçü raporuyla yapmak, montaj denemesini atlamak.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Başka bir tedarikçiden devralınan parçalarda veri paketini birlikte gözden geçirir, eksik bilgiyi teklif aşamasında soruyor ve ilk parçaları ölçüm ve muayene raporlarıyla sunuyoruz. Konya'daki atölyemizde kaynak, NDT ve dokümantasyonu kendimiz yürütüyor; kesim, büküm ve yüzey işlemini iş ortaklarımızla koordine ediyoruz. <a href="../konya-fason-kaynak.html">Fason kaynak hizmeti →</a></p></div>
`,
    faq: [
      ['Kaynaklı parça tedarikçisini değiştirmek ne kadar sürer?', 'Parçaya göre değişir; veri paketi, fikstür ihtiyacı, malzeme tedariki ve ilk parça onayı süresi birlikte planlanmalıdır.'],
      ['Eski tedarikçinin WPS\'leri yeni tedarikçide kullanılabilir mi?', 'Hayır. WPS ve WPQR tedarikçiye özgüdür; yeni atölye kendi onaylı prosedürleriyle üretmelidir.'],
      ['Geçiş sırasında hat duruşunu nasıl önlerim?', 'Eski tedarikçiden stok tamponu alarak ve bir süre paralel üretim yaparak.'],
      ['Yeni tedarikçiye hangi belgeleri vermeliyim?', 'Güncel çizim ve 3D model, malzeme ve kalite şartları, muayene planı, yüzey şartnamesi, bilinen sorunlar ve ambalaj talimatı.']
    ],
    cta_h3: 'Tedarikçi değiştirmeyi mi düşünüyorsunuz?',
    cta_p: 'Çizim ve şartnameleri gönderin; eksik bilgiyi ve gerçekçi bir geçiş planını birlikte çıkaralım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Changing Your Welded Parts Supplier: How to Transfer Production Without Disruption',
    meta: 'Steps for moving welded part production to a new supplier: technical data pack, fixtures and gauges, WPS qualification, first article approval, parallel production, safety stock and the most common mistakes.',
    og: 'Changing welded parts supplier',
    tag: 'Purchasing · Sourcing',
    h1: 'Changing Your Welded Parts Supplier: How to Transfer Production Without Disruption',
    crumb: 'Changing supplier',
    read: '8 min read',
    body: `
<p>On paper, changing the supplier of a welded part looks simple: send the drawing, get a price, place the order. In practice, a lot of knowledge builds up at the old supplier over the years and never makes it onto a drawing. The welding sequence, a small pre-set in the fixture, a quiet correction to a hole that caused trouble in assembly. A transfer plan exists to bring this unwritten knowledge to the surface.</p>
<h2>Why Companies Change Suppliers</h2>
<ul>
<li>Delivery performance keeps slipping or capacity is no longer enough.</li>
<li>Recurring quality problems and corrective actions that never close.</li>
<li>Cost pressure, currency or energy-driven price increases.</li>
<li>Reducing dependence on a single source (see <a href="cift-tedarikci-dual-sourcing-kaynakli-parca.html">dual sourcing strategy</a>).</li>
<li>The old supplier stops the business or exits the product group.</li>
</ul>
<p>Whatever the reason, the customer's line must not stop during the transfer. That is why the schedule, the technical handover and the stock plan are run together.</p>
<h2>1. Assemble the Technical Data Pack</h2>
<p>Sending only a PDF drawing to the new supplier is the most common mistake. A complete pack contains:</p>
<table>
<thead><tr><th>Document</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Current drawing revision and 3D model</td><td>Cutting and bending programs are built from the model</td></tr>
<tr><td>Material and certificate requirement</td><td>For example S355J2 with EN 10204 3.1</td></tr>
<tr><td>Weld class and quality level</td><td>ISO 5817 level, EN 1090 execution class</td></tr>
<tr><td>Inspection plan and NDT rates</td><td>Which method on which weld, at what percentage</td></tr>
<tr><td>Surface treatment specification</td><td>Blast grade, paint system, thickness</td></tr>
<tr><td>Recent NCRs and customer complaints</td><td>Prevents known problems from repeating</td></tr>
<tr><td>Packaging and labelling instructions</td><td>How the line expects to receive parts</td></tr>
</tbody>
</table>
<p>If the relationship with the old supplier is still workable, ask for the welding sequence, fixture photos and measurement reports too. They shorten the new supplier's learning curve considerably.</p>
<h2>2. Who Owns the Fixtures, Tools and Gauges?</h2>
<p>Customer-owned welding fixtures, check gauges and special tooling are recovered according to the contract and sent to the new supplier. Photograph and measure them before shipment; starting with a damaged fixture means a non-conformity on the first part. If the fixture is not customer property, design and manufacture of a new one goes into the plan (see <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">welding fixture design</a>).</p>
<h2>3. Welding Procedures and Qualifications</h2>
<p>A WPS belongs to the manufacturer; the old supplier's WPS cannot simply be used in a new workshop. The new supplier needs approved WPQRs covering the required material, thickness and position range, and matching welder certificates. Where something is missing, new procedure qualification takes time and must be in the schedule (see <a href="wps-nedir.html">What is a WPS?</a>).</p>
<h2>4. First Article Approval</h2>
<p>The first parts from the new supplier should go through full dimensional inspection, weld inspection and material document review before series production. In automotive and similar sectors this runs through PPAP; elsewhere a first article report is usually enough (see <a href="ilk-parca-onayi-kaynakli-imalat.html">first article approval</a>). A trial assembly on the customer's line reveals fit problems a dimensional report cannot show.</p>
<h2>5. Parallel Phase and Safety Stock</h2>
<p>The riskiest part of a transfer is the gap between the old supplier stopping and the new one reaching full rate. Two practical measures help:</p>
<ul>
<li><strong>Safety stock:</strong> extra parts from the old supplier, enough to cover the transition.</li>
<li><strong>Parallel production:</strong> for a period both suppliers make the same part, and the new supplier's share is raised step by step.</li>
</ul>
<p>Size the buffer on the time needed for first article approval plus one possible correction loop. Assuming everything will pass at the first attempt is an optimistic plan.</p>
<h2>6. Example Timeline</h2>
<table>
<thead><tr><th>Phase</th><th>Content</th></tr></thead>
<tbody>
<tr><td>Preparation</td><td>Data pack, quotation, audit or site visit</td></tr>
<tr><td>Technical handover</td><td>Fixture transfer or build, WPS check, material procurement</td></tr>
<tr><td>First article</td><td>Sample production, measurement, inspection, trial assembly</td></tr>
<tr><td>Parallel phase</td><td>Small batches, performance tracking</td></tr>
<tr><td>Full transfer</td><td>Old supplier closed out, safety stock consumed</td></tr>
</tbody>
</table>
<p>The duration of each phase depends on part complexity, material lead time and fixture needs, so the schedule should be written together with the supplier using real lead times.</p>
<h2>Most Common Mistakes</h2>
<ul>
<li>Requesting quotes on an outdated drawing revision.</li>
<li>Hiding known problems from the new supplier and then seeing the same defect again.</li>
<li>Comparing unit price only, ignoring fixture, freight and approval costs.</li>
<li>Closing the old supplier without a safety stock.</li>
<li>Approving the first article on a dimensional report alone, without a trial assembly.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> For parts taken over from another supplier we review the data pack with you, ask about missing information at the quotation stage and deliver the first parts with measurement and inspection reports. In our Konya workshop we carry out welding, NDT and documentation ourselves; cutting, bending and surface treatment are coordinated with our partners. <a href="../konya-fason-kaynak.html">Contract welding service →</a></p></div>
`,
    faq: [
      ['How long does it take to change a welded parts supplier?', 'It depends on the part; data pack, fixture needs, material lead time and first article approval have to be planned together.'],
      ['Can the old supplier\'s WPS be used by the new supplier?', 'No. WPS and WPQR belong to the manufacturer; the new workshop must produce under its own approved procedures.'],
      ['How do I avoid a line stop during the transfer?', 'Build a safety stock from the old supplier and run a period of parallel production.'],
      ['Which documents should I give the new supplier?', 'Current drawing and 3D model, material and quality requirements, inspection plan, surface specification, known problems and packaging instructions.']
    ],
    cta_h3: 'Thinking about changing supplier?',
    cta_p: 'Send the drawings and specifications; we will identify missing information and a realistic transfer plan with you.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Lieferantenwechsel bei Schweißteilen: So verlagern Sie die Fertigung ohne Unterbrechung',
    meta: 'Schritte für die Verlagerung von Schweißteilen zu einem neuen Lieferanten: technisches Datenpaket, Vorrichtungen und Lehren, WPS-Qualifizierung, Erstmusterfreigabe, Parallelfertigung, Sicherheitsbestand und typische Fehler.',
    og: 'Lieferantenwechsel Schweißteile',
    tag: 'Einkauf · Beschaffung',
    h1: 'Lieferantenwechsel bei Schweißteilen: So verlagern Sie die Fertigung ohne Unterbrechung',
    crumb: 'Lieferantenwechsel',
    read: '8 Min. Lesezeit',
    body: `
<p>Auf dem Papier wirkt ein Lieferantenwechsel bei Schweißteilen einfach: Zeichnung schicken, Preis einholen, bestellen. In der Praxis sammelt sich beim bisherigen Lieferanten über Jahre Wissen an, das auf keiner Zeichnung steht. Die Schweißfolge, eine kleine Vorspannung in der Vorrichtung, eine stillschweigende Korrektur an einer Bohrung, die in der Montage Probleme machte. Ein Verlagerungsplan soll genau dieses ungeschriebene Wissen sichtbar machen.</p>
<h2>Warum Unternehmen den Lieferanten wechseln</h2>
<ul>
<li>Die Liefertreue sinkt dauerhaft oder die Kapazität reicht nicht mehr.</li>
<li>Wiederkehrende Qualitätsprobleme und Korrekturmaßnahmen, die nie abgeschlossen werden.</li>
<li>Kostendruck sowie Preiserhöhungen durch Währung oder Energie.</li>
<li>Abhängigkeit von einer einzigen Quelle verringern (siehe <a href="cift-tedarikci-dual-sourcing-kaynakli-parca.html">Dual-Sourcing-Strategie</a>).</li>
<li>Der bisherige Lieferant gibt das Geschäft oder die Produktgruppe auf.</li>
</ul>
<p>Unabhängig vom Grund darf die Linie des Kunden während der Verlagerung nicht stehen. Deshalb werden Terminplan, technische Übergabe und Bestandsplanung gemeinsam gesteuert.</p>
<h2>1. Technisches Datenpaket zusammenstellen</h2>
<p>Dem neuen Lieferanten nur eine PDF-Zeichnung zu schicken, ist der häufigste Fehler. Ein vollständiges Paket enthält:</p>
<table>
<thead><tr><th>Dokument</th><th>Warum wichtig?</th></tr></thead>
<tbody>
<tr><td>Aktueller Zeichnungsstand und 3D-Modell</td><td>Schneid- und Biegeprogramme entstehen aus dem Modell</td></tr>
<tr><td>Werkstoff- und Zeugnisanforderung</td><td>Zum Beispiel S355J2 mit EN 10204 3.1</td></tr>
<tr><td>Schweißnahtklasse und Bewertungsgruppe</td><td>ISO-5817-Gruppe, EN-1090-Ausführungsklasse</td></tr>
<tr><td>Prüfplan und ZfP-Umfang</td><td>Welches Verfahren an welcher Naht, mit welchem Anteil</td></tr>
<tr><td>Spezifikation der Oberflächenbehandlung</td><td>Strahlgrad, Beschichtungssystem, Schichtdicke</td></tr>
<tr><td>Letzte Abweichungsberichte und Reklamationen</td><td>Verhindert, dass bekannte Fehler wiederkehren</td></tr>
<tr><td>Verpackungs- und Kennzeichnungsvorschrift</td><td>Wie die Linie die Teile erwartet</td></tr>
</tbody>
</table>
<p>Ist das Verhältnis zum bisherigen Lieferanten noch tragfähig, sollten auch Schweißfolge, Vorrichtungsfotos und Messprotokolle angefragt werden. Sie verkürzen die Einarbeitung des neuen Lieferanten deutlich.</p>
<h2>2. Wem gehören Vorrichtungen, Werkzeuge und Lehren?</h2>
<p>Kundeneigene Schweißvorrichtungen, Prüflehren und Sonderwerkzeuge werden vertragsgemäß zurückgeholt und an den neuen Lieferanten geschickt. Vor dem Versand fotografieren und vermessen; mit einer beschädigten Vorrichtung zu starten bedeutet eine Abweichung am Erstteil. Gehört die Vorrichtung nicht dem Kunden, gehören Konstruktion und Bau einer neuen in den Plan (siehe <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">Schweißvorrichtungen für die Serie</a>).</p>
<h2>3. Schweißanweisungen und Qualifikationen</h2>
<p>Eine WPS gehört dem Hersteller; die WPS des bisherigen Lieferanten kann in einer neuen Werkstatt nicht einfach übernommen werden. Der neue Lieferant braucht anerkannte WPQR für den geforderten Werkstoff-, Dicken- und Positionsbereich sowie passende Schweißerprüfungen. Fehlt etwas, kostet eine neue Verfahrensprüfung Zeit und gehört in den Terminplan (siehe <a href="wps-nedir.html">Was ist eine WPS?</a>).</p>
<h2>4. Erstmusterfreigabe</h2>
<p>Die ersten Teile des neuen Lieferanten sollten vor der Serie vollständig vermessen, schweißtechnisch geprüft und hinsichtlich der Werkstoffdokumente kontrolliert werden. In der Automobilindustrie und ähnlichen Branchen läuft das über PPAP; sonst reicht meist ein Erstmusterprüfbericht (siehe <a href="ilk-parca-onayi-kaynakli-imalat.html">Erstmusterfreigabe</a>). Eine Probemontage an der Kundenlinie zeigt Passungsprobleme, die ein Messprotokoll nicht zeigt.</p>
<h2>5. Parallelphase und Sicherheitsbestand</h2>
<p>Am riskantesten ist die Lücke zwischen dem Ausstieg des alten und dem vollen Hochlauf des neuen Lieferanten. Zwei Maßnahmen helfen:</p>
<ul>
<li><strong>Sicherheitsbestand:</strong> zusätzliche Teile vom alten Lieferanten, ausreichend für den Übergang.</li>
<li><strong>Parallelfertigung:</strong> eine Zeit lang fertigen beide Lieferanten dasselbe Teil, der Anteil des neuen steigt schrittweise.</li>
</ul>
<p>Der Puffer sollte die Zeit für die Erstmusterfreigabe plus eine mögliche Korrekturschleife abdecken. Davon auszugehen, dass alles beim ersten Versuch freigegeben wird, ist ein optimistischer Plan.</p>
<h2>6. Beispielhafter Ablauf</h2>
<table>
<thead><tr><th>Phase</th><th>Inhalt</th></tr></thead>
<tbody>
<tr><td>Vorbereitung</td><td>Datenpaket, Angebot, Audit oder Werksbesuch</td></tr>
<tr><td>Technische Übergabe</td><td>Vorrichtungstransfer oder -bau, WPS-Prüfung, Materialbeschaffung</td></tr>
<tr><td>Erstmuster</td><td>Musterfertigung, Messung, Prüfung, Probemontage</td></tr>
<tr><td>Parallelphase</td><td>Kleine Lose, Leistungsverfolgung</td></tr>
<tr><td>Vollständige Verlagerung</td><td>Alter Lieferant abgeschlossen, Sicherheitsbestand verbraucht</td></tr>
</tbody>
</table>
<p>Die Dauer jeder Phase hängt von der Teilekomplexität, der Materialbeschaffung und dem Vorrichtungsbedarf ab. Der Terminplan sollte daher gemeinsam mit dem Lieferanten und mit realen Lieferzeiten erstellt werden.</p>
<h2>Typische Fehler</h2>
<ul>
<li>Angebote auf Basis eines veralteten Zeichnungsstands einholen.</li>
<li>Bekannte Probleme vor dem neuen Lieferanten verschweigen und denselben Fehler erneut erleben.</li>
<li>Nur Stückpreise vergleichen und Vorrichtungs-, Fracht- und Freigabekosten ignorieren.</li>
<li>Den alten Lieferanten ohne Sicherheitsbestand abschalten.</li>
<li>Das Erstmuster nur per Messprotokoll freigeben, ohne Probemontage.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei Teilen, die wir von einem anderen Lieferanten übernehmen, prüfen wir das Datenpaket gemeinsam mit Ihnen, klären fehlende Angaben schon im Angebot und liefern die Erstteile mit Mess- und Prüfberichten. In unserer Werkstatt in Konya führen wir Schweißen, ZfP und Dokumentation selbst durch; Zuschnitt, Kanten und Oberflächenbehandlung koordinieren wir mit unseren Partnern. <a href="../konya-fason-kaynak.html">Lohnschweißen →</a></p></div>
`,
    faq: [
      ['Wie lange dauert ein Lieferantenwechsel bei Schweißteilen?', 'Das hängt vom Teil ab; Datenpaket, Vorrichtungsbedarf, Materiallieferzeit und Erstmusterfreigabe müssen gemeinsam geplant werden.'],
      ['Kann der neue Lieferant die WPS des alten verwenden?', 'Nein. WPS und WPQR gehören dem Hersteller; die neue Werkstatt muss nach eigenen anerkannten Verfahren fertigen.'],
      ['Wie vermeide ich einen Linienstillstand beim Wechsel?', 'Durch einen Sicherheitsbestand vom alten Lieferanten und eine Phase der Parallelfertigung.'],
      ['Welche Unterlagen braucht der neue Lieferant?', 'Aktuelle Zeichnung und 3D-Modell, Werkstoff- und Qualitätsanforderungen, Prüfplan, Oberflächenspezifikation, bekannte Probleme und Verpackungsvorschrift.']
    ],
    cta_h3: 'Sie denken über einen Lieferantenwechsel nach?',
    cta_p: 'Senden Sie Zeichnungen und Spezifikationen; wir klären fehlende Angaben und einen realistischen Verlagerungsplan mit Ihnen.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Cambiar de proveedor de piezas soldadas: cómo trasladar la producción sin interrupciones',
    meta: 'Pasos para trasladar la fabricación de piezas soldadas a un nuevo proveedor: paquete de datos técnicos, utillajes y calibres, cualificación de WPS, aprobación de primera pieza, producción en paralelo, stock de seguridad y errores frecuentes.',
    og: 'Cambio de proveedor de piezas soldadas',
    tag: 'Compras · Aprovisionamiento',
    h1: 'Cambiar de proveedor de piezas soldadas: cómo trasladar la producción sin interrupciones',
    crumb: 'Cambio de proveedor',
    read: '8 min de lectura',
    body: `
<p>Sobre el papel, cambiar el proveedor de una pieza soldada parece sencillo: se envía el plano, se pide precio y se hace el pedido. En la práctica, el proveedor anterior acumula durante años conocimiento que nunca llega al plano. La secuencia de soldadura, una pequeña precarga en el utillaje, una corrección discreta en un taladro que daba problemas en el montaje. El plan de traslado existe para sacar a la luz ese conocimiento no escrito.</p>
<h2>Por qué se cambia de proveedor</h2>
<ul>
<li>El cumplimiento de plazos empeora o la capacidad ya no es suficiente.</li>
<li>Problemas de calidad repetidos y acciones correctivas que nunca se cierran.</li>
<li>Presión de costes y subidas de precio por divisa o energía.</li>
<li>Reducir la dependencia de una única fuente (ver <a href="cift-tedarikci-dual-sourcing-kaynakli-parca.html">estrategia de doble proveedor</a>).</li>
<li>El proveedor anterior cierra o abandona el grupo de productos.</li>
</ul>
<p>Sea cual sea el motivo, la línea del cliente no debe pararse durante el traslado. Por eso el calendario, la transferencia técnica y el plan de stock se gestionan juntos.</p>
<h2>1. Reunir el paquete de datos técnicos</h2>
<p>Enviar solo un plano en PDF al nuevo proveedor es el error más habitual. Un paquete completo incluye:</p>
<table>
<thead><tr><th>Documento</th><th>Por qué importa</th></tr></thead>
<tbody>
<tr><td>Plano en revisión vigente y modelo 3D</td><td>Los programas de corte y plegado salen del modelo</td></tr>
<tr><td>Requisito de material y certificado</td><td>Por ejemplo S355J2 con EN 10204 3.1</td></tr>
<tr><td>Clase de soldadura y nivel de calidad</td><td>Nivel ISO 5817, clase de ejecución EN 1090</td></tr>
<tr><td>Plan de inspección y porcentajes de END</td><td>Qué método en qué cordón y en qué proporción</td></tr>
<tr><td>Especificación del tratamiento superficial</td><td>Grado de granallado, sistema de pintura, espesor</td></tr>
<tr><td>No conformidades y reclamaciones recientes</td><td>Evita que se repitan problemas conocidos</td></tr>
<tr><td>Instrucciones de embalaje y etiquetado</td><td>Cómo espera la línea recibir las piezas</td></tr>
</tbody>
</table>
<p>Si la relación con el proveedor anterior lo permite, conviene pedir también la secuencia de soldadura, fotos del utillaje e informes de medición. Acortan mucho el aprendizaje del nuevo proveedor.</p>
<h2>2. ¿De quién son los utillajes, herramientas y calibres?</h2>
<p>Los utillajes de soldadura, calibres de control y herramientas especiales propiedad del cliente se recuperan según el contrato y se envían al nuevo proveedor. Fotografíelos y mídalos antes del envío: empezar con un utillaje dañado significa una no conformidad en la primera pieza. Si el utillaje no es del cliente, el diseño y la fabricación de uno nuevo entran en el plan (ver <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">diseño de utillajes de soldadura</a>).</p>
<h2>3. Procedimientos de soldadura y cualificaciones</h2>
<p>Una WPS pertenece al fabricante; la WPS del proveedor anterior no puede usarse sin más en otro taller. El nuevo proveedor necesita WPQR aprobados que cubran el material, espesor y posiciones requeridos, y homologaciones de soldadores acordes. Si falta algo, la nueva cualificación lleva tiempo y debe estar en el calendario (ver <a href="wps-nedir.html">¿Qué es una WPS?</a>).</p>
<h2>4. Aprobación de primera pieza</h2>
<p>Las primeras piezas del nuevo proveedor deben pasar control dimensional completo, inspección de soldadura y revisión de certificados antes de la serie. En automoción y sectores similares se hace mediante PPAP; en otros suele bastar un informe de primera pieza (ver <a href="ilk-parca-onayi-kaynakli-imalat.html">aprobación de primera pieza</a>). Un montaje de prueba en la línea del cliente revela problemas de ajuste que un informe dimensional no muestra.</p>
<h2>5. Fase en paralelo y stock de seguridad</h2>
<p>Lo más arriesgado es el hueco entre la salida del proveedor anterior y el momento en que el nuevo alcanza su ritmo completo. Dos medidas prácticas:</p>
<ul>
<li><strong>Stock de seguridad:</strong> piezas adicionales del proveedor anterior para cubrir la transición.</li>
<li><strong>Producción en paralelo:</strong> durante un tiempo ambos fabrican la misma pieza y la cuota del nuevo sube por etapas.</li>
</ul>
<p>Dimensione el colchón con el tiempo de aprobación de primera pieza más una posible ronda de corrección. Suponer que todo se aprobará al primer intento es un plan optimista.</p>
<h2>6. Calendario orientativo</h2>
<table>
<thead><tr><th>Fase</th><th>Contenido</th></tr></thead>
<tbody>
<tr><td>Preparación</td><td>Paquete de datos, oferta, auditoría o visita</td></tr>
<tr><td>Transferencia técnica</td><td>Traslado o fabricación de utillajes, revisión de WPS, compra de material</td></tr>
<tr><td>Primera pieza</td><td>Muestras, medición, inspección, montaje de prueba</td></tr>
<tr><td>Fase en paralelo</td><td>Lotes pequeños, seguimiento del rendimiento</td></tr>
<tr><td>Traslado completo</td><td>Cierre del proveedor anterior, consumo del stock de seguridad</td></tr>
</tbody>
</table>
<p>La duración de cada fase depende de la complejidad de la pieza, del plazo del material y de los utillajes necesarios, por lo que el calendario debe redactarse con el proveedor y con plazos reales.</p>
<h2>Errores más frecuentes</h2>
<ul>
<li>Pedir ofertas sobre una revisión de plano obsoleta.</li>
<li>Ocultar problemas conocidos al nuevo proveedor y volver a ver el mismo defecto.</li>
<li>Comparar solo el precio unitario e ignorar utillajes, transporte y costes de aprobación.</li>
<li>Cerrar el proveedor anterior sin stock de seguridad.</li>
<li>Aprobar la primera pieza solo con el informe dimensional, sin montaje de prueba.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> En piezas que asumimos de otro proveedor revisamos con usted el paquete de datos, preguntamos por la información que falta en la fase de oferta y entregamos las primeras piezas con informes de medición e inspección. En nuestro taller de Konya realizamos nosotros mismos la soldadura, los END y la documentación; el corte, el plegado y el tratamiento superficial los coordinamos con nuestros socios. <a href="../konya-fason-kaynak.html">Soldadura por encargo →</a></p></div>
`,
    faq: [
      ['¿Cuánto se tarda en cambiar de proveedor de piezas soldadas?', 'Depende de la pieza; hay que planificar juntos el paquete de datos, los utillajes, el plazo del material y la aprobación de primera pieza.'],
      ['¿Puede el nuevo proveedor usar la WPS del anterior?', 'No. WPS y WPQR pertenecen al fabricante; el nuevo taller debe producir con sus propios procedimientos aprobados.'],
      ['¿Cómo evito una parada de línea durante el cambio?', 'Con un stock de seguridad del proveedor anterior y un periodo de producción en paralelo.'],
      ['¿Qué documentos necesita el nuevo proveedor?', 'Plano vigente y modelo 3D, requisitos de material y calidad, plan de inspección, especificación superficial, problemas conocidos e instrucciones de embalaje.']
    ],
    cta_h3: '¿Piensa cambiar de proveedor?',
    cta_p: 'Envíenos planos y especificaciones; identificaremos con usted la información que falta y un plan de traslado realista.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Changer de fournisseur de pièces soudées : transférer la production sans interruption',
    meta: 'Étapes pour transférer la fabrication de pièces soudées vers un nouveau fournisseur : dossier technique, gabarits et calibres, qualification des DMOS, validation de première pièce, production en parallèle, stock de sécurité et erreurs fréquentes.',
    og: 'Changer de fournisseur de pièces soudées',
    tag: 'Achats · Approvisionnement',
    h1: 'Changer de fournisseur de pièces soudées : transférer la production sans interruption',
    crumb: 'Changement de fournisseur',
    read: '8 min de lecture',
    body: `
<p>Sur le papier, changer le fournisseur d'une pièce soudée paraît simple : on envoie le plan, on obtient un prix, on commande. En réalité, l'ancien fournisseur a accumulé au fil des années un savoir qui ne figure sur aucun plan. La séquence de soudage, une légère prédéformation dans le gabarit, une correction discrète sur un perçage qui posait problème au montage. Le plan de transfert sert à faire apparaître ce savoir non écrit.</p>
<h2>Pourquoi change-t-on de fournisseur ?</h2>
<ul>
<li>Les délais se dégradent durablement ou la capacité ne suffit plus.</li>
<li>Des problèmes de qualité récurrents et des actions correctives jamais soldées.</li>
<li>La pression sur les coûts, les hausses liées au change ou à l'énergie.</li>
<li>Réduire la dépendance à une source unique (voir <a href="cift-tedarikci-dual-sourcing-kaynakli-parca.html">stratégie de double approvisionnement</a>).</li>
<li>L'ancien fournisseur cesse l'activité ou abandonne la famille de produits.</li>
</ul>
<p>Quelle que soit la raison, la ligne du client ne doit pas s'arrêter pendant le transfert. Le planning, la passation technique et le plan de stock sont donc pilotés ensemble.</p>
<h2>1. Constituer le dossier technique</h2>
<p>Envoyer uniquement un plan PDF au nouveau fournisseur est l'erreur la plus fréquente. Un dossier complet comprend :</p>
<table>
<thead><tr><th>Document</th><th>Pourquoi c'est important</th></tr></thead>
<tbody>
<tr><td>Plan à l'indice en vigueur et modèle 3D</td><td>Les programmes de découpe et de pliage sont tirés du modèle</td></tr>
<tr><td>Exigence matière et certificat</td><td>Par exemple S355J2 avec EN 10204 3.1</td></tr>
<tr><td>Classe de soudure et niveau de qualité</td><td>Niveau ISO 5817, classe d'exécution EN 1090</td></tr>
<tr><td>Plan d'inspection et taux de CND</td><td>Quelle méthode sur quel cordon, à quel pourcentage</td></tr>
<tr><td>Spécification du traitement de surface</td><td>Degré de grenaillage, système de peinture, épaisseur</td></tr>
<tr><td>Non-conformités et réclamations récentes</td><td>Évite la répétition de problèmes connus</td></tr>
<tr><td>Instructions d'emballage et d'étiquetage</td><td>La façon dont la ligne attend les pièces</td></tr>
</tbody>
</table>
<p>Si la relation avec l'ancien fournisseur le permet, demandez aussi la séquence de soudage, des photos des gabarits et les rapports de mesure. Ils raccourcissent nettement l'apprentissage du nouveau fournisseur.</p>
<h2>2. À qui appartiennent gabarits, outillages et calibres ?</h2>
<p>Les gabarits de soudage, calibres de contrôle et outillages spéciaux appartenant au client sont récupérés selon le contrat et envoyés au nouveau fournisseur. Photographiez-les et mesurez-les avant l'expédition : démarrer avec un gabarit endommagé, c'est une non-conformité dès la première pièce. Si le gabarit n'appartient pas au client, la conception et la fabrication d'un nouveau entrent dans le planning (voir <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">conception de gabarits de soudage</a>).</p>
<h2>3. Modes opératoires et qualifications</h2>
<p>Un DMOS (WPS) appartient au fabricant ; celui de l'ancien fournisseur ne peut pas simplement être repris dans un autre atelier. Le nouveau fournisseur doit disposer de QMOS (WPQR) couvrant la matière, l'épaisseur et les positions requises, ainsi que de soudeurs qualifiés en conséquence. S'il manque quelque chose, une nouvelle qualification prend du temps et doit figurer au planning (voir <a href="wps-nedir.html">Qu'est-ce qu'un DMOS ?</a>).</p>
<h2>4. Validation de première pièce</h2>
<p>Les premières pièces du nouveau fournisseur doivent passer un contrôle dimensionnel complet, une inspection des soudures et une vérification des certificats avant la série. Dans l'automobile et des secteurs proches, cela passe par le PPAP ; ailleurs, un rapport de première pièce suffit souvent (voir <a href="ilk-parca-onayi-kaynakli-imalat.html">validation de première pièce</a>). Un essai de montage sur la ligne du client révèle des problèmes d'ajustement qu'un rapport de mesure ne montre pas.</p>
<h2>5. Phase parallèle et stock de sécurité</h2>
<p>Le moment le plus risqué est l'intervalle entre l'arrêt de l'ancien fournisseur et la pleine cadence du nouveau. Deux mesures pratiques :</p>
<ul>
<li><strong>Stock de sécurité :</strong> des pièces supplémentaires de l'ancien fournisseur pour couvrir la transition.</li>
<li><strong>Production en parallèle :</strong> pendant un temps, les deux fabriquent la même pièce et la part du nouveau augmente par étapes.</li>
</ul>
<p>Dimensionnez le tampon sur la durée de la validation de première pièce plus une éventuelle boucle de correction. Supposer que tout sera validé du premier coup est un plan optimiste.</p>
<h2>6. Calendrier indicatif</h2>
<table>
<thead><tr><th>Phase</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td>Préparation</td><td>Dossier technique, devis, audit ou visite</td></tr>
<tr><td>Passation technique</td><td>Transfert ou fabrication des gabarits, vérification des DMOS, approvisionnement matière</td></tr>
<tr><td>Première pièce</td><td>Échantillons, mesure, inspection, essai de montage</td></tr>
<tr><td>Phase parallèle</td><td>Petits lots, suivi des performances</td></tr>
<tr><td>Transfert complet</td><td>Clôture de l'ancien fournisseur, consommation du stock de sécurité</td></tr>
</tbody>
</table>
<p>La durée de chaque phase dépend de la complexité de la pièce, du délai matière et des gabarits nécessaires ; le planning doit donc être établi avec le fournisseur sur la base de délais réels.</p>
<h2>Erreurs les plus fréquentes</h2>
<ul>
<li>Consulter sur un indice de plan périmé.</li>
<li>Cacher les problèmes connus au nouveau fournisseur et revoir le même défaut.</li>
<li>Comparer uniquement le prix unitaire en oubliant gabarits, transport et coûts de validation.</li>
<li>Arrêter l'ancien fournisseur sans stock de sécurité.</li>
<li>Valider la première pièce sur le seul rapport dimensionnel, sans essai de montage.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> pour les pièces reprises d'un autre fournisseur, nous examinons le dossier technique avec vous, posons les questions sur les informations manquantes dès le devis et livrons les premières pièces avec rapports de mesure et d'inspection. Dans notre atelier de Konya, nous réalisons nous-mêmes le soudage, les CND et la documentation ; la découpe, le pliage et le traitement de surface sont coordonnés avec nos partenaires. <a href="../konya-fason-kaynak.html">Soudage en sous-traitance →</a></p></div>
`,
    faq: [
      ['Combien de temps faut-il pour changer de fournisseur de pièces soudées ?', 'Cela dépend de la pièce ; dossier technique, gabarits, délai matière et validation de première pièce doivent être planifiés ensemble.'],
      ['Le nouveau fournisseur peut-il utiliser le DMOS de l\'ancien ?', 'Non. DMOS et QMOS appartiennent au fabricant ; le nouvel atelier doit produire avec ses propres modes opératoires qualifiés.'],
      ['Comment éviter un arrêt de ligne pendant le transfert ?', 'Avec un stock de sécurité de l\'ancien fournisseur et une période de production en parallèle.'],
      ['Quels documents donner au nouveau fournisseur ?', 'Plan en vigueur et modèle 3D, exigences matière et qualité, plan d\'inspection, spécification de surface, problèmes connus et instructions d\'emballage.']
    ],
    cta_h3: 'Vous envisagez de changer de fournisseur ?',
    cta_p: 'Envoyez-nous plans et spécifications ; nous identifierons avec vous les informations manquantes et un plan de transfert réaliste.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Cambiare fornitore di parti saldate: come trasferire la produzione senza interruzioni',
    meta: 'Passi per trasferire la produzione di parti saldate a un nuovo fornitore: pacchetto dati tecnico, attrezzature e calibri, qualifica WPS, approvazione del primo pezzo, produzione in parallelo, scorta di sicurezza ed errori frequenti.',
    og: 'Cambiare fornitore di parti saldate',
    tag: 'Acquisti · Approvvigionamento',
    h1: 'Cambiare fornitore di parti saldate: come trasferire la produzione senza interruzioni',
    crumb: 'Cambio fornitore',
    read: '8 min di lettura',
    body: `
<p>Sulla carta cambiare il fornitore di una parte saldata sembra semplice: si invia il disegno, si riceve il prezzo, si ordina. In pratica il vecchio fornitore ha accumulato negli anni conoscenze che non compaiono in nessun disegno. La sequenza di saldatura, un piccolo precarico nell'attrezzatura, una correzione silenziosa a un foro che creava problemi in montaggio. Il piano di trasferimento serve a far emergere questo sapere non scritto.</p>
<h2>Perché si cambia fornitore</h2>
<ul>
<li>Le consegne peggiorano stabilmente o la capacità non basta più.</li>
<li>Problemi di qualità ricorrenti e azioni correttive mai chiuse.</li>
<li>Pressione sui costi, aumenti legati al cambio o all'energia.</li>
<li>Ridurre la dipendenza da un'unica fonte (vedi <a href="cift-tedarikci-dual-sourcing-kaynakli-parca.html">strategia di doppio fornitore</a>).</li>
<li>Il vecchio fornitore chiude o esce dalla famiglia di prodotti.</li>
</ul>
<p>Qualunque sia il motivo, la linea del cliente non deve fermarsi durante il trasferimento. Per questo calendario, passaggio tecnico e piano scorte vanno gestiti insieme.</p>
<h2>1. Preparare il pacchetto dati tecnico</h2>
<p>Inviare al nuovo fornitore solo un disegno PDF è l'errore più comune. Un pacchetto completo contiene:</p>
<table>
<thead><tr><th>Documento</th><th>Perché conta</th></tr></thead>
<tbody>
<tr><td>Disegno alla revisione corrente e modello 3D</td><td>I programmi di taglio e piegatura nascono dal modello</td></tr>
<tr><td>Requisito di materiale e certificato</td><td>Ad esempio S355J2 con EN 10204 3.1</td></tr>
<tr><td>Classe di saldatura e livello di qualità</td><td>Livello ISO 5817, classe di esecuzione EN 1090</td></tr>
<tr><td>Piano di ispezione e percentuali di CND</td><td>Quale metodo su quale giunto, con quale percentuale</td></tr>
<tr><td>Specifica del trattamento superficiale</td><td>Grado di sabbiatura, ciclo di verniciatura, spessore</td></tr>
<tr><td>Non conformità e reclami recenti</td><td>Evita il ripetersi di problemi noti</td></tr>
<tr><td>Istruzioni di imballo ed etichettatura</td><td>Come la linea si aspetta di ricevere i pezzi</td></tr>
</tbody>
</table>
<p>Se il rapporto con il vecchio fornitore lo consente, chiedete anche sequenza di saldatura, foto delle attrezzature e rapporti di misura. Accorciano molto l'apprendimento del nuovo fornitore.</p>
<h2>2. Di chi sono attrezzature, utensili e calibri?</h2>
<p>Attrezzature di saldatura, calibri di controllo e utensili speciali di proprietà del cliente vengono recuperati secondo contratto e inviati al nuovo fornitore. Fotografateli e misurateli prima della spedizione: partire con un'attrezzatura danneggiata significa una non conformità sul primo pezzo. Se l'attrezzatura non è del cliente, progettazione e costruzione di una nuova entrano nel piano (vedi <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">progettazione di attrezzature di saldatura</a>).</p>
<h2>3. Procedure di saldatura e qualifiche</h2>
<p>Una WPS appartiene al fabbricante; quella del vecchio fornitore non può essere usata così com'è in un'altra officina. Il nuovo fornitore deve avere WPQR approvate che coprano materiale, spessore e posizioni richiesti, e saldatori qualificati di conseguenza. Se manca qualcosa, la nuova qualifica richiede tempo e va inserita nel calendario (vedi <a href="wps-nedir.html">Cos'è una WPS?</a>).</p>
<h2>4. Approvazione del primo pezzo</h2>
<p>I primi pezzi del nuovo fornitore devono superare controllo dimensionale completo, ispezione delle saldature e verifica dei certificati prima della serie. Nell'automotive e in settori simili si usa il PPAP; altrove basta spesso un rapporto di primo pezzo (vedi <a href="ilk-parca-onayi-kaynakli-imalat.html">approvazione del primo pezzo</a>). Un montaggio di prova sulla linea del cliente rivela problemi di accoppiamento che un rapporto dimensionale non mostra.</p>
<h2>5. Fase parallela e scorta di sicurezza</h2>
<p>Il momento più rischioso è l'intervallo tra l'uscita del vecchio fornitore e la piena cadenza del nuovo. Due misure pratiche:</p>
<ul>
<li><strong>Scorta di sicurezza:</strong> pezzi aggiuntivi dal vecchio fornitore per coprire la transizione.</li>
<li><strong>Produzione in parallelo:</strong> per un periodo entrambi producono lo stesso pezzo e la quota del nuovo cresce per gradi.</li>
</ul>
<p>Dimensionate la scorta sul tempo di approvazione del primo pezzo più un possibile giro di correzione. Supporre che tutto venga approvato al primo tentativo è un piano ottimista.</p>
<h2>6. Calendario indicativo</h2>
<table>
<thead><tr><th>Fase</th><th>Contenuto</th></tr></thead>
<tbody>
<tr><td>Preparazione</td><td>Pacchetto dati, offerta, audit o visita</td></tr>
<tr><td>Passaggio tecnico</td><td>Trasferimento o costruzione delle attrezzature, verifica WPS, acquisto materiale</td></tr>
<tr><td>Primo pezzo</td><td>Campioni, misura, ispezione, montaggio di prova</td></tr>
<tr><td>Fase parallela</td><td>Piccoli lotti, monitoraggio delle prestazioni</td></tr>
<tr><td>Trasferimento completo</td><td>Chiusura del vecchio fornitore, consumo della scorta</td></tr>
</tbody>
</table>
<p>La durata di ogni fase dipende dalla complessità del pezzo, dal tempo di approvvigionamento del materiale e dalle attrezzature necessarie; il calendario va quindi scritto con il fornitore usando tempi reali.</p>
<h2>Errori più frequenti</h2>
<ul>
<li>Chiedere offerte su una revisione di disegno superata.</li>
<li>Nascondere i problemi noti al nuovo fornitore e rivedere lo stesso difetto.</li>
<li>Confrontare solo il prezzo unitario ignorando attrezzature, trasporto e costi di approvazione.</li>
<li>Chiudere il vecchio fornitore senza scorta di sicurezza.</li>
<li>Approvare il primo pezzo solo con il rapporto dimensionale, senza montaggio di prova.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> per i pezzi che rileviamo da un altro fornitore esaminiamo con voi il pacchetto dati, chiediamo le informazioni mancanti già in fase di offerta e consegniamo i primi pezzi con rapporti di misura e di ispezione. Nella nostra officina di Konya eseguiamo direttamente saldatura, CND e documentazione; taglio, piegatura e trattamento superficiale sono coordinati con i nostri partner. <a href="../konya-fason-kaynak.html">Saldatura conto terzi →</a></p></div>
`,
    faq: [
      ['Quanto tempo serve per cambiare fornitore di parti saldate?', 'Dipende dal pezzo; pacchetto dati, attrezzature, tempi del materiale e approvazione del primo pezzo vanno pianificati insieme.'],
      ['Il nuovo fornitore può usare la WPS del vecchio?', 'No. WPS e WPQR appartengono al fabbricante; la nuova officina deve produrre con le proprie procedure qualificate.'],
      ['Come evito un fermo linea durante il cambio?', 'Con una scorta di sicurezza dal vecchio fornitore e un periodo di produzione in parallelo.'],
      ['Quali documenti servono al nuovo fornitore?', 'Disegno corrente e modello 3D, requisiti di materiale e qualità, piano di ispezione, specifica superficiale, problemi noti e istruzioni di imballo.']
    ],
    cta_h3: 'State pensando di cambiare fornitore?',
    cta_p: 'Inviateci disegni e specifiche; individueremo con voi le informazioni mancanti e un piano di trasferimento realistico.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Van leverancier wisselen voor gelaste onderdelen: productie overdragen zonder onderbreking',
    meta: 'Stappen om de productie van gelaste onderdelen naar een nieuwe leverancier te verplaatsen: technisch datapakket, mallen en kalibers, WPS-kwalificatie, eerste-artikelgoedkeuring, parallelle productie, veiligheidsvoorraad en veelgemaakte fouten.',
    og: 'Leverancier wisselen gelaste onderdelen',
    tag: 'Inkoop · Sourcing',
    h1: 'Van leverancier wisselen voor gelaste onderdelen: productie overdragen zonder onderbreking',
    crumb: 'Leverancier wisselen',
    read: '8 min lezen',
    body: `
<p>Op papier lijkt het wisselen van leverancier voor een gelast onderdeel eenvoudig: tekening sturen, prijs ontvangen, bestellen. In werkelijkheid bouwt de huidige leverancier in de loop der jaren kennis op die nergens op een tekening staat. De lasvolgorde, een kleine voorspanning in de mal, een stille correctie aan een gat dat bij de montage problemen gaf. Een overdrachtsplan is er om die ongeschreven kennis boven water te krijgen.</p>
<h2>Waarom bedrijven van leverancier wisselen</h2>
<ul>
<li>De leverbetrouwbaarheid daalt structureel of de capaciteit is niet meer voldoende.</li>
<li>Terugkerende kwaliteitsproblemen en corrigerende maatregelen die nooit sluiten.</li>
<li>Kostendruk en prijsstijgingen door valuta of energie.</li>
<li>Minder afhankelijk worden van één bron (zie <a href="cift-tedarikci-dual-sourcing-kaynakli-parca.html">dual-sourcingstrategie</a>).</li>
<li>De huidige leverancier stopt of verlaat de productgroep.</li>
</ul>
<p>Wat de reden ook is, de lijn van de klant mag tijdens de overdracht niet stilvallen. Daarom worden planning, technische overdracht en voorraadplan samen aangestuurd.</p>
<h2>1. Stel het technische datapakket samen</h2>
<p>Alleen een PDF-tekening naar de nieuwe leverancier sturen is de meest gemaakte fout. Een volledig pakket bevat:</p>
<table>
<thead><tr><th>Document</th><th>Waarom belangrijk?</th></tr></thead>
<tbody>
<tr><td>Actuele tekeningrevisie en 3D-model</td><td>Snij- en zetprogramma's worden uit het model gemaakt</td></tr>
<tr><td>Materiaal- en certificaateis</td><td>Bijvoorbeeld S355J2 met EN 10204 3.1</td></tr>
<tr><td>Lasklasse en kwaliteitsniveau</td><td>ISO 5817-niveau, EN 1090-uitvoeringsklasse</td></tr>
<tr><td>Inspectieplan en NDO-percentages</td><td>Welke methode op welke las, met welk percentage</td></tr>
<tr><td>Specificatie oppervlaktebehandeling</td><td>Straalgraad, verfsysteem, laagdikte</td></tr>
<tr><td>Recente afwijkingsrapporten en klachten</td><td>Voorkomt dat bekende problemen terugkomen</td></tr>
<tr><td>Verpakkings- en etiketteringsinstructie</td><td>Hoe de lijn de onderdelen wil ontvangen</td></tr>
</tbody>
</table>
<p>Is de relatie met de huidige leverancier nog werkbaar, vraag dan ook de lasvolgorde, foto's van de mallen en meetrapporten op. Ze verkorten de inleertijd van de nieuwe leverancier aanzienlijk.</p>
<h2>2. Van wie zijn mallen, gereedschap en kalibers?</h2>
<p>Lasmallen, controlekalibers en speciaal gereedschap die eigendom van de klant zijn, worden volgens contract teruggehaald en naar de nieuwe leverancier gestuurd. Fotografeer en meet ze vóór verzending; beginnen met een beschadigde mal betekent een afwijking op het eerste onderdeel. Is de mal geen eigendom van de klant, dan horen ontwerp en bouw van een nieuwe in de planning (zie <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">lasmallen voor serieproductie</a>).</p>
<h2>3. Lasprocedures en kwalificaties</h2>
<p>Een WPS hoort bij de fabrikant; die van de huidige leverancier kan niet zomaar in een andere werkplaats worden gebruikt. De nieuwe leverancier heeft goedgekeurde WPQR's nodig voor het vereiste materiaal-, dikte- en positiebereik, plus passende lassercertificaten. Ontbreekt er iets, dan kost een nieuwe kwalificatie tijd en hoort die in de planning (zie <a href="wps-nedir.html">Wat is een WPS?</a>).</p>
<h2>4. Eerste-artikelgoedkeuring</h2>
<p>De eerste onderdelen van de nieuwe leverancier moeten vóór de serie volledig worden gemeten, lastechnisch geïnspecteerd en op materiaaldocumenten gecontroleerd. In de automotive en vergelijkbare sectoren gebeurt dat via PPAP; elders volstaat meestal een eerste-artikelrapport (zie <a href="ilk-parca-onayi-kaynakli-imalat.html">eerste-artikelgoedkeuring</a>). Een proefmontage op de lijn van de klant toont pasproblemen die een meetrapport niet laat zien.</p>
<h2>5. Parallelle fase en veiligheidsvoorraad</h2>
<p>Het riskantste moment is de periode tussen het stoppen van de oude en het volle tempo van de nieuwe leverancier. Twee praktische maatregelen:</p>
<ul>
<li><strong>Veiligheidsvoorraad:</strong> extra onderdelen van de oude leverancier om de overgang te overbruggen.</li>
<li><strong>Parallelle productie:</strong> een tijd lang maken beide leveranciers hetzelfde onderdeel en groeit het aandeel van de nieuwe stapsgewijs.</li>
</ul>
<p>Baseer de buffer op de tijd voor eerste-artikelgoedkeuring plus één mogelijke correctieronde. Ervan uitgaan dat alles in één keer wordt goedgekeurd, is een optimistisch plan.</p>
<h2>6. Voorbeeldplanning</h2>
<table>
<thead><tr><th>Fase</th><th>Inhoud</th></tr></thead>
<tbody>
<tr><td>Voorbereiding</td><td>Datapakket, offerte, audit of bedrijfsbezoek</td></tr>
<tr><td>Technische overdracht</td><td>Overdracht of bouw van mallen, WPS-controle, materiaalinkoop</td></tr>
<tr><td>Eerste artikel</td><td>Monsters, meting, inspectie, proefmontage</td></tr>
<tr><td>Parallelle fase</td><td>Kleine series, prestatiebewaking</td></tr>
<tr><td>Volledige overdracht</td><td>Oude leverancier afgesloten, veiligheidsvoorraad verbruikt</td></tr>
</tbody>
</table>
<p>De duur van elke fase hangt af van de complexiteit van het onderdeel, de levertijd van materiaal en de benodigde mallen; schrijf de planning daarom samen met de leverancier en met echte levertijden.</p>
<h2>Veelgemaakte fouten</h2>
<ul>
<li>Offertes aanvragen op een verouderde tekeningrevisie.</li>
<li>Bekende problemen verzwijgen voor de nieuwe leverancier en hetzelfde defect opnieuw zien.</li>
<li>Alleen stukprijzen vergelijken en kosten voor mallen, transport en goedkeuring vergeten.</li>
<li>De oude leverancier afsluiten zonder veiligheidsvoorraad.</li>
<li>Het eerste artikel alleen op basis van het meetrapport goedkeuren, zonder proefmontage.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij onderdelen die we van een andere leverancier overnemen, bekijken we het datapakket samen met u, vragen we ontbrekende informatie al in de offertefase uit en leveren we de eerste onderdelen met meet- en inspectierapporten. In onze werkplaats in Konya voeren we lassen, NDO en documentatie zelf uit; snijden, zetten en oppervlaktebehandeling coördineren we met onze partners. <a href="../konya-fason-kaynak.html">Loonlaswerk →</a></p></div>
`,
    faq: [
      ['Hoe lang duurt het om van leverancier te wisselen voor gelaste onderdelen?', 'Dat hangt van het onderdeel af; datapakket, mallen, materiaallevertijd en eerste-artikelgoedkeuring moeten samen worden gepland.'],
      ['Kan de nieuwe leverancier de WPS van de oude gebruiken?', 'Nee. WPS en WPQR horen bij de fabrikant; de nieuwe werkplaats moet met eigen goedgekeurde procedures produceren.'],
      ['Hoe voorkom ik lijnstilstand tijdens de wissel?', 'Met een veiligheidsvoorraad van de oude leverancier en een periode van parallelle productie.'],
      ['Welke documenten heeft de nieuwe leverancier nodig?', 'Actuele tekening en 3D-model, materiaal- en kwaliteitseisen, inspectieplan, oppervlaktespecificatie, bekende problemen en verpakkingsinstructie.']
    ],
    cta_h3: 'Overweegt u van leverancier te wisselen?',
    cta_p: 'Stuur tekeningen en specificaties; we brengen samen met u ontbrekende informatie en een realistisch overdrachtsplan in kaart.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Bytte leverandør av sveiste deler: slik flytter du produksjonen uten avbrudd',
    meta: 'Trinn for å flytte produksjon av sveiste deler til en ny leverandør: teknisk datapakke, fiksturer og målelærer, WPS-kvalifisering, førsteartikkelgodkjenning, parallellproduksjon, sikkerhetslager og vanlige feil.',
    og: 'Bytte leverandør av sveiste deler',
    tag: 'Innkjøp · Sourcing',
    h1: 'Bytte leverandør av sveiste deler: slik flytter du produksjonen uten avbrudd',
    crumb: 'Bytte leverandør',
    read: '8 min lesing',
    body: `
<p>På papiret ser det enkelt ut å bytte leverandør av en sveist del: send tegningen, få en pris, bestill. I praksis har den gamle leverandøren bygget opp kunnskap gjennom år som aldri står på noen tegning. Sveiserekkefølgen, en liten forspenning i fiksturen, en stille korreksjon av et hull som skapte problemer i monteringen. En flytteplan finnes for å få denne uskrevne kunnskapen fram i lyset.</p>
<h2>Hvorfor bedrifter bytter leverandør</h2>
<ul>
<li>Leveringspresisjonen faller over tid, eller kapasiteten strekker ikke lenger til.</li>
<li>Gjentatte kvalitetsproblemer og korrigerende tiltak som aldri lukkes.</li>
<li>Kostnadspress og prisøkninger på grunn av valuta eller energi.</li>
<li>Ønske om mindre avhengighet av én kilde (se <a href="cift-tedarikci-dual-sourcing-kaynakli-parca.html">strategi med to leverandører</a>).</li>
<li>Den gamle leverandøren legger ned eller går ut av produktgruppen.</li>
</ul>
<p>Uansett årsak skal ikke kundens linje stoppe under flyttingen. Derfor styres tidsplan, teknisk overlevering og lagerplan samlet.</p>
<h2>1. Sett sammen den tekniske datapakken</h2>
<p>Å sende bare en PDF-tegning til den nye leverandøren er den vanligste feilen. En komplett pakke inneholder:</p>
<table>
<thead><tr><th>Dokument</th><th>Hvorfor viktig?</th></tr></thead>
<tbody>
<tr><td>Gjeldende tegningsrevisjon og 3D-modell</td><td>Skjære- og bukkeprogrammer lages fra modellen</td></tr>
<tr><td>Krav til materiale og sertifikat</td><td>For eksempel S355J2 med EN 10204 3.1</td></tr>
<tr><td>Sveiseklasse og kvalitetsnivå</td><td>ISO 5817-nivå, utførelsesklasse etter EN 1090</td></tr>
<tr><td>Inspeksjonsplan og NDT-omfang</td><td>Hvilken metode på hvilken sveis, med hvilken prosent</td></tr>
<tr><td>Spesifikasjon for overflatebehandling</td><td>Blåsegrad, malingssystem, tykkelse</td></tr>
<tr><td>Siste avviksrapporter og reklamasjoner</td><td>Hindrer at kjente problemer gjentar seg</td></tr>
<tr><td>Instruks for emballasje og merking</td><td>Hvordan linjen forventer å motta delene</td></tr>
</tbody>
</table>
<p>Hvis forholdet til den gamle leverandøren fortsatt er brukbart, be også om sveiserekkefølge, bilder av fiksturer og måleprotokoller. De forkorter innkjøringen hos den nye leverandøren betydelig.</p>
<h2>2. Hvem eier fiksturer, verktøy og målelærer?</h2>
<p>Kundeeide sveisefiksturer, kontrollærer og spesialverktøy hentes tilbake etter kontrakten og sendes til den nye leverandøren. Fotografer og mål dem før forsendelse; å starte med en skadet fikstur betyr avvik på første del. Er fiksturen ikke kundens eiendom, må konstruksjon og bygging av en ny inn i planen (se <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">sveisefiksturer for serieproduksjon</a>).</p>
<h2>3. Sveiseprosedyrer og kvalifikasjoner</h2>
<p>En WPS tilhører produsenten; den gamle leverandørens WPS kan ikke bare tas i bruk i et annet verksted. Den nye leverandøren trenger godkjente WPQR-er for det aktuelle materiale-, tykkelses- og posisjonsområdet, og sveisere med tilsvarende sertifikater. Mangler noe, tar ny kvalifisering tid og må inn i tidsplanen (se <a href="wps-nedir.html">Hva er en WPS?</a>).</p>
<h2>4. Førsteartikkelgodkjenning</h2>
<p>De første delene fra den nye leverandøren bør gjennomgå full dimensjonskontroll, sveiseinspeksjon og kontroll av materialdokumenter før serieproduksjon. I bilindustrien og lignende bransjer skjer dette via PPAP; ellers holder det ofte med en førsteartikkelrapport (se <a href="ilk-parca-onayi-kaynakli-imalat.html">førsteartikkelgodkjenning</a>). En prøvemontering på kundens linje avslører tilpasningsproblemer som en målerapport ikke viser.</p>
<h2>5. Parallellfase og sikkerhetslager</h2>
<p>Den mest risikable delen er gapet mellom at den gamle leverandøren stopper og den nye når full takt. To praktiske tiltak:</p>
<ul>
<li><strong>Sikkerhetslager:</strong> ekstra deler fra den gamle leverandøren for å dekke overgangen.</li>
<li><strong>Parallellproduksjon:</strong> i en periode lager begge leverandørene samme del, og den nyes andel økes trinnvis.</li>
</ul>
<p>Dimensjoner bufferen etter tiden for førsteartikkelgodkjenning pluss én mulig korreksjonsrunde. Å anta at alt godkjennes på første forsøk er en optimistisk plan.</p>
<h2>6. Eksempel på tidsplan</h2>
<table>
<thead><tr><th>Fase</th><th>Innhold</th></tr></thead>
<tbody>
<tr><td>Forberedelse</td><td>Datapakke, tilbud, revisjon eller besøk</td></tr>
<tr><td>Teknisk overlevering</td><td>Flytting eller bygging av fiksturer, WPS-kontroll, materialinnkjøp</td></tr>
<tr><td>Førsteartikkel</td><td>Prøveproduksjon, måling, inspeksjon, prøvemontering</td></tr>
<tr><td>Parallellfase</td><td>Små partier, oppfølging av ytelse</td></tr>
<tr><td>Full overføring</td><td>Gammel leverandør avsluttet, sikkerhetslager brukt opp</td></tr>
</tbody>
</table>
<p>Varigheten av hver fase avhenger av delens kompleksitet, materialets leveringstid og behovet for fiksturer, så tidsplanen bør lages sammen med leverandøren med reelle leveringstider.</p>
<h2>Vanlige feil</h2>
<ul>
<li>Å be om tilbud på en utdatert tegningsrevisjon.</li>
<li>Å skjule kjente problemer for den nye leverandøren og så se samme feil igjen.</li>
<li>Å sammenligne bare stykkpris og glemme fikstur-, frakt- og godkjenningskostnader.</li>
<li>Å avslutte den gamle leverandøren uten sikkerhetslager.</li>
<li>Å godkjenne førsteartikkelen kun på målerapport, uten prøvemontering.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> for deler vi overtar fra en annen leverandør går vi gjennom datapakken sammen med deg, spør om manglende informasjon allerede i tilbudsfasen og leverer de første delene med måle- og inspeksjonsrapporter. I verkstedet vårt i Konya utfører vi sveising, NDT og dokumentasjon selv; skjæring, bukking og overflatebehandling koordineres med våre partnere. <a href="../konya-fason-kaynak.html">Leiesveising →</a></p></div>
`,
    faq: [
      ['Hvor lang tid tar det å bytte leverandør av sveiste deler?', 'Det avhenger av delen; datapakke, fiksturer, materialets leveringstid og førsteartikkelgodkjenning må planlegges samlet.'],
      ['Kan den nye leverandøren bruke den gamles WPS?', 'Nei. WPS og WPQR tilhører produsenten; det nye verkstedet må produsere etter egne godkjente prosedyrer.'],
      ['Hvordan unngår jeg linjestopp under byttet?', 'Med et sikkerhetslager fra den gamle leverandøren og en periode med parallellproduksjon.'],
      ['Hvilke dokumenter trenger den nye leverandøren?', 'Gjeldende tegning og 3D-modell, krav til materiale og kvalitet, inspeksjonsplan, overflatespesifikasjon, kjente problemer og emballasjeinstruks.']
    ],
    cta_h3: 'Vurderer du å bytte leverandør?',
    cta_p: 'Send tegninger og spesifikasjoner; vi kartlegger manglende informasjon og en realistisk flytteplan sammen med deg.',
    cta_btn: 'Be om tilbud →'
  }
};
