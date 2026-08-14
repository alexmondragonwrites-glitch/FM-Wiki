(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-09-18-finn-harps-celta-vigo-champions-league';
  const reportId='2041-09-18-celta-vigo-ligaphase-spielbericht';

  const match={
    id:fixtureId,date:'2041-09-18',season:2041,competition:'UEFA Champions League',stage:'Ligaphase · 2. Spieltag',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    away:{id:'celta-vigo',name:'RC Celta de Vigo',short:'CEL',score:0},
    score:'4:0',homeGoals:4,awayGoals:0,halfTime:'3:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:10000,awayFans:500,weather:'Windig · 20 °C',referee:'Nicht bekannt',
    headline:'Escárcega-Hattrick zerlegt Celta: Finn Harps gewinnen 4:0',
    verdict:'Nach dem 1:0 gegen Manchester United legt Finn Harps in der Champions-League-Ligaphase sofort nach. Emerson Escárcega trifft in der 3., 15. und 61. Minute, Romano Maisto macht bereits in der 24. Minute das zwischenzeitliche 3:0. Mit zwei Siegen aus zwei Spielen und 5:0 Toren stehen die Harps bei sechs Punkten.',
    scorers:[
      {player:'Emerson Escárcega',team:'Finn Harps',goals:3,minutes:[3,15,61]},
      {player:'Romano Maisto',team:'Finn Harps',goals:1,minutes:[24]}
    ],
    events:[
      {minute:3,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'1:0'},
      {minute:5,type:'yellow',team:'Finn Harps',player:'Jim O’Neill',text:'Gelbe Karte'},
      {minute:15,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'2:0'},
      {minute:24,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'3:0'},
      {minute:49,type:'injury',team:'Finn Harps',player:'Daniele Di Maio',text:'Verletzt ausgewechselt'},
      {minute:61,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'4:0'}
    ],
    stats:[
      {label:'Schüsse',home:12,away:8,kind:'number'},
      {label:'Schüsse aufs Tor',home:7,away:5,kind:'number'},
      {label:'xG',home:1.80,away:1.09,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:3,away:1,kind:'number'},
      {label:'Großchancen',home:2,away:1,kind:'number'},
      {label:'Ballbesitz',home:53,away:47,kind:'percent'},
      {label:'Ecken',home:4,away:5,kind:'number'},
      {label:'Fouls',home:8,away:14,kind:'number'},
      {label:'Angekommene Pässe',home:538,away:481,kind:'number',homeDetail:'88 % · 538/610',awayDetail:'88 % · 481/548'},
      {label:'Gewonnene Zweikämpfe',home:73,away:61,kind:'percent',homeDetail:'22/30',awayDetail:'19/31'},
      {label:'Gewonnene Kopfbälle',home:68,away:29,kind:'percent',homeDetail:'26/38',awayDetail:'12/42'},
      {label:'Gelbe Karten',home:1,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Intensität',home:7.47,away:6.36,kind:'decimal'},
      {label:'Intensive Sprints',home:103,away:85,kind:'number'}
    ],
    championsLeagueAfterMatch:{played:2,wins:2,draws:0,losses:0,goalsFor:5,goalsAgainst:0,goalDifference:5,points:6,position:3},
    standout:{player:'Emerson Escárcega',team:'Finn Harps',rating:9.4,goals:3,note:'Hattrick in der 3., 15. und 61. Minute. Drei Treffer aus drei Schüssen aufs Tor.'},
    supportingStandout:{player:'Romano Maisto',team:'Finn Harps',rating:8.0,goals:1,note:'Erzielt in der 24. Minute das 3:0 und hilft, das Spiel schon vor der Pause zu entscheiden.'},
    milestones:[
      {player:'Paulo Henrique',text:'Seit 321 Minuten ohne Gegentor für Finn Harps'},
      {player:'Jorge Paiva',team:'Celta Vigo',text:'215. Spiel als Profi'},
      {player:'Miguel Ángel',team:'Celta Vigo',text:'325. Einsatz für Celta Vigo'}
    ],
    analysis:{
      summary:'Finn Harps entscheidet die Partie mit einer explosiven ersten Halbzeit. Nach 24 Minuten steht es 3:0, obwohl Celta später durchaus zu Abschlüssen kommt. Der Unterschied liegt vor allem in der Effizienz und in Escárcegas klinischem Abschluss.',
      opening:'Escárcega trifft bereits in der 3. Minute und legt in der 15. Minute nach. Maisto erhöht in der 24. Minute auf 3:0. Celta muss damit früh einem fast aussichtslosen Rückstand hinterherlaufen.',
      hattrick:'In der 61. Minute komplettiert Escárcega den Hattrick. Mit Note 9,4 ist er der klare Spieler des Abends und bestätigt seinen außergewöhnlichen Start bei Finn Harps nun auch auf Champions-League-Niveau.',
      control:'Das 4:0 ist deutlicher als die reine Chancenmenge. Celta kommt auf acht Schüsse und 1,09 xG, aber Finn Harps gewinnt 73 Prozent der Zweikämpfe und 68 Prozent der Kopfbälle und hält erneut die Null.',
      viniciusReturn:'Das Wiedersehen mit Vinícius endet für Celta deutlich. Der ehemalige Harps-Mittelfeldspieler kehrt mit seinem neuen Klub nach Donegal zurück, während Finn Harps die Partie bereits vor der Pause klar in seine Richtung zieht.',
      leaguePhase:'Nach dem 1:0 gegen Manchester United folgt das 4:0 gegen Celta Vigo. Finn Harps startet damit mit sechs Punkten und 5:0 Toren aus zwei Spielen in die Ligaphase.'
    },
    sources:['FM-Spielübersicht Finn Harps – Celta Vigo · 18.09.2041','Finn-Harps-Spielerstatistiken · 18.09.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-09-18';
    season.latestHeadline='Champions League: Escárcega-Hattrick beim 4:0 gegen Celta Vigo.';
    season.championsLeague='Ligaphase · 2 Spiele · 6 Punkte · 5:0 Tore';
    season.championsLeagueLeaguePhase={...(season.championsLeagueLeaguePhase||{}),played:2,wins:2,draws:0,losses:0,goalsFor:5,goalsAgainst:0,goalDifference:5,points:6,position:3,latestResult:'18.09.2041 · Finn Harps 4:0 Celta Vigo'};
    season.changes=season.changes||{notes:[]};
    const note='18.09.2041: 4:0 gegen Celta Vigo am 2. Spieltag der Champions-League-Ligaphase. Emerson Escárcega erzielt einen Hattrick, Romano Maisto trifft ebenfalls. Finn Harps startet mit 6 Punkten und 5:0 Toren.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const club=(window.FM_CLUBS||[]).find(x=>x.id==='celta-vigo');
  if(club){
    club.summary='Celta Vigo verlor am 18. September 2041 im Donegal Stadium mit 0:4 gegen Finn Harps. Emerson Escárcega erzielte einen Hattrick, Romano Maisto das dritte Tor. Für Ex-Harps-Spieler Vinícius endete die Rückkehr nach Donegal damit deutlich.';
    club.meetings=[...(club.meetings||[]).filter(x=>x.date!=='18.09.2041'),{date:'18.09.2041',venue:'H',result:'4:0 · Champions-League-Ligaphase'}];
    club.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Escárcega-Hattrick beim 4:0 gegen Celta'};
  }

  [
    {id:'2041-09-18-emerson-escarcega-celta-hattrick',date:'2041-09-18',player:'Emerson Escárcega',type:'standout',title:'Champions-League-Hattrick gegen Celta Vigo',detail:'Trifft beim 4:0 in der 3., 15. und 61. Minute und wird mit 9,4 zum Spieler des Spiels.'},
    {id:'2041-09-18-paulo-henrique-clean-sheet-run',date:'2041-09-18',player:'Paulo Henrique',type:'milestone',title:'321 Minuten ohne Gegentor',detail:'Hält auch gegen Celta Vigo die Null und baut seine Serie für Finn Harps auf 321 Minuten aus.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const escarcega=(window.FM_PLAYERS||[]).find(p=>p.id==='emerson-escarcega'||p.name==='Emerson Escárcega');
  if(escarcega){
    escarcega.careerNarrative=escarcega.careerNarrative||[];
    const narrative='18.09.2041: Emerson Escárcega erzielt beim 4:0 gegen Celta Vigo seinen ersten Champions-League-Hattrick für Finn Harps. Er trifft in der 3., 15. und 61. Minute und erhält die Note 9,4.';
    if(!escarcega.careerNarrative.includes(narrative))escarcega.careerNarrative.push(narrative);
  }

  const report={
    id:reportId,type:'Spielbericht',date:'2041-09-18',competition:'UEFA Champions League',fixtureDate:'Mittwoch, 18.09.2041',home:'Finn Harps',away:'Celta Vigo',score:'4:0',location:'Donegal Stadium · Ligaphase, 2. Spieltag · 10.000 Zuschauer',
    headline:'Escárcega-Hattrick: Finn Harps zerlegen Celta schon vor der Pause',
    subheadline:'Zwei Tore von Emerson Escárcega in den ersten 15 Minuten und Romanos Maistos 3:0 nach 24 Minuten entscheiden die Partie früh. Escárcega komplettiert nach der Pause den Hattrick zum 4:0.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · FINN HARPS 4:0 CELTA VIGO',
    heroStat:{label:'Escárcega',value:'3 Tore',note:'3., 15. und 61. Minute · Note 9,4'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Nach dem 1:0 gegen Manchester United hatte Finn Harps bereits ein europäisches Ausrufezeichen gesetzt. Gegen Celta Vigo folgt keine emotionale Delle, sondern eine noch brutalere erste Halbzeit. Nach 24 Minuten steht es 3:0 und das Wiedersehen mit Vinícius ist sportlich praktisch entschieden.',
    sections:[
      {title:'Escárcega schlägt zweimal in 15 Minuten zu',text:'Schon in der dritten Minute bringt Emerson Escárcega die Harps in Führung. Zwölf Minuten später folgt das 2:0. Der mexikanische Stürmer setzt damit seinen starken Einstand nun auch auf Champions-League-Niveau fort.'},
      {title:'Maisto macht die erste Halbzeit zur Machtdemonstration',text:'Romano Maisto trifft in der 24. Minute zum 3:0. Celta bekommt damit kaum Gelegenheit, das Spiel nach den frühen Gegentoren zu stabilisieren.'},
      {title:'Der Hattrick nach der Pause',text:'In der 61. Minute trifft Escárcega zum dritten Mal. Seine Note 9,4 ist die höchste Harps-Bewertung des Abends. Der Neuzugang entscheidet damit sein erstes großes Champions-League-Spiel als klarer Hauptdarsteller.'},
      {title:'Celta kommt zu Chancen, aber nicht zurück ins Spiel',text:'Die Gäste verzeichnen acht Schüsse, fünf aufs Tor und 1,09 xG. Trotzdem bleibt Paulo Henrique erneut ohne Gegentor. Finn Harps gewinnt 73 Prozent der Zweikämpfe und 68 Prozent der Kopfbälle und lässt Celta nie ernsthaft an ein Comeback glauben.'},
      {title:'Vinícius kehrt ohne Happy End zurück',text:'Der frühere Harps-Mittelfeldspieler kehrt erstmals als Celta-Spieler nach Donegal zurück. Die emotionale Nebenhandlung wird vom Spielverlauf überrollt: Finn Harps führt bereits nach 24 Minuten mit drei Toren.'},
      {title:'Sechs Punkte, fünf Tore, kein Gegentor',text:'Nach Manchester United folgt Celta Vigo. Zwei Spiele, zwei Siege, 5:0 Tore. Finn Harps steht nach dem zweiten Spieltag auf Rang drei der Ligaphase und hat einen perfekten europäischen Start hingelegt.'}
    ],
    strengthsTitle:'WAS DEN ABEND PRÄGT',strengthsHeading:'Frühe Wucht und ein Stürmer im Vollstreckermodus',
    strengths:['Escárcega-Hattrick','3:0 nach 24 Minuten','4:0 bei 1,80 xG','73 % gewonnene Zweikämpfe','68 % gewonnene Kopfbälle','321 Minuten ohne Gegentor für Paulo Henrique','6 Punkte und 5:0 Tore nach zwei Champions-League-Spielen'],
    vulnerabilitiesTitle:'WAS TROTZ DES 4:0 AUFFÄLLT',vulnerabilitiesHeading:'Celta kommt häufiger zum Abschluss als das Ergebnis vermuten lässt',
    vulnerabilities:['8 Celta-Schüsse','5 Celta-Schüsse aufs Tor','1,09 xG für die Gäste','Daniele Di Maio muss in der 49. Minute verletzt vom Feld'],
    verdictHeading:'Nach United folgt keine Ernüchterung, sondern die nächste Stufe',
    verdict:'Das 4:0 ist vor allem deshalb beeindruckend, weil es direkt auf den emotionalen Sieg gegen Manchester United folgt. Finn Harps braucht keinen perfekten Chancenstrom, weil Escárcega in der ersten Stunde eiskalt vollstreckt. Zwei Champions-League-Spiele später steht die Mannschaft bei sechs Punkten und 5:0 Toren. Der Start in die Ligaphase könnte kaum überzeugender sein.',
    sourcesHeading:'Spieldaten vom 18. September 2041',
    sourcesNote:'Der Bericht basiert auf der Football-Manager-Spielübersicht und den bereitgestellten Finn-Harps-Spielerstatistiken.',
    sources:['FM-Spielübersicht Finn Harps – Celta Vigo · 18.09.2041','FM-Spielerstatistiken Finn Harps · 18.09.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-18-celta-vigo-result',date:'2041-09-18',season:2041,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · LIGAPHASE · 4:0',title:'Escárcega-Hattrick zerlegt Celta Vigo',
    summary:'Escárcega trifft dreimal, Maisto einmal. Finn Harps schlägt Celta 4:0 und startet mit sechs Punkten und 5:0 Toren in die Champions-League-Ligaphase.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','celta-vigo','emerson-escarcega','romano-maisto','vinicius','champions-league-2041','season-2041']
  });
})();