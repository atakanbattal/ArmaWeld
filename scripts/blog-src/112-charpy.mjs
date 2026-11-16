export default {
  order: 112,
  slug: 'charpy-darbe-testi-dusuk-sicaklik',
  key: 'p112_charpy',
  date: '2026-09-28',
  keywords: 'Charpy darbe testi, çentik darbe testi kaynak, -20 derece darbe enerjisi, 27 J darbe, J2 K2 çelik, ISO 9016 çentik yeri, düşük sıcaklık tokluk kaynak, Charpy impact test weld, Kerbschlagbiegeversuch Schweißnaht, ensayo Charpy soldadura, essai Charpy soudure',
  related: ['s355jr-s355j2-s355k2-s355nl-farki', 'norvec-kaynakli-parca-tedarik', 'kaynak-isi-girdisi', 'malzeme-sertifikasi-en-10204-3-1'],
  tr: {
    title: 'Charpy Darbe Testi: Düşük Sıcaklıkta Kaynak Tokluğu Nasıl Kanıtlanır?',
    meta: 'Soğuk iklimde, dinamik yük altında veya kalın kesitlerde çalışan kaynaklı parçalarda Charpy V-çentik darbe testi: J2/K2/NL sınıfları, ISO 9016 çentik yerleri, ısı girdisinin tokluğa etkisi, malzeme sertifikası ile kaynak testinin farkı.',
    og: 'Charpy darbe testi ve kaynak tokluğu',
    tag: 'Teknik Rehber · Kalite',
    h1: 'Charpy Darbe Testi: Düşük Sıcaklıkta Kaynak Tokluğu Nasıl Kanıtlanır?',
    crumb: 'Charpy darbe testi',
    read: '7 dk okuma',
    body: `
<p>Çelik, sıcaklık düştükçe belirli bir noktadan sonra sünek davranıştan gevrek kırılmaya geçer. İskandinavya'da açık havada çalışan bir vinç, kışın sahada kullanılan bir iş makinesi veya darbeli yük alan bir şasi için asıl soru "ne kadar dayanıklı" değil, "soğukta ne kadar tok" sorusudur. Bunun ölçüsü Charpy V-çentik darbe testidir.</p>
<h2>Test Nasıl Yapılır?</h2>
<p>10×10×55 mm standart numuneye V çentik açılır, istenen sıcaklığa (ör. 0, -20, -40 °C) soğutulur ve sarkaçla tek darbede kırılır. Kırılma için harcanan enerji joule olarak okunur. Genellikle üç numunenin ortalaması ve tek değerin alt sınırı birlikte değerlendirilir.</p>
<h2>Malzeme Sınıfları ve Kaynak</h2>
<p>S355 ailesindeki son ekler malzemenin darbe değerini anlatır: JR 20 °C'de, J0 0 °C'de, J2 -20 °C'de 27 J; K2 -20 °C'de 40 J; NL ise -50 °C'ye kadar garanti verir (bkz. <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355 sınıfları</a>). Ancak bu değerler ana malzemeye aittir. Kaynak metali ve ısıdan etkilenen bölge, kaynak koşullarına göre çok farklı sonuç verebilir; bu yüzden şartname kaynak için ayrıca darbe testi isteyebilir.</p>
<h2>Çentik Nereye Açılır? (ISO 9016)</h2>
<ul>
<li><strong>Kaynak metali (VWT):</strong> Dolgu metalinin ve prosedürün tokluğu.</li>
<li><strong>Ergime sınırı / ITAB (VHT):</strong> Genellikle en kritik bölge; iri taneli ITAB'da tokluk düşebilir.</li>
</ul>
<p>Numunenin yüzeyden hangi derinlikte alındığı da raporda belirtilir.</p>
<h2>Kaynak Tokluğunu Ne Etkiler?</h2>
<ul>
<li><strong>Isı girdisi:</strong> Çok yüksek <a href="kaynak-isi-girdisi.html">ısı girdisi</a> ITAB'da tane büyümesine ve tokluk kaybına yol açar. Prosedürde onaylanan aralığın aşılmaması önemlidir.</li>
<li><strong>Paso sıcaklığı:</strong> Çok yüksek ara paso sıcaklığı benzer etki yapar.</li>
<li><strong>Dolgu metali:</strong> Düşük sıcaklık tokluğu garantili tel veya elektrot seçilmelidir.</li>
<li><strong>Kalınlık ve paso düzeni:</strong> Çok pasolu kaynakta sonraki pasolar öncekileri kısmen tavlar.</li>
</ul>
<h2>Alıcı Neyi Netleştirmeli?</h2>
<ul>
<li>Test sıcaklığı ve enerji şartı (ör. -20 °C'de 27 J) hem ana malzeme hem kaynak için.</li>
<li>Bu şartı karşılayan WPQR'nin olup olmadığı.</li>
<li>Malzemenin <a href="malzeme-sertifikasi-en-10204-3-1.html">3.1 sertifikasında</a> darbe değerlerinin yer alması.</li>
<li>Üretimde ısı girdisinin nasıl kayıt altına alınacağı.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Düşük sıcaklık tokluğu istenen işlerde malzeme sertifikalarındaki darbe değerlerini kontrol ediyor, ısı girdisini WPS sınırlarında tutup kayıt altına alıyoruz. Darbe testleri akredite laboratuvarlarda yapılır; süreci biz koordine ediyoruz. <a href="../ndt.html">Muayene ve kalite →</a></p></div>
`,
    faq: [
      ['Charpy testi neyi ölçer?', 'Belirli sıcaklıkta çentikli numuneyi kırmak için gereken enerjiyi, yani tokluğu.'],
      ['S355J2 kaynak için yeterli mi?', 'Malzeme -20 °C\'de 27 J garanti eder; kaynak için ayrı doğrulama gerekebilir.'],
      ['En kritik bölge neresi?', 'Genellikle ergime sınırı ve iri taneli ısıdan etkilenen bölge.'],
      ['Isı girdisi neden önemli?', 'Fazla ısı girdisi tane büyümesine ve tokluk kaybına yol açar.']
    ],
    cta_h3: 'Soğuk iklim için kaynaklı parça mı?',
    cta_p: 'Malzeme ve darbe şartlarını gönderin; prosedür ve teklifi birlikte netleştirelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Charpy Impact Testing: How to Prove Weld Toughness at Low Temperature',
    meta: 'Charpy V-notch impact testing for welded parts used in cold climates, under dynamic loads or in thick sections: J2/K2/NL grades, ISO 9016 notch locations, the effect of heat input on toughness, and the difference between mill certificate and weld test.',
    og: 'Charpy impact testing and weld toughness',
    tag: 'Technical Guide · Quality',
    h1: 'Charpy Impact Testing: How to Prove Weld Toughness at Low Temperature',
    crumb: 'Charpy test',
    read: '7 min read',
    body: `
<p>As temperature falls, steel at some point changes from ductile behaviour to brittle fracture. For a crane working outdoors in Scandinavia, a machine used on site in winter or a chassis under impact loads, the real question is not "how strong" but "how tough in the cold". The measure for that is the Charpy V-notch impact test.</p>
<h2>How the Test Works</h2>
<p>A standard 10×10×55 mm specimen is V-notched, cooled to the required temperature (e.g. 0, -20, -40 °C) and broken by a pendulum in one blow. The absorbed energy is read in joules. Usually the average of three specimens and a minimum single value are assessed together.</p>
<h2>Steel Grades and the Weld</h2>
<p>The suffixes in the S355 family describe impact values: JR 27 J at 20 °C, J0 at 0 °C, J2 at -20 °C; K2 40 J at -20 °C; NL is guaranteed down to -50 °C (see <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355 grades</a>). These values apply to the parent metal. Weld metal and HAZ can behave very differently depending on welding conditions, so specifications may require separate impact tests for the weld.</p>
<h2>Where Is the Notch? (ISO 9016)</h2>
<ul>
<li><strong>Weld metal (VWT):</strong> toughness of filler and procedure.</li>
<li><strong>Fusion line / HAZ (VHT):</strong> often the critical zone; coarse-grained HAZ can lose toughness.</li>
</ul>
<p>The depth below the surface at which specimens are taken is also stated in the report.</p>
<h2>What Affects Weld Toughness?</h2>
<ul>
<li><strong>Heat input:</strong> excessive <a href="kaynak-isi-girdisi.html">heat input</a> causes grain growth and loss of toughness in the HAZ; staying within the qualified range matters.</li>
<li><strong>Interpass temperature:</strong> too high has a similar effect.</li>
<li><strong>Filler metal:</strong> choose wire or electrodes with guaranteed low-temperature toughness.</li>
<li><strong>Thickness and bead sequence:</strong> in multi-pass welds later beads partly temper earlier ones.</li>
</ul>
<h2>What Should the Buyer Clarify?</h2>
<ul>
<li>Test temperature and energy requirement (e.g. 27 J at -20 °C) for both parent metal and weld.</li>
<li>Whether a WPQR meeting this requirement exists.</li>
<li>Impact values shown on the <a href="malzeme-sertifikasi-en-10204-3-1.html">3.1 material certificate</a>.</li>
<li>How heat input will be recorded in production.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> on work requiring low-temperature toughness we check impact values on the material certificates and keep heat input within WPS limits, recorded. Impact tests are performed by accredited laboratories; we coordinate the process. <a href="../ndt.html">Inspection and quality →</a></p></div>
`,
    faq: [
      ['What does a Charpy test measure?', 'The energy needed to break a notched specimen at a given temperature, i.e. toughness.'],
      ['Is S355J2 enough for the weld?', 'The steel guarantees 27 J at -20 °C; the weld may need separate verification.'],
      ['Which zone is most critical?', 'Usually the fusion line and coarse-grained HAZ.'],
      ['Why does heat input matter?', 'Too much heat input causes grain growth and lower toughness.']
    ],
    cta_h3: 'Welded parts for cold climates?',
    cta_p: 'Send material and impact requirements; we will settle procedure and quote together.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Kerbschlagbiegeversuch (Charpy): Zähigkeit der Schweißnaht bei Kälte nachweisen',
    meta: 'Charpy-V-Kerbschlagbiegeversuch für Schweißteile in kaltem Klima, unter dynamischer Last oder in dicken Querschnitten: J2/K2/NL-Güten, Kerblagen nach ISO 9016, Einfluss der Wärmeeinbringung und Unterschied zwischen Werkszeugnis und Schweißnahtprüfung.',
    og: 'Kerbschlagbiegeversuch und Nahtzähigkeit',
    tag: 'Technischer Leitfaden · Qualität',
    h1: 'Kerbschlagbiegeversuch (Charpy): Zähigkeit der Schweißnaht bei Kälte nachweisen',
    crumb: 'Kerbschlagbiegeversuch',
    read: '7 Min. Lesezeit',
    body: `
<p>Mit sinkender Temperatur wechselt Stahl ab einem bestimmten Punkt von zähem Verhalten zum Sprödbruch. Für einen Kran im Freien in Skandinavien, eine Baumaschine im Winter oder ein stoßbelastetes Fahrgestell lautet die eigentliche Frage nicht „wie fest", sondern „wie zäh in der Kälte". Das Maß dafür ist der Charpy-V-Kerbschlagbiegeversuch.</p>
<h2>Ablauf</h2>
<p>Eine Normprobe 10×10×55 mm erhält eine V-Kerbe, wird auf die geforderte Temperatur (z. B. 0, -20, -40 °C) gekühlt und von einem Pendel mit einem Schlag gebrochen. Die verbrauchte Energie wird in Joule abgelesen. Meist werden Mittelwert aus drei Proben und ein Mindesteinzelwert gemeinsam bewertet.</p>
<h2>Stahlgüten und Schweißnaht</h2>
<p>Die Kürzel der S355-Familie beschreiben Kerbschlagwerte: JR 27 J bei 20 °C, J0 bei 0 °C, J2 bei -20 °C; K2 40 J bei -20 °C; NL ist bis -50 °C garantiert (siehe <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355-Güten</a>). Diese Werte gelten für den Grundwerkstoff. Schweißgut und WEZ können je nach Schweißbedingungen ganz anders reagieren; daher kann die Spezifikation eigene Kerbschlagprüfungen für die Naht fordern.</p>
<h2>Wo liegt die Kerbe? (ISO 9016)</h2>
<ul>
<li><strong>Schweißgut (VWT):</strong> Zähigkeit von Zusatzwerkstoff und Verfahren.</li>
<li><strong>Schmelzlinie / WEZ (VHT):</strong> oft die kritische Zone; grobkörnige WEZ kann an Zähigkeit verlieren.</li>
</ul>
<p>Auch die Entnahmetiefe unter der Oberfläche steht im Bericht.</p>
<h2>Was beeinflusst die Nahtzähigkeit?</h2>
<ul>
<li><strong>Wärmeeinbringung:</strong> zu hohe <a href="kaynak-isi-girdisi.html">Streckenenergie</a> führt zu Kornwachstum und Zähigkeitsverlust in der WEZ; der qualifizierte Bereich muss eingehalten werden.</li>
<li><strong>Zwischenlagentemperatur:</strong> zu hoch wirkt ähnlich.</li>
<li><strong>Zusatzwerkstoff:</strong> Draht oder Elektroden mit garantierter Tieftemperaturzähigkeit wählen.</li>
<li><strong>Dicke und Lagenaufbau:</strong> bei Mehrlagennähten vergüten spätere Lagen die früheren teilweise.</li>
</ul>
<h2>Was der Einkäufer klären sollte</h2>
<ul>
<li>Prüftemperatur und Energieanforderung (z. B. 27 J bei -20 °C) für Grundwerkstoff und Naht.</li>
<li>Ob ein passendes WPQR vorliegt.</li>
<li>Kerbschlagwerte im <a href="malzeme-sertifikasi-en-10204-3-1.html">3.1-Zeugnis</a>.</li>
<li>Wie die Wärmeeinbringung in der Fertigung dokumentiert wird.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei Aufträgen mit Tieftemperaturzähigkeit prüfen wir die Kerbschlagwerte in den Werkstoffzeugnissen und halten die Wärmeeinbringung innerhalb der WPS-Grenzen, dokumentiert. Kerbschlagprüfungen führen akkreditierte Labore durch; den Ablauf koordinieren wir. <a href="../ndt.html">Prüfung und Qualität →</a></p></div>
`,
    faq: [
      ['Was misst der Charpy-Versuch?', 'Die Energie zum Brechen einer gekerbten Probe bei bestimmter Temperatur – die Zähigkeit.'],
      ['Reicht S355J2 für die Naht?', 'Der Stahl garantiert 27 J bei -20 °C; die Naht braucht ggf. eigenen Nachweis.'],
      ['Welche Zone ist am kritischsten?', 'Meist Schmelzlinie und grobkörnige WEZ.'],
      ['Warum zählt die Wärmeeinbringung?', 'Zu viel führt zu Kornwachstum und geringerer Zähigkeit.']
    ],
    cta_h3: 'Schweißteile für kaltes Klima?',
    cta_p: 'Senden Sie Werkstoff und Kerbschlaganforderungen; wir klären Verfahren und Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Ensayo Charpy: cómo demostrar la tenacidad de la soldadura a baja temperatura',
    meta: 'Ensayo de impacto Charpy V para piezas soldadas en climas fríos, con cargas dinámicas o espesores grandes: grados J2/K2/NL, posiciones de entalla según ISO 9016, efecto del aporte térmico y diferencia entre certificado de material y ensayo de soldadura.',
    og: 'Ensayo Charpy y tenacidad de la soldadura',
    tag: 'Guía técnica · Calidad',
    h1: 'Ensayo Charpy: cómo demostrar la tenacidad de la soldadura a baja temperatura',
    crumb: 'Ensayo Charpy',
    read: '7 min de lectura',
    body: `
<p>Al bajar la temperatura, el acero pasa en cierto punto de un comportamiento dúctil a la rotura frágil. Para una grúa a la intemperie en Escandinavia, una máquina de obra en invierno o un chasis con cargas de impacto, la pregunta real no es "qué resistencia" sino "qué tenacidad en frío". Su medida es el ensayo Charpy con entalla en V.</p>
<h2>Cómo se realiza</h2>
<p>Una probeta normalizada de 10×10×55 mm con entalla en V se enfría a la temperatura exigida (0, -20, -40 °C…) y se rompe de un golpe con un péndulo. La energía absorbida se lee en julios. Se valoran juntos la media de tres probetas y un valor individual mínimo.</p>
<h2>Grados de acero y soldadura</h2>
<p>Los sufijos de la familia S355 indican la resiliencia: JR 27 J a 20 °C, J0 a 0 °C, J2 a -20 °C; K2 40 J a -20 °C; NL garantizado hasta -50 °C (ver <a href="s355jr-s355j2-s355k2-s355nl-farki.html">grados S355</a>). Estos valores son del metal base. Metal de soldadura y ZAT pueden comportarse muy distinto según las condiciones, por lo que la especificación puede exigir ensayos aparte para la soldadura.</p>
<h2>¿Dónde va la entalla? (ISO 9016)</h2>
<ul>
<li><strong>Metal de soldadura (VWT):</strong> tenacidad del aporte y del procedimiento.</li>
<li><strong>Línea de fusión / ZAT (VHT):</strong> a menudo la zona crítica; la ZAT de grano grueso puede perder tenacidad.</li>
</ul>
<p>El informe indica también la profundidad bajo la superficie.</p>
<h2>¿Qué afecta a la tenacidad?</h2>
<ul>
<li><strong>Aporte térmico:</strong> un <a href="kaynak-isi-girdisi.html">aporte</a> excesivo provoca crecimiento de grano y pérdida de tenacidad; hay que respetar el rango cualificado.</li>
<li><strong>Temperatura entre pasadas:</strong> demasiado alta tiene efecto similar.</li>
<li><strong>Material de aporte:</strong> elegir hilo o electrodos con tenacidad garantizada a baja temperatura.</li>
<li><strong>Espesor y secuencia:</strong> en multipasada, las pasadas siguientes revienen parcialmente las anteriores.</li>
</ul>
<h2>Qué debe aclarar el comprador</h2>
<ul>
<li>Temperatura y energía exigidas (p. ej. 27 J a -20 °C) para metal base y soldadura.</li>
<li>Si existe una WPQR que lo cumpla.</li>
<li>Valores de impacto en el <a href="malzeme-sertifikasi-en-10204-3-1.html">certificado 3.1</a>.</li>
<li>Cómo se registrará el aporte térmico en producción.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> en trabajos con tenacidad a baja temperatura revisamos los valores de impacto de los certificados y mantenemos el aporte térmico dentro de la WPS, registrado. Los ensayos Charpy los hacen laboratorios acreditados; coordinamos el proceso. <a href="../ndt.html">Inspección y calidad →</a></p></div>
`,
    faq: [
      ['¿Qué mide el ensayo Charpy?', 'La energía para romper una probeta entallada a una temperatura dada: la tenacidad.'],
      ['¿Basta S355J2 para la soldadura?', 'El acero garantiza 27 J a -20 °C; la soldadura puede requerir verificación propia.'],
      ['¿Qué zona es más crítica?', 'Normalmente la línea de fusión y la ZAT de grano grueso.'],
      ['¿Por qué importa el aporte térmico?', 'Un exceso causa crecimiento de grano y menor tenacidad.']
    ],
    cta_h3: '¿Piezas soldadas para clima frío?',
    cta_p: 'Envíe material y requisitos de impacto; definimos procedimiento y oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Essai Charpy : prouver la ténacité de la soudure à basse température',
    meta: 'Essai de flexion par choc Charpy V pour pièces soudées en climat froid, sous charges dynamiques ou en fortes épaisseurs : nuances J2/K2/NL, positions d\'entaille selon ISO 9016, effet de l\'énergie de soudage et différence entre certificat matière et essai de soudure.',
    og: 'Essai Charpy et ténacité des soudures',
    tag: 'Guide technique · Qualité',
    h1: 'Essai Charpy : prouver la ténacité de la soudure à basse température',
    crumb: 'Essai Charpy',
    read: '7 min de lecture',
    body: `
<p>Quand la température baisse, l'acier passe à un certain point d'un comportement ductile à la rupture fragile. Pour une grue en extérieur en Scandinavie, un engin utilisé l'hiver ou un châssis soumis à des chocs, la vraie question n'est pas « quelle résistance » mais « quelle ténacité au froid ». Sa mesure est l'essai Charpy à entaille en V.</p>
<h2>Déroulement</h2>
<p>Une éprouvette normalisée 10×10×55 mm entaillée en V est refroidie à la température demandée (0, -20, -40 °C…) puis rompue d'un coup par un mouton-pendule. L'énergie absorbée est lue en joules. On évalue la moyenne de trois éprouvettes et une valeur individuelle minimale.</p>
<h2>Nuances d'acier et soudure</h2>
<p>Les suffixes de la famille S355 décrivent la résilience : JR 27 J à 20 °C, J0 à 0 °C, J2 à -20 °C ; K2 40 J à -20 °C ; NL garanti jusqu'à -50 °C (voir <a href="s355jr-s355j2-s355k2-s355nl-farki.html">nuances S355</a>). Ces valeurs concernent le métal de base. Métal fondu et ZAT peuvent se comporter très différemment selon les conditions de soudage ; la spécification peut donc exiger des essais propres à la soudure.</p>
<h2>Où placer l'entaille ? (ISO 9016)</h2>
<ul>
<li><strong>Métal fondu (VWT) :</strong> ténacité du produit d'apport et du mode opératoire.</li>
<li><strong>Ligne de fusion / ZAT (VHT) :</strong> souvent la zone critique ; la ZAT à gros grains peut perdre en ténacité.</li>
</ul>
<p>La profondeur de prélèvement sous la surface figure aussi au rapport.</p>
<h2>Qu'est-ce qui influe sur la ténacité ?</h2>
<ul>
<li><strong>Énergie de soudage :</strong> une <a href="kaynak-isi-girdisi.html">énergie</a> excessive provoque grossissement du grain et perte de ténacité ; respecter le domaine qualifié.</li>
<li><strong>Température entre passes :</strong> trop élevée, effet similaire.</li>
<li><strong>Produit d'apport :</strong> choisir fil ou électrodes à ténacité garantie à basse température.</li>
<li><strong>Épaisseur et séquence :</strong> en multipasse, les passes suivantes reviennent partiellement les précédentes.</li>
</ul>
<h2>Ce que l'acheteur doit préciser</h2>
<ul>
<li>Température et énergie exigées (ex. 27 J à -20 °C) pour métal de base et soudure.</li>
<li>L'existence d'un QMOS qui y répond.</li>
<li>Valeurs de résilience sur le <a href="malzeme-sertifikasi-en-10204-3-1.html">certificat 3.1</a>.</li>
<li>Comment l'énergie de soudage sera enregistrée en production.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> pour les travaux exigeant une ténacité à basse température, nous vérifions les résiliences des certificats matière et maintenons l'énergie de soudage dans les limites du DMOS, enregistrée. Les essais Charpy sont réalisés par des laboratoires accrédités ; nous coordonnons le déroulement. <a href="../ndt.html">Contrôle et qualité →</a></p></div>
`,
    faq: [
      ['Que mesure l\'essai Charpy ?', 'L\'énergie pour rompre une éprouvette entaillée à une température donnée : la ténacité.'],
      ['S355J2 suffit-il pour la soudure ?', 'L\'acier garantit 27 J à -20 °C ; la soudure peut exiger sa propre vérification.'],
      ['Quelle zone est la plus critique ?', 'En général la ligne de fusion et la ZAT à gros grains.'],
      ['Pourquoi l\'énergie de soudage compte-t-elle ?', 'Un excès entraîne grossissement du grain et moindre ténacité.']
    ],
    cta_h3: 'Pièces soudées pour climat froid ?',
    cta_p: 'Envoyez matériau et exigences de résilience ; fixons mode opératoire et devis.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Prova Charpy: come dimostrare la tenacità della saldatura a bassa temperatura',
    meta: 'Prova di resilienza Charpy V per pezzi saldati in climi freddi, sotto carichi dinamici o in grandi spessori: gradi J2/K2/NL, posizioni dell\'intaglio ISO 9016, effetto dell\'apporto termico e differenza tra certificato del materiale e prova sulla saldatura.',
    og: 'Prova Charpy e tenacità della saldatura',
    tag: 'Guida tecnica · Qualità',
    h1: 'Prova Charpy: come dimostrare la tenacità della saldatura a bassa temperatura',
    crumb: 'Prova Charpy',
    read: '7 min di lettura',
    body: `
<p>Al calare della temperatura l'acciaio passa, a un certo punto, da un comportamento duttile alla rottura fragile. Per una gru all'aperto in Scandinavia, una macchina usata in cantiere d'inverno o un telaio soggetto a urti, la vera domanda non è "quanto resiste" ma "quanto è tenace al freddo". La misura è la prova Charpy con intaglio a V.</p>
<h2>Come si esegue</h2>
<p>Un provino normalizzato 10×10×55 mm con intaglio a V viene raffreddato alla temperatura richiesta (0, -20, -40 °C…) e rotto con un colpo di pendolo. L'energia assorbita si legge in joule. Si valutano insieme la media di tre provini e un valore singolo minimo.</p>
<h2>Gradi di acciaio e saldatura</h2>
<p>I suffissi della famiglia S355 indicano la resilienza: JR 27 J a 20 °C, J0 a 0 °C, J2 a -20 °C; K2 40 J a -20 °C; NL garantito fino a -50 °C (vedi <a href="s355jr-s355j2-s355k2-s355nl-farki.html">gradi S355</a>). Questi valori riguardano il materiale base. Metallo saldato e ZTA possono comportarsi in modo molto diverso secondo le condizioni di saldatura; la specifica può quindi chiedere prove dedicate sulla saldatura.</p>
<h2>Dove si fa l'intaglio? (ISO 9016)</h2>
<ul>
<li><strong>Metallo saldato (VWT):</strong> tenacità dell'apporto e del procedimento.</li>
<li><strong>Linea di fusione / ZTA (VHT):</strong> spesso la zona critica; la ZTA a grano grosso può perdere tenacità.</li>
</ul>
<p>Il rapporto indica anche la profondità di prelievo sotto la superficie.</p>
<h2>Cosa influenza la tenacità?</h2>
<ul>
<li><strong>Apporto termico:</strong> un <a href="kaynak-isi-girdisi.html">apporto</a> eccessivo causa ingrossamento del grano e perdita di tenacità; rispettare il campo qualificato.</li>
<li><strong>Temperatura interpass:</strong> troppo alta, effetto simile.</li>
<li><strong>Materiale d'apporto:</strong> scegliere filo o elettrodi con tenacità garantita a bassa temperatura.</li>
<li><strong>Spessore e sequenza:</strong> nelle multipassata le passate successive rinvengono in parte le precedenti.</li>
</ul>
<h2>Cosa deve chiarire l'acquirente</h2>
<ul>
<li>Temperatura ed energia richieste (es. 27 J a -20 °C) per materiale base e saldatura.</li>
<li>Se esiste una WPQR che le soddisfa.</li>
<li>Valori di resilienza sul <a href="malzeme-sertifikasi-en-10204-3-1.html">certificato 3.1</a>.</li>
<li>Come verrà registrato l'apporto termico in produzione.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> nei lavori con requisiti di tenacità a bassa temperatura verifichiamo le resilienze sui certificati e manteniamo l'apporto termico nei limiti della WPS, registrato. Le prove Charpy sono eseguite da laboratori accreditati; coordiniamo il processo. <a href="../ndt.html">Controlli e qualità →</a></p></div>
`,
    faq: [
      ['Cosa misura la prova Charpy?', 'L\'energia per rompere un provino intagliato a una data temperatura: la tenacità.'],
      ['S355J2 basta per la saldatura?', 'L\'acciaio garantisce 27 J a -20 °C; la saldatura può richiedere verifica propria.'],
      ['Qual è la zona più critica?', 'Di solito la linea di fusione e la ZTA a grano grosso.'],
      ['Perché conta l\'apporto termico?', 'Un eccesso causa ingrossamento del grano e minore tenacità.']
    ],
    cta_h3: 'Pezzi saldati per climi freddi?',
    cta_p: 'Inviate materiale e requisiti di resilienza; definiamo procedimento e offerta.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Kerfslagproef (Charpy): taaiheid van de las bij lage temperatuur aantonen',
    meta: 'Charpy-V-kerfslagproef voor lasdelen in koud klimaat, onder dynamische belasting of in dikke doorsneden: J2/K2/NL-kwaliteiten, kerfposities volgens ISO 9016, invloed van warmte-inbreng en verschil tussen materiaalcertificaat en lasbeproeving.',
    og: 'Kerfslagproef en taaiheid van lassen',
    tag: 'Technische gids · Kwaliteit',
    h1: 'Kerfslagproef (Charpy): taaiheid van de las bij lage temperatuur aantonen',
    crumb: 'Kerfslagproef',
    read: '7 min lezen',
    body: `
<p>Bij dalende temperatuur gaat staal op een bepaald punt over van taai gedrag naar brosse breuk. Voor een kraan buiten in Scandinavië, een machine die 's winters op de bouwplaats werkt of een chassis met stootbelasting is de echte vraag niet "hoe sterk" maar "hoe taai in de kou". De maat daarvoor is de Charpy-V-kerfslagproef.</p>
<h2>Hoe werkt de proef?</h2>
<p>Een genormeerd proefstuk van 10×10×55 mm krijgt een V-kerf, wordt gekoeld tot de vereiste temperatuur (bijv. 0, -20, -40 °C) en met één slag van een slinger gebroken. De opgenomen energie wordt in joule afgelezen. Meestal worden het gemiddelde van drie proefstukken en een minimale enkele waarde samen beoordeeld.</p>
<h2>Staalkwaliteiten en de las</h2>
<p>De achtervoegsels in de S355-familie beschrijven kerfslagwaarden: JR 27 J bij 20 °C, J0 bij 0 °C, J2 bij -20 °C; K2 40 J bij -20 °C; NL is gegarandeerd tot -50 °C (zie <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355-kwaliteiten</a>). Deze waarden gelden voor het basismateriaal. Lasmetaal en WBZ kunnen afhankelijk van de lasomstandigheden heel anders reageren; daarom kan de specificatie aparte kerfslagproeven voor de las eisen.</p>
<h2>Waar zit de kerf? (ISO 9016)</h2>
<ul>
<li><strong>Lasmetaal (VWT):</strong> taaiheid van toevoegmateriaal en procedure.</li>
<li><strong>Smeltlijn / WBZ (VHT):</strong> vaak de kritische zone; grofkorrelige WBZ kan taaiheid verliezen.</li>
</ul>
<p>Ook de diepte onder het oppervlak staat in het rapport.</p>
<h2>Wat beïnvloedt de taaiheid van de las?</h2>
<ul>
<li><strong>Warmte-inbreng:</strong> te hoge <a href="kaynak-isi-girdisi.html">warmte-inbreng</a> geeft korrelgroei en taaiheidsverlies in de WBZ; binnen het gekwalificeerde bereik blijven is belangrijk.</li>
<li><strong>Tussenlaagtemperatuur:</strong> te hoog heeft een vergelijkbaar effect.</li>
<li><strong>Toevoegmateriaal:</strong> kies draad of elektroden met gegarandeerde taaiheid bij lage temperatuur.</li>
<li><strong>Dikte en laagopbouw:</strong> bij meerlagenlassen ontlaten latere rupsen de eerdere gedeeltelijk.</li>
</ul>
<h2>Wat moet de inkoper vastleggen?</h2>
<ul>
<li>Beproevingstemperatuur en energie-eis (bijv. 27 J bij -20 °C) voor basismateriaal én las.</li>
<li>Of er een WPQR is die hieraan voldoet.</li>
<li>Kerfslagwaarden op het <a href="malzeme-sertifikasi-en-10204-3-1.html">3.1-certificaat</a>.</li>
<li>Hoe de warmte-inbreng in productie wordt geregistreerd.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij werk met taaiheidseisen bij lage temperatuur controleren we de kerfslagwaarden op de materiaalcertificaten en houden we de warmte-inbreng binnen de WPS-grenzen, geregistreerd. Kerfslagproeven worden door geaccrediteerde laboratoria uitgevoerd; wij coördineren het verloop. <a href="../ndt.html">Inspectie en kwaliteit →</a></p></div>
`,
    faq: [
      ['Wat meet de Charpy-proef?', 'De energie om een gekerfd proefstuk bij een bepaalde temperatuur te breken: de taaiheid.'],
      ['Is S355J2 genoeg voor de las?', 'Het staal garandeert 27 J bij -20 °C; de las kan eigen verificatie nodig hebben.'],
      ['Welke zone is het kritischst?', 'Meestal de smeltlijn en de grofkorrelige WBZ.'],
      ['Waarom telt de warmte-inbreng?', 'Te veel geeft korrelgroei en lagere taaiheid.']
    ],
    cta_h3: 'Lasdelen voor koud klimaat?',
    cta_p: 'Stuur materiaal en kerfslageisen; we stemmen procedure en offerte af.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Charpy slagprøve: slik dokumenteres sveisens seighet ved lav temperatur',
    meta: 'Charpy V-slagprøving for sveisedeler i kaldt klima, under dynamisk last eller i tykke tverrsnitt: J2/K2/NL-kvaliteter, kjervplassering etter ISO 9016, varmetilførselens effekt og forskjellen mellom materialsertifikat og sveisetest.',
    og: 'Charpy slagprøve og sveiseseighet',
    tag: 'Teknisk guide · Kvalitet',
    h1: 'Charpy slagprøve: slik dokumenteres sveisens seighet ved lav temperatur',
    crumb: 'Charpy slagprøve',
    read: '7 min lesing',
    body: `
<p>Når temperaturen faller, går stål på et visst punkt fra seig oppførsel til sprøbrudd. For en kran utendørs i Norge, en anleggsmaskin brukt om vinteren eller et chassis med støtlast er det egentlige spørsmålet ikke «hvor sterk», men «hvor seig i kulde». Målet for det er Charpy V-slagprøven.</p>
<h2>Slik utføres prøven</h2>
<p>En standard prøve på 10×10×55 mm får en V-kjerv, kjøles til ønsket temperatur (f.eks. 0, -20, -40 °C) og knuses med ett slag av en pendel. Absorbert energi leses i joule. Vanligvis vurderes gjennomsnittet av tre prøver og en minste enkeltverdi sammen.</p>
<h2>Stålkvaliteter og sveisen</h2>
<p>Tilleggene i S355-familien beskriver slagverdier: JR 27 J ved 20 °C, J0 ved 0 °C, J2 ved -20 °C; K2 40 J ved -20 °C; NL er garantert ned til -50 °C (se <a href="s355jr-s355j2-s355k2-s355nl-farki.html">S355-kvaliteter</a>). Disse verdiene gjelder grunnmaterialet. Sveisemetall og HAZ kan oppføre seg helt annerledes avhengig av sveiseforholdene, så spesifikasjonen kan kreve egne slagprøver for sveisen.</p>
<h2>Hvor legges kjerven? (ISO 9016)</h2>
<ul>
<li><strong>Sveisemetall (VWT):</strong> seigheten til tilsettmaterialet og prosedyren.</li>
<li><strong>Smeltelinje / HAZ (VHT):</strong> ofte den kritiske sonen; grovkornet HAZ kan miste seighet.</li>
</ul>
<p>Dybden under overflaten prøvene er tatt fra, står også i rapporten.</p>
<h2>Hva påvirker sveisens seighet?</h2>
<ul>
<li><strong>Varmetilførsel:</strong> for høy <a href="kaynak-isi-girdisi.html">varmetilførsel</a> gir kornvekst og seighetstap i HAZ; hold deg innenfor kvalifisert område.</li>
<li><strong>Mellomstrengtemperatur:</strong> for høy gir lignende effekt.</li>
<li><strong>Tilsettmateriale:</strong> velg tråd eller elektroder med garantert lavtemperaturseighet.</li>
<li><strong>Tykkelse og strengrekkefølge:</strong> ved flerstrengssveis anløper senere strenger de tidligere delvis.</li>
</ul>
<h2>Hva innkjøper bør avklare</h2>
<ul>
<li>Prøvetemperatur og energikrav (f.eks. 27 J ved -20 °C) for både grunnmateriale og sveis.</li>
<li>Om det finnes en WPQR som oppfyller kravet.</li>
<li>Slagverdier på <a href="malzeme-sertifikasi-en-10204-3-1.html">3.1-sertifikatet</a>.</li>
<li>Hvordan varmetilførsel registreres i produksjonen.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> på jobber med krav til lavtemperaturseighet kontrollerer vi slagverdiene på materialsertifikatene og holder varmetilførselen innenfor WPS-grensene, registrert. Slagprøver utføres av akkrediterte laboratorier; vi koordinerer forløpet. <a href="../ndt.html">Kontroll og kvalitet →</a></p></div>
`,
    faq: [
      ['Hva måler Charpy-prøven?', 'Energien som trengs for å knuse en kjervet prøve ved gitt temperatur: seigheten.'],
      ['Holder S355J2 for sveisen?', 'Stålet garanterer 27 J ved -20 °C; sveisen kan trenge egen verifikasjon.'],
      ['Hvilken sone er mest kritisk?', 'Vanligvis smeltelinjen og grovkornet HAZ.'],
      ['Hvorfor betyr varmetilførsel noe?', 'For mye gir kornvekst og lavere seighet.']
    ],
    cta_h3: 'Sveisedeler for kaldt klima?',
    cta_p: 'Send materiale og slagkrav; vi avklarer prosedyre og tilbud sammen.',
    cta_btn: 'Be om tilbud →'
  }
};
