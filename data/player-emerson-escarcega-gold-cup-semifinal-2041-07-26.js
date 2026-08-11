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
    player.profileDate='2041-07-26';
    player.currentClub='Finn Harps';
    player.status='Finn Harps · mit Mexiko im Gold-Cup-Halbfinale';
    player.availability='Nationalmannschaft · CONCACAF Gold Cup';
    player.internationalDuty={
      ...(player.internationalDuty||{}),
      nation:'Mexiko',
      competition:'CONCACAF Gold Cup',
      status:'Halbfinale erreicht',
      referenceDate:'2041-07-26',
      latestResult:'Mexiko 4:1 Panama · Viertelfinale · 26.07.2041',
      nextOpponent:'El Salvador',
      nextStage:'Halbfinale',
      tournamentContext:'Mexiko geht als Titelverteidiger in die Schlussphase des Gold Cups.',
      note:'Escárcega bleibt wegen Mexikos Halbfinaleinzug weiter bei der Nationalmannschaft und steht Finn Harps vorerst nicht regulär zur Verfügung.'
    };
    player.internationalTournamentStats={
      competition:'CONCACAF Gold Cup 2041',
      referenceDate:'2041-07-26',
      averageRating:8.30,
      assists:3,
      averageRatingRank:2,
      assistsRank:'geteilt 2.',
      injuryStatus:'keine Verletzung im Turnierstand ausgewiesen',
      note:'Im sichtbaren Turnierüberblick besitzt Escárcega mit 8,30 die zweitbeste Durchschnittsnote des gesamten Wettbewerbs. Seine drei Vorlagen liegen gemeinsam mit mehreren Spielern auf Rang zwei der Assistwertung.'
    };
    player.careerNarrative=player.careerNarrative||[];
    const narrative='26.07.2041: Mexiko erreicht beim CONCACAF Gold Cup nach einem 4:1 gegen Panama das Halbfinale gegen El Salvador. Emerson Escárcega gehört mit einer Durchschnittsnote von 8,30 und drei Vorlagen zu den auffälligsten Spielern des Turniers.';
    if(!player.careerNarrative.includes(narrative))player.careerNarrative.push(narrative);
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2041-07-26-emerson-escarcega-gold-cup-semifinal',
    date:'2041-07-26',
    player:'Emerson Escárcega',
    type:'international-duty',
    title:'Escárcega mit Mexiko im Gold-Cup-Halbfinale',
    detail:'Mexiko schlägt Panama im Viertelfinale 4:1 und trifft nun auf El Salvador. Escárcega steht im Turnierüberblick bei einer Durchschnittsnote von 8,30, der zweitbesten des Wettbewerbs, und bei drei Vorlagen.'
  });

  upsert(window.FM_NEWS,{
    id:'2041-07-26-escarcega-gold-cup-semifinal',
    date:'2041-07-26',
    season:2041,
    category:'Nationalteam',
    accent:'green',
    featured:false,
    eyebrow:'CONCACAF GOLD CUP · MEXIKO IM HALBFINALE',
    title:'Escárcega glänzt auf Mexikos Weg ins Halbfinale',
    summary:'Titelverteidiger Mexiko steht nach dem 4:1 gegen Panama im Gold-Cup-Halbfinale gegen El Salvador. Finn-Harps-Stürmer Emerson Escárcega zählt mit 8,30 Durchschnittsnote und drei Vorlagen zu den besten Spielern des Turniers.',
    href:'spieler.html?id=emerson-escarcega',
    entities:['emerson-escarcega','finn-harps','mexico','concacaf-gold-cup']
  });
})();