(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='as-roma');
  if(!club)return;
  club.completion=100;
  club.summary='A.S. Roma schied am 13. März 2041 im Champions-League-Achtelfinale gegen Finn Harps aus. Nach dem 2:1 im Hinspiel verlor Roma das Rückspiel im Donegal Stadium mit 0:2. Justin Ramsey und Jim O’Neill drehten das Duell zu einem 3:2-Gesamtsieg für Finn Harps.';
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('Achtelfinale')&&!String(tag).includes('Gesamt')),'0:2 im Achtelfinalrückspiel','2:3 im Gesamtergebnis','Nur ein Schuss aufs Tor','0,70 xG','Im Achtelfinale ausgeschieden'];
  club.meetings=[
    {date:'13.03.2041',venue:'H',result:'2:0'},
    ...(club.meetings||[]).filter(item=>item.date!=='13.03.2041'&&!String(item.date).includes('Rückspiel'))
  ];
  club.lastMatch={
    date:'13.03.2041',competition:'UEFA Champions League · Achtelfinale',result:'Finn Harps 2:0 A.S. Roma',aggregate:'3:2 für Finn Harps',
    scorers:['Justin Ramsey 8. (Elfmeter)','Jim O’Neill 41.'],
    note:'Roma kam nur zu fünf Abschlüssen, einem Schuss aufs Tor und 0,70 xG. Finn Harps gewann das Rückspiel kontrolliert und zog mit 3:2 nach Gesamtergebnis ins Viertelfinale ein.'
  };
  club.pressReport={
    id:'2041-03-13-as-roma-spielbericht',href:'presse.html?id=2041-03-13-as-roma-spielbericht',
    label:'CHAMPIONS LEAGUE · 13.03.2041',headline:'Gedreht im Donegal Stadium: Finn Harps wirft Roma raus',
    standfirst:'Ramsey und O’Neill machen aus dem 1:2 im Hinspiel einen 3:2-Gesamtsieg.'
  };
})();
