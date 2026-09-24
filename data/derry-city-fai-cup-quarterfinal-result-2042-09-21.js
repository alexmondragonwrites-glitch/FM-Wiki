(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-09-21';
  const reportId='2042-09-21-derry-city-finn-harps-0-2-fai-cup-quarterfinal';

  const match={
    id:'2042-09-21-derry-city-finn-harps-fai-cup-quarterfinal',date,season:2042,
    competition:'FAI Cup',stage:'Viertelfinale',
    home:{id:'derry-city',name:'Derry City',score:0},
    away:{id:'finn-harps',name:'Finn Harps',score:2},
    score:'0:2',homeGoals:0,awayGoals:2,halfTime:'0:1',
    venue:'Ryan McBride Brandywell',location:'Derry, Nordirland',attendance:7381,awayFans:369,
    weather:'Nieselregen · 13 °C',pitch:'Perfekter Rasen',referee:'Callum Gallagher',
    headline:'Derby gewonnen, Halbfinale erreicht: Finn Harps schlagen Derry City 2:0',
    verdict:'Ben Barry bringt Finn Harps in Minute 25 in Führung, Romano Maisto entscheidet das North-West-Derby in Minute 76. Die Harps kontrollieren das Viertelfinale mit 74 Prozent Ballbesitz und ziehen ohne Gegentor ins FAI-Cup-Halbfinale ein.',
    scorers:[
      {player:'Ben Barry',team:'Finn Harps',goals:1,minutes:[25]},
      {player:'Romano Maisto',team:'Finn Harps',goals:1,minutes:[76]}
    ],
    events:[
      {minute:25,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'0:1'},
      {minute:52,type:'injury',team:'Finn Harps',player:'Gustavo da Silva',text:'Zerrung der Oberschenkelrückseite'},
      {minute:76,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'0:2'}
    ],
    stats:[
      {label:'Schüsse',home:6,away:9},
      {label:'Schüsse aufs Tor',home:3,away:3},
      {label:'xG',home:0.33,away:1.28},
      {label:'Großchancen',home:0,away:2},
      {label:'Ballbesitz',home:26,away:74},
      {label:'Ecken',home:2,away:5},
      {label:'Fouls',home:16,away:13},
      {label:'Angekommene Pässe',home:'74% (220/298)',away:'90% (617/688)'}
    ],
    ratings:{
      'Thomas Kenny':7.3,'Callum Brennan':7.4,'Torric Bruce':7.3,'Mareks Istrankins':7.1,
      'Gustavo da Silva':6.8,'Alejandro López':6.8,'Justin Ramsey':6.8,'Jake Roberts':6.7,
      'Billy Walker':6.5,'Dom Docherty':6.9,'Ben Barry':7.2,'Raúl':6.9,
      'Romano Maisto':7.3,'Daryl Frame':7.4,"Jim O'Neill":6.8,'Pol Muñoz':6.5
    },
    standout:{
      player:'Callum Brennan',team:'Finn Harps',rating:7.4,
      note:'Brennan erhält gemeinsam mit Daryl Frame die höchste Harps-Note und fällt mit 17 progressiven Pässen auf.'
    },
    milestones:[
      {player:'Thomas Kenny',achievement:'325. Profispiel'},
      {player:'Raúl',achievement:'350. Profispiel'}
    ],
    injuries:[
      {
        player:'Gustavo da Silva',
        injury:'Zerrung der Oberschenkelrückseite',
        injuredAt:'21.09.2042',
        expectedOut:'3–4 Wochen',
        treatment:'Vereinsphysiotherapeuten',
        mechanism:'Beim Sprinten'
      }
    ],
    sources:[
      'FM-Spielübersicht Derry City – Finn Harps · 21.09.2042',
      'Finn-Harps-Spielerstatistiken · 21.09.2042',
      'FourFourTwo-Spielbericht · 21.09.2042',
      'Medizinischer Bericht Gustavo da Silva · 21.09.2042'
    ]
  };
  upsert(window.FM_MATCHES,match);

  const fx=['2042-09-21','15:00','Derry City','Auswärts','0:2','FAI Cup · Viertelfinale',0];
  const fi=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&x[2]==='Derry City');
  if(fi>=0)window.FM_FIXTURES[fi]=fx;else window.FM_FIXTURES.push(fx);

  const derry=window.FM_CLUBS.find(x=>x.id==='derry-city'||x.name==='Derry City');
  if(derry){
    derry.meetings=derry.meetings||[];
    const meeting={date:'21.09.2042',competition:'FAI Cup · Viertelfinale',venue:'A',result:'0:2'};
    const mi=derry.meetings.findIndex(x=>x.date===meeting.date);
    if(mi>=0)derry.meetings[mi]=meeting;else derry.meetings.unshift(meeting);
    derry.lastMeeting='21.09.2042 · Derry City 0:2 Finn Harps';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x&&(x.year===2042||x.season===2042));
  if(season){
    season.referenceDate=date;
    season.snapshotDate=date;
    season.latestHeadline='FAI Cup: Finn Harps gewinnt das North-West-Derby bei Derry City 2:0 und erreicht das Halbfinale.';
    season.faiCup={...(season.faiCup||{}),status:'Halbfinale erreicht',latestResult:'21.09.2042 · Derry City 0:2 Finn Harps',round:'Viertelfinale'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='21.09.2042: 2:0 bei Derry City im FAI-Cup-Viertelfinale. Ben Barry (25.) und Romano Maisto (76.) treffen; 74 Prozent Ballbesitz. Gustavo da Silva verletzt sich beim Sprint an der Oberschenkelrückseite und fällt voraussichtlich 3–4 Wochen aus.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-09-21-ben-barry-goal-derry-cup',date,player:'Ben Barry',type:'goal',title:'Barry trifft im Pokalderby',detail:'Barry bringt Finn Harps in Minute 25 bei Derry City in Führung.'},
    {id:'2042-09-21-romano-maisto-goal-derry-cup',date,player:'Romano Maisto',type:'goal',title:'Maisto entscheidet das Viertelfinale',detail:'Maisto erzielt in Minute 76 das 2:0 und sichert den Halbfinaleinzug.'},
    {id:'2042-09-21-gustavo-da-silva-hamstring',date,player:'Gustavo da Silva',type:'injury',title:'Da Silva fällt 3–4 Wochen aus',detail:'Zerrung der Oberschenkelrückseite nach einem Sprint im FAI-Cup-Viertelfinale gegen Derry City. Behandlung durch die Vereinsphysiotherapeuten.'},
    {id:'2042-09-21-thomas-kenny-325-pro',date,player:'Thomas Kenny',type:'milestone',title:'325 Profispiele',detail:'Kenny absolviert beim 2:0 in Derry sein 325. Spiel als Profi.'},
    {id:'2042-09-21-raul-350-pro',date,player:'Raúl',type:'milestone',title:'350 Profispiele',detail:'Raúl erreicht im North-West-Derby die Marke von 350 Profispielen.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielbericht',date,competition:'FAI Cup',fixtureDate:date,
    headline:'North-West-Derby an die Harps: Barry und Maisto schießen Finn Harps ins Halbfinale',
    subheadline:'Finn Harps gewinnt das FAI-Cup-Viertelfinale bei Derry City 2:0. Barry trifft vor der Pause, Maisto macht in Minute 76 den Deckel drauf. Einziger Wermutstropfen: Gustavo da Silva fällt mehrere Wochen aus.',
    label:'FAI CUP · VIERTELFINALE · DERRY CITY 0:2 FINN HARPS',
    heroStat:{label:'BALLBESITZ',value:'74%',note:'Kontrolle im Ryan McBride Brandywell'},
    intro:'Ein Derby, ein K.-o.-Spiel und trotzdem kaum Chaos: Finn Harps kontrolliert das Viertelfinale in Derry über weite Strecken mit dem Ball und zieht verdient ins Halbfinale ein.',
    sections:[
      {title:'Barry öffnet das Derby',text:'Nach 25 Minuten nutzt Ben Barry einen Fehler in Derrys Defensive und bringt die Harps mit 1:0 in Führung. Bis zur Pause bleibt es beim knappen Vorsprung.'},
      {title:'Kontrolle statt Derby-Hektik',text:'Finn Harps hält 74 Prozent Ballbesitz und spielt 617 von 688 Pässen zum Mitspieler. Derry kommt zwar auf drei Abschlüsse aufs Tor, erzeugt insgesamt aber nur 0,33 xG und keine Großchance.'},
      {title:'Maisto macht das Halbfinale klar',text:'In Minute 76 trifft Romano Maisto präzise ins untere Eck. Das 2:0 nimmt der Partie endgültig die letzte Spannung und sichert Finn Harps den Platz unter den letzten Vier.'},
      {title:'Da Silva zahlt den Preis',text:'Gustavo da Silva muss in Minute 52 nach einem Sprint verletzt ausgewechselt werden. Der medizinische Bericht diagnostiziert eine Zerrung der Oberschenkelrückseite; die erwartete Ausfallzeit beträgt drei bis vier Wochen.'},
      {title:'Zwei weitere Karrieremarken',text:'Thomas Kenny absolviert sein 325. Profispiel, Raúl erreicht die Marke von 350 Profieinsätzen.'}
    ],
    verdictHeading:'Derby gewonnen, Halbfinale gebucht',
    verdict:'Das Ergebnis wirkt unspektakulär, die Kontrolle dahinter ist es nicht. Finn Harps lässt sich vom Derbyrahmen nicht in ein wildes Spiel ziehen, bestimmt mit dem Ball das Tempo und schlägt in den entscheidenden Momenten zu. Sportlich sauber, medizinisch allerdings mit einem unangenehmen Preis.',
    sources:['FM-Spielübersicht Derry City – Finn Harps · 21.09.2042','Finn-Harps-Spielerstatistiken · 21.09.2042','FourFourTwo-Spielbericht · 21.09.2042','Medizinischer Bericht Gustavo da Silva · 21.09.2042']
  });

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-09-21-derry-city-finn-harps-0-2-fai-cup',date,season:2042,category:'FAI Cup',accent:'gold',featured:true,
    eyebrow:'FAI CUP · VIERTELFINALE · 0:2',
    title:'Derbysieg bringt Harps ins Halbfinale',
    summary:'Ben Barry und Romano Maisto treffen beim 2:0 in Derry. Finn Harps kontrolliert das North-West-Derby, verliert aber Gustavo da Silva für voraussichtlich drei bis vier Wochen.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','derry-city','ben-barry','romano-maisto','gustavo-da-silva','season-2042']
  });
})();