(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_IRELAND=window.FM_IRELAND||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2041-10-06-croatia-ireland',date:'2041-10-06',season:2041,competition:'FIFA-WM-Qualifikation Europa',
    home:'Kroatien',away:'Irland',score:'1:2',halfTime:'0:1',venue:'Poljud-Stadion, Split',attendance:24030,weather:'19°C',
    scorers:[
      {team:'Irland',player:"Harry O'Leary",minute:15},
      {team:'Kroatien',player:'Anđelko Žeželj',minute:51},
      {team:'Irland',player:"Harry O'Leary",minute:78}
    ],
    stats:{
      shots:{home:7,away:11},shotsOnTarget:{home:3,away:7},xG:{home:1.35,away:2.45},
      bigChances:{home:1,away:3},possession:{home:48,away:52},corners:{home:9,away:3},fouls:{home:14,away:9},
      completedPasses:{home:'400/452',away:'439/514'},passAccuracy:{home:88,away:85},
      duelsWon:{home:'18/29',away:'25/34'},headersWon:{home:'11/39',away:'25/37'},intensiveSprints:{home:96,away:116}
    },
    standout:{player:"Harry O'Leary",team:'Irland',rating:8.5,goals:2},
    milestones:[{player:'Shane Fox',team:'Irland',detail:'50. A-Länderspiel'}],
    note:'Irland wirkt nach dem engen Länderspielfenster müde, gewinnt aber auch das schwere Auswärtsspiel in Split. Kroatien hat mehr Ecken und längere Druckphasen, Irland erzeugt jedoch die klareren Chancen und gewinnt die xG-Bilanz deutlich.'
  };
  upsert(window.FM_MATCHES,match);

  Object.assign(window.FM_IRELAND,{
    updated:'2041-10-06',competition:'FIFA-WM-Qualifikation Europa',position:'1. Platz',
    groupStatus:'WM-Qualifikation · Gruppe C · Irland Erster · 6 Siege aus 6 Spielen',
    qualification:{stage:'Qualifikationsphase',label:'FIFA-WM-Qualifikation Europa',status:'Laufend',detail:'Irland führt Gruppe C nach sechs Spielen mit 18 Punkten und 21:5 Toren an.'},
    groupTable:[
      {position:1,team:'Irland',played:6,wins:6,draws:0,losses:0,goalsFor:21,goalsAgainst:5,goalDifference:16,points:18},
      {position:2,team:'Tschechien',played:6,wins:4,draws:0,losses:2,goalsFor:10,goalsAgainst:6,goalDifference:4,points:12},
      {position:3,team:'Kroatien',played:7,wins:3,draws:1,losses:3,goalsFor:21,goalsAgainst:11,goalDifference:10,points:10},
      {position:4,team:'Zypern',played:6,wins:2,draws:1,losses:3,goalsFor:12,goalsAgainst:17,goalDifference:-5,points:7},
      {position:5,team:'Aserbaidschan',played:6,wins:0,draws:0,losses:6,goalsFor:5,goalsAgainst:30,goalDifference:-25,points:0}
    ],
    latestMatch:{date:'2041-10-06',opponent:'Kroatien',venue:'Auswärts · Poljud-Stadion',result:'2:1',competition:'FIFA-WM-Qualifikation Europa'},
    latestHeadline:'Sechs aus sechs: Irland gewinnt auch in Kroatien 2:1. Harry O’Leary erzielt beide Tore.'
  });

  [
    {id:'2041-10-06-harry-oleary-croatia-brace',date:'2041-10-06',player:"Harry O'Leary",type:'nationalteam',title:'Doppelpack in Split',detail:'Erzielt beim 2:1-Auswärtssieg gegen Kroatien beide irischen Tore in der 15. und 78. Minute und erhält Note 8,5.'},
    {id:'2041-10-06-shane-fox-50th-cap',date:'2041-10-06',player:'Shane Fox',type:'milestone',title:'50. Länderspiel',detail:'Absolviert gegen Kroatien sein 50. A-Länderspiel für Irland.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-10-06-irland-kroatien-wm-quali-spielbericht',type:'Spielbericht',date:'2041-10-06',competition:'FIFA-WM-Qualifikation Europa',
    headline:'Müde, unter Druck, trotzdem perfekt: Irland gewinnt 2:1 in Kroatien',
    subheadline:'Harry O’Leary trifft doppelt und rettet Irland den sechsten Sieg im sechsten Qualifikationsspiel. Kroatien drückt, Irland erzeugt aber die besseren Chancen.',
    label:'WM-QUALIFIKATION · GRUPPE C · KROATIEN 1:2 IRLAND',
    heroStat:{label:'Harry O’Leary',value:'2 Tore · Note 8,5',note:'15. und 78. Minute'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Am Ende dieses dichten Länderspielfensters sind die irischen Beine sichtbar schwerer, doch die Serie hält. Irland gewinnt auch das Auswärtsspiel in Split und steht nach sechs Qualifikationsspielen bei sechs Siegen. Das Ergebnis fühlt sich knapper und glücklicher an als die vorherigen Auftritte, ist anhand der Chancenqualität aber keine gestohlene Partie.',
    sections:[
      {title:'O’Leary schlägt früh zu',text:'Harry O’Leary bringt Irland in der 15. Minute in Führung. Kroatien bleibt über Standards und längere Druckphasen gefährlich, kommt vor der Pause aber nicht zum Ausgleich.'},
      {title:'Žeželj gleicht aus, Irland wackelt',text:'Anđelko Žeželj trifft in der 51. Minute zum 1:1. Kroatien gewinnt insgesamt neun Ecken und zwingt die sichtbar müden Iren zu deutlich mehr Defensivarbeit als in den vorherigen Qualifikationsspielen.'},
      {title:'O’Leary entscheidet das Spiel',text:'In der 78. Minute trifft O’Leary ein zweites Mal. Irland bringt das 2:1 anschließend über die Zeit und nimmt drei Punkte aus Split mit.'},
      {title:'Glücklich, aber nicht unverdient',text:'Kroatien kommt auf sieben Schüsse und 1,35 xG, Irland auf elf Abschlüsse, sieben Schüsse aufs Tor und 2,45 xG. Auch bei den Großchancen liegt Irland mit 3:1 vorne. Das Spielgefühl ist nervös, die Chancenbilanz spricht dennoch für den Sieger.'},
      {title:'Sechs Spiele, sechs Siege',text:'Irland führt Gruppe C nun mit 18 Punkten und 21:5 Toren an. Tschechien folgt mit zwölf Punkten, Kroatien steht nach sieben Spielen bei zehn Punkten.'}
    ],
    verdictHeading:'Jetzt sieht man erstmals die Müdigkeit',
    verdict:'Nach den klaren Siegen gegen Aserbaidschan und Zypern sowie dem kontrollierten 2:1 gegen Tschechien war dies der erste Erfolg des Blocks, bei dem Irland sichtbar auf Reserve lief. Genau deshalb ist der Sieg wertvoll: Die Mannschaft gewinnt nicht nur, wenn sie dominiert, sondern inzwischen auch dann, wenn das Spiel zäh wird und die Beine schwer sind.',
    sources:['FM-Spielbericht Kroatien – Irland · 06.10.2041','FM-Spielerstatistiken Kroatien – Irland · 06.10.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-06-ireland-croatia-2-1',date:'2041-10-06',season:2041,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'WM-QUALIFIKATION · GRUPPE C',title:'Sechs aus sechs: Irland gewinnt auch in Kroatien',
    summary:'Harry O’Leary erzielt beide Tore beim 2:1 in Split. Irland führt die Gruppe mit 18 Punkten und 21:5 Toren an.',
    href:'presse.html?id=2041-10-06-irland-kroatien-wm-quali-spielbericht',entities:['ireland','croatia','harry-oleary','season-2041']
  });
})();