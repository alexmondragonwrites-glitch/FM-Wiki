(()=>{
  const find=(id,name)=>(window.FM_PLAYERS||[]).find(item=>item.id===id||item.name===name);
  const addMatch=(player,update)=>{
    if(!player)return;
    player.matchUpdates=[...(player.matchUpdates||[]).filter(x=>!(x.date===update.date&&x.opponent===update.opponent&&x.competition===update.competition)),update];
  };
  const addNarrative=(player,text)=>{
    if(!player)return;
    const list=player.careerNarrative||[];
    if(!list.includes(text))player.careerNarrative=[...list,text];
  };

  const andrews=find('darcy-andrews','Darcy Andrews');
  if(andrews){
    andrews.profileDate='2041-06-09';
    addNarrative(andrews,'Darcy Andrews war beim 0:1 gegen Spanien im Nations-League-Spiel um Platz drei mit Note 7,0 Irlands bester bewerteter Spieler.');
    addMatch(andrews,{date:'2041-06-09',opponent:'Spanien',competition:'UEFA Nations League · Spiel um Platz 3',result:'0:1',minutes:90,goals:0,assists:0,rating:7.0,note:'Beste irische Note beim Spiel um Platz drei'});
  }

  const oneill=find('jim-oneill',"Jim O'Neill");
  if(oneill){
    oneill.profileDate='2041-06-09';
    addNarrative(oneill,'Jim O’Neill wurde gegen Spanien zur Pause eingewechselt und sah im Nations-League-Spiel um Platz drei in der 80. Minute die Rote Karte.');
    addMatch(oneill,{date:'2041-06-09',opponent:'Spanien',competition:'UEFA Nations League · Spiel um Platz 3',result:'0:1',minutes:35,goals:0,assists:0,rating:6.2,redCard:true,note:'Zur Pause eingewechselt, Rot in der 80. Minute'});
  }

  const duggan=find('callum-duggan','Callum Duggan');
  if(duggan){
    duggan.profileDate='2041-06-09';
    addNarrative(duggan,'Callum Duggan spielte beim 0:1 gegen Spanien im Nations-League-Spiel um Platz drei von Beginn an und sah in der 61. Minute Gelb.');
    addMatch(duggan,{date:'2041-06-09',opponent:'Spanien',competition:'UEFA Nations League · Spiel um Platz 3',result:'0:1',minutes:90,goals:0,assists:0,rating:6.7,yellowCard:true,note:'Solider Auftritt, Gelb in der 61. Minute'});
  }
})();