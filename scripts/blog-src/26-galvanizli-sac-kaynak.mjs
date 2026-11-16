export default {
  order: 26,
  slug: 'galvanizli-sac-kaynagi',
  key: 'p26_galvsheet',
  date: '2026-04-20',
  keywords: 'galvanizli sac kaynağı, galvanizli malzeme kaynağı, çinko kaplı sac kaynak, MIG lehim CuSi3, galvaniz onarımı ISO 1461, çinko dumanı, welding galvanized steel, verzinkten Stahl schweißen, soudage acier galvanisé',
  related: ['sicak-daldirma-galvaniz-kaynakli-parca', 'mig-mag-parametreleri', 'kaynak-hatalari-onarim', 'iso-12944-korozyon-siniflari-c1-c5-cx'],
  tr: {
    title: 'Galvanizli Sac Kaynağı: Gözenek, Çinko Dumanı ve Kaplama Onarımı',
    meta: 'Galvanizli ve çinko kaplı sac nasıl kaynatılır? Gözenek ve sıçrantının nedeni, kaplamanın yerel olarak alınması, birleşim aralığı ve parametreler, ince saclarda MIG lehim (CuSi3), çinko dumanına karşı önlemler ve ISO 1461’e göre kaplama onarımı.',
    og: 'Galvanizli Sac Kaynağı ve Onarım',
    tag: 'Kaynak Uygulaması · Galvaniz',
    h1: 'Galvanizli Sac Kaynağı: Gözenek, Çinko Dumanı ve Kaplama Onarımı',
    crumb: 'Galvanizli Sac Kaynağı',
    read: '6 dk okuma',
    body: `
<p>Galvanizli malzemeyle kaynak, iki ayrı durumda karşımıza çıkar: önceden çinko kaplanmış sacların (sürekli galvaniz, elektro galvaniz) kaynatılması ve sıcak daldırma galvanizli parçalara sonradan kaynak yapılması. Her ikisinde de sorunun kaynağı aynıdır: <strong>çinko, çeliğin eridiği sıcaklıktan çok önce buharlaşır</strong>.</p>
<h2>Neden Sorun Çıkar?</h2>
<p>Çinko yaklaşık 420 °C’de erir, 907 °C civarında kaynar. Kaynak arkı bölgeyi 1500 °C’nin üzerine çıkardığında çinko buharı kaynak banyosundan dışarı çıkmaya çalışır. Sonuçlar:</p>
<ul>
<li><strong>Gözenek:</strong> Buhar katılaşan banyoda hapsolur; özellikle köşe ve bindirme birleşimlerinde, iki kaplı yüzeyin arasında yoğundur.</li>
<li><strong>Sıçrantı ve ark kararsızlığı:</strong> Buhar arkı bozar, dikiş düzensizleşir.</li>
<li><strong>Kaynak çevresinde kaplama kaybı:</strong> Isı tesiri altındaki bölgede çinko yanar ve korozyon koruması kalkar.</li>
<li><strong>Sağlık riski:</strong> Çinko oksit dumanı, solunduğunda “metal dumanı ateşi” denen ateşli bir tabloya yol açabilir.</li>
</ul>
<h2>Kaplamayı Almak mı, Üzerinden Kaynatmak mı?</h2>
<p>Yapısal ve yük taşıyan kaynaklarda en güvenilir yol, kaynak bölgesinde kaplamayı <strong>taşlama ile yerel olarak almaktır</strong>. Böylece gözenek ve sıçrantı belirgin şekilde azalır, kaynak kalitesi kaplamasız çeliğe yaklaşır. Alınacak bant genişliği, kaynak tipine göre birkaç santimetre olacak şekilde planlanır. Kaplamanın alınması mümkün değilse, üzerinden kaynak için aşağıdaki önlemler uygulanır.</p>
<h2>Kaplama Üzerinden Kaynakta Önlemler</h2>
<ul>
<li><strong>Buhar için çıkış yolu:</strong> Bindirme ve T birleşimlerde parçalar arasında küçük bir aralık (yaklaşık 1–1,5 mm) bırakmak buharın kaçmasını sağlar.</li>
<li><strong>Kaynak hızı:</strong> Biraz daha yavaş ilerlemek, buharın banyo katılaşmadan çıkmasına zaman tanır.</li>
<li><strong>Torç açısı ve teknik:</strong> Hafif itme açısı ve kısa ark, çinkonun banyonun önünde buharlaşmasına yardım eder.</li>
<li><strong>Koruyucu gaz ve tel:</strong> Silisyum ve mangan içeriği yüksek teller ile uygun Ar-CO₂ karışımı gözenek eğilimini azaltır (bkz. <a href="mig-mag-parametreleri.html">MIG/MAG parametreleri</a>). Darbeli (pulse) ark sıçrantıyı düşürür.</li>
<li><strong>Yöntem nitelendirmesi:</strong> Kaplamalı malzeme üzerinde yapılacak yük taşıyan kaynaklar için WPS’in kaplamalı numune üzerinde doğrulanması gerekebilir.</li>
</ul>
<h2>İnce Saclarda MIG Lehim</h2>
<p>Otomotiv, havalandırma ve ince kaplı saclarda sık kullanılan çözüm <strong>MIG lehimdir</strong>. Ana malzeme eritilmez; düşük ergime sıcaklığına sahip bakır bazlı bir tel (örneğin CuSi3 veya CuAl8) ile birleştirme yapılır. Isı girdisi düşük olduğu için çinko kaplama çok daha az zarar görür ve bağlantı çevresinde korozyon koruması büyük ölçüde korunur. Ancak mukavemet çelik kaynağına göre düşüktür; yük taşıyan birleşimler için uygun olup olmadığı tasarımda değerlendirilmelidir.</p>
<h2>Kaynak Sonrası Kaplama Onarımı</h2>
<p>Kaynak bölgesinde kaybolan çinko mutlaka onarılmalıdır. Sıcak daldırma galvaniz için <strong>ISO 1461</strong>, onarımı çinko bakımından zengin boya veya termal çinko püskürtme ile tarif eder ve onarılabilecek alanı sınırlar: toplam onarım alanı yüzeyin %0,5’ini, tek bir alan ise 10 cm²’yi geçmemelidir. Onarım kaplaması, yerel kaplama kalınlığı şartının genellikle 30 µm üzerinde olmalıdır. Daha büyük alanlarda parçanın yeniden galvanizlenmesi gerekebilir.</p>
<p>Mümkün olan her durumda daha iyi bir yol, parçayı <strong>önce kaynatıp sonra galvanize göndermektir</strong> (bkz. <a href="sicak-daldirma-galvaniz-kaynakli-parca.html">galvaniz için kaynaklı parça tasarımı</a>).</p>
<h2>İş Sağlığı</h2>
<p>Galvanizli malzeme kaynağında kaynak noktasında <strong>lokal duman emişi</strong> ve iyi havalandırma şarttır. Kapalı alanlarda uygun solunum koruyucu kullanılmalıdır. Kaplamanın taşlanarak alınması, dumanı kaynaktan önce büyük ölçüde azaltır.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Galvanizli malzemeli işlerde, yük taşıyan birleşimlerde kaplamayı kaynak bölgesinden alarak kaynatır, kaynak sonrası çinko bakımından zengin boyayla onarımı yaparız. Mümkün olduğunda imalatı galvaniz öncesine planlamayı öneririz; seçim teklif aşamasında birlikte yapılır. <a href="../kaynakli-imalat.html">Kaynaklı imalat hizmetimiz →</a></p></div>
`,
    faq: [
      ['Galvanizli sac kaynağında neden gözenek olur?', 'Çinko yaklaşık 907 °C’de buharlaşır; buhar kaynak banyosunda hapsolarak gözenek oluşturur. Özellikle iki kaplı yüzeyin birleştiği bindirme ve köşe kaynaklarında görülür.'],
      ['Galvanizli malzeme kaynak öncesi taşlanmalı mı?', 'Yük taşıyan kaynaklarda kaplamanın kaynak bölgesinden yerel olarak alınması en güvenilir yöntemdir; gözenek ve sıçrantıyı belirgin şekilde azaltır.'],
      ['MIG lehim nedir?', 'Ana malzemeyi eritmeden CuSi3 gibi bakır bazlı tel ile yapılan birleştirmedir. Düşük ısı girdisi sayesinde çinko kaplama daha az zarar görür, ancak mukavemet çelik kaynağından düşüktür.'],
      ['Kaynak sonrası galvaniz nasıl onarılır?', 'ISO 1461’e göre çinko bakımından zengin boya veya termal çinko püskürtme ile; toplam onarım alanı yüzeyin %0,5’ini, tek alan 10 cm²’yi geçmemelidir.']
    ],
    cta_h3: 'Galvanizli parçalarda doğru kaynak yöntemi',
    cta_p: 'Çiziminizi ve kaplama durumunu paylaşın; kaynak yöntemi ve onarım dahil teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Welding Galvanized Steel: Porosity, Zinc Fumes and Coating Repair',
    meta: 'How do you weld galvanized and zinc-coated sheet? Why porosity and spatter occur, local coating removal, joint gap and parameters, MIG brazing (CuSi3) on thin sheet, precautions against zinc fumes and coating repair to ISO 1461.',
    og: 'Welding Galvanized Steel and Repair',
    tag: 'Welding Practice · Galvanizing',
    h1: 'Welding Galvanized Steel: Porosity, Zinc Fumes and Coating Repair',
    crumb: 'Welding Galvanized Steel',
    read: '6 min read',
    body: `
<p>Welding galvanized material comes up in two situations: welding pre-coated sheet (continuous hot-dip or electro-galvanized) and welding parts that have already been hot-dip galvanized. In both, the root of the problem is the same: <strong>zinc vaporizes long before steel melts</strong>.</p>
<h2>Why Problems Occur</h2>
<p>Zinc melts at about 420 °C and boils at around 907 °C. When the arc takes the area above 1500 °C, zinc vapour tries to escape through the weld pool. The results:</p>
<ul>
<li><strong>Porosity:</strong> vapour is trapped in the solidifying pool, especially in fillet and lap joints between two coated surfaces.</li>
<li><strong>Spatter and arc instability:</strong> the vapour disturbs the arc and the weld becomes irregular.</li>
<li><strong>Coating loss around the weld:</strong> zinc burns off in the heat-affected zone and corrosion protection is lost.</li>
<li><strong>Health risk:</strong> inhaled zinc oxide fume can cause a feverish condition known as metal fume fever.</li>
</ul>
<h2>Remove the Coating or Weld Through It?</h2>
<p>For structural and load-bearing welds, the most reliable route is to <strong>grind the coating off locally</strong> in the weld area. Porosity and spatter fall sharply and weld quality approaches that of uncoated steel. The width of the cleaned band is planned at a few centimetres depending on the weld. Where removal is not possible, the measures below apply for welding through the coating.</p>
<h2>Measures When Welding Through the Coating</h2>
<ul>
<li><strong>An escape route for vapour:</strong> a small gap (about 1–1.5 mm) between parts in lap and T joints lets vapour escape.</li>
<li><strong>Travel speed:</strong> moving slightly slower gives vapour time to leave before the pool solidifies.</li>
<li><strong>Torch angle and technique:</strong> a slight push angle and short arc help zinc vaporize ahead of the pool.</li>
<li><strong>Gas and wire:</strong> wires with higher silicon and manganese and a suitable Ar-CO₂ mix reduce porosity (see <a href="mig-mag-parametreleri.html">MIG/MAG parameters</a>). Pulsed arc lowers spatter.</li>
<li><strong>Procedure qualification:</strong> for load-bearing welds on coated material, the WPS may need to be verified on coated test pieces.</li>
</ul>
<h2>MIG Brazing on Thin Sheet</h2>
<p>A common solution for automotive, ventilation and thin coated sheet is <strong>MIG brazing</strong>. The parent metal is not melted; a copper-based wire with a low melting point (e.g. CuSi3 or CuAl8) makes the joint. Because heat input is low, the zinc coating is far less damaged and corrosion protection around the joint is largely preserved. Strength is lower than a steel weld, however; suitability for load-bearing joints must be assessed in design.</p>
<h2>Coating Repair After Welding</h2>
<p>Zinc lost at the weld must be restored. For hot-dip galvanizing, <strong>ISO 1461</strong> describes repair with zinc-rich paint or thermal zinc spraying and limits the repairable area: the total repaired area should not exceed 0.5% of the surface, and a single area 10 cm². The repair coating is usually required to be 30 µm thicker than the local coating requirement. Larger areas may require regalvanizing the part.</p>
<p>Wherever possible, the better route is to <strong>weld first and galvanize afterwards</strong> (see <a href="sicak-daldirma-galvaniz-kaynakli-parca.html">designing welded parts for galvanizing</a>).</p>
<h2>Health and Safety</h2>
<p>Welding galvanized material requires <strong>local fume extraction</strong> at the weld and good ventilation. Suitable respiratory protection should be used in confined areas. Grinding off the coating greatly reduces fume before welding.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> on galvanized work, we weld load-bearing joints after removing the coating from the weld area and repair afterwards with zinc-rich paint. Where possible we recommend planning fabrication before galvanizing; the choice is made together at quotation. <a href="../kaynakli-imalat.html">Our welded fabrication service →</a></p></div>
`,
    faq: [
      ['Why does welding galvanized steel cause porosity?', 'Zinc vaporizes at about 907 °C and the vapour becomes trapped in the weld pool, especially in lap and fillet joints between two coated surfaces.'],
      ['Should galvanized steel be ground before welding?', 'For load-bearing welds, removing the coating locally in the weld area is the most reliable method and sharply reduces porosity and spatter.'],
      ['What is MIG brazing?', 'Joining with a copper-based wire such as CuSi3 without melting the parent metal. Low heat input spares the zinc coating, but strength is lower than a steel weld.'],
      ['How is galvanizing repaired after welding?', 'To ISO 1461 with zinc-rich paint or thermal zinc spray; total repaired area should not exceed 0.5% of the surface and a single area 10 cm².']
    ],
    cta_h3: 'The right welding method for galvanized parts',
    cta_p: 'Share your drawing and coating condition; we will quote including welding method and repair.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Verzinkten Stahl schweißen: Poren, Zinkrauch und Ausbesserung der Verzinkung',
    meta: 'Wie schweißt man verzinkte und zinkbeschichtete Bleche? Ursachen für Poren und Spritzer, örtliches Entfernen der Schicht, Spalt und Parameter, MIG-Löten (CuSi3) bei Dünnblech, Schutz vor Zinkrauch und Ausbesserung nach ISO 1461.',
    og: 'Verzinkten Stahl schweißen und ausbessern',
    tag: 'Schweißpraxis · Verzinkung',
    h1: 'Verzinkten Stahl schweißen: Poren, Zinkrauch und Ausbesserung der Verzinkung',
    crumb: 'Verzinkten Stahl schweißen',
    read: '6 Min. Lesezeit',
    body: `
<p>Schweißen an verzinktem Material kommt in zwei Fällen vor: bei vorbeschichteten Blechen (bandverzinkt, elektrolytisch verzinkt) und bei bereits feuerverzinkten Bauteilen. In beiden Fällen ist die Ursache dieselbe: <strong>Zink verdampft lange bevor Stahl schmilzt</strong>.</p>
<h2>Warum es Probleme gibt</h2>
<p>Zink schmilzt bei etwa 420 °C und siedet bei rund 907 °C. Wenn der Lichtbogen den Bereich über 1500 °C erhitzt, drängt Zinkdampf durch das Schmelzbad. Folgen:</p>
<ul>
<li><strong>Poren:</strong> Dampf wird im erstarrenden Bad eingeschlossen, besonders bei Kehl- und Überlappstößen zwischen zwei beschichteten Flächen.</li>
<li><strong>Spritzer und unruhiger Lichtbogen:</strong> der Dampf stört den Bogen, die Naht wird unregelmäßig.</li>
<li><strong>Schichtverlust neben der Naht:</strong> in der Wärmeeinflusszone verbrennt das Zink, der Korrosionsschutz geht verloren.</li>
<li><strong>Gesundheitsrisiko:</strong> eingeatmeter Zinkoxidrauch kann das sogenannte Metallrauchfieber auslösen.</li>
</ul>
<h2>Schicht entfernen oder durchschweißen?</h2>
<p>Bei tragenden Nähten ist der sicherste Weg, die Schicht im Nahtbereich <strong>örtlich abzuschleifen</strong>. Poren und Spritzer nehmen deutlich ab, die Nahtqualität nähert sich unbeschichtetem Stahl an. Die Breite des blanken Streifens wird je nach Naht mit einigen Zentimetern geplant. Ist das Entfernen nicht möglich, gelten die folgenden Maßnahmen.</p>
<h2>Maßnahmen beim Schweißen durch die Schicht</h2>
<ul>
<li><strong>Entgasungsweg:</strong> ein kleiner Spalt (etwa 1–1,5 mm) zwischen den Teilen bei Überlapp- und T-Stößen lässt den Dampf entweichen.</li>
<li><strong>Schweißgeschwindigkeit:</strong> etwas langsamer schweißen, damit der Dampf vor dem Erstarren entweichen kann.</li>
<li><strong>Brennerstellung und Technik:</strong> leicht stechend und mit kurzem Lichtbogen verdampft das Zink vor dem Bad.</li>
<li><strong>Gas und Draht:</strong> Drähte mit höherem Silizium- und Mangangehalt und ein passendes Ar-CO₂-Gemisch senken die Porenneigung (siehe <a href="mig-mag-parametreleri.html">MIG/MAG-Parameter</a>). Impulslichtbogen reduziert Spritzer.</li>
<li><strong>Verfahrensprüfung:</strong> Für tragende Nähte an beschichtetem Material kann eine Bestätigung der WPS an beschichteten Proben nötig sein.</li>
</ul>
<h2>MIG-Löten bei Dünnblech</h2>
<p>Bei Fahrzeugbau, Lüftung und dünnen beschichteten Blechen ist <strong>MIG-Löten</strong> verbreitet. Der Grundwerkstoff wird nicht aufgeschmolzen; ein kupferbasierter Draht mit niedrigem Schmelzpunkt (z. B. CuSi3 oder CuAl8) bildet die Verbindung. Die geringe Wärmeeinbringung schont die Zinkschicht, der Korrosionsschutz bleibt weitgehend erhalten. Die Festigkeit liegt jedoch unter einer Stahlschweißung; die Eignung für tragende Verbindungen ist in der Konstruktion zu prüfen.</p>
<h2>Ausbesserung nach dem Schweißen</h2>
<p>Das an der Naht verlorene Zink muss ersetzt werden. Für Feuerverzinkung beschreibt <strong>ISO 1461</strong> die Ausbesserung mit zinkstaubhaltiger Beschichtung oder thermischem Spritzverzinken und begrenzt die Fläche: insgesamt höchstens 0,5 % der Oberfläche, je Einzelfläche höchstens 10 cm². Die Ausbesserungsschicht soll in der Regel 30 µm dicker sein als die örtlich geforderte Schichtdicke. Größere Flächen können eine Neuverzinkung erfordern.</p>
<p>Wo immer möglich, ist es besser, <strong>erst zu schweißen und dann zu verzinken</strong> (siehe <a href="sicak-daldirma-galvaniz-kaynakli-parca.html">verzinkungsgerechte Schweißteile</a>).</p>
<h2>Arbeitsschutz</h2>
<p>Beim Schweißen verzinkter Werkstoffe sind <strong>Absaugung an der Entstehungsstelle</strong> und gute Lüftung Pflicht. In engen Räumen ist geeigneter Atemschutz zu verwenden. Abschleifen der Schicht senkt die Rauchentwicklung bereits vor dem Schweißen deutlich.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei verzinkten Bauteilen schweißen wir tragende Verbindungen nach örtlichem Entfernen der Schicht und bessern danach mit zinkstaubhaltiger Beschichtung aus. Wo möglich, empfehlen wir, die Fertigung vor die Verzinkung zu legen; die Entscheidung treffen wir gemeinsam im Angebot. <a href="../kaynakli-imalat.html">Unsere Schweißfertigung →</a></p></div>
`,
    faq: [
      ['Warum entstehen beim Schweißen verzinkter Bleche Poren?', 'Zink verdampft bei etwa 907 °C, der Dampf wird im Schmelzbad eingeschlossen, besonders bei Überlapp- und Kehlnähten zwischen beschichteten Flächen.'],
      ['Sollte die Verzinkung vor dem Schweißen abgeschliffen werden?', 'Bei tragenden Nähten ist das örtliche Entfernen der Schicht die sicherste Methode und reduziert Poren und Spritzer deutlich.'],
      ['Was ist MIG-Löten?', 'Fügen mit kupferbasiertem Draht wie CuSi3 ohne Aufschmelzen des Grundwerkstoffs. Die Zinkschicht wird geschont, die Festigkeit ist aber geringer als beim Schweißen.'],
      ['Wie wird die Verzinkung nach dem Schweißen ausgebessert?', 'Nach ISO 1461 mit zinkstaubhaltiger Beschichtung oder Spritzverzinken; insgesamt höchstens 0,5 % der Oberfläche und je Fläche 10 cm².']
    ],
    cta_h3: 'Das richtige Schweißverfahren für verzinkte Teile',
    cta_p: 'Senden Sie Zeichnung und Beschichtungszustand; wir erstellen ein Angebot inklusive Verfahren und Ausbesserung.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Soldar acero galvanizado: poros, humos de zinc y reparación del recubrimiento',
    meta: 'Cómo soldar chapa galvanizada y con recubrimiento de zinc: por qué aparecen poros y proyecciones, eliminación local del recubrimiento, separación y parámetros, soldobrazing MIG (CuSi3) en chapa fina, precauciones frente a humos de zinc y reparación según ISO 1461.',
    og: 'Soldar acero galvanizado y reparar',
    tag: 'Práctica de soldadura · Galvanizado',
    h1: 'Soldar acero galvanizado: poros, humos de zinc y reparación del recubrimiento',
    crumb: 'Soldar acero galvanizado',
    read: '6 min de lectura',
    body: `
<p>Soldar material galvanizado se presenta en dos casos: chapa prerrecubierta (galvanizado en continuo o electrocincado) y piezas ya galvanizadas en caliente. En ambos la causa es la misma: <strong>el zinc se vaporiza mucho antes de que funda el acero</strong>.</p>
<h2>Por qué hay problemas</h2>
<p>El zinc funde a unos 420 °C y hierve hacia 907 °C. Cuando el arco lleva la zona por encima de 1500 °C, el vapor de zinc intenta salir por el baño. Consecuencias:</p>
<ul>
<li><strong>Poros:</strong> el vapor queda atrapado en el baño que solidifica, sobre todo en uniones en ángulo y solapadas entre dos superficies recubiertas.</li>
<li><strong>Proyecciones e inestabilidad del arco:</strong> el vapor perturba el arco y el cordón se vuelve irregular.</li>
<li><strong>Pérdida de recubrimiento junto al cordón:</strong> el zinc se quema en la ZAT y desaparece la protección.</li>
<li><strong>Riesgo para la salud:</strong> el humo de óxido de zinc inhalado puede causar la llamada fiebre de los metales.</li>
</ul>
<h2>¿Eliminar el recubrimiento o soldar encima?</h2>
<p>En soldaduras estructurales y portantes, lo más fiable es <strong>amolar localmente el recubrimiento</strong> en la zona de soldadura. Los poros y proyecciones bajan mucho y la calidad se acerca a la del acero sin recubrir. El ancho de la franja limpia se planifica en unos centímetros según la soldadura. Si no es posible, se aplican las medidas siguientes.</p>
<h2>Medidas al soldar sobre el recubrimiento</h2>
<ul>
<li><strong>Salida para el vapor:</strong> una pequeña separación (unos 1–1,5 mm) entre piezas en uniones solapadas y en T deja escapar el vapor.</li>
<li><strong>Velocidad:</strong> avanzar algo más despacio da tiempo al vapor para salir antes de que solidifique el baño.</li>
<li><strong>Ángulo y técnica:</strong> un ligero ángulo de empuje y arco corto ayudan a vaporizar el zinc delante del baño.</li>
<li><strong>Gas e hilo:</strong> hilos con más silicio y manganeso y una mezcla Ar-CO₂ adecuada reducen la porosidad (ver <a href="mig-mag-parametreleri.html">parámetros MIG/MAG</a>). El arco pulsado reduce proyecciones.</li>
<li><strong>Cualificación:</strong> para soldaduras portantes sobre material recubierto puede ser necesario verificar la WPS en probetas recubiertas.</li>
</ul>
<h2>Soldobrazing MIG en chapa fina</h2>
<p>En automoción, ventilación y chapa fina recubierta es habitual el <strong>soldobrazing MIG</strong>. No se funde el metal base; se une con un hilo base cobre de bajo punto de fusión (p. ej. CuSi3 o CuAl8). Con poco aporte térmico, el zinc sufre mucho menos y la protección alrededor de la unión se conserva en gran parte. La resistencia es menor que la de una soldadura de acero; su idoneidad para uniones portantes debe evaluarse en el diseño.</p>
<h2>Reparación del recubrimiento</h2>
<p>El zinc perdido en la soldadura debe reponerse. Para galvanizado en caliente, la <strong>ISO 1461</strong> describe la reparación con pintura rica en zinc o metalización térmica y limita la superficie: el área total reparada no debe superar el 0,5 % de la superficie, ni cada zona 10 cm². El espesor de reparación suele exigirse 30 µm por encima del requisito local. Superficies mayores pueden requerir regalvanizar la pieza.</p>
<p>Siempre que sea posible, es mejor <strong>soldar primero y galvanizar después</strong> (ver <a href="sicak-daldirma-galvaniz-kaynakli-parca.html">diseño de piezas soldadas para galvanizar</a>).</p>
<h2>Seguridad y salud</h2>
<p>Al soldar galvanizado son imprescindibles la <strong>aspiración localizada</strong> y una buena ventilación. En espacios confinados debe usarse protección respiratoria adecuada. Amolar el recubrimiento reduce mucho el humo antes de soldar.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> en trabajos con galvanizado soldamos las uniones portantes tras eliminar el recubrimiento de la zona y reparamos después con pintura rica en zinc. Cuando es posible, recomendamos planificar la fabricación antes del galvanizado; la elección se hace en la oferta. <a href="../kaynakli-imalat.html">Nuestro servicio de fabricación soldada →</a></p></div>
`,
    faq: [
      ['¿Por qué salen poros al soldar galvanizado?', 'El zinc se vaporiza a unos 907 °C y el vapor queda atrapado en el baño, sobre todo en uniones solapadas y en ángulo entre superficies recubiertas.'],
      ['¿Hay que amolar el galvanizado antes de soldar?', 'En soldaduras portantes, eliminar localmente el recubrimiento es lo más fiable y reduce mucho poros y proyecciones.'],
      ['¿Qué es el soldobrazing MIG?', 'Unión con hilo base cobre como CuSi3 sin fundir el metal base. Respeta el zinc, pero su resistencia es menor que la de una soldadura.'],
      ['¿Cómo se repara el galvanizado tras soldar?', 'Según ISO 1461 con pintura rica en zinc o metalización; área total máxima 0,5 % de la superficie y 10 cm² por zona.']
    ],
    cta_h3: 'El método de soldadura adecuado para piezas galvanizadas',
    cta_p: 'Envíenos plano y estado del recubrimiento; ofertamos con método de soldadura y reparación.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Souder l’acier galvanisé : porosités, fumées de zinc et retouche du revêtement',
    meta: 'Comment souder les tôles galvanisées et revêtues de zinc ? Origine des porosités et projections, enlèvement local du revêtement, jeu et paramètres, soudo-brasage MIG (CuSi3) sur tôle mince, précautions contre les fumées de zinc et retouche selon l’ISO 1461.',
    og: 'Souder l’acier galvanisé et retoucher',
    tag: 'Pratique du soudage · Galvanisation',
    h1: 'Souder l’acier galvanisé : porosités, fumées de zinc et retouche du revêtement',
    crumb: 'Souder l’acier galvanisé',
    read: '6 min de lecture',
    body: `
<p>Le soudage de matériaux galvanisés se présente dans deux cas : tôles prérevêtues (galvanisation en continu, électrozingage) et pièces déjà galvanisées à chaud. Dans les deux, la cause est la même : <strong>le zinc se vaporise bien avant que l’acier ne fonde</strong>.</p>
<h2>Pourquoi des problèmes ?</h2>
<p>Le zinc fond vers 420 °C et bout vers 907 °C. Quand l’arc porte la zone au-delà de 1500 °C, la vapeur de zinc cherche à sortir par le bain. Conséquences :</p>
<ul>
<li><strong>Porosités :</strong> la vapeur reste piégée dans le bain qui se solidifie, surtout dans les assemblages d’angle et à recouvrement entre deux faces revêtues.</li>
<li><strong>Projections et arc instable :</strong> la vapeur perturbe l’arc et le cordon devient irrégulier.</li>
<li><strong>Perte de revêtement autour du cordon :</strong> le zinc brûle dans la ZAT et la protection disparaît.</li>
<li><strong>Risque sanitaire :</strong> la fumée d’oxyde de zinc inhalée peut provoquer la fièvre des fondeurs.</li>
</ul>
<h2>Enlever le revêtement ou souder à travers ?</h2>
<p>Pour les soudures structurales et porteuses, le plus fiable est de <strong>meuler localement le revêtement</strong> dans la zone de soudure. Porosités et projections diminuent fortement et la qualité se rapproche de celle de l’acier nu. La largeur de la bande décapée est prévue à quelques centimètres selon la soudure. À défaut, les mesures suivantes s’appliquent.</p>
<h2>Mesures pour souder à travers le revêtement</h2>
<ul>
<li><strong>Évacuation de la vapeur :</strong> un petit jeu (environ 1–1,5 mm) entre les pièces des assemblages à recouvrement et en T laisse s’échapper la vapeur.</li>
<li><strong>Vitesse :</strong> avancer un peu plus lentement laisse à la vapeur le temps de sortir avant solidification.</li>
<li><strong>Inclinaison et technique :</strong> une légère inclinaison en poussant et un arc court aident le zinc à se vaporiser devant le bain.</li>
<li><strong>Gaz et fil :</strong> des fils plus riches en silicium et manganèse et un mélange Ar-CO₂ adapté réduisent la porosité (voir <a href="mig-mag-parametreleri.html">paramètres MIG/MAG</a>). L’arc pulsé réduit les projections.</li>
<li><strong>Qualification :</strong> pour les soudures porteuses sur matériau revêtu, le DMOS peut devoir être validé sur éprouvettes revêtues.</li>
</ul>
<h2>Soudo-brasage MIG sur tôle mince</h2>
<p>En automobile, ventilation et tôles minces revêtues, le <strong>soudo-brasage MIG</strong> est courant. Le métal de base n’est pas fondu ; un fil base cuivre à bas point de fusion (p. ex. CuSi3 ou CuAl8) réalise l’assemblage. La faible énergie préserve largement le zinc autour du joint. La résistance est toutefois inférieure à celle d’une soudure acier ; l’aptitude aux assemblages porteurs doit être évaluée à la conception.</p>
<h2>Retouche du revêtement</h2>
<p>Le zinc perdu au droit de la soudure doit être restauré. Pour la galvanisation à chaud, l’<strong>ISO 1461</strong> décrit la retouche par peinture riche en zinc ou métallisation et limite la surface : au total 0,5 % de la surface au maximum, et 10 cm² par zone. L’épaisseur de retouche doit généralement dépasser de 30 µm l’exigence locale. Au-delà, une regalvanisation peut être nécessaire.</p>
<p>Chaque fois que possible, mieux vaut <strong>souder d’abord et galvaniser ensuite</strong> (voir <a href="sicak-daldirma-galvaniz-kaynakli-parca.html">conception de pièces soudées pour la galvanisation</a>).</p>
<h2>Santé et sécurité</h2>
<p>Le soudage de matériaux galvanisés impose une <strong>aspiration à la source</strong> et une bonne ventilation. En espace confiné, une protection respiratoire adaptée est nécessaire. Meuler le revêtement réduit fortement les fumées avant soudage.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> sur pièces galvanisées, nous soudons les assemblages porteurs après enlèvement local du revêtement et retouchons ensuite à la peinture riche en zinc. Lorsque c’est possible, nous recommandons de placer la fabrication avant la galvanisation ; le choix se fait ensemble au devis. <a href="../kaynakli-imalat.html">Notre fabrication soudée →</a></p></div>
`,
    faq: [
      ['Pourquoi des porosités en soudant du galvanisé ?', 'Le zinc se vaporise vers 907 °C et la vapeur reste piégée dans le bain, surtout dans les assemblages à recouvrement et d’angle entre faces revêtues.'],
      ['Faut-il meuler le galvanisé avant soudage ?', 'Pour les soudures porteuses, l’enlèvement local du revêtement est la méthode la plus fiable et réduit fortement porosités et projections.'],
      ['Qu’est-ce que le soudo-brasage MIG ?', 'Un assemblage au fil base cuivre comme le CuSi3 sans fusion du métal de base. Il préserve le zinc, mais la résistance est inférieure à une soudure.'],
      ['Comment retoucher la galvanisation après soudage ?', 'Selon l’ISO 1461, par peinture riche en zinc ou métallisation ; 0,5 % de la surface au total et 10 cm² par zone au maximum.']
    ],
    cta_h3: 'Le bon procédé pour les pièces galvanisées',
    cta_p: 'Transmettez plan et état du revêtement ; nous chiffrons procédé de soudage et retouche compris.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Saldare acciaio zincato: porosità, fumi di zinco e ripristino del rivestimento',
    meta: 'Come si saldano lamiere zincate e rivestite di zinco? Origine di porosità e spruzzi, rimozione locale del rivestimento, distanza e parametri, brasatura MIG (CuSi3) su lamiera sottile, precauzioni contro i fumi di zinco e ripristino secondo ISO 1461.',
    og: 'Saldare acciaio zincato e ripristinare',
    tag: 'Pratica di saldatura · Zincatura',
    h1: 'Saldare acciaio zincato: porosità, fumi di zinco e ripristino del rivestimento',
    crumb: 'Saldare acciaio zincato',
    read: '6 min di lettura',
    body: `
<p>La saldatura di materiale zincato si presenta in due casi: lamiere prerivestite (zincatura in continuo, elettrozincatura) e pezzi già zincati a caldo. In entrambi la causa è la stessa: <strong>lo zinco evapora molto prima che l’acciaio fonda</strong>.</p>
<h2>Perché nascono problemi</h2>
<p>Lo zinco fonde a circa 420 °C e bolle intorno a 907 °C. Quando l’arco porta la zona oltre 1500 °C, il vapore di zinco cerca di uscire attraverso il bagno. Conseguenze:</p>
<ul>
<li><strong>Porosità:</strong> il vapore resta intrappolato nel bagno che solidifica, soprattutto in giunti d’angolo e sovrapposti tra due superfici rivestite.</li>
<li><strong>Spruzzi e arco instabile:</strong> il vapore disturba l’arco e il cordone diventa irregolare.</li>
<li><strong>Perdita di rivestimento attorno al cordone:</strong> nella ZTA lo zinco brucia e la protezione scompare.</li>
<li><strong>Rischio per la salute:</strong> il fumo di ossido di zinco inalato può causare la cosiddetta febbre da fumi metallici.</li>
</ul>
<h2>Rimuovere il rivestimento o saldarci sopra?</h2>
<p>Per saldature strutturali e portanti la via più affidabile è <strong>molare localmente il rivestimento</strong> nella zona di saldatura. Porosità e spruzzi calano nettamente e la qualità si avvicina a quella dell’acciaio nudo. La larghezza della fascia pulita si pianifica in qualche centimetro secondo la saldatura. Se non è possibile, valgono le misure seguenti.</p>
<h2>Misure saldando sopra il rivestimento</h2>
<ul>
<li><strong>Via di fuga per il vapore:</strong> una piccola distanza (circa 1–1,5 mm) tra i pezzi nei giunti sovrapposti e a T fa uscire il vapore.</li>
<li><strong>Velocità:</strong> avanzare un po’ più lentamente dà tempo al vapore di uscire prima della solidificazione.</li>
<li><strong>Inclinazione e tecnica:</strong> una leggera inclinazione a spingere e arco corto aiutano lo zinco a evaporare davanti al bagno.</li>
<li><strong>Gas e filo:</strong> fili con più silicio e manganese e una miscela Ar-CO₂ adatta riducono la porosità (vedi <a href="mig-mag-parametreleri.html">parametri MIG/MAG</a>). L’arco pulsato riduce gli spruzzi.</li>
<li><strong>Qualifica:</strong> per saldature portanti su materiale rivestito può servire verificare la WPS su provini rivestiti.</li>
</ul>
<h2>Brasatura MIG su lamiera sottile</h2>
<p>In automotive, ventilazione e lamiere sottili rivestite è diffusa la <strong>brasatura MIG</strong>. Il materiale base non fonde; un filo a base rame a basso punto di fusione (es. CuSi3 o CuAl8) realizza il giunto. Il basso apporto termico preserva in gran parte lo zinco attorno al giunto. La resistenza è però inferiore a quella di una saldatura in acciaio; l’idoneità per giunti portanti va valutata in progetto.</p>
<h2>Ripristino del rivestimento</h2>
<p>Lo zinco perso sul cordone va ripristinato. Per la zincatura a caldo la <strong>ISO 1461</strong> descrive il ripristino con vernice ricca di zinco o metallizzazione termica e limita l’area: in totale non oltre lo 0,5 % della superficie, e non oltre 10 cm² per singola zona. Lo spessore di ripristino deve di solito superare di 30 µm il requisito locale. Aree maggiori possono richiedere una nuova zincatura.</p>
<p>Quando possibile è meglio <strong>saldare prima e zincare dopo</strong> (vedi <a href="sicak-daldirma-galvaniz-kaynakli-parca.html">progettare pezzi saldati per la zincatura</a>).</p>
<h2>Salute e sicurezza</h2>
<p>Nella saldatura di zincato sono indispensabili <strong>aspirazione localizzata</strong> e buona ventilazione. In spazi confinati va usata una protezione respiratoria adeguata. Molare il rivestimento riduce molto i fumi già prima della saldatura.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> sui lavori zincati saldiamo i giunti portanti dopo aver rimosso il rivestimento dalla zona e ripristiniamo poi con vernice ricca di zinco. Quando possibile consigliamo di pianificare la fabbricazione prima della zincatura; la scelta si fa insieme in offerta. <a href="../kaynakli-imalat.html">La nostra carpenteria saldata →</a></p></div>
`,
    faq: [
      ['Perché saldando zincato si formano porosità?', 'Lo zinco evapora a circa 907 °C e il vapore resta intrappolato nel bagno, soprattutto nei giunti sovrapposti e d’angolo tra superfici rivestite.'],
      ['Bisogna molare lo zincato prima di saldare?', 'Per saldature portanti la rimozione locale del rivestimento è il metodo più affidabile e riduce molto porosità e spruzzi.'],
      ['Cos’è la brasatura MIG?', 'Un giunto con filo a base rame come il CuSi3 senza fondere il materiale base. Preserva lo zinco, ma la resistenza è inferiore a una saldatura.'],
      ['Come si ripristina la zincatura dopo la saldatura?', 'Secondo ISO 1461 con vernice ricca di zinco o metallizzazione; massimo 0,5 % della superficie in totale e 10 cm² per zona.']
    ],
    cta_h3: 'Il metodo di saldatura giusto per i pezzi zincati',
    cta_p: 'Inviateci disegno e stato del rivestimento; quotiamo metodo di saldatura e ripristino inclusi.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Verzinkt staal lassen: poriën, zinkdampen en herstel van de deklaag',
    meta: 'Hoe las je verzinkte en zinkbeklede plaat? Oorzaken van poriën en spatten, de deklaag lokaal verwijderen, spleet en parameters, MIG-solderen (CuSi3) bij dunne plaat, maatregelen tegen zinkdampen en herstel volgens ISO 1461.',
    og: 'Verzinkt staal lassen en herstellen',
    tag: 'Laspraktijk · Verzinken',
    h1: 'Verzinkt staal lassen: poriën, zinkdampen en herstel van de deklaag',
    crumb: 'Verzinkt staal lassen',
    read: '6 min lezen',
    body: `
<p>Lassen van verzinkt materiaal komt in twee situaties voor: voorbeklede plaat (sendzimir- of elektrolytisch verzinkt) en delen die al thermisch verzinkt zijn. In beide gevallen is de oorzaak dezelfde: <strong>zink verdampt lang voordat staal smelt</strong>.</p>
<h2>Waarom er problemen ontstaan</h2>
<p>Zink smelt bij ongeveer 420 °C en kookt rond 907 °C. Als de boog de zone boven 1500 °C brengt, probeert zinkdamp door het smeltbad te ontsnappen. Gevolgen:</p>
<ul>
<li><strong>Poriën:</strong> damp raakt opgesloten in het stollende bad, vooral bij hoek- en overlapverbindingen tussen twee beklede vlakken.</li>
<li><strong>Spatten en onrustige boog:</strong> de damp verstoort de boog en de las wordt onregelmatig.</li>
<li><strong>Verlies van deklaag naast de las:</strong> in de WBZ verbrandt het zink en verdwijnt de corrosiebescherming.</li>
<li><strong>Gezondheidsrisico:</strong> ingeademde zinkoxidedamp kan zogeheten metaaldampkoorts veroorzaken.</li>
</ul>
<h2>Deklaag verwijderen of erdoorheen lassen?</h2>
<p>Bij constructieve en dragende lassen is het betrouwbaarst de deklaag in de laszone <strong>lokaal weg te slijpen</strong>. Poriën en spatten nemen sterk af en de laskwaliteit benadert die van onbekleed staal. De breedte van de blanke strook wordt afhankelijk van de las op enkele centimeters gepland. Kan dat niet, dan gelden de volgende maatregelen.</p>
<h2>Maatregelen bij lassen door de deklaag</h2>
<ul>
<li><strong>Uitweg voor de damp:</strong> een kleine spleet (ongeveer 1–1,5 mm) tussen de delen bij overlap- en T-verbindingen laat de damp ontsnappen.</li>
<li><strong>Lassnelheid:</strong> iets langzamer lassen geeft de damp tijd om te ontwijken voordat het bad stolt.</li>
<li><strong>Toortshoek en techniek:</strong> licht stekend en met korte boog verdampt het zink vóór het bad.</li>
<li><strong>Gas en draad:</strong> draden met meer silicium en mangaan en een passend Ar-CO₂-mengsel verminderen poriën (zie <a href="mig-mag-parametreleri.html">MIG/MAG-parameters</a>). Een pulsboog vermindert spatten.</li>
<li><strong>Kwalificatie:</strong> voor dragende lassen op bekleed materiaal kan het nodig zijn de WPS op beklede proefstukken te bevestigen.</li>
</ul>
<h2>MIG-solderen bij dunne plaat</h2>
<p>In de automotive, ventilatie en bij dunne beklede plaat is <strong>MIG-solderen</strong> gangbaar. Het basismateriaal smelt niet; een draad op koperbasis met laag smeltpunt (bijv. CuSi3 of CuAl8) maakt de verbinding. Door de lage warmte-inbreng blijft de zinklaag rond de verbinding grotendeels intact. De sterkte is wel lager dan bij een staallas; de geschiktheid voor dragende verbindingen moet in het ontwerp worden beoordeeld.</p>
<h2>Herstel van de deklaag</h2>
<p>Het bij de las verloren zink moet worden hersteld. Voor thermisch verzinken beschrijft <strong>ISO 1461</strong> herstel met zinkrijke verf of thermisch zinkspuiten en begrenst de oppervlakte: in totaal hoogstens 0,5 % van het oppervlak, per afzonderlijke plek hoogstens 10 cm². De herstellaag moet meestal 30 µm dikker zijn dan de lokale laagdikte-eis. Grotere oppervlakken kunnen opnieuw verzinken vereisen.</p>
<p>Waar mogelijk is het beter <strong>eerst te lassen en daarna te verzinken</strong> (zie <a href="sicak-daldirma-galvaniz-kaynakli-parca.html">gelaste delen ontwerpen voor verzinken</a>).</p>
<h2>Arbo</h2>
<p>Bij lassen van verzinkt materiaal zijn <strong>bronafzuiging</strong> en goede ventilatie verplicht. In besloten ruimten is passende ademhalingsbescherming nodig. Het wegslijpen van de deklaag vermindert de dampen al vóór het lassen sterk.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij verzinkt werk lassen we dragende verbindingen na lokaal verwijderen van de deklaag en herstellen we daarna met zinkrijke verf. Waar mogelijk adviseren we de fabricage vóór het verzinken te plannen; die keuze maken we samen bij de offerte. <a href="../kaynakli-imalat.html">Onze lasfabricage →</a></p></div>
`,
    faq: [
      ['Waarom ontstaan poriën bij het lassen van verzinkt staal?', 'Zink verdampt rond 907 °C en de damp raakt opgesloten in het bad, vooral bij overlap- en hoeklassen tussen beklede vlakken.'],
      ['Moet verzinking vóór het lassen worden weggeslepen?', 'Bij dragende lassen is lokaal verwijderen van de deklaag het betrouwbaarst en vermindert het poriën en spatten sterk.'],
      ['Wat is MIG-solderen?', 'Verbinden met een draad op koperbasis zoals CuSi3 zonder het basismateriaal te smelten. Het spaart de zinklaag, maar de sterkte is lager dan bij lassen.'],
      ['Hoe herstel je verzinking na het lassen?', 'Volgens ISO 1461 met zinkrijke verf of zinkspuiten; in totaal hoogstens 0,5 % van het oppervlak en 10 cm² per plek.']
    ],
    cta_h3: 'De juiste lasmethode voor verzinkte delen',
    cta_p: 'Deel uw tekening en de toestand van de deklaag; we offreren inclusief lasmethode en herstel.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Sveising av forsinket stål: porer, sinkrøyk og reparasjon av belegget',
    meta: 'Hvordan sveises forsinket og sinkbelagt plate? Hvorfor porer og sprut oppstår, lokal fjerning av belegget, spalte og parametere, MIG-lodding (CuSi3) på tynnplate, tiltak mot sinkrøyk og reparasjon etter ISO 1461.',
    og: 'Sveising av forsinket stål og reparasjon',
    tag: 'Sveisepraksis · Forsinking',
    h1: 'Sveising av forsinket stål: porer, sinkrøyk og reparasjon av belegget',
    crumb: 'Sveising av forsinket stål',
    read: '6 min lesing',
    body: `
<p>Sveising av forsinket materiale skjer i to situasjoner: forhåndsbelagt plate (kontinuerlig varmforsinket eller elektroforsinket) og deler som allerede er varmforsinket. I begge tilfeller er årsaken den samme: <strong>sink fordamper lenge før stålet smelter</strong>.</p>
<h2>Hvorfor det blir problemer</h2>
<p>Sink smelter ved omtrent 420 °C og koker rundt 907 °C. Når lysbuen varmer området over 1500 °C, prøver sinkdampen å slippe ut gjennom smeltebadet. Følgene:</p>
<ul>
<li><strong>Porer:</strong> dampen fanges i badet som stivner, særlig i kil- og overlappforbindelser mellom to belagte flater.</li>
<li><strong>Sprut og ustabil lysbue:</strong> dampen forstyrrer buen og sveisen blir ujevn.</li>
<li><strong>Tap av belegg ved sveisen:</strong> sinken brenner bort i HAZ og korrosjonsbeskyttelsen forsvinner.</li>
<li><strong>Helserisiko:</strong> innånding av sinkoksidrøyk kan gi såkalt metallrøykfeber.</li>
</ul>
<h2>Fjerne belegget eller sveise gjennom?</h2>
<p>For bærende og konstruktive sveiser er den sikreste veien å <strong>slipe bort belegget lokalt</strong> i sveiseområdet. Porer og sprut reduseres kraftig, og sveisekvaliteten nærmer seg ubelagt stål. Bredden på den rensede stripen planlegges til noen centimeter avhengig av sveisen. Er det ikke mulig, gjelder tiltakene nedenfor.</p>
<h2>Tiltak ved sveising gjennom belegget</h2>
<ul>
<li><strong>Utløp for dampen:</strong> en liten spalte (omtrent 1–1,5 mm) mellom delene i overlapp- og T-forbindelser lar dampen slippe ut.</li>
<li><strong>Sveisehastighet:</strong> litt lavere hastighet gir dampen tid til å forsvinne før badet stivner.</li>
<li><strong>Brennervinkel og teknikk:</strong> lett stikkende vinkel og kort lysbue hjelper sinken å fordampe foran badet.</li>
<li><strong>Gass og tråd:</strong> tråd med mer silisium og mangan og en egnet Ar-CO₂-blanding reduserer porer (se <a href="mig-mag-parametreleri.html">MIG/MAG-parametere</a>). Pulsbue reduserer sprut.</li>
<li><strong>Kvalifisering:</strong> for bærende sveiser på belagt materiale kan WPS-en måtte verifiseres på belagte prøvestykker.</li>
</ul>
<h2>MIG-lodding på tynnplate</h2>
<p>I bil, ventilasjon og tynn belagt plate brukes ofte <strong>MIG-lodding</strong>. Grunnmaterialet smeltes ikke; en kobberbasert tråd med lavt smeltepunkt (f.eks. CuSi3 eller CuAl8) lager forbindelsen. Lav varmetilførsel skåner sinkbelegget rundt skjøten. Fastheten er likevel lavere enn ved stålsveising; egnethet for bærende forbindelser må vurderes i konstruksjonen.</p>
<h2>Reparasjon av belegget</h2>
<p>Sink som er tapt ved sveisen må erstattes. For varmforsinking beskriver <strong>ISO 1461</strong> reparasjon med sinkrik maling eller termisk sinksprøyting og begrenser arealet: totalt maks 0,5 % av overflaten og maks 10 cm² per enkelt område. Reparasjonslaget skal vanligvis være 30 µm tykkere enn det lokale kravet. Større områder kan kreve ny forsinking.</p>
<p>Når det er mulig, er det bedre å <strong>sveise først og forsinke etterpå</strong> (se <a href="sicak-daldirma-galvaniz-kaynakli-parca.html">sveiste deler konstruert for varmforsinking</a>).</p>
<h2>Helse og sikkerhet</h2>
<p>Sveising av forsinket materiale krever <strong>punktavsug</strong> og god ventilasjon. I trange rom må egnet åndedrettsvern brukes. Å slipe bort belegget reduserer røyken betydelig allerede før sveising.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> på forsinkede deler sveiser vi bærende forbindelser etter lokal fjerning av belegget og reparerer etterpå med sinkrik maling. Når det er mulig, anbefaler vi å legge tilvirkningen før forsinkingen; valget gjøres sammen i tilbudet. <a href="../kaynakli-imalat.html">Vår sveisede tilvirkning →</a></p></div>
`,
    faq: [
      ['Hvorfor gir sveising av forsinket stål porer?', 'Sink fordamper rundt 907 °C, og dampen fanges i badet, særlig i overlapp- og kilsveiser mellom belagte flater.'],
      ['Bør forsinkingen slipes bort før sveising?', 'For bærende sveiser er lokal fjerning av belegget den sikreste metoden og reduserer porer og sprut kraftig.'],
      ['Hva er MIG-lodding?', 'Sammenføyning med kobberbasert tråd som CuSi3 uten å smelte grunnmaterialet. Skåner sinken, men fastheten er lavere enn ved sveising.'],
      ['Hvordan repareres forsinking etter sveising?', 'Etter ISO 1461 med sinkrik maling eller sinksprøyting; totalt maks 0,5 % av overflaten og 10 cm² per område.']
    ],
    cta_h3: 'Riktig sveisemetode for forsinkede deler',
    cta_p: 'Del tegning og beleggets tilstand; vi gir tilbud inkludert sveisemetode og reparasjon.',
    cta_btn: 'Be om tilbud →'
  }
};
