(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-08-30-cork-city-finn-harps-premier-division';
  const reportId='2041-08-30-cork-city-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-08-30',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'cork-city',name:'Cork City',short:'COR',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:2},
    score:'1:2',homeGoals:1,awayGoals:2,halfTime:'1:0',
    venue:'Turners Cross',location:'Cork, Irland',attendance:6937,awayFans:368,weather:'20 °C',referee:'Alan Patchell',
    headline:'Meisterklasse zu zehnt: Finn Harps drehen Rückstand in Cork',
    verdict:'Finn Harps geraten durch Callum Brown in Rückstand und verlieren Jim O’Neill in der 54. Minute durch Platzverweis. Trotzdem drehen Emerson Escárcega und Daryl Frame die Partie noch zum 2:1. Mit 78 Prozent Ballbesitz, 16:7 Schüssen und 1,69:0,65 xG bleiben die Harps auch in Unterzahl die spielbestimmende Mannschaft.',
    scorers:[
      {player:'Callum Brown',team:'Cork City',goals:1,minutes:[39]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[61]},
      {player:'Daryl Frame',team:'Finn Harps',goals:1,minutes:[88]}
    ],
    events:[
      {minute:14,type:'yellow',team:'Cork City',player:'Emmanuel Mbombo',text:'Gelbe Karte'},
      {minute:18,type:'yellow',team:'Finn Harps',player:'Jim O’Neill',text:'Gelbe Karte'},
      {minute:39,type:'goal',team:'Cork City',player:'Callum Brown',text:'1:0'},
      {minute:46,type:'yellow',team:'Cork City',player:'Callum Brown',text:'Gelbe Karte'},
      {minute:54,type:'red',team:'Finn Harps',player:'Jim O’Neill',text:'Platzverweis'},
      {minute:61,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'1:1'},
      {minute:88,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'1:2'}
    ],
    stats:[
      {label:'Schüsse',home:7,away:16,kind:'number'},
      {label:'Schüsse aufs Tor',home:3,away:6,kind:'number'},
      {label:'xG',home:0.65,away:1.69,kind:'decimal'},
      {label:'Großchancen',home:1,away:4,kind:'number'},
      {label:'Ballbesitz',home:22,away:78,kind:'percent'},
      {label:'Ecken',home:4,away:8,kind:'number'},
      {label:'Fouls',home:19,away:12,kind:'number'},
      {label:'Angekommene Pässe',home:167,away:592,kind:'number',homeDetail:'72 % · 167/231',awayDetail:'89 % · 592/668'},
      {label:'Gelbe Karten',home:2,away:3,kind:'number'},
      {label:'Rote Karten',home:0,away:1,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:28,wins:26,draws:2,losses:0,goalsFor:84,goalsAgainst:10,goalDifference:74,points:80},
    titleRace:{
      mathematicallyClinched:true,
      note:'Finn Harps stehen bei 80 Punkten. Der Tabellenzweite St Patrick’s Athletic hat nach 27 Spielen 51 Punkte und kann in der 36-Spiele-Saison maximal 78 erreichen. Damit ist der Meistertitel rechnerisch gesichert.'
    },
    standout:{player:'Cormac O’Kane',team:'Finn Harps',rating:7.8,note:'Beste Harps-Note; prägt den Ballbesitz und bleibt auch nach dem Platzverweis ein wichtiger Taktgeber.'},
    milestones:[
      {player:'Justin Ramsey',text:'175. Spiel als Profi'}
    ],
    analysis:{
      summary:'Das ist weniger ein normaler Auswärtssieg als ein Statement. Finn Harps liegen zur Pause zurück, spielen ab der 54. Minute zu zehnt und kontrollieren die Partie trotzdem mit 78 Prozent Ballbesitz. Der Ausgleich fällt nur sieben Minuten nach dem Platzverweis, Frame entscheidet das Spiel spät.',
      firstHalf:'Cork verteidigt tief und nutzt eine seiner wenigen Möglichkeiten: Callum Brown trifft in der 39. Minute zum 1:0. Finn Harps hat deutlich mehr vom Ball, geht aber mit Rückstand in die Pause.',
      redCardResponse:'Jim O’Neill sieht in der 54. Minute den Platzverweis. Statt die Kontrolle zu verlieren, reagieren die Harps sofort. Emerson Escárcega gleicht in der 61. Minute aus.',
      lateWinner:'Auch in Unterzahl sucht Finn Harps weiter den Sieg. In der 88. Minute belohnt Daryl Frame den Druck mit dem 2:1.',
      classStatement:'Die eigentliche Qualität liegt im Spielverlauf: Rückstand, Auswärtsplatz, Platzverweis und trotzdem keine Abkehr vom eigenen Fußball. 592 erfolgreiche Pässe, 16 Abschlüsse und vier Großchancen zeigen, dass die Harps selbst mit zehn Spielern nicht in einen reinen Überlebensmodus fallen.',
      leagueContext:'Nach 28 Ligaspielen steht Finn Harps bei 26 Siegen, zwei Remis und keiner Niederlage. Die Bilanz lautet 84:10 Tore und 80 Punkte. Der Vorsprung ist damit rechnerisch groß genug, um den Meistertitel bereits zu sichern.'
    },
    sources:['FM-Spielübersicht Cork City – Finn Harps · 30.08.2041','Finn-Harps-Spielerstatistiken · 30.08.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-08-30';
    season.latestHeadline='Premier Division: Zu zehnt dreht Finn Harps das Spiel in Cork und sichert rechnerisch den Meistertitel.';
    season.league={
      ...(season.league||{}),position:1,played:28,wins:26,draws:2,losses:0,goalsFor:84,goalsAgainst:10,goalDifference:74,points:80,
      latestResult:'30.08.2041 · Cork City 1:2 Finn Harps',champion:true,titleClinchedDate:'2041-08-30'
    };
    season.honours=season.honours||[];
    if(!season.honours.includes('SSE Airtricity League Premier Division'))season.honours.push('SSE Airtricity League Premier Division');
    season.changes=season.changes||{notes:[]};
    const note='30.08.2041: 2:1 bei Cork City nach 0:1-Rückstand und Platzverweis gegen Jim O’Neill in der 54. Minute. Escárcega gleicht in der 61. Minute aus, Frame trifft in der 88. Minute zum Sieg. Liga: 28 Spiele, 26 Siege, 2 Remis, 0 Niederlagen, 84:10 Tore, 80 Punkte. Der Meistertitel ist rechnerisch gesichert.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-08-30-emerson-escarcega-cork-goal',date:'2041-08-30',player:'Emerson Escárcega',type:'goal',title:'Ausgleich in Unterzahl',detail:'Trifft beim 2:1 in Cork in der 61. Minute zum 1:1, nur sieben Minuten nach dem Platzverweis gegen Jim O’Neill.'},
    {id:'2041-08-30-daryl-frame-cork-winner',date:'2041-08-30',player:'Daryl Frame',type:'standout',title:'Später Siegtreffer in Cork',detail:'Entscheidet das Auswärtsspiel bei Cork City in der 88. Minute mit dem Treffer zum 2:1.'},
    {id:'2041-08-30-jim-oneill-red-card',date:'2041-08-30',player:'Jim O’Neill',type:'discipline',title:'Platzverweis in Cork',detail:'Sieht in der 54. Minute Rot. Finn Harps dreht das Spiel anschließend trotzdem von 0:1 auf 2:1.'},
    {id:'2041-08-30-justin-ramsey-175-pro',date:'2041-08-30',player:'Justin Ramsey',type:'milestone',title:'175 Profispiele',detail:'Erreicht beim 2:1-Auswärtssieg gegen Cork City die Marke von 175 Spielen als Profi.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-08-30',competition:'Premier Division',fixtureDate:'30.08.2041',
    home:'Cork City',away:'Finn Harps',score:'1:2',location:'Turners Cross · Cork · 6.937 Zuschauer',
    headline:'Zu zehnt, im Rückstand, auswärts: Harps drehen Cork trotzdem',
    subheadline:'Callum Brown bringt Cork in Führung, Jim O’Neill fliegt in der 54. Minute vom Platz. Danach treffen Escárcega und Frame. Finn Harps kontrolliert selbst in Unterzahl 78 Prozent Ballbesitz und sichert mit dem Sieg rechnerisch die Meisterschaft.',
    label:'PREMIER DIVISION · CORK CITY 1:2 FINN HARPS',
    heroStat:{label:'Nach Platzverweis',value:'0:2 Tore',note:'54. Minute Rot gegen O’Neill · 61. Escárcega · 88. Frame'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Es gibt Siege, die in einer Tabelle wie drei weitere Punkte aussehen und trotzdem mehr über eine Mannschaft erzählen. Finn Harps liegt in Cork zurück, verliert kurz nach der Pause Jim O’Neill und müsste eigentlich in den Verwaltungsmodus wechseln. Stattdessen wird das Spiel erst danach endgültig gedreht.',
    sections:[
      {title:'Cork trifft, Harps laufen hinterher',text:'Callum Brown bringt Cork City in der 39. Minute mit 1:0 in Führung. Zur Pause liegt der Favorit zurück, obwohl Finn Harps bereits den deutlich größeren Ballbesitz hat.'},
      {title:'Rot in der 54. Minute, Ausgleich in der 61.',text:'Jim O’Neill wird kurz nach der Pause vom Platz gestellt. Die Reaktion ist bemerkenswert: Nur sieben Minuten später erzielt Emerson Escárcega das 1:1.'},
      {title:'Keine zehn Mann, die nur noch verteidigen',text:'Finn Harps bleibt auch in Unterzahl dominant. Am Ende stehen 78 Prozent Ballbesitz, 16:7 Schüsse, 6:3 Schüsse aufs Tor, 4:1 Großchancen und 1,69:0,65 xG.'},
      {title:'Frame setzt den Schlusspunkt',text:'In der 88. Minute erzielt Daryl Frame das 2:1. Der späte Treffer ist die logische Belohnung für eine Mannschaft, die trotz Unterzahl weiter auf Sieg spielt.'},
      {title:'Das ist Meisterklasse im wörtlichen Sinn',text:'Mit 80 Punkten nach 28 Spielen ist Finn Harps rechnerisch nicht mehr einzuholen. St Patrick’s Athletic steht nach 27 Spielen bei 51 Punkten und kann in der 36-Spiele-Saison maximal 78 erreichen. Der Titel ist damit bereits gesichert.'}
    ],
    strengthsTitle:'WARUM DIESER SIEG MEHR ALS DREI PUNKTE IST',strengthsHeading:'Die Harps verlieren einen Spieler, aber nicht ihre Identität',
    strengths:['Spiel nach 0:1-Rückstand gedreht','Nach Rot in der 54. Minute noch 2 Tore erzielt','78 % Ballbesitz','16:7 Schüsse','4:1 Großchancen','592 angekommene Pässe','Später Siegtreffer durch Frame'],
    vulnerabilitiesTitle:'WAS TROTZDEM BLEIBT',vulnerabilitiesHeading:'Die Harps machen sich das Spiel schwerer als nötig',
    vulnerabilities:['Rückstand trotz klarer Spielkontrolle','Platzverweis gegen Jim O’Neill','Nur 6 von 16 Abschlüssen aufs Tor','Cork kommt mit wenig Ballbesitz zu drei Abschlüssen aufs Tor'],
    verdictHeading:'Klasse zeigt sich nicht nur darin, Gegner zu dominieren, sondern darin, nach einem Bruch im Spiel besser zu werden',
    verdict:'Genau deshalb ist dieses 2:1 eines der stärkeren Liga-Statements der Saison. Finn Harps muss gleich zwei negative Spielzustände verarbeiten: Rückstand und Unterzahl. Die Mannschaft reagiert nicht mit Hektik oder Rückzug, sondern mit noch klarerer Kontrolle. Dass der rechnerische Meistertitel ausgerechnet an so einem Abend feststeht, passt zur Saison.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 30. August 2041.',
    sources:['FM-Spielübersicht Cork City – Finn Harps · 30.08.2041','Finn-Harps-Spielerstatistiken · 30.08.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-08-30-cork-city-liga',date:'2041-08-30',season:2041,category:'Premier Division',accent:'gold',featured:true,
    eyebrow:'PREMIER DIVISION · CORK CITY 1:2 FINN HARPS',
    title:'Meisterklasse zu zehnt: Harps drehen Cork und sind rechnerisch durch',
    summary:'Finn Harps liegt 0:1 zurück und spielt ab der 54. Minute in Unterzahl. Escárcega und Frame drehen die Partie trotzdem. Mit 80 Punkten nach 28 Ligaspielen ist der Meistertitel rechnerisch gesichert.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','cork-city','emerson-escarcega','daryl-frame','jim-oneill','justin-ramsey','premier-division']
  });
})();