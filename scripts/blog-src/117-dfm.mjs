export default {
  order: 117,
  slug: 'kaynak-icin-tasarim-dfm-kaynakli-parca',
  key: 'p117_dfm',
  date: '2026-10-29',
  keywords: 'kaynak için tasarım, DFM kaynaklı parça, üretilebilirlik kaynak, kaynaklı konstrüksiyon tasarım kuralları, kaynak erişimi, köşe kaynağı boyutu tasarım, design for welding, Schweißgerechte Konstruktion, diseño para soldadura, conception pour le soudage',
  related: ['kaynak-maliyeti-hesaplama', 'kose-kaynagi-a-olcusu', 'kaynak-agzi-hazirligi-iso-9692-1', 'maliyet-optimizasyon'],
  tr: {
    title: 'Kaynak İçin Tasarım (DFM): Fiyatı ve Kaliteyi Çizimde Belirleyen 10 Kural',
    meta: 'Kaynaklı parça tasarımında üretilebilirlik (DFM) kuralları: kaynak erişimi, dikiş sayısı ve boyutu, simetri ve çarpılma, kesişen dikişler, bükümle dikiş azaltma, standart profiller, kaynak pozisyonu, toleranslar ve tedarikçiyle erken tasarım incelemesi.',
    og: 'Kaynak için tasarım: DFM kuralları',
    tag: 'Tasarım Rehberi · Maliyet',
    h1: 'Kaynak İçin Tasarım (DFM): Fiyatı ve Kaliteyi Çizimde Belirleyen 10 Kural',
    crumb: 'Kaynak için tasarım',
    read: '8 dk okuma',
    body: `
<p>Bir kaynaklı parçanın maliyetinin büyük kısmı, ilk kıvılcımdan çok önce, çizim masasında belirlenir. Dikiş sayısı, boyutu, erişilebilirliği ve çarpılmaya yatkınlığı tasarımda kararlaştırılır. Aşağıdaki kurallar, satın almacılar ve tasarımcılar için tedarikçiye gitmeden önce çizimi gözden geçirme listesidir.</p>
<h2>1. Kaynak Erişimini Düşünün</h2>
<p>Torç veya elektrodun dikişe doğru açıyla ulaşması gerekir. Dar köşeler, iç içe geçmiş levhalar ve kapalı kutular içindeki dikişler ya yapılamaz ya da kötü yapılır. 3D modelde torç gövdesini düşünerek kontrol etmek yeterli bir başlangıçtır.</p>
<h2>2. Dikiş Boyutunu Hesapla Belirleyin</h2>
<p>Köşe kaynağının <a href="kose-kaynagi-a-olcusu.html">a-ölçüsü</a> iki katına çıktığında kaynak metali hacmi yaklaşık dört katına çıkar. "Emin olmak için" büyük yazılan dikişler hem maliyeti hem çarpılmayı artırır.</p>
<h2>3. Dikiş Sayısını Azaltın</h2>
<p>Bükülmüş bir sac, iki levhanın kaynakla birleştirilmesinin yerini alabilir. Lazerle tek parça kesilmiş bir kontur, birkaç küçük parçanın kaynağından ucuz ve düzgündür.</p>
<h2>4. Simetri Kurun</h2>
<p>Tarafsız eksen etrafında dengeli yerleştirilmiş dikişler çarpılmayı birbirini dengeleyerek azaltır. Tek taraflı yoğun kaynak, parçayı o tarafa çeker (bkz. <a href="kaynak-distorsiyonu.html">kaynak distorsiyonu</a>).</p>
<h2>5. Dikişleri Kesiştirmeyin</h2>
<p>Üç dikişin buluştuğu noktalar gerilme ve hata yoğunlaşmasının olduğu yerlerdir. Köşe kesmeler (scallop) ile dikişleri ayırmak hem kaliteyi hem yorulma ömrünü iyileştirir.</p>
<h2>6. Yüksek Gerilmeli Bölgelerden Uzak Durun</h2>
<p>Dikişleri mümkün olduğunca en yüksek eğilme gerilmesinin olduğu kesitlerden ve ani kesit değişimlerinden uzaklaştırın. Yorulma yüklü parçalarda bu, <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">FAT sınıfını</a> doğrudan etkiler.</p>
<h2>7. Standart Malzeme ve Profil Kullanın</h2>
<p>Piyasada kolay bulunan sac kalınlıkları ve profiller teslim süresini kısaltır. Özel kalınlık veya az bulunan bir kalite, tek bir parça yüzünden tüm siparişi bekletebilir.</p>
<h2>8. Yatay Pozisyonda Kaynak İmkânı Verin</h2>
<p>Yatay ve oluk pozisyonunda kaynak en hızlı ve en kalitelisidir. Parçanın çevrilebilir veya pozisyonerde döndürülebilir olması, tavan ve dikey kaynağı azaltır.</p>
<h2>9. Toleransı Fonksiyona Göre Yazın</h2>
<p>Kaynakla tutulamayacak dar ölçüleri kaynak sonrası işlemeye bırakın ve işleme payı tanımlayın. Fonksiyonu olmayan yüzeylerde <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> genel toleransları yeterlidir.</p>
<h2>10. Yüzey İşlemi Baştan Planlayın</h2>
<p>Galvaniz veya KTL'ye gidecek kapalı profillere drenaj delikleri, bindirmelere kapatma dikişi veya açıklık, boya için keskin kenar yuvarlatma tasarımda belirlenmelidir.</p>
<h2>Erken Tasarım İncelemesi</h2>
<p>Tedarikçiye çizim gönderirken "bu tasarımda neyi değiştirirseniz daha ucuz ve daha kaliteli olur?" sorusunu sormak, çoğu zaman en verimli fiyat görüşmesidir.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Teklif aşamasında çizimleri kaynak erişimi, dikiş boyutu, çarpılma ve yüzey işlem açısından inceliyor, maliyet ve kaliteyi etkileyen değişiklik önerilerini teklifle birlikte iletiyoruz. Son karar her zaman tasarım sahibinindir. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['Kaynaklı parçanın maliyeti en çok nerede belirlenir?', 'Tasarımda: dikiş sayısı, boyutu ve erişilebilirliğinde.'],
      ['A-ölçüsü büyütülürse ne olur?', 'İki katına çıkan a-ölçüsü kaynak metalini yaklaşık dört katına çıkarır.'],
      ['Kesişen dikişler neden sorun?', 'Gerilme ve hata yoğunlaşır; köşe kesmelerle ayrılmalıdır.'],
      ['Tedarikçiye ne sorulmalı?', 'Tasarımda neyin değişmesi maliyeti düşürüp kaliteyi artırır.']
    ],
    cta_h3: 'Çiziminizi üretilebilirlik açısından inceleyelim',
    cta_p: 'Çizimleri gönderin; önerilerimizle birlikte teklifimizi hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Design for Welding (DFM): 10 Rules That Set Price and Quality on the Drawing',
    meta: 'Manufacturability (DFM) rules for welded part design: weld access, number and size of welds, symmetry and distortion, intersecting welds, replacing welds with bends, standard sections, welding position, tolerances and early design review with the supplier.',
    og: 'Design for welding: DFM rules',
    tag: 'Design Guide · Cost',
    h1: 'Design for Welding (DFM): 10 Rules That Set Price and Quality on the Drawing',
    crumb: 'Design for welding',
    read: '8 min read',
    body: `
<p>Most of a welded part's cost is set on the drawing board long before the first spark. The number, size, accessibility and distortion tendency of welds are decided in design. The rules below are a checklist for buyers and designers before a drawing goes to a supplier.</p>
<h2>1. Think About Weld Access</h2>
<p>The torch or electrode must reach the joint at the right angle. Welds in tight corners, between nested plates or inside closed boxes are either impossible or poor. Checking in the 3D model with the torch body in mind is a good start.</p>
<h2>2. Size Welds by Calculation</h2>
<p>Doubling the <a href="kose-kaynagi-a-olcusu.html">throat size</a> of a fillet weld roughly quadruples weld metal volume. Oversized welds "to be safe" increase both cost and distortion.</p>
<h2>3. Reduce the Number of Welds</h2>
<p>A bent sheet can replace two plates welded together. A contour laser-cut in one piece is cheaper and cleaner than welding several small parts.</p>
<h2>4. Build in Symmetry</h2>
<p>Welds balanced around the neutral axis offset each other's distortion. Heavy welding on one side pulls the part that way (see <a href="kaynak-distorsiyonu.html">weld distortion</a>).</p>
<h2>5. Avoid Intersecting Welds</h2>
<p>Points where three welds meet concentrate stress and defects. Corner copes (scallops) separating the welds improve quality and fatigue life.</p>
<h2>6. Keep Away From High-Stress Zones</h2>
<p>Move welds away from sections of maximum bending stress and abrupt changes in section where possible. On fatigue-loaded parts this directly affects the <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">FAT class</a>.</p>
<h2>7. Use Standard Material and Sections</h2>
<p>Readily available plate thicknesses and sections shorten lead time. A special thickness or rare grade can hold up the whole order for one part.</p>
<h2>8. Allow Flat-Position Welding</h2>
<p>Flat and horizontal positions are fastest and give the best quality. If the part can be turned over or rotated on a positioner, overhead and vertical welding is reduced.</p>
<h2>9. Tolerance by Function</h2>
<p>Leave tight dimensions that welding cannot hold to post-weld machining and define machining allowance. On non-functional faces, <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> general tolerances are enough.</p>
<h2>10. Plan Surface Treatment From the Start</h2>
<p>Drain holes in closed sections going to galvanising or e-coat, seal welds or gaps at laps, and rounded edges for painting belong in the design.</p>
<h2>Early Design Review</h2>
<p>When sending a drawing to a supplier, asking "what would you change to make this cheaper and better?" is often the most productive price discussion.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> at quotation we review drawings for weld access, weld size, distortion and surface treatment, and send change proposals that affect cost and quality with the quote. The final decision always rests with the design owner. <a href="../cizime-gore-imalat.html">Build-to-print manufacturing →</a></p></div>
`,
    faq: [
      ['Where is a welded part\'s cost mostly set?', 'In design: number, size and accessibility of welds.'],
      ['What happens if throat size grows?', 'Doubling the throat roughly quadruples weld metal.'],
      ['Why are intersecting welds a problem?', 'Stress and defects concentrate; separate them with copes.'],
      ['What should you ask the supplier?', 'What design change would lower cost and raise quality.']
    ],
    cta_h3: 'Let us review your drawing for manufacturability',
    cta_p: 'Send drawings; we will prepare our quote with proposals.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Schweißgerechte Konstruktion: 10 Regeln, die Preis und Qualität auf der Zeichnung festlegen',
    meta: 'Regeln für fertigungsgerechte Schweißkonstruktion: Zugänglichkeit, Anzahl und Größe der Nähte, Symmetrie und Verzug, sich kreuzende Nähte, Kanten statt Schweißen, Standardprofile, Schweißposition, Toleranzen und frühe Konstruktionsprüfung mit dem Lieferanten.',
    og: 'Schweißgerechte Konstruktion',
    tag: 'Konstruktionsleitfaden · Kosten',
    h1: 'Schweißgerechte Konstruktion: 10 Regeln, die Preis und Qualität auf der Zeichnung festlegen',
    crumb: 'Schweißgerechte Konstruktion',
    read: '8 Min. Lesezeit',
    body: `
<p>Der größte Teil der Kosten eines Schweißteils entsteht am Konstruktionstisch, lange vor dem ersten Funken. Anzahl, Größe, Zugänglichkeit und Verzugsneigung der Nähte werden in der Konstruktion entschieden. Die folgenden Regeln sind eine Checkliste für Einkäufer und Konstrukteure, bevor eine Zeichnung zum Lieferanten geht.</p>
<h2>1. Zugänglichkeit bedenken</h2>
<p>Brenner oder Elektrode müssen die Naht im richtigen Winkel erreichen. Nähte in engen Ecken, zwischen verschachtelten Blechen oder in geschlossenen Kästen sind unmöglich oder schlecht. Eine Prüfung im 3D-Modell mit Blick auf den Brennerkörper ist ein guter Anfang.</p>
<h2>2. Nahtgröße berechnen</h2>
<p>Verdoppelt man das <a href="kose-kaynagi-a-olcusu.html">a-Maß</a> einer Kehlnaht, vervierfacht sich etwa das Schweißgutvolumen. „Sicherheitshalber" überdimensionierte Nähte erhöhen Kosten und Verzug.</p>
<h2>3. Nahtanzahl reduzieren</h2>
<p>Ein gekantetes Blech kann zwei verschweißte Platten ersetzen. Eine in einem Stück lasergeschnittene Kontur ist günstiger und sauberer als mehrere verschweißte Kleinteile.</p>
<h2>4. Symmetrie schaffen</h2>
<p>Um die neutrale Faser ausgeglichene Nähte heben ihren Verzug gegenseitig auf. Einseitig konzentriertes Schweißen zieht das Teil zu dieser Seite (siehe <a href="kaynak-distorsiyonu.html">Schweißverzug</a>).</p>
<h2>5. Kreuzende Nähte vermeiden</h2>
<p>Treffpunkte dreier Nähte bündeln Spannungen und Fehler. Freischnitte (Scallops) trennen die Nähte und verbessern Qualität und Lebensdauer.</p>
<h2>6. Hochbeanspruchte Zonen meiden</h2>
<p>Nähte möglichst aus Querschnitten maximaler Biegespannung und von abrupten Querschnittsübergängen fernhalten. Bei ermüdungsbeanspruchten Teilen bestimmt das direkt die <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">FAT-Klasse</a>.</p>
<h2>7. Standardwerkstoffe und -profile verwenden</h2>
<p>Gängige Blechdicken und Profile verkürzen die Lieferzeit. Eine Sonderdicke oder seltene Güte kann den ganzen Auftrag wegen eines Teils aufhalten.</p>
<h2>8. Schweißen in Wannenlage ermöglichen</h2>
<p>Wannen- und Horizontalposition sind am schnellsten und qualitativ am besten. Lässt sich das Teil wenden oder auf einem Positionierer drehen, sinkt der Anteil an Überkopf- und Steignähten.</p>
<h2>9. Nach Funktion tolerieren</h2>
<p>Enge Maße, die das Schweißen nicht halten kann, der Bearbeitung nach dem Schweißen überlassen und Aufmaß festlegen. An Flächen ohne Funktion reichen Allgemeintoleranzen nach <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>.</p>
<h2>10. Oberflächenbehandlung von Anfang an planen</h2>
<p>Ablauflöcher in Hohlprofilen für Verzinkung oder KTL, Dichtnähte oder Spalte an Überlappungen und gerundete Kanten für die Lackierung gehören in die Konstruktion.</p>
<h2>Frühe Konstruktionsprüfung</h2>
<p>Beim Versand einer Zeichnung die Frage „Was würden Sie ändern, damit es günstiger und besser wird?" zu stellen, ist oft das ergiebigste Preisgespräch.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Im Angebot prüfen wir Zeichnungen auf Zugänglichkeit, Nahtgröße, Verzug und Oberflächenbehandlung und senden Änderungsvorschläge mit Einfluss auf Kosten und Qualität zusammen mit dem Angebot. Die letzte Entscheidung liegt immer beim Konstruktionsverantwortlichen. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Wo entstehen die Kosten eines Schweißteils?', 'Vor allem in der Konstruktion: Anzahl, Größe und Zugänglichkeit der Nähte.'],
      ['Was passiert bei größerem a-Maß?', 'Doppeltes a-Maß ergibt etwa das Vierfache an Schweißgut.'],
      ['Warum sind kreuzende Nähte ein Problem?', 'Spannungen und Fehler bündeln sich; mit Freischnitten trennen.'],
      ['Was sollte man den Lieferanten fragen?', 'Welche Konstruktionsänderung Kosten senkt und Qualität hebt.']
    ],
    cta_h3: 'Wir prüfen Ihre Zeichnung auf Fertigbarkeit',
    cta_p: 'Senden Sie Zeichnungen; wir erstellen unser Angebot mit Vorschlägen.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Diseño para soldadura (DFM): 10 reglas que fijan precio y calidad en el plano',
    meta: 'Reglas de fabricabilidad (DFM) para piezas soldadas: acceso a la soldadura, número y tamaño de cordones, simetría y distorsión, cordones que se cruzan, plegar en lugar de soldar, perfiles estándar, posición de soldeo, tolerancias y revisión temprana con el proveedor.',
    og: 'Diseño para soldadura: reglas DFM',
    tag: 'Guía de diseño · Coste',
    h1: 'Diseño para soldadura (DFM): 10 reglas que fijan precio y calidad en el plano',
    crumb: 'Diseño para soldadura',
    read: '8 min de lectura',
    body: `
<p>La mayor parte del coste de una pieza soldada se decide en el tablero de diseño, mucho antes de la primera chispa. Número, tamaño, accesibilidad y tendencia a la distorsión de los cordones se deciden en el diseño. Estas reglas son una lista de comprobación para compradores y diseñadores antes de enviar un plano al proveedor.</p>
<h2>1. Piense en el acceso</h2>
<p>La antorcha o el electrodo deben llegar a la unión con el ángulo correcto. Cordones en esquinas estrechas, entre chapas encajadas o dentro de cajas cerradas son imposibles o malos. Revisarlo en el modelo 3D pensando en el cuerpo de la antorcha es un buen comienzo.</p>
<h2>2. Dimensione los cordones por cálculo</h2>
<p>Duplicar la <a href="kose-kaynagi-a-olcusu.html">garganta</a> de un cordón en ángulo multiplica por cuatro aproximadamente el metal depositado. Los cordones sobredimensionados "por si acaso" aumentan coste y distorsión.</p>
<h2>3. Reduzca el número de cordones</h2>
<p>Una chapa plegada puede sustituir a dos chapas soldadas. Un contorno cortado por láser en una pieza es más barato y limpio que soldar varias piezas pequeñas.</p>
<h2>4. Busque la simetría</h2>
<p>Cordones equilibrados respecto al eje neutro compensan su distorsión. Soldar mucho en un solo lado tira de la pieza hacia ese lado (ver <a href="kaynak-distorsiyonu.html">distorsión</a>).</p>
<h2>5. Evite cordones que se cruzan</h2>
<p>Donde se encuentran tres cordones se concentran tensiones y defectos. Los recortes en esquina (scallops) los separan y mejoran calidad y vida a fatiga.</p>
<h2>6. Aléjese de zonas de alta tensión</h2>
<p>Lleve los cordones lejos de las secciones de máxima flexión y de cambios bruscos de sección. En piezas a fatiga esto define directamente la <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">clase FAT</a>.</p>
<h2>7. Use material y perfiles estándar</h2>
<p>Espesores y perfiles fáciles de encontrar acortan el plazo. Un espesor especial o un grado raro pueden retrasar todo el pedido por una sola pieza.</p>
<h2>8. Permita soldar en plano</h2>
<p>Las posiciones plana y horizontal son las más rápidas y de mejor calidad. Si la pieza puede voltearse o girarse en un posicionador, se reduce la soldadura en techo y vertical.</p>
<h2>9. Tolerancias según función</h2>
<p>Deje las cotas estrechas que la soldadura no puede mantener para el mecanizado posterior y defina sobreespesor. En caras sin función bastan las tolerancias generales <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>.</p>
<h2>10. Planifique el tratamiento superficial desde el inicio</h2>
<p>Taladros de drenaje en perfiles cerrados para galvanizado o cataforesis, sellado o separación en solapes y aristas redondeadas para pintar se definen en el diseño.</p>
<h2>Revisión temprana del diseño</h2>
<p>Preguntar al enviar el plano "¿qué cambiaría para que sea más barato y mejor?" suele ser la negociación de precio más productiva.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> en la oferta revisamos los planos en acceso, tamaño de cordón, distorsión y tratamiento superficial, y enviamos propuestas de cambio con efecto en coste y calidad junto con la oferta. La decisión final es siempre del responsable del diseño. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Dónde se fija el coste de una pieza soldada?', 'En el diseño: número, tamaño y accesibilidad de los cordones.'],
      ['¿Qué pasa si crece la garganta?', 'Duplicarla multiplica por cuatro aproximadamente el metal depositado.'],
      ['¿Por qué molestan los cordones cruzados?', 'Concentran tensiones y defectos; separarlos con recortes.'],
      ['¿Qué preguntar al proveedor?', 'Qué cambio de diseño baja el coste y sube la calidad.']
    ],
    cta_h3: 'Revisemos la fabricabilidad de su plano',
    cta_p: 'Envíe los planos; prepararemos la oferta con propuestas.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Conception pour le soudage (DFM) : 10 règles qui fixent prix et qualité sur le plan',
    meta: 'Règles de fabricabilité (DFM) pour pièces soudées : accessibilité, nombre et taille des cordons, symétrie et déformation, cordons qui se croisent, pliage au lieu de soudage, profilés standard, position de soudage, tolérances et revue de conception précoce avec le fournisseur.',
    og: 'Conception pour le soudage : règles DFM',
    tag: 'Guide de conception · Coût',
    h1: 'Conception pour le soudage (DFM) : 10 règles qui fixent prix et qualité sur le plan',
    crumb: 'Conception pour le soudage',
    read: '8 min de lecture',
    body: `
<p>L'essentiel du coût d'une pièce soudée se décide sur la planche à dessin, bien avant la première étincelle. Nombre, taille, accessibilité et propension à la déformation des cordons sont fixés à la conception. Ces règles forment une liste de contrôle pour acheteurs et concepteurs avant d'envoyer un plan au fournisseur.</p>
<h2>1. Penser à l'accessibilité</h2>
<p>La torche ou l'électrode doit atteindre le joint sous le bon angle. Les cordons dans des angles étroits, entre tôles imbriquées ou dans des caissons fermés sont impossibles ou médiocres. Une vérification dans le modèle 3D en pensant au corps de torche est un bon début.</p>
<h2>2. Dimensionner les cordons par le calcul</h2>
<p>Doubler la <a href="kose-kaynagi-a-olcusu.html">gorge</a> d'une soudure d'angle multiplie environ par quatre le volume de métal déposé. Les cordons surdimensionnés « par sécurité » augmentent coût et déformation.</p>
<h2>3. Réduire le nombre de cordons</h2>
<p>Une tôle pliée peut remplacer deux tôles soudées. Un contour découpé laser d'une pièce est moins cher et plus propre que plusieurs petites pièces soudées.</p>
<h2>4. Rechercher la symétrie</h2>
<p>Des cordons équilibrés autour de l'axe neutre compensent leurs déformations. Souder beaucoup d'un seul côté tire la pièce de ce côté (voir <a href="kaynak-distorsiyonu.html">déformations de soudage</a>).</p>
<h2>5. Éviter les cordons qui se croisent</h2>
<p>Là où trois cordons se rencontrent, contraintes et défauts se concentrent. Des dégagements d'angle (scallops) les séparent et améliorent qualité et tenue en fatigue.</p>
<h2>6. S'éloigner des zones très sollicitées</h2>
<p>Placer les cordons loin des sections de flexion maximale et des changements brusques de section. Sur pièces en fatigue, cela fixe directement la <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">classe FAT</a>.</p>
<h2>7. Utiliser matières et profilés standard</h2>
<p>Épaisseurs et profilés courants raccourcissent les délais. Une épaisseur spéciale ou une nuance rare peut bloquer toute la commande pour une seule pièce.</p>
<h2>8. Permettre le soudage à plat</h2>
<p>Les positions à plat et en corniche sont les plus rapides et donnent la meilleure qualité. Si la pièce peut être retournée ou tournée sur un positionneur, on réduit le soudage au plafond et vertical.</p>
<h2>9. Tolérancer selon la fonction</h2>
<p>Confier à l'usinage après soudage les cotes serrées que le soudage ne peut tenir et définir la surépaisseur. Sur faces sans fonction, les tolérances générales <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> suffisent.</p>
<h2>10. Prévoir le traitement de surface dès le départ</h2>
<p>Trous d'égouttage dans les corps creux pour galvanisation ou cataphorèse, soudures d'étanchéité ou jeu aux recouvrements et arêtes arrondies pour la peinture se décident à la conception.</p>
<h2>Revue de conception précoce</h2>
<p>Demander au fournisseur, en envoyant le plan, « que changeriez-vous pour que ce soit moins cher et meilleur ? » est souvent la discussion de prix la plus productive.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> au devis, nous revoyons les plans sous l'angle de l'accessibilité, de la taille des cordons, des déformations et du traitement de surface, et transmettons avec le devis des propositions de modification impactant coût et qualité. La décision finale revient toujours au responsable de la conception. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Où se décide le coût d\'une pièce soudée ?', 'À la conception : nombre, taille et accessibilité des cordons.'],
      ['Que se passe-t-il si la gorge augmente ?', 'La doubler multiplie environ par quatre le métal déposé.'],
      ['Pourquoi éviter les cordons croisés ?', 'Contraintes et défauts s\'y concentrent ; les séparer par des dégagements.'],
      ['Que demander au fournisseur ?', 'Quel changement de conception réduit le coût et améliore la qualité.']
    ],
    cta_h3: 'Revoyons la fabricabilité de votre plan',
    cta_p: 'Envoyez vos plans ; nous préparerons le devis avec nos propositions.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Progettare per la saldatura (DFM): 10 regole che fissano prezzo e qualità sul disegno',
    meta: 'Regole di fattibilità (DFM) per pezzi saldati: accessibilità, numero e dimensione dei cordoni, simmetria e deformazione, cordoni che si incrociano, piegare invece di saldare, profili standard, posizione di saldatura, tolleranze e revisione precoce con il fornitore.',
    og: 'Progettare per la saldatura: regole DFM',
    tag: 'Guida alla progettazione · Costi',
    h1: 'Progettare per la saldatura (DFM): 10 regole che fissano prezzo e qualità sul disegno',
    crumb: 'Progettare per la saldatura',
    read: '8 min di lettura',
    body: `
<p>Gran parte del costo di un pezzo saldato si decide al tavolo da disegno, molto prima della prima scintilla. Numero, dimensione, accessibilità e tendenza alla deformazione dei cordoni si fissano in progettazione. Queste regole sono una checklist per buyer e progettisti prima di inviare un disegno al fornitore.</p>
<h2>1. Pensare all'accessibilità</h2>
<p>La torcia o l'elettrodo deve raggiungere il giunto con l'angolo giusto. Cordoni in angoli stretti, tra lamiere incastrate o dentro scatole chiuse sono impossibili o scadenti. Verificarlo nel modello 3D pensando al corpo torcia è un buon inizio.</p>
<h2>2. Dimensionare i cordoni con il calcolo</h2>
<p>Raddoppiare la <a href="kose-kaynagi-a-olcusu.html">sezione di gola</a> di un cordone d'angolo quadruplica circa il metallo depositato. Cordoni sovradimensionati "per sicurezza" aumentano costi e deformazioni.</p>
<h2>3. Ridurre il numero di cordoni</h2>
<p>Una lamiera piegata può sostituire due lamiere saldate. Un contorno tagliato laser in un pezzo è più economico e pulito di più piccoli pezzi saldati.</p>
<h2>4. Cercare la simmetria</h2>
<p>Cordoni bilanciati rispetto all'asse neutro compensano le deformazioni. Saldare molto da un solo lato tira il pezzo da quella parte (vedi <a href="kaynak-distorsiyonu.html">deformazioni da saldatura</a>).</p>
<h2>5. Evitare cordoni che si incrociano</h2>
<p>Dove si incontrano tre cordoni si concentrano tensioni e difetti. Gli scarichi d'angolo (scallop) li separano e migliorano qualità e vita a fatica.</p>
<h2>6. Stare lontano dalle zone più sollecitate</h2>
<p>Allontanare i cordoni dalle sezioni di massima flessione e dai bruschi cambi di sezione. Sui pezzi a fatica questo determina direttamente la <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">classe FAT</a>.</p>
<h2>7. Usare materiali e profili standard</h2>
<p>Spessori e profili facilmente reperibili accorciano i tempi. Uno spessore speciale o un grado raro può bloccare l'intero ordine per un solo pezzo.</p>
<h2>8. Consentire la saldatura in piano</h2>
<p>Le posizioni in piano e frontale sono le più rapide e di qualità migliore. Se il pezzo può essere girato o ruotato su un posizionatore, si riduce la saldatura sopratesta e verticale.</p>
<h2>9. Tollerare in base alla funzione</h2>
<p>Lasciare alla lavorazione post-saldatura le quote strette che la saldatura non può tenere e definire il sovrametallo. Sulle facce senza funzione bastano le tolleranze generali <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>.</p>
<h2>10. Pianificare il trattamento superficiale dall'inizio</h2>
<p>Fori di scolo nelle sezioni chiuse per zincatura o cataforesi, sigillatura o luce nelle sovrapposizioni e spigoli arrotondati per la verniciatura vanno decisi in progettazione.</p>
<h2>Revisione precoce del progetto</h2>
<p>Chiedere al fornitore, inviando il disegno, "cosa cambiereste per renderlo più economico e migliore?" è spesso la trattativa di prezzo più produttiva.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> in fase d'offerta esaminiamo i disegni per accessibilità, dimensione dei cordoni, deformazioni e trattamento superficiale, e inviamo con l'offerta le proposte di modifica che incidono su costi e qualità. La decisione finale spetta sempre al responsabile del progetto. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Dove si decide il costo di un pezzo saldato?', 'In progettazione: numero, dimensione e accessibilità dei cordoni.'],
      ['Cosa succede se la gola aumenta?', 'Raddoppiarla quadruplica circa il metallo depositato.'],
      ['Perché evitare cordoni incrociati?', 'Concentrano tensioni e difetti; separarli con scarichi.'],
      ['Cosa chiedere al fornitore?', 'Quale modifica di progetto riduce i costi e migliora la qualità.']
    ],
    cta_h3: 'Esaminiamo la fattibilità del vostro disegno',
    cta_p: 'Inviate i disegni; prepareremo l\'offerta con le nostre proposte.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Lasgericht ontwerpen (DFM): 10 regels die prijs en kwaliteit op de tekening bepalen',
    meta: 'Maakbaarheidsregels (DFM) voor gelaste delen: lastoegankelijkheid, aantal en grootte van lassen, symmetrie en vervorming, kruisende lassen, zetten in plaats van lassen, standaardprofielen, laspositie, toleranties en vroege ontwerpreview met de leverancier.',
    og: 'Lasgericht ontwerpen: DFM-regels',
    tag: 'Ontwerpgids · Kosten',
    h1: 'Lasgericht ontwerpen (DFM): 10 regels die prijs en kwaliteit op de tekening bepalen',
    crumb: 'Lasgericht ontwerpen',
    read: '8 min lezen',
    body: `
<p>Het grootste deel van de kosten van een gelast deel wordt aan de tekentafel bepaald, lang vóór de eerste vonk. Aantal, grootte, toegankelijkheid en vervormingsneiging van de lassen worden in het ontwerp vastgelegd. Onderstaande regels zijn een checklist voor inkopers en ontwerpers voordat een tekening naar de leverancier gaat.</p>
<h2>1. Denk aan toegankelijkheid</h2>
<p>Toorts of elektrode moet de naad onder de juiste hoek bereiken. Lassen in krappe hoeken, tussen in elkaar geschoven platen of in gesloten kokers zijn onmogelijk of slecht. Een controle in het 3D-model met het toortslichaam in gedachten is een goed begin.</p>
<h2>2. Bepaal lasgrootte met berekening</h2>
<p>Verdubbelen van de <a href="kose-kaynagi-a-olcusu.html">keelhoogte</a> van een hoeklas vervierdubbelt ongeveer het lasmetaalvolume. "Voor de zekerheid" te grote lassen verhogen kosten en vervorming.</p>
<h2>3. Verminder het aantal lassen</h2>
<p>Een gezette plaat kan twee aan elkaar gelaste platen vervangen. Een in één stuk gelaserde contour is goedkoper en strakker dan meerdere kleine gelaste delen.</p>
<h2>4. Bouw symmetrie in</h2>
<p>Lassen die rond de neutrale lijn in balans zijn, heffen elkaars vervorming op. Veel lassen aan één kant trekt het deel die kant op (zie <a href="kaynak-distorsiyonu.html">lasvervorming</a>).</p>
<h2>5. Vermijd kruisende lassen</h2>
<p>Waar drie lassen samenkomen concentreren spanningen en fouten zich. Hoekuitsparingen (scallops) scheiden de lassen en verbeteren kwaliteit en vermoeiingsleven.</p>
<h2>6. Blijf weg uit hoog belaste zones</h2>
<p>Leg lassen waar mogelijk buiten doorsneden met maximale buigspanning en abrupte doorsnedeovergangen. Bij vermoeiingsbelaste delen bepaalt dat direct de <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">FAT-klasse</a>.</p>
<h2>7. Gebruik standaardmateriaal en -profielen</h2>
<p>Gangbare plaatdiktes en profielen verkorten de levertijd. Een speciale dikte of zeldzame kwaliteit kan de hele order voor één deel ophouden.</p>
<h2>8. Maak onder de hand lassen mogelijk</h2>
<p>Onder de hand en horizontaal lassen is het snelst en geeft de beste kwaliteit. Als het deel gekeerd of op een positioner gedraaid kan worden, neemt boven-het-hoofd en verticaal lassen af.</p>
<h2>9. Tolereer naar functie</h2>
<p>Laat krappe maten die lassen niet kan halen over aan bewerken na het lassen en leg bewerkingstoeslag vast. Op functieloze vlakken volstaan algemene toleranties volgens <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>.</p>
<h2>10. Plan oppervlaktebehandeling vanaf het begin</h2>
<p>Draingaten in gesloten profielen voor verzinken of KTL, dichtlassen of spleet bij overlappingen en afgeronde randen voor lakken horen in het ontwerp.</p>
<h2>Vroege ontwerpreview</h2>
<p>Bij het versturen van een tekening vragen "wat zou u veranderen om het goedkoper en beter te maken?" is vaak het meest productieve prijsgesprek.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> in de offertefase beoordelen we tekeningen op toegankelijkheid, lasgrootte, vervorming en oppervlaktebehandeling en sturen we wijzigingsvoorstellen die kosten en kwaliteit beïnvloeden mee met de offerte. De eindbeslissing ligt altijd bij de ontwerpeigenaar. <a href="../cizime-gore-imalat.html">Productie volgens tekening →</a></p></div>
`,
    faq: [
      ['Waar worden de kosten van een gelast deel bepaald?', 'In het ontwerp: aantal, grootte en toegankelijkheid van de lassen.'],
      ['Wat gebeurt er bij een grotere keelhoogte?', 'Verdubbelen geeft ongeveer vier keer zoveel lasmetaal.'],
      ['Waarom zijn kruisende lassen een probleem?', 'Spanningen en fouten concentreren zich; scheiden met uitsparingen.'],
      ['Wat vraag je de leverancier?', 'Welke ontwerpwijziging de kosten verlaagt en de kwaliteit verhoogt.']
    ],
    cta_h3: 'Wij beoordelen uw tekening op maakbaarheid',
    cta_p: 'Stuur tekeningen; we maken een offerte met voorstellen.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Sveisevennlig konstruksjon (DFM): 10 regler som avgjør pris og kvalitet på tegningen',
    meta: 'Produserbarhetsregler (DFM) for sveisede deler: sveisetilgang, antall og størrelse på sveiser, symmetri og deformasjon, kryssende sveiser, bøying i stedet for sveising, standardprofiler, sveiseposisjon, toleranser og tidlig konstruksjonsgjennomgang med leverandøren.',
    og: 'Sveisevennlig konstruksjon: DFM-regler',
    tag: 'Konstruksjonsguide · Kostnad',
    h1: 'Sveisevennlig konstruksjon (DFM): 10 regler som avgjør pris og kvalitet på tegningen',
    crumb: 'Sveisevennlig konstruksjon',
    read: '8 min lesing',
    body: `
<p>Mesteparten av kostnaden for en sveisedel bestemmes ved tegnebordet, lenge før den første gnisten. Antall, størrelse, tilgjengelighet og deformasjonstendens for sveisene avgjøres i konstruksjonen. Reglene under er en sjekkliste for innkjøpere og konstruktører før en tegning sendes til leverandør.</p>
<h2>1. Tenk på tilgang</h2>
<p>Pistol eller elektrode må nå fugen i riktig vinkel. Sveiser i trange hjørner, mellom innskutte plater eller inne i lukkede kasser er umulige eller dårlige. Å sjekke i 3D-modellen med pistolkroppen i tankene er en god start.</p>
<h2>2. Dimensjoner sveisene ved beregning</h2>
<p>Dobles <a href="kose-kaynagi-a-olcusu.html">a-målet</a> på en kilsveis, firedobles omtrent sveisemetallvolumet. Overdimensjonerte sveiser «for sikkerhets skyld» øker både kostnad og deformasjon.</p>
<h2>3. Reduser antall sveiser</h2>
<p>En bøyd plate kan erstatte to sammensveisede plater. En kontur laserskåret i ett stykke er billigere og penere enn flere små sveisede deler.</p>
<h2>4. Bygg inn symmetri</h2>
<p>Sveiser balansert rundt nøytralaksen motvirker hverandres deformasjon. Mye sveising på én side trekker delen den veien (se <a href="kaynak-distorsiyonu.html">sveisedeformasjon</a>).</p>
<h2>5. Unngå kryssende sveiser</h2>
<p>Der tre sveiser møtes, konsentreres spenninger og feil. Hjørneutsparinger (scallops) skiller sveisene og forbedrer kvalitet og utmattingslevetid.</p>
<h2>6. Hold avstand til høyt belastede soner</h2>
<p>Flytt sveiser bort fra snitt med maksimal bøyespenning og brå tverrsnittsendringer der det er mulig. På utmattingsbelastede deler påvirker dette direkte <a href="kaynakli-baglantilarda-yorulma-fat-sinifi.html">FAT-klassen</a>.</p>
<h2>7. Bruk standard materiale og profiler</h2>
<p>Lett tilgjengelige platetykkelser og profiler gir kortere leveringstid. En spesialtykkelse eller sjelden kvalitet kan holde igjen hele ordren for én del.</p>
<h2>8. Muliggjør sveising i horisontal stilling</h2>
<p>Horisontal og renne-stilling er raskest og gir best kvalitet. Kan delen snus eller roteres i en posisjonerer, reduseres sveising over hodet og vertikalt.</p>
<h2>9. Toleranser etter funksjon</h2>
<p>Overlat stramme mål sveising ikke kan holde til maskinering etter sveising, og angi maskineringstillegg. På flater uten funksjon holder generelle toleranser etter <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a>.</p>
<h2>10. Planlegg overflatebehandling fra start</h2>
<p>Dreneringshull i lukkede profiler for galvanisering eller KTL, tettsveis eller spalte ved overlapp og avrundede kanter for maling hører hjemme i konstruksjonen.</p>
<h2>Tidlig konstruksjonsgjennomgang</h2>
<p>Å spørre leverandøren «hva ville dere endret for at dette blir billigere og bedre?» når tegningen sendes, er ofte den mest produktive prissamtalen.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> i tilbudsfasen går vi gjennom tegningene med tanke på tilgang, sveisestørrelse, deformasjon og overflatebehandling, og sender endringsforslag som påvirker kostnad og kvalitet sammen med tilbudet. Den endelige beslutningen ligger alltid hos konstruksjonseieren. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hvor bestemmes kostnaden for en sveisedel?', 'I konstruksjonen: antall, størrelse og tilgjengelighet for sveisene.'],
      ['Hva skjer hvis a-målet økes?', 'Dobbelt a-mål gir omtrent fire ganger så mye sveisemetall.'],
      ['Hvorfor er kryssende sveiser et problem?', 'Spenninger og feil konsentreres; skill dem med utsparinger.'],
      ['Hva bør man spørre leverandøren?', 'Hvilken endring i konstruksjonen senker kostnad og øker kvalitet.']
    ],
    cta_h3: 'Vi vurderer tegningen din for produserbarhet',
    cta_p: 'Send tegninger; vi utarbeider tilbud med forslag.',
    cta_btn: 'Be om tilbud →'
  }
};
