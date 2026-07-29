(()=>{
  const find=(id,name)=>(window.FM_PLAYERS||[]).find(item=>item.id===id||item.name===name);
  const addMatch=(player,update)=>{if(player)player.matchUpdates=[...(player.matchUpdates||[]),update];};

  const brennan=find('callum-brennan','Callum Brennan');
  if(brennan){
    brennan.profileDate='2041-03-29';
    brennan.careerNarrative=[...(brennan.careerNarrative||[]),'Callum Brennan erzielte am 29. März 2041 beim 1:0 in Tschechien das Siegtor für Irland und wurde mit der Note 7,9 zum besten Spieler der Partie.'];
    brennan.honours=[{year:'2041',type:'Siegtor für Irland',items:['1:0 in Tschechien','Tor in der 31. Minute','Beste irische Note 7,9','Auftaktsieg in der WM-Qualifikation']},...(brennan.honours||[])];
    addMatch(brennan,{date:'2041-03-29',opponent:'Tschechien',competition:'FIFA-WM-Qualifikation Europa',result:'0:1',minutes:90,goals:1,assists:0,rating:7.9,note:'Siegtor und Spieler des Spiels'});
  }

  const istrankins=find('mareks-istrankins','Mareks Istrankins');
  if(istrankins){
    istrankins.profileDate='2041-03-29';
    istrankins.careerNarrative=[...(istrankins.careerNarrative||[]),'Mareks Istrankins gab am 29. März 2041 beim 1:0-Auswärtssieg in Tschechien sein Debüt für Irland.'];
    istrankins.honours=[{year:'2041',type:'Länderspieldebüt',items:['Debüt für Irland in Prag','1:0 gegen Tschechien','Startelfeinsatz','Note 6,9']},...(istrankins.honours||[])];
    addMatch(istrankins,{date:'2041-03-29',opponent:'Tschechien',competition:'FIFA-WM-Qualifikation Europa',result:'0:1',minutes:90,goals:0,assists:0,rating:6.9,note:'Länderspieldebüt und weiße Weste'});
  }

  const andrews=find('darcy-andrews','Darcy Andrews');
  if(andrews){
    andrews.profileDate='2041-03-29';
    addMatch(andrews,{date:'2041-03-29',opponent:'Tschechien',competition:'FIFA-WM-Qualifikation Europa',result:'0:1',minutes:90,goals:0,assists:0,rating:7.4,note:'Stabilisierte die irische Defensive beim Auswärtssieg'});
  }
})();