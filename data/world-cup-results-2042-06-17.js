(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-17';
  const reportId='2042-06-17-world-cup-groups-d-f-escarcega';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {group:'D',home:'Thailand',away:'Niederlande',score:'1:2',homeScore:1,awayScore:2,scorers:[
      {team:'Niederlande',player:'M. ter Avest',minute:2},
      {team:'Niederlande',player:'K. Arana Barrantes',minute:15},
      {team:'Thailand',player:'C. Aupara',minute:62,penalty:true}
    ]},
    {group:'D',home:'Jamaika',away:'Schweden',score:'1:6',homeScore:1,awayScore:6,scorers:[
      {team:'Schweden',player:'J. Kusi-Asare',minute:6},
      {team:'Jamaika',player:'Y. MacAuliffe',minute:11},
      {team:'Schweden',player:'J. Kusi-Asare',minute:19},
      {team:'Schweden',player:'J. Kusi-Asare',minute:63},
      {team:'Schweden',player:'J. Westergren',minute:79},
      {team:'Schweden',player:'B. Shala',minute:83,penalty:true},
      {team:'Schweden',player:'P. Rask',minute:89}
    ]},
    {group:'E',home:'Ecuador',away:'V.A.E.',score:'2:2',homeScore:2,awayScore:2,scorers:[
      {team:'Ecuador',player:'L. Bolaños',minute:22},
      {team:'Ecuador',player:'W. Torres',minute:23},
      {team:'V.A.E.',player:'A. Mohammed',minute:40},
      {team:'V.A.E.',player:'T. Abdulla',minute:88}
    ]},
    {group:'E',home:'Portugal',away:'Senegal',score:'2:0',homeScore:2,awayScore:0,scorers:[
      {team:'Portugal',player:'K. Mir',minute:31},
      {team:'Portugal',player:'K. Mir',minute:40}
    ]},
    {group:'F',home:'Mexiko',away:'Neuseeland',score:'2:0',homeScore:2,awayScore:0,scorers:[
      {team:'Mexiko',player:'C. Van Raanin',minute:81},
      {team:'Mexiko',player:'J. Tavares',minute:'90+4'}
    ]},
    {group:'F',home:'Südkorea',away:'Österreich',score:'2:1',homeScore:2,awayScore:1,scorers:[
      {team:'Österreich',player:'A. Armand',minute:37},
      {team:'Südkorea',player:'Noh Tae-Ho',minute:'90+1'},
      {team:'Südkorea',player:'Noh Sang-Heon',minute:'90+2'}
    ],cards:[{team:'Österreich',player:'A. Armand',minute:63,type:'red'}]}
  ];

  wc.status='Gruppenphase läuft';
  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;
  wc.secondMatchday=wc.secondMatchday||{};
  wc.secondMatchday.groupsDEF={date,results};
  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    D:[
      {team:'Schweden',played:2,win:2,draw:0,loss:0,gf:8,ga:1,gd:7,points:6},
      {team:'Niederlande',played:2,win:2,draw:0,loss:0,gf:3,ga:1,gd:2,points:6},
      {team:'Thailand',played:2,win:0,draw:0,loss:2,gf:1,ga:4,gd:-3,points:0},
      {team:'Jamaika',played:2,win:0,draw:0,loss:2,gf:1,ga:7,gd:-6,points:0}
    ],
    E:[
      {team:'Ecuador',played:2,win:1,draw:1,loss:0,gf:6,ga:3,gd:3,points:4},
      {team:'Portugal',played:2,win:1,draw:1,loss:0,gf:2,ga:0,gd:2,points:4},
      {team:'V.A.E.',played:2,win:0,draw:2,loss:0,gf:2,ga:2,gd:0,points:2},
      {team:'Senegal',played:2,win:0,draw:0,loss:2,gf:1,ga:6,gd:-5,points:0}
    ],
    F:[
      {team:'Mexiko',played:2,win:2,draw:0,loss:0,gf:5,ga:1,gd:4,points:6},
      {team:'Südkorea',played:2,win:2,draw:0,loss:0,gf:4,ga:2,gd:2,points:6},
      {team:'Österreich',played:2,win:0,draw:0,loss:2,gf:2,ga:5,gd:-3,points:0},
      {team:'Neuseeland',played:2,win:0,draw:0,loss:2,gf:1,ga:4,gd:-3,points:0}
    ]
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-17-emerson-escarcega-world-cup-new-zealand',date,player:'Emerson Escárcega',type:'nationalteam',
    title:'Escárcega legt Mexikos WM-Sieg mit auf',
    detail:'Spielt beim 2:0 gegen Neuseeland die vollen 90 Minuten als hängende Spitze, liefert eine Vorlage, kommt auf 0,06 xG und 0,28 xA und erhält die Note 7,4.'
  });

  const report={
    id:reportId,type:'WM-Roundup',date,competition:'FIFA World Cup 2042',fixtureDate:'2. Spieltag · Gruppen D bis F · 17.06.2042',
    headline:'Escárcega assistiert, Mexiko marschiert: Schweden zerlegt Jamaika',
    subheadline:'Mexiko gewinnt auch sein zweites Gruppenspiel und Emerson Escárcega liefert über 90 Minuten eine Vorlage. Schweden gewinnt 6:1, Portugal schlägt Senegal und Südkorea dreht Österreich tief in der Nachspielzeit.',
    label:'FIFA WORLD CUP 2042 · 2. SPIELTAG · GRUPPEN D BIS F',
    heroStat:{label:'EMERSON ESCÁRCEGA',value:'90 MIN · 1 ASSIST · 7,4',note:'Mexiko 2:0 Neuseeland · 6 Punkte aus zwei Spielen'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Der zweite Gruppenspieltag setzt sich fort und der nächste Finn-Harps-Spieler hinterlässt seine Spur. Emerson Escárcega bleibt gegen Neuseeland ohne eigenes Tor, arbeitet als hängende Spitze aber entscheidend mit und steuert beim mexikanischen 2:0 eine Vorlage bei.',
    sections:[
      {title:'Escárcega liefert auf andere Weise',text:'Mexiko muss gegen Neuseeland lange arbeiten, ehe die Tore in Minute 81 und 90.+4 fallen. Escárcega spielt die kompletten 90 Minuten, liefert eine Vorlage, verbucht 0,06 xG und 0,28 xA und erhält die Note 7,4. Nach zwei Siegen steht Mexiko bei sechs Punkten.'},
      {title:'Schweden setzt das Ausrufezeichen des Tages',text:'Schweden schlägt Jamaika 6:1. J. Kusi-Asare erzielt einen Hattrick, J. Westergren, B. Shala per Elfmeter und P. Rask ergänzen. Schweden und die Niederlande stehen in Gruppe D nach zwei Siegen bei jeweils sechs Punkten.'},
      {title:'Portugal meldet sich an',text:'Nach dem torlosen Auftakt gegen die V.A.E. gewinnt Portugal 2:0 gegen Senegal. K. Mir trifft in Minute 31 und 40 doppelt. Ecuador verspielt derweil gegen die V.A.E. eine 2:0-Führung und muss sich nach dem späten Ausgleich in Minute 88 mit einem 2:2 begnügen.'},
      {title:'Zwei Tore in zwei Minuten drehen Österreich',text:'Österreich führt gegen Südkorea seit Minute 37, verliert A. Armand in Minute 63 aber mit Rot. In der Nachspielzeit kippt die Partie komplett: Noh Tae-Ho trifft in 90.+1, Noh Sang-Heon in 90.+2 zum 2:1. Südkorea steht wie Mexiko bei sechs Punkten.'},
      {title:'Die ersten Gruppen bekommen Konturen',text:'In Gruppe D ziehen Schweden und die Niederlande davon. In Gruppe E führen Ecuador und Portugal mit je vier Punkten, während die V.A.E. mit zwei Remis im Rennen bleiben. In Gruppe F sind Mexiko und Südkorea nach zwei Siegen bereits nicht mehr von den ersten beiden Plätzen zu verdrängen.'}
    ],
    verdictHeading:'Esca muss nicht treffen, um wichtig zu sein',
    verdict:'Für Finn Harps ist der Auftritt von Escárcega ein gutes Signal. Nach seiner Verletzung und dem späten Comeback vor der WM trägt er nun über 90 Minuten Verantwortung und liefert beim zweiten mexikanischen Sieg einen Assist. Gleichzeitig zeigt der Spieltag, wie schnell dieses Turnier kippen kann: Ecuador gibt eine 2:0-Führung ab, Österreich verliert trotz Führung in zwei Nachspielzeit-Minuten.',
    results,
    sources:['FM-Wettbewerbsübersicht FIFA World Cup 2042 · 2. Spieltag Gruppen D bis F · 17.06.2042','FM-Spielbericht Emerson Escárcega · Mexiko 2:0 Neuseeland']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-17-world-cup-groups-d-f',date,season:2042,category:'World Cup',accent:'gold',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · 2. SPIELTAG',
    title:'Escárcega assistiert beim zweiten mexikanischen Sieg',
    summary:'Mexiko schlägt Neuseeland 2:0, Escárcega liefert über 90 Minuten eine Vorlage und die Note 7,4. Schweden gewinnt 6:1 gegen Jamaika, Südkorea dreht Österreich in 90.+1 und 90.+2.',
    href:`presse.html?id=${reportId}`,
    entities:['world-cup-2042','emerson-escarcega','mexico','sweden','south-korea']
  });
})();