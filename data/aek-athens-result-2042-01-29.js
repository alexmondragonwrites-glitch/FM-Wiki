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

  const fixtureId='2042-01-29-finn-harps-aek-champions-league';
  const reportId='2042-01-29-finn-harps-aek-spielbericht';

  const match={
    id:fixtureId,date:'2042-01-29',season:2042,competition:'UEFA Champions League',stage:'Ligaphase · 8. Spieltag',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:5},
    away:{id:'aek-athens',name:'AEK Athens',short:'AEK',score:3},
    score:'5:3',homeGoals:5,awayGoals:3,halfTime:'3:1',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:10000,awayFans:500,weather:'Windig · Nieselregen · 11 °C',referee:'Nicht bekannt',
    headline:'Acht Tore zum Abschluss: Finn Harps schlägt AEK 5:3 und beendet die Ligaphase auf Platz zwei',
    verdict:'Was für ein Abschluss der Champions-League-Ligaphase: AEK geht früh in Führung, Finn Harps antwortet innerhalb einer Minute und dreht das Spiel noch vor der Pause auf 3:1. Nach dem Seitenwechsel fallen weitere vier Treffer. Fünf verschiedene Harps-Torschützen und ein herausragender Dom Docherty sichern den siebten Sieg im achten Spiel. Mit 21 Punkten und +13 Tordifferenz beendet Finn Harps die Ligaphase hinter Barcelona auf Rang zwei und zieht direkt in die K.-o.-Phase ein.',
    scorers:[
      {player:'Rodrigo Medina',team:'AEK Athens',goals:1,minutes:[14]},
      {player:"Cormac O'Kane",team:'Finn Harps',goals:1,minutes:[15]},
      {player:'Callum Brennan',team:'Finn Harps',goals:1,minutes:[18]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[36]},
      {player:'Dom Docherty',team:'Finn Harps',goals:1,minutes:[55]},
      {player:'Antoine Giraudeau',team:'AEK Athens',goals:2,minutes:[58,'90+1']},
      {player:'Jake Roberts',team:'Finn Harps',goals:1,minutes:[66]}
    ],
    events:[
      {minute:14,type:'goal',team:'AEK Athens',player:'Rodrigo Medina',text:'0:1'},
      {minute:15,type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'1:1'},
      {minute:18,type:'goal',team:'Finn Harps',player:'Callum Brennan',text:'2:1'},
      {minute:36,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'3:1'},
      {minute:55,type:'goal',team:'Finn Harps',player:'Dom Docherty',text:'4:1'},
      {minute:58,type:'goal',team:'AEK Athens',player:'Antoine Giraudeau',text:'4:2'},
      {minute:64,type:'yellow',team:'AEK Athens',player:'Jordyn Townsley',text:'Gelbe Karte'},
      {minute:66,type:'goal',team:'Finn Harps',player:'Jake Roberts',text:'5:2'},
      {minute:80,type:'injury',team:'AEK Athens',player:'David Lacombe',text:'Verletzt ausgewechselt'},
      {minute:'90+1',type:'goal',team:'AEK Athens',player:'Antoine Giraudeau',text:'5:3'}
    ],
    stats:[
      {label:'Schüsse',home:26,away:9,kind:'number'},
      {label:'Schüsse aufs Tor',home:11,away:4,kind:'number'},
      {label:'xG',home:3.56,away:1.28,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:8,away:2,kind:'number'},
      {label:'Großchancen',home:3,away:1,kind:'number'},
      {label:'Ballbesitz',home:71,away:29,kind:'percent'},
      {label:'Ecken',home:12,away:7,kind:'number'},
      {label:'Fouls',home:11,away:7,kind:'number'},
      {label:'Angekommene Pässe',home:551,away:222,kind:'number',homeDetail:'86 % · 551/624',awayDetail:'70 % · 222/291'}
    ],
    championsLeagueAfterMatch:{position:2,played:8,wins:7,draws:0,losses:1,goalDifference:13,points:21,directQualification:true},
    finalLeaguePhaseTop8:[
      {position:1,team:'Barcelona',played:8,wins:7,draws:1,losses:0,goalDifference:14,points:22},
      {position:2,team:'Finn Harps',played:8,wins:7,draws:0,losses:1,goalDifference:13,points:21},
      {position:3,team:'Tottenham',played:8,wins:6,draws:1,losses:1,goalDifference:21,points:19},
      {position:4,team:'Inter',played:8,wins:6,draws:0,losses:2,goalDifference:9,points:18},
      {position:5,team:'Monaco',played:8,wins:6,draws:0,losses:2,goalDifference:6,points:18},
      {position:6,team:'Man City',played:8,wins:5,draws:2,losses:1,goalDifference:13,points:17},
      {position:7,team:'Chelsea',played:8,wins:5,draws:2,losses:1,goalDifference:6,points:17},
      {position:8,team:'Arsenal',played:8,wins:4,draws:4,losses:0,goalDifference:10,points:16}
    ],
    opponentAfterMatch:{team:'AEK Athens',position:26,played:8,wins:2,draws:2,losses:4,goalDifference:-4,points:8},
    ratings:{
      'Paulo Henrique':6.3,'Callum Brennan':7.7,'Darcy Andrews':6.9,'Mareks Istrankins':6.8,'Kevin Kelly':7.1,
      "Jim O'Neill":7.1,'Pol Muñoz':6.7,"Cormac O'Kane":8.0,'Giacomo Papini':6.5,'Dom Docherty':9.4,
      'Justin Ramsey':7.2,'Amir Mašić':6.7,'Emerson Escárcega':7.3,'Billy Walker':6.4,'Gustavo da Silva':7.1,'Jake Roberts':7.5
    },
    standout:{player:'Dom Docherty',team:'Finn Harps',rating:9.4,goals:1,assists:2,note:'Ein Tor, zwei Vorlagen und die mit Abstand beste Harps-Note des Abends. Er ist der kreative Motor eines wilden 5:3.'},
    analysis:{
      summary:'Finn Harps dominiert AEK offensiv mit 26:9 Schüssen, 11:4 Abschlüssen aufs Tor, 3,56:1,28 xG und 71 Prozent Ballbesitz. Dass dennoch acht Tore fallen, macht aus einer klaren Harps-Leistung ein spektakuläres Ligaphasen-Finale.',
      opening:'AEK trifft durch Rodrigo Medina in der 14. Minute zum 0:1. Cormac O’Kane antwortet nur eine Minute später, Brennan dreht die Partie in Minute 18. Nach Escárcegas 3:1 in der 36. Minute ist die erste Hälfte komplett gekippt.',
      secondHalf:'Docherty erhöht in der 55. Minute, Giraudeau verkürzt drei Minuten später. Jake Roberts stellt in der 66. Minute auf 5:2. Giraudeaus zweiter Treffer in 90+1 verändert nur noch die Optik des Ergebnisses.',
      variety:'Die fünf Harps-Tore verteilen sich auf fünf verschiedene Spieler: O’Kane, Brennan, Escárcega, Docherty und Roberts. Der Angriff ist damit nicht von einem einzigen Vollstrecker abhängig.',
      table:'Der Sieg bringt Finn Harps auf 21 Punkte aus acht Spielen. Nur Barcelona liegt mit 22 Punkten davor. Tottenham folgt mit 19 Punkten. Rang zwei bedeutet direkte Qualifikation für die nächste K.-o.-Runde ohne Playoff-Umweg.'
    },
    notes:[
      'Finn Harps beendet die Champions-League-Ligaphase mit sieben Siegen aus acht Spielen.',
      '21 Punkte und Platz zwei hinter Barcelona.',
      'Dom Docherty liefert mit einem Tor, zwei Vorlagen und Note 9,4 die herausragende Einzelleistung.',
      'Fünf verschiedene Harps-Spieler treffen gegen AEK.',
      'AEK beendet die Ligaphase auf Rang 26 mit acht Punkten.'
    ],
    sources:['FM-Spielübersicht Finn Harps – AEK Athens · 29.01.2042','Finn-Harps-Spielerstatistiken · 29.01.2042','Champions-League-Abschlusstabelle Ligaphase · 29.01.2042']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const aek=window.FM_CLUBS.find(x=>x.id==='aek-athens'||x.id==='aek'||x.name==='AEK Athens'||x.name==='AEK');
  if(aek){
    aek.meetings=aek.meetings||[];
    const meeting={date:'29.01.2042',venue:'H',result:'5:3',competition:'UEFA Champions League · Ligaphase'};
    const idx=aek.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)aek.meetings[idx]=meeting;else aek.meetings.push(meeting);
    aek.lastMeeting='29.01.2042 · Finn Harps 5:3 AEK Athens';
    aek.summary='Finn Harps gewinnt das letzte Champions-League-Ligaphasenspiel 2041/42 mit 5:3 gegen AEK. Trotz eines frühen Rückstands drehen die Harps die Partie noch vor der Pause. AEK beendet die Ligaphase mit acht Punkten auf Rang 26.';
    aek.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Acht Tore zum Abschluss: Harps schlagen AEK 5:3 und werden Zweiter'};
  }

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...current,
    season:'2041/42',format:'Ligaphase',completed:true,
    matchday8:{...(current.matchday8||{}),finnHarpsResult:{date:'2042-01-29',home:'Finn Harps',away:'AEK Athens',score:'5:3'}},
    finalStandings:{date:'2042-01-29',top8:match.finalLeaguePhaseTop8,finnHarps:match.championsLeagueAfterMatch,aek:match.opponentAfterMatch},
    headline:'Finn Harps beendet die Champions-League-Ligaphase nach einem 5:3 gegen AEK mit 21 Punkten auf Rang zwei und qualifiziert sich direkt für die K.-o.-Phase.'
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-01-29';
    season.latestHeadline='Champions League: 5:3 gegen AEK, 21 Punkte und Platz zwei. Finn Harps beendet die Ligaphase direkt hinter Barcelona.';
    season.championsLeagueLeaguePhase={
      ...(season.championsLeagueLeaguePhase||{}),completed:true,played:8,wins:7,draws:0,losses:1,goalDifference:13,points:21,position:2,directQualification:true,
      latestResult:'29.01.2042 · Finn Harps 5:3 AEK Athens',finalTop8:match.finalLeaguePhaseTop8
    };
    season.changes=season.changes||{notes:[]};
    const note='29.01.2042: Spektakuläres 5:3 gegen AEK zum Abschluss der Champions-League-Ligaphase. Finn Harps beendet die Ligaphase mit 21 Punkten auf Platz 2 hinter Barcelona und qualifiziert sich direkt für die K.-o.-Phase.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2042-01-29-dom-docherty-aek-masterclass',date:'2042-01-29',player:'Dom Docherty',type:'standout',title:'Ein Tor, zwei Vorlagen, Note 9,4',detail:'Docherty prägt das 5:3 gegen AEK mit einem Tor und zwei Vorlagen und erhält die beste Note des Spiels.'},
    {id:'2042-01-29-cormac-okane-aek-goal',date:'2042-01-29',player:"Cormac O'Kane",type:'goal',title:'Sofortige Antwort auf AEKs Führung',detail:'Trifft in der 15. Minute nur eine Minute nach dem 0:1 zum Ausgleich.'},
    {id:'2042-01-29-callum-brennan-aek-goal',date:'2042-01-29',player:'Callum Brennan',type:'goal',title:'Brennan dreht das Spiel',detail:'Erzielt in der 18. Minute das 2:1 und bringt Finn Harps endgültig auf Kurs.'},
    {id:'2042-01-29-escarcega-aek-goal',date:'2042-01-29',player:'Emerson Escárcega',type:'goal',title:'Escárcega erhöht vor der Pause',detail:'Trifft in Minute 36 zum 3:1.'},
    {id:'2042-01-29-jake-roberts-aek-goal',date:'2042-01-29',player:'Jake Roberts',type:'goal',title:'Roberts setzt das fünfte Tor',detail:'Erzielt in der 66. Minute das 5:2 und erhält Note 7,5.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-01-29',competition:'UEFA Champions League',fixtureDate:'29.01.2042',
    home:'Finn Harps',away:'AEK Athens',score:'5:3',location:'Donegal Stadium · Stranorlar · 10.000 Zuschauer',
    headline:'Acht Tore zum Abschluss: Harps schlagen AEK 5:3 und werden Zweiter',
    subheadline:'AEK führt nach 14 Minuten, doch Finn Harps antwortet sofort und feuert sich mit fünf verschiedenen Torschützen auf 21 Punkte. Nur Barcelona beendet die Ligaphase vor den Harps.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · FINN HARPS 5:3 AEK ATHENS',
    heroStat:{label:'Ligaphase abgeschlossen',value:'2. Platz · 21 Punkte',note:'7 Siege aus 8 Spielen · nur Barcelona davor'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Wenn eine Ligaphase schon enden muss, dann offenbar mit Feuerwerk. AEK trifft zuerst, Finn Harps braucht exakt eine Minute für die Antwort und geht anschließend in einen offenen Schlagabtausch, den die Harps offensiv klar dominieren. Fünf Tore, fünf verschiedene Torschützen, 26 Abschlüsse und am Ende Platz zwei in Europas Königsklasse.',
    sections:[
      {title:'Vier Minuten drehen die Partie komplett',text:'Rodrigo Medina bringt AEK in der 14. Minute in Führung. Cormac O’Kane gleicht in der 15. aus, Callum Brennan trifft in der 18. Minute zum 2:1. Aus AEKs Traumstart wird binnen vier Minuten ein Rückstand.'},
      {title:'Escárcega macht aus der Wende eine Führung mit Substanz',text:'In der 36. Minute erhöht Emerson Escárcega auf 3:1. Finn Harps geht damit nicht nur mit einem Vorsprung, sondern mit klarer Kontrolle in die Pause.'},
      {title:'Docherty dirigiert das Chaos',text:'Dom Docherty trifft in Minute 55 selbst und liefert insgesamt zwei Vorlagen. Seine Note 9,4 ist die herausragende Einzelleistung dieses Acht-Tore-Abends.'},
      {title:'Roberts beendet die Restfrage',text:'Giraudeau verkürzt in der 58. Minute auf 4:2. Jake Roberts antwortet in der 66. Minute mit dem 5:2. Giraudeaus zweites Tor in 90+1 ist nur noch Ergebniskosmetik.'},
      {title:'Platz zwei hinter Barcelona',text:'Barcelona beendet die Ligaphase mit 22 Punkten auf Rang eins. Direkt dahinter folgt Finn Harps mit 21 Punkten, sieben Siegen und +13 Tordifferenz. Tottenham wird mit 19 Punkten Dritter. Damit überspringen die Harps die Playoff-Runde und stehen direkt in der nächsten K.-o.-Phase.'}
    ],
    keyDuelsTitle:'DER ABEND IN ZAHLEN',keyDuelsHeading:'Dominanz mit offenem Visier',
    keyDuels:[
      {title:'26:9 Schüsse',text:'Finn Harps produziert fast das Dreifache an Abschlüssen und bringt elf davon aufs Tor.'},
      {title:'3,56:1,28 xG',text:'Trotz drei Gegentoren bleibt das Chancenbild deutlich auf Harps-Seite.'},
      {title:'71 Prozent Ballbesitz',text:'Das 5:3 entsteht nicht aus einem reinen Umschaltspiel. Finn Harps kontrolliert den Ball und erzeugt daraus enormes Abschlussvolumen.'}
    ],
    verdictHeading:'Eine Ligaphase, die den Status des Klubs verändert',
    verdict:'Sieben Siege aus acht Spielen und Platz zwei hinter Barcelona sind keine nette Außenseitergeschichte mehr. Finn Harps beendet diese Ligaphase als eines der stärksten Teams des Wettbewerbs. Das 5:3 gegen AEK ist der passende Schlusspunkt: offensiv furchtlos, tief besetzt und mit genug Qualität, dass fünf verschiedene Spieler treffen können.',
    stats:match.stats,
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-01-29-finn-harps-aek-result',date:'2042-01-29',season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · LIGAPHASE ABGESCHLOSSEN',
    title:'5:3-Feuerwerk gegen AEK: Finn Harps beendet Ligaphase auf Platz zwei',
    summary:'O’Kane, Brennan, Escárcega, Docherty und Roberts treffen. Mit 21 Punkten aus acht Spielen landet Finn Harps nur einen Punkt hinter Barcelona und qualifiziert sich direkt für die nächste K.-o.-Runde.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','aek-athens','champions-league-2041-42','season-2042']
  });
})();