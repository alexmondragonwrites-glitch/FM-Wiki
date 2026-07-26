(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-03-13';
  season.snapshotDate='2041-03-13';
  season.headline='Gedreht: Finn Harps steht im Champions-League-Viertelfinale';
  season.summary='Finn Harps gewinnt das Achtelfinalrückspiel gegen A.S. Roma mit 2:0 und dreht das Duell nach dem 1:2 im Hinspiel zu einem 3:2-Gesamtsieg. Justin Ramsey und Jim O’Neill treffen im Donegal Stadium.';
  season.championsLeagueRoundOf16={
    ...(season.championsLeagueRoundOf16||{}),
    opponent:'A.S. Roma',
    firstLeg:'A.S. Roma 2:1 Finn Harps',
    secondLeg:'Finn Harps 2:0 A.S. Roma',
    aggregate:'3:2 für Finn Harps',
    status:'Viertelfinale erreicht'
  };
  season.championsLeague={...(season.championsLeague||{}),stage:'Viertelfinale',roundOf16Result:'3:2 gegen A.S. Roma',prizeMoney:'€9,6 Mio. für den Viertelfinaleinzug'};
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[
    ...(season.changes.notes||[]).filter(note=>!String(note).includes('13.03.2041')&&!String(note).includes('Viertelfinaleinzug')),
    '13.03.2041: 2:0 gegen A.S. Roma im Champions-League-Achtelfinalrückspiel',
    'Finn Harps dreht das Duell nach dem 1:2 im Hinspiel zu einem 3:2-Gesamtsieg',
    'Justin Ramsey trifft in der 8. Minute per Elfmeter',
    'Jim O’Neill erzielt in der 41. Minute sein 25. Tor für Finn Harps',
    '15:5 Schüsse, 2,28:0,70 xG und 56 Prozent Ballbesitz',
    'Finn Harps erreicht das Champions-League-Viertelfinale und erhält €9,6 Mio.',
    'Torric Bruce absolviert sein 150. Profispiel',
    'Eduardo Blanco absolviert seinen 150. Einsatz für Finn Harps'
  ];
})();
