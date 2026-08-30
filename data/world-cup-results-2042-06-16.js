(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-16';
  const reportId='2042-06-16-world-cup-groups-a-c-docherty';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {group:'A',home:'England',away:'Paraguay',score:'0:0',homeScore:0,awayScore:0,scorers:[]},
    {group:'A',home:'Serbien',away:'Mali',score:'2:2',homeScore:2,awayScore:2,scorers:[
      {team:'Mali',player:'D. Konaté',minute:6},
      {team:'Serbien',player:'G. Gajić',minute:7},
      {team:'Serbien',player:'G. Gajić',minute:24,penalty:true},
      {team:'Mali',player:'D. Konaté',minute:37}
    ]},
    {group:'B',home:'Schottland',away:'Nigeria',score:'1:1',homeScore:1,awayScore:1,scorers:[
      {team:'Schottland',player:'E. Harrold',minute:16},
      {team:'Nigeria',player:'J. Okolie',minute:'90+8'}
    ]},
    {group:'B',home:'Katar',away:'Argentinien',score:'3:5',homeScore:3,awayScore:5,scorers:[
      {team:'Katar',player:'M. Garcia',minute:16},
      {team:'Argentinien',player:'G. Busto',minute:19},
      {team:'Argentinien',player:'G. Pérez',minute:27},
      {team:'Argentinien',player:'G. Pérez',minute:33},
      {team:'Argentinien',player:'C. Rivadore',minute:35},
      {team:'Argentinien',player:'A. Petrocca',minute:49},
      {team:'Katar',player:'B. Hassan',minute:53},
      {team:'Katar',player:'A. Al-Ansari',minute:66}
    ]},
    {group:'C',home:'Uruguay',away:'Iran',score:'2:2',homeScore:2,awayScore:2,scorers:[
      {team:'Iran',player:'P. Yousefi',minute:16},
      {team:'Iran',player:'M. Mohammadizadeh',minute:20},
      {team:'Uruguay',player:'L. Fernández',minute:34},
      {team:'Uruguay',player:'N. Irazoqui',minute:72}
    ]},
    {group:'C',home:'Belgien',away:'Algerien',score:'2:0',homeScore:2,awayScore:0,scorers:[
      {team:'Belgien',player:'M. Peterges',minute:15},
      {team:'Belgien',player:'O. Michiels',minute:54}
    ]}
  ];

  wc.status='Gruppenphase läuft';
  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;
  wc.secondMatchday=wc.secondMatchday||{};
  wc.secondMatchday.groupsABC={date,results};

  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    A:[
      {team:'England',played:2,win:1,draw:1,loss:0,gf:3,ga:1,gd:2,points:4},
      {team:'Mali',played:2,win:1,draw:1,loss:0,gf:4,ga:3,gd:1,points:4},
      {team:'Serbien',played:2,win:0,draw:1,loss:1,gf:3,ga:5,gd:-2,points:1},
      {team:'Paraguay',played:2,win:0,draw:1,loss:1,gf:1,ga:2,gd:-1,points:1}
    ],
    B:[
      {team:'Argentinien',played:2,win:2,draw:0,loss:0,gf:7,ga:3,gd:4,points:6},
      {team:'Schottland',played:2,win:0,draw:2,loss:0,gf:3,ga:3,gd:0,points:2},
      {team:'Katar',played:2,win:0,draw:1,loss:1,gf:5,ga:7,gd:-2,points:1},
      {team:'Nigeria',played:2,win:0,draw:1,loss:1,gf:1,ga:3,gd:-2,points:1}
    ],
    C:[
      {team:'Belgien',played:2,win:2,draw:0,loss:0,gf:4,ga:0,gd:4,points:6},
      {team:'Uruguay',played:2,win:0,draw:2,loss:0,gf:4,ga:4,gd:0,points:2},
      {team:'Algerien',played:2,win:0,draw:1,loss:1,gf:2,ga:4,gd:-2,points:1},
      {team:'Iran',played:2,win:0,draw:1,loss:1,gf:2,ga:4,gd:-2,points:1}
    ]
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-16-dom-docherty-world-cup-nigeria',date,player:'Dom Docherty',type:'nationalteam',
    title:'Docherty bereitet Schottlands Führung vor',
    detail:'Spielt gegen Nigeria die erste Halbzeit auf dem Flügel, liefert die Vorlage zum 1:0, kommt auf 0,35 xA und erhält die Note 7,5. Schottland kassiert in der 90.+8 Minute noch das 1:1.'
  });

  const report={
    id:reportId,type:'WM-Roundup',date,competition:'FIFA World Cup 2042',fixtureDate:'2. Spieltag · Gruppen A bis C · 16.06.2042',
    headline:'Docherty liefert, Schottland leidet spät: Die zweite WM-Runde beginnt mit Drama',
    subheadline:'Dom Docherty bereitet Schottlands Führung gegen Nigeria vor, doch der Ausgleich fällt in der 90.+8 Minute. Argentinien gewinnt ein Acht-Tore-Spiel, Belgien bleibt makellos und England muss sich mit einem 0:0 begnügen.',
    label:'FIFA WORLD CUP 2042 · 2. SPIELTAG · GRUPPEN A BIS C',
    heroStat:{label:'DOM DOCHERTY',value:'45 MIN · 1 ASSIST · 7,5',note:'Schottland 1:1 Nigeria · Ausgleich in 90.+8'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Der zweite Gruppenspieltag der WM 2042 ist angelaufen. Für Finn Harps steht Dom Docherty im Mittelpunkt: Der 25-Jährige spielt gegen Nigeria nur die erste Halbzeit, ist in dieser aber einer der entscheidenden Akteure. Seine Vorlage bringt Schottland in Führung, ehe Nigeria tief in der Nachspielzeit noch zuschlägt.',
    sections:[
      {title:'Docherty setzt früh den Akzent',text:'Schottland geht in der 16. Minute durch E. Harrold in Führung. Dom Docherty liefert die Vorlage und bestätigt damit seine gute WM-Form. In 45 Minuten kommt er auf 13 angekommene Pässe bei 72 Prozent, 0,04 xG und 0,35 xA. Seine Note von 7,5 unterstreicht, wie viel Wirkung er in einer Halbzeit entfaltet.'},
      {title:'Dann kommt Minute 90.+8',text:'Nach Dochertys Auswechslung verteidigt Schottland den knappen Vorsprung lange. Erst in der achten Minute der Nachspielzeit trifft J. Okolie zum 1:1 für Nigeria. Schottland bleibt damit nach zwei Spielen ungeschlagen, steht aber auch noch ohne Sieg da.'},
      {title:'Argentinien gewinnt das Spektakel',text:'Argentinien schlägt Katar 5:3. Nach Katars Führung in Minute 16 dreht der Favorit die Partie mit vier Toren zwischen Minute 19 und 35. G. Pérez trifft doppelt, C. Rivadore und A. Petrocca ergänzen. Argentinien steht damit nach zwei Spielen bei sechs Punkten.'},
      {title:'England lässt erstmals Punkte liegen',text:'England kommt gegen Paraguay nicht über ein 0:0 hinaus. Nach dem 3:1 zum Auftakt reicht es diesmal nicht für ein Tor. Mali hält durch ein 2:2 gegen Serbien Schritt; D. Konaté trifft doppelt für Mali, G. Gajić doppelt für Serbien.'},
      {title:'Belgien bleibt ohne Gegentor',text:'Belgien gewinnt auch sein zweites Gruppenspiel, diesmal 2:0 gegen Algerien. Der ehemalige Finn-Harps-Star Marian Peterges eröffnet in Minute 15, O. Michiels erhöht in Minute 54. Belgien steht bei sechs Punkten und 4:0 Toren.'},
      {title:'Iran verspielt den Traumstart',text:'Iran führt gegen Uruguay nach 20 Minuten bereits 2:0. Uruguay kommt durch L. Fernández und N. Irazoqui zurück und rettet ein 2:2. Damit bleibt Gruppe C hinter dem makellosen Belgien offen.'}
    ],
    verdictHeading:'Ein guter Docherty-Abend mit bitterem Ende',
    verdict:'Für Docherty persönlich ist die erste Halbzeit ein weiteres starkes WM-Signal: eine Vorlage, 7,5 und klarer Einfluss auf Schottlands Offensivspiel. Für Schottland dagegen fühlt sich das 1:1 nach dem Gegentor in der 90.+8 Minute wie eine verpasste Chance an. Parallel ziehen Argentinien und Belgien bereits deutlich Richtung K.-o.-Runde.',
    results,
    sources:['FM-Wettbewerbsübersicht FIFA World Cup 2042 · 2. Spieltag Gruppen A bis C · 16.06.2042','FM-Spielbericht Dom Docherty · Schottland 1:1 Nigeria']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-16-world-cup-groups-a-c',date,season:2042,category:'World Cup',accent:'gold',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · 2. SPIELTAG',
    title:'Docherty assistiert, Schottland kassiert in 90.+8 den Ausgleich',
    summary:'Dom Docherty liefert beim 1:1 gegen Nigeria in 45 Minuten eine Vorlage und die Note 7,5. Argentinien gewinnt 5:3 gegen Katar, Belgien bleibt nach dem 2:0 gegen Algerien makellos.',
    href:`presse.html?id=${reportId}`,
    entities:['world-cup-2042','dom-docherty','scotland','nigeria','argentina','belgium','marian-peterges']
  });
})();