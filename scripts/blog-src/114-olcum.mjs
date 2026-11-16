export default {
  order: 114,
  slug: 'olcum-raporu-cmm-lazer-tracker-kaynakli-parca',
  key: 'p114_measure',
  date: '2026-10-12',
  keywords: 'ölçüm raporu kaynaklı parça, boyut raporu, CMM ölçüm kaynaklı, lazer tracker ölçüm, 3D tarama kaynaklı parça, balon çizim ölçüm raporu, ilk parça ölçüm, dimensional report welded parts, Messprotokoll Schweißbaugruppe, informe dimensional, rapport dimensionnel',
  related: ['boyutsal-tolerans', 'iso-13920-kaynakli-imalat-tolerans-tablosu', 'ilk-parca-onayi-kaynakli-imalat', 'ppap-kaynakli-parca-onayi'],
  tr: {
    title: 'Kaynaklı Parçada Ölçüm Raporu: Şerit Metreden CMM ve Lazer Tracker\'a',
    meta: 'Kaynaklı parça ve konstrüksiyonlarda ölçüm raporu nasıl hazırlanır: balonlu çizim, ölçüm noktaları, el aletleri, CMM, ölçüm kolu, lazer tracker ve 3D tarama. Hangi parça için hangi yöntem, ölçüm sıcaklığı ve referans sistemi.',
    og: 'Kaynaklı parçada ölçüm raporu ve yöntemler',
    tag: 'Tedarik Rehberi · Kalite',
    h1: 'Kaynaklı Parçada Ölçüm Raporu: Şerit Metreden CMM ve Lazer Tracker\'a',
    crumb: 'Ölçüm raporu',
    read: '7 dk okuma',
    body: `
<p>Kaynaklı bir parçada boyutlar, kaynak çarpılması yüzünden kesim ve büküm aşamasındaki kadar kesin değildir. Bu nedenle alıcılar ilk numunede ve seri boyunca ölçüm raporu ister. İyi bir rapor yalnızca rakam listesi değildir; neyin, hangi referansa göre, hangi aletle ve hangi koşulda ölçüldüğünü açıkça gösterir.</p>
<h2>Balonlu Çizim: Raporun Omurgası</h2>
<p>Çizimdeki her ölçü ve geometrik tolerans numaralandırılır (balonlanır). Rapor bu numaralarla aynı sırayı izler: nominal değer, tolerans, ölçülen değer, sonuç. Böylece alıcı tek bakışta hangi ölçünün sınırda olduğunu görür. <a href="ilk-parca-onayi-kaynakli-imalat.html">İlk parça onayında</a> tüm ölçüler, seride ise anlaşılan kritik ölçüler raporlanır.</p>
<h2>Yöntemler</h2>
<ul>
<li><strong>El aletleri:</strong> Kalibre şerit metre, kumpas, açı ölçer, mastar, filler. Çoğu kaynaklı parça için yeterlidir; ancak büyük parçalarda köşegen, düzlemsellik ve delik konumu gibi ölçümlerde hassasiyet sınırlıdır.</li>
<li><strong>CMM (koordinat ölçüm makinesi):</strong> Tezgaha sığan, işlenmiş yüzey ve delikleri olan parçalarda mikron düzeyinde hassasiyet sağlar.</li>
<li><strong>Taşınabilir ölçüm kolu:</strong> Parçanın yanına götürülür; orta boy parçalarda delik konumları ve yüzeyler için pratiktir.</li>
<li><strong>Lazer tracker:</strong> Büyük şasi, bom, çerçeve ve konstrüksiyonlarda metrelerce mesafede yüksek hassasiyetle nokta ölçer. Bağlantı deliklerinin birbirine göre konumu gibi el aletleriyle doğrulanması zor ölçüler için kullanılır.</li>
<li><strong>3D tarama:</strong> Parçanın tamamını nokta bulutu olarak alır, CAD modeliyle renkli sapma haritası çıkarır. Çarpılmanın dağılımını görmek için idealdir.</li>
</ul>
<h2>Hangi Parça İçin Hangisi?</h2>
<p>Seçim, toleransa ve parça boyutuna göre yapılır. <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> genel toleranslarıyla çizilmiş bir çerçeve için el aletleri yeterlidir. Kaynak sonrası işlenmiş yüzeyleri ve dar konum toleransı olan bir makine gövdesi için CMM veya ölçüm kolu, metrelerce uzunluktaki bir bom veya şasi için lazer tracker uygundur.</p>
<h2>Gözden Kaçan Ayrıntılar</h2>
<ul>
<li><strong>Referans sistemi:</strong> Ölçümler çizimdeki datum'lara göre yapılmalıdır; aksi halde aynı parça iki farklı sonuç verebilir.</li>
<li><strong>Sıcaklık:</strong> Uzun çelik parçalar sıcaklıkla belirgin şekilde uzar; kaynak sonrası soğumadan ölçüm yapılmamalı, büyük parçalarda ölçüm sıcaklığı kaydedilmelidir.</li>
<li><strong>Destekleme:</strong> Uzun parçalar nasıl desteklendiğine göre sehim yapar; ölçüm sırasında destek noktaları belirtilmelidir.</li>
<li><strong>Kalibrasyon:</strong> Kullanılan aletlerin kalibrasyon durumu raporda görünmelidir.</li>
</ul>
<h2>Teklif Aşamasında Netleştirilecekler</h2>
<p>Hangi ölçülerin raporlanacağı, ilk numune ve seri için ölçüm sıklığı, yöntem şartı ve rapor formatı. 3D tarama veya lazer tracker gibi ek ölçümler maliyete etki eder.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Ölçüm raporlarını balonlu çizim üzerinden hazırlıyoruz. CMM, lazer tracker veya 3D tarama gereken işlerde ölçümü iş ortaklarımızla koordine ediyor ve gerekliliği teklif aşamasında belirtiyoruz. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['Ölçüm raporunda ne olmalı?', 'Balon numarası, nominal, tolerans, ölçülen değer, sonuç, alet ve kalibrasyon bilgisi.'],
      ['Lazer tracker ne zaman gerekir?', 'Metrelerce uzunluktaki parçalarda delik ve yüzeylerin göreceli konumu kritik olduğunda.'],
      ['Sıcaklık ölçümü etkiler mi?', 'Evet; uzun çelik parçalarda belirgin uzama olur, ölçüm sıcaklığı kaydedilmelidir.'],
      ['Seride her parça ölçülür mü?', 'Genellikle anlaşılan kritik ölçüler belirli sıklıkla ölçülür.']
    ],
    cta_h3: 'Ölçüm raporlu kaynaklı parça mı?',
    cta_p: 'Çizimleri ve rapor şartlarını gönderin; teklifimizi hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Dimensional Reports for Welded Parts: From Tape Measure to CMM and Laser Tracker',
    meta: 'How a dimensional report for welded parts and structures is prepared: ballooned drawing, measuring points, hand tools, CMM, measuring arm, laser tracker and 3D scanning. Which method for which part, measuring temperature and reference system.',
    og: 'Dimensional reports for welded parts',
    tag: 'Sourcing Guide · Quality',
    h1: 'Dimensional Reports for Welded Parts: From Tape Measure to CMM and Laser Tracker',
    crumb: 'Dimensional report',
    read: '7 min read',
    body: `
<p>On a welded part, dimensions are less exact than after cutting and bending because of weld distortion. Buyers therefore request dimensional reports at first article and through the series. A good report is more than a list of numbers: it shows what was measured, against which reference, with which tool and under which conditions.</p>
<h2>The Ballooned Drawing: Backbone of the Report</h2>
<p>Every dimension and geometric tolerance on the drawing is numbered (ballooned). The report follows the same numbers: nominal, tolerance, measured value, result. The buyer sees at a glance which dimension is close to the limit. At <a href="ilk-parca-onayi-kaynakli-imalat.html">first article approval</a> all dimensions are reported, in series the agreed critical ones.</p>
<h2>Methods</h2>
<ul>
<li><strong>Hand tools:</strong> calibrated tape, caliper, protractor, gauges, feelers. Sufficient for most welded parts, but limited for diagonals, flatness and hole positions on large parts.</li>
<li><strong>CMM:</strong> micron-level accuracy for parts that fit on the table, with machined faces and bores.</li>
<li><strong>Portable measuring arm:</strong> taken to the part; practical for hole positions and faces on medium-sized parts.</li>
<li><strong>Laser tracker:</strong> measures points over several metres with high accuracy on large chassis, booms, frames and structures. Used for relative positions of connection holes that are hard to verify by hand.</li>
<li><strong>3D scanning:</strong> captures the whole part as a point cloud and produces a colour deviation map against CAD. Ideal for seeing how distortion is distributed.</li>
</ul>
<h2>Which Method for Which Part?</h2>
<p>The choice follows tolerance and size. A frame drawn to <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> general tolerances can be checked with hand tools. A machine body with post-weld machined faces and tight positional tolerances needs CMM or an arm; a boom or chassis several metres long suits a laser tracker.</p>
<h2>Details Often Missed</h2>
<ul>
<li><strong>Reference system:</strong> measure against the drawing datums; otherwise the same part can give two results.</li>
<li><strong>Temperature:</strong> long steel parts expand noticeably; do not measure before cooling after welding and record the temperature for large parts.</li>
<li><strong>Support:</strong> long parts deflect depending on support; state support points during measurement.</li>
<li><strong>Calibration:</strong> the calibration status of tools should appear in the report.</li>
</ul>
<h2>What to Settle at Quotation</h2>
<p>Which dimensions are reported, measuring frequency for first article and series, method requirements and report format. Extra measurements such as 3D scanning or laser tracker affect cost.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> we prepare dimensional reports from a ballooned drawing. Where CMM, laser tracker or 3D scanning is needed, we coordinate the measurement with our partners and state the requirement at quotation. <a href="../cizime-gore-imalat.html">Build-to-print manufacturing →</a></p></div>
`,
    faq: [
      ['What belongs in a dimensional report?', 'Balloon number, nominal, tolerance, measured value, result, tool and calibration.'],
      ['When is a laser tracker needed?', 'When relative positions of holes and faces over several metres are critical.'],
      ['Does temperature matter?', 'Yes; long steel parts expand noticeably, so record the measuring temperature.'],
      ['Is every series part measured?', 'Usually agreed critical dimensions are measured at a set frequency.']
    ],
    cta_h3: 'Welded parts with dimensional reports?',
    cta_p: 'Send drawings and report requirements; we will prepare our quote.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Messprotokoll für Schweißteile: vom Maßband bis zu KMG und Lasertracker',
    meta: 'Wie ein Messprotokoll für Schweißteile und Stahlbauten entsteht: Ballonzeichnung, Messpunkte, Handmessmittel, KMG, Messarm, Lasertracker und 3D-Scan. Welches Verfahren für welches Teil, Messtemperatur und Bezugssystem.',
    og: 'Messprotokoll für Schweißteile',
    tag: 'Einkaufsleitfaden · Qualität',
    h1: 'Messprotokoll für Schweißteile: vom Maßband bis zu KMG und Lasertracker',
    crumb: 'Messprotokoll',
    read: '7 Min. Lesezeit',
    body: `
<p>Bei Schweißteilen sind die Maße wegen des Verzugs weniger exakt als nach dem Schneiden und Kanten. Einkäufer verlangen daher bei Erstmuster und in der Serie Messprotokolle. Ein gutes Protokoll ist mehr als eine Zahlenliste: Es zeigt, was gegen welchen Bezug, mit welchem Messmittel und unter welchen Bedingungen gemessen wurde.</p>
<h2>Die Ballonzeichnung: Rückgrat des Protokolls</h2>
<p>Jedes Maß und jede Form- und Lagetoleranz der Zeichnung wird nummeriert (geballont). Das Protokoll folgt diesen Nummern: Nennmaß, Toleranz, Istwert, Ergebnis. So sieht der Einkäufer sofort, welches Maß an der Grenze liegt. Bei der <a href="ilk-parca-onayi-kaynakli-imalat.html">Erstmusterprüfung</a> werden alle Maße protokolliert, in der Serie die vereinbarten kritischen.</p>
<h2>Verfahren</h2>
<ul>
<li><strong>Handmessmittel:</strong> kalibriertes Maßband, Messschieber, Winkelmesser, Lehren, Fühler. Für die meisten Schweißteile ausreichend, bei großen Teilen aber begrenzt für Diagonalen, Ebenheit und Bohrungslagen.</li>
<li><strong>KMG (Koordinatenmessgerät):</strong> Genauigkeit im Mikrometerbereich für Teile, die auf den Tisch passen, mit bearbeiteten Flächen und Bohrungen.</li>
<li><strong>Mobiler Messarm:</strong> wird zum Teil gebracht; praktisch für Bohrungslagen und Flächen an mittelgroßen Teilen.</li>
<li><strong>Lasertracker:</strong> misst bei großen Rahmen, Auslegern, Gestellen und Stahlbauten Punkte über mehrere Meter hochgenau – etwa die Lage von Anschlussbohrungen zueinander.</li>
<li><strong>3D-Scan:</strong> erfasst das ganze Teil als Punktwolke und erzeugt eine farbige Abweichungskarte zum CAD-Modell. Ideal, um die Verteilung des Verzugs zu sehen.</li>
</ul>
<h2>Welches Verfahren für welches Teil?</h2>
<p>Entscheidend sind Toleranz und Größe. Ein Rahmen mit Allgemeintoleranzen nach <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> lässt sich mit Handmessmitteln prüfen. Ein Maschinenkörper mit nach dem Schweißen bearbeiteten Flächen und engen Lagetoleranzen braucht KMG oder Messarm; ein mehrere Meter langer Ausleger oder Rahmen den Lasertracker.</p>
<h2>Oft übersehene Details</h2>
<ul>
<li><strong>Bezugssystem:</strong> gegen die Bezüge der Zeichnung messen; sonst liefert dasselbe Teil zwei Ergebnisse.</li>
<li><strong>Temperatur:</strong> lange Stahlteile dehnen sich merklich; nicht vor dem Abkühlen messen und bei großen Teilen die Temperatur dokumentieren.</li>
<li><strong>Auflage:</strong> lange Teile biegen sich je nach Auflage durch; Auflagepunkte angeben.</li>
<li><strong>Kalibrierung:</strong> der Kalibrierstatus der Messmittel gehört ins Protokoll.</li>
</ul>
<h2>Im Angebot zu klären</h2>
<p>Welche Maße protokolliert werden, Messhäufigkeit für Erstmuster und Serie, Verfahrensvorgaben und Protokollformat. Zusatzmessungen wie 3D-Scan oder Lasertracker beeinflussen die Kosten.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Messprotokolle erstellen wir auf Basis einer Ballonzeichnung. Wo KMG, Lasertracker oder 3D-Scan nötig sind, koordinieren wir die Messung mit Partnern und nennen das schon im Angebot. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Was gehört ins Messprotokoll?', 'Ballonnummer, Nennmaß, Toleranz, Istwert, Ergebnis, Messmittel und Kalibrierung.'],
      ['Wann braucht man einen Lasertracker?', 'Wenn die Lage von Bohrungen und Flächen über mehrere Meter kritisch ist.'],
      ['Spielt die Temperatur eine Rolle?', 'Ja; lange Stahlteile dehnen sich merklich, Messtemperatur dokumentieren.'],
      ['Wird jedes Serienteil gemessen?', 'Meist werden vereinbarte kritische Maße in festgelegter Häufigkeit gemessen.']
    ],
    cta_h3: 'Schweißteile mit Messprotokoll?',
    cta_p: 'Senden Sie Zeichnungen und Protokollanforderungen; wir erstellen unser Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Informe dimensional de piezas soldadas: del flexómetro a la MMC y el láser tracker',
    meta: 'Cómo se prepara un informe dimensional de piezas y estructuras soldadas: plano globado, puntos de medición, herramientas manuales, MMC, brazo de medición, láser tracker y escaneo 3D. Qué método para qué pieza, temperatura y sistema de referencia.',
    og: 'Informe dimensional de piezas soldadas',
    tag: 'Guía de compras · Calidad',
    h1: 'Informe dimensional de piezas soldadas: del flexómetro a la MMC y el láser tracker',
    crumb: 'Informe dimensional',
    read: '7 min de lectura',
    body: `
<p>En una pieza soldada las cotas son menos exactas que tras el corte y el plegado, por la distorsión. Por eso los compradores piden informes dimensionales en la primera muestra y durante la serie. Un buen informe no es solo una lista de cifras: muestra qué se midió, respecto a qué referencia, con qué instrumento y en qué condiciones.</p>
<h2>El plano globado: columna del informe</h2>
<p>Cada cota y tolerancia geométrica del plano se numera (se globa). El informe sigue esos números: nominal, tolerancia, valor medido, resultado. El comprador ve de un vistazo qué cota está al límite. En la <a href="ilk-parca-onayi-kaynakli-imalat.html">aprobación de primera pieza</a> se informan todas; en serie, las críticas acordadas.</p>
<h2>Métodos</h2>
<ul>
<li><strong>Herramientas manuales:</strong> flexómetro calibrado, calibre, goniómetro, galgas. Suficientes para la mayoría de piezas soldadas, pero limitadas en diagonales, planitud y posición de taladros en piezas grandes.</li>
<li><strong>MMC:</strong> precisión de micras para piezas que caben en la mesa, con caras y taladros mecanizados.</li>
<li><strong>Brazo de medición portátil:</strong> se lleva a la pieza; práctico para taladros y caras en piezas medianas.</li>
<li><strong>Láser tracker:</strong> mide puntos a varios metros con alta precisión en chasis, plumas, bastidores y estructuras grandes; útil para la posición relativa de taladros de unión.</li>
<li><strong>Escaneo 3D:</strong> captura la pieza entera como nube de puntos y genera un mapa de desviaciones en color frente al CAD. Ideal para ver cómo se reparte la distorsión.</li>
</ul>
<h2>¿Qué método para qué pieza?</h2>
<p>Depende de tolerancia y tamaño. Un bastidor con tolerancias generales <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> se controla con herramientas manuales. Un cuerpo de máquina con caras mecanizadas tras soldar y tolerancias de posición estrechas pide MMC o brazo; una pluma o chasis de varios metros, láser tracker.</p>
<h2>Detalles que se olvidan</h2>
<ul>
<li><strong>Sistema de referencia:</strong> medir respecto a los datums del plano; si no, la misma pieza da dos resultados.</li>
<li><strong>Temperatura:</strong> las piezas largas de acero dilatan notablemente; no medir antes de enfriar y anotar la temperatura en piezas grandes.</li>
<li><strong>Apoyo:</strong> las piezas largas flectan según cómo se apoyen; indicar los apoyos.</li>
<li><strong>Calibración:</strong> el estado de calibración debe figurar en el informe.</li>
</ul>
<h2>Qué acordar en la oferta</h2>
<p>Qué cotas se informan, frecuencia en primera muestra y serie, requisitos de método y formato. Mediciones extra como escaneo 3D o láser tracker influyen en el coste.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> preparamos los informes dimensionales a partir de un plano globado. Cuando hace falta MMC, láser tracker o escaneo 3D, coordinamos la medición con socios y lo indicamos en la oferta. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Qué debe incluir el informe?', 'Número de globo, nominal, tolerancia, valor medido, resultado, instrumento y calibración.'],
      ['¿Cuándo hace falta láser tracker?', 'Cuando es crítica la posición relativa de taladros y caras a varios metros.'],
      ['¿Influye la temperatura?', 'Sí; el acero largo dilata notablemente, hay que registrar la temperatura.'],
      ['¿Se mide cada pieza de serie?', 'Normalmente se miden cotas críticas acordadas con una frecuencia fijada.']
    ],
    cta_h3: '¿Piezas soldadas con informe dimensional?',
    cta_p: 'Envíe planos y requisitos de informe; prepararemos la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Rapport dimensionnel des pièces soudées : du mètre ruban à la MMT et au laser tracker',
    meta: 'Comment établir un rapport dimensionnel pour pièces et structures soudées : plan bullé, points de mesure, outils manuels, MMT, bras de mesure, laser tracker et scan 3D. Quelle méthode pour quelle pièce, température et système de référence.',
    og: 'Rapport dimensionnel des pièces soudées',
    tag: 'Guide achats · Qualité',
    h1: 'Rapport dimensionnel des pièces soudées : du mètre ruban à la MMT et au laser tracker',
    crumb: 'Rapport dimensionnel',
    read: '7 min de lecture',
    body: `
<p>Sur une pièce soudée, les cotes sont moins exactes qu'après découpe et pliage, à cause des déformations. Les acheteurs demandent donc un rapport dimensionnel à l'échantillon initial et pendant la série. Un bon rapport n'est pas qu'une liste de chiffres : il montre ce qui a été mesuré, par rapport à quelle référence, avec quel instrument et dans quelles conditions.</p>
<h2>Le plan bullé : colonne vertébrale du rapport</h2>
<p>Chaque cote et tolérance géométrique du plan est numérotée (bullée). Le rapport suit ces numéros : nominal, tolérance, valeur mesurée, résultat. L'acheteur voit d'un coup d'œil quelle cote est en limite. À l'<a href="ilk-parca-onayi-kaynakli-imalat.html">approbation de première pièce</a>, toutes les cotes ; en série, les cotes critiques convenues.</p>
<h2>Méthodes</h2>
<ul>
<li><strong>Outils manuels :</strong> mètre étalonné, pied à coulisse, rapporteur, calibres, cales. Suffisants pour la plupart des pièces soudées, mais limités pour diagonales, planéité et positions de trous sur grandes pièces.</li>
<li><strong>MMT :</strong> précision au micron pour pièces tenant sur la table, avec faces et alésages usinés.</li>
<li><strong>Bras de mesure portable :</strong> amené à la pièce ; pratique pour trous et faces sur pièces moyennes.</li>
<li><strong>Laser tracker :</strong> mesure des points sur plusieurs mètres avec grande précision sur châssis, flèches, bâtis et structures ; idéal pour la position relative des trous de liaison.</li>
<li><strong>Scan 3D :</strong> capture toute la pièce en nuage de points et produit une carte d'écarts colorée par rapport à la CAO. Idéal pour voir la répartition des déformations.</li>
</ul>
<h2>Quelle méthode pour quelle pièce ?</h2>
<p>Selon tolérance et taille. Un cadre aux tolérances générales <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> se contrôle aux outils manuels. Un bâti de machine aux faces usinées après soudage et tolérances de position serrées demande MMT ou bras ; une flèche ou un châssis de plusieurs mètres, le laser tracker.</p>
<h2>Détails souvent oubliés</h2>
<ul>
<li><strong>Système de référence :</strong> mesurer selon les références du plan ; sinon une même pièce donne deux résultats.</li>
<li><strong>Température :</strong> les pièces longues en acier se dilatent nettement ; ne pas mesurer avant refroidissement et noter la température pour les grandes pièces.</li>
<li><strong>Appuis :</strong> les pièces longues fléchissent selon leurs appuis ; les préciser.</li>
<li><strong>Étalonnage :</strong> l'état d'étalonnage des instruments doit figurer au rapport.</li>
</ul>
<h2>À fixer au devis</h2>
<p>Cotes à rapporter, fréquence de mesure en échantillon initial et en série, exigences de méthode et format. Les mesures supplémentaires (scan 3D, laser tracker) influent sur le coût.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous établissons les rapports dimensionnels à partir d'un plan bullé. Lorsque MMT, laser tracker ou scan 3D sont nécessaires, nous coordonnons la mesure avec nos partenaires et l'indiquons dès le devis. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Que contient un rapport dimensionnel ?', 'Numéro de bulle, nominal, tolérance, valeur mesurée, résultat, instrument et étalonnage.'],
      ['Quand faut-il un laser tracker ?', 'Quand la position relative de trous et faces sur plusieurs mètres est critique.'],
      ['La température compte-t-elle ?', 'Oui ; l\'acier long se dilate nettement, noter la température.'],
      ['Mesure-t-on chaque pièce de série ?', 'En général, les cotes critiques convenues à une fréquence fixée.']
    ],
    cta_h3: 'Pièces soudées avec rapport dimensionnel ?',
    cta_p: 'Envoyez plans et exigences de rapport ; nous préparerons notre devis.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Rapporto dimensionale per pezzi saldati: dal metro a nastro a CMM e laser tracker',
    meta: 'Come si prepara un rapporto dimensionale per pezzi e strutture saldate: disegno con balloon, punti di misura, strumenti manuali, CMM, braccio di misura, laser tracker e scansione 3D. Quale metodo per quale pezzo, temperatura e sistema di riferimento.',
    og: 'Rapporto dimensionale per pezzi saldati',
    tag: 'Guida acquisti · Qualità',
    h1: 'Rapporto dimensionale per pezzi saldati: dal metro a nastro a CMM e laser tracker',
    crumb: 'Rapporto dimensionale',
    read: '7 min di lettura',
    body: `
<p>In un pezzo saldato le quote sono meno esatte che dopo taglio e piegatura, a causa delle deformazioni. Per questo gli acquirenti chiedono un rapporto dimensionale sul primo campione e durante la serie. Un buon rapporto non è solo un elenco di numeri: mostra cosa è stato misurato, rispetto a quale riferimento, con quale strumento e in quali condizioni.</p>
<h2>Il disegno con balloon: spina dorsale del rapporto</h2>
<p>Ogni quota e tolleranza geometrica del disegno viene numerata (balloon). Il rapporto segue gli stessi numeri: nominale, tolleranza, valore misurato, esito. L'acquirente vede subito quale quota è al limite. All'<a href="ilk-parca-onayi-kaynakli-imalat.html">approvazione del primo pezzo</a> si riportano tutte, in serie quelle critiche concordate.</p>
<h2>Metodi</h2>
<ul>
<li><strong>Strumenti manuali:</strong> metro tarato, calibro, goniometro, calibri, spessimetri. Sufficienti per la maggior parte dei pezzi saldati, ma limitati per diagonali, planarità e posizioni dei fori su pezzi grandi.</li>
<li><strong>CMM:</strong> precisione micrometrica per pezzi che stanno sul banco, con facce e fori lavorati.</li>
<li><strong>Braccio di misura portatile:</strong> si porta al pezzo; pratico per fori e facce su pezzi medi.</li>
<li><strong>Laser tracker:</strong> misura punti su più metri con alta precisione su telai, bracci, basamenti e strutture grandi; utile per la posizione relativa dei fori di collegamento.</li>
<li><strong>Scansione 3D:</strong> acquisisce l'intero pezzo come nuvola di punti e produce una mappa colorata degli scostamenti dal CAD. Ideale per vedere la distribuzione delle deformazioni.</li>
</ul>
<h2>Quale metodo per quale pezzo?</h2>
<p>Dipende da tolleranza e dimensioni. Un telaio con tolleranze generali <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> si controlla con strumenti manuali. Un corpo macchina con facce lavorate dopo saldatura e tolleranze di posizione strette richiede CMM o braccio; un braccio o telaio lungo diversi metri, il laser tracker.</p>
<h2>Dettagli spesso trascurati</h2>
<ul>
<li><strong>Sistema di riferimento:</strong> misurare rispetto ai riferimenti del disegno; altrimenti lo stesso pezzo dà due risultati.</li>
<li><strong>Temperatura:</strong> i pezzi lunghi in acciaio si dilatano sensibilmente; non misurare prima del raffreddamento e annotare la temperatura sui pezzi grandi.</li>
<li><strong>Appoggi:</strong> i pezzi lunghi flettono secondo gli appoggi; indicarli.</li>
<li><strong>Taratura:</strong> lo stato di taratura degli strumenti va riportato.</li>
</ul>
<h2>Cosa definire in offerta</h2>
<p>Quali quote riportare, frequenza di misura su primo campione e serie, requisiti di metodo e formato. Misure aggiuntive come scansione 3D o laser tracker incidono sul costo.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> prepariamo i rapporti dimensionali partendo da un disegno con balloon. Quando servono CMM, laser tracker o scansione 3D, coordiniamo la misura con i partner e lo indichiamo già in offerta. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Cosa contiene un rapporto dimensionale?', 'Numero balloon, nominale, tolleranza, valore misurato, esito, strumento e taratura.'],
      ['Quando serve il laser tracker?', 'Quando è critica la posizione relativa di fori e facce su più metri.'],
      ['La temperatura conta?', 'Sì; l\'acciaio lungo si dilata sensibilmente, va annotata la temperatura.'],
      ['Si misura ogni pezzo di serie?', 'Di solito si misurano le quote critiche concordate con una frequenza stabilita.']
    ],
    cta_h3: 'Pezzi saldati con rapporto dimensionale?',
    cta_p: 'Inviate disegni e requisiti di rapporto; prepareremo l\'offerta.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Meetrapport voor laswerk: van rolmaat tot CMM en lasertracker',
    meta: 'Hoe een meetrapport voor gelaste delen en constructies wordt opgesteld: ballontekening, meetpunten, handmeetmiddelen, CMM, meetarm, lasertracker en 3D-scan. Welke methode voor welk deel, meettemperatuur en referentiesysteem.',
    og: 'Meetrapport voor laswerk',
    tag: 'Inkoopgids · Kwaliteit',
    h1: 'Meetrapport voor laswerk: van rolmaat tot CMM en lasertracker',
    crumb: 'Meetrapport',
    read: '7 min lezen',
    body: `
<p>Bij een gelast deel zijn de maten door lasvervorming minder exact dan na snijden en zetten. Inkopers vragen daarom meetrapporten bij het eerste monster en tijdens de serie. Een goed rapport is meer dan een lijst getallen: het laat zien wat gemeten is, ten opzichte van welke referentie, met welk meetmiddel en onder welke omstandigheden.</p>
<h2>De ballontekening: ruggengraat van het rapport</h2>
<p>Elke maat en vorm- en plaatstolerantie op de tekening wordt genummerd (geballond). Het rapport volgt dezelfde nummers: nominaal, tolerantie, gemeten waarde, resultaat. Zo ziet de inkoper direct welke maat tegen de grens zit. Bij de <a href="ilk-parca-onayi-kaynakli-imalat.html">eerste-artikelgoedkeuring</a> worden alle maten gerapporteerd, in serie de afgesproken kritische.</p>
<h2>Methoden</h2>
<ul>
<li><strong>Handmeetmiddelen:</strong> gekalibreerde rolmaat, schuifmaat, hoekmeter, kalibers, voelers. Voldoende voor het meeste laswerk, maar beperkt voor diagonalen, vlakheid en gatposities bij grote delen.</li>
<li><strong>CMM:</strong> nauwkeurigheid op micronniveau voor delen die op de tafel passen, met bewerkte vlakken en boringen.</li>
<li><strong>Draagbare meetarm:</strong> wordt naar het deel gebracht; praktisch voor gaten en vlakken op middelgrote delen.</li>
<li><strong>Lasertracker:</strong> meet punten over meerdere meters zeer nauwkeurig op grote chassis, gieken, frames en constructies; voor de onderlinge positie van verbindingsgaten.</li>
<li><strong>3D-scan:</strong> legt het hele deel vast als puntenwolk en maakt een gekleurde afwijkingskaart t.o.v. CAD. Ideaal om de verdeling van vervorming te zien.</li>
</ul>
<h2>Welke methode voor welk deel?</h2>
<p>Dat hangt af van tolerantie en afmeting. Een frame met algemene toleranties volgens <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> kan met handmeetmiddelen. Een machinebehuizing met na het lassen bewerkte vlakken en krappe plaatstoleranties vraagt CMM of meetarm; een giek of chassis van meerdere meters een lasertracker.</p>
<h2>Vaak vergeten details</h2>
<ul>
<li><strong>Referentiesysteem:</strong> meten t.o.v. de referenties op de tekening; anders geeft hetzelfde deel twee uitkomsten.</li>
<li><strong>Temperatuur:</strong> lange stalen delen zetten merkbaar uit; niet meten vóór afkoeling en bij grote delen de temperatuur vastleggen.</li>
<li><strong>Ondersteuning:</strong> lange delen buigen door afhankelijk van de ondersteuning; steunpunten vermelden.</li>
<li><strong>Kalibratie:</strong> de kalibratiestatus van meetmiddelen hoort in het rapport.</li>
</ul>
<h2>Vast te leggen in de offerte</h2>
<p>Welke maten gerapporteerd worden, meetfrequentie bij eerste monster en serie, methode-eisen en rapportformaat. Extra metingen zoals 3D-scan of lasertracker beïnvloeden de kosten.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> we stellen meetrapporten op aan de hand van een ballontekening. Waar CMM, lasertracker of 3D-scan nodig is, coördineren we de meting met partners en vermelden we dat al in de offerte. <a href="../cizime-gore-imalat.html">Productie volgens tekening →</a></p></div>
`,
    faq: [
      ['Wat hoort in een meetrapport?', 'Ballonnummer, nominaal, tolerantie, gemeten waarde, resultaat, meetmiddel en kalibratie.'],
      ['Wanneer een lasertracker?', 'Als de onderlinge positie van gaten en vlakken over meerdere meters kritisch is.'],
      ['Speelt temperatuur mee?', 'Ja; lang staal zet merkbaar uit, meettemperatuur vastleggen.'],
      ['Wordt elk seriedeel gemeten?', 'Meestal worden afgesproken kritische maten met vaste frequentie gemeten.']
    ],
    cta_h3: 'Laswerk met meetrapport?',
    cta_p: 'Stuur tekeningen en rapporteisen; we stellen een offerte op.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Målerapport for sveisedeler: fra målebånd til CMM og lasertracker',
    meta: 'Slik lages en målerapport for sveisede deler og konstruksjoner: ballongtegning, målepunkter, håndverktøy, CMM, målearm, lasertracker og 3D-skanning. Hvilken metode for hvilken del, måletemperatur og referansesystem.',
    og: 'Målerapport for sveisedeler',
    tag: 'Innkjøpsguide · Kvalitet',
    h1: 'Målerapport for sveisedeler: fra målebånd til CMM og lasertracker',
    crumb: 'Målerapport',
    read: '7 min lesing',
    body: `
<p>På en sveiset del er målene mindre nøyaktige enn etter kutting og bøying, på grunn av sveisedeformasjon. Innkjøpere ber derfor om målerapporter ved førsteartikkel og gjennom serien. En god rapport er mer enn en liste med tall: den viser hva som er målt, mot hvilken referanse, med hvilket verktøy og under hvilke forhold.</p>
<h2>Ballongtegningen: rapportens ryggrad</h2>
<p>Hvert mål og hver geometriske toleranse på tegningen nummereres (ballongmerkes). Rapporten følger de samme numrene: nominelt, toleranse, målt verdi, resultat. Innkjøper ser straks hvilket mål som ligger nær grensen. Ved <a href="ilk-parca-onayi-kaynakli-imalat.html">førsteartikkelgodkjenning</a> rapporteres alle mål, i serie de avtalte kritiske.</p>
<h2>Metoder</h2>
<ul>
<li><strong>Håndverktøy:</strong> kalibrert målebånd, skyvelære, vinkelmåler, lærer, søkere. Nok for de fleste sveisedeler, men begrenset for diagonaler, planhet og hullposisjoner på store deler.</li>
<li><strong>CMM:</strong> mikronnøyaktighet for deler som får plass på bordet, med maskinerte flater og boringer.</li>
<li><strong>Bærbar målearm:</strong> tas med til delen; praktisk for hull og flater på mellomstore deler.</li>
<li><strong>Lasertracker:</strong> måler punkter over flere meter med høy nøyaktighet på store chassis, bommer, rammer og konstruksjoner; for innbyrdes posisjon av forbindelseshull.</li>
<li><strong>3D-skanning:</strong> fanger hele delen som punktsky og lager et fargekart over avvik mot CAD. Ideelt for å se hvordan deformasjonen fordeler seg.</li>
</ul>
<h2>Hvilken metode for hvilken del?</h2>
<p>Valget følger toleranse og størrelse. En ramme med generelle toleranser etter <a href="iso-13920-kaynakli-imalat-tolerans-tablosu.html">ISO 13920</a> kan kontrolleres med håndverktøy. Et maskinhus med flater maskinert etter sveising og stramme posisjonstoleranser trenger CMM eller målearm; en bom eller et chassis på flere meter passer for lasertracker.</p>
<h2>Detaljer som ofte glemmes</h2>
<ul>
<li><strong>Referansesystem:</strong> mål mot tegningens referanser; ellers kan samme del gi to resultater.</li>
<li><strong>Temperatur:</strong> lange ståldeler utvider seg merkbart; ikke mål før delen er avkjølt, og registrer temperaturen på store deler.</li>
<li><strong>Understøttelse:</strong> lange deler bøyer seg avhengig av opplegg; angi støttepunktene.</li>
<li><strong>Kalibrering:</strong> verktøyenes kalibreringsstatus skal fremgå av rapporten.</li>
</ul>
<h2>Hva som avklares i tilbudet</h2>
<p>Hvilke mål som rapporteres, målefrekvens for førsteartikkel og serie, metodekrav og rapportformat. Ekstra målinger som 3D-skanning eller lasertracker påvirker kostnaden.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> vi lager målerapporter ut fra en ballongtegning. Der CMM, lasertracker eller 3D-skanning trengs, koordinerer vi målingen med partnere og oppgir det allerede i tilbudet. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hva skal stå i en målerapport?', 'Ballongnummer, nominelt, toleranse, målt verdi, resultat, verktøy og kalibrering.'],
      ['Når trengs lasertracker?', 'Når innbyrdes posisjon av hull og flater over flere meter er kritisk.'],
      ['Betyr temperaturen noe?', 'Ja; langt stål utvider seg merkbart, så måletemperaturen registreres.'],
      ['Måles hver seriedel?', 'Vanligvis måles avtalte kritiske mål med fast frekvens.']
    ],
    cta_h3: 'Sveisedeler med målerapport?',
    cta_p: 'Send tegninger og rapportkrav; vi utarbeider tilbud.',
    cta_btn: 'Be om tilbud →'
  }
};
