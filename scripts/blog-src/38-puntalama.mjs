export default {
  order: 38,
  slug: 'puntalama-kaynagi-punta-boyu-araligi',
  key: 'p38_tack',
  date: '2026-11-16',
  keywords: 'puntalama, punta kaynağı, punta boyu, punta aralığı, puntalama sırası, geçici bağlantı, köprü punta, EN 1090-2 punta, tack welding, Heftschweißen, pointage soudure',
  related: ['kaynak-distorsiyonu', 'on-isitma-hesaplama', 'kaynak-agzi-hazirligi-iso-9692-1', 'en-1090-exc2-nedir'],
  tr: {
    title: 'Puntalama: Punta Boyu, Aralığı ve Sırası Kaynak Kalitesini Nasıl Etkiler?',
    meta: 'Puntalama neden kaynağın kendisi kadar önemlidir? Punta boyu ve aralığı, EN 1090-2’nin punta kuralları, ön ısıtma, kalıcı puntaların hazırlanması, puntalama sırası, köprü puntalar ve geçici bağlantıların sökülmesi.',
    og: 'Puntalama Kuralları',
    tag: 'Üretim · Puntalama',
    h1: 'Puntalama: Punta Boyu, Aralığı ve Sırası Kaynak Kalitesini Nasıl Etkiler?',
    crumb: 'Puntalama',
    read: '6 dk okuma',
    body: `
<p>Puntalama, parçaları kaynak öncesinde doğru konumda tutmak için atılan kısa kaynaklardır. Çoğu zaman “ön hazırlık” olarak görülür; oysa puntaların büyük kısmı son kaynağın içinde kalır ve onun bir parçası olur. Kötü atılmış bir punta, ergime yetersizliği, çatlak veya çarpılma olarak son dikişe taşınır.</p>
<h2>Puntanın Görevleri</h2>
<ul>
<li>Parçaları çizimdeki konum ve aralıkta sabitlemek.</li>
<li>Kök aralığını ve kaynak ağzı geometrisini korumak (bkz. <a href="kaynak-agzi-hazirligi-iso-9692-1.html">kaynak ağzı hazırlığı</a>).</li>
<li>Kaynak sırasında çekmeye karşı direnç göstererek çarpılmayı sınırlamak.</li>
<li>Parçanın fikstürden çıkarılıp pozisyonlayıcıda kaynatılabilmesini sağlamak.</li>
</ul>
<h2>Punta da Bir Kaynaktır</h2>
<p>Son kaynağa dahil olacak puntalar için şu kural geçerlidir: punta, kaynağın kendisiyle aynı şartları sağlamalıdır. Bunun anlamı:</p>
<ul>
<li>Uygun bir WPS ile yapılması,</li>
<li>Nitelikli bir kaynakçı veya operatör tarafından atılması,</li>
<li>Ön ısıtma gerekiyorsa punta için de uygulanması,</li>
<li>Kaynak metalinin ve sarfın aynı veya uyumlu olması.</li>
</ul>
<p>Kalın veya yüksek mukavemetli çeliklerde ön ısıtmasız atılan kısa puntalar, hızlı soğuyarak sertleşir ve çatlayabilir. Kısa ve küçük kesitli bir punta, aynı malzemedeki uzun bir dikişe göre çok daha hızlı soğur; bu nedenle punta için ön ısıtma çoğu zaman en az ana kaynak kadar önemlidir (bkz. <a href="on-isitma-hesaplama.html">ön ısıtma hesabı</a>).</p>
<h2>Punta Boyu</h2>
<p>EN 1090-2, son kaynağa dahil olan puntalar için minimum bir uzunluk tanımlar: kalın parçanın kalınlığının dört katı veya 50 mm’den küçük olanı. Daha kısa bir punta ancak deneyle yeterli olduğu gösterilirse kabul edilir. Örneğin 10 mm’lik levhada punta en az 40 mm, 20 mm’lik levhada ise en az 50 mm olmalıdır.</p>
<h2>Punta Aralığı</h2>
<p>Aralık; malzeme kalınlığına, parça boyuna, kaynak yöntemine ve çarpılma eğilimine göre belirlenir. Genel bir yaklaşım olarak ince saclarda puntalar daha sık, kalın parçalarda daha seyrek atılır. Çok seyrek puntalama kaynak sırasında aralığın kapanmasına veya açılmasına yol açar; çok sık puntalama ise iş yükünü ve kusur riskini artırır. Seri işlerde punta yerleri ve sayısı fikstür ile birlikte standartlaştırılır.</p>
<h2>Puntalama Sırası</h2>
<ul>
<li>Uzun dikişlerde önce iki uç, sonra orta, ardından aradaki noktalar puntalanır; böylece parça bir yöne kaymaz.</li>
<li>Simetrik parçalarda karşılıklı taraflar dönüşümlü puntalanır.</li>
<li>Önce kritik ölçüler (delik ekseni, bağlantı noktaları) sabitlenir, sonra diğerleri.</li>
</ul>
<h2>Kalıcı Puntaların Hazırlanması</h2>
<ul>
<li>Puntalar cüruf ve sıçrantıdan temizlenir.</li>
<li>Çatlak, gözenek veya ergime yetersizliği olan puntalar kaynaktan önce kaldırılır.</li>
<li>Punta uçları, son kaynağın düzgün bağlanması için gerektiğinde taşlanarak inceltilir.</li>
<li>Kökte bırakılan puntalar, kök pasoyla tam ergiyecek şekilde boyutlandırılır.</li>
</ul>
<h2>Köprü Puntalar ve Geçici Bağlantılar</h2>
<p>Bazen aralığı korumak için kaynak ağzının dışından köprü parçalar veya geçici kulaklar kaynatılır. Bunlar da kaynaktır ve aynı dikkati gerektirir. Sökülürken ana malzemeye zarar verilmemeli, kalan iz taşlanarak düzeltilmeli ve gerektiğinde manyetik parçacık veya penetrant muayenesiyle çatlak olmadığı doğrulanmalıdır. Yüksek mukavemetli çeliklerde geçici bağlantıların yeri ve sökümü özellikle kontrol altında tutulur.</p>
<h2>Sık Görülen Hatalar</h2>
<ul>
<li>Ön ısıtma gereken bir işte puntaların soğuk parçaya atılması.</li>
<li>Punta üzerinden ergitmeden geçilmesi; dikişin içinde ergime yetersizliği kalması.</li>
<li>Çatlak bir puntanın üzerine kaynak yapılması.</li>
<li>Puntaların kaynak dışında, ana malzemeye gelişigüzel atılması ve ark izleri bırakılması.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Puntalar, son kaynakla aynı WPS ve ön ısıtma şartlarıyla, nitelikli kaynakçılar tarafından atılır. Seri işlerde punta yerleri fikstürle birlikte tanımlanır, geçici bağlantıların sökümü kontrol edilir. <a href="../kalite.html">Kalite yaklaşımımız →</a></p></div>
`,
    faq: [
      ['Punta boyu ne kadar olmalı?', 'EN 1090-2’ye göre son kaynağa dahil olan puntalar, kalın parçanın kalınlığının dört katı veya 50 mm’den küçük olanından kısa olmamalıdır; daha kısası ancak deneyle gösterilirse kabul edilir.'],
      ['Puntada ön ısıtma gerekir mi?', 'Ana kaynakta ön ısıtma gerekiyorsa evet. Kısa puntalar hızlı soğuduğu için sertleşme ve çatlak riski daha da yüksektir.'],
      ['Puntalama sırası nasıl olmalı?', 'Uzun dikişlerde önce iki uç, sonra orta ve aradaki noktalar; simetrik parçalarda karşılıklı taraflar dönüşümlü puntalanır.'],
      ['Çatlak punta ne yapılmalı?', 'Kaynaktan önce tamamen kaldırılmalı ve yeniden atılmalıdır; üzerine kaynak yapılması çatlağı son dikişe taşır.']
    ],
    cta_h3: 'İlk puntadan son pasoya kontrollü imalat',
    cta_p: 'Çizim ve adet bilginizi gönderin; kaynak ve kalite planıyla teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Tack Welding: How Tack Length, Spacing and Sequence Affect Weld Quality',
    meta: 'Why does tack welding matter as much as the weld itself? Tack length and spacing, EN 1090-2 rules for tacks, preheat, preparing incorporated tacks, tacking sequence, bridge tacks and removing temporary attachments.',
    og: 'Tack Welding Rules',
    tag: 'Production · Tack Welding',
    h1: 'Tack Welding: How Tack Length, Spacing and Sequence Affect Weld Quality',
    crumb: 'Tack Welding',
    read: '6 min read',
    body: `
<p>Tack welds are short welds that hold parts in position before welding. They are often treated as “preparation”, yet most tacks remain inside the final weld and become part of it. A poorly made tack carries through into the final weld as lack of fusion, cracking or distortion.</p>
<h2>What Tacks Do</h2>
<ul>
<li>Fix parts at the position and gap shown on the drawing.</li>
<li>Maintain root gap and joint geometry (see <a href="kaynak-agzi-hazirligi-iso-9692-1.html">joint preparation</a>).</li>
<li>Resist shrinkage during welding and limit distortion.</li>
<li>Allow the part to be removed from the fixture and welded on a positioner.</li>
</ul>
<h2>A Tack Is a Weld</h2>
<p>For tacks that will be incorporated into the final weld, the rule is simple: the tack must meet the same conditions as the weld itself. That means:</p>
<ul>
<li>made to a suitable WPS,</li>
<li>by a qualified welder or operator,</li>
<li>with preheat applied to the tack if preheat is required,</li>
<li>with the same or compatible consumable.</li>
</ul>
<p>On thick or high-strength steels, short tacks made without preheat cool fast, harden and can crack. A short, small tack cools much faster than a long weld in the same material, so preheat for tacking is often at least as important as for the main weld (see <a href="on-isitma-hesaplama.html">preheat calculation</a>).</p>
<h2>Tack Length</h2>
<p>EN 1090-2 sets a minimum length for tacks incorporated in the final weld: the lesser of four times the thickness of the thicker part or 50 mm. A shorter tack is accepted only if shown to be satisfactory by test. For example, on 10 mm plate a tack should be at least 40 mm, and on 20 mm plate at least 50 mm.</p>
<h2>Tack Spacing</h2>
<p>Spacing depends on material thickness, part length, welding process and distortion tendency. As a general approach, tacks are closer together on thin sheet and further apart on thick parts. Too few tacks let the gap close or open during welding; too many add work and defect risk. In series work, tack positions and number are standardised together with the fixture.</p>
<h2>Tacking Sequence</h2>
<ul>
<li>On long joints, tack both ends first, then the middle, then the points in between, so the part does not creep in one direction.</li>
<li>On symmetrical parts, tack opposite sides alternately.</li>
<li>Fix critical dimensions (hole axes, connection points) first, then the rest.</li>
</ul>
<h2>Preparing Incorporated Tacks</h2>
<ul>
<li>Clean tacks of slag and spatter.</li>
<li>Remove tacks with cracks, porosity or lack of fusion before welding.</li>
<li>Where needed, grind tack ends to a taper so the final weld ties in smoothly.</li>
<li>Size tacks left in the root so they fuse completely with the root pass.</li>
</ul>
<h2>Bridge Tacks and Temporary Attachments</h2>
<p>Bridging pieces or temporary lugs are sometimes welded outside the joint to hold the gap. These are welds too and need the same care. When removed, the parent metal must not be damaged, the remaining mark must be ground smooth and, where required, magnetic particle or penetrant testing confirms there are no cracks. On high-strength steels the location and removal of temporary attachments are kept under particular control.</p>
<h2>Common Mistakes</h2>
<ul>
<li>Tacking a cold part on a job that requires preheat.</li>
<li>Welding over a tack without fusing it, leaving lack of fusion inside the weld.</li>
<li>Welding over a cracked tack.</li>
<li>Placing tacks randomly outside the joint on the parent metal, leaving arc strikes.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> tacks are made by qualified welders to the same WPS and preheat conditions as the final weld. In series work, tack positions are defined together with the fixture and removal of temporary attachments is checked. <a href="../kalite.html">Our approach to quality →</a></p></div>
`,
    faq: [
      ['How long should a tack weld be?', 'Under EN 1090-2, tacks incorporated in the final weld should be no shorter than the lesser of four times the thickness of the thicker part or 50 mm; shorter only if proven by test.'],
      ['Do tack welds need preheat?', 'Yes, if the main weld requires preheat. Short tacks cool fast, so the risk of hardening and cracking is even higher.'],
      ['What is the right tacking sequence?', 'On long joints, both ends first, then the middle and the points between; on symmetrical parts, opposite sides alternately.'],
      ['What should be done with a cracked tack?', 'Remove it completely and re-tack before welding; welding over it carries the crack into the final weld.']
    ],
    cta_h3: 'Controlled fabrication from the first tack to the last pass',
    cta_p: 'Send your drawing and quantity; we will quote with a welding and quality plan.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Heftschweißen: Wie Heftlänge, -abstand und -folge die Nahtqualität beeinflussen',
    meta: 'Warum ist Heften so wichtig wie das Schweißen selbst? Heftlänge und -abstand, Regeln der EN 1090-2, Vorwärmen, Vorbereitung verbleibender Heftnähte, Heftfolge, Brückenhefte und Entfernen von Hilfsteilen.',
    og: 'Regeln für das Heftschweißen',
    tag: 'Fertigung · Heften',
    h1: 'Heftschweißen: Wie Heftlänge, -abstand und -folge die Nahtqualität beeinflussen',
    crumb: 'Heftschweißen',
    read: '6 Min. Lesezeit',
    body: `
<p>Heftnähte sind kurze Schweißungen, die die Teile vor dem Schweißen in Position halten. Sie gelten oft als „Vorarbeit“, doch die meisten verbleiben in der Endnaht und werden Teil davon. Eine schlechte Heftnaht setzt sich als Bindefehler, Riss oder Verzug in der fertigen Naht fort.</p>
<h2>Aufgaben der Heftnaht</h2>
<ul>
<li>Teile in Lage und Spalt gemäß Zeichnung fixieren.</li>
<li>Wurzelspalt und Fugengeometrie halten (siehe <a href="kaynak-agzi-hazirligi-iso-9692-1.html">Nahtvorbereitung</a>).</li>
<li>Der Schrumpfung beim Schweißen widerstehen und Verzug begrenzen.</li>
<li>Das Herausnehmen aus der Vorrichtung und Schweißen auf dem Positionierer ermöglichen.</li>
</ul>
<h2>Heften ist Schweißen</h2>
<p>Für Heftnähte, die in die Endnaht eingeschweißt werden, gilt: Sie müssen dieselben Bedingungen erfüllen wie die Naht selbst, also:</p>
<ul>
<li>nach geeigneter WPS,</li>
<li>durch qualifizierte Schweißer oder Bediener,</li>
<li>mit Vorwärmung, wenn diese gefordert ist,</li>
<li>mit gleichem oder verträglichem Zusatz.</li>
</ul>
<p>Bei dicken oder hochfesten Stählen kühlen kurze Heftnähte ohne Vorwärmung schnell ab, härten auf und können reißen. Eine kurze, kleine Heftnaht kühlt deutlich schneller ab als eine lange Naht im selben Werkstoff; deshalb ist das Vorwärmen beim Heften oft mindestens so wichtig wie bei der Hauptnaht (siehe <a href="on-isitma-hesaplama.html">Vorwärmberechnung</a>).</p>
<h2>Heftlänge</h2>
<p>EN 1090-2 legt für eingeschweißte Heftnähte eine Mindestlänge fest: der kleinere Wert aus dem Vierfachen der Dicke des dickeren Teils oder 50 mm. Kürzere Hefte sind nur zulässig, wenn ihre Eignung durch Versuch nachgewiesen ist. Beispiel: bei 10 mm Blech mindestens 40 mm, bei 20 mm mindestens 50 mm.</p>
<h2>Heftabstand</h2>
<p>Der Abstand richtet sich nach Werkstoffdicke, Bauteillänge, Schweißverfahren und Verzugsneigung. Allgemein wird bei Dünnblech enger, bei dicken Teilen weiter geheftet. Zu wenige Hefte lassen den Spalt beim Schweißen zu- oder aufgehen; zu viele erhöhen Aufwand und Fehlerrisiko. In der Serie werden Lage und Anzahl der Hefte mit der Vorrichtung standardisiert.</p>
<h2>Heftfolge</h2>
<ul>
<li>Bei langen Nähten zuerst beide Enden, dann die Mitte, dann die Zwischenpunkte, damit das Teil nicht in eine Richtung wandert.</li>
<li>Bei symmetrischen Teilen gegenüberliegende Seiten abwechselnd heften.</li>
<li>Zuerst kritische Maße (Bohrungsachsen, Anschlusspunkte) fixieren, dann den Rest.</li>
</ul>
<h2>Vorbereitung verbleibender Hefte</h2>
<ul>
<li>Schlacke und Spritzer entfernen.</li>
<li>Hefte mit Rissen, Poren oder Bindefehlern vor dem Schweißen entfernen.</li>
<li>Heftenden bei Bedarf anschleifen, damit die Endnaht sauber einbindet.</li>
<li>Wurzelhefte so bemessen, dass sie mit der Wurzellage vollständig aufgeschmolzen werden.</li>
</ul>
<h2>Brückenhefte und Hilfsteile</h2>
<p>Manchmal werden außerhalb der Fuge Brücken oder Hilfslaschen angeschweißt, um den Spalt zu halten. Auch das sind Schweißungen mit denselben Anforderungen. Beim Entfernen darf der Grundwerkstoff nicht beschädigt werden, Reste werden verschliffen und bei Bedarf per Magnetpulver- oder Eindringprüfung auf Risse geprüft. Bei hochfesten Stählen werden Lage und Entfernung von Hilfsteilen besonders überwacht.</p>
<h2>Häufige Fehler</h2>
<ul>
<li>Heften auf kaltes Material, obwohl Vorwärmen gefordert ist.</li>
<li>Überschweißen von Heften ohne Aufschmelzen; Bindefehler bleiben in der Naht.</li>
<li>Schweißen über eine gerissene Heftnaht.</li>
<li>Willkürliche Hefte und Zündstellen außerhalb der Fuge auf dem Grundwerkstoff.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Heftnähte werden von qualifizierten Schweißern nach derselben WPS und mit denselben Vorwärmbedingungen wie die Endnaht ausgeführt. In der Serie sind Heftpositionen mit der Vorrichtung festgelegt, das Entfernen von Hilfsteilen wird geprüft. <a href="../kalite.html">Unser Qualitätsansatz →</a></p></div>
`,
    faq: [
      ['Wie lang muss eine Heftnaht sein?', 'Nach EN 1090-2 nicht kürzer als der kleinere Wert aus dem Vierfachen der Dicke des dickeren Teils oder 50 mm; kürzer nur mit Nachweis durch Versuch.'],
      ['Muss beim Heften vorgewärmt werden?', 'Ja, wenn die Hauptnaht Vorwärmen erfordert. Kurze Hefte kühlen schnell, das Aufhärtungs- und Rissrisiko ist sogar höher.'],
      ['Welche Heftfolge ist richtig?', 'Bei langen Nähten zuerst beide Enden, dann Mitte und Zwischenpunkte; bei symmetrischen Teilen gegenüberliegende Seiten abwechselnd.'],
      ['Was tun mit einer gerissenen Heftnaht?', 'Vollständig entfernen und neu heften; Überschweißen überträgt den Riss in die Endnaht.']
    ],
    cta_h3: 'Kontrollierte Fertigung vom ersten Heft bis zur letzten Lage',
    cta_p: 'Senden Sie Zeichnung und Stückzahl; wir bieten mit Schweiß- und Qualitätsplan an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Punteado: cómo influyen la longitud, la separación y la secuencia en la calidad',
    meta: '¿Por qué el punteado importa tanto como la soldadura? Longitud y separación de los puntos, reglas de la EN 1090-2, precalentamiento, preparación de los puntos que quedan, secuencia, puntos puente y retirada de elementos provisionales.',
    og: 'Reglas del punteado',
    tag: 'Producción · Punteado',
    h1: 'Punteado: cómo influyen la longitud, la separación y la secuencia en la calidad',
    crumb: 'Punteado',
    read: '6 min de lectura',
    body: `
<p>Los puntos de soldadura son cordones cortos que mantienen las piezas en posición antes de soldar. Suelen verse como “preparación”, pero la mayoría queda dentro de la soldadura final y forma parte de ella. Un punto mal hecho se traslada al cordón final como falta de fusión, fisura o deformación.</p>
<h2>Funciones del punteado</h2>
<ul>
<li>Fijar las piezas en la posición y separación del plano.</li>
<li>Mantener la separación de raíz y la geometría de la junta (ver <a href="kaynak-agzi-hazirligi-iso-9692-1.html">preparación de bordes</a>).</li>
<li>Resistir la contracción durante la soldadura y limitar la deformación.</li>
<li>Permitir sacar la pieza del utillaje y soldarla en un posicionador.</li>
</ul>
<h2>Un punto es una soldadura</h2>
<p>Para los puntos que quedarán incorporados en la soldadura final, la regla es clara: deben cumplir las mismas condiciones que la soldadura. Es decir:</p>
<ul>
<li>hechos con una WPS adecuada,</li>
<li>por un soldador u operador cualificado,</li>
<li>con precalentamiento si este se exige,</li>
<li>con el mismo consumible o uno compatible.</li>
</ul>
<p>En aceros gruesos o de alta resistencia, los puntos cortos sin precalentar se enfrían deprisa, se endurecen y pueden fisurarse. Un punto corto y pequeño se enfría mucho más rápido que un cordón largo en el mismo material, por lo que el precalentamiento al puntear es a menudo tan importante como en la soldadura principal (ver <a href="on-isitma-hesaplama.html">cálculo del precalentamiento</a>).</p>
<h2>Longitud del punto</h2>
<p>La EN 1090-2 fija una longitud mínima para los puntos incorporados en la soldadura final: el menor valor entre cuatro veces el espesor de la pieza más gruesa y 50 mm. Uno más corto solo se acepta si se demuestra adecuado mediante ensayo. Por ejemplo, en chapa de 10 mm el punto debe tener al menos 40 mm; en chapa de 20 mm, al menos 50 mm.</p>
<h2>Separación entre puntos</h2>
<p>Depende del espesor, la longitud de la pieza, el proceso y la tendencia a deformarse. En general, en chapa fina se puntea más junto y en piezas gruesas más espaciado. Pocos puntos dejan que la separación se cierre o abra al soldar; demasiados aumentan el trabajo y el riesgo de defectos. En serie, la posición y el número de puntos se estandarizan junto con el utillaje.</p>
<h2>Secuencia de punteado</h2>
<ul>
<li>En juntas largas, primero ambos extremos, luego el centro y después los puntos intermedios, para que la pieza no se desplace.</li>
<li>En piezas simétricas, alternar lados opuestos.</li>
<li>Fijar primero las medidas críticas (ejes de taladros, puntos de unión) y luego el resto.</li>
</ul>
<h2>Preparación de los puntos que quedan</h2>
<ul>
<li>Limpiar escoria y proyecciones.</li>
<li>Eliminar antes de soldar los puntos con fisuras, poros o falta de fusión.</li>
<li>Amolar los extremos en bisel si es necesario para que el cordón final enlace bien.</li>
<li>Dimensionar los puntos de raíz para que se fundan por completo con la pasada de raíz.</li>
</ul>
<h2>Puntos puente y elementos provisionales</h2>
<p>A veces se sueldan puentes u orejetas provisionales fuera de la junta para mantener la separación. También son soldaduras y requieren el mismo cuidado. Al retirarlos no debe dañarse el metal base; la marca se amola y, si se exige, se comprueba con partículas magnéticas o líquidos penetrantes que no hay fisuras. En aceros de alta resistencia, la ubicación y retirada de estos elementos se controla especialmente.</p>
<h2>Errores frecuentes</h2>
<ul>
<li>Puntear en frío un trabajo que exige precalentamiento.</li>
<li>Pasar sobre un punto sin fundirlo, dejando falta de fusión dentro del cordón.</li>
<li>Soldar encima de un punto fisurado.</li>
<li>Puntear al azar sobre el metal base fuera de la junta, dejando cebados.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> los puntos los realizan soldadores cualificados con la misma WPS y las mismas condiciones de precalentamiento que la soldadura final. En serie, las posiciones de punteado se definen con el utillaje y se controla la retirada de elementos provisionales. <a href="../kalite.html">Nuestro enfoque de calidad →</a></p></div>
`,
    faq: [
      ['¿Qué longitud debe tener un punto?', 'Según la EN 1090-2, los puntos incorporados no deben ser más cortos que el menor valor entre cuatro veces el espesor de la pieza más gruesa y 50 mm; más cortos solo con ensayo.'],
      ['¿Hay que precalentar para puntear?', 'Sí, si la soldadura principal lo exige. Los puntos cortos se enfrían rápido y el riesgo de endurecimiento y fisura es aún mayor.'],
      ['¿Cuál es la secuencia correcta?', 'En juntas largas, primero los extremos, luego el centro y los intermedios; en piezas simétricas, lados opuestos alternos.'],
      ['¿Qué hacer con un punto fisurado?', 'Eliminarlo por completo y volver a puntear; soldar encima traslada la fisura al cordón final.']
    ],
    cta_h3: 'Fabricación controlada del primer punto a la última pasada',
    cta_p: 'Envíenos plano y cantidad; ofertamos con plan de soldadura y calidad.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Pointage : comment longueur, espacement et séquence influencent la qualité',
    meta: 'Pourquoi le pointage compte-t-il autant que la soudure ? Longueur et espacement des points, règles de l’EN 1090-2, préchauffage, préparation des points conservés, séquence, points de pontage et retrait des attaches provisoires.',
    og: 'Règles du pointage',
    tag: 'Production · Pointage',
    h1: 'Pointage : comment longueur, espacement et séquence influencent la qualité',
    crumb: 'Pointage',
    read: '6 min de lecture',
    body: `
<p>Les points de soudure sont de courtes soudures qui maintiennent les pièces en position avant soudage. On les considère souvent comme une « préparation », alors que la plupart restent dans la soudure finale et en font partie. Un point mal exécuté se retrouve dans le cordon final sous forme de manque de fusion, de fissure ou de déformation.</p>
<h2>Rôle du pointage</h2>
<ul>
<li>Fixer les pièces à la position et à l’écartement du plan.</li>
<li>Maintenir l’écartement à la racine et la géométrie du chanfrein (voir <a href="kaynak-agzi-hazirligi-iso-9692-1.html">préparation des bords</a>).</li>
<li>Résister au retrait pendant le soudage et limiter les déformations.</li>
<li>Permettre de sortir la pièce du gabarit pour la souder sur un positionneur.</li>
</ul>
<h2>Un point est une soudure</h2>
<p>Pour les points incorporés dans la soudure finale, la règle est simple : ils doivent satisfaire aux mêmes conditions que la soudure elle-même, c’est-à-dire :</p>
<ul>
<li>réalisés selon un DMOS adapté,</li>
<li>par un soudeur ou opérateur qualifié,</li>
<li>avec préchauffage si celui-ci est requis,</li>
<li>avec un consommable identique ou compatible.</li>
</ul>
<p>Sur les aciers épais ou à haute résistance, des points courts sans préchauffage refroidissent vite, durcissent et peuvent fissurer. Un point court et petit refroidit bien plus vite qu’une longue soudure dans le même matériau ; le préchauffage au pointage est donc souvent au moins aussi important que pour la soudure principale (voir <a href="on-isitma-hesaplama.html">calcul du préchauffage</a>).</p>
<h2>Longueur des points</h2>
<p>L’EN 1090-2 fixe une longueur minimale pour les points incorporés : la plus petite valeur entre quatre fois l’épaisseur de la pièce la plus épaisse et 50 mm. Un point plus court n’est admis que s’il est validé par essai. Par exemple, sur une tôle de 10 mm, au moins 40 mm ; sur 20 mm, au moins 50 mm.</p>
<h2>Espacement</h2>
<p>Il dépend de l’épaisseur, de la longueur de la pièce, du procédé et de la tendance à la déformation. En règle générale, on pointe plus serré sur tôle fine et plus espacé sur pièces épaisses. Trop peu de points laissent l’écartement se refermer ou s’ouvrir au soudage ; trop de points augmentent le travail et le risque de défauts. En série, position et nombre de points sont standardisés avec le gabarit.</p>
<h2>Séquence de pointage</h2>
<ul>
<li>Sur les joints longs, pointer d’abord les deux extrémités, puis le milieu, puis les points intermédiaires, pour que la pièce ne glisse pas.</li>
<li>Sur les pièces symétriques, alterner les côtés opposés.</li>
<li>Fixer d’abord les cotes critiques (axes de perçage, points de liaison), puis le reste.</li>
</ul>
<h2>Préparer les points conservés</h2>
<ul>
<li>Éliminer laitier et projections.</li>
<li>Supprimer avant soudage les points fissurés, poreux ou mal fondus.</li>
<li>Meuler en biseau les extrémités si nécessaire pour une bonne reprise du cordon final.</li>
<li>Dimensionner les points de racine pour qu’ils soient entièrement refondus par la passe de racine.</li>
</ul>
<h2>Points de pontage et attaches provisoires</h2>
<p>On soude parfois des ponts ou des oreilles provisoires hors du joint pour tenir l’écartement. Ce sont aussi des soudures, à traiter avec le même soin. À leur retrait, le métal de base ne doit pas être endommagé, la trace est meulée et, si exigé, un contrôle par magnétoscopie ou ressuage confirme l’absence de fissure. Sur les aciers à haute résistance, l’emplacement et le retrait de ces attaches font l’objet d’un contrôle particulier.</p>
<h2>Erreurs fréquentes</h2>
<ul>
<li>Pointer à froid un travail qui exige un préchauffage.</li>
<li>Passer sur un point sans le refondre, laissant un manque de fusion dans le cordon.</li>
<li>Souder sur un point fissuré.</li>
<li>Pointer au hasard sur le métal de base hors du joint, en laissant des coups d’arc.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> les points sont réalisés par des soudeurs qualifiés, selon le même DMOS et les mêmes conditions de préchauffage que la soudure finale. En série, les positions de pointage sont définies avec le gabarit et le retrait des attaches provisoires est contrôlé. <a href="../kalite.html">Notre approche qualité →</a></p></div>
`,
    faq: [
      ['Quelle longueur pour un point de soudure ?', 'Selon l’EN 1090-2, les points incorporés ne doivent pas être plus courts que la plus petite valeur entre quatre fois l’épaisseur la plus forte et 50 mm ; plus courts uniquement avec essai.'],
      ['Faut-il préchauffer pour pointer ?', 'Oui, si la soudure principale l’exige. Les points courts refroidissent vite, le risque de durcissement et de fissure est même plus élevé.'],
      ['Quelle séquence de pointage ?', 'Sur les joints longs, d’abord les deux extrémités, puis le milieu et les points intermédiaires ; sur pièces symétriques, côtés opposés en alternance.'],
      ['Que faire d’un point fissuré ?', 'Le supprimer entièrement et repointer ; souder dessus transfère la fissure dans le cordon final.']
    ],
    cta_h3: 'Une fabrication maîtrisée du premier point à la dernière passe',
    cta_p: 'Envoyez votre plan et les quantités ; nous chiffrons avec un plan de soudage et de qualité.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Puntatura: come lunghezza, passo e sequenza dei punti influiscono sulla qualità',
    meta: 'Perché la puntatura conta quanto la saldatura? Lunghezza e passo dei punti, regole della EN 1090-2, preriscaldo, preparazione dei punti che restano, sequenza, punti a ponte e rimozione degli attacchi provvisori.',
    og: 'Regole della puntatura',
    tag: 'Produzione · Puntatura',
    h1: 'Puntatura: come lunghezza, passo e sequenza dei punti influiscono sulla qualità',
    crumb: 'Puntatura',
    read: '6 min di lettura',
    body: `
<p>I punti di saldatura sono cordoni brevi che tengono i pezzi in posizione prima della saldatura. Spesso sono visti come “preparazione”, ma la maggior parte resta dentro la saldatura finale e ne diventa parte. Un punto fatto male si trasferisce nel cordone finale come mancata fusione, cricca o deformazione.</p>
<h2>A cosa serve la puntatura</h2>
<ul>
<li>Fissare i pezzi nella posizione e nella luce previste a disegno.</li>
<li>Mantenere la luce alla radice e la geometria del cianfrino (vedi <a href="kaynak-agzi-hazirligi-iso-9692-1.html">preparazione dei lembi</a>).</li>
<li>Resistere al ritiro durante la saldatura e limitare le deformazioni.</li>
<li>Permettere di togliere il pezzo dalla maschera e saldarlo su un posizionatore.</li>
</ul>
<h2>Il punto è una saldatura</h2>
<p>Per i punti che resteranno nella saldatura finale la regola è semplice: devono soddisfare le stesse condizioni della saldatura. Quindi:</p>
<ul>
<li>eseguiti con una WPS adeguata,</li>
<li>da un saldatore o operatore qualificato,</li>
<li>con preriscaldo se richiesto,</li>
<li>con lo stesso consumabile o uno compatibile.</li>
</ul>
<p>Su acciai spessi o ad alta resistenza i punti corti senza preriscaldo si raffreddano rapidamente, induriscono e possono criccarsi. Un punto corto e piccolo si raffredda molto più in fretta di un cordone lungo nello stesso materiale; per questo il preriscaldo in puntatura è spesso importante almeno quanto nella saldatura principale (vedi <a href="on-isitma-hesaplama.html">calcolo del preriscaldo</a>).</p>
<h2>Lunghezza dei punti</h2>
<p>La EN 1090-2 fissa una lunghezza minima per i punti incorporati: il minore tra quattro volte lo spessore del pezzo più spesso e 50 mm. Un punto più corto è ammesso solo se dimostrato adeguato con prova. Per esempio, su lamiera da 10 mm almeno 40 mm; su lamiera da 20 mm almeno 50 mm.</p>
<h2>Passo tra i punti</h2>
<p>Dipende da spessore, lunghezza del pezzo, processo e tendenza alla deformazione. In generale si puntano più fitti le lamiere sottili e più radi i pezzi spessi. Pochi punti lasciano che la luce si chiuda o si apra durante la saldatura; troppi aumentano lavoro e rischio di difetti. In serie posizione e numero dei punti si standardizzano con la maschera.</p>
<h2>Sequenza di puntatura</h2>
<ul>
<li>Sui giunti lunghi prima le due estremità, poi il centro e infine i punti intermedi, così il pezzo non scorre in una direzione.</li>
<li>Sui pezzi simmetrici alternare i lati opposti.</li>
<li>Fissare prima le quote critiche (assi dei fori, punti di attacco), poi il resto.</li>
</ul>
<h2>Preparare i punti che restano</h2>
<ul>
<li>Pulire scoria e spruzzi.</li>
<li>Eliminare prima della saldatura i punti con cricche, porosità o mancata fusione.</li>
<li>Molare a smusso le estremità se necessario per un buon raccordo del cordone finale.</li>
<li>Dimensionare i punti in radice in modo che vengano completamente rifusi dalla passata di radice.</li>
</ul>
<h2>Punti a ponte e attacchi provvisori</h2>
<p>A volte si saldano ponticelli o orecchie provvisorie fuori dal giunto per mantenere la luce. Anche queste sono saldature e richiedono la stessa cura. Alla rimozione il materiale base non va danneggiato, il segno residuo si mola e, se richiesto, magnetoscopia o liquidi penetranti confermano l’assenza di cricche. Sugli acciai ad alta resistenza posizione e rimozione degli attacchi provvisori sono controllate in modo particolare.</p>
<h2>Errori frequenti</h2>
<ul>
<li>Puntare a freddo un lavoro che richiede preriscaldo.</li>
<li>Passare sopra un punto senza rifonderlo, lasciando mancate fusioni nel cordone.</li>
<li>Saldare sopra un punto criccato.</li>
<li>Puntare a caso sul materiale base fuori dal giunto, lasciando colpi d’arco.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> i punti sono eseguiti da saldatori qualificati con la stessa WPS e le stesse condizioni di preriscaldo della saldatura finale. In serie le posizioni di puntatura sono definite con la maschera e la rimozione degli attacchi provvisori è controllata. <a href="../kalite.html">Il nostro approccio alla qualità →</a></p></div>
`,
    faq: [
      ['Quanto deve essere lungo un punto?', 'Secondo la EN 1090-2 i punti incorporati non devono essere più corti del minore tra quattro volte lo spessore del pezzo più spesso e 50 mm; più corti solo con prova.'],
      ['Serve il preriscaldo per puntare?', 'Sì, se la saldatura principale lo richiede. I punti corti si raffreddano in fretta e il rischio di indurimento e cricche è ancora maggiore.'],
      ['Qual è la sequenza corretta?', 'Sui giunti lunghi prima le estremità, poi centro e punti intermedi; sui pezzi simmetrici lati opposti alternati.'],
      ['Cosa fare con un punto criccato?', 'Rimuoverlo completamente e ripuntare; saldarci sopra trasferisce la cricca nel cordone finale.']
    ],
    cta_h3: 'Produzione controllata dal primo punto all’ultima passata',
    cta_p: 'Inviateci disegno e quantità; quotiamo con piano di saldatura e qualità.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Hechten: hoe hechtlengte, -afstand en -volgorde de laskwaliteit bepalen',
    meta: 'Waarom is hechten even belangrijk als het lassen zelf? Hechtlengte en -afstand, regels uit EN 1090-2, voorwarmen, voorbereiding van blijvende hechtingen, hechtvolgorde, brughechtingen en het verwijderen van hulpstukken.',
    og: 'Regels voor hechten',
    tag: 'Productie · Hechten',
    h1: 'Hechten: hoe hechtlengte, -afstand en -volgorde de laskwaliteit bepalen',
    crumb: 'Hechten',
    read: '6 min lezen',
    body: `
<p>Hechtlassen zijn korte lassen die onderdelen voor het lassen in positie houden. Ze worden vaak gezien als “voorbereiding”, maar de meeste blijven in de eindlas zitten en worden er deel van. Een slechte hechting komt in de eindlas terug als bindingsfout, scheur of vervorming.</p>
<h2>Functies van hechten</h2>
<ul>
<li>Onderdelen vastzetten op de positie en spleet volgens tekening.</li>
<li>Grondspleet en naadgeometrie behouden (zie <a href="kaynak-agzi-hazirligi-iso-9692-1.html">naadvoorbereiding</a>).</li>
<li>Krimp tijdens het lassen weerstaan en vervorming beperken.</li>
<li>Het mogelijk maken het deel uit de mal te nemen en op een positioneerder af te lassen.</li>
</ul>
<h2>Een hechting is een las</h2>
<p>Voor hechtingen die in de eindlas worden opgenomen geldt: ze moeten aan dezelfde voorwaarden voldoen als de las zelf. Dus:</p>
<ul>
<li>gemaakt volgens een passende WPS,</li>
<li>door een gekwalificeerde lasser of operator,</li>
<li>met voorwarmen als dat vereist is,</li>
<li>met hetzelfde of een compatibel toevoegmateriaal.</li>
</ul>
<p>Bij dik of hogesterktestaal koelen korte hechtingen zonder voorwarmen snel af, harden op en kunnen scheuren. Een korte, kleine hechting koelt veel sneller af dan een lange las in hetzelfde materiaal; voorwarmen bij hechten is daarom vaak minstens zo belangrijk als bij de hoofdlas (zie <a href="on-isitma-hesaplama.html">voorwarmberekening</a>).</p>
<h2>Hechtlengte</h2>
<p>EN 1090-2 legt een minimumlengte vast voor hechtingen die in de eindlas worden opgenomen: de kleinste waarde van vier keer de dikte van het dikste deel of 50 mm. Een kortere hechting is alleen toegestaan als een beproeving aantoont dat die voldoet. Bijvoorbeeld bij 10 mm plaat minstens 40 mm, bij 20 mm plaat minstens 50 mm.</p>
<h2>Hechtafstand</h2>
<p>De afstand hangt af van materiaaldikte, lengte van het deel, lasproces en vervormingsneiging. Algemeen wordt dunne plaat dichter en dik materiaal verder uit elkaar gehecht. Te weinig hechtingen laten de spleet tijdens het lassen dichtgaan of opengaan; te veel verhogen het werk en het risico op fouten. In serie worden plaats en aantal hechtingen samen met de mal gestandaardiseerd.</p>
<h2>Hechtvolgorde</h2>
<ul>
<li>Bij lange naden eerst beide uiteinden, dan het midden, daarna de tussenliggende punten, zodat het deel niet in één richting verloopt.</li>
<li>Bij symmetrische delen tegenoverliggende zijden afwisselend hechten.</li>
<li>Eerst kritische maten (gatassen, aansluitpunten) vastzetten, dan de rest.</li>
</ul>
<h2>Voorbereiden van blijvende hechtingen</h2>
<ul>
<li>Slak en spatten verwijderen.</li>
<li>Hechtingen met scheuren, porositeit of bindingsfouten voor het lassen verwijderen.</li>
<li>Uiteinden zo nodig taps slijpen voor een goede aansluiting van de eindlas.</li>
<li>Grondhechtingen zo dimensioneren dat ze volledig met de grondlaag versmelten.</li>
</ul>
<h2>Brughechtingen en hulpstukken</h2>
<p>Soms worden buiten de naad bruggen of tijdelijke lippen gelast om de spleet te houden. Ook dat zijn lassen met dezelfde eisen. Bij verwijderen mag het basismateriaal niet beschadigd raken, resten worden weggeslepen en zo nodig bevestigt magnetisch of penetrantonderzoek dat er geen scheuren zijn. Bij hogesterktestaal worden plaats en verwijdering van hulpstukken extra bewaakt.</p>
<h2>Veelgemaakte fouten</h2>
<ul>
<li>Hechten op koud materiaal terwijl voorwarmen vereist is.</li>
<li>Over een hechting lassen zonder haar te versmelten, met bindingsfouten in de las als gevolg.</li>
<li>Over een gescheurde hechting lassen.</li>
<li>Willekeurig buiten de naad op het basismateriaal hechten en ontsteekplekken achterlaten.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> hechtingen worden door gekwalificeerde lassers gemaakt volgens dezelfde WPS en voorwarmcondities als de eindlas. In serie zijn hechtposities samen met de mal vastgelegd en wordt het verwijderen van hulpstukken gecontroleerd. <a href="../kalite.html">Onze kwaliteitsaanpak →</a></p></div>
`,
    faq: [
      ['Hoe lang moet een hechting zijn?', 'Volgens EN 1090-2 niet korter dan de kleinste waarde van vier keer de dikte van het dikste deel of 50 mm; korter alleen als een beproeving het aantoont.'],
      ['Moet bij hechten worden voorgewarmd?', 'Ja, als de hoofdlas voorwarmen vereist. Korte hechtingen koelen snel af, waardoor het risico op opharding en scheuren nog groter is.'],
      ['Wat is de juiste hechtvolgorde?', 'Bij lange naden eerst beide uiteinden, dan midden en tussenpunten; bij symmetrische delen tegenoverliggende zijden afwisselend.'],
      ['Wat te doen met een gescheurde hechting?', 'Volledig verwijderen en opnieuw hechten; eroverheen lassen brengt de scheur in de eindlas.']
    ],
    cta_h3: 'Beheerste productie van eerste hechting tot laatste laag',
    cta_p: 'Stuur uw tekening en aantallen; we offreren met een las- en kwaliteitsplan.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Heftsveising: hvordan heftlengde, avstand og rekkefølge påvirker sveisekvaliteten',
    meta: 'Hvorfor er heftsveising like viktig som selve sveisen? Heftlengde og avstand, regler i EN 1090-2, forvarming, forberedelse av hefter som blir værende, rekkefølge, brohefter og fjerning av midlertidige fester.',
    og: 'Regler for heftsveising',
    tag: 'Produksjon · Heftsveising',
    h1: 'Heftsveising: hvordan heftlengde, avstand og rekkefølge påvirker sveisekvaliteten',
    crumb: 'Heftsveising',
    read: '6 min lesing',
    body: `
<p>Hefter er korte sveiser som holder delene i posisjon før sveising. De regnes ofte som “forarbeid”, men de fleste blir værende i den ferdige sveisen og blir en del av den. En dårlig heft følger med inn i sluttsveisen som bindingsfeil, sprekk eller deformasjon.</p>
<h2>Hva heftene gjør</h2>
<ul>
<li>Fester delene i posisjonen og spalten på tegningen.</li>
<li>Holder rotspalte og fugegeometri (se <a href="kaynak-agzi-hazirligi-iso-9692-1.html">fugeforberedelse</a>).</li>
<li>Motstår krymping under sveising og begrenser deformasjon.</li>
<li>Gjør det mulig å ta delen ut av jiggen og sveise den ferdig på en posisjoneringsenhet.</li>
</ul>
<h2>En heft er en sveis</h2>
<p>For hefter som blir værende i sluttsveisen gjelder en enkel regel: de må oppfylle samme krav som selve sveisen. Det betyr:</p>
<ul>
<li>utført etter en egnet WPS,</li>
<li>av en kvalifisert sveiser eller operatør,</li>
<li>med forvarming dersom det kreves,</li>
<li>med samme eller kompatibelt tilsett.</li>
</ul>
<p>På tykke eller høyfaste stål kjøles korte hefter uten forvarming raskt, herder og kan sprekke. En kort, liten heft kjøles mye raskere enn en lang sveis i samme materiale; derfor er forvarming ved heftsveising ofte minst like viktig som for hovedsveisen (se <a href="on-isitma-hesaplama.html">beregning av forvarming</a>).</p>
<h2>Heftlengde</h2>
<p>EN 1090-2 fastsetter en minstelengde for hefter som inngår i sluttsveisen: den minste av fire ganger tykkelsen av den tykkeste delen eller 50 mm. En kortere heft godtas bare hvis den er vist tilfredsstillende ved prøving. Eksempel: på 10 mm plate minst 40 mm, på 20 mm plate minst 50 mm.</p>
<h2>Heftavstand</h2>
<p>Avstanden avhenger av materialtykkelse, dellengde, sveisemetode og deformasjonstendens. Generelt hefter man tettere på tynnplate og glissere på tykke deler. For få hefter lar spalten lukke seg eller åpne seg under sveising; for mange øker arbeidet og risikoen for feil. I serie standardiseres plassering og antall hefter sammen med jiggen.</p>
<h2>Heftrekkefølge</h2>
<ul>
<li>På lange fuger heftes først begge ender, så midten og deretter punktene imellom, slik at delen ikke vandrer i én retning.</li>
<li>På symmetriske deler heftes motstående sider vekselvis.</li>
<li>Kritiske mål (hullakser, tilkoblingspunkter) festes først, deretter resten.</li>
</ul>
<h2>Forberede hefter som blir værende</h2>
<ul>
<li>Rens hefter for slagg og sprut.</li>
<li>Fjern hefter med sprekker, porer eller bindingsfeil før sveising.</li>
<li>Slip heftendene skrå ved behov slik at sluttsveisen binder godt.</li>
<li>Dimensjoner rothefter slik at de smelter fullstendig med rotstrengen.</li>
</ul>
<h2>Brohefter og midlertidige fester</h2>
<p>Noen ganger sveises broer eller midlertidige ører utenfor fugen for å holde spalten. Også dette er sveiser og krever samme omhu. Ved fjerning må grunnmaterialet ikke skades, merket slipes glatt og ved behov bekrefter magnetpulver- eller penetranttesting at det ikke finnes sprekker. På høyfast stål kontrolleres plassering og fjerning av midlertidige fester særskilt.</p>
<h2>Vanlige feil</h2>
<ul>
<li>Heftsveise på kaldt materiale når forvarming kreves.</li>
<li>Sveise over en heft uten å smelte den, slik at bindingsfeil blir igjen i sveisen.</li>
<li>Sveise over en sprukket heft.</li>
<li>Hefte tilfeldig på grunnmaterialet utenfor fugen og etterlate tennmerker.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> hefter utføres av kvalifiserte sveisere etter samme WPS og forvarmingsbetingelser som sluttsveisen. I serie er heftposisjoner definert sammen med jiggen, og fjerning av midlertidige fester kontrolleres. <a href="../kalite.html">Vår kvalitetstilnærming →</a></p></div>
`,
    faq: [
      ['Hvor lang skal en heft være?', 'Etter EN 1090-2 ikke kortere enn den minste av fire ganger tykkelsen av den tykkeste delen eller 50 mm; kortere bare hvis det er vist ved prøving.'],
      ['Må man forvarme ved heftsveising?', 'Ja, hvis hovedsveisen krever forvarming. Korte hefter kjøles raskt, så risikoen for herding og sprekker er enda høyere.'],
      ['Hva er riktig heftrekkefølge?', 'På lange fuger først begge ender, så midten og punktene imellom; på symmetriske deler motstående sider vekselvis.'],
      ['Hva gjør man med en sprukket heft?', 'Fjern den helt og heft på nytt; å sveise over den fører sprekken inn i sluttsveisen.']
    ],
    cta_h3: 'Kontrollert tilvirkning fra første heft til siste streng',
    cta_p: 'Send tegning og antall; vi gir tilbud med sveise- og kvalitetsplan.',
    cta_btn: 'Be om tilbud →'
  }
};
