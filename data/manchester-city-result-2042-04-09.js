(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2042-04-09-finn-harps-man-city-champions-league-quarterfinal-first-leg';
  const reportId='2042-04-09-finn-harps-man-city-1-0-spielbericht';

  const match={
    id:fixtureId,date:'2042-04-09',season:2042,competition:'UEFA Champions League',stage:'Viertelfinale · Hinspiel',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    away:{id:'man-city',name:'Manchester City',short:'MCI',score:0},
    score:'1:0',homeGoals:1,awayGoals:0,halfTime:'1:0',aggregateAfterMatch:'1:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:10000,awayFans:500,weather:'Starker Wind · feucht · 17 °C',referee:'Roman Semenov',
    headline:'Escárcega trifft früh, Henrique hält die Null: Finn Harps schlägt Manchester City 1:0',
    verdict:'Finn Harps nimmt einen knappen, aber hochverdienten Vorsprung mit nach Manchester. Emerson Escárcega trifft bereits in der 6. Minute, danach kontrollieren die Harps große Teile der Partie und lassen Manchester City keinen einzigen Schuss aufs Tor. 8:0 Schüsse aufs Tor bei 12:7 Abschlüssen und 57 Prozent Ballbesitz zeigen, dass das 1:0 mehr als nur ein glücklicher Heimsieg ist. Gleichzeitig bleibt das Viertelfinale bei nur einem Tor Vorsprung völlig offen.',
    scorers:[{player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[6]}],
    events:[
      {minute:2,type:'injury',team:'Finn Harps',player:"Cormac O'Kane",text:'Knieverdrehung · muss früh ausgewechselt werden'},
      {minute:6,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'1:0 · zunächst nicht gegeben, nach Videobeweis anerkannt'}
    ],
    stats:[
      {label:'Schüsse',home:12,away:7,kind:'number'},
      {label:'Schüsse aufs Tor',home:8,away:0,kind:'number'},
      {label:'xG',home:1.15,away:0.62,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:1,away:3,kind:'number'},
      {label:'Großchancen',home:0,away:0,kind:'number'},
      {label:'Ballbesitz',home:57,away:43,kind:'percent'},
      {label:'Ecken',home:3,away:7,kind:'number'},
      {label:'Fouls',home:14,away:13,kind:'number'},
      {label:'Angekommene Pässe',home:'548/629',away:'412/481',kind:'text'},
      {label:'Passquote',home:87,away:86,kind:'percent'},
      {label:'Gewonnene Zweikämpfe',home:75,away:70,kind:'percent'},
      {label:'Gewonnene Kopfbälle',home:62,away:34,kind:'percent'},
      {label:'Gelbe Karten',home:0,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:7.17,away:6.65,kind:'decimal'},
      {label:'Intensive Sprints',home:177,away:170,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':8.0,'Diego Fernández':6.8,'Mareks Istrankins':7.8,'Torric Bruce':7.1,'Kevin Kelly':7.8,
      'Amir Mašić':6.9,'Daryl Frame':7.0,'Giacomo Papini':6.8,'Romano Maisto':6.6,'Emerson Escárcega':7.8,
      'Callum Brennan':7.3,"Jim O'Neill":6.8,'Billy Walker':6.7,'Dom Docherty':6.8,'Pol Muñoz':6.7
    },
    standout:{player:'Paulo Henrique',team:'Finn Harps',rating:8.0,cleanSheet:true,note:'Höchste Harps-Note. City kommt zwar zu sieben Abschlüssen, aber zu keinem einzigen Schuss aufs Tor.'},
    injuries:[
      {player:"Cormac O'Kane",injury:'Knieverdrehung',date:'2042-04-09',expectedAbsence:'5–7 Tage',context:'Beim Sprint im Champions-League-Hinspiel gegen Manchester City verletzt.'},
      {player:'Justin Ramsey',injury:'Knöchelverdrehung',date:'2042-04-04',remainingAbsence:'10 Tage–3 Wochen',context:'Fehlt weiterhin und verpasst das Hinspiel gegen Manchester City.'}
    ],
    analysis:{
      earlyControl:'Trotz O’Kanes Verletzung nach wenigen Minuten findet Finn Harps sofort ins Spiel. Escárcega trifft in der 6. Minute; der zunächst aberkannte Treffer wird nach Videobeweis anerkannt.',
      defensiveStatement:'Manchester City bringt keinen einzigen seiner sieben Abschlüsse aufs Tor. Gegen einen Kader mit Kouamé, Gül, Compagnucci und Peterges ist das die stärkste Aussage des Abends.',
      possession:'Mit 57 Prozent Ballbesitz, 87 Prozent Passquote und 548 angekommenen Pässen spielt Finn Harps nicht wie ein klassischer Außenseiter, sondern kontrolliert lange Phasen selbst.',
      peterges:'Der frühere Finn-Harps-Spieler Marian Peterges bleibt laut Mannschaftsanalyse im Offensivspiel von Manchester City auffallend wirkungslos. Ausgerechnet gegen seinen Ex-Klub findet Citys Weltklasse-Spielmacher kaum Einfluss.',
      openTie:'Der Vorsprung ist wertvoll, aber dünn. Ein 1:0 verändert die Ausgangslage, entscheidet aber noch nichts: Im Etihad reicht City ein Treffer, um das Duell wieder vollständig zu öffnen.',
      recentHistory:'Finn Harps setzt seine bemerkenswerte Serie gegen Manchester City fort. Nach dem 3:1 in der Champions League 2040 und dem 2:1 bei der Klub-WM 2041 folgt nun ein 1:0 im Champions-League-Viertelfinale 2042.'
    },
    notes:[
      'Finn Harps gewinnt das Champions-League-Viertelfinal-Hinspiel gegen Manchester City 1:0.',
      'Emerson Escárcega erzielt in der 6. Minute den einzigen Treffer; das Tor wird nach Videobeweis anerkannt.',
      'Manchester City kommt bei sieben Abschlüssen auf keinen einzigen Schuss aufs Tor.',
      'Paulo Henrique erhält mit 8,0 die beste Harps-Note.',
      "Cormac O'Kane erleidet eine Knieverdrehung und fällt voraussichtlich 5–7 Tage aus.",
      'Justin Ramsey fehlt weiterhin mit Knöchelverdrehung.',
      'Der Gesamtstand vor dem Rückspiel lautet 1:0 für Finn Harps. Das Duell bleibt völlig offen.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Manchester City · 09.04.2042','Finn-Harps-Spielerstatistiken · 09.04.2042','FourFourTwo Spielbericht · Champions-League-Viertelfinale Hinspiel','FM-Medizinbericht Cormac O’Kane · 09.04.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-04-09','20:00','Manchester City','Heim','1:0','UEFA Champions League · Viertelfinale Hinspiel',1];
  const fidx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]==='2042-04-09'&&/Manchester City|Man City/.test(x[2]||''));
  if(fidx>=0)window.FM_FIXTURES[fidx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const city=window.FM_CLUBS.find(x=>x.id==='man-city'||x.id==='manchester-city'||x.name==='Manchester City'||x.name==='Man City');
  if(city){
    city.status='current';city.season=2042;city.completion=Math.max(city.completion||0,90);
    city.meetings=city.meetings||[];
    const meeting={date:'09.04.2042',competition:'UEFA Champions League · Viertelfinale Hinspiel',venue:'A',result:'0:1'};
    const idx=city.meetings.findIndex(x=>x.date==='09.04.2042');
    if(idx>=0)city.meetings[idx]=meeting;else city.meetings.unshift(meeting);
    city.lastMeeting='09.04.2042 · Finn Harps 1:0 Manchester City';
    city.summary='Manchester City verliert das Champions-League-Viertelfinal-Hinspiel in Donegal 0:1. Escárcega trifft früh; City bringt trotz sieben Abschlüssen keinen Schuss aufs Tor. Das Rückspiel bleibt bei nur einem Tor Differenz vollkommen offen.';
    city.currentTie={competition:'UEFA Champions League',stage:'Viertelfinale',firstLeg:'Finn Harps 1:0 Manchester City',aggregate:'Finn Harps 1:0 Manchester City',status:'Rückspiel offen'};
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-04-09';
    season.latestHeadline='Champions League: Finn Harps schlägt Manchester City im Viertelfinal-Hinspiel 1:0. Escárcega trifft früh, City bleibt ohne Schuss aufs Tor.';
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.quarterFinal={
      ...(season.championsLeague.quarterFinal||{}),opponent:'Manchester City',firstLeg:{date:'2042-04-09',venue:'Donegal Stadium',result:'1:0'},aggregate:'1:0',status:'Hinspiel beendet · Rückspiel offen'
    };
    season.nextFocus={competition:'UEFA Champions League',stage:'Viertelfinale · Rückspiel',opponent:'Manchester City',venue:'Etihad Stadium',aggregate:'1:0 für Finn Harps',status:'Alles offen'};
    season.injuries=season.injuries||[];
    const injury={player:"Cormac O'Kane",date:'2042-04-09',injury:'Knieverdrehung',absence:'5–7 Tage'};
    const ii=season.injuries.findIndex(x=>x.player===injury.player&&x.date===injury.date);
    if(ii>=0)season.injuries[ii]=injury;else season.injuries.push(injury);
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='09.04.2042: Finn Harps gewinnt das Champions-League-Viertelfinal-Hinspiel gegen Manchester City 1:0. Escárcega trifft in Minute 6, City bleibt bei sieben Abschlüssen ohne Schuss aufs Tor. O’Kane verletzt sich früh am Knie und fällt voraussichtlich 5–7 Tage aus. Vor dem Rückspiel steht es insgesamt 1:0 – entschieden ist noch nichts.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-04-09-escarcega-man-city-goal',date:'2042-04-09',player:'Emerson Escárcega',type:'goal',title:'Escárcega entscheidet das Hinspiel',detail:'Trifft in der 6. Minute zum 1:0 gegen Manchester City. Der zunächst aberkannte Treffer wird nach Videobeweis anerkannt.'},
    {id:'2042-04-09-paulo-henrique-man-city',date:'2042-04-09',player:'Paulo Henrique',type:'standout',title:'Henrique führt Harps zur europäischen Null',detail:'Note 8,0 beim 1:0 gegen Manchester City. Die Gäste bringen keinen Schuss aufs Tor.'},
    {id:'2042-04-09-cormac-okane-injury',date:'2042-04-09',player:"Cormac O'Kane",type:'injury',title:'O’Kane verletzt sich gegen City',detail:'Knieverdrehung beim Sprint; prognostizierte Ausfallzeit 5–7 Tage.'},
    {id:'2042-04-09-marian-peterges-return',date:'2042-04-09',player:'Marian Peterges',type:'opponent',title:'Peterges bleibt gegen Ex-Klub blass',detail:'Der frühere Harps-Spieler findet laut Mannschaftsanalyse im City-Offensivspiel nur wenig Einfluss.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-04-09',competition:'UEFA Champions League',fixtureDate:'09.04.2042',
    home:'Finn Harps',away:'Manchester City',score:'1:0',location:'Donegal Stadium · Stranorlar · 10.000 Zuschauer',
    headline:'Ein Tor Vorsprung, nichts entschieden: Harps schlagen City 1:0',
    subheadline:'Emerson Escárcega trifft nach sechs Minuten, Paulo Henrique führt die Harps zu einem europäischen Clean Sheet und Manchester City bleibt ohne Schuss aufs Tor. Das Hinspiel gehört Finn Harps – das Viertelfinale noch niemandem.',
    heroStat:{label:'Citys Schüsse aufs Tor',value:'0',note:'Finn Harps 8 · Manchester City 0 · Gesamtstand 1:0'},
    sections:[
      {title:'Sechs Minuten bis zum ersten Schlag',text:'Finn Harps braucht kaum Anlauf. Emerson Escárcega trifft in der 6. Minute. Der Treffer wird zunächst nicht gegeben, doch nach Videobeweis zählt das 1:0.'},
      {title:'O’Kanes Verletzung verändert den Start, nicht das Spiel',text:'Schon nach wenigen Minuten muss Cormac O’Kane nach einer Knieverdrehung raus. Callum Brennan übernimmt früh. Trotz dieses Einschnitts verliert Finn Harps weder Struktur noch Kontrolle.'},
      {title:'Acht zu null Schüsse aufs Tor',text:'Die auffälligste Zahl des Abends steht nicht beim Ballbesitz, sondern bei der Zielgenauigkeit. Finn Harps bringt acht Abschlüsse auf Widdowsons Tor, Manchester City keinen einzigen auf das von Paulo Henrique. Bei 12:7 Schüssen und 1,15:0,62 xG ist der Heimsieg knapp, aber verdient.'},
      {title:'Peterges findet gegen den Ex-Klub keinen Rhythmus',text:'Marian Peterges kehrt als Weltklassespielmacher und ehemaliger Harps-Spieler nach Donegal zurück. Ausgerechnet hier bleibt sein Einfluss gering: Die Mannschaftsanalyse zählt ihn zu Citys unauffälligsten Offensivspielern.'},
      {title:'Das 1:0 ist Vorsprung, keine Versicherung',text:'Für das Rückspiel in Manchester verändert sich die Psychologie, nicht die Mathematik. City braucht nur ein Tor zum Ausgleich des Gesamtergebnisses. Finn Harps hat sich eine hervorragende Ausgangslage erarbeitet, aber keinerlei Raum für Selbstzufriedenheit.'}
    ],
    strengthsTitle:'WARUM DAS HINSPIEL AN FINN HARPS GEHT',strengthsHeading:'Kontrolle, defensive Präzision und der frühe Treffer',
    strengths:['1:0 durch Escárcega bereits in Minute 6','8:0 Schüsse aufs Tor','57 Prozent Ballbesitz gegen Manchester City','87 Prozent Passquote','Paulo Henrique mit Note 8,0','Citys Weltklasse-Offensive ohne einen Abschluss aufs Tor','Stabile Reaktion auf O’Kanes frühe Verletzung'],
    vulnerabilitiesTitle:'WARUM DAS DUELL TROTZDEM OFFEN BLEIBT',vulnerabilitiesHeading:'Ein einziges Tor trennt beide Mannschaften',
    vulnerabilities:['Nur 1:0 trotz acht Schüssen aufs Tor','City gewinnt sieben Ecken','Rückspiel im Etihad Stadium','Justin Ramsey weiterhin verletzt','O’Kane mit Knieverdrehung und 5–7 Tagen Ausfall','Ein City-Tor würde den Gesamtstand sofort ausgleichen'],
    verdictHeading:'Das Hinspiel gewonnen, die Aufgabe nicht',
    verdict:'Finn Harps hat sich genau das Ergebnis erarbeitet, das vor einem Auswärtsspiel beim europäischen Schwergewicht Hoffnung und Gefahr zugleich erzeugt. City war in Donegal offensiv erstaunlich stumpf, und die Harps waren die bessere Mannschaft. Aber 1:0 ist im K.-o.-Fußball kein Polster. Es ist ein Vorsprung, den man im Etihad noch einmal verteidigen – oder besser: ausbauen – muss.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-04-09-finn-harps-man-city-1-0',date:'2042-04-09',season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · VIERTELFINALE · HINSPIEL',
    title:'Escárcega trifft, City bleibt ohne Torschuss: Harps führen 1:0',
    summary:'Finn Harps gewinnt das Viertelfinal-Hinspiel gegen Manchester City 1:0. Escárcega trifft früh, City bringt keinen Schuss aufs Tor. Vor dem Rückspiel im Etihad bleibt dennoch alles offen.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','man-city','emerson-escarcega','paulo-henrique','cormac-okane','marian-peterges','champions-league','season-2042']
  });
})();