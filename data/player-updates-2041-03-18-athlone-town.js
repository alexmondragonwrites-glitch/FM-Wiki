(()=>{
  const find=(id,name)=>(window.FM_PLAYERS||[]).find(item=>item.id===id||item.name===name);
  const addMatch=(player,update)=>{if(player)player.matchUpdates=[...(player.matchUpdates||[]),update];};

  const blanco=find('eduardo-blanco','Eduardo Blanco');
  if(blanco){
    blanco.profileDate='2041-03-18';
    blanco.careerNarrative=[...(blanco.careerNarrative||[]),'Eduardo Blanco wurde am 18. März 2041 bei Athlone Town in der 53. Minute eingewechselt und erzielte in der 54. sowie 58. Minute einen Doppelpack.'];
    blanco.honours=[{year:'2041',type:'Blitz-Doppelpack',items:['Zwei Tore binnen vier Minuten beim 4:0 in Athlone','Eingewechselt in Minute 53 · Tore in Minute 54 und 58','Note 8,3']},...(blanco.honours||[])];
    addMatch(blanco,{date:'2041-03-18',opponent:'Athlone Town',competition:'Premier Division',result:'0:4',minutes:37,goals:2,assists:0,rating:8.3,note:'Doppelpack unmittelbar nach seiner Einwechslung'});
  }

  const roberts=find('jake-roberts','Jake Roberts');
  if(roberts){
    roberts.profileDate='2041-03-18';
    roberts.careerNarrative=[...(roberts.careerNarrative||[]),'Jake Roberts bereitete beim 4:0 gegen Athlone Town zwei Treffer vor und erhielt für seine zentrale Rolle die Note 7,9.'];
    addMatch(roberts,{date:'2041-03-18',opponent:'Athlone Town',competition:'Premier Division',result:'0:4',minutes:90,goals:0,assists:2,rating:7.9,note:'Zwei Vorlagen aus dem zentralen Mittelfeld'});
  }

  const reilly=find('evan-reilly','Evan Reilly');
  if(reilly){
    reilly.profileDate='2041-03-18';
    reilly.careerNarrative=[...(reilly.careerNarrative||[]),'Evan Reilly blieb beim 4:0 in Athlone erneut ohne Gegentor und verlängerte seine Serie auf 360 Minuten.'];
    reilly.honours=[{year:'2041',type:'Defensivserie',items:['360 Minuten ohne Gegentor','Vier Paraden beim 4:0 gegen Athlone Town']},...(reilly.honours||[])];
    addMatch(reilly,{date:'2041-03-18',opponent:'Athlone Town',competition:'Premier Division',result:'0:4',minutes:90,cleanSheet:true,rating:7.4,note:'360 Minuten in Folge ohne Gegentor'});
  }

  const torric=find('torric-bruce','Torric Bruce');
  if(torric){
    torric.profileDate='2041-03-18';
    torric.careerNarrative=[...(torric.careerNarrative||[]),'Torric Bruce absolvierte am 18. März 2041 bei Athlone Town sein 50. Ligaspiel für Finn Harps.'];
    torric.honours=[{year:'2041',type:'Ligameilenstein',items:['50. Ligaspiel für Finn Harps beim 4:0 in Athlone']},...(torric.honours||[])];
    addMatch(torric,{date:'2041-03-18',opponent:'Athlone Town',competition:'Premier Division',result:'0:4',minutes:56,goals:0,assists:0,rating:6.8,note:'50. Ligaspiel für Finn Harps'});
  }

  const papini=find('giacomo-papini','Giacomo Papini');
  if(papini){
    papini.profileDate='2041-03-18';
    papini.careerNarrative=[...(papini.careerNarrative||[]),'Giacomo Papini absolvierte beim 4:0 gegen Athlone Town sein 100. Spiel als Profi und bereitete einen Treffer vor.'];
    papini.honours=[{year:'2041',type:'Karrieremeilenstein',items:['100. Profispiel beim 4:0 gegen Athlone Town','Eine Vorlage · Note 7,1']},...(papini.honours||[])];
    addMatch(papini,{date:'2041-03-18',opponent:'Athlone Town',competition:'Premier Division',result:'0:4',minutes:53,goals:0,assists:1,rating:7.1,note:'100. Profispiel'});
  }

  [['romano-maisto','Romano Maisto',53,1,0,8.0],['justin-ramsey','Justin Ramsey',90,1,0,7.2]].forEach(([id,name,minutes,goals,assists,rating])=>{
    const player=find(id,name);
    if(!player)return;
    player.profileDate='2041-03-18';
    addMatch(player,{date:'2041-03-18',opponent:'Athlone Town',competition:'Premier Division',result:'0:4',minutes,goals,assists,rating,note:'Torschütze beim nächsten 4:0 der Ligasaison'});
  });
})();
