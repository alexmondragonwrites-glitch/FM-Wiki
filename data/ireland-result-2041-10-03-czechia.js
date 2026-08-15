(()=>{
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2041-10-03-ireland-czechia',date:'2041-10-03',competition:'FIFA World Cup European Qualification',group:'Gruppe C',
    venue:'Aviva Stadium',location:'Dublin, Irland',attendance:60345,weather:'14 °C · windig',referee:'Darren Evans',
    home:'Irland',away:'Tschechien',homeScore:2,awayScore:1,halfTime:'1:0',
    events:[
      {minute:15,team:'Irland',type:'yellow',player:'Billy Walker'},
      {minute:36,team:'Irland',type:'goal',player:'Brendan McHugh',text:'1:0'},
      {minute:59,team:'Tschechien',type:'yellow',player:'Ivo Marek'},
      {minute:74,team:'Irland',type:'goal',player:"Harry O'Leary",text:'2:0'},
      {minute:79,team:'Tschechien',type:'goal',player:'Michal Matoušek',text:'2:1 · erstes Länderspieltor'},
      {minute:83,team:'Irland',type:'yellow',player:'Ben Barry'},
      {minute:'90+4',team:'Tschechien',type:'yellow',player:'Tomas Baran'},
      {minute:'90+6',team:'Tschechien',type:'yellow',player:'Milan Kovář'}
    ],
    scorers:[
      {player:'Brendan McHugh',team:'Irland',goals:1,minutes:[36]},
      {player:"Harry O'Leary",team:'Irland',goals:1,minutes:[74]},
      {player:'Michal Matoušek',team:'Tschechien',goals:1,minutes:[79],firstInternationalGoal:true}
    ],
    stats:{
      shots:[19,3],shotsOnTarget:[8,2],xg:[2.57,0.20],bigChances:[4,0],possession:[64,36],corners:[9,2],fouls:[12,13],
      completedPasses:[558,316],attemptedPasses:[656,389],passAccuracy:[85,81],
      tacklesWon:['65% (31/48)','78% (21/27)'],headersWon:['46% (30/66)','50% (33/66)'],yellowCards:[2,3],redCards:[0,0],
      averageRating:[6.96,6.67],intenseSprints:[126,112]
    },
    ratings:{'Evan Reilly':6.8,'Callum Brennan':6.8,'Darcy Andrews':6.7,'Mareks Istrankins':6.9,'Kevin Kelly':7.1,"Jim O'Neill":7.0,'Justin Ramsey':6.6,"Cormac O'Kane":6.9,'Billy Walker':8.2,'Brendan McHugh':7.1,"Harry O'Leary":7.3,'Ben Barry':6.5,'Shane Fox':6.8,'Ronan Reilly':7.0,'Callum Duggan':6.7,'Colum Winnall':6.5},
    standout:{player:'Billy Walker',rating:8.2,assists:2,note:'Bereitet beide irischen Treffer vor und wird bester Ire.'},
    groupAfterMatch:{name:'Gruppe C',position:1,played:5,wins:5,draws:0,losses:0,goalsFor:19,goalsAgainst:4,goalDifference:15,points:15},
    analysis:{
      summary:'Irland gewinnt das Spitzenspiel der Gruppe C hochverdient mit 2:1. Bei 19:3 Schüssen, 8:2 Abschlüssen aufs Tor und 2,57:0,20 xG kontrolliert die Mannschaft das Spiel fast vollständig.',
      walker:'Billy Walker liefert beide Vorlagen und erhält mit 8,2 die beste irische Note.',
      scorers:'Brendan McHugh trifft in der 36. Minute zum 1:0, Harry O’Leary erhöht in der 74. Minute auf 2:0. Michal Matoušek verkürzt fünf Minuten später.',
      qualification:'Irland bleibt nach fünf Gruppenspielen makellos: fünf Siege, 15 Punkte und 19:4 Tore. Damit steht die Mannschaft an der Spitze der Gruppe C.'
    },
    sources:['FM-Spielübersicht Irland – Tschechien · 03.10.2041','FM-Irland-Spielerstatistiken · 03.10.2041']
  };

  window.FM_IRELAND_MATCHES=[...(window.FM_IRELAND_MATCHES||[]).filter(x=>x.id!==match.id),match];
  Object.assign(window.FM_IRELAND,{
    title:'Irland 2041',updated:'03.10.2041',competition:'WM-Qualifikation',group:'Gruppe C',position:'1. Platz',lastMatch:match,
    nextMatch:{opponent:'Kroatien',venue:'Auswärts',date:'06.10.2041',stadium:'Poljud-Stadion'},
    groupStatus:'WM-Qualifikation · Gruppe C · 5 Spiele · 15 Punkte · 19:4 Tore · Rang 1',
    qualification:{stage:'FIFA World Cup European Qualification · Gruppe C',label:'WM-Qualifikation',status:'Rang 1',detail:'Irland schlägt Tschechien 2:1 und bleibt nach fünf Spielen mit 15 Punkten makellos.'}
  });

  [
    {id:'2041-10-03-billy-walker-two-assists-czechia',date:'2041-10-03',player:'Billy Walker',type:'nationalteam',title:'Zwei Vorlagen gegen Tschechien',detail:'Bereitet beim 2:1-Sieg beide irischen Tore vor und erhält Note 8,2.'},
    {id:'2041-10-03-brendan-mchugh-goal-czechia',date:'2041-10-03',player:'Brendan McHugh',type:'nationalteam',title:'Tor im Spitzenspiel',detail:'Erzielt in der 36. Minute das 1:0 gegen Tschechien.'},
    {id:'2041-10-03-harry-oleary-goal-czechia',date:'2041-10-03',player:"Harry O'Leary",type:'nationalteam',title:'Entscheidendes 2:0',detail:'Trifft in der 74. Minute zum 2:0 beim 2:1-Sieg gegen Tschechien.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-10-03-irland-tschechien-wm-quali-spielbericht',type:'Spielbericht',date:'2041-10-03',competition:'WM-Qualifikation',
    home:'Irland',away:'Tschechien',score:'2:1',location:'Aviva Stadium · Dublin · 60.345 Zuschauer',
    headline:'Irland gewinnt das Spitzenspiel: Walker serviert, McHugh und O’Leary treffen',
    subheadline:'19:3 Schüsse und 2,57:0,20 xG: Irland schlägt Tschechien 2:1 und bleibt in der WM-Qualifikation nach fünf Spielen ohne Punktverlust.',
    label:'IRLAND · WM-QUALIFIKATION · IRLAND 2:1 TSCHECHIEN',
    heroStat:{label:'Billy Walker',value:'2 Vorlagen · Note 8,2',note:'Bereitet beide irischen Tore vor'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Nach der bewussten Rotation gegen Zypern kehrt Irland für das Spitzenspiel der Gruppe C mit frischen Kräften zurück. Das Ergebnis ist knapper als der Spielverlauf: Irland dominiert Tschechien über weite Strecken und gibt nur drei gegnerische Abschlüsse zu.',
    sections:[
      {title:'McHugh bricht den Bann',text:'Brendan McHugh bringt Irland in der 36. Minute in Führung. Billy Walker liefert die Vorlage.'},
      {title:'Walker bereitet auch das 2:0 vor',text:'In der 74. Minute findet Walker Harry O’Leary, der auf 2:0 erhöht. Walker beendet das Spiel mit zwei Vorlagen und Note 8,2.'},
      {title:'Ein Gegentor ändert nichts an der Kontrolle',text:'Michal Matoušek erzielt in der 79. Minute sein erstes Länderspieltor und verkürzt auf 2:1. Tschechien kommt insgesamt dennoch nur auf drei Schüsse und 0,20 xG.'},
      {title:'Die Zahlen sind klarer als das Ergebnis',text:'Irland gewinnt das Schussverhältnis 19:3, die Abschlüsse aufs Tor 8:2 und die xG-Bilanz 2,57:0,20. Dazu kommen 64 Prozent Ballbesitz und vier große Chancen.'},
      {title:'Fünf Spiele, fünf Siege',text:'Irland steht nach fünf Partien bei 15 Punkten und 19:4 Toren auf Rang eins der Gruppe C. Als nächstes folgt das Auswärtsspiel gegen Kroatien.'}
    ],
    verdictHeading:'Die Rotation gegen Zypern zahlt sich aus',
    verdict:'Irland gewinnt nicht nur das direkte Duell mit dem härtesten bisherigen Konkurrenten, sondern tut es mit klarer spielerischer Überlegenheit. Der Plan, gegen Zypern Kräfte zu sparen, zahlt sich aus: Tschechien wird im Aviva Stadium auf drei Abschlüsse begrenzt, während Walker zwei Tore vorbereitet.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-03-irland-tschechien-2-1',date:'2041-10-03',season:2041,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'IRLAND · WM-QUALIFIKATION',title:'2:1 gegen Tschechien: Irland bleibt perfekt',
    summary:'Walker bereitet beide Tore vor, McHugh und O’Leary treffen. Nach fünf Spielen steht Irland bei 15 Punkten und 19:4 Toren.',
    href:'presse.html?id=2041-10-03-irland-tschechien-wm-quali-spielbericht',entities:['ireland','czechia','billy-walker','harry-oleary','season-2041']
  });
})();