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

  const finalTable=[
    {position:1,team:'Finn Harps',played:36,wins:34,draws:2,losses:0,goalsFor:114,goalsAgainst:15,goalDifference:99,points:104},
    {position:2,team:"St Patrick's Athletic",played:36,wins:21,draws:6,losses:9,goalsFor:61,goalsAgainst:35,goalDifference:26,points:69},
    {position:3,team:'Derry City',played:36,wins:19,draws:7,losses:10,goalsFor:63,goalsAgainst:44,goalDifference:19,points:64},
    {position:4,team:'Shamrock Rovers',played:36,wins:19,draws:1,losses:16,goalsFor:70,goalsAgainst:75,goalDifference:-5,points:58},
    {position:5,team:'Waterford',played:36,wins:17,draws:5,losses:14,goalsFor:54,goalsAgainst:50,goalDifference:4,points:56},
    {position:6,team:'Sligo Rovers',played:36,wins:13,draws:5,losses:18,goalsFor:48,goalsAgainst:61,goalDifference:-13,points:44},
    {position:7,team:'Bohemian',played:36,wins:10,draws:6,losses:20,goalsFor:46,goalsAgainst:67,goalDifference:-21,points:36},
    {position:8,team:'Cork City',played:36,wins:9,draws:7,losses:20,goalsFor:35,goalsAgainst:60,goalDifference:-25,points:34},
    {position:9,team:'Athlone Town',played:36,wins:6,draws:8,losses:22,goalsFor:47,goalsAgainst:81,goalDifference:-34,points:26},
    {position:10,team:'Shelbourne',played:36,wins:5,draws:7,losses:24,goalsFor:44,goalsAgainst:94,goalDifference:-50,points:22}
  ];

  const match={
    id:'2041-11-02-finn-harps-derry-city-premier-division',date:'2041-11-02',season:2041,competition:'Premier Division',stage:'Liga · 36. Spieltag · Saisonfinale',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:5},
    away:{id:'derry-city',name:'Derry City',short:'DER',score:0},
    score:'5:0',homeGoals:5,awayGoals:0,halfTime:'3:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Nieselregen · 16 °C',referee:'Stephen Lawless',
    headline:'Fünf Tore zum Abschluss: Finn Harps beendet die Liga ungeschlagen mit 104 Punkten',
    verdict:'Im letzten Ligaspiel der Saison lässt Finn Harps Derry City keine Chance. Roberts, Ramsey, Barry mit Doppelpack und Gavin treffen beim 5:0. Damit endet die Premier-Division-Saison nach 36 Spielen mit 34 Siegen, zwei Remis, keiner Niederlage, 114:15 Toren und 104 Punkten.',
    scorers:[
      {player:'Jake Roberts',team:'Finn Harps',goals:1,minutes:[2]},
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[6]},
      {player:'Ben Barry',team:'Finn Harps',goals:2,minutes:[24,73]},
      {player:'Fionn Gavin',team:'Finn Harps',goals:1,minutes:[58]}
    ],
    events:[
      {minute:2,type:'goal',team:'Finn Harps',player:'Jake Roberts',text:'1:0'},
      {minute:6,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'2:0'},
      {minute:24,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'3:0'},
      {minute:58,type:'goal',team:'Finn Harps',player:'Fionn Gavin',text:'4:0'},
      {minute:60,type:'yellow',team:'Derry City',player:'Ashley Davies',text:'Gelbe Karte'},
      {minute:73,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'5:0'}
    ],
    stats:[
      {label:'Schüsse',home:14,away:3,kind:'number'},
      {label:'Schüsse aufs Tor',home:7,away:2,kind:'number'},
      {label:'xG',home:1.86,away:0.25,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:5,away:1,kind:'number'},
      {label:'Großchancen',home:2,away:0,kind:'number'},
      {label:'Ballbesitz',home:74,away:26,kind:'percent'},
      {label:'Ecken',home:5,away:1,kind:'number'},
      {label:'Fouls',home:12,away:28,kind:'number'},
      {label:'Angekommene Pässe',home:607,away:209,kind:'number',homeDetail:'89 % · 607/683',awayDetail:'75 % · 209/279'},
      {label:'Gewonnene Zweikämpfe',home:79,away:69,kind:'percent',homeDetail:'15/19',awayDetail:'22/32'},
      {label:'Gewonnene Kopfbälle',home:58,away:41,kind:'percent',homeDetail:'29/50',awayDetail:'21/51'},
      {label:'Gelbe Karten',home:0,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:7.46,away:6.16,kind:'decimal'},
      {label:'Intensive Sprints',home:85,away:88,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:36,wins:34,draws:2,losses:0,goalsFor:114,goalsAgainst:15,goalDifference:99,points:104,champion:true,unbeaten:true,seasonComplete:true},
    finalTable,
    standout:{player:'Ben Barry',team:'Finn Harps',rating:9.5,goals:2,note:'Doppelpack beim 5:0-Saisonabschluss gegen Derry City.'},
    keyPerformers:[
      {player:'Ben Barry',rating:9.5,goals:2,note:'Trifft in der 24. und 73. Minute.'},
      {player:'Fionn Gavin',rating:7.8,goals:1,note:'Erzielt in der 58. Minute das 4:0.'},
      {player:'Justin Ramsey',rating:7.8,goals:1,note:'Trifft bereits in der 6. Minute zum 2:0.'},
      {player:'Jake Roberts',rating:7.0,goals:1,note:'Eröffnet das Saisonfinale schon in der 2. Minute.'}
    ],
    milestones:[
      {player:'Gustavo da Silva',text:'100. Ligaspiel seiner Karriere.'},
      {player:'Chadi Riad',team:'Derry City',text:'25. Ligaspiel für Derry City.'}
    ],
    analysis:{
      fastStart:'Finn Harps entscheidet das Saisonfinale praktisch in der Anfangsphase: Roberts trifft in Minute 2, Ramsey in Minute 6 und Barry in Minute 24 zum 3:0-Pausenstand.',
      control:'14:3 Schüsse, 7:2 aufs Tor, 74 Prozent Ballbesitz und 607 angekommene Pässe zeigen erneut die klare Spielkontrolle.',
      secondHalf:'Fionn Gavin erhöht in Minute 58, Ben Barry vollendet seinen Doppelpack in Minute 73 zum 5:0.',
      unbeatenSeason:'Die komplette Premier-Division-Saison endet ohne Niederlage. Finn Harps holt aus 36 Spielen 34 Siege und zwei Remis.',
      historicNumbers:'104 Punkte, 114 erzielte Tore, nur 15 Gegentore und eine Tordifferenz von +99 bilden die Abschlussbilanz.',
      podium:'St Patrick’s Athletic beendet die Saison mit 69 Punkten als Vizemeister vor Derry City mit 64 Punkten.',
      domesticSeasonComplete:'Mit diesem Spiel ist die irische Saison der Finn Harps 2041 abgeschlossen. Die internationalen Aufgaben in der Champions League laufen weiter.'
    },
    sources:['FM-Spielübersicht Finn Harps – Derry City · 02.11.2041','Finn-Harps-Spielerstatistiken · 02.11.2041','Abschlusstabelle Premier Division 2041']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-11-02';
    season.latestHeadline='Premier Division beendet: Finn Harps schlägt Derry City 5:0 und schließt die Liga mit 104 Punkten ungeschlagen ab.';
    season.domesticSeasonComplete=true;
    season.league={
      ...(season.league||{}),position:1,played:36,wins:34,draws:2,losses:0,goalsFor:114,goalsAgainst:15,goalDifference:99,points:104,
      latestResult:'02.11.2041 · Finn Harps 5:0 Derry City',champion:true,unbeaten:true,seasonComplete:true,titleClinchedDate:'2041-08-30',
      runnerUp:"St Patrick's Athletic",runnerUpPoints:69,third:'Derry City',thirdPoints:64,finalTable
    };
    season.changes=season.changes||{notes:[]};
    const note='02.11.2041: Die Premier-Division-Saison endet mit einem 5:0 gegen Derry City. Jake Roberts, Justin Ramsey, Ben Barry (2) und Fionn Gavin treffen. Abschlussbilanz: 36 Spiele, 34 Siege, 2 Remis, 0 Niederlagen, 114:15 Tore, +99 Tordifferenz und 104 Punkte. St Patrick’s Athletic wird mit 69 Punkten Vizemeister.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-11-02-ben-barry-derry-double',date:'2041-11-02',player:'Ben Barry',type:'standout',title:'Doppelpack zum Saisonabschluss',detail:'Trifft beim 5:0 gegen Derry City in der 24. und 73. Minute und erhält die Note 9,5.'},
    {id:'2041-11-02-jake-roberts-derry-opener',date:'2041-11-02',player:'Jake Roberts',type:'standout',title:'Blitzstart im Saisonfinale',detail:'Erzielt bereits in der 2. Minute das 1:0 gegen Derry City.'},
    {id:'2041-11-02-justin-ramsey-derry-goal',date:'2041-11-02',player:'Justin Ramsey',type:'standout',title:'Ramsey legt früh nach',detail:'Erhöht in der 6. Minute auf 2:0.'},
    {id:'2041-11-02-fionn-gavin-derry-goal',date:'2041-11-02',player:'Fionn Gavin',type:'standout',title:'Gavin trifft erneut gegen Derry',detail:'Erzielt in der 58. Minute das 4:0 im letzten Ligaspiel.'},
    {id:'2041-11-02-gustavo-da-silva-100-league',date:'2041-11-02',player:'Gustavo da Silva',type:'milestone',title:'100. Ligaspiel',detail:'Erreicht beim 5:0 gegen Derry City sein 100. Ligaspiel der Karriere.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-11-02-finn-harps-derry-city-saisonfinale',type:'Saisonabschluss',date:'2041-11-02',competition:'Premier Division',fixtureDate:'02.11.2041',
    home:'Finn Harps',away:'Derry City',score:'5:0',location:'Donegal Stadium · Stranorlar · 12.800 Zuschauer',
    headline:'104 Punkte und keine Niederlage: Harps beendet die irische Saison mit 5:0',
    subheadline:'Roberts und Ramsey treffen in den ersten sechs Minuten, Ben Barry schnürt einen Doppelpack. Finn Harps beendet die Premier Division mit 34 Siegen, zwei Remis und 114:15 Toren.',
    label:'PREMIER DIVISION · SAISONFINALE · FINN HARPS 5:0 DERRY CITY',
    heroStat:{label:'Abschlussbilanz 2041',value:'34–2–0',note:'104 Punkte · 114:15 Tore · +99 Tordifferenz'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Die Meisterschaft war längst entschieden, aber Finn Harps setzt hinter die Premier-Division-Saison noch ein Ausrufezeichen. Gegen Derry City steht es nach 24 Minuten bereits 3:0. Am Ende sind es fünf Tore und eine komplette Ligasaison ohne Niederlage.',
    sections:[
      {title:'Sechs Minuten und Derry steht vor einem Berg',text:'Jake Roberts trifft in der 2. Minute, Justin Ramsey legt in Minute 6 nach. Ben Barry erhöht in der 24. Minute auf 3:0.'},
      {title:'Barry macht den Doppelpack voll',text:'Fionn Gavin erzielt nach der Pause das 4:0. Ben Barry trifft in der 73. Minute erneut und beendet das Spiel mit zwei Toren und der Note 9,5.'},
      {title:'Eine Saison ohne Niederlage',text:'Finn Harps beendet alle 36 Ligaspiele ohne Niederlage. 34 Siege und zwei Remis ergeben 104 Punkte.'},
      {title:'114 Tore, nur 15 Gegentore',text:'Die Tordifferenz von +99 fasst die Dominanz zusammen. Die Harps erzielen im Schnitt mehr als drei Tore pro Ligaspiel und kassieren weniger als ein halbes.'},
      {title:'Pats wird Vizemeister',text:'St Patrick’s Athletic beendet die Saison mit 69 Punkten auf Rang zwei. Derry City bleibt nach der zweiten Niederlage gegen Finn Harps innerhalb weniger Tage bei 64 Punkten und wird Dritter.'},
      {title:'Irland macht Feierabend, Europa noch nicht',text:'Die nationale Saison ist für Finn Harps beendet. Der Fokus kann nun vollständig auf die verbleibenden Champions-League-Spiele gelegt werden.'}
    ],
    verdictHeading:'Eine Meisterschaft ohne Fußnote',
    verdict:'Der Titel war bereits früh gesichert, doch die Mannschaft lässt bis zum letzten Spieltag nicht nach. 104 Punkte und keine Niederlage machen aus dem Meistertitel eine komplette Dominanzsaison. Das 5:0 gegen Derry ist weniger ein Schlusspfiff als ein Ausrufezeichen.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-11-02-premier-division-saisonabschluss',date:'2041-11-02',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · SAISONABSCHLUSS 2041',
    title:'Ungeschlagen: Finn Harps beendet die Liga mit 104 Punkten',
    summary:'5:0 gegen Derry City im letzten Spiel. 36 Spiele, 34 Siege, zwei Remis, 114:15 Tore und keine einzige Niederlage.',
    href:'presse.html?id=2041-11-02-finn-harps-derry-city-saisonfinale',
    entities:['finn-harps','derry-city','ben-barry','jake-roberts','justin-ramsey','fionn-gavin','season-2041']
  });
})();