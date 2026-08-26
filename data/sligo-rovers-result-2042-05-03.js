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

  const date='2042-05-03';
  const fixtureId='2042-05-03-sligo-rovers-finn-harps-premier-division';
  const reportId='2042-05-03-sligo-rovers-finn-harps-0-3-spielbericht';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'sligo-rovers',name:'Sligo Rovers',short:'SLI',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    score:'0:3',homeGoals:0,awayGoals:3,halfTime:'0:0',
    venue:"The Showgrounds' Stadium",location:'Sligo, Irland',attendance:4500,awayFans:226,weather:'Nieselregen · 19 °C',referee:'Callum Fallon',
    headline:'Ramsey trifft beim Comeback: Finn Harps gewinnen 3:0 in Sligo',
    verdict:'Finn Harps bleibt vor dem Champions-League-Rückspiel gegen Barcelona voll auf Kurs. Nach einer torlosen ersten Hälfte und Sligos Platzverweis in Minute 56 trifft Rückkehrer Justin Ramsey fünf Minuten später zum 1:0. Daryl Frame und Cormac O\'Kane machen den sechsten Ligasieg in Folge perfekt.',
    scorers:[
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[61]},
      {player:'Daryl Frame',team:'Finn Harps',goals:1,minutes:[79]},
      {player:"Cormac O'Kane",team:'Finn Harps',goals:1,minutes:[93]}
    ],
    events:[
      {minute:11,type:'yellow-card',team:'Sligo Rovers',player:'Garbhan Frahill'},
      {minute:43,type:'yellow-card',team:'Sligo Rovers',player:'Paul Armstrong-Aherne'},
      {minute:56,type:'red-card',team:'Sligo Rovers',player:'Garbhan Frahill',text:'Platzverweis nach zweiter Verwarnung'},
      {minute:58,type:'yellow-card',team:'Sligo Rovers',player:'Harry Hubbard'},
      {minute:61,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'0:1'},
      {minute:79,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'0:2'},
      {minute:'90+3',type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'0:3'}
    ],
    stats:[
      {label:'Schüsse',home:2,away:26,kind:'number'},
      {label:'Schüsse aufs Tor',home:1,away:13,kind:'number'},
      {label:'xG',home:0.26,away:2.82,kind:'decimal'},
      {label:'Großchancen',home:0,away:7,kind:'number'},
      {label:'Ballbesitz',home:25,away:75,kind:'percent'},
      {label:'Fouls',home:18,away:6,kind:'number'},
      {label:'Angekommene Pässe',home:'78% (229/294)',away:'90% (672/745)',kind:'text'}
    ],
    ratings:{
      'Paulo Henrique':7.7,'Callum Brennan':8.0,'Mareks Istrankins':7.8,'Torric Bruce':6.8,'Gustavo da Silva':7.3,
      "Jim O'Neill":7.2,'Ben Barry':6.8,'Jake Roberts':7.0,'Giacomo Papini':6.9,'Dom Docherty':6.6,
      'Justin Ramsey':7.9,'Pol Muñoz':8.2,'Romano Maisto':7.8,"Cormac O'Kane":7.7,'Daryl Frame':7.3,'Daniele Di Maio':6.9
    },
    standout:{player:'Pol Muñoz',team:'Finn Harps',rating:8.2,note:'Beste Harps-Note; prägt das Spiel aus dem Mittelfeld und wird in der Analyse mit 1,00 Expected Assists hervorgehoben.'},
    leagueAfterMatch:{played:15,wins:13,draws:0,losses:2,goalsFor:44,goalsAgainst:5,goalDifference:39,points:39,position:1},
    analysis:{
      ramsey:'Justin Ramsey nutzt seinen ersten Start nach der dreiwöchigen Verletzungspause sofort. Sein Treffer in Minute 61 bricht den Bann und ist ein starkes Signal vor dem Barcelona-Rückspiel.',
      patience:'Zur Pause steht es trotz klarer Überlegenheit noch 0:0. Nach Sligos Platzverweis erhöht Finn Harps kontrolliert den Druck und entscheidet das Spiel in der letzten halben Stunde.',
      dominance:'26:2 Schüsse, 13:1 aufs Tor, 2,82:0,26 xG und 75 Prozent Ballbesitz zeigen eine sehr klare Kräfteverteilung.',
      depth:'Daryl Frame und Cormac O\'Kane treffen nach Ramseys Führung ebenfalls. Damit kommen die Tore erneut aus mehreren Mannschaftsteilen.',
      barcelona:'Die Generalprobe vor dem Champions-League-Halbfinal-Rückspiel gegen Barcelona gelingt. Nach dem 0:0 im Camp Nou entscheidet das nächste Duell in Donegal über den Finaleinzug.'
    },
    milestones:[
      'Paulo Henrique bleibt seit 295 Minuten ohne Gegentor für Finn Harps.',
      'Mareks Istrankins absolviert sein 50. Ligaspiel seiner Karriere und für Finn Harps.',
      'Romano Maisto erreicht sein 175. Profispiel.'
    ],
    notes:[
      'Finn Harps gewinnt 3:0 bei Sligo Rovers.',
      'Justin Ramsey trifft in Minute 61 bei seinem Start nach der Verletzungspause.',
      'Daryl Frame trifft in Minute 79, Cormac O\'Kane in der 93. Minute.',
      'Sligo spielt ab Minute 56 nach dem Platzverweis von Garbhan Frahill in Unterzahl.',
      'Sechster Ligasieg in Folge.',
      'Finn Harps steht nach 15 Ligaspielen bei 39 Punkten und 44:5 Toren.',
      'Nächstes großes Ziel: Champions-League-Halbfinal-Rückspiel gegen Barcelona nach dem 0:0 im Hinspiel.'
    ],
    sources:['FM-Spielübersicht Sligo Rovers – Finn Harps · 03.05.2042','Finn-Harps-Spielerstatistiken · 03.05.2042','SPORTbible-Spielbericht · 03.05.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-05-03','15:00','Sligo Rovers','Auswärts','0:3','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&['Sligo Rovers','Sligo Rovers FC'].includes(x[2])&&x[5]==='Premier Division'&&x[0]===date);
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const sligo=window.FM_CLUBS.find(x=>x.id==='sligo-rovers'||x.name==='Sligo Rovers'||x.name==='Sligo Rovers FC');
  if(sligo){
    sligo.meetings=sligo.meetings||[];
    const meeting={date:'03.05.2042',competition:'Premier Division',venue:'A',result:'3:0'};
    const idx=sligo.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)sligo.meetings[idx]=meeting;else sligo.meetings.unshift(meeting);
    sligo.lastMeeting='03.05.2042 · Sligo Rovers 0:3 Finn Harps';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Premier Division: Finn Harps gewinnt 3:0 bei Sligo Rovers. Ramsey trifft bei seinem Start nach Verletzungspause, Frame und O\'Kane legen nach.';
    season.league=season.league||{};
    season.league.current={played:15,wins:13,draws:0,losses:2,goalsFor:44,goalsAgainst:5,goalDifference:39,points:39,position:1};
    season.nextFocus={competition:'UEFA Champions League',stage:'Halbfinale · Rückspiel',opponent:'Barcelona',status:'Nach 0:0 im Camp Nou entscheidet das Heimspiel über den Finaleinzug',form:'6 Ligasiege in Folge'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='03.05.2042: Finn Harps gewinnt die Generalprobe vor dem Barcelona-Rückspiel 3:0 bei Sligo Rovers. Ramsey trifft in Minute 61 bei seinem Start nach der Verletzungspause, Frame (79.) und O\'Kane (90+3) erhöhen. 26:2 Schüsse, 75 Prozent Ballbesitz, sechster Ligasieg in Folge. Liga: 15 Spiele, 39 Punkte, 44:5 Tore.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-05-03-ramsey-sligo-comeback-goal',date,player:'Justin Ramsey',type:'goal',title:'Ramsey trifft vor Barcelona',detail:'Bei seinem Start nach der dreiwöchigen Verletzungspause erzielt Ramsey in Minute 61 das 1:0 bei Sligo.'},
    {id:'2042-05-03-frame-sligo-goal',date,player:'Daryl Frame',type:'goal',title:'Frame legt in Sligo nach',detail:'Trifft in Minute 79 zum 2:0.'},
    {id:'2042-05-03-okane-sligo-goal',date,player:"Cormac O'Kane",type:'goal',title:"O'Kane setzt den Schlusspunkt",detail:'Erzielt in der 93. Minute das 3:0.'},
    {id:'2042-05-03-istrankins-50-league',date,player:'Mareks Istrankins',type:'milestone',title:'50 Ligaspiele für Istrankins',detail:'Erreicht gegen Sligo sein 50. Ligaspiel seiner Karriere und für Finn Harps.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'03.05.2042',
    headline:'Ramsey meldet sich zurück: Harps gewinnen Generalprobe 3:0',
    subheadline:'Nach einer torlosen ersten Hälfte öffnet ein Platzverweis die Partie. Justin Ramsey trifft bei seinem Start nach der Verletzungspause, Frame und O\'Kane machen den sechsten Ligasieg in Folge perfekt.',
    label:'PREMIER DIVISION · VOR BARCELONA-RÜCKSPIEL',
    heroStat:{label:'Schüsse',value:'26:2',note:'Finn Harps dominiert die Generalprobe in Sligo'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Vier Tage nach dem 0:0 im Camp Nou hält Finn Harps den nationalen Rhythmus hoch. Sligo verteidigt eine Halbzeit lang hartnäckig, doch nach dem Platzverweis von Garbhan Frahill kippt die Partie endgültig in Richtung des Tabellenführers.',
    sections:[
      {title:'Ramsey braucht nur fünf Minuten Überzahl',text:'Garbhan Frahill sieht in Minute 56 die zweite Verwarnung. Fünf Minuten später erzielt Justin Ramsey das 1:0. Für den 22-Jährigen ist es ein besonders wertvoller Treffer: Nach drei Wochen Verletzungspause sammelt er nicht nur Spielpraxis, sondern meldet sich unmittelbar vor dem Barcelona-Rückspiel auch als Torschütze zurück.'},
      {title:'Frame und O\'Kane machen es deutlich',text:'Daryl Frame erhöht in Minute 79 auf 2:0, ehe Cormac O\'Kane in der dritten Minute der Nachspielzeit den 3:0-Endstand herstellt. Wieder verteilt Finn Harps die entscheidenden Aktionen auf mehrere Mittelfeldspieler.'},
      {title:'Die Zahlen sind eindeutig',text:'Finn Harps gewinnt das Schussverhältnis 26:2 und die Torschüsse 13:1. Bei 75 Prozent Ballbesitz entstehen 2,82 xG und sieben Großchancen. Sligo kommt nur auf 0,26 xG.'},
      {title:'Jetzt zählt nur Barcelona',text:'Mit sechs Ligasiegen in Folge und 39 Punkten aus 15 Spielen geht Finn Harps mit maximalem nationalen Rückenwind in das entscheidende Champions-League-Halbfinale. Nach dem 0:0 im Camp Nou ist die Rechnung einfach: Ein Sieg in Donegal bedeutet Finale.'}
    ],
    verdictHeading:'Die Generalprobe sitzt',
    verdict:'Das Ergebnis ist weniger wichtig als die Signale dahinter: Ramsey ist wieder im Rhythmus, Frame trifft erneut, die Defensive hält die Null und die Mannschaft bleibt geduldig. Vor Barcelona wirkt Finn Harps weder überdreht noch müde, sondern bemerkenswert stabil.',
    sources:['FM-Spielübersicht Sligo Rovers – Finn Harps · 03.05.2042','Finn-Harps-Spielerstatistiken · 03.05.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-05-03-sligo-rovers-finn-harps-0-3',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'GENERALPROBE · 0:3',
    title:'Ramsey trifft, Harps bleiben vor Barcelona im Takt',
    summary:'Finn Harps gewinnt 3:0 in Sligo. Ramsey erzielt bei seinem Start nach der Verletzungspause das 1:0, Frame und O\'Kane treffen ebenfalls. Es ist der sechste Ligasieg in Folge.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','sligo-rovers','justin-ramsey','daryl-frame','cormac-okane','season-2042']
  });
})();