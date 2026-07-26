(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-03-01';
  season.snapshotDate='2041-03-01';
  season.headline='Perfekter Ligastart: neun Punkte und 10:0 Tore';
  season.summary='Finn Harps gewinnt nach den beiden 4:0-Erfolgen auch gegen Shamrock Rovers. Justin Ramsey trifft per Elfmeter, Torric Bruce per Kopf. Nach drei Spieltagen stehen neun Punkte, 10:0 Tore und drei Zu-null-Spiele.';
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[
    ...(season.changes.notes||[]).filter(note=>!String(note).includes('Shamrock Rovers')&&!String(note).includes('10:0 Tore')),
    '01.03.2041: 2:0 gegen Shamrock Rovers am dritten Spieltag der Premier Division',
    'Justin Ramsey erzielt in der 59. Minute per Elfmeter das 1:0',
    'Torric Bruce trifft in der 78. Minute per Kopf zum Endstand',
    '72 Prozent Ballbesitz, 20:2 Abschlüsse und 2,75:0,16 xG',
    'Paulo Henrique ist seit 360 Minuten ohne Gegentor',
    'Nach drei Ligaspielen stehen neun Punkte und 10:0 Tore',
    'Finn Harps ist seit 18 Spielen ungeschlagen',
    'Romano Maisto absolviert sein 50. Ligaspiel für Finn Harps'
  ];
})();