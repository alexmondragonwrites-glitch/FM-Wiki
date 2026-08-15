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
    id:'2041-09-29-ireland-cyprus',date:'2041-09-29',competition:'FIFA World Cup European Qualification',group:'Gruppe C',
    venue:'Aviva Stadium',location:'Dublin, Irland',attendance:60345,weather:'21 °C',referee:'Elia Mack',
    home:'Irland',away:'Zypern',homeScore:5,awayScore:1,halfTime:'2:0',
    headline:'Irland schlägt Zypern 5:1 und übernimmt die Spitze der Gruppe C',
    events:[
      {minute:13,team:'Zypern',type:'own-goal',player:'Pantelis Vasileiou',text:'Eigentor zum 1:0 für Irland'},
      {minute:41,team:'Irland',type:'goal',player:"Jim O'Neill",text:'2:0'},
      {minute:45,team:'Zypern',type:'yellow',player:'Leon Nielsen Iversen',text:'Gelbe Karte'},
      {minute:74,team:'Irland',type:'goal',player:'Justin Ramsey',text:'3:0'},
      {minute:80,team:'Irland',type:'goal',player:'Ben Barry',text:'4:0'},
      {minute:84,team:'Irland',type:'goal',player:'Brendan McHugh',text:'5:0'},
      {minute:90,team:'Zypern',type:'goal',player:'Giorgos Zeniou',text:'5:1'}
    ],
    scorers:[
      {player:"Jim O'Neill",team:'Irland',goals:1,minutes:[41]},
      {player:'Justin Ramsey',team:'Irland',goals:1,minutes:[74]},
      {player:'Ben Barry',team:'Irland',goals:1,minutes:[80]},
      {player:'Brendan McHugh',team:'Irland',goals:1,minutes:[84]},
      {player:'Pantelis Vasileiou',team:'Zypern',ownGoal:true,minutes:[13]},
      {player:'Giorgos Zeniou',team:'Zypern',goals:1,minutes:[90]}
    ],
    stats:{
      shots:[12,11],shotsOnTarget:[6,4],xg:[2.35,1.38],bigChances:[3,2],
      possession:[65,35],corners:[7,7],fouls:[16,9],completedPasses:[484,259],attemptedPasses:[558,324],passAccuracy:[87,80],
      tacklesWon:['93% (14/15)','75% (18/24)'],headersWon:['62% (24/39)','35% (14/40)'],yellowCards:[4,1],redCards:[0,0],
      averageRating:[7.03,6.35],intenseSprints:[74,85]
    },
    ratings:{
      'Evan Reilly':7.1,'Simon Neville':6.8,'Callum Duggan':6.9,'Tariq Benson':6.8,'Kevin Kelly':6.8,'Brendan Costello':7.4,
      "Jim O'Neill":6.6,"Cormac O'Kane":7.7,'Richard Wilson':6.7,'Shane Fox':6.6,'Ben Barry':8.1,'Mareks Istrankins':7.1,
      'Justin Ramsey':7.2,'Colum Winnall':6.5,'Brendan McHugh':7.4,'Ronan Reilly':6.8
    },
    standout:{player:'Ben Barry',rating:8.1,goals:1,note:'Nach seinem Debüttor in Baku trifft Barry auch gegen Zypern und wird als bester irischer Spieler geführt.'},
    groupAfterMatch:{name:'Gruppe C',position:1,played:4,wins:4,draws:0,losses:0,goalsFor:17,goalsAgainst:3,goalDifference:14,points:12},
    tableSnapshot:[
      {position:1,team:'Irland',played:4,wins:4,draws:0,losses:0,goalsFor:17,goalsAgainst:3,goalDifference:14,points:12},
      {position:2,team:'Tschechien',played:5,wins:4,draws:0,losses:1,goalsFor:9,goalsAgainst:4,goalDifference:5,points:12},
      {position:3,team:'Kroatien',played:5,wins:3,draws:0,losses:2,goalsFor:18,goalsAgainst:7,goalDifference:11,points:9},
      {position:4,team:'Zypern',played:5,wins:1,draws:0,losses:4,goalsFor:7,goalsAgainst:13,goalDifference:-6,points:3},
      {position:5,team:'Aserbaidschan',played:5,wins:0,draws:0,losses:5,goalsFor:3,goalsAgainst:27,goalDifference:-24,points:0}
    ],
    rotation:{
      intentional:true,
      note:'Ryan Flannigan rotierte bewusst, um mehrere Stammspieler für die folgenden Schlüsselspiele gegen Tschechien und Kroatien frisch zu halten.'
    },
    analysis:{
      summary:'Irland gewinnt trotz Rotation auch das vierte WM-Qualifikationsspiel. Ein Eigentor und Jim O’Neill sorgen für das 2:0 zur Pause, ehe Justin Ramsey, Ben Barry und Brendan McHugh den Sieg in der Schlussphase deutlich machen.',
      control:'Mit 65 Prozent Ballbesitz und 484 angekommenen Pässen kontrolliert Irland das Spiel, ohne die extreme Schussdominanz des 8:1 in Baku zu wiederholen.',
      rotation:'Die Rotation erfüllt ihren Zweck: Irland holt drei Punkte und schont zugleich Kräfte vor den direkten Duellen mit Tschechien und Kroatien.',
      barry:'Ben Barry setzt seinen Traumstart im A-Team fort und trifft nach seinem Debüttor gegen Aserbaidschan auch im zweiten Qualifikationsspiel.',
      qualification:'Mit zwölf Punkten aus vier Spielen und 17:3 Toren steht Irland nun aufgrund der besseren Tordifferenz vor Tschechien an der Spitze der Gruppe C.',
      next:'Am 3. Oktober wartet im Aviva Stadium das direkte Spitzenspiel gegen Tschechien, anschließend folgt am 6. Oktober das Auswärtsspiel in Kroatien.'
    },
    sources:['FM-Spielübersicht Irland – Zypern · 29.09.2041','FM-Irland-Spielerstatistiken · 29.09.2041','Manager-Kontext zur bewussten Rotation vor Tschechien und Kroatien']
  };

  window.FM_IRELAND_MATCHES=[...(window.FM_IRELAND_MATCHES||[]).filter(x=>x.id!==match.id),match];
  Object.assign(window.FM_IRELAND,{
    title:'Irland 2041',updated:'29.09.2041',competition:'WM-Qualifikation',group:'Gruppe C',position:'1. Platz',
    lastMatch:match,
    nextMatch:{opponent:'Tschechien',venue:'Heim',date:'03.10.2041',stadium:'Aviva Stadium'},
    upcomingMatches:[
      {opponent:'Tschechien',venue:'Heim',date:'03.10.2041',stadium:'Aviva Stadium'},
      {opponent:'Kroatien',venue:'Auswärts',date:'06.10.2041',stadium:'Poljud-Stadion'}
    ],
    groupStatus:'WM-Qualifikation · Gruppe C · 4 Spiele · 12 Punkte · 17:3 Tore · Rang 1',
    qualification:{stage:'FIFA World Cup European Qualification · Gruppe C',label:'WM-Qualifikation',status:'Rang 1',detail:'Irland gewinnt die ersten vier Gruppenspiele und führt die Gruppe mit zwölf Punkten und 17:3 Toren an. Tschechien steht ebenfalls bei zwölf Punkten, hat aber bereits fünf Spiele absolviert.'}
  });

  [
    {id:'2041-09-29-jim-oneill-cyprus-goal',date:'2041-09-29',player:"Jim O'Neill",type:'nationalteam',title:'Tor gegen Zypern',detail:'Trifft beim 5:1-Heimsieg in der 41. Minute zum 2:0.'},
    {id:'2041-09-29-justin-ramsey-cyprus-goal',date:'2041-09-29',player:'Justin Ramsey',type:'nationalteam',title:'Tor gegen Zypern',detail:'Erzielt in der 74. Minute das 3:0 für Irland.'},
    {id:'2041-09-29-ben-barry-cyprus-goal',date:'2041-09-29',player:'Ben Barry',type:'nationalteam',title:'Zweites Tor im zweiten A-Team-Spiel',detail:'Trifft beim 5:1 gegen Zypern in der 80. Minute und setzt seinen starken Start im irischen A-Team fort.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-09-29-irland-zypern-wm-quali-spielbericht',type:'Spielbericht',date:'2041-09-29',competition:'WM-Qualifikation',
    home:'Irland',away:'Zypern',score:'5:1',location:'Aviva Stadium · Dublin · 60.345 Zuschauer',
    headline:'Rotation, fünf Tore, Tabellenführung: Irland schlägt Zypern 5:1',
    subheadline:'Flannigan verteilt die Minuten mit Blick auf Tschechien und Kroatien. Trotzdem gewinnt Irland klar, bleibt nach vier Qualifikationsspielen makellos und übernimmt Rang eins der Gruppe C.',
    label:'IRLAND · WM-QUALIFIKATION · IRLAND 5:1 ZYPERN',
    heroStat:{label:'Qualifikationsstart',value:'4 Spiele · 4 Siege',note:'17:3 Tore · 12 Punkte · Rang 1'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Nach dem 8:1 in Baku wird gegen Zypern bewusst rotiert. Die Rechnung geht auf: Irland führt zur Pause 2:0, legt in der Schlussphase drei weitere Tore nach und kann wichtige Kräfte für die Duelle mit Tschechien und Kroatien sparen.',
    sections:[
      {title:'Eigentor öffnet die Tür',text:'Pantelis Vasileiou lenkt den Ball in der 13. Minute ins eigene Tor. Jim O’Neill erhöht kurz vor der Pause auf 2:0.'},
      {title:'Die Schlussphase macht das Ergebnis deutlich',text:'Justin Ramsey trifft in der 74. Minute, Ben Barry in der 80. und Brendan McHugh in der 84. Minute. Zyperns Giorgos Zeniou erzielt in der 90. Minute nur noch den Ehrentreffer.'},
      {title:'Barry bleibt auf der Überholspur',text:'Nach seinem ersten A-Länderspieltor gegen Aserbaidschan trifft Ben Barry erneut und erhält mit 8,1 die beste irische Note im Spielerstatistik-Snapshot.'},
      {title:'Rotation mit Blick auf die Schlüsselspiele',text:'Flannigan schont und verteilt Minuten bewusst, damit die Mannschaft für die unmittelbar folgenden Spiele gegen Tschechien und Kroatien frisch bleibt.'},
      {title:'Weniger Feuerwerk, weiter klare Kontrolle',text:'Irland kommt auf 65 Prozent Ballbesitz, 484 erfolgreiche Pässe und 2,35 xG. Zypern produziert 1,38 xG und elf Abschlüsse, wird aber nur einmal belohnt.'},
      {title:'Rang eins vor dem direkten Duell',text:'Irland und Tschechien stehen beide bei zwölf Punkten. Irland führt mit 17:3 Toren und einem Spiel weniger die Gruppe an; am 3. Oktober treffen beide im Aviva Stadium direkt aufeinander.'}
    ],
    strengths:['5 Tore trotz Rotation','4 Siege aus 4 Qualifikationsspielen','65 % Ballbesitz','Ben Barry trifft erneut','Ramsey und O’Neill ebenfalls erfolgreich','Tabellenführung vor dem Tschechien-Spiel'],
    vulnerabilities:['Zypern kommt auf 1,38 xG und elf Abschlüsse','Spätes Gegentor in der 90. Minute','Vier Gelbe Karten auf irischer Seite'],
    verdictHeading:'Perfekte Punkteausbeute und frische Beine für die schweren Spiele',
    verdict:'Der Plan geht vollständig auf. Irland muss gegen Zypern nicht die stärkste Elf über 90 Minuten belasten, gewinnt dennoch deutlich und geht als Tabellenführer in die beiden härtesten Partien des Blocks. Jetzt beginnt mit Tschechien und Kroatien der eigentliche Härtetest.',
    sources:['FM-Spielübersicht Irland – Zypern · 29.09.2041','FM-Irland-Spielerstatistiken · 29.09.2041','Manager-Angabe zur bewussten Rotation']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-29-irland-zypern-5-1',date:'2041-09-29',season:2041,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'IRLAND · WM-QUALIFIKATION',title:'5:1 trotz Rotation: Irland übernimmt die Tabellenführung',
    summary:'Vier Spiele, vier Siege und 17:3 Tore. Barry trifft erneut, Ramsey und O’Neill ebenfalls. Nun warten Tschechien und Kroatien.',
    href:'presse.html?id=2041-09-29-irland-zypern-wm-quali-spielbericht',entities:['ireland','cyprus','ben-barry','justin-ramsey','jim-oneill','world-cup-qualification','season-2041']
  });
})();