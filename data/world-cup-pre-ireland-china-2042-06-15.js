(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-15';
  const reportId='2042-06-15-vor-irland-china-wm-roundup';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const june14=[
    {group:'G',home:'Kuba',away:'Italien',score:'1:6',homeScore:1,awayScore:6,scorers:[
      {team:'Italien',player:'M. Sacco',minute:2},
      {team:'Italien',player:'M. Romano',minute:24},
      {team:'Italien',player:'A. Fabbri',minute:27},
      {team:'Italien',player:'A. Fabbri',minute:42,penalty:true},
      {team:'Italien',player:'R. Lucarelli',minute:51},
      {team:'Kuba',player:'A. Horta',minute:80},
      {team:'Italien',player:'M. Sacco',minute:81}
    ]},
    {group:'G',home:'Marokko',away:'Schweiz',score:'1:1',homeScore:1,awayScore:1,scorers:[
      {team:'Schweiz',player:'S. Stöckli',minute:53},
      {team:'Marokko',player:'H. Sefrioui',minute:89}
    ]},
    {group:'H',home:'Haiti',away:'Saudi-Arabien',score:'0:3',homeScore:0,awayScore:3,scorers:[
      {team:'Saudi-Arabien',player:'M. Al-Shammari',minute:2},
      {team:'Saudi-Arabien',player:'M. Al-Shammari',minute:36},
      {team:'Saudi-Arabien',player:'A. Al-Dawsari',minute:58}
    ]},
    {group:'H',home:'Dänemark',away:'Elfenbeinküste',score:'4:4',homeScore:4,awayScore:4,scorers:[
      {team:'Dänemark',player:'D. Hørby',minute:42},
      {team:'Dänemark',player:'M. Sørensen',minute:52},
      {team:'Elfenbeinküste',player:'F. Britto',minute:55},
      {team:'Dänemark',player:'F. Nielsen',minute:60},
      {team:'Elfenbeinküste',player:'A. Konaté',minute:73},
      {team:'Elfenbeinküste',player:'F. Britto',minute:79,penalty:true},
      {team:'Dänemark',player:'K. Nielsen',minute:83},
      {team:'Elfenbeinküste',player:'F. Britto',minute:'90+7',penalty:true}
    ]},
    {group:'I',home:'Frankreich',away:'Australien',score:'0:0',homeScore:0,awayScore:0,scorers:[]},
    {group:'I',home:'USA',away:'Chile',score:'1:1',homeScore:1,awayScore:1,scorers:[
      {team:'Chile',player:'F. Guerrero',minute:39},
      {team:'USA',player:'S. Hernandez',minute:77}
    ]}
  ];

  const june15BeforeIreland=[
    {group:'J',home:'Ukraine',away:'Deutschland',score:'3:4',homeScore:3,awayScore:4},
    {group:'J',home:'Kolumbien',away:'Ghana',score:'5:0',homeScore:5,awayScore:0},
    {group:'K',home:'Südafrika',away:'Brasilien',score:'3:3',homeScore:3,awayScore:3}
  ];

  wc.status='Gruppenphase läuft';
  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate['2042-06-14']=june14;
  wc.resultsByDate['2042-06-15']=june15BeforeIreland;
  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    G:[
      {team:'Italien',played:1,win:1,draw:0,loss:0,gf:6,ga:1,gd:5,points:3},
      {team:'Schweiz',played:1,win:0,draw:1,loss:0,gf:1,ga:1,gd:0,points:1},
      {team:'Marokko',played:1,win:0,draw:1,loss:0,gf:1,ga:1,gd:0,points:1},
      {team:'Kuba',played:1,win:0,draw:0,loss:1,gf:1,ga:6,gd:-5,points:0}
    ],
    H:[
      {team:'Saudi-Arabien',played:1,win:1,draw:0,loss:0,gf:3,ga:0,gd:3,points:3},
      {team:'Dänemark',played:1,win:0,draw:1,loss:0,gf:4,ga:4,gd:0,points:1},
      {team:'Elfenbeinküste',played:1,win:0,draw:1,loss:0,gf:4,ga:4,gd:0,points:1},
      {team:'Haiti',played:1,win:0,draw:0,loss:1,gf:0,ga:3,gd:-3,points:0}
    ],
    I:[
      {team:'USA',played:1,win:0,draw:1,loss:0,gf:1,ga:1,gd:0,points:1},
      {team:'Chile',played:1,win:0,draw:1,loss:0,gf:1,ga:1,gd:0,points:1},
      {team:'Frankreich',played:1,win:0,draw:1,loss:0,gf:0,ga:0,gd:0,points:1},
      {team:'Australien',played:1,win:0,draw:1,loss:0,gf:0,ga:0,gd:0,points:1}
    ],
    J:[
      {team:'Kolumbien',played:1,win:1,draw:0,loss:0,gf:5,ga:0,gd:5,points:3},
      {team:'Deutschland',played:1,win:1,draw:0,loss:0,gf:4,ga:3,gd:1,points:3},
      {team:'Ukraine',played:1,win:0,draw:0,loss:1,gf:3,ga:4,gd:-1,points:0},
      {team:'Ghana',played:1,win:0,draw:0,loss:1,gf:0,ga:5,gd:-5,points:0}
    ],
    K:[
      {team:'Südafrika',played:1,win:0,draw:1,loss:0,gf:3,ga:3,gd:0,points:1},
      {team:'Brasilien',played:1,win:0,draw:1,loss:0,gf:3,ga:3,gd:0,points:1},
      {team:'China',played:0,win:0,draw:0,loss:0,gf:0,ga:0,gd:0,points:0},
      {team:'Irland',played:0,win:0,draw:0,loss:0,gf:0,ga:0,gd:0,points:0}
    ]
  });

  wc.preIrelandChina={
    date,
    kickoff:'17:30',
    fixture:'China – Irland',
    group:'K',
    context:'Vor Irlands erstem WM-Spiel haben sich Südafrika und Brasilien 3:3 getrennt. Ein Sieg gegen China würde Irland nach seinem ersten Spiel sofort auf drei Punkte und damit vor beide Teams bringen.',
    harpsInternationalNotes:[
      'Romano Maisto: Italien 6:1 Kuba, 81 Minuten, 1 Vorlage, Note 7,4, 33 angekommene Pässe bei 89 %, xG 0,25, xA 0,25.',
      'Daniele Di Maio: Italien 6:1 Kuba, 66 Minuten, Note 6,8, ein abgefangener Ball.',
      'Amir Mašić: Schweiz 1:1 Marokko, 36 Minuten nach Einwechslung, Note 6,5, 12 angekommene Pässe bei 86 %.',
      'Torric Bruce: Ghana 0:5 Kolumbien, 90 Minuten, Note 6,4, drei abgefangene Bälle und zwei gewonnene Zweikämpfe.',
      'Paulo Henrique: Brasilien 3:3 Südafrika, 90 Minuten, Note 5,9, vier Schüsse aufs Tor gegen sich und nur eine Parade.'
    ]
  };

  Object.assign(window.FM_IRELAND,{
    updated:'15.06.2042',
    competition:'FIFA World Cup 2042',
    worldCup2042:Object.assign({},window.FM_IRELAND.worldCup2042||{}, {
      status:'Vor dem 1. Gruppenspiel',
      group:'K',
      teams:['Brasilien','China','Irland','Südafrika'],
      nextMatch:{date:'2042-06-15',opponent:'China',kickoff:'17:30',venue:'Neutraler WM-Spielort',competition:'FIFA World Cup 2042 · Gruppe K'},
      groupSituationBeforeKickoff:'Südafrika 3:3 Brasilien. Beide stehen bei einem Punkt; China und Irland haben noch nicht gespielt.'
    }),
    nextFocus:{competition:'FIFA World Cup 2042',stage:'Gruppenphase · Gruppe K',opponent:'China',date:'15.06.2042',kickoff:'17:30'},
    latestHeadline:'Vor dem WM-Auftakt gegen China: Brasilien lässt beim 3:3 gegen Südafrika Punkte liegen.'
  });

  [
    {id:'2042-06-14-romano-maisto-world-cup-cuba',date:'2042-06-14',player:'Romano Maisto',type:'nationalteam',title:'Maisto mit Vorlage beim italienischen 6:1',detail:'Spielt 81 Minuten als vorgeschobener Spielmacher gegen Kuba, bereitet einen Treffer vor und erhält die Note 7,4.'},
    {id:'2042-06-14-daniele-di-maio-world-cup-cuba',date:'2042-06-14',player:'Daniele Di Maio',type:'nationalteam',title:'Di Maio startet mit Italien furios',detail:'Steht beim 6:1 gegen Kuba 66 Minuten auf dem Platz und erhält die Note 6,8.'},
    {id:'2042-06-14-amir-masic-world-cup-morocco',date:'2042-06-14',player:'Amir Mašić',type:'nationalteam',title:'Mašić sammelt WM-Minuten',detail:'Kommt beim 1:1 der Schweiz gegen Marokko für 36 Minuten ins Spiel und erhält die Note 6,5.'},
    {id:'2042-06-15-torric-bruce-world-cup-colombia',date,player:'Torric Bruce',type:'nationalteam',title:'Bitterer WM-Auftakt für Bruce und Ghana',detail:'Spielt beim 0:5 gegen Kolumbien 90 Minuten. Drei abgefangene Bälle und zwei gewonnene Zweikämpfe stehen einer Note von 6,4 gegenüber.'},
    {id:'2042-06-15-paulo-henrique-world-cup-south-africa',date,player:'Paulo Henrique',type:'nationalteam',title:'Paulo erlebt schwierigen Brasilien-Auftakt',detail:'Brasilien spielt 3:3 gegen Südafrika. Paulo steht 90 Minuten im Tor, pariert einen von vier Schüssen aufs Tor und erhält die Note 5,9.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'WM-Roundup / Vorschau',date,competition:'FIFA World Cup 2042',fixtureDate:'Vor China – Irland · Gruppe K · 15.06.2042, 17:30',
    headline:'Vor Irlands Auftakt: Brasilien stolpert, Italien rauscht los',
    subheadline:'Unmittelbar vor China gegen Irland ist Gruppe K bereits offen: Brasilien kommt gegen Südafrika nicht über ein 3:3 hinaus. Gleichzeitig hinterlassen mehrere Finn-Harps-Spieler ihre ersten WM-Spuren.',
    label:'FIFA WORLD CUP 2042 · VOR CHINA – IRLAND',
    heroStat:{label:'GRUPPE K VOR IRLAND',value:'SÜDAFRIKA 3:3 BRASILIEN',note:'Ein irischer Sieg gegen China würde sofort drei Punkte und die Tabellenführung bedeuten'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM / WM'},
    intro:'Jetzt beginnt auch für Irland die Weltmeisterschaft. Bevor Ryan Flannigans Mannschaft um 17:30 Uhr gegen China antritt, hat die Gruppe bereits ihren ersten Haken geschlagen: Brasilien lässt beim 3:3 gegen Südafrika zwei Punkte liegen. Aus Sicht der Finn Harps war der Weg bis hierher ohnehin schon voller kleiner Geschichten.',
    sections:[
      {title:'Italien eröffnet mit sechs Toren',text:'Italien fegt Kuba mit 6:1 vom Platz. M. Sacco trifft in Minute 2 und 81, A. Fabbri doppelt in Minute 27 und per Elfmeter in Minute 42. Für Finn Harps startet Romano Maisto und liefert in 81 Minuten eine Vorlage sowie die Note 7,4. Daniele Di Maio spielt 66 Minuten und kommt auf 6,8.'},
      {title:'Maisto liefert, Di Maio arbeitet',text:'Maisto spielt als vorgeschobener Spielmacher, bringt 33 Pässe mit 89 Prozent Genauigkeit an und verbucht 0,25 xG sowie 0,25 xA. Di Maio bleibt ohne Scorerpunkt, erledigt aber in der Defensive seine Arbeit und fängt einen Ball ab. Für beide ist es ein erfolgreicher WM-Einstieg.'},
      {title:'Schweiz lässt spät Punkte liegen',text:'Die Schweiz führt gegen Marokko durch S. Stöckli ab Minute 53, kassiert aber in Minute 89 durch H. Sefrioui den Ausgleich. Amir Mašić kommt für die letzten 36 Minuten ins zentrale Mittelfeld, bringt 12 Pässe bei 86 Prozent an und erhält die Note 6,5.'},
      {title:'Acht Tore zwischen Dänemark und der Elfenbeinküste',text:'Dänemark und die Elfenbeinküste liefern das bisher wildeste Spiel dieses Blocks. Beim 4:4 trifft F. Britto dreimal für die Elfenbeinküste, darunter zwei Elfmeter in Minute 79 und 90.+7. Saudi-Arabien führt Gruppe H nach einem 3:0 gegen Haiti an.'},
      {title:'Titelverteidiger Frankreich beginnt mit 0:0',text:'Frankreich kommt gegen Australien nicht über ein torloses Remis hinaus. Auch USA gegen Chile endet 1:1. Damit startet die komplette Gruppe I mit jeweils einem Punkt.'},
      {title:'Bruce erlebt den Albtraum, Deutschland gewinnt ein Sieben-Tore-Spiel',text:'Am 15. Juni schlägt Kolumbien Ghana mit 5:0. Torric Bruce spielt über 90 Minuten und erhält die Note 6,4. Parallel gewinnt Deutschland gegen die Ukraine mit 4:3. Kolumbien und Deutschland setzen sich damit zunächst an die Spitze der Gruppe J.'},
      {title:'Paulo erwischt einen schweren Nachmittag',text:'Brasilien beginnt die WM mit einem 3:3 gegen Südafrika. Paulo Henrique steht 90 Minuten im Tor, sieht vier Schüsse aufs Tor und pariert nur einen davon. Seine Note 5,9 spiegelt den schwierigen Nachmittag wider. Für Irland ist das Ergebnis dagegen eine Einladung: Mit einem Sieg gegen China wäre die Mannschaft sofort allein bei drei Punkten.'},
      {title:'Jetzt gehört die Bühne Irland',text:'Nach 13:1 Toren in den beiden letzten Tests endet jede Vorbereitung mit dem Anpfiff. China ist der erste echte WM-Test. Durch Brasiliens Remis ist die Ausgangslage sogar besser geworden, aber genau deshalb darf Irland den Auftakt nicht verschenken.'}
    ],
    verdictHeading:'Die Gruppe öffnet die Tür, Irland muss hindurchgehen',
    verdict:'Brasilien hat mit dem 3:3 gegen Südafrika sofort gezeigt, dass Gruppe K kein Selbstläufer wird. Gleichzeitig kann Irland mit einem Sieg gegen China schon nach dem ersten eigenen Spiel die beste Ausgangslage der Gruppe besitzen. Nach Monaten voller Finn-Harps-Geschichten beginnt jetzt Ryan Flannigans eigentliches WM-Turnier.',
    sources:['FM-Wettbewerbsübersicht FIFA World Cup 2042 · Gruppen G bis I · 14.06.2042','FM-WM-Spielübersicht · 15.06.2042 vor China – Irland','FM-Spielberichte Romano Maisto, Daniele Di Maio, Amir Mašić, Torric Bruce und Paulo Henrique']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-15-before-ireland-china',date,season:2042,category:'World Cup',accent:'green',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · VOR CHINA – IRLAND',
    title:'Brasilien lässt Punkte liegen: Die Tür für Irland ist offen',
    summary:'Brasilien startet mit einem 3:3 gegen Südafrika. Vor Irlands WM-Auftakt gegen China kann Ryan Flannigans Mannschaft mit einem Sieg sofort auf drei Punkte springen. Maisto liefert zuvor beim italienischen 6:1 eine Vorlage.',
    href:`presse.html?id=${reportId}`,
    entities:['world-cup-2042','ireland','china','brazil','south-africa','paulo-henrique','romano-maisto','daniele-di-maio','amir-masic','torric-bruce']
  });
})();