(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const current=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  const existingBracket=(current.knockout&&current.knockout.bracket)||[];
  const results=[
    {home:'Santos',away:'Arsenal',score:'1:0',winner:'Santos',status:'complete'},
    {home:'São Paulo',away:'Inter',score:'0:0',winner:null,status:'observed-not-confirmed'},
    {home:'Dortmund',away:'Caen',score:'0:2',winner:'Caen',status:'complete'},
    {home:'Real Madrid',away:'Manchester United',score:'1:0',winner:'Real Madrid',status:'complete',attendance:59186},
    {home:'Milan',away:'Internacional',score:'4:3 n.V.',winner:'Milan',status:'complete',attendance:43908,events:['A. Collado 68.','K. Garbacz 78.','Lukayan 74.','Lukayan 90.','Ray 111.','G. Gallucci 115.','K. Garbacz 120.']},
    {home:'Monaco',away:'Manchester City',score:'1:1 n.V. · 7:6 i.E.',winner:'Monaco',status:'complete',events:['A. Verlaat 37.','C. Blythe 45+1']},
    {home:'Marseille',away:'Barcelona',score:'–',winner:null,status:'upcoming'},
    {home:'Bayern München',away:'Finn Harps',score:'–',winner:null,status:'upcoming'}
  ];

  const bracket=existingBracket.length?existingBracket.map(pair=>{
    const update=results.find(r=>r.home===pair.home&&r.away===pair.away);
    return update?{...pair,...update}:pair;
  }):results;

  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...current,
    id:'club-world-cup-2041',year:2041,status:'round-of-16',titleHolder:'Finn Harps',group:'H',
    knockout:{...(current.knockout||{}),round:'Achtelfinale',label:'2. Runde',bracket},
    roundOf16Snapshot:{
      date:'2041-06-24',
      completed:['Santos 1:0 Arsenal','Dortmund 0:2 Caen','Real Madrid 1:0 Manchester United','Milan 4:3 n.V. Internacional','Monaco 1:1 n.V. Manchester City · 7:6 i.E.'],
      observedNotConfirmed:['São Paulo 0:0 Inter'],
      upcoming:['Marseille – Barcelona','Bayern München – Finn Harps'],
      surprises:['Caen schlägt Dortmund 2:0','Monaco wirft Manchester City im Elfmeterschießen raus']
    },
    headline:'Klub-WM-Achtelfinale: Caen eliminiert Dortmund, Monaco wirft Manchester City im Elfmeterschießen raus. Bayern gegen Finn Harps steht noch aus.'
  });

  const report={
    id:'2041-06-24-klub-wm-achtelfinale-erste-ueberraschungen',
    type:'Turnierbericht',date:'2041-06-24',competition:'FIFA Club World Cup',
    headline:'Das Achtelfinale kippt: Caen schockt Dortmund, Monaco wirft City raus',
    subheadline:'Noch bevor Finn Harps gegen Bayern München antritt, hat die Klub-WM bereits zwei Schwergewichte verloren. Caen gewinnt 2:0 gegen Dortmund, Monaco setzt sich nach Verlängerung im Elfmeterschießen gegen Manchester City durch.',
    label:'FIFA CLUB WORLD CUP · ACHTELFINALE · ERSTE ENTSCHEIDUNGEN',
    heroStat:{label:'Größte Überraschungen',value:'Caen + Monaco',note:'Dortmund 0:2 Caen · Monaco 7:6 i.E. gegen Manchester City'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Der K.-o.-Baum der Klub-WM 2041 beginnt bereits zu knacken. Während Finn Harps noch auf das Achtelfinale gegen Bayern München wartet, sind mehrere Partien entschieden. Besonders Caens 2:0 gegen Dortmund und Monacos Sieg im Elfmeterschießen gegen Manchester City verändern das Bild des Turniers deutlich.',
    sections:[
      {title:'Caen nimmt Dortmund aus dem Turnier',text:'Caen setzt das erste große Ausrufezeichen des Achtelfinals und schlägt Dortmund mit 2:0. Der französische Klub steht damit im Viertelfinale und eliminiert einen der großen europäischen Namen bereits in der ersten K.-o.-Runde.'},
      {title:'Monaco überlebt City vom Punkt',text:'Monaco und Manchester City trennten sich nach Verlängerung 1:1. A. Verlaat traf in der 37. Minute für Monaco, C. Blythe glich in der Nachspielzeit der ersten Halbzeit aus. Im Elfmeterschießen setzte sich Monaco mit 7:6 durch und wirft damit den Klub aus dem Turnier, den Finn Harps bereits in der Gruppenphase 2:1 geschlagen hatte.'},
      {title:'Milan gewinnt einen Sieben-Tore-Krimi',text:'Milan bezwingt Internacional mit 4:3 nach Verlängerung. A. Collado traf in der 68. Minute, K. Garbacz in der 78. und 120. Minute, G. Gallucci in der 115. Minute. Für Internacional trafen Lukayan in der 74. und 90. Minute sowie Ray in der 111. Minute. 43.908 Zuschauer sahen das Spektakel in Rennes.'},
      {title:'Real Madrid schaltet Manchester United aus',text:'Real Madrid gewinnt 1:0 gegen Manchester United. 59.186 Zuschauer sahen damit das Aus des amtierenden Champions-League-Siegers in der Klub-WM.'},
      {title:'Santos setzt sich gegen Arsenal durch',text:'Auch Santos steht nach einem 1:0 gegen Arsenal als Sieger seines Achtelfinals fest.'},
      {title:'São Paulo gegen Inter bleibt im Screenshot offen',text:'Für São Paulo gegen Inter ist ein 0:0 zu sehen, der bereitgestellte Screenshot bestätigt jedoch keinen endgültigen Sieger. Das Ergebnis wird deshalb im Wiki bewusst nicht als abgeschlossenes Achtelfinale gewertet.'},
      {title:'Der Harps-Ast bleibt brutal',text:'Marseille gegen Barcelona und Bayern München gegen Finn Harps stehen noch aus. Der Sieger des Harps-Duells trifft im Viertelfinale auf Marseille oder Barcelona. Während andere Turnierfavoriten bereits fallen, bleibt der Weg des Titelverteidigers damit unverändert schwer.'}
    ],
    strengthsTitle:'WAS DIE ERSTEN ERGEBNISSE ZEIGEN',strengthsHeading:'Große Namen schützen in diesem Format vor nichts',
    strengths:['Caen eliminiert Dortmund mit 2:0','Monaco setzt sich gegen Manchester City im Elfmeterschießen durch','Real Madrid wirft den Champions-League-Sieger Manchester United raus','Milan übersteht einen wilden Sieben-Tore-Krimi nach Verlängerung'],
    vulnerabilitiesTitle:'WARUM DAS FÜR FINN HARPS EINE WARNUNG IST',vulnerabilitiesHeading:'Ein einziges Spiel kann jede Hierarchie zerlegen',
    vulnerabilities:['Kein Rückspiel zum Korrigieren eines schlechten Starts','Bayern bekommt dieselbe Chance auf eine Überraschung wie Caen und Monaco','Der Viertelfinalgegner Marseille oder Barcelona bleibt unabhängig vom Achtelfinalchaos ein Schwergewicht'],
    verdictHeading:'Die Klub-WM frisst bereits Favoriten',
    verdict:'Die ersten Achtelfinals unterstreichen, wie wenig historische Größe in einem einzelnen K.-o.-Spiel schützt. Dortmund ist raus, Manchester City ist raus, Manchester United ist raus. Für Finn Harps ist das zugleich Ermutigung und Warnsignal: Der Titelverteidiger hat Bayern im Frühjahr klar geschlagen, doch in Rennes zählt davon nur das Selbstvertrauen. Nicht das Ergebnis.',
    sourcesHeading:'Turnierstand vor Bayern gegen Finn Harps',
    sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots. São Paulo gegen Inter wird ausdrücklich nicht als abgeschlossen gewertet, weil der Screenshot nur den Stand 0:0 zeigt.',
    sources:['FM-Klub-WM-Übersicht · Achtelfinale','FM-Klub-WM-Tageszusammenfassung mit Monaco – Manchester City, Milan – Internacional und Real Madrid – Manchester United']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-24-klub-wm-erste-achtelfinal-ueberraschungen',date:'2041-06-24',season:2041,category:'Klub-WM',accent:'blue',featured:true,
    eyebrow:'KLUB-WM · ACHTELFINALE',title:'Caen und Monaco sprengen den Favoritenbaum',
    summary:'Caen schlägt Dortmund 2:0, Monaco eliminiert Manchester City im Elfmeterschießen. Auch Manchester United ist nach einem 0:1 gegen Real Madrid raus.',
    href:'presse.html?id=2041-06-24-klub-wm-achtelfinale-erste-ueberraschungen',
    entities:['club-world-cup','caen','monaco','manchester-city','bayern','finn-harps']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.latestHeadline='Klub-WM 2041: Caen eliminiert Dortmund, Monaco wirft Manchester City raus. Finn Harps wartet noch auf das Achtelfinale gegen Bayern.';
    season.clubWorldCup={...(season.clubWorldCup||{}),roundOf16Headline:'Erste Überraschungen: Caen 2:0 gegen Dortmund, Monaco 7:6 i.E. gegen Manchester City.'};
  }
})();