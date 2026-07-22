(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='paris-saint-germain');
  if(!club)return;
  club.completion=94;
  club.summary='Champions-League-Gegner vom 29. Januar 2041: Paris Saint-Germain erkämpfte im Donegal Stadium ein 0:0. Finn Harps war mit 9:3 Schüssen, 1,82:0,19 xG und zwei Großchancen klar gefährlicher, brachte jedoch nur einen Abschluss aufs Tor. PSG selbst blieb ohne Schuss auf das Tor von Paulo Henrique.';
  club.tags=[...(club.tags||[]).filter(tag=>!['Letztes Ligaphasenspiel','Nahezu gleichstark'].includes(tag)),'0:0 im Donegal Stadium','0 Schüsse aufs Tor','Restes mit Note 7,7'];
  club.meetings=[{date:'29.01.2041',venue:'H',result:'0:0'}];
  club.lastMatch={
    date:'29.01.2041',competition:'UEFA Champions League · Ligaphase',result:'Finn Harps 0:0 Paris Saint-Germain',
    scorers:[],
    note:'Paris blieb bei drei Abschlüssen ohne Schuss aufs Tor. Finn Harps erspielte 1,82 xG und zwei Großchancen, scheiterte jedoch an der eigenen Abschlusspräzision und einem sicheren Guillaume Restes.'
  };
  club.pressReport={
    id:'2041-01-29-paris-saint-germain-spielbericht',
    href:'presse.html?id=2041-01-29-paris-saint-germain-spielbericht',
    label:'SPIELBERICHT · 29.01.2041',
    headline:'Paris ohne Torschuss, Harps ohne Tor',
    standfirst:'Finn Harps hält PSG vollständig vom eigenen Tor fern, vergibt aber zwei Großchancen und beendet die Ligaphase mit einem 0:0.'
  };
  club.checklist={...(club.checklist||{}),profile:true,tactics:true,meetings:true};
})();