(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const matchId='2041-07-07-caen-milan-club-world-cup-final';
  const match={
    id:matchId,date:'2041-07-07',season:2041,competition:'FIFA Club World Cup',stage:'Finale',
    home:{id:'caen',name:'Caen',short:'CAE',score:1},
    away:{id:'ac-milan',name:'AC Milan',short:'MIL',score:3},
    score:'1:3',homeGoals:1,awayGoals:3,
    events:[
      {minute:12,type:'goal',team:'AC Milan',player:'W. Helene',text:'0:1'},
      {minute:60,type:'goal',team:'Caen',player:'Emerson',text:'1:1'},
      {minute:66,type:'goal',team:'AC Milan',player:'W. Helene',text:'1:2'},
      {minute:73,type:'goal',team:'AC Milan',player:'J. Gilson',text:'1:3'}
    ],
    headline:'AC Milan schlägt Caen 3:1 und gewinnt die Klub-WM 2041',
    verdict:'Milan gewinnt das Finale mit 3:1. W. Helene trifft doppelt, J. Gilson setzt den Schlusspunkt; Emerson erzielt Caens zwischenzeitliches 1:1.',
    reportStatus:'score-only',
    sources:['FM-Wettbewerbsübersicht FIFA Club World Cup · 07.07.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const milan=(window.FM_CLUBS||[]).find(x=>x.id==='ac-milan'||x.name==='AC Milan'||x.name==='Milan')||{};
  upsert(window.FM_CLUBS,{
    ...milan,id:'ac-milan',name:'AC Milan',short:'MIL',country:'Italien',
    clubWorldCup2041:{stage:'Sieger',status:'Champion',finalOpponent:'Caen',finalResult:'3:1',scorers:['W. Helene 12.','W. Helene 66.','J. Gilson 73.']},
    summary:'Klub-Weltmeister 2041. AC Milan gewann das Finale gegen Caen mit 3:1. W. Helene traf doppelt, J. Gilson erzielte den dritten Treffer.'
  });

  const caen=(window.FM_CLUBS||[]).find(x=>x.id==='caen'||x.name==='Caen')||{};
  upsert(window.FM_CLUBS,{
    ...caen,id:'caen',name:'Caen',short:'CAE',country:'Frankreich',
    clubWorldCup2041:{stage:'Finale',status:'Zweiter',finalOpponent:'AC Milan',finalResult:'1:3',scorer:'Emerson 60.'},
    summary:'Vize-Klubweltmeister 2041. Caen verlor das Finale gegen AC Milan mit 1:3; Emerson erzielte in der 60. Minute den zwischenzeitlichen Ausgleich.'
  });

  const current=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...current,
    id:'club-world-cup-2041',year:2041,status:'completed',titleHolder:'AC Milan',previousTitleHolder:'Finn Harps',group:'H',
    champion:'AC Milan',runnerUp:'Caen',third:'Finn Harps',fourth:'São Paulo',
    final:{home:'Caen',away:'AC Milan',score:'1:3',status:'gespielt',winner:'AC Milan',scorers:['Emerson 60.','W. Helene 12., 66.','J. Gilson 73.']},
    finalStandings:[
      {position:1,club:'AC Milan'},
      {position:2,club:'Caen'},
      {position:3,club:'Finn Harps'},
      {position:4,club:'São Paulo'}
    ],
    headline:'Klub-WM 2041 beendet: AC Milan gewinnt das Finale 3:1 gegen Caen. Finn Harps schließt das Turnier auf Platz drei ab.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-07';
    season.latestHeadline='Klub-WM 2041 beendet: AC Milan ist Weltmeister, Finn Harps wird Dritter.';
    season.clubWorldCup={...(season.clubWorldCup||{}),status:'beendet',champion:'AC Milan',runnerUp:'Caen',finish:'3. Platz',finalResult:'Caen 1:3 AC Milan',lastHarpsResult:'06.07.2041 · São Paulo 2:3 Finn Harps'};
    season.changes=season.changes||{notes:[]};
    const note='07.07.2041: AC Milan gewinnt das Klub-WM-Finale 3:1 gegen Caen. Finn Harps beendet das Turnier auf Rang drei.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  upsert(window.FM_NEWS,{
    id:'2041-07-07-klub-wm-finale-milan',date:'2041-07-07',season:2041,category:'Klub-WM',accent:'red',featured:false,
    eyebrow:'FIFA CLUB WORLD CUP · FINALE',title:'Milan übernimmt die Weltkrone',
    summary:'AC Milan schlägt Caen im Finale 3:1. W. Helene trifft doppelt, J. Gilson erzielt den dritten Treffer. Finn Harps beendet die Klub-WM 2041 auf Platz drei.',
    href:'spiele.html',entities:['ac-milan','caen','finn-harps','club-world-cup']
  });
})();