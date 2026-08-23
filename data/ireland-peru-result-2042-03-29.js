(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_IRELAND=window.FM_IRELAND||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2042-03-29-ireland-peru-friendly',
    date:'2042-03-29',season:2042,competition:'Testländerspiel',
    home:'Irland',away:'Peru',homeScore:3,awayScore:2,score:'3:2',halfTime:'1:0',
    venue:'Aviva Stadium',location:'Dublin, Irland',attendance:28619,weather:'Nieselregen · 10°C',referee:'Unbekannt',
    events:[
      {minute:10,team:'Irland',type:'yellow',player:'Stephen Molloy',text:'Gelbe Karte'},
      {minute:11,team:'Irland',type:'goal',player:'Justin Ramsey',text:'1:0 · Kopfball'},
      {minute:13,team:'Peru',type:'yellow',player:'Sebastián Cantero',text:'Gelbe Karte'},
      {minute:48,team:'Peru',type:'goal',player:'Jefferson Vásquez',text:'1:1'},
      {minute:55,team:'Peru',type:'yellow',player:'Christian Garcia',text:'Gelbe Karte'},
      {minute:61,team:'Irland',type:'goal',player:"Harry O'Leary",text:'2:1 · Volley'},
      {minute:66,team:'Irland',type:'yellow',player:'Mareks Istrankins',text:'Gelbe Karte'},
      {minute:71,team:'Peru',type:'goal',player:'Christian Garcia',text:'2:2'},
      {minute:79,team:'Irland',type:'yellow',player:'Brendan McHugh',text:'Gelbe Karte'},
      {minute:81,team:'Irland',type:'goal',player:'Ben Barry',text:'3:2 · Siegtreffer'}
    ],
    scorers:[
      {team:'Irland',player:'Justin Ramsey',minute:11},
      {team:'Peru',player:'Jefferson Vásquez',minute:48},
      {team:'Irland',player:"Harry O'Leary",minute:61},
      {team:'Peru',player:'Christian Garcia',minute:71},
      {team:'Irland',player:'Ben Barry',minute:81}
    ],
    stats:{
      shots:[22,6],shotsOnTarget:[12,3],xg:[2.56,1.09],shotsOffTarget:[8,2],bigChances:[3,1],possession:[74,26],
      corners:[9,1],fouls:[10,14],yellowCards:[3,2],redCards:[0,0],completedPasses:['639/718','229/299'],
      passCompletion:[89,77],duelsWon:[77,67],headersWon:[51,42],averageRating:[6.95,6.76],intensiveSprints:[125,128]
    },
    ratings:{
      'Evan Reilly':6.5,'Callum Brennan':6.9,'Stephen Molloy':6.6,'Mareks Istrankins':7.0,'Kevin Kelly':7.0,
      "Jim O'Neill":7.0,'Justin Ramsey':7.2,"Cormac O'Kane":6.9,'Billy Walker':6.6,'Ron-Robert Kersken':7.3,'Ben Barry':7.8,
      'Callum Duggan':6.7,'Kevin Murphy':6.9,"Harry O'Leary":7.8,'Giacomo Papini':7.1,'Brendan McHugh':6.5,'Simon Neville':6.8
    },
    playerOfMatch:{player:"Harry O'Leary",team:'Irland',rating:7.8,goals:1,note:'Bringt Irland in der 61. Minute mit einem Volley erneut in Führung.'},
    irelandStandouts:[
      {player:'Ben Barry',rating:7.8,goals:1,note:'Entscheidet das Spiel in der 81. Minute mit dem Treffer zum 3:2.'},
      {player:'Justin Ramsey',rating:7.2,goals:1,note:'Köpft Irland bereits in der 11. Minute in Führung.'},
      {player:'Ron-Robert Kersken',rating:7.3,assists:1,note:'Gehört mit 7,3 zu den bestbewerteten Iren.'}
    ],
    analysis:{
      control:'Irland kontrolliert das Testspiel über weite Strecken mit 74 Prozent Ballbesitz, 22:6 Schüssen und 12:3 Abschlüssen aufs Tor. Auch die xG-Werte von 2,56 zu 1,09 sprechen klar für die Gastgeber.',
      resilience:'Peru gleicht zweimal aus, doch Irland findet jeweils eine Antwort. Nach dem 1:1 durch Vásquez trifft O’Leary zum 2:1, nach Garcias 2:2 entscheidet Barry die Partie in der Schlussphase.',
      barry:'Ben Barry agiert laut Spielbericht als zentraler Mittelfeldspieler und erzielt in der 81. Minute mit einem präzisen Abschluss ins untere Eck den Siegtreffer.',
      ramsey:'Justin Ramsey eröffnet den Abend in der 11. Minute mit einem Kopfball aus kurzer Distanz und liefert damit früh das 1:0.',
      attacking:'22 Abschlüsse und zwölf Schüsse aufs Tor zeigen, dass das irische Gegenpressing gegen Perus dynamisches Konterspiel genügend Chancen produziert. Die Partie bleibt dennoch bis in die Schlussphase offen.'
    },
    notes:[
      'Irland gewinnt das Testländerspiel gegen Peru mit 3:2.',
      '74 Prozent Ballbesitz, 22:6 Schüsse und 2,56:1,09 xG für Irland.',
      'Justin Ramsey erzielt in der 11. Minute das 1:0.',
      "Harry O'Leary trifft in der 61. Minute zum 2:1 und erhält mit 7,8 die Auszeichnung für die beste Leistung.",
      'Ben Barry erzielt in der 81. Minute als zentraler Mittelfeldspieler den Siegtreffer zum 3:2.',
      'Peru gleicht durch Jefferson Vásquez und Christian Garcia zweimal aus.'
    ],
    sources:['FM-Spielübersicht Irland – Peru · 29.03.2042','Irland-Spielerstatistiken · 29.03.2042','Irisches Fußballblatt Spielbericht · Irland 3:2 Peru']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_IRELAND_MATCHES,match);

  Object.assign(window.FM_IRELAND,{
    title:'Irland 2042',season:2042,updated:'29.03.2042',competition:'Nationalmannschaft',
    lastMatch:match,
    latestMatch:{date:'2042-03-29',opponent:'Peru',venue:'Aviva Stadium · Dublin',result:'3:2',competition:'Testländerspiel'},
    latestHeadline:'Zurück auf der Siegerstraße: Irland schlägt Peru im Aviva Stadium mit 3:2. Ben Barry entscheidet die Partie in der 81. Minute.'
  });

  [
    {id:'2042-03-29-justin-ramsey-peru-goal',date:'2042-03-29',player:'Justin Ramsey',type:'nationalteam',title:'Ramsey trifft gegen Peru',detail:'Köpft Irland in der 11. Minute zur 1:0-Führung.'},
    {id:'2042-03-29-ben-barry-peru-winner',date:'2042-03-29',player:'Ben Barry',type:'nationalteam',title:'Barry entscheidet Irland gegen Peru',detail:'Trifft in der 81. Minute aus dem zentralen Mittelfeld heraus zum 3:2-Sieg.'},
    {id:'2042-03-29-giacomo-papini-peru',date:'2042-03-29',player:'Giacomo Papini',type:'nationalteam',title:'Papini beim 3:2 gegen Peru eingesetzt',detail:'Kommt zur zweiten Halbzeit und erhält die Note 7,1.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2042-03-29-irland-peru-3-2-spielbericht',type:'Spielbericht',date:'2042-03-29',competition:'Testländerspiel',
    fixtureDate:'Samstag, 29.03.2042',home:'Irland',away:'Peru',score:'3:2',location:'Aviva Stadium · Dublin · 28.619 Zuschauer',
    headline:'Mit der Nati klappt es: Barry entscheidet Irlands 3:2 gegen Peru',
    subheadline:'Nach zwei Niederlagen mit Finn Harps gibt es für Ryan Flannigan wieder einen Sieg. Irland dominiert Peru mit 74 Prozent Ballbesitz und 22:6 Schüssen, muss aber zweimal einen Ausgleich schlucken, ehe Ben Barry in der 81. Minute den Deckel draufmacht.',
    label:'TESTLÄNDERSPIEL · IRLAND 3:2 PERU · 29. MÄRZ 2042',
    heroStat:{label:'Siegtreffer',value:'Ben Barry · 81.',note:'Irland gewinnt 3:2 im Aviva Stadium'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Im Vereinsalltag hatte die Woche zwei Niederlagen gebracht, mit der Nationalmannschaft reicht es dagegen wieder für einen Sieg. Irland kontrolliert Peru über weite Strecken deutlich, macht sich das Leben durch zwei Gegentreffer aber schwerer als nötig und entscheidet den Abend erst neun Minuten vor Schluss.',
    sections:[
      {title:'Ramsey eröffnet früh',text:'Justin Ramsey bringt Irland bereits in der 11. Minute mit einem Kopfball in Führung. Die Gastgeber übernehmen danach klar die Kontrolle über Ball und Räume.'},
      {title:'Peru antwortet zweimal',text:'Jefferson Vásquez gleicht kurz nach der Pause zum 1:1 aus. Harry O’Leary stellt in der 61. Minute per Volley auf 2:1, doch Christian Garcia antwortet zehn Minuten später erneut. Trotz deutlicher irischer Überlegenheit bleibt die Partie damit bis in die Schlussphase offen.'},
      {title:'Barry aus dem Mittelfeld zum Matchwinner',text:'In der 81. Minute fällt die Entscheidung. Ben Barry, an diesem Abend im zentralen Mittelfeld eingesetzt, trifft mit einem präzisen Abschluss ins untere Eck zum 3:2. Mit Note 7,8 gehört er gemeinsam mit O’Leary zu den besten Iren.'},
      {title:'Die Zahlen sind klarer als das Ergebnis',text:'Irland kommt auf 74 Prozent Ballbesitz, 22:6 Schüsse, 12:3 Schüsse aufs Tor und 2,56:1,09 xG. 639 von 718 Pässen finden einen Mitspieler. Das 3:2 wirkt enger, als das Spielbild tatsächlich war.'},
      {title:'Harps-Achse prägt auch die Nationalelf',text:'Justin Ramsey trifft, Ben Barry entscheidet das Spiel und Giacomo Papini kommt nach der Pause auf eine 7,1. Damit tragen erneut mehrere Spieler aus dem Finn-Harps-Umfeld sichtbar zum irischen Auftritt bei.'}
    ],
    verdictHeading:'Ein Sieg zur richtigen Zeit',
    verdict:'Das 3:2 ist defensiv nicht makellos, aber offensiv überzeugend. Irland lässt sich von zwei peruanischen Ausgleichstreffern nicht aus dem Rhythmus bringen und produziert genug Chancen, um den Sieg verdient einzufahren. Nach den beiden Ligapleiten mit Finn Harps ist es für Flannigan zugleich ein kleiner mentaler Reset vor den nächsten großen Aufgaben.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-03-29-ireland-peru-3-2',date:'2042-03-29',season:2042,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'TESTLÄNDERSPIEL · IRLAND 3:2 PERU',
    title:'Barry macht den Unterschied: Irland schlägt Peru 3:2',
    summary:'Ramsey, O’Leary und Barry treffen im Aviva Stadium. Irland dominiert mit 74 Prozent Ballbesitz und 22:6 Schüssen, Peru gleicht dennoch zweimal aus.',
    href:'presse.html?id=2042-03-29-irland-peru-3-2-spielbericht',
    entities:['ireland','peru','ben-barry','justin-ramsey','giacomo-papini','season-2042']
  });
})();