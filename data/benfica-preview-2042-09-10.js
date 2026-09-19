(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-09-10';
  const reportId='2042-09-10-benfica-champions-league-preview';
  const previous=window.FM_CLUBS.find(x=>x.id==='benfica'||x.name==='Sport Lisboa e Benfica'||x.name==='Benfica')||{};

  const idealXI=[
    {name:'Leonardo Meeus',zone:'TW',role:'Torwart',age:32,apps:5,rating:6.84,status:'verfügbar'},
    {name:'Rodrigo Guerrero',zone:'VL',role:'Außenverteidiger',age:32,apps:5,assists:1,rating:7.34,value:'€11,5–16,5 Mio.'},
    {name:'Jordens Kuypers',zone:'IVL',role:'Innenverteidiger',age:32,apps:3,rating:6.90,value:'€5,6–8 Mio.'},
    {name:'Davide Piovaccari',zone:'IVR',role:'Innenverteidiger',age:32,apps:4,rating:7.03,value:'€33–40 Mio.'},
    {name:'Manuel Aichinger',zone:'VR',role:'Außenverteidiger',age:32,apps:5,rating:6.88,status:'verfügbar'},
    {name:'Giovanni Hardley',zone:'ML',role:'Flügelspieler',age:33,apps:5,assists:2,rating:7.54,value:'€12,5–17,5 Mio.'},
    {name:'Josephus Roelandt',zone:'MZL',role:'Zentraler Mittelfeldspieler',age:33,apps:'2 (3)',rating:6.88,value:'€8,4–11,5 Mio.'},
    {name:'Florian Pierson',zone:'MZR',role:'Zentraler Mittelfeldspieler',age:22,apps:'0 (4)',rating:6.67,value:'€20–29 Mio.'},
    {name:'Franciscus Groffy',zone:'MR',role:'Flügelspieler',age:31,apps:6,goals:1,rating:7.77,status:'nicht zum Verkauf'},
    {name:'Ivan Kondratiuk',zone:'STL',role:'Stoßstürmer',age:32,apps:2,goals:3,rating:8.10,status:'verletzt / Schlüsselspieler'},
    {name:'Sebastián Asensi',zone:'STR',role:'Hängende Spitze',age:29,apps:1,rating:6.70,value:'€27–39 Mio.'}
  ];

  const squadCore=[
    {name:'Leonardo Meeus',pos:'TW',nation:'BEL',age:32,apps:5,rating:6.84,contract:'30.06.2044',value:'Nicht zum Verkauf'},
    {name:'Pedro Silva',pos:'TW',nation:'POR',age:27,apps:'2 (1)',rating:6.57,contract:'30.06.2044',value:'€7,2–10,5 Mio.'},
    {name:'Manuel Aichinger',pos:'V (RZ), FV/M (R)',nation:'GER',age:32,apps:5,rating:6.88,contract:'30.06.2044',value:'Nicht zum Verkauf'},
    {name:'Davide Piovaccari',pos:'V (RZ), DM',nation:'ITA',age:32,apps:4,rating:7.03,contract:'30.06.2043',value:'€33–40 Mio.'},
    {name:'Enric Jou',pos:'V (LZ)',nation:'ESP',age:21,apps:6,rating:6.58,contract:'30.06.2047',value:'€27–38 Mio.'},
    {name:'Rodrigo Guerrero',pos:'V/FV (L)',nation:'ARG',age:32,apps:5,assists:1,rating:7.34,contract:'30.06.2043',value:'€11,5–16,5 Mio.'},
    {name:'Jordens Kuypers',pos:'V (Z)',nation:'NED',age:32,apps:3,rating:6.90,contract:'30.06.2043',value:'€5,6–8 Mio.'},
    {name:'Nordine Sahnoun',pos:'DM, M (Z)',nation:'ALG',age:27,apps:5,goals:1,assists:1,rating:7.12,contract:'30.06.2046',value:'€26–38 Mio.'},
    {name:'Alcimar',pos:'DM, M/OM (Z)',nation:'BRA',age:24,apps:7,assists:1,rating:6.58,contract:'30.06.2043',value:'€71 Mio.'},
    {name:'Noël Heremans',pos:'DM, M (LZ)',nation:'BEL',age:29,apps:'0 (1)',contract:'30.06.2045',value:'€66–96 Mio.'},
    {name:'Giovanni Hardley',pos:'M/OM (L)',nation:'NED',age:33,apps:5,assists:2,rating:7.54,contract:'30.06.2043',value:'€12,5–17,5 Mio.'},
    {name:'Franciscus Groffy',pos:'M/OM (R), ST (Z)',nation:'BEL',age:31,apps:6,goals:1,rating:7.77,contract:'30.06.2044',value:'Nicht zum Verkauf'},
    {name:'Josephus Roelandt',pos:'M/OM (Z)',nation:'BEL',age:33,apps:'2 (3)',rating:6.88,contract:'30.06.2043',value:'€8,4–11,5 Mio.'},
    {name:'Florian Pierson',pos:'M/OM (Z)',nation:'FRA',age:22,apps:'0 (4)',rating:6.67,contract:'30.06.2047',value:'€20–29 Mio.'},
    {name:'Sebastián Asensi',pos:'OM (RZ), ST (Z)',nation:'ESP',age:29,apps:1,rating:6.70,contract:'30.06.2045',value:'€27–39 Mio.'},
    {name:'Kabelo Khumalo',pos:'M (Z), OM (R), ST (Z)',nation:'RSA',age:25,apps:'5 (1)',goals:2,rating:6.74,contract:'30.06.2044',value:'€15,5–18,5 Mio.'},
    {name:'Moukaïlou Yaliké',pos:'ST (Z)',nation:'CIV',age:22,apps:'1 (2)',rating:6.80,contract:'30.06.2046',value:'€19 Mio.'},
    {name:'Leandro Fernández',pos:'OM (LZ), ST (Z)',nation:'URU',age:33,apps:'3 (2)',goals:2,assists:1,rating:6.90,contract:'30.06.2043',value:'€8,8 Mio.'},
    {name:'Jalal Nejmi',pos:'OM (Z), ST (Z)',nation:'MAR',age:23,apps:2,goals:3,rating:7.30,contract:'30.06.2043',value:'Nicht zum Verkauf'},
    {name:'Ivan Kondratiuk',pos:'OM (R), ST (Z)',nation:'UKR',age:32,apps:2,goals:3,rating:8.10,contract:'30.06.2044',value:'Nicht zum Verkauf',status:'verletzt'}
  ];

  const clubData={
    ...previous,
    id:'benfica',name:'Sport Lisboa e Benfica',short:'BEN',country:'Portugal',league:'Liga Portugal Betclic',season:2042,status:'current',completion:98,
    manager:'Liam Grimshaw',leaguePosition:3,
    captain:'Rodrigo Guerrero',viceCaptain:'Ivan Kondratiuk',keyPlayer:'Ivan Kondratiuk',
    form:['S','S','S','N','U'],
    latestResult:{opponent:'Moreirense',venue:'A',score:'1:1',knownScorer:'Nordine Sahnoun (52.)'},
    summary:'Zweiter Gegner von Finn Harps in der Champions-League-Ligaphase 2042/43. Benfica ist Dritter der Liga Portugal Betclic. Der Scout sieht eine erfahrene 4-4-2-Basis mit zwei Stürmern, starken Flügeln und sehr ausgeprägten mentalen Mannschaftswerten. Schlüsselspieler Ivan Kondratiuk ist zum Stichtag jedoch verletzt.',
    formation:'Best-XI-Struktur: klassisches 4-4-2 mit Hardley und Groffy auf den Flügeln, Roelandt/Pierson im Zentrum sowie Kondratiuk und Asensi als Doppelspitze.',
    keyPlayers:['Ivan Kondratiuk','Rodrigo Guerrero','Franciscus Groffy','Giovanni Hardley','Davide Piovaccari','Nordine Sahnoun','Alcimar'],
    tags:['Champions League 2042/43','Ligaphase','Liga Portugal Rang 3','Liam Grimshaw','4-4-2','starke mentale Werte','starke Standards','verwundbar gegen kurze Pässe','verwundbar gegen Zuspiele aus der Tiefe'],
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true},
    idealXI,
    squadCore,
    availability:[
      {player:'Ivan Kondratiuk',status:'Verletzt',note:'Schlüsselspieler, Vizekapitän und idealer Stoßstürmer. Vor der Verletzung: 3 Tore in 2 Einsätzen, Ø 8,10.'}
    ],
    currentForm:[
      {name:'Ivan Kondratiuk',detail:'2 Einsätze, 3 Tore, Ø 8,10; aktuell verletzt.'},
      {name:'Franciscus Groffy',detail:'6 Einsätze, 1 Tor, Ø 7,77.'},
      {name:'Giovanni Hardley',detail:'5 Einsätze, 2 Vorlagen, Ø 7,54.'},
      {name:'Rodrigo Guerrero',detail:'5 Einsätze, 1 Vorlage, Ø 7,34.'},
      {name:'Jalal Nejmi',detail:'2 Einsätze, 3 Tore, Ø 7,30.'},
      {name:'Nordine Sahnoun',detail:'5 Einsätze, 1 Tor, 1 Vorlage, Ø 7,12.'},
      {name:'Alcimar',detail:'7 Einsätze, 1 Vorlage, Ø 6,58; laut Scout zuletzt nur Ø 6,52 in fünf Spielen.'}
    ],
    scouting:{
      strengths:[
        'Hohes Niveau bei Bewegungen ohne Ball.',
        'Starkes Stellungsspiel und hohe Konzentration.',
        'Nervenstärke gehört zu den Mannschaftsstärken.',
        'Die Spieler treffen in der Regel gute Entscheidungen.',
        'Hohe Grundfitness, Antizipation und Zielstrebigkeit.',
        'Aggressivität wird gut und richtig kanalisiert.',
        'Starke Kommunikation und mehrere Führungsspieler.',
        'Die Torhüter überzeugen in der Strafraumbeherrschung.',
        'Ausdauer und Schnelligkeit sind auf hohem Niveau.',
        'Gute Elfmeterschützen, starke Freistoßschützen und mehrere gute Eckenschützen.',
        'Technik und Flair gehören zu den klaren Stärken.'
      ],
      weaknesses:[
        '6 von 18 Vorlagen zu Gegentoren in den letzten 19 Spielen kamen aus der Tiefe des Raumes.',
        '7 der 18 Gegentore in den letzten 19 Spielen resultierten aus kurzen Pässen.',
        'Alcimar ist außer Form: Ø 6,52 in seinen letzten fünf Spielen.',
        'Das verwendete 4-4-2 ließ in der ausgewiesenen Scoutprobe durchschnittlich 3 Großchancen pro 90 Minuten zu.',
        'Gegen ein 4-2-3-1 DM OM breit ließ Benfica in der ausgewiesenen Probe ebenfalls 3 Großchancen pro 90 Minuten zu.'
      ],
      plan:[
        'Nicht von Benficas starken Mentalwerten in ein Geduldsspiel zwingen lassen. Die Harps sollten selbst Tempo und Rhythmus bestimmen.',
        'Tiefe Zuspiele hinter bzw. zwischen die Linien aktiv suchen: Ein Drittel der dokumentierten Vorlagen zu Gegentoren kam aus der Tiefe des Raumes.',
        'Kurze Kombinationen um den Strafraum forcieren. 7 von 18 Gegentoren entstanden nach kurzen Pässen.',
        'Das 4-4-2 im Zentrum überladen: Mit Mašić, O’Kane/Frame und Pol kann Finn Harps zwischen Benficas zwei zentralen Mittelfeldspielern und der Doppelspitze numerisch Vorteile schaffen.',
        'Groffy und Hardley nicht frei ins Tempo kommen lassen. Beide gehören zu Benficas formstärksten Außenspielern.',
        'Kondratiuks Ausfall ausnutzen. Ohne den Schlüsselspieler fehlt der Doppelspitze der formstärkste Abschlussspieler.',
        'Standards vermeiden: Benfica besitzt laut Scout sowohl bei Elfmetern als auch Freistößen und Ecken überdurchschnittliche Qualität.',
        'Nach dem 4:0 gegen Inter nicht zu früh rotieren. Benfica ist trotz Rang drei und jüngstem 1:1 strukturell deutlich gefährlicher, als die aktuelle Formkurve vermuten lässt.'
      ]
    },
    comparison:{
      finnHarpsEdges:[
        'Sturmzentrum: Escárcega wird im Positionsvergleich klar über Asensi/Yaliké geführt.',
        'Offensives Zentrum: Pol Muñoz ist im Vergleich die stärkste Option.',
        'Rechte Offensive: Papini liegt über Benficas Optionen.',
        'Linke und zentrale Defensive: Raúl und Torric Bruce werden als stärkere Bestwerte geführt.'
      ],
      benficaEdges:[
        'Benfica verfügt über eine erfahrene, eingespielte 4-4-2-Achse.',
        'Groffy und Hardley bringen gute Form über die Außen.',
        'Der Scout hebt Benficas mentale, technische und standardbezogene Qualitäten besonders hervor.'
      ]
    },
    pressReport:{id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Benfica im Check: erfahren, mental stark – aber mit Räumen zwischen den Linien'}
  };
  upsert(window.FM_CLUBS,clubData);

  const cl=window.FM_CHAMPIONS_LEAGUE['2042-43']||{};
  window.FM_CHAMPIONS_LEAGUE['2042-43']={
    ...cl,
    leaguePhase:{
      ...(cl.leaguePhase||{}),
      matchday2:{
        opponent:'Benfica',date:'2042-09-16',venue:'Heim',status:'anstehend',scoutingDate:date,
        context:'Finn Harps kommt mit drei Punkten und 4:0 Toren aus dem Auftaktsieg gegen Inter.',
        notes:[
          'Benfica ist Dritter der Liga Portugal Betclic.',
          'Schlüsselspieler Ivan Kondratiuk ist zum Scoutzeitpunkt verletzt.',
          '6 von 18 Gegentorvorlagen kamen zuletzt aus der Tiefe des Raumes.',
          '7 von 18 Gegentoren entstanden nach kurzen Pässen.',
          'Das 4-4-2 ließ in der Scoutprobe 3 Großchancen pro 90 Minuten zu.'
        ]
      }
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x&&(x.year===2042||x.season===2042));
  if(season){
    season.referenceDate=date;
    season.snapshotDate=date;
    season.latestHeadline='Champions League: Nach dem 4:0 gegen Inter ist Benfica analysiert. Der portugiesische Tabellendritte bringt starke Mentalwerte und Standards, zeigt aber Räume gegen Tiefenpässe und kurze Kombinationen.';
    season.nextFocus={competition:'UEFA Champions League',stage:'Ligaphase · 2. Spieltag',opponent:'Benfica',venue:'Heim',date:'2042-09-16',status:'anstehend',scoutingDate:date};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='10.09.2042: Gegneranalyse Benfica vor dem zweiten Champions-League-Spiel. Benfica ist Dritter in Portugal, spielt bevorzugt 4-4-2 und hat mit Kondratiuk seinen Schlüsselspieler verletzt. Scout-Angriffspunkte: 6 von 18 Gegentorvorlagen aus der Tiefe, 7 von 18 Gegentoren nach kurzen Pässen; das 4-4-2 ließ im Vergleich 3 Großchancen pro 90 Minuten zu.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Gegneranalyse',date,competition:'UEFA Champions League',fixtureDate:'16.09.2042',
    home:'Finn Harps',away:'Benfica',
    headline:'Benfica im Check: erfahren, mental stark – aber mit Räumen zwischen den Linien',
    subheadline:'Der portugiesische Tabellendritte kommt mit einer routinierten 4-4-2-Struktur nach Donegal. Schlüsselspieler Ivan Kondratiuk ist verletzt. Die Scoutdaten zeigen vor allem gegen Tiefenpässe und kurze Kombinationen konkrete Angriffspunkte.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · GEGNERANALYSE · BENFICA',
    heroStat:{label:'GENGENTOR-MUSTER',value:'7/18',note:'Gegentore zuletzt nach kurzen Pässen'},
    backlink:{href:'klub.html?id=benfica',label:'← ZUM BENFICA-DOSSIER'},
    intro:'Nach dem 4:0 gegen Inter wartet kein Gegner, der sich einfach über denselben Plan kopieren lässt. Benfica ist erfahrener, mental sehr stabil und in einem klassischen 4-4-2 organisiert. Der Scout liefert trotzdem zwei klare Wege: Zuspiele aus der Tiefe und kurze Kombinationen rund um den Strafraum.',
    sections:[
      {title:'Die ideale Elf ist ein erfahrenes 4-4-2',text:'Meeus steht im Tor. Guerrero, Kuypers, Piovaccari und Aichinger bilden die Viererkette. Hardley und Groffy besetzen die Flügel, Roelandt und Pierson das Zentrum. Vorne sieht die Idealelf Kondratiuk als Stoßstürmer neben Asensi als hängender Spitze.'},
      {title:'Kondratiuk ist der große Ausfall',text:'Benficas Schlüsselspieler und Vizekapitän ist verletzt. Vor seinem Ausfall erzielte der 32-jährige Ukrainer drei Tore in zwei Einsätzen und kam auf Ø 8,10. Ohne ihn verliert die Doppelspitze ihren formstärksten Vollstrecker.'},
      {title:'Groffy und Hardley tragen die Flügel',text:'Groffy steht bei sechs Einsätzen, einem Tor und Ø 7,77. Hardley kommt auf zwei Vorlagen und Ø 7,54. Beide müssen früh gebunden werden, damit Benficas 4-4-2 nicht über die Außen ins Laufen kommt.'},
      {title:'Mental ist Benfica unangenehm komplett',text:'Ohne Ball, Stellungsspiel, Konzentration, Nervenstärke, Entscheidungen, Antizipation, Zielstrebigkeit, Kommunikation und Führungsqualitäten werden vom Scout ausdrücklich positiv bewertet. Das ist ein Gegner, der selten durch reine Hektik auseinanderfällt.'},
      {title:'Die Gegentorwege sind konkreter als bei Inter',text:'Sechs von 18 Vorlagen zu Gegentoren kamen in den letzten 19 Spielen aus der Tiefe des Raumes. Sieben der 18 Gegentore entstanden nach kurzen Pässen. Für Finn Harps spricht das für eine Mischung aus vertikalem Anspiel hinter die Linie und kurzen Kombinationen im letzten Drittel.'},
      {title:'Das 4-4-2 lässt Chancen zu',text:'In der ausgewiesenen Scoutprobe ließ Benficas 4-4-2 durchschnittlich drei Großchancen pro 90 Minuten zu. Auch gegen ein 4-2-3-1 DM OM breit waren es drei. Das Zentrum zwischen den beiden Mittelfeldspielern und der Doppelspitze ist damit ein natürlicher Angriffspunkt.'},
      {title:'Standards nicht verschenken',text:'Benfica wird bei Elfmetern, Freistößen und Ecken als stark bewertet. Gegen einen solchen Gegner sind unnötige Fouls rund um den Strafraum besonders teuer.'}
    ],
    strengthsTitle:'WAS BENFICA STARK MACHT',strengthsHeading:'Erfahrung, Mentalität und Standards',
    strengths:['Starkes Bewegungsspiel ohne Ball','Gutes Stellungsspiel','Hohe Konzentration und Nervenstärke','Gute Entscheidungen','Hohe Grundfitness und Ausdauer','Starke Antizipation und Zielstrebigkeit','Gute Kommunikation und Führungsqualität','Gute Strafraumbeherrschung der Torhüter','Schnelligkeit, Technik und Flair','Starke Elfmeter-, Freistoß- und Eckenschützen'],
    vulnerabilitiesTitle:'WO DIE HARPS ANSETZEN KÖNNEN',vulnerabilitiesHeading:'Tiefe, kurze Pässe und Überzahl im Zentrum',
    vulnerabilities:['6 von 18 Gegentorvorlagen aus der Tiefe des Raumes','7 von 18 Gegentoren nach kurzen Pässen','4-4-2 ließ 3 Großchancen pro 90 Minuten zu','Auch gegen 4-2-3-1 DM OM breit 3 Großchancen pro 90 Minuten zugelassen','Alcimar mit Ø 6,52 in den letzten fünf Spielen außer Form','Kondratiuk als Schlüsselspieler verletzt'],
    verdictHeading:'Weniger wuchtig als Inter, strukturell aber tückischer',
    verdict:'Benfica besitzt nicht dieselbe rohe individuelle Wucht wie Inter, dafür eine sehr klare 4-4-2-Struktur und starke mentale Werte. Für Finn Harps liegt der Schlüssel darin, das Zentrum zu überladen, die Flügel früh zu binden und die dokumentierten Räume mit kurzen Kombinationen sowie Tiefenpässen zu attackieren. Nach dem 4:0 gegen Inter wäre Übermut die größere Gefahr als der Name Benfica.',
    sources:['FM-Scoutbericht Benfica · 10.09.2042','FM-Kadervergleich Finn Harps – Benfica · 10.09.2042','FM-Kaderexport Benfica · 10.09.2042']
  });

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-09-10-benfica-preview',date,season:2042,category:'Champions League',accent:'red',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · BENFICA · GEGNERCHECK',
    title:'Benfica kommt nach Donegal: stark im Kopf, verwundbar im Raum',
    summary:'Der portugiesische Tabellendritte spielt ein erfahrenes 4-4-2. Schlüsselspieler Kondratiuk ist verletzt; Tiefenpässe und kurze Kombinationen sind laut Scout die klarsten Angriffspunkte.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','benfica','ivan-kondratiuk','rodrigo-guerrero','franciscus-groffy','season-2042']
  });
})();