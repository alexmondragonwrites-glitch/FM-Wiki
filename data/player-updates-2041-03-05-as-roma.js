(()=>{
  const byId=id=>(window.FM_PLAYERS||[]).find(item=>item.id===id);

  const kelly=byId('kevin-kelly');
  if(kelly){
    kelly.profileDate='2041-03-05';
    kelly.careerNarrative=[...(kelly.careerNarrative||[]),'Kevin Kelly erzielte am 5. März 2041 im Stadio Olimpico das 1:0 für Finn Harps. Das Champions-League-Achtelfinalhinspiel endete trotz seiner frühen Führung mit einer 1:2-Niederlage.'];
    kelly.honours=[{year:'2041',type:'Champions-League-Tor',items:['Führungstreffer im Achtelfinalhinspiel bei A.S. Roma','90 Minuten · Note 7,0']},...(kelly.honours||[])];
    kelly.matchUpdates=[...(kelly.matchUpdates||[]),{date:'2041-03-05',opponent:'A.S. Roma',competition:'UEFA Champions League · Achtelfinale',result:'1:2',minutes:90,goals:1,assists:0,rating:7.0,note:'Erzielte die frühe Führung im Stadio Olimpico'}];
  }

  const frame=byId('daryl-frame');
  if(frame){
    frame.profileDate='2041-03-05';
    frame.careerNarrative=[...(frame.careerNarrative||[]),'Daryl Frame absolvierte beim Achtelfinalhinspiel gegen A.S. Roma am 5. März 2041 sein 50. Profispiel.'];
    frame.honours=[{year:'2041',type:'Karrieremeilenstein',items:['50. Profispiel am 05.03.2041 gegen A.S. Roma']},...(frame.honours||[])];
    frame.matchUpdates=[...(frame.matchUpdates||[]),{date:'2041-03-05',opponent:'A.S. Roma',competition:'UEFA Champions League · Achtelfinale',result:'1:2',minutes:90,goals:0,assists:0,rating:6.5,note:'50. Profispiel'}];
  }

  const paulo=byId('paulo-henrique');
  if(paulo){
    paulo.profileDate='2041-03-05';
    paulo.careerNarrative=[...(paulo.careerNarrative||[]),'Paulo Henriques Serie von 360 Minuten ohne Gegentor endete am 5. März 2041 im Champions-League-Achtelfinalhinspiel bei A.S. Roma.'];
    paulo.matchUpdates=[...(paulo.matchUpdates||[]),{date:'2041-03-05',opponent:'A.S. Roma',competition:'UEFA Champions League · Achtelfinale',result:'1:2',minutes:90,cleanSheet:false,rating:6.3,note:'Serie nach 360 Minuten ohne Gegentor beendet'}];
  }

  const rouviere=byId('basile-rouviere');
  if(rouviere){
    rouviere.profileDate='2041-03-05';
    rouviere.careerNarrative=[...(rouviere.careerNarrative||[]),'Basile Rouvière wurde beim 1:2 in Rom zur Pause eingewechselt und erhielt mit 7,1 die beste Finn-Harps-Note des Abends.'];
    rouviere.matchUpdates=[...(rouviere.matchUpdates||[]),{date:'2041-03-05',opponent:'A.S. Roma',competition:'UEFA Champions League · Achtelfinale',result:'1:2',minutes:42,goals:0,assists:0,rating:7.1,note:'Bester benoteter Finn-Harps-Spieler'}];
  }
})();
