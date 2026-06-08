/* ================================================================
   Deutsch B2 – Berufliches Deutsch  |  v2.0
   10 Einheiten · Grammatik-Modul · Hörübungen · B1→B2+ Lernpfad
   Kursinhalt: original, eigens geschrieben. PDF: nur lokal angezeigt.
================================================================ */

if (window.pdfjsLib)
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

/* ============================================================
   COURSE DATA  —  10 Einheiten B1/B2/B2+
============================================================ */
const COURSE = [

/* ── Einheit 1 ─────────────────────────────────────── B2 ── */
{ id:'l1', tag:'Bewerbung', level:'b2',
  title:'Bewerbung & Vorstellungsgespräch',
  desc:'Stellenanzeigen lesen, Anschreiben verfassen, höflich auftreten.',
  vocab:[
    {de:'die Bewerbung',       ru:'заявка на вакансию',       ex:'Ich habe meine Bewerbung gestern abgeschickt.'},
    {de:'das Anschreiben',     ru:'сопроводительное письмо',  ex:'Das Anschreiben sollte nicht länger als eine Seite sein.'},
    {de:'der Lebenslauf',      ru:'резюме',                   ex:'Im Lebenslauf stehen deine bisherigen Stationen.'},
    {de:'das Vorstellungsgespräch', ru:'собеседование',       ex:'Ich bin zum Vorstellungsgespräch eingeladen worden.'},
    {de:'die Berufserfahrung', ru:'опыт работы',              ex:'Sie verfügt über langjährige Berufserfahrung.'},
    {de:'die Kenntnisse (Pl.)',ru:'знания, навыки',            ex:'Gute Sprachkenntnisse sind von Vorteil.'},
    {de:'sich bewerben um',    ru:'подавать заявку на',       ex:'Ich bewerbe mich um die Stelle als Verkaufsleiter.'},
    {de:'einstellen',          ru:'нанимать',                 ex:'Das Unternehmen stellt neue Mitarbeiter ein.'},
    {de:'die Stellenanzeige',  ru:'объявление о вакансии',    ex:'Ich habe die Stellenanzeige online gefunden.'},
    {de:'das Gehalt',          ru:'зарплата (оклад)',         ex:'Über das Gehalt sprechen wir im zweiten Gespräch.'},
    {de:'die Probezeit',       ru:'испытательный срок',       ex:'Die Probezeit dauert in der Regel sechs Monate.'},
    {de:'unbefristet',         ru:'бессрочный',               ex:'Es handelt sich um einen unbefristeten Vertrag.'},
    {de:'die Kündigung',       ru:'увольнение, расторжение',  ex:'Er hat seine Kündigung fristgerecht eingereicht.'},
    {de:'die Fähigkeit',       ru:'способность, навык',       ex:'Teamfähigkeit ist eine wichtige Eigenschaft.'},
  ],
  gramHTML:`
    <h3>Konjunktiv II — höfliche Bitten und Wünsche</h3>
    <p>Im Berufsleben macht <b>Konjunktiv II</b> Bitten weicher und professioneller. Direkte Sätze wirken oft zu fordernd.</p>
    <table>
      <tr><th>direkt (hart)</th><th>höflich (Konjunktiv II)</th></tr>
      <tr><td>Können Sie …?</td><td>Könnten Sie mir bitte sagen …?</td></tr>
      <tr><td>Ich will mehr wissen.</td><td>Ich würde gern mehr erfahren.</td></tr>
      <tr><td>Ich habe eine Frage.</td><td>Ich hätte eine Frage dazu.</td></tr>
      <tr><td>Ist das möglich?</td><td>Wäre das möglich?</td></tr>
      <tr><td>Darf ich fragen?</td><td>Dürfte ich kurz fragen?</td></tr>
    </table>
    <div class="ex-box"><b>Ich würde gern mehr über die Aufgaben erfahren.</b><span class="gl">Я хотел бы узнать больше о задачах.</span></div>
    <div class="ex-box"><b>Könnten Sie mir die Gehaltsspanne nennen?</b><span class="gl">Не могли бы вы назвать мне диапазон зарплат?</span></div>
    <div class="tip"><b>Merke:</b> <b>würde</b> + Infinitiv klappt mit fast allen Verben. <b>hätte, wäre, könnte, müsste, dürfte</b> stehen direkt ohne „würde".</div>`,
  exercises:[
    {id:'l1e1',type:'mc',q:'Welcher Satz klingt im Gespräch am professionellsten?',
     options:['Sagen Sie mir das Gehalt.','Ich würde gern die Gehaltsspanne erfahren.','Was verdiene ich hier?'],
     answer:1,explain:'Konjunktiv II + „gern" signalisiert höfliches Interesse, ohne zu fordern.'},
    {id:'l1e2',type:'gap',q:'„___ Sie mir bitte die Stellenbeschreibung zuschicken?" (höfliche Bitte)',
     accept:['könnten','koennten'],hint:'Konjunktiv II von „können", formell (Sie).',explain:'Könnten'},
    {id:'l1e3',type:'listen',
     audio:'Guten Tag, mein Name ist Müller. Ich bewerbe mich auf die Stelle als Projektleiter und würde gern mehr über die Anforderungen erfahren.',
     q:'Was ist das Ziel dieser Aussage?',
     options:['Eine Kündigung einreichen','Informationen über eine Stelle erfragen','Einen Kollegen vorstellen'],
     answer:1,explain:'Die Person bewirbt sich und fragt nach Stellenanforderungen — typische Eröffnung im Gespräch.'},
    {id:'l1e4',type:'order',q:'Bilde eine höfliche Aussage:',
     words:['Ich','hätte','noch','eine','Frage','zur','Probezeit'],answer:'Ich hätte noch eine Frage zur Probezeit'},
    {id:'l1e5',type:'match',q:'Ordne zu:',
     pairs:[['der Lebenslauf','резюме'],['die Kündigung','увольнение'],['einstellen','нанимать'],['unbefristet','бессрочный']]},
  ]
},

/* ── Einheit 2 ─────────────────────────────────────── B1 ── */
{ id:'l2', tag:'Telefonieren', level:'b1',
  title:'Telefonieren am Arbeitsplatz',
  desc:'Anrufe entgegennehmen, verbinden, Nachrichten hinterlassen.',
  vocab:[
    {de:'sich melden',               ru:'отвечать на звонок',         ex:'Müller, Marketing — guten Tag!'},
    {de:'verbinden (mit)',            ru:'соединять (с)',              ex:'Ich verbinde Sie sofort mit Frau Berg.'},
    {de:'zurückrufen',               ru:'перезвонить',                ex:'Herr Klein ruft Sie in einer Stunde zurück.'},
    {de:'die Durchwahl',             ru:'добавочный номер',           ex:'Meine Durchwahl ist die 214.'},
    {de:'besetzt',                   ru:'занято (линия)',             ex:'Die Leitung ist gerade besetzt.'},
    {de:'etwas ausrichten',          ru:'передать (сообщение)',       ex:'Kann ich ihr etwas ausrichten?'},
    {de:'eine Nachricht hinterlassen',ru:'оставить сообщение',        ex:'Möchten Sie eine Nachricht hinterlassen?'},
    {de:'erreichen',                 ru:'дозвониться, застать',       ex:'Unter welcher Nummer kann ich Sie erreichen?'},
    {de:'das Anliegen',              ru:'вопрос, дело, обращение',   ex:'Worum geht es? — Mein Anliegen ist kurz.'},
    {de:'buchstabieren',             ru:'произносить по буквам',      ex:'Könnten Sie Ihren Namen bitte buchstabieren?'},
    {de:'der Anrufbeantworter',      ru:'автоответчик',               ex:'Sie sprechen mit dem Anrufbeantworter.'},
    {de:'die Rückrufnummer',         ru:'номер для обратного звонка', ex:'Hinterlassen Sie bitte Ihre Rückrufnummer.'},
  ],
  gramHTML:`
    <h3>Indirekte Fragen — höflicher am Telefon</h3>
    <p>Direkte Fragen klingen am Telefon abrupt. Eingeleitetete (indirekte) Fragen wirken professioneller. Das Verb rutscht dabei ans <b>Satzende</b>.</p>
    <table>
      <tr><th>direkte Frage</th><th>höflich / indirekt</th></tr>
      <tr><td>Wann ruft er zurück?</td><td>Könnten Sie mir sagen, <b>wann er zurückruft?</b></td></tr>
      <tr><td>Ist Frau Berg da?</td><td>Ich wollte fragen, <b>ob Frau Berg da ist.</b></td></tr>
      <tr><td>Wie ist Ihr Name?</td><td>Dürfte ich fragen, <b>wie Ihr Name ist?</b></td></tr>
      <tr><td>Was ist Ihr Anliegen?</td><td>Könnten Sie mir sagen, <b>was Ihr Anliegen ist?</b></td></tr>
    </table>
    <div class="tip"><b>Achtung:</b> Nach ob / wann / wie / was steht das konjugierte Verb ganz am Ende: „… ob Frau Berg <b>da ist</b>."</div>
    <h3>Redemittel am Telefon</h3>
    <div class="ex-box"><b>Sich melden:</b> „[Firma], [Name], guten Tag. Was kann ich für Sie tun?"</div>
    <div class="ex-box"><b>Nicht erreichbar:</b> „Herr X ist gerade nicht am Platz. Kann ich etwas ausrichten?"</div>
    <div class="ex-box"><b>Verbinden:</b> „Einen Moment bitte, ich verbinde Sie."</div>`,
  exercises:[
    {id:'l2e1',type:'mc',q:'Der Kollege ist nicht da. Was sagst du am Telefon?',
     options:['Er ist weg, rufen Sie später an.','Er ist gerade nicht am Platz. Kann ich etwas ausrichten?','Ich weiß nicht, wo er ist.'],
     answer:1,explain:'„nicht am Platz" + „ausrichten" ist die professionelle Standardformel.'},
    {id:'l2e2',type:'gap',q:'„Könnten Sie mir sagen, wann Herr Klein ___?" (zurückrufen)',
     accept:['zurückruft','zurueckruft'],hint:'Indirekte Frage → Verb ans Ende, 3. Person.',explain:'zurückruft'},
    {id:'l2e3',type:'listen',
     audio:'Guten Tag, hier ist Schmidt von der Firma Berger. Ich wollte fragen, ob Frau Hoffmann heute erreichbar ist. Könnten Sie ihr bitte ausrichten, dass ich um drei Uhr zurückrufe?',
     q:'Was möchte Herr Schmidt?',
     options:['Frau Hoffmann sofort sprechen','Eine Nachricht für Frau Hoffmann hinterlassen','Den Termin absagen'],
     answer:1,explain:'Er hinterlässt eine Nachricht — er ruft um 15 Uhr zurück.'},
    {id:'l2e4',type:'order',q:'Bilde die indirekte Frage:',
     words:['Ich','wollte','fragen','ob','der','Termin','noch','steht'],answer:'Ich wollte fragen ob der Termin noch steht'},
    {id:'l2e5',type:'match',q:'Ordne zu:',
     pairs:[['verbinden','соединять'],['besetzt','занято'],['ausrichten','передать'],['die Durchwahl','добавочный номер']]},
  ]
},

/* ── Einheit 3 ─────────────────────────────────────── B2 ── */
{ id:'l3', tag:'Korrespondenz', level:'b2',
  title:'Geschäftliche E-Mails',
  desc:'Aufbau, Anrede, Passiv und formelle Standardformeln.',
  vocab:[
    {de:'die Anrede',          ru:'обращение',               ex:'Die Anrede lautet „Sehr geehrte Damen und Herren".'},
    {de:'der Betreff',         ru:'тема письма',             ex:'Im Betreff steht der Grund der E-Mail.'},
    {de:'der Anhang',          ru:'вложение',                ex:'Den Vertrag finden Sie im Anhang.'},
    {de:'beigefügt',           ru:'прилагаемый',             ex:'Beigefügt erhalten Sie die Rechnung.'},
    {de:'sich beziehen auf',   ru:'ссылаться на',            ex:'Ich beziehe mich auf Ihre E-Mail vom 3. Mai.'},
    {de:'zusenden',            ru:'высылать',                ex:'Wir senden Ihnen die Unterlagen umgehend zu.'},
    {de:'die Rückmeldung',     ru:'обратная связь, ответ',   ex:'Ich freue mich auf Ihre Rückmeldung.'},
    {de:'die Frist',           ru:'срок',                    ex:'Die Frist endet am kommenden Freitag.'},
    {de:'umgehend',            ru:'незамедлительно',         ex:'Ihre Anfrage wird umgehend bearbeitet.'},
    {de:'die Anfrage',         ru:'запрос',                  ex:'Vielen Dank für Ihre Anfrage.'},
    {de:'mit freundlichen Grüßen', ru:'с уважением (концовка)', ex:'Mit freundlichen Grüßen, A. Berg.'},
    {de:'der Empfänger',       ru:'получатель',              ex:'Bitte prüfen Sie den Empfänger.'},
  ],
  gramHTML:`
    <h3>Passiv — sachlich und formell</h3>
    <p>Das <b>Vorgangspassiv</b> wirkt unpersönlich und sachlich — ideal für geschäftliche E-Mails.</p>
    <table>
      <tr><th>Zeit</th><th>Aktiv</th><th>Passiv</th></tr>
      <tr><td>Präsens</td><td>Wir bearbeiten die Anfrage.</td><td>Die Anfrage <b>wird bearbeitet</b>.</td></tr>
      <tr><td>Präteritum</td><td>Wir sendeten die Unterlagen.</td><td>Die Unterlagen <b>wurden gesendet</b>.</td></tr>
      <tr><td>Perfekt</td><td>Wir haben zugesandt.</td><td>Die Unterlagen sind zugesandt <b>worden</b>.</td></tr>
    </table>
    <div class="tip"><b>Perfekt-Passiv:</b> „ist … <b>worden</b>" — nicht „geworden"!</div>
    <h3>Fester Aufbau einer formellen E-Mail</h3>
    <div class="ex-box"><b>Anrede:</b> Sehr geehrte Frau Berg, / Sehr geehrte Damen und Herren,<span class="gl">→ nach Komma weiter klein</span></div>
    <div class="ex-box"><b>Einleitung:</b> vielen Dank für Ihre E-Mail vom … / ich beziehe mich auf …</div>
    <div class="ex-box"><b>Schluss:</b> Mit freundlichen Grüßen / Hochachtungsvoll</div>`,
  exercises:[
    {id:'l3e1',type:'mc',q:'Welche Anrede ist formell korrekt, wenn Name unbekannt?',
     options:['Hallo zusammen,','Sehr geehrte Damen und Herren,','Guten Tag,'],
     answer:1,explain:'„Sehr geehrte Damen und Herren," ist der Standard für unbekannte Empfänger.'},
    {id:'l3e2',type:'gap',q:'Passiv Präsens: „Ihre Anfrage ___ umgehend bearbeitet."',
     accept:['wird'],hint:'werden, 3. Person Singular.',explain:'wird'},
    {id:'l3e3',type:'listen',
     audio:'Sehr geehrte Frau Schneider, vielen Dank für Ihre Anfrage vom zwölften Mai. Die gewünschten Unterlagen wurden Ihnen heute zugesandt. Mit freundlichen Grüßen, Thomas Keller.',
     q:'Was hat Thomas Keller bereits getan?',
     options:['Er hat einen Termin vereinbart','Er hat die Unterlagen zugesandt','Er hat die Anfrage abgelehnt'],
     answer:1,explain:'„Die Unterlagen wurden … zugesandt" — Passiv Präteritum.'},
    {id:'l3e4',type:'order',q:'Passiv Perfekt:',
     words:['Die','Unterlagen','sind','Ihnen','bereits','zugesandt','worden'],answer:'Die Unterlagen sind Ihnen bereits zugesandt worden'},
    {id:'l3e5',type:'match',q:'Ordne zu:',
     pairs:[['der Betreff','тема письма'],['der Anhang','вложение'],['die Frist','срок'],['die Rückmeldung','обратная связь']]},
  ]
},

/* ── Einheit 4 ─────────────────────────────────────── B2 ── */
{ id:'l4', tag:'Meetings', level:'b2',
  title:'Besprechungen & Meetings',
  desc:'Tagesordnung, Vorschläge, Abstimmungen und Protokoll.',
  vocab:[
    {de:'die Tagesordnung',   ru:'повестка дня',       ex:'Punkt eins der Tagesordnung ist das Budget.'},
    {de:'der Vorschlag',      ru:'предложение',        ex:'Ich möchte einen Vorschlag machen.'},
    {de:'vorschlagen',        ru:'предлагать',         ex:'Ich würde vorschlagen, den Termin zu verschieben.'},
    {de:'zustimmen',          ru:'соглашаться',        ex:'Da stimme ich Ihnen voll zu.'},
    {de:'ablehnen',           ru:'отклонять',          ex:'Diesen Vorschlag müssen wir leider ablehnen.'},
    {de:'der Kompromiss',     ru:'компромисс',         ex:'Wir sollten einen Kompromiss finden.'},
    {de:'sich einigen auf',   ru:'договориться о',     ex:'Wir haben uns auf einen Termin geeinigt.'},
    {de:'der Standpunkt',     ru:'точка зрения',       ex:'Ich verstehe Ihren Standpunkt.'},
    {de:'einwenden',          ru:'возражать',          ex:'Dagegen möchte ich etwas einwenden.'},
    {de:'das Protokoll',      ru:'протокол',           ex:'Wer schreibt heute das Protokoll?'},
    {de:'abstimmen über',     ru:'голосовать по',      ex:'Wir stimmen über den Antrag ab.'},
    {de:'das Ergebnis',       ru:'результат',          ex:'Fassen wir das Ergebnis zusammen.'},
  ],
  gramHTML:`
    <h3>Konnektoren — Argumente strukturieren</h3>
    <table>
      <tr><th>Funktion</th><th>Konnektor</th><th>Verb-Position</th><th>Beispiel</th></tr>
      <tr><td>Grund</td><td>weil, da</td><td>Verb ans Ende</td><td>… weil es teuer ist.</td></tr>
      <tr><td>Folge</td><td>deshalb, deswegen</td><td>Inversion V2</td><td>Es ist teuer, deshalb lehnen wir ab.</td></tr>
      <tr><td>Gegensatz</td><td>obwohl</td><td>Verb ans Ende</td><td>… obwohl es teuer ist.</td></tr>
      <tr><td>Gegensatz</td><td>trotzdem</td><td>Inversion V2</td><td>Es ist teuer. Trotzdem kaufen wir es.</td></tr>
      <tr><td>Abwägen</td><td>einerseits … andererseits</td><td>normal</td><td>Einerseits teuer, andererseits effizient.</td></tr>
    </table>
    <div class="ex-box"><b>Vorschlag im KII:</b> „Wir könnten den Termin verschieben." / „Ich würde vorschlagen, dass …"</div>
    <div class="tip"><b>Merke:</b> Nach <b>deshalb/trotzdem</b> folgt sofort das Verb: „Deshalb <b>stimme</b> ich zu."</div>`,
  exercises:[
    {id:'l4e1',type:'mc',q:'Höflicher Vorschlag im Meeting — welcher ist korrekt?',
     options:['Wir verschieben den Termin!','Wir könnten den Termin verschieben.','Termin verschieben!'],
     answer:1,explain:'Konjunktiv II „könnten" macht den Vorschlag offen und höflich.'},
    {id:'l4e2',type:'gap',q:'„Das spart Zeit, ___ stimme ich zu." (Folge)',
     accept:['deshalb','deswegen','darum'],hint:'Konnektor der Folge, danach Inversion.',explain:'deshalb'},
    {id:'l4e3',type:'listen',
     audio:'Ich möchte vorschlagen, dass wir das Budget um zehn Prozent kürzen. Einerseits sparen wir dadurch Kosten, andererseits könnten wir in neue Technologie investieren.',
     q:'Welche Struktur benutzt der Sprecher?',
     options:['Passiv-Konstruktion','Einerseits-andererseits-Abwägung','Indirekte Rede'],
     answer:1,explain:'„Einerseits … andererseits" ist eine klassische Abwägungsstruktur im Meeting.'},
    {id:'l4e4',type:'order',q:'Bilde den Satz:',
     words:['Einerseits','ist','es','teurer','andererseits','sparen','wir','Zeit'],answer:'Einerseits ist es teurer andererseits sparen wir Zeit'},
    {id:'l4e5',type:'match',q:'Ordne zu:',
     pairs:[['der Vorschlag','предложение'],['ablehnen','отклонять'],['der Kompromiss','компромисс'],['abstimmen','голосовать']]},
  ]
},

/* ── Einheit 5 ─────────────────────────────────────── B2 ── */
{ id:'l5', tag:'Präsentationen', level:'b2',
  title:'Präsentationen halten',
  desc:'Struktur, Einstieg, Übergänge und Fazit überzeugend formulieren.',
  vocab:[
    {de:'die Gliederung',      ru:'структура, план',          ex:'Ich möchte zunächst die Gliederung vorstellen.'},
    {de:'vortragen',           ru:'докладывать, представлять', ex:'Er trägt die Ergebnisse vor.'},
    {de:'das Handout',         ru:'раздаточный материал',     ex:'Das Handout finden Sie auf Ihrem Platz.'},
    {de:'die Folie',           ru:'слайд',                    ex:'Bitte schauen Sie auf die nächste Folie.'},
    {de:'veranschaulichen',    ru:'наглядно показывать',      ex:'Dieses Diagramm veranschaulicht den Trend.'},
    {de:'zusammenfassen',      ru:'резюмировать',             ex:'Fassen wir kurz zusammen.'},
    {de:'das Fazit',           ru:'итог, вывод',              ex:'Als Fazit lässt sich sagen, dass …'},
    {de:'das Publikum',        ru:'аудитория, слушатели',     ex:'Das Publikum war sehr aufmerksam.'},
    {de:'der Einstieg',        ru:'начало (выступления)',     ex:'Als Einstieg zeige ich Ihnen eine kurze Statistik.'},
    {de:'überzeugen',          ru:'убеждать',                 ex:'Die Argumente konnten das Publikum überzeugen.'},
    {de:'auf etwas eingehen',  ru:'остановиться подробнее на', ex:'Darauf möchte ich gleich näher eingehen.'},
    {de:'überleiten zu',       ru:'перейти к',                ex:'Damit leite ich über zum nächsten Punkt.'},
  ],
  gramHTML:`
    <h3>Modalpartikeln — natürlicher klingen</h3>
    <p>Modalpartikeln sind kleine Wörter, die den Ton einer Aussage verändern. Sie sind typisch für die gesprochene Sprache und Präsentationen.</p>
    <table>
      <tr><th>Partikel</th><th>Funktion</th><th>Beispiel</th></tr>
      <tr><td>ja</td><td>geteiltes Wissen ansprechen</td><td>Das ist <b>ja</b> bekannt.</td></tr>
      <tr><td>doch</td><td>Bekanntes betonen / widersprechen</td><td>Das stimmt <b>doch</b> nicht.</td></tr>
      <tr><td>eigentlich</td><td>etwas einschränken / abschwächen</td><td>Das ist <b>eigentlich</b> einfach.</td></tr>
      <tr><td>halt / eben</td><td>Unvermeidlichkeit ausdrücken</td><td>Das ist <b>halt</b> so.</td></tr>
      <tr><td>wohl</td><td>Vermutung äußern</td><td>Das wird <b>wohl</b> klappen.</td></tr>
    </table>
    <h3>Typische Präsentationsphrasen</h3>
    <div class="ex-box"><b>Einstieg:</b> „Guten Tag, ich möchte Ihnen heute … vorstellen."</div>
    <div class="ex-box"><b>Überleitung:</b> „Damit komme ich zu meinem nächsten Punkt …" / „Kommen wir nun zu …"</div>
    <div class="ex-box"><b>Fazit:</b> „Zusammenfassend lässt sich sagen, dass …" / „Als Fazit möchte ich festhalten …"</div>`,
  exercises:[
    {id:'l5e1',type:'mc',q:'Welche Phrase eignet sich als Überleitung?',
     options:['Tschüss, der nächste Punkt.','Damit komme ich zu meinem nächsten Punkt.','Jetzt was Neues.'],
     answer:1,explain:'„Damit komme ich zu …" ist die klassische Überleitung in formellen Präsentationen.'},
    {id:'l5e2',type:'gap',q:'„Als ___ lässt sich sagen, dass die Zahlen positiv sind."',
     accept:['fazit'],hint:'das letzte zusammenfassende Statement.',explain:'Fazit'},
    {id:'l5e3',type:'listen',
     audio:'Guten Tag, meine Damen und Herren. Ich möchte Ihnen heute unsere Quartalsergebnisse vorstellen. Zunächst zur Gliederung: Ich beginne mit den Umsatzzahlen, gehe dann auf die Kosten ein und schließe mit einem Ausblick.',
     q:'Was beschreibt der Sprecher?',
     options:['Das Fazit der Präsentation','Die Gliederung der Präsentation','Eine Beschwerde'],
     answer:1,explain:'Er stellt die Struktur (Gliederung) der Präsentation vor — typischer Einstieg.'},
    {id:'l5e4',type:'order',q:'Typische Schlussphrase:',
     words:['Zusammenfassend','lässt','sich','sagen','dass','die','Ergebnisse','positiv','sind'],answer:'Zusammenfassend lässt sich sagen dass die Ergebnisse positiv sind'},
    {id:'l5e5',type:'match',q:'Ordne zu:',
     pairs:[['die Gliederung','структура'],['das Fazit','итог'],['veranschaulichen','наглядно показывать'],['das Publikum','аудитория']]},
  ]
},

/* ── Einheit 6 ─────────────────────────────────────── B2 ── */
{ id:'l6', tag:'Verhandlungen', level:'b2',
  title:'Verhandlungen & Kompromisse',
  desc:'Positionen vertreten, nachgeben und Lösungen finden.',
  vocab:[
    {de:'verhandeln',           ru:'вести переговоры',          ex:'Wir verhandeln über den Preis.'},
    {de:'das Angebot',          ru:'предложение (коммерческое)', ex:'Können Sie das Angebot verbessern?'},
    {de:'nachgeben',            ru:'уступать',                  ex:'In diesem Punkt können wir etwas nachgeben.'},
    {de:'der Spielraum',        ru:'пространство для манёвра',  ex:'Wie viel Spielraum haben Sie beim Preis?'},
    {de:'einlenken',            ru:'идти на уступки',           ex:'Nach langem Zögern hat er eingelenkt.'},
    {de:'das Zugeständnis',     ru:'уступка',                   ex:'Wir machen ein Zugeständnis beim Lieferdatum.'},
    {de:'bestehen auf',         ru:'настаивать на',             ex:'Wir bestehen auf den vereinbarten Konditionen.'},
    {de:'der Vorbehalt',        ru:'оговорка, сомнение',        ex:'Ich habe einen Vorbehalt gegen diesen Vorschlag.'},
    {de:'der Kompromiss',       ru:'компромисс',                ex:'Beide Seiten müssen Kompromisse eingehen.'},
    {de:'die Bedingung',        ru:'условие',                   ex:'Unter einer Bedingung stimmen wir zu.'},
    {de:'akzeptabel',           ru:'приемлемый',                ex:'Das Angebot ist für uns nicht akzeptabel.'},
    {de:'einigen (sich auf)',   ru:'договориться о',            ex:'Wir haben uns auf einen Preis geeinigt.'},
  ],
  gramHTML:`
    <h3>Konzessivkonstruktionen — trotzdem / obwohl / wenngleich</h3>
    <p>Konzessive Sätze räumen etwas ein und nennen dennoch ein Gegenargument — wichtig für sachliche Verhandlungen.</p>
    <table>
      <tr><th>Konnektor</th><th>Position</th><th>Beispiel</th></tr>
      <tr><td>obwohl</td><td>Nebensatz (Verb Ende)</td><td>Obwohl das teuer ist, kaufen wir es.</td></tr>
      <tr><td>trotzdem</td><td>Hauptsatz (Inversion)</td><td>Es ist teuer. Trotzdem kaufen wir es.</td></tr>
      <tr><td>dennoch</td><td>Hauptsatz (Inversion)</td><td>Das Risiko ist hoch. Dennoch machen wir weiter.</td></tr>
      <tr><td>zwar … aber</td><td>Hauptsatz</td><td>Das ist zwar teuer, aber notwendig.</td></tr>
      <tr><td>wenngleich</td><td>Nebensatz (formell)</td><td>Wenngleich das aufwendig ist, lohnt es sich.</td></tr>
    </table>
    <div class="ex-box"><b>Zwar … aber:</b> „Das Angebot ist zwar günstig, aber die Qualität stimmt nicht."<span class="gl">Предложение, конечно, выгодное, но качество не то.</span></div>`,
  exercises:[
    {id:'l6e1',type:'mc',q:'„Das Angebot ist ___ günstig, ___ die Lieferzeit ist zu lang."',
     options:['weil … deshalb','zwar … aber','obwohl … trotzdem'],
     answer:1,explain:'„Zwar … aber" räumt einen Vorteil ein und nennt einen Nachteil.'},
    {id:'l6e2',type:'gap',q:'„___ das Risiko hoch ist, machen wir diesen Schritt." (Konzessiv, Nebensatz)',
     accept:['obwohl','wenngleich'],hint:'Verb ans Ende → Nebensatz-Konnektor.',explain:'Obwohl'},
    {id:'l6e3',type:'listen',
     audio:'Wir verstehen Ihre Position. Obwohl der Preis über unserem Budget liegt, sind wir bereit, über die Konditionen zu verhandeln. Könnten Sie uns beim Lieferdatum entgegenkommen?',
     q:'Was signalisiert die Aussage?',
     options:['Ablehnung des Angebots','Bereitschaft zur Verhandlung trotz hohem Preis','Zustimmung ohne Bedingungen'],
     answer:1,explain:'„Obwohl der Preis hoch ist" — konzessiv — + Bereitschaft zu verhandeln.'},
    {id:'l6e4',type:'order',q:'Bilde den konzessiven Satz:',
     words:['Das','Angebot','ist','zwar','teuer','aber','die','Qualität','überzeugt'],answer:'Das Angebot ist zwar teuer aber die Qualität überzeugt'},
    {id:'l6e5',type:'match',q:'Ordne zu:',
     pairs:[['nachgeben','уступать'],['der Spielraum','пространство для манёвра'],['bestehen auf','настаивать на'],['das Zugeständnis','уступка']]},
  ]
},

/* ── Einheit 7 ─────────────────────────────────────── B1 ── */
{ id:'l7', tag:'Smalltalk', level:'b1',
  title:'Smalltalk & Networking',
  desc:'Gespräche beginnen, Kontakte knüpfen, sich verabschieden.',
  vocab:[
    {de:'ansprechen',           ru:'обращаться, заговорить с', ex:'Darf ich Sie kurz ansprechen?'},
    {de:'sich vorstellen',      ru:'представляться',           ex:'Erlauben Sie mir, mich vorzustellen.'},
    {de:'ins Gespräch kommen',  ru:'завязать разговор',        ex:'Wie kommt man hier am besten ins Gespräch?'},
    {de:'die Visitenkarte',     ru:'визитная карточка',        ex:'Hier ist meine Visitenkarte.'},
    {de:'Gemeinsamkeiten finden',ru:'найти общее',             ex:'Wir haben schnell Gemeinsamkeiten gefunden.'},
    {de:'das Interesse wecken', ru:'вызвать интерес',          ex:'Dein Projekt hat mein Interesse geweckt.'},
    {de:'Kontakt halten',       ru:'поддерживать связь',       ex:'Lassen Sie uns Kontakt halten.'},
    {de:'sich verabschieden',   ru:'прощаться',                ex:'Ich muss mich jetzt leider verabschieden.'},
    {de:'der erste Eindruck',   ru:'первое впечатление',       ex:'Der erste Eindruck ist entscheidend.'},
    {de:'der Gesprächseinstieg',ru:'начало разговора',         ex:'Ein guter Gesprächseinstieg ist wichtig.'},
    {de:'vernetzen (sich)',      ru:'устанавливать связи',     ex:'Auf Messen kann man sich gut vernetzen.'},
    {de:'der Netzwerkkontakt',  ru:'контакт в сети знакомств', ex:'Ich habe viele Netzwerkkontakte gesammelt.'},
  ],
  gramHTML:`
    <h3>Gesprächsfloskeln und Höflichkeitsformeln</h3>
    <p>Im Smalltalk gibt es feste Formeln. Wichtig: kurz bleiben, Interesse zeigen, Anschlussfragen stellen.</p>
    <div class="ex-box"><b>Begrüßung formal:</b> „Guten Tag, mein Name ist … Darf ich fragen, in welchem Bereich Sie tätig sind?"</div>
    <div class="ex-box"><b>Interesse zeigen:</b> „Das klingt sehr interessant. Wie lange machen Sie das schon?"</div>
    <div class="ex-box"><b>Gesprächsthemen:</b> Branche, Firma, aktuelle Events, allgemeine Themen — <i>nicht</i>: Politik, Religion, Geld.</div>
    <div class="ex-box"><b>Verabschiedung:</b> „Es war sehr angenehm, Sie kennenzulernen. Ich würde mich freuen, in Kontakt zu bleiben."</div>
    <h3>Antwortpartikeln und kurze Reaktionen</h3>
    <table>
      <tr><th>Reaktion</th><th>Bedeutung</th></tr>
      <tr><td>„Das stimmt.", „Genau."</td><td>Zustimmung</td></tr>
      <tr><td>„Ach wirklich?", „Interessant!"</td><td>Überraschung / Interesse</td></tr>
      <tr><td>„Das kann ich gut verstehen."</td><td>Empathie</td></tr>
      <tr><td>„Wie meinen Sie das?"</td><td>Nachfragen (höflich)</td></tr>
    </table>`,
  exercises:[
    {id:'l7e1',type:'mc',q:'Welcher Gesprächseinstieg ist in einem formellen Netzwerkkontext angemessen?',
     options:['Hey, was machst du so?','Guten Tag, darf ich fragen, in welchem Bereich Sie tätig sind?','Ich kenne Sie von irgendwoher.'],
     answer:1,explain:'Formelle Sie-Form und offene Frage — ideal als Einstieg.'},
    {id:'l7e2',type:'gap',q:'„Es war sehr angenehm, Sie ___ . Ich würde mich freuen, in Kontakt zu bleiben."',
     accept:['kennenzulernen'],hint:'Infinitiv, Verb: kennenlernen.',explain:'kennenzulernen'},
    {id:'l7e3',type:'listen',
     audio:'Entschuldigung, darf ich mich kurz vorstellen? Mein Name ist Weber, ich arbeite bei der Firma Schmidt als Vertriebsleiter. Ich habe Ihren Vortrag sehr interessant gefunden — darf ich fragen, wie lange Sie schon in dieser Branche tätig sind?',
     q:'Was ist das Ziel dieses Gesprächseinstiegs?',
     options:['Eine Beschwerde vorbringen','Einen Netzwerkkontakt knüpfen','Ein Meeting absagen'],
     answer:1,explain:'Vorstellen + Kompliment + Frage = klassischer Networking-Einstieg.'},
    {id:'l7e4',type:'order',q:'Bilde die Verabschiedung:',
     words:['Es','war','sehr','schön','Sie','kennenzulernen','Lassen','Sie','uns','Kontakt','halten'],answer:'Es war sehr schön Sie kennenzulernen Lassen Sie uns Kontakt halten'},
    {id:'l7e5',type:'match',q:'Ordne zu:',
     pairs:[['sich vorstellen','представляться'],['die Visitenkarte','визитка'],['vernetzen','устанавливать связи'],['der erste Eindruck','первое впечатление']]},
  ]
},

/* ── Einheit 8 ─────────────────────────────────────── B2 ── */
{ id:'l8', tag:'Beschwerden', level:'b2',
  title:'Beschwerden & Reklamationen',
  desc:'Schriftlich und mündlich reklamieren, Lösungen fordern.',
  vocab:[
    {de:'reklamieren',          ru:'рекламировать, жаловаться', ex:'Ich möchte diese Ware reklamieren.'},
    {de:'die Beschwerde',       ru:'жалоба',                    ex:'Ich möchte eine Beschwerde einreichen.'},
    {de:'beanstanden',          ru:'предъявлять претензии',     ex:'Wir müssen die Lieferqualität beanstanden.'},
    {de:'der Mangel',           ru:'недостаток, дефект',        ex:'Das Produkt weist mehrere Mängel auf.'},
    {de:'die Nachbesserung',    ru:'исправление, доработка',    ex:'Wir fordern eine Nachbesserung.'},
    {de:'der Ersatz',           ru:'замена, возмещение',        ex:'Wir bitten um sofortigen Ersatz.'},
    {de:'die Entschädigung',    ru:'возмещение убытков',        ex:'Welche Entschädigung können Sie anbieten?'},
    {de:'auf Kulanz',           ru:'из соображений доброй воли',ex:'Das wird auf Kulanz erstattet.'},
    {de:'fristgerecht',         ru:'в установленные сроки',     ex:'Die Lieferung ist nicht fristgerecht erfolgt.'},
    {de:'Stellung nehmen zu',   ru:'занять позицию, ответить на',ex:'Bitte nehmen Sie Stellung zu unserem Schreiben.'},
    {de:'der Schaden',          ru:'ущерб',                     ex:'Durch die Verzögerung entstand uns ein Schaden.'},
    {de:'schriftlich festhalten',ru:'фиксировать письменно',    ex:'Wir halten die Mängel schriftlich fest.'},
  ],
  gramHTML:`
    <h3>Konjunktiv I — indirekte Rede</h3>
    <p>In Beschwerdebriefen zitiert man oft, was jemand gesagt hat, ohne eigene Meinung einzubringen — dafür verwendet man <b>Konjunktiv I</b>.</p>
    <table>
      <tr><th>direkte Rede</th><th>indirekte Rede (KI)</th></tr>
      <tr><td>„Wir liefern pünktlich."</td><td>Sie sagten, sie liefern <b>pünktlich</b>. / sie <b>lieferten</b>.</td></tr>
      <tr><td>„Das Produkt ist fehlerfrei."</td><td>Er behauptete, das Produkt <b>sei</b> fehlerfrei.</td></tr>
      <tr><td>„Wir haben geliefert."</td><td>Sie gaben an, sie <b>hätten</b> geliefert.</td></tr>
    </table>
    <div class="tip"><b>Praxis:</b> Im modernen Geschäftsdeutsch wird Konjunktiv I oft durch würde-Konstruktionen oder Konjunktiv II ersetzt, besonders in der gesprochenen Sprache.</div>
    <h3>Formulierungen für Beschwerden</h3>
    <div class="ex-box"><b>Sachlich:</b> „Leider müssen wir feststellen, dass … / Wir sind mit … nicht zufrieden."</div>
    <div class="ex-box"><b>Forderung:</b> „Wir bitten Sie, … bis [Datum] zu beheben / zu liefern / zu erstatten."</div>`,
  exercises:[
    {id:'l8e1',type:'mc',q:'Was ist die korrekte indirekte Rede?  „Das Produkt ist fehlerfrei."',
     options:['Er sagte, das Produkt war fehlerfrei.','Er sagte, das Produkt sei fehlerfrei.','Er sagte, das Produkt ist fehlerfrei gewesen.'],
     answer:1,explain:'Konjunktiv I: „sei" — kennzeichnet indirekte Rede neutral ohne eigene Wertung.'},
    {id:'l8e2',type:'gap',q:'„Wir bitten Sie, den Mangel bis Freitag zu ___."',
     accept:['beheben'],hint:'Verb: beheben — Mängel beseitigen.',explain:'beheben'},
    {id:'l8e3',type:'listen',
     audio:'Sehr geehrte Damen und Herren, leider müssen wir Ihnen mitteilen, dass die gelieferte Ware mehrere Mängel aufweist. Die Lieferung ist außerdem nicht fristgerecht erfolgt. Wir bitten Sie daher, uns umgehend Ersatz zu senden oder eine Entschädigung anzubieten.',
     q:'Was fordert der Absender?',
     options:['Eine neue Bestellung aufgeben','Ersatz oder Entschädigung','Den Vertrag kündigen'],
     answer:1,explain:'„Wir bitten Sie … Ersatz zu senden oder eine Entschädigung anzubieten."'},
    {id:'l8e4',type:'order',q:'Formuliere die Beschwerde:',
     words:['Leider','müssen','wir','festzustellen','dass','die','Lieferung','nicht','fristgerecht','erfolgt','ist'],answer:'Leider müssen wir festzustellen dass die Lieferung nicht fristgerecht erfolgt ist'},
    {id:'l8e5',type:'match',q:'Ordne zu:',
     pairs:[['der Mangel','дефект'],['die Nachbesserung','исправление'],['auf Kulanz','из доброй воли'],['fristgerecht','в срок']]},
  ]
},

/* ── Einheit 9 ─────────────────────────────────────── B2 ── */
{ id:'l9', tag:'Reisen & Messen', level:'b2',
  title:'Geschäftsreisen & Messen',
  desc:'Dienstreisen planen, Messebesuche vorbereiten, Kontakte knüpfen.',
  vocab:[
    {de:'die Dienstreise',      ru:'командировка',             ex:'Ich bin nächste Woche auf Dienstreise.'},
    {de:'die Messe',            ru:'ярмарка, выставка',        ex:'Die Hannover Messe ist die größte Industriemesse.'},
    {de:'der Aussteller',       ru:'экспонент',                ex:'Über 5.000 Aussteller nehmen teil.'},
    {de:'der Messestand',       ru:'стенд на выставке',        ex:'Unser Messestand ist in Halle drei.'},
    {de:'anreisen',             ru:'приезжать',                ex:'Wann reisen Sie an?'},
    {de:'der Veranstalter',     ru:'организатор',              ex:'Der Veranstalter hat alles gut organisiert.'},
    {de:'sich anmelden für',    ru:'зарегистрироваться на',    ex:'Ich habe mich für die Messe angemeldet.'},
    {de:'die Unterkunft',       ru:'жильё, размещение',        ex:'Bitte buchen Sie eine Unterkunft in der Nähe.'},
    {de:'die Aufwandsentschädigung', ru:'компенсация расходов',ex:'Die Aufwandsentschädigung wird erstattet.'},
    {de:'einen Termin vereinbaren', ru:'договориться о встрече',ex:'Können wir einen Termin vereinbaren?'},
    {de:'der Kontakt knüpfen',  ru:'устанавливать контакт',    ex:'Auf Messen kann man viele Kontakte knüpfen.'},
    {de:'das Tagungszentrum',   ru:'конференц-центр',          ex:'Die Besprechung findet im Tagungszentrum statt.'},
  ],
  gramHTML:`
    <h3>Relativsätze mit Präpositionen</h3>
    <p>Nach Präpositionen kann man nicht einfach „der/die/das" benutzen — man braucht <b>Relativpronomen mit Präposition</b>.</p>
    <table>
      <tr><th>Beispiel</th><th>Relativsatz</th></tr>
      <tr><td>das Hotel</td><td>das Hotel, <b>in dem</b> ich wohne</td></tr>
      <tr><td>die Firma</td><td>die Firma, <b>mit der</b> wir zusammenarbeiten</td></tr>
      <tr><td>der Kollege</td><td>der Kollege, <b>von dem</b> ich gehört habe</td></tr>
      <tr><td>das Thema</td><td>das Thema, <b>über das</b> wir sprechen</td></tr>
    </table>
    <div class="ex-box"><b>Das ist die Messe, auf der wir uns kennengelernt haben.</b><span class="gl">Это выставка, на которой мы познакомились.</span></div>
    <div class="tip"><b>Alternative — Worauf/Wodurch:</b> Bei Sachen kann man auch „wo+Präposition" benutzen: „das Thema, <b>worüber</b> wir sprechen".</div>`,
  exercises:[
    {id:'l9e1',type:'mc',q:'Wähle den richtigen Relativsatz:',
     options:['Das ist die Messe, die wir auf teilgenommen haben.','Das ist die Messe, an der wir teilgenommen haben.','Das ist die Messe, die wir teilgenommen haben.'],
     answer:1,explain:'„an der" — Relativpronomen im Dativ mit Präposition „an" (teilnehmen an).'},
    {id:'l9e2',type:'gap',q:'„Das ist das Hotel, in ___ ich immer übernachte." (Rel.pron.)',
     accept:['dem'],hint:'in + Dativ = in dem (Neutrum).',explain:'dem'},
    {id:'l9e3',type:'listen',
     audio:'Ich fahre nächste Woche zur Hannover Messe. Das ist die größte Industriemesse, auf der man sehr viele internationale Kontakte knüpfen kann. Ich habe mich bereits angemeldet und einen Stand für unsere Firma gebucht.',
     q:'Was macht die Sprecherin auf der Messe?',
     options:['Sie hält eine Präsentation','Sie stellt die Firma mit einem Stand aus','Sie besucht die Messe als Privatperson'],
     answer:1,explain:'„einen Stand für unsere Firma gebucht" — die Firma ist Aussteller.'},
    {id:'l9e4',type:'order',q:'Bilde den Relativsatz:',
     words:['Das','ist','die','Firma','mit','der','wir','seit','Jahren','zusammenarbeiten'],answer:'Das ist die Firma mit der wir seit Jahren zusammenarbeiten'},
    {id:'l9e5',type:'match',q:'Ordne zu:',
     pairs:[['der Aussteller','экспонент'],['die Unterkunft','жильё'],['sich anmelden','зарегистрироваться'],['die Dienstreise','командировка']]},
  ]
},

/* ── Einheit 10 ────────────────────────────────────── B2+ ── */
{ id:'l10', tag:'Statistiken', level:'b2p',
  title:'Zahlen, Statistiken & Diagramme',
  desc:'Trends beschreiben, Daten interpretieren, Nominalisierungen verwenden.',
  vocab:[
    {de:'der Anstieg',         ru:'рост, подъём',              ex:'Der Anstieg der Umsätze beträgt 15 Prozent.'},
    {de:'der Rückgang',        ru:'спад, снижение',            ex:'Der Rückgang der Nachfrage ist besorgniserregend.'},
    {de:'stagnieren',          ru:'стагнировать',              ex:'Die Preise haben im letzten Quartal stagniert.'},
    {de:'sich verdoppeln',     ru:'удвоиться',                 ex:'Der Gewinn hat sich verdoppelt.'},
    {de:'im Vergleich zu',     ru:'по сравнению с',            ex:'Im Vergleich zum Vorjahr sind die Zahlen besser.'},
    {de:'deutlich',            ru:'значительно, заметно',      ex:'Die Kosten sind deutlich gestiegen.'},
    {de:'geringfügig',         ru:'незначительно, слегка',     ex:'Der Anteil ist geringfügig gesunken.'},
    {de:'der Anteil',          ru:'доля',                      ex:'Der Anteil der mobilen Nutzer beträgt 60%.'},
    {de:'der Durchschnitt',    ru:'средний показатель',        ex:'Im Durchschnitt arbeiten wir 45 Stunden pro Woche.'},
    {de:'übertreffen',         ru:'превосходить',              ex:'Die Ergebnisse haben unsere Erwartungen übertroffen.'},
    {de:'der Trend',           ru:'тренд, тенденция',          ex:'Der Trend geht klar in Richtung Digitalisierung.'},
    {de:'das Kreisdiagramm',   ru:'круговая диаграмма',        ex:'Das Kreisdiagramm zeigt die Anteile.'},
  ],
  gramHTML:`
    <h3>Nominalisierungen — formeller Schreibstil</h3>
    <p>In formellen Texten werden Verben und Adjektive oft in <b>Substantive</b> umgewandelt. Das macht den Stil sachlicher und kompakter.</p>
    <table>
      <tr><th>Verb/Adjektiv</th><th>Nominalisierung</th><th>Beispiel</th></tr>
      <tr><td>steigen</td><td>der Anstieg</td><td>Ein Anstieg um 10% wurde verzeichnet.</td></tr>
      <tr><td>sinken</td><td>der Rückgang</td><td>Der Rückgang beläuft sich auf 5%.</td></tr>
      <tr><td>entscheiden</td><td>die Entscheidung</td><td>Eine Entscheidung wurde getroffen.</td></tr>
      <tr><td>entwickeln</td><td>die Entwicklung</td><td>Diese Entwicklung ist positiv.</td></tr>
    </table>
    <h3>Funktionsverbgefüge</h3>
    <p>Verb + Substantiv ersetzt ein einfaches Verb — klingt formeller:</p>
    <table>
      <tr><th>einfach</th><th>formell (FVG)</th></tr>
      <tr><td>entscheiden</td><td>eine Entscheidung treffen</td></tr>
      <tr><td>fragen</td><td>eine Frage stellen</td></tr>
      <tr><td>helfen</td><td>Hilfe leisten</td></tr>
      <tr><td>beginnen</td><td>einen Anfang machen</td></tr>
    </table>
    <div class="ex-box"><b>Trend beschreiben:</b> „Die Umsätze stiegen um 12% im Vergleich zum Vorjahr deutlich an."</div>`,
  exercises:[
    {id:'l10e1',type:'mc',q:'Nominalisierung von „entscheiden":',
     options:['das Entscheiden','die Entscheidung','der Entscheid'],
     answer:1,explain:'„die Entscheidung" ist die gängige Nominalisierung von „entscheiden" im Deutschen.'},
    {id:'l10e2',type:'gap',q:'„Im ___ zum Vorjahr sind die Umsätze um 15% gestiegen."',
     accept:['vergleich'],hint:'Im Vergleich zu = по сравнению с.',explain:'Vergleich'},
    {id:'l10e3',type:'listen',
     audio:'Wie Sie in diesem Diagramm sehen können, sind die Umsätze im ersten Quartal deutlich gestiegen. Im Vergleich zum Vorjahr beträgt der Anstieg etwa zwölf Prozent. Im zweiten Quartal haben die Zahlen stagniert, bevor sie im dritten Quartal wieder zugenommen haben.',
     q:'Was passierte im zweiten Quartal?',
     options:['Die Umsätze stiegen stark an','Die Umsätze stagnierten','Die Umsätze sanken deutlich'],
     answer:1,explain:'„Im zweiten Quartal haben die Zahlen stagniert."'},
    {id:'l10e4',type:'order',q:'Beschreibe den Trend:',
     words:['Die','Umsätze','sind','im','Vergleich','zum','Vorjahr','deutlich','gestiegen'],answer:'Die Umsätze sind im Vergleich zum Vorjahr deutlich gestiegen'},
    {id:'l10e5',type:'match',q:'Ordne zu:',
     pairs:[['der Anstieg','рост'],['stagnieren','стагнировать'],['geringfügig','незначительно'],['übertreffen','превосходить']]},
  ]
},


,
/* ── Einheit 11 ─────────────────────────────────────── A2 ── */
{ id:'l11', tag:'Fragen', level:'b1',
  title:'W-Fragewörter & Fragen stellen',
  desc:'Alle Fragewörter im Überblick — wer, was, wo, wohin und mehr.',
  vocab:[
    {de:'wer',        ru:'кто',                     ex:'Wer ist das? – Das ist mein Kollege.'},
    {de:'was',        ru:'что',                      ex:'Was machst du? – Ich lerne Deutsch.'},
    {de:'wo',         ru:'где',                      ex:'Wo wohnst du? – In München.'},
    {de:'wohin',      ru:'куда',                     ex:'Wohin fährst du? – Nach Berlin.'},
    {de:'woher',      ru:'откуда',                   ex:'Woher kommst du? – Aus Polen.'},
    {de:'wann',       ru:'когда',                    ex:'Wann kommst du? – Um drei Uhr.'},
    {de:'warum',      ru:'почему',                   ex:'Warum lernst du Deutsch? – Für die Arbeit.'},
    {de:'wie',        ru:'как',                      ex:'Wie heißt du? – Ich heiße Anna.'},
    {de:'wie lange',  ru:'как долго',                ex:'Wie lange lernst du Deutsch? – Seit zwei Jahren.'},
    {de:'wie viel',   ru:'сколько',                  ex:'Wie viel kostet das? – Zehn Euro.'},
    {de:'seit wann',  ru:'с какого времени',         ex:'Seit wann lebst du hier? – Seit 2020.'},
    {de:'wessen',     ru:'чей',                      ex:'Wessen Tasche ist das? – Meiner Freundin.'},
  ],
  gramHTML:`
    <h3>Aufbau einer W-Frage</h3>
    <p>W-Fragen beginnen mit einem Fragewort. Das konjugierte Verb steht auf Position 2, danach das Subjekt (falls nicht das Fragewort schon das Subjekt ist).</p>
    <div class="ex-box"><b>Wer</b> [Subj.] <b>arbeitet</b> hier?<span class="gl">Кто здесь работает? (wer = Subjekt → kein separates Subjekt nötig)</span></div>
    <div class="ex-box"><b>Wo</b> <b>wohnst</b> du?<span class="gl">Где ты живёшь? (du = Subjekt)</span></div>
    <h3>Häufige Verwechslungen</h3>
    <table>
      <tr><th>Fragewort</th><th>Frage</th><th>Antwort</th></tr>
      <tr><td>wo</td><td>Wo ist er? (Ort)</td><td>In Berlin.</td></tr>
      <tr><td>wohin</td><td>Wohin fährt er? (Ziel)</td><td>Nach Berlin.</td></tr>
      <tr><td>woher</td><td>Woher kommt er? (Herkunft)</td><td>Aus Berlin.</td></tr>
    </table>
    <div class="tip"><b>Merke:</b> <b>wo</b> = statisch (sein, wohnen); <b>wohin</b> = Bewegung zum Ziel (gehen, fahren); <b>woher</b> = Herkunft (kommen).</div>`,
  exercises:[
    {id:'l11e1',type:'match',q:'Ordne das Fragewort seiner Bedeutung zu:',
     pairs:[['wer','кто'],['wohin','куда'],['warum','почему'],['seit wann','с какого времени']]},
    {id:'l11e2',type:'mc',q:'„___ wohnst du?" — Frage nach dem Ort.',
     options:['Wohin','Woher','Wo'],answer:2,explain:'„Wo" fragt nach dem Aufenthaltsort (statisch).'},
    {id:'l11e3',type:'gap',q:'„___ fährst du in Urlaub?" — Frage nach dem Ziel der Reise.',
     accept:['wohin'],hint:'Bewegung zum Ziel → ?',explain:'Wohin'},
    {id:'l11e4',type:'listen',
     audio:'Woher kommst du? Ich komme aus Russland. Und wie lange lebst du schon in Deutschland? Seit drei Jahren.',
     q:'Welche zwei Fragewörter hörst du?',
     options:['wo und wann','woher und wie lange','wohin und warum'],
     answer:1,explain:'„Woher" fragt nach Herkunft, „wie lange" nach der Zeitdauer.'},
    {id:'l11e5',type:'order',q:'Bilde die W-Frage:',
     words:['Seit','wann','lernst','du','Deutsch'],answer:'Seit wann lernst du Deutsch'},
  ]
},

/* ── Einheit 12 ─────────────────────────────────────── A2 ── */
{ id:'l12', tag:'Artikelgebrauch', level:'b1',
  title:'Der Artikel — bestimmt, unbestimmt, ohne',
  desc:'Wann der/die/das, wann ein/eine, wann gar kein Artikel — mit Regeln und Ausnahmen.',
  vocab:[
    {de:'der bestimmte Artikel',   ru:'определённый артикль',   ex:'Der Mann ist Arzt. (Wir wissen, welcher Mann.)'},
    {de:'der unbestimmte Artikel', ru:'неопределённый артикль', ex:'Ein Mann kommt. (Wir wissen nicht, welcher.)'},
    {de:'kein Artikel',            ru:'нулевой артикль',        ex:'Er ist Arzt. (Beruf ohne Artikel!)'},
    {de:'erneut erwähnen',         ru:'упоминать повторно',     ex:'Ich sehe einen Hund. Der Hund ist groß.'},
    {de:'einzigartig',             ru:'уникальный',             ex:'Die Sonne scheint. (es gibt nur eine Sonne)'},
    {de:'abstrakt',                ru:'абстрактный',            ex:'Ich habe Hunger. / Er trinkt Kaffee.'},
    {de:'der Beruf',               ru:'профессия',              ex:'Sie ist Ärztin. (kein Artikel!)'},
    {de:'die Nationalität',        ru:'национальность',         ex:'Er ist Russe. (kein Artikel!)'},
    {de:'Länder & Städte',         ru:'страны и города',        ex:'Deutschland liegt in Europa. (kein Artikel)'},
    {de:'die Schweiz/die Türkei',  ru:'Швейцария/Турция',       ex:'Die Schweiz liegt in Europa. (Ausnahme — mit Artikel!)'},
    {de:'erstes / zweites Nennen', ru:'первое / второе упоминание', ex:'Ein Auto steht dort. Das Auto ist neu.'},
    {de:'das Material',            ru:'материал',               ex:'Das Haus ist aus Holz. (kein Artikel)'},
  ],
  gramHTML:`
    <h3>Die drei Fälle im Überblick</h3>
    <table>
      <tr><th>Artikel</th><th>Wann?</th><th>Beispiel</th></tr>
      <tr><td>ein / eine</td><td>1. Erwähnung; nach haben/brauchen/es gibt</td><td>Ich sehe <b>einen</b> Mann.</td></tr>
      <tr><td>der / die / das</td><td>Wiederholung; einzigartiger Gegenstand; Superlativ</td><td><b>Der</b> Mann heißt Koch.</td></tr>
      <tr><td>— (kein Artikel)</td><td>Beruf/Nationalität; Abstrakta; Länder/Städte; Material; nach als</td><td>Er ist <b>Arzt</b>. Er kommt aus <b>Deutschland</b>.</td></tr>
    </table>
    <h3>Ausnahmen — Länder mit Artikel</h3>
    <div class="ex-box"><b>die Schweiz, die Türkei, die Ukraine, der Iran, die USA (Pl.), die Niederlande (Pl.)</b><span class="gl">→ Diese Länder brauchen immer einen Artikel.</span></div>
    <h3>Beruf / Nationalität: kein Artikel — außer mit Adjektiv</h3>
    <div class="ex-box"><b>Er ist Arzt.</b> (kein Artikel) &nbsp;→&nbsp; <b>Er ist ein guter Arzt.</b> (Adjektiv → unbestimmt!)</div>`,
  exercises:[
    {id:'l12e1',type:'mc',q:'„Das ist ___ Haus. ___ Haus ist sehr schön." Was passt?',
     options:['ein … Das','ein … Ein','der … Der'],answer:0,explain:'Erstes Nennen → unbestimmter Artikel; zweites Nennen → bestimmter Artikel „Das".'},
    {id:'l12e2',type:'gap',q:'„Sie ist ___ Ärztin." (Beruf — welcher Artikel?)',
     accept:['','–','kein','---'],hint:'Beruf ohne Adjektiv → kein Artikel. Leer lassen!',explain:'kein Artikel'},
    {id:'l12e3',type:'mc',q:'„___ Türkei liegt in Kleinasien." — Welcher Artikel?',
     options:['kein Artikel','Die','Eine'],answer:1,explain:'Die Türkei ist eine der Ausnahmen — immer mit bestimmtem Artikel.'},
    {id:'l12e4',type:'mc',q:'„Er ist ___ guter Lehrer." — Adjektiv dabei!',
     options:['kein Artikel','ein','der'],answer:1,explain:'Mit Adjektiv: unbestimmter Artikel. Ohne Adjektiv wäre es: „Er ist Lehrer."'},
    {id:'l12e5',type:'match',q:'Ordne die Regel dem Beispiel zu:',
     pairs:[['kein Artikel: Beruf','Er ist Pilot.'],['bestimmter Artikel: Einzigartiges','Die Sonne scheint.'],['kein Artikel: Länder','Deutschland liegt in Europa.'],['unbestimmter Artikel: 1. Nennung','Ich sehe eine Frau.']]},
  ]
},

/* ── Einheit 13 ─────────────────────────────────────── B2 ── */
{ id:'l13', tag:'Genitiv', level:'b2',
  title:'Разделительный Genitiv — Partitiver Genitiv',
  desc:'„Einer der …, einige der …, keiner der …" — Auswahl aus einer Gruppe.',
  vocab:[
    {de:'einer / eine / eines',     ru:'один/одна/одно из',         ex:'Einer der Studenten hat gewonnen.'},
    {de:'keiner / keine / keines',  ru:'ни один/одна/одно из',      ex:'Keiner der Vorschläge gefiel ihm.'},
    {de:'viele der …',              ru:'многие из …',               ex:'Viele der Bücher sind sehr teuer.'},
    {de:'einige der …',             ru:'некоторые из …',            ex:'Einige der Themen habe ich nicht verstanden.'},
    {de:'manche der …',             ru:'некоторые из …',            ex:'Manche der Züge verspäten sich.'},
    {de:'alle der …',               ru:'все из …',                  ex:'Alle der geprüften Arbeiten waren gut.'},
    {de:'wenige der …',             ru:'немногие из …',             ex:'Wenige der Schüler kannten die Antwort.'},
    {de:'zwei / drei meiner …',     ru:'двое/трое моих …',          ex:'Zwei meiner Freunde kommen heute.'},
    {de:'das schnellste der Autos', ru:'самый быстрый из машин',    ex:'Das schnellste der Autos gehört ihm.'},
    {de:'einer der schönsten',      ru:'один из красивейших',       ex:'Bamberg ist eine der schönsten Städte.'},
    {de:'jede der Frauen',          ru:'каждая из женщин',          ex:'Jede der Frauen erhielt eine Einladung.'},
    {de:'das Genitivattribut',      ru:'генитивное определение',    ex:'Die Hilfe des Zeugen war wichtig.'},
  ],
  gramHTML:`
    <h3>Was ist der partitive Genitiv?</h3>
    <p>Der partitive Genitiv drückt aus, dass jemand oder etwas <b>aus einer Gruppe herausgegriffen</b> wird. Auf Russisch übersetzt man ihn meist mit dem Präfix <b>„из"</b>.</p>
    <table>
      <tr><th>Muster</th><th>Deutsch</th><th>Russisch</th></tr>
      <tr><td>Maskulinum</td><td>einer der Studenten</td><td>один из студентов</td></tr>
      <tr><td>Femininum</td><td>eine der Frauen</td><td>одна из женщин</td></tr>
      <tr><td>Neutrum</td><td>eines der Autos</td><td>одна из машин</td></tr>
      <tr><td>+ Superlativ</td><td>einer der besten Filme</td><td>один из лучших фильмов</td></tr>
      <tr><td>Negation</td><td>keiner der Vorschläge</td><td>ни одно из предложений</td></tr>
      <tr><td>Menge</td><td>viele der Bücher</td><td>многие из книг</td></tr>
    </table>
    <div class="ex-box"><b>Bamberg ist eine der schönsten Städte Bayerns.</b><span class="gl">Бамберг — один из красивейших городов Баварии.</span></div>
    <div class="ex-box"><b>Keines der Geschenke hat ihr gefallen.</b><span class="gl">Ни один из подарков ей не понравился.</span></div>
    <div class="ex-box"><b>Zwei meiner Freunde wohnen in der Schweiz.</b><span class="gl">Двое моих друзей живут в Швейцарии.</span></div>
    <div class="tip"><b>Merke:</b> Das Pronomen (einer/eine/eines/keiner…) richtet sich nach dem <b>Geschlecht des Substantivs</b> — nicht nach der Logik! Das Auto → eines der Autos (Neutrum!).</div>`,
  exercises:[
    {id:'l13e1',type:'mc',q:'„Bamberg ist ___ schönsten Städte Bayerns." (die Stadt)',
     options:['einer der','eine der','eines der'],
     answer:1,explain:'die Stadt → Femininum → „eine der schönsten Städte"'},
    {id:'l13e2',type:'mc',q:'„Das ist ___ besten Konzerte, das ich je gehört habe." (das Konzert)',
     options:['einer der','eine der','eines der'],
     answer:2,explain:'das Konzert → Neutrum → „eines der besten Konzerte"'},
    {id:'l13e3',type:'gap',q:'„___ der Vorschläge hat uns überzeugt." (kein Vorschlag / der Vorschlag, M)',
     accept:['keiner'],hint:'kein + -er für Maskulinum in dieser Position.',explain:'Keiner'},
    {id:'l13e4',type:'listen',
     audio:'Eines der Geschenke liegt auf dem Tisch. Viele der eingeladenen Gäste sind schon da. Zwei meiner Kollegen haben auch mitgemacht.',
     q:'Welche drei Partitiv-Konstruktionen hörst du?',
     options:['eines / viele / zwei meiner','einer / alle / drei','keines / manche / viele'],
     answer:0,explain:'„Eines der Geschenke", „Viele der Gäste", „Zwei meiner Kollegen" — drei klassische Formen.'},
    {id:'l13e5',type:'match',q:'Ordne zu — Russisch auf Deutsch:',
     pairs:[['один из студентов','einer der Studenten'],['ни одна из задач','keine der Aufgaben'],['некоторые из коллег','einige der Kollegen'],['самый быстрый из поездов','der schnellste der Züge']]},
  ]
},

/* ── Einheit 14 ─────────────────────────────────────── B1 ── */
{ id:'l14', tag:'Präpositionen', level:'b1',
  title:'Präpositionen — Fälle und Bedeutungen',
  desc:'Akkusativ- und Dativpräpositionen sicher erkennen und anwenden.',
  vocab:[
    {de:'durch',       ru:'через, сквозь, благодаря',  ex:'Wir gehen durch den Park.'},
    {de:'für',         ru:'для, за, на (время)',        ex:'Das Geschenk ist für dich.'},
    {de:'ohne',        ru:'без',                        ex:'Er kam ohne seinen Freund.'},
    {de:'um',          ru:'вокруг, в (время)',          ex:'Um den Tisch stehen Stühle.'},
    {de:'gegen',       ru:'против, около',              ex:'Er kommt gegen 10 Uhr.'},
    {de:'bis',         ru:'до',                         ex:'Er arbeitet bis 20 Uhr.'},
    {de:'entlang',     ru:'вдоль (после сущ.)',         ex:'Wir gehen den Fluss entlang.'},
    {de:'bei',         ru:'у, при, во время',           ex:'Sie wohnt bei ihrer Tante.'},
    {de:'seit',        ru:'с (какого-то времени)',      ex:'Ich lerne seit drei Jahren Deutsch.'},
    {de:'außer',       ru:'кроме',                      ex:'Außer ihm kam niemand.'},
    {de:'mit',         ru:'с (совместно)',               ex:'Ich fahre mit dem Bus.'},
    {de:'nach',        ru:'после, в (направление)',     ex:'Nach der Arbeit gehe ich spazieren.'},
    {de:'aus',         ru:'из',                         ex:'Er kommt aus München.'},
    {de:'zu',          ru:'к, на',                      ex:'Ich gehe zum Arzt.'},
    {de:'von',         ru:'от, о',                      ex:'Das Buch ist von Schiller.'},
  ],
  gramHTML:`
    <h3>Zwei Gruppen: Akkusativ oder Dativ</h3>
    <table>
      <tr><th>+ Akkusativ</th><th>+ Dativ</th></tr>
      <tr><td>durch, für, ohne, um, gegen, bis, entlang</td><td>bei, seit, außer, mit, nach, aus, zu, von, gegenüber, entgegen</td></tr>
    </table>
    <div class="tip"><b>Eselsbrücke Akkusativ:</b> <b>d</b>urch – <b>f</b>ür – <b>o</b>hne – <b>u</b>m – <b>g</b>egen – <b>b</b>is – <b>e</b>ntlang → „<b>dfougbe</b>" oder merke: „durch für ohne um gegen bis entlang"</div>
    <div class="tip"><b>Eselsbrücke Dativ:</b> <b>b</b>ei – <b>s</b>eit – <b>a</b>ußer – <b>m</b>it – <b>n</b>ach – <b>a</b>us – <b>z</b>u – <b>v</b>on → „<b>bsamnavz</b>"</div>
    <h3>Häufige Kombinationen</h3>
    <div class="ex-box"><b>Ich fahre mit dem Zug durch die Stadt.</b><span class="gl">mit = Dativ; durch = Akkusativ</span></div>
    <div class="ex-box"><b>Seit wann arbeitest du bei dieser Firma?</b><span class="gl">seit + Dativ; bei + Dativ</span></div>`,
  exercises:[
    {id:'l14e1',type:'mc',q:'Welche Präpositionen stehen immer mit dem AKKUSATIV?',
     options:['mit, nach, von','durch, für, ohne','bei, seit, aus'],
     answer:1,explain:'durch – für – ohne – um – gegen – bis – entlang → alle mit Akkusativ.'},
    {id:'l14e2',type:'match',q:'Ordne: Präposition → Kasus',
     pairs:[['seit','Dativ'],['durch','Akkusativ'],['zu','Dativ'],['für','Akkusativ']]},
    {id:'l14e3',type:'gap',q:'„Ich lerne ___ drei Jahren Deutsch." (seit/für?)',
     accept:['seit'],hint:'Zeitspanne, die bis heute andauert → ?',explain:'seit'},
    {id:'l14e4',type:'gap',q:'„Das Geschenk ist ___ meine Mutter." (für/von/zu?)',
     accept:['für'],hint:'„für" = für jemanden bestimmt.',explain:'für'},
    {id:'l14e5',type:'listen',
     audio:'Seit drei Jahren arbeite ich bei einer Firma in München. Jeden Tag fahre ich mit dem Bus durch die Stadt ohne Stress.',
     q:'Wie viele Präpositionen hörst du insgesamt?',
     options:['3','4','5'],
     answer:1,explain:'seit · bei · mit · durch — 4 Präpositionen (ohne zählt auch: 5 insgesamt).'},
  ]
},
]; // END COURSE

/* ============================================================
   GRAMMAR MODULES  (standalone)
============================================================ */
const GRAMMAR = [
  { id:'g1', icon:'✏️', title:'Konjunktiv II — vollständig',
    desc:'Höfliche Bitten, irreale Bedingungen, Wünsche und Ratschläge.',
    html:`
    <h3>Formen im Überblick</h3>
    <table>
      <tr><th>Verb</th><th>Konjunktiv II</th><th>Beispiel</th></tr>
      <tr><td>sein</td><td>wäre</td><td>Wenn ich du <b>wäre</b> …</td></tr>
      <tr><td>haben</td><td>hätte</td><td>Wenn ich Zeit <b>hätte</b> …</td></tr>
      <tr><td>werden → würde+Inf.</td><td>würde</td><td>Ich <b>würde</b> gern reisen.</td></tr>
      <tr><td>können</td><td>könnte</td><td>Ich <b>könnte</b> helfen.</td></tr>
      <tr><td>müssen</td><td>müsste</td><td>Du <b>müsstest</b> mehr üben.</td></tr>
      <tr><td>dürfen</td><td>dürfte</td><td><b>Dürfte</b> ich kurz fragen?</td></tr>
    </table>
    <h3>Irreale Bedingung</h3>
    <div class="ex-box"><b>Wenn ich mehr Zeit hätte, würde ich jeden Tag lernen.</b><span class="gl">Если бы у меня было больше времени, я бы учился каждый день.</span></div>
    <h3>Ratschlag</h3>
    <div class="ex-box"><b>An deiner Stelle würde ich das Angebot annehmen.</b><span class="gl">На твоём месте я бы принял это предложение.</span></div>
    <h3>Wunsch</h3>
    <div class="ex-box"><b>Wenn ich nur mehr Erfahrung hätte!</b><span class="gl">Если бы у меня только было больше опыта!</span></div>
    <div class="tip"><b>Tipp:</b> Für alle Verben außer sein/haben/Modalverben benutzt man <b>würde + Infinitiv</b>.</div>`,
  },
  { id:'g2', icon:'🔄', title:'Passiv — alle Formen',
    desc:'Vorgangspassiv, Zustandspassiv, Passiv mit Modalverben.',
    html:`
    <h3>Vorgangspassiv: werden + Partizip II</h3>
    <table>
      <tr><th>Zeit</th><th>Formel</th><th>Beispiel</th></tr>
      <tr><td>Präsens</td><td>wird + PII</td><td>Der Antrag <b>wird bearbeitet</b>.</td></tr>
      <tr><td>Präteritum</td><td>wurde + PII</td><td>Der Antrag <b>wurde bearbeitet</b>.</td></tr>
      <tr><td>Perfekt</td><td>ist + PII + worden</td><td>Der Antrag <b>ist bearbeitet worden</b>.</td></tr>
      <tr><td>Futur</td><td>wird + PII + werden</td><td>Der Antrag <b>wird bearbeitet werden</b>.</td></tr>
    </table>
    <div class="tip b"><b>Perfekt-Passiv:</b> „worden" — NICHT „geworden"!</div>
    <h3>Passiv mit Modalverb</h3>
    <div class="ex-box"><b>Das Formular muss ausgefüllt werden.</b> (Präsens)<span class="gl">Форму необходимо заполнить.</span></div>
    <div class="ex-box"><b>Das Formular musste ausgefüllt werden.</b> (Präteritum)</div>
    <h3>Zustandspassiv: sein + Partizip II</h3>
    <p>Beschreibt das <b>Ergebnis</b>, nicht den Vorgang.</p>
    <div class="ex-box"><b>Vorgang:</b> Die Tür wird geschlossen. &nbsp;|&nbsp; <b>Zustand:</b> Die Tür ist geschlossen.</div>`,
  },
  { id:'g3', icon:'🔗', title:'Konnektoren — Wortstellung',
    desc:'Kausal, konzessiv, konsekutiv, final — mit Verb-Position.',
    html:`
    <h3>Übersicht: Konnektoren und Verb-Position</h3>
    <table>
      <tr><th>Typ</th><th>Konnektor</th><th>Verb-Position</th></tr>
      <tr><td>Kausal</td><td>weil, da, denn</td><td>weil/da → Ende; denn → normal</td></tr>
      <tr><td>Konzessiv</td><td>obwohl, obgleich, wenngleich</td><td>Verb ans Ende</td></tr>
      <tr><td>Konzessiv</td><td>trotzdem, dennoch, jedoch</td><td>Inversion (V2)</td></tr>
      <tr><td>Konsekutiv</td><td>deshalb, daher, deswegen</td><td>Inversion (V2)</td></tr>
      <tr><td>Temporal</td><td>als, wenn, während, bevor, nachdem</td><td>Verb ans Ende</td></tr>
      <tr><td>Final</td><td>damit, um … zu</td><td>damit → Ende; um … zu → Infinitiv</td></tr>
      <tr><td>Komparativ</td><td>je … desto/umso</td><td>je → Verb Ende; desto → Inversion</td></tr>
    </table>
    <div class="ex-box"><b>Je mehr ich übe, desto sicherer werde ich.</b><span class="gl">Чем больше я практикуюсь, тем увереннее становлюсь.</span></div>
    <div class="ex-box"><b>Ich lerne Deutsch, damit ich in der Schweiz arbeiten kann.</b></div>
    <div class="tip"><b>denn vs weil:</b> Nach <b>denn</b> (Konjunktion) bleibt die Wortstellung normal. Nach <b>weil</b> (Subjunktion) steht das Verb am Ende.</div>`,
  },
  { id:'g4', icon:'📖', title:'Indirekte Rede & Konjunktiv I',
    desc:'Aussagen anderer neutral wiedergeben.',
    html:`
    <h3>Konjunktiv I — Formen</h3>
    <table>
      <tr><th>Verb</th><th>er/sie/es</th><th>sie/Sie</th></tr>
      <tr><td>sein</td><td>sei</td><td>seien</td></tr>
      <tr><td>haben</td><td>habe</td><td>haben</td></tr>
      <tr><td>kommen</td><td>komme</td><td>kommen</td></tr>
      <tr><td>liefern</td><td>liefere</td><td>liefern</td></tr>
    </table>
    <div class="ex-box"><b>Direkt:</b> „Das Produkt ist fehlerfrei."<br><b>Indirekt:</b> Er behauptete, das Produkt <b>sei</b> fehlerfrei.</div>
    <div class="ex-box"><b>Direkt:</b> „Wir haben pünktlich geliefert."<br><b>Indirekt:</b> Sie sagten, sie <b>hätten</b> pünktlich geliefert. (KII, da KI = KII hier)</div>
    <h3>Verwendung</h3>
    <p>Indirekte Rede mit Konjunktiv I findet sich vor allem in formellen Texten, Beschwerdebriefen und Berichten. Im Gespräch wird häufig Konjunktiv II verwendet oder der Indikativ mit „dass".</p>
    <div class="tip"><b>Falls KI = Indikativ:</b> Wenn die KI-Form gleich dem Indikativ ist (z.B. sie liefern = sie liefern), nimmt man Konjunktiv II: „sie würden liefern" oder „sie lieferten".</div>`,
  },
  { id:'g5', icon:'🏗️', title:'Nominalisierungen & Funktionsverbgefüge',
    desc:'Formeller Stil durch Substantivierung und FVG.',
    html:`
    <h3>Häufige Nominalisierungen</h3>
    <table>
      <tr><th>Verb</th><th>Nominalisierung</th><th>Beispiel</th></tr>
      <tr><td>steigen</td><td>der Anstieg</td><td>Ein Anstieg von 10%</td></tr>
      <tr><td>entscheiden</td><td>die Entscheidung</td><td>eine Entscheidung treffen</td></tr>
      <tr><td>entwickeln</td><td>die Entwicklung</td><td>eine positive Entwicklung</td></tr>
      <tr><td>verbessern</td><td>die Verbesserung</td><td>eine deutliche Verbesserung</td></tr>
      <tr><td>sinken</td><td>der Rückgang</td><td>ein starker Rückgang</td></tr>
    </table>
    <h3>Funktionsverbgefüge (FVG)</h3>
    <table>
      <tr><th>einfaches Verb</th><th>FVG (formell)</th></tr>
      <tr><td>entscheiden</td><td>eine Entscheidung treffen</td></tr>
      <tr><td>fragen</td><td>eine Frage stellen</td></tr>
      <tr><td>beginnen</td><td>einen Anfang machen</td></tr>
      <tr><td>erklären</td><td>eine Erklärung abgeben</td></tr>
      <tr><td>verantworten</td><td>Verantwortung übernehmen</td></tr>
    </table>
    <div class="tip"><b>Wann?</b> FVG und Nominalisierungen sind typisch für Geschäftsbriefe, wissenschaftliche Texte und formelle Präsentationen. Im Gespräch wirken sie oft zu steif.</div>`,
  },
  { id:'g6', icon:'🎯', title:'Partizipien als Adjektive (B2+)',
    desc:'Partizip I und II als attributive Adjektive — formeller Stil.',
    html:`
    <h3>Partizip I als Attribut</h3>
    <p>Partizip I = Verb + -d + Adjektivendung. Beschreibt eine <b>gleichzeitige, aktive</b> Handlung.</p>
    <div class="ex-box"><b>der steigende Umsatz</b> = der Umsatz, der steigt<span class="gl">растущий оборот</span></div>
    <div class="ex-box"><b>die wachsende Nachfrage</b> = die Nachfrage, die wächst<span class="gl">растущий спрос</span></div>
    <h3>Partizip II als Attribut</h3>
    <p>Beschreibt eine <b>abgeschlossene, passive</b> Handlung.</p>
    <div class="ex-box"><b>der abgeschlossene Vertrag</b> = der Vertrag, der abgeschlossen wurde<span class="gl">подписанный/заключённый договор</span></div>
    <div class="ex-box"><b>die eingereichte Beschwerde</b> = die Beschwerde, die eingereicht wurde<span class="gl">поданная жалоба</span></div>
    <h3>Erweitertes Partizipialattribut (B2+)</h3>
    <div class="ex-box"><b>der gestern vom Kunden eingereichte Antrag</b><span class="gl">заявление, поданное вчера клиентом</span></div>
    <div class="tip"><b>Stil-Hinweis:</b> Erweiterte Partizipialattribute sind typisch für formelle Schrifttexte (Behörden, Verträge). Im Gespräch vermeidet man sie.</div>`,
  },,
  { id:'g7', icon:'🧩', title:'Partitiver Genitiv — „einer der …"',
    desc:'Auswahl aus einer Gruppe: einer/eine/eines der …, keiner/viele der …',
    html:`
    <h3>Das Muster</h3>
    <p>Der partitive Genitiv greift jemanden oder etwas aus einer Gruppe heraus. Das Pronomen richtet sich nach dem Genus des Hauptsubstantivs.</p>
    <table>
      <tr><th>Genus</th><th>positiv</th><th>negativ</th><th>Beispiel</th></tr>
      <tr><td>Maskulinum (der)</td><td>einer der</td><td>keiner der</td><td>einer der Kollegen</td></tr>
      <tr><td>Femininum (die)</td><td>eine der</td><td>keine der</td><td>eine der Städte</td></tr>
      <tr><td>Neutrum (das)</td><td>eines der</td><td>keines der</td><td>eines der Konzerte</td></tr>
      <tr><td>Plural</td><td>viele / einige / manche der</td><td>—</td><td>viele der Bücher</td></tr>
    </table>
    <h3>Mit Superlativ</h3>
    <div class="ex-box"><b>Bamberg ist eine der schönsten Städte Bayerns.</b><span class="gl">Бамберг — один из красивейших городов Баварии.</span></div>
    <div class="ex-box"><b>Das ist eines der besten Konzerte, das er je gehört hat.</b><span class="gl">Это один из лучших концертов, который он когда-либо слышал.</span></div>
    <h3>Mit Possessivpronomen</h3>
    <div class="ex-box"><b>Zwei meiner Freunde arbeiten dort.</b><span class="gl">Двое моих друзей работают там.</span></div>
    <div class="ex-box"><b>Keiner seiner Bekannten wusste davon.</b><span class="gl">Никто из его знакомых не знал об этом.</span></div>
    <div class="tip"><b>Häufiger Fehler:</b> das Auto → <b>eines</b> (nicht „eine"!) der schnellsten Autos. Das Neutrum verlangt -es!</div>`,
  },
  { id:'g8', icon:'⏱️', title:'Perfekt: haben oder sein?',
    desc:'Welche Verben bilden das Perfekt mit sein, welche mit haben?',
    html:`
    <h3>Grundregel</h3>
    <p>Die meisten Verben bilden das Perfekt mit <b>haben</b>. Mit <b>sein</b> bilden es:</p>
    <table>
      <tr><th>Gruppe</th><th>Verben (Beispiele)</th></tr>
      <tr><td>Bewegung von A nach B</td><td>gehen, fahren, laufen, fliegen, kommen, reisen</td></tr>
      <tr><td>Zustandsänderung</td><td>werden, sterben, aufwachen, einschlafen, fallen, wachsen</td></tr>
      <tr><td>Sondergruppe</td><td>sein, bleiben, passieren, gelingen, geschehen, folgen</td></tr>
    </table>
    <div class="ex-box"><b>Er ist gestern nach Berlin gefahren.</b> (Bewegung → sein)<span class="gl">Он вчера поехал в Берлин.</span></div>
    <div class="ex-box"><b>Das Kind ist eingeschlafen.</b> (Zustandsänderung → sein)<span class="gl">Ребёнок заснул.</span></div>
    <div class="ex-box"><b>Wir haben ein Buch gelesen.</b> (transitiv → haben)<span class="gl">Мы прочитали книгу.</span></div>
    <div class="tip"><b>Test:</b> Kann man den Satz mit „nach/in/zu …" ergänzen? Oder beschreibt er eine Veränderung? → <b>sein</b>. Sonst meist <b>haben</b>.</div>`,
  },
  { id:'g9', icon:'💬', title:'Konjunktiv I — косвенная речь',
    desc:'Chefin sagte, sie sei zufrieden — fremde Aussagen neutral weitergeben.',
    html:`
    <h3>Wozu brauche ich Konjunktiv I?</h3>
    <p>Im Deutschen gibt es zwei Wege, fremde Aussagen wiederzugeben. Der <b>Konjunktiv I</b> signalisiert klar: „Das sind nicht meine Worte." Er ist typisch für Zeitungsartikel, formelle Berichte und Zitate.</p>
    <h3>Bildung: Präsens Konjunktiv I</h3>
    <p>Grundformel: Verbstamm + <b>-e</b> (keine Umlaute!). Außnahme: <b>sein → sei</b></p>
    <table>
      <tr><th>Person</th><th>sagen</th><th>haben</th><th>sein</th></tr>
      <tr><td>er/sie/es</td><td>sage</td><td>habe</td><td><b>sei</b></td></tr>
      <tr><td>sie/Sie (Pl.)</td><td>sagen*</td><td>haben*</td><td>seien</td></tr>
    </table>
    <p>* Falls KI = Indikativ → man nimmt Konjunktiv II (würden) als Ersatz.</p>
    <h3>In der Praxis</h3>
    <div class="ex-box"><b>Direkt:</b> „Das Produkt ist fehlerfrei."<br><b>Indirekt:</b> Er behauptete, das Produkt <b>sei</b> fehlerfrei.</div>
    <div class="ex-box"><b>Direkt:</b> „Wir haben pünktlich geliefert."<br><b>Indirekt:</b> Sie sagten, sie <b>hätten</b> pünktlich geliefert. (Perfekt KI)</div>
    <div class="tip"><b>Konjunktiv I in Rezepten und Anleitungen:</b> Man <b>nehme</b> 4 Eier … — es <b>sei</b> beachtet, dass … Diese Verwendung ist heute eher stilistisch.</div>`,
  },

];

/* ============================================================
   QUIZ — 15 Fragen quer durch alle Einheiten
============================================================ */
const QUIZ = [
  {q:'„___ Sie mir bitte helfen?" (höflichste Form)',o:['Können','Könnten','Wollen'],a:1},
  {q:'Kollege ist nicht da — korrekte Formel?',o:['Er ist weg.','Er ist gerade nicht am Platz. Kann ich etwas ausrichten?','Ich weiß es nicht.'],a:1},
  {q:'Indirekte Frage: „Könnten Sie sagen, wann er ___?"',o:['zurückruft','zurückrufen','ruft zurück'],a:0},
  {q:'Formelle Anrede (Name unbekannt):',o:['Hallo zusammen,','Sehr geehrte Damen und Herren,','Guten Tag,'],a:1},
  {q:'Passiv Präsens: „Ihre Anfrage ___ bearbeitet."',o:['wird','ist','hat'],a:0},
  {q:'Perfekt-Passiv: „Die Ware ist geliefert ___."',o:['geworden','worden','werden'],a:1},
  {q:'Präsentations-Überleitung:',o:['Und jetzt was anderes.','Damit komme ich zu meinem nächsten Punkt.','Ende.'],a:1},
  {q:'Konzessiv mit Inversion: „Es ist teuer. ___ kaufen wir es."',o:['Weil','Trotzdem','Obwohl'],a:1},
  {q:'Zitat neutral wiedergeben (Konjunktiv I): „Das Produkt ___ fehlerfrei."',o:['ist','sei','wäre'],a:1},
  {q:'Relativsatz: „Das Hotel, ___ ich wohne."',o:['in dem','in der','in das'],a:0},
  {q:'Nominalisierung von „steigen":',o:['die Steigerung','der Anstieg','das Steigen'],a:1},
  {q:'Konzessiv: „Das Angebot ist ___ günstig, ___ die Qualität fehlt."',o:['weil … deshalb','zwar … aber','obwohl … trotzdem'],a:1},
  {q:'Funktionsverbgefüge für „entscheiden":',o:['eine Entscheidung treffen','eine Frage stellen','Hilfe leisten'],a:0},
  {q:'Trend beschreiben: „Im ___ zum Vorjahr stiegen die Umsätze."',o:['Gegensatz','Vergleich','Unterschied'],a:1},
  {q:'Modalpartikel für Vermutung:',o:['ja','halt','wohl'],a:2},
  ,{q:'„Bamberg ist ___ schönsten Städte Bayerns." (die Stadt)',o:['einer der','eine der','eines der'],a:1},
  {q:'Präpositionen mit Dativ:',o:['durch, für, ohne','seit, bei, mit','um, gegen, bis'],a:1},
  {q:'„Das ist ___ Haus. ___ Haus ist groß." — Artikel?',o:['ein … Das','der … Das','ein … Ein'],a:0},
  {q:'Perfekt mit sein:',o:['lesen, schreiben, essen','gehen, fahren, einschlafen','kaufen, helfen, denken'],a:1},
  {q:'Konjunktiv I — Er sagte, er ___ müde. (sein)',o:['ist','sei','wäre'],a:1},

];

/* ============================================================
   STATE & PERSISTENCE
============================================================ */
const STORE_KEY='db2v2';
const state={
  view:'dashboard',lesson:null,tab:'vocab',deck:'all',gramUnit:null,
  xp:0,completed:new Set(),known:new Set(),personal:[],
  order:{},match:{},
  flash:{queue:[],pos:0,flipped:false,deckId:null},
  quiz:null,
  pdf:{doc:null,page:1,scale:1.3,name:'',rendering:false},
};
function loadState(){
  try{const s=JSON.parse(localStorage.getItem(STORE_KEY)||'{}');
    state.xp=s.xp||0;state.completed=new Set(s.completed||[]);
    state.known=new Set(s.known||[]);state.personal=s.personal||[];
  }catch(e){}
}
let _st=null;
function save(){clearTimeout(_st);_st=setTimeout(()=>{try{localStorage.setItem(STORE_KEY,JSON.stringify({xp:state.xp,completed:[...state.completed],known:[...state.known],personal:state.personal}));}catch(e){}},200);}

/* ============================================================
   HELPERS
============================================================ */
const $=s=>document.querySelector(s);
const content=$('#content');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const norm=s=>s.toLowerCase().trim().replace(/\s+/g,' ').replace(/[.,!?]+$/,'');
const lById=id=>COURSE.find(l=>l.id===id);
const gById=id=>GRAMMAR.find(g=>g.id===id);
const cWord=w=>w.replace(/\s*\(.*?\)/,'').replace(/^(der|die|das|sich)\s+/i,'');
function lPct(l){const d=l.exercises.filter(e=>state.completed.has(e.id)).length;return{done:d,total:l.exercises.length,pct:Math.round(d/l.exercises.length*100)};}
function totalPct(){const tot=COURSE.reduce((s,l)=>s+l.exercises.length,0);return Math.round(state.completed.size/tot*100);}

let _v=[];
function loadV(){_v=window.speechSynthesis?speechSynthesis.getVoices():[];}
if(window.speechSynthesis){loadV();speechSynthesis.onvoiceschanged=loadV;}
function speak(text,rate=.92){
  if(!window.speechSynthesis)return;
  const u=new SpeechSynthesisUtterance(text);u.lang='de-DE';u.rate=rate;
  const dv=_v.find(v=>/^de/i.test(v.lang));if(dv)u.voice=dv;
  speechSynthesis.cancel();speechSynthesis.speak(u);
}
function syncXP(){$('#xp').textContent=state.xp;$('#lvl').textContent=Math.floor(state.xp/100)+1;}
function awardXP(id,pts){if(state.completed.has(id))return;state.completed.add(id);state.xp+=pts;syncXP();save();}

const ICONS={
  dashboard:'<svg viewBox="0 0 24 24"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></svg>',
  book:'<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  course:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>',
  gram:'<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  cards:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="13" height="15" rx="2"/><path d="M8 5l5-2 7 2-2 13"/></svg>',
  star:'<svg viewBox="0 0 24 24"><path d="M12 2l2.6 6.4L21 9l-5 4.3L17.5 21 12 17l-5.5 4L8 13.3 3 9l6.4-.6z"/></svg>',
  test:'<svg viewBox="0 0 24 24"><path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/></svg>',
};
const SPK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a7 7 0 0 1 0 14.14"/></svg>';
const LVLBADGE={b1:'<span class="badge b1">B1</span>',b2:'<span class="badge b2">B2</span>',b2p:'<span class="badge b2p">B2+</span>'};

/* ============================================================
   NAV
============================================================ */
function renderNav(){
  const items=[
    ['dashboard','Übersicht','dashboard'],
    ['reader','Lehrbuch PDF','book'],
    ['course','Kurs','course'],
    ['grammar','Grammatik','gram'],
    ['vocab','Vokabeltrainer','cards'],
    ['personal','Meine Vokabeln','star'],
    ['quiz','Test','test'],
  ];
  $('#nav').innerHTML=items.map(([v,l,ic])=>
    `<button class="navitem ${state.view===v||state.view==='lesson'&&v==='course'||state.view==='gramunit'&&v==='grammar'?'active':''}" data-action="nav" data-view="${v}">
      <span class="ic">${ICONS[ic]}</span>${l}</button>`).join('');
}
function render(){
  renderNav();
  const v=state.view;
  if(v==='dashboard')renderDashboard();
  else if(v==='reader')renderReader();
  else if(v==='course')renderCourseList();
  else if(v==='lesson')renderLesson();
  else if(v==='grammar')renderGrammarList();
  else if(v==='gramunit')renderGramUnit();
  else if(v==='vocab')renderVocab();
  else if(v==='personal')renderPersonal();
  else if(v==='quiz')renderQuiz();
  if(v!=='reader')content.scrollTo({top:0,behavior:'instant'});
}

/* ============================================================
   DASHBOARD
============================================================ */
function renderDashboard(){
  const pct=totalPct();
  const b1done=COURSE.filter(l=>l.level==='b1').reduce((s,l)=>s+lPct(l).done,0);
  const b1tot=COURSE.filter(l=>l.level==='b1').reduce((s,l)=>s+l.exercises.length,0);
  const b2done=COURSE.filter(l=>l.level==='b2').reduce((s,l)=>s+lPct(l).done,0);
  const b2tot=COURSE.filter(l=>l.level==='b2').reduce((s,l)=>s+l.exercises.length,0);
  const b2pdone=COURSE.filter(l=>l.level==='b2p').reduce((s,l)=>s+lPct(l).done,0);
  const b2ptot=COURSE.filter(l=>l.level==='b2p').reduce((s,l)=>s+l.exercises.length,0);

  const cards=COURSE.slice(0,4).map((l,i)=>{const p=lPct(l);return `
    <button class="lesson-card" data-action="open-lesson" data-id="${l.id}">
      <span class="idx">${i+1}</span><span class="tag">${l.tag}</span>
      <h3>${l.title}</h3>
      <div class="bar-track"><div class="bar-fill ${p.pct===100?'done':''}" style="width:${p.pct}%"></div></div>
      <span class="pct-label">${p.pct===100?'✓ fertig':p.pct+'%'}</span>
    </button>`;}).join('');

  content.innerHTML=`<div class="page view">
    <div class="hero"><div class="eyebrow">Berufliches Deutsch · B1 → B2+</div>
    <h1>Berufliches Deutsch — <em>Dein Kurs.</em></h1>
    <p>10 Einheiten · 6 Grammatikmodule · Hörübungen mit Aussprache · Fortschritt wird im Browser gespeichert.</p></div>
    <div class="stat-row">
      <div class="stat"><div class="v">${state.xp}</div><div class="l">XP</div></div>
      <div class="stat"><div class="v">${state.completed.size}</div><div class="l">Übungen</div></div>
      <div class="stat"><div class="v">${state.known.size}</div><div class="l">Vokabeln</div></div>
      <div class="stat"><div class="v">${pct}%</div><div class="l">Gesamt</div></div>
    </div>
    <div class="path-row">
      <div class="path-step"><div class="plabel">B1</div><div class="pval ${b1done===b1tot?'done':''}">${b1done}/${b1tot}</div></div>
      <div class="path-sep">→</div>
      <div class="path-bar"><div class="ptrack"><div class="pfill" style="width:${pct}%"></div></div></div>
      <div class="path-sep">→</div>
      <div class="path-step"><div class="plabel">B2</div><div class="pval ${b2done===b2tot?'done':''}">${b2done}/${b2tot}</div></div>
      <div class="path-sep">→</div>
      <div class="path-bar" style="flex:1"><div class="ptrack"><div class="pfill" style="width:${Math.round(b2pdone/b2ptot*100)||0}%"></div></div></div>
      <div class="path-sep">→</div>
      <div class="path-step"><div class="plabel">B2+</div><div class="pval ${b2pdone===b2ptot?'done':''}">${b2pdone}/${b2ptot}</div></div>
    </div>
    <div class="section-label"><h2>Zuletzt geöffnet</h2><div class="rule"></div><div class="count"><button class="btn sm ghost" data-action="nav" data-view="course">Alle 10 Einheiten →</button></div></div>
    <div class="grid">${cards}</div>
    <div class="btn-row" style="margin-top:22px">
      <button class="btn" data-action="nav" data-view="reader">📖 Lehrbuch öffnen</button>
      <button class="btn ghost" data-action="nav" data-view="grammar">Grammatik-Module →</button>
      <button class="btn ghost" data-action="nav" data-view="quiz">Test starten →</button>
    </div></div>`;
}

/* ============================================================
   COURSE LIST & LESSON
============================================================ */
function renderCourseList(){
  const levels={b1:'B1 – Mittelstufe',b2:'B2 – Obere Mittelstufe',b2p:'B2+ – Fortgeschritten'};
  let html='<div class="page view"><div class="hero"><div class="eyebrow">Kurs</div><h1>Alle 10 Einheiten</h1><p>Wortschatz mit Aussprache, Grammatik, Übungen und Höraufgaben.</p></div>';
  ['b1','b2','b2p'].forEach(lvl=>{
    const ls=COURSE.filter(l=>l.level===lvl);
    html+=`<div class="section-label"><h2>${levels[lvl]}</h2><div class="rule"></div><div class="count">${ls.length} Einheiten</div></div><div class="grid">`;
    html+=ls.map((l,i)=>{const p=lPct(l);const gi=COURSE.indexOf(l);return `<button class="lesson-card" data-action="open-lesson" data-id="${l.id}">
      <span class="idx">${gi+1}</span><span class="tag">${l.tag}</span>
      <h3>${l.title}</h3><div class="desc">${l.desc}</div>
      <div class="meta"><span>${l.vocab.length} Vokabeln</span><span>${l.exercises.length} Übungen</span>${LVLBADGE[l.level]}</div>
      <div class="bar-track"><div class="bar-fill ${p.pct===100?'done':''}" style="width:${p.pct}%"></div></div>
      <span class="pct-label">${p.pct===100?'✓ abgeschlossen':p.pct+'% erledigt'}</span></button>`;}).join('');
    html+='</div>';
  });
  html+='</div>';
  content.innerHTML=html;
}

function renderLesson(){
  const l=lById(state.lesson);
  content.innerHTML=`<div class="page view">
    <button class="back" data-action="nav" data-view="course">← Alle Einheiten</button>
    <div class="lesson-head"><span class="tag">${l.tag}</span>${LVLBADGE[l.level]}<h1>${l.title}</h1><p>${l.desc}</p></div>
    <div class="tabs">
      <button class="tab ${state.tab==='vocab'?'active':''}" data-action="lesson-tab" data-tab="vocab">Wortschatz</button>
      <button class="tab ${state.tab==='grammar'?'active':''}" data-action="lesson-tab" data-tab="grammar">Grammatik</button>
      <button class="tab ${state.tab==='exercises'?'active':''}" data-action="lesson-tab" data-tab="exercises">Übungen</button>
    </div>
    <div id="tabbody"></div></div>`;
  renderTab(l);
}
function renderTab(l){
  const b=$('#tabbody');
  if(state.tab==='vocab'){
    b.innerHTML=l.vocab.map((v,i)=>`<div class="vocab-item">
      <button class="spk" data-action="speak" data-text="${esc(cWord(v.de))}" title="Normal">${SPK}</button>
      <div style="flex:1"><div class="de">${v.de}</div>
      <div class="ru" id="rv-${l.id}-${i}" style="display:none">${v.ru}</div>
      <button class="reveal-btn" data-action="reveal" data-target="rv-${l.id}-${i}">Übersetzung</button>
      <div class="ex">„${v.ex}"</div></div>
      <button class="spk" data-action="speak-slow" data-text="${esc(cWord(v.de))}" title="Langsam" style="opacity:.6">🐢</button>
    </div>`).join('')
    +`<div class="btn-row"><button class="btn ghost" data-action="study-deck" data-id="${l.id}">Als Karteikarten üben →</button></div>`;
  }else if(state.tab==='grammar'){
    b.innerHTML=`<div class="gram">${l.gramHTML}</div>`;
  }else{
    b.innerHTML=l.exercises.map(renderEx).join('');
    l.exercises.forEach(setupEx);
  }
}

/* ============================================================
   GRAMMAR MODULE
============================================================ */
function renderGrammarList(){
  content.innerHTML=`<div class="page view">
    <div class="hero"><div class="eyebrow">Grammatik</div><h1>Grammatik-Module</h1>
    <p>Von Konjunktiv II bis Partizipialkonstruktionen — alle wichtigen B2-Themen im Überblick.</p></div>
    <div class="gram-grid">${GRAMMAR.map(g=>`<button class="gram-card" data-action="open-gram" data-id="${g.id}">
      <div class="gc-icon">${g.icon}</div>
      <h3>${g.title}</h3><p>${g.desc}</p>
    </button>`).join('')}</div></div>`;
}
function renderGramUnit(){
  const g=gById(state.gramUnit);
  content.innerHTML=`<div class="page view">
    <button class="back" data-action="nav" data-view="grammar">← Grammatik-Übersicht</button>
    <div class="lesson-head"><span class="tag">Grammatik</span>
    <h1>${g.icon} ${g.title}</h1><p>${g.desc}</p></div>
    <div class="gram">${g.html}</div></div>`;
}

/* ============================================================
   EXERCISES
============================================================ */
function exHead(ex,n){const d=state.completed.has(ex.id);
  const t={mc:'Mehrfachauswahl',gap:'Lückentext',order:'Satzbau',match:'Zuordnung',listen:'Hörübung'};
  return `<div class="kicker"><span>Übung ${n} · ${t[ex.type]||ex.type}</span>${d?'<span class="done-badge">✓ +10 XP</span>':''}</div>`;}

function renderEx(ex,i){const n=i+1;
  if(ex.type==='mc') return `<div class="ex" id="ex-${ex.id}">${exHead(ex,n)}<div class="q">${ex.q}</div>
    <div id="opts-${ex.id}">${ex.options.map((o,j)=>`<button class="opt" data-action="mc" data-ex="${ex.id}" data-opt="${j}">${o}</button>`).join('')}</div>
    <div class="feedback" id="fb-${ex.id}"></div></div>`;

  if(ex.type==='gap') return `<div class="ex" id="ex-${ex.id}">${exHead(ex,n)}<div class="q">${ex.q}</div>
    <div class="btn-row"><input class="gap-input" id="inp-${ex.id}" placeholder="Antwort …" autocomplete="off">
    <button class="btn" data-action="check-gap" data-ex="${ex.id}">Prüfen</button>
    <span class="hint">${ex.hint||''}</span></div>
    <div class="feedback" id="fb-${ex.id}"></div></div>`;

  if(ex.type==='listen') return `<div class="ex" id="ex-${ex.id}">${exHead(ex,n)}
    <div class="listen-box">
      <div class="listen-icon">🎧</div>
      <div><div class="listen-text">Hör dir den Satz an, dann beantworte die Frage.</div>
      <div class="listen-hint">Klicke auf ▶ um zu hören — du kannst mehrfach abspielen.</div></div>
      <div class="listen-btns">
        <button class="btn blue sm" data-action="play-listen" data-ex="${ex.id}" data-rate="0.92">▶ Anhören</button>
        <button class="btn ghost sm" data-action="play-listen" data-ex="${ex.id}" data-rate="0.6">🐢 Langsam</button>
      </div>
    </div>
    <div class="q" style="margin-top:12px">${ex.q}</div>
    <div id="opts-${ex.id}">${ex.options.map((o,j)=>`<button class="opt" data-action="mc" data-ex="${ex.id}" data-opt="${j}">${o}</button>`).join('')}</div>
    <div class="feedback" id="fb-${ex.id}"></div></div>`;

  if(ex.type==='order') return `<div class="ex" id="ex-${ex.id}">${exHead(ex,n)}<div class="q">${ex.q}</div>
    <div class="answer-line" id="ans-${ex.id}"></div><div class="bank" id="bank-${ex.id}"></div>
    <div class="btn-row"><button class="btn" data-action="check-order" data-ex="${ex.id}">Prüfen</button>
    <button class="btn ghost" data-action="reset-order" data-ex="${ex.id}">Reset</button></div>
    <div class="feedback" id="fb-${ex.id}"></div></div>`;

  if(ex.type==='match') return `<div class="ex" id="ex-${ex.id}">${exHead(ex,n)}<div class="q">${ex.q}</div>
    <div class="match-grid" id="match-${ex.id}"></div>
    <div class="feedback" id="fb-${ex.id}"></div></div>`;
  return '';
}

function setupEx(ex){
  if(ex.type==='order'){if(!state.order[ex.id])state.order[ex.id]={placed:[],bank:shuffle(ex.words.map((w,i)=>({w,i})))};drawOrder(ex);}
  if(ex.type==='match'){if(!state.match[ex.id])state.match[ex.id]={selLeft:null,done:new Set(),right:shuffle(ex.pairs.map((p,i)=>({txt:p[1],i})))};drawMatch(ex);}
}
const exById=id=>lById(state.lesson).exercises.find(e=>e.id===id);

/* order */
function drawOrder(ex){const st=state.order[ex.id];const a=$('#ans-'+ex.id),b=$('#bank-'+ex.id);if(!a||!b)return;
  a.innerHTML=st.placed.map(t=>`<button class="chip" data-action="order-remove" data-ex="${ex.id}" data-i="${t.i}">${t.w}</button>`).join('')||'<span class="hint" style="align-self:center">Wörter antippen …</span>';
  b.innerHTML=st.bank.map(t=>`<button class="chip" data-action="order-add" data-ex="${ex.id}" data-i="${t.i}">${t.w}</button>`).join('');}
function orderAdd(id,i){const st=state.order[id];const k=st.bank.findIndex(t=>t.i==i);if(k<0)return;const[t]=st.bank.splice(k,1);st.placed.push(t);drawOrder(exById(id));}
function orderRem(id,i){const st=state.order[id];const k=st.placed.findIndex(t=>t.i==i);if(k<0)return;const[t]=st.placed.splice(k,1);st.bank.push(t);drawOrder(exById(id));}
function checkOrder(id){const ex=exById(id);const st=state.order[id];const fb=$('#fb-'+id);
  if(norm(st.placed.map(t=>t.w).join(' '))===norm(ex.answer)){fb.className='feedback show ok';fb.innerHTML='✓ Richtig! <span class="sol">'+ex.answer+'</span>';awardXP(id,10);markDone(id);speak(ex.answer);}
  else{fb.className='feedback show no';fb.innerHTML='Noch nicht ganz — achte auf die Wortstellung.';}}

/* match */
function drawMatch(ex){const st=state.match[ex.id];const w=$('#match-'+ex.id);if(!w)return;
  const left=ex.pairs.map((p,i)=>`<button class="match-item de ${st.done.has(i)?'matched':''} ${st.selLeft===i?'sel':''}" data-action="match-left" data-ex="${ex.id}" data-i="${i}" ${st.done.has(i)?'disabled':''}>${p[0]}</button>`).join('');
  const right=st.right.map(r=>`<button class="match-item ${st.done.has(r.i)?'matched':''}" data-action="match-right" data-ex="${ex.id}" data-i="${r.i}" ${st.done.has(r.i)?'disabled':''}>${r.txt}</button>`).join('');
  w.innerHTML=`<div class="match-col">${left}</div><div class="match-col">${right}</div>`;}
function matchL(id,i){const st=state.match[id];if(st.done.has(i))return;st.selLeft=(st.selLeft===i?null:i);drawMatch(exById(id));}
function matchR(id,i){const ex=exById(id);const st=state.match[id];if(st.selLeft===null)return;
  if(st.selLeft===i){st.done.add(i);st.selLeft=null;drawMatch(ex);
    if(st.done.size===ex.pairs.length){const f=$('#fb-'+id);f.className='feedback show ok';f.innerHTML='✓ Alle Paare richtig!';awardXP(id,10);markDone(id);}}
  else{const w=$('#match-'+id);w.querySelectorAll('[data-action="match-right"]').forEach(b=>{if(b.dataset.i==i){b.classList.add('flash');setTimeout(()=>b.classList.remove('flash'),400);}});st.selLeft=null;setTimeout(()=>drawMatch(ex),150);}}

/* mc / listen */
function answerMC(id,opt){const ex=exById(id);const w=$('#opts-'+id);const f=$('#fb-'+id);
  if(!w)return;const b=w.querySelectorAll('.opt');
  b.forEach((x,i)=>{x.disabled=true;if(i===ex.answer)x.classList.add('correct');});
  if(opt===ex.answer){f.className='feedback show ok';f.innerHTML='✓ Richtig! '+ex.explain;awardXP(id,10);markDone(id);speak(ex.options[ex.answer]);}
  else{b[opt].classList.add('wrong');f.className='feedback show no';f.innerHTML='Leider falsch. '+ex.explain;}}

/* gap */
function checkGap(id){const ex=exById(id);const inp=$('#inp-'+id);const f=$('#fb-'+id);const val=norm(inp.value);if(!val){inp.focus();return;}
  if(ex.accept.map(norm).includes(val)){inp.classList.remove('wrong');inp.classList.add('correct');inp.disabled=true;f.className='feedback show ok';f.innerHTML='✓ Richtig!';awardXP(id,10);markDone(id);speak(ex.accept[0]);}
  else{inp.classList.remove('correct');inp.classList.add('wrong');f.className='feedback show no';f.innerHTML='Nicht ganz. Lösung: <span class="sol">'+ex.explain+'</span>';}}

function markDone(id){const k=$('#ex-'+id+' .kicker');if(k&&!k.querySelector('.done-badge'))k.insertAdjacentHTML('beforeend','<span class="done-badge">✓ +10 XP</span>');}

/* ============================================================
   VOCAB TRAINER
============================================================ */
function allW(){const o=[];COURSE.forEach(l=>l.vocab.forEach(v=>o.push({...v,key:l.id+'·'+v.de})));return o;}
function deckW(){
  if(state.deck==='all')return allW();
  if(state.deck==='personal')return state.personal.map(p=>({de:p.de,ru:p.ru,ex:p.ex||'',key:'p·'+p.id}));
  const l=lById(state.deck);return l?l.vocab.map(v=>({...v,key:l.id+'·'+v.de})):[];
}
function buildDeck(){state.flash={queue:shuffle(deckW()),pos:0,flipped:false,deckId:state.deck};}
function renderVocab(){
  const picks=[['all','Alle'],['personal','Meine']].concat(COURSE.map(l=>[l.id,l.tag]));
  if(!state.flash.queue.length||state.flash.deckId!==state.deck)buildDeck();
  content.innerHTML=`<div class="page view">
    <div class="hero" style="margin-bottom:18px"><div class="eyebrow">Vokabeltrainer</div><h1>Karteikarten</h1>
    <p>Karte anklicken zum Umdrehen. ▶ für Aussprache, 🐢 für langsame Aussprache.</p></div>
    <div class="deck-pick">${picks.map(([id,lab])=>`<button class="${state.deck===id?'active':''}" data-action="deck" data-id="${id}">${lab}</button>`).join('')}</div>
    <div id="flash-area"></div></div>`;
  drawFlash();
}
function drawFlash(){const area=$('#flash-area');const f=state.flash;
  if(!f.queue.length){area.innerHTML=`<div class="empty-state">Stapel leer.</div>`;return;}
  if(f.pos>=f.queue.length){area.innerHTML=`<div class="deck-done"><div class="big">Geschafft! 🎉</div><p>Alle Karten durch!</p><button class="btn" data-action="deck" data-id="${state.deck}">Neu mischen</button></div>`;return;}
  const c=f.queue[f.pos];
  area.innerHTML=`<div class="flash-wrap"><div class="flash-progress">Karte ${f.pos+1} / ${f.queue.length}</div>
    <div class="flashcard" data-action="flip">
      <div style="position:absolute;top:12px;right:12px;display:flex;gap:6px">
        <button class="spk" data-action="speak" data-text="${esc(cWord(c.de))}" title="Normal">${SPK}</button>
        <button class="spk" data-action="speak-slow" data-text="${esc(cWord(c.de))}" title="Langsam" style="font-size:13px">🐢</button>
      </div>
      ${f.flipped
        ?`<span class="side-tag">Übersetzung</span><div class="ru">${esc(c.ru)}</div>${c.ex?`<div class="ex">„${esc(c.ex)}"</div>`:''}`
        :`<span class="side-tag">Deutsch</span><div class="word">${esc(c.de)}</div><div class="flip-hint">Klicken zum Umdrehen →</div>`}
    </div>
    <div class="flash-controls">
      <button class="btn again" data-action="flash-again">↩ Nochmal</button>
      <button class="btn know" data-action="flash-know">Kann ich ✓</button>
    </div></div>`;
}
function flashFlip(){state.flash.flipped=!state.flash.flipped;drawFlash();}
function flashNext(known){const f=state.flash;const c=f.queue[f.pos];
  if(known){if(!state.known.has(c.key)){state.known.add(c.key);state.xp+=5;syncXP();save();}}else f.queue.push(c);
  f.pos++;f.flipped=false;drawFlash();}

/* ============================================================
   PERSONAL VOCAB
============================================================ */
function renderPersonal(){
  const list=state.personal.length?state.personal.map(p=>`<div class="vocab-item">
    <button class="spk" data-action="speak" data-text="${esc(cWord(p.de))}">${SPK}</button>
    <div style="flex:1"><div class="de">${esc(p.de)}</div><div class="ru">${esc(p.ru)}</div>
    ${p.ex?`<div class="ex">„${esc(p.ex)}"</div>`:''}</div>
    <button class="del" data-action="del-personal" data-id="${p.id}" title="Löschen">✕</button></div>`).join('')
    :`<div class="empty-state">Noch keine eigenen Wörter. Trag unbekannte Wörter aus dem Lehrbuch ein.</div>`;
  content.innerHTML=`<div class="page view">
    <div class="hero" style="margin-bottom:18px"><div class="eyebrow">Mein Wortschatz</div><h1>Meine Vokabeln</h1>
    <p>Neue Wörter aus dem Lehrbuch eintragen — sie erscheinen im Trainer unter „Meine".</p></div>
    <div class="addbar">
      <input id="p-de" placeholder="Deutsches Wort">
      <input id="p-ru" placeholder="Übersetzung">
      <input id="p-ex" placeholder="Beispiel (optional)">
      <button class="btn" data-action="add-personal">＋ Hinzufügen</button>
    </div>
    <div class="section-label"><h2>Gespeichert</h2><div class="rule"></div><div class="count">${state.personal.length} Wörter</div></div>
    ${list}</div>`;
}
function addPersonal(){const de=$('#p-de').value.trim(),ru=$('#p-ru').value.trim(),ex=$('#p-ex').value.trim();
  if(!de||!ru){$('#p-de').focus();return;}
  state.personal.unshift({id:Date.now().toString(36),de,ru,ex});save();renderPersonal();}
function delPersonal(id){state.personal=state.personal.filter(p=>p.id!==id);save();renderPersonal();}

/* ============================================================
   TEST
============================================================ */
function renderQuiz(){
  if(!state.quiz){content.innerHTML=`<div class="page view"><div class="hero" style="max-width:560px">
    <div class="eyebrow">Abschlusstest</div><h1>Bist du bereit?</h1>
    <p>${QUIZ.length} Fragen quer durch alle 10 Einheiten und 6 Grammatikmodule. Sofortiges Feedback.</p></div>
    <div class="btn-row"><button class="btn" data-action="quiz-start">Test starten →</button></div></div>`;return;}
  const q=state.quiz;if(q.i>=QUIZ.length){renderQuizResult();return;}
  const item=QUIZ[q.i];
  content.innerHTML=`<div class="page view"><button class="back" data-action="quiz-quit">← Abbrechen</button>
    <div class="quiz-progress"><div class="f" style="width:${q.i/QUIZ.length*100}%"></div></div>
    <div style="font-size:12.5px;color:var(--ink-faint);font-weight:600;margin-bottom:10px">Frage ${q.i+1} / ${QUIZ.length} &nbsp;·&nbsp; ${q.score} richtig</div>
    <div class="ex" style="max-width:620px"><div class="quiz-q">${item.q}</div>
    <div id="qopts">${item.o.map((o,i)=>`<button class="opt" data-action="quiz-ans" data-opt="${i}">${o}</button>`).join('')}</div>
    <div class="feedback" id="qfb"></div></div></div>`;
}
function quizAnswer(opt){const item=QUIZ[state.quiz.i];const b=document.querySelectorAll('#qopts .opt');const f=$('#qfb');
  b.forEach((x,i)=>{x.disabled=true;if(i===item.a)x.classList.add('correct');});
  if(opt===item.a){state.quiz.score++;f.className='feedback show ok';f.innerHTML='✓ Richtig!';}
  else{b[opt].classList.add('wrong');f.className='feedback show no';f.innerHTML='Richtig: <span class="sol">'+item.o[item.a]+'</span>';}
  setTimeout(()=>{state.quiz.i++;renderQuiz();},1050);}
function renderQuizResult(){
  const sc=state.quiz.score,tot=QUIZ.length,pct=Math.round(sc/tot*100);
  const gained=state.quiz.awarded?0:sc*4;
  if(!state.quiz.awarded){state.xp+=gained;state.quiz.awarded=true;syncXP();save();}
  const msg=pct>=80?'Exzellent! Sicheres B2-Niveau.':pct>=60?'Gut — wiederhol die schwächeren Einheiten.':'Weitermachen — geh die Grammatik nochmal durch.';
  const r=251.2,off=r-(r*pct/100);
  content.innerHTML=`<div class="page view" style="max-width:480px;margin:0 auto;text-align:center">
    <div style="color:var(--accent);letter-spacing:.22em;text-transform:uppercase;font-size:11px;font-weight:700;margin-bottom:16px">Ergebnis</div>
    <div class="result-ring"><svg viewBox="0 0 90 90" width="140" height="140"><circle cx="45" cy="45" r="40" fill="none" stroke="var(--paper-2)" stroke-width="8"/>
    <circle cx="45" cy="45" r="40" fill="none" stroke="var(--accent)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${r}" stroke-dashoffset="${off}" transform="rotate(-90 45 45)"/></svg>
    <div class="pctn">${pct}%</div></div>
    <h1 class="serif" style="font-weight:900;font-size:28px">${sc} von ${tot} richtig</h1>
    <p style="color:var(--ink-soft);margin:11px 0 6px">${msg}</p>
    <p style="color:var(--green);font-weight:600">+${gained} XP</p>
    <div class="btn-row" style="justify-content:center;margin-top:20px">
      <button class="btn" data-action="quiz-restart">Nochmal</button>
      <button class="btn ghost" data-action="nav" data-view="dashboard">Zur Übersicht</button>
    </div></div>`;
}

/* ============================================================
   PDF READER
============================================================ */
function renderReader(){
  const hasDoc=!!state.pdf.doc;
  content.innerHTML=`<div class="reader view">
    <div class="reader-bar">
      <span class="fname">${hasDoc?esc(state.pdf.name):'Kein Lehrbuch geöffnet'}</span>
      <div class="grp"><button class="btn sm" data-action="pdf-open">📂 PDF öffnen</button></div>
      ${hasDoc?`<div class="grp">
        <button class="iconbtn" data-action="pdf-prev">‹</button>
        <input class="pagenum" id="pageInput" value="${state.pdf.page}" type="number" min="1" max="${state.pdf.doc.numPages}">
        <span class="hint" style="white-space:nowrap">/ ${state.pdf.doc.numPages}</span>
        <button class="iconbtn" data-action="pdf-next">›</button>
        <span style="width:4px"></span>
        <button class="iconbtn" data-action="pdf-zoomout">−</button>
        <button class="iconbtn" data-action="pdf-zoomin">＋</button>
      </div>`:''}
    </div>
    ${hasDoc
      ?`<div class="reader-canvas-wrap"><canvas id="pdfCanvas"></canvas></div>`
      :`<div class="reader-empty">
          <div class="big">Dein Lehrbuch hier drin.</div>
          <p>Öffne deine PDF (z.B. Deutsch intensiv B2). Sie wird lokal gelesen — nichts wird hochgeladen.</p>
          <button class="btn" data-action="pdf-open">📂 PDF auswählen …</button>
          <p class="note">Die PDF bleibt nur für diese Sitzung. Beim nächsten Öffnen einfach erneut wählen.</p>
        </div>`}
  </div>`;
  if(hasDoc)renderPdfPage();
}
function triggerPdfOpen(){$('#pdfFileInput').click();}
async function loadPdfData(ab,name){
  try{state.pdf.name=name;const t=pdfjsLib.getDocument({data:ab});state.pdf.doc=await t.promise;state.pdf.page=1;renderReader();}
  catch(e){alert('PDF konnte nicht geladen werden.');}
}
async function renderPdfPage(){const d=state.pdf;if(!d.doc||d.rendering)return;d.rendering=true;
  try{const pg=await d.doc.getPage(d.page);const vp=pg.getViewport({scale:d.scale});
    const c=$('#pdfCanvas');if(!c){d.rendering=false;return;}
    const ctx=c.getContext('2d');const r=window.devicePixelRatio||1;
    c.width=vp.width*r;c.height=vp.height*r;c.style.width=vp.width+'px';c.style.height=vp.height+'px';
    ctx.setTransform(r,0,0,r,0,0);await pg.render({canvasContext:ctx,viewport:vp}).promise;
  }catch(e){}d.rendering=false;}
function pdfGo(d){const s=state.pdf;if(!s.doc)return;const n=Math.min(Math.max(1,s.page+d),s.doc.numPages);if(n!==s.page){s.page=n;const i=$('#pageInput');if(i)i.value=n;renderPdfPage();}}
function pdfSetPage(n){const s=state.pdf;if(!s.doc)return;s.page=Math.min(Math.max(1,n|0),s.doc.numPages);const i=$('#pageInput');if(i)i.value=s.page;renderPdfPage();}
function pdfZoom(f){state.pdf.scale=Math.min(3,Math.max(.5,+(state.pdf.scale+f).toFixed(2)));renderPdfPage();}
$('#pdfFileInput').addEventListener('change',async e=>{
  const file=e.target.files[0];if(!file)return;e.target.value='';
  const data=await file.arrayBuffer();await loadPdfData(data,file.name);state.view='reader';});

/* ============================================================
   EVENT DELEGATION
============================================================ */
document.body.addEventListener('click',e=>{
  const t=e.target.closest('[data-action]');if(!t)return;
  const a=t.dataset.action;
  switch(a){
    case 'nav': state.view=t.dataset.view; render(); break;
    case 'open-lesson': state.lesson=t.dataset.id;state.tab='vocab';state.view='lesson';render(); break;
    case 'open-gram': state.gramUnit=t.dataset.id;state.view='gramunit';render(); break;
    case 'lesson-tab': state.tab=t.dataset.tab;renderTab(lById(state.lesson));document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.tab===state.tab)); break;
    case 'study-deck': state.deck=t.dataset.id;state.view='vocab';render(); break;
    case 'reveal': const el=$('#'+t.dataset.target);if(el){el.style.display='block';t.style.display='none';} break;
    case 'speak': speak(t.dataset.text); break;
    case 'speak-slow': speak(t.dataset.text,.55); break;
    case 'play-listen':{const ex2=exById(t.dataset.ex);if(ex2)speak(ex2.audio,parseFloat(t.dataset.rate||.92));break;}
    case 'pdf-open': triggerPdfOpen(); break;
    case 'pdf-prev': pdfGo(-1); break;
    case 'pdf-next': pdfGo(1); break;
    case 'pdf-zoomin': pdfZoom(.2); break;
    case 'pdf-zoomout': pdfZoom(-.2); break;
    case 'mc': answerMC(t.dataset.ex,+t.dataset.opt); break;
    case 'check-gap': checkGap(t.dataset.ex); break;
    case 'order-add': orderAdd(t.dataset.ex,t.dataset.i); break;
    case 'order-remove': orderRem(t.dataset.ex,t.dataset.i); break;
    case 'check-order': checkOrder(t.dataset.ex); break;
    case 'reset-order': delete state.order[t.dataset.ex];setupEx(exById(t.dataset.ex));$('#fb-'+t.dataset.ex).className='feedback'; break;
    case 'match-left': matchL(t.dataset.ex,+t.dataset.i); break;
    case 'match-right': matchR(t.dataset.ex,+t.dataset.i); break;
    case 'deck': state.deck=t.dataset.id;buildDeck();renderVocab(); break;
    case 'flip': flashFlip(); break;
    case 'flash-again': flashNext(false); break;
    case 'flash-know': flashNext(true); break;
    case 'add-personal': addPersonal(); break;
    case 'del-personal': delPersonal(t.dataset.id); break;
    case 'quiz-start': state.quiz={i:0,score:0,awarded:false};renderQuiz(); break;
    case 'quiz-ans': quizAnswer(+t.dataset.opt); break;
    case 'quiz-quit': state.quiz=null;state.view='dashboard';render(); break;
    case 'quiz-restart': state.quiz={i:0,score:0,awarded:false};renderQuiz(); break;
  }
});
document.body.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&e.target.classList.contains('gap-input'))checkGap(e.target.id.replace('inp-',''));
  if(e.key==='Enter'&&['p-de','p-ru','p-ex'].includes(e.target.id))addPersonal();
  if(e.target.id==='pageInput'&&e.key==='Enter')pdfSetPage(+e.target.value);
});

/* ============================================================
   INIT
============================================================ */
loadState(); syncXP(); render();
