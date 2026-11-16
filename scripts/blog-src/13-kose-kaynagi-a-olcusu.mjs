export default {
  order: 13,
  slug: 'kose-kaynagi-a-olcusu',
  key: 'p13_fillet',
  date: '2026-11-16',
  keywords: 'köşe kaynağı a ölçüsü, kaynak a ölçüsü nedir, a ölçüsü z ölçüsü, boğaz kalınlığı, bacak boyu, köşe kaynak hesabı, fillet weld throat thickness, Kehlnahtdicke a-Maß',
  related: ['kaynak-sembolizasyonu', 'iso-5817-kalite-seviyeleri', 'kaynak-distorsiyonu', 'wps-nedir'],
  tr: {
    title: 'Köşe Kaynağında a Ölçüsü: Boğaz Kalınlığı, z Ölçüsü ve Doğru Seçim',
    meta: 'Köşe kaynağında a ölçüsü nedir, z ölçüsüyle ilişkisi nasıl hesaplanır? Çizimde gösterim, minimum ve maksimum değerler, ISO 5817 toleransları, ölçüm ve gereğinden büyük kaynağın maliyeti.',
    og: 'Köşe Kaynağında a Ölçüsü',
    tag: 'Tasarım · Hesap',
    h1: 'Köşe Kaynağında a Ölçüsü: Boğaz Kalınlığı, z Ölçüsü ve Doğru Seçim',
    crumb: 'Köşe Kaynağı a Ölçüsü',
    read: '6 dk okuma',
    body: `
<p>Kaynaklı parçaların büyük kısmında dikişlerin çoğu köşe kaynağıdır. Teknik resimde yanında yazan küçük bir değer, örneğin <strong>a5</strong>, hem parçanın taşıyacağı yükü hem de kaynak süresini ve maliyeti belirler. Bu yazıda a ölçüsünün ne olduğunu, z ölçüsüyle farkını, nasıl seçildiğini ve atölyede nasıl kontrol edildiğini anlatıyoruz.</p>
<h2>a Ölçüsü ve z Ölçüsü</h2>
<ul>
<li><strong>a ölçüsü (boğaz kalınlığı):</strong> Köşe kaynağı kesitine çizilebilen en büyük ikizkenar üçgenin, kök noktasından hipotenüse olan yüksekliğidir. Mukavemet hesapları bu değerle yapılır.</li>
<li><strong>z ölçüsü (bacak boyu):</strong> Kaynağın parça yüzeyindeki kenar uzunluğudur. Atölyede doğrudan görülen ve ölçülen değer budur.</li>
</ul>
<p>90° birleşen ve eşit bacaklı bir köşe kaynağında ilişki basittir: <strong>a ≈ 0,7 × z</strong>, yani <strong>z ≈ 1,4 × a</strong>.</p>
<table class="data-table"><thead><tr><th>a (mm)</th><th>z (mm, yaklaşık)</th><th>Tipik kullanım</th></tr></thead><tbody>
<tr><td>3</td><td>4,2</td><td>İnce sac, düşük yük, bağlantı dikişleri</td></tr>
<tr><td>4</td><td>5,7</td><td>Genel imalat, 6-8 mm saclar</td></tr>
<tr><td>5</td><td>7,1</td><td>Şasi ve konstrüksiyon bağlantıları</td></tr>
<tr><td>6</td><td>8,5</td><td>10-12 mm ve üstü sacların yük taşıyan birleşimleri</td></tr>
<tr><td>8</td><td>11,3</td><td>Ağır yük; çoğu zaman çok pasolu</td></tr>
</tbody></table>
<h2>Çizimde Nasıl Gösterilir?</h2>
<p>ISO 2553'e göre köşe kaynağı sembolünün soluna ölçü yazılır. "a5" boğaz kalınlığını, "z7" bacak boyunu ifade eder. Harf yazılmamışsa birçok Avrupa çiziminde değer a ölçüsü kabul edilir, ancak bu bir varsayımdır ve teklif aşamasında netleştirilmelidir. Sembolün sağına dikiş uzunluğu, aralıklı kaynakta da adım yazılır; örneğin <strong>a4 3×50 (150)</strong>. Ayrıntılar için <a href="kaynak-sembolizasyonu.html">kaynak sembolleri rehberimize</a> bakabilirsiniz.</p>
<h2>a Ölçüsü Nasıl Seçilir?</h2>
<ol>
<li><strong>Yük hesabı:</strong> Taşıyıcı bağlantılarda a ölçüsü, EN 1993-1-8 gibi tasarım standartlarına göre hesaplanır. Basitleştirilmiş yöntemde kaynağın birim uzunluk başına taşıyabileceği kuvvet, a ölçüsüyle doğru orantılıdır.</li>
<li><strong>Alt sınır:</strong> EN 1993-1-8 taşıyıcı köşe kaynakları için a ölçüsünün 3 mm'den küçük olmamasını ister.</li>
<li><strong>Sac kalınlığıyla uyum:</strong> Pratik bir kural olarak a ölçüsü, birleşen ince parçanın kalınlığının yaklaşık 0,7 katını aşmamalıdır. Daha büyük kaynak çoğunlukla yük kapasitesi kazandırmaz, sadece ısı girdisini ve çarpılmayı artırır.</li>
<li><strong>Tek paso sınırı:</strong> MAG yönteminde a5-a6 civarına kadar tek pasoda çıkılabilir. Daha büyük ölçüler çok pasolu kaynak gerektirir ve süre hızla artar.</li>
</ol>
<h2>Büyük Kaynak Neden Daha Pahalı?</h2>
<p>Köşe kaynağında kaynak metali hacmi a ölçüsünün karesiyle artar. a5 yerine a7 istendiğinde kaynak metali yaklaşık iki katına (49/25 ≈ 1,96) çıkar; buna ek pasolar, daha fazla ısı girdisi ve <a href="kaynak-distorsiyonu.html">distorsiyon</a> düzeltme süresi eklenir. "Ne olur ne olmaz" diye büyütülen kaynak, parçayı güçlendirmeden maliyeti artırır.</p>
<h2>Derin Nüfuziyet</h2>
<p>Tozaltı (SAW) gibi yüksek nüfuziyetli yöntemlerde kaynak kökün ötesine işler. EN 1993-1-8, bu ek nüfuziyetin hesaba katılmasına ancak bir prosedür testiyle kanıtlanması şartıyla izin verir. Bu durumda yüzeyde daha küçük görünen bir kaynak, hesapta aynı kapasiteyi sağlayabilir.</p>
<h2>ISO 5817'de a Ölçüsü Toleransları</h2>
<p>ISO 5817, köşe kaynağında hem eksik hem fazla boğaz kalınlığını sınırlar:</p>
<table class="data-table"><thead><tr><th>Kusur</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody>
<tr><td>Eksik boğaz kalınlığı (5213)</td><td>İzin verilmez</td><td>h ≤ 0,3 mm + 0,1a, en fazla 1 mm (kısa kusur)</td><td>h ≤ 0,3 mm + 0,1a, en fazla 2 mm (kısa kusur)</td></tr>
<tr><td>Fazla boğaz kalınlığı (5214)</td><td>h ≤ 1 mm + 0,15a, en fazla 3 mm</td><td>h ≤ 1 mm + 0,2a, en fazla 4 mm</td><td>h ≤ 1 mm + 0,3a, en fazla 5 mm</td></tr>
</tbody></table>
<p>Yani B seviyesinde a5 istenen bir dikiş yerel olarak bile a5'in altına düşemez. Kalite seviyelerinin tamamı için <a href="iso-5817-kalite-seviyeleri.html">ISO 5817 rehberimize</a> bakın.</p>
<h2>Atölyede Nasıl Ölçülür?</h2>
<p>a ölçüsü, köşe kaynak mastarı (fillet gauge) veya çok fonksiyonlu kaynak mastarıyla gözle muayene sırasında ölçülür. Mastar, iki parça yüzeyine dayanır ve kaynak yüzeyine kadar olan mesafeyi gösterir. Dışbükey kaynakta ölçülen değer gerçek boğaz kalınlığını verirken, içbükey kaynakta yüzey profili belirleyicidir; bu yüzden içbükey dikişlerde ölçüm daha dikkatli yapılmalıdır. Kritik bağlantılarda numune kesit alınarak makro inceleme yapılabilir.</p>
<h2>Teklif Öncesi Kontrol Listesi</h2>
<ol>
<li>Çizimde a mı z mi yazdığı açık mı?</li>
<li>a ölçüsü, ince parçanın kalınlığıyla uyumlu mu?</li>
<li>Aralıklı kaynak yeterli olur mu, sürekli kaynak gerçekten gerekli mi?</li>
<li>İstenen kalite seviyesi (B, C, D) belirtilmiş mi?</li>
</ol>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Teklif aşamasında çizimdeki kaynak ölçülerini sac kalınlıklarıyla birlikte gözden geçiririz; gereğinden büyük veya belirsiz ölçüleri size sorarız. Üretimde a ölçüsü, ISO 17637'ye göre yaptığımız gözle muayenede mastarla kontrol edilir ve rapora işlenir. <a href="../cizime-gore-imalat.html">Çizime göre imalat hizmetimiz →</a></p></div>
`,
    faq: [
      ['a5 köşe kaynağının bacak boyu kaç mm?', 'Eşit bacaklı ve 90° birleşen bir köşe kaynağında z ≈ 1,4 × a olduğundan a5 için bacak boyu yaklaşık 7 mm olur.'],
      ['a ölçüsü ile z ölçüsü arasındaki fark nedir?', 'a ölçüsü kaynak kesitindeki boğaz kalınlığıdır ve hesapta kullanılır. z ölçüsü kaynağın parça yüzeyindeki bacak boyudur ve atölyede doğrudan görülür.'],
      ['Köşe kaynağında minimum a ölçüsü nedir?', 'EN 1993-1-8 taşıyıcı köşe kaynaklarında a ölçüsünün en az 3 mm olmasını ister. Taşıyıcı olmayan dikişlerde müşteri şartnamesi belirleyicidir.'],
      ['Kaynağı büyütmek parçayı her zaman güçlendirir mi?', 'Hayır. Belirli bir noktadan sonra zayıf halka sac olur; büyük kaynak yalnızca ısı girdisini, çarpılmayı ve maliyeti artırır.']
    ],
    cta_h3: 'Çiziminizdeki kaynak ölçülerini birlikte gözden geçirelim',
    cta_p: 'Çiziminizi gönderin; kaynak ölçülerini sac kalınlıklarıyla birlikte değerlendirip teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Fillet Weld Throat Thickness (a): a vs z, Sizing and Tolerances',
    meta: 'What is the a dimension of a fillet weld and how does it relate to leg length z? Drawing notation, minimum and maximum sizes, ISO 5817 tolerances, measurement and the cost of oversized welds.',
    og: 'Fillet Weld Throat Thickness (a)',
    tag: 'Design · Calculation',
    h1: 'Fillet Weld Throat Thickness: a vs z, Sizing and Tolerances',
    crumb: 'Fillet Weld a Dimension',
    read: '6 min read',
    body: `
<p>Most welds on a fabricated part are fillet welds. A small value next to the symbol on the drawing, such as <strong>a5</strong>, decides both the load the joint carries and the welding time and cost. This article explains what the a dimension is, how it differs from z, how it is chosen and how it is checked in the shop.</p>
<h2>a Dimension and z Dimension</h2>
<ul>
<li><strong>a (throat thickness):</strong> the height, from the root to the hypotenuse, of the largest isosceles triangle that fits in the weld cross-section. Strength calculations use this value.</li>
<li><strong>z (leg length):</strong> the length of the weld edge on the part surface. This is what the shop sees and measures directly.</li>
</ul>
<p>For an equal-leg fillet weld on a 90° joint: <strong>a ≈ 0.7 × z</strong>, so <strong>z ≈ 1.4 × a</strong>.</p>
<table class="data-table"><thead><tr><th>a (mm)</th><th>z (mm, approx.)</th><th>Typical use</th></tr></thead><tbody>
<tr><td>3</td><td>4.2</td><td>Thin sheet, low load, tack-type seams</td></tr>
<tr><td>4</td><td>5.7</td><td>General fabrication, 6-8 mm plate</td></tr>
<tr><td>5</td><td>7.1</td><td>Chassis and structural connections</td></tr>
<tr><td>6</td><td>8.5</td><td>Load-bearing joints in 10-12 mm plate and up</td></tr>
<tr><td>8</td><td>11.3</td><td>Heavy load; usually multi-run</td></tr>
</tbody></table>
<h2>How It Appears on the Drawing</h2>
<p>Under ISO 2553 the size is written to the left of the fillet symbol. "a5" means throat thickness, "z7" means leg length. If no letter is given, many European drawings imply the a dimension, but that is an assumption and should be clarified at quotation. Weld length, and pitch for intermittent welds, go to the right, e.g. <strong>a4 3×50 (150)</strong>. See our <a href="kaynak-sembolizasyonu.html">weld symbols guide</a> for more.</p>
<h2>How Is a Chosen?</h2>
<ol>
<li><strong>Load calculation:</strong> for structural joints, a is calculated to design codes such as EN 1993-1-8. In the simplified method, the force a weld can carry per unit length is proportional to a.</li>
<li><strong>Lower limit:</strong> EN 1993-1-8 requires load-bearing fillet welds to have a throat of at least 3 mm.</li>
<li><strong>Match to plate thickness:</strong> as a practical rule, a should not exceed about 0.7 times the thinner part. A larger weld usually adds no capacity, only heat input and distortion.</li>
<li><strong>Single-run limit:</strong> with MAG, around a5-a6 can be achieved in one run. Larger sizes need multi-run welding and time rises quickly.</li>
</ol>
<h2>Why Bigger Welds Cost More</h2>
<p>Weld metal volume in a fillet weld rises with the square of a. Going from a5 to a7 roughly doubles the weld metal (49/25 ≈ 1.96), plus extra runs, more heat input and more time spent correcting <a href="kaynak-distorsiyonu.html">distortion</a>. A weld enlarged "just in case" adds cost without making the part stronger.</p>
<h2>Deep Penetration</h2>
<p>High-penetration processes such as submerged arc welding fuse beyond the root. EN 1993-1-8 allows this extra penetration to be counted only if it is demonstrated by a procedure test. A weld that looks smaller on the surface can then provide the same calculated capacity.</p>
<h2>ISO 5817 Tolerances on a</h2>
<p>ISO 5817 limits both insufficient and excessive throat thickness on fillet welds:</p>
<table class="data-table"><thead><tr><th>Imperfection</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody>
<tr><td>Insufficient throat (5213)</td><td>Not permitted</td><td>h ≤ 0.3 mm + 0.1a, max 1 mm (short imperfection)</td><td>h ≤ 0.3 mm + 0.1a, max 2 mm (short imperfection)</td></tr>
<tr><td>Excessive throat (5214)</td><td>h ≤ 1 mm + 0.15a, max 3 mm</td><td>h ≤ 1 mm + 0.2a, max 4 mm</td><td>h ≤ 1 mm + 0.3a, max 5 mm</td></tr>
</tbody></table>
<p>So at level B, a weld specified as a5 may not drop below a5 even locally. See our <a href="iso-5817-kalite-seviyeleri.html">ISO 5817 guide</a> for all quality levels.</p>
<h2>How It Is Measured</h2>
<p>The a dimension is measured during visual inspection with a fillet weld gauge or multi-purpose weld gauge resting on both part surfaces. On a convex weld the reading gives the real throat; on a concave weld the surface profile governs, so measurement needs more care. For critical joints, a macro section can be taken from a sample.</p>
<h2>Pre-Quotation Checklist</h2>
<ol>
<li>Does the drawing clearly state a or z?</li>
<li>Is a consistent with the thinner part's thickness?</li>
<li>Would an intermittent weld do, or is a continuous weld really needed?</li>
<li>Is the required quality level (B, C, D) stated?</li>
</ol>
<div class="callout"><p><strong>At ArmaWeld:</strong> at quotation we review the weld sizes on the drawing against plate thicknesses and ask you about oversized or unclear sizes. In production, the a dimension is checked with a gauge during our ISO 17637 visual inspection and recorded in the report. <a href="../cizime-gore-imalat.html">Our build-to-print fabrication →</a></p></div>
`,
    faq: [
      ['What is the leg length of an a5 fillet weld?', 'For an equal-leg fillet weld on a 90° joint, z ≈ 1.4 × a, so an a5 weld has a leg length of about 7 mm.'],
      ['What is the difference between a and z?', 'a is the throat thickness in the weld cross-section, used in calculations. z is the leg length on the part surface, seen directly in the shop.'],
      ['What is the minimum fillet weld throat?', 'EN 1993-1-8 requires load-bearing fillet welds to have a throat of at least 3 mm. For non-structural seams, the customer specification governs.'],
      ['Does a larger weld always make the part stronger?', 'No. Beyond a certain point the plate becomes the weak link; a bigger weld only adds heat input, distortion and cost.']
    ],
    cta_h3: 'Let us review the weld sizes on your drawing',
    cta_p: 'Send your drawing; we will assess the weld sizes against plate thicknesses and prepare a quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'a-Maß der Kehlnaht: Nahtdicke, z-Maß und richtige Auslegung',
    meta: 'Was ist das a-Maß einer Kehlnaht und wie hängt es mit dem z-Maß zusammen? Zeichnungsangabe, Mindest- und Höchstwerte, Toleranzen nach ISO 5817, Messung und Kosten überdimensionierter Nähte.',
    og: 'a-Maß der Kehlnaht',
    tag: 'Konstruktion · Berechnung',
    h1: 'a-Maß der Kehlnaht: Nahtdicke, z-Maß und richtige Auslegung',
    crumb: 'Kehlnaht a-Maß',
    read: '6 Min. Lesezeit',
    body: `
<p>Die meisten Nähte an einem Schweißteil sind Kehlnähte. Ein kleiner Wert neben dem Symbol, etwa <strong>a5</strong>, bestimmt sowohl die Tragfähigkeit als auch Schweißzeit und Kosten. Dieser Beitrag erklärt das a-Maß, den Unterschied zum z-Maß, die Auslegung und die Prüfung in der Werkstatt.</p>
<h2>a-Maß und z-Maß</h2>
<ul>
<li><strong>a-Maß (Nahtdicke):</strong> Höhe des größten gleichschenkligen Dreiecks im Nahtquerschnitt, gemessen vom Wurzelpunkt zur Hypotenuse. Festigkeitsnachweise verwenden diesen Wert.</li>
<li><strong>z-Maß (Schenkellänge):</strong> Länge der Naht auf der Bauteiloberfläche. Diesen Wert sieht und misst die Werkstatt direkt.</li>
</ul>
<p>Bei einer gleichschenkligen Kehlnaht im 90°-Stoß gilt: <strong>a ≈ 0,7 × z</strong>, also <strong>z ≈ 1,4 × a</strong>.</p>
<table class="data-table"><thead><tr><th>a (mm)</th><th>z (mm, ca.)</th><th>Typische Anwendung</th></tr></thead><tbody>
<tr><td>3</td><td>4,2</td><td>Dünnblech, geringe Last, Heftnähte</td></tr>
<tr><td>4</td><td>5,7</td><td>Allgemeine Fertigung, Bleche 6-8 mm</td></tr>
<tr><td>5</td><td>7,1</td><td>Rahmen und Stahlbauanschlüsse</td></tr>
<tr><td>6</td><td>8,5</td><td>Tragende Verbindungen ab 10-12 mm</td></tr>
<tr><td>8</td><td>11,3</td><td>Hohe Last; meist mehrlagig</td></tr>
</tbody></table>
<h2>Angabe in der Zeichnung</h2>
<p>Nach ISO 2553 steht das Maß links vom Kehlnahtsymbol. „a5" bezeichnet die Nahtdicke, „z7" die Schenkellänge. Fehlt der Buchstabe, wird in vielen europäischen Zeichnungen das a-Maß angenommen; das ist jedoch eine Annahme und sollte im Angebot geklärt werden. Rechts stehen Nahtlänge und bei unterbrochenen Nähten die Teilung, z. B. <strong>a4 3×50 (150)</strong>. Mehr dazu in unserem <a href="kaynak-sembolizasyonu.html">Leitfaden zu Schweißsymbolen</a>.</p>
<h2>Wie wird das a-Maß festgelegt?</h2>
<ol>
<li><strong>Festigkeitsnachweis:</strong> Für tragende Verbindungen wird a nach Normen wie EN 1993-1-8 berechnet. Im vereinfachten Verfahren ist die übertragbare Kraft je Längeneinheit proportional zu a.</li>
<li><strong>Untergrenze:</strong> EN 1993-1-8 fordert für tragende Kehlnähte mindestens a = 3 mm.</li>
<li><strong>Abstimmung auf die Blechdicke:</strong> Als Faustregel sollte a etwa das 0,7-Fache des dünneren Bauteils nicht überschreiten. Eine größere Naht bringt meist keine Tragfähigkeit, nur mehr Wärmeeintrag und Verzug.</li>
<li><strong>Einlagengrenze:</strong> Mit MAG sind etwa a5-a6 einlagig möglich. Größere Maße erfordern mehrere Lagen; die Zeit steigt schnell.</li>
</ol>
<h2>Warum größere Nähte teurer sind</h2>
<p>Das Schweißgutvolumen einer Kehlnaht wächst mit dem Quadrat von a. Von a5 auf a7 verdoppelt sich das Schweißgut nahezu (49/25 ≈ 1,96); hinzu kommen weitere Lagen, mehr Wärmeeintrag und Richtarbeit gegen <a href="kaynak-distorsiyonu.html">Verzug</a>. Eine „sicherheitshalber" vergrößerte Naht kostet mehr, ohne das Bauteil stärker zu machen.</p>
<h2>Tiefer Einbrand</h2>
<p>Verfahren mit hohem Einbrand wie das UP-Schweißen schmelzen über den Wurzelpunkt hinaus. EN 1993-1-8 erlaubt, diesen Einbrand anzurechnen, wenn er durch eine Verfahrensprüfung nachgewiesen ist. Eine optisch kleinere Naht kann dann rechnerisch dieselbe Tragfähigkeit haben.</p>
<h2>Toleranzen nach ISO 5817</h2>
<p>ISO 5817 begrenzt zu kleine und zu große Nahtdicke bei Kehlnähten:</p>
<table class="data-table"><thead><tr><th>Unregelmäßigkeit</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody>
<tr><td>Zu kleine Nahtdicke (5213)</td><td>Nicht zulässig</td><td>h ≤ 0,3 mm + 0,1a, max. 1 mm (kurze Unregelmäßigkeit)</td><td>h ≤ 0,3 mm + 0,1a, max. 2 mm (kurze Unregelmäßigkeit)</td></tr>
<tr><td>Zu große Nahtdicke (5214)</td><td>h ≤ 1 mm + 0,15a, max. 3 mm</td><td>h ≤ 1 mm + 0,2a, max. 4 mm</td><td>h ≤ 1 mm + 0,3a, max. 5 mm</td></tr>
</tbody></table>
<p>Bei Bewertungsgruppe B darf eine a5-Naht also auch örtlich nicht unter a5 liegen. Alle Bewertungsgruppen erklärt unser <a href="iso-5817-kalite-seviyeleri.html">ISO-5817-Leitfaden</a>.</p>
<h2>Messung in der Werkstatt</h2>
<p>Das a-Maß wird bei der Sichtprüfung mit einer Kehlnahtlehre oder Universal-Schweißnahtlehre gemessen, die auf beiden Bauteilflächen aufliegt. Bei gewölbten Nähten zeigt die Lehre die tatsächliche Nahtdicke; bei Hohlkehlen ist das Oberflächenprofil maßgebend, die Messung erfordert mehr Sorgfalt. Bei kritischen Verbindungen kann ein Makroschliff an einer Probe erfolgen.</p>
<h2>Checkliste vor dem Angebot</h2>
<ol>
<li>Ist in der Zeichnung eindeutig a oder z angegeben?</li>
<li>Passt a zur Dicke des dünneren Bauteils?</li>
<li>Genügt eine unterbrochene Naht, oder ist eine durchgehende wirklich nötig?</li>
<li>Ist die Bewertungsgruppe (B, C, D) angegeben?</li>
</ol>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Im Angebot prüfen wir die Nahtmaße der Zeichnung gegen die Blechdicken und fragen bei überdimensionierten oder unklaren Maßen nach. In der Fertigung wird das a-Maß bei unserer Sichtprüfung nach ISO 17637 mit der Lehre kontrolliert und im Bericht dokumentiert. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Welche Schenkellänge hat eine a5-Kehlnaht?', 'Bei einer gleichschenkligen Kehlnaht im 90°-Stoß gilt z ≈ 1,4 × a; eine a5-Naht hat also etwa 7 mm Schenkellänge.'],
      ['Was ist der Unterschied zwischen a-Maß und z-Maß?', 'a ist die Nahtdicke im Querschnitt und dient der Berechnung. z ist die Schenkellänge auf der Bauteiloberfläche und in der Werkstatt direkt sichtbar.'],
      ['Wie groß ist das kleinste zulässige a-Maß?', 'EN 1993-1-8 fordert für tragende Kehlnähte mindestens 3 mm. Bei nicht tragenden Nähten gilt die Kundenspezifikation.'],
      ['Macht eine größere Naht das Bauteil immer fester?', 'Nein. Ab einem gewissen Punkt wird das Blech zum schwächsten Glied; eine größere Naht erhöht nur Wärmeeintrag, Verzug und Kosten.']
    ],
    cta_h3: 'Wir prüfen die Nahtmaße Ihrer Zeichnung',
    cta_p: 'Senden Sie uns Ihre Zeichnung; wir bewerten die Nahtmaße im Verhältnis zu den Blechdicken und erstellen ein Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Garganta de la soldadura en ángulo (a): a frente a z, dimensionado y tolerancias',
    meta: 'Qué es la dimensión a de una soldadura en ángulo y cómo se relaciona con el cateto z. Indicación en plano, valores mínimos y máximos, tolerancias ISO 5817, medición y coste de las soldaduras sobredimensionadas.',
    og: 'Garganta de la soldadura en ángulo (a)',
    tag: 'Diseño · Cálculo',
    h1: 'Garganta de la soldadura en ángulo: a frente a z, dimensionado y tolerancias',
    crumb: 'Garganta a',
    read: '6 min de lectura',
    body: `
<p>La mayoría de las soldaduras de una pieza son en ángulo. Un pequeño valor junto al símbolo del plano, como <strong>a5</strong>, determina tanto la carga que soporta la unión como el tiempo y el coste de soldadura. Este artículo explica qué es la dimensión a, en qué se diferencia de z, cómo se elige y cómo se comprueba en taller.</p>
<h2>Dimensión a y dimensión z</h2>
<ul>
<li><strong>a (espesor de garganta):</strong> altura, desde la raíz hasta la hipotenusa, del mayor triángulo isósceles inscrito en la sección de la soldadura. Los cálculos de resistencia usan este valor.</li>
<li><strong>z (cateto):</strong> longitud del lado de la soldadura sobre la superficie de la pieza. Es lo que el taller ve y mide directamente.</li>
</ul>
<p>En una soldadura en ángulo de catetos iguales a 90°: <strong>a ≈ 0,7 × z</strong>, es decir, <strong>z ≈ 1,4 × a</strong>.</p>
<table class="data-table"><thead><tr><th>a (mm)</th><th>z (mm, aprox.)</th><th>Uso típico</th></tr></thead><tbody>
<tr><td>3</td><td>4,2</td><td>Chapa fina, carga baja, cordones de unión</td></tr>
<tr><td>4</td><td>5,7</td><td>Fabricación general, chapa de 6-8 mm</td></tr>
<tr><td>5</td><td>7,1</td><td>Bastidores y uniones estructurales</td></tr>
<tr><td>6</td><td>8,5</td><td>Uniones resistentes en chapa de 10-12 mm o más</td></tr>
<tr><td>8</td><td>11,3</td><td>Carga alta; normalmente varias pasadas</td></tr>
</tbody></table>
<h2>Cómo se indica en el plano</h2>
<p>Según la ISO 2553, la dimensión se escribe a la izquierda del símbolo de ángulo. "a5" indica garganta y "z7" cateto. Si no hay letra, en muchos planos europeos se sobrentiende a, pero es una suposición que conviene aclarar en la oferta. A la derecha van la longitud y, en soldadura discontinua, el paso, por ejemplo <strong>a4 3×50 (150)</strong>. Más en nuestra <a href="kaynak-sembolizasyonu.html">guía de símbolos de soldadura</a>.</p>
<h2>Cómo se elige a</h2>
<ol>
<li><strong>Cálculo de cargas:</strong> en uniones estructurales, a se calcula según normas como la EN 1993-1-8. En el método simplificado, la fuerza que transmite la soldadura por unidad de longitud es proporcional a a.</li>
<li><strong>Límite inferior:</strong> la EN 1993-1-8 exige una garganta mínima de 3 mm en soldaduras en ángulo resistentes.</li>
<li><strong>Relación con el espesor:</strong> como regla práctica, a no debería superar unas 0,7 veces el espesor de la pieza más delgada. Una soldadura mayor no suele aportar capacidad, solo más aporte térmico y distorsión.</li>
<li><strong>Límite de una pasada:</strong> con MAG se alcanza aproximadamente a5-a6 en una pasada. Tamaños mayores requieren varias pasadas y el tiempo crece rápido.</li>
</ol>
<h2>Por qué una soldadura mayor cuesta más</h2>
<p>El volumen de metal depositado en una soldadura en ángulo crece con el cuadrado de a. De a5 a a7 el metal aportado casi se duplica (49/25 ≈ 1,96), además de pasadas extra, más aporte térmico y más tiempo corrigiendo la <a href="kaynak-distorsiyonu.html">distorsión</a>. Agrandar la soldadura "por si acaso" encarece sin reforzar la pieza.</p>
<h2>Penetración profunda</h2>
<p>Procesos de alta penetración como el arco sumergido funden más allá de la raíz. La EN 1993-1-8 permite contar esta penetración adicional solo si se demuestra mediante un ensayo de procedimiento. Así, una soldadura visualmente menor puede ofrecer la misma capacidad de cálculo.</p>
<h2>Tolerancias de a según ISO 5817</h2>
<table class="data-table"><thead><tr><th>Imperfección</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody>
<tr><td>Garganta insuficiente (5213)</td><td>No permitida</td><td>h ≤ 0,3 mm + 0,1a, máx. 1 mm (imperfección corta)</td><td>h ≤ 0,3 mm + 0,1a, máx. 2 mm (imperfección corta)</td></tr>
<tr><td>Garganta excesiva (5214)</td><td>h ≤ 1 mm + 0,15a, máx. 3 mm</td><td>h ≤ 1 mm + 0,2a, máx. 4 mm</td><td>h ≤ 1 mm + 0,3a, máx. 5 mm</td></tr>
</tbody></table>
<p>En nivel B, una soldadura a5 no puede quedar por debajo de a5 ni siquiera localmente. Todos los niveles en nuestra <a href="iso-5817-kalite-seviyeleri.html">guía ISO 5817</a>.</p>
<h2>Cómo se mide en taller</h2>
<p>La dimensión a se mide durante la inspección visual con una galga de soldadura en ángulo o una galga multifunción apoyada en ambas superficies. En soldaduras convexas la lectura da la garganta real; en las cóncavas manda el perfil superficial y la medición requiere más cuidado. En uniones críticas puede hacerse una macrografía de una muestra.</p>
<h2>Lista de comprobación antes de la oferta</h2>
<ol>
<li>¿El plano indica claramente a o z?</li>
<li>¿Es a coherente con el espesor de la pieza más delgada?</li>
<li>¿Bastaría una soldadura discontinua o hace falta una continua?</li>
<li>¿Se indica el nivel de calidad (B, C, D)?</li>
</ol>
<div class="callout"><p><strong>En ArmaWeld:</strong> en la oferta revisamos las dimensiones de soldadura del plano frente a los espesores y le consultamos las que parecen sobredimensionadas o poco claras. En producción, la dimensión a se comprueba con galga durante nuestra inspección visual según ISO 17637 y se registra en el informe. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Qué cateto tiene una soldadura en ángulo a5?', 'En una soldadura de catetos iguales a 90°, z ≈ 1,4 × a, por lo que una a5 tiene un cateto de unos 7 mm.'],
      ['¿Qué diferencia hay entre a y z?', 'a es la garganta en la sección y se usa en el cálculo. z es el cateto sobre la superficie de la pieza y se ve directamente en taller.'],
      ['¿Cuál es la garganta mínima?', 'La EN 1993-1-8 exige al menos 3 mm en soldaduras en ángulo resistentes. En cordones no estructurales manda la especificación del cliente.'],
      ['¿Una soldadura mayor siempre refuerza la pieza?', 'No. A partir de cierto punto la chapa es el eslabón débil; una soldadura mayor solo añade aporte térmico, distorsión y coste.']
    ],
    cta_h3: 'Revisamos las dimensiones de soldadura de su plano',
    cta_p: 'Envíenos su plano; evaluamos las dimensiones de soldadura frente a los espesores y preparamos la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Gorge de soudure d’angle (a) : a ou z, dimensionnement et tolérances',
    meta: 'Qu’est-ce que la cote a d’une soudure d’angle et quel lien avec la longueur de jambe z ? Indication sur plan, valeurs minimales et maximales, tolérances ISO 5817, mesure et coût des soudures surdimensionnées.',
    og: 'Gorge de soudure d’angle (a)',
    tag: 'Conception · Calcul',
    h1: 'Gorge de soudure d’angle : a ou z, dimensionnement et tolérances',
    crumb: 'Gorge a',
    read: '6 min de lecture',
    body: `
<p>La plupart des soudures d’une pièce mécanosoudée sont des soudures d’angle. Une petite valeur à côté du symbole, par exemple <strong>a5</strong>, détermine à la fois la charge reprise par l’assemblage et le temps et le coût de soudage. Cet article explique ce qu’est la cote a, sa différence avec z, son choix et son contrôle en atelier.</p>
<h2>Cote a et cote z</h2>
<ul>
<li><strong>a (épaisseur de gorge) :</strong> hauteur, depuis la racine jusqu’à l’hypoténuse, du plus grand triangle isocèle inscrit dans la section de la soudure. Les calculs de résistance utilisent cette valeur.</li>
<li><strong>z (longueur de jambe) :</strong> longueur du côté de la soudure sur la surface de la pièce. C’est ce que l’atelier voit et mesure directement.</li>
</ul>
<p>Pour une soudure d’angle à jambes égales sur un assemblage à 90° : <strong>a ≈ 0,7 × z</strong>, soit <strong>z ≈ 1,4 × a</strong>.</p>
<table class="data-table"><thead><tr><th>a (mm)</th><th>z (mm, env.)</th><th>Usage courant</th></tr></thead><tbody>
<tr><td>3</td><td>4,2</td><td>Tôle mince, faible charge, cordons de liaison</td></tr>
<tr><td>4</td><td>5,7</td><td>Fabrication générale, tôles de 6-8 mm</td></tr>
<tr><td>5</td><td>7,1</td><td>Châssis et assemblages de charpente</td></tr>
<tr><td>6</td><td>8,5</td><td>Assemblages porteurs en tôles de 10-12 mm et plus</td></tr>
<tr><td>8</td><td>11,3</td><td>Forte charge ; généralement multipasse</td></tr>
</tbody></table>
<h2>Indication sur le plan</h2>
<p>Selon l’ISO 2553, la cote s’inscrit à gauche du symbole d’angle. « a5 » désigne la gorge, « z7 » la jambe. Sans lettre, beaucoup de plans européens sous-entendent a, mais c’est une hypothèse à lever lors de l’offre. À droite figurent la longueur et, pour une soudure discontinue, le pas, par exemple <strong>a4 3×50 (150)</strong>. Voir notre <a href="kaynak-sembolizasyonu.html">guide des symboles de soudage</a>.</p>
<h2>Comment choisir a ?</h2>
<ol>
<li><strong>Calcul des efforts :</strong> pour les assemblages porteurs, a se calcule selon des normes comme l’EN 1993-1-8. Dans la méthode simplifiée, l’effort transmis par unité de longueur est proportionnel à a.</li>
<li><strong>Limite basse :</strong> l’EN 1993-1-8 impose une gorge d’au moins 3 mm pour les soudures d’angle porteuses.</li>
<li><strong>Cohérence avec l’épaisseur :</strong> en règle pratique, a ne doit pas dépasser environ 0,7 fois l’épaisseur de la pièce la plus mince. Une soudure plus grosse n’apporte souvent aucune capacité, seulement plus d’énergie et de déformation.</li>
<li><strong>Limite d’une passe :</strong> en MAG, on atteint environ a5-a6 en une passe. Au-delà, il faut plusieurs passes et le temps augmente vite.</li>
</ol>
<h2>Pourquoi une soudure plus grosse coûte plus cher</h2>
<p>Le volume de métal déposé croît avec le carré de a. Passer de a5 à a7 double presque le métal déposé (49/25 ≈ 1,96), plus des passes supplémentaires, davantage d’énergie et de temps de redressage contre la <a href="kaynak-distorsiyonu.html">déformation</a>. Grossir une soudure « par sécurité » renchérit la pièce sans la renforcer.</p>
<h2>Pénétration profonde</h2>
<p>Les procédés à forte pénétration comme l’arc submergé fondent au-delà de la racine. L’EN 1993-1-8 autorise à compter cette pénétration supplémentaire seulement si elle est démontrée par une épreuve de qualification. Une soudure visuellement plus petite peut alors offrir la même capacité de calcul.</p>
<h2>Tolérances sur a selon l’ISO 5817</h2>
<table class="data-table"><thead><tr><th>Défaut</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody>
<tr><td>Gorge insuffisante (5213)</td><td>Non admis</td><td>h ≤ 0,3 mm + 0,1a, max. 1 mm (défaut court)</td><td>h ≤ 0,3 mm + 0,1a, max. 2 mm (défaut court)</td></tr>
<tr><td>Gorge excessive (5214)</td><td>h ≤ 1 mm + 0,15a, max. 3 mm</td><td>h ≤ 1 mm + 0,2a, max. 4 mm</td><td>h ≤ 1 mm + 0,3a, max. 5 mm</td></tr>
</tbody></table>
<p>Au niveau B, une soudure a5 ne peut donc pas descendre sous a5, même localement. Tous les niveaux dans notre <a href="iso-5817-kalite-seviyeleri.html">guide ISO 5817</a>.</p>
<h2>Mesure en atelier</h2>
<p>La cote a se mesure lors du contrôle visuel avec une jauge de soudure d’angle ou une jauge multifonction appuyée sur les deux surfaces. Sur une soudure bombée, la lecture donne la gorge réelle ; sur une soudure concave, le profil de surface est déterminant et la mesure demande plus de soin. Pour les assemblages critiques, une macrographie peut être réalisée sur échantillon.</p>
<h2>Liste de vérification avant l’offre</h2>
<ol>
<li>Le plan indique-t-il clairement a ou z ?</li>
<li>La cote a est-elle cohérente avec l’épaisseur de la pièce la plus mince ?</li>
<li>Une soudure discontinue suffirait-elle, ou une soudure continue est-elle vraiment nécessaire ?</li>
<li>Le niveau de qualité (B, C, D) est-il précisé ?</li>
</ol>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> lors de l’offre, nous comparons les cotes de soudure du plan aux épaisseurs et vous interrogeons sur les cotes surdimensionnées ou ambiguës. En production, la cote a est contrôlée à la jauge lors de notre contrôle visuel selon l’ISO 17637 et consignée dans le rapport. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Quelle longueur de jambe pour une soudure d’angle a5 ?', 'Pour une soudure à jambes égales à 90°, z ≈ 1,4 × a ; une a5 a donc une jambe d’environ 7 mm.'],
      ['Quelle différence entre a et z ?', 'a est l’épaisseur de gorge dans la section, utilisée pour le calcul. z est la longueur de jambe sur la surface de la pièce, visible directement en atelier.'],
      ['Quelle est la gorge minimale ?', 'L’EN 1993-1-8 impose au moins 3 mm pour les soudures d’angle porteuses. Pour les cordons non porteurs, la spécification client fait foi.'],
      ['Une soudure plus grosse renforce-t-elle toujours la pièce ?', 'Non. Au-delà d’un certain point, la tôle devient le maillon faible ; une soudure plus grosse n’ajoute que de l’énergie, de la déformation et du coût.']
    ],
    cta_h3: 'Nous vérifions les cotes de soudure de votre plan',
    cta_p: 'Envoyez votre plan ; nous évaluons les cotes de soudure par rapport aux épaisseurs et préparons l’offre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Sezione di gola della saldatura d’angolo (a): a e z, dimensionamento e tolleranze',
    meta: 'Cos’è la quota a di una saldatura d’angolo e che rapporto ha con il lato z? Indicazione a disegno, valori minimi e massimi, tolleranze ISO 5817, misura e costo delle saldature sovradimensionate.',
    og: 'Sezione di gola della saldatura d’angolo (a)',
    tag: 'Progettazione · Calcolo',
    h1: 'Sezione di gola della saldatura d’angolo: a e z, dimensionamento e tolleranze',
    crumb: 'Gola a',
    read: '6 min di lettura',
    body: `
<p>La maggior parte delle saldature di un pezzo carpenteria è d’angolo. Un piccolo valore accanto al simbolo, come <strong>a5</strong>, determina sia il carico che il giunto sopporta sia tempi e costi di saldatura. Questo articolo spiega cos’è la quota a, come si differenzia da z, come si sceglie e come si controlla in officina.</p>
<h2>Quota a e quota z</h2>
<ul>
<li><strong>a (sezione di gola):</strong> altezza, dalla radice all’ipotenusa, del più grande triangolo isoscele inscritto nella sezione della saldatura. I calcoli di resistenza usano questo valore.</li>
<li><strong>z (lato):</strong> lunghezza del lato della saldatura sulla superficie del pezzo. È ciò che l’officina vede e misura direttamente.</li>
</ul>
<p>Per una saldatura d’angolo a lati uguali su giunto a 90°: <strong>a ≈ 0,7 × z</strong>, quindi <strong>z ≈ 1,4 × a</strong>.</p>
<table class="data-table"><thead><tr><th>a (mm)</th><th>z (mm, circa)</th><th>Uso tipico</th></tr></thead><tbody>
<tr><td>3</td><td>4,2</td><td>Lamiera sottile, carichi bassi, cordoni di collegamento</td></tr>
<tr><td>4</td><td>5,7</td><td>Carpenteria generale, lamiere 6-8 mm</td></tr>
<tr><td>5</td><td>7,1</td><td>Telai e collegamenti strutturali</td></tr>
<tr><td>6</td><td>8,5</td><td>Giunti portanti su lamiere da 10-12 mm in su</td></tr>
<tr><td>8</td><td>11,3</td><td>Carichi elevati; di solito multipassata</td></tr>
</tbody></table>
<h2>Indicazione a disegno</h2>
<p>Secondo la ISO 2553 la quota si scrive a sinistra del simbolo d’angolo. "a5" indica la gola, "z7" il lato. Senza lettera, molti disegni europei sottintendono a, ma è un’ipotesi da chiarire in offerta. A destra vanno lunghezza e, per saldature intermittenti, passo, ad esempio <strong>a4 3×50 (150)</strong>. Approfondimenti nella nostra <a href="kaynak-sembolizasyonu.html">guida ai simboli di saldatura</a>.</p>
<h2>Come si sceglie a</h2>
<ol>
<li><strong>Calcolo dei carichi:</strong> nei giunti strutturali a si calcola secondo norme come la EN 1993-1-8. Nel metodo semplificato la forza trasmessa per unità di lunghezza è proporzionale ad a.</li>
<li><strong>Limite inferiore:</strong> la EN 1993-1-8 richiede una gola di almeno 3 mm nelle saldature d’angolo portanti.</li>
<li><strong>Coerenza con lo spessore:</strong> come regola pratica, a non dovrebbe superare circa 0,7 volte lo spessore del pezzo più sottile. Una saldatura più grande di solito non aggiunge capacità, solo apporto termico e deformazione.</li>
<li><strong>Limite della singola passata:</strong> in MAG si arriva a circa a5-a6 in una passata. Oltre servono più passate e i tempi crescono rapidamente.</li>
</ol>
<h2>Perché una saldatura più grande costa di più</h2>
<p>Il volume di metallo depositato cresce con il quadrato di a. Da a5 ad a7 il metallo quasi raddoppia (49/25 ≈ 1,96), oltre a passate aggiuntive, più apporto termico e più tempo per correggere la <a href="kaynak-distorsiyonu.html">deformazione</a>. Ingrandire la saldatura "per sicurezza" fa salire il costo senza rinforzare il pezzo.</p>
<h2>Penetrazione profonda</h2>
<p>I processi ad alta penetrazione come l’arco sommerso fondono oltre la radice. La EN 1993-1-8 consente di considerare questa penetrazione aggiuntiva solo se dimostrata da una prova di procedimento. Una saldatura visivamente più piccola può così offrire la stessa capacità di calcolo.</p>
<h2>Tolleranze su a secondo ISO 5817</h2>
<table class="data-table"><thead><tr><th>Imperfezione</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody>
<tr><td>Gola insufficiente (5213)</td><td>Non ammessa</td><td>h ≤ 0,3 mm + 0,1a, max 1 mm (imperfezione corta)</td><td>h ≤ 0,3 mm + 0,1a, max 2 mm (imperfezione corta)</td></tr>
<tr><td>Gola eccessiva (5214)</td><td>h ≤ 1 mm + 0,15a, max 3 mm</td><td>h ≤ 1 mm + 0,2a, max 4 mm</td><td>h ≤ 1 mm + 0,3a, max 5 mm</td></tr>
</tbody></table>
<p>Al livello B una saldatura a5 non può scendere sotto a5 nemmeno localmente. Tutti i livelli nella nostra <a href="iso-5817-kalite-seviyeleri.html">guida ISO 5817</a>.</p>
<h2>Misura in officina</h2>
<p>La quota a si misura durante il controllo visivo con un calibro per saldature d’angolo o un calibro multifunzione appoggiato su entrambe le superfici. Su una saldatura convessa la lettura dà la gola reale; su una concava conta il profilo superficiale e la misura richiede più attenzione. Per giunti critici si può eseguire una macrografia su un campione.</p>
<h2>Checklist prima dell’offerta</h2>
<ol>
<li>Il disegno indica chiaramente a o z?</li>
<li>La quota a è coerente con lo spessore del pezzo più sottile?</li>
<li>Basterebbe una saldatura intermittente o serve davvero una continua?</li>
<li>È indicato il livello di qualità (B, C, D)?</li>
</ol>
<div class="callout"><p><strong>In ArmaWeld:</strong> in fase di offerta confrontiamo le quote di saldatura del disegno con gli spessori e vi chiediamo chiarimenti su quote sovradimensionate o poco chiare. In produzione la quota a viene verificata con calibro durante il nostro controllo visivo secondo ISO 17637 e riportata nel rapporto. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Che lato ha una saldatura d’angolo a5?', 'Per una saldatura a lati uguali a 90°, z ≈ 1,4 × a; una a5 ha quindi un lato di circa 7 mm.'],
      ['Che differenza c’è tra a e z?', 'a è la sezione di gola, usata nei calcoli. z è il lato sulla superficie del pezzo, visibile direttamente in officina.'],
      ['Qual è la gola minima?', 'La EN 1993-1-8 richiede almeno 3 mm nelle saldature d’angolo portanti. Per i cordoni non strutturali vale la specifica del cliente.'],
      ['Una saldatura più grande rinforza sempre il pezzo?', 'No. Oltre un certo punto la lamiera diventa l’anello debole; una saldatura più grande aggiunge solo apporto termico, deformazione e costo.']
    ],
    cta_h3: 'Verifichiamo le quote di saldatura del vostro disegno',
    cta_p: 'Inviateci il disegno; valutiamo le quote di saldatura rispetto agli spessori e prepariamo l’offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'a-maat van de hoeklas: keeldoorsnede, z-maat en juiste dimensionering',
    meta: 'Wat is de a-maat van een hoeklas en hoe verhoudt die zich tot de beenlengte z? Aanduiding op tekening, minimale en maximale waarden, ISO 5817-toleranties, meten en de kosten van te grote lassen.',
    og: 'a-maat van de hoeklas',
    tag: 'Ontwerp · Berekening',
    h1: 'a-maat van de hoeklas: keeldoorsnede, z-maat en juiste dimensionering',
    crumb: 'Hoeklas a-maat',
    read: '6 min lezen',
    body: `
<p>De meeste lassen op een gelast onderdeel zijn hoeklassen. Een kleine waarde naast het symbool, zoals <strong>a5</strong>, bepaalt zowel de belasting die de verbinding draagt als de lastijd en de kosten. Dit artikel legt uit wat de a-maat is, hoe die verschilt van z, hoe ze wordt gekozen en hoe ze in de werkplaats wordt gecontroleerd.</p>
<h2>a-maat en z-maat</h2>
<ul>
<li><strong>a (keelhoogte):</strong> de hoogte, van wortel tot hypotenusa, van de grootste gelijkbenige driehoek die in de lasdoorsnede past. Sterkteberekeningen gebruiken deze waarde.</li>
<li><strong>z (beenlengte):</strong> de lengte van de laszijde op het oppervlak van het onderdeel. Dit ziet en meet de werkplaats direct.</li>
</ul>
<p>Bij een gelijkbenige hoeklas in een 90°-verbinding geldt: <strong>a ≈ 0,7 × z</strong>, dus <strong>z ≈ 1,4 × a</strong>.</p>
<table class="data-table"><thead><tr><th>a (mm)</th><th>z (mm, ca.)</th><th>Typische toepassing</th></tr></thead><tbody>
<tr><td>3</td><td>4,2</td><td>Dunne plaat, lage belasting, verbindingsnaden</td></tr>
<tr><td>4</td><td>5,7</td><td>Algemene fabricage, plaat 6-8 mm</td></tr>
<tr><td>5</td><td>7,1</td><td>Chassis en constructieverbindingen</td></tr>
<tr><td>6</td><td>8,5</td><td>Dragende verbindingen vanaf 10-12 mm</td></tr>
<tr><td>8</td><td>11,3</td><td>Zware belasting; meestal meerlaags</td></tr>
</tbody></table>
<h2>Aanduiding op de tekening</h2>
<p>Volgens ISO 2553 staat de maat links van het hoeklassymbool. "a5" is de keelhoogte, "z7" de beenlengte. Zonder letter gaan veel Europese tekeningen uit van a, maar dat is een aanname die bij de offerte moet worden opgehelderd. Rechts staan lengte en bij onderbroken lassen de steek, bijvoorbeeld <strong>a4 3×50 (150)</strong>. Meer in onze <a href="kaynak-sembolizasyonu.html">gids over lassymbolen</a>.</p>
<h2>Hoe wordt a gekozen?</h2>
<ol>
<li><strong>Belastingberekening:</strong> bij dragende verbindingen wordt a berekend volgens normen als EN 1993-1-8. In de vereenvoudigde methode is de kracht per lengte-eenheid evenredig met a.</li>
<li><strong>Ondergrens:</strong> EN 1993-1-8 eist voor dragende hoeklassen een keelhoogte van minimaal 3 mm.</li>
<li><strong>Afstemming op plaatdikte:</strong> als vuistregel mag a niet groter zijn dan ongeveer 0,7 keer de dikte van het dunste deel. Een grotere las geeft meestal geen extra capaciteit, alleen meer warmte-inbreng en vervorming.</li>
<li><strong>Grens voor één laag:</strong> met MAG haal je ongeveer a5-a6 in één laag. Grotere maten vragen meerdere lagen en de tijd loopt snel op.</li>
</ol>
<h2>Waarom grotere lassen duurder zijn</h2>
<p>Het lasmetaalvolume groeit met het kwadraat van a. Van a5 naar a7 verdubbelt het lasmetaal bijna (49/25 ≈ 1,96), plus extra lagen, meer warmte-inbreng en meer richtwerk tegen <a href="kaynak-distorsiyonu.html">vervorming</a>. Een las die "voor de zekerheid" groter wordt gemaakt, kost meer zonder het onderdeel sterker te maken.</p>
<h2>Diepe inbranding</h2>
<p>Processen met diepe inbranding zoals onder poeder lassen smelten voorbij de wortel. EN 1993-1-8 staat toe deze extra inbranding mee te rekenen als die met een procedurekwalificatie is aangetoond. Een las die er kleiner uitziet, kan dan rekenkundig dezelfde capaciteit hebben.</p>
<h2>ISO 5817-toleranties op a</h2>
<table class="data-table"><thead><tr><th>Onvolkomenheid</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody>
<tr><td>Te kleine keelhoogte (5213)</td><td>Niet toegestaan</td><td>h ≤ 0,3 mm + 0,1a, max. 1 mm (korte onvolkomenheid)</td><td>h ≤ 0,3 mm + 0,1a, max. 2 mm (korte onvolkomenheid)</td></tr>
<tr><td>Te grote keelhoogte (5214)</td><td>h ≤ 1 mm + 0,15a, max. 3 mm</td><td>h ≤ 1 mm + 0,2a, max. 4 mm</td><td>h ≤ 1 mm + 0,3a, max. 5 mm</td></tr>
</tbody></table>
<p>Op niveau B mag een a5-las dus ook plaatselijk niet onder a5 komen. Alle niveaus in onze <a href="iso-5817-kalite-seviyeleri.html">ISO 5817-gids</a>.</p>
<h2>Meten in de werkplaats</h2>
<p>De a-maat wordt bij visuele inspectie gemeten met een hoeklasmeter of multifunctionele lasmeter die op beide oppervlakken rust. Bij een bolle las geeft de meting de werkelijke keelhoogte; bij een holle las is het oppervlakteprofiel bepalend en vraagt de meting meer zorg. Bij kritische verbindingen kan een macro-doorsnede van een proefstuk worden gemaakt.</p>
<h2>Checklist vóór de offerte</h2>
<ol>
<li>Staat op de tekening duidelijk a of z?</li>
<li>Past a bij de dikte van het dunste deel?</li>
<li>Volstaat een onderbroken las, of is een doorlopende echt nodig?</li>
<li>Is het kwaliteitsniveau (B, C, D) vermeld?</li>
</ol>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij de offerte toetsen we de lasmaten op de tekening aan de plaatdiktes en vragen we na bij te grote of onduidelijke maten. In de productie wordt de a-maat tijdens onze visuele inspectie volgens ISO 17637 met een meter gecontroleerd en in het rapport vastgelegd. <a href="../cizime-gore-imalat.html">Productie op tekening →</a></p></div>
`,
    faq: [
      ['Welke beenlengte heeft een a5-hoeklas?', 'Bij een gelijkbenige hoeklas in een 90°-verbinding is z ≈ 1,4 × a; een a5-las heeft dus een beenlengte van ongeveer 7 mm.'],
      ['Wat is het verschil tussen a en z?', 'a is de keelhoogte in de doorsnede en wordt in de berekening gebruikt. z is de beenlengte op het oppervlak en direct zichtbaar in de werkplaats.'],
      ['Wat is de minimale keelhoogte?', 'EN 1993-1-8 eist minimaal 3 mm voor dragende hoeklassen. Bij niet-dragende naden geldt de klantspecificatie.'],
      ['Maakt een grotere las het onderdeel altijd sterker?', 'Nee. Vanaf een bepaald punt wordt de plaat de zwakste schakel; een grotere las voegt alleen warmte-inbreng, vervorming en kosten toe.']
    ],
    cta_h3: 'Wij controleren de lasmaten op uw tekening',
    cta_p: 'Stuur uw tekening; we beoordelen de lasmaten ten opzichte van de plaatdiktes en maken een offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'a-mål på kilsveis: halsmål, z-mål og riktig dimensjonering',
    meta: 'Hva er a-målet på en kilsveis, og hvordan henger det sammen med beinlengden z? Angivelse på tegning, minste og største verdier, toleranser etter ISO 5817, måling og kostnaden ved for store sveiser.',
    og: 'a-mål på kilsveis',
    tag: 'Konstruksjon · Beregning',
    h1: 'a-mål på kilsveis: halsmål, z-mål og riktig dimensjonering',
    crumb: 'Kilsveis a-mål',
    read: '6 min lesing',
    body: `
<p>De fleste sveisene på en sveiset del er kilsveiser. En liten verdi ved symbolet, for eksempel <strong>a5</strong>, bestemmer både lasten forbindelsen tåler og sveisetid og kostnad. Denne artikkelen forklarer hva a-målet er, hvordan det skiller seg fra z, hvordan det velges og hvordan det kontrolleres i verkstedet.</p>
<h2>a-mål og z-mål</h2>
<ul>
<li><strong>a (halsmål):</strong> høyden, fra roten til hypotenusen, av den største likebente trekanten som får plass i sveisetverrsnittet. Fasthetsberegninger bruker denne verdien.</li>
<li><strong>z (beinlengde):</strong> lengden av sveisens side på delens overflate. Dette ser og måler verkstedet direkte.</li>
</ul>
<p>For en kilsveis med like bein i en 90°-skjøt gjelder: <strong>a ≈ 0,7 × z</strong>, altså <strong>z ≈ 1,4 × a</strong>.</p>
<table class="data-table"><thead><tr><th>a (mm)</th><th>z (mm, ca.)</th><th>Typisk bruk</th></tr></thead><tbody>
<tr><td>3</td><td>4,2</td><td>Tynnplate, lav last, forbindelsessømmer</td></tr>
<tr><td>4</td><td>5,7</td><td>Generell produksjon, plate 6-8 mm</td></tr>
<tr><td>5</td><td>7,1</td><td>Chassis og konstruksjonsforbindelser</td></tr>
<tr><td>6</td><td>8,5</td><td>Bærende forbindelser fra 10-12 mm og opp</td></tr>
<tr><td>8</td><td>11,3</td><td>Tung last; som regel flere strenger</td></tr>
</tbody></table>
<h2>Angivelse på tegningen</h2>
<p>Etter ISO 2553 skrives målet til venstre for kilsveissymbolet. «a5» betyr halsmål, «z7» beinlengde. Uten bokstav forutsetter mange europeiske tegninger a, men det er en antakelse som bør avklares i tilbudet. Til høyre står lengde og, ved avbrutt sveis, deling, for eksempel <strong>a4 3×50 (150)</strong>. Se vår <a href="kaynak-sembolizasyonu.html">veiledning om sveisesymboler</a>.</p>
<h2>Hvordan velges a?</h2>
<ol>
<li><strong>Lastberegning:</strong> for bærende forbindelser beregnes a etter standarder som EN 1993-1-8. I den forenklede metoden er kraften sveisen kan overføre per lengdeenhet proporsjonal med a.</li>
<li><strong>Nedre grense:</strong> EN 1993-1-8 krever et halsmål på minst 3 mm for bærende kilsveiser.</li>
<li><strong>Tilpasning til platetykkelse:</strong> som tommelfingerregel bør a ikke overstige omtrent 0,7 ganger tykkelsen på den tynneste delen. En større sveis gir som regel ingen ekstra kapasitet, bare mer varmetilførsel og deformasjon.</li>
<li><strong>Grense for én streng:</strong> med MAG oppnås omtrent a5-a6 i én streng. Større mål krever flere strenger, og tiden øker raskt.</li>
</ol>
<h2>Hvorfor større sveiser koster mer</h2>
<p>Sveisemetallvolumet øker med kvadratet av a. Fra a5 til a7 blir sveisemetallet nesten doblet (49/25 ≈ 1,96), i tillegg kommer flere strenger, mer varme og mer retting av <a href="kaynak-distorsiyonu.html">deformasjon</a>. En sveis som gjøres større «for sikkerhets skyld», koster mer uten å gjøre delen sterkere.</p>
<h2>Dyp innbrenning</h2>
<p>Prosesser med dyp innbrenning som pulverbuesveising smelter forbi roten. EN 1993-1-8 tillater at denne ekstra innbrenningen regnes med bare hvis den er dokumentert ved en prosedyreprøve. En sveis som ser mindre ut, kan da gi samme beregnede kapasitet.</p>
<h2>Toleranser på a etter ISO 5817</h2>
<table class="data-table"><thead><tr><th>Uregelmessighet</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody>
<tr><td>For lite halsmål (5213)</td><td>Ikke tillatt</td><td>h ≤ 0,3 mm + 0,1a, maks. 1 mm (kort uregelmessighet)</td><td>h ≤ 0,3 mm + 0,1a, maks. 2 mm (kort uregelmessighet)</td></tr>
<tr><td>For stort halsmål (5214)</td><td>h ≤ 1 mm + 0,15a, maks. 3 mm</td><td>h ≤ 1 mm + 0,2a, maks. 4 mm</td><td>h ≤ 1 mm + 0,3a, maks. 5 mm</td></tr>
</tbody></table>
<p>På nivå B kan en a5-sveis altså ikke ligge under a5, heller ikke lokalt. Alle nivåer i vår <a href="iso-5817-kalite-seviyeleri.html">ISO 5817-veiledning</a>.</p>
<h2>Måling i verkstedet</h2>
<p>a-målet måles under visuell kontroll med en kilsveislære eller universal sveiselære som hviler mot begge flatene. På en konveks sveis gir avlesningen det reelle halsmålet; på en konkav sveis er overflateprofilen avgjørende, og målingen krever mer omhu. For kritiske forbindelser kan det tas et makrosnitt av en prøve.</p>
<h2>Sjekkliste før tilbud</h2>
<ol>
<li>Står det tydelig a eller z på tegningen?</li>
<li>Passer a med tykkelsen på den tynneste delen?</li>
<li>Holder det med avbrutt sveis, eller trengs virkelig kontinuerlig sveis?</li>
<li>Er kvalitetsnivået (B, C, D) angitt?</li>
</ol>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> i tilbudsfasen vurderer vi sveisemålene på tegningen mot platetykkelsene og spør om mål som virker for store eller uklare. I produksjonen kontrolleres a-målet med lære under vår visuelle kontroll etter ISO 17637 og føres i rapporten. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hvilken beinlengde har en a5-kilsveis?', 'For en kilsveis med like bein i 90°-skjøt er z ≈ 1,4 × a; en a5-sveis har altså omtrent 7 mm beinlengde.'],
      ['Hva er forskjellen på a og z?', 'a er halsmålet i tverrsnittet og brukes i beregningen. z er beinlengden på overflaten og ses direkte i verkstedet.'],
      ['Hva er minste halsmål?', 'EN 1993-1-8 krever minst 3 mm for bærende kilsveiser. For ikke-bærende sømmer gjelder kundens spesifikasjon.'],
      ['Gjør en større sveis alltid delen sterkere?', 'Nei. Fra et visst punkt blir platen det svakeste leddet; en større sveis gir bare mer varme, deformasjon og kostnad.']
    ],
    cta_h3: 'Vi går gjennom sveisemålene på tegningen din',
    cta_p: 'Send tegningen; vi vurderer sveisemålene mot platetykkelsene og lager tilbud.',
    cta_btn: 'Be om tilbud →'
  }
};
