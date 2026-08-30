(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-19';
  const matchId='2042-06-19-ireland-south-africa-world-cup';
  const reportId='2042-06-19-irland-suedafrika-1-0-barry';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const match={
    id:matchId,date,season:2042,competition:'FIFA World Cup 2042 · Gruppe K',stage:'Gruppenphase · 2. Spieltag',
    home:'Irland',away:'Südafrika',homeScore:1,awayScore:0,score:'1:0',halfTime:'1:0',
    venue:'Stadion an der Anfield Road',location:'Liverpool, England',attendance:61276,referee:'Octavio Duffaut',weather:'Windig · 19°C',
    context:'Nach dem 4:0 gegen China trifft Irland auf Südafrika, das zum Auftakt Brasilien 3:3 gehalten hatte. Der 1:0-Sieg bringt Irland auf sechs Punkte und sichert bereits vor dem letzten Gruppenspiel den Einzug in die K.-o.-Runde.',
    events:[
      {minute:1,team:'Irland',type:'goal',player:'Ben Barry',text:'1:0 · Treffer zunächst nicht gegeben, nach Videobeweis anerkannt'},
      {minute:80,team:'Südafrika',type:'yellow',player:'Sfiso Nkosi',text:'Gelbe Karte'},
      {minute:'90+2',team:'Irland',type:'yellow',player:'Simon Neville',text:'Gelbe Karte'}
    ],
    scorers:[{team:'Irland',player:'Ben Barry',minutes:[1],goals:1}],
    stats:{
      shots:[18,9],shotsOnTarget:[7,2],xg:[2.10,1.25],shotsOffTarget:[9,3],bigChances:[1,3],possession:[63,37],
      corners:[10,6],fouls:[15,12],yellowCards:[1,1],redCards:[0,0],completedPasses:['456/530','273/346'],
      passCompletion:[86,79],duelsWon:['12/13','19/31'],duelWinPct:[92,61],headersWon:['35/66','28/64'],headerWinPct:[53,44],
      averageRating:[7.13,6.58],intensiveSprints:[166,130]
    },
    ratings:{
      'Evan Reilly':7.7,'Callum Brennan':7.0,'Darcy Andrews':7.2,'Callum Duggan':6.7,'Kevin Kelly':7.1,
      'Brendan Costello':7.0,'Justin Ramsey':6.9,'Robert Boylan':6.7,'Billy Walker':6.5,'Shane Fox':7.8,
      'Ben Barry':8.0,'Mareks Istrankins':6.8,'Giacomo Papini':6.5,'Simon Neville':6.8,"Cormac O'Kane":6.7,"Jim O'Neill":6.7
    },
    playerOfMatch:{player:'Ben Barry',team:'Irland',rating:8.0,goals:1,note:'Trifft in der allerersten Minute; der Treffer wird nach VAR-Eingriff anerkannt und bleibt der Siegtreffer.'},
    irelandStandouts:[
      {player:'Ben Barry',rating:8.0,goals:1,note:'Der 18-Jährige entscheidet das zweite WM-Gruppenspiel mit seinem Tor in Minute 1.'},
      {player:'Shane Fox',rating:7.8,note:'Sehr starker Auftritt auf der linken Seite.'},
      {player:'Evan Reilly',rating:7.7,cleanSheet:true,note:'Hält die Null gegen einen Gegner, der auf 1,25 xG und drei Großchancen kommt.'},
      {player:'Darcy Andrews',rating:7.2,note:'Stabiler Auftritt in der Defensive.'}
    ],
    analysis:{
      blitzstart:'Ben Barry trifft praktisch mit dem ersten großen Moment des Spiels. Der Treffer wird zunächst nicht gegeben, der Videobeweis korrigiert die Entscheidung. Nach weniger als einer Minute führt Irland 1:0.',
      control:'Irland hält 63 Prozent Ballbesitz, spielt 456 von 530 Pässen erfolgreich und kommt auf 18 Abschlüsse. Das Spiel ist damit deutlich kontrollierter als der Auftakt gegen China.',
      warning:'Südafrika bleibt dennoch gefährlich. Drei Großchancen und 1,25 xG zeigen, dass der Scoutbericht nicht zu viel versprochen hatte. Evan Reilly und die Defensive verhindern den Ausgleich.',
      physicalEdge:'Irland gewinnt 92 Prozent der erfassten Zweikämpfe und läuft 166 intensive Sprints. Die höhere Intensität hilft, Südafrikas Umschaltmomente früh zu ersticken.',
      groupImpact:'Mit sechs Punkten und 5:0 Toren führt Irland Gruppe K an und steht bereits vor dem letzten Gruppenspiel sicher in der K.-o.-Runde.'
    },
    sources:['FM-Spielübersicht Irland – Südafrika · 19.06.2042','Irland-Spielerstatistiken · Irland 1:0 Südafrika','GOAL-Spielbericht · Gruppe K · Irland 1:0 Südafrika']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_IRELAND_MATCHES,match);

  const june19Results=[
    {group:'J',home:'Deutschland',away:'Kolumbien',score:'1:0',homeScore:1,awayScore:0,note:'Ergebnis aus den aktualisierten Gruppentabellen nach dem ersten Spieltag abgeleitet.'},
    {group:'J',home:'Ukraine',away:'Ghana',score:'5:1',homeScore:5,awayScore:1,note:'Ergebnis aus den aktualisierten Gruppentabellen nach dem ersten Spieltag abgeleitet.'},
    {group:'L',home:'Spanien',away:'DR Kongo',score:'4:0',homeScore:4,awayScore:0,note:'Ergebnis aus der eingeblendeten Tabelle der Gruppe L.'},
    {group:'L',home:'Japan',away:'Barbados',score:'2:0',homeScore:2,awayScore:0,note:'Ergebnis aus der eingeblendeten Tabelle der Gruppe L.'},
    {group:'K',home:'Irland',away:'Südafrika',score:'1:0',homeScore:1,awayScore:0,scorers:match.scorers}
  ];

  wc.status='Gruppenphase läuft';
  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=june19Results;
  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    J:[
      {team:'Deutschland',played:2,win:2,draw:0,loss:0,gf:5,ga:3,gd:2,points:6},
      {team:'Kolumbien',played:2,win:1,draw:0,loss:1,gf:5,ga:1,gd:4,points:3},
      {team:'Ukraine',played:2,win:1,draw:0,loss:1,gf:8,ga:5,gd:3,points:3},
      {team:'Ghana',played:2,win:0,draw:0,loss:2,gf:1,ga:10,gd:-9,points:0}
    ],
    K:[
      {team:'Irland',played:2,win:2,draw:0,loss:0,gf:5,ga:0,gd:5,points:6},
      {team:'Brasilien',played:1,win:0,draw:1,loss:0,gf:3,ga:3,gd:0,points:1},
      {team:'Südafrika',played:2,win:0,draw:1,loss:1,gf:3,ga:4,gd:-1,points:1},
      {team:'China',played:1,win:0,draw:0,loss:1,gf:0,ga:4,gd:-4,points:0}
    ],
    L:[
      {team:'Spanien',played:1,win:1,draw:0,loss:0,gf:4,ga:0,gd:4,points:3},
      {team:'Japan',played:1,win:1,draw:0,loss:0,gf:2,ga:0,gd:2,points:3},
      {team:'Barbados',played:1,win:0,draw:0,loss:1,gf:0,ga:2,gd:-2,points:0},
      {team:'DR Kongo',played:1,win:0,draw:0,loss:1,gf:0,ga:4,gd:-4,points:0}
    ]
  });
  wc.june19Summary={
    date,
    matchesThroughIreland:5,
    goals:14,
    results:june19Results,
    headline:'Ben Barry schießt Irland nach weniger als einer Minute zum 1:0 gegen Südafrika. Deutschland bleibt makellos, die Ukraine schlägt Ghana 5:1 und Spanien startet mit einem 4:0.',
    note:'Erfasst sind die bis zum Ende von Irland – Südafrika anhand der eingeblendeten Resultate und Gruppentabellen sicher ableitbaren Partien des 19.06.2042. Brasilien – China war zu diesem Zeitpunkt noch nicht gespielt.'
  };

  Object.assign(window.FM_IRELAND,{
    updated:'19.06.2042',competition:'FIFA World Cup 2042',
    lastMatch:match,
    latestMatch:{date,opponent:'Südafrika',venue:'Stadion an der Anfield Road · Liverpool',result:'1:0',competition:'FIFA World Cup 2042 · Gruppe K'},
    latestHeadline:'Barry nach einer Minute, danach Kontrolle: Irland schlägt Südafrika 1:0 und steht vorzeitig in der K.-o.-Runde.',
    worldCup2042:Object.assign({},window.FM_IRELAND.worldCup2042||{}, {
      status:'Nach dem 2. Gruppenspiel · K.-o.-Runde vorzeitig erreicht',group:'K',teams:['Brasilien','China','Irland','Südafrika'],
      record:{played:2,win:2,draw:0,loss:0,gf:5,ga:0,gd:5,points:6},
      latestMatch:{date:'2042-06-19',opponent:'Südafrika',result:'1:0'},
      groupSituation:'Irland 6 Punkte und bereits sicher in der K.-o.-Runde; Brasilien und Südafrika stehen zu diesem Zeitpunkt bei je 1 Punkt, China bei 0.'
    }),
    nextFocus:{competition:'FIFA World Cup 2042',stage:'Gruppenphase · Gruppe K',opponent:'Brasilien',date:'noch offen im aktuellen Screenshot'}
  });

  [
    {id:'2042-06-19-ben-barry-world-cup-winner-south-africa',date,player:'Ben Barry',type:'nationalteam',title:'Barry schießt Irland vorzeitig in die K.-o.-Runde',detail:'Trifft in der 1. Minute zum 1:0 gegen Südafrika. Der Treffer wird zunächst nicht gegeben und nach Videobeweis anerkannt. Note 8,0.'},
    {id:'2042-06-19-evan-reilly-clean-sheet-south-africa',date,player:'Evan Reilly',type:'nationalteam',title:'Reilly hält gegen Südafrika die Null',detail:'Erhält die Note 7,7 und bleibt trotz 1,25 xG sowie drei Großchancen des Gegners ohne Gegentor.'},
    {id:'2042-06-19-shane-fox-south-africa',date,player:'Shane Fox',type:'nationalteam',title:'Fox überzeugt gegen Südafrika',detail:'Starker Auftritt beim 1:0 mit der Note 7,8.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht / WM-Roundup',date,competition:'FIFA World Cup 2042',fixtureDate:'Donnerstag, 19.06.2042 · Gruppe K',
    home:'Irland',away:'Südafrika',score:'1:0',location:'Stadion an der Anfield Road · Liverpool · 61.276 Zuschauer',
    headline:'Barry nach einer Minute: Irland schlägt Südafrika und steht schon in der K.-o.-Runde',
    subheadline:'Der 18-Jährige trifft praktisch mit dem ersten Angriff. Irland kontrolliert danach Ball und Rhythmus, muss gegen drei südafrikanische Großchancen aber bis zum Ende arbeiten.',
    label:'FIFA WORLD CUP 2042 · IRLAND 1:0 SÜDAFRIKA',
    heroStat:{label:'BEN BARRY',value:'1. MINUTE · 1:0',note:'2 WM-Spiele · 3 Tore im Turnier'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM / WM'},
    intro:'Ben Barry braucht gegen Südafrika keine Anlaufzeit. Noch bevor das Spiel einen Rhythmus finden kann, liegt der Ball im Netz. Erst wird der Treffer aberkannt, dann greift der Videobeweis ein: 1:0 Irland. Dieses eine Tor reicht am Ende für den zweiten Sieg im zweiten WM-Spiel und bereits für das sichere Ticket in die K.-o.-Runde.',
    sections:[
      {title:'Barry braucht nicht einmal zwei Minuten',text:'Nach seinem Doppelpack gegen China setzt Ben Barry seine WM-Geschichte sofort fort. In der allerersten Minute trifft der 18-Jährige aus kurzer Distanz. Schiedsrichter Octavio Duffaut gibt das Tor zunächst nicht, der Videobeweis korrigiert die Entscheidung. Barry steht damit nach zwei Gruppenspielen bereits bei drei WM-Toren.'},
      {title:'Mehr Kontrolle als gegen China',text:'Irland besitzt 63 Prozent Ballbesitz, bringt 456 von 530 Pässen an und kommt auf 18 Abschlüsse. 10:6 Ecken und 166:130 intensive Sprints unterstreichen, dass Ryan Flannigans Mannschaft über weite Strecken den Rhythmus vorgibt.'},
      {title:'Der Scoutbericht hatte trotzdem recht',text:'Südafrika ist gefährlicher, als das 0:1 vermuten lässt. Drei Großchancen und 1,25 xG zeigen, warum das 3:3 gegen Brasilien ernst genommen werden musste. Irland gibt nur zwei Schüsse aufs Tor ab, doch Evan Reilly und die Defensive verhindern, dass aus Südafrikas guten Momenten ein Treffer entsteht.'},
      {title:'Barry ist plötzlich eine WM-Geschichte',text:'Gegen China trifft Barry zweimal, gegen Südafrika entscheidet er die Partie nach wenigen Sekunden. Drei Tore in zwei WM-Spielen machen den 18-Jährigen vom großen Talent zum sichtbaren Gesicht dieses irischen Turnierstarts.'},
      {title:'Deutschland, Ukraine, Spanien und Japan gewinnen ebenfalls',text:'In Gruppe J bleibt Deutschland mit einem 1:0 gegen Kolumbien makellos, während die Ukraine Ghana 5:1 schlägt. Gruppe L startet mit einem 4:0 Spaniens gegen die DR Kongo und einem 2:0 Japans gegen Barbados. Die Resultate der Gruppen J und L sind aus den aktualisierten Gruppentabellen sicher ableitbar; Torschützen lagen im Screenshot nicht vor.'},
      {title:'Sechs Punkte, null Gegentore, K.-o.-Runde',text:'Irland steht nach zwei Spielen bei sechs Punkten und 5:0 Toren. Weil Südafrika nach zwei Spielen maximal noch vier Punkte erreichen kann und Brasilien und China sich ebenfalls noch gegenseitig Punkte nehmen, kann Irland nicht mehr aus den direkten Qualifikationsplätzen verdrängt werden.'}
    ],
    verdictHeading:'Nicht spektakulär, sondern erwachsen',
    verdict:'Das 4:0 gegen China war das Feuerwerk. Das 1:0 gegen Südafrika ist vielleicht die wertvollere Aussage. Der Gegner besitzt echte offensive Qualität und bekommt seine Chancen, Irland verliert aber weder Struktur noch Geduld. Und vorne reicht ein 18-Jähriger, der derzeit kaum einen WM-Moment verstreichen lässt, ohne seinen Namen hineinzuschreiben.',
    simulatedFanReactions:[
      '„Barry hat drei WM-Tore und wir sind noch nicht einmal beim dritten Gruppenspiel. Was passiert hier gerade?“',
      '„China war schön. Das heute war erwachsen. Südafrika hat Brasilien drei Tore gegeben und gegen uns keines.“',
      '„Sechs Punkte, 5:0 Tore. Jetzt dürfen wir anfangen zu träumen.“'
    ],
    results:june19Results,
    sources:['FM-Spielübersicht Irland – Südafrika · 19.06.2042','Irland-Spielerstatistiken · Irland 1:0 Südafrika','GOAL-Spielbericht · Gruppe K · Irland 1:0 Südafrika','FM-Gruppentabellen J/K/L · Stand nach Irland – Südafrika']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-19-ireland-south-africa',date,season:2042,category:'World Cup',accent:'green',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · GRUPPE K',
    title:'Barry! Nach einer Minute schießt der 18-Jährige Irland zum zweiten WM-Sieg',
    summary:'Irland schlägt Südafrika 1:0. Ben Barry erzielt nach Videobeweis bereits in Minute 1 den Siegtreffer; nach zwei Spielen stehen sechs Punkte und 5:0 Tore.',
    href:`presse.html?id=${reportId}`,
    entities:['ireland','south-africa','world-cup-2042','ben-barry','evan-reilly']
  });
})();