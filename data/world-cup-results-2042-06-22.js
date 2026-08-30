(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-22';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {group:'G',home:'Marokko',away:'Kuba',score:'3:0',homeScore:3,awayScore:0},
    {group:'G',home:'Schweiz',away:'Italien',score:'2:1',homeScore:2,awayScore:1,note:'Italien führt nach einer Minute, die Schweiz dreht das Spiel in der zweiten Hälfte.'},
    {group:'H',home:'Haiti',away:'Dänemark',score:'0:4',homeScore:0,awayScore:4},
    {group:'H',home:'Saudi-Arabien',away:'Elfenbeinküste',score:'3:2',homeScore:3,awayScore:2},
    {group:'I',home:'Chile',away:'Australien',score:'2:2',homeScore:2,awayScore:2},
    {group:'I',home:'USA',away:'Frankreich',score:'1:2',homeScore:1,awayScore:2}
  ];

  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;
  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    G:[
      {team:'Schweiz',played:3,win:2,draw:1,loss:0,gf:10,ga:2,gd:8,points:7},
      {team:'Marokko',played:3,win:1,draw:2,loss:0,gf:5,ga:2,gd:3,points:5},
      {team:'Italien',played:3,win:1,draw:1,loss:1,gf:8,ga:4,gd:4,points:4},
      {team:'Kuba',played:3,win:0,draw:0,loss:3,gf:1,ga:16,gd:-15,points:0}
    ],
    H:[
      {team:'Dänemark',played:3,win:2,draw:1,loss:0,gf:10,ga:4,gd:6,points:7},
      {team:'Saudi-Arabien',played:3,win:2,draw:0,loss:1,gf:6,ga:4,gd:2,points:6},
      {team:'Elfenbeinküste',played:3,win:1,draw:1,loss:1,gf:11,ga:8,gd:3,points:4},
      {team:'Haiti',played:3,win:0,draw:0,loss:3,gf:1,ga:12,gd:-11,points:0}
    ],
    I:[
      {team:'Frankreich',played:3,win:2,draw:1,loss:0,gf:6,ga:3,gd:3,points:7},
      {team:'Australien',played:3,win:1,draw:2,loss:0,gf:9,ga:4,gd:5,points:5},
      {team:'Chile',played:3,win:0,draw:2,loss:1,gf:5,ga:7,gd:-2,points:2},
      {team:'USA',played:3,win:0,draw:1,loss:2,gf:4,ga:10,gd:-6,points:1}
    ]
  });

  wc.june22Summary={
    date,matches:6,results,
    groupWinners:['Schweiz','Dänemark','Frankreich'],
    directTopTwo:{G:['Schweiz','Marokko'],H:['Dänemark','Saudi-Arabien'],I:['Frankreich','Australien']},
    thirdPlaced:['Italien','Elfenbeinküste','Chile'],
    headline:'Die Schweiz dreht Italien und gewinnt Gruppe G. Dänemark und Frankreich sichern sich ebenfalls Platz eins.'
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-22-di-maio-italy-switzerland-world-cup',date,player:'Daniele Di Maio',type:'nationalteam',
    title:'Di Maio spielt eine Halbzeit bei Italiens 1:2 gegen die Schweiz',
    detail:'45 Minuten als Innenverteidiger, Note 6,7. Italien beendet Gruppe G mit vier Punkten und +4 Tordifferenz auf Rang drei.'
  });

  const report={
    id:'2042-06-22-world-cup-groups-g-i-final-matchday',type:'WM-Roundup',date,competition:'FIFA World Cup 2042',
    headline:'Schweiz dreht Italien: Dänemark und Frankreich gewinnen ihre Gruppen',
    subheadline:'Italien rutscht trotz vier Punkten und positiver Tordifferenz auf Rang drei. Dänemark schlägt Haiti klar, Frankreich bezwingt die USA.',
    label:'FIFA WORLD CUP 2042 · 3. SPIELTAG GRUPPEN G–I',
    heroStat:{label:'GRUPPE G',value:'SCHWEIZ 7 · MAROKKO 5 · ITALIEN 4',note:'Italien wird mit 8:4 Toren nur Dritter'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Die nächste Tranche der WM-Gruppen ist abgeschlossen. Die Schweiz gewinnt Gruppe G nach einem 2:1 gegen Italien. Dänemark setzt sich in Gruppe H durch, Frankreich in Gruppe I. Für Finn Harps spielt Daniele Di Maio die erste Hälfte gegen die Schweiz.',
    sections:[
      {title:'Gruppe G: Italien fällt auf Platz drei',text:'Italien geht nach nur einer Minute in Führung, verliert aber 1:2 gegen die Schweiz. Damit gewinnt die Schweiz die Gruppe mit sieben Punkten vor Marokko mit fünf. Italien bleibt bei vier Punkten und 8:4 Toren auf Rang drei. Daniele Di Maio spielt 45 Minuten und erhält die Note 6,7.'},
      {title:'Gruppe H: Dänemark souverän, Saudi-Arabien springt auf Rang zwei',text:'Dänemark schlägt Haiti 4:0 und beendet die Gruppe mit sieben Punkten. Saudi-Arabien gewinnt 3:2 gegen die Elfenbeinküste und zieht mit sechs Punkten als Zweiter weiter.'},
      {title:'Gruppe I: Frankreich hält Australien hinter sich',text:'Frankreich schlägt die USA 2:1 und gewinnt die Gruppe mit sieben Punkten. Australien kommt nach dem 2:2 gegen Chile auf fünf Punkte und Rang zwei.'}
    ],
    sources:['FM World Cup 2042 Wettbewerbsübersicht · 22.06.2042','FM-Spielbericht Daniele Di Maio · Italien 1:2 Schweiz']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-06-22-world-cup-groups-g-i-final',date,type:'world-cup',
    title:'Schweiz gewinnt Italiens Gruppe, Frankreich und Dänemark ebenfalls Erster',
    text:'Italien verliert 1:2 gegen die Schweiz und beendet Gruppe G trotz vier Punkten nur auf Rang drei. Dänemark und Frankreich gewinnen die Gruppen H und I.',
    href:'presse.html?id=2042-06-22-world-cup-groups-g-i-final-matchday'
  });
})();