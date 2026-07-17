(()=>{
  const p=(window.FM_PLAYERS||[]).find(x=>x.id==='jake-roberts');
  if(!p)return;
  Object.assign(p,{
    selectedPosition:'Zugang 2041',
    info:'Transfer bestätigt · 01.12.2040',
    status:'Zugang bestätigt · Talent vor Durchbruch',
    summary:'Jake Roberts hat den Vertrag bei Finn Harps unterschrieben. Der 19-jährige walisische Linksfuß wechselt am 1. Dezember 2040 für 25,5 Mio. Euro von Liverpool und wird zum ersten bestätigten Zugang für die Saison 2041.',
    analysis:'Roberts ist kein direkter Rouvière-Klon. Sein Profil liegt näher an Vinícius: ein sauberer Pass- und Verbindungsachter, der mit Ballannahme 15, Passen 16, Technik 16, Übersicht 15 und Teamwork 17 den Rhythmus einer Mannschaft stabilisieren kann. Der Transfer ist nun bestätigt. In der Kaderchronologie übernimmt er einen frei werdenden Mittelfeldplatz, soll die Rolle aber kontrollierter und strukturorientierter interpretieren.',
    future:'Ab dem 1. Dezember 2040 als Talent vor dem Durchbruch in den Profikader integrieren. Der erste Entwicklungsplan sollte ihn als linken zentralen Mittelfeldspieler auf Unterstützen oder als zurückgezogenen Spielmacher auf Unterstützen aufbauen. Er soll nicht Rouvières Spielweise kopieren, sondern über Struktur, Kombinationen und Entscheidungsqualität wachsen.',
    verdict:'Erster bestätigter Zugang für 2041',
    availability:'Zugang bestätigt',
    contractUntil:'31.12.2044 bei Finn Harps · ab 01.12.2040',
    wage:'€42.000 pro Woche bei Finn Harps',
    transferStatus:'Transfer bestätigt · Wechsel am 01.12.2040',
    transferStage:'confirmed',
    transferConfirmed:true,
    transferFee:'€25,5 Mio.',
    transferDate:'19.11.2040',
    transferCompletionDate:'01.12.2040',
    currentClub:'Liverpool bis 30.11.2040',
    futureClub:'Finn Harps',
    medicalStatus:'Ausgezeichneter Gesundheitszustand',
    proposedContract:{
      start:'01.12.2040',
      until:'31.12.2044',
      wage:'€42.000 pro Woche',
      playingTime:'Talent vor Durchbruch',
      futurePlayingTime:'2042 · Ergänzungsspieler',
      annualRaise:'10 %',
      loyaltyBonus:'€1,3 Mio.',
      appearanceFee:'€1.200',
      unusedSubFee:'€800',
      agentFee:'€180.000'
    }
  });
  p.strengths=[...(p.strengths||[]).filter(x=>!String(x).includes('Medizincheck')),'Medizincheck mit ausgezeichnetem Gesundheitszustand bestanden'];
  p.risks=(p.risks||[]).map(x=>x==='Erst ein Premier-League-Einsatz und damit kaum belastbare Erfahrung auf höchstem Vereinsniveau'?'Erst ein Premier-League-Einsatz und damit kaum belastbare Erfahrung auf höchstem Vereinsniveau':x);
  p.careerNarrative=[
    ...(p.careerNarrative||[]).slice(0,3),
    'Am 10. September 2040 debütierte er gegen Brighton in der Premier League für Liverpool. Am 19. November bestätigte er nach bestandenem Medizincheck den Wechsel zu Finn Harps. Der Transfer wird am 1. Dezember 2040 vollzogen.'
  ];
})();