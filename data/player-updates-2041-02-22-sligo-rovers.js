(()=>{
  const byId=id=>(window.FM_PLAYERS||[]).find(item=>item.id===id);
  const addUpdate=(player,update)=>{
    if(!player)return;
    player.profileDate='2041-02-22';
    player.matchUpdates=[...(player.matchUpdates||[]).filter(item=>!(item.date===update.date&&item.opponent===update.opponent)),update];
  };

  const ramsey=byId('justin-ramsey');
  if(ramsey){
    ramsey.careerNarrative=[...(ramsey.careerNarrative||[]),'Justin Ramsey kam am 22. Februar 2041 bei Sligo Rovers in der 52. Minute ins Spiel und entschied den 4:0-Auswärtssieg mit einem verwandelten Elfmeter, einer Vorlage und der Bestnote 8,2.'];
    ramsey.honours=[{year:'2041',type:'Jokerleistung',items:['Tor und Vorlage beim 4:0 bei Sligo Rovers','Elfmeter zum 0:2 in der 63. Minute','38 Minuten · Note 8,2 · Spieler des Spiels']},...(ramsey.honours||[])];
    addUpdate(ramsey,{date:'2041-02-22',opponent:'Sligo Rovers',competition:'Premier Division',result:'0:4',minutes:38,goals:1,assists:1,rating:8.2,note:'Entschied die Partie nach seiner Einwechslung mit Tor und Vorlage'});
  }

  const diego=byId('diego-fernandez');
  if(diego){
    diego.careerNarrative=[...(diego.careerNarrative||[]),'Diego Fernández absolvierte am 22. Februar 2041 seinen 75. Einsatz für Finn Harps und eröffnete den 4:0-Sieg bei Sligo Rovers nach zwei Minuten mit einem Volley aus 19 Metern in den Winkel.'];
    diego.honours=[{year:'2041',type:'75 Einsätze für Finn Harps',items:['Jubiläumsspiel bei Sligo Rovers am 22.02.2041','Traumtor zum 0:1 nach zwei Minuten','90 Minuten · Note 8,1']},...(diego.honours||[])];
    addUpdate(diego,{date:'2041-02-22',opponent:'Sligo Rovers',competition:'Premier Division',result:'0:4',minutes:90,goals:1,assists:0,rating:8.1,note:'75. Finn-Harps-Einsatz und Traumtor nach zwei Minuten'});
  }

  const frame=byId('daryl-frame');
  if(frame){
    frame.careerNarrative=[...(frame.careerNarrative||[]),'Daryl Frame traf am 22. Februar 2041 beim 4:0 in Sligo zum zweiten Mal in Folge in der Premier Division. Er nutzte in der 65. Minute einen Fehler von Garbhan Frahill zum 0:3.'];
    addUpdate(frame,{date:'2041-02-22',opponent:'Sligo Rovers',competition:'Premier Division',result:'0:4',minutes:90,goals:1,assists:0,rating:7.7,note:'Zweites Ligator im zweiten Saisonspiel'});
  }

  const kelly=byId('kevin-kelly');
  if(kelly){
    kelly.careerNarrative=[...(kelly.careerNarrative||[]),'Kevin Kelly erzielte am 22. Februar 2041 beim 4:0 gegen Sligo Rovers in der 82. Minute per Kopf den Endstand. Der Treffer bestätigte Finn Harps’ klare Lufthoheit mit 67 Prozent gewonnenen Kopfballduellen.'];
    addUpdate(kelly,{date:'2041-02-22',opponent:'Sligo Rovers',competition:'Premier Division',result:'0:4',minutes:90,goals:1,assists:0,rating:7.9,note:'Kopfballtor zum 0:4'});
  }

  const andrews=byId('darcy-andrews');
  if(andrews){
    andrews.careerNarrative=[...(andrews.careerNarrative||[]),'Darcy Andrews absolvierte beim 4:0 gegen Sligo Rovers am 22. Februar 2041 seinen 200. Einsatz für Finn Harps und half dabei, den Gegner ohne Schuss aufs Tor zu halten.'];
    andrews.honours=[{year:'2041',type:'200 Einsätze für Finn Harps',items:['Jubiläumsspiel bei Sligo Rovers','Zu-null-Sieg ohne gegnerischen Schuss aufs Tor','90 Minuten · Note 7,6']},...(andrews.honours||[])];
    addUpdate(andrews,{date:'2041-02-22',opponent:'Sligo Rovers',competition:'Premier Division',result:'0:4',minutes:90,goals:0,assists:0,rating:7.6,cleanSheet:true,note:'200. Einsatz für Finn Harps'});
  }

  const reilly=byId('evan-reilly');
  if(reilly){
    reilly.careerNarrative=[...(reilly.careerNarrative||[]),'Evan Reilly blieb am 22. Februar 2041 beim 4:0 in Sligo ohne Gegentor. Sligo brachte keinen seiner zwei Abschlüsse auf sein Tor.'];
    addUpdate(reilly,{date:'2041-02-22',opponent:'Sligo Rovers',competition:'Premier Division',result:'0:4',minutes:90,goals:0,assists:0,rating:7.6,cleanSheet:true,note:'Zu null ohne gegnerischen Schuss aufs Tor'});
  }

  const roberts=byId('jake-roberts');
  if(roberts){
    roberts.careerNarrative=[...(roberts.careerNarrative||[]),'Jake Roberts sammelte beim 4:0-Auswärtssieg gegen Sligo Rovers weitere 29 Ligaminuten und erhielt die Note 6,9.'];
    addUpdate(roberts,{date:'2041-02-22',opponent:'Sligo Rovers',competition:'Premier Division',result:'0:4',minutes:29,goals:0,assists:0,rating:6.9,note:'Zweiter Ligaeinsatz für Finn Harps'});
  }
})();