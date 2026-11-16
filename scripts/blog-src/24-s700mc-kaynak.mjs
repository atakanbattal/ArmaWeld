export default {
  order: 24,
  slug: 's700mc-kaynagi-isi-girdisi-t8-5',
  key: 'p24_s700mc',
  date: '2026-04-07',
  keywords: 'S700MC kaynak, S700MC kaynağı, EN 10149-2, termomekanik çelik, t8/5 soğuma süresi, ısı girdisi, yüksek mukavemetli çelik kaynağı, S700MC welding, S700MC schweißen',
  related: ['s960ql-kaynak-parametreleri', 'hardox-kaynak', 'on-isitma-hesaplama', 'tozalti-kaynak-makinesi-bom-sasi'],
  tr: {
    title: 'S700MC Kaynağı: Isı Girdisi, t8/5 Soğuma Süresi ve Sarf Malzeme Seçimi',
    meta: 'S700MC (EN 10149-2) termomekanik çelik nasıl kaynatılır? ITAB yumuşaması, t8/5 soğuma süresi ve ısı girdisi kontrolü, ön ısıtma ve pasolar arası sıcaklık, eşdeğer ve düşük mukavemetli tel seçimi, kaynak sonrası yapılmaması gerekenler.',
    og: 'S700MC Kaynağı: Isı Girdisi ve t8/5',
    tag: 'Yüksek Mukavemetli Çelik',
    h1: 'S700MC Kaynağı: Isı Girdisi, t8/5 Soğuma Süresi ve Sarf Malzeme Seçimi',
    crumb: 'S700MC Kaynağı',
    read: '6 dk okuma',
    body: `
<p>S700MC, treyler şasisi, vinç bomu, damper ve iş makinesi parçalarında ağırlık azaltmak için sık kullanılan, soğuk şekillendirmeye uygun yüksek mukavemetli bir çeliktir. Doğru kaynatıldığında S355’e göre çok daha ince kesitlerle aynı yükü taşır. Yanlış kaynatıldığında ise kaynak bölgesi, çeliğin kendisinden belirgin şekilde zayıf kalabilir.</p>
<h2>S700MC Nedir?</h2>
<p>EN 10149-2 kapsamındaki <strong>S700MC</strong>; <strong>M</strong> termomekanik haddelenmiş, <strong>C</strong> soğuk şekillendirmeye uygun anlamına gelir. Minimum akma dayanımı 700 MPa, çekme dayanımı 750–950 MPa aralığındadır. Mukavemetini yüksek karbondan değil, kontrollü haddeleme ve mikro alaşım elementlerinden alır. Bu nedenle karbon eşdeğeri düşüktür ve kaynak kabiliyeti iyidir; ancak ısıya duyarlıdır.</p>
<h2>Asıl Risk: ITAB Yumuşaması</h2>
<p>Termomekanik çeliklerde ısı tesiri altındaki bölge (ITAB) aşırı ısınır ve yavaş soğursa, haddeleme ile kazanılmış ince tane yapısı bozulur ve bölge yumuşar. Sonuç, kaynak dikişinin yanında mukavemeti düşmüş bir şerit olur. Çatlak riski kadar, hatta ondan daha çok, bu yumuşama kontrol edilmelidir.</p>
<h2>t8/5 Soğuma Süresi ve Isı Girdisi</h2>
<p>Kontrolün ölçüsü <strong>t8/5</strong>, yani kaynak bölgesinin 800 °C’den 500 °C’ye soğuma süresidir. Kısa t8/5 sert ve çatlamaya yatkın bir yapı, uzun t8/5 ise yumuşama ve tokluk kaybı demektir. S700MC için üreticiler genellikle yaklaşık 5–15 saniyelik bir aralık önerir; kesin değer çelik üreticisinin kaynak kılavuzundan alınmalıdır.</p>
<p>t8/5; ısı girdisi, sac kalınlığı, birleşim tipi ve ön ısıtma sıcaklığına bağlıdır. Isı girdisi şöyle hesaplanır:</p>
<p><strong>Q (kJ/mm) = k × U × I × 60 / (v × 1000)</strong>, burada U gerilim (V), I akım (A), v kaynak hızı (mm/dk), k ise ısıl verim katsayısıdır (MAG için 0,8).</p>
<p>Örnek: 26 V, 240 A, 400 mm/dk hızla MAG kaynağında Q = 0,8 × 26 × 240 × 60 / 400 000 ≈ 0,75 kJ/mm. İnce saclarda düşük, kalın saclarda biraz daha yüksek ısı girdisi aynı t8/5 aralığına karşılık gelir.</p>
<h2>Pratik Kurallar</h2>
<ul>
<li><strong>Geniş salınımlı paso yerine dar, çok pasolu kaynak:</strong> Tek büyük paso ısı girdisini yükseltir.</li>
<li><strong>Pasolar arası sıcaklığı sınırlayın:</strong> Üretici önerisine göre, çoğu durumda yaklaşık 100–150 °C üst sınırı uygulanır.</li>
<li><strong>Ön ısıtma:</strong> Düşük karbon eşdeğeri nedeniyle ince saclarda genellikle gerekmez; kalın kesit, yüksek tutulma, düşük ortam sıcaklığı veya nem varsa uygulanır (bkz. <a href="on-isitma-hesaplama.html">ön ısıtma hesabı</a>).</li>
<li><strong>Hidrojen kontrolü:</strong> Temiz, kuru yüzey ve düşük hidrojenli sarf malzeme kullanılmalıdır.</li>
<li><strong>Uzun dikişlerde dengeli sıra:</strong> Isının bir bölgede birikmemesi için dikiş bölünerek ve karşılıklı ilerlenir.</li>
</ul>
<h2>Sarf Malzeme: Eşdeğer mi, Düşük Mukavemetli mi?</h2>
<p>Yük taşıyan alın kaynaklarında genellikle ana malzemeye <strong>eşdeğer mukavemetli</strong> tel seçilir; örneğin ISO 16834 kapsamındaki 69 sınıfı MAG telleri. Düşük gerilmeli köşe kaynaklarında ise <strong>daha düşük mukavemetli (undermatching)</strong> tel tercih edilebilir; bu, kaynak metalinin sünekliğini artırır ve çatlak riskini düşürür. Hangisinin kullanılacağı tasarım hesabında belirlenmelidir.</p>
<h2>Yapılmaması Gerekenler</h2>
<ul>
<li><strong>Normalizasyon ve sıcak şekillendirme:</strong> Termomekanik yapıyı bozar, mukavemet geri gelmez.</li>
<li><strong>Gerilim giderme tavı:</strong> Genellikle önerilmez; gerekiyorsa çelik üreticisinin onayı alınmalıdır.</li>
<li><strong>Alevle doğrultmada aşırı sıcaklık:</strong> Yerel ısıtma çeliğin izin verilen sıcaklığını aşmamalıdır.</li>
</ul>
<h2>Kalifikasyon</h2>
<p>S700MC kaynağı, ISO 15614-1’e göre nitelendirilmiş bir WPQR ve buna dayalı WPS ile yapılmalıdır. Yöntem nitelendirmesinde sertlik ölçümü ve çekme deneyi, ITAB yumuşamasının kabul sınırları içinde kaldığını gösterir (bkz. <a href="s960ql-kaynak-parametreleri.html">S960QL kaynak parametreleri</a>).</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Yüksek mukavemetli çelik parçalarda ısı girdisini WPS’te tanımlanan aralıkta tutar, pasolar arası sıcaklığı ölçerek kaydederiz. Uzun dikişli şasi ve bom imalatında dengeli kaynak sırası ve kontrollü parametrelerle çalışırız. <a href="../kaynakli-imalat.html">Kaynaklı imalat hizmetimiz →</a></p></div>
`,
    faq: [
      ['S700MC kaynağında ön ısıtma gerekir mi?', 'İnce saclarda düşük karbon eşdeğeri nedeniyle genellikle gerekmez. Kalın kesit, yüksek tutulma, soğuk ortam veya nem varsa üretici önerisine göre uygulanır.'],
      ['S700MC için t8/5 ne olmalı?', 'Üreticiler genellikle yaklaşık 5–15 saniyelik aralık önerir. Kesin değer çelik üreticisinin kaynak kılavuzundan alınmalıdır.'],
      ['S700MC hangi telle kaynatılır?', 'Yük taşıyan alın kaynaklarında eşdeğer mukavemetli (örneğin ISO 16834 69 sınıfı) tel, düşük gerilmeli köşe kaynaklarında daha düşük mukavemetli tel tercih edilebilir.'],
      ['S700MC normalize edilebilir mi?', 'Hayır. Normalizasyon ve sıcak şekillendirme termomekanik yapıyı bozar ve mukavemeti kalıcı olarak düşürür.']
    ],
    cta_h3: 'Yüksek mukavemetli çelikte kontrollü kaynak',
    cta_p: 'S700MC şasi, bom veya platform çiziminizi gönderin; kaynak planı ve teklifle dönelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Welding S700MC: Heat Input, t8/5 Cooling Time and Filler Selection',
    meta: 'How do you weld S700MC (EN 10149-2) thermomechanical steel? HAZ softening, t8/5 cooling time and heat input control, preheat and interpass temperature, matching versus undermatching filler, and what not to do after welding.',
    og: 'Welding S700MC: Heat Input and t8/5',
    tag: 'High-Strength Steel',
    h1: 'Welding S700MC: Heat Input, t8/5 Cooling Time and Filler Selection',
    crumb: 'Welding S700MC',
    read: '6 min read',
    body: `
<p>S700MC is a high-strength steel suited to cold forming, widely used in trailer chassis, crane booms, tippers and construction machinery to save weight. Welded correctly, it carries the same load as S355 with much thinner sections. Welded incorrectly, the weld zone can end up considerably weaker than the steel itself.</p>
<h2>What Is S700MC?</h2>
<p>In <strong>S700MC</strong> to EN 10149-2, <strong>M</strong> means thermomechanically rolled and <strong>C</strong> suitable for cold forming. Minimum yield strength is 700 MPa and tensile strength 750–950 MPa. Its strength comes not from high carbon but from controlled rolling and micro-alloying. The carbon equivalent is therefore low and weldability good, but the steel is sensitive to heat.</p>
<h2>The Real Risk: HAZ Softening</h2>
<p>In thermomechanical steels, if the heat-affected zone (HAZ) overheats and cools slowly, the fine grain structure gained in rolling is lost and the zone softens. The result is a strip of reduced strength beside the weld. This softening must be controlled at least as much as cracking.</p>
<h2>t8/5 Cooling Time and Heat Input</h2>
<p>The control measure is <strong>t8/5</strong>, the cooling time of the weld zone from 800 °C to 500 °C. A short t8/5 gives a hard, crack-prone structure; a long t8/5 gives softening and loss of toughness. For S700MC manufacturers usually recommend roughly 5–15 seconds; take the exact value from the steel maker’s welding guide.</p>
<p>t8/5 depends on heat input, plate thickness, joint type and preheat. Heat input is calculated as:</p>
<p><strong>Q (kJ/mm) = k × U × I × 60 / (v × 1000)</strong>, where U is voltage (V), I current (A), v travel speed (mm/min) and k the thermal efficiency (0.8 for MAG).</p>
<p>Example: MAG at 26 V, 240 A and 400 mm/min gives Q = 0.8 × 26 × 240 × 60 / 400,000 ≈ 0.75 kJ/mm. Thin plate needs lower and thick plate slightly higher heat input for the same t8/5 range.</p>
<h2>Practical Rules</h2>
<ul>
<li><strong>Narrow multi-pass welding instead of wide weaving:</strong> one large pass raises heat input.</li>
<li><strong>Limit interpass temperature:</strong> per the manufacturer, usually an upper limit of about 100–150 °C.</li>
<li><strong>Preheat:</strong> usually not needed on thin plate thanks to the low carbon equivalent; apply for thick sections, high restraint, low ambient temperature or moisture (see <a href="on-isitma-hesaplama.html">preheat calculation</a>).</li>
<li><strong>Hydrogen control:</strong> clean, dry surfaces and low-hydrogen consumables.</li>
<li><strong>Balanced sequence on long welds:</strong> split the weld and work alternately so heat does not build up in one area.</li>
</ul>
<h2>Filler: Matching or Undermatching?</h2>
<p>For load-bearing butt welds, a <strong>matching-strength</strong> wire is usually chosen, such as class 69 MAG wires to ISO 16834. For low-stressed fillet welds, an <strong>undermatching</strong> wire may be preferred; it increases weld metal ductility and lowers crack risk. Which to use should be decided in the design calculation.</p>
<h2>What Not to Do</h2>
<ul>
<li><strong>Normalizing and hot forming:</strong> destroy the thermomechanical structure; the strength does not come back.</li>
<li><strong>Stress-relief annealing:</strong> generally not recommended; if needed, get the steel maker’s approval.</li>
<li><strong>Excess temperature in flame straightening:</strong> local heating must not exceed the steel’s permitted temperature.</li>
</ul>
<h2>Qualification</h2>
<p>S700MC should be welded with a WPS based on a WPQR qualified to ISO 15614-1. Hardness and tensile tests in the procedure qualification show that HAZ softening stays within acceptance limits (see <a href="s960ql-kaynak-parametreleri.html">S960QL welding parameters</a>).</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> on high-strength steel parts we keep heat input within the range defined in the WPS and measure and record interpass temperature. For long-seam chassis and boom work we use a balanced welding sequence and controlled parameters. <a href="../kaynakli-imalat.html">Our welded fabrication service →</a></p></div>
`,
    faq: [
      ['Does S700MC need preheating?', 'Usually not on thin plate because of the low carbon equivalent. For thick sections, high restraint, cold conditions or moisture, preheat per the manufacturer.'],
      ['What t8/5 is right for S700MC?', 'Manufacturers usually recommend roughly 5–15 seconds. Take the exact value from the steel maker’s welding guide.'],
      ['Which wire is used for S700MC?', 'Matching-strength wire (e.g. ISO 16834 class 69) for load-bearing butt welds; undermatching wire may be used for low-stressed fillet welds.'],
      ['Can S700MC be normalized?', 'No. Normalizing and hot forming destroy the thermomechanical structure and permanently reduce strength.']
    ],
    cta_h3: 'Controlled welding of high-strength steel',
    cta_p: 'Send your S700MC chassis, boom or platform drawing; we will reply with a welding plan and quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'S700MC schweißen: Wärmeeinbringung, t8/5-Abkühlzeit und Zusatzwerkstoff',
    meta: 'Wie schweißt man thermomechanischen Stahl S700MC (EN 10149-2)? WEZ-Entfestigung, t8/5-Zeit und Streckenenergie, Vorwärm- und Zwischenlagentemperatur, artgleicher oder unterfester Zusatz und was nach dem Schweißen zu vermeiden ist.',
    og: 'S700MC schweißen: Wärmeeinbringung und t8/5',
    tag: 'Hochfester Stahl',
    h1: 'S700MC schweißen: Wärmeeinbringung, t8/5-Abkühlzeit und Zusatzwerkstoff',
    crumb: 'S700MC schweißen',
    read: '6 Min. Lesezeit',
    body: `
<p>S700MC ist ein kaltumformbarer hochfester Stahl, der in Anhängerrahmen, Kranauslegern, Kippern und Baumaschinen zur Gewichtsreduzierung eingesetzt wird. Richtig geschweißt trägt er mit deutlich dünneren Querschnitten dieselbe Last wie S355. Falsch geschweißt kann die Nahtzone deutlich schwächer sein als der Stahl selbst.</p>
<h2>Was ist S700MC?</h2>
<p>Bei <strong>S700MC</strong> nach EN 10149-2 steht <strong>M</strong> für thermomechanisch gewalzt und <strong>C</strong> für kaltumformbar. Die Mindeststreckgrenze beträgt 700 MPa, die Zugfestigkeit 750–950 MPa. Die Festigkeit stammt nicht aus hohem Kohlenstoff, sondern aus kontrolliertem Walzen und Mikrolegierung. Das Kohlenstoffäquivalent ist daher niedrig und die Schweißeignung gut, der Stahl ist jedoch wärmeempfindlich.</p>
<h2>Das eigentliche Risiko: WEZ-Entfestigung</h2>
<p>Wird die Wärmeeinflusszone (WEZ) thermomechanischer Stähle überhitzt und kühlt langsam ab, geht das beim Walzen erzeugte Feinkorngefüge verloren und die Zone entfestigt. Es entsteht ein Streifen geringerer Festigkeit neben der Naht. Diese Entfestigung ist mindestens so wichtig zu beherrschen wie die Rissgefahr.</p>
<h2>t8/5-Zeit und Streckenenergie</h2>
<p>Maßstab ist die <strong>t8/5-Zeit</strong>, die Abkühldauer von 800 °C auf 500 °C. Eine kurze t8/5-Zeit ergibt ein hartes, rissanfälliges Gefüge, eine lange Entfestigung und Zähigkeitsverlust. Für S700MC empfehlen Hersteller meist etwa 5–15 Sekunden; der genaue Wert steht in der Schweißanleitung des Stahlherstellers.</p>
<p>t8/5 hängt von Wärmeeinbringung, Blechdicke, Stoßart und Vorwärmung ab. Die Wärmeeinbringung berechnet sich als:</p>
<p><strong>Q (kJ/mm) = k × U × I × 60 / (v × 1000)</strong> mit Spannung U (V), Strom I (A), Schweißgeschwindigkeit v (mm/min) und thermischem Wirkungsgrad k (0,8 bei MAG).</p>
<p>Beispiel: MAG mit 26 V, 240 A und 400 mm/min ergibt Q = 0,8 × 26 × 240 × 60 / 400 000 ≈ 0,75 kJ/mm. Dünne Bleche brauchen für denselben t8/5-Bereich weniger, dicke etwas mehr Wärmeeinbringung.</p>
<h2>Praxisregeln</h2>
<ul>
<li><strong>Schmale Mehrlagentechnik statt breitem Pendeln:</strong> eine große Lage erhöht die Wärmeeinbringung.</li>
<li><strong>Zwischenlagentemperatur begrenzen:</strong> nach Herstellerangabe meist etwa 100–150 °C als Obergrenze.</li>
<li><strong>Vorwärmen:</strong> bei dünnen Blechen wegen des niedrigen Kohlenstoffäquivalents meist nicht nötig; bei dicken Querschnitten, hoher Einspannung, Kälte oder Feuchte anwenden (siehe <a href="on-isitma-hesaplama.html">Vorwärmberechnung</a>).</li>
<li><strong>Wasserstoffkontrolle:</strong> saubere, trockene Oberflächen und wasserstoffarme Zusatzwerkstoffe.</li>
<li><strong>Ausgewogene Folge bei langen Nähten:</strong> Naht unterteilen und wechselseitig schweißen, damit sich die Wärme nicht staut.</li>
</ul>
<h2>Zusatzwerkstoff: artgleich oder unterfest?</h2>
<p>Für tragende Stumpfnähte wird meist ein <strong>artgleich fester</strong> Draht gewählt, etwa MAG-Drähte der Klasse 69 nach ISO 16834. Für gering beanspruchte Kehlnähte kann ein <strong>unterfester</strong> Zusatz sinnvoll sein; er erhöht die Duktilität des Schweißguts und senkt die Rissgefahr. Die Wahl gehört in die Bemessung.</p>
<h2>Was zu vermeiden ist</h2>
<ul>
<li><strong>Normalglühen und Warmumformen:</strong> zerstören das thermomechanische Gefüge, die Festigkeit kehrt nicht zurück.</li>
<li><strong>Spannungsarmglühen:</strong> in der Regel nicht empfohlen; falls nötig, nur mit Freigabe des Stahlherstellers.</li>
<li><strong>Zu hohe Temperatur beim Flammrichten:</strong> die zulässige Temperatur des Stahls darf nicht überschritten werden.</li>
</ul>
<h2>Qualifizierung</h2>
<p>S700MC sollte mit einer WPS auf Basis einer WPQR nach ISO 15614-1 geschweißt werden. Härtemessung und Zugversuch in der Verfahrensprüfung zeigen, dass die WEZ-Entfestigung innerhalb der Grenzen bleibt (siehe <a href="s960ql-kaynak-parametreleri.html">S960QL-Schweißparameter</a>).</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei hochfesten Stahlteilen halten wir die Wärmeeinbringung im in der WPS festgelegten Bereich und messen und dokumentieren die Zwischenlagentemperatur. Bei Rahmen und Auslegern mit langen Nähten arbeiten wir mit ausgewogener Schweißfolge und kontrollierten Parametern. <a href="../kaynakli-imalat.html">Unsere Schweißfertigung →</a></p></div>
`,
    faq: [
      ['Muss S700MC vorgewärmt werden?', 'Bei dünnen Blechen meist nicht, wegen des niedrigen Kohlenstoffäquivalents. Bei dicken Querschnitten, hoher Einspannung, Kälte oder Feuchte nach Herstellerangabe.'],
      ['Welche t8/5-Zeit gilt für S700MC?', 'Hersteller empfehlen meist etwa 5–15 Sekunden; der genaue Wert steht in der Schweißanleitung des Herstellers.'],
      ['Mit welchem Draht wird S700MC geschweißt?', 'Artgleich fester Draht (z. B. ISO 16834 Klasse 69) für tragende Stumpfnähte; unterfester Draht kann bei gering beanspruchten Kehlnähten genutzt werden.'],
      ['Darf S700MC normalgeglüht werden?', 'Nein. Normalglühen und Warmumformen zerstören das thermomechanische Gefüge und senken die Festigkeit dauerhaft.']
    ],
    cta_h3: 'Kontrolliertes Schweißen hochfester Stähle',
    cta_p: 'Senden Sie Ihre Zeichnung für Rahmen, Ausleger oder Plattform aus S700MC; wir antworten mit Schweißplan und Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Soldadura de S700MC: aporte térmico, tiempo t8/5 y elección del consumible',
    meta: 'Cómo soldar el acero termomecánico S700MC (EN 10149-2): ablandamiento de la ZAT, tiempo t8/5 y control del aporte térmico, precalentamiento y temperatura entre pasadas, consumible igualado o infraigualado y qué evitar tras soldar.',
    og: 'Soldadura de S700MC: aporte térmico y t8/5',
    tag: 'Acero de alta resistencia',
    h1: 'Soldadura de S700MC: aporte térmico, tiempo t8/5 y elección del consumible',
    crumb: 'Soldadura de S700MC',
    read: '6 min de lectura',
    body: `
<p>El S700MC es un acero de alta resistencia apto para conformado en frío, muy usado en chasis de remolque, plumas de grúa, volquetes y maquinaria de obra para reducir peso. Bien soldado, soporta la misma carga que el S355 con secciones mucho más finas. Mal soldado, la zona de soldadura puede quedar bastante más débil que el propio acero.</p>
<h2>¿Qué es el S700MC?</h2>
<p>En el <strong>S700MC</strong> según EN 10149-2, <strong>M</strong> indica laminado termomecánico y <strong>C</strong> aptitud para conformado en frío. El límite elástico mínimo es 700 MPa y la resistencia a tracción 750–950 MPa. Su resistencia no procede de un alto contenido de carbono sino del laminado controlado y la microaleación. Por eso su carbono equivalente es bajo y su soldabilidad buena, pero es sensible al calor.</p>
<h2>El riesgo real: ablandamiento de la ZAT</h2>
<p>En los aceros termomecánicos, si la zona afectada térmicamente (ZAT) se sobrecalienta y se enfría despacio, se pierde el grano fino obtenido en el laminado y la zona se ablanda. Queda una franja de menor resistencia junto al cordón. Hay que controlar este ablandamiento tanto o más que la fisuración.</p>
<h2>Tiempo t8/5 y aporte térmico</h2>
<p>La medida de control es el <strong>t8/5</strong>, el tiempo de enfriamiento de 800 °C a 500 °C. Un t8/5 corto produce una estructura dura y propensa a fisurar; uno largo, ablandamiento y pérdida de tenacidad. Para el S700MC los fabricantes suelen recomendar unos 5–15 segundos; el valor exacto está en la guía de soldadura del fabricante del acero.</p>
<p>El t8/5 depende del aporte térmico, el espesor, el tipo de unión y el precalentamiento. El aporte térmico se calcula así:</p>
<p><strong>Q (kJ/mm) = k × U × I × 60 / (v × 1000)</strong>, con tensión U (V), corriente I (A), velocidad v (mm/min) y rendimiento térmico k (0,8 en MAG).</p>
<p>Ejemplo: MAG a 26 V, 240 A y 400 mm/min da Q = 0,8 × 26 × 240 × 60 / 400 000 ≈ 0,75 kJ/mm. La chapa fina necesita menos aporte y la gruesa algo más para el mismo rango de t8/5.</p>
<h2>Reglas prácticas</h2>
<ul>
<li><strong>Varias pasadas estrechas en lugar de oscilación ancha:</strong> una pasada grande eleva el aporte térmico.</li>
<li><strong>Limitar la temperatura entre pasadas:</strong> según el fabricante, normalmente un máximo de unos 100–150 °C.</li>
<li><strong>Precalentamiento:</strong> en chapa fina no suele hacer falta por el bajo carbono equivalente; aplicarlo en secciones gruesas, alto embridamiento, frío o humedad (ver <a href="on-isitma-hesaplama.html">cálculo del precalentamiento</a>).</li>
<li><strong>Control del hidrógeno:</strong> superficies limpias y secas y consumibles de bajo hidrógeno.</li>
<li><strong>Secuencia equilibrada en cordones largos:</strong> dividir el cordón y alternar para que el calor no se acumule.</li>
</ul>
<h2>Consumible: ¿igualado o infraigualado?</h2>
<p>En soldaduras a tope que transmiten carga se elige normalmente un hilo de <strong>resistencia igualada</strong>, por ejemplo hilos MAG clase 69 según ISO 16834. En cordones en ángulo poco solicitados puede preferirse un consumible <strong>infraigualado</strong>, que aumenta la ductilidad del metal de aporte y reduce el riesgo de fisuras. La elección debe fijarse en el cálculo.</p>
<h2>Qué no hacer</h2>
<ul>
<li><strong>Normalizado y conformado en caliente:</strong> destruyen la estructura termomecánica; la resistencia no se recupera.</li>
<li><strong>Recocido de eliminación de tensiones:</strong> en general no se recomienda; si es necesario, con aprobación del fabricante.</li>
<li><strong>Temperatura excesiva al enderezar con llama:</strong> no superar la temperatura permitida del acero.</li>
</ul>
<h2>Cualificación</h2>
<p>El S700MC debe soldarse con una WPS basada en una WPQR cualificada según ISO 15614-1. La dureza y la tracción de la cualificación demuestran que el ablandamiento de la ZAT queda dentro de los límites (ver <a href="s960ql-kaynak-parametreleri.html">parámetros de soldadura S960QL</a>).</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> en piezas de acero de alta resistencia mantenemos el aporte térmico en el rango de la WPS y medimos y registramos la temperatura entre pasadas. En chasis y plumas con cordones largos trabajamos con secuencia equilibrada y parámetros controlados. <a href="../kaynakli-imalat.html">Nuestro servicio de fabricación soldada →</a></p></div>
`,
    faq: [
      ['¿El S700MC necesita precalentamiento?', 'En chapa fina normalmente no, por su bajo carbono equivalente. En secciones gruesas, alto embridamiento, frío o humedad, según el fabricante.'],
      ['¿Qué t8/5 es adecuado para S700MC?', 'Los fabricantes suelen recomendar unos 5–15 segundos; el valor exacto está en su guía de soldadura.'],
      ['¿Con qué hilo se suelda el S700MC?', 'Hilo de resistencia igualada (p. ej. ISO 16834 clase 69) en uniones a tope portantes; infraigualado en cordones en ángulo poco solicitados.'],
      ['¿Se puede normalizar el S700MC?', 'No. El normalizado y el conformado en caliente destruyen la estructura termomecánica y reducen la resistencia de forma permanente.']
    ],
    cta_h3: 'Soldadura controlada de acero de alta resistencia',
    cta_p: 'Envíenos el plano de su chasis, pluma o plataforma en S700MC; respondemos con plan de soldadura y oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Souder le S700MC : énergie de soudage, temps t8/5 et choix du métal d’apport',
    meta: 'Comment souder l’acier thermomécanique S700MC (EN 10149-2) ? Adoucissement de la ZAT, temps t8/5 et maîtrise de l’énergie, préchauffage et température entre passes, apport homogène ou sous-homogène et ce qu’il faut éviter après soudage.',
    og: 'Souder le S700MC : énergie et t8/5',
    tag: 'Acier à haute résistance',
    h1: 'Souder le S700MC : énergie de soudage, temps t8/5 et choix du métal d’apport',
    crumb: 'Souder le S700MC',
    read: '6 min de lecture',
    body: `
<p>Le S700MC est un acier à haute résistance apte au formage à froid, très utilisé dans les châssis de remorque, flèches de grue, bennes et engins de chantier pour gagner du poids. Bien soudé, il porte la même charge que le S355 avec des sections bien plus minces. Mal soudé, la zone soudée peut devenir nettement plus faible que l’acier lui-même.</p>
<h2>Qu’est-ce que le S700MC ?</h2>
<p>Dans <strong>S700MC</strong> selon l’EN 10149-2, <strong>M</strong> signifie laminage thermomécanique et <strong>C</strong> aptitude au formage à froid. La limite d’élasticité minimale est de 700 MPa et la résistance à la traction de 750–950 MPa. Sa résistance vient non d’un carbone élevé mais du laminage contrôlé et de la microalliance. Son carbone équivalent est donc faible et sa soudabilité bonne, mais il est sensible à la chaleur.</p>
<h2>Le vrai risque : l’adoucissement de la ZAT</h2>
<p>Dans les aciers thermomécaniques, si la zone affectée thermiquement (ZAT) surchauffe et refroidit lentement, la structure fine obtenue au laminage disparaît et la zone s’adoucit. Il reste une bande de résistance réduite le long du cordon. Cet adoucissement doit être maîtrisé autant, voire plus, que la fissuration.</p>
<h2>Temps t8/5 et énergie de soudage</h2>
<p>La mesure de contrôle est le <strong>t8/5</strong>, durée de refroidissement de 800 °C à 500 °C. Un t8/5 court donne une structure dure et sensible à la fissuration ; un t8/5 long, un adoucissement et une perte de ténacité. Pour le S700MC, les fabricants recommandent en général environ 5–15 secondes ; la valeur exacte figure dans le guide de soudage du fabricant.</p>
<p>Le t8/5 dépend de l’énergie, de l’épaisseur, du type d’assemblage et du préchauffage. L’énergie de soudage se calcule ainsi :</p>
<p><strong>Q (kJ/mm) = k × U × I × 60 / (v × 1000)</strong>, avec tension U (V), intensité I (A), vitesse v (mm/min) et rendement thermique k (0,8 en MAG).</p>
<p>Exemple : MAG à 26 V, 240 A et 400 mm/min donne Q = 0,8 × 26 × 240 × 60 / 400 000 ≈ 0,75 kJ/mm. Les tôles minces demandent moins d’énergie et les épaisses un peu plus pour le même t8/5.</p>
<h2>Règles pratiques</h2>
<ul>
<li><strong>Passes étroites multiples plutôt que balayage large :</strong> une grosse passe élève l’énergie.</li>
<li><strong>Limiter la température entre passes :</strong> selon le fabricant, en général un maximum d’environ 100–150 °C.</li>
<li><strong>Préchauffage :</strong> rarement nécessaire en tôle mince grâce au faible carbone équivalent ; à appliquer pour sections épaisses, fort bridage, froid ou humidité (voir <a href="on-isitma-hesaplama.html">calcul du préchauffage</a>).</li>
<li><strong>Maîtrise de l’hydrogène :</strong> surfaces propres et sèches, produits bas hydrogène.</li>
<li><strong>Séquence équilibrée sur cordons longs :</strong> fractionner et alterner pour éviter l’accumulation de chaleur.</li>
</ul>
<h2>Métal d’apport : homogène ou sous-homogène ?</h2>
<p>Pour les soudures bout à bout porteuses, on choisit en général un fil de <strong>résistance homogène</strong>, par exemple des fils MAG classe 69 selon ISO 16834. Pour les cordons d’angle peu sollicités, un apport <strong>sous-homogène</strong> peut être préféré ; il augmente la ductilité du métal fondu et réduit le risque de fissuration. Le choix relève du calcul.</p>
<h2>Ce qu’il faut éviter</h2>
<ul>
<li><strong>Normalisation et formage à chaud :</strong> détruisent la structure thermomécanique ; la résistance ne revient pas.</li>
<li><strong>Recuit de détensionnement :</strong> généralement déconseillé ; si nécessaire, avec l’accord du fabricant.</li>
<li><strong>Température excessive au dressage à la flamme :</strong> ne pas dépasser la température admise pour l’acier.</li>
</ul>
<h2>Qualification</h2>
<p>Le S700MC doit être soudé avec un DMOS fondé sur un QMOS selon ISO 15614-1. Les essais de dureté et de traction montrent que l’adoucissement de la ZAT reste dans les limites (voir <a href="s960ql-kaynak-parametreleri.html">paramètres de soudage S960QL</a>).</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> sur les pièces en acier à haute résistance, nous maintenons l’énergie dans la plage définie par le DMOS et mesurons et enregistrons la température entre passes. Pour les châssis et flèches à cordons longs, nous travaillons avec une séquence équilibrée et des paramètres maîtrisés. <a href="../kaynakli-imalat.html">Notre fabrication soudée →</a></p></div>
`,
    faq: [
      ['Le S700MC doit-il être préchauffé ?', 'En tôle mince, généralement non, grâce au faible carbone équivalent. Pour sections épaisses, fort bridage, froid ou humidité, selon le fabricant.'],
      ['Quel t8/5 pour le S700MC ?', 'Les fabricants recommandent en général environ 5–15 secondes ; la valeur exacte figure dans leur guide de soudage.'],
      ['Quel fil pour le S700MC ?', 'Fil de résistance homogène (p. ex. ISO 16834 classe 69) pour les bout à bout porteurs ; sous-homogène pour les cordons d’angle peu sollicités.'],
      ['Peut-on normaliser le S700MC ?', 'Non. La normalisation et le formage à chaud détruisent la structure thermomécanique et réduisent durablement la résistance.']
    ],
    cta_h3: 'Soudage maîtrisé des aciers à haute résistance',
    cta_p: 'Envoyez le plan de votre châssis, flèche ou plateforme en S700MC ; nous répondons avec un plan de soudage et un devis.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Saldatura dell’S700MC: apporto termico, tempo t8/5 e scelta del materiale d’apporto',
    meta: 'Come si salda l’acciaio termomeccanico S700MC (EN 10149-2)? Addolcimento della ZTA, tempo t8/5 e controllo dell’apporto termico, preriscaldo e temperatura interpass, apporto omogeneo o sottoresistente e cosa evitare dopo la saldatura.',
    og: 'Saldatura dell’S700MC: apporto termico e t8/5',
    tag: 'Acciaio ad alta resistenza',
    h1: 'Saldatura dell’S700MC: apporto termico, tempo t8/5 e scelta del materiale d’apporto',
    crumb: 'Saldatura S700MC',
    read: '6 min di lettura',
    body: `
<p>L’S700MC è un acciaio ad alta resistenza adatto alla formatura a freddo, molto usato in telai di rimorchi, bracci di gru, ribaltabili e macchine movimento terra per ridurre il peso. Saldato correttamente porta lo stesso carico dell’S355 con sezioni molto più sottili. Saldato male, la zona saldata può risultare molto più debole dell’acciaio stesso.</p>
<h2>Cos’è l’S700MC?</h2>
<p>Nell’<strong>S700MC</strong> secondo EN 10149-2, <strong>M</strong> indica laminazione termomeccanica e <strong>C</strong> idoneità alla formatura a freddo. Lo snervamento minimo è 700 MPa, la resistenza a trazione 750–950 MPa. La resistenza non deriva da un alto tenore di carbonio ma da laminazione controllata e microalligazione. Il carbonio equivalente è quindi basso e la saldabilità buona, ma l’acciaio è sensibile al calore.</p>
<h2>Il vero rischio: addolcimento della ZTA</h2>
<p>Negli acciai termomeccanici, se la zona termicamente alterata (ZTA) si surriscalda e si raffredda lentamente, la struttura fine ottenuta in laminazione si perde e la zona si addolcisce. Resta una fascia a resistenza ridotta accanto al cordone. Questo addolcimento va controllato almeno quanto la criccatura.</p>
<h2>Tempo t8/5 e apporto termico</h2>
<p>La misura di controllo è il <strong>t8/5</strong>, il tempo di raffreddamento da 800 °C a 500 °C. Un t8/5 breve dà una struttura dura e incline alle cricche; uno lungo, addolcimento e perdita di tenacità. Per l’S700MC i produttori raccomandano di solito circa 5–15 secondi; il valore esatto è nella guida di saldatura del produttore.</p>
<p>Il t8/5 dipende da apporto termico, spessore, tipo di giunto e preriscaldo. L’apporto termico si calcola così:</p>
<p><strong>Q (kJ/mm) = k × U × I × 60 / (v × 1000)</strong>, con tensione U (V), corrente I (A), velocità v (mm/min) e rendimento termico k (0,8 per MAG).</p>
<p>Esempio: MAG a 26 V, 240 A e 400 mm/min dà Q = 0,8 × 26 × 240 × 60 / 400 000 ≈ 0,75 kJ/mm. Le lamiere sottili richiedono meno apporto, quelle spesse un po’ di più per lo stesso t8/5.</p>
<h2>Regole pratiche</h2>
<ul>
<li><strong>Più passate strette invece di ampia pendolazione:</strong> una passata grande aumenta l’apporto termico.</li>
<li><strong>Limitare la temperatura interpass:</strong> secondo il produttore, di solito un massimo di circa 100–150 °C.</li>
<li><strong>Preriscaldo:</strong> su lamiere sottili di solito non serve grazie al basso carbonio equivalente; applicarlo con sezioni spesse, vincolo elevato, freddo o umidità (vedi <a href="on-isitma-hesaplama.html">calcolo del preriscaldo</a>).</li>
<li><strong>Controllo dell’idrogeno:</strong> superfici pulite e asciutte, consumabili a basso idrogeno.</li>
<li><strong>Sequenza bilanciata sui cordoni lunghi:</strong> suddividere e alternare per non accumulare calore.</li>
</ul>
<h2>Apporto: omogeneo o sottoresistente?</h2>
<p>Per le saldature di testa portanti si sceglie di solito un filo a <strong>resistenza omogenea</strong>, ad esempio fili MAG classe 69 secondo ISO 16834. Per cordoni d’angolo poco sollecitati si può preferire un apporto <strong>sottoresistente</strong>, che aumenta la duttilità del metallo d’apporto e riduce il rischio di cricche. La scelta va fissata nel calcolo.</p>
<h2>Cosa evitare</h2>
<ul>
<li><strong>Normalizzazione e formatura a caldo:</strong> distruggono la struttura termomeccanica; la resistenza non si recupera.</li>
<li><strong>Distensione:</strong> in genere sconsigliata; se necessaria, con l’approvazione del produttore.</li>
<li><strong>Temperatura eccessiva nella raddrizzatura a fiamma:</strong> non superare la temperatura ammessa per l’acciaio.</li>
</ul>
<h2>Qualifica</h2>
<p>L’S700MC va saldato con una WPS basata su una WPQR qualificata secondo ISO 15614-1. Durezza e trazione nella qualifica dimostrano che l’addolcimento della ZTA resta entro i limiti (vedi <a href="s960ql-kaynak-parametreleri.html">parametri di saldatura S960QL</a>).</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> sui pezzi in acciaio ad alta resistenza manteniamo l’apporto termico nell’intervallo della WPS e misuriamo e registriamo la temperatura interpass. Per telai e bracci con cordoni lunghi lavoriamo con sequenza bilanciata e parametri controllati. <a href="../kaynakli-imalat.html">La nostra carpenteria saldata →</a></p></div>
`,
    faq: [
      ['L’S700MC richiede preriscaldo?', 'Su lamiere sottili di solito no, per il basso carbonio equivalente. Con sezioni spesse, vincolo elevato, freddo o umidità, secondo il produttore.'],
      ['Quale t8/5 per l’S700MC?', 'I produttori raccomandano di solito circa 5–15 secondi; il valore esatto è nella loro guida di saldatura.'],
      ['Con quale filo si salda l’S700MC?', 'Filo a resistenza omogenea (es. ISO 16834 classe 69) per giunti di testa portanti; sottoresistente per cordoni d’angolo poco sollecitati.'],
      ['L’S700MC si può normalizzare?', 'No. Normalizzazione e formatura a caldo distruggono la struttura termomeccanica e riducono la resistenza in modo permanente.']
    ],
    cta_h3: 'Saldatura controllata di acciai ad alta resistenza',
    cta_p: 'Inviateci il disegno del telaio, braccio o piattaforma in S700MC; rispondiamo con piano di saldatura e offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'S700MC lassen: warmte-inbreng, t8/5-afkoeltijd en keuze van het toevoegmateriaal',
    meta: 'Hoe las je thermomechanisch staal S700MC (EN 10149-2)? Verzachting van de WBZ, t8/5-tijd en beheersing van de warmte-inbreng, voorwarm- en tussenlaagtemperatuur, gelijkwaardig of ondermatchend toevoegmateriaal en wat je na het lassen moet vermijden.',
    og: 'S700MC lassen: warmte-inbreng en t8/5',
    tag: 'Hoogsterkte staal',
    h1: 'S700MC lassen: warmte-inbreng, t8/5-afkoeltijd en keuze van het toevoegmateriaal',
    crumb: 'S700MC lassen',
    read: '6 min lezen',
    body: `
<p>S700MC is een koudvervormbaar hoogsterkte staal dat veel wordt gebruikt in aanhangerchassis, kraangieken, kippers en grondverzetmachines om gewicht te besparen. Goed gelast draagt het dezelfde last als S355 met veel dunnere doorsneden. Slecht gelast kan de laszone duidelijk zwakker zijn dan het staal zelf.</p>
<h2>Wat is S700MC?</h2>
<p>Bij <strong>S700MC</strong> volgens EN 10149-2 staat <strong>M</strong> voor thermomechanisch gewalst en <strong>C</strong> voor koudvervormbaar. De minimale vloeigrens is 700 MPa, de treksterkte 750–950 MPa. De sterkte komt niet van een hoog koolstofgehalte maar van gecontroleerd walsen en microlegering. Het koolstofequivalent is daardoor laag en de lasbaarheid goed, maar het staal is warmtegevoelig.</p>
<h2>Het echte risico: verzachting van de WBZ</h2>
<p>Als de warmte-beïnvloede zone (WBZ) van thermomechanisch staal oververhit raakt en langzaam afkoelt, gaat de bij het walsen verkregen fijne korrel verloren en verzacht de zone. Naast de las ontstaat dan een strook met lagere sterkte. Deze verzachting moet minstens zo goed beheerst worden als scheurvorming.</p>
<h2>t8/5-tijd en warmte-inbreng</h2>
<p>De maatstaf is de <strong>t8/5-tijd</strong>, de afkoeltijd van 800 °C naar 500 °C. Een korte t8/5 geeft een harde, scheurgevoelige structuur; een lange geeft verzachting en verlies van taaiheid. Voor S700MC adviseren fabrikanten meestal ongeveer 5–15 seconden; de exacte waarde staat in de lasrichtlijn van de staalproducent.</p>
<p>t8/5 hangt af van warmte-inbreng, plaatdikte, verbindingstype en voorwarmen. De warmte-inbreng wordt berekend als:</p>
<p><strong>Q (kJ/mm) = k × U × I × 60 / (v × 1000)</strong>, met spanning U (V), stroom I (A), lassnelheid v (mm/min) en thermisch rendement k (0,8 bij MAG).</p>
<p>Voorbeeld: MAG met 26 V, 240 A en 400 mm/min geeft Q = 0,8 × 26 × 240 × 60 / 400.000 ≈ 0,75 kJ/mm. Dunne plaat vraagt minder en dikke plaat iets meer warmte-inbreng voor hetzelfde t8/5-bereik.</p>
<h2>Praktische regels</h2>
<ul>
<li><strong>Smalle meerlagentechniek in plaats van breed pendelen:</strong> één grote laag verhoogt de warmte-inbreng.</li>
<li><strong>Tussenlaagtemperatuur begrenzen:</strong> volgens de fabrikant meestal een maximum van ongeveer 100–150 °C.</li>
<li><strong>Voorwarmen:</strong> bij dunne plaat door het lage koolstofequivalent meestal niet nodig; toepassen bij dikke doorsneden, hoge inklemming, kou of vocht (zie <a href="on-isitma-hesaplama.html">berekening van voorwarmen</a>).</li>
<li><strong>Waterstofbeheersing:</strong> schone, droge oppervlakken en waterstofarme toevoegmaterialen.</li>
<li><strong>Evenwichtige volgorde bij lange lassen:</strong> de las opdelen en afwisselend lassen zodat warmte zich niet ophoopt.</li>
</ul>
<h2>Toevoegmateriaal: gelijkwaardig of ondermatchend?</h2>
<p>Voor dragende stuiklassen kiest men meestal een draad met <strong>gelijkwaardige sterkte</strong>, bijvoorbeeld MAG-draden klasse 69 volgens ISO 16834. Voor licht belaste hoeklassen kan een <strong>ondermatchend</strong> toevoegmateriaal de voorkeur hebben; dat verhoogt de taaiheid van het lasmetaal en verlaagt het scheurrisico. De keuze hoort in de sterkteberekening.</p>
<h2>Wat je moet vermijden</h2>
<ul>
<li><strong>Normaliseren en warmvervormen:</strong> vernietigen de thermomechanische structuur; de sterkte komt niet terug.</li>
<li><strong>Spanningsarm gloeien:</strong> meestal niet aanbevolen; alleen met goedkeuring van de staalproducent.</li>
<li><strong>Te hoge temperatuur bij vlamrichten:</strong> de toelaatbare temperatuur van het staal niet overschrijden.</li>
</ul>
<h2>Kwalificatie</h2>
<p>S700MC moet worden gelast met een WPS op basis van een volgens ISO 15614-1 gekwalificeerde WPQR. Hardheidsmeting en trekproef bij de kwalificatie tonen aan dat de WBZ-verzachting binnen de grenzen blijft (zie <a href="s960ql-kaynak-parametreleri.html">lasparameters S960QL</a>).</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij delen van hoogsterkte staal houden we de warmte-inbreng binnen het bereik van de WPS en meten en registreren we de tussenlaagtemperatuur. Bij chassis en gieken met lange lassen werken we met een evenwichtige lasvolgorde en beheerste parameters. <a href="../kaynakli-imalat.html">Onze lasfabricage →</a></p></div>
`,
    faq: [
      ['Moet S700MC worden voorgewarmd?', 'Bij dunne plaat meestal niet, door het lage koolstofequivalent. Bij dikke doorsneden, hoge inklemming, kou of vocht volgens de fabrikant.'],
      ['Welke t8/5 voor S700MC?', 'Fabrikanten adviseren meestal ongeveer 5–15 seconden; de exacte waarde staat in hun lasrichtlijn.'],
      ['Met welke draad las je S700MC?', 'Draad met gelijkwaardige sterkte (bijv. ISO 16834 klasse 69) voor dragende stuiklassen; ondermatchend voor licht belaste hoeklassen.'],
      ['Mag S700MC worden genormaliseerd?', 'Nee. Normaliseren en warmvervormen vernietigen de thermomechanische structuur en verlagen de sterkte blijvend.']
    ],
    cta_h3: 'Beheerst lassen van hoogsterkte staal',
    cta_p: 'Stuur uw tekening van chassis, giek of platform in S700MC; we reageren met lasplan en offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Sveising av S700MC: varmetilførsel, t8/5-avkjølingstid og valg av tilsettmateriale',
    meta: 'Hvordan sveiser man termomekanisk stål S700MC (EN 10149-2)? Mykning i HAZ, t8/5-tid og kontroll av varmetilførsel, forvarming og mellomstrengstemperatur, likeverdig eller undermatchende tilsett og hva som bør unngås etter sveising.',
    og: 'Sveising av S700MC: varmetilførsel og t8/5',
    tag: 'Høyfast stål',
    h1: 'Sveising av S700MC: varmetilførsel, t8/5-avkjølingstid og valg av tilsettmateriale',
    crumb: 'Sveising av S700MC',
    read: '6 min lesing',
    body: `
<p>S700MC er et høyfast stål egnet for kaldforming, mye brukt i tilhengerchassis, kranbommer, tippere og anleggsmaskiner for å spare vekt. Riktig sveist bærer det samme last som S355 med mye tynnere tverrsnitt. Feil sveist kan sveisesonen bli betydelig svakere enn selve stålet.</p>
<h2>Hva er S700MC?</h2>
<p>I <strong>S700MC</strong> etter EN 10149-2 betyr <strong>M</strong> termomekanisk valset og <strong>C</strong> egnet for kaldforming. Minste flytegrense er 700 MPa og strekkfasthet 750–950 MPa. Styrken kommer ikke fra høyt karbon, men fra kontrollert valsing og mikrolegering. Karbonekvivalenten er derfor lav og sveisbarheten god, men stålet er varmefølsomt.</p>
<h2>Den egentlige risikoen: mykning i HAZ</h2>
<p>I termomekaniske stål går den finkornede strukturen fra valsingen tapt hvis den varmepåvirkede sonen (HAZ) overopphetes og avkjøles langsomt, og sonen blir myk. Resultatet er en stripe med redusert fasthet ved siden av sveisen. Denne mykningen må kontrolleres minst like godt som sprekkfaren.</p>
<h2>t8/5-tid og varmetilførsel</h2>
<p>Målestokken er <strong>t8/5</strong>, avkjølingstiden fra 800 °C til 500 °C. Kort t8/5 gir hard, sprekkutsatt struktur; lang t8/5 gir mykning og tap av seighet. For S700MC anbefaler produsentene vanligvis omtrent 5–15 sekunder; eksakt verdi står i stålprodusentens sveiseveiledning.</p>
<p>t8/5 avhenger av varmetilførsel, platetykkelse, forbindelsestype og forvarming. Varmetilførselen beregnes slik:</p>
<p><strong>Q (kJ/mm) = k × U × I × 60 / (v × 1000)</strong>, med spenning U (V), strøm I (A), sveisehastighet v (mm/min) og termisk virkningsgrad k (0,8 for MAG).</p>
<p>Eksempel: MAG med 26 V, 240 A og 400 mm/min gir Q = 0,8 × 26 × 240 × 60 / 400 000 ≈ 0,75 kJ/mm. Tynn plate trenger mindre og tykk plate litt mer varmetilførsel for samme t8/5-område.</p>
<h2>Praktiske regler</h2>
<ul>
<li><strong>Smale strenger i flere lag i stedet for bred pendling:</strong> én stor streng øker varmetilførselen.</li>
<li><strong>Begrens mellomstrengstemperaturen:</strong> etter produsentens anbefaling vanligvis maks omtrent 100–150 °C.</li>
<li><strong>Forvarming:</strong> sjelden nødvendig på tynn plate på grunn av lav karbonekvivalent; brukes ved tykke tverrsnitt, høy innspenning, kulde eller fukt (se <a href="on-isitma-hesaplama.html">beregning av forvarming</a>).</li>
<li><strong>Hydrogenkontroll:</strong> rene, tørre flater og lavhydrogen tilsettmateriale.</li>
<li><strong>Balansert rekkefølge på lange sveiser:</strong> del opp sveisen og arbeid vekselvis så varmen ikke hoper seg opp.</li>
</ul>
<h2>Tilsettmateriale: likeverdig eller undermatchende?</h2>
<p>For bærende buttsveiser velges vanligvis tråd med <strong>likeverdig fasthet</strong>, for eksempel MAG-tråd klasse 69 etter ISO 16834. For lite belastede kilsveiser kan et <strong>undermatchende</strong> tilsett foretrekkes; det gir mer duktilt sveisemetall og lavere sprekkfare. Valget skal avgjøres i dimensjoneringen.</p>
<h2>Hva som bør unngås</h2>
<ul>
<li><strong>Normalisering og varmforming:</strong> ødelegger den termomekaniske strukturen; fastheten kommer ikke tilbake.</li>
<li><strong>Spenningsavlastning:</strong> anbefales vanligvis ikke; om nødvendig kun med stålprodusentens godkjenning.</li>
<li><strong>For høy temperatur ved flammeretting:</strong> stålets tillatte temperatur må ikke overskrides.</li>
</ul>
<h2>Kvalifisering</h2>
<p>S700MC bør sveises etter en WPS basert på en WPQR kvalifisert etter ISO 15614-1. Hardhetsmåling og strekkprøve i prosedyrekvalifiseringen viser at mykningen i HAZ holder seg innenfor kravene (se <a href="s960ql-kaynak-parametreleri.html">sveiseparametere for S960QL</a>).</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> på deler av høyfast stål holder vi varmetilførselen innenfor området i WPS-en og måler og registrerer mellomstrengstemperaturen. For chassis og bommer med lange sveiser arbeider vi med balansert sveiserekkefølge og kontrollerte parametere. <a href="../kaynakli-imalat.html">Vår sveisede tilvirkning →</a></p></div>
`,
    faq: [
      ['Må S700MC forvarmes?', 'På tynn plate vanligvis ikke, på grunn av lav karbonekvivalent. Ved tykke tverrsnitt, høy innspenning, kulde eller fukt etter produsentens anbefaling.'],
      ['Hvilken t8/5 gjelder for S700MC?', 'Produsentene anbefaler vanligvis omtrent 5–15 sekunder; eksakt verdi står i deres sveiseveiledning.'],
      ['Hvilken tråd brukes til S700MC?', 'Tråd med likeverdig fasthet (f.eks. ISO 16834 klasse 69) for bærende buttsveiser; undermatchende for lite belastede kilsveiser.'],
      ['Kan S700MC normaliseres?', 'Nei. Normalisering og varmforming ødelegger den termomekaniske strukturen og reduserer fastheten permanent.']
    ],
    cta_h3: 'Kontrollert sveising av høyfast stål',
    cta_p: 'Send tegning av chassis, bom eller plattform i S700MC; vi svarer med sveiseplan og tilbud.',
    cta_btn: 'Be om tilbud →'
  }
};
