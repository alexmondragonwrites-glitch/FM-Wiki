(()=>{
  const p=(window.FM_PLAYERS||[]).find(x=>x.id==='jake-roberts');
  if(!p)return;
  const preTransferSeasonSplits=[...(p.seasonSplits||[])];
  Object.assign(p,{
    selectedPosition:'Mittelfeld',
    info:'Finn-Harps-Spieler seit 01.12.2040',
    status:'Talent vor Durchbruch',
    summary:'Jake Roberts ist seit dem 1. Dezember 2040 Spieler von Finn Harps. Der 19-jährige walisische Linksfuß kam für 25,5 Mio. Euro von Liverpool und beginnt seine Entwicklung als kontrollierender linker Achter mit außergewöhnlichem Potenzial.',
    analysis:'Mit dem vollzogenen Wechsel endet die Transferbeobachtung und beginnt die eigentliche Entwicklungsarbeit. Roberts ist kein direkter Rouvière-Klon. Sein Profil liegt näher an Vinícius: Ballannahme 15, Passen 16, Technik 16, Übersicht 15 und Teamwork 17 machen ihn zu einem strukturierten Pass- und Verbindungsachter. Finn Harps kauft noch keine fertige Champions-League-Stammkraft, sondern einen 19-jährigen Perfektionisten mit Potenzial 17–19 und einer klaren taktischen Perspektive.',
    future:'Roberts wird als Talent vor dem Durchbruch in den Profikader integriert. Kurzfristig soll er die Abläufe als linker zentraler Mittelfeldspieler auf Unterstützen und als zurückgezogener Spielmacher auf Unterstützen lernen. Einsätze sollen kontrolliert folgen, ohne ihn zum Rouvière-Imitat zu machen.',
    verdict:'Die Entwicklungswette ist angekommen',
    availability:'Einsatzbereit',
    condition:'100%',
    matchSharpness:'99%',
    trainingLoad:'Gering',
    injuryRisk:'Gering',
    fatigue:'Ausgeruht',
    morale:'Hervorragend',
    appearances:'0',
    goals:0,
    assists:0,
    avgRating:'–',
    contractUntil:'31.12.2044 bei Finn Harps',
    wage:'€42.000 pro Woche',
    transferStatus:'Transfer vollzogen · Finn Harps',
    transferStage:'completed',
    transferConfirmed:true,
    transferCompleted:true,
    transferFee:'€25,5 Mio.',
    transferDate:'01.12.2040',
    transferCompletionDate:'01.12.2040',
    currentClub:'Finn Harps',
    formerClub:'Liverpool',
    futureClub:null,
    profileDate:'2040-12-02',
    currentAbility:'14',
    potentialAbility:'17–19',
    preTransferSeasonSplits,
    seasonSplits:[
      {competition:'Finn Harps · Pflichtspiele',appearances:'0',goals:0,assists:0,pom:0,rating:'–'}
    ]
  });
  p.careerSeasons=[
    {season:'2040',club:'Finn Harps',league:'Premier Division',appearances:0,goals:0,assists:0,pom:0,rating:'–'},
    ...(p.careerSeasons||[]).filter(x=>x.club!=='Finn Harps')
  ];
  p.careerNarrative=[
    'Roberts kam in der Saison 2033/34 in die Nachwuchsabteilung von Liverpool und verbrachte dort seine gesamte bisherige Vereinskarriere.',
    'Mit Liverpool U18 gewann er 2037 den FA Youth Cup. 2039 folgte die Meisterschaft in der Premier League 2 Division 1, 2040 der U21 Premier Division International Cup.',
    'Sein erstes A-Länderspiel für Wales bestritt er am 27. September 2039 gegen Island im Alter von 18 Jahren. Bis zu seinem Wechsel sammelte er zwei A-Länderspiele.',
    'Am 10. September 2040 debütierte Roberts gegen Brighton in der Premier League. Nach einem bestandenen Medizincheck unterschrieb er bei Finn Harps und wechselte am 1. Dezember 2040 für 25,5 Mio. Euro nach Ballybofey.',
    'Am 2. Dezember 2040 wurde Roberts erstmals als vollständig registrierter Finn-Harps-Spieler im Profikader geführt. Sein erstes Pflichtspiel für den Klub steht noch aus.'
  ];
  p.honours=[
    {year:'2040',type:'Wechsel zu Finn Harps',items:['Transfer für €25,5 Mio. von Liverpool zu Finn Harps','Vertrag bis 31.12.2044','Premier-League-Debüt für Liverpool gegen Brighton','U21 Premier Division International Cup mit Liverpool U21']},
    ...(p.honours||[]).filter(x=>x.year!=='2040')
  ];
  p.strengths=[...(p.strengths||[]).filter(x=>!String(x).includes('Medizincheck')),'Medizincheck mit ausgezeichnetem Gesundheitszustand bestanden','Seit 01.12.2040 vollständig in den Finn-Harps-Profikader integriert'];
})();