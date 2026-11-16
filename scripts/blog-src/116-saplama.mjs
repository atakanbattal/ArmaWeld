export default {
  order: 116,
  slug: 'saplama-kaynagi-kaynak-somunu-kaynakli-parca',
  key: 'p116_stud',
  date: '2026-10-23',
  keywords: 'saplama kaynağı, stud kaynağı, kaynak somunu, kaynaklı somun DIN 929, projeksiyon kaynağı somun, ISO 14555, ark saplama kaynağı, kapasitör deşarjlı saplama, stud welding, Bolzenschweißen, Anschweißmutter, soldadura de espárragos, soudage de goujons',
  related: ['sac-metal-kaynakli-montaj-grubu-tedarik', 'kaynakli-mi-civatali-mi-birlestirme', 'otomotiv-yan-sanayi-kaynak', 'kaynak-fiksturu-tasarimi-seri-uretim'],
  tr: {
    title: 'Saplama Kaynağı ve Kaynak Somunu: Kaynaklı Parçada Bağlantı Noktaları',
    meta: 'Kaynaklı parçalara sonradan bağlantı noktası eklemenin yolları: ark ve kapasitör deşarjlı saplama kaynağı (ISO 14555), DIN 929 altıgen ve DIN 928 kare kaynak somunu, projeksiyon kaynağı ve MAG ile somun kaynağı. Diş koruma, boya ve kontrol yöntemleri.',
    og: 'Saplama kaynağı ve kaynak somunu',
    tag: 'Teknik Rehber · Birleştirme',
    h1: 'Saplama Kaynağı ve Kaynak Somunu: Kaynaklı Parçada Bağlantı Noktaları',
    crumb: 'Saplama ve kaynak somunu',
    read: '6 dk okuma',
    body: `
<p>Bir şasiye kablo kanalı, bir panele kapak, bir gövdeye hortum kelepçesi bağlanacak. İnce sacda diş açmak mümkün değil; arkadan somun tutmak için erişim yok. Çözüm, parçaya kaynakla bağlantı elemanı eklemektir: saplama veya kaynak somunu. Doğru seçilmediğinde ise sahada kopan saplamalar ve boyayla dolmuş dişler ortaya çıkar.</p>
<h2>Saplama Kaynağı (ISO 14555)</h2>
<ul>
<li><strong>Ark saplama kaynağı (seramik halkalı veya gaz korumalı):</strong> Saplama ile parça arasında kısa bir ark oluşturulur, ardından saplama erimiş banyoya bastırılır. Kalın saplamalar ve yük taşıyan bağlantılar için uygundur; birleşim tam kesitte olur.</li>
<li><strong>Kısa çevrimli ark saplama:</strong> Daha küçük çaplar ve orta kalınlıkta sac için.</li>
<li><strong>Kapasitör deşarjlı saplama:</strong> Çok kısa süreli enerji boşalmasıyla yapılır. İnce sacda arka yüzeyde iz bırakmadan küçük saplamalar için idealdir; boyalı veya görünür yüzeylerde tercih edilir. Yük taşıma kapasitesi sınırlıdır.</li>
</ul>
<h2>Kaynak Somunu</h2>
<ul>
<li><strong>DIN 929 altıgen ve DIN 928 kare kaynak somunu:</strong> Projeksiyon çıkıntıları sayesinde direnç (projeksiyon) kaynağıyla saca bağlanır. Seri üretimde hızlı ve tekrarlanabilirdir; otomotiv ve sac montaj gruplarında yaygındır.</li>
<li><strong>MAG ile kaynatılan somun:</strong> Kalın parçalarda veya projeksiyon ekipmanı gerekmeyen düşük adetlerde somun çevresinden kaynatılır. Isı dişi bozabilir; kaynak sonrası diş kontrolü veya kılavuz çekme gerekebilir.</li>
</ul>
<h2>Sık Görülen Sorunlar</h2>
<ul>
<li><strong>Sıçrantı ve boya dişte:</strong> Dişler kaynak ve boya sırasında korunmalıdır; tapa, maskeleme veya boya sonrası kılavuz çekme planlanmalıdır.</li>
<li><strong>Yanlış konum:</strong> Kaynak sonrası delik ve saplama konumu fikstürle sağlanmalıdır (bkz. <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">kaynak fikstürü</a>).</li>
<li><strong>Arka yüzde iz veya yanık:</strong> İnce ve görünür sacda yöntem seçimine dikkat edilmelidir.</li>
<li><strong>Kaplama:</strong> Galvanizli sacda kaplama kaynağı etkiler; uygun parametre veya yöntem gerekir.</li>
</ul>
<h2>Kontrol</h2>
<p>ISO 14555, saplama kaynağı için üretim öncesi ve üretim sırasında testler tanımlar: eğme testi (saplamanın çekiçle belirli açıya bükülmesi), çekme veya tork testi ve gözle kontrol. Kaynak somunlarında itme-çıkarma (push-out) ve tork testi yaygındır. Test sıklığı şartnamede belirtilmelidir.</p>
<h2>Çizimde Belirtilmesi Gerekenler</h2>
<p>Saplama veya somun tipi ve standardı, malzeme, konum toleransı, diş koruma şartı, test yöntemi ve sıklığı, kaplama öncesi mi sonrası mı uygulanacağı.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> MAG ile kaynatılan somun ve bağlantı elemanlarında konumu fikstürle sağlıyor, dişleri kaynak ve boya sırasında koruyoruz. Saplama ve projeksiyon kaynağı gerektiren işlerde uygun yöntemi teklif aşamasında belirleyip gerekirse iş ortaklarımızla koordine ediyoruz. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['Saplama kaynağı hangi standarda göre yapılır?', 'ISO 14555; yöntem ve testleri tanımlar.'],
      ['İnce sacda hangi yöntem?', 'Arka yüzde iz bırakmamak için genellikle kapasitör deşarjlı saplama.'],
      ['Kaynak somunu nasıl bağlanır?', 'Seride projeksiyon kaynağıyla, düşük adette MAG ile çevresinden.'],
      ['Diş boya ile dolarsa?', 'Maskeleme veya boya sonrası kılavuz çekme önceden planlanmalıdır.']
    ],
    cta_h3: 'Bağlantı noktalı kaynaklı parça mı?',
    cta_p: 'Çizimleri gönderin; uygun yöntemi ve teklifimizi hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Stud Welding and Weld Nuts: Fastening Points on Welded Parts',
    meta: 'Ways to add fastening points to welded parts: drawn-arc and capacitor-discharge stud welding (ISO 14555), DIN 929 hex and DIN 928 square weld nuts, projection welding and MAG-welded nuts. Thread protection, painting and testing.',
    og: 'Stud welding and weld nuts',
    tag: 'Technical Guide · Joining',
    h1: 'Stud Welding and Weld Nuts: Fastening Points on Welded Parts',
    crumb: 'Studs and weld nuts',
    read: '6 min read',
    body: `
<p>A cable duct on a chassis, a cover on a panel, a hose clamp on a housing. Thin sheet cannot be tapped; there is no access behind to hold a nut. The answer is to weld a fastener to the part: a stud or a weld nut. Chosen wrongly, the result is studs breaking off in the field and threads full of paint.</p>
<h2>Stud Welding (ISO 14555)</h2>
<ul>
<li><strong>Drawn-arc stud welding (ceramic ferrule or shielding gas):</strong> a short arc forms between stud and part, then the stud is plunged into the molten pool. Suits larger studs and load-bearing connections; fusion across the full section.</li>
<li><strong>Short-cycle drawn arc:</strong> for smaller diameters and medium sheet thickness.</li>
<li><strong>Capacitor discharge (CD):</strong> a very short energy discharge. Ideal for small studs on thin sheet without marking the reverse side; preferred on painted or visible faces. Load capacity is limited.</li>
</ul>
<h2>Weld Nuts</h2>
<ul>
<li><strong>DIN 929 hex and DIN 928 square weld nuts:</strong> projections allow resistance (projection) welding to sheet. Fast and repeatable in series; common in automotive and sheet assemblies.</li>
<li><strong>MAG-welded nuts:</strong> on thick parts or low volumes without projection equipment, the nut is welded around its perimeter. Heat can distort the thread; a thread check or retapping may be needed.</li>
</ul>
<h2>Common Problems</h2>
<ul>
<li><strong>Spatter and paint in the thread:</strong> protect threads during welding and painting; plan plugs, masking or post-paint tapping.</li>
<li><strong>Wrong position:</strong> secure hole and stud positions with a fixture (see <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">welding fixtures</a>).</li>
<li><strong>Marks or burn-through on the reverse:</strong> choose the method carefully on thin, visible sheet.</li>
<li><strong>Coatings:</strong> zinc on galvanised sheet affects the weld; suitable parameters or method are needed.</li>
</ul>
<h2>Testing</h2>
<p>ISO 14555 defines pre-production and production tests for stud welding: bend test (bending the stud with a hammer to a set angle), tensile or torque test and visual inspection. For weld nuts, push-out and torque tests are common. Test frequency belongs in the specification.</p>
<h2>What to State on the Drawing</h2>
<p>Stud or nut type and standard, material, position tolerance, thread protection, test method and frequency, and whether it is applied before or after coating.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> for MAG-welded nuts and fasteners we secure position with fixtures and protect threads during welding and painting. Where stud or projection welding is required, we define the method at quotation and coordinate with partners if needed. <a href="../cizime-gore-imalat.html">Build-to-print manufacturing →</a></p></div>
`,
    faq: [
      ['Which standard covers stud welding?', 'ISO 14555; it defines methods and tests.'],
      ['Which method for thin sheet?', 'Usually capacitor discharge, to avoid marking the reverse side.'],
      ['How are weld nuts attached?', 'By projection welding in series, by MAG around the perimeter at low volumes.'],
      ['What if paint fills the thread?', 'Plan masking or post-paint tapping in advance.']
    ],
    cta_h3: 'Welded parts with fastening points?',
    cta_p: 'Send drawings; we will propose the method and prepare our quote.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Bolzenschweißen und Anschweißmuttern: Befestigungspunkte an Schweißteilen',
    meta: 'Wie man Schweißteilen Befestigungspunkte hinzufügt: Hubzündungs- und Spitzenzündungs-Bolzenschweißen (ISO 14555), Sechskant-Anschweißmuttern DIN 929 und Vierkant DIN 928, Buckelschweißen und MAG-geschweißte Muttern. Gewindeschutz, Lackierung und Prüfung.',
    og: 'Bolzenschweißen und Anschweißmuttern',
    tag: 'Technischer Leitfaden · Fügen',
    h1: 'Bolzenschweißen und Anschweißmuttern: Befestigungspunkte an Schweißteilen',
    crumb: 'Bolzen und Anschweißmuttern',
    read: '6 Min. Lesezeit',
    body: `
<p>Ein Kabelkanal am Rahmen, ein Deckel am Paneel, eine Schlauchschelle am Gehäuse. Dünnes Blech lässt sich nicht gewindeschneiden, hinten fehlt der Zugang für eine Mutter. Die Lösung: ein Befestigungselement anschweißen – Bolzen oder Anschweißmutter. Falsch gewählt, brechen Bolzen im Feld ab und Gewinde sind voller Lack.</p>
<h2>Bolzenschweißen (ISO 14555)</h2>
<ul>
<li><strong>Hubzündung mit Keramikring oder Schutzgas:</strong> zwischen Bolzen und Teil entsteht ein kurzer Lichtbogen, dann wird der Bolzen ins Schmelzbad getaucht. Für größere Bolzen und tragende Verbindungen; Verbindung über den vollen Querschnitt.</li>
<li><strong>Kurzzeit-Hubzündung:</strong> für kleinere Durchmesser und mittlere Blechdicken.</li>
<li><strong>Spitzenzündung (Kondensatorentladung):</strong> sehr kurze Energieentladung. Ideal für kleine Bolzen auf dünnem Blech ohne Markierung auf der Rückseite; bevorzugt bei lackierten oder sichtbaren Flächen. Tragfähigkeit begrenzt.</li>
</ul>
<h2>Anschweißmuttern</h2>
<ul>
<li><strong>Sechskant DIN 929 und Vierkant DIN 928:</strong> die Schweißbuckel erlauben Widerstands-Buckelschweißen auf Blech. Schnell und wiederholgenau in der Serie; verbreitet in Automobil- und Blechbaugruppen.</li>
<li><strong>MAG-geschweißte Muttern:</strong> bei dicken Teilen oder kleinen Stückzahlen ohne Buckelschweißanlage wird die Mutter umlaufend verschweißt. Die Wärme kann das Gewinde verziehen; Gewindeprüfung oder Nachschneiden kann nötig sein.</li>
</ul>
<h2>Häufige Probleme</h2>
<ul>
<li><strong>Spritzer und Lack im Gewinde:</strong> Gewinde beim Schweißen und Lackieren schützen; Stopfen, Abdeckung oder Nachschneiden nach dem Lackieren einplanen.</li>
<li><strong>Falsche Lage:</strong> Bohrungs- und Bolzenpositionen per Vorrichtung sichern (siehe <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">Schweißvorrichtungen</a>).</li>
<li><strong>Abzeichnung oder Durchbrand auf der Rückseite:</strong> bei dünnem, sichtbarem Blech Verfahren sorgfältig wählen.</li>
<li><strong>Beschichtungen:</strong> Zink auf verzinktem Blech beeinflusst die Schweißung; passende Parameter oder Verfahren nötig.</li>
</ul>
<h2>Prüfung</h2>
<p>ISO 14555 definiert Arbeitsprüfungen vor und während der Fertigung: Biegeprüfung (Bolzen mit dem Hammer auf einen Winkel biegen), Zug- oder Drehmomentprüfung und Sichtprüfung. Bei Anschweißmuttern sind Ausdrück- und Drehmomentprüfung üblich. Die Prüfhäufigkeit gehört in die Spezifikation.</p>
<h2>Was auf die Zeichnung gehört</h2>
<p>Bolzen- oder Muttertyp und Norm, Werkstoff, Positionstoleranz, Gewindeschutz, Prüfverfahren und -häufigkeit sowie ob vor oder nach der Beschichtung gesetzt wird.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Bei MAG-geschweißten Muttern und Befestigungselementen sichern wir die Lage per Vorrichtung und schützen Gewinde beim Schweißen und Lackieren. Wo Bolzen- oder Buckelschweißen nötig ist, legen wir das Verfahren im Angebot fest und koordinieren bei Bedarf mit Partnern. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Welche Norm gilt für Bolzenschweißen?', 'ISO 14555; sie regelt Verfahren und Prüfungen.'],
      ['Welches Verfahren für dünnes Blech?', 'Meist Spitzenzündung, um die Rückseite nicht zu markieren.'],
      ['Wie werden Anschweißmuttern befestigt?', 'In Serie per Buckelschweißen, bei kleinen Mengen umlaufend mit MAG.'],
      ['Was, wenn Lack ins Gewinde läuft?', 'Abdeckung oder Nachschneiden vorab einplanen.']
    ],
    cta_h3: 'Schweißteile mit Befestigungspunkten?',
    cta_p: 'Senden Sie Zeichnungen; wir schlagen das Verfahren vor und erstellen unser Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Soldadura de espárragos y tuercas de soldar: puntos de fijación en piezas soldadas',
    meta: 'Cómo añadir puntos de fijación a piezas soldadas: soldadura de espárragos por arco y por descarga de condensador (ISO 14555), tuercas de soldar DIN 929 y DIN 928, soldadura por proyección y tuercas soldadas con MAG. Protección de rosca, pintura y ensayos.',
    og: 'Espárragos y tuercas de soldar',
    tag: 'Guía técnica · Unión',
    h1: 'Soldadura de espárragos y tuercas de soldar: puntos de fijación en piezas soldadas',
    crumb: 'Espárragos y tuercas',
    read: '6 min de lectura',
    body: `
<p>Un canal de cables en un chasis, una tapa en un panel, una abrazadera en una carcasa. La chapa fina no se puede roscar y no hay acceso por detrás para sujetar una tuerca. La solución es soldar un elemento de fijación: espárrago o tuerca de soldar. Mal elegido, aparecen espárragos que se rompen en campo y roscas llenas de pintura.</p>
<h2>Soldadura de espárragos (ISO 14555)</h2>
<ul>
<li><strong>Arco con férula cerámica o gas:</strong> se forma un arco corto entre espárrago y pieza y luego el espárrago se hunde en el baño. Para espárragos grandes y uniones portantes; unión en toda la sección.</li>
<li><strong>Arco de ciclo corto:</strong> para diámetros menores y chapa de espesor medio.</li>
<li><strong>Descarga de condensador:</strong> descarga de energía muy breve. Ideal para espárragos pequeños en chapa fina sin marcar el reverso; preferida en caras pintadas o vistas. Capacidad de carga limitada.</li>
</ul>
<h2>Tuercas de soldar</h2>
<ul>
<li><strong>DIN 929 hexagonal y DIN 928 cuadrada:</strong> sus resaltes permiten soldarlas por resistencia (proyección) a la chapa. Rápido y repetible en serie; habitual en automoción y conjuntos de chapa.</li>
<li><strong>Tuercas soldadas con MAG:</strong> en piezas gruesas o series cortas sin equipo de proyección se sueldan por el contorno. El calor puede deformar la rosca; puede requerirse control o repaso con macho.</li>
</ul>
<h2>Problemas frecuentes</h2>
<ul>
<li><strong>Proyecciones y pintura en la rosca:</strong> proteger roscas al soldar y pintar; prever tapones, enmascarado o repaso tras pintar.</li>
<li><strong>Posición errónea:</strong> asegurar posiciones con utillaje (ver <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">utillajes de soldadura</a>).</li>
<li><strong>Marcas o perforación en el reverso:</strong> elegir bien el método en chapa fina y vista.</li>
<li><strong>Recubrimientos:</strong> el zinc de la chapa galvanizada afecta a la soldadura; requiere parámetros o método adecuados.</li>
</ul>
<h2>Ensayos</h2>
<p>ISO 14555 define ensayos previos y de producción: doblado (doblar el espárrago con martillo a un ángulo), tracción o par y control visual. En tuercas son habituales el ensayo de empuje y el de par. La frecuencia debe figurar en la especificación.</p>
<h2>Qué indicar en el plano</h2>
<p>Tipo y norma del espárrago o tuerca, material, tolerancia de posición, protección de rosca, método y frecuencia de ensayo, y si se aplica antes o después del recubrimiento.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> en tuercas y fijaciones soldadas con MAG aseguramos la posición con utillaje y protegemos las roscas al soldar y pintar. Cuando se requiere soldadura de espárragos o por proyección, definimos el método en la oferta y coordinamos con socios si es necesario. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Qué norma regula la soldadura de espárragos?', 'ISO 14555; define métodos y ensayos.'],
      ['¿Qué método para chapa fina?', 'Normalmente descarga de condensador, para no marcar el reverso.'],
      ['¿Cómo se fijan las tuercas de soldar?', 'En serie por proyección; en series cortas con MAG por el contorno.'],
      ['¿Y si la pintura llena la rosca?', 'Prever enmascarado o repaso tras pintar.']
    ],
    cta_h3: '¿Piezas soldadas con puntos de fijación?',
    cta_p: 'Envíe los planos; propondremos el método y prepararemos la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Soudage de goujons et écrous à souder : points de fixation sur pièces soudées',
    meta: 'Comment ajouter des points de fixation aux pièces soudées : soudage de goujons à l\'arc et par décharge de condensateur (ISO 14555), écrous à souder DIN 929 et DIN 928, soudage par bossages et écrous soudés MAG. Protection des filetages, peinture et essais.',
    og: 'Goujons et écrous à souder',
    tag: 'Guide technique · Assemblage',
    h1: 'Soudage de goujons et écrous à souder : points de fixation sur pièces soudées',
    crumb: 'Goujons et écrous à souder',
    read: '6 min de lecture',
    body: `
<p>Une goulotte sur un châssis, un capot sur un panneau, un collier sur un carter. La tôle mince ne se taraude pas, et il n'y a pas d'accès arrière pour tenir un écrou. La solution : souder un élément de fixation, goujon ou écrou à souder. Mal choisi, il en résulte des goujons arrachés sur le terrain et des filetages pleins de peinture.</p>
<h2>Soudage de goujons (ISO 14555)</h2>
<ul>
<li><strong>Arc tiré avec bague céramique ou gaz :</strong> un arc court se forme entre goujon et pièce, puis le goujon plonge dans le bain. Pour goujons de grande taille et liaisons porteuses ; liaison sur toute la section.</li>
<li><strong>Arc tiré à cycle court :</strong> pour petits diamètres et tôles d'épaisseur moyenne.</li>
<li><strong>Décharge de condensateur :</strong> décharge d'énergie très brève. Idéal pour petits goujons sur tôle mince sans marquer l'envers ; préféré sur faces peintes ou visibles. Capacité de charge limitée.</li>
</ul>
<h2>Écrous à souder</h2>
<ul>
<li><strong>DIN 929 hexagonaux et DIN 928 carrés :</strong> leurs bossages permettent le soudage par résistance (bossages) sur tôle. Rapide et répétable en série ; courant en automobile et ensembles tôlés.</li>
<li><strong>Écrous soudés MAG :</strong> sur pièces épaisses ou petites séries sans équipement à bossages, l'écrou est soudé sur son pourtour. La chaleur peut déformer le filetage ; contrôle ou retaraudage parfois nécessaire.</li>
</ul>
<h2>Problèmes fréquents</h2>
<ul>
<li><strong>Projections et peinture dans le filetage :</strong> protéger les filetages au soudage et à la peinture ; prévoir bouchons, masquage ou retaraudage.</li>
<li><strong>Mauvaise position :</strong> assurer les positions par gabarit (voir <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">gabarits de soudage</a>).</li>
<li><strong>Marques ou perçage au dos :</strong> bien choisir la méthode sur tôle mince visible.</li>
<li><strong>Revêtements :</strong> le zinc des tôles galvanisées influence la soudure ; paramètres ou méthode adaptés nécessaires.</li>
</ul>
<h2>Essais</h2>
<p>ISO 14555 définit des essais préalables et de production : pliage (plier le goujon au marteau à un angle donné), traction ou couple et contrôle visuel. Pour les écrous, essais d'arrachement par poussée et de couple. La fréquence figure dans la spécification.</p>
<h2>À indiquer sur le plan</h2>
<p>Type et norme du goujon ou de l'écrou, matériau, tolérance de position, protection du filetage, méthode et fréquence d'essai, application avant ou après revêtement.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> pour les écrous et fixations soudés MAG, nous assurons la position par gabarit et protégeons les filetages au soudage et à la peinture. Lorsque le soudage de goujons ou par bossages est requis, nous définissons la méthode au devis et coordonnons avec nos partenaires si nécessaire. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Quelle norme pour le soudage de goujons ?', 'ISO 14555 ; elle définit méthodes et essais.'],
      ['Quelle méthode sur tôle mince ?', 'En général la décharge de condensateur, pour ne pas marquer l\'envers.'],
      ['Comment fixer les écrous à souder ?', 'Par bossages en série, au MAG sur le pourtour en petites quantités.'],
      ['Et si la peinture remplit le filetage ?', 'Prévoir masquage ou retaraudage à l\'avance.']
    ],
    cta_h3: 'Pièces soudées avec points de fixation ?',
    cta_p: 'Envoyez vos plans ; nous proposerons la méthode et préparerons le devis.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Saldatura di prigionieri e dadi a saldare: punti di fissaggio sui pezzi saldati',
    meta: 'Come aggiungere punti di fissaggio ai pezzi saldati: saldatura di prigionieri ad arco e a scarica di condensatori (ISO 14555), dadi a saldare DIN 929 e DIN 928, saldatura a proiezione e dadi saldati MAG. Protezione dei filetti, verniciatura e prove.',
    og: 'Prigionieri e dadi a saldare',
    tag: 'Guida tecnica · Giunzione',
    h1: 'Saldatura di prigionieri e dadi a saldare: punti di fissaggio sui pezzi saldati',
    crumb: 'Prigionieri e dadi a saldare',
    read: '6 min di lettura',
    body: `
<p>Una canalina sul telaio, un coperchio su un pannello, una fascetta su un carter. La lamiera sottile non si filetta e dietro non c'è accesso per tenere un dado. La soluzione è saldare un elemento di fissaggio: prigioniero o dado a saldare. Scelto male, ne risultano prigionieri che si staccano sul campo e filetti pieni di vernice.</p>
<h2>Saldatura di prigionieri (ISO 14555)</h2>
<ul>
<li><strong>Arco con ghiera ceramica o gas:</strong> si forma un arco breve tra prigioniero e pezzo, poi il prigioniero affonda nel bagno. Per prigionieri grandi e collegamenti portanti; unione su tutta la sezione.</li>
<li><strong>Arco a ciclo breve:</strong> per diametri minori e lamiere di spessore medio.</li>
<li><strong>Scarica di condensatori:</strong> scarica di energia brevissima. Ideale per piccoli prigionieri su lamiera sottile senza segni sul retro; preferita su facce verniciate o a vista. Capacità di carico limitata.</li>
</ul>
<h2>Dadi a saldare</h2>
<ul>
<li><strong>DIN 929 esagonali e DIN 928 quadri:</strong> le proiezioni consentono la saldatura a resistenza (proiezione) sulla lamiera. Rapida e ripetibile in serie; comune in automotive e gruppi in lamiera.</li>
<li><strong>Dadi saldati MAG:</strong> su pezzi spessi o piccole quantità senza impianto a proiezione, il dado è saldato sul perimetro. Il calore può deformare il filetto; può servire controllo o ripassatura.</li>
</ul>
<h2>Problemi frequenti</h2>
<ul>
<li><strong>Spruzzi e vernice nel filetto:</strong> proteggere i filetti in saldatura e verniciatura; prevedere tappi, mascherature o ripassatura dopo verniciatura.</li>
<li><strong>Posizione errata:</strong> garantire le posizioni con attrezzature (vedi <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">attrezzature di saldatura</a>).</li>
<li><strong>Segni o sfondamento sul retro:</strong> scegliere bene il metodo su lamiera sottile a vista.</li>
<li><strong>Rivestimenti:</strong> lo zinco della lamiera zincata influisce sulla saldatura; servono parametri o metodo adeguati.</li>
</ul>
<h2>Prove</h2>
<p>ISO 14555 definisce prove preliminari e di produzione: piegatura (piegare il prigioniero col martello a un angolo), trazione o coppia e controllo visivo. Per i dadi sono comuni le prove di spinta e di coppia. La frequenza va nella specifica.</p>
<h2>Cosa indicare a disegno</h2>
<p>Tipo e norma del prigioniero o dado, materiale, tolleranza di posizione, protezione del filetto, metodo e frequenza di prova, applicazione prima o dopo il rivestimento.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> per dadi ed elementi saldati MAG garantiamo la posizione con attrezzature e proteggiamo i filetti in saldatura e verniciatura. Quando serve la saldatura di prigionieri o a proiezione, definiamo il metodo in offerta e coordiniamo con i partner se necessario. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Quale norma per la saldatura di prigionieri?', 'ISO 14555; definisce metodi e prove.'],
      ['Quale metodo per lamiera sottile?', 'Di solito scarica di condensatori, per non segnare il retro.'],
      ['Come si fissano i dadi a saldare?', 'In serie a proiezione, in piccole quantità con MAG sul perimetro.'],
      ['E se la vernice riempie il filetto?', 'Prevedere mascheratura o ripassatura in anticipo.']
    ],
    cta_h3: 'Pezzi saldati con punti di fissaggio?',
    cta_p: 'Inviate i disegni; proporremo il metodo e prepareremo l\'offerta.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Boutlassen en lasmoeren: bevestigingspunten op laswerk',
    meta: 'Bevestigingspunten toevoegen aan gelaste delen: boogbout- en condensatorontladingslassen (ISO 14555), zeskant-lasmoeren DIN 929 en vierkant DIN 928, projectielassen en met MAG gelaste moeren. Schroefdraadbescherming, lakken en beproeving.',
    og: 'Boutlassen en lasmoeren',
    tag: 'Technische gids · Verbinden',
    h1: 'Boutlassen en lasmoeren: bevestigingspunten op laswerk',
    crumb: 'Lasbouten en lasmoeren',
    read: '6 min lezen',
    body: `
<p>Een kabelgoot op een chassis, een deksel op een paneel, een slangklem op een behuizing. Dunne plaat kan niet getapt worden en aan de achterkant is geen toegang voor een moer. De oplossing: een bevestigingselement aanlassen, lasbout of lasmoer. Verkeerd gekozen leidt dat tot afbrekende bouten in het veld en schroefdraad vol lak.</p>
<h2>Boutlassen (ISO 14555)</h2>
<ul>
<li><strong>Boogboutlassen met keramische ring of gas:</strong> tussen bout en deel ontstaat een korte boog, daarna wordt de bout in het smeltbad gedrukt. Voor grotere bouten en dragende verbindingen; verbinding over de volle doorsnede.</li>
<li><strong>Korte-cyclus boogboutlassen:</strong> voor kleinere diameters en middeldikke plaat.</li>
<li><strong>Condensatorontlading:</strong> zeer korte energieontlading. Ideaal voor kleine bouten op dunne plaat zonder afdruk aan de achterzijde; voorkeur op gelakte of zichtbare vlakken. Beperkt draagvermogen.</li>
</ul>
<h2>Lasmoeren</h2>
<ul>
<li><strong>DIN 929 zeskant en DIN 928 vierkant:</strong> de lasnokken maken weerstands- (projectie)lassen op plaat mogelijk. Snel en herhaalbaar in serie; gangbaar in automotive en plaatwerkassemblages.</li>
<li><strong>Met MAG gelaste moeren:</strong> bij dikke delen of kleine aantallen zonder projectielasinstallatie wordt de moer rondom gelast. Warmte kan de draad vervormen; draadcontrole of natappen kan nodig zijn.</li>
</ul>
<h2>Veelvoorkomende problemen</h2>
<ul>
<li><strong>Spatten en lak in de draad:</strong> schroefdraad beschermen bij lassen en lakken; doppen, afplakken of natappen na het lakken plannen.</li>
<li><strong>Verkeerde positie:</strong> posities borgen met een mal (zie <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">lasmallen</a>).</li>
<li><strong>Afdruk of doorbranden aan de achterzijde:</strong> methode zorgvuldig kiezen bij dunne, zichtbare plaat.</li>
<li><strong>Coatings:</strong> zink op verzinkte plaat beïnvloedt de las; passende parameters of methode nodig.</li>
</ul>
<h2>Beproeving</h2>
<p>ISO 14555 beschrijft proeven vóór en tijdens de productie: buigproef (bout met hamer tot een hoek buigen), trek- of koppelproef en visuele controle. Bij lasmoeren zijn uitdruk- en koppelproeven gangbaar. De frequentie hoort in de specificatie.</p>
<h2>Wat op de tekening hoort</h2>
<p>Type en norm van bout of moer, materiaal, positietolerantie, draadbescherming, beproevingsmethode en -frequentie, en of het vóór of na de coating wordt aangebracht.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> bij met MAG gelaste moeren en bevestigingen borgen we de positie met mallen en beschermen we de draad bij lassen en lakken. Waar boutlassen of projectielassen nodig is, leggen we de methode in de offerte vast en coördineren we zo nodig met partners. <a href="../cizime-gore-imalat.html">Productie volgens tekening →</a></p></div>
`,
    faq: [
      ['Welke norm geldt voor boutlassen?', 'ISO 14555; die beschrijft methoden en beproevingen.'],
      ['Welke methode voor dunne plaat?', 'Meestal condensatorontlading, om de achterzijde niet te markeren.'],
      ['Hoe worden lasmoeren bevestigd?', 'In serie met projectielassen, bij kleine aantallen rondom met MAG.'],
      ['Wat als lak de draad vult?', 'Afplakken of natappen vooraf plannen.']
    ],
    cta_h3: 'Laswerk met bevestigingspunten?',
    cta_p: 'Stuur tekeningen; we stellen de methode voor en maken een offerte.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Boltsveising og sveisemuttere: festepunkter på sveisedeler',
    meta: 'Slik legges festepunkter til sveisedeler: buebolt- og kondensatorutladningssveising (ISO 14555), sveisemuttere DIN 929 sekskant og DIN 928 firkant, punktprosjeksjonssveising og MAG-sveisede muttere. Gjengebeskyttelse, maling og testing.',
    og: 'Boltsveising og sveisemuttere',
    tag: 'Teknisk guide · Sammenføyning',
    h1: 'Boltsveising og sveisemuttere: festepunkter på sveisedeler',
    crumb: 'Sveisebolter og -muttere',
    read: '6 min lesing',
    body: `
<p>En kabelkanal på et chassis, et deksel på et panel, en slangeklemme på et hus. Tynn plate kan ikke gjenges, og det er ingen tilgang bak for å holde en mutter. Løsningen er å sveise på et festeelement: bolt eller sveisemutter. Feil valg gir bolter som brekker i felt og gjenger fulle av maling.</p>
<h2>Boltsveising (ISO 14555)</h2>
<ul>
<li><strong>Buebolt med keramisk ring eller gass:</strong> en kort lysbue dannes mellom bolt og del, så presses bolten ned i smeltebadet. For større bolter og bærende forbindelser; sammensmelting over hele tverrsnittet.</li>
<li><strong>Kortsyklus buebolt:</strong> for mindre diametre og middels platetykkelse.</li>
<li><strong>Kondensatorutladning:</strong> svært kort energiutladning. Ideelt for små bolter på tynn plate uten merker på baksiden; foretrukket på malte eller synlige flater. Begrenset lastkapasitet.</li>
</ul>
<h2>Sveisemuttere</h2>
<ul>
<li><strong>DIN 929 sekskant og DIN 928 firkant:</strong> prosjeksjonsknastene gjør motstandssveising (prosjeksjonssveising) til plate mulig. Raskt og repeterbart i serie; vanlig i bil- og platemonteringer.</li>
<li><strong>MAG-sveisede muttere:</strong> på tykke deler eller små volumer uten prosjeksjonsutstyr sveises mutteren rundt. Varmen kan deformere gjengene; gjengekontroll eller etterskjæring kan trengs.</li>
</ul>
<h2>Vanlige problemer</h2>
<ul>
<li><strong>Sprut og maling i gjengene:</strong> beskytt gjenger under sveising og maling; planlegg plugger, maskering eller etterskjæring.</li>
<li><strong>Feil posisjon:</strong> sikre hull- og boltposisjoner med jigg (se <a href="kaynak-fiksturu-tasarimi-seri-uretim.html">sveisejigger</a>).</li>
<li><strong>Merker eller gjennombrenning på baksiden:</strong> velg metode nøye på tynn, synlig plate.</li>
<li><strong>Belegg:</strong> sink på galvanisert plate påvirker sveisen; riktige parametere eller metode trengs.</li>
</ul>
<h2>Testing</h2>
<p>ISO 14555 beskriver prøver før og under produksjon: bøyeprøve (bøye bolten med hammer til en vinkel), strekk- eller momentprøve og visuell kontroll. For sveisemuttere er utpressings- og momentprøve vanlig. Prøvefrekvensen hører hjemme i spesifikasjonen.</p>
<h2>Hva som skal stå på tegningen</h2>
<p>Bolt- eller muttertype og standard, materiale, posisjonstoleranse, gjengebeskyttelse, prøvemetode og frekvens, og om det påføres før eller etter belegg.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> for MAG-sveisede muttere og festeelementer sikrer vi posisjonen med jigger og beskytter gjengene under sveising og maling. Der boltsveising eller prosjeksjonssveising kreves, fastsetter vi metoden i tilbudet og koordinerer med partnere ved behov. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hvilken standard gjelder boltsveising?', 'ISO 14555; den beskriver metoder og prøver.'],
      ['Hvilken metode for tynn plate?', 'Vanligvis kondensatorutladning, for å unngå merker på baksiden.'],
      ['Hvordan festes sveisemuttere?', 'Med prosjeksjonssveising i serie, med MAG rundt ved små volumer.'],
      ['Hva om maling fyller gjengene?', 'Planlegg maskering eller etterskjæring på forhånd.']
    ],
    cta_h3: 'Sveisedeler med festepunkter?',
    cta_p: 'Send tegninger; vi foreslår metode og utarbeider tilbud.',
    cta_btn: 'Be om tilbud →'
  }
};
