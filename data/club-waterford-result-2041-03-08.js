(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='waterford');
  if(!club)return;
  club.status='partial';
  club.completion=42;
  club.season=2041;
  club.summary='Waterford verlor am 8. März 2041 im Donegal Stadium mit 0:4 gegen Finn Harps. Die Gäste kamen nur zu einem Abschluss, 0,01 xG und 30 Prozent Ballbesitz. Romano Maisto, Eduardo Blanco, Ben Barry und Jake Roberts trafen für den Titelverteidiger.';
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('Premier Division')),'Premier Division 2041','0:4 im Donegal Stadium','Nur 0,01 xG','Ein Abschluss','30 % Ballbesitz'];
  club.meetings=[
    {date:'08.03.2041',venue:'H',result:'4:0'},
    ...(club.meetings||[]).filter(item=>item.date!=='08.03.2041')
  ];
  club.lastMatch={
    date:'08.03.2041',competition:'Premier Division',result:'Finn Harps 4:0 Waterford',
    scorers:['Romano Maisto 10.','Eduardo Blanco 29.','Ben Barry 55.','Jake Roberts 72.'],
    note:'Waterford verbrachte die Partie fast vollständig in der eigenen Hälfte. 20:1 Schüsse, 8:1 aufs Tor, 2,63:0,01 xG und 544:233 angekommene Pässe zeigen die klare Kräfteverteilung.'
  };
  club.nextMatch={date:'03.05.2041',time:'19:45',competition:'Premier Division',opponent:'Finn Harps',venue:'Waterford · Auswärtsspiel für Finn Harps',note:'Zweites Ligaduell der Saison 2041 nach Waterfords 0:4-Niederlage im Donegal Stadium.'};
  club.pressReport={
    id:'2041-03-08-waterford-spielbericht',href:'presse.html?id=2041-03-08-waterford-spielbericht',
    label:'SPIELBERICHT · 08.03.2041',headline:'Vier verschiedene Torschützen vertreiben den Rom-Frust',
    standfirst:'Finn Harps gewinnt vor dem Champions-League-Rückspiel mit 4:0 und lässt Waterford nur 0,01 xG.'
  };
  club.checklist={...(club.checklist||{}),profile:true,squad:false,tactics:false,meetings:true,history:true};
})();
