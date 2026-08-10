(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-07-06-sao-paulo-finn-harps-club-world-cup-third-place';
  const reportId='2041-07-06-klub-wm-sao-paulo-platz-3-spielbericht';
  const match={
    id:fixtureId,date:'2041-07-06',season:2041,competition:'FIFA Club World Cup',stage:'Spiel um Platz 3',
    home:{id:'sao-paulo',name:'São Paulo',short:'SAO',score:2},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    score:'2:3',homeGoals:2,awayGoals:3,halfTime:'1:1',
    venue:'Stade de Marseille',location:'Marseille, Frankreich',attendance:67354,awayFans:7228,weather:'32 °C',
    headline:'Finn Harps holt Platz drei gegen ein starkes São Paulo',
    verdict:'Finn Harps gewinnt das Spiel um Platz drei verdient 3:2. São Paulo zeigt mit fünf Schüssen aufs Tor und 1,36 xG jedoch deutlich, warum der Klub bis ins Halbfinale gekommen ist.',
    events:[
      {minute:39,type:'goal',team:'São Paulo',player:'Andrinho',text:'1:0'},
      {minute:39,type:'goal',team:'Finn Harps',player:'Basile Rouviere',text:'1:1'},
      {minute:70,type:'goal',team:'Finn Harps',player:'Jake Roberts',text:'1:2'},
      {minute:80,type:'goal',team:'São Paulo',player:'Mário Lúcio',text:'2:2'},
      {minute:81,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'2:3'},
      {minute:12,type:'yellow',team:'São Paulo',player:'José Roberto',text:'Verwarnung'},
      {minute:74,type:'injury',team:'São Paulo',player:'Nahuel Diaz',text:'verletzt'},
      {minute:80,type:'yellow',team:'São Paulo',player:'Fabian de Souza',text:'Verwarnung'},
      {minute:83,type:'yellow',team:'Finn Harps',player:"Jim O'Neill",text:'Verwarnung'},
      {minute:90,stoppage:4,type:'yellow',team:'Finn Harps',player:'Callum Brennan',text:'Verwarnung'}
    ],
    stats:[
      {label:'Schüsse',home:9,away:16,kind:'number'},
      {label:'Schüsse aufs Tor',home:5,away:11,kind:'number'},
      {label:'xG',home:1.36,away:2.18,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:3,away:4,kind:'number'},
      {label:'Großchancen',home:3,away:3,kind:'number'},
      {label:'Ballbesitz',home:48,away:52,kind:'percent'},
      {label:'Ecken',home:2,away:6,kind:'number'},
      {label:'Fouls',home:10,away:12,kind:'number'},
      {label:'Angekommene Pässe',home:480,away:523,kind:'number',homeDetail:'90 % · 480/533',awayDetail:'88 % · 523/594'},
      {label:'Gewonnene Zweikämpfe',home:71,away:69,kind:'percent',homeDetail:'20/28',awayDetail:'25/36'},
      {label:'Gewonnene Kopfbälle',home:55,away:43,kind:'percent',homeDetail:'26/47',awayDetail:'20/47'},
      {label:'Gelbe Karten',home:2,away:2,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:6.91,away:7.00,kind:'decimal'},
      {label:'Intensive Sprints',home:98,away:116,kind:'number'}
    ],
    analysis:{
      summary:'Finn Harps beendet die Klub-WM mit Platz drei. Die Harps waren über 90 Minuten offensiv stärker und kamen auf 16 Abschlüsse, elf Schüsse aufs Tor und 2,18 xG. São Paulo blieb mit neun Abschlüssen, fünf Schüssen aufs Tor, drei Großchancen und 1,36 xG aber jederzeit gefährlich.',
      saoPaulo:'São Paulo bestätigte den Eindruck eines verdienten Halbfinalisten. Obwohl Finn Harps mehr Abschlüsse und deutlich mehr Schüsse aufs Tor hatte, erzeugten die Brasilianer drei Großchancen und kamen zweimal zum Ausgleich beziehungsweise zurück ins Spiel. Das 2:2 durch Mário Lúcio in der 80. Minute machte die Partie unmittelbar vor Schluss noch einmal völlig offen.',
      response:'Die stärkste Harps-Reaktion kam nur eine Minute nach dem 2:2. Daryl Frame traf in der 81. Minute zum 3:2 und nahm São Paulo sofort den Schwung des Ausgleichs.',
      balance:'Mit 52 Prozent Ballbesitz, 523 angekommene Pässen und 116 intensiven Sprints hatten die Harps leichte strukturelle Vorteile. Entscheidend war aber vor allem die höhere Abschlussmenge: 16:9 Schüsse und 11:5 aufs Tor.',
      nuance:'Das Ergebnis war verdient, aber kein Spaziergang. São Paulo zwang Finn Harps bis in die Schlussphase zu einem echten Spiel und lieferte damit noch einmal einen guten Beleg dafür, warum der Klub bei dieser Klub-WM unter den letzten vier stand.'
    },
    keyPerformers:[
      {player:'Dom Docherty',team:'Finn Harps',rating:8.2,note:'Beste Harps-Note; starke kreative Wirkung und laut Spielanalyse 1,03 Expected Assists.'},
      {player:'Jake Roberts',team:'Finn Harps',rating:7.9,note:'Treffer zum 2:1 in der 70. Minute.'},
      {player:'Daryl Frame',team:'Finn Harps',rating:7.8,note:'Entscheidender Treffer zum 3:2 nur eine Minute nach São Paulos Ausgleich.'},
      {player:'Basile Rouviere',team:'Finn Harps',rating:7.4,note:'Ausgleich zum 1:1 in der 39. Minute.'},
      {player:'Mário Lúcio',team:'São Paulo',rating:7.7,note:'Tor zum 2:2 und einer der stärksten São-Paulo-Spieler.'}
    ],
    milestones:['Andrinho absolvierte seinen 325. Einsatz für São Paulo','Mário Lúcio absolvierte sein 400. Spiel als Profi','Jake Roberts absolvierte sein 25. Spiel als Profi','Dom Docherty absolvierte sein 300. Spiel als Profi'],
    sources:['FM-Spielübersicht São Paulo – Finn Harps · 06.07.2041','Finn-Harps-Spielerstatistiken · Spiel um Platz 3 der Klub-WM']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const sao=(window.FM_CLUBS||[]).find(x=>x.id==='sao-paulo'||x.name==='São Paulo')||{};
  upsert(window.FM_CLUBS,{
    ...sao,id:'sao-paulo',name:'São Paulo',short:'SAO',country:'Brasilien',
    clubWorldCup2041:{stage:'Spiel um Platz 3',status:'4. Platz',opponent:'Finn Harps',result:'2:3'},
    summary:'Vierter der Klub-WM 2041. São Paulo verlor das Spiel um Platz drei 2:3 gegen Finn Harps, zeigte mit drei Großchancen und 1,36 xG aber erneut die Qualität eines verdienten Halbfinalisten.',
    meetings:[...(sao.meetings||[]).filter(x=>x.date!=='06.07.2041'),{date:'06.07.2041',competition:'FIFA Club World Cup · Spiel um Platz 3',venue:'Stade de Marseille · Marseille',result:'2:3'}]
  });

  const current=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...current,
    id:'club-world-cup-2041',year:2041,status:'final-set',titleHolder:'Finn Harps',group:'H',
    placements:{...(current.placements||{}),third:'Finn Harps',fourth:'São Paulo'},
    thirdPlace:{home:'São Paulo',away:'Finn Harps',score:'2:3',winner:'Finn Harps',status:'played',date:'2041-07-06'},
    knockout:{...(current.knockout||{}),finnHarpsStatus:'3. Platz',thirdPlaceOpponent:'São Paulo',thirdPlaceResult:'3:2',finalPairing:'AC Milan – Caen'},
    headline:'Klub-WM 2041: Finn Harps beendet das Turnier nach einem 3:2 gegen São Paulo auf Platz drei. Im Finale stehen AC Milan und Caen.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-06';
    season.latestHeadline='Klub-WM: Finn Harps schlägt São Paulo 3:2 und beendet das Turnier auf Platz drei.';
    season.clubWorldCup={...(season.clubWorldCup||{}),status:'3. Platz',lastResult:'06.07.2041 · São Paulo 2:3 Finn Harps',finalPairing:'AC Milan – Caen',finish:'3. Platz',thirdPlaceOpponent:'São Paulo',thirdPlaceResult:'3:2'};
    season.changes=season.changes||{notes:[]};
    const note='06.07.2041: 3:2 gegen São Paulo im Spiel um Platz drei der Klub-WM. Rouviere, Roberts und Frame treffen; Finn Harps beendet das Turnier als Dritter.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {player:'Basile Rouviere',detail:'Tor zum 1:1 gegen São Paulo im Spiel um Platz drei.'},
    {player:'Jake Roberts',detail:'Tor zum 2:1 in der 70. Minute gegen São Paulo; zugleich 25. Profispiel.'},
    {player:'Daryl Frame',detail:'Siegtreffer zum 3:2 in der 81. Minute, nur eine Minute nach São Paulos Ausgleich.'},
    {player:'Dom Docherty',detail:'Beste Harps-Note 8,2 im 3:2 gegen São Paulo; zugleich 300. Profispiel.'}
  ].forEach(update=>window.FM_PLAYER_UPDATES.push({date:'2041-07-06',type:'club-world-cup-third-place',title:'Klub-WM Platz 3',...update}));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-07-06',competition:'FIFA Club World Cup',fixtureDate:'06.07.2041',
    home:'São Paulo',away:'Finn Harps',score:'2:3',location:'Stade de Marseille · Marseille · 67.354 Zuschauer · 7.228 Harps-Auswärtsfans · 32 °C',
    headline:'Platz drei nach einem echten Kampf: Finn Harps schlägt São Paulo 3:2',
    subheadline:'Rouviere, Roberts und Frame treffen. São Paulo bleibt bis zum Ende gefährlich und zeigt trotz der Niederlage, warum der brasilianische Klub bis ins Halbfinale gekommen ist.',
    label:'FIFA CLUB WORLD CUP · SPIEL UM PLATZ 3 · SÃO PAULO 2:3 FINN HARPS',
    heroStat:{label:'Abschlüsse',value:'16:9 für Finn Harps',note:'11:5 aufs Tor · xG 2,18:1,36 · Großchancen 3:3'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Nach dem klaren Halbfinal-Aus gegen Caen antwortet Finn Harps mit einem Sieg. Das 3:2 gegen São Paulo war jedoch kein lockerer Abschluss. Die Brasilianer gingen durch Andrinho in Führung, kamen später durch Mário Lúcio noch einmal zum 2:2 und zwangen die Harps bis in die Schlussphase zu voller Konzentration. Daryl Frame entschied das Spiel nur eine Minute nach dem Ausgleich.',
    sections:[
      {title:'São Paulo bestätigt seine Halbfinal-Qualität',text:'Der vierte Platz täuscht über die Qualität des brasilianischen Auftritts hinweg. São Paulo kam auf fünf Schüsse aufs Tor, 1,36 xG und drei Großchancen. Gerade die drei Großchancen bei nur neun Abschlüssen zeigen, dass die Mannschaft nicht viel Volumen brauchte, um gefährlich zu werden.'},
      {title:'Finn Harps erzeugt mehr Druck',text:'Die Harps hatten 52 Prozent Ballbesitz, 16 Abschlüsse und elf Schüsse aufs Tor. Mit 2,18 xG lag auch die Chancenqualität insgesamt höher. Das 3:2 ist deshalb verdient, auch wenn das Spiel enger war als die Abschlusszahlen zunächst vermuten lassen.'},
      {title:'Roberts und Frame entscheiden die zweite Halbzeit',text:'Nach dem 1:1 zur Pause brachte Jake Roberts Finn Harps in der 70. Minute mit 2:1 in Führung. Als Mário Lúcio zehn Minuten später ausglich, reagierten die Harps sofort: Daryl Frame traf in der 81. Minute zum 3:2.'},
      {title:'Docherty gibt dem Spiel Struktur',text:'Dom Docherty erhielt mit 8,2 die beste Harps-Note und kam laut Matchanalyse auf 1,03 Expected Assists. In seinem 300. Profispiel war er damit der wichtigste kreative Verbindungsspieler.'},
      {title:'Ein starker dritter Platz',text:'Finn Harps beendet die Klub-WM auf Rang drei. Auf dem Weg dorthin schlugen die Harps Manchester City, Bayern München, Barcelona und nun São Paulo. Nur Caen war im Halbfinale klar stärker.'}
    ],
    strengthsTitle:'WAS DEN SIEG GETRAGEN HAT',strengthsHeading:'Mehr Druck und die sofortige Antwort nach dem 2:2',
    strengths:['16:9 Abschlüsse','11:5 Schüsse aufs Tor','2,18 xG','Roberts trifft zum 2:1','Frame antwortet innerhalb einer Minute auf das 2:2','Docherty mit Note 8,2'],
    vulnerabilitiesTitle:'WARUM SÃO PAULO BIS ZUM ENDE DRIN WAR',vulnerabilitiesHeading:'Drei Großchancen aus wenig Volumen',
    vulnerabilities:['São Paulo erzeugt 1,36 xG','Drei Großchancen auf beiden Seiten','Fünf Schüsse aufs Tor für São Paulo','Zweimal mussten die Harps auf einen São-Paulo-Treffer reagieren','Das 2:2 in der 80. Minute öffnete das Spiel erneut vollständig'],
    verdictHeading:'Verdient Dritter, aber São Paulo verdient ebenfalls Respekt',
    verdict:'Finn Harps war über die gesamte Partie die aktivere und abschlusssicherere Mannschaft und gewinnt verdient. Gleichzeitig bestätigt São Paulo mit seiner Effizienz und den drei Großchancen, warum dieser Klub bei der Weltmeisterschaft der Vereine unter den letzten vier stand. Das war kein Pflichtsieg gegen einen abgefallenen Gegner, sondern ein echter Abschluss auf hohem Niveau.',
    sourcesHeading:'Spieldaten vom 6. Juli 2041',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots mit Spielübersicht, Teamstatistiken und Einzelbewertungen.',
    sources:['FM-Spielübersicht São Paulo – Finn Harps · 06.07.2041','Finn-Harps-Spielerstatistiken · Spiel um Platz 3 der Klub-WM']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-07-06-klub-wm-platz-3',date:'2041-07-06',season:2041,category:'Klub-WM',accent:'green',featured:true,
    eyebrow:'FIFA CLUB WORLD CUP · PLATZ 3',title:'Finn Harps gewinnt den Kampf um Bronze',
    summary:'3:2 gegen São Paulo: Rouviere, Roberts und Frame treffen. São Paulo bleibt mit drei Großchancen und 1,36 xG bis zum Ende gefährlich und bestätigt seine starke Klub-WM.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','sao-paulo','club-world-cup','basile-rouviere','jake-roberts','daryl-frame']
  });
})();