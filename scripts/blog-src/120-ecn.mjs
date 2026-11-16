export default {
  order: 120,
  slug: 'cizim-revizyonu-degisiklik-yonetimi-ecn',
  key: 'p120_ecn',
  date: '2026-11-16',
  keywords: 'çizim revizyonu yönetimi, mühendislik değişiklik bildirimi ECN, revizyon kontrolü tedarikçi, yanlış revizyonla üretim, revizyon geçiş tarihi, eski stok yönetimi, engineering change notice supplier, Zeichnungsänderung Lieferant, gestión de revisiones de planos, gestion des modifications plans fournisseur',
  related: ['ilk-parca-onayi-kaynakli-imalat', 'ppap-kaynakli-parca-onayi', 'kaynakta-dijital-izlenebilirlik', 'kalite-anlasmasi-qaa-kaynak-tedarikcisi'],
  tr: {
    title: 'Çizim Revizyonu ve Değişiklik Yönetimi (ECN): Yanlış Revizyonla Üretimi Önlemek',
    meta: 'Kaynaklı parça tedarikinde çizim revizyonu ve mühendislik değişiklik bildirimi (ECN) nasıl yönetilir: revizyon kontrolü, değişikliğin teklif ve teslimata etkisi, geçiş tarihi, yoldaki ve stoktaki parçalar, ilk parça onayı ve kayıt.',
    og: 'Çizim revizyonu ve değişiklik yönetimi',
    tag: 'Tedarik Rehberi · Süreç',
    h1: 'Çizim Revizyonu ve Değişiklik Yönetimi (ECN): Yanlış Revizyonla Üretimi Önlemek',
    crumb: 'Çizim revizyonu',
    read: '6 dk okuma',
    body: `
<p>Tedarik zincirindeki en pahalı hatalardan biri, parçanın kusursuz üretilmesi ama eski revizyona göre üretilmesidir. Kaynak dikişleri temiz, ölçüler toleransta, boya düzgün; ancak bir delik yeni çizimde 20 mm kaymıştır ve parça montaja girmez. Bu sorun nadiren atölyede başlar; çoğu zaman değişikliğin nasıl iletildiğiyle ilgilidir.</p>
<h2>Yanlış Revizyon Nasıl Olur?</h2>
<ul>
<li>Yeni çizim e-postayla bir kişiye gider, atölyedeki çıktı değişmez.</li>
<li>Sipariş belgesindeki revizyon ile ekli çizimin revizyonu farklıdır.</li>
<li>Değişiklik sözlü olarak bildirilir, yazılı kayıt yoktur.</li>
<li>Lazer kesim programı eski DXF ile kalmıştır; kesim partneri haberdar edilmemiştir.</li>
</ul>
<h2>Sağlam Bir Değişiklik Süreci</h2>
<ul>
<li><strong>Siparişte revizyon:</strong> Her sipariş kaleminde parça numarası ve revizyon harfi yazılmalıdır. Tedarikçi siparişi aldığında çizim revizyonunu siparişle karşılaştırmalıdır.</li>
<li><strong>Yazılı değişiklik bildirimi (ECN):</strong> Ne değişti, neden değişti, hangi siparişlerden itibaren geçerli ve eski parçalar ne olacak, açıkça yazılmalıdır. Değişen yerler çizimde bulut veya işaretle gösterilmelidir.</li>
<li><strong>Etki değerlendirmesi:</strong> Tedarikçi değişikliğin fiyat, malzeme, fikstür, kesim programı, WPS ve teslim tarihine etkisini bildirmelidir.</li>
<li><strong>Geçiş noktası:</strong> Hangi parti veya seri numarasından itibaren yeni revizyonun uygulanacağı, yoldaki ve stoktaki parçaların kullanılacak mı, düzeltilecek mi, hurdaya mı ayrılacağı kararlaştırılmalıdır.</li>
<li><strong>Eski dokümanların kaldırılması:</strong> Atölyedeki, kesim partnerindeki ve kalite kontroldeki eski çizim ve programlar geri çekilmeli ya da "geçersiz" olarak işaretlenmelidir.</li>
<li><strong>İlk parça kontrolü:</strong> Önemli değişikliklerde yeni revizyonun ilk parçası ölçülüp onaylanmalıdır (bkz. <a href="ilk-parca-onayi-kaynakli-imalat.html">ilk parça onayı</a>).</li>
</ul>
<h2>İzlenebilirlik</h2>
<p>Teslim edilen her partinin hangi revizyonla üretildiği kayıt altında olmalıdır. Sevk irsaliyesinde ve kalite dokümanlarında revizyon bilgisinin yer alması, sahada bir sorun çıktığında geriye dönük araştırmayı kolaylaştırır (bkz. <a href="kaynakta-dijital-izlenebilirlik.html">dijital izlenebilirlik</a>).</p>
<h2>Kalite Anlaşmasında Yer Almalı</h2>
<p>Değişiklik bildirimlerinin nasıl iletileceği, tedarikçinin onay süresi ve kendi süreç değişikliklerini (malzeme kaynağı, alt tedarikçi, kaynak yöntemi) müşteriye nasıl bildireceği, <a href="kalite-anlasmasi-qaa-kaynak-tedarikcisi.html">kalite anlaşmasında</a> tanımlanmalıdır.</p>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Siparişleri parça numarası ve revizyonla kayıt altına alıyor, çizim değişikliğinde fiyat, takvim ve stok etkisini yazılı olarak bildiriyoruz. Eski çizim ve kesim programlarını hem atölyede hem iş ortaklarımızda geri çekiyoruz. <a href="../cizime-gore-imalat.html">Çizime göre imalat →</a></p></div>
`,
    faq: [
      ['ECN nedir?', 'Mühendislik değişiklik bildirimi: neyin, neden, ne zamandan itibaren değiştiğini yazılı olarak bildirir.'],
      ['Yanlış revizyonla üretimin en sık nedeni?', 'Değişikliğin sözlü veya tek kişiye iletilmesi, eski çizimlerin geri çekilmemesi.'],
      ['Stoktaki eski parçalar ne olur?', 'Kullanım, düzeltme veya hurda kararı değişiklik bildiriminde verilmelidir.'],
      ['Revizyon hangi belgelerde görünmeli?', 'Sipariş, çizim, sevk irsaliyesi ve kalite dokümanlarında.']
    ],
    cta_h3: 'Revizyon takibi sağlam bir tedarikçi mi arıyorsunuz?',
    cta_p: 'Çizimleri ve sipariş planınızı gönderin; teklifimizi hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Drawing Revisions and Change Management (ECN): Preventing Production to the Wrong Revision',
    meta: 'How to manage drawing revisions and engineering change notices (ECN) when sourcing welded parts: revision control, effect of changes on quote and delivery, cut-in date, parts in transit and stock, first article approval and records.',
    og: 'Drawing revisions and change management',
    tag: 'Sourcing Guide · Process',
    h1: 'Drawing Revisions and Change Management (ECN): Preventing Production to the Wrong Revision',
    crumb: 'Drawing revisions',
    read: '6 min read',
    body: `
<p>One of the most expensive errors in a supply chain is a part made perfectly, but to the old revision. Welds are clean, dimensions in tolerance, paint smooth; yet a hole has moved 20 mm on the new drawing and the part will not fit. This problem rarely starts in the shop; it is usually about how the change was communicated.</p>
<h2>How Wrong Revisions Happen</h2>
<ul>
<li>A new drawing is emailed to one person; the printout in the shop stays the same.</li>
<li>The revision on the purchase order differs from the attached drawing.</li>
<li>The change is given verbally with no written record.</li>
<li>The laser program still uses the old DXF; the cutting partner was not told.</li>
</ul>
<h2>A Robust Change Process</h2>
<ul>
<li><strong>Revision on the order:</strong> each order line carries part number and revision letter. On receipt, the supplier checks the drawing revision against the order.</li>
<li><strong>Written change notice (ECN):</strong> what changed, why, from which orders it applies and what happens to old parts. Changed areas are clouded or marked on the drawing.</li>
<li><strong>Impact assessment:</strong> the supplier reports the effect on price, material, fixtures, cutting programs, WPS and delivery date.</li>
<li><strong>Cut-in point:</strong> agree from which batch or serial number the new revision applies, and whether parts in transit and stock are used, reworked or scrapped.</li>
<li><strong>Withdrawing old documents:</strong> old drawings and programs in the shop, at the cutting partner and in quality control are withdrawn or marked "obsolete".</li>
<li><strong>First article check:</strong> for significant changes, the first part of the new revision is measured and approved (see <a href="ilk-parca-onayi-kaynakli-imalat.html">first article approval</a>).</li>
</ul>
<h2>Traceability</h2>
<p>Record which revision each delivered batch was made to. Revision on the delivery note and quality documents makes it easy to trace back if a problem arises in the field (see <a href="kaynakta-dijital-izlenebilirlik.html">digital traceability</a>).</p>
<h2>Include It in the Quality Agreement</h2>
<p>How change notices are sent, the supplier's response time and how the supplier reports its own process changes (material source, sub-suppliers, welding process) should be defined in the <a href="kalite-anlasmasi-qaa-kaynak-tedarikcisi.html">quality agreement</a>.</p>
<div class="callout"><p><strong>At ArmaWeld:</strong> we record orders with part number and revision, and on drawing changes we report the effect on price, schedule and stock in writing. Old drawings and cutting programs are withdrawn in our shop and at our partners. <a href="../cizime-gore-imalat.html">Build-to-print manufacturing →</a></p></div>
`,
    faq: [
      ['What is an ECN?', 'An engineering change notice: it states in writing what changed, why and from when.'],
      ['Most common cause of wrong-revision production?', 'Changes passed verbally or to one person, and old drawings not withdrawn.'],
      ['What happens to old parts in stock?', 'The change notice should decide: use, rework or scrap.'],
      ['Where should the revision appear?', 'On order, drawing, delivery note and quality documents.']
    ],
    cta_h3: 'Looking for a supplier with solid revision control?',
    cta_p: 'Send drawings and your order plan; we will prepare our quote.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Zeichnungsrevisionen und Änderungsmanagement (ECN): Fertigung nach falschem Stand verhindern',
    meta: 'Wie man Zeichnungsrevisionen und Änderungsmitteilungen (ECN) bei der Beschaffung von Schweißteilen steuert: Revisionskontrolle, Auswirkung auf Angebot und Liefertermin, Einsatztermin, Teile unterwegs und im Lager, Erstmusterprüfung und Dokumentation.',
    og: 'Zeichnungsrevisionen und Änderungsmanagement',
    tag: 'Einkaufsleitfaden · Prozess',
    h1: 'Zeichnungsrevisionen und Änderungsmanagement (ECN): Fertigung nach falschem Stand verhindern',
    crumb: 'Zeichnungsrevisionen',
    read: '6 Min. Lesezeit',
    body: `
<p>Einer der teuersten Fehler in der Lieferkette ist ein perfekt gefertigtes Teil – nach dem alten Zeichnungsstand. Nähte sauber, Maße in Toleranz, Lack einwandfrei; doch eine Bohrung ist im neuen Stand um 20 mm gewandert, und das Teil passt nicht. Das Problem beginnt selten in der Werkstatt; meist geht es darum, wie die Änderung übermittelt wurde.</p>
<h2>Wie es zum falschen Stand kommt</h2>
<ul>
<li>Die neue Zeichnung geht per E-Mail an eine Person, der Ausdruck in der Werkstatt bleibt.</li>
<li>Der Revisionsstand in der Bestellung weicht von der angehängten Zeichnung ab.</li>
<li>Die Änderung wird mündlich mitgeteilt, ohne schriftlichen Nachweis.</li>
<li>Das Laserprogramm nutzt noch die alte DXF; der Schneidpartner wurde nicht informiert.</li>
</ul>
<h2>Ein belastbarer Änderungsprozess</h2>
<ul>
<li><strong>Revisionsstand in der Bestellung:</strong> jede Position trägt Teilenummer und Index. Der Lieferant gleicht beim Eingang Zeichnungsstand und Bestellung ab.</li>
<li><strong>Schriftliche Änderungsmitteilung (ECN):</strong> was, warum, ab welchen Bestellungen und was mit Altteilen geschieht. Geänderte Bereiche werden auf der Zeichnung markiert.</li>
<li><strong>Auswirkungsbewertung:</strong> der Lieferant meldet Auswirkungen auf Preis, Werkstoff, Vorrichtungen, Schneidprogramme, WPS und Liefertermin.</li>
<li><strong>Einsatzpunkt:</strong> ab welcher Charge oder Seriennummer der neue Stand gilt und ob Teile unterwegs und im Lager verwendet, nachgearbeitet oder verschrottet werden.</li>
<li><strong>Einziehen alter Unterlagen:</strong> alte Zeichnungen und Programme in Werkstatt, beim Schneidpartner und in der QS werden eingezogen oder als „ungültig" gekennzeichnet.</li>
<li><strong>Erstteilprüfung:</strong> bei wesentlichen Änderungen wird das erste Teil des neuen Stands gemessen und freigegeben (siehe <a href="ilk-parca-onayi-kaynakli-imalat.html">Erstmusterprüfung</a>).</li>
</ul>
<h2>Rückverfolgbarkeit</h2>
<p>Für jede gelieferte Charge muss dokumentiert sein, nach welchem Stand sie gefertigt wurde. Der Index auf Lieferschein und Qualitätsdokumenten erleichtert die Rückverfolgung bei Feldproblemen (siehe <a href="kaynakta-dijital-izlenebilirlik.html">digitale Rückverfolgbarkeit</a>).</p>
<h2>In die Qualitätssicherungsvereinbarung aufnehmen</h2>
<p>Wie Änderungsmitteilungen übermittelt werden, die Reaktionszeit des Lieferanten und wie er eigene Prozessänderungen (Materialquelle, Unterlieferanten, Schweißverfahren) meldet, gehört in die <a href="kalite-anlasmasi-qaa-kaynak-tedarikcisi.html">QSV</a>.</p>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Wir erfassen Bestellungen mit Teilenummer und Index und melden bei Zeichnungsänderungen die Auswirkungen auf Preis, Termin und Bestand schriftlich. Alte Zeichnungen und Schneidprogramme ziehen wir in der Werkstatt und bei unseren Partnern ein. <a href="../cizime-gore-imalat.html">Fertigung nach Zeichnung →</a></p></div>
`,
    faq: [
      ['Was ist eine ECN?', 'Eine Änderungsmitteilung: sie hält schriftlich fest, was, warum und ab wann sich ändert.'],
      ['Häufigste Ursache falscher Stände?', 'Mündliche oder nur an eine Person gerichtete Änderungen und nicht eingezogene Altzeichnungen.'],
      ['Was passiert mit Altteilen im Lager?', 'Die Änderungsmitteilung entscheidet: verwenden, nacharbeiten oder verschrotten.'],
      ['Wo muss der Index stehen?', 'In Bestellung, Zeichnung, Lieferschein und Qualitätsdokumenten.']
    ],
    cta_h3: 'Lieferant mit sauberer Revisionsführung gesucht?',
    cta_p: 'Senden Sie Zeichnungen und Bestellplanung; wir erstellen unser Angebot.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Revisiones de plano y gestión de cambios (ECN): evitar fabricar a la revisión equivocada',
    meta: 'Cómo gestionar revisiones de plano y notificaciones de cambio de ingeniería (ECN) al comprar piezas soldadas: control de revisiones, efecto en oferta y plazo, fecha de entrada, piezas en tránsito y en stock, primera pieza y registros.',
    og: 'Revisiones de plano y gestión de cambios',
    tag: 'Guía de compras · Proceso',
    h1: 'Revisiones de plano y gestión de cambios (ECN): evitar fabricar a la revisión equivocada',
    crumb: 'Revisiones de plano',
    read: '6 min de lectura',
    body: `
<p>Uno de los errores más caros en la cadena de suministro es una pieza perfecta, pero fabricada a la revisión antigua. Cordones limpios, cotas en tolerancia, pintura correcta; pero un taladro se ha movido 20 mm en el plano nuevo y la pieza no monta. El problema rara vez empieza en el taller; casi siempre tiene que ver con cómo se comunicó el cambio.</p>
<h2>Cómo ocurre</h2>
<ul>
<li>El plano nuevo se envía por correo a una persona y la copia del taller sigue igual.</li>
<li>La revisión del pedido no coincide con la del plano adjunto.</li>
<li>El cambio se comunica de palabra, sin registro escrito.</li>
<li>El programa láser sigue con el DXF antiguo; nadie avisó al socio de corte.</li>
</ul>
<h2>Un proceso de cambios sólido</h2>
<ul>
<li><strong>Revisión en el pedido:</strong> cada línea lleva número de pieza y letra de revisión. Al recibirlo, el proveedor compara plano y pedido.</li>
<li><strong>Notificación de cambio escrita (ECN):</strong> qué cambia, por qué, desde qué pedidos y qué pasa con las piezas antiguas. Las zonas modificadas se marcan en el plano.</li>
<li><strong>Evaluación de impacto:</strong> el proveedor informa del efecto en precio, material, utillajes, programas de corte, WPS y plazo.</li>
<li><strong>Punto de entrada:</strong> desde qué lote o número de serie aplica la nueva revisión y si las piezas en tránsito y en stock se usan, se retrabajan o se desechan.</li>
<li><strong>Retirada de documentos antiguos:</strong> planos y programas antiguos en taller, en el socio de corte y en calidad se retiran o se marcan como "obsoletos".</li>
<li><strong>Control de primera pieza:</strong> en cambios importantes, la primera pieza de la nueva revisión se mide y aprueba (ver <a href="ilk-parca-onayi-kaynakli-imalat.html">aprobación de primera pieza</a>).</li>
</ul>
<h2>Trazabilidad</h2>
<p>Debe quedar registrado a qué revisión se fabricó cada lote entregado. Indicarla en el albarán y en los documentos de calidad facilita rastrear un problema de campo (ver <a href="kaynakta-dijital-izlenebilirlik.html">trazabilidad digital</a>).</p>
<h2>Incluirlo en el acuerdo de calidad</h2>
<p>Cómo se envían las notificaciones, el plazo de respuesta del proveedor y cómo comunica sus propios cambios de proceso (origen del material, subproveedores, proceso de soldeo) deben definirse en el <a href="kalite-anlasmasi-qaa-kaynak-tedarikcisi.html">acuerdo de calidad</a>.</p>
<div class="callout"><p><strong>En ArmaWeld:</strong> registramos los pedidos con número de pieza y revisión, y ante un cambio de plano informamos por escrito del efecto en precio, plazo y stock. Retiramos planos y programas de corte antiguos en nuestro taller y en nuestros socios. <a href="../cizime-gore-imalat.html">Fabricación según plano →</a></p></div>
`,
    faq: [
      ['¿Qué es un ECN?', 'Una notificación de cambio de ingeniería: deja por escrito qué cambia, por qué y desde cuándo.'],
      ['¿Causa más frecuente de fabricar a revisión errónea?', 'Cambios comunicados de palabra o a una sola persona y planos antiguos no retirados.'],
      ['¿Qué pasa con las piezas antiguas en stock?', 'Lo decide la notificación: usar, retrabajar o desechar.'],
      ['¿Dónde debe figurar la revisión?', 'En pedido, plano, albarán y documentos de calidad.']
    ],
    cta_h3: '¿Busca un proveedor con buen control de revisiones?',
    cta_p: 'Envíe planos y plan de pedidos; prepararemos la oferta.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Indices de plan et gestion des modifications (ECN) : éviter de fabriquer au mauvais indice',
    meta: 'Comment gérer les indices de plan et les avis de modification (ECN) lors de l\'achat de pièces soudées : maîtrise des indices, impact sur devis et délai, date d\'application, pièces en transit et en stock, première pièce et enregistrements.',
    og: 'Indices de plan et gestion des modifications',
    tag: 'Guide achats · Processus',
    h1: 'Indices de plan et gestion des modifications (ECN) : éviter de fabriquer au mauvais indice',
    crumb: 'Indices de plan',
    read: '6 min de lecture',
    body: `
<p>L'une des erreurs les plus coûteuses d'une chaîne d'approvisionnement : une pièce parfaitement fabriquée, mais à l'ancien indice. Soudures propres, cotes dans la tolérance, peinture impeccable ; mais un trou a bougé de 20 mm sur le nouveau plan et la pièce ne se monte pas. Le problème naît rarement à l'atelier ; il tient presque toujours à la façon dont la modification a été transmise.</p>
<h2>Comment cela arrive</h2>
<ul>
<li>Le nouveau plan part par e-mail à une personne ; le tirage de l'atelier ne change pas.</li>
<li>L'indice de la commande diffère de celui du plan joint.</li>
<li>La modification est transmise oralement, sans trace écrite.</li>
<li>Le programme laser utilise encore l'ancien DXF ; le partenaire de découpe n'a pas été prévenu.</li>
</ul>
<h2>Un processus de modification solide</h2>
<ul>
<li><strong>Indice sur la commande :</strong> chaque ligne porte référence et indice. À réception, le fournisseur compare plan et commande.</li>
<li><strong>Avis de modification écrit (ECN) :</strong> quoi, pourquoi, à partir de quelles commandes et sort des anciennes pièces. Les zones modifiées sont repérées sur le plan.</li>
<li><strong>Analyse d'impact :</strong> le fournisseur indique l'effet sur prix, matière, gabarits, programmes de découpe, DMOS et délai.</li>
<li><strong>Point d'application :</strong> à partir de quel lot ou numéro de série le nouvel indice s'applique, et si les pièces en transit et en stock sont utilisées, retouchées ou rebutées.</li>
<li><strong>Retrait des anciens documents :</strong> plans et programmes périmés à l'atelier, chez le partenaire de découpe et au contrôle qualité sont retirés ou marqués « périmés ».</li>
<li><strong>Contrôle de première pièce :</strong> pour les modifications importantes, la première pièce du nouvel indice est mesurée et validée (voir <a href="ilk-parca-onayi-kaynakli-imalat.html">approbation de première pièce</a>).</li>
</ul>
<h2>Traçabilité</h2>
<p>L'indice de fabrication de chaque lot livré doit être enregistré. Le mentionner sur le bon de livraison et les documents qualité facilite la remontée en cas de problème terrain (voir <a href="kaynakta-dijital-izlenebilirlik.html">traçabilité numérique</a>).</p>
<h2>À intégrer à l'accord qualité</h2>
<p>Mode de transmission des avis, délai de réponse du fournisseur et façon dont il signale ses propres changements de procédé (origine matière, sous-traitants, procédé de soudage) doivent figurer dans l'<a href="kalite-anlasmasi-qaa-kaynak-tedarikcisi.html">accord qualité</a>.</p>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> nous enregistrons les commandes avec référence et indice, et lors d'une modification de plan nous indiquons par écrit l'impact sur prix, délai et stock. Les anciens plans et programmes de découpe sont retirés dans notre atelier et chez nos partenaires. <a href="../cizime-gore-imalat.html">Fabrication sur plan →</a></p></div>
`,
    faq: [
      ['Qu\'est-ce qu\'un ECN ?', 'Un avis de modification : il consigne par écrit ce qui change, pourquoi et à partir de quand.'],
      ['Cause la plus fréquente de fabrication au mauvais indice ?', 'Modifications transmises oralement ou à une seule personne, anciens plans non retirés.'],
      ['Que deviennent les anciennes pièces en stock ?', 'L\'avis de modification le décide : utiliser, retoucher ou rebuter.'],
      ['Où l\'indice doit-il apparaître ?', 'Sur commande, plan, bon de livraison et documents qualité.']
    ],
    cta_h3: 'Vous cherchez un fournisseur rigoureux sur les indices ?',
    cta_p: 'Envoyez plans et plan de commandes ; nous préparerons notre devis.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Revisioni di disegno e gestione delle modifiche (ECN): evitare di produrre alla revisione sbagliata',
    meta: 'Come gestire revisioni di disegno e notifiche di modifica (ECN) nell\'acquisto di pezzi saldati: controllo revisioni, effetto su offerta e consegna, data di introduzione, pezzi in transito e a magazzino, primo pezzo e registrazioni.',
    og: 'Revisioni di disegno e gestione delle modifiche',
    tag: 'Guida acquisti · Processo',
    h1: 'Revisioni di disegno e gestione delle modifiche (ECN): evitare di produrre alla revisione sbagliata',
    crumb: 'Revisioni di disegno',
    read: '6 min di lettura',
    body: `
<p>Uno degli errori più costosi nella filiera è un pezzo prodotto perfettamente, ma alla revisione vecchia. Cordoni puliti, quote in tolleranza, vernice impeccabile; ma un foro si è spostato di 20 mm nel nuovo disegno e il pezzo non si monta. Il problema raramente nasce in officina; quasi sempre riguarda come è stata comunicata la modifica.</p>
<h2>Come succede</h2>
<ul>
<li>Il nuovo disegno arriva per e-mail a una persona; la stampa in officina resta quella vecchia.</li>
<li>La revisione sull'ordine è diversa da quella del disegno allegato.</li>
<li>La modifica è comunicata a voce, senza traccia scritta.</li>
<li>Il programma laser usa ancora il vecchio DXF; il partner di taglio non è stato avvisato.</li>
</ul>
<h2>Un processo di modifica solido</h2>
<ul>
<li><strong>Revisione sull'ordine:</strong> ogni riga riporta codice e lettera di revisione. Alla ricezione il fornitore confronta disegno e ordine.</li>
<li><strong>Notifica di modifica scritta (ECN):</strong> cosa cambia, perché, da quali ordini e cosa succede ai pezzi vecchi. Le zone modificate sono evidenziate sul disegno.</li>
<li><strong>Valutazione d'impatto:</strong> il fornitore indica l'effetto su prezzo, materiale, attrezzature, programmi di taglio, WPS e consegna.</li>
<li><strong>Punto di introduzione:</strong> da quale lotto o numero di serie vale la nuova revisione e se i pezzi in transito e a magazzino si usano, si rilavorano o si scartano.</li>
<li><strong>Ritiro dei documenti vecchi:</strong> disegni e programmi superati in officina, presso il partner di taglio e in qualità vengono ritirati o marcati "superati".</li>
<li><strong>Controllo del primo pezzo:</strong> per modifiche importanti, il primo pezzo della nuova revisione viene misurato e approvato (vedi <a href="ilk-parca-onayi-kaynakli-imalat.html">approvazione del primo pezzo</a>).</li>
</ul>
<h2>Tracciabilità</h2>
<p>Va registrato a quale revisione è stato prodotto ogni lotto consegnato. Indicarla su DDT e documenti di qualità facilita le indagini in caso di problemi sul campo (vedi <a href="kaynakta-dijital-izlenebilirlik.html">tracciabilità digitale</a>).</p>
<h2>Da inserire nell'accordo qualità</h2>
<p>Modalità di invio delle notifiche, tempi di risposta del fornitore e come questi comunica le proprie modifiche di processo (origine materiale, subfornitori, procedimento di saldatura) vanno definiti nell'<a href="kalite-anlasmasi-qaa-kaynak-tedarikcisi.html">accordo qualità</a>.</p>
<div class="callout"><p><strong>In ArmaWeld:</strong> registriamo gli ordini con codice e revisione e, in caso di modifica del disegno, comunichiamo per iscritto l'effetto su prezzo, tempi e scorte. Ritiriamo disegni e programmi di taglio superati sia in officina sia presso i partner. <a href="../cizime-gore-imalat.html">Produzione su disegno →</a></p></div>
`,
    faq: [
      ['Cos\'è un ECN?', 'Una notifica di modifica: fissa per iscritto cosa cambia, perché e da quando.'],
      ['Causa più comune della revisione sbagliata?', 'Modifiche comunicate a voce o a una sola persona e disegni vecchi non ritirati.'],
      ['Cosa succede ai pezzi vecchi a magazzino?', 'Lo decide la notifica: usare, rilavorare o scartare.'],
      ['Dove deve comparire la revisione?', 'Su ordine, disegno, DDT e documenti di qualità.']
    ],
    cta_h3: 'Cercate un fornitore rigoroso sulle revisioni?',
    cta_p: 'Inviate disegni e piano ordini; prepareremo l\'offerta.',
    cta_btn: 'Richiedi offerta →'
  },
  nl: {
    title: 'Tekeningrevisies en wijzigingsbeheer (ECN): productie op de verkeerde revisie voorkomen',
    meta: 'Hoe je tekeningrevisies en engineering change notices (ECN) beheert bij inkoop van laswerk: revisiebeheer, effect op offerte en levering, invoerdatum, onderweg en op voorraad liggende delen, eerste-artikelkeuring en registratie.',
    og: 'Tekeningrevisies en wijzigingsbeheer',
    tag: 'Inkoopgids · Proces',
    h1: 'Tekeningrevisies en wijzigingsbeheer (ECN): productie op de verkeerde revisie voorkomen',
    crumb: 'Tekeningrevisies',
    read: '6 min lezen',
    body: `
<p>Een van de duurste fouten in de toeleverketen is een perfect gemaakt deel, maar op de oude revisie. Lassen strak, maten binnen tolerantie, lak in orde; maar een gat is op de nieuwe tekening 20 mm verschoven en het deel past niet. Het probleem begint zelden in de werkplaats; meestal gaat het om hoe de wijziging is doorgegeven.</p>
<h2>Hoe het misgaat</h2>
<ul>
<li>De nieuwe tekening gaat per e-mail naar één persoon; de print in de werkplaats blijft hetzelfde.</li>
<li>De revisie op de inkooporder wijkt af van de bijgevoegde tekening.</li>
<li>De wijziging wordt mondeling doorgegeven, zonder schriftelijk spoor.</li>
<li>Het laserprogramma gebruikt nog de oude DXF; de snijpartner is niet ingelicht.</li>
</ul>
<h2>Een robuust wijzigingsproces</h2>
<ul>
<li><strong>Revisie op de order:</strong> elke orderregel bevat artikelnummer en revisieletter. Bij ontvangst vergelijkt de leverancier tekening en order.</li>
<li><strong>Schriftelijke wijzigingsmelding (ECN):</strong> wat, waarom, vanaf welke orders en wat er met oude delen gebeurt. Gewijzigde zones worden op de tekening gemarkeerd.</li>
<li><strong>Impactbeoordeling:</strong> de leverancier meldt het effect op prijs, materiaal, mallen, snijprogramma's, WPS en levertijd.</li>
<li><strong>Invoerpunt:</strong> vanaf welke batch of welk serienummer de nieuwe revisie geldt en of delen onderweg en op voorraad gebruikt, herbewerkt of afgekeurd worden.</li>
<li><strong>Intrekken van oude documenten:</strong> oude tekeningen en programma's in de werkplaats, bij de snijpartner en bij kwaliteitscontrole worden ingetrokken of als "vervallen" gemarkeerd.</li>
<li><strong>Eerste-artikelkeuring:</strong> bij belangrijke wijzigingen wordt het eerste deel van de nieuwe revisie gemeten en goedgekeurd (zie <a href="ilk-parca-onayi-kaynakli-imalat.html">eerste-artikelgoedkeuring</a>).</li>
</ul>
<h2>Traceerbaarheid</h2>
<p>Per geleverde batch moet vastliggen op welke revisie hij gemaakt is. De revisie op pakbon en kwaliteitsdocumenten maakt terugzoeken bij veldproblemen eenvoudig (zie <a href="kaynakta-dijital-izlenebilirlik.html">digitale traceerbaarheid</a>).</p>
<h2>Opnemen in de kwaliteitsovereenkomst</h2>
<p>Hoe wijzigingsmeldingen worden verstuurd, de reactietijd van de leverancier en hoe die eigen proceswijzigingen (materiaalbron, onderleveranciers, lasproces) meldt, horen in de <a href="kalite-anlasmasi-qaa-kaynak-tedarikcisi.html">kwaliteitsovereenkomst</a>.</p>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> we leggen orders vast met artikelnummer en revisie en melden bij tekeningwijzigingen schriftelijk het effect op prijs, planning en voorraad. Oude tekeningen en snijprogramma's trekken we in, zowel in onze werkplaats als bij onze partners. <a href="../cizime-gore-imalat.html">Productie volgens tekening →</a></p></div>
`,
    faq: [
      ['Wat is een ECN?', 'Een engineering change notice: legt schriftelijk vast wat, waarom en vanaf wanneer verandert.'],
      ['Meest voorkomende oorzaak van een verkeerde revisie?', 'Mondelinge of aan één persoon gerichte wijzigingen en niet-ingetrokken oude tekeningen.'],
      ['Wat gebeurt er met oude delen op voorraad?', 'De wijzigingsmelding beslist: gebruiken, herbewerken of afkeuren.'],
      ['Waar moet de revisie staan?', 'Op order, tekening, pakbon en kwaliteitsdocumenten.']
    ],
    cta_h3: 'Op zoek naar een leverancier met strak revisiebeheer?',
    cta_p: 'Stuur tekeningen en orderplanning; we stellen een offerte op.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Tegningsrevisjoner og endringsstyring (ECN): unngå produksjon etter feil revisjon',
    meta: 'Slik styres tegningsrevisjoner og endringsmeldinger (ECN) ved innkjøp av sveisedeler: revisjonskontroll, effekt på tilbud og levering, innføringsdato, deler underveis og på lager, førsteartikkelkontroll og dokumentasjon.',
    og: 'Tegningsrevisjoner og endringsstyring',
    tag: 'Innkjøpsguide · Prosess',
    h1: 'Tegningsrevisjoner og endringsstyring (ECN): unngå produksjon etter feil revisjon',
    crumb: 'Tegningsrevisjoner',
    read: '6 min lesing',
    body: `
<p>En av de dyreste feilene i en leverandørkjede er en perfekt produsert del, men etter gammel revisjon. Sveisene er rene, målene innenfor toleranse, malingen fin; men et hull er flyttet 20 mm på den nye tegningen, og delen passer ikke. Problemet starter sjelden på verkstedet; som regel handler det om hvordan endringen ble formidlet.</p>
<h2>Slik skjer det</h2>
<ul>
<li>Ny tegning sendes på e-post til én person; utskriften på verkstedet er uendret.</li>
<li>Revisjonen på bestillingen avviker fra vedlagt tegning.</li>
<li>Endringen gis muntlig, uten skriftlig spor.</li>
<li>Laserprogrammet bruker fortsatt gammel DXF; kuttepartneren er ikke varslet.</li>
</ul>
<h2>En robust endringsprosess</h2>
<ul>
<li><strong>Revisjon på bestillingen:</strong> hver linje har delenummer og revisjonsbokstav. Ved mottak sammenligner leverandøren tegning og bestilling.</li>
<li><strong>Skriftlig endringsmelding (ECN):</strong> hva, hvorfor, fra hvilke bestillinger og hva som skjer med gamle deler. Endrede områder markeres på tegningen.</li>
<li><strong>Konsekvensvurdering:</strong> leverandøren rapporterer effekt på pris, materiale, jigger, kutteprogrammer, WPS og leveringsdato.</li>
<li><strong>Innføringspunkt:</strong> fra hvilket parti eller serienummer ny revisjon gjelder, og om deler underveis og på lager brukes, omarbeides eller kasseres.</li>
<li><strong>Tilbaketrekking av gamle dokumenter:</strong> gamle tegninger og programmer på verkstedet, hos kuttepartneren og i kvalitetskontrollen trekkes tilbake eller merkes «utgått».</li>
<li><strong>Førsteartikkelkontroll:</strong> ved vesentlige endringer måles og godkjennes første del av ny revisjon (se <a href="ilk-parca-onayi-kaynakli-imalat.html">førsteartikkelgodkjenning</a>).</li>
</ul>
<h2>Sporbarhet</h2>
<p>Det skal være registrert hvilken revisjon hvert levert parti er laget etter. Revisjon på følgeseddel og kvalitetsdokumenter gjør det enkelt å spore tilbake ved feltproblemer (se <a href="kaynakta-dijital-izlenebilirlik.html">digital sporbarhet</a>).</p>
<h2>Ta det inn i kvalitetsavtalen</h2>
<p>Hvordan endringsmeldinger sendes, leverandørens svartid og hvordan leverandøren varsler egne prosessendringer (materialkilde, underleverandører, sveiseprosess) bør defineres i <a href="kalite-anlasmasi-qaa-kaynak-tedarikcisi.html">kvalitetsavtalen</a>.</p>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> vi registrerer bestillinger med delenummer og revisjon, og ved tegningsendringer melder vi skriftlig effekten på pris, tidsplan og lager. Gamle tegninger og kutteprogrammer trekkes tilbake både på vårt verksted og hos partnerne våre. <a href="../cizime-gore-imalat.html">Produksjon etter tegning →</a></p></div>
`,
    faq: [
      ['Hva er en ECN?', 'En endringsmelding: den slår skriftlig fast hva som endres, hvorfor og fra når.'],
      ['Vanligste årsak til feil revisjon?', 'Endringer gitt muntlig eller til én person, og gamle tegninger som ikke trekkes tilbake.'],
      ['Hva skjer med gamle deler på lager?', 'Endringsmeldingen avgjør: bruke, omarbeide eller kassere.'],
      ['Hvor skal revisjonen stå?', 'På bestilling, tegning, følgeseddel og kvalitetsdokumenter.']
    ],
    cta_h3: 'Leter du etter en leverandør med god revisjonskontroll?',
    cta_p: 'Send tegninger og bestillingsplan; vi utarbeider tilbud.',
    cta_btn: 'Be om tilbud →'
  }
};
