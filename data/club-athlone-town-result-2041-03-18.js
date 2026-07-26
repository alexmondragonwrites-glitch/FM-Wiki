(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='athlone-town');
  if(!club)return;
  club.completion=Math.max(Number(club.completion||0),72);
  club.season=2041;
  club.summary='Athlone Town verlor am 18. März 2041 im eigenen Stadion mit 0:4 gegen Finn Harps. Romano Maisto eröffnete vor der Pause, Eduardo Blanco traf nach seiner Einwechslung doppelt und Justin Ramsey setzte den Schlusspunkt. Athlone kam bei 24 Prozent Ballbesitz auf 0,40 xG.';
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('0:4')&&!String(tag).includes('24 %')),'0:4 gegen Finn Harps','24 % Ballbesitz','0,40 xG','34 Fouls'];
  club.meetings=[
    {date:'18.03.2041',venue:'A',result:'0:4'},
    ...(club.meetings||[]).filter(item=>item.date!=='18.03.2041')
  ];
  club.lastMatch={
    date:'18.03.2041',competition:'Premier Division',result:'Athlone Town 0:4 Finn Harps',
    scorers:['Romano Maisto 38.','Eduardo Blanco 54.','Eduardo Blanco 58.','Justin Ramsey 81.'],
    note:'Athlone hielt bis zur 38. Minute stand, wurde danach aber vollständig kontrolliert. 24 Prozent Ballbesitz, 177 angekommene Pässe und 34 Fouls dokumentieren einen Abend fast ohne eigene Spielgestaltung.'
  };
  club.pressReport={
    id:'2041-03-18-athlone-town-spielbericht',href:'presse.html?id=2041-03-18-athlone-town-spielbericht',
    label:'SPIELBERICHT · 18.03.2041',headline:'Blancos Blitz-Doppelpack erledigt Athlone',
    standfirst:'Finn Harps gewinnt erneut 4:0 und steht nach fünf Ligaspielen bei 18:0 Toren.'
  };
  club.checklist={...(club.checklist||{}),profile:true,meetings:true,history:true};
})();
