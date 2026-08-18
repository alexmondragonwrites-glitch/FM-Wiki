(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-12-11-real-sociedad-finn-harps-champions-league';
  const reportId='2041-12-11-real-sociedad-finn-harps-spielbericht';

  const match={
    id:fixtureId,date:'2041-12-11',season:2041,competition:'UEFA Champions League',stage:'Ligaphase · 6. Spieltag',
    home:{id:'real-sociedad',name:'Real Sociedad',short:'RSO',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    score:'0:1',homeGoals:0,awayGoals:1,halfTime:'0:1',
    venue:'Reale Arena',location:'San Sebastián, Spanien',attendance:39222,awayFans:612,capacity:39500,weather:'Windig · feucht · 14 °C',referee:'Nicht bekannt',pitch:'Perfekter Rasen',
    headline:'Ramsey entscheidet das Jahresfinale: Finn Harps gewinnt 1:0 bei Real Sociedad',
    verdict:'Finn Harps antwortet auf die 1:2-Niederlage in Barcelona mit einem kontrollierten 1:0-Auswärtssieg bei Real Sociedad. Justin Ramsey erzielt in der 31. Minute das einzige Tor. Die Harps produzieren 19 Abschlüsse, elf Schüsse aufs Tor und 1,73 xG, während Sociedad bei acht Abschlüssen und 0,44 xG bleibt.',
    scorers:[{player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[31]}],
    events:[
      {minute:9,type:'yellow',team:'Real Sociedad',player:'Diego Bellini',text:'Gelbe Karte'},
      {minute:31,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'0:1'}
    ],
    stats:[
      {label:'Schüsse',home:8,away:19,kind:'number'},
      {label:'Schüsse aufs Tor',home:2,away:11,kind:'number'},
      {label:'xG',home:0.44,away:1.73,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:5,away:7,kind:'number'},
      {label:'Großchancen',home:0,away:1,kind:'number'},
      {label:'Ballbesitz',home:41,away:59,kind:'percent'},
      {label:'Ecken',home:1,away:10,kind:'number'},
      {label:'Fouls',home:11,away:10,kind:'number'},
      {label:'Angekommene Pässe',home:385,away:558,kind:'number',homeDetail:'87 % · 385/445',awayDetail:'89 % · 558/626'},
      {label:'Gewonnene Zweikämpfe',home:61,away:64,kind:'percent',awayDetail:'14/22'},
      {label:'Gewonnene Kopfbälle',home:49,away:47,kind:'percent',homeDetail:'21/43',awayDetail:'21/45'},
      {label:'Gelbe Karten',home:1,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Durchschnittliche Bewertung',home:6.68,away:6.98,kind:'decimal'},
      {label:'Intensive Sprints',home:79,away:97,kind:'number'},
      {label:'Durchschnittliche Laufleistung',home:11.5,away:12.3,kind:'decimal',unit:'km'}
    ],
    championsLeagueAfterMatch:{position:3,played:6,wins:5,draws:0,losses:1,goalsFor:12,goalsAgainst:3,goalDifference:9,points:15,note:'Barcelona führt mit 16 Punkten; Inter und Finn Harps folgen mit jeweils 15 Punkten.'},
    tableSnapshot:[
      {position:1,team:'Barcelona',played:6,wins:5,draws:1,losses:0,goalsFor:12,goalsAgainst:3,goalDifference:9,points:16},
      {position:2,team:'Inter',played:6,wins:5,draws:0,losses:1,goalsFor:13,goalsAgainst:4,goalDifference:9,points:15},
      {position:3,team:'Finn Harps',played:6,wins:5,draws:0,losses:1,goalsFor:12,goalsAgainst:3,goalDifference:9,points:15},
      {position:4,team:'Roma',played:6,wins:4,draws:1,losses:1,goalsFor:15,goalsAgainst:5,goalDifference:10,points:13}
    ],
    standout:{player:'Callum Brennan',team:'Finn Harps',rating:7.6,note:'20 progressive Pässe; stärkste hervorgehobene Harps-Leistung.'},
    opponentStandout:{player:'Jocelyn Metz-Riehl',team:'Real Sociedad',rating:7.7,note:'Pariert laut Spielanalyse zehn Schüsse und hält Sociedad bis zum Schluss im Spiel.'},
    milestones:[{player:"Cormac O'Kane",text:'250. Einsatz für Finn Harps'}],
    analysis:{
      response:'Nach der ersten Champions-League-Niederlage des Jahres in Barcelona zeigt Finn Harps sofort eine stabile Reaktion und gewinnt das nächste schwere Auswärtsspiel.',
      control:'19:8 Schüsse, 11:2 aufs Tor, 1,73:0,44 xG und 59 Prozent Ballbesitz zeigen ein deutliches Chancen- und Kontrollplus der Harps.',
      winner:'Justin Ramsey erzielt in der 31. Minute das einzige Tor. Die Matchanalyse bewertet seinen gesamten Offensiv-Einfluss zwar als begrenzt, doch genau sein Abschluss entscheidet die Partie.',
      defensiveWork:'Darcy Andrews wird in der Matchanalyse als der Harps-Spieler mit den meisten Ballrückeroberungen hervorgehoben. Sociedad erzeugt keine Großchance.',
      finishing:'Dass es trotz elf Schüssen aufs Tor nur 1:0 endet, liegt auch an Jocelyn Metz-Riehl, der laut Hervorhebung zehn Paraden sammelt.',
      yearEnd:'Mit diesem Sieg endet das Pflichtspieljahr 2041 für Finn Harps. In der Champions-League-Ligaphase steht die Mannschaft nach sechs Spielen bei 15 Punkten und 12:3 Toren auf Rang drei.'
    },
    sources:['FM-Spielübersicht Real Sociedad – Finn Harps · 11.12.2041','Spielerstatistiken Real Sociedad – Finn Harps · 11.12.2041','Champions-League-Tabelle nach dem 6. Spieltag · 11.12.2041']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const sociedad=window.FM_CLUBS.find(x=>x.id==='real-sociedad');
  if(sociedad){
    sociedad.meetings=sociedad.meetings||[];
    const meeting={date:'11.12.2041',venue:'A',result:'0:1',competition:'UEFA Champions League · Ligaphase'};
    const idx=sociedad.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)sociedad.meetings[idx]=meeting;else sociedad.meetings.push(meeting);
    sociedad.summary='Finn Harps gewinnt am 11. Dezember 2041 in der Reale Arena mit 1:0. Justin Ramsey erzielt in der 31. Minute das einzige Tor; die Harps führen bei Schüssen 19:8 und beim xG 1,73:0,44.';
    sociedad.lastMeeting='11.12.2041 · Real Sociedad 0:1 Finn Harps';
    sociedad.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Ramsey entscheidet das Jahresfinale in San Sebastián'};
  }

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...current,season:'2041/42',format:'Ligaphase',
    standingsSnapshot:{
      ...(current.standingsSnapshot||{}),date:'2041-12-11',
      finnHarps:{position:3,played:6,wins:5,draws:0,losses:1,goalsFor:12,goalsAgainst:3,goalDifference:9,points:15}
    },
    latestResult:{date:'2041-12-11',home:'Real Sociedad',away:'Finn Harps',score:'0:1'},
    headline:'Finn Harps beendet das Kalenderjahr mit einem 1:0 bei Real Sociedad und steht nach sechs Ligaphasen-Spielen mit 15 Punkten auf Rang drei.'
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-12-11';
    season.latestHeadline='Champions League: Finn Harps gewinnt zum Abschluss des Kalenderjahres 1:0 bei Real Sociedad.';
    season.championsLeagueLeaguePhase={
      ...(season.championsLeagueLeaguePhase||{}),played:6,wins:5,draws:0,losses:1,goalsFor:12,goalsAgainst:3,goalDifference:9,points:15,position:3,
      latestResult:'11.12.2041 · Real Sociedad 0:1 Finn Harps'
    };
    season.changes=season.changes||{notes:[]};
    const note='11.12.2041: Finn Harps beendet das Pflichtspieljahr mit einem 1:0 bei Real Sociedad. Justin Ramsey trifft in Minute 31; die Harps stehen nach sechs Champions-League-Spielen bei 15 Punkten und 12:3 Toren auf Rang drei.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-12-11-justin-ramsey-real-sociedad-winner',date:'2041-12-11',player:'Justin Ramsey',type:'goal',title:'Siegtreffer zum Jahresabschluss',detail:'Erzielt in der 31. Minute das einzige Tor beim 1:0-Auswärtssieg gegen Real Sociedad.'},
    {id:'2041-12-11-cormac-okane-250-harps',date:'2041-12-11',player:"Cormac O'Kane",type:'milestone',title:'250 Einsätze für Finn Harps',detail:'Erreicht beim 1:0 in San Sebastián seinen 250. Einsatz für Finn Harps.'},
    {id:'2041-12-11-callum-brennan-real-sociedad',date:'2041-12-11',player:'Callum Brennan',type:'standout',title:'20 progressive Pässe in San Sebastián',detail:'Wird beim 1:0 gegen Real Sociedad mit Note 7,6 als beste hervorgehobene Harps-Leistung geführt.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-12-11',competition:'UEFA Champions League',fixtureDate:'11.12.2041',
    home:'Real Sociedad',away:'Finn Harps',score:'0:1',location:'Reale Arena · San Sebastián · 39.222 Zuschauer',
    headline:'Ramsey setzt den Schlusspunkt: Harps gewinnt 1:0 in San Sebastián',
    subheadline:'Finn Harps reagiert auf die Niederlage in Barcelona mit einem dominanten Chancenbild bei Real Sociedad. Justin Ramsey trifft in Minute 31, Jocelyn Metz-Riehl verhindert mit zehn Paraden ein höheres Ergebnis.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · REAL SOCIEDAD 0:1 FINN HARPS',
    heroStat:{label:'Jahresabschluss',value:'19:8 Schüsse',note:'11:2 aufs Tor · 1,73:0,44 xG · 59 % Ballbesitz'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Das letzte Pflichtspiel des Kalenderjahres liefert genau die Antwort, die Finn Harps nach dem 1:2 in Barcelona gesucht hat. Die Harps kontrollieren weite Teile des Abends, erzeugen deutlich mehr Abschlüsse und gehen durch Justin Ramsey verdient in Führung. Nur Sociedads Torwart verhindert, dass aus dem knappen Ergebnis ein klarerer Sieg wird.',
    sections:[
      {title:'Ramsey trifft in Minute 31',text:'Nach einer kontrollierten Anfangsphase erzielt Justin Ramsey in der 31. Minute das 1:0. Der Treffer bleibt der einzige des Abends und reicht zum fünften Champions-League-Sieg im sechsten Ligaphasen-Spiel.'},
      {title:'Das Chancenbild ist eindeutig',text:'Finn Harps kommt auf 19 Schüsse und elf Abschlüsse aufs Tor. Real Sociedad bleibt bei acht Schüssen, zwei aufs Tor und 0,44 xG. Auch bei Ballbesitz und Ecken liegen die Harps mit 59 Prozent beziehungsweise 10:1 klar vorn.'},
      {title:'Metz-Riehl hält Sociedad im Spiel',text:'Jocelyn Metz-Riehl wird in der Spielanalyse mit zehn Paraden hervorgehoben. Dass Finn Harps trotz elf Schüssen aufs Tor nur einmal trifft, ist vor allem sein Verdienst.'},
      {title:'Andrews räumt auf, Brennan baut auf',text:'Darcy Andrews gewinnt laut Matchanalyse häufiger als jeder andere Harps-Spieler den Ball zurück. Callum Brennan wird mit Note 7,6 und 20 progressiven Pässen als beste hervorgehobene Harps-Leistung geführt.'},
      {title:'O’Kane erreicht die 250',text:'Cormac O’Kane absolviert in San Sebastián seinen 250. Einsatz für Finn Harps und setzt damit noch einen persönlichen Meilenstein unter das letzte Spiel des Jahres.'},
      {title:'15 Punkte zur Winterpause',text:'Nach sechs Champions-League-Spielen steht Finn Harps bei fünf Siegen, einer Niederlage, 12:3 Toren und 15 Punkten. Damit geht die Mannschaft auf Rang drei ins neue Kalenderjahr.'}
    ],
    strengthsTitle:'WAS DEN SIEG TRÄGT',strengthsHeading:'Kontrolle, Chancenmenge und eine saubere Reaktion',
    strengths:['19:8 Schüsse','11:2 Schüsse aufs Tor','1,73:0,44 xG','59 % Ballbesitz','10:1 Ecken','Keine Großchance für Real Sociedad','Callum Brennan: Note 7,6 und 20 progressive Pässe','Darcy Andrews mit den meisten Harps-Ballrückeroberungen'],
    vulnerabilitiesTitle:'WAS NOCH LIEGEN BLEIBT',vulnerabilitiesHeading:'Mehr Dominanz als Tore',
    vulnerabilities:['Nur ein Treffer aus elf Schüssen aufs Tor','Jocelyn Metz-Riehl pariert zehn Abschlüsse','Escárcega wird in der Spielanalyse mit 0 % gewonnenen Kopfbällen hervorgehoben'],
    verdictHeading:'2041 endet mit einer Antwort',
    verdict:'Nach Barcelona hätte das letzte Spiel des Jahres unangenehm werden können. Stattdessen liefert Finn Harps in San Sebastián ein reifes Auswärtsspiel und kontrolliert die Partie deutlicher, als das 1:0 vermuten lässt. Fünf Siege aus sechs Champions-League-Spielen und Rang drei sind ein starkes europäisches Zwischenzeugnis, ohne die laufende Saison 2041/42 vorzeitig abzuschließen.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-12-11-real-sociedad-finn-harps',date:'2041-12-11',season:2041,category:'Champions League',accent:'blue',featured:false,
    eyebrow:'CHAMPIONS LEAGUE · 6. SPIELTAG',title:'Ramsey beendet 2041 mit einem Sieg',
    summary:'Finn Harps gewinnt 1:0 bei Real Sociedad. Ramsey trifft, O’Kane absolviert seinen 250. Harps-Einsatz und die Mannschaft überwintert mit 15 Punkten auf Rang drei.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','real-sociedad','justin-ramsey','cormac-okane','callum-brennan','season-2041']
  });
})();