(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-02-15';
  season.snapshotDate='2041-02-15';
  season.headline='Vier Tore zum Start der Titelverteidigung';
  season.summary='Finn Harps beginnt die Premier Division 2041 mit einem 4:0 gegen Cork City. Romano Maisto trifft doppelt, Daryl Frame erzielt das erste Ligator der Saison und die Mannschaft lässt keinen gegnerischen Schuss aufs Tor zu.';
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[
    ...(season.changes.notes||[]).filter(note=>!String(note).includes('Cork City')),
    '15.02.2041: 4:0 gegen Cork City zum Auftakt der Premier Division',
    'Romano Maisto erzielt zwei Tore und wird mit Note 9,5 Spieler des Spiels',
    '79 Prozent Ballbesitz, 23:1 Schüsse und 3,00:0,21 xG markieren einen dominanten Ligastart',
    'Paulo Henrique ist seit 270 Minuten ohne Gegentor; Finn Harps bleibt im 16. Spiel in Folge ungeschlagen',
    'Jake Roberts gibt sein Ligadebüt für Finn Harps'
  ];
})();
