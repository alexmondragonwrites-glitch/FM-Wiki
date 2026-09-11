(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-11';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  wc.status='K.-o.-Phase · Halbfinale';
  wc.updated=date;
  wc.netherlandsScouting={
    date,
    opponent:'Niederlande',
    context:'WM-Halbfinale gegen Irland',
    irelandKeyAbsence:'Justin Ramsey ist gegen die Niederlande gesperrt.',
    comparison:{
      ireland:{averageAge:27.19,averageHeightCm:183,averageWeightKg:77,averageCaps:48,averageYouthCaps:8,averageWeeklyWage:'€62.000',averageTransferValue:'€31 Mio.'},
      netherlands:{averageAge:29.85,averageHeightCm:184,averageWeightKg:78,averageCaps:52,averageYouthCaps:12,averageWeeklyWage:'€275.000',averageTransferValue:'€65,97 Mio.'}
    },
    likelyShape:'4-2-3-1 laut angezeigter bester Elf',
    likelyBestXI:[
      {position:'TW',player:'Damil Jeame',club:'Tottenham'},
      {position:'LV',player:'Jorrel Hato',club:'Arsenal'},
      {position:'IV',player:'Ruben van Riel',club:'Newcastle'},
      {position:'IV',player:'Jordens Kuypers',club:'Benfica'},
      {position:'RV',player:'Manuel Reis',club:'Real Madrid'},
      {position:'ZM/DM',player:'Stephen Winters',club:'West Ham'},
      {position:'ZM/DM',player:'Melvin Jong-A-Pin',club:'Man City'},
      {position:'LA',player:'Steve van Riel',club:'Villarreal'},
      {position:'OMZ',player:'Max ter Avest',club:'Wolves'},
      {position:'RA',player:'Frits Sierksma',club:'Monaco'},
      {position:'ST',player:'Kiet Arana Barrantes',club:'Atlético de Madrid'}
    ],
    strengths:[
      'Sehr starke Torhüter bei Abwürfen und langen Abschlägen.',
      'Gute Strafraumkontrolle und Dominanz der Torhüter bei hohen Bällen.',
      'Hohe Übersicht und Kreativität sowie viel Flair im Team.',
      'Gefährliche weite Einwürfe und starke Standards, besonders Ecken und Freistöße.',
      'Hohe Grundfitness, Nervenstärke, Teamwork und Einsatzfreude.',
      'Damil Jeame wird als exzellente Torwartoption hervorgehoben.',
      'Manuel Reis gilt als hervorragende Option rechts, Marko Radulović als sehr gute Wahl links.'
    ],
    weaknesses:[
      'Defensive Standards am kurzen Pfosten werden im Scoutbericht als Schwachpunkt markiert.',
      'Die Torhüter neigen eher zum Fausten.',
      'Beim Herauslaufen besitzt der Kader laut Bericht nicht die besten Torhüter.',
      'Fünf der letzten 15 Gegentore in 20 Spielen entstanden nach Steilpässen.',
      'Ein großer Teil der Vorlagen zu Gegentoren entsteht aus Bereichen innerhalb des Strafraums; Cutbacks und flache Zuspiele in gefährliche Zonen sind daher ein möglicher Angriffspunkt.'
    ],
    keyPlayers:[
      {player:'Kiet Arana Barrantes',position:'M/OM (Z), ST (Z)',club:'Atlético de Madrid',age:32,apps:'4 (2)',goals:4,assists:2,rating:7.43,value:'nicht zum Verkauf'},
      {player:'Max ter Avest',position:'M/OM (Z)',club:'Wolves',age:30,apps:'5 (1)',goals:3,assists:0,rating:7.18,value:'€211–253 Mio.'},
      {player:'Sean Dakriet',position:'M (L), OM (LZ), ST (Z)',club:'Arsenal',age:23,apps:'1 (4)',goals:0,assists:2,rating:7.22,value:'€113–139 Mio.'},
      {player:'Damil Jeame',position:'TW',club:'Tottenham',age:30,apps:6,goals:0,assists:0,rating:6.77,value:'€139–168 Mio.'},
      {player:'Melvin Jong-A-Pin',position:'DM, M/OM (Z)',club:'Man City',age:30,apps:'3 (1)',goals:1,assists:1,rating:7.10,value:'€103–124 Mio.'},
      {player:'Emmanuel Musah',position:'M/OM (Z), ST (Z)',club:'Barcelona',age:28,apps:'3 (1)',goals:1,assists:0,rating:6.97,value:'€101–149 Mio.'},
      {player:'Frits Sierksma',position:'M/OM (R)',club:'Monaco',age:33,apps:6,goals:1,assists:0,rating:6.87,value:'€96–141 Mio.'},
      {player:'Guus Pinas',position:'M (LZ), OM (Z)',club:'Bayern München',age:28,apps:'-',goals:0,assists:0,rating:null,value:'€93–131 Mio.'}
    ],
    depthNote:'Der 26-Mann-Kader verteilt sich über Europas Elite: Tottenham, Arsenal, Liverpool, Man City, Barcelona, Real Madrid, Atlético, Bayern, Monaco und weitere Topklubs. Die Niederlande besitzen deutlich mehr Marktwert und höhere Durchschnittsgehälter als Irland, sind aber auch im Schnitt knapp drei Jahre älter.',
    tacticalRead:'Irland sollte die Niederlande nicht über reine Physis angreifen. Interessanter wirken Läufe hinter die letzte Linie, Steilpässe, schnelle Kombinationen in den Strafraum sowie konsequente Besetzung der Cutback-Zonen. Gleichzeitig müssen niederländische Standards und die Kreativität zwischen den Linien sehr ernst genommen werden.'
  };

  const report={
    id:'2042-07-11-netherlands-scouting-world-cup-semifinal',type:'WM-Halbfinale · Gegneranalyse',date,competition:'FIFA World Cup 2042',
    headline:'Die Niederlande unter dem Mikroskop: teuer, erfahren und kreativ',
    subheadline:'Irland trifft im WM-Halbfinale auf einen Kader voller Spieler von Europas Topklubs. Die Niederlande sind älter, deutlich wertvoller und bei Standards gefährlich, zeigen aber Angriffspunkte hinter der letzten Linie. Justin Ramsey fehlt Irland gesperrt.',
    label:'FIFA WORLD CUP 2042 · HALBFINALE · GEGNERANALYSE · 11. JULI',
    heroStat:{label:'KADERVERGLEICH',value:'€65,97 MIO. vs. €31 MIO.',note:'durchschnittlicher Transferwert Niederlande vs. Irland'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Vor dem größten Spiel der irischen WM-Geschichte zeigt der Scoutbericht, wie hoch die Hürde Niederlande tatsächlich ist. Der niederländische Kader ist im Schnitt älter, erfahrener und mehr als doppelt so wertvoll. Seine Spieler kommen von Klubs wie Barcelona, Real Madrid, Man City, Arsenal, Tottenham, Atlético und Bayern. Trotzdem ist das Profil nicht unangreifbar: Steilpässe, Läufe hinter die Linie und Zuspiele in den Strafraum haben in den letzten Spielen wiederholt zu Gegentoren geführt.',
    sections:[
      {title:'Ein Kader aus Europas oberstem Regal',text:'Die Niederlande kommen auf ein Durchschnittsalter von 29,85 Jahren gegenüber 27,19 bei Irland. Der durchschnittliche Transferwert liegt bei rund €65,97 Mio. gegenüber €31 Mio.; beim Wochengehalt stehen €275.000 gegen €62.000. Auch bei Länderspielen und Junioren-Länderspielen liegt Oranje leicht vorne. Die Zahlen zeigen: Irland trifft nicht auf einen klassischen Halbfinal-Außenseiter, sondern auf einen extrem teuren und erfahrenen Elitekader.'},
      {title:'Die mögliche Elf: 4-2-3-1 mit Kreativität hinter der Spitze',text:'Die angezeigte beste Elf ordnet sich als 4-2-3-1: Damil Jeame im Tor; Hato, Ruben van Riel, Kuypers und Manuel Reis in der Viererkette; Winters und Jong-A-Pin im Zentrum; Steve van Riel, Max ter Avest und Sierksma hinter Kiet Arana Barrantes. Es ist keine bestätigte Halbfinal-Aufstellung, zeigt aber das bevorzugte Qualitätsgerüst.'},
      {title:'Arana Barrantes und ter Avest sind die offensiven Fixpunkte',text:'Kiet Arana Barrantes steht bei vier Toren und zwei Vorlagen in sechs WM-Einsätzen einschließlich Einwechslungen und einer Durchschnittsnote von 7,43. Max ter Avest kommt auf drei Tore und 7,18. Dahinter bietet der Kader mit Musah, Dakriet, Pinas, Verlaat und Sanusi enorme Variabilität.'},
      {title:'Standards und Torwartspiel sind echte Oranje-Waffen',text:'Das Scouting hebt Abwürfe, lange Abschläge, Strafraumkontrolle, hohe Bälle, Ecken, Freistöße und generell Chancen nach Standards hervor. Dazu kommen Übersicht, Flair, Nervenstärke, Teamwork und Grundfitness. Irland darf insbesondere bei ruhenden Bällen nicht billig foulen oder zweite Bälle herschenken.'},
      {title:'Aber es gibt eine Tür hinter der letzten Linie',text:'Fünf der letzten 15 niederländischen Gegentore in 20 Spielen entstanden nach Steilpässen. Außerdem markiert der Bericht Defensivaktionen am kurzen Pfosten bei Standards sowie das Herauslaufen der Torhüter als Angriffspunkte. Für Irland spricht das für schnelle Tiefenläufe, flache Kombinationen in den Strafraum und Cutbacks statt ausschließlich hoher Hereingaben.'},
      {title:'Ramsey fehlt: Irland muss die Struktur neu bauen',text:'Justin Ramsey ist für das Halbfinale gesperrt. Nach seiner wichtigen Rolle als Mezzala fehlt damit einer der Spieler, die Irlands Zentrum gleichzeitig ordnen und dynamisch nach vorne tragen können. Ben Barrys überzeugender Einsatz als Mezzala gegen Spanien bietet eine Option, aber Irland wird Ramsey nicht eins zu eins ersetzen können.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Das ist kein leichtes Halbfinale. Schau dir nur an, bei welchen Klubs diese Niederländer spielen.“',
      '„Mehr als doppelt so hoher Durchschnittswert und trotzdem habe ich nach Spanien keine Angst mehr vor irgendeinem Namen.“',
      '„Ramsey fehlt, aber genau jetzt muss sich zeigen, ob Irland wirklich mehr als seine stärkste Elf ist.“'
    ]},
    sources:['FM-Kadervergleich Irland gegen Niederlande · 11.07.2042','FM-Niederlande · Stärken und Schwächen · 11.07.2042','FM-Niederlande · 26-Mann-Kaderexport · 11.07.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-11-netherlands-scouting-world-cup-semifinal',date,type:'world-cup',
    title:'Niederlande-Scouting: Elitekader mit verwundbarer Tiefe',
    text:'Oranje ist älter, erfahrener und im Schnitt mehr als doppelt so wertvoll wie Irland. Standards, Kreativität und Torwartspiel sind Stärken, Steilpässe hinter die letzte Linie sowie Aktionen im Strafraum bieten aber Angriffspunkte. Ramsey fehlt gesperrt.',
    href:`presse.html?id=${report.id}`
  });
})();