(()=>{
  const find=(id,name)=>(window.FM_PLAYERS||[]).find(item=>item.id===id||item.name===name);
  const addMatch=(player,update)=>{if(player)player.matchUpdates=[...(player.matchUpdates||[]),update];};

  const oneill=find('jim-oneill','Jim O’Neill');
  if(oneill){
    oneill.profileDate='2041-03-13';
    oneill.careerNarrative=[...(oneill.careerNarrative||[]),'Jim O’Neill erzielte am 13. März 2041 beim 2:0 gegen A.S. Roma mit einem Volleyschuss aus rund 20 Metern sein 25. Tor für Finn Harps und schoss den Klub ins Champions-League-Viertelfinale.'];
    oneill.honours=[{year:'2041',type:'Europäischer Meilenstein',items:['Tor zum 2:0 im Achtelfinalrückspiel gegen A.S. Roma','25. Tor für Finn Harps','Spieler des Spiels · Note 7,5','Champions-League-Viertelfinale erreicht']},...(oneill.honours||[])];
    addMatch(oneill,{date:'2041-03-13',opponent:'A.S. Roma',competition:'UEFA Champions League · Achtelfinale',result:'2:0 · Gesamt 3:2',minutes:73,goals:1,assists:0,rating:7.5,note:'25. Tor für Finn Harps und entscheidender Treffer zum Viertelfinaleinzug'});
  }

  const ramsey=find('justin-ramsey','Justin Ramsey');
  if(ramsey){
    ramsey.profileDate='2041-03-13';
    ramsey.careerNarrative=[...(ramsey.careerNarrative||[]),'Justin Ramsey verwandelte im Champions-League-Achtelfinalrückspiel gegen A.S. Roma nach acht Minuten den Elfmeter zum 1:0 und glich damit das Gesamtergebnis aus.'];
    ramsey.honours=[{year:'2041',type:'Champions-League-Comeback',items:['Elfmeter zum 1:0 gegen A.S. Roma','Viertelfinaleinzug nach 3:2 im Gesamtergebnis']},...(ramsey.honours||[])];
    addMatch(ramsey,{date:'2041-03-13',opponent:'A.S. Roma',competition:'UEFA Champions League · Achtelfinale',result:'2:0 · Gesamt 3:2',minutes:90,goals:1,assists:0,rating:7.1,note:'Früher Elfmeter zum Ausgleich im Gesamtergebnis'});
  }

  const bruce=find('torric-bruce','Torric Bruce');
  if(bruce){
    bruce.profileDate='2041-03-13';
    bruce.careerNarrative=[...(bruce.careerNarrative||[]),'Torric Bruce absolvierte beim 2:0 gegen A.S. Roma sein 150. Spiel als Profi und erreichte mit Finn Harps das Champions-League-Viertelfinale.'];
    bruce.honours=[{year:'2041',type:'Karrieremeilenstein',items:['150. Profispiel am 13.03.2041 gegen A.S. Roma','Zu-null-Spiel im Champions-League-Achtelfinalrückspiel']},...(bruce.honours||[])];
    addMatch(bruce,{date:'2041-03-13',opponent:'A.S. Roma',competition:'UEFA Champions League · Achtelfinale',result:'2:0 · Gesamt 3:2',minutes:90,goals:0,assists:0,rating:6.9,note:'150. Profispiel'});
  }

  const blanco=find('eduardo-blanco','Eduardo Blanco');
  if(blanco){
    blanco.profileDate='2041-03-13';
    blanco.careerNarrative=[...(blanco.careerNarrative||[]),'Eduardo Blanco absolvierte am 13. März 2041 beim 2:0 gegen A.S. Roma seinen 150. Einsatz für Finn Harps.'];
    blanco.honours=[{year:'2041',type:'Klubmeilenstein',items:['150. Einsatz für Finn Harps','Meilenstein beim Champions-League-Viertelfinaleinzug']},...(blanco.honours||[])];
    addMatch(blanco,{date:'2041-03-13',opponent:'A.S. Roma',competition:'UEFA Champions League · Achtelfinale',result:'2:0 · Gesamt 3:2',minutes:37,goals:0,assists:0,rating:6.7,note:'150. Einsatz für Finn Harps'});
  }

  const paulo=find('paulo-henrique','Paulo Henrique');
  if(paulo){
    paulo.profileDate='2041-03-13';
    paulo.careerNarrative=[...(paulo.careerNarrative||[]),'Paulo Henrique blieb beim 2:0 gegen A.S. Roma ohne Gegentor und half Finn Harps damit, das Achtelfinale nach der Hinspielniederlage zu drehen.'];
    addMatch(paulo,{date:'2041-03-13',opponent:'A.S. Roma',competition:'UEFA Champions League · Achtelfinale',result:'2:0 · Gesamt 3:2',minutes:90,cleanSheet:true,rating:7.4,note:'Zu-null-Spiel beim Viertelfinaleinzug'});
  }

  const frame=find('daryl-frame','Daryl Frame');
  if(frame){
    frame.profileDate='2041-03-13';
    addMatch(frame,{date:'2041-03-13',opponent:'A.S. Roma',competition:'UEFA Champions League · Achtelfinale',result:'2:0 · Gesamt 3:2',minutes:90,goals:0,assists:0,rating:7.2,note:'Kontrollierte das zentrale Mittelfeld mit 67 angekommenen Pässen'});
  }
})();
