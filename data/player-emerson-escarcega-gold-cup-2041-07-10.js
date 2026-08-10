(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]={...list[index],...item};else list.push(item);
  };

  const player=(window.FM_PLAYERS||[]).find(p=>p.id==='emerson-escarcega'||p.name==='Emerson Escárcega');
  if(player){
    player.profileDate='2041-07-10';
    player.currentClub='Finn Harps';
    player.status='Finn Harps · aktuell bei Mexiko';
    player.availability='Nationalmannschaft · CONCACAF Gold Cup';
    player.internationalDuty={
      nation:'Mexiko',
      competition:'CONCACAF Gold Cup',
      status:'abgestellt',
      referenceDate:'2041-07-10',
      group:'C',
      fixtures:[
        {date:'2041-07-14',opponent:'Trinidad & Tobago',venue:'Neutral'},
        {date:'2041-07-18',opponent:'Haiti',venue:'Neutral'},
        {date:'2041-07-22',opponent:'Martinique',venue:'Neutral'}
      ],
      note:'Escárcega steht Finn Harps während Mexikos Gold-Cup-Aufenthalt nicht regulär für den Klub zur Verfügung. Ein Rückkehrdatum hängt vom Turnierverlauf Mexikos ab.'
    };
    player.careerNarrative=player.careerNarrative||[];
    const narrative='Nach seinem Wechsel zu Finn Harps ist Escárcega im Juli 2041 zunächst mit Mexiko beim CONCACAF Gold Cup unterwegs. Mexiko spielt in Gruppe C gegen Trinidad & Tobago, Haiti und Martinique.';
    if(!player.careerNarrative.includes(narrative))player.careerNarrative.push(narrative);
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2041-07-10-emerson-escarcega-gold-cup',
    date:'2041-07-10',
    player:'Emerson Escárcega',
    type:'international-duty',
    title:'Mit Mexiko beim Gold Cup',
    detail:'Der neue Finn-Harps-Stürmer ist im Juli 2041 mit Mexiko beim CONCACAF Gold Cup. In Gruppe C warten Trinidad & Tobago, Haiti und Martinique; seine Rückkehr zu den Harps hängt vom Turnierverlauf ab.'
  });

  upsert(window.FM_NEWS,{
    id:'2041-07-10-escarcega-gold-cup',
    date:'2041-07-10',
    season:2041,
    category:'Nationalteam',
    accent:'green',
    featured:false,
    eyebrow:'CONCACAF GOLD CUP · MEXIKO',
    title:'Escárcega noch auf Länderspielreise',
    summary:'Finn Harps müssen im Juli zunächst auf Neuzugang Emerson Escárcega verzichten. Der mexikanische Nationalstürmer ist beim Gold Cup und trifft in Gruppe C auf Trinidad & Tobago, Haiti und Martinique.',
    href:'spieler.html?id=emerson-escarcega',
    entities:['emerson-escarcega','finn-harps','mexico']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-10';
    season.changes=season.changes||{notes:[]};
    const note='10.07.2041: Neuzugang Emerson Escárcega ist mit Mexiko beim CONCACAF Gold Cup und fehlt Finn Harps vorerst im Ligabetrieb.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }
})();