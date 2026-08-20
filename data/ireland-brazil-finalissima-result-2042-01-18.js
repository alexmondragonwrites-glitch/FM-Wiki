(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_IRELAND=window.FM_IRELAND||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2042-01-18-brazil-ireland-finalissima',
    date:'2042-01-18',season:2042,competition:'Finalissima',
    home:'Brasilien',away:'Irland',homeScore:2,awayScore:1,score:'2:1',halfTime:'1:0',
    venue:'Arena Castelão',location:'Fortaleza, Brasilien',attendance:63903,weather:'Heiter · 27°C',
    events:[
      {minute:10,team:'Brasilien',type:'goal-penalty',player:'Fernandes',text:'1:0 · Elfmeter'},
      {minute:46,team:'Brasilien',type:'yellow',player:'Riquelme',text:'Gelbe Karte'},
      {minute:64,team:'Irland',type:'goal',player:'Callum Brennan',text:'1:1 · Abschluss aus 19 Metern'},
      {minute:77,team:'Irland',type:'yellow',player:'Callum Brennan',text:'Gelbe Karte'},
      {minute:88,team:'Irland',type:'yellow',player:"Harry O'Leary",text:'Gelbe Karte'},
      {minute:'90+6',team:'Brasilien',type:'goal',player:'Fernandes',text:'2:1 · Volley aus kurzer Entfernung'}
    ],
    scorers:[
      {team:'Brasilien',player:'Fernandes',minute:10,penalty:true},
      {team:'Irland',player:'Callum Brennan',minute:64},
      {team:'Brasilien',player:'Fernandes',minute:'90+6'}
    ],
    stats:{
      shots:[17,9],shotsOnTarget:[8,2],xg:[2.74,0.96],possession:[58,42],
      fouls:[5,15],yellowCards:[1,2],redCards:[0,0],completedPasses:[560,413],
      averageRating:[6.98,6.71]
    },
    playerOfMatch:{player:'Fernandes',team:'Brasilien',rating:8.3,goals:2},
    irelandStandout:{player:"Cormac O'Kane",rating:7.7,note:'Bester irischer Spieler laut Matchstatistik.'},
    analysis:{
      headline:'96. Minute. Fernandes. Brasilien 2:1 Irland.',
      summary:'Irland gleicht durch Callum Brennan aus und hält die Finalissima bis tief in die Nachspielzeit offen. Dann entscheidet Fernandes das Endspiel mit seinem zweiten Treffer.',
      strengths:[
        'Nach Rückstand zurück ins Finale gekämpft',
        'Callum Brennan trifft in der 64. Minute aus 19 Metern zum 1:1',
        "Cormac O'Kane mit 7,7 bester irischer Spieler",
        'Brasilien bis zur 96. Minute am Rand einer Verlängerung gehalten'
      ],
      limits:[
        'Brasilien mit 17:9 Schüssen und 8:2 Schüssen aufs Tor überlegen',
        'xG 2,74 zu 0,96 für Brasilien',
        'Nur 42 Prozent Ballbesitz und 413 angekommene Pässe gegenüber 560',
        'Entscheidung durch Fernandes in der 90.+6 Minute'
      ]
    },
    report:{
      title:'Herzbruch in Fortaleza: Irland verliert die Finalissima in der 96. Minute',
      playHeading:'Ein Finale, das erst mit dem letzten Schlag endet',
      controlHeading:'Brasilien hat mehr vom Spiel, Irland hält dagegen',
      ratingsHeading:"O'Kane führt, Brennan trifft",
      historyHeading:'Irland fehlt eine Aktion zum nächsten großen Titel.'
    },
    note:'Brasilien gewinnt die Finalissima 2042 mit 2:1. Irland gleicht in der 64. Minute durch Callum Brennan aus, ehe Fernandes in der 90.+6 Minute den Titel für Brasilien entscheidet.'
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_IRELAND_MATCHES,match);

  Object.assign(window.FM_IRELAND,{
    title:'Irland 2042',season:2042,updated:'18.01.2042',competition:'Finalissima',
    lastMatch:match,
    latestMatch:{date:'2042-01-18',opponent:'Brasilien',venue:'Arena Castelão · Fortaleza',result:'1:2',competition:'Finalissima'},
    finalissima2042:{...(window.FM_IRELAND.finalissima2042||{}),status:'Beendet',result:'Brasilien 2:1 Irland',winner:'Brasilien'},
    nextMatch:null,
    upcomingMatches:(window.FM_IRELAND.upcomingMatches||[]).filter(x=>!(x.date==='18.01.2042'&&x.opponent==='Brasilien')),
    latestHeadline:'Herzbruch in der 96. Minute: Irland unterliegt Brasilien in der Finalissima mit 1:2.'
  });

  [
    {id:'2042-01-18-callum-brennan-brazil',date:'2042-01-18',player:'Callum Brennan',type:'nationalteam',title:'Finalissima-Tor gegen Brasilien',detail:'Trifft in der 64. Minute aus 19 Metern zum 1:1 und bringt Irland zurück ins Endspiel.'},
    {id:'2042-01-18-cormac-okane-brazil',date:'2042-01-18',player:"Cormac O'Kane",type:'nationalteam',title:'Bester Ire im Finalissima-Finale',detail:'Wird mit Note 7,7 als bester irischer Spieler der Finalissima geführt.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2042-01-18-brasilien-irland-finalissima-spielbericht',type:'Spielbericht',date:'2042-01-18',competition:'Finalissima',
    fixtureDate:'Samstag, 18.01.2042',home:'Brasilien',away:'Irland',location:'Arena Castelão · Fortaleza · 63.903 Zuschauer',
    headline:'Herzbruch in der 96. Minute: Brasilien entreißt Irland die Finalissima',
    subheadline:'Callum Brennan gleicht in der 64. Minute aus, Irland hält den Weltranglistenersten bis tief in die Nachspielzeit auf Augenhöhe. Dann trifft Fernandes zum zweiten Mal und entscheidet ein Finale, das kaum grausamer enden könnte.',
    label:'FINALISSIMA · BRASILIEN 2:1 IRLAND · 18. JANUAR 2042',
    heroStat:{label:'Entscheidung',value:'90.+6 Minute',note:'Fernandes erzielt seinen zweiten Treffer · Brasilien gewinnt 2:1'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'63.903 Zuschauer, Brasilien als Weltranglistenerster und Irland nur Sekunden von der Verlängerung entfernt. Die Finalissima 2042 wird zu einem der bittersten, zugleich aber auch aussagekräftigsten Spiele dieser irischen Mannschaft. Sie wird über weite Strecken unter Druck gesetzt, fällt zurück, kommt zurück und verliert erst mit dem letzten großen Angriff.',
    sections:[
      {title:'Fernandes trifft früh vom Punkt',text:'Brasilien startet stärker und geht in der 10. Minute in Führung. Fernandes verwandelt einen Elfmeter kraftvoll ins rechte untere Eck. Mit 1:0 geht es auch in die Pause.'},
      {title:'Brennan macht aus Hoffnung plötzlich ein offenes Finale',text:'In der 64. Minute schlägt Irland zurück. Callum Brennan trifft mit einem exakt platzierten Abschluss aus 19 Metern zum 1:1. Aus einem Spiel, das Brasilien statistisch kontrolliert, wird damit wieder ein echtes Endspiel.'},
      {title:'Die Zahlen sprechen für Brasilien, das Ergebnis lange nicht',text:'Brasilien führt bei den Abschlüssen 17:9 und bei den Schüssen aufs Tor 8:2. Auch die xG-Werte von 2,74 zu 0,96 und 58 Prozent Ballbesitz zeigen die brasilianische Kontrolle. Irland verteidigt jedoch zäh genug, um das Spiel bis tief in die Nachspielzeit offen zu halten.'},
      {title:'Dann kommt die 96. Minute',text:'Als die Verlängerung bereits greifbar wirkt, entscheidet Fernandes das Finale. In der 90.+6 Minute trifft er per Volley aus kurzer Entfernung zum 2:1. Für Brasilien ist es der Titel, für Irland ein maximal bitterer letzter Moment.'},
      {title:"O'Kane hält das irische Zentrum zusammen",text:"Cormac O'Kane wird mit einer 7,7 als bester irischer Spieler geführt. Brennan liefert das Tor. Irland bekommt insgesamt weniger Kontrolle über Ball und Chancen als im eigenen Idealbild, bleibt aber bis zum letzten Angriff konkurrenzfähig."},
      {title:'Niederlage, aber keine Entzauberung',text:'Dieses 1:2 ist kein Spiel, das Irlands Aufstieg relativiert. Gegen die Nummer 1 der Weltrangliste fehlt in einem Finale letztlich eine einzige verteidigte Aktion. Genau deshalb tut es so weh und genau deshalb zeigt es zugleich, auf welchem Niveau diese Mannschaft inzwischen angekommen ist.'}
    ],
    strengths:[
      'Ausgleich gegen Brasilien nach Rückstand',
      'Callum Brennan trifft aus 19 Metern',
      "Cormac O'Kane mit Note 7,7",
      'Finale bis zur 90.+6 Minute offen gehalten',
      'Trotz brasilianischer Dominanz nur ein Tor Unterschied'
    ],
    vulnerabilities:[
      '17:9 Schüsse und 8:2 aufs Tor für Brasilien',
      'xG 2,74 zu 0,96',
      '42 Prozent Ballbesitz',
      '15 Fouls auf irischer Seite',
      'Entscheidender Gegentreffer in der sechsten Minute der Nachspielzeit'
    ],
    verdictHeading:'So nah kann eine Niederlage an einem Triumph liegen',
    verdict:'Brasilien war über 96 Minuten die gefährlichere Mannschaft und gewinnt gemessen am Chancenbild nicht unverdient. Aber Irland zwingt den Weltranglistenersten in ein Finale, das erst mit der letzten Aktion kippt. Das ist kein Trostpreis, sondern eine Standortbestimmung: Diese Mannschaft kann inzwischen selbst gegen Brasilien um einen Titel spielen, ohne dass das wie eine romantische Außenseitergeschichte wirkt.',
    sources:[
      'FM-Spielbericht Finalissima · Brasilien 2:1 Irland · 18.01.2042',
      'FM-Matchstatistik · 17:9 Schüsse · 2,74:0,96 xG · 58:42 Ballbesitz',
      'FM-Spielerstatistik Irland · Cormac O’Kane 7,7 · Callum Brennan Torschütze'
    ]
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-01-18-brazil-ireland-finalissima-result',date:'2042-01-18',season:2042,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'FINALISSIMA · ENDSTAND 2:1',
    title:'96. Minute: Fernandes beendet Irlands Traum vom Finalissima-Titel',
    summary:'Callum Brennan gleicht in der 64. Minute aus, doch Fernandes entscheidet das Finale in der 90.+6 Minute. Brasilien gewinnt 2:1 vor 63.903 Zuschauern in Fortaleza.',
    href:'presse.html?id=2042-01-18-brasilien-irland-finalissima-spielbericht',
    entities:['ireland','brazil','finalissima','callum-brennan','cormac-okane','season-2042']
  });
})();