/* ================================================================
   Deutsch B2 – Berufliches Deutsch  ·  Web-App
   Kursinhalt: original, eigens für diese App verfasst.
   Lehrbuch-PDF: wird lokal im Browser gelesen, nie hochgeladen.
================================================================ */

/* ---------- pdf.js CDN worker ---------- */
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

/* ============================================================
   KURSINHALT  (original)
============================================================ */
const COURSE = [
  {
    id:'l1', tag:'Bewerbung', title:'Bewerbung & Vorstellungsgespräch',
    desc:'Wortschatz rund um Job und Bewerbung — plus höfliche Wendungen mit Konjunktiv II.',
    vocab:[
      {de:'die Bewerbung',      ru:'заявка на вакансию',   ex:'Ich habe meine Bewerbung gestern abgeschickt.'},
      {de:'das Anschreiben',    ru:'сопроводительное письмо', ex:'Das Anschreiben sollte nicht länger als eine Seite sein.'},
      {de:'der Lebenslauf',     ru:'резюме',               ex:'Im Lebenslauf stehen deine bisherigen Stationen.'},
      {de:'das Vorstellungsgespräch', ru:'собеседование',  ex:'Ich bin zum Vorstellungsgespräch eingeladen worden.'},
      {de:'die Berufserfahrung',ru:'опыт работы',          ex:'Sie verfügt über langjährige Berufserfahrung.'},
      {de:'die Kenntnisse (Pl.)',ru:'знания, навыки',       ex:'Gute Deutschkenntnisse sind von Vorteil.'},
      {de:'sich bewerben um',   ru:'подавать заявку на',   ex:'Ich bewerbe mich um die Stelle als Verkaufsleiter.'},
      {de:'einstellen',         ru:'нанимать',             ex:'Die Firma stellt zum 1. März neue Mitarbeiter ein.'},
      {de:'die Stellenanzeige', ru:'объявление о вакансии',ex:'Ich habe die Stellenanzeige online gefunden.'},
      {de:'das Gehalt',         ru:'зарплата (оклад)',     ex:'Über das Gehalt sprechen wir im zweiten Gespräch.'},
      {de:'der Arbeitgeber',    ru:'работодатель',         ex:'Mein zukünftiger Arbeitgeber sitzt in Zürich.'},
      {de:'die Probezeit',      ru:'испытательный срок',   ex:'Die Probezeit dauert sechs Monate.'},
      {de:'unbefristet',        ru:'бессрочный',           ex:'Es handelt sich um einen unbefristeten Vertrag.'},
      {de:'die Kündigung',      ru:'увольнение, расторжение', ex:'Er hat seine Kündigung fristgerecht eingereicht.'},
    ],
    gramHTML:`
      <h3>Höflich bleiben: Konjunktiv II</h3>
      <p>Im Vorstellungsgespräch klingen direkte Sätze schnell unhöflich. Mit dem <b>Konjunktiv II</b> wirken Bitten und Aussagen weicher.</p>
      <table>
        <tr><th>direkt</th><th>höflich (Konjunktiv II)</th></tr>
        <tr><td>Können Sie …?</td><td>Könnten Sie mir bitte sagen …?</td></tr>
        <tr><td>Ich will mehr wissen.</td><td>Ich würde gern mehr erfahren.</td></tr>
        <tr><td>Ich habe eine Frage.</td><td>Ich hätte eine Frage.</td></tr>
        <tr><td>Ist das möglich?</td><td>Wäre das möglich?</td></tr>
      </table>
      <div class="ex-box"><b>Ich würde gern mehr über die Aufgaben erfahren.</b><span class="gl">Я хотел бы узнать больше о задачах.</span></div>
      <div class="tip"><b>Merke:</b> <b>würde</b> + Infinitiv geht mit fast allen Verben. <b>hätte, wäre, könnte</b> direkt verwenden.</div>`,
    exercises:[
      {id:'l1e1',type:'mc',q:'Welcher Satz klingt am höflichsten?',
       options:['Sagen Sie mir das Gehalt.','Könnten Sie mir bitte das Gehalt nennen?','Ich will das Gehalt wissen.'],
       answer:1,explain:'„Könnten" (KII) + „bitte" ist die höfliche Standardform für Bitten.'},
      {id:'l1e2',type:'gap',q:'„___ Sie mir bitte den Vertrag zuschicken?"',
       accept:['könnten','koennten'],hint:'Konjunktiv II von „können", formell.',explain:'Könnten'},
      {id:'l1e3',type:'order',q:'Bilde eine höfliche Aussage:',
       words:['Ich','hätte','noch','eine','Frage','zum','Gehalt'],answer:'Ich hätte noch eine Frage zum Gehalt'},
      {id:'l1e4',type:'match',q:'Ordne zu:',pairs:[['der Lebenslauf','резюме'],['die Kündigung','увольнение'],['einstellen','нанимать'],['unbefristet','бессрочный']]},
    ]
  },
  {
    id:'l2', tag:'Telefonieren', title:'Telefonieren am Arbeitsplatz',
    desc:'Sich melden, verbinden, Nachrichten hinterlassen — mit Redemitteln und indirekten Fragen.',
    vocab:[
      {de:'sich melden',          ru:'отвечать, представляться',   ex:'Müller, Marketing – guten Tag, was kann ich für Sie tun?'},
      {de:'verbinden (mit)',       ru:'соединять (с)',               ex:'Ich verbinde Sie mit Herrn Klein.'},
      {de:'zurückrufen',          ru:'перезвонить',                 ex:'Herr Klein ruft Sie in einer Stunde zurück.'},
      {de:'die Durchwahl',        ru:'добавочный номер',            ex:'Meine Durchwahl ist die 214.'},
      {de:'besetzt',              ru:'занято',                      ex:'Die Leitung ist gerade besetzt.'},
      {de:'etwas ausrichten',     ru:'передать сообщение',          ex:'Kann ich ihm etwas ausrichten?'},
      {de:'eine Nachricht hinterlassen', ru:'оставить сообщение',  ex:'Möchten Sie eine Nachricht hinterlassen?'},
      {de:'erreichen',            ru:'дозвониться, застать',        ex:'Unter welcher Nummer kann ich Sie erreichen?'},
      {de:'das Anliegen',         ru:'вопрос, дело, обращение',    ex:'Worum geht es? Mein Anliegen ist kurz.'},
      {de:'buchstabieren',        ru:'произносить по буквам',       ex:'Könnten Sie Ihren Namen bitte buchstabieren?'},
      {de:'der Anrufbeantworter', ru:'автоответчик',                ex:'Sie sprechen mit dem Anrufbeantworter.'},
      {de:'die Rückrufnummer',    ru:'номер для обратного звонка',  ex:'Hinterlassen Sie bitte Ihre Rückrufnummer.'},
    ],
    gramHTML:`
      <h3>Indirekte Fragen am Telefon</h3>
      <p>Statt einer direkten Frage benutzt man am Telefon oft eine eingeleitete Frage — das Verb rutscht ans <b>Satzende</b>.</p>
      <table>
        <tr><th>direkt</th><th>höflich / indirekt</th></tr>
        <tr><td>Wann ruft er zurück?</td><td>Könnten Sie mir sagen, wann er zurückruft?</td></tr>
        <tr><td>Ist Frau Berg da?</td><td>Ich wollte fragen, ob Frau Berg da ist.</td></tr>
        <tr><td>Wie ist Ihr Name?</td><td>Dürfte ich fragen, wie Ihr Name ist?</td></tr>
      </table>
      <div class="tip"><b>Achtung:</b> Nach „… ob / wann / wie …" steht das konjugierte Verb ganz hinten.</div>
      <h3>Redemittel</h3>
      <div class="ex-box"><b>Melden:</b> „[Firma/Name], guten Tag." &nbsp;|&nbsp; <b>Verbinden:</b> „Einen Moment, ich verbinde."</div>
      <div class="ex-box"><b>Nicht erreichbar:</b> „Er ist gerade nicht am Platz. Kann ich etwas ausrichten?"</div>`,
    exercises:[
      {id:'l2e1',type:'mc',q:'Der Kollege ist nicht da. Was sagst du höflich?',
       options:['Er ist weg. Rufen Sie später an.','Er ist gerade nicht am Platz. Kann ich etwas ausrichten?','Keine Ahnung, wo er ist.'],
       answer:1,explain:'„nicht am Platz" + „etwas ausrichten" ist die professionelle Formel.'},
      {id:'l2e2',type:'gap',q:'„Könnten Sie mir sagen, wann Herr Klein ___?" (zurückrufen)',
       accept:['zurückruft','zurueckruft'],hint:'Indirekte Frage → Verb ans Ende.',explain:'zurückruft'},
      {id:'l2e3',type:'gap',q:'„Möchten Sie eine Nachricht ___?"',
       accept:['hinterlassen'],hint:'feste Wendung „eine Nachricht …".',explain:'hinterlassen'},
      {id:'l2e4',type:'order',q:'Bilde die indirekte Frage:',
       words:['Ich','wollte','fragen','ob','der','Termin','noch','steht'],answer:'Ich wollte fragen ob der Termin noch steht'},
      {id:'l2e5',type:'match',q:'Ordne zu:',pairs:[['verbinden','соединять'],['besetzt','занято'],['ausrichten','передать'],['die Durchwahl','добавочный номер']]},
    ]
  },
  {
    id:'l3', tag:'Korrespondenz', title:'Geschäftliche E-Mails',
    desc:'Anrede, Betreff, Anhang und formelle Standardformeln — plus formeller Stil mit Passiv.',
    vocab:[
      {de:'die Anrede',        ru:'обращение',              ex:'Die Anrede lautet „Sehr geehrte Damen und Herren".'},
      {de:'der Betreff',       ru:'тема письма',             ex:'Im Betreff steht der Grund der E-Mail.'},
      {de:'der Anhang',        ru:'вложение',                ex:'Den Vertrag finden Sie im Anhang.'},
      {de:'beigefügt',         ru:'прилагаемый',             ex:'Beigefügt erhalten Sie die Rechnung.'},
      {de:'sich beziehen auf', ru:'ссылаться на',            ex:'Ich beziehe mich auf Ihre E-Mail vom 3. Mai.'},
      {de:'zusenden',          ru:'высылать, направлять',   ex:'Wir senden Ihnen die Unterlagen umgehend zu.'},
      {de:'die Rückmeldung',   ru:'обратная связь, ответ', ex:'Ich freue mich auf Ihre Rückmeldung.'},
      {de:'die Frist',         ru:'срок',                    ex:'Die Frist endet am Freitag.'},
      {de:'umgehend',          ru:'незамедлительно',         ex:'Wir bearbeiten Ihre Anfrage umgehend.'},
      {de:'mit freundlichen Grüßen', ru:'с уважением (концовка)', ex:'Mit freundlichen Grüßen, Anna Berg.'},
      {de:'die Anfrage',       ru:'запрос',                  ex:'Vielen Dank für Ihre Anfrage.'},
    ],
    gramHTML:`
      <h3>Formeller Stil: Passiv</h3>
      <p>In geschäftlichen E-Mails wirkt das <b>Passiv</b> sachlich und unpersönlich.</p>
      <div class="ex-box"><b>Ihre Anfrage wird umgehend bearbeitet.</b><span class="gl">Ваш запрос будет незамедлительно обработан.</span></div>
      <div class="ex-box"><b>Die Unterlagen wurden Ihnen bereits zugesandt.</b><span class="gl">Документы вам уже были высланы.</span></div>
      <h3>Fester Aufbau</h3>
      <table>
        <tr><th>Teil</th><th>Formel</th></tr>
        <tr><td>Anrede</td><td>Sehr geehrte Frau Berg, / Sehr geehrte Damen und Herren,</td></tr>
        <tr><td>Bezug</td><td>vielen Dank für Ihre E-Mail vom …</td></tr>
        <tr><td>Schluss</td><td>Mit freundlichen Grüßen</td></tr>
      </table>
      <div class="tip"><b>Tipp:</b> Nach der Anrede mit Komma geht es <b>klein</b> weiter: „… Damen und Herren, <b>v</b>ielen Dank …"</div>`,
    exercises:[
      {id:'l3e1',type:'mc',q:'Welche Anrede ist formell korrekt, wenn der Name unbekannt ist?',
       options:['Hallo zusammen,','Sehr geehrte Damen und Herren,','Liebe Leute,'],
       answer:1,explain:'Bei unbekanntem Empfänger ist „Sehr geehrte Damen und Herren," Standard.'},
      {id:'l3e2',type:'gap',q:'Passiv-Präsens: „Ihre Anfrage ___ umgehend bearbeitet."',
       accept:['wird'],hint:'werden, 3. Person Singular.',explain:'wird'},
      {id:'l3e3',type:'gap',q:'„Ich ___ mich auf Ihre E-Mail vom 3. Mai."',
       accept:['beziehe'],hint:'sich beziehen auf …',explain:'beziehe'},
      {id:'l3e4',type:'order',q:'Bilde den Satz (Passiv Perfekt):',
       words:['Die','Unterlagen','sind','Ihnen','bereits','zugesandt','worden'],answer:'Die Unterlagen sind Ihnen bereits zugesandt worden'},
      {id:'l3e5',type:'match',q:'Ordne zu:',pairs:[['der Betreff','тема письма'],['der Anhang','вложение'],['die Frist','срок'],['die Rückmeldung','обратная связь']]},
    ]
  },
  {
    id:'l4', tag:'Meetings', title:'Besprechungen & Verhandlungen',
    desc:'Vorschläge machen, zustimmen, ablehnen und argumentieren mit Konnektoren.',
    vocab:[
      {de:'die Tagesordnung',  ru:'повестка дня',        ex:'Punkt eins der Tagesordnung ist das Budget.'},
      {de:'der Vorschlag',     ru:'предложение',         ex:'Ich möchte einen Vorschlag machen.'},
      {de:'vorschlagen',       ru:'предлагать',          ex:'Ich würde vorschlagen, dass wir den Termin verschieben.'},
      {de:'zustimmen',         ru:'соглашаться',         ex:'Da stimme ich Ihnen voll zu.'},
      {de:'ablehnen',          ru:'отклонять',           ex:'Diesen Vorschlag müssen wir leider ablehnen.'},
      {de:'der Kompromiss',    ru:'компромисс',          ex:'Wir sollten einen Kompromiss finden.'},
      {de:'sich einigen auf',  ru:'договориться о',      ex:'Wir haben uns auf einen Termin geeinigt.'},
      {de:'der Standpunkt',    ru:'точка зрения',        ex:'Ich verstehe Ihren Standpunkt.'},
      {de:'einwenden',         ru:'возражать',           ex:'Dagegen möchte ich etwas einwenden.'},
      {de:'das Protokoll',     ru:'протокол',            ex:'Wer schreibt heute das Protokoll?'},
      {de:'abstimmen über',    ru:'голосовать о',        ex:'Wir stimmen jetzt über den Antrag ab.'},
      {de:'das Ergebnis',      ru:'результат',           ex:'Fassen wir das Ergebnis kurz zusammen.'},
    ],
    gramHTML:`
      <h3>Vorschläge höflich formulieren</h3>
      <p>Mit <b>Konjunktiv II</b> klingt ein Vorschlag wie eine Einladung, nicht wie ein Befehl.</p>
      <div class="ex-box"><b>Wir könnten den Termin verschieben.</b> / <b>Ich würde vorschlagen, dass …</b></div>
      <h3>Argumentieren mit Konnektoren</h3>
      <table>
        <tr><th>Funktion</th><th>Konnektor</th><th>Wortstellung</th></tr>
        <tr><td>Grund</td><td>weil, da</td><td>Verb ans Ende</td></tr>
        <tr><td>Folge</td><td>deshalb, deswegen</td><td>Inversion</td></tr>
        <tr><td>Gegensatz</td><td>obwohl / trotzdem</td><td>KS / Inversion</td></tr>
        <tr><td>Abwägen</td><td>einerseits … andererseits …</td><td>normal</td></tr>
      </table>
      <div class="ex-box"><b>Einerseits ist es teurer, andererseits sparen wir Zeit.</b></div>
      <div class="tip"><b>Merke:</b> Nach <b>deshalb</b> folgt Inversion: „Das spart Zeit, <b>deshalb</b> stimme ich zu."</div>`,
    exercises:[
      {id:'l4e1',type:'mc',q:'Wie machst du einen höflichen Vorschlag?',
       options:['Verschiebt den Termin!','Wir könnten den Termin verschieben.','Wir verschieben.'],
       answer:1,explain:'„könnten" (KII) macht den Vorschlag höflich und offen.'},
      {id:'l4e2',type:'gap',q:'„Das spart Zeit, ___ stimme ich zu." (Folge)',
       accept:['deshalb','deswegen','darum'],hint:'Konnektor der Folge + Inversion.',explain:'deshalb'},
      {id:'l4e3',type:'gap',q:'„Wir haben uns ___ einen früheren Termin geeinigt."',
       accept:['auf'],hint:'sich einigen + Präposition.',explain:'auf'},
      {id:'l4e4',type:'order',q:'Wäge ab:',
       words:['Einerseits','ist','es','teurer','andererseits','sparen','wir','Zeit'],answer:'Einerseits ist es teurer andererseits sparen wir Zeit'},
      {id:'l4e5',type:'match',q:'Ordne zu:',pairs:[['der Vorschlag','предложение'],['ablehnen','отклонять'],['der Kompromiss','компромисс'],['abstimmen','голосовать']]},
    ]
  },
];

/* ============================================================
   STATE & PERSISTENCE (localStorage)
============================================================ */
const STORE_KEY = 'db2-progress-v1';

const state = {
  view:'dashboard', lesson:null, tab:'vocab', deck:'all',
  xp:0, completed:new Set(), known:new Set(),
  personal:[],
  order:{}, match:{},
  flash:{queue:[],pos:0,flipped:false,deckId:null},
  quiz:null,
  pdf:{doc:null,page:1,scale:1.3,name:'',rendering:false},
};

function loadState(){
  try{
    const s = JSON.parse(localStorage.getItem(STORE_KEY)||'{}');
    state.xp           = s.xp||0;
    state.completed    = new Set(s.completed||[]);
    state.known        = new Set(s.known||[]);
    state.personal     = s.personal||[];
  }catch(e){}
}
let _saveTimer=null;
function save(){
  clearTimeout(_saveTimer);
  _saveTimer=setTimeout(()=>{
    try{ localStorage.setItem(STORE_KEY, JSON.stringify({
      xp:state.xp, completed:[...state.completed],
      known:[...state.known], personal:state.personal
    })); }catch(e){}
  },200);
}

/* ============================================================
   HELPERS
============================================================ */
const $ = s => document.querySelector(s);
const content = $('#content');
const shuffle = a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const esc = s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const norm = s=>s.toLowerCase().trim().replace(/\s+/g,' ').replace(/[.,!?]+$/,'');
const lessonById = id=>COURSE.find(l=>l.id===id);
const cleanWord = w=>w.replace(/\s*\(.*?\)/,'').replace(/^(der|die|das)\s+/i,'');
function lessonPct(l){const d=l.exercises.filter(e=>state.completed.has(e.id)).length;return{done:d,total:l.exercises.length,pct:Math.round(d/l.exercises.length*100)};}

let _voices=[];
function loadVoices(){_voices=window.speechSynthesis?speechSynthesis.getVoices():[];}
if(window.speechSynthesis){loadVoices();speechSynthesis.onvoiceschanged=loadVoices;}
function speak(text){
  if(!window.speechSynthesis)return;
  const u=new SpeechSynthesisUtterance(text);u.lang='de-DE';u.rate=.92;
  const dv=_voices.find(v=>/^de/i.test(v.lang));if(dv)u.voice=dv;
  speechSynthesis.cancel();speechSynthesis.speak(u);
}
function syncXP(){$('#xp').textContent=state.xp;$('#lvl').textContent=Math.floor(state.xp/100)+1;}
function awardXP(exId,pts){if(state.completed.has(exId))return;state.completed.add(exId);state.xp+=pts;syncXP();save();}

const ICONS={
  dashboard:'<svg viewBox="0 0 24 24"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></svg>',
  book:'<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  course:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>',
  cards:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="13" height="15" rx="2"/><path d="M8 5l5-2 7 2-2 13"/></svg>',
  star:'<svg viewBox="0 0 24 24"><path d="M12 2l2.6 6.4L21 9l-5 4.3L17.5 21 12 17l-5.5 4L8 13.3 3 9l6.4-.6z"/></svg>',
  test:'<svg viewBox="0 0 24 24"><path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/></svg>',
};
const SPK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a7 7 0 0 1 0 14.14"/></svg>';

/* ============================================================
   NAV & ROUTER
============================================================ */
function renderNav(){
  const items=[['dashboard','Übersicht','dashboard'],['reader','Lehrbuch PDF','book'],['course','Kurs','course'],['vocab','Vokabeltrainer','cards'],['personal','Meine Vokabeln','star'],['quiz','Test','test']];
  $('#nav').innerHTML=items.map(([v,l,ic])=>
    `<button class="navitem ${state.view===v?'active':''}" data-action="nav" data-view="${v}"><span class="ic">${ICONS[ic]}</span>${l}</button>`).join('');
}
function render(){
  renderNav();
  const v=state.view;
  if(v==='dashboard')renderDashboard();
  else if(v==='reader')renderReader();
  else if(v==='course')renderCourseList();
  else if(v==='lesson')renderLesson();
  else if(v==='vocab')renderVocabTrainer();
  else if(v==='personal')renderPersonal();
  else if(v==='quiz')renderQuiz();
  if(v!=='reader')content.scrollTo({top:0,behavior:'instant'});
}

/* ============================================================
   DASHBOARD
============================================================ */
function renderDashboard(){
  const totalEx=COURSE.reduce((s,l)=>s+l.exercises.length,0);
  const cards=COURSE.map((l,i)=>{const p=lessonPct(l);return `<button class="lesson-card" data-action="open-lesson" data-id="${l.id}">
    <span class="idx">${i+1}</span><span class="tag">${l.tag}</span>
    <h3>${l.title}</h3><div class="desc">${l.desc}</div>
    <div class="meta"><span>${l.vocab.length} Vokabeln</span><span>${l.exercises.length} Übungen</span></div>
    <div class="bar-track"><div class="bar-fill ${p.pct===100?'done':''}" style="width:${p.pct}%"></div></div>
    <span class="pct">${p.pct===100?'✓ abgeschlossen':p.pct+'% erledigt'}</span></button>`;}).join('');
  content.innerHTML=`<div class="page view">
    <div class="hero"><div class="eyebrow">Berufliches Deutsch · Niveau B2</div>
    <h1>Willkommen zurück, <em>Anton</em>.</h1>
    <p>Öffne dein Lehrbuch direkt im Browser, lern Wortschatz mit Aussprache und festige die Grammatik. Fortschritt wird automatisch gespeichert.</p></div>
    <div class="stat-row">
      <div class="stat"><div class="v">${state.xp}</div><div class="l">XP</div></div>
      <div class="stat"><div class="v">${state.completed.size}/${totalEx}</div><div class="l">Übungen</div></div>
      <div class="stat"><div class="v">${state.known.size}</div><div class="l">Vokabeln</div></div>
      <div class="stat"><div class="v">${state.personal.length}</div><div class="l">Eigene Wörter</div></div>
    </div>
    <div class="section-label"><h2>Einheiten</h2><div class="rule"></div><div class="count">${COURSE.length} Lektionen</div></div>
    <div class="grid">${cards}</div>
    <div class="btn-row" style="margin-top:24px">
      <button class="btn" data-action="nav" data-view="reader">📖 Lehrbuch öffnen</button>
      <button class="btn ghost" data-action="nav" data-view="personal">＋ Eigene Vokabel</button>
    </div></div>`;
}

/* ============================================================
   PDF READER  (browser File API)
============================================================ */
function renderReader(){
  const hasDoc=!!state.pdf.doc;
  content.innerHTML=`<div class="reader view">
    <div class="reader-bar">
      <span class="fname">${hasDoc?esc(state.pdf.name):'Kein Lehrbuch geöffnet'}</span>
      <div class="grp">
        <button class="btn sm" data-action="pdf-open" style="gap:6px">📂 PDF öffnen</button>
      </div>
      ${hasDoc?`<div class="grp">
        <button class="iconbtn" data-action="pdf-prev">‹</button>
        <input class="pagenum" id="pageInput" value="${state.pdf.page}" type="number" min="1" max="${state.pdf.doc.numPages}">
        <span class="hint" style="white-space:nowrap">/ ${state.pdf.doc.numPages}</span>
        <button class="iconbtn" data-action="pdf-next">›</button>
        <span style="width:6px"></span>
        <button class="iconbtn" data-action="pdf-zoomout" title="Verkleinern">−</button>
        <button class="iconbtn" data-action="pdf-zoomin" title="Vergrößern">＋</button>
      </div>`:''}
    </div>
    ${hasDoc
      ?`<div class="reader-canvas-wrap"><canvas id="pdfCanvas"></canvas></div>`
      :`<div class="reader-empty">
          <div class="big">Dein Lehrbuch — hier drin.</div>
          <p>Klicke auf „PDF öffnen" und wähle deine PDF-Datei. Sie wird lokal in deinem Browser geöffnet — es wird nichts hochgeladen.</p>
          <button class="btn" data-action="pdf-open">📂 PDF auswählen …</button>
          <p class="note">Die PDF bleibt nur für diese Sitzung geladen. Beim nächsten Öffnen der Seite einfach erneut auswählen.</p>
        </div>`}
  </div>`;
  if(hasDoc) renderPdfPage();
}

function triggerPdfOpen(){$('#pdfFileInput').click();}

async function loadPdfData(arrayBuffer, name){
  try{
    state.pdf.name=name;
    const task=pdfjsLib.getDocument({data:arrayBuffer});
    state.pdf.doc=await task.promise;
    state.pdf.page=1; state.pdf.scale=1.3;
    renderReader();
  }catch(e){console.error('pdf load',e);alert('Die PDF konnte nicht geladen werden.');}
}

async function renderPdfPage(){
  const d=state.pdf; if(!d.doc||d.rendering)return;
  d.rendering=true;
  try{
    const page=await d.doc.getPage(d.page);
    const vp=page.getViewport({scale:d.scale});
    const canvas=$('#pdfCanvas'); if(!canvas){d.rendering=false;return;}
    const ctx=canvas.getContext('2d');
    const r=window.devicePixelRatio||1;
    canvas.width=vp.width*r; canvas.height=vp.height*r;
    canvas.style.width=vp.width+'px'; canvas.style.height=vp.height+'px';
    ctx.setTransform(r,0,0,r,0,0);
    await page.render({canvasContext:ctx,viewport:vp}).promise;
  }catch(e){console.error('render',e);}
  d.rendering=false;
}
function pdfGo(delta){const d=state.pdf;if(!d.doc)return;const n=Math.min(Math.max(1,d.page+delta),d.doc.numPages);if(n!==d.page){d.page=n;const i=$('#pageInput');if(i)i.value=n;renderPdfPage();}}
function pdfSetPage(n){const d=state.pdf;if(!d.doc)return;d.page=Math.min(Math.max(1,n|0),d.doc.numPages);const i=$('#pageInput');if(i)i.value=d.page;renderPdfPage();}
function pdfZoom(f){state.pdf.scale=Math.min(3,Math.max(.5,+(state.pdf.scale+f).toFixed(2)));renderPdfPage();}

/* file input handler */
$('#pdfFileInput').addEventListener('change', async e=>{
  const file=e.target.files[0]; if(!file)return;
  e.target.value='';
  const data=await file.arrayBuffer();
  await loadPdfData(data, file.name);
  state.view='reader';
});

/* ============================================================
   COURSE & LESSON
============================================================ */
function renderCourseList(){
  const cards=COURSE.map((l,i)=>{const p=lessonPct(l);return `<button class="lesson-card" data-action="open-lesson" data-id="${l.id}">
    <span class="idx">${i+1}</span><span class="tag">${l.tag}</span>
    <h3>${l.title}</h3><div class="desc">${l.desc}</div>
    <div class="meta"><span>${l.vocab.length} Vokabeln</span><span>${l.exercises.length} Übungen</span></div>
    <div class="bar-track"><div class="bar-fill ${p.pct===100?'done':''}" style="width:${p.pct}%"></div></div>
    <span class="pct">${p.pct===100?'✓ abgeschlossen':p.pct+'% erledigt'}</span></button>`;}).join('');
  content.innerHTML=`<div class="page view"><div class="hero"><div class="eyebrow">Kurs</div><h1>Die Einheiten</h1>
    <p>Wortschatz mit Aussprache, Grammatik-Erklärung und Übungen mit sofortiger Korrektur.</p></div>
    <div class="grid">${cards}</div></div>`;
}
function renderLesson(){
  const l=lessonById(state.lesson);
  const tabs=[['vocab','Wortschatz'],['grammar','Grammatik'],['exercises','Übungen']];
  content.innerHTML=`<div class="page view">
    <button class="back" data-action="nav" data-view="course">← Zurück</button>
    <div class="lesson-head"><span class="tag">${l.tag}</span><h1>${l.title}</h1><p>${l.desc}</p></div>
    <div class="tabs">${tabs.map(([t,lab])=>`<button class="tab ${state.tab===t?'active':''}" data-action="lesson-tab" data-tab="${t}">${lab}</button>`).join('')}</div>
    <div id="tabbody"></div></div>`;
  renderTab(l);
}
function renderTab(l){
  const b=$('#tabbody');
  if(state.tab==='vocab'){
    b.innerHTML=l.vocab.map((v,i)=>`<div class="vocab-item">
      <button class="spk" data-action="speak" data-text="${esc(cleanWord(v.de))}">${SPK}</button>
      <div><div class="de">${v.de}</div>
      <div class="ru" id="rv-${l.id}-${i}" style="display:none">${v.ru}</div>
      <button class="reveal-btn" data-action="reveal" data-target="rv-${l.id}-${i}">Übersetzung</button>
      <div class="ex">„${v.ex}"</div></div></div>`).join('')
      +`<div class="btn-row"><button class="btn ghost" data-action="study-deck" data-id="${l.id}">Als Karteikarten üben →</button></div>`;
  }else if(state.tab==='grammar'){
    b.innerHTML=`<div class="gram">${l.gramHTML}</div>`;
  }else{
    b.innerHTML=l.exercises.map(renderEx).join('');
    l.exercises.forEach(setupEx);
  }
}

/* ============================================================
   EXERCISES
============================================================ */
function exHead(ex,n){const d=state.completed.has(ex.id);
  const t={mc:'Mehrfachauswahl',gap:'Lückentext',order:'Satzbau',match:'Zuordnung'};
  return `<div class="kicker"><span>Übung ${n} · ${t[ex.type]}</span>${d?'<span class="done-badge">✓ +10 XP</span>':''}</div>`;}
function renderEx(ex,i){const n=i+1;
  if(ex.type==='mc')return `<div class="ex" id="ex-${ex.id}">${exHead(ex,n)}<div class="q">${ex.q}</div>
    <div id="opts-${ex.id}">${ex.options.map((o,j)=>`<button class="opt" data-action="mc" data-ex="${ex.id}" data-opt="${j}">${o}</button>`).join('')}</div>
    <div class="feedback" id="fb-${ex.id}"></div></div>`;
  if(ex.type==='gap')return `<div class="ex" id="ex-${ex.id}">${exHead(ex,n)}<div class="q">${ex.q}</div>
    <div class="btn-row"><input class="gap-input" id="inp-${ex.id}" placeholder="Antwort …" autocomplete="off">
    <button class="btn" data-action="check-gap" data-ex="${ex.id}">Prüfen</button><span class="hint">${ex.hint||''}</span></div>
    <div class="feedback" id="fb-${ex.id}"></div></div>`;
  if(ex.type==='order')return `<div class="ex" id="ex-${ex.id}">${exHead(ex,n)}<div class="q">${ex.q}</div>
    <div class="answer-line" id="ans-${ex.id}"></div><div class="bank" id="bank-${ex.id}"></div>
    <div class="btn-row"><button class="btn" data-action="check-order" data-ex="${ex.id}">Prüfen</button>
    <button class="btn ghost" data-action="reset-order" data-ex="${ex.id}">Reset</button></div>
    <div class="feedback" id="fb-${ex.id}"></div></div>`;
  if(ex.type==='match')return `<div class="ex" id="ex-${ex.id}">${exHead(ex,n)}<div class="q">${ex.q}</div>
    <div class="match-grid" id="match-${ex.id}"></div><div class="feedback" id="fb-${ex.id}"></div></div>`;
  return '';
}
function setupEx(ex){
  if(ex.type==='order'){if(!state.order[ex.id])state.order[ex.id]={placed:[],bank:shuffle(ex.words.map((w,i)=>({w,i})))};drawOrder(ex);}
  if(ex.type==='match'){if(!state.match[ex.id])state.match[ex.id]={selLeft:null,done:new Set(),right:shuffle(ex.pairs.map((p,i)=>({txt:p[1],i})))};drawMatch(ex);}
}
const exById=id=>lessonById(state.lesson).exercises.find(e=>e.id===id);
function drawOrder(ex){const st=state.order[ex.id];const a=$('#ans-'+ex.id),b=$('#bank-'+ex.id);if(!a||!b)return;
  a.innerHTML=st.placed.map(t=>`<button class="chip" data-action="order-remove" data-ex="${ex.id}" data-i="${t.i}">${t.w}</button>`).join('')
    ||'<span class="hint" style="align-self:center">Wörter der Reihe nach antippen …</span>';
  b.innerHTML=st.bank.map(t=>`<button class="chip" data-action="order-add" data-ex="${ex.id}" data-i="${t.i}">${t.w}</button>`).join('');}
function orderAdd(id,i){const st=state.order[id];const k=st.bank.findIndex(t=>t.i==i);if(k<0)return;const[t]=st.bank.splice(k,1);st.placed.push(t);drawOrder(exById(id));}
function orderRem(id,i){const st=state.order[id];const k=st.placed.findIndex(t=>t.i==i);if(k<0)return;const[t]=st.placed.splice(k,1);st.bank.push(t);drawOrder(exById(id));}
function checkOrder(id){const ex=exById(id);const st=state.order[id];const fb=$('#fb-'+id);
  if(norm(st.placed.map(t=>t.w).join(' '))===norm(ex.answer)){fb.className='feedback show ok';fb.innerHTML='✓ Richtig! <span class="sol">'+ex.answer+'.</span>';awardXP(id,10);markDone(id);speak(ex.answer);}
  else{fb.className='feedback show no';fb.innerHTML='Noch nicht ganz — achte auf die Wortstellung.';}}
function drawMatch(ex){const st=state.match[ex.id];const w=$('#match-'+ex.id);if(!w)return;
  const left=ex.pairs.map((p,i)=>`<button class="match-item de ${st.done.has(i)?'matched':''} ${st.selLeft===i?'sel':''}" data-action="match-left" data-ex="${ex.id}" data-i="${i}" ${st.done.has(i)?'disabled':''}>${p[0]}</button>`).join('');
  const right=st.right.map(r=>`<button class="match-item ${st.done.has(r.i)?'matched':''}" data-action="match-right" data-ex="${ex.id}" data-i="${r.i}" ${st.done.has(r.i)?'disabled':''}>${r.txt}</button>`).join('');
  w.innerHTML=`<div class="match-col">${left}</div><div class="match-col">${right}</div>`;}
function matchL(id,i){const st=state.match[id];if(st.done.has(i))return;st.selLeft=(st.selLeft===i?null:i);drawMatch(exById(id));}
function matchR(id,i){const ex=exById(id);const st=state.match[id];if(st.selLeft===null)return;
  if(st.selLeft===i){st.done.add(i);st.selLeft=null;drawMatch(ex);
    if(st.done.size===ex.pairs.length){const f=$('#fb-'+id);f.className='feedback show ok';f.innerHTML='✓ Alle Paare richtig!';awardXP(id,10);markDone(id);}}
  else{const w=$('#match-'+id);w.querySelectorAll('[data-action="match-right"]').forEach(b=>{if(b.dataset.i==i){b.classList.add('flash');setTimeout(()=>b.classList.remove('flash'),400);}});st.selLeft=null;setTimeout(()=>drawMatch(ex),150);}}
function answerMC(id,opt){const ex=exById(id);const w=$('#opts-'+id);const f=$('#fb-'+id);const b=w.querySelectorAll('.opt');
  b.forEach((x,i)=>{x.disabled=true;if(i===ex.answer)x.classList.add('correct');});
  if(opt===ex.answer){f.className='feedback show ok';f.innerHTML='✓ Richtig! '+ex.explain;awardXP(id,10);markDone(id);speak(ex.options[ex.answer]);}
  else{b[opt].classList.add('wrong');f.className='feedback show no';f.innerHTML='Leider falsch. '+ex.explain;}}
function checkGap(id){const ex=exById(id);const inp=$('#inp-'+id);const f=$('#fb-'+id);const val=norm(inp.value);if(!val){inp.focus();return;}
  if(ex.accept.map(norm).includes(val)){inp.classList.remove('wrong');inp.classList.add('correct');inp.disabled=true;f.className='feedback show ok';f.innerHTML='✓ Richtig!';awardXP(id,10);markDone(id);speak(ex.accept[0]);}
  else{inp.classList.remove('correct');inp.classList.add('wrong');f.className='feedback show no';f.innerHTML='Nicht ganz. Lösung: <span class="sol">'+ex.explain+'</span>';}}
function markDone(id){const k=$('#ex-'+id+' .kicker');if(k&&!k.querySelector('.done-badge'))k.insertAdjacentHTML('beforeend','<span class="done-badge">✓ +10 XP</span>');}

/* ============================================================
   VOCAB TRAINER (flashcards)
============================================================ */
function allWords(){const o=[];COURSE.forEach(l=>l.vocab.forEach(v=>o.push({...v,key:l.id+'·'+v.de})));return o;}
function deckWords(){
  if(state.deck==='all')return allWords();
  if(state.deck==='personal')return state.personal.map(p=>({de:p.de,ru:p.ru,ex:p.ex||'',key:'p·'+p.id}));
  const l=lessonById(state.deck);return l?l.vocab.map(v=>({...v,key:l.id+'·'+v.de})):[];
}
function buildDeck(){state.flash={queue:shuffle(deckWords()),pos:0,flipped:false,deckId:state.deck};}
function renderVocabTrainer(){
  const picks=[['all','Alle'],['personal','Meine Wörter']].concat(COURSE.map(l=>[l.id,l.tag]));
  if(!state.flash.queue.length||state.flash.deckId!==state.deck)buildDeck();
  content.innerHTML=`<div class="page view">
    <div class="hero" style="margin-bottom:20px"><div class="eyebrow">Vokabeltrainer</div><h1>Karteikarten</h1>
    <p>Karte antippen zum Umdrehen. „Kann ich" bringt +5 XP und Aussprache zum Abhören.</p></div>
    <div class="deck-pick">${picks.map(([id,lab])=>`<button class="${state.deck===id?'active':''}" data-action="deck" data-id="${id}">${lab}</button>`).join('')}</div>
    <div id="flash-area"></div></div>`;
  drawFlash();
}
function drawFlash(){const area=$('#flash-area');const f=state.flash;
  if(!f.queue.length){area.innerHTML=`<div class="empty-state">Stapel leer. Füge unter „Meine Vokabeln" eigene Wörter hinzu.</div>`;return;}
  if(f.pos>=f.queue.length){area.innerHTML=`<div class="deck-done"><div class="big">Geschafft! 🎉</div><p>Alle Karten durch!</p><button class="btn" data-action="deck" data-id="${state.deck}">Neu mischen</button></div>`;return;}
  const c=f.queue[f.pos];
  area.innerHTML=`<div class="flash-wrap"><div class="flash-progress">Karte ${f.pos+1} / ${f.queue.length}</div>
    <div class="flashcard" data-action="flip">
      <button class="spk" data-action="speak" data-text="${esc(cleanWord(c.de))}">${SPK}</button>
      ${f.flipped?`<span class="side-tag">Übersetzung</span><div class="ru">${esc(c.ru)}</div>${c.ex?`<div class="ex">„${esc(c.ex)}"</div>`:''}`
                 :`<span class="side-tag">Deutsch</span><div class="word">${esc(c.de)}</div><div class="flip-hint">Tippen zum Umdrehen →</div>`}
    </div>
    <div class="flash-controls"><button class="btn again" data-action="flash-again">Nochmal</button>
    <button class="btn know" data-action="flash-know">Kann ich ✓</button></div></div>`;}
function flashFlip(){state.flash.flipped=!state.flash.flipped;drawFlash();}
function flashNext(known){const f=state.flash;const c=f.queue[f.pos];
  if(known){if(!state.known.has(c.key)){state.known.add(c.key);state.xp+=5;syncXP();save();}}else f.queue.push(c);
  f.pos++;f.flipped=false;drawFlash();}

/* ============================================================
   MEINE VOKABELN
============================================================ */
function renderPersonal(){
  const list=state.personal.length?state.personal.map(p=>`<div class="vocab-item">
    <button class="spk" data-action="speak" data-text="${esc(cleanWord(p.de))}">${SPK}</button>
    <div><div class="de">${esc(p.de)}</div><div class="ru">${esc(p.ru)}</div>${p.ex?`<div class="ex">„${esc(p.ex)}"</div>`:''}</div>
    <button class="del" data-action="del-personal" data-id="${p.id}" title="Löschen">✕</button></div>`).join('')
    :`<div class="empty-state">Noch keine eigenen Wörter. Trag oben Begriffe aus dem Lehrbuch ein.</div>`;
  content.innerHTML=`<div class="page view">
    <div class="hero" style="margin-bottom:20px"><div class="eyebrow">Mein Wortschatz</div><h1>Meine Vokabeln</h1>
    <p>Neue Wörter aus dem Lehrbuch eintragen — sie landen im Vokabeltrainer unter „Meine Wörter".</p></div>
    <div class="addbar">
      <input id="p-de" placeholder="Deutsches Wort">
      <input id="p-ru" placeholder="Übersetzung">
      <input id="p-ex" placeholder="Beispielsatz (optional)">
      <button class="btn" data-action="add-personal">＋ Hinzufügen</button>
    </div>
    <div class="section-label"><h2>Gespeichert</h2><div class="rule"></div><div class="count">${state.personal.length} Wörter</div></div>
    ${list}</div>`;
}
function addPersonal(){
  const de=$('#p-de').value.trim(),ru=$('#p-ru').value.trim(),ex=$('#p-ex').value.trim();
  if(!de||!ru){$('#p-de').focus();return;}
  state.personal.unshift({id:Date.now().toString(36),de,ru,ex});
  save();renderPersonal();
}
function delPersonal(id){state.personal=state.personal.filter(p=>p.id!==id);save();renderPersonal();}

/* ============================================================
   TEST / QUIZ
============================================================ */
const QUIZ=[
  {q:'„___ Sie mir bitte helfen?" (höflich)',o:['Können','Könnten','Kann'],a:1},
  {q:'Der Kollege ist nicht da — was sagst du?',o:['Er ist weg.','Kann ich etwas ausrichten?','Rufen Sie nie wieder an.'],a:1},
  {q:'„Könnten Sie sagen, wann er ___?"',o:['zurückruft','zurückrufen','ruft zurück'],a:0},
  {q:'Formelle Anrede ohne Namen:',o:['Hallo zusammen,','Sehr geehrte Damen und Herren,','Hi,'],a:1},
  {q:'Passiv: „Ihre Anfrage ___ bearbeitet."',o:['wird','ist','hat'],a:0},
  {q:'Perfekt-Passiv: „… zugesandt ___."',o:['geworden','worden','werden'],a:1},
  {q:'Höflicher Vorschlag:',o:['Verschiebt den Termin!','Wir könnten den Termin verschieben.','Wir verschieben.'],a:1},
  {q:'„Das spart Zeit, ___ stimme ich zu."',o:['weil','deshalb','obwohl'],a:1},
  {q:'„Ich beziehe ___ auf Ihre E-Mail."',o:['mir','mich','sich'],a:1},
  {q:'„Wir haben uns ___ einen Termin geeinigt."',o:['auf','über','für'],a:0},
];
function renderQuiz(){
  if(!state.quiz){content.innerHTML=`<div class="page view"><div class="hero" style="max-width:540px">
    <div class="eyebrow">Abschlusstest</div><h1>Bist du bereit?</h1>
    <p>${QUIZ.length} Fragen aus allen Einheiten — Grammatik und Redemittel. Sofortiges Feedback.</p></div>
    <div class="btn-row"><button class="btn" data-action="quiz-start">Test starten →</button></div></div>`;return;}
  const q=state.quiz;if(q.i>=QUIZ.length){renderQuizResult();return;}
  const item=QUIZ[q.i];
  content.innerHTML=`<div class="page view"><button class="back" data-action="quiz-quit">← Abbrechen</button>
    <div class="quiz-progress"><div class="f" style="width:${q.i/QUIZ.length*100}%"></div></div>
    <div style="font-size:13px;color:var(--ink-faint);font-weight:600;margin-bottom:10px">Frage ${q.i+1} / ${QUIZ.length} · ${q.score} richtig</div>
    <div class="ex" style="max-width:600px"><div class="quiz-q">${item.q}</div>
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
  const msg=pct>=80?'Stark! Sicheres B2-Niveau.':pct>=50?'Solide — wiederhol die schwächeren Einheiten.':'Guter Anfang — geh die Grammatik nochmal durch.';
  const r=251.2,off=r-(r*pct/100);
  content.innerHTML=`<div class="page view" style="max-width:480px;margin:0 auto;text-align:center">
    <div class="eyebrow" style="color:var(--accent);letter-spacing:.22em;text-transform:uppercase;font-size:11px;font-weight:700;margin-bottom:16px">Ergebnis</div>
    <div class="result-ring"><svg viewBox="0 0 90 90" width="140" height="140"><circle cx="45" cy="45" r="40" fill="none" stroke="var(--paper-2)" stroke-width="8"/>
    <circle cx="45" cy="45" r="40" fill="none" stroke="var(--accent)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${r}" stroke-dashoffset="${off}" transform="rotate(-90 45 45)"/></svg>
    <div class="pctn">${pct}%</div></div>
    <h1 class="serif" style="font-weight:900;font-size:30px">${sc} von ${tot} richtig</h1>
    <p style="color:var(--ink-soft);margin:12px 0 6px">${msg}</p>
    <p style="color:var(--green);font-weight:600">+${gained} XP</p>
    <div class="btn-row" style="justify-content:center;margin-top:22px">
      <button class="btn" data-action="quiz-restart">Nochmal</button>
      <button class="btn ghost" data-action="nav" data-view="dashboard">Zur Übersicht</button>
    </div></div>`;
}

/* ============================================================
   EVENT DELEGATION
============================================================ */
document.body.addEventListener('click',e=>{
  const t=e.target.closest('[data-action]');if(!t)return;
  const a=t.dataset.action;
  switch(a){
    case 'nav': state.view=t.dataset.view; render(); break;
    case 'open-lesson': state.lesson=t.dataset.id; state.tab='vocab'; state.view='lesson'; render(); break;
    case 'lesson-tab': state.tab=t.dataset.tab; renderTab(lessonById(state.lesson)); document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.tab===state.tab)); break;
    case 'study-deck': state.deck=t.dataset.id; state.view='vocab'; render(); break;
    case 'reveal': $('#'+t.dataset.target).style.display='block'; t.style.display='none'; break;
    case 'speak': speak(t.dataset.text); break;
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
    case 'reset-order': delete state.order[t.dataset.ex]; setupEx(exById(t.dataset.ex)); $('#fb-'+t.dataset.ex).className='feedback'; break;
    case 'match-left': matchL(t.dataset.ex,+t.dataset.i); break;
    case 'match-right': matchR(t.dataset.ex,+t.dataset.i); break;
    case 'deck': state.deck=t.dataset.id; buildDeck(); renderVocabTrainer(); break;
    case 'flip': flashFlip(); break;
    case 'flash-again': flashNext(false); break;
    case 'flash-know': flashNext(true); break;
    case 'add-personal': addPersonal(); break;
    case 'del-personal': delPersonal(t.dataset.id); break;
    case 'quiz-start': state.quiz={i:0,score:0,awarded:false}; renderQuiz(); break;
    case 'quiz-ans': quizAnswer(+t.dataset.opt); break;
    case 'quiz-quit': state.quiz=null; state.view='dashboard'; render(); break;
    case 'quiz-restart': state.quiz={i:0,score:0,awarded:false}; renderQuiz(); break;
  }
});
document.body.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&e.target.classList.contains('gap-input')) checkGap(e.target.id.replace('inp-',''));
  if(e.key==='Enter'&&['p-de','p-ru','p-ex'].includes(e.target.id)) addPersonal();
  if(e.target.id==='pageInput'&&(e.key==='Enter'||e.key==='Tab')) pdfSetPage(+e.target.value);
});

/* ============================================================
   INIT
============================================================ */
loadState();
syncXP();
render();
