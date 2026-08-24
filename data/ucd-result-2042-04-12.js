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

  const fixtureId='2042-04-12-ucd-finn-harps-premier-division';
  const reportId='2042-04-12-ucd-finn-harps-1-5-spielbericht';

  const match={
    id:fixtureId,date:'2042-04-12',season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'ucd',name:'UCD',short:'UCD',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:5},
    score:'1:5',homeGoals:1,awayGoals:5,halfTime:'0:1',
    venue:'UCD Bowl',location:'Dublin, Irland',attendance:2705,awayFans:300,weather:'Starker Wind · feucht · 12 °C',referee:'Dean McGee',
    headline:'Andere Gesichter, gleiche Wucht: Rotierte Harps schlagen UCD 5:1',
    verdict:'Zwischen den beiden Champions-League-Viertelfinals gegen Manchester City rotiert Finn Harps deutlich und bleibt dennoch klar überlegen. Dom Docherty öffnet das Spiel vor der Pause, Fionn Gavin trifft nach Wiederbeginn doppelt, ein Eigentor und Ben Barry machen den Fünferpack komplett. 20:7 Schüsse, 8:3 aufs Tor, 3,11:0,41 xG und 60 Prozent Ballbesitz unterstreichen, dass auch die zweite Reihe den nationalen Auftrag souverän erfüllt. Der Wermutstropfen ist Billy Walkers Knieverletzung: Der 20-Jährige fällt voraussichtlich fünf bis sechs Wochen aus.',
    scorers:[
      {player:'Dom Docherty',team:'Finn Harps',goals:1,minutes:[21]},
      {player:'Fionn Gavin',team:'Finn Harps',goals:2,minutes:[56,63]},
      {player:'John Gibson',team:'UCD',goals:1,minutes:[70]},
      {player:'Karsten König',team:'UCD',goals:1,minutes:[72],ownGoal:true},
      {player:'Ben Barry',team:'Finn Harps',goals:1,minutes:[74]}
    ],
    events:[
      {minute:12,type:'yellow',team:'UCD',player:'Callum McGroary',text:'Gelbe Karte'},
      {minute:21,type:'goal',team:'Finn Harps',player:'Dom Docherty',text:'0:1'},
      {minute:29,type:'yellow',team:'Finn Harps',player:'Amir Mašić',text:'Gelbe Karte'},
      {minute:30,type:'yellow',team:'UCD',player:'Karsten König',text:'Gelbe Karte'},
      {minute:'45+7',type:'injury',team:'Finn Harps',player:'Billy Walker',text:'Bänderdehnung im Knie · muss ausgewechselt werden'},
      {minute:56,type:'goal',team:'Finn Harps',player:'Fionn Gavin',text:'0:2'},
      {minute:63,type:'goal',team:'Finn Harps',player:'Fionn Gavin',text:'0:3'},
      {minute:70,type:'goal',team:'UCD',player:'John Gibson',text:'1:3'},
      {minute:72,type:'own-goal',team:'UCD',player:'Karsten König',text:'1:4 · Eigentor'},
      {minute:74,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'1:5'}
    ],
    stats:[
      {label:'Schüsse',home:7,away:20,kind:'number'},
      {label:'Schüsse aufs Tor',home:3,away:8,kind:'number'},
      {label:'xG',home:0.41,away:3.11,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:4,away:5,kind:'number'},
      {label:'Großchancen',home:0,away:1,kind:'number'},
      {label:'Ballbesitz',home:40,away:60,kind:'percent'},
      {label:'Ecken',home:6,away:9,kind:'number'},
      {label:'Fouls',home:12,away:12,kind:'number'},
      {label:'Angekommene Pässe',home:'339/413',away:'517/609',kind:'text'},
      {label:'Passquote',home:82,away:85,kind:'percent'},
      {label:'Gewonnene Zweikämpfe',home:50,away:89,kind:'percent'},
      {label:'Gewonnene Kopfbälle',home:59,away:40,kind:'percent'},
      {label:'Gelbe Karten',home:2,away:2,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:6.41,away:7.25,kind:'decimal'},
      {label:'Intensive Sprints',home:100,away:128,kind:'number'}
    ],
    ratings:{
      'Evan Reilly':6.8,'Gustavo da Silva':7.2,'Daniele Di Maio':7.1,'Mark Kenny':6.7,'Callum Rainey':6.7,
      'Amir Mašić':7.4,'Fionn Gavin':8.3,'Jake Roberts':6.8,'Billy Walker':6.6,'Dom Docherty':7.6,
      'Ben Barry':8.4,'Pol Muñoz':8.9,"Jim O'Neill":6.8,'Romano Maisto':7.0
    },
    standout:{player:'Pol Muñoz',team:'Finn Harps',rating:8.9,assists:2,note:'Kommt zur Pause und prägt den zweiten Durchgang mit zwei Vorlagen; höchste Harps-Note.'},
    rotation:{
      context:'Drei Tage nach dem 1:0 gegen Manchester City und wenige Tage vor dem Champions-League-Viertelfinal-Rückspiel im Etihad Stadium.',
      notableFaces:['Evan Reilly','Mark Kenny','Callum Rainey','Fionn Gavin','Billy Walker'],
      note:'Flannigan verteilt vor dem City-Rückspiel die Minuten deutlich. Mehrere Spieler aus der zweiten Reihe starten, ohne dass Kontrolle oder Offensivproduktion einbrechen.'
    },
    injuries:[
      {player:'Billy Walker',injury:'Bänderdehnung im Knie',date:'2042-04-12',expectedAbsence:'5–6 Wochen',context:'Bei einem Tackling gegen UCD verletzt.'},
      {player:"Cormac O'Kane",injury:'Knieverdrehung',date:'2042-04-09',remainingAbsence:'1–4 Tage'},
      {player:'Justin Ramsey',injury:'Knöchelverdrehung',date:'2042-04-04',remainingAbsence:'6 Tage–3 Wochen'},
      {player:'Graham Varma',injury:'Verhärtung der Oberschenkelvorderseite',date:'2042-04-11',remainingAbsence:'1–2 Tage'}
    ],
    leagueAfterMatch:{played:11,wins:9,draws:0,losses:2,goalsFor:32,goalsAgainst:4,goalDifference:28,points:27,position:1},
    analysis:{
      depth:'Der auffälligste Befund ist nicht das 5:1 selbst, sondern wer es produziert. Mark Kenny, Callum Rainey und Fionn Gavin gehören zu den ungewohnteren Gesichtern in der Startelf. Trotzdem bleibt Finn Harps bei 60 Prozent Ballbesitz, 20 Abschlüssen und 3,11 xG klar dominant.',
      gavin:'Fionn Gavin nutzt seine Chance maximal. Seine Treffer in der 56. und 63. Minute verwandeln das knappe 1:0 in eine komfortable Führung; mit Note 8,3 gehört er zu den besten Spielern des Abends.',
      munoz:'Pol Muñoz kommt zur Pause und liefert zwei Vorlagen. Mit 8,9 erhält er die höchste Harps-Bewertung und zeigt, wie viel Qualität trotz Rotation noch von der Bank kommt.',
      barry:'Ben Barry setzt seine starke Phase fort und erzielt in Minute 74 das 5:1. Selbst in einer veränderten Mannschaft bleibt der 18-Jährige unmittelbar produktiv.',
      cleanSheetEnded:'John Gibsons Treffer zum zwischenzeitlichen 1:3 beendet Evan Reillys Serie nach 367 Minuten ohne Gegentor.',
      walker:'Der Sieg bekommt einen klaren Schatten: Billy Walker erleidet bei einem Tackling eine Bänderdehnung im Knie. Die medizinische Prognose liegt bei fünf bis sechs Wochen Ausfallzeit, womit er für die unmittelbare Champions-League-Phase nicht zur Verfügung steht.',
      city:'Sportlich erfüllt die Rotation ihren Zweck: Leistungsträger bekommen Luft, die zweite Reihe gewinnt klar, und Finn Harps reist mit zwei Siegen in Folge sowie einem 1:0-Vorsprung zum Rückspiel gegen Manchester City.'
    },
    notes:[
      'Finn Harps gewinnt bei UCD 5:1 und steht nach elf Ligaspielen bei 27 Punkten und 32:4 Toren.',
      'Deutliche Rotation vor dem Champions-League-Rückspiel gegen Manchester City.',
      'Fionn Gavin erzielt einen Doppelpack.',
      'Pol Muñoz liefert nach seiner Einwechslung zwei Vorlagen und erhält mit 8,9 die beste Harps-Note.',
      'Ben Barry trifft erneut.',
      'Evan Reillys Serie endet nach 367 Minuten ohne Gegentor.',
      'Billy Walker erleidet eine Bänderdehnung im Knie und fällt voraussichtlich fünf bis sechs Wochen aus.'
    ],
    sources:['FM-Spielübersicht UCD – Finn Harps · 12.04.2042','Finn-Harps-Spielerstatistiken · 12.04.2042','FM-Medizinbericht Billy Walker · 12.04.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-04-12','15:00','UCD','Auswärts','1:5','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[2]==='UCD'&&x[5]==='Premier Division'&&['2042-04-11','2042-04-12'].includes(x[0]));
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const ucd=window.FM_CLUBS.find(x=>x.id==='ucd'||x.name==='UCD');
  if(ucd){
    ucd.meetings=ucd.meetings||[];
    const meeting={date:'12.04.2042',competition:'Premier Division',venue:'H',result:'1:5'};
    const idx=ucd.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)ucd.meetings[idx]=meeting;else ucd.meetings.unshift(meeting);
    ucd.lastMeeting='12.04.2042 · UCD 1:5 Finn Harps';
    ucd.summary='UCD verliert im Bowl 1:5 gegen eine deutlich rotierte Harps-Elf. Gavin trifft doppelt, Docherty und Barry ebenfalls; ein Eigentor komplettiert das Ergebnis.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-04-12';
    season.latestHeadline='Premier Division: Rotierte Finn Harps gewinnen bei UCD 5:1. Fionn Gavin trifft doppelt, Pol Muñoz liefert zwei Vorlagen; Billy Walker fällt fünf bis sechs Wochen aus.';
    season.league=season.league||{};
    season.league.current={played:11,wins:9,draws:0,losses:2,goalsFor:32,goalsAgainst:4,goalDifference:28,points:27,position:1};
    season.nextFocus={competition:'UEFA Champions League',stage:'Viertelfinale · Rückspiel',opponent:'Manchester City',venue:'Etihad Stadium',aggregate:'1:0 für Finn Harps',status:'Nach erfolgreicher Rotation weiter alles offen'};
    season.injuries=season.injuries||[];
    const injury={player:'Billy Walker',date:'2042-04-12',injury:'Bänderdehnung im Knie',absence:'5–6 Wochen'};
    const ii=season.injuries.findIndex(x=>x.player===injury.player&&x.date===injury.date);
    if(ii>=0)season.injuries[ii]=injury;else season.injuries.push(injury);
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='12.04.2042: Mit deutlicher Rotation gewinnt Finn Harps bei UCD 5:1. Docherty trifft vor der Pause, Gavin doppelt, ein Eigentor und Barry sorgen für fünf Treffer; Pol Muñoz liefert nach seiner Einwechslung zwei Vorlagen. Billy Walker erleidet eine Bänderdehnung im Knie und fällt voraussichtlich fünf bis sechs Wochen aus. Als Nächstes wartet das Champions-League-Rückspiel bei Manchester City bei 1:0 Gesamtstand.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-04-12-fionn-gavin-ucd-doppelpack',date:'2042-04-12',player:'Fionn Gavin',type:'standout',title:'Gavin nutzt die Rotation mit Doppelpack',detail:'Trifft in Minute 56 und 63 beim 5:1 gegen UCD und erhält die Note 8,3.'},
    {id:'2042-04-12-pol-munoz-ucd',date:'2042-04-12',player:'Pol Muñoz',type:'standout',title:'Muñoz liefert zwei Vorlagen von der Bank',detail:'Kommt zur Pause, bereitet zwei Treffer vor und erhält mit 8,9 die beste Harps-Note.'},
    {id:'2042-04-12-ben-barry-ucd',date:'2042-04-12',player:'Ben Barry',type:'goal',title:'Barry trifft auch in der Rotation',detail:'Erzielt in der 74. Minute das 5:1.'},
    {id:'2042-04-12-billy-walker-injury',date:'2042-04-12',player:'Billy Walker',type:'injury',title:'Walker fällt mehrere Wochen aus',detail:'Bänderdehnung im Knie nach Tackling gegen UCD; prognostizierte Ausfallzeit fünf bis sechs Wochen.'},
    {id:'2042-04-12-evan-reilly-streak-ended',date:'2042-04-12',player:'Evan Reilly',type:'streak-ended',title:'Reillys Serie endet nach 367 Minuten',detail:'John Gibson erzielt UCDs Ehrentreffer und beendet 367 Minuten ohne Gegentor.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-04-12',competition:'Premier Division',fixtureDate:'12.04.2042',
    home:'UCD',away:'Finn Harps',score:'1:5',location:'UCD Bowl · Dublin · 2.705 Zuschauer',
    headline:'Andere Gesichter, gleiche Antwort: Rotierte Harps schlagen UCD 5:1',
    subheadline:'Zwischen den City-Spielen verteilt Ryan Flannigan die Minuten und bekommt trotzdem eine dominante Vorstellung. Gavin trifft doppelt, Muñoz liefert zwei Vorlagen und Barry setzt den Schlusspunkt. Nur Billy Walkers Knieverletzung trübt die Generalprobe.',
    heroStat:{label:'Trotz Rotation',value:'20 Schüsse · 3,11 xG',note:'UCD 7 Schüsse · 0,41 xG · Endstand 1:5'},
    sections:[
      {title:'Rotation ohne Qualitätsbruch',text:'Mit Reilly, Kenny, Rainey, Gavin und Walker stehen mehrere Gesichter auf dem Platz, die gegen Manchester City nicht zur ersten Elf gehörten. An der Spielkontrolle ändert das wenig: 60 Prozent Ballbesitz, 20 Abschlüsse und 3,11 xG sprechen klar für Finn Harps.'},
      {title:'Docherty öffnet, Gavin übernimmt',text:'Dom Docherty erzielt in der 21. Minute das einzige Tor der ersten Halbzeit. Nach der Pause wird Fionn Gavin zur zentralen Figur: Seine Treffer in Minute 56 und 63 machen aus dem knappen Vorsprung ein 3:0.'},
      {title:'Muñoz kommt und beschleunigt alles',text:'Pol Muñoz wird zur Pause eingewechselt und liefert zwei Torvorlagen. Mit Note 8,9 ist er der beste Harps-Spieler des Nachmittags und zeigt, wie tief der Kader selbst mitten in der Champions-League-Woche besetzt ist.'},
      {title:'UCD trifft, Harps antwortet doppelt',text:'John Gibson verkürzt in der 70. Minute und beendet Evan Reillys Serie von 367 Minuten ohne Gegentor. Zwei Minuten später fällt durch Karsten Königs Eigentor das 1:4, Ben Barry erhöht in Minute 74 auf 1:5.'},
      {title:'Der Preis des Nachmittags heißt Billy Walker',text:'Billy Walker muss nach einem Tackling mit einer Bänderdehnung im Knie vom Platz. Der medizinische Bericht rechnet mit fünf bis sechs Wochen Pause. Damit verliert Finn Harps unmittelbar vor dem City-Rückspiel eine weitere Rotationsoption.'},
      {title:'Jetzt zurück nach Europa',text:'Der sportliche Plan geht dennoch auf: Stammkräfte werden entlastet, die zweite Reihe sammelt Selbstvertrauen und Finn Harps gewinnt klar. Mit dem 1:0 aus dem Hinspiel im Rücken führt der nächste Weg nun ins Etihad Stadium.'}
    ],
    verdictHeading:'Tiefe bewiesen, aber der Kader wird dünner',
    verdict:'Das 5:1 ist genau die Art von Ligaspiel, die ein Champions-League-Kandidat zwischen zwei K.-o.-Abenden braucht: kontrolliert, torreich und mit Belastungsverteilung. Dass Gavin, Muñoz, Docherty und Barry die Partie tragen, bestätigt die Kadertiefe. Walkers längerer Ausfall erinnert allerdings daran, dass diese Tiefe gerade tatsächlich gebraucht wird.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-04-12-ucd-finn-harps-1-5',date:'2042-04-12',season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · UCD 1:5 FINN HARPS',
    title:'Rotation funktioniert: Gavin-Doppelpack vor dem City-Rückspiel',
    summary:'Eine veränderte Harps-Elf gewinnt bei UCD 5:1. Fionn Gavin trifft doppelt, Pol Muñoz liefert zwei Vorlagen und Ben Barry trifft erneut. Billy Walker fällt mit einer Bänderdehnung im Knie fünf bis sechs Wochen aus.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','ucd','fionn-gavin','pol-munoz','ben-barry','billy-walker','season-2042']
  });
})();