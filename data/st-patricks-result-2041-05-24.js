(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2041-05-24-st-patricks',date:'2041-05-24',season:2041,competition:'SSE Airtricity League Premier Division',round:'Ligaspiel',
    home:"St Patrick's Athletic",away:'Finn Harps',score:'0:3',homeGoals:0,awayGoals:3,venue:'Richmond Park',attendance:5400,
    report:'presse.html?id=2041-05-24-st-patricks-spielbericht',
    scorers:['Daryl Frame 30.','Justin Ramsey 37., 40.'],
    incidents:['Giacomo Papini Gelb 32.','Don Docherty Gelb 45+1.','Karamoko Carbon Gelb 78.','Greg Smith Gelb 81.','Philip Magill Gelb 83.'],
    stats:{shots:'4:12',shotsOnTarget:'1:10',xG:'0,51:1,82',possession:'35:65',passesCompleted:'287:525',passCompletion:'82:86',corners:'3:10',fouls:'14:13',wonTackles:'80:83',wonHeaders:'42:55',yellowCards:'3:2'},
    summary:'Finn Harps gewinnt im ausverkauften Richmond Park mit 3:0. Daryl Frame eröffnet in der 30. Minute, Justin Ramsey entscheidet die Partie mit einem Doppelpack innerhalb von drei Minuten. Zehn Schüsse aufs Tor, 65 Prozent Ballbesitz und 525 angekommene Pässe unterstreichen die Kontrolle.',
    standout:['Justin Ramsey 8,4 · 2 Tore','Giacomo Papini 7,8','Don Docherty 7,5','Cormac O’Kane 7,4','Paulo Henrique 7,4','Torric Bruce 7,4']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.leaguePlayed=17;season.leagueWins=16;season.leagueDraws=1;season.leagueLosses=0;
    season.leagueGoalsFor=53;season.leagueGoalsAgainst=2;season.leaguePoints=49;
    season.summary='Finn Harps gewinnt am 24. Mai mit 3:0 bei St Patrick’s Athletic und feiert den neunten Ligasieg in Folge. Nach 17 Spielen steht der Tabellenführer bei 49 Punkten und einem Torverhältnis von 53:2.';
  }
  window.FM_LEAGUE_2041={...(window.FM_LEAGUE_2041||{}),updated:'2041-05-24',leader:'Finn Harps',played:17,wins:16,draws:1,losses:0,goalsFor:53,goalsAgainst:2,goalDifference:51,points:49};

  let club=(window.FM_CLUBS||[]).find(x=>x.id==='st-patricks'||x.name==="St Patrick's Athletic");
  if(!club){
    club={id:'st-patricks',name:"St Patrick's Athletic",short:'SPA',country:'Irland',league:'Premier Division',scope:['Irland'],meetings:[],checklist:{}};
    window.FM_CLUBS.push(club);
  }
  club.status='partial';
  club.completion=Math.max(Number(club.completion||0),48);
  club.season=2041;
  club.summary="St Patrick's Athletic hielt im April noch ein 0:0 in Donegal, wurde am 24. Mai im eigenen Richmond Park jedoch mit 0:3 geschlagen. Drei Harps-Tore zwischen der 30. und 40. Minute entschieden die Partie bereits vor der Pause.";
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('24.05.2041')&&!String(tag).includes('Richmond Park')),'0:3 im Richmond Park · 24.05.2041','Nur ein Schuss aufs Tor','Drei Gegentore in zehn Minuten'];
  club.meetings=[
    {date:'24.05.2041',venue:'H',result:'0:3'},
    ...(club.meetings||[]).filter(item=>item.date!=='24.05.2041')
  ];
  club.lastMatch={date:'24.05.2041',competition:'Premier Division',result:"St Patrick's Athletic 0:3 Finn Harps",scorers:['Daryl Frame 30.','Justin Ramsey 37., 40.'],note:'St Patrick’s blieb eine halbe Stunde stabil, verlor das Spiel dann aber innerhalb von zehn Minuten gegen Frame und den doppelten Ramsey.'};
  club.pressReport={id:'2041-05-24-st-patricks-spielbericht',href:'presse.html?id=2041-05-24-st-patricks-spielbericht',label:'SPIELBERICHT · 24.05.2041',headline:'Ramsey entscheidet den Abend im Richmond Park',standfirst:'Frame eröffnet, Ramsey trifft doppelt und Finn Harps kontrolliert den Tabellenvierten mit 65 Prozent Ballbesitz.'};
  club.checklist={...(club.checklist||{}),profile:true,meetings:true,history:true};

  const notes=[
    ['daryl-frame','Daryl Frame erzielte beim 3:0 bei St Patrick’s Athletic am 24. Mai 2041 in der 30. Minute den Führungstreffer.'],
    ['justin-ramsey','Justin Ramsey traf beim 3:0 bei St Patrick’s Athletic in der 37. und 40. Minute, wurde mit der Note 8,4 zum Spieler des Spiels und entschied die Partie noch vor der Pause.'],
    ['giacomo-papini','Giacomo Papini bereitete beim 3:0 bei St Patrick’s Athletic einen Treffer vor und erhielt die Note 7,8.'],
    ['cormac-okane','Cormac O’Kane steuerte beim 3:0 bei St Patrick’s Athletic eine Vorlage bei und wurde mit 7,4 bewertet.'],
    ['don-docherty','Don Docherty bereitete beim 3:0 bei St Patrick’s Athletic einen Treffer vor und erhielt die Note 7,5.'],
    ['paulo-henrique','Paulo Henrique absolvierte beim 3:0 bei St Patrick’s Athletic am 24. Mai 2041 sein 250. Spiel als Profi.'],
    ['amir-masic','Amir Mašić absolvierte beim 3:0 bei St Patrick’s Athletic seinen 125. Einsatz für Finn Harps.']
  ];
  notes.forEach(([id,text])=>{
    const player=(window.FM_PLAYERS||[]).find(x=>x.id===id);
    if(player&&!((player.careerNarrative||[]).includes(text)))player.careerNarrative=[...(player.careerNarrative||[]),text];
  });

  const report={
    id:'2041-05-24-st-patricks-spielbericht',type:'Spielbericht',date:'2041-05-24',competition:'SSE Airtricity League Premier Division',
    fixtureDate:'Freitag, 24.05.2041',home:"St Patrick's Athletic",away:'Finn Harps',score:'0:3',location:'Richmond Park · Dublin',
    headline:'Zehn Minuten genügen: Ramsey-Doppelpack entzaubert St Patrick’s',
    subheadline:'Daryl Frame öffnet das Spiel, Justin Ramsey schließt es noch vor der Pause. Finn Harps kontrolliert den Tabellenvierten mit 65 Prozent Ballbesitz und feiert den neunten Ligasieg in Folge.',
    label:'PREMIER DIVISION · 0:3-AUSWÄRTSSIEG',
    heroStat:{label:'Schüsse aufs Tor',value:'10:1',note:'Drei Treffer zwischen der 30. und 40. Minute'},
    intro:'Eine halbe Stunde lang wirkte der Abend im ausverkauften Richmond Park wie eine geduldige Prüfung. Dann riss Finn Harps das Spiel in zehn Minuten vollständig an sich. Daryl Frame traf in der 30. Minute, Justin Ramsey legte in der 37. und 40. Minute nach. Aus einem kontrollierten Auswärtsspiel wurde noch vor der Pause eine entschiedene Partie.',
    sections:[
      {title:'Geduld bis zur ersten Lücke',text:'St Patrick’s verteidigte die Anfangsphase kompakt und hielt den Tabellenführer zunächst vom Tor fern. Finn Harps verlor dabei weder Ordnung noch Rhythmus. Mit langen Ballbesitzphasen wurde der Gegner verschoben, bis Frame in der 30. Minute einen kurzen Volley zur Führung verwandelte.'},
      {title:'Ramsey verwandelt Kontrolle in ein Ergebnis',text:'Sieben Minuten nach dem 0:1 profitierte Justin Ramsey von einem Fehler des Torhüters Max Colgan und traf mit einem harten Flachschuss. Nur drei Minuten später setzte der Weltklassestürmer einen platzierten Abschluss ins untere Eck. Sein Doppelpack und die Note 8,4 machten ihn zum Spieler des Spiels.'},
      {title:'Drei Tore, drei Vorbereiter, viele Wege',text:'Cormac O’Kane, Giacomo Papini und Don Docherty steuerten jeweils eine Vorlage bei. Dadurch entstand die Entscheidung nicht aus einer einzelnen Standardschablone, sondern aus mehreren Zonen: Halbraum, Verbindungsspiel und der letzte Pass aus der Tiefe.'},
      {title:'Die zweite Halbzeit wird zur Verwaltung mit Ball',text:'Nach der Pause fiel kein weiteres Tor, doch St Patrick’s kam auch nicht zurück in die Partie. Finn Harps hielt 65 Prozent Ballbesitz, brachte 525 von 607 Pässen an und erlaubte dem Gastgeber insgesamt nur einen Abschluss auf das Tor.'},
      {title:'Die Defensive bleibt nahezu unberührt',text:'St Patrick’s kam auf vier Schüsse und 0,51 xG. Paulo Henrique, Torric Bruce, Darcy Andrews und Kevin Kelly hielten die Räume eng genug, um aus der höheren Ballbesitzquote echte Sicherheit zu machen. Die weiße Weste war nicht spektakulär, sondern strukturell verdient.'},
      {title:'Zwei stille Meilensteine im Hintergrund',text:'Paulo Henrique absolvierte sein 250. Spiel als Profi, Amir Mašić seinen 125. Einsatz für Finn Harps. Beide Jubiläen passten zu einem Abend, an dem Erfahrung und eingespielte Abläufe ebenso wichtig waren wie Ramseys Abschlussqualität.'},
      {title:'Neun Siege in Folge und 53:2 Tore',text:'Nach 17 Ligaspielen steht Finn Harps bei 16 Siegen, einem Unentschieden und 49 Punkten. Das Torverhältnis von 53:2 zeigt, wie vollständig die Mannschaft den nationalen Wettbewerb kontrolliert. Derry City liegt bereits 14 Punkte zurück.'}
    ],
    strengthsTitle:'WAS DEN AUSWÄRTSSIEG TRUG',strengthsHeading:'Geduld, ein kurzer Torsturm und vollständige Spielkontrolle',
    strengths:['Frame eröffnet die Partie in der 30. Minute','Ramsey trifft zweimal innerhalb von drei Minuten','Zehn von zwölf Abschlüssen kommen auf das Tor','65 Prozent Ballbesitz','525 angekommene Pässe bei 86 Prozent Passquote','Nur ein gegnerischer Schuss aufs Tor','Drei verschiedene Vorlagengeber','Neunter Ligasieg in Folge'],
    vulnerabilitiesTitle:'WAS TROTZDEM OFFEN BLEIBT',vulnerabilitiesHeading:'Nach der Pause fehlt die letzte Angriffsschärfe',
    vulnerabilities:['Kein weiterer Treffer in der zweiten Halbzeit','13 Fouls und zwei Gelbe Karten trotz klarer Kontrolle','Die Chancenmenge blieb mit zwölf Abschlüssen solide, aber nicht überwältigend'],
    verdictHeading:'Ein Spitzenteam braucht nicht neun Tore, um dominant zu wirken',
    verdict:'Nach dem 9:1 gegen Shelbourne zeigte Finn Harps eine andere Form von Überlegenheit. Diesmal entstand der Sieg nicht aus einem endlosen Offensivrausch, sondern aus Geduld, zehn perfekten Minuten und einer fast ereignislosen Kontrolle danach. Ramsey lieferte die Schärfe, Frame den Öffner und das gesamte Team die Ruhe. Genau solche Abende machen aus einer spektakulären Mannschaft einen verlässlichen Serienmeister.',
    sourcesHeading:'Spieldaten vom 24. Mai 2041',
    sourcesNote:'Der Bericht basiert auf der FM-Spielübersicht, dem Medienbericht und den individuellen Spielerstatistiken der Partie.',
    sources:['FM-Spielübersicht St Patrick’s Athletic – Finn Harps, 24.05.2041','FM-Spielerstatistiken Finn Harps, 24.05.2041','FM-Medienbericht zum 0:3 im Richmond Park, 24.05.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-05-24-st-patricks',date:'2041-05-24',season:2041,category:'Premier Division',accent:'blue',
    eyebrow:'AUSWÄRTSSIEG · 0:3',title:'Ramsey-Doppelpack entscheidet den Abend im Richmond Park',
    summary:'Frame trifft in der 30. Minute, Ramsey in der 37. und 40. Minute. Mit 65 Prozent Ballbesitz und 10:1 Schüssen aufs Tor feiert Finn Harps den neunten Ligasieg in Folge.',
    href:'presse.html?id=2041-05-24-st-patricks-spielbericht',entities:['finn-harps','st-patricks','daryl-frame','justin-ramsey','giacomo-papini','cormac-okane','don-docherty','season-2041'],featured:true
  });
})();