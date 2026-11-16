export default {
  order: 16,
  slug: 'teknik-resimde-kaynak-bilgileri',
  key: 'p16_drawing',
  date: '2026-02-17',
  keywords: 'teknik resimde kaynak, kaynaklı parça çizimi, kaynak çizim notları, ISO 2553 gösterim, kaynak genel notları, welding drawing requirements, Schweißzeichnung Angaben',
  related: ['kaynak-sembolizasyonu', 'iso-13920-kaynakli-imalat-tolerans-tablosu', 'kaynakli-imalat-teklif-hazirlama', 'malzeme-sertifikasi-en-10204-3-1'],
  tr: {
    title: 'Teknik Resimde Kaynak Bilgileri: Kaynaklı Parça Çiziminde Olması Gereken 10 Madde',
    meta: 'Kaynaklı parça çiziminde hangi bilgiler olmalı? Kaynak sembolleri, kalite seviyesi, tolerans sınıfı, malzeme ve sertifika, NDT kapsamı, yüzey işlemi, işaretleme ve örnek genel not bloğu.',
    og: 'Teknik Resimde Kaynak Bilgileri',
    tag: 'Tasarım · Teklif',
    h1: 'Teknik Resimde Kaynak Bilgileri: Kaynaklı Parça Çiziminde Olması Gereken 10 Madde',
    crumb: 'Teknik Resimde Kaynak',
    read: '6 dk okuma',
    body: `
<p>Kaynaklı bir parça için alınan iki teklif arasındaki büyük fiyat farkının nedeni çoğu zaman çizimdeki eksik bilgidir. Bir tedarikçi B kalite seviyesi ve %100 UT varsayar, diğeri D seviyesi ve sadece gözle muayene. Çizim açık olduğunda teklifler karşılaştırılabilir, üretimde de sürpriz çıkmaz. Aşağıdaki on madde, kaynaklı imalat çizimlerinde en sık eksik kalan bilgilerdir.</p>
<h2>1. Kaynak Sembolleri</h2>
<p>Her dikiş için tip, ölçü (a veya z), uzunluk ve gerekirse aralıklı kaynak adımı <strong>ISO 2553</strong>'e göre gösterilmelidir. Çizimin ISO sistemi A'ya (ok çizgisi ve kesik referans çizgisi) mı, yoksa AWS'ye benzeyen sistem B'ye mi göre hazırlandığı belli olmalıdır; iki sistemde "ok tarafı" yorumu farklıdır. Ayrıntılar için <a href="kaynak-sembolizasyonu.html">kaynak sembolleri rehberine</a> bakın.</p>
<h2>2. Kalite Seviyesi</h2>
<p>"Kaynaklar ISO 5817 C seviyesinde olacaktır" gibi bir not, kabul kriterini tek cümlede tanımlar. Kritik dikişler için farklı seviye isteniyorsa ilgili dikişin yanında belirtilmelidir.</p>
<h2>3. Uygulama Sınıfı veya Ürün Standardı</h2>
<p>Çelik yapı ise EN 1090-2'ye göre EXC sınıfı, basınçlı ekipman, demiryolu veya başka bir ürün standardı varsa adıyla yazılmalıdır. Bu bilgi, kaynakçı belgesinden muayene kapsamına kadar birçok şartı otomatik olarak belirler.</p>
<h2>4. Genel Tolerans Sınıfı</h2>
<p>Kaynaklı yapılar için <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> sınıfı (örneğin "ISO 13920-BF") yazılmalıdır. Talaşlı imalat toleransı olan ISO 2768'in kaynaklı gövdeye uygulanması, gereksiz derecede dar ve pahalı bir şart doğurur.</p>
<h2>5. Malzeme ve Sertifika</h2>
<p>Malzeme yalnızca "St37" veya "S355" olarak değil, kalite alt sınıfıyla (S355J2, S355K2 gibi) ve standardıyla yazılmalıdır. İstenen belge tipi de belirtilmelidir: <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a> veya 2.2.</p>
<h2>6. Tahribatsız Muayene Kapsamı</h2>
<p>Hangi dikişlere hangi yöntemle ve yüzde kaç NDT uygulanacağı yazılmalıdır. Örneğin: "Tam nüfuziyetli alın kaynaklarına %10 UT, ISO 11666 kabul seviyesi 2". Kapsam yazılmazsa tedarikçi ya fiyatı şişirir ya da hiç muayene öngörmez.</p>
<h2>7. Kaynak Sonrası İşlemler</h2>
<p>Gerilim giderme tavı, taşlama (örneğin "alın kaynakları yüzeyle aynı seviyeye taşlanacak"), doğrultma ve kenar yuvarlatma gibi işlemler çizimde yer almalıdır. Taşlanmış dikiş istemek, işçiliği belirgin şekilde artırır.</p>
<h2>8. Yüzey Hazırlığı ve Kaplama</h2>
<p>Boyalı parçalarda yüzey hazırlık derecesi (ISO 8501-1 Sa 2½), kaynak ve kenar hazırlık derecesi (ISO 8501-3 P1, P2, P3), korozyon sınıfı ve sistem bilgisi yazılmalıdır. Galvanizli parçalarda havalandırma ve drenaj delikleri çizimde gösterilmelidir.</p>
<h2>9. İşaretleme ve İzlenebilirlik</h2>
<p>Parça numarası, seri numarası veya kaynakçı damgasının yeri ve yöntemi (darbe, etiket, boya) belirtilmelidir. Bazı yüzeylerde darbe damgası istenmez; bu da çizimde yazmalıdır.</p>
<h2>10. Revizyon ve Kontrol Ölçüleri</h2>
<p>Revizyon numarası, değişiklik açıklaması ve fonksiyonel olarak kritik ölçülerin (KC veya CTF) işaretlenmesi, ilk parça onayında neyin ölçüleceğini netleştirir.</p>
<h2>Örnek Genel Not Bloğu</h2>
<table class="data-table"><tbody>
<tr><td>Kaynak gösterimi</td><td>ISO 2553, sistem A</td></tr>
<tr><td>Kalite seviyesi</td><td>ISO 5817-C, işaretli dikişlerde B</td></tr>
<tr><td>Uygulama sınıfı</td><td>EN 1090-2 EXC2</td></tr>
<tr><td>Genel tolerans</td><td>ISO 13920-BF</td></tr>
<tr><td>Malzeme</td><td>S355J2+N, EN 10025-2, EN 10204 3.1</td></tr>
<tr><td>NDT</td><td>%100 VT (ISO 17637); tam nüfuziyetli alın kaynaklarında %10 UT</td></tr>
<tr><td>Yüzey</td><td>Sa 2½, P2, C3 orta dayanım boya sistemi</td></tr>
<tr><td>İşaretleme</td><td>Parça no. ve iş no., boya kalemiyle, görünmeyen yüzeye</td></tr>
</tbody></table>
<p>Bu tablo bir örnektir; değerler ürünün kullanımına göre tasarımcı tarafından belirlenir.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Teklif öncesinde çizimi bu maddelere göre gözden geçirir, eksik veya çelişen bilgileri yazılı soru listesiyle size iletiriz. Böylece teklifimiz hangi varsayıma dayandığını açıkça gösterir. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['Kaynaklı parça çiziminde mutlaka ne olmalı?', 'Kaynak sembolleri ve ölçüleri, ISO 5817 kalite seviyesi, ISO 13920 tolerans sınıfı, malzeme kalitesi ve sertifika tipi, NDT kapsamı ve yüzey işlemi bilgisi en temel maddelerdir.'],
      ['Kaynaklı parçalarda ISO 2768 kullanılır mı?', 'ISO 2768 talaşlı imalat içindir. Kaynaklı yapılar için ISO 13920 kullanılmalıdır; talaşlı işlenecek yüzeyler ayrıca toleranslandırılabilir.'],
      ['NDT oranı çizimde belirtilmezse ne olur?', 'Tedarikçiler farklı varsayımlarla teklif verir; teklifler karşılaştırılamaz ve üretimde kabul tartışması çıkar.'],
      ['ISO 2553 sistem A ile sistem B farkı nedir?', 'Sistem A’da kesik referans çizgisi kullanılır, sistem B AWS’ye benzer ve kesik çizgi kullanmaz. Ok tarafı ve karşı taraf yorumu iki sistemde farklıdır.']
    ],
    cta_h3: 'Çiziminizi teklif öncesi birlikte netleştirelim',
    cta_p: 'Çiziminizi gönderin; eksik bilgileri soru listesiyle iletip net varsayımlara dayalı teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Welding Information on Drawings: 10 Items Every Fabrication Drawing Needs',
    meta: 'What should a welded part drawing contain? Weld symbols, quality level, tolerance class, material and certificate, NDT extent, surface treatment, marking and a sample general notes block.',
    og: 'Welding Information on Drawings',
    tag: 'Design · Quotation',
    h1: 'Welding Information on Drawings: 10 Items Every Fabrication Drawing Needs',
    crumb: 'Welding on Drawings',
    read: '6 min read',
    body: `
<p>When two quotes for a welded part differ widely, the cause is often missing information on the drawing. One supplier assumes quality level B and 100% UT, the other level D and visual inspection only. A clear drawing makes quotes comparable and avoids surprises in production. The ten items below are the ones most often missing on fabrication drawings.</p>
<h2>1. Weld Symbols</h2>
<p>For each weld, type, size (a or z), length and pitch for intermittent welds should be shown to <strong>ISO 2553</strong>. It should be clear whether the drawing uses ISO system A (arrow line plus dashed reference line) or the AWS-like system B, because "arrow side" is read differently. See our <a href="kaynak-sembolizasyonu.html">weld symbols guide</a>.</p>
<h2>2. Quality Level</h2>
<p>A note such as "Welds to ISO 5817 level C" defines acceptance in one sentence. If critical welds need a different level, mark it next to those welds.</p>
<h2>3. Execution Class or Product Standard</h2>
<p>For steel structures, state the EXC class to EN 1090-2; for pressure equipment, railway or another product standard, name it. This automatically sets many requirements, from welder qualification to inspection extent.</p>
<h2>4. General Tolerance Class</h2>
<p>For welded structures, state the <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> class (e.g. "ISO 13920-BF"). Applying ISO 2768, the machining tolerance, to a welded body creates unnecessarily tight and costly requirements.</p>
<h2>5. Material and Certificate</h2>
<p>Write the material with its subgrade and standard (S355J2, S355K2, etc.), not just "S355". State the document type required: <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a> or 2.2.</p>
<h2>6. NDT Extent</h2>
<p>State which welds get which method and what percentage. For example: "10% UT on full-penetration butt welds, ISO 11666 acceptance level 2". Without it, the supplier either inflates the price or plans no inspection at all.</p>
<h2>7. Post-Weld Operations</h2>
<p>Stress relieving, grinding (e.g. "butt welds ground flush"), straightening and edge rounding should be on the drawing. Ground welds add significant labour.</p>
<h2>8. Surface Preparation and Coating</h2>
<p>For painted parts, give the surface preparation grade (ISO 8501-1 Sa 2½), weld and edge preparation grade (ISO 8501-3 P1, P2, P3), corrosivity category and coating system. For galvanized parts, show vent and drain holes on the drawing.</p>
<h2>9. Marking and Traceability</h2>
<p>Specify where and how part numbers, serial numbers or welder stamps go (hard stamp, label, paint). Some surfaces must not be hard-stamped; that should be stated too.</p>
<h2>10. Revision and Key Characteristics</h2>
<p>Revision number, change description and marking of functionally critical dimensions (KC or CTF) clarify what is measured at first article approval.</p>
<h2>Sample General Notes Block</h2>
<table class="data-table"><tbody>
<tr><td>Weld notation</td><td>ISO 2553, system A</td></tr>
<tr><td>Quality level</td><td>ISO 5817-C, B on marked welds</td></tr>
<tr><td>Execution class</td><td>EN 1090-2 EXC2</td></tr>
<tr><td>General tolerance</td><td>ISO 13920-BF</td></tr>
<tr><td>Material</td><td>S355J2+N, EN 10025-2, EN 10204 3.1</td></tr>
<tr><td>NDT</td><td>100% VT (ISO 17637); 10% UT on full-penetration butt welds</td></tr>
<tr><td>Surface</td><td>Sa 2½, P2, C3 medium durability paint system</td></tr>
<tr><td>Marking</td><td>Part no. and job no., paint marker, on hidden face</td></tr>
</tbody></table>
<p>This is an example; the values are set by the designer according to the product’s use.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> before quoting we review the drawing against these items and send you a written list of missing or conflicting information. Our quotation then shows clearly which assumptions it is based on. <a href="../cizime-gore-imalat.html">Build-to-print fabrication →</a></p></div>
`,
    faq: [
      ['What must a welded part drawing include?', 'Weld symbols and sizes, ISO 5817 quality level, ISO 13920 tolerance class, material grade and certificate type, NDT extent and surface treatment are the essentials.'],
      ['Is ISO 2768 used for welded parts?', 'ISO 2768 is for machining. Welded structures should use ISO 13920; machined faces can be toleranced separately.'],
      ['What happens if the NDT extent is not on the drawing?', 'Suppliers quote on different assumptions, quotes cannot be compared and acceptance disputes arise in production.'],
      ['What is the difference between ISO 2553 system A and B?', 'System A uses a dashed reference line; system B resembles AWS and has no dashed line. Arrow side and other side are read differently in the two systems.']
    ],
    cta_h3: 'Let us clarify your drawing before quoting',
    cta_p: 'Send your drawing; we will send a question list for missing information and quote on clear assumptions.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Schweißangaben in der Zeichnung: 10 Punkte für jede Schweißteilzeichnung',
    meta: 'Was gehört in eine Schweißteilzeichnung? Schweißsymbole, Bewertungsgruppe, Toleranzklasse, Werkstoff und Zeugnis, ZfP-Umfang, Oberflächenbehandlung, Kennzeichnung und ein Muster für allgemeine Hinweise.',
    og: 'Schweißangaben in der Zeichnung',
    tag: 'Konstruktion · Angebot',
    h1: 'Schweißangaben in der Zeichnung: 10 Punkte für jede Schweißteilzeichnung',
    crumb: 'Schweißangaben',
    read: '6 Min. Lesezeit',
    body: `
<p>Liegen zwei Angebote für ein Schweißteil weit auseinander, fehlen oft Angaben in der Zeichnung. Ein Lieferant geht von Bewertungsgruppe B und 100 % UT aus, der andere von D und reiner Sichtprüfung. Eine eindeutige Zeichnung macht Angebote vergleichbar und vermeidet Überraschungen in der Fertigung. Die folgenden zehn Punkte fehlen in Schweißzeichnungen am häufigsten.</p>
<h2>1. Schweißsymbole</h2>
<p>Für jede Naht sollten Art, Maß (a oder z), Länge und bei unterbrochenen Nähten die Teilung nach <strong>ISO 2553</strong> angegeben sein. Klar sein muss, ob System A (Pfeillinie mit Strich-Bezugslinie) oder das AWS-ähnliche System B verwendet wird, da die „Pfeilseite" unterschiedlich gelesen wird. Mehr in unserem <a href="kaynak-sembolizasyonu.html">Leitfaden zu Schweißsymbolen</a>.</p>
<h2>2. Bewertungsgruppe</h2>
<p>Ein Hinweis wie „Schweißnähte nach ISO 5817 Bewertungsgruppe C" legt die Annahme in einem Satz fest. Gilt für kritische Nähte eine andere Gruppe, gehört sie an diese Nähte.</p>
<h2>3. Ausführungsklasse oder Produktnorm</h2>
<p>Bei Stahlbauten die EXC-Klasse nach EN 1090-2, bei Druckgeräten, Bahn oder anderen Produktnormen deren Bezeichnung. Damit sind viele Anforderungen von der Schweißerprüfung bis zum Prüfumfang festgelegt.</p>
<h2>4. Allgemeintoleranz</h2>
<p>Für Schweißkonstruktionen gehört die Klasse nach <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> (z. B. „ISO 13920-BF") in die Zeichnung. ISO 2768, die Toleranz für spanende Bearbeitung, auf einen geschweißten Körper anzuwenden, erzeugt unnötig enge und teure Anforderungen.</p>
<h2>5. Werkstoff und Zeugnis</h2>
<p>Den Werkstoff mit Gütegruppe und Norm angeben (S355J2, S355K2 usw.), nicht nur „S355". Ebenso das geforderte Prüfbescheinigungsformat: <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a> oder 2.2.</p>
<h2>6. ZfP-Umfang</h2>
<p>Welche Nähte mit welchem Verfahren und zu wie viel Prozent geprüft werden, z. B. „10 % UT an durchgeschweißten Stumpfnähten, ISO 11666 Zulässigkeitsgrenze 2". Fehlt das, kalkuliert der Lieferant entweder zu hoch oder gar keine Prüfung.</p>
<h2>7. Nacharbeiten nach dem Schweißen</h2>
<p>Spannungsarmglühen, Schleifen (z. B. „Stumpfnähte blecheben schleifen"), Richten und Kantenverrundung gehören in die Zeichnung. Verschliffene Nähte erhöhen den Arbeitsaufwand deutlich.</p>
<h2>8. Oberflächenvorbereitung und Beschichtung</h2>
<p>Bei lackierten Teilen den Vorbereitungsgrad (ISO 8501-1 Sa 2½), den Vorbereitungsgrad für Nähte und Kanten (ISO 8501-3 P1, P2, P3), die Korrosivitätskategorie und das System angeben. Bei verzinkten Teilen Entlüftungs- und Ablauföffnungen einzeichnen.</p>
<h2>9. Kennzeichnung und Rückverfolgbarkeit</h2>
<p>Ort und Art von Teilenummer, Seriennummer oder Schweißerzeichen (Schlagzahl, Etikett, Farbe) angeben. Wenn Schlagstempel auf bestimmten Flächen unzulässig sind, gehört auch das in die Zeichnung.</p>
<h2>10. Revision und Prüfmerkmale</h2>
<p>Revisionsstand, Änderungsbeschreibung und Kennzeichnung funktionskritischer Maße (KC oder CTF) klären, was bei der Erstmusterprüfung gemessen wird.</p>
<h2>Muster für allgemeine Hinweise</h2>
<table class="data-table"><tbody>
<tr><td>Nahtdarstellung</td><td>ISO 2553, System A</td></tr>
<tr><td>Bewertungsgruppe</td><td>ISO 5817-C, B an gekennzeichneten Nähten</td></tr>
<tr><td>Ausführungsklasse</td><td>EN 1090-2 EXC2</td></tr>
<tr><td>Allgemeintoleranz</td><td>ISO 13920-BF</td></tr>
<tr><td>Werkstoff</td><td>S355J2+N, EN 10025-2, EN 10204 3.1</td></tr>
<tr><td>ZfP</td><td>100 % VT (ISO 17637); 10 % UT an durchgeschweißten Stumpfnähten</td></tr>
<tr><td>Oberfläche</td><td>Sa 2½, P2, Beschichtungssystem C3 mittlere Schutzdauer</td></tr>
<tr><td>Kennzeichnung</td><td>Teile-Nr. und Auftrags-Nr., Lackstift, auf verdeckter Fläche</td></tr>
</tbody></table>
<p>Die Tabelle ist ein Beispiel; die Werte legt der Konstrukteur nach Verwendung des Produkts fest.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Vor dem Angebot prüfen wir die Zeichnung anhand dieser Punkte und schicken Ihnen eine schriftliche Liste fehlender oder widersprüchlicher Angaben. So zeigt unser Angebot klar, auf welchen Annahmen es beruht. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Was muss eine Schweißteilzeichnung enthalten?', 'Schweißsymbole und Maße, Bewertungsgruppe nach ISO 5817, Toleranzklasse nach ISO 13920, Werkstoff und Zeugnisart, ZfP-Umfang und Oberflächenbehandlung sind die Grundangaben.'],
      ['Gilt ISO 2768 für Schweißteile?', 'ISO 2768 gilt für spanende Bearbeitung. Für Schweißkonstruktionen ist ISO 13920 zu verwenden; bearbeitete Flächen können gesondert toleriert werden.'],
      ['Was passiert, wenn der ZfP-Umfang fehlt?', 'Lieferanten kalkulieren mit unterschiedlichen Annahmen, Angebote sind nicht vergleichbar, und in der Fertigung entstehen Abnahmediskussionen.'],
      ['Was unterscheidet ISO 2553 System A und B?', 'System A verwendet eine Strich-Bezugslinie, System B ähnelt AWS und kommt ohne aus. Pfeilseite und Gegenseite werden unterschiedlich gelesen.']
    ],
    cta_h3: 'Wir klären Ihre Zeichnung vor dem Angebot',
    cta_p: 'Senden Sie Ihre Zeichnung; wir schicken eine Frageliste zu fehlenden Angaben und bieten auf klaren Annahmen an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Información de soldadura en el plano: 10 datos que todo plano de pieza soldada necesita',
    meta: 'Qué debe incluir el plano de una pieza soldada: símbolos de soldadura, nivel de calidad, clase de tolerancia, material y certificado, alcance de END, tratamiento superficial, marcado y un ejemplo de notas generales.',
    og: 'Información de soldadura en el plano',
    tag: 'Diseño · Oferta',
    h1: 'Información de soldadura en el plano: 10 datos que todo plano de pieza soldada necesita',
    crumb: 'Soldadura en el plano',
    read: '6 min de lectura',
    body: `
<p>Cuando dos ofertas para una pieza soldada difieren mucho, la causa suele ser información que falta en el plano. Un proveedor supone nivel B y 100 % de UT; otro, nivel D y solo inspección visual. Un plano claro hace comparables las ofertas y evita sorpresas en producción. Estos diez datos son los que más faltan en los planos de calderería.</p>
<h2>1. Símbolos de soldadura</h2>
<p>Para cada cordón deben indicarse tipo, dimensión (a o z), longitud y, en soldadura discontinua, paso según la <strong>ISO 2553</strong>. Debe quedar claro si el plano usa el sistema A de ISO (línea de flecha y línea de referencia discontinua) o el sistema B, similar a AWS, porque el "lado de la flecha" se interpreta distinto. Más en nuestra <a href="kaynak-sembolizasyonu.html">guía de símbolos</a>.</p>
<h2>2. Nivel de calidad</h2>
<p>Una nota como "Soldaduras según ISO 5817 nivel C" define la aceptación en una frase. Si los cordones críticos requieren otro nivel, debe indicarse junto a ellos.</p>
<h2>3. Clase de ejecución o norma de producto</h2>
<p>En estructuras de acero, la clase EXC según EN 1090-2; en equipos a presión, ferrocarril u otra norma de producto, su nombre. Esto fija automáticamente muchos requisitos, desde la cualificación de soldadores hasta el alcance de inspección.</p>
<h2>4. Clase de tolerancia general</h2>
<p>Para estructuras soldadas debe indicarse la clase <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> (por ejemplo "ISO 13920-BF"). Aplicar la ISO 2768, pensada para mecanizado, a un cuerpo soldado crea requisitos innecesariamente estrechos y caros.</p>
<h2>5. Material y certificado</h2>
<p>El material debe indicarse con su subgrado y norma (S355J2, S355K2, etc.), no solo "S355", junto con el tipo de documento: <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a> o 2.2.</p>
<h2>6. Alcance de END</h2>
<p>Qué cordones, con qué método y en qué porcentaje. Por ejemplo: "10 % UT en soldaduras a tope de penetración completa, ISO 11666 nivel de aceptación 2". Sin ello, el proveedor encarece la oferta o no prevé inspección alguna.</p>
<h2>7. Operaciones posteriores a la soldadura</h2>
<p>Alivio de tensiones, amolado (por ejemplo "soldaduras a tope enrasadas"), enderezado y redondeo de aristas deben figurar en el plano. Los cordones amolados suponen bastante más mano de obra.</p>
<h2>8. Preparación superficial y recubrimiento</h2>
<p>En piezas pintadas: grado de preparación (ISO 8501-1 Sa 2½), grado de preparación de soldaduras y bordes (ISO 8501-3 P1, P2, P3), categoría de corrosividad y sistema. En piezas galvanizadas, mostrar en el plano los orificios de venteo y drenaje.</p>
<h2>9. Marcado y trazabilidad</h2>
<p>Dónde y cómo se marcan número de pieza, número de serie o sello del soldador (troquel, etiqueta, pintura). Si en ciertas superficies no se admite troquelado, también debe indicarse.</p>
<h2>10. Revisión y características clave</h2>
<p>El número de revisión, la descripción del cambio y la marca de las cotas funcionalmente críticas (KC o CTF) aclaran qué se mide en la aprobación de primera pieza.</p>
<h2>Ejemplo de notas generales</h2>
<table class="data-table"><tbody>
<tr><td>Representación</td><td>ISO 2553, sistema A</td></tr>
<tr><td>Nivel de calidad</td><td>ISO 5817-C, B en cordones marcados</td></tr>
<tr><td>Clase de ejecución</td><td>EN 1090-2 EXC2</td></tr>
<tr><td>Tolerancia general</td><td>ISO 13920-BF</td></tr>
<tr><td>Material</td><td>S355J2+N, EN 10025-2, EN 10204 3.1</td></tr>
<tr><td>END</td><td>100 % VT (ISO 17637); 10 % UT en soldaduras a tope de penetración completa</td></tr>
<tr><td>Superficie</td><td>Sa 2½, P2, sistema de pintura C3 durabilidad media</td></tr>
<tr><td>Marcado</td><td>N.º de pieza y de pedido, rotulador de pintura, en cara oculta</td></tr>
</tbody></table>
<p>La tabla es un ejemplo; los valores los fija el proyectista según el uso del producto.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> antes de ofertar revisamos el plano con estos puntos y le enviamos por escrito una lista de datos que faltan o se contradicen. Así nuestra oferta muestra con claridad en qué supuestos se basa. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Qué debe incluir obligatoriamente el plano de una pieza soldada?', 'Símbolos y dimensiones de soldadura, nivel de calidad ISO 5817, clase de tolerancia ISO 13920, material y tipo de certificado, alcance de END y tratamiento superficial.'],
      ['¿Se usa la ISO 2768 en piezas soldadas?', 'La ISO 2768 es para mecanizado. En estructuras soldadas debe usarse la ISO 13920; las caras mecanizadas pueden tolerarse aparte.'],
      ['¿Qué pasa si el plano no indica el alcance de END?', 'Los proveedores ofertan con supuestos distintos, las ofertas no son comparables y surgen discusiones de aceptación en producción.'],
      ['¿Qué diferencia hay entre los sistemas A y B de la ISO 2553?', 'El sistema A usa una línea de referencia discontinua; el B se parece a AWS y no la usa. El lado de la flecha y el opuesto se interpretan de forma distinta.']
    ],
    cta_h3: 'Aclaramos su plano antes de ofertar',
    cta_p: 'Envíenos su plano; le enviamos una lista de preguntas sobre los datos que faltan y ofertamos con supuestos claros.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Informations de soudage sur le plan : 10 points indispensables pour une pièce soudée',
    meta: 'Que doit contenir le plan d’une pièce soudée ? Symboles de soudage, niveau de qualité, classe de tolérance, matériau et certificat, étendue des CND, traitement de surface, marquage et exemple de notes générales.',
    og: 'Informations de soudage sur le plan',
    tag: 'Conception · Offre',
    h1: 'Informations de soudage sur le plan : 10 points indispensables pour une pièce soudée',
    crumb: 'Soudage sur le plan',
    read: '6 min de lecture',
    body: `
<p>Quand deux offres pour une pièce soudée s’écartent fortement, la cause est souvent un manque d’information sur le plan. Un fournisseur suppose le niveau B et 100 % d’UT, l’autre le niveau D et un simple contrôle visuel. Un plan clair rend les offres comparables et évite les surprises en production. Voici les dix informations qui manquent le plus souvent.</p>
<h2>1. Symboles de soudage</h2>
<p>Pour chaque cordon : type, cote (a ou z), longueur et, en soudure discontinue, pas, selon l’<strong>ISO 2553</strong>. Il faut savoir si le plan suit le système A (ligne de flèche et ligne de référence en tirets) ou le système B proche de l’AWS, car le « côté flèche » ne se lit pas de la même façon. Voir notre <a href="kaynak-sembolizasyonu.html">guide des symboles</a>.</p>
<h2>2. Niveau de qualité</h2>
<p>Une note comme « Soudures selon ISO 5817 niveau C » définit l’acceptation en une phrase. Si des cordons critiques exigent un autre niveau, l’indiquer à côté.</p>
<h2>3. Classe d’exécution ou norme produit</h2>
<p>Pour une charpente, la classe EXC selon l’EN 1090-2 ; pour un équipement sous pression, le ferroviaire ou une autre norme produit, son nom. Cela fixe d’emblée de nombreuses exigences, de la qualification des soudeurs à l’étendue des contrôles.</p>
<h2>4. Classe de tolérance générale</h2>
<p>Pour les ensembles soudés, indiquer la classe <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> (par exemple « ISO 13920-BF »). Appliquer l’ISO 2768, prévue pour l’usinage, à un corps soudé crée des exigences inutilement serrées et coûteuses.</p>
<h2>5. Matériau et certificat</h2>
<p>Indiquer la nuance avec sa qualité et sa norme (S355J2, S355K2…), pas seulement « S355 », ainsi que le type de document : <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a> ou 2.2.</p>
<h2>6. Étendue des CND</h2>
<p>Quels cordons, quelle méthode, quel pourcentage. Par exemple : « 10 % UT sur soudures bout à bout à pleine pénétration, ISO 11666 niveau d’acceptation 2 ». Sans cela, le fournisseur gonfle son prix ou ne prévoit aucun contrôle.</p>
<h2>7. Opérations après soudage</h2>
<p>Détensionnement, meulage (par exemple « soudures bout à bout arasées »), redressage et cassage d’angles doivent figurer sur le plan. Les cordons arasés représentent beaucoup plus de main-d’œuvre.</p>
<h2>8. Préparation de surface et revêtement</h2>
<p>Pour les pièces peintes : degré de préparation (ISO 8501-1 Sa 2½), degré de préparation des soudures et arêtes (ISO 8501-3 P1, P2, P3), catégorie de corrosivité et système. Pour la galvanisation, faire figurer les trous d’évent et de vidange.</p>
<h2>9. Marquage et traçabilité</h2>
<p>Où et comment marquer numéro de pièce, numéro de série ou poinçon soudeur (frappe, étiquette, peinture). Si la frappe est interdite sur certaines surfaces, l’indiquer aussi.</p>
<h2>10. Indice et caractéristiques clés</h2>
<p>L’indice de révision, la description de la modification et le repérage des cotes fonctionnelles critiques (KC ou CTF) précisent ce qui sera mesuré lors de l’approbation premier article.</p>
<h2>Exemple de bloc de notes générales</h2>
<table class="data-table"><tbody>
<tr><td>Représentation</td><td>ISO 2553, système A</td></tr>
<tr><td>Niveau de qualité</td><td>ISO 5817-C, B sur cordons repérés</td></tr>
<tr><td>Classe d’exécution</td><td>EN 1090-2 EXC2</td></tr>
<tr><td>Tolérance générale</td><td>ISO 13920-BF</td></tr>
<tr><td>Matériau</td><td>S355J2+N, EN 10025-2, EN 10204 3.1</td></tr>
<tr><td>CND</td><td>100 % VT (ISO 17637) ; 10 % UT sur bout à bout à pleine pénétration</td></tr>
<tr><td>Surface</td><td>Sa 2½, P2, système de peinture C3 durabilité moyenne</td></tr>
<tr><td>Marquage</td><td>N° de pièce et d’affaire, marqueur peinture, sur face cachée</td></tr>
</tbody></table>
<p>Ce tableau est un exemple ; les valeurs sont fixées par le concepteur selon l’usage du produit.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> avant de chiffrer, nous passons le plan en revue selon ces points et vous adressons par écrit la liste des informations manquantes ou contradictoires. Notre offre indique ainsi clairement sur quelles hypothèses elle repose. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Que doit absolument contenir le plan d’une pièce soudée ?', 'Symboles et cotes de soudure, niveau de qualité ISO 5817, classe de tolérance ISO 13920, nuance et type de certificat, étendue des CND et traitement de surface.'],
      ['L’ISO 2768 s’applique-t-elle aux pièces soudées ?', 'L’ISO 2768 vise l’usinage. Pour les ensembles soudés, utiliser l’ISO 13920 ; les surfaces usinées peuvent être tolérancées à part.'],
      ['Que se passe-t-il si l’étendue des CND manque ?', 'Les fournisseurs chiffrent sur des hypothèses différentes, les offres ne sont pas comparables et des litiges d’acceptation surviennent en production.'],
      ['Quelle différence entre les systèmes A et B de l’ISO 2553 ?', 'Le système A utilise une ligne de référence en tirets ; le B ressemble à l’AWS et n’en a pas. Côté flèche et côté opposé se lisent différemment.']
    ],
    cta_h3: 'Clarifions votre plan avant l’offre',
    cta_p: 'Envoyez votre plan ; nous vous adressons une liste de questions et chiffrons sur des hypothèses claires.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Informazioni di saldatura a disegno: 10 dati indispensabili per un pezzo saldato',
    meta: 'Cosa deve contenere il disegno di un pezzo saldato? Simboli di saldatura, livello di qualità, classe di tolleranza, materiale e certificato, estensione dei CND, trattamento superficiale, marcatura ed esempio di note generali.',
    og: 'Informazioni di saldatura a disegno',
    tag: 'Progettazione · Offerta',
    h1: 'Informazioni di saldatura a disegno: 10 dati indispensabili per un pezzo saldato',
    crumb: 'Saldatura a disegno',
    read: '6 min di lettura',
    body: `
<p>Quando due offerte per un pezzo saldato sono molto distanti, spesso la causa è un’informazione mancante a disegno. Un fornitore ipotizza livello B e 100 % UT, l’altro livello D e solo controllo visivo. Un disegno chiaro rende le offerte confrontabili ed evita sorprese in produzione. Ecco i dieci dati che mancano più spesso.</p>
<h2>1. Simboli di saldatura</h2>
<p>Per ogni cordone: tipo, quota (a o z), lunghezza e, per saldature intermittenti, passo secondo la <strong>ISO 2553</strong>. Deve essere chiaro se il disegno segue il sistema A (linea di freccia e linea di riferimento tratteggiata) o il sistema B simile all’AWS, perché il "lato freccia" si interpreta diversamente. Vedi la nostra <a href="kaynak-sembolizasyonu.html">guida ai simboli</a>.</p>
<h2>2. Livello di qualità</h2>
<p>Una nota come "Saldature secondo ISO 5817 livello C" definisce l’accettazione in una frase. Se i cordoni critici richiedono un altro livello, va indicato accanto.</p>
<h2>3. Classe di esecuzione o norma di prodotto</h2>
<p>Per le strutture in acciaio la classe EXC secondo EN 1090-2; per attrezzature a pressione, ferroviario o altra norma di prodotto, il suo nome. Ciò fissa automaticamente molti requisiti, dalla qualifica dei saldatori all’estensione dei controlli.</p>
<h2>4. Classe di tolleranza generale</h2>
<p>Per le strutture saldate va indicata la classe <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> (ad esempio "ISO 13920-BF"). Applicare la ISO 2768, pensata per la lavorazione meccanica, a un corpo saldato crea requisiti inutilmente stretti e costosi.</p>
<h2>5. Materiale e certificato</h2>
<p>Indicare il materiale con grado e norma (S355J2, S355K2 ecc.), non solo "S355", e il tipo di documento richiesto: <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a> o 2.2.</p>
<h2>6. Estensione dei CND</h2>
<p>Quali cordoni, con quale metodo e in che percentuale. Ad esempio: "10 % UT sulle saldature testa a testa a piena penetrazione, ISO 11666 livello di accettabilità 2". Senza questo dato il fornitore gonfia il prezzo o non prevede alcun controllo.</p>
<h2>7. Operazioni dopo la saldatura</h2>
<p>Distensione, molatura (ad esempio "saldature testa a testa rasate"), raddrizzatura e arrotondamento spigoli vanno a disegno. Le saldature rasate richiedono molta più manodopera.</p>
<h2>8. Preparazione superficiale e rivestimento</h2>
<p>Per pezzi verniciati: grado di preparazione (ISO 8501-1 Sa 2½), grado di preparazione di saldature e spigoli (ISO 8501-3 P1, P2, P3), categoria di corrosività e ciclo. Per pezzi zincati, indicare a disegno i fori di sfiato e scarico.</p>
<h2>9. Marcatura e tracciabilità</h2>
<p>Dove e come marcare numero pezzo, numero di serie o punzone del saldatore (punzonatura, etichetta, vernice). Se su certe superfici la punzonatura non è ammessa, va scritto.</p>
<h2>10. Revisione e caratteristiche chiave</h2>
<p>Indice di revisione, descrizione della modifica e marcatura delle quote funzionalmente critiche (KC o CTF) chiariscono cosa si misura all’approvazione del primo pezzo.</p>
<h2>Esempio di blocco note generali</h2>
<table class="data-table"><tbody>
<tr><td>Rappresentazione</td><td>ISO 2553, sistema A</td></tr>
<tr><td>Livello di qualità</td><td>ISO 5817-C, B sui cordoni marcati</td></tr>
<tr><td>Classe di esecuzione</td><td>EN 1090-2 EXC2</td></tr>
<tr><td>Tolleranza generale</td><td>ISO 13920-BF</td></tr>
<tr><td>Materiale</td><td>S355J2+N, EN 10025-2, EN 10204 3.1</td></tr>
<tr><td>CND</td><td>100 % VT (ISO 17637); 10 % UT su testa a testa a piena penetrazione</td></tr>
<tr><td>Superficie</td><td>Sa 2½, P2, ciclo di verniciatura C3 durabilità media</td></tr>
<tr><td>Marcatura</td><td>N. pezzo e n. commessa, pennarello a vernice, su faccia nascosta</td></tr>
</tbody></table>
<p>La tabella è un esempio; i valori sono stabiliti dal progettista in base all’uso del prodotto.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> prima di fare l’offerta esaminiamo il disegno secondo questi punti e vi inviamo per iscritto l’elenco dei dati mancanti o in conflitto. La nostra offerta mostra così chiaramente su quali ipotesi si basa. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Cosa deve contenere obbligatoriamente il disegno di un pezzo saldato?', 'Simboli e quote di saldatura, livello di qualità ISO 5817, classe di tolleranza ISO 13920, materiale e tipo di certificato, estensione dei CND e trattamento superficiale.'],
      ['La ISO 2768 si usa per i pezzi saldati?', 'La ISO 2768 è per la lavorazione meccanica. Per le strutture saldate va usata la ISO 13920; le superfici lavorate si possono tollerare a parte.'],
      ['Cosa succede se manca l’estensione dei CND?', 'I fornitori quotano su ipotesi diverse, le offerte non sono confrontabili e in produzione nascono contestazioni sull’accettazione.'],
      ['Che differenza c’è tra sistema A e B della ISO 2553?', 'Il sistema A usa una linea di riferimento tratteggiata; il B somiglia all’AWS e non la usa. Lato freccia e lato opposto si leggono diversamente.']
    ],
    cta_h3: 'Chiariamo il vostro disegno prima dell’offerta',
    cta_p: 'Inviateci il disegno; vi mandiamo un elenco di domande sui dati mancanti e quotiamo su ipotesi chiare.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Lasinformatie op de tekening: 10 punten die elke tekening van een gelast deel nodig heeft',
    meta: 'Wat hoort er op de tekening van een gelast onderdeel? Lassymbolen, kwaliteitsniveau, toleranties, materiaal en certificaat, NDO-omvang, oppervlaktebehandeling, markering en een voorbeeld van algemene notities.',
    og: 'Lasinformatie op de tekening',
    tag: 'Ontwerp · Offerte',
    h1: 'Lasinformatie op de tekening: 10 punten die elke tekening van een gelast deel nodig heeft',
    crumb: 'Lassen op tekening',
    read: '6 min lezen',
    body: `
<p>Als twee offertes voor een gelast deel ver uit elkaar liggen, ontbreekt vaak informatie op de tekening. De ene leverancier gaat uit van niveau B en 100 % UT, de andere van niveau D en alleen visuele inspectie. Een duidelijke tekening maakt offertes vergelijkbaar en voorkomt verrassingen in de productie. Dit zijn de tien punten die het vaakst ontbreken.</p>
<h2>1. Lassymbolen</h2>
<p>Per las: type, maat (a of z), lengte en bij onderbroken lassen de steek volgens <strong>ISO 2553</strong>. Duidelijk moet zijn of de tekening systeem A (pijllijn met gestreepte referentielijn) of het op AWS lijkende systeem B gebruikt, want de "pijlzijde" wordt anders gelezen. Zie onze <a href="kaynak-sembolizasyonu.html">gids over lassymbolen</a>.</p>
<h2>2. Kwaliteitsniveau</h2>
<p>Een notitie als "Lassen volgens ISO 5817 niveau C" legt de acceptatie in één zin vast. Gelden voor kritische lassen andere niveaus, vermeld die dan bij die lassen.</p>
<h2>3. Uitvoeringsklasse of productnorm</h2>
<p>Bij staalconstructies de EXC-klasse volgens EN 1090-2; bij drukapparatuur, spoor of een andere productnorm de naam ervan. Dat legt automatisch veel eisen vast, van lasserskwalificatie tot inspectieomvang.</p>
<h2>4. Algemene toleranties</h2>
<p>Voor gelaste constructies hoort de klasse volgens <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> (bijv. "ISO 13920-BF") op de tekening. ISO 2768, bedoeld voor verspaning, op een gelast lichaam toepassen geeft onnodig krappe en dure eisen.</p>
<h2>5. Materiaal en certificaat</h2>
<p>Vermeld het materiaal met kwaliteitsklasse en norm (S355J2, S355K2 enz.), niet alleen "S355", en het gevraagde documenttype: <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a> of 2.2.</p>
<h2>6. NDO-omvang</h2>
<p>Welke lassen, met welke methode en voor hoeveel procent. Bijvoorbeeld: "10 % UT op volledig doorgelaste stompe lassen, ISO 11666 acceptatieniveau 2". Zonder deze info rekent de leverancier te hoog of helemaal geen inspectie.</p>
<h2>7. Bewerkingen na het lassen</h2>
<p>Spanningsarm gloeien, slijpen (bijv. "stompe lassen vlak geslepen"), richten en kanten afronden horen op de tekening. Vlak geslepen lassen kosten aanzienlijk meer arbeid.</p>
<h2>8. Oppervlaktevoorbereiding en coating</h2>
<p>Bij gecoate delen: voorbehandelingsgraad (ISO 8501-1 Sa 2½), voorbereidingsgraad van lassen en kanten (ISO 8501-3 P1, P2, P3), corrosiviteitscategorie en systeem. Bij verzinkte delen ontluchtings- en afvoergaten op de tekening tonen.</p>
<h2>9. Markering en traceerbaarheid</h2>
<p>Waar en hoe onderdeelnummer, serienummer of lasserstempel worden aangebracht (slagstempel, label, verf). Mag op bepaalde vlakken niet worden gestempeld, vermeld dat dan ook.</p>
<h2>10. Revisie en kenmerkende maten</h2>
<p>Revisienummer, wijzigingsomschrijving en markering van functioneel kritische maten (KC of CTF) maken duidelijk wat bij de eerste-stukgoedkeuring wordt gemeten.</p>
<h2>Voorbeeld van algemene notities</h2>
<table class="data-table"><tbody>
<tr><td>Lasaanduiding</td><td>ISO 2553, systeem A</td></tr>
<tr><td>Kwaliteitsniveau</td><td>ISO 5817-C, B op gemarkeerde lassen</td></tr>
<tr><td>Uitvoeringsklasse</td><td>EN 1090-2 EXC2</td></tr>
<tr><td>Algemene tolerantie</td><td>ISO 13920-BF</td></tr>
<tr><td>Materiaal</td><td>S355J2+N, EN 10025-2, EN 10204 3.1</td></tr>
<tr><td>NDO</td><td>100 % VT (ISO 17637); 10 % UT op volledig doorgelaste stompe lassen</td></tr>
<tr><td>Oppervlak</td><td>Sa 2½, P2, coatingsysteem C3 middellange duurzaamheid</td></tr>
<tr><td>Markering</td><td>Onderdeel- en ordernummer, verfstift, op verborgen vlak</td></tr>
</tbody></table>
<p>Deze tabel is een voorbeeld; de waarden worden door de ontwerper bepaald op basis van het gebruik van het product.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> vóór de offerte toetsen we de tekening aan deze punten en sturen we u schriftelijk een lijst met ontbrekende of tegenstrijdige gegevens. Zo laat onze offerte duidelijk zien op welke aannames ze is gebaseerd. <a href="../cizime-gore-imalat.html">Productie op tekening →</a></p></div>
`,
    faq: [
      ['Wat moet er minimaal op de tekening van een gelast deel staan?', 'Lassymbolen en -maten, kwaliteitsniveau ISO 5817, tolerantieklasse ISO 13920, materiaal en certificaattype, NDO-omvang en oppervlaktebehandeling.'],
      ['Gebruik je ISO 2768 voor gelaste delen?', 'ISO 2768 is voor verspaning. Voor gelaste constructies gebruik je ISO 13920; bewerkte vlakken kunnen apart worden getolereerd.'],
      ['Wat gebeurt er als de NDO-omvang ontbreekt?', 'Leveranciers rekenen met verschillende aannames, offertes zijn niet vergelijkbaar en in de productie ontstaan discussies over acceptatie.'],
      ['Wat is het verschil tussen ISO 2553 systeem A en B?', 'Systeem A gebruikt een gestreepte referentielijn; systeem B lijkt op AWS en gebruikt die niet. Pijlzijde en andere zijde worden verschillend gelezen.']
    ],
    cta_h3: 'We maken uw tekening vóór de offerte duidelijk',
    cta_p: 'Stuur uw tekening; we sturen een vragenlijst over ontbrekende gegevens en bieden aan op duidelijke aannames.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Sveiseinformasjon på tegningen: 10 punkter hver tegning av en sveiset del trenger',
    meta: 'Hva skal stå på tegningen av en sveiset del? Sveisesymboler, kvalitetsnivå, toleranseklasse, materiale og sertifikat, NDT-omfang, overflatebehandling, merking og et eksempel på generelle merknader.',
    og: 'Sveiseinformasjon på tegningen',
    tag: 'Konstruksjon · Tilbud',
    h1: 'Sveiseinformasjon på tegningen: 10 punkter hver tegning av en sveiset del trenger',
    crumb: 'Sveis på tegning',
    read: '6 min lesing',
    body: `
<p>Når to tilbud på en sveiset del ligger langt fra hverandre, skyldes det ofte manglende informasjon på tegningen. Én leverandør forutsetter kvalitetsnivå B og 100 % UT, en annen nivå D og bare visuell kontroll. En tydelig tegning gjør tilbudene sammenlignbare og hindrer overraskelser i produksjonen. Her er de ti punktene som oftest mangler.</p>
<h2>1. Sveisesymboler</h2>
<p>For hver sveis: type, mål (a eller z), lengde og deling ved avbrutt sveis etter <strong>ISO 2553</strong>. Det må fremgå om tegningen følger system A (pillinje og stiplet referanselinje) eller det AWS-lignende system B, fordi «pilsiden» leses ulikt. Se vår <a href="kaynak-sembolizasyonu.html">veiledning om sveisesymboler</a>.</p>
<h2>2. Kvalitetsnivå</h2>
<p>En merknad som «Sveiser etter ISO 5817 nivå C» definerer akseptkriteriet i én setning. Krever kritiske sveiser et annet nivå, angis det ved disse sveisene.</p>
<h2>3. Utførelsesklasse eller produktstandard</h2>
<p>For stålkonstruksjoner EXC-klassen etter EN 1090-2; for trykkutstyr, jernbane eller annen produktstandard navnet på den. Det fastsetter mange krav automatisk, fra sveisersertifisering til kontrollomfang.</p>
<h2>4. Generell toleranseklasse</h2>
<p>For sveiste konstruksjoner angis klassen etter <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> (f.eks. «ISO 13920-BF»). Å bruke ISO 2768, som er laget for maskinering, på et sveist legeme gir unødvendig stramme og dyre krav.</p>
<h2>5. Materiale og sertifikat</h2>
<p>Angi materialet med kvalitetsgrad og standard (S355J2, S355K2 osv.), ikke bare «S355», og ønsket dokumenttype: <a href="malzeme-sertifikasi-en-10204-3-1.html">EN 10204 3.1</a> eller 2.2.</p>
<h2>6. NDT-omfang</h2>
<p>Hvilke sveiser, med hvilken metode og hvor mange prosent. For eksempel: «10 % UT på gjennomsveiste buttsveiser, ISO 11666 akseptnivå 2». Uten dette priser leverandøren enten for høyt eller planlegger ingen kontroll.</p>
<h2>7. Operasjoner etter sveising</h2>
<p>Spenningsavlastning, sliping (f.eks. «buttsveiser slipes i flukt»), retting og kantavrunding hører hjemme på tegningen. Slipte sveiser gir vesentlig mer arbeid.</p>
<h2>8. Overflateforbehandling og belegg</h2>
<p>For malte deler: forbehandlingsgrad (ISO 8501-1 Sa 2½), forbehandlingsgrad for sveiser og kanter (ISO 8501-3 P1, P2, P3), korrosivitetskategori og system. For galvaniserte deler vises lufte- og dreneringshull på tegningen.</p>
<h2>9. Merking og sporbarhet</h2>
<p>Hvor og hvordan delenummer, serienummer eller sveiserstempel påføres (slagstempel, etikett, maling). Er slagstempling ikke tillatt på enkelte flater, skal også det stå.</p>
<h2>10. Revisjon og nøkkelmål</h2>
<p>Revisjonsnummer, endringsbeskrivelse og markering av funksjonskritiske mål (KC eller CTF) tydeliggjør hva som måles ved førsteartikkelgodkjenning.</p>
<h2>Eksempel på generelle merknader</h2>
<table class="data-table"><tbody>
<tr><td>Sveiseangivelse</td><td>ISO 2553, system A</td></tr>
<tr><td>Kvalitetsnivå</td><td>ISO 5817-C, B på merkede sveiser</td></tr>
<tr><td>Utførelsesklasse</td><td>EN 1090-2 EXC2</td></tr>
<tr><td>Generell toleranse</td><td>ISO 13920-BF</td></tr>
<tr><td>Materiale</td><td>S355J2+N, EN 10025-2, EN 10204 3.1</td></tr>
<tr><td>NDT</td><td>100 % VT (ISO 17637); 10 % UT på gjennomsveiste buttsveiser</td></tr>
<tr><td>Overflate</td><td>Sa 2½, P2, malingssystem C3 middels holdbarhet</td></tr>
<tr><td>Merking</td><td>Delenr. og ordrenr., malingspenn, på skjult flate</td></tr>
</tbody></table>
<p>Tabellen er et eksempel; verdiene fastsettes av konstruktøren etter produktets bruk.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> før vi gir tilbud, går vi gjennom tegningen etter disse punktene og sender deg skriftlig en liste over manglende eller motstridende opplysninger. Tilbudet vårt viser dermed tydelig hvilke forutsetninger det bygger på. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hva må tegningen av en sveiset del inneholde?', 'Sveisesymboler og mål, kvalitetsnivå etter ISO 5817, toleranseklasse etter ISO 13920, materiale og sertifikattype, NDT-omfang og overflatebehandling.'],
      ['Brukes ISO 2768 for sveiste deler?', 'ISO 2768 er for maskinering. For sveiste konstruksjoner brukes ISO 13920; maskinerte flater kan toleranseres separat.'],
      ['Hva skjer hvis NDT-omfanget mangler?', 'Leverandørene priser på ulike forutsetninger, tilbudene kan ikke sammenlignes, og det oppstår diskusjoner om aksept i produksjonen.'],
      ['Hva er forskjellen på ISO 2553 system A og B?', 'System A bruker en stiplet referanselinje; system B ligner AWS og bruker ikke den. Pilside og motsatt side leses ulikt.']
    ],
    cta_h3: 'Vi avklarer tegningen din før tilbud',
    cta_p: 'Send tegningen; vi sender en spørsmålsliste om manglende opplysninger og gir tilbud på tydelige forutsetninger.',
    cta_btn: 'Be om tilbud →'
  }
};
