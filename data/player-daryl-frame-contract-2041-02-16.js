(()=>{
  const p=(window.FM_PLAYERS||[]).find(item=>item.id==='daryl-frame');
  if(!p)return;

  Object.assign(p,{
    profileDate:'2041-02-16',
    birthDate:'2021-03-30',
    age:19,
    height:'178 cm',
    weight:'74 kg',
    selectedPosition:'MZ',
    positionCode:'DM, M/OM (Z)',
    systemRole:'Mezzala auf Angriff',
    bestRole:'Ballerobernder Mittelfeldspieler',
    status:'Schlüsselspieler',
    personality:'Perfektionist',
    mediaDescription:'Wunderknabe',
    mediaHandling:'Medienfreundlich',
    preferredFoot:'Links stark · rechts sehr stark',
    international:'Schottland · 5 A-Länderspiele',
    youthInternational:'Schottland U21 · 15 Spiele · 2 Tore',
    agent:'Mikey Richardson',
    currentAbility:'18',
    potentialAbility:'18–20',
    transferValue:'€50Mio - €68Mio',
    contractUntil:'31.12.2045',
    wage:'€38.500 pro Woche',
    condition:'82%',
    conditionLabel:'Ausgezeichnet',
    morale:'Perfekt',
    appearances:'9 (1)',
    goals:3,
    assists:3,
    avgRating:7.07,
    playerOfMatch:1,
    xg:3.32,
    summary:'Daryl Frame ist mit 19 Jahren bereits Schlüsselspieler, schottischer A-Nationalspieler und einer der wertvollsten Akteure der Finn-Harps-Dynastie. Nach seinem Tor zum Ligastart bindet ihn ein neuer Fünfjahresvertrag bis Ende 2045 an den Klub.',
    analysis:'Frame ist kein klassischer Ballverteiler, sondern ein vertikaler Raumjäger aus dem zentralen Mittelfeld. Antritt 17, Technik 16, Abschluss 15 und Antizipation 15 machen ihn besonders gefährlich, sobald Finn Harps den Gegner im letzten Drittel festsetzt. Seine Passqualität ist funktional, aber nicht das Zentrum seines Spiels. Der neue Vertrag sichert einen Spieler, dessen Produktion und Entwicklungskurve bereits deutlich über dem Niveau eines gewöhnlichen Talents liegen.',
    future:'Als Schlüsselspieler auf der bevorzugten rechten Achterseite etablieren. Die nächsten Entwicklungsschritte liegen bei Entscheidungen, Übersicht, Passen und Bewegung ohne Ball, ohne seine aggressive Tiefenstaffelung zu glätten.',
    verdict:'Der Zukunftsspieler ist zum Fundament geworden',
    attributes:{
      Technik:{Abschluss:15,Ballannahme:15,Deckung:13,Dribbling:12,Ecken:6,Elfmeter:9,Flanken:7,Freistöße:6,Kopfballtechnik:8,Passen:10,Tackling:14,Technik:16,WeiteEinwürfe:6,Weitschüsse:9},
      Mental:{Aggressivität:14,Antizipation:15,Einsatzfreude:13,Entscheidungen:12,Flair:15,Führungsqualitäten:14,Konzentration:13,Mut:15,Nervenstärke:14,OhneBall:11,Stellungsspiel:10,Teamwork:10,Übersicht:14,Zielstrebigkeit:14},
      Physis:{Antritt:17,Ausdauer:16,Balance:15,Beweglichkeit:14,Grundfitness:14,Kraft:15,Schnelligkeit:14,Sprunghöhe:9}
    },
    traits:['Legt den Ball am Gegner vorbei','Schießt bei erstbester Gelegenheit'],
    contractDetails:{
      signed:'15.02.2041',
      start:'15.02.2041',
      until:'31.12.2045',
      duration:'Fünf Jahre',
      totalValue:'€10,5 Mio.',
      wage:'€38.500 pro Woche',
      playingTime:'Schlüsselspieler',
      reason:'Die Aussicht auf mehr Spielpraxis war ein erheblicher Faktor bei seiner Entscheidung.',
      bonuses:[
        {label:'Loyalitätsbonus',value:'€1,1 Mio.'},
        {label:'Auflaufprämie',value:'€650'},
        {label:'Vorlagenprämie',value:'€6.000'},
        {label:'Elf-des-Jahres-Prämie (Liga)',value:'€110.000'},
        {label:'Ersatzspieler-Prämie',value:'€160'},
        {label:'Beratergebühr',value:'€93.000'}
      ]
    }
  });

  p.seasonSplits=[
    {competition:'UEFA Champions League 2041',appearances:'8',goals:2,assists:3,pom:1,rating:6.99},
    {competition:'UEFA Superpokal 2041',appearances:'0 (1)',goals:0,assists:0,pom:0,rating:6.90},
    {competition:'Premier Division 2041',appearances:'1',goals:1,assists:0,pom:0,rating:7.90},
    ...(p.seasonSplits||[]).filter(row=>!['UEFA Champions League 2041','UEFA Superpokal 2041','Premier Division 2041'].includes(row.competition))
  ];

  p.careerNarrative=[
    ...(p.careerNarrative||[]),
    'Am 15. Februar 2041 unterschrieb Frame einen neuen Fünfjahresvertrag bis zum 31. Dezember 2045. Das Gesamtvolumen beträgt 10,5 Millionen Euro; sein Wochengehalt liegt bei 38.500 Euro.',
    'Der Klub sicherte ihm die Einsatzzeit eines Schlüsselspielers zu. Die Aussicht auf regelmäßige Spielpraxis war laut Vertragsmeldung ein wesentlicher Faktor für seine Entscheidung.'
  ];

  p.honours=[
    {year:'2041',type:'Langfristige Bindung',items:['Neuer Fünfjahresvertrag vom 15.02.2041 bis 31.12.2045','Gesamtvolumen €10,5 Mio. · Gehalt €38.500 pro Woche','Vereinbarte Einsatzzeit: Schlüsselspieler']},
    ...(p.honours||[])
  ];
})();
