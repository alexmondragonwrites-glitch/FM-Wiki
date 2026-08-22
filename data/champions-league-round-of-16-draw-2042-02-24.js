(()=>{
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-02-24';
  const reportId='2042-02-24-champions-league-achtelfinale-auslosung';
  const ties=[
    {id:1,home:'Benfica',away:'Chelsea'},
    {id:2,home:'Newcastle',away:'Barcelona'},
    {id:3,home:'Caen',away:'Finn Harps',finnHarps:true},
    {id:4,home:'Grenoble',away:'Man City'},
    {id:5,home:'Man Utd',away:'Arsenal'},
    {id:6,home:'Roma',away:'Monaco'},
    {id:7,home:'Milan',away:'Tottenham'},
    {id:8,home:'Napoli',away:'Inter'}
  ];

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...current,
    season:'2041/42',
    roundOf16Draw:{date,ties,finnHarpsOpponent:'Caen',headline:'Finn Harps trifft im Champions-League-Achtelfinale auf Caen.'},
    knockoutStage:{...(current.knockoutStage||{}),roundOf16:{drawDate:date,ties,finnHarps:{opponent:'Caen',firstLegPairing:'Caen – Finn Harps'}}},
    headline:'Champions-League-Achtelfinale ausgelost: Finn Harps trifft auf Caen.'
  };

  let caen=window.FM_CLUBS.find(x=>x.id==='caen'||x.name==='Caen');
  if(!caen){
    caen={id:'caen',name:'Caen',country:'Frankreich',meetings:[]};
    window.FM_CLUBS.push(caen);
  }
  caen.nextMeeting={competition:'UEFA Champions League',stage:'Achtelfinale',opponent:'Finn Harps',drawDate:date};
  caen.summary='Caen wurde Finn Harps im Achtelfinale der UEFA Champions League 2041/42 zugelost.';
  caen.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · ACHTELFINALE',headline:'Finn Harps trifft auf Caen'};

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Champions League: Finn Harps trifft im Achtelfinale auf Caen.';
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.roundOf16={drawDate:date,opponent:'Caen',pairing:'Caen – Finn Harps',allTies:ties};
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='24.02.2042: Das Champions-League-Achtelfinale steht. Finn Harps trifft auf Caen; weitere Duelle sind Benfica–Chelsea, Newcastle–Barcelona, Grenoble–Man City, Man Utd–Arsenal, Roma–Monaco, Milan–Tottenham und Napoli–Inter.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,type:'Auslosung',date,competition:'UEFA Champions League',fixtureDate:'Achtelfinale 2041/42',
    headline:'Achtelfinale steht: Finn Harps bekommt Caen zugelost',
    subheadline:'Nach Platz zwei in der Ligaphase führt der Weg der Harps im Champions-League-Achtelfinale nach Frankreich. Caen ist der Gegner, während mehrere europäische Schwergewichte bereits direkt aufeinandertreffen.',
    label:'CHAMPIONS LEAGUE · ACHTELFINALE-AUSLOSUNG · 24.02.2042',
    heroStat:{label:'Harps-Gegner',value:'Caen',note:'Achtelfinale · UEFA Champions League'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Der nächste europäische Schritt ist ausgelost. Finn Harps trifft im Achtelfinale der Champions League auf Caen. Die Harps gehen damit einem der ganz großen Namen zunächst aus dem Weg, während die Auslosung an anderer Stelle mehrere Schwergewichtsduelle produziert.',
    sections:[
      {title:'Caen wartet auf die Harps',text:'Das dritte gezogene Duell lautet Caen gegen Finn Harps. Nach dem zweiten Platz in der Ligaphase kennt der irische Meister damit seinen ersten Gegner in der K.-o.-Phase.'},
      {title:'England räumt sich teilweise selbst aus dem Weg',text:'Mit Manchester United gegen Arsenal kommt es zu einem rein englischen Duell. Chelsea muss zu Benfica, Newcastle trifft auf Barcelona und Manchester City bekommt Grenoble.'},
      {title:'Italienischer Block mit großen Namen',text:'Roma trifft auf Monaco, Milan auf Tottenham und Napoli auf Inter. Damit steht auch ein rein italienisches Achtelfinale auf dem Programm.'},
      {title:'Alle acht Paarungen',text:'Benfica – Chelsea · Newcastle – Barcelona · Caen – Finn Harps · Grenoble – Man City · Man Utd – Arsenal · Roma – Monaco · Milan – Tottenham · Napoli – Inter.'}
    ],
    verdictHeading:'Ein Los, das sofort Träume erlaubt',
    verdict:'Caen ist im Vergleich zu Barcelona, Manchester City oder Chelsea das weniger glamouröse Los. Genau darin liegt aber die Gefahr eines K.-o.-Duells: Namen gewinnen keine Spiele. Für Finn Harps ist es dennoch eine Auslosung, bei der der Blick auf das Viertelfinale erlaubt sein dürfte, ohne den französischen Gegner zu unterschätzen.',
    sourcesHeading:'Grundlage',
    sourcesNote:'Die acht Achtelfinalpaarungen basieren auf dem FM-Screenshot der Champions-League-Auslosung.',
    sources:['FM24 · UEFA Champions League · Achtelfinale-Auslosung · 24.02.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-02-24-champions-league-round-of-16-draw',date,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · ACHTELFINALE',title:'Caen wartet: Harps kennen ihren Achtelfinalgegner',
    summary:'Finn Harps trifft im Achtelfinale auf Caen. Gleichzeitig gibt es unter anderem Man Utd gegen Arsenal, Newcastle gegen Barcelona und Napoli gegen Inter.',
    href:`presse.html?id=${reportId}`,reportId
  });
})();