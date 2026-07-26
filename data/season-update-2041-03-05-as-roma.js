(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-03-05';
  season.snapshotDate='2041-03-05';
  season.headline='Ein bitteres 1:2 im Stadio Olimpico';
  season.summary='Finn Harps verliert das Hinspiel des Champions-League-Achtelfinals bei A.S. Roma mit 1:2. Kevin Kelly erzielt die Führung, doch Schiavo und Torchio drehen die Partie. Trotz 2,16 xG, drei Großchancen und 12:7 Schüssen geht der Titelverteidiger mit einem Tor Rückstand ins Rückspiel.';
  season.championsLeagueRoundOf16={...(season.championsLeagueRoundOf16||{}),opponent:'A.S. Roma',firstLeg:{date:'2041-03-05',venue:'Stadio Olimpico',result:'A.S. Roma 2:1 Finn Harps',xg:'0,54:2,16'},aggregate:'A.S. Roma führt 2:1',secondLeg:'offen'};
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[...(season.changes.notes||[]).filter(note=>!String(note).includes('05.03.2041')),'05.03.2041: 1:2 bei A.S. Roma im Hinspiel des Champions-League-Achtelfinals','Kevin Kelly bringt Finn Harps in der 19. Minute in Führung','Finn Harps gewinnt die xG-Bilanz 2,16 zu 0,54 und erspielt sich alle drei Großchancen','Paulo Henriques Serie endet nach 360 Minuten ohne Gegentor','Daryl Frame absolviert sein 50. Profispiel'];
})();
