(()=>{
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-04-15';
  const reportId='2042-04-15-champions-league-halbfinale-paarungen';
  const ties=[
    {id:1,home:'Barcelona',away:'Finn Harps',finnHarps:true},
    {id:2,home:'Man Utd',away:'Inter'}
  ];

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...current,
    season:'2041/42',
    semifinalPairings:{
      date,
      ties,
      finnHarpsOpponent:'Barcelona',
      headline:'Finn Harps trifft im Champions-League-Halbfinale auf Barcelona.'
    },
    knockoutStage:{
      ...(current.knockoutStage||{}),
      semifinals:{
        date,
        ties,
        finnHarps:{opponent:'Barcelona',pairing:'Barcelona – Finn Harps',status:'Paarung steht'}
      }
    },
    headline:'Champions-League-Halbfinale steht: Barcelona gegen Finn Harps, Manchester United gegen Inter.'
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Champions League: Nach dem 4:0 gegen Manchester City trifft Finn Harps im Halbfinale auf Barcelona.';
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.semifinal={
      ...(season.championsLeague.semifinal||{}),
      opponent:'Barcelona',pairing:'Barcelona – Finn Harps',allTies:ties,status:'Paarungen stehen'
    };
    season.nextFocus={competition:'UEFA Champions League',stage:'Halbfinale',opponent:'Barcelona',status:'Paarung steht'};
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='15.04.2042: Die Champions-League-Halbfinals stehen fest. Finn Harps trifft nach dem 4:0-Gesamtsieg gegen Manchester City auf Barcelona; das zweite Halbfinale lautet Manchester United gegen Inter.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,type:'Auslosung',date,competition:'UEFA Champions League',fixtureDate:'Halbfinale 2041/42',
    headline:'Jetzt Barcelona: Die Harps stehen vor dem nächsten europäischen Giganten',
    subheadline:'Nach dem 4:0-Gesamtsieg gegen Manchester City ist der nächste Gegner fix: Finn Harps trifft im Champions-League-Halbfinale auf Barcelona. Das zweite Duell lautet Manchester United gegen Inter.',
    label:'CHAMPIONS LEAGUE · HALBFINALE · 15.04.2042',
    heroStat:{label:'Halbfinale',value:'Barcelona – Finn Harps',note:'Zweites Duell: Manchester United – Inter'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Vier Mannschaften sind übrig. Finn Harps hat Manchester City über 180 Minuten mit 4:0 ausgeschaltet und bekommt nun Barcelona zugelost. Auf der anderen Seite des Turnierbaums kämpfen Manchester United und Inter um das zweite Finalticket.',
    sections:[
      {title:'Barcelona ist die nächste Hürde',text:'Nach dem souveränen Viertelfinale gegen Manchester City geht es für Finn Harps gegen Barcelona weiter. Die Paarung steht fest; damit wartet erneut ein Gegner aus der absoluten europäischen Spitze.'},
      {title:'United gegen Inter auf der anderen Seite',text:'Im zweiten Halbfinale treffen Manchester United und Inter aufeinander. Damit ist das komplette Feld der letzten vier Mannschaften der Champions League 2041/42 gesetzt.'},
      {title:'Vom Viertelfinalstatement zum Halbfinaltest',text:'Das 4:0 insgesamt gegen Manchester City verändert die Wahrnehmung der Harps. Der Halbfinaleinzug ist nicht das Produkt eines glücklichen Abends, sondern folgt auf zwei Spiele ohne Gegentor gegen einen englischen Spitzenklub. Barcelona wird dennoch eine neue Aufgabe mit eigener Dynamik.'}
    ],
    verdictHeading:'Noch zwei Spiele bis zum Finale',
    verdict:'Finn Harps gehört erneut zu den letzten vier Europas. Nach dem klaren Ausschalten von Manchester City ist Barcelona der nächste Prüfstein. Das Halbfinale ist damit nicht nur erreicht, sondern bereits die nächste Bühne für einen möglichen weiteren Schritt in Richtung Champions-League-Titel.',
    sources:['FM-Wettbewerbsübersicht UEFA Champions League · Halbfinalpaarungen · 15.04.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  window.FM_NEWS.forEach(item=>{if(item&&item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-04-15-champions-league-semifinal-pairings',date,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · HALBFINALE',
    title:'Barcelona wartet: Halbfinalpaarungen stehen fest',
    summary:'Finn Harps trifft im Champions-League-Halbfinale auf Barcelona. Das zweite Duell lautet Manchester United gegen Inter.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','barcelona','man-utd','inter','champions-league','season-2042']
  });
})();