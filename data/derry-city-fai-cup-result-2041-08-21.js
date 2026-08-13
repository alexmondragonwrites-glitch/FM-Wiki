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

  const fixtureId='2041-08-21-derry-city-finn-harps-fai-cup';
  const reportId='2041-08-21-derry-city-fai-cup-spielbericht';

  const match={
    id:fixtureId,date:'2041-08-21',season:2041,competition:'Sports Direct FAI Cup',stage:'2. Runde',
    home:{id:'derry-city',name:'Derry City',short:'DER',score:2},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    score:'2:1',homeGoals:2,awayGoals:1,halfTime:'1:1',
    venue:'Ryan McBride Brandywell',location:'Derry, Nordirland',attendance:7381,awayFans:369,referee:'Robert Harvey',
    headline:'Nach 46 Pokalsiegen ist Schluss: Derry City wirft Finn Harps aus dem FAI Cup',
    verdict:'Derry City beendet die jahrelange Pokalherrschaft der Harps. Finn Harps hat mehr Ballbesitz, mehr Abschlüsse und das höhere xG, doch Chadi Riad und Kavanagh Hamici nutzen Derrys Chancen effizienter. Justin Ramsey gleicht kurz vor der Pause aus, der zweite Harps-Treffer fällt jedoch nicht.',
    scorers:[
      {player:'Chadi Riad',team:'Derry City',goals:1,minutes:[7]},
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:['45+3']},
      {player:'Kavanagh Hamici',team:'Derry City',goals:1,minutes:[68]}
    ],
    events:[
      {minute:7,type:'goal',team:'Derry City',player:'Chadi Riad',text:'1:0'},
      {minute:'45+3',type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'1:1'},
      {minute:68,type:'goal',team:'Derry City',player:'Kavanagh Hamici',text:'2:1'},
      {minute:89,type:'yellow',team:'Finn Harps',player:'Callum Brennan',text:'Gelbe Karte'},
      {minute:'90+3',type:'yellow',team:'Finn Harps',player:'Giacomo Papini',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:8,away:10,kind:'number'},
      {label:'Schüsse aufs Tor',home:3,away:4,kind:'number'},
      {label:'xG',home:0.60,away:1.60,kind:'decimal'},
      {label:'Großchancen',home:3,away:5,kind:'number'},
      {label:'Ballbesitz',home:34,away:66,kind:'percent'},
      {label:'Ecken',home:3,away:3,kind:'number'},
      {label:'Fouls',home:10,away:15,kind:'number'},
      {label:'Angekommene Pässe',home:290,away:551,kind:'number',homeDetail:'80 % · 290/363',awayDetail:'88 % · 551/628'},
      {label:'Gewonnene Zweikämpfe',home:82,away:64,kind:'percent',homeDetail:'28/34',awayDetail:'16/25'},
      {label:'Gewonnene Kopfbälle',home:46,away:52,kind:'percent',homeDetail:'21/46',awayDetail:'23/44'},
      {label:'Gelbe Karten',home:0,away:2,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'}
    ],
    cupRecords:{
      streakEnded:true,
      previousConsecutiveWins:46,
      previousUnbeatenRun:46,
      competition:'Sports Direct FAI Cup',
      note:'Die Niederlage beendet die nach dem 9:0 gegen Athenry bei 46 Siegen und 46 ungeschlagenen Spielen stehenden FAI-Cup-Rekordserien von Finn Harps.'
    },
    standout:{player:'Justin Ramsey',team:'Finn Harps',rating:7.4,goals:1,note:'Ausgleich in der Nachspielzeit der ersten Hälfte.'},
    analysis:{
      summary:'Finn Harps kontrolliert mit 66 Prozent Ballbesitz und 551 angekommenen Pässen weite Teile der Partie, findet gegen ein effizientes Derry City aber zu selten den entscheidenden Abschluss.',
      firstHalf:'Chadi Riad bringt Derry bereits in der 7. Minute in Führung. Ramsey antwortet erst in der dritten Minute der Nachspielzeit und stellt zur Pause auf 1:1.',
      secondHalf:'Kavanagh Hamici trifft in der 68. Minute zum 2:1. Trotz fünf ausgewiesener Großchancen und 1,60 xG gelingt den Harps anschließend kein zweiter Treffer.',
      context:'Die Niederlage beendet eine außergewöhnliche FAI-Cup-Serie. Nach 46 Siegen und 46 ungeschlagenen Spielen in Folge scheidet Finn Harps bereits in der zweiten Runde aus. Damit wird es 2041 sicher einen anderen irischen Pokalsieger geben.',
      perspective:'Für Finn Harps ist das ein seltener nationaler Rückschlag, für den Wettbewerb ein Einschnitt: Die seit Jahren dominierende Mannschaft ist früh aus dem Titelrennen.'
    },
    sources:['FM-Spielübersicht Derry City – Finn Harps · 21.08.2041','Finn-Harps-Spielerstatistiken · 21.08.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-08-21';
    season.latestHeadline='FAI Cup: Derry City beendet mit einem 2:1 die 46 Spiele lange Pokalherrschaft von Finn Harps.';
    season.faiCup={
      ...(season.faiCup||{}),
      status:'Ausgeschieden',
      round:'2. Runde',
      latestResult:'21.08.2041 · Derry City 2:1 Finn Harps',
      eliminatedBy:'Derry City',
      records:{consecutiveWinsEndedAt:46,unbeatenEndedAt:46},
      note:'2041 wird es einen neuen FAI-Cup-Sieger geben.'
    };
    season.changes=season.changes||{notes:[]};
    const note='21.08.2041: 1:2 bei Derry City in der 2. Runde des FAI Cups. Ramsey trifft zum zwischenzeitlichen 1:1, doch Kavanagh Hamici entscheidet die Partie. Die FAI-Cup-Rekordserien der Harps enden nach 46 Siegen und 46 ungeschlagenen Spielen in Folge.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2041-08-21-justin-ramsey-derry-fai-cup',date:'2041-08-21',player:'Justin Ramsey',type:'goal',
    title:'Ramsey trifft beim Pokal-Aus',detail:'Gleicht bei Derry City in der 45.+3 Minute zum 1:1 aus. Finn Harps verliert dennoch 1:2 und scheidet aus dem FAI Cup aus.'
  });

  const report={
    id:reportId,type:'Spielbericht',date:'2041-08-21',competition:'Sports Direct FAI Cup',fixtureDate:'21.08.2041',
    home:'Derry City',away:'Finn Harps',score:'2:1',location:'Ryan McBride Brandywell · Derry · 7.381 Zuschauer',
    headline:'Nach 46 Spielen fällt die Pokalfestung: Derry beendet die Harps-Herrschaft',
    subheadline:'Finn Harps verliert in der zweiten FAI-Cup-Runde mit 1:2 bei Derry City. Ramsey gleicht vor der Pause aus, doch Hamici entscheidet das Spiel und beendet eine historische Rekordserie.',
    label:'SPORTS DIRECT FAI CUP · 2. RUNDE · DERRY CITY 2:1 FINN HARPS',
    heroStat:{label:'Rekordserie beendet',value:'46 Spiele',note:'46 Siege in Folge · 46 Spiele ungeschlagen · 2041 gibt es einen neuen Pokalsieger'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Es passiert etwas, das im irischen Pokal jahrelang fast undenkbar geworden ist: Finn Harps verliert. Derry City nutzt seine Chancen im Brandywell konsequent, übersteht eine lange Phase mit weniger Ballbesitz und beendet mit dem 2:1 eine 46 Spiele lange FAI-Cup-Dominanz.',
    sections:[
      {title:'Derry trifft früh, Ramsey spät',text:'Chadi Riad bringt Derry City bereits in der 7. Minute in Führung. Finn Harps braucht bis tief in die Nachspielzeit der ersten Hälfte, ehe Justin Ramsey in der 45.+3 Minute zum 1:1 trifft.'},
      {title:'Hamici schreibt Pokalgeschichte',text:'In der 68. Minute erzielt Kavanagh Hamici das 2:1. Finn Harps findet trotz 66 Prozent Ballbesitz, zehn Abschlüssen, fünf Großchancen und 1,60 xG keine Antwort mehr.'},
      {title:'Mehr Kontrolle, weniger Konsequenz',text:'Die Harps spielen 551 erfolgreiche Pässe und haben deutlich mehr Ballbesitz. Derry braucht dagegen nur acht Abschlüsse und 0,60 xG für zwei Tore. Genau diese Effizienz entscheidet den Abend.'},
      {title:'Die Serie endet bei 46',text:'Nach dem Erstrundensieg gegen Athenry hatte Finn Harps neue Wettbewerbsrekorde mit 46 FAI-Cup-Siegen und 46 ungeschlagenen Spielen in Folge aufgestellt. Beides endet nun in Derry.'},
      {title:'Irland bekommt einen neuen Pokalsieger',text:'Mit dem Ausscheiden des Seriensiegers ist sicher, dass der FAI Cup 2041 an einen anderen Klub geht. Für den irischen Fußball öffnet sich damit ein Titelrennen, das über Jahre von Finn Harps geprägt worden war.'}
    ],
    strengthsTitle:'WAS TROTZ DES AUSSCHEIDENS FUNKTIONIERT',strengthsHeading:'Die Harps kontrollieren große Teile des Spiels',
    strengths:['66 % Ballbesitz','10:8 Schüsse','4:3 Schüsse aufs Tor','1,60:0,60 xG','5:3 Großchancen','551 angekommene Pässe','Ramsey trifft erneut'],
    vulnerabilitiesTitle:'WARUM DERRY WEITERKOMMT',vulnerabilitiesHeading:'Effizienz schlägt Kontrolle',
    vulnerabilities:['Zwei Gegentore aus 0,60 xG','Nur ein Tor aus fünf Großchancen','Nach Hamicis 2:1 keine Antwort','Papini mit schwachem Abend','Zwei späte Gelbe Karten'],
    verdictHeading:'Eine historische Serie endet nicht mit einem Kollaps, sondern mit einem knappen Pokalabend',
    verdict:'Finn Harps ist nicht an die Wand gespielt worden. Genau das macht das Ergebnis so typisch für einen Pokal-K.o.: Die Harps haben mehr vom Ball und die besseren Chancen, Derry erzielt aber das entscheidende Tor. Nach 46 Siegen in Folge ist die nationale Pokalherrschaft damit vorerst beendet.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom FAI-Cup-Spiel am 21. August 2041.',
    sources:['FM-Spielübersicht Derry City – Finn Harps · 21.08.2041','Finn-Harps-Spielerstatistiken · 21.08.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-08-21-derry-fai-cup',date:'2041-08-21',season:2041,category:'FAI Cup',accent:'red',featured:true,
    eyebrow:'FAI CUP · 2. RUNDE · DERRY CITY 2:1 FINN HARPS',
    title:'Nach 46 Pokalsiegen ist Schluss: Derry City beendet die Harps-Serie',
    summary:'Finn Harps scheidet überraschend in der zweiten Runde aus. Ramsey gleicht vor der Pause aus, Hamici entscheidet das Spiel für Derry. Damit endet die FAI-Cup-Rekordserie bei 46 Siegen und 46 ungeschlagenen Spielen.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','derry-city','justin-ramsey','fai-cup']
  });
})();