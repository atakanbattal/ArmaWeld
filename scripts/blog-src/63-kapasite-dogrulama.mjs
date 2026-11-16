export default {
  order: 63,
  slug: 'tedarikci-kapasite-dogrulama-kaynak-atolyesi',
  key: 'p63_capacity',
  date: '2025-12-02',
  keywords: 'tedarikçi kapasitesi nasıl doğrulanır, kaynak atölyesi kapasitesi, kaynakçı sayısı, vardiya, darboğaz analizi, supplier capacity check welding, capacity verification fabrication supplier, Kapazitätsprüfung Lieferant Schweißen, verificar capacidad proveedor soldadura, vérifier capacité fournisseur soudage',
  related: ['kaynakli-imalat-tedarikci-denetimi', 'kaynakli-imalat-teslim-suresi-planlama', 'fason-kaynak-tedarikci-secimi', 'kaynakli-imalat-teklif-hazirlama'],
  tr: {
    title: 'Kaynak Atölyesinin Kapasitesi Nasıl Doğrulanır? Satın Almacı İçin Pratik Rehber',
    meta: 'Bir kaynak tedarikçisinin gerçek kapasitesini doğrulamak için sorulacak sorular: kaynakçı ve sertifika sayısı, vardiya düzeni, darboğaz istasyonlar, vinç ve hol ölçüleri, NDT ve dış süreçler, mevcut doluluk ve talep artışında esneklik.',
    og: 'Tedarikçi kapasitesi doğrulama',
    tag: 'Satın Alma · Tedarik',
    h1: 'Kaynak Atölyesinin Kapasitesi Nasıl Doğrulanır? Satın Almacı İçin Pratik Rehber',
    crumb: 'Kapasite doğrulama',
    read: '7 dk okuma',
    body: `
<p>"Kapasitemiz var" cümlesi, tedarikçi görüşmelerinde en sık duyulan ve en az doğrulanan cümledir. Bir kaynak atölyesinin kapasitesi ne metrekareyle ne de makine sayısıyla ölçülür. Asıl soru şudur: Sizin parçanız, sizin istediğiniz kalitede, sizin istediğiniz ritimde, mevcut işlerin yanında üretilebilir mi?</p>
<h2>Kapasite Neden Yanlış Değerlendirilir?</h2>
<ul>
<li>Makine sayısı sayılır, makineyi kullanacak sertifikalı kaynakçı sayısı sorulmaz.</li>
<li>Toplam alan görülür, vincin taşıyabildiği ağırlık ve kanca altı yüksekliği kontrol edilmez.</li>
<li>Kaynak kapasitesine bakılır, darboğaz olan kesim, boya veya NDT gözden kaçar.</li>
<li>Bugünkü boşluk görülür, üç ay sonraki doluluk sorulmaz.</li>
</ul>
<h2>Sorulacak Temel Sorular</h2>
<table>
<thead><tr><th>Konu</th><th>Soru</th><th>Neye bakılır?</th></tr></thead>
<tbody>
<tr><td>İnsan</td><td>Parçanızdaki yöntem ve pozisyon için kaç sertifikalı kaynakçı var?</td><td>Sertifika listesi, geçerlilik tarihleri</td></tr>
<tr><td>Vardiya</td><td>Kaç vardiya çalışılıyor, ek vardiya mümkün mü?</td><td>Vardiya planı, fazla mesai uygulaması</td></tr>
<tr><td>Ekipman</td><td>Gerekli kaynak yöntemi ve fikstür için ekipman var mı?</td><td>Makine listesi, bakım kayıtları</td></tr>
<tr><td>Hol ve vinç</td><td>Parçanın boyu, ağırlığı ve döndürülmesi için alan ve vinç yeterli mi?</td><td>Vinç kapasitesi, kanca altı yüksekliği, kapı ölçüleri</td></tr>
<tr><td>Dış süreçler</td><td>Kesim, büküm, işleme, boya kim tarafından, hangi sürede yapılıyor?</td><td>İş ortakları listesi, tipik süreler</td></tr>
<tr><td>Muayene</td><td>NDT ve ölçüm kim tarafından yapılıyor?</td><td>Personel seviyeleri (ISO 9712), cihazlar</td></tr>
<tr><td>Doluluk</td><td>Önümüzdeki aylarda planlanan yük ne?</td><td>Kapasite planı, büyük siparişler</td></tr>
</tbody>
</table>
<h2>Darboğazı Bulun</h2>
<p>Bir kaynaklı parçanın akışı genellikle kesim, büküm, punta ve kaynak, düzeltme, NDT, yüzey işlemi ve sevkiyattan oluşur. Atölyenin gerçek kapasitesi bu zincirin en yavaş halkası kadardır. Kaynak bölümü boş olsa bile boya hattı veya dış ortaktaki galvaniz sırası teslim tarihini belirleyebilir. Tedarikçiden parçanız için süreç adımlarını ve her adımın tipik süresini istemek, darboğazı görünür kılar (bkz. <a href="kaynakli-imalat-teslim-suresi-planlama.html">teslim süresi planlama</a>).</p>
<h2>Kaba Hesap: İhtiyacınız Ne Kadar?</h2>
<p>Kapasite görüşmesine kendi rakamınızla gidin. Basit bir yaklaşım:</p>
<ol>
<li>Parça başına tahmini kaynak süresini çıkarın (dikiş uzunluğu, kalınlık, yöntem; bkz. <a href="kaynak-maliyeti-hesaplama.html">kaynak maliyeti hesaplama</a>).</li>
<li>Hazırlık, punta, taşlama ve taşıma için pay ekleyin.</li>
<li>Aylık adetle çarpın ve kaynakçı-saat ihtiyacına çevirin.</li>
<li>Bunu tedarikçinin ilgili sertifikalı kaynakçı sayısı ve vardiya düzeniyle karşılaştırın.</li>
</ol>
<p>Bu hesap kesin değildir, ama tedarikçinin sizin işiniz için toplam kapasitesinin ne kadarını ayırması gerektiğini gösterir. Eğer bu oran çok yüksekse, tek bir arıza veya başka bir büyük sipariş sizi doğrudan etkiler.</p>
<h2>Belgeyle Kanıt İsteyin</h2>
<ul>
<li>Benzer boyut ve ağırlıkta üretilmiş parçaların fotoğrafları ve referans projeleri.</li>
<li>Son dönem zamanında teslim oranı (OTD) verisi (bkz. <a href="kaynakli-imalat-tedarikci-denetimi.html">tedarikçi performans göstergeleri</a>).</li>
<li>Kaynakçı sertifika listesi ve WPQR kapsamı.</li>
<li>Dış süreç ortaklarıyla tipik iş süreleri.</li>
</ul>
<h2>Esneklik Soruları</h2>
<p>Kapasitenin bugünkü değeri kadar talep değiştiğinde nasıl davrandığı da önemlidir. Talebiniz %30 artarsa ne olur? Acil bir parti için hangi işler kaydırılabilir? Ek vardiya için personel var mı? Malzeme stoğu tutulabilir mi? Bu sorulara verilen somut cevaplar, gerçekçi bir tedarikçiyi aşırı iyimser olandan ayırır.</p>
<h2>Uyarı İşaretleri</h2>
<ul>
<li>Doluluk sorusuna "her şeye yetişiriz" gibi genel cevaplar.</li>
<li>Kaynakçı sayısı ile sertifika listesinin uyuşmaması.</li>
<li>Dış süreçler için tek bir ortağa bağımlılık ve süre bilgisinin olmaması.</li>
<li>Fabrika ziyaretinde gösterilen alanın çoğunun boş ya da başka işe ayrılmış olması (bkz. <a href="kaynakli-imalat-tedarikci-denetimi.html">fabrika ziyareti kontrol listesi</a>).</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Teklif aşamasında parçanız için süreç adımlarını, hangi adımın atölyemizde hangisinin iş ortaklarımızda yapılacağını ve gerçekçi termin planını açıkça yazıyoruz. Kapasite sorularınızı rakamlarla yanıtlamaya, gerekirse atölye ziyaretine hazırız. <a href="../hakkimizda.html">Hakkımızda →</a></p></div>
`,
    faq: [
      ['Kaynak atölyesinin kapasitesi neyle ölçülür?', 'Parçanız için gereken yöntemde sertifikalı kaynakçı sayısı, vardiya düzeni, ekipman, vinç ve alan, dış süreç süreleri ve mevcut doluluk birlikte değerlendirilir.'],
      ['Darboğaz neden önemlidir?', 'Atölyenin gerçek çıktısı, kesimden boyaya kadar zincirin en yavaş halkası kadardır.'],
      ['Tedarikçiden hangi belgeleri istemeliyim?', 'Kaynakçı sertifika listesi, WPQR kapsamı, benzer parçaların referansları, zamanında teslim verisi ve dış süreç süreleri.'],
      ['Kendi ihtiyacımı nasıl hesaplarım?', 'Parça başına kaynak süresine hazırlık payı ekleyip aylık adetle çarparak kaynakçı-saat ihtiyacını bulabilirsiniz.']
    ],
    cta_h3: 'Kapasite planını birlikte yapalım',
    cta_p: 'Parça çizimi ve yıllık adet tahmininizi gönderin; süreç adımları ve termin planıyla dönelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'How to Verify a Welding Supplier\'s Capacity: A Practical Guide for Buyers',
    meta: 'Questions to verify a welding supplier\'s real capacity: number of certified welders, shift pattern, bottleneck stations, crane and bay dimensions, NDT and outsourced processes, current load and flexibility when demand rises.',
    og: 'Verifying supplier capacity',
    tag: 'Purchasing · Sourcing',
    h1: 'How to Verify a Welding Supplier\'s Capacity: A Practical Guide for Buyers',
    crumb: 'Capacity verification',
    read: '7 min read',
    body: `
<p>"We have capacity" is the most frequently heard and least verified sentence in supplier meetings. A welding workshop's capacity is measured neither in square metres nor in number of machines. The real question is: can your part be made at your quality, at your rate, alongside the work already in the shop?</p>
<h2>Why Capacity Is Misjudged</h2>
<ul>
<li>Machines are counted, but nobody asks how many certified welders can run them.</li>
<li>Floor area is seen, but crane capacity and hook height are not checked.</li>
<li>Welding capacity is reviewed, while cutting, painting or NDT bottlenecks are missed.</li>
<li>Today's free space is noticed, but the load three months from now is not asked.</li>
</ul>
<h2>Key Questions to Ask</h2>
<table>
<thead><tr><th>Area</th><th>Question</th><th>What to look at</th></tr></thead>
<tbody>
<tr><td>People</td><td>How many welders are certified for the process and position of your part?</td><td>Certificate list, validity dates</td></tr>
<tr><td>Shifts</td><td>How many shifts are worked; is an extra shift possible?</td><td>Shift plan, overtime practice</td></tr>
<tr><td>Equipment</td><td>Is equipment available for the welding process and fixtures needed?</td><td>Machine list, maintenance records</td></tr>
<tr><td>Bay and crane</td><td>Are space and cranes enough for the part's length, weight and turning?</td><td>Crane capacity, hook height, door sizes</td></tr>
<tr><td>Outsourced processes</td><td>Who does cutting, bending, machining and painting, and how long does it take?</td><td>Partner list, typical lead times</td></tr>
<tr><td>Inspection</td><td>Who carries out NDT and measurement?</td><td>Personnel levels (ISO 9712), equipment</td></tr>
<tr><td>Load</td><td>What is the planned load for the coming months?</td><td>Capacity plan, large orders</td></tr>
</tbody>
</table>
<h2>Find the Bottleneck</h2>
<p>The flow of a welded part usually runs through cutting, bending, tacking and welding, straightening, NDT, surface treatment and shipping. The real capacity of the workshop equals the slowest link in that chain. Even with a free welding bay, the paint line or the queue at the galvanising partner can decide the delivery date. Asking the supplier for the process steps of your part and the typical duration of each makes the bottleneck visible (see <a href="kaynakli-imalat-teslim-suresi-planlama.html">lead time planning</a>).</p>
<h2>Rough Calculation: How Much Do You Need?</h2>
<p>Go into the capacity discussion with your own numbers. A simple approach:</p>
<ol>
<li>Estimate the welding time per part (weld length, thickness, process; see <a href="kaynak-maliyeti-hesaplama.html">welding cost calculation</a>).</li>
<li>Add an allowance for preparation, tacking, grinding and handling.</li>
<li>Multiply by the monthly quantity and convert to welder-hours.</li>
<li>Compare this with the supplier's number of relevant certified welders and shift pattern.</li>
</ol>
<p>The calculation is not exact, but it shows how much of the supplier's total capacity your work would take. If that share is very high, a single breakdown or another large order will hit you directly.</p>
<h2>Ask for Evidence</h2>
<ul>
<li>Photos and references of parts of similar size and weight.</li>
<li>Recent on-time delivery (OTD) data (see <a href="kaynakli-imalat-tedarikci-denetimi.html">supplier performance KPIs</a>).</li>
<li>Welder certificate list and WPQR coverage.</li>
<li>Typical lead times with outsourced process partners.</li>
</ul>
<h2>Flexibility Questions</h2>
<p>How capacity behaves when demand changes matters as much as today's figure. What happens if your demand rises 30%? Which jobs can be moved for an urgent batch? Are people available for an extra shift? Can material be stocked? Concrete answers separate a realistic supplier from an over-optimistic one.</p>
<h2>Warning Signs</h2>
<ul>
<li>Generic answers like "we can handle anything" to the load question.</li>
<li>The number of welders does not match the certificate list.</li>
<li>Dependence on a single partner for outsourced processes, with no lead time information.</li>
<li>Most of the area shown during a site visit is empty or allocated to other work (see <a href="kaynakli-imalat-tedarikci-denetimi.html">site visit checklist</a>).</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> at the quotation stage we write down the process steps for your part, which steps run in our workshop and which at our partners, and a realistic delivery schedule. We are ready to answer capacity questions with numbers and, if needed, to host a workshop visit. <a href="../hakkimizda.html">About us →</a></p></div>
`,
    faq: [
      ['How is a welding workshop\'s capacity measured?', 'By combining the number of welders certified for your process, the shift pattern, equipment, cranes and space, outsourced process lead times and current load.'],
      ['Why does the bottleneck matter?', 'The workshop\'s real output equals the slowest link in the chain from cutting to painting.'],
      ['Which documents should I ask the supplier for?', 'Welder certificate list, WPQR coverage, references for similar parts, on-time delivery data and outsourced process lead times.'],
      ['How do I calculate my own need?', 'Add a preparation allowance to the welding time per part and multiply by monthly quantity to get welder-hours.']
    ],
    cta_h3: 'Let\'s plan capacity together',
    cta_p: 'Send the part drawing and your annual quantity forecast; we will reply with process steps and a delivery plan.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Kapazität eines Schweißlieferanten prüfen: Ein Praxisleitfaden für Einkäufer',
    meta: 'Fragen zur Prüfung der tatsächlichen Kapazität eines Schweißlieferanten: Zahl qualifizierter Schweißer, Schichtmodell, Engpassstationen, Kran- und Hallenmaße, ZfP und Fremdprozesse, aktuelle Auslastung und Flexibilität bei steigendem Bedarf.',
    og: 'Lieferantenkapazität prüfen',
    tag: 'Einkauf · Beschaffung',
    h1: 'Kapazität eines Schweißlieferanten prüfen: Ein Praxisleitfaden für Einkäufer',
    crumb: 'Kapazitätsprüfung',
    read: '7 Min. Lesezeit',
    body: `
<p>„Wir haben Kapazität" ist der am häufigsten gehörte und am seltensten geprüfte Satz in Lieferantengesprächen. Die Kapazität einer Schweißwerkstatt misst man weder in Quadratmetern noch in Maschinenzahl. Die eigentliche Frage lautet: Kann Ihr Teil in Ihrer Qualität, in Ihrem Takt und neben den laufenden Aufträgen gefertigt werden?</p>
<h2>Warum Kapazität falsch eingeschätzt wird</h2>
<ul>
<li>Maschinen werden gezählt, aber niemand fragt nach der Zahl qualifizierter Schweißer.</li>
<li>Die Hallenfläche wird gesehen, Krantragfähigkeit und Hakenhöhe werden nicht geprüft.</li>
<li>Die Schweißkapazität wird betrachtet, Engpässe bei Zuschnitt, Lackierung oder ZfP übersehen.</li>
<li>Der heutige Freiraum fällt auf, die Auslastung in drei Monaten wird nicht erfragt.</li>
</ul>
<h2>Die wichtigsten Fragen</h2>
<table>
<thead><tr><th>Bereich</th><th>Frage</th><th>Worauf achten</th></tr></thead>
<tbody>
<tr><td>Personal</td><td>Wie viele Schweißer sind für Verfahren und Position Ihres Teils geprüft?</td><td>Zertifikatsliste, Gültigkeit</td></tr>
<tr><td>Schichten</td><td>Wie viele Schichten, ist eine Zusatzschicht möglich?</td><td>Schichtplan, Überstundenpraxis</td></tr>
<tr><td>Ausrüstung</td><td>Ist Ausrüstung für Schweißverfahren und Vorrichtungen vorhanden?</td><td>Maschinenliste, Wartungsnachweise</td></tr>
<tr><td>Halle und Kran</td><td>Reichen Platz und Kran für Länge, Gewicht und Wenden des Teils?</td><td>Tragfähigkeit, Hakenhöhe, Torgrößen</td></tr>
<tr><td>Fremdprozesse</td><td>Wer schneidet, kantet, bearbeitet, lackiert, mit welcher Durchlaufzeit?</td><td>Partnerliste, typische Zeiten</td></tr>
<tr><td>Prüfung</td><td>Wer führt ZfP und Messungen durch?</td><td>Personalstufen (ISO 9712), Geräte</td></tr>
<tr><td>Auslastung</td><td>Wie ist die geplante Auslastung der nächsten Monate?</td><td>Kapazitätsplan, Großaufträge</td></tr>
</tbody>
</table>
<h2>Den Engpass finden</h2>
<p>Der Fluss eines Schweißteils führt meist über Zuschnitt, Kanten, Heften und Schweißen, Richten, ZfP, Oberflächenbehandlung und Versand. Die tatsächliche Kapazität entspricht dem langsamsten Glied dieser Kette. Selbst bei freier Schweißhalle können die Lackierlinie oder die Warteschlange beim Verzinkungspartner den Liefertermin bestimmen. Fragen Sie nach den Prozessschritten Ihres Teils und der typischen Dauer je Schritt, dann wird der Engpass sichtbar (siehe <a href="kaynakli-imalat-teslim-suresi-planlama.html">Lieferzeitplanung</a>).</p>
<h2>Grobrechnung: Wie viel brauchen Sie?</h2>
<p>Gehen Sie mit eigenen Zahlen ins Kapazitätsgespräch. Ein einfacher Ansatz:</p>
<ol>
<li>Schweißzeit je Teil schätzen (Nahtlänge, Dicke, Verfahren; siehe <a href="kaynak-maliyeti-hesaplama.html">Schweißkosten berechnen</a>).</li>
<li>Zuschlag für Vorbereitung, Heften, Schleifen und Handling addieren.</li>
<li>Mit der Monatsmenge multiplizieren und in Schweißerstunden umrechnen.</li>
<li>Mit der Zahl passend geprüfter Schweißer und dem Schichtmodell vergleichen.</li>
</ol>
<p>Die Rechnung ist nicht exakt, zeigt aber, welchen Anteil der Gesamtkapazität Ihr Auftrag binden würde. Ist der Anteil sehr hoch, trifft Sie ein einzelner Ausfall oder ein anderer Großauftrag direkt.</p>
<h2>Nachweise verlangen</h2>
<ul>
<li>Fotos und Referenzen von Teilen ähnlicher Größe und Masse.</li>
<li>Aktuelle Liefertreue-Daten (OTD) (siehe <a href="kaynakli-imalat-tedarikci-denetimi.html">Lieferanten-KPIs</a>).</li>
<li>Schweißerzertifikate und Geltungsbereich der WPQR.</li>
<li>Typische Durchlaufzeiten bei Fremdprozess-Partnern.</li>
</ul>
<h2>Fragen zur Flexibilität</h2>
<p>Wie sich Kapazität bei Bedarfsänderungen verhält, ist ebenso wichtig wie der heutige Wert. Was passiert bei 30 % mehr Bedarf? Welche Aufträge lassen sich für ein Eillos verschieben? Gibt es Personal für eine Zusatzschicht? Kann Material bevorratet werden? Konkrete Antworten trennen einen realistischen von einem übermäßig optimistischen Lieferanten.</p>
<h2>Warnsignale</h2>
<ul>
<li>Allgemeine Antworten wie „wir schaffen alles" auf die Auslastungsfrage.</li>
<li>Schweißerzahl und Zertifikatsliste passen nicht zusammen.</li>
<li>Abhängigkeit von einem einzigen Partner für Fremdprozesse ohne Zeitangaben.</li>
<li>Beim Werksbesuch ist der gezeigte Bereich größtenteils leer oder anderweitig belegt (siehe <a href="kaynakli-imalat-tedarikci-denetimi.html">Checkliste Werksbesuch</a>).</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Im Angebot beschreiben wir die Prozessschritte Ihres Teils, welche Schritte in unserer Werkstatt und welche bei Partnern laufen, sowie einen realistischen Terminplan. Kapazitätsfragen beantworten wir gerne mit Zahlen und laden bei Bedarf zu einem Werkstattbesuch ein. <a href="../hakkimizda.html">Über uns →</a></p></div>
`,
    faq: [
      ['Wie misst man die Kapazität einer Schweißwerkstatt?', 'Durch die Kombination aus Zahl geprüfter Schweißer für Ihr Verfahren, Schichtmodell, Ausrüstung, Kran und Fläche, Fremdprozesszeiten und aktueller Auslastung.'],
      ['Warum ist der Engpass entscheidend?', 'Die tatsächliche Leistung entspricht dem langsamsten Glied der Kette vom Zuschnitt bis zur Lackierung.'],
      ['Welche Nachweise sollte ich anfordern?', 'Schweißerzertifikate, WPQR-Geltungsbereich, Referenzen ähnlicher Teile, Liefertreue-Daten und Fremdprozesszeiten.'],
      ['Wie berechne ich meinen eigenen Bedarf?', 'Schweißzeit je Teil plus Vorbereitungszuschlag mal Monatsmenge ergibt die benötigten Schweißerstunden.']
    ],
    cta_h3: 'Kapazität gemeinsam planen',
    cta_p: 'Senden Sie Zeichnung und Jahresmengenprognose; wir antworten mit Prozessschritten und Terminplan.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Cómo verificar la capacidad de un proveedor de soldadura: guía práctica para compradores',
    meta: 'Preguntas para verificar la capacidad real de un proveedor de soldadura: soldadores homologados, turnos, cuellos de botella, grúas y dimensiones de nave, END y procesos externos, carga actual y flexibilidad ante aumentos de demanda.',
    og: 'Verificar capacidad del proveedor',
    tag: 'Compras · Aprovisionamiento',
    h1: 'Cómo verificar la capacidad de un proveedor de soldadura: guía práctica para compradores',
    crumb: 'Verificar capacidad',
    read: '7 min de lectura',
    body: `
<p>"Tenemos capacidad" es la frase más oída y menos comprobada en las reuniones con proveedores. La capacidad de un taller de soldadura no se mide en metros cuadrados ni en número de máquinas. La pregunta real es: ¿se puede fabricar su pieza, con su calidad y a su ritmo, junto al trabajo que ya tiene el taller?</p>
<h2>Por qué se evalúa mal la capacidad</h2>
<ul>
<li>Se cuentan las máquinas, pero no se pregunta cuántos soldadores homologados pueden usarlas.</li>
<li>Se ve la superficie, pero no se comprueban la capacidad de la grúa ni la altura bajo gancho.</li>
<li>Se revisa la soldadura y se pasan por alto los cuellos de botella de corte, pintura o END.</li>
<li>Se ve el hueco de hoy, pero no se pregunta por la carga dentro de tres meses.</li>
</ul>
<h2>Preguntas clave</h2>
<table>
<thead><tr><th>Área</th><th>Pregunta</th><th>Qué revisar</th></tr></thead>
<tbody>
<tr><td>Personas</td><td>¿Cuántos soldadores están homologados para el proceso y la posición de su pieza?</td><td>Lista de certificados, vigencia</td></tr>
<tr><td>Turnos</td><td>¿Cuántos turnos se trabajan? ¿Es posible un turno extra?</td><td>Plan de turnos, horas extra</td></tr>
<tr><td>Equipos</td><td>¿Hay equipos para el proceso y los utillajes necesarios?</td><td>Lista de máquinas, mantenimiento</td></tr>
<tr><td>Nave y grúa</td><td>¿Bastan espacio y grúas para longitud, peso y volteo de la pieza?</td><td>Capacidad de grúa, altura bajo gancho, puertas</td></tr>
<tr><td>Procesos externos</td><td>¿Quién corta, pliega, mecaniza y pinta, y con qué plazo?</td><td>Lista de socios, plazos típicos</td></tr>
<tr><td>Inspección</td><td>¿Quién realiza END y mediciones?</td><td>Niveles del personal (ISO 9712), equipos</td></tr>
<tr><td>Carga</td><td>¿Cuál es la carga prevista para los próximos meses?</td><td>Plan de capacidad, pedidos grandes</td></tr>
</tbody>
</table>
<h2>Encontrar el cuello de botella</h2>
<p>El flujo de una pieza soldada suele pasar por corte, plegado, punteado y soldadura, enderezado, END, tratamiento superficial y expedición. La capacidad real del taller es la del eslabón más lento. Aunque la nave de soldadura esté libre, la línea de pintura o la cola en el galvanizador pueden fijar la fecha de entrega. Pedir al proveedor los pasos del proceso de su pieza y la duración típica de cada uno hace visible el cuello de botella (ver <a href="kaynakli-imalat-teslim-suresi-planlama.html">planificación de plazos</a>).</p>
<h2>Cálculo aproximado: ¿cuánto necesita?</h2>
<p>Acuda a la conversación con sus propias cifras. Un enfoque sencillo:</p>
<ol>
<li>Estime el tiempo de soldadura por pieza (longitud de cordón, espesor, proceso; ver <a href="kaynak-maliyeti-hesaplama.html">cálculo de costes de soldadura</a>).</li>
<li>Añada un margen para preparación, punteado, amolado y manipulación.</li>
<li>Multiplique por la cantidad mensual y conviértalo en horas de soldador.</li>
<li>Compárelo con el número de soldadores homologados y el régimen de turnos del proveedor.</li>
</ol>
<p>El cálculo no es exacto, pero muestra qué parte de la capacidad total ocuparía su trabajo. Si es muy alta, una sola avería u otro pedido grande le afectará directamente.</p>
<h2>Pida pruebas</h2>
<ul>
<li>Fotos y referencias de piezas de tamaño y peso similares.</li>
<li>Datos recientes de entrega a tiempo (OTD) (ver <a href="kaynakli-imalat-tedarikci-denetimi.html">indicadores de proveedores</a>).</li>
<li>Lista de certificados de soldadores y alcance de los WPQR.</li>
<li>Plazos típicos con los socios de procesos externos.</li>
</ul>
<h2>Preguntas de flexibilidad</h2>
<p>Importa tanto cómo se comporta la capacidad cuando cambia la demanda como su valor actual. ¿Qué ocurre si su demanda sube un 30 %? ¿Qué trabajos se pueden mover para un lote urgente? ¿Hay personal para un turno extra? ¿Se puede almacenar material? Las respuestas concretas separan al proveedor realista del demasiado optimista.</p>
<h2>Señales de alerta</h2>
<ul>
<li>Respuestas genéricas como "llegamos a todo" ante la pregunta de carga.</li>
<li>El número de soldadores no coincide con la lista de certificados.</li>
<li>Dependencia de un único socio para procesos externos sin datos de plazo.</li>
<li>En la visita, gran parte del área mostrada está vacía o dedicada a otros trabajos (ver <a href="kaynakli-imalat-tedarikci-denetimi.html">lista de control para la visita</a>).</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> en la oferta detallamos los pasos del proceso de su pieza, qué pasos se hacen en nuestro taller y cuáles con nuestros socios, y un plan de entrega realista. Respondemos a las preguntas de capacidad con cifras y, si hace falta, recibimos su visita al taller. <a href="../hakkimizda.html">Sobre nosotros →</a></p></div>
`,
    faq: [
      ['¿Cómo se mide la capacidad de un taller de soldadura?', 'Combinando soldadores homologados para su proceso, turnos, equipos, grúas y espacio, plazos de procesos externos y carga actual.'],
      ['¿Por qué importa el cuello de botella?', 'La producción real del taller equivale al eslabón más lento de la cadena, del corte a la pintura.'],
      ['¿Qué documentos debo pedir al proveedor?', 'Lista de certificados de soldadores, alcance de WPQR, referencias de piezas similares, datos de entrega a tiempo y plazos de procesos externos.'],
      ['¿Cómo calculo mi propia necesidad?', 'Sume un margen de preparación al tiempo de soldadura por pieza y multiplique por la cantidad mensual para obtener horas de soldador.']
    ],
    cta_h3: 'Planifiquemos juntos la capacidad',
    cta_p: 'Envíe el plano y su previsión anual; responderemos con los pasos del proceso y un plan de entrega.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Vérifier la capacité d\'un fournisseur en soudage : guide pratique pour acheteurs',
    meta: 'Questions pour vérifier la capacité réelle d\'un fournisseur en soudage : soudeurs qualifiés, organisation des équipes, goulots d\'étranglement, ponts roulants et dimensions des halls, CND et sous-traitance, charge actuelle et flexibilité.',
    og: 'Vérifier la capacité du fournisseur',
    tag: 'Achats · Approvisionnement',
    h1: 'Vérifier la capacité d\'un fournisseur en soudage : guide pratique pour acheteurs',
    crumb: 'Vérifier la capacité',
    read: '7 min de lecture',
    body: `
<p>« Nous avons de la capacité » est la phrase la plus entendue et la moins vérifiée lors des rencontres fournisseurs. La capacité d'un atelier de soudage ne se mesure ni en mètres carrés ni en nombre de machines. La vraie question : votre pièce peut-elle être fabriquée à votre niveau de qualité, à votre cadence, en plus du travail déjà en cours ?</p>
<h2>Pourquoi la capacité est mal évaluée</h2>
<ul>
<li>On compte les machines, sans demander combien de soudeurs qualifiés peuvent les utiliser.</li>
<li>On voit la surface, sans vérifier la capacité des ponts roulants ni la hauteur sous crochet.</li>
<li>On regarde le soudage et on oublie les goulots en découpe, peinture ou CND.</li>
<li>On voit la place disponible aujourd'hui, sans demander la charge dans trois mois.</li>
</ul>
<h2>Questions essentielles</h2>
<table>
<thead><tr><th>Domaine</th><th>Question</th><th>Que regarder</th></tr></thead>
<tbody>
<tr><td>Personnel</td><td>Combien de soudeurs qualifiés pour le procédé et la position de votre pièce ?</td><td>Liste des certificats, validité</td></tr>
<tr><td>Équipes</td><td>Combien de postes travaillés, un poste supplémentaire est-il possible ?</td><td>Planning des équipes, heures supplémentaires</td></tr>
<tr><td>Équipements</td><td>Les équipements pour le procédé et les gabarits sont-ils disponibles ?</td><td>Liste des machines, maintenance</td></tr>
<tr><td>Hall et pont</td><td>Place et levage suffisent-ils pour la longueur, le poids et le retournement ?</td><td>Capacité de levage, hauteur sous crochet, portes</td></tr>
<tr><td>Sous-traitance</td><td>Qui découpe, plie, usine et peint, avec quels délais ?</td><td>Liste des partenaires, délais types</td></tr>
<tr><td>Contrôle</td><td>Qui réalise les CND et les mesures ?</td><td>Niveaux du personnel (ISO 9712), appareils</td></tr>
<tr><td>Charge</td><td>Quelle est la charge prévue pour les prochains mois ?</td><td>Plan de charge, grosses commandes</td></tr>
</tbody>
</table>
<h2>Trouver le goulot d'étranglement</h2>
<p>Le flux d'une pièce soudée passe généralement par découpe, pliage, pointage et soudage, dressage, CND, traitement de surface et expédition. La capacité réelle de l'atelier est celle du maillon le plus lent. Même avec un hall de soudage libre, la ligne de peinture ou la file d'attente chez le galvaniseur peuvent fixer la date de livraison. Demander les étapes de votre pièce et la durée type de chacune rend le goulot visible (voir <a href="kaynakli-imalat-teslim-suresi-planlama.html">planification des délais</a>).</p>
<h2>Calcul approximatif : de combien avez-vous besoin ?</h2>
<p>Arrivez à la discussion avec vos propres chiffres. Une approche simple :</p>
<ol>
<li>Estimez le temps de soudage par pièce (longueur de cordon, épaisseur, procédé ; voir <a href="kaynak-maliyeti-hesaplama.html">calcul du coût de soudage</a>).</li>
<li>Ajoutez une marge pour préparation, pointage, meulage et manutention.</li>
<li>Multipliez par la quantité mensuelle et convertissez en heures-soudeur.</li>
<li>Comparez avec le nombre de soudeurs qualifiés concernés et l'organisation des postes.</li>
</ol>
<p>Le calcul n'est pas exact, mais il montre quelle part de la capacité totale votre affaire mobiliserait. Si elle est très élevée, une seule panne ou une autre grosse commande vous touchera directement.</p>
<h2>Demander des preuves</h2>
<ul>
<li>Photos et références de pièces de taille et de poids comparables.</li>
<li>Données récentes de livraison à l'heure (OTD) (voir <a href="kaynakli-imalat-tedarikci-denetimi.html">indicateurs fournisseurs</a>).</li>
<li>Liste des certificats de soudeurs et domaine de validité des QMOS.</li>
<li>Délais types auprès des partenaires de sous-traitance.</li>
</ul>
<h2>Questions de flexibilité</h2>
<p>Le comportement de la capacité lorsque la demande change compte autant que sa valeur actuelle. Que se passe-t-il si votre besoin augmente de 30 % ? Quels travaux peuvent être décalés pour un lot urgent ? Y a-t-il du personnel pour un poste supplémentaire ? La matière peut-elle être stockée ? Des réponses concrètes distinguent un fournisseur réaliste d'un fournisseur trop optimiste.</p>
<h2>Signaux d'alerte</h2>
<ul>
<li>Des réponses vagues comme « on peut tout faire » sur la charge.</li>
<li>Un nombre de soudeurs qui ne correspond pas à la liste des certificats.</li>
<li>Une dépendance à un seul partenaire de sous-traitance, sans information de délai.</li>
<li>Lors de la visite, l'essentiel de la surface montrée est vide ou affecté à d'autres travaux (voir <a href="kaynakli-imalat-tedarikci-denetimi.html">liste de contrôle pour la visite</a>).</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> dans le devis, nous décrivons les étapes de fabrication de votre pièce, celles réalisées dans notre atelier et celles confiées à nos partenaires, ainsi qu'un planning réaliste. Nous répondons aux questions de capacité avec des chiffres et pouvons vous recevoir pour une visite d'atelier. <a href="../hakkimizda.html">À propos →</a></p></div>
`,
    faq: [
      ['Comment mesure-t-on la capacité d\'un atelier de soudage ?', 'En combinant le nombre de soudeurs qualifiés pour votre procédé, l\'organisation des postes, les équipements, levage et surface, les délais de sous-traitance et la charge actuelle.'],
      ['Pourquoi le goulot d\'étranglement est-il important ?', 'La production réelle de l\'atelier est celle du maillon le plus lent, de la découpe à la peinture.'],
      ['Quels documents demander au fournisseur ?', 'Liste des certificats de soudeurs, domaine des QMOS, références de pièces similaires, données de ponctualité et délais de sous-traitance.'],
      ['Comment calculer mon propre besoin ?', 'Ajoutez une marge de préparation au temps de soudage par pièce et multipliez par la quantité mensuelle pour obtenir les heures-soudeur.']
    ],
    cta_h3: 'Planifions la capacité ensemble',
    cta_p: 'Envoyez le plan et votre prévision annuelle ; nous répondrons avec les étapes de fabrication et un planning.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Come verificare la capacità di un fornitore di saldatura: guida pratica per buyer',
    meta: 'Domande per verificare la capacità reale di un fornitore di saldatura: saldatori qualificati, turni, colli di bottiglia, carroponti e dimensioni del capannone, CND e lavorazioni esterne, carico attuale e flessibilità quando la domanda cresce.',
    og: 'Verificare la capacità del fornitore',
    tag: 'Acquisti · Approvvigionamento',
    h1: 'Come verificare la capacità di un fornitore di saldatura: guida pratica per buyer',
    crumb: 'Verifica della capacità',
    read: '7 min di lettura',
    body: `
<p>"Abbiamo capacità" è la frase più sentita e meno verificata negli incontri con i fornitori. La capacità di un'officina di saldatura non si misura in metri quadrati né in numero di macchine. La vera domanda è: il vostro pezzo può essere prodotto con la vostra qualità, al vostro ritmo, accanto al lavoro già presente?</p>
<h2>Perché la capacità viene valutata male</h2>
<ul>
<li>Si contano le macchine, ma non si chiede quanti saldatori qualificati possono usarle.</li>
<li>Si vede la superficie, ma non si verificano portata del carroponte e altezza sotto gancio.</li>
<li>Si guarda la saldatura e si trascurano i colli di bottiglia di taglio, verniciatura o CND.</li>
<li>Si nota lo spazio libero di oggi, senza chiedere il carico fra tre mesi.</li>
</ul>
<h2>Domande chiave</h2>
<table>
<thead><tr><th>Ambito</th><th>Domanda</th><th>Cosa verificare</th></tr></thead>
<tbody>
<tr><td>Persone</td><td>Quanti saldatori sono qualificati per processo e posizione del vostro pezzo?</td><td>Elenco certificati, validità</td></tr>
<tr><td>Turni</td><td>Quanti turni si lavorano, è possibile un turno extra?</td><td>Piano turni, straordinari</td></tr>
<tr><td>Attrezzature</td><td>Ci sono le attrezzature per il processo e le maschere necessarie?</td><td>Elenco macchine, manutenzione</td></tr>
<tr><td>Capannone e carroponte</td><td>Spazio e sollevamento bastano per lunghezza, peso e ribaltamento?</td><td>Portata, altezza sotto gancio, portoni</td></tr>
<tr><td>Lavorazioni esterne</td><td>Chi taglia, piega, lavora e vernicia, con quali tempi?</td><td>Elenco partner, tempi tipici</td></tr>
<tr><td>Controllo</td><td>Chi esegue CND e misure?</td><td>Livelli del personale (ISO 9712), strumenti</td></tr>
<tr><td>Carico</td><td>Qual è il carico previsto nei prossimi mesi?</td><td>Piano di capacità, grandi ordini</td></tr>
</tbody>
</table>
<h2>Trovare il collo di bottiglia</h2>
<p>Il flusso di un pezzo saldato passa di solito per taglio, piegatura, puntatura e saldatura, raddrizzatura, CND, trattamento superficiale e spedizione. La capacità reale dell'officina è quella dell'anello più lento. Anche con il reparto saldatura libero, la linea di verniciatura o la coda dal zincatore possono determinare la data di consegna. Chiedere le fasi del vostro pezzo e la durata tipica di ciascuna rende visibile il collo di bottiglia (vedi <a href="kaynakli-imalat-teslim-suresi-planlama.html">pianificazione dei tempi di consegna</a>).</p>
<h2>Calcolo di massima: di quanto avete bisogno?</h2>
<p>Presentatevi alla discussione con i vostri numeri. Un approccio semplice:</p>
<ol>
<li>Stimate il tempo di saldatura per pezzo (lunghezza del cordone, spessore, processo; vedi <a href="kaynak-maliyeti-hesaplama.html">calcolo del costo di saldatura</a>).</li>
<li>Aggiungete un margine per preparazione, puntatura, molatura e movimentazione.</li>
<li>Moltiplicate per la quantità mensile e convertite in ore-saldatore.</li>
<li>Confrontate con il numero di saldatori qualificati e lo schema dei turni del fornitore.</li>
</ol>
<p>Il calcolo non è esatto, ma mostra quale quota della capacità totale assorbirebbe il vostro lavoro. Se è molto alta, un solo guasto o un altro grande ordine vi colpirà direttamente.</p>
<h2>Chiedere prove</h2>
<ul>
<li>Foto e referenze di pezzi di dimensioni e peso simili.</li>
<li>Dati recenti di consegna puntuale (OTD) (vedi <a href="kaynakli-imalat-tedarikci-denetimi.html">KPI dei fornitori</a>).</li>
<li>Elenco dei certificati dei saldatori e campo di validità delle WPQR.</li>
<li>Tempi tipici presso i partner per le lavorazioni esterne.</li>
</ul>
<h2>Domande sulla flessibilità</h2>
<p>Conta quanto il valore attuale anche il comportamento della capacità quando la domanda cambia. Cosa succede se la vostra domanda cresce del 30 %? Quali lavori si possono spostare per un lotto urgente? C'è personale per un turno extra? Si può tenere scorta di materiale? Risposte concrete distinguono un fornitore realistico da uno troppo ottimista.</p>
<h2>Segnali di allarme</h2>
<ul>
<li>Risposte generiche come "ci stiamo dentro sempre" alla domanda sul carico.</li>
<li>Il numero di saldatori non coincide con l'elenco dei certificati.</li>
<li>Dipendenza da un solo partner per le lavorazioni esterne, senza dati sui tempi.</li>
<li>Durante la visita gran parte dell'area mostrata è vuota o dedicata ad altro (vedi <a href="kaynakli-imalat-tedarikci-denetimi.html">checklist per la visita</a>).</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> nell'offerta descriviamo le fasi del vostro pezzo, quali si svolgono nella nostra officina e quali presso i nostri partner, e un piano di consegna realistico. Rispondiamo alle domande sulla capacità con dati concreti e, se serve, vi accogliamo per una visita. <a href="../hakkimizda.html">Chi siamo →</a></p></div>
`,
    faq: [
      ['Come si misura la capacità di un\'officina di saldatura?', 'Combinando saldatori qualificati per il vostro processo, turni, attrezzature, sollevamento e spazio, tempi delle lavorazioni esterne e carico attuale.'],
      ['Perché il collo di bottiglia è importante?', 'La produzione reale dell\'officina corrisponde all\'anello più lento della catena, dal taglio alla verniciatura.'],
      ['Quali documenti chiedere al fornitore?', 'Elenco certificati dei saldatori, campo delle WPQR, referenze di pezzi simili, dati di puntualità e tempi delle lavorazioni esterne.'],
      ['Come calcolo il mio fabbisogno?', 'Aggiungete un margine di preparazione al tempo di saldatura per pezzo e moltiplicate per la quantità mensile per ottenere le ore-saldatore.']
    ],
    cta_h3: 'Pianifichiamo insieme la capacità',
    cta_p: 'Inviate disegno e previsione annua; risponderemo con le fasi di lavorazione e un piano di consegna.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'De capaciteit van een lasleverancier controleren: praktische gids voor inkopers',
    meta: 'Vragen om de werkelijke capaciteit van een lasleverancier te controleren: gekwalificeerde lassers, ploegendienst, knelpuntstations, kranen en halmaten, NDO en uitbestede processen, huidige bezetting en flexibiliteit bij stijgende vraag.',
    og: 'Leverancierscapaciteit controleren',
    tag: 'Inkoop · Sourcing',
    h1: 'De capaciteit van een lasleverancier controleren: praktische gids voor inkopers',
    crumb: 'Capaciteit controleren',
    read: '7 min lezen',
    body: `
<p>"We hebben capaciteit" is de vaakst gehoorde en minst gecontroleerde zin in leveranciersgesprekken. De capaciteit van een laswerkplaats meet je niet in vierkante meters en niet in aantal machines. De echte vraag is: kan uw onderdeel in uw kwaliteit en in uw ritme worden gemaakt, naast het werk dat er al ligt?</p>
<h2>Waarom capaciteit verkeerd wordt ingeschat</h2>
<ul>
<li>Machines worden geteld, maar niemand vraagt hoeveel gekwalificeerde lassers ermee kunnen werken.</li>
<li>De vloeroppervlakte wordt gezien, kraancapaciteit en haakhoogte niet gecontroleerd.</li>
<li>Lascapaciteit wordt bekeken, knelpunten bij snijden, lakken of NDO worden gemist.</li>
<li>De ruimte van vandaag valt op, de bezetting over drie maanden wordt niet gevraagd.</li>
</ul>
<h2>Belangrijkste vragen</h2>
<table>
<thead><tr><th>Gebied</th><th>Vraag</th><th>Waarop letten</th></tr></thead>
<tbody>
<tr><td>Mensen</td><td>Hoeveel lassers zijn gekwalificeerd voor het proces en de positie van uw onderdeel?</td><td>Certificatenlijst, geldigheid</td></tr>
<tr><td>Ploegen</td><td>Hoeveel ploegen, is een extra ploeg mogelijk?</td><td>Ploegenrooster, overwerk</td></tr>
<tr><td>Uitrusting</td><td>Is er uitrusting voor het lasproces en de benodigde mallen?</td><td>Machinelijst, onderhoud</td></tr>
<tr><td>Hal en kraan</td><td>Volstaan ruimte en kranen voor lengte, gewicht en keren?</td><td>Kraancapaciteit, haakhoogte, deurmaten</td></tr>
<tr><td>Uitbestede processen</td><td>Wie snijdt, zet, bewerkt en lakt, met welke doorlooptijd?</td><td>Partnerlijst, typische tijden</td></tr>
<tr><td>Inspectie</td><td>Wie voert NDO en metingen uit?</td><td>Personeelsniveaus (ISO 9712), apparatuur</td></tr>
<tr><td>Bezetting</td><td>Wat is de geplande bezetting voor de komende maanden?</td><td>Capaciteitsplan, grote orders</td></tr>
</tbody>
</table>
<h2>Vind het knelpunt</h2>
<p>De stroom van een gelast onderdeel loopt meestal via snijden, zetten, hechten en lassen, richten, NDO, oppervlaktebehandeling en verzending. De werkelijke capaciteit is die van de traagste schakel. Ook als de lashal vrij is, kan de lakstraat of de wachtrij bij de verzinkerij de leverdatum bepalen. Vraag de processtappen van uw onderdeel en de typische duur per stap op; dan wordt het knelpunt zichtbaar (zie <a href="kaynakli-imalat-teslim-suresi-planlama.html">levertijdplanning</a>).</p>
<h2>Ruwe berekening: hoeveel heeft u nodig?</h2>
<p>Ga met eigen cijfers het gesprek in. Een eenvoudige aanpak:</p>
<ol>
<li>Schat de lastijd per onderdeel (naadlengte, dikte, proces; zie <a href="kaynak-maliyeti-hesaplama.html">laskosten berekenen</a>).</li>
<li>Tel een opslag op voor voorbereiding, hechten, slijpen en handling.</li>
<li>Vermenigvuldig met de maandhoeveelheid en reken om naar lasuren.</li>
<li>Vergelijk met het aantal passend gekwalificeerde lassers en het ploegenrooster.</li>
</ol>
<p>De berekening is niet exact, maar laat zien welk deel van de totale capaciteit uw werk zou vragen. Is dat aandeel erg hoog, dan raakt één storing of een andere grote order u direct.</p>
<h2>Vraag om bewijs</h2>
<ul>
<li>Foto's en referenties van onderdelen met vergelijkbare afmetingen en gewicht.</li>
<li>Recente leverbetrouwbaarheidsdata (OTD) (zie <a href="kaynakli-imalat-tedarikci-denetimi.html">leveranciers-KPI's</a>).</li>
<li>Lijst van lassercertificaten en bereik van de WPQR's.</li>
<li>Typische doorlooptijden bij partners voor uitbestede processen.</li>
</ul>
<h2>Vragen over flexibiliteit</h2>
<p>Hoe capaciteit zich gedraagt bij veranderende vraag is net zo belangrijk als de waarde van vandaag. Wat gebeurt er als uw vraag 30% stijgt? Welke orders kunnen wijken voor een spoedserie? Is er personeel voor een extra ploeg? Kan materiaal op voorraad worden gehouden? Concrete antwoorden scheiden een realistische leverancier van een te optimistische.</p>
<h2>Waarschuwingssignalen</h2>
<ul>
<li>Algemene antwoorden als "we kunnen alles aan" op de vraag naar bezetting.</li>
<li>Het aantal lassers klopt niet met de certificatenlijst.</li>
<li>Afhankelijkheid van één partner voor uitbestede processen, zonder doorlooptijden.</li>
<li>Tijdens het bezoek is het getoonde gebied grotendeels leeg of voor ander werk bestemd (zie <a href="kaynakli-imalat-tedarikci-denetimi.html">checklist bedrijfsbezoek</a>).</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> in de offerte beschrijven we de processtappen van uw onderdeel, welke stappen in onze werkplaats en welke bij onze partners plaatsvinden, en een realistische leverplanning. Capaciteitsvragen beantwoorden we met cijfers en u bent welkom voor een bezoek aan de werkplaats. <a href="../hakkimizda.html">Over ons →</a></p></div>
`,
    faq: [
      ['Hoe meet je de capaciteit van een laswerkplaats?', 'Door het aantal gekwalificeerde lassers voor uw proces, ploegendienst, uitrusting, kranen en ruimte, doorlooptijden van uitbestede processen en de huidige bezetting samen te bekijken.'],
      ['Waarom is het knelpunt belangrijk?', 'De werkelijke output is die van de traagste schakel in de keten van snijden tot lakken.'],
      ['Welke documenten vraag ik op?', 'Lassercertificaten, bereik van de WPQR\'s, referenties van vergelijkbare onderdelen, leverbetrouwbaarheid en doorlooptijden van uitbestede processen.'],
      ['Hoe bereken ik mijn eigen behoefte?', 'Tel een voorbereidingsopslag bij de lastijd per onderdeel en vermenigvuldig met de maandhoeveelheid om lasuren te krijgen.']
    ],
    cta_h3: 'Laten we de capaciteit samen plannen',
    cta_p: 'Stuur de tekening en uw jaarprognose; we reageren met processtappen en een leverplanning.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Slik kontrollerer du kapasiteten til en sveiseleverandør: praktisk guide for innkjøpere',
    meta: 'Spørsmål for å kontrollere en sveiseleverandørs reelle kapasitet: sertifiserte sveisere, skiftordning, flaskehalser, kraner og hallmål, NDT og innkjøpte prosesser, nåværende belastning og fleksibilitet når etterspørselen øker.',
    og: 'Kontrollere leverandørkapasitet',
    tag: 'Innkjøp · Sourcing',
    h1: 'Slik kontrollerer du kapasiteten til en sveiseleverandør: praktisk guide for innkjøpere',
    crumb: 'Kontroll av kapasitet',
    read: '7 min lesing',
    body: `
<p>«Vi har kapasitet» er setningen man oftest hører og sjeldnest kontrollerer i leverandørmøter. Kapasiteten til et sveiseverksted måles verken i kvadratmeter eller antall maskiner. Det egentlige spørsmålet er: Kan delen din lages med din kvalitet, i ditt tempo, ved siden av arbeidet som allerede ligger i verkstedet?</p>
<h2>Hvorfor kapasitet vurderes feil</h2>
<ul>
<li>Maskiner telles, men ingen spør hvor mange sertifiserte sveisere som kan bruke dem.</li>
<li>Gulvarealet ses, men kranens kapasitet og krokhøyde sjekkes ikke.</li>
<li>Sveisekapasiteten vurderes, mens flaskehalser i skjæring, maling eller NDT overses.</li>
<li>Ledig plass i dag legges merke til, men belastningen om tre måneder etterspørres ikke.</li>
</ul>
<h2>Viktige spørsmål</h2>
<table>
<thead><tr><th>Område</th><th>Spørsmål</th><th>Hva du ser etter</th></tr></thead>
<tbody>
<tr><td>Folk</td><td>Hvor mange sveisere er sertifisert for prosessen og posisjonen til delen din?</td><td>Sertifikatliste, gyldighet</td></tr>
<tr><td>Skift</td><td>Hvor mange skift kjøres, er ekstra skift mulig?</td><td>Skiftplan, overtidspraksis</td></tr>
<tr><td>Utstyr</td><td>Finnes utstyr for sveiseprosessen og fiksturene som trengs?</td><td>Maskinliste, vedlikehold</td></tr>
<tr><td>Hall og kran</td><td>Er plass og kraner nok for lengde, vekt og vending?</td><td>Kranekapasitet, krokhøyde, portmål</td></tr>
<tr><td>Innkjøpte prosesser</td><td>Hvem skjærer, bukker, maskinerer og maler, og med hvilken ledetid?</td><td>Partnerliste, typiske tider</td></tr>
<tr><td>Kontroll</td><td>Hvem utfører NDT og måling?</td><td>Personellnivåer (ISO 9712), utstyr</td></tr>
<tr><td>Belastning</td><td>Hva er planlagt belastning de neste månedene?</td><td>Kapasitetsplan, store ordrer</td></tr>
</tbody>
</table>
<h2>Finn flaskehalsen</h2>
<p>Flyten for en sveist del går som regel gjennom skjæring, bukking, heftsveising og sveising, retting, NDT, overflatebehandling og forsendelse. Verkstedets reelle kapasitet tilsvarer det tregeste leddet i kjeden. Selv med ledig sveisehall kan malelinjen eller køen hos galvaniseringspartneren bestemme leveringsdatoen. Be om prosesstrinnene for delen din og typisk varighet for hvert trinn, så blir flaskehalsen synlig (se <a href="kaynakli-imalat-teslim-suresi-planlama.html">planlegging av leveringstid</a>).</p>
<h2>Grovt overslag: hvor mye trenger du?</h2>
<p>Gå inn i kapasitetssamtalen med egne tall. En enkel tilnærming:</p>
<ol>
<li>Anslå sveisetid per del (sveiselengde, tykkelse, prosess; se <a href="kaynak-maliyeti-hesaplama.html">beregning av sveisekostnad</a>).</li>
<li>Legg til et tillegg for forberedelse, heftsveising, sliping og håndtering.</li>
<li>Gang med månedlig antall og regn om til sveisetimer.</li>
<li>Sammenlign med antall relevante sertifiserte sveisere og skiftordningen hos leverandøren.</li>
</ol>
<p>Beregningen er ikke eksakt, men viser hvor stor andel av totalkapasiteten jobben din vil binde. Er andelen svært høy, rammer ett havari eller en annen stor ordre deg direkte.</p>
<h2>Be om dokumentasjon</h2>
<ul>
<li>Bilder og referanser av deler med lignende størrelse og vekt.</li>
<li>Ferske data for leveringspresisjon (OTD) (se <a href="kaynakli-imalat-tedarikci-denetimi.html">leverandør-KPI-er</a>).</li>
<li>Liste over sveisesertifikater og gyldighetsområde for WPQR.</li>
<li>Typiske ledetider hos partnere for innkjøpte prosesser.</li>
</ul>
<h2>Spørsmål om fleksibilitet</h2>
<p>Hvordan kapasiteten oppfører seg når etterspørselen endres, er like viktig som dagens tall. Hva skjer om behovet ditt øker 30 %? Hvilke jobber kan flyttes for et hasteparti? Finnes det folk til et ekstra skift? Kan materiale lagerføres? Konkrete svar skiller en realistisk leverandør fra en for optimistisk.</p>
<h2>Varselsignaler</h2>
<ul>
<li>Generelle svar som «vi rekker alt» på spørsmålet om belastning.</li>
<li>Antall sveisere stemmer ikke med sertifikatlisten.</li>
<li>Avhengighet av én partner for innkjøpte prosesser, uten ledetider.</li>
<li>Under besøket er mesteparten av arealet som vises tomt eller satt av til andre jobber (se <a href="kaynakli-imalat-tedarikci-denetimi.html">sjekkliste for fabrikkbesøk</a>).</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> i tilbudet beskriver vi prosesstrinnene for delen din, hvilke trinn som gjøres i vårt verksted og hvilke hos partnere, og en realistisk leveringsplan. Vi svarer på kapasitetsspørsmål med tall og tar gjerne imot deg til et verkstedsbesøk. <a href="../hakkimizda.html">Om oss →</a></p></div>
`,
    faq: [
      ['Hvordan måles kapasiteten til et sveiseverksted?', 'Ved å se antall sertifiserte sveisere for prosessen din, skiftordning, utstyr, kraner og areal, ledetider for innkjøpte prosesser og nåværende belastning samlet.'],
      ['Hvorfor er flaskehalsen viktig?', 'Verkstedets reelle produksjon tilsvarer det tregeste leddet i kjeden fra skjæring til maling.'],
      ['Hvilke dokumenter bør jeg be om?', 'Sertifikatliste for sveisere, WPQR-dekning, referanser for lignende deler, leveringspresisjon og ledetider for innkjøpte prosesser.'],
      ['Hvordan beregner jeg eget behov?', 'Legg et forberedelsestillegg til sveisetiden per del og gang med månedlig antall for å finne sveisetimer.']
    ],
    cta_h3: 'La oss planlegge kapasiteten sammen',
    cta_p: 'Send tegning og årsprognose; vi svarer med prosesstrinn og leveringsplan.',
    cta_btn: 'Be om tilbud →'
  }
};
