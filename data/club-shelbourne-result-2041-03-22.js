(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  let club=window.FM_CLUBS.find(item=>item.id==='shelbourne');
  if(!club){club={id:'shelbourne',name:'Shelbourne',short:'SHE',country:'Irland',league:'Premier Division',scope:['Irland'],meetings:[],checklist:{}};window.FM_CLUBS.push(club);}
  club.status='partial';
  club.completion=Math.max(Number(club.completion||0),48);
  club.season=2041;
  club.summary='Shelbourne verlor am 22. März 2041 im Tolka Park mit 1:5 gegen Finn Harps. Justin Ramsey erzielte bereits vor der Pause einen Hattrick, Jake Roberts und Ben Barry trafen nach der Pause. Callum Joyce erzielte in der 83. Minute Shelbournes Ehrentreffer und zugleich das erste Ligagegentor der Harps-Saison.';
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('1:5')&&!String(tag).includes('23 %')),'1:5 gegen Finn Harps','23 % Ballbesitz','0,98 xG','Vier Gelbe Karten'];
  club.meetings=[{date:'22.03.2041',venue:'A',result:'1:5'},...(club.meetings||[]).filter(item=>item.date!=='22.03.2041')];
  club.lastMatch={date:'22.03.2041',competition:'Premier Division',result:'Shelbourne 1:5 Finn Harps',scorers:['Justin Ramsey 10. (Elfmeter)','Justin Ramsey 22.','Justin Ramsey 42.','Jake Roberts 71.','Callum Joyce 83.','Ben Barry 90+1.'],note:'Shelbourne wurde mit 23 Prozent Ballbesitz, 189 angekommene Pässen und 0,98 xG fast vollständig kontrolliert. Der späte Treffer von Joyce änderte nichts an der klaren Niederlage.'};
  club.pressReport={id:'2041-03-22-shelbourne-spielbericht',href:'presse.html?id=2041-03-22-shelbourne-spielbericht',label:'SPIELBERICHT · 22.03.2041',headline:'Ramsey-Hattrick macht aus dem nächsten Auswärtsspiel eine Demonstration',standfirst:'Finn Harps gewinnt im Tolka Park mit 5:1 und steht nach sechs Ligaspielen bei 22:1 Toren.'};
  club.checklist={...(club.checklist||{}),profile:true,meetings:true,history:true};
})();
