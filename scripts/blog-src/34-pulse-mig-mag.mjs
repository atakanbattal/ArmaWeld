export default {
  order: 34,
  slug: 'pulse-mig-mag-kaynagi-ark-modlari',
  key: 'p34_pulse',
  date: '2026-06-08',
  keywords: 'pulse kaynak, pulse MIG MAG, darbeli ark, sprey ark, kısa devre ark, ark modları, sinerjik kaynak, double pulse, pulse alüminyum kaynağı, pulsed MIG welding, Impulslichtbogen, soudage MIG pulsé',
  related: ['mig-mag-parametreleri', 'koruyucu-gaz-secimi-mig-mag', 'kaynak-isi-girdisi', 'aluminyum-kaynak'],
  tr: {
    title: 'Pulse MIG/MAG Kaynağı: Ark Modları ve Darbeli Arkın Ne Zaman Fark Yarattığı',
    meta: 'Kısa devre, globüler, sprey ve pulse ark arasındaki fark nedir? Pulse MIG/MAG nasıl çalışır, hangi işlerde avantaj sağlar, gaz şartı nedir ve darbeli arkta ısı girdisi neden anlık güçle hesaplanmalıdır?',
    og: 'Pulse MIG/MAG Kaynağı',
    tag: 'Kaynak Yöntemleri · MIG/MAG',
    h1: 'Pulse MIG/MAG Kaynağı: Ark Modları ve Darbeli Arkın Ne Zaman Fark Yarattığı',
    crumb: 'Pulse MIG/MAG Kaynağı',
    read: '6 dk okuma',
    body: `
<p>Gazaltı kaynağında telin ucundan eriyen metal, kaynak banyosuna farklı şekillerde geçer. Bu geçiş şekline <strong>ark modu</strong> veya metal geçiş tipi denir ve dikiş kalitesini, sıçrantıyı, nüfuziyeti ve ısı girdisini doğrudan belirler. Pulse (darbeli) ark, bu modlar arasında en kontrollü olanıdır; ancak her iş için gerekli değildir.</p>
<h2>Dört Temel Ark Modu</h2>
<table class="data-table"><thead><tr><th>Mod</th><th>Akım/gerilim</th><th>Özellik</th><th>Tipik kullanım</th></tr></thead><tbody>
<tr><td>Kısa devre</td><td>Düşük</td><td>Tel banyoya değerek kısa devre yapar; düşük ısı girdisi</td><td>İnce sac, kök paso, pozisyon kaynağı</td></tr>
<tr><td>Globüler</td><td>Orta</td><td>İri ve düzensiz damlalar; yüksek sıçrantı</td><td>Genellikle kaçınılan geçiş bölgesi</td></tr>
<tr><td>Sprey</td><td>Yüksek</td><td>İnce damlalar, sıçrantısız ve derin nüfuziyet; yüksek ısı girdisi</td><td>Kalın parçalar, yatay pozisyon</td></tr>
<tr><td>Pulse</td><td>Tepe ve taban akımı arasında değişken</td><td>Her darbede bir damla; spreye yakın kalite, daha düşük ortalama ısı</td><td>Paslanmaz, alüminyum, pozisyon kaynağı, görünür dikişler</td></tr>
</tbody></table>
<h2>Pulse Ark Nasıl Çalışır?</h2>
<p>Güç kaynağı, akımı saniyede onlarca ile yüzlerce kez yüksek bir <strong>tepe akımı</strong> ile düşük bir <strong>taban akımı</strong> arasında değiştirir. Tepe akımında telin ucundaki damla koparılır; taban akımında ark açık kalır ama tel ucu yalnızca ısınır. İdeal ayarda her darbede bir damla geçer. Böylece sprey arkın sıçrantısız ve düzenli geçişi, çok daha düşük ortalama akımla elde edilir.</p>
<p>Modern makinelerde bu ayarlar <strong>sinerjik</strong> programlarla yapılır: kullanıcı malzemeyi, tel çapını ve gazı seçer, tel hızını değiştirdiğinde makine darbe parametrelerini otomatik ayarlar.</p>
<h2>Pulse Arkın Avantajları</h2>
<ul>
<li><strong>Az sıçrantı:</strong> Taşlama ve temizlik süresi kısalır; görünür dikişlerde önemli bir avantajdır.</li>
<li><strong>Daha düşük ısı girdisi:</strong> İnce ve orta kalınlıkta çarpılma azalır; paslanmazda renk değişimi ve karbür çökelmesi riski düşer.</li>
<li><strong>Pozisyon kaynağı:</strong> Dikey ve tavan pozisyonunda spreye yakın kalite, kısa devreden daha iyi ergime.</li>
<li><strong>Alüminyum:</strong> Daha geniş çalışma aralığı ve kararlı ark. Çift darbe (double pulse) ile TIG’e benzer pullu görünüm elde edilebilir.</li>
<li><strong>Yan duvar ergimesi:</strong> Kısa devre arkta görülen ergime yetersizliği (soğuk bindirme) riskine karşı daha güvenli bir seçenektir.</li>
</ul>
<h2>Sınırları</h2>
<ul>
<li><strong>Gaz:</strong> Pulse ve sprey ark, argonca zengin gaz ister (karbon çelikte örneğin M20 veya M21 grubu, alüminyumda saf argon). %100 CO₂ ile gerçek sprey veya pulse ark elde edilemez (bkz. <a href="koruyucu-gaz-secimi-mig-mag.html">koruyucu gaz seçimi</a>).</li>
<li><strong>Ekipman:</strong> Darbeli ark özellikli, sinerjik programlı güç kaynağı gerekir.</li>
<li><strong>Kalın parçalar:</strong> Yatay pozisyonda kalın parçalarda klasik sprey ark veya tozaltı kaynağı daha yüksek yığma hızı sağlayabilir.</li>
<li><strong>Parametre disiplini:</strong> Program, tel ve gaz eşleşmesi doğru değilse avantajlar kaybolur.</li>
</ul>
<h2>Isı Girdisi: Pulse Arkta Dikkat</h2>
<p>Klasik formül ısı girdisini ortalama gerilim ve ortalama akımla hesaplar (bkz. <a href="kaynak-isi-girdisi.html">ısı girdisi</a>). Pulse gibi dalga şekli kontrollü arklarda ise akım ve gerilim sürekli değiştiği için ortalama değerlerin çarpımı gerçek gücü doğru yansıtmayabilir. Bu nedenle ISO 15614-1 ve ISO/TR 18491, dalga şekli kontrollü proseslerde ısı girdisinin <strong>anlık güç</strong> veya <strong>anlık enerji</strong> ölçümüyle belirlenmesini öngörür. Modern makineler bu değeri doğrudan gösterebilir. Isı girdisi sınırı olan işlerde (örneğin yüksek mukavemetli çelikler veya darbe şartlı birleşimler) WPS’teki değerin hangi yöntemle hesaplandığı açıkça belirtilmelidir.</p>
<h2>WPS’te Ne Tanımlanır?</h2>
<ul>
<li>Ark modu (kısa devre, sprey veya pulse) ve gerekiyorsa sinerjik program.</li>
<li>Tel çapı, tel hızı aralığı ve koruyucu gaz.</li>
<li>Isı girdisi aralığı ve hesaplama yöntemi.</li>
<li>Pozisyon, ilerleme hızı ve torç açısı.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Ark modu; malzeme, kalınlık, pozisyon ve dikişin görünürlüğüne göre seçilir ve WPS’te tanımlanır. Isı girdisi sınırı olan işlerde hesaplama yöntemi WPS’te açıkça belirtilir. <a href="../kaynak-yontemleri.html">Kaynak yöntemlerimiz →</a></p></div>
`,
    faq: [
      ['Pulse kaynak nedir?', 'Akımın yüksek tepe ve düşük taban değeri arasında hızla değiştiği gazaltı kaynağıdır. Her darbede bir damla koparak sprey arka yakın, az sıçrantılı bir dikiş daha düşük ortalama ısıyla elde edilir.'],
      ['Pulse kaynak ne zaman kullanılır?', 'Paslanmaz ve alüminyumda, ince ve orta kalınlıkta, pozisyon kaynağında ve görünür dikişlerde en çok fayda sağlar.'],
      ['Pulse kaynak %100 CO₂ ile yapılır mı?', 'Hayır. Pulse ve sprey ark argonca zengin gaz ister; %100 CO₂ ile gerçek pulse ark elde edilemez.'],
      ['Pulse arkta ısı girdisi nasıl hesaplanır?', 'Dalga şekli kontrollü arklarda ISO 15614-1 ve ISO/TR 18491’e göre anlık güç veya anlık enerji ölçümüyle hesaplanması önerilir.']
    ],
    cta_h3: 'Doğru ark, temiz dikiş',
    cta_p: 'Parça çiziminizi gönderin; malzeme ve kalınlığa uygun kaynak yöntemiyle teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Pulsed MIG/MAG Welding: Transfer Modes and When a Pulsed Arc Makes a Difference',
    meta: 'What is the difference between short-circuit, globular, spray and pulsed arc? How pulsed MIG/MAG works, where it helps, the gas requirement and why heat input with a pulsed arc should be calculated from instantaneous power.',
    og: 'Pulsed MIG/MAG Welding',
    tag: 'Welding Processes · MIG/MAG',
    h1: 'Pulsed MIG/MAG Welding: Transfer Modes and When a Pulsed Arc Makes a Difference',
    crumb: 'Pulsed MIG/MAG Welding',
    read: '6 min read',
    body: `
<p>In MIG/MAG welding the metal melting off the wire tip crosses into the pool in different ways. This is called the <strong>transfer mode</strong>, and it directly determines bead quality, spatter, penetration and heat input. The pulsed arc is the most controlled of these modes, but it is not needed for every job.</p>
<h2>The Four Basic Transfer Modes</h2>
<table class="data-table"><thead><tr><th>Mode</th><th>Current/voltage</th><th>Characteristics</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Short circuit</td><td>Low</td><td>Wire touches the pool and short-circuits; low heat input</td><td>Thin sheet, root runs, positional welding</td></tr>
<tr><td>Globular</td><td>Medium</td><td>Large, irregular droplets; high spatter</td><td>A transition range generally avoided</td></tr>
<tr><td>Spray</td><td>High</td><td>Fine droplets, spatter-free and deep penetration; high heat input</td><td>Thick parts, flat position</td></tr>
<tr><td>Pulsed</td><td>Alternates between peak and background</td><td>One droplet per pulse; near-spray quality at lower average heat</td><td>Stainless, aluminium, positional welding, visible welds</td></tr>
</tbody></table>
<h2>How a Pulsed Arc Works</h2>
<p>The power source switches the current tens to hundreds of times per second between a high <strong>peak current</strong> and a low <strong>background current</strong>. At peak the droplet at the wire tip is detached; at background the arc stays alight but the wire tip only heats. Ideally one droplet transfers per pulse. This gives the spatter-free, regular transfer of a spray arc at a much lower average current.</p>
<p>Modern machines handle these settings with <strong>synergic</strong> programs: the user selects material, wire diameter and gas, and when the wire feed speed changes, the machine adjusts the pulse parameters automatically.</p>
<h2>Advantages of a Pulsed Arc</h2>
<ul>
<li><strong>Little spatter:</strong> less grinding and cleaning, a major advantage on visible welds.</li>
<li><strong>Lower heat input:</strong> less distortion on thin and medium thicknesses; on stainless, lower risk of heat tint and carbide precipitation.</li>
<li><strong>Positional welding:</strong> near-spray quality in vertical and overhead positions, with better fusion than short circuit.</li>
<li><strong>Aluminium:</strong> a wider working range and a stable arc. Double pulse can produce a TIG-like rippled appearance.</li>
<li><strong>Sidewall fusion:</strong> a safer option against the lack-of-fusion (cold lap) risk seen with short-circuit transfer.</li>
</ul>
<h2>Limitations</h2>
<ul>
<li><strong>Gas:</strong> pulsed and spray arcs need argon-rich gas (for carbon steel e.g. M20 or M21 groups, for aluminium pure argon). True spray or pulse cannot be achieved with 100% CO₂ (see <a href="koruyucu-gaz-secimi-mig-mag.html">shielding gas selection</a>).</li>
<li><strong>Equipment:</strong> a power source with pulse capability and synergic programs is required.</li>
<li><strong>Thick parts:</strong> in the flat position on heavy sections, conventional spray or submerged arc can give higher deposition.</li>
<li><strong>Parameter discipline:</strong> if program, wire and gas do not match, the benefits are lost.</li>
</ul>
<h2>Heat Input: A Pulsed-Arc Caveat</h2>
<p>The classic formula calculates heat input from average voltage and average current (see <a href="kaynak-isi-girdisi.html">heat input</a>). With waveform-controlled arcs such as pulse, current and voltage change constantly, so the product of averages may not reflect the true power. ISO 15614-1 and ISO/TR 18491 therefore provide for determining heat input by <strong>instantaneous power</strong> or <strong>instantaneous energy</strong> measurement for waveform-controlled processes. Modern machines can display this value directly. On jobs with heat input limits (for example high-strength steels or joints with impact requirements), the WPS should state clearly which method the value is based on.</p>
<h2>What Goes in the WPS?</h2>
<ul>
<li>Transfer mode (short circuit, spray or pulse) and, where relevant, the synergic program.</li>
<li>Wire diameter, wire feed speed range and shielding gas.</li>
<li>Heat input range and calculation method.</li>
<li>Position, travel speed and torch angle.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> the transfer mode is chosen by material, thickness, position and weld visibility and defined in the WPS. On jobs with heat input limits, the calculation method is stated clearly in the WPS. <a href="../kaynak-yontemleri.html">Our welding methods →</a></p></div>
`,
    faq: [
      ['What is pulsed welding?', 'MIG/MAG welding in which the current switches rapidly between a high peak and a low background value. One droplet detaches per pulse, giving a near-spray, low-spatter weld at lower average heat.'],
      ['When is pulsed welding used?', 'It helps most on stainless and aluminium, thin and medium thicknesses, positional welding and visible welds.'],
      ['Can pulsed welding be done with 100% CO₂?', 'No. Pulsed and spray arcs need argon-rich gas; a true pulsed arc cannot be achieved with 100% CO₂.'],
      ['How is heat input calculated with a pulsed arc?', 'For waveform-controlled arcs, ISO 15614-1 and ISO/TR 18491 recommend calculating it from instantaneous power or instantaneous energy measurement.']
    ],
    cta_h3: 'The right arc, a clean weld',
    cta_p: 'Send your part drawing; we will quote with a welding process suited to the material and thickness.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Impuls-MSG-Schweißen: Lichtbogenarten und wann der Impulslichtbogen den Unterschied macht',
    meta: 'Was unterscheidet Kurz-, Übergangs-, Sprüh- und Impulslichtbogen? Wie das Impulsschweißen funktioniert, wo es hilft, welche Gase nötig sind und warum die Wärmeeinbringung beim Impulslichtbogen über die Momentanleistung berechnet werden sollte.',
    og: 'Impuls-MSG-Schweißen',
    tag: 'Schweißverfahren · MSG',
    h1: 'Impuls-MSG-Schweißen: Lichtbogenarten und wann der Impulslichtbogen den Unterschied macht',
    crumb: 'Impuls-MSG-Schweißen',
    read: '6 Min. Lesezeit',
    body: `
<p>Beim MSG-Schweißen geht das an der Drahtspitze abschmelzende Metall auf unterschiedliche Weise ins Bad über. Diese <strong>Lichtbogenart</strong> bestimmt Nahtqualität, Spritzer, Einbrand und Wärmeeinbringung. Der Impulslichtbogen ist die am besten kontrollierte Art, aber nicht für jede Aufgabe nötig.</p>
<h2>Die vier Grundarten</h2>
<table class="data-table"><thead><tr><th>Art</th><th>Strom/Spannung</th><th>Eigenschaften</th><th>Typische Anwendung</th></tr></thead><tbody>
<tr><td>Kurzlichtbogen</td><td>Niedrig</td><td>Draht berührt das Bad und schließt kurz; geringe Wärmeeinbringung</td><td>Dünnblech, Wurzellagen, Zwangslagen</td></tr>
<tr><td>Übergangslichtbogen</td><td>Mittel</td><td>Große, unregelmäßige Tropfen; viele Spritzer</td><td>Meist gemiedener Übergangsbereich</td></tr>
<tr><td>Sprühlichtbogen</td><td>Hoch</td><td>Feine Tropfen, spritzerfrei, tiefer Einbrand; hohe Wärmeeinbringung</td><td>Dicke Teile, Wannenlage</td></tr>
<tr><td>Impulslichtbogen</td><td>Wechsel zwischen Impuls- und Grundstrom</td><td>Ein Tropfen je Impuls; sprühnahe Qualität bei geringerer mittlerer Wärme</td><td>Edelstahl, Aluminium, Zwangslagen, Sichtnähte</td></tr>
</tbody></table>
<h2>So funktioniert der Impulslichtbogen</h2>
<p>Die Stromquelle schaltet den Strom zehn- bis hundertfach pro Sekunde zwischen hohem <strong>Impulsstrom</strong> und niedrigem <strong>Grundstrom</strong>. Im Impuls löst sich der Tropfen von der Drahtspitze, im Grundstrom brennt der Lichtbogen weiter, die Drahtspitze wird nur erwärmt. Ideal ist ein Tropfen je Impuls. So erhält man den spritzerfreien, gleichmäßigen Übergang des Sprühlichtbogens bei deutlich geringerem Mittelstrom.</p>
<p>Moderne Geräte steuern das über <strong>Synergie</strong>-Kennlinien: Der Anwender wählt Werkstoff, Drahtdurchmesser und Gas; ändert er die Drahtvorschubgeschwindigkeit, passt das Gerät die Impulsparameter automatisch an.</p>
<h2>Vorteile</h2>
<ul>
<li><strong>Wenig Spritzer:</strong> weniger Schleifen und Reinigen, ein großer Vorteil bei Sichtnähten.</li>
<li><strong>Geringere Wärmeeinbringung:</strong> weniger Verzug bei dünnen und mittleren Dicken; bei Edelstahl geringeres Risiko für Anlauffarben und Karbidausscheidung.</li>
<li><strong>Zwangslagen:</strong> sprühnahe Qualität in Steig- und Überkopfposition, bessere Bindung als im Kurzlichtbogen.</li>
<li><strong>Aluminium:</strong> größerer Arbeitsbereich und stabiler Lichtbogen; mit Doppelimpuls ein WIG-ähnliches Schuppenbild.</li>
<li><strong>Flankenbindung:</strong> sicherer gegen Bindefehler, wie sie im Kurzlichtbogen vorkommen.</li>
</ul>
<h2>Grenzen</h2>
<ul>
<li><strong>Gas:</strong> Impuls- und Sprühlichtbogen benötigen argonreiche Gase (bei Baustahl z. B. Gruppen M20 oder M21, bei Aluminium reines Argon). Mit 100 % CO₂ ist kein echter Sprüh- oder Impulslichtbogen möglich (siehe <a href="koruyucu-gaz-secimi-mig-mag.html">Schutzgasauswahl</a>).</li>
<li><strong>Ausrüstung:</strong> eine impulsfähige Stromquelle mit Synergieprogrammen ist nötig.</li>
<li><strong>Dicke Teile:</strong> in Wannenlage an dicken Querschnitten können klassischer Sprühlichtbogen oder UP-Schweißen höhere Abschmelzleistung bringen.</li>
<li><strong>Parameterdisziplin:</strong> passen Programm, Draht und Gas nicht zusammen, gehen die Vorteile verloren.</li>
</ul>
<h2>Wärmeeinbringung: Achtung beim Impulslichtbogen</h2>
<p>Die klassische Formel rechnet mit mittlerer Spannung und mittlerem Strom (siehe <a href="kaynak-isi-girdisi.html">Wärmeeinbringung</a>). Bei wellenformgesteuerten Lichtbögen wie dem Impuls ändern sich Strom und Spannung ständig, sodass das Produkt der Mittelwerte die wahre Leistung nicht korrekt abbilden kann. ISO 15614-1 und ISO/TR 18491 sehen daher für wellenformgesteuerte Prozesse die Bestimmung über <strong>Momentanleistung</strong> oder <strong>Momentanenergie</strong> vor. Moderne Geräte zeigen diesen Wert direkt an. Bei Aufträgen mit Grenzen für die Wärmeeinbringung (z. B. hochfeste Stähle oder kerbschlagbeanspruchte Verbindungen) sollte die WPS klar angeben, nach welcher Methode der Wert ermittelt wird.</p>
<h2>Was gehört in die WPS?</h2>
<ul>
<li>Lichtbogenart (Kurz-, Sprüh- oder Impulslichtbogen) und ggf. Synergieprogramm.</li>
<li>Drahtdurchmesser, Drahtvorschubbereich und Schutzgas.</li>
<li>Bereich der Wärmeeinbringung und Berechnungsmethode.</li>
<li>Position, Schweißgeschwindigkeit und Brennerstellung.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Die Lichtbogenart wählen wir nach Werkstoff, Dicke, Position und Sichtbarkeit der Naht und legen sie in der WPS fest. Bei Grenzwerten für die Wärmeeinbringung steht die Berechnungsmethode ausdrücklich in der WPS. <a href="../kaynak-yontemleri.html">Unsere Schweißverfahren →</a></p></div>
`,
    faq: [
      ['Was ist Impulsschweißen?', 'MSG-Schweißen, bei dem der Strom schnell zwischen hohem Impuls- und niedrigem Grundstrom wechselt. Je Impuls löst sich ein Tropfen, so entsteht eine sprühnahe, spritzerarme Naht bei geringerer mittlerer Wärme.'],
      ['Wann setzt man den Impulslichtbogen ein?', 'Den größten Nutzen bringt er bei Edelstahl und Aluminium, dünnen und mittleren Dicken, Zwangslagen und Sichtnähten.'],
      ['Geht Impulsschweißen mit 100 % CO₂?', 'Nein. Impuls- und Sprühlichtbogen brauchen argonreiche Gase; mit reinem CO₂ ist kein echter Impulslichtbogen möglich.'],
      ['Wie berechnet man die Wärmeeinbringung beim Impulslichtbogen?', 'Für wellenformgesteuerte Lichtbögen empfehlen ISO 15614-1 und ISO/TR 18491 die Berechnung über Momentanleistung oder Momentanenergie.']
    ],
    cta_h3: 'Der richtige Lichtbogen, eine saubere Naht',
    cta_p: 'Senden Sie Ihre Zeichnung; wir bieten mit einem zu Werkstoff und Dicke passenden Verfahren an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Soldadura MIG/MAG pulsada: modos de transferencia y cuándo marca la diferencia',
    meta: '¿Qué diferencia hay entre transferencia por cortocircuito, globular, spray y pulsada? Cómo funciona el MIG/MAG pulsado, dónde ayuda, qué gas exige y por qué el aporte térmico en arco pulsado debe calcularse con la potencia instantánea.',
    og: 'Soldadura MIG/MAG pulsada',
    tag: 'Procesos de soldadura · MIG/MAG',
    h1: 'Soldadura MIG/MAG pulsada: modos de transferencia y cuándo marca la diferencia',
    crumb: 'MIG/MAG pulsado',
    read: '6 min de lectura',
    body: `
<p>En MIG/MAG, el metal que funde en la punta del hilo pasa al baño de distintas formas. Es el <strong>modo de transferencia</strong>, y determina la calidad del cordón, las proyecciones, la penetración y el aporte térmico. El arco pulsado es el modo más controlado, pero no hace falta en todos los trabajos.</p>
<h2>Los cuatro modos básicos</h2>
<table class="data-table"><thead><tr><th>Modo</th><th>Intensidad/tensión</th><th>Características</th><th>Uso típico</th></tr></thead><tbody>
<tr><td>Cortocircuito</td><td>Baja</td><td>El hilo toca el baño y cortocircuita; bajo aporte térmico</td><td>Chapa fina, raíces, soldadura en posición</td></tr>
<tr><td>Globular</td><td>Media</td><td>Gotas grandes e irregulares; muchas proyecciones</td><td>Zona de transición que suele evitarse</td></tr>
<tr><td>Spray</td><td>Alta</td><td>Gotas finas, sin proyecciones y gran penetración; alto aporte térmico</td><td>Piezas gruesas, posición plana</td></tr>
<tr><td>Pulsado</td><td>Alterna entre pico y base</td><td>Una gota por pulso; calidad cercana al spray con menos calor medio</td><td>Inoxidable, aluminio, posición, cordones vistos</td></tr>
</tbody></table>
<h2>Cómo funciona el arco pulsado</h2>
<p>La fuente cambia la intensidad decenas o cientos de veces por segundo entre una <strong>corriente de pico</strong> alta y una <strong>corriente de base</strong> baja. En el pico se desprende la gota de la punta del hilo; en la base el arco sigue encendido pero la punta solo se calienta. Lo ideal es una gota por pulso. Así se obtiene la transferencia limpia y regular del spray con una intensidad media mucho menor.</p>
<p>Las máquinas modernas lo gestionan con programas <strong>sinérgicos</strong>: el usuario elige material, diámetro de hilo y gas, y al cambiar la velocidad de hilo la máquina ajusta los parámetros de pulso automáticamente.</p>
<h2>Ventajas</h2>
<ul>
<li><strong>Pocas proyecciones:</strong> menos amolado y limpieza, gran ventaja en cordones vistos.</li>
<li><strong>Menor aporte térmico:</strong> menos deformación en espesores finos y medios; en inoxidable, menos coloración y menos riesgo de precipitación de carburos.</li>
<li><strong>Soldadura en posición:</strong> calidad cercana al spray en vertical y techo, con mejor fusión que el cortocircuito.</li>
<li><strong>Aluminio:</strong> mayor rango de trabajo y arco estable; con doble pulso, aspecto ondulado similar al TIG.</li>
<li><strong>Fusión de paredes:</strong> opción más segura frente a la falta de fusión típica del cortocircuito.</li>
</ul>
<h2>Limitaciones</h2>
<ul>
<li><strong>Gas:</strong> pulsado y spray exigen gas rico en argón (en acero al carbono, por ejemplo grupos M20 o M21; en aluminio, argón puro). Con 100 % CO₂ no se logra un verdadero spray ni pulsado (ver <a href="koruyucu-gaz-secimi-mig-mag.html">selección del gas</a>).</li>
<li><strong>Equipo:</strong> se necesita una fuente con función pulsada y programas sinérgicos.</li>
<li><strong>Piezas gruesas:</strong> en posición plana y grandes espesores, el spray convencional o el arco sumergido pueden dar más depósito.</li>
<li><strong>Disciplina de parámetros:</strong> si programa, hilo y gas no casan, se pierden las ventajas.</li>
</ul>
<h2>Aporte térmico: atención con el arco pulsado</h2>
<p>La fórmula clásica calcula el aporte con tensión e intensidad medias (ver <a href="kaynak-isi-girdisi.html">aporte térmico</a>). En arcos con forma de onda controlada, como el pulsado, intensidad y tensión cambian continuamente, así que el producto de los valores medios puede no reflejar la potencia real. Por eso ISO 15614-1 e ISO/TR 18491 prevén determinarlo mediante <strong>potencia instantánea</strong> o <strong>energía instantánea</strong> para procesos con forma de onda controlada. Las máquinas modernas pueden mostrar ese valor directamente. En trabajos con límites de aporte (aceros de alta resistencia o uniones con requisitos de impacto), la WPS debe indicar con qué método se calcula.</p>
<h2>¿Qué se define en la WPS?</h2>
<ul>
<li>Modo de transferencia (cortocircuito, spray o pulsado) y, si procede, el programa sinérgico.</li>
<li>Diámetro de hilo, rango de velocidad de hilo y gas de protección.</li>
<li>Rango de aporte térmico y método de cálculo.</li>
<li>Posición, velocidad de avance y ángulo de antorcha.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> el modo de transferencia se elige según material, espesor, posición y visibilidad del cordón y se define en la WPS. En trabajos con límites de aporte térmico, la WPS indica claramente el método de cálculo. <a href="../kaynak-yontemleri.html">Nuestros procesos de soldadura →</a></p></div>
`,
    faq: [
      ['¿Qué es la soldadura pulsada?', 'MIG/MAG en el que la intensidad alterna rápidamente entre un pico alto y una base baja. Se desprende una gota por pulso y se obtiene un cordón casi como el spray, con pocas proyecciones y menos calor medio.'],
      ['¿Cuándo se usa el pulsado?', 'Es más útil en inoxidable y aluminio, espesores finos y medios, soldadura en posición y cordones vistos.'],
      ['¿Se puede soldar pulsado con 100 % CO₂?', 'No. El pulsado y el spray exigen gas rico en argón; con CO₂ puro no se consigue un verdadero arco pulsado.'],
      ['¿Cómo se calcula el aporte térmico con arco pulsado?', 'Para arcos con forma de onda controlada, ISO 15614-1 e ISO/TR 18491 recomiendan calcularlo con potencia o energía instantánea.']
    ],
    cta_h3: 'El arco adecuado, un cordón limpio',
    cta_p: 'Envíenos su plano; ofertamos con el proceso adecuado al material y al espesor.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Soudage MIG/MAG pulsé : modes de transfert et quand l’arc pulsé fait la différence',
    meta: 'Quelle différence entre court-circuit, globulaire, pulvérisation axiale et arc pulsé ? Fonctionnement du MIG/MAG pulsé, ses atouts, le gaz requis et pourquoi l’énergie en arc pulsé doit se calculer à partir de la puissance instantanée.',
    og: 'Soudage MIG/MAG pulsé',
    tag: 'Procédés de soudage · MIG/MAG',
    h1: 'Soudage MIG/MAG pulsé : modes de transfert et quand l’arc pulsé fait la différence',
    crumb: 'MIG/MAG pulsé',
    read: '6 min de lecture',
    body: `
<p>En MIG/MAG, le métal fondu au bout du fil passe dans le bain de différentes manières. C’est le <strong>mode de transfert</strong>, qui détermine l’aspect du cordon, les projections, la pénétration et l’énergie. L’arc pulsé est le mode le plus maîtrisé, mais il n’est pas nécessaire pour tous les travaux.</p>
<h2>Les quatre modes de base</h2>
<table class="data-table"><thead><tr><th>Mode</th><th>Intensité/tension</th><th>Caractéristiques</th><th>Usage typique</th></tr></thead><tbody>
<tr><td>Court-circuit</td><td>Faible</td><td>Le fil touche le bain et court-circuite ; faible énergie</td><td>Tôle fine, passes de racine, soudage en position</td></tr>
<tr><td>Globulaire</td><td>Moyenne</td><td>Grosses gouttes irrégulières ; beaucoup de projections</td><td>Zone de transition généralement évitée</td></tr>
<tr><td>Pulvérisation axiale</td><td>Élevée</td><td>Fines gouttes, sans projection, forte pénétration ; énergie élevée</td><td>Pièces épaisses, à plat</td></tr>
<tr><td>Pulsé</td><td>Alterne entre pic et fond</td><td>Une goutte par impulsion ; qualité proche de la pulvérisation avec moins de chaleur moyenne</td><td>Inox, aluminium, soudage en position, soudures visibles</td></tr>
</tbody></table>
<h2>Principe de l’arc pulsé</h2>
<p>Le générateur fait varier l’intensité des dizaines à des centaines de fois par seconde entre un <strong>courant de pic</strong> élevé et un <strong>courant de fond</strong> faible. Au pic, la goutte se détache du fil ; au fond, l’arc reste allumé mais le bout du fil ne fait que chauffer. Idéalement, une goutte passe par impulsion. On obtient ainsi le transfert régulier et sans projection de la pulvérisation axiale avec une intensité moyenne bien plus faible.</p>
<p>Les machines modernes gèrent ces réglages avec des programmes <strong>synergiques</strong> : l’utilisateur choisit matériau, diamètre de fil et gaz ; quand il modifie la vitesse fil, la machine ajuste automatiquement les paramètres d’impulsion.</p>
<h2>Avantages</h2>
<ul>
<li><strong>Peu de projections :</strong> moins de meulage et de nettoyage, un atout majeur pour les soudures visibles.</li>
<li><strong>Énergie plus faible :</strong> moins de déformation sur faibles et moyennes épaisseurs ; sur l’inox, moins de colorations et de risque de précipitation de carbures.</li>
<li><strong>Soudage en position :</strong> qualité proche de la pulvérisation en montante et au plafond, avec une meilleure fusion qu’en court-circuit.</li>
<li><strong>Aluminium :</strong> plage de travail plus large et arc stable ; en double pulsé, un aspect en écailles proche du TIG.</li>
<li><strong>Fusion des bords :</strong> plus sûr face au manque de fusion (collage) typique du court-circuit.</li>
</ul>
<h2>Limites</h2>
<ul>
<li><strong>Gaz :</strong> arc pulsé et pulvérisation exigent un gaz riche en argon (pour l’acier, par exemple groupes M20 ou M21 ; pour l’aluminium, argon pur). Sous 100 % CO₂, ni vraie pulvérisation ni vrai pulsé (voir <a href="koruyucu-gaz-secimi-mig-mag.html">choix du gaz</a>).</li>
<li><strong>Équipement :</strong> un générateur pulsé à programmes synergiques est nécessaire.</li>
<li><strong>Pièces épaisses :</strong> à plat sur fortes sections, la pulvérisation classique ou l’arc submergé peuvent offrir un taux de dépôt supérieur.</li>
<li><strong>Rigueur des paramètres :</strong> si programme, fil et gaz ne correspondent pas, les avantages disparaissent.</li>
</ul>
<h2>Énergie de soudage : attention en arc pulsé</h2>
<p>La formule classique calcule l’énergie à partir de la tension et de l’intensité moyennes (voir <a href="kaynak-isi-girdisi.html">énergie de soudage</a>). Avec des arcs à forme d’onde contrôlée comme le pulsé, intensité et tension varient en permanence, et le produit des moyennes peut ne pas refléter la puissance réelle. L’ISO 15614-1 et l’ISO/TR 18491 prévoient donc, pour ces procédés, une détermination par <strong>puissance instantanée</strong> ou <strong>énergie instantanée</strong>. Les machines modernes peuvent afficher directement cette valeur. Pour les travaux avec limites d’énergie (aciers à haute résistance, assemblages avec exigences de résilience), le DMOS doit indiquer clairement la méthode utilisée.</p>
<h2>Que définit le DMOS ?</h2>
<ul>
<li>Le mode de transfert (court-circuit, pulvérisation ou pulsé) et, le cas échéant, le programme synergique.</li>
<li>Diamètre de fil, plage de vitesse fil et gaz de protection.</li>
<li>Plage d’énergie et méthode de calcul.</li>
<li>Position, vitesse d’avance et inclinaison de la torche.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> le mode de transfert est choisi selon le matériau, l’épaisseur, la position et la visibilité de la soudure, et défini dans le DMOS. Pour les travaux avec limite d’énergie, la méthode de calcul est indiquée clairement dans le DMOS. <a href="../kaynak-yontemleri.html">Nos procédés de soudage →</a></p></div>
`,
    faq: [
      ['Qu’est-ce que le soudage pulsé ?', 'Un soudage MIG/MAG où l’intensité alterne rapidement entre un pic élevé et un fond faible. Une goutte se détache par impulsion, donnant une soudure proche de la pulvérisation, avec peu de projections et moins de chaleur moyenne.'],
      ['Quand utiliser l’arc pulsé ?', 'Il est le plus utile sur l’inox et l’aluminium, sur faibles et moyennes épaisseurs, en position et pour les soudures visibles.'],
      ['Peut-on souder en pulsé sous 100 % CO₂ ?', 'Non. Le pulsé et la pulvérisation exigent un gaz riche en argon ; sous CO₂ pur, pas de vrai arc pulsé.'],
      ['Comment calculer l’énergie en arc pulsé ?', 'Pour les arcs à forme d’onde contrôlée, l’ISO 15614-1 et l’ISO/TR 18491 recommandent la puissance ou l’énergie instantanée.']
    ],
    cta_h3: 'Le bon arc, une soudure propre',
    cta_p: 'Envoyez votre plan ; nous chiffrons avec un procédé adapté au matériau et à l’épaisseur.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Saldatura MIG/MAG pulsata: modi di trasferimento e quando l’arco pulsato fa la differenza',
    meta: 'Che differenza c’è tra corto circuito, globulare, spray e arco pulsato? Come funziona il MIG/MAG pulsato, dove aiuta, quale gas richiede e perché l’apporto termico in pulsato va calcolato con la potenza istantanea.',
    og: 'Saldatura MIG/MAG pulsata',
    tag: 'Processi di saldatura · MIG/MAG',
    h1: 'Saldatura MIG/MAG pulsata: modi di trasferimento e quando l’arco pulsato fa la differenza',
    crumb: 'MIG/MAG pulsato',
    read: '6 min di lettura',
    body: `
<p>Nel MIG/MAG il metallo che fonde in punta al filo passa nel bagno in modi diversi. È il <strong>modo di trasferimento</strong>, e determina qualità del cordone, spruzzi, penetrazione e apporto termico. L’arco pulsato è il modo più controllato, ma non serve per ogni lavoro.</p>
<h2>I quattro modi di base</h2>
<table class="data-table"><thead><tr><th>Modo</th><th>Corrente/tensione</th><th>Caratteristiche</th><th>Impiego tipico</th></tr></thead><tbody>
<tr><td>Corto circuito</td><td>Bassa</td><td>Il filo tocca il bagno e va in corto; basso apporto termico</td><td>Lamiera sottile, radici, saldatura in posizione</td></tr>
<tr><td>Globulare</td><td>Media</td><td>Gocce grandi e irregolari; molti spruzzi</td><td>Zona di transizione in genere evitata</td></tr>
<tr><td>Spray</td><td>Alta</td><td>Gocce fini, senza spruzzi, penetrazione profonda; alto apporto termico</td><td>Pezzi spessi, in piano</td></tr>
<tr><td>Pulsato</td><td>Alterna tra picco e base</td><td>Una goccia per impulso; qualità vicina allo spray con meno calore medio</td><td>Inox, alluminio, posizione, cordoni a vista</td></tr>
</tbody></table>
<h2>Come funziona l’arco pulsato</h2>
<p>Il generatore commuta la corrente da decine a centinaia di volte al secondo tra una <strong>corrente di picco</strong> alta e una <strong>corrente di base</strong> bassa. Al picco la goccia si stacca dalla punta del filo; in base l’arco resta acceso ma la punta si scalda soltanto. Idealmente passa una goccia per impulso. Si ottiene così il trasferimento regolare e senza spruzzi dello spray con una corrente media molto più bassa.</p>
<p>Le macchine moderne gestiscono queste impostazioni con programmi <strong>sinergici</strong>: l’utente sceglie materiale, diametro del filo e gas, e al variare della velocità del filo la macchina adegua automaticamente i parametri di impulso.</p>
<h2>Vantaggi</h2>
<ul>
<li><strong>Pochi spruzzi:</strong> meno molatura e pulizia, grande vantaggio sui cordoni a vista.</li>
<li><strong>Minore apporto termico:</strong> meno deformazioni su spessori sottili e medi; sull’inox meno ossidazioni e minor rischio di precipitazione di carburi.</li>
<li><strong>Saldatura in posizione:</strong> qualità vicina allo spray in verticale e sopratesta, con fusione migliore del corto circuito.</li>
<li><strong>Alluminio:</strong> campo di lavoro più ampio e arco stabile; con il doppio pulsato un aspetto a scaglie simile al TIG.</li>
<li><strong>Fusione dei lembi:</strong> più sicuro contro le mancate fusioni tipiche del corto circuito.</li>
</ul>
<h2>Limiti</h2>
<ul>
<li><strong>Gas:</strong> pulsato e spray richiedono gas ricchi di argon (sull’acciaio al carbonio per esempio gruppi M20 o M21, sull’alluminio argon puro). Con 100 % CO₂ non si ottiene un vero spray né un vero pulsato (vedi <a href="koruyucu-gaz-secimi-mig-mag.html">scelta del gas</a>).</li>
<li><strong>Attrezzatura:</strong> serve un generatore con funzione pulsata e programmi sinergici.</li>
<li><strong>Pezzi spessi:</strong> in piano su grandi spessori, lo spray tradizionale o l’arco sommerso possono dare più deposito.</li>
<li><strong>Disciplina dei parametri:</strong> se programma, filo e gas non corrispondono, i vantaggi si perdono.</li>
</ul>
<h2>Apporto termico: attenzione con il pulsato</h2>
<p>La formula classica calcola l’apporto con tensione e corrente medie (vedi <a href="kaynak-isi-girdisi.html">apporto termico</a>). Negli archi a forma d’onda controllata come il pulsato, corrente e tensione cambiano di continuo e il prodotto delle medie può non rappresentare la potenza reale. Per questo la ISO 15614-1 e la ISO/TR 18491 prevedono per questi processi la determinazione tramite <strong>potenza istantanea</strong> o <strong>energia istantanea</strong>. Le macchine moderne possono mostrare direttamente il valore. Nei lavori con limiti di apporto (acciai ad alta resistenza, giunti con requisiti di resilienza) la WPS deve indicare chiaramente il metodo usato.</p>
<h2>Cosa va nella WPS?</h2>
<ul>
<li>Modo di trasferimento (corto circuito, spray o pulsato) e, se pertinente, il programma sinergico.</li>
<li>Diametro del filo, campo di velocità del filo e gas di protezione.</li>
<li>Campo di apporto termico e metodo di calcolo.</li>
<li>Posizione, velocità di avanzamento e inclinazione della torcia.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> il modo di trasferimento si sceglie in base a materiale, spessore, posizione e visibilità del cordone ed è definito nella WPS. Nei lavori con limiti di apporto termico la WPS indica chiaramente il metodo di calcolo. <a href="../kaynak-yontemleri.html">I nostri processi di saldatura →</a></p></div>
`,
    faq: [
      ['Cos’è la saldatura pulsata?', 'Un MIG/MAG in cui la corrente alterna rapidamente tra un picco alto e una base bassa. Si stacca una goccia per impulso, ottenendo un cordone simile allo spray con pochi spruzzi e meno calore medio.'],
      ['Quando si usa il pulsato?', 'È più utile su inox e alluminio, spessori sottili e medi, saldatura in posizione e cordoni a vista.'],
      ['Si può saldare in pulsato con 100 % CO₂?', 'No. Pulsato e spray richiedono gas ricchi di argon; con CO₂ puro non si ottiene un vero arco pulsato.'],
      ['Come si calcola l’apporto termico in pulsato?', 'Per gli archi a forma d’onda controllata la ISO 15614-1 e la ISO/TR 18491 raccomandano potenza o energia istantanea.']
    ],
    cta_h3: 'L’arco giusto, un cordone pulito',
    cta_p: 'Inviateci il disegno; quotiamo con un processo adatto a materiale e spessore.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Pulserend MIG/MAG-lassen: booglassoorten en wanneer de pulsboog het verschil maakt',
    meta: 'Wat is het verschil tussen kortsluitboog, overgangsboog, sproeiboog en pulsboog? Hoe pulserend MIG/MAG werkt, waar het helpt, welk gas het vraagt en waarom de warmte-inbreng bij een pulsboog uit het momentane vermogen moet komen.',
    og: 'Pulserend MIG/MAG-lassen',
    tag: 'Lasprocessen · MIG/MAG',
    h1: 'Pulserend MIG/MAG-lassen: booglassoorten en wanneer de pulsboog het verschil maakt',
    crumb: 'Pulserend MIG/MAG',
    read: '6 min lezen',
    body: `
<p>Bij MIG/MAG-lassen gaat het metaal dat aan de draadpunt smelt op verschillende manieren over naar het smeltbad. Dit heet de <strong>booglassoort</strong> of overgangsvorm, en die bepaalt direct naadkwaliteit, spatten, inbranding en warmte-inbreng. De pulsboog is de best beheersbare vorm, maar is niet voor elk werk nodig.</p>
<h2>De vier basisvormen</h2>
<table class="data-table"><thead><tr><th>Vorm</th><th>Stroom/spanning</th><th>Kenmerken</th><th>Typisch gebruik</th></tr></thead><tbody>
<tr><td>Kortsluitboog</td><td>Laag</td><td>Draad raakt het bad en maakt kortsluiting; lage warmte-inbreng</td><td>Dunne plaat, grondlagen, positielassen</td></tr>
<tr><td>Overgangsboog</td><td>Middel</td><td>Grote, onregelmatige druppels; veel spatten</td><td>Overgangsgebied dat meestal wordt vermeden</td></tr>
<tr><td>Sproeiboog</td><td>Hoog</td><td>Fijne druppels, spatvrij en diepe inbranding; hoge warmte-inbreng</td><td>Dikke delen, onder de hand</td></tr>
<tr><td>Pulsboog</td><td>Wisselt tussen piek- en basisstroom</td><td>Eén druppel per puls; kwaliteit als sproeiboog bij lagere gemiddelde warmte</td><td>RVS, aluminium, positielassen, zichtlassen</td></tr>
</tbody></table>
<h2>Hoe werkt de pulsboog?</h2>
<p>De stroombron schakelt de stroom tientallen tot honderden keren per seconde tussen een hoge <strong>piekstroom</strong> en een lage <strong>basisstroom</strong>. Bij de piek wordt de druppel van de draadpunt losgemaakt; bij de basis blijft de boog branden maar wordt de draadpunt alleen opgewarmd. Ideaal is één druppel per puls. Zo krijg je de spatvrije, regelmatige overgang van de sproeiboog bij een veel lagere gemiddelde stroom.</p>
<p>Moderne machines regelen dit met <strong>synergische</strong> programma’s: de gebruiker kiest materiaal, draaddiameter en gas; wijzigt hij de draadsnelheid, dan past de machine de pulsparameters automatisch aan.</p>
<h2>Voordelen</h2>
<ul>
<li><strong>Weinig spatten:</strong> minder slijpen en reinigen, een groot voordeel bij zichtlassen.</li>
<li><strong>Lagere warmte-inbreng:</strong> minder vervorming bij dunne en middeldikke delen; bij RVS minder aanloopkleuren en minder risico op carbideprecipitatie.</li>
<li><strong>Positielassen:</strong> sproeiboogkwaliteit in verticale en boven-het-hoofd-positie, met betere binding dan de kortsluitboog.</li>
<li><strong>Aluminium:</strong> groter werkbereik en stabiele boog; met dubbele puls een TIG-achtig geschubd uiterlijk.</li>
<li><strong>Flankbinding:</strong> veiliger tegen bindingsfouten zoals die bij de kortsluitboog voorkomen.</li>
</ul>
<h2>Beperkingen</h2>
<ul>
<li><strong>Gas:</strong> puls- en sproeiboog vragen argonrijk gas (bij koolstofstaal bijvoorbeeld groepen M20 of M21, bij aluminium zuiver argon). Met 100 % CO₂ is geen echte sproei- of pulsboog mogelijk (zie <a href="koruyucu-gaz-secimi-mig-mag.html">keuze van het beschermgas</a>).</li>
<li><strong>Apparatuur:</strong> een stroombron met pulsfunctie en synergische programma’s is nodig.</li>
<li><strong>Dikke delen:</strong> onder de hand bij zware doorsneden kunnen de klassieke sproeiboog of onder poeder lassen een hogere neersmelt geven.</li>
<li><strong>Parameterdiscipline:</strong> kloppen programma, draad en gas niet bij elkaar, dan gaan de voordelen verloren.</li>
</ul>
<h2>Warmte-inbreng: let op bij de pulsboog</h2>
<p>De klassieke formule rekent met gemiddelde spanning en gemiddelde stroom (zie <a href="kaynak-isi-girdisi.html">warmte-inbreng</a>). Bij golfvormgestuurde bogen zoals de pulsboog veranderen stroom en spanning voortdurend, waardoor het product van de gemiddelden het werkelijke vermogen niet juist weergeeft. ISO 15614-1 en ISO/TR 18491 voorzien daarom voor golfvormgestuurde processen in bepaling via <strong>momentaan vermogen</strong> of <strong>momentane energie</strong>. Moderne machines kunnen die waarde direct tonen. Bij werk met grenzen aan de warmte-inbreng (zoals hogesterktestaal of verbindingen met kerfslageisen) moet de WPS duidelijk vermelden met welke methode de waarde is bepaald.</p>
<h2>Wat staat er in de WPS?</h2>
<ul>
<li>Booglassoort (kortsluit-, sproei- of pulsboog) en zo nodig het synergische programma.</li>
<li>Draaddiameter, bereik van de draadsnelheid en beschermgas.</li>
<li>Bereik van de warmte-inbreng en de berekeningsmethode.</li>
<li>Positie, lassnelheid en toortshoek.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> de booglassoort kiezen we op basis van materiaal, dikte, positie en zichtbaarheid van de las en leggen we vast in de WPS. Bij grenzen aan de warmte-inbreng vermeldt de WPS de berekeningsmethode uitdrukkelijk. <a href="../kaynak-yontemleri.html">Onze lasprocessen →</a></p></div>
`,
    faq: [
      ['Wat is pulslassen?', 'MIG/MAG-lassen waarbij de stroom snel wisselt tussen een hoge piek- en een lage basisstroom. Per puls komt één druppel los, wat een las geeft als met sproeiboog, met weinig spatten en minder gemiddelde warmte.'],
      ['Wanneer gebruik je de pulsboog?', 'Vooral bij RVS en aluminium, dunne en middeldikke delen, positielassen en zichtlassen.'],
      ['Kan pulslassen met 100 % CO₂?', 'Nee. Puls- en sproeiboog vragen argonrijk gas; met zuiver CO₂ is geen echte pulsboog mogelijk.'],
      ['Hoe bereken je de warmte-inbreng bij een pulsboog?', 'Voor golfvormgestuurde bogen bevelen ISO 15614-1 en ISO/TR 18491 berekening via momentaan vermogen of momentane energie aan.']
    ],
    cta_h3: 'De juiste boog, een schone las',
    cta_p: 'Stuur uw tekening; we offreren met een lasproces dat past bij materiaal en dikte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Pulset MIG/MAG-sveising: lysbuetyper og når pulsbuen utgjør en forskjell',
    meta: 'Hva er forskjellen på kortslutningsbue, globulær bue, spraybue og pulsbue? Hvordan pulset MIG/MAG fungerer, hvor det hjelper, hvilken gass som kreves og hvorfor varmetilførselen med pulsbue bør beregnes fra momentan effekt.',
    og: 'Pulset MIG/MAG-sveising',
    tag: 'Sveisemetoder · MIG/MAG',
    h1: 'Pulset MIG/MAG-sveising: lysbuetyper og når pulsbuen utgjør en forskjell',
    crumb: 'Pulset MIG/MAG',
    read: '6 min lesing',
    body: `
<p>Ved MIG/MAG-sveising går metallet som smelter på trådspissen over i smeltebadet på ulike måter. Dette kalles <strong>overgangsform</strong> eller lysbuetype, og det bestemmer direkte sveisekvalitet, sprut, innbrenning og varmetilførsel. Pulsbuen er den mest kontrollerte formen, men trengs ikke til alt arbeid.</p>
<h2>De fire grunnformene</h2>
<table class="data-table"><thead><tr><th>Form</th><th>Strøm/spenning</th><th>Egenskaper</th><th>Typisk bruk</th></tr></thead><tbody>
<tr><td>Kortslutningsbue</td><td>Lav</td><td>Tråden berører badet og kortslutter; lav varmetilførsel</td><td>Tynnplate, rotstrenger, stillingssveising</td></tr>
<tr><td>Globulær bue</td><td>Middels</td><td>Store, uregelmessige dråper; mye sprut</td><td>Overgangsområde som vanligvis unngås</td></tr>
<tr><td>Spraybue</td><td>Høy</td><td>Fine dråper, sprutfritt og dyp innbrenning; høy varmetilførsel</td><td>Tykke deler, horisontal stilling</td></tr>
<tr><td>Pulsbue</td><td>Veksler mellom topp- og grunnstrøm</td><td>Én dråpe per puls; nær spraykvalitet ved lavere middelvarme</td><td>Rustfritt, aluminium, stillingssveising, synlige sveiser</td></tr>
</tbody></table>
<h2>Slik fungerer pulsbuen</h2>
<p>Strømkilden veksler strømmen titalls til hundrevis av ganger i sekundet mellom en høy <strong>toppstrøm</strong> og en lav <strong>grunnstrøm</strong>. Ved toppen løsner dråpen fra trådspissen; ved grunnstrømmen brenner buen videre, men trådspissen bare varmes. Ideelt går én dråpe over per puls. Slik får man spraybuens sprutfrie og jevne overgang med mye lavere middelstrøm.</p>
<p>Moderne maskiner håndterer dette med <strong>synergiske</strong> programmer: brukeren velger materiale, tråddiameter og gass, og når trådhastigheten endres, justerer maskinen pulsparameterne automatisk.</p>
<h2>Fordeler</h2>
<ul>
<li><strong>Lite sprut:</strong> mindre sliping og rengjøring, en stor fordel på synlige sveiser.</li>
<li><strong>Lavere varmetilførsel:</strong> mindre deformasjon på tynne og middels tykkelser; på rustfritt mindre anløpsfarger og lavere risiko for karbidutskillelse.</li>
<li><strong>Stillingssveising:</strong> nær spraykvalitet i vertikal- og overheadstilling, med bedre gjennomsmelting enn kortslutningsbue.</li>
<li><strong>Aluminium:</strong> bredere arbeidsområde og stabil bue; med dobbelpuls et TIG-lignende skjellmønster.</li>
<li><strong>Sideveggsmelting:</strong> tryggere mot bindingsfeil som opptrer ved kortslutningsbue.</li>
</ul>
<h2>Begrensninger</h2>
<ul>
<li><strong>Gass:</strong> puls- og spraybue krever argonrik gass (for karbonstål f.eks. gruppene M20 eller M21, for aluminium ren argon). Med 100 % CO₂ oppnås verken ekte spray eller puls (se <a href="koruyucu-gaz-secimi-mig-mag.html">valg av beskyttelsesgass</a>).</li>
<li><strong>Utstyr:</strong> det trengs en strømkilde med pulsfunksjon og synergiske programmer.</li>
<li><strong>Tykke deler:</strong> i horisontal stilling på store tverrsnitt kan klassisk spraybue eller pulverbuesveising gi høyere avsetting.</li>
<li><strong>Parameterdisiplin:</strong> passer ikke program, tråd og gass sammen, forsvinner fordelene.</li>
</ul>
<h2>Varmetilførsel: obs ved pulsbue</h2>
<p>Den klassiske formelen beregner varmetilførsel ut fra middelspenning og middelstrøm (se <a href="kaynak-isi-girdisi.html">varmetilførsel</a>). Ved bølgeformstyrte buer som puls endres strøm og spenning hele tiden, så produktet av middelverdiene gjenspeiler ikke nødvendigvis den reelle effekten. ISO 15614-1 og ISO/TR 18491 åpner derfor for å bestemme varmetilførselen ved <strong>momentan effekt</strong> eller <strong>momentan energi</strong> for bølgeformstyrte prosesser. Moderne maskiner kan vise denne verdien direkte. På jobber med grenser for varmetilførsel (f.eks. høyfast stål eller forbindelser med krav til slagseighet) bør WPS-en tydelig angi hvilken metode verdien bygger på.</p>
<h2>Hva står i WPS-en?</h2>
<ul>
<li>Overgangsform (kortslutning, spray eller puls) og eventuelt synergiprogram.</li>
<li>Tråddiameter, område for trådhastighet og beskyttelsesgass.</li>
<li>Område for varmetilførsel og beregningsmetode.</li>
<li>Stilling, sveisehastighet og pistolvinkel.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> overgangsformen velges etter materiale, tykkelse, stilling og hvor synlig sveisen er, og fastsettes i WPS-en. På jobber med grenser for varmetilførsel står beregningsmetoden tydelig i WPS-en. <a href="../kaynak-yontemleri.html">Våre sveisemetoder →</a></p></div>
`,
    faq: [
      ['Hva er pulssveising?', 'MIG/MAG-sveising der strømmen veksler raskt mellom høy topp- og lav grunnstrøm. Én dråpe løsner per puls, noe som gir en sveis nær spraykvalitet med lite sprut og lavere middelvarme.'],
      ['Når brukes pulsbue?', 'Den gir mest nytte på rustfritt og aluminium, tynne og middels tykkelser, stillingssveising og synlige sveiser.'],
      ['Kan man pulssveise med 100 % CO₂?', 'Nei. Puls- og spraybue krever argonrik gass; med ren CO₂ oppnås ikke ekte pulsbue.'],
      ['Hvordan beregnes varmetilførsel med pulsbue?', 'For bølgeformstyrte buer anbefaler ISO 15614-1 og ISO/TR 18491 beregning fra momentan effekt eller momentan energi.']
    ],
    cta_h3: 'Riktig lysbue, ren sveis',
    cta_p: 'Send deltegningen; vi gir tilbud med en sveisemetode tilpasset materiale og tykkelse.',
    cta_btn: 'Be om tilbud →'
  }
};
