(()=>{
  const match={
    id:'2041-05-07-manchester-united',date:'2041-05-07',season:2041,competition:'UEFA Champions League',stage:'Halbfinale · Rückspiel',
    home:'Manchester United',away:'Finn Harps',score:'2:1',homeGoals:2,awayGoals:1,aggregate:'4:2',venue:'Old Trafford',attendance:78113,
    report:'presse.html?id=2041-05-07-manchester-united-spielbericht',
    summary:'Finn Harps scheidet als Champions-League-Titelverteidiger im Halbfinale aus. Cormac O’Kane bringt die Harps in Old Trafford in Führung, doch Aymar Kitenge dreht das Rückspiel mit Toren in der 63. und 87. Minute. Manchester United setzt sich über beide Partien mit 4:2 durch.',
    stats:{shots:'10:7',shotsOnTarget:'5:3',xg:'1,18:0,87',possession:'50:50',corners:'9:3',fouls:'10:10',completedPasses:'512:504',passCompletion:'90:87',bigChances:'0:0'},
    events:[
      {minute:24,type:'goal',team:'Finn Harps',player:'Cormac O’Kane',score:'0:1'},
      {minute:30,type:'yellow',team:'Finn Harps',player:'Giacomo Papini'},
      {minute:32,type:'injury',team:'Manchester United',player:'Yizhar Kricheli'},
      {minute:63,type:'goal',team:'Manchester United',player:'Aymar Kitenge',score:'1:1'},
      {minute:87,type:'goal',team:'Manchester United',player:'Aymar Kitenge',score:'2:1'}
    ],
    keyPlayers:[
      {name:'Aymar Kitenge',team:'Manchester United',rating:8.5,note:'Zwei Tore und die Entscheidung des Halbfinals'},
      {name:'Cormac O’Kane',team:'Finn Harps',rating:7.5,note:'Führungstor und 100 Prozent Zweikampfquote'},
      {name:'Romano Maisto',team:'Finn Harps',rating:7.0,note:'Belebte die Schlussphase'},
      {name:'Torric Bruce',team:'Finn Harps',rating:6.8,note:'Ordentliche Leistung gegen Uniteds Sturm'}
    ]
  };

  window.FM_MATCHES=window.FM_MATCHES||[];
  const mi=window.FM_MATCHES.findIndex(x=>x.id===match.id);if(mi>=0)window.FM_MATCHES[mi]=match;else window.FM_MATCHES.push(match);

  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const fixture=['2041-05-07','20:00','Manchester United','Auswärts','1:2','UEFA Champions League',3];
  const fi=window.FM_FIXTURES.findIndex(x=>x[0]===fixture[0]&&x[2]===fixture[2]&&x[5]===fixture[5]);if(fi>=0)window.FM_FIXTURES[fi]=fixture;else window.FM_FIXTURES.push(fixture);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.summary='Finn Harps dominiert national, kann den Champions-League-Titel aber nicht verteidigen. Nach zwei knappen 1:2-Niederlagen setzt sich Manchester United im Halbfinale mit 4:2 insgesamt durch.';
    season.championsLeague='Halbfinale · ausgeschieden gegen Manchester United (2:4 insgesamt)';
  }

  const club=(window.FM_CLUBS||[]).find(x=>x.id==='man-utd');
  if(club){
    club.summary='Manchester United beendete 2041 die Titelverteidigung von Finn Harps. Nach zwei 2:1-Siegen gewann der englische Klub das Champions-League-Halbfinale mit 4:2 insgesamt.';
    club.meetings=[...(club.meetings||[]).filter(x=>x.date!=='07.05.2041'),{date:'07.05.2041',venue:'A',result:'1:2 · Gesamt 2:4'}];
    club.pressReport={id:'2041-05-07-manchester-united-spielbericht',href:'presse.html?id=2041-05-07-manchester-united-spielbericht',label:'CHAMPIONS LEAGUE · HALBFINALE',headline:'United beendet die Titelverteidigung'};
  }

  const playerNotes=[
    ['cormac-okane','Cormac O’Kane brachte Finn Harps am 7. Mai 2041 im Champions-League-Halbfinalrückspiel bei Manchester United in Führung. Trotz seines Tores schied der Titelverteidiger mit 2:4 insgesamt aus.'],
    ['daryl-frame','Daryl Frame startete auch im Halbfinalrückspiel bei Manchester United, konnte das Ausscheiden des Titelverteidigers jedoch nicht verhindern.'],
    ['giacomo-papini','Giacomo Papini stand beim 1:2 in Old Trafford in der Startelf; Finn Harps schied mit 2:4 insgesamt aus der Champions League aus.']
  ];
  playerNotes.forEach(([id,text])=>{const p=(window.FM_PLAYERS||[]).find(x=>x.id===id);if(p&&!((p.careerNarrative||[]).includes(text)))p.careerNarrative=[...(p.careerNarrative||[]),text];});

  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  const report={
    id:'2041-05-07-manchester-united-spielbericht',type:'Spielbericht',date:'2041-05-07',competition:'UEFA Champions League',
    fixtureDate:'Dienstag, 07.05.2041',home:'Manchester United',away:'Finn Harps',location:'Old Trafford · Halbfinale, Rückspiel',
    headline:'Manchester United beendet die Titelverteidigung der Finn Harps',
    subheadline:'O’Kane öffnet das Halbfinale noch einmal, doch Kitenges Doppelpack entscheidet auch das Rückspiel mit 2:1. Nach dem 2:4 insgesamt wird es keinen erneuten Champions-League-Triumph der Harps geben.',
    label:'CHAMPIONS LEAGUE · HALBFINALE · RÜCKSPIEL',
    heroStat:{label:'Gesamtergebnis',value:'2:4',note:'Zwei enge Niederlagen beenden die Titelverteidigung'},
    backlink:{href:'klub.html?id=man-utd',label:'← ZUM MANCHESTER-UNITED-DOSSIER'},
    intro:'Finn Harps verließ Old Trafford erhobenen Hauptes, aber ohne Finalticket. Der Titelverteidiger spielte ein ausgeglichenes Rückspiel, ging durch Cormac O’Kane in Führung und brachte Manchester United zeitweise unter Druck. Am Ende entschied erneut die größere Effizienz des englischen Klubs. Aymar Kitenge traf zweimal und machte den zweiten 2:1-Sieg binnen einer Woche perfekt.',
    sections:[
      {title:'O’Kane bringt das Halbfinale zurück zum Brennen',text:'In der 24. Minute traf Cormac O’Kane zur Führung. Damit fehlte Finn Harps nur noch ein weiterer Treffer zur Verlängerung. O’Kane verband sein Tor mit einer perfekten Zweikampfquote und war der stärkste Harps-Spieler des Abends.'},
      {title:'Das Spiel bleibt auf Augenhöhe',text:'Manchester United führte bei den Schüssen mit 10:7 und bei den Schüssen aufs Tor mit 5:3. Ballbesitz und Passvolumen waren dagegen nahezu ausgeglichen. Auch der xG-Abstand von 1,18 zu 0,87 zeigt keinen Klassenunterschied, sondern ein enges Spiel mit leichtem Übergewicht für United.'},
      {title:'Kitenge dreht die Partie',text:'In der 63. Minute glich Aymar Kitenge aus. Als Finn Harps in der Schlussphase mehr riskieren musste, traf der Stürmer in der 87. Minute erneut. Wie Kricheli im Hinspiel entschied damit auch im Rückspiel ein United-Angreifer die Partie mit einem Doppelpack.'},
      {title:'Kein Einbruch, aber die entscheidenden Momente gehen verloren',text:'Finn Harps wurde in keinem der beiden Halbfinalspiele vorgeführt. Beide Partien endeten 1:2, beide blieben lange offen. United nutzte jedoch vier entscheidende Abschlüsse, während die Harps ihre guten Phasen nicht in genügend Tore übersetzten.'},
      {title:'Die Krone wechselt den Besitzer',text:'Nach dem Champions-League-Triumph 2040 endet die Titelverteidigung 2041 im Halbfinale. Das ist eine Enttäuschung, aber kein europäischer Absturz: Finn Harps bestätigte mit dem erneuten Einzug unter die letzten Vier seinen Platz in der europäischen Spitze.'}
    ],
    keyDuelsTitle:'STIMMEN ZUM AUSSCHEIDEN',keyDuelsHeading:'Europas Presse erkennt die Gegenwehr an',
    keyDuels:[
      {title:'The Guardian',text:'Manchester United musste beide Abende bis in die Schlussphase kontrollieren. Finn Harps verlor den Titel, nicht aber seinen Status als europäische Spitzenmannschaft.'},
      {title:'Kicker',text:'Der Titelverteidiger scheidet nicht deutlich, sondern zweimal knapp aus. United war in den Strafräumen konsequenter und deshalb verdient im Finale.'},
      {title:'L’Équipe',text:'O’Kanes Tor ließ Old Trafford kurz zweifeln. Kitenge beantwortete diese Zweifel mit der Effizienz eines Finalisten.'},
      {title:'Irish Independent',text:'Die Titelverteidigung endet, die europäische Ära nicht. Finn Harps hat erneut bewiesen, dass das Wunder von 2040 längst zu einer Struktur geworden ist.'}
    ],
    verdictHeading:'United war über 180 Minuten einen Tick besser',
    verdict:'Finn Harps hat sich gewehrt, gut gespielt und das Halbfinale in beiden Partien offengehalten. Manchester United war jedoch in den entscheidenden Zonen etwas stärker und vor dem Tor deutlich konsequenter. Das 2:4 insgesamt wirkt klarer als der tatsächliche Abstand. Eine Titelverteidigung wird es nicht geben, doch der erneute Halbfinaleinzug bestätigt den Rang der Harps unter Europas besten Mannschaften.',
    sourcesHeading:'Spieldaten vom 7. Mai 2041',
    sourcesNote:'Die Pressestimmen sind redaktionelle Stimmen im Stil eines internationalen Pressespiegels innerhalb des Save-Archivs. Spielverlauf und Kennzahlen beruhen auf den FM-Screenshots.',
    sources:['FM-Spielübersicht Manchester United – Finn Harps, 07.05.2041','FM-Spielerstatistiken Finn Harps, 07.05.2041']
  };
  const ri=window.FM_PRESS_REPORTS.findIndex(x=>x.id===report.id);if(ri>=0)window.FM_PRESS_REPORTS[ri]=report;else window.FM_PRESS_REPORTS.push(report);

  window.FM_NEWS=window.FM_NEWS||[];
  const news={
    id:'2041-05-07-manchester-united-result',date:'2041-05-07',season:2041,category:'Champions League',accent:'red',
    eyebrow:'HALBFINALE · RÜCKSPIEL · 1:2 · GESAMT 2:4',title:'United beendet die Titelverteidigung',
    summary:'O’Kane bringt Finn Harps in Old Trafford in Führung, doch Kitenges Doppelpack entscheidet das Rückspiel. Nach zwei knappen 1:2-Niederlagen scheidet der amtierende Champions-League-Sieger im Halbfinale aus.',
    href:'presse.html?id=2041-05-07-manchester-united-spielbericht',entities:['finn-harps','man-utd','cormac-okane','aymar-kitenge','champions-league-2041','season-2041'],featured:true
  };
  const ni=window.FM_NEWS.findIndex(x=>x.id===news.id);if(ni>=0)window.FM_NEWS[ni]=news;else window.FM_NEWS.push(news);
})();