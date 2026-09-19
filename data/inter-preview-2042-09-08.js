(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-09-08';
  const scoutSnapshotDate='2042-09-05';
  const reportId='2042-09-08-inter-champions-league-preview';
  const previous=window.FM_CLUBS.find(x=>x.id==='inter'||x.id==='internazionale'||x.name==='Inter'||x.name==='FC Internazionale Milano')||{};

  const probableXI=[
    {name:'Maurizio Laporta',zone:'TW',role:'Mitspielender Torwart',age:32,apps:'2',rating:6.90,value:'Nicht zum Verkauf'},
    {name:'Thomas Lamptey',zone:'VL',role:'Inverser Flügelverteidiger',age:25,apps:'3',rating:6.90,value:'€94–128 Mio.'},
    {name:'Riquelme',zone:'IVL',role:'Kompromissloser Innenverteidiger',age:29,apps:'3',rating:7.27,value:'€121–141 Mio.'},
    {name:'Davide Disabato',zone:'IVR',role:'Ballspielender Verteidiger',age:34,apps:'3',rating:7.27,value:'€8–11,5 Mio.'},
    {name:'Julian Reyes',zone:'VR',role:'Inverser Außenverteidiger',age:31,apps:'2',rating:7.45,value:'Nicht zum Verkauf'},
    {name:'Amauri Pereira Lima',zone:'MZL',role:'Abräumer',age:20,apps:'3',goals:0,assists:1,rating:7.27,value:'€116–142 Mio.'},
    {name:'Genar Alsina',zone:'MZR',role:'Segundo Volante',age:32,apps:'3',goals:1,assists:2,rating:7.53,value:'Nicht zum Verkauf',status:'Im Kaderexport als verletzt markiert'},
    {name:'Yanis Clerc',zone:'OML',role:'Inverser Außenstürmer',age:33,apps:'2',rating:7.45,value:'€17,5–21 Mio.',status:'Im Kaderexport als verletzt markiert'},
    {name:'Luigi Ginelli',zone:'OMR',role:'Inverser Außenstürmer',age:31,apps:'3',goals:1,rating:7.67,value:'Nicht zum Verkauf'},
    {name:'Hugo Fornés',zone:'STL',role:'Hängende Spitze',age:31,apps:'2 (1)',goals:2,assists:2,rating:7.97,value:'Nicht zum Verkauf'},
    {name:'Rade Vukelja',zone:'STR',role:'Stoßstürmer',age:31,apps:'2 (1)',goals:1,rating:7.20,value:'€113–154 Mio.'}
  ];

  const squadExport=[
    {name:'Simone Orlando',pos:'OM (RL), ST (Z)',nation:'ITA',age:20,value:'€0,3–0,9 Mio.',contract:'30.06.2043'},
    {name:'Amauri Pereira Lima',pos:'V (Z), DM, M (Z)',nation:'BRA',age:20,apps:'3',goals:0,assists:1,rating:7.27,value:'€116–142 Mio.',contract:'30.06.2046'},
    {name:'Alessio Dini',pos:'DM, M (Z)',nation:'ITA',age:20,value:'€5,6–7,6 Mio.',contract:'30.06.2044'},
    {name:'Alessandro Venturini',pos:'M (R), OM (RZ), ST (Z)',nation:'ITA',age:21,value:'€10,5–13 Mio.',contract:'30.06.2044'},
    {name:'Stefano Accordino',pos:'V (RL), FV (R)',nation:'ITA',age:21,value:'€1,6–8 Mio.',contract:'30.06.2045'},
    {name:'Marco Volpe',pos:'OM (LZ), ST (Z)',nation:'ITA',age:21,value:'€0,11–1,1 Mio.',contract:'30.06.2043'},
    {name:'Cosimo De Lucia',pos:'V (RL), M (L)',nation:'ITA',age:22,value:'€9,2–14 Mio.',contract:'30.06.2046'},
    {name:'Antonio Ferrari',pos:'V (RZ)',nation:'ITA',age:22,value:'€14–20 Mio.',contract:'30.06.2044'},
    {name:'Francisco da Silva',pos:'M/OM (Z)',nation:'POR',age:23,value:'Nicht zum Verkauf',contract:'30.06.2044'},
    {name:'Bartolomeo Dema',pos:'DM, M (Z)',nation:'ITA',age:23,apps:'0 (2)',goals:0,assists:0,value:'€0,425–4,4 Mio.',contract:'30.06.2044'},
    {name:'Thomas Lamptey',pos:'V/FV (L)',nation:'GHA',age:25,apps:'3',goals:0,assists:0,rating:6.90,value:'€94–128 Mio.',contract:'30.06.2046'},
    {name:'Sosuke Usami',pos:'V (Z), DM, M (Z)',nation:'JPN',age:27,value:'€54 Mio.',contract:'30.06.2043'},
    {name:'Richard Dijkstra',pos:'M/OM (R), ST (Z)',nation:'NED',age:27,apps:'0 (1)',goals:0,assists:0,value:'€85–101 Mio.',contract:'30.06.2046'},
    {name:'Alexander Eilers',pos:'M/OM (Z)',nation:'ITA',age:27,apps:'5',goals:1,assists:1,rating:7.58,value:'€54 Mio.',contract:'30.06.2045'},
    {name:'Riquelme',pos:'V (Z)',nation:'BRA',age:29,apps:'3',goals:0,assists:0,rating:7.27,value:'€121–141 Mio.',contract:'30.06.2045'},
    {name:'Noah Saitta',pos:'TW',nation:'ARG',age:29,value:'€2 Mio.',contract:'30.06.2045'},
    {name:'Takenori Nakanishi',pos:'M/OM (Z)',nation:'JPN',age:29,apps:'2 (1)',goals:1,assists:0,rating:6.95,value:'€39–56 Mio.',contract:'30.06.2044'},
    {name:'Ioritz Calvo',pos:'V (LZ), FV (R)',nation:'ESP',age:30,value:'€15–21 Mio.',contract:'30.06.2045'},
    {name:'Adama Konaté',pos:'FV/M/OM (L)',nation:'CIV',age:30,apps:'1 (1)',goals:2,assists:1,rating:10.00,value:'€9,4 Mio.',contract:'30.06.2043'},
    {name:'Rade Vukelja',pos:'OM (RZ), ST (Z)',nation:'MNE',age:31,apps:'2 (1)',goals:1,assists:0,rating:7.20,value:'€113–154 Mio.',contract:'30.06.2045'},
    {name:'Luigi Ginelli',pos:'OM (RZ), ST (Z)',nation:'ITA',age:31,apps:'3',goals:1,assists:0,rating:7.67,value:'Nicht zum Verkauf',contract:'30.06.2044'},
    {name:'Julian Reyes',pos:'V/FV (RL)',nation:'ENG',age:31,apps:'2',goals:0,assists:0,rating:7.45,value:'Nicht zum Verkauf',contract:'30.06.2044'},
    {name:'Hugo Fornés',pos:'OM (R), ST (Z)',nation:'ESP',age:31,apps:'2 (1)',goals:2,assists:2,rating:7.97,value:'Nicht zum Verkauf',contract:'30.06.2044'},
    {name:'Genar Alsina',pos:'FV (R), DM, M (Z), OM (RZ)',nation:'ESP',age:32,apps:'3',goals:1,assists:2,rating:7.53,value:'Nicht zum Verkauf',contract:'30.06.2044',status:'Verletzt'},
    {name:'Maurizio Laporta',pos:'TW',nation:'ITA',age:32,apps:'2',goals:0,assists:0,rating:6.90,value:'Nicht zum Verkauf',contract:'30.06.2045'},
    {name:'Miguel Valentín',pos:'OM (R), ST (Z)',nation:'ESP',age:33,value:'€6 Mio.',contract:'30.06.2043'},
    {name:'Quincy Bosma',pos:'M/OM (R)',nation:'NED',age:33,apps:'1',goals:0,assists:0,rating:7.10,value:'€19 Mio.',contract:'30.06.2043'},
    {name:'Alican Sarıçam',pos:'V (Z)',nation:'TUR',age:33,apps:'1',goals:0,assists:0,rating:6.20,value:'€3,4–6,2 Mio.',contract:'30.06.2043'},
    {name:'Yanis Clerc',pos:'FV (L), M (RL), OM (L)',nation:'FRA',age:33,apps:'2',goals:0,assists:0,rating:7.45,value:'€17,5–21 Mio.',contract:'30.06.2043',status:'Verletzt'},
    {name:'Paolo Bonato',pos:'V (Z), DM, M (Z)',nation:'ITA',age:34,apps:'0 (2)',goals:0,assists:0,value:'€4,2–7,6 Mio.',contract:'30.06.2043'},
    {name:'Davide Disabato',pos:'V (RZ), FV (R)',nation:'ITA',age:34,apps:'3',goals:0,assists:0,rating:7.27,value:'€8–11,5 Mio.',contract:'30.06.2043'}
  ];

  const clubData={
    ...previous,
    id:'inter',name:'FC Internazionale Milano',short:'INT',country:'Italien',league:'Serie A TIM',season:2042,status:'current',completion:98,
    manager:'Roberto De Zerbi',leaguePosition:9,
    captain:'Hugo Fornés',viceCaptain:'Yanis Clerc',
    summary:'Erster Gegner von Finn Harps in der Champions-League-Ligaphase 2042/43. Inter steht zum Scoutzeitpunkt auf Rang neun der Serie A und kommt aus einem 7:0 gegen Bari. Die beste Elf ist als Viererkette mit zwei zentralen Mittelfeldspielern, zwei inversen Außenstürmern und zwei Spitzen aufgebaut.',
    formation:'Best-XI-Struktur: Viererkette; Pereira Lima und Alsina im Zentrum; Clerc und Ginelli breit/offensiv; Fornés und Vukelja als Doppelspitze.',
    keyPlayers:['Hugo Fornés','Rade Vukelja','Luigi Ginelli','Amauri Pereira Lima','Riquelme','Thomas Lamptey','Genar Alsina','Adama Konaté'],
    tags:['Champions League 2042/43','Ligaphase','Serie A Rang 9','Roberto De Zerbi','Doppelspitze','starke Physis','hohes Tempo','gutes Stellungsspiel','61.–75. Minute als Schwäche','4-3-3 DM breit als Angriffspunkt'],
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true},
    scoutSnapshotDate,
    latestResult:{opponent:'Bari',venue:'H',score:'7:0',knownScorers:['Adama Konaté (7., 41.)','Hugo Fornés (34.)','Luigi Ginelli (36.)','Genar Alsina (39.)']},
    probableXI,
    squadExport,
    availability:[
      {player:'Genar Alsina',status:'Verletzt im Kaderexport',note:'Trotzdem in der Best-XI-Grafik als Segundo Volante geführt.'},
      {player:'Yanis Clerc',status:'Verletzt im Kaderexport',note:'Trotzdem in der Best-XI-Grafik als linker inverser Außenstürmer geführt.'}
    ],
    currentForm:[
      {name:'Hugo Fornés',detail:'2(1) Einsätze, 2 Tore, 2 Vorlagen, Ø 7,97; Kapitän und Schlüsselspieler.'},
      {name:'Luigi Ginelli',detail:'3 Einsätze, 1 Tor, Ø 7,67.'},
      {name:'Alexander Eilers',detail:'5 Einsätze, 1 Tor, 1 Vorlage, Ø 7,58.'},
      {name:'Genar Alsina',detail:'3 Einsätze, 1 Tor, 2 Vorlagen, Ø 7,53; im Export verletzt markiert.'},
      {name:'Adama Konaté',detail:'1(1) Einsätze, 2 Tore, 1 Vorlage, Ø 10,00; Doppelpack beim 7:0 gegen Bari.'},
      {name:'Riquelme',detail:'3 Einsätze, Ø 7,27; Marktwert €121–141 Mio.'}
    ],
    scouting:{
      strengths:[
        'Hohes Teamwork und gute Einsatzfreude.',
        'Gutes Deckungsverhalten und hohes Stellungsspiel.',
        'Einer der physisch stärksten Kader im Wettbewerb.',
        'Hohes Maß an Schnelligkeit und gute Beweglichkeit.',
        'Hohe Konzentration.',
        'Gutes Niveau in der Kopfballtechnik.',
        'Die Torhüter werden bei Eins-gegen-eins, Strafraumkontrolle, Kommunikation, Reflexen, Abschlägen und Abwürfen positiv bewertet.',
        'Thomas Lamptey wird vom Scout ausdrücklich als sehr guter linker Verteidiger hervorgehoben.'
      ],
      weaknesses:[
        'Sprungkraft gehört nicht zu den Stärken des Kaders.',
        'Mut wird als Problembereich bewertet.',
        'Sieben von 17 Gegentoren in den letzten 20 Spielen fielen zwischen Minute 61 und 75.',
        'Gegen ein 4-3-3 DM breit ließ Inter in der ausgewiesenen Vergleichsprobe vier Großchancen pro 90 Minuten zu.',
        'Beim Halten/Fangen werden die Torhüter nicht zu den besten gezählt.',
        'Nur sechs von 17 Vorlagen zu Gegentoren in den letzten 19 Spielen kamen von außerhalb des Strafraums; der Großteil entstand damit aus strafraumnahen Zonen.',
        'Das eigene 4-3-3 DM breit war in der Scoutprobe nicht besonders effektiv und ließ im Schnitt drei Großchancen pro 90 Minuten zu.'
      ],
      plan:[
        'Die eigene 4-3-3-Struktur mutig beibehalten: Genau gegen 4-3-3 DM breit zeigt der Scout einen wiederkehrenden Inter-Angriffspunkt.',
        'Zwischen Minute 60 und 75 gezielt nachschärfen. Dort kassierte Inter sieben der letzten 17 Gegentore.',
        'Nicht auf reine Luftduelle reduzieren. Inter ist kopfballstark und körperlich mächtig, trotz begrenzter Sprungkraft.',
        'Mit flachen Kombinationen und Cutbacks in den Strafraum kommen. Die Gegentorvorlagen entstehen überwiegend aus nahen Zonen.',
        'Fornés zwischen den Linien und Vukelja in der Tiefe nicht gleichzeitig frei bekommen lassen; die Doppelspitze ist der Kern der Best-XI-Struktur.',
        'Lampteys linke Seite respektieren und eher über schnelle Verlagerungen als stures Eins-gegen-eins angreifen.',
        'Bei möglichen Ausfällen von Clerc und Alsina die tatsächliche Startelf abwarten; beide sind in der Best-XI-Grafik enthalten, im Export aber verletzt markiert.'
      ]
    },
    pressReport:{id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Inter im Check: Wucht, Tempo – und ein klares Fenster nach der Pause'}
  };
  upsert(window.FM_CLUBS,clubData);

  const cl=window.FM_CHAMPIONS_LEAGUE['2042-43']||{};
  window.FM_CHAMPIONS_LEAGUE['2042-43']={
    ...cl,
    leaguePhase:{
      ...(cl.leaguePhase||{}),
      opener:{
        opponent:'Inter',date:'2042-09-09',venue:'Heim',status:'anstehend',scoutingDate:date,
        notes:['Inter Rang 9 in der Serie A','7:0 im jüngsten sichtbaren Spiel gegen Bari','7 von 17 Gegentoren zuletzt zwischen Minute 61 und 75','4-3-3 DM breit erzeugte laut Scout vier Großchancen pro 90 gegen Inter']
      }
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x&&(x.year===2042||x.season===2042));
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Champions League: Inter ist analysiert. Die Italiener kommen aus einem 7:0 gegen Bari, zeigen aber erkennbare Schwächen gegen ein 4-3-3 DM breit und zwischen Minute 61 und 75.';
    season.nextFocus={competition:'UEFA Champions League',stage:'Ligaphase · 1. Spieltag',opponent:'Inter',venue:'Heim',date:'2042-09-09',status:'anstehend',scoutingDate:date};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='08.09.2042: Gegneranalyse vor dem Champions-League-Auftakt gegen Inter. Inter steht auf Rang 9 der Serie A und gewann das jüngste sichtbare Spiel 7:0 gegen Bari. Scout-Angriffspunkte: 7 von 17 Gegentoren zuletzt zwischen Minute 61 und 75; gegen ein 4-3-3 DM breit wurden in der ausgewiesenen Probe 4 Großchancen pro 90 Minuten zugelassen. Clerc und Alsina sind im Kaderexport als verletzt markiert.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Gegneranalyse',date,competition:'UEFA Champions League',fixtureDate:'09.09.2042',
    home:'Finn Harps',away:'Inter',
    headline:'Inter im Check: Wucht, Tempo – und ein klares Fenster nach der Pause',
    subheadline:'Der Serie-A-Neunte kommt aus einem 7:0 gegen Bari und besitzt enorme individuelle Qualität. Der Scout zeigt trotzdem konkrete Ansatzpunkte: Inter ist gegen ein 4-3-3 DM breit verwundbar und kassiert auffällig viele Gegentore zwischen Minute 61 und 75.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · GEGNERANALYSE · INTER',
    heroStat:{label:'SCHWÄCHE 61.–75.',value:'7/17',note:'Gegentore der letzten 20 Spiele in diesem Zeitfenster'},
    backlink:{href:'klub.html?id=inter',label:'← ZUM INTER-DOSSIER'},
    intro:'Die Champions-League-Ligaphase beginnt mit einem echten Schwergewicht in Donegal. Inter bringt einen körperlich starken, schnellen und konzentrierten Kader mit. Gleichzeitig ist der Gegner keineswegs unangreifbar: Die Scoutdaten weisen sowohl ein auffälliges Zeitfenster nach der Pause als auch strukturelle Probleme gegen ein 4-3-3 DM breit aus – genau eine Formationsfamilie, in der Finn Harps zuhause ist.',
    sections:[
      {title:'So sieht Inters beste Elf aus',text:'Laporta steht im Tor. Davor bilden Lamptey, Riquelme, Disabato und Reyes die Viererkette. Pereira Lima und Alsina besetzen das Zentrum, Clerc und Ginelli die offensiven Außenräume. Fornés spielt als hängende Spitze neben Vukelja. Es ist eine Struktur mit viel Physis, zwei Spitzen und gefährlichen Bewegungen aus den Halbräumen.'},
      {title:'Fornés ist Kapitän und Schlüsselspieler',text:'Hugo Fornés steht bei 2 Toren und 2 Vorlagen aus 2(1) Einsätzen und einer Durchschnittsnote von 7,97. Vukelja wird mit €113–154 Mio. bewertet, Riquelme mit €121–141 Mio., Pereira Lima mit €116–142 Mio. und Lamptey mit €94–128 Mio. – der Kader besitzt auch wirtschaftlich enorme Spitzenqualität.'},
      {title:'Das 7:0 gegen Bari ist die Warnung',text:'Im jüngsten sichtbaren Spiel schlägt Inter Bari 7:0. Adama Konaté trifft in Minute 7 und 41, Fornés in Minute 34, Ginelli in Minute 36 und Alsina in Minute 39. Inter kann Spiele also schon vor der Pause zerlegen, wenn es früh Zugriff bekommt.'},
      {title:'Das Zeitfenster liegt nach der Pause',text:'Sieben von 17 Gegentoren der letzten 20 Spiele fielen zwischen Minute 61 und 75. Für Finn Harps spricht das für frische Dynamik genau in dieser Phase – etwa mit Frame, Ramsey oder Barry von der Bank, falls die Partie bis dahin offen bleibt.'},
      {title:'Das 4-3-3 passt erstaunlich gut zum Scoutbericht',text:'Gegen ein 4-3-3 DM breit ließ Inter in der ausgewiesenen Probe vier Großchancen pro 90 Minuten zu. Zusätzlich wird das eigene 4-3-3 DM breit als wenig effektiv bewertet. Finn Harps muss seine Grundidee also nicht für den großen Namen opfern.'},
      {title:'Nicht in die falsche Schlacht geraten',text:'Inter besitzt viel Kraft, Tempo, gute Kopfballtechnik, starkes Stellungsspiel und konzentrierte Verteidiger. Ein Spiel aus hohen Bällen und permanenten Körperduellen würde den Gegner eher stärken. Flache Kombinationen, Verlagerungen und Cutbacks passen besser zu den dokumentierten Gegentorwegen.'},
      {title:'Clerc und Alsina sind Fragezeichen',text:'Beide stehen in der Best-XI-Grafik, werden im aktuellen Kaderexport aber als verletzt markiert. Gerade Alsina ist mit einem Tor, zwei Vorlagen und Ø 7,53 wichtig für Inters Zentrum. Ihre tatsächliche Verfügbarkeit kann die Startelf spürbar verändern.'}
    ],
    strengthsTitle:'WAS INTER STARK MACHT',strengthsHeading:'Physik, Tempo und eine erfahrene Offensivachse',
    strengths:['Sehr hohe Kraft','Hohes Tempo und gute Beweglichkeit','Gutes Deckungs- und Stellungsspiel','Hohe Konzentration','Gute Kopfballtechnik','Fornés: 2 Tore + 2 Vorlagen, Ø 7,97','Vukelja bis €154 Mio. Marktwert','Riquelme und Pereira Lima jeweils jenseits der €100-Mio.-Marke','7:0 gegen Bari als jüngstes sichtbares Ergebnis'],
    vulnerabilitiesTitle:'WO DIE HARPS ANSETZEN KÖNNEN',vulnerabilitiesHeading:'Nicht unverwundbar – besonders nach der Pause',
    vulnerabilities:['7 von 17 Gegentoren zwischen Minute 61 und 75','4 Großchancen pro 90 gegen 4-3-3 DM breit in der Scoutprobe','Eigenes 4-3-3 DM breit laut Scout wenig effektiv','Mut als Problembereich','Sprungkraft keine Kaderstärke','Torwart-Halten/Fangen nicht auf Topniveau','Mehrheit der Vorlagen zu Gegentoren aus strafraumnahen Zonen','Clerc und Alsina im Export verletzt markiert'],
    verdictHeading:'Inter respektieren, aber nicht die eigene Identität abgeben',
    verdict:'Der Gegner ist stark genug, um jeden Fehler zu bestrafen, aber das Scouting liefert keinen Grund für einen taktischen Rückzug. Im Gegenteil: Finn Harps’ 4-3-3-artige Struktur trifft auf einen dokumentierten Angriffspunkt. Wenn die Harps das Zentrum sauber schließen, Fornés und Vukelja voneinander trennen und nach der Stunde noch einmal Tempo nachlegen, ist dieser Auftakt absolut spielbar.',
    sources:['FM-Scoutbericht Inter · 05.09.2042','FM-Kadervergleich Finn Harps – Inter · 05.09.2042','FM-Kaderexport Inter · 05.09.2042']
  });

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-09-08-inter-preview',date,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · INTER · GEGNERCHECK',
    title:'Inter kommt nach Donegal: Stark, aber nicht ohne Risse',
    summary:'Inter steht auf Rang neun der Serie A und kommt aus einem 7:0 gegen Bari. Der Scout sieht vor allem zwischen Minute 61 und 75 sowie gegen ein 4-3-3 DM breit klare Angriffspunkte.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','inter','champions-league','hugo-fornes','rade-vukelja','season-2042']
  });
})();