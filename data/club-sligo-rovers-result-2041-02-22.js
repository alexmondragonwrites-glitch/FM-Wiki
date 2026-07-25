(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='sligo-rovers');
  if(!club)return;
  club.completion=96;
  club.summary="Sligo Rovers verlor am 22. Februar 2041 im 'The Showgrounds' Stadium mit 0:4 gegen Finn Harps. Trotz 23 Fouls und langer Arbeit gegen den Ball kam Sligo nur zu zwei Abschlüssen, keinem Schuss aufs Tor und 23 Prozent Ballbesitz. Robbie O'Callaghan blieb wirkungslos, während Finn Harps die zuvor erkannten Schwächen bei Lufthoheit und defensiven Übergängen konsequent nutzte.";
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('Rang 9')&&!String(tag).includes('22.02.2041')),'0:4 gegen Finn Harps am 22.02.2041','Nur 23 % Ballbesitz','0 Schüsse aufs Tor','23 Fouls','O’Callaghan mit Note 5,8'];
  club.meetings=[
    {date:'22.02.2041',venue:'A',result:'0:4'},
    ...(club.meetings||[]).filter(item=>item.date!=='22.02.2041')
  ];
  club.lastMatch={
    date:'22.02.2041',competition:'Premier Division',result:'Sligo Rovers FC 0:4 Finn Harps',
    scorers:['Diego Fernández 2.','Justin Ramsey 63. (Elfmeter)','Daryl Frame 65.','Kevin Kelly 82.'],
    note:"Sligo geriet durch Fernández' Volley früh in Rückstand und fand danach kaum Entlastung. Das Spiel blieb bis zur 63. Minute formal offen, ehe Ramsey per Elfmeter und Frame nur zwei Minuten später die Entscheidung herbeiführten. Kellys Kopfball zum 0:4 bestätigte die im Scoutbericht erkannte Schwäche in der Luft."
  };
  club.nextMatch={date:'12.04.2041',time:'19:45',competition:'Premier Division',opponent:'Finn Harps',venue:'Donegal Stadium',note:'Zweites Ligaduell der Saison 2041 nach Sligos 0:4-Heimniederlage.'};
  club.pressReport={
    id:'2041-02-22-sligo-rovers-spielbericht',
    href:'presse.html?id=2041-02-22-sligo-rovers-spielbericht',
    label:'SPIELBERICHT · 22.02.2041',
    headline:'Ramsey öffnet die Schleusen nach Fernández’ Traumstart',
    standfirst:'Finn Harps gewinnt in Sligo 4:0, bringt 804 Pässe an und lässt keinen gegnerischen Schuss aufs Tor zu.'
  };
  club.checklist={...(club.checklist||{}),profile:true,squad:true,tactics:true,meetings:true,history:true};
})();