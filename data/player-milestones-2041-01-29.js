(()=>{
  const papini=(window.FM_PLAYERS||[]).find(item=>item.id==='giacomo-papini');
  if(papini){
    papini.careerNarrative=[...(papini.careerNarrative||[]),'Am 29. Januar 2041 absolvierte Giacomo Papini beim 0:0 gegen Paris Saint-Germain sein 250. Spiel als Profi.'];
    papini.honours=[{year:'2041',type:'Karrieremeilenstein',items:['250. Profispiel gegen Paris Saint-Germain am 29.01.2041','0:0 in der Champions-League-Ligaphase']},...(papini.honours||[])];
    papini.profileDate='2041-01-29';
  }
  const rouviere=(window.FM_PLAYERS||[]).find(item=>item.id==='basile-rouviere');
  if(rouviere){
    rouviere.careerNarrative=[...(rouviere.careerNarrative||[]),'Am 29. Januar 2041 bestritt Basile Rouvière beim 0:0 gegen Paris Saint-Germain seinen 150. Pflichtspieleinsatz für Finn Harps.'];
    rouviere.honours=[{year:'2041',type:'Finn-Harps-Meilenstein',items:['150. Einsatz für Finn Harps gegen Paris Saint-Germain am 29.01.2041','Eingewechselt in der 57. Minute','0:0 in der Champions-League-Ligaphase']},...(rouviere.honours||[])];
    rouviere.profileDate='2041-01-29';
  }
})();