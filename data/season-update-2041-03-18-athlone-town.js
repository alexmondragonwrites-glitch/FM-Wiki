(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-03-18';
  season.snapshotDate='2041-03-18';
  season.headline='Nächstes Spiel, nächstes 4:0';
  season.summary='Finn Harps gewinnt fünf Tage nach dem Einzug ins Champions-League-Viertelfinale mit 4:0 bei Athlone Town. Nach fünf Premier-Division-Spielen steht der Titelverteidiger bei 15 Punkten und 18:0 Toren.';
  season.league2041={played:5,wins:5,draws:0,losses:0,goalsFor:18,goalsAgainst:0,points:15};
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[
    ...(season.changes.notes||[]).filter(note=>!String(note).includes('18.03.2041')&&!String(note).includes('18:0')),
    '18.03.2041: 4:0 bei Athlone Town im ersten Spiel nach dem Roma-Comeback',
    'Premier Division nach fünf Spielen: 15 Punkte und 18:0 Tore',
    'Eduardo Blanco erzielt nach seiner Einwechslung einen Doppelpack binnen vier Minuten',
    'Jake Roberts bereitet zwei Treffer vor',
    'Evan Reilly bleibt seit 360 Minuten ohne Gegentor',
    'Torric Bruce absolviert sein 50. Ligaspiel für Finn Harps; Giacomo Papini sein 100. Profispiel'
  ];
})();
