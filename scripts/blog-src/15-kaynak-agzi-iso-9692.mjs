export default {
  order: 15,
  slug: 'kaynak-agzi-hazirligi-iso-9692-1',
  key: 'p15_groove',
  date: '2026-02-11',
  keywords: 'kaynak ağzı, kaynak ağzı açısı, ISO 9692-1, V ağzı, X ağzı, U ağzı, kök aralığı, kök yüksekliği, pah açma, weld joint preparation, Schweißnahtvorbereitung, Fugenform',
  related: ['wps-nedir', 'saw-tozalti-kaynagi', 'kaynak-sembolizasyonu', 'lazer-plazma-kesim'],
  tr: {
    title: 'Kaynak Ağzı Hazırlığı: ISO 9692-1 ile V, X, U ve Pah Ağızları',
    meta: 'Kaynak ağzı nasıl seçilir? ISO 9692-1 ağız tipleri, açı, kök aralığı ve kök yüksekliği, sac kalınlığına göre V, X, Y ve U ağzı, kaynak metali hacmi ve ağız hazırlığında sık yapılan hatalar.',
    og: 'Kaynak Ağzı Hazırlığı: ISO 9692-1',
    tag: 'Tasarım · Hazırlık',
    h1: 'Kaynak Ağzı Hazırlığı: ISO 9692-1 ile V, X, U ve Pah Ağızları',
    crumb: 'Kaynak Ağzı',
    read: '6 dk okuma',
    body: `
<p>Alın kaynağının kalitesi, ark yanmadan önce belirlenir. Kaynak ağzının geometrisi; nüfuziyeti, kaynak metali miktarını, paso sayısını, çarpılmayı ve kusur riskini doğrudan etkiler. Çelikler için önerilen ağız tiplerini <strong>EN ISO 9692-1</strong> tanımlar. Tozaltı kaynağı için ISO 9692-2, alüminyum için ISO 9692-3 geçerlidir.</p>
<h2>Ağzı Tanımlayan Ölçüler</h2>
<ul>
<li><strong>Ağız açısı (α):</strong> İki pah yüzeyi arasındaki toplam açı.</li>
<li><strong>Pah açısı (β):</strong> Tek bir parçanın pah açısı; tek taraflı pah ağızlarında ve U ağzında kullanılır.</li>
<li><strong>Kök aralığı (b):</strong> İki parça arasındaki boşluk. Kök nüfuziyetini sağlar.</li>
<li><strong>Kök yüksekliği (c):</strong> Pahsız kalan alın yüzeyi. Delinmeyi önler.</li>
<li><strong>Kök yarıçapı (r):</strong> U ve J ağızlarında tabandaki yarıçap.</li>
</ul>
<h2>Sık Kullanılan Ağız Tipleri</h2>
<table class="data-table"><thead><tr><th>Ağız</th><th>Tipik kalınlık</th><th>Tipik geometri</th><th>Not</th></tr></thead><tbody>
<tr><td>I (düz alın)</td><td>İnce saclar, yaklaşık 4 mm'ye kadar tek taraftan</td><td>Pahsız, aralıklı</td><td>Hazırlık en ucuz; kalınlık arttıkça nüfuziyet yetmez</td></tr>
<tr><td>V</td><td>Yaklaşık 3-20 mm</td><td>α 40-60°, b 0-4 mm, c 0-2 mm</td><td>Tek taraftan kaynak; kalınlık arttıkça çarpılma artar</td></tr>
<tr><td>Y (geniş köklü V)</td><td>Yaklaşık 5-40 mm</td><td>α ≈ 60°, c 2-4 mm</td><td>Kök yüksekliği, karşı taraftan kaynakta veya tozaltında avantaj</td></tr>
<tr><td>X (çift V)</td><td>Yaklaşık 10 mm üzeri</td><td>α 40-60°, her iki tarafa pah</td><td>V'ye göre yaklaşık yarı kaynak metali, dengeli çarpılma</td></tr>
<tr><td>U / çift U</td><td>Kalın saclar, yaklaşık 20-30 mm üzeri</td><td>β 8-12°, r 6-9 mm</td><td>Hazırlığı pahalı, kaynak metali en az</td></tr>
<tr><td>Tek taraflı pah (HV) / K</td><td>T ve köşe birleşimleri</td><td>β 35-60°</td><td>Tam nüfuziyetli T birleşimleri için</td></tr>
</tbody></table>
<p>Tablodaki değerler yol göstericidir. Kesin geometri, onaylı WPS'te ve çizimde yer almalıdır.</p>
<h2>Kaynak Metali Hacmi Neden Önemli?</h2>
<p>20 mm'lik bir sacda 60° V ağzı yerine simetrik X ağzı seçmek, doldurulacak kesit alanını yaklaşık yarıya indirir. Bu, daha az tel, daha az paso ve daha az ısı girdisi demektir. Simetrik pasolar sayesinde açısal çarpılma da dengelenir. Daha kalın saclarda U ağzı, V'ye göre kesiti belirgin şekilde küçültür; ancak talaşlı işlem gerektirdiği için hazırlık maliyeti yükselir. Seçim, sac kalınlığı, adet ve parçanın çevrilebilir olup olmamasına göre yapılır.</p>
<h2>Kök Tarafı: Altlık, Karşı Oyma ve Tek Taraflı Kaynak</h2>
<ul>
<li><strong>Seramik veya çelik altlık:</strong> Arka taraf erişilemiyorsa kökün düzgün oluşmasını sağlar. Kalıcı çelik altlık, yorulma açısından çentik oluşturabileceği için çizimde onaylanmalıdır.</li>
<li><strong>Karşı oyma (back gouging):</strong> Çift taraflı kaynakta ilk taraftan sonra kök, karbon arkla veya taşlamayla sağlam metale kadar açılır ve karşı taraftan kaynak yapılır.</li>
<li><strong>Tek taraflı tam nüfuziyet:</strong> Kök aralığı ve kök yüksekliğinin çok dar toleransla tutulması gerekir; aksi halde delinme veya eksik nüfuziyet oluşur.</li>
</ul>
<h2>Tozaltı Kaynağında Ağız</h2>
<p>Tozaltı kaynağının derin nüfuziyeti sayesinde daha büyük kök yüksekliği ve daha dar ağız açısı kullanılabilir. Bazı kalınlıklarda pahsız çift taraflı kaynak bile mümkündür. Bu yüzden elle MAG için hazırlanmış bir ağız, tozaltında gereksiz fazla kaynak metali anlamına gelebilir. ISO 9692-2 bu yöntem için ayrı öneriler verir.</p>
<h2>Ağız Hazırlığında Sık Hatalar</h2>
<ol>
<li><strong>Kök aralığının değişken olması:</strong> Puntalamadan önce aralık kontrol edilmezse dikiş boyunca nüfuziyet değişir.</li>
<li><strong>Kenar kaçıklığı:</strong> İki parça yüzeyinin aynı hizada olmaması; ISO 5817 bu kaçıklığı kalite seviyesine göre sınırlar.</li>
<li><strong>Kesim yüzeyinde oksit ve cüruf:</strong> Termal kesimde oluşan oksit tabakası taşlanmazsa gözenek ve ergime eksikliği riski artar.</li>
<li><strong>Çizimde ağız bilgisinin olmaması:</strong> Sadece "tam nüfuziyet" yazılması, ağzın kim tarafından ve nasıl seçileceğini belirsiz bırakır.</li>
</ol>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Kaynak ağzı geometrisini uygulanacak WPS ile karşılaştırır, puntalama öncesinde kök aralığını ve kaçıklığı kontrol ederiz. Kesim ve pah açma işlerini çözüm ortaklarımızla koordine eder, gelen parçaların ağız ölçülerini kaynaktan önce doğrularız. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['V ağzı açısı kaç derece olmalı?', 'ISO 9692-1’de V ağzı için toplam açı genellikle 40-60° aralığındadır. Kesin değer yönteme, kalınlığa ve onaylı WPS’e göre belirlenir.'],
      ['X ağzı ne zaman tercih edilir?', 'Yaklaşık 10 mm üzerindeki saclarda, parça çevrilebiliyorsa. X ağzı V’ye göre yaklaşık yarı kaynak metali gerektirir ve çarpılmayı dengeler.'],
      ['Kök yüksekliği ne işe yarar?', 'Pahsız kalan alın yüzeyi kökte delinmeyi önler ve özellikle tozaltı veya çift taraflı kaynakta ağzın daha kararlı dolmasını sağlar.'],
      ['ISO 9692-1 hangi yöntemleri kapsar?', 'Elektrot, gazaltı, TIG ve benzeri yöntemlerle çeliklerin kaynağını kapsar. Tozaltı için ISO 9692-2, alüminyum için ISO 9692-3 kullanılır.']
    ],
    cta_h3: 'Kalın saclı alın kaynaklarınız için doğru ağız',
    cta_p: 'Çiziminizi gönderin; ağız geometrisini kaynak yöntemiyle birlikte değerlendirip teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Weld Joint Preparation: V, X, U and Bevel Grooves to ISO 9692-1',
    meta: 'How to choose a weld groove: ISO 9692-1 joint types, groove angle, root gap and root face, V, X, Y and U preparations by plate thickness, weld metal volume and common preparation mistakes.',
    og: 'Weld Joint Preparation: ISO 9692-1',
    tag: 'Design · Preparation',
    h1: 'Weld Joint Preparation: V, X, U and Bevel Grooves to ISO 9692-1',
    crumb: 'Joint Preparation',
    read: '6 min read',
    body: `
<p>The quality of a butt weld is decided before the arc is struck. Groove geometry directly affects penetration, weld metal volume, number of runs, distortion and the risk of defects. Recommended joint preparations for steels are defined in <strong>EN ISO 9692-1</strong>. ISO 9692-2 covers submerged arc welding and ISO 9692-3 aluminium.</p>
<h2>Dimensions That Define a Groove</h2>
<ul>
<li><strong>Groove angle (α):</strong> total included angle between the two bevel faces.</li>
<li><strong>Bevel angle (β):</strong> bevel angle on one part; used for single-bevel and U preparations.</li>
<li><strong>Root gap (b):</strong> gap between the parts, providing root penetration.</li>
<li><strong>Root face (c):</strong> unbevelled land that prevents burn-through.</li>
<li><strong>Root radius (r):</strong> radius at the bottom of U and J grooves.</li>
</ul>
<h2>Common Preparations</h2>
<table class="data-table"><thead><tr><th>Groove</th><th>Typical thickness</th><th>Typical geometry</th><th>Note</th></tr></thead><tbody>
<tr><td>I (square butt)</td><td>Thin plate, up to about 4 mm from one side</td><td>No bevel, with gap</td><td>Cheapest preparation; penetration runs out as thickness grows</td></tr>
<tr><td>V</td><td>About 3-20 mm</td><td>α 40-60°, b 0-4 mm, c 0-2 mm</td><td>Welded from one side; distortion grows with thickness</td></tr>
<tr><td>Y (V with broad root face)</td><td>About 5-40 mm</td><td>α ≈ 60°, c 2-4 mm</td><td>Root face helps with back welding or SAW</td></tr>
<tr><td>X (double V)</td><td>Above about 10 mm</td><td>α 40-60°, bevelled both sides</td><td>About half the weld metal of a V, balanced distortion</td></tr>
<tr><td>U / double U</td><td>Thick plate, above about 20-30 mm</td><td>β 8-12°, r 6-9 mm</td><td>Expensive preparation, least weld metal</td></tr>
<tr><td>Single bevel (HV) / K</td><td>T and corner joints</td><td>β 35-60°</td><td>For full-penetration T joints</td></tr>
</tbody></table>
<p>The values are guidance. The exact geometry belongs in the approved WPS and on the drawing.</p>
<h2>Why Weld Metal Volume Matters</h2>
<p>On 20 mm plate, choosing a symmetric X instead of a 60° V roughly halves the cross-section to fill. That means less wire, fewer runs and less heat input, and symmetric runs balance angular distortion. On thicker plate a U groove cuts the cross-section significantly compared with a V, but needs machining, so preparation costs more. The choice depends on thickness, quantity and whether the part can be turned.</p>
<h2>The Root Side: Backing, Back Gouging and One-Sided Welding</h2>
<ul>
<li><strong>Ceramic or steel backing:</strong> forms a sound root when the back is not accessible. Permanent steel backing can act as a notch for fatigue and should be approved on the drawing.</li>
<li><strong>Back gouging:</strong> in two-sided welding, after the first side the root is opened to sound metal by carbon arc or grinding and welded from the other side.</li>
<li><strong>One-sided full penetration:</strong> root gap and root face must be held to tight tolerances, otherwise burn-through or lack of penetration follows.</li>
</ul>
<h2>Grooves for Submerged Arc Welding</h2>
<p>The deep penetration of SAW allows a larger root face and narrower groove angle. For some thicknesses even unbevelled two-sided welding is possible. A groove prepared for manual MAG can therefore mean unnecessary weld metal under SAW. ISO 9692-2 gives separate recommendations for this process.</p>
<h2>Common Preparation Mistakes</h2>
<ol>
<li><strong>Varying root gap:</strong> if the gap is not checked before tacking, penetration varies along the seam.</li>
<li><strong>Linear misalignment:</strong> the two surfaces are not flush; ISO 5817 limits this by quality level.</li>
<li><strong>Oxide and dross on cut faces:</strong> if the oxide layer from thermal cutting is not ground off, porosity and lack of fusion become more likely.</li>
<li><strong>No groove details on the drawing:</strong> writing only "full penetration" leaves open who chooses the groove and how.</li>
</ol>
<div class="callout"><p><strong>At ArmaWeld:</strong> we compare groove geometry with the WPS to be applied and check root gap and misalignment before tacking. We coordinate cutting and bevelling with our partners and verify the groove dimensions of incoming parts before welding. <a href="../cizime-gore-imalat.html">Build-to-print fabrication →</a></p></div>
`,
    faq: [
      ['What should the V groove angle be?', 'In ISO 9692-1 the included angle of a V groove is usually 40-60°. The exact value depends on process, thickness and the approved WPS.'],
      ['When is an X groove preferred?', 'On plate above about 10 mm when the part can be turned. An X groove needs about half the weld metal of a V and balances distortion.'],
      ['What is the root face for?', 'The unbevelled land prevents burn-through at the root and gives a more stable fill, especially in SAW or two-sided welding.'],
      ['Which processes does ISO 9692-1 cover?', 'Manual metal arc, gas-shielded, TIG and similar processes on steels. ISO 9692-2 covers SAW and ISO 9692-3 aluminium.']
    ],
    cta_h3: 'The right groove for your thick-plate butt welds',
    cta_p: 'Send your drawing; we will assess groove geometry together with the welding process and prepare a quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Schweißnahtvorbereitung: V-, X-, U- und HV-Fugen nach ISO 9692-1',
    meta: 'Wie wählt man die Fugenform? Fugenarten nach ISO 9692-1, Öffnungswinkel, Spalt und Steghöhe, V-, X-, Y- und U-Naht nach Blechdicke, Schweißgutvolumen und typische Fehler bei der Nahtvorbereitung.',
    og: 'Schweißnahtvorbereitung nach ISO 9692-1',
    tag: 'Konstruktion · Vorbereitung',
    h1: 'Schweißnahtvorbereitung: V-, X-, U- und HV-Fugen nach ISO 9692-1',
    crumb: 'Nahtvorbereitung',
    read: '6 Min. Lesezeit',
    body: `
<p>Die Qualität einer Stumpfnaht entscheidet sich, bevor der Lichtbogen brennt. Die Fugengeometrie bestimmt Einbrand, Schweißgutmenge, Lagenzahl, Verzug und Fehlerrisiko. Empfohlene Fugenformen für Stahl definiert <strong>DIN EN ISO 9692-1</strong>. Für das UP-Schweißen gilt ISO 9692-2, für Aluminium ISO 9692-3.</p>
<h2>Maße der Fuge</h2>
<ul>
<li><strong>Öffnungswinkel (α):</strong> Gesamtwinkel zwischen beiden Fugenflanken.</li>
<li><strong>Flankenwinkel (β):</strong> Winkel an einem Teil; bei HV- und U-Fugen verwendet.</li>
<li><strong>Spalt (b):</strong> Abstand zwischen den Teilen, sorgt für Wurzeldurchschweißung.</li>
<li><strong>Steghöhe (c):</strong> nicht angefaster Steg, verhindert Durchfallen.</li>
<li><strong>Radius (r):</strong> Grundradius bei U- und J-Fugen.</li>
</ul>
<h2>Gängige Fugenformen</h2>
<table class="data-table"><thead><tr><th>Fuge</th><th>Typische Dicke</th><th>Typische Geometrie</th><th>Hinweis</th></tr></thead><tbody>
<tr><td>I-Naht</td><td>Dünnblech, einseitig bis etwa 4 mm</td><td>Ohne Fase, mit Spalt</td><td>Günstigste Vorbereitung; bei größerer Dicke reicht der Einbrand nicht</td></tr>
<tr><td>V-Naht</td><td>Etwa 3-20 mm</td><td>α 40-60°, b 0-4 mm, c 0-2 mm</td><td>Einseitig geschweißt; Verzug steigt mit der Dicke</td></tr>
<tr><td>Y-Naht</td><td>Etwa 5-40 mm</td><td>α ≈ 60°, c 2-4 mm</td><td>Steg vorteilhaft bei Gegenlage oder UP</td></tr>
<tr><td>X-Naht (DV)</td><td>Ab etwa 10 mm</td><td>α 40-60°, beidseitig angefast</td><td>Etwa halbes Schweißgut gegenüber V, ausgeglichener Verzug</td></tr>
<tr><td>U- / DU-Naht</td><td>Dickbleche ab etwa 20-30 mm</td><td>β 8-12°, r 6-9 mm</td><td>Teure Vorbereitung, geringstes Schweißgut</td></tr>
<tr><td>HV- / K-Naht</td><td>T- und Eckstöße</td><td>β 35-60°</td><td>Für durchgeschweißte T-Stöße</td></tr>
</tbody></table>
<p>Die Werte sind Richtwerte. Die genaue Geometrie gehört in die freigegebene WPS und in die Zeichnung.</p>
<h2>Warum das Schweißgutvolumen zählt</h2>
<p>Bei 20 mm Blech halbiert eine symmetrische X-Naht statt einer 60°-V-Naht etwa den zu füllenden Querschnitt. Das bedeutet weniger Draht, weniger Lagen und weniger Wärmeeintrag; symmetrische Lagen gleichen den Winkelverzug aus. Bei dickeren Blechen verkleinert eine U-Naht den Querschnitt deutlich, erfordert aber spanende Bearbeitung und damit höhere Vorbereitungskosten. Die Wahl hängt von Dicke, Stückzahl und Wendbarkeit des Bauteils ab.</p>
<h2>Wurzelseite: Badsicherung, Ausfugen und einseitiges Schweißen</h2>
<ul>
<li><strong>Keramische oder stählerne Badsicherung:</strong> sorgt für eine saubere Wurzel, wenn die Rückseite unzugänglich ist. Verbleibende Stahlunterlagen können bei Ermüdung als Kerbe wirken und sollten in der Zeichnung freigegeben sein.</li>
<li><strong>Ausfugen:</strong> Beim beidseitigen Schweißen wird nach der ersten Seite die Wurzel mit Kohlelichtbogen oder Schleifen bis auf gesundes Metall geöffnet und gegengeschweißt.</li>
<li><strong>Einseitiges Durchschweißen:</strong> Spalt und Steg müssen eng toleriert sein, sonst drohen Durchfallen oder ungenügende Durchschweißung.</li>
</ul>
<h2>Fugen für das UP-Schweißen</h2>
<p>Dank des tiefen Einbrands erlaubt das UP-Schweißen größere Stege und kleinere Öffnungswinkel. Bei manchen Dicken ist sogar beidseitiges Schweißen ohne Fase möglich. Eine für Hand-MAG vorbereitete Fuge bedeutet beim UP-Schweißen daher oft unnötiges Schweißgut. ISO 9692-2 enthält eigene Empfehlungen.</p>
<h2>Typische Fehler</h2>
<ol>
<li><strong>Schwankender Spalt:</strong> Wird er vor dem Heften nicht geprüft, schwankt der Einbrand entlang der Naht.</li>
<li><strong>Kantenversatz:</strong> Die Oberflächen liegen nicht bündig; ISO 5817 begrenzt den Versatz je nach Bewertungsgruppe.</li>
<li><strong>Oxid und Schlacke an Schnittflächen:</strong> Wird die Oxidschicht vom thermischen Schneiden nicht abgeschliffen, steigt das Risiko von Poren und Bindefehlern.</li>
<li><strong>Keine Fugenangabe in der Zeichnung:</strong> Nur „durchgeschweißt" lässt offen, wer die Fuge wie festlegt.</li>
</ol>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Wir gleichen die Fugengeometrie mit der anzuwendenden WPS ab und prüfen Spalt und Versatz vor dem Heften. Schneiden und Anfasen koordinieren wir mit unseren Partnern und kontrollieren die Fugenmaße angelieferter Teile vor dem Schweißen. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Welcher Öffnungswinkel gilt für die V-Naht?', 'Nach ISO 9692-1 liegt der Öffnungswinkel meist bei 40-60°. Der genaue Wert hängt von Verfahren, Dicke und freigegebener WPS ab.'],
      ['Wann ist eine X-Naht sinnvoll?', 'Bei Blechen ab etwa 10 mm, wenn das Bauteil gewendet werden kann. Sie braucht etwa halb so viel Schweißgut wie eine V-Naht und gleicht den Verzug aus.'],
      ['Wozu dient die Steghöhe?', 'Der nicht angefaste Steg verhindert das Durchfallen an der Wurzel und ermöglicht ein stabileres Füllen, besonders beim UP- oder beidseitigen Schweißen.'],
      ['Welche Verfahren deckt ISO 9692-1 ab?', 'Lichtbogenhand-, Schutzgas-, WIG- und ähnliche Verfahren an Stahl. Für UP gilt ISO 9692-2, für Aluminium ISO 9692-3.']
    ],
    cta_h3: 'Die richtige Fuge für Ihre Dickblech-Stumpfnähte',
    cta_p: 'Senden Sie Ihre Zeichnung; wir bewerten die Fugengeometrie mit dem Schweißverfahren und erstellen ein Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Preparación de bordes para soldadura: chaflanes V, X, U y en bisel según ISO 9692-1',
    meta: 'Cómo elegir el chaflán: tipos de preparación ISO 9692-1, ángulo, separación de raíz y talón, preparación en V, X, Y y U según espesor, volumen de metal aportado y errores frecuentes.',
    og: 'Preparación de bordes: ISO 9692-1',
    tag: 'Diseño · Preparación',
    h1: 'Preparación de bordes: chaflanes V, X, U y en bisel según ISO 9692-1',
    crumb: 'Preparación de bordes',
    read: '6 min de lectura',
    body: `
<p>La calidad de una soldadura a tope se decide antes de cebar el arco. La geometría del chaflán influye directamente en la penetración, el metal aportado, el número de pasadas, la distorsión y el riesgo de defectos. Las preparaciones recomendadas para aceros están en la <strong>EN ISO 9692-1</strong>. La ISO 9692-2 trata el arco sumergido y la ISO 9692-3 el aluminio.</p>
<h2>Dimensiones del chaflán</h2>
<ul>
<li><strong>Ángulo del chaflán (α):</strong> ángulo total entre ambas caras.</li>
<li><strong>Ángulo de bisel (β):</strong> ángulo en una sola pieza; en preparaciones en bisel y en U.</li>
<li><strong>Separación de raíz (b):</strong> hueco entre piezas que permite la penetración.</li>
<li><strong>Talón (c):</strong> cara recta sin biselar que evita perforaciones.</li>
<li><strong>Radio (r):</strong> radio del fondo en chaflanes U y J.</li>
</ul>
<h2>Preparaciones habituales</h2>
<table class="data-table"><thead><tr><th>Chaflán</th><th>Espesor típico</th><th>Geometría típica</th><th>Nota</th></tr></thead><tbody>
<tr><td>I (bordes rectos)</td><td>Chapa fina, hasta unos 4 mm por un lado</td><td>Sin bisel, con separación</td><td>Preparación más barata; la penetración no alcanza al crecer el espesor</td></tr>
<tr><td>V</td><td>Unos 3-20 mm</td><td>α 40-60°, b 0-4 mm, c 0-2 mm</td><td>Por un lado; la distorsión crece con el espesor</td></tr>
<tr><td>Y (V con talón ancho)</td><td>Unos 5-40 mm</td><td>α ≈ 60°, c 2-4 mm</td><td>El talón ayuda con resoldadura o arco sumergido</td></tr>
<tr><td>X (doble V)</td><td>Por encima de unos 10 mm</td><td>α 40-60°, biselado por ambos lados</td><td>Aprox. la mitad de metal que una V, distorsión equilibrada</td></tr>
<tr><td>U / doble U</td><td>Chapa gruesa, más de unos 20-30 mm</td><td>β 8-12°, r 6-9 mm</td><td>Preparación cara, mínimo metal aportado</td></tr>
<tr><td>Bisel simple (HV) / K</td><td>Uniones en T y esquina</td><td>β 35-60°</td><td>Para uniones en T de penetración completa</td></tr>
</tbody></table>
<p>Los valores son orientativos. La geometría exacta debe figurar en la WPS aprobada y en el plano.</p>
<h2>Por qué importa el volumen de metal</h2>
<p>En chapa de 20 mm, una X simétrica en lugar de una V de 60° reduce aproximadamente a la mitad la sección a rellenar: menos hilo, menos pasadas y menos aporte térmico, y las pasadas simétricas equilibran la distorsión angular. En chapa más gruesa una U reduce mucho la sección frente a una V, pero requiere mecanizado y su preparación es más cara. La elección depende del espesor, la cantidad y de si la pieza puede voltearse.</p>
<h2>Lado de raíz: respaldo, saneado y soldadura por un lado</h2>
<ul>
<li><strong>Respaldo cerámico o de acero:</strong> forma una raíz sana cuando no hay acceso por detrás. El respaldo de acero permanente puede actuar como entalla a fatiga y debe aprobarse en el plano.</li>
<li><strong>Saneado de raíz:</strong> en soldadura por ambos lados, tras el primer lado se abre la raíz hasta metal sano con arco-aire o amolado y se suelda por el otro lado.</li>
<li><strong>Penetración completa por un lado:</strong> separación y talón deben mantenerse con tolerancias estrechas; si no, aparecen perforaciones o falta de penetración.</li>
</ul>
<h2>Chaflanes para arco sumergido</h2>
<p>La penetración profunda del arco sumergido permite talones mayores y ángulos más cerrados; en algunos espesores incluso se suelda por ambos lados sin bisel. Un chaflán preparado para MAG manual puede suponer metal innecesario en arco sumergido. La ISO 9692-2 da recomendaciones propias.</p>
<h2>Errores frecuentes</h2>
<ol>
<li><strong>Separación variable:</strong> si no se comprueba antes de puntear, la penetración varía a lo largo del cordón.</li>
<li><strong>Desalineación:</strong> las superficies no quedan enrasadas; la ISO 5817 la limita por nivel de calidad.</li>
<li><strong>Óxido y escoria en caras de corte:</strong> si la capa de óxido del corte térmico no se amola, aumenta el riesgo de poros y falta de fusión.</li>
<li><strong>Plano sin datos de chaflán:</strong> indicar solo "penetración completa" deja abierto quién elige el chaflán y cómo.</li>
</ol>
<div class="callout"><p><strong>En ArmaWeld:</strong> comparamos la geometría del chaflán con la WPS a aplicar y comprobamos separación y desalineación antes de puntear. Coordinamos el corte y el biselado con nuestros socios y verificamos las dimensiones del chaflán de las piezas recibidas antes de soldar. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Qué ángulo debe tener un chaflán en V?', 'En la ISO 9692-1 el ángulo total suele estar entre 40° y 60°. El valor exacto depende del proceso, el espesor y la WPS aprobada.'],
      ['¿Cuándo conviene un chaflán en X?', 'En chapa de más de unos 10 mm cuando la pieza puede voltearse. Necesita aproximadamente la mitad de metal que una V y equilibra la distorsión.'],
      ['¿Para qué sirve el talón?', 'La cara sin biselar evita perforaciones en la raíz y permite un relleno más estable, sobre todo en arco sumergido o soldadura por ambos lados.'],
      ['¿Qué procesos cubre la ISO 9692-1?', 'Electrodo revestido, procesos con gas de protección, TIG y similares en aceros. La ISO 9692-2 cubre el arco sumergido y la ISO 9692-3 el aluminio.']
    ],
    cta_h3: 'El chaflán adecuado para sus soldaduras a tope en chapa gruesa',
    cta_p: 'Envíenos su plano; evaluamos la geometría del chaflán junto con el proceso y preparamos la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Préparation des bords à souder : chanfreins en V, X, U et demi-V selon l’ISO 9692-1',
    meta: 'Comment choisir un chanfrein ? Types de préparation ISO 9692-1, angle, écartement et talon, chanfreins en V, X, Y et U selon l’épaisseur, volume de métal déposé et erreurs fréquentes de préparation.',
    og: 'Préparation des bords à souder : ISO 9692-1',
    tag: 'Conception · Préparation',
    h1: 'Préparation des bords à souder : chanfreins en V, X, U et demi-V selon l’ISO 9692-1',
    crumb: 'Préparation des bords',
    read: '6 min de lecture',
    body: `
<p>La qualité d’une soudure bout à bout se joue avant l’amorçage. La géométrie du chanfrein agit directement sur la pénétration, le métal déposé, le nombre de passes, la déformation et le risque de défauts. Les préparations recommandées pour les aciers sont définies par la <strong>NF EN ISO 9692-1</strong>. L’ISO 9692-2 traite l’arc submergé et l’ISO 9692-3 l’aluminium.</p>
<h2>Cotes du chanfrein</h2>
<ul>
<li><strong>Angle d’ouverture (α) :</strong> angle total entre les deux faces.</li>
<li><strong>Angle de chanfrein (β) :</strong> angle sur une seule pièce ; pour les chanfreins en demi-V et en U.</li>
<li><strong>Écartement (b) :</strong> jeu entre les pièces, nécessaire à la pénétration.</li>
<li><strong>Talon (c) :</strong> partie non chanfreinée qui évite le percement.</li>
<li><strong>Rayon (r) :</strong> rayon de fond des chanfreins en U et en J.</li>
</ul>
<h2>Préparations courantes</h2>
<table class="data-table"><thead><tr><th>Chanfrein</th><th>Épaisseur typique</th><th>Géométrie typique</th><th>Remarque</th></tr></thead><tbody>
<tr><td>Bords droits (I)</td><td>Tôle mince, jusqu’à environ 4 mm d’un côté</td><td>Sans chanfrein, avec écartement</td><td>Préparation la moins chère ; la pénétration ne suffit plus quand l’épaisseur augmente</td></tr>
<tr><td>V</td><td>Environ 3-20 mm</td><td>α 40-60°, b 0-4 mm, c 0-2 mm</td><td>Soudé d’un côté ; la déformation croît avec l’épaisseur</td></tr>
<tr><td>Y (V à grand talon)</td><td>Environ 5-40 mm</td><td>α ≈ 60°, c 2-4 mm</td><td>Le talon aide pour la reprise envers ou l’arc submergé</td></tr>
<tr><td>X (double V)</td><td>Au-delà d’environ 10 mm</td><td>α 40-60°, chanfreiné des deux côtés</td><td>Environ moitié moins de métal qu’un V, déformation équilibrée</td></tr>
<tr><td>U / double U</td><td>Tôles épaisses, au-delà d’environ 20-30 mm</td><td>β 8-12°, r 6-9 mm</td><td>Préparation coûteuse, métal déposé minimal</td></tr>
<tr><td>Demi-V (HV) / K</td><td>Assemblages en T et d’angle</td><td>β 35-60°</td><td>Pour les T à pleine pénétration</td></tr>
</tbody></table>
<p>Les valeurs sont indicatives. La géométrie exacte doit figurer dans le DMOS qualifié et sur le plan.</p>
<h2>Pourquoi le volume de métal compte</h2>
<p>Sur une tôle de 20 mm, un X symétrique au lieu d’un V à 60° divise environ par deux la section à remplir : moins de fil, moins de passes, moins d’énergie, et des passes symétriques qui équilibrent la déformation angulaire. Sur tôles plus épaisses, un U réduit nettement la section par rapport à un V, mais exige un usinage et coûte plus cher à préparer. Le choix dépend de l’épaisseur, de la quantité et de la possibilité de retourner la pièce.</p>
<h2>Côté racine : support, gougeage et soudage d’un seul côté</h2>
<ul>
<li><strong>Support céramique ou acier :</strong> assure une racine saine sans accès à l’envers. Un support acier permanent peut créer une entaille en fatigue et doit être validé sur le plan.</li>
<li><strong>Gougeage envers :</strong> en soudage des deux côtés, après le premier côté, la racine est ouverte jusqu’au métal sain à l’arc-air ou par meulage, puis soudée de l’autre côté.</li>
<li><strong>Pleine pénétration d’un seul côté :</strong> écartement et talon doivent être tenus à des tolérances serrées, sinon percement ou manque de pénétration.</li>
</ul>
<h2>Chanfreins pour l’arc submergé</h2>
<p>La forte pénétration de l’arc submergé permet un talon plus important et un angle plus fermé ; pour certaines épaisseurs, on soude même des deux côtés sans chanfrein. Un chanfrein prévu pour le MAG manuel peut donc entraîner du métal inutile en arc submergé. L’ISO 9692-2 donne des recommandations spécifiques.</p>
<h2>Erreurs fréquentes</h2>
<ol>
<li><strong>Écartement variable :</strong> non contrôlé avant pointage, il fait varier la pénétration le long du cordon.</li>
<li><strong>Défaut d’alignement :</strong> les surfaces ne sont pas affleurantes ; l’ISO 5817 le limite selon le niveau de qualité.</li>
<li><strong>Oxyde et scories sur les faces coupées :</strong> la couche d’oxyde du coupage thermique non meulée augmente le risque de porosités et de manques de fusion.</li>
<li><strong>Pas d’indication de chanfrein sur le plan :</strong> écrire seulement « pleine pénétration » laisse ouvert qui choisit le chanfrein et comment.</li>
</ol>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous comparons la géométrie du chanfrein au DMOS applicable et contrôlons écartement et alignement avant pointage. Nous coordonnons découpe et chanfreinage avec nos partenaires et vérifions les cotes de chanfrein des pièces reçues avant soudage. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Quel angle pour un chanfrein en V ?', 'Selon l’ISO 9692-1, l’angle d’ouverture est généralement de 40 à 60°. La valeur exacte dépend du procédé, de l’épaisseur et du DMOS qualifié.'],
      ['Quand préférer un chanfrein en X ?', 'Au-delà d’environ 10 mm lorsque la pièce peut être retournée. Il demande environ moitié moins de métal qu’un V et équilibre la déformation.'],
      ['À quoi sert le talon ?', 'La partie non chanfreinée évite le percement en racine et permet un remplissage plus stable, notamment en arc submergé ou en soudage des deux côtés.'],
      ['Quels procédés couvre l’ISO 9692-1 ?', 'L’électrode enrobée, les procédés sous protection gazeuse, le TIG et similaires sur aciers. L’ISO 9692-2 couvre l’arc submergé et l’ISO 9692-3 l’aluminium.']
    ],
    cta_h3: 'Le bon chanfrein pour vos soudures bout à bout sur tôles épaisses',
    cta_p: 'Envoyez votre plan ; nous évaluons la géométrie du chanfrein avec le procédé de soudage et préparons l’offre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Preparazione dei lembi: cianfrini a V, X, U e a mezza V secondo ISO 9692-1',
    meta: 'Come scegliere il cianfrino: tipi di preparazione ISO 9692-1, angolo, luce e spalla, cianfrini a V, X, Y e U in base allo spessore, volume di metallo depositato ed errori frequenti.',
    og: 'Preparazione dei lembi: ISO 9692-1',
    tag: 'Progettazione · Preparazione',
    h1: 'Preparazione dei lembi: cianfrini a V, X, U e a mezza V secondo ISO 9692-1',
    crumb: 'Preparazione dei lembi',
    read: '6 min di lettura',
    body: `
<p>La qualità di una saldatura testa a testa si decide prima dell’innesco dell’arco. La geometria del cianfrino incide direttamente su penetrazione, metallo depositato, numero di passate, deformazione e rischio di difetti. Le preparazioni raccomandate per gli acciai sono definite dalla <strong>UNI EN ISO 9692-1</strong>. La ISO 9692-2 riguarda l’arco sommerso e la ISO 9692-3 l’alluminio.</p>
<h2>Quote del cianfrino</h2>
<ul>
<li><strong>Angolo di apertura (α):</strong> angolo totale tra le due facce.</li>
<li><strong>Angolo di smusso (β):</strong> angolo su un solo pezzo; per cianfrini a mezza V e a U.</li>
<li><strong>Luce (b):</strong> distanza tra i pezzi, necessaria alla penetrazione al vertice.</li>
<li><strong>Spalla (c):</strong> tratto non smussato che evita lo sfondamento.</li>
<li><strong>Raggio (r):</strong> raggio di fondo nei cianfrini a U e J.</li>
</ul>
<h2>Preparazioni comuni</h2>
<table class="data-table"><thead><tr><th>Cianfrino</th><th>Spessore tipico</th><th>Geometria tipica</th><th>Nota</th></tr></thead><tbody>
<tr><td>I (lembi retti)</td><td>Lamiera sottile, fino a circa 4 mm da un lato</td><td>Senza smusso, con luce</td><td>Preparazione più economica; con spessori maggiori la penetrazione non basta</td></tr>
<tr><td>V</td><td>Circa 3-20 mm</td><td>α 40-60°, b 0-4 mm, c 0-2 mm</td><td>Saldato da un lato; la deformazione cresce con lo spessore</td></tr>
<tr><td>Y (V a spalla larga)</td><td>Circa 5-40 mm</td><td>α ≈ 60°, c 2-4 mm</td><td>La spalla aiuta con ripresa al rovescio o arco sommerso</td></tr>
<tr><td>X (doppia V)</td><td>Oltre circa 10 mm</td><td>α 40-60°, smussato su entrambi i lati</td><td>Circa metà metallo rispetto a una V, deformazione bilanciata</td></tr>
<tr><td>U / doppia U</td><td>Lamiere spesse, oltre circa 20-30 mm</td><td>β 8-12°, r 6-9 mm</td><td>Preparazione costosa, minimo metallo depositato</td></tr>
<tr><td>Mezza V (HV) / K</td><td>Giunti a T e d’angolo</td><td>β 35-60°</td><td>Per giunti a T a piena penetrazione</td></tr>
</tbody></table>
<p>I valori sono indicativi. La geometria esatta va riportata nella WPS qualificata e a disegno.</p>
<h2>Perché conta il volume di metallo</h2>
<p>Su lamiera da 20 mm, una X simmetrica al posto di una V a 60° dimezza circa la sezione da riempire: meno filo, meno passate, meno apporto termico, e passate simmetriche che bilanciano la deformazione angolare. Su spessori maggiori una U riduce molto la sezione rispetto a una V, ma richiede lavorazione meccanica e una preparazione più costosa. La scelta dipende da spessore, quantità e dalla possibilità di ribaltare il pezzo.</p>
<h2>Lato radice: sostegno, scriccatura e saldatura da un lato</h2>
<ul>
<li><strong>Sostegno ceramico o in acciaio:</strong> forma una radice sana quando il rovescio non è accessibile. Un sostegno in acciaio permanente può agire da intaglio a fatica e va approvato a disegno.</li>
<li><strong>Scriccatura al rovescio:</strong> nella saldatura da entrambi i lati, dopo il primo lato la radice viene aperta fino al metallo sano con arc-air o molatura e saldata dall’altro lato.</li>
<li><strong>Piena penetrazione da un lato:</strong> luce e spalla vanno tenute in tolleranze strette, altrimenti sfondamento o mancata penetrazione.</li>
</ul>
<h2>Cianfrini per l’arco sommerso</h2>
<p>La penetrazione profonda dell’arco sommerso consente spalle maggiori e angoli più stretti; per alcuni spessori si salda perfino da entrambi i lati senza smusso. Un cianfrino preparato per MAG manuale può quindi significare metallo inutile in arco sommerso. La ISO 9692-2 fornisce raccomandazioni dedicate.</p>
<h2>Errori frequenti</h2>
<ol>
<li><strong>Luce variabile:</strong> se non controllata prima della puntatura, la penetrazione varia lungo il cordone.</li>
<li><strong>Disallineamento:</strong> le superfici non sono a filo; la ISO 5817 lo limita in base al livello di qualità.</li>
<li><strong>Ossido e scoria sulle facce di taglio:</strong> se lo strato di ossido del taglio termico non viene molato, aumentano porosità e mancanze di fusione.</li>
<li><strong>Disegno senza dati di cianfrino:</strong> indicare solo "piena penetrazione" lascia aperto chi sceglie il cianfrino e come.</li>
</ol>
<div class="callout"><p><strong>In ArmaWeld:</strong> confrontiamo la geometria del cianfrino con la WPS da applicare e controlliamo luce e disallineamento prima della puntatura. Coordiniamo taglio e smussatura con i nostri partner e verifichiamo le quote dei cianfrini dei pezzi ricevuti prima della saldatura. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Che angolo deve avere un cianfrino a V?', 'Secondo la ISO 9692-1 l’angolo di apertura è di solito 40-60°. Il valore esatto dipende da processo, spessore e WPS qualificata.'],
      ['Quando conviene un cianfrino a X?', 'Su lamiere oltre circa 10 mm quando il pezzo può essere ribaltato. Richiede circa metà metallo di una V e bilancia la deformazione.'],
      ['A cosa serve la spalla?', 'Il tratto non smussato evita lo sfondamento al vertice e consente un riempimento più stabile, specie in arco sommerso o saldatura da entrambi i lati.'],
      ['Quali processi copre la ISO 9692-1?', 'Elettrodo rivestito, processi con gas di protezione, TIG e simili sugli acciai. La ISO 9692-2 copre l’arco sommerso e la ISO 9692-3 l’alluminio.']
    ],
    cta_h3: 'Il cianfrino giusto per le vostre saldature testa a testa su lamiere spesse',
    cta_p: 'Inviateci il disegno; valutiamo la geometria del cianfrino insieme al processo e prepariamo l’offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Lasnaadvoorbereiding: V-, X-, U- en HV-naden volgens ISO 9692-1',
    meta: 'Hoe kies je de naadvorm? Naadvormen volgens ISO 9692-1, openingshoek, spleet en staande kant, V-, X-, Y- en U-naad per plaatdikte, lasmetaalvolume en veelgemaakte fouten bij de voorbereiding.',
    og: 'Lasnaadvoorbereiding volgens ISO 9692-1',
    tag: 'Ontwerp · Voorbereiding',
    h1: 'Lasnaadvoorbereiding: V-, X-, U- en HV-naden volgens ISO 9692-1',
    crumb: 'Naadvoorbereiding',
    read: '6 min lezen',
    body: `
<p>De kwaliteit van een stompe las wordt bepaald voordat de boog ontsteekt. De naadgeometrie bepaalt inbranding, hoeveelheid lasmetaal, aantal lagen, vervorming en foutrisico. Aanbevolen naadvormen voor staal staan in <strong>NEN-EN-ISO 9692-1</strong>. Voor onder poeder lassen geldt ISO 9692-2, voor aluminium ISO 9692-3.</p>
<h2>Maten van de naad</h2>
<ul>
<li><strong>Openingshoek (α):</strong> totale hoek tussen beide naadflanken.</li>
<li><strong>Afschuinhoek (β):</strong> hoek aan één deel; bij HV- en U-naden.</li>
<li><strong>Spleet (b):</strong> ruimte tussen de delen voor doorlassing van de grondlaag.</li>
<li><strong>Staande kant (c):</strong> niet afgeschuind deel dat doorzakken voorkomt.</li>
<li><strong>Straal (r):</strong> bodemstraal bij U- en J-naden.</li>
</ul>
<h2>Gangbare naadvormen</h2>
<table class="data-table"><thead><tr><th>Naad</th><th>Typische dikte</th><th>Typische geometrie</th><th>Opmerking</th></tr></thead><tbody>
<tr><td>I-naad</td><td>Dunne plaat, eenzijdig tot ongeveer 4 mm</td><td>Niet afgeschuind, met spleet</td><td>Goedkoopste voorbereiding; bij grotere dikte schiet de inbranding tekort</td></tr>
<tr><td>V-naad</td><td>Ongeveer 3-20 mm</td><td>α 40-60°, b 0-4 mm, c 0-2 mm</td><td>Eenzijdig gelast; vervorming neemt toe met de dikte</td></tr>
<tr><td>Y-naad</td><td>Ongeveer 5-40 mm</td><td>α ≈ 60°, c 2-4 mm</td><td>Staande kant helpt bij tegenlassen of OP-lassen</td></tr>
<tr><td>X-naad</td><td>Vanaf ongeveer 10 mm</td><td>α 40-60°, aan twee zijden afgeschuind</td><td>Ongeveer half zoveel lasmetaal als een V, gebalanceerde vervorming</td></tr>
<tr><td>U- / dubbele U-naad</td><td>Dikke plaat, vanaf ongeveer 20-30 mm</td><td>β 8-12°, r 6-9 mm</td><td>Dure voorbereiding, minste lasmetaal</td></tr>
<tr><td>HV- / K-naad</td><td>T- en hoekverbindingen</td><td>β 35-60°</td><td>Voor volledig doorgelaste T-verbindingen</td></tr>
</tbody></table>
<p>De waarden zijn richtwaarden. De exacte geometrie hoort in de goedgekeurde WPS en op de tekening.</p>
<h2>Waarom het lasmetaalvolume telt</h2>
<p>Bij 20 mm plaat halveert een symmetrische X-naad in plaats van een V-naad van 60° ongeveer de te vullen doorsnede: minder draad, minder lagen en minder warmte-inbreng, en symmetrische lagen compenseren de hoekvervorming. Bij dikkere platen verkleint een U-naad de doorsnede flink ten opzichte van een V, maar vraagt verspanen en dus een duurdere voorbereiding. De keuze hangt af van dikte, aantallen en of het deel gekeerd kan worden.</p>
<h2>Wortelzijde: onderlegstrip, uitgutsen en eenzijdig lassen</h2>
<ul>
<li><strong>Keramische of stalen onderlegstrip:</strong> zorgt voor een gezonde grondlaag als de achterzijde niet bereikbaar is. Een blijvende stalen strip kan bij vermoeiing als kerf werken en moet op de tekening zijn goedgekeurd.</li>
<li><strong>Uitgutsen:</strong> bij tweezijdig lassen wordt na de eerste zijde de wortel met koolboog of slijpen tot gezond metaal geopend en van de andere kant gelast.</li>
<li><strong>Eenzijdig volledig doorlassen:</strong> spleet en staande kant moeten nauw getolereerd zijn, anders volgen doorzakken of onvoldoende doorlassing.</li>
</ul>
<h2>Naden voor onder poeder lassen</h2>
<p>Door de diepe inbranding laat OP-lassen een grotere staande kant en kleinere openingshoek toe; bij sommige diktes kan zelfs zonder afschuining tweezijdig worden gelast. Een naad die voor handmatig MAG is voorbereid, betekent bij OP-lassen dus vaak onnodig lasmetaal. ISO 9692-2 geeft eigen aanbevelingen.</p>
<h2>Veelgemaakte fouten</h2>
<ol>
<li><strong>Wisselende spleet:</strong> wordt die niet vóór het hechten gecontroleerd, dan varieert de inbranding langs de naad.</li>
<li><strong>Kantverschuiving:</strong> de oppervlakken liggen niet gelijk; ISO 5817 begrenst dit per kwaliteitsniveau.</li>
<li><strong>Oxide en slak op snijvlakken:</strong> wordt de oxidelaag van thermisch snijden niet weggeslepen, dan stijgt het risico op porositeit en bindingsfouten.</li>
<li><strong>Geen naadgegevens op de tekening:</strong> alleen "volledig doorgelast" laat open wie de naad kiest en hoe.</li>
</ol>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> we vergelijken de naadgeometrie met de toe te passen WPS en controleren spleet en kantverschuiving vóór het hechten. Snijden en afschuinen coördineren we met onze partners, en we controleren de naadmaten van aangeleverde delen vóór het lassen. <a href="../cizime-gore-imalat.html">Productie op tekening →</a></p></div>
`,
    faq: [
      ['Welke openingshoek heeft een V-naad?', 'Volgens ISO 9692-1 meestal 40-60°. De exacte waarde hangt af van proces, dikte en de goedgekeurde WPS.'],
      ['Wanneer kies je een X-naad?', 'Bij platen vanaf ongeveer 10 mm als het deel gekeerd kan worden. Een X-naad vraagt ongeveer half zoveel lasmetaal als een V-naad en balanceert de vervorming.'],
      ['Waarvoor dient de staande kant?', 'Het niet afgeschuinde deel voorkomt doorzakken in de wortel en zorgt voor stabieler vullen, vooral bij OP-lassen of tweezijdig lassen.'],
      ['Welke processen dekt ISO 9692-1?', 'Elektrodelassen, gasbeschermde processen, TIG en vergelijkbare processen op staal. Voor OP-lassen geldt ISO 9692-2, voor aluminium ISO 9692-3.']
    ],
    cta_h3: 'De juiste naad voor uw stompe lassen in dikke plaat',
    cta_p: 'Stuur uw tekening; we beoordelen de naadgeometrie samen met het lasproces en maken een offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Fugeforberedelse for sveising: V-, X-, U- og halv V-fuger etter ISO 9692-1',
    meta: 'Hvordan velge fugeform? Fugetyper etter ISO 9692-1, fugevinkel, rotåpning og rotflate, V-, X-, Y- og U-fuge etter platetykkelse, sveisemetallvolum og vanlige feil ved forberedelsen.',
    og: 'Fugeforberedelse etter ISO 9692-1',
    tag: 'Konstruksjon · Forberedelse',
    h1: 'Fugeforberedelse: V-, X-, U- og halv V-fuger etter ISO 9692-1',
    crumb: 'Fugeforberedelse',
    read: '6 min lesing',
    body: `
<p>Kvaliteten på en buttsveis avgjøres før buen tennes. Fugegeometrien påvirker innbrenning, mengde sveisemetall, antall strenger, deformasjon og feilrisiko direkte. Anbefalte fugeformer for stål er definert i <strong>NS-EN ISO 9692-1</strong>. ISO 9692-2 gjelder pulverbuesveising og ISO 9692-3 aluminium.</p>
<h2>Mål som definerer fugen</h2>
<ul>
<li><strong>Fugevinkel (α):</strong> total vinkel mellom de to fugeflatene.</li>
<li><strong>Avfasingsvinkel (β):</strong> vinkel på én del; brukes i halv V- og U-fuger.</li>
<li><strong>Rotåpning (b):</strong> spalten mellom delene som gir rotgjennombrenning.</li>
<li><strong>Rotflate (c):</strong> uavfaset kant som hindrer gjennombrenning.</li>
<li><strong>Radius (r):</strong> bunnradius i U- og J-fuger.</li>
</ul>
<h2>Vanlige fugeformer</h2>
<table class="data-table"><thead><tr><th>Fuge</th><th>Typisk tykkelse</th><th>Typisk geometri</th><th>Merknad</th></tr></thead><tbody>
<tr><td>I-fuge</td><td>Tynnplate, opptil ca. 4 mm fra én side</td><td>Uten avfasing, med åpning</td><td>Billigst å forberede; innbrenningen strekker ikke til ved større tykkelse</td></tr>
<tr><td>V-fuge</td><td>Ca. 3-20 mm</td><td>α 40-60°, b 0-4 mm, c 0-2 mm</td><td>Sveises fra én side; deformasjonen øker med tykkelsen</td></tr>
<tr><td>Y-fuge</td><td>Ca. 5-40 mm</td><td>α ≈ 60°, c 2-4 mm</td><td>Rotflaten hjelper ved motsveis eller pulverbue</td></tr>
<tr><td>X-fuge (dobbel V)</td><td>Over ca. 10 mm</td><td>α 40-60°, avfaset på begge sider</td><td>Omtrent halvparten av sveisemetallet i en V, balansert deformasjon</td></tr>
<tr><td>U / dobbel U</td><td>Tykk plate, over ca. 20-30 mm</td><td>β 8-12°, r 6-9 mm</td><td>Dyr forberedelse, minst sveisemetall</td></tr>
<tr><td>Halv V (HV) / K</td><td>T- og hjørneskjøter</td><td>β 35-60°</td><td>For gjennomsveiste T-skjøter</td></tr>
</tbody></table>
<p>Verdiene er veiledende. Eksakt geometri hører hjemme i godkjent WPS og på tegningen.</p>
<h2>Hvorfor sveisemetallvolumet betyr noe</h2>
<p>På 20 mm plate halverer en symmetrisk X-fuge i stedet for en 60° V-fuge omtrent tverrsnittet som skal fylles: mindre tråd, færre strenger og mindre varme, og symmetriske strenger balanserer vinkeldeformasjonen. På tykkere plate reduserer en U-fuge tverrsnittet betydelig sammenlignet med V, men krever maskinering og koster mer å forberede. Valget avhenger av tykkelse, antall og om delen kan snus.</p>
<h2>Rotsiden: bakstøtte, utfuging og ensidig sveising</h2>
<ul>
<li><strong>Keramisk eller stål bakstøtte:</strong> gir en sunn rot når baksiden ikke er tilgjengelig. Permanent stålbakstøtte kan virke som kjerv ved utmatting og bør være godkjent på tegningen.</li>
<li><strong>Utfuging:</strong> ved tosidig sveising åpnes roten etter første side ned til sunt metall med kullbue eller sliping, og sveises fra motsatt side.</li>
<li><strong>Ensidig full gjennomsveising:</strong> rotåpning og rotflate må holdes innenfor stramme toleranser, ellers følger gjennombrenning eller manglende gjennombrenning.</li>
</ul>
<h2>Fuger for pulverbuesveising</h2>
<p>Den dype innbrenningen ved pulverbuesveising tillater større rotflate og mindre fugevinkel; for noen tykkelser kan man til og med sveise tosidig uten avfasing. En fuge forberedt for manuell MAG kan derfor gi unødvendig sveisemetall ved pulverbue. ISO 9692-2 gir egne anbefalinger.</p>
<h2>Vanlige feil</h2>
<ol>
<li><strong>Varierende rotåpning:</strong> kontrolleres den ikke før heftsveising, varierer innbrenningen langs sømmen.</li>
<li><strong>Kantforskyvning:</strong> flatene ligger ikke i flukt; ISO 5817 begrenser dette etter kvalitetsnivå.</li>
<li><strong>Oksid og slagg på snittflater:</strong> slipes ikke oksidlaget fra termisk skjæring bort, øker risikoen for porer og bindefeil.</li>
<li><strong>Ingen fugeinformasjon på tegningen:</strong> bare «full gjennomsveising» lar det være åpent hvem som velger fugen og hvordan.</li>
</ol>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> vi sammenligner fugegeometrien med WPS-en som skal brukes, og kontrollerer rotåpning og kantforskyvning før heftsveising. Skjæring og avfasing koordinerer vi med våre partnere, og vi kontrollerer fugemålene på innkommende deler før sveising. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hvilken fugevinkel skal en V-fuge ha?', 'Etter ISO 9692-1 er fugevinkelen vanligvis 40-60°. Eksakt verdi avhenger av prosess, tykkelse og godkjent WPS.'],
      ['Når velges X-fuge?', 'På plate over ca. 10 mm når delen kan snus. En X-fuge trenger omtrent halvparten så mye sveisemetall som en V-fuge og balanserer deformasjonen.'],
      ['Hva er rotflaten til?', 'Den uavfasede kanten hindrer gjennombrenning i roten og gir jevnere fylling, særlig ved pulverbue eller tosidig sveising.'],
      ['Hvilke prosesser dekker ISO 9692-1?', 'Dekkede elektroder, gassbeskyttede prosesser, TIG og lignende på stål. ISO 9692-2 dekker pulverbue og ISO 9692-3 aluminium.']
    ],
    cta_h3: 'Riktig fuge for buttsveisene dine i tykk plate',
    cta_p: 'Send tegningen; vi vurderer fugegeometrien sammen med sveiseprosessen og lager tilbud.',
    cta_btn: 'Be om tilbud →'
  }
};
