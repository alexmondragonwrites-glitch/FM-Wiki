(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-03-25';
  season.snapshotDate='2041-03-25';
  season.headline='Sieben Spiele, sieben Siege und wieder 4:0';
  season.summary='Finn Harps gewinnt bei Bohemian mit 4:0. Justin Ramsey trifft doppelt, Basile Rouvière und Diego Fernández ebenfalls. Nach sieben Ligaspielen führt der Meister mit 21 Punkten und 27:1 Toren.';
  season.league2041={played:7,wins:7,draws:0,losses:0,goalsFor:27,goalsAgainst:1,goalDiff:26,points:21,position:1,lead:'5 Punkte vor Derry City'};
  season.leagueLeaders={topScorer:'Justin Ramsey · 8 Tore',bestRating:'Offen nach dem 7. Spieltag',ramseyRating:'Justin Ramsey · zwei Tore gegen Bohemian',cleanSheets:'Evan Reilly · 450 Minuten ohne Gegentor',reputation:'Rang 12 in Europa'};
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[
    ...(season.changes.notes||[]).filter(note=>!String(note).includes('25.03.2041')&&!String(note).includes('27:1')),
    '25.03.2041: 4:0 bei Bohemian; siebter Sieg im siebten Ligaspiel',
    'Justin Ramsey erzielt zwei Tore und steht bei acht Ligatreffern',
    'Basile Rouvière trifft zum 3:0, Diego Fernández zum 4:0',
    'Eduardo Blanco wird mit Note 8,4 Spieler des Spiels',
    'Evan Reilly bleibt 450 Minuten in Folge ohne Gegentor für Finn Harps',
    'Diego Fernández absolviert sein 100. Ligaspiel, Jim O’Neill sein 225. Ligaspiel',
    'Radim Malý erreicht seinen 50. Einsatz für Finn Harps',
    'Premier Division: 21 Punkte, 27:1 Tore und fünf Punkte Vorsprung auf Derry City'
  ];
})();