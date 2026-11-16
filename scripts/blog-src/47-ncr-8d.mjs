export default {
  order: 47,
  slug: 'uygunsuzluk-raporu-ncr-8d-kaynakli-imalat',
  key: 'p47_ncr',
  date: '2026-08-25',
  keywords: 'uygunsuzluk raporu, NCR nedir, 8D raporu, 8D adımları, kök neden analizi, 5 neden, balık kılçığı, düzeltici faaliyet, kaynak hatası kök neden, sapma izni, nonconformance report welding, 8D-Report Schweißen',
  related: ['kaynak-hatalari-onarim', 'kaynak-kalite-kontrol', 'iso-5817-kalite-seviyeleri', 'kaynak-muayene-raporu-nasil-okunur'],
  tr: {
    title: 'Kaynaklı İmalatta Uygunsuzluk Raporu (NCR) ve 8D: Hatadan Kalıcı Çözüme',
    meta: 'Kaynaklı parçada bir hata çıktığında ne yapılır? NCR’de olması gerekenler, karar seçenekleri (olduğu gibi kullan, onar, yeniden işle, hurdaya ayır), 8D’nin sekiz adımı, kaynakta tipik kök nedenler, 5 Neden ve balık kılçığı analizi, düzeltici faaliyetin etkinlik doğrulaması.',
    og: 'NCR ve 8D',
    tag: 'Kalite · Uygunsuzluk',
    h1: 'Kaynaklı İmalatta Uygunsuzluk Raporu (NCR) ve 8D: Hatadan Kalıcı Çözüme',
    crumb: 'NCR ve 8D',
    read: '8 dk okuma',
    body: `
<p>Hiçbir imalatçı sıfır hatayla çalışmaz; farkı yaratan, hatanın nasıl ele alındığıdır. Avrupalı alıcılar bir tedarikçiyi değerlendirirken “hiç hata yaptınız mı?” diye değil, “hata yaptığınızda ne yaptınız?” diye sorar. Bu yazıda kaynaklı imalatta uygunsuzluk raporu (NCR) ve 8D yönteminin pratikte nasıl işlediğini anlattık.</p>
<h2>Uygunsuzluk Nedir?</h2>
<p>Ürünün çizim, şartname, standart veya sözleşme gerekliliklerinden herhangi birini karşılamamasıdır. Kaynaklı imalatta tipik örnekler:</p>
<ul>
<li>NDT’de kabul sınırını aşan bir kusur (çatlak, ergime yetersizliği, gözenek),</li>
<li>Ölçü veya tolerans dışı parça,</li>
<li>Eksik veya yanlış ölçüde kaynak dikişi,</li>
<li>Yanlış malzeme veya eksik sertifika,</li>
<li>Yüzey hazırlığında veya boya kalınlığında sapma,</li>
<li>Yanlış WPS ile veya nitelikli olmayan personelle yapılmış kaynak.</li>
</ul>
<h2>NCR’de Neler Olmalı?</h2>
<ul>
<li>NCR numarası, tarih ve açan kişi,</li>
<li>Sipariş, parça numarası, revizyon ve etkilenen adet,</li>
<li>Gereklilik ile bulgunun açık tanımı (fotoğraf, ölçü, rapor numarası),</li>
<li>Hatanın tespit edildiği yer: giriş, üretim, son kontrol veya müşteri,</li>
<li>Acil önlem (etkilenen parçaların ayrılması),</li>
<li>Karar ve kararı veren,</li>
<li>Kök neden ve düzeltici faaliyet (gerekiyorsa 8D’ye bağlantı),</li>
<li>Kapanış tarihi ve doğrulama.</li>
</ul>
<h2>Karar Seçenekleri</h2>
<table>
<thead><tr><th>Karar</th><th>Anlamı</th><th>Not</th></tr></thead>
<tbody>
<tr><td>Olduğu gibi kullan</td><td>Parça değiştirilmeden kabul edilir</td><td>Gereklilikten sapma varsa müşterinin yazılı sapma izni şarttır</td></tr>
<tr><td>Onar</td><td>Gerekliliği tam karşılamasa da kullanılabilir hale getirilir</td><td>Onarım prosedürü ve müşteri onayı gerekebilir</td></tr>
<tr><td>Yeniden işle</td><td>Parça gerekliliği tam karşılayacak şekilde düzeltilir</td><td>Örneğin kusurlu kaynağın oyulup yeniden yapılması</td></tr>
<tr><td>Hurdaya ayır</td><td>Parça kullanılmaz</td><td>Yeni parça üretilir</td></tr>
<tr><td>Tedarikçiye iade</td><td>Hata gelen malzeme veya parçadadır</td><td>Tedarikçiye NCR açılır</td></tr>
</tbody>
</table>
<p>Kaynak onarımlarında, onarımın kendi WPS’i ile yapılması ve onarılan bölgenin aynı veya daha sıkı muayeneden geçmesi gerekir (bkz. <a href="kaynak-hatalari-onarim.html">kaynak hataları ve onarım</a>).</p>
<h2>8D Nedir?</h2>
<p>8D, özellikle müşteriye ulaşan veya tekrar eden hatalarda kullanılan sekiz adımlı bir problem çözme yöntemidir. Amaç sadece parçayı düzeltmek değil, hatanın bir daha oluşmamasını sağlamaktır.</p>
<table>
<thead><tr><th>Adım</th><th>İçerik</th></tr></thead>
<tbody>
<tr><td>D0</td><td>Hazırlık: problemin 8D gerektirip gerektirmediğine karar</td></tr>
<tr><td>D1</td><td>Ekip: kaynak koordinatörü, kalite, üretim, gerekirse tasarım</td></tr>
<tr><td>D2</td><td>Problem tanımı: ne, nerede, ne zaman, kaç adet, nasıl tespit edildi</td></tr>
<tr><td>D3</td><td>Geçici önlem: stoktaki, yoldaki ve müşterideki parçaların ayıklanması</td></tr>
<tr><td>D4</td><td>Kök neden: hatanın neden oluştuğu ve neden yakalanamadığı</td></tr>
<tr><td>D5</td><td>Kalıcı düzeltici faaliyetin seçilmesi</td></tr>
<tr><td>D6</td><td>Uygulama ve etkinliğin doğrulanması</td></tr>
<tr><td>D7</td><td>Önleme: benzer parça ve süreçlere yayma, belgeleri güncelleme</td></tr>
<tr><td>D8</td><td>Kapanış ve ekibin takdiri</td></tr>
</tbody>
</table>
<h2>İki Kök Neden: Oluşma ve Kaçma</h2>
<p>İyi bir 8D iki soruyu ayrı ayrı cevaplar: Hata neden oluştu? Ve neden kontrolde yakalanmadı? Örneğin bir köşe kaynağında ölçü eksikliği kaynakçının yanlış parametresinden oluşmuş olabilir; ama müşteriye ulaşmasının nedeni, son kontrolde kaynak ölçü mastarı kullanılmamasıdır. İkisi için ayrı önlem gerekir.</p>
<h2>Kaynakta Tipik Kök Nedenler</h2>
<ul>
<li>Yanlış veya güncel olmayan WPS kullanımı,</li>
<li>Parametrelerin WPS aralığı dışına kayması,</li>
<li>Kaynak ağzı hazırlığında veya kök aralığında sapma,</li>
<li>Nem almış sarf malzeme veya yetersiz ön ısıtma,</li>
<li>Çizimdeki kaynak sembolünün yanlış okunması,</li>
<li>Yetersiz puntalama veya yanlış kaynak sırası nedeniyle çarpılma,</li>
<li>Erişimi zor dikişlerde yetersiz ergime.</li>
</ul>
<h2>Kök Neden Analizi Araçları</h2>
<p><strong>5 Neden:</strong> “Neden?” sorusunu, gerçek nedene ulaşana kadar tekrar sormak. “Kaynakçı hata yaptı” bir kök neden değildir; kaynakçının neden hata yapabildiğini sormak gerekir: talimat eksik mi, fikstür yanlış mı, eğitim yetersiz mi?</p>
<p><strong>Balık kılçığı (Ishikawa):</strong> Olası nedenleri insan, makine, malzeme, yöntem, ölçüm ve çevre başlıklarında toplamak. Kaynakta “çevre” başlığı genellikle nem, sıcaklık ve hava akımını kapsar.</p>
<h2>Etkinlik Doğrulaması</h2>
<p>Düzeltici faaliyetin işe yaradığı veriyle gösterilmelidir: sonraki partilerde aynı hatanın tekrar etmemesi, NDT sonuçlarının iyileşmesi, ölçü raporlarının tolerans içinde kalması gibi. Doğrulanmadan kapatılan bir 8D, müşteri açısından kapanmış sayılmaz.</p>
<h2>Müşteriyle İletişim</h2>
<ul>
<li>Hata fark edildiği anda, kök neden belli olmasa bile bildirin.</li>
<li>Geçici önlemi ve etkilenen adetleri net yazın.</li>
<li>8D’nin ilk adımları (D1-D3) için genellikle kısa bir süre, tamamı için daha uzun bir süre beklenir; müşterinin kalite anlaşmasındaki süreleri takip edin.</li>
</ul>
<div class="callout"><p><strong>ArmaWeld'de:</strong> Uygunsuzluklar kayıt altına alınır, etkilenen parçalar ayrılır ve kaynak koordinasyonu ile kalite birlikte kök neden analizi yapar. Müşteri şikâyetlerinde 8D formatında rapor veririz. <a href="../kalite.html">Kalite yaklaşımımız →</a></p></div>
`,
    faq: [
      ['NCR ile 8D arasındaki fark nedir?', 'NCR tek bir uygunsuzluğun kaydı ve kararıdır. 8D, özellikle müşteriye ulaşan veya tekrar eden hatalarda kök nedeni bulup kalıcı çözüm üreten sekiz adımlı yöntemdir.'],
      ['Olduğu gibi kullan kararı ne zaman verilebilir?', 'Parça işlevini etkilemeyen bir sapma varsa ve müşteri yazılı sapma izni verdiyse.'],
      ['Kök neden analizinde hangi araçlar kullanılır?', 'En yaygınları 5 Neden ve balık kılçığı (Ishikawa) diyagramıdır.'],
      ['8D ne zaman kapanır?', 'Düzeltici faaliyetin etkinliği veriyle doğrulandıktan ve benzer süreçlere yayıldıktan sonra.']
    ],
    cta_h3: 'Hatayı kalıcı olarak çözen bir tedarikçi',
    cta_p: 'Çizim ve kalite gerekliliklerinizi gönderin; kalite planıyla teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'Nonconformance Reports (NCR) and 8D in Welded Fabrication: From Defect to Lasting Fix',
    meta: 'What to do when a welded part fails? What an NCR should contain, disposition options (use as is, repair, rework, scrap), the eight 8D steps, typical root causes in welding, 5 Whys and fishbone analysis, and verifying the effectiveness of corrective action.',
    og: 'NCR and 8D',
    tag: 'Quality · Nonconformity',
    h1: 'Nonconformance Reports (NCR) and 8D in Welded Fabrication: From Defect to Lasting Fix',
    crumb: 'NCR and 8D',
    read: '8 min read',
    body: `
<p>No fabricator works with zero defects; what makes the difference is how defects are handled. When European buyers assess a supplier, they don’t ask “have you ever made a mistake?” but “what did you do when you did?” This article explains how nonconformance reports (NCRs) and the 8D method work in welded fabrication.</p>
<h2>What Is a Nonconformity?</h2>
<p>A product failing to meet any requirement of the drawing, specification, standard or contract. Typical examples in welded fabrication:</p>
<ul>
<li>An NDT indication beyond acceptance limits (crack, lack of fusion, porosity),</li>
<li>A part out of dimension or tolerance,</li>
<li>A missing or undersized weld,</li>
<li>Wrong material or missing certificate,</li>
<li>Deviation in surface preparation or paint thickness,</li>
<li>A weld made with the wrong WPS or by unqualified personnel.</li>
</ul>
<h2>What an NCR Should Contain</h2>
<ul>
<li>NCR number, date and originator,</li>
<li>Order, part number, revision and affected quantity,</li>
<li>Clear statement of requirement versus finding (photos, measurements, report numbers),</li>
<li>Where it was found: receiving, production, final inspection or customer,</li>
<li>Immediate action (segregating affected parts),</li>
<li>Disposition and who decided it,</li>
<li>Root cause and corrective action (with a link to an 8D if needed),</li>
<li>Close-out date and verification.</li>
</ul>
<h2>Disposition Options</h2>
<table>
<thead><tr><th>Disposition</th><th>Meaning</th><th>Note</th></tr></thead>
<tbody>
<tr><td>Use as is</td><td>Part accepted without change</td><td>Requires a written customer concession if it deviates from a requirement</td></tr>
<tr><td>Repair</td><td>Made usable though not fully meeting the requirement</td><td>May need a repair procedure and customer approval</td></tr>
<tr><td>Rework</td><td>Corrected to fully meet the requirement</td><td>For example gouging out and rewelding a defective weld</td></tr>
<tr><td>Scrap</td><td>Part not used</td><td>A new part is made</td></tr>
<tr><td>Return to supplier</td><td>Defect is in incoming material or part</td><td>An NCR is raised with the supplier</td></tr>
</tbody>
</table>
<p>Weld repairs must be made to their own WPS and the repaired area must pass the same or stricter inspection (see <a href="kaynak-hatalari-onarim.html">weld defects and repair</a>).</p>
<h2>What Is 8D?</h2>
<p>8D is an eight-step problem-solving method used especially for defects that reach the customer or recur. The goal is not just to fix the part but to make sure the defect does not happen again.</p>
<table>
<thead><tr><th>Step</th><th>Content</th></tr></thead>
<tbody>
<tr><td>D0</td><td>Preparation: decide whether the problem needs an 8D</td></tr>
<tr><td>D1</td><td>Team: welding coordinator, quality, production, design if needed</td></tr>
<tr><td>D2</td><td>Problem description: what, where, when, how many, how detected</td></tr>
<tr><td>D3</td><td>Containment: sorting parts in stock, in transit and at the customer</td></tr>
<tr><td>D4</td><td>Root cause: why it happened and why it was not caught</td></tr>
<tr><td>D5</td><td>Choosing permanent corrective actions</td></tr>
<tr><td>D6</td><td>Implementation and verification of effectiveness</td></tr>
<tr><td>D7</td><td>Prevention: extend to similar parts and processes, update documents</td></tr>
<tr><td>D8</td><td>Closure and team recognition</td></tr>
</tbody>
</table>
<h2>Two Root Causes: Occurrence and Escape</h2>
<p>A good 8D answers two questions separately: why did the defect occur, and why wasn’t it caught? For example, an undersized fillet weld may have occurred because of a wrong welder setting; but it reached the customer because no weld gauge was used at final inspection. Each needs its own action.</p>
<h2>Typical Root Causes in Welding</h2>
<ul>
<li>Using a wrong or outdated WPS,</li>
<li>Parameters drifting outside the WPS range,</li>
<li>Deviation in joint preparation or root gap,</li>
<li>Damp consumables or insufficient preheat,</li>
<li>Misreading the weld symbol on the drawing,</li>
<li>Distortion from poor tacking or wrong weld sequence,</li>
<li>Lack of fusion in welds with poor access.</li>
</ul>
<h2>Root Cause Analysis Tools</h2>
<p><strong>5 Whys:</strong> asking “why?” repeatedly until reaching the real cause. “The welder made a mistake” is not a root cause; ask why the mistake was possible: missing instructions, wrong fixture, insufficient training?</p>
<p><strong>Fishbone (Ishikawa):</strong> grouping possible causes under people, machine, material, method, measurement and environment. In welding, “environment” usually covers humidity, temperature and draughts.</p>
<h2>Verifying Effectiveness</h2>
<p>Corrective action must be shown to work with data: no recurrence in later batches, improved NDT results, dimensional reports within tolerance. An 8D closed without verification is not closed in the customer’s eyes.</p>
<h2>Communicating with the Customer</h2>
<ul>
<li>Report the problem as soon as it is noticed, even before the root cause is known.</li>
<li>State containment and affected quantities clearly.</li>
<li>A short time is usually expected for the first steps (D1–D3) and a longer one for the full 8D; follow the times in the customer’s quality agreement.</li>
</ul>
<div class="callout"><p><strong>At ArmaWeld:</strong> nonconformities are recorded, affected parts segregated, and welding coordination and quality carry out root cause analysis together. For customer complaints we report in 8D format. <a href="../kalite.html">Our approach to quality →</a></p></div>
`,
    faq: [
      ['What is the difference between an NCR and an 8D?', 'An NCR records a single nonconformity and its disposition. 8D is an eight-step method to find root causes and lasting fixes, mainly for defects that reach the customer or recur.'],
      ['When can “use as is” be decided?', 'When a deviation does not affect function and the customer has given a written concession.'],
      ['Which root cause tools are used?', 'Most commonly the 5 Whys and the fishbone (Ishikawa) diagram.'],
      ['When is an 8D closed?', 'After the effectiveness of corrective action is verified with data and extended to similar processes.']
    ],
    cta_h3: 'A supplier that fixes problems for good',
    cta_p: 'Send your drawing and quality requirements; we will quote with a quality plan.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'Abweichungsbericht (NCR) und 8D in der Schweißfertigung: vom Fehler zur dauerhaften Lösung',
    meta: 'Was tun, wenn ein Schweißteil fehlerhaft ist? Inhalt eines NCR, Entscheidungsoptionen (Verwendung wie besehen, Reparatur, Nacharbeit, Verschrottung), die acht 8D-Schritte, typische Ursachen beim Schweißen, 5-Why- und Ishikawa-Analyse sowie Wirksamkeitsprüfung der Abstellmaßnahmen.',
    og: 'NCR und 8D',
    tag: 'Qualität · Abweichungen',
    h1: 'Abweichungsbericht (NCR) und 8D in der Schweißfertigung: vom Fehler zur dauerhaften Lösung',
    crumb: 'NCR und 8D',
    read: '8 Min. Lesezeit',
    body: `
<p>Kein Fertiger arbeitet fehlerfrei; entscheidend ist, wie mit Fehlern umgegangen wird. Europäische Einkäufer fragen bei der Lieferantenbewertung nicht „Haben Sie je einen Fehler gemacht?“, sondern „Was haben Sie dann getan?“. Dieser Beitrag erklärt, wie Abweichungsberichte (NCR) und die 8D-Methode in der Schweißfertigung funktionieren.</p>
<h2>Was ist eine Abweichung?</h2>
<p>Ein Produkt erfüllt eine Anforderung aus Zeichnung, Spezifikation, Norm oder Vertrag nicht. Typische Beispiele:</p>
<ul>
<li>ZfP-Anzeige außerhalb der Zulässigkeit (Riss, Bindefehler, Poren),</li>
<li>Teil außerhalb Maß oder Toleranz,</li>
<li>fehlende oder zu kleine Naht,</li>
<li>falscher Werkstoff oder fehlendes Zeugnis,</li>
<li>Abweichung bei Oberflächenvorbereitung oder Schichtdicke,</li>
<li>Naht mit falscher WPS oder durch nicht qualifiziertes Personal.</li>
</ul>
<h2>Inhalt eines NCR</h2>
<ul>
<li>NCR-Nummer, Datum und Ersteller,</li>
<li>Auftrag, Teilenummer, Revision und betroffene Menge,</li>
<li>klare Gegenüberstellung von Anforderung und Befund (Fotos, Messwerte, Berichtsnummern),</li>
<li>Entdeckungsort: Wareneingang, Fertigung, Endprüfung oder Kunde,</li>
<li>Sofortmaßnahme (Aussondern betroffener Teile),</li>
<li>Entscheidung und Entscheider,</li>
<li>Ursache und Abstellmaßnahme (ggf. Verweis auf 8D),</li>
<li>Abschlussdatum und Verifizierung.</li>
</ul>
<h2>Entscheidungsoptionen</h2>
<table>
<thead><tr><th>Entscheidung</th><th>Bedeutung</th><th>Hinweis</th></tr></thead>
<tbody>
<tr><td>Verwendung wie besehen</td><td>Teil wird unverändert angenommen</td><td>Bei Abweichung von einer Anforderung schriftliche Sonderfreigabe des Kunden erforderlich</td></tr>
<tr><td>Reparatur</td><td>Teil wird verwendbar, erfüllt die Anforderung aber nicht vollständig</td><td>Ggf. Reparaturverfahren und Kundenfreigabe nötig</td></tr>
<tr><td>Nacharbeit</td><td>Teil wird so korrigiert, dass es die Anforderung voll erfüllt</td><td>z. B. Ausfugen und Neuschweißen einer fehlerhaften Naht</td></tr>
<tr><td>Verschrottung</td><td>Teil wird nicht verwendet</td><td>Neuteil wird gefertigt</td></tr>
<tr><td>Rücksendung an Lieferanten</td><td>Fehler liegt im Zukaufmaterial oder -teil</td><td>NCR an den Lieferanten</td></tr>
</tbody>
</table>
<p>Schweißreparaturen erfolgen nach eigener WPS, die reparierte Stelle wird gleich oder strenger geprüft (siehe <a href="kaynak-hatalari-onarim.html">Schweißfehler und Reparatur</a>).</p>
<h2>Was ist 8D?</h2>
<p>8D ist eine achtstufige Problemlösungsmethode, vor allem für Fehler, die zum Kunden gelangen oder wiederkehren. Ziel ist nicht nur die Korrektur des Teils, sondern die Vermeidung der Wiederholung.</p>
<table>
<thead><tr><th>Schritt</th><th>Inhalt</th></tr></thead>
<tbody>
<tr><td>D0</td><td>Vorbereitung: Entscheidung, ob ein 8D nötig ist</td></tr>
<tr><td>D1</td><td>Team: Schweißaufsicht, Qualität, Fertigung, ggf. Konstruktion</td></tr>
<tr><td>D2</td><td>Problembeschreibung: was, wo, wann, wie viele, wie entdeckt</td></tr>
<tr><td>D3</td><td>Sofortmaßnahmen: Sortierung von Lager-, Transit- und Kundenbeständen</td></tr>
<tr><td>D4</td><td>Ursachenanalyse: warum entstanden und warum nicht entdeckt</td></tr>
<tr><td>D5</td><td>Auswahl dauerhafter Abstellmaßnahmen</td></tr>
<tr><td>D6</td><td>Umsetzung und Wirksamkeitsnachweis</td></tr>
<tr><td>D7</td><td>Vorbeugung: Übertragung auf ähnliche Teile und Prozesse, Dokumente aktualisieren</td></tr>
<tr><td>D8</td><td>Abschluss und Würdigung des Teams</td></tr>
</tbody>
</table>
<h2>Zwei Ursachen: Entstehung und Nichtentdeckung</h2>
<p>Ein gutes 8D beantwortet zwei Fragen getrennt: Warum ist der Fehler entstanden? Und warum wurde er nicht entdeckt? Eine zu kleine Kehlnaht kann aus falscher Parametereinstellung entstanden sein; zum Kunden gelangte sie, weil in der Endprüfung keine Nahtlehre verwendet wurde. Beides braucht eigene Maßnahmen.</p>
<h2>Typische Ursachen beim Schweißen</h2>
<ul>
<li>falsche oder veraltete WPS,</li>
<li>Parameter außerhalb des WPS-Bereichs,</li>
<li>Abweichung bei Nahtvorbereitung oder Wurzelspalt,</li>
<li>feuchte Zusatzwerkstoffe oder unzureichendes Vorwärmen,</li>
<li>falsch gelesenes Schweißsymbol,</li>
<li>Verzug durch unzureichendes Heften oder falsche Schweißfolge,</li>
<li>Bindefehler an schlecht zugänglichen Nähten.</li>
</ul>
<h2>Werkzeuge der Ursachenanalyse</h2>
<p><strong>5 Why:</strong> so lange „Warum?“ fragen, bis die eigentliche Ursache erreicht ist. „Der Schweißer hat einen Fehler gemacht“ ist keine Ursache; zu fragen ist, warum der Fehler möglich war: fehlende Anweisung, falsche Vorrichtung, unzureichende Schulung?</p>
<p><strong>Ishikawa:</strong> mögliche Ursachen nach Mensch, Maschine, Material, Methode, Messung und Mitwelt ordnen. Beim Schweißen umfasst „Mitwelt“ meist Feuchte, Temperatur und Zugluft.</p>
<h2>Wirksamkeitsnachweis</h2>
<p>Die Wirksamkeit der Maßnahme muss mit Daten belegt werden: keine Wiederholung in Folgelosen, bessere ZfP-Ergebnisse, Maßberichte innerhalb der Toleranz. Ein 8D ohne Wirksamkeitsnachweis gilt beim Kunden nicht als abgeschlossen.</p>
<h2>Kommunikation mit dem Kunden</h2>
<ul>
<li>Fehler melden, sobald sie bemerkt werden, auch wenn die Ursache noch offen ist.</li>
<li>Sofortmaßnahmen und betroffene Mengen klar benennen.</li>
<li>Für D1 bis D3 wird meist eine kurze, für das vollständige 8D eine längere Frist erwartet; die Fristen der QSV beachten.</li>
</ul>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Abweichungen werden dokumentiert, betroffene Teile ausgesondert, und Schweißaufsicht und Qualität analysieren die Ursachen gemeinsam. Bei Kundenreklamationen berichten wir im 8D-Format. <a href="../kalite.html">Unser Qualitätsansatz →</a></p></div>
`,
    faq: [
      ['Was unterscheidet NCR und 8D?', 'Ein NCR dokumentiert eine einzelne Abweichung und ihre Entscheidung. 8D ist eine achtstufige Methode zur Ursachenfindung und dauerhaften Abstellung, vor allem bei Kundenreklamationen oder Wiederholfehlern.'],
      ['Wann ist „Verwendung wie besehen“ möglich?', 'Wenn die Abweichung die Funktion nicht beeinträchtigt und der Kunde eine schriftliche Sonderfreigabe erteilt hat.'],
      ['Welche Werkzeuge nutzt man zur Ursachenanalyse?', 'Am häufigsten 5 Why und das Ishikawa-Diagramm.'],
      ['Wann ist ein 8D abgeschlossen?', 'Nach datenbasiertem Wirksamkeitsnachweis und Übertragung auf ähnliche Prozesse.']
    ],
    cta_h3: 'Ein Lieferant, der Probleme dauerhaft löst',
    cta_p: 'Senden Sie Zeichnung und Qualitätsanforderungen; wir bieten mit Qualitätsplan an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'Informe de no conformidad (NCR) y 8D en fabricación soldada: del defecto a la solución definitiva',
    meta: '¿Qué hacer cuando una pieza soldada falla? Qué debe incluir un NCR, opciones de decisión (usar tal cual, reparar, reprocesar, chatarra), los ocho pasos del 8D, causas raíz típicas en soldadura, análisis 5 porqués e Ishikawa y verificación de la eficacia de la acción correctiva.',
    og: 'NCR y 8D',
    tag: 'Calidad · No conformidad',
    h1: 'Informe de no conformidad (NCR) y 8D en fabricación soldada: del defecto a la solución definitiva',
    crumb: 'NCR y 8D',
    read: '8 min de lectura',
    body: `
<p>Ningún fabricante trabaja con cero defectos; lo que marca la diferencia es cómo se gestionan. Cuando un comprador europeo evalúa a un proveedor no pregunta “¿alguna vez se han equivocado?”, sino “¿qué hicieron cuando ocurrió?”. Este artículo explica cómo funcionan el informe de no conformidad (NCR) y el método 8D en la fabricación soldada.</p>
<h2>¿Qué es una no conformidad?</h2>
<p>Que el producto no cumpla algún requisito del plano, la especificación, la norma o el contrato. Ejemplos típicos:</p>
<ul>
<li>una indicación de END fuera de los límites de aceptación (fisura, falta de fusión, porosidad),</li>
<li>una pieza fuera de medida o tolerancia,</li>
<li>un cordón ausente o de garganta insuficiente,</li>
<li>material equivocado o certificado ausente,</li>
<li>desviación en la preparación superficial o el espesor de pintura,</li>
<li>una soldadura hecha con la WPS equivocada o por personal no cualificado.</li>
</ul>
<h2>Qué debe incluir un NCR</h2>
<ul>
<li>número de NCR, fecha y emisor,</li>
<li>pedido, referencia, revisión y cantidad afectada,</li>
<li>descripción clara del requisito frente al hallazgo (fotos, medidas, números de informe),</li>
<li>dónde se detectó: recepción, producción, inspección final o cliente,</li>
<li>acción inmediata (separar las piezas afectadas),</li>
<li>decisión y quién la tomó,</li>
<li>causa raíz y acción correctiva (con enlace a un 8D si procede),</li>
<li>fecha de cierre y verificación.</li>
</ul>
<h2>Opciones de decisión</h2>
<table>
<thead><tr><th>Decisión</th><th>Significado</th><th>Nota</th></tr></thead>
<tbody>
<tr><td>Usar tal cual</td><td>La pieza se acepta sin cambios</td><td>Si se desvía de un requisito, exige concesión escrita del cliente</td></tr>
<tr><td>Reparar</td><td>Se hace utilizable aunque no cumpla del todo el requisito</td><td>Puede requerir procedimiento de reparación y aprobación del cliente</td></tr>
<tr><td>Reprocesar</td><td>Se corrige hasta cumplir plenamente el requisito</td><td>p. ej. sanear y volver a soldar un cordón defectuoso</td></tr>
<tr><td>Chatarra</td><td>La pieza no se usa</td><td>Se fabrica una nueva</td></tr>
<tr><td>Devolver al proveedor</td><td>El defecto está en el material o pieza recibida</td><td>Se abre un NCR al proveedor</td></tr>
</tbody>
</table>
<p>Las reparaciones de soldadura se hacen con su propia WPS y la zona reparada pasa una inspección igual o más estricta (ver <a href="kaynak-hatalari-onarim.html">defectos de soldadura y reparación</a>).</p>
<h2>¿Qué es el 8D?</h2>
<p>El 8D es un método de resolución de problemas en ocho pasos, usado sobre todo para defectos que llegan al cliente o se repiten. El objetivo no es solo arreglar la pieza, sino que el defecto no vuelva a ocurrir.</p>
<table>
<thead><tr><th>Paso</th><th>Contenido</th></tr></thead>
<tbody>
<tr><td>D0</td><td>Preparación: decidir si el problema requiere un 8D</td></tr>
<tr><td>D1</td><td>Equipo: coordinador de soldadura, calidad, producción y diseño si procede</td></tr>
<tr><td>D2</td><td>Descripción del problema: qué, dónde, cuándo, cuántas, cómo se detectó</td></tr>
<tr><td>D3</td><td>Contención: selección de piezas en stock, en tránsito y en el cliente</td></tr>
<tr><td>D4</td><td>Causa raíz: por qué ocurrió y por qué no se detectó</td></tr>
<tr><td>D5</td><td>Elección de acciones correctivas permanentes</td></tr>
<tr><td>D6</td><td>Implantación y verificación de eficacia</td></tr>
<tr><td>D7</td><td>Prevención: extender a piezas y procesos similares, actualizar documentos</td></tr>
<tr><td>D8</td><td>Cierre y reconocimiento del equipo</td></tr>
</tbody>
</table>
<h2>Dos causas raíz: aparición y escape</h2>
<p>Un buen 8D responde por separado a dos preguntas: ¿por qué apareció el defecto? y ¿por qué no se detectó? Una garganta insuficiente puede deberse a un ajuste incorrecto; pero llegó al cliente porque en la inspección final no se usó galga de soldadura. Cada causa necesita su propia acción.</p>
<h2>Causas raíz típicas en soldadura</h2>
<ul>
<li>uso de una WPS equivocada o desactualizada,</li>
<li>parámetros fuera del rango de la WPS,</li>
<li>desviaciones en la preparación de bordes o separación de raíz,</li>
<li>consumibles húmedos o precalentamiento insuficiente,</li>
<li>lectura errónea del símbolo de soldadura,</li>
<li>deformación por punteado deficiente o secuencia incorrecta,</li>
<li>falta de fusión en soldaduras de difícil acceso.</li>
</ul>
<h2>Herramientas de análisis</h2>
<p><strong>5 porqués:</strong> preguntar “¿por qué?” repetidamente hasta llegar a la causa real. “El soldador se equivocó” no es una causa raíz; hay que preguntar por qué fue posible el error: ¿instrucción ausente, utillaje incorrecto, formación insuficiente?</p>
<p><strong>Ishikawa (espina de pescado):</strong> agrupar causas posibles en personas, máquina, material, método, medición y entorno. En soldadura, “entorno” suele incluir humedad, temperatura y corrientes de aire.</p>
<h2>Verificación de eficacia</h2>
<p>Hay que demostrar con datos que la acción funciona: sin repetición en lotes posteriores, mejores resultados de END, informes dimensionales dentro de tolerancia. Un 8D cerrado sin verificación no está cerrado para el cliente.</p>
<h2>Comunicación con el cliente</h2>
<ul>
<li>Avise del problema en cuanto se detecte, aunque aún no se conozca la causa.</li>
<li>Indique con claridad la contención y las cantidades afectadas.</li>
<li>Suele esperarse un plazo corto para D1–D3 y uno más largo para el 8D completo; siga los plazos del acuerdo de calidad del cliente.</li>
</ul>
<div class="callout"><p><strong>En ArmaWeld:</strong> las no conformidades se registran, las piezas afectadas se separan y coordinación de soldadura y calidad analizan juntas la causa raíz. Ante reclamaciones de clientes informamos en formato 8D. <a href="../kalite.html">Nuestro enfoque de calidad →</a></p></div>
`,
    faq: [
      ['¿En qué se diferencian NCR y 8D?', 'El NCR registra una no conformidad y su decisión. El 8D es un método de ocho pasos para hallar la causa raíz y una solución duradera, sobre todo en defectos que llegan al cliente o se repiten.'],
      ['¿Cuándo se puede decidir “usar tal cual”?', 'Cuando la desviación no afecta a la función y el cliente ha dado una concesión por escrito.'],
      ['¿Qué herramientas se usan para la causa raíz?', 'Sobre todo los 5 porqués y el diagrama de Ishikawa.'],
      ['¿Cuándo se cierra un 8D?', 'Cuando la eficacia de la acción se verifica con datos y se extiende a procesos similares.']
    ],
    cta_h3: 'Un proveedor que resuelve los problemas de raíz',
    cta_p: 'Envíenos plano y requisitos de calidad; ofertamos con plan de calidad.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'Fiche de non-conformité (NCR) et 8D en fabrication soudée : du défaut à la solution durable',
    meta: 'Que faire quand une pièce soudée est non conforme ? Contenu d’une fiche NCR, options de décision (utiliser en l’état, réparer, reprendre, rebuter), les huit étapes du 8D, causes racines typiques en soudage, 5 pourquoi et Ishikawa, et vérification de l’efficacité des actions correctives.',
    og: 'NCR et 8D',
    tag: 'Qualité · Non-conformité',
    h1: 'Fiche de non-conformité (NCR) et 8D en fabrication soudée : du défaut à la solution durable',
    crumb: 'NCR et 8D',
    read: '8 min de lecture',
    body: `
<p>Aucun fabricant ne travaille sans défaut ; ce qui fait la différence, c’est la manière de les traiter. Quand un acheteur européen évalue un fournisseur, il ne demande pas « avez-vous déjà fait une erreur ? » mais « qu’avez-vous fait ensuite ? ». Cet article explique le fonctionnement des fiches de non-conformité (NCR) et de la méthode 8D en fabrication soudée.</p>
<h2>Qu’est-ce qu’une non-conformité ?</h2>
<p>Le non-respect d’une exigence du plan, du cahier des charges, d’une norme ou du contrat. Exemples typiques :</p>
<ul>
<li>une indication CND hors critères d’acceptation (fissure, manque de fusion, porosité),</li>
<li>une pièce hors cote ou hors tolérance,</li>
<li>une soudure manquante ou de gorge insuffisante,</li>
<li>une mauvaise matière ou un certificat manquant,</li>
<li>un écart de préparation de surface ou d’épaisseur de peinture,</li>
<li>une soudure réalisée avec le mauvais DMOS ou par du personnel non qualifié.</li>
</ul>
<h2>Contenu d’une fiche NCR</h2>
<ul>
<li>numéro, date et émetteur,</li>
<li>commande, référence, indice et quantité concernée,</li>
<li>exigence et constat clairement décrits (photos, mesures, numéros de rapport),</li>
<li>lieu de détection : réception, fabrication, contrôle final ou client,</li>
<li>action immédiate (isolement des pièces concernées),</li>
<li>décision et décideur,</li>
<li>cause racine et action corrective (avec renvoi vers un 8D si nécessaire),</li>
<li>date de clôture et vérification.</li>
</ul>
<h2>Options de décision</h2>
<table>
<thead><tr><th>Décision</th><th>Signification</th><th>Remarque</th></tr></thead>
<tbody>
<tr><td>Utiliser en l’état</td><td>Pièce acceptée sans modification</td><td>Dérogation écrite du client nécessaire si une exigence n’est pas respectée</td></tr>
<tr><td>Réparer</td><td>Rendue utilisable sans satisfaire pleinement l’exigence</td><td>Procédure de réparation et accord client parfois requis</td></tr>
<tr><td>Reprendre</td><td>Corrigée pour satisfaire pleinement l’exigence</td><td>Par ex. gougeage et ressoudage d’un cordon défectueux</td></tr>
<tr><td>Rebuter</td><td>Pièce non utilisée</td><td>Une nouvelle pièce est fabriquée</td></tr>
<tr><td>Retour fournisseur</td><td>Le défaut provient de la matière ou d’une pièce reçue</td><td>Une NCR est ouverte chez le fournisseur</td></tr>
</tbody>
</table>
<p>Les réparations de soudure se font selon leur propre DMOS et la zone réparée passe un contrôle identique ou plus sévère (voir <a href="kaynak-hatalari-onarim.html">défauts de soudure et réparation</a>).</p>
<h2>Qu’est-ce que le 8D ?</h2>
<p>Le 8D est une méthode de résolution de problèmes en huit étapes, utilisée surtout pour les défauts qui atteignent le client ou se répètent. Le but n’est pas seulement de corriger la pièce, mais d’empêcher la récidive.</p>
<table>
<thead><tr><th>Étape</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td>D0</td><td>Préparation : décider si le problème justifie un 8D</td></tr>
<tr><td>D1</td><td>Équipe : coordinateur soudage, qualité, production, conception si besoin</td></tr>
<tr><td>D2</td><td>Description : quoi, où, quand, combien, comment détecté</td></tr>
<tr><td>D3</td><td>Confinement : tri des pièces en stock, en transit et chez le client</td></tr>
<tr><td>D4</td><td>Cause racine : pourquoi c’est arrivé et pourquoi ce n’a pas été détecté</td></tr>
<tr><td>D5</td><td>Choix des actions correctives permanentes</td></tr>
<tr><td>D6</td><td>Mise en œuvre et vérification de l’efficacité</td></tr>
<tr><td>D7</td><td>Prévention : extension aux pièces et procédés similaires, mise à jour des documents</td></tr>
<tr><td>D8</td><td>Clôture et reconnaissance de l’équipe</td></tr>
</tbody>
</table>
<h2>Deux causes racines : apparition et non-détection</h2>
<p>Un bon 8D répond séparément à deux questions : pourquoi le défaut est-il apparu, et pourquoi n’a-t-il pas été détecté ? Une gorge insuffisante peut venir d’un mauvais réglage ; mais elle est arrivée chez le client parce qu’aucune jauge de soudure n’a été utilisée au contrôle final. Chacune appelle sa propre action.</p>
<h2>Causes racines typiques en soudage</h2>
<ul>
<li>DMOS erroné ou périmé,</li>
<li>paramètres hors plage du DMOS,</li>
<li>écart de préparation des bords ou d’écartement à la racine,</li>
<li>consommables humides ou préchauffage insuffisant,</li>
<li>mauvaise lecture du symbole de soudure,</li>
<li>déformation due à un pointage insuffisant ou une mauvaise séquence,</li>
<li>manque de fusion sur des soudures peu accessibles.</li>
</ul>
<h2>Outils d’analyse</h2>
<p><strong>5 pourquoi :</strong> demander « pourquoi ? » jusqu’à atteindre la vraie cause. « Le soudeur s’est trompé » n’est pas une cause racine ; il faut demander pourquoi l’erreur était possible : instruction absente, gabarit inadapté, formation insuffisante ?</p>
<p><strong>Ishikawa :</strong> classer les causes possibles en main-d’œuvre, machine, matière, méthode, mesure et milieu. En soudage, le « milieu » couvre surtout l’humidité, la température et les courants d’air.</p>
<h2>Vérification de l’efficacité</h2>
<p>L’efficacité de l’action doit être démontrée par des données : pas de récidive sur les lots suivants, meilleurs résultats CND, rapports dimensionnels dans la tolérance. Un 8D clos sans vérification ne l’est pas aux yeux du client.</p>
<h2>Communication avec le client</h2>
<ul>
<li>Signalez le problème dès sa détection, même sans cause connue.</li>
<li>Indiquez clairement le confinement et les quantités concernées.</li>
<li>Un délai court est généralement attendu pour D1–D3 et un délai plus long pour le 8D complet ; suivez les délais de l’accord qualité du client.</li>
</ul>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> les non-conformités sont enregistrées, les pièces concernées isolées, et la coordination soudage et la qualité analysent ensemble la cause racine. Pour les réclamations clients, nous répondons au format 8D. <a href="../kalite.html">Notre approche qualité →</a></p></div>
`,
    faq: [
      ['Quelle différence entre NCR et 8D ?', 'La NCR enregistre une non-conformité et sa décision. Le 8D est une méthode en huit étapes pour trouver la cause racine et une solution durable, surtout pour les défauts chez le client ou récurrents.'],
      ['Quand peut-on décider « utiliser en l’état » ?', 'Quand l’écart n’affecte pas la fonction et que le client a donné une dérogation écrite.'],
      ['Quels outils pour la cause racine ?', 'Surtout les 5 pourquoi et le diagramme d’Ishikawa.'],
      ['Quand un 8D est-il clos ?', 'Après vérification de l’efficacité par des données et extension aux procédés similaires.']
    ],
    cta_h3: 'Un fournisseur qui règle les problèmes durablement',
    cta_p: 'Envoyez plan et exigences qualité ; nous chiffrons avec un plan qualité.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'Rapporto di non conformità (NCR) e 8D nella carpenteria saldata: dal difetto alla soluzione definitiva',
    meta: 'Cosa fare quando un pezzo saldato non è conforme? Contenuto di un NCR, opzioni di trattamento (uso così com’è, riparazione, rilavorazione, scarto), gli otto passi dell’8D, cause radice tipiche in saldatura, 5 perché e Ishikawa, verifica dell’efficacia delle azioni correttive.',
    og: 'NCR e 8D',
    tag: 'Qualità · Non conformità',
    h1: 'Rapporto di non conformità (NCR) e 8D nella carpenteria saldata: dal difetto alla soluzione definitiva',
    crumb: 'NCR e 8D',
    read: '8 min di lettura',
    body: `
<p>Nessun fabbricante lavora a difetti zero; la differenza sta in come i difetti vengono gestiti. Quando un buyer europeo valuta un fornitore non chiede “avete mai sbagliato?” ma “cosa avete fatto quando è successo?”. Questo articolo spiega come funzionano il rapporto di non conformità (NCR) e il metodo 8D nella carpenteria saldata.</p>
<h2>Cos’è una non conformità?</h2>
<p>Il mancato rispetto di un requisito del disegno, della specifica, della norma o del contratto. Esempi tipici:</p>
<ul>
<li>un’indicazione CND oltre i limiti di accettabilità (cricca, mancata fusione, porosità),</li>
<li>un pezzo fuori quota o fuori tolleranza,</li>
<li>una saldatura mancante o sottodimensionata,</li>
<li>materiale errato o certificato mancante,</li>
<li>scostamento nella preparazione superficiale o nello spessore della vernice,</li>
<li>una saldatura eseguita con la WPS sbagliata o da personale non qualificato.</li>
</ul>
<h2>Cosa deve contenere un NCR</h2>
<ul>
<li>numero, data ed emittente,</li>
<li>ordine, codice, revisione e quantità coinvolta,</li>
<li>descrizione chiara di requisito e rilievo (foto, misure, numeri di rapporto),</li>
<li>dove è stato rilevato: accettazione, produzione, controllo finale o cliente,</li>
<li>azione immediata (segregazione dei pezzi coinvolti),</li>
<li>decisione e chi l’ha presa,</li>
<li>causa radice e azione correttiva (con rimando a un 8D se serve),</li>
<li>data di chiusura e verifica.</li>
</ul>
<h2>Opzioni di trattamento</h2>
<table>
<thead><tr><th>Decisione</th><th>Significato</th><th>Nota</th></tr></thead>
<tbody>
<tr><td>Uso così com’è</td><td>Il pezzo è accettato senza modifiche</td><td>Serve una deroga scritta del cliente se si scosta da un requisito</td></tr>
<tr><td>Riparazione</td><td>Reso utilizzabile pur non rispettando del tutto il requisito</td><td>Può richiedere procedura di riparazione e approvazione del cliente</td></tr>
<tr><td>Rilavorazione</td><td>Corretto fino a rispettare pienamente il requisito</td><td>Es. scriccatura e risaldatura di un cordone difettoso</td></tr>
<tr><td>Scarto</td><td>Il pezzo non si usa</td><td>Si produce un pezzo nuovo</td></tr>
<tr><td>Reso al fornitore</td><td>Il difetto è nel materiale o pezzo ricevuto</td><td>Si apre un NCR al fornitore</td></tr>
</tbody>
</table>
<p>Le riparazioni di saldatura si eseguono con una propria WPS e la zona riparata deve superare un controllo uguale o più severo (vedi <a href="kaynak-hatalari-onarim.html">difetti di saldatura e riparazione</a>).</p>
<h2>Cos’è l’8D?</h2>
<p>L’8D è un metodo di problem solving in otto passi, usato soprattutto per difetti che arrivano al cliente o si ripetono. Lo scopo non è solo correggere il pezzo, ma evitare che il difetto si ripresenti.</p>
<table>
<thead><tr><th>Passo</th><th>Contenuto</th></tr></thead>
<tbody>
<tr><td>D0</td><td>Preparazione: decidere se il problema richiede un 8D</td></tr>
<tr><td>D1</td><td>Team: coordinatore di saldatura, qualità, produzione, progettazione se serve</td></tr>
<tr><td>D2</td><td>Descrizione: cosa, dove, quando, quanti, come rilevato</td></tr>
<tr><td>D3</td><td>Contenimento: selezione dei pezzi a magazzino, in transito e presso il cliente</td></tr>
<tr><td>D4</td><td>Causa radice: perché è successo e perché non è stato intercettato</td></tr>
<tr><td>D5</td><td>Scelta delle azioni correttive permanenti</td></tr>
<tr><td>D6</td><td>Attuazione e verifica dell’efficacia</td></tr>
<tr><td>D7</td><td>Prevenzione: estensione a pezzi e processi simili, aggiornamento dei documenti</td></tr>
<tr><td>D8</td><td>Chiusura e riconoscimento del team</td></tr>
</tbody>
</table>
<h2>Due cause radice: insorgenza e fuga</h2>
<p>Un buon 8D risponde separatamente a due domande: perché il difetto si è generato e perché non è stato intercettato? Una saldatura d’angolo sottodimensionata può derivare da un’impostazione errata; ma è arrivata al cliente perché al controllo finale non si è usato il calibro. Ciascuna richiede un’azione propria.</p>
<h2>Cause radice tipiche in saldatura</h2>
<ul>
<li>WPS errata o non aggiornata,</li>
<li>parametri fuori dal campo della WPS,</li>
<li>scostamenti nella preparazione dei lembi o nella luce alla radice,</li>
<li>consumabili umidi o preriscaldo insufficiente,</li>
<li>lettura errata del simbolo di saldatura,</li>
<li>deformazione per puntatura insufficiente o sequenza sbagliata,</li>
<li>mancata fusione su saldature poco accessibili.</li>
</ul>
<h2>Strumenti di analisi</h2>
<p><strong>5 perché:</strong> chiedere “perché?” finché non si arriva alla causa reale. “Il saldatore ha sbagliato” non è una causa radice; bisogna chiedersi perché l’errore era possibile: istruzione mancante, maschera inadatta, formazione insufficiente?</p>
<p><strong>Ishikawa (lisca di pesce):</strong> raggruppare le cause possibili in persone, macchina, materiale, metodo, misura e ambiente. In saldatura, “ambiente” comprende di solito umidità, temperatura e correnti d’aria.</p>
<h2>Verifica dell’efficacia</h2>
<p>L’efficacia dell’azione va dimostrata con dati: nessuna ripetizione nei lotti successivi, migliori risultati CND, rapporti dimensionali in tolleranza. Un 8D chiuso senza verifica non è chiuso per il cliente.</p>
<h2>Comunicazione con il cliente</h2>
<ul>
<li>Segnalate il problema appena rilevato, anche se la causa non è ancora nota.</li>
<li>Indicate chiaramente contenimento e quantità coinvolte.</li>
<li>Di solito si attende un termine breve per D1–D3 e uno più lungo per l’8D completo; seguite i termini dell’accordo qualità del cliente.</li>
</ul>
<div class="callout"><p><strong>In ArmaWeld:</strong> le non conformità vengono registrate, i pezzi coinvolti segregati, e coordinamento della saldatura e qualità analizzano insieme la causa radice. Per i reclami dei clienti rispondiamo in formato 8D. <a href="../kalite.html">Il nostro approccio alla qualità →</a></p></div>
`,
    faq: [
      ['Che differenza c’è tra NCR e 8D?', 'L’NCR registra una singola non conformità e il suo trattamento. L’8D è un metodo in otto passi per trovare la causa radice e una soluzione duratura, soprattutto per difetti presso il cliente o ricorrenti.'],
      ['Quando si può decidere “uso così com’è”?', 'Quando lo scostamento non incide sulla funzione e il cliente ha dato una deroga scritta.'],
      ['Quali strumenti per la causa radice?', 'Soprattutto i 5 perché e il diagramma di Ishikawa.'],
      ['Quando si chiude un 8D?', 'Dopo aver verificato con dati l’efficacia dell’azione e averla estesa a processi simili.']
    ],
    cta_h3: 'Un fornitore che risolve i problemi alla radice',
    cta_p: 'Inviateci disegno e requisiti di qualità; quotiamo con un piano qualità.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'Afwijkingsrapport (NCR) en 8D bij laswerk: van fout naar blijvende oplossing',
    meta: 'Wat te doen als een lasdeel afwijkt? Wat in een NCR hoort, besluitopties (gebruiken zoals het is, repareren, herbewerken, afkeuren), de acht 8D-stappen, typische grondoorzaken bij lassen, 5 Waaroms en visgraatanalyse, en het verifiëren van de effectiviteit van correctieve maatregelen.',
    og: 'NCR en 8D',
    tag: 'Kwaliteit · Afwijkingen',
    h1: 'Afwijkingsrapport (NCR) en 8D bij laswerk: van fout naar blijvende oplossing',
    crumb: 'NCR en 8D',
    read: '8 min lezen',
    body: `
<p>Geen fabrikant werkt foutloos; het verschil zit in hoe fouten worden aangepakt. Europese inkopers vragen bij leveranciersbeoordeling niet “heeft u ooit een fout gemaakt?”, maar “wat deed u toen?”. Dit artikel legt uit hoe afwijkingsrapporten (NCR) en de 8D-methode bij laswerk werken.</p>
<h2>Wat is een afwijking?</h2>
<p>Het product voldoet niet aan een eis uit tekening, specificatie, norm of contract. Typische voorbeelden:</p>
<ul>
<li>een NDO-indicatie buiten de acceptatiegrens (scheur, bindingsfout, porositeit),</li>
<li>een deel buiten maat of tolerantie,</li>
<li>een ontbrekende of te kleine las,</li>
<li>verkeerd materiaal of ontbrekend certificaat,</li>
<li>afwijking in oppervlaktevoorbehandeling of laagdikte,</li>
<li>een las met de verkeerde WPS of door niet-gekwalificeerd personeel.</li>
</ul>
<h2>Wat in een NCR hoort</h2>
<ul>
<li>NCR-nummer, datum en opsteller,</li>
<li>order, artikelnummer, revisie en betrokken aantal,</li>
<li>duidelijke beschrijving van eis en bevinding (foto’s, metingen, rapportnummers),</li>
<li>waar gevonden: ingang, productie, eindcontrole of klant,</li>
<li>directe maatregel (betrokken delen apart zetten),</li>
<li>besluit en wie het nam,</li>
<li>grondoorzaak en correctieve maatregel (zo nodig met verwijzing naar een 8D),</li>
<li>sluitingsdatum en verificatie.</li>
</ul>
<h2>Besluitopties</h2>
<table>
<thead><tr><th>Besluit</th><th>Betekenis</th><th>Opmerking</th></tr></thead>
<tbody>
<tr><td>Gebruiken zoals het is</td><td>Deel wordt ongewijzigd geaccepteerd</td><td>Bij afwijking van een eis is schriftelijke vrijgave van de klant nodig</td></tr>
<tr><td>Repareren</td><td>Bruikbaar gemaakt hoewel niet volledig aan de eis voldoend</td><td>Kan reparatieprocedure en klantakkoord vereisen</td></tr>
<tr><td>Herbewerken</td><td>Gecorrigeerd tot het volledig aan de eis voldoet</td><td>Bijv. uitgutsen en opnieuw lassen van een foute las</td></tr>
<tr><td>Afkeuren</td><td>Deel wordt niet gebruikt</td><td>Er wordt een nieuw deel gemaakt</td></tr>
<tr><td>Retour leverancier</td><td>Fout zit in ontvangen materiaal of deel</td><td>NCR naar de leverancier</td></tr>
</tbody>
</table>
<p>Lasreparaties gebeuren volgens een eigen WPS en het herstelde gebied ondergaat dezelfde of strengere inspectie (zie <a href="kaynak-hatalari-onarim.html">lasfouten en reparatie</a>).</p>
<h2>Wat is 8D?</h2>
<p>8D is een probleemoplossingsmethode in acht stappen, vooral voor fouten die bij de klant komen of terugkeren. Het doel is niet alleen het deel te herstellen, maar herhaling te voorkomen.</p>
<table>
<thead><tr><th>Stap</th><th>Inhoud</th></tr></thead>
<tbody>
<tr><td>D0</td><td>Voorbereiding: besluiten of het probleem een 8D nodig heeft</td></tr>
<tr><td>D1</td><td>Team: lascoördinator, kwaliteit, productie, zo nodig engineering</td></tr>
<tr><td>D2</td><td>Probleembeschrijving: wat, waar, wanneer, hoeveel, hoe ontdekt</td></tr>
<tr><td>D3</td><td>Inperking: sorteren van voorraad, onderweg en bij de klant</td></tr>
<tr><td>D4</td><td>Grondoorzaak: waarom ontstaan en waarom niet ontdekt</td></tr>
<tr><td>D5</td><td>Keuze van blijvende correctieve maatregelen</td></tr>
<tr><td>D6</td><td>Invoering en verificatie van effectiviteit</td></tr>
<tr><td>D7</td><td>Preventie: uitrollen naar vergelijkbare delen en processen, documenten bijwerken</td></tr>
<tr><td>D8</td><td>Afsluiting en erkenning van het team</td></tr>
</tbody>
</table>
<h2>Twee grondoorzaken: ontstaan en ontsnappen</h2>
<p>Een goede 8D beantwoordt twee vragen apart: waarom ontstond de fout, en waarom werd ze niet ontdekt? Een te kleine hoeklas kan zijn ontstaan door een verkeerde instelling; bij de klant kwam ze omdat bij de eindcontrole geen lasmaatmeter werd gebruikt. Beide vragen een eigen maatregel.</p>
<h2>Typische grondoorzaken bij lassen</h2>
<ul>
<li>verkeerde of verouderde WPS,</li>
<li>parameters buiten het WPS-bereik,</li>
<li>afwijking in naadvoorbereiding of grondspleet,</li>
<li>vochtige toevoegmaterialen of onvoldoende voorwarmen,</li>
<li>verkeerd gelezen lassymbool,</li>
<li>vervorming door slecht hechten of verkeerde lasvolgorde,</li>
<li>bindingsfouten bij moeilijk bereikbare lassen.</li>
</ul>
<h2>Analysegereedschap</h2>
<p><strong>5 Waaroms:</strong> herhaald “waarom?” vragen tot de echte oorzaak is bereikt. “De lasser maakte een fout” is geen grondoorzaak; vraag waarom de fout mogelijk was: ontbrekende instructie, verkeerde mal, onvoldoende training?</p>
<p><strong>Visgraat (Ishikawa):</strong> mogelijke oorzaken groeperen onder mens, machine, materiaal, methode, meting en milieu. Bij lassen omvat “milieu” meestal vocht, temperatuur en tocht.</p>
<h2>Effectiviteit verifiëren</h2>
<p>De werking van de maatregel moet met data worden aangetoond: geen herhaling in volgende batches, betere NDO-resultaten, maatrapporten binnen tolerantie. Een 8D die zonder verificatie wordt gesloten, is voor de klant niet gesloten.</p>
<h2>Communicatie met de klant</h2>
<ul>
<li>Meld het probleem zodra het is opgemerkt, ook als de oorzaak nog onbekend is.</li>
<li>Vermeld inperking en betrokken aantallen duidelijk.</li>
<li>Voor D1–D3 wordt meestal een korte termijn verwacht, voor de volledige 8D een langere; volg de termijnen uit de kwaliteitsovereenkomst van de klant.</li>
</ul>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> afwijkingen worden vastgelegd, betrokken delen apart gezet en lascoördinatie en kwaliteit analyseren samen de grondoorzaak. Bij klantklachten rapporteren we in 8D-formaat. <a href="../kalite.html">Onze kwaliteitsaanpak →</a></p></div>
`,
    faq: [
      ['Wat is het verschil tussen NCR en 8D?', 'Een NCR legt één afwijking en het besluit vast. 8D is een methode in acht stappen om de grondoorzaak en een blijvende oplossing te vinden, vooral bij klantklachten of terugkerende fouten.'],
      ['Wanneer kan “gebruiken zoals het is” worden besloten?', 'Als de afwijking de functie niet raakt en de klant schriftelijk vrijgave heeft gegeven.'],
      ['Welke tools worden voor de grondoorzaak gebruikt?', 'Vooral de 5 Waaroms en het visgraatdiagram (Ishikawa).'],
      ['Wanneer wordt een 8D gesloten?', 'Nadat de effectiviteit met data is aangetoond en de maatregel naar vergelijkbare processen is uitgerold.']
    ],
    cta_h3: 'Een leverancier die problemen blijvend oplost',
    cta_p: 'Stuur tekening en kwaliteitseisen; we offreren met een kwaliteitsplan.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'Avviksrapport (NCR) og 8D i sveiset tilvirkning: fra feil til varig løsning',
    meta: 'Hva gjør man når en sveiset del har avvik? Hva en NCR bør inneholde, disponeringsvalg (bruk som den er, reparer, omarbeid, kasser), de åtte 8D-trinnene, typiske rotårsaker ved sveising, 5 hvorfor og fiskebeinsanalyse, og verifikasjon av korrigerende tiltak.',
    og: 'NCR og 8D',
    tag: 'Kvalitet · Avvik',
    h1: 'Avviksrapport (NCR) og 8D i sveiset tilvirkning: fra feil til varig løsning',
    crumb: 'NCR og 8D',
    read: '8 min lesing',
    body: `
<p>Ingen produsent arbeider feilfritt; forskjellen ligger i hvordan feil håndteres. Når europeiske innkjøpere vurderer en leverandør, spør de ikke “har dere noen gang gjort feil?”, men “hva gjorde dere da?”. Denne artikkelen forklarer hvordan avviksrapporter (NCR) og 8D-metoden fungerer i sveiset tilvirkning.</p>
<h2>Hva er et avvik?</h2>
<p>At produktet ikke oppfyller et krav i tegning, spesifikasjon, standard eller kontrakt. Typiske eksempler:</p>
<ul>
<li>en NDT-indikasjon utenfor akseptkriteriene (sprekk, bindingsfeil, porer),</li>
<li>en del utenfor mål eller toleranse,</li>
<li>en manglende eller for liten sveis,</li>
<li>feil materiale eller manglende sertifikat,</li>
<li>avvik i overflateforbehandling eller malingstykkelse,</li>
<li>en sveis utført med feil WPS eller av ukvalifisert personell.</li>
</ul>
<h2>Hva en NCR bør inneholde</h2>
<ul>
<li>NCR-nummer, dato og utsteder,</li>
<li>ordre, delenummer, revisjon og berørt antall,</li>
<li>klar beskrivelse av krav og funn (bilder, målinger, rapportnumre),</li>
<li>hvor avviket ble funnet: mottak, produksjon, sluttkontroll eller kunde,</li>
<li>umiddelbart tiltak (berørte deler skilles ut),</li>
<li>disponering og hvem som besluttet,</li>
<li>rotårsak og korrigerende tiltak (eventuelt henvisning til 8D),</li>
<li>lukkedato og verifikasjon.</li>
</ul>
<h2>Disponeringsvalg</h2>
<table>
<thead><tr><th>Beslutning</th><th>Betydning</th><th>Merknad</th></tr></thead>
<tbody>
<tr><td>Bruk som den er</td><td>Delen godtas uendret</td><td>Ved avvik fra et krav kreves skriftlig godkjenning fra kunden</td></tr>
<tr><td>Reparer</td><td>Gjøres brukbar selv om kravet ikke oppfylles helt</td><td>Kan kreve reparasjonsprosedyre og kundegodkjenning</td></tr>
<tr><td>Omarbeid</td><td>Korrigeres til kravet oppfylles fullt ut</td><td>F.eks. utfuging og ny sveising av en feil sveis</td></tr>
<tr><td>Kasser</td><td>Delen brukes ikke</td><td>Ny del lages</td></tr>
<tr><td>Retur til leverandør</td><td>Feilen ligger i mottatt materiale eller del</td><td>NCR åpnes mot leverandøren</td></tr>
</tbody>
</table>
<p>Sveisereparasjoner utføres etter egen WPS, og det reparerte området skal gjennom lik eller strengere kontroll (se <a href="kaynak-hatalari-onarim.html">sveisefeil og reparasjon</a>).</p>
<h2>Hva er 8D?</h2>
<p>8D er en problemløsningsmetode i åtte trinn, brukt særlig for feil som når kunden eller gjentar seg. Målet er ikke bare å rette delen, men å hindre at feilen skjer igjen.</p>
<table>
<thead><tr><th>Trinn</th><th>Innhold</th></tr></thead>
<tbody>
<tr><td>D0</td><td>Forberedelse: avgjøre om problemet krever 8D</td></tr>
<tr><td>D1</td><td>Team: sveisekoordinator, kvalitet, produksjon, eventuelt konstruksjon</td></tr>
<tr><td>D2</td><td>Problembeskrivelse: hva, hvor, når, hvor mange, hvordan oppdaget</td></tr>
<tr><td>D3</td><td>Strakstiltak: sortering av deler på lager, i transport og hos kunden</td></tr>
<tr><td>D4</td><td>Rotårsak: hvorfor det skjedde og hvorfor det ikke ble oppdaget</td></tr>
<tr><td>D5</td><td>Valg av varige korrigerende tiltak</td></tr>
<tr><td>D6</td><td>Gjennomføring og verifikasjon av effekt</td></tr>
<tr><td>D7</td><td>Forebygging: overføre til lignende deler og prosesser, oppdatere dokumenter</td></tr>
<tr><td>D8</td><td>Avslutning og anerkjennelse av teamet</td></tr>
</tbody>
</table>
<h2>To rotårsaker: oppståelse og unnslipp</h2>
<p>En god 8D besvarer to spørsmål hver for seg: hvorfor oppsto feilen, og hvorfor ble den ikke oppdaget? En for liten kilsveis kan skyldes feil innstilling; men den nådde kunden fordi det ikke ble brukt sveisemåler ved sluttkontroll. Begge trenger egne tiltak.</p>
<h2>Typiske rotårsaker ved sveising</h2>
<ul>
<li>feil eller utdatert WPS,</li>
<li>parametere utenfor WPS-området,</li>
<li>avvik i fugeforberedelse eller rotspalte,</li>
<li>fuktige tilsettmaterialer eller utilstrekkelig forvarming,</li>
<li>feiltolket sveisesymbol,</li>
<li>deformasjon fra dårlig heftsveising eller feil sveiserekkefølge,</li>
<li>bindingsfeil i sveiser med dårlig tilkomst.</li>
</ul>
<h2>Analyseverktøy</h2>
<p><strong>5 hvorfor:</strong> spørre “hvorfor?” gjentatte ganger til den egentlige årsaken er funnet. “Sveiseren gjorde en feil” er ingen rotårsak; spør hvorfor feilen var mulig: manglende instruks, feil jigg, utilstrekkelig opplæring?</p>
<p><strong>Fiskebein (Ishikawa):</strong> gruppere mulige årsaker under menneske, maskin, materiale, metode, måling og miljø. Ved sveising dekker “miljø” som regel fukt, temperatur og trekk.</p>
<h2>Verifikasjon av effekt</h2>
<p>At tiltaket virker, må vises med data: ingen gjentakelse i senere partier, bedre NDT-resultater, målrapporter innenfor toleranse. En 8D som lukkes uten verifikasjon, er ikke lukket i kundens øyne.</p>
<h2>Kommunikasjon med kunden</h2>
<ul>
<li>Varsle problemet så snart det oppdages, selv før rotårsaken er kjent.</li>
<li>Oppgi strakstiltak og berørte antall tydelig.</li>
<li>For D1–D3 forventes som regel kort frist, for hele 8D-en lengre; følg fristene i kundens kvalitetsavtale.</li>
</ul>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> avvik registreres, berørte deler skilles ut, og sveisekoordinering og kvalitet analyserer rotårsaken sammen. Ved kundereklamasjoner rapporterer vi i 8D-format. <a href="../kalite.html">Vår kvalitetstilnærming →</a></p></div>
`,
    faq: [
      ['Hva er forskjellen på NCR og 8D?', 'En NCR registrerer ett avvik og disponeringen. 8D er en åttetrinnsmetode for å finne rotårsak og varig løsning, særlig for feil hos kunden eller gjentakende feil.'],
      ['Når kan man velge “bruk som den er”?', 'Når avviket ikke påvirker funksjonen og kunden har gitt skriftlig godkjenning.'],
      ['Hvilke verktøy brukes for rotårsak?', 'Mest vanlig er 5 hvorfor og fiskebeinsdiagram (Ishikawa).'],
      ['Når lukkes en 8D?', 'Når effekten av tiltaket er verifisert med data og overført til lignende prosesser.']
    ],
    cta_h3: 'En leverandør som løser problemer varig',
    cta_p: 'Send tegning og kvalitetskrav; vi gir tilbud med kvalitetsplan.',
    cta_btn: 'Be om tilbud →'
  }
};
