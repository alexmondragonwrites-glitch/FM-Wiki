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

  const date='2042-09-16';
  const fixtureId='2042-09-16-finn-harps-benfica-champions-league';
  const reportId='2042-09-16-finn-harps-benfica-1-0-match-report';
  const roundupId='2042-09-16-champions-league-tuesday-roundup';

  const match={
    id:fixtureId,date,season:2042,competition:'UEFA Champions League',stage:'Ligaphase · 2. Spieltag',
    home:{id:'finn-harps',name:'Finn Harps',score:1},
    away:{id:'benfica',name:'Sport Lisboa e Benfica',score:0},
    score:'1:0',homeGoals:1,awayGoals:0,halfTime:'0:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:10000,awayFans:500,
    weather:'Windig, feucht · 18 °C',pitch:'Perfekter Rasen',
    headline:'Geduld bis Minute 84: Billy Walker schießt Finn Harps auch gegen Benfica zum Sieg',
    verdict:'Nach dem 4:0 gegen Inter folgt kein Feuerwerk, sondern ein Geduldsspiel. Benfica verteidigt tief, foult häufig und hält lange die Null. Finn Harps bleibt aber dominant und belohnt sich in Minute 84 durch Billy Walker. Nach zwei Champions-League-Spielen stehen sechs Punkte und 5:0 Tore.',
    scorers:[
      {player:'Billy Walker',team:'Finn Harps',goals:1,minutes:[84]}
    ],
    events:[
      {minute:84,type:'goal',team:'Finn Harps',player:'Billy Walker',text:'1:0'}
    ],
    stats:[
      {label:'Schüsse',home:15,away:4,kind:'number'},
      {label:'Schüsse aufs Tor',home:10,away:0,kind:'number'},
      {label:'xG',home:0.91,away:0.29,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:5,away:3,kind:'number'},
      {label:'Großchancen',home:0,away:0,kind:'number'},
      {label:'Ballbesitz',home:56,away:44,kind:'percent'},
      {label:'Ecken',home:11,away:2,kind:'number'},
      {label:'Fouls',home:16,away:17,kind:'number'},
      {label:'Angekommene Pässe',home:'91% (543/599)',away:'88% (423/481)',kind:'text'},
      {label:'Gewonnene Zweikämpfe',home:'64% (18/28)',away:'68% (23/35)',kind:'text'},
      {label:'Gewonnene Kopfduelle',home:'51% (24/47)',away:'45% (21/47)',kind:'text'},
      {label:'Gelbe Karten',home:0,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:7.00,away:6.57,kind:'decimal'},
      {label:'Intensive Sprints',home:145,away:98,kind:'number'}
    ],
    standout:{
      player:'Billy Walker',team:'Finn Harps',rating:7.8,goals:1,
      note:'Entscheidet das zähe Spiel in Minute 84 mit dem einzigen Treffer.'
    },
    oppositionStandout:{
      player:'Leonardo Meeus',team:'Benfica',rating:7.4,
      note:'Benficas Torwart hält neun Schüsse und verhindert lange den Rückstand.'
    },
    milestones:[
      'Evan Reilly bleibt nun seit 582 Minuten ohne Gegentor für Finn Harps.',
      'Giacomo Papini absolviert sein 325. Spiel als Profi.',
      'Dom Docherty absolviert seinen 300. Einsatz für Finn Harps.',
      'Finn Harps erhöht den Saisonrekord an Siegen in Serie auf 19.',
      'Noël Heremans absolviert sein 300. Spiel als Profi.'
    ],
    tacticalNotes:{
      finnHarps:[
        'Benfica zwingt die Harps in ein geduldiges Positionsspiel; die Entscheidung fällt erst in Minute 84.',
        'Finn Harps produziert 10 Schüsse aufs Tor, aber keine ausgewiesene Großchance.',
        '56 Prozent Ballbesitz und 11 Ecken zeigen den dauerhaften territorialen Druck.',
        'Die Harps stehen laut Spielbericht mehrfach im Abseits, was den Rhythmus immer wieder unterbricht.'
      ],
      benfica:[
        'Benfica kommt auf keinen einzigen Schuss aufs Tor.',
        'Die Gäste begehen 17 Fouls und bremsen den Spielfluss häufig.',
        'Leonardo Meeus hält neun Schüsse und hält Benfica bis kurz vor Schluss im Spiel.'
      ]
    },
    postMatchAnalysis:{
      title:'Anders als Inter, aber genauso wertvoll',
      text:'Das 1:0 gegen Benfica ist die andere Seite europäischer Reife. Gegen Inter entschieden die Harps das Spiel in 15 Minuten, gegen Benfica mussten sie 84 Minuten lang ruhig bleiben. Die Kontrolle war trotzdem klar: 15:4 Schüsse, 10:0 aufs Tor und 11:2 Ecken.',
      keyPoints:[
        'Walker entscheidet das Spiel in Minute 84.',
        'Reilly bleibt erneut ohne Gegentor und steht nun bei 582 Minuten ohne Gegentreffer.',
        'Finn Harps startet mit zwei Siegen und 5:0 Toren in die Ligaphase.',
        'Benfica verliert auch sein zweites Champions-League-Spiel und bleibt ohne eigenen Treffer.'
      ]
    },
    sources:[
      'FM-Spielübersicht Finn Harps – Benfica · 16.09.2042',
      'Finn-Harps-Spielerstatistiken · 16.09.2042',
      'FourFourTwo-Spielbericht · 16.09.2042',
      'Champions-League-Ergebnisse · Dienstag, 16.09.2042'
    ]
  };

  upsert(window.FM_MATCHES,match);

  const fixture=['2042-09-16','20:00','Benfica','Heim','1:0','Ligaphase der UEFA Champions League',0];
  const fixtureIndex=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&x[2]==='Benfica');
  if(fixtureIndex>=0)window.FM_FIXTURES[fixtureIndex]=fixture;else window.FM_FIXTURES.push(fixture);

  const benfica=window.FM_CLUBS.find(x=>x.id==='benfica'||x.name==='Sport Lisboa e Benfica'||x.name==='Benfica');
  if(benfica){
    benfica.meetings=benfica.meetings||[];
    const meeting={date:'16.09.2042',competition:'UEFA Champions League · Ligaphase',venue:'A',result:'1:0'};
    const idx=benfica.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)benfica.meetings[idx]=meeting;else benfica.meetings.unshift(meeting);
    benfica.lastMeeting='16.09.2042 · Finn Harps 1:0 Benfica';
    benfica.latestEuropeanResult={date:'16.09.2042',competition:'UEFA Champions League · Ligaphase',opponent:'Finn Harps',venue:'Auswärts',score:'0:1'};
    benfica.summary='Benfica verliert auch sein zweites Champions-League-Spiel 2042/43. Nach dem 0:2 gegen AEK folgt ein 0:1 bei Finn Harps; die Portugiesen bleiben damit in der Ligaphase ohne Tor und Punkt.';
  }

  const tuesdayResults=[
    {home:'Atlético de Madrid',away:'Kortrijk',score:'0:0'},
    {home:'Bayer Leverkusen',away:'PSV Eindhoven',score:'0:1'},
    {home:'Caen',away:'Eintracht Frankfurt',score:'4:2'},
    {home:'Finn Harps',away:'Benfica',score:'1:0'},
    {home:'Inter',away:'Roma',score:'1:0'},
    {home:'Manchester City',away:'Villarreal',score:'1:0'},
    {home:'Monaco',away:'Paris Saint-Germain',score:'5:2'},
    {home:'Real Madrid',away:'Dortmund',score:'3:0'}
  ];

  const cl=window.FM_CHAMPIONS_LEAGUE['2042-43']||{};
  const leaguePhase=cl.leaguePhase||{};
  window.FM_CHAMPIONS_LEAGUE['2042-43']={
    ...cl,
    leaguePhase:{
      ...leaguePhase,
      matchday2:{
        ...(leaguePhase.matchday2||{}),
        date,
        status:'Dienstagsspiele erfasst',
        finnHarps:{opponent:'Benfica',venue:'Heim',score:'1:0',halfTime:'0:0',result:'Sieg'},
        tuesdayResults,
        finnHarpsTableSnapshot:{position:1,played:2,wins:2,draws:0,losses:0,goalsFor:5,goalsAgainst:0,goalDifference:5,points:6}
      }
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x&&(x.year===2042||x.season===2042));
  if(season){
    season.referenceDate=date;
    season.snapshotDate=date;
    season.latestHeadline='Champions League: Billy Walker trifft in Minute 84 zum 1:0 gegen Benfica. Finn Harps startet mit zwei Siegen und 5:0 Toren.';
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.current={played:2,wins:2,draws:0,losses:0,goalsFor:5,goalsAgainst:0,goalDifference:5,points:6,position:1};
    season.nextFocus={competition:'UEFA Champions League',stage:'Ligaphase · 3. Spieltag',opponent:'Kortrijk',venue:'Auswärts',date:'2042-10-22',status:'anstehend'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='16.09.2042: Finn Harps schlägt Benfica 1:0 durch Billy Walker (84.). 15:4 Schüsse, 10:0 aufs Tor, 11:2 Ecken. Evan Reilly bleibt seit 582 Minuten ohne Gegentor. Nach zwei Champions-League-Spielen stehen 6 Punkte und 5:0 Tore.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-09-16-billy-walker-benfica-winner',date,player:'Billy Walker',type:'standout',title:'Später Siegtreffer gegen Benfica',detail:'Walker entscheidet das Champions-League-Spiel in Minute 84 und erhält Note 7,8.'},
    {id:'2042-09-16-evan-reilly-582-clean',date,player:'Evan Reilly',type:'streak',title:'582 Minuten ohne Gegentor',detail:'Nach dem 1:0 gegen Benfica ist Reilly seit 582 Minuten ohne Gegentreffer.'},
    {id:'2042-09-16-dom-docherty-300-harps',date,player:'Dom Docherty',type:'milestone',title:'300 Einsätze für Finn Harps',detail:'Docherty erreicht gegen Benfica seinen 300. Einsatz für den Klub.'},
    {id:'2042-09-16-giacomo-papini-325-pro',date,player:'Giacomo Papini',type:'milestone',title:'325 Profispiele',detail:'Papini absolviert gegen Benfica sein 325. Spiel als Profi.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielbericht',date,competition:'UEFA Champions League',fixtureDate:date,
    headline:'84 Minuten Geduld: Walker knackt Benfica und hält Harps makellos',
    subheadline:'Nach dem 4:0 gegen Inter folgt ein völlig anderes Champions-League-Spiel. Finn Harps dominiert, Benfica verteidigt zäh, und Billy Walker entscheidet die Partie spät.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · FINN HARPS 1:0 BENFICA',
    heroStat:{label:'START',value:'6 PUNKTE',note:'2 Spiele · 2 Siege · 5:0 Tore'},
    intro:'Finn Harps gewinnt diesmal nicht mit Wucht, sondern mit Geduld. Benfica hält das Zentrum lange dicht und Torwart Leonardo Meeus rettet neunmal. Erst in Minute 84 findet Billy Walker die Lücke.',
    sections:[
      {title:'Viel Kontrolle, wenig Raum',text:'Die Harps haben 56 Prozent Ballbesitz, kommen auf 15 Abschlüsse und 11 Ecken. Benfica verteidigt tief, foult häufig und zwingt Finn Harps immer wieder in neue Anläufe.'},
      {title:'Meeus hält Benfica im Spiel',text:'Zehn Harps-Schüsse kommen aufs Tor. Leonardo Meeus pariert neun davon und erhält Note 7,4. Ohne ihn wäre das Spiel vermutlich früher entschieden.'},
      {title:'Walker wartet bis Minute 84',text:'Sechs Minuten vor dem Ende bricht Billy Walker die Blockade. Sein harter Flachschuss bringt das 1:0 und belohnt den permanenten Druck.'},
      {title:'Reilly bleibt unberührt',text:'Benfica bringt keinen einzigen Abschluss auf das Tor. Evan Reilly steht damit nun bei 582 Minuten ohne Gegentreffer.'},
      {title:'Zwei Spiele, zwei verschiedene Siege',text:'Gegen Inter genügt eine furiose erste Viertelstunde. Gegen Benfica braucht Finn Harps Geduld bis zur 84. Minute. Zusammen ergibt das sechs Punkte und 5:0 Tore.'}
    ],
    verdictHeading:'Ein Sieg, der mehr über Reife als über Glanz erzählt',
    verdict:'Das 1:0 ist vielleicht weniger spektakulär als der Inter-Abend, aber sportlich genauso interessant. Finn Harps verliert weder Struktur noch Geduld, obwohl Benfica lange alles wegverteidigt. Genau solche Spiele entscheiden darüber, ob eine starke europäische Mannschaft nur schön spielt oder tatsächlich konstant punktet.',
    sources:['FM-Spielübersicht Finn Harps – Benfica · 16.09.2042','Finn-Harps-Spielerstatistiken · 16.09.2042','FourFourTwo-Spielbericht · 16.09.2042']
  });

  upsert(window.FM_PRESS_REPORTS,{
    id:roundupId,type:'Europapokal-Rundschau',date,competition:'UEFA Champions League',fixtureDate:date,
    headline:'Dienstag in Europa: Monaco schießt PSG ab, Real schlägt Dortmund – Harps bleiben perfekt',
    subheadline:'Finn Harps gewinnt 1:0 gegen Benfica. Monaco liefert beim 5:2 gegen PSG das Torfestival des Abends, Real Madrid schlägt Dortmund 3:0 und Inter rehabilitiert sich mit einem 1:0 gegen Roma.',
    label:'CHAMPIONS LEAGUE · DIENSTAGSRUNDSCHAU · 16.09.2042',
    heroStat:{label:'HARPS',value:'6 PUNKTE',note:'5:0 Tore nach zwei Spielen'},
    intro:'Der zweite Champions-League-Spieltag beginnt mit acht sichtbaren Dienstagspartien. Finn Harps bleibt ohne Punktverlust und ohne Gegentor, während mehrere Schwergewichte reagieren.',
    sections:[
      {title:'Atlético de Madrid 0:0 Kortrijk',text:'Keine Tore in Madrid. Kortrijk nimmt nach seinem Auftaktsieg einen weiteren Punkt mit.'},
      {title:'Bayer Leverkusen 0:1 PSV Eindhoven',text:'PSV holt auswärts den ersten Sieg der Ligaphase.'},
      {title:'Caen 4:2 Eintracht Frankfurt',text:'Caen liefert sechs Tore und setzt sich in einem offenen Spiel gegen Frankfurt durch.'},
      {title:'Finn Harps 1:0 Benfica',text:'Billy Walker entscheidet in Minute 84. Finn Harps steht nach zwei Spielen bei 6 Punkten und 5:0 Toren.'},
      {title:'Inter 1:0 Roma',text:'Nach dem 0:4 in Donegal reagiert Inter mit einem knappen Heimsieg gegen Roma.'},
      {title:'Manchester City 1:0 Villarreal',text:'City gewinnt knapp und holt den zweiten Sieg.'},
      {title:'Monaco 5:2 Paris Saint-Germain',text:'Das Torfestival des Abends. Monaco schlägt PSG klar mit 5:2.'},
      {title:'Real Madrid 3:0 Dortmund',text:'Real Madrid bleibt makellos und gewinnt deutlich gegen Dortmund.'}
    ],
    verdictHeading:'Finn Harps bleibt vorne im Takt',
    verdict:'Die Harps gewinnen auch das zweite Spiel und bleiben ohne Gegentor. Noch wichtiger: Sie zeigen nach dem spektakulären 4:0 gegen Inter, dass sie auch einen zähen europäischen Abend lösen können.',
    results:tuesdayResults,
    sources:['Champions-League-Ergebnisse · Dienstag, 16.09.2042']
  });

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  [
    {
      id:'2042-09-16-finn-harps-benfica-1-0',date,season:2042,category:'Champions League',accent:'green',featured:true,
      eyebrow:'CHAMPIONS LEAGUE · 1:0',
      title:'Walker erlöst Donegal in Minute 84',
      summary:'Finn Harps schlägt Benfica 1:0. Nach zwei Spielen stehen sechs Punkte, 5:0 Tore und die nächste weiße Weste für Reilly.',
      href:`presse.html?id=${reportId}`,
      entities:['finn-harps','benfica','billy-walker','evan-reilly','season-2042']
    },
    {
      id:'2042-09-16-champions-league-tuesday-roundup',date,season:2042,category:'Champions League',accent:'blue',featured:false,
      eyebrow:'DIENSTAGSRUNDSCHAU',
      title:'Monaco schießt PSG ab, Harps bleiben perfekt',
      summary:'Acht Dienstagsspiele des zweiten Ligaphasen-Spieltags: Monaco gewinnt 5:2 gegen PSG, Real 3:0 gegen Dortmund und Finn Harps 1:0 gegen Benfica.',
      href:`presse.html?id=${roundupId}`,
      entities:['champions-league','finn-harps','monaco','paris-saint-germain','real-madrid','dortmund','season-2042']
    }
  ].forEach(item=>upsert(window.FM_NEWS,item));
})();