export default {
  order: 17,
  slug: 'kaynak-maliyeti-hesaplama',
  key: 'p17_cost',
  date: '2026-02-23',
  keywords: 'kaynak maliyeti hesaplama, metre başı kaynak maliyeti, kaynak teli sarfiyatı hesabı, ark süresi, operatör faktörü, yığma hızı, welding cost calculation, Schweißkosten berechnen',
  related: ['kaynakli-imalat-fiyati', 'maliyet-optimizasyon', 'kose-kaynagi-a-olcusu', 'mig-mag-parametreleri'],
  tr: {
    title: 'Kaynak Maliyeti Hesaplama: Tel Sarfiyatı, Ark Süresi ve Metre Başı Maliyet',
    meta: 'Kaynak maliyeti nasıl hesaplanır? Kaynak metali ağırlığı, yığma hızı, ark süresi, operatör faktörü, gaz ve tel sarfiyatı formülleri, a5 köşe kaynağı için sayısal örnek ve maliyeti düşüren tasarım kararları.',
    og: 'Kaynak Maliyeti Hesaplama',
    tag: 'Maliyet · Hesap',
    h1: 'Kaynak Maliyeti Hesaplama: Tel Sarfiyatı, Ark Süresi ve Metre Başı Maliyet',
    crumb: 'Kaynak Maliyeti Hesabı',
    read: '7 dk okuma',
    body: `
<p>Kaynaklı bir parçanın fiyatında kaynak işçiliği çoğu zaman en büyük kalemdir. Bu maliyet tahminle değil, birkaç basit büyüklükle hesaplanabilir: doldurulacak kaynak metali, yöntemin yığma hızı ve kaynakçının arkı ne kadar süre yanık tuttuğu. Bu yazıda hesap adımlarını ve bir sayısal örneği paylaşıyoruz.</p>
<h2>1. Kaynak Metali Ağırlığı</h2>
<p>Önce dikişin kesit alanı bulunur. Eşit bacaklı bir köşe kaynağında teorik kesit alanı <strong>A ≈ a²</strong> (mm²) olur. Alın kaynağında alan ağız geometrisinden hesaplanır (bkz. <a href="kaynak-agzi-hazirligi-iso-9692-1.html">kaynak ağzı rehberi</a>). Kaynak yüzeyindeki fazla dolgu için genellikle %10-20 eklenir.</p>
<p><strong>Metre başı kaynak metali (g/m) ≈ A (mm²) × 7,85 × (1 + fazla dolgu payı)</strong></p>
<table class="data-table"><thead><tr><th>Köşe kaynağı</th><th>Kesit (mm²)</th><th>Kaynak metali (g/m, %15 fazla dolgu ile)</th></tr></thead><tbody>
<tr><td>a3</td><td>9</td><td>≈ 81</td></tr>
<tr><td>a4</td><td>16</td><td>≈ 144</td></tr>
<tr><td>a5</td><td>25</td><td>≈ 226</td></tr>
<tr><td>a6</td><td>36</td><td>≈ 325</td></tr>
<tr><td>a8</td><td>64</td><td>≈ 578</td></tr>
</tbody></table>
<h2>2. Sarf Malzeme Miktarı</h2>
<p>Satın alınan telin tamamı kaynak metaline dönüşmez; bir kısmı sıçrantı, cüruf veya artık olarak kaybolur. Yığma verimi yönteme göre değişir:</p>
<ul>
<li>Masif telle MAG: yaklaşık %90-95</li>
<li>Özlü tel (FCAW): yaklaşık %80-90</li>
<li>Örtülü elektrot (MMA): yaklaşık %55-65 (koçan ve cüruf kaybı)</li>
<li>Tozaltı (SAW): tel için %95'in üzerinde; toz ayrıca hesaplanır</li>
</ul>
<p><strong>Gerekli tel (kg/m) = kaynak metali (kg/m) / yığma verimi</strong></p>
<h2>3. Ark Süresi</h2>
<p>Yığma hızı, yöntemin saatte yığabildiği kaynak metalidir. 1,2 mm masif telle MAG'da düz pozisyonda tipik olarak 3-5 kg/saat, dik pozisyonda belirgin şekilde daha düşüktür. Tozaltı kaynağında tek telle 6-10 kg/saat ve üzeri mümkündür.</p>
<p><strong>Ark süresi (dk/m) = kaynak metali (kg/m) / yığma hızı (kg/saat) × 60</strong></p>
<h2>4. Operatör Faktörü</h2>
<p>Kaynakçının mesai süresinin tamamı ark süresi değildir. Parça çevirme, puntalama, cüruf temizleme, torç temizliği ve ölçüm de zaman alır. Arkın yanık olduğu sürenin toplam süreye oranına <strong>operatör faktörü</strong> denir. Elle kaynakta bu oran çoğu zaman %20-40 arasındadır; mekanize kaynakta ve iyi fikstürlenmiş işlerde daha yüksektir.</p>
<p><strong>Kaynak işçilik süresi (dk/m) = ark süresi / operatör faktörü</strong></p>
<h2>5. Gaz ve Enerji</h2>
<ul>
<li><strong>Koruyucu gaz:</strong> debi (l/dk) × ark süresi. 15 l/dk debiyle her ark dakikası 15 litre gaz demektir.</li>
<li><strong>Enerji:</strong> akım × gerilim × ark süresi / makine verimi. Toplam maliyet içinde genellikle küçük bir paydır.</li>
</ul>
<h2>Sayısal Örnek: a5 Köşe Kaynağı, MAG, PB Pozisyonu</h2>
<ol>
<li>Kaynak metali: ≈ 0,226 kg/m</li>
<li>Tel: 0,226 / 0,93 ≈ <strong>0,243 kg/m</strong></li>
<li>Ark süresi: 0,226 / 4 kg/saat × 60 ≈ <strong>3,4 dk/m</strong></li>
<li>Operatör faktörü %30 ile işçilik süresi: 3,4 / 0,30 ≈ <strong>11,3 dk/m</strong></li>
<li>Gaz: 15 l/dk × 3,4 dk ≈ <strong>51 l/m</strong></li>
</ol>
<p>Metre başı maliyet = işçilik süresi × saat ücreti + tel × tel fiyatı + gaz × gaz fiyatı. Bu hesapta işçilik payı, sarf malzemenin genellikle birkaç katıdır. Aynı dikiş a6 yazılsaydı kaynak metali %44 artacak, süre de benzer oranda uzayacaktı.</p>
<h2>Hesabın Dışında Kalanlar</h2>
<p>Gerçek bir parçada kaynak dışı süreler çoğu zaman ark süresinden fazladır: malzeme hazırlığı, montaj ve puntalama, fikstür kurulumu, doğrultma, taşlama, temizlik, muayene ve dokümantasyon. Teklif hesabında bunlar ayrı kalemler olarak ele alınmalıdır (bkz. <a href="kaynakli-imalat-fiyati.html">kaynaklı imalat fiyatını belirleyen etkenler</a>).</p>
<h2>Maliyeti Düşüren Kararlar</h2>
<ul>
<li>Kaynak ölçüsünü hesaba göre seçmek, gereksiz büyütmemek.</li>
<li>Kalın saclarda V yerine X veya U ağzı kullanmak.</li>
<li>Parçayı düz ve yatay pozisyonda kaynatılabilecek şekilde tasarlamak.</li>
<li>Fikstürle tekrar eden montaj süresini kısaltmak.</li>
<li>Uzun düz dikişleri tozaltı gibi yüksek yığma hızlı yöntemlere yönlendirmek.</li>
<li>Gerekmeyen taşlama ve görünüm şartlarını kaldırmak.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Tekliflerimizi dikiş metrajı, kaynak ölçüsü, pozisyon ve yönteme göre hesaplar, kaynak dışı süreleri ayrı değerlendiririz. Tasarımdan kaynaklanan maliyet artırıcı noktaları teklifle birlikte öneri olarak iletiriz. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['Metre başı kaynak teli sarfiyatı nasıl hesaplanır?', 'Dikiş kesit alanı (mm²) × 7,85 ile metre başı kaynak metali gram olarak bulunur, fazla dolgu payı eklenir ve yöntemin yığma verimine bölünür.'],
      ['a5 köşe kaynağı için metre başına ne kadar tel gider?', 'Yaklaşık 0,23 kg kaynak metali gerekir; masif telle MAG’da yığma verimiyle birlikte yaklaşık 0,24-0,25 kg tel kullanılır.'],
      ['Operatör faktörü nedir?', 'Arkın yanık olduğu sürenin kaynakçının toplam çalışma süresine oranıdır. Elle kaynakta çoğu zaman %20-40 arasındadır.'],
      ['Kaynak maliyetinin en büyük kalemi nedir?', 'Çoğu kaynaklı imalatta işçilik süresidir. Sarf malzeme ve gaz genellikle işçiliğin küçük bir bölümü kadardır.']
    ],
    cta_h3: 'Parçanız için şeffaf bir maliyet hesabı',
    cta_p: 'Çiziminizi gönderin; dikiş metrajı ve yönteme dayalı, varsayımları açıkça yazılmış bir teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Welding Cost Calculation: Wire Consumption, Arc Time and Cost per Metre',
    meta: 'How to calculate welding cost: weld metal weight, deposition rate, arc time, operator factor, gas and wire consumption formulas, a worked example for an a5 fillet weld and design decisions that reduce cost.',
    og: 'Welding Cost Calculation',
    tag: 'Cost · Calculation',
    h1: 'Welding Cost Calculation: Wire Consumption, Arc Time and Cost per Metre',
    crumb: 'Welding Cost Calculation',
    read: '7 min read',
    body: `
<p>In the price of a welded part, welding labour is often the largest item. It can be calculated rather than guessed, using a few simple quantities: the weld metal to be deposited, the deposition rate of the process and how long the welder actually keeps the arc burning. This article walks through the steps with a worked example.</p>
<h2>1. Weld Metal Weight</h2>
<p>Start with the cross-sectional area of the weld. For an equal-leg fillet weld the theoretical area is <strong>A ≈ a²</strong> (mm²). For butt welds the area follows from groove geometry (see our <a href="kaynak-agzi-hazirligi-iso-9692-1.html">joint preparation guide</a>). Usually 10-20% is added for reinforcement.</p>
<p><strong>Weld metal per metre (g/m) ≈ A (mm²) × 7.85 × (1 + reinforcement allowance)</strong></p>
<table class="data-table"><thead><tr><th>Fillet weld</th><th>Area (mm²)</th><th>Weld metal (g/m, with 15% reinforcement)</th></tr></thead><tbody>
<tr><td>a3</td><td>9</td><td>≈ 81</td></tr>
<tr><td>a4</td><td>16</td><td>≈ 144</td></tr>
<tr><td>a5</td><td>25</td><td>≈ 226</td></tr>
<tr><td>a6</td><td>36</td><td>≈ 325</td></tr>
<tr><td>a8</td><td>64</td><td>≈ 578</td></tr>
</tbody></table>
<h2>2. Consumable Quantity</h2>
<p>Not all purchased wire ends up as weld metal; some is lost as spatter, slag or stub ends. Deposition efficiency depends on the process:</p>
<ul>
<li>MAG with solid wire: about 90-95%</li>
<li>Flux-cored wire (FCAW): about 80-90%</li>
<li>Covered electrodes (MMA): about 55-65% (stub and slag losses)</li>
<li>Submerged arc (SAW): above 95% for the wire; flux is calculated separately</li>
</ul>
<p><strong>Wire required (kg/m) = weld metal (kg/m) / deposition efficiency</strong></p>
<h2>3. Arc Time</h2>
<p>Deposition rate is the weld metal a process deposits per hour. With 1.2 mm solid wire MAG in the flat position it is typically 3-5 kg/h, clearly lower in vertical position. Single-wire SAW can reach 6-10 kg/h and more.</p>
<p><strong>Arc time (min/m) = weld metal (kg/m) / deposition rate (kg/h) × 60</strong></p>
<h2>4. Operator Factor</h2>
<p>Not all of a welder’s working time is arc time. Turning parts, tacking, slag removal, torch cleaning and measuring also take time. The ratio of arc-on time to total time is the <strong>operator factor</strong>. In manual welding it is often 20-40%; in mechanized welding and well-fixtured work it is higher.</p>
<p><strong>Welding labour time (min/m) = arc time / operator factor</strong></p>
<h2>5. Gas and Energy</h2>
<ul>
<li><strong>Shielding gas:</strong> flow rate (l/min) × arc time. At 15 l/min, every arc minute uses 15 litres.</li>
<li><strong>Energy:</strong> current × voltage × arc time / machine efficiency. Usually a small share of the total.</li>
</ul>
<h2>Worked Example: a5 Fillet Weld, MAG, PB Position</h2>
<ol>
<li>Weld metal: ≈ 0.226 kg/m</li>
<li>Wire: 0.226 / 0.93 ≈ <strong>0.243 kg/m</strong></li>
<li>Arc time: 0.226 / 4 kg/h × 60 ≈ <strong>3.4 min/m</strong></li>
<li>With a 30% operator factor, labour time: 3.4 / 0.30 ≈ <strong>11.3 min/m</strong></li>
<li>Gas: 15 l/min × 3.4 min ≈ <strong>51 l/m</strong></li>
</ol>
<p>Cost per metre = labour time × hourly rate + wire × wire price + gas × gas price. Labour is usually several times the consumables. Had the same weld been specified as a6, weld metal would rise by 44% and time by a similar proportion.</p>
<h2>What the Calculation Leaves Out</h2>
<p>On a real part, non-welding time often exceeds arc time: material preparation, fit-up and tacking, fixture set-up, straightening, grinding, cleaning, inspection and documentation. In a quotation these are handled as separate items (see <a href="kaynakli-imalat-fiyati.html">what drives welded fabrication prices</a>).</p>
<h2>Decisions That Reduce Cost</h2>
<ul>
<li>Choose weld size by calculation, not "just in case".</li>
<li>Use X or U grooves instead of V on thick plate.</li>
<li>Design the part so it can be welded in flat and horizontal positions.</li>
<li>Shorten repetitive fit-up with fixtures.</li>
<li>Move long straight seams to high-deposition processes such as SAW.</li>
<li>Remove unnecessary grinding and cosmetic requirements.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> we calculate quotations from seam length, weld size, position and process, and assess non-welding time separately. Design points that drive cost up are sent with the quotation as suggestions. <a href="../cizime-gore-imalat.html">Build-to-print fabrication →</a></p></div>
`,
    faq: [
      ['How is wire consumption per metre calculated?', 'Weld cross-section (mm²) × 7.85 gives weld metal in grams per metre; add reinforcement and divide by the deposition efficiency of the process.'],
      ['How much wire does an a5 fillet weld use per metre?', 'About 0.23 kg of weld metal; with solid-wire MAG efficiency this means roughly 0.24-0.25 kg of wire.'],
      ['What is the operator factor?', 'The ratio of arc-on time to the welder’s total working time. In manual welding it is often 20-40%.'],
      ['What is the largest welding cost item?', 'In most welded fabrication it is labour time. Consumables and gas are usually a small fraction of labour.']
    ],
    cta_h3: 'A transparent cost calculation for your part',
    cta_p: 'Send your drawing; we will prepare a quotation based on seam length and process, with assumptions clearly stated.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Schweißkosten berechnen: Drahtverbrauch, Lichtbogenzeit und Kosten pro Meter',
    meta: 'Wie berechnet man Schweißkosten? Schweißgutmasse, Abschmelzleistung, Lichtbogenzeit, Lichtbogenzeitfaktor, Formeln für Gas- und Drahtverbrauch, Rechenbeispiel für eine a5-Kehlnaht und kostensenkende Konstruktionsentscheidungen.',
    og: 'Schweißkosten berechnen',
    tag: 'Kosten · Berechnung',
    h1: 'Schweißkosten berechnen: Drahtverbrauch, Lichtbogenzeit und Kosten pro Meter',
    crumb: 'Schweißkosten',
    read: '7 Min. Lesezeit',
    body: `
<p>Im Preis eines Schweißteils ist die Schweißarbeit oft der größte Posten. Sie lässt sich berechnen statt schätzen, mit wenigen Größen: einzubringendes Schweißgut, Abschmelzleistung des Verfahrens und die Zeit, in der der Lichtbogen tatsächlich brennt. Dieser Beitrag zeigt die Schritte mit einem Rechenbeispiel.</p>
<h2>1. Schweißgutmasse</h2>
<p>Zuerst die Querschnittsfläche der Naht. Bei einer gleichschenkligen Kehlnaht beträgt sie theoretisch <strong>A ≈ a²</strong> (mm²). Bei Stumpfnähten ergibt sie sich aus der Fugengeometrie (siehe <a href="kaynak-agzi-hazirligi-iso-9692-1.html">Leitfaden zur Nahtvorbereitung</a>). Für die Nahtüberhöhung werden meist 10-20 % aufgeschlagen.</p>
<p><strong>Schweißgut je Meter (g/m) ≈ A (mm²) × 7,85 × (1 + Überhöhungszuschlag)</strong></p>
<table class="data-table"><thead><tr><th>Kehlnaht</th><th>Fläche (mm²)</th><th>Schweißgut (g/m, mit 15 % Überhöhung)</th></tr></thead><tbody>
<tr><td>a3</td><td>9</td><td>≈ 81</td></tr>
<tr><td>a4</td><td>16</td><td>≈ 144</td></tr>
<tr><td>a5</td><td>25</td><td>≈ 226</td></tr>
<tr><td>a6</td><td>36</td><td>≈ 325</td></tr>
<tr><td>a8</td><td>64</td><td>≈ 578</td></tr>
</tbody></table>
<h2>2. Zusatzwerkstoffbedarf</h2>
<p>Nicht der gesamte Draht wird zu Schweißgut; ein Teil geht als Spritzer, Schlacke oder Reststück verloren. Das Ausbringen hängt vom Verfahren ab:</p>
<ul>
<li>MAG mit Massivdraht: etwa 90-95 %</li>
<li>Fülldraht (FCAW): etwa 80-90 %</li>
<li>Stabelektrode (MMA): etwa 55-65 % (Reststück- und Schlackeverluste)</li>
<li>UP-Schweißen: über 95 % beim Draht; Pulver wird gesondert gerechnet</li>
</ul>
<p><strong>Drahtbedarf (kg/m) = Schweißgut (kg/m) / Ausbringen</strong></p>
<h2>3. Lichtbogenzeit</h2>
<p>Die Abschmelzleistung ist das Schweißgut, das ein Verfahren pro Stunde einbringt. Bei MAG mit 1,2-mm-Massivdraht in Wannenlage typisch 3-5 kg/h, in Steiglage deutlich weniger. UP mit Eindraht erreicht 6-10 kg/h und mehr.</p>
<p><strong>Lichtbogenzeit (min/m) = Schweißgut (kg/m) / Abschmelzleistung (kg/h) × 60</strong></p>
<h2>4. Lichtbogenzeitfaktor</h2>
<p>Nicht die gesamte Arbeitszeit ist Lichtbogenzeit. Wenden, Heften, Schlacke entfernen, Brenner reinigen und Messen kosten ebenfalls Zeit. Das Verhältnis von Lichtbogenbrennzeit zur Gesamtzeit ist der <strong>Lichtbogenzeitfaktor</strong>. Beim Handschweißen liegt er oft bei 20-40 %, beim mechanisierten Schweißen und gut vorrichtungsgestützter Arbeit höher.</p>
<p><strong>Schweißarbeitszeit (min/m) = Lichtbogenzeit / Lichtbogenzeitfaktor</strong></p>
<h2>5. Gas und Energie</h2>
<ul>
<li><strong>Schutzgas:</strong> Durchfluss (l/min) × Lichtbogenzeit. Bei 15 l/min verbraucht jede Lichtbogenminute 15 Liter.</li>
<li><strong>Energie:</strong> Strom × Spannung × Lichtbogenzeit / Wirkungsgrad der Stromquelle. Meist ein kleiner Anteil.</li>
</ul>
<h2>Rechenbeispiel: a5-Kehlnaht, MAG, Position PB</h2>
<ol>
<li>Schweißgut: ≈ 0,226 kg/m</li>
<li>Draht: 0,226 / 0,93 ≈ <strong>0,243 kg/m</strong></li>
<li>Lichtbogenzeit: 0,226 / 4 kg/h × 60 ≈ <strong>3,4 min/m</strong></li>
<li>Mit 30 % Lichtbogenzeitfaktor Arbeitszeit: 3,4 / 0,30 ≈ <strong>11,3 min/m</strong></li>
<li>Gas: 15 l/min × 3,4 min ≈ <strong>51 l/m</strong></li>
</ol>
<p>Kosten je Meter = Arbeitszeit × Stundensatz + Draht × Drahtpreis + Gas × Gaspreis. Der Lohnanteil ist meist ein Vielfaches der Zusatzwerkstoffe. Wäre dieselbe Naht als a6 angegeben, stiege das Schweißgut um 44 % und die Zeit ähnlich.</p>
<h2>Was die Rechnung nicht enthält</h2>
<p>Am realen Bauteil übersteigen Nebenzeiten oft die Lichtbogenzeit: Materialvorbereitung, Zusammenbau und Heften, Vorrichtungsaufbau, Richten, Schleifen, Reinigen, Prüfen und Dokumentation. Im Angebot werden sie als eigene Posten behandelt (siehe <a href="kaynakli-imalat-fiyati.html">Preisfaktoren in der Schweißfertigung</a>).</p>
<h2>Kostensenkende Entscheidungen</h2>
<ul>
<li>Nahtmaß nach Berechnung wählen, nicht „sicherheitshalber".</li>
<li>Bei Dickblech X- oder U- statt V-Naht.</li>
<li>Bauteil so gestalten, dass in Wannen- und Horizontalposition geschweißt werden kann.</li>
<li>Wiederkehrende Montagezeiten mit Vorrichtungen verkürzen.</li>
<li>Lange gerade Nähte auf Verfahren mit hoher Abschmelzleistung wie UP legen.</li>
<li>Unnötige Schleif- und Optikanforderungen streichen.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Wir kalkulieren Angebote aus Nahtlänge, Nahtmaß, Position und Verfahren und bewerten Nebenzeiten getrennt. Kostentreiber aus der Konstruktion teilen wir mit dem Angebot als Vorschläge mit. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Wie berechnet man den Drahtverbrauch je Meter?', 'Nahtquerschnitt (mm²) × 7,85 ergibt das Schweißgut in g/m; Überhöhung aufschlagen und durch das Ausbringen des Verfahrens teilen.'],
      ['Wie viel Draht braucht eine a5-Kehlnaht je Meter?', 'Etwa 0,23 kg Schweißgut; bei MAG mit Massivdraht sind das rund 0,24-0,25 kg Draht.'],
      ['Was ist der Lichtbogenzeitfaktor?', 'Das Verhältnis der Lichtbogenbrennzeit zur gesamten Arbeitszeit des Schweißers. Beim Handschweißen oft 20-40 %.'],
      ['Was ist der größte Kostenposten beim Schweißen?', 'In den meisten Fällen die Arbeitszeit. Zusatzwerkstoffe und Gas machen meist nur einen kleinen Teil davon aus.']
    ],
    cta_h3: 'Eine transparente Kostenrechnung für Ihr Bauteil',
    cta_p: 'Senden Sie Ihre Zeichnung; wir erstellen ein Angebot auf Basis von Nahtlänge und Verfahren mit klar benannten Annahmen.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Cálculo del coste de soldadura: consumo de hilo, tiempo de arco y coste por metro',
    meta: 'Cómo calcular el coste de soldadura: peso de metal depositado, tasa de deposición, tiempo de arco, factor de operación, fórmulas de consumo de gas e hilo, ejemplo para una soldadura en ángulo a5 y decisiones de diseño que reducen el coste.',
    og: 'Cálculo del coste de soldadura',
    tag: 'Coste · Cálculo',
    h1: 'Cálculo del coste de soldadura: consumo de hilo, tiempo de arco y coste por metro',
    crumb: 'Coste de soldadura',
    read: '7 min de lectura',
    body: `
<p>En el precio de una pieza soldada, la mano de obra de soldadura suele ser la partida mayor. Puede calcularse en lugar de estimarse a ojo, con unas pocas magnitudes: el metal a depositar, la tasa de deposición del proceso y el tiempo que el soldador mantiene realmente el arco encendido. Este artículo recorre los pasos con un ejemplo.</p>
<h2>1. Peso del metal depositado</h2>
<p>Primero, la sección del cordón. En una soldadura en ángulo de catetos iguales la sección teórica es <strong>A ≈ a²</strong> (mm²). En soldaduras a tope se obtiene de la geometría del chaflán (ver nuestra <a href="kaynak-agzi-hazirligi-iso-9692-1.html">guía de preparación de bordes</a>). Suele añadirse un 10-20 % por sobreespesor.</p>
<p><strong>Metal por metro (g/m) ≈ A (mm²) × 7,85 × (1 + sobreespesor)</strong></p>
<table class="data-table"><thead><tr><th>Soldadura en ángulo</th><th>Sección (mm²)</th><th>Metal (g/m, con 15 % de sobreespesor)</th></tr></thead><tbody>
<tr><td>a3</td><td>9</td><td>≈ 81</td></tr>
<tr><td>a4</td><td>16</td><td>≈ 144</td></tr>
<tr><td>a5</td><td>25</td><td>≈ 226</td></tr>
<tr><td>a6</td><td>36</td><td>≈ 325</td></tr>
<tr><td>a8</td><td>64</td><td>≈ 578</td></tr>
</tbody></table>
<h2>2. Cantidad de consumible</h2>
<p>No todo el hilo comprado acaba como metal depositado; parte se pierde en proyecciones, escoria o colillas. El rendimiento depende del proceso:</p>
<ul>
<li>MAG con hilo macizo: aprox. 90-95 %</li>
<li>Hilo tubular (FCAW): aprox. 80-90 %</li>
<li>Electrodo revestido (MMA): aprox. 55-65 % (pérdidas de colilla y escoria)</li>
<li>Arco sumergido: más del 95 % para el hilo; el fundente se calcula aparte</li>
</ul>
<p><strong>Hilo necesario (kg/m) = metal depositado (kg/m) / rendimiento</strong></p>
<h2>3. Tiempo de arco</h2>
<p>La tasa de deposición es el metal que el proceso deposita por hora. Con MAG e hilo macizo de 1,2 mm en posición plana es típicamente de 3-5 kg/h, claramente menor en vertical. El arco sumergido con un hilo alcanza 6-10 kg/h o más.</p>
<p><strong>Tiempo de arco (min/m) = metal (kg/m) / tasa de deposición (kg/h) × 60</strong></p>
<h2>4. Factor de operación</h2>
<p>No todo el tiempo de trabajo es tiempo de arco. Voltear piezas, puntear, limpiar escoria y antorcha o medir también cuesta. La relación entre tiempo de arco y tiempo total es el <strong>factor de operación</strong>. En soldadura manual suele estar entre el 20 % y el 40 %; en soldadura mecanizada y trabajos bien utillados es mayor.</p>
<p><strong>Tiempo de mano de obra (min/m) = tiempo de arco / factor de operación</strong></p>
<h2>5. Gas y energía</h2>
<ul>
<li><strong>Gas de protección:</strong> caudal (l/min) × tiempo de arco. A 15 l/min, cada minuto de arco consume 15 litros.</li>
<li><strong>Energía:</strong> intensidad × tensión × tiempo de arco / rendimiento del equipo. Suele ser una parte pequeña del total.</li>
</ul>
<h2>Ejemplo: ángulo a5, MAG, posición PB</h2>
<ol>
<li>Metal depositado: ≈ 0,226 kg/m</li>
<li>Hilo: 0,226 / 0,93 ≈ <strong>0,243 kg/m</strong></li>
<li>Tiempo de arco: 0,226 / 4 kg/h × 60 ≈ <strong>3,4 min/m</strong></li>
<li>Con factor de operación del 30 %: 3,4 / 0,30 ≈ <strong>11,3 min/m</strong></li>
<li>Gas: 15 l/min × 3,4 min ≈ <strong>51 l/m</strong></li>
</ol>
<p>Coste por metro = tiempo × tarifa horaria + hilo × precio + gas × precio. La mano de obra suele multiplicar varias veces el coste de consumibles. Si el mismo cordón se indicara como a6, el metal subiría un 44 % y el tiempo en proporción similar.</p>
<h2>Lo que el cálculo no incluye</h2>
<p>En una pieza real, los tiempos ajenos a la soldadura suelen superar el tiempo de arco: preparación de material, montaje y punteado, utillaje, enderezado, amolado, limpieza, inspección y documentación. En la oferta se tratan como partidas aparte (ver <a href="kaynakli-imalat-fiyati.html">factores que determinan el precio</a>).</p>
<h2>Decisiones que reducen el coste</h2>
<ul>
<li>Dimensionar la soldadura por cálculo, no "por si acaso".</li>
<li>Usar chaflanes en X o U en lugar de V en chapa gruesa.</li>
<li>Diseñar la pieza para soldar en posición plana y horizontal.</li>
<li>Acortar montajes repetitivos con utillajes.</li>
<li>Llevar cordones largos y rectos a procesos de alta deposición como el arco sumergido.</li>
<li>Eliminar amolados y requisitos estéticos innecesarios.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> calculamos las ofertas a partir de metros de cordón, dimensión, posición y proceso, y valoramos aparte los tiempos ajenos a la soldadura. Los puntos de diseño que encarecen la pieza se los enviamos con la oferta como propuestas. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Cómo se calcula el consumo de hilo por metro?', 'Sección del cordón (mm²) × 7,85 da el metal en g/m; se añade el sobreespesor y se divide por el rendimiento del proceso.'],
      ['¿Cuánto hilo consume una soldadura en ángulo a5 por metro?', 'Unos 0,23 kg de metal depositado; con MAG e hilo macizo, aproximadamente 0,24-0,25 kg de hilo.'],
      ['¿Qué es el factor de operación?', 'La relación entre el tiempo con arco encendido y el tiempo total de trabajo del soldador. En soldadura manual suele ser del 20-40 %.'],
      ['¿Cuál es la mayor partida del coste de soldadura?', 'En la mayoría de los casos, la mano de obra. Consumibles y gas suelen ser una fracción pequeña.']
    ],
    cta_h3: 'Un cálculo de costes transparente para su pieza',
    cta_p: 'Envíenos su plano; preparamos una oferta basada en metros de cordón y proceso, con supuestos claramente indicados.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Calcul du coût de soudage : consommation de fil, temps d’arc et coût au mètre',
    meta: 'Comment calculer le coût de soudage : masse de métal déposé, taux de dépôt, temps d’arc, facteur de marche, formules de consommation de gaz et de fil, exemple chiffré pour une soudure d’angle a5 et choix de conception qui réduisent le coût.',
    og: 'Calcul du coût de soudage',
    tag: 'Coût · Calcul',
    h1: 'Calcul du coût de soudage : consommation de fil, temps d’arc et coût au mètre',
    crumb: 'Coût de soudage',
    read: '7 min de lecture',
    body: `
<p>Dans le prix d’une pièce soudée, la main-d’œuvre de soudage est souvent le poste principal. Elle se calcule plutôt qu’elle ne s’estime, à partir de quelques grandeurs : le métal à déposer, le taux de dépôt du procédé et le temps pendant lequel l’arc brûle réellement. Cet article déroule les étapes avec un exemple chiffré.</p>
<h2>1. Masse de métal déposé</h2>
<p>On part de la section du cordon. Pour une soudure d’angle à jambes égales, la section théorique est <strong>A ≈ a²</strong> (mm²). Pour une soudure bout à bout, elle découle du chanfrein (voir notre <a href="kaynak-agzi-hazirligi-iso-9692-1.html">guide de préparation des bords</a>). On ajoute en général 10 à 20 % pour la surépaisseur.</p>
<p><strong>Métal par mètre (g/m) ≈ A (mm²) × 7,85 × (1 + surépaisseur)</strong></p>
<table class="data-table"><thead><tr><th>Soudure d’angle</th><th>Section (mm²)</th><th>Métal (g/m, avec 15 % de surépaisseur)</th></tr></thead><tbody>
<tr><td>a3</td><td>9</td><td>≈ 81</td></tr>
<tr><td>a4</td><td>16</td><td>≈ 144</td></tr>
<tr><td>a5</td><td>25</td><td>≈ 226</td></tr>
<tr><td>a6</td><td>36</td><td>≈ 325</td></tr>
<tr><td>a8</td><td>64</td><td>≈ 578</td></tr>
</tbody></table>
<h2>2. Quantité de produit d’apport</h2>
<p>Tout le fil acheté ne devient pas métal déposé ; une partie se perd en projections, laitier ou mégots. Le rendement dépend du procédé :</p>
<ul>
<li>MAG fil plein : environ 90-95 %</li>
<li>Fil fourré (FCAW) : environ 80-90 %</li>
<li>Électrode enrobée (MMA) : environ 55-65 % (pertes de mégot et de laitier)</li>
<li>Arc submergé : plus de 95 % pour le fil ; le flux se calcule à part</li>
</ul>
<p><strong>Fil nécessaire (kg/m) = métal déposé (kg/m) / rendement</strong></p>
<h2>3. Temps d’arc</h2>
<p>Le taux de dépôt est la masse de métal déposée par heure. En MAG fil plein de 1,2 mm à plat, il est typiquement de 3 à 5 kg/h, nettement moins en montante. L’arc submergé mono-fil atteint 6 à 10 kg/h et plus.</p>
<p><strong>Temps d’arc (min/m) = métal (kg/m) / taux de dépôt (kg/h) × 60</strong></p>
<h2>4. Facteur de marche</h2>
<p>Tout le temps de travail n’est pas du temps d’arc. Retourner les pièces, pointer, piquer le laitier, nettoyer la torche ou mesurer prend aussi du temps. Le rapport entre temps d’arc et temps total est le <strong>facteur de marche</strong>. En soudage manuel, il est souvent de 20 à 40 % ; il est plus élevé en soudage mécanisé et sur des travaux bien outillés.</p>
<p><strong>Temps de main-d’œuvre (min/m) = temps d’arc / facteur de marche</strong></p>
<h2>5. Gaz et énergie</h2>
<ul>
<li><strong>Gaz de protection :</strong> débit (l/min) × temps d’arc. À 15 l/min, chaque minute d’arc consomme 15 litres.</li>
<li><strong>Énergie :</strong> intensité × tension × temps d’arc / rendement du générateur. Généralement une faible part du total.</li>
</ul>
<h2>Exemple : soudure d’angle a5, MAG, position PB</h2>
<ol>
<li>Métal déposé : ≈ 0,226 kg/m</li>
<li>Fil : 0,226 / 0,93 ≈ <strong>0,243 kg/m</strong></li>
<li>Temps d’arc : 0,226 / 4 kg/h × 60 ≈ <strong>3,4 min/m</strong></li>
<li>Avec un facteur de marche de 30 % : 3,4 / 0,30 ≈ <strong>11,3 min/m</strong></li>
<li>Gaz : 15 l/min × 3,4 min ≈ <strong>51 l/m</strong></li>
</ol>
<p>Coût au mètre = temps × taux horaire + fil × prix + gaz × prix. La main-d’œuvre représente généralement plusieurs fois les consommables. Si le même cordon était coté a6, le métal augmenterait de 44 % et le temps dans une proportion voisine.</p>
<h2>Ce que le calcul n’inclut pas</h2>
<p>Sur une pièce réelle, les temps hors soudage dépassent souvent le temps d’arc : préparation matière, assemblage et pointage, mise en place du gabarit, redressage, meulage, nettoyage, contrôle et documentation. Dans une offre, ils sont traités comme des postes distincts (voir <a href="kaynakli-imalat-fiyati.html">ce qui détermine le prix</a>).</p>
<h2>Choix qui réduisent le coût</h2>
<ul>
<li>Dimensionner la soudure par le calcul, pas « par sécurité ».</li>
<li>Préférer des chanfreins en X ou en U au V sur tôles épaisses.</li>
<li>Concevoir la pièce pour un soudage à plat et en corniche.</li>
<li>Réduire les temps d’assemblage répétitifs avec des gabarits.</li>
<li>Confier les longs cordons droits à des procédés à fort taux de dépôt comme l’arc submergé.</li>
<li>Supprimer les meulages et exigences d’aspect inutiles.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous chiffrons à partir du métrage de cordon, de la taille, de la position et du procédé, et évaluons séparément les temps hors soudage. Les points de conception qui renchérissent la pièce vous sont transmis avec l’offre sous forme de suggestions. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Comment calculer la consommation de fil au mètre ?', 'Section du cordon (mm²) × 7,85 donne le métal en g/m ; on ajoute la surépaisseur et on divise par le rendement du procédé.'],
      ['Combien de fil pour une soudure d’angle a5 au mètre ?', 'Environ 0,23 kg de métal déposé ; en MAG fil plein, environ 0,24 à 0,25 kg de fil.'],
      ['Qu’est-ce que le facteur de marche ?', 'Le rapport entre le temps d’arc et le temps de travail total du soudeur. En soudage manuel, souvent 20 à 40 %.'],
      ['Quel est le principal poste de coût en soudage ?', 'Dans la plupart des cas, la main-d’œuvre. Consommables et gaz n’en représentent généralement qu’une petite part.']
    ],
    cta_h3: 'Un calcul de coût transparent pour votre pièce',
    cta_p: 'Envoyez votre plan ; nous préparons une offre fondée sur le métrage de cordon et le procédé, avec des hypothèses explicites.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Calcolo del costo di saldatura: consumo di filo, tempo d’arco e costo al metro',
    meta: 'Come si calcola il costo di saldatura: peso del metallo depositato, tasso di deposito, tempo d’arco, fattore di servizio, formule per consumo di gas e filo, esempio per una saldatura d’angolo a5 e scelte progettuali che riducono il costo.',
    og: 'Calcolo del costo di saldatura',
    tag: 'Costi · Calcolo',
    h1: 'Calcolo del costo di saldatura: consumo di filo, tempo d’arco e costo al metro',
    crumb: 'Costo di saldatura',
    read: '7 min di lettura',
    body: `
<p>Nel prezzo di un pezzo saldato la manodopera di saldatura è spesso la voce più grande. Si può calcolare anziché stimare, con poche grandezze: il metallo da depositare, il tasso di deposito del processo e il tempo in cui l’arco è effettivamente acceso. Questo articolo illustra i passaggi con un esempio numerico.</p>
<h2>1. Peso del metallo depositato</h2>
<p>Si parte dalla sezione del cordone. In una saldatura d’angolo a lati uguali la sezione teorica è <strong>A ≈ a²</strong> (mm²). Nelle saldature testa a testa deriva dalla geometria del cianfrino (vedi la nostra <a href="kaynak-agzi-hazirligi-iso-9692-1.html">guida alla preparazione dei lembi</a>). Di solito si aggiunge un 10-20 % per il sovrametallo.</p>
<p><strong>Metallo per metro (g/m) ≈ A (mm²) × 7,85 × (1 + sovrametallo)</strong></p>
<table class="data-table"><thead><tr><th>Saldatura d’angolo</th><th>Sezione (mm²)</th><th>Metallo (g/m, con 15 % di sovrametallo)</th></tr></thead><tbody>
<tr><td>a3</td><td>9</td><td>≈ 81</td></tr>
<tr><td>a4</td><td>16</td><td>≈ 144</td></tr>
<tr><td>a5</td><td>25</td><td>≈ 226</td></tr>
<tr><td>a6</td><td>36</td><td>≈ 325</td></tr>
<tr><td>a8</td><td>64</td><td>≈ 578</td></tr>
</tbody></table>
<h2>2. Quantità di consumabile</h2>
<p>Non tutto il filo acquistato diventa metallo depositato; una parte si perde in spruzzi, scoria o mozziconi. Il rendimento dipende dal processo:</p>
<ul>
<li>MAG filo pieno: circa 90-95 %</li>
<li>Filo animato (FCAW): circa 80-90 %</li>
<li>Elettrodo rivestito (MMA): circa 55-65 % (perdite di mozzicone e scoria)</li>
<li>Arco sommerso: oltre il 95 % per il filo; il flusso si calcola a parte</li>
</ul>
<p><strong>Filo necessario (kg/m) = metallo depositato (kg/m) / rendimento</strong></p>
<h2>3. Tempo d’arco</h2>
<p>Il tasso di deposito è il metallo depositato per ora. In MAG con filo pieno da 1,2 mm in piano è tipicamente 3-5 kg/h, molto meno in verticale. L’arco sommerso a filo singolo arriva a 6-10 kg/h e oltre.</p>
<p><strong>Tempo d’arco (min/m) = metallo (kg/m) / tasso di deposito (kg/h) × 60</strong></p>
<h2>4. Fattore di servizio</h2>
<p>Non tutto il tempo di lavoro è tempo d’arco. Ribaltare i pezzi, puntare, rimuovere la scoria, pulire la torcia e misurare richiedono tempo. Il rapporto tra tempo ad arco acceso e tempo totale è il <strong>fattore di servizio</strong>. Nella saldatura manuale è spesso del 20-40 %; è più alto nella saldatura meccanizzata e nei lavori ben attrezzati.</p>
<p><strong>Tempo di manodopera (min/m) = tempo d’arco / fattore di servizio</strong></p>
<h2>5. Gas ed energia</h2>
<ul>
<li><strong>Gas di protezione:</strong> portata (l/min) × tempo d’arco. A 15 l/min ogni minuto d’arco consuma 15 litri.</li>
<li><strong>Energia:</strong> corrente × tensione × tempo d’arco / rendimento del generatore. Di solito una quota piccola.</li>
</ul>
<h2>Esempio: angolo a5, MAG, posizione PB</h2>
<ol>
<li>Metallo depositato: ≈ 0,226 kg/m</li>
<li>Filo: 0,226 / 0,93 ≈ <strong>0,243 kg/m</strong></li>
<li>Tempo d’arco: 0,226 / 4 kg/h × 60 ≈ <strong>3,4 min/m</strong></li>
<li>Con fattore di servizio del 30 %: 3,4 / 0,30 ≈ <strong>11,3 min/m</strong></li>
<li>Gas: 15 l/min × 3,4 min ≈ <strong>51 l/m</strong></li>
</ol>
<p>Costo al metro = tempo × tariffa oraria + filo × prezzo + gas × prezzo. La manodopera vale di solito più volte i consumabili. Se lo stesso cordone fosse indicato a6, il metallo aumenterebbe del 44 % e il tempo in proporzione simile.</p>
<h2>Cosa il calcolo non comprende</h2>
<p>Su un pezzo reale i tempi non di saldatura superano spesso il tempo d’arco: preparazione del materiale, assemblaggio e puntatura, attrezzaggio, raddrizzatura, molatura, pulizia, controllo e documentazione. In offerta si trattano come voci separate (vedi <a href="kaynakli-imalat-fiyati.html">i fattori che determinano il prezzo</a>).</p>
<h2>Scelte che riducono il costo</h2>
<ul>
<li>Dimensionare la saldatura con il calcolo, non "per sicurezza".</li>
<li>Su lamiere spesse usare cianfrini a X o U anziché a V.</li>
<li>Progettare il pezzo per saldare in piano e in frontale.</li>
<li>Ridurre i tempi di montaggio ripetitivi con attrezzature.</li>
<li>Portare i cordoni lunghi e rettilinei su processi ad alto deposito come l’arco sommerso.</li>
<li>Eliminare molature e requisiti estetici non necessari.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> calcoliamo le offerte in base a metri di cordone, dimensione, posizione e processo, e valutiamo a parte i tempi non di saldatura. I punti progettuali che fanno salire il costo vi vengono inviati con l’offerta come proposte. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Come si calcola il consumo di filo al metro?', 'Sezione del cordone (mm²) × 7,85 dà il metallo in g/m; si aggiunge il sovrametallo e si divide per il rendimento del processo.'],
      ['Quanto filo consuma una saldatura d’angolo a5 al metro?', 'Circa 0,23 kg di metallo depositato; in MAG con filo pieno, circa 0,24-0,25 kg di filo.'],
      ['Cos’è il fattore di servizio?', 'Il rapporto tra il tempo ad arco acceso e il tempo di lavoro totale del saldatore. Nella saldatura manuale spesso 20-40 %.'],
      ['Qual è la voce più grande del costo di saldatura?', 'Nella maggior parte dei casi la manodopera. Consumabili e gas ne sono di solito una piccola frazione.']
    ],
    cta_h3: 'Un calcolo dei costi trasparente per il vostro pezzo',
    cta_p: 'Inviateci il disegno; prepariamo un’offerta basata su metri di cordone e processo, con ipotesi dichiarate.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Laskosten berekenen: draadverbruik, boogtijd en kosten per meter',
    meta: 'Hoe bereken je laskosten? Lasmetaalgewicht, neersmeltsnelheid, boogtijd, inschakelduur, formules voor gas- en draadverbruik, rekenvoorbeeld voor een a5-hoeklas en ontwerpkeuzes die de kosten verlagen.',
    og: 'Laskosten berekenen',
    tag: 'Kosten · Berekening',
    h1: 'Laskosten berekenen: draadverbruik, boogtijd en kosten per meter',
    crumb: 'Laskosten',
    read: '7 min lezen',
    body: `
<p>In de prijs van een gelast onderdeel is het laswerk vaak de grootste post. Die kun je berekenen in plaats van schatten, met een paar eenvoudige grootheden: het neer te leggen lasmetaal, de neersmeltsnelheid van het proces en hoe lang de boog echt brandt. Dit artikel loopt de stappen door met een rekenvoorbeeld.</p>
<h2>1. Lasmetaalgewicht</h2>
<p>Begin met de doorsnede van de las. Bij een gelijkbenige hoeklas is de theoretische doorsnede <strong>A ≈ a²</strong> (mm²). Bij stompe lassen volgt die uit de naadgeometrie (zie onze <a href="kaynak-agzi-hazirligi-iso-9692-1.html">gids over naadvoorbereiding</a>). Meestal wordt 10-20 % opgeteld voor de lasverhoging.</p>
<p><strong>Lasmetaal per meter (g/m) ≈ A (mm²) × 7,85 × (1 + toeslag verhoging)</strong></p>
<table class="data-table"><thead><tr><th>Hoeklas</th><th>Doorsnede (mm²)</th><th>Lasmetaal (g/m, met 15 % verhoging)</th></tr></thead><tbody>
<tr><td>a3</td><td>9</td><td>≈ 81</td></tr>
<tr><td>a4</td><td>16</td><td>≈ 144</td></tr>
<tr><td>a5</td><td>25</td><td>≈ 226</td></tr>
<tr><td>a6</td><td>36</td><td>≈ 325</td></tr>
<tr><td>a8</td><td>64</td><td>≈ 578</td></tr>
</tbody></table>
<h2>2. Hoeveelheid toevoegmateriaal</h2>
<p>Niet alle gekochte draad wordt lasmetaal; een deel gaat verloren als spatten, slak of reststukken. Het rendement hangt af van het proces:</p>
<ul>
<li>MAG met massieve draad: ongeveer 90-95 %</li>
<li>Gevulde draad (FCAW): ongeveer 80-90 %</li>
<li>Beklede elektrode (MMA): ongeveer 55-65 % (verlies door peuken en slak)</li>
<li>Onder poeder lassen: boven 95 % voor de draad; poeder wordt apart berekend</li>
</ul>
<p><strong>Benodigde draad (kg/m) = lasmetaal (kg/m) / rendement</strong></p>
<h2>3. Boogtijd</h2>
<p>De neersmeltsnelheid is het lasmetaal dat een proces per uur neerlegt. Bij MAG met 1,2 mm massieve draad onder de hand typisch 3-5 kg/h, verticaal duidelijk minder. OP-lassen met één draad haalt 6-10 kg/h en meer.</p>
<p><strong>Boogtijd (min/m) = lasmetaal (kg/m) / neersmeltsnelheid (kg/h) × 60</strong></p>
<h2>4. Inschakelduur van de lasser</h2>
<p>Niet alle werktijd is boogtijd. Draaien, hechten, slak verwijderen, toorts reinigen en meten kosten ook tijd. De verhouding tussen boogtijd en totale tijd heet de <strong>inschakelduur</strong> of boogtijdfactor. Bij handlassen ligt die vaak op 20-40 %, bij gemechaniseerd lassen en goed opgespannen werk hoger.</p>
<p><strong>Lastijd (min/m) = boogtijd / inschakelduur</strong></p>
<h2>5. Gas en energie</h2>
<ul>
<li><strong>Beschermgas:</strong> debiet (l/min) × boogtijd. Bij 15 l/min kost elke boogminuut 15 liter.</li>
<li><strong>Energie:</strong> stroom × spanning × boogtijd / rendement van de stroombron. Meestal een klein deel van het totaal.</li>
</ul>
<h2>Rekenvoorbeeld: a5-hoeklas, MAG, positie PB</h2>
<ol>
<li>Lasmetaal: ≈ 0,226 kg/m</li>
<li>Draad: 0,226 / 0,93 ≈ <strong>0,243 kg/m</strong></li>
<li>Boogtijd: 0,226 / 4 kg/h × 60 ≈ <strong>3,4 min/m</strong></li>
<li>Met 30 % inschakelduur: 3,4 / 0,30 ≈ <strong>11,3 min/m</strong></li>
<li>Gas: 15 l/min × 3,4 min ≈ <strong>51 l/m</strong></li>
</ol>
<p>Kosten per meter = lastijd × uurtarief + draad × draadprijs + gas × gasprijs. Arbeid is meestal een veelvoud van het toevoegmateriaal. Was dezelfde las als a6 opgegeven, dan steeg het lasmetaal met 44 % en de tijd in vergelijkbare mate.</p>
<h2>Wat de berekening niet bevat</h2>
<p>Bij een echt onderdeel is de niet-lastijd vaak groter dan de boogtijd: materiaalvoorbereiding, samenstellen en hechten, mal opbouwen, richten, slijpen, reinigen, inspectie en documentatie. In een offerte worden die als aparte posten behandeld (zie <a href="kaynakli-imalat-fiyati.html">wat de prijs van laswerk bepaalt</a>).</p>
<h2>Keuzes die de kosten verlagen</h2>
<ul>
<li>Lasmaat kiezen op basis van berekening, niet "voor de zekerheid".</li>
<li>Bij dikke plaat X- of U-naden in plaats van V.</li>
<li>Het onderdeel zo ontwerpen dat onder de hand en horizontaal kan worden gelast.</li>
<li>Terugkerende montagetijd verkorten met mallen.</li>
<li>Lange rechte naden naar processen met hoge neersmeltsnelheid zoals OP-lassen brengen.</li>
<li>Onnodige slijp- en uiterlijkeisen schrappen.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> we berekenen offertes op basis van laslengte, lasmaat, positie en proces, en beoordelen de niet-lastijd apart. Kostenverhogende ontwerppunten sturen we met de offerte mee als voorstel. <a href="../cizime-gore-imalat.html">Productie op tekening →</a></p></div>
`,
    faq: [
      ['Hoe bereken je het draadverbruik per meter?', 'Lasdoorsnede (mm²) × 7,85 geeft het lasmetaal in g/m; tel de verhoging op en deel door het rendement van het proces.'],
      ['Hoeveel draad gebruikt een a5-hoeklas per meter?', 'Ongeveer 0,23 kg lasmetaal; met MAG en massieve draad zo’n 0,24-0,25 kg draad.'],
      ['Wat is de inschakelduur?', 'De verhouding tussen de tijd dat de boog brandt en de totale werktijd van de lasser. Bij handlassen vaak 20-40 %.'],
      ['Wat is de grootste kostenpost bij lassen?', 'Meestal de arbeidstijd. Toevoegmateriaal en gas zijn doorgaans een klein deel daarvan.']
    ],
    cta_h3: 'Een transparante kostenberekening voor uw onderdeel',
    cta_p: 'Stuur uw tekening; we maken een offerte op basis van laslengte en proces, met duidelijk vermelde aannames.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Beregning av sveisekostnad: trådforbruk, buetid og kostnad per meter',
    meta: 'Hvordan beregne sveisekostnad: sveisemetallvekt, avsettingshastighet, buetid, buetidsfaktor, formler for gass- og trådforbruk, regneeksempel for en a5-kilsveis og konstruksjonsvalg som senker kostnaden.',
    og: 'Beregning av sveisekostnad',
    tag: 'Kostnad · Beregning',
    h1: 'Beregning av sveisekostnad: trådforbruk, buetid og kostnad per meter',
    crumb: 'Sveisekostnad',
    read: '7 min lesing',
    body: `
<p>I prisen på en sveiset del er sveisearbeidet ofte den største posten. Det kan beregnes i stedet for å anslås, med noen få størrelser: sveisemetallet som skal legges, prosessens avsettingshastighet og hvor lenge buen faktisk brenner. Denne artikkelen går gjennom trinnene med et regneeksempel.</p>
<h2>1. Sveisemetallvekt</h2>
<p>Start med sveisens tverrsnitt. For en kilsveis med like bein er det teoretiske arealet <strong>A ≈ a²</strong> (mm²). For buttsveiser følger arealet av fugegeometrien (se vår <a href="kaynak-agzi-hazirligi-iso-9692-1.html">veiledning om fugeforberedelse</a>). Vanligvis legges det til 10-20 % for sveiseoverhøyde.</p>
<p><strong>Sveisemetall per meter (g/m) ≈ A (mm²) × 7,85 × (1 + tillegg for overhøyde)</strong></p>
<table class="data-table"><thead><tr><th>Kilsveis</th><th>Areal (mm²)</th><th>Sveisemetall (g/m, med 15 % overhøyde)</th></tr></thead><tbody>
<tr><td>a3</td><td>9</td><td>≈ 81</td></tr>
<tr><td>a4</td><td>16</td><td>≈ 144</td></tr>
<tr><td>a5</td><td>25</td><td>≈ 226</td></tr>
<tr><td>a6</td><td>36</td><td>≈ 325</td></tr>
<tr><td>a8</td><td>64</td><td>≈ 578</td></tr>
</tbody></table>
<h2>2. Mengde tilsettmateriale</h2>
<p>Ikke all innkjøpt tråd blir sveisemetall; noe går tapt som sprut, slagg eller stumper. Utbyttet avhenger av prosessen:</p>
<ul>
<li>MAG med massiv tråd: ca. 90-95 %</li>
<li>Rørtråd (FCAW): ca. 80-90 %</li>
<li>Dekket elektrode (MMA): ca. 55-65 % (tap av stumper og slagg)</li>
<li>Pulverbue: over 95 % for tråden; pulver beregnes for seg</li>
</ul>
<p><strong>Nødvendig tråd (kg/m) = sveisemetall (kg/m) / utbytte</strong></p>
<h2>3. Buetid</h2>
<p>Avsettingshastigheten er sveisemetallet prosessen legger per time. Med MAG og 1,2 mm massiv tråd i horisontal posisjon typisk 3-5 kg/h, tydelig lavere i vertikal. Pulverbue med én tråd når 6-10 kg/h og mer.</p>
<p><strong>Buetid (min/m) = sveisemetall (kg/m) / avsettingshastighet (kg/h) × 60</strong></p>
<h2>4. Buetidsfaktor</h2>
<p>Ikke all arbeidstid er buetid. Snu deler, heftsveise, fjerne slagg, rengjøre brenner og måle tar også tid. Forholdet mellom buetid og total tid kalles <strong>buetidsfaktor</strong>. Ved manuell sveising er den ofte 20-40 %; ved mekanisert sveising og godt fikserte jobber høyere.</p>
<p><strong>Sveisetid (min/m) = buetid / buetidsfaktor</strong></p>
<h2>5. Gass og energi</h2>
<ul>
<li><strong>Beskyttelsesgass:</strong> gassmengde (l/min) × buetid. Ved 15 l/min bruker hvert buetidsminutt 15 liter.</li>
<li><strong>Energi:</strong> strøm × spenning × buetid / virkningsgrad. Vanligvis en liten andel av totalen.</li>
</ul>
<h2>Regneeksempel: a5-kilsveis, MAG, posisjon PB</h2>
<ol>
<li>Sveisemetall: ≈ 0,226 kg/m</li>
<li>Tråd: 0,226 / 0,93 ≈ <strong>0,243 kg/m</strong></li>
<li>Buetid: 0,226 / 4 kg/h × 60 ≈ <strong>3,4 min/m</strong></li>
<li>Med 30 % buetidsfaktor: 3,4 / 0,30 ≈ <strong>11,3 min/m</strong></li>
<li>Gass: 15 l/min × 3,4 min ≈ <strong>51 l/m</strong></li>
</ol>
<p>Kostnad per meter = sveisetid × timesats + tråd × trådpris + gass × gasspris. Arbeidet utgjør som regel flere ganger tilsettmaterialet. Hadde samme sveis vært angitt som a6, ville sveisemetallet økt med 44 % og tiden omtrent tilsvarende.</p>
<h2>Det beregningen ikke tar med</h2>
<p>På en reell del er tid utenom sveising ofte større enn buetiden: materialforberedelse, montering og heftsveising, oppsett av fikstur, retting, sliping, rengjøring, kontroll og dokumentasjon. I et tilbud behandles disse som egne poster (se <a href="kaynakli-imalat-fiyati.html">hva som bestemmer prisen på sveiset produksjon</a>).</p>
<h2>Valg som senker kostnaden</h2>
<ul>
<li>Velg sveisemål etter beregning, ikke «for sikkerhets skyld».</li>
<li>Bruk X- eller U-fuge i stedet for V på tykk plate.</li>
<li>Konstruer delen slik at den kan sveises i horisontal og vannrett posisjon.</li>
<li>Kort ned gjentakende montering med fiksturer.</li>
<li>Flytt lange, rette sømmer til prosesser med høy avsetting som pulverbue.</li>
<li>Fjern unødvendige krav til sliping og utseende.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> vi beregner tilbud ut fra sveiselengde, sveisemål, posisjon og prosess, og vurderer tid utenom sveising separat. Konstruksjonsforhold som driver kostnaden opp, sender vi med tilbudet som forslag. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hvordan beregnes trådforbruk per meter?', 'Sveisetverrsnitt (mm²) × 7,85 gir sveisemetall i g/m; legg til overhøyde og del på prosessens utbytte.'],
      ['Hvor mye tråd bruker en a5-kilsveis per meter?', 'Omtrent 0,23 kg sveisemetall; med MAG og massiv tråd rundt 0,24-0,25 kg tråd.'],
      ['Hva er buetidsfaktor?', 'Forholdet mellom tiden buen brenner og sveiserens totale arbeidstid. Ved manuell sveising ofte 20-40 %.'],
      ['Hva er den største kostnadsposten ved sveising?', 'I de fleste tilfeller arbeidstiden. Tilsettmateriale og gass er vanligvis en liten del av den.']
    ],
    cta_h3: 'En gjennomsiktig kostnadsberegning for delen din',
    cta_p: 'Send tegningen; vi lager et tilbud basert på sveiselengde og prosess, med tydelig angitte forutsetninger.',
    cta_btn: 'Be om tilbud →'
  }
};
