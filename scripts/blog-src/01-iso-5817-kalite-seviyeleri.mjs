export default {
  order: 1,
  slug: 'iso-5817-kalite-seviyeleri',
  key: 'p01_iso5817',
  date: '2025-11-17',
  keywords: 'ISO 5817, ISO 5817 kalite seviyesi B C D, kaynak kalite seviyesi, ISO 5817 level B, ISO 5817 level C, Bewertungsgruppe B C D, weld quality level',
  related: ['kaynak-kalite-kontrol', 'en-1090-exc3-nedir', 'ndt-tahribatsiz-muayene-yontemleri', 'kaynak-hatalari-onarim'],
  tr: {
    title: 'ISO 5817 Kalite Seviyeleri B, C, D: Çizime Hangisini Yazmalı?',
    meta: 'ISO 5817 kalite seviyeleri B, C ve D nedir, farkları neler, çizime hangisi yazılmalı? Yanma oluğu, gözenek ve dikiş fazlalığı sınırları, EN 1090 ilişkisi ve maliyete etkisi.',
    og: 'ISO 5817 Kalite Seviyeleri: B, C ve D Farkı',
    tag: 'Standartlar · Kaynak Kalitesi',
    h1: 'ISO 5817 Kalite Seviyeleri B, C ve D: Çizime Hangisini Yazmalısınız?',
    crumb: 'ISO 5817 Kalite Seviyeleri',
    read: '9 dk okuma',
    body: `
<p>Bir kaynaklı parça çiziminde "ISO 5817-C" notu, kaynak dikişlerinin hangi hataları ne kadar tolere edeceğini tek satırda tanımlar. Bu not hem fiyatı hem teslim süresini hem de muayene kapsamını belirler. Yine de pek çok çizimde kalite seviyesi ya hiç yazılmaz ya da "her ihtimale karşı" B seçilir. Bu yazıda ISO 5817'nin ne olduğunu, B, C ve D seviyeleri arasındaki pratik farkları ve doğru seviyeyi nasıl seçeceğinizi anlatıyoruz.</p>
<h2>ISO 5817 Nedir?</h2>
<p>EN ISO 5817, çelik, nikel, titanyum ve alaşımlarında ergitme kaynağıyla (elektron ve lazer ışını hariç) yapılan dikişlerdeki kusurlar için kabul sınırları veren standarttır. 0,5 mm ve üzeri malzeme kalınlıklarını kapsar. Güncel baskısı 2023 tarihlidir. Alüminyum için ayrı bir standart vardır: EN ISO 10042.</p>
<p>Standart, ISO 6520-1'deki kusur numaralarını kullanır. Örneğin 100 çatlak, 2017 yüzey gözeneği, 5011 sürekli yanma oluğu, 502 aşırı dikiş yüksekliği, 5213 yetersiz kaynak kalınlığı anlamına gelir. Her kusur için üç seviyede ayrı sınır tanımlanır:</p>
<table class="data-table"><thead><tr><th>Seviye</th><th>Anlamı</th><th>Tipik kullanım</th></tr></thead><tbody>
<tr><td>B</td><td>Sıkı (yüksek)</td><td>Yorulma yüklü yapılar, EXC3 ve EXC4 işler, basınçlı ekipman, kaldırma ekipmanı</td></tr>
<tr><td>C</td><td>Orta</td><td>Genel çelik konstrüksiyon, makine şaseleri, EXC2 işler</td></tr>
<tr><td>D</td><td>Düşük (orta altı)</td><td>Düşük gerilmeli ikincil parçalar, korkuluk, kapak, muhafaza, EXC1 işler</td></tr>
</tbody></table>
<p>Önemli bir not: ISO 5817 bir "uygunluk" standardı değildir. Bir dikişin D seviyesini karşılaması, o dikişin işlevi için yeterli olduğu anlamına gelmez. Seviyeyi parçanın yüküne, emniyetine ve üretim ekonomisine göre tasarımcı seçer.</p>
<h2>Seviyeler Arasındaki Fark: Örnek Sınırlar</h2>
<p>Farkı somut görmek için en sık karşılaşılan kusurlardan bazılarının sınırları (t: levha kalınlığı, a: köşe dikişi kalınlığı, b: dikiş genişliği; tüm değerler mm):</p>
<table class="data-table"><thead><tr><th>Kusur</th><th>D</th><th>C</th><th>B</th></tr></thead><tbody>
<tr><td>Çatlak (100)</td><td>İzin yok</td><td>İzin yok</td><td>İzin yok</td></tr>
<tr><td>Yüzey gözeneği (2017)</td><td>d ≤ 0,3 a, en çok 3</td><td>d ≤ 0,2 a, en çok 2</td><td>İzin yok</td></tr>
<tr><td>Sürekli yanma oluğu (5011)</td><td>h ≤ 0,2 t, en çok 1</td><td>h ≤ 0,1 t, en çok 0,5</td><td>h ≤ 0,05 t, en çok 0,5</td></tr>
<tr><td>Alın dikişi fazlalığı (502)</td><td>h ≤ 1 + 0,25 b, en çok 10</td><td>h ≤ 1 + 0,15 b, en çok 7</td><td>h ≤ 1 + 0,1 b, en çok 5</td></tr>
<tr><td>Yetersiz köşe dikişi kalınlığı (5213)</td><td>h ≤ 0,3 + 0,1 a, en çok 2 (kısa)</td><td>h ≤ 0,3 + 0,1 a, en çok 1 (kısa)</td><td>İzin yok</td></tr>
</tbody></table>
<p>Tablodaki değerler standarttan özetlenmiştir ve 0,5–3 mm arası ince saclar için bazı satırlarda farklı sınırlar vardır. Kesin değerler için güncel standart metni esas alınmalıdır.</p>
<p>Görüldüğü gibi B seviyesinde yüzey gözeneği ve yetersiz dikiş kalınlığına hiç izin verilmez, yanma oluğu ise neredeyse sıfırdır. Bu, kaynakçının daha yavaş ve kontrollü çalışması, daha fazla taşlama ve daha sık onarım demektir.</p>
<h2>Yorulma İçin Ek Seviyeler: B 125, B 90, C 63</h2>
<p>ISO 5817'nin ek bölümü (Ek C), yorulma yüklü yapılar için ek şartlar tanımlar. B 125, B 90 ve C 63 gibi gösterimler, tasarımda kullanılan yorulma sınıfına (FAT) karşılık gelir. Örneğin treyler şasisi, vinç bomu veya titreşimli makine gövdesi gibi değişken yük gören parçalarda yalnızca "B" yazmak yerine yorulma hesabındaki sınıfa uygun ek seviyenin yazılması gerekir. Bu seviyelerde dikiş geçişindeki açı, kenar yanma oluğu ve kök tarafı kusurları için daha sıkı şartlar vardır; bazı durumlarda dikiş ucunun taşlanması gerekir.</p>
<h2>EN 1090 ile İlişkisi</h2>
<p>Çelik yapılarda EN 1090-2, uygulama sınıfına (EXC) göre varsayılan kalite seviyesini belirler:</p>
<ul>
<li><strong>EXC1:</strong> Kalite seviyesi D</li>
<li><strong>EXC2:</strong> Kalite seviyesi C (bazı kusur tipleri için D'ye izin verilir)</li>
<li><strong>EXC3:</strong> Kalite seviyesi B</li>
<li><strong>EXC4:</strong> Kalite seviyesi B ve ek şartlar</li>
</ul>
<p>Yani çiziminizde EXC2 yazıyorsa ayrıca seviye yazmasanız da C seviyesi uygulanır. Ancak EN 1090 kapsamı dışındaki makine parçalarında böyle bir varsayılan yoktur; seviye çizimde açıkça yazılmalıdır.</p>
<h2>NDT Kabul Seviyeleriyle Bağlantısı</h2>
<p>ISO 5817 kalite seviyesi, tahribatsız muayene raporlarında kullanılan kabul seviyelerini de belirler. ISO 17635 bu eşleştirmeyi verir:</p>
<table class="data-table"><thead><tr><th>Yöntem</th><th>B için</th><th>C için</th><th>D için</th></tr></thead><tbody>
<tr><td>VT (ISO 17637)</td><td>ISO 5817 B</td><td>ISO 5817 C</td><td>ISO 5817 D</td></tr>
<tr><td>RT (ISO 10675-1)</td><td>Seviye 1</td><td>Seviye 2</td><td>Seviye 3</td></tr>
<tr><td>UT (ISO 11666)</td><td>Seviye 2</td><td>Seviye 3</td><td>Seviye 3</td></tr>
<tr><td>MT / PT (ISO 23278 / 23277)</td><td>2X</td><td>2X</td><td>3X</td></tr>
</tbody></table>
<p>Bu nedenle muayene raporunda "ISO 11666 AL2" gibi bir ifade görüyorsanız, dikişin B seviyesine göre değerlendirildiğini anlarsınız.</p>
<h2>Seviye Seçimi Maliyeti Nasıl Etkiler?</h2>
<p>Kalite seviyesi yükseldikçe maliyet artar. Artış birkaç kaynaktan gelir:</p>
<ul>
<li><strong>Kaynak süresi:</strong> B seviyesinde dikiş profili ve yanma oluğu daha sıkı kontrol edildiği için kaynak hızı düşer.</li>
<li><strong>Taşlama ve onarım:</strong> C seviyesinde kabul edilen küçük bir gözenek B seviyesinde onarım gerektirir.</li>
<li><strong>Muayene kapsamı:</strong> Yüksek seviyeler genellikle daha yüksek NDT oranıyla birlikte istenir.</li>
<li><strong>Kaynakçı ve prosedür:</strong> B seviyesinde çalışacak kaynakçının deneyimi ve onaylı WPS'in kapsamı daha kritiktir.</li>
</ul>
<p>Pratikte tüm parçaya B yazmak yerine, kritik dikişleri çizimde ayrı işaretleyip geri kalanı C veya D bırakmak en ekonomik yoldur. Örneğin bir makine şasesinde motor bağlantı dikişleri B, genel çerçeve dikişleri C, sac kapak ve muhafaza dikişleri D olarak tanımlanabilir.</p>
<h2>Çizimde Nasıl Yazılmalı?</h2>
<ul>
<li>Genel not: "Kaynak kalite seviyesi EN ISO 5817-C, aksi belirtilmedikçe."</li>
<li>Kritik dikişler için kaynak sembolünün kuyruğunda: "ISO 5817-B".</li>
<li>Yorulma yüklü dikişler için: "ISO 5817-B 90" gibi ek seviye.</li>
<li>Gerekirse muayene kapsamı: "VT %100, UT %10 (ISO 17640, ISO 11666 AL3)".</li>
<li>Alüminyum parçalar için ISO 5817 değil EN ISO 10042 referansı.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Çizimde kalite seviyesi belirtilmemişse teklif aşamasında parça kullanımına göre öneri sunar, dikiş bazında seviye ayrımı yapılmasına yardımcı oluruz. Gözle muayene ve UT kendi seviye 2 personelimizle yapılır; RT çekimi partner laboratuvarda yapılır, değerlendirmesi bizde. Muayene sonuçları ISO 5817 seviyesine göre raporlanır. <a href="../kalite.html">Kalite sistemimizi inceleyin →</a></p></div>
`,
    faq: [
      ['ISO 5817 B mi C mi daha iyidir?', 'B daha sıkı bir seviyedir ve daha az kusura izin verir. Ancak "daha iyi" her zaman doğru seçim değildir. Yükü düşük bir parçada B seviyesi gereksiz maliyet yaratır. Seviye, parçanın yüküne ve emniyet gereksinimine göre seçilmelidir.'],
      ['Çizimde kalite seviyesi yazmazsam ne olur?', 'EN 1090 kapsamındaki işlerde EXC sınıfına göre varsayılan seviye uygulanır (örneğin EXC2 için C). Kapsam dışındaki işlerde ise üretici ile alıcı arasında tartışma çıkabilir. Seviyeyi her zaman açıkça yazmanızı öneririz.'],
      ['ISO 5817 alüminyum kaynağı için kullanılabilir mi?', 'Hayır. Alüminyum ve alaşımları için EN ISO 10042 kullanılır. Yapısı ISO 5817 ile benzerdir ve aynı B, C, D seviyelerini tanımlar.'],
      ['ISO 5817 iç kusurları da kapsar mı?', 'Evet. Standart hem yüzey hem iç kusurları kapsar. İç kusurlar RT veya UT ile tespit edilir ve ISO 17635\'teki eşleştirmeye göre ilgili kabul seviyesi kullanılır.']
    ],
    cta_h3: 'Çiziminizde hangi kalite seviyesi doğru?',
    cta_p: 'Çiziminizi gönderin; dikiş bazında kalite seviyesi önerisiyle birlikte 48 saat içinde teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'ISO 5817 Quality Levels B, C, D: Which One Belongs on the Drawing?',
    meta: 'What are ISO 5817 quality levels B, C and D, how do they differ and which should you specify? Limits for undercut, porosity and excess weld metal, the EN 1090 link and cost impact.',
    og: 'ISO 5817 Quality Levels: B vs C vs D',
    tag: 'Standards · Weld Quality',
    h1: 'ISO 5817 Quality Levels B, C and D: Which One Should You Specify?',
    crumb: 'ISO 5817 Quality Levels',
    read: '9 min read',
    body: `
<p>On a weldment drawing, the note "ISO 5817-C" defines in a single line how much imperfection the welds may contain. It drives price, lead time and inspection scope. Yet many drawings either omit the quality level or specify B "just to be safe". This article explains what ISO 5817 is, the practical differences between levels B, C and D, and how to choose the right one.</p>
<h2>What Is ISO 5817?</h2>
<p>EN ISO 5817 sets acceptance limits for imperfections in fusion welds (excluding electron and laser beam welding) in steel, nickel, titanium and their alloys. It covers material thicknesses from 0.5 mm. The current edition dates from 2023. Aluminium has its own standard: EN ISO 10042.</p>
<p>The standard uses the imperfection numbers of ISO 6520-1. For example, 100 is a crack, 2017 surface pore, 5011 continuous undercut, 502 excess weld metal and 5213 insufficient throat thickness. Each imperfection has a separate limit for three levels:</p>
<table class="data-table"><thead><tr><th>Level</th><th>Meaning</th><th>Typical use</th></tr></thead><tbody>
<tr><td>B</td><td>Stringent</td><td>Fatigue-loaded structures, EXC3 and EXC4 work, pressure equipment, lifting equipment</td></tr>
<tr><td>C</td><td>Intermediate</td><td>General steel structures, machine frames, EXC2 work</td></tr>
<tr><td>D</td><td>Moderate</td><td>Low-stress secondary parts, railings, covers, guards, EXC1 work</td></tr>
</tbody></table>
<p>One important point: ISO 5817 is not a fitness-for-purpose standard. A weld meeting level D is not automatically adequate for its function. The designer chooses the level according to load, safety and production economics.</p>
<h2>How the Levels Differ: Example Limits</h2>
<p>To see the difference in concrete terms, here are the limits for some of the most common imperfections (t: plate thickness, a: fillet throat, b: weld width; all values in mm):</p>
<table class="data-table"><thead><tr><th>Imperfection</th><th>D</th><th>C</th><th>B</th></tr></thead><tbody>
<tr><td>Crack (100)</td><td>Not permitted</td><td>Not permitted</td><td>Not permitted</td></tr>
<tr><td>Surface pore (2017)</td><td>d ≤ 0.3 a, max 3</td><td>d ≤ 0.2 a, max 2</td><td>Not permitted</td></tr>
<tr><td>Continuous undercut (5011)</td><td>h ≤ 0.2 t, max 1</td><td>h ≤ 0.1 t, max 0.5</td><td>h ≤ 0.05 t, max 0.5</td></tr>
<tr><td>Excess weld metal, butt (502)</td><td>h ≤ 1 + 0.25 b, max 10</td><td>h ≤ 1 + 0.15 b, max 7</td><td>h ≤ 1 + 0.1 b, max 5</td></tr>
<tr><td>Insufficient fillet throat (5213)</td><td>h ≤ 0.3 + 0.1 a, max 2 (short)</td><td>h ≤ 0.3 + 0.1 a, max 1 (short)</td><td>Not permitted</td></tr>
</tbody></table>
<p>The values are summarised from the standard; some rows have different limits for thin sheet from 0.5 to 3 mm. Always use the current text of the standard for exact values.</p>
<p>At level B, surface porosity and insufficient throat are not permitted at all and undercut is almost zero. That means slower, more controlled welding, more grinding and more frequent repairs.</p>
<h2>Additional Fatigue Levels: B 125, B 90, C 63</h2>
<p>Annex C of ISO 5817 defines additional requirements for fatigue-loaded structures. Designations such as B 125, B 90 and C 63 correspond to the fatigue class (FAT) used in design. On parts with variable loads, such as trailer chassis, crane booms or vibrating machine frames, the drawing should state the additional level matching the fatigue calculation instead of a plain "B". These levels set tighter limits on toe angle, undercut and root-side imperfections, and sometimes require weld toe grinding.</p>
<h2>Link with EN 1090</h2>
<p>For steel structures, EN 1090-2 sets the default quality level by execution class:</p>
<ul>
<li><strong>EXC1:</strong> quality level D</li>
<li><strong>EXC2:</strong> quality level C (D allowed for some imperfection types)</li>
<li><strong>EXC3:</strong> quality level B</li>
<li><strong>EXC4:</strong> quality level B plus additional requirements</li>
</ul>
<p>So if your drawing says EXC2, level C applies even without a separate note. Machine parts outside the scope of EN 1090 have no such default, and the level must be written on the drawing.</p>
<h2>Link with NDT Acceptance Levels</h2>
<p>The ISO 5817 quality level also determines the acceptance levels used in NDT reports. ISO 17635 gives the correlation:</p>
<table class="data-table"><thead><tr><th>Method</th><th>For B</th><th>For C</th><th>For D</th></tr></thead><tbody>
<tr><td>VT (ISO 17637)</td><td>ISO 5817 B</td><td>ISO 5817 C</td><td>ISO 5817 D</td></tr>
<tr><td>RT (ISO 10675-1)</td><td>Level 1</td><td>Level 2</td><td>Level 3</td></tr>
<tr><td>UT (ISO 11666)</td><td>Level 2</td><td>Level 3</td><td>Level 3</td></tr>
<tr><td>MT / PT (ISO 23278 / 23277)</td><td>2X</td><td>2X</td><td>3X</td></tr>
</tbody></table>
<p>So when an inspection report says "ISO 11666 AL2", the weld was assessed against level B.</p>
<h2>How the Level Affects Cost</h2>
<p>Cost rises with the quality level, for several reasons:</p>
<ul>
<li><strong>Welding time:</strong> at level B, profile and undercut are controlled more tightly, so travel speed drops.</li>
<li><strong>Grinding and repair:</strong> a small pore accepted at level C needs repair at level B.</li>
<li><strong>Inspection scope:</strong> higher levels usually come with a higher NDT rate.</li>
<li><strong>Welder and procedure:</strong> welder experience and WPS coverage matter more at level B.</li>
</ul>
<p>In practice, the most economical approach is to mark critical welds separately and leave the rest at C or D, rather than writing B for the whole part. On a machine frame, for instance, motor mounting welds can be B, general frame welds C, and sheet cover and guard welds D.</p>
<h2>How to Write It on the Drawing</h2>
<ul>
<li>General note: "Weld quality level EN ISO 5817-C unless otherwise stated."</li>
<li>For critical welds, in the tail of the weld symbol: "ISO 5817-B".</li>
<li>For fatigue-loaded welds, an additional level such as "ISO 5817-B 90".</li>
<li>If needed, inspection scope: "VT 100 %, UT 10 % (ISO 17640, ISO 11666 AL3)".</li>
<li>For aluminium parts, reference EN ISO 10042 instead of ISO 5817.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> if the drawing has no quality level, we suggest one at quotation stage based on how the part is used and help split levels weld by weld. Visual testing and UT are carried out by our own level 2 personnel; RT exposure is done at a partner laboratory and evaluated by us. Results are reported against the ISO 5817 level. <a href="../kalite.html">See our quality system →</a></p></div>
`,
    faq: [
      ['Is ISO 5817 B better than C?', 'B is more stringent and allows fewer imperfections. But "better" is not always the right choice. On a lightly loaded part, level B only adds cost. Choose the level according to the load and safety requirements of the part.'],
      ['What happens if the drawing has no quality level?', 'Under EN 1090, the default level for the execution class applies (for example C for EXC2). Outside that scope, disputes between manufacturer and buyer are likely. We recommend always stating the level explicitly.'],
      ['Can ISO 5817 be used for aluminium welds?', 'No. Aluminium and its alloys use EN ISO 10042. Its structure is similar to ISO 5817 and it defines the same levels B, C and D.'],
      ['Does ISO 5817 cover internal imperfections?', 'Yes. It covers both surface and internal imperfections. Internal ones are found by RT or UT, and the matching acceptance level from ISO 17635 is used.']
    ],
    cta_h3: 'Which quality level is right for your drawing?',
    cta_p: 'Send us your drawing and we will prepare a quotation within 48 hours, including a weld-by-weld quality level suggestion.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'ISO 5817 Bewertungsgruppen B, C, D: Welche gehört in die Zeichnung?',
    meta: 'Was bedeuten die Bewertungsgruppen B, C und D nach ISO 5817, wie unterscheiden sie sich und welche sollte man vorgeben? Grenzwerte für Einbrandkerben, Poren und Nahtüberhöhung, Bezug zu EN 1090 und Kosten.',
    og: 'ISO 5817 Bewertungsgruppen: B, C und D im Vergleich',
    tag: 'Normen · Schweißnahtqualität',
    h1: 'ISO 5817 Bewertungsgruppen B, C und D: Welche sollten Sie vorgeben?',
    crumb: 'ISO 5817 Bewertungsgruppen',
    read: '9 Min. Lesezeit',
    body: `
<p>Auf einer Schweißbaugruppen-Zeichnung legt der Vermerk „ISO 5817-C" in einer Zeile fest, wie viele Unregelmäßigkeiten die Nähte aufweisen dürfen. Er bestimmt Preis, Lieferzeit und Prüfumfang. Trotzdem fehlt die Bewertungsgruppe auf vielen Zeichnungen, oder es wird „sicherheitshalber" B gewählt. Dieser Beitrag erklärt, was ISO 5817 regelt, wie sich die Gruppen B, C und D in der Praxis unterscheiden und wie man die richtige auswählt.</p>
<h2>Was ist ISO 5817?</h2>
<p>DIN EN ISO 5817 legt Grenzwerte für Unregelmäßigkeiten an Schmelzschweißverbindungen (ohne Elektronen- und Laserstrahlschweißen) an Stahl, Nickel, Titan und deren Legierungen fest. Sie gilt ab 0,5 mm Werkstoffdicke. Die aktuelle Ausgabe stammt von 2023. Für Aluminium gibt es eine eigene Norm: DIN EN ISO 10042.</p>
<p>Die Norm verwendet die Ordnungsnummern der ISO 6520-1, zum Beispiel 100 Riss, 2017 Oberflächenpore, 5011 durchlaufende Einbrandkerbe, 502 zu große Nahtüberhöhung und 5213 zu kleine Kehlnahtdicke. Für jede Unregelmäßigkeit gibt es drei Grenzwerte:</p>
<table class="data-table"><thead><tr><th>Gruppe</th><th>Bedeutung</th><th>Typische Anwendung</th></tr></thead><tbody>
<tr><td>B</td><td>Hoch</td><td>Ermüdungsbeanspruchte Bauteile, EXC3 und EXC4, Druckgeräte, Hebezeuge</td></tr>
<tr><td>C</td><td>Mittel</td><td>Allgemeiner Stahlbau, Maschinengestelle, EXC2</td></tr>
<tr><td>D</td><td>Niedrig</td><td>Gering beanspruchte Nebenteile, Geländer, Deckel, Schutzhauben, EXC1</td></tr>
</tbody></table>
<p>Wichtig: ISO 5817 ist keine Gebrauchstauglichkeitsnorm. Eine Naht, die Gruppe D erfüllt, ist nicht automatisch für ihre Funktion geeignet. Die Gruppe wählt der Konstrukteur nach Beanspruchung, Sicherheit und Wirtschaftlichkeit.</p>
<h2>Unterschiede an Beispielgrenzwerten</h2>
<p>Zur Veranschaulichung die Grenzwerte einiger häufiger Unregelmäßigkeiten (t: Blechdicke, a: Kehlnahtdicke, b: Nahtbreite; alle Werte in mm):</p>
<table class="data-table"><thead><tr><th>Unregelmäßigkeit</th><th>D</th><th>C</th><th>B</th></tr></thead><tbody>
<tr><td>Riss (100)</td><td>Nicht zulässig</td><td>Nicht zulässig</td><td>Nicht zulässig</td></tr>
<tr><td>Oberflächenpore (2017)</td><td>d ≤ 0,3 a, max. 3</td><td>d ≤ 0,2 a, max. 2</td><td>Nicht zulässig</td></tr>
<tr><td>Durchlaufende Einbrandkerbe (5011)</td><td>h ≤ 0,2 t, max. 1</td><td>h ≤ 0,1 t, max. 0,5</td><td>h ≤ 0,05 t, max. 0,5</td></tr>
<tr><td>Nahtüberhöhung Stumpfnaht (502)</td><td>h ≤ 1 + 0,25 b, max. 10</td><td>h ≤ 1 + 0,15 b, max. 7</td><td>h ≤ 1 + 0,1 b, max. 5</td></tr>
<tr><td>Zu kleine Kehlnahtdicke (5213)</td><td>h ≤ 0,3 + 0,1 a, max. 2 (kurz)</td><td>h ≤ 0,3 + 0,1 a, max. 1 (kurz)</td><td>Nicht zulässig</td></tr>
</tbody></table>
<p>Die Werte sind aus der Norm zusammengefasst; für Bleche von 0,5 bis 3 mm gelten in einigen Zeilen abweichende Grenzen. Maßgeblich ist stets der aktuelle Normtext.</p>
<p>In Gruppe B sind Oberflächenporen und zu kleine Kehlnahtdicken gar nicht zulässig, Einbrandkerben nahezu nicht. Das bedeutet langsameres, kontrolliertes Schweißen, mehr Schleifarbeit und häufigere Nacharbeit.</p>
<h2>Zusätzliche Gruppen für Ermüdung: B 125, B 90, C 63</h2>
<p>Anhang C der ISO 5817 enthält zusätzliche Anforderungen für ermüdungsbeanspruchte Konstruktionen. Bezeichnungen wie B 125, B 90 und C 63 entsprechen der in der Bemessung verwendeten Kerbfallklasse (FAT). Bei Bauteilen mit wechselnder Last, etwa Anhängerfahrgestellen, Kranauslegern oder schwingenden Maschinengestellen, sollte statt eines einfachen „B" die zur Ermüdungsberechnung passende Zusatzgruppe angegeben werden. Diese Gruppen begrenzen Nahtübergangswinkel, Einbrandkerben und wurzelseitige Unregelmäßigkeiten strenger und erfordern teilweise das Beschleifen des Nahtübergangs.</p>
<h2>Bezug zur EN 1090</h2>
<p>Im Stahlbau legt EN 1090-2 die Bewertungsgruppe über die Ausführungsklasse fest:</p>
<ul>
<li><strong>EXC1:</strong> Bewertungsgruppe D</li>
<li><strong>EXC2:</strong> Bewertungsgruppe C (für einige Unregelmäßigkeiten D zulässig)</li>
<li><strong>EXC3:</strong> Bewertungsgruppe B</li>
<li><strong>EXC4:</strong> Bewertungsgruppe B mit Zusatzanforderungen</li>
</ul>
<p>Steht auf der Zeichnung EXC2, gilt also Gruppe C auch ohne gesonderten Vermerk. Für Maschinenteile außerhalb der EN 1090 gibt es keinen solchen Standard; dort muss die Gruppe auf der Zeichnung stehen.</p>
<h2>Bezug zu den Zulässigkeitsgrenzen der ZfP</h2>
<p>Die Bewertungsgruppe bestimmt auch die Zulässigkeitsgrenzen in Prüfberichten. ISO 17635 ordnet sie zu:</p>
<table class="data-table"><thead><tr><th>Verfahren</th><th>Für B</th><th>Für C</th><th>Für D</th></tr></thead><tbody>
<tr><td>VT (ISO 17637)</td><td>ISO 5817 B</td><td>ISO 5817 C</td><td>ISO 5817 D</td></tr>
<tr><td>RT (ISO 10675-1)</td><td>Stufe 1</td><td>Stufe 2</td><td>Stufe 3</td></tr>
<tr><td>UT (ISO 11666)</td><td>Stufe 2</td><td>Stufe 3</td><td>Stufe 3</td></tr>
<tr><td>MT / PT (ISO 23278 / 23277)</td><td>2X</td><td>2X</td><td>3X</td></tr>
</tbody></table>
<p>Steht im Prüfbericht „ISO 11666 AL2", wurde die Naht also nach Gruppe B bewertet.</p>
<h2>Einfluss auf die Kosten</h2>
<ul>
<li><strong>Schweißzeit:</strong> In Gruppe B werden Nahtform und Einbrandkerben enger kontrolliert, die Schweißgeschwindigkeit sinkt.</li>
<li><strong>Schleifen und Nacharbeit:</strong> Eine kleine Pore, die in C zulässig ist, muss in B ausgebessert werden.</li>
<li><strong>Prüfumfang:</strong> Höhere Gruppen gehen meist mit einem höheren ZfP-Anteil einher.</li>
<li><strong>Schweißer und Verfahren:</strong> Erfahrung des Schweißers und Geltungsbereich der WPS sind in Gruppe B kritischer.</li>
</ul>
<p>Am wirtschaftlichsten ist es, kritische Nähte gesondert zu kennzeichnen und den Rest in C oder D zu belassen, statt das ganze Bauteil in B zu fordern. Bei einem Maschinengestell können zum Beispiel die Nähte der Motorbefestigung B, die allgemeinen Rahmennähte C und die Nähte an Blechdeckeln und Schutzhauben D sein.</p>
<h2>So steht es richtig auf der Zeichnung</h2>
<ul>
<li>Allgemeiner Vermerk: „Bewertungsgruppe DIN EN ISO 5817-C, sofern nicht anders angegeben."</li>
<li>Für kritische Nähte in der Gabel des Schweißsymbols: „ISO 5817-B".</li>
<li>Für ermüdungsbeanspruchte Nähte eine Zusatzgruppe wie „ISO 5817-B 90".</li>
<li>Bei Bedarf der Prüfumfang: „VT 100 %, UT 10 % (ISO 17640, ISO 11666 AL3)".</li>
<li>Für Aluminiumteile DIN EN ISO 10042 statt ISO 5817.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Fehlt die Bewertungsgruppe auf der Zeichnung, schlagen wir im Angebot eine Gruppe passend zur Bauteilfunktion vor und helfen bei der nahtweisen Aufteilung. Sichtprüfung und UT führt unser eigenes Personal der Stufe 2 durch; RT-Aufnahmen entstehen in einem Partnerlabor, die Auswertung erfolgt bei uns. Die Ergebnisse werden nach der ISO-5817-Gruppe dokumentiert. <a href="../kalite.html">Unser Qualitätssystem →</a></p></div>
`,
    faq: [
      ['Ist ISO 5817 B besser als C?', 'B ist strenger und lässt weniger Unregelmäßigkeiten zu. „Besser" ist aber nicht immer die richtige Wahl. Bei gering beanspruchten Teilen verursacht B nur Mehrkosten. Die Gruppe richtet sich nach Beanspruchung und Sicherheitsanforderung.'],
      ['Was gilt, wenn keine Bewertungsgruppe auf der Zeichnung steht?', 'Im Geltungsbereich der EN 1090 gilt die Gruppe der Ausführungsklasse (z. B. C für EXC2). Außerhalb davon sind Diskussionen zwischen Hersteller und Kunde wahrscheinlich. Wir empfehlen, die Gruppe immer ausdrücklich anzugeben.'],
      ['Gilt ISO 5817 auch für Aluminium?', 'Nein. Für Aluminium und seine Legierungen gilt DIN EN ISO 10042. Sie ist ähnlich aufgebaut und kennt dieselben Gruppen B, C und D.'],
      ['Erfasst ISO 5817 auch innere Unregelmäßigkeiten?', 'Ja. Sie erfasst Oberflächen- und innere Unregelmäßigkeiten. Innere werden mit RT oder UT gefunden; dabei gilt die nach ISO 17635 zugeordnete Zulässigkeitsgrenze.']
    ],
    cta_h3: 'Welche Bewertungsgruppe passt zu Ihrer Zeichnung?',
    cta_p: 'Senden Sie uns Ihre Zeichnung. Innerhalb von 48 Stunden erhalten Sie ein Angebot mit einem nahtweisen Vorschlag zur Bewertungsgruppe.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Niveles de calidad ISO 5817 B, C y D: ¿cuál poner en el plano?',
    meta: 'Qué son los niveles de calidad B, C y D de la ISO 5817, en qué se diferencian y cuál especificar. Límites de mordedura, poros y sobreespesor, relación con EN 1090 y efecto en el coste.',
    og: 'Niveles de calidad ISO 5817: B, C y D',
    tag: 'Normas · Calidad de soldadura',
    h1: 'Niveles de calidad ISO 5817 B, C y D: ¿cuál debe especificar?',
    crumb: 'Niveles de calidad ISO 5817',
    read: '9 min de lectura',
    body: `
<p>En el plano de un conjunto soldado, la nota "ISO 5817-C" define en una sola línea cuántas imperfecciones pueden tener las soldaduras. Determina el precio, el plazo y el alcance de la inspección. Aun así, muchos planos no indican el nivel o piden B "por si acaso". En este artículo explicamos qué es la ISO 5817, las diferencias prácticas entre los niveles B, C y D y cómo elegir el adecuado.</p>
<h2>¿Qué es la ISO 5817?</h2>
<p>La EN ISO 5817 fija los límites de aceptación de imperfecciones en soldaduras por fusión (excepto haz de electrones y láser) en acero, níquel, titanio y sus aleaciones, para espesores desde 0,5 mm. La edición vigente es de 2023. El aluminio tiene su propia norma: EN ISO 10042.</p>
<p>La norma utiliza los números de imperfección de la ISO 6520-1: por ejemplo, 100 grieta, 2017 poro superficial, 5011 mordedura continua, 502 sobreespesor excesivo y 5213 garganta insuficiente. Para cada imperfección hay un límite en tres niveles:</p>
<table class="data-table"><thead><tr><th>Nivel</th><th>Significado</th><th>Uso típico</th></tr></thead><tbody>
<tr><td>B</td><td>Exigente</td><td>Estructuras sometidas a fatiga, EXC3 y EXC4, equipos a presión, equipos de elevación</td></tr>
<tr><td>C</td><td>Intermedio</td><td>Estructura metálica general, bastidores de máquina, EXC2</td></tr>
<tr><td>D</td><td>Moderado</td><td>Piezas secundarias poco solicitadas, barandillas, tapas, protecciones, EXC1</td></tr>
</tbody></table>
<p>Un punto importante: la ISO 5817 no es una norma de aptitud para el uso. Que una soldadura cumpla el nivel D no significa que sea suficiente para su función. El nivel lo elige el proyectista según la carga, la seguridad y la economía de fabricación.</p>
<h2>Diferencias con límites de ejemplo</h2>
<p>Para verlo en concreto, estos son los límites de algunas imperfecciones frecuentes (t: espesor de chapa, a: garganta, b: anchura del cordón; valores en mm):</p>
<table class="data-table"><thead><tr><th>Imperfección</th><th>D</th><th>C</th><th>B</th></tr></thead><tbody>
<tr><td>Grieta (100)</td><td>No permitida</td><td>No permitida</td><td>No permitida</td></tr>
<tr><td>Poro superficial (2017)</td><td>d ≤ 0,3 a, máx. 3</td><td>d ≤ 0,2 a, máx. 2</td><td>No permitido</td></tr>
<tr><td>Mordedura continua (5011)</td><td>h ≤ 0,2 t, máx. 1</td><td>h ≤ 0,1 t, máx. 0,5</td><td>h ≤ 0,05 t, máx. 0,5</td></tr>
<tr><td>Sobreespesor, soldadura a tope (502)</td><td>h ≤ 1 + 0,25 b, máx. 10</td><td>h ≤ 1 + 0,15 b, máx. 7</td><td>h ≤ 1 + 0,1 b, máx. 5</td></tr>
<tr><td>Garganta insuficiente (5213)</td><td>h ≤ 0,3 + 0,1 a, máx. 2 (corta)</td><td>h ≤ 0,3 + 0,1 a, máx. 1 (corta)</td><td>No permitida</td></tr>
</tbody></table>
<p>Los valores son un resumen de la norma; para chapa fina de 0,5 a 3 mm algunas filas tienen límites distintos. Para valores exactos, consulte siempre el texto vigente.</p>
<p>En el nivel B no se admiten poros superficiales ni garganta insuficiente, y la mordedura es prácticamente nula. Esto significa soldar más despacio y con más control, más amolado y más reparaciones.</p>
<h2>Niveles adicionales para fatiga: B 125, B 90, C 63</h2>
<p>El anexo C de la ISO 5817 define requisitos adicionales para estructuras sometidas a fatiga. Designaciones como B 125, B 90 y C 63 corresponden a la clase de fatiga (FAT) del cálculo. En piezas con cargas variables, como chasis de remolque, plumas de grúa o bastidores con vibración, el plano debe indicar el nivel adicional que corresponde al cálculo de fatiga en lugar de una simple "B". Estos niveles limitan más el ángulo de transición, la mordedura y las imperfecciones de raíz, y a veces exigen amolar el pie del cordón.</p>
<h2>Relación con la EN 1090</h2>
<p>En estructuras de acero, la EN 1090-2 fija el nivel por defecto según la clase de ejecución:</p>
<ul>
<li><strong>EXC1:</strong> nivel D</li>
<li><strong>EXC2:</strong> nivel C (se admite D para algunas imperfecciones)</li>
<li><strong>EXC3:</strong> nivel B</li>
<li><strong>EXC4:</strong> nivel B con requisitos adicionales</li>
</ul>
<p>Si el plano indica EXC2, se aplica el nivel C aunque no se escriba. Las piezas de máquina fuera del ámbito de la EN 1090 no tienen ese valor por defecto: el nivel debe figurar en el plano.</p>
<h2>Relación con los niveles de aceptación de END</h2>
<p>El nivel de la ISO 5817 también determina los niveles de aceptación de los informes de ensayos no destructivos. La ISO 17635 da la correspondencia:</p>
<table class="data-table"><thead><tr><th>Método</th><th>Para B</th><th>Para C</th><th>Para D</th></tr></thead><tbody>
<tr><td>VT (ISO 17637)</td><td>ISO 5817 B</td><td>ISO 5817 C</td><td>ISO 5817 D</td></tr>
<tr><td>RT (ISO 10675-1)</td><td>Nivel 1</td><td>Nivel 2</td><td>Nivel 3</td></tr>
<tr><td>UT (ISO 11666)</td><td>Nivel 2</td><td>Nivel 3</td><td>Nivel 3</td></tr>
<tr><td>MT / PT (ISO 23278 / 23277)</td><td>2X</td><td>2X</td><td>3X</td></tr>
</tbody></table>
<p>Si un informe indica "ISO 11666 AL2", la soldadura se evaluó según el nivel B.</p>
<h2>Cómo afecta el nivel al coste</h2>
<ul>
<li><strong>Tiempo de soldadura:</strong> en B se controlan más el perfil y la mordedura, y baja la velocidad.</li>
<li><strong>Amolado y reparación:</strong> un poro pequeño aceptado en C requiere reparación en B.</li>
<li><strong>Alcance de inspección:</strong> los niveles altos suelen ir con un porcentaje mayor de END.</li>
<li><strong>Soldador y procedimiento:</strong> la experiencia del soldador y el alcance de la WPS son más críticos en B.</li>
</ul>
<p>Lo más económico es marcar aparte las soldaduras críticas y dejar el resto en C o D, en lugar de pedir B para toda la pieza. En un bastidor de máquina, por ejemplo, las soldaduras de fijación del motor pueden ser B, las del bastidor general C y las de tapas y protecciones D.</p>
<h2>Cómo indicarlo en el plano</h2>
<ul>
<li>Nota general: "Nivel de calidad EN ISO 5817-C salvo indicación contraria."</li>
<li>Para soldaduras críticas, en la cola del símbolo: "ISO 5817-B".</li>
<li>Para soldaduras sometidas a fatiga, un nivel adicional como "ISO 5817-B 90".</li>
<li>Si procede, el alcance de inspección: "VT 100 %, UT 10 % (ISO 17640, ISO 11666 AL3)".</li>
<li>Para aluminio, EN ISO 10042 en lugar de ISO 5817.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> si el plano no indica nivel de calidad, proponemos uno en la oferta según el uso de la pieza y ayudamos a separar niveles por cordón. La inspección visual y UT las realiza nuestro propio personal de nivel 2; la exposición RT se hace en un laboratorio asociado y la evaluación, en nuestra planta. Los resultados se informan según el nivel ISO 5817. <a href="../kalite.html">Conozca nuestro sistema de calidad →</a></p></div>
`,
    faq: [
      ['¿Es mejor el nivel B que el C?', 'B es más exigente y admite menos imperfecciones, pero "mejor" no siempre es la elección correcta. En una pieza poco cargada, el nivel B solo añade coste. El nivel debe elegirse según la carga y los requisitos de seguridad.'],
      ['¿Qué pasa si el plano no indica nivel de calidad?', 'En el ámbito de la EN 1090 se aplica el nivel por defecto de la clase de ejecución (por ejemplo, C para EXC2). Fuera de ese ámbito es probable que haya discrepancias entre fabricante y cliente. Recomendamos indicarlo siempre.'],
      ['¿Se puede usar la ISO 5817 para soldaduras de aluminio?', 'No. Para el aluminio y sus aleaciones se usa la EN ISO 10042, de estructura similar y con los mismos niveles B, C y D.'],
      ['¿La ISO 5817 incluye imperfecciones internas?', 'Sí. Cubre imperfecciones superficiales e internas. Las internas se detectan por RT o UT y se aplica el nivel de aceptación correspondiente según la ISO 17635.']
    ],
    cta_h3: '¿Qué nivel de calidad necesita su plano?',
    cta_p: 'Envíenos su plano y en 48 horas le enviaremos una oferta con una propuesta de nivel de calidad por cordón.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Niveaux de qualité ISO 5817 B, C, D : lequel indiquer sur le plan ?',
    meta: 'Que sont les niveaux de qualité B, C et D de l’ISO 5817, en quoi diffèrent-ils et lequel spécifier ? Limites pour caniveaux, soufflures et surépaisseur, lien avec l’EN 1090 et impact sur le coût.',
    og: 'Niveaux de qualité ISO 5817 : B, C et D',
    tag: 'Normes · Qualité de soudure',
    h1: 'Niveaux de qualité ISO 5817 B, C et D : lequel spécifier ?',
    crumb: 'Niveaux de qualité ISO 5817',
    read: '9 min de lecture',
    body: `
<p>Sur un plan d’ensemble soudé, la mention « ISO 5817-C » définit en une ligne le niveau d’imperfections admis dans les soudures. Elle conditionne le prix, le délai et l’étendue du contrôle. Pourtant, beaucoup de plans n’indiquent aucun niveau, ou exigent B « par précaution ». Cet article explique ce qu’est l’ISO 5817, les différences pratiques entre les niveaux B, C et D, et comment choisir le bon.</p>
<h2>Qu’est-ce que l’ISO 5817 ?</h2>
<p>La NF EN ISO 5817 fixe les limites d’acceptation des imperfections dans les soudures par fusion (hors faisceau d’électrons et laser) sur aciers, nickel, titane et leurs alliages, à partir de 0,5 mm d’épaisseur. L’édition en vigueur date de 2023. L’aluminium a sa propre norme : NF EN ISO 10042.</p>
<p>La norme reprend la numérotation de l’ISO 6520-1 : 100 fissure, 2017 soufflure débouchante, 5011 caniveau continu, 502 surépaisseur excessive, 5213 gorge insuffisante. Chaque imperfection a une limite pour trois niveaux :</p>
<table class="data-table"><thead><tr><th>Niveau</th><th>Signification</th><th>Usage courant</th></tr></thead><tbody>
<tr><td>B</td><td>Élevé</td><td>Structures soumises à la fatigue, EXC3 et EXC4, équipements sous pression, appareils de levage</td></tr>
<tr><td>C</td><td>Intermédiaire</td><td>Charpente métallique courante, bâtis de machines, EXC2</td></tr>
<tr><td>D</td><td>Modéré</td><td>Pièces secondaires peu sollicitées, garde-corps, capots, carters, EXC1</td></tr>
</tbody></table>
<p>Point important : l’ISO 5817 n’est pas une norme d’aptitude à l’emploi. Une soudure conforme au niveau D n’est pas forcément adaptée à sa fonction. Le concepteur choisit le niveau selon la charge, la sécurité et l’économie de fabrication.</p>
<h2>Les différences en chiffres</h2>
<p>Voici les limites de quelques imperfections fréquentes (t : épaisseur de tôle, a : gorge, b : largeur du cordon ; valeurs en mm) :</p>
<table class="data-table"><thead><tr><th>Imperfection</th><th>D</th><th>C</th><th>B</th></tr></thead><tbody>
<tr><td>Fissure (100)</td><td>Non admise</td><td>Non admise</td><td>Non admise</td></tr>
<tr><td>Soufflure débouchante (2017)</td><td>d ≤ 0,3 a, max. 3</td><td>d ≤ 0,2 a, max. 2</td><td>Non admise</td></tr>
<tr><td>Caniveau continu (5011)</td><td>h ≤ 0,2 t, max. 1</td><td>h ≤ 0,1 t, max. 0,5</td><td>h ≤ 0,05 t, max. 0,5</td></tr>
<tr><td>Surépaisseur, soudure bout à bout (502)</td><td>h ≤ 1 + 0,25 b, max. 10</td><td>h ≤ 1 + 0,15 b, max. 7</td><td>h ≤ 1 + 0,1 b, max. 5</td></tr>
<tr><td>Gorge insuffisante (5213)</td><td>h ≤ 0,3 + 0,1 a, max. 2 (courte)</td><td>h ≤ 0,3 + 0,1 a, max. 1 (courte)</td><td>Non admise</td></tr>
</tbody></table>
<p>Ces valeurs résument la norme ; certaines lignes ont des limites différentes pour les tôles minces de 0,5 à 3 mm. Seul le texte en vigueur fait foi.</p>
<p>Au niveau B, les soufflures débouchantes et la gorge insuffisante ne sont pas admises, et le caniveau est quasiment nul. Cela implique un soudage plus lent et plus maîtrisé, davantage de meulage et de reprises.</p>
<h2>Niveaux complémentaires pour la fatigue : B 125, B 90, C 63</h2>
<p>L’annexe C de l’ISO 5817 définit des exigences complémentaires pour les structures soumises à la fatigue. Les désignations B 125, B 90 et C 63 correspondent à la classe de fatigue (FAT) retenue au calcul. Sur des pièces à charges variables, comme un châssis de remorque, une flèche de grue ou un bâti vibrant, le plan doit indiquer le niveau complémentaire cohérent avec le calcul de fatigue plutôt qu’un simple « B ». Ces niveaux limitent davantage l’angle de raccordement, le caniveau et les défauts côté racine, et imposent parfois un meulage du pied de cordon.</p>
<h2>Lien avec l’EN 1090</h2>
<p>En construction métallique, l’EN 1090-2 fixe le niveau par défaut selon la classe d’exécution :</p>
<ul>
<li><strong>EXC1 :</strong> niveau D</li>
<li><strong>EXC2 :</strong> niveau C (D admis pour certains types d’imperfections)</li>
<li><strong>EXC3 :</strong> niveau B</li>
<li><strong>EXC4 :</strong> niveau B avec exigences complémentaires</li>
</ul>
<p>Si le plan indique EXC2, le niveau C s’applique même sans mention séparée. Les pièces mécaniques hors EN 1090 n’ont pas de niveau par défaut : il doit figurer sur le plan.</p>
<h2>Lien avec les niveaux d’acceptation en CND</h2>
<p>Le niveau ISO 5817 détermine aussi les niveaux d’acceptation des rapports de contrôle non destructif. L’ISO 17635 donne la correspondance :</p>
<table class="data-table"><thead><tr><th>Méthode</th><th>Pour B</th><th>Pour C</th><th>Pour D</th></tr></thead><tbody>
<tr><td>VT (ISO 17637)</td><td>ISO 5817 B</td><td>ISO 5817 C</td><td>ISO 5817 D</td></tr>
<tr><td>RT (ISO 10675-1)</td><td>Niveau 1</td><td>Niveau 2</td><td>Niveau 3</td></tr>
<tr><td>UT (ISO 11666)</td><td>Niveau 2</td><td>Niveau 3</td><td>Niveau 3</td></tr>
<tr><td>MT / PT (ISO 23278 / 23277)</td><td>2X</td><td>2X</td><td>3X</td></tr>
</tbody></table>
<p>Un rapport qui mentionne « ISO 11666 AL2 » signifie donc que la soudure a été évaluée au niveau B.</p>
<h2>Impact sur le coût</h2>
<ul>
<li><strong>Temps de soudage :</strong> au niveau B, profil et caniveau sont plus surveillés, la vitesse baisse.</li>
<li><strong>Meulage et reprises :</strong> une petite soufflure admise en C doit être reprise en B.</li>
<li><strong>Étendue du contrôle :</strong> les niveaux élevés s’accompagnent souvent d’un taux de CND plus élevé.</li>
<li><strong>Soudeur et mode opératoire :</strong> l’expérience du soudeur et le domaine de validité du DMOS comptent davantage en B.</li>
</ul>
<p>La solution la plus économique consiste à repérer les soudures critiques et à laisser le reste en C ou D, plutôt que d’exiger B pour toute la pièce. Sur un bâti de machine, les soudures de fixation moteur peuvent être en B, les soudures du cadre en C et celles des capots et carters en D.</p>
<h2>Comment l’écrire sur le plan</h2>
<ul>
<li>Note générale : « Niveau de qualité NF EN ISO 5817-C sauf indication contraire. »</li>
<li>Pour les soudures critiques, dans la queue du symbole : « ISO 5817-B ».</li>
<li>Pour les soudures en fatigue, un niveau complémentaire tel que « ISO 5817-B 90 ».</li>
<li>Si nécessaire, l’étendue du contrôle : « VT 100 %, UT 10 % (ISO 17640, ISO 11666 AL3) ».</li>
<li>Pour l’aluminium, l’EN ISO 10042 au lieu de l’ISO 5817.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> si le plan n’indique pas de niveau, nous en proposons un dès l’offre selon l’usage de la pièce et aidons à différencier les niveaux par cordon. Le contrôle visuel, le ressuage, la magnétoscopie et les ultrasons sont réalisés par notre propre personnel de niveau 2 ; les prises de vue RT sont faites dans un laboratoire partenaire et interprétées chez nous. Les résultats sont rapportés selon le niveau ISO 5817. <a href="../kalite.html">Découvrir notre système qualité →</a></p></div>
`,
    faq: [
      ['Le niveau B est-il meilleur que le C ?', 'B est plus sévère et admet moins d’imperfections. Mais « meilleur » n’est pas toujours le bon choix : sur une pièce peu chargée, B ne fait qu’ajouter du coût. Le niveau se choisit selon la charge et les exigences de sécurité.'],
      ['Que se passe-t-il si le plan n’indique aucun niveau ?', 'Dans le cadre de l’EN 1090, le niveau par défaut de la classe d’exécution s’applique (par exemple C pour EXC2). En dehors, des litiges entre fabricant et client sont probables. Nous recommandons de toujours l’indiquer.'],
      ['L’ISO 5817 s’applique-t-elle à l’aluminium ?', 'Non. Pour l’aluminium et ses alliages, on utilise l’EN ISO 10042, de structure similaire, avec les mêmes niveaux B, C et D.'],
      ['L’ISO 5817 couvre-t-elle les défauts internes ?', 'Oui. Elle couvre les imperfections de surface et internes. Les défauts internes sont détectés par RT ou UT et le niveau d’acceptation correspondant de l’ISO 17635 s’applique.']
    ],
    cta_h3: 'Quel niveau de qualité pour votre plan ?',
    cta_p: 'Envoyez-nous votre plan : sous 48 heures, vous recevez une offre avec une proposition de niveau de qualité par cordon.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Livelli di qualità ISO 5817 B, C, D: quale indicare a disegno?',
    meta: 'Cosa sono i livelli di qualità B, C e D della ISO 5817, come si differenziano e quale specificare. Limiti per incisioni marginali, porosità e sovrametallo, legame con la EN 1090 e impatto sui costi.',
    og: 'Livelli di qualità ISO 5817: B, C e D',
    tag: 'Norme · Qualità della saldatura',
    h1: 'Livelli di qualità ISO 5817 B, C e D: quale specificare?',
    crumb: 'Livelli di qualità ISO 5817',
    read: '9 min di lettura',
    body: `
<p>Su un disegno di carpenteria saldata, la nota "ISO 5817-C" definisce in una riga quante imperfezioni possono avere le saldature. Incide su prezzo, tempi di consegna ed estensione dei controlli. Eppure molti disegni non riportano il livello, oppure richiedono B "per sicurezza". In questo articolo spieghiamo cos’è la ISO 5817, le differenze pratiche tra i livelli B, C e D e come scegliere quello giusto.</p>
<h2>Che cos’è la ISO 5817?</h2>
<p>La UNI EN ISO 5817 stabilisce i limiti di accettabilità delle imperfezioni nei giunti saldati per fusione (esclusi fascio elettronico e laser) su acciaio, nichel, titanio e loro leghe, per spessori da 0,5 mm. L’edizione in vigore è del 2023. Per l’alluminio esiste una norma specifica: UNI EN ISO 10042.</p>
<p>La norma usa la numerazione della ISO 6520-1: 100 cricca, 2017 poro superficiale, 5011 incisione marginale continua, 502 sovrametallo eccessivo, 5213 gola insufficiente. Per ogni imperfezione ci sono tre limiti:</p>
<table class="data-table"><thead><tr><th>Livello</th><th>Significato</th><th>Impiego tipico</th></tr></thead><tbody>
<tr><td>B</td><td>Elevato</td><td>Strutture a fatica, EXC3 ed EXC4, apparecchi a pressione, apparecchi di sollevamento</td></tr>
<tr><td>C</td><td>Intermedio</td><td>Carpenteria metallica generale, telai di macchine, EXC2</td></tr>
<tr><td>D</td><td>Moderato</td><td>Parti secondarie poco sollecitate, parapetti, coperchi, carter, EXC1</td></tr>
</tbody></table>
<p>Un punto importante: la ISO 5817 non è una norma di idoneità all’uso. Una saldatura conforme al livello D non è automaticamente adatta alla sua funzione. Il progettista sceglie il livello in base a carico, sicurezza ed economia di produzione.</p>
<h2>Le differenze con limiti di esempio</h2>
<p>Ecco i limiti di alcune imperfezioni frequenti (t: spessore lamiera, a: gola, b: larghezza del cordone; valori in mm):</p>
<table class="data-table"><thead><tr><th>Imperfezione</th><th>D</th><th>C</th><th>B</th></tr></thead><tbody>
<tr><td>Cricca (100)</td><td>Non ammessa</td><td>Non ammessa</td><td>Non ammessa</td></tr>
<tr><td>Poro superficiale (2017)</td><td>d ≤ 0,3 a, max 3</td><td>d ≤ 0,2 a, max 2</td><td>Non ammesso</td></tr>
<tr><td>Incisione marginale continua (5011)</td><td>h ≤ 0,2 t, max 1</td><td>h ≤ 0,1 t, max 0,5</td><td>h ≤ 0,05 t, max 0,5</td></tr>
<tr><td>Sovrametallo, giunto testa a testa (502)</td><td>h ≤ 1 + 0,25 b, max 10</td><td>h ≤ 1 + 0,15 b, max 7</td><td>h ≤ 1 + 0,1 b, max 5</td></tr>
<tr><td>Gola insufficiente (5213)</td><td>h ≤ 0,3 + 0,1 a, max 2 (breve)</td><td>h ≤ 0,3 + 0,1 a, max 1 (breve)</td><td>Non ammessa</td></tr>
</tbody></table>
<p>I valori sono una sintesi della norma; per lamiere sottili da 0,5 a 3 mm alcune righe hanno limiti diversi. Fa fede sempre il testo in vigore.</p>
<p>Al livello B non sono ammessi pori superficiali né gola insufficiente, e l’incisione marginale è quasi nulla. Significa saldare più lentamente e con più controllo, più molatura e più riparazioni.</p>
<h2>Livelli aggiuntivi per la fatica: B 125, B 90, C 63</h2>
<p>L’appendice C della ISO 5817 definisce requisiti aggiuntivi per strutture soggette a fatica. Sigle come B 125, B 90 e C 63 corrispondono alla classe di fatica (FAT) usata nel calcolo. Su componenti con carichi variabili, come telai di rimorchio, bracci di gru o telai vibranti, il disegno dovrebbe riportare il livello aggiuntivo coerente con il calcolo a fatica invece di una semplice "B". Questi livelli limitano più strettamente l’angolo al piede, le incisioni marginali e i difetti al vertice, e talvolta richiedono la molatura del piede del cordone.</p>
<h2>Legame con la EN 1090</h2>
<p>Nelle strutture in acciaio la EN 1090-2 fissa il livello predefinito in base alla classe di esecuzione:</p>
<ul>
<li><strong>EXC1:</strong> livello D</li>
<li><strong>EXC2:</strong> livello C (D ammesso per alcuni tipi di imperfezione)</li>
<li><strong>EXC3:</strong> livello B</li>
<li><strong>EXC4:</strong> livello B con requisiti aggiuntivi</li>
</ul>
<p>Se il disegno indica EXC2, vale il livello C anche senza nota separata. Le parti di macchina fuori dalla EN 1090 non hanno un livello predefinito: va scritto a disegno.</p>
<h2>Legame con i livelli di accettabilità dei CND</h2>
<p>Il livello ISO 5817 determina anche i livelli di accettabilità nei rapporti di controllo non distruttivo. La ISO 17635 fornisce la corrispondenza:</p>
<table class="data-table"><thead><tr><th>Metodo</th><th>Per B</th><th>Per C</th><th>Per D</th></tr></thead><tbody>
<tr><td>VT (ISO 17637)</td><td>ISO 5817 B</td><td>ISO 5817 C</td><td>ISO 5817 D</td></tr>
<tr><td>RT (ISO 10675-1)</td><td>Livello 1</td><td>Livello 2</td><td>Livello 3</td></tr>
<tr><td>UT (ISO 11666)</td><td>Livello 2</td><td>Livello 3</td><td>Livello 3</td></tr>
<tr><td>MT / PT (ISO 23278 / 23277)</td><td>2X</td><td>2X</td><td>3X</td></tr>
</tbody></table>
<p>Se un rapporto riporta "ISO 11666 AL2", la saldatura è stata valutata al livello B.</p>
<h2>Come il livello incide sui costi</h2>
<ul>
<li><strong>Tempo di saldatura:</strong> al livello B profilo e incisioni sono controllati più strettamente, la velocità cala.</li>
<li><strong>Molatura e riparazioni:</strong> un piccolo poro accettato in C va riparato in B.</li>
<li><strong>Estensione dei controlli:</strong> i livelli alti richiedono di solito una percentuale maggiore di CND.</li>
<li><strong>Saldatore e procedura:</strong> esperienza del saldatore e campo di validità della WPS contano di più in B.</li>
</ul>
<p>La strada più economica è contrassegnare a parte le saldature critiche e lasciare il resto in C o D, invece di chiedere B per tutto il pezzo. Su un telaio macchina, per esempio, le saldature di fissaggio motore possono essere B, quelle del telaio C e quelle di coperchi e carter D.</p>
<h2>Come scriverlo a disegno</h2>
<ul>
<li>Nota generale: "Livello di qualità UNI EN ISO 5817-C salvo diversa indicazione."</li>
<li>Per saldature critiche, nella coda del simbolo: "ISO 5817-B".</li>
<li>Per saldature a fatica, un livello aggiuntivo come "ISO 5817-B 90".</li>
<li>Se necessario, l’estensione dei controlli: "VT 100 %, UT 10 % (ISO 17640, ISO 11666 AL3)".</li>
<li>Per l’alluminio, la EN ISO 10042 invece della ISO 5817.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> se il disegno non riporta il livello, ne proponiamo uno già in offerta in base all’uso del pezzo e aiutiamo a differenziarlo cordone per cordone. Esame visivo e UT sono eseguiti dal nostro personale di livello 2; le esposizioni RT avvengono presso un laboratorio partner e la valutazione è fatta da noi. I risultati sono riportati secondo il livello ISO 5817. <a href="../kalite.html">Scopri il nostro sistema qualità →</a></p></div>
`,
    faq: [
      ['Il livello B è migliore del C?', 'B è più severo e ammette meno imperfezioni, ma "migliore" non è sempre la scelta giusta. Su un pezzo poco caricato, B aggiunge solo costi. Il livello va scelto in base al carico e ai requisiti di sicurezza.'],
      ['Cosa succede se il disegno non indica il livello?', 'Nell’ambito della EN 1090 si applica il livello predefinito della classe di esecuzione (per esempio C per EXC2). Fuori da questo ambito sono probabili contestazioni tra costruttore e cliente. Consigliamo di indicarlo sempre.'],
      ['La ISO 5817 vale per l’alluminio?', 'No. Per l’alluminio e le sue leghe si usa la EN ISO 10042, con struttura simile e gli stessi livelli B, C e D.'],
      ['La ISO 5817 comprende anche i difetti interni?', 'Sì. Copre imperfezioni superficiali e interne. Quelle interne si rilevano con RT o UT e si applica il livello di accettabilità corrispondente secondo la ISO 17635.']
    ],
    cta_h3: 'Quale livello di qualità per il vostro disegno?',
    cta_p: 'Inviateci il disegno: entro 48 ore riceverete un’offerta con una proposta di livello di qualità per cordone.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'ISO 5817 kwaliteitsniveaus B, C, D: welke hoort op de tekening?',
    meta: 'Wat zijn de kwaliteitsniveaus B, C en D volgens ISO 5817, wat is het verschil en welke specificeert u? Grenzen voor randinkarteling, porositeit en lasoverhoogte, de relatie met EN 1090 en de kosten.',
    og: 'ISO 5817 kwaliteitsniveaus: B, C en D',
    tag: 'Normen · Laskwaliteit',
    h1: 'ISO 5817 kwaliteitsniveaus B, C en D: welke moet u specificeren?',
    crumb: 'ISO 5817 kwaliteitsniveaus',
    read: '9 min lezen',
    body: `
<p>Op een tekening van een lasconstructie legt de notitie "ISO 5817-C" in één regel vast hoeveel onvolkomenheden de lassen mogen bevatten. Die notitie bepaalt prijs, levertijd en inspectieomvang. Toch ontbreekt het niveau op veel tekeningen, of wordt "voor de zekerheid" B gevraagd. In dit artikel leggen we uit wat ISO 5817 is, wat de praktische verschillen tussen B, C en D zijn en hoe u het juiste niveau kiest.</p>
<h2>Wat is ISO 5817?</h2>
<p>NEN-EN-ISO 5817 geeft acceptatiegrenzen voor onvolkomenheden in smeltlassen (behalve elektronenbundel- en laserlassen) in staal, nikkel, titanium en hun legeringen, vanaf 0,5 mm materiaaldikte. De huidige uitgave is van 2023. Voor aluminium bestaat een aparte norm: NEN-EN-ISO 10042.</p>
<p>De norm gebruikt de nummering van ISO 6520-1: 100 scheur, 2017 oppervlakteporie, 5011 doorlopende randinkarteling, 502 te grote lasoverhoogte, 5213 te kleine keelhoogte. Per onvolkomenheid gelden drie grenzen:</p>
<table class="data-table"><thead><tr><th>Niveau</th><th>Betekenis</th><th>Typische toepassing</th></tr></thead><tbody>
<tr><td>B</td><td>Streng</td><td>Op vermoeiing belaste constructies, EXC3 en EXC4, drukapparatuur, hijsmiddelen</td></tr>
<tr><td>C</td><td>Gemiddeld</td><td>Algemene staalbouw, machineframes, EXC2</td></tr>
<tr><td>D</td><td>Matig</td><td>Licht belaste secundaire delen, leuningen, deksels, afschermingen, EXC1</td></tr>
</tbody></table>
<p>Belangrijk: ISO 5817 is geen norm voor geschiktheid voor het gebruik. Een las die aan niveau D voldoet, is niet automatisch geschikt voor zijn functie. De ontwerper kiest het niveau op basis van belasting, veiligheid en productie-economie.</p>
<h2>De verschillen in voorbeeldgrenzen</h2>
<p>Ter illustratie de grenzen van enkele veelvoorkomende onvolkomenheden (t: plaatdikte, a: keelhoogte, b: lasbreedte; alle waarden in mm):</p>
<table class="data-table"><thead><tr><th>Onvolkomenheid</th><th>D</th><th>C</th><th>B</th></tr></thead><tbody>
<tr><td>Scheur (100)</td><td>Niet toegestaan</td><td>Niet toegestaan</td><td>Niet toegestaan</td></tr>
<tr><td>Oppervlakteporie (2017)</td><td>d ≤ 0,3 a, max. 3</td><td>d ≤ 0,2 a, max. 2</td><td>Niet toegestaan</td></tr>
<tr><td>Doorlopende randinkarteling (5011)</td><td>h ≤ 0,2 t, max. 1</td><td>h ≤ 0,1 t, max. 0,5</td><td>h ≤ 0,05 t, max. 0,5</td></tr>
<tr><td>Lasoverhoogte stompe las (502)</td><td>h ≤ 1 + 0,25 b, max. 10</td><td>h ≤ 1 + 0,15 b, max. 7</td><td>h ≤ 1 + 0,1 b, max. 5</td></tr>
<tr><td>Te kleine keelhoogte (5213)</td><td>h ≤ 0,3 + 0,1 a, max. 2 (kort)</td><td>h ≤ 0,3 + 0,1 a, max. 1 (kort)</td><td>Niet toegestaan</td></tr>
</tbody></table>
<p>De waarden zijn samengevat uit de norm; voor dunne plaat van 0,5 tot 3 mm gelden in sommige regels andere grenzen. De actuele normtekst is altijd leidend.</p>
<p>Op niveau B zijn oppervlakteporiën en te kleine keelhoogte helemaal niet toegestaan en randinkarteling vrijwel niet. Dat betekent langzamer en gecontroleerder lassen, meer slijpwerk en vaker reparaties.</p>
<h2>Extra niveaus voor vermoeiing: B 125, B 90, C 63</h2>
<p>Bijlage C van ISO 5817 bevat aanvullende eisen voor op vermoeiing belaste constructies. Aanduidingen als B 125, B 90 en C 63 komen overeen met de vermoeiingsklasse (FAT) uit de berekening. Bij delen met wisselende belasting, zoals aanhangwagenchassis, kraangieken of trillende machineframes, hoort op de tekening het aanvullende niveau dat bij de vermoeiingsberekening past, in plaats van alleen "B". Deze niveaus begrenzen de overgangshoek, randinkarteling en onvolkomenheden aan de grondzijde strenger, en vragen soms om het slijpen van de lasteen.</p>
<h2>Relatie met EN 1090</h2>
<p>In de staalbouw legt EN 1090-2 het standaardniveau vast per uitvoeringsklasse:</p>
<ul>
<li><strong>EXC1:</strong> niveau D</li>
<li><strong>EXC2:</strong> niveau C (D toegestaan voor sommige onvolkomenheden)</li>
<li><strong>EXC3:</strong> niveau B</li>
<li><strong>EXC4:</strong> niveau B met aanvullende eisen</li>
</ul>
<p>Staat er EXC2 op de tekening, dan geldt niveau C ook zonder aparte notitie. Voor machinedelen buiten EN 1090 bestaat zo'n standaard niet; daar moet het niveau op de tekening staan.</p>
<h2>Relatie met acceptatieniveaus bij NDO</h2>
<p>Het ISO 5817-niveau bepaalt ook de acceptatieniveaus in NDO-rapporten. ISO 17635 geeft de koppeling:</p>
<table class="data-table"><thead><tr><th>Methode</th><th>Voor B</th><th>Voor C</th><th>Voor D</th></tr></thead><tbody>
<tr><td>VT (ISO 17637)</td><td>ISO 5817 B</td><td>ISO 5817 C</td><td>ISO 5817 D</td></tr>
<tr><td>RT (ISO 10675-1)</td><td>Niveau 1</td><td>Niveau 2</td><td>Niveau 3</td></tr>
<tr><td>UT (ISO 11666)</td><td>Niveau 2</td><td>Niveau 3</td><td>Niveau 3</td></tr>
<tr><td>MT / PT (ISO 23278 / 23277)</td><td>2X</td><td>2X</td><td>3X</td></tr>
</tbody></table>
<p>Staat er in een rapport "ISO 11666 AL2", dan is de las beoordeeld op niveau B.</p>
<h2>Invloed op de kosten</h2>
<ul>
<li><strong>Lastijd:</strong> op niveau B worden lasprofiel en randinkarteling strakker bewaakt; de lassnelheid daalt.</li>
<li><strong>Slijpen en repareren:</strong> een kleine porie die op C mag, moet op B gerepareerd worden.</li>
<li><strong>Inspectieomvang:</strong> hogere niveaus gaan meestal samen met een hoger NDO-percentage.</li>
<li><strong>Lasser en procedure:</strong> ervaring van de lasser en het geldigheidsgebied van de WPS wegen zwaarder op niveau B.</li>
</ul>
<p>Het voordeligst is kritische lassen apart te markeren en de rest op C of D te laten, in plaats van het hele deel op B te zetten. Bij een machineframe kunnen de lassen van de motorbevestiging B zijn, de algemene framelassen C en de lassen van deksels en afschermingen D.</p>
<h2>Zo zet u het op de tekening</h2>
<ul>
<li>Algemene notitie: "Kwaliteitsniveau NEN-EN-ISO 5817-C, tenzij anders aangegeven."</li>
<li>Voor kritische lassen in de staart van het lassymbool: "ISO 5817-B".</li>
<li>Voor op vermoeiing belaste lassen een aanvullend niveau zoals "ISO 5817-B 90".</li>
<li>Zo nodig de inspectieomvang: "VT 100 %, UT 10 % (ISO 17640, ISO 11666 AL3)".</li>
<li>Voor aluminium EN-ISO 10042 in plaats van ISO 5817.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> staat er geen kwaliteitsniveau op de tekening, dan stellen we in de offerte een niveau voor dat past bij het gebruik van het deel en helpen we het per las te verdelen. Visuele inspectie, PT, MT en UT voeren we uit met eigen personeel van niveau 2; RT-opnamen worden gemaakt bij een partnerlab en door ons beoordeeld. De resultaten rapporteren we volgens het ISO 5817-niveau. <a href="../kalite.html">Bekijk ons kwaliteitssysteem →</a></p></div>
`,
    faq: [
      ['Is niveau B beter dan C?', 'B is strenger en laat minder onvolkomenheden toe, maar "beter" is niet altijd de juiste keuze. Bij een licht belast deel kost B alleen meer geld. Kies het niveau op basis van belasting en veiligheidseisen.'],
      ['Wat als er geen kwaliteitsniveau op de tekening staat?', 'Binnen EN 1090 geldt het standaardniveau van de uitvoeringsklasse (bijvoorbeeld C bij EXC2). Daarbuiten ontstaan al snel discussies tussen fabrikant en klant. We raden aan het niveau altijd expliciet te vermelden.'],
      ['Geldt ISO 5817 ook voor aluminium?', 'Nee. Voor aluminium en zijn legeringen geldt EN-ISO 10042, met een vergelijkbare opbouw en dezelfde niveaus B, C en D.'],
      ['Dekt ISO 5817 ook inwendige onvolkomenheden?', 'Ja, zowel oppervlakte- als inwendige onvolkomenheden. Inwendige worden met RT of UT gevonden; daarbij geldt het acceptatieniveau dat ISO 17635 eraan koppelt.']
    ],
    cta_h3: 'Welk kwaliteitsniveau past bij uw tekening?',
    cta_p: 'Stuur ons uw tekening; binnen 48 uur ontvangt u een offerte met een voorstel voor het kwaliteitsniveau per las.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'ISO 5817 kvalitetsnivå B, C, D: hvilket skal stå på tegningen?',
    meta: 'Hva er kvalitetsnivå B, C og D i ISO 5817, hva er forskjellen og hvilket bør du spesifisere? Grenser for sidekutt, porer og sveiseoverhøyde, koblingen til EN 1090 og kostnadene.',
    og: 'ISO 5817 kvalitetsnivå: B, C og D',
    tag: 'Standarder · Sveisekvalitet',
    h1: 'ISO 5817 kvalitetsnivå B, C og D: hvilket bør du spesifisere?',
    crumb: 'ISO 5817 kvalitetsnivå',
    read: '9 min lesing',
    body: `
<p>På en tegning av en sveisekonstruksjon bestemmer merknaden "ISO 5817-C" på én linje hvor mange uregelmessigheter sveisene kan ha. Den styrer pris, leveringstid og kontrollomfang. Likevel mangler nivået på mange tegninger, eller det kreves B "for sikkerhets skyld". Her forklarer vi hva ISO 5817 er, de praktiske forskjellene mellom B, C og D, og hvordan du velger riktig nivå.</p>
<h2>Hva er ISO 5817?</h2>
<p>NS-EN ISO 5817 gir akseptgrenser for uregelmessigheter i smeltesveiser (unntatt elektronstråle- og lasersveising) i stål, nikkel, titan og legeringer av disse, fra 0,5 mm materialtykkelse. Gjeldende utgave er fra 2023. For aluminium finnes en egen standard: NS-EN ISO 10042.</p>
<p>Standarden bruker nummereringen i ISO 6520-1: 100 sprekk, 2017 overflatepore, 5011 sammenhengende sidekutt, 502 for stor sveiseoverhøyde, 5213 for lite a-mål. Hver uregelmessighet har grenser på tre nivåer:</p>
<table class="data-table"><thead><tr><th>Nivå</th><th>Betydning</th><th>Typisk bruk</th></tr></thead><tbody>
<tr><td>B</td><td>Strengt</td><td>Utmattingsbelastede konstruksjoner, EXC3 og EXC4, trykkpåkjent utstyr, løfteutstyr</td></tr>
<tr><td>C</td><td>Middels</td><td>Generelle stålkonstruksjoner, maskinrammer, EXC2</td></tr>
<tr><td>D</td><td>Moderat</td><td>Lavt belastede sekundærdeler, rekkverk, deksler, beskyttelser, EXC1</td></tr>
</tbody></table>
<p>Viktig: ISO 5817 er ikke en standard for egnethet. En sveis som oppfyller nivå D, er ikke automatisk god nok for sin funksjon. Konstruktøren velger nivå ut fra belastning, sikkerhet og produksjonsøkonomi.</p>
<h2>Forskjellene i eksempelgrenser</h2>
<p>Her er grensene for noen vanlige uregelmessigheter (t: platetykkelse, a: a-mål, b: sveisebredde; alle verdier i mm):</p>
<table class="data-table"><thead><tr><th>Uregelmessighet</th><th>D</th><th>C</th><th>B</th></tr></thead><tbody>
<tr><td>Sprekk (100)</td><td>Ikke tillatt</td><td>Ikke tillatt</td><td>Ikke tillatt</td></tr>
<tr><td>Overflatepore (2017)</td><td>d ≤ 0,3 a, maks 3</td><td>d ≤ 0,2 a, maks 2</td><td>Ikke tillatt</td></tr>
<tr><td>Sammenhengende sidekutt (5011)</td><td>h ≤ 0,2 t, maks 1</td><td>h ≤ 0,1 t, maks 0,5</td><td>h ≤ 0,05 t, maks 0,5</td></tr>
<tr><td>Sveiseoverhøyde, buttsveis (502)</td><td>h ≤ 1 + 0,25 b, maks 10</td><td>h ≤ 1 + 0,15 b, maks 7</td><td>h ≤ 1 + 0,1 b, maks 5</td></tr>
<tr><td>For lite a-mål (5213)</td><td>h ≤ 0,3 + 0,1 a, maks 2 (kort)</td><td>h ≤ 0,3 + 0,1 a, maks 1 (kort)</td><td>Ikke tillatt</td></tr>
</tbody></table>
<p>Verdiene er oppsummert fra standarden; for tynnplate fra 0,5 til 3 mm gjelder andre grenser i noen rader. Gjeldende standardtekst er alltid avgjørende.</p>
<p>På nivå B er overflateporer og for lite a-mål ikke tillatt i det hele tatt, og sidekutt nesten ikke. Det betyr langsommere og mer kontrollert sveising, mer sliping og flere reparasjoner.</p>
<h2>Tilleggsnivåer for utmatting: B 125, B 90, C 63</h2>
<p>Tillegg C i ISO 5817 gir tilleggskrav for utmattingsbelastede konstruksjoner. Betegnelser som B 125, B 90 og C 63 tilsvarer utmattingsklassen (FAT) i beregningen. På deler med varierende last, som tilhengerchassis, kranbommer eller vibrerende maskinrammer, bør tegningen angi tilleggsnivået som passer utmattingsberegningen i stedet for bare "B". Disse nivåene setter strengere grenser for overgangsvinkel, sidekutt og uregelmessigheter på rotsiden, og krever noen ganger sliping av sveisetåen.</p>
<h2>Koblingen til EN 1090</h2>
<p>For stålkonstruksjoner fastsetter EN 1090-2 standardnivået etter utførelsesklasse:</p>
<ul>
<li><strong>EXC1:</strong> nivå D</li>
<li><strong>EXC2:</strong> nivå C (D tillatt for noen typer uregelmessigheter)</li>
<li><strong>EXC3:</strong> nivå B</li>
<li><strong>EXC4:</strong> nivå B med tilleggskrav</li>
</ul>
<p>Står det EXC2 på tegningen, gjelder nivå C også uten egen merknad. Maskindeler utenfor EN 1090 har ikke et slikt standardnivå; der må nivået stå på tegningen.</p>
<h2>Koblingen til akseptnivåer i NDT</h2>
<p>ISO 5817-nivået bestemmer også akseptnivåene i NDT-rapporter. ISO 17635 gir sammenhengen:</p>
<table class="data-table"><thead><tr><th>Metode</th><th>For B</th><th>For C</th><th>For D</th></tr></thead><tbody>
<tr><td>VT (ISO 17637)</td><td>ISO 5817 B</td><td>ISO 5817 C</td><td>ISO 5817 D</td></tr>
<tr><td>RT (ISO 10675-1)</td><td>Nivå 1</td><td>Nivå 2</td><td>Nivå 3</td></tr>
<tr><td>UT (ISO 11666)</td><td>Nivå 2</td><td>Nivå 3</td><td>Nivå 3</td></tr>
<tr><td>MT / PT (ISO 23278 / 23277)</td><td>2X</td><td>2X</td><td>3X</td></tr>
</tbody></table>
<p>Står det "ISO 11666 AL2" i en rapport, er sveisen vurdert mot nivå B.</p>
<h2>Hvordan nivået påvirker kostnaden</h2>
<ul>
<li><strong>Sveisetid:</strong> på nivå B kontrolleres profil og sidekutt strengere, og sveisehastigheten går ned.</li>
<li><strong>Sliping og reparasjon:</strong> en liten pore som godtas på C, må repareres på B.</li>
<li><strong>Kontrollomfang:</strong> høyere nivåer kommer som regel med høyere NDT-andel.</li>
<li><strong>Sveiser og prosedyre:</strong> sveiserens erfaring og WPS-ens gyldighetsområde er mer kritisk på nivå B.</li>
</ul>
<p>Det mest økonomiske er å merke kritiske sveiser særskilt og la resten stå på C eller D, i stedet for å kreve B for hele delen. På en maskinramme kan for eksempel sveisene for motorfeste være B, de generelle rammesveisene C og sveisene på deksler og beskyttelser D.</p>
<h2>Slik skriver du det på tegningen</h2>
<ul>
<li>Generell merknad: "Kvalitetsnivå NS-EN ISO 5817-C dersom ikke annet er angitt."</li>
<li>For kritiske sveiser i halen på sveisesymbolet: "ISO 5817-B".</li>
<li>For utmattingsbelastede sveiser et tilleggsnivå som "ISO 5817-B 90".</li>
<li>Ved behov kontrollomfang: "VT 100 %, UT 10 % (ISO 17640, ISO 11666 AL3)".</li>
<li>For aluminium EN ISO 10042 i stedet for ISO 5817.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> mangler tegningen kvalitetsnivå, foreslår vi et nivå i tilbudet ut fra hvordan delen brukes, og hjelper med å fordele nivåene sveis for sveis. Visuell kontroll og UT utføres av vårt eget personell på nivå 2; RT-eksponering gjøres hos et partnerlaboratorium og vurderes hos oss. Resultatene rapporteres mot ISO 5817-nivået. <a href="../kalite.html">Se kvalitetssystemet vårt →</a></p></div>
`,
    faq: [
      ['Er nivå B bedre enn C?', 'B er strengere og tillater færre uregelmessigheter, men "bedre" er ikke alltid riktig valg. På en lavt belastet del gir B bare høyere kostnad. Nivået bør velges ut fra belastning og sikkerhetskrav.'],
      ['Hva skjer hvis tegningen ikke angir kvalitetsnivå?', 'Innenfor EN 1090 gjelder standardnivået for utførelsesklassen (for eksempel C for EXC2). Utenfor dette blir det lett uenighet mellom produsent og kunde. Vi anbefaler alltid å angi nivået.'],
      ['Gjelder ISO 5817 for aluminium?', 'Nei. For aluminium og aluminiumslegeringer brukes EN ISO 10042, som er bygd opp på samme måte med nivåene B, C og D.'],
      ['Dekker ISO 5817 indre uregelmessigheter?', 'Ja, både overflate- og indre uregelmessigheter. Indre finnes med RT eller UT, og akseptnivået som ISO 17635 knytter til nivået, brukes.']
    ],
    cta_h3: 'Hvilket kvalitetsnivå passer tegningen din?',
    cta_p: 'Send oss tegningen, så får du et tilbud innen 48 timer med forslag til kvalitetsnivå for hver sveis.',
    cta_btn: 'Be om tilbud →'
  }
};
