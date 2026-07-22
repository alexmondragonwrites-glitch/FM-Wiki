(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-02-09';
  season.snapshotDate='2041-02-09';
  season.headline='Der erste Titel ist bereits da';
  season.summary='Finn Harps eröffnet die nationale Saison 2041 mit einem 2:0 gegen Derry City und gewinnt den President’s Cup. Eduardo Blanco erzielt beide Treffer, während die Mannschaft nur 0,09 xG zulässt.';
  season.honours=[...new Set([...(season.honours||[]),"President's Cup"])];
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[...(season.changes.notes||[]).filter(note=>!String(note).includes('President’s Cup')),'09.02.2041: 2:0 gegen Derry City im President’s Cup · erster Titel der Saison','Eduardo Blanco erzielt beim nationalen Pflichtspielauftakt beide Tore','73 Prozent Ballbesitz und 0,09 zugelassene xG markieren einen kontrollierten Saisonstart'];
})();