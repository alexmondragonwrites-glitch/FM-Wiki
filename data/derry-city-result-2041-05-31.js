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
    id:'2041-05-31-derry-city',date:'2041-05-31',season:2041,competition:'SSE Airtricity League Premier Division',round:'Ligaspiel · Nordwest-Derby',
    home:'Finn Harps',away:'Derry City',score:'1:0',homeGoals:1,awayGoals:0,venue:'Donegal Stadium',attendance:12800,
    report:'presse.html?id=2041-05-31-derry-city-spielbericht',
    scorers:['Glenn Bolger 75. (Eigentor)'],
    incidents:['Cormac O’Kane Gelb 6.','Simon Wilson Gelb 10.','Callum Brennan verletzt 29.','Andy Clark verletzt 30.','Calum Jenks Gelb 36.','Glenn Bolger Gelb 69.','Amir Mašić Gelb 76.','Luca Polverino Gelb 88.'],
    stats:{shots:'13:0',shotsOnTarget:'6:0',xG:'0,97:0,00',possession:'75:25',passesCompleted:'574:191',passCompletion:'89:75',corners:'14:2',fouls:'6:18',bigChances:'2:0',wonTackles:'78:69',wonHeaders:'31:67',yellowCards:'2:4',redCards:'0:0'},
    summary:'Finn Harps gewinnt das Nordwest-Derby gegen Derry City mit 1:0. Die Gäste bleiben ohne einen einzigen Abschluss, während ein Eigentor von Glenn Bolger in der 75. Minute den vollständig kontrollierten Abend entscheidet. 75 Prozent Ballbesitz, 574 angekommene Pässe und 13:0 Schüsse machen aus dem knappen Ergebnis eine klare Machtdemonstration.',
    standout:['Torric Bruce 7,5 · Spieler des Spiels','Evan Reilly 7,4 · 810 Minuten ohne Gegentor','Diego Fernández 7,0','Darcy Andrews 6,9','Callum Brennan 6,9']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.leaguePlayed=18;season.leagueWins=17;season.leagueDraws=1;season.leagueLosses=0;
    season.leagueGoalsFor=54;season.leagueGoalsAgainst=2;season.leaguePoints=52;
    season.summary='Finn Harps führt die Premier Division nach 18 Spielen mit 52 Punkten und 54:2 Toren an. Das 1:0 im Nordwest-Derby gegen Derry City war der zehnte Ligasieg in Folge; der Rivale blieb dabei ohne einen einzigen Abschluss.';
  }
  window.FM_LEAGUE_2041={...(window.FM_LEAGUE_2041||{}),updated:'2041-05-31',leader:'Finn Harps',played:18,wins:17,draws:1,losses:0,goalsFor:54,goalsAgainst:2,goalDifference:52,points:52};

  const derry=(window.FM_CLUBS||[]).find(x=>x.id==='derry-city'||x.name==='Derry City');
  if(derry){
    derry.completion=Math.max(Number(derry.completion||0),96);
    derry.summary='Derry City verlor das Nordwest-Derby am 31. Mai 2041 im Donegal Stadium mit 0:1. Die Gäste verteidigten lange, blieben aber bei 25 Prozent Ballbesitz und ohne einen einzigen Abschluss vollständig vom Harps-Tor fern.';
    derry.tags=[...(derry.tags||[]).filter(tag=>!String(tag).includes('13:0')&&!String(tag).includes('ohne Abschluss')),'0:1 im Nordwest-Derby','Ohne einen Abschluss','25 % Ballbesitz','Glenn Bolger Eigentor'];
    derry.meetings=[{date:'31.05.2041',venue:'H',result:'1:0'},...(derry.meetings||[]).filter(item=>item.date!=='31.05.2041')];
    derry.lastMatch={date:'31.05.2041',competition:'Premier Division',result:'Finn Harps 1:0 Derry City',scorers:['Glenn Bolger 75. (Eigentor)'],note:'Derry hielt das 0:0 bis zur 75. Minute, produzierte bei 13:0 Schüssen und 0,00 xG jedoch keinerlei eigene Gefahr. Torhüter Marcos Quintana parierte sechs Abschlüsse.'};
    derry.pressReport={id:'2041-05-31-derry-city-spielbericht',href:'presse.html?id=2041-05-31-derry-city-spielbericht',label:'NORWEST-DERBY · 31.05.2041',headline:'Ein Eigentor löst den Derby-Schraubstock',standfirst:'Finn Harps hält Derry bei null Abschlüssen und gewinnt das vollständig kontrollierte Derby mit 1:0.'};
    derry.checklist={...(derry.checklist||{}),profile:true,squad:true,tactics:true,meetings:true,history:true};
  }

  const notes=[
    ['evan-reilly','Evan Reilly blieb beim 1:0 im Nordwest-Derby gegen Derry City am 31. Mai 2041 erneut ohne Gegentor und verlängerte seine Serie auf 810 Minuten.'],
    ['torric-bruce','Torric Bruce absolvierte gegen Derry City seinen 100. Einsatz für Finn Harps und wurde beim 1:0 mit der Note 7,5 zum Spieler des Spiels.'],
    ['giacomo-papini','Giacomo Papini bestritt beim 1:0 gegen Derry City seinen 225. Einsatz für Finn Harps.'],
    ['rob-todd','Rob Todd erreichte am 31. Mai 2041 sein 175. Spiel als Profi.']
  ];
  notes.forEach(([id,text])=>{
    const player=(window.FM_PLAYERS||[]).find(x=>x.id===id);
    if(player&&!((player.careerNarrative||[]).includes(text)))player.careerNarrative=[...(player.careerNarrative||[]),text];
  });

  const report={
    id:'2041-05-31-derry-city-spielbericht',type:'Spielbericht',date:'2041-05-31',competition:'SSE Airtricity League Premier Division',
    fixtureDate:'Freitag, 31.05.2041',home:'Finn Harps',away:'Derry City',score:'1:0',location:'Donegal Stadium · Stranorlar',
    headline:'Ein Eigentor löst den Derby-Schraubstock',
    subheadline:'Derry City hält 74 Minuten stand, kommt aber selbst zu keinem einzigen Abschluss. Glenn Bolgers Eigentor belohnt eine Harps-Mannschaft, die das Nordwest-Derby vollständig kontrolliert.',
    label:'NORDWEST-DERBY · 1:0',
    heroStat:{label:'Derry-Abschlüsse',value:'0',note:'13:0 Schüsse · 6:0 aufs Tor · 75 % Ballbesitz'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Das Ergebnis war knapp, das Spiel war es nicht. Finn Harps legte das Nordwest-Derby über 90 Minuten in einen taktischen Schraubstock. Derry City verteidigte tief, foulte häufig und hielt dank Marcos Quintanas Paraden lange die Null. Einen eigenen Angriff brachte der Tabellendritte jedoch nicht zu Ende. In der 75. Minute lenkte Glenn Bolger den Ball ins eigene Tor und gab der Überlegenheit endlich eine Zahl.',
    sections:[
      {title:'Derry baut eine Mauer ohne Ausgang',text:'Die Gäste kamen mit einem klaren Plan nach Stranorlar: Räume schließen, Rhythmus brechen und die Partie möglichst lange torlos halten. 18 Fouls und vier Gelbe Karten zeigen, wie viel Reibung Derry dafür erzeugte. Der Preis war vollständige offensive Unsichtbarkeit.'},
      {title:'13:0 Schüsse erzählen mehr als das Ergebnis',text:'Finn Harps brachte sechs seiner 13 Abschlüsse auf das Tor und erspielte zwei Großchancen. Derry blieb bei null Schüssen und 0,00 xG. Das 1:0 wirkt auf dem Papier wie ein enges Derby, statistisch war es ein Spiel auf ein Tor.'},
      {title:'Bolgers Eigentor beendet das Warten',text:'Marcos Quintana hatte sechs Schüsse pariert und Derry bis tief in die zweite Halbzeit im Spiel gehalten. In der 75. Minute brach die Mauer nicht durch einen Kunstschuss, sondern durch Glenn Bolgers Eigentor. Für Finn Harps war es die sachgerechte Belohnung für dauerhaften Druck.'},
      {title:'Bruce feiert sein Jubiläum als bester Spieler',text:'Torric Bruce absolvierte seinen 100. Einsatz für Finn Harps und prägte die Partie mit elf progressiven Pässen. Seine Note 7,5 war die beste Bewertung des Abends. Das Jubiläum passte zum Spiel: wenig Glamour, viel Kontrolle und ständige Vorwärtsarbeit.'},
      {title:'Reillys Tor bleibt seit 810 Minuten verschlossen',text:'Evan Reilly musste keinen einzigen Schuss parieren und erhielt dennoch die nächste weiße Weste. Seit 810 Minuten hat Finn Harps mit ihm im Tor nicht mehr kassiert. Die Serie ist nicht nur das Werk des Torhüters, sondern Ausdruck einer Mannschaft, die Gegner inzwischen bereits vor dem eigenen Drittel erstickt.'},
      {title:'Die Tabellenführung wächst weiter',text:'Nach 18 Ligaspielen steht Finn Harps bei 17 Siegen, einem Remis und 52 Punkten. Das Torverhältnis lautet 54:2. Derry bleibt ein starker Verfolger, wurde im direkten Duell aber auf 25 Prozent Ballbesitz und null Abschlüsse reduziert.'}
    ],
    strengthsTitle:'WAS DAS DERBY ENTSCHIED',strengthsHeading:'Geduld, Gegenpressing und territoriale Kontrolle',
    strengths:['Derry City ohne einen einzigen Abschluss gehalten','75 Prozent Ballbesitz und 574 angekommene Pässe','13:0 Schüsse und 6:0 aufs Tor','14 Ecken erzwungen','Torric Bruce mit elf progressiven Pässen und Note 7,5','Evan Reilly seit 810 Minuten ohne Gegentor','Zehnter Ligasieg in Folge'],
    vulnerabilitiesTitle:'WAS TROTZ DOMINANZ FEHLTE',vulnerabilitiesHeading:'Viel Druck, aber nur ein erzwungener Treffer',
    vulnerabilities:['Nur 0,97 xG aus 13 Abschlüssen','Zwei Großchancen blieben ungenutzt','Der Siegtreffer fiel erst in der 75. Minute durch ein Eigentor','Callum Brennan musste in der 29. Minute verletzt ausgewechselt werden'],
    verdictHeading:'Ein knappes Ergebnis ohne knappen Spielverlauf',
    verdict:'Finn Harps musste im Derby lange warten, aber nie wirklich leiden. Derry City verteidigte diszipliniert und sein Torhüter hielt stark, doch ohne einen einzigen Abschluss konnte der Rivale nur auf ein torloses Ende hoffen. Das Eigentor war Zufall in seiner Entstehung, nicht in seiner Wirkung. Wer einen Gegner auf 0,00 xG und 25 Prozent Ballbesitz drückt, hat den Sieg verdient, auch wenn die Anzeigetafel nur einen schmalen Strich zeigt.',
    sourcesHeading:'Spieldaten vom 31. Mai 2041',
    sourcesNote:'Der Bericht basiert auf der FM-Spielübersicht und den individuellen Spielerstatistiken des Nordwest-Derbys.',
    sources:['FM-Spielübersicht Finn Harps – Derry City, 31.05.2041','FM-Spielerstatistiken Finn Harps, 31.05.2041','FM-Ligatabelle nach 18 Spieltagen']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-05-31-derry-city',date:'2041-05-31',season:2041,category:'Premier Division',accent:'blue',
    eyebrow:'NORDWEST-DERBY · 1:0',title:'Harps halten Derry bei null Abschlüssen',
    summary:'Glenn Bolgers Eigentor entscheidet ein vollständig kontrolliertes Derby. Finn Harps gewinnt bei 13:0 Schüssen, 75 Prozent Ballbesitz und 0,00 xG für Derry.',
    href:'presse.html?id=2041-05-31-derry-city-spielbericht',entities:['finn-harps','derry-city','torric-bruce','evan-reilly','season-2041'],featured:true
  });
})();