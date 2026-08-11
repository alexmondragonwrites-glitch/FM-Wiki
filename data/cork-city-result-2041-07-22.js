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

  const fixtureId='2041-07-22-finn-harps-cork-city-premier-division';
  const reportId='2041-07-22-cork-city-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-07-22',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:5},
    away:{id:'cork-city',name:'Cork City',short:'COR',score:0},
    score:'5:0',homeGoals:5,awayGoals:0,halfTime:'5:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12644,awayFans:487,weather:'18 °C',referee:'Callum Patton',
    headline:'Eine Halbzeit reicht: Frame zerlegt Cork beim 5:0',
    verdict:'Finn Harps entscheidet das Ligaspiel gegen Cork City komplett vor der Pause. Fünf Tore in der ersten Hälfte, 25:1 Schüsse und 4,45:0,00 xG machen den Klassenunterschied sichtbar. Daryl Frame ist mit einem Tor, zwei Vorlagen und der perfekten 10,0 der Mann des Abends.',
    events:[
      {minute:4,type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'1:0'},
      {minute:8,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'2:0'},
      {minute:23,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'3:0'},
      {minute:37,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'4:0'},
      {minute:45,stoppage:2,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'5:0 · 45+2'}
    ],
    stats:[
      {label:'Schüsse',home:25,away:1,kind:'number'},
      {label:'Schüsse aufs Tor',home:12,away:1,kind:'number'},
      {label:'xG',home:4.45,away:0,kind:'decimal'},
      {label:'Großchancen',home:3,away:0,kind:'number'},
      {label:'Ballbesitz',home:75,away:25,kind:'percent'},
      {label:'Ecken',home:15,away:1,kind:'number'},
      {label:'Fouls',home:10,away:16,kind:'number'},
      {label:'Angekommene Pässe',home:591,away:199,kind:'number',homeDetail:'90 % · 591/657',awayDetail:'75 % · 199/267'},
      {label:'Gewonnene Zweikämpfe',home:88,away:69,kind:'percent',homeDetail:'15/17',awayDetail:'22/32'},
      {label:'Gewonnene Kopfbälle',home:54,away:43,kind:'percent',homeDetail:'30/56',awayDetail:'23/53'},
      {label:'Gelbe Karten',home:1,away:2,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Durchschnittsnote',home:7.58,away:6.28,kind:'decimal'},
      {label:'Intensive Sprints',home:82,away:80,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:22,wins:20,draws:2,losses:0,goalsFor:67,goalsAgainst:5,goalDifference:62,points:62},
    standout:{player:'Daryl Frame',rating:10.0,goals:1,assists:2,shots:6,shotAccuracy:'66 %',passesCompleted:37,passAccuracy:'86 %'},
    milestones:[
      {player:'Daryl Frame',text:'75. Profispiel'},
      {player:'Frankie Lindo',text:'300. Profispiel'}
    ],
    analysis:{
      summary:'Die Partie ist nach einer Halbzeit erledigt. Finn Harps trifft fünfmal vor der Pause und muss nach dem Seitenwechsel keinen weiteren Gang mehr einlegen.',
      firstHalf:'Cormac O’Kane eröffnet in der 4. Minute. Daryl Frame erhöht vier Minuten später, Papini trifft in der 23., Ramsey in der 37. und Maisto in der Nachspielzeit der ersten Hälfte zum 5:0.',
      secondHalf:'Nach dem Seitenwechsel fällt kein weiteres Tor. Die Harps verwalten den Vorsprung ohne Kontrollverlust; Cork bleibt über 90 Minuten bei nur einem Abschluss.',
      standout:'Daryl Frame feiert sein 75. Profispiel mit einer perfekten 10,0. Ein eigenes Tor und zwei Vorlagen machen ihn zum klaren Taktgeber des Kantersiegs.',
      dominance:'25:1 Schüsse, 12:1 aufs Tor, 4,45:0,00 xG, 75 Prozent Ballbesitz und 15:1 Ecken zeigen, dass das 5:0 nicht aus Effizienz allein entsteht.',
      leagueContext:'Nach 22 Ligaspielen steht Finn Harps bei 20 Siegen, zwei Remis und keiner Niederlage. 67:5 Tore und 62 Punkte unterstreichen die nationale Dominanz.'
    },
    sources:['FM-Spielübersicht Finn Harps – Cork City · 22.07.2041','Finn-Harps-Spielerstatistiken · 22.07.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-22';
    season.latestHeadline='Premier Division: Eine Halbzeit reicht beim 5:0 gegen Cork City – Daryl Frame liefert eine perfekte 10,0.';
    season.league={...(season.league||{}),position:1,played:22,wins:20,draws:2,losses:0,goalsFor:67,goalsAgainst:5,goalDifference:62,points:62,latestResult:'22.07.2041 · Finn Harps 5:0 Cork City'};
    season.changes=season.changes||{notes:[]};
    const note='22.07.2041: 5:0 gegen Cork City, alle fünf Tore fallen bereits vor der Pause. Daryl Frame feiert sein 75. Profispiel mit einem Tor, zwei Vorlagen und Note 10,0. Nach 22 Ligaspielen: 20 Siege, 2 Remis, 0 Niederlagen, 67:5 Tore und 62 Punkte.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-07-22-daryl-frame-cork-10',date:'2041-07-22',player:'Daryl Frame',type:'standout',title:'Perfekte 10,0 im 75. Profispiel',detail:'Ein Tor und zwei Vorlagen beim 5:0 gegen Cork City. Frame prägt die komplette erste Hälfte und erhält die perfekte Note 10,0.'},
    {id:'2041-07-22-cormac-okane-cork',date:'2041-07-22',player:"Cormac O'Kane",type:'goal',title:'Früher Auftakt gegen Cork',detail:'Eröffnet den 5:0-Sieg bereits in der 4. Minute.'},
    {id:'2041-07-22-giacomo-papini-cork',date:'2041-07-22',player:'Giacomo Papini',type:'goal',title:'Treffer zum 3:0',detail:'Trifft in der 23. Minute gegen Cork City.'},
    {id:'2041-07-22-justin-ramsey-cork',date:'2041-07-22',player:'Justin Ramsey',type:'goal',title:'Treffer zum 4:0',detail:'Erhöht in der 37. Minute auf 4:0.'},
    {id:'2041-07-22-romano-maisto-cork',date:'2041-07-22',player:'Romano Maisto',type:'goal',title:'Schlusspunkt noch vor der Pause',detail:'Erzielt in der 45.+2 Minute das 5:0 und damit bereits den Endstand.'},
    {id:'2041-07-22-frankie-lindo-300',date:'2041-07-22',player:'Frankie Lindo',type:'milestone',title:'300. Profispiel',detail:'Der Spielbildschirm vermerkt gegen Cork City Frankies 300. Einsatz als Profi.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-07-22',competition:'Premier Division',fixtureDate:'22.07.2041',
    home:'Finn Harps',away:'Cork City',score:'5:0',location:'Donegal Stadium · Stranorlar · 12.644 Zuschauer',
    headline:'Eine Halbzeit. Ein Frame. Cork City ist beim 5:0 schon zur Pause erledigt',
    subheadline:'Fünf Tore vor der Pause, 25:1 Schüsse und 4,45:0,00 xG. Daryl Frame feiert sein 75. Profispiel mit einem Tor, zwei Vorlagen und der perfekten 10,0.',
    label:'PREMIER DIVISION · FINN HARPS 5:0 CORK CITY',
    heroStat:{label:'Halbzeitstand',value:'5:0',note:'Endstand ebenfalls 5:0 · Frame: 1 Tor + 2 Vorlagen · Note 10,0'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Finn Harps braucht gegen Cork City exakt eine Halbzeit, um die Arbeit vollständig zu erledigen. O’Kane trifft nach vier Minuten, Frame nach acht, Papini nach 23, Ramsey nach 37 und Maisto in der 45.+2. Danach fällt kein Tor mehr, weil keines mehr nötig ist. Der Abend gehört Daryl Frame, der sein 75. Profispiel mit der perfekten 10,0 veredelt.',
    sections:[
      {title:'Fünf Tore, bevor Cork überhaupt Luft bekommt',text:'Cormac O’Kane eröffnet in der 4. Minute, Daryl Frame erhöht in der 8. Minute. Giacomo Papini macht nach 23 Minuten das 3:0, Justin Ramsey nach 37 Minuten das 4:0. Romano Maisto setzt in der 45.+2 Minute den Schlusspunkt unter eine erste Hälfte, die bereits das Endergebnis produziert.'},
      {title:'Frame macht aus seinem Jubiläum eine Machtdemonstration',text:'Daryl Frame absolviert sein 75. Spiel als Profi und liefert ausgerechnet dabei eine perfekte 10,0. Ein Treffer, zwei Vorlagen und permanente Präsenz im Zentrum machen ihn zum Spieler, der Corks Widerstand am deutlichsten zerlegt.'},
      {title:'Die zweite Hälfte wird zur kontrollierten Formalität',text:'Nach der Pause bleibt es beim 5:0. Das ist kein Einbruch, sondern Spielmanagement: Finn Harps hat das Resultat bereits hergestellt und lässt Cork trotzdem nicht zurück in die Partie.'},
      {title:'25:1 Schüsse und 4,45:0,00 xG',text:'Die Zahlen bestätigen das Spielbild. Finn Harps kommt auf 25 Abschlüsse, zwölf davon aufs Tor, drei Großchancen und 15 Ecken. Cork City schafft einen einzigen Schuss und erzeugt 0,00 xG.'},
      {title:'20 Siege aus 22 Ligaspielen',text:'Mit dem Erfolg steigt die Bilanz auf 20 Siege und zwei Remis ohne Niederlage. Das Torverhältnis steht bei 67:5, der Vorsprung an der Tabellenspitze wird mit 62 Punkten weiter zementiert.'}
    ],
    strengthsTitle:'WARUM EINE HALBZEIT GEREICHT HAT',strengthsHeading:'Maximale Wirkung vor der Pause',
    strengths:['5:0 bereits zur Halbzeit','25:1 Schüsse','12:1 aufs Tor','4,45:0,00 xG','75 % Ballbesitz','15:1 Ecken','Frame: 1 Tor + 2 Vorlagen + 10,0'],
    vulnerabilitiesTitle:'WAS NACH DER PAUSE PASSIERT',vulnerabilitiesHeading:'Kein sechstes Tor, aber auch kein Kontrollverlust',
    vulnerabilities:['In der zweiten Hälfte fällt kein weiterer Treffer','Die Partie wird nach dem 5:0 sichtbar verwaltet','Cork kommt insgesamt trotzdem nur zu einem Abschluss'],
    verdictHeading:'Eine Halbzeit reicht, wenn sie so aussieht',
    verdict:'Das 5:0 ist weniger wegen der Höhe bemerkenswert als wegen seiner Form. Finn Harps erledigt Cork City komplett in den ersten 45 Minuten und verwandelt die zweite Hälfte in Verwaltung. Im Zentrum steht Daryl Frame: 75. Profispiel, ein Tor, zwei Vorlagen, Note 10,0. Mehr Jubiläum geht kaum.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 22. Juli 2041.',
    sources:['FM-Spielübersicht Finn Harps – Cork City · 22.07.2041','Finn-Harps-Spielerstatistiken · 22.07.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-07-22-cork-city-liga',date:'2041-07-22',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · FINN HARPS 5:0 CORK CITY',title:'Eine Halbzeit und ein Frame reichen für Cork',
    summary:'Finn Harps führt schon zur Pause 5:0 und lässt es dabei. Daryl Frame feiert sein 75. Profispiel mit einem Tor, zwei Vorlagen und der perfekten 10,0; Cork kommt insgesamt nur zu einem Abschluss.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','cork-city','daryl-frame','cormac-okane','giacomo-papini','justin-ramsey','romano-maisto']
  });
})();