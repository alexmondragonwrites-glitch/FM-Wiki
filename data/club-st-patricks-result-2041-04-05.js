(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  let club=window.FM_CLUBS.find(item=>item.id==='st-patricks');
  if(!club){club={id:'st-patricks',name:"St Patrick's Athletic",short:'SPA',country:'Irland',league:'Premier Division',scope:['Irland'],meetings:[],checklist:{}};window.FM_CLUBS.push(club);}
  club.status='partial';
  club.completion=Math.max(Number(club.completion||0),42);
  club.season=2041;
  club.summary="St Patrick's Athletic hielt am 5. April 2041 im ausverkauften Donegal Stadium ein 0:0 gegen Finn Harps. Die Gäste überstanden 19 Abschlüsse, drei Großchancen und 2,42 xG, ohne selbst einen Schuss auf das Tor zu bringen.";
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('0:0')&&!String(tag).includes('2,42')),'0:0 bei Finn Harps','2,42 xG überstanden','20 Fouls','Kein Schuss aufs Tor'];
  club.meetings=[{date:'05.04.2041',venue:'A',result:'0:0'},...(club.meetings||[]).filter(item=>item.date!=='05.04.2041')];
  club.lastMatch={date:'05.04.2041',competition:'Premier Division',result:"Finn Harps 0:0 St Patrick's Athletic",scorers:[],note:'St Patrick’s verteidigte tief und kompakt, ließ 19 Abschlüsse sowie drei Großchancen zu, hielt aber dank fehlender Harps-Präzision und eines sicheren Jeremiah Rabbetts die Null.'};
  club.pressReport={id:'2041-04-05-st-patricks-spielbericht',href:'presse.html?id=2041-04-05-st-patricks-spielbericht',label:'SPIELBERICHT · 05.04.2041',headline:'Der Ball will zum ersten Mal nicht hinein',standfirst:"Finn Harps dominiert St Patrick's mit 2,42 xG, muss sich aber mit dem ersten Remis der Ligasaison begnügen."};
  club.checklist={...(club.checklist||{}),profile:true,meetings:true,history:true};
})();