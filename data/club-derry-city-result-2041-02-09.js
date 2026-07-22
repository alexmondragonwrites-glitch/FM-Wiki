(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='derry-city');
  if(!club)return;
  club.completion=96;
  club.summary='Derry City verlor den President’s Cup am 9. Februar 2041 im Donegal Stadium mit 0:2 gegen Finn Harps. Die Mannschaft kam nur zu zwei Abschlüssen und 0,09 xG, während Eduardo Blanco beide Treffer vor der Pause erzielte.';
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('President')),'0:2 im President’s Cup','0,09 xG','Nur 27 % Ballbesitz'];
  club.meetings=[
    {date:'09.02.2041',venue:'H',result:'2:0'},
    ...(club.meetings||[]).filter(item=>item.date!=='09.02.2041')
  ];
  club.lastMatch={
    date:'09.02.2041',competition:"President's Cup",result:'Finn Harps 2:0 Derry City',
    scorers:['Eduardo Blanco 33.','Eduardo Blanco 45+4. (Elfmeter)'],
    note:'Derry verlor Keil Else früh verletzt und fand danach kaum Zugriff auf das Zentrum. Zwei Abschlüsse, ein Schuss aufs Tor und 0,09 xG reichten nicht, um Finn Harps ernsthaft zu gefährden.'
  };
  club.pressReport={
    id:'2041-02-09-derry-city-spielbericht',
    href:'presse.html?id=2041-02-09-derry-city-spielbericht',
    label:'SPIELBERICHT · 09.02.2041',
    headline:'Blanco setzt den ersten goldenen Strich unter 2041',
    standfirst:'Finn Harps kontrolliert Derry City im President’s Cup, gewinnt 2:0 und lässt nur 0,09 xG zu.'
  };
  club.checklist={...(club.checklist||{}),profile:true,squad:true,tactics:true,meetings:true,history:true};
})();