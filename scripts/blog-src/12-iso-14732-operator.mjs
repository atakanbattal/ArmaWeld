export default {
  order: 12,
  slug: 'iso-14732-kaynak-operatoru-sertifikasi',
  key: 'p12_iso14732',
  date: '2026-01-23',
  keywords: 'ISO 14732, kaynak operatörü sertifikası, mekanize kaynak operatörü, tozaltı kaynak operatörü belgesi, ISO 14732 vs ISO 9606, welding operator qualification, Bedienerprüfung ISO 14732',
  related: ['kaynakci-sertifikasi-en-iso-9606-1', 'saw-tozalti-kaynagi', 'wpqr-nedir', 'tozalti-kaynak-makinesi-bom-sasi'],
  tr: {
    title: 'ISO 14732 Kaynak Operatörü Sertifikası: Mekanize ve Tozaltı Kaynakta Yeterlilik',
    meta: 'ISO 14732 nedir? Mekanize ve otomatik kaynak operatörlerinin belgelendirilmesi, ISO 9606 ile farkı, dört belgelendirme yolu, geçerlilik süresi ve tozaltı (SAW) kaynakta operatör yeterliliği.',
    og: 'ISO 14732 Kaynak Operatörü Sertifikası',
    tag: 'Standartlar · Personel',
    h1: 'ISO 14732 Kaynak Operatörü Sertifikası: Mekanize ve Otomatik Kaynakta Yeterlilik',
    crumb: 'ISO 14732',
    read: '6 dk okuma',
    body: `
<p>Elle yapılan kaynakta kaynakçının yeterliliği <strong>ISO 9606</strong> ile belgelendirilir. Ancak torcun bir taşıyıcı, kolon-bom veya traktör üzerinde ilerlediği mekanize ve otomatik kaynakta işi yapan kişi kaynakçı değil, <strong>kaynak operatörüdür</strong>. Operatörün yeterliliği <strong>EN ISO 14732</strong> ile belgelendirilir. Tozaltı (SAW), mekanize MAG, orbital TIG ve benzeri yöntemler bu kapsama girer.</p>
<h2>Kaynakçı ile Operatör Arasındaki Fark</h2>
<table class="data-table"><thead><tr><th>Konu</th><th>Kaynakçı (ISO 9606)</th><th>Operatör (ISO 14732)</th></tr></thead><tbody>
<tr><td>Torç hareketi</td><td>Elle</td><td>Mekanik veya otomatik</td></tr>
<tr><td>Belirleyici beceri</td><td>El becerisi, pozisyon</td><td>Makine ayarı, parametre seçimi, izleme ve düzeltme</td></tr>
<tr><td>Kapsam sınırları</td><td>Malzeme grubu, kalınlık, çap, pozisyon, sarf malzeme</td><td>Kaynak yöntemi, ekipman tipi, kontrol sistemi, tek veya çok paso, dikiş takip sistemi</td></tr>
<tr><td>Tipik örnek</td><td>MAG köşe kaynağı, TIG boru kökü</td><td>Tozaltı alın kaynağı, mekanize uzun dikiş</td></tr>
</tbody></table>
<p>Operatörde malzeme kalınlığı veya pozisyon değil, makineyi doğru kurma ve kaynak boyunca parametreleri yönetme becerisi ölçülür.</p>
<h2>Dört Belgelendirme Yolu</h2>
<p>ISO 14732, operatörün yeterliliğinin dört farklı yolla gösterilmesine izin verir:</p>
<ol>
<li><strong>WPQR testi sırasında:</strong> Kaynak prosedürü onay testinin (ISO 15614) kaynağını yapan operatör, aynı testle belgelendirilir.</li>
<li><strong>Kaynak öncesi üretim testi:</strong> Üretim parçasını temsil eden bir test parçası kaynaklanır ve muayene edilir.</li>
<li><strong>Standart test parçası:</strong> ISO 9606 veya ISO 15614'teki test parçalarına benzer bir parça kaynaklanır.</li>
<li><strong>Üretim kaynağı üzerinden:</strong> Gerçek üretim kaynakları muayene edilerek (örneğin NDT ile) yeterlilik gösterilir.</li>
</ol>
<p>Ayrıca operatörün kaynak teknolojisi ve makine konusunda yeterli bilgisi olduğu; parametre ayarı, hata tanıma ve düzeltme konularında fonksiyonel bilgiye sahip olduğu doğrulanmalıdır.</p>
<h2>Belgenin Kapsadıkları</h2>
<ul>
<li><strong>Kaynak yöntemi:</strong> Örneğin 121 (tek telli tozaltı) ile 12 grubundaki diğer alt yöntemler ayrı değerlendirilebilir.</li>
<li><strong>Kontrol sistemi:</strong> Mekanize ile otomatik kaynak arasında ve uzaktan görsel kontrol kullanılıp kullanılmamasına göre kapsam değişir.</li>
<li><strong>Dikiş takip sistemi:</strong> Otomatik takip var mı, yok mu?</li>
<li><strong>Tek veya çok paso:</strong> Tek pasoda belgelenen operatör çok paso yapamaz; tersi geçerlidir.</li>
<li><strong>Ark sensörü veya lazer takip</strong> gibi yardımcı sistemler</li>
</ul>
<h2>Geçerlilik ve Uzatma</h2>
<p>ISO 14732'de geçerlilik, ISO 9606'daki mantıkla benzerdir. Operatörün belge kapsamında kesintisiz çalıştığı, kaynak koordinatörü veya muayene sorumlusu tarafından her altı ayda bir onaylanmalıdır. Uzatma için standart üç seçenek tanır: belirli aralıklarla yeniden test, son altı ay içindeki üretim kaynaklarının muayene kayıtlarıyla doğrulama veya belirli koşullar altında süresiz geçerlilik için düzenli üretim kontrolü. Altı aydan uzun süre ilgili yöntemde çalışılmazsa belge geçerliliğini kaybeder.</p>
<h2>Tozaltı Kaynakta Operatör Neden Önemli?</h2>
<p>Tozaltı kaynakta ark görünmez; operatör kaynağı akım, gerilim, hız ve tel sürme hızı göstergeleri ile dikiş şekli üzerinden yönetir. Kaynak ağzının doğru takip edilmesi, toz yüksekliğinin ayarlanması, uzun dikişlerde başlangıç ve bitiş plakalarının kullanılması ve paso arası temizlik doğrudan operatörün işidir. Kalın saclarda ve uzun dikişlerde bir parametre hatası, metrelerce dikişin yeniden işlenmesi anlamına gelebilir.</p>
<h2>EN 1090 ve ISO 3834 Açısından</h2>
<p>EN 1090-2, mekanize ve otomatik kaynak yapan personelin ISO 14732'ye göre belgelendirilmesini ister. ISO 3834-2 de kaynakçılar ve operatörler için geçerli yeterlilik şartı koyar. Bu nedenle bir tedarikçinin tozaltı kaynak yaptığını söylemesi, operatörlerinin ISO 14732 belgeleriyle desteklenmelidir.</p>
<h2>Alıcı Olarak Ne Kontrol Etmelisiniz?</h2>
<ol>
<li>Mekanize veya otomatik kaynak yapılan dikişler için ISO 14732 belgesi var mı?</li>
<li>Belgedeki yöntem ve ekipman tipi, kullanılan makineyle uyumlu mu?</li>
<li>Altı aylık onaylar düzenli işlenmiş mi?</li>
<li>Operatörün kullandığı WPS, onaylı bir WPQR'ye dayanıyor mu?</li>
</ol>
<div class="callout"><p><strong>ArmaWeld'de:</strong> 35 metrelik tozaltı kaynak makinemizde lineer uzun dikiş, bom ve şasi kaynakları yapılır. Teklif aşamasında işe uygulanacak WPS'leri ve personel yeterlilik belgelerini sizinle birlikte netleştiririz. <a href="../tozalti-kaynak.html">Tozaltı kaynak hizmetimizi inceleyin →</a></p></div>
`,
    faq: [
      ['ISO 9606 belgesi olan kaynakçı tozaltı makinesini kullanabilir mi?', 'Mekanize veya otomatik kaynak için ISO 14732 belgesi gerekir. ISO 9606 belgesi elle kaynak becerisini kapsar, makine operatörlüğünü kapsamaz.'],
      ['Operatör belgesiyle elle kaynak yapılabilir mi?', 'Hayır. ISO 14732 makine operatörlüğünü kapsar. Aynı kişi elle kaynak da yapacaksa ayrıca ISO 9606 belgesine sahip olmalıdır.'],
      ['ISO 14732 belgesi ne kadar geçerlidir?', 'Geçerlilik altı aylık onaylarla sürdürülür. Uzatma, standartta tanımlanan yeniden test veya üretim muayene kayıtlarına dayalı yöntemlerden biriyle yapılır.'],
      ['WPQR testi operatör belgesi yerine geçer mi?', 'WPQR testinin kaynağını yapan operatör, aynı test üzerinden ISO 14732 belgesi alabilir. Bu, standardın tanıdığı dört yoldan biridir.']
    ],
    cta_h3: 'Uzun dikişli, kalın saclı parçalarınız için tozaltı kaynak',
    cta_p: 'Bom, şasi veya uzun profil çiziminizi gönderin; kaynak yöntemi ve operatör yeterlilikleriyle birlikte teklif hazırlayalım.',
    cta_btn: 'Teklif İste →'
  },
  en: {
    title: 'ISO 14732 Welding Operator Qualification: Mechanized and Submerged Arc Welding',
    meta: 'What is ISO 14732? Qualification of welding operators for mechanized and automatic welding, the difference from ISO 9606, the four qualification routes, validity and operator competence in submerged arc welding (SAW).',
    og: 'ISO 14732 Welding Operator Qualification',
    tag: 'Standards · Personnel',
    h1: 'ISO 14732 Welding Operator Qualification: Competence in Mechanized and Automatic Welding',
    crumb: 'ISO 14732',
    read: '6 min read',
    body: `
<p>In manual welding, the welder's competence is certified to <strong>ISO 9606</strong>. In mechanized and automatic welding, where the torch travels on a carriage, column-and-boom or tractor, the person doing the job is not a welder but a <strong>welding operator</strong>, qualified to <strong>EN ISO 14732</strong>. Submerged arc welding (SAW), mechanized MAG, orbital TIG and similar processes fall under this standard.</p>
<h2>Welder vs Operator</h2>
<table class="data-table"><thead><tr><th>Aspect</th><th>Welder (ISO 9606)</th><th>Operator (ISO 14732)</th></tr></thead><tbody>
<tr><td>Torch movement</td><td>Manual</td><td>Mechanical or automatic</td></tr>
<tr><td>Decisive skill</td><td>Manual dexterity, position</td><td>Machine set-up, parameter selection, monitoring and correction</td></tr>
<tr><td>Range limits</td><td>Material group, thickness, diameter, position, consumable</td><td>Process, equipment type, control system, single or multi-run, seam tracking</td></tr>
<tr><td>Typical example</td><td>MAG fillet weld, TIG pipe root</td><td>Submerged arc butt weld, mechanized long seam</td></tr>
</tbody></table>
<p>For an operator, what is assessed is not thickness or position but the ability to set up the machine correctly and manage parameters throughout the weld.</p>
<h2>Four Qualification Routes</h2>
<p>ISO 14732 allows competence to be demonstrated in four ways:</p>
<ol>
<li><strong>During the WPQR test:</strong> the operator who welds the procedure qualification test (ISO 15614) is qualified by the same test.</li>
<li><strong>Pre-production test:</strong> a test piece representing the production part is welded and examined.</li>
<li><strong>Standard test piece:</strong> a piece similar to those in ISO 9606 or ISO 15614 is welded.</li>
<li><strong>Production weld test:</strong> competence is shown by examining actual production welds (for example by NDT).</li>
</ol>
<p>In addition, the operator's knowledge of welding technology and the machine, and functional knowledge of parameter setting, defect recognition and correction, must be verified.</p>
<h2>What the Qualification Covers</h2>
<ul>
<li><strong>Process:</strong> for example 121 (single-wire SAW) and other subgroup 12 processes may be assessed separately.</li>
<li><strong>Control system:</strong> range changes between mechanized and automatic welding and with or without remote visual control.</li>
<li><strong>Seam tracking:</strong> with or without automatic tracking.</li>
<li><strong>Single or multi-run:</strong> an operator qualified on single-run cannot do multi-run; the reverse is allowed.</li>
<li>Auxiliary systems such as <strong>arc sensing or laser tracking</strong></li>
</ul>
<h2>Validity and Prolongation</h2>
<p>Validity follows logic similar to ISO 9606. The welding coordinator or inspector must confirm every six months that the operator has worked continuously within the range. The standard offers three options for prolongation: periodic re-testing, verification through inspection records of production welds from the last six months, or, under defined conditions, ongoing validity based on regular production checks. If the operator does not work in the process for more than six months, the qualification lapses.</p>
<h2>Why the Operator Matters in SAW</h2>
<p>In submerged arc welding the arc is not visible; the operator manages the weld through current, voltage, travel speed and wire feed readings and the bead shape. Correct seam tracking, flux depth, run-on and run-off tabs on long seams and inter-pass cleaning are all the operator's job. On thick plate and long seams, one parameter error can mean metres of weld to rework.</p>
<h2>EN 1090 and ISO 3834</h2>
<p>EN 1090-2 requires personnel performing mechanized and automatic welding to be qualified to ISO 14732. ISO 3834-2 sets the same competence requirement for welders and operators. A supplier claiming SAW capability should back it with ISO 14732 qualifications for its operators.</p>
<h2>What Should a Buyer Check?</h2>
<ol>
<li>Is there an ISO 14732 qualification for welds made mechanically or automatically?</li>
<li>Do the process and equipment type on the certificate match the machine used?</li>
<li>Are the six-monthly confirmations recorded?</li>
<li>Is the operator's WPS backed by an approved WPQR?</li>
</ol>
<div class="callout"><p><strong>At ArmaWeld:</strong> our 35-metre submerged arc welding machine is used for linear long seams, booms and chassis. At quotation stage we agree with you which WPSs and personnel qualifications apply to the job. <a href="../tozalti-kaynak.html">See our submerged arc welding service →</a></p></div>
`,
    faq: [
      ['Can a welder with ISO 9606 operate a SAW machine?', 'Mechanized or automatic welding requires ISO 14732 qualification. ISO 9606 covers manual welding skill, not machine operation.'],
      ['Can an operator certificate be used for manual welding?', 'No. ISO 14732 covers machine operation only. If the same person also welds manually, a separate ISO 9606 qualification is needed.'],
      ['How long is an ISO 14732 qualification valid?', 'Validity is maintained by six-monthly confirmations. Prolongation follows one of the routes in the standard: re-testing or production inspection records.'],
      ['Does a WPQR test count as operator qualification?', 'The operator who welds the WPQR test can be qualified to ISO 14732 by the same test. It is one of the four routes the standard recognises.']
    ],
    cta_h3: 'Submerged arc welding for long-seam, thick-plate parts',
    cta_p: 'Send your boom, chassis or long-section drawing and we will quote with welding process and operator qualifications.',
    cta_btn: 'Request a Quote →'
  },
  de: {
    title: 'ISO 14732 Bedienerprüfung: Qualifizierung beim mechanisierten und UP-Schweißen',
    meta: 'Was ist ISO 14732? Qualifizierung von Bedienern für mechanisiertes und automatisches Schweißen, Unterschied zu ISO 9606, die vier Prüfwege, Gültigkeit und Bedienerqualifikation beim Unterpulverschweißen (UP).',
    og: 'ISO 14732 Bedienerprüfung',
    tag: 'Normen · Personal',
    h1: 'ISO 14732 Bedienerprüfung: Qualifizierung beim mechanisierten und automatischen Schweißen',
    crumb: 'ISO 14732',
    read: '6 Min. Lesezeit',
    body: `
<p>Beim Handschweißen wird die Qualifikation des Schweißers nach <strong>ISO 9606</strong> geprüft. Beim mechanisierten und automatischen Schweißen, bei dem der Brenner auf einem Fahrwerk, Ausleger oder Traktor geführt wird, arbeitet jedoch kein Schweißer, sondern ein <strong>Bediener</strong>. Dessen Qualifikation regelt <strong>DIN EN ISO 14732</strong>. Unterpulverschweißen (UP), mechanisiertes MAG, Orbital-WIG und ähnliche Verfahren fallen darunter.</p>
<h2>Schweißer und Bediener</h2>
<table class="data-table"><thead><tr><th>Aspekt</th><th>Schweißer (ISO 9606)</th><th>Bediener (ISO 14732)</th></tr></thead><tbody>
<tr><td>Brennerführung</td><td>Manuell</td><td>Mechanisch oder automatisch</td></tr>
<tr><td>Entscheidende Fähigkeit</td><td>Handfertigkeit, Position</td><td>Einrichten, Parameterwahl, Überwachung und Korrektur</td></tr>
<tr><td>Geltungsbereich</td><td>Werkstoffgruppe, Dicke, Durchmesser, Position, Zusatzwerkstoff</td><td>Verfahren, Anlagentyp, Steuerung, ein- oder mehrlagig, Nahtführung</td></tr>
<tr><td>Typisches Beispiel</td><td>MAG-Kehlnaht, WIG-Rohrwurzel</td><td>UP-Stumpfnaht, mechanisierte Längsnaht</td></tr>
</tbody></table>
<p>Beim Bediener zählt nicht Dicke oder Position, sondern die Fähigkeit, die Anlage richtig einzurichten und die Parameter während des Schweißens zu führen.</p>
<h2>Vier Prüfwege</h2>
<p>ISO 14732 erlaubt den Qualifikationsnachweis auf vier Wegen:</p>
<ol>
<li><strong>Im Rahmen der WPQR:</strong> Der Bediener, der die Verfahrensprüfung (ISO 15614) schweißt, wird damit qualifiziert.</li>
<li><strong>Arbeitsprüfung vor Fertigungsbeginn:</strong> Ein Prüfstück, das das Bauteil repräsentiert, wird geschweißt und geprüft.</li>
<li><strong>Normprüfstück:</strong> Ein Stück ähnlich den Prüfstücken aus ISO 9606 oder ISO 15614 wird geschweißt.</li>
<li><strong>Fertigungsprüfung:</strong> Nachweis über die Prüfung tatsächlicher Fertigungsnähte (z. B. mit ZfP).</li>
</ol>
<p>Zusätzlich sind Kenntnisse in Schweißtechnik und Anlage sowie funktionale Kenntnisse zu Parametereinstellung, Fehlererkennung und Korrektur nachzuweisen.</p>
<h2>Geltungsbereich</h2>
<ul>
<li><strong>Verfahren:</strong> z. B. 121 (UP mit Eindrahtelektrode) und weitere Verfahren der Gruppe 12 können getrennt bewertet werden.</li>
<li><strong>Steuerung:</strong> Unterschiede zwischen mechanisiert und automatisch sowie mit oder ohne Fernbeobachtung.</li>
<li><strong>Nahtführung:</strong> mit oder ohne automatische Nahtverfolgung.</li>
<li><strong>Ein- oder mehrlagig:</strong> Wer einlagig qualifiziert ist, darf nicht mehrlagig schweißen; umgekehrt ja.</li>
<li>Hilfssysteme wie <strong>Lichtbogensensorik oder Lasernahtverfolgung</strong></li>
</ul>
<h2>Gültigkeit und Verlängerung</h2>
<p>Die Gültigkeit folgt einer ähnlichen Logik wie bei ISO 9606. Die Schweißaufsicht oder der Prüfer bestätigt alle sechs Monate, dass der Bediener im Geltungsbereich tätig war. Für die Verlängerung bietet die Norm drei Optionen: periodische Wiederholungsprüfung, Nachweis über Prüfergebnisse von Fertigungsnähten der letzten sechs Monate oder unter bestimmten Bedingungen fortlaufende Gültigkeit durch regelmäßige Fertigungsprüfungen. Ruht die Tätigkeit länger als sechs Monate, erlischt die Qualifikation.</p>
<h2>Warum der Bediener beim UP-Schweißen entscheidend ist</h2>
<p>Beim Unterpulverschweißen ist der Lichtbogen nicht sichtbar; der Bediener steuert über Strom, Spannung, Vorschub, Drahtvorschub und Nahtbild. Korrekte Nahtführung, Pulverhöhe, Ein- und Auslaufbleche bei langen Nähten und Zwischenlagenreinigung liegen in seiner Hand. Bei dicken Blechen und langen Nähten kann ein Parameterfehler Meter an Nacharbeit bedeuten.</p>
<h2>EN 1090 und ISO 3834</h2>
<p>EN 1090-2 fordert für mechanisiert und automatisch schweißendes Personal die Qualifizierung nach ISO 14732. ISO 3834-2 stellt dieselbe Anforderung an Schweißer und Bediener. Wer UP-Kompetenz angibt, sollte sie mit ISO-14732-Nachweisen seiner Bediener belegen.</p>
<h2>Was Einkäufer prüfen sollten</h2>
<ol>
<li>Liegt für mechanisiert oder automatisch geschweißte Nähte eine ISO-14732-Qualifikation vor?</li>
<li>Passen Verfahren und Anlagentyp auf dem Zertifikat zur eingesetzten Anlage?</li>
<li>Sind die Halbjahresbestätigungen eingetragen?</li>
<li>Beruht die WPS des Bedieners auf einer freigegebenen WPQR?</li>
</ol>
<div class="callout"><p><strong>Bei ArmaWeld:</strong> Auf unserer 35-Meter-UP-Schweißanlage fertigen wir lineare Längsnähte, Ausleger und Rahmen. In der Angebotsphase stimmen wir mit Ihnen ab, welche WPS und Personalqualifikationen für den Auftrag gelten. <a href="../tozalti-kaynak.html">Unser UP-Schweißen →</a></p></div>
`,
    faq: [
      ['Darf ein Schweißer mit ISO 9606 eine UP-Anlage bedienen?', 'Für mechanisiertes oder automatisches Schweißen ist ISO 14732 erforderlich. ISO 9606 deckt die Handfertigkeit ab, nicht die Anlagenbedienung.'],
      ['Darf ein Bediener mit ISO 14732 von Hand schweißen?', 'Nein. ISO 14732 deckt nur die Anlagenbedienung ab. Wer zusätzlich von Hand schweißt, braucht eine eigene Prüfung nach ISO 9606.'],
      ['Wie lange gilt eine ISO-14732-Qualifikation?', 'Sie wird durch halbjährliche Bestätigungen aufrechterhalten. Die Verlängerung erfolgt über Wiederholungsprüfung oder Prüfnachweise aus der Fertigung.'],
      ['Ersetzt eine WPQR die Bedienerprüfung?', 'Der Bediener, der die WPQR schweißt, kann über dieselbe Prüfung nach ISO 14732 qualifiziert werden. Das ist einer der vier anerkannten Wege.']
    ],
    cta_h3: 'UP-Schweißen für lange Nähte und dicke Bleche',
    cta_p: 'Senden Sie Ihre Zeichnung für Ausleger, Rahmen oder Langprofile. Wir bieten mit Schweißverfahren und Bedienerqualifikation an.',
    cta_btn: 'Angebot anfordern →'
  },
  es: {
    title: 'ISO 14732 cualificación de operadores de soldadura: soldadura mecanizada y por arco sumergido',
    meta: 'Qué es la ISO 14732: cualificación de operadores de soldadura mecanizada y automática, diferencias con la ISO 9606, las cuatro vías de cualificación, validez y competencia del operador en arco sumergido (SAW).',
    og: 'ISO 14732: cualificación de operadores de soldadura',
    tag: 'Normas · Personal',
    h1: 'ISO 14732: cualificación de operadores en soldadura mecanizada y automática',
    crumb: 'ISO 14732',
    read: '6 min de lectura',
    body: `
<p>En la soldadura manual, la competencia del soldador se certifica según la <strong>ISO 9606</strong>. En la soldadura mecanizada y automática, donde la antorcha avanza sobre un carro, columna-pluma o tractor, quien hace el trabajo no es un soldador sino un <strong>operador de soldadura</strong>, cualificado según la <strong>EN ISO 14732</strong>. El arco sumergido (SAW), el MAG mecanizado, el TIG orbital y procesos similares entran en su alcance.</p>
<h2>Soldador frente a operador</h2>
<table class="data-table"><thead><tr><th>Aspecto</th><th>Soldador (ISO 9606)</th><th>Operador (ISO 14732)</th></tr></thead><tbody>
<tr><td>Movimiento de la antorcha</td><td>Manual</td><td>Mecánico o automático</td></tr>
<tr><td>Habilidad decisiva</td><td>Destreza manual, posición</td><td>Ajuste de la máquina, selección de parámetros, supervisión y corrección</td></tr>
<tr><td>Límites del rango</td><td>Grupo de material, espesor, diámetro, posición, consumible</td><td>Proceso, tipo de equipo, sistema de control, una o varias pasadas, seguimiento de junta</td></tr>
<tr><td>Ejemplo típico</td><td>Ángulo MAG, raíz de tubo TIG</td><td>A tope por arco sumergido, cordón largo mecanizado</td></tr>
</tbody></table>
<p>En el operador no se evalúa el espesor ni la posición, sino la capacidad de preparar bien la máquina y gestionar los parámetros durante toda la soldadura.</p>
<h2>Cuatro vías de cualificación</h2>
<ol>
<li><strong>Durante el ensayo WPQR:</strong> el operador que suelda la cualificación del procedimiento (ISO 15614) queda cualificado con el mismo ensayo.</li>
<li><strong>Ensayo previo a producción:</strong> se suelda y examina una probeta representativa de la pieza.</li>
<li><strong>Probeta normalizada:</strong> se suelda una pieza similar a las de ISO 9606 o ISO 15614.</li>
<li><strong>Soldadura de producción:</strong> se demuestra la competencia examinando soldaduras reales (por ejemplo con END).</li>
</ol>
<p>Además, debe verificarse el conocimiento de tecnología de soldadura y de la máquina, y el conocimiento funcional sobre ajuste de parámetros, reconocimiento de defectos y corrección.</p>
<h2>Qué cubre la cualificación</h2>
<ul>
<li><strong>Proceso:</strong> por ejemplo 121 (SAW monoalambre) y otros del grupo 12 pueden evaluarse por separado.</li>
<li><strong>Sistema de control:</strong> el rango cambia entre mecanizado y automático, y con o sin control visual remoto.</li>
<li><strong>Seguimiento de junta:</strong> con o sin seguimiento automático.</li>
<li><strong>Una o varias pasadas:</strong> quien se cualifica en una pasada no puede hacer varias; al revés sí.</li>
<li>Sistemas auxiliares como <strong>sensor de arco o seguimiento láser</strong></li>
</ul>
<h2>Validez y prórroga</h2>
<p>La lógica es similar a la de la ISO 9606. El coordinador de soldadura o el inspector debe confirmar cada seis meses que el operador ha trabajado de forma continua dentro del rango. Para la prórroga, la norma ofrece tres opciones: reensayo periódico, verificación con registros de inspección de soldaduras de producción de los últimos seis meses o, en determinadas condiciones, validez continuada con controles de producción regulares. Si el operador no trabaja en el proceso durante más de seis meses, la cualificación caduca.</p>
<h2>Por qué importa el operador en arco sumergido</h2>
<p>En el arco sumergido el arco no se ve; el operador gestiona la soldadura mediante intensidad, tensión, velocidad de avance, velocidad del hilo y forma del cordón. El seguimiento de la junta, la altura del fundente, los apéndices de inicio y final en cordones largos y la limpieza entre pasadas dependen de él. En chapa gruesa y cordones largos, un error de parámetros puede suponer metros de reparación.</p>
<h2>EN 1090 e ISO 3834</h2>
<p>La EN 1090-2 exige que el personal de soldadura mecanizada y automática esté cualificado según ISO 14732. La ISO 3834-2 fija el mismo requisito para soldadores y operadores. Un proveedor que declare capacidad SAW debe respaldarla con cualificaciones ISO 14732 de sus operadores.</p>
<h2>Qué debe revisar el comprador</h2>
<ol>
<li>¿Hay cualificación ISO 14732 para las soldaduras mecanizadas o automáticas?</li>
<li>¿Coinciden proceso y tipo de equipo del certificado con la máquina usada?</li>
<li>¿Están registradas las confirmaciones semestrales?</li>
<li>¿La WPS del operador se basa en una WPQR aprobada?</li>
</ol>
<div class="callout"><p><strong>En ArmaWeld:</strong> en nuestra máquina de arco sumergido de 35 metros realizamos cordones largos lineales, plumas y bastidores. En la fase de oferta acordamos con usted qué WPS y cualificaciones de personal se aplican al trabajo. <a href="../tozalti-kaynak.html">Nuestro servicio de arco sumergido →</a></p></div>
`,
    faq: [
      ['¿Un soldador con ISO 9606 puede manejar una máquina SAW?', 'La soldadura mecanizada o automática exige cualificación ISO 14732. La ISO 9606 cubre la destreza manual, no el manejo de la máquina.'],
      ['¿Un certificado de operador sirve para soldar a mano?', 'No. La ISO 14732 cubre solo el manejo de la máquina. Si la misma persona también suelda a mano, necesita una cualificación ISO 9606 aparte.'],
      ['¿Cuánto dura una cualificación ISO 14732?', 'Se mantiene con confirmaciones semestrales. La prórroga sigue una de las vías de la norma: reensayo o registros de inspección de producción.'],
      ['¿Un ensayo WPQR sirve como cualificación del operador?', 'El operador que suelda el ensayo WPQR puede cualificarse según ISO 14732 con ese mismo ensayo. Es una de las cuatro vías reconocidas.']
    ],
    cta_h3: 'Arco sumergido para piezas de cordón largo y chapa gruesa',
    cta_p: 'Envíe el plano de su pluma, bastidor o perfil largo; ofertamos con proceso de soldadura y cualificaciones de operador.',
    cta_btn: 'Solicitar oferta →'
  },
  fr: {
    title: 'ISO 14732 qualification des opérateurs de soudage : soudage mécanisé et à l’arc submergé',
    meta: 'Qu’est-ce que l’ISO 14732 ? Qualification des opérateurs en soudage mécanisé et automatique, différence avec l’ISO 9606, les quatre voies de qualification, validité et compétence de l’opérateur en soudage à l’arc submergé (SAW).',
    og: 'ISO 14732 : qualification des opérateurs de soudage',
    tag: 'Normes · Personnel',
    h1: 'ISO 14732 : qualification des opérateurs en soudage mécanisé et automatique',
    crumb: 'ISO 14732',
    read: '6 min de lecture',
    body: `
<p>En soudage manuel, la compétence du soudeur est certifiée selon l’<strong>ISO 9606</strong>. En soudage mécanisé et automatique, où la torche se déplace sur un chariot, une potence ou un tracteur, la personne qui travaille n’est pas un soudeur mais un <strong>opérateur de soudage</strong>, qualifié selon la <strong>NF EN ISO 14732</strong>. Le soudage à l’arc submergé (SAW), le MAG mécanisé, le TIG orbital et les procédés similaires relèvent de cette norme.</p>
<h2>Soudeur et opérateur</h2>
<table class="data-table"><thead><tr><th>Aspect</th><th>Soudeur (ISO 9606)</th><th>Opérateur (ISO 14732)</th></tr></thead><tbody>
<tr><td>Déplacement de la torche</td><td>Manuel</td><td>Mécanique ou automatique</td></tr>
<tr><td>Compétence décisive</td><td>Dextérité manuelle, position</td><td>Réglage de l’installation, choix des paramètres, surveillance et correction</td></tr>
<tr><td>Domaine de validité</td><td>Groupe de matériau, épaisseur, diamètre, position, produit d’apport</td><td>Procédé, type d’équipement, système de commande, passe unique ou multipasse, suivi de joint</td></tr>
<tr><td>Exemple courant</td><td>Soudure d’angle MAG, racine TIG sur tube</td><td>Bout à bout à l’arc submergé, long cordon mécanisé</td></tr>
</tbody></table>
<p>Chez l’opérateur, on n’évalue pas l’épaisseur ni la position, mais la capacité à bien régler l’installation et à gérer les paramètres pendant tout le soudage.</p>
<h2>Quatre voies de qualification</h2>
<ol>
<li><strong>Lors de la QMOS :</strong> l’opérateur qui soude l’épreuve de qualification du mode opératoire (ISO 15614) est qualifié par cette même épreuve.</li>
<li><strong>Essai de préproduction :</strong> une pièce représentative de la production est soudée et examinée.</li>
<li><strong>Éprouvette normalisée :</strong> une pièce semblable à celles de l’ISO 9606 ou de l’ISO 15614 est soudée.</li>
<li><strong>Soudures de production :</strong> la compétence est démontrée par l’examen de soudures réelles (par exemple en CND).</li>
</ol>
<p>Il faut en outre vérifier les connaissances en technologie du soudage et sur l’installation, ainsi que la connaissance fonctionnelle du réglage des paramètres, de la reconnaissance des défauts et de leur correction.</p>
<h2>Ce que couvre la qualification</h2>
<ul>
<li><strong>Procédé :</strong> par exemple 121 (arc submergé mono-fil) et les autres procédés du groupe 12 peuvent être évalués séparément.</li>
<li><strong>Système de commande :</strong> le domaine change entre mécanisé et automatique, avec ou sans contrôle visuel à distance.</li>
<li><strong>Suivi de joint :</strong> avec ou sans suivi automatique.</li>
<li><strong>Passe unique ou multipasse :</strong> qualifié en passe unique, on ne peut pas souder en multipasse ; l’inverse est admis.</li>
<li>Systèmes auxiliaires comme le <strong>suivi par l’arc ou par laser</strong></li>
</ul>
<h2>Validité et prolongation</h2>
<p>La logique est proche de celle de l’ISO 9606. Le coordinateur en soudage ou le contrôleur confirme tous les six mois que l’opérateur a travaillé sans interruption dans son domaine. Pour la prolongation, la norme propose trois options : requalification périodique, vérification par les enregistrements de contrôle des soudures de production des six derniers mois ou, sous conditions, validité continue fondée sur des contrôles de production réguliers. Après plus de six mois sans pratiquer le procédé, la qualification devient caduque.</p>
<h2>Pourquoi l’opérateur est clé en arc submergé</h2>
<p>En arc submergé, l’arc est invisible ; l’opérateur pilote le soudage à partir de l’intensité, de la tension, de la vitesse d’avance, de la vitesse fil et de l’aspect du cordon. Le suivi du joint, la hauteur de flux, les talons d’amorçage et de sortie sur longs cordons et le nettoyage entre passes lui reviennent. Sur tôles épaisses et longs cordons, une erreur de paramètre peut représenter des mètres de reprise.</p>
<h2>EN 1090 et ISO 3834</h2>
<p>L’EN 1090-2 exige que le personnel en soudage mécanisé et automatique soit qualifié selon l’ISO 14732. L’ISO 3834-2 pose la même exigence pour soudeurs et opérateurs. Un fournisseur qui revendique le soudage à l’arc submergé doit l’appuyer sur des qualifications ISO 14732 de ses opérateurs.</p>
<h2>Ce que l’acheteur doit vérifier</h2>
<ol>
<li>Existe-t-il une qualification ISO 14732 pour les soudures mécanisées ou automatiques ?</li>
<li>Le procédé et le type d’équipement du certificat correspondent-ils à l’installation ?</li>
<li>Les confirmations semestrielles sont-elles portées ?</li>
<li>Le DMOS de l’opérateur repose-t-il sur une QMOS approuvée ?</li>
</ol>
<div class="callout"><p><strong>Chez ArmaWeld :</strong> notre installation de soudage à l’arc submergé de 35 mètres sert aux longs cordons linéaires, flèches et châssis. Au stade de l’offre, nous convenons avec vous des DMOS et qualifications du personnel applicables à la commande. <a href="../tozalti-kaynak.html">Notre prestation arc submergé →</a></p></div>
`,
    faq: [
      ['Un soudeur certifié ISO 9606 peut-il conduire une installation SAW ?', 'Le soudage mécanisé ou automatique exige une qualification ISO 14732. L’ISO 9606 couvre la dextérité manuelle, pas la conduite d’installation.'],
      ['Une qualification d’opérateur permet-elle de souder manuellement ?', 'Non. L’ISO 14732 ne couvre que la conduite d’installation. Si la même personne soude aussi à la main, il lui faut une qualification ISO 9606 distincte.'],
      ['Combien de temps une qualification ISO 14732 est-elle valable ?', 'Elle est maintenue par des confirmations semestrielles. La prolongation suit l’une des voies de la norme : requalification ou enregistrements de contrôle de production.'],
      ['Une QMOS vaut-elle qualification d’opérateur ?', 'L’opérateur qui soude l’épreuve de QMOS peut être qualifié ISO 14732 par cette même épreuve. C’est l’une des quatre voies reconnues.']
    ],
    cta_h3: 'Arc submergé pour pièces à longs cordons et tôles épaisses',
    cta_p: 'Envoyez le plan de votre flèche, châssis ou profilé long ; nous chiffrons avec procédé et qualifications des opérateurs.',
    cta_btn: 'Demander un devis →'
  },
  it: {
    title: 'ISO 14732 qualificazione degli operatori di saldatura: saldatura meccanizzata e ad arco sommerso',
    meta: 'Cos’è la ISO 14732? Qualificazione degli operatori per saldatura meccanizzata e automatica, differenza con la ISO 9606, le quattro vie di qualificazione, validità e competenza dell’operatore nell’arco sommerso (SAW).',
    og: 'ISO 14732: qualificazione degli operatori di saldatura',
    tag: 'Norme · Personale',
    h1: 'ISO 14732: qualificazione degli operatori nella saldatura meccanizzata e automatica',
    crumb: 'ISO 14732',
    read: '6 min di lettura',
    body: `
<p>Nella saldatura manuale la competenza del saldatore si certifica secondo la <strong>ISO 9606</strong>. Nella saldatura meccanizzata e automatica, dove la torcia avanza su un carrello, una colonna-braccio o un trattore, chi lavora non è un saldatore ma un <strong>operatore di saldatura</strong>, qualificato secondo la <strong>UNI EN ISO 14732</strong>. Arco sommerso (SAW), MAG meccanizzato, TIG orbitale e processi simili rientrano in questa norma.</p>
<h2>Saldatore e operatore</h2>
<table class="data-table"><thead><tr><th>Aspetto</th><th>Saldatore (ISO 9606)</th><th>Operatore (ISO 14732)</th></tr></thead><tbody>
<tr><td>Movimento della torcia</td><td>Manuale</td><td>Meccanico o automatico</td></tr>
<tr><td>Abilità decisiva</td><td>Destrezza manuale, posizione</td><td>Impostazione della macchina, scelta dei parametri, sorveglianza e correzione</td></tr>
<tr><td>Campo di validità</td><td>Gruppo di materiale, spessore, diametro, posizione, consumabile</td><td>Processo, tipo di impianto, sistema di controllo, singola o multipassata, inseguimento del giunto</td></tr>
<tr><td>Esempio tipico</td><td>Angolo MAG, radice TIG su tubo</td><td>Testa a testa ad arco sommerso, cordone lungo meccanizzato</td></tr>
</tbody></table>
<p>Per l’operatore non conta lo spessore o la posizione, ma la capacità di impostare correttamente la macchina e gestire i parametri per tutta la saldatura.</p>
<h2>Quattro vie di qualificazione</h2>
<ol>
<li><strong>Durante la prova WPQR:</strong> l’operatore che salda la qualifica del procedimento (ISO 15614) è qualificato dalla stessa prova.</li>
<li><strong>Prova pre-produzione:</strong> si salda ed esamina un saggio rappresentativo del pezzo.</li>
<li><strong>Saggio normalizzato:</strong> si salda un pezzo simile a quelli della ISO 9606 o ISO 15614.</li>
<li><strong>Saldature di produzione:</strong> la competenza si dimostra esaminando saldature reali (ad esempio con CND).</li>
</ol>
<p>Va inoltre verificata la conoscenza della tecnologia di saldatura e dell’impianto, nonché la conoscenza funzionale di regolazione dei parametri, riconoscimento e correzione dei difetti.</p>
<h2>Cosa copre la qualifica</h2>
<ul>
<li><strong>Processo:</strong> ad esempio 121 (arco sommerso a filo singolo) e altri processi del gruppo 12 possono essere valutati separatamente.</li>
<li><strong>Sistema di controllo:</strong> il campo cambia tra meccanizzato e automatico, con o senza controllo visivo a distanza.</li>
<li><strong>Inseguimento del giunto:</strong> con o senza inseguimento automatico.</li>
<li><strong>Singola o multipassata:</strong> chi è qualificato in singola passata non può eseguire multipassate; il contrario sì.</li>
<li>Sistemi ausiliari come <strong>sensore d’arco o inseguimento laser</strong></li>
</ul>
<h2>Validità e proroga</h2>
<p>La logica è simile alla ISO 9606. Il coordinatore di saldatura o l’ispettore conferma ogni sei mesi che l’operatore ha lavorato con continuità nel campo di validità. Per la proroga la norma prevede tre opzioni: riqualifica periodica, verifica tramite registrazioni di controllo delle saldature di produzione degli ultimi sei mesi o, a determinate condizioni, validità continuativa basata su controlli di produzione regolari. Oltre sei mesi senza lavorare nel processo, la qualifica decade.</p>
<h2>Perché l’operatore è decisivo nell’arco sommerso</h2>
<p>Nell’arco sommerso l’arco non si vede; l’operatore governa la saldatura tramite corrente, tensione, velocità di avanzamento, velocità del filo e forma del cordone. Inseguimento del giunto, altezza del flusso, prolunghe di inizio e fine sui cordoni lunghi e pulizia tra le passate sono compiti suoi. Su lamiere spesse e cordoni lunghi un errore di parametro può significare metri di riparazione.</p>
<h2>EN 1090 e ISO 3834</h2>
<p>La EN 1090-2 richiede che il personale addetto alla saldatura meccanizzata e automatica sia qualificato secondo ISO 14732. La ISO 3834-2 pone lo stesso requisito per saldatori e operatori. Un fornitore che dichiara capacità SAW dovrebbe supportarla con le qualifiche ISO 14732 dei suoi operatori.</p>
<h2>Cosa deve verificare l’acquirente</h2>
<ol>
<li>Esiste una qualifica ISO 14732 per le saldature meccanizzate o automatiche?</li>
<li>Processo e tipo di impianto del certificato corrispondono alla macchina usata?</li>
<li>Le conferme semestrali sono registrate?</li>
<li>La WPS dell’operatore si basa su una WPQR approvata?</li>
</ol>
<div class="callout"><p><strong>In ArmaWeld:</strong> sul nostro impianto ad arco sommerso da 35 metri eseguiamo cordoni lunghi lineari, bracci e telai. In fase di offerta concordiamo con voi quali WPS e qualifiche del personale si applicano alla commessa. <a href="../tozalti-kaynak.html">Il nostro servizio ad arco sommerso →</a></p></div>
`,
    faq: [
      ['Un saldatore ISO 9606 può condurre un impianto SAW?', 'La saldatura meccanizzata o automatica richiede la qualifica ISO 14732. La ISO 9606 copre la destrezza manuale, non la conduzione dell’impianto.'],
      ['Con la qualifica di operatore si può saldare a mano?', 'No. La ISO 14732 copre solo la conduzione dell’impianto. Se la stessa persona salda anche a mano, serve una qualifica ISO 9606 separata.'],
      ['Quanto dura una qualifica ISO 14732?', 'Si mantiene con conferme semestrali. La proroga segue una delle vie previste: riqualifica o registrazioni di controllo della produzione.'],
      ['Una prova WPQR vale come qualifica dell’operatore?', 'L’operatore che salda la prova WPQR può essere qualificato ISO 14732 con la stessa prova. È una delle quattro vie riconosciute.']
    ],
    cta_h3: 'Arco sommerso per pezzi con cordoni lunghi e lamiere spesse',
    cta_p: 'Inviateci il disegno di braccio, telaio o profilo lungo; offriamo con processo di saldatura e qualifiche degli operatori.',
    cta_btn: 'Richiedi un preventivo →'
  },
  nl: {
    title: 'ISO 14732 kwalificatie van lasoperators: gemechaniseerd en onder poeder lassen',
    meta: 'Wat is ISO 14732? Kwalificatie van operators voor gemechaniseerd en automatisch lassen, het verschil met ISO 9606, de vier kwalificatieroutes, geldigheid en operatorbekwaamheid bij onder poeder lassen (OP/SAW).',
    og: 'ISO 14732: kwalificatie van lasoperators',
    tag: 'Normen · Personeel',
    h1: 'ISO 14732: kwalificatie van operators bij gemechaniseerd en automatisch lassen',
    crumb: 'ISO 14732',
    read: '6 min lezen',
    body: `
<p>Bij handlassen wordt de bekwaamheid van de lasser gecertificeerd volgens <strong>ISO 9606</strong>. Bij gemechaniseerd en automatisch lassen, waarbij de toorts op een wagen, kolom-giek of tractor beweegt, doet geen lasser het werk maar een <strong>lasoperator</strong>, gekwalificeerd volgens <strong>NEN-EN-ISO 14732</strong>. Onder poeder lassen (OP/SAW), gemechaniseerd MAG, orbitaal TIG en vergelijkbare processen vallen hieronder.</p>
<h2>Lasser en operator</h2>
<table class="data-table"><thead><tr><th>Aspect</th><th>Lasser (ISO 9606)</th><th>Operator (ISO 14732)</th></tr></thead><tbody>
<tr><td>Toortsbeweging</td><td>Handmatig</td><td>Mechanisch of automatisch</td></tr>
<tr><td>Bepalende vaardigheid</td><td>Handvaardigheid, positie</td><td>Instellen van de machine, parameterkeuze, bewaking en correctie</td></tr>
<tr><td>Geldigheidsgebied</td><td>Materiaalgroep, dikte, diameter, positie, toevoegmateriaal</td><td>Proces, type installatie, besturing, één- of meerlaags, naadvolging</td></tr>
<tr><td>Typisch voorbeeld</td><td>MAG-hoeklas, TIG-buisgrondlaag</td><td>OP-stompe las, gemechaniseerde lange naad</td></tr>
</tbody></table>
<p>Bij de operator telt niet dikte of positie, maar het vermogen de machine goed in te stellen en de parameters tijdens het hele lassen te beheersen.</p>
<h2>Vier kwalificatieroutes</h2>
<ol>
<li><strong>Tijdens de WPQR-test:</strong> de operator die de procedurekwalificatie (ISO 15614) last, wordt met dezelfde test gekwalificeerd.</li>
<li><strong>Pre-productietest:</strong> een proefstuk dat het productiedeel vertegenwoordigt, wordt gelast en onderzocht.</li>
<li><strong>Standaard proefstuk:</strong> een stuk vergelijkbaar met die uit ISO 9606 of ISO 15614 wordt gelast.</li>
<li><strong>Productielassen:</strong> bekwaamheid wordt aangetoond door echte productielassen te onderzoeken (bijv. met NDO).</li>
</ol>
<p>Daarnaast moet kennis van lastechniek en installatie worden aangetoond, en functionele kennis van parameterinstelling, foutherkenning en correctie.</p>
<h2>Wat de kwalificatie dekt</h2>
<ul>
<li><strong>Proces:</strong> bijvoorbeeld 121 (OP met één draad) en andere processen uit groep 12 kunnen apart worden beoordeeld.</li>
<li><strong>Besturing:</strong> het bereik verschilt tussen gemechaniseerd en automatisch, en met of zonder visuele controle op afstand.</li>
<li><strong>Naadvolging:</strong> met of zonder automatische naadvolging.</li>
<li><strong>Eén- of meerlaags:</strong> wie eenlaags is gekwalificeerd, mag niet meerlaags lassen; andersom wel.</li>
<li>Hulpsystemen zoals <strong>boogsensor of lasernaadvolging</strong></li>
</ul>
<h2>Geldigheid en verlenging</h2>
<p>De logica lijkt op die van ISO 9606. De lascoördinator of inspecteur bevestigt elke zes maanden dat de operator onafgebroken binnen het bereik heeft gewerkt. Voor verlenging biedt de norm drie opties: periodieke herkeuring, verificatie met inspectieregistraties van productielassen uit de laatste zes maanden of, onder voorwaarden, doorlopende geldigheid op basis van regelmatige productiecontroles. Wie langer dan zes maanden niet in het proces werkt, verliest de kwalificatie.</p>
<h2>Waarom de operator bij OP-lassen bepalend is</h2>
<p>Bij onder poeder lassen is de boog niet zichtbaar; de operator stuurt het lassen via stroom, spanning, voortloopsnelheid, draadsnelheid en het lasbeeld. Juiste naadvolging, poederhoogte, aanloop- en uitloopplaten bij lange naden en reiniging tussen de lagen zijn zijn werk. Bij dikke platen en lange naden kan één parameterfout meters herstelwerk betekenen.</p>
<h2>EN 1090 en ISO 3834</h2>
<p>EN 1090-2 eist dat personeel voor gemechaniseerd en automatisch lassen gekwalificeerd is volgens ISO 14732. ISO 3834-2 stelt dezelfde eis aan lassers en operators. Een leverancier die OP-capaciteit claimt, moet dat onderbouwen met ISO 14732-kwalificaties van zijn operators.</p>
<h2>Wat een inkoper moet controleren</h2>
<ol>
<li>Is er een ISO 14732-kwalificatie voor gemechaniseerd of automatisch gelaste naden?</li>
<li>Komen proces en installatietype op het certificaat overeen met de gebruikte machine?</li>
<li>Zijn de halfjaarlijkse bevestigingen vastgelegd?</li>
<li>Is de WPS van de operator gebaseerd op een goedgekeurde WPQR?</li>
</ol>
<div class="callout"><p><strong>Bij ArmaWeld:</strong> op onze OP-lasinstallatie van 35 meter lassen we lineaire lange naden, gieken en chassis. In de offertefase stemmen we met u af welke WPS'en en personeelskwalificaties voor de opdracht gelden. <a href="../tozalti-kaynak.html">Ons onder poeder lassen →</a></p></div>
`,
    faq: [
      ['Mag een lasser met ISO 9606 een OP-machine bedienen?', 'Voor gemechaniseerd of automatisch lassen is ISO 14732 vereist. ISO 9606 dekt handvaardigheid, niet de bediening van de machine.'],
      ['Mag een operator met ISO 14732 met de hand lassen?', 'Nee. ISO 14732 dekt alleen de bediening van de machine. Wie ook met de hand last, heeft een aparte ISO 9606-kwalificatie nodig.'],
      ['Hoe lang is een ISO 14732-kwalificatie geldig?', 'Ze blijft geldig met halfjaarlijkse bevestigingen. Verlenging gebeurt via een van de routes uit de norm: herkeuring of inspectieregistraties uit de productie.'],
      ['Telt een WPQR-test als operatorkwalificatie?', 'De operator die de WPQR-test last, kan met dezelfde test volgens ISO 14732 worden gekwalificeerd. Dat is een van de vier erkende routes.']
    ],
    cta_h3: 'Onder poeder lassen voor delen met lange naden en dikke platen',
    cta_p: 'Stuur uw tekening van giek, chassis of lang profiel; we bieden aan met lasproces en operatorkwalificaties.',
    cta_btn: 'Offerte aanvragen →'
  },
  no: {
    title: 'ISO 14732 kvalifisering av sveiseoperatører: mekanisert og pulverbuesveising',
    meta: 'Hva er ISO 14732? Kvalifisering av operatører for mekanisert og automatisk sveising, forskjellen fra ISO 9606, de fire kvalifiseringsveiene, gyldighet og operatørkompetanse ved pulverbuesveising (SAW).',
    og: 'ISO 14732: kvalifisering av sveiseoperatører',
    tag: 'Standarder · Personell',
    h1: 'ISO 14732: kvalifisering av operatører for mekanisert og automatisk sveising',
    crumb: 'ISO 14732',
    read: '6 min lesing',
    body: `
<p>Ved manuell sveising sertifiseres sveiserens kompetanse etter <strong>ISO 9606</strong>. Ved mekanisert og automatisk sveising, der brenneren går på en vogn, søyle og bom eller traktor, er det ikke en sveiser, men en <strong>sveiseoperatør</strong> som gjør jobben, kvalifisert etter <strong>NS-EN ISO 14732</strong>. Pulverbuesveising (SAW), mekanisert MAG, orbital TIG og lignende prosesser omfattes.</p>
<h2>Sveiser og operatør</h2>
<table class="data-table"><thead><tr><th>Forhold</th><th>Sveiser (ISO 9606)</th><th>Operatør (ISO 14732)</th></tr></thead><tbody>
<tr><td>Brennerføring</td><td>Manuell</td><td>Mekanisk eller automatisk</td></tr>
<tr><td>Avgjørende ferdighet</td><td>Håndlag, posisjon</td><td>Oppsett av maskin, valg av parametere, overvåking og korrigering</td></tr>
<tr><td>Gyldighetsområde</td><td>Materialgruppe, tykkelse, diameter, posisjon, tilsettmateriale</td><td>Prosess, utstyrstype, styresystem, én eller flere strenger, sømfølging</td></tr>
<tr><td>Typisk eksempel</td><td>MAG-kilsveis, TIG-rotstreng i rør</td><td>Pulverbue-buttsveis, mekanisert langsøm</td></tr>
</tbody></table>
<p>Hos operatøren vurderes ikke tykkelse eller posisjon, men evnen til å sette opp maskinen riktig og styre parameterne gjennom hele sveisen.</p>
<h2>Fire kvalifiseringsveier</h2>
<ol>
<li><strong>Under WPQR-prøven:</strong> operatøren som sveiser prosedyrekvalifiseringen (ISO 15614), kvalifiseres med samme prøve.</li>
<li><strong>Forproduksjonsprøve:</strong> et prøvestykke som representerer produksjonsdelen, sveises og undersøkes.</li>
<li><strong>Standard prøvestykke:</strong> et stykke likt dem i ISO 9606 eller ISO 15614 sveises.</li>
<li><strong>Produksjonssveis:</strong> kompetansen dokumenteres ved å undersøke faktiske produksjonssveiser (f.eks. med NDT).</li>
</ol>
<p>I tillegg må operatørens kunnskap om sveiseteknologi og maskinen, og funksjonell kunnskap om parameterinnstilling, feilgjenkjenning og korrigering, verifiseres.</p>
<h2>Hva kvalifiseringen dekker</h2>
<ul>
<li><strong>Prosess:</strong> for eksempel 121 (pulverbue med én tråd) og andre prosesser i gruppe 12 kan vurderes hver for seg.</li>
<li><strong>Styresystem:</strong> området endres mellom mekanisert og automatisk, og med eller uten visuell fjernkontroll.</li>
<li><strong>Sømfølging:</strong> med eller uten automatisk sømfølging.</li>
<li><strong>Én eller flere strenger:</strong> kvalifisert på én streng kan ikke sveise flere; motsatt er tillatt.</li>
<li>Hjelpesystemer som <strong>buesensor eller laserfølging</strong></li>
</ul>
<h2>Gyldighet og forlengelse</h2>
<p>Logikken ligner ISO 9606. Sveisekoordinator eller inspektør bekrefter hver sjette måned at operatøren har arbeidet sammenhengende innenfor området. For forlengelse gir standarden tre valg: periodisk omprøving, verifisering med inspeksjonsregistreringer av produksjonssveiser fra de siste seks månedene eller, under gitte forhold, løpende gyldighet basert på jevnlige produksjonskontroller. Arbeider operatøren ikke i prosessen på over seks måneder, bortfaller kvalifiseringen.</p>
<h2>Hvorfor operatøren er avgjørende ved pulverbuesveising</h2>
<p>Ved pulverbuesveising er buen ikke synlig; operatøren styrer sveisen via strøm, spenning, sveisehastighet, trådhastighet og sveiseprofil. Riktig sømfølging, pulverhøyde, start- og endeplater på lange sømmer og rengjøring mellom strengene er operatørens ansvar. På tykk plate og lange sømmer kan én parameterfeil bety meter med reparasjon.</p>
<h2>EN 1090 og ISO 3834</h2>
<p>EN 1090-2 krever at personell som utfører mekanisert og automatisk sveising, er kvalifisert etter ISO 14732. ISO 3834-2 stiller samme kompetansekrav til sveisere og operatører. En leverandør som oppgir pulverbuekompetanse, bør dokumentere det med ISO 14732-kvalifiseringer for operatørene.</p>
<h2>Hva innkjøper bør kontrollere</h2>
<ol>
<li>Finnes ISO 14732-kvalifisering for sveiser utført mekanisert eller automatisk?</li>
<li>Stemmer prosess og utstyrstype på sertifikatet med maskinen som brukes?</li>
<li>Er halvårlige bekreftelser registrert?</li>
<li>Bygger operatørens WPS på en godkjent WPQR?</li>
</ol>
<div class="callout"><p><strong>Hos ArmaWeld:</strong> på vår 35 meter lange pulverbuesveisemaskin sveiser vi lineære langsømmer, bommer og chassis. I tilbudsfasen avtaler vi med deg hvilke WPS-er og personellkvalifiseringer som gjelder for jobben. <a href="../tozalti-kaynak.html">Vår pulverbuesveising →</a></p></div>
`,
    faq: [
      ['Kan en sveiser med ISO 9606 kjøre en pulverbuemaskin?', 'Mekanisert eller automatisk sveising krever ISO 14732-kvalifisering. ISO 9606 dekker manuelt håndlag, ikke maskinbetjening.'],
      ['Kan et operatørsertifikat brukes til manuell sveising?', 'Nei. ISO 14732 dekker bare maskinbetjening. Sveiser samme person også manuelt, trengs en egen ISO 9606-kvalifisering.'],
      ['Hvor lenge gjelder en ISO 14732-kvalifisering?', 'Den opprettholdes med halvårlige bekreftelser. Forlengelse skjer via en av veiene i standarden: omprøving eller inspeksjonsregistreringer fra produksjonen.'],
      ['Teller en WPQR-prøve som operatørkvalifisering?', 'Operatøren som sveiser WPQR-prøven, kan kvalifiseres etter ISO 14732 med samme prøve. Det er en av fire anerkjente veier.']
    ],
    cta_h3: 'Pulverbuesveising for deler med lange sømmer og tykk plate',
    cta_p: 'Send tegning av bom, chassis eller lang profil, så gir vi tilbud med sveiseprosess og operatørkvalifiseringer.',
    cta_btn: 'Be om tilbud →'
  }
};
