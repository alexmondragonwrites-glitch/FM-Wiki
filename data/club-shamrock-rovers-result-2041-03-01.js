(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='shamrock-rovers');
  if(!club)return;
  club.completion=96;
  club.summary='Shamrock Rovers verlor am 1. März 2041 im Donegal Stadium mit 0:2 gegen Finn Harps. Trotz eines lange offenen Spielstands kam der Gast nur auf zwei Abschlüsse, 0,16 xG und 28 Prozent Ballbesitz. Justin Ramsey traf per Elfmeter, Torric Bruce entschied die Partie per Kopf.';
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('01.03.2041')&&!String(tag).includes('0:2')),'0:2 am 01.03.2041','Nur 0,16 xG','28 % Ballbesitz','2 Schüsse'];
  club.meetings=[
    {date:'01.03.2041',venue:'A',result:'0:2'},
    ...(club.meetings||[]).filter(item=>item.date!=='01.03.2041')
  ];
  club.lastMatch={
    date:'01.03.2041',competition:'Premier Division',result:'Finn Harps 2:0 Shamrock Rovers FC',
    scorers:['Justin Ramsey 59. (Elfmeter)','Torric Bruce 78.'],
    note:'Shamrock verteidigte lange tief und hielt das 0:0 bis zur 59. Minute. Ein Elfmeter öffnete das Spiel, bevor Bruce per Kopf erhöhte. Callum Daly verhinderte mit neun Paraden eine deutlichere Niederlage.'
  };
  club.nextMatch={date:'26.04.2041',time:'19:45',competition:'Premier Division',opponent:'Finn Harps',venue:'Heim bei Shamrock Rovers',note:'Zweites Ligaduell der Saison 2041.'};
  club.pressReport={
    id:'2041-03-01-shamrock-rovers-spielbericht',
    href:'presse.html?id=2041-03-01-shamrock-rovers-spielbericht',
    label:'SPIELBERICHT · 01.03.2041',
    headline:'Ramsey öffnet, Bruce schließt den ersten echten Ligatest',
    standfirst:'Finn Harps gewinnt 2:0, hält Shamrock bei 0,16 xG und bleibt auch nach drei Ligaspielen ohne Gegentor.'
  };
  club.checklist={...(club.checklist||{}),profile:true,squad:true,tactics:true,meetings:true,history:true};
})();