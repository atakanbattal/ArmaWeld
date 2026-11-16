export default {
  order: 43,
  slug: 'prototip-mi-seri-uretim-mi-kaynakli-parca',
  key: 'p43_proto',
  date: '2026-08-03',
  keywords: 'prototip kaynaklı imalat, prototip üretim, sıfır seri, pilot üretim, seri üretime geçiş, imalata uygun tasarım, DFM kaynak, prototip fiyatı neden yüksek, welded prototype, Prototypenfertigung Schweißteile, Nullserie',
  related: ['kaynak-fiksturu-tasarimi-seri-uretim', 'ilk-parca-onayi-kaynakli-imalat', 'maliyet-optimizasyon', 'kaynakli-imalat-fiyati'],
  tr: {
    title: 'Prototipten Seri Üretime Kaynaklı Parça: Hangi Aşamada Ne Değişir?',
    meta: 'Kaynaklı parçada prototip, sıfır seri ve seri üretim arasındaki farklar: prototip neden pahalıdır, imalata uygun tasarım geri bildirimi, fikstür ve WPS kararları, ilk parça onayı, parti büyüklüğü ve seriye geçerken çizimde sabitlenmesi gerekenler.',
    og: 'Prototipten Seri Üretime',
    tag: 'Üretim · Planlama',
    h1: 'Prototipten Seri Üretime Kaynaklı Parça: Hangi Aşamada Ne Değişir?',
    crumb: 'Prototip ve Seri',
    read: '7 dk okuma',
    body: `
<p>Yeni bir makine veya ekipman geliştiren firmalar kaynaklı parçalarını genellikle üç aşamada ister: birkaç adet prototip, küçük bir sıfır seri (pilot parti) ve ardından seri üretim. Her aşamanın amacı, maliyet yapısı ve tedarikçiden beklentisi farklıdır. Bu farkları baştan bilmek, hem fiyat tartışmalarını hem de seriye geçişteki sürprizleri azaltır.</p>
<h2>Prototip: Tasarımı Doğrulamak</h2>
<p>Prototipin amacı, parçanın çizimdeki haliyle yapılabildiğini, montajda oturduğunu ve işlevini yerine getirdiğini görmektir. Bu aşamada:</p>
<ul>
<li>Kesim programları, büküm ayarları ve kaynak sırası ilk kez hazırlanır.</li>
<li>Fikstür yoktur veya basit, geçici bağlama elemanları kullanılır.</li>
<li>Ölçü kontrolü daha sık ve elle yapılır.</li>
<li>Çizimde eksikler veya çelişkiler sıkça çıkar ve tedarikçiyle birlikte netleştirilir.</li>
</ul>
<h3>Prototip neden pahalıdır?</h3>
<p>Hazırlık maliyeti (programlama, ayar, ilk parça kontrolü, çizim sorularının çözümü) adet sayısına bölünemez. Seri üretimde bu maliyet yüzlerce parçaya dağılırken prototipte birkaç parçaya yüklenir. Ayrıca prototipte kaynakçı her adımı ilk kez yapar; çarpılma ve doğrultma gibi işler daha fazla zaman alır. Prototip fiyatını seri fiyatıyla karşılaştırmak bu nedenle yanıltıcıdır.</p>
<h2>İmalata Uygun Tasarım Geri Bildirimi</h2>
<p>Prototip, imalatçının tasarıma katkı verebileceği en değerli andır. Tipik geri bildirimler:</p>
<ul>
<li>Kaynak erişimi olmayan veya pozisyonu zor dikişler,</li>
<li>Gereğinden büyük kaynak ölçüleri (bkz. <a href="kose-kaynagi-a-olcusu.html">köşe kaynağı a ölçüsü</a>),</li>
<li>Kaynaktan sonra tutması zor toleranslar; talaşlı işlemenin kaynaktan sonraya alınması önerisi,</li>
<li>Standart sac kalınlıkları ve profil ölçülerine geçerek malzeme maliyetinin düşürülmesi,</li>
<li>Parça sayısını azaltan büküm çözümleri.</li>
</ul>
<p>Bu öneriler, seri üretime geçmeden çizime işlendiğinde parça başı maliyet ve kalite riski kalıcı olarak düşer.</p>
<h2>Sıfır Seri (Pilot Parti): Süreci Doğrulamak</h2>
<p>Tasarım donduktan sonra küçük bir parti, seri üretimde kullanılacak süreçle yapılır. Amaç artık tasarımı değil, süreci doğrulamaktır:</p>
<ul>
<li>Fikstür devreye alınır ve ölçü tekrarlanabilirliği kontrol edilir (bkz. <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">fikstür tasarımı</a>).</li>
<li>WPS’ler ve kaynak parametreleri sabitlenir.</li>
<li>Çevrim süreleri ölçülür; seri fiyatı bu verilere göre kesinleşir.</li>
<li>İlk parça onayı (FAI) veya müşteri onayı bu partiden alınır (bkz. <a href="ilk-parca-onayi-kaynakli-imalat.html">ilk parça onayı</a>).</li>
</ul>
<h2>Seri Üretim: Tekrarlanabilirlik</h2>
<p>Seri üretimde hedef, her parçanın aynı olmasıdır. Bunun için:</p>
<ul>
<li>Çizim revizyonu sabitlenir; değişiklikler yazılı değişiklik süreciyle yapılır.</li>
<li>Muayene planı standartlaşır: hangi ölçülerin her parçada, hangilerinin örneklemeyle kontrol edileceği belirlenir.</li>
<li>Malzeme tedariki parti büyüklüğüne göre planlanır; sac yerleşimi (nesting) birden fazla parçayla optimize edilir.</li>
<li>Parti büyüklüğü, hazırlık maliyeti ile stok maliyeti arasında dengelenir.</li>
</ul>
<h2>Aşamalara Göre Karşılaştırma</h2>
<table>
<thead><tr><th></th><th>Prototip</th><th>Sıfır seri</th><th>Seri</th></tr></thead>
<tbody>
<tr><td>Amaç</td><td>Tasarımı doğrulamak</td><td>Süreci doğrulamak</td><td>Tekrarlanabilir üretim</td></tr>
<tr><td>Fikstür</td><td>Yok veya geçici</td><td>Seri fikstürü</td><td>Seri fikstürü</td></tr>
<tr><td>Çizim</td><td>Değişebilir</td><td>Donmuş</td><td>Revizyon kontrollü</td></tr>
<tr><td>Parça başı maliyet</td><td>En yüksek</td><td>Orta</td><td>En düşük</td></tr>
<tr><td>Muayene</td><td>%100, detaylı</td><td>%100 + FAI</td><td>Plana göre</td></tr>
</tbody>
</table>
<h2>Seriye Geçerken Sık Yapılan Hatalar</h2>
<ul>
<li>Prototipte yapılan elle düzeltmelerin çizime işlenmemesi.</li>
<li>Prototip fiyatının seri fiyatı sanılması veya tersine seri fiyatıyla prototip istenmesi.</li>
<li>Fikstür yatırımının kimde olacağının konuşulmaması.</li>
<li>Sıfır seri atlanıp doğrudan büyük partiye geçilmesi; bir ölçü hatası tüm partiye yayılır.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Prototip aşamasında çizimi kaynak ve imalat açısından birlikte gözden geçirir, önerilerimizi yazılı veririz. Seriye geçişte fikstür, WPS ve muayene planını sabitler, ilk parti için ilk parça onay dosyası hazırlarız. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['Prototip neden seri parçadan pahalıdır?', 'Programlama, ayar, ilk kontrol ve çizim sorularının çözümü gibi hazırlık maliyetleri birkaç parçaya yüklenir; seri üretimde bu maliyet yüzlerce parçaya dağılır.'],
      ['Sıfır seri nedir?', 'Tasarım donduktan sonra seri süreçle yapılan küçük bir pilot partidir; fikstür, WPS ve çevrim süresi burada doğrulanır.'],
      ['Prototipte fikstür gerekir mi?', 'Genellikle hayır; geçici bağlama yeterlidir. Seri fikstürü tasarım donduktan sonra yapılır.'],
      ['Seriye geçmeden ne sabitlenmeli?', 'Çizim revizyonu, kaynak ölçüleri, toleranslar, WPS’ler, muayene planı ve fikstür sahipliği.']
    ],
    cta_h3: 'Prototipten seriye tek tedarikçiyle',
    cta_p: 'Çiziminizi gönderin; prototip ve seri için ayrı ayrı fiyatlandırılmış bir teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'From Prototype to Series Production of Welded Parts: What Changes at Each Stage?',
    meta: 'Differences between prototype, pilot batch and series production of welded parts: why prototypes cost more, design-for-manufacture feedback, fixture and WPS decisions, first article approval, batch size and what to freeze on the drawing before series.',
    og: 'From Prototype to Series',
    tag: 'Production · Planning',
    h1: 'From Prototype to Series Production of Welded Parts: What Changes at Each Stage?',
    crumb: 'Prototype and Series',
    read: '7 min read',
    body: `
<p>Companies developing a new machine or piece of equipment usually order welded parts in three stages: a few prototypes, a small pilot batch (zero series) and then series production. Each stage has a different goal, cost structure and expectation of the supplier. Knowing these differences early reduces price arguments and surprises in the transition to series.</p>
<h2>Prototype: Validating the Design</h2>
<p>The prototype shows that the part can be made as drawn, fits in assembly and does its job. At this stage:</p>
<ul>
<li>Cutting programs, bending set-ups and weld sequence are prepared for the first time.</li>
<li>There is no fixture, or only simple temporary clamping.</li>
<li>Dimensional checks are more frequent and manual.</li>
<li>Gaps or contradictions in the drawing often appear and are resolved with the supplier.</li>
</ul>
<h3>Why are prototypes expensive?</h3>
<p>Set-up costs (programming, adjustment, first-part inspection, resolving drawing questions) cannot be divided by quantity. In series they spread over hundreds of parts; in a prototype they land on a few. The welder also does every step for the first time, so distortion and straightening take longer. Comparing prototype and series prices is therefore misleading.</p>
<h2>Design-for-Manufacture Feedback</h2>
<p>The prototype is the most valuable moment for the fabricator to contribute to the design. Typical feedback:</p>
<ul>
<li>Welds with no access or awkward positions,</li>
<li>Weld sizes larger than needed (see <a href="kose-kaynagi-a-olcusu.html">fillet weld throat</a>),</li>
<li>Tolerances hard to hold after welding; suggestions to machine after welding,</li>
<li>Switching to standard sheet thicknesses and section sizes to lower material cost,</li>
<li>Bending solutions that reduce part count.</li>
</ul>
<p>When these suggestions go into the drawing before series, cost per part and quality risk drop permanently.</p>
<h2>Pilot Batch: Validating the Process</h2>
<p>Once the design is frozen, a small batch is made with the series process. The goal is no longer to validate the design but the process:</p>
<ul>
<li>The fixture is commissioned and dimensional repeatability checked (see <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">fixture design</a>).</li>
<li>WPSs and welding parameters are fixed.</li>
<li>Cycle times are measured; the series price is finalised on this data.</li>
<li>First article inspection (FAI) or customer approval comes from this batch (see <a href="ilk-parca-onayi-kaynakli-imalat.html">first article approval</a>).</li>
</ul>
<h2>Series Production: Repeatability</h2>
<p>In series, the goal is that every part is the same. For that:</p>
<ul>
<li>The drawing revision is frozen; changes go through a written change process.</li>
<li>The inspection plan is standardised: which dimensions on every part and which by sampling.</li>
<li>Material is planned by batch size; nesting is optimised across several parts.</li>
<li>Batch size balances set-up cost against inventory cost.</li>
</ul>
<h2>Stage-by-Stage Comparison</h2>
<table>
<thead><tr><th></th><th>Prototype</th><th>Pilot batch</th><th>Series</th></tr></thead>
<tbody>
<tr><td>Goal</td><td>Validate design</td><td>Validate process</td><td>Repeatable production</td></tr>
<tr><td>Fixture</td><td>None or temporary</td><td>Series fixture</td><td>Series fixture</td></tr>
<tr><td>Drawing</td><td>May change</td><td>Frozen</td><td>Revision-controlled</td></tr>
<tr><td>Cost per part</td><td>Highest</td><td>Medium</td><td>Lowest</td></tr>
<tr><td>Inspection</td><td>100%, detailed</td><td>100% + FAI</td><td>Per plan</td></tr>
</tbody>
</table>
<h2>Common Mistakes When Moving to Series</h2>
<ul>
<li>Manual corrections made on the prototype never reach the drawing.</li>
<li>Prototype price mistaken for series price, or prototypes requested at series price.</li>
<li>No discussion of who pays for the fixture.</li>
<li>Skipping the pilot batch and going straight to a large batch; one dimensional error spreads through the whole lot.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> at prototype stage we review the drawing with you from a welding and fabrication point of view and give our suggestions in writing. At the move to series we fix the fixture, WPS and inspection plan and prepare a first article file for the first batch. <a href="../cizime-gore-imalat.html">Build-to-print fabrication →</a></p></div>
`,
    faq: [
      ['Why is a prototype more expensive than a series part?', 'Set-up costs such as programming, adjustment, first inspection and resolving drawing questions fall on a few parts; in series they spread over hundreds.'],
      ['What is a pilot batch?', 'A small batch made with the series process after design freeze; fixture, WPS and cycle time are validated here.'],
      ['Do prototypes need a fixture?', 'Usually not; temporary clamping is enough. The series fixture is built after the design is frozen.'],
      ['What must be frozen before series?', 'Drawing revision, weld sizes, tolerances, WPSs, inspection plan and fixture ownership.']
    ],
    cta_h3: 'From prototype to series with one supplier',
    cta_p: 'Send your drawing; we will quote prototype and series prices separately.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Vom Prototyp zur Serie bei Schweißteilen: Was ändert sich in welcher Phase?',
    meta: 'Unterschiede zwischen Prototyp, Nullserie und Serienfertigung von Schweißteilen: warum Prototypen teurer sind, fertigungsgerechte Konstruktion, Vorrichtungs- und WPS-Entscheidungen, Erstmusterfreigabe, Losgröße und was vor der Serie auf der Zeichnung festgelegt sein muss.',
    og: 'Vom Prototyp zur Serie',
    tag: 'Fertigung · Planung',
    h1: 'Vom Prototyp zur Serie bei Schweißteilen: Was ändert sich in welcher Phase?',
    crumb: 'Prototyp und Serie',
    read: '7 Min. Lesezeit',
    body: `
<p>Unternehmen, die eine neue Maschine oder Anlage entwickeln, bestellen Schweißteile meist in drei Stufen: einige Prototypen, eine kleine Nullserie und dann die Serie. Jede Stufe hat ein anderes Ziel, eine andere Kostenstruktur und andere Erwartungen an den Lieferanten. Wer diese Unterschiede kennt, vermeidet Preisdiskussionen und Überraschungen beim Serienanlauf.</p>
<h2>Prototyp: die Konstruktion prüfen</h2>
<p>Der Prototyp zeigt, ob das Teil wie gezeichnet herstellbar ist, in der Montage passt und seine Funktion erfüllt. In dieser Phase:</p>
<ul>
<li>werden Schneidprogramme, Biegeeinstellungen und Schweißfolge erstmals erstellt,</li>
<li>gibt es keine oder nur einfache provisorische Spannmittel,</li>
<li>wird häufiger und manuell gemessen,</li>
<li>tauchen oft Lücken oder Widersprüche in der Zeichnung auf, die mit dem Lieferanten geklärt werden.</li>
</ul>
<h3>Warum sind Prototypen teuer?</h3>
<p>Rüstkosten (Programmierung, Einstellung, Erstteilprüfung, Klärung von Zeichnungsfragen) lassen sich nicht auf die Menge verteilen. In der Serie verteilen sie sich auf Hunderte Teile, beim Prototyp auf wenige. Zudem führt der Schweißer jeden Schritt zum ersten Mal aus; Verzug und Richten kosten mehr Zeit. Prototypen- und Serienpreis zu vergleichen, führt daher in die Irre.</p>
<h2>Rückmeldung zur fertigungsgerechten Konstruktion</h2>
<p>Der Prototyp ist der wertvollste Moment für Hinweise des Fertigers zur Konstruktion. Typisch sind:</p>
<ul>
<li>Nähte ohne Zugänglichkeit oder in ungünstiger Position,</li>
<li>größere Nahtdicken als nötig (siehe <a href="kose-kaynagi-a-olcusu.html">a-Maß der Kehlnaht</a>),</li>
<li>nach dem Schweißen schwer haltbare Toleranzen; Vorschlag, die Bearbeitung nach dem Schweißen durchzuführen,</li>
<li>Wechsel auf Standardblechdicken und -profile zur Senkung der Werkstoffkosten,</li>
<li>Biegelösungen, die die Teileanzahl reduzieren.</li>
</ul>
<p>Werden diese Hinweise vor der Serie in die Zeichnung übernommen, sinken Stückkosten und Qualitätsrisiko dauerhaft.</p>
<h2>Nullserie: den Prozess prüfen</h2>
<p>Nach dem Konstruktionsstand-Freeze wird ein kleines Los mit dem Serienprozess gefertigt. Ziel ist nun die Prozessabsicherung:</p>
<ul>
<li>Die Vorrichtung wird in Betrieb genommen und die Maßwiederholbarkeit geprüft (siehe <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">Vorrichtungsbau</a>).</li>
<li>WPS und Schweißparameter werden festgelegt.</li>
<li>Taktzeiten werden gemessen; der Serienpreis wird auf dieser Basis finalisiert.</li>
<li>Erstmusterprüfung (FAI) oder Kundenfreigabe erfolgen mit diesem Los (siehe <a href="ilk-parca-onayi-kaynakli-imalat.html">Erstteilfreigabe</a>).</li>
</ul>
<h2>Serie: Wiederholbarkeit</h2>
<p>In der Serie soll jedes Teil gleich sein. Dazu:</p>
<ul>
<li>wird der Zeichnungsstand eingefroren; Änderungen laufen über ein schriftliches Änderungsverfahren,</li>
<li>wird der Prüfplan standardisiert: welche Maße an jedem Teil, welche stichprobenweise,</li>
<li>wird der Werkstoff nach Losgröße geplant und die Schachtelung über mehrere Teile optimiert,</li>
<li>wird die Losgröße zwischen Rüst- und Lagerkosten abgewogen.</li>
</ul>
<h2>Vergleich der Phasen</h2>
<table>
<thead><tr><th></th><th>Prototyp</th><th>Nullserie</th><th>Serie</th></tr></thead>
<tbody>
<tr><td>Ziel</td><td>Konstruktion prüfen</td><td>Prozess prüfen</td><td>Wiederholbare Fertigung</td></tr>
<tr><td>Vorrichtung</td><td>Keine oder provisorisch</td><td>Serienvorrichtung</td><td>Serienvorrichtung</td></tr>
<tr><td>Zeichnung</td><td>Änderbar</td><td>Eingefroren</td><td>Revisionsgesteuert</td></tr>
<tr><td>Stückkosten</td><td>Am höchsten</td><td>Mittel</td><td>Am niedrigsten</td></tr>
<tr><td>Prüfung</td><td>100 %, detailliert</td><td>100 % + FAI</td><td>Nach Prüfplan</td></tr>
</tbody>
</table>
<h2>Typische Fehler beim Serienanlauf</h2>
<ul>
<li>Manuelle Korrekturen am Prototyp werden nicht in die Zeichnung übernommen.</li>
<li>Der Prototypenpreis wird für den Serienpreis gehalten oder Prototypen werden zum Serienpreis verlangt.</li>
<li>Es wird nicht geklärt, wer die Vorrichtung bezahlt.</li>
<li>Die Nullserie wird übersprungen; ein Maßfehler betrifft dann das ganze Los.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> In der Prototypenphase prüfen wir die Zeichnung gemeinsam mit Ihnen aus Schweiß- und Fertigungssicht und geben unsere Hinweise schriftlich. Beim Serienanlauf legen wir Vorrichtung, WPS und Prüfplan fest und erstellen für das erste Los eine Erstteilakte. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Warum ist ein Prototyp teurer als ein Serienteil?', 'Rüstkosten wie Programmierung, Einstellung, Erstprüfung und Klärung von Zeichnungsfragen fallen auf wenige Teile; in der Serie verteilen sie sich auf Hunderte.'],
      ['Was ist eine Nullserie?', 'Ein kleines Los mit dem Serienprozess nach dem Konstruktions-Freeze; Vorrichtung, WPS und Taktzeit werden hier abgesichert.'],
      ['Braucht ein Prototyp eine Vorrichtung?', 'Meist nicht; provisorisches Spannen reicht. Die Serienvorrichtung entsteht nach dem Freeze.'],
      ['Was muss vor der Serie feststehen?', 'Zeichnungsstand, Nahtdicken, Toleranzen, WPS, Prüfplan und Eigentum an der Vorrichtung.']
    ],
    cta_h3: 'Vom Prototyp zur Serie mit einem Lieferanten',
    cta_p: 'Senden Sie Ihre Zeichnung; wir bieten Prototyp und Serie getrennt kalkuliert an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Del prototipo a la serie en piezas soldadas: qué cambia en cada etapa',
    meta: 'Diferencias entre prototipo, preserie y producción en serie de piezas soldadas: por qué el prototipo es caro, aportaciones de diseño para fabricación, decisiones de utillaje y WPS, aprobación de primera pieza, tamaño de lote y qué fijar en el plano antes de la serie.',
    og: 'Del prototipo a la serie',
    tag: 'Producción · Planificación',
    h1: 'Del prototipo a la serie en piezas soldadas: qué cambia en cada etapa',
    crumb: 'Prototipo y serie',
    read: '7 min de lectura',
    body: `
<p>Las empresas que desarrollan una nueva máquina o equipo suelen pedir sus piezas soldadas en tres etapas: unos pocos prototipos, una pequeña preserie (lote piloto) y luego la serie. Cada etapa tiene un objetivo, una estructura de costes y unas expectativas distintas. Conocer estas diferencias desde el principio reduce las discusiones de precio y las sorpresas al pasar a serie.</p>
<h2>Prototipo: validar el diseño</h2>
<p>El prototipo demuestra que la pieza puede fabricarse según plano, encaja en el montaje y cumple su función. En esta etapa:</p>
<ul>
<li>se preparan por primera vez los programas de corte, los ajustes de plegado y la secuencia de soldadura,</li>
<li>no hay utillaje o solo sujeciones provisionales sencillas,</li>
<li>el control dimensional es más frecuente y manual,</li>
<li>suelen aparecer lagunas o contradicciones en el plano que se aclaran con el proveedor.</li>
</ul>
<h3>¿Por qué es caro el prototipo?</h3>
<p>Los costes de preparación (programación, ajuste, control de primera pieza, aclaración del plano) no se reparten por cantidad. En serie se diluyen en cientos de piezas; en el prototipo recaen en unas pocas. Además, el soldador hace cada paso por primera vez y la deformación y el enderezado llevan más tiempo. Comparar el precio del prototipo con el de serie resulta engañoso.</p>
<h2>Aportaciones de diseño para fabricación</h2>
<p>El prototipo es el momento más valioso para que el fabricante aporte al diseño. Aportaciones típicas:</p>
<ul>
<li>soldaduras sin acceso o en posiciones difíciles,</li>
<li>gargantas mayores de lo necesario (ver <a href="kose-kaynagi-a-olcusu.html">garganta de soldadura en ángulo</a>),</li>
<li>tolerancias difíciles de mantener tras soldar; propuesta de mecanizar después de soldar,</li>
<li>paso a espesores de chapa y perfiles estándar para bajar el coste de material,</li>
<li>soluciones de plegado que reducen el número de piezas.</li>
</ul>
<p>Si estas propuestas se incorporan al plano antes de la serie, el coste por pieza y el riesgo de calidad bajan de forma permanente.</p>
<h2>Preserie: validar el proceso</h2>
<p>Con el diseño congelado, se fabrica un lote pequeño con el proceso de serie. El objetivo ya no es el diseño sino el proceso:</p>
<ul>
<li>se pone en marcha el utillaje y se comprueba la repetibilidad dimensional (ver <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">diseño de utillajes</a>),</li>
<li>se fijan las WPS y los parámetros de soldadura,</li>
<li>se miden los tiempos de ciclo y con ellos se cierra el precio de serie,</li>
<li>la inspección de primera pieza (FAI) o la aprobación del cliente se obtiene de este lote (ver <a href="ilk-parca-onayi-kaynakli-imalat.html">aprobación de primera pieza</a>).</li>
</ul>
<h2>Serie: repetibilidad</h2>
<p>En serie, el objetivo es que todas las piezas sean iguales. Para ello:</p>
<ul>
<li>se congela la revisión del plano y los cambios pasan por un proceso escrito,</li>
<li>se estandariza el plan de inspección: qué cotas en cada pieza y cuáles por muestreo,</li>
<li>se planifica el material por tamaño de lote y se optimiza el anidado entre varias piezas,</li>
<li>el tamaño de lote equilibra coste de preparación y coste de inventario.</li>
</ul>
<h2>Comparación por etapas</h2>
<table>
<thead><tr><th></th><th>Prototipo</th><th>Preserie</th><th>Serie</th></tr></thead>
<tbody>
<tr><td>Objetivo</td><td>Validar diseño</td><td>Validar proceso</td><td>Producción repetible</td></tr>
<tr><td>Utillaje</td><td>Ninguno o provisional</td><td>Utillaje de serie</td><td>Utillaje de serie</td></tr>
<tr><td>Plano</td><td>Puede cambiar</td><td>Congelado</td><td>Control de revisiones</td></tr>
<tr><td>Coste por pieza</td><td>El más alto</td><td>Medio</td><td>El más bajo</td></tr>
<tr><td>Inspección</td><td>100 %, detallada</td><td>100 % + FAI</td><td>Según plan</td></tr>
</tbody>
</table>
<h2>Errores frecuentes al pasar a serie</h2>
<ul>
<li>Las correcciones manuales del prototipo no llegan al plano.</li>
<li>Confundir precio de prototipo con precio de serie, o pedir prototipos a precio de serie.</li>
<li>No hablar de quién paga el utillaje.</li>
<li>Saltarse la preserie y pasar a un lote grande; un error dimensional afecta a todo el lote.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> en la fase de prototipo revisamos con usted el plano desde el punto de vista de soldadura y fabricación y damos nuestras propuestas por escrito. Al pasar a serie fijamos utillaje, WPS y plan de inspección y preparamos un dossier de primera pieza para el primer lote. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Por qué un prototipo cuesta más que una pieza de serie?', 'Costes de preparación como programación, ajuste, primera inspección y aclaraciones del plano recaen en pocas piezas; en serie se reparten entre cientos.'],
      ['¿Qué es una preserie?', 'Un lote pequeño con el proceso de serie tras congelar el diseño; aquí se validan utillaje, WPS y tiempo de ciclo.'],
      ['¿El prototipo necesita utillaje?', 'Normalmente no; basta una sujeción provisional. El utillaje de serie se hace tras congelar el diseño.'],
      ['¿Qué debe fijarse antes de la serie?', 'Revisión del plano, gargantas, tolerancias, WPS, plan de inspección y propiedad del utillaje.']
    ],
    cta_h3: 'Del prototipo a la serie con un solo proveedor',
    cta_p: 'Envíenos su plano; ofertaremos prototipo y serie por separado.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Du prototype à la série pour les pièces soudées : ce qui change à chaque étape',
    meta: 'Différences entre prototype, présérie et production en série de pièces soudées : pourquoi le prototype coûte cher, retours de conception pour la fabrication, choix de gabarit et de DMOS, validation du premier article, taille de lot et ce qu’il faut figer sur le plan avant la série.',
    og: 'Du prototype à la série',
    tag: 'Production · Planification',
    h1: 'Du prototype à la série pour les pièces soudées : ce qui change à chaque étape',
    crumb: 'Prototype et série',
    read: '7 min de lecture',
    body: `
<p>Les entreprises qui développent une nouvelle machine ou un nouvel équipement commandent généralement leurs pièces soudées en trois étapes : quelques prototypes, une petite présérie (lot pilote), puis la série. Chaque étape a un objectif, une structure de coût et des attentes différentes vis-à-vis du fournisseur. Les connaître tôt limite les discussions de prix et les surprises au passage en série.</p>
<h2>Prototype : valider la conception</h2>
<p>Le prototype montre que la pièce est réalisable selon le plan, qu’elle s’assemble et qu’elle remplit sa fonction. À ce stade :</p>
<ul>
<li>programmes de découpe, réglages de pliage et séquence de soudage sont préparés pour la première fois,</li>
<li>il n’y a pas de gabarit, ou seulement des bridages provisoires simples,</li>
<li>les contrôles dimensionnels sont plus fréquents et manuels,</li>
<li>des lacunes ou contradictions du plan apparaissent souvent et se règlent avec le fournisseur.</li>
</ul>
<h3>Pourquoi le prototype coûte-t-il cher ?</h3>
<p>Les coûts de préparation (programmation, réglage, contrôle du premier article, questions sur le plan) ne se divisent pas par la quantité. En série, ils se répartissent sur des centaines de pièces ; sur un prototype, sur quelques-unes. Le soudeur exécute aussi chaque étape pour la première fois ; déformation et redressage prennent plus de temps. Comparer prix de prototype et prix de série est donc trompeur.</p>
<h2>Retours de conception pour la fabrication</h2>
<p>Le prototype est le moment où le fabricant peut le plus contribuer à la conception. Retours typiques :</p>
<ul>
<li>soudures inaccessibles ou en position difficile,</li>
<li>gorges plus grandes que nécessaire (voir <a href="kose-kaynagi-a-olcusu.html">gorge des soudures d’angle</a>),</li>
<li>tolérances difficiles à tenir après soudage ; proposition d’usiner après soudage,</li>
<li>passage à des épaisseurs et profilés standards pour réduire le coût matière,</li>
<li>solutions de pliage qui réduisent le nombre de pièces.</li>
</ul>
<p>Intégrées au plan avant la série, ces propositions réduisent durablement le coût unitaire et le risque qualité.</p>
<h2>Présérie : valider le procédé</h2>
<p>Une fois la conception figée, un petit lot est réalisé avec le procédé de série. L’objectif n’est plus la conception mais le procédé :</p>
<ul>
<li>le gabarit est mis en service et la répétabilité dimensionnelle vérifiée (voir <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">conception de gabarits</a>),</li>
<li>les DMOS et paramètres de soudage sont figés,</li>
<li>les temps de cycle sont mesurés ; le prix série est arrêté sur ces données,</li>
<li>l’inspection du premier article (FAI) ou l’accord du client est obtenu sur ce lot (voir <a href="ilk-parca-onayi-kaynakli-imalat.html">validation du premier article</a>).</li>
</ul>
<h2>Série : la répétabilité</h2>
<p>En série, chaque pièce doit être identique. Pour cela :</p>
<ul>
<li>l’indice du plan est figé ; les modifications suivent une procédure écrite,</li>
<li>le plan de contrôle est standardisé : quelles cotes sur chaque pièce, lesquelles par échantillonnage,</li>
<li>la matière est planifiée selon la taille de lot et l’imbrication optimisée sur plusieurs pièces,</li>
<li>la taille de lot arbitre entre coût de préparation et coût de stock.</li>
</ul>
<h2>Comparaison des étapes</h2>
<table>
<thead><tr><th></th><th>Prototype</th><th>Présérie</th><th>Série</th></tr></thead>
<tbody>
<tr><td>Objectif</td><td>Valider la conception</td><td>Valider le procédé</td><td>Production répétable</td></tr>
<tr><td>Gabarit</td><td>Aucun ou provisoire</td><td>Gabarit série</td><td>Gabarit série</td></tr>
<tr><td>Plan</td><td>Peut évoluer</td><td>Figé</td><td>Indices maîtrisés</td></tr>
<tr><td>Coût unitaire</td><td>Le plus élevé</td><td>Moyen</td><td>Le plus bas</td></tr>
<tr><td>Contrôle</td><td>100 %, détaillé</td><td>100 % + FAI</td><td>Selon plan</td></tr>
</tbody>
</table>
<h2>Erreurs fréquentes au passage en série</h2>
<ul>
<li>Les corrections manuelles faites sur le prototype ne sont pas reportées sur le plan.</li>
<li>Prendre le prix prototype pour le prix série, ou exiger des prototypes au prix série.</li>
<li>Ne pas décider qui finance le gabarit.</li>
<li>Sauter la présérie et lancer directement un gros lot ; une erreur de cote touche tout le lot.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> au stade prototype, nous revoyons le plan avec vous sous l’angle soudage et fabrication et formulons nos propositions par écrit. Au passage en série, nous figeons gabarit, DMOS et plan de contrôle et préparons un dossier de premier article pour le premier lot. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Pourquoi un prototype coûte-t-il plus cher qu’une pièce série ?', 'Les coûts de préparation (programmation, réglage, premier contrôle, questions sur le plan) pèsent sur quelques pièces ; en série, ils se répartissent sur des centaines.'],
      ['Qu’est-ce qu’une présérie ?', 'Un petit lot réalisé avec le procédé de série après gel de la conception ; gabarit, DMOS et temps de cycle y sont validés.'],
      ['Un prototype a-t-il besoin d’un gabarit ?', 'En général non ; un bridage provisoire suffit. Le gabarit série est réalisé après le gel de la conception.'],
      ['Que faut-il figer avant la série ?', 'Indice du plan, gorges, tolérances, DMOS, plan de contrôle et propriété du gabarit.']
    ],
    cta_h3: 'Du prototype à la série avec un seul fournisseur',
    cta_p: 'Envoyez votre plan ; nous chiffrons prototype et série séparément.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Dal prototipo alla serie nei pezzi saldati: cosa cambia in ogni fase',
    meta: 'Differenze tra prototipo, preserie e produzione di serie di pezzi saldati: perché il prototipo costa di più, feedback di progettazione per la produzione, scelte di maschera e WPS, approvazione del primo articolo, dimensione del lotto e cosa fissare a disegno prima della serie.',
    og: 'Dal prototipo alla serie',
    tag: 'Produzione · Pianificazione',
    h1: 'Dal prototipo alla serie nei pezzi saldati: cosa cambia in ogni fase',
    crumb: 'Prototipo e serie',
    read: '7 min di lettura',
    body: `
<p>Le aziende che sviluppano una nuova macchina o attrezzatura ordinano di solito i pezzi saldati in tre fasi: pochi prototipi, una piccola preserie (lotto pilota) e poi la serie. Ogni fase ha obiettivo, struttura dei costi e aspettative diverse verso il fornitore. Conoscere queste differenze per tempo riduce le discussioni sul prezzo e le sorprese nel passaggio alla serie.</p>
<h2>Prototipo: validare il progetto</h2>
<p>Il prototipo dimostra che il pezzo è realizzabile come da disegno, si monta e svolge la sua funzione. In questa fase:</p>
<ul>
<li>programmi di taglio, impostazioni di piega e sequenza di saldatura vengono preparati per la prima volta,</li>
<li>non c’è maschera o solo bloccaggi provvisori semplici,</li>
<li>i controlli dimensionali sono più frequenti e manuali,</li>
<li>emergono spesso lacune o contraddizioni nel disegno, chiarite con il fornitore.</li>
</ul>
<h3>Perché il prototipo costa di più?</h3>
<p>I costi di preparazione (programmazione, attrezzaggio, controllo del primo pezzo, chiarimenti sul disegno) non si dividono per quantità. In serie si distribuiscono su centinaia di pezzi, nel prototipo su pochi. Il saldatore esegue ogni passo per la prima volta e deformazioni e raddrizzature richiedono più tempo. Confrontare prezzo del prototipo e prezzo di serie è quindi fuorviante.</p>
<h2>Feedback di progettazione per la produzione</h2>
<p>Il prototipo è il momento più prezioso per il contributo del fabbricante al progetto. Feedback tipici:</p>
<ul>
<li>saldature non accessibili o in posizioni scomode,</li>
<li>sezioni di gola più grandi del necessario (vedi <a href="kose-kaynagi-a-olcusu.html">altezza di gola delle saldature d’angolo</a>),</li>
<li>tolleranze difficili da mantenere dopo la saldatura; proposta di lavorare a macchina dopo la saldatura,</li>
<li>passaggio a spessori e profili standard per ridurre il costo materiale,</li>
<li>soluzioni di piega che riducono il numero di componenti.</li>
</ul>
<p>Se recepiti a disegno prima della serie, questi suggerimenti riducono in modo permanente costo unitario e rischio qualità.</p>
<h2>Preserie: validare il processo</h2>
<p>Congelato il progetto, si realizza un piccolo lotto con il processo di serie. Lo scopo non è più il progetto ma il processo:</p>
<ul>
<li>si mette in servizio la maschera e si verifica la ripetibilità dimensionale (vedi <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">progettazione delle maschere</a>),</li>
<li>si fissano WPS e parametri di saldatura,</li>
<li>si misurano i tempi ciclo e su questi si definisce il prezzo di serie,</li>
<li>l’ispezione del primo articolo (FAI) o l’approvazione del cliente avviene su questo lotto (vedi <a href="ilk-parca-onayi-kaynakli-imalat.html">approvazione del primo articolo</a>).</li>
</ul>
<h2>Serie: ripetibilità</h2>
<p>In serie ogni pezzo deve essere uguale. Per questo:</p>
<ul>
<li>la revisione del disegno è congelata; le modifiche passano da una procedura scritta,</li>
<li>il piano di controllo è standardizzato: quali quote su ogni pezzo e quali a campione,</li>
<li>il materiale si pianifica per lotto e il nesting si ottimizza su più pezzi,</li>
<li>la dimensione del lotto bilancia costo di attrezzaggio e costo di magazzino.</li>
</ul>
<h2>Confronto tra le fasi</h2>
<table>
<thead><tr><th></th><th>Prototipo</th><th>Preserie</th><th>Serie</th></tr></thead>
<tbody>
<tr><td>Obiettivo</td><td>Validare il progetto</td><td>Validare il processo</td><td>Produzione ripetibile</td></tr>
<tr><td>Maschera</td><td>Nessuna o provvisoria</td><td>Maschera di serie</td><td>Maschera di serie</td></tr>
<tr><td>Disegno</td><td>Può cambiare</td><td>Congelato</td><td>Revisioni controllate</td></tr>
<tr><td>Costo unitario</td><td>Il più alto</td><td>Medio</td><td>Il più basso</td></tr>
<tr><td>Controllo</td><td>100%, dettagliato</td><td>100% + FAI</td><td>Secondo piano</td></tr>
</tbody>
</table>
<h2>Errori frequenti nel passaggio alla serie</h2>
<ul>
<li>Le correzioni manuali fatte sul prototipo non arrivano a disegno.</li>
<li>Scambiare il prezzo del prototipo per quello di serie, o chiedere prototipi a prezzo di serie.</li>
<li>Non definire chi paga la maschera.</li>
<li>Saltare la preserie e passare subito a un lotto grande; un errore di quota si estende a tutto il lotto.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> nella fase prototipo rivediamo con voi il disegno dal punto di vista della saldatura e della produzione e diamo i nostri suggerimenti per iscritto. Nel passaggio alla serie fissiamo maschera, WPS e piano di controllo e prepariamo un fascicolo di primo articolo per il primo lotto. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Perché un prototipo costa più di un pezzo di serie?', 'Costi di preparazione come programmazione, attrezzaggio, primo controllo e chiarimenti sul disegno ricadono su pochi pezzi; in serie si distribuiscono su centinaia.'],
      ['Cos’è una preserie?', 'Un piccolo lotto con il processo di serie dopo il congelamento del progetto; qui si validano maschera, WPS e tempo ciclo.'],
      ['Il prototipo richiede una maschera?', 'Di solito no; basta un bloccaggio provvisorio. La maschera di serie si realizza dopo il congelamento del progetto.'],
      ['Cosa va fissato prima della serie?', 'Revisione del disegno, sezioni di gola, tolleranze, WPS, piano di controllo e proprietà della maschera.']
    ],
    cta_h3: 'Dal prototipo alla serie con un solo fornitore',
    cta_p: 'Inviateci il disegno; quotiamo prototipo e serie separatamente.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Van prototype naar serie bij lasdelen: wat verandert er in elke fase?',
    meta: 'Verschillen tussen prototype, nulserie en serieproductie van lasdelen: waarom prototypes duurder zijn, feedback voor maakbaar ontwerp, keuzes voor mallen en WPS, eerste-artikelgoedkeuring, seriegrootte en wat vóór de serie op tekening vast moet liggen.',
    og: 'Van prototype naar serie',
    tag: 'Productie · Planning',
    h1: 'Van prototype naar serie bij lasdelen: wat verandert er in elke fase?',
    crumb: 'Prototype en serie',
    read: '7 min lezen',
    body: `
<p>Bedrijven die een nieuwe machine of installatie ontwikkelen, bestellen hun lasdelen meestal in drie stappen: enkele prototypes, een kleine nulserie (pilotbatch) en daarna de serie. Elke stap heeft een ander doel, een andere kostenstructuur en andere verwachtingen van de leverancier. Wie die verschillen vroeg kent, voorkomt prijsdiscussies en verrassingen bij de overgang naar serie.</p>
<h2>Prototype: het ontwerp valideren</h2>
<p>Het prototype laat zien dat het deel volgens tekening te maken is, past bij de montage en zijn functie vervult. In deze fase:</p>
<ul>
<li>worden snijprogramma’s, kantinstellingen en lasvolgorde voor het eerst gemaakt,</li>
<li>is er geen mal of alleen eenvoudige tijdelijke opspanning,</li>
<li>wordt vaker en handmatig gemeten,</li>
<li>komen vaak hiaten of tegenstrijdigheden in de tekening boven, die met de leverancier worden opgelost.</li>
</ul>
<h3>Waarom zijn prototypes duur?</h3>
<p>Voorbereidingskosten (programmeren, instellen, eerste-artikelcontrole, tekeningvragen) kunnen niet over het aantal worden verdeeld. In serie verdelen ze zich over honderden delen, bij een prototype over enkele. De lasser doet bovendien elke stap voor het eerst; vervorming en richten kosten meer tijd. Prototype- en serieprijs vergelijken is daarom misleidend.</p>
<h2>Feedback voor maakbaar ontwerp</h2>
<p>Het prototype is het waardevolste moment voor de fabrikant om aan het ontwerp bij te dragen. Typische feedback:</p>
<ul>
<li>lassen zonder bereikbaarheid of in lastige posities,</li>
<li>grotere lasafmetingen dan nodig (zie <a href="kose-kaynagi-a-olcusu.html">a-maat van hoeklassen</a>),</li>
<li>toleranties die na het lassen moeilijk haalbaar zijn; voorstel om na het lassen te verspanen,</li>
<li>overstap naar standaard plaatdiktes en profielen om materiaalkosten te verlagen,</li>
<li>kantoplossingen die het aantal onderdelen verminderen.</li>
</ul>
<p>Worden deze voorstellen vóór de serie in de tekening verwerkt, dan dalen kostprijs en kwaliteitsrisico blijvend.</p>
<h2>Nulserie: het proces valideren</h2>
<p>Na de ontwerpfreeze wordt een kleine batch met het serieproces gemaakt. Het doel is nu het proces, niet meer het ontwerp:</p>
<ul>
<li>de mal wordt in gebruik genomen en de maatherhaalbaarheid gecontroleerd (zie <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">malontwerp</a>),</li>
<li>WPS’en en lasparameters worden vastgelegd,</li>
<li>cyclustijden worden gemeten; daarop wordt de serieprijs definitief,</li>
<li>eerste-artikelinspectie (FAI) of klantvrijgave volgt uit deze batch (zie <a href="ilk-parca-onayi-kaynakli-imalat.html">eerste-artikelgoedkeuring</a>).</li>
</ul>
<h2>Serie: herhaalbaarheid</h2>
<p>In serie moet elk deel gelijk zijn. Daarvoor:</p>
<ul>
<li>wordt de tekeningrevisie bevroren; wijzigingen lopen via een schriftelijk wijzigingsproces,</li>
<li>wordt het inspectieplan gestandaardiseerd: welke maten op elk deel, welke steekproefsgewijs,</li>
<li>wordt materiaal per batchgrootte gepland en nesting over meerdere delen geoptimaliseerd,</li>
<li>wordt de batchgrootte afgewogen tussen insteltijd en voorraadkosten.</li>
</ul>
<h2>Vergelijking per fase</h2>
<table>
<thead><tr><th></th><th>Prototype</th><th>Nulserie</th><th>Serie</th></tr></thead>
<tbody>
<tr><td>Doel</td><td>Ontwerp valideren</td><td>Proces valideren</td><td>Herhaalbare productie</td></tr>
<tr><td>Mal</td><td>Geen of tijdelijk</td><td>Seriemal</td><td>Seriemal</td></tr>
<tr><td>Tekening</td><td>Kan wijzigen</td><td>Bevroren</td><td>Revisiebeheerd</td></tr>
<tr><td>Kosten per deel</td><td>Hoogst</td><td>Middel</td><td>Laagst</td></tr>
<tr><td>Inspectie</td><td>100%, uitgebreid</td><td>100% + FAI</td><td>Volgens plan</td></tr>
</tbody>
</table>
<h2>Veelgemaakte fouten bij de overgang</h2>
<ul>
<li>Handmatige correcties aan het prototype komen niet in de tekening.</li>
<li>De prototypeprijs wordt voor de serieprijs gehouden, of prototypes worden tegen serieprijs gevraagd.</li>
<li>Er wordt niet besproken wie de mal betaalt.</li>
<li>De nulserie wordt overgeslagen; één maatfout raakt dan de hele batch.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> in de prototypefase bekijken we de tekening samen met u vanuit las- en productieoogpunt en geven we onze voorstellen schriftelijk. Bij de overgang naar serie leggen we mal, WPS en inspectieplan vast en maken we een eerste-artikeldossier voor de eerste batch. <a href="../cizime-gore-imalat.html">Productie volgens tekening →</a></p></div>
`,
    faq: [
      ['Waarom is een prototype duurder dan een seriedeel?', 'Voorbereidingskosten zoals programmeren, instellen, eerste controle en tekeningvragen vallen op enkele delen; in serie worden ze over honderden verdeeld.'],
      ['Wat is een nulserie?', 'Een kleine batch met het serieproces na de ontwerpfreeze; mal, WPS en cyclustijd worden hier gevalideerd.'],
      ['Heeft een prototype een mal nodig?', 'Meestal niet; tijdelijke opspanning volstaat. De seriemal wordt na de freeze gemaakt.'],
      ['Wat moet vóór de serie vastliggen?', 'Tekeningrevisie, lasafmetingen, toleranties, WPS’en, inspectieplan en eigendom van de mal.']
    ],
    cta_h3: 'Van prototype naar serie met één leverancier',
    cta_p: 'Stuur uw tekening; we offreren prototype en serie apart.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Fra prototype til serie for sveisede deler: hva endres i hver fase?',
    meta: 'Forskjeller mellom prototype, nullserie og serieproduksjon av sveisede deler: hvorfor prototyper koster mer, tilbakemelding for produksjonsvennlig konstruksjon, valg av jigg og WPS, førsteartikkelgodkjenning, partistørrelse og hva som må fryses på tegningen før serie.',
    og: 'Fra prototype til serie',
    tag: 'Produksjon · Planlegging',
    h1: 'Fra prototype til serie for sveisede deler: hva endres i hver fase?',
    crumb: 'Prototype og serie',
    read: '7 min lesing',
    body: `
<p>Bedrifter som utvikler en ny maskin eller et nytt utstyr, bestiller som regel sveisede deler i tre trinn: noen få prototyper, en liten nullserie (pilotparti) og deretter serie. Hvert trinn har ulikt mål, ulik kostnadsstruktur og ulike forventninger til leverandøren. Å kjenne forskjellene tidlig gir færre prisdiskusjoner og færre overraskelser ved overgangen til serie.</p>
<h2>Prototype: validere konstruksjonen</h2>
<p>Prototypen viser at delen kan lages etter tegning, passer i monteringen og fungerer. I denne fasen:</p>
<ul>
<li>lages skjæreprogrammer, bukkeinnstillinger og sveiserekkefølge for første gang,</li>
<li>finnes ingen jigg eller bare enkel midlertidig oppspenning,</li>
<li>gjøres målkontroll oftere og manuelt,</li>
<li>dukker det ofte opp mangler eller motsigelser i tegningen som avklares med leverandøren.</li>
</ul>
<h3>Hvorfor er prototyper dyre?</h3>
<p>Oppstartskostnader (programmering, innstilling, førstedelskontroll, tegningsspørsmål) kan ikke fordeles på antall. I serie fordeles de på hundrevis av deler, i en prototype på noen få. Sveiseren gjør dessuten hvert steg for første gang; deformasjon og retting tar lengre tid. Å sammenligne prototypepris og seriepris er derfor misvisende.</p>
<h2>Tilbakemelding for produksjonsvennlig konstruksjon</h2>
<p>Prototypen er det mest verdifulle tidspunktet for produsentens innspill til konstruksjonen. Typiske innspill:</p>
<ul>
<li>sveiser uten tilkomst eller i vanskelige posisjoner,</li>
<li>større sveisemål enn nødvendig (se <a href="kose-kaynagi-a-olcusu.html">a-mål for kilsveis</a>),</li>
<li>toleranser som er vanskelige å holde etter sveising; forslag om maskinering etter sveising,</li>
<li>bytte til standard platetykkelser og profiler for lavere materialkostnad,</li>
<li>bukkeløsninger som reduserer antall deler.</li>
</ul>
<p>Når innspillene legges inn i tegningen før serie, går kostnad per del og kvalitetsrisiko varig ned.</p>
<h2>Nullserie: validere prosessen</h2>
<p>Når konstruksjonen er frosset, lages et lite parti med serieprosessen. Målet er nå prosessen, ikke konstruksjonen:</p>
<ul>
<li>jiggen tas i bruk og målrepeterbarheten kontrolleres (se <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">jiggkonstruksjon</a>),</li>
<li>WPS-er og sveiseparametere fastsettes,</li>
<li>syklustider måles; serieprisen fastsettes ut fra disse,</li>
<li>førsteartikkelkontroll (FAI) eller kundegodkjenning tas fra dette partiet (se <a href="ilk-parca-onayi-kaynakli-imalat.html">førsteartikkelgodkjenning</a>).</li>
</ul>
<h2>Serie: repeterbarhet</h2>
<p>I serie skal hver del være lik. Derfor:</p>
<ul>
<li>fryses tegningsrevisjonen; endringer går gjennom en skriftlig endringsprosess,</li>
<li>standardiseres kontrollplanen: hvilke mål på hver del og hvilke ved stikkprøver,</li>
<li>planlegges materialet etter partistørrelse og nesting optimaliseres over flere deler,</li>
<li>balanseres partistørrelsen mellom oppstartskostnad og lagerkostnad.</li>
</ul>
<h2>Sammenligning av fasene</h2>
<table>
<thead><tr><th></th><th>Prototype</th><th>Nullserie</th><th>Serie</th></tr></thead>
<tbody>
<tr><td>Mål</td><td>Validere konstruksjon</td><td>Validere prosess</td><td>Repeterbar produksjon</td></tr>
<tr><td>Jigg</td><td>Ingen eller midlertidig</td><td>Seriejigg</td><td>Seriejigg</td></tr>
<tr><td>Tegning</td><td>Kan endres</td><td>Frosset</td><td>Revisjonsstyrt</td></tr>
<tr><td>Kostnad per del</td><td>Høyest</td><td>Middels</td><td>Lavest</td></tr>
<tr><td>Kontroll</td><td>100 %, detaljert</td><td>100 % + FAI</td><td>Etter plan</td></tr>
</tbody>
</table>
<h2>Vanlige feil ved overgang til serie</h2>
<ul>
<li>Manuelle korrigeringer på prototypen kommer aldri inn i tegningen.</li>
<li>Prototypepris forveksles med seriepris, eller prototyper kreves til seriepris.</li>
<li>Det avklares ikke hvem som betaler jiggen.</li>
<li>Nullserien hoppes over og man går rett på et stort parti; én målfeil rammer da hele partiet.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> i prototypefasen går vi gjennom tegningen sammen med deg fra et sveise- og produksjonsperspektiv og gir innspillene skriftlig. Ved overgang til serie fastsetter vi jigg, WPS og kontrollplan og lager en førsteartikkelmappe for første parti. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hvorfor koster en prototype mer enn en seriedel?', 'Oppstartskostnader som programmering, innstilling, førstekontroll og tegningsspørsmål faller på få deler; i serie fordeles de på hundrevis.'],
      ['Hva er en nullserie?', 'Et lite parti laget med serieprosessen etter at konstruksjonen er frosset; jigg, WPS og syklustid valideres her.'],
      ['Trenger en prototype jigg?', 'Som regel ikke; midlertidig oppspenning holder. Seriejiggen lages etter at konstruksjonen er frosset.'],
      ['Hva må fryses før serie?', 'Tegningsrevisjon, sveisemål, toleranser, WPS-er, kontrollplan og eierskap til jiggen.']
    ],
    cta_h3: 'Fra prototype til serie med én leverandør',
    cta_p: 'Send tegningen; vi gir tilbud på prototype og serie hver for seg.',
    cta_btn: 'Be om tilbud →'
  }
};
