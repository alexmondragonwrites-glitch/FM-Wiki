(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-02-22';
  season.snapshotDate='2041-02-22';
  season.headline='Zwei Ligaspiele, zwei Siege, zweimal 4:0';
  season.summary='Finn Harps folgt dem 4:0 gegen Cork City mit einem 4:0 bei Sligo Rovers. Diego Fernández trifft nach zwei Minuten, Justin Ramsey liefert als Joker Tor und Vorlage, Daryl Frame und Kevin Kelly vollenden einen Auswärtssieg mit 77 Prozent Ballbesitz und 804 angekommene Pässen.';
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[
    ...(season.changes.notes||[]).filter(note=>!String(note).includes('Sligo Rovers')&&!String(note).includes('zwei Ligaspiele')),
    '22.02.2041: 4:0 bei Sligo Rovers am zweiten Spieltag der Premier Division',
    'Diego Fernández trifft nach zwei Minuten in seinem 75. Einsatz für Finn Harps',
    'Justin Ramsey entscheidet die Partie als Joker mit einem Tor und einer Vorlage',
    '77 Prozent Ballbesitz, 804 angekommene Pässe und 91 Prozent Passquote',
    'Darcy Andrews absolviert sein 200. Spiel für Finn Harps',
    'Nach zwei Ligaspielen stehen acht Tore und kein Gegentor',
    'Finn Harps ist seit 17 Spielen ungeschlagen'
  ];
})();