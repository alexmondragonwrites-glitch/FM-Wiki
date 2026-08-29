(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-05-31';
  const fixtureId='2042-05-31-manchester-united-finn-harps-champions-league-final';
  const reportId='2042-05-31-champions-league-final-man-utd-finn-harps-1-0';

  const match={
    id:fixtureId,date,season:2042,competition:'UEFA Champions League',stage:'Finale',
    home:{id:'man-utd',name:'Manchester United',short:'MUN',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:0},
    score:'1:0',homeGoals:1,awayGoals:0,halfTime:'1:0',
    venue:'Olympic Athletic Center of Athens',location:'Athen, Griechenland',attendance:87022,awayFans:16389,weather:'Windig · 13 °C',referee:'Ari Kuusela',
    headline:'Das Märchen endet einen Schritt vor dem Pokal: Manchester United schlägt Finn Harps 1:0',
    verdict:'Finn Harps verliert ein extrem enges Champions-League-Finale gegen Titelverteidiger Manchester United mit 0:1. Ricardo López erzielt in Minute 36 nach einem Fehler von Diego Fernández den einzigen Treffer; der zunächst nicht gegebene Treffer wird nach Videobeweis anerkannt. Die Zahlen zeigen kein klares Kräfteverhältnis: 10:8 Schüsse, 3:3 aufs Tor, 0,94:0,83 xG und 4:3 Großchancen. Das Märchen endet in Athen, aber nicht in einer Niederlage, die den Harps den Status als europäische Spitzenmannschaft nimmt.',
    scorers:[{player:'Ricardo López',team:'Manchester United',goals:1,minutes:[36]}],
    events:[
      {minute:36,type:'goal',team:'Manchester United',player:'Ricardo López',text:'1:0 · nach Videobeweis anerkannt'},
      {minute:88,type:'yellow-card',team:'Finn Harps',player:'Torric Bruce'}
    ],
    stats:[
      {label:'Schüsse',home:10,away:8,kind:'number'},
      {label:'Schüsse aufs Tor',home:3,away:3,kind:'number'},
      {label:'xG',home:0.94,away:0.83,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:4,away:3,kind:'number'},
      {label:'Großchancen',home:4,away:3,kind:'number'},
      {label:'Ballbesitz',home:53,away:47,kind:'percent'},
      {label:'Ecken',home:9,away:3,kind:'number'},
      {label:'Fouls',home:8,away:17,kind:'number'},
      {label:'Angekommene Pässe',home:'92% (488/528)',away:'86% (427/495)',kind:'text'},
      {label:'Gewonnene Zweikämpfe',home:'73% (19/26)',away:'89% (32/36)',kind:'text'},
      {label:'Gewonnene Kopfbälle',home:'30% (16/45)',away:'61% (27/44)',kind:'text'},
      {label:'Gelbe Karten',home:0,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:7.15,away:6.69,kind:'decimal'},
      {label:'Intensive Sprints',home:104,away:86,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':6.7,'Diego Fernández':6.5,'Daniele Di Maio':6.6,'Torric Bruce':6.9,'Kevin Kelly':6.4,
      'Amir Mašić':6.8,'Daryl Frame':6.6,"Cormac O'Kane":6.5,'Giacomo Papini':6.8,'Romano Maisto':6.7,
      'Justin Ramsey':6.4,'Pol Muñoz':6.8,'Callum Brennan':6.8,'Billy Walker':6.9,'Ben Barry':6.7,'Emerson Escárcega':6.5
    },
    standout:{player:'Torric Bruce / Billy Walker',team:'Finn Harps',rating:6.9,note:'Gemeinsam höchste Harps-Note in einem Finale, das über Details und einen einzigen Fehler entschieden wird.'},
    analysis:{
      balance:'Das Finale ist deutlich ausgeglichener als das Ergebnis vermuten lässt. United kommt auf 0,94 xG, Finn Harps auf 0,83; beide Teams bringen drei Schüsse aufs Tor und liegen auch bei den Großchancen mit 4:3 eng beieinander.',
      decidingMoment:'Die Partie kippt in Minute 36. Ricardo López profitiert von einem Fehler Diego Fernández’. Das Tor wird zunächst nicht gegeben, nach Videobeweis aber anerkannt. Es bleibt der einzige Treffer des Abends.',
      physicality:'Finn Harps gewinnt 89 Prozent der ausgewiesenen Zweikämpfe und 61 Prozent der Kopfbälle, begeht aber 17 Fouls. Das Spiel bleibt dadurch zerfahren und entwickelt nur selten längere offene Phasen.',
      escarcega:'Emerson Escárcega schafft nach seiner Handgelenksfraktur die Rückkehr und kommt zur zweiten Halbzeit ins Spiel. Der große Finalmoment bleibt ihm jedoch verwehrt.',
      context:'Manchester United verteidigt den Titel und gewinnt damit den dritten Champions-League-Titel in fünf Spielzeiten. Finn Harps bleibt bei zwei Titeln in diesem Zeitraum und verliert das direkte Endspiel der prägenden europäischen Rivalität.',
      nextChapter:'Für die Harps endet die europäische Reise 2041/42 in Athen. Direkt danach verschiebt sich der Fokus zur WM 2042: 20 Harps-Spieler sind nominiert, zehn davon für Irland.'
    },
    notes:[
      'Manchester United gewinnt das Champions-League-Finale 2041/42 mit 1:0 gegen Finn Harps.',
      'Ricardo López erzielt in Minute 36 den einzigen Treffer nach einem Fehler von Diego Fernández; das Tor wird nach Videobeweis anerkannt.',
      'Die Partie bleibt statistisch eng: 10:8 Schüsse, 3:3 aufs Tor, 0,94:0,83 xG und 4:3 Großchancen.',
      'Emerson Escárcega kehrt nach seiner Handgelenksfraktur zurück und wird zur zweiten Halbzeit eingewechselt.',
      'Manchester United verteidigt den Champions-League-Titel und holt den dritten Titel in fünf Spielzeiten.',
      'Finn Harps beendet die Champions-League-Saison als Finalist.'
    ],
    sources:['FM-Spielübersicht Manchester United – Finn Harps · 31.05.2042','Finn-Harps-Spielerstatistiken · Champions-League-Finale · 31.05.2042','FourFourTwo Spielbericht · 31.05.2042']
  };
  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-05-31','20:00','Manchester United','Neutral','0:1','UEFA Champions League · Finale',0];
  const idxFixture=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&String(x[2]).includes('Manchester United'));
  if(idxFixture>=0)window.FM_FIXTURES[idxFixture]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const manUtd=window.FM_CLUBS.find(x=>x.id==='man-utd'||x.name==='Manchester United');
  if(manUtd){
    manUtd.meetings=manUtd.meetings||[];
    const meeting={date:'31.05.2042',competition:'UEFA Champions League · Finale',venue:'N',result:'0:1'};
    const idx=manUtd.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)manUtd.meetings[idx]=meeting;else manUtd.meetings.unshift(meeting);
    manUtd.lastMeeting='31.05.2042 · Manchester United 1:0 Finn Harps · Champions-League-Finale';
  }

  const cl=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  const knockoutStage=cl.knockoutStage||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...cl,
    status:'Finale verloren',
    champion:'Manchester United',
    runnerUp:'Finn Harps',
    final:{
      ...(cl.final||{}),date,venue:'Olympic Athletic Center of Athens',location:'Athen, Griechenland',
      teams:['Manchester United','Finn Harps'],score:'1:0',halfTime:'1:0',winner:'Manchester United',runnerUp:'Finn Harps',
      scorer:{player:'Ricardo López',minute:36},attendance:87022,awayFans:16389,
      summary:'Ein einzelner Treffer von Ricardo López entscheidet ein sehr enges Finale. United verteidigt den Titel; Finn Harps beendet die Saison als Champions-League-Finalist.'
    },
    knockoutStage:{
      ...knockoutStage,
      final:{...(knockoutStage.final||{}),finnHarps:{qualified:true,status:'Finale verloren',opponent:'Manchester United',result:'0:1',venue:'Olympic Athletic Center of Athens',location:'Athen, Griechenland'}}
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Champions League: Das Märchen endet in Athen. Manchester United schlägt Finn Harps in einem ausgeglichenen Finale 1:0; Ricardo López erzielt in Minute 36 den einzigen Treffer.';
    season.championsLeague={...(season.championsLeague||{}),status:'Finalist',result:'Finale 0:1 gegen Manchester United',winner:'Manchester United'};
    season.nextFocus={competition:'FIFA World Cup',stage:'Gruppenphase',team:'Irland',group:'K',opponents:['Brasilien','China','Südafrika'],start:'12.06.2042',status:'Nach dem Champions-League-Finale beginnt der WM-Fokus',harpsPlayers:20,irelandPlayers:10};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='31.05.2042: Finn Harps verliert das Champions-League-Finale in Athen 0:1 gegen Manchester United. Ricardo López trifft in Minute 36 nach Videobeweis. Das Spiel bleibt mit 10:8 Schüssen, 3:3 aufs Tor und 0,94:0,83 xG extrem eng. United verteidigt den Titel; die Harps werden Zweiter.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-05-31-emerson-escarcega-final-return',date,player:'Emerson Escárcega',type:'return',title:'Escárcega schafft die Rückkehr fürs Finale',detail:'Nach der Handgelenksfraktur wird Escárcega zur zweiten Halbzeit gegen Manchester United eingewechselt. Der Ausgleich gelingt den Harps dennoch nicht.'},
    {id:'2042-05-31-torric-bruce-final',date,player:'Torric Bruce',type:'performance',title:'Bruce mit 6,9 im Champions-League-Finale',detail:'Torric Bruce gehört gemeinsam mit Billy Walker zu den bestbewerteten Harps-Spielern im 0:1 gegen Manchester United.'},
    {id:'2042-05-31-billy-walker-final',date,player:'Billy Walker',type:'performance',title:'Walker mit 6,9 in Athen',detail:'Billy Walker erreicht gemeinsam mit Torric Bruce die höchste Harps-Note im Champions-League-Finale.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const reports=[
    {
      id:reportId,type:'Spielbericht',date,competition:'UEFA Champions League',fixtureDate:'31.05.2042',
      headline:'Das Märchen endet in Athen: Ein Tor fehlt Finn Harps zum nächsten europäischen Kapitel',
      subheadline:'Ricardo López entscheidet ein Finale auf Messers Schneide. Manchester United gewinnt 1:0 und verteidigt den Titel, während Finn Harps nach einer europäischen Reise über Caen, City und Barcelona einen Schritt vor dem Pokal stoppt.',
      label:'CHAMPIONS LEAGUE · FINALE · ATHEN',
      heroStat:{label:'Finale',value:'Manchester United 1:0 Finn Harps',note:'Ricardo López 36. · 87.022 Zuschauer'},
      backlink:{href:'saison.html',label:'← ZUR SAISON'},
      intro:'Manchmal endet ein Märchen nicht mit einem Zusammenbruch, sondern mit einem einzigen Moment. Finn Harps steht Manchester United in Athen fast vollständig auf Augenhöhe. Dann reicht ein Fehler, ein Abschluss, ein Videobeweis. Ricardo López trifft in Minute 36 und dieses 1:0 überlebt den ganzen Abend.',
      sections:[
        {title:'Kein Finale, in dem die Harps untergehen',text:'Die Zahlen erzählen ein enges Spiel: United 10:8 Schüsse, beide Teams 3 aufs Tor, 0,94:0,83 xG und 4:3 Großchancen. Das ist keine Partie, in der der größere Name Finn Harps an die Wand spielt. Es ist ein Finale, das an Details hängt.'},
        {title:'Minute 36 entscheidet alles',text:'Ricardo López profitiert von einem Fehler Diego Fernández’. Der Treffer wird zunächst nicht gegeben, nach Videobeweis aber anerkannt. Danach findet Finn Harps Chancen und Phasen, aber keinen Weg mehr zum Ausgleich.'},
        {title:'Zu viel Reibung, zu wenig Rhythmus',text:'Mit 17 Fouls auf Harps-Seite bleibt das Spiel immer wieder stehen. Gleichzeitig gewinnen die Harps 89 Prozent der ausgewiesenen Zweikämpfe und 61 Prozent der Kopfbälle. Kampf fehlt nicht; der letzte saubere Moment im Strafraum schon.'},
        {title:'Escárcega schafft es noch nach Athen',text:'Nach seiner Handgelenksfraktur wird Emerson Escárcega zur zweiten Halbzeit eingewechselt. Allein seine Rückkehr ist Teil der Finalgeschichte. Das große Comeback-Tor bleibt jedoch aus.'},
        {title:'Die Ära kippt diesmal zu United',text:'Seit 2037/38 hatten sich Finn Harps und Manchester United als Champions-League-Sieger abgewechselt. Mit dem direkten 1:0 im Finale holt United nun Titel Nummer drei in fünf Spielzeiten. Die Harps bleiben bei zwei, aber auch nach dieser Niederlage als prägende Macht dieser europäischen Phase.'},
        {title:'Das nächste Kapitel wartet sofort',text:'Lange Zeit zum Trauern gibt es kaum. Zwanzig Harps-Spieler fahren zur Weltmeisterschaft, zehn davon mit Irland. Aus der Athen-Nacht wird damit fast unmittelbar eine WM-Vorbereitung.'}
      ],
      verdictHeading:'Das Märchen hat nicht gereicht. Der Maßstab bleibt trotzdem gigantisch.',
      verdict:'Finn Harps verliert den Pokal, nicht den Status. Wer Manchester City 4:0 ausschaltet, Barcelona über 210 Minuten ohne Gegentor hält und ein Champions-League-Finale gegen Manchester United mit 0,83 zu 0,94 xG verliert, ist kein romantischer Außenseiter mehr. Athen tut weh, gerade weil der dritte Titel greifbar war. Aber es ist die Niederlage eines europäischen Schwergewichts.'
    },
    {
      id:'2042-05-31-final-fans-nach-athen',type:'Fanperspektive',date,competition:'UEFA Champions League',fixtureDate:'31.05.2042',
      headline:'Tränen, Stolz und ein Satz, der bleibt: „Wir waren wieder einen Schritt vom Thron entfernt“',
      subheadline:'Redaktionell simulierte Stimmen aus der Save-Welt zeigen die Stimmung im Harps-Lager nach dem 0:1.',
      label:'FANS · NACH DEM FINALE',heroStat:{label:'Harps-Fans in Athen',value:'16.389',note:'87.022 Zuschauer insgesamt'},backlink:{href:'saison.html',label:'← ZUR SAISON'},
      intro:'Die folgenden Stimmen sind fiktive redaktionelle Reaktionen innerhalb der FM-Save-Welt. Sie sollen die Stimmung rund um die Harps nach dem Finale abbilden und sind keine realen Fan-Zitate.',
      sections:[
        {title:'Der Schmerz ist echt',text:'Gerade weil das Spiel so eng war, fühlt sich das 0:1 brutal an. Kein 0:4, keine Lehrstunde, kein Moment, in dem man sagen konnte, dass United einfach unerreichbar war. Ein Tor trennt Donegal vom dritten Champions-League-Titel.'},
        {title:'Aber niemand nennt diese Saison ein Scheitern',text:'Die Reise über Caen, Manchester City und Barcelona hat endgültig gezeigt, welchen Rang Finn Harps in Europa besitzt. Das Finale wird verloren, doch der Verein wirkt nicht kleiner als am Morgen davor.'},
        {title:'Der Blick geht schon zur WM',text:'Für viele Fans mischt sich der Finalschmerz mit Vorfreude. Zwanzig Spieler aus diesem Kader fahren zur Weltmeisterschaft. Die Saison endet nicht wirklich; sie wechselt nur das Trikot.'}
      ],
      fanVoices:[
        '„Das tut weh, weil wir nicht schlechter waren. Genau deshalb bin ich so stolz auf sie.“',
        '„Vor Jahren wäre Athen das Wunder gewesen. Heute ärgern wir uns, weil wir das Ding gewinnen wollten. Das sagt alles.“',
        '„City raus. Barça raus. Gegen United ein einziges Tor. Niemand soll mir erzählen, dass Finn Harps hier nur Gast war.“',
        '„Jetzt Kopf hoch. Zehn von unseren Jungs tragen gleich Irland bei einer WM.“'
      ],
      verdictHeading:'Enttäuschung ohne Ernüchterung',
      verdict:'Die Fans trauern um den Pokal, nicht um eine geplatzte Illusion. Finn Harps gehört längst hierher.'
    },
    {
      id:'2042-05-31-final-medienreaktion',type:'Medienperspektive',date,competition:'UEFA Champions League',fixtureDate:'31.05.2042',
      headline:'Europa nach Athen: United hat den Pokal, Finn Harps behält den Respekt',
      subheadline:'Redaktionell simulierte Medienperspektiven aus der Save-Welt ordnen das 1:0-Finale ein.',
      label:'EUROPA & WELT · NACH DEM FINALE',heroStat:{label:'xG',value:'0,94 : 0,83',note:'ein Finale ohne klare Dominanz'},backlink:{href:'saison.html',label:'← ZUR SAISON'},
      intro:'Die folgenden Perspektiven sind redaktionell simulierte Save-Welt-Einordnungen und keine realen Medienzitate.',
      sections:[
        {title:'England',text:'United verteidigt den Titel und bestätigt seine K.-o.-Härte. Gleichzeitig dürfte niemand aus diesem Finale ableiten, dass der Abstand zu Finn Harps wieder größer geworden wäre.'},
        {title:'Irland',text:'Der Schmerz richtet sich auf die verpasste Chance, nicht auf das Erreichen des Endspiels. Das ist der vielleicht deutlichste Beweis dafür, wie sehr sich die Erwartungshaltung rund um Finn Harps verändert hat.'},
        {title:'Spanien',text:'Nach Barcelona scheitert nun auch Finn Harps nicht an spielerischer Unterlegenheit, sondern an der Effizienz eines einzelnen Moments. Der Klub aus Donegal wird endgültig wie ein etablierter europäischer Spitzenverein beurteilt.'},
        {title:'International',text:'Manchester United besitzt den Pokal und nun drei Titel in fünf Jahren. Finn Harps besitzt zwei Titel, ein weiteres Finale und eine Mannschaft, die kurz darauf mit 20 Spielern zur WM aufbricht. Das Machtzentrum Europas bleibt zweigeteilt.'}
      ],
      verdictHeading:'Der Pokal entscheidet das Finale, nicht die gesamte Hierarchie',
      verdict:'United gewinnt die Nacht. Die letzten fünf Jahre bleiben trotzdem die gemeinsame Ära von Manchester United und Finn Harps.'
    }
  ];
  reports.forEach(report=>upsert(window.FM_PRESS_REPORTS,report));

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-05-31-champions-league-final-result',date,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · FINALE · ATHEN',
    title:'Das Märchen endet in Athen: United schlägt Finn Harps 1:0',
    summary:'Ricardo López erzielt in Minute 36 den einzigen Treffer eines extrem engen Finals. 10:8 Schüsse, 3:3 aufs Tor und 0,94:0,83 xG zeigen: Finn Harps war dem dritten Champions-League-Titel näher, als das nackte Ergebnis vermuten lässt.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','man-utd','ricardo-lopez','diego-fernandez','emerson-escarcega','world-cup-2042','season-2042']
  });
})();