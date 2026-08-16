(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const results=[
    {date:'2041-10-22',home:'Ajax',away:'Monaco',score:'0:1',winner:'Monaco',scorers:[{team:'Monaco',player:'N. Giordano',minute:73}]},
    {date:'2041-10-22',home:'Anderlecht',away:'Barcelona',score:'0:1',winner:'Barcelona',scorers:[{team:'Barcelona',player:'L. Greco',minute:44}]},
    {date:'2041-10-22',home:'Chelsea',away:'Newcastle',score:'1:1',winner:null,scorers:[{team:'Chelsea',player:'S. Scotta',minute:49},{team:'Newcastle',player:'Yan Cavalcanti',minute:64}]},
    {date:'2041-10-22',home:'Derry City',away:'Dortmund',score:'2:1',winner:'Derry City',scorers:[{team:'Derry City',player:'A. Clark',minute:5},{team:'Derry City',player:'P. Ireland',minute:82},{team:'Dortmund',player:'M. Jung',minute:64,penalty:true}]},
    {date:'2041-10-22',home:'Grenoble',away:'Bayern München',score:'0:1',winner:'Bayern München',scorers:[{team:'Bayern München',player:'A. Palacios',minute:88}]},
    {date:'2041-10-22',home:'Hajduk Split',away:'PSV Eindhoven',score:'1:0',winner:'Hajduk Split',scorers:[{team:'Hajduk Split',player:'K. Aliyu',minute:76}]},
    {date:'2041-10-22',home:'Milan',away:'Paris Saint-Germain',score:'2:0',winner:'Milan',scorers:[{team:'Milan',player:'F. Silvestri',minute:21},{team:'Milan',player:'G. Gallucci',minute:85}]},
    {date:'2041-10-22',home:'Real Sociedad',away:'Inter',score:'2:3',winner:'Inter',scorers:[{team:'Real Sociedad',player:'A. Munoz',minute:17},{team:'Real Sociedad',player:'F. Barbosa',minute:'90+2'},{team:'Inter',player:'L. Ginelli',minute:45},{team:'Inter',player:'H. Fornés',minute:47},{team:'Inter',player:'L. Ginelli',minute:75}]},
    {date:'2041-10-22',home:'Sporting CP',away:'AEK',score:'3:2',winner:'Sporting CP',scorers:[{team:'Sporting CP',player:'H. Mosquera Marmolejo',minute:7},{team:'Sporting CP',player:'Iu',minute:18},{team:'Sporting CP',player:'N. Doan',minute:47},{team:'AEK',player:'D. Lacombe',minute:30},{team:'AEK',player:'A. Giraudeau',minute:58}]}
  ];

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  const matchday3=current.matchday3||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...current,
    season:'2041/42',format:'Ligaphase',
    matchday3:{...matchday3,tuesdayDate:'2041-10-22',tuesdayResults:results},
    irishClubsPartial:{
      date:'2041-10-22',
      finnHarps:{played:2,points:6,goalsFor:5,goalsAgainst:0,next:'23.10.2041 bei Red Bull Salzburg'},
      derryCity:{played:3,points:6,goalsFor:5,goalsAgainst:4,latest:'2:1 gegen Dortmund'}
    },
    headline:'Derry City schlägt Dortmund 2:1. Milan besiegt PSG 2:0, Inter gewinnt 3:2 bei Real Sociedad und Bayern siegt spät in Grenoble.'
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-10-22';
    season.championsLeagueLeaguePhase={
      ...(season.championsLeagueLeaguePhase||{}),
      matchday3TuesdayResults:results,
      matchday3TuesdayHeadline:'Derry City schlägt Dortmund 2:1; Finn Harps spielt am 23. Oktober bei Red Bull Salzburg.'
    };
    season.latestHeadline='Champions League: Derry City schlägt Dortmund 2:1. Finn Harps tritt am 23.10. bei Red Bull Salzburg an.';
  }

  const report={
    id:'2041-10-22-champions-league-spieltag-3-dienstag',type:'Turnierbericht',date:'2041-10-22',competition:'UEFA Champions League',
    headline:'Derry schlägt Dortmund: Irlands zweiter Klub setzt ein Ausrufezeichen',
    subheadline:'Derry City gewinnt 2:1 gegen Dortmund. Milan schlägt PSG 2:0, Inter gewinnt 3:2 bei Real Sociedad und Bayern rettet in Grenoble spät drei Punkte.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · 3. SPIELTAG · DIENSTAG',
    heroStat:{label:'Derry City',value:'2:1 gegen Dortmund',note:'Clark 5. · Ireland 82. · Jung 64. (Elfmeter)'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Der Dienstag des dritten Ligaphasen-Spieltags liefert mehrere enge Partien und aus irischer Sicht die nächste große Geschichte. Derry City schlägt Dortmund 2:1 und steht nach drei Spielen bei sechs Punkten. Finn Harps folgt einen Tag später mit dem Auswärtsspiel bei Red Bull Salzburg.',
    sections:[
      {title:'Derry schlägt Dortmund',text:'A. Clark bringt Derry bereits in der 5. Minute in Führung. M. Jung gleicht per Elfmeter in der 64. Minute aus, doch P. Ireland entscheidet die Partie in der 82. Minute. Nach dem Auftaktsieg bei Midtjylland und der Niederlage bei Celtic steht Derry nun bei sechs Punkten.'},
      {title:'Milan hält PSG torlos',text:'F. Silvestri trifft in der 21. Minute, G. Gallucci macht in der 85. Minute das 2:0 perfekt. Paris bleibt ohne eigenen Treffer.'},
      {title:'Inter gewinnt das Spektakel in San Sebastián',text:'Real Sociedad geht früh durch A. Munoz in Führung, doch Inter dreht das Spiel mit einem Doppelpack von L. Ginelli und einem Treffer von H. Fornés. F. Barbosa verkürzt erst in der Nachspielzeit auf 2:3.'},
      {title:'Bayern braucht bis zur 88. Minute',text:'Grenoble hält lange das 0:0, ehe A. Palacios in der 88. Minute den 1:0-Auswärtssieg der Münchner sicherstellt.'},
      {title:'Barcelona und Monaco siegen knapp',text:'Barcelona gewinnt durch L. Grecos Treffer 1:0 bei Anderlecht. Monaco setzt sich dank N. Giordano ebenfalls 1:0 bei Ajax durch.'},
      {title:'Sporting gewinnt ein Fünf-Tore-Spiel',text:'Sporting CP schlägt AEK 3:2. H. Mosquera Marmolejo, Iu und N. Doan treffen für die Portugiesen; D. Lacombe und A. Giraudeau für AEK.'}
    ],
    keyDuelsTitle:'DIENSTAGSERGEBNISSE',keyDuelsHeading:'Neun Spiele vor dem Harps-Auftritt in Salzburg',
    keyDuels:results.map(r=>({title:`${r.home} ${r.score} ${r.away}`,text:'Champions-League-Ligaphase · 22.10.2041'})),
    verdictHeading:'Derry hält Irland auch am dritten Spieltag sichtbar',
    verdict:'Der Sieg über Dortmund ist der auffälligste irische Befund des Abends. Derry hat nach drei Spielen sechs Punkte und bleibt damit im Rennen um die K.-o.-Phase. Für Finn Harps entsteht vor Salzburg kein zusätzlicher Druck, aber ein reizvoller Vergleich: Der zweite irische Klub hat am Dienstag bereits vorgelegt.',
    sources:['FM-Champions-League-Ergebnisse · Dienstag, 22.10.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-10-22-champions-league-dienstag',date:'2041-10-22',season:2041,category:'Champions League',accent:'blue',featured:false,
    eyebrow:'CHAMPIONS LEAGUE · 3. SPIELTAG',
    title:'Derry schlägt Dortmund 2:1',
    summary:'Derry City erreicht sechs Punkte. Milan schlägt PSG, Inter gewinnt bei Real Sociedad und Bayern siegt spät in Grenoble.',
    href:'presse.html?id=2041-10-22-champions-league-spieltag-3-dienstag',
    entities:['derry-city','dortmund','champions-league','season-2041']
  });
})();