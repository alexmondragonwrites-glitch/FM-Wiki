(()=>{
  window.FM_EUROPA_LEAGUE=window.FM_EUROPA_LEAGUE||{};
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-04-15';
  const reportId='2042-04-15-europa-league-halbfinale-st-patricks';
  const pairings=[
    {home:'Sevilla',away:'Djurgårdens IF'},
    {home:"St Patrick's Athletic",away:'Rapid Wien',irishClub:true}
  ];

  window.FM_EUROPA_LEAGUE['2041-42']={
    ...(window.FM_EUROPA_LEAGUE['2041-42']||{}),
    season:'2041/42',
    titleHolder:'West Ham',
    stage:'Halbfinale',
    date,
    pairings,
    irishStory:{club:"St Patrick's Athletic",opponent:'Rapid Wien',stage:'Halbfinale'}
  };

  const stPatricks=window.FM_CLUBS.find(x=>x.id==='st-patricks'||x.name==="St Patrick's Athletic"||x.name==="St Patrick's Athletic FC");
  if(stPatricks){
    stPatricks.status='current';
    stPatricks.season=2042;
    stPatricks.tags=[...new Set([...(stPatricks.tags||[]),'Europa League 2041/42','Europa-League-Halbfinale'])];
    stPatricks.europeanRun={competition:'UEFA Europa League',season:'2041/42',stage:'Halbfinale',opponent:'Rapid Wien',status:'Paarung steht'};
    stPatricks.summary="St Patrick's Athletic steht 2041/42 im Halbfinale der UEFA Europa League und trifft dort auf Rapid Wien. Parallel kämpft Finn Harps in der Champions League gegen Barcelona um den Finaleinzug – ein außergewöhnlicher Europafrühling für den irischen Vereinsfußball.";
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.irishEurope={
      date,
      headline:'Zwei irische Klubs stehen gleichzeitig in europäischen Halbfinals.',
      championsLeague:{club:'Finn Harps',stage:'Halbfinale',opponent:'Barcelona'},
      europaLeague:{club:"St Patrick's Athletic",stage:'Halbfinale',opponent:'Rapid Wien'},
      europaLeagueOtherPairing:'Sevilla – Djurgårdens IF'
    };
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note="15.04.2042: Auch in der Europa League ist Irland noch vertreten: St Patrick's Athletic steht im Halbfinale gegen Rapid Wien. Das zweite Duell lautet Sevilla gegen Djurgårdens IF. Parallel spielt Finn Harps im Champions-League-Halbfinale gegen Barcelona.";
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,type:'Wettbewerbsupdate',date,competition:'UEFA Europa League',fixtureDate:'Halbfinale 2041/42',
    headline:"Irlands goldener Europafrühling: St Patrick's steht im Europa-League-Halbfinale",
    subheadline:"Während Finn Harps in der Champions League Barcelona fordert, erreicht St Patrick's Athletic das Halbfinale der Europa League und trifft auf Rapid Wien. Das zweite Halbfinale lautet Sevilla gegen Djurgårdens IF.",
    label:'EUROPA LEAGUE · HALBFINALE · 2041/42',
    heroStat:{label:'Irische Halbfinalisten in Europa',value:'2',note:"Finn Harps · Champions League | St Patrick's Athletic · Europa League"},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:"Der irische Vereinsfußball erlebt einen außergewöhnlichen europäischen Frühling. Finn Harps steht nach dem 4:0-Gesamtsieg über Manchester City im Halbfinale der Champions League, nun ist auch St Patrick's Athletic unter den letzten vier der Europa League angekommen.",
    sections:[
      {title:"St Patrick's gegen Rapid Wien",text:"St Patrick's Athletic bekommt es im Europa-League-Halbfinale mit Rapid Wien zu tun. Schon der Einzug unter die letzten vier macht den Lauf des irischen Klubs zu einer der bemerkenswertesten europäischen Geschichten der Saison."},
      {title:'Sevilla gegen Djurgårdens IF',text:'Im zweiten Halbfinale treffen Sevilla und Djurgårdens IF aufeinander. Damit stehen vier Vereine aus vier unterschiedlichen Ländern im Kampf um den Europa-League-Titel.'},
      {title:'Irland auf zwei Bühnen',text:"Die eigentliche Besonderheit liegt im Gesamtbild: Finn Harps spielt gleichzeitig um das Champions-League-Finale, St Patrick's um das Europa-League-Finale. Für die Save-Welt ist das ein deutlicher Hinweis darauf, wie weit sich der irische Vereinsfußball insgesamt entwickelt hat."}
    ],
    verdictHeading:'Nicht mehr nur Finn Harps',
    verdict:"Finn Harps bleibt das europäische Flaggschiff Irlands, aber St Patrick's Lauf zeigt, dass die internationale Entwicklung inzwischen breiter wird. Zwei irische Vereine gleichzeitig in den Halbfinals der beiden größten UEFA-Klubwettbewerbe sind ein starkes Symbol für den gestiegenen Stellenwert der Liga.",
    sources:['FM-Wettbewerbsübersicht UEFA Europa League · Halbfinale 2041/42 · Titelverteidiger West Ham']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-04-15-st-patricks-europa-league-semifinal',date,season:2042,category:'Europa League',accent:'green',featured:false,
    eyebrow:'EUROPA LEAGUE · HALBFINALE',
    title:"St Patrick's schreibt Europas nächste irische Geschichte",
    summary:"St Patrick's Athletic trifft im Europa-League-Halbfinale auf Rapid Wien. Parallel steht Finn Harps in der Champions League gegen Barcelona unter den letzten vier.",
    href:`presse.html?id=${reportId}`,
    entities:['st-patricks','rapid-wien','europa-league','finn-harps','season-2042']
  });
})();