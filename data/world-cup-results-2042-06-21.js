(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-21';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {group:'D',home:'Jamaika',away:'Thailand',score:'1:1',homeScore:1,awayScore:1,scorers:[
      {team:'Jamaika',player:'D. McKoy',minutes:[6],goals:1},
      {team:'Thailand',player:'C. Sri-aroon',minutes:[45],goals:1,note:'45.+1'}
    ],events:[{minute:75,team:'Thailand',type:'red',player:'C. Wintanomachot',text:'Rote Karte'}]},
    {group:'D',home:'Niederlande',away:'Schweden',score:'3:3',homeScore:3,awayScore:3,scorers:[
      {team:'Niederlande',player:'M. ter Avest',minutes:[59],goals:1},
      {team:'Niederlande',player:'K. Arana Barrantes',minutes:[69],goals:1},
      {team:'Niederlande',player:'Y. Akine',minutes:[86],goals:1},
      {team:'Schweden',player:'J. Kusi-Asare',minutes:[7,20],goals:2},
      {team:'Schweden',player:'R. Rask',minutes:[49],goals:1,note:'49.+1'}
    ]},
    {group:'E',home:'Ecuador',away:'Portugal',score:'0:4',homeScore:0,awayScore:4,scorers:[
      {team:'Portugal',player:'J. Coentrão',minutes:[24,44,51,67],goals:4}
    ]},
    {group:'E',home:'Senegal',away:'V.A.E.',score:'2:1',homeScore:2,awayScore:1,scorers:[
      {team:'Senegal',player:'S. Seck',minutes:[37],goals:1},
      {team:'Senegal',player:'O. Dramé',minutes:[47],goals:1},
      {team:'V.A.E.',player:'H. Salem',minutes:[56],goals:1}
    ]},
    {group:'F',home:'Mexiko',away:'Südkorea',score:'2:0',homeScore:2,awayScore:0,scorers:[
      {team:'Mexiko',player:'Emerson Escárcega',minutes:[19,67],goals:2,note:'1:0 per Elfmeter; 2:0 per Volley aus 19 Metern'}
    ],events:[{minute:32,team:'Mexiko',type:'red',player:'A. Díaz',text:'Rote Karte'}]},
    {group:'F',home:'Österreich',away:'Neuseeland',score:'3:0',homeScore:3,awayScore:0,scorers:[
      {team:'Österreich',player:'J. Lenz',minutes:[36],goals:1},
      {team:'Österreich',player:'L. Lindner',minutes:[51],goals:1},
      {team:'Österreich',player:'N. Straub',minutes:[78],goals:1,note:'Elfmeter'}
    ]}
  ];

  wc.status='Gruppenphase läuft';
  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;
  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    D:[
      {team:'Schweden',played:3,win:2,draw:1,loss:0,gf:11,ga:4,gd:7,points:7},
      {team:'Niederlande',played:3,win:2,draw:1,loss:0,gf:6,ga:4,gd:2,points:7},
      {team:'Thailand',played:3,win:0,draw:1,loss:2,gf:2,ga:5,gd:-3,points:1},
      {team:'Jamaika',played:3,win:0,draw:1,loss:2,gf:2,ga:8,gd:-6,points:1}
    ],
    E:[
      {team:'Portugal',played:3,win:2,draw:1,loss:0,gf:6,ga:0,gd:6,points:7},
      {team:'Ecuador',played:3,win:1,draw:1,loss:1,gf:6,ga:7,gd:-1,points:4},
      {team:'Senegal',played:3,win:1,draw:0,loss:2,gf:3,ga:7,gd:-4,points:3},
      {team:'V.A.E.',played:3,win:0,draw:2,loss:1,gf:3,ga:4,gd:-1,points:2}
    ],
    F:[
      {team:'Mexiko',played:3,win:3,draw:0,loss:0,gf:7,ga:1,gd:6,points:9},
      {team:'Südkorea',played:3,win:2,draw:0,loss:1,gf:4,ga:4,gd:0,points:6},
      {team:'Österreich',played:3,win:1,draw:0,loss:2,gf:5,ga:5,gd:0,points:3},
      {team:'Neuseeland',played:3,win:0,draw:0,loss:3,gf:1,ga:7,gd:-6,points:0}
    ]
  });

  wc.june21Summary={
    date,matches:6,goals:18,results,
    headline:'Escárcega schießt Mexiko mit einem Doppelpack zum perfekten Gruppensieg. Portugal zerlegt Ecuador 4:0, Schweden gewinnt Gruppe D vor den Niederlanden.',
    groupWinners:['Schweden','Portugal','Mexiko'],
    directTopTwo:{D:['Schweden','Niederlande'],E:['Portugal','Ecuador'],F:['Mexiko','Südkorea']},
    thirdPlaced:['Thailand','Senegal','Österreich']
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-21-escarcega-world-cup-brace-korea',date,player:'Emerson Escárcega',type:'nationalteam',
    title:'Escárcega schießt Mexiko mit Doppelpack zum Gruppensieg',
    detail:'74 Minuten gegen Südkorea, zwei Tore (19. Elfmeter, 67. Volley aus 19 Metern), Note 8,4. Mexiko gewinnt 2:0 und beendet Gruppe F mit neun Punkten.'
  });

  const report={
    id:'2042-06-21-world-cup-groups-d-f-final-matchday',type:'WM-Roundup',date,competition:'FIFA World Cup 2042',
    headline:'Escárcega-Doppelpack krönt Mexikos perfekte Gruppe: Portugal und Schweden ebenfalls Gruppensieger',
    subheadline:'Mexiko gewinnt auch das dritte Spiel. Portugal schießt Ecuador 4:0 ab, während Schweden ein wildes 3:3 gegen die Niederlande zum Gruppensieg reicht.',
    label:'FIFA WORLD CUP 2042 · 3. SPIELTAG GRUPPEN D–F',
    heroStat:{label:'EMERSON ESCÁRCEGA',value:'2 TORE · NOTE 8,4',note:'Mexiko 2:0 Südkorea · 9 Punkte · 7:1 Tore'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Emerson Escárcega setzt nach seiner Vorlage gegen Neuseeland noch einen drauf. Der Harps-Stürmer verwandelt gegen Südkorea zunächst einen Elfmeter und hämmert später einen Volley aus 19 Metern ins Tor. Selbst eine rote Karte für Mexiko in Minute 32 ändert nichts am 2:0 und am perfekten Gruppensieg.',
    sections:[
      {title:'Gruppe D: Schweden hält die Niederlande auf Abstand',text:'Schweden und die Niederlande liefern sich ein 3:3. Beide schließen mit sieben Punkten ab, Schweden gewinnt die Gruppe dank der deutlich besseren Tordifferenz von +7. Thailand wird nach dem 1:1 gegen Jamaika Dritter.'},
      {title:'Gruppe E: Coentrão schießt Portugal auf Platz eins',text:'Portugal schlägt Ecuador 4:0, alle vier Tore erzielt J. Coentrão. Portugal beendet die Gruppe mit sieben Punkten und ohne Gegentor. Ecuador bleibt trotz der Niederlage Zweiter, Senegal gewinnt 2:1 gegen die V.A.E. und wird Dritter.'},
      {title:'Gruppe F: Escárcega liefert die große Harps-Schlagzeile',text:'Mexiko schlägt Südkorea 2:0. Escárcega trifft in Minute 19 per Elfmeter und in Minute 67 per Volley. Er wird nach 74 Minuten ausgewechselt und erhält die Note 8,4. Mexiko beendet die Gruppe mit neun Punkten und 7:1 Toren.'},
      {title:'Österreich verabschiedet sich mit Sieg',text:'Österreich gewinnt 3:0 gegen Neuseeland und erreicht drei Punkte. Südkorea bleibt mit sechs Punkten Zweiter hinter Mexiko.'}
    ],
    sources:['FM World Cup 2042 Wettbewerbsübersicht · 21.06.2042','FM-Spielbericht Emerson Escárcega · Mexiko 2:0 Südkorea']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-06-21-world-cup-groups-d-f-final',date,type:'world-cup',
    title:'Escárcega trifft doppelt: Mexiko beendet die Gruppe mit neun Punkten',
    text:'Mexiko schlägt Südkorea 2:0, beide Tore erzielt Emerson Escárcega. Schweden und Portugal gewinnen die Gruppen D und E.',
    href:'presse.html?id=2042-06-21-world-cup-groups-d-f-final-matchday'
  });
})();