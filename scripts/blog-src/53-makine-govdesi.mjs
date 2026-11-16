export default {
  order: 53,
  slug: 'kaynakli-makine-govdesi-imalati',
  key: 'p53_machinebase',
  date: '2026-11-16',
  keywords: 'kaynaklı makine gövdesi, makine şasesi imalatı, kaynaklı makine tabanı, döküm yerine kaynaklı gövde, makine gövdesi rijitlik, titreşim sönümleme, nervür tasarımı, makine tabanı düzlemsellik, welded machine base, geschweißtes Maschinenbett, Schweißkonstruktion statt Guss',
  related: ['kaynakli-mi-civatali-mi-birlestirme', 'kaynak-distorsiyonu', 'iso-13920-kaynakli-imalat-tolerans-tablosu', 'boyutsal-tolerans'],
  tr: {
    title: 'Kaynaklı Makine Gövdesi ve Tabanı: Dökümden Kaynaklı Konstrüksiyona Geçiş',
    meta: 'Kaynaklı makine gövdesi ve tabanı nasıl tasarlanır ve üretilir? Döküm ile kaynaklı konstrüksiyon karşılaştırması, rijitlik ve nervür tasarımı, titreşim, gerilim giderme, işleme payı, düzlemsellik, kaldırma noktaları ve imalat sırası.',
    og: 'Kaynaklı makine gövdesi',
    tag: 'Makine imalatı · Tasarım',
    h1: 'Kaynaklı Makine Gövdesi ve Tabanı: Dökümden Kaynaklı Konstrüksiyona Geçiş',
    crumb: 'Makine gövdesi',
    read: '8 dk okuma',
    body: `
<p>Takım tezgâhları, presler, pompalar, kompresörler ve özel makineler; hepsi ağır, rijit ve ölçüsel olarak kararlı bir gövde veya taban üzerinde durur. Bu gövdeler geleneksel olarak dökümden yapılır. Ancak düşük ve orta adetlerde, büyük boyutlarda ve sık değişen tasarımlarda kaynaklı çelik konstrüksiyon ciddi bir alternatiftir.</p>
<h2>Döküm mü, Kaynaklı mı?</h2>
<table>
<thead><tr><th>Ölçüt</th><th>Döküm (pik / sfero)</th><th>Kaynaklı çelik</th></tr></thead>
<tbody>
<tr><td>Model / kalıp maliyeti</td><td>Var, adet azsa pahalı</td><td>Yok</td></tr>
<tr><td>Tasarım değişikliği</td><td>Model değişikliği gerekir</td><td>Çizim revizyonuyla hızlı</td></tr>
<tr><td>Rijitlik / ağırlık</td><td>Elastisite modülü düşük, daha kalın kesit gerekir</td><td>Çeliğin elastisite modülü yüksek, aynı rijitlik daha hafif gövdeyle</td></tr>
<tr><td>Titreşim sönümleme</td><td>Pik dökümde yüksek</td><td>Daha düşük; nervür düzeni ve dolgu ile iyileştirilebilir</td></tr>
<tr><td>Boyut sınırı</td><td>Dökümhane kapasitesine bağlı</td><td>Parçalara bölünerek çok büyük gövdeler mümkün</td></tr>
<tr><td>Teslim süresi (ilk parça)</td><td>Model ve döküm süresi</td><td>Genellikle daha kısa</td></tr>
</tbody>
</table>
<p>Yüksek adetli, küçük ve sönümleme kritik gövdelerde döküm hâlâ avantajlıdır. Tek parça veya küçük seriler, büyük gövdeler ve sık revize edilen makinelerde kaynaklı konstrüksiyon genellikle daha ekonomiktir.</p>
<h2>Rijitlik İçin Tasarım</h2>
<ul>
<li><strong>Kapalı kutu kesitler:</strong> burulma rijitliği açık kesitlere göre çok daha yüksektir.</li>
<li><strong>Nervür düzeni:</strong> çapraz veya petek nervürler, ince plakalarda bile yüksek rijitlik sağlar; nervürlerin kaynakları kolay erişilebilir olmalıdır.</li>
<li><strong>Kuvvet akışı:</strong> yatak ve bağlantı noktalarından gelen yükler, kesintisiz plakalarla tabana iletilmelidir.</li>
<li><strong>Plaka kalınlığı:</strong> işlenecek yüzeylerde, işleme payı ve sehim düşünülerek yeterli kalınlık seçilmelidir.</li>
</ul>
<h2>Titreşim</h2>
<p>Kaynaklı gövdenin doğal frekansı, makinenin çalışma frekanslarından uzak olmalıdır. Rijitliği artırmak doğal frekansı yükseltir. Sönümleme gereken uygulamalarda gövde boşluklarının özel dolgu malzemeleriyle doldurulması veya nervür düzeninin değiştirilmesi gibi yöntemler tasarımcı tarafından değerlendirilebilir.</p>
<h2>Ölçüsel Kararlılık ve Gerilim Giderme</h2>
<p>Kaynak, gövdede artık gerilmeler bırakır. Gövde talaşlı işlendiğinde malzeme kaldırıldıkça bu gerilmeler yeniden dağılır ve parça işlemeden sonra şekil değiştirebilir. Bu nedenle hassas işlenecek gövdelerde işlemeden önce gerilim giderme uygulanması yaygındır:</p>
<ul>
<li><strong>Isıl gerilim giderme:</strong> fırında kontrollü ısıtma ve yavaş soğutma; en etkili yöntemdir.</li>
<li><strong>Titreşimle gerilim giderme:</strong> fırına sığmayan gövdelerde bazı uygulamalarda alternatif olarak kullanılır.</li>
</ul>
<p>Hangi yöntemin gerektiği, gövdenin hassasiyetine ve tasarımcının gerekliliğine göre çizimde belirtilmelidir.</p>
<h2>İşleme Payı ve Referanslar</h2>
<ul>
<li>İşlenecek yüzeylerde, çarpılma da dikkate alınarak yeterli işleme payı bırakılmalıdır.</li>
<li>Kaynak sonrası işleme için referans yüzeyleri veya noktaları önceden tanımlanmalıdır.</li>
<li>İşlenmiş yüzey altındaki kaynaklar, işlemeden sonra gözenek veya ergime hatası açığa çıkmayacak şekilde planlanmalıdır.</li>
</ul>
<p>Kaynak sonrası işlemenin planlanması için ayrı yazımıza bakabilirsiniz (bkz. <a href="kaynak-sonrasi-talasli-isleme.html">kaynak sonrası talaşlı işleme</a>).</p>
<h2>Kaldırma, Taşıma ve Montaj</h2>
<ul>
<li>Kaldırma noktaları (mapalar, delikler) yüke göre boyutlandırılmalı ve çizimde gösterilmelidir.</li>
<li>Seviye ayarı için ayak pedleri veya ayar cıvatası yuvaları,</li>
<li>Kablo, hidrolik ve yağ geçişleri için açıklıklar,</li>
<li>Çok büyük gövdelerde nakliye ölçüsüne göre bölünme ve cıvatalı birleşim noktaları (bkz. <a href="kaynakli-mi-civatali-mi-birlestirme.html">kaynaklı mı cıvatalı mı</a>).</li>
</ul>
<h2>Tipik İmalat Sırası</h2>
<ol>
<li>Kesim ve büküm,</li>
<li>Fikstürde montaj ve puntalama,</li>
<li>Dengeli kaynak sırası ile kaynak,</li>
<li>Gözle muayene ve gerekli NDT,</li>
<li>Gerilim giderme (gerekiyorsa),</li>
<li>Kumlama ve astar,</li>
<li>Talaşlı işleme,</li>
<li>Ölçü kontrolü ve son boya.</li>
</ol>
<h2>Çizimde Bulunması Gerekenler</h2>
<ul>
<li>Genel kaynak toleransı (ISO 13920 sınıfı) ve fonksiyonel ölçüler (bkz. <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>),</li>
<li>İşlenmiş yüzeylerin düzlemselliği ve yüzey pürüzlülüğü,</li>
<li>Gerilim giderme gerekliliği,</li>
<li>Kaynak ölçüleri ve kalite seviyesi,</li>
<li>Boya sistemi ve işlenmiş yüzeylerin korunması.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Makine gövdeleri, tabanları ve şasileri kaynaklıyor, dengeli kaynak sırası ve fikstürle çarpılmayı kontrol ediyoruz. Gerilim giderme, talaşlı işleme ve boyayı çözüm ortaklarımızla koordine ederek parçayı işlenmiş ve ölçü raporuyla teslim ediyoruz. <a href="../makine-sasesi-imalati.html">Makine şasisi imalatı →</a></p></div>
`,
    faq: [
      ['Kaynaklı gövde dökümden daha mı ucuzdur?', 'Tek parça ve küçük serilerde, model maliyeti olmadığı için genellikle evet. Yüksek adetli küçük gövdelerde döküm daha ekonomik olabilir.'],
      ['Kaynaklı gövde titreşimi döküm kadar sönümler mi?', 'Pik döküm kadar değil; ancak rijitlik, nervür düzeni ve dolgu gibi yöntemlerle titreşim davranışı iyileştirilebilir.'],
      ['Gerilim giderme neden gerekir?', 'Kaynağın bıraktığı artık gerilmeler talaşlı işlemeden sonra parçanın şekil değiştirmesine yol açabilir; gerilim giderme ölçüsel kararlılığı artırır.'],
      ['Çok büyük gövdeler nasıl taşınır?', 'Nakliye ölçüsüne göre parçalara bölünür ve sahada cıvatalı birleştirilecek şekilde tasarlanır.']
    ],
    cta_h3: 'Makine gövdeniz için kaynaklı çözüm',
    cta_p: 'Gövde çizimlerinizi veya döküm modelinizi gönderin; kaynaklı alternatifi birlikte değerlendirelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Welded Machine Bases and Frames: Moving from Castings to Fabrications',
    meta: 'How to design and fabricate welded machine bases and frames: castings versus weldments, stiffness and rib design, vibration, stress relief, machining allowance, flatness, lifting points and fabrication sequence.',
    og: 'Welded machine bases',
    tag: 'Machine building · Design',
    h1: 'Welded Machine Bases and Frames: Moving from Castings to Fabrications',
    crumb: 'Machine bases',
    read: '8 min read',
    body: `
<p>Machine tools, presses, pumps, compressors and special machines all stand on a heavy, stiff and dimensionally stable base or frame. These have traditionally been castings. But for low and medium volumes, large sizes and frequently changing designs, a welded steel fabrication is a serious alternative.</p>
<h2>Casting or Weldment?</h2>
<table>
<thead><tr><th>Criterion</th><th>Casting (grey / ductile iron)</th><th>Welded steel</th></tr></thead>
<tbody>
<tr><td>Pattern / tooling cost</td><td>Yes, expensive for low volumes</td><td>None</td></tr>
<tr><td>Design changes</td><td>Pattern must change</td><td>Fast, by drawing revision</td></tr>
<tr><td>Stiffness / weight</td><td>Lower elastic modulus, thicker sections needed</td><td>Higher modulus of steel, same stiffness with a lighter frame</td></tr>
<tr><td>Vibration damping</td><td>High in grey iron</td><td>Lower; can be improved with rib layout and filling</td></tr>
<tr><td>Size limit</td><td>Depends on foundry capacity</td><td>Very large frames possible by splitting into sections</td></tr>
<tr><td>Lead time (first part)</td><td>Pattern and casting time</td><td>Usually shorter</td></tr>
</tbody>
</table>
<p>For high-volume, small, damping-critical bases, casting still has the edge. For one-offs or small series, large frames and frequently revised machines, a weldment is usually more economical.</p>
<h2>Designing for Stiffness</h2>
<ul>
<li><strong>Closed box sections:</strong> far higher torsional stiffness than open sections.</li>
<li><strong>Rib layout:</strong> diagonal or honeycomb ribs give high stiffness even with thin plates; rib welds must be easy to reach.</li>
<li><strong>Load path:</strong> loads from bearings and mounting points should be carried to the base through continuous plates.</li>
<li><strong>Plate thickness:</strong> under machined faces, choose enough thickness for machining allowance and deflection.</li>
</ul>
<h2>Vibration</h2>
<p>The frame’s natural frequency should be well away from the machine’s operating frequencies. Increasing stiffness raises it. Where damping is needed, the designer may consider filling cavities with special materials or changing the rib layout.</p>
<h2>Dimensional Stability and Stress Relief</h2>
<p>Welding leaves residual stresses. As material is removed in machining these stresses redistribute and the part can change shape after machining. So stress relief before machining is common for precision frames:</p>
<ul>
<li><strong>Thermal stress relief:</strong> controlled heating in a furnace and slow cooling; the most effective method.</li>
<li><strong>Vibratory stress relief:</strong> used as an alternative in some applications for frames too big for a furnace.</li>
</ul>
<p>Which method is required should be stated on the drawing, based on the precision needed and the designer’s requirement.</p>
<h2>Machining Allowance and Datums</h2>
<ul>
<li>Leave enough machining allowance on machined faces, taking distortion into account.</li>
<li>Define datum faces or points for post-weld machining in advance.</li>
<li>Plan welds under machined faces so machining does not expose porosity or lack of fusion.</li>
</ul>
<p>See our separate article on planning <a href="kaynak-sonrasi-talasli-isleme.html">machining after welding</a>.</p>
<h2>Lifting, Transport and Installation</h2>
<ul>
<li>Lifting points (lugs, holes) sized for the load and shown on the drawing,</li>
<li>Levelling pads or seats for levelling screws,</li>
<li>Openings for cables, hydraulics and lubrication,</li>
<li>For very large frames, splitting to transport size with bolted joints (see <a href="kaynakli-mi-civatali-mi-birlestirme.html">welded or bolted</a>).</li>
</ul>
<h2>Typical Fabrication Sequence</h2>
<ol>
<li>Cutting and bending,</li>
<li>Fit-up and tacking in a fixture,</li>
<li>Welding with a balanced sequence,</li>
<li>Visual inspection and required NDT,</li>
<li>Stress relief (if required),</li>
<li>Blasting and primer,</li>
<li>Machining,</li>
<li>Dimensional check and topcoat.</li>
</ol>
<h2>What the Drawing Should Contain</h2>
<ul>
<li>General welding tolerance (ISO 13920 class) and functional dimensions (see <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>),</li>
<li>Flatness and surface roughness of machined faces,</li>
<li>Stress relief requirement,</li>
<li>Weld sizes and quality level,</li>
<li>Paint system and protection of machined faces.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> we weld machine bases, beds and frames, controlling distortion with balanced weld sequences and fixtures. We coordinate stress relief, machining and painting with our partners and deliver the part machined, with a dimensional report. <a href="../makine-sasesi-imalati.html">Machine frame fabrication →</a></p></div>
`,
    faq: [
      ['Is a welded base cheaper than a casting?', 'For one-offs and small series usually yes, as there is no pattern cost. For high-volume small bases casting may be more economical.'],
      ['Does a welded frame damp vibration as well as a casting?', 'Not as well as grey iron, but vibration behaviour can be improved through stiffness, rib layout and filling.'],
      ['Why is stress relief needed?', 'Residual welding stresses can make the part change shape after machining; stress relief improves dimensional stability.'],
      ['How are very large frames transported?', 'They are split into sections to transport size and designed for bolting together on site.']
    ],
    cta_h3: 'A welded solution for your machine base',
    cta_p: 'Send your frame drawings or casting model; let’s assess the welded alternative together.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Geschweißte Maschinenbetten und -gestelle: vom Guss zur Schweißkonstruktion',
    meta: 'Wie werden geschweißte Maschinenbetten und -gestelle konstruiert und gefertigt? Guss vs. Schweißkonstruktion, Steifigkeit und Rippengestaltung, Schwingungen, Spannungsarmglühen, Bearbeitungszugabe, Ebenheit, Anschlagpunkte und Fertigungsfolge.',
    og: 'Geschweißte Maschinenbetten',
    tag: 'Maschinenbau · Konstruktion',
    h1: 'Geschweißte Maschinenbetten und -gestelle: vom Guss zur Schweißkonstruktion',
    crumb: 'Maschinenbetten',
    read: '8 Min. Lesezeit',
    body: `
<p>Werkzeugmaschinen, Pressen, Pumpen, Kompressoren und Sondermaschinen stehen auf einem schweren, steifen und maßstabilen Bett oder Gestell. Traditionell ist das ein Gussteil. Bei kleinen und mittleren Stückzahlen, großen Abmessungen und häufigen Konstruktionsänderungen ist eine Schweißkonstruktion aus Stahl jedoch eine ernsthafte Alternative.</p>
<h2>Guss oder Schweißkonstruktion?</h2>
<table>
<thead><tr><th>Kriterium</th><th>Guss (Grauguss / Sphäroguss)</th><th>Stahlschweißkonstruktion</th></tr></thead>
<tbody>
<tr><td>Modellkosten</td><td>Ja, bei kleinen Stückzahlen teuer</td><td>Keine</td></tr>
<tr><td>Konstruktionsänderung</td><td>Modelländerung nötig</td><td>Schnell per Zeichnungsänderung</td></tr>
<tr><td>Steifigkeit / Gewicht</td><td>Niedrigerer E-Modul, dickere Wände nötig</td><td>Höherer E-Modul, gleiche Steifigkeit bei geringerem Gewicht</td></tr>
<tr><td>Schwingungsdämpfung</td><td>Hoch bei Grauguss</td><td>Geringer; durch Rippenanordnung und Füllung verbesserbar</td></tr>
<tr><td>Größengrenze</td><td>Abhängig von der Gießerei</td><td>Sehr große Gestelle durch Teilung möglich</td></tr>
<tr><td>Lieferzeit (Erstteil)</td><td>Modell- und Gießzeit</td><td>Meist kürzer</td></tr>
</tbody>
</table>
<p>Bei hohen Stückzahlen, kleinen und dämpfungskritischen Betten bleibt Guss im Vorteil. Bei Einzelstücken, Kleinserien, großen Gestellen und häufig geänderten Maschinen ist die Schweißkonstruktion meist wirtschaftlicher.</p>
<h2>Konstruktion für Steifigkeit</h2>
<ul>
<li><strong>Geschlossene Kastenprofile:</strong> deutlich höhere Torsionssteifigkeit als offene Profile.</li>
<li><strong>Rippenanordnung:</strong> Diagonal- oder Wabenrippen ergeben auch bei dünnen Blechen hohe Steifigkeit; Rippennähte müssen gut zugänglich sein.</li>
<li><strong>Kraftfluss:</strong> Lasten aus Lagern und Anschlusspunkten über durchgehende Bleche in den Fuß leiten.</li>
<li><strong>Blechdicke:</strong> unter Bearbeitungsflächen ausreichend dick für Bearbeitungszugabe und Durchbiegung wählen.</li>
</ul>
<h2>Schwingungen</h2>
<p>Die Eigenfrequenz des Gestells sollte deutlich von den Betriebsfrequenzen der Maschine entfernt liegen. Höhere Steifigkeit hebt sie an. Wo Dämpfung gefragt ist, kann der Konstrukteur das Füllen von Hohlräumen mit Spezialmaterialien oder eine geänderte Rippenanordnung prüfen.</p>
<h2>Maßstabilität und Spannungsarmglühen</h2>
<p>Schweißen hinterlässt Eigenspannungen. Beim Zerspanen lagern sie sich um, und das Teil kann sich nach der Bearbeitung verformen. Bei Präzisionsgestellen wird daher vor der Bearbeitung häufig spannungsarm behandelt:</p>
<ul>
<li><strong>Spannungsarmglühen:</strong> kontrolliertes Erwärmen im Ofen und langsames Abkühlen; die wirksamste Methode.</li>
<li><strong>Vibrationsentspannen:</strong> in manchen Anwendungen Alternative für Gestelle, die nicht in einen Ofen passen.</li>
</ul>
<p>Welche Methode gefordert ist, sollte je nach Präzision und Vorgabe des Konstrukteurs in der Zeichnung stehen.</p>
<h2>Bearbeitungszugabe und Bezüge</h2>
<ul>
<li>An Bearbeitungsflächen ausreichende Zugabe unter Berücksichtigung des Verzugs vorsehen.</li>
<li>Bezugsflächen oder -punkte für die Bearbeitung nach dem Schweißen vorab festlegen.</li>
<li>Nähte unter Bearbeitungsflächen so planen, dass beim Zerspanen keine Poren oder Bindefehler freigelegt werden.</li>
</ul>
<p>Siehe auch unseren Beitrag zur <a href="kaynak-sonrasi-talasli-isleme.html">mechanischen Bearbeitung nach dem Schweißen</a>.</p>
<h2>Anschlagen, Transport und Aufstellung</h2>
<ul>
<li>Anschlagpunkte (Laschen, Bohrungen) für die Last dimensionieren und in der Zeichnung zeigen,</li>
<li>Nivellierplatten oder Sitze für Stellschrauben,</li>
<li>Öffnungen für Kabel, Hydraulik und Schmierung,</li>
<li>sehr große Gestelle auf Transportmaß teilen und verschraubt verbinden (siehe <a href="kaynakli-mi-civatali-mi-birlestirme.html">geschweißt oder geschraubt</a>).</li>
</ul>
<h2>Typische Fertigungsfolge</h2>
<ol>
<li>Zuschnitt und Kanten,</li>
<li>Zusammenbau und Heften in der Vorrichtung,</li>
<li>Schweißen mit ausgeglichener Schweißfolge,</li>
<li>Sichtprüfung und erforderliche ZfP,</li>
<li>Spannungsarmglühen (falls gefordert),</li>
<li>Strahlen und Grundierung,</li>
<li>mechanische Bearbeitung,</li>
<li>Maßkontrolle und Decklack.</li>
</ol>
<h2>Was in die Zeichnung gehört</h2>
<ul>
<li>Allgemeintoleranz für Schweißkonstruktionen (ISO-13920-Klasse) und Funktionsmaße (siehe <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>),</li>
<li>Ebenheit und Rauheit der Bearbeitungsflächen,</li>
<li>Anforderung an das Spannungsarmglühen,</li>
<li>Nahtmaße und Bewertungsgruppe,</li>
<li>Beschichtungssystem und Schutz der Bearbeitungsflächen.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Wir schweißen Maschinenbetten, -gestelle und -rahmen und beherrschen den Verzug mit ausgeglichener Schweißfolge und Vorrichtungen. Spannungsarmglühen, Zerspanung und Lackierung koordinieren wir mit Partnern und liefern das Teil bearbeitet mit Maßbericht. <a href="../makine-sasesi-imalati.html">Maschinenrahmenbau →</a></p></div>
`,
    faq: [
      ['Ist ein geschweißtes Bett günstiger als Guss?', 'Bei Einzelstücken und Kleinserien meist ja, da keine Modellkosten anfallen. Bei hohen Stückzahlen kleiner Betten kann Guss wirtschaftlicher sein.'],
      ['Dämpft ein geschweißtes Gestell so gut wie Guss?', 'Nicht so gut wie Grauguss, aber Steifigkeit, Rippenanordnung und Füllung verbessern das Schwingungsverhalten.'],
      ['Warum Spannungsarmglühen?', 'Schweißeigenspannungen können das Teil nach der Bearbeitung verformen; Spannungsarmglühen erhöht die Maßstabilität.'],
      ['Wie transportiert man sehr große Gestelle?', 'Sie werden auf Transportmaß geteilt und für das Verschrauben vor Ort konstruiert.']
    ],
    cta_h3: 'Eine Schweißlösung für Ihr Maschinenbett',
    cta_p: 'Senden Sie Gestellzeichnungen oder Gussmodell; wir prüfen gemeinsam die geschweißte Alternative.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Bancadas y bastidores de máquina soldados: de la fundición a la construcción soldada',
    meta: 'Cómo diseñar y fabricar bancadas y bastidores de máquina soldados: fundición frente a construcción soldada, rigidez y nervios, vibraciones, alivio de tensiones, sobreespesor de mecanizado, planitud, puntos de izado y secuencia de fabricación.',
    og: 'Bancadas soldadas',
    tag: 'Construcción de máquinas · Diseño',
    h1: 'Bancadas y bastidores de máquina soldados: de la fundición a la construcción soldada',
    crumb: 'Bancadas de máquina',
    read: '8 min de lectura',
    body: `
<p>Máquinas herramienta, prensas, bombas, compresores y máquinas especiales se apoyan en una bancada o bastidor pesado, rígido y dimensionalmente estable. Tradicionalmente es una pieza de fundición. Pero en series cortas y medias, tamaños grandes y diseños que cambian a menudo, la construcción soldada en acero es una alternativa seria.</p>
<h2>¿Fundición o soldada?</h2>
<table>
<thead><tr><th>Criterio</th><th>Fundición (gris / nodular)</th><th>Acero soldado</th></tr></thead>
<tbody>
<tr><td>Coste de modelo</td><td>Sí, caro en series cortas</td><td>No hay</td></tr>
<tr><td>Cambios de diseño</td><td>Hay que modificar el modelo</td><td>Rápidos, por revisión de plano</td></tr>
<tr><td>Rigidez / peso</td><td>Módulo elástico menor, secciones más gruesas</td><td>Módulo del acero mayor, misma rigidez con menos peso</td></tr>
<tr><td>Amortiguación</td><td>Alta en fundición gris</td><td>Menor; mejorable con nervios y rellenos</td></tr>
<tr><td>Límite de tamaño</td><td>Según la fundición</td><td>Bastidores muy grandes dividiéndolos en tramos</td></tr>
<tr><td>Plazo (primera pieza)</td><td>Modelo y colada</td><td>Normalmente más corto</td></tr>
</tbody>
</table>
<p>En bancadas pequeñas, de gran serie y donde la amortiguación es crítica, la fundición sigue teniendo ventaja. En piezas únicas o series cortas, bastidores grandes y máquinas que se revisan a menudo, la soldada suele ser más económica.</p>
<h2>Diseño para rigidez</h2>
<ul>
<li><strong>Secciones cajón cerradas:</strong> mucha más rigidez a torsión que las abiertas.</li>
<li><strong>Disposición de nervios:</strong> nervios diagonales o en panal dan gran rigidez incluso con chapa fina; sus soldaduras deben ser accesibles.</li>
<li><strong>Flujo de fuerzas:</strong> las cargas de apoyos y fijaciones deben llegar a la base por chapas continuas.</li>
<li><strong>Espesor:</strong> bajo las caras mecanizadas, suficiente para el sobreespesor y la flecha.</li>
</ul>
<h2>Vibraciones</h2>
<p>La frecuencia propia del bastidor debe estar lejos de las frecuencias de trabajo de la máquina. Más rigidez la eleva. Donde se necesita amortiguación, el diseñador puede valorar rellenar cavidades con materiales especiales o cambiar la disposición de nervios.</p>
<h2>Estabilidad dimensional y alivio de tensiones</h2>
<p>La soldadura deja tensiones residuales. Al mecanizar se redistribuyen y la pieza puede deformarse después. Por eso es habitual aliviar tensiones antes de mecanizar bastidores de precisión:</p>
<ul>
<li><strong>Alivio térmico:</strong> calentamiento controlado en horno y enfriamiento lento; el método más eficaz.</li>
<li><strong>Alivio por vibración:</strong> alternativa en algunas aplicaciones para bastidores que no caben en horno.</li>
</ul>
<p>El método requerido debe indicarse en el plano según la precisión y el criterio del diseñador.</p>
<h2>Sobreespesor y referencias</h2>
<ul>
<li>Dejar sobreespesor suficiente en las caras a mecanizar, teniendo en cuenta la deformación.</li>
<li>Definir de antemano caras o puntos de referencia para el mecanizado posterior.</li>
<li>Planificar las soldaduras bajo caras mecanizadas para que el mecanizado no destape poros ni faltas de fusión.</li>
</ul>
<p>Vea también nuestro artículo sobre <a href="kaynak-sonrasi-talasli-isleme.html">mecanizado después de soldar</a>.</p>
<h2>Izado, transporte y montaje</h2>
<ul>
<li>puntos de izado (orejetas, agujeros) dimensionados para la carga e indicados en el plano,</li>
<li>apoyos de nivelación o alojamientos para tornillos niveladores,</li>
<li>aberturas para cables, hidráulica y lubricación,</li>
<li>en bastidores muy grandes, división a tamaño de transporte con uniones atornilladas (ver <a href="kaynakli-mi-civatali-mi-birlestirme.html">soldado o atornillado</a>).</li>
</ul>
<h2>Secuencia típica</h2>
<ol>
<li>corte y plegado,</li>
<li>armado y punteado en utillaje,</li>
<li>soldadura con secuencia equilibrada,</li>
<li>inspección visual y END necesarios,</li>
<li>alivio de tensiones (si se exige),</li>
<li>granallado e imprimación,</li>
<li>mecanizado,</li>
<li>control dimensional y acabado.</li>
</ol>
<h2>Qué debe incluir el plano</h2>
<ul>
<li>tolerancia general de construcción soldada (clase ISO 13920) y cotas funcionales (ver <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>),</li>
<li>planitud y rugosidad de caras mecanizadas,</li>
<li>requisito de alivio de tensiones,</li>
<li>tamaños de soldadura y nivel de calidad,</li>
<li>sistema de pintura y protección de las caras mecanizadas.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> soldamos bancadas, bastidores y chasis de máquina, controlando la deformación con secuencias equilibradas y utillajes. Coordinamos con nuestros socios el alivio de tensiones, el mecanizado y la pintura, y entregamos la pieza mecanizada con informe dimensional. <a href="../makine-sasesi-imalati.html">Fabricación de bastidores de máquina →</a></p></div>
`,
    faq: [
      ['¿Es más barata una bancada soldada que una fundida?', 'En piezas únicas y series cortas normalmente sí, al no haber coste de modelo. En grandes series de bancadas pequeñas la fundición puede ser más económica.'],
      ['¿Amortigua vibraciones igual que la fundición?', 'No tanto como la fundición gris, pero rigidez, nervios y rellenos mejoran el comportamiento.'],
      ['¿Por qué aliviar tensiones?', 'Las tensiones residuales de soldadura pueden deformar la pieza tras el mecanizado; el alivio mejora la estabilidad dimensional.'],
      ['¿Cómo se transportan bastidores muy grandes?', 'Se dividen a tamaño de transporte y se diseñan para atornillarse en obra.']
    ],
    cta_h3: 'Una solución soldada para su bancada',
    cta_p: 'Envíenos los planos o el modelo de fundición; valoramos juntos la alternativa soldada.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Bâtis et socles de machines mécano-soudés : passer de la fonte au mécano-soudé',
    meta: 'Comment concevoir et fabriquer des bâtis et socles de machines mécano-soudés : fonte contre mécano-soudure, rigidité et nervurage, vibrations, détensionnement, surépaisseur d’usinage, planéité, points de levage et séquence de fabrication.',
    og: 'Bâtis mécano-soudés',
    tag: 'Construction de machines · Conception',
    h1: 'Bâtis et socles de machines mécano-soudés : passer de la fonte au mécano-soudé',
    crumb: 'Bâtis de machines',
    read: '8 min de lecture',
    body: `
<p>Machines-outils, presses, pompes, compresseurs et machines spéciales reposent sur un bâti ou un socle lourd, rigide et dimensionnellement stable. Il s’agit traditionnellement d’une pièce de fonderie. Mais pour les petites et moyennes séries, les grandes dimensions et les conceptions qui évoluent souvent, le mécano-soudé en acier est une alternative sérieuse.</p>
<h2>Fonte ou mécano-soudé ?</h2>
<table>
<thead><tr><th>Critère</th><th>Fonte (grise / GS)</th><th>Acier mécano-soudé</th></tr></thead>
<tbody>
<tr><td>Coût de modèle</td><td>Oui, cher en petite série</td><td>Aucun</td></tr>
<tr><td>Modification de conception</td><td>Modèle à reprendre</td><td>Rapide, par révision de plan</td></tr>
<tr><td>Rigidité / masse</td><td>Module d’élasticité plus faible, parois plus épaisses</td><td>Module plus élevé, même rigidité pour une masse moindre</td></tr>
<tr><td>Amortissement</td><td>Élevé en fonte grise</td><td>Plus faible ; améliorable par nervurage et remplissage</td></tr>
<tr><td>Limite de taille</td><td>Selon la fonderie</td><td>Très grands bâtis possibles par tronçons</td></tr>
<tr><td>Délai (première pièce)</td><td>Modèle et coulée</td><td>Généralement plus court</td></tr>
</tbody>
</table>
<p>Pour des socles petits, en grande série et où l’amortissement est critique, la fonte garde l’avantage. Pour les pièces unitaires, les petites séries, les grands bâtis et les machines souvent révisées, le mécano-soudé est généralement plus économique.</p>
<h2>Concevoir pour la rigidité</h2>
<ul>
<li><strong>Caissons fermés :</strong> rigidité en torsion bien supérieure aux profils ouverts.</li>
<li><strong>Nervurage :</strong> nervures diagonales ou en nid d’abeille, rigides même en tôle mince ; leurs soudures doivent rester accessibles.</li>
<li><strong>Cheminement des efforts :</strong> transmettre les charges des paliers et fixations au pied par des tôles continues.</li>
<li><strong>Épaisseur :</strong> sous les faces usinées, suffisante pour la surépaisseur et la flèche.</li>
</ul>
<h2>Vibrations</h2>
<p>La fréquence propre du bâti doit être nettement éloignée des fréquences de fonctionnement. Plus de rigidité l’augmente. Si un amortissement est nécessaire, le concepteur peut envisager de remplir les cavités de matériaux spéciaux ou de modifier le nervurage.</p>
<h2>Stabilité dimensionnelle et détensionnement</h2>
<p>Le soudage laisse des contraintes résiduelles. À l’usinage, elles se redistribuent et la pièce peut se déformer ensuite. On détensionne donc souvent les bâtis de précision avant usinage :</p>
<ul>
<li><strong>Détensionnement thermique :</strong> chauffage contrôlé au four et refroidissement lent ; la méthode la plus efficace.</li>
<li><strong>Détensionnement par vibrations :</strong> alternative dans certaines applications pour les bâtis trop grands pour un four.</li>
</ul>
<p>La méthode exigée doit être indiquée sur le plan selon la précision et l’exigence du concepteur.</p>
<h2>Surépaisseur et références</h2>
<ul>
<li>Prévoir une surépaisseur suffisante sur les faces usinées, déformations comprises.</li>
<li>Définir à l’avance les faces ou points de référence pour l’usinage après soudage.</li>
<li>Prévoir les soudures sous les faces usinées pour que l’usinage ne découvre ni porosité ni manque de fusion.</li>
</ul>
<p>Voir aussi notre article sur <a href="kaynak-sonrasi-talasli-isleme.html">l’usinage après soudage</a>.</p>
<h2>Levage, transport et installation</h2>
<ul>
<li>points de levage (oreilles, trous) dimensionnés et indiqués sur le plan,</li>
<li>plots de mise à niveau ou logements pour vis de calage,</li>
<li>passages pour câbles, hydraulique et lubrification,</li>
<li>pour les très grands bâtis, découpage au gabarit routier avec assemblages boulonnés (voir <a href="kaynakli-mi-civatali-mi-birlestirme.html">soudé ou boulonné</a>).</li>
</ul>
<h2>Séquence de fabrication typique</h2>
<ol>
<li>découpe et pliage,</li>
<li>assemblage et pointage sur gabarit,</li>
<li>soudage selon une séquence équilibrée,</li>
<li>contrôle visuel et CND requis,</li>
<li>détensionnement (si exigé),</li>
<li>grenaillage et primaire,</li>
<li>usinage,</li>
<li>contrôle dimensionnel et finition.</li>
</ol>
<h2>Ce que le plan doit contenir</h2>
<ul>
<li>tolérance générale mécano-soudée (classe ISO 13920) et cotes fonctionnelles (voir <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>),</li>
<li>planéité et rugosité des faces usinées,</li>
<li>exigence de détensionnement,</li>
<li>dimensions des soudures et niveau de qualité,</li>
<li>système de peinture et protection des faces usinées.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous soudons des bâtis, socles et châssis de machines en maîtrisant les déformations par séquences équilibrées et gabarits. Détensionnement, usinage et peinture sont coordonnés avec nos partenaires, et la pièce est livrée usinée avec rapport dimensionnel. <a href="../makine-sasesi-imalati.html">Fabrication de bâtis de machines →</a></p></div>
`,
    faq: [
      ['Un bâti mécano-soudé coûte-t-il moins cher qu’une fonte ?', 'Pour les pièces unitaires et petites séries, généralement oui, faute de coût de modèle. En grande série de petits socles, la fonte peut être plus économique.'],
      ['Amortit-il les vibrations aussi bien que la fonte ?', 'Pas autant que la fonte grise, mais rigidité, nervurage et remplissage améliorent le comportement.'],
      ['Pourquoi détensionner ?', 'Les contraintes résiduelles de soudage peuvent déformer la pièce après usinage ; le détensionnement améliore la stabilité dimensionnelle.'],
      ['Comment transporter de très grands bâtis ?', 'Ils sont découpés au gabarit de transport et conçus pour être boulonnés sur site.']
    ],
    cta_h3: 'Une solution mécano-soudée pour votre bâti',
    cta_p: 'Envoyez plans ou modèle de fonderie ; étudions ensemble l’alternative soudée.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Basamenti e telai macchina saldati: dalla fusione alla carpenteria saldata',
    meta: 'Come progettare e fabbricare basamenti e telai macchina saldati: fusione contro carpenteria saldata, rigidezza e nervature, vibrazioni, distensione, sovrametallo di lavorazione, planarità, punti di sollevamento e sequenza di fabbricazione.',
    og: 'Basamenti saldati',
    tag: 'Costruzione macchine · Progettazione',
    h1: 'Basamenti e telai macchina saldati: dalla fusione alla carpenteria saldata',
    crumb: 'Basamenti macchina',
    read: '8 min di lettura',
    body: `
<p>Macchine utensili, presse, pompe, compressori e macchine speciali poggiano su un basamento o telaio pesante, rigido e dimensionalmente stabile. Tradizionalmente è una fusione. Ma per piccole e medie serie, grandi dimensioni e progetti che cambiano spesso, la carpenteria saldata in acciaio è un’alternativa concreta.</p>
<h2>Fusione o saldato?</h2>
<table>
<thead><tr><th>Criterio</th><th>Fusione (ghisa grigia / sferoidale)</th><th>Acciaio saldato</th></tr></thead>
<tbody>
<tr><td>Costo modello</td><td>Sì, caro per piccole serie</td><td>Nessuno</td></tr>
<tr><td>Modifiche di progetto</td><td>Serve modificare il modello</td><td>Rapide, con revisione del disegno</td></tr>
<tr><td>Rigidezza / peso</td><td>Modulo elastico più basso, pareti più spesse</td><td>Modulo più alto, stessa rigidezza con meno peso</td></tr>
<tr><td>Smorzamento</td><td>Alto nella ghisa grigia</td><td>Minore; migliorabile con nervature e riempimenti</td></tr>
<tr><td>Limite dimensionale</td><td>Dipende dalla fonderia</td><td>Telai molto grandi suddividendoli in parti</td></tr>
<tr><td>Tempi (primo pezzo)</td><td>Modello e colata</td><td>In genere più brevi</td></tr>
</tbody>
</table>
<p>Per basamenti piccoli, in grande serie e dove lo smorzamento è critico la fusione resta vantaggiosa. Per pezzi singoli o piccole serie, telai grandi e macchine spesso revisionate, il saldato è di solito più economico.</p>
<h2>Progettare per la rigidezza</h2>
<ul>
<li><strong>Sezioni a cassone chiuse:</strong> rigidezza torsionale molto maggiore delle sezioni aperte.</li>
<li><strong>Nervature:</strong> diagonali o a nido d’ape, danno alta rigidezza anche con lamiere sottili; le loro saldature devono essere accessibili.</li>
<li><strong>Flusso delle forze:</strong> i carichi da supporti e attacchi vanno portati alla base con lamiere continue.</li>
<li><strong>Spessore:</strong> sotto le superfici lavorate, sufficiente per sovrametallo e freccia.</li>
</ul>
<h2>Vibrazioni</h2>
<p>La frequenza propria del telaio deve essere lontana da quelle di lavoro della macchina. Più rigidezza la innalza. Dove serve smorzamento, il progettista può valutare il riempimento delle cavità con materiali speciali o una diversa disposizione delle nervature.</p>
<h2>Stabilità dimensionale e distensione</h2>
<p>La saldatura lascia tensioni residue. Con l’asportazione di truciolo si ridistribuiscono e il pezzo può deformarsi dopo la lavorazione. Per questo i telai di precisione vengono spesso distesi prima della lavorazione:</p>
<ul>
<li><strong>Distensione termica:</strong> riscaldamento controllato in forno e raffreddamento lento; il metodo più efficace.</li>
<li><strong>Distensione per vibrazione:</strong> alternativa in alcune applicazioni per telai che non entrano in forno.</li>
</ul>
<p>Il metodo richiesto va indicato a disegno in base alla precisione e al requisito del progettista.</p>
<h2>Sovrametallo e riferimenti</h2>
<ul>
<li>Lasciare sovrametallo sufficiente sulle superfici da lavorare, tenendo conto delle deformazioni.</li>
<li>Definire in anticipo superfici o punti di riferimento per la lavorazione dopo saldatura.</li>
<li>Pianificare le saldature sotto le superfici lavorate in modo che la lavorazione non scopra porosità o mancanze di fusione.</li>
</ul>
<p>Vedi anche l’articolo sulla <a href="kaynak-sonrasi-talasli-isleme.html">lavorazione meccanica dopo saldatura</a>.</p>
<h2>Sollevamento, trasporto e installazione</h2>
<ul>
<li>punti di sollevamento (golfari, fori) dimensionati e indicati a disegno,</li>
<li>piastre di livellamento o sedi per viti di regolazione,</li>
<li>aperture per cavi, oleodinamica e lubrificazione,</li>
<li>per telai molto grandi, suddivisione a misura di trasporto con giunti bullonati (vedi <a href="kaynakli-mi-civatali-mi-birlestirme.html">saldato o bullonato</a>).</li>
</ul>
<h2>Sequenza tipica</h2>
<ol>
<li>taglio e piegatura,</li>
<li>assemblaggio e puntatura in maschera,</li>
<li>saldatura con sequenza bilanciata,</li>
<li>esame visivo e CND richiesti,</li>
<li>distensione (se richiesta),</li>
<li>sabbiatura e primer,</li>
<li>lavorazione meccanica,</li>
<li>controllo dimensionale e finitura.</li>
</ol>
<h2>Cosa deve contenere il disegno</h2>
<ul>
<li>tolleranza generale per costruzioni saldate (classe ISO 13920) e quote funzionali (vedi <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>),</li>
<li>planarità e rugosità delle superfici lavorate,</li>
<li>requisito di distensione,</li>
<li>dimensioni delle saldature e livello di qualità,</li>
<li>ciclo di verniciatura e protezione delle superfici lavorate.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> saldiamo basamenti, bancali e telai macchina controllando le deformazioni con sequenze bilanciate e maschere. Coordiniamo con i nostri partner distensione, lavorazioni meccaniche e verniciatura e consegniamo il pezzo lavorato con rapporto dimensionale. <a href="../makine-sasesi-imalati.html">Fabbricazione di telai macchina →</a></p></div>
`,
    faq: [
      ['Un basamento saldato costa meno di una fusione?', 'Per pezzi singoli e piccole serie di solito sì, non essendoci costo del modello. Per grandi serie di basamenti piccoli la fusione può essere più economica.'],
      ['Smorza le vibrazioni come una fusione?', 'Non quanto la ghisa grigia, ma rigidezza, nervature e riempimenti migliorano il comportamento.'],
      ['Perché la distensione?', 'Le tensioni residue di saldatura possono deformare il pezzo dopo la lavorazione; la distensione migliora la stabilità dimensionale.'],
      ['Come si trasportano telai molto grandi?', 'Si suddividono a misura di trasporto e si progettano per essere bullonati in cantiere.']
    ],
    cta_h3: 'Una soluzione saldata per il vostro basamento',
    cta_p: 'Inviateci disegni o modello di fusione; valutiamo insieme l’alternativa saldata.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Gelaste machinebedden en -frames: van gietwerk naar lasconstructie',
    meta: 'Hoe ontwerp en maak je gelaste machinebedden en -frames? Gietwerk versus lasconstructie, stijfheid en ribontwerp, trillingen, spanningsarmgloeien, bewerkingstoeslag, vlakheid, hijspunten en productievolgorde.',
    og: 'Gelaste machinebedden',
    tag: 'Machinebouw · Ontwerp',
    h1: 'Gelaste machinebedden en -frames: van gietwerk naar lasconstructie',
    crumb: 'Machinebedden',
    read: '8 min lezen',
    body: `
<p>Werktuigmachines, persen, pompen, compressoren en speciale machines staan op een zwaar, stijf en maatvast bed of frame. Traditioneel is dat gietwerk. Maar bij kleine en middelgrote series, grote afmetingen en vaak wijzigende ontwerpen is een gelaste stalen constructie een serieus alternatief.</p>
<h2>Gietwerk of lasconstructie?</h2>
<table>
<thead><tr><th>Criterium</th><th>Gietwerk (grijs / nodulair)</th><th>Gelast staal</th></tr></thead>
<tbody>
<tr><td>Modelkosten</td><td>Ja, duur bij kleine aantallen</td><td>Geen</td></tr>
<tr><td>Ontwerpwijziging</td><td>Model moet worden aangepast</td><td>Snel via tekeningrevisie</td></tr>
<tr><td>Stijfheid / gewicht</td><td>Lagere E-modulus, dikkere wanden nodig</td><td>Hogere E-modulus, zelfde stijfheid bij minder gewicht</td></tr>
<tr><td>Trillingsdemping</td><td>Hoog bij grijs gietijzer</td><td>Lager; te verbeteren met ribben en vulling</td></tr>
<tr><td>Maximale grootte</td><td>Afhankelijk van de gieterij</td><td>Zeer grote frames mogelijk door opdeling</td></tr>
<tr><td>Levertijd (eerste deel)</td><td>Model- en gietperiode</td><td>Meestal korter</td></tr>
</tbody>
</table>
<p>Bij kleine bedden in grote series waar demping kritisch is, houdt gietwerk het voordeel. Bij enkelstuks, kleine series, grote frames en vaak gewijzigde machines is een lasconstructie meestal voordeliger.</p>
<h2>Ontwerpen op stijfheid</h2>
<ul>
<li><strong>Gesloten kokerprofielen:</strong> veel hogere torsiestijfheid dan open profielen.</li>
<li><strong>Ribpatroon:</strong> diagonale of honingraatribben geven hoge stijfheid, ook met dunne plaat; de ribnaden moeten goed bereikbaar zijn.</li>
<li><strong>Krachtsverloop:</strong> lasten uit lagers en bevestigingspunten via doorgaande platen naar de voet leiden.</li>
<li><strong>Plaatdikte:</strong> onder bewerkte vlakken voldoende voor bewerkingstoeslag en doorbuiging.</li>
</ul>
<h2>Trillingen</h2>
<p>De eigenfrequentie van het frame moet ver van de bedrijfsfrequenties van de machine liggen. Meer stijfheid verhoogt die. Waar demping nodig is, kan de ontwerper holtes laten vullen met speciale materialen of het ribpatroon aanpassen.</p>
<h2>Maatvastheid en spanningsarmgloeien</h2>
<p>Lassen laat restspanningen achter. Bij verspanen herverdelen die zich en kan het deel na bewerking vervormen. Daarom worden precisieframes vaak voor het bewerken spanningsarm behandeld:</p>
<ul>
<li><strong>Thermisch spanningsarmgloeien:</strong> gecontroleerd verwarmen in een oven en langzaam afkoelen; de effectiefste methode.</li>
<li><strong>Vibratie-ontspannen:</strong> in sommige toepassingen een alternatief voor frames die niet in een oven passen.</li>
</ul>
<p>Welke methode vereist is, hoort op tekening, afhankelijk van precisie en de eis van de ontwerper.</p>
<h2>Bewerkingstoeslag en referenties</h2>
<ul>
<li>Voldoende toeslag op bewerkte vlakken laten, rekening houdend met vervorming.</li>
<li>Referentievlakken of -punten voor bewerking na het lassen vooraf vastleggen.</li>
<li>Lassen onder bewerkte vlakken zo plannen dat verspanen geen porositeit of bindingsfouten blootlegt.</li>
</ul>
<p>Zie ook ons artikel over <a href="kaynak-sonrasi-talasli-isleme.html">verspanen na het lassen</a>.</p>
<h2>Hijsen, transport en opstelling</h2>
<ul>
<li>hijspunten (ogen, gaten) gedimensioneerd voor de last en op tekening aangegeven,</li>
<li>stelplaten of zittingen voor stelschroeven,</li>
<li>openingen voor kabels, hydrauliek en smering,</li>
<li>zeer grote frames opdelen tot transportmaat met boutverbindingen (zie <a href="kaynakli-mi-civatali-mi-birlestirme.html">lassen of bouten</a>).</li>
</ul>
<h2>Typische productievolgorde</h2>
<ol>
<li>snijden en zetten,</li>
<li>samenstellen en hechten in een mal,</li>
<li>lassen met evenwichtige volgorde,</li>
<li>visuele inspectie en vereist NDO,</li>
<li>spanningsarmgloeien (indien vereist),</li>
<li>stralen en grondlaag,</li>
<li>verspanen,</li>
<li>maatcontrole en eindlaag.</li>
</ol>
<h2>Wat op de tekening hoort</h2>
<ul>
<li>algemene lastolerantie (ISO 13920-klasse) en functionele maten (zie <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>),</li>
<li>vlakheid en ruwheid van bewerkte vlakken,</li>
<li>eis voor spanningsarmgloeien,</li>
<li>lasmaten en kwaliteitsniveau,</li>
<li>verfsysteem en bescherming van bewerkte vlakken.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> we lassen machinebedden, -frames en -onderstellen en beheersen vervorming met evenwichtige lasvolgordes en mallen. Spanningsarmgloeien, verspanen en lakken coördineren we met partners; het deel wordt bewerkt en met maatrapport geleverd. <a href="../makine-sasesi-imalati.html">Machineframebouw →</a></p></div>
`,
    faq: [
      ['Is een gelast bed goedkoper dan gietwerk?', 'Bij enkelstuks en kleine series meestal wel, omdat er geen modelkosten zijn. Bij grote series kleine bedden kan gietwerk voordeliger zijn.'],
      ['Dempt een gelast frame trillingen even goed?', 'Niet zo goed als grijs gietijzer, maar stijfheid, ribben en vulling verbeteren het gedrag.'],
      ['Waarom spanningsarmgloeien?', 'Lasrestspanningen kunnen het deel na bewerking laten vervormen; spanningsarmgloeien verbetert de maatvastheid.'],
      ['Hoe vervoer je zeer grote frames?', 'Ze worden opgedeeld tot transportmaat en ontworpen om ter plaatse te worden gebout.']
    ],
    cta_h3: 'Een gelaste oplossing voor uw machinebed',
    cta_p: 'Stuur tekeningen of gietmodel; we bekijken samen het gelaste alternatief.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Sveiste maskinfundament og -rammer: fra støpegods til sveisekonstruksjon',
    meta: 'Hvordan konstruere og produsere sveiste maskinfundament og -rammer: støpegods mot sveisekonstruksjon, stivhet og ribber, vibrasjoner, spenningsarmgløding, maskineringstillegg, planhet, løftepunkter og produksjonsrekkefølge.',
    og: 'Sveiste maskinfundament',
    tag: 'Maskinbygging · Konstruksjon',
    h1: 'Sveiste maskinfundament og -rammer: fra støpegods til sveisekonstruksjon',
    crumb: 'Maskinfundament',
    read: '8 min lesing',
    body: `
<p>Verktøymaskiner, presser, pumper, kompressorer og spesialmaskiner står på et tungt, stivt og målstabilt fundament eller en ramme. Tradisjonelt er det støpegods. Men for små og mellomstore serier, store dimensjoner og konstruksjoner som ofte endres, er en sveiset stålkonstruksjon et seriøst alternativ.</p>
<h2>Støpt eller sveiset?</h2>
<table>
<thead><tr><th>Kriterium</th><th>Støpegods (grått / segjern)</th><th>Sveiset stål</th></tr></thead>
<tbody>
<tr><td>Modellkostnad</td><td>Ja, dyrt ved små antall</td><td>Ingen</td></tr>
<tr><td>Konstruksjonsendring</td><td>Modellen må endres</td><td>Raskt via tegningsrevisjon</td></tr>
<tr><td>Stivhet / vekt</td><td>Lavere E-modul, tykkere vegger</td><td>Høyere E-modul, samme stivhet med lavere vekt</td></tr>
<tr><td>Vibrasjonsdemping</td><td>Høy i grått støpejern</td><td>Lavere; kan bedres med ribber og fylling</td></tr>
<tr><td>Størrelsesgrense</td><td>Avhenger av støperiet</td><td>Svært store rammer mulig ved oppdeling</td></tr>
<tr><td>Leveringstid (første del)</td><td>Modell og støping</td><td>Som regel kortere</td></tr>
</tbody>
</table>
<p>For små fundament i store serier der demping er kritisk, har støpegods fortsatt fordelen. For enkeltstykker, små serier, store rammer og maskiner som ofte revideres, er sveisekonstruksjon som regel rimeligere.</p>
<h2>Konstruksjon for stivhet</h2>
<ul>
<li><strong>Lukkede kassetverrsnitt:</strong> mye høyere torsjonsstivhet enn åpne profiler.</li>
<li><strong>Ribbemønster:</strong> diagonale eller bikakeribber gir høy stivhet selv med tynn plate; ribbesveisene må være lett tilgjengelige.</li>
<li><strong>Kraftflyt:</strong> laster fra lagre og festepunkter føres til foten via gjennomgående plater.</li>
<li><strong>Platetykkelse:</strong> under maskinerte flater tilstrekkelig for maskineringstillegg og nedbøyning.</li>
</ul>
<h2>Vibrasjoner</h2>
<p>Rammens egenfrekvens bør ligge godt unna maskinens driftsfrekvenser. Økt stivhet hever den. Der demping trengs, kan konstruktøren vurdere å fylle hulrom med spesialmaterialer eller endre ribbemønsteret.</p>
<h2>Målstabilitet og spenningsarmgløding</h2>
<p>Sveising etterlater restspenninger. Ved maskinering omfordeles de, og delen kan endre form etterpå. Presisjonsrammer spenningsarmglødes derfor ofte før maskinering:</p>
<ul>
<li><strong>Termisk spenningsarmgløding:</strong> kontrollert oppvarming i ovn og langsom avkjøling; mest effektivt.</li>
<li><strong>Vibrasjonsavspenning:</strong> alternativ i enkelte bruksområder for rammer som ikke får plass i ovn.</li>
</ul>
<p>Hvilken metode som kreves, bør stå på tegningen ut fra nøyaktighetskrav og konstruktørens krav.</p>
<h2>Maskineringstillegg og referanser</h2>
<ul>
<li>La tilstrekkelig tillegg stå på maskinerte flater, med tanke på deformasjon.</li>
<li>Definer referanseflater eller -punkter for maskinering etter sveising på forhånd.</li>
<li>Planlegg sveiser under maskinerte flater slik at maskineringen ikke avdekker porer eller bindingsfeil.</li>
</ul>
<p>Se også artikkelen om <a href="kaynak-sonrasi-talasli-isleme.html">maskinering etter sveising</a>.</p>
<h2>Løft, transport og oppstilling</h2>
<ul>
<li>løftepunkter (ører, hull) dimensjonert for lasten og vist på tegningen,</li>
<li>nivelleringsputer eller seter for justeringsskruer,</li>
<li>åpninger for kabler, hydraulikk og smøring,</li>
<li>svært store rammer deles i transportstørrelse med boltede skjøter (se <a href="kaynakli-mi-civatali-mi-birlestirme.html">sveiset eller boltet</a>).</li>
</ul>
<h2>Typisk produksjonsrekkefølge</h2>
<ol>
<li>kutting og bukking,</li>
<li>montering og heftsveising i jigg,</li>
<li>sveising med balansert rekkefølge,</li>
<li>visuell kontroll og nødvendig NDT,</li>
<li>spenningsarmgløding (om påkrevd),</li>
<li>blåsing og grunning,</li>
<li>maskinering,</li>
<li>målkontroll og toppstrøk.</li>
</ol>
<h2>Hva tegningen bør inneholde</h2>
<ul>
<li>generell sveisetoleranse (ISO 13920-klasse) og funksjonsmål (se <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>),</li>
<li>planhet og ruhet på maskinerte flater,</li>
<li>krav om spenningsarmgløding,</li>
<li>sveisestørrelser og kvalitetsnivå,</li>
<li>malingssystem og beskyttelse av maskinerte flater.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> vi sveiser maskinfundament, -senger og -rammer og styrer deformasjon med balanserte sveiserekkefølger og jigger. Spenningsarmgløding, maskinering og maling koordineres med våre partnere, og delen leveres maskinert med målrapport. <a href="../makine-sasesi-imalati.html">Produksjon av maskinrammer →</a></p></div>
`,
    faq: [
      ['Er et sveiset fundament billigere enn støpt?', 'For enkeltstykker og små serier som regel ja, siden det ikke er modellkostnad. For store serier av små fundament kan støping være rimeligere.'],
      ['Demper en sveiset ramme vibrasjoner like godt?', 'Ikke like godt som grått støpejern, men stivhet, ribber og fylling forbedrer oppførselen.'],
      ['Hvorfor spenningsarmgløding?', 'Restspenninger fra sveising kan gjøre at delen endrer form etter maskinering; spenningsarmgløding gir bedre målstabilitet.'],
      ['Hvordan transporteres svært store rammer?', 'De deles i transportstørrelse og konstrueres for å boltes sammen på stedet.']
    ],
    cta_h3: 'En sveiset løsning for maskinfundamentet ditt',
    cta_p: 'Send tegninger eller støpemodell; vi vurderer sveisealternativet sammen.',
    cta_btn: 'Be om tilbud →'
  }
};
