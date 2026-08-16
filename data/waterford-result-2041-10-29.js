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

  const match={
    id:'2041-10-29-waterford-finn-harps-premier-division',date:'2041-10-29',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'waterford',name:'Waterford',short:'WAT',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    score:'0:3',homeGoals:0,awayGoals:3,halfTime:'0:2',
    venue:'Regional Sports Centre',location:'Waterford, Irland',attendance:5070,awayFans:258,weather:'Ohne besondere Wetterangabe · 11 °C',referee:'Callum Gallagher',
    headline:'Escárcega eröffnet, Barry und Ramsey legen nach: Harps gewinnt 3:0 in Waterford',
    verdict:'Zwei Tage nach dem kontrollierten 1:0 bei St Patrick’s gewinnt Finn Harps auch in Waterford souverän. 20:6 Schüsse, 2,61:0,95 xG und 64 Prozent Ballbesitz ergeben einen verdienten 3:0-Auswärtssieg. Bitter ist nur die erneute Verletzung von Giacomo Papini.',
    scorers:[
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[12]},
      {player:'Ben Barry',team:'Finn Harps',goals:1,minutes:['45+2']},
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[68]}
    ],
    events:[
      {minute:12,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'0:1'},
      {minute:45,type:'yellow',team:'Waterford',player:'Darcy Morling',text:'Gelbe Karte'},
      {minute:'45+2',type:'goal',team:'Finn Harps',player:'Ben Barry',text:'0:2'},
      {minute:68,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'0:3'},
      {minute:77,type:'yellow',team:'Waterford',player:'Mikey Carson',text:'Gelbe Karte'},
      {minute:'90+1',type:'yellow',team:'Finn Harps',player:'Kevin Kelly',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:6,away:20,kind:'number'},
      {label:'Schüsse aufs Tor',home:3,away:7,kind:'number'},
      {label:'xG',home:0.95,away:2.61,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:2,away:6,kind:'number'},
      {label:'Großchancen',home:1,away:2,kind:'number'},
      {label:'Ballbesitz',home:36,away:64,kind:'percent'},
      {label:'Ecken',home:4,away:7,kind:'number'},
      {label:'Fouls',home:22,away:10,kind:'number'},
      {label:'Angekommene Pässe',home:292,away:528,kind:'number',homeDetail:'78 % · 292/375',awayDetail:'88 % · 528/603'},
      {label:'Gewonnene Zweikämpfe',home:69,away:77,kind:'percent',homeDetail:'20/29',awayDetail:'20/26'},
      {label:'Gewonnene Kopfbälle',home:47,away:53,kind:'percent',homeDetail:'27/58',awayDetail:'31/59'},
      {label:'Gelbe Karten',home:2,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Intensität',home:6.44,away:7.26,kind:'decimal'},
      {label:'Intensive Sprints',home:137,away:114,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:34,wins:32,draws:2,losses:0,goalsFor:106,goalsAgainst:13,goalDifference:93,points:98},
    standout:{player:'Emerson Escárcega',team:'Finn Harps',rating:7.9,goals:1,note:'Eröffnet den Auswärtssieg bereits in der 12. Minute.'},
    keyPerformers:[
      {player:'Ben Barry',rating:7.6,goals:1,note:'Trifft in der Nachspielzeit der ersten Hälfte zum 2:0.'},
      {player:'Justin Ramsey',rating:7.3,goals:1,note:'Sorgt in der 68. Minute für die endgültige Entscheidung.'},
      {player:'Paulo Henrique',rating:7.3,note:'Bleibt erneut ohne Gegentor.'},
      {player:'Giacomo Papini',rating:6.9,note:'Startet nach seinem Comeback wieder, verletzt sich jedoch erneut.'}
    ],
    injuries:[
      {player:'Giacomo Papini',diagnosis:'Zerrung der Oberschenkelvorderseite',date:'2041-10-29',cause:'Beim Sprint/Hinterherjagen des Balles',physio:'3 Wochen Ausfall',injection:'Kann gegen Derry City spielen, danach voraussichtlich 4 bis 5 Wochen Ausfall',status:'Behandlungsentscheidung im Screenshot noch offen'}
    ],
    analysis:{
      control:'Finn Harps kontrolliert auch das zweite Ligaauswärtsspiel binnen weniger Tage: 20:6 Schüsse, 7:3 aufs Tor und 64 Prozent Ballbesitz.',
      firstHalf:'Escárcega bringt die Harps in Minute 12 in Führung. Ben Barry erhöht in der Nachspielzeit der ersten Hälfte auf 2:0.',
      secondHalf:'Justin Ramsey entscheidet das Spiel in der 68. Minute endgültig. Waterford kommt trotz sechs Abschlüssen nur auf 0,95 xG.',
      defense:'Paulo Henrique bleibt erneut ohne Gegentor. Die Harps lassen nur drei Schüsse aufs Tor zu.',
      papiniSetback:'Giacomo Papini erleidet kurz nach seinem Comeback eine Zerrung der Oberschenkelvorderseite. Laut medizinischem Bericht würde eine normale physiotherapeutische Behandlung rund drei Wochen Ausfall bedeuten; eine Injektion könnte ihn gegen Derry City verfügbar machen, würde danach aber vier bis fünf Wochen Ausfall riskieren.',
      leagueContext:'Nach 34 Ligaspielen steht Finn Harps bei 32 Siegen, zwei Remis und keiner Niederlage. Die Bilanz lautet 106:13 Tore und 98 Punkte.',
      nextMatch:'In zwei Tagen wartet Derry City auswärts.'
    },
    sources:['FM-Spielübersicht Waterford – Finn Harps · 29.10.2041','Finn-Harps-Spielerstatistiken · 29.10.2041','Medizinischer Bericht Giacomo Papini · 29.10.2041']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-10-29';
    season.latestHeadline='Premier Division: Finn Harps gewinnt 3:0 bei Waterford; Papini verletzt sich erneut.';
    season.league={
      ...(season.league||{}),position:1,played:34,wins:32,draws:2,losses:0,goalsFor:106,goalsAgainst:13,goalDifference:93,points:98,
      latestResult:'29.10.2041 · Waterford 0:3 Finn Harps',champion:true,titleClinchedDate:'2041-08-30'
    };
    season.changes=season.changes||{notes:[]};
    const note='29.10.2041: 3:0 bei Waterford durch Escárcega, Ben Barry und Justin Ramsey. Finn Harps bleibt nach 34 Ligaspielen ungeschlagen: 32 Siege, 2 Remis, 106:13 Tore, 98 Punkte. Papini erleidet eine Zerrung der Oberschenkelvorderseite.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-10-29-escarcega-waterford-goal',date:'2041-10-29',player:'Emerson Escárcega',type:'standout',title:'Frühes Führungstor in Waterford',detail:'Erzielt in der 12. Minute das 1:0 beim 3:0-Auswärtssieg.'},
    {id:'2041-10-29-ben-barry-waterford-goal',date:'2041-10-29',player:'Ben Barry',type:'standout',title:'Barry trifft vor der Pause',detail:'Erhöht in der Nachspielzeit der ersten Halbzeit auf 2:0.'},
    {id:'2041-10-29-justin-ramsey-waterford-goal',date:'2041-10-29',player:'Justin Ramsey',type:'standout',title:'Ramsey macht den Deckel drauf',detail:'Erzielt in der 68. Minute den Treffer zum 3:0.'},
    {id:'2041-10-29-giacomo-papini-thigh-strain',date:'2041-10-29',player:'Giacomo Papini',type:'injury',title:'Erneuter Rückschlag für Papini',detail:'Zerrung der Oberschenkelvorderseite. Physio: etwa drei Wochen Ausfall; Injektion würde Derry City ermöglichen, danach aber voraussichtlich vier bis fünf Wochen Pause bedeuten. Entscheidung im Screenshot noch offen.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-10-29-waterford-finn-harps-spielbericht',type:'Spielbericht',date:'2041-10-29',competition:'Premier Division',fixtureDate:'29.10.2041',
    home:'Waterford',away:'Finn Harps',score:'0:3',location:'Regional Sports Centre · Waterford · 5.070 Zuschauer',
    headline:'Drei Tore, drei Punkte, ein bitterer Papini-Rückschlag',
    subheadline:'Escárcega, Ben Barry und Ramsey treffen beim souveränen 3:0 in Waterford. Giacomo Papini verletzt sich kurz nach seinem Comeback erneut.',
    label:'PREMIER DIVISION · WATERFORD 0:3 FINN HARPS',
    heroStat:{label:'Weiter ungeschlagen',value:'98 Punkte',note:'34 Spiele · 32 Siege · 2 Remis · 106:13 Tore'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Finn Harps setzt die ungeschlagene Ligasaison fort. Nach dem knappen 1:0 bei St Patrick’s folgt in Waterford wieder ein klareres Ergebnis. Escárcega eröffnet früh, Barry trifft unmittelbar vor der Pause und Ramsey macht im zweiten Durchgang alles klar.',
    sections:[
      {title:'Escárcega braucht zwölf Minuten',text:'Der mexikanische Stürmer bringt Finn Harps in der 12. Minute in Führung und setzt damit seinen starken Herbst fort.'},
      {title:'Barry trifft zum perfekten Zeitpunkt',text:'Ben Barry erhöht in der zweiten Minute der Nachspielzeit der ersten Hälfte auf 2:0. Damit geht Finn Harps mit einer komfortablen Führung in die Kabine.'},
      {title:'Ramsey entscheidet das Spiel',text:'Justin Ramsey erzielt in der 68. Minute das 3:0. Waterford findet danach keinen Weg mehr zurück.'},
      {title:'Die Zahlen bestätigen den Sieg',text:'20:6 Schüsse, 7:3 aufs Tor und 2,61:0,95 xG zeigen ein klares Chancenplus. Finn Harps kontrolliert 64 Prozent Ballbesitz und bringt 528 Pässe an.'},
      {title:'Papini verletzt sich erneut',text:'Nur zwei Tage nach seinen Comeback-Minuten bei St Patrick’s trifft es Giacomo Papini erneut. Diagnose: Zerrung der Oberschenkelvorderseite. Der medizinische Bericht nennt drei Wochen bei Physio oder die Möglichkeit einer Injektion für das Derry-Spiel mit anschließend vier bis fünf Wochen Ausfall.'},
      {title:'Die perfekte Liga-Niederlagenbilanz bleibt stehen',text:'Nach 34 Spielen hat Finn Harps weiterhin kein Ligaspiel verloren. 32 Siege und zwei Remis ergeben 98 Punkte bei 106:13 Toren.'}
    ],
    verdictHeading:'Souverän gewonnen, Papini aber wieder im Behandlungsraum',
    verdict:'Sportlich ist das ein sauberer Auswärtssieg ohne große Dramatik. Die größere Geschichte liegt neben dem Ergebnis: Papini war gerade erst zurück und fällt nun mit einer neuen Muskelverletzung wieder aus. Mit Blick auf die bereits gesicherte Meisterschaft spricht wenig dafür, für Derry City ein längeres Risiko einzugehen.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-29-waterford-finn-harps',date:'2041-10-29',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · 34. SPIELTAG',
    title:'3:0 in Waterford, aber Papini verletzt sich erneut',
    summary:'Escárcega, Ben Barry und Ramsey treffen. Finn Harps bleibt ungeschlagen und steht bei 98 Punkten, Papini erleidet eine Oberschenkelzerrung.',
    href:'presse.html?id=2041-10-29-waterford-finn-harps-spielbericht',
    entities:['finn-harps','waterford','emerson-escarcega','ben-barry','justin-ramsey','giacomo-papini','season-2041']
  });
})();