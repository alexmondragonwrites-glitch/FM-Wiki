(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2041-06-13-man-city-club-world-cup',date:'2041-06-13',season:2041,competition:'FIFA Club World Cup',round:'Gruppe H · 1. Spieltag',
    home:'Manchester City',away:'Finn Harps',score:'1:2',homeGoals:1,awayGoals:2,
    venue:'Marcel Desailly-Arena, Rennes',attendance:43400,awayAttendance:4522,weather:'19 °C',
    report:'presse.html?id=2041-06-13-man-city-klub-wm-spielbericht',
    scorers:['Jhonatan Galíndrez 10.','Giacomo Papini 14.','Justin Ramsey 39.'],
    incidents:['Chris Widdowson verletzt 25.','Faiser Oroz Gelb 49.','Cristian Compagnucci verletzt 68.'],
    stats:{
      shots:'8:10',shotsOnTarget:'2:5',xG:'0,96:2,21',shotsOffTarget:'5:0',bigChances:'0:4',possession:'47:53',
      corners:'4:5',fouls:'11:10',passesCompleted:'487:542',passesAttempted:'543:592',passCompletion:'90:92',
      tacklesWon:'83:92',headersWon:'50:50',yellowCards:'1:0',redCards:'0:0',averageRating:'6,58:6,94',intenseSprints:'96:105'
    },
    ratings:[
      {name:'Paulo Henrique',rating:6.8,starter:true},
      {name:'Diego Fernández',rating:6.5,starter:true,off:80},
      {name:'Darcy Andrews',rating:7.1,starter:true},
      {name:'Mareks Istrankins',rating:6.7,starter:true},
      {name:'Kevin Kelly',rating:6.8,starter:true,off:54},
      {name:"Jim O'Neill",rating:6.9,starter:true,off:63},
      {name:'Daryl Frame',rating:6.8,starter:true},
      {name:'Jake Roberts',rating:7.5,starter:true,assists:1},
      {name:'Giacomo Papini',rating:6.9,starter:true,goals:1},
      {name:'Dom Docherty',rating:7.0,starter:true,off:63},
      {name:'Justin Ramsey',rating:8.1,starter:true,off:54,goals:1,assists:1,playerOfMatch:true},
      {name:'Gustavo da Silva',rating:6.8,starter:false,on:54},
      {name:'Eduardo Blanco',rating:6.5,starter:false,on:54},
      {name:'Amir Mašić',rating:6.7,starter:false,on:63},
      {name:'Romano Maisto',rating:6.8,starter:false,on:63},
      {name:'Callum Brennan',rating:null,starter:false,on:80}
    ],
    summary:'Titelverteidiger Finn Harps startet mit einem 2:1 gegen Manchester City in die Klub-WM 2041. Nach Galíndrez’ frühem 1:0 antwortet Papini vier Minuten später, ehe Justin Ramsey in der 39. Minute den Siegtreffer erzielt. Die Harps erspielen 2,21 xG, vier Großchancen und fünf Schüsse aufs Tor.',
    standout:['Justin Ramsey 8,1 · Tor, Vorlage und beste Harps-Note','Jake Roberts 7,5 · Vorlage','Darcy Andrews 7,1','Dom Docherty 7,0']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const currentCwc=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...currentCwc,
    id:'club-world-cup-2041',year:2041,status:'group-stage',titleHolder:'Finn Harps',seededPot:1,group:'H',
    teams:currentCwc.teams||[
      {name:'Boca Juniors',country:'Argentinien'},
      {name:'Finn Harps',country:'Irland',titleHolder:true,seeded:true},
      {name:'Manchester City',country:'England',tournamentFavourite:true,odds:'6.50'},
      {name:'Charlotte FC',country:'USA'}
    ],
    groupProgress:{played:1,wins:1,draws:0,losses:0,goalsFor:2,goalsAgainst:1,points:3},
    results:[...(currentCwc.results||[]).filter(x=>x.id!==match.id),{id:match.id,date:match.date,opponent:'Manchester City',result:'2:1',venue:'Rennes'}],
    headline:'Titelverteidiger Finn Harps startet mit einem 2:1 gegen Manchester City in Gruppe H.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.clubWorldCup={
      ...(season.clubWorldCup||{}),status:'Gruppenphase läuft',titleHolder:true,seededPot:1,group:'H',
      opponents:['Boca Juniors','Manchester City','Charlotte FC'],played:1,wins:1,draws:0,losses:0,goalsFor:2,goalsAgainst:1,points:3,
      latestResult:'Manchester City 1:2 Finn Harps'
    };
    season.latestHeadline='Klub-WM 2041: Finn Harps schlägt Manchester City zum Auftakt 2:1. Papini und Ramsey drehen den frühen Rückstand.';
  }

  const addPlayerUpdate=(id,name,text,update)=>{
    const player=(window.FM_PLAYERS||[]).find(x=>x.id===id||x.name===name);
    if(!player)return;
    player.profileDate='2041-06-13';
    const narrative=player.careerNarrative||[];
    if(!narrative.includes(text))player.careerNarrative=[...narrative,text];
    player.matchUpdates=[...(player.matchUpdates||[]).filter(x=>!(x.date===update.date&&x.opponent===update.opponent&&x.competition===update.competition)),update];
    player.lastMatch=update;
  };

  addPlayerUpdate('justin-ramsey','Justin Ramsey','Justin Ramsey entschied den Klub-WM-Auftakt gegen Manchester City am 13. Juni 2041 mit dem Treffer zum 2:1, bereitete Papinis Ausgleich vor und erhielt mit 8,1 die beste Harps-Note.',{date:'2041-06-13',opponent:'Manchester City',competition:'FIFA Club World Cup · Gruppe H',result:'2:1',minutes:54,goals:1,assists:1,rating:8.1,note:'Siegtreffer und Vorlage beim Klub-WM-Auftakt'});
  addPlayerUpdate('giacomo-papini','Giacomo Papini','Giacomo Papini glich beim 2:1 gegen Manchester City in der Klub-WM bereits in der 14. Minute zum 1:1 aus.',{date:'2041-06-13',opponent:'Manchester City',competition:'FIFA Club World Cup · Gruppe H',result:'2:1',minutes:90,goals:1,assists:0,rating:6.9,note:'Ausgleich vier Minuten nach dem frühen Rückstand'});
  addPlayerUpdate('jake-roberts','Jake Roberts','Jake Roberts bereitete beim 2:1 gegen Manchester City in der Klub-WM den Siegtreffer vor und überzeugte mit der Note 7,5.',{date:'2041-06-13',opponent:'Manchester City',competition:'FIFA Club World Cup · Gruppe H',result:'2:1',minutes:90,goals:0,assists:1,rating:7.5,note:'Vorlage zum Siegtreffer und starke Kontrolle im Zentrum'});
  addPlayerUpdate('darcy-andrews','Darcy Andrews','Darcy Andrews gehörte beim 2:1 gegen Manchester City mit der Note 7,1 zu den stärksten Harps-Spielern.',{date:'2041-06-13',opponent:'Manchester City',competition:'FIFA Club World Cup · Gruppe H',result:'2:1',minutes:90,goals:0,assists:0,rating:7.1,note:'Stabiler Auftritt beim Klub-WM-Auftaktsieg'});

  const city=(window.FM_CLUBS||[]).find(x=>x.id==='manchester-city'||x.name==='Manchester City'||x.name==='Man City');
  if(city){
    city.meetings=[{date:'13.06.2041',venue:'N',result:'1:2'},...(city.meetings||[]).filter(item=>item.date!=='13.06.2041')];
    city.lastMatch={date:'13.06.2041',competition:'FIFA Club World Cup · Gruppe H',result:'Manchester City 1:2 Finn Harps',scorers:['Jhonatan Galíndrez 10.','Giacomo Papini 14.','Justin Ramsey 39.'],note:'Finn Harps drehte den frühen Rückstand und gewann bei 2,21 xG sowie vier Großchancen.'};
  }

  const report={
    id:'2041-06-13-man-city-klub-wm-spielbericht',type:'Spielbericht',date:'2041-06-13',competition:'FIFA Club World Cup',
    fixtureDate:'Donnerstag, 13.06.2041',home:'Manchester City',away:'Finn Harps',score:'1:2',location:'Marcel Desailly-Arena · Rennes · 43.400 Zuschauer',
    headline:'Ramsey dreht den Auftakt: Finn Harps schlägt Manchester City 2:1',
    subheadline:'Der Titelverteidiger startet mit einem Statement in Gruppe H. Papini antwortet sofort auf Citys frühe Führung, Ramsey entscheidet das Spiel noch vor der Pause.',
    label:'FIFA CLUB WORLD CUP · GRUPPE H · 1:2',
    heroStat:{label:'Expected Goals',value:'0,96:2,21',note:'10:8 Schüsse für Finn Harps · 5:2 aufs Tor · 4:0 Großchancen'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Die Nations League ist vorbei, die Klub-WM beginnt ohne Anlaufphase. Manchester City ging durch Jhonatan Galíndrez nach zehn Minuten in Führung, doch Finn Harps reagierte sofort. Giacomo Papini glich in der 14. Minute aus, Justin Ramsey drehte die Partie in der 39. Minute. Danach verteidigten die Harps den Vorsprung und eröffneten ihre Titelverteidigung mit drei Punkten gegen den Turnierfavoriten der Gruppe.',
    sections:[
      {title:'City trifft zuerst, Papini antwortet sofort',text:'Jhonatan Galíndrez brachte Manchester City in der zehnten Minute mit 1:0 in Führung. Die Harps brauchten nur vier Minuten für die Antwort: Giacomo Papini traf zum 1:1 und verhinderte, dass sich der frühe Rückstand im Spiel festsetzen konnte.'},
      {title:'Ramsey entscheidet das Spiel vor der Pause',text:'Justin Ramsey machte aus einem starken Auftritt einen entscheidenden. In der 39. Minute erzielte er das 2:1, nachdem er zuvor bereits Papinis Ausgleich vorbereitet hatte. Mit einem Tor, einer Vorlage und der Note 8,1 war er der auffälligste Harps-Spieler.'},
      {title:'Vier Großchancen gegen den Turnierfavoriten',text:'Das Ergebnis war kein Zufallsprodukt. Finn Harps kam auf zehn Abschlüsse, fünf Schüsse aufs Tor und 2,21 xG. Besonders deutlich war das Verhältnis bei den Großchancen: vier für die Harps, keine für Manchester City.'},
      {title:'Roberts gibt dem Mittelfeld Struktur',text:'Jake Roberts erhielt die Note 7,5 und steuerte eine Vorlage bei. Hinter den beiden Torschützen half er dabei, nach der Pause die Partie kontrolliert zu Ende zu bringen, ohne City dauerhaft in klare Abschlusspositionen kommen zu lassen.'},
      {title:'53 Prozent Ballbesitz und 92 Prozent Passquote',text:'Finn Harps musste sich gegen City nicht in eine reine Außenseiterrolle zurückziehen. Die Mannschaft hatte 53 Prozent Ballbesitz und brachte 542 von 592 Pässen an. Das unterstreicht, wie selbstverständlich die Harps inzwischen auch gegen europäische Schwergewichte ihren eigenen Rhythmus suchen.'}
    ],
    strengthsTitle:'WAS DEN AUFTAKTSIEG TRUG',strengthsHeading:'Effizienz, Chancenqualität und Ruhe nach frühem Rückstand',
    strengths:['2:1-Sieg nach 0:1-Rückstand','Papini gleicht bereits vier Minuten nach Citys Führung aus','Justin Ramsey mit Tor, Vorlage und Note 8,1','Vier Großchancen gegenüber keiner für Manchester City','2,21 xG und fünf Schüsse aufs Tor','53 Prozent Ballbesitz und 92 Prozent Passquote','Jake Roberts mit Vorlage und Note 7,5'],
    vulnerabilitiesTitle:'WAS NOCH BESSER GEHEN KANN',vulnerabilitiesHeading:'Nicht jede Phase war sauber kontrolliert',
    vulnerabilities:['Früher Rückstand nach zehn Minuten','Daryl Frame blieb laut Spielanalyse offensiv weitgehend ohne Einfluss','Die Mannschaft hatte phasenweise Schwierigkeiten, in der gegnerischen Hälfte dauerhaft Ballbesitz zu halten'],
    verdictHeading:'Der Titelverteidiger ist sofort im Turnier',
    verdict:'Ein Auftaktsieg gegen Manchester City ist mehr als nur drei Punkte. Finn Harps musste einen frühen Rückstand verarbeiten, drehte das Spiel noch vor der Pause und erspielte sich dabei die klar besseren Chancen. Mit 2,21 xG und vier Großchancen war das 2:1 verdient. Für eine kurze Gruppenphase ist das der ideale Start: Ergebnis, Leistung und Selbstvertrauen stimmen gleichzeitig.',
    sourcesHeading:'Spieldaten vom 13. Juni 2041',
    sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots mit Spielübersicht, Teamstatistiken und Einzelbewertungen.',
    sources:['FM-Spielübersicht Manchester City – Finn Harps, 13.06.2041','FM-Spielerstatistiken Finn Harps, 13.06.2041','FIFA Club World Cup · Gruppe H']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-13-man-city-klub-wm',date:'2041-06-13',season:2041,category:'Klub-WM',accent:'blue',
    eyebrow:'FIFA CLUB WORLD CUP · MAN CITY 1:2 FINN HARPS',title:'Papini und Ramsey drehen den Klub-WM-Auftakt',
    summary:'Finn Harps schlägt Manchester City nach frühem Rückstand mit 2:1. Ramsey liefert Tor und Vorlage, die Harps kommen auf 2,21 xG und vier Großchancen.',
    href:'presse.html?id=2041-06-13-man-city-klub-wm-spielbericht',entities:['finn-harps','manchester-city','giacomo-papini','justin-ramsey','jake-roberts','club-world-cup','season-2041'],featured:true
  });
})();