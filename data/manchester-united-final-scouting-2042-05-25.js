(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-05-25';
  const scoutSnapshotDate='2042-05-20';
  const reportId='2042-05-25-champions-league-final-manchester-united-scouting';

  const opponent={
    club:'Manchester United',
    competition:'UEFA Champions League',
    stage:'Finale',
    venue:'Olympic Athletic Center of Athens',
    location:'Athen, Griechenland',
    scoutSnapshotDate,
    leaguePosition:'4. in der Premier League',
    preferredShape:'4-2-3-1',
    comparison:{
      finnHarps:{avgAge:22.58,avgHeight:'182 cm',avgWeight:'76 kg',avgSeniorCaps:24,avgYouthCaps:8,avgWage:'€46.500/Woche',avgTransferValue:'€28 Mio.',unavailable:0},
      manUtd:{avgAge:27.93,avgHeight:'180 cm',avgWeight:'75 kg',avgSeniorCaps:52,avgYouthCaps:6,avgWage:'€245.000/Woche',avgTransferValue:'€69,59 Mio.',unavailable:3}
    },
    likelyCore:[
      {player:'Santiago Ángel',position:'TW',age:33,apps:'56',goals:0,assists:0,rating:7.02,note:'Hervorragender Torwart; steht nicht zum Verkauf.'},
      {player:'William Lebrun',position:'V (RLZ), OM (R)',age:26,apps:'49',goals:0,assists:4,rating:6.95,value:'€122–146 Mio.'},
      {player:'Said Toufiqui',position:'V (LZ)',age:32,apps:'47 (2)',goals:0,assists:0,rating:6.95,value:'€50–73 Mio.'},
      {player:'Mërgim Lluca',position:'V (LZ), DM',age:29,apps:'54 (1)',goals:2,assists:2,rating:7.16,value:'€162–185 Mio.'},
      {player:'Marco Ciliberti',position:'V/FV/M/OM (L)',age:28,apps:'34 (7)',goals:2,assists:3,rating:6.92,value:'€77–90 Mio.'},
      {player:'Şükrü Şeker',position:'DM, M (Z)',age:33,apps:'50',goals:2,assists:6,rating:6.99,note:'Steht nicht zum Verkauf.'},
      {player:'Jhoao Talero',position:'DM, M (Z)',age:30,apps:'44 (9)',goals:1,assists:8,rating:6.80,value:'€71–84 Mio.'},
      {player:'Aleš Želko',position:'M/OM (R), ST (Z)',age:32,apps:'41 (4)',goals:15,assists:13,rating:7.41,note:'Wichtigster Output-Spieler der offensiven Dreierreihe.'},
      {player:'Mouhssine El Fassi',position:'M/OM (Z)',age:28,apps:'43 (1)',goals:5,assists:5,rating:6.77,value:'€76–89 Mio.'},
      {player:'Guillermo Villano',position:'M (LZ), OM (RL)',age:30,apps:'16 (29)',goals:9,assists:8,rating:7.23,value:'€212–231 Mio.'},
      {player:'Ricardo López',position:'ST (Z)',age:27,apps:'44',goals:22,assists:1,rating:7.00,value:'€263–333 Mio.',note:'Klarer zentraler Torjäger im aktuellen Kaderexport.'}
    ],
    availability:[
      {player:'Aymar Kitenge',status:'Verletzt',apps:'48',goals:14,assists:13,rating:7.45,value:'€300–329 Mio.',note:'Der Scoutbericht zeigt ihn noch in der besten Elf als Stoßstürmer, der aktuelle Kaderexport markiert ihn jedoch als verletzt. Seine Finalverfügbarkeit ist eine Schlüsselfrage.'},
      {player:'Óscar Dutto',status:'Verletzt markiert',position:'TW',apps:'6 (2)',rating:6.72},
      {player:'Yizhar Kricheli',status:'Verletzt markiert',position:'OM (RLZ), ST (Z)',apps:'24 (20)',goals:14,assists:2,rating:7.05}
    ],
    strengths:[
      'Sehr gute Grundfitness, Ausdauer und Nervenstärke.',
      'Starke Eins-gegen-eins-Verteidigung, gutes Tackling und gute Strafraumkontrolle.',
      'Santiago Ángel wird als hervorragender Torwart bewertet.',
      'William Lebrun rechts und Marco Ciliberti links sind starke Außenverteidiger.',
      'Gefahr durch Weitschüsse aus der zweiten Reihe.',
      'Hohe Antizipation und tendenziell gutes Deckungsverhalten.',
      'Bei defensiven Standards gewinnt United am kurzen Pfosten 48 % der ersten Kontakte; Ligadurchschnitt 32 %.',
      'Nathan Ribeiro kam mit 7,62 Durchschnitt in den letzten fünf Spielen in sehr guter Form in die Schlussphase.'
    ],
    weaknesses:[
      '9 der 13 Gegentore in den letzten 19 Spielen entstanden nach kurzen Pässen.',
      '5 von 13 Vorlagen zu Gegentoren in den letzten 19 Spielen kamen innerhalb des Sechzehners.',
      'In den letzten 20 Spielen fielen 5 von 14 Gegentoren bereits in der Anfangsviertelstunde.',
      'Die Torhüter werden beim Herauslaufen als weniger stark eingeschätzt, obwohl Ángel auf der Linie stark ist.',
      'Mouhssine El Fassi war mit 6,60 im Schnitt über seine letzten fünf Spiele außer Form.',
      'Gegen ein 4-4-2 ließ United laut Scoutbericht im Schnitt drei Großchancen pro 90 Minuten zu.',
      'Die Standard-Offensive erzeugte aus durchschnittlich 7,1 Standardsituationen nur rund 0,15 xA pro Spiel.'
    ],
    tacticalRead:[
      'Früh Druck machen: Die Anfälligkeit in der ersten Viertelstunde passt zu den jüngsten Harps-Blitzstarts.',
      'Über kurze Kombinationen und Cutbacks in den Strafraum kommen. Genau dort zeigen die Gegentor-Daten Uniteds größte strukturelle Verwundbarkeit.',
      'Nicht in einen reinen Flanken- und Kopfballwettbewerb gehen: United verteidigt den Strafraum, Tacklings und erste Kontakte bei Standards gut.',
      'Läufe hinter die letzte Linie können Ángel zum Herauslaufen zwingen, einer schwächeren Facette des Torwartprofils.',
      'Želko und Villano dürfen zwischen den Linien nicht frei drehen; López ist der klare Abschluss-Spieler, falls Kitenge ausfällt.',
      'Das Altersprofil spricht für Finn Harps: 22,58 gegen 27,93 Jahre. United bringt deutlich mehr Länderspielerfahrung und ökonomisches Gewicht, Harps mehr Jugend und Dynamik.'
    ]
  };

  const cl=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  const final=cl.final||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...cl,
    final:{...final,opponentScouting:opponent,status:'Finale steht unmittelbar bevor'}
  };

  const season=(window.FM_SEASONS||[]).find(item=>item&&(item.year===2042||item.season===2042));
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Athen rückt näher: Manchester United bringt den teureren und erfahreneren Kader, Finn Harps die jüngere Mannschaft und einen klaren taktischen Ansatz. United ist besonders nach kurzen Kombinationen und in der Anfangsviertelstunde verwundbar.';
    season.nextFocus={
      competition:'UEFA Champions League',stage:'Finale',opponent:'Manchester United',venue:'Olympic Athletic Center of Athens',location:'Athen, Griechenland',status:'Finalvorbereitung',
      scouting:['United: 9 von 13 jüngsten Gegentoren nach kurzen Pässen','5 von 14 Gegentoren zuletzt in der Anfangsviertelstunde','Kitenge im aktuellen Kaderexport verletzt','Ricardo López: 22 Tore in 44 Einsätzen']
    };
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='25.05.2042: Finalscouting Manchester United. Der Gegner spielt bevorzugt 4-2-3-1 und bringt mit Ø 27,93 Jahren, Ø €245.000 Wochengehalt und Ø €69,59 Mio. Transferwert deutlich mehr Erfahrung und finanzielles Gewicht als Finn Harps (22,58 Jahre, €46.500, €28 Mio.). Auffällig: 9 von 13 jüngsten Gegentoren nach kurzen Pässen und 5 von 14 in der Anfangsviertelstunde. Aymar Kitenge ist im aktuellen Export verletzt; Ricardo López steht bei 22 Toren.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,
    type:'Finalscouting',
    date,
    competition:'UEFA Champions League',
    fixtureDate:'Finale 2041/42',
    headline:'Noch ein Schritt bis Athen: So kann Finn Harps Manchester United knacken',
    subheadline:'United ist älter, teurer und erfahrener. Doch das Scouting zeigt klare Angriffspunkte: kurze Kombinationen, Läufe in den Strafraum und vor allem ein aggressiver Beginn.',
    label:'CHAMPIONS LEAGUE · FINALSCOUTING · MANCHESTER UNITED',
    heroStat:{label:'Kadervergleich',value:'22,58 vs. 27,93 Jahre',note:'Harps jünger · United Ø €245K/Woche'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Die große Finalgeschichte ist bekannt: Finn Harps gegen Titelverteidiger Manchester United, zwei Champions-League-Titel gegen zwei. Jetzt wird aus der Erzählung ein Matchplan. Der United-Kader ist im Durchschnitt mehr als fünf Jahre älter, verdient über fünfmal so viel und besitzt mehr als doppelt so viel durchschnittlichen Transferwert. Trotzdem zeigt der Scoutbericht keine unverwundbare Maschine.',
    sections:[
      {title:'Das ökonomische Schwergewicht',text:'United kommt mit Ø 27,93 Jahren, 52 A-Länderspielen pro Spieler, Ø €245.000 Wochengehalt und Ø €69,59 Mio. Transferwert. Finn Harps steht bei 22,58 Jahren, 24 A-Länderspielen, €46.500 und €28 Mio. Der finanzielle Abstand ist gewaltig, sportlich ist aus dem früheren Außenseiterduell trotzdem ein echtes Finale auf Augenhöhe geworden.'},
      {title:'Die beste United-Elf',text:'Der Scoutbericht ordnet United in einem 4-2-3-1 ein: Ángel im Tor; Lebrun, Toufiqui, Lluca und Ciliberti in der Abwehr; Talero und Şeker als Doppelsechs; Villano, El Fassi und Želko dahinter. Im Sturm zeigt die Scout-Elf Aymar Kitenge, der aktuelle Kaderexport markiert ihn jedoch als verletzt. Ricardo López mit 22 Toren in 44 Spielen ist damit die offensichtliche Alternative.'},
      {title:'Warum ein Blitzstart wieder Sinn ergibt',text:'Fünf von 14 Gegentoren in den letzten 20 Spielen kassierte United bereits in der Anfangsviertelstunde. Nach Barrys Doppelpack in sieben Minuten in Waterford und Ramseys Toren in Minute zwei und 17 im Rückspiel ist das mehr als eine hübsche Statistik: Finn Harps kommt gerade mit genau der Art von Spielbeginn, die United zuletzt Probleme bereitet hat.'},
      {title:'Nicht flanken, kombinieren',text:'Neun der 13 Gegentore in den letzten 19 Spielen entstanden nach kurzen Pässen; fünf der 13 Torvorlagen kamen aus dem Strafraum. Gleichzeitig ist United stark bei Tacklings, Strafraumkontrolle und ersten Kontakten am kurzen Pfosten bei Standards. Der logischste Weg ist deshalb nicht Flankenroulette, sondern kurze Kombinationen, Überladungen, Cutbacks und Läufe hinter die letzte Linie.'},
      {title:'Uniteds Waffen',text:'Aleš Želko bringt 15 Tore und 13 Vorlagen, Guillermo Villano 9 und 8. Ricardo López steht bei 22 Saisontoren. Dazu kommen starke Außenverteidiger, ein guter Torwart auf der Linie, hohe Antizipation und viel Erfahrung. Wer United Raum für zweite Bälle und Distanzschüsse gibt, lädt den Titelverteidiger ein.'},
      {title:'Die Personalfrage Kitenge',text:'Aymar Kitenge ist mit 14 Toren, 13 Vorlagen und 7,45 Durchschnitt einer der wertvollsten United-Spieler und wird im Scoutbild noch als Stoßstürmer der besten Elf geführt. Der aktuelle Export führt ihn jedoch als verletzt. Bis zur endgültigen Aufstellung bleibt deshalb offen, ob Harps auf Kitenge oder auf den 22-Tore-Stürmer López vorbereitet sein muss.'}
    ],
    verdictHeading:'Kein Grund, United größer zu machen als nötig',
    verdict:'United besitzt den teureren Kader und mehr Routine. Finn Harps besitzt aber einen klaren Weg ins Spiel: früh attackieren, über kurze Pässe in den Strafraum kommen, das Tempo hochhalten und United nicht in seine Stärken bei Strafraumverteidigung und Luftduellen führen. Nach City und Barcelona muss diese Mannschaft vor Athen niemanden mehr mythologisieren.',
    sources:['FM-Scoutbericht Manchester United · 20.05.2042','FM-Kaderexport Manchester United · vor dem Champions-League-Finale','FM-Kadervergleich Finn Harps vs. Manchester United']
  });

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-05-25-manchester-united-final-scouting',date,season:2042,category:'Champions League',accent:'red',featured:true,
    eyebrow:'FINALE · MANCHESTER UNITED · SCOUTING',
    title:'Athen rückt näher: United hat Schwachstellen',
    summary:'Manchester United ist älter, teurer und erfahrener. Das Finalscouting zeigt dennoch einen klaren Harps-Weg: früh Druck machen und mit kurzen Kombinationen in den Strafraum kommen.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','man-utd','champions-league-2042','justin-ramsey','ben-barry']
  });
})();