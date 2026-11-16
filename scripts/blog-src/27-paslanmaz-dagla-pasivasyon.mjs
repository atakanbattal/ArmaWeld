export default {
  order: 27,
  slug: 'paslanmaz-kaynak-temizleme-daglama-pasivasyon',
  key: 'p27_pickling',
  date: '2026-11-16',
  keywords: 'paslanmaz kaynak temizleme, paslanmaz dağlama, pasivasyon, kaynak yanığı temizleme, ısı renkleri, demir kontaminasyonu, ASTM A380, ASTM A967, pickling passivation, Beizen Passivieren Edelstahl, décapage passivation inox',
  related: ['tig-paslanmaz-celik', 'paslanmaz-celik-imalat', 'kaynak-hatalari-onarim', 'iso-12944-korozyon-siniflari-c1-c5-cx'],
  tr: {
    title: 'Paslanmaz Kaynak Temizleme: Isı Renkleri, Dağlama ve Pasivasyon',
    meta: 'Paslanmaz çelikte kaynak yanığı (ısı renkleri) neden korozyon başlatır? Mekanik temizlik, dağlama pastası ve banyo, elektrokimyasal temizlik, pasivasyon (ASTM A380, A967), kök gazlama, demir kontaminasyonu ve kontrol yöntemleri.',
    og: 'Paslanmaz Kaynak Temizleme ve Pasivasyon',
    tag: 'Paslanmaz Çelik · Yüzey',
    h1: 'Paslanmaz Kaynak Temizleme: Isı Renkleri, Dağlama ve Pasivasyon',
    crumb: 'Paslanmaz Kaynak Temizleme',
    read: '6 dk okuma',
    body: `
<p>Paslanmaz çelik, yüzeyindeki ince ve kendiliğinden oluşan krom oksit tabakası sayesinde paslanmaz. Kaynak bu tabakayı bozar. Dikişin çevresindeki saman sarısından maviye uzanan <strong>ısı renkleri</strong> yalnızca görüntü sorunu değildir; temizlenmezse korozyonun başladığı yer olur.</p>
<h2>Isı Renkleri Neden Tehlikeli?</h2>
<p>Kaynak sırasında yüzey havayla temas ederek kalınlaşmış bir oksit tabakası oluşturur. Bu tabakanın hemen altında krom bakımından fakirleşmiş ince bir bölge kalır. Krom oranı düşen yüzey, kendini yeniden koruyamaz; özellikle klorürlü ortamda, gıda ve kimya tesislerinde <strong>çukurcuk korozyonu</strong> bu noktalardan başlar. Renk koyulaştıkça (sarı, kahverengi, mavi) oksit kalınlığı ve risk artar.</p>
<h2>Önlemek: Kök Gazlama</h2>
<p>En iyi temizlik, oluşmayan kirliliktir. Boru ve kapalı kesitlerde dikişin iç yüzü, kaynak sırasında argon veya formier gazıyla <strong>kök gazlama</strong> yapılarak korunur. Yetersiz gazlamada kök tarafında “şekerlenme” denen, gözenekli ve koyu oksitlenme oluşur; bu çoğu zaman sonradan temizlenemez ve dikişin kesilmesini gerektirir. Gazlama sonrası kalan oksijen seviyesi ölçülerek kontrol edilebilir (bkz. <a href="tig-paslanmaz-celik.html">paslanmaz çelikte TIG kaynağı</a>).</p>
<h2>Temizleme Yöntemleri</h2>
<table class="data-table"><thead><tr><th>Yöntem</th><th>Nasıl yapılır</th><th>Avantaj / dikkat</th></tr></thead><tbody>
<tr><td>Mekanik</td><td>Paslanmaz tel fırça, demir içermeyen zımpara ve fleks diskleri</td><td>Hızlı; fakat kromca fakir bölgeyi tamamen almayabilir, yüzeyde çizik ve pürüz bırakabilir</td></tr>
<tr><td>Dağlama pastası</td><td>Nitrik ve hidroflorik asit içeren pasta dikişe sürülür, süre sonunda bol suyla yıkanır</td><td>Yerel uygulama için ideal; kimyasal güvenlik ve atık suyun bertarafı şart</td></tr>
<tr><td>Dağlama banyosu / püskürtme</td><td>Parça tamamen banyoya daldırılır veya çözelti püskürtülür</td><td>Bütün yüzeyde homojen sonuç; büyük parçada tesis gerekir</td></tr>
<tr><td>Elektrokimyasal</td><td>Elektrolit ve akım ile fırça veya pedle yüzey temizlenir</td><td>Hidroflorik asitsiz, iz bırakmadan; görünür yüzeylerde tercih edilir</td></tr>
</tbody></table>
<p><strong>Dağlama</strong>, oksit tabakasını ve altındaki kromca fakir bölgeyi kaldırır. <strong>Pasivasyon</strong> ise temiz yüzeyde koruyucu krom oksit tabakasının yeniden ve düzgün oluşmasını hızlandırır; genellikle nitrik veya sitrik asit çözeltileriyle yapılır. Dağlama asitleri aynı zamanda pasivasyon etkisi de sağlar. Bu işlemler için ASTM A380 (temizlik, dağlama ve pasivasyon uygulaması) ve ASTM A967 (pasivasyon işlemleri ve doğrulama) sık referans alınır.</p>
<h2>Demir Kontaminasyonu</h2>
<p>Paslanmaz yüzeyde sonradan çıkan pas lekelerinin çoğu, malzemenin kendisinden değil, <strong>dışarıdan bulaşan demirden</strong> kaynaklanır: karbon çelik ile ortak kullanılan fırça, disk, mengene, taşıma çatalı veya yakında yapılan taşlamanın tozları. Önlem olarak paslanmaz için ayrı takım ve ayrı çalışma alanı kullanılır, parçalar karbon çelikle temas etmeyecek şekilde taşınır. Demir bulaşmasının kontrolü için ferroksil testi gibi yöntemler kullanılabilir.</p>
<h2>Kabul ve Kontrol</h2>
<ul>
<li><strong>Görsel:</strong> Isı renklerinin kabul edilebilir seviyesi şartnamede tanımlanır; bazı sektörlerde renk skalaları (örneğin AWS D18.2) kullanılır.</li>
<li><strong>Demir bulaşması:</strong> Ferroksil veya su testi.</li>
<li><strong>Pasiflik:</strong> Gerektiğinde ASTM A967’deki doğrulama testleri.</li>
<li><strong>Kayıt:</strong> Kullanılan kimyasal, süre, durulama ve test sonuçları kalite dosyasına işlenir.</li>
</ul>
<h2>Güvenlik ve Çevre</h2>
<p>Dağlama kimyasalları, özellikle hidroflorik asit, ciddi sağlık riski taşır. Uygun kişisel koruyucu donanım, havalandırma, ilk yardım hazırlığı ve atık suyun nötralize edilerek bertarafı zorunludur. Bu nedenle büyük parçalarda veya seri işlerde dağlama, donanımlı tesislerde yapılır.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Paslanmaz işlerde kök gazlama uygular, paslanmaz için ayrı takım ve çalışma düzeniyle demir bulaşmasını önleriz. Isı renklerinin temizliği, dağlama ve pasivasyon ihtiyacı şartnameye göre teklif aşamasında yöntemiyle birlikte netleştirilir. <a href="../kaynak-yontemleri.html">Kaynak yöntemlerimiz →</a></p></div>
`,
    faq: [
      ['Paslanmaz kaynak yanığı nasıl temizlenir?', 'Mekanik temizlik (paslanmaz fırça, demirsiz zımpara), dağlama pastası veya banyosu ya da elektrokimyasal temizlik ile. Kritik uygulamalarda dağlamanın ardından pasivasyon yapılır.'],
      ['Dağlama ile pasivasyon arasındaki fark nedir?', 'Dağlama oksit tabakasını ve altındaki kromca fakir bölgeyi kaldırır; pasivasyon temiz yüzeyde koruyucu krom oksit tabakasının yeniden oluşmasını sağlar.'],
      ['Paslanmazda pas lekesi neden çıkar?', 'Çoğu zaman karbon çelik takımlardan veya taşlama tozundan bulaşan demir nedeniyle. Ayrı takım ve çalışma alanı kullanmak bunu önler.'],
      ['Kök gazlama neden gerekir?', 'Dikişin iç yüzünün havayla temas edip şekerlenmesini, yani gözenekli ve korozyona açık oksitlenmeyi önlemek için.']
    ],
    cta_h3: 'Korozyona dayanıklı paslanmaz kaynak',
    cta_p: 'Paslanmaz çiziminizi ve yüzey şartlarınızı gönderin; kaynak ve temizlik planıyla teklif sunalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Cleaning Stainless Steel Welds: Heat Tint, Pickling and Passivation',
    meta: 'Why does heat tint on stainless steel welds start corrosion? Mechanical cleaning, pickling paste and baths, electrochemical cleaning, passivation (ASTM A380, A967), back purging, iron contamination and inspection methods.',
    og: 'Cleaning Stainless Welds and Passivation',
    tag: 'Stainless Steel · Surface',
    h1: 'Cleaning Stainless Steel Welds: Heat Tint, Pickling and Passivation',
    crumb: 'Cleaning Stainless Welds',
    read: '6 min read',
    body: `
<p>Stainless steel does not rust thanks to a thin, self-forming chromium oxide layer on its surface. Welding disturbs that layer. The <strong>heat tint</strong> around the weld, from straw yellow to blue, is not just cosmetic; if not removed, it becomes the place where corrosion starts.</p>
<h2>Why Heat Tint Is Dangerous</h2>
<p>During welding, the surface reacts with air and forms a thickened oxide. Just beneath it remains a thin chromium-depleted layer. With reduced chromium, the surface cannot protect itself again; <strong>pitting corrosion</strong> starts at these spots, especially in chloride environments and food and chemical plants. The darker the colour (yellow, brown, blue), the thicker the oxide and the higher the risk.</p>
<h2>Prevention: Back Purging</h2>
<p>The best cleaning is contamination that never forms. On pipes and closed sections, the inside of the weld is protected by <strong>back purging</strong> with argon or forming gas. Inadequate purging creates “sugaring” on the root side, a porous dark oxidation that often cannot be cleaned and requires cutting out the weld. Residual oxygen after purging can be measured (see <a href="tig-paslanmaz-celik.html">TIG welding of stainless steel</a>).</p>
<h2>Cleaning Methods</h2>
<table class="data-table"><thead><tr><th>Method</th><th>How</th><th>Advantage / caution</th></tr></thead><tbody>
<tr><td>Mechanical</td><td>Stainless wire brush, iron-free abrasives and flap discs</td><td>Fast, but may not fully remove the chromium-depleted layer; can leave scratches and roughness</td></tr>
<tr><td>Pickling paste</td><td>Paste containing nitric and hydrofluoric acid applied to the weld, then rinsed thoroughly</td><td>Ideal locally; chemical safety and wastewater disposal essential</td></tr>
<tr><td>Pickling bath / spray</td><td>Part immersed in a bath or solution sprayed</td><td>Uniform result over the whole surface; large parts need a facility</td></tr>
<tr><td>Electrochemical</td><td>Electrolyte and current applied with a brush or pad</td><td>No hydrofluoric acid, no marks; preferred on visible surfaces</td></tr>
</tbody></table>
<p><strong>Pickling</strong> removes the oxide and the chromium-depleted layer beneath it. <strong>Passivation</strong> accelerates the uniform re-formation of the protective chromium oxide on the clean surface, usually with nitric or citric acid solutions. Pickling acids also have a passivating effect. ASTM A380 (cleaning, descaling and passivation practice) and ASTM A967 (passivation treatments and verification) are common references.</p>
<h2>Iron Contamination</h2>
<p>Most rust stains that appear later on stainless surfaces come not from the material but from <strong>iron picked up from outside</strong>: brushes, discs, vices or forklift tines shared with carbon steel, or grinding dust from nearby work. Use separate tools and a separate work area for stainless, and handle parts so they do not touch carbon steel. Methods such as the ferroxyl test can check for iron contamination.</p>
<h2>Acceptance and Inspection</h2>
<ul>
<li><strong>Visual:</strong> the acceptable heat-tint level is defined in the specification; some sectors use colour scales (e.g. AWS D18.2).</li>
<li><strong>Iron contamination:</strong> ferroxyl or water test.</li>
<li><strong>Passivity:</strong> verification tests in ASTM A967 where required.</li>
<li><strong>Records:</strong> chemical used, time, rinsing and test results go into the quality file.</li>
</ul>
<h2>Safety and Environment</h2>
<p>Pickling chemicals, especially hydrofluoric acid, carry serious health risks. Suitable PPE, ventilation, first-aid readiness and neutralization of wastewater before disposal are mandatory. For large parts or series work, pickling is therefore done in equipped facilities.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> on stainless work we back purge and use separate tools and a separate work routine for stainless to prevent iron contamination. Heat-tint removal and the need for pickling and passivation are agreed at quotation, together with the method, according to the specification. <a href="../kaynak-yontemleri.html">Our welding methods →</a></p></div>
`,
    faq: [
      ['How is heat tint removed from stainless welds?', 'By mechanical cleaning (stainless brush, iron-free abrasives), pickling paste or bath, or electrochemical cleaning. In critical applications pickling is followed by passivation.'],
      ['What is the difference between pickling and passivation?', 'Pickling removes the oxide and the chromium-depleted layer beneath; passivation lets the protective chromium oxide re-form on the clean surface.'],
      ['Why do rust stains appear on stainless?', 'Usually because of iron picked up from carbon steel tools or grinding dust. Separate tools and work areas prevent this.'],
      ['Why is back purging needed?', 'To stop the inside of the weld reacting with air and sugaring, a porous oxidation that is open to corrosion.']
    ],
    cta_h3: 'Corrosion-resistant stainless welding',
    cta_p: 'Send your stainless drawing and surface requirements; we will quote with a welding and cleaning plan.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Edelstahlnähte reinigen: Anlauffarben, Beizen und Passivieren',
    meta: 'Warum lösen Anlauffarben an Edelstahlnähten Korrosion aus? Mechanische Reinigung, Beizpaste und Beizbad, elektrochemische Reinigung, Passivierung (ASTM A380, A967), Wurzelschutz, Fremdeisen und Prüfverfahren.',
    og: 'Edelstahlnähte beizen und passivieren',
    tag: 'Edelstahl · Oberfläche',
    h1: 'Edelstahlnähte reinigen: Anlauffarben, Beizen und Passivieren',
    crumb: 'Edelstahlnähte reinigen',
    read: '6 Min. Lesezeit',
    body: `
<p>Edelstahl rostet nicht dank einer dünnen, sich selbst bildenden Chromoxidschicht. Schweißen stört diese Schicht. Die <strong>Anlauffarben</strong> um die Naht, von strohgelb bis blau, sind kein reines Optikproblem; werden sie nicht entfernt, beginnt dort die Korrosion.</p>
<h2>Warum Anlauffarben gefährlich sind</h2>
<p>Beim Schweißen reagiert die Oberfläche mit Luft und bildet eine verdickte Oxidschicht. Darunter bleibt eine dünne, an Chrom verarmte Zone. Mit verringertem Chromgehalt kann sich die Oberfläche nicht wieder schützen; <strong>Lochfraß</strong> beginnt hier, vor allem in chloridhaltiger Umgebung sowie in Lebensmittel- und Chemieanlagen. Je dunkler die Farbe (gelb, braun, blau), desto dicker das Oxid und desto höher das Risiko.</p>
<h2>Vorbeugen: Wurzelschutz</h2>
<p>Die beste Reinigung ist eine Verfärbung, die gar nicht entsteht. Bei Rohren und Hohlprofilen wird die Nahtinnenseite mit Argon oder Formiergas durch <strong>Formieren</strong> geschützt. Unzureichendes Formieren führt wurzelseitig zur „Verzunderung“, einer porösen, dunklen Oxidation, die oft nicht mehr zu reinigen ist und das Heraustrennen der Naht erfordert. Der Restsauerstoff kann gemessen werden (siehe <a href="tig-paslanmaz-celik.html">WIG-Schweißen von Edelstahl</a>).</p>
<h2>Reinigungsverfahren</h2>
<table class="data-table"><thead><tr><th>Verfahren</th><th>Durchführung</th><th>Vorteil / Hinweis</th></tr></thead><tbody>
<tr><td>Mechanisch</td><td>Edelstahlbürste, eisenfreie Schleifmittel und Fächerscheiben</td><td>Schnell, entfernt die chromverarmte Zone aber nicht immer vollständig; Kratzer und Rauheit möglich</td></tr>
<tr><td>Beizpaste</td><td>Paste mit Salpeter- und Flusssäure auf die Naht, danach gründlich spülen</td><td>Ideal für lokale Anwendung; Arbeitsschutz und Abwasserentsorgung zwingend</td></tr>
<tr><td>Tauch- oder Sprühbeizen</td><td>Teil im Bad oder mit Beizlösung besprüht</td><td>Gleichmäßiges Ergebnis auf der ganzen Fläche; große Teile brauchen eine Anlage</td></tr>
<tr><td>Elektrochemisch</td><td>Elektrolyt und Strom mit Pinsel oder Pad</td><td>Ohne Flusssäure und spurlos; bevorzugt bei Sichtflächen</td></tr>
</tbody></table>
<p><strong>Beizen</strong> entfernt das Oxid und die chromverarmte Zone darunter. <strong>Passivieren</strong> beschleunigt die gleichmäßige Neubildung der schützenden Chromoxidschicht auf der sauberen Fläche, meist mit Salpeter- oder Zitronensäurelösungen. Beizsäuren wirken zugleich passivierend. Häufige Referenzen sind ASTM A380 (Reinigung, Entzunderung, Passivierung) und ASTM A967 (Passivierungsbehandlungen und Nachweis).</p>
<h2>Fremdeisen</h2>
<p>Die meisten später auftretenden Rostflecken auf Edelstahl stammen nicht vom Werkstoff, sondern von <strong>eingeschlepptem Eisen</strong>: Bürsten, Scheiben, Schraubstöcke oder Staplerzinken, die auch für Baustahl genutzt werden, oder Schleifstaub aus der Nähe. Getrennte Werkzeuge und ein getrennter Arbeitsbereich sowie Transport ohne Kontakt zu Baustahl beugen vor. Der Ferroxyltest ist ein Verfahren zum Nachweis von Fremdeisen.</p>
<h2>Abnahme und Prüfung</h2>
<ul>
<li><strong>Sichtprüfung:</strong> die zulässige Anlauffarbe wird in der Spezifikation festgelegt; manche Branchen nutzen Farbskalen (z. B. AWS D18.2).</li>
<li><strong>Fremdeisen:</strong> Ferroxyl- oder Wassertest.</li>
<li><strong>Passivität:</strong> bei Bedarf Nachweisprüfungen nach ASTM A967.</li>
<li><strong>Dokumentation:</strong> Chemikalie, Einwirkzeit, Spülung und Prüfergebnisse kommen in die Qualitätsakte.</li>
</ul>
<h2>Sicherheit und Umwelt</h2>
<p>Beizchemikalien, besonders Flusssäure, sind gesundheitlich sehr gefährlich. Geeignete PSA, Lüftung, Erste-Hilfe-Bereitschaft und Neutralisation des Abwassers sind Pflicht. Große Teile und Serien werden daher in ausgerüsteten Anlagen gebeizt.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei Edelstahl formieren wir die Wurzel und arbeiten mit getrennten Werkzeugen und eigenem Ablauf, um Fremdeisen zu vermeiden. Entfernen der Anlauffarben sowie der Bedarf an Beizen und Passivieren werden gemäß Spezifikation im Angebot samt Verfahren abgestimmt. <a href="../kaynak-yontemleri.html">Unsere Schweißverfahren →</a></p></div>
`,
    faq: [
      ['Wie entfernt man Anlauffarben an Edelstahlnähten?', 'Mechanisch (Edelstahlbürste, eisenfreie Schleifmittel), mit Beizpaste oder Beizbad oder elektrochemisch. Bei kritischen Anwendungen folgt dem Beizen das Passivieren.'],
      ['Unterschied zwischen Beizen und Passivieren?', 'Beizen entfernt das Oxid und die chromverarmte Zone; Passivieren lässt die schützende Chromoxidschicht auf der sauberen Fläche neu entstehen.'],
      ['Warum entstehen Rostflecken auf Edelstahl?', 'Meist durch Fremdeisen von Baustahlwerkzeugen oder Schleifstaub. Getrennte Werkzeuge und Arbeitsbereiche verhindern das.'],
      ['Warum ist Formieren nötig?', 'Damit die Nahtinnenseite nicht mit Luft reagiert und verzundert, also porös und korrosionsanfällig oxidiert.']
    ],
    cta_h3: 'Korrosionsbeständige Edelstahlschweißung',
    cta_p: 'Senden Sie Ihre Edelstahlzeichnung und Oberflächenanforderungen; wir bieten mit Schweiß- und Reinigungsplan an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Limpieza de soldaduras de inoxidable: coloración térmica, decapado y pasivado',
    meta: 'Por qué la coloración térmica en soldaduras de acero inoxidable inicia la corrosión: limpieza mecánica, pasta y baño de decapado, limpieza electroquímica, pasivado (ASTM A380, A967), protección de raíz, contaminación por hierro y métodos de control.',
    og: 'Limpieza de soldaduras de inoxidable y pasivado',
    tag: 'Acero inoxidable · Superficie',
    h1: 'Limpieza de soldaduras de inoxidable: coloración térmica, decapado y pasivado',
    crumb: 'Limpieza de soldaduras inox',
    read: '6 min de lectura',
    body: `
<p>El acero inoxidable no se oxida gracias a una fina capa de óxido de cromo que se forma sola. La soldadura altera esa capa. La <strong>coloración térmica</strong> alrededor del cordón, del amarillo pajizo al azul, no es solo estética: si no se elimina, es el punto donde empieza la corrosión.</p>
<h2>Por qué es peligrosa la coloración</h2>
<p>Al soldar, la superficie reacciona con el aire y forma un óxido engrosado. Justo debajo queda una capa fina empobrecida en cromo. Con menos cromo, la superficie no puede protegerse de nuevo; la <strong>corrosión por picaduras</strong> empieza ahí, sobre todo en ambientes con cloruros y en plantas alimentarias y químicas. Cuanto más oscuro el color (amarillo, marrón, azul), más grueso el óxido y mayor el riesgo.</p>
<h2>Prevenir: protección de raíz</h2>
<p>La mejor limpieza es la contaminación que no llega a formarse. En tubos y perfiles cerrados, el interior del cordón se protege con <strong>gas de respaldo</strong> (argón o gas de formación). Una protección insuficiente produce en la raíz el «azucarado», una oxidación oscura y porosa que a menudo no se puede limpiar y obliga a cortar el cordón. El oxígeno residual puede medirse (ver <a href="tig-paslanmaz-celik.html">soldadura TIG de inoxidable</a>).</p>
<h2>Métodos de limpieza</h2>
<table class="data-table"><thead><tr><th>Método</th><th>Cómo</th><th>Ventaja / precaución</th></tr></thead><tbody>
<tr><td>Mecánico</td><td>Cepillo de inoxidable, abrasivos y discos sin hierro</td><td>Rápido, pero puede no eliminar del todo la capa empobrecida; puede dejar rayas y rugosidad</td></tr>
<tr><td>Pasta decapante</td><td>Pasta con ácido nítrico y fluorhídrico sobre el cordón y aclarado abundante</td><td>Ideal en local; imprescindibles seguridad química y gestión de aguas residuales</td></tr>
<tr><td>Baño / pulverización</td><td>Inmersión de la pieza o pulverizado de la solución</td><td>Resultado uniforme en toda la superficie; piezas grandes requieren instalación</td></tr>
<tr><td>Electroquímico</td><td>Electrolito y corriente con brocha o almohadilla</td><td>Sin fluorhídrico ni marcas; preferido en superficies vistas</td></tr>
</tbody></table>
<p>El <strong>decapado</strong> elimina el óxido y la capa empobrecida en cromo. El <strong>pasivado</strong> acelera la nueva formación uniforme del óxido de cromo protector sobre la superficie limpia, normalmente con soluciones de ácido nítrico o cítrico. Los ácidos de decapado también pasivan. Son referencias habituales la ASTM A380 (limpieza, decapado y pasivado) y la ASTM A967 (tratamientos de pasivado y verificación).</p>
<h2>Contaminación por hierro</h2>
<p>La mayoría de manchas de óxido que aparecen después en el inoxidable no vienen del material sino de <strong>hierro externo</strong>: cepillos, discos, tornillos de banco u horquillas compartidos con acero al carbono, o polvo de amolado cercano. Herramientas y zona de trabajo separadas, y una manipulación sin contacto con acero al carbono, lo evitan. El ensayo de ferroxilo permite detectar contaminación por hierro.</p>
<h2>Aceptación y control</h2>
<ul>
<li><strong>Visual:</strong> el nivel aceptable de coloración lo define la especificación; algunos sectores usan escalas de color (p. ej. AWS D18.2).</li>
<li><strong>Hierro:</strong> ensayo de ferroxilo o de agua.</li>
<li><strong>Pasividad:</strong> ensayos de verificación de la ASTM A967 cuando se exijan.</li>
<li><strong>Registros:</strong> producto químico, tiempo, aclarado y resultados en el dossier de calidad.</li>
</ul>
<h2>Seguridad y medio ambiente</h2>
<p>Los productos de decapado, en especial el ácido fluorhídrico, son muy peligrosos. EPI adecuados, ventilación, primeros auxilios preparados y neutralización de las aguas residuales son obligatorios. Por eso las piezas grandes y las series se decapan en instalaciones equipadas.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> en inoxidable aplicamos protección de raíz y trabajamos con herramientas y rutina separadas para evitar la contaminación por hierro. La eliminación de la coloración y la necesidad de decapado y pasivado se acuerdan en la oferta, con su método, según la especificación. <a href="../kaynak-yontemleri.html">Nuestros procesos de soldadura →</a></p></div>
`,
    faq: [
      ['¿Cómo se elimina la coloración de las soldaduras inox?', 'Con limpieza mecánica (cepillo inox, abrasivos sin hierro), pasta o baño de decapado o limpieza electroquímica. En aplicaciones críticas, tras el decapado se pasiva.'],
      ['¿Diferencia entre decapado y pasivado?', 'El decapado elimina el óxido y la capa empobrecida en cromo; el pasivado permite que el óxido de cromo protector se forme de nuevo en la superficie limpia.'],
      ['¿Por qué salen manchas de óxido en el inoxidable?', 'Normalmente por hierro de herramientas de acero al carbono o polvo de amolado. Herramientas y zonas separadas lo evitan.'],
      ['¿Por qué hace falta gas de respaldo?', 'Para que el interior del cordón no reaccione con el aire y se «azucare», una oxidación porosa y vulnerable a la corrosión.']
    ],
    cta_h3: 'Soldadura de inoxidable resistente a la corrosión',
    cta_p: 'Envíenos su plano en inoxidable y los requisitos de superficie; ofertamos con plan de soldadura y limpieza.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Nettoyer les soudures inox : colorations thermiques, décapage et passivation',
    meta: 'Pourquoi les colorations thermiques des soudures inox amorcent-elles la corrosion ? Nettoyage mécanique, pâte et bain de décapage, nettoyage électrochimique, passivation (ASTM A380, A967), protection envers, pollution ferreuse et contrôles.',
    og: 'Nettoyer les soudures inox et passiver',
    tag: 'Acier inoxydable · Surface',
    h1: 'Nettoyer les soudures inox : colorations thermiques, décapage et passivation',
    crumb: 'Nettoyer les soudures inox',
    read: '6 min de lecture',
    body: `
<p>L’acier inoxydable ne rouille pas grâce à une fine couche d’oxyde de chrome qui se forme d’elle-même. Le soudage perturbe cette couche. Les <strong>colorations thermiques</strong> autour du cordon, du jaune paille au bleu, ne sont pas qu’esthétiques : non éliminées, elles deviennent le point de départ de la corrosion.</p>
<h2>Pourquoi les colorations sont dangereuses</h2>
<p>Pendant le soudage, la surface réagit avec l’air et forme un oxyde épaissi. Juste dessous subsiste une fine couche appauvrie en chrome. Moins riche en chrome, la surface ne peut plus se protéger ; la <strong>corrosion par piqûres</strong> démarre là, surtout en milieu chloruré et dans les installations agroalimentaires et chimiques. Plus la teinte est sombre (jaune, brun, bleu), plus l’oxyde est épais et le risque élevé.</p>
<h2>Prévenir : protection envers</h2>
<p>Le meilleur nettoyage est la pollution qui ne se forme pas. Sur tubes et profils fermés, l’intérieur du cordon est protégé par une <strong>protection gazeuse envers</strong> à l’argon ou au gaz de formage. Une protection insuffisante crée côté racine une oxydation sombre et poreuse, souvent impossible à nettoyer, qui impose de reprendre le cordon. L’oxygène résiduel peut être mesuré (voir <a href="tig-paslanmaz-celik.html">soudage TIG de l’inox</a>).</p>
<h2>Méthodes de nettoyage</h2>
<table class="data-table"><thead><tr><th>Méthode</th><th>Mise en œuvre</th><th>Avantage / précaution</th></tr></thead><tbody>
<tr><td>Mécanique</td><td>Brosse inox, abrasifs et disques à lamelles sans fer</td><td>Rapide, mais n’enlève pas toujours toute la couche appauvrie ; rayures et rugosité possibles</td></tr>
<tr><td>Pâte de décapage</td><td>Pâte à l’acide nitrique et fluorhydrique sur le cordon, puis rinçage abondant</td><td>Idéale en local ; sécurité chimique et traitement des effluents indispensables</td></tr>
<tr><td>Bain / pulvérisation</td><td>Immersion de la pièce ou pulvérisation de la solution</td><td>Résultat homogène sur toute la surface ; grandes pièces : installation nécessaire</td></tr>
<tr><td>Électrochimique</td><td>Électrolyte et courant au pinceau ou au tampon</td><td>Sans acide fluorhydrique ni traces ; préféré sur surfaces visibles</td></tr>
</tbody></table>
<p>Le <strong>décapage</strong> enlève l’oxyde et la couche appauvrie en chrome. La <strong>passivation</strong> accélère la reformation homogène de l’oxyde de chrome protecteur sur la surface propre, généralement avec des solutions d’acide nitrique ou citrique. Les acides de décapage ont aussi un effet passivant. Références courantes : ASTM A380 (nettoyage, décapage, passivation) et ASTM A967 (traitements de passivation et vérification).</p>
<h2>Pollution ferreuse</h2>
<p>La plupart des taches de rouille apparues plus tard sur l’inox ne viennent pas du matériau mais de <strong>fer apporté de l’extérieur</strong> : brosses, disques, étaux ou fourches partagés avec l’acier carbone, ou poussières de meulage voisines. Outils et zone de travail séparés, et manutention sans contact avec l’acier carbone, l’évitent. L’essai au ferroxyl permet de détecter la pollution ferreuse.</p>
<h2>Acceptation et contrôle</h2>
<ul>
<li><strong>Visuel :</strong> le niveau de coloration admis est fixé par la spécification ; certains secteurs utilisent des échelles de teintes (p. ex. AWS D18.2).</li>
<li><strong>Fer :</strong> essai au ferroxyl ou à l’eau.</li>
<li><strong>Passivité :</strong> essais de vérification de l’ASTM A967 si demandé.</li>
<li><strong>Enregistrements :</strong> produit, durée, rinçage et résultats dans le dossier qualité.</li>
</ul>
<h2>Sécurité et environnement</h2>
<p>Les produits de décapage, notamment l’acide fluorhydrique, présentent des risques graves. EPI adaptés, ventilation, premiers secours prêts et neutralisation des effluents sont obligatoires. Les grandes pièces et les séries sont donc décapées dans des installations équipées.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> sur l’inox, nous protégeons l’envers et travaillons avec des outils et une organisation séparés pour éviter la pollution ferreuse. L’élimination des colorations et le besoin de décapage et de passivation sont convenus au devis, méthode comprise, selon la spécification. <a href="../kaynak-yontemleri.html">Nos procédés de soudage →</a></p></div>
`,
    faq: [
      ['Comment éliminer les colorations des soudures inox ?', 'Par nettoyage mécanique (brosse inox, abrasifs sans fer), pâte ou bain de décapage, ou nettoyage électrochimique. En usage critique, le décapage est suivi d’une passivation.'],
      ['Différence entre décapage et passivation ?', 'Le décapage enlève l’oxyde et la couche appauvrie en chrome ; la passivation laisse l’oxyde de chrome protecteur se reformer sur la surface propre.'],
      ['Pourquoi des taches de rouille sur l’inox ?', 'Le plus souvent à cause de fer provenant d’outils en acier carbone ou de poussières de meulage. Des outils et zones séparés l’évitent.'],
      ['Pourquoi une protection envers ?', 'Pour éviter que l’intérieur du cordon réagisse avec l’air et s’oxyde de façon poreuse et sensible à la corrosion.']
    ],
    cta_h3: 'Un soudage inox résistant à la corrosion',
    cta_p: 'Envoyez votre plan inox et vos exigences de surface ; nous chiffrons avec un plan de soudage et de nettoyage.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Pulizia delle saldature inox: colorazioni termiche, decapaggio e passivazione',
    meta: 'Perché le colorazioni termiche sulle saldature inox innescano la corrosione? Pulizia meccanica, pasta e bagno decapante, pulizia elettrochimica, passivazione (ASTM A380, A967), protezione al rovescio, contaminazione ferrosa e controlli.',
    og: 'Pulizia delle saldature inox e passivazione',
    tag: 'Acciaio inox · Superficie',
    h1: 'Pulizia delle saldature inox: colorazioni termiche, decapaggio e passivazione',
    crumb: 'Pulizia saldature inox',
    read: '6 min di lettura',
    body: `
<p>L’acciaio inox non arrugginisce grazie a un sottile strato di ossido di cromo che si forma da solo. La saldatura altera questo strato. Le <strong>colorazioni termiche</strong> attorno al cordone, dal giallo paglierino al blu, non sono solo estetiche: se non rimosse, diventano il punto in cui inizia la corrosione.</p>
<h2>Perché le colorazioni sono pericolose</h2>
<p>In saldatura la superficie reagisce con l’aria e forma un ossido ispessito. Subito sotto resta uno strato sottile impoverito di cromo. Con meno cromo la superficie non riesce a riproteggersi; la <strong>corrosione per vaiolatura</strong> parte da lì, soprattutto in ambienti con cloruri e in impianti alimentari e chimici. Più scuro è il colore (giallo, marrone, blu), più spesso è l’ossido e maggiore il rischio.</p>
<h2>Prevenire: protezione al rovescio</h2>
<p>La pulizia migliore è la contaminazione che non si forma. Su tubi e profili chiusi l’interno del cordone si protegge con <strong>gas di protezione al rovescio</strong> (argon o forming gas). Una protezione insufficiente crea al rovescio la «zuccheratura», un’ossidazione scura e porosa spesso impossibile da pulire, che obbliga a tagliare il cordone. L’ossigeno residuo si può misurare (vedi <a href="tig-paslanmaz-celik.html">saldatura TIG dell’inox</a>).</p>
<h2>Metodi di pulizia</h2>
<table class="data-table"><thead><tr><th>Metodo</th><th>Come</th><th>Vantaggio / attenzione</th></tr></thead><tbody>
<tr><td>Meccanico</td><td>Spazzola inox, abrasivi e dischi lamellari senza ferro</td><td>Rapido, ma può non rimuovere del tutto lo strato impoverito; possibili graffi e rugosità</td></tr>
<tr><td>Pasta decapante</td><td>Pasta con acido nitrico e fluoridrico sul cordone, poi abbondante risciacquo</td><td>Ideale in locale; indispensabili sicurezza chimica e smaltimento delle acque</td></tr>
<tr><td>Bagno / spruzzo</td><td>Immersione del pezzo o spruzzatura della soluzione</td><td>Risultato uniforme su tutta la superficie; pezzi grandi richiedono un impianto</td></tr>
<tr><td>Elettrochimico</td><td>Elettrolita e corrente con pennello o tampone</td><td>Senza acido fluoridrico né segni; preferito sulle superfici a vista</td></tr>
</tbody></table>
<p>Il <strong>decapaggio</strong> rimuove l’ossido e lo strato impoverito di cromo. La <strong>passivazione</strong> accelera la riformazione uniforme dell’ossido di cromo protettivo sulla superficie pulita, di solito con soluzioni di acido nitrico o citrico. Gli acidi decapanti hanno anche effetto passivante. Riferimenti comuni sono ASTM A380 (pulizia, decapaggio, passivazione) e ASTM A967 (trattamenti di passivazione e verifica).</p>
<h2>Contaminazione ferrosa</h2>
<p>Gran parte delle macchie di ruggine che compaiono dopo sull’inox non deriva dal materiale ma da <strong>ferro esterno</strong>: spazzole, dischi, morse o forche condivise con l’acciaio al carbonio, o polveri di molatura vicine. Attrezzi e area di lavoro separati e una movimentazione senza contatto con acciaio al carbonio la prevengono. Il test al ferroxyl permette di rilevare la contaminazione ferrosa.</p>
<h2>Accettazione e controllo</h2>
<ul>
<li><strong>Visivo:</strong> il livello di colorazione ammesso è definito in specifica; alcuni settori usano scale cromatiche (es. AWS D18.2).</li>
<li><strong>Ferro:</strong> test al ferroxyl o all’acqua.</li>
<li><strong>Passività:</strong> prove di verifica della ASTM A967 se richieste.</li>
<li><strong>Registrazioni:</strong> prodotto, tempi, risciacquo e risultati nel fascicolo qualità.</li>
</ul>
<h2>Sicurezza e ambiente</h2>
<p>I prodotti decapanti, in particolare l’acido fluoridrico, comportano gravi rischi. DPI adeguati, ventilazione, primo soccorso pronto e neutralizzazione delle acque reflue sono obbligatori. Per questo pezzi grandi e serie si decapano in impianti attrezzati.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> sull’inox applichiamo la protezione al rovescio e lavoriamo con attrezzi e procedure separate per evitare la contaminazione ferrosa. Rimozione delle colorazioni ed esigenza di decapaggio e passivazione si concordano in offerta, metodo incluso, secondo la specifica. <a href="../kaynak-yontemleri.html">I nostri processi di saldatura →</a></p></div>
`,
    faq: [
      ['Come si rimuovono le colorazioni dalle saldature inox?', 'Con pulizia meccanica (spazzola inox, abrasivi senza ferro), pasta o bagno decapante o pulizia elettrochimica. Nelle applicazioni critiche al decapaggio segue la passivazione.'],
      ['Differenza tra decapaggio e passivazione?', 'Il decapaggio rimuove l’ossido e lo strato impoverito di cromo; la passivazione fa riformare l’ossido di cromo protettivo sulla superficie pulita.'],
      ['Perché compaiono macchie di ruggine sull’inox?', 'Di solito per ferro da attrezzi in acciaio al carbonio o polveri di molatura. Attrezzi e aree separati lo evitano.'],
      ['Perché serve la protezione al rovescio?', 'Per evitare che l’interno del cordone reagisca con l’aria e si «zuccheri», con un’ossidazione porosa vulnerabile alla corrosione.']
    ],
    cta_h3: 'Saldatura inox resistente alla corrosione',
    cta_p: 'Inviateci il disegno inox e i requisiti di superficie; quotiamo con piano di saldatura e pulizia.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'RVS-lassen reinigen: aanloopkleuren, beitsen en passiveren',
    meta: 'Waarom starten aanloopkleuren op RVS-lassen corrosie? Mechanisch reinigen, beitspasta en beitsbad, elektrochemisch reinigen, passiveren (ASTM A380, A967), backing gas, ijzercontaminatie en controlemethoden.',
    og: 'RVS-lassen beitsen en passiveren',
    tag: 'Roestvast staal · Oppervlak',
    h1: 'RVS-lassen reinigen: aanloopkleuren, beitsen en passiveren',
    crumb: 'RVS-lassen reinigen',
    read: '6 min lezen',
    body: `
<p>Roestvast staal roest niet dankzij een dunne chroomoxidelaag die zich vanzelf vormt. Lassen verstoort die laag. De <strong>aanloopkleuren</strong> rond de las, van strogeel tot blauw, zijn niet alleen cosmetisch; worden ze niet verwijderd, dan begint daar de corrosie.</p>
<h2>Waarom aanloopkleuren gevaarlijk zijn</h2>
<p>Tijdens het lassen reageert het oppervlak met lucht en ontstaat een verdikte oxidelaag. Direct daaronder blijft een dunne, chroomverarmde zone. Met minder chroom kan het oppervlak zich niet opnieuw beschermen; <strong>putcorrosie</strong> begint daar, vooral in chloridehoudende omgevingen en in voedings- en chemische installaties. Hoe donkerder de kleur (geel, bruin, blauw), hoe dikker het oxide en hoe groter het risico.</p>
<h2>Voorkomen: backing gas</h2>
<p>De beste reiniging is vervuiling die niet ontstaat. Bij buizen en kokers wordt de binnenkant van de las beschermd met <strong>backing gas</strong> (argon of formeergas). Onvoldoende bescherming geeft aan de grondlaagzijde “suikering”, een poreuze donkere oxidatie die vaak niet meer te reinigen is en uitslijpen van de las vereist. Het restzuurstofgehalte kan worden gemeten (zie <a href="tig-paslanmaz-celik.html">TIG-lassen van RVS</a>).</p>
<h2>Reinigingsmethoden</h2>
<table class="data-table"><thead><tr><th>Methode</th><th>Uitvoering</th><th>Voordeel / let op</th></tr></thead><tbody>
<tr><td>Mechanisch</td><td>RVS-borstel, ijzervrije schuurmiddelen en lamellenschijven</td><td>Snel, maar verwijdert de chroomverarmde zone niet altijd volledig; krassen en ruwheid mogelijk</td></tr>
<tr><td>Beitspasta</td><td>Pasta met salpeter- en fluorwaterstofzuur op de las, daarna grondig spoelen</td><td>Ideaal lokaal; chemische veiligheid en afvalwaterverwerking noodzakelijk</td></tr>
<tr><td>Beitsbad / spuiten</td><td>Deel onderdompelen of oplossing opspuiten</td><td>Gelijkmatig resultaat over het hele oppervlak; grote delen vragen een installatie</td></tr>
<tr><td>Elektrochemisch</td><td>Elektrolyt en stroom met kwast of pad</td><td>Zonder fluorwaterstofzuur en zonder sporen; voorkeur bij zichtvlakken</td></tr>
</tbody></table>
<p><strong>Beitsen</strong> verwijdert het oxide en de chroomverarmde zone eronder. <strong>Passiveren</strong> versnelt de gelijkmatige hervorming van de beschermende chroomoxidelaag op het schone oppervlak, meestal met salpeter- of citroenzuuroplossingen. Beitszuren werken ook passiverend. Veelgebruikte referenties zijn ASTM A380 (reinigen, ontkalken, passiveren) en ASTM A967 (passiveerbehandelingen en verificatie).</p>
<h2>IJzercontaminatie</h2>
<p>De meeste roestvlekken die later op RVS verschijnen komen niet van het materiaal, maar van <strong>ijzer van buitenaf</strong>: borstels, schijven, bankschroeven of vorken die ook voor koolstofstaal worden gebruikt, of slijpstof uit de buurt. Gescheiden gereedschap en werkplek en transport zonder contact met koolstofstaal voorkomen dit. De ferroxyltest is een methode om ijzercontaminatie aan te tonen.</p>
<h2>Acceptatie en controle</h2>
<ul>
<li><strong>Visueel:</strong> het toelaatbare niveau van aanloopkleuren staat in de specificatie; sommige sectoren gebruiken kleurschalen (bijv. AWS D18.2).</li>
<li><strong>IJzer:</strong> ferroxyl- of watertest.</li>
<li><strong>Passiviteit:</strong> indien vereist verificatietests uit ASTM A967.</li>
<li><strong>Registratie:</strong> gebruikte chemicaliën, tijd, spoelen en testresultaten in het kwaliteitsdossier.</li>
</ul>
<h2>Veiligheid en milieu</h2>
<p>Beitschemicaliën, vooral fluorwaterstofzuur, zijn zeer gevaarlijk. Passende PBM, ventilatie, EHBO-paraatheid en neutralisatie van afvalwater zijn verplicht. Grote delen en series worden daarom in uitgeruste installaties gebeitst.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij RVS gebruiken we backing gas en werken we met gescheiden gereedschap en werkwijze om ijzercontaminatie te voorkomen. Het verwijderen van aanloopkleuren en de behoefte aan beitsen en passiveren stemmen we af bij de offerte, inclusief methode, volgens de specificatie. <a href="../kaynak-yontemleri.html">Onze lasprocessen →</a></p></div>
`,
    faq: [
      ['Hoe verwijder je aanloopkleuren van RVS-lassen?', 'Mechanisch (RVS-borstel, ijzervrije schuurmiddelen), met beitspasta of beitsbad, of elektrochemisch. Bij kritische toepassingen volgt na beitsen passiveren.'],
      ['Verschil tussen beitsen en passiveren?', 'Beitsen verwijdert het oxide en de chroomverarmde zone; passiveren laat de beschermende chroomoxidelaag op het schone oppervlak opnieuw ontstaan.'],
      ['Waarom ontstaan roestvlekken op RVS?', 'Meestal door ijzer van koolstofstaalgereedschap of slijpstof. Gescheiden gereedschap en werkplekken voorkomen dat.'],
      ['Waarom is backing gas nodig?', 'Zodat de binnenkant van de las niet met lucht reageert en suikert, een poreuze oxidatie die gevoelig is voor corrosie.']
    ],
    cta_h3: 'Corrosiebestendig RVS-laswerk',
    cta_p: 'Stuur uw RVS-tekening en oppervlakte-eisen; we offreren met las- en reinigingsplan.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Rengjøring av rustfrie sveiser: anløpsfarger, beising og passivering',
    meta: 'Hvorfor starter anløpsfarger på rustfrie sveiser korrosjon? Mekanisk rengjøring, beisepasta og beisebad, elektrokjemisk rengjøring, passivering (ASTM A380, A967), rotgass, jernforurensning og kontrollmetoder.',
    og: 'Beising og passivering av rustfrie sveiser',
    tag: 'Rustfritt stål · Overflate',
    h1: 'Rengjøring av rustfrie sveiser: anløpsfarger, beising og passivering',
    crumb: 'Rengjøring av rustfrie sveiser',
    read: '6 min lesing',
    body: `
<p>Rustfritt stål ruster ikke takket være et tynt kromoksidlag som danner seg selv. Sveising forstyrrer dette laget. <strong>Anløpsfargene</strong> rundt sveisen, fra strågul til blå, er ikke bare kosmetiske; fjernes de ikke, er det der korrosjonen starter.</p>
<h2>Hvorfor anløpsfarger er farlige</h2>
<p>Under sveising reagerer overflaten med luft og danner et fortykket oksidlag. Rett under ligger en tynn sone med redusert krominnhold. Med mindre krom klarer ikke overflaten å beskytte seg igjen; <strong>gropkorrosjon</strong> starter der, særlig i kloridholdige miljøer og i nærings- og kjemianlegg. Jo mørkere farge (gul, brun, blå), jo tykkere oksid og høyere risiko.</p>
<h2>Forebygging: rotgass</h2>
<p>Den beste rengjøringen er forurensning som aldri oppstår. På rør og hulprofiler beskyttes innsiden av sveisen med <strong>rotgass</strong> (argon eller formiergass). For dårlig beskyttelse gir «sukring» på rotsiden, en porøs og mørk oksidasjon som ofte ikke kan rengjøres og krever at sveisen skjæres ut. Restoksygen kan måles (se <a href="tig-paslanmaz-celik.html">TIG-sveising av rustfritt stål</a>).</p>
<h2>Rengjøringsmetoder</h2>
<table class="data-table"><thead><tr><th>Metode</th><th>Utførelse</th><th>Fordel / obs</th></tr></thead><tbody>
<tr><td>Mekanisk</td><td>Rustfri stålbørste, jernfrie slipemidler og lamellskiver</td><td>Raskt, men fjerner ikke alltid hele den kromfattige sonen; kan gi riper og ruhet</td></tr>
<tr><td>Beisepasta</td><td>Pasta med salpeter- og flussyre på sveisen, deretter grundig skylling</td><td>Ideell lokalt; kjemisk sikkerhet og håndtering av avløpsvann er påkrevd</td></tr>
<tr><td>Beisebad / sprøyting</td><td>Delen senkes i bad eller løsning sprøytes på</td><td>Jevnt resultat på hele overflaten; store deler krever anlegg</td></tr>
<tr><td>Elektrokjemisk</td><td>Elektrolytt og strøm med pensel eller pute</td><td>Uten flussyre og uten merker; foretrukket på synlige flater</td></tr>
</tbody></table>
<p><strong>Beising</strong> fjerner oksidet og det kromfattige laget under. <strong>Passivering</strong> fremskynder jevn nydannelse av det beskyttende kromoksidet på den rene overflaten, vanligvis med salpeter- eller sitronsyreløsninger. Beisesyrer har også passiverende effekt. Vanlige referanser er ASTM A380 (rengjøring, beising, passivering) og ASTM A967 (passiveringsbehandlinger og verifikasjon).</p>
<h2>Jernforurensning</h2>
<p>De fleste rustflekker som senere dukker opp på rustfritt stål kommer ikke fra materialet, men fra <strong>jern utenfra</strong>: børster, skiver, skrustikker eller gaffeltrucktinder som også brukes til karbonstål, eller slipestøv i nærheten. Separate verktøy og arbeidsområde, og håndtering uten kontakt med karbonstål, forebygger dette. Ferroksyltest er en metode for å påvise jernforurensning.</p>
<h2>Aksept og kontroll</h2>
<ul>
<li><strong>Visuelt:</strong> akseptabelt nivå av anløpsfarger angis i spesifikasjonen; noen bransjer bruker fargeskalaer (f.eks. AWS D18.2).</li>
<li><strong>Jern:</strong> ferroksyl- eller vanntest.</li>
<li><strong>Passivitet:</strong> verifikasjonstester etter ASTM A967 ved behov.</li>
<li><strong>Dokumentasjon:</strong> kjemikalie, tid, skylling og testresultater i kvalitetsdokumentasjonen.</li>
</ul>
<h2>Sikkerhet og miljø</h2>
<p>Beisekjemikalier, særlig flussyre, innebærer alvorlig helserisiko. Egnet verneutstyr, ventilasjon, førstehjelpsberedskap og nøytralisering av avløpsvann er påkrevd. Store deler og serier beises derfor i utstyrte anlegg.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> på rustfritt bruker vi rotgass og arbeider med separate verktøy og rutiner for å unngå jernforurensning. Fjerning av anløpsfarger og behovet for beising og passivering avtales i tilbudet, med metode, etter spesifikasjonen. <a href="../kaynak-yontemleri.html">Våre sveisemetoder →</a></p></div>
`,
    faq: [
      ['Hvordan fjernes anløpsfarger fra rustfrie sveiser?', 'Med mekanisk rengjøring (rustfri børste, jernfrie slipemidler), beisepasta eller beisebad, eller elektrokjemisk rengjøring. Ved kritisk bruk følges beising av passivering.'],
      ['Forskjell på beising og passivering?', 'Beising fjerner oksidet og det kromfattige laget; passivering lar det beskyttende kromoksidet dannes på nytt på den rene overflaten.'],
      ['Hvorfor får rustfritt stål rustflekker?', 'Oftest på grunn av jern fra karbonstålverktøy eller slipestøv. Separate verktøy og arbeidsområder forhindrer dette.'],
      ['Hvorfor trengs rotgass?', 'For at innsiden av sveisen ikke skal reagere med luft og sukre, en porøs oksidasjon som er utsatt for korrosjon.']
    ],
    cta_h3: 'Korrosjonsbestandig sveising av rustfritt stål',
    cta_p: 'Send tegning og overflatekrav for rustfritt; vi gir tilbud med sveise- og rengjøringsplan.',
    cta_btn: 'Be om tilbud →'
  }
};
