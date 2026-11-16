export default {
  order: 19,
  slug: 'kaynakli-mi-civatali-mi-birlestirme',
  key: 'p19_boltweld',
  date: '2026-11-16',
  keywords: 'kaynaklı mı cıvatalı mı, kaynaklı birleştirme cıvatalı birleştirme farkı, sökülebilir bağlantı, öngermeli cıvata, atölye kaynağı saha cıvatası, welded vs bolted connection, geschweißt oder geschraubt',
  related: ['celik-konstruksiyon-imalat', 'kaynak-dikisi-mukavemet-hesabi', 'kaynakli-baglantilarda-yorulma-fat-sinifi', 'sicak-daldirma-galvaniz-kaynakli-parca'],
  tr: {
    title: 'Kaynaklı mı Cıvatalı mı? Birleştirme Yöntemi Seçimi İçin Mühendislik Rehberi',
    meta: 'Kaynaklı ve cıvatalı birleştirme karşılaştırması: dayanım, yorulma, maliyet, tolerans, nakliye, galvaniz, sökülebilirlik ve saha montajı. Atölyede kaynak, sahada cıvata yaklaşımı ve karar tablosu.',
    og: 'Kaynaklı mı Cıvatalı mı?',
    tag: 'Tasarım · Karar',
    h1: 'Kaynaklı mı Cıvatalı mı? Birleştirme Yöntemi Seçimi İçin Mühendislik Rehberi',
    crumb: 'Kaynaklı mı Cıvatalı mı',
    read: '6 dk okuma',
    body: `
<p>Bir çelik parçayı tasarlarken "bu birleşim kaynaklı mı olsun, cıvatalı mı?" sorusu, maliyeti ve ürün ömrünü kaynak ölçüsünden daha fazla etkileyebilir. Doğru cevap çoğu zaman "ikisi birden"dir: atölyede kaynak, sahada cıvata. Bu yazıda iki yöntemi teknik ve ticari açıdan karşılaştırıyoruz.</p>
<h2>Karşılaştırma Tablosu</h2>
<table class="data-table"><thead><tr><th>Kriter</th><th>Kaynaklı</th><th>Cıvatalı</th></tr></thead><tbody>
<tr><td>Rijitlik</td><td>Yüksek, sürekli bağlantı</td><td>Bağlantı tipine göre; ön gerilmeli bağlantılarda yüksek</td></tr>
<tr><td>Ağırlık</td><td>Daha hafif; ek lama ve flanş gerekmez</td><td>Bağlantı levhaları ve cıvatalar ağırlık ekler</td></tr>
<tr><td>Yorulma</td><td>Kaynak ucu ve kök kritik</td><td>Ön gerilmeli kayma dirençli bağlantılar genellikle daha iyi</td></tr>
<tr><td>Sökülebilirlik</td><td>Yok</td><td>Var; bakım, değişim ve nakliye kolaylığı</td></tr>
<tr><td>Tolerans</td><td>Montajda ayar yapılabilir</td><td>Delik konumları hassas olmalı</td></tr>
<tr><td>Saha işçiliği</td><td>Nitelikli kaynakçı, hava koşulu, muayene gerekir</td><td>Hızlı; tork veya ön gerilme kontrolü yeterli</td></tr>
<tr><td>Korozyon koruması</td><td>Saha kaynağı kaplamayı bozar</td><td>Galvanizli parçalar kaplama bozulmadan birleşir</td></tr>
<tr><td>Atölye maliyeti</td><td>Delik ve bağlantı levhası yok</td><td>Delik, levha, cıvata ve işçilik eklenir</td></tr>
</tbody></table>
<h2>Kaynağın Öne Çıktığı Durumlar</h2>
<ul>
<li>Sızdırmazlık gereken tank, silo, hazne ve boru bağlantıları.</li>
<li>Yüksek rijitlik ve hassas geometri istenen makine gövdeleri.</li>
<li>Ağırlığın kritik olduğu araç üst yapıları ve şasiler.</li>
<li>Kesit içinde kuvvetin kesintisiz aktarılması gereken birleşimler.</li>
</ul>
<h2>Cıvatanın Öne Çıktığı Durumlar</h2>
<ul>
<li>Nakliye boyutunu aşan yapıların modüllere bölünmesi.</li>
<li>Bakımda sökülecek veya değiştirilecek parçalar.</li>
<li>Saha kaynağının pahalı, riskli veya kontrolünün zor olduğu projeler.</li>
<li>Galvaniz veya boya sonrası birleştirilecek parçalar.</li>
<li>Galvaniz kazanı ölçüsünü aşan parçaların bölünmesi.</li>
</ul>
<h2>Hibrit Yaklaşım: Atölyede Kaynak, Sahada Cıvata</h2>
<p>Çelik yapılarda en yaygın ve genellikle en ekonomik çözüm, alt montajların atölyede kaynakla imal edilmesi, sahada cıvatayla birleştirilmesidir. Atölye kaynağı kontrollü ortamda, düz pozisyonda ve muayeneli yapılır; saha bağlantısı hızlı ve tekrarlanabilir olur. Bu yaklaşımda kritik olan, bağlantı levhalarının kaynak sonrası çarpılmaya karşı doğru konumda kalmasıdır. Uygun kaynak sırası, fikstür ve gerekirse kaynak sonrası delme bu riski azaltır.</p>
<h2>Cıvatalı Bağlantıda Dikkat Edilecekler</h2>
<ul>
<li><strong>Delik boşluğu:</strong> EN 1090-2'de normal delik boşluğu M12-M14 için 1 mm, M16-M24 için 2 mm, M27 ve üzeri için 3 mm'dir.</li>
<li><strong>Ön gerilmeli bağlantılar:</strong> Kayma dirençli ve dinamik yüklü bağlantılarda EN 14399 setleri ve tanımlı sıkma yöntemi kullanılır; temas yüzeylerinin hazırlığı da belirtilmelidir.</li>
<li><strong>Delik konum toleransı:</strong> Kaynaklı gövdedeki delikler kaynak öncesi açılırsa çarpılma nedeniyle kayabilir; kritik deliklerin kaynak sonrası açılması değerlendirilmelidir.</li>
</ul>
<h2>Kaynaklı Bağlantıda Dikkat Edilecekler</h2>
<ul>
<li>Kaynak ölçüsünün hesapla belirlenmesi (bkz. <a href="kaynak-dikisi-mukavemet-hesabi.html">kaynak mukavemet hesabı</a>).</li>
<li>Değişken yüklerde detayın FAT sınıfının değerlendirilmesi (bkz. <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">yorulma rehberi</a>).</li>
<li>Galvanizlenecek parçalarda kapalı boşluklara havalandırma deliği açılması.</li>
</ul>
<h2>Karar Verirken Sorulacak Beş Soru</h2>
<ol>
<li>Parça tek parça halinde taşınabilir ve kaplanabilir mi?</li>
<li>Kullanım ömrü boyunca sökülmesi gerekecek mi?</li>
<li>Bağlantı değişken yük altında mı?</li>
<li>Sızdırmazlık veya hijyen şartı var mı?</li>
<li>Saha koşulları kaynak kalitesini kontrol etmeye uygun mu?</li>
</ol>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Kaynaklı alt montajları atölyemizde imal ediyor, cıvatalı saha bağlantısı için delik ve bağlantı levhası konumlarını kaynak sonrası ölçüyle doğruluyoruz. Taşıma ve kaplama sınırlarına göre modül bölme önerilerimizi teklif aşamasında paylaşıyoruz. <a href="../kaynakli-imalat.html">Kaynaklı imalat hizmetimiz →</a></p></div>
`,
    faq: [
      ['Kaynaklı bağlantı mı cıvatalı bağlantı mı daha güçlü?', 'Her ikisi de doğru tasarlandığında gereken yükü taşır. Kaynak daha rijit ve hafif bir bağlantı verir; cıvata sökülebilirlik ve saha montajında avantaj sağlar.'],
      ['Yorulmada hangisi daha iyidir?', 'Ön gerilmeli kayma dirençli cıvatalı bağlantılar çoğu zaman daha yüksek yorulma sınıfına sahiptir. Kaynaklı detaylarda kaynak ucu ve kök kritik noktalardır.'],
      ['Galvanizli parçalar nasıl birleştirilir?', 'Genellikle cıvatayla. Saha kaynağı galvaniz kaplamayı bozar ve onarım gerektirir.'],
      ['Atölyede kaynak, sahada cıvata neden yaygındır?', 'Kaynak kontrollü atölye ortamında daha kaliteli ve ucuz yapılır; sahada cıvatalı birleşim hızlı ve tekrarlanabilir montaj sağlar.']
    ],
    cta_h3: 'Birleştirme kararını birlikte verelim',
    cta_p: 'Çiziminizi gönderin; kaynaklı ve cıvatalı seçenekleri maliyet ve montaj açısından değerlendirip teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Welded or Bolted? An Engineering Guide to Choosing the Connection',
    meta: 'Welded vs bolted connections compared: strength, fatigue, cost, tolerances, transport, galvanizing, dismantling and site assembly. The shop-weld, site-bolt approach and a decision checklist.',
    og: 'Welded or Bolted?',
    tag: 'Design · Decision',
    h1: 'Welded or Bolted? An Engineering Guide to Choosing the Connection',
    crumb: 'Welded or Bolted',
    read: '6 min read',
    body: `
<p>When designing a steel part, the question "welded or bolted?" can affect cost and service life more than the weld size itself. The right answer is often "both": weld in the shop, bolt on site. This article compares the two methods technically and commercially.</p>
<h2>Comparison Table</h2>
<table class="data-table"><thead><tr><th>Criterion</th><th>Welded</th><th>Bolted</th></tr></thead><tbody>
<tr><td>Stiffness</td><td>High, continuous joint</td><td>Depends on type; high with preloaded joints</td></tr>
<tr><td>Weight</td><td>Lighter; no splice plates or flanges</td><td>Connection plates and bolts add weight</td></tr>
<tr><td>Fatigue</td><td>Weld toe and root are critical</td><td>Preloaded slip-resistant joints usually better</td></tr>
<tr><td>Dismantling</td><td>Not possible</td><td>Possible; easier maintenance, replacement and transport</td></tr>
<tr><td>Tolerance</td><td>Can be adjusted at fit-up</td><td>Hole positions must be accurate</td></tr>
<tr><td>Site work</td><td>Qualified welders, weather, inspection needed</td><td>Fast; torque or preload control is enough</td></tr>
<tr><td>Corrosion protection</td><td>Site welding damages coating</td><td>Galvanized parts join without coating damage</td></tr>
<tr><td>Shop cost</td><td>No holes or connection plates</td><td>Holes, plates, bolts and labour added</td></tr>
</tbody></table>
<h2>When Welding Wins</h2>
<ul>
<li>Tanks, silos, hoppers and pipe connections that must be tight.</li>
<li>Machine frames needing high stiffness and accurate geometry.</li>
<li>Vehicle bodies and chassis where weight matters.</li>
<li>Joints where force must flow continuously through the section.</li>
</ul>
<h2>When Bolting Wins</h2>
<ul>
<li>Splitting structures that exceed transport dimensions into modules.</li>
<li>Parts that will be removed or replaced during maintenance.</li>
<li>Projects where site welding is costly, risky or hard to control.</li>
<li>Parts joined after galvanizing or painting.</li>
<li>Splitting parts larger than the galvanizing bath.</li>
</ul>
<h2>Hybrid Approach: Weld in the Shop, Bolt on Site</h2>
<p>In steel structures the most common and usually most economical solution is to fabricate sub-assemblies by welding in the shop and join them on site with bolts. Shop welding is done in a controlled environment, in flat position and with inspection; site connections become fast and repeatable. The critical point is keeping connection plates in the right position despite welding distortion. Correct weld sequence, fixtures and, where needed, drilling after welding reduce that risk.</p>
<h2>Points to Watch in Bolted Joints</h2>
<ul>
<li><strong>Hole clearance:</strong> EN 1090-2 normal clearance is 1 mm for M12-M14, 2 mm for M16-M24 and 3 mm for M27 and above.</li>
<li><strong>Preloaded joints:</strong> slip-resistant and dynamically loaded joints use EN 14399 assemblies and a defined tightening method; faying surface preparation should also be specified.</li>
<li><strong>Hole position tolerance:</strong> holes drilled before welding can shift through distortion; consider drilling critical holes after welding.</li>
</ul>
<h2>Points to Watch in Welded Joints</h2>
<ul>
<li>Size welds by calculation (see <a href="kaynak-dikisi-mukavemet-hesabi.html">weld strength calculation</a>).</li>
<li>Assess the FAT class of details under fluctuating load (see <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">fatigue guide</a>).</li>
<li>Provide vent holes in closed cavities of parts to be galvanized.</li>
</ul>
<h2>Five Questions for the Decision</h2>
<ol>
<li>Can the part be transported and coated in one piece?</li>
<li>Will it need dismantling during its service life?</li>
<li>Is the joint under fluctuating load?</li>
<li>Is there a tightness or hygiene requirement?</li>
<li>Do site conditions allow weld quality to be controlled?</li>
</ol>
<div class="callout"><p><strong>At ArmaWeld:</strong> we fabricate welded sub-assemblies in our workshop and verify hole and connection plate positions for bolted site joints by measurement after welding. At quotation we share module-splitting suggestions based on transport and coating limits. <a href="../kaynakli-imalat.html">Our welded fabrication service →</a></p></div>
`,
    faq: [
      ['Is a welded or bolted connection stronger?', 'Both carry the required load when designed correctly. Welding gives a stiffer, lighter joint; bolting offers dismantling and easier site assembly.'],
      ['Which is better for fatigue?', 'Preloaded slip-resistant bolted joints often have a higher fatigue class. In welded details, the weld toe and root are the critical points.'],
      ['How are galvanized parts joined?', 'Usually with bolts. Site welding damages the zinc coating and needs repair.'],
      ['Why is shop welding with site bolting so common?', 'Welding is better and cheaper in a controlled shop; bolted site joints give fast, repeatable assembly.']
    ],
    cta_h3: 'Let us make the connection decision together',
    cta_p: 'Send your drawing; we will compare welded and bolted options for cost and assembly and prepare a quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Geschweißt oder geschraubt? Ein technischer Leitfaden zur Wahl der Verbindung',
    meta: 'Schweiß- und Schraubverbindungen im Vergleich: Tragfähigkeit, Ermüdung, Kosten, Toleranzen, Transport, Verzinkung, Demontage und Baustellenmontage. Werkstatt schweißen, Baustelle schrauben, und eine Entscheidungsliste.',
    og: 'Geschweißt oder geschraubt?',
    tag: 'Konstruktion · Entscheidung',
    h1: 'Geschweißt oder geschraubt? Ein technischer Leitfaden zur Wahl der Verbindung',
    crumb: 'Geschweißt oder geschraubt',
    read: '6 Min. Lesezeit',
    body: `
<p>Bei der Konstruktion eines Stahlteils kann die Frage „geschweißt oder geschraubt?" Kosten und Lebensdauer stärker beeinflussen als das Nahtmaß. Die richtige Antwort lautet oft „beides": in der Werkstatt schweißen, auf der Baustelle schrauben. Dieser Beitrag vergleicht beide Verfahren technisch und wirtschaftlich.</p>
<h2>Vergleichstabelle</h2>
<table class="data-table"><thead><tr><th>Kriterium</th><th>Geschweißt</th><th>Geschraubt</th></tr></thead><tbody>
<tr><td>Steifigkeit</td><td>Hoch, durchgehende Verbindung</td><td>Je nach Art; hoch bei vorgespannten Verbindungen</td></tr>
<tr><td>Gewicht</td><td>Leichter; keine Laschen oder Flansche</td><td>Anschlussbleche und Schrauben erhöhen das Gewicht</td></tr>
<tr><td>Ermüdung</td><td>Nahtübergang und Wurzel kritisch</td><td>Vorgespannte gleitfeste Verbindungen meist günstiger</td></tr>
<tr><td>Demontage</td><td>Nicht möglich</td><td>Möglich; Wartung, Austausch und Transport einfacher</td></tr>
<tr><td>Toleranz</td><td>Beim Zusammenbau anpassbar</td><td>Lochlagen müssen genau sein</td></tr>
<tr><td>Baustellenarbeit</td><td>Qualifizierte Schweißer, Witterung, Prüfung nötig</td><td>Schnell; Drehmoment- oder Vorspannkontrolle genügt</td></tr>
<tr><td>Korrosionsschutz</td><td>Baustellenschweißen beschädigt die Beschichtung</td><td>Verzinkte Teile werden ohne Schaden verbunden</td></tr>
<tr><td>Werkstattkosten</td><td>Keine Bohrungen oder Anschlussbleche</td><td>Bohrungen, Bleche, Schrauben und Arbeit kommen hinzu</td></tr>
</tbody></table>
<h2>Wann Schweißen vorne liegt</h2>
<ul>
<li>Dichte Behälter, Silos, Bunker und Rohrverbindungen.</li>
<li>Maschinengestelle mit hoher Steifigkeit und genauer Geometrie.</li>
<li>Fahrzeugaufbauten und Rahmen, bei denen das Gewicht zählt.</li>
<li>Verbindungen mit durchgehendem Kraftfluss im Querschnitt.</li>
</ul>
<h2>Wann Schrauben vorne liegt</h2>
<ul>
<li>Aufteilung von Konstruktionen, die Transportmaße überschreiten, in Module.</li>
<li>Teile, die bei Wartung demontiert oder getauscht werden.</li>
<li>Projekte, bei denen Baustellenschweißen teuer, riskant oder schwer zu prüfen ist.</li>
<li>Teile, die nach dem Verzinken oder Lackieren verbunden werden.</li>
<li>Teilung von Bauteilen, die größer sind als das Zinkbad.</li>
</ul>
<h2>Hybridansatz: Werkstatt schweißen, Baustelle schrauben</h2>
<p>Im Stahlbau ist es am häufigsten und meist am wirtschaftlichsten, Baugruppen in der Werkstatt zu schweißen und auf der Baustelle zu verschrauben. In der Werkstatt wird kontrolliert, in Wannenlage und mit Prüfung geschweißt; die Baustellenverbindung wird schnell und reproduzierbar. Kritisch ist, dass Anschlussbleche trotz Schweißverzug an der richtigen Stelle bleiben. Richtige Schweißfolge, Vorrichtungen und bei Bedarf Bohren nach dem Schweißen senken dieses Risiko.</p>
<h2>Worauf bei Schraubverbindungen zu achten ist</h2>
<ul>
<li><strong>Lochspiel:</strong> Nach EN 1090-2 beträgt das Nennlochspiel 1 mm für M12-M14, 2 mm für M16-M24 und 3 mm ab M27.</li>
<li><strong>Vorgespannte Verbindungen:</strong> Gleitfeste und dynamisch belastete Verbindungen verwenden Garnituren nach EN 14399 und ein festgelegtes Anziehverfahren; die Vorbereitung der Reibflächen ist anzugeben.</li>
<li><strong>Lochlagetoleranz:</strong> Vor dem Schweißen gebohrte Löcher können durch Verzug wandern; kritische Bohrungen sollten nach dem Schweißen erwogen werden.</li>
</ul>
<h2>Worauf bei Schweißverbindungen zu achten ist</h2>
<ul>
<li>Nahtmaß rechnerisch festlegen (siehe <a href="kaynak-dikisi-mukavemet-hesabi.html">Schweißnahtberechnung</a>).</li>
<li>Bei wechselnder Last die FAT-Klasse des Details bewerten (siehe <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">Leitfaden zur Ermüdung</a>).</li>
<li>Bei zu verzinkenden Teilen geschlossene Hohlräume mit Entlüftungsbohrungen versehen.</li>
</ul>
<h2>Fünf Fragen für die Entscheidung</h2>
<ol>
<li>Lässt sich das Teil in einem Stück transportieren und beschichten?</li>
<li>Muss es während der Nutzung demontiert werden?</li>
<li>Steht die Verbindung unter wechselnder Last?</li>
<li>Gibt es Dichtheits- oder Hygieneanforderungen?</li>
<li>Erlauben die Baustellenbedingungen eine kontrollierte Schweißqualität?</li>
</ol>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Wir fertigen geschweißte Baugruppen in unserer Werkstatt und prüfen Bohrungs- und Anschlussblechlagen für verschraubte Baustellenstöße nach dem Schweißen durch Messung. Vorschläge zur Modulaufteilung nach Transport- und Beschichtungsgrenzen erhalten Sie mit dem Angebot. <a href="../kaynakli-imalat.html">Unsere Schweißfertigung →</a></p></div>
`,
    faq: [
      ['Ist eine Schweiß- oder Schraubverbindung fester?', 'Richtig bemessen tragen beide die erforderliche Last. Schweißen ergibt eine steifere, leichtere Verbindung; Schrauben bietet Demontage und einfachere Baustellenmontage.'],
      ['Was ist bei Ermüdung besser?', 'Vorgespannte gleitfeste Schraubverbindungen haben oft eine höhere Ermüdungsklasse. Bei Schweißdetails sind Nahtübergang und Wurzel kritisch.'],
      ['Wie werden verzinkte Teile verbunden?', 'Meist geschraubt. Baustellenschweißen beschädigt die Zinkschicht und erfordert Ausbesserung.'],
      ['Warum ist „Werkstatt schweißen, Baustelle schrauben" so verbreitet?', 'In der Werkstatt wird besser und günstiger geschweißt; geschraubte Baustellenstöße ermöglichen schnelle, reproduzierbare Montage.']
    ],
    cta_h3: 'Treffen wir die Verbindungsentscheidung gemeinsam',
    cta_p: 'Senden Sie Ihre Zeichnung; wir vergleichen geschweißte und geschraubte Varianten nach Kosten und Montage und erstellen ein Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: '¿Soldada o atornillada? Guía técnica para elegir la unión',
    meta: 'Uniones soldadas frente a atornilladas: resistencia, fatiga, coste, tolerancias, transporte, galvanizado, desmontaje y montaje en obra. El enfoque soldar en taller y atornillar en obra, y una lista de decisión.',
    og: '¿Soldada o atornillada?',
    tag: 'Diseño · Decisión',
    h1: '¿Soldada o atornillada? Guía técnica para elegir la unión',
    crumb: 'Soldada o atornillada',
    read: '6 min de lectura',
    body: `
<p>Al diseñar una pieza de acero, la pregunta "¿soldada o atornillada?" puede influir en el coste y la vida útil más que el propio tamaño de la soldadura. La respuesta correcta suele ser "ambas": soldar en taller y atornillar en obra. Este artículo compara los dos métodos desde el punto de vista técnico y comercial.</p>
<h2>Tabla comparativa</h2>
<table class="data-table"><thead><tr><th>Criterio</th><th>Soldada</th><th>Atornillada</th></tr></thead><tbody>
<tr><td>Rigidez</td><td>Alta, unión continua</td><td>Según el tipo; alta con uniones pretensadas</td></tr>
<tr><td>Peso</td><td>Menor; sin cubrejuntas ni bridas</td><td>Placas y tornillos añaden peso</td></tr>
<tr><td>Fatiga</td><td>Pie y raíz del cordón críticos</td><td>Las uniones pretensadas resistentes al deslizamiento suelen ser mejores</td></tr>
<tr><td>Desmontaje</td><td>No posible</td><td>Posible; facilita mantenimiento, sustitución y transporte</td></tr>
<tr><td>Tolerancia</td><td>Ajustable en el montaje</td><td>La posición de taladros debe ser precisa</td></tr>
<tr><td>Trabajo en obra</td><td>Soldadores cualificados, clima e inspección</td><td>Rápido; basta control de par o pretensado</td></tr>
<tr><td>Protección anticorrosiva</td><td>La soldadura en obra daña el recubrimiento</td><td>Las piezas galvanizadas se unen sin dañarlo</td></tr>
<tr><td>Coste en taller</td><td>Sin taladros ni placas de unión</td><td>Se añaden taladros, placas, tornillos y mano de obra</td></tr>
</tbody></table>
<h2>Cuándo gana la soldadura</h2>
<ul>
<li>Depósitos, silos, tolvas y uniones de tubería que deben ser estancos.</li>
<li>Bastidores de máquina con gran rigidez y geometría precisa.</li>
<li>Carrocerías y bastidores de vehículo donde importa el peso.</li>
<li>Uniones donde la fuerza debe fluir de forma continua por la sección.</li>
</ul>
<h2>Cuándo gana el atornillado</h2>
<ul>
<li>Dividir en módulos estructuras que superan las dimensiones de transporte.</li>
<li>Piezas que se desmontarán o sustituirán en mantenimiento.</li>
<li>Proyectos donde la soldadura en obra es cara, arriesgada o difícil de controlar.</li>
<li>Piezas que se unen después de galvanizar o pintar.</li>
<li>Dividir piezas mayores que la cuba de galvanizado.</li>
</ul>
<h2>Enfoque híbrido: soldar en taller, atornillar en obra</h2>
<p>En estructuras de acero, la solución más común y normalmente más económica es fabricar subconjuntos soldados en taller y unirlos en obra con tornillos. La soldadura de taller se hace en ambiente controlado, en posición plana y con inspección; la unión en obra resulta rápida y repetible. Lo crítico es que las placas de unión mantengan su posición pese a la distorsión de soldadura. Una secuencia correcta, utillajes y, si hace falta, taladrar después de soldar reducen ese riesgo.</p>
<h2>Puntos a vigilar en uniones atornilladas</h2>
<ul>
<li><strong>Holgura de taladro:</strong> según la EN 1090-2, la holgura normal es 1 mm para M12-M14, 2 mm para M16-M24 y 3 mm desde M27.</li>
<li><strong>Uniones pretensadas:</strong> las resistentes al deslizamiento y con carga dinámica usan conjuntos EN 14399 y un método de apriete definido; también debe indicarse la preparación de superficies de contacto.</li>
<li><strong>Tolerancia de posición:</strong> los taladros hechos antes de soldar pueden desplazarse por la distorsión; conviene valorar taladrar los críticos después de soldar.</li>
</ul>
<h2>Puntos a vigilar en uniones soldadas</h2>
<ul>
<li>Dimensionar la soldadura por cálculo (ver <a href="kaynak-dikisi-mukavemet-hesabi.html">cálculo de resistencia</a>).</li>
<li>Con cargas variables, evaluar la clase FAT del detalle (ver <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">guía de fatiga</a>).</li>
<li>En piezas a galvanizar, prever orificios de venteo en cavidades cerradas.</li>
</ul>
<h2>Cinco preguntas para decidir</h2>
<ol>
<li>¿Puede transportarse y recubrirse la pieza en una sola unidad?</li>
<li>¿Habrá que desmontarla durante su vida útil?</li>
<li>¿La unión trabaja con cargas variables?</li>
<li>¿Hay requisitos de estanqueidad o higiene?</li>
<li>¿Las condiciones de obra permiten controlar la calidad de soldadura?</li>
</ol>
<div class="callout"><p><strong>En ArmaWeld:</strong> fabricamos subconjuntos soldados en nuestro taller y verificamos con medición, después de soldar, la posición de taladros y placas para las uniones atornilladas en obra. En la oferta compartimos propuestas de división en módulos según límites de transporte y recubrimiento. <a href="../kaynakli-imalat.html">Nuestro servicio de fabricación soldada →</a></p></div>
`,
    faq: [
      ['¿Es más resistente una unión soldada o atornillada?', 'Bien diseñadas, ambas soportan la carga requerida. La soldadura da una unión más rígida y ligera; el atornillado permite desmontar y facilita el montaje en obra.'],
      ['¿Cuál es mejor a fatiga?', 'Las uniones atornilladas pretensadas resistentes al deslizamiento suelen tener una clase de fatiga mayor. En detalles soldados, el pie y la raíz son los puntos críticos.'],
      ['¿Cómo se unen las piezas galvanizadas?', 'Normalmente con tornillos. La soldadura en obra daña el zinc y exige reparación.'],
      ['¿Por qué es tan habitual soldar en taller y atornillar en obra?', 'En taller la soldadura es mejor y más barata; las uniones atornilladas en obra permiten un montaje rápido y repetible.']
    ],
    cta_h3: 'Decidamos juntos el tipo de unión',
    cta_p: 'Envíenos su plano; comparamos opciones soldadas y atornilladas por coste y montaje y preparamos la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Soudé ou boulonné ? Guide technique pour choisir l’assemblage',
    meta: 'Assemblages soudés et boulonnés comparés : résistance, fatigue, coût, tolérances, transport, galvanisation, démontage et montage sur site. L’approche soudage en atelier et boulonnage sur chantier, et une liste de décision.',
    og: 'Soudé ou boulonné ?',
    tag: 'Conception · Décision',
    h1: 'Soudé ou boulonné ? Guide technique pour choisir l’assemblage',
    crumb: 'Soudé ou boulonné',
    read: '6 min de lecture',
    body: `
<p>Lors de la conception d’une pièce en acier, la question « soudé ou boulonné ? » peut peser davantage sur le coût et la durée de vie que la taille du cordon. La bonne réponse est souvent « les deux » : souder en atelier, boulonner sur chantier. Cet article compare les deux méthodes sur les plans technique et économique.</p>
<h2>Tableau comparatif</h2>
<table class="data-table"><thead><tr><th>Critère</th><th>Soudé</th><th>Boulonné</th></tr></thead><tbody>
<tr><td>Rigidité</td><td>Élevée, liaison continue</td><td>Selon le type ; élevée en assemblage précontraint</td></tr>
<tr><td>Poids</td><td>Plus léger ; pas d’éclisses ni de brides</td><td>Platines et boulons ajoutent du poids</td></tr>
<tr><td>Fatigue</td><td>Pied et racine du cordon critiques</td><td>Assemblages précontraints résistants au glissement généralement meilleurs</td></tr>
<tr><td>Démontage</td><td>Impossible</td><td>Possible ; maintenance, remplacement et transport facilités</td></tr>
<tr><td>Tolérance</td><td>Ajustable à l’assemblage</td><td>Positions de trous précises nécessaires</td></tr>
<tr><td>Travail sur site</td><td>Soudeurs qualifiés, météo, contrôles</td><td>Rapide ; contrôle du couple ou de la précontrainte</td></tr>
<tr><td>Protection anticorrosion</td><td>Le soudage sur site détériore le revêtement</td><td>Les pièces galvanisées s’assemblent sans dommage</td></tr>
<tr><td>Coût atelier</td><td>Pas de perçages ni de platines</td><td>Perçages, platines, boulons et main-d’œuvre en plus</td></tr>
</tbody></table>
<h2>Quand le soudage l’emporte</h2>
<ul>
<li>Réservoirs, silos, trémies et raccords de tuyauterie étanches.</li>
<li>Bâtis de machine exigeant rigidité et géométrie précise.</li>
<li>Carrosseries et châssis de véhicules où le poids compte.</li>
<li>Assemblages où l’effort doit transiter de façon continue dans la section.</li>
</ul>
<h2>Quand le boulonnage l’emporte</h2>
<ul>
<li>Découpage en modules de structures dépassant les gabarits de transport.</li>
<li>Pièces démontées ou remplacées lors de la maintenance.</li>
<li>Projets où le soudage sur site est coûteux, risqué ou difficile à contrôler.</li>
<li>Pièces assemblées après galvanisation ou peinture.</li>
<li>Découpage de pièces plus grandes que le bain de galvanisation.</li>
</ul>
<h2>Approche hybride : souder en atelier, boulonner sur chantier</h2>
<p>En charpente métallique, la solution la plus courante et généralement la plus économique consiste à fabriquer des sous-ensembles soudés en atelier et à les assembler par boulonnage sur chantier. Le soudage en atelier se fait en environnement maîtrisé, à plat et avec contrôle ; l’assemblage sur site devient rapide et reproductible. Le point critique est de maintenir les platines en position malgré les déformations de soudage. Une bonne séquence, des gabarits et, si besoin, un perçage après soudage réduisent ce risque.</p>
<h2>Points d’attention en boulonnage</h2>
<ul>
<li><strong>Jeu des trous :</strong> selon l’EN 1090-2, le jeu nominal normal est de 1 mm pour M12-M14, 2 mm pour M16-M24 et 3 mm à partir de M27.</li>
<li><strong>Assemblages précontraints :</strong> les assemblages résistants au glissement et sous charges dynamiques utilisent des boulons EN 14399 et une méthode de serrage définie ; la préparation des surfaces de contact doit être précisée.</li>
<li><strong>Tolérance de position :</strong> des trous percés avant soudage peuvent se décaler par déformation ; envisager de percer les trous critiques après soudage.</li>
</ul>
<h2>Points d’attention en soudage</h2>
<ul>
<li>Dimensionner les soudures par le calcul (voir <a href="kaynak-dikisi-mukavemet-hesabi.html">calcul de résistance</a>).</li>
<li>Sous charges variables, évaluer la classe FAT du détail (voir <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">guide de la fatigue</a>).</li>
<li>Prévoir des trous d’évent dans les cavités fermées des pièces à galvaniser.</li>
</ul>
<h2>Cinq questions pour décider</h2>
<ol>
<li>La pièce peut-elle être transportée et revêtue d’un seul tenant ?</li>
<li>Faudra-t-il la démonter pendant sa durée de vie ?</li>
<li>L’assemblage est-il soumis à des charges variables ?</li>
<li>Y a-t-il une exigence d’étanchéité ou d’hygiène ?</li>
<li>Les conditions de chantier permettent-elles de maîtriser la qualité de soudage ?</li>
</ol>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous fabriquons les sous-ensembles soudés dans notre atelier et vérifions par mesure, après soudage, la position des trous et platines destinés aux assemblages boulonnés sur site. Avec l’offre, nous proposons un découpage en modules selon les limites de transport et de revêtement. <a href="../kaynakli-imalat.html">Notre prestation de fabrication soudée →</a></p></div>
`,
    faq: [
      ['Un assemblage soudé est-il plus résistant qu’un assemblage boulonné ?', 'Bien conçus, les deux reprennent la charge requise. Le soudage donne une liaison plus rigide et légère ; le boulonnage permet le démontage et facilite le montage sur site.'],
      ['Lequel est meilleur en fatigue ?', 'Les assemblages boulonnés précontraints résistants au glissement ont souvent une meilleure classe de fatigue. Pour les détails soudés, pied et racine sont critiques.'],
      ['Comment assembler des pièces galvanisées ?', 'Généralement par boulonnage. Le soudage sur site détériore la couche de zinc et impose une retouche.'],
      ['Pourquoi souder en atelier et boulonner sur site est-il si courant ?', 'Le soudage est meilleur et moins cher en atelier ; l’assemblage boulonné sur site est rapide et reproductible.']
    ],
    cta_h3: 'Choisissons ensemble le type d’assemblage',
    cta_p: 'Envoyez votre plan ; nous comparons les options soudées et boulonnées en coût et montage et préparons l’offre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Saldato o bullonato? Guida tecnica alla scelta del collegamento',
    meta: 'Collegamenti saldati e bullonati a confronto: resistenza, fatica, costo, tolleranze, trasporto, zincatura, smontaggio e montaggio in cantiere. L’approccio saldare in officina e bullonare in cantiere e una checklist di decisione.',
    og: 'Saldato o bullonato?',
    tag: 'Progettazione · Decisione',
    h1: 'Saldato o bullonato? Guida tecnica alla scelta del collegamento',
    crumb: 'Saldato o bullonato',
    read: '6 min di lettura',
    body: `
<p>Nella progettazione di un pezzo in acciaio, la domanda "saldato o bullonato?" può incidere su costo e vita utile più della dimensione della saldatura. La risposta giusta spesso è "entrambi": saldare in officina, bullonare in cantiere. Questo articolo confronta i due metodi dal punto di vista tecnico ed economico.</p>
<h2>Tabella di confronto</h2>
<table class="data-table"><thead><tr><th>Criterio</th><th>Saldato</th><th>Bullonato</th></tr></thead><tbody>
<tr><td>Rigidezza</td><td>Alta, collegamento continuo</td><td>Dipende dal tipo; alta con giunti precaricati</td></tr>
<tr><td>Peso</td><td>Minore; niente coprigiunti o flange</td><td>Piastre e bulloni aggiungono peso</td></tr>
<tr><td>Fatica</td><td>Piede e radice del cordone critici</td><td>Giunti precaricati ad attrito di solito migliori</td></tr>
<tr><td>Smontaggio</td><td>Non possibile</td><td>Possibile; manutenzione, sostituzione e trasporto più semplici</td></tr>
<tr><td>Tolleranza</td><td>Regolabile in assemblaggio</td><td>Le posizioni dei fori devono essere precise</td></tr>
<tr><td>Lavoro in cantiere</td><td>Saldatori qualificati, meteo e controlli</td><td>Rapido; basta il controllo di coppia o precarico</td></tr>
<tr><td>Protezione dalla corrosione</td><td>La saldatura in cantiere danneggia il rivestimento</td><td>I pezzi zincati si collegano senza danni</td></tr>
<tr><td>Costo in officina</td><td>Nessun foro né piastra di collegamento</td><td>Si aggiungono fori, piastre, bulloni e manodopera</td></tr>
</tbody></table>
<h2>Quando vince la saldatura</h2>
<ul>
<li>Serbatoi, silos, tramogge e collegamenti di tubazioni a tenuta.</li>
<li>Telai di macchine che richiedono rigidezza e geometria precise.</li>
<li>Allestimenti e telai di veicoli in cui conta il peso.</li>
<li>Giunti in cui la forza deve fluire in modo continuo nella sezione.</li>
</ul>
<h2>Quando vince la bullonatura</h2>
<ul>
<li>Suddividere in moduli strutture che superano le dimensioni di trasporto.</li>
<li>Pezzi da smontare o sostituire in manutenzione.</li>
<li>Progetti in cui la saldatura in cantiere è costosa, rischiosa o difficile da controllare.</li>
<li>Pezzi collegati dopo zincatura o verniciatura.</li>
<li>Suddividere pezzi più grandi della vasca di zincatura.</li>
</ul>
<h2>Approccio ibrido: saldare in officina, bullonare in cantiere</h2>
<p>Nelle strutture in acciaio la soluzione più comune e di solito più economica è realizzare sottoassiemi saldati in officina e collegarli in cantiere con bulloni. In officina si salda in ambiente controllato, in piano e con controlli; il collegamento in cantiere diventa rapido e ripetibile. Il punto critico è che le piastre di collegamento restino in posizione nonostante le deformazioni da saldatura. Sequenza corretta, attrezzature e, se serve, foratura dopo la saldatura riducono questo rischio.</p>
<h2>Attenzioni nei giunti bullonati</h2>
<ul>
<li><strong>Gioco foro-bullone:</strong> secondo la EN 1090-2 il gioco nominale normale è 1 mm per M12-M14, 2 mm per M16-M24 e 3 mm da M27.</li>
<li><strong>Giunti precaricati:</strong> i giunti ad attrito e quelli a carico dinamico usano assiemi EN 14399 e un metodo di serraggio definito; va indicata anche la preparazione delle superfici di contatto.</li>
<li><strong>Tolleranza di posizione:</strong> i fori eseguiti prima della saldatura possono spostarsi per deformazione; per i fori critici valutare la foratura dopo la saldatura.</li>
</ul>
<h2>Attenzioni nei giunti saldati</h2>
<ul>
<li>Dimensionare le saldature con il calcolo (vedi <a href="kaynak-dikisi-mukavemet-hesabi.html">calcolo di resistenza</a>).</li>
<li>Con carichi variabili valutare la classe FAT del dettaglio (vedi <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">guida alla fatica</a>).</li>
<li>Nei pezzi da zincare prevedere fori di sfiato nelle cavità chiuse.</li>
</ul>
<h2>Cinque domande per decidere</h2>
<ol>
<li>Il pezzo può essere trasportato e rivestito in un unico elemento?</li>
<li>Dovrà essere smontato durante la vita utile?</li>
<li>Il giunto è soggetto a carichi variabili?</li>
<li>Ci sono requisiti di tenuta o igiene?</li>
<li>Le condizioni di cantiere consentono di controllare la qualità di saldatura?</li>
</ol>
<div class="callout"><p><strong>In ArmaWeld:</strong> realizziamo i sottoassiemi saldati nella nostra officina e verifichiamo con misure, dopo la saldatura, le posizioni di fori e piastre per i giunti bullonati in cantiere. Con l’offerta proponiamo la suddivisione in moduli in base ai limiti di trasporto e rivestimento. <a href="../kaynakli-imalat.html">Il nostro servizio di carpenteria saldata →</a></p></div>
`,
    faq: [
      ['È più resistente un collegamento saldato o bullonato?', 'Se ben progettati, entrambi portano il carico richiesto. La saldatura dà un giunto più rigido e leggero; la bullonatura consente lo smontaggio e facilita il montaggio in cantiere.'],
      ['Quale è migliore a fatica?', 'I giunti bullonati precaricati ad attrito hanno spesso una classe di fatica più alta. Nei dettagli saldati piede e radice sono i punti critici.'],
      ['Come si collegano i pezzi zincati?', 'Di solito con bulloni. La saldatura in cantiere danneggia lo zinco e richiede ripristino.'],
      ['Perché saldare in officina e bullonare in cantiere è così diffuso?', 'In officina si salda meglio e a costi minori; i giunti bullonati in cantiere consentono un montaggio rapido e ripetibile.']
    ],
    cta_h3: 'Scegliamo insieme il tipo di collegamento',
    cta_p: 'Inviateci il disegno; confrontiamo soluzioni saldate e bullonate per costo e montaggio e prepariamo l’offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Gelast of gebout? Een technische gids voor de keuze van de verbinding',
    meta: 'Gelaste en geboute verbindingen vergeleken: sterkte, vermoeiing, kosten, toleranties, transport, verzinken, demontage en montage op de bouwplaats. In de werkplaats lassen, op de bouwplaats bouten, en een beslislijst.',
    og: 'Gelast of gebout?',
    tag: 'Ontwerp · Keuze',
    h1: 'Gelast of gebout? Een technische gids voor de keuze van de verbinding',
    crumb: 'Gelast of gebout',
    read: '6 min lezen',
    body: `
<p>Bij het ontwerpen van een stalen onderdeel kan de vraag "gelast of gebout?" de kosten en levensduur meer beïnvloeden dan de lasmaat zelf. Het juiste antwoord is vaak "allebei": in de werkplaats lassen, op de bouwplaats bouten. Dit artikel vergelijkt beide methoden technisch en commercieel.</p>
<h2>Vergelijkingstabel</h2>
<table class="data-table"><thead><tr><th>Criterium</th><th>Gelast</th><th>Gebout</th></tr></thead><tbody>
<tr><td>Stijfheid</td><td>Hoog, doorlopende verbinding</td><td>Afhankelijk van type; hoog bij voorgespannen verbindingen</td></tr>
<tr><td>Gewicht</td><td>Lichter; geen stuikplaten of flenzen</td><td>Verbindingsplaten en bouten voegen gewicht toe</td></tr>
<tr><td>Vermoeiing</td><td>Lasteen en wortel kritisch</td><td>Voorgespannen glijvaste verbindingen meestal beter</td></tr>
<tr><td>Demontage</td><td>Niet mogelijk</td><td>Mogelijk; onderhoud, vervanging en transport eenvoudiger</td></tr>
<tr><td>Tolerantie</td><td>Bij samenstellen bij te stellen</td><td>Gatposities moeten nauwkeurig zijn</td></tr>
<tr><td>Werk op de bouwplaats</td><td>Gekwalificeerde lassers, weer en inspectie nodig</td><td>Snel; controle van moment of voorspanning volstaat</td></tr>
<tr><td>Corrosiebescherming</td><td>Lassen op de bouwplaats beschadigt de coating</td><td>Verzinkte delen worden zonder schade verbonden</td></tr>
<tr><td>Werkplaatskosten</td><td>Geen gaten of verbindingsplaten</td><td>Gaten, platen, bouten en arbeid komen erbij</td></tr>
</tbody></table>
<h2>Wanneer lassen wint</h2>
<ul>
<li>Tanks, silo's, bunkers en leidingverbindingen die dicht moeten zijn.</li>
<li>Machineframes met hoge stijfheid en nauwkeurige geometrie.</li>
<li>Voertuigopbouwen en chassis waar gewicht telt.</li>
<li>Verbindingen waar de kracht ononderbroken door de doorsnede moet.</li>
</ul>
<h2>Wanneer bouten wint</h2>
<ul>
<li>Constructies die transportmaten overschrijden opdelen in modules.</li>
<li>Delen die bij onderhoud worden gedemonteerd of vervangen.</li>
<li>Projecten waar lassen op de bouwplaats duur, riskant of moeilijk te controleren is.</li>
<li>Delen die na verzinken of coaten worden verbonden.</li>
<li>Delen opdelen die groter zijn dan het zinkbad.</li>
</ul>
<h2>Hybride aanpak: in de werkplaats lassen, op de bouwplaats bouten</h2>
<p>In staalconstructies is de meest voorkomende en meestal goedkoopste oplossing om subsamenstellingen in de werkplaats te lassen en op de bouwplaats te bouten. In de werkplaats wordt gecontroleerd, onder de hand en met inspectie gelast; de verbinding op de bouwplaats wordt snel en herhaalbaar. Kritisch is dat verbindingsplaten ondanks lasvervorming op hun plaats blijven. Een juiste lasvolgorde, mallen en zo nodig boren na het lassen beperken dat risico.</p>
<h2>Aandachtspunten bij boutverbindingen</h2>
<ul>
<li><strong>Gatspeling:</strong> volgens EN 1090-2 is de normale speling 1 mm voor M12-M14, 2 mm voor M16-M24 en 3 mm vanaf M27.</li>
<li><strong>Voorgespannen verbindingen:</strong> glijvaste en dynamisch belaste verbindingen gebruiken garnituren volgens EN 14399 en een vastgelegde aanhaalmethode; ook de voorbereiding van de contactvlakken moet worden vermeld.</li>
<li><strong>Positietolerantie van gaten:</strong> vóór het lassen geboorde gaten kunnen door vervorming verschuiven; overweeg kritische gaten na het lassen te boren.</li>
</ul>
<h2>Aandachtspunten bij lasverbindingen</h2>
<ul>
<li>Lasmaat berekenen (zie <a href="kaynak-dikisi-mukavemet-hesabi.html">sterkteberekening van lassen</a>).</li>
<li>Bij wisselende belasting de FAT-klasse van het detail beoordelen (zie <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">gids over vermoeiing</a>).</li>
<li>Bij te verzinken delen ontluchtingsgaten in gesloten holtes aanbrengen.</li>
</ul>
<h2>Vijf vragen voor de keuze</h2>
<ol>
<li>Kan het deel in één stuk worden vervoerd en gecoat?</li>
<li>Moet het tijdens de levensduur worden gedemonteerd?</li>
<li>Staat de verbinding onder wisselende belasting?</li>
<li>Is er een eis voor dichtheid of hygiëne?</li>
<li>Laten de omstandigheden op de bouwplaats gecontroleerde laskwaliteit toe?</li>
</ol>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> we maken gelaste subsamenstellingen in onze werkplaats en controleren na het lassen met metingen de positie van gaten en verbindingsplaten voor geboute bouwplaatsverbindingen. Bij de offerte doen we voorstellen voor moduleverdeling op basis van transport- en coatinggrenzen. <a href="../kaynakli-imalat.html">Onze lasproductie →</a></p></div>
`,
    faq: [
      ['Is een gelaste of geboute verbinding sterker?', 'Goed ontworpen dragen beide de vereiste belasting. Lassen geeft een stijvere, lichtere verbinding; bouten maakt demontage en eenvoudiger montage op de bouwplaats mogelijk.'],
      ['Wat is beter bij vermoeiing?', 'Voorgespannen glijvaste boutverbindingen hebben vaak een hogere vermoeiingsklasse. Bij gelaste details zijn lasteen en wortel kritisch.'],
      ['Hoe worden verzinkte delen verbonden?', 'Meestal met bouten. Lassen op de bouwplaats beschadigt de zinklaag en vraagt herstel.'],
      ['Waarom is "werkplaats lassen, bouwplaats bouten" zo gebruikelijk?', 'In de werkplaats wordt beter en goedkoper gelast; geboute bouwplaatsverbindingen geven snelle, herhaalbare montage.']
    ],
    cta_h3: 'Laten we samen de verbindingskeuze maken',
    cta_p: 'Stuur uw tekening; we vergelijken gelaste en geboute opties op kosten en montage en maken een offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Sveiset eller boltet? En teknisk veiledning for valg av forbindelse',
    meta: 'Sveiste og boltede forbindelser sammenlignet: fasthet, utmatting, kostnad, toleranser, transport, galvanisering, demontering og montasje på byggeplass. Sveis i verkstedet, bolt på byggeplassen, og en beslutningsliste.',
    og: 'Sveiset eller boltet?',
    tag: 'Konstruksjon · Valg',
    h1: 'Sveiset eller boltet? En teknisk veiledning for valg av forbindelse',
    crumb: 'Sveiset eller boltet',
    read: '6 min lesing',
    body: `
<p>Når man konstruerer en ståldel, kan spørsmålet «sveiset eller boltet?» påvirke kostnad og levetid mer enn selve sveisemålet. Riktig svar er ofte «begge deler»: sveis i verkstedet, bolt på byggeplassen. Denne artikkelen sammenligner de to metodene teknisk og kommersielt.</p>
<h2>Sammenligningstabell</h2>
<table class="data-table"><thead><tr><th>Kriterium</th><th>Sveiset</th><th>Boltet</th></tr></thead><tbody>
<tr><td>Stivhet</td><td>Høy, kontinuerlig forbindelse</td><td>Avhenger av type; høy ved forspente forbindelser</td></tr>
<tr><td>Vekt</td><td>Lettere; ingen skjøteplater eller flenser</td><td>Forbindelsesplater og bolter gir ekstra vekt</td></tr>
<tr><td>Utmatting</td><td>Sveisetå og rot er kritiske</td><td>Forspente glidesikre forbindelser vanligvis bedre</td></tr>
<tr><td>Demontering</td><td>Ikke mulig</td><td>Mulig; enklere vedlikehold, utskifting og transport</td></tr>
<tr><td>Toleranse</td><td>Kan justeres ved montering</td><td>Hullposisjoner må være nøyaktige</td></tr>
<tr><td>Arbeid på byggeplass</td><td>Kvalifiserte sveisere, vær og kontroll kreves</td><td>Raskt; kontroll av tiltrekkingsmoment eller forspenning holder</td></tr>
<tr><td>Korrosjonsbeskyttelse</td><td>Sveising på stedet skader belegget</td><td>Galvaniserte deler sammenføyes uten skade</td></tr>
<tr><td>Verkstedkostnad</td><td>Ingen hull eller forbindelsesplater</td><td>Hull, plater, bolter og arbeid kommer i tillegg</td></tr>
</tbody></table>
<h2>Når sveising vinner</h2>
<ul>
<li>Tanker, siloer, beholdere og rørforbindelser som må være tette.</li>
<li>Maskinrammer med høy stivhet og nøyaktig geometri.</li>
<li>Kjøretøypåbygg og chassis der vekt betyr noe.</li>
<li>Forbindelser der kraften må gå kontinuerlig gjennom tverrsnittet.</li>
</ul>
<h2>Når bolting vinner</h2>
<ul>
<li>Dele konstruksjoner som overskrider transportmål i moduler.</li>
<li>Deler som skal demonteres eller skiftes ved vedlikehold.</li>
<li>Prosjekter der sveising på byggeplass er dyrt, risikabelt eller vanskelig å kontrollere.</li>
<li>Deler som sammenføyes etter galvanisering eller maling.</li>
<li>Dele komponenter som er større enn galvaniseringsbadet.</li>
</ul>
<h2>Hybridløsning: sveis i verkstedet, bolt på byggeplassen</h2>
<p>I stålkonstruksjoner er den vanligste og som regel mest økonomiske løsningen å sveise delmontasjer i verkstedet og bolte dem sammen på byggeplassen. Verkstedsveising skjer i kontrollerte omgivelser, i horisontal posisjon og med kontroll; byggeplassforbindelsen blir rask og repeterbar. Det kritiske er at forbindelsesplatene holder riktig posisjon til tross for sveisedeformasjon. Riktig sveiserekkefølge, fiksturer og ved behov boring etter sveising reduserer denne risikoen.</p>
<h2>Viktige punkter for boltede forbindelser</h2>
<ul>
<li><strong>Hullklaring:</strong> etter EN 1090-2 er normal klaring 1 mm for M12-M14, 2 mm for M16-M24 og 3 mm fra M27.</li>
<li><strong>Forspente forbindelser:</strong> glidesikre og dynamisk belastede forbindelser bruker boltesett etter EN 14399 og en definert tiltrekkingsmetode; forbehandling av kontaktflatene skal også angis.</li>
<li><strong>Posisjonstoleranse for hull:</strong> hull boret før sveising kan forskyves av deformasjon; vurder å bore kritiske hull etter sveising.</li>
</ul>
<h2>Viktige punkter for sveiste forbindelser</h2>
<ul>
<li>Fastsett sveisemål ved beregning (se <a href="kaynak-dikisi-mukavemet-hesabi.html">fasthetsberegning av sveis</a>).</li>
<li>Vurder detaljens FAT-klasse ved varierende last (se <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">veiledning om utmatting</a>).</li>
<li>Lag luftehull i lukkede hulrom på deler som skal galvaniseres.</li>
</ul>
<h2>Fem spørsmål før beslutningen</h2>
<ol>
<li>Kan delen transporteres og belegges i ett stykke?</li>
<li>Må den demonteres i løpet av levetiden?</li>
<li>Er forbindelsen utsatt for varierende last?</li>
<li>Finnes det krav til tetthet eller hygiene?</li>
<li>Tillater forholdene på byggeplassen kontrollert sveisekvalitet?</li>
</ol>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> vi produserer sveiste delmontasjer i vårt verksted og kontrollerer med måling etter sveising posisjonen til hull og forbindelsesplater for boltede byggeplassforbindelser. I tilbudet gir vi forslag til moduloppdeling ut fra transport- og beleggsgrenser. <a href="../kaynakli-imalat.html">Vår sveiseproduksjon →</a></p></div>
`,
    faq: [
      ['Er en sveiset eller boltet forbindelse sterkest?', 'Riktig dimensjonert tar begge den nødvendige lasten. Sveising gir en stivere og lettere forbindelse; bolting gir mulighet for demontering og enklere montasje på byggeplass.'],
      ['Hva er best med tanke på utmatting?', 'Forspente glidesikre boltforbindelser har ofte høyere utmattingsklasse. I sveiste detaljer er sveisetå og rot kritiske.'],
      ['Hvordan sammenføyes galvaniserte deler?', 'Vanligvis med bolter. Sveising på stedet skader sinkbelegget og krever utbedring.'],
      ['Hvorfor er «sveis i verkstedet, bolt på byggeplassen» så vanlig?', 'Sveising blir bedre og billigere i verkstedet; boltede byggeplassforbindelser gir rask og repeterbar montasje.']
    ],
    cta_h3: 'La oss velge forbindelsestype sammen',
    cta_p: 'Send tegningen; vi sammenligner sveiste og boltede løsninger på kostnad og montasje og lager tilbud.',
    cta_btn: 'Be om tilbud →'
  }
};
