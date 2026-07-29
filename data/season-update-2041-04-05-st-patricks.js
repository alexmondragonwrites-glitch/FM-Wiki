(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-04-05';
  season.snapshotDate='2041-04-05';
  season.headline='Erster Punktverlust trotz 2,42 xG';
  season.summary="Finn Harps spielt im ausverkauften Donegal Stadium 0:0 gegen St Patrick's Athletic. Der Meister dominiert mit 19:4 Schüssen, 65 Prozent Ballbesitz und 2,42:0,41 xG, bringt aber nur vier Abschlüsse auf das Tor.";
  season.league2041={played:8,wins:7,draws:1,losses:0,goalsFor:27,goalsAgainst:1,goalDiff:26,points:22,position:1,lead:'4 Punkte vor Waterford'};
  season.leagueLeaders={topScorer:'Justin Ramsey · 8 Tore',bestRating:"Billy Walker · 7,7 gegen St Patrick's",ramseyRating:'Justin Ramsey · ohne Tor nach Einwechslung',cleanSheets:'Paulo Henrique · kein Schuss aufs Tor zugelassen',reputation:'Rang 12 in Europa'};
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[
    ...(season.changes.notes||[]).filter(note=>!String(note).includes('05.04.2041')&&!String(note).includes('22 Punkte')),
    "05.04.2041: 0:0 gegen St Patrick's Athletic; erster Punktverlust der Ligasaison",
    '19:4 Schüsse, 4:0 Schüsse aufs Tor und 2,42:0,41 xG ohne eigenen Treffer',
    'Billy Walker wird nach seiner Einwechslung mit Note 7,7 bester Finn-Harps-Spieler',
    'Paulo Henrique bleibt ohne gegnerischen Schuss aufs Tor',
    'Giacomo Papini absolviert sein 125. Ligaspiel für Finn Harps',
    'Premier Division: 22 Punkte, 27:1 Tore und vier Punkte Vorsprung auf Waterford'
  ];
})();