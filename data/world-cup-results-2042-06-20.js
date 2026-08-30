(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-20';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {group:'A',home:'England',away:'Mali',score:'2:1',homeScore:2,awayScore:1,scorers:[
      {team:'England',player:'C. Shaughnessy',minutes:[33,81],goals:2},
      {team:'Mali',player:'B. Cissé',minutes:[82],goals:1}
    ]},
    {group:'A',home:'Paraguay',away:'Serbien',score:'0:4',homeScore:0,awayScore:4,scorers:[
      {team:'Serbien',player:'M. Kresoja',minutes:[3],goals:1},
      {team:'Serbien',player:'M. Radonjic',minutes:[22],goals:1},
      {team:'Serbien',player:'D. Dukic',minutes:[27],goals:1},
      {team:'Serbien',player:'O. Sanabria',minutes:[41],goals:1,note:'Eigentor'}
    ]},
    {group:'B',home:'Katar',away:'Nigeria',score:'1:2',homeScore:1,awayScore:2,scorers:[
      {team:'Katar',player:'A. Al-Abdulla',minutes:[10],goals:1},
      {team:'Nigeria',player:'M. Seth',minutes:[45,85],goals:2}
    ]},
    {group:'B',home:'Schottland',away:'Argentinien',score:'0:2',homeScore:0,awayScore:2,scorers:[
      {team:'Argentinien',player:'G. Busto',minutes:[24],goals:1},
      {team:'Argentinien',player:'L. Sosa',minutes:[27],goals:1}
    ]},
    {group:'C',home:'Algerien',away:'Iran',score:'3:2',homeScore:3,awayScore:2,scorers:[
      {team:'Algerien',player:'A. Belhadj',minutes:[14,21],goals:2},
      {team:'Algerien',player:'N. Meghfour',minutes:[96],goals:1,note:'90.+6'},
      {team:'Iran',player:'H. Mardani',minutes:[12],goals:1,note:'Elfmeter'},
      {team:'Iran',player:'M. Heydari',minutes:[68],goals:1}
    ]},
    {group:'C',home:'Uruguay',away:'Belgien',score:'1:4',homeScore:1,awayScore:4,scorers:[
      {team:'Uruguay',player:'L. Fernández',minutes:[75],goals:1},
      {team:'Belgien',player:'G. Van Goethem',minutes:[32],goals:1},
      {team:'Belgien',player:'J. Caron',minutes:[35],goals:1},
      {team:'Belgien',player:'L. De Backer',minutes:[65,95],goals:2,note:'zweites Tor 90.+5'}
    ]}
  ];

  wc.status='Gruppenphase läuft';
  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;
  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    A:[
      {team:'England',played:3,win:2,draw:1,loss:0,gf:5,ga:2,gd:3,points:7},
      {team:'Serbien',played:3,win:1,draw:1,loss:1,gf:7,ga:5,gd:2,points:4},
      {team:'Mali',played:3,win:1,draw:1,loss:1,gf:5,ga:5,gd:0,points:4},
      {team:'Paraguay',played:3,win:0,draw:1,loss:2,gf:1,ga:6,gd:-5,points:1}
    ],
    B:[
      {team:'Argentinien',played:3,win:3,draw:0,loss:0,gf:9,ga:3,gd:6,points:9},
      {team:'Nigeria',played:3,win:1,draw:1,loss:1,gf:3,ga:4,gd:-1,points:4},
      {team:'Schottland',played:3,win:0,draw:2,loss:1,gf:3,ga:5,gd:-2,points:2},
      {team:'Katar',played:3,win:0,draw:1,loss:2,gf:6,ga:9,gd:-3,points:1}
    ],
    C:[
      {team:'Belgien',played:3,win:3,draw:0,loss:0,gf:8,ga:1,gd:7,points:9},
      {team:'Algerien',played:3,win:1,draw:1,loss:1,gf:5,ga:6,gd:-1,points:4},
      {team:'Uruguay',played:3,win:0,draw:2,loss:1,gf:5,ga:8,gd:-3,points:2},
      {team:'Iran',played:3,win:0,draw:1,loss:2,gf:4,ga:7,gd:-3,points:1}
    ]
  });

  wc.june20Summary={
    date,matches:6,goals:17,results,
    headline:'England gewinnt Gruppe A, Argentinien und Belgien bleiben makellos. Serbien zieht mit einem 4:0 noch an Mali vorbei.',
    groupWinners:['England','Argentinien','Belgien'],
    directTopTwo:{A:['England','Serbien'],B:['Argentinien','Nigeria'],C:['Belgien','Algerien']},
    thirdPlaced:['Mali','Schottland','Uruguay'],
    note:'Die Plätze drei werden separat geführt; ein mögliches Weiterkommen hängt vom WM-Modus und der Drittplatzierten-Wertung ab.'
  };

  const report={
    id:'2042-06-20-world-cup-groups-a-c-final-matchday',type:'WM-Roundup',date,competition:'FIFA World Cup 2042',
    headline:'England, Argentinien und Belgien gewinnen ihre Gruppen: Serbien springt noch auf Platz zwei',
    subheadline:'Argentinien und Belgien schließen ihre Gruppen mit neun Punkten ab. England gewinnt Gruppe A, während Serbien mit einem 4:0 gegen Paraguay Mali noch überholt.',
    label:'FIFA WORLD CUP 2042 · 3. SPIELTAG GRUPPEN A–C',
    heroStat:{label:'SECHS SPIELE',value:'17 TORE',note:'Argentinien 9 Punkte · Belgien 9 Punkte · England 7 Punkte'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Der erste Block des dritten Gruppenspieltags liefert drei Gruppensieger und einen späten Sprung in der Tabelle. England schlägt Mali, Serbien nutzt Paraguays Kollaps und zieht dank des 4:0 auf Platz zwei vorbei. Argentinien und Belgien marschieren mit perfekten neun Punkten durch ihre Gruppen.',
    sections:[
      {title:'Gruppe A: Serbien dreht die Tabelle',text:'England gewinnt 2:1 gegen Mali und beendet die Gruppe mit sieben Punkten. Parallel zerlegt Serbien Paraguay 4:0 und springt dank der besseren Tordifferenz noch an Mali vorbei. England wird Erster, Serbien Zweiter, Mali Dritter.'},
      {title:'Gruppe B: Argentinien bleibt makellos',text:'Argentinien entscheidet das Duell mit Schottland durch zwei Tore binnen vier Minuten und gewinnt 2:0. Mit neun Punkten und 9:3 Toren ist die Gruppenphase perfekt. Nigeria schlägt Katar 2:1 und sichert sich mit vier Punkten Platz zwei. Schottland beendet die Gruppe mit zwei Punkten auf Rang drei.'},
      {title:'Gruppe C: Belgien mit neun Punkten und 8:1 Toren',text:'Belgien gewinnt auch das dritte Spiel, diesmal 4:1 gegen Uruguay. Algerien setzt sich in einem wilden 3:2 gegen Iran durch und schiebt sich mit vier Punkten auf Platz zwei. Uruguay bleibt mit zwei Punkten auf Rang drei.'},
      {title:'Zwischenstand der Drittplatzierten',text:'Mali, Schottland und Uruguay stehen nach Abschluss ihrer Gruppen jeweils auf Rang drei. Ob und welche Drittplatzierten weiterkommen, wird erst mit der vollständigen Drittplatzierten-Wertung sauber feststehen.'}
    ],
    sources:['FM World Cup 2042 Wettbewerbsübersicht · 20.06.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-06-20-world-cup-groups-a-c-final',date,type:'world-cup',
    title:'Erste Gruppen abgeschlossen: Argentinien und Belgien mit perfekter Bilanz',
    text:'England gewinnt Gruppe A vor Serbien. Argentinien und Belgien holen jeweils neun Punkte; Nigeria und Algerien sichern Platz zwei. Mali, Schottland und Uruguay landen auf Rang drei.',
    href:'presse.html?id=2042-06-20-world-cup-groups-a-c-final-matchday'
  });
})();