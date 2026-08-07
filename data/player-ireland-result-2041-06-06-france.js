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

  const oleary=find('harry-oleary',"Harry O'Leary");
  if(oleary){
    oleary.profileDate='2041-06-06';
    addNarrative(oleary,'Harry O’Leary erzielte im Nations-League-Halbfinale gegen Frankreich zwei Tore, bereitete einen weiteren Treffer vor und erhielt trotz der 3:4-Niederlage die herausragende Note 9,1.');
    addMatch(oleary,{date:'2041-06-06',opponent:'Frankreich',competition:'UEFA Nations League · Halbfinale',result:'3:4',minutes:90,goals:2,assists:1,rating:9.1,note:'Zwei Tore und eine Vorlage in einem spektakulären Halbfinale'});
  }

  const okane=find('cormac-okane',"Cormac O'Kane");
  if(okane){
    okane.profileDate='2041-06-06';
    addNarrative(okane,'Cormac O’Kane traf beim 3:4 im Nations-League-Halbfinale gegen Frankreich in der 23. Minute zum zwischenzeitlichen 2:0 und erhielt die Note 7,0.');
    addMatch(okane,{date:'2041-06-06',opponent:'Frankreich',competition:'UEFA Nations League · Halbfinale',result:'3:4',minutes:90,goals:1,assists:0,rating:7.0,note:'Treffer zum zwischenzeitlichen 2:0'});
  }

  const oneill=find('jim-oneill',"Jim O'Neill");
  if(oneill){
    oneill.profileDate='2041-06-06';
    addNarrative(oneill,'Jim O’Neill lieferte im Nations-League-Halbfinale gegen Frankreich eine Vorlage, erhielt die Note 7,3 und sah in der 61. Minute Gelb.');
    addMatch(oneill,{date:'2041-06-06',opponent:'Frankreich',competition:'UEFA Nations League · Halbfinale',result:'3:4',minutes:74,goals:0,assists:1,rating:7.3,note:'Vorlage und starke 74 Minuten im Zentrum'});
  }

  const boylan=find('robert-boylan','Robert Boylan');
  if(boylan){
    boylan.profileDate='2041-06-06';
    addNarrative(boylan,'Robert Boylan gehörte beim 3:4 gegen Frankreich mit Note 7,9 zu Irlands stärksten Spielern und verbuchte eine Vorlage.');
    addMatch(boylan,{date:'2041-06-06',opponent:'Frankreich',competition:'UEFA Nations League · Halbfinale',result:'3:4',minutes:90,goals:0,assists:1,rating:7.9,note:'Zweitbeste irische Note und eine Vorlage'});
  }
})();