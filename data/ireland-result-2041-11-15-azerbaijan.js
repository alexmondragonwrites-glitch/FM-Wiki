(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_IRELAND=window.FM_IRELAND||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2041-11-15-ireland-azerbaijan',date:'2041-11-15',season:2041,competition:'FIFA-WM-Qualifikation Europa',
    home:'Irland',away:'Aserbaidschan',score:'9:0',halfTime:'3:0',venue:'Aviva Stadium, Dublin',attendance:56252,weather:'13°C',
    scorers:[
      {team:'Irland',player:'Billy Walker',minute:21},
      {team:'Irland',player:"Harry O'Leary",minute:33},
      {team:'Irland',player:"Cormac O'Kane",minute:36},
      {team:'Irland',player:'Justin Ramsey',minute:48},
      {team:'Irland',player:'Justin Ramsey',minute:50},
      {team:'Irland',player:'Justin Ramsey',minute:54,penalty:true},
      {team:'Irland',player:'Ben Barry',minute:65},
      {team:'Irland',player:'Ronan Reilly',minute:null,note:'Erstes A-Länderspieltor; Minute in der bereitgestellten Ergebnisansicht nicht eingeblendet.'},
      {team:'Irland',player:'Ben Barry',minute:'90+1'}
    ],
    stats:{
      shots:{home:42,away:3},shotsOnTarget:{home:18,away:1},xG:{home:7.84,away:0.36},
      bigChances:{home:7,away:1},possession:{home:62,away:38},corners:{home:13,away:1},fouls:{home:14,away:8},
      completedPasses:{home:'390/447',away:'242/321'},passAccuracy:{home:87,away:76},
      duelsWon:{home:'10/13',away:'15/17'},headersWon:{home:'50/70',away:'20/76'},intensiveSprints:{home:101,away:81}
    },
    standout:{player:'Billy Walker',team:'Irland',rating:10.0,goals:1,note:'Spieler des Spiels; 14 entscheidende Pässe laut Matchanalyse.'},
    milestones:[
      {player:'Ronan Reilly',team:'Irland',detail:'Erstes A-Länderspieltor'},
      {team:'Irland',detail:'WM-Ticket 2042 bereits einen Spieltag vor Ende der Qualifikation gesichert'}
    ],
    note:'Irland zerlegt Aserbaidschan mit 9:0, steht nach sieben Spielen bei sieben Siegen und sichert sich damit bereits vor dem letzten Gruppenspiel die direkte Qualifikation für die Weltmeisterschaft 2042.'
  };
  upsert(window.FM_MATCHES,match);

  Object.assign(window.FM_IRELAND,{
    updated:'2041-11-15',competition:'FIFA-WM-Qualifikation Europa',position:'1. Platz',
    groupStatus:'WM-Qualifikation · Gruppe C · Irland Gruppensieger · WM 2042 qualifiziert',
    qualification:{stage:'Qualifikationsphase',label:'FIFA-WM-Qualifikation Europa',status:'Qualifiziert',detail:'Irland ist nach sieben Siegen aus sieben Spielen und 21 Punkten bereits einen Spieltag vor Ende uneinholbar Gruppenerster und für die WM 2042 qualifiziert.'},
    groupTable:[
      {position:1,team:'Irland',played:7,wins:7,draws:0,losses:0,goalsFor:30,goalsAgainst:5,goalDifference:25,points:21,status:'WM 2042 qualifiziert'},
      {position:2,team:'Kroatien',played:8,wins:4,draws:1,losses:3,goalsFor:22,goalsAgainst:11,goalDifference:11,points:13},
      {position:3,team:'Tschechien',played:7,wins:4,draws:0,losses:3,goalsFor:10,goalsAgainst:7,goalDifference:3,points:12},
      {position:4,team:'Zypern',played:7,wins:2,draws:1,losses:4,goalsFor:12,goalsAgainst:17,goalDifference:-5,points:7},
      {position:5,team:'Aserbaidschan',played:7,wins:0,draws:0,losses:7,goalsFor:5,goalsAgainst:39,goalDifference:-34,points:0}
    ],
    latestMatch:{date:'2041-11-15',opponent:'Aserbaidschan',venue:'Heim · Aviva Stadium',result:'9:0',competition:'FIFA-WM-Qualifikation Europa'},
    latestHeadline:'WM-Ticket gelöst: Irland schlägt Aserbaidschan 9:0 und ist bereits vor dem letzten Gruppenspiel für die WM 2042 qualifiziert.'
  });

  [
    {id:'2041-11-15-justin-ramsey-hat-trick',date:'2041-11-15',player:'Justin Ramsey',type:'nationalteam',title:'Hattrick beim 9:0',detail:'Trifft gegen Aserbaidschan in der 48., 50. und 54. Minute; der dritte Treffer fällt per Elfmeter.'},
    {id:'2041-11-15-ben-barry-brace',date:'2041-11-15',player:'Ben Barry',type:'nationalteam',title:'Doppelpack beim 9:0',detail:'Erzielt gegen Aserbaidschan zwei Tore in der 65. und 90.+1 Minute und erhält die Note 8,8.'},
    {id:'2041-11-15-billy-walker-azerbaijan',date:'2041-11-15',player:'Billy Walker',type:'nationalteam',title:'10,0 beim WM-Ticket',detail:'Eröffnet beim 9:0 in der 21. Minute den Torreigen und wird mit Note 10,0 Spieler des Spiels.'},
    {id:'2041-11-15-ronan-reilly-first-goal',date:'2041-11-15',player:'Ronan Reilly',type:'milestone',title:'Erstes A-Länderspieltor',detail:'Erzielt beim 9:0 gegen Aserbaidschan sein erstes Tor für Irlands A-Nationalmannschaft.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-11-15-irland-aserbaidschan-wm-ticket',type:'Spielbericht',date:'2041-11-15',competition:'FIFA-WM-Qualifikation Europa',
    headline:'Neun Tore, sieben Siege, WM-Ticket: Irland ist durch',
    subheadline:'Irland zerlegt Aserbaidschan im Aviva Stadium 9:0 und ist bereits einen Spieltag vor Ende der Qualifikation uneinholbar Gruppenerster. Justin Ramsey trifft dreifach, Ben Barry doppelt.',
    label:'WM-QUALIFIKATION · GRUPPE C · IRLAND 9:0 ASERBAIDSCHAN',
    heroStat:{label:'Qualifikation',value:'7 Spiele · 7 Siege',note:'21 Punkte · 30:5 Tore · WM 2042 qualifiziert'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Irland braucht keinen Taschenrechner mehr. Mit einem 9:0 gegen Aserbaidschan macht die Mannschaft im vorletzten Gruppenspiel den ersten Platz mathematisch perfekt und löst damit das Ticket für die Weltmeisterschaft 2042. Die Partie selbst ist eine Demonstration: 42 Abschlüsse, 18 Schüsse aufs Tor und 7,84 xG lassen dem Gegner praktisch keinen Raum zum Atmen.',
    sections:[
      {title:'Walker öffnet die Schleusen',text:'Billy Walker trifft in der 21. Minute zum 1:0, Harry O’Leary erhöht in der 33. Minute und Cormac O’Kane macht drei Minuten später das 3:0. Zur Pause ist das Spiel entschieden.'},
      {title:'Ramsey braucht sechs Minuten für den Hattrick',text:'Justin Ramsey trifft in der 48. und 50. Minute und verwandelt in der 54. Minute einen Elfmeter. Drei Tore in sechs Minuten verwandeln den klaren Sieg endgültig in ein Schützenfest.'},
      {title:'Barry setzt den Doppelpunkt',text:'Ben Barry trifft in der 65. Minute und in der Nachspielzeit zum 9:0. Der 17-Jährige liefert damit auch im A-Nationalteam weiter Output.'},
      {title:'Ronan Reilly schreibt seine erste Zeile',text:'Ronan Reilly erzielt ebenfalls einen Treffer und damit sein erstes A-Länderspieltor. Die genaue Minute ist in der bereitgestellten Ergebnisansicht nicht eingeblendet und wird deshalb nicht ergänzt.'},
      {title:'Das WM-Ticket ist mathematisch sicher',text:'Irland steht nach sieben Spielen bei 21 Punkten und 30:5 Toren. Kroatien hat seine acht Spiele mit 13 Punkten bereits beendet, Tschechien kann mit einem verbliebenen Spiel maximal 15 Punkte erreichen. Platz eins ist damit vor dem letzten irischen Gruppenspiel nicht mehr zu nehmen.'},
      {title:'Eine Qualifikation ohne Wackler',text:'Sieben Spiele, sieben Siege: Irland hat in Gruppe C bislang jeden Gegner geschlagen. Nach den engen Erfolgen gegen Tschechien und Kroatien folgt gegen Aserbaidschan wieder eine komplette Machtdemonstration.'}
    ],
    verdictHeading:'Vom Hoffnungsträger zum gesetzten WM-Teilnehmer',
    verdict:'Das Entscheidende ist nicht das 9:0 allein, sondern die Konstanz dahinter. Irland hat die Gruppe bereits einen Spieltag vor Schluss gewonnen und kann das Finale der Qualifikation nun ohne Ergebnisdruck angehen. Für Ryan Flannigans Mannschaft beginnt damit früh die eigentliche Aufgabe: aus einer perfekten Qualifikation eine Mannschaft zu formen, die bei der WM 2042 mehr will als nur dabei zu sein.',
    sources:['FM-Spielbericht Irland – Aserbaidschan · 15.11.2041','FM-Spielerstatistiken Irland – Aserbaidschan · 15.11.2041','FM-WM-Qualifikation Gruppe C · Tabelle nach dem 15.11.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-11-15-ireland-world-cup-qualified',date:'2041-11-15',season:2041,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'WM-QUALIFIKATION · GRUPPE C',title:'WM-Ticket gelöst: Irland feiert 9:0',
    summary:'Sieben Spiele, sieben Siege und 21 Punkte: Nach dem 9:0 gegen Aserbaidschan ist Irland bereits einen Spieltag vor Schluss für die WM 2042 qualifiziert.',
    href:'presse.html?id=2041-11-15-irland-aserbaidschan-wm-ticket',entities:['ireland','azerbaijan','justin-ramsey','ben-barry','billy-walker','season-2041']
  });
})();