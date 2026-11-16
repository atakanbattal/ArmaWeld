export default {
  order: 18,
  slug: 'kaynakli-baglantilarda-yorulma-fat-sinifi',
  key: 'p18_fatigue',
  date: '2026-03-02',
  keywords: 'kaynak yorulma, FAT sınıfı, kaynaklı bağlantı yorulma dayanımı, IIW yorulma, EN 1993-1-9 detay kategorisi, kaynak ucu taşlama, ISO 5817 B90 C63, weld fatigue FAT class, Schweißnaht Ermüdung',
  related: ['kaynak-dikisi-mukavemet-hesabi', 'iso-5817-kalite-seviyeleri', 'kaynak-hatalari-onarim', 'tozalti-kaynak-makinesi-bom-sasi'],
  tr: {
    title: 'Kaynaklı Bağlantılarda Yorulma: FAT Sınıfı, S-N Eğrisi ve Ömrü Uzatan Detaylar',
    meta: 'Kaynaklı parçalar neden yorulmayla çatlar? FAT sınıfı ve S-N eğrisi, tipik detay sınıfları, gerilme aralığının etkisi, kaynak ucu taşlama gibi iyileştirme yöntemleri, ISO 5817 Ek C ve tasarım önerileri.',
    og: 'Kaynaklı Bağlantılarda Yorulma ve FAT Sınıfı',
    tag: 'Tasarım · Dayanım',
    h1: 'Kaynaklı Bağlantılarda Yorulma: FAT Sınıfı, S-N Eğrisi ve Ömrü Uzatan Detaylar',
    crumb: 'Kaynakta Yorulma',
    read: '7 dk okuma',
    body: `
<p>Statik hesapta rahatça geçen bir kaynaklı parça, sürekli değişen yükler altında birkaç yıl içinde çatlayabilir. Treyler şasileri, vinç bomları, titreşimli makine gövdeleri ve tarım ekipmanları bu riskin en tipik örnekleridir. Bu yazıda kaynaklı bağlantılarda yorulmanın nasıl değerlendirildiğini ve tasarım ile imalatta ömrü uzatan kararları anlatıyoruz.</p>
<h2>Kaynak Neden Yorulmanın Zayıf Noktasıdır?</h2>
<ul>
<li><strong>Geometrik gerilme yığılması:</strong> Kaynak ucu (toe) ve kök, kesitin aniden değiştiği noktalardır.</li>
<li><strong>Mikro kusurlar:</strong> Kaynak ucunda her zaman küçük yanma oluğu, cüruf izi veya keskin geçişler bulunur; çatlak burada başlamak için zaman harcamaz.</li>
<li><strong>Artık gerilmeler:</strong> Kaynak sonrası malzemenin akma sınırına yakın çekme artık gerilmeleri oluşur. Bu yüzden kaynaklı bağlantılarda ortalama gerilmeden çok <strong>gerilme aralığı (Δσ)</strong> belirleyicidir.</li>
</ul>
<p>Önemli bir sonuç: kaynak edilmiş halde bırakılan bağlantılarda, daha yüksek dayanımlı çelik kullanmak yorulma dayanımını kayda değer ölçüde artırmaz. Yorulmada detay geometrisi, malzeme kalitesinden daha önemlidir.</p>
<h2>FAT Sınıfı ve S-N Eğrisi</h2>
<p>IIW (Uluslararası Kaynak Enstitüsü) önerileri ve EN 1993-1-9, kaynaklı detayları <strong>FAT sınıfı</strong> veya detay kategorisi ile sınıflandırır. FAT değeri, o detayın <strong>2 milyon çevrimde</strong> dayanabildiği gerilme aralığıdır (MPa). Kaynaklı detaylar için S-N eğrisinin eğimi tipik olarak <strong>m = 3</strong>'tür:</p>
<p><strong>N = 2 × 10⁶ × (FAT / Δσ)³</strong></p>
<p>Bu eğim çok güçlü bir etkiye sahiptir: gerilme aralığı iki katına çıktığında ömür sekizde birine iner; gerilme aralığı %20 azaltıldığında ömür yaklaşık iki katına çıkar.</p>
<h2>Tipik Detay Sınıfları (Yol Gösterici)</h2>
<table class="data-table"><thead><tr><th>Detay</th><th>Yaklaşık FAT (MPa)</th></tr></thead><tbody>
<tr><td>Kaynaksız, işlenmiş kenarlı sac</td><td>≈ 160</td></tr>
<tr><td>Yüzeyle aynı seviyeye taşlanmış enine alın kaynağı</td><td>≈ 112</td></tr>
<tr><td>Kaynak edilmiş halde enine alın kaynağı</td><td>≈ 80-90</td></tr>
<tr><td>Yük taşımayan enine ek (köşe kaynaklı T veya artı birleşim)</td><td>≈ 80</td></tr>
<tr><td>Uzun boyuna ek (lama, takviye, 100 mm'den uzun)</td><td>≈ 71 ve altı</td></tr>
<tr><td>Yük taşıyan köşe kaynağında kökten çatlama (boğaz kesitinde)</td><td>≈ 36</td></tr>
</tbody></table>
<p>Değerler kalınlık, geometri ve standarda göre değişir; gerçek tasarımda ilgili standardın detay tablosu kullanılmalıdır. Tablo yine de önemli bir gerçeği gösterir: aynı yük altında, bir köşe kaynağının kökünden çatlayan detay, taşlanmış bir alın kaynağına göre gerilme aralığında üç kattan fazla daha zayıftır.</p>
<h2>Tasarımda Ömrü Uzatan Kararlar</h2>
<ul>
<li><strong>Kaynakları yüksek gerilme bölgesinden uzaklaştırın:</strong> Ekler, kulaklar ve takviyeler, eğilme momentinin en büyük olduğu yerlere değil, nötr eksene yakın bölgelere yerleştirilmelidir.</li>
<li><strong>Kök çatlamasını önleyin:</strong> Yük taşıyan bağlantılarda köşe kaynağı yerine tam nüfuziyetli kaynak düşünülmelidir.</li>
<li><strong>Kalınlık geçişlerini yumuşatın:</strong> Farklı kalınlıktaki saclar arasında 1:4 gibi eğimli geçişler kullanılmalıdır.</li>
<li><strong>Takviye ve ek uçlarını yumuşatın:</strong> Uzun boyuna eklerin uçları pahlı veya yarıçaplı kesilerek gerilme yığılması azaltılır.</li>
<li><strong>Yorulma bölgesinde aralıklı kaynaktan kaçının:</strong> Her başlangıç ve bitiş noktası potansiyel bir çatlak başlangıcıdır.</li>
</ul>
<h2>İmalatta Ömrü Uzatan Yöntemler</h2>
<p>Kaynak sonrası iyileştirme yöntemleri, kaynak ucundaki geometriyi yumuşatır veya artık gerilmeyi bası yönüne çevirir:</p>
<ul>
<li><strong>Kaynak ucu taşlama (burr grinding):</strong> Kaynak ucuna küçük yarıçaplı bir oluk taşlanarak geçiş yumuşatılır ve ucundaki mikro kusurlar kaldırılır.</li>
<li><strong>TIG ile yeniden ergitme (TIG dressing):</strong> Kaynak ucu ilave tel kullanmadan yeniden ergitilir, daha yumuşak bir profil elde edilir.</li>
<li><strong>Yüksek frekanslı mekanik darbe (HFMI):</strong> Kaynak ucuna darbe uygulanarak bası artık gerilmesi oluşturulur.</li>
</ul>
<p>IIW önerileri bu yöntemler için belirli koşullarla ek dayanım kademesi tanır. Ancak bu iyileştirmeler kökten başlayan çatlamaya etki etmez ve uygulamanın belgelenmesi gerekir.</p>
<h2>ISO 5817 Ek C: Yorulma Yüklü Kaynaklar</h2>
<p>ISO 5817'nin 2014 baskısı, yorulma yüklü yapılar için ek şartlar içeren <strong>B125, B90 ve C63</strong> gibi kalite seviyeleri tanımlar. Bu seviyeler kaynak ucu açısı, yanma oluğu ve kenar kaçıklığı gibi yorulmayı doğrudan etkileyen kusurlara daha sıkı sınır koyar. Yorulma kritik bir parçada çizimde sadece "B" yazmak yerine uygun seviye belirtilmelidir.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Treyler şasisi, bom ve titreşimli makine gövdesi gibi değişken yük altında çalışan parçalarda kaynak ucu profilini, yanma oluğunu ve başlangıç-bitiş noktalarını gözle muayenede özellikle kontrol ederiz. Çizimde belirtilen yerlerde kaynak ucu taşlaması uygular ve kayıt altına alırız. <a href="../tozalti-kaynak.html">Uzun dikişler için tozaltı kaynak →</a></p></div>
`,
    faq: [
      ['FAT sınıfı nedir?', 'Kaynaklı bir detayın 2 milyon yük çevriminde dayanabildiği gerilme aralığıdır (MPa). IIW önerileri ve EN 1993-1-9 detayları bu değerle sınıflandırır.'],
      ['Yüksek dayanımlı çelik yorulma ömrünü artırır mı?', 'Kaynak edilmiş halde bırakılan bağlantılarda belirgin şekilde artırmaz. Yorulma dayanımını asıl belirleyen detay geometrisi ve kaynak ucu kalitesidir.'],
      ['Gerilme aralığı ile ömür arasındaki ilişki nedir?', 'Kaynaklı detaylarda S-N eğrisinin eğimi tipik olarak 3’tür; gerilme aralığı iki katına çıkınca ömür sekizde birine düşer.'],
      ['Kaynak ucu taşlama ne işe yarar?', 'Kaynak ucundaki keskin geçişi ve mikro kusurları kaldırarak yorulma çatlağının başlamasını geciktirir. Kökten başlayan çatlamaya etkisi yoktur.']
    ],
    cta_h3: 'Değişken yük altında çalışan parçalarınız için',
    cta_p: 'Şasi, bom veya titreşimli gövde çiziminizi gönderin; kalite seviyesi ve kaynak detaylarını birlikte değerlendirelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Fatigue in Welded Joints: FAT Classes, S-N Curves and Details That Extend Life',
    meta: 'Why do welded parts crack from fatigue? FAT classes and S-N curves, typical detail categories, the effect of stress range, improvement methods such as toe grinding, ISO 5817 Annex C and design advice.',
    og: 'Fatigue in Welded Joints and FAT Classes',
    tag: 'Design · Strength',
    h1: 'Fatigue in Welded Joints: FAT Classes, S-N Curves and Details That Extend Life',
    crumb: 'Weld Fatigue',
    read: '7 min read',
    body: `
<p>A welded part that passes a static check comfortably can still crack within a few years under fluctuating loads. Trailer chassis, crane booms, vibrating machine frames and agricultural equipment are typical examples. This article explains how fatigue in welded joints is assessed and which design and fabrication decisions extend service life.</p>
<h2>Why Welds Are the Weak Point in Fatigue</h2>
<ul>
<li><strong>Geometric stress concentration:</strong> the weld toe and root are points where the section changes abruptly.</li>
<li><strong>Micro-defects:</strong> the toe always has small undercuts, slag traces or sharp transitions, so cracks need little time to initiate.</li>
<li><strong>Residual stresses:</strong> welding leaves tensile residual stresses near yield. For welded joints the <strong>stress range (Δσ)</strong> therefore matters more than mean stress.</li>
</ul>
<p>An important consequence: for as-welded joints, using higher-strength steel does not significantly increase fatigue strength. In fatigue, detail geometry matters more than material grade.</p>
<h2>FAT Classes and the S-N Curve</h2>
<p>IIW (International Institute of Welding) recommendations and EN 1993-1-9 classify welded details by <strong>FAT class</strong> or detail category. The FAT value is the stress range (MPa) the detail withstands at <strong>2 million cycles</strong>. For welded details the S-N curve slope is typically <strong>m = 3</strong>:</p>
<p><strong>N = 2 × 10⁶ × (FAT / Δσ)³</strong></p>
<p>The slope is powerful: doubling the stress range cuts life to one eighth; reducing it by 20% roughly doubles life.</p>
<h2>Typical Detail Classes (Guidance)</h2>
<table class="data-table"><thead><tr><th>Detail</th><th>Approx. FAT (MPa)</th></tr></thead><tbody>
<tr><td>Unwelded plate with machined edges</td><td>≈ 160</td></tr>
<tr><td>Transverse butt weld ground flush</td><td>≈ 112</td></tr>
<tr><td>Transverse butt weld as-welded</td><td>≈ 80-90</td></tr>
<tr><td>Non-load-carrying transverse attachment (fillet-welded T or cruciform)</td><td>≈ 80</td></tr>
<tr><td>Long longitudinal attachment (gusset, stiffener, over 100 mm)</td><td>≈ 71 and below</td></tr>
<tr><td>Load-carrying fillet weld, root failure (on throat)</td><td>≈ 36</td></tr>
</tbody></table>
<p>Values vary with thickness, geometry and standard; real designs must use the detail tables of the relevant code. The table still shows a key fact: under the same load, a detail failing from a fillet weld root is more than three times weaker in stress range than a ground butt weld.</p>
<h2>Design Decisions That Extend Life</h2>
<ul>
<li><strong>Move welds away from high-stress zones:</strong> place attachments, lugs and stiffeners near the neutral axis rather than where bending moment peaks.</li>
<li><strong>Prevent root failure:</strong> in load-carrying joints, consider full-penetration welds instead of fillets.</li>
<li><strong>Smooth thickness transitions:</strong> use tapers such as 1:4 between plates of different thickness.</li>
<li><strong>Soften attachment ends:</strong> chamfered or radiused ends on long longitudinal attachments reduce stress concentration.</li>
<li><strong>Avoid intermittent welds in fatigue zones:</strong> every start and stop is a potential crack initiation site.</li>
</ul>
<h2>Fabrication Methods That Extend Life</h2>
<p>Post-weld improvement methods smooth the toe geometry or turn residual stress into compression:</p>
<ul>
<li><strong>Burr grinding:</strong> a small-radius groove is ground at the toe, smoothing the transition and removing micro-defects.</li>
<li><strong>TIG dressing:</strong> the toe is remelted without filler to give a smoother profile.</li>
<li><strong>High-frequency mechanical impact (HFMI):</strong> impact treatment at the toe introduces compressive residual stress.</li>
</ul>
<p>IIW recommendations credit these methods with additional strength under defined conditions. They do not help against root failure, and their application must be documented.</p>
<h2>ISO 5817 Annex C: Fatigue-Loaded Welds</h2>
<p>The 2014 edition of ISO 5817 defines quality levels such as <strong>B125, B90 and C63</strong> with additional requirements for fatigue-loaded structures. They set tighter limits on toe angle, undercut and misalignment, which directly affect fatigue. On a fatigue-critical part, the drawing should specify the appropriate level rather than just "B".</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> on parts under fluctuating loads such as trailer chassis, booms and vibrating machine frames, we pay particular attention to toe profile, undercut and start-stop points during visual inspection. Where the drawing calls for it, we apply toe grinding and record it. <a href="../tozalti-kaynak.html">Submerged arc welding for long seams →</a></p></div>
`,
    faq: [
      ['What is a FAT class?', 'The stress range (MPa) a welded detail withstands at 2 million load cycles. IIW recommendations and EN 1993-1-9 classify details by this value.'],
      ['Does higher-strength steel increase fatigue life?', 'For as-welded joints, not significantly. Detail geometry and weld toe quality govern fatigue strength.'],
      ['How does stress range relate to life?', 'For welded details the S-N slope is typically 3; doubling the stress range cuts life to one eighth.'],
      ['What does toe grinding do?', 'It removes the sharp transition and micro-defects at the weld toe, delaying fatigue crack initiation. It has no effect on root failure.']
    ],
    cta_h3: 'For parts working under fluctuating loads',
    cta_p: 'Send your chassis, boom or vibrating frame drawing; we will review quality level and weld details with you.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Ermüdung geschweißter Verbindungen: FAT-Klassen, Wöhlerlinie und lebensdauerverlängernde Details',
    meta: 'Warum reißen Schweißteile durch Ermüdung? FAT-Klassen und Wöhlerlinie, typische Kerbfälle, Einfluss der Spannungsschwingbreite, Verbesserungsverfahren wie Nahtübergangsschleifen, ISO 5817 Anhang C und Konstruktionshinweise.',
    og: 'Ermüdung geschweißter Verbindungen und FAT-Klassen',
    tag: 'Konstruktion · Festigkeit',
    h1: 'Ermüdung geschweißter Verbindungen: FAT-Klassen, Wöhlerlinie und lebensdauerverlängernde Details',
    crumb: 'Ermüdung von Schweißnähten',
    read: '7 Min. Lesezeit',
    body: `
<p>Ein Schweißteil, das den statischen Nachweis mühelos besteht, kann unter wechselnder Last nach wenigen Jahren reißen. Fahrzeugrahmen, Kranausleger, schwingende Maschinengestelle und Landmaschinen sind typische Beispiele. Dieser Beitrag erklärt, wie Ermüdung an Schweißverbindungen bewertet wird und welche Konstruktions- und Fertigungsentscheidungen die Lebensdauer verlängern.</p>
<h2>Warum die Schweißnaht die Schwachstelle ist</h2>
<ul>
<li><strong>Geometrische Kerbwirkung:</strong> Nahtübergang und Wurzel sind Stellen mit plötzlicher Querschnittsänderung.</li>
<li><strong>Mikrofehler:</strong> Am Nahtübergang gibt es immer kleine Einbrandkerben, Schlackereste oder scharfe Übergänge; der Riss braucht kaum Zeit zur Entstehung.</li>
<li><strong>Eigenspannungen:</strong> Nach dem Schweißen verbleiben Zugeigenspannungen nahe der Streckgrenze. Deshalb ist bei Schweißverbindungen die <strong>Spannungsschwingbreite (Δσ)</strong> wichtiger als die Mittelspannung.</li>
</ul>
<p>Wichtige Folge: Bei Nähten im Schweißzustand erhöht ein höherfester Stahl die Ermüdungsfestigkeit kaum. Bei Ermüdung zählt die Detailgeometrie mehr als die Werkstoffgüte.</p>
<h2>FAT-Klassen und Wöhlerlinie</h2>
<p>Die IIW-Empfehlungen (International Institute of Welding) und EN 1993-1-9 ordnen Schweißdetails einer <strong>FAT-Klasse</strong> bzw. einem Kerbfall zu. Der FAT-Wert ist die Spannungsschwingbreite (MPa), die das Detail bei <strong>2 Millionen Lastwechseln</strong> erträgt. Die Wöhlerlinie geschweißter Details hat typisch die Neigung <strong>m = 3</strong>:</p>
<p><strong>N = 2 × 10⁶ × (FAT / Δσ)³</strong></p>
<p>Die Wirkung ist stark: Doppelte Schwingbreite bedeutet ein Achtel der Lebensdauer; 20 % weniger Schwingbreite verdoppelt sie etwa.</p>
<h2>Typische Kerbfälle (Richtwerte)</h2>
<table class="data-table"><thead><tr><th>Detail</th><th>Ca. FAT (MPa)</th></tr></thead><tbody>
<tr><td>Ungeschweißtes Blech mit bearbeiteten Kanten</td><td>≈ 160</td></tr>
<tr><td>Querstumpfnaht, blecheben geschliffen</td><td>≈ 112</td></tr>
<tr><td>Querstumpfnaht im Schweißzustand</td><td>≈ 80-90</td></tr>
<tr><td>Nicht tragende Quersteife (Kehlnaht, T- oder Kreuzstoß)</td><td>≈ 80</td></tr>
<tr><td>Lange Längssteife (Knotenblech, Steife über 100 mm)</td><td>≈ 71 und darunter</td></tr>
<tr><td>Tragende Kehlnaht, Wurzelversagen (im Nahtquerschnitt)</td><td>≈ 36</td></tr>
</tbody></table>
<p>Die Werte hängen von Dicke, Geometrie und Norm ab; für die Bemessung sind die Kerbfalltabellen der maßgebenden Norm zu verwenden. Die Tabelle zeigt dennoch: Bei gleicher Last ist ein Detail mit Wurzelversagen einer Kehlnaht in der Schwingbreite mehr als dreimal schwächer als eine geschliffene Stumpfnaht.</p>
<h2>Konstruktive Maßnahmen</h2>
<ul>
<li><strong>Nähte aus hoch beanspruchten Zonen heraushalten:</strong> Anbauteile, Laschen und Steifen nahe der neutralen Faser statt im Momentenmaximum anordnen.</li>
<li><strong>Wurzelversagen vermeiden:</strong> Bei tragenden Verbindungen durchgeschweißte Nähte statt Kehlnähte prüfen.</li>
<li><strong>Dickensprünge abschrägen:</strong> Zwischen unterschiedlich dicken Blechen Übergänge wie 1:4 vorsehen.</li>
<li><strong>Enden von Steifen auslaufen lassen:</strong> Angefaste oder gerundete Enden langer Längssteifen senken die Kerbwirkung.</li>
<li><strong>Keine unterbrochenen Nähte in Ermüdungszonen:</strong> Jeder Ansatz und jedes Ende ist ein möglicher Rissausgang.</li>
</ul>
<h2>Fertigungsseitige Verbesserungsverfahren</h2>
<p>Nachbehandlungsverfahren glätten die Nahtübergangsgeometrie oder erzeugen Druckeigenspannungen:</p>
<ul>
<li><strong>Nahtübergangsschleifen (Burr Grinding):</strong> Eine Rille mit kleinem Radius am Übergang glättet ihn und entfernt Mikrofehler.</li>
<li><strong>WIG-Nachbehandlung (TIG Dressing):</strong> Der Übergang wird ohne Zusatz umgeschmolzen und erhält ein weicheres Profil.</li>
<li><strong>Höherfrequentes Hämmern (HFMI):</strong> Schlagbehandlung am Übergang erzeugt Druckeigenspannungen.</li>
</ul>
<p>Die IIW-Empfehlungen erkennen dafür unter bestimmten Bedingungen eine höhere Festigkeit an. Gegen Wurzelversagen helfen sie nicht, und die Anwendung muss dokumentiert sein.</p>
<h2>ISO 5817 Anhang C: ermüdungsbeanspruchte Nähte</h2>
<p>Die Ausgabe 2014 der ISO 5817 definiert Bewertungsgruppen wie <strong>B125, B90 und C63</strong> mit Zusatzanforderungen für ermüdungsbeanspruchte Konstruktionen. Sie begrenzen Nahtübergangswinkel, Einbrandkerben und Kantenversatz strenger. Bei ermüdungskritischen Teilen sollte die Zeichnung die passende Gruppe nennen statt nur „B".</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei wechselbeanspruchten Teilen wie Fahrzeugrahmen, Auslegern und schwingenden Maschinengestellen achten wir bei der Sichtprüfung besonders auf Nahtübergangsprofil, Einbrandkerben und Ansatzstellen. Wo die Zeichnung es fordert, schleifen wir Nahtübergänge und dokumentieren dies. <a href="../tozalti-kaynak.html">UP-Schweißen für lange Nähte →</a></p></div>
`,
    faq: [
      ['Was ist eine FAT-Klasse?', 'Die Spannungsschwingbreite (MPa), die ein Schweißdetail bei 2 Millionen Lastwechseln erträgt. IIW-Empfehlungen und EN 1993-1-9 klassifizieren Details danach.'],
      ['Erhöht höherfester Stahl die Lebensdauer?', 'Bei Nähten im Schweißzustand kaum. Detailgeometrie und Qualität des Nahtübergangs bestimmen die Ermüdungsfestigkeit.'],
      ['Wie hängen Schwingbreite und Lebensdauer zusammen?', 'Die Wöhlerlinie geschweißter Details hat typisch die Neigung 3; doppelte Schwingbreite ergibt ein Achtel der Lebensdauer.'],
      ['Was bringt das Nahtübergangsschleifen?', 'Es entfernt den scharfen Übergang und Mikrofehler und verzögert so die Rissentstehung. Gegen Wurzelversagen wirkt es nicht.']
    ],
    cta_h3: 'Für Bauteile unter wechselnder Last',
    cta_p: 'Senden Sie Ihre Zeichnung für Rahmen, Ausleger oder Gestell; wir besprechen Bewertungsgruppe und Nahtdetails mit Ihnen.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Fatiga en uniones soldadas: clases FAT, curvas S-N y detalles que alargan la vida',
    meta: 'Por qué fisuran por fatiga las piezas soldadas: clases FAT y curvas S-N, categorías de detalle típicas, efecto del rango de tensiones, mejoras como el amolado del pie, Anexo C de la ISO 5817 y recomendaciones de diseño.',
    og: 'Fatiga en uniones soldadas y clases FAT',
    tag: 'Diseño · Resistencia',
    h1: 'Fatiga en uniones soldadas: clases FAT, curvas S-N y detalles que alargan la vida',
    crumb: 'Fatiga en soldaduras',
    read: '7 min de lectura',
    body: `
<p>Una pieza soldada que supera con holgura la comprobación estática puede fisurarse en pocos años bajo cargas variables. Bastidores de remolque, plumas de grúa, bastidores de máquinas vibrantes y equipos agrícolas son ejemplos típicos. Este artículo explica cómo se evalúa la fatiga en uniones soldadas y qué decisiones de diseño y fabricación alargan la vida útil.</p>
<h2>Por qué la soldadura es el punto débil</h2>
<ul>
<li><strong>Concentración geométrica de tensiones:</strong> el pie y la raíz del cordón son puntos de cambio brusco de sección.</li>
<li><strong>Microdefectos:</strong> en el pie siempre hay pequeñas mordeduras, restos de escoria o transiciones agudas; la fisura apenas necesita tiempo para iniciarse.</li>
<li><strong>Tensiones residuales:</strong> tras soldar quedan tensiones de tracción cercanas al límite elástico. Por eso en uniones soldadas importa más el <strong>rango de tensiones (Δσ)</strong> que la tensión media.</li>
</ul>
<p>Consecuencia importante: en uniones en estado bruto de soldadura, un acero de mayor resistencia apenas aumenta la resistencia a fatiga. En fatiga, la geometría del detalle pesa más que el grado del material.</p>
<h2>Clases FAT y curva S-N</h2>
<p>Las recomendaciones del IIW (Instituto Internacional de Soldadura) y la EN 1993-1-9 clasifican los detalles soldados por <strong>clase FAT</strong> o categoría de detalle. El valor FAT es el rango de tensiones (MPa) que resiste el detalle a <strong>2 millones de ciclos</strong>. Para detalles soldados la pendiente típica es <strong>m = 3</strong>:</p>
<p><strong>N = 2 × 10⁶ × (FAT / Δσ)³</strong></p>
<p>El efecto es grande: duplicar el rango de tensiones reduce la vida a un octavo; reducirlo un 20 % casi la duplica.</p>
<h2>Categorías típicas (orientativas)</h2>
<table class="data-table"><thead><tr><th>Detalle</th><th>FAT aprox. (MPa)</th></tr></thead><tbody>
<tr><td>Chapa sin soldar con bordes mecanizados</td><td>≈ 160</td></tr>
<tr><td>Soldadura a tope transversal enrasada</td><td>≈ 112</td></tr>
<tr><td>Soldadura a tope transversal en bruto</td><td>≈ 80-90</td></tr>
<tr><td>Rigidizador transversal no resistente (ángulo en T o cruz)</td><td>≈ 80</td></tr>
<tr><td>Rigidizador longitudinal largo (cartela, más de 100 mm)</td><td>≈ 71 o menos</td></tr>
<tr><td>Soldadura en ángulo resistente, rotura por raíz (en garganta)</td><td>≈ 36</td></tr>
</tbody></table>
<p>Los valores dependen del espesor, la geometría y la norma; en el diseño real deben usarse las tablas de detalles de la norma aplicable. Aun así, la tabla muestra que, con la misma carga, un detalle que rompe por la raíz de un ángulo es más de tres veces más débil en rango de tensiones que una soldadura a tope amolada.</p>
<h2>Decisiones de diseño que alargan la vida</h2>
<ul>
<li><strong>Alejar las soldaduras de zonas muy solicitadas:</strong> situar orejetas, cartelas y rigidizadores cerca de la fibra neutra y no donde el momento es máximo.</li>
<li><strong>Evitar la rotura por raíz:</strong> en uniones resistentes, considerar penetración completa en lugar de ángulo.</li>
<li><strong>Suavizar cambios de espesor:</strong> transiciones como 1:4 entre chapas de distinto espesor.</li>
<li><strong>Suavizar los extremos de rigidizadores:</strong> extremos achaflanados o con radio reducen la concentración.</li>
<li><strong>Evitar soldadura discontinua en zonas de fatiga:</strong> cada inicio y final es un posible origen de fisura.</li>
</ul>
<h2>Métodos de fabricación que alargan la vida</h2>
<p>Las técnicas de mejora postsoldadura suavizan la geometría del pie o convierten la tensión residual en compresión:</p>
<ul>
<li><strong>Amolado del pie (burr grinding):</strong> se amola una ranura de radio pequeño en el pie, suavizando la transición y eliminando microdefectos.</li>
<li><strong>Refusión TIG (TIG dressing):</strong> el pie se refunde sin aporte para lograr un perfil más suave.</li>
<li><strong>Impacto mecánico de alta frecuencia (HFMI):</strong> el tratamiento por impacto introduce tensiones residuales de compresión.</li>
</ul>
<p>Las recomendaciones IIW reconocen, en condiciones definidas, una resistencia adicional por estas técnicas. No ayudan frente a la rotura por raíz y su aplicación debe documentarse.</p>
<h2>ISO 5817 Anexo C: soldaduras sometidas a fatiga</h2>
<p>La edición 2014 de la ISO 5817 define niveles como <strong>B125, B90 y C63</strong> con requisitos adicionales para estructuras sometidas a fatiga. Limitan más el ángulo del pie, las mordeduras y la desalineación. En una pieza crítica a fatiga, el plano debería indicar el nivel adecuado y no solo "B".</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> en piezas con cargas variables, como bastidores de remolque, plumas y bastidores vibrantes, vigilamos especialmente el perfil del pie, las mordeduras y los puntos de inicio y final en la inspección visual. Donde el plano lo exige, aplicamos amolado del pie y lo registramos. <a href="../tozalti-kaynak.html">Arco sumergido para cordones largos →</a></p></div>
`,
    faq: [
      ['¿Qué es una clase FAT?', 'El rango de tensiones (MPa) que resiste un detalle soldado a 2 millones de ciclos. Las recomendaciones IIW y la EN 1993-1-9 clasifican los detalles con este valor.'],
      ['¿Un acero de mayor resistencia alarga la vida a fatiga?', 'En uniones en bruto de soldadura, apenas. La geometría del detalle y la calidad del pie son las que mandan.'],
      ['¿Cómo se relacionan rango de tensiones y vida?', 'En detalles soldados la pendiente S-N es típicamente 3; duplicar el rango de tensiones reduce la vida a un octavo.'],
      ['¿Para qué sirve el amolado del pie?', 'Elimina la transición aguda y los microdefectos del pie, retrasando el inicio de la fisura. No influye en la rotura por raíz.']
    ],
    cta_h3: 'Para piezas que trabajan con cargas variables',
    cta_p: 'Envíenos el plano de su bastidor, pluma o estructura vibrante; revisamos con usted nivel de calidad y detalles de soldadura.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Fatigue des assemblages soudés : classes FAT, courbes S-N et détails qui prolongent la durée de vie',
    meta: 'Pourquoi les pièces soudées fissurent-elles en fatigue ? Classes FAT et courbes S-N, catégories de détail courantes, effet de l’étendue de contrainte, parachèvements comme le meulage du pied, Annexe C de l’ISO 5817 et conseils de conception.',
    og: 'Fatigue des assemblages soudés et classes FAT',
    tag: 'Conception · Résistance',
    h1: 'Fatigue des assemblages soudés : classes FAT, courbes S-N et détails qui prolongent la durée de vie',
    crumb: 'Fatigue des soudures',
    read: '7 min de lecture',
    body: `
<p>Une pièce soudée qui passe largement la vérification statique peut fissurer en quelques années sous charges variables. Châssis de remorque, flèches de grue, bâtis de machines vibrantes et matériel agricole en sont des exemples typiques. Cet article explique comment la fatigue des assemblages soudés est évaluée et quels choix de conception et de fabrication prolongent la durée de vie.</p>
<h2>Pourquoi la soudure est le point faible</h2>
<ul>
<li><strong>Concentration géométrique de contraintes :</strong> le pied et la racine du cordon sont des changements brusques de section.</li>
<li><strong>Micro-défauts :</strong> le pied présente toujours de petits caniveaux, traces de laitier ou transitions vives ; la fissure s’amorce très vite.</li>
<li><strong>Contraintes résiduelles :</strong> le soudage laisse des contraintes de traction proches de la limite d’élasticité. Pour les assemblages soudés, l’<strong>étendue de contrainte (Δσ)</strong> compte donc davantage que la contrainte moyenne.</li>
</ul>
<p>Conséquence importante : à l’état brut de soudage, un acier plus résistant n’améliore guère la tenue en fatigue. En fatigue, la géométrie du détail prime sur la nuance.</p>
<h2>Classes FAT et courbe S-N</h2>
<p>Les recommandations de l’IIW (Institut international de la soudure) et l’EN 1993-1-9 classent les détails soudés par <strong>classe FAT</strong> ou catégorie de détail. La valeur FAT est l’étendue de contrainte (MPa) supportée à <strong>2 millions de cycles</strong>. Pour les détails soudés, la pente est typiquement <strong>m = 3</strong> :</p>
<p><strong>N = 2 × 10⁶ × (FAT / Δσ)³</strong></p>
<p>L’effet est fort : doubler l’étendue de contrainte divise la durée de vie par huit ; la réduire de 20 % la double environ.</p>
<h2>Catégories courantes (indicatives)</h2>
<table class="data-table"><thead><tr><th>Détail</th><th>FAT approx. (MPa)</th></tr></thead><tbody>
<tr><td>Tôle non soudée à bords usinés</td><td>≈ 160</td></tr>
<tr><td>Soudure bout à bout transversale arasée</td><td>≈ 112</td></tr>
<tr><td>Soudure bout à bout transversale brute</td><td>≈ 80-90</td></tr>
<tr><td>Raidisseur transversal non porteur (angle en T ou en croix)</td><td>≈ 80</td></tr>
<tr><td>Long attache longitudinale (gousset, raidisseur de plus de 100 mm)</td><td>≈ 71 et moins</td></tr>
<tr><td>Soudure d’angle porteuse, rupture par la racine (sur la gorge)</td><td>≈ 36</td></tr>
</tbody></table>
<p>Les valeurs dépendent de l’épaisseur, de la géométrie et de la norme ; le dimensionnement réel doit utiliser les tableaux de la norme applicable. Le tableau montre néanmoins qu’à charge égale, un détail rompant par la racine d’une soudure d’angle est plus de trois fois plus faible en étendue de contrainte qu’une soudure bout à bout arasée.</p>
<h2>Choix de conception qui prolongent la vie</h2>
<ul>
<li><strong>Éloigner les soudures des zones très sollicitées :</strong> placer pattes, goussets et raidisseurs près de la fibre neutre plutôt qu’au moment maximal.</li>
<li><strong>Éviter la rupture par la racine :</strong> pour les assemblages porteurs, envisager la pleine pénétration plutôt que l’angle.</li>
<li><strong>Adoucir les changements d’épaisseur :</strong> pentes de 1:4 entre tôles d’épaisseurs différentes.</li>
<li><strong>Adoucir les extrémités des raidisseurs :</strong> extrémités chanfreinées ou rayonnées sur les longues attaches.</li>
<li><strong>Éviter la soudure discontinue en zone de fatigue :</strong> chaque amorçage et chaque fin est un site d’initiation potentiel.</li>
</ul>
<h2>Méthodes de fabrication qui prolongent la vie</h2>
<p>Les parachèvements adoucissent la géométrie du pied ou transforment la contrainte résiduelle en compression :</p>
<ul>
<li><strong>Meulage du pied (burr grinding) :</strong> une gorge de petit rayon est meulée au pied, adoucissant la transition et éliminant les micro-défauts.</li>
<li><strong>Refusion TIG (TIG dressing) :</strong> le pied est refondu sans métal d’apport pour un profil plus doux.</li>
<li><strong>Martelage à haute fréquence (HFMI) :</strong> le traitement par impact introduit des contraintes résiduelles de compression.</li>
</ul>
<p>Les recommandations IIW reconnaissent, sous conditions, un gain de résistance pour ces méthodes. Elles n’agissent pas sur la rupture par la racine et leur application doit être documentée.</p>
<h2>ISO 5817 Annexe C : soudures sollicitées en fatigue</h2>
<p>L’édition 2014 de l’ISO 5817 définit des niveaux tels que <strong>B125, B90 et C63</strong> avec des exigences supplémentaires pour les structures sollicitées en fatigue. Ils limitent plus strictement l’angle de raccordement, les caniveaux et le défaut d’alignement. Sur une pièce critique en fatigue, le plan doit préciser le niveau adapté plutôt que simplement « B ».</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> sur les pièces sous charges variables, comme châssis de remorque, flèches et bâtis vibrants, nous surveillons particulièrement le profil du pied, les caniveaux et les reprises lors du contrôle visuel. Lorsque le plan l’exige, nous meulons les pieds de cordon et l’enregistrons. <a href="../tozalti-kaynak.html">Arc submergé pour longs cordons →</a></p></div>
`,
    faq: [
      ['Qu’est-ce qu’une classe FAT ?', 'L’étendue de contrainte (MPa) qu’un détail soudé supporte à 2 millions de cycles. Les recommandations IIW et l’EN 1993-1-9 classent les détails selon cette valeur.'],
      ['Un acier plus résistant améliore-t-il la durée de vie en fatigue ?', 'À l’état brut de soudage, très peu. La géométrie du détail et la qualité du pied déterminent la tenue en fatigue.'],
      ['Quel lien entre étendue de contrainte et durée de vie ?', 'Pour les détails soudés, la pente S-N est typiquement 3 ; doubler l’étendue de contrainte divise la durée de vie par huit.'],
      ['À quoi sert le meulage du pied ?', 'Il supprime la transition vive et les micro-défauts au pied, retardant l’amorçage de la fissure. Il est sans effet sur la rupture par la racine.']
    ],
    cta_h3: 'Pour les pièces soumises à des charges variables',
    cta_p: 'Envoyez le plan de votre châssis, flèche ou bâti vibrant ; nous examinons avec vous niveau de qualité et détails de soudure.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Fatica nei giunti saldati: classi FAT, curve S-N e dettagli che allungano la vita',
    meta: 'Perché i pezzi saldati si criccano a fatica? Classi FAT e curve S-N, categorie di dettaglio tipiche, effetto dell’escursione di tensione, miglioramenti come la molatura del piede, Appendice C della ISO 5817 e consigli di progetto.',
    og: 'Fatica nei giunti saldati e classi FAT',
    tag: 'Progettazione · Resistenza',
    h1: 'Fatica nei giunti saldati: classi FAT, curve S-N e dettagli che allungano la vita',
    crumb: 'Fatica delle saldature',
    read: '7 min di lettura',
    body: `
<p>Un pezzo saldato che supera agevolmente la verifica statica può criccarsi in pochi anni sotto carichi variabili. Telai di rimorchi, bracci di gru, telai di macchine vibranti e attrezzature agricole ne sono esempi tipici. Questo articolo spiega come si valuta la fatica nei giunti saldati e quali scelte di progetto e fabbricazione allungano la vita utile.</p>
<h2>Perché la saldatura è il punto debole</h2>
<ul>
<li><strong>Concentrazione geometrica delle tensioni:</strong> piede e radice del cordone sono punti di brusca variazione di sezione.</li>
<li><strong>Microdifetti:</strong> al piede ci sono sempre piccole incisioni marginali, residui di scoria o transizioni brusche; la cricca si innesca rapidamente.</li>
<li><strong>Tensioni residue:</strong> la saldatura lascia tensioni di trazione vicine allo snervamento. Per i giunti saldati conta quindi più l’<strong>escursione di tensione (Δσ)</strong> della tensione media.</li>
</ul>
<p>Conseguenza importante: nei giunti allo stato come saldato, un acciaio più resistente non aumenta in modo significativo la resistenza a fatica. A fatica conta più la geometria del dettaglio che il grado del materiale.</p>
<h2>Classi FAT e curva S-N</h2>
<p>Le raccomandazioni IIW (International Institute of Welding) e la EN 1993-1-9 classificano i dettagli saldati per <strong>classe FAT</strong> o categoria di dettaglio. Il valore FAT è l’escursione di tensione (MPa) sopportata a <strong>2 milioni di cicli</strong>. Per i dettagli saldati la pendenza tipica è <strong>m = 3</strong>:</p>
<p><strong>N = 2 × 10⁶ × (FAT / Δσ)³</strong></p>
<p>L’effetto è forte: raddoppiando l’escursione la vita si riduce a un ottavo; riducendola del 20 % la vita quasi raddoppia.</p>
<h2>Categorie tipiche (indicative)</h2>
<table class="data-table"><thead><tr><th>Dettaglio</th><th>FAT circa (MPa)</th></tr></thead><tbody>
<tr><td>Lamiera non saldata con bordi lavorati</td><td>≈ 160</td></tr>
<tr><td>Saldatura testa a testa trasversale rasata</td><td>≈ 112</td></tr>
<tr><td>Saldatura testa a testa trasversale come saldata</td><td>≈ 80-90</td></tr>
<tr><td>Irrigidimento trasversale non portante (angolo a T o a croce)</td><td>≈ 80</td></tr>
<tr><td>Attacco longitudinale lungo (fazzoletto, irrigidimento oltre 100 mm)</td><td>≈ 71 e meno</td></tr>
<tr><td>Saldatura d’angolo portante, rottura alla radice (sulla gola)</td><td>≈ 36</td></tr>
</tbody></table>
<p>I valori variano con spessore, geometria e norma; nella progettazione reale si usano le tabelle dei dettagli della norma applicabile. La tabella mostra comunque che, a parità di carico, un dettaglio che si rompe alla radice di un angolo è più di tre volte più debole in escursione di una testa a testa rasata.</p>
<h2>Scelte di progetto che allungano la vita</h2>
<ul>
<li><strong>Allontanare le saldature dalle zone molto sollecitate:</strong> posizionare attacchi, golfari e irrigidimenti vicino all’asse neutro e non dove il momento è massimo.</li>
<li><strong>Evitare la rottura alla radice:</strong> nei giunti portanti valutare la piena penetrazione al posto dell’angolo.</li>
<li><strong>Raccordare i cambi di spessore:</strong> rastremazioni come 1:4 tra lamiere di spessore diverso.</li>
<li><strong>Addolcire le estremità degli irrigidimenti:</strong> estremità smussate o raggiate sugli attacchi longitudinali lunghi.</li>
<li><strong>Evitare saldature intermittenti in zona di fatica:</strong> ogni inizio e fine è un possibile innesco.</li>
</ul>
<h2>Metodi di fabbricazione che allungano la vita</h2>
<p>I trattamenti post-saldatura addolciscono la geometria del piede o trasformano le tensioni residue in compressione:</p>
<ul>
<li><strong>Molatura del piede (burr grinding):</strong> si mola una scanalatura di piccolo raggio al piede, raccordando la transizione ed eliminando i microdifetti.</li>
<li><strong>Rifusione TIG (TIG dressing):</strong> il piede viene rifuso senza apporto per ottenere un profilo più dolce.</li>
<li><strong>Impatto meccanico ad alta frequenza (HFMI):</strong> il trattamento a impatto introduce tensioni residue di compressione.</li>
</ul>
<p>Le raccomandazioni IIW riconoscono, a determinate condizioni, una resistenza aggiuntiva per questi metodi. Non aiutano contro la rottura alla radice e la loro applicazione va documentata.</p>
<h2>ISO 5817 Appendice C: saldature soggette a fatica</h2>
<p>L’edizione 2014 della ISO 5817 definisce livelli come <strong>B125, B90 e C63</strong> con requisiti aggiuntivi per strutture soggette a fatica. Limitano più strettamente angolo al piede, incisioni marginali e disallineamento. Su un pezzo critico a fatica, il disegno dovrebbe indicare il livello adatto e non solo "B".</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> su pezzi soggetti a carichi variabili come telai di rimorchi, bracci e telai vibranti, durante il controllo visivo prestiamo particolare attenzione a profilo del piede, incisioni marginali e punti di ripresa. Dove il disegno lo richiede, eseguiamo la molatura del piede e la registriamo. <a href="../tozalti-kaynak.html">Arco sommerso per cordoni lunghi →</a></p></div>
`,
    faq: [
      ['Cos’è una classe FAT?', 'L’escursione di tensione (MPa) che un dettaglio saldato sopporta a 2 milioni di cicli. Le raccomandazioni IIW e la EN 1993-1-9 classificano i dettagli con questo valore.'],
      ['Un acciaio più resistente allunga la vita a fatica?', 'Nei giunti come saldati, poco. Geometria del dettaglio e qualità del piede determinano la resistenza a fatica.'],
      ['Che relazione c’è tra escursione di tensione e vita?', 'Per i dettagli saldati la pendenza S-N è tipicamente 3; raddoppiando l’escursione la vita scende a un ottavo.'],
      ['A cosa serve la molatura del piede?', 'Rimuove la transizione brusca e i microdifetti al piede, ritardando l’innesco della cricca. Non agisce sulla rottura alla radice.']
    ],
    cta_h3: 'Per pezzi che lavorano sotto carichi variabili',
    cta_p: 'Inviateci il disegno di telaio, braccio o struttura vibrante; valutiamo insieme livello di qualità e dettagli di saldatura.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Vermoeiing van lasverbindingen: FAT-klassen, S-N-lijnen en details die de levensduur verlengen',
    meta: 'Waarom scheuren gelaste delen door vermoeiing? FAT-klassen en S-N-lijnen, typische detailcategorieën, invloed van de spanningswijdte, verbetermethoden zoals teenslijpen, ISO 5817 bijlage C en ontwerpadvies.',
    og: 'Vermoeiing van lasverbindingen en FAT-klassen',
    tag: 'Ontwerp · Sterkte',
    h1: 'Vermoeiing van lasverbindingen: FAT-klassen, S-N-lijnen en details die de levensduur verlengen',
    crumb: 'Vermoeiing van lassen',
    read: '7 min lezen',
    body: `
<p>Een gelast onderdeel dat ruim door de statische toets komt, kan onder wisselende belasting binnen enkele jaren scheuren. Trailerchassis, kraangieken, trillende machineframes en landbouwmachines zijn typische voorbeelden. Dit artikel legt uit hoe vermoeiing van lasverbindingen wordt beoordeeld en welke ontwerp- en productiekeuzes de levensduur verlengen.</p>
<h2>Waarom de las het zwakke punt is</h2>
<ul>
<li><strong>Geometrische spanningsconcentratie:</strong> lasteen en wortel zijn plaatsen met een abrupte doorsnedeverandering.</li>
<li><strong>Microfouten:</strong> bij de lasteen zijn altijd kleine inkartelingen, slakresten of scherpe overgangen; de scheur heeft weinig tijd nodig om te ontstaan.</li>
<li><strong>Restspanningen:</strong> na het lassen blijven trekrestspanningen rond de vloeigrens achter. Daarom telt bij lasverbindingen de <strong>spanningswijdte (Δσ)</strong> meer dan de gemiddelde spanning.</li>
</ul>
<p>Belangrijk gevolg: bij verbindingen in gelaste toestand verhoogt staal met hogere sterkte de vermoeiingssterkte nauwelijks. Bij vermoeiing telt de detailgeometrie meer dan de materiaalkwaliteit.</p>
<h2>FAT-klassen en S-N-lijn</h2>
<p>De IIW-aanbevelingen (International Institute of Welding) en EN 1993-1-9 delen gelaste details in naar <strong>FAT-klasse</strong> of detailcategorie. De FAT-waarde is de spanningswijdte (MPa) die het detail bij <strong>2 miljoen cycli</strong> verdraagt. Voor gelaste details is de helling van de S-N-lijn typisch <strong>m = 3</strong>:</p>
<p><strong>N = 2 × 10⁶ × (FAT / Δσ)³</strong></p>
<p>Het effect is groot: een verdubbelde spanningswijdte geeft een achtste van de levensduur; 20 % minder spanningswijdte verdubbelt die ongeveer.</p>
<h2>Typische detailcategorieën (richtwaarden)</h2>
<table class="data-table"><thead><tr><th>Detail</th><th>Ca. FAT (MPa)</th></tr></thead><tbody>
<tr><td>Ongelaste plaat met bewerkte randen</td><td>≈ 160</td></tr>
<tr><td>Dwarse stompe las, vlak geslepen</td><td>≈ 112</td></tr>
<tr><td>Dwarse stompe las in gelaste toestand</td><td>≈ 80-90</td></tr>
<tr><td>Niet-dragende dwarsverstijving (hoeklas, T- of kruisverbinding)</td><td>≈ 80</td></tr>
<tr><td>Lange langsverbinding (knoopplaat, verstijving langer dan 100 mm)</td><td>≈ 71 en lager</td></tr>
<tr><td>Dragende hoeklas, bezwijken vanuit de wortel (op keeldoorsnede)</td><td>≈ 36</td></tr>
</tbody></table>
<p>De waarden hangen af van dikte, geometrie en norm; voor het echte ontwerp gebruik je de detailtabellen van de geldende norm. De tabel laat toch zien dat een detail dat vanuit de wortel van een hoeklas bezwijkt, bij gelijke belasting meer dan drie keer zwakker is in spanningswijdte dan een geslepen stompe las.</p>
<h2>Ontwerpkeuzes die de levensduur verlengen</h2>
<ul>
<li><strong>Lassen weghouden uit hoog belaste zones:</strong> ogen, knoopplaten en verstijvingen bij de neutrale lijn plaatsen in plaats van bij het maximale moment.</li>
<li><strong>Wortelbezwijken voorkomen:</strong> bij dragende verbindingen volledig doorgelaste lassen overwegen in plaats van hoeklassen.</li>
<li><strong>Dikteovergangen afschuinen:</strong> overgangen zoals 1:4 tussen platen van verschillende dikte.</li>
<li><strong>Uiteinden van verstijvingen verlopen:</strong> afgeschuinde of afgeronde uiteinden van lange langsverbindingen verlagen de spanningsconcentratie.</li>
<li><strong>Geen onderbroken lassen in vermoeiingszones:</strong> elk begin- en eindpunt is een mogelijk scheurbegin.</li>
</ul>
<h2>Productiemethoden die de levensduur verlengen</h2>
<p>Nabehandelingen maken de lasteengeometrie gladder of zetten restspanning om in druk:</p>
<ul>
<li><strong>Teenslijpen (burr grinding):</strong> een groef met kleine straal wordt bij de lasteen geslepen, waardoor de overgang vloeiender wordt en microfouten verdwijnen.</li>
<li><strong>TIG-omsmelten (TIG dressing):</strong> de lasteen wordt zonder toevoegmateriaal omgesmolten voor een gladder profiel.</li>
<li><strong>Hoogfrequente mechanische impact (HFMI):</strong> impactbehandeling bij de lasteen brengt drukrestspanningen aan.</li>
</ul>
<p>De IIW-aanbevelingen kennen hiervoor onder voorwaarden een hogere sterkte toe. Tegen wortelbezwijken helpen ze niet, en de toepassing moet worden gedocumenteerd.</p>
<h2>ISO 5817 bijlage C: op vermoeiing belaste lassen</h2>
<p>De editie 2014 van ISO 5817 definieert niveaus als <strong>B125, B90 en C63</strong> met extra eisen voor op vermoeiing belaste constructies. Ze begrenzen lasteenhoek, inkartelingen en kantverschuiving strenger. Bij een vermoeiingskritisch deel hoort de tekening het juiste niveau te noemen in plaats van alleen "B".</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij delen onder wisselende belasting zoals trailerchassis, gieken en trillende frames letten we bij de visuele inspectie extra op lasteenprofiel, inkartelingen en begin- en eindpunten. Waar de tekening het vraagt, slijpen we de lasteen en leggen dat vast. <a href="../tozalti-kaynak.html">Onder poeder lassen voor lange naden →</a></p></div>
`,
    faq: [
      ['Wat is een FAT-klasse?', 'De spanningswijdte (MPa) die een gelast detail bij 2 miljoen lastcycli verdraagt. IIW-aanbevelingen en EN 1993-1-9 delen details hiermee in.'],
      ['Verlengt staal met hogere sterkte de levensduur?', 'Bij verbindingen in gelaste toestand nauwelijks. Detailgeometrie en kwaliteit van de lasteen bepalen de vermoeiingssterkte.'],
      ['Hoe hangen spanningswijdte en levensduur samen?', 'Bij gelaste details is de S-N-helling typisch 3; een verdubbelde spanningswijdte geeft een achtste van de levensduur.'],
      ['Wat doet teenslijpen?', 'Het verwijdert de scherpe overgang en microfouten bij de lasteen en vertraagt zo het ontstaan van scheuren. Op wortelbezwijken heeft het geen effect.']
    ],
    cta_h3: 'Voor delen onder wisselende belasting',
    cta_p: 'Stuur uw tekening van chassis, giek of trillend frame; we bespreken kwaliteitsniveau en lasdetails met u.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Utmatting i sveiste forbindelser: FAT-klasser, S-N-kurver og detaljer som forlenger levetiden',
    meta: 'Hvorfor sprekker sveiste deler av utmatting? FAT-klasser og S-N-kurver, typiske detaljkategorier, effekten av spenningsvidde, forbedringsmetoder som tåsliping, ISO 5817 vedlegg C og konstruksjonsråd.',
    og: 'Utmatting i sveiste forbindelser og FAT-klasser',
    tag: 'Konstruksjon · Fasthet',
    h1: 'Utmatting i sveiste forbindelser: FAT-klasser, S-N-kurver og detaljer som forlenger levetiden',
    crumb: 'Utmatting i sveis',
    read: '7 min lesing',
    body: `
<p>En sveiset del som klarer den statiske kontrollen med god margin, kan likevel sprekke i løpet av få år under varierende last. Tilhengerchassis, kranbommer, vibrerende maskinrammer og landbruksutstyr er typiske eksempler. Denne artikkelen forklarer hvordan utmatting i sveiste forbindelser vurderes, og hvilke konstruksjons- og produksjonsvalg som forlenger levetiden.</p>
<h2>Hvorfor sveisen er det svake punktet</h2>
<ul>
<li><strong>Geometrisk spenningskonsentrasjon:</strong> sveisetå og rot er steder med brå tverrsnittsendring.</li>
<li><strong>Mikrodefekter:</strong> ved tåen finnes alltid små sidekroker, slaggrester eller skarpe overganger; sprekken trenger lite tid for å starte.</li>
<li><strong>Restspenninger:</strong> sveising etterlater strekkrestspenninger nær flytegrensen. For sveiste forbindelser betyr derfor <strong>spenningsvidden (Δσ)</strong> mer enn middelspenningen.</li>
</ul>
<p>En viktig følge: for forbindelser i sveiset tilstand gir høyfast stål liten økning i utmattingsfasthet. Ved utmatting betyr detaljgeometrien mer enn stålkvaliteten.</p>
<h2>FAT-klasser og S-N-kurven</h2>
<p>IIW-anbefalingene (International Institute of Welding) og EN 1993-1-9 klassifiserer sveiste detaljer etter <strong>FAT-klasse</strong> eller detaljkategori. FAT-verdien er spenningsvidden (MPa) detaljen tåler ved <strong>2 millioner sykluser</strong>. For sveiste detaljer er helningen typisk <strong>m = 3</strong>:</p>
<p><strong>N = 2 × 10⁶ × (FAT / Δσ)³</strong></p>
<p>Effekten er kraftig: dobbel spenningsvidde gir en åttendedel av levetiden; 20 % lavere spenningsvidde dobler den omtrent.</p>
<h2>Typiske detaljkategorier (veiledende)</h2>
<table class="data-table"><thead><tr><th>Detalj</th><th>Ca. FAT (MPa)</th></tr></thead><tbody>
<tr><td>Usveiset plate med maskinerte kanter</td><td>≈ 160</td></tr>
<tr><td>Tverrgående buttsveis slipt i flukt</td><td>≈ 112</td></tr>
<tr><td>Tverrgående buttsveis i sveiset tilstand</td><td>≈ 80-90</td></tr>
<tr><td>Ikke-bærende tverrstiver (kilsveis, T- eller kryssforbindelse)</td><td>≈ 80</td></tr>
<tr><td>Lang langsgående festeplate (knuteplate, stiver over 100 mm)</td><td>≈ 71 og lavere</td></tr>
<tr><td>Bærende kilsveis, brudd fra roten (på halsmålet)</td><td>≈ 36</td></tr>
</tbody></table>
<p>Verdiene varierer med tykkelse, geometri og standard; reell dimensjonering skal bruke detaljtabellene i gjeldende standard. Tabellen viser likevel at en detalj som brytes fra roten av en kilsveis, ved samme last er mer enn tre ganger svakere i spenningsvidde enn en slipt buttsveis.</p>
<h2>Konstruksjonsvalg som forlenger levetiden</h2>
<ul>
<li><strong>Hold sveiser unna høyt belastede soner:</strong> plasser ører, knuteplater og stivere nær nøytralaksen i stedet for der momentet er størst.</li>
<li><strong>Unngå rotbrudd:</strong> vurder gjennomsveis i stedet for kilsveis i bærende forbindelser.</li>
<li><strong>Myk opp tykkelsesoverganger:</strong> bruk avtrapping som 1:4 mellom plater med ulik tykkelse.</li>
<li><strong>Myk opp endene på stivere:</strong> avfasede eller avrundede ender på lange langsgående fester reduserer spenningskonsentrasjonen.</li>
<li><strong>Unngå avbrutt sveis i utmattingssoner:</strong> hvert start- og stoppunkt er et mulig sprekkstartsted.</li>
</ul>
<h2>Produksjonsmetoder som forlenger levetiden</h2>
<p>Etterbehandlingsmetoder gjør tågeometrien jevnere eller gjør restspenningen om til trykk:</p>
<ul>
<li><strong>Tåsliping (burr grinding):</strong> et spor med liten radius slipes ved tåen, overgangen blir jevnere og mikrodefekter fjernes.</li>
<li><strong>TIG-omsmelting (TIG dressing):</strong> tåen smeltes om uten tilsett for en mykere profil.</li>
<li><strong>Høyfrekvent mekanisk slagbehandling (HFMI):</strong> slagbehandling ved tåen gir trykkrestspenninger.</li>
</ul>
<p>IIW-anbefalingene gir under bestemte forhold ekstra fasthet for disse metodene. De hjelper ikke mot rotbrudd, og bruken må dokumenteres.</p>
<h2>ISO 5817 vedlegg C: utmattingsbelastede sveiser</h2>
<p>2014-utgaven av ISO 5817 definerer nivåer som <strong>B125, B90 og C63</strong> med tilleggskrav for utmattingsbelastede konstruksjoner. De begrenser tåvinkel, sidekroker og kantforskyvning strengere. På en utmattingskritisk del bør tegningen angi riktig nivå, ikke bare «B».</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> på deler under varierende last som tilhengerchassis, bommer og vibrerende rammer følger vi særlig med på tåprofil, sidekroker og start- og stoppunkter ved visuell kontroll. Der tegningen krever det, utfører vi tåsliping og dokumenterer det. <a href="../tozalti-kaynak.html">Pulverbuesveising for lange sømmer →</a></p></div>
`,
    faq: [
      ['Hva er en FAT-klasse?', 'Spenningsvidden (MPa) en sveiset detalj tåler ved 2 millioner lastsykluser. IIW-anbefalingene og EN 1993-1-9 klassifiserer detaljer etter denne verdien.'],
      ['Gir høyfast stål lengre utmattingslevetid?', 'For forbindelser i sveiset tilstand lite. Detaljgeometri og kvaliteten på sveisetåen bestemmer utmattingsfastheten.'],
      ['Hvordan henger spenningsvidde og levetid sammen?', 'For sveiste detaljer er S-N-helningen typisk 3; dobbel spenningsvidde gir en åttendedel av levetiden.'],
      ['Hva gjør tåsliping?', 'Den fjerner den skarpe overgangen og mikrodefekter ved tåen og forsinker sprekkstart. Den har ingen effekt på rotbrudd.']
    ],
    cta_h3: 'For deler som arbeider under varierende last',
    cta_p: 'Send tegning av chassis, bom eller vibrerende ramme; vi går gjennom kvalitetsnivå og sveisedetaljer med deg.',
    cta_btn: 'Be om tilbud →'
  }
};
