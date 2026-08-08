(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_TRANSFERS=window.FM_TRANSFERS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]={...list[index],...item};else list.push(item);
  };

  const playerId='emerson-escarcega';
  const existing=window.FM_PLAYERS.find(p=>p.id===playerId||p.name==='Emerson Escárcega');
  const profile={
    id:playerId,
    selectedPosition:'Zugang 2041',
    info:'Transfer bestätigt · Wechsel am 01.07.2041',
    name:'Emerson Escárcega',
    positionCode:'ST (Z)',
    bestRole:'Stoßstürmer / Knipser',
    systemRole:'Erfahrener Abschlussstürmer · kurzfristige Spitzenoption',
    nationCode:'MEX',
    nation:'Mexiko',
    group:'Sturm',
    age:31,
    birthDate:'2010-05-26',
    birthPlace:'Toluca, Mexiko',
    height:'177 cm',
    weight:'73 kg',
    personality:'Unbeschwert',
    mediaDescription:'Legendärer Stürmer',
    mediaHandling:'Stoisch',
    preferredFoot:'Rechts sehr stark · links gut',
    international:'Mexiko · 93 Länderspiele / 51 Tore',
    currentClub:'Sevilla bis 30.06.2041',
    futureClub:'Finn Harps',
    status:'Zugang bestätigt · Schlüsselspieler',
    availability:'Wechsel bestätigt · ab 01.07.2041',
    transferStatus:'Transfer bestätigt · Wechsel am 01.07.2041',
    transferStage:'confirmed',
    transferConfirmed:true,
    transferFee:'Ablösefrei',
    transferDate:'20.06.2041',
    transferCompletionDate:'01.07.2041',
    transferValue:'€16,5 Mio. – €20 Mio.',
    currentAbility:169,
    contractUntil:'31.12.2043 bei Finn Harps · ab 01.07.2041',
    wage:'€125.000 pro Woche bei Finn Harps',
    medicalStatus:'Ausgezeichneter Gesundheitszustand · Krankengeschichte weist auf mögliches Langzeitrisiko an der Leiste hin',
    conditionLabel:'Allgemeine Kondition',
    condition:'95%',
    morale:'Extrem schlecht',
    role:'Stürmer',
    rating:4.5,
    summary:'Finn Harps verpflichtet den 31-jährigen mexikanischen Nationalstürmer Emerson Escárcega ablösefrei von Sevilla. Der 169er Angreifer kommt am 1. Juli 2041, erhält einen Vertrag bis Ende 2043 und ist als Schlüsselspieler eingeplant.',
    analysis:'Escárcega ist ein bewusst kurzfristiger Spitzentransfer. Abschluss 19, Technik 18, Ballannahme 18, Ohne Ball 17 und Nervenstärke 17 machen ihn zu einer sofort einsetzbaren Toroption. Gleichzeitig begrenzen Alter, Positionsspezialisierung und die dokumentierte Verletzungsanfälligkeit den Horizont des Deals. Damit passt er als erfahrene Brücke neben Justin Ramsey und vor Ben Barrys nächstem Entwicklungsschritt.',
    strengths:[
      'Abschluss 19, Technik 18 und Ballannahme 18',
      'Ohne Ball 17 und Nervenstärke 17 für hochwertige Laufwege und Abschlüsse',
      'Antritt 17, Beweglichkeit 17 und Schnelligkeit 15 trotz 31 Jahren',
      '93 Länderspiele und 51 Tore für Mexiko',
      'Sehr konstant und laut Scout besonders stark in wichtigen Spielen',
      'Ablösefreier Wechsel trotz geschätztem Marktwert von €16,5–20 Mio.',
      'Scout schätzt zusätzliches Marketingpotenzial auf rund €4 Mio. pro Jahr'
    ],
    risks:[
      'Relativ verletzungsanfällig',
      'Krankengeschichte deutet auf mögliches Langzeitproblem mit einer Leistenverhärtung hin',
      'Sprunghöhe 3 begrenzt ihn deutlich in der Luft',
      'Auf die zentrale Sturmposition festgelegt',
      'Hohe laufende Kosten durch €125.000 Wochengehalt und umfangreiche Torprämien',
      'Mit 31 Jahren keine langfristige Entwicklungsanlage'
    ],
    future:'Für die zweite Jahreshälfte 2041 und die Saisons 2042/43 als fertige Spitzenoption einplanen, ohne die Minuten von Justin Ramsey und Ben Barry dauerhaft zu blockieren. Der Vertrag bis Ende 2043 schafft einen klaren natürlichen Ausstiegspunkt.',
    verdict:'Die Veteranen-Brücke ist gebaut',
    page:'spieler.html?id=emerson-escarcega',
    proposedContract:{
      start:'01.07.2041',
      until:'31.12.2043',
      wage:'€125.000 pro Woche',
      playingTime:'Schlüsselspieler',
      loyaltyBonus:'€5,25 Mio.',
      appearanceFee:'€2.500',
      goalBonus:'€23.500',
      unusedSubFee:'€625',
      championsLeagueTitleBonus:'€475.000',
      agentFee:'€575.000',
      seasonGoalBonuses:['20 Tore · €425.000','25 Tore · €1,05 Mio.']
    },
    attributes:{
      Technik:{
        Abschluss:19,
        Ballannahme:18,
        Deckung:9,
        Dribbling:11,
        Ecken:12,
        Elfmeter:14,
        Flanken:11,
        Freistöße:11,
        Kopfballtechnik:16,
        Passen:12,
        Tackling:5,
        Technik:18,
        'Weite Einwürfe':3,
        Weitschüsse:10
      },
      Mental:{
        Aggressivität:16,
        Antizipation:16,
        Einsatzfreude:14,
        Entscheidungen:15,
        Flair:16,
        Führungsqualitäten:12,
        Konzentration:13,
        Mut:10,
        Nervenstärke:17,
        'Ohne Ball':17,
        Stellungsspiel:12,
        Teamwork:14,
        Übersicht:10,
        Zielstrebigkeit:16
      },
      Physis:{
        Antritt:17,
        Ausdauer:15,
        Balance:16,
        Beweglichkeit:17,
        Grundfitness:16,
        Kraft:13,
        Schnelligkeit:15,
        Sprunghöhe:3
      }
    },
    seasonSplits:[
      {competition:'LaLiga',appearances:'34 (1)',goals:17,assists:2,pom:4,rating:7.12},
      {competition:'CONCACAF Nations League',appearances:'4 (0)',goals:4,assists:0,pom:0,rating:7.55},
      {competition:'Sonstige Spiele',appearances:'2 (0)',goals:2,assists:0,pom:0,rating:7.25}
    ],
    careerClubs:[
      {club:'Sevilla',period:'2036–2041',appearances:152,goals:80},
      {club:'Liverpool',period:'2028–2037',appearances:17,goals:2},
      {club:'Real Sociedad',period:'2035–2036',appearances:27,goals:12},
      {club:'Stuttgart',period:'2033–2034',appearances:0,goals:0},
      {club:'Deportivo Toluca',period:'2025–2029',appearances:64,goals:16}
    ],
    careerTotals:{appearances:260,goals:110,assists:11,pom:10,rating:6.94},
    careerNarrative:[
      'Escárcega stammt aus Toluca in Mexiko und durchlief vor seinem Profidurchbruch die Nachwuchsausbildung von Club América.',
      'Seine europäische Karriere führte ihn unter anderem zu Liverpool, Real Sociedad und Sevilla. Sevilla verpflichtete ihn 2036/37 für €39 Mio.',
      'Bis Juni 2041 bestritt Escárcega 152 Ligaspiele für Sevilla und erzielte dabei 80 Tore.',
      'Für Mexiko kommt er zum Zeitpunkt der Unterschrift bei Finn Harps auf 93 Länderspiele und 51 Tore.',
      'Am 20. Juni 2041 unterschrieb Escárcega ablösefrei bei Finn Harps. Der Wechsel wird am 1. Juli vollzogen; sein Vertrag läuft bis zum 31. Dezember 2043.'
    ],
    deepAnalysis:[
      {title:'Ein fertiger Abschlussstürmer',text:'Abschluss 19, Technik 18, Ballannahme 18, Antizipation 16 und Ohne Ball 17 ergeben ein Profil, das keine lange Anpassungsphase in der Torproduktion braucht.'},
      {title:'Der Vertrag definiert die Rolle',text:'Schlüsselspielerstatus und €125.000 Wochengehalt machen Escárcega zu einer kurzfristig bedeutenden Option. Die Laufzeit bis Ende 2043 verhindert zugleich, dass ein Veteranenvertrag weit in seine mittleren Dreißiger hineinreicht.'},
      {title:'Ramsey bleibt die Zukunft',text:'Im internen Stürmervergleich liegt Justin Ramsey vor Escárcega. Der Transfer soll daher Qualität und Tiefe für die Gegenwart schaffen, ohne die langfristige Achse Ramsey–Barry umzubauen.'},
      {title:'Das medizinische Fragezeichen bleibt',text:'Der Medizincheck bescheinigt einen ausgezeichneten aktuellen Gesundheitszustand. Gleichzeitig warnt die Krankengeschichte vor möglichen Langzeitproblemen an der Leiste, und der Scout stuft Escárcega als relativ verletzungsanfällig ein.'},
      {title:'Ablösefrei heißt nicht kostenlos',text:'Für den Spieler fällt keine Ablöse an. Finn Harps belastet das Transferbudget dennoch mit €775.000, zahlt €575.000 Beratergebühr und einen Loyalitätsbonus von €5,25 Mio. Hinzu kommen leistungsabhängige Torprämien.'}
    ]
  };

  if(existing)Object.assign(existing,profile);else window.FM_PLAYERS.push(profile);

  upsert(window.FM_TRANSFERS,{
    id:'2041-emerson-escarcega-finn-harps',
    date:'2041-06-20',
    completionDate:'2041-07-01',
    season:2041,
    direction:'in',
    status:'confirmed',
    player:'Emerson Escárcega',
    from:'Sevilla',
    to:'Finn Harps',
    fee:0,
    feeLabel:'Ablösefrei',
    budgetCharge:775000,
    budgetChargeLabel:'€775.000',
    remainingTransferBudget:36000000,
    remainingTransferBudgetLabel:'€36 Mio.',
    contractStart:'2041-07-01',
    contractUntil:'2043-12-31',
    wage:125000,
    wageLabel:'€125.000 pro Woche',
    playingTime:'Schlüsselspieler',
    medicalStatus:'Ausgezeichneter Gesundheitszustand · mögliches Langzeitrisiko Leistenverhärtung',
    loyaltyBonus:5250000,
    appearanceFee:2500,
    goalBonus:23500,
    unusedSubFee:625,
    championsLeagueTitleBonus:475000,
    agentFee:575000,
    seasonGoalBonuses:[
      {goals:20,bonus:425000,label:'20 Saisontore · €425.000'},
      {goals:25,bonus:1050000,label:'25 Saisontore · €1,05 Mio.'}
    ]
  });

  const report={
    id:'2041-06-20-emerson-escarcega-transfer-bestaetigt',
    type:'Transfermeldung',
    date:'2041-06-20',
    competition:'Transfermarkt',
    fixtureDate:'Wechsel am 1. Juli 2041',
    home:'Finn Harps · Emerson Escárcega',
    away:'Sevilla',
    location:'Sevilla → Donegal',
    headline:'Escárcega unterschreibt: Finn Harps holen den Veteranen ablösefrei',
    subheadline:'Der 31-jährige mexikanische Nationalstürmer kommt am 1. Juli von Sevilla. 169 aktuelle Fähigkeit, 93 Länderspiele und 51 Tore für Mexiko treffen auf einen Vertrag bis Ende 2043.',
    label:'TRANSFER BESTÄTIGT · SOMMER 2041',
    heroStat:{label:'Ablöse',value:'€0',note:'€125.000 pro Woche · Vertrag bis 31.12.2043 · Schlüsselspieler'},
    backlink:{href:'kaderplanung.html',label:'← ZUR KADERPLANUNG'},
    intro:'Finn Harps ergänzt die junge Sturmachse um einen fertigen Torjäger. Emerson Escárcega hat seinen Vertrag unterschrieben und wird am 1. Juli 2041 ablösefrei von Sevilla nach Donegal wechseln. Der Mexikaner bringt 169 aktuelle Fähigkeit, 152 Ligaspiele und 80 Tore für Sevilla sowie 93 Länderspiele mit. Sein Auftrag ist nicht Entwicklung, sondern sofortige Qualität.',
    sections:[
      {title:'Ablösefrei, aber bewusst teuer',text:'Für Escárcega wird keine Ablöse fällig. Trotzdem belastet der Wechsel das Transferbudget mit 775.000 Euro; danach stehen 36 Millionen Euro zur Verfügung. Der Vertrag bringt ein Wochengehalt von 125.000 Euro, 5,25 Millionen Euro Loyalitätsbonus und 575.000 Euro Beratergebühr mit.'},
      {title:'Ein Vertrag für zweieinhalb Jahre',text:'Escárcega unterschreibt vom 1. Juli 2041 bis zum 31. Dezember 2043 und erhält den Status Schlüsselspieler. Die kurze Laufzeit passt zur sportlichen Idee: Finn Harps kauft keine Zukunftswette, sondern eine erfahrene Brücke für die kommenden zweieinhalb Spielzeiten.'},
      {title:'19 Abschluss, 18 Technik, 17 ohne Ball',text:'Das Profil ist klar auf Tore ausgerichtet. Abschluss 19, Ballannahme 18, Technik 18, Ohne Ball 17 und Nervenstärke 17 gehören zu seinen stärksten Werten. Dazu kommen Antritt 17 und Schnelligkeit 15. Selbst mit 31 ist Escárcega damit noch kein statischer Strafraumspieler.'},
      {title:'Ramsey, Escárcega, Barry',text:'Der interne Vergleich führt Justin Ramsey vor Escárcega, während Ben Barry weiterhin als großes Entwicklungsprojekt dahinterliegt. Der Neuzugang soll die beiden Generationen verbinden: sofortige Spitzenqualität, ohne die langfristige Sturmplanung auf einen Veteranen zuzuschneiden.'},
      {title:'Medizincheck bestanden, Warnsignal bleibt',text:'Chefphysiotherapeutin Rachel McGeachie bescheinigt Escárcega einen ausgezeichneten aktuellen Gesundheitszustand. Seine Krankengeschichte deutet jedoch auf mögliche Langzeitprobleme mit einer Leistenverhärtung hin. Auch der Scout bewertet ihn als relativ verletzungsanfällig.'},
      {title:'Ein Name mit internationalem Gewicht',text:'Escárcega hat 93 Länderspiele und 51 Tore für Mexiko absolviert. Für Sevilla stehen 152 Ligaspiele und 80 Tore zu Buche. Der Scout erwartet außerdem, dass der prominente Neuzugang die Marketingerlöse des Vereins um rund vier Millionen Euro pro Jahr steigern könnte.'}
    ],
    keyDuelsTitle:'DER TRANSFER IM PROFIL',
    keyDuelsHeading:'Warum Finn Harps bei einem 31-Jährigen zugreift',
    keyDuels:[
      {title:'Sofortige Torqualität',text:'Abschluss 19 und 17 Ligatore in der laufenden Saison liefern eine fertige Alternative zu Ramsey.'},
      {title:'Klare Laufzeit',text:'Der Vertrag endet bereits am 31. Dezember 2043 und verhindert eine langfristige Alterslast.'},
      {title:'Ablösefrei mit Nebenkosten',text:'Keine Ablöse, aber hohe Gehalts-, Loyalitäts- und Bonuskosten. Der Deal ist günstig im Einkauf, nicht billig im Betrieb.'},
      {title:'Gesundheit beobachten',text:'Der aktuelle Medizincheck ist ausgezeichnet, die Leistenhistorie bleibt jedoch ein konkreter Risikofaktor.'}
    ],
    verdictHeading:'Die geplante Brücke im Sturm steht',
    verdict:'Escárcega ist kein Transfer gegen die Jugendstrategie, sondern eine Ergänzung dazu. Ramsey ist bereits die langfristige Spitzenkraft, Barry soll weiter wachsen. Dazwischen bietet der ablösefreie Mexikaner für zweieinhalb Jahre genau das, was ein Titelverteidiger gebrauchen kann: Erfahrung, Abschlussqualität und internationale Routine. Entscheidend wird sein, die hohe Einsatzrolle mit der Entwicklung der beiden jüngeren Stürmer auszubalancieren und seine Belastung wegen der Leistenhistorie sauber zu steuern.',
    sourcesHeading:'Bestätigte Transfer-, Vertrags- und Profildaten',
    sourcesNote:'Der Wechsel ist im Football Manager nach Vertragsunterschrift bestätigt. Vollzug ist am 1. Juli 2041.',
    sources:[
      'Ablöse: €0 · Budgetbelastung €775.000 · verbleibendes Transferbudget €36 Mio.',
      'Vertrag: 01.07.2041 bis 31.12.2043 · €125.000 pro Woche · Schlüsselspieler',
      'Mexiko: 93 Länderspiele / 51 Tore',
      'Sevilla: 152 Ligaspiele / 80 Tore',
      'Medizincheck: ausgezeichnet · mögliche Langzeitprobleme an der Leiste'
    ]
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-20-emerson-escarcega-transfer-bestaetigt',
    date:'2041-06-20',season:2041,category:'Transfer',accent:'gold',
    eyebrow:'TRANSFER BESTÄTIGT · EMERSON ESCÁRCEGA',
    title:'Finn Harps holen Escárcega ablösefrei',
    summary:'Der 31-jährige mexikanische Nationalstürmer kommt am 1. Juli von Sevilla. Vertrag bis Ende 2043, €125.000 pro Woche und Schlüsselspielerstatus.',
    href:'presse.html?id=2041-06-20-emerson-escarcega-transfer-bestaetigt',
    entities:['finn-harps','emerson-escarcega','sevilla','season-2041'],featured:true
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.transferHeadline='Sommer 2041: Pol Muñoz kommt für €12,25 Mio. aus Coventry, Emerson Escárcega ablösefrei aus Sevilla. Escárcega wechselt am 1. Juli und unterschreibt bis Ende 2043.';
    season.latestHeadline='Transfer bestätigt: Finn Harps verpflichten Emerson Escárcega ablösefrei von Sevilla.';
  }

  if(window.FM_SQUAD_PLANNING){
    window.FM_SQUAD_PLANNING.strikerPlan={
      updated:'20.06.2041',
      headline:'Escárcega als Veteranen-Brücke bestätigt',
      status:'signed',
      hierarchy:['Justin Ramsey','Emerson Escárcega','Ben Barry'],
      note:'Escárcega kommt am 1. Juli ablösefrei von Sevilla und ist bis Ende 2043 als erfahrene Spitzenoption eingeplant. Ramsey bleibt die langfristige Referenz, Barry das Entwicklungsprojekt.'
    };
  }
})();