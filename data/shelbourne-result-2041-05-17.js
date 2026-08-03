(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const match={
    id:'2041-05-17-shelbourne',date:'2041-05-17',season:2041,competition:'SSE Airtricity League Premier Division',round:'Ligaspiel',
    home:'Finn Harps',away:'Shelbourne',score:'9:1',homeGoals:9,awayGoals:1,venue:'Donegal Stadium',attendance:12800,
    report:'presse.html?id=2041-05-17-shelbourne-spielbericht',
    scorers:['Daryl Frame 4., 90+1.','Justin Ramsey 20. (Elfmeter), 39.','Kevin Kelly 26.','Cormac O’Kane 51.','Torric Bruce 56.','Gustavo da Silva','Billy Walker','Jordan Nowakowski 58. (Shelbourne)'],
    incidents:['Mareks Istrankins Gelb 57.'],
    stats:{shots:'29:4',shotsOnTarget:'19:2',xG:'5,29:0,25',possession:'74:26',passesCompleted:'547:190',passCompletion:'89:73',corners:'12:3',fouls:'18:18',bigChances:'5:0',wonTackles:'77:76',wonHeaders:'58:41'},
    summary:'Finn Harps zerlegt Shelbourne im Donegal Stadium mit 9:1. Frame und Ramsey treffen doppelt, fünf weitere Harps-Spieler tragen sich in die Torschützenliste ein. 29:4 Schüsse, 19:2 Abschlüsse aufs Tor und 5,29 xG machen die totale Überlegenheit sichtbar.',
    standout:['Daryl Frame 9,4','Cormac O’Kane 8,8','Justin Ramsey 8,6','Billy Walker 8,6','Kevin Kelly 8,2','Giacomo Papini 8,2','Torric Bruce 8,0']
  };
  const mi=window.FM_MATCHES.findIndex(x=>x.id===match.id);if(mi>=0)window.FM_MATCHES[mi]=match;else window.FM_MATCHES.push(match);
  const fi=window.FM_FIXTURES.findIndex(x=>x.id===match.id);if(fi>=0)window.FM_FIXTURES[fi]=match;else window.FM_FIXTURES.push(match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.leaguePlayed=16;season.leagueWins=15;season.leagueDraws=1;season.leagueLosses=0;
    season.leagueGoalsFor=50;season.leagueGoalsAgainst=2;season.leaguePoints=46;
    season.summary='Finn Harps antwortet auf das Champions-League-Aus mit drei Ligasiegen in Folge und zerlegt Shelbourne am 17. Mai mit 9:1. Nach 16 Spielen führt die Mannschaft die Premier Division mit 46 Punkten und 50:2 Toren an.';
  }
  window.FM_LEAGUE_2041={...(window.FM_LEAGUE_2041||{}),updated:'2041-05-17',leader:'Finn Harps',played:16,wins:15,draws:1,losses:0,goalsFor:50,goalsAgainst:2,goalDifference:48,points:46};

  const shelbourne=(window.FM_CLUBS||[]).find(x=>x.id==='shelbourne'||x.name==='Shelbourne');
  if(shelbourne){
    shelbourne.summary='Shelbourne wurde am 17. Mai 2041 im Donegal Stadium mit 1:9 besiegt. Der Ehrentreffer änderte nichts an einem Abend, an dem Finn Harps mit 29:4 Schüssen und 5,29 zu 0,25 xG vollständig dominierte.';
    shelbourne.meetings=[...(shelbourne.meetings||[]).filter(x=>x.date!=='17.05.2041'),{date:'17.05.2041',venue:'A',result:'1:9'}];
    shelbourne.pressReport={id:'2041-05-17-shelbourne-spielbericht',href:'presse.html?id=2041-05-17-shelbourne-spielbericht',label:'PREMIER DIVISION',headline:'Finn Harps zaubert Shelbourne an die Wand'};
  }

  const notes=[
    ['daryl-frame','Daryl Frame erzielte beim 9:1 gegen Shelbourne am 17. Mai 2041 zwei Tore, bereitete einen weiteren Treffer vor und wurde mit der Note 9,4 zum Spieler des Spiels.'],
    ['justin-ramsey','Justin Ramsey traf beim 9:1 gegen Shelbourne doppelt, darunter per Elfmeter, und erhielt die Note 8,6.'],
    ['cormac-okane','Cormac O’Kane steuerte beim 9:1 gegen Shelbourne ein Tor und eine Vorlage bei und wurde mit 8,8 bewertet.'],
    ['billy-walker','Billy Walker erzielte beim 9:1 gegen Shelbourne ein Tor, bereitete zwei weitere Treffer vor und erhielt die Note 8,6.'],
    ['kevin-kelly','Kevin Kelly traf beim 9:1 gegen Shelbourne und bereitete einen weiteren Treffer vor.'],
    ['torric-bruce','Torric Bruce erzielte beim 9:1 gegen Shelbourne in der 56. Minute einen Treffer und erhielt die Note 8,0.'],
    ['gustavo-da-silva','Gustavo da Silva trug sich beim 9:1 gegen Shelbourne ebenfalls in die Torschützenliste ein.']
  ];
  notes.forEach(([id,text])=>{const p=(window.FM_PLAYERS||[]).find(x=>x.id===id);if(p&&!((p.careerNarrative||[]).includes(text)))p.careerNarrative=[...(p.careerNarrative||[]),text];});

  const report={
    id:'2041-05-17-shelbourne-spielbericht',type:'Spielbericht',date:'2041-05-17',competition:'SSE Airtricity League Premier Division',
    fixtureDate:'Freitag, 17.05.2041',home:'Finn Harps',away:'Shelbourne',score:'9:1',location:'Donegal Stadium · Stranorlar',
    headline:'Finn Harps zaubert Shelbourne mit neun Toren an die Wand',
    subheadline:'Frame und Ramsey treffen doppelt, fünf weitere Harps-Spieler folgen. Shelbournes Ehrentreffer ist nur ein kleiner Kratzer in einem Abend vollständiger Dominanz.',
    label:'PREMIER DIVISION · 9:1-KANTERSIEG',
    heroStat:{label:'Expected Goals',value:'5,29',note:'29 Schüsse und 19 Abschlüsse aufs Tor'},
    intro:'Eine Woche nach dem kontrollierten 2:0 gegen Athlone Town verwandelte Finn Harps den Ligaalltag in ein Offensivfestival. Shelbourne wurde vom ersten Angriff an zurückgedrängt, lag nach vier Minuten zurück und zur Pause bereits mit 0:4 hinten. Am Ende stand ein 9:1, das selbst die enorme statistische Überlegenheit fast nüchtern abbildete.',
    sections:[
      {title:'Frame öffnet das Tor nach vier Minuten',text:'Daryl Frame traf bereits in der vierten Minute. Der frühe Treffer war der Startschuss für eine erste Halbzeit, in der Finn Harps Shelbourne kaum aus der eigenen Hälfte entkommen ließ.'},
      {title:'Ramsey und Kelly machen vor der Pause alles klar',text:'Justin Ramsey verwandelte in der 20. Minute einen Elfmeter und traf in der 39. Minute erneut. Dazwischen erhöhte Kevin Kelly auf 3:0. Mit dem 4:0 zur Pause war die Partie sportlich bereits entschieden.'},
      {title:'O’Kane und Bruce starten die zweite Welle',text:'Cormac O’Kane traf in der 51. Minute und Torric Bruce fünf Minuten später. O’Kane verband sein Tor mit einer Vorlage und bestätigte mit der Note 8,8, warum er als Box-to-Box-Motor des Mittelfelds gesetzt ist.'},
      {title:'Shelbourne trifft und wird trotzdem überrollt',text:'Jordan Nowakowski erzielte in der 58. Minute das 6:1 und damit erst das zweite Ligator der Saison gegen Finn Harps. Der Treffer änderte den Spielverlauf nicht. Gustavo da Silva und Billy Walker erhöhten weiter, ehe Frame in der Nachspielzeit den Schlusspunkt setzte.'},
      {title:'Frame führt ein ganzes Ensemble an',text:'Frame kam auf zwei Tore, eine Vorlage und die Note 9,4. Dahinter überzeugten O’Kane mit 8,8, Ramsey und Walker mit jeweils 8,6 sowie Kelly und Papini mit jeweils 8,2. Die neun Tore verteilten sich auf sieben Harps-Spieler.'},
      {title:'Die Zahlen sind ein eigenes Donnerwetter',text:'Finn Harps gewann die Schussbilanz 29:4, brachte 19 Abschlüsse auf das Tor und erzeugte 5,29 xG. Dazu kamen 74 Prozent Ballbesitz, 547 angekommene Pässe und fünf Großchancen.'},
      {title:'50 Ligatore nach 16 Spielen',text:'Mit dem Kantersieg steht Finn Harps nach 16 Partien bei 15 Siegen, einem Unentschieden, 46 Punkten und 50:2 Toren. Das Ende der europäischen Titelverteidigung hat national keine Bremsspur hinterlassen.'}
    ],
    strengthsTitle:'WAS SHELBOURNE ÜBERROLLTE',strengthsHeading:'Tempo, Breite und Angriffswellen aus allen Zonen',
    strengths:['Frame mit zwei Toren, einer Vorlage und Note 9,4','Ramsey mit Doppelpack','O’Kane mit Tor und Vorlage aus dem Box-to-Box-Raum','Walker mit einem Tor und zwei Vorlagen','Sieben verschiedene Torschützen','29:4 Schüsse und 19:2 aufs Tor','5,29 zu 0,25 xG','50 Ligatore nach 16 Spielen'],
    vulnerabilitiesTitle:'DER EINZIGE KRATZER',vulnerabilitiesHeading:'Ein Gegentor inmitten der Gala',
    vulnerabilities:['Shelbourne erzielte in der 58. Minute das zwischenzeitliche 6:1','Die weiße Weste ging trotz vollständiger Kontrolle verloren','Mareks Istrankins sah Gelb'],
    verdictHeading:'Eine nationale Machtdemonstration nach europäischem Schmerz',
    verdict:'Finn Harps hat das Champions-League-Aus nicht nur verarbeitet, sondern in Energie verwandelt. Shelbourne wurde nicht einfach geschlagen, sondern über 90 Minuten von Angriffswellen erfasst. Der Gegentreffer ist statistisch auffällig, sportlich jedoch bedeutungslos. Mit 50:2 Toren nach 16 Spielen bewegt sich die Mannschaft national in einer eigenen Umlaufbahn.',
    sourcesHeading:'Spieldaten vom 17. Mai 2041',
    sourcesNote:'Der Bericht basiert auf der FM-Spielübersicht und den individuellen Spielerstatistiken der Partie. Bei Gustavo da Silva und Billy Walker waren in der sichtbaren Torübersicht keine exakten Trefferzeiten eingeblendet.',
    sources:['FM-Spielübersicht Finn Harps – Shelbourne, 17.05.2041','FM-Spielerstatistiken Finn Harps, 17.05.2041']
  };
  const ri=window.FM_PRESS_REPORTS.findIndex(x=>x.id===report.id);if(ri>=0)window.FM_PRESS_REPORTS[ri]=report;else window.FM_PRESS_REPORTS.push(report);

  const news={
    id:'2041-05-17-shelbourne',date:'2041-05-17',season:2041,category:'Premier Division',accent:'blue',
    eyebrow:'NEUNTORESPIEL · 9:1',title:'Finn Harps zaubert Shelbourne an die Wand',
    summary:'Frame und Ramsey treffen doppelt, fünf weitere Harps-Spieler ebenfalls. Nach 29:4 Schüssen und 5,29 xG steht der Tabellenführer bei 50:2 Ligatoren nach 16 Spielen.',
    href:'presse.html?id=2041-05-17-shelbourne-spielbericht',entities:['finn-harps','shelbourne','daryl-frame','justin-ramsey','cormac-okane','billy-walker','season-2041'],featured:true
  };
  const ni=window.FM_NEWS.findIndex(x=>x.id===news.id);if(ni>=0)window.FM_NEWS[ni]=news;else window.FM_NEWS.push(news);
})();