export default {
  order: 30,
  slug: 'kaynak-teli-cesitleri-g3si1-g4si1',
  key: 'p30_wire',
  date: '2026-11-16',
  keywords: 'kaynak teli çeşitleri, gazaltı kaynak teli, SG2 SG3, G3Si1, G4Si1, ER70S-6, ISO 14341, özlü tel, paslanmaz kaynak teli, alüminyum kaynak teli, tozaltı teli, welding wire types, Schweißdraht Arten, fil de soudure',
  related: ['mig-mag-parametreleri', 'fcaw-ozlu-tel', 'koruyucu-gaz-secimi-mig-mag', 'saw-tozalti-kaynagi'],
  tr: {
    title: 'Kaynak Teli Çeşitleri: G3Si1 (SG2), G4Si1 (SG3), Özlü Tel ve Diğerleri',
    meta: 'Gazaltı kaynak teli nasıl seçilir? ISO 14341 sınıflandırması nasıl okunur, SG2 ile SG3 farkı, yüksek mukavemetli, paslanmaz, alüminyum, özlü ve tozaltı telleri, çaplar, ambalaj ve depolama.',
    og: 'Kaynak Teli Çeşitleri',
    tag: 'Sarf Malzeme · MIG/MAG',
    h1: 'Kaynak Teli Çeşitleri: G3Si1 (SG2), G4Si1 (SG3), Özlü Tel ve Diğerleri',
    crumb: 'Kaynak Teli Çeşitleri',
    read: '6 dk okuma',
    body: `
<p>Kaynak teli, kaynak metalinin mukavemetini, tokluğunu ve kimyasını belirler. Yanlış tel, doğru parametrelerle bile şartnameyi karşılamayan bir dikiş verir. Bu yazıda gazaltı (MIG/MAG), özlü tel ve tozaltı kaynağında kullanılan başlıca tel türlerini ve etiket üzerindeki kodun nasıl okunacağını özetliyoruz.</p>
<h2>Karbon Çelik Gazaltı Telleri (ISO 14341)</h2>
<p>Yapı çeliği işlerinin büyük çoğunluğu iki telle yapılır:</p>
<table class="data-table"><thead><tr><th>ISO 14341-A</th><th>Eski DIN adı</th><th>AWS A5.18 yakını</th><th>Özellik</th></tr></thead><tbody>
<tr><td>G3Si1</td><td>SG2</td><td>ER70S-6 (yaklaşık)</td><td>Genel amaçlı, S235–S355 için standart seçim</td></tr>
<tr><td>G4Si1</td><td>SG3</td><td>ER70S-6 (yaklaşık)</td><td>Daha yüksek Mn ve Si; biraz daha yüksek mukavemet, hafif paslı veya tufallı yüzeye daha toleranslı</td></tr>
</tbody></table>
<p>Not: AWS ve ISO sınıfları birebir aynı değildir; şartnamede hangi sistem istendiyse ona göre seçim yapılır.</p>
<h2>Sınıflandırma Kodu Nasıl Okunur?</h2>
<p>Örnek: <strong>ISO 14341-A G 42 4 M21 3Si1</strong></p>
<ul>
<li><strong>G:</strong> Gazaltı kaynağı için tel ve kaynak metali.</li>
<li><strong>42:</strong> Kaynak metalinin minimum akma dayanımı yaklaşık 420 MPa.</li>
<li><strong>4:</strong> −40 °C’de en az 47 J darbe enerjisi.</li>
<li><strong>M21:</strong> Deneyde kullanılan gaz grubu (argon + %15–25 CO₂, ISO 14175).</li>
<li><strong>3Si1:</strong> Telin kimyasal bileşim sembolü.</li>
</ul>
<p>Buradaki önemli nokta: mekanik değerler <em>belirli bir gazla</em> elde edilmiştir. Aynı tel %100 CO₂ ile kaynatıldığında mukavemet ve tokluk değerleri değişebilir; bu yüzden WPS’te gaz ve tel birlikte tanımlanır (bkz. <a href="koruyucu-gaz-secimi-mig-mag.html">koruyucu gaz seçimi</a>).</p>
<h2>Yüksek Mukavemetli Çelik Telleri (ISO 16834)</h2>
<p>S460 ve üzeri çeliklerde kaynak metalinin de yeterli mukavemette olması gerekir. ISO 16834’e göre sınıflandırılan teller, örneğin G 69 veya G 89 gibi gösterimlerle 690 ve 890 MPa düzeyinde akma dayanımı hedefler. Bu çeliklerde ısı girdisi ve soğuma süresi de tel kadar önemlidir (bkz. <a href="s700mc-kaynagi-isi-girdisi-t8-5.html">S700MC kaynağı</a>). Köşe kaynaklarında, tasarım uygun görürse bir alt mukavemet sınıfı tel kullanılabilir; bu karar mühendislik tarafında verilir.</p>
<h2>Özlü Teller (ISO 17632)</h2>
<p>Özlü tel, içi toz dolu boru şeklindedir. Rutil özlü teller pozisyon kaynağında rahat çalışır ve düzgün dikiş verir; bazik özlü teller daha iyi tokluk ve çatlak direnci sağlar; metal özlü teller yüksek yığma hızı ve az cüruf sunar. Ayrıntılar için <a href="fcaw-ozlu-tel.html">özlü tel yazımıza</a> bakabilirsiniz.</p>
<h2>Paslanmaz Çelik Telleri (ISO 14343)</h2>
<ul>
<li><strong>308LSi:</strong> 304/304L için.</li>
<li><strong>316LSi:</strong> 316/316L için.</li>
<li><strong>309LSi:</strong> Paslanmaz–karbon çelik birleşimleri ve tampon tabakalar.</li>
<li><strong>2209:</strong> Dupleks 2205 için.</li>
</ul>
<p>“Si” ekli versiyonlar daha akışkan bir banyo ve daha düzgün ıslatma sağlar.</p>
<h2>Alüminyum Telleri (ISO 18273)</h2>
<p>En yaygın iki tel <strong>4043</strong> (AlSi5) ve <strong>5356</strong> (AlMg5) tipidir. 4043 daha akışkandır ve sıcak çatlağa daha az eğilimlidir; 5356 daha yüksek mukavemet verir ve anodize sonrası renk uyumu daha iyidir. Seçim ana alaşıma ve kullanım şartlarına göre yapılır (bkz. <a href="aluminyum-kaynak.html">alüminyum kaynağı</a>).</p>
<h2>Tozaltı Telleri (ISO 14171)</h2>
<p>Tozaltı kaynağında tel ve toz bir çift olarak sınıflandırılır; örneğin S2 veya S2Si teli, belirli bir toz ile birlikte belirli mekanik değerler verir. Tel değiştirmek kadar toz değiştirmek de yeniden değerlendirme gerektirebilir.</p>
<h2>Çap ve Ambalaj</h2>
<ul>
<li><strong>0,8 mm:</strong> İnce sac, düşük akım.</li>
<li><strong>1,0 mm:</strong> İnce ve orta kalınlık, pozisyon kaynağı.</li>
<li><strong>1,2 mm:</strong> Orta ve kalın parçalar için en yaygın çap.</li>
<li><strong>1,6 mm:</strong> Yüksek yığma hızı, yatay pozisyonda kalın kaynaklar.</li>
</ul>
<p>Tel tipik olarak 15–18 kg makaralarda veya seri üretimde 250 kg ve üzeri varillerde gelir. Varil, tel değişimi için durmayı azaltır.</p>
<h2>Depolama ve İzlenebilirlik</h2>
<p>Tel kuru ve ambalajı kapalı halde saklanmalı, yüzeyi paslanmış veya kirlenmiş tel kullanılmamalıdır. Şartname istediğinde telin parti numarası ve EN 10204 sertifikası kayıt altına alınır, böylece her dikişin hangi sarfla yapıldığı izlenebilir (bkz. <a href="malzeme-sertifikasi-en-10204-3-1.html">malzeme sertifikası</a>).</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Tel ve gaz seçimi WPS ile birlikte yapılır; ana malzeme, kalınlık, pozisyon ve şartnamedeki tokluk şartı birlikte değerlendirilir. Sarf parti numaraları istendiğinde imalat kayıtlarına işlenir. <a href="../kaynak-yontemleri.html">Kaynak yöntemlerimiz →</a></p></div>
`,
    faq: [
      ['SG2 ile SG3 kaynak teli arasındaki fark nedir?', 'SG3 (G4Si1) daha yüksek mangan ve silisyum içerir; biraz daha yüksek mukavemet verir ve hafif kirli yüzeylere daha toleranslıdır. Genel yapı çeliği işlerinde ikisi de yaygındır.'],
      ['G 42 4 M21 3Si1 ne anlama gelir?', 'Yaklaşık 420 MPa minimum akma, −40 °C’de 47 J darbe, M21 gaz grubuyla test edilmiş ve 3Si1 kimyasına sahip bir gazaltı teli.'],
      ['En yaygın kaynak teli çapı hangisidir?', 'Orta ve kalın yapı çeliği parçalarında 1,2 mm en yaygın çaptır; ince saclarda 0,8–1,0 mm tercih edilir.'],
      ['Alüminyum için 4043 mü 5356 mı?', '4043 daha akışkandır ve sıcak çatlağa daha az eğilimlidir; 5356 daha yüksek mukavemet verir. Seçim ana alaşıma ve kullanım şartına göre yapılır.']
    ],
    cta_h3: 'Doğru sarfla, şartnameye uygun kaynak',
    cta_p: 'Çiziminizi ve malzeme bilgisini gönderin; tel, gaz ve WPS planıyla teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Types of Welding Wire: G3Si1 (SG2), G4Si1 (SG3), Flux-Cored and More',
    meta: 'How do you choose MIG/MAG welding wire? How to read the ISO 14341 classification, SG2 vs SG3, high-strength, stainless, aluminium, flux-cored and submerged arc wires, diameters, packaging and storage.',
    og: 'Types of Welding Wire',
    tag: 'Consumables · MIG/MAG',
    h1: 'Types of Welding Wire: G3Si1 (SG2), G4Si1 (SG3), Flux-Cored and More',
    crumb: 'Types of Welding Wire',
    read: '6 min read',
    body: `
<p>The welding wire determines the strength, toughness and chemistry of the weld metal. The wrong wire gives a weld that does not meet the specification, even with the right parameters. This article summarises the main wire types used in MIG/MAG, flux-cored and submerged arc welding, and how to read the code on the label.</p>
<h2>Carbon Steel MIG/MAG Wires (ISO 14341)</h2>
<p>Most structural steel work is done with two wires:</p>
<table class="data-table"><thead><tr><th>ISO 14341-A</th><th>Old DIN name</th><th>Close AWS A5.18</th><th>Characteristics</th></tr></thead><tbody>
<tr><td>G3Si1</td><td>SG2</td><td>ER70S-6 (approx.)</td><td>General purpose, standard choice for S235–S355</td></tr>
<tr><td>G4Si1</td><td>SG3</td><td>ER70S-6 (approx.)</td><td>Higher Mn and Si; slightly higher strength, more tolerant of light rust or mill scale</td></tr>
</tbody></table>
<p>Note: AWS and ISO classes are not identical; select according to the system the specification calls for.</p>
<h2>How to Read the Classification</h2>
<p>Example: <strong>ISO 14341-A G 42 4 M21 3Si1</strong></p>
<ul>
<li><strong>G:</strong> wire and weld metal for gas-shielded welding.</li>
<li><strong>42:</strong> minimum weld metal yield strength about 420 MPa.</li>
<li><strong>4:</strong> at least 47 J impact energy at −40 °C.</li>
<li><strong>M21:</strong> gas group used in the test (argon + 15–25% CO₂, ISO 14175).</li>
<li><strong>3Si1:</strong> chemical composition symbol of the wire.</li>
</ul>
<p>The key point: the mechanical values were obtained <em>with a specific gas</em>. Welded with 100% CO₂, the same wire can give different strength and toughness, which is why the WPS defines gas and wire together (see <a href="koruyucu-gaz-secimi-mig-mag.html">shielding gas selection</a>).</p>
<h2>High-Strength Steel Wires (ISO 16834)</h2>
<p>On S460 and higher steels the weld metal must also be strong enough. Wires classified to ISO 16834, shown for example as G 69 or G 89, target yield strengths around 690 and 890 MPa. With these steels heat input and cooling time matter as much as the wire (see <a href="s700mc-kaynagi-isi-girdisi-t8-5.html">welding S700MC</a>). For fillet welds, an undermatching wire may be used if the design allows; that decision belongs to engineering.</p>
<h2>Flux-Cored Wires (ISO 17632)</h2>
<p>Flux-cored wire is a tube filled with powder. Rutile cored wires run easily in position and give a smooth bead; basic cored wires give better toughness and crack resistance; metal cored wires offer high deposition with little slag. See our <a href="fcaw-ozlu-tel.html">flux-cored wire article</a> for details.</p>
<h2>Stainless Steel Wires (ISO 14343)</h2>
<ul>
<li><strong>308LSi:</strong> for 304/304L.</li>
<li><strong>316LSi:</strong> for 316/316L.</li>
<li><strong>309LSi:</strong> stainless to carbon steel joints and buffer layers.</li>
<li><strong>2209:</strong> for duplex 2205.</li>
</ul>
<p>The “Si” versions give a more fluid pool and better wetting.</p>
<h2>Aluminium Wires (ISO 18273)</h2>
<p>The two most common are <strong>4043</strong> (AlSi5) and <strong>5356</strong> (AlMg5). 4043 is more fluid and less prone to hot cracking; 5356 gives higher strength and a better colour match after anodising. The choice depends on the parent alloy and service conditions (see <a href="aluminyum-kaynak.html">aluminium welding</a>).</p>
<h2>Submerged Arc Wires (ISO 14171)</h2>
<p>In submerged arc welding, wire and flux are classified as a pair; for example S2 or S2Si wire gives certain mechanical values with a certain flux. Changing the flux can require re-evaluation just as changing the wire does.</p>
<h2>Diameter and Packaging</h2>
<ul>
<li><strong>0.8 mm:</strong> thin sheet, low current.</li>
<li><strong>1.0 mm:</strong> thin and medium thickness, positional welding.</li>
<li><strong>1.2 mm:</strong> the most common diameter for medium and thick parts.</li>
<li><strong>1.6 mm:</strong> high deposition, heavy welds in the flat position.</li>
</ul>
<p>Wire typically comes on 15–18 kg spools or, in series production, in drums of 250 kg and more. Drums reduce stops for wire changes.</p>
<h2>Storage and Traceability</h2>
<p>Keep wire dry and in closed packaging; do not use wire with rusty or contaminated surfaces. Where the specification requires, the wire batch number and EN 10204 certificate are recorded so it is traceable which consumable each weld was made with (see <a href="malzeme-sertifikasi-en-10204-3-1.html">material certificates</a>).</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> wire and gas are selected together with the WPS, considering parent material, thickness, position and the toughness requirement in the specification. Consumable batch numbers are entered in production records when requested. <a href="../kaynak-yontemleri.html">Our welding methods →</a></p></div>
`,
    faq: [
      ['What is the difference between SG2 and SG3 wire?', 'SG3 (G4Si1) contains more manganese and silicon; it gives slightly higher strength and tolerates lightly contaminated surfaces better. Both are common for general structural steel.'],
      ['What does G 42 4 M21 3Si1 mean?', 'A gas-shielded wire with about 420 MPa minimum yield, 47 J at −40 °C, tested with M21 gas, with 3Si1 chemistry.'],
      ['What is the most common welding wire diameter?', '1.2 mm is the most common for medium and thick structural steel; 0.8–1.0 mm is preferred for thin sheet.'],
      ['4043 or 5356 for aluminium?', '4043 is more fluid and less prone to hot cracking; 5356 gives higher strength. The choice depends on the parent alloy and service.']
    ],
    cta_h3: 'The right consumable, a weld that meets the spec',
    cta_p: 'Send your drawing and material details; we will quote with a wire, gas and WPS plan.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Schweißdraht-Arten: G3Si1 (SG2), G4Si1 (SG3), Fülldraht und mehr',
    meta: 'Wie wählt man MSG-Schweißdraht? Klassifizierung nach ISO 14341 lesen, SG2 vs. SG3, hochfeste, Edelstahl-, Aluminium-, Fülldraht- und UP-Drähte, Durchmesser, Verpackung und Lagerung.',
    og: 'Schweißdraht-Arten',
    tag: 'Zusatzwerkstoffe · MSG',
    h1: 'Schweißdraht-Arten: G3Si1 (SG2), G4Si1 (SG3), Fülldraht und mehr',
    crumb: 'Schweißdraht-Arten',
    read: '6 Min. Lesezeit',
    body: `
<p>Der Schweißdraht bestimmt Festigkeit, Zähigkeit und Chemie des Schweißguts. Der falsche Draht liefert selbst mit richtigen Parametern eine Naht, die die Spezifikation nicht erfüllt. Hier fassen wir die wichtigsten Drahtarten für MSG-, Fülldraht- und UP-Schweißen zusammen und erklären den Code auf dem Etikett.</p>
<h2>Unlegierte MSG-Drähte (ISO 14341)</h2>
<p>Der Großteil der Stahlbauarbeiten wird mit zwei Drähten ausgeführt:</p>
<table class="data-table"><thead><tr><th>ISO 14341-A</th><th>Alte DIN-Bezeichnung</th><th>Nahe AWS A5.18</th><th>Eigenschaften</th></tr></thead><tbody>
<tr><td>G3Si1</td><td>SG2</td><td>ER70S-6 (ca.)</td><td>Universell, Standard für S235–S355</td></tr>
<tr><td>G4Si1</td><td>SG3</td><td>ER70S-6 (ca.)</td><td>Mehr Mn und Si; etwas höhere Festigkeit, toleranter gegenüber leichtem Rost oder Zunder</td></tr>
</tbody></table>
<p>Hinweis: AWS- und ISO-Klassen sind nicht identisch; gewählt wird nach dem System, das die Spezifikation verlangt.</p>
<h2>So liest man die Bezeichnung</h2>
<p>Beispiel: <strong>ISO 14341-A G 42 4 M21 3Si1</strong></p>
<ul>
<li><strong>G:</strong> Draht und Schweißgut für das Schutzgasschweißen.</li>
<li><strong>42:</strong> Mindeststreckgrenze des Schweißguts etwa 420 MPa.</li>
<li><strong>4:</strong> mindestens 47 J Kerbschlagarbeit bei −40 °C.</li>
<li><strong>M21:</strong> Gasgruppe der Prüfung (Argon + 15–25 % CO₂, ISO 14175).</li>
<li><strong>3Si1:</strong> chemisches Kurzzeichen des Drahts.</li>
</ul>
<p>Wichtig: Die mechanischen Werte gelten <em>für ein bestimmtes Gas</em>. Mit 100 % CO₂ kann derselbe Draht andere Festigkeit und Zähigkeit ergeben; deshalb legt die WPS Gas und Draht gemeinsam fest (siehe <a href="koruyucu-gaz-secimi-mig-mag.html">Schutzgasauswahl</a>).</p>
<h2>Drähte für hochfeste Stähle (ISO 16834)</h2>
<p>Bei S460 und höher muss auch das Schweißgut fest genug sein. Drähte nach ISO 16834, etwa G 69 oder G 89, zielen auf Streckgrenzen um 690 bzw. 890 MPa. Bei diesen Stählen sind Wärmeeinbringung und Abkühlzeit so wichtig wie der Draht (siehe <a href="s700mc-kaynagi-isi-girdisi-t8-5.html">S700MC schweißen</a>). Für Kehlnähte kann ein niedriger fester Draht verwendet werden, wenn die Konstruktion es erlaubt; das entscheidet die Schweißaufsicht bzw. Konstruktion.</p>
<h2>Fülldrähte (ISO 17632)</h2>
<p>Fülldraht ist ein mit Pulver gefülltes Röhrchen. Rutil-Fülldrähte laufen gut in Zwangslagen und ergeben glatte Nähte; basische bieten bessere Zähigkeit und Rissbeständigkeit; Metallpulver-Fülldrähte hohe Abschmelzleistung bei wenig Schlacke. Details in unserem <a href="fcaw-ozlu-tel.html">Fülldraht-Artikel</a>.</p>
<h2>Edelstahldrähte (ISO 14343)</h2>
<ul>
<li><strong>308LSi:</strong> für 304/304L.</li>
<li><strong>316LSi:</strong> für 316/316L.</li>
<li><strong>309LSi:</strong> Schwarz-Weiß-Verbindungen und Pufferlagen.</li>
<li><strong>2209:</strong> für Duplex 2205.</li>
</ul>
<p>Die „Si“-Varianten ergeben ein flüssigeres Bad und bessere Benetzung.</p>
<h2>Aluminiumdrähte (ISO 18273)</h2>
<p>Am häufigsten sind <strong>4043</strong> (AlSi5) und <strong>5356</strong> (AlMg5). 4043 ist dünnflüssiger und weniger heißrissanfällig; 5356 liefert höhere Festigkeit und eine bessere Farbübereinstimmung nach dem Eloxieren. Die Wahl richtet sich nach Grundlegierung und Einsatz (siehe <a href="aluminyum-kaynak.html">Aluminium schweißen</a>).</p>
<h2>UP-Drähte (ISO 14171)</h2>
<p>Beim UP-Schweißen werden Draht und Pulver als Paar klassifiziert; ein S2- oder S2Si-Draht ergibt mit einem bestimmten Pulver bestimmte Werte. Ein Pulverwechsel kann ebenso eine Neubewertung erfordern wie ein Drahtwechsel.</p>
<h2>Durchmesser und Gebinde</h2>
<ul>
<li><strong>0,8 mm:</strong> Dünnblech, niedriger Strom.</li>
<li><strong>1,0 mm:</strong> dünne bis mittlere Dicken, Zwangslagen.</li>
<li><strong>1,2 mm:</strong> häufigster Durchmesser für mittlere und dicke Teile.</li>
<li><strong>1,6 mm:</strong> hohe Abschmelzleistung, dicke Nähte in Wannenlage.</li>
</ul>
<p>Draht kommt meist auf 15–18-kg-Spulen oder in der Serie in Fässern ab 250 kg. Fässer verringern Stillstände durch Drahtwechsel.</p>
<h2>Lagerung und Rückverfolgbarkeit</h2>
<p>Draht trocken und in geschlossener Verpackung lagern; angerosteten oder verschmutzten Draht nicht verwenden. Wenn die Spezifikation es verlangt, werden Chargennummer und EN-10204-Zeugnis des Drahts erfasst, damit nachvollziehbar ist, mit welchem Zusatz jede Naht geschweißt wurde (siehe <a href="malzeme-sertifikasi-en-10204-3-1.html">Werkstoffzeugnisse</a>).</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Draht und Gas wählen wir zusammen mit der WPS, unter Berücksichtigung von Grundwerkstoff, Dicke, Position und Zähigkeitsanforderung. Chargennummern der Zusätze tragen wir auf Wunsch in die Fertigungsdokumentation ein. <a href="../kaynak-yontemleri.html">Unsere Schweißverfahren →</a></p></div>
`,
    faq: [
      ['Was ist der Unterschied zwischen SG2 und SG3?', 'SG3 (G4Si1) enthält mehr Mangan und Silizium; etwas höhere Festigkeit und bessere Toleranz gegenüber leicht verschmutzten Oberflächen. Beide sind im allgemeinen Stahlbau üblich.'],
      ['Was bedeutet G 42 4 M21 3Si1?', 'Ein MSG-Draht mit etwa 420 MPa Mindeststreckgrenze, 47 J bei −40 °C, geprüft mit M21-Gas, mit 3Si1-Chemie.'],
      ['Welcher Drahtdurchmesser ist am häufigsten?', '1,2 mm für mittlere und dicke Stahlbauteile; für Dünnblech 0,8–1,0 mm.'],
      ['4043 oder 5356 für Aluminium?', '4043 ist dünnflüssiger und weniger heißrissanfällig; 5356 liefert höhere Festigkeit. Die Wahl hängt von Legierung und Einsatz ab.']
    ],
    cta_h3: 'Der richtige Zusatz, eine spezifikationsgerechte Naht',
    cta_p: 'Senden Sie Zeichnung und Werkstoffangaben; wir bieten mit Draht-, Gas- und WPS-Plan an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Tipos de hilo de soldadura: G3Si1 (SG2), G4Si1 (SG3), tubular y más',
    meta: 'Cómo elegir hilo MIG/MAG: cómo leer la clasificación ISO 14341, SG2 frente a SG3, hilos de alta resistencia, inoxidables, de aluminio, tubulares y de arco sumergido, diámetros, embalaje y almacenamiento.',
    og: 'Tipos de hilo de soldadura',
    tag: 'Consumibles · MIG/MAG',
    h1: 'Tipos de hilo de soldadura: G3Si1 (SG2), G4Si1 (SG3), tubular y más',
    crumb: 'Tipos de hilo de soldadura',
    read: '6 min de lectura',
    body: `
<p>El hilo determina la resistencia, la tenacidad y la química del metal de soldadura. Un hilo equivocado da una soldadura que no cumple la especificación aunque los parámetros sean correctos. Aquí resumimos los principales tipos de hilo para MIG/MAG, tubular y arco sumergido, y cómo leer el código de la etiqueta.</p>
<h2>Hilos MIG/MAG para acero al carbono (ISO 14341)</h2>
<p>La mayor parte del trabajo en acero estructural se hace con dos hilos:</p>
<table class="data-table"><thead><tr><th>ISO 14341-A</th><th>Antigua DIN</th><th>AWS A5.18 cercano</th><th>Características</th></tr></thead><tbody>
<tr><td>G3Si1</td><td>SG2</td><td>ER70S-6 (aprox.)</td><td>Uso general, elección estándar para S235–S355</td></tr>
<tr><td>G4Si1</td><td>SG3</td><td>ER70S-6 (aprox.)</td><td>Más Mn y Si; algo más de resistencia y más tolerancia a óxido o cascarilla ligera</td></tr>
</tbody></table>
<p>Nota: las clases AWS e ISO no son idénticas; se elige según el sistema que pida la especificación.</p>
<h2>Cómo leer la clasificación</h2>
<p>Ejemplo: <strong>ISO 14341-A G 42 4 M21 3Si1</strong></p>
<ul>
<li><strong>G:</strong> hilo y metal de soldadura para soldeo con gas.</li>
<li><strong>42:</strong> límite elástico mínimo del metal de soldadura de unos 420 MPa.</li>
<li><strong>4:</strong> al menos 47 J de energía de impacto a −40 °C.</li>
<li><strong>M21:</strong> grupo de gas del ensayo (argón + 15–25 % CO₂, ISO 14175).</li>
<li><strong>3Si1:</strong> símbolo de composición química del hilo.</li>
</ul>
<p>Lo importante: los valores mecánicos se obtuvieron <em>con un gas concreto</em>. Con 100 % CO₂, el mismo hilo puede dar otra resistencia y tenacidad; por eso la WPS define gas e hilo juntos (ver <a href="koruyucu-gaz-secimi-mig-mag.html">selección del gas de protección</a>).</p>
<h2>Hilos para aceros de alta resistencia (ISO 16834)</h2>
<p>En S460 y superiores, el metal de soldadura también debe ser suficientemente resistente. Los hilos ISO 16834, por ejemplo G 69 o G 89, apuntan a límites elásticos de unos 690 y 890 MPa. En estos aceros el aporte térmico y el tiempo de enfriamiento importan tanto como el hilo (ver <a href="s700mc-kaynagi-isi-girdisi-t8-5.html">soldadura del S700MC</a>). En soldaduras en ángulo puede usarse un hilo de menor resistencia si el diseño lo permite; esa decisión corresponde a ingeniería.</p>
<h2>Hilos tubulares (ISO 17632)</h2>
<p>El hilo tubular es un tubo relleno de polvo. Los de rutilo trabajan bien en posición y dan un cordón liso; los básicos ofrecen mejor tenacidad y resistencia a la fisuración; los de núcleo metálico, alta tasa de depósito con poca escoria. Más detalles en nuestro <a href="fcaw-ozlu-tel.html">artículo sobre hilo tubular</a>.</p>
<h2>Hilos de acero inoxidable (ISO 14343)</h2>
<ul>
<li><strong>308LSi:</strong> para 304/304L.</li>
<li><strong>316LSi:</strong> para 316/316L.</li>
<li><strong>309LSi:</strong> uniones inoxidable–acero al carbono y capas de amortiguación.</li>
<li><strong>2209:</strong> para dúplex 2205.</li>
</ul>
<p>Las versiones “Si” dan un baño más fluido y mejor mojado.</p>
<h2>Hilos de aluminio (ISO 18273)</h2>
<p>Los dos más comunes son <strong>4043</strong> (AlSi5) y <strong>5356</strong> (AlMg5). El 4043 es más fluido y menos propenso a la fisuración en caliente; el 5356 da más resistencia y mejor igualación de color tras el anodizado. La elección depende de la aleación base y del servicio (ver <a href="aluminyum-kaynak.html">soldadura de aluminio</a>).</p>
<h2>Hilos de arco sumergido (ISO 14171)</h2>
<p>En arco sumergido, hilo y fundente se clasifican como pareja; un hilo S2 o S2Si da ciertos valores mecánicos con un fundente determinado. Cambiar el fundente puede exigir una reevaluación igual que cambiar el hilo.</p>
<h2>Diámetro y embalaje</h2>
<ul>
<li><strong>0,8 mm:</strong> chapa fina, baja intensidad.</li>
<li><strong>1,0 mm:</strong> espesores finos y medios, soldadura en posición.</li>
<li><strong>1,2 mm:</strong> el diámetro más habitual para piezas medianas y gruesas.</li>
<li><strong>1,6 mm:</strong> alto depósito, soldaduras gruesas en posición plana.</li>
</ul>
<p>El hilo suele venir en bobinas de 15–18 kg o, en serie, en bidones de 250 kg o más. Los bidones reducen las paradas por cambio de hilo.</p>
<h2>Almacenamiento y trazabilidad</h2>
<p>El hilo debe guardarse seco y en su embalaje cerrado; no debe usarse hilo oxidado o contaminado. Cuando la especificación lo exige, se registran el lote del hilo y su certificado EN 10204 para saber con qué consumible se hizo cada soldadura (ver <a href="malzeme-sertifikasi-en-10204-3-1.html">certificados de material</a>).</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> el hilo y el gas se eligen junto con la WPS, teniendo en cuenta el material base, el espesor, la posición y la tenacidad exigida. Los lotes de consumibles se anotan en los registros de fabricación cuando se solicita. <a href="../kaynak-yontemleri.html">Nuestros procesos de soldadura →</a></p></div>
`,
    faq: [
      ['¿Qué diferencia hay entre el hilo SG2 y el SG3?', 'El SG3 (G4Si1) tiene más manganeso y silicio; da algo más de resistencia y tolera mejor superficies algo sucias. Ambos son habituales en acero estructural.'],
      ['¿Qué significa G 42 4 M21 3Si1?', 'Un hilo para soldeo con gas con unos 420 MPa de límite elástico mínimo, 47 J a −40 °C, ensayado con gas M21 y química 3Si1.'],
      ['¿Cuál es el diámetro de hilo más común?', '1,2 mm en piezas medianas y gruesas de acero estructural; en chapa fina se prefiere 0,8–1,0 mm.'],
      ['¿4043 o 5356 para aluminio?', 'El 4043 es más fluido y menos propenso a fisuras en caliente; el 5356 da más resistencia. Depende de la aleación base y del servicio.']
    ],
    cta_h3: 'El consumible correcto, una soldadura conforme',
    cta_p: 'Envíenos su plano y los datos del material; ofertamos con plan de hilo, gas y WPS.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Types de fil de soudage : G3Si1 (SG2), G4Si1 (SG3), fil fourré et autres',
    meta: 'Comment choisir un fil MIG/MAG ? Lire la désignation ISO 14341, SG2 ou SG3, fils haute résistance, inox, aluminium, fourrés et pour l’arc submergé, diamètres, conditionnement et stockage.',
    og: 'Types de fil de soudage',
    tag: 'Consommables · MIG/MAG',
    h1: 'Types de fil de soudage : G3Si1 (SG2), G4Si1 (SG3), fil fourré et autres',
    crumb: 'Types de fil de soudage',
    read: '6 min de lecture',
    body: `
<p>Le fil détermine la résistance, la ténacité et la chimie du métal fondu. Un mauvais fil donne une soudure non conforme à la spécification, même avec les bons paramètres. Nous résumons ici les principaux fils utilisés en MIG/MAG, en fil fourré et à l’arc submergé, et la lecture du code de l’étiquette.</p>
<h2>Fils MIG/MAG pour acier carbone (ISO 14341)</h2>
<p>La plupart des travaux en acier de construction se font avec deux fils :</p>
<table class="data-table"><thead><tr><th>ISO 14341-A</th><th>Ancienne DIN</th><th>AWS A5.18 proche</th><th>Caractéristiques</th></tr></thead><tbody>
<tr><td>G3Si1</td><td>SG2</td><td>ER70S-6 (env.)</td><td>Usage général, choix standard pour S235–S355</td></tr>
<tr><td>G4Si1</td><td>SG3</td><td>ER70S-6 (env.)</td><td>Plus de Mn et de Si ; résistance un peu plus élevée, plus tolérant à une légère rouille ou calamine</td></tr>
</tbody></table>
<p>Remarque : les classes AWS et ISO ne sont pas identiques ; on choisit selon le système demandé par la spécification.</p>
<h2>Lire la désignation</h2>
<p>Exemple : <strong>ISO 14341-A G 42 4 M21 3Si1</strong></p>
<ul>
<li><strong>G :</strong> fil et métal fondu pour le soudage sous gaz.</li>
<li><strong>42 :</strong> limite d’élasticité minimale du métal fondu d’environ 420 MPa.</li>
<li><strong>4 :</strong> au moins 47 J de résilience à −40 °C.</li>
<li><strong>M21 :</strong> groupe de gaz de l’essai (argon + 15–25 % CO₂, ISO 14175).</li>
<li><strong>3Si1 :</strong> symbole de composition chimique du fil.</li>
</ul>
<p>Point clé : les valeurs mécaniques ont été obtenues <em>avec un gaz donné</em>. Sous 100 % CO₂, le même fil peut donner une autre résistance et ténacité ; c’est pourquoi le DMOS définit gaz et fil ensemble (voir <a href="koruyucu-gaz-secimi-mig-mag.html">choix du gaz de protection</a>).</p>
<h2>Fils pour aciers à haute résistance (ISO 16834)</h2>
<p>Sur le S460 et au-delà, le métal fondu doit aussi être assez résistant. Les fils ISO 16834, par exemple G 69 ou G 89, visent des limites d’élasticité d’environ 690 et 890 MPa. Avec ces aciers, l’énergie et le temps de refroidissement comptent autant que le fil (voir <a href="s700mc-kaynagi-isi-girdisi-t8-5.html">souder le S700MC</a>). Pour les soudures d’angle, un fil sous-adapté peut être utilisé si la conception le permet ; c’est une décision d’ingénierie.</p>
<h2>Fils fourrés (ISO 17632)</h2>
<p>Le fil fourré est un tube rempli de poudre. Les fils rutiles soudent bien en position et donnent un cordon régulier ; les basiques offrent une meilleure ténacité et résistance à la fissuration ; les fils à poudre métallique un taux de dépôt élevé avec peu de laitier. Détails dans notre <a href="fcaw-ozlu-tel.html">article sur le fil fourré</a>.</p>
<h2>Fils inox (ISO 14343)</h2>
<ul>
<li><strong>308LSi :</strong> pour 304/304L.</li>
<li><strong>316LSi :</strong> pour 316/316L.</li>
<li><strong>309LSi :</strong> assemblages inox–acier carbone et couches tampons.</li>
<li><strong>2209 :</strong> pour duplex 2205.</li>
</ul>
<p>Les versions « Si » donnent un bain plus fluide et un meilleur mouillage.</p>
<h2>Fils aluminium (ISO 18273)</h2>
<p>Les deux plus courants sont le <strong>4043</strong> (AlSi5) et le <strong>5356</strong> (AlMg5). Le 4043 est plus fluide et moins sensible à la fissuration à chaud ; le 5356 donne plus de résistance et une meilleure teinte après anodisation. Le choix dépend de l’alliage de base et du service (voir <a href="aluminyum-kaynak.html">soudage de l’aluminium</a>).</p>
<h2>Fils pour l’arc submergé (ISO 14171)</h2>
<p>À l’arc submergé, fil et flux sont classés en couple ; un fil S2 ou S2Si donne certaines valeurs avec un flux donné. Changer de flux peut exiger une réévaluation, comme changer de fil.</p>
<h2>Diamètre et conditionnement</h2>
<ul>
<li><strong>0,8 mm :</strong> tôle fine, faible intensité.</li>
<li><strong>1,0 mm :</strong> épaisseurs fines et moyennes, soudage en position.</li>
<li><strong>1,2 mm :</strong> le diamètre le plus courant pour les pièces moyennes et épaisses.</li>
<li><strong>1,6 mm :</strong> fort taux de dépôt, soudures épaisses à plat.</li>
</ul>
<p>Le fil est généralement livré en bobines de 15–18 kg ou, en série, en fûts de 250 kg et plus. Les fûts réduisent les arrêts pour changement de fil.</p>
<h2>Stockage et traçabilité</h2>
<p>Le fil doit être stocké au sec, dans son emballage fermé ; un fil rouillé ou souillé ne doit pas être utilisé. Lorsque la spécification l’exige, le numéro de lot et le certificat EN 10204 du fil sont enregistrés pour savoir avec quel consommable chaque soudure a été faite (voir <a href="malzeme-sertifikasi-en-10204-3-1.html">certificats matière</a>).</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> fil et gaz sont choisis avec le DMOS, en tenant compte du matériau de base, de l’épaisseur, de la position et de la ténacité exigée. Les lots de consommables sont reportés dans les enregistrements de fabrication sur demande. <a href="../kaynak-yontemleri.html">Nos procédés de soudage →</a></p></div>
`,
    faq: [
      ['Quelle différence entre fil SG2 et SG3 ?', 'Le SG3 (G4Si1) contient plus de manganèse et de silicium ; résistance un peu plus élevée et meilleure tolérance aux surfaces légèrement souillées. Les deux sont courants en construction métallique.'],
      ['Que signifie G 42 4 M21 3Si1 ?', 'Un fil pour soudage sous gaz d’environ 420 MPa de limite d’élasticité minimale, 47 J à −40 °C, testé sous gaz M21, de chimie 3Si1.'],
      ['Quel est le diamètre de fil le plus courant ?', '1,2 mm pour les pièces moyennes et épaisses ; 0,8–1,0 mm pour la tôle fine.'],
      ['4043 ou 5356 pour l’aluminium ?', 'Le 4043 est plus fluide et moins sensible à la fissuration à chaud ; le 5356 donne plus de résistance. Cela dépend de l’alliage et du service.']
    ],
    cta_h3: 'Le bon consommable, une soudure conforme',
    cta_p: 'Envoyez votre plan et les données matière ; nous chiffrons avec un plan fil, gaz et DMOS.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Tipi di filo per saldatura: G3Si1 (SG2), G4Si1 (SG3), animato e altri',
    meta: 'Come scegliere il filo MIG/MAG? Come leggere la designazione ISO 14341, SG2 o SG3, fili per alta resistenza, inox, alluminio, animati e per arco sommerso, diametri, confezioni e stoccaggio.',
    og: 'Tipi di filo per saldatura',
    tag: 'Consumabili · MIG/MAG',
    h1: 'Tipi di filo per saldatura: G3Si1 (SG2), G4Si1 (SG3), animato e altri',
    crumb: 'Tipi di filo per saldatura',
    read: '6 min di lettura',
    body: `
<p>Il filo determina resistenza, tenacità e chimica del metallo saldato. Il filo sbagliato dà una saldatura non conforme alla specifica anche con i parametri giusti. Qui riassumiamo i principali fili per MIG/MAG, filo animato e arco sommerso, e come leggere il codice in etichetta.</p>
<h2>Fili MIG/MAG per acciaio al carbonio (ISO 14341)</h2>
<p>La maggior parte della carpenteria si fa con due fili:</p>
<table class="data-table"><thead><tr><th>ISO 14341-A</th><th>Vecchia DIN</th><th>AWS A5.18 vicino</th><th>Caratteristiche</th></tr></thead><tbody>
<tr><td>G3Si1</td><td>SG2</td><td>ER70S-6 (circa)</td><td>Uso generale, scelta standard per S235–S355</td></tr>
<tr><td>G4Si1</td><td>SG3</td><td>ER70S-6 (circa)</td><td>Più Mn e Si; resistenza un po’ più alta, più tollerante a ruggine o scaglia leggera</td></tr>
</tbody></table>
<p>Nota: le classi AWS e ISO non sono identiche; si sceglie secondo il sistema richiesto dalla specifica.</p>
<h2>Come leggere la designazione</h2>
<p>Esempio: <strong>ISO 14341-A G 42 4 M21 3Si1</strong></p>
<ul>
<li><strong>G:</strong> filo e metallo saldato per saldatura a gas.</li>
<li><strong>42:</strong> snervamento minimo del metallo saldato circa 420 MPa.</li>
<li><strong>4:</strong> almeno 47 J di resilienza a −40 °C.</li>
<li><strong>M21:</strong> gruppo di gas della prova (argon + 15–25 % CO₂, ISO 14175).</li>
<li><strong>3Si1:</strong> simbolo di composizione chimica del filo.</li>
</ul>
<p>Il punto chiave: i valori meccanici sono ottenuti <em>con un gas specifico</em>. Con 100 % CO₂ lo stesso filo può dare resistenza e tenacità diverse; per questo la WPS definisce gas e filo insieme (vedi <a href="koruyucu-gaz-secimi-mig-mag.html">scelta del gas di protezione</a>).</p>
<h2>Fili per acciai ad alta resistenza (ISO 16834)</h2>
<p>Su S460 e oltre anche il metallo saldato deve essere abbastanza resistente. I fili ISO 16834, per esempio G 69 o G 89, puntano a snervamenti di circa 690 e 890 MPa. Con questi acciai apporto termico e tempo di raffreddamento contano quanto il filo (vedi <a href="s700mc-kaynagi-isi-girdisi-t8-5.html">saldatura dell’S700MC</a>). Per le saldature d’angolo si può usare un filo di classe inferiore se il progetto lo consente; la decisione spetta all’ingegneria.</p>
<h2>Fili animati (ISO 17632)</h2>
<p>Il filo animato è un tubo riempito di polvere. I rutilici lavorano bene in posizione e danno un cordone liscio; i basici offrono migliore tenacità e resistenza alle cricche; i metal-cored alto tasso di deposito con poca scoria. Dettagli nel nostro <a href="fcaw-ozlu-tel.html">articolo sul filo animato</a>.</p>
<h2>Fili inox (ISO 14343)</h2>
<ul>
<li><strong>308LSi:</strong> per 304/304L.</li>
<li><strong>316LSi:</strong> per 316/316L.</li>
<li><strong>309LSi:</strong> giunti inox–carbonio e strati di imburratura.</li>
<li><strong>2209:</strong> per duplex 2205.</li>
</ul>
<p>Le versioni “Si” danno un bagno più fluido e una migliore bagnabilità.</p>
<h2>Fili per alluminio (ISO 18273)</h2>
<p>I due più comuni sono <strong>4043</strong> (AlSi5) e <strong>5356</strong> (AlMg5). Il 4043 è più fluido e meno soggetto a cricche a caldo; il 5356 dà più resistenza e un colore più uniforme dopo l’anodizzazione. La scelta dipende dalla lega base e dal servizio (vedi <a href="aluminyum-kaynak.html">saldatura dell’alluminio</a>).</p>
<h2>Fili per arco sommerso (ISO 14171)</h2>
<p>Nell’arco sommerso filo e flusso sono classificati in coppia; un filo S2 o S2Si dà certi valori meccanici con un certo flusso. Cambiare flusso può richiedere una rivalutazione come cambiare filo.</p>
<h2>Diametro e confezioni</h2>
<ul>
<li><strong>0,8 mm:</strong> lamiera sottile, bassa corrente.</li>
<li><strong>1,0 mm:</strong> spessori sottili e medi, saldatura in posizione.</li>
<li><strong>1,2 mm:</strong> il diametro più diffuso per pezzi medi e spessi.</li>
<li><strong>1,6 mm:</strong> alto deposito, saldature spesse in piano.</li>
</ul>
<p>Il filo arriva di solito in bobine da 15–18 kg o, in serie, in fusti da 250 kg e oltre. I fusti riducono le fermate per il cambio filo.</p>
<h2>Stoccaggio e tracciabilità</h2>
<p>Il filo va conservato asciutto e nella confezione chiusa; non va usato filo arrugginito o contaminato. Quando la specifica lo richiede, lotto e certificato EN 10204 del filo vengono registrati, così si sa con quale consumabile è stata fatta ogni saldatura (vedi <a href="malzeme-sertifikasi-en-10204-3-1.html">certificati dei materiali</a>).</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> filo e gas si scelgono insieme alla WPS, considerando materiale base, spessore, posizione e tenacità richiesta. I lotti dei consumabili si riportano nei registri di produzione su richiesta. <a href="../kaynak-yontemleri.html">I nostri processi di saldatura →</a></p></div>
`,
    faq: [
      ['Che differenza c’è tra filo SG2 e SG3?', 'L’SG3 (G4Si1) contiene più manganese e silicio; resistenza leggermente più alta e migliore tolleranza a superfici poco pulite. Entrambi sono comuni in carpenteria.'],
      ['Cosa significa G 42 4 M21 3Si1?', 'Un filo per saldatura a gas con circa 420 MPa di snervamento minimo, 47 J a −40 °C, provato con gas M21, con chimica 3Si1.'],
      ['Qual è il diametro di filo più comune?', '1,2 mm per pezzi medi e spessi; 0,8–1,0 mm per lamiere sottili.'],
      ['4043 o 5356 per l’alluminio?', 'Il 4043 è più fluido e meno soggetto a cricche a caldo; il 5356 dà più resistenza. Dipende da lega e servizio.']
    ],
    cta_h3: 'Il consumabile giusto, una saldatura conforme',
    cta_p: 'Inviateci disegno e dati del materiale; quotiamo con piano di filo, gas e WPS.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Soorten lasdraad: G3Si1 (SG2), G4Si1 (SG3), gevulde draad en meer',
    meta: 'Hoe kies je MIG/MAG-lasdraad? De ISO 14341-classificatie lezen, SG2 of SG3, hoogsterkte-, RVS-, aluminium-, gevulde en OP-draden, diameters, verpakking en opslag.',
    og: 'Soorten lasdraad',
    tag: 'Toevoegmaterialen · MIG/MAG',
    h1: 'Soorten lasdraad: G3Si1 (SG2), G4Si1 (SG3), gevulde draad en meer',
    crumb: 'Soorten lasdraad',
    read: '6 min lezen',
    body: `
<p>De lasdraad bepaalt sterkte, taaiheid en chemie van het lasmetaal. De verkeerde draad geeft, zelfs met de juiste parameters, een las die niet aan de specificatie voldoet. Hier vatten we de belangrijkste draadsoorten voor MIG/MAG, gevulde draad en onder poeder lassen samen, en leggen we de code op het etiket uit.</p>
<h2>MIG/MAG-draden voor koolstofstaal (ISO 14341)</h2>
<p>Het meeste staalconstructiewerk wordt met twee draden gedaan:</p>
<table class="data-table"><thead><tr><th>ISO 14341-A</th><th>Oude DIN-naam</th><th>Nabije AWS A5.18</th><th>Kenmerken</th></tr></thead><tbody>
<tr><td>G3Si1</td><td>SG2</td><td>ER70S-6 (ca.)</td><td>Algemeen gebruik, standaard voor S235–S355</td></tr>
<tr><td>G4Si1</td><td>SG3</td><td>ER70S-6 (ca.)</td><td>Meer Mn en Si; iets hogere sterkte, toleranter voor lichte roest of walshuid</td></tr>
</tbody></table>
<p>Let op: AWS- en ISO-klassen zijn niet identiek; kies volgens het systeem dat de specificatie vraagt.</p>
<h2>Zo lees je de classificatie</h2>
<p>Voorbeeld: <strong>ISO 14341-A G 42 4 M21 3Si1</strong></p>
<ul>
<li><strong>G:</strong> draad en lasmetaal voor booglassen onder beschermgas.</li>
<li><strong>42:</strong> minimale vloeigrens van het lasmetaal ongeveer 420 MPa.</li>
<li><strong>4:</strong> minstens 47 J kerfslagwaarde bij −40 °C.</li>
<li><strong>M21:</strong> gasgroep van de test (argon + 15–25 % CO₂, ISO 14175).</li>
<li><strong>3Si1:</strong> chemisch samenstellingssymbool van de draad.</li>
</ul>
<p>Belangrijk: de mechanische waarden zijn behaald <em>met een bepaald gas</em>. Met 100 % CO₂ kan dezelfde draad andere sterkte en taaiheid geven; daarom legt de WPS gas en draad samen vast (zie <a href="koruyucu-gaz-secimi-mig-mag.html">keuze van het beschermgas</a>).</p>
<h2>Draden voor hogesterktestaal (ISO 16834)</h2>
<p>Bij S460 en hoger moet ook het lasmetaal sterk genoeg zijn. Draden volgens ISO 16834, bijvoorbeeld G 69 of G 89, mikken op vloeigrenzen rond 690 en 890 MPa. Bij deze staalsoorten zijn warmte-inbreng en afkoeltijd net zo belangrijk als de draad (zie <a href="s700mc-kaynagi-isi-girdisi-t8-5.html">S700MC lassen</a>). Voor hoeklassen mag een lagere sterkteklasse worden gebruikt als het ontwerp dat toelaat; dat beslist engineering.</p>
<h2>Gevulde draden (ISO 17632)</h2>
<p>Gevulde draad is een buisje gevuld met poeder. Rutiele draden lassen goed in positie en geven een gladde rups; basische geven betere taaiheid en scheurweerstand; metaalpoederdraden een hoge neersmeltsnelheid met weinig slak. Meer in ons <a href="fcaw-ozlu-tel.html">artikel over gevulde draad</a>.</p>
<h2>RVS-draden (ISO 14343)</h2>
<ul>
<li><strong>308LSi:</strong> voor 304/304L.</li>
<li><strong>316LSi:</strong> voor 316/316L.</li>
<li><strong>309LSi:</strong> RVS–koolstofstaalverbindingen en bufferlagen.</li>
<li><strong>2209:</strong> voor duplex 2205.</li>
</ul>
<p>De “Si”-varianten geven een vloeibaarder smeltbad en betere bevochtiging.</p>
<h2>Aluminiumdraden (ISO 18273)</h2>
<p>De twee meest gebruikte zijn <strong>4043</strong> (AlSi5) en <strong>5356</strong> (AlMg5). 4043 is vloeibaarder en minder gevoelig voor warmscheuren; 5356 geeft een hogere sterkte en een betere kleur na anodiseren. De keuze hangt af van de basislegering en de toepassing (zie <a href="aluminyum-kaynak.html">aluminium lassen</a>).</p>
<h2>Draden voor onder poeder lassen (ISO 14171)</h2>
<p>Bij onder poeder lassen worden draad en poeder als paar geclassificeerd; een S2- of S2Si-draad geeft met een bepaald poeder bepaalde waarden. Een ander poeder kan net als een andere draad een herbeoordeling vragen.</p>
<h2>Diameter en verpakking</h2>
<ul>
<li><strong>0,8 mm:</strong> dunne plaat, lage stroom.</li>
<li><strong>1,0 mm:</strong> dunne en middeldikke delen, positielassen.</li>
<li><strong>1,2 mm:</strong> de meest gebruikte diameter voor middeldikke en dikke delen.</li>
<li><strong>1,6 mm:</strong> hoge neersmelt, zware lassen onder de hand.</li>
</ul>
<p>Draad komt meestal op spoelen van 15–18 kg of, in serieproductie, in vaten van 250 kg en meer. Vaten beperken stilstand voor draadwissels.</p>
<h2>Opslag en traceerbaarheid</h2>
<p>Bewaar draad droog en in gesloten verpakking; gebruik geen roestige of vervuilde draad. Als de specificatie het vraagt, worden het chargenummer en het EN 10204-certificaat van de draad vastgelegd, zodat traceerbaar is met welk toevoegmateriaal elke las is gemaakt (zie <a href="malzeme-sertifikasi-en-10204-3-1.html">materiaalcertificaten</a>).</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> draad en gas kiezen we samen met de WPS, rekening houdend met basismateriaal, dikte, positie en de gevraagde taaiheid. Chargenummers van toevoegmaterialen nemen we op verzoek op in de productieregistratie. <a href="../kaynak-yontemleri.html">Onze lasprocessen →</a></p></div>
`,
    faq: [
      ['Wat is het verschil tussen SG2 en SG3?', 'SG3 (G4Si1) bevat meer mangaan en silicium; iets hogere sterkte en meer tolerantie voor licht vervuilde oppervlakken. Beide zijn gangbaar in staalconstructie.'],
      ['Wat betekent G 42 4 M21 3Si1?', 'Een draad voor gasbooglassen met ongeveer 420 MPa minimale vloeigrens, 47 J bij −40 °C, getest met M21-gas, met 3Si1-chemie.'],
      ['Welke draaddiameter is het meest gebruikelijk?', '1,2 mm voor middeldikke en dikke staaldelen; 0,8–1,0 mm voor dunne plaat.'],
      ['4043 of 5356 voor aluminium?', '4043 is vloeibaarder en minder gevoelig voor warmscheuren; 5356 geeft meer sterkte. Het hangt af van legering en toepassing.']
    ],
    cta_h3: 'Het juiste toevoegmateriaal, een conforme las',
    cta_p: 'Stuur uw tekening en materiaalgegevens; we offreren met draad-, gas- en WPS-plan.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Typer sveisetråd: G3Si1 (SG2), G4Si1 (SG3), rørtråd og mer',
    meta: 'Hvordan velge MIG/MAG-sveisetråd? Les klassifiseringen etter ISO 14341, SG2 eller SG3, tråd for høyfast stål, rustfritt, aluminium, rørtråd og pulverbuesveising, diametre, emballasje og lagring.',
    og: 'Typer sveisetråd',
    tag: 'Tilsettmaterialer · MIG/MAG',
    h1: 'Typer sveisetråd: G3Si1 (SG2), G4Si1 (SG3), rørtråd og mer',
    crumb: 'Typer sveisetråd',
    read: '6 min lesing',
    body: `
<p>Sveisetråden bestemmer styrke, seighet og kjemi i sveisemetallet. Feil tråd gir en sveis som ikke oppfyller spesifikasjonen, selv med riktige parametere. Her oppsummerer vi de viktigste trådtypene for MIG/MAG, rørtråd og pulverbuesveising, og hvordan koden på etiketten leses.</p>
<h2>MIG/MAG-tråd for karbonstål (ISO 14341)</h2>
<p>Det meste av stålkonstruksjonsarbeid gjøres med to tråder:</p>
<table class="data-table"><thead><tr><th>ISO 14341-A</th><th>Gammelt DIN-navn</th><th>Nærmeste AWS A5.18</th><th>Egenskaper</th></tr></thead><tbody>
<tr><td>G3Si1</td><td>SG2</td><td>ER70S-6 (ca.)</td><td>Generelt bruk, standardvalg for S235–S355</td></tr>
<tr><td>G4Si1</td><td>SG3</td><td>ER70S-6 (ca.)</td><td>Mer Mn og Si; litt høyere styrke, mer tolerant for lett rust eller valsehud</td></tr>
</tbody></table>
<p>Merk: AWS- og ISO-klasser er ikke identiske; velg etter systemet spesifikasjonen krever.</p>
<h2>Slik leses klassifiseringen</h2>
<p>Eksempel: <strong>ISO 14341-A G 42 4 M21 3Si1</strong></p>
<ul>
<li><strong>G:</strong> tråd og sveisemetall for gassbeskyttet sveising.</li>
<li><strong>42:</strong> minste flytegrense i sveisemetallet ca. 420 MPa.</li>
<li><strong>4:</strong> minst 47 J slagseighet ved −40 °C.</li>
<li><strong>M21:</strong> gassgruppen brukt i testen (argon + 15–25 % CO₂, ISO 14175).</li>
<li><strong>3Si1:</strong> symbol for trådens kjemiske sammensetning.</li>
</ul>
<p>Det viktige: de mekaniske verdiene er oppnådd <em>med en bestemt gass</em>. Med 100 % CO₂ kan samme tråd gi annen styrke og seighet; derfor definerer WPS-en gass og tråd sammen (se <a href="koruyucu-gaz-secimi-mig-mag.html">valg av beskyttelsesgass</a>).</p>
<h2>Tråd for høyfast stål (ISO 16834)</h2>
<p>På S460 og høyere må også sveisemetallet være sterkt nok. Tråder etter ISO 16834, for eksempel G 69 eller G 89, sikter mot flytegrenser rundt 690 og 890 MPa. For disse stålene betyr varmetilførsel og avkjølingstid like mye som tråden (se <a href="s700mc-kaynagi-isi-girdisi-t8-5.html">sveising av S700MC</a>). For kilsveiser kan en lavere styrkeklasse brukes hvis konstruksjonen tillater det; den avgjørelsen tas av prosjekteringen.</p>
<h2>Rørtråd (ISO 17632)</h2>
<p>Rørtråd er et rør fylt med pulver. Rutile rørtråder sveiser godt i stilling og gir en jevn sveiselarve; basiske gir bedre seighet og sprekkmotstand; metallpulvertråder gir høy avsettingshastighet med lite slagg. Mer i vår <a href="fcaw-ozlu-tel.html">artikkel om rørtråd</a>.</p>
<h2>Tråd for rustfritt (ISO 14343)</h2>
<ul>
<li><strong>308LSi:</strong> for 304/304L.</li>
<li><strong>316LSi:</strong> for 316/316L.</li>
<li><strong>309LSi:</strong> rustfritt–karbonstål-forbindelser og bufferlag.</li>
<li><strong>2209:</strong> for dupleks 2205.</li>
</ul>
<p>“Si”-variantene gir et mer flytende smeltebad og bedre fukting.</p>
<h2>Aluminiumstråd (ISO 18273)</h2>
<p>De to vanligste er <strong>4043</strong> (AlSi5) og <strong>5356</strong> (AlMg5). 4043 er mer flytende og mindre utsatt for varmsprekker; 5356 gir høyere styrke og bedre fargematch etter anodisering. Valget avhenger av grunnlegeringen og bruken (se <a href="aluminyum-kaynak.html">sveising av aluminium</a>).</p>
<h2>Tråd for pulverbuesveising (ISO 14171)</h2>
<p>Ved pulverbuesveising klassifiseres tråd og pulver som et par; en S2- eller S2Si-tråd gir bestemte verdier med et bestemt pulver. Å bytte pulver kan kreve ny vurdering, akkurat som å bytte tråd.</p>
<h2>Diameter og emballasje</h2>
<ul>
<li><strong>0,8 mm:</strong> tynnplate, lav strøm.</li>
<li><strong>1,0 mm:</strong> tynne og middels tykkelser, stillingssveising.</li>
<li><strong>1,2 mm:</strong> den vanligste diameteren for middels og tykke deler.</li>
<li><strong>1,6 mm:</strong> høy avsetting, tykke sveiser i horisontal stilling.</li>
</ul>
<p>Tråd leveres vanligvis på spoler à 15–18 kg eller, i serieproduksjon, på fat fra 250 kg og oppover. Fat reduserer stopp for trådbytte.</p>
<h2>Lagring og sporbarhet</h2>
<p>Tråd skal lagres tørt og i lukket emballasje; rusten eller forurenset tråd skal ikke brukes. Når spesifikasjonen krever det, registreres trådens chargenummer og EN 10204-sertifikat, slik at det er sporbart hvilket tilsett hver sveis er laget med (se <a href="malzeme-sertifikasi-en-10204-3-1.html">materialsertifikater</a>).</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> tråd og gass velges sammen med WPS-en, med tanke på grunnmateriale, tykkelse, stilling og kravet til seighet. Chargenumre for tilsett føres i produksjonsregistrene på forespørsel. <a href="../kaynak-yontemleri.html">Våre sveisemetoder →</a></p></div>
`,
    faq: [
      ['Hva er forskjellen på SG2 og SG3?', 'SG3 (G4Si1) inneholder mer mangan og silisium; litt høyere styrke og bedre toleranse for lett forurensede overflater. Begge er vanlige i stålkonstruksjoner.'],
      ['Hva betyr G 42 4 M21 3Si1?', 'En tråd for gassbeskyttet sveising med ca. 420 MPa minste flytegrense, 47 J ved −40 °C, testet med M21-gass, med 3Si1-kjemi.'],
      ['Hvilken tråddiameter er vanligst?', '1,2 mm for middels og tykke ståldeler; 0,8–1,0 mm for tynnplate.'],
      ['4043 eller 5356 for aluminium?', '4043 er mer flytende og mindre utsatt for varmsprekker; 5356 gir høyere styrke. Det avhenger av legering og bruk.']
    ],
    cta_h3: 'Riktig tilsett, en sveis som oppfyller kravene',
    cta_p: 'Send tegning og materialdata; vi gir tilbud med plan for tråd, gass og WPS.',
    cta_btn: 'Be om tilbud →'
  }
};
