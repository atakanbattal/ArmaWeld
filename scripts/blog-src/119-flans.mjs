export default {
  order: 119,
  slug: 'flans-kaynagi-duzlemsellik-carpilma',
  key: 'p119_flange',
  date: '2026-11-10',
  keywords: 'flanş kaynağı, flanş düzlemsellik, flanş çarpılması kaynak, kaynak boyunlu flanş, yaka flanş, flanş contası sızdırmazlık, flanş kaynak sonrası işleme, flange welding flatness, Flansch schweißen Ebenheit, soldadura de bridas planitud, soudage de brides planéité',
  related: ['kaynak-sonrasi-talasli-isleme', 'kaynak-distorsiyonu', 'pipe-spool-boru-imalati-tedarik', 'hidrolik-yag-tanki-yakit-deposu-imalati'],
  tr: {
    title: 'Flanş Kaynağında Düzlemsellik: Çarpılma Neden Olur, Nasıl Önlenir?',
    meta: 'Boru, tank, gövde ve redüktör bağlantılarında flanş kaynağı: kaynak boyunlu, kaynaklı-geçme ve yaka flanşlar, kaynak sonrası flanş yüzeyinde çarpılma, conta ve sızdırmazlık, kaynak sırası, fikstür, kaynak sonrası işleme ve ölçüm.',
    og: 'Flanş kaynağında düzlemsellik',
    tag: 'Teknik Rehber · Distorsiyon',
    h1: 'Flanş Kaynağında Düzlemsellik: Çarpılma Neden Olur, Nasıl Önlenir?',
    crumb: 'Flanş düzlemselliği',
    read: '6 dk okuma',
    body: `
<p>Bir tank, hidrolik gövde, boru hattı veya redüktör muhafazası çoğu zaman bir flanşla bağlanır. Flanş yüzeyi düz değilse conta eşit sıkışmaz; sonuç kaçak, gevşeyen cıvatalar veya montajda zorlanan eşleşen parçalardır. Flanş kaynağı, kaynaklı imalatta düzlemselliğin en sık sorun yarattığı yerlerden biridir.</p>
<h2>Flanş Tipleri</h2>
<ul>
<li><strong>Kaynak boyunlu flanş:</strong> Boruya alın kaynağıyla bağlanır; boyun gerilmeyi dağıtır. Basınçlı ve yüksek sıcaklıklı hatlarda tercih edilir.</li>
<li><strong>Kaynaklı geçme (slip-on) flanş:</strong> Boru flanşa geçirilir, içten ve dıştan köşe kaynağı yapılır. Ekonomiktir, ancak iç dikiş flanş yüzeyine yakındır ve çarpılma riski taşır.</li>
<li><strong>Yaka (plaka) flanş:</strong> Gövdeye veya tank cidarına kaynatılan, lazerle kesilmiş düz plaka. Makine gövdelerinde ve tank bağlantılarında yaygındır.</li>
</ul>
<h2>Çarpılma Neden Olur?</h2>
<p>Köşe kaynağının soğurken büzülmesi, flanşı dikiş tarafına doğru çeker. Sonuç, flanş yüzeyinin çanak şeklinde eğilmesi ya da dikiş yoğun bölgede bir tarafın kalkmasıdır. İnce flanşlar, tek taraflı kaynak ve yüksek ısı girdisi bu etkiyi büyütür (bkz. <a href="kaynak-distorsiyonu.html">kaynak distorsiyonu</a>).</p>
<h2>Önleme Yöntemleri</h2>
<ul>
<li><strong>Yeterli flanş kalınlığı:</strong> Tasarımda çok ince flanş, düzlemselliği baştan zorlaştırır.</li>
<li><strong>Dengeli kaynak sırası:</strong> Karşılıklı kısa dikişlerle ilerlemek, büzülmeyi çevreye eşit dağıtır.</li>
<li><strong>Fikstür ve rijit bağlama:</strong> Flanşı kaynak sırasında bir sehpaya veya eşleşen bir körleme flanşına cıvatalamak çarpılmayı sınırlar.</li>
<li><strong>Ön çarpıtma:</strong> Deneyimle belirlenen küçük bir ters açı verilebilir.</li>
<li><strong>Dikiş boyutunu gereksiz büyütmemek.</strong></li>
</ul>
<h2>Kaynak Sonrası İşleme</h2>
<p>Conta yüzeyi için sıkı düzlemsellik gerekiyorsa en güvenilir çözüm, flanş yüzeyini kaynak sonrası alın tornalama veya frezeleme ile işlemektir. Bunun için tasarımda işleme payı bırakılmalıdır (bkz. <a href="kaynak-sonrasi-talasli-isleme.html">kaynak sonrası talaşlı işleme</a>). Basınçlı ekipmanda gerekiyorsa işleme, ısıl işlemden sonra yapılır.</p>
<h2>Ölçüm ve Kabul</h2>
<p>Düzlemsellik, mastar ve filler ile, düz bir referans tabla üzerinde veya ölçüm koluyla kontrol edilir. Kabul değeri conta tipine ve basınca göre belirlenmeli ve çizimde yazılmalıdır. Cıvata deliklerinin konumu ve flanşın eksene diklik toleransı da aynı raporda yer almalıdır.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Flanşlı parçalarda kaynak sırasını ve bağlamayı çarpılmayı sınırlayacak şekilde planlıyor, düzlemselliği kaynak sonrası kontrol ediyoruz. Conta yüzeyi işleme gerektirdiğinde talaşlı işlemeyi iş ortaklarımızla koordine ediyoruz. <a href="../kaynakli-imalat.html">Kaynaklı imalat →</a></p></div>
`,
    faq: [
      ['Flanş neden kaynakta çarpılır?', 'Köşe kaynağının büzülmesi flanşı dikiş tarafına çeker.'],
      ['Çarpılma nasıl azaltılır?', 'Yeterli kalınlık, dengeli kaynak sırası, fikstür ve gereksiz büyük olmayan dikişle.'],
      ['Sıkı düzlemsellik nasıl sağlanır?', 'Flanş yüzeyini kaynak sonrası işleyerek; işleme payı bırakılmalıdır.'],
      ['Düzlemsellik değeri kime göre belirlenir?', 'Conta tipi ve basınca göre, tasarım sahibince çizimde.']
    ],
    cta_h3: 'Flanşlı kaynaklı parça mı lazım?',
    cta_p: 'Çizimleri ve düzlemsellik şartını gönderin; teklifimizi hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Flatness in Flange Welding: Why Distortion Happens and How to Prevent It',
    meta: 'Flange welding on pipes, tanks, housings and gearbox connections: weld-neck, slip-on and plate flanges, distortion of the flange face after welding, gaskets and tightness, weld sequence, fixtures, post-weld machining and measurement.',
    og: 'Flatness in flange welding',
    tag: 'Technical Guide · Distortion',
    h1: 'Flatness in Flange Welding: Why Distortion Happens and How to Prevent It',
    crumb: 'Flange flatness',
    read: '6 min read',
    body: `
<p>A tank, hydraulic housing, pipeline or gearbox casing is often connected via a flange. If the flange face is not flat, the gasket does not compress evenly; the result is leaks, loosening bolts or mating parts forced together in assembly. Flange welding is one of the places in welded fabrication where flatness most often causes trouble.</p>
<h2>Flange Types</h2>
<ul>
<li><strong>Weld-neck flange:</strong> butt-welded to the pipe; the neck spreads stress. Preferred for pressure and high-temperature lines.</li>
<li><strong>Slip-on flange:</strong> the pipe slides into the flange and is fillet-welded inside and outside. Economical, but the inner weld is close to the face and risks distortion.</li>
<li><strong>Plate flange:</strong> a laser-cut flat plate welded to a housing or tank wall. Common on machine bodies and tank connections.</li>
</ul>
<h2>Why Distortion Happens</h2>
<p>The fillet weld shrinks as it cools and pulls the flange towards the weld side. The flange face dishes, or one side lifts where welding is concentrated. Thin flanges, one-sided welding and high heat input magnify the effect (see <a href="kaynak-distorsiyonu.html">weld distortion</a>).</p>
<h2>Prevention</h2>
<ul>
<li><strong>Adequate flange thickness:</strong> a very thin flange makes flatness hard from the start.</li>
<li><strong>Balanced weld sequence:</strong> short opposing segments spread shrinkage evenly around the circumference.</li>
<li><strong>Fixtures and rigid clamping:</strong> bolting the flange to a stand or a mating blind flange during welding limits distortion.</li>
<li><strong>Pre-setting:</strong> a small reverse angle based on experience.</li>
<li><strong>No oversized welds.</strong></li>
</ul>
<h2>Post-Weld Machining</h2>
<p>If the gasket face needs tight flatness, the most reliable solution is to face-turn or mill it after welding, with machining allowance in the design (see <a href="kaynak-sonrasi-talasli-isleme.html">post-weld machining</a>). On pressure equipment, machining follows heat treatment where required.</p>
<h2>Measurement and Acceptance</h2>
<p>Flatness is checked with straight-edge and feelers, on a reference surface plate or with a measuring arm. The acceptance value should follow gasket type and pressure and be stated on the drawing. Bolt hole positions and the flange's perpendicularity to the axis belong in the same report.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> on flanged parts we plan weld sequence and clamping to limit distortion and check flatness after welding. Where the gasket face needs machining, we coordinate it with our partners. <a href="../kaynakli-imalat.html">Welded fabrication →</a></p></div>
`,
    faq: [
      ['Why do flanges distort when welded?', 'Fillet weld shrinkage pulls the flange towards the weld side.'],
      ['How is distortion reduced?', 'Adequate thickness, balanced sequence, fixtures and welds not oversized.'],
      ['How is tight flatness achieved?', 'By machining the face after welding; leave machining allowance.'],
      ['Who sets the flatness value?', 'The design owner, on the drawing, based on gasket type and pressure.']
    ],
    cta_h3: 'Need flanged welded parts?',
    cta_p: 'Send drawings and flatness requirement; we will prepare our quote.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Ebenheit beim Flanschschweißen: Warum Verzug entsteht und wie man ihn verhindert',
    meta: 'Flanschschweißen an Rohren, Tanks, Gehäusen und Getriebeanschlüssen: Vorschweiß-, Aufschweiß- und Plattenflansche, Verzug der Dichtfläche nach dem Schweißen, Dichtung und Dichtheit, Schweißfolge, Vorrichtungen, Nachbearbeitung und Messung.',
    og: 'Ebenheit beim Flanschschweißen',
    tag: 'Technischer Leitfaden · Verzug',
    h1: 'Ebenheit beim Flanschschweißen: Warum Verzug entsteht und wie man ihn verhindert',
    crumb: 'Flanschebenheit',
    read: '6 Min. Lesezeit',
    body: `
<p>Tank, Hydraulikgehäuse, Rohrleitung oder Getriebegehäuse werden oft über einen Flansch verbunden. Ist die Flanschfläche nicht eben, wird die Dichtung ungleichmäßig verpresst; Folge sind Leckagen, sich lösende Schrauben oder verspannte Gegenstücke in der Montage. Das Flanschschweißen ist eine der Stellen, an denen Ebenheit in der Schweißfertigung am häufigsten Probleme macht.</p>
<h2>Flanschtypen</h2>
<ul>
<li><strong>Vorschweißflansch:</strong> mit dem Rohr stumpf verschweißt; der Hals verteilt die Spannung. Bevorzugt bei Druck- und Hochtemperaturleitungen.</li>
<li><strong>Aufschweißflansch (Slip-on):</strong> Rohr wird eingeschoben und innen und außen mit Kehlnähten verschweißt. Wirtschaftlich, aber die Innennaht liegt nahe der Dichtfläche und birgt Verzugsrisiko.</li>
<li><strong>Plattenflansch:</strong> lasergeschnittene ebene Platte, an Gehäuse oder Tankwand geschweißt. Häufig an Maschinenkörpern und Tankanschlüssen.</li>
</ul>
<h2>Warum Verzug entsteht</h2>
<p>Die Kehlnaht schrumpft beim Abkühlen und zieht den Flansch zur Nahtseite. Die Fläche wird schüsselförmig, oder eine Seite hebt sich, wo konzentriert geschweißt wurde. Dünne Flansche, einseitiges Schweißen und hohe Wärmeeinbringung verstärken das (siehe <a href="kaynak-distorsiyonu.html">Schweißverzug</a>).</p>
<h2>Vorbeugung</h2>
<ul>
<li><strong>Ausreichende Flanschdicke:</strong> ein sehr dünner Flansch macht Ebenheit von vornherein schwer.</li>
<li><strong>Ausgewogene Schweißfolge:</strong> kurze gegenüberliegende Abschnitte verteilen die Schrumpfung gleichmäßig.</li>
<li><strong>Vorrichtung und steife Einspannung:</strong> den Flansch beim Schweißen an einen Bock oder einen Blindflansch schrauben begrenzt den Verzug.</li>
<li><strong>Vorverformung:</strong> ein kleiner Gegenwinkel aus Erfahrung.</li>
<li><strong>Keine überdimensionierten Nähte.</strong></li>
</ul>
<h2>Bearbeitung nach dem Schweißen</h2>
<p>Braucht die Dichtfläche enge Ebenheit, ist Plandrehen oder Fräsen nach dem Schweißen die zuverlässigste Lösung; Aufmaß in der Konstruktion vorsehen (siehe <a href="kaynak-sonrasi-talasli-isleme.html">Bearbeitung nach dem Schweißen</a>). Bei Druckgeräten erfolgt die Bearbeitung ggf. nach der Wärmebehandlung.</p>
<h2>Messung und Annahme</h2>
<p>Ebenheit wird mit Haarlineal und Fühlerlehre, auf einer Richtplatte oder mit Messarm geprüft. Der Annahmewert richtet sich nach Dichtungsart und Druck und gehört auf die Zeichnung. Lochbild und Rechtwinkligkeit des Flansches zur Achse gehören in denselben Bericht.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei Flanschteilen planen wir Schweißfolge und Einspannung so, dass Verzug begrenzt wird, und prüfen die Ebenheit nach dem Schweißen. Muss die Dichtfläche bearbeitet werden, koordinieren wir die Zerspanung mit Partnern. <a href="../kaynakli-imalat.html">Schweißfertigung →</a></p></div>
`,
    faq: [
      ['Warum verzieht sich ein Flansch beim Schweißen?', 'Die Schrumpfung der Kehlnaht zieht ihn zur Nahtseite.'],
      ['Wie verringert man Verzug?', 'Ausreichende Dicke, ausgewogene Folge, Vorrichtung und keine Übermaßnähte.'],
      ['Wie erreicht man enge Ebenheit?', 'Durch Bearbeitung der Fläche nach dem Schweißen; Aufmaß vorsehen.'],
      ['Wer legt den Ebenheitswert fest?', 'Der Konstrukteur auf der Zeichnung, nach Dichtungsart und Druck.']
    ],
    cta_h3: 'Geschweißte Flanschteile benötigt?',
    cta_p: 'Senden Sie Zeichnungen und Ebenheitsanforderung; wir erstellen unser Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Planitud en la soldadura de bridas: por qué se deforman y cómo evitarlo',
    meta: 'Soldadura de bridas en tuberías, depósitos, carcasas y reductores: bridas de cuello, deslizantes y de placa, deformación de la cara tras soldar, juntas y estanqueidad, secuencia de soldeo, utillajes, mecanizado posterior y medición.',
    og: 'Planitud en la soldadura de bridas',
    tag: 'Guía técnica · Distorsión',
    h1: 'Planitud en la soldadura de bridas: por qué se deforman y cómo evitarlo',
    crumb: 'Planitud de bridas',
    read: '6 min de lectura',
    body: `
<p>Un depósito, una carcasa hidráulica, una tubería o una caja de reductor se conectan a menudo mediante una brida. Si la cara no es plana, la junta no se comprime por igual: fugas, tornillos que se aflojan o piezas forzadas en el montaje. La soldadura de bridas es uno de los puntos donde la planitud da más problemas en la fabricación soldada.</p>
<h2>Tipos de brida</h2>
<ul>
<li><strong>Brida de cuello:</strong> se suelda a tope al tubo; el cuello reparte la tensión. Preferida en líneas a presión y alta temperatura.</li>
<li><strong>Brida deslizante (slip-on):</strong> el tubo entra en la brida y se suelda en ángulo por dentro y por fuera. Económica, pero el cordón interior está cerca de la cara y hay riesgo de deformación.</li>
<li><strong>Brida de placa:</strong> chapa plana cortada por láser y soldada a una carcasa o pared de depósito. Habitual en cuerpos de máquina y conexiones de depósitos.</li>
</ul>
<h2>Por qué se deforma</h2>
<p>El cordón en ángulo se contrae al enfriarse y tira de la brida hacia el lado soldado. La cara se abomba o un lado se levanta donde se concentra la soldadura. Bridas finas, soldadura por un solo lado y alto aporte lo agravan (ver <a href="kaynak-distorsiyonu.html">distorsión</a>).</p>
<h2>Prevención</h2>
<ul>
<li><strong>Espesor suficiente:</strong> una brida muy fina complica la planitud desde el inicio.</li>
<li><strong>Secuencia equilibrada:</strong> tramos cortos opuestos reparten la contracción.</li>
<li><strong>Utillaje y amarre rígido:</strong> atornillar la brida a un soporte o a una brida ciega durante la soldadura limita la deformación.</li>
<li><strong>Predeformación:</strong> un pequeño ángulo inverso según experiencia.</li>
<li><strong>No sobredimensionar los cordones.</strong></li>
</ul>
<h2>Mecanizado posterior</h2>
<p>Si la cara de junta requiere planitud estrecha, lo más fiable es refrentarla o fresarla tras soldar, dejando sobreespesor en el diseño (ver <a href="kaynak-sonrasi-talasli-isleme.html">mecanizado postsoldadura</a>). En equipos a presión, el mecanizado va después del tratamiento térmico si lo hay.</p>
<h2>Medición y aceptación</h2>
<p>La planitud se comprueba con regla y galgas, sobre mármol o con brazo de medición. El valor de aceptación depende del tipo de junta y la presión y debe figurar en el plano. La posición de los taladros y la perpendicularidad respecto al eje van en el mismo informe.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> en piezas con bridas planificamos secuencia y amarre para limitar la deformación y controlamos la planitud tras soldar. Cuando la cara de junta requiere mecanizado, lo coordinamos con socios. <a href="../kaynakli-imalat.html">Fabricación soldada →</a></p></div>
`,
    faq: [
      ['¿Por qué se deforma la brida al soldar?', 'La contracción del cordón en ángulo la tira hacia el lado soldado.'],
      ['¿Cómo reducir la deformación?', 'Espesor suficiente, secuencia equilibrada, utillaje y cordones no sobredimensionados.'],
      ['¿Cómo lograr planitud estrecha?', 'Mecanizando la cara tras soldar; dejar sobreespesor.'],
      ['¿Quién fija el valor de planitud?', 'El titular del diseño en el plano, según junta y presión.']
    ],
    cta_h3: '¿Necesita piezas soldadas con bridas?',
    cta_p: 'Envíe planos y requisito de planitud; prepararemos la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Planéité au soudage des brides : pourquoi elles se déforment et comment l\'éviter',
    meta: 'Soudage de brides sur tuyauteries, réservoirs, carters et réducteurs : brides à collerette, à emboîter et plates, déformation de la face après soudage, joints et étanchéité, séquence de soudage, gabarits, usinage après soudage et mesure.',
    og: 'Planéité au soudage des brides',
    tag: 'Guide technique · Déformations',
    h1: 'Planéité au soudage des brides : pourquoi elles se déforment et comment l\'éviter',
    crumb: 'Planéité des brides',
    read: '6 min de lecture',
    body: `
<p>Un réservoir, un carter hydraulique, une tuyauterie ou un carter de réducteur se raccorde souvent par une bride. Si la face n'est pas plane, le joint se comprime mal : fuites, boulons qui se desserrent ou pièces forcées au montage. Le soudage des brides est l'un des points où la planéité pose le plus souvent problème en fabrication soudée.</p>
<h2>Types de brides</h2>
<ul>
<li><strong>Bride à collerette :</strong> soudée bout à bout au tube ; la collerette répartit les contraintes. Préférée pour la pression et la haute température.</li>
<li><strong>Bride à emboîter (slip-on) :</strong> le tube s'emboîte et est soudé en angle à l'intérieur et à l'extérieur. Économique, mais la soudure intérieure est proche de la face et risque de la déformer.</li>
<li><strong>Bride plate :</strong> tôle plane découpée laser, soudée sur un carter ou une paroi de réservoir. Courante sur bâtis et piquages de réservoirs.</li>
</ul>
<h2>Pourquoi la bride se déforme</h2>
<p>La soudure d'angle se rétracte en refroidissant et tire la bride côté soudure. La face se creuse en cuvette, ou un côté se soulève là où le soudage est concentré. Brides minces, soudage d'un seul côté et forte énergie amplifient l'effet (voir <a href="kaynak-distorsiyonu.html">déformations de soudage</a>).</p>
<h2>Prévention</h2>
<ul>
<li><strong>Épaisseur suffisante :</strong> une bride très mince rend la planéité difficile d'emblée.</li>
<li><strong>Séquence équilibrée :</strong> de courts tronçons opposés répartissent le retrait.</li>
<li><strong>Gabarit et bridage rigide :</strong> boulonner la bride sur un support ou une bride pleine pendant le soudage limite la déformation.</li>
<li><strong>Prédéformation :</strong> un léger angle inverse issu de l'expérience.</li>
<li><strong>Pas de cordons surdimensionnés.</strong></li>
</ul>
<h2>Usinage après soudage</h2>
<p>Si la face de joint exige une planéité serrée, la solution la plus fiable est de la dresser au tour ou à la fraise après soudage, avec surépaisseur prévue (voir <a href="kaynak-sonrasi-talasli-isleme.html">usinage après soudage</a>). Pour les équipements sous pression, l'usinage suit le traitement thermique le cas échéant.</p>
<h2>Mesure et acceptation</h2>
<p>La planéité se contrôle à la règle et aux cales, sur marbre ou au bras de mesure. La valeur d'acceptation dépend du type de joint et de la pression et doit figurer au plan. Position des trous et perpendicularité de la bride à l'axe vont dans le même rapport.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> sur les pièces à brides, nous planifions séquence et bridage pour limiter les déformations et contrôlons la planéité après soudage. Lorsque la face de joint doit être usinée, nous coordonnons l'usinage avec nos partenaires. <a href="../kaynakli-imalat.html">Fabrication soudée →</a></p></div>
`,
    faq: [
      ['Pourquoi une bride se déforme-t-elle au soudage ?', 'Le retrait de la soudure d\'angle la tire côté soudure.'],
      ['Comment réduire la déformation ?', 'Épaisseur suffisante, séquence équilibrée, gabarit et cordons non surdimensionnés.'],
      ['Comment obtenir une planéité serrée ?', 'En usinant la face après soudage ; prévoir une surépaisseur.'],
      ['Qui fixe la valeur de planéité ?', 'Le concepteur, au plan, selon le joint et la pression.']
    ],
    cta_h3: 'Besoin de pièces soudées à brides ?',
    cta_p: 'Envoyez plans et exigence de planéité ; nous préparerons notre devis.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Planarità nella saldatura delle flange: perché si deformano e come evitarlo',
    meta: 'Saldatura di flange su tubazioni, serbatoi, carter e riduttori: flange a collarino, a sovrapposizione e piane, deformazione della faccia dopo saldatura, guarnizioni e tenuta, sequenza di saldatura, attrezzature, lavorazione post-saldatura e misura.',
    og: 'Planarità nella saldatura delle flange',
    tag: 'Guida tecnica · Deformazioni',
    h1: 'Planarità nella saldatura delle flange: perché si deformano e come evitarlo',
    crumb: 'Planarità delle flange',
    read: '6 min di lettura',
    body: `
<p>Un serbatoio, un corpo idraulico, una tubazione o una scatola riduttore si collegano spesso con una flangia. Se la faccia non è piana, la guarnizione non si comprime uniformemente: perdite, bulloni che si allentano o pezzi forzati al montaggio. La saldatura delle flange è uno dei punti in cui la planarità crea più spesso problemi nella carpenteria saldata.</p>
<h2>Tipi di flangia</h2>
<ul>
<li><strong>Flangia a collarino:</strong> saldata di testa al tubo; il collarino distribuisce le tensioni. Preferita per linee in pressione e ad alta temperatura.</li>
<li><strong>Flangia a sovrapposizione (slip-on):</strong> il tubo entra nella flangia ed è saldato d'angolo dentro e fuori. Economica, ma il cordone interno è vicino alla faccia e rischia di deformarla.</li>
<li><strong>Flangia piana:</strong> lamiera piana tagliata laser saldata a un carter o alla parete di un serbatoio. Comune su corpi macchina e attacchi di serbatoi.</li>
</ul>
<h2>Perché si deforma</h2>
<p>Il cordone d'angolo si ritira raffreddandosi e tira la flangia verso il lato saldato. La faccia si incurva a scodella o un lato si solleva dove la saldatura è concentrata. Flange sottili, saldatura su un solo lato e alto apporto termico amplificano l'effetto (vedi <a href="kaynak-distorsiyonu.html">deformazioni da saldatura</a>).</p>
<h2>Prevenzione</h2>
<ul>
<li><strong>Spessore adeguato:</strong> una flangia troppo sottile rende difficile la planarità fin dall'inizio.</li>
<li><strong>Sequenza bilanciata:</strong> brevi tratti contrapposti distribuiscono il ritiro.</li>
<li><strong>Attrezzatura e bloccaggio rigido:</strong> imbullonare la flangia a un supporto o a una flangia cieca durante la saldatura limita la deformazione.</li>
<li><strong>Predeformazione:</strong> un piccolo angolo inverso basato sull'esperienza.</li>
<li><strong>Nessun cordone sovradimensionato.</strong></li>
</ul>
<h2>Lavorazione post-saldatura</h2>
<p>Se la faccia guarnizione richiede planarità stretta, la soluzione più affidabile è sfacciarla al tornio o fresarla dopo la saldatura, con sovrametallo previsto a progetto (vedi <a href="kaynak-sonrasi-talasli-isleme.html">lavorazione post-saldatura</a>). Negli apparecchi a pressione la lavorazione segue l'eventuale trattamento termico.</p>
<h2>Misura e accettazione</h2>
<p>La planarità si controlla con riga e spessimetri, su piano di riscontro o con braccio di misura. Il valore di accettazione dipende da tipo di guarnizione e pressione e va indicato a disegno. Posizione dei fori e perpendicolarità della flangia all'asse vanno nello stesso rapporto.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> sui pezzi flangiati pianifichiamo sequenza e bloccaggio per limitare le deformazioni e controlliamo la planarità dopo la saldatura. Quando la faccia guarnizione va lavorata, coordiniamo la lavorazione con i partner. <a href="../kaynakli-imalat.html">Carpenteria saldata →</a></p></div>
`,
    faq: [
      ['Perché la flangia si deforma saldando?', 'Il ritiro del cordone d\'angolo la tira verso il lato saldato.'],
      ['Come ridurre la deformazione?', 'Spessore adeguato, sequenza bilanciata, attrezzature e cordoni non sovradimensionati.'],
      ['Come ottenere planarità stretta?', 'Lavorando la faccia dopo la saldatura; prevedere sovrametallo.'],
      ['Chi fissa il valore di planarità?', 'Il progettista a disegno, in base a guarnizione e pressione.']
    ],
    cta_h3: 'Servono pezzi saldati flangiati?',
    cta_p: 'Inviate disegni e requisito di planarità; prepareremo l\'offerta.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Vlakheid bij het lassen van flenzen: waarom ze vervormen en hoe je dat voorkomt',
    meta: 'Flenslassen op leidingen, tanks, behuizingen en tandwielkastaansluitingen: lasflenzen, opsteekflenzen en plaatflenzen, vervorming van het flensvlak na lassen, pakking en dichtheid, lasvolgorde, mallen, nabewerking en meting.',
    og: 'Vlakheid bij flenslassen',
    tag: 'Technische gids · Vervorming',
    h1: 'Vlakheid bij het lassen van flenzen: waarom ze vervormen en hoe je dat voorkomt',
    crumb: 'Flensvlakheid',
    read: '6 min lezen',
    body: `
<p>Een tank, hydraulische behuizing, leiding of tandwielkast wordt vaak via een flens aangesloten. Is het flensvlak niet vlak, dan wordt de pakking ongelijk aangedrukt: lekkage, losrakende bouten of onder spanning gemonteerde tegendelen. Flenslassen is een van de plekken waar vlakheid in laswerk het vaakst problemen geeft.</p>
<h2>Flenstypen</h2>
<ul>
<li><strong>Lasflens (weld-neck):</strong> stomp aan de pijp gelast; de hals verdeelt de spanning. Voorkeur bij druk- en hogetemperatuurleidingen.</li>
<li><strong>Opsteekflens (slip-on):</strong> de pijp wordt in de flens geschoven en binnen en buiten met hoeklassen gelast. Voordelig, maar de binnenlas ligt dicht bij het vlak en geeft vervormingsrisico.</li>
<li><strong>Plaatflens:</strong> gelaserde vlakke plaat, gelast op een behuizing of tankwand. Gangbaar op machinebehuizingen en tankaansluitingen.</li>
</ul>
<h2>Waarom vervorming ontstaat</h2>
<p>De hoeklas krimpt bij afkoelen en trekt de flens naar de laszijde. Het vlak wordt schotelvormig, of één kant komt omhoog waar geconcentreerd gelast is. Dunne flenzen, eenzijdig lassen en hoge warmte-inbreng versterken dit (zie <a href="kaynak-distorsiyonu.html">lasvervorming</a>).</p>
<h2>Voorkomen</h2>
<ul>
<li><strong>Voldoende flensdikte:</strong> een erg dunne flens maakt vlakheid vanaf het begin lastig.</li>
<li><strong>Gebalanceerde lasvolgorde:</strong> korte tegenover elkaar liggende stukken verdelen de krimp.</li>
<li><strong>Mal en stijve inklemming:</strong> de flens tijdens het lassen op een bok of blindflens bouten beperkt vervorming.</li>
<li><strong>Voorvervormen:</strong> een kleine tegenhoek op basis van ervaring.</li>
<li><strong>Geen overgedimensioneerde lassen.</strong></li>
</ul>
<h2>Nabewerken</h2>
<p>Vraagt het pakkingvlak krappe vlakheid, dan is het vlak na het lassen nadraaien of frezen de betrouwbaarste oplossing, met bewerkingstoeslag in het ontwerp (zie <a href="kaynak-sonrasi-talasli-isleme.html">bewerken na het lassen</a>). Bij drukapparatuur volgt het bewerken zo nodig op de warmtebehandeling.</p>
<h2>Meten en acceptatie</h2>
<p>Vlakheid wordt gecontroleerd met haarliniaal en voelermaat, op een vlakplaat of met een meetarm. De acceptatiewaarde hangt af van pakkingtype en druk en hoort op de tekening. Gatpositie en haaksheid van de flens op de as horen in hetzelfde rapport.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij delen met flenzen plannen we lasvolgorde en inklemming om vervorming te beperken en controleren we de vlakheid na het lassen. Moet het pakkingvlak bewerkt worden, dan coördineren we de verspaning met partners. <a href="../kaynakli-imalat.html">Laswerk →</a></p></div>
`,
    faq: [
      ['Waarom vervormt een flens bij het lassen?', 'De krimp van de hoeklas trekt hem naar de laszijde.'],
      ['Hoe beperk je vervorming?', 'Voldoende dikte, gebalanceerde volgorde, mal en geen te grote lassen.'],
      ['Hoe bereik je krappe vlakheid?', 'Door het vlak na het lassen te bewerken; bewerkingstoeslag voorzien.'],
      ['Wie bepaalt de vlakheidswaarde?', 'De ontwerpeigenaar op de tekening, op basis van pakking en druk.']
    ],
    cta_h3: 'Gelaste flensdelen nodig?',
    cta_p: 'Stuur tekeningen en vlakheidseis; we stellen een offerte op.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Planhet ved flenssveising: hvorfor flenser deformeres og hvordan det unngås',
    meta: 'Flenssveising på rør, tanker, hus og girkassetilkoblinger: sveiseflenser, påskyvingsflenser og plateflenser, deformasjon av flensflaten etter sveising, pakning og tetthet, sveiserekkefølge, jigger, maskinering etter sveising og måling.',
    og: 'Planhet ved flenssveising',
    tag: 'Teknisk guide · Deformasjon',
    h1: 'Planhet ved flenssveising: hvorfor flenser deformeres og hvordan det unngås',
    crumb: 'Flensplanhet',
    read: '6 min lesing',
    body: `
<p>En tank, et hydraulikkhus, en rørledning eller et girhus kobles ofte til via en flens. Er flensflaten ikke plan, presses pakningen ujevnt: lekkasje, bolter som løsner eller motstykker som tvinges sammen i monteringen. Flenssveising er et av stedene der planhet oftest gir problemer i sveiseproduksjon.</p>
<h2>Flenstyper</h2>
<ul>
<li><strong>Sveiseflens (weld-neck):</strong> buttsveises til røret; halsen fordeler spenningen. Foretrukket for trykk- og høytemperaturledninger.</li>
<li><strong>Påskyvingsflens (slip-on):</strong> røret skyves inn og kilsveises innvendig og utvendig. Økonomisk, men den innvendige sveisen ligger nær flaten og gir deformasjonsrisiko.</li>
<li><strong>Plateflens:</strong> laserskåret plan plate sveiset til et hus eller en tankvegg. Vanlig på maskinhus og tanktilkoblinger.</li>
</ul>
<h2>Hvorfor deformasjon oppstår</h2>
<p>Kilsveisen krymper ved avkjøling og trekker flensen mot sveisesiden. Flaten blir skålformet, eller én side løfter seg der sveisingen er konsentrert. Tynne flenser, ensidig sveising og høy varmetilførsel forsterker effekten (se <a href="kaynak-distorsiyonu.html">sveisedeformasjon</a>).</p>
<h2>Forebygging</h2>
<ul>
<li><strong>Tilstrekkelig flenstykkelse:</strong> en svært tynn flens gjør planhet vanskelig fra start.</li>
<li><strong>Balansert sveiserekkefølge:</strong> korte motstående segmenter fordeler krympingen.</li>
<li><strong>Jigg og stiv innspenning:</strong> å bolte flensen til en bukk eller blindflens under sveising begrenser deformasjonen.</li>
<li><strong>Forhåndsdeformering:</strong> en liten motvinkel basert på erfaring.</li>
<li><strong>Ikke overdimensjonerte sveiser.</strong></li>
</ul>
<h2>Maskinering etter sveising</h2>
<p>Krever pakningsflaten stram planhet, er planing i dreiebenk eller fresing etter sveising den sikreste løsningen, med maskineringstillegg i konstruksjonen (se <a href="kaynak-sonrasi-talasli-isleme.html">maskinering etter sveising</a>). På trykkutstyr maskineres det etter eventuell varmebehandling.</p>
<h2>Måling og aksept</h2>
<p>Planhet kontrolleres med linjal og søkerblad, på retteplate eller med målearm. Akseptverdien avhenger av pakningstype og trykk og skal stå på tegningen. Hullbilde og flensens vinkelrethet mot aksen hører med i samme rapport.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> på flensdeler planlegger vi sveiserekkefølge og innspenning for å begrense deformasjon og kontrollerer planheten etter sveising. Må pakningsflaten maskineres, koordinerer vi det med partnere. <a href="../kaynakli-imalat.html">Sveiseproduksjon →</a></p></div>
`,
    faq: [
      ['Hvorfor deformeres en flens ved sveising?', 'Krympingen i kilsveisen trekker den mot sveisesiden.'],
      ['Hvordan reduseres deformasjon?', 'Nok tykkelse, balansert rekkefølge, jigg og sveiser som ikke er overdimensjonert.'],
      ['Hvordan oppnås stram planhet?', 'Ved å maskinere flaten etter sveising; sett av maskineringstillegg.'],
      ['Hvem bestemmer planhetsverdien?', 'Konstruksjonseieren på tegningen, ut fra pakning og trykk.']
    ],
    cta_h3: 'Trenger du sveisede flensdeler?',
    cta_p: 'Send tegninger og planhetskrav; vi utarbeider tilbud.',
    cta_btn: 'Be om tilbud →'
  }
};
