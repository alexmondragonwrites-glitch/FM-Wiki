(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-12';
  const reportId='2042-06-12-world-cup-opening-day-groups-a-c';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {group:'A',home:'England',away:'Serbien',score:'3:1',homeScore:3,awayScore:1,scorers:[
      {team:'England',player:'T. Mansaray',minute:23},
      {team:'England',player:'A. Mota',minute:40},
      {team:'England',player:'A. Mota',minute:61,penalty:true},
      {team:'Serbien',player:'J. Jovanovic',minute:71}
    ]},
    {group:'A',home:'Mali',away:'Paraguay',score:'2:1',homeScore:2,awayScore:1,scorers:[
      {team:'Paraguay',player:'J. Fernández',minute:30},
      {team:'Mali',player:'A. Simpara',minute:72},
      {team:'Mali',player:'M. Soumaoro',minute:'90+3'}
    ]},
    {group:'B',home:'Argentinien',away:'Nigeria',score:'2:0',homeScore:2,awayScore:0,scorers:[
      {team:'Argentinien',player:'G. Pérez',minute:31},
      {team:'Argentinien',player:'L. Sosa',minute:82}
    ]},
    {group:'B',home:'Schottland',away:'Katar',score:'2:2',homeScore:2,awayScore:2,scorers:[
      {team:'Schottland',player:'Dom Docherty',minute:15,penalty:true},
      {team:'Schottland',player:'I. King',minute:19},
      {team:'Katar',player:'A. Al-Ansari',minute:35},
      {team:'Katar',player:'B. Hassan',minute:76}
    ]},
    {group:'C',home:'Algerien',away:'Uruguay',score:'2:2',homeScore:2,awayScore:2,scorers:[
      {team:'Algerien',player:'M. Dahmani',minute:18},
      {team:'Algerien',player:'N. Sahnoun',minute:36},
      {team:'Uruguay',player:'L. Fernández',minute:42},
      {team:'Uruguay',player:'L. Fernández',minute:88}
    ]},
    {group:'C',home:'Iran',away:'Belgien',score:'0:2',homeScore:0,awayScore:2,scorers:[
      {team:'Belgien',player:'E. Soares',minute:22},
      {team:'Belgien',player:'W. Van Den Bergh',minute:34}
    ]}
  ];

  wc.status='Gruppenphase läuft';
  wc.updated=date;
  wc.openingResults=results;
  wc.groupTables={
    A:[
      {team:'England',played:1,win:1,draw:0,loss:0,gf:3,ga:1,gd:2,points:3},
      {team:'Mali',played:1,win:1,draw:0,loss:0,gf:2,ga:1,gd:1,points:3},
      {team:'Paraguay',played:1,win:0,draw:0,loss:1,gf:1,ga:2,gd:-1,points:0},
      {team:'Serbien',played:1,win:0,draw:0,loss:1,gf:1,ga:3,gd:-2,points:0}
    ],
    B:[
      {team:'Argentinien',played:1,win:1,draw:0,loss:0,gf:2,ga:0,gd:2,points:3},
      {team:'Schottland',played:1,win:0,draw:1,loss:0,gf:2,ga:2,gd:0,points:1},
      {team:'Katar',played:1,win:0,draw:1,loss:0,gf:2,ga:2,gd:0,points:1},
      {team:'Nigeria',played:1,win:0,draw:0,loss:1,gf:0,ga:2,gd:-2,points:0}
    ],
    C:[
      {team:'Belgien',played:1,win:1,draw:0,loss:0,gf:2,ga:0,gd:2,points:3},
      {team:'Algerien',played:1,win:0,draw:1,loss:0,gf:2,ga:2,gd:0,points:1},
      {team:'Uruguay',played:1,win:0,draw:1,loss:0,gf:2,ga:2,gd:0,points:1},
      {team:'Iran',played:1,win:0,draw:0,loss:1,gf:0,ga:2,gd:-2,points:0}
    ]
  };
  wc.openingDaySummary={
    date,
    matches:6,
    goals:18,
    headline:'England und Argentinien starten mit Siegen, Schottland gibt ein 2:0 aus der Hand.',
    harpsNote:'Dom Docherty erzielt per Elfmeter das erste Tor Schottlands bei der WM 2042.'
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-12-dom-docherty-world-cup-goal-qatar',date,player:'Dom Docherty',type:'nationalteam',
    title:'Docherty trifft bei Schottlands WM-Auftakt',
    detail:'Verwandelt in Minute 15 einen Elfmeter zum 1:0 gegen Katar. Schottland führt nach 19 Minuten 2:0, muss sich am Ende aber mit einem 2:2 begnügen.'
  });

  const report={
    id:reportId,type:'WM-Roundup',date,competition:'FIFA World Cup 2042',fixtureDate:'1. Spieltag · Gruppen A bis C',
    headline:'Die WM läuft: England startet mit Sieg, Docherty trifft für Schottland',
    subheadline:'Sechs Spiele, 18 Tore und bereits die erste Harps-Spur: Dom Docherty trifft vom Punkt, doch Schottland verspielt gegen Katar eine frühe 2:0-Führung.',
    label:'FIFA WORLD CUP 2042 · ERSTE SPIELE',
    heroStat:{label:'ERSTER WM-BLOCK',value:'6 SPIELE · 18 TORE',note:'Gruppen A, B und C sind eröffnet'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Die Weltmeisterschaft 2042 ist eröffnet. Gastgeber England erledigt seinen Auftakt gegen Serbien mit 3:1, Argentinien schlägt Nigeria 2:0 und Belgien startet mit einem 2:0 gegen Iran. Für Finn Harps setzt Dom Docherty das erste direkte Ausrufezeichen des Turniers: Der Schotte trifft bereits in Minute 15 gegen Katar.',
    sections:[
      {title:'England startet vor 90.000 mit 3:1',text:'Gastgeber England beginnt die WM mit einem 3:1 gegen Serbien. T. Mansaray eröffnet in Minute 23, A. Mota trifft in Minute 40 und legt in Minute 61 per Elfmeter nach. J. Jovanovic verkürzt in Minute 71. Mali dreht parallel in Gruppe A ein 0:1 gegen Paraguay noch in ein 2:1; M. Soumaoro entscheidet die Partie in der 90.+3 Minute.'},
      {title:'Docherty trifft, Schottland lässt zwei Punkte liegen',text:'Schottland erwischt gegen Katar einen Traumstart. Dom Docherty verwandelt in Minute 15 einen Elfmeter, I. King erhöht vier Minuten später auf 2:0. Doch Katar kommt zurück: A. Al-Ansari trifft in Minute 35, B. Hassan gleicht in Minute 76 zum 2:2 aus. Für Docherty ist es dennoch ein persönlicher WM-Moment und der erste Harps-Treffer des Turniers.'},
      {title:'Argentinien übernimmt Gruppe B',text:'Argentinien schlägt Nigeria mit 2:0. G. Pérez trifft in Minute 31, L. Sosa entscheidet die Partie in Minute 82. Damit führt Argentinien die Gruppe nach dem ersten Spielblock mit drei Punkten an, während Schottland und Katar bei je einem Punkt stehen.'},
      {title:'Uruguay rettet spät einen Punkt',text:'Algerien führt gegen Uruguay nach 36 Minuten bereits 2:0. L. Fernández verkürzt noch vor der Pause und erzielt in Minute 88 auch den Ausgleich zum 2:2. Belgien nutzt das Parallelspiel und setzt sich mit 2:0 gegen Iran an die Spitze der Gruppe C.'},
      {title:'Irland wartet noch',text:'Die ersten sechs Partien betreffen die Gruppen A bis C. Irlands Gruppe K ist noch nicht gestartet. Nach den beiden Testspielsiegen gegen Kamerun und die DR Kongo beginnt nun die eigentliche Prüfung für die große Harps-Achse im irischen Kader.'}
    ],
    verdictHeading:'Die WM ist sofort wach',
    verdict:'England und Argentinien liefern kontrollierte Auftaktsiege, während Schottland und Algerien bereits erleben, wie schnell eine komfortable Führung bei einer WM verschwinden kann. Aus Harps-Sicht beginnt das Turnier mit einem Tor von Dom Docherty, noch bevor Irland selbst in Gruppe K ins Geschehen eingreift.',
    results,
    sources:['FM-Wettbewerbsübersicht FIFA World Cup 2042 · erster Spielblock der Gruppen A bis C']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-12-world-cup-opening-results',date,season:2042,category:'World Cup',accent:'gold',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · ERSTE SPIELE',
    title:'WM eröffnet: England gewinnt, Docherty trifft für Schottland',
    summary:'England schlägt Serbien 3:1, Argentinien Nigeria 2:0. Schottland verspielt gegen Katar eine 2:0-Führung; Dom Docherty erzielt per Elfmeter das 1:0.',
    href:`presse.html?id=${reportId}`,
    entities:['world-cup-2042','england','scotland','dom-docherty','argentina','belgium']
  });
})();