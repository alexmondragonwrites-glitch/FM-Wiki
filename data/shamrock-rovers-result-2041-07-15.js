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

  const fixtureId='2041-07-15-finn-harps-shamrock-rovers-premier-division';
  const reportId='2041-07-15-shamrock-rovers-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-07-15',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:5},
    away:{id:'shamrock-rovers',name:'Shamrock Rovers',short:'SHA',score:1},
    score:'5:1',homeGoals:5,awayGoals:1,halfTime:'3:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Windig · 28 °C',referee:'Robert Hennessy',
    headline:'Sehr gesundes 5:1: Maisto dirigiert Finn Harps gegen Shamrock Rovers',
    verdict:'Finn Harps lässt Shamrock Rovers kaum Luft: 24:1 Schüsse, 75 Prozent Ballbesitz und 543 angekommene Pässe. Romano Maisto krönt die totale Kontrolle mit einem Tor, zwei Vorlagen und einer 9,3.',
    events:[
      {minute:5,type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'1:0'},
      {minute:30,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'2:0 · Elfmeter'},
      {minute:38,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'3:0'},
      {minute:59,type:'goal',team:'Finn Harps',player:'Fionn Gavin',text:'4:0'},
      {minute:75,type:'goal',team:'Shamrock Rovers',player:'Tom Hayes',text:'4:1'},
      {minute:78,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'5:1'}
    ],
    stats:[
      {label:'Schüsse',home:24,away:1,kind:'number'},
      {label:'Schüsse aufs Tor',home:7,away:1,kind:'number'},
      {label:'xG',home:4.06,away:null,kind:'decimal'},
      {label:'Großchancen',home:3,away:null,kind:'number'},
      {label:'Ballbesitz',home:75,away:25,kind:'percent'},
      {label:'Ecken',home:11,away:null,kind:'number'},
      {label:'Fouls',home:7,away:29,kind:'number'},
      {label:'Angekommene Pässe',home:543,away:185,kind:'number',homeDetail:'88 % · 543/618'},
      {label:'Gelbe Karten',home:0,away:3,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Durchschnittliche Laufleistung',home:12.1,away:11.5,kind:'decimal'}
    ],
    leagueAfterMatch:{position:1,played:21,wins:19,draws:2,losses:0,goalsFor:62,goalsAgainst:5,goalDifference:57,points:59},
    standout:{player:'Romano Maisto',rating:9.3,goals:1,assists:2,shots:3,shotAccuracy:'33 %',passesCompleted:64,passAccuracy:'73 %'},
    analysis:{
      summary:'Drei Tage nach dem 2:1 bei Bohemian zeigt Finn Harps wieder die volle nationale Wucht. Shamrock Rovers wird über fast die gesamte Partie tief eingeschnürt und kommt insgesamt nur zu einem einzigen Abschluss.',
      chanceCreation:'24 Abschlüsse bei nur einem gegnerischen Versuch und 4,06 xG für Finn Harps beschreiben ein Spiel, das praktisch permanent in Richtung Shamrock-Tor läuft.',
      possession:'75 Prozent Ballbesitz und 543 angekommene Pässe geben dem 5:1 seine eigentliche Dimension. Die Harps kontrollieren nicht nur die Chancen, sondern auch Tempo und Feldposition.',
      standout:'Romano Maisto ist der auffälligste Spieler des Abends. Er bereitet zwei Treffer vor, erzielt in der 78. Minute selbst das 5:1 und beendet die Partie mit einer 9,3.',
      supportingCast:'Justin Ramsey trifft doppelt, darunter einmal vom Elfmeterpunkt. Cormac O’Kane eröffnet früh, Fionn Gavin erhöht nach der Pause.',
      nuance:'Der Gegentreffer von Tom Hayes in der 75. Minute ändert nichts am Charakter des Spiels. Shamrock erzielt mit seinem einzigen Abschluss das 4:1, drei Minuten später stellt Maisto den Vier-Tore-Abstand wieder her.'
    },
    sources:['FM-Spielübersicht Finn Harps – Shamrock Rovers · 15.07.2041','Finn-Harps-Spielerstatistiken · 15.07.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-15';
    season.latestHeadline='Premier Division: Finn Harps zerlegt Shamrock Rovers mit 5:1, Romano Maisto glänzt mit 9,3.';
    season.league={...(season.league||{}),position:1,played:21,wins:19,draws:2,losses:0,goalsFor:62,goalsAgainst:5,goalDifference:57,points:59,latestResult:'15.07.2041 · Finn Harps 5:1 Shamrock Rovers'};
    season.changes=season.changes||{notes:[]};
    const note='15.07.2041: 5:1 gegen Shamrock Rovers. Maisto liefert ein Tor und zwei Vorlagen bei einer 9,3; Ramsey trifft doppelt. Nach 21 Ligaspielen stehen die Harps bei 19 Siegen, 2 Remis und 59 Punkten.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  upsert(window.FM_PLAYER_UPDATES,{id:'2041-07-15-romano-maisto-shamrock',date:'2041-07-15',player:'Romano Maisto',type:'standout',title:'Überragend gegen Shamrock Rovers',detail:'Ein Tor, zwei Vorlagen und Note 9,3 beim 5:1. Maisto ist der prägende Offensivspieler der Partie.'});
  upsert(window.FM_PLAYER_UPDATES,{id:'2041-07-15-justin-ramsey-shamrock',date:'2041-07-15',player:'Justin Ramsey',type:'brace',title:'Doppelpack gegen Shamrock',detail:'Trifft in der 30. Minute per Elfmeter und in der 38. Minute erneut. Note 8,5 beim 5:1.'});
  upsert(window.FM_PLAYER_UPDATES,{id:'2041-07-15-cormac-okane-shamrock',date:'2041-07-15',player:"Cormac O'Kane",type:'goal',title:'Frühe Führung gegen Shamrock',detail:'Eröffnet das 5:1 bereits in der 5. Minute.'});
  upsert(window.FM_PLAYER_UPDATES,{id:'2041-07-15-fionn-gavin-shamrock',date:'2041-07-15',player:'Fionn Gavin',type:'goal',title:'Treffer zum 4:0',detail:'Erzielt in der 59. Minute das vierte Tor gegen Shamrock Rovers.'});

  const report={
    id:reportId,type:'Spielbericht',date:'2041-07-15',competition:'Premier Division',fixtureDate:'15.07.2041',
    home:'Finn Harps',away:'Shamrock Rovers',score:'5:1',location:'Donegal Stadium · Stranorlar · 12.800 Zuschauer',
    headline:'Maisto dirigiert, Ramsey trifft doppelt: Finn Harps zerlegt Shamrock 5:1',
    subheadline:'24:1 Schüsse, 75 Prozent Ballbesitz, 543 angekommene Pässe. Romano Maisto setzt mit einem Tor, zwei Assists und Note 9,3 das Ausrufezeichen unter einen Abend völliger Kontrolle.',
    label:'PREMIER DIVISION · FINN HARPS 5:1 SHAMROCK ROVERS',
    heroStat:{label:'Schussverhältnis',value:'24:1',note:'7:1 aufs Tor · 75 % Ballbesitz · 4,06 xG für Finn Harps'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Finn Harps braucht gegen Shamrock Rovers nur fünf Minuten, um die Richtung festzulegen. Cormac O’Kane eröffnet, Justin Ramsey legt vor der Pause zwei Treffer nach. Nach dem Seitenwechsel erhöht Fionn Gavin, Shamrock kommt mit seinem einzigen Abschluss zum Ehrentreffer und drei Minuten später beendet Romano Maisto den Abend standesgemäß mit dem 5:1.',
    sections:[
      {title:'Nach 38 Minuten ist die Partie praktisch entschieden',text:'Cormac O’Kane trifft bereits in der 5. Minute. Justin Ramsey verwandelt in der 30. Minute einen Elfmeter und erzielt acht Minuten später auch das 3:0. Zur Pause führt Finn Harps komfortabel und hat Shamrock fast vollständig vom eigenen Tor ferngehalten.'},
      {title:'Maisto zieht die Fäden',text:'Romano Maisto ist überall im letzten Drittel beteiligt. Zwei Vorlagen und sein eigener Treffer zum 5:1 ergeben zusammen mit Note 9,3 die herausragende Einzelperformance des Spiels.'},
      {title:'24:1 Schüsse sind die eigentliche Geschichte',text:'Shamrock Rovers kommt über 90 Minuten zu nur einem einzigen Abschluss, der durch Tom Hayes sogar im Tor landet. Finn Harps produziert dagegen 24 Schüsse, sieben davon aufs Tor, und erreicht 4,06 xG.'},
      {title:'75 Prozent Ballbesitz und 543 angekommene Pässe',text:'Die Harps kontrollieren nicht nur die Strafräume, sondern den gesamten Spielrhythmus. 75 Prozent Ballbesitz und 543 angekommene Pässe stehen 25 Prozent und 185 Pässen der Gäste gegenüber.'},
      {title:'19 Siege aus 21 Ligaspielen',text:'Mit dem 5:1 verbessert Finn Harps die Bilanz auf 19 Siege, zwei Remis und weiterhin keine Niederlage. Das Torverhältnis steht bei 62:5, der Punktestand bei 59.'}
    ],
    strengthsTitle:'WARUM DIESES 5:1 SO DEUTLICH WAR',strengthsHeading:'Kontrolle vom ersten bis zum letzten Drittel',
    strengths:['24:1 Schüsse','75 % Ballbesitz','4,06 xG','543 angekommene Pässe','Maisto: 1 Tor + 2 Assists + 9,3','Ramsey mit Doppelpack'],
    vulnerabilitiesTitle:'DER EINE SCHÖNHEITSFEHLER',vulnerabilitiesHeading:'Ein Schuss, ein Gegentor',
    vulnerabilities:['Shamrock erzielt aus seinem einzigen Abschluss das 4:1','Nur sieben der 24 Abschlüsse kommen aufs Tor','Der Gegentreffer verhindert den nächsten Liga-Clean-Sheet'],
    verdictHeading:'Ein sehr gesundes 5:1',
    verdict:'Das Ergebnis sieht deutlich aus, die Spieldaten sind noch deutlicher. Finn Harps lässt einen traditionellen irischen Rivalen praktisch nicht am Spiel teilnehmen und erreicht nach 21 Ligapartien 59 Punkte bei 62:5 Toren. Im Mittelpunkt steht Romano Maisto, der diesen Abend nicht nur begleitet, sondern gestaltet.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 15. Juli 2041.',
    sources:['FM-Spielübersicht Finn Harps – Shamrock Rovers · 15.07.2041','Finn-Harps-Spielerstatistiken · 15.07.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-07-15-shamrock-rovers-liga',date:'2041-07-15',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · FINN HARPS 5:1 SHAMROCK ROVERS',title:'Maisto dirigiert ein sehr gesundes 5:1',
    summary:'Finn Harps schlägt Shamrock Rovers 5:1 und erlaubt dem Gegner nur einen einzigen Abschluss. Romano Maisto überragt mit einem Tor, zwei Vorlagen und Note 9,3; Justin Ramsey trifft doppelt.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','shamrock-rovers','romano-maisto','justin-ramsey','cormac-okane','fionn-gavin']
  });
})();