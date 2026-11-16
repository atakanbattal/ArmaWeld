export default {
  order: 71,
  slug: 'dokum-yerine-kaynakli-konstruksiyon',
  key: 'p71_casting',
  date: '2026-01-20',
  keywords: 'döküm yerine kaynaklı konstrüksiyon, dökümden kaynaklıya geçiş, döküm parça alternatifi, kaynaklı gövde, casting to fabrication conversion, weldment instead of casting, Guss durch Schweißkonstruktion ersetzen, sustituir fundición por soldadura, remplacer une pièce de fonderie par mécanosoudure',
  related: ['kaynakli-makine-govdesi-imalati', 'kaynak-sonrasi-talasli-isleme', 'kaynak-sonrasi-isil-islem-pwht', 'kaynakli-mi-civatali-mi-birlestirme'],
  tr: {
    title: 'Döküm Yerine Kaynaklı Konstrüksiyon: Ne Zaman Mantıklı, Nasıl Geçilir?',
    meta: 'Döküm parçayı kaynaklı konstrüksiyona çevirmek: kalıp maliyeti, adet, ağırlık, rijitlik, sönümleme ve teslim süresi açısından karşılaştırma; tasarımın yeniden düşünülmesi, gerilim giderme, talaşlı işleme payı ve geçişte dikkat edilecek noktalar.',
    og: 'Döküm yerine kaynaklı konstrüksiyon',
    tag: 'Satın Alma · Tasarım',
    h1: 'Döküm Yerine Kaynaklı Konstrüksiyon: Ne Zaman Mantıklı, Nasıl Geçilir?',
    crumb: 'Döküm yerine kaynak',
    read: '7 dk okuma',
    body: `
<p>Makine gövdeleri, yatak kutuları, pres kolları ve büyük konsollar geleneksel olarak dökümden yapılır. Ancak düşük adetlerde, büyük boyutlarda veya tasarımın sık değiştiği ürünlerde kalıp maliyeti ve uzun döküm teslim süreleri can sıkıcı hale gelir. Çelik saclardan kaynakla oluşturulan bir konstrüksiyon (İngilizcede "weldment") bu noktada güçlü bir alternatiftir. Ama her döküm parça kaynaklıya çevrilmez; karar birkaç ölçüte dayanır.</p>
<h2>Karşılaştırma</h2>
<table>
<thead><tr><th>Ölçüt</th><th>Döküm</th><th>Kaynaklı konstrüksiyon</th></tr></thead>
<tbody>
<tr><td>Başlangıç maliyeti</td><td>Model ve kalıp gerekir</td><td>Kalıp yok, basit fikstür yeterli</td></tr>
<tr><td>Uygun adet</td><td>Orta ve yüksek seri</td><td>Tek parçadan orta seriye</td></tr>
<tr><td>Tasarım değişikliği</td><td>Kalıp değişikliği gerektirir</td><td>Çizim revizyonu ile hızla uygulanır</td></tr>
<tr><td>Ağırlık</td><td>Döküm et kalınlıkları sınırlı inceltilebilir</td><td>Kesitler yüke göre optimize edilir, genellikle daha hafif</td></tr>
<tr><td>Rijitlik</td><td>Çelik dökümde yüksek, pik dökümde düşük elastisite modülü</td><td>Çelik elastisite modülü yüksek</td></tr>
<tr><td>Titreşim sönümleme</td><td>Pik döküm (lamel grafitli) çok iyi</td><td>Daha düşük; nervür ve dolgu ile iyileştirilebilir</td></tr>
<tr><td>Karmaşık iç boşluklar</td><td>Maça ile kolay</td><td>Zor veya parçalara bölünmesi gerekir</td></tr>
</tbody>
</table>
<h2>Geçiş Ne Zaman Mantıklı?</h2>
<ul>
<li>Yıllık adet düşükse ve kalıp maliyeti parça başına ciddi yük getiriyorsa.</li>
<li>Parça büyük ve tek parça dökümü zor veya pahalıysa.</li>
<li>Tasarım hâlâ gelişiyorsa ve sık revizyon bekleniyorsa.</li>
<li>Döküm tedarikinde teslim süresi veya kalite sorunu yaşanıyorsa (gözeneklilik, boşluk, ölçü sapması).</li>
<li>Ağırlık azaltma hedefi varsa.</li>
</ul>
<p>Buna karşılık yüksek sönümleme isteyen hassas tezgah gövdeleri, karmaşık iç kanallı pompa gövdeleri veya çok yüksek adetli küçük parçalar genellikle dökümde kalmalıdır.</p>
<h2>Kopyalamayın, Yeniden Tasarlayın</h2>
<p>En sık hata, döküm geometrisini sacla birebir taklit etmeye çalışmaktır. Döküm kavisli yüzeyler, değişken et kalınlıkları ve yuvarlatılmış geçişler içerir; bunları kaynakla kopyalamak pahalı ve gereksizdir. Doğru yaklaşım parçanın işlevini anlamak ve yük yolunu düz saclar, borular, profiller ve nervürlerle kurmaktır. Bağlantı yüzeyleri, yatak delikleri ve montaj ölçüleri korunur; aradaki form serbestçe yeniden tasarlanır.</p>
<h2>Teknik Dikkat Noktaları</h2>
<ul>
<li><strong>Talaşlı işleme payı:</strong> Yatak ve bağlantı yüzeyleri kaynak sonrası işlenir. Yeterli pay ve referans yüzeyler tasarımda baştan tanımlanmalıdır (bkz. <a href="kaynak-sonrasi-talasli-isleme.html">kaynak sonrası talaşlı işleme</a>).</li>
<li><strong>Gerilim giderme:</strong> Hassas işlenecek gövdelerde kaynak artık gerilmeleri işleme sonrası çarpılmaya yol açabilir. Gerilim giderme tavı iş ortaklarıyla planlanır (bkz. <a href="kaynak-sonrasi-isil-islem-pwht.html">kaynak sonrası ısıl işlem</a>).</li>
<li><strong>Yorulma:</strong> Döngüsel yük altındaki parçalarda kaynak dikişlerinin yeri ve detayı önemlidir; dikişler yüksek gerilme bölgelerinden uzak tutulmalıdır (bkz. <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">yorulma</a>).</li>
<li><strong>Sönümleme:</strong> Titreşim kritikse iç nervürler, kapalı kutu kesitler veya bölgesel dolgu malzemesi değerlendirilir.</li>
</ul>
<h2>Geçiş Adımları</h2>
<ol>
<li>Döküm parçanın işlevini, yüklerini ve kritik ölçülerini belirleyin.</li>
<li>Kaynaklı tasarımı hazırlayın ve gerekiyorsa hesapla doğrulayın.</li>
<li>Bir prototip üretip işleyin, montajda ve sahada deneyin.</li>
<li>Maliyet, ağırlık ve teslim süresini dökümle karşılaştırın.</li>
<li>Onaydan sonra seri üretime geçin ve çizimi revizyon kontrolü altına alın.</li>
</ol>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Döküm parçaların kaynaklı konstrüksiyona çevrilmesinde müşterinin tasarım ekibiyle birlikte üretilebilirlik açısından çalışıyor, prototip ve seri kaynaklı imalatını yapıyoruz. Talaşlı işleme ve gerilim giderme tavını iş ortaklarımızla koordine ediyoruz. <a href="../makine-sasesi-imalati.html">Makine şasesi ve gövde imalatı →</a></p></div>
`,
    faq: [
      ['Döküm parça kaynaklı konstrüksiyona çevrilebilir mi?', 'Çoğu makine gövdesi, konsol ve kol çevrilebilir; karmaşık iç kanallı veya yüksek sönümleme isteyen parçalar genellikle dökümde kalır.'],
      ['Kaynaklı konstrüksiyon dökümden ucuz mudur?', 'Düşük ve orta adetlerde, büyük parçalarda ve sık değişen tasarımlarda kalıp maliyeti olmadığı için genellikle daha ekonomiktir.'],
      ['Kaynaklı gövde dökümden hafif olur mu?', 'Genellikle evet; kesitler yüke göre seçildiği için aynı rijitlik daha az malzemeyle sağlanabilir.'],
      ['Kaynaklı gövdede çarpılma nasıl önlenir?', 'Doğru kaynak sırası, fikstür, gerektiğinde gerilim giderme tavı ve yeterli işleme payıyla.']
    ],
    cta_h3: 'Döküm parçanızı kaynaklıya çevirmek mi istiyorsunuz?',
    cta_p: 'Mevcut döküm çizimini ve yıllık adedi gönderin; kaynaklı alternatifin uygunluğunu birlikte değerlendirelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Weldment Instead of Casting: When It Makes Sense and How to Convert',
    meta: 'Converting a cast part into a welded fabrication: comparison of tooling cost, volume, weight, stiffness, damping and lead time; rethinking the design, stress relief, machining allowance and what to watch during the switch.',
    og: 'Weldment instead of casting',
    tag: 'Purchasing · Design',
    h1: 'Weldment Instead of Casting: When It Makes Sense and How to Convert',
    crumb: 'Weldment instead of casting',
    read: '7 min read',
    body: `
<p>Machine housings, bearing boxes, press arms and large brackets have traditionally been cast. But at low volumes, in large sizes or for products whose design changes often, pattern costs and long foundry lead times become a burden. A structure built by welding steel plates, a weldment, is a strong alternative here. Not every casting should be converted, though; the decision rests on a few criteria.</p>
<h2>Comparison</h2>
<table>
<thead><tr><th>Criterion</th><th>Casting</th><th>Weldment</th></tr></thead>
<tbody>
<tr><td>Up-front cost</td><td>Pattern and tooling required</td><td>No tooling, a simple fixture is enough</td></tr>
<tr><td>Suitable volume</td><td>Medium and high series</td><td>One-off to medium series</td></tr>
<tr><td>Design changes</td><td>Require pattern changes</td><td>Applied quickly through a drawing revision</td></tr>
<tr><td>Weight</td><td>Wall thickness can only be reduced so far</td><td>Sections optimised for load, usually lighter</td></tr>
<tr><td>Stiffness</td><td>High for cast steel, lower modulus for grey iron</td><td>High modulus of steel</td></tr>
<tr><td>Vibration damping</td><td>Grey iron (flake graphite) is excellent</td><td>Lower; can be improved with ribs and fill</td></tr>
<tr><td>Complex internal cavities</td><td>Easy with cores</td><td>Difficult or must be split into parts</td></tr>
</tbody>
</table>
<h2>When Does Switching Make Sense?</h2>
<ul>
<li>When annual volume is low and pattern cost weighs heavily per part.</li>
<li>When the part is large and a one-piece casting is difficult or expensive.</li>
<li>When the design is still evolving and frequent revisions are expected.</li>
<li>When casting supply has lead-time or quality problems (porosity, voids, dimensional deviation).</li>
<li>When there is a weight-reduction target.</li>
</ul>
<p>By contrast, precision machine-tool beds that need high damping, pump housings with complex internal passages, or very high-volume small parts usually belong in casting.</p>
<h2>Do Not Copy, Redesign</h2>
<p>The most common mistake is trying to imitate the casting geometry one-to-one in plate. Castings have curved surfaces, varying wall thickness and rounded transitions; copying them with welds is expensive and unnecessary. The right approach is to understand the part's function and build the load path with flat plates, tubes, sections and ribs. Interface faces, bearing bores and mounting dimensions are kept; the form in between is redesigned freely.</p>
<h2>Technical Points</h2>
<ul>
<li><strong>Machining allowance:</strong> bearing and mating faces are machined after welding. Enough allowance and reference faces must be defined in the design from the start (see <a href="kaynak-sonrasi-talasli-isleme.html">machining after welding</a>).</li>
<li><strong>Stress relief:</strong> in housings that will be precision machined, residual welding stresses can cause distortion after machining. Stress-relief annealing is planned with partners (see <a href="kaynak-sonrasi-isil-islem-pwht.html">post-weld heat treatment</a>).</li>
<li><strong>Fatigue:</strong> in parts under cyclic load, the position and detail of welds matter; keep welds away from high-stress areas (see <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">fatigue</a>).</li>
<li><strong>Damping:</strong> if vibration is critical, consider internal ribs, closed box sections or local fill material.</li>
</ul>
<h2>Conversion Steps</h2>
<ol>
<li>Define the cast part's function, loads and critical dimensions.</li>
<li>Prepare the welded design and verify it by calculation if needed.</li>
<li>Build and machine a prototype, try it in assembly and in the field.</li>
<li>Compare cost, weight and lead time with the casting.</li>
<li>After approval, move to series production and put the drawing under revision control.</li>
</ol>
<div class="callout"><p><strong>At ArmaWeld:</strong> when cast parts are converted to weldments we work with the customer's design team on manufacturability and carry out prototype and series welded fabrication. Machining and stress-relief annealing are coordinated with our partners. <a href="../makine-sasesi-imalati.html">Machine frame and housing fabrication →</a></p></div>
`,
    faq: [
      ['Can a casting be converted into a weldment?', 'Most machine housings, brackets and arms can; parts with complex internal passages or high damping needs usually stay cast.'],
      ['Is a weldment cheaper than a casting?', 'At low and medium volumes, for large parts and changing designs it is usually more economical because there is no tooling cost.'],
      ['Is a welded housing lighter than a casting?', 'Usually yes; sections are chosen for the load, so the same stiffness can be reached with less material.'],
      ['How is distortion avoided in a welded housing?', 'With the right weld sequence, fixturing, stress relief where needed and sufficient machining allowance.']
    ],
    cta_h3: 'Want to convert a casting to a weldment?',
    cta_p: 'Send the current casting drawing and annual volume; we will assess the welded alternative together.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Schweißkonstruktion statt Guss: Wann lohnt sich der Umstieg und wie gelingt er?',
    meta: 'Gussteil durch Schweißkonstruktion ersetzen: Vergleich von Modellkosten, Stückzahl, Gewicht, Steifigkeit, Dämpfung und Lieferzeit; Neukonstruktion statt Kopie, Spannungsarmglühen, Bearbeitungszugabe und worauf beim Umstieg zu achten ist.',
    og: 'Schweißkonstruktion statt Guss',
    tag: 'Einkauf · Konstruktion',
    h1: 'Schweißkonstruktion statt Guss: Wann lohnt sich der Umstieg und wie gelingt er?',
    crumb: 'Schweißkonstruktion statt Guss',
    read: '7 Min. Lesezeit',
    body: `
<p>Maschinengehäuse, Lagerböcke, Pressenarme und große Konsolen werden traditionell gegossen. Bei kleinen Stückzahlen, großen Abmessungen oder häufig geänderten Konstruktionen werden Modellkosten und lange Gießerei-Lieferzeiten jedoch zur Last. Eine aus Stahlblechen geschweißte Konstruktion ist hier eine starke Alternative. Nicht jedes Gussteil sollte umgestellt werden; die Entscheidung hängt an wenigen Kriterien.</p>
<h2>Vergleich</h2>
<table>
<thead><tr><th>Kriterium</th><th>Guss</th><th>Schweißkonstruktion</th></tr></thead>
<tbody>
<tr><td>Anlaufkosten</td><td>Modell und Formen nötig</td><td>Keine Formen, einfache Vorrichtung genügt</td></tr>
<tr><td>Geeignete Stückzahl</td><td>Mittlere und große Serien</td><td>Einzelteil bis Mittelserie</td></tr>
<tr><td>Konstruktionsänderung</td><td>Erfordert Modelländerung</td><td>Schnell per Zeichnungsrevision umsetzbar</td></tr>
<tr><td>Gewicht</td><td>Wanddicken nur begrenzt reduzierbar</td><td>Querschnitte lastgerecht, meist leichter</td></tr>
<tr><td>Steifigkeit</td><td>Hoch bei Stahlguss, niedrigerer E-Modul bei Grauguss</td><td>Hoher E-Modul von Stahl</td></tr>
<tr><td>Schwingungsdämpfung</td><td>Grauguss (Lamellengraphit) sehr gut</td><td>Geringer; mit Rippen und Füllung verbesserbar</td></tr>
<tr><td>Komplexe Innenhohlräume</td><td>Mit Kernen einfach</td><td>Schwierig oder Aufteilung nötig</td></tr>
</tbody>
</table>
<h2>Wann lohnt der Umstieg?</h2>
<ul>
<li>Wenn die Jahresmenge gering ist und die Modellkosten pro Teil stark ins Gewicht fallen.</li>
<li>Wenn das Teil groß ist und ein einteiliger Guss schwierig oder teuer ist.</li>
<li>Wenn die Konstruktion sich noch entwickelt und häufige Revisionen zu erwarten sind.</li>
<li>Wenn es bei der Gussbeschaffung Lieferzeit- oder Qualitätsprobleme gibt (Porosität, Lunker, Maßabweichungen).</li>
<li>Wenn ein Gewichtsziel besteht.</li>
</ul>
<p>Präzise Werkzeugmaschinenbetten mit hohem Dämpfungsbedarf, Pumpengehäuse mit komplexen Innenkanälen oder sehr hochvolumige Kleinteile bleiben dagegen meist beim Guss.</p>
<h2>Nicht kopieren, neu konstruieren</h2>
<p>Der häufigste Fehler ist, die Gussgeometrie eins zu eins in Blech nachzubilden. Guss hat gekrümmte Flächen, wechselnde Wanddicken und gerundete Übergänge; das schweißtechnisch zu kopieren ist teuer und unnötig. Richtig ist, die Funktion des Teils zu verstehen und den Kraftfluss mit ebenen Blechen, Rohren, Profilen und Rippen aufzubauen. Anschlussflächen, Lagerbohrungen und Einbaumaße bleiben; die Form dazwischen wird frei neu gestaltet.</p>
<h2>Technische Punkte</h2>
<ul>
<li><strong>Bearbeitungszugabe:</strong> Lager- und Passflächen werden nach dem Schweißen bearbeitet. Ausreichende Zugabe und Bezugsflächen gehören von Anfang an in die Konstruktion (siehe <a href="kaynak-sonrasi-talasli-isleme.html">Bearbeitung nach dem Schweißen</a>).</li>
<li><strong>Spannungsarmglühen:</strong> Bei präzise zu bearbeitenden Gehäusen können Eigenspannungen nach der Bearbeitung Verzug verursachen. Das Glühen wird mit Partnern geplant (siehe <a href="kaynak-sonrasi-isil-islem-pwht.html">Wärmebehandlung nach dem Schweißen</a>).</li>
<li><strong>Ermüdung:</strong> Bei zyklisch belasteten Teilen zählen Lage und Detail der Nähte; Nähte gehören nicht in hochbeanspruchte Bereiche (siehe <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">Ermüdung</a>).</li>
<li><strong>Dämpfung:</strong> Ist Schwingung kritisch, kommen Innenrippen, geschlossene Kastenquerschnitte oder lokale Füllstoffe in Frage.</li>
</ul>
<h2>Schritte zum Umstieg</h2>
<ol>
<li>Funktion, Lasten und kritische Maße des Gussteils festlegen.</li>
<li>Schweißkonstruktion entwerfen und bei Bedarf rechnerisch nachweisen.</li>
<li>Prototyp fertigen und bearbeiten, in Montage und Einsatz erproben.</li>
<li>Kosten, Gewicht und Lieferzeit mit dem Guss vergleichen.</li>
<li>Nach Freigabe in Serie gehen und die Zeichnung unter Revisionskontrolle stellen.</li>
</ol>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei der Umstellung von Gussteilen auf Schweißkonstruktionen arbeiten wir mit der Konstruktion des Kunden an der Fertigbarkeit und übernehmen Prototyp- und Serienfertigung. Mechanische Bearbeitung und Spannungsarmglühen koordinieren wir mit unseren Partnern. <a href="../makine-sasesi-imalati.html">Maschinenrahmen und Gehäuse →</a></p></div>
`,
    faq: [
      ['Kann ein Gussteil durch eine Schweißkonstruktion ersetzt werden?', 'Die meisten Maschinengehäuse, Konsolen und Arme ja; Teile mit komplexen Innenkanälen oder hohem Dämpfungsbedarf bleiben meist Guss.'],
      ['Ist eine Schweißkonstruktion günstiger als Guss?', 'Bei kleinen und mittleren Stückzahlen, großen Teilen und wechselnden Konstruktionen meist ja, da keine Modellkosten anfallen.'],
      ['Ist ein geschweißtes Gehäuse leichter als Guss?', 'Meist ja; lastgerechte Querschnitte erreichen dieselbe Steifigkeit mit weniger Material.'],
      ['Wie vermeidet man Verzug am geschweißten Gehäuse?', 'Durch richtige Schweißfolge, Vorrichtungen, bei Bedarf Spannungsarmglühen und ausreichende Bearbeitungszugabe.']
    ],
    cta_h3: 'Gussteil auf Schweißkonstruktion umstellen?',
    cta_p: 'Senden Sie die Gusszeichnung und die Jahresmenge; wir bewerten die geschweißte Alternative gemeinsam.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Construcción soldada en lugar de fundición: cuándo conviene y cómo hacer el cambio',
    meta: 'Convertir una pieza fundida en construcción soldada: comparación de coste de modelo, volumen, peso, rigidez, amortiguamiento y plazo; rediseño en lugar de copia, alivio de tensiones, sobreespesor de mecanizado y puntos clave del cambio.',
    og: 'Soldadura en lugar de fundición',
    tag: 'Compras · Diseño',
    h1: 'Construcción soldada en lugar de fundición: cuándo conviene y cómo hacer el cambio',
    crumb: 'Soldadura en lugar de fundición',
    read: '7 min de lectura',
    body: `
<p>Las carcasas de máquinas, cajas de rodamientos, brazos de prensa y grandes consolas se han fabricado tradicionalmente por fundición. Pero en volúmenes bajos, tamaños grandes o productos cuyo diseño cambia a menudo, el coste del modelo y los largos plazos de fundición pesan. Una construcción soldada a partir de chapas de acero es aquí una alternativa sólida. No toda pieza fundida debe convertirse; la decisión se apoya en unos pocos criterios.</p>
<h2>Comparación</h2>
<table>
<thead><tr><th>Criterio</th><th>Fundición</th><th>Construcción soldada</th></tr></thead>
<tbody>
<tr><td>Coste inicial</td><td>Requiere modelo y moldes</td><td>Sin moldes, basta un utillaje sencillo</td></tr>
<tr><td>Volumen adecuado</td><td>Series medias y altas</td><td>De pieza única a serie media</td></tr>
<tr><td>Cambios de diseño</td><td>Exigen modificar el modelo</td><td>Se aplican rápido con una revisión de plano</td></tr>
<tr><td>Peso</td><td>Espesores de pared poco reducibles</td><td>Secciones optimizadas a la carga, normalmente más ligera</td></tr>
<tr><td>Rigidez</td><td>Alta en acero fundido, módulo menor en fundición gris</td><td>Alto módulo del acero</td></tr>
<tr><td>Amortiguamiento</td><td>Fundición gris (grafito laminar) excelente</td><td>Menor; mejorable con nervios y relleno</td></tr>
<tr><td>Cavidades internas complejas</td><td>Fáciles con machos</td><td>Difíciles o hay que dividir la pieza</td></tr>
</tbody>
</table>
<h2>¿Cuándo conviene el cambio?</h2>
<ul>
<li>Cuando el volumen anual es bajo y el coste del modelo pesa mucho por pieza.</li>
<li>Cuando la pieza es grande y fundirla de una sola vez es difícil o caro.</li>
<li>Cuando el diseño aún evoluciona y se esperan revisiones frecuentes.</li>
<li>Cuando el suministro de fundición tiene problemas de plazo o calidad (porosidad, rechupes, desviaciones dimensionales).</li>
<li>Cuando hay un objetivo de reducción de peso.</li>
</ul>
<p>En cambio, bancadas de máquina herramienta de precisión que requieren gran amortiguamiento, carcasas de bomba con canales internos complejos o piezas pequeñas de muy alto volumen suelen seguir en fundición.</p>
<h2>No copie, rediseñe</h2>
<p>El error más común es imitar la geometría fundida uno a uno con chapa. La fundición tiene superficies curvas, espesores variables y transiciones redondeadas; copiarlas soldando es caro e innecesario. Lo correcto es entender la función de la pieza y construir el camino de cargas con chapas planas, tubos, perfiles y nervios. Se mantienen caras de unión, alojamientos de rodamientos y cotas de montaje; la forma intermedia se rediseña libremente.</p>
<h2>Puntos técnicos</h2>
<ul>
<li><strong>Sobreespesor de mecanizado:</strong> las caras de apoyo y alojamientos se mecanizan tras soldar. El sobreespesor y las superficies de referencia deben definirse desde el principio (ver <a href="kaynak-sonrasi-talasli-isleme.html">mecanizado tras la soldadura</a>).</li>
<li><strong>Alivio de tensiones:</strong> en carcasas que se mecanizarán con precisión, las tensiones residuales pueden provocar deformación tras el mecanizado. El recocido se planifica con socios (ver <a href="kaynak-sonrasi-isil-islem-pwht.html">tratamiento térmico posterior</a>).</li>
<li><strong>Fatiga:</strong> en piezas con carga cíclica importan la posición y el detalle de los cordones; deben alejarse de las zonas de alta tensión (ver <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">fatiga</a>).</li>
<li><strong>Amortiguamiento:</strong> si la vibración es crítica, se valoran nervios internos, secciones cajón cerradas o relleno local.</li>
</ul>
<h2>Pasos del cambio</h2>
<ol>
<li>Definir función, cargas y cotas críticas de la pieza fundida.</li>
<li>Preparar el diseño soldado y verificarlo por cálculo si hace falta.</li>
<li>Fabricar y mecanizar un prototipo, probarlo en montaje y en campo.</li>
<li>Comparar coste, peso y plazo con la fundición.</li>
<li>Tras la aprobación, pasar a serie y poner el plano bajo control de revisiones.</li>
</ol>
<div class="callout"><p><strong>En ArmaWeld:</strong> en la conversión de piezas fundidas a construcción soldada trabajamos con el equipo de diseño del cliente en la fabricabilidad y realizamos la fabricación soldada de prototipos y series. Coordinamos el mecanizado y el recocido de alivio de tensiones con nuestros socios. <a href="../makine-sasesi-imalati.html">Bastidores y carcasas de máquina →</a></p></div>
`,
    faq: [
      ['¿Se puede convertir una pieza fundida en soldada?', 'La mayoría de carcasas, consolas y brazos sí; las piezas con canales internos complejos o gran necesidad de amortiguamiento suelen seguir fundidas.'],
      ['¿Es la construcción soldada más barata que la fundición?', 'En volúmenes bajos y medios, piezas grandes y diseños cambiantes suele serlo, al no haber coste de modelo.'],
      ['¿Una carcasa soldada es más ligera que una fundida?', 'Normalmente sí; las secciones se eligen según la carga y se alcanza la misma rigidez con menos material.'],
      ['¿Cómo se evita la deformación en una carcasa soldada?', 'Con la secuencia de soldadura correcta, utillajes, alivio de tensiones cuando haga falta y sobreespesor suficiente.']
    ],
    cta_h3: '¿Quiere pasar una pieza fundida a soldada?',
    cta_p: 'Envíe el plano de la pieza fundida y el volumen anual; valoraremos juntos la alternativa soldada.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Mécanosoudure à la place de la fonderie : quand est-ce pertinent et comment passer ?',
    meta: 'Remplacer une pièce de fonderie par une mécanosoudure : comparaison coût de modèle, volume, poids, rigidité, amortissement et délai ; reconception plutôt que copie, détensionnement, surépaisseur d\'usinage et points de vigilance lors du passage.',
    og: 'Mécanosoudure au lieu de fonderie',
    tag: 'Achats · Conception',
    h1: 'Mécanosoudure à la place de la fonderie : quand est-ce pertinent et comment passer ?',
    crumb: 'Mécanosoudure au lieu de fonderie',
    read: '7 min de lecture',
    body: `
<p>Bâtis de machines, paliers, bras de presse et grandes consoles sont traditionnellement moulés. Mais en petites séries, en grandes dimensions ou pour des produits dont la conception évolue souvent, le coût des modèles et les longs délais de fonderie deviennent pesants. Une structure mécanosoudée à partir de tôles d'acier est alors une alternative solide. Toute pièce de fonderie ne doit pas être convertie pour autant ; la décision repose sur quelques critères.</p>
<h2>Comparaison</h2>
<table>
<thead><tr><th>Critère</th><th>Fonderie</th><th>Mécanosoudure</th></tr></thead>
<tbody>
<tr><td>Coût de démarrage</td><td>Modèle et outillage nécessaires</td><td>Pas d'outillage, un gabarit simple suffit</td></tr>
<tr><td>Volume adapté</td><td>Moyennes et grandes séries</td><td>De la pièce unique à la moyenne série</td></tr>
<tr><td>Modification de conception</td><td>Exige de modifier le modèle</td><td>Appliquée rapidement par révision du plan</td></tr>
<tr><td>Poids</td><td>Épaisseurs de paroi peu réductibles</td><td>Sections optimisées à la charge, souvent plus légère</td></tr>
<tr><td>Rigidité</td><td>Élevée en acier moulé, module plus faible en fonte grise</td><td>Module élevé de l'acier</td></tr>
<tr><td>Amortissement</td><td>Fonte grise (graphite lamellaire) excellente</td><td>Plus faible ; améliorable par nervures et remplissage</td></tr>
<tr><td>Cavités internes complexes</td><td>Faciles avec noyaux</td><td>Difficiles ou pièce à diviser</td></tr>
</tbody>
</table>
<h2>Quand le passage est-il pertinent ?</h2>
<ul>
<li>Quand le volume annuel est faible et que le coût du modèle pèse lourd par pièce.</li>
<li>Quand la pièce est grande et qu'une fonderie monobloc est difficile ou chère.</li>
<li>Quand la conception évolue encore et que des révisions fréquentes sont attendues.</li>
<li>Quand l'approvisionnement en fonderie pose des problèmes de délai ou de qualité (porosités, retassures, écarts dimensionnels).</li>
<li>Quand un objectif d'allègement existe.</li>
</ul>
<p>À l'inverse, les bâtis de machines-outils de précision exigeant un fort amortissement, les corps de pompe à canaux internes complexes ou les petites pièces en très grande série restent généralement en fonderie.</p>
<h2>Ne pas copier, reconcevoir</h2>
<p>L'erreur la plus courante est d'imiter la géométrie moulée à l'identique en tôle. La fonderie a des surfaces courbes, des épaisseurs variables et des raccordements arrondis ; les copier en soudure est coûteux et inutile. La bonne démarche consiste à comprendre la fonction de la pièce et à construire le cheminement des efforts avec des tôles planes, tubes, profilés et nervures. Faces d'interface, alésages de paliers et cotes de montage sont conservés ; la forme intermédiaire est librement repensée.</p>
<h2>Points techniques</h2>
<ul>
<li><strong>Surépaisseur d'usinage :</strong> les portées et faces d'appui sont usinées après soudage. Surépaisseurs et faces de référence doivent être définies dès la conception (voir <a href="kaynak-sonrasi-talasli-isleme.html">usinage après soudage</a>).</li>
<li><strong>Détensionnement :</strong> sur des bâtis usinés avec précision, les contraintes résiduelles peuvent provoquer des déformations après usinage. Le recuit est planifié avec des partenaires (voir <a href="kaynak-sonrasi-isil-islem-pwht.html">traitement thermique après soudage</a>).</li>
<li><strong>Fatigue :</strong> sur les pièces sous charge cyclique, l'emplacement et le détail des cordons comptent ; ils doivent être éloignés des zones fortement sollicitées (voir <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">fatigue</a>).</li>
<li><strong>Amortissement :</strong> si la vibration est critique, on envisage nervures internes, caissons fermés ou remplissage local.</li>
</ul>
<h2>Étapes du passage</h2>
<ol>
<li>Définir la fonction, les charges et les cotes critiques de la pièce moulée.</li>
<li>Concevoir la mécanosoudure et la vérifier par calcul si nécessaire.</li>
<li>Fabriquer et usiner un prototype, l'essayer en montage et sur le terrain.</li>
<li>Comparer coût, poids et délai avec la fonderie.</li>
<li>Après validation, passer en série et placer le plan sous gestion des révisions.</li>
</ol>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> lors de la conversion de pièces de fonderie en mécanosoudure, nous travaillons avec le bureau d'études du client sur la fabricabilité et réalisons la fabrication soudée des prototypes et des séries. Usinage et recuit de détensionnement sont coordonnés avec nos partenaires. <a href="../makine-sasesi-imalati.html">Bâtis et carters de machines →</a></p></div>
`,
    faq: [
      ['Une pièce de fonderie peut-elle devenir une mécanosoudure ?', 'La plupart des bâtis, consoles et bras oui ; les pièces à canaux internes complexes ou à fort besoin d\'amortissement restent en général moulées.'],
      ['La mécanosoudure est-elle moins chère que la fonderie ?', 'En petites et moyennes séries, pour les grandes pièces et les conceptions évolutives, généralement oui, faute de coût de modèle.'],
      ['Un bâti mécanosoudé est-il plus léger qu\'un bâti moulé ?', 'Le plus souvent oui ; les sections sont choisies selon la charge et la même rigidité est atteinte avec moins de matière.'],
      ['Comment éviter la déformation d\'un bâti soudé ?', 'Par une bonne séquence de soudage, des gabarits, un détensionnement si nécessaire et une surépaisseur suffisante.']
    ],
    cta_h3: 'Passer une pièce de fonderie en mécanosoudure ?',
    cta_p: 'Envoyez le plan de la pièce moulée et le volume annuel ; nous évaluerons ensemble l\'alternative soudée.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Carpenteria saldata al posto della fusione: quando conviene e come passare',
    meta: 'Convertire un pezzo fuso in carpenteria saldata: confronto tra costo del modello, volumi, peso, rigidezza, smorzamento e tempi; riprogettare invece di copiare, distensione, sovrametallo di lavorazione e punti di attenzione nel passaggio.',
    og: 'Saldato al posto della fusione',
    tag: 'Acquisti · Progettazione',
    h1: 'Carpenteria saldata al posto della fusione: quando conviene e come passare',
    crumb: 'Saldato al posto della fusione',
    read: '7 min di lettura',
    body: `
<p>Basamenti di macchine, supporti cuscinetti, bracci di pressa e grandi mensole sono tradizionalmente fusi. Ma con volumi bassi, dimensioni grandi o prodotti il cui progetto cambia spesso, il costo dei modelli e i lunghi tempi di fonderia diventano un peso. Una struttura saldata a partire da lamiere d'acciaio è qui un'alternativa solida. Non ogni pezzo fuso va convertito; la decisione si basa su pochi criteri.</p>
<h2>Confronto</h2>
<table>
<thead><tr><th>Criterio</th><th>Fusione</th><th>Carpenteria saldata</th></tr></thead>
<tbody>
<tr><td>Costo iniziale</td><td>Servono modello e attrezzature</td><td>Nessuno stampo, basta un'attrezzatura semplice</td></tr>
<tr><td>Volume adatto</td><td>Serie medie e alte</td><td>Dal pezzo singolo alla media serie</td></tr>
<tr><td>Modifiche di progetto</td><td>Richiedono modifica del modello</td><td>Si applicano rapidamente con una revisione del disegno</td></tr>
<tr><td>Peso</td><td>Spessori di parete poco riducibili</td><td>Sezioni ottimizzate sul carico, di solito più leggera</td></tr>
<tr><td>Rigidezza</td><td>Alta per acciaio fuso, modulo più basso per ghisa grigia</td><td>Alto modulo dell'acciaio</td></tr>
<tr><td>Smorzamento vibrazioni</td><td>Ghisa grigia (grafite lamellare) eccellente</td><td>Inferiore; migliorabile con nervature e riempimento</td></tr>
<tr><td>Cavità interne complesse</td><td>Facili con le anime</td><td>Difficili o pezzo da suddividere</td></tr>
</tbody>
</table>
<h2>Quando conviene il passaggio?</h2>
<ul>
<li>Quando il volume annuo è basso e il costo del modello pesa molto sul singolo pezzo.</li>
<li>Quando il pezzo è grande e una fusione in un solo getto è difficile o costosa.</li>
<li>Quando il progetto è ancora in evoluzione e si prevedono revisioni frequenti.</li>
<li>Quando la fornitura di getti ha problemi di tempi o qualità (porosità, cavità, scostamenti dimensionali).</li>
<li>Quando c'è un obiettivo di riduzione del peso.</li>
</ul>
<p>Al contrario, basamenti di macchine utensili di precisione che richiedono alto smorzamento, corpi pompa con canali interni complessi o piccoli pezzi ad altissimo volume restano di norma in fusione.</p>
<h2>Non copiare, riprogettare</h2>
<p>L'errore più comune è imitare la geometria fusa uno a uno con la lamiera. La fusione ha superfici curve, spessori variabili e raccordi arrotondati; copiarli con la saldatura è costoso e inutile. L'approccio giusto è capire la funzione del pezzo e costruire il percorso dei carichi con lamiere piane, tubi, profili e nervature. Superfici di interfaccia, sedi dei cuscinetti e quote di montaggio restano; la forma intermedia si riprogetta liberamente.</p>
<h2>Punti tecnici</h2>
<ul>
<li><strong>Sovrametallo di lavorazione:</strong> sedi e superfici di accoppiamento si lavorano dopo la saldatura. Sovrametallo e superfici di riferimento vanno definiti fin dal progetto (vedi <a href="kaynak-sonrasi-talasli-isleme.html">lavorazione dopo la saldatura</a>).</li>
<li><strong>Distensione:</strong> nei basamenti da lavorare con precisione, le tensioni residue possono causare deformazioni dopo la lavorazione. La ricottura di distensione si pianifica con i partner (vedi <a href="kaynak-sonrasi-isil-islem-pwht.html">trattamento termico post-saldatura</a>).</li>
<li><strong>Fatica:</strong> nei pezzi a carico ciclico contano posizione e dettaglio dei cordoni; vanno tenuti lontani dalle zone più sollecitate (vedi <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">fatica</a>).</li>
<li><strong>Smorzamento:</strong> se le vibrazioni sono critiche si valutano nervature interne, sezioni scatolate chiuse o riempimenti locali.</li>
</ul>
<h2>Fasi del passaggio</h2>
<ol>
<li>Definire funzione, carichi e quote critiche del pezzo fuso.</li>
<li>Preparare il progetto saldato e verificarlo con il calcolo se necessario.</li>
<li>Costruire e lavorare un prototipo, provarlo in montaggio e sul campo.</li>
<li>Confrontare costo, peso e tempi con la fusione.</li>
<li>Dopo l'approvazione passare alla serie e mettere il disegno sotto controllo delle revisioni.</li>
</ol>
<div class="callout"><p><strong>In ArmaWeld:</strong> nella conversione di pezzi fusi in carpenteria saldata lavoriamo con l'ufficio tecnico del cliente sulla producibilità ed eseguiamo la saldatura di prototipi e serie. Lavorazioni meccaniche e ricottura di distensione sono coordinate con i nostri partner. <a href="../makine-sasesi-imalati.html">Telai e basamenti di macchine →</a></p></div>
`,
    faq: [
      ['Un pezzo fuso può diventare carpenteria saldata?', 'La maggior parte di basamenti, mensole e bracci sì; i pezzi con canali interni complessi o alta esigenza di smorzamento restano in genere fusi.'],
      ['La carpenteria saldata costa meno della fusione?', 'Con volumi bassi e medi, pezzi grandi e progetti che cambiano di solito sì, perché non c\'è costo del modello.'],
      ['Un basamento saldato è più leggero di uno fuso?', 'Di solito sì; le sezioni sono scelte in base al carico e la stessa rigidezza si ottiene con meno materiale.'],
      ['Come si evita la deformazione di un basamento saldato?', 'Con la giusta sequenza di saldatura, attrezzature, distensione quando serve e sovrametallo sufficiente.']
    ],
    cta_h3: 'Volete passare un pezzo fuso a saldato?',
    cta_p: 'Inviate il disegno del getto e il volume annuo; valuteremo insieme l\'alternativa saldata.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Lasconstructie in plaats van gietwerk: wanneer zinvol en hoe stap je over?',
    meta: 'Een gietstuk omzetten naar een lasconstructie: vergelijking van modelkosten, aantallen, gewicht, stijfheid, demping en levertijd; herontwerpen in plaats van kopiëren, spanningsarmgloeien, bewerkingstoeslag en aandachtspunten bij de overstap.',
    og: 'Lasconstructie in plaats van gietwerk',
    tag: 'Inkoop · Ontwerp',
    h1: 'Lasconstructie in plaats van gietwerk: wanneer zinvol en hoe stap je over?',
    crumb: 'Lasconstructie i.p.v. gietwerk',
    read: '7 min lezen',
    body: `
<p>Machinehuizen, lagerblokken, persarmen en grote consoles worden traditioneel gegoten. Bij kleine aantallen, grote afmetingen of producten waarvan het ontwerp vaak verandert, worden modelkosten en lange levertijden van de gieterij echter een last. Een uit staalplaat gelaste constructie is dan een sterk alternatief. Niet elk gietstuk moet worden omgezet; de keuze hangt af van een paar criteria.</p>
<h2>Vergelijking</h2>
<table>
<thead><tr><th>Criterium</th><th>Gietwerk</th><th>Lasconstructie</th></tr></thead>
<tbody>
<tr><td>Aanloopkosten</td><td>Model en vormen nodig</td><td>Geen vormen, eenvoudige mal volstaat</td></tr>
<tr><td>Geschikte aantallen</td><td>Middelgrote en grote series</td><td>Enkelstuk tot middelgrote serie</td></tr>
<tr><td>Ontwerpwijziging</td><td>Vereist modelaanpassing</td><td>Snel door tekeningrevisie</td></tr>
<tr><td>Gewicht</td><td>Wanddiktes beperkt te verkleinen</td><td>Doorsneden afgestemd op belasting, meestal lichter</td></tr>
<tr><td>Stijfheid</td><td>Hoog bij gietstaal, lagere E-modulus bij grijs gietijzer</td><td>Hoge E-modulus van staal</td></tr>
<tr><td>Trillingsdemping</td><td>Grijs gietijzer (lamellair grafiet) uitstekend</td><td>Lager; te verbeteren met ribben en vulling</td></tr>
<tr><td>Complexe inwendige holtes</td><td>Eenvoudig met kernen</td><td>Moeilijk of opsplitsen nodig</td></tr>
</tbody>
</table>
<h2>Wanneer is overstappen zinvol?</h2>
<ul>
<li>Als het jaarvolume laag is en de modelkosten per stuk zwaar wegen.</li>
<li>Als het onderdeel groot is en een gietstuk uit één geheel moeilijk of duur is.</li>
<li>Als het ontwerp nog in ontwikkeling is en vaak wordt gereviseerd.</li>
<li>Als de gietwerklevering problemen kent met levertijd of kwaliteit (porositeit, holtes, maatafwijkingen).</li>
<li>Als er een gewichtsdoel is.</li>
</ul>
<p>Precisiebedden van gereedschapsmachines die veel demping vragen, pomphuizen met complexe inwendige kanalen of kleine onderdelen in zeer grote aantallen blijven daarentegen meestal gegoten.</p>
<h2>Niet kopiëren, herontwerpen</h2>
<p>De meest gemaakte fout is de gietgeometrie één op één in plaat nabootsen. Gietwerk heeft gebogen vlakken, wisselende wanddiktes en afgeronde overgangen; dat met lassen kopiëren is duur en onnodig. Beter is de functie van het onderdeel te begrijpen en het krachtenpad op te bouwen met vlakke platen, buizen, profielen en ribben. Aansluitvlakken, lagerboringen en inbouwmaten blijven; de vorm ertussen wordt vrij herontworpen.</p>
<h2>Technische aandachtspunten</h2>
<ul>
<li><strong>Bewerkingstoeslag:</strong> lager- en pasvlakken worden na het lassen bewerkt. Voldoende toeslag en referentievlakken moeten vanaf het begin in het ontwerp staan (zie <a href="kaynak-sonrasi-talasli-isleme.html">verspanen na het lassen</a>).</li>
<li><strong>Spanningsarmgloeien:</strong> bij nauwkeurig te bewerken huizen kunnen restspanningen na bewerking vervorming geven. Het gloeien wordt met partners gepland (zie <a href="kaynak-sonrasi-isil-islem-pwht.html">warmtebehandeling na het lassen</a>).</li>
<li><strong>Vermoeiing:</strong> bij cyclisch belaste onderdelen tellen plaats en detail van de lassen; houd lassen weg uit hoogbelaste zones (zie <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">vermoeiing</a>).</li>
<li><strong>Demping:</strong> is trilling kritisch, overweeg dan inwendige ribben, gesloten kokerprofielen of lokale vulling.</li>
</ul>
<h2>Stappen bij de overstap</h2>
<ol>
<li>Leg functie, belastingen en kritische maten van het gietstuk vast.</li>
<li>Maak het lasontwerp en verifieer het zo nodig met een berekening.</li>
<li>Bouw en bewerk een prototype en test het in montage en praktijk.</li>
<li>Vergelijk kosten, gewicht en levertijd met het gietstuk.</li>
<li>Ga na vrijgave in serie en breng de tekening onder revisiebeheer.</li>
</ol>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij het omzetten van gietstukken naar lasconstructies werken we met het ontwerpteam van de klant aan maakbaarheid en verzorgen we het laswerk voor prototypes en series. Verspaning en spanningsarmgloeien coördineren we met onze partners. <a href="../makine-sasesi-imalati.html">Machineframes en -huizen →</a></p></div>
`,
    faq: [
      ['Kan een gietstuk worden vervangen door een lasconstructie?', 'De meeste machinehuizen, consoles en armen wel; onderdelen met complexe inwendige kanalen of veel dempingsbehoefte blijven meestal gegoten.'],
      ['Is een lasconstructie goedkoper dan gietwerk?', 'Bij kleine en middelgrote aantallen, grote onderdelen en wisselende ontwerpen meestal wel, omdat er geen modelkosten zijn.'],
      ['Is een gelast huis lichter dan een gegoten huis?', 'Meestal wel; doorsneden worden op de belasting gekozen, zodat dezelfde stijfheid met minder materiaal wordt gehaald.'],
      ['Hoe voorkom je vervorming bij een gelast huis?', 'Met de juiste lasvolgorde, mallen, zo nodig spanningsarmgloeien en voldoende bewerkingstoeslag.']
    ],
    cta_h3: 'Gietstuk omzetten naar lasconstructie?',
    cta_p: 'Stuur de gietstuktekening en het jaarvolume; we beoordelen samen het gelaste alternatief.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Sveisekonstruksjon i stedet for støp: når lønner det seg, og hvordan bytter man?',
    meta: 'Å gjøre en støpt del om til sveisekonstruksjon: sammenligning av modellkostnad, volum, vekt, stivhet, demping og leveringstid; ny konstruksjon i stedet for kopi, spenningsglødning, maskineringstillegg og hva man må passe på ved overgangen.',
    og: 'Sveisekonstruksjon i stedet for støp',
    tag: 'Innkjøp · Konstruksjon',
    h1: 'Sveisekonstruksjon i stedet for støp: når lønner det seg, og hvordan bytter man?',
    crumb: 'Sveis i stedet for støp',
    read: '7 min lesing',
    body: `
<p>Maskinhus, lagerbukker, pressarmer og store konsoller har tradisjonelt vært støpt. Men ved små volumer, store dimensjoner eller produkter der konstruksjonen endres ofte, blir modellkostnader og lange leveringstider fra støperiet en belastning. En konstruksjon sveiset av stålplater er da et sterkt alternativ. Ikke alle støpte deler bør konverteres; valget avhenger av noen få kriterier.</p>
<h2>Sammenligning</h2>
<table>
<thead><tr><th>Kriterium</th><th>Støp</th><th>Sveisekonstruksjon</th></tr></thead>
<tbody>
<tr><td>Oppstartskostnad</td><td>Modell og former kreves</td><td>Ingen former, en enkel fikstur holder</td></tr>
<tr><td>Egnet volum</td><td>Middels og store serier</td><td>Enkeltdel til middels serie</td></tr>
<tr><td>Konstruksjonsendring</td><td>Krever endring av modell</td><td>Gjøres raskt via tegningsrevisjon</td></tr>
<tr><td>Vekt</td><td>Godstykkelse kan bare reduseres et stykke</td><td>Tverrsnitt tilpasset lasten, ofte lettere</td></tr>
<tr><td>Stivhet</td><td>Høy for stålstøp, lavere E-modul for grått støpejern</td><td>Høy E-modul i stål</td></tr>
<tr><td>Vibrasjonsdemping</td><td>Grått støpejern (lamellgrafitt) svært god</td><td>Lavere; kan bedres med ribber og fyll</td></tr>
<tr><td>Komplekse indre hulrom</td><td>Enkelt med kjerner</td><td>Vanskelig, eller delen må deles opp</td></tr>
</tbody>
</table>
<h2>Når lønner det seg å bytte?</h2>
<ul>
<li>Når årsvolumet er lavt og modellkostnaden veier tungt per del.</li>
<li>Når delen er stor og én samlet støp er vanskelig eller dyr.</li>
<li>Når konstruksjonen fortsatt utvikles og hyppige revisjoner er ventet.</li>
<li>Når støpeleveransene har problemer med leveringstid eller kvalitet (porøsitet, hulrom, målavvik).</li>
<li>Når det finnes et mål om lavere vekt.</li>
</ul>
<p>Presisjonsbenker til verktøymaskiner som trenger høy demping, pumpehus med komplekse indre kanaler eller små deler i svært store volumer hører derimot som regel hjemme i støp.</p>
<h2>Ikke kopier, konstruer på nytt</h2>
<p>Den vanligste feilen er å etterligne støpegeometrien én til én i plate. Støp har krumme flater, varierende godstykkelse og avrundede overganger; å kopiere dette med sveis er dyrt og unødvendig. Riktig tilnærming er å forstå delens funksjon og bygge lastveien med plane plater, rør, profiler og ribber. Tilkoblingsflater, lagerboringer og monteringsmål beholdes; formen imellom konstrueres fritt på nytt.</p>
<h2>Tekniske punkter</h2>
<ul>
<li><strong>Maskineringstillegg:</strong> lager- og passflater maskineres etter sveising. Tilstrekkelig tillegg og referanseflater må defineres i konstruksjonen fra start (se <a href="kaynak-sonrasi-talasli-isleme.html">maskinering etter sveising</a>).</li>
<li><strong>Spenningsglødning:</strong> i hus som skal presisjonsmaskineres, kan restspenninger gi deformasjon etter maskinering. Glødningen planlegges med partnere (se <a href="kaynak-sonrasi-isil-islem-pwht.html">varmebehandling etter sveising</a>).</li>
<li><strong>Utmatting:</strong> i deler med syklisk last betyr sveisenes plassering og detaljering mye; hold sveiser unna høyt belastede områder (se <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">utmatting</a>).</li>
<li><strong>Demping:</strong> er vibrasjon kritisk, vurderes indre ribber, lukkede kassetverrsnitt eller lokalt fyllmateriale.</li>
</ul>
<h2>Trinn i overgangen</h2>
<ol>
<li>Fastlegg funksjon, laster og kritiske mål for den støpte delen.</li>
<li>Lag den sveiste konstruksjonen og verifiser med beregning ved behov.</li>
<li>Bygg og maskiner en prototyp, prøv den i montering og i felt.</li>
<li>Sammenlign kostnad, vekt og leveringstid med støpen.</li>
<li>Etter godkjenning: gå over til serie og sett tegningen under revisjonskontroll.</li>
</ol>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> når støpte deler konverteres til sveisekonstruksjoner, jobber vi med kundens konstruktører om produserbarhet og utfører sveiseproduksjonen av prototyper og serier. Maskinering og spenningsglødning koordinerer vi med våre partnere. <a href="../makine-sasesi-imalati.html">Maskinrammer og maskinhus →</a></p></div>
`,
    faq: [
      ['Kan en støpt del erstattes av en sveisekonstruksjon?', 'De fleste maskinhus, konsoller og armer kan det; deler med komplekse indre kanaler eller stort dempebehov forblir som regel støpt.'],
      ['Er en sveisekonstruksjon billigere enn støp?', 'Ved små og middels volumer, store deler og skiftende konstruksjoner som regel ja, siden det ikke er modellkostnader.'],
      ['Er et sveiset hus lettere enn et støpt?', 'Som regel ja; tverrsnitt velges etter lasten, slik at samme stivhet oppnås med mindre materiale.'],
      ['Hvordan unngår man deformasjon i et sveiset hus?', 'Med riktig sveiserekkefølge, fiksturer, spenningsglødning ved behov og tilstrekkelig maskineringstillegg.']
    ],
    cta_h3: 'Vil du gjøre en støpt del om til sveisekonstruksjon?',
    cta_p: 'Send støpetegningen og årsvolumet; vi vurderer det sveiste alternativet sammen.',
    cta_btn: 'Be om tilbud →'
  }
};
