(()=>{
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const drawDate='2042-03-21';
  const reportId='2042-03-21-champions-league-viertelfinale-auslosung';
  const ties=[
    {id:1,home:'Benfica',away:'Barcelona'},
    {id:2,home:'Finn Harps',away:'Man City',finnHarps:true},
    {id:3,home:'Man Utd',away:'Monaco'},
    {id:4,home:'Tottenham',away:'Inter'}
  ];

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...current,
    season:'2041/42',
    quarterFinalDraw:{
      date:drawDate,
      ties,
      finnHarpsOpponent:'Man City',
      headline:'Finn Harps trifft im Champions-League-Viertelfinale auf Manchester City.'
    },
    knockoutStage:{
      ...(current.knockoutStage||{}),
      quarterFinals:{
        drawDate,
        ties,
        finnHarps:{
          opponent:'Man City',
          pairing:'Finn Harps – Man City',
          status:'ausgelost'
        }
      }
    },
    headline:'Champions-League-Viertelfinale ausgelost: Finn Harps bekommt Manchester City zugelost.'
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=drawDate;
    season.latestHeadline='Champions League: Das Viertelfinale steht. Finn Harps trifft auf Manchester City.';
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.quarterFinal={
      ...(season.championsLeague.quarterFinal||{}),
      drawDate,
      opponent:'Man City',
      pairing:'Finn Harps – Man City',
      allTies:ties,
      status:'ausgelost'
    };
    season.nextFocus={competition:'UEFA Champions League',stage:'Viertelfinale',status:'ausgelost',opponent:'Man City'};
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='21.03.2042: Das Champions-League-Viertelfinale steht. Finn Harps trifft auf Man City; die weiteren Duelle sind Benfica–Barcelona, Man Utd–Monaco und Tottenham–Inter.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,
    type:'Auslosung',
    date:drawDate,
    competition:'UEFA Champions League',
    fixtureDate:'Viertelfinale 2041/42',
    headline:'Viertelfinale steht: Finn Harps bekommt Manchester City',
    subheadline:'Die letzten acht der Königsklasse sind gesetzt. Finn Harps trifft auf Manchester City, während Barcelona Benfica zugelost bekommt und Inter gegen Tottenham ran muss.',
    label:'CHAMPIONS LEAGUE · VIERTELFINALE-AUSLOSUNG · 21.03.2042',
    heroStat:{label:'Harps-Gegner',value:'Manchester City',note:'Viertelfinale · UEFA Champions League'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Die nächste europäische Hürde ist gezogen: Finn Harps trifft im Viertelfinale der Champions League auf Manchester City. Neben diesem Duell stehen drei weitere Paarungen fest.',
    sections:[
      {title:'Finn Harps gegen Manchester City',text:'Für die Harps führt der Weg ins Halbfinale über Manchester City. Die Auslosung setzt Finn Harps in Spiel 2 gegen den englischen Spitzenklub.'},
      {title:'Benfica fordert Barcelona',text:'Im ersten Viertelfinale trifft Benfica auf Barcelona. Damit scheidet mindestens eines der beiden traditionsreichen Teams vor dem Halbfinale aus.'},
      {title:'United gegen Monaco',text:'Manchester United bekommt es mit Monaco zu tun. Auch dieses Duell entscheidet über einen der vier Plätze im Halbfinale.'},
      {title:'Tottenham gegen Inter',text:'Das vierte Viertelfinale lautet Tottenham gegen Inter. Damit ist das komplette Feld der letzten acht Mannschaften ausgelost.'}
    ],
    verdictHeading:'Jetzt beginnt die schmale Straße zum Finale',
    verdict:'Mit Manchester City wartet auf Finn Harps ein Gegner aus dem obersten europäischen Regal. Nach dem klaren Weiterkommen gegen Caen steigt die Schwierigkeit deutlich, aber die Harps stehen erneut dort, wo sie inzwischen hingehören: unter den letzten acht Europas.',
    sources:['FM-Wettbewerbsansicht UEFA Champions League · Viertelfinal-Auslosung · 21.03.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-03-21-champions-league-quarterfinal-draw',
    date:drawDate,
    season:2042,
    category:'Champions League',
    accent:'blue',
    featured:true,
    eyebrow:'CHAMPIONS LEAGUE · VIERTELFINALE',
    title:'Manchester City wartet: Viertelfinale ausgelost',
    summary:'Finn Harps trifft im Champions-League-Viertelfinale auf Manchester City. Die weiteren Paarungen lauten Benfica–Barcelona, Man Utd–Monaco und Tottenham–Inter.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','man-city','champions-league','season-2042']
  });
})();