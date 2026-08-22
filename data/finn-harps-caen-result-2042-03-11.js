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

  const fixtureId='2042-03-11-finn-harps-caen-champions-league-round16-second-leg';
  const reportId='2042-03-11-finn-harps-caen-4-0-spielbericht';

  const match={
    id:fixtureId,date:'2042-03-11',season:2042,competition:'UEFA Champions League',stage:'Achtelfinale · Rückspiel',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    away:{id:'caen',name:'Caen',short:'CAE',score:0},
    score:'4:0',homeGoals:4,awayGoals:0,halfTime:'0:0',aggregate:'8:4',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:10000,awayFans:500,weather:'Feucht · 8 °C',referee:'Roman Ilchenko',
    headline:'Europäische Elite mit Ansage: Finn Harps zerlegt Caen 4:0 und zieht mit 8:4 ins Viertelfinale ein',
    verdict:'Nach dem wilden 4:4 im Hinspiel zeigt Finn Harps im Rückspiel eine völlig andere Reife. Die Harps kontrollieren Caen, lassen über 90 Minuten nur vier Abschlüsse und 0,45 xG zu und entscheiden die Partie nach der Pause mit vier Treffern. O’Kane öffnet in Minute 55 das Spiel, Docherty erhöht, Bruce und Papini vollenden die Demontage. Das 8:4 nach Hin- und Rückspiel ist nicht nur der Viertelfinaleinzug, sondern auch die sportliche Antwort auf das 1:4 gegen Caen im Klub-WM-Halbfinale 2041.',
    scorers:[
      {player:"Cormac O'Kane",team:'Finn Harps',goals:1,minutes:[55]},
      {player:'Dom Docherty',team:'Finn Harps',goals:1,minutes:[73]},
      {player:'Torric Bruce',team:'Finn Harps',goals:1,minutes:[80]},
      {player:'Giacomo Papini',team:'Finn Harps',goals:1,minutes:[87]}
    ],
    events:[
      {minute:55,type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'1:0'},
      {minute:73,type:'goal',team:'Finn Harps',player:'Dom Docherty',text:'2:0'},
      {minute:80,type:'goal',team:'Finn Harps',player:'Torric Bruce',text:'3:0 · nach VAR anerkannt'},
      {minute:87,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'4:0'}
    ],
    stats:[
      {label:'Schüsse',home:19,away:4,kind:'number'},
      {label:'Schüsse aufs Tor',home:9,away:1,kind:'number'},
      {label:'xG',home:2.15,away:0.45,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:5,away:3,kind:'number'},
      {label:'Großchancen',home:2,away:0,kind:'number'},
      {label:'Ballbesitz',home:57,away:43,kind:'percent'},
      {label:'Ecken',home:10,away:2,kind:'number'},
      {label:'Fouls',home:13,away:14,kind:'number'},
      {label:'Angekommene Pässe',home:482,away:367,kind:'number',homeDetail:'88 % · 482/550',awayDetail:'85 % · 367/434'},
      {label:'Gewonnene Zweikämpfe',home:88,away:69,kind:'percent',homeDetail:'32/37',awayDetail:'24/27'},
      {label:'Gewonnene Kopfbälle',home:59,away:38,kind:'percent',homeDetail:'22/37',awayDetail:'15/39'},
      {label:'Mannschaftsnote',home:7.26,away:6.43,kind:'decimal'},
      {label:'Intensive Sprints',home:124,away:100,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':7.4,'Callum Brennan':7.3,'Torric Bruce':7.8,'Daniele Di Maio':7.8,'Kevin Kelly':6.7,
      'Diego Fernández':6.8,'Pol Muñoz':6.7,"Cormac O'Kane":7.8,'Billy Walker':6.7,'Romano Maisto':6.7,
      'Emerson Escárcega':6.8,'Amir Mašić':7.0,'Giacomo Papini':8.1,'Daryl Frame':6.8,'Dom Docherty':7.7,'Gustavo da Silva':7.6
    },
    standout:[
      {player:'Giacomo Papini',team:'Finn Harps',rating:8.1,goals:1,note:'Bester Harps-Spieler nach Rating. Papini setzt in Minute 87 mit dem 4:0 den Schlusspunkt unter einen taktisch dominanten Abend.'},
      {player:"Cormac O'Kane",team:'Finn Harps',rating:7.8,goals:1,note:'Bricht nach torloser erster Hälfte mit einem abgefälschten Volley aus rund 20 Metern den Widerstand.'},
      {player:'Torric Bruce',team:'Finn Harps',rating:7.8,goals:1,note:'Defensiv Teil einer nahezu makellosen Vorstellung und offensiv mit dem nach VAR anerkannten 3:0.'}
    ],
    analysis:{
      contrast:'Das Hinspiel war ein offener Schlagabtausch mit 16:16 Schüssen und 4:4 Toren. Im Rückspiel nimmt Finn Harps Caen genau diese Offenheit. Nur vier Abschlüsse und 0,45 xG für die Franzosen zeigen, wie stark die Harps den Gegner strukturell kontrollieren.',
      firstHalf:'Zur Pause steht es 0:0. Finn Harps jagt nicht blind dem Führungstor hinterher, sondern hält Caen aus den gefährlichen Räumen und wartet auf den Moment, in dem sich das Spiel öffnet.',
      secondHalf:'O’Kanes Treffer in der 55. Minute verändert die Partie. Caen muss mehr riskieren, Finn Harps bekommt Räume und nutzt sie konsequent. Docherty trifft in Minute 73, Bruce in Minute 80 und Papini in Minute 87.',
      tactical:'Die Zahlen zeichnen ein klares Bild: 19:4 Schüsse, 9:1 aufs Tor, 57 Prozent Ballbesitz, 10:2 Ecken und 2,15:0,45 xG. Nach dem Chaos des Hinspiels gewinnt Finn Harps diesmal über Kontrolle, Geduld und bessere Entscheidungen.',
      history:'Das Duell schließt zugleich eine offene Rechnung. Caen warf Finn Harps im Juli 2041 mit einem 4:1 aus dem Klub-WM-Halbfinale. Acht Monate später gewinnt Finn Harps das Rückspiel dieses Champions-League-Duells ebenfalls 4:0 und setzt sich über beide Spiele mit 8:4 durch.',
      elite:'Genau solche Abende erklären, warum Finn Harps inzwischen zur europäischen Elite gehören. Nicht das 4:0 allein ist das Statement, sondern die Fähigkeit, nach einem völlig wilden Hinspiel die gleiche Mannschaft im Rückspiel taktisch fast komplett aus dem Spiel zu nehmen.'
    },
    notes:[
      'Finn Harps gewinnt das Achtelfinal-Rückspiel 4:0 und zieht mit 8:4 nach Gesamtergebnis ins Viertelfinale ein.',
      'Caen kommt nur auf vier Schüsse, einen Abschluss aufs Tor und 0,45 xG.',
      'Vier verschiedene Harps-Torschützen: O’Kane, Docherty, Bruce und Papini.',
      'Nach dem 4:4 im Hinspiel bleibt Finn Harps im Rückspiel ohne Gegentor.',
      'Revanche für das 1:4 gegen Caen im Klub-WM-Halbfinale 2041.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Caen · 11.03.2042','Finn-Harps-Spielerstatistiken · 11.03.2042','90min.com Spielbericht · Finn Harps 4:0 Caen']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const caen=window.FM_CLUBS.find(x=>x.id==='caen'||x.name==='Caen'||x.name==='Stade Malherbe Caen Calvados');
  if(caen){
    caen.meetings=caen.meetings||[];
    const meeting={date:'11.03.2042',competition:'UEFA Champions League · Achtelfinale · Rückspiel',venue:'Donegal Stadium · Stranorlar',result:'0:4'};
    const idx=caen.meetings.findIndex(x=>x.date===meeting.date&&x.competition===meeting.competition);
    if(idx>=0)caen.meetings[idx]=meeting;else caen.meetings.unshift(meeting);
    caen.lastMeeting='11.03.2042 · Finn Harps 4:0 Caen';
    caen.lastTie={competition:'UEFA Champions League · Achtelfinale 2041/42',firstLeg:'Caen 4:4 Finn Harps',secondLeg:'Finn Harps 4:0 Caen',aggregate:'Finn Harps 8:4 Caen',winner:'Finn Harps'};
    caen.summary='Nach einem spektakulären 4:4 in Frankreich wird Caen im Rückspiel im Donegal Stadium taktisch ausgebremst und verliert 0:4. Finn Harps zieht mit 8:4 nach Gesamtergebnis ins Champions-League-Viertelfinale ein.';
    caen.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · ACHTELFINALE',headline:'Vom 4:4 zum 4:0: Finn Harps nimmt Caen auseinander'};
  }

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  current.knockoutStage=current.knockoutStage||{};
  current.knockoutStage.roundOf16=current.knockoutStage.roundOf16||{};
  current.knockoutStage.roundOf16.finnHarps={
    ...(current.knockoutStage.roundOf16.finnHarps||{}),opponent:'Caen',
    firstLeg:{date:'2042-03-05',venue:'A',score:'4:4',home:'Caen',away:'Finn Harps',status:'gespielt'},
    secondLeg:{date:'2042-03-11',venue:'H',score:'4:0',home:'Finn Harps',away:'Caen',status:'gespielt'},
    aggregate:'8:4',status:'weiter',winner:'Finn Harps',qualifiedFor:'Viertelfinale',
    storyline:'Nach dem wilden 4:4 in Caen liefert Finn Harps zuhause eine taktische Machtdemonstration. 19:4 Schüsse und 2,15:0,45 xG münden in ein 4:0 und einen 8:4-Gesamtsieg.'
  };
  current.headline='Finn Harps steht im Champions-League-Viertelfinale: Nach dem 4:4 in Caen gewinnen die Harps das Rückspiel 4:0 und das Duell insgesamt 8:4.';
  window.FM_CHAMPIONS_LEAGUE['2041-42']=current;

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-03-11';
    season.latestHeadline='Champions League: Finn Harps zerlegt Caen im Rückspiel 4:0 und zieht mit 8:4 nach Gesamtergebnis ins Viertelfinale ein.';
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.roundOf16={
      ...(season.championsLeague.roundOf16||{}),opponent:'Caen',firstLeg:'05.03.2042 · Caen 4:4 Finn Harps',secondLeg:'11.03.2042 · Finn Harps 4:0 Caen',aggregate:'8:4',status:'gewonnen',qualifiedFor:'Viertelfinale'
    };
    season.nextFocus={competition:'UEFA Champions League',stage:'Viertelfinale',status:'qualifiziert',opponent:'noch offen'};
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='11.03.2042: Finn Harps gewinnt das Champions-League-Achtelfinal-Rückspiel gegen Caen 4:0 und zieht mit 8:4 nach Gesamtergebnis ins Viertelfinale ein. Nach dem wilden Hinspiel wird Caen im Donegal Stadium auf vier Schüsse und 0,45 xG begrenzt.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-03-11-cormac-okane-caen-breakthrough',date:'2042-03-11',player:"Cormac O'Kane",type:'goal',title:'O’Kane öffnet das Viertelfinal-Tor',detail:'Trifft in der 55. Minute zum 1:0 und löst nach einer kontrollierten ersten Hälfte die entscheidende Phase aus.'},
    {id:'2042-03-11-dom-docherty-caen-goal',date:'2042-03-11',player:'Dom Docherty',type:'goal',title:'Docherty erhöht gegen Caen',detail:'Trifft in der 73. Minute zum 2:0.'},
    {id:'2042-03-11-torric-bruce-caen-goal',date:'2042-03-11',player:'Torric Bruce',type:'standout',title:'Bruce trifft und hält hinten dicht',detail:'Das 3:0 wird nach VAR anerkannt. Gleichzeitig hilft Bruce dabei, Caen auf nur 0,45 xG zu begrenzen.'},
    {id:'2042-03-11-giacomo-papini-caen-clincher',date:'2042-03-11',player:'Giacomo Papini',type:'standout',title:'Papini setzt den Schlusspunkt',detail:'Erzielt in Minute 87 das 4:0 und erhält mit 8,1 die beste Harps-Note.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-03-11',competition:'UEFA Champions League',fixtureDate:'11.03.2042',
    home:'Finn Harps',away:'Caen',score:'4:0',aggregate:'8:4',location:'Donegal Stadium · Stranorlar · 10.000 Zuschauer',
    headline:'Europäische Elite mit Ansage: Harps zerlegen Caen 4:0',
    subheadline:'Sechs Tage nach dem wilden 4:4 zeigt Finn Harps seine andere Seite. Caen wird auf vier Schüsse und 0,45 xG reduziert, während O’Kane, Docherty, Bruce und Papini nach der Pause treffen. Mit 8:4 nach Gesamtergebnis stehen die Harps im Viertelfinale.',
    heroStat:{label:'Achtelfinale gesamt',value:'Finn Harps 8:4 Caen',note:'Hinspiel 4:4 · Rückspiel 4:0'},
    sections:[
      {title:'Vom Chaos zur Kontrolle',text:'Das Hinspiel war ein Acht-Tore-Spektakel ohne Sicherheitsgurt. Im Rückspiel entscheidet Finn Harps, dass genau dieses Spiel diesmal nicht stattfindet. Die Harps kontrollieren Tempo und Räume, geben Caen nur vier Abschlüsse und halten die Franzosen bei 0,45 xG.'},
      {title:'Geduld bis zur 55. Minute',text:'Zur Pause steht es 0:0. Statt nervös zu werden, bleibt Finn Harps bei seinem Plan. O’Kanes abgefälschter Volley aus rund 20 Metern bringt die Führung. Von diesem Moment an muss Caen öffnen, und die Harps bestrafen jeden zusätzlichen Raum.'},
      {title:'Vier Treffer, vier Torschützen',text:'Docherty erhöht in Minute 73, Bruce bekommt sein zunächst aberkanntes 3:0 nach VAR zugesprochen und Papini köpft in Minute 87 das 4:0. Die Tore verteilen sich auf vier Spieler, während die Defensive gleichzeitig fast nichts zulässt.'},
      {title:'Die offene Rechnung ist bezahlt',text:'Im Juli 2041 hatte Caen Finn Harps im Klub-WM-Halbfinale mit 4:1 aus dem Turnier geschossen. Dieses Mal endet das K.-o.-Duell anders: 4:4 in Frankreich, 4:0 in Stranorlar, 8:4 insgesamt. Aus der alten Niederlage wird eine der klarsten taktischen Antworten der jüngeren Harps-Geschichte.'},
      {title:'Warum Finn Harps zur Elite gehören',text:'Europäische Spitzenmannschaften müssen mehr können als spektakulär angreifen. Sie müssen ein Duell lesen, aus dem Hinspiel lernen und ihre Spielweise anpassen. Genau das gelingt Finn Harps. Nach acht Toren im Hinspiel folgt ein kontrolliertes 4:0. Nicht nur das Ergebnis, sondern die Art dieses Sieges ist das eigentliche Statement.'}
    ],
    verdictHeading:'Nicht überrollt, sondern auseinandergenommen',
    verdict:'Caen wird nicht durch einen frühen Sturm überfahren. Finn Harps nimmt dem Gegner zuerst die Räume, hält das Spiel eine Stunde unter Kontrolle und schlägt dann viermal zu. 19:4 Schüsse und 2,15:0,45 xG machen das 4:0 zu einer taktischen Machtdemonstration. Das Viertelfinale ist verdient, und die Klub-WM-Narbe von 2041 ist endgültig geschlossen.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-03-11-finn-harps-caen-quarterfinal',date:'2042-03-11',type:'Champions League',importance:'major',
    title:'4:0 gegen Caen: Finn Harps zieht mit 8:4 ins Viertelfinale ein',
    summary:'Nach dem 4:4 im Hinspiel kontrolliert Finn Harps das Rückspiel komplett. O’Kane, Docherty, Bruce und Papini treffen, Caen bleibt bei 0,45 xG.',
    href:`presse.html?id=${reportId}`
  });
})();