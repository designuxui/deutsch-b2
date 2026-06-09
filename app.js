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

/* ── Einheit 15 ─────────────────────────────────────── B1 ── */
{ id:'l15', tag:'Adjektive', level:'b1',
  title:'Adjektivdeklination',
  desc:'Adjektivendungen nach bestimmtem, unbestimmtem und ohne Artikel.',
  vocab:[
    {de:'der bestimmte Artikel + Adj.',ru:'-e / -en (schwach)',ex:'der alte Mann, die alte Frau, das alte Haus'},
    {de:'ein/eine + Adjektiv',ru:'-er/-e/-es im Nom, -en sonst',ex:'ein alter Mann, eine alte Frau, ein altes Haus'},
    {de:'ohne Artikel + Adjektiv',ru:'starke Endung (wie der-Artikel)',ex:'alter Wein, frische Luft, kaltes Wasser'},
    {de:'einen dicken Bauch',ru:'толстый живот (Akk M indef)',ex:'Er hat einen dicken Bauch.'},
    {de:'den schwarzen Anzug',ru:'чёрный костюм (Akk M def)',ex:'Er zieht den schwarzen Anzug an.'},
    {de:'ein weißes Hemd',ru:'белая рубашка (Nom/Akk N indef)',ex:'Er trägt ein weißes Hemd.'},
    {de:'die eleganten Schuhe',ru:'элегантные туфли (Pl)',ex:'Sie nimmt die eleganten Schuhe mit.'},
    {de:'mit einem guten Freund',ru:'с хорошим другом (Dat M)',ex:'Er geht mit einem guten Freund spazieren.'},
    {de:'trotz des schlechten Wetters',ru:'несмотря на плохую погоду (Gen)',ex:'Trotz des schlechten Wetters gehen wir aus.'},
  ],
  gramHTML:`
    <h3>Die Grundregel</h3>
    <p>Zeigt der Artikel das Geschlecht klar (<b>der/die/das</b>) → <b>schwache</b> Endung (-e/-en). Zeigt er es nicht (<b>ein / kein Artikel</b>) → <b>starke</b> Endung (das Adjektiv übernimmt die Aufgabe).</p>
    <h3>Nach bestimmtem Artikel</h3>
    <table>
      <tr><th></th><th>Mask.</th><th>Fem.</th><th>Neut.</th><th>Pl.</th></tr>
      <tr><td>Nom</td><td>-<b>e</b></td><td>-<b>e</b></td><td>-<b>e</b></td><td>-<b>en</b></td></tr>
      <tr><td>Akk</td><td>-<b>en</b></td><td>-<b>e</b></td><td>-<b>e</b></td><td>-<b>en</b></td></tr>
      <tr><td>Dat/Gen</td><td>-<b>en</b></td><td>-<b>en</b></td><td>-<b>en</b></td><td>-<b>en</b></td></tr>
    </table>
    <h3>Nach unbestimmtem Artikel (ein/eine)</h3>
    <table>
      <tr><th></th><th>Mask.</th><th>Fem.</th><th>Neut.</th></tr>
      <tr><td>Nom</td><td>-<b>er</b></td><td>-<b>e</b></td><td>-<b>es</b></td></tr>
      <tr><td>Akk</td><td>-<b>en</b></td><td>-<b>e</b></td><td>-<b>es</b></td></tr>
      <tr><td>Dat</td><td>-<b>en</b></td><td>-<b>en</b></td><td>-<b>en</b></td></tr>
    </table>
    <div class="tip"><b>Eselsbrücke Nom:</b> Mask → <b>-er</b> (wie d<b>er</b>), Neut → <b>-es</b> (wie da<b>s</b>), Fem → <b>-e</b> (wie di<b>e</b>).</div>`,
  exercises:[
    {id:'l15e1',type:'mc',q:'"Er hat einen ___ Bauch." (dick, Akk Mask nach einem)',
     options:['dicke','dicken','dicker'],answer:1,explain:'Akk Mask nach ein/einen → -en: „dicken".'},
    {id:'l15e2',type:'mc',q:'"Das ist ein ___ Anzug." (schwarz, Nom Mask nach ein)',
     options:['schwarze','schwarzen','schwarzer'],answer:2,explain:'Nom Mask nach „ein" → starke Endung -er: „schwarzer".'},
    {id:'l15e3',type:'gap',q:'"Er trägt ein ___ (weiß) Hemd." (Nom/Akk Neut nach ein)',
     accept:['weißes'],hint:'Neut, Nom/Akk, nach „ein" → -es.',explain:'weißes'},
    {id:'l15e4',type:'listen',
     audio:'Er zieht den schwarzen Anzug an. Dazu trägt er ein weißes Hemd und elegante schwarze Schuhe.',
     q:'Wie viele Adjektivattribute hörst du?',
     options:['3','4','5'],answer:1,explain:'schwarzen · weißes · elegante · schwarze — 4 Adjektive.'},
    {id:'l15e5',type:'match',q:'Ordne Form und Muster zu:',
     pairs:[['einen alten Mann','Akk Mask nach einem'],['die alte Frau','Nom/Akk Fem nach der'],['ein altes Haus','Nom/Akk Neut nach ein'],['mit dem alten Chef','Dat nach dem']]},
  ]
},
/* ── Einheit 16 ─────────────────────────────────────── B1 ── */
{ id:'l16', tag:'Pronominaladverb', level:'b1',
  title:'Pronominaladverbien — da(r)+ und wo(r)+',
  desc:'daran, dafür, darüber — und sich freuen auf vs. über.',
  vocab:[
    {de:'daran denken',ru:'думать об этом',ex:'Ich denke oft daran.'},
    {de:'dafür interessieren',ru:'интересоваться этим',ex:'Ich interessiere mich dafür.'},
    {de:'darüber sprechen',ru:'говорить об этом',ex:'Wir sprechen darüber.'},
    {de:'damit zufrieden sein',ru:'быть довольным этим',ex:'Ich bin damit zufrieden.'},
    {de:'darauf freuen',ru:'ждать с нетерпением',ex:'Ich freue mich darauf.'},
    {de:'woran',ru:'о чём (вопрос к вещи)',ex:'Woran denkst du?'},
    {de:'wofür',ru:'для/за чего',ex:'Wofür interessierst du dich?'},
    {de:'worüber',ru:'о чём (разговор)',ex:'Worüber sprecht ihr?'},
    {de:'sich freuen auf',ru:'радоваться (будущее)',ex:'Ich freue mich auf den Urlaub.'},
    {de:'sich freuen über',ru:'радоваться (настоящее/прошлое)',ex:'Ich freue mich über das Geschenk.'},
    {de:'sich ärgern über',ru:'злиться из-за чего-то',ex:'Er ärgert sich über das Programm.'},
  ],
  gramHTML:`
    <h3>Regel: Person vs. Sache</h3>
    <p>Verb braucht Präposition (<i>denken an, sprechen über …</i>). Bei <b>Personen</b>: Präp + Pronomen. Bei <b>Sachen</b>: <b>da(r) + Präp</b>.</p>
    <table>
      <tr><th>Präp.</th><th>Person → Pronomen</th><th>Sache → Pronominaladverb</th></tr>
      <tr><td>an</td><td>An wen? → an ihn/sie</td><td>Woran? → daran</td></tr>
      <tr><td>für</td><td>Für wen? → für ihn</td><td>Wofür? → dafür</td></tr>
      <tr><td>über</td><td>Über wen? → über sie</td><td>Worüber? → darüber</td></tr>
      <tr><td>auf</td><td>Auf wen? → auf ihn</td><td>Worauf? → darauf</td></tr>
    </table>
    <div class="tip"><b>Vokalregel:</b> Präp. beginnt mit Vokal → -r- einfügen: da<b>r</b>an · da<b>r</b>auf · da<b>r</b>über. Kein -r-: dafür · damit · dazu.</div>
    <h3>sich freuen auf vs. über</h3>
    <div class="ex-box"><b>auf</b> → Zukunft: „Ich freue mich auf den Urlaub nächste Woche."</div>
    <div class="ex-box"><b>über</b> → Jetzt/Vergangenheit: „Ich freue mich über dein Geschenk — danke!"</div>`,
  exercises:[
    {id:'l16e1',type:'mc',q:'"Ich freue mich ___ den Urlaub nächsten Monat."',
     options:['über','auf','für'],answer:1,explain:'Zukünftiges Ereignis → freuen auf.'},
    {id:'l16e2',type:'mc',q:'"Vielen Dank! Ich freue mich sehr ___ das Geschenk."',
     options:['auf','für','über'],answer:2,explain:'Gegenwärtiges Geschenk → freuen über.'},
    {id:'l16e3',type:'gap',q:'"___ denkst du?" (Frage nach einer Sache, Präp. an)',
     accept:['woran'],hint:'Frage nach Sache + an → wo(r)+an.',explain:'Woran'},
    {id:'l16e4',type:'gap',q:'"Ich interessiere mich für Musik." → Kurzantwort: "Ja, ich interessiere mich ___."',
     accept:['dafür'],hint:'für + Sache → da+für.',explain:'dafür'},
    {id:'l16e5',type:'match',q:'Ordne zu:',
     pairs:[['Über wen ärgerst du dich?','Person → über ihn/sie'],['Worüber ärgerst du dich?','Sache → darüber'],['Auf wen wartest du?','Person → auf ihn'],['Worauf freust du dich?','Sache → darauf']]},
  ]
},
/* ── Einheit 17 ─────────────────────────────────────── B2 ── */
{ id:'l17', tag:'Leseverstehen', level:'b2',
  title:'Aktuelles: KI, Homeoffice, Klimawandel',
  desc:'Kurztexte zu aktuellen Themen — Leseverstehen mit Fragen.',
  vocab:[
    {de:'die Künstliche Intelligenz',ru:'искусственный интеллект',ex:'KI kann Wettervorhersagen verbessern.'},
    {de:'das Homeoffice',ru:'удалённая работа',ex:'Homeoffice ist in vielen Firmen etabliert.'},
    {de:'etabliert',ru:'устоявшийся, сложившийся',ex:'Homeoffice ist fest etabliert.'},
    {de:'ausweiten',ru:'расширять',ex:'Der Anteil der Betriebe, die es ausweiten wollen, steigt.'},
    {de:'der Klimawandel',ru:'изменение климата',ex:'Der Klimawandel betrifft auch die Alpen.'},
    {de:'das Schmelzwasser',ru:'талая вода',ex:'Weniger Schmelzwasser erreicht das Tal.'},
    {de:'senken',ru:'снижать',ex:'Isometrischer Sport kann den Blutdruck senken.'},
    {de:'spürbar',ru:'ощутимый',ex:'Erste Folgen sind spürbar.'},
    {de:'die Warteliste',ru:'лист ожидания',ex:'Die Wartelisten für Therapieplätze sind lang.'},
    {de:'psychisch',ru:'психический',ex:'Psychische Erkrankungen nehmen zu.'},
  ],
  gramHTML:`
    <h3>Lesetext A — Homeoffice und KI</h3>
    <p>Homeoffice hat sich seit der Corona-Pandemie in vielen Unternehmen fest etabliert — besonders in der Informationswirtschaft. Gleichzeitig gewinnt Künstliche Intelligenz an Bedeutung: Neue KI-Systeme zur Wettervorhersage erreichen erstmals eine vergleichbare Qualität wie herkömmliche Methoden.</p>
    <h3>Lesetext B — Klimawandel und Gesundheit</h3>
    <p>Im Alpenraum liegt deutlich weniger Schnee als üblich. Dadurch erreicht im Frühling weniger Schmelzwasser das Tal — die ersten Folgen für die Tier- und Pflanzenwelt sind spürbar. Beim Thema Gesundheit zeigen Studien: Isometrisches Training kann den Blutdruck effektiv senken. Außerdem steigen die Zahlen psychischer Erkrankungen, während Therapieplätze knapp bleiben.</p>
    <div class="tip"><b>Lesestrategie B2:</b> Lies zuerst die Fragen — so weißt du, worauf du achten musst. Schlüsselwörter markieren hilft.</div>`,
  exercises:[
    {id:'l17e1',type:'mc',q:'Wo hat sich Homeoffice besonders etabliert?',
     options:['Im Handel','In der Informationswirtschaft','Im Gesundheitswesen'],
     answer:1,explain:'„besonders in der Informationswirtschaft" — so steht es im Text.'},
    {id:'l17e2',type:'mc',q:'Was kann isometrischer Sport laut Text bewirken?',
     options:['Den Blutdruck senken','Das Gewicht reduzieren','Den Stress mindern'],
     answer:0,explain:'„Isometrisches Training kann den Blutdruck effektiv senken."'},
    {id:'l17e3',type:'mc',q:'Warum ist weniger Schmelzwasser ein Problem?',
     options:['Es verursacht Überschwemmungen','Es hat Folgen für Tiere und Pflanzen','Es erhöht den Grundwasserspiegel'],
     answer:1,explain:'„Erste Folgen für die Tier- und Pflanzenwelt sind spürbar."'},
    {id:'l17e4',type:'gap',q:'"Die Zahlen psychischer Erkrankungen ___." (zunehmen, Präsens)',
     accept:['nehmen zu','nehmen	zu'],hint:'zunehmen = trennbares Verb → nimmt/nehmen … zu.',explain:'nehmen zu'},
    {id:'l17e5',type:'match',q:'Ordne Begriff und Bedeutung zu:',
     pairs:[['etabliert','устоявшийся'],['senken','снижать'],['spürbar','ощутимый'],['ausweiten','расширять']]},
  ]
},
/* ── Einheit 18 ─────────────────────────────────────── B1 ── */
{ id:'l18', tag:'Gesundheit', level:'b2',
  title:'Wortschatz — Gesund bleiben',
  desc:'Körper, Ernährung, Schlaf und Arztbesuch.',
  vocab:[
    {de:'sich entspannen',ru:'расслабляться',ex:'Nach der Arbeit entspanne ich mich.'},
    {de:'tief schlafen',ru:'крепко спать',ex:'Wenn man tief schläft, erholt man sich besser.'},
    {de:'die Ernährung',ru:'питание',ex:'Gesunde Ernährung ist die Grundlage.'},
    {de:'ausreichend',ru:'достаточно',ex:'Man braucht ausreichend Schlaf.'},
    {de:'die Bewegung',ru:'движение, физическая активность',ex:'Regelmäßige Bewegung ist wichtig.'},
    {de:'vermeiden',ru:'избегать',ex:'Man sollte zu viel Alkohol vermeiden.'},
    {de:'erschöpft',ru:'измученный',ex:'Nach der Nachtschicht war er erschöpft.'},
    {de:'der Schlafmangel',ru:'недостаток сна',ex:'Schlafmangel schwächt das Immunsystem.'},
    {de:'untersuchen',ru:'обследовать',ex:'Der Arzt untersucht den Patienten.'},
    {de:'behandeln',ru:'лечить',ex:'Die Ärztin behandelt die Wunde.'},
    {de:'abnehmen',ru:'худеть',ex:'Mit Sport und gesunder Ernährung kann man abnehmen.'},
    {de:'vor allem',ru:'прежде всего',ex:'Vor allem regelmäßige Bewegung ist wichtig.'},
  ],
  gramHTML:`
    <h3>lassen + Infinitiv</h3>
    <p>Man lässt jemanden etwas tun — man tut es nicht selbst.</p>
    <div class="ex-box"><b>Ich habe meine Zähne behandeln lassen.</b><span class="gl">Я пролечил зубы (у врача — не сам).</span></div>
    <div class="ex-box"><b>Er lässt sein Auto reparieren.</b><span class="gl">Он отдаёт машину в ремонт.</span></div>
    <h3>Ratschläge: Modalverben im Kontext</h3>
    <table>
      <tr><th>Verb</th><th>Beispiel</th><th>Bedeutung</th></tr>
      <tr><td>sollte</td><td>Man sollte mehr schlafen.</td><td>Ratschlag</td></tr>
      <tr><td>müsste</td><td>Er müsste zum Arzt gehen.</td><td>Notwendigkeit (KII, höflich)</td></tr>
      <tr><td>kann</td><td>Sport kann den Blutdruck senken.</td><td>Möglichkeit</td></tr>
      <tr><td>darf nicht</td><td>Man darf nicht rauchen.</td><td>Verbot</td></tr>
    </table>`,
  exercises:[
    {id:'l18e1',type:'mc',q:'Was bedeutet „erschöpft"?',
     options:['Ausgeruht und fit','Sehr müde, ohne Kraft','Nervös und gestresst'],
     answer:1,explain:'erschöpft = sehr müde, keine Kraft mehr.'},
    {id:'l18e2',type:'gap',q:'"Man sollte Alkohol ___." (vermeiden)',
     accept:['vermeiden'],hint:'Infinitiv am Satzende nach Modalverb.',explain:'vermeiden'},
    {id:'l18e3',type:'listen',
     audio:'Ausreichend Schlaf, gesunde Ernährung und regelmäßige Bewegung sind die drei wichtigsten Grundlagen für ein gesundes Leben. Schlafmangel dagegen schwächt das Immunsystem.',
     q:'Welche drei Grundlagen werden genannt?',
     options:['Schlaf, Ernährung, Bewegung','Medikamente, Sport, Entspannung','Diät, Schlaf, Arztbesuche'],
     answer:0,explain:'„Schlaf, Ernährung, Bewegung" — direkt aus dem Text.'},
    {id:'l18e4',type:'order',q:'Bilde den Gesundheitsratschlag:',
     words:['Vor','allem','sollte','man','regelmäßig','Sport','treiben'],
     answer:'Vor allem sollte man regelmäßig Sport treiben'},
    {id:'l18e5',type:'match',q:'Ordne zu:',
     pairs:[['sich entspannen','расслабляться'],['der Schlafmangel','недостаток сна'],['vermeiden','избегать'],['behandeln','лечить']]},
  ]
},

/* ── Einheit 19 ─────────────────────────────────────── B1 ── */
{ id:'l19', tag:'Konzessiv', level:'b1',
  title:'trotz / trotzdem / obwohl',
  desc:'Drei Wege, einen Gegensatz auszudrücken — mit den richtigen Fällen.',
  vocab:[
    {de:'trotz + Genitiv',     ru:'несмотря на (с Род. п.)',      ex:'Trotz des schlechten Wetters fuhr sie.'},
    {de:'trotzdem',            ru:'тем не менее (гл. предлож.)',   ex:'Es regnete. Trotzdem gingen wir spazieren.'},
    {de:'obwohl',              ru:'хотя (придаточное, V-End)',     ex:'Obwohl es regnete, gingen wir aus.'},
    {de:'obgleich',            ru:'хотя (книжный стиль)',          ex:'Obgleich er müde war, arbeitete er weiter.'},
    {de:'dennoch',             ru:'тем не менее (= trotzdem)',     ex:'Er war krank. Dennoch kam er zur Arbeit.'},
    {de:'zwar … aber',         ru:'конечно … но',                 ex:'Das ist zwar teuer, aber sehr gut.'},
    {de:'ungeachtet (+Gen)',   ru:'невзирая на',                   ex:'Ungeachtet aller Warnungen reiste er ab.'},
    {de:'die Warnung',         ru:'предупреждение',                ex:'Trotz der eindringlichen Warnung fuhr er.'},
    {de:'der Protest',         ru:'протест',                       ex:'Trotz heftiger Proteste wurde es gebaut.'},
    {de:'das Zeugnis (-se)',   ru:'аттестат, свидетельство',       ex:'Obwohl er gute Zeugnisse hat, findet er keine Stelle.'},
  ],
  gramHTML:`
    <h3>Drei Strukturen im Vergleich</h3>
    <table>
      <tr><th>Mittel</th><th>Wortart</th><th>Kasus/Position</th><th>Beispiel</th></tr>
      <tr><td>trotz</td><td>Präposition</td><td>+ Genitiv</td><td>Trotz des Regens gingen wir.</td></tr>
      <tr><td>trotzdem</td><td>Adverb</td><td>Pos.1 → Inversion</td><td>Es regnete. Trotzdem gingen wir.</td></tr>
      <tr><td>obwohl</td><td>Konjunktion</td><td>Nebensatz, V-End</td><td>Obwohl es regnete, gingen wir.</td></tr>
    </table>
    <div class="ex-box"><b>Obwohl</b> Bernd sehr gute Zeugnisse hat, <b>findet</b> er keine Stelle.<span class="gl">Хотя у Бернда хорошие аттестаты, он не может найти место.</span></div>
    <div class="ex-box">Frau Winter ist krank. <b>Trotzdem</b> geht sie ins Büro.<span class="gl">Госпожа Винтер больна. Тем не менее она идёт в офис.</span></div>
    <div class="ex-box"><b>Trotz</b> heftiger Proteste der Anwohner wurde die Anlage gebaut.<span class="gl">Несмотря на протесты жителей, установку построили.</span></div>
    <div class="tip"><b>Wichtig bei trotz:</b> Genitiv! „Trotz des schlechten Wetters" — <b>des</b> (Genitiv Mask./Neut.); „trotz der Müdigkeit" — <b>der</b> (Genitiv Fem.).</div>`,
  exercises:[
    {id:'l19e1',type:'mc',q:'"Carola feiert eine Party, ___ sie Fieber hat."',
     options:['trotz','trotzdem','obwohl'],
     answer:2,explain:'"obwohl" leitet einen Nebensatz ein (Verb ans Ende): „…, obwohl sie Fieber hat."'},
    {id:'l19e2',type:'mc',q:'"Es regnete den ganzen Abend. ___ war die Gartenparty gut besucht."',
     options:['Obwohl','Trotzdem','Trotz'],
     answer:1,explain:'"Trotzdem" steht auf Position 1, danach Inversion: „Trotzdem war die Party …"'},
    {id:'l19e3',type:'gap',q:'"___ des schlechten Wetters ist sie nach Frankfurt gefahren." (Präposition)',
     accept:['trotz'],hint:'Präposition + Genitiv.',explain:'Trotz'},
    {id:'l19e4',type:'listen',
     audio:'Obwohl Uwe sehr gute Zeugnisse hat, findet er keine Stelle. Thomas besucht seinen Freund trotzdem, obwohl er wenig Zeit hat.',
     q:'Wie viele "obwohl"-Sätze hörst du?',
     options:['1','2','3'],
     answer:1,explain:'"Obwohl Uwe …" und "obwohl er wenig Zeit hat" — zwei obwohl-Sätze.'},
    {id:'l19e5',type:'order',q:'Bilde den Nebensatz:',
     words:['Obwohl','Susanne','wenig','geschlafen','hatte','fühlte','sie','sich','erholt'],
     answer:'Obwohl Susanne wenig geschlafen hatte fühlte sie sich erholt'},
  ]
},
/* ── Einheit 20 ─────────────────────────────────────── B2 ── */
{ id:'l20', tag:'Partizip I', level:'b2',
  title:'Partizip I — Bildung, Attribut und zu-Konstruktion',
  desc:'Die tanzende Frau · der zu prüfende Apparat · sein/haben + zu + Inf.',
  vocab:[
    {de:'tanzend',              ru:'танцующий',                    ex:'die tanzende Frau (Frau, die tanzt)'},
    {de:'fehlend',              ru:'отсутствующий',                ex:'die fehlenden Wörter (Wörter, die fehlen)'},
    {de:'steigend',             ru:'растущий',                     ex:'steigende Temperaturen'},
    {de:'wachsend',             ru:'растущий, нарастающий',        ex:'wachsende Probleme'},
    {de:'entsprechend',         ru:'соответствующий',              ex:'die entsprechenden Unterlagen'},
    {de:'folgend',              ru:'следующий',                    ex:'im folgenden Abschnitt'},
    {de:'humpelnd',             ru:'прихрамывающий',               ex:'die humpelnde Frau'},
    {de:'der zu prüfende Apparat', ru:'аппарат, который должен быть проверен', ex:'Das ist der zu prüfende Apparat.'},
    {de:'die zu lösende Aufgabe',  ru:'задание, которое следует решить',       ex:'Das ist eine schwierige, zu lösende Aufgabe.'},
    {de:'die zu übersetzenden Wörter', ru:'слова, которые надо перевести',     ex:'Notieren Sie die zu übersetzenden Wörter.'},
  ],
  gramHTML:`
    <h3>Bildung: Partizip I</h3>
    <p><b>Infinitiv + -d</b> → tanzen → <b>tanzend</b>. Als Attribut bekommt es Adjektivendungen.</p>
    <table>
      <tr><th>Relativsatz</th><th>Partizip I als Attribut</th></tr>
      <tr><td>die Frau, die tanzt</td><td>die <b>tanzende</b> Frau</td></tr>
      <tr><td>das Kind, das liest</td><td>das <b>lesende</b> Kind</td></tr>
      <tr><td>Temperaturen, die steigen</td><td><b>steigende</b> Temperaturen</td></tr>
    </table>
    <h3>Partizip I + zu (obligatorisch)</h3>
    <p>Partizip I mit <b>zu</b> drückt aus, dass etwas <b>getan werden muss/soll</b>:</p>
    <div class="ex-box"><b>der zu prüfende Apparat</b> = das Gerät, das geprüft werden muss<span class="gl">аппарат, который должен быть проверен</span></div>
    <div class="ex-box"><b>die zu lösende Aufgabe</b> = die Aufgabe, die gelöst werden muss<span class="gl">задание, которое следует решить</span></div>
    <h3>sein/haben + zu + Infinitiv</h3>
    <p>Drückt Pflicht oder Notwendigkeit aus:</p>
    <div class="ex-box"><b>Das Gedicht ist zu lernen.</b> = Das Gedicht muss gelernt werden.<span class="gl">Стихотворение необходимо выучить.</span></div>
    <div class="ex-box"><b>Die Studenten haben alle Prüfungen zu bestehen.</b> = müssen bestehen.<span class="gl">Студенты должны сдать все экзамены.</span></div>
    <div class="tip"><b>Trennbare Verben:</b> aufheben → der <b>aufzuhebende</b> Brief (zu steht zwischen Präfix und Verbstamm).</div>`,
  exercises:[
    {id:'l20e1',type:'mc',q:'Partizip I von „schreiben":',
     options:['geschrieben','schreibend','geschreibt'],
     answer:1,explain:'Infinitiv + -d: schreiben + d = „schreibend".'},
    {id:'l20e2',type:'gap',q:'"Siehst du die ___ (tanzen) Frau?" (Partizip I als Attribut, Nom Fem)',
     accept:['tanzende'],hint:'tanzend + -e (Nom Fem nach die).',explain:'tanzende'},
    {id:'l20e3',type:'mc',q:'"Das sind die Temperaturen, die steigen." → Partizip I als Attribut:',
     options:['die gestiegenen Temperaturen','die steigenden Temperaturen','die gestiegen Temperaturen'],
     answer:1,explain:'Partizip I (Gegenwart, aktiv) → „steigend" + -en (Plural): die steigenden Temperaturen.'},
    {id:'l20e4',type:'mc',q:'"Das Gedicht ___ gelernt werden" — mit sein+zu gleichbedeutend:',
     options:['Das Gedicht ist zu lernen.','Das Gedicht war zu lernen.','Das Gedicht wird zu lernen.'],
     answer:0,explain:'"ist zu lernen" = "muss gelernt werden" — Präsens, Obligation.'},
    {id:'l20e5',type:'match',q:'Ordne Partizip I seiner Bedeutung zu:',
     pairs:[['steigend','растущий'],['fehlend','отсутствующий'],['entsprechend','соответствующий'],['zu lösend','подлежащий решению']]},
  ]
},

/* ── Einheit 21 ─────────────────────────────────────── B1 ── */
{ id:'l21', tag:'Redewendungen', level:'b1',
  title:'10 wichtige deutsche Redewendungen',
  desc:'Idiome für den Alltag — von „Das ist mir Wurst" bis „Fix und fertig".',
  vocab:[
    {de:'Das ist mir Wurst!',           ru:'Мне всё равно!',                  ex:'"Was möchtest du essen?" — "Das ist mir Wurst!"'},
    {de:'Nur Bahnhof verstehen',        ru:'ничего не понимать',              ex:'"Ich verstehe nur Bahnhof." — Er versteht gar nichts.'},
    {de:'jemandem die Daumen drücken',  ru:'желать удачи (держать кулачки)',   ex:'"Ich drück dir die Daumen beim Vorstellungsgespräch!"'},
    {de:'Ich glaub, mein Schwein pfeift!', ru:'Не может быть! (крайнее удивление)', ex:'"Sie hat gewonnen? Ich glaub, mein Schwein pfeift!"'},
    {de:'Ich glaub, ich spinne!',       ru:'С ума сойти! (удивление)',         ex:'"Das kostet 500 Euro? Ich glaub, ich spinne!"'},
    {de:'fix und fertig sein',          ru:'быть совершенно вымотанным',       ex:'"Nach dem Marathon bin ich fix und fertig."'},
    {de:'Na?',                          ru:'Привет / Как дела? (неформально)', ex:'"Na? Alles gut bei dir?"'},
    {de:'Bock haben auf',               ru:'хотеть, иметь желание',            ex:'"Ich hab voll Bock auf ein Eis!"'},
    {de:'ein Buch mit sieben Siegeln',  ru:'книга за семью печатями (загадка)',ex:'"Deutsch ist für ihn ein Buch mit sieben Siegeln."'},
    {de:'unter dem Strich',             ru:'в конечном итоге, подводя черту',  ex:'"Unter dem Strich war es ein guter Tag."'},
  ],
  gramHTML:`
    <h3>Was sind Redewendungen?</h3>
    <p>Redewendungen (Idiome) sind feste Ausdrücke, deren Bedeutung man <b>nicht wörtlich</b> übersetzen kann. Sie machen Deutsch authentischer und natürlicher.</p>
    <h3>Übersicht</h3>
    <table>
      <tr><th>Redewendung</th><th>Bedeutung</th><th>Situation</th></tr>
      <tr><td>Das ist mir Wurst!</td><td>Das ist mir egal.</td><td>keine Meinung, gleichgültig</td></tr>
      <tr><td>Nur Bahnhof verstehen</td><td>gar nichts verstehen</td><td>zu kompliziert, fremde Sprache</td></tr>
      <tr><td>Daumen drücken</td><td>Glück wünschen</td><td>vor Prüfungen, Bewerbungen</td></tr>
      <tr><td>Ich glaub, mein Schwein pfeift!</td><td>Das kann nicht sein!</td><td>extreme Überraschung</td></tr>
      <tr><td>Ich glaub, ich spinne!</td><td>Das ist unglaublich!</td><td>Überraschung (positiv/negativ)</td></tr>
      <tr><td>fix und fertig</td><td>völlig erschöpft</td><td>nach Stress oder Arbeit</td></tr>
      <tr><td>Na?</td><td>Hallo + Wie geht's?</td><td>lockere Begrüßung unter Freunden</td></tr>
      <tr><td>Bock haben auf</td><td>Lust haben auf</td><td>Jugendsprache, informell</td></tr>
    </table>
    <div class="tip"><b>Merke:</b> „Ich drück dir die Daumen" — nicht „Ich halte dir die Daumen" oder „Ich kreuze die Finger"! Die genaue Form ist wichtig.</div>`,
  exercises:[
    {id:'l21e1',type:'match',q:'Ordne die Redewendung ihrer Bedeutung zu:',
     pairs:[['Das ist mir Wurst!','Das ist mir egal.'],['fix und fertig','völlig erschöpft'],['Daumen drücken','Glück wünschen'],['Nur Bahnhof verstehen','gar nichts verstehen']]},
    {id:'l21e2',type:'mc',q:'"Du verstehst gar nichts von dem Vortrag." — Welche Redewendung passt?',
     options:['Ich glaub, ich spinne!','Du verstehst nur Bahnhof.','Das ist mir Wurst!'],
     answer:1,explain:'"Nur Bahnhof verstehen" = gar nichts von etwas verstehen.'},
    {id:'l21e3',type:'mc',q:'"Nach 12 Stunden Arbeit bin ich ___."',
     options:['fix und fertig','Bock drauf','unter dem Strich'],
     answer:0,explain:'"fix und fertig" = völlig erschöpft nach viel Stress oder Arbeit.'},
    {id:'l21e4',type:'gap',q:'"Ich hab voll ___ auf ein Eis heute!" (Lust haben, Jugendsprache)',
     accept:['bock','Bock'],hint:'Aus dem alten Rotwelsch — bedeutet Lust/Hunger.',explain:'Bock'},
    {id:'l21e5',type:'listen',
     audio:'Ich drück dir die Daumen für die Prüfung morgen! Na, wie war dein Tag? Ich bin fix und fertig — aber unter dem Strich lief es gut.',
     q:'Wie viele Redewendungen hörst du?',
     options:['2','3','4'],
     answer:2,explain:'"Daumen drücken" · "Na" · "fix und fertig" · "unter dem Strich" — 4 Redewendungen.'},
  ]
},
/* ── Einheit 22 ─────────────────────────────────────── B1 ── */
{ id:'l22', tag:'Nebensätze', level:'b1',
  title:'Nebensätze: dass, ob, als, wenn, weil',
  desc:'Die wichtigsten Konjunktionen für Nebensätze — Regeln und Unterschiede.',
  vocab:[
    {de:'dass',    ru:'что (придаточное дополнительное)',     ex:'Ich weiß, dass er kommt.'},
    {de:'ob',      ru:'ли (косвенный вопрос да/нет)',        ex:'Ich weiß nicht, ob er kommt.'},
    {de:'als',     ru:'когда (однократно в прошлом)',         ex:'Als ich jung war, spielte ich viel.'},
    {de:'wenn',    ru:'когда/если (повторно или будущее)',    ex:'Wenn ich Zeit habe, gehe ich laufen.'},
    {de:'weil',    ru:'потому что (причина)',                 ex:'Ich bleibe zu Hause, weil ich krank bin.'},
    {de:'denn',    ru:'потому что (главное предл., не инверсия)', ex:'Ich bleibe zu Hause, denn ich bin krank.'},
    {de:'deshalb', ru:'поэтому (следствие, инверсия)',        ex:'Ich bin krank. Deshalb bleibe ich zu Hause.'},
    {de:'damit',   ru:'чтобы (цель)',                         ex:'Ich lerne, damit ich Erfolg habe.'},
    {de:'obwohl',  ru:'хотя (уступка)',                       ex:'Obwohl er müde ist, arbeitet er weiter.'},
    {de:'dass vs. ob',ru:'что vs. ли — ключевое различие',   ex:'"Ich weiß, dass er kommt." / "Ich weiß nicht, ob er kommt."'},
  ],
  gramHTML:`
    <h3>Wortstellung im Nebensatz</h3>
    <p>Im Nebensatz steht das <b>konjugierte Verb am Ende</b>:</p>
    <div class="ex-box"><b>Ich weiß, dass</b> er morgen <b>kommt</b>.<span class="gl">Я знаю, что он придёт завтра.</span></div>
    <div class="ex-box"><b>Sie fragt, ob</b> das Geschäft geöffnet <b>ist</b>.<span class="gl">Она спрашивает, открыт ли магазин.</span></div>
    <h3>dass vs. ob</h3>
    <table>
      <tr><th>dass</th><th>ob</th></tr>
      <tr><td>nach Aussagesätzen (что)</td><td>nach indirekten Ja/Nein-Fragen (ли)</td></tr>
      <tr><td>Ich hoffe, <b>dass</b> du kommst.</td><td>Ich weiß nicht, <b>ob</b> du kommst.</td></tr>
      <tr><td>wissen, sagen, glauben + dass</td><td>fragen, wissen nicht, prüfen + ob</td></tr>
    </table>
    <h3>als vs. wenn</h3>
    <table>
      <tr><th>als</th><th>wenn</th></tr>
      <tr><td>einmalig in der <b>Vergangenheit</b></td><td>wiederholt oder Gegenwart/Zukunft</td></tr>
      <tr><td><b>Als</b> ich 10 Jahre alt war, …</td><td><b>Wenn</b> ich müde bin, schlafe ich früh.</td></tr>
    </table>
    <div class="tip"><b>Trick:</b> War die Situation einmalig und liegt sie in der Vergangenheit? → <b>als</b>. Alles andere (Gewohnheit, Bedingung, Zukunft) → <b>wenn</b>.</div>`,
  exercises:[
    {id:'l22e1',type:'mc',q:'"Ich hoffe, ___ die Reise angenehm sein wird." (Aussage)',
     options:['ob','dass','weil'],
     answer:1,explain:'"dass" leitet einen Aussagesatz ein. Ich hoffe + Aussage → dass.'},
    {id:'l22e2',type:'mc',q:'"Sie prüft, ___ ihr Auto noch da ist." (indirekter Ja/Nein-Frage)',
     options:['dass','als','ob'],
     answer:2,explain:'"ob" leitet eine indirekte Ja/Nein-Frage ein: "Ist das Auto da?" → ob es da ist.'},
    {id:'l22e3',type:'mc',q:'"___ ich ein Kind war, hatte ich eine Katze." (einmalig, Vergangenheit)',
     options:['Wenn','Als','Ob'],
     answer:1,explain:'"Als" für einmalige Ereignisse in der Vergangenheit. Kindheit = einmalige Phase.'},
    {id:'l22e4',type:'gap',q:'"Als kleines Kind bekam ich Angst, ___ ich allein zu Hause war." (wiederholt)',
     accept:['wenn'],hint:'Wiederholte Situation (immer wenn…) → ?',explain:'wenn'},
    {id:'l22e5',type:'match',q:'Ordne Konjunktion und Regel zu:',
     pairs:[['dass','Aussagesatz: Ich weiß, dass …'],['ob','indir. Ja/Nein: Ich weiß nicht, ob …'],['als','einmalig in der Vergangenheit'],['wenn','wiederholt / Bedingung / Zukunft']]},
  ]
},
/* ── Einheit 23 ─────────────────────────────────────── B1 ── */
{ id:'l23', tag:'Lesetext', level:'b1',
  title:'Lesetext — Mein Hobby',
  desc:'Authentischer Text über Freizeitaktivitäten — mit Lückentext und Verständnisfragen.',
  vocab:[
    {de:'das Hobby (-s)',         ru:'хобби',                  ex:'Viele junge Leute haben heutzutage ein Hobby.'},
    {de:'heutzutage',             ru:'в наши дни',             ex:'Heutzutage ist Sport sehr modern.'},
    {de:'die Freizeit',           ru:'свободное время',         ex:'Wie verbringst du deine Freizeit?'},
    {de:'verbringen',             ru:'проводить (время)',       ex:'Ich verbringe meine Freizeit mit Musik.'},
    {de:'eine große Rolle spielen',ru:'играть большую роль',   ex:'Das Hobby spielt eine große Rolle in unserem Leben.'},
    {de:'Was mich angeht',        ru:'что касается меня',      ex:'Was mich angeht, habe ich viele Hobbys.'},
    {de:'in moderner Bearbeitung',ru:'в современной обработке',ex:'Ich höre klassische Musik in moderner Bearbeitung.'},
    {de:'die Quelle der Gesundheit',ru:'источник здоровья',   ex:'Sport ist eine Quelle der Gesundheit.'},
    {de:'aktive Erholung',        ru:'активный отдых',         ex:'Sport ist für mich eine Form der aktiven Erholung.'},
    {de:'bereichern',             ru:'обогащать',              ex:'Meine Hobbys bereichern mein Leben.'},
    {de:'bummeln',                ru:'прогуливаться, бродить', ex:'Wir bummeln durch die Stadt.'},
    {de:'die Bibliothek (-en)',   ru:'библиотека, книжный фонд',ex:'Zu Hause habe ich eine große Bibliothek.'},
  ],
  gramHTML:`
    <h3>Lesetext: Mein Hobby</h3>
    <div class="tip" style="margin-bottom:12px">📖 Lies den Text aufmerksam — danach kannst du in <b>Übung 1</b> die fehlenden Wörter einsetzen.</div>
    <div style="background:rgba(124,195,34,0.08);border-left:3px solid var(--lime);padding:14px 18px;border-radius:6px;line-height:1.85;margin-bottom:16px;font-size:15px">
      <p>Viele junge Leute haben heutzutage ein Hobby. Das macht Freude und das ist modern. Es gibt verschiedene Hobbys: wir wandern, fotografieren, lesen Bücher, treiben Sport, spielen Computer, tanzen, besuchen Kinos oder Theater oder sitzen tagsüber vor dem Fernseher. Das Hobby spielt eine große Rolle in unserem Leben. Dank Hobby <b>verbringen</b> wir unsere Freizeit interessant.</p>
      <p>Was mich angeht, habe ich viele Hobbys. Ich mag Musik. Ich höre sie überall: auf der Straße, im Park und auch zu Hause. Ich kann nicht schlecht Gitarre <b>spielen</b>. Ich höre verschiedene Musik: Rock-, Popmusik oder Hip-Hop. Manchmal höre ich auch gern klassische Musik, besonders in moderner Bearbeitung. Ich bin der Meinung, der Mensch kann ohne Musik nicht <b>leben</b>.</p>
      <p>Ich interessiere mich auch für Sport. Ich besuche ein Fitnesszentrum. Das macht mir viel Spaß. Ich bin sicher, Sport ist eine Quelle der Gesundheit. Für mich ist Sport eine Form der aktiven Erholung. Er hilft mir, immer fit zu <b>bleiben</b>.</p>
      <p>Ich habe noch ein Hobby. Ich lese gern und viel. Zu Hause habe ich eine große Bibliothek. Am liebsten lese ich Phantastik- und Abenteuerbücher. Oft <b>verbringe</b> ich meine Freizeit mit meinen Freunden. Wir unterhalten uns, bummeln durch die Stadt, besuchen Cafés, gehen ins Kino oder in die Disko. Meine Hobbys <b>bereichern</b> mein Leben und machen mir immer Freude und Spaß.</p>
    </div>
    <div style="color:var(--muted);font-size:13px">Die <b>fett</b> markierten Verben sind die Schlüsselwörter — teste dich in Übung 1!</div>`,
  exercises:[
    {id:'l23e1',type:'cloze',q:'Klick die richtigen Wörter aus dem Wortkasten in die Lücken!',
     parts:['Dank Hobby ',' wir unsere Freizeit interessant. Ich kann nicht schlecht Gitarre ',
            '. Der Mensch kann ohne Musik nicht ',
            '. Sport hilft mir, immer fit zu ','. Oft ',
            ' ich meine Freizeit mit Freunden. Meine Hobbys ',' mein Leben.'],
     answers:['verbringen','spielen','leben','bleiben','verbringe','bereichern'],
     distract:['lesen','machen','treiben','helfen']},
    {id:'l23e2',type:'mc',q:'Was bedeutet „Was mich angeht" im Text?',
     options:['was mich stört','was mich betrifft / что касается меня','worum ich mich kümmere'],
     answer:1,explain:'"Was mich angeht" = was mich betrifft = что касается меня.'},
    {id:'l23e3',type:'mc',q:'Was ist laut Text für den Autor Sport?',
     options:['Eine Quelle der Erfahrung','Eine Form der aktiven Erholung und Gesundheitsquelle','Sein Lieblingsberuf'],
     answer:1,explain:'"Sport ist eine Quelle der Gesundheit" und "eine Form der aktiven Erholung" — beides korrekt.'},
    {id:'l23e4',type:'mc',q:'Welches Instrument spielt der Autor des Textes?',
     options:['Klavier','Gitarre','Geige'],
     answer:1,explain:'"Ich kann nicht schlecht Gitarre spielen." — direkt aus dem Text.'},
    {id:'l23e5',type:'match',q:'Ordne Ausdruck und Bedeutung zu:',
     pairs:[['heutzutage','в наши дни'],['bummeln','прогуливаться'],['bereichern','обогащать'],['Was mich angeht','что касается меня']]},
  ]
},

/* ── Einheit 24 ─────────────────────────────────────── B1 ── */
{ id:'l24', tag:'Temporalsatz', level:'b1',
  title:'Temporale Nebensätze — bevor, nachdem, während, seitdem, solange',
  desc:'Zeitliche Abfolge und Gleichzeitigkeit ausdrücken.',
  vocab:[
    {de:'bevor',    ru:'прежде чем, до того как',   ex:'Bevor sie isst, wäscht sie die Hände.'},
    {de:'nachdem',  ru:'после того как',             ex:'Nachdem er gegessen hatte, las er.'},
    {de:'während',  ru:'пока, в то время как',       ex:'Während er schläft, räume ich auf.'},
    {de:'seitdem',  ru:'с тех пор как',              ex:'Seitdem sie mehr lernt, ist sie froh.'},
    {de:'solange',  ru:'пока, до тех пор пока',      ex:'Solange du lügst, helfe ich dir nicht.'},
    {de:'sobald',   ru:'как только',                 ex:'Sobald er ankommt, rufe ich an.'},
    {de:'bis',      ru:'до тех пор пока (не)',        ex:'Warte, bis ich zurückkomme.'},
    {de:'als',      ru:'когда (однократно, прошлое)', ex:'Als ich jung war, spielte ich viel.'},
    {de:'wenn',     ru:'когда/если (повторно/будущее)', ex:'Wenn es regnet, bleiben wir zu Hause.'},
    {de:'weil vs. damit', ru:'потому что vs. чтобы', ex:'Ich lerne, weil es wichtig ist. / damit ich gut werde.'},
  ],
  gramHTML:`
    <h3>Übersicht: Temporale Konjunktionen</h3>
    <table>
      <tr><th>Konjunktion</th><th>Bedeutung</th><th>Tense-Regel</th><th>Beispiel</th></tr>
      <tr><td>bevor</td><td>прежде чем</td><td>beide Sätze: gleiche Zeit</td><td>Bevor er isst, wäscht er die Hände.</td></tr>
      <tr><td>nachdem</td><td>после того как</td><td>Nebensatz: eine Stufe früher!</td><td>Nachdem er gegessen <b>hatte</b>, schlief er.</td></tr>
      <tr><td>während</td><td>пока (одновременно)</td><td>gleiche Zeit</td><td>Während sie kocht, lese ich.</td></tr>
      <tr><td>seitdem</td><td>с тех пор как</td><td>Nebensatz: Vergangenheit</td><td>Seitdem er Sport treibt, fühlt er sich wohl.</td></tr>
      <tr><td>solange</td><td>пока (условие)</td><td>gleiche Zeit</td><td>Solange du schläfst, bleibe ich hier.</td></tr>
    </table>
    <h3>Besonderheit: nachdem → eine Zeitstufe zurück</h3>
    <div class="ex-box"><b>Nachdem</b> ich aufgestanden <b>bin</b>, frühstücke ich. <span class="gl">(Hauptsatz Präsens → Nebensatz Perfekt)</span></div>
    <div class="ex-box"><b>Nachdem</b> Hans Rita angerufen <b>hatte</b>, besuchte er sie. <span class="gl">(Hauptsatz Präteritum → Nebensatz Plusquamperfekt)</span></div>
    <h3>weil vs. damit</h3>
    <div class="ex-box"><b>weil</b> = Ursache: Ich lerne, <b>weil</b> die Prüfung morgen ist.<span class="gl">потому что — говорим о причине</span></div>
    <div class="ex-box"><b>damit</b> = Absicht/Ziel: Ich lerne, <b>damit</b> ich die Prüfung bestehe.<span class="gl">чтобы — говорим о цели</span></div>`,
  exercises:[
    {id:'l24e1',type:'mc',q:'"___ Heike ihr Buch liest, macht sie einen Kaffee." (зuerst Kaffee, dann lesen)',
     options:['Nachdem','Bevor','Seitdem'],
     answer:1,explain:'"bevor" = прежде чем: сначала кофе, потом чтение. Verb ans Ende: liest.'},
    {id:'l24e2',type:'mc',q:'"___ Florian schläft, räume ich auf." (gleichzeitig)',
     options:['Bevor','Nachdem','Während'],
     answer:2,explain:'"während" = пока/в то время как: оба действия одновременны.'},
    {id:'l24e3',type:'gap',q:'"___ Hans Rita angerufen hatte, besuchte er sie." (сначала звонок, потом визит)',
     accept:['nachdem','Nachdem'],hint:'Plusquamperfekt im Nebensatz → welche Konjunktion?',explain:'Nachdem'},
    {id:'l24e4',type:'mc',q:'"Barbara arbeitet am Wochenende, ___ sie Geld braucht." (Ursache, nicht Ziel)',
     options:['damit','weil','seitdem'],
     answer:1,explain:'"weil" = причина (потому что). "damit" выражало бы цель.'},
    {id:'l24e5',type:'match',q:'Ordne Konjunktion und Bedeutung zu:',
     pairs:[['bevor','прежде чем (до того как)'],['seitdem','с тех пор как'],['solange','пока (условие)'],['nachdem','после того как']]},
  ]
},
/* ── Einheit 25 ─────────────────────────────────────── A2 ── */
{ id:'l25', tag:'Reflexive Verben', level:'b1',
  title:'Reflexive Verben — sich fühlen, sich beeilen und mehr',
  desc:'Die wichtigsten reflexiven Verben mit Übungen.',
  vocab:[
    {de:'sich fühlen',            ru:'чувствовать себя',         ex:'Ich fühle mich heute gut.'},
    {de:'sich erholen',           ru:'отдыхать, восстанавливаться', ex:'Im Urlaub erhole ich mich vom Stress.'},
    {de:'sich interessieren für', ru:'интересоваться чем-то',    ex:'Ich interessiere mich für Musik.'},
    {de:'sich ärgern über',       ru:'злиться из-за чего-то',    ex:'Er ärgert sich über den Lärm.'},
    {de:'sich beeilen',           ru:'торопиться, спешить',       ex:'Wir müssen uns beeilen!'},
    {de:'sich vorstellen',        ru:'представляться, знакомиться', ex:'Darf ich mich vorstellen? Ich heiße Anton.'},
    {de:'sich erinnern an',       ru:'вспоминать о чём-то',      ex:'Ich erinnere mich gern an meine Kindheit.'},
    {de:'sich verabschieden von', ru:'прощаться с кем-то',       ex:'Er verabschiedet sich von seiner Familie.'},
    {de:'sich verspäten',         ru:'опаздывать',                ex:'Der Bus verspätet sich um 10 Minuten.'},
    {de:'sich beschweren über',   ru:'жаловаться на что-то',     ex:'Er beschwert sich über den Lärm.'},
    {de:'sich beteiligen an',     ru:'участвовать в чём-то',     ex:'Alle beteiligen sich an der Diskussion.'},
    {de:'sich treffen mit',       ru:'встречаться с кем-то',     ex:'Wir treffen uns heute mit Freunden.'},
  ],
  gramHTML:`
    <h3>Reflexivpronomen — Übersicht</h3>
    <table>
      <tr><th>Person</th><th>Akkusativ (меня/себя)</th><th>Dativ (мне/себе)</th></tr>
      <tr><td>ich</td><td>mich</td><td>mir</td></tr>
      <tr><td>du</td><td>dich</td><td>dir</td></tr>
      <tr><td>er/sie/es</td><td>sich</td><td>sich</td></tr>
      <tr><td>wir</td><td>uns</td><td>uns</td></tr>
      <tr><td>ihr</td><td>euch</td><td>euch</td></tr>
      <tr><td>sie/Sie</td><td>sich</td><td>sich</td></tr>
    </table>
    <h3>Häufige Verben im Kontext</h3>
    <div class="ex-box"><b>Ich fühle mich</b> heute nicht gut — ich habe Kopfschmerzen.<span class="gl">Я сегодня плохо себя чувствую.</span></div>
    <div class="ex-box"><b>Beeilt euch!</b> Der Zug fährt in 5 Minuten ab.<span class="gl">Торопитесь! Поезд отправляется через 5 минут.</span></div>
    <div class="ex-box"><b>Er erinnert sich</b> gern an seine Zeit in Berlin.<span class="gl">Он с удовольствием вспоминает своё время в Берлине.</span></div>
    <div class="tip"><b>Merke:</b> Die meisten reflexiven Verben brauchen <b>Akkusativ</b> (mich/dich/sich…). Nur wenige brauchen <b>Dativ</b>: sich etw. vorstellen (представлять что-то), sich etw. wünschen (желать чего-то).</div>`,
  exercises:[
    {id:'l25e1',type:'match',q:'Ordne Verb und Bedeutung zu:',
     pairs:[['sich beeilen','торопиться'],['sich verspäten','опаздывать'],['sich erholen','отдыхать'],['sich vorstellen','представляться']]},
    {id:'l25e2',type:'mc',q:'"Er ___ sich über den Lärm." (sich ärgern, er)',
     options:['ärgern','ärgert','ärgerst'],
     answer:1,explain:'er/sie/es → ärgert. Reflexivpronomen: „sich ärgert sich über" — er ärgert sich.'},
    {id:'l25e3',type:'gap',q:'"Wir müssen ___ beeilen — der Zug fährt gleich!" (wir)',
     accept:['uns'],hint:'Reflexivpronomen für "wir" im Akkusativ.',explain:'uns'},
    {id:'l25e4',type:'listen',
     audio:'Ich fühle mich heute nicht gut. Ich erinnere mich gern an unseren Urlaub in Wien. Haben Sie sich schon von Ihrer Erkältung erholt?',
     q:'Welche drei reflexiven Verben hörst du?',
     options:['fühlen, vorstellen, beeilen','fühlen, erinnern, erholen','ärgern, fühlen, verspäten'],
     answer:1,explain:'"sich fühlen" · "sich erinnern" · "sich erholen" — alle drei im Text.'},
    {id:'l25e5',type:'order',q:'Bilde den Satz:',
     words:['Er','verabschiedet','sich','von','seiner','Familie'],
     answer:'Er verabschiedet sich von seiner Familie'},
  ]
},
/* ── Einheit 26 ─────────────────────────────────────── B1 ── */
{ id:'l26', tag:'Weihnachten', level:'b1',
  title:'Lesetext — Weihnachten in Deutschland',
  desc:'Traditionen, Adventskranz und der Heilige Abend — Lesen und Verstehen.',
  vocab:[
    {de:'Weihnachten',           ru:'Рождество',                  ex:'Weihnachten ist das wichtigste Fest in Deutschland.'},
    {de:'der Adventskranz',      ru:'адвентский венок',           ex:'Auf dem Adventskranz brennen vier Kerzen.'},
    {de:'die Adventszeit',       ru:'адвент, предрождественский период', ex:'Die Adventszeit beginnt vier Wochen vor Weihnachten.'},
    {de:'der Heilige Abend',     ru:'Сочельник (24 декабря)',     ex:'Am Heiligen Abend öffnet man die Geschenke.'},
    {de:'anzünden',              ru:'зажигать',                   ex:'Man zündet jede Woche eine Kerze an.'},
    {de:'schmücken',             ru:'украшать',                   ex:'Die Familie schmückt den Weihnachtsbaum.'},
    {de:'schenken',              ru:'дарить',                     ex:'Man schenkt sich gegenseitig Geschenke.'},
    {de:'das Weihnachtslied',    ru:'рождественская песня',       ex:'Im Dezember singt man Weihnachtslieder.'},
    {de:'vorbereiten auf',       ru:'готовиться к чему-то',       ex:'Die Deutschen bereiten sich auf Weihnachten vor.'},
    {de:'die Süßigkeit (-en)',   ru:'сладости',                   ex:'Die Kinder bekommen unbedingt Süßigkeiten.'},
    {de:'das Gebäck',            ru:'выпечка, печенье',           ex:'Weihnachtsgebäck ist sehr beliebt.'},
    {de:'einzigartig',           ru:'неповторимый, уникальный',   ex:'Die Weihnachtsmärkte sind einzigartig.'},
  ],
  gramHTML:`
    <h3>Lesetext: Weihnachten in Deutschland</h3>
    <div style="background:rgba(124,195,34,0.08);border-left:3px solid var(--lime);padding:14px 18px;border-radius:6px;line-height:1.85;margin-bottom:16px;font-size:15px">
      <p>Weihnachten ist ein Feiertag — man feiert es am 25. Dezember. Das ist das Fest der Geburt Christi und die Feier des Friedens und der Freude. Weihnachten ist für die Deutschen das <b>wichtigste</b> Fest für die ganze Familie.</p>
      <p>Die Deutschen beginnen, sich im November auf Weihnachten <b>vorzubereiten</b>. Vier Sonntage vor dem Fest beginnt die <b>Adventszeit</b>. Überall hängt man <b>Adventskränze</b> mit vier Kerzen. Jede Woche <b>zündet</b> man eine Kerze <b>an</b>. Am letzten Sonntag brennen alle vier Kerzen.</p>
      <p>Vor Weihnachten <b>schmücken</b> die Menschen ihre Wohnungen und Weihnachtsbäume mit Kugeln und Kerzen. Der Vorabend des Festes, der 24. Dezember, heißt <b>der Heilige Abend</b>. In dieser Zeit zünden die Deutschen Kerzen an und singen <b>Weihnachtslieder</b>. Mit Beginn der Weihnacht gratulieren die Menschen einander und <b>schenken</b> sich Geschenke. Die Kinder bekommen unbedingt <b>Süßigkeiten</b>.</p>
    </div>
    <div style="color:var(--muted);font-size:13px">💡 Lies den Text — dann löse die Übungen!</div>`,
  exercises:[
    {id:'l26e1',type:'cloze',q:'Klick die richtigen Wörter in die Lücken!',
     parts:['Die Deutschen bereiten sich im November auf Weihnachten ',' . Vier Sonntage vor dem Fest beginnt die ',' . Jede Woche ',' man eine Kerze an. Der 24. Dezember heißt der ',' .'],
     answers:['vor','Adventszeit','zündet','Heilige Abend'],
     distract:['nach','Weihnachtszeit','brennt','Stille Nacht']},
    {id:'l26e2',type:'mc',q:'Wann beginnt die Adventszeit?',
     options:['Am 1. Dezember','Vier Sonntage vor Weihnachten','Am 24. November'],
     answer:1,explain:'"Vier Sonntage vor dem Fest beginnt die Adventszeit." — aus dem Text.'},
    {id:'l26e3',type:'mc',q:'Was ist der "Heilige Abend"?',
     options:['Der 25. Dezember — der erste Weihnachtstag','Der 24. Dezember — der Vorabend des Festes','Der letzte Adventssonntag'],
     answer:1,explain:'"Der Vorabend des Festes, der 24. Dezember, heißt der Heilige Abend."'},
    {id:'l26e4',type:'listen',
     audio:'Weihnachten ist für die Deutschen das wichtigste Fest für die ganze Familie. Jede Woche zündet man eine Kerze am Adventskranz an. Am Heiligen Abend singen die Deutschen Weihnachtslieder und schenken sich Geschenke.',
     q:'Wie viele Kerzen brennen am letzten Adventssonntag?',
     options:['1','2','4'],
     answer:2,explain:'Vier Kerzen auf dem Adventskranz — jede Woche eine mehr, also vier am letzten Sonntag.'},
    {id:'l26e5',type:'match',q:'Ordne die Wörter zu:',
     pairs:[['der Adventskranz','адвентский венок'],['schmücken','украшать'],['schenken','дарить'],['anzünden','зажигать']]},
  ]
},

/* ── Einheit 27 ─────────────────────────────────────── B1 ── */
{ id:'l27', tag:'Komparativ', level:'b1',
  title:'Komparativ und Superlativ — Vergleiche',
  desc:'Steigerungsformen, unregelmäßige Formen und Vergleiche mit als / so…wie.',
  vocab:[
    {de:'jung → jünger → am jüngsten',   ru:'молодой → моложе → самый молодой', ex:'Er ist jünger als ich.'},
    {de:'alt → älter → am ältesten',      ru:'старый → старше → самый старый',   ex:'Sie ist viel älter als er.'},
    {de:'groß → größer → am größten',     ru:'большой → больше → самый большой', ex:'Berlin ist größer als Wien.'},
    {de:'gut → besser → am besten',       ru:'хороший → лучше → лучший',         ex:'Ihr Deutsch wird immer besser!'},
    {de:'viel → mehr → am meisten',       ru:'много → больше → больше всего',    ex:'Er hat am meisten Erfahrung.'},
    {de:'gern → lieber → am liebsten',    ru:'охотно → охотнее → охотнее всего', ex:'Ich reise am liebsten im Sommer.'},
    {de:'hoch → höher → am höchsten',     ru:'высокий → выше → самый высокий',   ex:'Der Himalaya ist am höchsten.'},
    {de:'nah → näher → am nächsten',      ru:'близкий → ближе → ближайший',      ex:'Das nächste Café ist um die Ecke.'},
    {de:'teuer → teurer → am teuersten',  ru:'дорогой → дороже → самый дорогой', ex:'Dieses Hotel ist am teuersten.'},
    {de:'als',                            ru:'чем (неравенство)',                 ex:'Er ist größer als sie.'},
    {de:'so … wie / genauso … wie',       ru:'такой же … как (равенство)',        ex:'Er ist genauso groß wie sie.'},
    {de:'viel + Komparativ',              ru:'намного + сравнительная степень',   ex:'Diese Tasche ist viel teurer als die.'},
  ],
  gramHTML:`
    <h3>Bildung der Steigerungsformen</h3>
    <table>
      <tr><th>Grundform</th><th>Komparativ</th><th>Superlativ</th></tr>
      <tr><td>klein</td><td>kleiner</td><td>am kleinsten / der/die/das kleinste</td></tr>
      <tr><td>schnell</td><td>schneller</td><td>am schnellsten</td></tr>
      <tr><td>alt</td><td>ält<b>er</b> (Umlaut!)</td><td>am ält<b>est</b>en</td></tr>
      <tr><td>jung</td><td>jünger</td><td>am jüngsten</td></tr>
      <tr><td>groß</td><td>größer</td><td>am größten</td></tr>
      <tr><td>hoch</td><td>höher</td><td>am höchsten</td></tr>
    </table>
    <h3>Unregelmäßige Formen — auswendig lernen!</h3>
    <table>
      <tr><th>Grundform</th><th>Komparativ</th><th>Superlativ</th></tr>
      <tr><td><b>gut</b></td><td><b>besser</b></td><td><b>am besten</b></td></tr>
      <tr><td><b>viel</b></td><td><b>mehr</b></td><td><b>am meisten</b></td></tr>
      <tr><td><b>gern</b></td><td><b>lieber</b></td><td><b>am liebsten</b></td></tr>
      <tr><td>nah</td><td>näher</td><td>am nächsten</td></tr>
    </table>
    <h3>Vergleiche</h3>
    <div class="ex-box"><b>Er ist größer als sie.</b> — Ungleichheit: <b>als</b><span class="gl">Он выше, чем она.</span></div>
    <div class="ex-box"><b>Er ist genauso groß wie sie.</b> — Gleichheit: <b>so/genauso … wie</b><span class="gl">Он такого же роста, как и она.</span></div>
    <div class="ex-box"><b>Diese Tasche ist viel teurer als die.</b> — <b>viel</b> verstärkt den Komparativ<span class="gl">Эта сумка намного дороже, чем та.</span></div>
    <div class="tip"><b>Umlaute im Komparativ:</b> alt→älter, jung→jünger, kalt→kälter, warm→wärmer, lang→länger, stark→stärker. Merke: nur einsilbige Adjektive mit a/o/u!</div>`,
  exercises:[
    {id:'l27e1',type:'mc',q:'"Er ist ___ als ich." (alt — Komparativ)',
     options:['alter','älter','am ältesten'],
     answer:1,explain:'Komparativ von "alt" → Umlaut: ä + -er = "älter".'},
    {id:'l27e2',type:'mc',q:'"Das ist mein ___ Freund." (gut — Superlativ als Attribut)',
     options:['besserer','am besten','bester'],
     answer:2,explain:'Superlativ als Attribut (vor dem Nomen): gut → best- + Adjektivendung → "bester Freund".'},
    {id:'l27e3',type:'gap',q:'"Sie ist genauso alt ___ er." (Gleichheit)',
     accept:['wie'],hint:'Gleichheit: so/genauso + Adj + ___',explain:'wie'},
    {id:'l27e4',type:'listen',
     audio:'Berlin ist größer als Wien, aber Tokyo ist am größten. Ich esse lieber Fisch als Fleisch, aber am liebsten esse ich Gemüse.',
     q:'Welche Steigerungsformen hörst du? (Komparativ / Superlativ)',
     options:['2 Komparativ, 2 Superlativ','1 Komparativ, 2 Superlativ','2 Komparativ, 1 Superlativ'],
     answer:0,explain:'"größer" und "lieber" = Komparativ; "am größten" und "am liebsten" = Superlativ — je 2.'},
    {id:'l27e5',type:'match',q:'Ordne die unregelmäßigen Formen zu:',
     pairs:[['gut → besser','лучше'],['viel → mehr','больше'],['gern → lieber','охотнее'],['nah → näher','ближе']]},
  ]
},
/* ── Einheit 28 ─────────────────────────────────────── B1 ── */
{ id:'l28', tag:'Infinitivsätze', level:'b1',
  title:'um…zu / damit / ohne…zu / statt…zu',
  desc:'Ziel, Mittel und Gegensatz mit Infinitivkonstruktionen ausdrücken.',
  vocab:[
    {de:'um … zu + Infinitiv',   ru:'чтобы (один субъект)',                ex:'Ich lerne, um die Prüfung zu bestehen.'},
    {de:'damit',                  ru:'чтобы (разные субъекты)',             ex:'Ich lerne, damit meine Eltern stolz sind.'},
    {de:'ohne … zu + Infinitiv', ru:'не делая, без того чтобы',            ex:'Er fährt, ohne Karten zu kaufen.'},
    {de:'statt … zu + Infinitiv',ru:'вместо того чтобы',                   ex:'Statt uns anzurufen, ging er ins Kino.'},
    {de:'anstatt … zu',          ru:'= statt … zu',                        ex:'Anstatt zu lernen, spielt er Computer.'},
    {de:'damit + Subjekt',        ru:'чтобы (другой субъект)',              ex:'Ich erkläre es, damit du es verstehst.'},
    {de:'um zu — gleicher Akteur',ru:'один и тот же субъект → um…zu',      ex:'Sie fährt nach München, um Freunde zu besuchen.'},
    {de:'trennbare Verben + zu',  ru:'zu стоит между префиксом и глаголом', ex:'Er versucht, früh <b>auf</b>zustehen.'},
  ],
  gramHTML:`
    <h3>um…zu vs. damit — der wichtigste Unterschied</h3>
    <table>
      <tr><th>Konstruktion</th><th>Subjekte</th><th>Beispiel</th></tr>
      <tr><td>um … zu + Inf.</td><td>gleich!</td><td>Ich lerne, <b>um</b> die Prüfung <b>zu</b> bestehen.</td></tr>
      <tr><td>damit + Nebensatz</td><td>verschieden oder gleich</td><td>Ich lerne, <b>damit</b> ich bestehe. / Ich erkläre, <b>damit</b> du verstehst.</td></tr>
    </table>
    <div class="ex-box"><b>Er kam zu mir, um mir zu helfen.</b> (Er kam — er hilft → gleich → um…zu)<span class="gl">Он пришёл ко мне, чтобы помочь.</span></div>
    <div class="ex-box"><b>Ich erkläre es, damit du es verstehst.</b> (ich erkläre — du verstehst → verschieden → damit)<span class="gl">Я объясняю, чтобы ты понял.</span></div>
    <h3>ohne … zu und statt … zu</h3>
    <div class="ex-box"><b>Er fährt mit dem Bus, ohne Fahrkarten zu kaufen.</b><span class="gl">Он едет на автобусе, не покупая билеты.</span></div>
    <div class="ex-box"><b>Statt uns anzurufen, ging er ins Kino.</b> (trennbar: an|rufen → an<b>zu</b>rufen)<span class="gl">Вместо того чтобы позвонить нам, он пошёл в кино.</span></div>
    <div class="tip"><b>Trennbare Verben:</b> zu steht zwischen Präfix und Verbstamm: aufzustehen, anzurufen, einzukaufen.</div>`,
  exercises:[
    {id:'l28e1',type:'mc',q:'"Ich kam zu dir, ___ dir bei der Übersetzung zu helfen." (gleicher Akteur)',
     options:['damit','um','statt'],
     answer:1,explain:'Gleicher Akteur (ich) → "um … zu": Ich kam, um zu helfen.'},
    {id:'l28e2',type:'mc',q:'"Ich erkläre es langsam, ___ du es verstehst." (verschiedene Akteure)',
     options:['um zu','ohne zu','damit'],
     answer:2,explain:'"damit" + Nebensatz wenn der Akteur wechselt (ich → du).'},
    {id:'l28e3',type:'gap',q:'"Er fährt mit dem Bus, ___ Fahrkarten zu kaufen." (кein Kauf!)',
     accept:['ohne'],hint:'Er kauft keine Karten — er fährt trotzdem. Ohne ___?',explain:'ohne'},
    {id:'l28e4',type:'mc',q:'"___ uns anzurufen, ging er ins Kino." (вместо звонка)',
     options:['Um','Ohne','Statt'],
     answer:2,explain:'"statt … zu" = вместо того чтобы. Trennbares Verb: an|rufen → an<b>zu</b>rufen.'},
    {id:'l28e5',type:'match',q:'Ordne Konstruktion und Bedeutung zu:',
     pairs:[['um … zu','чтобы (один субъект)'],['damit','чтобы (любой субъект, Nebensatz)'],['ohne … zu','не делая / без того чтобы'],['statt … zu','вместо того чтобы']]},
  ]
},
/* ── Einheit 29 ─────────────────────────────────────── B2 ── */
{ id:'l29', tag:'Bedingungssätze', level:'b2',
  title:'Konjunktiv II — irreale Bedingungssätze',
  desc:'Wenn ich mehr Zeit hätte, würde ich reisen — Wünsche und Hypothesen.',
  vocab:[
    {de:'Wenn ich Zeit hätte, würde ich reisen.',    ru:'Если бы у меня было время, я бы путешествовал.',   ex:'hätte = KII von haben'},
    {de:'Wenn sie käme, wäre ich froh.',              ru:'Если бы она пришла, я был бы рад.',               ex:'käme = KII von kommen'},
    {de:'Wäre ich doch in den USA!',                 ru:'Был бы я сейчас в США!',                          ex:'Wunschsatz ohne wenn'},
    {de:'Hätte ich nur mehr Freizeit!',              ru:'Имел бы я больше свободного времени!',            ex:'Hätte + nur = Wunsch'},
    {de:'An deiner Stelle würde ich…',              ru:'На твоём месте я бы…',                            ex:'An deiner Stelle würde ich mehr schlafen.'},
    {de:'Du hättest … sollen',                       ru:'Тебе следовало бы…',                              ex:'Du hättest mehr Sport treiben sollen.'},
    {de:'Wenn er gelernt hätte, hätte er bestanden.',ru:'Если бы он учил, он бы сдал.',                    ex:'Vergangenheit: KII + PP'},
    {de:'Als ob',                                    ru:'как будто бы',                                     ex:'Er tut so, als ob er alles wüsste.'},
    {de:'würde + Infinitiv',                         ru:'würde-Ersatzform (для большинства глаголов)',      ex:'ich würde kommen (вместо käme)'},
    {de:'irrealer Konditionalsatz',                  ru:'нереальное условное предложение',                  ex:'Wenn…, dann… (в обоих — Konjunktiv II)'},
  ],
  gramHTML:`
    <h3>Irreale Bedingungssätze — Aufbau</h3>
    <table>
      <tr><th>Nebensatz (Bedingung)</th><th>Hauptsatz (Folge)</th></tr>
      <tr><td><b>Wenn</b> ich Zeit <b>hätte</b>,</td><td>würde ich reisen.</td></tr>
      <tr><td><b>Wenn</b> sie mehr lernten,</td><td><b>hätten</b> sie bessere Noten.</td></tr>
      <tr><td><b>Wenn</b> er Kopfschmerzen <b>hätte</b>,</td><td>sollte er Tabletten nehmen.</td></tr>
    </table>
    <h3>Gegenwart und Vergangenheit</h3>
    <div class="ex-box"><b>Gegenwart:</b> Wenn sie den Weg <b>wüsste</b>, <b>könnte</b> sie schnell in die Stadt kommen.<span class="gl">Если бы она знала дорогу, она смогла бы добраться.</span></div>
    <div class="ex-box"><b>Vergangenheit:</b> Wenn er mehr <b>gelernt hätte</b>, <b>hätte</b> er die Prüfung <b>bestanden</b>.<span class="gl">Если бы он больше учился, он бы сдал экзамен.</span></div>
    <h3>Wunschsätze</h3>
    <div class="ex-box"><b>Wäre ich doch in den USA!</b> = Ich wünsche mir, in den USA zu sein.<span class="gl">Был бы я сейчас в США!</span></div>
    <div class="ex-box"><b>Hätte ich nur mehr Freizeit!</b><span class="gl">Имел бы я больше свободного времени!</span></div>
    <div class="tip"><b>würde-Ersatzform:</b> Statt "käme" sagt man meist "würde kommen". Ausnahme: hätte, wäre, könnte, müsste, dürfte, sollte — diese direkt ohne würde!</div>`,
  exercises:[
    {id:'l29e1',type:'mc',q:'"Wenn sie mehr Sport ___, wäre sie fitter." (treiben, KII Gegenwart)',
     options:['triebe','würde treiben','treibt'],
     answer:1,explain:'Im Alltag: würde + Inf. als Ersatz für den KII: "würde treiben". Direkte Form "triebe" ist veraltet.'},
    {id:'l29e2',type:'mc',q:'"___ ich einen sicheren Freund!" (Wunschsatz)',
     options:['Wäre','Hätte','Würde'],
     answer:1,explain:'KII von "haben" = hätte. Wunsch nach einer Person → "Hätte ich einen Freund!"'},
    {id:'l29e3',type:'gap',q:'"An seiner Stelle ___ ich mehr zu Fuß gehen." (ich, würde)',
     accept:['würde'],hint:'würde-Ersatzform: An seiner Stelle ___ ich...',explain:'würde'},
    {id:'l29e4',type:'listen',
     audio:'Wenn ich mehr Zeit hätte, würde ich jeden Tag Sport treiben. Hätte ich nur mehr Freizeit! An deiner Stelle würde ich weniger arbeiten und mehr schlafen.',
     q:'Wie viele irreale Konstruktionen (KII oder würde) hörst du?',
     options:['2','3','4'],
     answer:2,explain:'"hätte" · "würde treiben" · "Hätte" · "würde … arbeiten" · "würde … schlafen" — mindestens 4 KII-Formen.'},
    {id:'l29e5',type:'order',q:'Bilde den irrealen Konditionalsatz:',
     words:['Wenn','sie','den','Weg','wüsste','könnte','sie','schnell','fahren'],
     answer:'Wenn sie den Weg wüsste könnte sie schnell fahren'},
  ]
},

/* ── Einheit 30 ─────────────────────────────────────── B1 ── */
{ id:'l30', tag:'Relativsätze', level:'b1',
  title:'Relativsätze — der/die/das als Relativpronomen',
  desc:'Der Mann, der dort steht… — Relativpronomen in allen Fällen.',
  vocab:[
    {de:'Nom. M: der',  ru:'который (м.р., подлежащее)',    ex:'Der Mann, <b>der</b> dort steht, ist mein Freund.'},
    {de:'Akk. M: den',  ru:'которого (м.р., доп.)',          ex:'Der Film, <b>den</b> ich gesehen habe, war gut.'},
    {de:'Dat. M: dem',  ru:'которому (м.р., кос. доп.)',     ex:'Das Kind, <b>dem</b> ich geholfen habe, ist froh.'},
    {de:'Gen. M: dessen',ru:'чей (м.р.)',                    ex:'Der Künstler, <b>dessen</b> Bild bekannt ist, lebt hier.'},
    {de:'Nom./Akk. F: die', ru:'которая (ж.р.)',             ex:'Die Frau, <b>die</b> dort sitzt, kennt mich.'},
    {de:'Dat. F: der',  ru:'которой (ж.р., кос. доп.)',      ex:'Die Freundin, <b>der</b> ich schreibe, wohnt in Wien.'},
    {de:'Gen. F: deren',ru:'чья (ж.р.)',                     ex:'Die Schriftstellerin, <b>deren</b> Buch ich lese, ist bekannt.'},
    {de:'Dat. Pl: denen',ru:'которым (мн.ч., Dativ)',        ex:'Die Schüler, <b>denen</b> ich geholfen habe, sind froh.'},
    {de:'mit Präposition',ru:'предлог + Relativpronomen',    ex:'Die Uni, <b>in der</b> er studiert, liegt in Berlin.'},
    {de:'Gen. Pl: deren',ru:'чьи (мн.ч.)',                   ex:'Das sind die Schüler, <b>deren</b> Sachen schon gepackt sind.'},
  ],
  gramHTML:`
    <h3>Relativpronomen — Tabelle</h3>
    <table>
      <tr><th>Fall</th><th>Mask. (der)</th><th>Fem. (die)</th><th>Neut. (das)</th><th>Plural (die)</th></tr>
      <tr><td>Nominativ</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
      <tr><td>Akkusativ</td><td><b>den</b></td><td>die</td><td>das</td><td>die</td></tr>
      <tr><td>Dativ</td><td>dem</td><td>der</td><td>dem</td><td><b>denen</b></td></tr>
      <tr><td>Genitiv</td><td><b>dessen</b></td><td><b>deren</b></td><td><b>dessen</b></td><td><b>deren</b></td></tr>
    </table>
    <p>Wie der bestimmte Artikel — außer: Dat. Pl. <b>denen</b> und Genitiv <b>dessen/deren</b>.</p>
    <h3>Wichtige Regeln</h3>
    <div class="ex-box"><b>Verb ans Ende</b> des Relativsatzes: Der Mann, der dort <b>steht</b>, ist mein Freund.</div>
    <div class="ex-box"><b>Geschlecht = Bezugswort</b>, Fall = Funktion im Relativsatz:<br>
      Der Film <i>(das Bezugswort, Mask.)</i>, <b>den</b> <i>(Akk. = Objekt)</i> ich gesehen habe, war gut.</div>
    <div class="ex-box"><b>Mit Präposition:</b> Die Uni, <b>in der</b> er studiert, liegt in Berlin.<span class="gl">Präposition steht vor dem Relativpronomen.</span></div>
    <div class="tip"><b>Genitiv-Relativsätze:</b> Der Künstler, <b>dessen</b> Bild bekannt ist… = Der Künstler — sein Bild ist bekannt. <b>dessen/deren</b> ersetzt ein Possessivpronomen.</div>`,
  exercises:[
    {id:'l30e1',type:'mc',q:'"Das ist der Mann, ___ ich kenne." (kennen jemanden → Akk.)',
     options:['der','den','dem'],
     answer:1,explain:'"kennen" + Akkusativ. Bezugswort: der Mann (Mask.) → Akk. Mask. = <b>den</b>.'},
    {id:'l30e2',type:'mc',q:'"Die Frau, ___ ich geholfen habe, ist glücklich." (helfen + Dativ)',
     options:['die','der','deren'],
     answer:1,explain:'"helfen" + Dativ. Bezugswort: die Frau (Fem.) → Dat. Fem. = <b>der</b>.'},
    {id:'l30e3',type:'gap',q:'"Die Uni, in ___ er studiert, liegt in Berlin." (Dativ Fem.)',
     accept:['der'],hint:'in + Dativ. die Uni → Fem. → in ___?',explain:'der'},
    {id:'l30e4',type:'mc',q:'"Die Schüler, ___ Sachen schon gepackt sind, fahren morgen." (Genitiv Pl.)',
     options:['denen','deren','die'],
     answer:1,explain:'Genitiv Plural = <b>deren</b>: "deren Sachen" = ihre Sachen (Plural).'},
    {id:'l30e5',type:'match',q:'Ordne Relativpronomen und Fall/Genus zu:',
     pairs:[['den','Akkusativ Maskulinum'],['der','Dativ Femininum'],['dessen','Genitiv Mask./Neut.'],['denen','Dativ Plural']]},
  ]
},
/* ── Einheit 31 ─────────────────────────────────────── B2 ── */
{ id:'l31', tag:'Berufswahl', level:'b2',
  title:'Lesetext — Berufswahl und Bewerbung',
  desc:'Einen Job finden: Stellenanzeigen, Bewerbung und Vorstellungsgespräch.',
  vocab:[
    {de:'die Berufswahl',          ru:'выбор профессии',             ex:'Die Berufswahl ist eine wichtige Entscheidung.'},
    {de:'die Fähigkeit (-en)',     ru:'способность, умение',         ex:'Man muss seine Fähigkeiten kennen.'},
    {de:'die Stelle (-n)',         ru:'рабочее место, должность',    ex:'Er sucht eine sichere Stelle.'},
    {de:'das Gehalt',              ru:'зарплата',                    ex:'93% der Menschen wollen ein gutes Gehalt.'},
    {de:'die Bewerbung (-en)',     ru:'заявление на работу, резюме', ex:'Ich schicke meine Bewerbung an die Firma.'},
    {de:'die Stellenanzeige (-n)', ru:'объявление о вакансии',       ex:'Er hat in der Zeitung eine Anzeige gefunden.'},
    {de:'das Vorstellungsgespräch',ru:'собеседование',               ex:'Ich gehe morgen zum Vorstellungsgespräch.'},
    {de:'der Lebenslauf',          ru:'резюме (биография)',           ex:'Schick bitte deinen Lebenslauf mit!'},
    {de:'gefragt sein',            ru:'быть востребованным',         ex:'IT-Berufe sind sehr gefragt.'},
    {de:'sinnvoll',                ru:'осмысленный, полезный',        ex:'73% wollen eine sinnvolle Arbeit.'},
    {de:'selbstständig',           ru:'самостоятельно',              ex:'58% möchten ihre Arbeit selbstständig planen.'},
    {de:'achten auf',              ru:'обращать внимание на',        ex:'Man soll auf seine Interessen achten.'},
  ],
  gramHTML:`
    <h3>Lesetext: Berufswahl</h3>
    <div style="background:rgba(124,195,34,0.08);border-left:3px solid var(--lime);padding:14px 18px;border-radius:6px;line-height:1.85;margin-bottom:16px;font-size:15px">
      <p>Jeder Mensch muss einmal einen Beruf wählen. Bei der <b>Berufswahl</b> soll man vor allem auf seine Interessen und <b>Fähigkeiten</b> achten. Man muss sich fragen: Was macht mir Spaß? Was kann ich gut?</p>
      <p>Man muss auch wissen, ob der Beruf <b>gefragt</b> ist. Bei einer Umfrage hat man die Menschen gefragt, was für sie bei der Arbeit wichtig ist: 93% wollen ein gutes <b>Gehalt</b>. 88% finden eine sichere <b>Stelle</b> wichtig. 73% wollen, dass ihre Arbeit <b>sinnvoll</b> ist. 58% möchten ihre Arbeit <b>selbstständig</b> planen.</p>
      <p>Wer eine Arbeit sucht, studiert <b>Stellenanzeigen</b> in Zeitungen oder im Internet. Dann schickt man eine <b>Bewerbung</b> mit seinem <b>Lebenslauf</b>. Wenn der Personalchef die Bewerbung interessant findet, lädt er zum <b>Vorstellungsgespräch</b> ein.</p>
    </div>
    <div style="color:var(--muted);font-size:13px">💡 Übung 1 — Lückentext: klick die richtigen Wörter!</div>`,
  exercises:[
    {id:'l31e1',type:'cloze',q:'Klick die richtigen Wörter in die Lücken!',
     parts:['Ich will eine ',' an die Firma schicken. Ich habe in der Zeitung eine interessante ',' gefunden. Bei der Berufswahl muss man auf seine Interessen und Fähigkeiten ',' . Man muss wissen, ob der Beruf ',' ist. Morgen gehe ich zum ',' . Die meisten Menschen wollen ein gutes ',' haben.'],
     answers:['Bewerbung','Stellenanzeige','achten','gefragt','Vorstellungsgespräch','Gehalt'],
     distract:['Ausbildung','Werbung','wissen','bekannt','Praktikum','Urlaub']},
    {id:'l31e2',type:'mc',q:'Wie viel Prozent der Menschen wollen, dass ihre Arbeit sinnvoll ist?',
     options:['58%','73%','88%'],
     answer:1,explain:'"73% wollen, dass ihre Arbeit sinnvoll und nützlich ist." — aus dem Text.'},
    {id:'l31e3',type:'mc',q:'Was schickt man, wenn man sich für eine Stelle bewirbt?',
     options:['Nur den Lebenslauf','Eine Bewerbung mit Lebenslauf','Eine Stellenanzeige'],
     answer:1,explain:'"man schickt eine Bewerbung mit seinem Lebenslauf an die Firma."'},
    {id:'l31e4',type:'gap',q:'"IT-Berufe sind sehr ___ — man findet leicht eine Stelle." (востребованы)',
     accept:['gefragt'],hint:'gefragt = востребованный (von "fragen" — Passiv-Adj.)',explain:'gefragt'},
    {id:'l31e5',type:'match',q:'Ordne Begriff und Bedeutung zu:',
     pairs:[['die Bewerbung','заявление на работу'],['das Vorstellungsgespräch','собеседование'],['das Gehalt','зарплата'],['selbstständig','самостоятельно']]},
  ]
},
/* ── Einheit 32 ─────────────────────────────────────── B1 ── */
{ id:'l32', tag:'N-Deklination', level:'b1',
  title:'Schwache Maskulina — N-Deklination',
  desc:'Der Student / des Studenten — Maskulina, die in allen Fällen außer Nom. -en bekommen.',
  vocab:[
    {de:'der Student → des Studenten',    ru:'студент',       ex:'Ich kenne den Studenten. Das ist das Buch des Studenten.'},
    {de:'der Journalist → des Journalisten', ru:'журналист',  ex:'Er ist ein bekannter Journalist. Ich kenne den Journalisten.'},
    {de:'der Präsident → des Präsidenten',ru:'президент',     ex:'Der Präsident / den Präsidenten / dem Präsidenten.'},
    {de:'der Kandidat → des Kandidaten', ru:'кандидат',       ex:'Er wünscht dem Kandidaten Erfolg.'},
    {de:'der Mensch → des Menschen',      ru:'человек',       ex:'Ich sehe einen Menschen. Er hilft dem Menschen.'},
    {de:'der Held → des Helden',          ru:'герой',         ex:'Das ist die Geschichte eines Helden.'},
    {de:'der Bär → des Bären',            ru:'медведь',       ex:'Ich sehe einen Bären.'},
    {de:'der Pilot → des Piloten',        ru:'пилот',         ex:'Der Pilot / den Piloten / dem Piloten.'},
    {de:'der Kollege → des Kollegen',     ru:'коллега',       ex:'Er hilft seinem Kollegen.'},
    {de:'der Biologe → des Biologen',     ru:'биолог',        ex:'Das ist das Buch des Biologen.'},
    {de:'der Name → des Namens (!)',       ru:'имя (исключение!)', ex:'Wie ist Ihr Name? — des Namens (не -en!)'},
    {de:'typische Endungen: -e, -ent, -ant, -ist, -at, -ot, -og', ru:'суффиксы → всегда слабое скл.',ex:'Student, Laborant, Journalist, Kandidat, Pilot, Biologe'},
  ],
  gramHTML:`
    <h3>Regel: N-Deklination (schwache Maskulina)</h3>
    <p>Diese Maskulina bekommen in <b>allen Fällen außer Nominativ Singular</b> die Endung <b>-(e)n</b>:</p>
    <table>
      <tr><th>Fall</th><th>der Student</th><th>der Mensch</th></tr>
      <tr><td>Nominativ</td><td>der Student</td><td>der Mensch</td></tr>
      <tr><td>Akkusativ</td><td>den Student<b>en</b></td><td>den Mensch<b>en</b></td></tr>
      <tr><td>Dativ</td><td>dem Student<b>en</b></td><td>dem Mensch<b>en</b></td></tr>
      <tr><td>Genitiv</td><td>des Student<b>en</b></td><td>des Mensch<b>en</b></td></tr>
    </table>
    <h3>Typische Gruppen</h3>
    <table>
      <tr><th>Endung</th><th>Beispiele</th></tr>
      <tr><td>-e</td><td>der Junge, Bär<b>e</b>, Löw<b>e</b>, Kolleg<b>e</b>, Biologe</td></tr>
      <tr><td>-ent</td><td>der Stud<b>ent</b>, Präsid<b>ent</b>, Doз<b>ent</b></td></tr>
      <tr><td>-ant</td><td>der Labor<b>ant</b>, Prakt<b>ikant</b></td></tr>
      <tr><td>-ist</td><td>der Journal<b>ist</b>, Tourist, Poliz<b>ist</b></td></tr>
      <tr><td>-at</td><td>der Kandid<b>at</b>, Diplomat, Bürokr<b>at</b></td></tr>
      <tr><td>-ot</td><td>der Pilot, Patriot</td></tr>
    </table>
    <div class="tip"><b>Ausnahmen:</b> der Name → des Nam<b>ens</b>; der Herr → des Herr<b>n</b> (nicht -en).</div>`,
  exercises:[
    {id:'l32e1',type:'mc',q:'"Ich kenne ___ Journalisten." (Akk. sing.)',
     options:['der','den','dem'],
     answer:1,explain:'N-Deklination: Akkusativ → -(e)n. "Ich kenne den Journalisten."'},
    {id:'l32e2',type:'gap',q:'"Das ist das Buch des ___ (Student)." (Genitiv)',
     accept:['Studenten'],hint:'N-Deklination: Genitiv → Student + -en.',explain:'Studenten'},
    {id:'l32e3',type:'mc',q:'"Er hilft dem ___ (Präsident)." (Dativ)',
     options:['Präsident','Präsidenten','Präsidents'],
     answer:1,explain:'Dativ → -(e)n: "dem Präsidenten".'},
    {id:'l32e4',type:'listen',
     audio:'Der Student kommt aus Polen. Ich kenne den Studenten seit zwei Jahren. Das Buch des Studenten liegt auf dem Tisch.',
     q:'In welchen Fällen steht "Student" / "Studenten"?',
     options:['Nom., Akk., Dat.','Nom., Akk., Gen.','Nom., Dat., Gen.'],
     answer:1,explain:'"Der Student" = Nominativ; "den Studenten" = Akkusativ; "des Studenten" = Genitiv.'},
    {id:'l32e5',type:'match',q:'Ordne Nominativ und Genitiv zu:',
     pairs:[['der Pilot','des Piloten'],['der Biologe','des Biologen'],['der Kandidat','des Kandidaten'],['der Kollege','des Kollegen']]},
  ]
},

/* ── Einheit 33 ─────────────────────────────────────── B1 ── */
{ id:'l33', tag:'Plusquamperfekt', level:'b1',
  title:'Plusquamperfekt — eine Zeitstufe früher',
  desc:'Er hatte gepackt und fuhr los — was passierte zuerst?',
  vocab:[
    {de:'hatte + Partizip II',       ru:'haben-Verben im PQP',        ex:'Ich hatte das Buch gelesen.'},
    {de:'war + Partizip II',         ru:'sein-Verben im PQP',         ex:'Er war nach Berlin gefahren.'},
    {de:'hatte gepackt',             ru:'(уже) упаковал',             ex:'Er hatte seinen Koffer gepackt und fuhr los.'},
    {de:'hatte gekauft',             ru:'(уже) купил',                ex:'Ich hatte die Tickets gekauft und fuhr in die Schweiz.'},
    {de:'war aufgewacht',            ru:'(уже) проснулся',            ex:'Ich war aufgewacht und öffnete das Fenster.'},
    {de:'hatte bestanden',           ru:'сдал (экзамен)',             ex:'Nachdem er die Prüfung bestanden hatte, feierte er.'},
    {de:'hatte vorbereitet',         ru:'(уже) подготовил',           ex:'Er hatte alles vorbereitet.'},
    {de:'nachdem + PQP',             ru:'после того как (PQP → Prät)', ex:'Nachdem ich gegessen hatte, ging ich schlafen.'},
    {de:'Vorvergangenheit',          ru:'предпрошедшее время',        ex:'PQP drückt aus: das passierte noch früher.'},
    {de:'Sequenz: PQP → Präteritum', ru:'сначала PQP, потом Prät.',   ex:'Er hatte gelernt → er bestand die Prüfung.'},
  ],
  gramHTML:`
    <h3>Bildung</h3>
    <table>
      <tr><th>Person</th><th>mit haben</th><th>mit sein</th></tr>
      <tr><td>ich</td><td>hatte gelesen</td><td>war gefahren</td></tr>
      <tr><td>du</td><td>hattest gelesen</td><td>warst gefahren</td></tr>
      <tr><td>er/sie/es</td><td>hatte gelesen</td><td>war gefahren</td></tr>
      <tr><td>wir</td><td>hatten gelesen</td><td>waren gefahren</td></tr>
    </table>
    <h3>Wann benutzt man das Plusquamperfekt?</h3>
    <p>Das Plusquamperfekt drückt aus, dass eine Handlung <b>noch früher</b> stattfand als eine andere vergangene Handlung.</p>
    <div class="ex-box"><b>Er hatte seinen Koffer gepackt</b> und fuhr zum Bahnhof.<span class="gl">Он (уже) упаковал чемодан и поехал на вокзал. ← сначала упаковал</span></div>
    <div class="ex-box"><b>Nachdem sie fleißig studiert hatten</b>, bestanden sie die Prüfung.<span class="gl">После того как они усердно учились, они сдали экзамен.</span></div>
    <div class="ex-box">Ich war sehr müde, denn ich <b>hatte die Nacht nicht geschlafen</b>.<span class="gl">Я был очень устал, потому что (перед этим) не спал ночью.</span></div>
    <div class="tip"><b>Merke:</b> PQP = hatte/war + Partizip II. Gleiche Wahl haben/sein wie beim Perfekt!</div>`,
  exercises:[
    {id:'l33e1',type:'mc',q:'"Er ___ seinen Koffer ___ und fuhr dann los." (packen, PQP)',
     options:['hatte … gepackt','hat … gepackt','war … gepackt'],
     answer:0,explain:'Plusquamperfekt mit haben: hatte + gepackt. "hatte gepackt" = noch frühere Handlung.'},
    {id:'l33e2',type:'gap',q:'"Nachdem ich ___ ___ (essen, PQP), ging ich schlafen."',
     accept:['gegessen hatte','hatte gegessen'],hint:'PQP: hatte/war + Partizip II. essen → gegessen.',explain:'gegessen hatte'},
    {id:'l33e3',type:'mc',q:'"Sie war sehr müde, denn sie ___ die ganze Nacht ___." (arbeiten, PQP)',
     options:['hatte … gearbeitet','ist … gearbeitet','war … gearbeitet'],
     answer:0,explain:'arbeiten → haben-Verb im Perfekt/PQP → "hatte gearbeitet".'},
    {id:'l33e4',type:'listen',
     audio:'Nachdem er die Prüfung bestanden hatte, feierte er mit Freunden. Er hatte alles gut vorbereitet und war sehr erleichtert.',
     q:'Wie viele Plusquamperfekt-Formen hörst du?',
     options:['1','2','3'],
     answer:2,explain:'"bestanden hatte" · "hatte vorbereitet" — zwei PQP-Formen.'},
    {id:'l33e5',type:'order',q:'Bilde den Satz mit Plusquamperfekt:',
     words:['Nachdem','er','die','Tickets','gekauft','hatte','fuhr','er','los'],
     answer:'Nachdem er die Tickets gekauft hatte fuhr er los'},
  ]
},
/* ── Einheit 34 ─────────────────────────────────────── A2 ── */
{ id:'l34', tag:'stellen/stehen', level:'b1',
  title:'stellen / stehen · legen / liegen · hängen',
  desc:'Wohin? → Aktion. Wo? → Zustand. Das wichtigste Verbenpar im Deutschen.',
  vocab:[
    {de:'stellen (wohin)',   ru:'ставить (куда) — действие',   ex:'Ich stelle die Vase auf den Tisch.'},
    {de:'stehen (wo)',       ru:'стоять (где) — состояние',    ex:'Die Vase steht auf dem Tisch.'},
    {de:'legen (wohin)',     ru:'класть (куда) — действие',    ex:'Ich lege das Buch auf den Tisch.'},
    {de:'liegen (wo)',       ru:'лежать (где) — состояние',    ex:'Das Buch liegt auf dem Tisch.'},
    {de:'hängen (wohin)',    ru:'вешать (куда) — действие',    ex:'Ich hänge das Bild an die Wand.'},
    {de:'hängen (wo)',       ru:'висеть (где) — состояние',    ex:'Das Bild hängt an der Wand.'},
    {de:'setzen (wohin)',    ru:'сажать (куда) — действие',    ex:'Ich setze das Kind auf den Stuhl.'},
    {de:'sitzen (wo)',       ru:'сидеть (где) — состояние',    ex:'Das Kind sitzt auf dem Stuhl.'},
    {de:'Akkusativ (wohin)', ru:'Akkusativ nach Wohin-Frage',  ex:'auf den Tisch (Akk.) — ich stelle es dahin.'},
    {de:'Dativ (wo)',        ru:'Dativ nach Wo-Frage',         ex:'auf dem Tisch (Dat.) — es steht dort.'},
  ],
  gramHTML:`
    <h3>Das System: Aktion ↔ Zustand</h3>
    <table>
      <tr><th>Frage</th><th>Verb (Aktion)</th><th>Verb (Zustand)</th><th>Kasus</th></tr>
      <tr><td>Wohin?</td><td>stellen</td><td>→ stehen</td><td>Akkusativ</td></tr>
      <tr><td>Wo?</td><td>–</td><td>stehen</td><td>Dativ</td></tr>
      <tr><td>Wohin?</td><td>legen</td><td>→ liegen</td><td>Akkusativ</td></tr>
      <tr><td>Wo?</td><td>–</td><td>liegen</td><td>Dativ</td></tr>
      <tr><td>Wohin?</td><td>hängen</td><td>→ hängen</td><td>Akkusativ</td></tr>
      <tr><td>Wo?</td><td>–</td><td>hängen</td><td>Dativ</td></tr>
    </table>
    <div class="ex-box">Ich <b>stelle</b> die Vase <b>auf den Tisch</b>. → Die Vase <b>steht auf dem Tisch</b>.<span class="gl">Wohin? (Akk) → Wo? (Dat)</span></div>
    <div class="ex-box">Ich <b>lege</b> das Buch <b>auf den Tisch</b>. → Das Buch <b>liegt auf dem Tisch</b>.<span class="gl">Wohin? (Akk) → Wo? (Dat)</span></div>
    <div class="ex-box">Ich <b>hänge</b> das Bild <b>an die Wand</b>. → Das Bild <b>hängt an der Wand</b>.<span class="gl">an die (Akk) → an der (Dat)</span></div>
    <div class="tip"><b>Tipp:</b> Aktion (stellen/legen/hängen) → ich tue etwas → Akkusativ (wohin). Zustand (stehen/liegen/hängen) → etwas ist schon da → Dativ (wo).</div>`,
  exercises:[
    {id:'l34e1',type:'mc',q:'"Ich ___ das Buch auf den Tisch." (Aktion — ich tue es)',
     options:['lege','liege','liegt'],
     answer:0,explain:'Aktion: legen (wohin?). "Ich lege das Buch auf den Tisch." → Akkusativ.'},
    {id:'l34e2',type:'mc',q:'"Das Buch ___ auf dem Tisch." (Zustand — es ist schon da)',
     options:['lege','liegt','legen'],
     answer:1,explain:'Zustand: liegen (wo?). "Das Buch liegt auf dem Tisch." → Dativ.'},
    {id:'l34e3',type:'gap',q:'"Ich ___ das Bild an die Wand." (hängen, Aktion)',
     accept:['hänge'],hint:'Aktion: Ich hänge etwas wohin (Akkusativ).',explain:'hänge'},
    {id:'l34e4',type:'match',q:'Ordne Aktion und Zustand zu:',
     pairs:[['stellen (wohin)','stehen (wo)'],['legen (wohin)','liegen (wo)'],['hängen (wohin)','hängen (wo)'],['setzen (wohin)','sitzen (wo)']]},
    {id:'l34e5',type:'listen',
     audio:'Ich stelle die Blumen auf den Tisch. Die Blumen stehen jetzt auf dem Tisch. Das Bild hänge ich an die Wand — es hängt dort sehr schön.',
     q:'Wie viele Aktion-Verben (wohin) hörst du?',
     options:['1','2','3'],
     answer:1,explain:'"stelle" und "hänge" sind Aktionsverben (wohin?). "stehen" und "hängt" sind Zustands-verben (wo?).'},
  ]
},
/* ── Einheit 35 ─────────────────────────────────────── A2 ── */
{ id:'l35', tag:'Ordinalzahlen', level:'b1',
  title:'Ordinalzahlen — am 5. Mai / im 3. Stock',
  desc:'Erst-, zweit-, dritt-… Ordnungszahlen bilden und deklinieren.',
  vocab:[
    {de:'der erste',    ru:'первый (1.)',    ex:'Das ist das erste Kapitel.'},
    {de:'der zweite',   ru:'второй (2.)',    ex:'Heute ist der zweite Januar.'},
    {de:'der dritte',   ru:'третий (3., unregelmäßig!)', ex:'Er wohnt im dritten Stock.'},
    {de:'der vierte',   ru:'четвёртый (4.)', ex:'Das ist der vierte Versuch.'},
    {de:'der siebte',   ru:'седьмой (7., unregelmäßig!)', ex:'Am siebten Juli hat er Geburtstag.'},
    {de:'der achte',    ru:'восьмой (8., unregelmäßig!)', ex:'Am achten März ist Frauentag.'},
    {de:'der zwanzigste',ru:'двадцатый (20.)', ex:'Am zwanzigsten Mai fahre ich ab.'},
    {de:'am + Ordinal',  ru:'в дату (Dativ)',  ex:'am fünften März — am 5.3.'},
    {de:'im + Stock',    ru:'на (каком) этаже', ex:'im dritten Stock — im 3. Stock'},
    {de:'der wievielte', ru:'какое число?',    ex:'Den wievielten haben wir heute? — Den 15.'},
  ],
  gramHTML:`
    <h3>Bildung der Ordinalzahlen</h3>
    <table>
      <tr><th>Zahl</th><th>Ordinal (Stamm)</th><th>Regel</th></tr>
      <tr><td>1.</td><td>erst-</td><td>unregelmäßig!</td></tr>
      <tr><td>2.</td><td>zweit-</td><td>regelmäßig</td></tr>
      <tr><td>3.</td><td>dritt-</td><td>unregelmäßig!</td></tr>
      <tr><td>4.–19.</td><td>viert-, fünft-, sechst-…</td><td>Grundzahl + <b>-t</b></td></tr>
      <tr><td>7.</td><td>siebt-</td><td>unregelmäßig (nicht siebent)!</td></tr>
      <tr><td>8.</td><td>acht-</td><td>unregelmäßig (nicht achtet)!</td></tr>
      <tr><td>20+</td><td>zwanzigst-, einundzwanzigst-…</td><td>Grundzahl + <b>-st</b></td></tr>
    </table>
    <h3>Im Satz: Ordinalzahl + Adjektivendung</h3>
    <div class="ex-box">Heute ist der <b>fünfte</b> März. (Nominativ)<span class="gl">Сегодня пятое марта.</span></div>
    <div class="ex-box">Ich fahre am <b>fünften</b> März. (Dativ nach „am")<span class="gl">Я еду пятого марта.</span></div>
    <div class="ex-box">Er wohnt im <b>dritten</b> Stock.<span class="gl">Он живёт на третьем этаже.</span></div>
    <div class="tip"><b>Fragen nach dem Datum:</b> „Welcher Tag ist heute?" / „Den wievielten haben wir?" → „Heute ist der 15. März." / „Wir haben den 15."</div>`,
  exercises:[
    {id:'l35e1',type:'mc',q:'"Heute ist der ___ März." (3. — wie heißt die Form?)',
     options:['dritte','drite','dreite'],
     answer:0,explain:'3. → dritt- (unregelmäßig!) + -e (Nominativ): "der dritte März".'},
    {id:'l35e2',type:'mc',q:'"Er wohnt im ___ Stock." (7. — Dativ nach "im")',
     options:['siebenten','siebten','siebsten'],
     answer:1,explain:'7. → siebt- (unregelmäßig!) + -en (Dativ): "im siebten Stock".'},
    {id:'l35e3',type:'gap',q:'"Ich fahre am ___ (8.) März nach Berlin." (Dativ nach am)',
     accept:['achten'],hint:'8. → acht- (unregelmäßig) + -en (Dativ nach am).',explain:'achten'},
    {id:'l35e4',type:'listen',
     audio:'Heute ist der erste Dezember. Ich fahre am fünfzehnten Januar nach Wien. Er wohnt im zwanzigsten Stock.',
     q:'Welche Ordinalzahlen hörst du?',
     options:['1., 15., 20.','1., 5., 20.','2., 15., 10.'],
     answer:0,explain:'"ersten" = 1. · "fünfzehnten" = 15. · "zwanzigsten" = 20.'},
    {id:'l35e5',type:'match',q:'Ordne Zahl und Ordinalform zu:',
     pairs:[['1.','erst-'],['3.','dritt-'],['7.','siebt-'],['20.','zwanzigst-']]},
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
  },
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
  },{ id:'g10', icon:'📐', title:'Adjektivdeklination — Tabellen',
    desc:'Alle drei Deklinationstypen: nach der/die/das, ein/eine und ohne Artikel.',
    html:`
    <h3>1. Schwache Deklination — nach bestimmtem Artikel</h3>
    <table>
      <tr><th></th><th>Mask.</th><th>Fem.</th><th>Neut.</th><th>Pl.</th></tr>
      <tr><td>Nom</td><td>-<b>e</b></td><td>-<b>e</b></td><td>-<b>e</b></td><td>-<b>en</b></td></tr>
      <tr><td>Akk</td><td>-<b>en</b></td><td>-<b>e</b></td><td>-<b>e</b></td><td>-<b>en</b></td></tr>
      <tr><td>Dat</td><td>-<b>en</b></td><td>-<b>en</b></td><td>-<b>en</b></td><td>-<b>en</b></td></tr>
      <tr><td>Gen</td><td>-<b>en</b></td><td>-<b>en</b></td><td>-<b>en</b></td><td>-<b>en</b></td></tr>
    </table>
    <div class="ex-box"><b>der alte Mann · die alte Frau · das alte Haus · die alten Leute</b></div>
    <h3>2. Gemischte Deklination — nach unbestimmtem Artikel</h3>
    <table>
      <tr><th></th><th>Mask.</th><th>Fem.</th><th>Neut.</th></tr>
      <tr><td>Nom</td><td>-<b>er</b></td><td>-<b>e</b></td><td>-<b>es</b></td></tr>
      <tr><td>Akk</td><td>-<b>en</b></td><td>-<b>e</b></td><td>-<b>es</b></td></tr>
      <tr><td>Dat</td><td>-<b>en</b></td><td>-<b>en</b></td><td>-<b>en</b></td></tr>
    </table>
    <div class="ex-box"><b>ein alter Mann · eine alte Frau · ein altes Haus</b></div>
    <h3>3. Starke Deklination — ohne Artikel</h3>
    <table>
      <tr><th></th><th>Mask.</th><th>Fem.</th><th>Neut.</th></tr>
      <tr><td>Nom</td><td>-<b>er</b></td><td>-<b>e</b></td><td>-<b>es</b></td></tr>
      <tr><td>Akk</td><td>-<b>en</b></td><td>-<b>e</b></td><td>-<b>es</b></td></tr>
      <tr><td>Dat</td><td>-<b>em</b></td><td>-<b>er</b></td><td>-<b>em</b></td></tr>
    </table>
    <div class="ex-box"><b>alter Wein · frische Milch · kaltes Wasser</b></div>
    <div class="tip"><b>Kurzregel:</b> Zeigt der Artikel das Geschlecht klar (der/die/das) → Adjektiv -e/-en. Zeigt er es nicht (ein/kein/ohne) → Adjektiv bekommt die Geschlechtsendung selbst.</div>`,
  }
,{ id:'g11', icon:'⚙️', title:'sein/haben + zu + Infinitiv',
    desc:'Pflicht und Notwendigkeit ausdrücken — als Alternative zum Passiv mit müssen.',
    html:`
    <h3>Bildung und Bedeutung</h3>
    <p><b>sein + zu + Infinitiv</b> und <b>haben + zu + Infinitiv</b> drücken aus, dass etwas getan werden <b>muss/soll</b>.</p>
    <table>
      <tr><th>Konstruktion</th><th>Bedeutung</th><th>Beispiel</th></tr>
      <tr><td>sein + zu + Inf.</td><td>muss/kann getan werden (Passiv-ähnlich)</td><td>Das Formular ist auszufüllen.</td></tr>
      <tr><td>haben + zu + Inf.</td><td>jemand muss etw. tun (aktiv)</td><td>Er hat das Formular auszufüllen.</td></tr>
    </table>
    <div class="ex-box"><b>Das Gedicht ist zu lernen.</b> = Das Gedicht muss gelernt werden.<span class="gl">Стихотворение необходимо выучить.</span></div>
    <div class="ex-box"><b>Die Studenten haben alle Prüfungen zu bestehen.</b> = müssen bestehen.<span class="gl">Студенты должны сдать все экзамены.</span></div>
    <div class="ex-box"><b>Dieser Prozess ist genau zu kontrollieren.</b> = muss kontrolliert werden.</div>
    <h3>Partizip I + zu als Attribut</h3>
    <p>Dieselbe Bedeutung — aber als erweitertes Adjektiv vor dem Substantiv:</p>
    <div class="ex-box"><b>der zu prüfende Apparat</b> = der Apparat, der geprüft werden muss</div>
    <div class="ex-box"><b>die zu lösende Aufgabe</b> = die Aufgabe, die gelöst werden soll</div>
    <div class="tip"><b>Trennbare Verben:</b> aufheben → <b>auf</b>zuheben → der <b>auf</b>zuhebende Brief. Das „zu" steht zwischen Präfix und Verbstamm.</div>`,
  }
,{ id:'g12', icon:'🔧', title:'lassen + Infinitiv',
    desc:'Er lässt sein Auto reparieren — kausativ, permissiv und reflexiv.',
    html:`
    <h3>Drei Bedeutungen von lassen + Infinitiv</h3>
    <table>
      <tr><th>Typ</th><th>Bedeutung</th><th>Beispiel</th></tr>
      <tr><td>Kausativ</td><td>jemanden etw. tun lassen (von jemand anderem)</td><td>Er lässt sein Auto <b>reparieren</b>. (Werkstatt macht es)</td></tr>
      <tr><td>Permissiv</td><td>erlauben, dass jemand etw. tut</td><td>Die Eltern lassen die Kinder <b>spielen</b>.</td></tr>
      <tr><td>Reflexiv</td><td>sich etw. tun lassen (Passiv-ähnlich)</td><td>Sie lässt sich die Haare <b>schneiden</b>.</td></tr>
    </table>
    <h3>Konjugation</h3>
    <div class="ex-box">ich lasse · du lässt · er/sie/es lässt · wir lassen · ihr lasst · sie/Sie lassen</div>
    <h3>Perfekt: lassen bleibt Infinitiv!</h3>
    <div class="ex-box"><b>Er hat sein Auto reparieren lassen.</b> (nicht: "gelassen"!)<span class="gl">Он отдал машину в ремонт.</span></div>
    <div class="ex-box"><b>Sie hat sich die Haare schneiden lassen.</b><span class="gl">Она постриглась (у парикмахера).</span></div>
    <h3>Negation / Impossibility: sich lassen</h3>
    <div class="ex-box"><b>Das lässt sich nicht erklären.</b> = Das kann nicht erklärt werden.<span class="gl">Это невозможно объяснить.</span></div>
    <div class="ex-box"><b>Das lässt sich leicht lösen.</b> = Das kann leicht gelöst werden.</div>
    <div class="tip"><b>Unterschied:</b> „Er lässt das Auto reparieren" (jemand anderes repariert) ≠ „Er lässt das Auto stehen" (er fährt nicht, lässt es dort).</div>`,
  }
,{ id:'g13', icon:'🔑', title:'Modalverben — können, dürfen, müssen, sollen, wollen, mögen',
    desc:'Vollständige Übersicht aller Modalverben im Präsens und Präteritum.',
    html:`
    <h3>Präsens</h3>
    <table>
      <tr><th>Person</th><th>können</th><th>dürfen</th><th>müssen</th><th>sollen</th><th>wollen</th><th>mögen/möchten</th></tr>
      <tr><td>ich</td><td>kann</td><td>darf</td><td>muss</td><td>soll</td><td>will</td><td>mag / möchte</td></tr>
      <tr><td>du</td><td>kannst</td><td>darfst</td><td>musst</td><td>sollst</td><td>willst</td><td>magst / möchtest</td></tr>
      <tr><td>er/sie/es</td><td>kann</td><td>darf</td><td>muss</td><td>soll</td><td>will</td><td>mag / möchte</td></tr>
      <tr><td>wir</td><td>können</td><td>dürfen</td><td>müssen</td><td>sollen</td><td>wollen</td><td>mögen / möchten</td></tr>
    </table>
    <h3>Präteritum</h3>
    <table>
      <tr><th>Infinitiv</th><th>Präteritum (ich/er)</th><th>Beispiel</th></tr>
      <tr><td>können</td><td>konnte</td><td>Er konnte nicht kommen.</td></tr>
      <tr><td>dürfen</td><td>durfte</td><td>Als Kind durfte ich nicht spät aufbleiben.</td></tr>
      <tr><td>müssen</td><td>musste</td><td>Sie musste früh aufstehen.</td></tr>
      <tr><td>sollen</td><td>sollte</td><td>Er sollte das Buch lesen.</td></tr>
      <tr><td>wollen</td><td>wollte</td><td>Otto wollte Schauspieler werden.</td></tr>
    </table>
    <h3>können vs. dürfen</h3>
    <div class="ex-box"><b>können</b> = Fähigkeit: Ich <b>kann</b> gut schwimmen.<span class="gl">умею, могу (способность)</span></div>
    <div class="ex-box"><b>dürfen</b> = Erlaubnis: Hier <b>darf</b> man nicht rauchen.<span class="gl">разрешено/запрещено</span></div>
    <h3>müssen vs. sollen</h3>
    <div class="ex-box"><b>müssen</b> = innere Notwendigkeit: Ich <b>muss</b> jetzt gehen — es ist spät.<span class="gl">должен (внутренняя необходимость)</span></div>
    <div class="ex-box"><b>sollen</b> = Auftrag von außen: Du <b>sollst</b> das Buch lesen (sagt der Lehrer).<span class="gl">должен (чужое поручение)</span></div>`,
  }
,{ id:'g14', icon:'📊', title:'Komparativ und Superlativ — Vollständig',
    desc:'Alle Steigerungsformen, Umlaute, Ausnahmen und Vergleichsmuster.',
    html:`
    <h3>Regelmäßige Bildung</h3>
    <table>
      <tr><th>Grundform</th><th>Komparativ (+er)</th><th>Superlativ (am…sten)</th></tr>
      <tr><td>klein</td><td>kleiner</td><td>am kleinsten</td></tr>
      <tr><td>schnell</td><td>schneller</td><td>am schnellsten</td></tr>
      <tr><td>billig</td><td>billiger</td><td>am billigsten</td></tr>
      <tr><td>interessant</td><td>interessanter</td><td>am interessantesten</td></tr>
    </table>
    <h3>Mit Umlaut</h3>
    <table>
      <tr><th>Grundform</th><th>Komparativ</th><th>Superlativ</th></tr>
      <tr><td>alt</td><td>älter</td><td>am ältesten</td></tr>
      <tr><td>jung</td><td>jünger</td><td>am jüngsten</td></tr>
      <tr><td>groß</td><td>größer</td><td>am größten</td></tr>
      <tr><td>kalt</td><td>kälter</td><td>am kältesten</td></tr>
      <tr><td>warm</td><td>wärmer</td><td>am wärmsten</td></tr>
      <tr><td>lang</td><td>länger</td><td>am längsten</td></tr>
      <tr><td>stark</td><td>stärker</td><td>am stärksten</td></tr>
      <tr><td>hoch</td><td>höher</td><td>am höchsten</td></tr>
    </table>
    <h3>Unregelmäßig</h3>
    <table>
      <tr><th>Grundform</th><th>Komparativ</th><th>Superlativ</th></tr>
      <tr><td><b>gut</b></td><td><b>besser</b></td><td><b>am besten</b></td></tr>
      <tr><td><b>viel</b></td><td><b>mehr</b></td><td><b>am meisten</b></td></tr>
      <tr><td><b>gern</b></td><td><b>lieber</b></td><td><b>am liebsten</b></td></tr>
      <tr><td>nah</td><td>näher</td><td>am nächsten</td></tr>
    </table>
    <h3>Vergleichsmuster</h3>
    <div class="ex-box">Ungleich: <b>als</b> → Er ist größer <b>als</b> sie.</div>
    <div class="ex-box">Gleich: <b>so/genauso … wie</b> → Er ist genauso groß <b>wie</b> sie.</div>
    <div class="ex-box">Verstärkt: <b>viel</b> + Komp → Diese Tasche ist <b>viel</b> teurer.</div>`,
  }
,{ id:'g15', icon:'🔗', title:'Relativsätze — alle Fälle',
    desc:'Vollständige Tabelle der Relativpronomen mit Beispielen.',
    html:`
    <h3>Relativpronomen-Tabelle</h3>
    <table>
      <tr><th>Fall</th><th>Mask. (der)</th><th>Fem. (die)</th><th>Neut. (das)</th><th>Plural (die)</th></tr>
      <tr><td>Nom.</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
      <tr><td>Akk.</td><td><b>den</b></td><td>die</td><td>das</td><td>die</td></tr>
      <tr><td>Dat.</td><td>dem</td><td>der</td><td>dem</td><td><b>denen</b></td></tr>
      <tr><td>Gen.</td><td><b>dessen</b></td><td><b>deren</b></td><td><b>dessen</b></td><td><b>deren</b></td></tr>
    </table>
    <h3>Beispiele für alle Fälle</h3>
    <div class="ex-box"><b>Nom. M:</b> Der Mann, <b>der</b> dort steht, ist mein Chef.</div>
    <div class="ex-box"><b>Akk. M:</b> Der Film, <b>den</b> ich gesehen habe, war toll.</div>
    <div class="ex-box"><b>Dat. F:</b> Die Kollegin, <b>der</b> ich geholfen habe, ist froh.</div>
    <div class="ex-box"><b>Gen. M:</b> Der Autor, <b>dessen</b> Buch ich lese, ist bekannt.</div>
    <div class="ex-box"><b>Gen. F/Pl.:</b> Die Schüler, <b>deren</b> Sachen gepackt sind, fahren bald.</div>
    <div class="ex-box"><b>Präp + Dat.:</b> Die Stadt, <b>in der</b> er wohnt, ist München.</div>
    <h3>N-Deklination: Sonderfall im Relativsatz</h3>
    <div class="ex-box">Der Journalist, <b>den</b> ich kenne, … (Akk. → "den Journalisten" im Relativsatz mit N-Dekl.)</div>
    <div class="tip"><b>Merkregel:</b> Das Relativpronomen hat das Geschlecht des Bezugsworts, aber den Fall seiner Funktion im Relativsatz.</div>`,
  }
,{ id:'g16', icon:'⚙️', title:'Passiv mit Modalverben',
    desc:'Der Hund muss operiert werden — Modalverb + Partizip II + werden.',
    html:`
    <h3>Bildung: Modalverb + Partizip II + werden (Infinitiv)</h3>
    <table>
      <tr><th>Aktiv</th><th>Passiv mit Modal</th></tr>
      <tr><td>Der Arzt muss den Hund operieren.</td><td>Der Hund <b>muss operiert werden</b>.</td></tr>
      <tr><td>Man kann die Sonnenenergie nutzen.</td><td>Die Sonnenenergie <b>kann genutzt werden</b>.</td></tr>
      <tr><td>Man darf den Ball nicht berühren.</td><td>Der Ball <b>darf nicht berührt werden</b>.</td></tr>
      <tr><td>Man sollte das Problem lösen.</td><td>Das Problem <b>sollte gelöst werden</b>.</td></tr>
    </table>
    <h3>Im Präteritum</h3>
    <table>
      <tr><th>Aktiv (Prät.)</th><th>Passiv mit Modal (Prät.)</th></tr>
      <tr><td>Er musste das Paket transportieren.</td><td>Das Paket <b>musste transportiert werden</b>.</td></tr>
      <tr><td>Wir mussten das Auto waschen.</td><td>Das Auto <b>musste gewaschen werden</b>.</td></tr>
    </table>
    <div class="ex-box"><b>Nach der Prüfung durfte er in Urlaub fahren.</b> → <b>Nach der Prüfung durfte in Urlaub gefahren werden.</b><span class="gl">После экзамена можно было уехать в отпуск.</span></div>
    <div class="tip"><b>Wortstellung:</b> Modalverb (Position 2) + … + Partizip II + werden (am Satzende).<br>"Der Hund <b>muss</b> sofort <b>operiert werden</b>."</div>`,
  }];

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
  {q:'„Bamberg ist ___ schönsten Städte Bayerns." (die Stadt)',o:['einer der','eine der','eines der'],a:1},
  {q:'Präpositionen mit Dativ:',o:['durch, für, ohne','seit, bei, mit','um, gegen, bis'],a:1},
  {q:'„Das ist ___ Haus. ___ Haus ist groß." — Artikel?',o:['ein … Das','der … Das','ein … Ein'],a:0},
  {q:'Perfekt mit sein:',o:['lesen, schreiben, essen','gehen, fahren, einschlafen','kaufen, helfen, denken'],a:1},
  {q:'Konjunktiv I — Er sagte, er ___ müde. (sein)',o:['ist','sei','wäre'],a:1},{q:'"Er trägt ein ___ Hemd." (weiß, Nom/Akk Neut nach ein)',o:['weißes','weißen','weiße'],a:0},
  {q:'"Als Kind ___ ich nicht alleine rausgehen." (dürfen, Prät.)',o:['dürfte','durfte','darf'],a:1},
  {q:'"Ich freue mich ___ den Urlaub nächste Woche."',o:['über','auf','für'],a:1},
  {q:'"Ich ärgere mich ___ den Lärm."',o:['für','auf','über'],a:2},
  {q:'"___ ich klein war, hatte ich eine Katze."',o:['Wenn','Als','Da'],a:1},
  {q:'"Worüber sprichst du?" → Kurzantwort:',o:['darüber','dafür','darum'],a:0},
  {q:'"Die Bremsen ___ bei der Inspektion geprüft." (Passiv)',o:['sind','werden','haben'],a:1},
  {q:'"Peter ist krank. ___ kann er nicht kommen."',o:['Weil','Denn','Deshalb'],a:2}
,{q:'"Er kommt, ___ er sehr müde ist." (konzessiv)',o:['trotzdem','obwohl','trotz'],a:1},
{q:'"Es regnete. ___ gingen wir spazieren." (pos. 1, Inversion)',o:['Obwohl','Trotz','Trotzdem'],a:2},
{q:'Partizip I von „wachsen":',o:['gewachsen','wachsend','wächst'],a:1},
{q:'"Das Formular ___ ausgefüllt werden" = "Das Formular ist auszufüllen."',o:['kann','muss','soll'],a:1},
{q:'"Die Temperaturen, die steigen" → Partizip I als Attribut:',o:['die gestiegenen','die steigenden','die steigend'],a:1}
,{q:'"Das ist mir ___!" (egal, Redewendung)',o:['Bahnhof','Wurst','Bock'],a:1},
{q:'"Ich hoffe, ___ alles gut geht." (Aussagesatz)',o:['ob','als','dass'],a:2},
{q:'"___ ich jung war, hatte ich ein Fahrrad." (einmalig, Vergangenheit)',o:['Wenn','Als','Ob'],a:1},
{q:'"Sie fragt, ___ das Restaurant geöffnet ist." (indir. Ja/Nein-Frage)',o:['dass','ob','weil'],a:1},
{q:'"Er ___ sein Auto reparieren." (lassen, Präsens er)',o:['lässt','lasst','lässtet'],a:0}
,{q:'"___ er gegessen hatte, schlief er." (Sequenz, Verb am Ende)',o:['Bevor','Während','Nachdem'],a:2},
{q:'"___ du lügst, helfe ich dir nicht." (Bedingung, gleichzeitig)',o:['Seitdem','Solange','Bevor'],a:1},
{q:'"Er ___ sich über den Lärm." (sich ärgern, er)',o:['ärgert','ärgern','ärgerst'],a:0},
{q:'"Als Kind ___ ich nicht spät aufbleiben." (Erlaubnis, Prät)',o:['konnte','dürfte','durfte'],a:2},
{q:'"Hier ___ man nicht rauchen." (Erlaubnis/Verbot)',o:['kann','darf','muss'],a:1}
,{q:'"Sie ist ___ als er." (jung — Komparativ)',o:['jüngere','jünger','am jüngsten'],a:1},
{q:'"Das ist das ___ Hotel in der Stadt." (teuer — Superlativ als Attribut, Neutrum)',o:['teuere','teuerste','am teuersten'],a:1},
{q:'"Er kam, ___ mir zu helfen." (gleicher Akteur, Ziel)',o:['damit','um','ohne'],a:1},
{q:'"Wenn ich mehr Zeit ___, würde ich reisen." (haben, KII)',o:['habe','hatte','hätte'],a:2},
{q:'"___ ich doch mehr Freizeit!" (Wunschsatz, haben)',o:['Wäre','Hätte','Würde'],a:1}
,{q:'"Der Film, ___ ich gesehen habe, war gut." (Akk. Mask.)',o:['der','den','dem'],a:1},
{q:'"Die Uni, ___ er studiert, liegt in Berlin." (Dat. Fem. + Präp.)',o:['der','die','in der'],a:2},
{q:'"Das Buch ___ Studenten liegt auf dem Tisch." (Genitiv N-Dekl.)',o:['des Student','des Studenten','dem Studenten'],a:1},
{q:'"Ich kenne ___ Journalisten." (N-Deklination, Akk.)',o:['der','den','dem'],a:1},
{q:'Was bedeutet "gefragt sein"?',o:['neugierig sein','востребованным быть','известным быть'],a:1}
,{q:'"Er ___ seinen Koffer ___ und fuhr los." (packen, PQP)',o:['hat … gepackt','hatte … gepackt','war … gepackt'],a:1},
{q:'"Das Buch ___ auf dem Tisch." (Zustand — Wo?)',o:['lege','liegt','stellt'],a:1},
{q:'"Ich ___ das Bild an die Wand." (Aktion — Wohin?)',o:['hänge','hängt','liege'],a:0},
{q:'"Heute ist der ___ März." (3.)',o:['dritte','drite','dreite'],a:0},
{q:'"Der Hund ___ sofort operiert ___." (müssen, Passiv)',o:['muss … werden','wird … müssen','hat … werden'],a:0}
];

/* ============================================================
   STATE & PERSISTENCE
============================================================ */
const STORE_KEY='db2v2';
const state={
  view:'dashboard',lesson:null,tab:'vocab',deck:'all',gramUnit:null,
  xp:0,completed:new Set(),known:new Set(),personal:[],
  order:{},match:{},cloze:{},
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
function totalPct(){const tot=COURSE.filter(Boolean).reduce((s,l)=>s+l.exercises.length,0);return Math.round(state.completed.size/tot*100);}

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
  const t={mc:'Mehrfachauswahl',gap:'Lückentext',order:'Satzbau',match:'Zuordnung',listen:'Hörübung',cloze:'Lückentext-Chips'};
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

  if(ex.type==='cloze') return `<div class="ex" id="ex-${ex.id}">${exHead(ex,n)}<div class="q">${ex.q}</div>
    <div class="cloze-passage" id="cloze-p-${ex.id}"></div>
    <div class="cloze-bank" id="cloze-b-${ex.id}"></div>
    <div class="btn-row"><button class="btn" data-action="cloze-check" data-ex="${ex.id}">Prüfen</button>
    <button class="btn ghost" data-action="cloze-reset" data-ex="${ex.id}">Reset</button></div>
    <div class="feedback" id="fb-${ex.id}"></div></div>`;
  return '';
}

function setupEx(ex){
  if(ex.type==='order'){if(!state.order[ex.id])state.order[ex.id]={placed:[],bank:shuffle(ex.words.map((w,i)=>({w,i})))};drawOrder(ex);}
  if(ex.type==='match'){if(!state.match[ex.id])state.match[ex.id]={selLeft:null,done:new Set(),right:shuffle(ex.pairs.map((p,i)=>({txt:p[1],i})))};drawMatch(ex);}
  if(ex.type==='cloze'){if(!state.cloze[ex.id]){const all=[...ex.answers,...(ex.distract||[])];state.cloze[ex.id]={slots:new Array(ex.answers.length).fill(null),bank:shuffle(all.map((w,i)=>({w,i}))),checked:false};}drawCloze(ex);}
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


/* cloze */
function drawCloze(ex){const st=state.cloze[ex.id];const p=$('#cloze-p-'+ex.id),b=$('#cloze-b-'+ex.id);if(!p||!b)return;
  let html='';for(let i=0;i<=ex.answers.length;i++){html+=ex.parts[i]||'';
    if(i<ex.answers.length){const filled=st.slots[i];let cls='cloze-slot';
      if(st.checked)cls+=filled===ex.answers[i]?' slot-ok':' slot-err';
      html+=filled?`<span class="${cls}" data-action="cloze-rm" data-ex="${ex.id}" data-slot="${i}">${filled}</span>`
        :`<span class="${cls} slot-empty" data-action="cloze-rm" data-ex="${ex.id}" data-slot="${i}"> ? </span>`;}}
  p.innerHTML=html;
  b.innerHTML=st.bank.map(t=>`<button class="chip cloze-chip" data-action="cloze-word" data-ex="${ex.id}" data-wi="${t.i}">${t.w}</button>`).join('');}
function clozeWord(id,wi){const st=state.cloze[id];const item=st.bank.find(t=>t.i==wi);if(!item)return;
  const slot=st.slots.findIndex(x=>x===null);if(slot<0)return;
  st.slots[slot]=item.w;st.bank=st.bank.filter(t=>t.i!=wi);drawCloze(exById(id));}
function clozeRm(id,slot){const st=state.cloze[id];const w=st.slots[slot];if(!w)return;
  st.slots[slot]=null;st.checked=false;
  const ex=exById(id);const all=[...ex.answers,...(ex.distract||[])];const oi=all.indexOf(w);
  if(!st.bank.find(t=>t.w===w))st.bank.push({w,i:oi>=0?oi:Date.now()});drawCloze(ex);}
function checkCloze(id){const ex=exById(id);const st=state.cloze[id];
  st.checked=true;drawCloze(ex);
  const ok=ex.answers.every((a,i)=>st.slots[i]===a);const fb=$('#fb-'+id);
  if(ok){fb.className='feedback show ok';fb.innerHTML='✓ Alle Lücken richtig!';awardXP(id,10);markDone(id);}
  else{fb.className='feedback show no';fb.innerHTML='Nicht ganz — Lösung: <span class="sol">'+ex.answers.join(' · ')+'</span>';}}
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
function allW(){const o=[];COURSE.filter(Boolean).forEach(l=>l.vocab.forEach(v=>o.push({...v,key:l.id+'·'+v.de})));return o;}
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
    case 'cloze-word': clozeWord(t.dataset.ex, t.dataset.wi); break;
    case 'cloze-rm':  clozeRm(t.dataset.ex, +t.dataset.slot); break;
    case 'cloze-check': checkCloze(t.dataset.ex); break;
    case 'cloze-reset': delete state.cloze[t.dataset.ex];setupEx(exById(t.dataset.ex));$('#fb-'+t.dataset.ex).className='feedback'; break;
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
