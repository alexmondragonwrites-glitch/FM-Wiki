(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-03-08';
  season.snapshotDate='2041-03-08';
  season.headline='Vier Tore als Antwort vor dem Roma-Rückspiel';
  season.summary='Finn Harps gewinnt nach der 1:2-Niederlage im Champions-League-Hinspiel mit 4:0 gegen Waterford. Nach vier Premier-Division-Spielen steht der Titelverteidiger bei zwölf Punkten und 14:0 Toren.';
  season.league2041={played:4,wins:4,draws:0,losses:0,goalsFor:14,goalsAgainst:0,points:12};
  season.championsLeagueRoundOf16={...(season.championsLeagueRoundOf16||{}),opponent:'A.S. Roma',firstLeg:'A.S. Roma 2:1 Finn Harps',aggregate:'1:2 vor dem Rückspiel'};
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[
    ...(season.changes.notes||[]).filter(note=>!String(note).includes('08.03.2041')&&!String(note).includes('14:0')),
    '08.03.2041: 4:0 gegen Waterford in der Generalprobe vor dem Roma-Rückspiel',
    'Premier Division nach vier Spielen: zwölf Punkte und 14:0 Tore',
    'Romano Maisto, Eduardo Blanco, Ben Barry und Jake Roberts treffen',
    'Jake Roberts erzielt sein erstes Tor für Finn Harps',
    'Evan Reilly bleibt seit 270 Minuten ohne Gegentor',
    'Gustavo da Silva absolviert sein 75. Ligaspiel; Vinícius sein 150. Ligaspiel für Finn Harps'
  ];
})();
