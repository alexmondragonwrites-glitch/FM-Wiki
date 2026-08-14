(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const results=[
    {date:'2041-09-10',home:'Finn Harps',away:'Manchester United',score:'1:0',winner:'Finn Harps'},
    {date:'2041-09-10',home:'Inter',away:'Sporting CP',score:'3:1',winner:'Inter'},
    {date:'2041-09-10',home:'Monaco',away:'Bayern München',score:'1:0',winner:'Monaco'},
    {date:'2041-09-10',home:'Napoli',away:'Benfica',score:'3:3',winner:null},
    {date:'2041-09-10',home:'Newcastle',away:'Barcelona',score:'1:1',winner:null},
    {date:'2041-09-10',home:'Paris Saint-Germain',away:'Celtic',score:'5:3',winner:'Paris Saint-Germain'},
    {date:'2041-09-10',home:'Porto',away:'Young Boys',score:'1:1',winner:null},
    {date:'2041-09-10',home:'PSV Eindhoven',away:'Red Bull Salzburg',score:'1:1',winner:null},
    {date:'2041-09-10',home:'RB Leipzig',away:'Roma',score:'1:3',winner:'Roma'},
    {date:'2041-09-11',home:'Ajax',away:'Grenoble',score:'2:3',winner:'Grenoble'},
    {date:'2041-09-11',home:'Arsenal',away:'Atlético de Madrid',score:'3:1',winner:'Arsenal'},
    {date:'2041-09-11',home:'Celta Vigo',away:'Milan',score:'1:1',winner:null},
    {date:'2041-09-11',home:'Chelsea',away:'Anderlecht',score:'3:0',winner:'Chelsea'},
    {date:'2041-09-11',home:'FC Midtjylland',away:'Derry City',score:'1:2',winner:'Derry City'},
    {date:'2041-09-11',home:'Hajduk Split',away:'Real Madrid',score:'2:3',winner:'Real Madrid'},
    {date:'2041-09-11',home:'Manchester City',away:'Dortmund',score:'2:2',winner:null},
    {date:'2041-09-11',home:'Real Sociedad',away:'AEK',score:'1:2',winner:'AEK'},
    {date:'2041-09-11',home:'Tottenham',away:'Caen',score:'5:2',winner:'Tottenham'}
  ];

  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...(window.FM_CHAMPIONS_LEAGUE['2041-42']||{}),
    season:'2041/42',format:'Ligaphase',titleHolder:'Manchester United',finalVenue:'Olympic Athletic Center of Athens',
    matchday1:{dates:['2041-09-10','2041-09-11'],results},
    irishClubs:[
      {club:'Finn Harps',result:'1:0 gegen Manchester United',points:3},
      {club:'Derry City',result:'2:1 bei FC Midtjylland',points:3}
    ],
    headline:'Perfekter irischer Auftakt: Finn Harps schlägt Manchester United, Derry City gewinnt in Midtjylland.'
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-09-11';
    season.championsLeagueLeaguePhase={
      ...(season.championsLeagueLeaguePhase||{}),
      matchday1Results:results,
      matchday1Headline:'Finn Harps und Derry City starten beide mit Siegen in die Champions-League-Ligaphase.'
    };
    season.latestHeadline='Champions League: Finn Harps schlägt Manchester United 1:0, Derry City gewinnt 2:1 bei Midtjylland. Beide irischen Klubs starten mit drei Punkten.';
  }

  const report={
    id:'2041-09-11-champions-league-spieltag-1-rundschau',type:'Turnierbericht',date:'2041-09-11',competition:'UEFA Champions League',
    headline:'Irland startet perfekt: Harps und Derry gewinnen zum Auftakt',
    subheadline:'Finn Harps bezwingt Titelverteidiger Manchester United 1:0, Derry City gewinnt 2:1 bei Midtjylland. Monaco schlägt Bayern, Roma siegt in Leipzig und PSG liefert beim 5:3 gegen Celtic das torreichste Spiel des Auftakts.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · 1. SPIELTAG',
    heroStat:{label:'Irische Bilanz',value:'2 Spiele · 2 Siege',note:'Finn Harps 1:0 Manchester United · Midtjylland 1:2 Derry City'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Der erste Spieltag der Champions-League-Ligaphase 2041/42 liefert sofort mehrere Ausrufezeichen. Finn Harps gewinnt die Neuauflage des Halbfinals aus dem Frühjahr gegen Manchester United. Einen Tag später zieht Derry City nach und holt auswärts bei FC Midtjylland ebenfalls drei Punkte. Damit starten beide irischen Vertreter mit einem Sieg.',
    sections:[
      {title:'Finn Harps schlägt den Titelverteidiger',text:'Cormac O’Kanes Treffer entscheidet das 1:0 gegen Manchester United. Nach dem Halbfinal-Aus im Frühjahr drehen die Harps das direkte Kräfteverhältnis zumindest an diesem Abend sichtbar zu ihren Gunsten.'},
      {title:'Derry City macht den irischen Auftakt perfekt',text:'Derry City gewinnt 2:1 bei FC Midtjylland. Damit stehen nach dem ersten Spieltag sowohl Finn Harps als auch Derry City bei drei Punkten.'},
      {title:'Monaco nimmt Bayern die Punkte ab',text:'Monaco schlägt Bayern München 1:0. Zusammen mit Romas 3:1 bei RB Leipzig und Grenobles 3:2 bei Ajax gehört das Ergebnis zu den auffälligsten Siegen des Auftakts.'},
      {title:'PSG und Celtic liefern acht Tore',text:'Paris Saint-Germain gewinnt 5:3 gegen Celtic. Auch Napoli gegen Benfica endet beim 3:3 spektakulär, während Manchester City und Dortmund 2:2 spielen.'},
      {title:'Mehrere Favoriten starten nur mit einem Punkt',text:'Barcelona kommt bei Newcastle nicht über ein 1:1 hinaus. Milan spielt 1:1 bei Celta Vigo, Porto 1:1 gegen Young Boys und PSV 1:1 gegen Salzburg.'},
      {title:'Chelsea, Arsenal und Tottenham setzen klare Zeichen',text:'Chelsea schlägt Anderlecht 3:0, Arsenal gewinnt 3:1 gegen Atlético de Madrid und Tottenham bezwingt Caen 5:2. Real Madrid muss beim 3:2 in Split deutlich härter arbeiten.'}
    ],
    keyDuelsTitle:'ALLE ERGEBNISSE',keyDuelsHeading:'18 Spiele zum Start der Ligaphase',
    keyDuels:results.map(r=>({title:`${r.home} ${r.score} ${r.away}`,text:r.date==='2041-09-10'?'Dienstag, 10. September 2041':'Mittwoch, 11. September 2041'})),
    verdictHeading:'Der erste Spieltag gehört aus irischer Sicht Finn Harps und Derry City',
    verdict:'Zwei irische Teams in der Champions League wären vor Jahren bereits die Geschichte gewesen. Jetzt gewinnen beide auch noch ihr Auftaktspiel. Finn Harps tut es gegen den amtierenden Titelverteidiger, Derry auswärts in Dänemark. Für die Ligaphase ist das noch keine Vorentscheidung, aber als Standortbestimmung für den irischen Klubfußball ist es ein außergewöhnlich starker Start.',
    sourcesHeading:'Ergebnisse des 1. Spieltags',
    sourcesNote:'Die Rundschau basiert auf den bereitgestellten Football-Manager-Screenshots der Champions-League-Ergebnisse vom 10. und 11. September 2041.',
    sources:['FM-Champions-League-Ergebnisse · 10.09.2041','FM-Champions-League-Ergebnisse · 11.09.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-11-champions-league-spieltag-1',date:'2041-09-11',season:2041,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · 1. SPIELTAG',
    title:'Zwei irische Siege: Harps und Derry starten perfekt',
    summary:'Finn Harps schlägt Manchester United 1:0, Derry City gewinnt 2:1 bei Midtjylland. Monaco bezwingt Bayern, Roma gewinnt in Leipzig und PSG schlägt Celtic 5:3.',
    href:'presse.html?id=2041-09-11-champions-league-spieltag-1-rundschau',
    entities:['finn-harps','derry-city','man-utd','champions-league','season-2041']
  });
})();