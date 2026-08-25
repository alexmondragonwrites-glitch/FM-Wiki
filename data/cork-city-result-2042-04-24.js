(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2042-04-24-cork-city-finn-harps-premier-division';
  const reportId='2042-04-24-cork-city-finn-harps-1-2-spielbericht';

  const match={
    id:fixtureId,date:'2042-04-24',season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'cork-city',name:'Cork City',short:'COR',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:2},
    score:'1:2',homeGoals:1,awayGoals:2,halfTime:'0:0',
    venue:'Turners Cross',location:'Cork, Irland',attendance:6996,awayFans:368,weather:'Windig · feucht · 9 °C',referee:"Mark O'Shea",
    headline:'Arbeitssieg in Cork: Frame und Maisto drehen das Mittelfeld auf',
    verdict:'Finn Harps gewinnt auch einen Abend, an dem nicht alles glänzt. Nach torloser erster Halbzeit bringt Daryl Frame die Harps unmittelbar nach Wiederbeginn in Führung. João Veloso gleicht per Elfmeter aus, doch Romano Maisto antwortet acht Minuten später mit dem 2:1. Bei 75 Prozent Ballbesitz, 19:7 Schüssen und 2,38:1,29 xG ist der Auswärtssieg verdient, auch wenn Cork die Partie lange offen hält.',
    scorers:[
      {player:'Daryl Frame',team:'Finn Harps',goals:1,minutes:[47]},
      {player:'João Veloso',team:'Cork City',goals:1,minutes:[65],penaltyMinutes:[65]},
      {player:'Romano Maisto',team:'Finn Harps',goals:1,minutes:[73]}
    ],
    events:[
      {minute:47,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'0:1'},
      {minute:65,type:'penalty-goal',team:'Cork City',player:'João Veloso',text:'1:1 · Elfmeter'},
      {minute:73,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'1:2'}
    ],
    stats:[
      {label:'Schüsse',home:7,away:19,kind:'number'},
      {label:'Schüsse aufs Tor',home:4,away:7,kind:'number'},
      {label:'xG',home:1.29,away:2.38,kind:'decimal'},
      {label:'Ballbesitz',home:25,away:75,kind:'percent'},
      {label:'Ecken',home:2,away:10,kind:'number'},
      {label:'Fouls',home:15,away:10,kind:'number'},
      {label:'Passquote',home:73,away:89,kind:'percent'}
    ],
    ratings:{
      'Paulo Henrique':6.8,'Diego Fernández':7.1,'Daniele Di Maio':6.7,'Mareks Istrankins':7.0,'Kevin Kelly':6.8,
      'Amir Mašić':6.7,'Daryl Frame':7.3,"Cormac O'Kane":7.2,'Giacomo Papini':7.4,'Dom Docherty':7.9,
      'Ben Barry':6.8,'Gustavo da Silva':6.9,'Pol Muñoz':6.7,'Romano Maisto':7.7,'Jake Roberts':6.6,'Emerson Escárcega':7.2
    },
    standout:{player:'Dom Docherty',team:'Finn Harps',rating:7.9,note:'Höchste Harps-Note in einem kontrollierten, aber glanzlosen Auswärtssieg.'},
    leagueAfterMatch:{played:13,wins:11,draws:0,losses:2,goalsFor:38,goalsAgainst:5,goalDifference:33,points:33,position:1},
    analysis:{
      patience:'Die erste Halbzeit bleibt torlos, obwohl Finn Harps den Ball klar kontrolliert. Nach der Pause fällt das 0:1 jedoch schon in Minute 47 durch Daryl Frame.',
      response:'Corks Ausgleich per Elfmeter bringt die Harps nicht aus dem Rhythmus. Romano Maisto stellt nur acht Minuten später die Führung wieder her.',
      midfield:'Bemerkenswert ist, dass beide Harps-Tore aus dem Mittelfeld beziehungsweise von offensiven Mittelfeldspielern kommen. Der Kader verteilt die Torgefahr weiterhin auf mehrere Schultern.',
      control:'75 Prozent Ballbesitz und 19:7 Abschlüsse zeigen die territoriale Dominanz. Mit 2,38 xG produziert Finn Harps genug Chancen für einen verdienten Sieg, auch wenn die Effizienz diesmal unter den vorherigen Galaauftritten liegt.',
      streak:'Nach den Niederlagen gegen Bohemian und Derry hat Finn Harps nun vier Ligaspiele in Folge gewonnen.',
      europe:'Mit 33 Punkten aus 13 Spielen bleibt Finn Harps Tabellenführer und hält die nationale Form unmittelbar vor dem Champions-League-Halbfinale gegen Barcelona hoch.'
    },
    notes:[
      'Finn Harps gewinnt bei Cork City 2:1.',
      'Daryl Frame trifft in Minute 47 zum 1:0.',
      'João Veloso gleicht in Minute 65 per Elfmeter aus.',
      'Romano Maisto erzielt in Minute 73 den Siegtreffer.',
      'Finn Harps dominiert den Ballbesitz mit 75 Prozent und die Schüsse mit 19:7.',
      'Vierter Ligasieg in Folge.',
      'Paulo Henriques Serie ohne Gegentor endet nach 299 Minuten.',
      'Dom Docherty absolviert sein 325. Profispiel.',
      'Gustavo da Silva absolviert sein 150. Profispiel.'
    ],
    sources:['FM-Spielübersicht Cork City – Finn Harps · 24.04.2042','Finn-Harps-Spielerstatistiken · 24.04.2042','GOAL · Spielbericht 24.04.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-04-24','19:45','Cork City','Auswärts','1:2','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[2]==='Cork City'&&x[5]==='Premier Division'&&x[0]==='2042-04-24');
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const cork=window.FM_CLUBS.find(x=>x.id==='cork-city'||x.name==='Cork City'||x.name==='Cork City FC');
  if(cork){
    cork.meetings=cork.meetings||[];
    const meeting={date:'24.04.2042',competition:'Premier Division',venue:'H',result:'1:2'};
    const idx=cork.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)cork.meetings[idx]=meeting;else cork.meetings.unshift(meeting);
    cork.lastMeeting='24.04.2042 · Cork City 1:2 Finn Harps';
    cork.summary='Cork City hält den Tabellenführer lange im Spiel, verliert am Ende aber 1:2. Veloso gleicht Frames Führung per Elfmeter aus, ehe Romano Maisto in Minute 73 den Harps-Sieg sicherstellt.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-04-24';
    season.latestHeadline='Premier Division: Finn Harps gewinnen bei Cork City 2:1. Frame und Maisto treffen beim vierten Ligasieg in Folge.';
    season.league=season.league||{};
    season.league.current={played:13,wins:11,draws:0,losses:2,goalsFor:38,goalsAgainst:5,goalDifference:33,points:33,position:1};
    season.nextFocus={competition:'UEFA Champions League',stage:'Halbfinale',opponent:'Barcelona',status:'Vier Ligasiege in Folge vor dem europäischen Halbfinale'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='24.04.2042: Finn Harps gewinnt bei Cork City 2:1. Frame trifft unmittelbar nach der Pause, Veloso gleicht per Elfmeter aus und Maisto erzielt in Minute 73 den Siegtreffer. Mit 75 Prozent Ballbesitz und 19:7 Schüssen bleibt der Sieg verdient. Nach 13 Spielen stehen die Harps bei 33 Punkten und 38:5 Toren.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-04-24-daryl-frame-cork',date:'2042-04-24',player:'Daryl Frame',type:'goal',title:'Frame eröffnet den Sieg in Cork',detail:'Trifft in Minute 47 zum 0:1.'},
    {id:'2042-04-24-romano-maisto-cork',date:'2042-04-24',player:'Romano Maisto',type:'goal',title:'Maisto entscheidet in Cork',detail:'Erzielt in Minute 73 den Treffer zum 2:1-Auswärtssieg; Note 7,7.'},
    {id:'2042-04-24-paulo-henrique-streak',date:'2042-04-24',player:'Paulo Henrique',type:'streak-ended',title:'Henriques Serie endet nach 299 Minuten',detail:'João Velosos Elfmeter beendet 299 Minuten ohne Gegentor.'},
    {id:'2042-04-24-dom-docherty-325',date:'2042-04-24',player:'Dom Docherty',type:'milestone',title:'Docherty erreicht 325 Profispiele',detail:'Erreicht beim 2:1 in Cork den nächsten Karrieremeilenstein.'},
    {id:'2042-04-24-gustavo-da-silva-150',date:'2042-04-24',player:'Gustavo da Silva',type:'milestone',title:'Da Silva bei 150 Profispielen',detail:'Absolviert in Cork sein 150. Spiel als Profi.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-04-24',competition:'Premier Division',fixtureDate:'24.04.2042',
    headline:'Kein Glanz nötig: Frame und Maisto sichern Harps den Sieg in Cork',
    subheadline:'Finn Harps gewinnt 2:1 bei Cork City. Nach torloser erster Hälfte treffen Frame und Maisto, während Veloso zwischenzeitlich per Elfmeter ausgleicht.',
    label:'PREMIER DIVISION · 13. SPIELTAG',
    heroStat:{label:'Ballbesitz',value:'75 %',note:'Finn Harps kontrolliert weite Teile des Abends am Turners Cross'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Nach den deutlichen Siegen gegen Manchester City und St Patrick’s muss Finn Harps in Cork diesmal arbeiten. Die Harps dominieren das Spiel, brauchen aber Geduld und eine Antwort auf den zwischenzeitlichen Ausgleich.',
    sections:[
      {title:'Frame bricht den Bann',text:'Nach einer torlosen ersten Hälfte trifft Daryl Frame unmittelbar nach Wiederbeginn. Der Mittelfeldspieler nutzt einen Fehler von João Veloso und bringt Finn Harps in Minute 47 in Führung.'},
      {title:'Cork kommt vom Punkt zurück',text:'In der 65. Minute gleicht João Veloso per Elfmeter aus. Gleichzeitig endet Paulo Henriques Serie nach 299 Minuten ohne Gegentor.'},
      {title:'Maisto antwortet sofort',text:'Nur acht Minuten nach dem 1:1 setzt Romano Maisto den entscheidenden Treffer. Sein kompromissloser Abschluss zum 1:2 verhindert, dass Cork aus dem Spiel noch Momentum entwickelt.'},
      {title:'Vier Siege in Serie',text:'Mit 33 Punkten aus 13 Spielen bleibt Finn Harps an der Tabellenspitze. Seit den beiden März-Niederlagen wurden vier Ligaspiele hintereinander gewonnen.'}
    ],
    verdictHeading:'Gewinnen, auch wenn es nicht funkelt',
    verdict:'Gerade vor dem Champions-League-Halbfinale gegen Barcelona ist dieser Sieg wertvoll. Finn Harps muss nicht jedes Spiel zerlegen, um drei Punkte mitzunehmen. Die Mannschaft kontrolliert, steckt den Ausgleich weg und findet die entscheidende Aktion.',
    sources:['FM-Spielübersicht Cork City – Finn Harps · 24.04.2042','Finn-Harps-Spielerstatistiken · 24.04.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-04-24-cork-city-finn-harps-1-2',date:'2042-04-24',season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 1:2',
    title:'Frame und Maisto sichern vierten Ligasieg in Folge',
    summary:'Finn Harps gewinnt 2:1 bei Cork City. Frame eröffnet nach der Pause, Maisto beantwortet den zwischenzeitlichen Elfmeter-Ausgleich und entscheidet das Spiel.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','cork-city','daryl-frame','romano-maisto','season-2042']
  });
})();