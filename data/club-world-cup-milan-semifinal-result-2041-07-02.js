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

  const matchId='2041-07-02-sao-paulo-milan-club-world-cup-semifinal';
  const match={
    id:matchId,date:'2041-07-02',season:2041,competition:'FIFA Club World Cup',stage:'Halbfinale',
    home:{id:'sao-paulo',name:'São Paulo',short:'SAO',score:0},
    away:{id:'ac-milan',name:'AC Milan',short:'MIL',score:1},
    score:'0:1 n. V.',homeGoals:0,awayGoals:1,afterExtraTime:true,
    events:[{minute:116,type:'goal',team:'AC Milan',player:'J. Gilson',text:'0:1'}],
    headline:'Gilson schießt Milan in der 116. Minute ins Klub-WM-Finale',
    verdict:'AC Milan gewinnt das erste Halbfinale der Klub-WM mit 1:0 nach Verlängerung gegen São Paulo und steht als erster Finalist fest.',
    reportStatus:'score-only',
    sources:['FM-Wettbewerbsübersicht FIFA Club World Cup · 02.07.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const milan=(window.FM_CLUBS||[]).find(x=>x.id==='ac-milan'||x.name==='AC Milan'||x.name==='Milan')||{};
  upsert(window.FM_CLUBS,{
    ...milan,id:'ac-milan',name:'AC Milan',short:'MIL',country:'Italien',scope:[...(milan.scope||[]).filter(x=>x!=='Club World Cup'),'Club World Cup'],
    clubWorldCup2041:{stage:'Finale',status:'qualifiziert',semifinalOpponent:'São Paulo',semifinalResult:'1:0 n. V.',matchWinner:'J. Gilson 116.'},
    summary:'Erster Finalist der Klub-WM 2041. Milan setzte sich im Halbfinale mit 1:0 nach Verlängerung gegen São Paulo durch; J. Gilson erzielte in der 116. Minute den einzigen Treffer.'
  });

  const sao=(window.FM_CLUBS||[]).find(x=>x.id==='sao-paulo'||x.name==='São Paulo')||{};
  upsert(window.FM_CLUBS,{
    ...sao,id:'sao-paulo',name:'São Paulo',short:'SAO',country:'Brasilien',scope:[...(sao.scope||[]).filter(x=>x!=='Club World Cup'),'Club World Cup'],
    clubWorldCup2041:{stage:'Halbfinale',status:'ausgeschieden',opponent:'AC Milan',result:'0:1 n. V.'}
  });

  const current=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...current,
    id:'club-world-cup-2041',year:2041,status:'semi-final',titleHolder:'Finn Harps',group:'H',
    finalists:['AC Milan'],
    semifinalResults:[...(current.semifinalResults||[]).filter(x=>x.id!==matchId),{id:matchId,date:'2041-07-02',home:'São Paulo',away:'AC Milan',result:'0:1 n. V.',winner:'AC Milan',scorer:'J. Gilson 116.'}],
    knockout:{
      ...(current.knockout||{}),round:'Halbfinale',firstFinalist:'AC Milan',
      firstSemifinal:'São Paulo 0:1 n. V. AC Milan',
      secondSemifinal:'Finn Harps vs. Caen',
      potentialFinalOpponent:'AC Milan'
    },
    headline:'Klub-WM 2041: AC Milan steht nach einem 1:0 n. V. gegen São Paulo als erster Finalist fest. J. Gilson traf in der 116. Minute; Finn Harps und Caen spielen den zweiten Finalplatz aus.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-02';
    season.latestHeadline:'AC Milan steht als erster Klub-WM-Finalist fest; Finn Harps spielt gegen Caen um den zweiten Finalplatz.';
    season.latestHeadline='AC Milan steht als erster Klub-WM-Finalist fest; Finn Harps spielt gegen Caen um den zweiten Finalplatz.';
    season.clubWorldCup={...(season.clubWorldCup||{}),status:'Halbfinale',firstFinalist:'AC Milan',firstSemifinalResult:'São Paulo 0:1 n. V. AC Milan',nextOpponent:'Caen',potentialFinalOpponent:'AC Milan'};
    season.changes=season.changes||{notes:[]};
    const note='02.07.2041: AC Milan gewinnt das erste Klub-WM-Halbfinale 1:0 n. V. gegen São Paulo; J. Gilson trifft in der 116. Minute. Milan ist erster Finalist.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  upsert(window.FM_NEWS,{
    id:'2041-07-02-klub-wm-erster-finalist-milan',date:'2041-07-02',season:2041,category:'Klub-WM',accent:'red',featured:false,
    eyebrow:'FIFA CLUB WORLD CUP · HALBFINALE',title:'Milan wartet im Finale',
    summary:'AC Milan schlägt São Paulo 1:0 nach Verlängerung. J. Gilson erzielt in der 116. Minute den einzigen Treffer. Finn Harps und Caen spielen nun um den zweiten Finalplatz.',
    href:'saison.html',entities:['ac-milan','sao-paulo','club-world-cup']
  });
})();