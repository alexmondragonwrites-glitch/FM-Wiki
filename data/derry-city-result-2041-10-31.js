(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2041-10-31-derry-city-finn-harps-premier-division',date:'2041-10-31',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'derry-city',name:'Derry City',short:'DER',score:2},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    score:'2:3',homeGoals:2,awayGoals:3,halfTime:'2:2',
    venue:'Ryan McBride Brandywell',location:'Derry, Irland',attendance:7381,awayFans:369,weather:'Teilweise bewölkt · 13 °C',referee:'Stephen Lawless',
    headline:'Von 0:2 auf 3:2: Finn Harps dreht Derry und macht St Patrick’s zum Vizemeister',
    verdict:'Derry führt nach zwölf Minuten 2:0, doch Finn Harps dreht das Spiel noch. Romano Maisto und Emerson Escárcega gleichen vor der Pause aus, Fionn Gavin erzielt in der 57. Minute den Siegtreffer. Mit dem Erfolg revanchiert sich der Meister für das Pokal-Aus gegen Derry und sichert St Patrick’s Athletic rechnerisch Rang zwei.',
    scorers:[
      {player:'Romano Maisto',team:'Finn Harps',goals:1,minutes:[31]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[34]},
      {player:'Fionn Gavin',team:'Finn Harps',goals:1,minutes:[57]}
    ],
    events:[
      {minute:4,type:'goal',team:'Derry City',player:'Kieran McClelland',text:'1:0 · Elfmeter'},
      {minute:12,type:'goal',team:'Derry City',player:null,text:'2:0'},
      {minute:31,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'2:1'},
      {minute:34,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'2:2'},
      {minute:41,type:'missedPenalty',team:'Finn Harps',player:'Justin Ramsey',text:'Elfmeter verschossen'},
      {minute:'45+1',type:'injury',team:'Finn Harps',player:'Romano Maisto',text:'Verletzt'},
      {minute:57,type:'goal',team:'Finn Harps',player:'Fionn Gavin',text:'2:3'}
    ],
    stats:[
      {label:'Schüsse',home:3,away:18,kind:'number'},
      {label:'Schüsse aufs Tor',home:2,away:11,kind:'number'},
      {label:'xG',home:1.25,away:3.08,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:1,away:2,kind:'number'},
      {label:'Großchancen',home:1,away:2,kind:'number'},
      {label:'Ballbesitz',home:27,away:73,kind:'percent'},
      {label:'Ecken',home:3,away:12,kind:'number'},
      {label:'Fouls',home:17,away:8,kind:'number'},
      {label:'Angekommene Pässe',home:231,away:613,kind:'number',homeDetail:'76 % · 231/309',awayDetail:'87 % · 613/707'},
      {label:'Gewonnene Zweikämpfe',home:80,away:88,kind:'percent',homeDetail:'20/25',awayDetail:'12/14'},
      {label:'Gewonnene Kopfbälle',home:59,away:41,kind:'percent',homeDetail:'24/41',awayDetail:'17/41'},
      {label:'Gelbe Karten',home:2,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Intensität',home:6.83,away:6.88,kind:'decimal'},
      {label:'Intensive Sprints',home:101,away:131,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:35,wins:33,draws:2,losses:0,goalsFor:109,goalsAgainst:15,goalDifference:94,points:101},
    leagueConsequences:{
      stPatricks:{position:2,played:35,points:68,goalsFor:61,goalsAgainst:35,goalDifference:26,runnerUpClinched:true,championsLeagueQualification:true,note:'Mit vier Punkten Vorsprung auf Derry bei nur noch einem verbleibenden Ligaspiel ist St Patrick’s Athletic rechnerisch Vizemeister; laut Save-Kontext bedeutet Rang zwei die Champions-League-Qualifikation.'},
      derryCity:{position:3,played:35,points:64,goalsFor:63,goalsAgainst:39,goalDifference:24}
    },
    standout:{player:'Fionn Gavin',team:'Finn Harps',rating:7.9,goals:1,note:'Erzielt in der 57. Minute den Siegtreffer zum 3:2.'},
    keyPerformers:[
      {player:'Romano Maisto',rating:7.8,goals:1,note:'Leitet mit dem 2:1 in Minute 31 die Aufholjagd ein, verletzt sich aber noch vor der Pause.'},
      {player:'Emerson Escárcega',rating:7.3,goals:1,note:'Gleicht drei Minuten nach Maistos Treffer zum 2:2 aus.'},
      {player:'Fionn Gavin',rating:7.9,goals:1,note:'Entscheidet das Spiel nach der Pause und gehört zu den besten Harps-Spielern.'}
    ],
    injuries:[
      {player:'Romano Maisto',diagnosis:'Leistenzerrung',date:'2041-10-31',cause:'Beim Sprint/Hinterherjagen des Balles',physio:'3 bis 4 Wochen Ausfall',status:'Behandlung durch Vereinsphysiotherapeuten'},
      {player:'Dom Docherty',diagnosis:'Schlüsselbeinbruch',status:'1 bis 5 Tage bis zur Rückkehr'},
      {player:'Giacomo Papini',diagnosis:'Zerrung der Oberschenkelvorderseite',status:'11 Tage bis 3 Wochen'},
      {player:'Amir Mašić',diagnosis:'Knöchelverdrehung',status:'1 bis 3 Tage'},
      {player:'Pol Muñoz',diagnosis:'Bänderzerrung im Knie',status:'1 bis 6 Tage'}
    ],
    milestones:[
      {player:'Romano Maisto',text:'Erzielt sein 25. Ligator der Karriere.'},
      {player:'Evan Reilly',text:'Absolviert sein 50. Profispiel.'}
    ],
    analysis:{
      comeback:'Derry nutzt die Anfangsphase maximal effizient und führt nach zwölf Minuten 2:0. Finn Harps reagiert jedoch noch vor der Pause mit Toren von Maisto und Escárcega.',
      control:'Das Endergebnis ist enger als das Spielbild: 18:3 Schüsse, 11:2 aufs Tor, 3,08:1,25 xG, 73 Prozent Ballbesitz und 12:3 Ecken sprechen klar für Finn Harps.',
      missedPenalty:'Justin Ramsey vergibt beim Stand von 2:2 in der 41. Minute einen Elfmeter. Fionn Gavin erzielt nach der Pause trotzdem den verdienten Siegtreffer.',
      cupRevenge:'Der Auswärtssieg liefert zugleich die sportliche Revanche für das frühere Pokal-Aus gegen Derry City.',
      runnerUp:'Durch Derrys Niederlage ist St Patrick’s Athletic bei vier Punkten Vorsprung und einem verbleibenden Spiel nicht mehr von Rang zwei zu verdrängen. Die Harps machen Pats damit zum Vizemeister und sichern ihnen laut Save-Kontext den Champions-League-Platz.',
      injuryTradeoff:'Der Sieg kostet Romano Maisto. Seine Leistenzerrung bedeutet drei bis vier Wochen Pause. Gleichzeitig nähern sich Docherty, Mašić und Pol ihrer Rückkehr.',
      leagueContext:'Finn Harps steht nach 35 Ligaspielen bei 33 Siegen, zwei Remis, keiner Niederlage und erstmals über 100 Punkten: 101 Zähler bei 109:15 Toren.'
    },
    sources:['FM-Spielübersicht Derry City – Finn Harps · 31.10.2041','Finn-Harps-Spielerstatistiken · 31.10.2041','Medizinischer Bericht Romano Maisto · 31.10.2041','Manager-Kontext zur Pokal-Revanche und Champions-League-Qualifikation von St Patrick’s Athletic']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-10-31';
    season.latestHeadline='Premier Division: Finn Harps dreht ein 0:2 bei Derry City zum 3:2; St Patrick’s Athletic ist Vizemeister.';
    season.league={
      ...(season.league||{}),position:1,played:35,wins:33,draws:2,losses:0,goalsFor:109,goalsAgainst:15,goalDifference:94,points:101,
      latestResult:'31.10.2041 · Derry City 2:3 Finn Harps',champion:true,titleClinchedDate:'2041-08-30',runnerUp:'St Patrick’s Athletic',runnerUpClinchedDate:'2041-10-31'
    };
    season.changes=season.changes||{notes:[]};
    const note='31.10.2041: Finn Harps dreht bei Derry City ein 0:2 zum 3:2. Maisto, Escárcega und Gavin treffen; Ramsey verschießt beim 2:2 einen Elfmeter. Nach 35 Ligaspielen: 33 Siege, 2 Remis, 0 Niederlagen, 109:15 Tore, 101 Punkte. St Patrick’s Athletic ist dadurch rechnerisch Vizemeister und erreicht laut Save-Kontext die Champions League. Maisto fällt mit Leistenzerrung 3 bis 4 Wochen aus.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-10-31-fionn-gavin-derry-winner',date:'2041-10-31',player:'Fionn Gavin',type:'standout',title:'Siegtreffer nach 0:2-Rückstand',detail:'Erzielt in der 57. Minute das 3:2 bei Derry City und erhält die Note 7,9.'},
    {id:'2041-10-31-romano-maisto-derry-goal-injury',date:'2041-10-31',player:'Romano Maisto',type:'injury',title:'Tor und Leistenzerrung',detail:'Trifft in Minute 31 zum 1:2 und erleidet noch vor der Pause eine Leistenzerrung. Voraussichtlicher Ausfall: drei bis vier Wochen.'},
    {id:'2041-10-31-emerson-escarcega-derry-equalizer',date:'2041-10-31',player:'Emerson Escárcega',type:'standout',title:'Escárcega gleicht in Derry aus',detail:'Erzielt in der 34. Minute das 2:2 und bringt Finn Harps vollständig zurück ins Spiel.'},
    {id:'2041-10-31-romano-maisto-25-league-goals',date:'2041-10-31',player:'Romano Maisto',type:'milestone',title:'25 Ligatore',detail:'Sein Treffer bei Derry City ist das 25. Ligator seiner Karriere.'},
    {id:'2041-10-31-evan-reilly-50-pro',date:'2041-10-31',player:'Evan Reilly',type:'milestone',title:'50. Profispiel',detail:'Erreicht beim 3:2 in Derry sein 50. Spiel als Profi.'},
    {id:'2041-10-31-dom-docherty-near-return',date:'2041-10-31',player:'Dom Docherty',type:'recovery',title:'Docherty kurz vor dem Comeback',detail:'Der medizinische Überblick nennt nur noch ein bis fünf Tage bis zur Rückkehr nach dem Schlüsselbeinbruch.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-10-31-derry-city-finn-harps-spielbericht',type:'Spielbericht',date:'2041-10-31',competition:'Premier Division',fixtureDate:'31.10.2041',
    home:'Derry City',away:'Finn Harps',score:'2:3',location:'Ryan McBride Brandywell · Derry · 7.381 Zuschauer',
    headline:'Revanche nach 0:2: Harps dreht Derry und macht Pats zum Vizemeister',
    subheadline:'Maisto und Escárcega gleichen noch vor der Pause aus, Fionn Gavin vollendet die Wende. Der Sieg rächt das Pokal-Aus und sichert St Patrick’s Athletic rechnerisch Platz zwei.',
    label:'PREMIER DIVISION · DERRY CITY 2:3 FINN HARPS',
    heroStat:{label:'Wende in Derry',value:'0:2 → 3:2',note:'18:3 Schüsse · 11:2 aufs Tor · 3,08:1,25 xG · 73 % Ballbesitz'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Zwölf Minuten lang sieht es aus, als könnte Derry City den Meister erneut ärgern. Dann kippt das Spiel vollständig. Finn Harps antwortet auf den frühen 0:2-Rückstand, gleicht noch vor der Pause aus und gewinnt durch Fionn Gavins Treffer in der 57. Minute. Für Derry ist die Niederlage doppelt bitter: St Patrick’s Athletic ist damit Vizemeister.',
    sections:[
      {title:'Derry trifft zweimal, Harps antwortet sofort',text:'Ein Elfmeter in Minute 4 und ein weiterer Treffer in der 12. Minute bringen Derry 2:0 in Führung. Romano Maisto verkürzt in der 31. Minute, Emerson Escárcega gleicht bereits drei Minuten später aus.'},
      {title:'Selbst ein verschossener Elfmeter stoppt die Wende nicht',text:'Justin Ramsey vergibt in der 41. Minute vom Punkt. Finn Harps bleibt trotzdem am Drücker und kommt nach der Pause durch Fionn Gavin zum 3:2.'},
      {title:'Die Zahlen erzählen ein deutliches Spiel',text:'Derry erzielt aus drei Schüssen zwei Tore. Finn Harps kommt auf 18 Abschlüsse, elf Schüsse aufs Tor und 3,08 xG. 73 Prozent Ballbesitz und zwölf Ecken zeigen, wo das Spiel über weite Strecken stattfindet.'},
      {title:'Pokal-Revanche mit Nebenwirkung für die Tabelle',text:'Nach dem früheren Pokal-Aus gegen Derry bekommt Finn Harps seine Revanche in der Liga. Gleichzeitig bleibt Derry mit 64 Punkten vier Zähler hinter St Patrick’s Athletic. Bei nur noch einem Spiel ist Pats damit Vizemeister und erhält laut Save-Kontext den Champions-League-Platz.'},
      {title:'Maisto bezahlt den Sieg teuer',text:'Der Italiener trifft zum 1:2 und verletzt sich noch vor der Pause. Diagnose: Leistenzerrung. Die Vereinsphysios rechnen mit drei bis vier Wochen Ausfall.'},
      {title:'Docherty steht dagegen vor der Rückkehr',text:'Der aktuelle Verletztenüberblick nennt für Dom Docherty nur noch ein bis fünf Tage. Auch Mašić und Pol Muñoz stehen kurz vor dem Comeback, während Papini weiterhin länger fehlt.'},
      {title:'101 Punkte und weiter ungeschlagen',text:'Finn Harps steht nach 35 Ligaspielen bei 33 Siegen und zwei Remis. 109:15 Tore und 101 Punkte unterstreichen eine historische Saison.'}
    ],
    verdictHeading:'Erst Derry rächen, dann Pats nach Europa schieben',
    verdict:'Das 3:2 ist eines dieser Ergebnisse, die mehrere Geschichten gleichzeitig schreiben. Finn Harps dreht einen frühen Zwei-Tore-Rückstand, revanchiert sich für das Pokal-Aus, überspringt die 100-Punkte-Marke und sorgt nebenbei dafür, dass St Patrick’s Athletic als Vizemeister in die Champions League geht. Nur Maistos Verletzung nimmt dem Abend etwas Glanz.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-31-derry-city-finn-harps',date:'2041-10-31',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · 35. SPIELTAG',
    title:'0:2 gedreht: Harps gewinnt 3:2 in Derry',
    summary:'Maisto, Escárcega und Gavin drehen das Spiel. Finn Harps steht bei 101 Punkten, St Patrick’s ist Vizemeister und Maisto fällt drei bis vier Wochen aus.',
    href:'presse.html?id=2041-10-31-derry-city-finn-harps-spielbericht',
    entities:['finn-harps','derry-city','st-patricks-athletic','fionn-gavin','romano-maisto','emerson-escarcega','season-2041']
  });
})();