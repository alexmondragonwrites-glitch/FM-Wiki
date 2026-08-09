(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const reportId='2041-06-29-caen-klub-wm-halbfinale-vorbericht';
  const probableXI=[
    {name:'Kiichi Wakabayashi',zone:'TW',role:'Mitspielender Torwart',nation:'JPN',age:32,height:'189 cm',fitness:89,apps:'2',goals:0,assists:0,rating:7.10,value:'Steht nicht zum Verkauf'},
    {name:'Éric Belinga',zone:'VR',role:'Unbekannt',nation:'BEL',age:32,height:'186 cm',fitness:67,apps:'1 (1)',goals:0,assists:0,rating:6.70,value:'€14 Mio.'},
    {name:'Francisco Rosendo',zone:'VZR',role:'Halbraumverteidiger',nation:'POR',age:26,height:'187 cm',fitness:59,apps:'2',goals:0,assists:0,rating:7.35,value:'€29 Mio.'},
    {name:'Christian Donatiello',zone:'VZL',role:'Unbekannt',nation:'ITA',age:31,height:'187 cm',fitness:59,apps:'2',goals:0,assists:0,rating:7.10,value:'€25–37 Mio.'},
    {name:'Gilles Correia',zone:'VL',role:'Außenverteidiger',nation:'LUX',age:31,height:'188 cm',fitness:51,apps:'2',goals:1,assists:0,rating:7.45,value:'€9,2–10,5 Mio.'},
    {name:'Léo Gilles',zone:'MR',role:'Flügelspieler',nation:'FRA',age:33,height:'178 cm',fitness:69,apps:'2',goals:0,assists:0,rating:6.50,value:'€20–27 Mio.'},
    {name:'Emerson',zone:'MZR',role:'Vorgeschobener Spielmacher',nation:'BRA',age:26,height:'182 cm',fitness:43,apps:'2',goals:1,assists:1,rating:7.80,value:'€270–296 Mio.'},
    {name:'Matteo Spataro',zone:'MZL',role:'Unbekannt',nation:'ITA',age:30,height:'186 cm',fitness:59,apps:'1',goals:0,assists:0,rating:7.20,value:'€67–101 Mio.'},
    {name:'Ayodeji Agbaji',zone:'ML',role:'Flügelspieler',nation:'NGA',age:33,height:'180 cm',fitness:72,apps:'2',goals:1,assists:0,rating:6.90,value:'€74–89 Mio.'},
    {name:"Harry O'Leary",zone:'STZR',role:'Stoßstürmer',nation:'IRL',age:29,height:'192 cm',weight:'89 kg',fitness:69,apps:'2',goals:0,assists:1,rating:6.95,value:'€181–204 Mio.',note:'Irischer Nationalspieler; in der Finn-Harps-Chronik zuvor als 1,92-m-Zielspieler und kraftvolle Plan-B-Option dokumentiert.'},
    {name:'Yannick Jaffre',zone:'STZL',role:'Unbekannt',nation:'FRA',age:22,height:'179 cm',fitness:55,apps:'2',goals:0,assists:2,rating:7.70,value:'€271–296 Mio.'}
  ];

  const bench=[
    {name:'Pasquale Mazza',nation:'ITA',age:22,position:'TW',fitness:100,value:'€7–10,5 Mio.'},
    {name:'Ahmed Mansouri',nation:'MAR',age:31,position:'V (Z), DM, M/OM (Z)',fitness:90,apps:'1 (1)',rating:6.75,value:'€27–33 Mio.'},
    {name:'Chai Miggins',nation:'ENG',age:27,position:'OM (RZ), ST (Z)',fitness:87,apps:'0 (2)',rating:7.20,value:'€96–114 Mio.'},
    {name:'Matteo Marchetti',nation:'ITA',age:21,position:'DM, M (LZ)',fitness:89,apps:'0 (1)',rating:7.10,value:'€15,5–19,5 Mio.'},
    {name:'Goran Ilić',nation:'SRB',age:31,position:'V/M/OM (L)',fitness:78,apps:'0 (2)',rating:6.80,value:'€0'},
    {name:'Adama Koné',nation:'CIV',age:30,position:'M/OM (R)',fitness:81,apps:'0 (2)',goals:2,assists:1,rating:7.90,value:'€60–70 Mio.'},
    {name:'Benjamín Cué',nation:'MEX',age:25,position:'M/OM (R)',fitness:97,value:'€50–61 Mio.'},
    {name:'Dylan Lefevre',nation:'FRA',age:22,position:'M (LZ), OM (Z), ST (Z)',fitness:100,value:'€0,275–0,75 Mio.'},
    {name:'Gürsel Özçimen',nation:'TUR',age:28,position:'V (Z)',role:'Ballspielender Verteidiger',fitness:83,apps:'1',rating:7.20,value:'€199–238 Mio.'},
    {name:'Lucio Alegre',nation:'ARG',age:32,position:'V (RLZ), FV (R)',fitness:100,value:'€0,6–8,2 Mio.'},
    {name:'Lucas Lacoste',nation:'BEL',age:30,position:'M (L), OM (RLZ)',role:'Inverser Außenstürmer',fitness:100,value:'€0,3 Mio.'}
  ];

  const existing=(window.FM_CLUBS||[]).find(x=>x.id==='caen'||x.name==='Caen')||{};
  upsert(window.FM_CLUBS,{
    ...existing,
    id:'caen',name:'Caen',short:'CAE',country:'Frankreich',scope:['Club World Cup'],season:2041,status:'partial',completion:70,
    summary:"Klub-WM-Halbfinalgegner 2041. Caen verbindet enorme individuelle Marktwerte mit einem erfahrenen Kern. Die besondere Geschichte ist Harry O'Leary: Der 29-jährige irische Stoßstürmer war zuvor als Harps-Spieler und kraftvolle 1,92-m-Option dokumentiert und steht nun im direkten Duell um den Finaleinzug.",
    formation:'Aus der positionsweise ausgewählten Elf: Torwart, Viererkette, breites Vierermittelfeld und Doppelspitze',
    squadValue:'Mehrere Spieler über €180 Mio.; Spitzenwerte bis €296 Mio.',
    keyPlayers:["Harry O'Leary",'Emerson','Yannick Jaffre','Gürsel Özçimen','Adama Koné'],
    tags:['Klub-WM 2041','Halbfinale','Harry O’Leary','hohe Marktwerte','erfahrener Kern','körperlich belastet'],
    probableXI,bench,
    scouting:{
      strengths:[
        "Harry O'Leary ist mit 29 Jahren, 1,92 m und einer Wertspanne von €181–204 Mio. die irische Weltklasse-Komponente im Sturm.",
        'Emerson wird mit €270–296 Mio. bewertet und steht nach zwei Klub-WM-Einsätzen bei einem Tor, einer Vorlage und 7,80 Durchschnittsnote.',
        'Yannick Jaffre ist erst 22, wird ebenfalls mit €271–296 Mio. bewertet und hat in zwei Einsätzen zwei Vorlagen bei 7,70 geliefert.',
        'Gürsel Özçimen bietet mit €199–238 Mio. zusätzliche Weltklasse-Tiefe in der Innenverteidigung.',
        'Adama Koné kommt in zwei Einwechslungen auf zwei Tore und eine Vorlage bei 7,90; Caens Bank besitzt echten Impact.'
      ],
      weaknesses:[
        'Die ausgewählte Elf ist körperlich stark belastet: Emerson steht bei 43 Prozent Athletik, Correia bei 51 Prozent, Jaffre bei 55 Prozent.',
        'Rosendo, Donatiello und Spataro stehen jeweils bei 59 Prozent Athletik; mehrere zentrale Positionen könnten in einem temporeichen Spiel nachlassen.',
        'Belinga liegt bei 67 Prozent, O’Leary und Léo Gilles bei 69 Prozent. Finn Harps kann versuchen, die Partie über Intensität und Laufwege zu verlängern.',
        'Der Kern ist erfahren: sechs Spieler der ausgewählten Elf sind mindestens 30 Jahre alt.'
      ],
      plan:[
        "O'Leary bei hohen Bällen nicht isoliert gegen einen einzelnen Innenverteidiger verteidigen; seine 1,92 m und 89 kg machen ihn zur klaren Zielspieler-Gefahr.",
        'Emerson früh unter Druck setzen. Sein Kreativwert ist enorm, sein Athletikwert im Export mit 43 Prozent aber auffällig niedrig.',
        'Jaffres Läufe und Verbindungsspiel neben O’Leary ernst nehmen; seine zwei Vorlagen zeigen, dass die Doppelspitze nicht nur über Abschlüsse funktioniert.',
        'Das Tempo hochhalten. Caens Belastungswerte sprechen dafür, dass eine lange Partie eher Finn Harps helfen könnte.',
        'Koné als Joker einkalkulieren. Zwei Tore und eine Vorlage in nur zwei Einwechslungen machen ihn zu einer gefährlichen zweiten Welle.'
      ]
    },
    clubWorldCup2041:{stage:'Halbfinale',opponent:'Finn Harps',status:'anstehend'},
    pressReport:{id:reportId,href:`presse.html?id=${reportId}`,label:'FIFA CLUB WORLD CUP · HALBFINALE',headline:"O'Leary wartet: Caen steht zwischen Finn Harps und dem Weltfinale"}
  });

  const current=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...current,
    id:'club-world-cup-2041',year:2041,status:'semi-final',titleHolder:'Finn Harps',group:'H',
    knockout:{...(current.knockout||{}),round:'Halbfinale',previousRound:'Viertelfinale · 4:2 n. V. gegen FC Barcelona',opponent:'Caen',nextOpponent:'Caen',semiFinalOpponent:'Caen',opponentProfileId:'caen'},
    headline:"Klub-WM 2041: Nach dem 4:2 n. V. gegen Barcelona trifft Finn Harps im Halbfinale auf Caen und den irischen Weltklasse-Stürmer Harry O'Leary."
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-06-29';
    season.latestHeadline="Klub-WM-Halbfinale: Caen und Harry O'Leary warten auf Finn Harps.";
    season.clubWorldCup={...(season.clubWorldCup||{}),status:'Halbfinale',lastResult:'29.06.2041 · Finn Harps 4:2 n. V. FC Barcelona',nextOpponent:'Caen',nextMatch:'Termin im bereitgestellten Export nicht enthalten',knockoutWins:2,opponentNote:"Caen bringt mit Harry O'Leary einen 29-jährigen irischen Stoßstürmer im Wert von €181–204 Mio. sowie mit Emerson und Yannick Jaffre zwei Spieler im Bereich von €270–296 Mio. mit."};
    season.changes=season.changes||{notes:[]};
    const note="29.06.2041: Klub-WM-Halbfinale gegen Caen; Harry O'Leary trifft als irischer Weltklasse-Stürmer auf seinen früher dokumentierten Klub Finn Harps.";
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const report={
    id:reportId,type:'Vorbericht',date:'2041-06-29',competition:'FIFA Club World Cup',fixtureDate:'Termin im Export nicht enthalten',
    home:'Finn Harps',away:'Caen',score:'–',location:'Neutraler Klub-WM-Spielort · im Export nicht enthalten',
    headline:"O'Leary wartet: Caen steht zwischen Finn Harps und dem Weltfinale",
    subheadline:"Nach Manchester City, Bayern und Barcelona wartet kein klassischer Superklub, aber ein Gegner voller Spitzenwerte. Im Zentrum der Geschichte: der irische Weltklasse-Stürmer Harry O'Leary gegen seinen früher dokumentierten Klub.",
    label:'FIFA CLUB WORLD CUP · HALBFINALE',
    heroStat:{label:'Caens Spitzenwerte',value:'bis €296 Mio.',note:"Emerson und Jaffre · O'Leary €181–204 Mio."},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:"Der Weg ins Klub-WM-Finale führt über Caen. Auf dem Papier wirkt dieses Los nach Manchester City, Bayern München und Barcelona zunächst weniger glamourös. Der Export erzählt jedoch eine andere Geschichte: Caen besitzt mehrere Spieler mit Weltklasse-Marktwerten und mit Harry O'Leary einen 29-jährigen irischen Stoßstürmer, der in der Finn-Harps-Chronik bereits als 1,92 Meter große Zielspieler- und Plan-B-Option dokumentiert war.",
    sections:[
      {title:'Die O’Leary-Geschichte macht dieses Halbfinale persönlich',text:"O'Leary ist 29 Jahre alt, 1,92 Meter groß, wiegt 89 Kilogramm und wird mit €181–204 Mio. bewertet. In zwei Klub-WM-Einsätzen steht er bei einer Vorlage. Seine Rolle als Stoßstürmer macht ihn zum natürlichen Fixpunkt für direkte Bälle und Flanken."},
      {title:'Caen ist kein Märchenverein mit Zufallslauf',text:'Emerson und Yannick Jaffre werden beide mit bis zu €296 Mio. bewertet. Emerson hat in zwei Turnierspielen ein Tor und eine Vorlage bei 7,80 geliefert, Jaffre zwei Vorlagen bei 7,70. Dahinter steht mit Gürsel Özçimen ein Innenverteidiger im Bereich von €199–238 Mio.'},
      {title:'Der auffälligste Hebel ist die körperliche Belastung',text:'Mehrere Spieler der ausgewählten Elf liegen deutlich unter voller Athletik: Emerson bei 43 Prozent, Correia bei 51, Jaffre bei 55 sowie Rosendo, Donatiello und Spataro jeweils bei 59. Nach 120 Minuten gegen Barcelona ist auch Finn Harps belastet, doch Caens Export zeigt ungewöhnlich viele angeschlagene Kernspieler.'},
      {title:'Die Bank kann das Spiel verändern',text:'Adama Koné hat in zwei Einwechslungen zwei Tore und eine Vorlage gesammelt und steht bei 7,90. Chai Miggins, Özçimen und weitere wertvolle Optionen geben Caen genügend Tiefe, um das Spiel auch nach Wechseln auf hohem Niveau fortzusetzen.'},
      {title:'Vom europäischen Spießrutenlauf zum irischen Duell',text:"Finn Harps hat Manchester City in der Gruppe, Bayern im Achtelfinale und Barcelona im Viertelfinale geschlagen. Nun wartet im Halbfinale ausgerechnet ein französischer Klub mit einem irischen Ex-Harps-Stürmer als prominentem Fixpunkt. Ein kurioserer Weg ins Weltfinale wäre schwer zu schreiben."}
    ],
    strengthsTitle:'WARUM CAEN GEFÄHRLICH IST',strengthsHeading:'Weltklassewerte ohne Weltklub-Etikett',
    strengths:["Harry O'Leary · 29 · 1,92 m · €181–204 Mio.",'Emerson · €270–296 Mio. · 1 Tor + 1 Vorlage · 7,80','Yannick Jaffre · €271–296 Mio. · 2 Vorlagen · 7,70','Özçimen · €199–238 Mio. in der Defensive','Koné als Joker · 2 Tore + 1 Vorlage in zwei Einwechslungen'],
    vulnerabilitiesTitle:'WO FINN HARPS ANSETZEN KANN',vulnerabilitiesHeading:'Caens Beine könnten der größte Gegner sein',
    vulnerabilities:['Emerson nur 43 % Athletik','Correia 51 %, Jaffre 55 %','Drei weitere mutmaßliche Starter bei 59 %','Mehrere Stammspieler über 30','Hohe Intensität könnte Caens müden Kern auseinanderziehen'],
    verdictHeading:'Kein leichtes Los, sondern ein anderes Schwergewicht',
    verdict:"Caen trägt nicht den Namen von Bayern oder Barcelona, aber der Kaderexport verbietet jede Außenseiterromantik. Die Franzosen haben enorme individuelle Qualität und eine gefährliche Doppelspitze. Gleichzeitig zeigen die Belastungswerte eine klare Angriffsfläche. Für Finn Harps liegt der Schlüssel darin, O'Leary nicht zum Zielspieler des Abends werden zu lassen und Caens müde Achse über Tempo, Pressing und eine lange Partie zu testen.",
    sourcesHeading:'Gegnerexport',sourcesNote:'Der Vorbericht basiert auf dem bereitgestellten Football-Manager-Kaderexport von Caen. Spieltermin und Austragungsort waren darin nicht enthalten.',
    sources:['FM-Kaderexport Caen · Klub-WM-Halbfinale · 29.06.2041','Finn-Harps-Chronik · frühere Dokumentation Harry O’Leary']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-29-caen-klub-wm-halbfinale',date:'2041-06-29',season:2041,category:'Klub-WM',accent:'green',featured:true,
    eyebrow:'FIFA CLUB WORLD CUP · HALBFINALE',title:"O'Leary wartet im Halbfinale",
    summary:"Finn Harps trifft nach dem 4:2 n. V. gegen Barcelona auf Caen. Der französische Klub bringt enorme Marktwerte und mit Harry O'Leary einen 29-jährigen irischen Weltklasse-Stürmer mit Harps-Vergangenheit mit.",
    href:`presse.html?id=${reportId}`,entities:['finn-harps','caen','harry-oleary','club-world-cup']
  });
})();