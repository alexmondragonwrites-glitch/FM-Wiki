(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const match={
    id:'2041-05-10-athlone-town',date:'2041-05-10',season:2041,competition:'SSE Airtricity League Premier Division',round:'Ligaspiel',
    home:'Finn Harps',away:'Athlone Town',score:'2:0',homeGoals:2,awayGoals:0,venue:'Donegal Stadium',attendance:12351,
    report:'presse.html?id=2041-05-10-athlone-town-spielbericht',
    scorers:['Jim O’Neill 24.','Ben Barry 79. (Elfmeter)'],
    incidents:['Mareks Istrankins Gelb 45+2.','Radim Malý Gelb 81.','Amir Mašić Gelb 90+4.'],
    stats:{shots:'22:1',shotsOnTarget:'8:0',xG:'2,97:0,07',possession:'79:21',passesCompleted:'452:119',passCompletion:'86:61',corners:'9:3',fouls:'15:31',bigChances:'3:0',wonTackles:'90:75',wonHeaders:'66:31'},
    summary:'Vier Tage nach dem Champions-League-Aus schlägt Finn Harps Athlone Town mit 2:0. O’Neill erzielt die Führung, Barry verwandelt spät einen Elfmeter. Bei 79 Prozent Ballbesitz und 22:1 Schüssen fällt das Ergebnis deutlich knapper aus als die Spielkontrolle.',
    standout:['Billy Walker 8,1','Mareks Istrankins 7,4','Evan Reilly 7,3','Jim O’Neill 7,3','Jake Roberts 7,3']
  };
  const mi=window.FM_MATCHES.findIndex(x=>x.id===match.id);if(mi>=0)window.FM_MATCHES[mi]=match;else window.FM_MATCHES.push(match);
  const fi=window.FM_FIXTURES.findIndex(x=>x.id===match.id);if(fi>=0)window.FM_FIXTURES[fi]=match;else window.FM_FIXTURES.push(match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.leaguePlayed=15;season.leagueWins=14;season.leagueDraws=1;season.leagueLosses=0;
    season.leagueGoalsFor=41;season.leagueGoalsAgainst=1;season.leaguePoints=43;
    season.summary='Finn Harps reagiert auf das Champions-League-Aus mit zwei Ligaspielen ohne Gegentor. Nach 15 Partien führt die Mannschaft die Premier Division mit 43 Punkten und 41:1 Toren an.';
  }
  window.FM_LEAGUE_2041={...(window.FM_LEAGUE_2041||{}),updated:'2041-05-10',leader:'Finn Harps',played:15,wins:14,draws:1,losses:0,goalsFor:41,goalsAgainst:1,goalDifference:40,points:43};

  const athlone=(window.FM_CLUBS||[]).find(x=>x.id==='athlone-town'||x.name==='Athlone Town');
  if(athlone){
    athlone.summary='Athlone Town verlor am 10. Mai 2041 im Donegal Stadium mit 0:2. Finn Harps kontrollierte die Partie mit 79 Prozent Ballbesitz und 22:1 Schüssen.';
    athlone.meetings=[...(athlone.meetings||[]).filter(x=>x.date!=='10.05.2041'),{date:'10.05.2041',venue:'A',result:'0:2'}];
    athlone.pressReport={id:'2041-05-10-athlone-town-spielbericht',href:'presse.html?id=2041-05-10-athlone-town-spielbericht',label:'PREMIER DIVISION',headline:'Harps kontrolliert Athlone vollständig'};
  }

  const notes=[
    ['evan-reilly','Evan Reilly blieb beim 2:0 gegen Athlone Town erneut ohne Gegentor und baute seine Serie am 10. Mai 2041 auf 720 Minuten aus.'],
    ['jim-oneill','Jim O’Neill erzielte beim 2:0 gegen Athlone Town in der 24. Minute das Führungstor.'],
    ['ben-barry','Ben Barry verwandelte beim 2:0 gegen Athlone Town in der 79. Minute einen Elfmeter.'],
    ['billy-walker','Billy Walker war beim 2:0 gegen Athlone Town mit der Note 8,1 der beste Spieler auf dem Platz.'],
    ['don-docherty','Don Docherty absolvierte gegen Athlone Town seinen 250. Einsatz für Finn Harps.']
  ];
  notes.forEach(([id,text])=>{const p=(window.FM_PLAYERS||[]).find(x=>x.id===id);if(p&&!((p.careerNarrative||[]).includes(text)))p.careerNarrative=[...(p.careerNarrative||[]),text];});

  const report={
    id:'2041-05-10-athlone-town-spielbericht',type:'Spielbericht',date:'2041-05-10',competition:'SSE Airtricity League Premier Division',
    fixtureDate:'Freitag, 10.05.2041',home:'Finn Harps',away:'Athlone Town',score:'2:0',location:'Donegal Stadium · Stranorlar',
    headline:'Finn Harps arbeitet sich nach dem Europa-Aus zum nächsten Sieg',
    subheadline:'O’Neill und Barry treffen beim 2:0 gegen Athlone Town. Das Ergebnis bleibt knapp, doch 79 Prozent Ballbesitz, 22:1 Schüsse und 2,97 zu 0,07 xG erzählen von vollständiger Kontrolle.',
    label:'PREMIER DIVISION · HEIMSIEG',
    heroStat:{label:'Ligabilanz',value:'41:1',note:'Tore nach 15 Spielen'},
    intro:'Drei Tage nach dem Ende der Champions-League-Titelverteidigung kehrte Finn Harps ohne sichtbare europäische Nachwirkungen in den Ligaalltag zurück. Athlone Town verteidigte tief und arbeitete hart, kam selbst aber praktisch nicht zum Spielen. Der Tabellenführer dominierte fast jede Kennzahl und gewann am Ende mit 2:0.',
    sections:[
      {title:'O’Neill öffnet den tiefen Block',text:'Nach 24 Minuten erzielte Jim O’Neill die Führung. Der Treffer war die verdiente Belohnung für eine Partie, die fast ausschließlich in der Hälfte von Athlone Town stattfand.'},
      {title:'Viel Kontrolle, lange wenig Ertrag',text:'Finn Harps kam auf 22 Abschlüsse, acht davon aufs Tor, und erzeugte 2,97 xG. Trotzdem blieb es bis in die Schlussphase beim 1:0. Athlone stellte sich mit 31 Fouls gegen den Rhythmus des Favoriten und verhinderte lange ein klareres Ergebnis.'},
      {title:'Barry entscheidet vom Punkt',text:'In der 79. Minute verwandelte Ben Barry einen Elfmeter zum 2:0. Damit war ein Spiel entschieden, das sportlich schon deutlich früher einseitig geworden war.'},
      {title:'Walker prägt den Abend ohne Tor',text:'Billy Walker erhielt mit 8,1 die beste Bewertung. Seine Aktivität auf dem Flügel zwang Athlone immer wieder zu Fouls und war ein wichtiger Grund dafür, dass Finn Harps den Gegner dauerhaft einschnürte.'},
      {title:'Reillys Serie erreicht 720 Minuten',text:'Athlone brachte nur einen Abschluss zustande und keinen Versuch auf das Tor. Evan Reilly blieb damit erneut ohne Gegentor und steht nun bei 720 Minuten ohne Gegentreffer.'},
      {title:'National bleibt die Maschine kalt',text:'Nach 15 Ligaspielen stehen 14 Siege, ein Unentschieden, 43 Punkte und 41:1 Tore. Das Champions-League-Aus hat die nationale Dominanz nicht erschüttert.'}
    ],
    strengthsTitle:'WAS DEN ARBEITSSIEG TRUG',strengthsHeading:'Geduld, Kontrolle und defensive Erstickung',
    strengths:['79 Prozent Ballbesitz','22:1 Schüsse','2,97 zu 0,07 xG','Athlone ohne Schuss aufs Tor','O’Neill mit dem wichtigen Führungstreffer','Barry bleibt vom Punkt ruhig','Walker als bester Spieler mit Note 8,1','Reilly seit 720 Minuten ohne Gegentor'],
    vulnerabilitiesTitle:'WARUM ES NUR 2:0 WURDE',vulnerabilitiesHeading:'Dominanz ohne frühe Entscheidung',
    vulnerabilities:['Nur zwei Tore aus 2,97 xG','Bis zur 79. Minute blieb das Spiel ergebnistechnisch offen','Drei eigene Gelbe Karten','Athlones 31 Fouls störten den Spielfluss','Gustavo da Silva und Maisto blieben unter ihrem üblichen Niveau'],
    verdictHeading:'Kein Feuerwerk, aber genau die richtige Reaktion',
    verdict:'Nach dem Ausscheiden bei Manchester United musste Finn Harps keine emotionale Gala liefern. Wichtig war, dass die Mannschaft ihren nationalen Standard sofort wieder fand. Athlone wurde über 90 Minuten kontrolliert, Reilly blieb erneut ohne Gegentor und die Tabellenführung wuchs weiter. Das war ein Arbeitssieg auf einer statistischen Einbahnstraße.',
    sourcesHeading:'Spieldaten vom 10. Mai 2041',
    sourcesNote:'Der Bericht basiert auf der FM-Spielübersicht und den individuellen Spielerstatistiken der Partie.',
    sources:['FM-Spielübersicht Finn Harps – Athlone Town, 10.05.2041','FM-Spielerstatistiken Finn Harps, 10.05.2041']
  };
  const ri=window.FM_PRESS_REPORTS.findIndex(x=>x.id===report.id);if(ri>=0)window.FM_PRESS_REPORTS[ri]=report;else window.FM_PRESS_REPORTS.push(report);

  const news={
    id:'2041-05-10-athlone-town',date:'2041-05-10',season:2041,category:'Premier Division',accent:'blue',
    eyebrow:'ARBEITSSIEG · 2:0',title:'Nach Europa bleibt Finn Harps national eiskalt',
    summary:'O’Neill und Barry treffen gegen Athlone Town. 79 Prozent Ballbesitz, 22:1 Schüsse und 41:1 Ligatore nach 15 Spielen zeigen, dass das Champions-League-Aus keine nationalen Spuren hinterlässt.',
    href:'presse.html?id=2041-05-10-athlone-town-spielbericht',entities:['finn-harps','athlone-town','jim-oneill','ben-barry','billy-walker','evan-reilly','season-2041'],featured:true
  };
  const ni=window.FM_NEWS.findIndex(x=>x.id===news.id);if(ni>=0)window.FM_NEWS[ni]=news;else window.FM_NEWS.push(news);
})();