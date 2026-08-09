(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-06-29-barcelona-club-world-cup-quarter-final';
  const reportId='2041-06-29-klub-wm-barcelona-spielbericht';

  const match={
    id:fixtureId,date:'2041-06-29',season:2041,competition:'FIFA Club World Cup',stage:'Viertelfinale',round:'Viertelfinale',
    home:'Finn Harps',away:'FC Barcelona',score:'4:2 n.V.',homeGoals:4,awayGoals:2,extraTime:true,after90:'2:2',halfTime:'1:2',
    venue:'OL Stadium',location:'Décines-Charpieu',attendance:59186,awayAttendance:29593,weather:'14 °C',referee:'Nicht bekannt',
    report:`presse.html?id=${reportId}`,
    scorers:['Takashi Kobayashi 23. (Barcelona)','Darcy Andrews 32.','James Ward 40. (Barcelona)','Romano Maisto 73.','Eduardo Blanco 97.','Torric Bruce 99.'],
    incidents:["Cormac O'Kane Gelb 59.",'Leonardo Greco Gelb 87.','Ángel Gelb 90.','Isidro Valle Gelb 120+1.'],
    stats:{
      shots:'13:14',shotsOnTarget:'7:7',fouls:'20:20',yellowCards:'1:3',possession:'43:57',
      passesCompleted:'581:786',averageRunDistance:'17,4:16,8'
    },
    ratings:[
      {name:'Paulo Henrique',rating:7.1,starter:true},
      {name:'Callum Brennan',rating:8.1,starter:true},
      {name:'Darcy Andrews',rating:8.2,starter:true,goals:1},
      {name:'Torric Bruce',rating:7.9,starter:true,goals:1},
      {name:'Kevin Kelly',rating:6.7,starter:true},
      {name:"Jim O'Neill",rating:6.6,starter:true,off:64},
      {name:'Diego Fernández',rating:6.8,starter:true,off:53},
      {name:"Cormac O'Kane",rating:7.0,starter:true,off:90},
      {name:'Giacomo Papini',rating:6.4,starter:true,off:63},
      {name:'Dom Docherty',rating:6.7,starter:true,off:64},
      {name:'Justin Ramsey',rating:6.1,starter:true,off:63},
      {name:'Billy Walker',rating:7.3,starter:false,on:45},
      {name:'Romano Maisto',rating:7.5,starter:false,on:64,goals:1},
      {name:'Jake Roberts',rating:6.8,starter:false,on:90},
      {name:'Eduardo Blanco',rating:7.7,starter:false,on:45,goals:1},
      {name:'Amir Mašić',rating:7.0,starter:false,on:64},
      {name:'Daryl Frame',rating:7.0,starter:false,on:46}
    ],
    summary:'Finn Harps schlägt den FC Barcelona nach Verlängerung mit 4:2 und steht im Halbfinale der Klub-WM. Nach einem 1:2-Pausenrückstand erzwingt Romano Maisto in der 73. Minute die Verlängerung. Eduardo Blanco und Torric Bruce entscheiden das Viertelfinale dort innerhalb von zwei Minuten.',
    standout:['Darcy Andrews 8,2 · Tor zum 1:1 und beste Harps-Note','Callum Brennan 8,1 · stärkster Defensivwert neben Andrews','Torric Bruce 7,9 · Treffer zum 4:2 in der Verlängerung','Eduardo Blanco 7,7 · Führungstor in der 97. Minute','Romano Maisto 7,5 · Ausgleich zum 2:2 in der 73. Minute'],
    milestones:[
      'Darcy Andrews absolvierte seinen 350. Einsatz als Profi.',
      "Cormac O'Kane absolvierte seinen 225. Einsatz für Finn Harps.",
      'Giacomo Papini absolvierte seinen 275. Einsatz als Profi.',
      'Paulo Henriques Serie ohne Gegentor endete nach zuvor 260 Minuten.'
    ]
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const current=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  const results=[...(current.results||[]).filter(x=>x.id!==fixtureId),{id:fixtureId,date:'2041-06-29',opponent:'FC Barcelona',result:'4:2 n.V.',venue:'OL Stadium · Décines-Charpieu',stage:'Viertelfinale'}];
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...current,
    id:'club-world-cup-2041',year:2041,status:'semi-final',titleHolder:'Finn Harps',group:'H',results,
    knockout:{
      ...(current.knockout||{}),
      round:'Halbfinale',previousRound:'Viertelfinale · 4:2 n.V. gegen FC Barcelona',previousFixtureId:fixtureId,
      quarterFinalOpponent:'FC Barcelona',quarterFinalResult:'4:2 n.V.',nextOpponent:'Noch nicht aus dem bereitgestellten Spielscreen ersichtlich'
    },
    headline:'Klub-WM 2041: Finn Harps dreht ein spektakuläres Viertelfinale gegen Barcelona und gewinnt nach Verlängerung 4:2.'
  });

  const barcelona=(window.FM_CLUBS||[]).find(x=>x.id==='barcelona'||x.name==='FC Barcelona'||x.name==='Barcelona');
  if(barcelona){
    barcelona.meetings=[{date:'29.06.2041',competition:'FIFA Club World Cup · Viertelfinale',venue:'Neutral · OL Stadium',result:'Finn Harps 4:2 n.V. FC Barcelona'},...(barcelona.meetings||[]).filter(item=>item.date!=='29.06.2041')];
    barcelona.summary='Klub-WM-Viertelfinalgegner 2041. Barcelona führte gegen Finn Harps zweimal und ging mit 2:1 in die Pause, verlor das K.-o.-Spiel aber nach Verlängerung 2:4.';
    barcelona.clubWorldCup2041={stage:'Viertelfinale',opponent:'Finn Harps',date:'29.06.2041',result:'2:4 n.V.',status:'ausgeschieden'};
    barcelona.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'FIFA CLUB WORLD CUP · VIERTELFINALE',headline:'Finn Harps 4:2 n.V. FC Barcelona'};
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-06-29';
    season.latestHeadline='Klub-WM: Finn Harps schlägt Barcelona in einem Viertelfinal-Krimi nach Verlängerung 4:2.';
    season.clubWorldCup={
      ...(season.clubWorldCup||{}),status:'Halbfinale',lastResult:'29.06.2041 · Finn Harps 4:2 n.V. FC Barcelona',
      latestResult:'Finn Harps 4:2 n.V. FC Barcelona',nextOpponent:'Noch nicht aus dem bereitgestellten Spielscreen ersichtlich',knockoutWins:2
    };
    season.changes=season.changes||{notes:[]};
    const note='29.06.2041: 4:2 n.V. gegen FC Barcelona im Klub-WM-Viertelfinale. Maisto erzwingt die Verlängerung, Blanco und Bruce entscheiden sie.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const updatePlayer=(id,name,narrative,update)=>{
    const player=(window.FM_PLAYERS||[]).find(x=>x.id===id||x.name===name);
    if(player){
      player.profileDate='2041-06-29';
      if(narrative){
        const entries=player.careerNarrative||[];
        if(!entries.includes(narrative))player.careerNarrative=[...entries,narrative];
      }
      player.matchUpdates=[...(player.matchUpdates||[]).filter(x=>!(x.date===update.date&&x.opponent===update.opponent&&x.competition===update.competition)),update];
      player.lastMatch=update;
    }
    window.FM_PLAYER_UPDATES.push({date:'2041-06-29',player:name,type:'club-world-cup-quarter-final',title:update.note,detail:`Finn Harps 4:2 n.V. FC Barcelona · Note ${update.rating??'–'}.`});
  };

  updatePlayer('darcy-andrews','Darcy Andrews','Darcy Andrews traf im Klub-WM-Viertelfinale gegen Barcelona zum 1:1, erhielt beim 4:2 nach Verlängerung mit 8,2 die beste Harps-Note und absolvierte zugleich seinen 350. Profieinsatz.',{date:'2041-06-29',opponent:'FC Barcelona',competition:'FIFA Club World Cup · Viertelfinale',result:'4:2 n.V.',goals:1,assists:0,rating:8.2,note:'Tor, beste Harps-Note und 350. Profieinsatz'});
  updatePlayer('romano-maisto','Romano Maisto','Romano Maisto rettete Finn Harps im Klub-WM-Viertelfinale gegen Barcelona mit dem 2:2 in der 73. Minute in die Verlängerung.',{date:'2041-06-29',opponent:'FC Barcelona',competition:'FIFA Club World Cup · Viertelfinale',result:'4:2 n.V.',goals:1,assists:0,rating:7.5,note:'Ausgleich in der 73. Minute erzwingt die Verlängerung'});
  updatePlayer('eduardo-blanco','Eduardo Blanco','Eduardo Blanco brachte Finn Harps im Klub-WM-Viertelfinale gegen Barcelona in der 97. Minute erstmals in Führung.',{date:'2041-06-29',opponent:'FC Barcelona',competition:'FIFA Club World Cup · Viertelfinale',result:'4:2 n.V.',goals:1,assists:0,rating:7.7,note:'3:2 in der Verlängerung'});
  updatePlayer('torric-bruce','Torric Bruce','Torric Bruce traf im Klub-WM-Viertelfinale gegen Barcelona in der 99. Minute zum 4:2 und machte den Doppelschlag der Verlängerung perfekt.',{date:'2041-06-29',opponent:'FC Barcelona',competition:'FIFA Club World Cup · Viertelfinale',result:'4:2 n.V.',goals:1,assists:0,rating:7.9,note:'4:2 nur zwei Minuten nach Blancos Führung'});

  const report={
    id:reportId,type:'Spielbericht',date:'2041-06-29',competition:'FIFA Club World Cup',fixtureDate:'Samstag, 29.06.2041',
    home:'Finn Harps',away:'FC Barcelona',score:'4:2 n.V.',location:'OL Stadium · Décines-Charpieu · 59.186 Zuschauer',
    headline:'Was für ein Viertelfinale: Finn Harps wirft Barça nach 120 Minuten raus',
    subheadline:'Zweimal liegt der Titelverteidiger zurück, zur Pause sogar 1:2. Maisto erzwingt die Verlängerung, dann schlagen Blanco und Bruce innerhalb von zwei Minuten zu.',
    label:'FIFA CLUB WORLD CUP · VIERTELFINALE · 4:2 N.V.',
    heroStat:{label:'Der Wendepunkt',value:'97. + 99. Minute',note:'Eduardo Blanco zum 3:2 · Torric Bruce zum 4:2'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Das war kein kontrollierter K.-o.-Sieg, sondern ein Fußballabend mit mehreren Leben. Barcelona ging durch Takashi Kobayashi in Führung, Darcy Andrews antwortete, James Ward stellte noch vor der Pause auf 1:2. Finn Harps musste dem Spiel hinterherlaufen, fand durch Romano Maisto zurück und zerlegte die Verlängerung dann mit einem Doppelschlag von Eduardo Blanco und Torric Bruce.',
    sections:[
      {title:'Barcelona trifft zuerst, Andrews antwortet',text:'Takashi Kobayashi brachte Barcelona in der 23. Minute mit 1:0 in Führung. Neun Minuten später glich Darcy Andrews aus. Der Innenverteidiger war nicht nur Torschütze, sondern mit der Note 8,2 auch der bestbewertete Harps-Spieler des Abends.'},
      {title:'Ward schickt die Harps mit Rückstand in die Pause',text:'James Ward traf in der 40. Minute zum 2:1 für Barcelona. Zur Halbzeit lag Finn Harps damit trotz des zwischenzeitlichen Ausgleichs zurück. Das Viertelfinale drohte zu kippen, ohne dass Barça die Partie statistisch völlig an sich gerissen hätte.'},
      {title:'Maisto rettet das Spiel in die Verlängerung',text:'Romano Maisto kam von der Bank und erzielte in der 73. Minute das 2:2. Dieses Tor veränderte die gesamte Partie. Nach 90 Minuten war kein Sieger gefunden, also ging es in die Verlängerung.'},
      {title:'Zwei Minuten, zwei Tore, Halbfinale',text:'In der 97. Minute brachte Eduardo Blanco Finn Harps erstmals in Führung. Nur zwei Minuten später traf Torric Bruce zum 4:2. Aus einem 1:2-Pausenrückstand war innerhalb der Verlängerung ein Zwei-Tore-Vorsprung geworden.'},
      {title:'Barcelona hatte mehr Ball, die Harps die entscheidenden Momente',text:'Barcelona hatte 57 Prozent Ballbesitz und 786 angekommene Pässe gegenüber 581 der Harps. Bei den Abschlüssen war die Partie nahezu ausgeglichen: 14:13 für Barcelona, jeweils sieben Schüsse aufs Tor. Genau in diesem engen Rahmen entschied Finn Harps die größeren Momente für sich.'},
      {title:'Ein Stadion halb in Harps-Hand',text:'59.186 Zuschauer sahen das Viertelfinale im OL Stadium. Der Spielscreen weist 29.593 Auswärtsfans aus. Für ein neutrales Klub-WM-Spiel ist das eine bemerkenswerte Kulisse und passt zu einem Abend, der sich längst nicht mehr nach Provinzklub anfühlt.'},
      {title:'Nebenbei fallen noch drei Karriere-Meilensteine',text:"Darcy Andrews absolvierte seinen 350. Profieinsatz, Cormac O'Kane seinen 225. Einsatz für Finn Harps und Giacomo Papini seinen 275. Profieinsatz. Paulo Henriques vorherige Serie ohne Gegentor endete nach 260 Minuten."}
    ],
    strengthsTitle:'WARUM FINN HARPS DIESES SPIEL GEWINNT',strengthsHeading:'Reaktion, Bank und Nerven',
    strengths:['Nach 0:1 und 1:2 jeweils zurück ins Spiel gekommen','Romano Maisto als Einwechselspieler mit dem 2:2','Blanco und Bruce entscheiden die Verlängerung innerhalb von zwei Minuten','Darcy Andrews mit Tor und Note 8,2','Callum Brennan mit starker Note 8,1','Sieben Schüsse aufs Tor bei nur 43 Prozent Ballbesitz','Halbfinaleinzug als amtierender Klub-Weltmeister'],
    vulnerabilitiesTitle:'WAS BARÇA FAST AUSGENUTZT HÄTTE',vulnerabilitiesHeading:'Der Weg ins Halbfinale war alles andere als sauber',
    vulnerabilities:['1:2-Rückstand zur Halbzeit','Barcelona mit 57 Prozent Ballbesitz und deutlich mehr angekommenen Pässen','20 Fouls auf beiden Seiten in einem sehr intensiven Spiel','Justin Ramsey blieb mit Note 6,1 unter seinem üblichen Einfluss','Das Spiel musste über 120 Minuten entschieden werden'],
    verdictHeading:'Ein Sieg, der größer wirkt als ein normales 4:2',
    verdict:'Finn Harps hat Barcelona nicht einfach geschlagen. Die Mannschaft musste zweimal auf einen Rückstand reagieren, überstand einen 1:2-Pausenstand und fand in der Verlängerung noch eine zweite Beschleunigungsstufe. Maistos Ausgleich und der Doppelschlag von Blanco und Bruce machen dieses Viertelfinale zu einem jener Spiele, die später nicht wegen einer Statistik, sondern wegen ihrer Dramaturgie erinnert werden. Nach Manchester City und Bayern ist nun auch Barcelona aus dem Weg. Der Titelverteidiger steht im Halbfinale.',
    sourcesHeading:'Spielbelege',
    sourcesNote:'Der Bericht basiert ausschließlich auf den bereitgestellten Football-Manager-Screenshots zur Spielübersicht und den Finn-Harps-Spielerstatistiken des Klub-WM-Viertelfinals am 29. Juni 2041.',
    sources:['FM-Spielübersicht Finn Harps – FC Barcelona · 29.06.2041','Finn-Harps-Spielerstatistiken · 29.06.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-29-klub-wm-barcelona',date:'2041-06-29',season:2041,category:'Klub-WM',accent:'gold',featured:true,
    eyebrow:'FIFA CLUB WORLD CUP · VIERTELFINALE · 4:2 N.V.',title:'Maisto rettet, Blanco und Bruce vollenden: Barça ist raus',
    summary:'Finn Harps dreht ein spektakuläres Viertelfinale gegen Barcelona. Nach 1:2 zur Pause erzwingt Maisto die Verlängerung, Blanco und Bruce treffen dort innerhalb von zwei Minuten zum 4:2.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','barcelona','darcy-andrews','romano-maisto','eduardo-blanco','torric-bruce','club-world-cup']
  });
})();