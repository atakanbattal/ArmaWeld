export default {
  order: 31,
  slug: 'elektrot-cesitleri-rutil-bazik-e7018',
  key: 'p31_electrode',
  date: '2026-11-16',
  keywords: 'elektrot çeşitleri, kaynak elektrodu, rutil elektrot, bazik elektrot, E7018, E6013, selülozik elektrot, ISO 2560, elektrot sınıflandırması, H5, electrode types, Stabelektroden Arten, électrodes enrobées',
  related: ['kaynak-cesitleri', 'on-isitma-hesaplama', 'kaynak-pozisyonlari', 'kaynakci-sertifikasi-en-iso-9606-1'],
  tr: {
    title: 'Elektrot Çeşitleri: Rutil, Bazik (E7018) ve Selülozik Elektrot Farkı',
    meta: 'Rutil, bazik ve selülozik elektrot farkı nedir? ISO 2560 ve AWS A5.1 kodları nasıl okunur (E 42 4 B 42 H5, E7018, E6013), hangi çaplar hangi akımla kullanılır, düşük hidrojenli elektrot ne zaman şarttır?',
    og: 'Elektrot Çeşitleri',
    tag: 'Sarf Malzeme · Elektrot',
    h1: 'Elektrot Çeşitleri: Rutil, Bazik (E7018) ve Selülozik Elektrot Farkı',
    crumb: 'Elektrot Çeşitleri',
    read: '6 dk okuma',
    body: `
<p>Örtülü elektrot, bir çekirdek tel ile onu saran örtüden oluşur. Örtü; arkı kararlı tutar, koruyucu gaz ve cüruf oluşturur, kaynak metaline alaşım elementi katar. Elektrotlar arasındaki asıl fark bu örtünün tipindedir ve bu fark; kaynak kolaylığını, mekanik değerleri ve hidrojen riskini doğrudan belirler.</p>
<h2>Örtü Tiplerine Göre Elektrotlar</h2>
<table class="data-table"><thead><tr><th>Tip</th><th>ISO 2560 harfi</th><th>AWS örneği</th><th>Güçlü yanı</th><th>Zayıf yanı</th></tr></thead><tbody>
<tr><td>Rutil</td><td>R / RR</td><td>E6013</td><td>Kolay tutuşma, düzgün görünüm, kolay cüruf kalkışı</td><td>Orta tokluk, hidrojen kontrolü sınırlı</td></tr>
<tr><td>Bazik (düşük hidrojenli)</td><td>B</td><td>E7018</td><td>Yüksek tokluk, düşük hidrojen, çatlak direnci</td><td>Kuru saklama ister, kullanımı daha zor</td></tr>
<tr><td>Selülozik</td><td>C</td><td>E6010 / E6011</td><td>Derin nüfuziyet, yukarıdan aşağı kök paso</td><td>Yüksek hidrojen, sıçrantı</td></tr>
</tbody></table>
<h2>ISO 2560-A Kodu Nasıl Okunur?</h2>
<p>Örnek: <strong>E 42 4 B 42 H5</strong></p>
<ul>
<li><strong>E:</strong> Örtülü elektrot.</li>
<li><strong>42:</strong> Kaynak metalinin minimum akma dayanımı yaklaşık 420 MPa.</li>
<li><strong>4:</strong> −40 °C’de en az 47 J darbe enerjisi.</li>
<li><strong>B:</strong> Bazik örtü.</li>
<li><strong>4:</strong> Verim ve akım türü (bu örnekte %105–125 verim, doğru akım).</li>
<li><strong>2:</strong> Kaynak pozisyonu (yukarıdan aşağı dikey hariç tüm pozisyonlar).</li>
<li><strong>H5:</strong> Kaynak metalinde en fazla 5 ml/100 g yayınabilir hidrojen.</li>
</ul>
<p>Alaşımlı elektrotlarda “E 46 3 1Ni B …” gibi bir bileşim simgesi de eklenir.</p>
<h2>AWS A5.1 Kodu</h2>
<p>AWS sisteminde <strong>E7018</strong> şöyle okunur: E elektrot, 70 yaklaşık 70 ksi (≈490 MPa) çekme dayanımı, 1 tüm pozisyonlar, 8 bazik demir tozlu örtü ve akım türü. <strong>E6013</strong> 60 ksi (≈420 MPa), tüm pozisyonlar, rutil örtüdür. AWS ve ISO sınıfları birebir eşleşmez; şartname hangi sistemi istiyorsa ona göre seçilir.</p>
<h2>Hangi Elektrot Ne Zaman?</h2>
<ul>
<li><strong>Bazik (E7018 / E 42 4 B):</strong> Taşıyıcı yapılar, kalın parçalar, S355 ve üzeri, darbe şartı olan işler, çatlak riskinin yüksek olduğu birleşimler. EN 1090 EXC2 ve üzeri yapısal işlerde genellikle tercih edilen sınıftır.</li>
<li><strong>Rutil (E6013 / E 42 0 RR):</strong> Hafif yapılar, ince saclar, görünüşün önemli olduğu ve tokluk şartı düşük olan işler.</li>
<li><strong>Selülozik (E6010):</strong> Daha çok boru hattı kök pasosu; genel imalatta nadiren gerekir.</li>
</ul>
<h2>Çap ve Akım Aralığı</h2>
<p>Pratik bir kural olarak akım, elektrot çapının milimetresi başına yaklaşık 30–40 A’dır. Kesin değer üretici föyünden ve WPS’ten alınır.</p>
<table class="data-table"><thead><tr><th>Çap (mm)</th><th>Yaklaşık akım (A)</th><th>Tipik kullanım</th></tr></thead><tbody>
<tr><td>2,5</td><td>60–90</td><td>İnce parçalar, kök paso</td></tr>
<tr><td>3,2</td><td>90–130</td><td>En yaygın çap, pozisyon kaynağı</td></tr>
<tr><td>4,0</td><td>130–180</td><td>Dolgu ve kapak pasoları</td></tr>
<tr><td>5,0</td><td>180–240</td><td>Kalın parçalar, yatay pozisyon</td></tr>
</tbody></table>
<h2>Hidrojen ve Kurutma</h2>
<p>Bazik elektrotların düşük hidrojen özelliği ancak örtü kuru kaldığında geçerlidir. Nem çeken örtü, kaynak metaline hidrojen taşır ve özellikle yüksek mukavemetli ve kalın çeliklerde soğuk çatlak riskini artırır. Bu nedenle bazik elektrotlar üretici talimatına göre kurutulur (genellikle yaklaşık 300–350 °C’de birkaç saat) ve kullanıma kadar ısıtmalı tüplerde tutulur. Vakum ambalajlı elektrotlar, ambalaj açıldıktan sonra belirtilen süre içinde kullanılır. Ön ısıtma ile birlikte değerlendirildiğinde hidrojen kontrolü, çatlak önlemenin temel adımıdır (bkz. <a href="on-isitma-hesaplama.html">ön ısıtma hesabı</a>).</p>
<h2>Sık Yapılan Hatalar</h2>
<ul>
<li>Bazik elektrotu açıkta bırakıp ertesi gün kurutmadan kullanmak.</li>
<li>Rutil elektrotu darbe şartı olan bir yapısal işte kullanmak.</li>
<li>Kaynakçı sertifikasındaki örtü tipi ile işte kullanılan elektrotun uyuşmaması (bkz. <a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>).</li>
<li>Paso aralarında cürufu tam temizlememek; bu, cüruf kalıntısı hatasının en yaygın nedenidir.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Örtülü elektrot kaynağında elektrot tipi WPS ile belirlenir; bazik elektrotlar kurutulur ve kullanıma kadar ısıtmalı tüplerde saklanır. Elektrot ve parti bilgisi istendiğinde imalat kayıtlarına işlenir. <a href="../kaynak-yontemleri.html">Kaynak yöntemlerimiz →</a></p></div>
`,
    faq: [
      ['Rutil ile bazik elektrot arasındaki fark nedir?', 'Rutil elektrot kolay kullanılır ve düzgün dikiş verir ama tokluğu ve hidrojen kontrolü sınırlıdır. Bazik elektrot düşük hidrojenlidir, tokluğu ve çatlak direnci yüksektir; taşıyıcı ve kalın işlerde tercih edilir.'],
      ['E7018 ne anlama gelir?', 'Yaklaşık 70 ksi (≈490 MPa) çekme dayanımlı, tüm pozisyonlarda kullanılabilen, bazik demir tozlu örtülü düşük hidrojenli elektrot.'],
      ['Bazik elektrot neden kurutulur?', 'Örtü nem çeker; nem kaynak metaline hidrojen olarak geçer ve soğuk çatlak riskini artırır. Kurutma ve ısıtmalı saklama bunu önler.'],
      ['3,2 mm elektrot kaç amperle yakılır?', 'Genellikle yaklaşık 90–130 A aralığında; kesin değer üretici föyü ve WPS’e göre belirlenir.']
    ],
    cta_h3: 'Doğru elektrot, çatlaksız kaynak',
    cta_p: 'Çiziminizi ve malzeme bilgisini gönderin; kaynak yöntemi ve sarf planıyla teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Types of Welding Electrodes: Rutile, Basic (E7018) and Cellulosic',
    meta: 'What is the difference between rutile, basic and cellulosic electrodes? How to read ISO 2560 and AWS A5.1 codes (E 42 4 B 42 H5, E7018, E6013), which diameters run at which current, and when low-hydrogen electrodes are essential.',
    og: 'Types of Welding Electrodes',
    tag: 'Consumables · Electrodes',
    h1: 'Types of Welding Electrodes: Rutile, Basic (E7018) and Cellulosic',
    crumb: 'Types of Electrodes',
    read: '6 min read',
    body: `
<p>A covered electrode consists of a core wire and the coating around it. The coating stabilises the arc, produces shielding gas and slag, and adds alloying elements to the weld metal. The main difference between electrodes lies in this coating, and it directly determines ease of welding, mechanical properties and hydrogen risk.</p>
<h2>Electrodes by Coating Type</h2>
<table class="data-table"><thead><tr><th>Type</th><th>ISO 2560 letter</th><th>AWS example</th><th>Strength</th><th>Weakness</th></tr></thead><tbody>
<tr><td>Rutile</td><td>R / RR</td><td>E6013</td><td>Easy striking, good appearance, easy slag removal</td><td>Moderate toughness, limited hydrogen control</td></tr>
<tr><td>Basic (low hydrogen)</td><td>B</td><td>E7018</td><td>High toughness, low hydrogen, crack resistance</td><td>Needs dry storage, harder to handle</td></tr>
<tr><td>Cellulosic</td><td>C</td><td>E6010 / E6011</td><td>Deep penetration, vertical-down root runs</td><td>High hydrogen, spatter</td></tr>
</tbody></table>
<h2>How to Read the ISO 2560-A Code</h2>
<p>Example: <strong>E 42 4 B 42 H5</strong></p>
<ul>
<li><strong>E:</strong> covered electrode.</li>
<li><strong>42:</strong> minimum weld metal yield strength about 420 MPa.</li>
<li><strong>4:</strong> at least 47 J impact energy at −40 °C.</li>
<li><strong>B:</strong> basic coating.</li>
<li><strong>4:</strong> recovery and current type (here 105–125% recovery, DC).</li>
<li><strong>2:</strong> welding positions (all except vertical down).</li>
<li><strong>H5:</strong> at most 5 ml/100 g diffusible hydrogen in the weld metal.</li>
</ul>
<p>Alloyed electrodes add a composition symbol, e.g. “E 46 3 1Ni B …”.</p>
<h2>The AWS A5.1 Code</h2>
<p>In the AWS system <strong>E7018</strong> reads: E electrode, 70 about 70 ksi (≈490 MPa) tensile strength, 1 all positions, 8 basic iron-powder coating and current type. <strong>E6013</strong> is 60 ksi (≈420 MPa), all positions, rutile coating. AWS and ISO classes do not map one to one; select according to the system the specification calls for.</p>
<h2>Which Electrode When?</h2>
<ul>
<li><strong>Basic (E7018 / E 42 4 B):</strong> load-bearing structures, thick parts, S355 and above, work with impact requirements, joints with high crack risk. Generally the preferred class for EN 1090 EXC2 and higher structural work.</li>
<li><strong>Rutile (E6013 / E 42 0 RR):</strong> light structures, thin sheet, work where appearance matters and toughness requirements are low.</li>
<li><strong>Cellulosic (E6010):</strong> mainly pipeline root runs; rarely needed in general fabrication.</li>
</ul>
<h2>Diameter and Current Range</h2>
<p>A practical rule is about 30–40 A per millimetre of electrode diameter. The exact value comes from the manufacturer’s data sheet and the WPS.</p>
<table class="data-table"><thead><tr><th>Diameter (mm)</th><th>Approx. current (A)</th><th>Typical use</th></tr></thead><tbody>
<tr><td>2.5</td><td>60–90</td><td>Thin parts, root runs</td></tr>
<tr><td>3.2</td><td>90–130</td><td>Most common, positional welding</td></tr>
<tr><td>4.0</td><td>130–180</td><td>Fill and cap passes</td></tr>
<tr><td>5.0</td><td>180–240</td><td>Thick parts, flat position</td></tr>
</tbody></table>
<h2>Hydrogen and Baking</h2>
<p>The low-hydrogen property of basic electrodes only holds if the coating stays dry. A coating that picks up moisture carries hydrogen into the weld metal and raises cold-cracking risk, especially in high-strength and thick steels. Basic electrodes are therefore baked to the manufacturer’s instructions (typically a few hours at about 300–350 °C) and kept in heated quivers until use. Vacuum-packed electrodes are used within the stated time after opening. Together with preheat, hydrogen control is the core step in preventing cracks (see <a href="on-isitma-hesaplama.html">preheat calculation</a>).</p>
<h2>Common Mistakes</h2>
<ul>
<li>Leaving basic electrodes out and using them the next day without re-baking.</li>
<li>Using rutile electrodes on structural work with impact requirements.</li>
<li>A mismatch between the coating type on the welder’s certificate and the electrode used (see <a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>).</li>
<li>Not fully removing slag between passes, the most common cause of slag inclusions.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> in manual metal arc welding the electrode type is set by the WPS; basic electrodes are baked and kept in heated quivers until use. Electrode and batch details are entered in production records when requested. <a href="../kaynak-yontemleri.html">Our welding methods →</a></p></div>
`,
    faq: [
      ['What is the difference between rutile and basic electrodes?', 'Rutile electrodes are easy to use and give a neat bead but have limited toughness and hydrogen control. Basic electrodes are low hydrogen with high toughness and crack resistance, preferred for load-bearing and thick work.'],
      ['What does E7018 mean?', 'A low-hydrogen electrode with about 70 ksi (≈490 MPa) tensile strength, usable in all positions, with a basic iron-powder coating.'],
      ['Why are basic electrodes baked?', 'The coating absorbs moisture, which enters the weld metal as hydrogen and raises cold-cracking risk. Baking and heated storage prevent this.'],
      ['What current for a 3.2 mm electrode?', 'Usually about 90–130 A; the exact value follows the manufacturer’s data sheet and the WPS.']
    ],
    cta_h3: 'The right electrode, crack-free welds',
    cta_p: 'Send your drawing and material details; we will quote with a welding process and consumables plan.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Stabelektroden-Arten: rutil, basisch (E7018) und zellulosisch',
    meta: 'Was unterscheidet rutile, basische und zellulosische Elektroden? ISO-2560- und AWS-A5.1-Bezeichnungen lesen (E 42 4 B 42 H5, E7018, E6013), Durchmesser und Stromstärken, und wann wasserstoffarme Elektroden Pflicht sind.',
    og: 'Stabelektroden-Arten',
    tag: 'Zusatzwerkstoffe · Elektroden',
    h1: 'Stabelektroden-Arten: rutil, basisch (E7018) und zellulosisch',
    crumb: 'Stabelektroden-Arten',
    read: '6 Min. Lesezeit',
    body: `
<p>Eine umhüllte Stabelektrode besteht aus einem Kernstab und der Umhüllung. Die Umhüllung stabilisiert den Lichtbogen, bildet Schutzgas und Schlacke und legiert das Schweißgut. Der wesentliche Unterschied zwischen Elektroden liegt in dieser Umhüllung, und sie bestimmt direkt Verschweißbarkeit, mechanische Werte und Wasserstoffrisiko.</p>
<h2>Elektroden nach Umhüllungstyp</h2>
<table class="data-table"><thead><tr><th>Typ</th><th>ISO-2560-Buchstabe</th><th>AWS-Beispiel</th><th>Stärke</th><th>Schwäche</th></tr></thead><tbody>
<tr><td>Rutil</td><td>R / RR</td><td>E6013</td><td>Leichtes Zünden, schönes Nahtbild, leicht lösliche Schlacke</td><td>Mittlere Zähigkeit, begrenzte Wasserstoffkontrolle</td></tr>
<tr><td>Basisch (wasserstoffarm)</td><td>B</td><td>E7018</td><td>Hohe Zähigkeit, wenig Wasserstoff, Rissbeständigkeit</td><td>Trockene Lagerung nötig, anspruchsvoller</td></tr>
<tr><td>Zellulose</td><td>C</td><td>E6010 / E6011</td><td>Tiefer Einbrand, Fallnaht-Wurzel</td><td>Viel Wasserstoff, Spritzer</td></tr>
</tbody></table>
<h2>So liest man ISO 2560-A</h2>
<p>Beispiel: <strong>E 42 4 B 42 H5</strong></p>
<ul>
<li><strong>E:</strong> umhüllte Stabelektrode.</li>
<li><strong>42:</strong> Mindeststreckgrenze des Schweißguts etwa 420 MPa.</li>
<li><strong>4:</strong> mindestens 47 J bei −40 °C.</li>
<li><strong>B:</strong> basische Umhüllung.</li>
<li><strong>4:</strong> Ausbringung und Stromart (hier 105–125 %, Gleichstrom).</li>
<li><strong>2:</strong> Schweißpositionen (alle außer Fallnaht).</li>
<li><strong>H5:</strong> höchstens 5 ml/100 g diffusibler Wasserstoff im Schweißgut.</li>
</ul>
<p>Legierte Elektroden erhalten ein Legierungskurzzeichen, z. B. „E 46 3 1Ni B …“.</p>
<h2>Die AWS-A5.1-Bezeichnung</h2>
<p>Im AWS-System bedeutet <strong>E7018</strong>: E Elektrode, 70 etwa 70 ksi (≈490 MPa) Zugfestigkeit, 1 alle Positionen, 8 basische Eisenpulverumhüllung und Stromart. <strong>E6013</strong> ist 60 ksi (≈420 MPa), alle Positionen, rutil. AWS- und ISO-Klassen sind nicht deckungsgleich; maßgebend ist das System der Spezifikation.</p>
<h2>Welche Elektrode wann?</h2>
<ul>
<li><strong>Basisch (E7018 / E 42 4 B):</strong> tragende Konstruktionen, dicke Teile, S355 und höher, Kerbschlaganforderungen, rissgefährdete Verbindungen. Bei EN 1090 ab EXC2 meist die bevorzugte Klasse.</li>
<li><strong>Rutil (E6013 / E 42 0 RR):</strong> leichte Konstruktionen, Dünnblech, sichtbare Nähte mit geringen Zähigkeitsanforderungen.</li>
<li><strong>Zellulose (E6010):</strong> überwiegend Rohrleitungswurzeln; im allgemeinen Stahlbau selten nötig.</li>
</ul>
<h2>Durchmesser und Stromstärke</h2>
<p>Als Faustregel gelten etwa 30–40 A je Millimeter Elektrodendurchmesser. Der genaue Wert steht im Datenblatt des Herstellers und in der WPS.</p>
<table class="data-table"><thead><tr><th>Durchmesser (mm)</th><th>Strom ca. (A)</th><th>Typische Anwendung</th></tr></thead><tbody>
<tr><td>2,5</td><td>60–90</td><td>Dünne Teile, Wurzellagen</td></tr>
<tr><td>3,2</td><td>90–130</td><td>Häufigster Durchmesser, Zwangslagen</td></tr>
<tr><td>4,0</td><td>130–180</td><td>Füll- und Decklagen</td></tr>
<tr><td>5,0</td><td>180–240</td><td>Dicke Teile, Wannenlage</td></tr>
</tbody></table>
<h2>Wasserstoff und Rücktrocknung</h2>
<p>Basische Elektroden sind nur wasserstoffarm, solange die Umhüllung trocken bleibt. Feuchte Umhüllung bringt Wasserstoff ins Schweißgut und erhöht das Kaltrissrisiko, besonders bei hochfesten und dicken Stählen. Deshalb werden basische Elektroden nach Herstellerangabe rückgetrocknet (meist einige Stunden bei etwa 300–350 °C) und bis zur Verwendung in beheizten Köchern gehalten. Vakuumverpackte Elektroden werden innerhalb der angegebenen Zeit nach dem Öffnen verarbeitet. Zusammen mit dem Vorwärmen ist die Wasserstoffkontrolle der Kern der Rissvermeidung (siehe <a href="on-isitma-hesaplama.html">Vorwärmberechnung</a>).</p>
<h2>Häufige Fehler</h2>
<ul>
<li>Basische Elektroden offen liegen lassen und am nächsten Tag ohne Rücktrocknung verwenden.</li>
<li>Rutile Elektroden für tragende Teile mit Kerbschlaganforderung einsetzen.</li>
<li>Umhüllungstyp in der Schweißerprüfung passt nicht zur verwendeten Elektrode (siehe <a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>).</li>
<li>Schlacke zwischen den Lagen nicht vollständig entfernen – die häufigste Ursache für Schlackeneinschlüsse.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Beim Lichtbogenhandschweißen legt die WPS den Elektrodentyp fest; basische Elektroden werden rückgetrocknet und bis zur Verwendung in beheizten Köchern gehalten. Elektroden- und Chargenangaben tragen wir auf Wunsch in die Fertigungsdokumentation ein. <a href="../kaynak-yontemleri.html">Unsere Schweißverfahren →</a></p></div>
`,
    faq: [
      ['Was unterscheidet rutile und basische Elektroden?', 'Rutile Elektroden sind leicht zu verschweißen und ergeben ein schönes Nahtbild, haben aber begrenzte Zähigkeit und Wasserstoffkontrolle. Basische sind wasserstoffarm, zäh und rissbeständig – bevorzugt für tragende und dicke Teile.'],
      ['Was bedeutet E7018?', 'Eine wasserstoffarme Elektrode mit etwa 70 ksi (≈490 MPa) Zugfestigkeit, für alle Positionen, mit basischer Eisenpulverumhüllung.'],
      ['Warum werden basische Elektroden rückgetrocknet?', 'Die Umhüllung nimmt Feuchte auf, die als Wasserstoff ins Schweißgut gelangt und das Kaltrissrisiko erhöht. Rücktrocknung und beheizte Lagerung verhindern das.'],
      ['Welcher Strom für eine 3,2-mm-Elektrode?', 'Meist etwa 90–130 A; der genaue Wert richtet sich nach Datenblatt und WPS.']
    ],
    cta_h3: 'Die richtige Elektrode, rissfreie Nähte',
    cta_p: 'Senden Sie Zeichnung und Werkstoffangaben; wir bieten mit Verfahrens- und Zusatzplan an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Tipos de electrodos: rutilo, básico (E7018) y celulósico',
    meta: '¿Qué diferencia hay entre electrodos de rutilo, básicos y celulósicos? Cómo leer los códigos ISO 2560 y AWS A5.1 (E 42 4 B 42 H5, E7018, E6013), qué diámetros con qué intensidad y cuándo es imprescindible el bajo hidrógeno.',
    og: 'Tipos de electrodos',
    tag: 'Consumibles · Electrodos',
    h1: 'Tipos de electrodos: rutilo, básico (E7018) y celulósico',
    crumb: 'Tipos de electrodos',
    read: '6 min de lectura',
    body: `
<p>Un electrodo revestido consta de una varilla y el revestimiento que la cubre. El revestimiento estabiliza el arco, genera gas de protección y escoria y aporta elementos de aleación. La diferencia principal entre electrodos está en ese revestimiento, que determina la facilidad de soldeo, las propiedades mecánicas y el riesgo de hidrógeno.</p>
<h2>Electrodos según el revestimiento</h2>
<table class="data-table"><thead><tr><th>Tipo</th><th>Letra ISO 2560</th><th>Ejemplo AWS</th><th>Ventaja</th><th>Desventaja</th></tr></thead><tbody>
<tr><td>Rutilo</td><td>R / RR</td><td>E6013</td><td>Cebado fácil, buen aspecto, escoria fácil de retirar</td><td>Tenacidad media, control de hidrógeno limitado</td></tr>
<tr><td>Básico (bajo hidrógeno)</td><td>B</td><td>E7018</td><td>Alta tenacidad, bajo hidrógeno, resistencia a fisuras</td><td>Requiere almacenaje seco, más difícil de manejar</td></tr>
<tr><td>Celulósico</td><td>C</td><td>E6010 / E6011</td><td>Penetración profunda, raíz en vertical descendente</td><td>Mucho hidrógeno, proyecciones</td></tr>
</tbody></table>
<h2>Cómo leer el código ISO 2560-A</h2>
<p>Ejemplo: <strong>E 42 4 B 42 H5</strong></p>
<ul>
<li><strong>E:</strong> electrodo revestido.</li>
<li><strong>42:</strong> límite elástico mínimo del metal de soldadura de unos 420 MPa.</li>
<li><strong>4:</strong> al menos 47 J a −40 °C.</li>
<li><strong>B:</strong> revestimiento básico.</li>
<li><strong>4:</strong> rendimiento y tipo de corriente (aquí 105–125 %, corriente continua).</li>
<li><strong>2:</strong> posiciones (todas salvo vertical descendente).</li>
<li><strong>H5:</strong> como máximo 5 ml/100 g de hidrógeno difusible.</li>
</ul>
<p>Los electrodos aleados añaden un símbolo de composición, por ejemplo “E 46 3 1Ni B …”.</p>
<h2>El código AWS A5.1</h2>
<p>En el sistema AWS, <strong>E7018</strong> se lee: E electrodo, 70 unos 70 ksi (≈490 MPa) de resistencia a tracción, 1 todas las posiciones, 8 revestimiento básico con polvo de hierro y tipo de corriente. <strong>E6013</strong> es 60 ksi (≈420 MPa), todas las posiciones, rutilo. Las clases AWS e ISO no se corresponden una a una; se elige según el sistema de la especificación.</p>
<h2>¿Qué electrodo y cuándo?</h2>
<ul>
<li><strong>Básico (E7018 / E 42 4 B):</strong> estructuras portantes, piezas gruesas, S355 y superiores, trabajos con requisitos de impacto, uniones con riesgo de fisuración. Suele ser la clase preferida en trabajos EN 1090 EXC2 y superiores.</li>
<li><strong>Rutilo (E6013 / E 42 0 RR):</strong> estructuras ligeras, chapa fina, trabajos donde importa el aspecto y la tenacidad exigida es baja.</li>
<li><strong>Celulósico (E6010):</strong> sobre todo raíces en tuberías; rara vez necesario en fabricación general.</li>
</ul>
<h2>Diámetro e intensidad</h2>
<p>Como regla práctica, unos 30–40 A por milímetro de diámetro. El valor exacto lo dan la ficha del fabricante y la WPS.</p>
<table class="data-table"><thead><tr><th>Diámetro (mm)</th><th>Intensidad aprox. (A)</th><th>Uso típico</th></tr></thead><tbody>
<tr><td>2,5</td><td>60–90</td><td>Piezas finas, pasadas de raíz</td></tr>
<tr><td>3,2</td><td>90–130</td><td>El más habitual, soldadura en posición</td></tr>
<tr><td>4,0</td><td>130–180</td><td>Relleno y peinado</td></tr>
<tr><td>5,0</td><td>180–240</td><td>Piezas gruesas, posición plana</td></tr>
</tbody></table>
<h2>Hidrógeno y secado</h2>
<p>El bajo hidrógeno de los electrodos básicos solo se mantiene si el revestimiento está seco. Un revestimiento húmedo lleva hidrógeno al metal de soldadura y aumenta el riesgo de fisuración en frío, sobre todo en aceros gruesos y de alta resistencia. Por eso los básicos se secan según el fabricante (normalmente unas horas a unos 300–350 °C) y se mantienen en estufas portátiles hasta su uso. Los envasados al vacío se usan dentro del tiempo indicado tras abrirlos. Junto con el precalentamiento, el control del hidrógeno es la base para evitar fisuras (ver <a href="on-isitma-hesaplama.html">cálculo del precalentamiento</a>).</p>
<h2>Errores frecuentes</h2>
<ul>
<li>Dejar electrodos básicos al aire y usarlos al día siguiente sin resecarlos.</li>
<li>Usar rutilo en trabajos estructurales con requisitos de impacto.</li>
<li>Que el tipo de revestimiento del certificado del soldador no coincida con el electrodo usado (ver <a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>).</li>
<li>No retirar bien la escoria entre pasadas, la causa más común de inclusiones de escoria.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> en la soldadura con electrodo revestido, la WPS fija el tipo de electrodo; los básicos se secan y se guardan en estufas portátiles hasta su uso. Los datos de electrodo y lote se anotan en los registros de fabricación cuando se solicita. <a href="../kaynak-yontemleri.html">Nuestros procesos de soldadura →</a></p></div>
`,
    faq: [
      ['¿Qué diferencia hay entre electrodo de rutilo y básico?', 'El rutilo es fácil de usar y da un cordón limpio, pero su tenacidad y control de hidrógeno son limitados. El básico es de bajo hidrógeno, tenaz y resistente a fisuras; preferido en trabajos portantes y gruesos.'],
      ['¿Qué significa E7018?', 'Un electrodo de bajo hidrógeno con unos 70 ksi (≈490 MPa) de resistencia, para todas las posiciones, con revestimiento básico y polvo de hierro.'],
      ['¿Por qué se secan los electrodos básicos?', 'El revestimiento absorbe humedad, que pasa al metal como hidrógeno y aumenta el riesgo de fisuración en frío. El secado y el almacenaje caliente lo evitan.'],
      ['¿Qué intensidad para un electrodo de 3,2 mm?', 'Normalmente unos 90–130 A; el valor exacto según la ficha del fabricante y la WPS.']
    ],
    cta_h3: 'El electrodo correcto, soldaduras sin fisuras',
    cta_p: 'Envíenos su plano y los datos del material; ofertamos con plan de proceso y consumibles.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Types d’électrodes enrobées : rutile, basique (E7018) et cellulosique',
    meta: 'Quelle différence entre électrodes rutiles, basiques et cellulosiques ? Lire les désignations ISO 2560 et AWS A5.1 (E 42 4 B 42 H5, E7018, E6013), diamètres et intensités, et quand le bas hydrogène est indispensable.',
    og: 'Types d’électrodes enrobées',
    tag: 'Consommables · Électrodes',
    h1: 'Types d’électrodes enrobées : rutile, basique (E7018) et cellulosique',
    crumb: 'Types d’électrodes',
    read: '6 min de lecture',
    body: `
<p>Une électrode enrobée se compose d’une âme métallique et de l’enrobage qui l’entoure. L’enrobage stabilise l’arc, produit gaz de protection et laitier, et apporte des éléments d’alliage. La différence principale entre électrodes tient à cet enrobage, qui détermine la facilité de soudage, les caractéristiques mécaniques et le risque lié à l’hydrogène.</p>
<h2>Électrodes selon l’enrobage</h2>
<table class="data-table"><thead><tr><th>Type</th><th>Lettre ISO 2560</th><th>Exemple AWS</th><th>Atout</th><th>Limite</th></tr></thead><tbody>
<tr><td>Rutile</td><td>R / RR</td><td>E6013</td><td>Amorçage facile, bel aspect, laitier facile à retirer</td><td>Ténacité moyenne, contrôle de l’hydrogène limité</td></tr>
<tr><td>Basique (bas hydrogène)</td><td>B</td><td>E7018</td><td>Haute ténacité, peu d’hydrogène, résistance à la fissuration</td><td>Stockage au sec, plus délicate à utiliser</td></tr>
<tr><td>Cellulosique</td><td>C</td><td>E6010 / E6011</td><td>Pénétration profonde, racine en montante descendante</td><td>Beaucoup d’hydrogène, projections</td></tr>
</tbody></table>
<h2>Lire la désignation ISO 2560-A</h2>
<p>Exemple : <strong>E 42 4 B 42 H5</strong></p>
<ul>
<li><strong>E :</strong> électrode enrobée.</li>
<li><strong>42 :</strong> limite d’élasticité minimale du métal fondu d’environ 420 MPa.</li>
<li><strong>4 :</strong> au moins 47 J à −40 °C.</li>
<li><strong>B :</strong> enrobage basique.</li>
<li><strong>4 :</strong> rendement et type de courant (ici 105–125 %, courant continu).</li>
<li><strong>2 :</strong> positions (toutes sauf verticale descendante).</li>
<li><strong>H5 :</strong> au plus 5 ml/100 g d’hydrogène diffusible.</li>
</ul>
<p>Les électrodes alliées ajoutent un symbole de composition, par exemple « E 46 3 1Ni B … ».</p>
<h2>La désignation AWS A5.1</h2>
<p>Dans le système AWS, <strong>E7018</strong> se lit : E électrode, 70 environ 70 ksi (≈490 MPa) de résistance à la traction, 1 toutes positions, 8 enrobage basique à poudre de fer et type de courant. <strong>E6013</strong> correspond à 60 ksi (≈420 MPa), toutes positions, rutile. Les classes AWS et ISO ne se recouvrent pas exactement ; on choisit selon le système de la spécification.</p>
<h2>Quelle électrode, quand ?</h2>
<ul>
<li><strong>Basique (E7018 / E 42 4 B) :</strong> structures porteuses, pièces épaisses, S355 et plus, exigences de résilience, assemblages sensibles à la fissuration. Généralement la classe préférée en EN 1090 à partir d’EXC2.</li>
<li><strong>Rutile (E6013 / E 42 0 RR) :</strong> structures légères, tôle fine, soudures visibles à faible exigence de ténacité.</li>
<li><strong>Cellulosique (E6010) :</strong> surtout les passes de racine sur pipelines ; rarement utile en chaudronnerie générale.</li>
</ul>
<h2>Diamètre et intensité</h2>
<p>En règle pratique, environ 30–40 A par millimètre de diamètre. La valeur exacte figure dans la fiche du fabricant et le DMOS.</p>
<table class="data-table"><thead><tr><th>Diamètre (mm)</th><th>Intensité env. (A)</th><th>Usage typique</th></tr></thead><tbody>
<tr><td>2,5</td><td>60–90</td><td>Pièces minces, passes de racine</td></tr>
<tr><td>3,2</td><td>90–130</td><td>Le plus courant, soudage en position</td></tr>
<tr><td>4,0</td><td>130–180</td><td>Remplissage et finition</td></tr>
<tr><td>5,0</td><td>180–240</td><td>Pièces épaisses, à plat</td></tr>
</tbody></table>
<h2>Hydrogène et étuvage</h2>
<p>Le bas hydrogène des électrodes basiques n’est garanti que si l’enrobage reste sec. Un enrobage humide apporte de l’hydrogène au métal fondu et augmente le risque de fissuration à froid, surtout sur les aciers épais et à haute résistance. Les électrodes basiques sont donc étuvées selon le fabricant (en général quelques heures vers 300–350 °C) et conservées en carquois chauffants jusqu’à l’emploi. Les électrodes sous vide s’utilisent dans le délai indiqué après ouverture. Avec le préchauffage, la maîtrise de l’hydrogène est la base de la prévention des fissures (voir <a href="on-isitma-hesaplama.html">calcul du préchauffage</a>).</p>
<h2>Erreurs fréquentes</h2>
<ul>
<li>Laisser des électrodes basiques à l’air et les utiliser le lendemain sans réétuvage.</li>
<li>Utiliser des rutiles sur une structure soumise à des exigences de résilience.</li>
<li>Un type d’enrobage sur la qualification du soudeur différent de l’électrode utilisée (voir <a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>).</li>
<li>Ne pas retirer entièrement le laitier entre passes, cause la plus courante des inclusions de laitier.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> en soudage à l’électrode enrobée, le DMOS fixe le type d’électrode ; les basiques sont étuvées et conservées en carquois chauffants jusqu’à l’emploi. Électrode et lot sont reportés dans les enregistrements de fabrication sur demande. <a href="../kaynak-yontemleri.html">Nos procédés de soudage →</a></p></div>
`,
    faq: [
      ['Quelle différence entre électrode rutile et basique ?', 'La rutile est facile à souder et donne un bel aspect, mais sa ténacité et son contrôle de l’hydrogène sont limités. La basique est à bas hydrogène, tenace et résistante à la fissuration ; préférée pour les pièces porteuses et épaisses.'],
      ['Que signifie E7018 ?', 'Une électrode bas hydrogène d’environ 70 ksi (≈490 MPa) de résistance, toutes positions, à enrobage basique avec poudre de fer.'],
      ['Pourquoi étuver les électrodes basiques ?', 'L’enrobage absorbe l’humidité, qui passe dans le métal sous forme d’hydrogène et augmente le risque de fissuration à froid. Étuvage et stockage chauffé l’évitent.'],
      ['Quelle intensité pour une électrode de 3,2 mm ?', 'En général environ 90–130 A ; la valeur exacte selon la fiche du fabricant et le DMOS.']
    ],
    cta_h3: 'La bonne électrode, des soudures sans fissure',
    cta_p: 'Envoyez votre plan et les données matière ; nous chiffrons avec un plan de procédé et de consommables.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Tipi di elettrodi: rutilici, basici (E7018) e cellulosici',
    meta: 'Che differenza c’è tra elettrodi rutilici, basici e cellulosici? Come leggere i codici ISO 2560 e AWS A5.1 (E 42 4 B 42 H5, E7018, E6013), diametri e correnti, e quando l’elettrodo a basso idrogeno è obbligatorio.',
    og: 'Tipi di elettrodi',
    tag: 'Consumabili · Elettrodi',
    h1: 'Tipi di elettrodi: rutilici, basici (E7018) e cellulosici',
    crumb: 'Tipi di elettrodi',
    read: '6 min di lettura',
    body: `
<p>Un elettrodo rivestito è composto da un’anima metallica e dal rivestimento che la avvolge. Il rivestimento stabilizza l’arco, genera gas di protezione e scoria e apporta elementi di lega. La differenza principale tra elettrodi sta in questo rivestimento, che determina saldabilità, caratteristiche meccaniche e rischio da idrogeno.</p>
<h2>Elettrodi per tipo di rivestimento</h2>
<table class="data-table"><thead><tr><th>Tipo</th><th>Lettera ISO 2560</th><th>Esempio AWS</th><th>Punto di forza</th><th>Limite</th></tr></thead><tbody>
<tr><td>Rutilico</td><td>R / RR</td><td>E6013</td><td>Innesco facile, bell’aspetto, scoria facile da rimuovere</td><td>Tenacità media, controllo dell’idrogeno limitato</td></tr>
<tr><td>Basico (basso idrogeno)</td><td>B</td><td>E7018</td><td>Alta tenacità, basso idrogeno, resistenza alle cricche</td><td>Richiede stoccaggio asciutto, più difficile da usare</td></tr>
<tr><td>Cellulosico</td><td>C</td><td>E6010 / E6011</td><td>Penetrazione profonda, radice in verticale discendente</td><td>Molto idrogeno, spruzzi</td></tr>
</tbody></table>
<h2>Come leggere il codice ISO 2560-A</h2>
<p>Esempio: <strong>E 42 4 B 42 H5</strong></p>
<ul>
<li><strong>E:</strong> elettrodo rivestito.</li>
<li><strong>42:</strong> snervamento minimo del metallo saldato circa 420 MPa.</li>
<li><strong>4:</strong> almeno 47 J a −40 °C.</li>
<li><strong>B:</strong> rivestimento basico.</li>
<li><strong>4:</strong> rendimento e tipo di corrente (qui 105–125 %, corrente continua).</li>
<li><strong>2:</strong> posizioni (tutte tranne verticale discendente).</li>
<li><strong>H5:</strong> al massimo 5 ml/100 g di idrogeno diffusibile.</li>
</ul>
<p>Gli elettrodi legati aggiungono un simbolo di composizione, per esempio “E 46 3 1Ni B …”.</p>
<h2>Il codice AWS A5.1</h2>
<p>Nel sistema AWS <strong>E7018</strong> si legge: E elettrodo, 70 circa 70 ksi (≈490 MPa) di resistenza a trazione, 1 tutte le posizioni, 8 rivestimento basico con polvere di ferro e tipo di corrente. <strong>E6013</strong> è 60 ksi (≈420 MPa), tutte le posizioni, rutilico. Le classi AWS e ISO non coincidono esattamente; si sceglie secondo il sistema della specifica.</p>
<h2>Quale elettrodo e quando?</h2>
<ul>
<li><strong>Basico (E7018 / E 42 4 B):</strong> strutture portanti, pezzi spessi, S355 e superiori, requisiti di resilienza, giunti a rischio di cricche. Di solito la classe preferita per lavori EN 1090 da EXC2 in su.</li>
<li><strong>Rutilico (E6013 / E 42 0 RR):</strong> strutture leggere, lamiere sottili, lavori a vista con basse esigenze di tenacità.</li>
<li><strong>Cellulosico (E6010):</strong> soprattutto passate di radice su condotte; raramente necessario in carpenteria generale.</li>
</ul>
<h2>Diametro e corrente</h2>
<p>Come regola pratica circa 30–40 A per millimetro di diametro. Il valore esatto viene dalla scheda del produttore e dalla WPS.</p>
<table class="data-table"><thead><tr><th>Diametro (mm)</th><th>Corrente circa (A)</th><th>Impiego tipico</th></tr></thead><tbody>
<tr><td>2,5</td><td>60–90</td><td>Pezzi sottili, radici</td></tr>
<tr><td>3,2</td><td>90–130</td><td>Il più comune, saldatura in posizione</td></tr>
<tr><td>4,0</td><td>130–180</td><td>Riempimento e finitura</td></tr>
<tr><td>5,0</td><td>180–240</td><td>Pezzi spessi, in piano</td></tr>
</tbody></table>
<h2>Idrogeno ed essiccazione</h2>
<p>Il basso idrogeno degli elettrodi basici vale solo se il rivestimento resta asciutto. Un rivestimento umido porta idrogeno nel metallo saldato e aumenta il rischio di cricche a freddo, soprattutto su acciai spessi e ad alta resistenza. Per questo i basici vengono essiccati secondo il produttore (di solito qualche ora a circa 300–350 °C) e tenuti in fornetti portatili fino all’uso. Gli elettrodi sottovuoto si usano entro il tempo indicato dopo l’apertura. Insieme al preriscaldo, il controllo dell’idrogeno è la base per prevenire le cricche (vedi <a href="on-isitma-hesaplama.html">calcolo del preriscaldo</a>).</p>
<h2>Errori frequenti</h2>
<ul>
<li>Lasciare elettrodi basici all’aria e usarli il giorno dopo senza riessiccarli.</li>
<li>Usare rutilici su strutture con requisiti di resilienza.</li>
<li>Un tipo di rivestimento nel patentino del saldatore diverso dall’elettrodo usato (vedi <a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>).</li>
<li>Non rimuovere completamente la scoria tra le passate, causa più comune delle inclusioni di scoria.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> nella saldatura con elettrodo rivestito il tipo di elettrodo è fissato dalla WPS; i basici vengono essiccati e tenuti in fornetti fino all’uso. Dati di elettrodo e lotto si riportano nei registri di produzione su richiesta. <a href="../kaynak-yontemleri.html">I nostri processi di saldatura →</a></p></div>
`,
    faq: [
      ['Che differenza c’è tra elettrodo rutilico e basico?', 'Il rutilico è facile da usare e dà un cordone pulito, ma con tenacità e controllo dell’idrogeno limitati. Il basico è a basso idrogeno, tenace e resistente alle cricche; preferito per lavori portanti e spessi.'],
      ['Cosa significa E7018?', 'Un elettrodo a basso idrogeno con circa 70 ksi (≈490 MPa) di resistenza, per tutte le posizioni, con rivestimento basico e polvere di ferro.'],
      ['Perché si essiccano gli elettrodi basici?', 'Il rivestimento assorbe umidità, che passa nel metallo come idrogeno e aumenta il rischio di cricche a freddo. Essiccazione e stoccaggio riscaldato lo evitano.'],
      ['Che corrente per un elettrodo da 3,2 mm?', 'Di solito circa 90–130 A; il valore esatto secondo scheda del produttore e WPS.']
    ],
    cta_h3: 'L’elettrodo giusto, saldature senza cricche',
    cta_p: 'Inviateci disegno e dati del materiale; quotiamo con piano di processo e consumabili.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Soorten laselektroden: rutiel, basisch (E7018) en cellulose',
    meta: 'Wat is het verschil tussen rutiele, basische en cellulose-elektroden? ISO 2560- en AWS A5.1-codes lezen (E 42 4 B 42 H5, E7018, E6013), diameters en stroomsterkten, en wanneer waterstofarme elektroden verplicht zijn.',
    og: 'Soorten laselektroden',
    tag: 'Toevoegmaterialen · Elektroden',
    h1: 'Soorten laselektroden: rutiel, basisch (E7018) en cellulose',
    crumb: 'Soorten elektroden',
    read: '6 min lezen',
    body: `
<p>Een beklede elektrode bestaat uit een kerndraad en de bekleding eromheen. De bekleding stabiliseert de boog, vormt beschermgas en slak en voegt legeringselementen toe. Het belangrijkste verschil tussen elektroden zit in die bekleding, en die bepaalt direct het lasgemak, de mechanische eigenschappen en het waterstofrisico.</p>
<h2>Elektroden naar bekledingstype</h2>
<table class="data-table"><thead><tr><th>Type</th><th>ISO 2560-letter</th><th>AWS-voorbeeld</th><th>Sterk punt</th><th>Zwak punt</th></tr></thead><tbody>
<tr><td>Rutiel</td><td>R / RR</td><td>E6013</td><td>Makkelijk ontsteken, mooi uiterlijk, slak laat goed los</td><td>Matige taaiheid, beperkte waterstofbeheersing</td></tr>
<tr><td>Basisch (waterstofarm)</td><td>B</td><td>E7018</td><td>Hoge taaiheid, weinig waterstof, scheurbestendig</td><td>Droge opslag nodig, lastiger te verwerken</td></tr>
<tr><td>Cellulose</td><td>C</td><td>E6010 / E6011</td><td>Diepe inbranding, neergaande grondlaag</td><td>Veel waterstof, spatten</td></tr>
</tbody></table>
<h2>Zo lees je de ISO 2560-A-code</h2>
<p>Voorbeeld: <strong>E 42 4 B 42 H5</strong></p>
<ul>
<li><strong>E:</strong> beklede elektrode.</li>
<li><strong>42:</strong> minimale vloeigrens van het lasmetaal ongeveer 420 MPa.</li>
<li><strong>4:</strong> minstens 47 J bij −40 °C.</li>
<li><strong>B:</strong> basische bekleding.</li>
<li><strong>4:</strong> rendement en stroomsoort (hier 105–125 %, gelijkstroom).</li>
<li><strong>2:</strong> lasposities (alle behalve verticaal neergaand).</li>
<li><strong>H5:</strong> hoogstens 5 ml/100 g diffundeerbare waterstof.</li>
</ul>
<p>Gelegeerde elektroden krijgen een samenstellingssymbool, bijvoorbeeld “E 46 3 1Ni B …”.</p>
<h2>De AWS A5.1-code</h2>
<p>In het AWS-systeem betekent <strong>E7018</strong>: E elektrode, 70 ongeveer 70 ksi (≈490 MPa) treksterkte, 1 alle posities, 8 basische ijzerpoederbekleding en stroomsoort. <strong>E6013</strong> is 60 ksi (≈420 MPa), alle posities, rutiel. AWS- en ISO-klassen vallen niet één op één samen; kies volgens het systeem van de specificatie.</p>
<h2>Welke elektrode wanneer?</h2>
<ul>
<li><strong>Basisch (E7018 / E 42 4 B):</strong> dragende constructies, dikke delen, S355 en hoger, kerfslageisen, scheurgevoelige verbindingen. Meestal de voorkeursklasse bij EN 1090 vanaf EXC2.</li>
<li><strong>Rutiel (E6013 / E 42 0 RR):</strong> lichte constructies, dunne plaat, zichtlassen met lage taaiheidseisen.</li>
<li><strong>Cellulose (E6010):</strong> vooral grondlagen in pijpleidingen; in algemene constructie zelden nodig.</li>
</ul>
<h2>Diameter en stroomsterkte</h2>
<p>Als vuistregel ongeveer 30–40 A per millimeter diameter. De exacte waarde staat in het fabrikantenblad en de WPS.</p>
<table class="data-table"><thead><tr><th>Diameter (mm)</th><th>Stroom ca. (A)</th><th>Typisch gebruik</th></tr></thead><tbody>
<tr><td>2,5</td><td>60–90</td><td>Dunne delen, grondlagen</td></tr>
<tr><td>3,2</td><td>90–130</td><td>Meest gebruikt, positielassen</td></tr>
<tr><td>4,0</td><td>130–180</td><td>Vul- en eindlagen</td></tr>
<tr><td>5,0</td><td>180–240</td><td>Dikke delen, onder de hand</td></tr>
</tbody></table>
<h2>Waterstof en drogen</h2>
<p>Basische elektroden zijn alleen waterstofarm zolang de bekleding droog blijft. Vochtige bekleding brengt waterstof in het lasmetaal en verhoogt het risico op koudscheuren, vooral bij dikke en hogesterktestaalsoorten. Daarom worden basische elektroden volgens de fabrikant gedroogd (meestal enkele uren bij ongeveer 300–350 °C) en tot gebruik in verwarmde kokers bewaard. Vacuümverpakte elektroden worden binnen de opgegeven tijd na openen gebruikt. Samen met voorwarmen is waterstofbeheersing de basis van scheurpreventie (zie <a href="on-isitma-hesaplama.html">voorwarmberekening</a>).</p>
<h2>Veelgemaakte fouten</h2>
<ul>
<li>Basische elektroden open laten liggen en de volgende dag zonder herdrogen gebruiken.</li>
<li>Rutiele elektroden inzetten bij constructiewerk met kerfslageisen.</li>
<li>Bekledingstype op het lassercertificaat komt niet overeen met de gebruikte elektrode (zie <a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>).</li>
<li>Slak tussen de lagen niet volledig verwijderen, de meest voorkomende oorzaak van slakinsluitingen.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij booglassen met beklede elektroden legt de WPS het elektrodetype vast; basische elektroden worden gedroogd en tot gebruik in verwarmde kokers bewaard. Elektrode- en chargegegevens nemen we op verzoek op in de productieregistratie. <a href="../kaynak-yontemleri.html">Onze lasprocessen →</a></p></div>
`,
    faq: [
      ['Wat is het verschil tussen rutiele en basische elektroden?', 'Rutiel last makkelijk en geeft een nette rups, maar met beperkte taaiheid en waterstofbeheersing. Basisch is waterstofarm, taai en scheurbestendig; de keuze voor dragend en dik werk.'],
      ['Wat betekent E7018?', 'Een waterstofarme elektrode met ongeveer 70 ksi (≈490 MPa) treksterkte, voor alle posities, met basische ijzerpoederbekleding.'],
      ['Waarom worden basische elektroden gedroogd?', 'De bekleding neemt vocht op, dat als waterstof in het lasmetaal komt en het koudscheurrisico verhoogt. Drogen en verwarmd bewaren voorkomen dat.'],
      ['Welke stroom voor een elektrode van 3,2 mm?', 'Meestal ongeveer 90–130 A; de exacte waarde volgens fabrikantenblad en WPS.']
    ],
    cta_h3: 'De juiste elektrode, scheurvrije lassen',
    cta_p: 'Stuur uw tekening en materiaalgegevens; we offreren met proces- en toevoegmateriaalplan.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Typer sveiseelektroder: rutil, basisk (E7018) og cellulose',
    meta: 'Hva er forskjellen på rutile, basiske og cellulose-elektroder? Les ISO 2560- og AWS A5.1-koder (E 42 4 B 42 H5, E7018, E6013), diametre og strømstyrker, og når lavhydrogen-elektroder er et krav.',
    og: 'Typer sveiseelektroder',
    tag: 'Tilsettmaterialer · Elektroder',
    h1: 'Typer sveiseelektroder: rutil, basisk (E7018) og cellulose',
    crumb: 'Typer elektroder',
    read: '6 min lesing',
    body: `
<p>En dekket elektrode består av en kjernetråd og dekket rundt den. Dekket stabiliserer lysbuen, danner beskyttelsesgass og slagg og tilfører legeringselementer. Hovedforskjellen mellom elektroder ligger i dette dekket, og det bestemmer direkte hvor lett de sveiser, de mekaniske egenskapene og hydrogenrisikoen.</p>
<h2>Elektroder etter dekktype</h2>
<table class="data-table"><thead><tr><th>Type</th><th>ISO 2560-bokstav</th><th>AWS-eksempel</th><th>Styrke</th><th>Svakhet</th></tr></thead><tbody>
<tr><td>Rutil</td><td>R / RR</td><td>E6013</td><td>Lett tenning, pent utseende, slagget slipper lett</td><td>Middels seighet, begrenset hydrogenkontroll</td></tr>
<tr><td>Basisk (lavhydrogen)</td><td>B</td><td>E7018</td><td>Høy seighet, lite hydrogen, sprekkmotstand</td><td>Krever tørr lagring, mer krevende å bruke</td></tr>
<tr><td>Cellulose</td><td>C</td><td>E6010 / E6011</td><td>Dyp innbrenning, rotstreng vertikalt nedover</td><td>Mye hydrogen, sprut</td></tr>
</tbody></table>
<h2>Slik leses ISO 2560-A-koden</h2>
<p>Eksempel: <strong>E 42 4 B 42 H5</strong></p>
<ul>
<li><strong>E:</strong> dekket elektrode.</li>
<li><strong>42:</strong> minste flytegrense i sveisemetallet ca. 420 MPa.</li>
<li><strong>4:</strong> minst 47 J ved −40 °C.</li>
<li><strong>B:</strong> basisk dekke.</li>
<li><strong>4:</strong> utbytte og strømtype (her 105–125 %, likestrøm).</li>
<li><strong>2:</strong> sveisestillinger (alle unntatt vertikalt nedover).</li>
<li><strong>H5:</strong> høyst 5 ml/100 g diffuserbart hydrogen.</li>
</ul>
<p>Legerte elektroder får et sammensetningssymbol, for eksempel “E 46 3 1Ni B …”.</p>
<h2>AWS A5.1-koden</h2>
<p>I AWS-systemet leses <strong>E7018</strong> slik: E elektrode, 70 ca. 70 ksi (≈490 MPa) strekkfasthet, 1 alle stillinger, 8 basisk jernpulverdekke og strømtype. <strong>E6013</strong> er 60 ksi (≈420 MPa), alle stillinger, rutil. AWS- og ISO-klasser samsvarer ikke én til én; velg etter systemet i spesifikasjonen.</p>
<h2>Hvilken elektrode når?</h2>
<ul>
<li><strong>Basisk (E7018 / E 42 4 B):</strong> bærende konstruksjoner, tykke deler, S355 og høyere, krav til slagseighet, sprekkutsatte forbindelser. Vanligvis foretrukket klasse i EN 1090-arbeid fra EXC2.</li>
<li><strong>Rutil (E6013 / E 42 0 RR):</strong> lette konstruksjoner, tynnplate, synlige sveiser med lave seighetskrav.</li>
<li><strong>Cellulose (E6010):</strong> mest rotstrenger i rørledninger; sjelden nødvendig i generell tilvirkning.</li>
</ul>
<h2>Diameter og strømstyrke</h2>
<p>Som tommelfingerregel ca. 30–40 A per millimeter diameter. Nøyaktig verdi står i produsentens datablad og WPS-en.</p>
<table class="data-table"><thead><tr><th>Diameter (mm)</th><th>Strøm ca. (A)</th><th>Typisk bruk</th></tr></thead><tbody>
<tr><td>2,5</td><td>60–90</td><td>Tynne deler, rotstrenger</td></tr>
<tr><td>3,2</td><td>90–130</td><td>Vanligst, stillingssveising</td></tr>
<tr><td>4,0</td><td>130–180</td><td>Fylle- og dekkstrenger</td></tr>
<tr><td>5,0</td><td>180–240</td><td>Tykke deler, horisontal stilling</td></tr>
</tbody></table>
<h2>Hydrogen og tørking</h2>
<p>Basiske elektroder er bare lavhydrogen så lenge dekket holdes tørt. Fuktig dekke fører hydrogen inn i sveisemetallet og øker risikoen for kaldsprekker, særlig i tykke og høyfaste stål. Derfor tørkes basiske elektroder etter produsentens anvisning (vanligvis noen timer ved ca. 300–350 °C) og holdes i oppvarmede kokere til bruk. Vakuumpakkede elektroder brukes innen angitt tid etter åpning. Sammen med forvarming er hydrogenkontroll grunnlaget for å unngå sprekker (se <a href="on-isitma-hesaplama.html">beregning av forvarming</a>).</p>
<h2>Vanlige feil</h2>
<ul>
<li>La basiske elektroder ligge åpent og bruke dem dagen etter uten ny tørking.</li>
<li>Bruke rutile elektroder på konstruksjonsarbeid med krav til slagseighet.</li>
<li>Dekktypen på sveiserens sertifikat stemmer ikke med elektroden som brukes (se <a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>).</li>
<li>Ikke fjerne slagget helt mellom strengene, den vanligste årsaken til slagginneslutninger.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> ved sveising med dekkede elektroder bestemmes elektrodetypen av WPS-en; basiske elektroder tørkes og holdes i oppvarmede kokere til bruk. Elektrode- og chargedata føres i produksjonsregistrene på forespørsel. <a href="../kaynak-yontemleri.html">Våre sveisemetoder →</a></p></div>
`,
    faq: [
      ['Hva er forskjellen på rutil og basisk elektrode?', 'Rutil er lett å sveise og gir pen sveis, men med begrenset seighet og hydrogenkontroll. Basisk er lavhydrogen, seig og sprekkbestandig; foretrukket for bærende og tykke deler.'],
      ['Hva betyr E7018?', 'En lavhydrogen-elektrode med ca. 70 ksi (≈490 MPa) strekkfasthet, for alle stillinger, med basisk jernpulverdekke.'],
      ['Hvorfor tørkes basiske elektroder?', 'Dekket tar opp fukt, som går inn i sveisemetallet som hydrogen og øker risikoen for kaldsprekker. Tørking og oppvarmet lagring hindrer dette.'],
      ['Hvilken strøm for en 3,2 mm elektrode?', 'Vanligvis ca. 90–130 A; nøyaktig verdi etter datablad og WPS.']
    ],
    cta_h3: 'Riktig elektrode, sprekkfrie sveiser',
    cta_p: 'Send tegning og materialdata; vi gir tilbud med plan for prosess og tilsett.',
    cta_btn: 'Be om tilbud →'
  }
};
