(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-04-28';
  const reportId='2042-04-28-barcelona-halbfinale-vorbericht';
  const previous=window.FM_CLUBS.find(x=>x.id==='barcelona'||x.id==='fc-barcelona'||x.name==='Barcelona'||x.name==='FC Barcelona')||{};

  const probableXI=[
    {name:'José Antonio Rangel',zone:'TW',role:'Mitspielender Torwart',age:33,apps:'50',goals:0,assists:0,rating:7.07,value:'€18–22 Mio.'},
    {name:'Leonardo Greco',zone:'VL',role:'Inverser Flügelverteidiger',age:27,apps:'44',goals:1,assists:3,rating:7.21,value:'€189–208 Mio.'},
    {name:'Ángel',zone:'IVL',role:'Ballspielender Verteidiger',age:30,apps:'48',goals:1,assists:2,rating:7.26,value:'€201–221 Mio.'},
    {name:'Guychel Mukanya',zone:'IVR',role:'Kompromissloser Innenverteidiger',age:32,apps:'21 (12)',goals:0,assists:1,rating:6.92,value:'€34–50 Mio.'},
    {name:'James Ward',zone:'VR',role:'Inverser Außenverteidiger',age:32,apps:'42',goals:2,assists:3,rating:7.23,value:'Nicht zum Verkauf'},
    {name:'Aleksandar Ilić',zone:'DM',role:'Abräumer',age:29,apps:'41',goals:2,assists:10,rating:7.18,value:'€213–278 Mio.'},
    {name:'Carmelo Chirico',zone:'MZ',role:'Mezzala',age:31,apps:'42 (3)',goals:4,assists:9,rating:7.20,value:'€56–66 Mio.'},
    {name:'Álvaro Pérez',zone:'MZ',role:'Zentraler Mittelfeldspieler',age:31,apps:'44',goals:12,assists:4,rating:7.05,value:'€24–34 Mio.'},
    {name:'Lamine Yamal',zone:'OML',role:'Inverser Flügelspieler',age:34,apps:'12 (9)',goals:2,assists:5,rating:7.14,value:'€1,1–4,8 Mio.'},
    {name:'Fernandes',zone:'OMR',role:'Inverser Flügelspieler',age:33,apps:'43 (1)',goals:24,assists:7,rating:7.22,value:'Nicht zum Verkauf'},
    {name:'Timofey Yefremov',zone:'ST',role:'Stoßstürmer',age:26,apps:'44 (2)',goals:16,assists:7,rating:7.10,value:'€194–259 Mio.'}
  ];

  const clubData={
    ...previous,
    id:'barcelona',name:'FC Barcelona',short:'BAR',country:'Spanien',league:'LaLiga EA Sports',season:2042,status:'current',completion:98,
    summary:'Champions-League-Halbfinalgegner 2042. Barcelona steht in LaLiga auf Rang vier und bringt eine sehr erfahrene, extrem teure Mannschaft mit. Der Kadervergleich weist im Schnitt 30,40 Jahre, €230.000 Wochengehalt und €96 Mio. Transferwert pro Spieler aus. Finn Harps ist mit 22,38 Jahren im Schnitt deutlich jünger.',
    formation:'Best-XI-Bild mit Viererkette, Ilić als tiefem Sechser, Chirico/Pérez davor sowie Yamal und Fernandes hinter Yefremov.',
    squadValue:'Kadervergleich: Ø Transferwert €96 Mio. gegenüber €30,5 Mio. bei Finn Harps; mehrere Einzelspieler jenseits von €200 Mio.',
    avgAge:'30,40 Jahre im Kadervergleich; Finn Harps 22,38 Jahre.',
    keyPlayers:['Fernandes','Timofey Yefremov','Aleksandar Ilić','Ángel','Leonardo Greco','Carmelo Chirico','Takashi Kobayashi'],
    tags:['Champions League 2041/42','Halbfinale','LaLiga Rang 4','erfahrener Kader','starkes Passspiel','hohe Kopfballqualität','Steilpass-Gegentore als Angriffspunkt','Tiefe des Raumes als Angriffspunkt'],
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true},
    leagueSnapshot:{date,position:4,competition:'LaLiga EA Sports'},
    squadComparison:{date,avgAge:{finnHarps:22.38,barcelona:30.40},avgHeight:{finnHarps:'182 cm',barcelona:'182 cm'},avgWeight:{finnHarps:'76 kg',barcelona:'77 kg'},avgCaps:{finnHarps:24,barcelona:65},avgWeeklySalary:{finnHarps:'€46.500',barcelona:'€230.000'},avgTransferValue:{finnHarps:'€30,5 Mio.',barcelona:'€96 Mio.'},unavailable:{finnHarps:['Billy Walker'],barcelona:2}},
    probableXI,
    currentForm:[
      {name:'Fernandes',detail:'43(1) Einsätze, 24 Tore, 7 Vorlagen, Ø 7,22. Klar gefährlichster direkte Scorer im Export.'},
      {name:'Timofey Yefremov',detail:'44(2) Einsätze, 16 Tore, 7 Vorlagen, Ø 7,10.'},
      {name:'Takashi Kobayashi',detail:'14(23) Einsätze, 15 Tore, 2 Vorlagen, Ø 7,25. Enorme Torgefahr aus der Rotation.'},
      {name:'Aleksandar Ilić',detail:'41 Einsätze, 2 Tore, 10 Vorlagen, Ø 7,18. Tiefer Kreativ- und Verbindungsspieler.'},
      {name:'Carmelo Chirico',detail:'42(3) Einsätze, 4 Tore, 9 Vorlagen, Ø 7,20.'},
      {name:'Ángel',detail:'48 Einsätze, Ø 7,26; laut Scout zuletzt fantastisch in Form mit Ø 7,60 über fünf Spiele.'}
    ],
    scouting:{
      strengths:[
        'Sehr gute Kopfballtechnik und hohe Sprungkraft im Kader.',
        'Hoher Teamwork-Wert und starke Einsatzfreude.',
        'Sehr hohes Passniveau und gute Übersicht.',
        'Gute Grundfitness, Zielstrebigkeit und Nervenstärke.',
        'Mehrere starke Freistoßschützen und verlässliche Elfmeterschützen.',
        'Am ersten Pfosten bei gegnerischen Standards gewinnt Barcelona laut Scout 68 Prozent der Ballkontakte gegenüber 33 Prozent Ligadurchschnitt.',
        'Fernandes ist mit 24 Toren und 7 Vorlagen der klare offensive Fixpunkt; Yefremov und Kobayashi liefern ebenfalls zweistellige Torzahlen.',
        'Ángel kommt mit starker Form in das Halbfinale.'
      ],
      weaknesses:[
        'Sieben von 17 Vorlagen zu Gegentoren in den letzten 19 Spielen kamen aus der Tiefe des Raumes.',
        'Acht von 17 Gegentoren in den letzten 19 Spielen resultierten aus Steilpässen.',
        'Die Torhüter können laut Scout exzentrisch agieren.',
        'Die Keeper neigen dazu, den Ball wenn möglich wegzufausten.',
        'Guychel Mukanya ist formschwach; laut Scout lag sein Schnitt in den letzten fünf Spielen bei 6,68.',
        'Der Kern der Mannschaft ist deutlich älter als der der Harps: Ø 30,40 gegenüber 22,38 Jahren.'
      ],
      plan:[
        'Vertikale Läufe und Steilpässe hinter Barcelonas letzte Linie suchen. Genau dort entstanden laut Scout acht der letzten 17 Gegentore.',
        'Läufe aus der Tiefe aus dem Mittelfeld forcieren. Sieben Vorlagen zu Gegentoren kamen aus tieferen Zonen.',
        'Fernandes nicht isoliert betrachten: Yefremov, Kobayashi, Ilić und Chirico liefern ebenfalls konstant Output.',
        'Bei Standards keine reine Luftschlacht erzwingen; Barcelonas Kopfball- und Sprungstärke ist klar positiv bewertet.',
        'Tempo und Intensität als strukturellen Vorteil nutzen. Der Harps-Kader ist im Schnitt rund acht Jahre jünger.',
        'Mukanya gezielt unter Druck setzen, solange seine Form schwach bleibt.',
        'Bei Rangel und den übrigen Torhütern auf zweite Bälle achten, da sie zum Fausten neigen.'
      ]
    },
    pressReport:{id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · HALBFINALE',headline:'Jugend gegen Erfahrung: Barcelona vor dem Halbfinale im Check'}
  };
  upsert(window.FM_CLUBS,clubData);

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-04-28-justin-ramsey-training-return',date,player:'Justin Ramsey',type:'return',
    title:'Ramsey kehrt vor Barcelona ins Mannschaftstraining zurück',
    detail:'Nach drei Wochen Pause wegen Knöchelverdrehung ist Ramsey wieder im Mannschaftstraining. Die medizinische Abteilung hält ihn für einsetzbar, weist aber auf stark fehlende Spielpraxis hin.'
  });

  const cl=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...cl,
    knockoutStage:{...(cl.knockoutStage||{}),semifinals:{...((cl.knockoutStage||{}).semifinals||{}),finnHarps:{opponent:'Barcelona',status:'anstehend',scoutingDate:date,notes:['Barcelona Rang 4 in LaLiga','Harps deutlich jünger: Ø 22,38 vs. 30,40 Jahre','Ramsey kehrt nach drei Wochen ins Mannschaftstraining zurück']}}}
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Champions League: Barcelona ist analysiert. Die Katalanen bringen einen extrem erfahrenen und teuren Kader mit, zeigen aber wiederkehrende Probleme gegen Steilpässe und Läufe aus der Tiefe. Justin Ramsey ist zurück im Mannschaftstraining.';
    season.nextFocus={competition:'UEFA Champions League',stage:'Halbfinale',opponent:'Barcelona',status:'anstehend',scoutingDate:date};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='28.04.2042: Gegneranalyse vor dem Champions-League-Halbfinale gegen Barcelona. Barcelona ist Vierter in LaLiga und im Kadervergleich deutlich älter und teurer (Ø 30,40 Jahre, €230.000 Wochengehalt, €96 Mio. Transferwert) als Finn Harps (22,38 Jahre, €46.500, €30,5 Mio.). Scout-Angriffspunkte: acht der letzten 17 Gegentore nach Steilpässen, sieben Vorlagen zu Gegentoren aus der Tiefe. Justin Ramsey kehrt nach drei Wochen Verletzungspause ins Mannschaftstraining zurück, ihm fehlt jedoch stark Spielpraxis.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,type:'Gegneranalyse',date,competition:'UEFA Champions League',fixtureDate:'Halbfinale 2041/42',
    home:'Barcelona',away:'Finn Harps',
    headline:'Jugend gegen Erfahrung: Barcelona vor dem Halbfinale im Check',
    subheadline:'Barça ist im Schnitt rund acht Jahre älter, bezahlt etwa fünfmal so hohe Gehälter und bringt Weltklasse-Erfahrung mit. Doch der Scout zeigt konkrete Risse gegen Steilpässe und Läufe aus der Tiefe. Gleichzeitig kehrt Justin Ramsey rechtzeitig ins Harps-Training zurück.',
    label:'CHAMPIONS LEAGUE · HALBFINALE · GEGNERANALYSE · 28.04.2042',
    heroStat:{label:'Kader-Alter',value:'22,38 vs. 30,40',note:'Finn Harps deutlich jünger · Barcelona deutlich erfahrener'},
    backlink:{href:'klub.html?id=barcelona',label:'← ZUM BARCELONA-DOSSIER'},
    intro:'Nach dem 4:0-Gesamtsieg über Manchester City wartet im Halbfinale der nächste europäische Gigant. Barcelona steht aktuell auf Rang vier in LaLiga und bringt einen Kader mit enormer Erfahrung und Qualität mit. Der Vergleich ist fast ein Generationenduell: Finn Harps liegt bei 22,38 Jahren im Schnitt, Barça bei 30,40. Auch finanziell liegen Welten dazwischen. Trotzdem liefert die Scoutanalyse zwei sehr konkrete Angriffspunkte: Steilpässe hinter die letzte Linie und Läufe aus tieferen Räumen.',
    sections:[
      {title:'Fernandes ist der Vollstrecker',text:'Mit 24 Toren und 7 Vorlagen aus 43(1) Einsätzen ist Fernandes der auffälligste Offensivspieler Barcelonas. Yefremov folgt mit 16 Toren und 7 Vorlagen; Kobayashi kommt trotz vieler Joker-Einsätze bereits auf 15 Treffer. Barça besitzt damit mehrere Wege zum Tor.'},
      {title:'Ilić und Chirico verbinden das Spiel',text:'Aleksandar Ilić liefert aus der Tiefe 10 Vorlagen bei Ø 7,18, Carmelo Chirico kommt auf 4 Tore und 9 Vorlagen bei Ø 7,20. Wer Barça kontrollieren will, muss also nicht nur die vorderste Linie verteidigen.'},
      {title:'Die Zahlen zeigen einen klaren Angriffspunkt',text:'Acht von 17 Gegentoren der letzten 19 Spiele entstanden nach Steilpässen. Sieben Vorlagen zu Gegentoren kamen aus tieferen Räumen. Genau dort können die vertikalen Läufe der Harps und das Tempo der jüngeren Mannschaft ansetzen.'},
      {title:'Ramsey ist zurück, aber noch ohne Rhythmus',text:'Justin Ramsey hat seine Reha nach der Knöchelverdrehung abgeschlossen und ist nach drei Wochen wieder im Mannschaftstraining. Die medizinische Abteilung hält ihn grundsätzlich für einsetzbar, gleichzeitig fehlt ihm deutlich Spielpraxis. Damit wird seine Rolle im Halbfinale zur Abwägung zwischen Qualität und Rhythmus.'},
      {title:'Das Generationenduell',text:'Der Kadervergleich ist drastisch: Ø 22,38 Jahre bei Finn Harps gegen 30,40 bei Barcelona. Barça kommt auf Ø €230.000 Wochengehalt und €96 Mio. Transferwert, die Harps auf €46.500 und €30,5 Mio. Erfahrung und Marktwert sprechen für Barcelona, Dynamik und Frische klar für Finn Harps.'}
    ],
    verdictHeading:'Kein Name mehr, vor dem die Harps zurückweichen müssen',
    verdict:'Barcelona ist auf dem Papier der erfahrenere und teurere Kader. Aber nach dem 4:0 über Manchester City und fünf Ligasiegen in Folge gibt es keinen Grund, dieses Halbfinale defensiv kleinzureden. Entscheidend wird sein, ob Finn Harps die vertikalen Räume hinter Barcelonas Linie konsequent findet und dabei die Ruhe behält, die Escárcega, Papini und Frame zuletzt in den großen Spielen ausgestrahlt haben.',
    sources:['FM-Scoutbericht FC Barcelona · 28.04.2042','FM-Kadervergleich Finn Harps – Barcelona · 28.04.2042','FM-Kaderexport FC Barcelona · 28.04.2042','FM-Medizinbericht Justin Ramsey · 28.04.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-04-28-barcelona-semifinal-preview',date,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · HALBFINALE',
    title:'Barcelona wartet: Erfahrung gegen die junge Harps-Maschine',
    summary:'Barça ist im Schnitt rund acht Jahre älter und deutlich teurer. Der Scout sieht aber klare Räume hinter der letzten Linie. Dazu kehrt Justin Ramsey rechtzeitig ins Training zurück.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','barcelona','justin-ramsey','champions-league','season-2042']
  });
})();