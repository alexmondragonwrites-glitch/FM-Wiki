(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-09';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const brazilGermany={
    id:'2042-world-cup-quarterfinal-brazil-germany',stage:'Viertelfinale',date,
    home:'Brasilien',away:'Deutschland',score:'2:0',homeScore:2,awayScore:0,winner:'Brasilien',status:'beendet',
    harps:{
      player:'Paulo Henrique',minutes:90,rating:7.5,shotsOnTargetFaced:1,saves:1,savePct:100,cleanSheet:true,
      role:'Mitspielender Torwart',
      note:'Paulo Henrique hält gegen Deutschland die Null und wird im Länderspielbericht als einer der entscheidenden Spieler der Partie hervorgehoben.'
    },
    note:'Brasilien schlägt Deutschland 2:0 und zieht ins Halbfinale ein. Paulo Henrique bestätigt seine steigende Turnierform mit dem zweiten K.-o.-Clean-Sheet in Folge.'
  };

  const spainIreland={
    id:'2042-world-cup-quarterfinal-spain-ireland',stage:'Viertelfinale',date,
    home:'Spanien',away:'Irland',score:'2:2 (3:4 i.E.)',homeScore:2,awayScore:2,winner:'Irland',status:'beendet',
    penalties:{home:3,away:4},extraTime:true,
    venue:'Hampden Park, Glasgow',attendance:51866,
    scorers:{
      home:['Hugo Santana 90+2','Hugo Fornés 93 (Elfmeter)'],
      away:['Harry O’Leary 39 (Elfmeter)','Brendan McHugh 115']
    },
    redCards:['Spanien: José Luis 103'],
    stats:{
      shots:{spain:13,ireland:12},shotsOnTarget:{spain:6,ireland:7},xg:{spain:1.79,ireland:2.15},possession:{spain:50,ireland:50}
    },
    keyMoments:[
      'Harry O’Leary bringt Irland in Minute 39 per Elfmeter in Führung.',
      'Spanien gleicht in Minute 90+2 durch Hugo Santana aus. Torhüter Santi Gómez bereitet den Treffer mit einem Freistoß vor.',
      'Nur eine Minute später verwandelt Hugo Fornés einen Elfmeter zum 2:1 für Spanien.',
      'José Luis sieht in Minute 103 nach einem harten Tackling Rot.',
      'Brendan McHugh köpft in Minute 115 das 2:2. Der Treffer hätte bei einem Ausscheiden sein letztes Länderspiel markieren können.',
      'Im Elfmeterschießen hält Evan Reilly zwei spanische Versuche. Cormac O’Kane verschießt für Irland, doch die Boys in Green gewinnen trotzdem 4:3.'
    ],
    penaltiesDetail:{
      ireland:[
        {player:'Harry O’Leary',scored:true},
        {player:'Ben Barry',scored:true},
        {player:'Brendan McHugh',scored:true},
        {player:'Jim O’Neill',scored:true},
        {player:'Cormac O’Kane',scored:false}
      ],
      spain:[
        {player:'Hugo Fornés',scored:true},
        {player:'J. Alonso',scored:false,savedBy:'Evan Reilly'},
        {player:'Álvaro Pérez',scored:true},
        {player:'Ángel',scored:true},
        {player:'E. Zubizarreta',scored:false,savedBy:'Evan Reilly'}
      ]
    },
    harpsNotes:[
      'Evan Reilly spielt 120 Minuten, hält vier von sechs Schüssen auf sein Tor während des Spiels, erhält die Note 7,6 und pariert anschließend zwei Elfmeter im Shootout.',
      'Ben Barry kommt als Mezzala auf 64 Einsatzminuten, bereitet McHughs Ausgleich vor, erhält die Note 7,1 und verwandelt seinen Elfmeter.',
      'Justin Ramsey startet erneut im Mittelfeld und spielt 56 Minuten.',
      'Cormac O’Kane verschießt Irlands fünften Elfmeter, wird aber durch Reillys zweite Parade gerettet.'
    ],
    note:'Irland übersteht ein völlig wildes Viertelfinale. Nach später spanischer Wende, Roter Karte, McHughs Ausgleich in der Verlängerung und einem dramatischen Elfmeterschießen setzt sich Irland mit 4:3 vom Punkt durch.'
  };

  const results=[brazilGermany,spainIreland];

  wc.status='K.-o.-Phase · Halbfinale';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  results.forEach(result=>upsert(wc.knockoutResults,result));

  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;

  wc.quarterFinals=wc.quarterFinals||[];
  results.forEach(result=>{
    const index=wc.quarterFinals.findIndex(item=>item&&item.home===result.home&&item.away===result.away);
    const update={stage:'Viertelfinale',date,home:result.home,away:result.away,status:'beendet',score:result.score,winner:result.winner};
    if(index>=0)wc.quarterFinals[index]=Object.assign({},wc.quarterFinals[index],update);else wc.quarterFinals.push(update);
  });

  wc.semiFinalists=['Niederlande','Mexiko','Brasilien','Irland'];
  wc.semiFinals=[
    {stage:'Halbfinale',home:'Niederlande',away:'Mexiko',status:'angesetzt'},
    {stage:'Halbfinale',home:'Brasilien',away:'Irland',status:'angesetzt',note:'Rematch des 2:2 aus der Gruppenphase.'}
  ];

  wc.finnHarps=wc.finnHarps||{};
  wc.finnHarps.currentActivePlayersSemiFinals=12;
  wc.finnHarps.currentActiveNationsSemiFinals=['Irland','Mexiko','Brasilien'];
  wc.finnHarps.semiFinalHarpsLinks={
    ireland:['Callum Brennan','Giacomo Papini','Justin Ramsey','Cormac O’Kane','Jim O’Neill','Billy Walker','Ben Barry','Kevin Kelly','Mareks Istrankins','Evan Reilly'],
    mexico:['Emerson Escárcega'],
    brazil:['Paulo Henrique']
  };
  wc.finnHarps.contextSemiFinals='Zwölf aktuelle Finn-Harps-Spieler stehen im WM-Halbfinale. Irland trifft auf Brasilien mit Harps-Torwart Paulo Henrique; im anderen Halbfinale jagt Emerson Escárcega mit Mexiko gegen die Niederlande den Finaleinzug.';

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-09-paulo-henrique-brazil-germany-world-cup',date,player:'Paulo Henrique',type:'nationalteam',
    title:'Paulo Henrique hält Deutschland die Null',
    detail:'Brasilien gewinnt sein WM-Viertelfinale 2:0 gegen Deutschland. Paulo Henrique spielt 90 Minuten, pariert den einzigen Schuss auf sein Tor, erhält die Note 7,5 und bleibt erneut ohne Gegentreffer.'
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-09-evan-reilly-spain-ireland-world-cup',date,player:'Evan Reilly',type:'nationalteam',
    title:'Reilly wird zum Elfmeterhelden gegen Spanien',
    detail:'Der 19-Jährige spielt 120 Minuten, erhält die Note 7,6 und hält im Elfmeterschießen zwei spanische Versuche. Irland gewinnt nach 2:2 mit 4:3 vom Punkt und steht im WM-Halbfinale.'
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-09-ben-barry-spain-ireland-world-cup',date,player:'Ben Barry',type:'nationalteam',
    title:'Barry liefert auch gegen Spanien',
    detail:'Barry kommt als Mezzala auf 64 Einsatzminuten, bereitet Brendan McHughs 2:2 in der Verlängerung vor, erhält die Note 7,1 und verwandelt anschließend seinen Elfmeter im Shootout.'
  });

  const report={
    id:'2042-07-09-ireland-spain-penalty-drama-world-cup-semifinal',type:'WM-Viertelfinale',date,competition:'FIFA World Cup 2042',
    headline:'Reilly, McHugh und pure Nerven: Irland überlebt Spanien und steht im WM-Halbfinale',
    subheadline:'Führung, Ausgleich in der 92., spanischer Elfmeter zur Wende, Rote Karte, McHughs spätes 2:2 und dann zwei Reilly-Paraden: Irland gewinnt ein unfassbares Viertelfinale 4:3 im Elfmeterschießen.',
    label:'FIFA WORLD CUP 2042 · VIERTELFINALE · 9. JULI',
    heroStat:{label:'HALBFINALE',value:'SPANIEN 2:2 IRLAND · 3:4 i.E.',note:'Nächster Gegner: Brasilien'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Was für ein Spiel. Irland führt durch Harry O’Learys Elfmeter, kassiert in der Nachspielzeit den Ausgleich und unmittelbar danach per Strafstoß sogar das 1:2. Spanien scheint das Halbfinale bereits zu greifen, verliert dann José Luis mit Rot. In Minute 115 köpft Brendan McHugh, dessen Länderspielkarriere bei einem Ausscheiden hätte enden können, Irland zurück ins Spiel. Im Elfmeterschießen verschießt Cormac O’Kane, doch Evan Reilly hält zwei spanische Versuche und schickt Irland ins Halbfinale.',
    sections:[
      {title:'Von Kontrolle zu Chaos in zwei Minuten',text:'Irland führt seit Minute 39 durch Harry O’Learys Elfmeter. Dann kippt das Spiel dramatisch: Hugo Santana gleicht in Minute 90+2 aus, vorbereitet ausgerechnet von Spaniens Torhüter Santi Gómez per Freistoß. In Minute 93 verwandelt Hugo Fornés einen Elfmeter und Spanien führt plötzlich 2:1.'},
      {title:'McHugh weigert sich, dass es sein Abschied wird',text:'Nach der Roten Karte für José Luis in Minute 103 bekommt Irland noch einmal Zugriff. Brendan McHugh, bei einem Ausscheiden womöglich vor seinem letzten Länderspiel, köpft in Minute 115 das 2:2. Ben Barry liefert die Vorlage und sammelt damit erneut einen wichtigen Scorerpunkt auf der größten Bühne.'},
      {title:'Reilly hält Irland am Leben',text:'Evan Reilly spielt bereits während der 120 Minuten stark und pariert vier von sechs Schüssen auf sein Tor. Im Elfmeterschießen wird der 19-Jährige endgültig zum Helden: Er hält gegen J. Alonso und E. Zubizarreta. Selbst Cormac O’Kanes Fehlschuss kann Irland deshalb nicht stoppen.'},
      {title:'Barry wächst weiter in die Ramsey-Rolle',text:'Barry wird diesmal als Mezzala eingesetzt und bestätigt genau die Entwicklung, die sich während des Turniers angedeutet hat. Er kommt auf 64 Minuten, liefert die Vorlage zum 2:2 und verwandelt seinen Elfmeter. Tore, Vorlagen, Spitze, Mittelfeld: Seine WM wird zunehmend zu einer Geschichte über Vielseitigkeit.'},
      {title:'Brasilien wartet: das Rematch',text:'Brasilien schlägt Deutschland im anderen Viertelfinale 2:0. Paulo Henrique hält erneut die Null und erhält die Note 7,5. Damit wartet im Halbfinale ausgerechnet Brasilien auf Irland, also jene Mannschaft, gegen die die Boys in Green bereits in der Gruppenphase 2:2 gespielt haben.'},
      {title:'Finn Harps ist im Halbfinale überall',text:'Mit Irland, Mexiko und Brasilien stehen noch drei Nationen mit aktuellen Harps-Spielern im Turnier. Zwölf Harps-Akteure sind unter den letzten vier: zehn für Irland, Emerson Escárcega für Mexiko und Paulo Henrique für Brasilien.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„92. Minute Ausgleich, 93. Minute hinten, 115. Minute wieder da und dann Reilly. Wie soll man bei dieser Mannschaft noch ruhig bleiben?“',
      '„McHugh stand möglicherweise vor seinem letzten Länderspiel und hat einfach beschlossen, es noch nicht enden zu lassen.“',
      '„O’Kane verschießt und der 19-jährige Reilly sagt trotzdem: Wir fahren ins Halbfinale.“',
      '„Und jetzt wieder Brasilien. Nach dem 2:2 in der Gruppe gibt es keine Ausreden mehr: Irland gehört hierher.“'
    ]},
    sources:['FM World Cup 2042 · Spanien 2:2 Irland, 3:4 i.E. · Viertelfinale','FM Spielerstatistik Irland · Spanien gegen Irland','FM-Länderspielbericht Evan Reilly · 120 Minuten · Note 7,6','FM-Länderspielbericht Ben Barry · 64 Minuten · 1 Vorlage · Note 7,1','FM-Länderspielbericht Paulo Henrique · Brasilien 2:0 Deutschland · Note 7,5']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-09-ireland-beats-spain-on-penalties-world-cup',date,type:'world-cup',
    title:'Irland überlebt Spanien im Elfmeterschießen und steht im WM-Halbfinale',
    text:'Nach einem wilden 2:2 über 120 Minuten gewinnt Irland 4:3 im Elfmeterschießen gegen Spanien. Brendan McHugh erzwingt spät den Shootout, Evan Reilly hält zwei Elfmeter. Im Halbfinale wartet Brasilien.',
    href:`presse.html?id=${report.id}`
  });
})();