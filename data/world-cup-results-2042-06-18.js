(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-18';
  const reportId='2042-06-18-world-cup-groups-g-i-masic';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {group:'G',home:'Italien',away:'Marokko',score:'1:1',homeScore:1,awayScore:1,scorers:[
      {team:'Italien',player:'L. Ginelli',minute:13},
      {team:'Marokko',player:'I. Sabir',minute:65,penalty:true}
    ]},
    {group:'G',home:'Schweiz',away:'Kuba',score:'7:0',homeScore:7,awayScore:0,scorers:[
      {team:'Schweiz',player:'S. Stöckli',minute:10},
      {team:'Schweiz',player:'S. Antoniuzzi',minute:23},
      {team:'Schweiz',player:'J. Fontana',minute:38},
      {team:'Schweiz',player:'A. Righi',minute:43},
      {team:'Schweiz',player:'J. Fontana',minute:65},
      {team:'Schweiz',player:'R. Ajdini',minute:78},
      {team:'Schweiz',player:'L. Favre',minute:84}
    ]},
    {group:'H',home:'Saudi-Arabien',away:'Dänemark',score:'0:2',homeScore:0,awayScore:2,scorers:[
      {team:'Dänemark',player:'K. Andersen',minute:41},
      {team:'Dänemark',player:'D. Hørby',minute:'45+1'}
    ],cards:[{team:'Dänemark',player:'B. Løvgren Larsen',minute:84,type:'red'}]},
    {group:'H',home:'Elfenbeinküste',away:'Haiti',score:'5:1',homeScore:5,awayScore:1,scorers:[
      {team:'Haiti',player:'J. Roumain',minute:21},
      {team:'Elfenbeinküste',player:'M. Yallek',minute:28},
      {team:'Elfenbeinküste',player:'F. Britto',minute:54},
      {team:'Elfenbeinküste',player:'M. Yallek',minute:69},
      {team:'Elfenbeinküste',player:'A. Dionande',minute:86},
      {team:'Elfenbeinküste',player:'A. Konaté',minute:'90+1'}
    ],cards:[{team:'Haiti',player:'D. Lubin',minute:71,type:'red'}]},
    {group:'I',home:'Chile',away:'Frankreich',score:'2:4',homeScore:2,awayScore:4,scorers:[
      {team:'Chile',player:'G. Retamal',minute:8},
      {team:'Frankreich',player:'Y. Jaffre',minute:11,penalty:true},
      {team:'Frankreich',player:'Y. Jaffre',minute:54,penalty:true},
      {team:'Frankreich',player:'S. Cabrol',minute:80},
      {team:'Chile',player:'A. Cereceda',minute:84},
      {team:'Frankreich',player:'A. Benoit',minute:89}
    ]},
    {group:'I',home:'Australien',away:'USA',score:'7:2',homeScore:7,awayScore:2,scorers:[
      {team:'USA',player:'B. Wambach',minute:6},
      {team:'Australien',player:'R. Hooker',minute:14},
      {team:'USA',player:'M. Swibel',minute:24,ownGoal:true},
      {team:'Australien',player:'D. Micallef',minute:31},
      {team:'Australien',player:'R. Hooker',minute:'45+2'},
      {team:'Australien',player:'J. Martin',minute:46},
      {team:'Australien',player:'N. Lukić',minute:72},
      {team:'Australien',player:'R. Hooker',minute:83},
      {team:'Australien',player:'E. Mbombo',minute:'90+4'}
    ]}
  ];

  wc.status='Gruppenphase läuft';
  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;
  wc.secondMatchday=wc.secondMatchday||{};
  wc.secondMatchday.groupsGHI={date,results};
  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    G:[
      {team:'Schweiz',played:2,win:1,draw:1,loss:0,gf:8,ga:1,gd:7,points:4},
      {team:'Italien',played:2,win:1,draw:1,loss:0,gf:7,ga:2,gd:5,points:4},
      {team:'Marokko',played:2,win:0,draw:2,loss:0,gf:2,ga:2,gd:0,points:2},
      {team:'Kuba',played:2,win:0,draw:0,loss:2,gf:1,ga:13,gd:-12,points:0}
    ],
    H:[
      {team:'Elfenbeinküste',played:2,win:1,draw:1,loss:0,gf:9,ga:5,gd:4,points:4},
      {team:'Dänemark',played:2,win:1,draw:1,loss:0,gf:6,ga:4,gd:2,points:4},
      {team:'Saudi-Arabien',played:2,win:1,draw:0,loss:1,gf:3,ga:2,gd:1,points:3},
      {team:'Haiti',played:2,win:0,draw:0,loss:2,gf:1,ga:8,gd:-7,points:0}
    ],
    I:[
      {team:'Australien',played:2,win:1,draw:1,loss:0,gf:7,ga:2,gd:5,points:4},
      {team:'Frankreich',played:2,win:1,draw:1,loss:0,gf:4,ga:2,gd:2,points:4},
      {team:'Chile',played:2,win:0,draw:1,loss:1,gf:3,ga:5,gd:-2,points:1},
      {team:'USA',played:2,win:0,draw:1,loss:1,gf:3,ga:8,gd:-5,points:1}
    ]
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-18-amir-masic-world-cup-cuba',date,player:'Amir Mašić',type:'nationalteam',
    title:'Mašić kontrolliert das Zentrum beim Schweizer 7:0',
    detail:'Spielt beim 7:0 der Schweiz gegen Kuba die vollen 90 Minuten als defensiver Mittelfeldspieler. 80 von 89 Pässen kommen an (90 Prozent), ohne Tor oder Vorlage, Note 7,7. Der Spielbericht hebt sein fehlerfreies und genaues Passspiel hervor.'
  });

  const report={
    id:reportId,type:'WM-Roundup',date,competition:'FIFA World Cup 2042',fixtureDate:'2. Spieltag · Gruppen G bis I · 18.06.2042',
    headline:'Mašić dirigiert, die Schweiz schenkt Kuba sieben ein: Australien zerlegt die USA',
    subheadline:'Amir Mašić spielt beim 7:0 der Schweiz 90 Minuten und bringt 90 Prozent seiner Pässe an. Australien gewinnt 7:2 gegen die USA, Frankreich schlägt Chile 4:2 und Italien muss sich gegen Marokko mit einem Remis begnügen.',
    label:'FIFA WORLD CUP 2042 · 2. SPIELTAG · GRUPPEN G BIS I',
    heroStat:{label:'AMIR MAŠIĆ',value:'90 MIN · 80/89 PÄSSE · 7,7',note:'Schweiz 7:0 Kuba'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Der zweite Gruppenspieltag erreicht die Gruppen G bis I. Aus Finn-Harps-Sicht liefert Amir Mašić den saubersten Auftritt: Der 23-Jährige kontrolliert beim Schweizer 7:0 gegen Kuba das Zentrum und spielt nahezu fehlerfrei. Gleichzeitig produziert Australien mit sieben Toren gegen die USA das Spektakel des Tages.',
    sections:[
      {title:'Mašić hält beim 7:0 die Fäden zusammen',text:'Die Schweiz zerlegt Kuba 7:0 und Mašić spielt die komplette Partie im defensiven Mittelfeld. 80 seiner 89 Pässe kommen an, entsprechend 90 Prozent. Tor oder Vorlage braucht er für eine starke Note von 7,7 nicht; der Spielbericht hebt ausdrücklich sein fehlerfreies und genaues Passspiel hervor.'},
      {title:'Schweiz und Italien bleiben ungeschlagen',text:'Während die Schweiz mit dem 7:0 an die Spitze der Gruppe G springt, kommt Italien gegen Marokko nur zu einem 1:1. L. Ginelli trifft früh für Italien, I. Sabir gleicht per Elfmeter aus. Nach zwei Spielen stehen Schweiz und Italien bei vier Punkten, Marokko bei zwei.'},
      {title:'Australien mit einem 7:2 für die Geschichtsbücher',text:'Australien schlägt die USA 7:2. R. Hooker trifft dreimal, hinzu kommen Tore von D. Micallef, J. Martin, N. Lukić und E. Mbombo. Die USA gehen zwar früh durch B. Wambach in Führung, werden danach aber überrollt. Australien führt Gruppe I nun vor Frankreich an.'},
      {title:'Frankreich dreht gegen Chile auf',text:'Chile geht bereits in Minute acht in Führung, doch Frankreich antwortet. Y. Jaffre verwandelt zwei Elfmeter, S. Cabrol und A. Benoit sorgen spät für den 4:2-Endstand. Der Titelverteidiger steht damit nach zwei Spielen bei vier Punkten.'},
      {title:'Dänemark und die Elfenbeinküste setzen sich ab',text:'Dänemark schlägt Saudi-Arabien 2:0, obwohl B. Løvgren Larsen spät Rot sieht. Die Elfenbeinküste gewinnt 5:1 gegen Haiti; M. Yallek trifft doppelt. Damit liegen Elfenbeinküste und Dänemark in Gruppe H mit vier Punkten vorne.'}
    ],
    verdictHeading:'Mašić liefert genau das, was ein Turnier-Mittelfeld braucht',
    verdict:'Nicht jedes starke WM-Spiel braucht Tore und Vorlagen. Mašić kontrolliert beim Schweizer Kantersieg den Rhythmus, verliert kaum Bälle und hält die Passqualität hoch. Für Finn Harps ist es ein weiteres Signal, dass die eigenen Nationalspieler auf sehr unterschiedlichen Bühnen Wirkung entfalten. Der Blick Irlands richtet sich derweil weiter auf Südafrika, das nach seinem 3:3 gegen Brasilien deutlich gefährlicher wirkt als ein normaler Gruppengegner.',
    results,
    sources:['FM-Wettbewerbsübersicht FIFA World Cup 2042 · Gruppen G bis I · 18.06.2042','FM-Spielbericht Amir Mašić · Schweiz 7:0 Kuba']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-18-world-cup-groups-g-i',date,season:2042,category:'World Cup',accent:'gold',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · 2. SPIELTAG',
    title:'Mašić stark beim 7:0, Australien schießt die USA ab',
    summary:'Amir Mašić spielt beim Schweizer 7:0 gegen Kuba 90 Minuten, bringt 80 von 89 Pässen an und erhält die Note 7,7. Australien gewinnt 7:2 gegen die USA, Frankreich 4:2 gegen Chile.',
    href:`presse.html?id=${reportId}`,
    entities:['world-cup-2042','amir-masic','switzerland','australia','france']
  });
})();