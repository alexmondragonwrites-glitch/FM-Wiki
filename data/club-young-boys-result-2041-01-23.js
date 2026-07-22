(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='young-boys');
  if(!club)return;
  club.completion=76;
  club.summary='Champions-League-Gegner vom 23. Januar 2041: Young Boys verlor im Donegal Stadium mit 0:2. Finn Harps kontrollierte die Partie mit 59 Prozent Ballbesitz, 19:6 Schüssen und 10:1 Abschlüssen aufs Tor. Cormac O’Kane traf früh und bereitete Billy Walkers spätes 2:0 vor.';
  club.tags=[...(club.tags||[]).filter(tag=>tag!=='Vorsichtige Ausrichtung'),'2:0 für Finn Harps','10:1 Schüsse aufs Tor','Martone mit 9 Paraden'];
  club.meetings=[{date:'23.01.2041',venue:'H',result:'2:0'}];
  club.lastMatch={
    date:'23.01.2041',competition:'UEFA Champions League · Ligaphase',result:'Finn Harps 2:0 BSC Young Boys',
    scorers:["Cormac O'Kane 5.",'Billy Walker 88.'],
    note:'Young Boys kam nur zu einem Schuss aufs Tor. Giovanni Martone verhinderte mit neun Paraden eine höhere Niederlage.'
  };
  club.pressReport={
    id:'2041-01-23-young-boys-spielbericht',
    href:'presse.html?id=2041-01-23-young-boys-spielbericht',
    label:'SPIELBERICHT · 23.01.2041',
    headline:'O’Kane öffnet früh, Walker schließt spät',
    standfirst:'Finn Harps besiegt Young Boys mit 2:0, kontrolliert den Ball und lässt nur einen gegnerischen Schuss aufs Tor zu.'
  };
  club.checklist={...(club.checklist||{}),profile:true,tactics:true,meetings:true};
})();