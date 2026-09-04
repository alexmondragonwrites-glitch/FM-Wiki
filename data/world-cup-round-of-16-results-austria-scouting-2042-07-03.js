(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-03';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {
      id:'2042-world-cup-round-of-16-brazil-denmark',stage:'Achtelfinale',date,
      home:'Brasilien',away:'Dänemark',score:'2:0',homeScore:2,awayScore:0,winner:'Brasilien',status:'beendet',
      scorers:['Rafael 57','Flávio Henrique 87'],
      note:'Brasilien setzt seine Serie fort und erreicht mit einem kontrollierten 2:0 das Viertelfinale.',
      harps:{
        player:'Paulo Henrique',minutes:90,rating:7.6,cleanSheet:true,role:'Mitspielender Torwart',
        note:'Paulo Henrique ist einer der entscheidenden Spieler der Partie, bleibt ohne Gegentor und zeigt sich in brenzligen Situationen sehr sicher.'
      }
    },
    {
      id:'2042-world-cup-round-of-16-switzerland-spain',stage:'Achtelfinale',date,
      home:'Schweiz',away:'Spanien',score:'0:1',homeScore:0,awayScore:1,winner:'Spanien',status:'beendet',
      scorers:['Alberto 55'],
      note:'Spanien gewinnt das enge Duell gegen die Schweiz 1:0 und zieht ebenfalls ins Viertelfinale ein.'
    }
  ];

  wc.status='K.-o.-Phase · Achtelfinale';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  results.forEach(result=>upsert(wc.knockoutResults,result));

  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;

  wc.knockoutPairings=wc.knockoutPairings||[];
  results.forEach(result=>{
    const index=wc.knockoutPairings.findIndex(item=>item&&(item.id===result.id||(item.home===result.home&&item.away===result.away&&item.stage==='Achtelfinale')));
    const pairing={id:result.id,stage:'Achtelfinale',date,home:result.home,away:result.away,status:'beendet',score:result.score,winner:result.winner};
    if(index>=0)wc.knockoutPairings[index]=Object.assign({},wc.knockoutPairings[index],pairing);else wc.knockoutPairings.push(pairing);
  });

  wc.quarterFinalists=wc.quarterFinalists||[];
  ['Brasilien','Spanien'].forEach(team=>{if(!wc.quarterFinalists.includes(team))wc.quarterFinalists.push(team);});

  wc.austriaScouting={
    date,opponent:'Österreich',context:'Irlands nächster WM-Gegner',
    strengths:[
      'Torwartqualität und Strafraumkontrolle um Tom Zimmermann',
      'Kommunikation der Torhüter',
      'Starke Sprunghöhe und damit unangenehm in der Luft',
      'Zielstrebigkeit und Engagement',
      'Luca Lindner als starke Option auf rechts',
      'Nils Straub als gute Sturmoption'
    ],
    weaknesses:[
      'Dribbling und Weitschüsse gehören nicht zu den Stärken',
      'Ohne Ball und Passspiel mit erkennbarem Verbesserungspotenzial',
      'Übersicht, Ballannahme, Technik und Flair unter dem Niveau der stärksten Mannschaftsteile',
      'Teamwork und Einsatzfreude werden im Scouting kritisch bewertet',
      'Antritt, Kraft, Ausdauer, Schnelligkeit, Balance, Aggressivität und Beweglichkeit bieten Angriffspunkte'
    ],
    keyPlayers:[
      {player:'Tom Zimmermann',position:'TW',club:'Grenoble',age:27,apps:4,rating:6.80,value:'€140–199 Mio.'},
      {player:'Jan Lenz',position:'V (Z) / DM / M (Z)',club:'Newcastle',age:23,apps:'3 (1)',goals:2,rating:7.15,value:'€57–68 Mio.'},
      {player:'Luca Lindner',position:'M (RZ) / OM (R)',club:'Atlético de Madrid',age:28,apps:3,goals:2,rating:7.20,value:'€33–49 Mio.'},
      {player:'Onur Engin',position:'M/OM (L)',club:'Austria Wien',age:26,apps:3,assists:2,rating:7.30,value:'€13.5–16.5 Mio.'},
      {player:'Nils Straub',position:'OM (LZ) / ST (Z)',club:'Sporting CP',age:30,apps:4,goals:1,assists:1,rating:6.75,value:'€17.5–21 Mio.'},
      {player:'Dominik Berger',position:'OM (RLZ) / ST (Z)',club:'Rapid Wien',age:24,apps:'1 (1)',goals:1,assists:1,rating:7.60,value:'€26 Mio.'}
    ],
    note:'Österreich kommt als Frankreich-Bezwinger ins Duell. Das Scouting zeichnet eine körperlich und in der Luft unangenehme Mannschaft mit starkem Torwart aus, zeigt aber zugleich technische und spielerische Angriffspunkte.'
  };

  wc.july3RoundOf16Summary={
    date,stage:'Achtelfinale',
    headline:'Brasilien und Spanien stehen im Viertelfinale. Paulo Henrique liefert beim 2:0 gegen Dänemark endlich seinen großen WM-Auftritt.',
    brazil:{result:'Brasilien 2:0 Dänemark',harps:'Paulo Henrique · 90 Minuten · Zu Null · Note 7,6'},
    spain:{result:'Schweiz 0:1 Spanien'},
    irelandNext:'Österreich',
    scouting:'Starker Torwart und Luftpräsenz, aber technische und spielerische Angriffspunkte.'
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-03-paulo-henrique-brazil-denmark-world-cup',date,player:'Paulo Henrique',type:'nationalteam',
    title:'Paulo Henrique zeigt gegen Dänemark endlich seine große WM-Leistung',
    detail:'90 Minuten, kein Gegentor und Note 7,6 beim 2:0 Brasiliens gegen Dänemark. Der Finn-Harps-Keeper wird im Länderspielbericht als einer der entscheidenden Spieler bezeichnet und zeigt sich in brenzligen Situationen sehr sicher.'
  });

  const report={
    id:'2042-07-03-brazil-spain-through-paulo-austria-scouting',type:'WM-Achtelfinale & Gegneranalyse',date,competition:'FIFA World Cup 2042',
    headline:'Paulo ist da: Brasilien und Spanien weiter, Österreich unter dem Mikroskop',
    subheadline:'Paulo Henrique hält beim 2:0 gegen Dänemark die Null und erhält die Note 7,6. Spanien schlägt die Schweiz 1:0. Parallel liegt Irlands Scoutingbericht für Frankreich-Bezwinger Österreich vor.',
    label:'FIFA WORLD CUP 2042 · ACHTELFINALE · 3. JULI',
    heroStat:{label:'HARPS-KEEPER',value:'PAULO HENRIQUE · 7,6 · ZU NULL',note:'Brasilien 2:0 Dänemark'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Nach mehreren wackligen WM-Auftritten zeigt Paulo Henrique ausgerechnet im Achtelfinale seine bislang stärkste Turnierleistung. Brasilien schlägt Dänemark 2:0, der Finn-Harps-Torhüter bleibt ohne Gegentor und wird als einer der entscheidenden Spieler hervorgehoben. Spanien setzt sich parallel 1:0 gegen die Schweiz durch. Für Irland richtet sich der Blick nun auf Österreich.',
    sections:[
      {title:'Endlich der Paulo aus Donegal',text:'Paulo Henrique spielt 90 Minuten, bleibt ohne Gegentor und erhält die Note 7,6. Der Länderspielbericht beschreibt ihn als einen der entscheidenden Spieler und hebt hervor, wie sicher er in brenzligen Situationen agiert. Nach einer zuvor wechselhaften WM ist das genau der Auftritt, den man vom Harps-Keeper kennt.'},
      {title:'Brasilien bleibt im Titelrennen',text:'Rafael trifft in Minute 57, Flávio Henrique entscheidet das Spiel in Minute 87. Mit dem 2:0 gegen Dänemark zieht Brasilien ins Viertelfinale ein und liefert dabei einen deutlich kontrollierteren Auftritt als in mehreren vorherigen Turnierspielen.'},
      {title:'Spanien gewinnt das enge Duell',text:'Spanien schlägt die Schweiz 1:0. Alberto erzielt in Minute 55 das einzige Tor. Damit bleibt auch der spanische Harps-Strang mit Pol Muñoz und dem seit 1. Juli offiziell verpflichteten Raúl im Turnier.'},
      {title:'Österreich: stark im Tor und in der Luft',text:'Der Scoutbericht hebt Torwart Tom Zimmermann, die Strafraumkontrolle, die Kommunikation der Keeper sowie die Sprunghöhe der Mannschaft hervor. Jan Lenz hat bei dieser WM bereits zwei Tore erzielt, Luca Lindner ebenfalls zwei. Onur Engin kommt auf zwei Vorlagen. Österreich besitzt damit mehr als nur den Frankreich-Coup.'},
      {title:'Aber Irland bekommt Angriffspunkte',text:'Das Scouting sieht Schwächen beziehungsweise Verbesserungspotenzial unter anderem bei Dribbling, Weitschüssen, Bewegung ohne Ball, Passspiel, Übersicht, Ballannahme, Technik und Flair. Auch mehrere physische Bereiche wie Antritt, Kraft, Ausdauer, Schnelligkeit und Beweglichkeit werden nicht zu den Stärken gezählt. Für Irland spricht das dafür, Österreich nicht nur über Physis zu bearbeiten, sondern mit Tempo, Kombinationen und Positionswechseln zu zwingen.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Da ist endlich der Paulo Henrique, den Finn Harps jede Woche kennt.“',
      '„Brasilien mit einem sicheren Torwart ist plötzlich wieder ein ganz anderes Tier.“',
      '„Österreich hat Frankreich rausgeworfen, aber der Scoutbericht zeigt: unantastbar sind sie ganz sicher nicht.“'
    ]},
    sources:['FM World Cup 2042 · Brasilien 2:0 Dänemark · Achtelfinale','FM-Länderspielbericht Paulo Henrique · 90 Minuten · Note 7,6 · ohne Gegentor','FM World Cup 2042 · Schweiz 0:1 Spanien · Achtelfinale','FM-Scoutingbericht Österreich · Kader und Stärken/Schwächen · 03.07.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-03-world-cup-brazil-spain-paulo-austria-scouting',date,type:'world-cup',
    title:'Paulo Henrique hält die Null · Brasilien und Spanien im Viertelfinale',
    text:'Brasilien schlägt Dänemark 2:0, Paulo Henrique spielt 90 Minuten und erhält die Note 7,6. Spanien gewinnt 1:0 gegen die Schweiz. Der Österreich-Scoutbericht zeigt starke Torhüter und Luftpräsenz, aber auch technische Angriffspunkte.',
    href:'presse.html?id=2042-07-03-brazil-spain-through-paulo-austria-scouting'
  });
})();