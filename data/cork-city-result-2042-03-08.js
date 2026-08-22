(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2042-03-08-finn-harps-cork-city-premier-division';
  const reportId='2042-03-08-finn-harps-cork-city-4-0-spielbericht';

  const match={
    id:fixtureId,date:'2042-03-08',season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    away:{id:'cork-city',name:'Cork City',short:'COR',score:0},
    score:'4:0',homeGoals:4,awayGoals:0,halfTime:'0:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12648,awayFans:488,weather:'Windig · feucht · 11 °C',referee:'Stephen Lawless',
    headline:'Rotation ohne Qualitätsverlust: Finn Harps schlägt Cork 4:0 und richtet den Blick auf Caen',
    verdict:'Drei Tage nach dem wilden 4:4 in Caen rotiert Finn Harps sichtbar und bleibt trotzdem dominant. Nach torloser erster Hälfte brechen Di Maio, Maisto, Barry und Walker Cork im zweiten Durchgang auseinander. 15:3 Schüsse, 8:1 aufs Tor, 1,99:0,31 xG und 72 Prozent Ballbesitz zeigen, dass auch die veränderte Elf das Spiel kontrolliert. Mit dem fünften Ligasieg im fünften Spiel und weiterhin ohne Gegentor kann der Fokus nun vollständig auf das Champions-League-Rückspiel gegen Caen gehen.',
    scorers:[
      {player:'Daniele Di Maio',team:'Finn Harps',goals:1,minutes:[58]},
      {player:'Romano Maisto',team:'Finn Harps',goals:1,minutes:[67]},
      {player:'Ben Barry',team:'Finn Harps',goals:1,minutes:[79]},
      {player:'Billy Walker',team:'Finn Harps',goals:1,minutes:['90+2']}
    ],
    events:[
      {minute:48,type:'yellow',team:'Cork City',player:'Dan Clark',text:'Gelbe Karte'},
      {minute:58,type:'goal',team:'Finn Harps',player:'Daniele Di Maio',text:'1:0'},
      {minute:67,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'2:0'},
      {minute:79,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'3:0'},
      {minute:'90+2',type:'goal',team:'Finn Harps',player:'Billy Walker',text:'4:0'}
    ],
    stats:[
      {label:'Schüsse',home:15,away:3,kind:'number'},
      {label:'Schüsse aufs Tor',home:8,away:1,kind:'number'},
      {label:'xG',home:1.99,away:0.31,kind:'decimal'},
      {label:'Großchancen',home:3,away:0,kind:'number'},
      {label:'Ballbesitz',home:72,away:28,kind:'percent'},
      {label:'Ecken',home:10,away:3,kind:'number'},
      {label:'Fouls',home:13,away:21,kind:'number'},
      {label:'Angekommene Pässe',home:541,away:209,kind:'number',homeDetail:'88 % · 541/616',awayDetail:'73 % · 209/280'},
      {label:'Mannschaftsnote',home:7.31,away:6.35,kind:'decimal'},
      {label:'Intensive Sprints',home:106,away:73,kind:'number'}
    ],
    rotation:{
      context:'Zwischen Hin- und Rückspiel des Champions-League-Achtelfinals gegen Caen',
      restedOrUnused:['Emerson Escárcega',"Cormac O'Kane",'Diego Fernández','Amir Mašić'],
      note:'Ryan Flannigan verteilt Belastung, ohne die Spielkontrolle zu verlieren. Mehrere Stammkräfte bleiben draußen oder werden geschont, während Spieler aus der zweiten Reihe die Tore liefern.'
    },
    leagueAfterMatch:{played:5,wins:5,draws:0,losses:0,goalsFor:17,goalsAgainst:0,goalDifference:17,points:15,position:1,consecutiveLeagueWinsAcrossSeasons:22},
    analysis:{
      firstHalf:'Cork hält das 0:0 bis zur Pause, obwohl Finn Harps bereits mehr Ball und Feldkontrolle besitzt. Die Rotation kostet zunächst etwas Durchschlagskraft, nicht aber die Kontrolle über die Partie.',
      breakthrough:'Di Maio bricht in der 58. Minute den Widerstand. Danach kippt das Spiel deutlich: Maisto trifft in Minute 67, Barry in Minute 79 und Walker setzt in 90+2 den Schlusspunkt.',
      depth:'Die vier Tore kommen von Di Maio, Maisto, Barry und Walker. Dass die veränderte Mannschaft ohne Treffer von Escárcega, O’Kane, Papini oder Muñoz viermal trifft, unterstreicht die Tiefe des Kaders.',
      caen:'Der größere Wert des Sieges liegt im Timing. Nach dem 4:4 in Frankreich kann Finn Harps Leistungsträger schonen, Rhythmus im Rest des Kaders halten und mit einem souveränen Erfolg in das Rückspiel gegen Caen gehen.',
      streak:'Der Spielbericht weist saisonübergreifend 22 Ligasiege in Serie aus. In der Premier-Division-Saison 2042 steht Finn Harps nach fünf Spielen bei fünf Siegen und 17:0 Toren.'
    },
    notes:[
      'Fünfter Sieg im fünften Ligaspiel 2042.',
      'Ligabilanz 2042: 15 Punkte und 17:0 Tore.',
      'Saisonübergreifend 22 Ligasiege in Serie.',
      'Vier verschiedene Torschützen trotz Rotation.',
      'Generalprobe vor dem Champions-League-Rückspiel gegen Caen gelungen.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Cork City · 08.03.2042','Finn-Harps-Spielerstatistiken · 08.03.2042','Planet Football Spielbericht · Finn Harps 4:0 Cork City']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const cork=window.FM_CLUBS.find(x=>x.id==='cork-city'||x.name==='Cork City'||x.name==='Cork City FC');
  if(cork){
    cork.meetings=cork.meetings||[];
    const meeting={date:'08.03.2042',competition:'Premier Division',venue:'A',result:'0:4'};
    const idx=cork.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)cork.meetings[idx]=meeting;else cork.meetings.unshift(meeting);
    cork.lastMeeting='08.03.2042 · Finn Harps 4:0 Cork City';
    cork.summary='Cork hält im Donegal Stadium eine Halbzeit lang das 0:0, verliert nach der Pause aber klar. Di Maio, Maisto, Barry und Walker treffen für eine rotierte Harps-Elf zum 4:0.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-03-08';
    season.latestHeadline='Premier Division: Rotierte Harps schlagen Cork 4:0. Fünf Siege aus fünf Spielen, 17:0 Tore und nun voller Fokus auf das Caen-Rückspiel.';
    season.league=season.league||{};
    season.league.current={played:5,wins:5,draws:0,losses:0,goalsFor:17,goalsAgainst:0,goalDifference:17,points:15,position:1};
    season.league.consecutiveWinsAcrossSeasons=22;
    season.nextFocus={competition:'UEFA Champions League',stage:'Achtelfinale · Rückspiel',opponent:'Caen',aggregate:'4:4',venue:'Donegal Stadium'};
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='08.03.2042: Mit sichtbarer Rotation schlägt Finn Harps Cork City 4:0. Di Maio, Maisto, Barry und Walker treffen; nach fünf Ligaspielen stehen 15 Punkte und 17:0 Tore. Als Nächstes wartet das Champions-League-Rückspiel gegen Caen bei 4:4 Gesamtstand.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-03-08-daniele-di-maio-cork-goal',date:'2042-03-08',player:'Daniele Di Maio',type:'goal',title:'Di Maio bricht Corks Widerstand',detail:'Köpft Finn Harps in der 58. Minute zum 1:0.'},
    {id:'2042-03-08-romano-maisto-cork-goal',date:'2042-03-08',player:'Romano Maisto',type:'goal',title:'Maisto erhöht gegen Cork',detail:'Trifft in der 67. Minute zum 2:0.'},
    {id:'2042-03-08-ben-barry-cork-goal',date:'2042-03-08',player:'Ben Barry',type:'standout',title:'Barry nutzt seine Chance in der Rotation',detail:'Erzielt in der 79. Minute das 3:0 und gehört mit Note 8,3 zu den auffälligsten Harps-Spielern.'},
    {id:'2042-03-08-billy-walker-cork-goal',date:'2042-03-08',player:'Billy Walker',type:'goal',title:'Walker setzt den Schlusspunkt',detail:'Trifft in 90+2 zum 4:0.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-03-08',competition:'Premier Division',fixtureDate:'08.03.2042',
    home:'Finn Harps',away:'Cork City',score:'4:0',location:'Donegal Stadium · Stranorlar · 12.648 Zuschauer',
    headline:'Rotation, vier Torschützen, null Gegentore: Harps sind bereit für Caen',
    subheadline:'Drei Tage nach dem 4:4 in Frankreich verteilt Ryan Flannigan die Belastung. Cork hält bis zur Pause stand, danach treffen Di Maio, Maisto, Barry und Walker. Die Harps gehen mit fünf Siegen, 17:0 Ligatoren und frischen Leistungsträgern in das Champions-League-Rückspiel.',
    heroStat:{label:'Ligastart 2042',value:'5 Spiele · 5 Siege · 17:0 Tore',note:'Saisonübergreifend 22 Ligasiege in Serie'},
    sections:[
      {title:'Rotation mit Plan',text:'Zwischen den beiden Caen-Spielen verändert Finn Harps die Belastungssteuerung deutlich. Escárcega, O’Kane, Fernández und Mašić bleiben ohne Einsatz, weitere Stammkräfte teilen sich die Minuten. Trotzdem kontrolliert die Mannschaft Cork mit 72 Prozent Ballbesitz und 541 angekommenen Pässen.'},
      {title:'Eine Halbzeit Geduld, dann vier Treffer',text:'Cork erreicht ein 0:0 zur Pause, doch Di Maio öffnet das Spiel in der 58. Minute. Maisto legt neun Minuten später nach. Ben Barry trifft zum 3:0, Billy Walker vollendet in der Nachspielzeit. Vier verschiedene Torschützen machen aus einem zähen Beginn einen klaren 4:0-Erfolg.'},
      {title:'Tiefe statt Abhängigkeit',text:'Gerade vor einem europäischen K.-o.-Spiel ist die Verteilung der Tore ein starkes Signal. Die Harps gewinnen ohne Scorer ihrer prominentesten Offensivkräfte und zeigen, dass der Kader auch hinter der ersten Elf genug Qualität besitzt, um nationale Spiele souverän zu entscheiden.'},
      {title:'Jetzt kommt Caen',text:'Das 4:0 ist vor allem die ideale Brücke zwischen zwei völlig unterschiedlichen Aufgaben. In Caen brauchte Finn Harps seine Stars für ein 4:4 auf Weltklasse-Niveau. Gegen Cork konnten mehrere von ihnen regenerieren. Im Donegal Stadium beginnt das Rückspiel bei 4:4 Gesamtstand nun praktisch wieder bei null.'}
    ],
    verdictHeading:'Mehr als ein Pflichtsieg',
    verdict:'Das Ergebnis ist standesgemäß, die Umstände machen es wertvoll. Finn Harps hält die perfekte Ligabilanz, schont zentrale Spieler und gibt gleichzeitig der zweiten Reihe Erfolgserlebnisse. Für das Caen-Rückspiel hätte die Vorbereitung kaum sauberer laufen können.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-03-08-finn-harps-cork-rotation',date:'2042-03-08',type:'Liga',importance:'normal',
    title:'Rotierte Harps schlagen Cork 4:0 und schalten auf Caen um',
    summary:'Di Maio, Maisto, Barry und Walker treffen. Finn Harps startet mit fünf Siegen und 17:0 Toren in die Liga; mehrere Leistungsträger bleiben vor dem Champions-League-Rückspiel geschont.',
    href:`presse.html?id=${reportId}`
  });
})();