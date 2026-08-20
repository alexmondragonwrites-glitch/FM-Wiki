(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2042-01-22-finn-harps-anderlecht-champions-league';
  const reportId='2042-01-22-finn-harps-anderlecht-spielbericht';

  const match={
    id:fixtureId,date:'2042-01-22',season:2042,competition:'UEFA Champions League',stage:'Ligaphase · 7. Spieltag',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:2},
    away:{id:'anderlecht',name:'RSC Anderlecht',short:'AND',score:0},
    score:'2:0',homeGoals:2,awayGoals:0,halfTime:'1:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:10000,awayFans:500,weather:'Windig · 16 °C',referee:'Nicht bekannt',
    headline:'Späte Schläge in beiden Halbzeiten: Finn Harps schlägt Anderlecht 2:0',
    verdict:'Finn Harps kontrolliert Anderlecht über weite Strecken und setzt die entscheidenden Treffer jeweils tief in der Nachspielzeit der beiden Halbzeiten. Romano Maisto trifft in 45+2, Pol Muñoz macht in 90+3 alles klar. Mit 18 Punkten aus sieben Spielen springen die Harps auf Rang zwei der Champions-League-Ligaphase.',
    scorers:[
      {player:'Romano Maisto',team:'Finn Harps',goals:1,minutes:['45+2']},
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:['90+3']}
    ],
    events:[
      {minute:'45+2',type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'1:0'},
      {minute:'90+3',type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'2:0'}
    ],
    stats:[
      {label:'Schüsse',home:9,away:4,kind:'number'},
      {label:'Schüsse aufs Tor',home:4,away:1,kind:'number'},
      {label:'xG',home:1.41,away:0.36,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:4,away:3,kind:'number'},
      {label:'Großchancen',home:2,away:0,kind:'number'},
      {label:'Ballbesitz',home:67,away:33,kind:'percent'},
      {label:'Ecken',home:6,away:3,kind:'number'},
      {label:'Fouls',home:13,away:17,kind:'number'},
      {label:'Angekommene Pässe',home:616,away:305,kind:'number',homeDetail:'89 % · 616/696',awayDetail:'81 % · 305/376'}
    ],
    championsLeagueAfterMatch:{position:2,played:7,wins:6,draws:0,losses:1,goalsFor:14,goalsAgainst:3,goalDifference:11,points:18},
    ratings:{
      'Paulo Henrique':7.4,'Diego Fernández':7.2,'Darcy Andrews':7.3,'Torric Bruce':7.1,'Gustavo da Silva':6.8,
      'Amir Mašić':7.4,'Pol Muñoz':7.8,"Cormac O'Kane":6.7,'Billy Walker':6.8,'Romano Maisto':8.2,
      'Emerson Escárcega':6.3,"Jim O'Neill":6.7,'Callum Brennan':6.9,'Justin Ramsey':6.6,'Giacomo Papini':6.8,'Kevin Kelly':6.8
    },
    standout:{player:'Romano Maisto',team:'Finn Harps',rating:8.2,goals:1,note:'Bricht Anderlechts Widerstand in 45+2 und erhält die beste Harps-Note des Abends.'},
    secondStandout:{player:'Pol Muñoz',team:'Finn Harps',rating:7.8,goals:1,note:'Setzt in 90+3 den Schlusspunkt und belohnt eine kontrollierte Harps-Leistung.'},
    analysis:{
      summary:'Die Harps bestimmen das Spiel mit 67 Prozent Ballbesitz, 616 angekommenen Pässen und einem klaren Chancenplus. Anderlecht kommt nur auf vier Abschlüsse und einen Schuss aufs Tor.',
      timing:'Das Muster des Abends ist ungewöhnlich klar: Beide Tore fallen tief in der Nachspielzeit. Maisto trifft unmittelbar vor der Pause, Muñoz unmittelbar vor dem Abpfiff.',
      control:'Mit 1,41:0,36 xG, 9:4 Schüssen und 2:0 Großchancen ist der 2:0-Sieg statistisch gut unterfüttert. Die Harps lassen Anderlecht kaum zu klaren Abschlüssen kommen.',
      table:'Nach sieben Ligaphasen-Spielen steht Finn Harps bei 18 Punkten und 14:3 Toren auf Platz zwei. Vor dem letzten Spiel gegen AEK ist damit eine hervorragende Ausgangslage geschaffen.'
    },
    notes:[
      'Romano Maisto wird mit Note 8,2 als bester Harps-Spieler geführt.',
      'Pol Muñoz trifft in der 90.+3 Minute zum 2:0.',
      'Finn Harps steht nach sieben Champions-League-Spielen bei sechs Siegen und nur einer Niederlage.'
    ],
    sources:['FM-Spielübersicht Finn Harps – RSC Anderlecht · 22.01.2042','Finn-Harps-Spielerstatistiken · 22.01.2042','Champions-League-Tabelle nach dem 7. Spieltag · 22.01.2042']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const anderlecht=window.FM_CLUBS.find(x=>x.id==='anderlecht'||x.name==='RSC Anderlecht'||x.name==='Anderlecht');
  if(anderlecht){
    anderlecht.meetings=anderlecht.meetings||[];
    const meeting={date:'22.01.2042',venue:'H',result:'2:0',competition:'UEFA Champions League · Ligaphase'};
    const idx=anderlecht.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)anderlecht.meetings[idx]=meeting;else anderlecht.meetings.push(meeting);
    anderlecht.lastMeeting='22.01.2042 · Finn Harps 2:0 RSC Anderlecht';
    anderlecht.summary='Finn Harps gewinnt das Champions-League-Heimspiel am 22. Januar 2042 mit 2:0. Romano Maisto trifft in 45+2, Pol Muñoz in 90+3. Anderlecht kommt bei 33 Prozent Ballbesitz nur auf vier Schüsse und einen Abschluss aufs Tor.';
    anderlecht.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Späte Schläge in beiden Halbzeiten: Harps schlagen Anderlecht 2:0'};
  }

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...current,
    season:'2041/42',format:'Ligaphase',
    matchday7:{...(current.matchday7||{}),finnHarpsResult:{date:'2042-01-22',home:'Finn Harps',away:'RSC Anderlecht',score:'2:0'}},
    standingsSnapshot:{
      ...(current.standingsSnapshot||{}),date:'2042-01-22',
      finnHarps:{position:2,played:7,wins:6,draws:0,losses:1,goalsFor:14,goalsAgainst:3,goalDifference:11,points:18}
    },
    headline:'Finn Harps schlägt Anderlecht 2:0 und steht vor dem letzten Ligaphasen-Spiel mit 18 Punkten auf Rang zwei.'
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-01-22';
    season.latestHeadline='Champions League: Finn Harps schlägt Anderlecht 2:0 und springt mit 18 Punkten auf Platz zwei der Ligaphase.';
    season.championsLeagueLeaguePhase={
      ...(season.championsLeagueLeaguePhase||{}),played:7,wins:6,draws:0,losses:1,goalsFor:14,goalsAgainst:3,goalDifference:11,points:18,position:2,
      latestResult:'22.01.2042 · Finn Harps 2:0 RSC Anderlecht'
    };
    season.changes=season.changes||{notes:[]};
    const note='22.01.2042: Finn Harps schlägt Anderlecht 2:0. Maisto trifft in 45+2, Pol Muñoz in 90+3. Nach sieben Champions-League-Spielen: 18 Punkte, 14:3 Tore, Platz 2.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2042-01-22-romano-maisto-anderlecht-goal',date:'2042-01-22',player:'Romano Maisto',type:'goal',title:'Maisto öffnet das Spiel spät in Hälfte eins',detail:'Trifft in 45+2 zum 1:0 gegen Anderlecht und wird mit Note 8,2 zum besten Harps-Spieler des Abends.'},
    {id:'2042-01-22-pol-munoz-anderlecht-goal',date:'2042-01-22',player:'Pol Muñoz',type:'goal',title:'Muñoz setzt den Schlusspunkt',detail:'Trifft in 90+3 zum 2:0 gegen Anderlecht und erhält Note 7,8.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-01-22',competition:'UEFA Champions League',fixtureDate:'22.01.2042',
    home:'Finn Harps',away:'RSC Anderlecht',score:'2:0',location:'Donegal Stadium · Stranorlar · 10.000 Zuschauer',
    headline:'Späte Schläge in beiden Halbzeiten: Harps schlagen Anderlecht 2:0',
    subheadline:'Romano Maisto trifft in 45+2, Pol Muñoz in 90+3. Dazwischen kontrolliert Finn Harps Ball, Raum und Rhythmus und lässt Anderlecht nur einen Schuss aufs Tor.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · FINN HARPS 2:0 ANDERLECHT',
    heroStat:{label:'Tore',value:'45+2 & 90+3',note:'Maisto öffnet · Muñoz schließt'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Es ist eines dieser Spiele, in denen Geduld nicht passiv wirkt, sondern wie Druck in einem geschlossenen Kessel. Finn Harps hält Anderlecht über weite Strecken vom eigenen Tor fern, zirkuliert den Ball mit 67 Prozent Besitz und schlägt genau dann zu, wenn die Belgier gedanklich bereits auf dem Weg in die Kabine sind: einmal vor der Pause, einmal vor dem Abpfiff.',
    sections:[
      {title:'Maisto trifft mit dem letzten Atemzug der ersten Hälfte',text:'Anderlecht hält das 0:0 fast bis zur Pause. Dann schlägt Romano Maisto in 45+2 zu. Der Treffer verändert die Statik des Abends: Finn Harps muss nicht mehr erzwingen, Anderlecht muss öffnen.'},
      {title:'Kontrolle statt Hektik',text:'Die Harps kommen auf 67 Prozent Ballbesitz und 616 angekommene Pässe. Anderlecht bleibt bei 33 Prozent und 305 erfolgreichen Pässen. Auch das Chancenbild ist klar: 9:4 Schüsse, 4:1 aufs Tor und 1,41:0,36 xG.'},
      {title:'Muñoz macht es in 90+3 endgültig',text:'Anderlecht bleibt formal bis in die Nachspielzeit im Spiel, schafft aber kaum Druck. Pol Muñoz beendet die Restspannung mit dem 2:0 in 90+3. Zwei Halbzeiten, zwei späte Treffer, ein sehr erwachsener Sieg.'},
      {title:'Platz zwei vor dem letzten Ligaphasen-Spiel',text:'Mit sechs Siegen aus sieben Spielen, 18 Punkten und 14:3 Toren steht Finn Harps nach diesem Abend auf Rang zwei. Vor dem abschließenden Ligaphasen-Spiel gegen AEK ist die Ausgangslage exzellent.'}
    ],
    keyDuelsTitle:'SCHLÜSSELPUNKTE',keyDuelsHeading:'Warum der Abend an Finn Harps geht',
    keyDuels:[
      {title:'Maisto gegen die Uhr',text:'45+2 statt 0:0 zur Pause. Der Zeitpunkt des Führungstreffers nimmt Anderlecht genau den psychologisch wichtigen Gang in die Kabine.'},
      {title:'Harps-Ballbesitz gegen Anderlechts Zugriff',text:'67 Prozent Ballbesitz und 616 angekommene Pässe zeigen, dass Finn Harps die Partie nicht über Chaos, sondern über Kontrolle gewinnt.'},
      {title:'Muñoz gegen die Resthoffnung',text:'90+3, 2:0, Ende. Muñoz verwandelt ein kontrolliertes 1:0 in einen klaren Champions-League-Sieg.'}
    ],
    verdictHeading:'Ein Sieg mit sehr wenig Verschwendung',
    verdict:'Finn Harps braucht keinen offenen Schlagabtausch und keine Welle von Chancen. Neun Abschlüsse reichen, weil Anderlecht selbst fast vollständig neutralisiert wird. Das Timing der beiden Treffer macht den Abend besonders: Maisto und Muñoz setzen jeweils genau dann den Stich, wenn die Halbzeit eigentlich schon beendet scheint.',
    stats:match.stats,
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-01-22-finn-harps-anderlecht-result',date:'2042-01-22',season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · 7. SPIELTAG',
    title:'Maisto und Muñoz schlagen spät zu: Finn Harps 2:0 Anderlecht',
    summary:'Tore in 45+2 und 90+3 entscheiden einen kontrollierten Champions-League-Abend. Finn Harps steht nach sieben Spielen mit 18 Punkten und 14:3 Toren auf Rang zwei.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','anderlecht','romano-maisto','pol-munoz','season-2042']
  });
})();