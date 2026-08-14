(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const results=[
    {date:'2041-09-17',home:'AEK',away:'Red Bull Salzburg',score:'2:2',winner:null},
    {date:'2041-09-17',home:'Atlético de Madrid',away:'Grenoble',score:'5:2',winner:'Atlético de Madrid'},
    {date:'2041-09-17',home:'Barcelona',away:'Paris Saint-Germain',score:'3:0',winner:'Barcelona'},
    {date:'2041-09-17',home:'Dortmund',away:'Arsenal',score:'1:1',winner:null},
    {date:'2041-09-17',home:'Manchester City',away:'Napoli',score:'2:0',winner:'Manchester City'},
    {date:'2041-09-17',home:'Newcastle',away:'RB Leipzig',score:'2:1',winner:'Newcastle'},
    {date:'2041-09-17',home:'Real Madrid',away:'Milan',score:'1:1',winner:null},
    {date:'2041-09-17',home:'Roma',away:'FC Midtjylland',score:'6:1',winner:'Roma'},
    {date:'2041-09-17',home:'Young Boys',away:'Anderlecht',score:'1:0',winner:'Young Boys'},
    {date:'2041-09-18',home:'Bayern München',away:'Tottenham',score:'1:1',winner:null},
    {date:'2041-09-18',home:'Benfica',away:'Ajax',score:'5:0',winner:'Benfica'},
    {date:'2041-09-18',home:'Caen',away:'PSV Eindhoven',score:'5:3',winner:'Caen'},
    {date:'2041-09-18',home:'Celtic',away:'Derry City',score:'2:1',winner:'Celtic'},
    {date:'2041-09-18',home:'Finn Harps',away:'Celta Vigo',score:'4:0',winner:'Finn Harps'},
    {date:'2041-09-18',home:'Manchester United',away:'Inter',score:'1:2',winner:'Inter'},
    {date:'2041-09-18',home:'Monaco',away:'Real Sociedad',score:'3:0',winner:'Monaco'},
    {date:'2041-09-18',home:'Porto',away:'Chelsea',score:'2:4',winner:'Chelsea'},
    {date:'2041-09-18',home:'Sporting CP',away:'Hajduk Split',score:'2:2',winner:null}
  ];

  const tableSnapshot={
    date:'2041-09-18',
    leaders:[
      {position:1,club:'Roma',played:2,points:6,goalDifference:7},
      {position:2,club:'Chelsea',played:2,points:6,goalDifference:5},
      {position:3,club:'Finn Harps',played:2,points:6,goalDifference:5},
      {position:4,club:'Monaco',played:2,points:6,goalDifference:4},
      {position:5,club:'Inter',played:2,points:6,goalDifference:3}
    ],
    irishClubs:[
      {club:'Finn Harps',position:3,played:2,points:6,goalsFor:5,goalsAgainst:0},
      {club:'Derry City',position:16,played:2,points:3,goalsFor:3,goalsAgainst:3}
    ]
  };

  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...(window.FM_CHAMPIONS_LEAGUE['2041-42']||{}),
    season:'2041/42',format:'Ligaphase',titleHolder:'Manchester United',finalVenue:'Olympic Athletic Center of Athens',
    matchday2:{dates:['2041-09-17','2041-09-18'],results,tableSnapshot},
    headline:'Finn Harps bleibt perfekt und steht nach dem 4:0 gegen Celta mit sechs Punkten und 5:0 Toren auf Rang drei. Derry City verliert knapp bei Celtic.'
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-09-18';
    season.championsLeagueLeaguePhase={
      ...(season.championsLeagueLeaguePhase||{}),
      matchday2Results:results,
      matchday2Table:tableSnapshot,
      matchday2Headline:'Finn Harps ist nach zwei Spieltagen Dritter der Ligaphase: 6 Punkte, 5:0 Tore. Derry City steht nach dem 1:2 bei Celtic bei 3 Punkten.'
    };
    season.latestHeadline='Champions League: Finn Harps schlägt Celta Vigo 4:0 und steht nach zwei Spieltagen mit sechs Punkten und 5:0 Toren auf Rang drei.';
  }

  const report={
    id:'2041-09-18-champions-league-spieltag-2-rundschau',type:'Turnierbericht',date:'2041-09-18',competition:'UEFA Champions League',
    headline:'Harps bleiben perfekt, United stolpert erneut: Der zweite Spieltag im Überblick',
    subheadline:'Finn Harps zerlegt Celta Vigo 4:0 und steht mit sechs Punkten auf Rang drei. Derry City verliert 1:2 bei Celtic, Manchester United unterliegt Inter und Roma setzt mit einem 6:1 gegen Midtjylland das größte Ausrufezeichen.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · 2. SPIELTAG',
    heroStat:{label:'Finn Harps nach 2 Spielen',value:'6 Punkte · 5:0 Tore',note:'Rang 3 hinter Roma und Chelsea'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Der zweite Spieltag schärft das Bild der Ligaphase. Finn Harps bestätigt den Auftaktsieg gegen Manchester United mit einem 4:0 gegen Celta Vigo und gehört damit zu fünf Mannschaften mit der maximalen Ausbeute. Derry City kann den perfekten irischen Start nicht fortsetzen und verliert knapp bei Celtic. Gleichzeitig bleibt der Titelverteidiger aus Manchester nach einer weiteren Niederlage ohne Punkt.',
    sections:[
      {title:'Finn Harps gehört zur perfekten Fünfergruppe',text:'Nach dem 1:0 gegen Manchester United folgt ein 4:0 gegen Celta Vigo. Mit sechs Punkten und 5:0 Toren steht Finn Harps auf Rang drei. Roma, Chelsea, Finn Harps, Monaco und Inter sind die fünf Teams mit zwei Siegen aus zwei Spielen.'},
      {title:'Derry verliert knapp bei Celtic',text:'Nach dem 2:1-Auswärtssieg in Midtjylland verliert Derry City am zweiten Spieltag mit 1:2 bei Celtic. Drei Punkte und ein ausgeglichenes Torverhältnis von 3:3 reichen nach zwei Runden für Rang 16.'},
      {title:'Manchester United startet mit zwei Niederlagen',text:'Der Titelverteidiger verliert nach dem 0:1 in Donegal auch sein zweites Ligaphasen-Spiel. Inter gewinnt in Manchester mit 2:1 und bleibt selbst bei sechs Punkten.'},
      {title:'Roma und Benfica liefern die höchsten Siege',text:'Roma schlägt FC Midtjylland 6:1 und übernimmt mit der besten Tordifferenz die Spitze. Benfica gewinnt 5:0 gegen Ajax und rehabilitiert sich eindrucksvoll für das 3:3 gegen Napoli am ersten Spieltag.'},
      {title:'Barcelona stoppt PSG, City schlägt Napoli',text:'Barcelona gewinnt 3:0 gegen Paris Saint-Germain. Manchester City setzt sich 2:0 gegen Napoli durch, während Real Madrid gegen Milan und Bayern gegen Tottenham jeweils nur zu einem 1:1 kommen.'},
      {title:'Caen liefert erneut Spektakel',text:'Nach dem 2:5 bei Tottenham gewinnt Caen diesmal 5:3 gegen PSV Eindhoven. Auch Porto gegen Chelsea endet beim 2:4 torreich, während Atlético de Madrid Grenoble mit 5:2 bezwingt.'}
    ],
    keyDuelsTitle:'ALLE ERGEBNISSE',keyDuelsHeading:'18 Spiele am zweiten Spieltag der Ligaphase',
    keyDuels:results.map(r=>({title:`${r.home} ${r.score} ${r.away}`,text:r.date==='2041-09-17'?'Dienstag, 17. September 2041':'Mittwoch, 18. September 2041'})),
    verdictHeading:'Finn Harps hat aus einem starken Start eine echte Ausgangsposition gemacht',
    verdict:'Sechs Punkte nach Spielen gegen Manchester United und Celta Vigo sind mehr als nur ein guter Auftakt. Mit 5:0 Toren und Rang drei haben die Harps früh ein Polster für die obere Tabellenhälfte geschaffen. Derry City bleibt trotz der Niederlage konkurrenzfähig, während der Titelverteidiger Manchester United nach zwei Spieltagen bereits unter Druck steht.',
    sourcesHeading:'Ergebnisse des 2. Spieltags',
    sourcesNote:'Die Rundschau basiert auf den bereitgestellten Football-Manager-Screenshots der Champions-League-Ergebnisse vom 17. und 18. September 2041.',
    sources:['FM-Champions-League-Ergebnisse · 17.09.2041','FM-Champions-League-Ergebnisse · 18.09.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-18-champions-league-spieltag-2',date:'2041-09-18',season:2041,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · 2. SPIELTAG',
    title:'Harps Dritter nach perfektem Start, United weiter punktlos',
    summary:'Finn Harps schlägt Celta 4:0 und steht mit sechs Punkten und 5:0 Toren auf Rang drei. Derry verliert 1:2 bei Celtic, Inter schlägt Manchester United 2:1 und Roma führt nach einem 6:1 gegen Midtjylland.',
    href:'presse.html?id=2041-09-18-champions-league-spieltag-2-rundschau',
    entities:['finn-harps','derry-city','man-utd','celta-vigo','champions-league','season-2041']
  });
})();