export default {
  order: 110,
  slug: 'tahribatli-muayene-makro-egme-cekme-testi',
  key: 'p110_dt',
  date: '2026-09-16',
  keywords: 'tahribatlı muayene kaynak, makro muayene kaynak, eğme testi kaynak, çekme testi kaynak, ISO 15614-1 testleri, ISO 17639 makro, ISO 5173 eğme, ISO 4136 çekme, destructive testing welds, Makroschliff Biegeprobe, ensayo destructivo soldadura, essai destructif soudure',
  related: ['wpqr-nedir', 'kaynakci-sertifikasi-en-iso-9606-1', 'ndt-tahribatsiz-muayene-yontemleri', 'kaynak-muayene-raporu-nasil-okunur'],
  tr: {
    title: 'Kaynakta Tahribatlı Muayene: Makro, Eğme ve Çekme Testleri Ne Anlatır?',
    meta: 'Kaynak prosedürü (WPQR) ve kaynakçı onayında kullanılan tahribatlı testler: makro muayene (ISO 17639), eğme testi (ISO 5173), enine çekme testi (ISO 4136), kırma testi ve üretim test plakası. Alıcı raporda neye bakmalı?',
    og: 'Kaynakta tahribatlı muayene: makro, eğme, çekme',
    tag: 'Teknik Rehber · Kalite',
    h1: 'Kaynakta Tahribatlı Muayene: Makro, Eğme ve Çekme Testleri Ne Anlatır?',
    crumb: 'Tahribatlı muayene',
    read: '7 dk okuma',
    body: `
<p>NDT parçayı bozmadan kontrol eder; tahribatlı muayene ise numuneyi keserek, büküp kırarak kaynağın gerçek davranışını gösterir. Seri parçalar tahribatlı teste girmez; bu testler, kaynak prosedürünün (<a href="wpqr-nedir.html">WPQR</a>) ve kaynakçının (<a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>) onayında ve gerektiğinde üretim test plakalarında yapılır. Tedarikçiden aldığınız WPQR ve sertifikaların arkasında bu testler vardır.</p>
<h2>Makro Muayene (ISO 17639)</h2>
<p>Kaynak kesitinden alınan numune taşlanır, parlatılır ve dağlanır. Göz veya düşük büyütme ile şunlar görülür: nüfuziyet derinliği, ergime sınırı, paso dizilimi, köşe kaynağında gerçek a-ölçüsü ve bacak boyları, yetersiz ergime, gözenek ve çatlak. Köşe kaynaklarında a-ölçüsünün dışarıdan ölçülemeyen kök nüfuziyetini görmenin en doğrudan yoludur. Bu yüzden ilk parça onayında veya seri başlangıcında makro kesit istemek yaygındır.</p>
<h2>Eğme Testi (ISO 5173)</h2>
<p>Alın kaynağından alınan şerit numune, belirlenen çapta bir mandrel etrafında genellikle 180° bükülür. Yüz, kök veya yan eğme uygulanır. Bükülen yüzeyde belirli boyutun üzerinde açık hata çıkmamalıdır. Test, ergime hatası ve süneklik sorunlarını ortaya çıkarır; kaynakçı ve prosedür onayında temel testtir.</p>
<h2>Enine Çekme Testi (ISO 4136)</h2>
<p>Kaynak dikişine dik alınan numune kopana kadar çekilir. Çekme dayanımının ana malzeme için belirtilen minimum değerin altında kalmaması beklenir; kopmanın yeri de not edilir. Tüm kaynak metali çekme testi ise ayrıca akma ve uzama değerlerini verir.</p>
<h2>Diğer Tahribatlı Testler</h2>
<ul>
<li><strong>Kırma testi (ISO 9017):</strong> Köşe veya alın kaynağı kırılarak kırık yüzey incelenir; kaynakçı sınavlarında sık kullanılır.</li>
<li><strong>Sertlik ölçümü:</strong> Isıdan etkilenen bölgede aşırı sertliği arar (bkz. <a href="kaynak-sertlik-olcumu-hv10.html">sertlik ölçümü</a>).</li>
<li><strong>Charpy darbe testi:</strong> Düşük sıcaklıkta tokluğu ölçer (bkz. <a href="charpy-darbe-testi-dusuk-sicaklik.html">Charpy testi</a>).</li>
</ul>
<h2>Üretim Test Plakası</h2>
<p>Basınçlı ekipman ve bazı yapısal işlerde, gerçek üretimle aynı koşullarda kaynatılan ek bir test plakası tahribatlı teste gönderilir. Şartnamede isteniyorsa bunun maliyeti ve takvimi teklifte yer almalıdır.</p>
<h2>Alıcı Raporda Neye Bakmalı?</h2>
<ul>
<li>Testleri yapan laboratuvar ve akreditasyon durumu.</li>
<li>Numunelerin hangi kaynaktan ve hangi WPS ile alındığı.</li>
<li>Kabul kriteri ve ölçülen değerler; yalnızca "uygun" yazması yeterli değildir.</li>
<li>Makro fotoğrafları ve gözetim yapan kuruluşun onayı.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Prosedür ve kaynakçı onaylarında tahribatlı testler akredite laboratuvarlarda yapılır; numune hazırlığını ve süreci biz koordine ediyoruz. Siparişe özel makro kesit veya üretim test plakası gerekiyorsa teklif aşamasında planlıyoruz. <a href="../ndt.html">Muayene ve kalite →</a></p></div>
`,
    faq: [
      ['Seri parçalar tahribatlı teste girer mi?', 'Hayır; testler prosedür ve kaynakçı onayında veya ayrı test plakalarında yapılır.'],
      ['Makro muayene neyi gösterir?', 'Nüfuziyeti, gerçek a-ölçüsünü, paso dizilimini ve iç hataları.'],
      ['Eğme testinde ne aranır?', 'Bükülen yüzeyde açılan ergime hatası veya çatlak.'],
      ['Testleri kim yapar?', 'Genellikle akredite bir laboratuvar, gözetim kuruluşu eşliğinde.']
    ],
    cta_h3: 'Testli kaynaklı imalat mı gerekiyor?',
    cta_p: 'Şartnamenizi ve test gereksinimlerinizi gönderin; planlamayı birlikte yapalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Destructive Testing of Welds: What Macro, Bend and Tensile Tests Tell You',
    meta: 'Destructive tests used in procedure (WPQR) and welder qualification: macro examination (ISO 17639), bend test (ISO 5173), transverse tensile test (ISO 4136), fracture test and production test coupons. What should a buyer look for in the report?',
    og: 'Destructive testing of welds',
    tag: 'Technical Guide · Quality',
    h1: 'Destructive Testing of Welds: What Macro, Bend and Tensile Tests Tell You',
    crumb: 'Destructive testing',
    read: '7 min read',
    body: `
<p>NDT checks a part without damaging it; destructive testing cuts, bends and breaks a specimen to show how the weld really behaves. Series parts are not destructively tested. These tests are carried out for procedure qualification (<a href="wpqr-nedir.html">WPQR</a>), welder qualification (<a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>) and, where required, on production test coupons. They stand behind every WPQR and certificate a supplier sends you.</p>
<h2>Macro Examination (ISO 17639)</h2>
<p>A cross-section of the weld is ground, polished and etched. With the naked eye or low magnification you see penetration depth, fusion line, bead sequence, the real throat and leg lengths of a fillet weld, lack of fusion, porosity and cracks. It is the most direct way to see root penetration that cannot be measured from outside, which is why macros are often requested at first article approval or series start.</p>
<h2>Bend Test (ISO 5173)</h2>
<p>A strip from a butt weld is bent, usually 180°, around a mandrel of defined diameter, as face, root or side bend. No open defects above a stated size may appear on the stretched surface. The test reveals lack of fusion and ductility problems and is a core test for welder and procedure approval.</p>
<h2>Transverse Tensile Test (ISO 4136)</h2>
<p>A specimen taken across the weld is pulled to fracture. Tensile strength must not fall below the specified minimum of the parent metal, and the fracture location is recorded. An all-weld-metal tensile test additionally gives yield and elongation values.</p>
<h2>Other Destructive Tests</h2>
<ul>
<li><strong>Fracture test (ISO 9017):</strong> a fillet or butt weld is broken and the fracture face examined; common in welder tests.</li>
<li><strong>Hardness test:</strong> looks for excessive hardness in the heat-affected zone (see <a href="kaynak-sertlik-olcumu-hv10.html">hardness testing</a>).</li>
<li><strong>Charpy impact test:</strong> measures toughness at low temperature (see <a href="charpy-darbe-testi-dusuk-sicaklik.html">Charpy test</a>).</li>
</ul>
<h2>Production Test Coupons</h2>
<p>For pressure equipment and some structural work, an extra coupon welded under the same conditions as production is sent for destructive testing. If the specification asks for it, cost and timing belong in the quote.</p>
<h2>What to Check in the Report</h2>
<ul>
<li>The laboratory and its accreditation status.</li>
<li>Which weld and WPS the specimens came from.</li>
<li>Acceptance criteria and measured values, not just "pass".</li>
<li>Macro photographs and the approval of the witnessing body.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> destructive tests for procedure and welder qualifications are performed by accredited laboratories; we coordinate specimen preparation and the process. If an order needs macro sections or production test coupons, we plan them at the quotation stage. <a href="../ndt.html">Inspection and quality →</a></p></div>
`,
    faq: [
      ['Are series parts destructively tested?', 'No; tests are done for procedure and welder qualification or on separate coupons.'],
      ['What does a macro show?', 'Penetration, real throat size, bead sequence and internal defects.'],
      ['What does a bend test look for?', 'Lack of fusion or cracks opening on the bent surface.'],
      ['Who performs the tests?', 'Usually an accredited laboratory, witnessed by a third party.']
    ],
    cta_h3: 'Need welded fabrication with testing?',
    cta_p: 'Send your specification and test requirements; we will plan it together.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Zerstörende Prüfung von Schweißnähten: Makroschliff, Biege- und Zugversuch',
    meta: 'Zerstörende Prüfungen bei Verfahrensprüfung (WPQR) und Schweißerprüfung: Makroschliff (ISO 17639), Biegeversuch (ISO 5173), Querzugversuch (ISO 4136), Bruchprüfung und Arbeitsprüfstücke. Worauf Einkäufer im Bericht achten sollten.',
    og: 'Zerstörende Prüfung von Schweißnähten',
    tag: 'Technischer Leitfaden · Qualität',
    h1: 'Zerstörende Prüfung von Schweißnähten: Makroschliff, Biege- und Zugversuch',
    crumb: 'Zerstörende Prüfung',
    read: '7 Min. Lesezeit',
    body: `
<p>ZfP prüft ein Teil, ohne es zu beschädigen; die zerstörende Prüfung schneidet, biegt und bricht eine Probe und zeigt so das tatsächliche Verhalten der Naht. Serienteile werden nicht zerstörend geprüft. Die Prüfungen finden bei der Verfahrensprüfung (<a href="wpqr-nedir.html">WPQR</a>), der Schweißerprüfung (<a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>) und bei Bedarf an Arbeitsprüfstücken statt. Sie stehen hinter jedem WPQR und Zertifikat Ihres Lieferanten.</p>
<h2>Makroschliff (ISO 17639)</h2>
<p>Ein Querschnitt der Naht wird geschliffen, poliert und geätzt. Mit bloßem Auge oder geringer Vergrößerung sieht man Einbrand, Schmelzlinie, Lagenaufbau, das tatsächliche a-Maß und die Schenkellängen einer Kehlnaht, Bindefehler, Poren und Risse. Es ist der direkteste Weg, den von außen nicht messbaren Wurzeleinbrand zu sehen; daher wird ein Makroschliff oft bei Erstmusterfreigabe oder Serienstart verlangt.</p>
<h2>Biegeversuch (ISO 5173)</h2>
<p>Ein Streifen aus einer Stumpfnaht wird um einen Dorn mit festgelegtem Durchmesser, meist um 180°, gebogen – als Decklagen-, Wurzel- oder Seitenbiegeprobe. Auf der gedehnten Oberfläche dürfen keine offenen Fehler über einer bestimmten Größe auftreten. Der Versuch deckt Bindefehler und Duktilitätsprobleme auf.</p>
<h2>Querzugversuch (ISO 4136)</h2>
<p>Eine quer zur Naht entnommene Probe wird bis zum Bruch gezogen. Die Zugfestigkeit darf das festgelegte Minimum des Grundwerkstoffs nicht unterschreiten; die Bruchlage wird dokumentiert. Ein Schweißgut-Zugversuch liefert zusätzlich Streckgrenze und Dehnung.</p>
<h2>Weitere zerstörende Prüfungen</h2>
<ul>
<li><strong>Bruchprüfung (ISO 9017):</strong> Kehl- oder Stumpfnaht wird gebrochen und die Bruchfläche betrachtet; häufig bei Schweißerprüfungen.</li>
<li><strong>Härteprüfung:</strong> sucht übermäßige Härte in der WEZ (siehe <a href="kaynak-sertlik-olcumu-hv10.html">Härteprüfung</a>).</li>
<li><strong>Kerbschlagbiegeversuch:</strong> misst die Zähigkeit bei tiefer Temperatur (siehe <a href="charpy-darbe-testi-dusuk-sicaklik.html">Charpy-Versuch</a>).</li>
</ul>
<h2>Arbeitsprüfstücke</h2>
<p>Bei Druckgeräten und manchen Stahlbauaufträgen wird ein zusätzliches, unter Fertigungsbedingungen geschweißtes Prüfstück zerstörend geprüft. Verlangt die Spezifikation das, gehören Kosten und Termin ins Angebot.</p>
<h2>Worauf im Bericht achten?</h2>
<ul>
<li>Prüflabor und Akkreditierungsstatus.</li>
<li>Aus welcher Naht und mit welcher WPS die Proben stammen.</li>
<li>Annahmekriterien und Messwerte, nicht nur „bestanden".</li>
<li>Makrofotos und Bestätigung der überwachenden Stelle.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Zerstörende Prüfungen für Verfahrens- und Schweißerprüfungen führen akkreditierte Labore durch; Probenvorbereitung und Ablauf koordinieren wir. Werden für einen Auftrag Makroschliffe oder Arbeitsprüfstücke benötigt, planen wir sie schon im Angebot. <a href="../ndt.html">Prüfung und Qualität →</a></p></div>
`,
    faq: [
      ['Werden Serienteile zerstörend geprüft?', 'Nein; geprüft wird bei Verfahrens- und Schweißerprüfung oder an separaten Prüfstücken.'],
      ['Was zeigt ein Makroschliff?', 'Einbrand, tatsächliches a-Maß, Lagenaufbau und innere Fehler.'],
      ['Was sucht der Biegeversuch?', 'Bindefehler oder Risse, die sich auf der gebogenen Fläche öffnen.'],
      ['Wer prüft?', 'In der Regel ein akkreditiertes Labor, überwacht durch eine Prüfstelle.']
    ],
    cta_h3: 'Schweißfertigung mit Prüfungen benötigt?',
    cta_p: 'Senden Sie Spezifikation und Prüfanforderungen; wir planen gemeinsam.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Ensayos destructivos de soldadura: qué dicen la macrografía, el doblado y la tracción',
    meta: 'Ensayos destructivos en la cualificación de procedimiento (WPQR) y de soldadores: macrografía (ISO 17639), doblado (ISO 5173), tracción transversal (ISO 4136), rotura y probetas de producción. Qué revisar en el informe.',
    og: 'Ensayos destructivos de soldadura',
    tag: 'Guía técnica · Calidad',
    h1: 'Ensayos destructivos de soldadura: qué dicen la macrografía, el doblado y la tracción',
    crumb: 'Ensayos destructivos',
    read: '7 min de lectura',
    body: `
<p>Los END revisan la pieza sin dañarla; el ensayo destructivo corta, dobla y rompe una probeta para mostrar el comportamiento real de la soldadura. Las piezas de serie no se ensayan destructivamente. Estos ensayos se realizan en la cualificación del procedimiento (<a href="wpqr-nedir.html">WPQR</a>), del soldador (<a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>) y, si se exige, en probetas de producción. Están detrás de cada WPQR y certificado que envía un proveedor.</p>
<h2>Macrografía (ISO 17639)</h2>
<p>Una sección de la soldadura se desbasta, pule y ataca. A simple vista o con poco aumento se ven penetración, línea de fusión, secuencia de pasadas, garganta real y catetos de un cordón en ángulo, falta de fusión, poros y grietas. Es la forma más directa de ver la penetración de raíz que no se mide desde fuera; por eso se pide a menudo en la aprobación de primera pieza.</p>
<h2>Doblado (ISO 5173)</h2>
<p>Una tira de una soldadura a tope se dobla, normalmente 180°, sobre un mandril de diámetro definido: de cara, de raíz o lateral. En la superficie estirada no deben aparecer defectos abiertos por encima de un tamaño dado. Revela faltas de fusión y problemas de ductilidad.</p>
<h2>Tracción transversal (ISO 4136)</h2>
<p>Una probeta tomada a través del cordón se tracciona hasta rotura. La resistencia no debe quedar por debajo del mínimo especificado del metal base y se anota la zona de rotura. La tracción de metal de aporte puro da además límite elástico y alargamiento.</p>
<h2>Otros ensayos destructivos</h2>
<ul>
<li><strong>Rotura (ISO 9017):</strong> se rompe un cordón y se examina la fractura; habitual en pruebas de soldador.</li>
<li><strong>Dureza:</strong> busca dureza excesiva en la ZAT (ver <a href="kaynak-sertlik-olcumu-hv10.html">medición de dureza</a>).</li>
<li><strong>Charpy:</strong> mide la tenacidad a baja temperatura (ver <a href="charpy-darbe-testi-dusuk-sicaklik.html">ensayo Charpy</a>).</li>
</ul>
<h2>Probetas de producción</h2>
<p>En equipos a presión y algunas estructuras se suelda una probeta adicional en las mismas condiciones que la producción y se ensaya. Si la especificación lo pide, su coste y plazo deben figurar en la oferta.</p>
<h2>Qué revisar en el informe</h2>
<ul>
<li>Laboratorio y estado de acreditación.</li>
<li>De qué soldadura y con qué WPS proceden las probetas.</li>
<li>Criterios de aceptación y valores medidos, no solo "apto".</li>
<li>Fotografías macro y aprobación del organismo que presenció.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> los ensayos destructivos de cualificación de procedimientos y soldadores los realizan laboratorios acreditados; coordinamos la preparación de probetas y el proceso. Si un pedido necesita macros o probetas de producción, lo planificamos en la oferta. <a href="../ndt.html">Inspección y calidad →</a></p></div>
`,
    faq: [
      ['¿Se ensayan destructivamente las piezas de serie?', 'No; se ensaya en la cualificación o en probetas aparte.'],
      ['¿Qué muestra una macrografía?', 'Penetración, garganta real, secuencia de pasadas y defectos internos.'],
      ['¿Qué busca el doblado?', 'Faltas de fusión o grietas que se abren en la superficie doblada.'],
      ['¿Quién realiza los ensayos?', 'Normalmente un laboratorio acreditado, con un organismo presente.']
    ],
    cta_h3: '¿Necesita fabricación soldada con ensayos?',
    cta_p: 'Envíe la especificación y los requisitos de ensayo; lo planificamos juntos.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Essais destructifs des soudures : ce que disent macrographie, pliage et traction',
    meta: 'Essais destructifs pour la qualification de mode opératoire (QMOS/WPQR) et de soudeurs : macrographie (ISO 17639), pliage (ISO 5173), traction transversale (ISO 4136), essai de texture et coupons de production. Que vérifier dans le rapport ?',
    og: 'Essais destructifs des soudures',
    tag: 'Guide technique · Qualité',
    h1: 'Essais destructifs des soudures : ce que disent macrographie, pliage et traction',
    crumb: 'Essais destructifs',
    read: '7 min de lecture',
    body: `
<p>Le CND contrôle une pièce sans l'endommager ; l'essai destructif découpe, plie et casse une éprouvette pour montrer le comportement réel de la soudure. Les pièces de série ne sont pas testées destructivement. Ces essais servent à la qualification du mode opératoire (<a href="wpqr-nedir.html">QMOS</a>), des soudeurs (<a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>) et, si exigé, aux coupons de production. Ils sont derrière chaque QMOS et certificat transmis par un fournisseur.</p>
<h2>Macrographie (ISO 17639)</h2>
<p>Une coupe de la soudure est meulée, polie et attaquée. À l'œil nu ou à faible grossissement, on voit la pénétration, la ligne de fusion, la séquence des passes, la gorge réelle et les jambes d'une soudure d'angle, les manques de fusion, porosités et fissures. C'est le moyen le plus direct de voir la pénétration à la racine, invisible de l'extérieur ; d'où les macros demandées à l'approbation de première pièce.</p>
<h2>Pliage (ISO 5173)</h2>
<p>Une bande issue d'une soudure bout à bout est pliée, généralement à 180°, autour d'un mandrin de diamètre défini : endroit, envers ou latéral. Aucun défaut ouvert au-delà d'une taille donnée ne doit apparaître. L'essai révèle les manques de fusion et la ductilité insuffisante.</p>
<h2>Traction transversale (ISO 4136)</h2>
<p>Une éprouvette prélevée en travers du cordon est tirée jusqu'à rupture. La résistance ne doit pas descendre sous le minimum spécifié du métal de base ; la zone de rupture est notée. La traction sur métal fondu donne aussi limite d'élasticité et allongement.</p>
<h2>Autres essais destructifs</h2>
<ul>
<li><strong>Essai de texture/rupture (ISO 9017) :</strong> le cordon est cassé et la cassure examinée ; courant pour les soudeurs.</li>
<li><strong>Dureté :</strong> recherche une dureté excessive en ZAT (voir <a href="kaynak-sertlik-olcumu-hv10.html">mesure de dureté</a>).</li>
<li><strong>Charpy :</strong> mesure la ténacité à basse température (voir <a href="charpy-darbe-testi-dusuk-sicaklik.html">essai Charpy</a>).</li>
</ul>
<h2>Coupons de production</h2>
<p>Pour les équipements sous pression et certains ouvrages, un coupon supplémentaire soudé dans les conditions de production est testé. Si la spécification l'exige, coût et délai doivent figurer dans le devis.</p>
<h2>Que vérifier dans le rapport ?</h2>
<ul>
<li>Le laboratoire et son accréditation.</li>
<li>De quelle soudure et de quel DMOS proviennent les éprouvettes.</li>
<li>Critères d'acceptation et valeurs mesurées, pas seulement « conforme ».</li>
<li>Photos macro et validation de l'organisme témoin.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> les essais destructifs de qualification des modes opératoires et des soudeurs sont réalisés par des laboratoires accrédités ; nous coordonnons la préparation des éprouvettes et le déroulement. Si une commande exige des macros ou des coupons de production, nous les planifions dès le devis. <a href="../ndt.html">Contrôle et qualité →</a></p></div>
`,
    faq: [
      ['Les pièces de série sont-elles testées destructivement ?', 'Non ; on teste en qualification ou sur des coupons séparés.'],
      ['Que montre une macrographie ?', 'Pénétration, gorge réelle, séquence des passes et défauts internes.'],
      ['Que recherche le pliage ?', 'Manques de fusion ou fissures qui s\'ouvrent sur la face pliée.'],
      ['Qui réalise les essais ?', 'En général un laboratoire accrédité, en présence d\'un organisme tiers.']
    ],
    cta_h3: 'Besoin de fabrication soudée avec essais ?',
    cta_p: 'Envoyez votre spécification et vos exigences d\'essai ; planifions ensemble.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Prove distruttive sulle saldature: cosa dicono macrografia, piegatura e trazione',
    meta: 'Prove distruttive nella qualifica di procedimento (WPQR) e dei saldatori: macrografia (ISO 17639), piegatura (ISO 5173), trazione trasversale (ISO 4136), prova di rottura e provini di produzione. Cosa controllare nel rapporto.',
    og: 'Prove distruttive sulle saldature',
    tag: 'Guida tecnica · Qualità',
    h1: 'Prove distruttive sulle saldature: cosa dicono macrografia, piegatura e trazione',
    crumb: 'Prove distruttive',
    read: '7 min di lettura',
    body: `
<p>I CND controllano il pezzo senza danneggiarlo; la prova distruttiva taglia, piega e rompe un provino per mostrare il vero comportamento della saldatura. I pezzi di serie non vengono provati distruttivamente. Queste prove si eseguono per la qualifica del procedimento (<a href="wpqr-nedir.html">WPQR</a>), dei saldatori (<a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>) e, se richiesto, su provini di produzione. Stanno dietro a ogni WPQR e certificato del fornitore.</p>
<h2>Macrografia (ISO 17639)</h2>
<p>Una sezione della saldatura viene levigata, lucidata e attaccata. A occhio nudo o a basso ingrandimento si vedono penetrazione, linea di fusione, sequenza delle passate, sezione di gola reale e lati di un cordone d'angolo, mancanze di fusione, porosità e cricche. È il modo più diretto per vedere la penetrazione al vertice, non misurabile dall'esterno; per questo si chiede spesso all'approvazione del primo pezzo.</p>
<h2>Piegatura (ISO 5173)</h2>
<p>Una striscia da una saldatura di testa viene piegata, di solito a 180°, attorno a un mandrino di diametro definito: al dritto, al rovescio o laterale. Sulla superficie tesa non devono comparire difetti aperti oltre una certa dimensione. Rivela mancanze di fusione e problemi di duttilità.</p>
<h2>Trazione trasversale (ISO 4136)</h2>
<p>Un provino prelevato trasversalmente al cordone viene tirato fino a rottura. La resistenza non deve scendere sotto il minimo specificato del materiale base; si annota la zona di rottura. La trazione su metallo d'apporto puro fornisce anche snervamento e allungamento.</p>
<h2>Altre prove distruttive</h2>
<ul>
<li><strong>Prova di rottura (ISO 9017):</strong> il cordone viene rotto e si esamina la frattura; comune negli esami dei saldatori.</li>
<li><strong>Durezza:</strong> cerca durezze eccessive in ZTA (vedi <a href="kaynak-sertlik-olcumu-hv10.html">misura di durezza</a>).</li>
<li><strong>Charpy:</strong> misura la tenacità a bassa temperatura (vedi <a href="charpy-darbe-testi-dusuk-sicaklik.html">prova Charpy</a>).</li>
</ul>
<h2>Provini di produzione</h2>
<p>Per apparecchi a pressione e alcune strutture si salda un provino aggiuntivo nelle stesse condizioni della produzione e lo si prova. Se la specifica lo richiede, costo e tempi vanno nell'offerta.</p>
<h2>Cosa controllare nel rapporto</h2>
<ul>
<li>Laboratorio e accreditamento.</li>
<li>Da quale saldatura e con quale WPS provengono i provini.</li>
<li>Criteri di accettazione e valori misurati, non solo "conforme".</li>
<li>Foto macro e approvazione dell'ente presente.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> le prove distruttive per la qualifica di procedimenti e saldatori sono eseguite da laboratori accreditati; coordiniamo la preparazione dei provini e il processo. Se un ordine richiede macrografie o provini di produzione, li pianifichiamo già in offerta. <a href="../ndt.html">Controlli e qualità →</a></p></div>
`,
    faq: [
      ['I pezzi di serie si provano distruttivamente?', 'No; si prova in qualifica o su provini separati.'],
      ['Cosa mostra una macrografia?', 'Penetrazione, gola reale, sequenza delle passate e difetti interni.'],
      ['Cosa cerca la piegatura?', 'Mancanze di fusione o cricche che si aprono sulla superficie piegata.'],
      ['Chi esegue le prove?', 'Di solito un laboratorio accreditato, alla presenza di un ente terzo.']
    ],
    cta_h3: 'Serve una carpenteria saldata con prove?',
    cta_p: 'Inviate specifica e requisiti di prova; pianifichiamo insieme.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Destructief onderzoek van lassen: wat macro-, buig- en trekproeven vertellen',
    meta: 'Destructieve beproevingen bij procedurekwalificatie (WPQR) en lasserskwalificatie: macro-onderzoek (ISO 17639), buigproef (ISO 5173), dwarstrekproef (ISO 4136), breukproef en productieproefstukken. Waar let een inkoper op in het rapport?',
    og: 'Destructief onderzoek van lassen',
    tag: 'Technische gids · Kwaliteit',
    h1: 'Destructief onderzoek van lassen: wat macro-, buig- en trekproeven vertellen',
    crumb: 'Destructief onderzoek',
    read: '7 min lezen',
    body: `
<p>NDO controleert een deel zonder het te beschadigen; destructief onderzoek zaagt, buigt en breekt een proefstuk en toont zo hoe de las zich echt gedraagt. Seriedelen worden niet destructief beproefd. Deze proeven horen bij de procedurekwalificatie (<a href="wpqr-nedir.html">WPQR</a>), de lasserskwalificatie (<a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>) en, indien vereist, productieproefstukken. Ze staan achter elk WPQR en certificaat van uw leverancier.</p>
<h2>Macro-onderzoek (ISO 17639)</h2>
<p>Een doorsnede van de las wordt geslepen, gepolijst en geëtst. Met het blote oog of lage vergroting ziet u inbranding, smeltlijn, laagopbouw, de werkelijke keelhoogte en beenlengtes van een hoeklas, bindingsfouten, porositeit en scheuren. Het is de meest directe manier om de van buiten onmeetbare wortelinbranding te zien; daarom wordt bij eerste-artikelgoedkeuring vaak een macro gevraagd.</p>
<h2>Buigproef (ISO 5173)</h2>
<p>Een strip uit een stomplas wordt, meestal 180°, om een doorn met vastgelegde diameter gebogen: kap-, wortel- of zijbuigproef. Op het gerekte oppervlak mogen geen open fouten boven een bepaalde grootte verschijnen. De proef legt bindingsfouten en ductiliteitsproblemen bloot.</p>
<h2>Dwarstrekproef (ISO 4136)</h2>
<p>Een proefstuk dwars over de las wordt tot breuk getrokken. De treksterkte mag niet onder het voorgeschreven minimum van het basismateriaal liggen; de breukplaats wordt vastgelegd. Een lasmetaaltrekproef geeft daarnaast vloeigrens en rek.</p>
<h2>Overige destructieve proeven</h2>
<ul>
<li><strong>Breukproef (ISO 9017):</strong> de las wordt gebroken en het breukvlak bekeken; gangbaar bij lassersexamens.</li>
<li><strong>Hardheidsmeting:</strong> zoekt te hoge hardheid in de WBZ (zie <a href="kaynak-sertlik-olcumu-hv10.html">hardheidsmeting</a>).</li>
<li><strong>Kerfslagproef:</strong> meet taaiheid bij lage temperatuur (zie <a href="charpy-darbe-testi-dusuk-sicaklik.html">Charpy-proef</a>).</li>
</ul>
<h2>Productieproefstukken</h2>
<p>Bij drukapparatuur en sommige constructies wordt een extra proefstuk onder productieomstandigheden gelast en beproefd. Vraagt de specificatie dat, dan horen kosten en planning in de offerte.</p>
<h2>Waar op letten in het rapport?</h2>
<ul>
<li>Laboratorium en accreditatiestatus.</li>
<li>Uit welke las en met welke WPS de proefstukken komen.</li>
<li>Acceptatiecriteria en gemeten waarden, niet alleen "goed".</li>
<li>Macrofoto's en goedkeuring van de toezichthoudende instantie.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> destructieve proeven voor procedure- en lasserskwalificaties worden door geaccrediteerde laboratoria uitgevoerd; wij coördineren de proefstukvoorbereiding en het verloop. Heeft een order macro's of productieproefstukken nodig, dan plannen we die al in de offerte. <a href="../ndt.html">Inspectie en kwaliteit →</a></p></div>
`,
    faq: [
      ['Worden seriedelen destructief beproefd?', 'Nee; beproefd wordt bij kwalificatie of op aparte proefstukken.'],
      ['Wat toont een macro?', 'Inbranding, werkelijke keelhoogte, laagopbouw en interne fouten.'],
      ['Waar zoekt de buigproef naar?', 'Bindingsfouten of scheuren die op het gebogen vlak opengaan.'],
      ['Wie voert de proeven uit?', 'Meestal een geaccrediteerd laboratorium, onder toezicht van een derde partij.']
    ],
    cta_h3: 'Laswerk met beproeving nodig?',
    cta_p: 'Stuur specificatie en beproevingseisen; we plannen het samen.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Destruktiv testing av sveiser: hva makro-, bøye- og strekkprøver forteller',
    meta: 'Destruktive prøver ved prosedyrekvalifisering (WPQR) og sveisersertifisering: makroundersøkelse (ISO 17639), bøyeprøve (ISO 5173), tverrstrekkprøve (ISO 4136), bruddprøve og produksjonsprøvestykker. Hva skal innkjøper se etter i rapporten?',
    og: 'Destruktiv testing av sveiser',
    tag: 'Teknisk guide · Kvalitet',
    h1: 'Destruktiv testing av sveiser: hva makro-, bøye- og strekkprøver forteller',
    crumb: 'Destruktiv testing',
    read: '7 min lesing',
    body: `
<p>NDT kontrollerer en del uten å skade den; destruktiv testing kutter, bøyer og brekker et prøvestykke for å vise hvordan sveisen faktisk oppfører seg. Seriedeler testes ikke destruktivt. Prøvene gjøres ved prosedyrekvalifisering (<a href="wpqr-nedir.html">WPQR</a>), sveisersertifisering (<a href="kaynakci-sertifikasi-en-iso-9606-1.html">ISO 9606-1</a>) og ved behov på produksjonsprøvestykker. De ligger bak hver WPQR og hvert sertifikat leverandøren sender.</p>
<h2>Makroundersøkelse (ISO 17639)</h2>
<p>Et tverrsnitt av sveisen slipes, poleres og etses. Med blotte øyet eller lav forstørrelse ser man innbrenning, smeltelinje, strengrekkefølge, faktisk a-mål og ben på en kilsveis, bindingsfeil, porer og sprekker. Det er den mest direkte måten å se rotinnbrenning som ikke kan måles utenfra; derfor bes det ofte om makro ved førsteartikkelgodkjenning.</p>
<h2>Bøyeprøve (ISO 5173)</h2>
<p>En stripe fra en buttsveis bøyes, vanligvis 180°, rundt en dor med fastsatt diameter: topp-, rot- eller sidebøy. På den strakte overflaten skal det ikke oppstå åpne feil over en angitt størrelse. Prøven avslører bindingsfeil og dårlig duktilitet.</p>
<h2>Tverrstrekkprøve (ISO 4136)</h2>
<p>Et prøvestykke tatt på tvers av sveisen trekkes til brudd. Strekkfastheten skal ikke være under spesifisert minimum for grunnmaterialet, og bruddstedet registreres. Strekkprøve av rent sveisemetall gir i tillegg flytegrense og forlengelse.</p>
<h2>Andre destruktive prøver</h2>
<ul>
<li><strong>Bruddprøve (ISO 9017):</strong> sveisen brekkes og bruddflaten undersøkes; vanlig ved sveiserprøver.</li>
<li><strong>Hardhetsmåling:</strong> ser etter for høy hardhet i HAZ (se <a href="kaynak-sertlik-olcumu-hv10.html">hardhetsmåling</a>).</li>
<li><strong>Charpy:</strong> måler seighet ved lav temperatur (se <a href="charpy-darbe-testi-dusuk-sicaklik.html">Charpy-prøve</a>).</li>
</ul>
<h2>Produksjonsprøvestykker</h2>
<p>For trykkutstyr og noen konstruksjoner sveises et ekstra prøvestykke under samme forhold som produksjonen og testes. Krever spesifikasjonen det, skal kostnad og tid med i tilbudet.</p>
<h2>Hva å se etter i rapporten</h2>
<ul>
<li>Laboratoriet og akkrediteringsstatus.</li>
<li>Hvilken sveis og WPS prøvene kommer fra.</li>
<li>Akseptkriterier og målte verdier, ikke bare «godkjent».</li>
<li>Makrobilder og godkjenning fra kontrollorganet som overvar.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> destruktive prøver for prosedyre- og sveiserkvalifisering utføres av akkrediterte laboratorier; vi koordinerer prøveforberedelse og forløp. Trenger en ordre makroer eller produksjonsprøvestykker, planlegger vi dem allerede i tilbudet. <a href="../ndt.html">Kontroll og kvalitet →</a></p></div>
`,
    faq: [
      ['Testes seriedeler destruktivt?', 'Nei; det testes ved kvalifisering eller på egne prøvestykker.'],
      ['Hva viser en makro?', 'Innbrenning, faktisk a-mål, strengrekkefølge og indre feil.'],
      ['Hva ser bøyeprøven etter?', 'Bindingsfeil eller sprekker som åpner seg på den bøyde flaten.'],
      ['Hvem utfører prøvene?', 'Vanligvis et akkreditert laboratorium, overvåket av tredjepart.']
    ],
    cta_h3: 'Trenger du sveiset produksjon med testing?',
    cta_p: 'Send spesifikasjon og testkrav; vi planlegger sammen.',
    cta_btn: 'Be om tilbud →'
  }
};
