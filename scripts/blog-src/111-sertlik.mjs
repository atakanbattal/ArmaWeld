export default {
  order: 111,
  slug: 'kaynak-sertlik-olcumu-hv10',
  key: 'p111_hardness',
  date: '2026-09-22',
  keywords: 'kaynak sertlik ölçümü, HV10 sertlik, ISO 9015-1, ısıdan etkilenen bölge sertlik, 350 HV sınırı, NACE MR0175 sertlik, taşınabilir sertlik ölçümü kaynak, weld hardness test HV10, Härteprüfung Schweißnaht HV10, dureza soldadura HV10, dureté soudure HV10',
  related: ['on-isitma-hesaplama', 'kaynakta-hidrojen-kontrolu-soguk-catlak', 's960ql-kaynak-parametreleri', 'wpqr-nedir'],
  tr: {
    title: 'Kaynakta Sertlik Ölçümü (HV10): Neden Yapılır, Sınırlar ve Raporu Okuma',
    meta: 'Kaynaklı birleştirmede Vickers HV10 sertlik ölçümü: ISO 9015-1 ölçüm hattı, ısıdan etkilenen bölgede sertleşme, ISO 15614-1 sınırları, ekşi servis için sertlik kısıtları, taşınabilir ölçüm ve alıcının raporda kontrol etmesi gerekenler.',
    og: 'Kaynakta sertlik ölçümü HV10',
    tag: 'Teknik Rehber · Kalite',
    h1: 'Kaynakta Sertlik Ölçümü (HV10): Neden Yapılır, Sınırlar ve Raporu Okuma',
    crumb: 'Sertlik ölçümü',
    read: '6 dk okuma',
    body: `
<p>Kaynak sırasında hızlı soğuyan ısıdan etkilenen bölge (ITAB), ana malzemeden çok daha sert ve kırılgan olabilir. Aşırı sertlik soğuk çatlak, gevrek kırılma ve bazı ortamlarda gerilmeli korozyon riskini artırır. Sertlik ölçümü, kaynak prosedürünün bu riski kontrol altında tuttuğunu göstermenin en pratik yoludur.</p>
<h2>Ölçüm Nasıl Yapılır?</h2>
<p>Makro kesit üzerinde Vickers yöntemiyle, genellikle 10 kgf yükle (HV10) ölçülür. ISO 9015-1, ölçüm hatlarını tarif eder: yüzeyin hemen altında bir veya iki hat boyunca ana malzeme, ITAB ve kaynak metalinden sırayla noktalar alınır. Ölçümler, ITAB'ın en sert olan ergime sınırına yakın kısmını mutlaka yakalamalıdır.</p>
<h2>Sınırlar</h2>
<ul>
<li><strong>Prosedür onayı:</strong> ISO 15614-1, sertlik testinin gerekli olduğu durumlarda malzeme grubuna göre azami değerler verir; yaygın yapı çelikleri için ısıl işlemsiz kaynakta 380 HV10 gibi bir üst sınır uygulanır.</li>
<li><strong>Ekşi servis ve hidrojenli ortamlar:</strong> Petrol ve gaz uygulamalarında genellikle çok daha düşük sınırlar, ör. 248–250 HV10 civarı, şartnameyle istenir.</li>
<li><strong>Müşteri şartnamesi:</strong> Bazı makine ve vinç üreticileri kendi sınırlarını koyar; teklif öncesi netleştirilmelidir.</li>
</ul>
<h2>Sertliği Ne Belirler?</h2>
<p>Karbon eşdeğeri, plaka kalınlığı, ısı girdisi ve ön ısıtma. Kalın ve yüksek karbon eşdeğerli malzemede düşük ısı girdisi ve ön ısıtmasız kaynak ITAB'ı sertleştirir. Çözüm, doğru <a href="on-isitma-hesaplama.html">ön ısıtma</a>, yeterli ısı girdisi, temper pasoları ve gerektiğinde <a href="kaynak-sonrasi-isil-islem-pwht.html">kaynak sonrası ısıl işlemdir</a>.</p>
<h2>Taşınabilir Sertlik Ölçümü</h2>
<p>Bitmiş parçada, kesit almadan, taşınabilir cihazlarla (ör. UCI veya geri sıçrama yöntemi) yüzey sertliği kontrol edilebilir. Hızlı bir tarama sağlar ama laboratuvardaki HV10 kesit ölçümünün yerini tutmaz; yüzey hazırlığı ve kalibrasyon sonuçları belirgin biçimde etkiler.</p>
<h2>Raporda Kontrol Edilecekler</h2>
<ul>
<li>Yük (HV10 mu, HV5 mi) ve ölçüm hatlarının kesit üzerindeki çizimi.</li>
<li>Her bölgedeki en yüksek değer ve uygulanan sınır.</li>
<li>Ölçümün hangi WPQR veya test plakasına ait olduğu.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Sertlik kritik işlerde ön ısıtma ve ısı girdisini WPS'e göre kayıt altına alıyoruz. Laboratuvar sertlik ölçümleri akredite laboratuvarlarda yapılır; numune ve süreci biz koordine ediyoruz. <a href="../ndt.html">Muayene ve kalite →</a></p></div>
`,
    faq: [
      ['HV10 ne demek?', '10 kgf yükle yapılan Vickers sertlik ölçümüdür.'],
      ['En sert bölge neresidir?', 'Genellikle ergime sınırına yakın ısıdan etkilenen bölge.'],
      ['Sertlik nasıl düşürülür?', 'Ön ısıtma, yeterli ısı girdisi, temper pasoları veya ısıl işlemle.'],
      ['Taşınabilir ölçüm yeterli mi?', 'Tarama içindir; laboratuvar kesit ölçümünün yerini tutmaz.']
    ],
    cta_h3: 'Sertlik sınırı olan bir işiniz mi var?',
    cta_p: 'Malzeme ve şartnameyi gönderin; prosedürü ve teklifi birlikte netleştirelim.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Weld Hardness Testing (HV10): Why It Is Done, Limits and Reading the Report',
    meta: 'Vickers HV10 hardness testing of welded joints: ISO 9015-1 traverses, hardening in the heat-affected zone, ISO 15614-1 limits, sour-service restrictions, portable testing and what a buyer should check in the report.',
    og: 'Weld hardness testing HV10',
    tag: 'Technical Guide · Quality',
    h1: 'Weld Hardness Testing (HV10): Why It Is Done, Limits and Reading the Report',
    crumb: 'Hardness testing',
    read: '6 min read',
    body: `
<p>The heat-affected zone (HAZ), cooling quickly during welding, can become much harder and more brittle than the parent metal. Excessive hardness raises the risk of cold cracking, brittle fracture and, in some environments, stress corrosion. Hardness testing is the most practical way to show that a welding procedure keeps this risk under control.</p>
<h2>How It Is Measured</h2>
<p>Vickers hardness is measured on a macro section, usually with a 10 kgf load (HV10). ISO 9015-1 defines the traverses: along one or two lines just below the surface, points are taken through parent metal, HAZ and weld metal. The measurements must catch the hardest part of the HAZ close to the fusion line.</p>
<h2>Limits</h2>
<ul>
<li><strong>Procedure qualification:</strong> where hardness testing is required, ISO 15614-1 gives maximum values per material group; for common structural steels without heat treatment an upper limit such as 380 HV10 applies.</li>
<li><strong>Sour service and hydrogen environments:</strong> oil and gas specifications usually require far lower limits, e.g. around 248–250 HV10.</li>
<li><strong>Customer specification:</strong> some machine and crane OEMs set their own limits; clarify before quoting.</li>
</ul>
<h2>What Drives Hardness?</h2>
<p>Carbon equivalent, plate thickness, heat input and preheat. Thick, high-CE material welded with low heat input and no preheat produces a hard HAZ. The remedies are correct <a href="on-isitma-hesaplama.html">preheat</a>, adequate heat input, temper beads and, where needed, <a href="kaynak-sonrasi-isil-islem-pwht.html">post-weld heat treatment</a>.</p>
<h2>Portable Hardness Testing</h2>
<p>On a finished part, surface hardness can be checked without sectioning using portable devices (e.g. UCI or rebound). It is a quick screen but does not replace a laboratory HV10 traverse; surface preparation and calibration strongly affect the results.</p>
<h2>What to Check in the Report</h2>
<ul>
<li>Load (HV10 or HV5) and a sketch of the traverses on the section.</li>
<li>The highest value in each zone and the limit applied.</li>
<li>Which WPQR or test coupon the measurement belongs to.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> on hardness-critical work we record preheat and heat input against the WPS. Laboratory hardness tests are performed by accredited laboratories; we coordinate specimens and the process. <a href="../ndt.html">Inspection and quality →</a></p></div>
`,
    faq: [
      ['What does HV10 mean?', 'Vickers hardness measured with a 10 kgf load.'],
      ['Where is the hardest zone?', 'Usually the HAZ next to the fusion line.'],
      ['How is hardness reduced?', 'With preheat, sufficient heat input, temper beads or heat treatment.'],
      ['Is portable testing enough?', 'It is a screen; it does not replace a laboratory traverse.']
    ],
    cta_h3: 'Do you have a job with a hardness limit?',
    cta_p: 'Send material and specification; we will settle procedure and quote together.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Härteprüfung an Schweißnähten (HV10): Zweck, Grenzwerte und Bericht',
    meta: 'Vickers-Härteprüfung HV10 an Schweißverbindungen: Messreihen nach ISO 9015-1, Aufhärtung in der WEZ, Grenzwerte nach ISO 15614-1, Einschränkungen für Sauergas, mobile Härteprüfung und worauf Einkäufer im Bericht achten.',
    og: 'Härteprüfung Schweißnaht HV10',
    tag: 'Technischer Leitfaden · Qualität',
    h1: 'Härteprüfung an Schweißnähten (HV10): Zweck, Grenzwerte und Bericht',
    crumb: 'Härteprüfung',
    read: '6 Min. Lesezeit',
    body: `
<p>Die beim Schweißen schnell abkühlende Wärmeeinflusszone (WEZ) kann deutlich härter und spröder werden als der Grundwerkstoff. Zu hohe Härte erhöht das Risiko von Kaltrissen, Sprödbruch und in manchen Medien Spannungsrisskorrosion. Die Härteprüfung ist der praktischste Nachweis, dass ein Schweißverfahren dieses Risiko beherrscht.</p>
<h2>Wie wird gemessen?</h2>
<p>Am Makroschliff nach Vickers, meist mit 10 kgf (HV10). ISO 9015-1 legt die Messreihen fest: entlang einer oder zwei Linien knapp unter der Oberfläche werden Punkte in Grundwerkstoff, WEZ und Schweißgut gesetzt. Die Messung muss den härtesten Teil der WEZ nahe der Schmelzlinie erfassen.</p>
<h2>Grenzwerte</h2>
<ul>
<li><strong>Verfahrensprüfung:</strong> Wo Härteprüfung gefordert ist, nennt ISO 15614-1 Höchstwerte je Werkstoffgruppe; für übliche Baustähle ohne Wärmebehandlung gilt etwa 380 HV10 als Obergrenze.</li>
<li><strong>Sauergas und Wasserstoffmedien:</strong> Öl- und Gasspezifikationen verlangen meist deutlich niedrigere Werte, z. B. um 248–250 HV10.</li>
<li><strong>Kundenspezifikation:</strong> Manche Maschinen- und Kranhersteller setzen eigene Grenzen; vor dem Angebot klären.</li>
</ul>
<h2>Was bestimmt die Härte?</h2>
<p>Kohlenstoffäquivalent, Blechdicke, Wärmeeinbringung und Vorwärmung. Dickes Material mit hohem CE, geschweißt mit geringer Streckenenergie und ohne Vorwärmen, ergibt eine harte WEZ. Abhilfe: richtiges <a href="on-isitma-hesaplama.html">Vorwärmen</a>, ausreichende Wärmeeinbringung, Vergütungslagen und bei Bedarf <a href="kaynak-sonrasi-isil-islem-pwht.html">Wärmebehandlung nach dem Schweißen</a>.</p>
<h2>Mobile Härteprüfung</h2>
<p>Am fertigen Teil lässt sich die Oberflächenhärte ohne Schliff mit mobilen Geräten (z. B. UCI oder Rückprall) prüfen. Das ist ein schnelles Screening, ersetzt aber keine HV10-Messreihe im Labor; Oberflächenvorbereitung und Kalibrierung beeinflussen das Ergebnis stark.</p>
<h2>Worauf im Bericht achten?</h2>
<ul>
<li>Prüflast (HV10 oder HV5) und Skizze der Messreihen.</li>
<li>Höchstwert je Zone und angewandter Grenzwert.</li>
<li>Zu welchem WPQR oder Prüfstück die Messung gehört.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei härtekritischen Aufträgen dokumentieren wir Vorwärmung und Wärmeeinbringung gemäß WPS. Labor-Härteprüfungen führen akkreditierte Labore durch; Proben und Ablauf koordinieren wir. <a href="../ndt.html">Prüfung und Qualität →</a></p></div>
`,
    faq: [
      ['Was bedeutet HV10?', 'Vickers-Härte, gemessen mit 10 kgf Prüflast.'],
      ['Wo ist die härteste Zone?', 'Meist in der WEZ direkt neben der Schmelzlinie.'],
      ['Wie senkt man die Härte?', 'Durch Vorwärmen, ausreichende Wärmeeinbringung, Vergütungslagen oder Wärmebehandlung.'],
      ['Reicht mobile Prüfung?', 'Sie ist ein Screening und ersetzt keine Labormessreihe.']
    ],
    cta_h3: 'Auftrag mit Härtegrenzwert?',
    cta_p: 'Senden Sie Werkstoff und Spezifikation; wir klären Verfahren und Angebot gemeinsam.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Medición de dureza en soldadura (HV10): por qué, límites y cómo leer el informe',
    meta: 'Ensayo de dureza Vickers HV10 en uniones soldadas: barridos según ISO 9015-1, endurecimiento en la ZAT, límites de ISO 15614-1, restricciones para servicio ácido, medición portátil y qué revisar en el informe.',
    og: 'Dureza en soldadura HV10',
    tag: 'Guía técnica · Calidad',
    h1: 'Medición de dureza en soldadura (HV10): por qué, límites y cómo leer el informe',
    crumb: 'Medición de dureza',
    read: '6 min de lectura',
    body: `
<p>La zona afectada térmicamente (ZAT), que se enfría rápido al soldar, puede volverse mucho más dura y frágil que el metal base. La dureza excesiva aumenta el riesgo de fisuración en frío, rotura frágil y, en ciertos medios, corrosión bajo tensión. Medir la dureza es la forma más práctica de demostrar que el procedimiento controla ese riesgo.</p>
<h2>Cómo se mide</h2>
<p>Dureza Vickers sobre una macrografía, normalmente con 10 kgf (HV10). ISO 9015-1 define los barridos: a lo largo de una o dos líneas justo bajo la superficie se toman puntos en metal base, ZAT y metal de soldadura. Deben capturar la parte más dura de la ZAT junto a la línea de fusión.</p>
<h2>Límites</h2>
<ul>
<li><strong>Cualificación de procedimiento:</strong> cuando se exige, ISO 15614-1 da máximos por grupo de material; para aceros estructurales comunes sin tratamiento térmico se aplica un tope como 380 HV10.</li>
<li><strong>Servicio ácido e hidrógeno:</strong> las especificaciones de petróleo y gas suelen exigir valores mucho menores, p. ej. en torno a 248–250 HV10.</li>
<li><strong>Especificación del cliente:</strong> algunos fabricantes de máquinas y grúas fijan sus propios límites; aclararlo antes de ofertar.</li>
</ul>
<h2>¿Qué determina la dureza?</h2>
<p>Carbono equivalente, espesor, aporte térmico y precalentamiento. Material grueso de alto CE soldado con poco aporte y sin precalentar da una ZAT dura. Remedios: <a href="on-isitma-hesaplama.html">precalentamiento</a> correcto, aporte suficiente, pasadas de revenido y, si hace falta, <a href="kaynak-sonrasi-isil-islem-pwht.html">tratamiento térmico postsoldadura</a>.</p>
<h2>Dureza portátil</h2>
<p>En la pieza terminada puede comprobarse la dureza superficial sin cortar, con equipos portátiles (UCI o rebote). Es un cribado rápido pero no sustituye un barrido HV10 en laboratorio; preparación superficial y calibración influyen mucho.</p>
<h2>Qué revisar en el informe</h2>
<ul>
<li>Carga (HV10 o HV5) y croquis de los barridos.</li>
<li>Valor máximo por zona y límite aplicado.</li>
<li>A qué WPQR o probeta corresponde la medición.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> en trabajos críticos por dureza registramos precalentamiento y aporte térmico según la WPS. Los ensayos de dureza en laboratorio los realizan laboratorios acreditados; coordinamos probetas y proceso. <a href="../ndt.html">Inspección y calidad →</a></p></div>
`,
    faq: [
      ['¿Qué significa HV10?', 'Dureza Vickers medida con carga de 10 kgf.'],
      ['¿Dónde está la zona más dura?', 'Normalmente en la ZAT junto a la línea de fusión.'],
      ['¿Cómo se reduce la dureza?', 'Con precalentamiento, aporte suficiente, pasadas de revenido o tratamiento térmico.'],
      ['¿Basta la medición portátil?', 'Es un cribado; no sustituye el barrido de laboratorio.']
    ],
    cta_h3: '¿Trabajo con límite de dureza?',
    cta_p: 'Envíe material y especificación; definimos procedimiento y oferta juntos.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Mesure de dureté des soudures (HV10) : pourquoi, limites et lecture du rapport',
    meta: 'Essai de dureté Vickers HV10 sur assemblages soudés : filiations selon ISO 9015-1, durcissement en ZAT, limites ISO 15614-1, restrictions pour service H2S, dureté portable et points à vérifier dans le rapport.',
    og: 'Dureté des soudures HV10',
    tag: 'Guide technique · Qualité',
    h1: 'Mesure de dureté des soudures (HV10) : pourquoi, limites et lecture du rapport',
    crumb: 'Mesure de dureté',
    read: '6 min de lecture',
    body: `
<p>La zone affectée thermiquement (ZAT), refroidie rapidement au soudage, peut devenir bien plus dure et fragile que le métal de base. Une dureté excessive accroît le risque de fissuration à froid, de rupture fragile et, dans certains milieux, de corrosion sous contrainte. La mesure de dureté est le moyen le plus pratique de montrer qu'un mode opératoire maîtrise ce risque.</p>
<h2>Comment mesure-t-on ?</h2>
<p>Dureté Vickers sur coupe macro, généralement sous 10 kgf (HV10). ISO 9015-1 définit les filiations : le long d'une ou deux lignes juste sous la surface, on pointe métal de base, ZAT et métal fondu. Les mesures doivent capter la partie la plus dure de la ZAT près de la ligne de fusion.</p>
<h2>Limites</h2>
<ul>
<li><strong>Qualification de mode opératoire :</strong> quand l'essai est requis, ISO 15614-1 donne des maxima par groupe de matériaux ; pour les aciers de construction courants sans traitement thermique, une limite comme 380 HV10 s'applique.</li>
<li><strong>Service H2S et hydrogène :</strong> les spécifications pétrole et gaz exigent souvent des valeurs bien plus basses, par ex. environ 248–250 HV10.</li>
<li><strong>Spécification client :</strong> certains constructeurs de machines et de grues fixent leurs propres limites ; à clarifier avant devis.</li>
</ul>
<h2>Qu'est-ce qui fait la dureté ?</h2>
<p>Carbone équivalent, épaisseur, énergie de soudage et préchauffage. Une tôle épaisse à CE élevé soudée avec peu d'énergie et sans préchauffage donne une ZAT dure. Remèdes : bon <a href="on-isitma-hesaplama.html">préchauffage</a>, énergie suffisante, passes de revenu et, si nécessaire, <a href="kaynak-sonrasi-isil-islem-pwht.html">traitement thermique après soudage</a>.</p>
<h2>Dureté portable</h2>
<p>Sur pièce finie, la dureté de surface peut être contrôlée sans découpe avec des appareils portables (UCI ou rebond). C'est un tri rapide, qui ne remplace pas une filiation HV10 en laboratoire ; préparation de surface et étalonnage pèsent beaucoup.</p>
<h2>Que vérifier dans le rapport ?</h2>
<ul>
<li>Charge (HV10 ou HV5) et croquis des filiations.</li>
<li>Valeur maximale par zone et limite appliquée.</li>
<li>À quel QMOS ou coupon la mesure se rapporte.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> sur les travaux critiques en dureté, nous enregistrons préchauffage et énergie de soudage selon le DMOS. Les essais de dureté en laboratoire sont réalisés par des laboratoires accrédités ; nous coordonnons éprouvettes et déroulement. <a href="../ndt.html">Contrôle et qualité →</a></p></div>
`,
    faq: [
      ['Que signifie HV10 ?', 'Dureté Vickers mesurée sous une charge de 10 kgf.'],
      ['Où est la zone la plus dure ?', 'En général dans la ZAT près de la ligne de fusion.'],
      ['Comment réduire la dureté ?', 'Préchauffage, énergie suffisante, passes de revenu ou traitement thermique.'],
      ['La mesure portable suffit-elle ?', 'C\'est un tri ; elle ne remplace pas une filiation en laboratoire.']
    ],
    cta_h3: 'Un travail avec limite de dureté ?',
    cta_p: 'Envoyez matériau et spécification ; fixons ensemble mode opératoire et devis.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Misura di durezza delle saldature (HV10): perché, limiti e lettura del rapporto',
    meta: 'Prova di durezza Vickers HV10 su giunti saldati: allineamenti ISO 9015-1, indurimento in ZTA, limiti ISO 15614-1, restrizioni per servizio acido, durometri portatili e cosa controllare nel rapporto.',
    og: 'Durezza delle saldature HV10',
    tag: 'Guida tecnica · Qualità',
    h1: 'Misura di durezza delle saldature (HV10): perché, limiti e lettura del rapporto',
    crumb: 'Misura di durezza',
    read: '6 min di lettura',
    body: `
<p>La zona termicamente alterata (ZTA), che si raffredda rapidamente durante la saldatura, può diventare molto più dura e fragile del materiale base. Una durezza eccessiva aumenta il rischio di cricche a freddo, rottura fragile e, in certi ambienti, tensocorrosione. La misura di durezza è il modo più pratico per dimostrare che il procedimento tiene sotto controllo questo rischio.</p>
<h2>Come si misura</h2>
<p>Durezza Vickers su sezione macro, di solito con 10 kgf (HV10). ISO 9015-1 definisce gli allineamenti: lungo una o due linee appena sotto la superficie si rilevano punti in materiale base, ZTA e metallo saldato. Le misure devono cogliere la parte più dura della ZTA vicino alla linea di fusione.</p>
<h2>Limiti</h2>
<ul>
<li><strong>Qualifica del procedimento:</strong> se la prova è richiesta, ISO 15614-1 fornisce valori massimi per gruppo di materiale; per i comuni acciai strutturali senza trattamento termico vale un limite come 380 HV10.</li>
<li><strong>Servizio acido e idrogeno:</strong> le specifiche oil &amp; gas chiedono di solito valori molto più bassi, ad es. attorno a 248–250 HV10.</li>
<li><strong>Specifica del cliente:</strong> alcuni costruttori di macchine e gru fissano limiti propri; chiarirli prima dell'offerta.</li>
</ul>
<h2>Cosa determina la durezza?</h2>
<p>Carbonio equivalente, spessore, apporto termico e preriscaldo. Materiale spesso ad alto CE saldato con poco apporto e senza preriscaldo dà una ZTA dura. Rimedi: <a href="on-isitma-hesaplama.html">preriscaldo</a> corretto, apporto sufficiente, passate di rinvenimento e, se necessario, <a href="kaynak-sonrasi-isil-islem-pwht.html">trattamento termico post-saldatura</a>.</p>
<h2>Durezza portatile</h2>
<p>Sul pezzo finito si può verificare la durezza superficiale senza sezionare, con strumenti portatili (UCI o rimbalzo). È uno screening rapido ma non sostituisce un allineamento HV10 in laboratorio; preparazione superficiale e taratura incidono molto.</p>
<h2>Cosa controllare nel rapporto</h2>
<ul>
<li>Carico (HV10 o HV5) e schizzo degli allineamenti.</li>
<li>Valore massimo per zona e limite applicato.</li>
<li>A quale WPQR o provino si riferisce la misura.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> nei lavori critici per durezza registriamo preriscaldo e apporto termico secondo la WPS. Le prove di durezza in laboratorio sono eseguite da laboratori accreditati; coordiniamo provini e processo. <a href="../ndt.html">Controlli e qualità →</a></p></div>
`,
    faq: [
      ['Cosa significa HV10?', 'Durezza Vickers misurata con carico di 10 kgf.'],
      ['Dov\'è la zona più dura?', 'Di solito nella ZTA vicino alla linea di fusione.'],
      ['Come si riduce la durezza?', 'Con preriscaldo, apporto sufficiente, passate di rinvenimento o trattamento termico.'],
      ['Basta la misura portatile?', 'È uno screening; non sostituisce l\'allineamento di laboratorio.']
    ],
    cta_h3: 'Lavoro con limite di durezza?',
    cta_p: 'Inviate materiale e specifica; definiamo insieme procedimento e offerta.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Hardheidsmeting van lassen (HV10): waarom, grenzen en het rapport lezen',
    meta: 'Vickers HV10-hardheidsmeting op lasverbindingen: meetlijnen volgens ISO 9015-1, opharding in de WBZ, grenzen volgens ISO 15614-1, beperkingen voor zuur gas, draagbare meting en wat een inkoper in het rapport controleert.',
    og: 'Hardheidsmeting lassen HV10',
    tag: 'Technische gids · Kwaliteit',
    h1: 'Hardheidsmeting van lassen (HV10): waarom, grenzen en het rapport lezen',
    crumb: 'Hardheidsmeting',
    read: '6 min lezen',
    body: `
<p>De warmte-beïnvloede zone (WBZ), die bij het lassen snel afkoelt, kan veel harder en brosser worden dan het basismateriaal. Te hoge hardheid vergroot het risico op koudscheuren, brosse breuk en in sommige media spanningscorrosie. Hardheidsmeting is de meest praktische manier om aan te tonen dat een lasprocedure dat risico beheerst.</p>
<h2>Hoe wordt gemeten?</h2>
<p>Vickers-hardheid op een macro, meestal met 10 kgf (HV10). ISO 9015-1 beschrijft de meetlijnen: langs één of twee lijnen net onder het oppervlak worden punten in basismateriaal, WBZ en lasmetaal gezet. De meting moet het hardste deel van de WBZ bij de smeltlijn vangen.</p>
<h2>Grenzen</h2>
<ul>
<li><strong>Procedurekwalificatie:</strong> waar hardheidsmeting vereist is, geeft ISO 15614-1 maxima per materiaalgroep; voor gangbaar constructiestaal zonder warmtebehandeling geldt een grens als 380 HV10.</li>
<li><strong>Zuur gas en waterstofmedia:</strong> olie- en gasspecificaties eisen meestal veel lagere waarden, bijv. rond 248–250 HV10.</li>
<li><strong>Klantspecificatie:</strong> sommige machine- en kraanbouwers stellen eigen grenzen; vóór de offerte afstemmen.</li>
</ul>
<h2>Wat bepaalt de hardheid?</h2>
<p>Koolstofequivalent, plaatdikte, warmte-inbreng en voorwarmen. Dik materiaal met hoge CE, gelast met weinig warmte-inbreng en zonder voorwarmen, geeft een harde WBZ. Oplossingen: juist <a href="on-isitma-hesaplama.html">voorwarmen</a>, voldoende warmte-inbreng, temperrupsen en zo nodig <a href="kaynak-sonrasi-isil-islem-pwht.html">gloeien na het lassen</a>.</p>
<h2>Draagbare hardheidsmeting</h2>
<p>Op een afgewerkt deel kan de oppervlaktehardheid zonder doorsnede gemeten worden met draagbare apparaten (UCI of terugslag). Dat is een snelle screening maar vervangt geen HV10-meetlijn in het lab; oppervlaktevoorbereiding en kalibratie beïnvloeden het resultaat sterk.</p>
<h2>Waar op letten in het rapport?</h2>
<ul>
<li>Belasting (HV10 of HV5) en schets van de meetlijnen.</li>
<li>Hoogste waarde per zone en toegepaste grens.</li>
<li>Bij welke WPQR of welk proefstuk de meting hoort.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij hardheidskritisch werk registreren we voorwarmen en warmte-inbreng volgens de WPS. Laboratoriumhardheidsmetingen worden door geaccrediteerde laboratoria uitgevoerd; wij coördineren proefstukken en verloop. <a href="../ndt.html">Inspectie en kwaliteit →</a></p></div>
`,
    faq: [
      ['Wat betekent HV10?', 'Vickers-hardheid gemeten met 10 kgf belasting.'],
      ['Waar is de hardste zone?', 'Meestal in de WBZ direct naast de smeltlijn.'],
      ['Hoe verlaag je de hardheid?', 'Met voorwarmen, voldoende warmte-inbreng, temperrupsen of warmtebehandeling.'],
      ['Volstaat draagbare meting?', 'Het is een screening; geen vervanging van een labmeetlijn.']
    ],
    cta_h3: 'Opdracht met hardheidsgrens?',
    cta_p: 'Stuur materiaal en specificatie; we stemmen procedure en offerte samen af.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Hardhetsmåling av sveiser (HV10): hvorfor, grenser og hvordan lese rapporten',
    meta: 'Vickers HV10-hardhetsmåling på sveiseforbindelser: målelinjer etter ISO 9015-1, oppherding i HAZ, grenser i ISO 15614-1, begrensninger for sur service, bærbar måling og hva innkjøper bør kontrollere i rapporten.',
    og: 'Hardhetsmåling sveis HV10',
    tag: 'Teknisk guide · Kvalitet',
    h1: 'Hardhetsmåling av sveiser (HV10): hvorfor, grenser og hvordan lese rapporten',
    crumb: 'Hardhetsmåling',
    read: '6 min lesing',
    body: `
<p>Den varmepåvirkede sonen (HAZ), som kjøles raskt under sveising, kan bli mye hardere og sprøere enn grunnmaterialet. For høy hardhet øker risikoen for kaldsprekker, sprøbrudd og i enkelte miljøer spenningskorrosjon. Hardhetsmåling er den mest praktiske måten å vise at en sveiseprosedyre holder denne risikoen under kontroll.</p>
<h2>Hvordan måles det?</h2>
<p>Vickers-hardhet på et makrosnitt, vanligvis med 10 kgf (HV10). ISO 9015-1 beskriver målelinjene: langs én eller to linjer like under overflaten tas punkter i grunnmateriale, HAZ og sveisemetall. Målingene må fange den hardeste delen av HAZ nær smeltelinjen.</p>
<h2>Grenser</h2>
<ul>
<li><strong>Prosedyrekvalifisering:</strong> der hardhetsmåling kreves, gir ISO 15614-1 maksverdier per materialgruppe; for vanlig konstruksjonsstål uten varmebehandling gjelder en grense som 380 HV10.</li>
<li><strong>Sur service og hydrogenmiljø:</strong> olje- og gasspesifikasjoner krever ofte langt lavere verdier, f.eks. rundt 248–250 HV10.</li>
<li><strong>Kundespesifikasjon:</strong> enkelte maskin- og kranprodusenter har egne grenser; avklar før tilbud.</li>
</ul>
<h2>Hva styrer hardheten?</h2>
<p>Karbonekvivalent, platetykkelse, varmetilførsel og forvarming. Tykt materiale med høy CE, sveiset med lav varmetilførsel og uten forvarming, gir hard HAZ. Tiltak: riktig <a href="on-isitma-hesaplama.html">forvarming</a>, tilstrekkelig varmetilførsel, anløpsstrenger og ved behov <a href="kaynak-sonrasi-isil-islem-pwht.html">varmebehandling etter sveising</a>.</p>
<h2>Bærbar hardhetsmåling</h2>
<p>På en ferdig del kan overflatehardheten kontrolleres uten snitt med bærbart utstyr (UCI eller tilbakeprell). Det gir rask screening, men erstatter ikke en HV10-målelinje i laboratoriet; overflatebehandling og kalibrering påvirker resultatet sterkt.</p>
<h2>Hva å se etter i rapporten</h2>
<ul>
<li>Last (HV10 eller HV5) og skisse av målelinjene.</li>
<li>Høyeste verdi per sone og grensen som er brukt.</li>
<li>Hvilken WPQR eller hvilket prøvestykke målingen tilhører.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> på hardhetskritiske jobber registrerer vi forvarming og varmetilførsel mot WPS. Laboratoriemålinger av hardhet utføres av akkrediterte laboratorier; vi koordinerer prøver og forløp. <a href="../ndt.html">Kontroll og kvalitet →</a></p></div>
`,
    faq: [
      ['Hva betyr HV10?', 'Vickers-hardhet målt med 10 kgf last.'],
      ['Hvor er den hardeste sonen?', 'Vanligvis i HAZ inntil smeltelinjen.'],
      ['Hvordan reduseres hardheten?', 'Med forvarming, nok varmetilførsel, anløpsstrenger eller varmebehandling.'],
      ['Holder bærbar måling?', 'Det er screening; erstatter ikke laboratoriemåling.']
    ],
    cta_h3: 'Jobb med hardhetsgrense?',
    cta_p: 'Send materiale og spesifikasjon; vi avklarer prosedyre og tilbud sammen.',
    cta_btn: 'Be om tilbud →'
  }
};
