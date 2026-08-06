(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_AWARDS=window.FM_AWARDS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const final={
    id:'2041-06-01-champions-league-final',date:'2041-06-01',season:2041,competition:'UEFA Champions League',stage:'Finale',
    home:'Real Madrid',away:'Manchester United',score:'0:4',homeGoals:0,awayGoals:4,venue:'Estadio Santiago Bernabéu',
    scorers:['R. López 30., 85.','Y. Kricheli 70.','A. Kitenge 81.'],winner:'Manchester United',runnerUp:'Real Madrid',
    note:'Manchester United folgt Finn Harps als Champions-League-Sieger. Der Klub, der die Harps im Halbfinale zweimal knapp mit 2:1 bezwang, entschied das Finale gegen Real Madrid deutlich mit 4:0.'
  };
  window.FM_CHAMPIONS_LEAGUE_2041={
    season:'2040/41',winner:'Manchester United',runnerUp:'Real Madrid',final,
    finnHarps:{stage:'Halbfinale',eliminatedBy:'Manchester United',aggregate:'2:4',legs:['Finn Harps 1:2 Manchester United','Manchester United 2:1 Finn Harps']}
  };

  upsert(window.FM_AWARDS,{
    id:'2041-champions-league-player-of-season',date:'2041-06-01',season:2041,competition:'UEFA Champions League',award:'Spieler der Saison',
    ranking:[
      {place:1,player:'Giacomo Papini',club:'Finn Harps'},
      {place:2,player:'Justin Ramsey',club:'Finn Harps'},
      {place:3,player:'Yizhar Kricheli',club:'Manchester United'}
    ]
  });
  upsert(window.FM_AWARDS,{
    id:'2041-champions-league-young-player-of-season',date:'2041-06-01',season:2041,competition:'UEFA Champions League',award:'Junger Spieler der Saison',
    ranking:[
      {place:1,player:'Amir Mašić',club:'Finn Harps'},
      {place:2,player:'Daryl Frame',club:'Finn Harps'},
      {place:3,player:'Jake Roberts',club:'Finn Harps'}
    ]
  });

  const report={
    id:'2041-06-01-champions-league-finale-und-auszeichnungen',type:'Saisonbilanz',date:'2041-06-01',competition:'UEFA Champions League',
    fixtureDate:'Finale und Saisonpreise 2040/41',home:'Manchester United · Europameister',away:'Finn Harps · fünf Podestplätze',location:'Madrid und Donegal',
    headline:'United erbt Europas Krone, doch die Saisonpreise bleiben in Donegal',
    subheadline:'Manchester United schlägt Real Madrid im Finale mit 4:0. Giacomo Papini wird zum Spieler der Champions-League-Saison gewählt, Amir Mašić zum besten jungen Spieler. Finn Harps besetzt fünf der sechs Podestplätze beider Auszeichnungen.',
    label:'CHAMPIONS LEAGUE · FINALE UND AUSZEICHNUNGEN',
    heroStat:{label:'Harps auf den Podien',value:'5 von 6',note:'Papini und Mašić gewinnen · Ramsey, Frame und Roberts folgen'},
    backlink:{href:'saison.html',label:'← ZUR SAISON 2041'},
    intro:'Die europäische Saison endet mit zwei Wahrheiten. Manchester United ist nach einem 4:0 gegen Real Madrid der verdiente neue Champions-League-Sieger. Zugleich trägt die individuelle Bilanz deutlich die Handschrift von Finn Harps: Giacomo Papini gewinnt die Wahl zum Spieler der Saison, Amir Mašić die Nachwuchsauszeichnung. Mit Justin Ramsey, Daryl Frame und Jake Roberts landen drei weitere Harps-Spieler auf den Podien.',
    sections:[
      {title:'United vollendet den Weg mit einem 4:0',text:'Im Estadio Santiago Bernabéu ließ Manchester United Real Madrid im Finale keine Chance. R. López traf in der 30. und 85. Minute, Yizhar Kricheli in der 70. und Aymar Kitenge in der 81. Minute. Der englische Klub folgt Finn Harps auf Europas Thron.'},
      {title:'Das Halbfinal-Aus erhält einen anderen Rahmen',text:'Finn Harps verlor beide Halbfinalspiele gegen United nur mit 1:2. Dass derselbe Gegner das Finale anschließend mit vier Toren Unterschied gewinnt, macht aus dem Ausscheiden keinen Trostpreis, aber einen klaren Maßstab: Die Harps scheiterten knapp am späteren Champion und nicht an einer vorübergehenden Laune des Wettbewerbs.'},
      {title:'Papini gewinnt die wichtigste Einzelauszeichnung',text:'Giacomo Papini wird zum Spieler der Champions-League-Saison 2040/41 gewählt. Justin Ramsey belegt Rang zwei, Yizhar Kricheli vom neuen Titelträger Manchester United Rang drei. Zwei Harps-Spieler an der Spitze zeigen, wie stark die Mannschaft den Wettbewerb trotz des Halbfinal-Aus geprägt hat.'},
      {title:'Mašić führt ein reines Harps-Podium an',text:'Bei der Wahl zum jungen Spieler der Saison gehen alle drei Podestplätze nach Donegal. Amir Mašić gewinnt vor Daryl Frame und Jake Roberts. Das ist mehr als eine Momentaufnahme: Die nächste Generation der Harps ist nicht nur national dominant, sondern bereits auf höchster europäischer Ebene sichtbar.'},
      {title:'Fünf Podestplätze ohne Finalteilnahme',text:'Finn Harps stellt fünf der sechs bestplatzierten Spieler beider Saisonwahlen. Diese ungewöhnliche Verteilung erzählt von einer Mannschaft, deren europäische Qualität breiter war als das reine Abschneiden im Halbfinale. Der Pokal geht nach Manchester, die individuelle Prägung der Saison bleibt zu großen Teilen in Donegal.'}
    ],
    keyDuelsTitle:'DIE EUROPÄISCHE SCHLUSSBILANZ',keyDuelsHeading:'Titel, Preise und die neue Rangordnung',
    keyDuels:[
      {title:'Manchester United',text:'Champions-League-Sieger nach dem 4:0 im Finale gegen Real Madrid.'},
      {title:'Giacomo Papini',text:'Spieler der Saison vor Justin Ramsey und Yizhar Kricheli.'},
      {title:'Amir Mašić',text:'Junger Spieler der Saison vor Daryl Frame und Jake Roberts.'},
      {title:'Finn Harps',text:'Halbfinalist und Besitzer von fünf der sechs Podestplätze der beiden wichtigsten Spielerwahlen.'}
    ],
    verdictHeading:'Die Krone ist weg, der europäische Status bleibt',
    verdict:'Manchester United hat den Titel verdient gewonnen und Real Madrid im Finale zerlegt. Für Finn Harps bleibt dennoch eine außergewöhnliche Saisonbilanz: knapp am späteren Sieger gescheitert, erneut unter den letzten Vier und individuell der prägendste Klub des Wettbewerbs. Papini, Ramsey, Mašić, Frame und Roberts machen sichtbar, dass der Triumph von 2040 kein einzelner Gipfel war, sondern der Beginn einer europäischen Epoche.',
    sourcesHeading:'Bestätigte Wettbewerbsdaten vom 1. Juni 2041',
    sourcesNote:'Finalergebnis, Torschützen und Platzierungen der Saisonwahlen stammen aus den Football-Manager-Wettbewerbs- und Auszeichnungsansichten.',
    sources:['Champions-League-Finale: Real Madrid 0:4 Manchester United','Torschützen: R. López 30. und 85., Y. Kricheli 70., A. Kitenge 81.','Spieler der Saison: Papini vor Ramsey und Kricheli','Junger Spieler der Saison: Mašić vor Frame und Roberts']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-06-01-champions-league-finale-und-auszeichnungen',date:'2041-06-01',season:2041,category:'Champions League',accent:'gold',
    eyebrow:'FINALE · AUSZEICHNUNGEN · SAISONBILANZ',title:'United holt den Titel, Papini und Mašić die Saisonpreise',
    summary:'Manchester United schlägt Real Madrid im Finale 4:0. Papini wird Spieler der Saison, Mašić bester junger Spieler; Finn Harps stellt fünf der sechs Podestplätze.',
    href:'presse.html?id=2041-06-01-champions-league-finale-und-auszeichnungen',entities:['finn-harps','man-utd','real-madrid','giacomo-papini','justin-ramsey','amir-masic','daryl-frame','jake-roberts','champions-league-2041'],featured:true
  });
  (window.FM_NEWS||[]).forEach(item=>{if(item.id!=='2041-06-01-champions-league-finale-und-auszeichnungen')item.featured=false;});

  const addNarrative=(id,text)=>{
    const player=(window.FM_PLAYERS||[]).find(x=>x.id===id);
    if(player&&!((player.careerNarrative||[]).includes(text)))player.careerNarrative=[...(player.careerNarrative||[]),text];
  };
  const addHonour=(id,type,item)=>{
    const player=(window.FM_PLAYERS||[]).find(x=>x.id===id);
    if(!player)return;
    player.honours=player.honours||[];
    let block=player.honours.find(entry=>entry.year==='2041'&&entry.type===type);
    if(!block){block={year:'2041',type,items:[]};player.honours.push(block);}
    if(!block.items.includes(item))block.items.push(item);
  };

  addNarrative('giacomo-papini','Am 1. Juni 2041 wurde Giacomo Papini zum Spieler der UEFA-Champions-League-Saison 2040/41 gewählt. Er gewann die Wahl vor seinem Teamkollegen Justin Ramsey und Yizhar Kricheli von Manchester United.');
  addHonour('giacomo-papini','Individuelle Auszeichnungen','UEFA Champions League · Spieler der Saison 2040/41');
  addNarrative('justin-ramsey','Justin Ramsey belegte bei der Wahl zum Spieler der UEFA-Champions-League-Saison 2040/41 den zweiten Platz hinter Giacomo Papini.');
  addHonour('justin-ramsey','Individuelle Auszeichnungen','UEFA Champions League · Spieler der Saison 2040/41 · 2. Platz');
  addNarrative('amir-masic','Amir Mašić wurde zum jungen Spieler der UEFA-Champions-League-Saison 2040/41 gewählt und führte ein vollständiges Finn-Harps-Podium an.');
  addHonour('amir-masic','Individuelle Auszeichnungen','UEFA Champions League · Junger Spieler der Saison 2040/41');
  addNarrative('daryl-frame','Daryl Frame belegte bei der Wahl zum jungen Spieler der UEFA-Champions-League-Saison 2040/41 den zweiten Platz hinter Amir Mašić.');
  addHonour('daryl-frame','Individuelle Auszeichnungen','UEFA Champions League · Junger Spieler der Saison 2040/41 · 2. Platz');
  addNarrative('jake-roberts','Jake Roberts komplettierte als Drittplatzierter der Wahl zum jungen Spieler der UEFA-Champions-League-Saison 2040/41 ein reines Finn-Harps-Podium.');
  addHonour('jake-roberts','Individuelle Auszeichnungen','UEFA Champions League · Junger Spieler der Saison 2040/41 · 3. Platz');

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.championsLeague='Halbfinale · ausgeschieden gegen den späteren Sieger Manchester United (2:4 insgesamt)';
    season.championsLeagueWinner='Manchester United · 4:0 im Finale gegen Real Madrid';
    season.championsLeagueAwards=['Giacomo Papini · Spieler der Saison','Justin Ramsey · 2. Platz Spieler der Saison','Amir Mašić · Junger Spieler der Saison','Daryl Frame · 2. Platz Junger Spieler der Saison','Jake Roberts · 3. Platz Junger Spieler der Saison'];
    season.summary='Finn Harps führt national mit 52 Punkten und 54:2 Toren nach 18 Spielen. In der Champions League endete die Titelverteidigung knapp im Halbfinale gegen den späteren Sieger Manchester United. Papini und Mašić gewannen die wichtigsten Saisonpreise; insgesamt gingen fünf von sechs Podestplätzen an die Harps.';
  }

  const united=(window.FM_CLUBS||[]).find(x=>x.id==='man-utd'||x.name==='Manchester United');
  if(united){
    united.summary='Manchester United gewann die UEFA Champions League 2040/41. Nach zwei 2:1-Siegen im Halbfinale gegen Titelverteidiger Finn Harps besiegte der Klub Real Madrid im Finale im Santiago Bernabéu mit 4:0.';
    united.honours=[...(united.honours||[]).filter(x=>!(x&&x.year===2041&&x.title==='UEFA Champions League')),{year:2041,title:'UEFA Champions League',note:'4:0 im Finale gegen Real Madrid'}];
  }
  const real=(window.FM_CLUBS||[]).find(x=>x.id==='real-madrid'||x.name==='Real Madrid');
  if(real){
    real.summary='Real Madrid erreichte 2041 das Champions-League-Finale im eigenen Estadio Santiago Bernabéu, unterlag Manchester United dort jedoch deutlich mit 0:4.';
  }
})();