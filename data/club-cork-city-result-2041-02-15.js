(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='cork-city');
  if(!club)return;
  club.completion=96;
  club.summary='Cork City verlor den Auftakt der Premier Division am 15. Februar 2041 im Donegal Stadium mit 0:4 gegen Finn Harps. Die Mannschaft kam nur zu einem Abschluss, keinem Schuss aufs Tor und 0,21 xG. Mikey Quinn sah kurz nach der Pause Gelb-Rot, Romano Maisto traf doppelt.';
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('Ligastart')),'0:4 zum Ligastart','Nur 21 % Ballbesitz','0 Schüsse aufs Tor','Mikey Quinn Gelb-Rot'];
  club.meetings=[
    {date:'15.02.2041',venue:'H',result:'4:0'},
    ...(club.meetings||[]).filter(item=>item.date!=='15.02.2041')
  ];
  club.lastMatch={
    date:'15.02.2041',competition:'Premier Division',result:'Finn Harps 4:0 Cork City FC',
    scorers:['Daryl Frame 12.','Romano Maisto 37.','Dean O’Meara 80. (Eigentor)','Romano Maisto 89.'],
    note:'Cork verteidigte tief, fand aber weder Zugriff noch Entlastung. Nach Quinns Gelb-Roter Karte in der 48. Minute wurde die Partie endgültig einseitig. 28 Fouls, sieben Gelbe Karten und nur 168 angekommene Pässe dokumentieren den schwierigen Abend.'
  };
  club.pressReport={
    id:'2041-02-15-cork-city-spielbericht',
    href:'presse.html?id=2041-02-15-cork-city-spielbericht',
    label:'SPIELBERICHT · 15.02.2041',
    headline:'Maisto zerlegt Corks Widerstand beim Ligastart',
    standfirst:'Finn Harps gewinnt 4:0, lässt keinen Schuss aufs Tor zu und eröffnet die Premier Division mit einer Machtdemonstration.'
  };
  club.checklist={...(club.checklist||{}),profile:true,squad:true,tactics:true,meetings:true,history:true};
})();
