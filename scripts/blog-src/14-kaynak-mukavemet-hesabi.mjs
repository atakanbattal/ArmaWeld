export default {
  order: 14,
  slug: 'kaynak-dikisi-mukavemet-hesabi',
  key: 'p14_strength',
  date: '2026-11-16',
  keywords: 'kaynak mukavemet hesabı, köşe kaynağı hesabı, EN 1993-1-8 kaynak hesabı, kaynak dikişi dayanımı, basitleştirilmiş yöntem kaynak, fillet weld strength calculation, Schweißnahtberechnung',
  related: ['kose-kaynagi-a-olcusu', 'celik-konstruksiyon-imalat', 'wps-nedir', 'iso-5817-kalite-seviyeleri'],
  tr: {
    title: 'Kaynak Dikişi Mukavemet Hesabı: EN 1993-1-8 ile Köşe ve Alın Kaynağı',
    meta: 'Köşe kaynağı mukavemeti nasıl hesaplanır? EN 1993-1-8 basitleştirilmiş ve yönsel yöntem, βw korelasyon katsayısı, sayısal örnek, alın kaynağı, uzun bağlantılar ve tipik hesap hataları.',
    og: 'Kaynak Dikişi Mukavemet Hesabı',
    tag: 'Tasarım · Hesap',
    h1: 'Kaynak Dikişi Mukavemet Hesabı: EN 1993-1-8 ile Köşe ve Alın Kaynağı',
    crumb: 'Kaynak Mukavemet Hesabı',
    read: '7 dk okuma',
    body: `
<p>Bir bağlantının kaynak ölçüsü çoğu zaman tecrübeyle seçilir; ancak taşıyıcı yapılarda bu ölçünün hesapla doğrulanması gerekir. Avrupa'da çelik yapılar için başvurulan standart <strong>EN 1993-1-8</strong> (Eurocode 3, bağlantılar) bölümüdür. Bu yazıda köşe kaynağı hesabının mantığını, iki yöntemi ve basit bir sayısal örneği anlatıyoruz. Amaç tasarımcının yerine geçmek değil, çizimdeki kaynak ölçüsünün nereden geldiğini anlaşılır kılmaktır.</p>
<h2>Temel Büyüklükler</h2>
<ul>
<li><strong>a:</strong> Köşe kaynağının boğaz kalınlığı (bkz. <a href="kose-kaynagi-a-olcusu.html">a ölçüsü rehberi</a>).</li>
<li><strong>L<sub>w</sub>:</strong> Etkin kaynak uzunluğu. Krater ve başlangıç kusurları nedeniyle tam boyutta olmayan uçlar hesaba katılmaz.</li>
<li><strong>f<sub>u</sub>:</strong> Zayıf olan ana malzemenin nominal çekme dayanımı.</li>
<li><strong>β<sub>w</sub>:</strong> Korelasyon katsayısı. EN 1993-1-8'de S235 için 0,80, S275 için 0,85, S355 için 0,90, S420 ve S460 için 1,0 alınır.</li>
<li><strong>γ<sub>M2</sub>:</strong> Kaynaklar için kısmi güvenlik katsayısı; önerilen değer 1,25'tir (ulusal ek farklı değer verebilir).</li>
</ul>
<h2>Yöntem 1: Basitleştirilmiş Yöntem</h2>
<p>Kuvvetin yönünden bağımsız olarak kaynağın birim uzunluk başına taşıyabileceği kuvvet hesaplanır:</p>
<p><strong>F<sub>w,Rd</sub> = f<sub>vw,d</sub> × a</strong>, burada <strong>f<sub>vw,d</sub> = (f<sub>u</sub> / √3) / (β<sub>w</sub> × γ<sub>M2</sub>)</strong></p>
<p>Koşul: kaynağın birim uzunluğuna düşen tasarım kuvveti F<sub>w,Ed</sub> ≤ F<sub>w,Rd</sub>. Bu yöntem her zaman güvenli taraftadır ve kontrol için hızlıdır.</p>
<h2>Yöntem 2: Yönsel Yöntem</h2>
<p>Kuvvet boğaz düzlemindeki gerilme bileşenlerine ayrılır: boğaza dik normal gerilme σ<sub>⊥</sub>, boğaz düzleminde dikişe dik kayma τ<sub>⊥</sub> ve dikiş eksenine paralel kayma τ<sub>∥</sub>. İki koşul birlikte sağlanmalıdır:</p>
<ul>
<li>[σ<sub>⊥</sub>² + 3(τ<sub>⊥</sub>² + τ<sub>∥</sub>²)]<sup>0,5</sup> ≤ f<sub>u</sub> / (β<sub>w</sub> × γ<sub>M2</sub>)</li>
<li>σ<sub>⊥</sub> ≤ 0,9 × f<sub>u</sub> / γ<sub>M2</sub></li>
</ul>
<p>Kuvvet dikişe dik geldiğinde yönsel yöntem, basitleştirilmiş yönteme göre yaklaşık %20'ye varan ek kapasite gösterebilir. Bu fark, büyük serilerde kaynak ölçüsünü bir kademe küçültmeye yetebilir.</p>
<h2>Sayısal Örnek</h2>
<p>S355 bir lama, iki adet 200 mm boyunda köşe kaynağıyla bağlanıyor ve dikiş eksenine paralel 300 kN tasarım kuvveti taşıyor (eksantriklik yok sayılmıştır).</p>
<ol>
<li>f<sub>u</sub> = 490 MPa alınırsa (malzeme standardındaki minimum değer; kullanılacak değer ulusal ek ile kontrol edilmelidir): f<sub>vw,d</sub> = (490 / 1,732) / (0,90 × 1,25) ≈ <strong>251 MPa</strong>.</li>
<li>Toplam etkin uzunluk L<sub>w</sub> = 2 × 200 = 400 mm.</li>
<li>Gerekli a = 300 000 N / (251 N/mm² × 400 mm) ≈ <strong>3,0 mm</strong>.</li>
<li>Uçlardaki kayıplar ve imalat payı için <strong>a4</strong> seçmek makuldür. a6 yazmak hesaba göre yaklaşık iki kat fazla kapasite ve iki kattan fazla kaynak metali demektir.</li>
</ol>
<h2>Alın Kaynakları</h2>
<p>Tam nüfuziyetli alın kaynağında, kaynak metalinin dayanımı ana malzemeye eşit veya üzerinde ise (eşleşen veya üstün sarf malzeme), kaynağın dayanımı zayıf ana malzemenin dayanımına eşit kabul edilir ve ayrı hesap gerekmez. Kısmi nüfuziyetli alın kaynakları ise derin nüfuziyetli köşe kaynağı gibi hesaplanır; etkin boğaz kalınlığı, prosedür testiyle doğrulanan nüfuziyet kadardır.</p>
<h2>Uzun Bağlantılar</h2>
<p>Bindirme bağlantılarında kaynak boyu 150a'yı aştığında, gerilme dağılımı düzgün olmadığı için EN 1993-1-8 bir azaltma katsayısı (β<sub>Lw</sub>) uygular. Çok uzun dikişlerde kapasite doğrusal artmaz.</p>
<h2>Sık Yapılan Hatalar</h2>
<ul>
<li>a ve z ölçüsünü karıştırmak; z ile hesap yapıp a olarak yazmak.</li>
<li>Eksantrikliği ihmal etmek: konsol bağlantılarda kaynak grubu ek moment taşır.</li>
<li>Yüksek dayanımlı çeliklerde β<sub>w</sub> değerini S355 gibi almak.</li>
<li>Dinamik yüklü parçalarda statik hesapla yetinmek; yorulma ayrı bir kontroldür.</li>
<li>Amerikan çizimlerinde AWS D1.1 mantığını Eurocode ile karıştırmak. AWS'de köşe kaynağı için izin verilen gerilme, sarf malzeme dayanımının 0,30 katı üzerinden hesaplanır.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Kaynak ölçüsünün tasarım hesabı, ürünün tasarımcısının sorumluluğundadır. Biz teklif aşamasında çizimdeki ölçülerin sac kalınlıkları, WPS kapsamı ve istenen kalite seviyesiyle uyumunu kontrol eder, belirsiz veya gereğinden büyük görünen noktaları size yazılı olarak sorarız. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['Köşe kaynağı mukavemeti hangi standartla hesaplanır?', 'Avrupa’da çelik yapılar için EN 1993-1-8 kullanılır. Basitleştirilmiş yöntem veya yönsel yöntemle kaynağın birim uzunluk başına taşıyabileceği kuvvet bulunur.'],
      ['S355 için βw değeri nedir?', 'EN 1993-1-8’e göre S355 için korelasyon katsayısı βw = 0,90 alınır.'],
      ['Tam nüfuziyetli alın kaynağı hesaplanır mı?', 'Uygun sarf malzemeyle yapılan tam nüfuziyetli alın kaynağının dayanımı, zayıf ana malzemeye eşit kabul edilir; ayrı kaynak hesabı gerekmez.'],
      ['Yönsel yöntem neden daha fazla kapasite verir?', 'Gerilme bileşenlerini ayrı ayrı değerlendirdiği için özellikle dikişe dik gelen kuvvetlerde basitleştirilmiş yönteme göre daha az ihtiyatlıdır.']
    ],
    cta_h3: 'Çiziminizdeki kaynak ölçülerini gözden geçirelim',
    cta_p: 'Çiziminizi gönderin; kaynak ölçülerini WPS ve kalite seviyesiyle birlikte değerlendirip teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Weld Strength Calculation: Fillet and Butt Welds to EN 1993-1-8',
    meta: 'How is fillet weld strength calculated? EN 1993-1-8 simplified and directional methods, correlation factor βw, a worked example, butt welds, long joints and common calculation mistakes.',
    og: 'Weld Strength Calculation',
    tag: 'Design · Calculation',
    h1: 'Weld Strength Calculation: Fillet and Butt Welds to EN 1993-1-8',
    crumb: 'Weld Strength Calculation',
    read: '7 min read',
    body: `
<p>Weld sizes are often chosen by experience, but in load-bearing structures they need to be verified by calculation. In Europe, the reference for steel structures is <strong>EN 1993-1-8</strong> (Eurocode 3, joints). This article explains the logic of fillet weld design, the two methods and a simple worked example. The aim is not to replace the designer, but to make clear where the weld size on a drawing comes from.</p>
<h2>Key Quantities</h2>
<ul>
<li><strong>a:</strong> fillet weld throat thickness (see our <a href="kose-kaynagi-a-olcusu.html">a dimension guide</a>).</li>
<li><strong>L<sub>w</sub>:</strong> effective weld length. Ends that are not full size due to craters and starts are not counted.</li>
<li><strong>f<sub>u</sub>:</strong> nominal ultimate tensile strength of the weaker parent material.</li>
<li><strong>β<sub>w</sub>:</strong> correlation factor. EN 1993-1-8 gives 0.80 for S235, 0.85 for S275, 0.90 for S355 and 1.0 for S420 and S460.</li>
<li><strong>γ<sub>M2</sub>:</strong> partial safety factor for welds; the recommended value is 1.25 (the National Annex may differ).</li>
</ul>
<h2>Method 1: Simplified Method</h2>
<p>The force the weld can carry per unit length is calculated regardless of load direction:</p>
<p><strong>F<sub>w,Rd</sub> = f<sub>vw,d</sub> × a</strong>, where <strong>f<sub>vw,d</sub> = (f<sub>u</sub> / √3) / (β<sub>w</sub> × γ<sub>M2</sub>)</strong></p>
<p>Condition: design force per unit length F<sub>w,Ed</sub> ≤ F<sub>w,Rd</sub>. This method is always on the safe side and quick for checks.</p>
<h2>Method 2: Directional Method</h2>
<p>The force is resolved into stresses on the throat plane: normal stress σ<sub>⊥</sub>, transverse shear τ<sub>⊥</sub> and longitudinal shear τ<sub>∥</sub>. Both conditions must be met:</p>
<ul>
<li>[σ<sub>⊥</sub>² + 3(τ<sub>⊥</sub>² + τ<sub>∥</sub>²)]<sup>0.5</sup> ≤ f<sub>u</sub> / (β<sub>w</sub> × γ<sub>M2</sub>)</li>
<li>σ<sub>⊥</sub> ≤ 0.9 × f<sub>u</sub> / γ<sub>M2</sub></li>
</ul>
<p>For loads transverse to the weld, the directional method can show up to about 20% more capacity than the simplified method. On large series, that can be enough to reduce the weld by one size.</p>
<h2>Worked Example</h2>
<p>An S355 flat bar is connected by two 200 mm fillet welds and carries a 300 kN design force parallel to the weld axis (eccentricity ignored).</p>
<ol>
<li>Taking f<sub>u</sub> = 490 MPa (minimum value in the material standard; check the value to use against the National Annex): f<sub>vw,d</sub> = (490 / 1.732) / (0.90 × 1.25) ≈ <strong>251 MPa</strong>.</li>
<li>Total effective length L<sub>w</sub> = 2 × 200 = 400 mm.</li>
<li>Required a = 300,000 N / (251 N/mm² × 400 mm) ≈ <strong>3.0 mm</strong>.</li>
<li>Allowing for end losses and fabrication margin, <strong>a4</strong> is reasonable. Specifying a6 means about twice the required capacity and more than twice the weld metal.</li>
</ol>
<h2>Butt Welds</h2>
<p>For full-penetration butt welds made with matching or overmatching consumables, the weld strength is taken as equal to the weaker parent material and no separate calculation is needed. Partial-penetration butt welds are designed like deep-penetration fillet welds; the effective throat is the penetration verified by procedure testing.</p>
<h2>Long Joints</h2>
<p>In lap joints longer than 150a, EN 1993-1-8 applies a reduction factor (β<sub>Lw</sub>) because stress distribution is not uniform. Capacity does not grow linearly with very long welds.</p>
<h2>Common Mistakes</h2>
<ul>
<li>Mixing up a and z: calculating with z and writing it as a.</li>
<li>Ignoring eccentricity: in bracket joints the weld group also carries a moment.</li>
<li>Using the S355 β<sub>w</sub> value for higher-strength steels.</li>
<li>Relying on static design for dynamically loaded parts; fatigue is a separate check.</li>
<li>Mixing AWS D1.1 logic with Eurocode on US drawings. In AWS, allowable fillet weld stress is based on 0.30 times the filler metal strength.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> the design calculation of weld sizes is the product designer’s responsibility. At quotation we check that the sizes on the drawing are consistent with plate thicknesses, WPS range and the required quality level, and we raise unclear or apparently oversized points with you in writing. <a href="../cizime-gore-imalat.html">Build-to-print fabrication →</a></p></div>
`,
    faq: [
      ['Which standard is used to calculate fillet weld strength?', 'In Europe, EN 1993-1-8 for steel structures. The simplified or directional method gives the force the weld can carry per unit length.'],
      ['What is βw for S355?', 'Under EN 1993-1-8, the correlation factor for S355 is βw = 0.90.'],
      ['Do full-penetration butt welds need calculating?', 'A full-penetration butt weld made with suitable consumables is taken as equal in strength to the weaker parent material; no separate weld calculation is needed.'],
      ['Why does the directional method give more capacity?', 'It assesses the stress components separately, so it is less conservative than the simplified method, especially for transverse loads.']
    ],
    cta_h3: 'Let us review the weld sizes on your drawing',
    cta_p: 'Send your drawing; we will assess weld sizes together with WPS and quality level and prepare a quotation.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Schweißnahtberechnung: Kehl- und Stumpfnähte nach EN 1993-1-8',
    meta: 'Wie berechnet man die Tragfähigkeit einer Kehlnaht? Vereinfachtes und richtungsbezogenes Verfahren nach EN 1993-1-8, Korrelationsbeiwert βw, Rechenbeispiel, Stumpfnähte, lange Anschlüsse und typische Fehler.',
    og: 'Schweißnahtberechnung',
    tag: 'Konstruktion · Berechnung',
    h1: 'Schweißnahtberechnung: Kehl- und Stumpfnähte nach EN 1993-1-8',
    crumb: 'Schweißnahtberechnung',
    read: '7 Min. Lesezeit',
    body: `
<p>Nahtmaße werden oft nach Erfahrung gewählt; bei tragenden Konstruktionen müssen sie rechnerisch nachgewiesen werden. In Europa ist dafür <strong>EN 1993-1-8</strong> (Eurocode 3, Anschlüsse) maßgebend. Dieser Beitrag erklärt die Logik der Kehlnahtbemessung, die beiden Verfahren und ein einfaches Rechenbeispiel. Ziel ist nicht, den Tragwerksplaner zu ersetzen, sondern nachvollziehbar zu machen, woher das Nahtmaß in der Zeichnung kommt.</p>
<h2>Grundgrößen</h2>
<ul>
<li><strong>a:</strong> Kehlnahtdicke (siehe <a href="kose-kaynagi-a-olcusu.html">Leitfaden zum a-Maß</a>).</li>
<li><strong>L<sub>w</sub>:</strong> wirksame Nahtlänge. Enden, die wegen Endkrater und Ansatz nicht voll ausgebildet sind, werden nicht angesetzt.</li>
<li><strong>f<sub>u</sub>:</strong> Nennwert der Zugfestigkeit des schwächeren Grundwerkstoffs.</li>
<li><strong>β<sub>w</sub>:</strong> Korrelationsbeiwert. EN 1993-1-8 nennt 0,80 für S235, 0,85 für S275, 0,90 für S355 und 1,0 für S420 und S460.</li>
<li><strong>γ<sub>M2</sub>:</strong> Teilsicherheitsbeiwert für Schweißnähte; empfohlen 1,25 (der Nationale Anhang kann abweichen).</li>
</ul>
<h2>Verfahren 1: Vereinfachtes Verfahren</h2>
<p>Unabhängig von der Kraftrichtung wird die übertragbare Kraft je Längeneinheit berechnet:</p>
<p><strong>F<sub>w,Rd</sub> = f<sub>vw,d</sub> × a</strong>, mit <strong>f<sub>vw,d</sub> = (f<sub>u</sub> / √3) / (β<sub>w</sub> × γ<sub>M2</sub>)</strong></p>
<p>Nachweis: F<sub>w,Ed</sub> ≤ F<sub>w,Rd</sub>. Das Verfahren liegt stets auf der sicheren Seite und eignet sich für schnelle Kontrollen.</p>
<h2>Verfahren 2: Richtungsbezogenes Verfahren</h2>
<p>Die Kraft wird in Spannungen in der Kehlnahtfläche zerlegt: Normalspannung σ<sub>⊥</sub>, Schubspannung quer τ<sub>⊥</sub> und längs τ<sub>∥</sub>. Beide Bedingungen sind einzuhalten:</p>
<ul>
<li>[σ<sub>⊥</sub>² + 3(τ<sub>⊥</sub>² + τ<sub>∥</sub>²)]<sup>0,5</sup> ≤ f<sub>u</sub> / (β<sub>w</sub> × γ<sub>M2</sub>)</li>
<li>σ<sub>⊥</sub> ≤ 0,9 × f<sub>u</sub> / γ<sub>M2</sub></li>
</ul>
<p>Bei Kräften quer zur Naht kann das richtungsbezogene Verfahren bis zu etwa 20 % mehr Tragfähigkeit ergeben. In großen Serien reicht das oft, um das Nahtmaß eine Stufe zu verringern.</p>
<h2>Rechenbeispiel</h2>
<p>Ein Flachstahl aus S355 ist mit zwei Kehlnähten von je 200 mm angeschlossen und überträgt 300 kN Bemessungskraft parallel zur Nahtachse (Exzentrizität vernachlässigt).</p>
<ol>
<li>Mit f<sub>u</sub> = 490 MPa (Mindestwert der Werkstoffnorm; anzusetzender Wert nach Nationalem Anhang prüfen): f<sub>vw,d</sub> = (490 / 1,732) / (0,90 × 1,25) ≈ <strong>251 MPa</strong>.</li>
<li>Wirksame Gesamtlänge L<sub>w</sub> = 2 × 200 = 400 mm.</li>
<li>Erforderliches a = 300 000 N / (251 N/mm² × 400 mm) ≈ <strong>3,0 mm</strong>.</li>
<li>Mit Endverlusten und Fertigungsreserve ist <strong>a4</strong> sinnvoll. a6 bedeutet etwa die doppelte erforderliche Tragfähigkeit und mehr als das doppelte Schweißgut.</li>
</ol>
<h2>Stumpfnähte</h2>
<p>Bei durchgeschweißten Stumpfnähten mit artgleichem oder höherfestem Zusatzwerkstoff gilt die Nahtfestigkeit als gleich der des schwächeren Grundwerkstoffs; ein gesonderter Nachweis entfällt. Nicht durchgeschweißte Stumpfnähte werden wie Kehlnähte mit tiefem Einbrand bemessen; die wirksame Nahtdicke ist der durch Verfahrensprüfung nachgewiesene Einbrand.</p>
<h2>Lange Anschlüsse</h2>
<p>Bei überlappten Anschlüssen mit Nahtlängen über 150a setzt EN 1993-1-8 einen Abminderungsbeiwert (β<sub>Lw</sub>) an, da die Spannungsverteilung ungleichmäßig ist. Die Tragfähigkeit wächst bei sehr langen Nähten nicht linear.</p>
<h2>Häufige Fehler</h2>
<ul>
<li>a- und z-Maß verwechseln: mit z rechnen und als a angeben.</li>
<li>Exzentrizität vernachlässigen: bei Konsolanschlüssen trägt die Nahtgruppe zusätzlich ein Moment.</li>
<li>Für höherfeste Stähle den β<sub>w</sub>-Wert von S355 verwenden.</li>
<li>Bei dynamisch belasteten Bauteilen nur statisch nachweisen; Ermüdung ist ein eigener Nachweis.</li>
<li>Auf US-Zeichnungen AWS-D1.1-Logik mit Eurocode mischen. Bei AWS bezieht sich die zulässige Kehlnahtspannung auf das 0,30-Fache der Festigkeit des Zusatzwerkstoffs.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Die Bemessung der Nahtmaße liegt in der Verantwortung des Produktkonstrukteurs. Im Angebot prüfen wir, ob die Maße der Zeichnung zu Blechdicken, WPS-Geltungsbereich und geforderter Bewertungsgruppe passen, und fragen unklare oder überdimensioniert wirkende Stellen schriftlich nach. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Nach welcher Norm wird die Kehlnaht berechnet?', 'In Europa für Stahlbauten nach EN 1993-1-8. Das vereinfachte oder das richtungsbezogene Verfahren liefert die übertragbare Kraft je Längeneinheit.'],
      ['Welcher βw-Wert gilt für S355?', 'Nach EN 1993-1-8 ist für S355 der Korrelationsbeiwert βw = 0,90.'],
      ['Müssen durchgeschweißte Stumpfnähte berechnet werden?', 'Eine durchgeschweißte Stumpfnaht mit geeignetem Zusatzwerkstoff gilt als so tragfähig wie der schwächere Grundwerkstoff; ein eigener Nahtnachweis entfällt.'],
      ['Warum ergibt das richtungsbezogene Verfahren mehr Tragfähigkeit?', 'Es bewertet die Spannungskomponenten einzeln und ist daher, besonders bei Querkräften, weniger konservativ als das vereinfachte Verfahren.']
    ],
    cta_h3: 'Wir prüfen die Nahtmaße Ihrer Zeichnung',
    cta_p: 'Senden Sie Ihre Zeichnung; wir bewerten die Nahtmaße mit WPS und Bewertungsgruppe und erstellen ein Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Cálculo de resistencia de soldaduras: en ángulo y a tope según EN 1993-1-8',
    meta: 'Cómo se calcula la resistencia de una soldadura en ángulo: método simplificado y direccional de la EN 1993-1-8, factor de correlación βw, ejemplo numérico, soldaduras a tope, uniones largas y errores habituales.',
    og: 'Cálculo de resistencia de soldaduras',
    tag: 'Diseño · Cálculo',
    h1: 'Cálculo de resistencia de soldaduras: en ángulo y a tope según EN 1993-1-8',
    crumb: 'Cálculo de soldaduras',
    read: '7 min de lectura',
    body: `
<p>El tamaño de la soldadura se elige a menudo por experiencia, pero en estructuras portantes debe comprobarse por cálculo. En Europa la referencia para estructuras de acero es la <strong>EN 1993-1-8</strong> (Eurocódigo 3, uniones). Este artículo explica la lógica del cálculo de soldaduras en ángulo, los dos métodos y un ejemplo sencillo. No pretende sustituir al proyectista, sino aclarar de dónde sale el tamaño de soldadura del plano.</p>
<h2>Magnitudes básicas</h2>
<ul>
<li><strong>a:</strong> espesor de garganta (ver nuestra <a href="kose-kaynagi-a-olcusu.html">guía de la dimensión a</a>).</li>
<li><strong>L<sub>w</sub>:</strong> longitud eficaz. No se cuentan los extremos que no alcanzan el tamaño completo por cráteres e inicios.</li>
<li><strong>f<sub>u</sub>:</strong> resistencia a tracción nominal del material base más débil.</li>
<li><strong>β<sub>w</sub>:</strong> factor de correlación. La EN 1993-1-8 da 0,80 para S235, 0,85 para S275, 0,90 para S355 y 1,0 para S420 y S460.</li>
<li><strong>γ<sub>M2</sub>:</strong> coeficiente parcial para soldaduras; valor recomendado 1,25 (el Anejo Nacional puede variar).</li>
</ul>
<h2>Método 1: simplificado</h2>
<p>Se calcula la fuerza por unidad de longitud que puede transmitir la soldadura, sin importar la dirección de la carga:</p>
<p><strong>F<sub>w,Rd</sub> = f<sub>vw,d</sub> × a</strong>, con <strong>f<sub>vw,d</sub> = (f<sub>u</sub> / √3) / (β<sub>w</sub> × γ<sub>M2</sub>)</strong></p>
<p>Condición: F<sub>w,Ed</sub> ≤ F<sub>w,Rd</sub>. Siempre queda del lado de la seguridad y es rápido para comprobaciones.</p>
<h2>Método 2: direccional</h2>
<p>La fuerza se descompone en tensiones sobre el plano de garganta: normal σ<sub>⊥</sub>, tangencial perpendicular τ<sub>⊥</sub> y tangencial paralela τ<sub>∥</sub>. Deben cumplirse ambas condiciones:</p>
<ul>
<li>[σ<sub>⊥</sub>² + 3(τ<sub>⊥</sub>² + τ<sub>∥</sub>²)]<sup>0,5</sup> ≤ f<sub>u</sub> / (β<sub>w</sub> × γ<sub>M2</sub>)</li>
<li>σ<sub>⊥</sub> ≤ 0,9 × f<sub>u</sub> / γ<sub>M2</sub></li>
</ul>
<p>Con cargas transversales al cordón, el método direccional puede dar hasta un 20 % más de capacidad. En series grandes, eso puede bastar para reducir un tamaño de soldadura.</p>
<h2>Ejemplo numérico</h2>
<p>Una pletina de S355 se une con dos soldaduras en ángulo de 200 mm y transmite 300 kN de cálculo paralelos al eje del cordón (sin excentricidad).</p>
<ol>
<li>Con f<sub>u</sub> = 490 MPa (mínimo de la norma de material; comprobar el valor a usar según el Anejo Nacional): f<sub>vw,d</sub> = (490 / 1,732) / (0,90 × 1,25) ≈ <strong>251 MPa</strong>.</li>
<li>Longitud eficaz total L<sub>w</sub> = 2 × 200 = 400 mm.</li>
<li>a necesaria = 300 000 N / (251 N/mm² × 400 mm) ≈ <strong>3,0 mm</strong>.</li>
<li>Considerando pérdidas en extremos y margen de fabricación, <strong>a4</strong> es razonable. Indicar a6 supone el doble de capacidad necesaria y más del doble de metal aportado.</li>
</ol>
<h2>Soldaduras a tope</h2>
<p>En soldaduras a tope de penetración completa con consumible de resistencia igual o superior, la resistencia se toma igual a la del material base más débil y no hace falta cálculo aparte. Las de penetración parcial se calculan como soldaduras en ángulo de penetración profunda; la garganta eficaz es la penetración verificada por ensayo de procedimiento.</p>
<h2>Uniones largas</h2>
<p>En uniones a solape con longitudes superiores a 150a, la EN 1993-1-8 aplica un factor reductor (β<sub>Lw</sub>) porque la distribución de tensiones no es uniforme. La capacidad no crece linealmente con cordones muy largos.</p>
<h2>Errores habituales</h2>
<ul>
<li>Confundir a y z: calcular con z y escribirlo como a.</li>
<li>Ignorar la excentricidad: en ménsulas el grupo de soldaduras también resiste un momento.</li>
<li>Usar el β<sub>w</sub> de S355 en aceros de mayor resistencia.</li>
<li>Quedarse con el cálculo estático en piezas con carga dinámica; la fatiga es una comprobación aparte.</li>
<li>Mezclar la lógica AWS D1.1 con el Eurocódigo en planos estadounidenses. En AWS, la tensión admisible en ángulo se basa en 0,30 veces la resistencia del metal de aporte.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> el cálculo de los tamaños de soldadura es responsabilidad del proyectista del producto. En la oferta comprobamos que las dimensiones del plano son coherentes con los espesores, el rango de las WPS y el nivel de calidad requerido, y le planteamos por escrito los puntos poco claros o aparentemente sobredimensionados. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Con qué norma se calcula una soldadura en ángulo?', 'En Europa, para estructuras de acero, con la EN 1993-1-8. El método simplificado o el direccional dan la fuerza por unidad de longitud.'],
      ['¿Cuál es βw para S355?', 'Según la EN 1993-1-8, el factor de correlación para S355 es βw = 0,90.'],
      ['¿Hay que calcular las soldaduras a tope de penetración completa?', 'Con consumible adecuado, su resistencia se considera igual a la del material base más débil; no hace falta cálculo de soldadura aparte.'],
      ['¿Por qué el método direccional da más capacidad?', 'Evalúa por separado las componentes de tensión, por lo que es menos conservador que el simplificado, sobre todo con cargas transversales.']
    ],
    cta_h3: 'Revisamos las dimensiones de soldadura de su plano',
    cta_p: 'Envíenos su plano; evaluamos las soldaduras junto con WPS y nivel de calidad y preparamos la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Calcul de résistance des soudures : soudures d’angle et bout à bout selon l’EN 1993-1-8',
    meta: 'Comment calculer la résistance d’une soudure d’angle ? Méthodes simplifiée et directionnelle de l’EN 1993-1-8, facteur de corrélation βw, exemple chiffré, soudures bout à bout, assemblages longs et erreurs courantes.',
    og: 'Calcul de résistance des soudures',
    tag: 'Conception · Calcul',
    h1: 'Calcul de résistance des soudures : angle et bout à bout selon l’EN 1993-1-8',
    crumb: 'Calcul des soudures',
    read: '7 min de lecture',
    body: `
<p>La taille d’une soudure est souvent choisie par expérience, mais dans les structures porteuses elle doit être vérifiée par le calcul. En Europe, la référence pour les structures en acier est l’<strong>EN 1993-1-8</strong> (Eurocode 3, assemblages). Cet article présente la logique du calcul des soudures d’angle, les deux méthodes et un exemple simple. Il ne remplace pas le concepteur, mais aide à comprendre d’où vient la cote de soudure du plan.</p>
<h2>Grandeurs de base</h2>
<ul>
<li><strong>a :</strong> épaisseur de gorge (voir notre <a href="kose-kaynagi-a-olcusu.html">guide de la cote a</a>).</li>
<li><strong>L<sub>w</sub> :</strong> longueur efficace. Les extrémités incomplètes à cause des cratères et amorçages ne sont pas comptées.</li>
<li><strong>f<sub>u</sub> :</strong> résistance à la traction nominale du matériau de base le plus faible.</li>
<li><strong>β<sub>w</sub> :</strong> facteur de corrélation. L’EN 1993-1-8 donne 0,80 pour S235, 0,85 pour S275, 0,90 pour S355 et 1,0 pour S420 et S460.</li>
<li><strong>γ<sub>M2</sub> :</strong> coefficient partiel pour les soudures ; valeur recommandée 1,25 (l’Annexe nationale peut différer).</li>
</ul>
<h2>Méthode 1 : simplifiée</h2>
<p>On calcule l’effort transmissible par unité de longueur, quelle que soit la direction de la charge :</p>
<p><strong>F<sub>w,Rd</sub> = f<sub>vw,d</sub> × a</strong>, avec <strong>f<sub>vw,d</sub> = (f<sub>u</sub> / √3) / (β<sub>w</sub> × γ<sub>M2</sub>)</strong></p>
<p>Condition : F<sub>w,Ed</sub> ≤ F<sub>w,Rd</sub>. Cette méthode est toujours sécuritaire et rapide pour les vérifications.</p>
<h2>Méthode 2 : directionnelle</h2>
<p>L’effort est décomposé en contraintes sur le plan de gorge : normale σ<sub>⊥</sub>, tangentielle perpendiculaire τ<sub>⊥</sub> et tangentielle parallèle τ<sub>∥</sub>. Les deux conditions doivent être satisfaites :</p>
<ul>
<li>[σ<sub>⊥</sub>² + 3(τ<sub>⊥</sub>² + τ<sub>∥</sub>²)]<sup>0,5</sup> ≤ f<sub>u</sub> / (β<sub>w</sub> × γ<sub>M2</sub>)</li>
<li>σ<sub>⊥</sub> ≤ 0,9 × f<sub>u</sub> / γ<sub>M2</sub></li>
</ul>
<p>Pour des efforts transversaux au cordon, la méthode directionnelle peut donner jusqu’à environ 20 % de capacité en plus. Sur de grandes séries, cela suffit parfois à réduire la soudure d’une taille.</p>
<h2>Exemple chiffré</h2>
<p>Un plat en S355 est assemblé par deux soudures d’angle de 200 mm et transmet 300 kN de calcul parallèlement à l’axe du cordon (excentricité négligée).</p>
<ol>
<li>Avec f<sub>u</sub> = 490 MPa (valeur minimale de la norme matériau ; vérifier la valeur à retenir selon l’Annexe nationale) : f<sub>vw,d</sub> = (490 / 1,732) / (0,90 × 1,25) ≈ <strong>251 MPa</strong>.</li>
<li>Longueur efficace totale L<sub>w</sub> = 2 × 200 = 400 mm.</li>
<li>a nécessaire = 300 000 N / (251 N/mm² × 400 mm) ≈ <strong>3,0 mm</strong>.</li>
<li>Compte tenu des pertes aux extrémités et d’une marge de fabrication, <strong>a4</strong> est raisonnable. Indiquer a6 revient à doubler la capacité nécessaire et à plus que doubler le métal déposé.</li>
</ol>
<h2>Soudures bout à bout</h2>
<p>Pour les soudures bout à bout à pleine pénétration réalisées avec un produit d’apport de résistance égale ou supérieure, la résistance est prise égale à celle du matériau de base le plus faible ; aucun calcul séparé n’est nécessaire. Les soudures à pénétration partielle se calculent comme des soudures d’angle à pénétration profonde ; la gorge efficace est la pénétration vérifiée par qualification.</p>
<h2>Assemblages longs</h2>
<p>Pour les assemblages à recouvrement de longueur supérieure à 150a, l’EN 1993-1-8 applique un facteur de réduction (β<sub>Lw</sub>) car la répartition des contraintes n’est pas uniforme. La capacité n’augmente pas linéairement avec des cordons très longs.</p>
<h2>Erreurs courantes</h2>
<ul>
<li>Confondre a et z : calculer avec z et l’inscrire comme a.</li>
<li>Négliger l’excentricité : dans les consoles, le groupe de soudures reprend aussi un moment.</li>
<li>Utiliser le β<sub>w</sub> du S355 pour des aciers plus résistants.</li>
<li>Se contenter d’un calcul statique pour des pièces sous charges dynamiques ; la fatigue est une vérification distincte.</li>
<li>Mélanger la logique AWS D1.1 et l’Eurocode sur des plans américains. En AWS, la contrainte admissible d’une soudure d’angle se fonde sur 0,30 fois la résistance du métal d’apport.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> le calcul des tailles de soudure relève du concepteur du produit. Lors de l’offre, nous vérifions la cohérence des cotes du plan avec les épaisseurs, le domaine des DMOS et le niveau de qualité demandé, et nous vous signalons par écrit les points flous ou apparemment surdimensionnés. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Quelle norme pour calculer une soudure d’angle ?', 'En Europe, l’EN 1993-1-8 pour les structures en acier. La méthode simplifiée ou directionnelle donne l’effort transmissible par unité de longueur.'],
      ['Quelle valeur de βw pour le S355 ?', 'Selon l’EN 1993-1-8, le facteur de corrélation pour le S355 est βw = 0,90.'],
      ['Faut-il calculer les soudures bout à bout à pleine pénétration ?', 'Avec un produit d’apport adapté, leur résistance est prise égale à celle du matériau de base le plus faible ; pas de calcul de soudure séparé.'],
      ['Pourquoi la méthode directionnelle donne-t-elle plus de capacité ?', 'Elle traite séparément les composantes de contrainte et est donc moins conservatrice que la méthode simplifiée, surtout pour les efforts transversaux.']
    ],
    cta_h3: 'Nous vérifions les cotes de soudure de votre plan',
    cta_p: 'Envoyez votre plan ; nous évaluons les soudures avec DMOS et niveau de qualité et préparons l’offre.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Calcolo di resistenza delle saldature: d’angolo e testa a testa secondo EN 1993-1-8',
    meta: 'Come si calcola la resistenza di una saldatura d’angolo? Metodo semplificato e direzionale della EN 1993-1-8, fattore di correlazione βw, esempio numerico, saldature testa a testa, giunti lunghi ed errori tipici.',
    og: 'Calcolo di resistenza delle saldature',
    tag: 'Progettazione · Calcolo',
    h1: 'Calcolo di resistenza delle saldature: d’angolo e testa a testa secondo EN 1993-1-8',
    crumb: 'Calcolo saldature',
    read: '7 min di lettura',
    body: `
<p>La dimensione della saldatura si sceglie spesso per esperienza, ma nelle strutture portanti va verificata con il calcolo. In Europa il riferimento per le strutture in acciaio è la <strong>EN 1993-1-8</strong> (Eurocodice 3, collegamenti). Questo articolo illustra la logica del calcolo delle saldature d’angolo, i due metodi e un semplice esempio. Non sostituisce il progettista, ma aiuta a capire da dove nasce la quota di saldatura a disegno.</p>
<h2>Grandezze di base</h2>
<ul>
<li><strong>a:</strong> sezione di gola (vedi la nostra <a href="kose-kaynagi-a-olcusu.html">guida alla quota a</a>).</li>
<li><strong>L<sub>w</sub>:</strong> lunghezza efficace. Non si considerano le estremità incomplete per crateri e inneschi.</li>
<li><strong>f<sub>u</sub>:</strong> resistenza a trazione nominale del materiale base più debole.</li>
<li><strong>β<sub>w</sub>:</strong> fattore di correlazione. La EN 1993-1-8 indica 0,80 per S235, 0,85 per S275, 0,90 per S355 e 1,0 per S420 e S460.</li>
<li><strong>γ<sub>M2</sub>:</strong> coefficiente parziale per le saldature; valore raccomandato 1,25 (l’Appendice nazionale può differire).</li>
</ul>
<h2>Metodo 1: semplificato</h2>
<p>Si calcola la forza trasmissibile per unità di lunghezza, indipendentemente dalla direzione del carico:</p>
<p><strong>F<sub>w,Rd</sub> = f<sub>vw,d</sub> × a</strong>, con <strong>f<sub>vw,d</sub> = (f<sub>u</sub> / √3) / (β<sub>w</sub> × γ<sub>M2</sub>)</strong></p>
<p>Verifica: F<sub>w,Ed</sub> ≤ F<sub>w,Rd</sub>. Il metodo è sempre a favore di sicurezza e veloce per i controlli.</p>
<h2>Metodo 2: direzionale</h2>
<p>La forza si scompone in tensioni sul piano di gola: normale σ<sub>⊥</sub>, tangenziale perpendicolare τ<sub>⊥</sub> e tangenziale parallela τ<sub>∥</sub>. Devono essere soddisfatte entrambe le condizioni:</p>
<ul>
<li>[σ<sub>⊥</sub>² + 3(τ<sub>⊥</sub>² + τ<sub>∥</sub>²)]<sup>0,5</sup> ≤ f<sub>u</sub> / (β<sub>w</sub> × γ<sub>M2</sub>)</li>
<li>σ<sub>⊥</sub> ≤ 0,9 × f<sub>u</sub> / γ<sub>M2</sub></li>
</ul>
<p>Con carichi trasversali al cordone, il metodo direzionale può dare fino a circa il 20 % di capacità in più. In grandi serie può bastare per ridurre la saldatura di una taglia.</p>
<h2>Esempio numerico</h2>
<p>Un piatto in S355 è collegato con due saldature d’angolo da 200 mm e trasmette 300 kN di progetto paralleli all’asse del cordone (eccentricità trascurata).</p>
<ol>
<li>Con f<sub>u</sub> = 490 MPa (valore minimo della norma di materiale; verificare il valore da usare secondo l’Appendice nazionale): f<sub>vw,d</sub> = (490 / 1,732) / (0,90 × 1,25) ≈ <strong>251 MPa</strong>.</li>
<li>Lunghezza efficace totale L<sub>w</sub> = 2 × 200 = 400 mm.</li>
<li>a necessaria = 300 000 N / (251 N/mm² × 400 mm) ≈ <strong>3,0 mm</strong>.</li>
<li>Considerando perdite alle estremità e margine di fabbricazione, <strong>a4</strong> è ragionevole. Indicare a6 significa il doppio della capacità necessaria e più del doppio del metallo depositato.</li>
</ol>
<h2>Saldature testa a testa</h2>
<p>Per saldature testa a testa a piena penetrazione con consumabile di resistenza pari o superiore, la resistenza si assume pari a quella del materiale base più debole e non serve un calcolo separato. Quelle a penetrazione parziale si calcolano come saldature d’angolo a penetrazione profonda; la gola efficace è la penetrazione verificata con prova di procedimento.</p>
<h2>Giunti lunghi</h2>
<p>Nei giunti a sovrapposizione con lunghezze oltre 150a, la EN 1993-1-8 applica un fattore riduttivo (β<sub>Lw</sub>) perché la distribuzione delle tensioni non è uniforme. Con cordoni molto lunghi la capacità non cresce linearmente.</p>
<h2>Errori tipici</h2>
<ul>
<li>Confondere a e z: calcolare con z e indicarlo come a.</li>
<li>Trascurare l’eccentricità: nelle mensole il gruppo di saldature porta anche un momento.</li>
<li>Usare il β<sub>w</sub> dell’S355 per acciai più resistenti.</li>
<li>Limitarsi al calcolo statico per pezzi a carico dinamico; la fatica è una verifica a parte.</li>
<li>Mescolare la logica AWS D1.1 con l’Eurocodice su disegni americani. In AWS la tensione ammissibile della saldatura d’angolo si basa su 0,30 volte la resistenza del metallo d’apporto.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> il calcolo delle dimensioni di saldatura è responsabilità del progettista del prodotto. In fase di offerta verifichiamo che le quote del disegno siano coerenti con spessori, campo delle WPS e livello di qualità richiesto, e vi segnaliamo per iscritto i punti poco chiari o apparentemente sovradimensionati. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Con quale norma si calcola una saldatura d’angolo?', 'In Europa, per le strutture in acciaio, con la EN 1993-1-8. Il metodo semplificato o direzionale fornisce la forza trasmissibile per unità di lunghezza.'],
      ['Qual è il βw per l’S355?', 'Secondo la EN 1993-1-8, il fattore di correlazione per l’S355 è βw = 0,90.'],
      ['Le saldature testa a testa a piena penetrazione vanno calcolate?', 'Con consumabile adatto, la loro resistenza è pari a quella del materiale base più debole; non serve un calcolo separato della saldatura.'],
      ['Perché il metodo direzionale dà più capacità?', 'Valuta separatamente le componenti di tensione ed è quindi meno conservativo del semplificato, soprattutto con carichi trasversali.']
    ],
    cta_h3: 'Verifichiamo le quote di saldatura del vostro disegno',
    cta_p: 'Inviateci il disegno; valutiamo le saldature insieme a WPS e livello di qualità e prepariamo l’offerta.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Sterkteberekening van lassen: hoek- en stompe lassen volgens EN 1993-1-8',
    meta: 'Hoe bereken je de sterkte van een hoeklas? Vereenvoudigde en richtingsafhankelijke methode uit EN 1993-1-8, correlatiefactor βw, rekenvoorbeeld, stompe lassen, lange verbindingen en veelgemaakte fouten.',
    og: 'Sterkteberekening van lassen',
    tag: 'Ontwerp · Berekening',
    h1: 'Sterkteberekening van lassen: hoek- en stompe lassen volgens EN 1993-1-8',
    crumb: 'Lasberekening',
    read: '7 min lezen',
    body: `
<p>Lasmaten worden vaak op ervaring gekozen, maar bij dragende constructies moeten ze met een berekening worden onderbouwd. In Europa is <strong>EN 1993-1-8</strong> (Eurocode 3, verbindingen) de referentie voor staalconstructies. Dit artikel legt de logica van hoeklasberekening uit, de twee methoden en een eenvoudig rekenvoorbeeld. Het vervangt de constructeur niet, maar maakt duidelijk waar de lasmaat op de tekening vandaan komt.</p>
<h2>Basisgrootheden</h2>
<ul>
<li><strong>a:</strong> keelhoogte van de hoeklas (zie onze <a href="kose-kaynagi-a-olcusu.html">gids over de a-maat</a>).</li>
<li><strong>L<sub>w</sub>:</strong> effectieve laslengte. Uiteinden die door kraters en aanzetten niet op volle maat zijn, tellen niet mee.</li>
<li><strong>f<sub>u</sub>:</strong> nominale treksterkte van het zwakste basismateriaal.</li>
<li><strong>β<sub>w</sub>:</strong> correlatiefactor. EN 1993-1-8 geeft 0,80 voor S235, 0,85 voor S275, 0,90 voor S355 en 1,0 voor S420 en S460.</li>
<li><strong>γ<sub>M2</sub>:</strong> partiële factor voor lassen; aanbevolen waarde 1,25 (de nationale bijlage kan afwijken).</li>
</ul>
<h2>Methode 1: vereenvoudigd</h2>
<p>De kracht die de las per lengte-eenheid kan overbrengen wordt berekend, ongeacht de belastingsrichting:</p>
<p><strong>F<sub>w,Rd</sub> = f<sub>vw,d</sub> × a</strong>, met <strong>f<sub>vw,d</sub> = (f<sub>u</sub> / √3) / (β<sub>w</sub> × γ<sub>M2</sub>)</strong></p>
<p>Voorwaarde: F<sub>w,Ed</sub> ≤ F<sub>w,Rd</sub>. Deze methode is altijd veilig en snel voor controles.</p>
<h2>Methode 2: richtingsafhankelijk</h2>
<p>De kracht wordt ontbonden in spanningen op het keelvlak: normaalspanning σ<sub>⊥</sub>, schuifspanning loodrecht τ<sub>⊥</sub> en evenwijdig τ<sub>∥</sub>. Aan beide voorwaarden moet worden voldaan:</p>
<ul>
<li>[σ<sub>⊥</sub>² + 3(τ<sub>⊥</sub>² + τ<sub>∥</sub>²)]<sup>0,5</sup> ≤ f<sub>u</sub> / (β<sub>w</sub> × γ<sub>M2</sub>)</li>
<li>σ<sub>⊥</sub> ≤ 0,9 × f<sub>u</sub> / γ<sub>M2</sub></li>
</ul>
<p>Bij belasting dwars op de las kan de richtingsafhankelijke methode tot ongeveer 20 % meer capaciteit opleveren. Bij grote series kan dat genoeg zijn om de las één maat kleiner te maken.</p>
<h2>Rekenvoorbeeld</h2>
<p>Een strip van S355 is met twee hoeklassen van 200 mm verbonden en draagt 300 kN rekenkracht evenwijdig aan de lasas (excentriciteit verwaarloosd).</p>
<ol>
<li>Met f<sub>u</sub> = 490 MPa (minimumwaarde uit de materiaalnorm; controleer de te gebruiken waarde met de nationale bijlage): f<sub>vw,d</sub> = (490 / 1,732) / (0,90 × 1,25) ≈ <strong>251 MPa</strong>.</li>
<li>Totale effectieve lengte L<sub>w</sub> = 2 × 200 = 400 mm.</li>
<li>Benodigde a = 300 000 N / (251 N/mm² × 400 mm) ≈ <strong>3,0 mm</strong>.</li>
<li>Met eindverliezen en fabricagemarge is <strong>a4</strong> redelijk. a6 voorschrijven betekent ongeveer twee keer de benodigde capaciteit en meer dan twee keer zoveel lasmetaal.</li>
</ol>
<h2>Stompe lassen</h2>
<p>Bij volledig doorgelaste stompe lassen met gelijkwaardig of sterker toevoegmateriaal wordt de lassterkte gelijk gesteld aan die van het zwakste basismateriaal; een aparte berekening is niet nodig. Gedeeltelijk doorgelaste stompe lassen worden berekend als hoeklassen met diepe inbranding; de effectieve keelhoogte is de met procedurekwalificatie aangetoonde inbranding.</p>
<h2>Lange verbindingen</h2>
<p>Bij overlapverbindingen langer dan 150a past EN 1993-1-8 een reductiefactor (β<sub>Lw</sub>) toe, omdat de spanningsverdeling niet gelijkmatig is. Bij zeer lange lassen groeit de capaciteit niet lineair.</p>
<h2>Veelgemaakte fouten</h2>
<ul>
<li>a en z verwarren: met z rekenen en het als a noteren.</li>
<li>Excentriciteit negeren: bij consoles draagt de lasgroep ook een moment.</li>
<li>De β<sub>w</sub> van S355 gebruiken voor hogesterktestaal.</li>
<li>Bij dynamisch belaste delen alleen statisch rekenen; vermoeiing is een aparte toets.</li>
<li>AWS D1.1-logica en Eurocode mengen bij Amerikaanse tekeningen. In AWS is de toelaatbare hoeklasspanning gebaseerd op 0,30 keer de sterkte van het toevoegmateriaal.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> de berekening van lasmaten is de verantwoordelijkheid van de productontwerper. Bij de offerte controleren we of de maten op de tekening passen bij plaatdiktes, WPS-bereik en het gevraagde kwaliteitsniveau, en leggen we onduidelijke of schijnbaar te grote punten schriftelijk aan u voor. <a href="../cizime-gore-imalat.html">Productie op tekening →</a></p></div>
`,
    faq: [
      ['Met welke norm wordt een hoeklas berekend?', 'In Europa voor staalconstructies met EN 1993-1-8. De vereenvoudigde of richtingsafhankelijke methode geeft de kracht per lengte-eenheid.'],
      ['Wat is βw voor S355?', 'Volgens EN 1993-1-8 is de correlatiefactor voor S355 βw = 0,90.'],
      ['Moeten volledig doorgelaste stompe lassen worden berekend?', 'Met geschikt toevoegmateriaal wordt hun sterkte gelijk gesteld aan die van het zwakste basismateriaal; een aparte lasberekening is niet nodig.'],
      ['Waarom geeft de richtingsafhankelijke methode meer capaciteit?', 'Ze beoordeelt de spanningscomponenten afzonderlijk en is daardoor minder conservatief dan de vereenvoudigde methode, vooral bij dwarsbelasting.']
    ],
    cta_h3: 'Wij controleren de lasmaten op uw tekening',
    cta_p: 'Stuur uw tekening; we beoordelen de lassen samen met WPS en kwaliteitsniveau en maken een offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Fasthetsberegning av sveis: kil- og buttsveis etter EN 1993-1-8',
    meta: 'Hvordan beregnes kapasiteten til en kilsveis? Forenklet og retningsavhengig metode i EN 1993-1-8, korrelasjonsfaktor βw, regneeksempel, buttsveis, lange forbindelser og vanlige feil.',
    og: 'Fasthetsberegning av sveis',
    tag: 'Konstruksjon · Beregning',
    h1: 'Fasthetsberegning av sveis: kil- og buttsveis etter EN 1993-1-8',
    crumb: 'Sveiseberegning',
    read: '7 min lesing',
    body: `
<p>Sveisemål velges ofte etter erfaring, men i bærende konstruksjoner må de dokumenteres med beregning. I Europa er <strong>EN 1993-1-8</strong> (Eurokode 3, forbindelser) referansen for stålkonstruksjoner. Denne artikkelen forklarer logikken i kilsveisberegning, de to metodene og et enkelt regneeksempel. Den erstatter ikke konstruktøren, men gjør det lettere å forstå hvor sveisemålet på tegningen kommer fra.</p>
<h2>Grunnstørrelser</h2>
<ul>
<li><strong>a:</strong> halsmål for kilsveisen (se vår <a href="kose-kaynagi-a-olcusu.html">veiledning om a-mål</a>).</li>
<li><strong>L<sub>w</sub>:</strong> effektiv sveiselengde. Ender som ikke har fullt mål på grunn av krater og start, regnes ikke med.</li>
<li><strong>f<sub>u</sub>:</strong> nominell strekkfasthet for det svakeste grunnmaterialet.</li>
<li><strong>β<sub>w</sub>:</strong> korrelasjonsfaktor. EN 1993-1-8 gir 0,80 for S235, 0,85 for S275, 0,90 for S355 og 1,0 for S420 og S460.</li>
<li><strong>γ<sub>M2</sub>:</strong> partialfaktor for sveis; anbefalt verdi 1,25 (det nasjonale tillegget kan avvike).</li>
</ul>
<h2>Metode 1: forenklet</h2>
<p>Kraften sveisen kan overføre per lengdeenhet beregnes uavhengig av lastretning:</p>
<p><strong>F<sub>w,Rd</sub> = f<sub>vw,d</sub> × a</strong>, der <strong>f<sub>vw,d</sub> = (f<sub>u</sub> / √3) / (β<sub>w</sub> × γ<sub>M2</sub>)</strong></p>
<p>Krav: F<sub>w,Ed</sub> ≤ F<sub>w,Rd</sub>. Metoden ligger alltid på sikker side og er rask for kontroller.</p>
<h2>Metode 2: retningsavhengig</h2>
<p>Kraften dekomponeres i spenninger i halsplanet: normalspenning σ<sub>⊥</sub>, skjærspenning normalt på sveisen τ<sub>⊥</sub> og parallelt τ<sub>∥</sub>. Begge krav må oppfylles:</p>
<ul>
<li>[σ<sub>⊥</sub>² + 3(τ<sub>⊥</sub>² + τ<sub>∥</sub>²)]<sup>0,5</sup> ≤ f<sub>u</sub> / (β<sub>w</sub> × γ<sub>M2</sub>)</li>
<li>σ<sub>⊥</sub> ≤ 0,9 × f<sub>u</sub> / γ<sub>M2</sub></li>
</ul>
<p>Ved last på tvers av sveisen kan den retningsavhengige metoden gi opptil om lag 20 % mer kapasitet. I store serier kan det være nok til å redusere sveisen ett trinn.</p>
<h2>Regneeksempel</h2>
<p>En flattstang i S355 er festet med to kilsveiser på 200 mm og overfører 300 kN dimensjonerende kraft parallelt med sveiseaksen (eksentrisitet sett bort fra).</p>
<ol>
<li>Med f<sub>u</sub> = 490 MPa (minsteverdi i materialstandarden; kontroller verdien som skal brukes mot det nasjonale tillegget): f<sub>vw,d</sub> = (490 / 1,732) / (0,90 × 1,25) ≈ <strong>251 MPa</strong>.</li>
<li>Samlet effektiv lengde L<sub>w</sub> = 2 × 200 = 400 mm.</li>
<li>Nødvendig a = 300 000 N / (251 N/mm² × 400 mm) ≈ <strong>3,0 mm</strong>.</li>
<li>Med endetap og produksjonsmargin er <strong>a4</strong> rimelig. Å angi a6 gir omtrent dobbel nødvendig kapasitet og mer enn dobbelt så mye sveisemetall.</li>
</ol>
<h2>Buttsveiser</h2>
<p>For gjennomsveiste buttsveiser med likeverdig eller sterkere tilsettmateriale regnes sveisens fasthet lik det svakeste grunnmaterialet, og egen beregning trengs ikke. Delvis gjennomsveiste buttsveiser beregnes som kilsveiser med dyp innbrenning; effektivt halsmål er innbrenningen dokumentert ved prosedyreprøving.</p>
<h2>Lange forbindelser</h2>
<p>I overlappforbindelser lengre enn 150a bruker EN 1993-1-8 en reduksjonsfaktor (β<sub>Lw</sub>) fordi spenningsfordelingen ikke er jevn. Kapasiteten øker ikke lineært med svært lange sveiser.</p>
<h2>Vanlige feil</h2>
<ul>
<li>Å blande a og z: regne med z og skrive det som a.</li>
<li>Å overse eksentrisitet: i konsollforbindelser tar sveisegruppen også et moment.</li>
<li>Å bruke β<sub>w</sub> for S355 på høyfaste stål.</li>
<li>Å nøye seg med statisk beregning for dynamisk belastede deler; utmatting er en egen kontroll.</li>
<li>Å blande AWS D1.1-logikk med Eurokode på amerikanske tegninger. I AWS baseres tillatt kilsveisspenning på 0,30 ganger tilsettmaterialets fasthet.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> dimensjonering av sveisemål er produktkonstruktørens ansvar. I tilbudsfasen kontrollerer vi at målene på tegningen stemmer med platetykkelser, WPS-område og ønsket kvalitetsnivå, og tar opp uklare eller tilsynelatende for store mål skriftlig med deg. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hvilken standard brukes for å beregne en kilsveis?', 'I Europa EN 1993-1-8 for stålkonstruksjoner. Forenklet eller retningsavhengig metode gir kraften sveisen kan overføre per lengdeenhet.'],
      ['Hva er βw for S355?', 'Etter EN 1993-1-8 er korrelasjonsfaktoren for S355 βw = 0,90.'],
      ['Må gjennomsveiste buttsveiser beregnes?', 'Med egnet tilsettmateriale regnes fastheten lik det svakeste grunnmaterialet; egen sveiseberegning trengs ikke.'],
      ['Hvorfor gir den retningsavhengige metoden mer kapasitet?', 'Den vurderer spenningskomponentene hver for seg og er derfor mindre konservativ enn den forenklede, særlig ved tverrlast.']
    ],
    cta_h3: 'Vi går gjennom sveisemålene på tegningen din',
    cta_p: 'Send tegningen; vi vurderer sveisene sammen med WPS og kvalitetsnivå og lager tilbud.',
    cta_btn: 'Be om tilbud →'
  }
};
