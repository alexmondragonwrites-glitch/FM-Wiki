(()=>{
  const players=window.FM_PLAYERS||[];
  const docherty=players.find(player=>player.id==='dom-docherty');
  if(docherty){
    Object.assign(docherty,{
      profileDate:'2041-01-11',
      conditionLabel:'Verletzt',
      condition:'Bänderdehnung im Knie',
      availability:'Verletzt · 4–6 Wochen',
      summary:'Explosiver Direktspieler auf dem linken Flügel. Beim 3:0-Testspielsieg bei Cercle Brugge überzeugte er mit der Note 7,4, erlitt jedoch eine Bänderdehnung im Knie und fällt vier bis sechs Wochen aus.',
      future:'Die vollständige Rehabilitation hat Vorrang. Durch den Ausfall verpasst Docherty voraussichtlich den Rest der Vorbereitung und könnte auch zum Ligastart noch fehlen.',
      risks:[...(docherty.risks||[]).filter(item=>!String(item).includes('Bänderdehnung')),'Bänderdehnung im Knie · Ausfall vier bis sechs Wochen']
    });
  }

  const rouviere=players.find(player=>player.id==='basile-rouviere');
  if(rouviere){
    Object.assign(rouviere,{
      profileDate:'2041-01-11',
      contractTalks:'Verlängerung grundsätzlich möglich',
      proposedContractUntil:'31.12.2043',
      proposedWageRange:'€35.000–€42.500/Woche',
      playingTimeNegotiation:'Finn Harps strebt eine Rotationsrolle an; die Spielerseite erwartet derzeit regelmäßige Startelfeinsätze.',
      summary:'Der ablösefreie Benfica-Fund bleibt ein wertvoller Kreativspezialist. Rouvière möchte seinen bis Ende 2041 laufenden Vertrag verlängern; Gespräche über eine Verlängerung bis Ende 2043 und eine künftige Rotationsrolle laufen.',
      future:'Eine Verlängerung ist sportlich sinnvoll, sofern die Rotationsrolle sauber vereinbart wird. Der angebotene Gehaltsrahmen liegt mit €35.000 bis €42.500 pro Woche ungefähr auf dem bisherigen Niveau.',
      risks:[...(rouviere.risks||[]).filter(item=>!String(item).includes('Rollenverständnis')),'Offenes Rollenverständnis in den Vertragsgesprächen: regelmäßige Startelfeinsätze versus geplante Rotation']
    });
  }
})();