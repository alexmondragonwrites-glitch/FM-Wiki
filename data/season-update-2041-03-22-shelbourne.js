(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-03-22';
  season.snapshotDate='2041-03-22';
  season.headline='Ramsey-Hattrick und 22:1 Tore nach sechs Spielen';
  season.summary='Finn Harps gewinnt bei Shelbourne mit 5:1. Justin Ramsey erzielt einen Hattrick, Jake Roberts und Ben Barry treffen ebenfalls. Der Meister führt die Premier Division mit 18 Punkten und 22:1 Toren an.';
  season.league2041={played:6,wins:6,draws:0,losses:0,goalsFor:22,goalsAgainst:1,goalDiff:21,points:18,position:1,lead:'2 Punkte vor Derry City bei einem Spiel weniger'};
  season.leagueLeaders={topScorer:'Justin Ramsey · 6 Tore',bestRating:'Romano Maisto · 7,73',ramseyRating:'Justin Ramsey · 7,68',cleanSheets:'Evan Reilly · 3 / Paulo Henrique · 2',reputation:'Rang 12 in Europa'};
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[
    ...(season.changes.notes||[]).filter(note=>!String(note).includes('22.03.2041')&&!String(note).includes('22:1')),
    '22.03.2041: 5:1 bei Shelbourne; sechster Sieg im sechsten Ligaspiel',
    'Justin Ramsey erzielt einen Hattrick und erreicht 75 Ligatore sowie 75 Tore für Finn Harps',
    'Jake Roberts und Ben Barry treffen als Einwechselspieler',
    'Erstes Ligagegentor der Saison durch Callum Joyce in der 83. Minute',
    'Premier Division: 18 Punkte, 22:1 Tore und zwei Punkte Vorsprung auf Derry City bei einem Spiel weniger',
    'Ben Barry absolviert sein 25. Profispiel'
  ];
})();
