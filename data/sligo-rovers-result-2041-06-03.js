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
    id:'2041-06-03-sligo-rovers',date:'2041-06-03',season:2041,competition:'SSE Airtricity League Premier Division',round:'Ligaspiel · 19. Spieltag',
    home:'Sligo Rovers',away:'Finn Harps',score:'1:1',homeGoals:1,awayGoals:1,venue:'The Showgrounds',attendance:4500,
    report:'presse.html?id=2041-06-03-sligo-rovers-spielbericht',
    scorers:['Harry Hubbard 43.','Cormac O’Kane 76.'],
    incidents:['Nathan Thomas Gelb 12.','Cédric Neza Gelb 20.','Stacey Staley Gelb 64.','Jim O’Neill Gelb 66.','Diego Fernández Gelb 89.'],
    stats:{shots:'2:17',shotsOnTarget:'1:7',xG:'0,14:2,62',possession:'20:80',passesCompleted:'190:743',passCompletion:'75:92',corners:'1:11',fouls:'15:15',bigChances:'0:3',yellowCards:'3:2',redCards:'0:0'},
    summary:'Finn Harps kommt bei Sligo Rovers trotz fast vollständiger Spielkontrolle nicht über ein 1:1 hinaus. Harry Hubbard bringt die Gastgeber mit ihrem einzigen Schuss aufs Tor in Führung, ehe Cormac O’Kane in der 76. Minute ausgleicht. 80 Prozent Ballbesitz, 17:2 Schüsse und 2,62 xG reichen diesmal nur zu einem Punkt.',
    standout:['Cormac O’Kane 7,8 · Spieler des Spiels und Ausgleichstor','Radim Malý 7,3','Diego Fernández 7,1','Gustavo da Silva 7,0','Kevin Kelly 7,0']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.leaguePlayed=19;season.leagueWins=17;season.leagueDraws=2;season.leagueLosses=0;
    season.leagueGoalsFor=55;season.leagueGoalsAgainst=3;season.leaguePoints=53;
    season.summary='Finn Harps führt die Premier Division nach 19 Spielen mit 53 Punkten und 55:3 Toren an. Beim 1:1 in Sligo endete die Serie von zehn Ligasiegen, obwohl die Harps mit 80 Prozent Ballbesitz, 17:2 Schüssen und 2,62 xG klar dominierten.';
  }

  window.FM_LEAGUE_2041={
    ...(window.FM_LEAGUE_2041||{}),updated:'2041-06-03',leader:'Finn Harps',played:19,wins:17,draws:2,losses:0,
    goalsFor:55,goalsAgainst:3,goalDifference:52,points:53,
    standings:[
      {position:1,club:'Finn Harps',played:19,wins:17,draws:2,losses:0,goalsFor:55,goalsAgainst:3,points:53},
      {position:2,club:'Derry City',played:19,wins:11,draws:3,losses:5,goalsFor:34,goalsAgainst:19,points:36},
      {position:3,club:'Waterford',played:19,wins:11,draws:3,losses:5,goalsFor:26,goalsAgainst:5,points:36},
      {position:4,club:'Shamrock Rovers',played:19,wins:10,draws:3,losses:6,goalsFor:32,goalsAgainst:9,points:33},
      {position:5,club:'St Patrick’s Athletic',played:19,wins:9,draws:3,losses:7,goalsFor:20,goalsAgainst:3,points:30},
      {position:6,club:'Sligo Rovers',played:19,wins:7,draws:3,losses:9,goalsFor:20,goalsAgainst:30,points:24},
      {position:7,club:'Cork City',played:19,wins:6,draws:2,losses:11,goalsFor:19,goalsAgainst:49,points:20},
      {position:8,club:'Shelbourne',played:19,wins:4,draws:6,losses:9,goalsFor:44,goalsAgainst:11,points:18},
      {position:9,club:'Bohemian',played:19,wins:4,draws:2,losses:13,goalsFor:34,goalsAgainst:13,points:14},
      {position:10,club:'Athlone Town',played:19,wins:2,draws:3,losses:14,goalsFor:46,goalsAgainst:28,points:9}
    ]
  };

  const sligo=(window.FM_CLUBS||[]).find(x=>x.id==='sligo-rovers'||x.name==='Sligo Rovers');
  if(sligo){
    sligo.completion=Math.max(Number(sligo.completion||0),97);
    sligo.summary='Sligo Rovers erkämpfte am 3. Juni 2041 im ausverkauften Showgrounds ein 1:1 gegen Finn Harps. Harry Hubbard verwertete den einzigen Schuss aufs Tor, ehe Cormac O’Kane in der 76. Minute ausglich. Sligo überstand 80 Prozent gegnerischen Ballbesitz und 17:2 Schüsse.';
    sligo.tags=[...(sligo.tags||[]).filter(tag=>!String(tag).includes('1:1')&&!String(tag).includes('80 %')),'1:1 gegen Finn Harps','Hubbard trifft','80 % Ballbesitz zugelassen','4.500 Zuschauer'];
    sligo.meetings=[{date:'03.06.2041',venue:'A',result:'1:1'},...(sligo.meetings||[]).filter(item=>item.date!=='03.06.2041')];
    sligo.lastMatch={date:'03.06.2041',competition:'Premier Division',result:'Sligo Rovers 1:1 Finn Harps',scorers:['Harry Hubbard 43.','Cormac O’Kane 76.'],note:'Sligo führte mit seinem einzigen Schuss aufs Tor und rettete trotz 20 Prozent Ballbesitz, 2:17 Schüssen und 0,14:2,62 xG einen Punkt.'};
    sligo.pressReport={id:'2041-06-03-sligo-rovers-spielbericht',href:'presse.html?id=2041-06-03-sligo-rovers-spielbericht',label:'PREMIER DIVISION · 03.06.2041',headline:'Ein Spiel auf ein Tor endet nur 1:1',standfirst:'O’Kane rettet den Punkt, doch Harps lassen bei 17:2 Schüssen und 2,62 xG zwei Zähler liegen.'};
    sligo.checklist={...(sligo.checklist||{}),profile:true,squad:true,tactics:true,meetings:true,history:true};
  }

  const notes=[
    ['cormac-okane','Cormac O’Kane erzielte beim 1:1 bei Sligo Rovers am 3. Juni 2041 in der 76. Minute den Ausgleich und wurde mit der Note 7,8 zum Spieler des Spiels gewählt.'],
    ['evan-reilly','Evan Reilly kassierte beim 1:1 in Sligo am 3. Juni 2041 durch Harry Hubbard erstmals seit der langen Serie ohne Gegentor wieder einen Treffer.'],
    ['diego-fernandez','Diego Fernández gehörte beim 1:1 in Sligo mit der Note 7,1 zu den stärksten Harps-Spielern und sah in der 89. Minute Gelb.'],
    ['radim-maly','Radim Malý überzeugte beim 1:1 bei Sligo Rovers am 3. Juni 2041 mit der Note 7,3.']
  ];
  notes.forEach(([id,text])=>{
    const player=(window.FM_PLAYERS||[]).find(x=>x.id===id);
    if(player&&!((player.careerNarrative||[]).includes(text)))player.careerNarrative=[...(player.careerNarrative||[]),text];
  });

  const report={
    id:'2041-06-03-sligo-rovers-spielbericht',type:'Spielbericht',date:'2041-06-03',competition:'SSE Airtricity League Premier Division',
    fixtureDate:'Montag, 03.06.2041',home:'Sligo Rovers',away:'Finn Harps',score:'1:1',location:'The Showgrounds · Sligo',
    headline:'Ein Spiel auf ein Tor endet nur 1:1',
    subheadline:'Finn Harps dominiert Sligo mit 80 Prozent Ballbesitz und 17:2 Schüssen, läuft aber lange einem Rückstand hinterher. Cormac O’Kane rettet in der 76. Minute wenigstens den Punkt.',
    label:'PREMIER DIVISION · 1:1',
    heroStat:{label:'Expected Goals',value:'2,62:0,14',note:'17:2 Schüsse · 7:1 aufs Tor · 80 % Ballbesitz'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Es war eines jener Spiele, in denen die Statistik eine andere Wahrheit erzählt als die Anzeigetafel. Finn Harps kontrollierte Ball, Raum und Rhythmus nahezu vollständig. Sligo Rovers brauchte trotzdem nur einen einzigen präzisen Angriff, um durch Harry Hubbard in Führung zu gehen. Erst Cormac O’Kane durchbrach in der 76. Minute den roten Abwehrriegel. Mehr als das 1:1 sprang aus der erdrückenden Überlegenheit nicht heraus.',
    sections:[
      {title:'Sligo trifft mit dem einzigen Schuss aufs Tor',text:'Die Gastgeber kamen kaum aus der eigenen Hälfte, nutzten ihre seltene Gelegenheit aber maximal. Harry Hubbard traf in der 43. Minute zum 1:0. Für Evan Reilly endete damit die lange Serie ohne Gegentor, obwohl er während des gesamten Abends nur einmal ernsthaft geprüft wurde.'},
      {title:'80 Prozent Ballbesitz ohne Ertrag',text:'Finn Harps spielte 743 Pässe erfolgreich, erreichte eine Passquote von 92 Prozent und erzwang elf Ecken. Der Ball zirkulierte sicher und dauerhaft in Sligos Hälfte. Was fehlte, war die letzte Schärfe vor dem Tor.'},
      {title:'O’Kane findet endlich die Lücke',text:'Cormac O’Kane war der auffälligste Offensivspieler der Harps. In der 76. Minute erzielte er den verdienten Ausgleich und erhielt mit 7,8 die beste Bewertung der Partie. Sein Treffer verhinderte die erste Ligapleite, konnte den unnötigen Punktverlust aber nicht vollständig kaschieren.'},
      {title:'Drei Großchancen bleiben zu wenig genutzt',text:'Die Harps erspielten 2,62 xG und drei Großchancen. Sieben der 17 Abschlüsse kamen aufs Tor, doch nur einer fand den Weg hinein. Sligo verteidigte tief, blockte Räume und profitierte davon, dass die Gäste ihre Überlegenheit nicht früh genug in Tore verwandelten.'},
      {title:'Die Siegesserie endet, die Ungeschlagenheit bleibt',text:'Nach zehn Ligasiegen in Folge gibt Finn Harps wieder Punkte ab. Die Mannschaft bleibt nach 19 Spielen dennoch ungeschlagen und führt die Tabelle mit 53 Punkten sowie 55:3 Toren an. Der Vorsprung bleibt komfortabel, aber das Remis erinnert daran, dass Kontrolle allein keine drei Punkte garantiert.'},
      {title:'Ein Punkt, der sich wie zwei verlorene anfühlt',text:'Sligo darf das 1:1 als entschlossene Defensivleistung feiern. Für Finn Harps ist es dagegen ein Ergebnis gegen den Spielverlauf. Nicht wegen Pech, sondern weil 17 Abschlüsse und drei Großchancen nur einen Treffer produzierten.'}
    ],
    strengthsTitle:'WAS TROTZDEM FUNKTIONIERTE',strengthsHeading:'Nahezu vollständige Kontrolle des Spiels',
    strengths:['80 Prozent Ballbesitz','17:2 Schüsse und 7:1 aufs Tor','2,62 Expected Goals erspielt','743 erfolgreiche Pässe bei 92 Prozent Quote','Elf Ecken erzwungen','Cormac O’Kane mit Ausgleich und Note 7,8','Auch nach 19 Ligaspielen ungeschlagen'],
    vulnerabilitiesTitle:'WARUM ES NICHT ZUM SIEG REICHTE',vulnerabilitiesHeading:'Dominanz ohne ausreichende Konsequenz',
    vulnerabilities:['Nur ein Tor aus 2,62 xG','Drei Großchancen nicht ausreichend genutzt','Sligos einziger Schuss aufs Tor führte zum Rückstand','Der Ausgleich fiel erst in der 76. Minute','Zwei Punkte trotz klarster statistischer Überlegenheit abgegeben'],
    verdictHeading:'Ein Warnsignal ohne echten Schaden',
    verdict:'Finn Harps war Sligo in nahezu jeder messbaren Kategorie überlegen und hätte dieses Spiel gewinnen müssen. Gerade deshalb ist das Remis wertvoller als eine gewöhnliche Punkteteilung: Es zeigt die schmale Kante zwischen Kontrolle und Effizienz. Die Harps bleiben ungeschlagen und souveräner Tabellenführer, bekommen aber vor Augen geführt, dass selbst 80 Prozent Ballbesitz wertlos werden können, wenn der letzte Kontakt vor dem Tor nicht sitzt.',
    sourcesHeading:'Spieldaten vom 3. Juni 2041',
    sourcesNote:'Der Bericht basiert auf der FM-Spielübersicht, den individuellen Spielerstatistiken und der Ligatabelle nach dem 19. Spieltag.',
    sources:['FM-Spielübersicht Sligo Rovers – Finn Harps, 03.06.2041','FM-Spielerstatistiken Finn Harps, 03.06.2041','FM-Ligatabelle nach 19 Spielen']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-03-sligo-rovers',date:'2041-06-03',season:2041,category:'Premier Division',accent:'amber',
    eyebrow:'SLIGO ROVERS · 1:1',title:'O’Kane rettet Punkt bei erdrückender Überlegenheit',
    summary:'Finn Harps gibt trotz 80 Prozent Ballbesitz, 17:2 Schüssen und 2,62 xG zwei Punkte ab. Cormac O’Kane gleicht in der 76. Minute aus.',
    href:'presse.html?id=2041-06-03-sligo-rovers-spielbericht',entities:['finn-harps','sligo-rovers','cormac-okane','evan-reilly','season-2041'],featured:true
  });
})();