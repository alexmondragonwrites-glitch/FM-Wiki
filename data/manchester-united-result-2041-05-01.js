(()=>{
  const match={
    id:'2041-05-01-manchester-united',date:'2041-05-01',season:2041,competition:'UEFA Champions League',stage:'Halbfinale · Hinspiel',
    home:'Finn Harps',away:'Manchester United',score:'1:2',homeGoals:1,awayGoals:2,venue:'Donegal Stadium',attendance:10000,
    report:'presse.html?id=2041-05-01-manchester-united-spielbericht',
    summary:'Finn Harps verliert das Champions-League-Halbfinalhinspiel gegen Manchester United mit 1:2. Justin Ramsey trifft früh per Elfmeter, Yizhar Kricheli dreht die Partie mit Toren in der 26. und 88. Minute.',
    stats:{shots:'7:7',shotsOnTarget:'3:6',xg:'0,98:0,65',possession:'50:50',corners:'2:4',fouls:'20:18',completedPasses:'493:484',passCompletion:'89:91',bigChances:'1:0'},
    events:[
      {minute:3,type:'goal',team:'Finn Harps',player:'Justin Ramsey',detail:'Elfmeter',score:'1:0'},
      {minute:21,type:'yellow',team:'Manchester United',player:'Mërgim Lluca'},
      {minute:26,type:'goal',team:'Manchester United',player:'Yizhar Kricheli',score:'1:1'},
      {minute:88,type:'goal',team:'Manchester United',player:'Yizhar Kricheli',score:'1:2'}
    ],
    keyPlayers:[
      {name:'Yizhar Kricheli',team:'Manchester United',rating:9.0,note:'Zwei Tore und der späte Siegtreffer'},
      {name:'Justin Ramsey',team:'Finn Harps',rating:7.0,note:'Frühe Führung per Elfmeter'},
      {name:'Torric Bruce',team:'Finn Harps',rating:6.7,note:'Stabilster Innenverteidiger'},
      {name:'Paulo Henrique',team:'Finn Harps',rating:6.6,note:'Serie ohne Gegentor endet nach 547 Minuten'}
    ]
  };

  window.FM_MATCHES=window.FM_MATCHES||[];
  const mi=window.FM_MATCHES.findIndex(x=>x.id===match.id);if(mi>=0)window.FM_MATCHES[mi]=match;else window.FM_MATCHES.push(match);

  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const fixture=['2041-05-01','20:00','Manchester United','Heim','1:2','UEFA Champions League',3];
  const fi=window.FM_FIXTURES.findIndex(x=>x[0]===fixture[0]&&x[2]===fixture[2]&&x[5]===fixture[5]);if(fi>=0)window.FM_FIXTURES[fi]=fixture;else window.FM_FIXTURES.push(fixture);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.summary='Finn Harps dominiert national und steht als Champions-League-Titelverteidiger erneut im Halbfinale. Nach dem 1:2 im Heim-Hinspiel gegen Manchester United muss die Mannschaft das Duell in Old Trafford drehen.';
    season.championsLeague='Halbfinale · Hinspiel 1:2 gegen Manchester United';
  }

  const club=(window.FM_CLUBS||[]).find(x=>x.id==='man-utd');
  if(club){
    club.summary='Champions-League-Halbfinalgegner 2041. Manchester United gewann das Hinspiel im Donegal Stadium durch zwei Tore von Yizhar Kricheli mit 2:1.';
    club.meetings=[...(club.meetings||[]).filter(x=>x.date!=='01.05.2041'),{date:'01.05.2041',venue:'H',result:'1:2'}];
    club.pressReport={id:'2041-05-01-manchester-united-spielbericht',href:'presse.html?id=2041-05-01-manchester-united-spielbericht',label:'CHAMPIONS LEAGUE · HALBFINALE',headline:'Kricheli dreht das Hinspiel spät'};
  }

  const playerNotes=[
    ['justin-ramsey','Justin Ramsey brachte Finn Harps im Champions-League-Halbfinalhinspiel gegen Manchester United am 1. Mai 2041 per Elfmeter früh in Führung.'],
    ['paulo-henrique','Paulo Henriques Serie ohne Gegentor endete im Halbfinalhinspiel gegen Manchester United nach 547 Minuten.'],
    ['daryl-frame','Daryl Frame kam beim 1:2 gegen Manchester United nicht wie gewohnt zur Wirkung und wurde mit 6,4 bewertet.']
  ];
  playerNotes.forEach(([id,text])=>{const p=(window.FM_PLAYERS||[]).find(x=>x.id===id);if(p&&!((p.careerNarrative||[]).includes(text)))p.careerNarrative=[...(p.careerNarrative||[]),text];});

  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  const report={
    id:'2041-05-01-manchester-united-spielbericht',type:'Spielbericht',date:'2041-05-01',competition:'UEFA Champions League',
    fixtureDate:'Mittwoch, 01.05.2041',home:'Finn Harps',away:'Manchester United',location:'Donegal Stadium · Halbfinale, Hinspiel',
    headline:'Krichelis Doppelpack dreht ein enges Halbfinale',
    subheadline:'Ramsey bringt den Titelverteidiger früh in Führung, doch Manchester United nutzt seine Abschlüsse konsequenter und nimmt ein 2:1 mit nach Old Trafford.',
    label:'CHAMPIONS LEAGUE · HALBFINALE · HINSPIEL',
    heroStat:{label:'Schüsse aufs Tor',value:'3:6',note:'United erzeugt aus einem ausgeglichenen Spiel die klarere Abschlusspräsenz'},
    backlink:{href:'klub.html?id=man-utd',label:'← ZUM MANCHESTER-UNITED-DOSSIER'},
    intro:'Finn Harps erwischte den perfekten Start, musste am Ende aber die erste Heimniederlage dieses Champions-League-K.-o.-Laufs hinnehmen. Das Spiel blieb bei sieben Schüssen auf beiden Seiten und ausgeglichenem Ballbesitz eng. Manchester United war vor dem Tor jedoch entschlossener und drehte die Partie durch Yizhar Kricheli.',
    sections:[
      {title:'Ramsey trifft nach drei Minuten',text:'Justin Ramsey verwandelte bereits in der dritten Minute einen Elfmeter zur Führung. Der frühe Treffer gab Finn Harps zunächst Kontrolle, ohne dass daraus eine längere dominante Phase mit weiteren klaren Abschlüssen entstand.'},
      {title:'Kricheli bestraft die erste offene Tür',text:'In der 26. Minute glich Yizhar Kricheli aus. United brachte insgesamt sechs seiner sieben Schüsse auf das Tor, während Finn Harps nur drei Abschlüsse auf Santiago Ángel platzierte. Der Unterschied lag weniger in der Menge als in der Schärfe der Aktionen.'},
      {title:'Das Mittelfeld findet keinen gewohnten Rhythmus',text:'Frame, Papini, O’Kane und O’Neill konnten das Spiel nicht so prägen wie gegen Bayern. United nahm die Halbräume besser auf, störte die Verbindungen zu Ramsey und zwang Finn Harps häufiger zu Angriffen ohne sauberen letzten Pass.'},
      {title:'Der Schlag in der 88. Minute',text:'Als das 1:1 bereits nach einer offenen Ausgangslage für Old Trafford aussah, traf Kricheli erneut. Sein zweites Tor machte aus einem engen Remis eine 1:2-Niederlage und verschob die Favoritenrolle vor dem Rückspiel deutlich zu United.'},
      {title:'Noch ist das Duell nicht gebrochen',text:'Finn Harps lag beim xG mit 0,98 zu 0,65 sogar vorne und verbuchte die einzige ausgewiesene Großchance. Das Resultat ist deshalb schmerzhaft, aber kein Beleg für ein aussichtsloses Kräfteverhältnis. Ein Sieg mit einem Tor Vorsprung in Manchester würde weiterhin die Verlängerung erzwingen.'}
    ],
    verdictHeading:'United ist Favorit, aber das Halbfinale lebt',
    verdict:'Manchester United war in den entscheidenden Momenten das reifere und effizientere Team. Finn Harps muss in Old Trafford mehr Einfluss aus dem zentralen Mittelfeld erzeugen und Kricheli enger kontrollieren, darf das Rückspiel aber nicht von Beginn an in einen offenen Schlagabtausch verwandeln. Der Rückstand beträgt nur ein Tor.',
    sourcesHeading:'Spieldaten vom 1. Mai 2041',
    sourcesNote:'Der Bericht basiert auf dem Ergebnisbildschirm und den individuellen Spielerstatistiken des Hinspiels.',
    sources:['FM-Spielübersicht Finn Harps – Manchester United, 01.05.2041','FM-Spielerstatistiken Finn Harps, 01.05.2041']
  };
  const ri=window.FM_PRESS_REPORTS.findIndex(x=>x.id===report.id);if(ri>=0)window.FM_PRESS_REPORTS[ri]=report;else window.FM_PRESS_REPORTS.push(report);

  window.FM_NEWS=window.FM_NEWS||[];
  const news={
    id:'2041-05-01-manchester-united-result',date:'2041-05-01',season:2041,category:'Champions League',accent:'red',
    eyebrow:'HALBFINALE · HINSPIEL · 1:2',title:'Kricheli dreht das Halbfinale spät',
    summary:'Ramsey trifft früh per Elfmeter, doch Kricheli antwortet doppelt und macht Manchester United vor dem Rückspiel zum Favoriten.',
    href:'presse.html?id=2041-05-01-manchester-united-spielbericht',entities:['finn-harps','man-utd','justin-ramsey','yizhar-kricheli','champions-league-2041','season-2041'],featured:true
  };
  const ni=window.FM_NEWS.findIndex(x=>x.id===news.id);if(ni>=0)window.FM_NEWS[ni]=news;else window.FM_NEWS.push(news);
})();