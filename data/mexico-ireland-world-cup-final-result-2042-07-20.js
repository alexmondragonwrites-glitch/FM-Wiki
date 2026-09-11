(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-20';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const final={
    id:'2042-world-cup-final-ireland-mexico',stage:'Finale',date,
    home:'Irland',away:'Mexiko',score:'2:3',homeScore:2,awayScore:3,winner:'Mexiko',status:'beendet',
    venue:'Wembley, London',attendance:90000,halfTime:'1:0',
    scorers:[
      'Brian Bustamante Eigentor 24',
      'Juan Sergio Tavares 62',
      'Ben Barry 83',
      'Mario Ayala 85',
      'Ricardo López 88'
    ],
    stats:{
      ireland:{shots:8,shotsOnTarget:2,xG:0.67,possession:51,corners:4,fouls:11,yellowCards:3,completedPasses:442},
      mexico:{shots:15,shotsOnTarget:8,xG:2.32,possession:49,corners:13,fouls:11,yellowCards:1,completedPasses:423}
    },
    story:'Irland führt nach Bustamantes Eigentor zur Pause 1:0. Tavares gleicht in Minute 62 aus. Ben Barry bringt Irland in Minute 83 erneut in Führung und damit ganz nah an den WM-Titel. Mexiko dreht das Finale jedoch mit Mario Ayala in Minute 85 und Ricardo López in Minute 88 innerhalb von drei Minuten zum 3:2 und wird Weltmeister.',
    harps:{
      mexico:{player:'Emerson Escárcega',minutes:67,rating:6.7,goals:0,assists:0,note:'Escárcega startet im WM-Finale, wird nach 67 Minuten ausgewechselt und wird mit Mexiko Weltmeister.'},
      ireland:[
        {player:'Ben Barry',rating:7.0,goalMinute:83,note:'Barry trifft als zentraler Mittelfeldspieler zum zwischenzeitlichen 2:1 und bringt Irland sieben Minuten vor Schluss an die Schwelle zum WM-Titel.'},
        {player:'Justin Ramsey',rating:7.0,note:'Ramsey kehrt nach seiner Halbfinalsperre in die Mannschaft zurück.'},
        {player:'Evan Reilly',rating:6.9,note:'Der 19-jährige Keeper beendet seine außergewöhnliche WM als Vizeweltmeister.'}
      ]
    }
  };

  wc.status='beendet';
  wc.updated=date;
  wc.champion='Mexiko';
  wc.runnerUp='Irland';
  wc.thirdPlace='Niederlande';
  wc.fourthPlace='Brasilien';
  wc.finalists=['Mexiko','Irland'];
  wc.final=final;
  wc.finalResult=final;
  wc.podium=['Mexiko','Irland','Niederlande'];
  wc.finalTable=[
    {place:1,nation:'Mexiko'},
    {place:2,nation:'Irland'},
    {place:3,nation:'Niederlande'},
    {place:4,nation:'Brasilien'}
  ];

  wc.finnHarps=wc.finnHarps||{};
  wc.finnHarps.worldChampion={
    player:'Emerson Escárcega',nation:'Mexiko',club:'Finn Harps',
    note:'Escárcega wird als aktueller Finn-Harps-Spieler Weltmeister. Er startet im Finale gegen Irland und spielt 67 Minuten.'
  };
  wc.finnHarps.irishRunnerUpCore=['Evan Reilly','Callum Brennan','Jim O’Neill','Justin Ramsey','Cormac O’Kane','Giacomo Papini','Billy Walker','Ben Barry','Mareks Istrankins'];

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-20-escarcega-world-champion-mexico',date,player:'Emerson Escárcega',type:'nationalteam',
    title:'Escárcega ist Weltmeister',
    detail:'Mexiko schlägt Irland im WM-Finale in Wembley 3:2. Escárcega startet, spielt 67 Minuten und kehrt als Weltmeister zu Finn Harps zurück.'
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-20-ben-barry-world-cup-final-goal',date,player:'Ben Barry',type:'nationalteam',
    title:'Barry trifft im WM-Finale zum 2:1',
    detail:'Der 18-jährige Ben Barry bringt Irland in Minute 83 mit einem abgefälschten Distanzschuss 2:1 in Führung. Zwei späte mexikanische Tore drehen das Finale jedoch noch zum 2:3.'
  });

  const report={
    id:'2042-07-20-mexico-world-champion-ireland-final-heartbreak',
    type:'WM-Finale',date,competition:'FIFA World Cup 2042',
    headline:'Mexiko ist Weltmeister: Irlands Traum zerbricht in fünf wilden Schlussminuten',
    subheadline:'Barry schießt Irland in Minute 83 zum 2:1 und Wembley glaubt an das Wunder. Ayala gleicht zwei Minuten später aus, Ricardo López vollendet in Minute 88 Mexikos 3:2-Comeback.',
    label:'FIFA WORLD CUP 2042 · FINALE · 20. JULI',
    heroStat:{label:'WELTMEISTER',value:'MEXIKO',note:'Irland 2:3 Mexiko · Wembley · 90.000 Zuschauer'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Was für ein Finale. Irland führte zur Pause 1:0, musste den Ausgleich hinnehmen und ging durch den 18-jährigen Ben Barry in Minute 83 erneut in Führung. Für wenige Augenblicke lag der größte Titel des Weltfußballs greifbar nahe. Dann schlug Mexiko zweimal zu: Mario Ayala in Minute 85, Ricardo López in Minute 88. Aus 2:1 wurde 2:3. Mexiko ist Weltmeister, Irland Vizeweltmeister.',
    sections:[
      {title:'Bustamantes Eigentor öffnet die Tür',text:'In Minute 24 lenkt Mexikos Brian Bustamante den Ball ins eigene Tor. Irland nimmt die 1:0-Führung mit in die Pause und ist im größten Spiel seiner Geschichte plötzlich nicht nur Finalist, sondern 45 Minuten vom Weltmeistertitel entfernt.'},
      {title:'Tavares bringt Mexiko zurück',text:'Juan Sergio Tavares gleicht in Minute 62 mit einem abgefälschten Abschluss aus kurzer Distanz aus. Mexiko übernimmt über das Spiel hinweg mehr Abschlussgefahr und kommt am Ende auf 15:8 Schüsse, 8:2 Schüsse aufs Tor und 2,32:0,67 xG.'},
      {title:'83. Minute: Barry berührt den Pokal',text:'Ben Barry, erst 18 Jahre alt, trifft als zentraler Mittelfeldspieler mit einem abgefälschten Distanzschuss zum 2:1. Nach seinen Toren und Vorlagen im Turnier setzt er ausgerechnet im WM-Finale den vorläufigen Höhepunkt seiner außergewöhnlichen WM. In diesem Moment fehlen Irland nur noch wenige Minuten zum Titel.'},
      {title:'85 und 88: Mexiko dreht alles',text:'Nur zwei Minuten nach Barrys Führung trifft Mario Ayala aus kurzer Distanz zum 2:2. Irland hat kaum Zeit, sich neu zu sortieren, da folgt der nächste Schlag. Ricardo López erzielt in Minute 88 das 3:2 und entscheidet damit das WM-Finale.'},
      {title:'Escárcega kommt als Weltmeister nach Donegal zurück',text:'Emerson Escárcega startet für Mexiko und spielt 67 Minuten. Er bleibt im Finale ohne Torbeteiligung, aber das spielt nach Abpfiff keine Rolle mehr: Der Finn-Harps-Stürmer ist Weltmeister. Wochen nach dem verlorenen Champions-League-Finale bekommt seine Saison damit einen kaum glaubhaften zweiten Höhepunkt.'},
      {title:'Irland verliert, aber seine WM bleibt historisch',text:'Die Niederlage tut gerade wegen der 2:1-Führung in Minute 83 maximal weh. Trotzdem endet eine historische irische WM mit Platz zwei. Brasilien wurde in der Gruppe ein 2:2 abgenommen, danach fielen Italien, Österreich, Spanien und die Niederlande. Erst Mexiko stoppt Ryan Flannigans Mannschaft im Finale.'},
      {title:'Finn Harps prägt selbst das Endspiel',text:'Auf mexikanischer Seite wird Escárcega Weltmeister. Auf irischer Seite stehen weiterhin neun aktuelle Harps-Spieler im WM-Kader, während der kurz zuvor zu Liverpool gewechselte Kevin Kelly ebenfalls im Finale beginnt. Barry erzielt das 2:1. Ramsey kehrt nach Sperre zurück. Reilly beendet mit 19 Jahren eine bemerkenswerte WM als Vizeweltmeister. Die Weltmeisterschaft endet so, wie sie über Wochen verlaufen ist: mit Finn-Harps-Spuren überall.'},
      {title:'Das Endklassement',text:'1. Mexiko. 2. Irland. 3. Niederlande. 4. Brasilien. Zwei ungewöhnliche Finalisten liefern ein Finale, das bis zur 88. Minute völlig offen bleibt. Mexiko ist am Ende der verdiente Weltmeister eines Turniers, das die Hierarchie des Weltfußballs kräftig durcheinandergebracht hat.'}
    ],
    verdictHeading:'Herzschmerz für Irland, Ewigkeit für Mexiko',
    verdict:'Irland war in Minute 83 sieben Minuten vom Weltmeistertitel entfernt. Mexiko antwortete mit der Kälte eines Champions. Der Titel geht verdient an eine Mannschaft, die England, Japan, Brasilien und schließlich Irland überstanden hat. Für Ryan und Irland bleibt die bitterste mögliche Niederlage, aber zugleich die größte WM der irischen Geschichte.',
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„83. Minute. 2:1. Ich habe wirklich geglaubt, wir werden Weltmeister.“',
      '„Ayala 85, López 88. Fünf Minuten, die wir in Irland nie vergessen werden.“',
      '„Herzlichen Glückwunsch Mexiko. Wer England, Japan, Brasilien und dieses Irland übersteht, hat den Pokal verdient.“',
      '„Esca kommt als Weltmeister zurück nach Donegal. Natürlich endet diese verrückte WM genau so.“',
      '„Barry ist 18 und trifft im WM-Finale. Das tut heute weh, aber diese Geschichte ist noch lange nicht vorbei.“'
    ]},
    sources:['FM World Cup 2042 · Finale · Irland 2:3 Mexiko · 20.07.2042','FM Spielstatistiken und Spielerstatistiken · Finale','FM Irische Fußballzeitung · Mexiko gewinnt die World Cup']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-20-mexico-world-champion-ireland-runner-up',date,type:'world-cup',
    title:'Mexiko ist Weltmeister · Irland verliert dramatisches Finale 2:3',
    text:'Irland führt nach einem Eigentor 1:0 und durch Ben Barry in Minute 83 erneut 2:1. Mario Ayala (85.) und Ricardo López (88.) drehen das Finale für Mexiko. Emerson Escárcega wird als Finn-Harps-Spieler Weltmeister.',
    href:'presse.html?id=2042-07-20-mexico-world-champion-ireland-final-heartbreak'
  });
})();