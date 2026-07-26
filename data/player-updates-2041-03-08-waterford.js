(()=>{
  const find=(id,name)=>(window.FM_PLAYERS||[]).find(item=>item.id===id||item.name===name);
  const addMatch=(player,update)=>{if(player)player.matchUpdates=[...(player.matchUpdates||[]),update];};

  const roberts=find('jake-roberts','Jake Roberts');
  if(roberts){
    roberts.profileDate='2041-03-08';
    roberts.careerNarrative=[...(roberts.careerNarrative||[]),'Jake Roberts erzielte am 8. März 2041 beim 4:0 gegen Waterford in der 72. Minute sein erstes Tor für Finn Harps.'];
    roberts.honours=[{year:'2041',type:'Erstes Tor für Finn Harps',items:['Treffer zum 4:0 gegen Waterford am 08.03.2041','90 Minuten · Note 7,2']},...(roberts.honours||[])];
    addMatch(roberts,{date:'2041-03-08',opponent:'Waterford',competition:'Premier Division',result:'4:0',minutes:90,goals:1,assists:0,rating:7.2,note:'Erstes Tor für Finn Harps'});
  }

  const reilly=find('evan-reilly','Evan Reilly');
  if(reilly){
    reilly.profileDate='2041-03-08';
    reilly.careerNarrative=[...(reilly.careerNarrative||[]),'Evan Reilly blieb beim 4:0 gegen Waterford erneut ohne Gegentor und verlängerte seine persönliche Serie auf 270 Minuten.'];
    reilly.honours=[{year:'2041',type:'Defensivserie',items:['270 Minuten ohne Gegentor','Zu-null-Spiel beim 4:0 gegen Waterford']},...(reilly.honours||[])];
    addMatch(reilly,{date:'2041-03-08',opponent:'Waterford',competition:'Premier Division',result:'4:0',minutes:90,cleanSheet:true,rating:7.4,note:'270 Minuten in Folge ohne Gegentor'});
  }

  const diego=find('diego-fernandez','Diego Fernández');
  if(diego){
    diego.profileDate='2041-03-08';
    diego.careerNarrative=[...(diego.careerNarrative||[]),'Diego Fernández bereitete beim 4:0 gegen Waterford zwei Tore vor und war mit Note 7,8 der beste benotete Finn-Harps-Spieler.'];
    addMatch(diego,{date:'2041-03-08',opponent:'Waterford',competition:'Premier Division',result:'4:0',minutes:70,goals:0,assists:2,rating:7.8,note:'Zwei Vorlagen und beste Harps-Note'});
  }

  const gustavo=find('gustavo-da-silva','Gustavo da Silva');
  if(gustavo){
    gustavo.profileDate='2041-03-08';
    gustavo.careerNarrative=[...(gustavo.careerNarrative||[]),'Gustavo da Silva absolvierte am 8. März 2041 gegen Waterford sein 75. Ligaspiel seiner Karriere.'];
    gustavo.honours=[{year:'2041',type:'Ligameilenstein',items:['75. Ligaspiel der Karriere beim 4:0 gegen Waterford']},...(gustavo.honours||[])];
    addMatch(gustavo,{date:'2041-03-08',opponent:'Waterford',competition:'Premier Division',result:'4:0',minutes:90,goals:0,assists:0,rating:7.4,note:'75. Ligaspiel seiner Karriere'});
  }

  const vinicius=find('vinicius','Vinícius');
  if(vinicius){
    vinicius.profileDate='2041-03-08';
    vinicius.careerNarrative=[...(vinicius.careerNarrative||[]),'Vinícius absolvierte am 8. März 2041 beim 4:0 gegen Waterford sein 150. Ligaspiel für Finn Harps.'];
    vinicius.honours=[{year:'2041',type:'Ligameilenstein',items:['150. Ligaspiel für Finn Harps beim 4:0 gegen Waterford']},...(vinicius.honours||[])];
    addMatch(vinicius,{date:'2041-03-08',opponent:'Waterford',competition:'Premier Division',result:'4:0',minutes:61,goals:0,assists:0,rating:7.2,note:'150. Ligaspiel für Finn Harps'});
  }

  [['romano-maisto','Romano Maisto',52,1,0,7.5],['eduardo-blanco','Eduardo Blanco',90,1,0,7.7],['ben-barry','Ben Barry',90,1,0,7.8]].forEach(([id,name,minutes,goals,assists,rating])=>{
    const player=find(id,name);
    if(!player)return;
    player.profileDate='2041-03-08';
    addMatch(player,{date:'2041-03-08',opponent:'Waterford',competition:'Premier Division',result:'4:0',minutes,goals,assists,rating,note:'Torschütze beim 4:0 vor dem Roma-Rückspiel'});
  });
})();
