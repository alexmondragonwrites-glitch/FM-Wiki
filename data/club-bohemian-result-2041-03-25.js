(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  let club=window.FM_CLUBS.find(item=>item.id==='bohemian');
  if(!club){club={id:'bohemian',name:'Bohemian',short:'BOH',country:'Irland',league:'Premier Division',scope:['Irland'],meetings:[],checklist:{}};window.FM_CLUBS.push(club);}
  club.status='partial';
  club.completion=Math.max(Number(club.completion||0),98);
  club.season=2041;
  club.summary='Bohemian verlor am 25. März 2041 im Dalymount Park mit 0:4 gegen Finn Harps. Justin Ramsey traf doppelt, Basile Rouvière und Diego Fernández erzielten die weiteren Tore. Die Gastgeber kamen bei 25 Prozent Ballbesitz nur auf vier Abschlüsse und 0,33 xG.';
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('0:4')&&!String(tag).includes('25 %')),'0:4 gegen Finn Harps','25 % Ballbesitz','0,33 xG','32 Fouls','Sieben Gelbe Karten'];
  club.meetings=[{date:'25.03.2041',venue:'H',result:'0:4'},...(club.meetings||[]).filter(item=>item.date!=='25.03.2041')];
  club.lastMatch={date:'25.03.2041',competition:'Premier Division',result:'Bohemian 0:4 Finn Harps',scorers:['Justin Ramsey 8.','Justin Ramsey 26.','Basile Rouvière 30.','Diego Fernández 71.'],note:'Bohemian wurde mit 25 Prozent Ballbesitz, 167 angekommenen Pässen und nur einem Schuss aufs Tor vollständig kontrolliert. 32 Fouls und sieben Gelbe Karten änderten nichts an der klaren Niederlage.'};
  club.pressReport={id:'2041-03-25-bohemian-spielbericht',href:'presse.html?id=2041-03-25-bohemian-spielbericht',label:'SPIELBERICHT · 25.03.2041',headline:'Vier ist wieder die Lieblingszahl',standfirst:'Finn Harps gewinnt im Dalymount Park mit 4:0 und steht nach sieben Ligaspielen bei 27:1 Toren.'};
  club.checklist={...(club.checklist||{}),profile:true,meetings:true,history:true};
})();