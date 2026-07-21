(()=>{
  const planning=window.FM_SQUAD_PLANNING;
  if(!planning)return;

  Object.assign(planning,{
    referenceDate:'11.01.2041',
    headline:'Rouvière will bleiben. Jetzt entscheidet die Rolle.',
    verdict:'Basile Rouvière ist grundsätzlich zu einer Verlängerung bis zum 31.12.2043 bereit. Der Gehaltsrahmen von €35.000 bis €42.500 pro Woche ist tragbar. Der Vertrag sollte aber nur abgeschlossen werden, wenn die geplante Rotationsrolle mit seiner Erwartung regelmäßiger Startelfeinsätze vereinbar ist.',
    decision:'negotiation',
    decisionLabel:'VERHANDLUNG'
  });

  planning.recommendation=[
    'Rouvière eine Verlängerung bis Ende 2043 anbieten, aber die Einsatzzeit ausdrücklich als Rotationsspieler festschreiben.',
    'Das Gehalt möglichst im Bereich von €38.000 bis €41.000 pro Woche halten und keine unnötigen Klauseln aufnehmen.',
    'Jake Roberts weiterhin schrittweise entwickeln, statt ihn durch eine sofortige Wachablösung zu überladen.',
    'Rouvière gezielt gegen tiefe Gegner und in Spielen mit hohem Kreativbedarf einsetzen.',
    'Die Verhandlungen abbrechen, falls die Spielerseite dauerhaft einen Stamm- oder Starspielerstatus verlangt.'
  ];

  const rouviere=(planning.candidates||[]).find(candidate=>candidate.id==='basile-rouviere');
  if(rouviere){
    Object.assign(rouviere,{
      wage:'Aktuell €41.000/Woche · Forderung €35.000–€42.500',
      contract:'Aktuell 31.12.2041 · vorgeschlagen bis 31.12.2043',
      status:'Verlängerungsbereit · Rollenfrage offen',
      summary:'Rouvière möchte bleiben und hat seine ursprüngliche Gehaltsforderung reduziert. Sportlich passt eine zweijährige Verlängerung zur Übergangsphase mit Jake Roberts, sofern aus dem bisherigen Starstatus eine echte Rotationsrolle wird.',
      risks:['29 Jahre','Defensive Werte begrenzt','Sprunghöhe 2','Spielerseite erwartet derzeit regelmäßige Startelfeinsätze','Eine zu hohe Einsatzgarantie könnte Roberts Entwicklung blockieren'],
      conclusion:'Verlängern, wenn Rotationsstatus und ein Gehalt nahe dem bisherigen Niveau akzeptiert werden. Nicht aus Loyalität einen überhöhten Startelfanspruch vertraglich konservieren.'
    });
  }
})();