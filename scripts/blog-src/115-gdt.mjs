export default {
  order: 115,
  slug: 'gdt-geometrik-tolerans-kaynakli-parca',
  key: 'p115_gdt',
  date: '2026-10-16',
  keywords: 'GD&T kaynaklı parça, geometrik toleranslandırma kaynak, düzlemsellik toleransı kaynaklı, pozisyon toleransı delik, datum seçimi kaynaklı konstrüksiyon, ISO 1101 kaynak, GD&T welded parts, Form- und Lagetoleranzen Schweißteil, tolerancias geométricas soldadura, tolérancement géométrique pièce soudée',
  related: ['boyutsal-tolerans', 'iso-13920-kaynakli-imalat-tolerans-tablosu', 'kaynak-sonrasi-talasli-isleme', 'teknik-resimde-kaynak-bilgileri'],
  tr: {
    title: 'Kaynaklı Parçada GD&T: Geometrik Toleranslar Nasıl Gerçekçi Yazılır?',
    meta: 'Kaynaklı parça ve konstrüksiyonlarda geometrik toleranslandırma (ISO 1101 / GD&T): datum seçimi, düzlemsellik, diklik, paralellik ve pozisyon toleransları, kaynak çarpılmasının etkisi, işlenecek yüzeyler ve maliyeti gereksiz artıran toleranslar.',
    og: 'Kaynaklı parçada GD&T ve geometrik toleranslar',
    tag: 'Tasarım Rehberi · Tolerans',
    h1: 'Kaynaklı Parçada GD&T: Geometrik Toleranslar Nasıl Gerçekçi Yazılır?',
    crumb: 'GD&T kaynaklı parça',
    read: '7 dk okuma',
    body: `
<p>Talaşlı imalattan gelen tasarımcılar, kaynaklı parçalara da aynı sıkılıkta geometrik tolerans yazma eğilimindedir. Oysa kaynak, ısıyla şekil değiştiren bir süreçtir. Doğru yazılmış bir GD&T, parçanın fonksiyonunu korurken üretilebilirliği ve fiyatı belirler. Yanlış yazılmış olanı ise ya red yağmuruna ya da gereksiz işleme ve doğrultma maliyetine dönüşür.</p>
<h2>Önce Fonksiyonu Sorun</h2>
<p>Her toleransın arkasında bir montaj veya fonksiyon gereği olmalıdır: Bu yüzey neyle temas ediyor? Bu delik neye cıvatalanıyor? Fonksiyonu olmayan yüzeyler <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> genel toleranslarıyla bırakılabilir. Sıkı tolerans yalnızca gerçekten gereken yerlerde kullanılmalıdır.</p>
<h2>Datum Seçimi</h2>
<p>Datum'lar, parçanın montajda nasıl konumlandığını yansıtmalıdır. Kaynaklı parçada ham sac yüzeyi veya profil kenarı çoğu zaman güvenilir bir datum değildir; çarpılır ve dalgalanır. İşlenecek bir bağlantı yüzeyi veya delik çifti genellikle daha iyi datum'dur. Ölçüm ve işleme aynı datum'lara göre yapılmalıdır.</p>
<h2>Sık Kullanılan Toleranslar ve Kaynakta Gerçekçilik</h2>
<ul>
<li><strong>Düzlemsellik:</strong> Geniş kaynaklı yüzeylerde kaynak sonrası düzlemsellik sınırlıdır. Montaj yüzeyi için sıkı değer gerekiyorsa yüzey kaynak sonrası işlenmelidir (bkz. <a href="kaynak-sonrasi-talasli-isleme.html">kaynak sonrası talaşlı işleme</a>).</li>
<li><strong>Diklik ve paralellik:</strong> Fikstürle iyi kontrol edilebilir, ancak uzun kollarda açısal çarpılma birikir.</li>
<li><strong>Pozisyon:</strong> Kaynaktan önce açılan deliklerin konumu kaynakla kayar. Dar pozisyon toleranslı delikler kaynak sonrası delinmeli veya işlenmelidir.</li>
<li><strong>Profil toleransı:</strong> Karmaşık konturlarda kullanılır; kesim hassasiyetine bağlıdır, kaynak sonrası değişebilir.</li>
</ul>
<h2>Kaynak Öncesi mi, Sonrası mı?</h2>
<p>Çizimde bir ölçünün hangi aşamada sağlanacağı belirtilmelidir. Kaynak sonrası işlenecek yüzeylere işleme payı bırakılır ve bu yüzeyler çizimde ayrıca gösterilir. Aksi halde atölye, kaynak sonrası işlenmesi gereken bir ölçüyü kaynakla tutturmaya çalışır ve sonuç tutarsız olur.</p>
<h2>Maliyeti Gereksiz Artıran Yazımlar</h2>
<ul>
<li>Tüm çizime tek bir sıkı genel tolerans yazmak.</li>
<li>Fonksiyonu olmayan dış yüzeylere düzlemsellik vermek.</li>
<li>Kaynak sonrası işlenmeyecek deliklere dar pozisyon toleransı vermek.</li>
<li>Datum'u çarpılmaya açık ham bir yüzey olarak seçmek.</li>
</ul>
<h2>Tedarikçiyle Erken Konuşun</h2>
<p>Teklif aşamasında tolerans incelemesi yapan bir tedarikçi, hangi ölçünün kaynakla, hangisinin işlemeyle tutulacağını önerir. Bu konuşma, seri üretimde red ve tartışmayı baştan önler.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Çizimleri teklif aşamasında tolerans açısından inceliyor, kaynakla tutulamayacak ölçüler için işleme veya fikstür önerisini teklifle birlikte iletiyoruz. Talaşlı işlemeyi iş ortaklarımızla koordine ediyoruz. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['Kaynaklı parçaya GD&T yazılır mı?', 'Evet, ama yalnızca fonksiyonu olan yüzey ve deliklere, gerçekçi değerlerle.'],
      ['Ham sac yüzeyi datum olur mu?', 'Çoğu zaman güvenilir değildir; işlenmiş yüzey veya delikler daha iyi datum\'dur.'],
      ['Dar pozisyon toleranslı delikler ne zaman açılır?', 'Kaynak sonrası; önceden açılan delikler kaynakla kayar.'],
      ['Tolerans maliyeti nasıl düşer?', 'Fonksiyonu olmayan yerlerde genel toleransa dönülerek.']
    ],
    cta_h3: 'Çiziminizin üretilebilirliğini birlikte değerlendirelim',
    cta_p: 'Çizimleri gönderin; tolerans incelemesiyle teklifimizi hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'GD&T on Welded Parts: How to Write Realistic Geometric Tolerances',
    meta: 'Geometric tolerancing (ISO 1101 / GD&T) for welded parts and structures: datum selection, flatness, perpendicularity, parallelism and position, the effect of weld distortion, faces to be machined and tolerances that add cost for nothing.',
    og: 'GD&T on welded parts',
    tag: 'Design Guide · Tolerances',
    h1: 'GD&T on Welded Parts: How to Write Realistic Geometric Tolerances',
    crumb: 'GD&T welded parts',
    read: '7 min read',
    body: `
<p>Designers coming from machining tend to apply the same tight geometric tolerances to welded parts. Yet welding is a process that changes shape with heat. Well-written GD&T protects function while setting manufacturability and price. Badly written GD&T turns into a stream of rejections or unnecessary machining and straightening cost.</p>
<h2>Start With Function</h2>
<p>Every tolerance should rest on an assembly or functional need: what does this face touch? What is this hole bolted to? Non-functional faces can be left to <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> general tolerances. Tight tolerances belong only where truly needed.</p>
<h2>Datum Selection</h2>
<p>Datums should reflect how the part locates in assembly. On a welded part, a raw plate face or profile edge is often not a reliable datum; it distorts and waves. A machined mounting face or a pair of holes usually makes a better datum. Measurement and machining should use the same datums.</p>
<h2>Common Tolerances and What Is Realistic in Welding</h2>
<ul>
<li><strong>Flatness:</strong> on large welded faces, as-welded flatness is limited. If a mounting face needs a tight value, machine it after welding (see <a href="kaynak-sonrasi-talasli-isleme.html">post-weld machining</a>).</li>
<li><strong>Perpendicularity and parallelism:</strong> well controlled with fixtures, but angular distortion accumulates on long arms.</li>
<li><strong>Position:</strong> holes made before welding shift during welding. Holes with tight position tolerance should be drilled or machined after welding.</li>
<li><strong>Profile:</strong> used on complex contours; depends on cutting accuracy and may change after welding.</li>
</ul>
<h2>Before or After Welding?</h2>
<p>The drawing should state at which stage a dimension is achieved. Faces machined after welding get a machining allowance and are shown separately. Otherwise the shop tries to hold a dimension by welding that should be machined, and results vary.</p>
<h2>Specifications That Add Cost for Nothing</h2>
<ul>
<li>One tight general tolerance for the whole drawing.</li>
<li>Flatness on non-functional outer faces.</li>
<li>Tight position on holes that will not be machined after welding.</li>
<li>A raw, distortion-prone face chosen as datum.</li>
</ul>
<h2>Talk to the Supplier Early</h2>
<p>A supplier who reviews tolerances at quotation will propose which dimensions are held by welding and which by machining. That conversation prevents rejections and disputes in series production.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> we review drawings for tolerances at quotation and propose machining or fixturing for dimensions welding cannot hold, together with the quote. Machining is coordinated with our partners. <a href="../cizime-gore-imalat.html">Build-to-print manufacturing →</a></p></div>
`,
    faq: [
      ['Should welded parts carry GD&T?', 'Yes, but only on functional faces and holes, with realistic values.'],
      ['Can a raw plate face be a datum?', 'Often not reliably; machined faces or holes make better datums.'],
      ['When are tight-position holes made?', 'After welding; holes made before shift during welding.'],
      ['How do you reduce tolerance cost?', 'Return to general tolerances where there is no function.']
    ],
    cta_h3: 'Let\'s review the manufacturability of your drawing',
    cta_p: 'Send drawings; we will prepare our quote with a tolerance review.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Form- und Lagetoleranzen an Schweißteilen: realistisch tolerieren',
    meta: 'Geometrische Tolerierung (ISO 1101 / GD&T) an Schweißteilen und Stahlbauten: Bezugswahl, Ebenheit, Rechtwinkligkeit, Parallelität und Position, Einfluss des Schweißverzugs, zu bearbeitende Flächen und Toleranzen, die nur Kosten treiben.',
    og: 'Form- und Lagetoleranzen an Schweißteilen',
    tag: 'Konstruktionsleitfaden · Toleranzen',
    h1: 'Form- und Lagetoleranzen an Schweißteilen: realistisch tolerieren',
    crumb: 'Form- und Lagetoleranzen',
    read: '7 Min. Lesezeit',
    body: `
<p>Konstrukteure aus der Zerspanung neigen dazu, Schweißteile ebenso eng zu tolerieren. Schweißen ist aber ein Prozess, der die Form durch Wärme verändert. Gut gesetzte Form- und Lagetoleranzen sichern die Funktion und bestimmen Fertigbarkeit und Preis; schlecht gesetzte führen zu Reklamationen oder unnötigen Bearbeitungs- und Richtkosten.</p>
<h2>Zuerst die Funktion</h2>
<p>Hinter jeder Toleranz sollte ein Montage- oder Funktionsbedarf stehen: Woran liegt diese Fläche an? Woran wird diese Bohrung verschraubt? Funktionslose Flächen können bei den Allgemeintoleranzen nach <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> bleiben. Enge Toleranzen nur dort, wo sie wirklich nötig sind.</p>
<h2>Bezugswahl</h2>
<p>Bezüge sollten abbilden, wie das Teil in der Montage positioniert wird. Am Schweißteil ist eine rohe Blechfläche oder Profilkante oft kein verlässlicher Bezug; sie verzieht sich und wellt. Eine bearbeitete Anschlussfläche oder ein Bohrungspaar ist meist der bessere Bezug. Messen und Bearbeiten sollten dieselben Bezüge nutzen.</p>
<h2>Übliche Toleranzen und was beim Schweißen realistisch ist</h2>
<ul>
<li><strong>Ebenheit:</strong> an großen geschweißten Flächen im Schweißzustand begrenzt. Braucht eine Anschlussfläche einen engen Wert, wird sie nach dem Schweißen bearbeitet (siehe <a href="kaynak-sonrasi-talasli-isleme.html">Bearbeitung nach dem Schweißen</a>).</li>
<li><strong>Rechtwinkligkeit und Parallelität:</strong> mit Vorrichtungen gut beherrschbar, an langen Armen summiert sich aber der Winkelverzug.</li>
<li><strong>Position:</strong> vor dem Schweißen gefertigte Bohrungen wandern. Bohrungen mit enger Positionstoleranz nach dem Schweißen bohren oder bearbeiten.</li>
<li><strong>Profilform:</strong> bei komplexen Konturen; abhängig von der Schneidgenauigkeit, kann sich nach dem Schweißen ändern.</li>
</ul>
<h2>Vor oder nach dem Schweißen?</h2>
<p>Die Zeichnung sollte angeben, in welchem Zustand ein Maß erreicht wird. Nach dem Schweißen bearbeitete Flächen erhalten Aufmaß und werden gesondert gekennzeichnet. Sonst versucht die Werkstatt, ein Bearbeitungsmaß durch Schweißen zu halten – mit schwankendem Ergebnis.</p>
<h2>Vorgaben, die nur Kosten treiben</h2>
<ul>
<li>Eine enge Allgemeintoleranz für die ganze Zeichnung.</li>
<li>Ebenheit an funktionslosen Außenflächen.</li>
<li>Enge Position an Bohrungen, die nicht nachbearbeitet werden.</li>
<li>Eine rohe, verzugsgefährdete Fläche als Bezug.</li>
</ul>
<h2>Früh mit dem Lieferanten sprechen</h2>
<p>Ein Lieferant, der die Toleranzen im Angebot prüft, schlägt vor, welche Maße durch Schweißen und welche durch Bearbeitung gehalten werden. Das verhindert Reklamationen und Diskussionen in der Serie.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Wir prüfen Zeichnungen im Angebot auf Toleranzen und schlagen für Maße, die Schweißen nicht halten kann, Bearbeitung oder Vorrichtungen vor – zusammen mit dem Angebot. Die Zerspanung koordinieren wir mit Partnern. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Gehören Form- und Lagetoleranzen auf Schweißteile?', 'Ja, aber nur an Funktionsflächen und -bohrungen, mit realistischen Werten.'],
      ['Taugt eine rohe Blechfläche als Bezug?', 'Oft nicht; bearbeitete Flächen oder Bohrungen sind bessere Bezüge.'],
      ['Wann werden eng tolerierte Bohrungen gefertigt?', 'Nach dem Schweißen; vorher gefertigte wandern.'],
      ['Wie sinken Toleranzkosten?', 'Wo keine Funktion besteht, auf Allgemeintoleranzen zurückgehen.']
    ],
    cta_h3: 'Fertigbarkeit Ihrer Zeichnung gemeinsam prüfen',
    cta_p: 'Senden Sie Zeichnungen; wir erstellen unser Angebot mit Toleranzprüfung.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'GD&T en piezas soldadas: cómo escribir tolerancias geométricas realistas',
    meta: 'Tolerancias geométricas (ISO 1101 / GD&T) en piezas y estructuras soldadas: elección de referencias, planitud, perpendicularidad, paralelismo y posición, efecto de la distorsión, caras a mecanizar y tolerancias que encarecen sin motivo.',
    og: 'GD&T en piezas soldadas',
    tag: 'Guía de diseño · Tolerancias',
    h1: 'GD&T en piezas soldadas: cómo escribir tolerancias geométricas realistas',
    crumb: 'GD&T piezas soldadas',
    read: '7 min de lectura',
    body: `
<p>Los diseñadores que vienen del mecanizado tienden a aplicar las mismas tolerancias geométricas estrechas a las piezas soldadas. Pero la soldadura cambia la forma con el calor. Un GD&T bien escrito protege la función y define la fabricabilidad y el precio; uno mal escrito se convierte en rechazos o en costes innecesarios de mecanizado y enderezado.</p>
<h2>Empiece por la función</h2>
<p>Cada tolerancia debe responder a una necesidad de montaje o función: ¿con qué contacta esta cara? ¿A qué se atornilla este taladro? Las caras sin función pueden quedar con tolerancias generales <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>. Las estrechas, solo donde hacen falta.</p>
<h2>Elección de referencias</h2>
<p>Las referencias deben reflejar cómo se posiciona la pieza en el montaje. En una pieza soldada, la cara bruta de una chapa o el canto de un perfil no suele ser fiable: se deforma y ondula. Una cara de apoyo mecanizada o un par de taladros suele ser mejor referencia. Medición y mecanizado deben usar las mismas.</p>
<h2>Tolerancias habituales y realismo en soldadura</h2>
<ul>
<li><strong>Planitud:</strong> en caras soldadas grandes es limitada en estado bruto. Si una cara de montaje necesita un valor estrecho, se mecaniza tras soldar (ver <a href="kaynak-sonrasi-talasli-isleme.html">mecanizado postsoldadura</a>).</li>
<li><strong>Perpendicularidad y paralelismo:</strong> controlables con utillajes, pero en brazos largos se acumula la distorsión angular.</li>
<li><strong>Posición:</strong> los taladros hechos antes de soldar se desplazan. Los de posición estrecha se taladran o mecanizan después.</li>
<li><strong>Perfil:</strong> en contornos complejos; depende de la precisión de corte y puede variar tras soldar.</li>
</ul>
<h2>¿Antes o después de soldar?</h2>
<p>El plano debe indicar en qué fase se consigue cada cota. Las caras mecanizadas tras soldar llevan sobreespesor y se señalan aparte. Si no, el taller intenta mantener por soldadura una cota que debería mecanizarse, con resultados irregulares.</p>
<h2>Especificaciones que encarecen sin motivo</h2>
<ul>
<li>Una tolerancia general estrecha para todo el plano.</li>
<li>Planitud en caras exteriores sin función.</li>
<li>Posición estrecha en taladros que no se mecanizarán después.</li>
<li>Una cara bruta propensa a deformarse como referencia.</li>
</ul>
<h2>Hable pronto con el proveedor</h2>
<p>Un proveedor que revisa tolerancias en la oferta propone qué cotas se mantienen soldando y cuáles mecanizando. Esa conversación evita rechazos y disputas en serie.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> revisamos las tolerancias de los planos en la oferta y proponemos mecanizado o utillaje para las cotas que la soldadura no puede mantener. El mecanizado se coordina con socios. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Llevan GD&T las piezas soldadas?', 'Sí, pero solo en caras y taladros funcionales, con valores realistas.'],
      ['¿Una cara bruta puede ser referencia?', 'A menudo no es fiable; mejor caras mecanizadas o taladros.'],
      ['¿Cuándo se hacen los taladros de posición estrecha?', 'Después de soldar; los previos se desplazan.'],
      ['¿Cómo bajar el coste de tolerancias?', 'Volviendo a tolerancias generales donde no hay función.']
    ],
    cta_h3: 'Revisemos juntos la fabricabilidad de su plano',
    cta_p: 'Envíe los planos; prepararemos la oferta con revisión de tolerancias.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Tolérancement géométrique des pièces soudées : écrire des tolérances réalistes',
    meta: 'Tolérancement géométrique (ISO 1101 / GD&T) des pièces et structures soudées : choix des références, planéité, perpendicularité, parallélisme et localisation, effet des déformations, faces à usiner et tolérances qui coûtent pour rien.',
    og: 'Tolérancement géométrique des pièces soudées',
    tag: 'Guide de conception · Tolérances',
    h1: 'Tolérancement géométrique des pièces soudées : écrire des tolérances réalistes',
    crumb: 'Tolérancement géométrique',
    read: '7 min de lecture',
    body: `
<p>Les concepteurs venant de l'usinage ont tendance à appliquer aux pièces soudées les mêmes tolérances géométriques serrées. Or le soudage déforme par la chaleur. Un tolérancement bien écrit protège la fonction et fixe fabricabilité et prix ; mal écrit, il se traduit en rebuts ou en coûts inutiles d'usinage et de dressage.</p>
<h2>Partir de la fonction</h2>
<p>Chaque tolérance doit reposer sur un besoin de montage ou de fonction : avec quoi cette face est-elle en contact ? À quoi ce trou est-il boulonné ? Les faces sans fonction peuvent rester aux tolérances générales <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>. Les tolérances serrées, uniquement là où elles sont nécessaires.</p>
<h2>Choix des références</h2>
<p>Les références doivent refléter la mise en position au montage. Sur une pièce soudée, une face de tôle brute ou un bord de profilé n'est souvent pas fiable : il se déforme et ondule. Une face d'appui usinée ou une paire de trous fait en général une meilleure référence. Mesure et usinage doivent utiliser les mêmes.</p>
<h2>Tolérances courantes et réalisme en soudage</h2>
<ul>
<li><strong>Planéité :</strong> limitée brut de soudage sur grandes faces. Si une face d'appui exige une valeur serrée, on l'usine après soudage (voir <a href="kaynak-sonrasi-talasli-isleme.html">usinage après soudage</a>).</li>
<li><strong>Perpendicularité et parallélisme :</strong> bien maîtrisés par gabarit, mais la déformation angulaire s'accumule sur les bras longs.</li>
<li><strong>Localisation :</strong> les trous faits avant soudage se déplacent. Ceux à localisation serrée se percent ou s'usinent après.</li>
<li><strong>Forme de profil :</strong> sur contours complexes ; dépend de la précision de découpe et peut évoluer après soudage.</li>
</ul>
<h2>Avant ou après soudage ?</h2>
<p>Le plan doit préciser à quel stade chaque cote est obtenue. Les faces usinées après soudage reçoivent une surépaisseur et sont signalées à part. Sinon l'atelier tente de tenir par soudage une cote d'usinage, avec des résultats variables.</p>
<h2>Spécifications qui coûtent pour rien</h2>
<ul>
<li>Une tolérance générale serrée sur tout le plan.</li>
<li>De la planéité sur des faces extérieures sans fonction.</li>
<li>Une localisation serrée sur des trous non repris après soudage.</li>
<li>Une face brute sujette à déformation choisie comme référence.</li>
</ul>
<h2>Parler tôt au fournisseur</h2>
<p>Un fournisseur qui revoit les tolérances au devis propose quelles cotes tenir par soudage et lesquelles par usinage. Cet échange évite rebuts et litiges en série.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous revoyons les tolérances des plans dès le devis et proposons usinage ou gabarit pour les cotes que le soudage ne peut tenir. L'usinage est coordonné avec nos partenaires. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Faut-il du tolérancement géométrique sur pièce soudée ?', 'Oui, mais seulement sur faces et trous fonctionnels, avec des valeurs réalistes.'],
      ['Une face brute peut-elle servir de référence ?', 'Souvent peu fiable ; préférer faces usinées ou trous.'],
      ['Quand réaliser les trous à localisation serrée ?', 'Après soudage ; ceux faits avant se déplacent.'],
      ['Comment réduire le coût des tolérances ?', 'Revenir aux tolérances générales là où il n\'y a pas de fonction.']
    ],
    cta_h3: 'Revoyons ensemble la fabricabilité de votre plan',
    cta_p: 'Envoyez vos plans ; nous préparerons le devis avec une revue des tolérances.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'GD&T sui pezzi saldati: come scrivere tolleranze geometriche realistiche',
    meta: 'Tolleranze geometriche (ISO 1101 / GD&T) su pezzi e strutture saldate: scelta dei riferimenti, planarità, perpendicolarità, parallelismo e posizione, effetto delle deformazioni, facce da lavorare e tolleranze che aumentano i costi inutilmente.',
    og: 'GD&T sui pezzi saldati',
    tag: 'Guida alla progettazione · Tolleranze',
    h1: 'GD&T sui pezzi saldati: come scrivere tolleranze geometriche realistiche',
    crumb: 'GD&T pezzi saldati',
    read: '7 min di lettura',
    body: `
<p>I progettisti che vengono dalla lavorazione meccanica tendono ad applicare ai pezzi saldati le stesse tolleranze geometriche strette. Ma la saldatura cambia forma con il calore. Un GD&T ben scritto protegge la funzione e definisce fattibilità e prezzo; uno scritto male diventa scarti o costi inutili di lavorazione e raddrizzatura.</p>
<h2>Partire dalla funzione</h2>
<p>Ogni tolleranza deve basarsi su un'esigenza di montaggio o funzione: con cosa è a contatto questa faccia? A cosa è imbullonato questo foro? Le facce senza funzione possono restare con tolleranze generali <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>. Le tolleranze strette solo dove servono davvero.</p>
<h2>Scelta dei riferimenti</h2>
<p>I riferimenti devono riflettere come il pezzo si posiziona al montaggio. Su un pezzo saldato una faccia di lamiera grezza o il bordo di un profilo spesso non è affidabile: si deforma e ondula. Una faccia di appoggio lavorata o una coppia di fori è in genere un riferimento migliore. Misura e lavorazione devono usare gli stessi.</p>
<h2>Tolleranze comuni e realismo nella saldatura</h2>
<ul>
<li><strong>Planarità:</strong> su facce saldate grandi è limitata allo stato grezzo. Se una faccia di montaggio richiede un valore stretto, va lavorata dopo la saldatura (vedi <a href="kaynak-sonrasi-talasli-isleme.html">lavorazione post-saldatura</a>).</li>
<li><strong>Perpendicolarità e parallelismo:</strong> ben controllabili con attrezzature, ma sui bracci lunghi la deformazione angolare si somma.</li>
<li><strong>Posizione:</strong> i fori fatti prima della saldatura si spostano. Quelli a posizione stretta si forano o lavorano dopo.</li>
<li><strong>Profilo:</strong> su contorni complessi; dipende dalla precisione di taglio e può variare dopo la saldatura.</li>
</ul>
<h2>Prima o dopo la saldatura?</h2>
<p>Il disegno deve indicare in quale fase si ottiene ogni quota. Le facce lavorate dopo la saldatura hanno sovrametallo e sono indicate a parte. Altrimenti l'officina cerca di tenere saldando una quota da lavorare, con risultati incostanti.</p>
<h2>Specifiche che aumentano i costi inutilmente</h2>
<ul>
<li>Una tolleranza generale stretta per tutto il disegno.</li>
<li>Planarità su facce esterne senza funzione.</li>
<li>Posizione stretta su fori non ripresi dopo la saldatura.</li>
<li>Una faccia grezza soggetta a deformazione come riferimento.</li>
</ul>
<h2>Parlare presto con il fornitore</h2>
<p>Un fornitore che esamina le tolleranze in offerta propone quali quote tenere con la saldatura e quali con la lavorazione. Questo dialogo evita scarti e contestazioni in serie.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> esaminiamo le tolleranze dei disegni in fase d'offerta e proponiamo lavorazione o attrezzature per le quote che la saldatura non può tenere. La lavorazione meccanica è coordinata con i partner. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['I pezzi saldati devono avere GD&T?', 'Sì, ma solo su facce e fori funzionali, con valori realistici.'],
      ['Una faccia grezza può fare da riferimento?', 'Spesso non è affidabile; meglio facce lavorate o fori.'],
      ['Quando si fanno i fori a posizione stretta?', 'Dopo la saldatura; quelli fatti prima si spostano.'],
      ['Come ridurre il costo delle tolleranze?', 'Tornando alle tolleranze generali dove non c\'è funzione.']
    ],
    cta_h3: 'Valutiamo insieme la fattibilità del vostro disegno',
    cta_p: 'Inviate i disegni; prepareremo l\'offerta con revisione delle tolleranze.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Vorm- en plaatstoleranties op laswerk: realistisch tolereren',
    meta: 'Geometrische tolerantie (ISO 1101 / GD&T) op gelaste delen en constructies: keuze van referenties, vlakheid, haaksheid, evenwijdigheid en positie, invloed van lasvervorming, te bewerken vlakken en toleranties die alleen kosten opdrijven.',
    og: 'Vorm- en plaatstoleranties op laswerk',
    tag: 'Ontwerpgids · Toleranties',
    h1: 'Vorm- en plaatstoleranties op laswerk: realistisch tolereren',
    crumb: 'Vorm- en plaatstoleranties',
    read: '7 min lezen',
    body: `
<p>Ontwerpers uit de verspaning passen vaak dezelfde krappe geometrische toleranties toe op laswerk. Maar lassen verandert de vorm door warmte. Goed gekozen toleranties beschermen de functie en bepalen maakbaarheid en prijs; slecht gekozen leiden tot afkeur of onnodige bewerkings- en richtkosten.</p>
<h2>Begin bij de functie</h2>
<p>Achter elke tolerantie hoort een montage- of functie-eis: waar ligt dit vlak tegenaan? Waaraan wordt dit gat vastgebout? Vlakken zonder functie kunnen bij de algemene toleranties volgens <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> blijven. Krappe toleranties alleen waar echt nodig.</p>
<h2>Keuze van referenties</h2>
<p>Referenties moeten weerspiegelen hoe het deel in de montage gepositioneerd wordt. Bij laswerk is een ruw plaatvlak of profielrand vaak geen betrouwbare referentie; die vervormt en golft. Een bewerkt aansluitvlak of een gatenpaar is meestal beter. Meten en bewerken horen dezelfde referenties te gebruiken.</p>
<h2>Gangbare toleranties en wat realistisch is bij lassen</h2>
<ul>
<li><strong>Vlakheid:</strong> op grote gelaste vlakken beperkt in gelaste toestand. Heeft een montagevlak een krappe waarde nodig, dan wordt het na het lassen bewerkt (zie <a href="kaynak-sonrasi-talasli-isleme.html">bewerken na het lassen</a>).</li>
<li><strong>Haaksheid en evenwijdigheid:</strong> goed te beheersen met mallen, maar bij lange armen stapelt hoekvervorming zich op.</li>
<li><strong>Positie:</strong> gaten die vóór het lassen gemaakt zijn verschuiven. Gaten met krappe positie worden na het lassen geboord of bewerkt.</li>
<li><strong>Profielvorm:</strong> bij complexe contouren; afhankelijk van snijnauwkeurigheid en kan na het lassen veranderen.</li>
</ul>
<h2>Vóór of na het lassen?</h2>
<p>De tekening moet aangeven in welke fase een maat wordt bereikt. Vlakken die na het lassen bewerkt worden krijgen bewerkingstoeslag en worden apart aangegeven. Anders probeert de werkplaats een bewerkingsmaat met lassen te halen, met wisselend resultaat.</p>
<h2>Eisen die alleen kosten opdrijven</h2>
<ul>
<li>Eén krappe algemene tolerantie voor de hele tekening.</li>
<li>Vlakheid op functieloze buitenvlakken.</li>
<li>Krappe positie op gaten die niet nabewerkt worden.</li>
<li>Een ruw, vervormingsgevoelig vlak als referentie.</li>
</ul>
<h2>Praat vroeg met de leverancier</h2>
<p>Een leverancier die toleranties in de offertefase beoordeelt, stelt voor welke maten met lassen en welke met bewerken gehaald worden. Dat voorkomt afkeur en discussie in de serie.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> we beoordelen tekeningen in de offertefase op toleranties en stellen voor maten die lassen niet kan halen bewerking of mallen voor, samen met de offerte. Verspaning coördineren we met partners. <a href="../cizime-gore-imalat.html">Productie volgens tekening →</a></p></div>
`,
    faq: [
      ['Horen vorm- en plaatstoleranties op laswerk?', 'Ja, maar alleen op functionele vlakken en gaten, met realistische waarden.'],
      ['Kan een ruw plaatvlak referentie zijn?', 'Vaak niet betrouwbaar; bewerkte vlakken of gaten zijn beter.'],
      ['Wanneer worden krap gepositioneerde gaten gemaakt?', 'Na het lassen; eerder gemaakte verschuiven.'],
      ['Hoe dalen tolerantiekosten?', 'Door terug te gaan naar algemene toleranties waar geen functie is.']
    ],
    cta_h3: 'Samen de maakbaarheid van uw tekening beoordelen',
    cta_p: 'Stuur tekeningen; we stellen een offerte op met tolerantiebeoordeling.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'GD&T på sveisedeler: slik skrives realistiske geometriske toleranser',
    meta: 'Geometrisk toleransesetting (ISO 1101 / GD&T) på sveisede deler og konstruksjoner: valg av referanser, planhet, vinkelrethet, parallellitet og posisjon, effekten av sveisedeformasjon, flater som maskineres og toleranser som bare øker kostnaden.',
    og: 'GD&T på sveisedeler',
    tag: 'Konstruksjonsguide · Toleranser',
    h1: 'GD&T på sveisedeler: slik skrives realistiske geometriske toleranser',
    crumb: 'GD&T sveisedeler',
    read: '7 min lesing',
    body: `
<p>Konstruktører med bakgrunn fra maskinering har lett for å gi sveisedeler like stramme geometriske toleranser. Men sveising endrer form med varme. Godt satt GD&T beskytter funksjonen og avgjør produserbarhet og pris; dårlig satt GD&T gir avvik eller unødvendig maskinering og retting.</p>
<h2>Start med funksjonen</h2>
<p>Hver toleranse bør bygge på et monterings- eller funksjonsbehov: hva ligger denne flaten mot? Hva boltes dette hullet til? Flater uten funksjon kan stå med generelle toleranser etter <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>. Stramme toleranser bare der de virkelig trengs.</p>
<h2>Valg av referanser</h2>
<p>Referansene bør gjenspeile hvordan delen posisjoneres i monteringen. På en sveisedel er en rå plateflate eller profilkant ofte ikke pålitelig; den deformeres og bølger. En maskinert anleggsflate eller et hullpar er som regel en bedre referanse. Måling og maskinering bør bruke de samme referansene.</p>
<h2>Vanlige toleranser og hva som er realistisk i sveising</h2>
<ul>
<li><strong>Planhet:</strong> begrenset i sveiset tilstand på store flater. Trenger en anleggsflate en stram verdi, maskineres den etter sveising (se <a href="kaynak-sonrasi-talasli-isleme.html">maskinering etter sveising</a>).</li>
<li><strong>Vinkelrethet og parallellitet:</strong> godt kontrollerbart med jigger, men vinkeldeformasjon summeres på lange armer.</li>
<li><strong>Posisjon:</strong> hull laget før sveising forskyves. Hull med stram posisjon bores eller maskineres etter sveising.</li>
<li><strong>Profil:</strong> på komplekse konturer; avhenger av skjærenøyaktighet og kan endres etter sveising.</li>
</ul>
<h2>Før eller etter sveising?</h2>
<p>Tegningen bør angi i hvilken fase et mål oppnås. Flater som maskineres etter sveising får maskineringstillegg og vises separat. Ellers prøver verkstedet å holde et maskineringsmål med sveising, med varierende resultat.</p>
<h2>Krav som bare øker kostnaden</h2>
<ul>
<li>Én stram generell toleranse for hele tegningen.</li>
<li>Planhet på utvendige flater uten funksjon.</li>
<li>Stram posisjon på hull som ikke etterbearbeides.</li>
<li>En rå, deformasjonsutsatt flate som referanse.</li>
</ul>
<h2>Snakk tidlig med leverandøren</h2>
<p>En leverandør som går gjennom toleransene i tilbudsfasen, foreslår hvilke mål som holdes med sveising og hvilke med maskinering. Den samtalen forhindrer avvik og diskusjoner i serien.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> vi går gjennom toleransene på tegningene i tilbudsfasen og foreslår maskinering eller jigger for mål sveising ikke kan holde, sammen med tilbudet. Maskinering koordineres med partnere. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Skal sveisedeler ha GD&T?', 'Ja, men bare på funksjonelle flater og hull, med realistiske verdier.'],
      ['Kan en rå plateflate være referanse?', 'Ofte ikke pålitelig; maskinerte flater eller hull er bedre.'],
      ['Når lages hull med stram posisjon?', 'Etter sveising; hull laget før forskyves.'],
      ['Hvordan reduseres toleransekostnaden?', 'Ved å gå tilbake til generelle toleranser der det ikke er funksjon.']
    ],
    cta_h3: 'La oss vurdere produserbarheten sammen',
    cta_p: 'Send tegninger; vi utarbeider tilbud med toleransegjennomgang.',
    cta_btn: 'Be om tilbud →'
  }
};
