(()=>{
  const p=(window.FM_PLAYERS||[]).find(item=>item.id==='daryl-frame');
  if(!p)return;

  Object.assign(p,{
    profileDate:'2041-04-17',
    birthDate:'2021-03-30',
    age:20,
    height:'178 cm',
    weight:'74 kg',
    number:32,
    selectedPosition:'MZ',
    positionCode:'DM, M/OM (Z)',
    systemRole:'Mezzala auf Angriff',
    bestRole:'Ballerobernder Mittelfeldspieler',
    status:'Schlüsselspieler',
    personality:'Perfektionist',
    mediaDescription:'Wunderknabe',
    mediaHandling:'Medienfreundlich',
    preferredFoot:'Links stark · rechts sehr stark',
    international:'Schottland · 6 A-Länderspiele · 1 Tor',
    youthInternational:'Schottland U21 · 15 Spiele · 2 Tore',
    agent:'Mikey Richardson',
    currentAbility:'17',
    potentialAbility:'18–20',
    transferValue:'€46Mio - €60Mio',
    contractUntil:'31.12.2045',
    wage:'€38.500 pro Woche',
    condition:'72%',
    conditionLabel:'Hoch',
    morale:'Außergewöhnlich',
    appearances:'15 (4)',
    goals:6,
    assists:4,
    avgRating:7.08,
    playerOfMatch:1,
    summary:'Daryl Frame ist mit 20 Jahren bereits Schlüsselspieler, schottischer Nationalspieler und einer der entscheidenden Akteure der Finn-Harps-Mannschaft. In beiden Champions-League-Viertelfinalspielen gegen Bayern München traf er und führte den Klub damit ins Halbfinale.',
    analysis:'Frame ist ein vertikaler, torgefährlicher Achter mit außergewöhnlicher Dynamik. Antritt 18, Technik 17, Abschluss 15, Antizipation 15 und Übersicht 15 erklären, warum er trotz eines Passwerts von 10 bereits auf höchstem europäischen Niveau Wirkung entfaltet. Seit dem Februar-Snapshot haben sich vor allem Antritt, Technik, Tackling, Übersicht, Stellungsspiel, Teamwork, Elfmeter und Weitschüsse verbessert. Sein Passspiel bleibt der deutlichste Hebel für den nächsten Entwicklungsschritt.',
    future:'Weiter als Mezzala oder dynamischen Achter entwickeln. Individueller Schwerpunkt bleibt Passen, idealerweise ergänzt durch Entscheidungen und Bewegung ohne Ball. Ein Anstieg des Passwerts von 10 auf 12 oder 13 würde sein Spiel bereits deutlich kompletter machen; 14 wäre der Schritt zum nahezu vollständigen Weltklasse-Achter.',
    verdict:'Mit 20 bereits ein europäischer Unterschiedsspieler',
    attributes:{
      Technik:{Abschluss:15,Ballannahme:15,Deckung:13,Dribbling:12,Ecken:6,Elfmeter:10,Flanken:7,Freistöße:6,Kopfballtechnik:8,Passen:10,Tackling:15,Technik:17,WeiteEinwürfe:6,Weitschüsse:10},
      Mental:{Aggressivität:14,Antizipation:15,Einsatzfreude:13,Entscheidungen:12,Flair:15,Führungsqualitäten:14,Konzentration:13,Mut:15,Nervenstärke:13,OhneBall:11,Stellungsspiel:11,Teamwork:11,Übersicht:15,Zielstrebigkeit:14},
      Physis:{Antritt:18,Ausdauer:16,Balance:15,Beweglichkeit:14,Grundfitness:14,Kraft:15,Schnelligkeit:14,Sprunghöhe:9}
    },
    traits:['Legt den Ball am Gegner vorbei','Schießt bei erstbester Gelegenheit'],
    developmentNote:'Profilvergleich 16.02. bis 17.04.2041: Antritt 17→18, Technik 16→17, Tackling 14→15, Übersicht 14→15, Stellungsspiel 10→11, Teamwork 10→11, Elfmeter 9→10 und Weitschüsse 9→10. Passen bleibt bei 10.'
  });

  p.seasonSplits=[
    {competition:'UEFA Champions League 2041',appearances:'12',goals:4,assists:3,pom:1,rating:7.08},
    {competition:'UEFA Superpokal 2041',appearances:'0 (1)',goals:0,assists:0,pom:0,rating:6.90},
    {competition:'Premier Division 2041',appearances:'6',goals:2,assists:1,pom:0,rating:7.15},
    {competition:'UEFA Nations League 2041',appearances:'3',goals:0,assists:0,pom:0,rating:6.50},
    ...(p.seasonSplits||[]).filter(row=>!['UEFA Champions League 2041','UEFA Superpokal 2041','Premier Division 2041','UEFA Nations League 2041'].includes(row.competition))
  ];

  p.careerStats={
    league:{appearances:35,goals:20,assists:11,playerOfMatch:4,rating:7.34},
    seasons:[
      {year:2041,club:'Finn Harps',competition:'Premier Division',appearances:6,goals:2,assists:1,playerOfMatch:0,rating:7.15},
      {year:2040,club:'Finn Harps',competition:'Premier Division',appearances:29,goals:18,assists:10,playerOfMatch:4,rating:7.38}
    ]
  };

  p.careerNarrative=[
    ...(p.careerNarrative||[]).filter(text=>!String(text).includes('17. April 2041')),
    'Am 17. April 2041 ist Frame 20 Jahre alt. Nach 35 Ligaspielen für Finn Harps steht er bei 20 Toren, 11 Vorlagen und einer Durchschnittsnote von 7,34.',
    'Im Champions-League-Viertelfinale 2041 traf Frame sowohl beim 1:0 im Donegal Stadium als auch beim 2:0 in München. Finn Harps setzte sich mit 3:0 im Gesamtergebnis durch.'
  ];
})();