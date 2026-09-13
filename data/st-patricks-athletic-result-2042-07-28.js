(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-28';
  const fixtureId='2042-07-28-st-patricks-athletic-finn-harps-premier-division';
  const reportId='2042-07-28-st-patricks-athletic-finn-harps-1-7-machtdemonstration';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'st-patricks-athletic',name:"St Patrick's Athletic",short:'STP',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:7},
    score:'1:7',homeGoals:1,awayGoals:7,halfTime:'0:4',
    venue:'Richmond Park',location:'Dublin, Irland',attendance:5400,awayFans:270,weather:'Heiter · 17 °C',referee:'Declan Toland',
    headline:'Machtdemonstration in Dublin: Finn Harps zerlegen St Patrick’s mit 7:1',
    verdict:'Drei Tage nach dem 4:1 in Derry schalten Finn Harps noch einen Gang höher. Romano Maisto trifft doppelt und spielt eine perfekte 10,0, Raúl erzielt sein erstes Ligator für den Klub, Ben Barry markiert sein 25. Ligator, Daryl Frame kommt von der Bank und trifft zweimal, Pol Muñoz setzt in der Nachspielzeit den Schlusspunkt. Mit 14:7 Schüssen, 10:3 Schüssen aufs Tor und 3,65:0,85 xG feiern die Harps den zwölften Ligasieg in Folge.',
    scorers:[
      {player:'Romano Maisto',team:'Finn Harps',goals:2,minutes:[9,20]},
      {player:'Raúl',team:'Finn Harps',goals:1,minutes:[13]},
      {player:'Ben Barry',team:'Finn Harps',goals:1,minutes:[26]},
      {player:'Karamoko Carbon',team:"St Patrick's Athletic",goals:1,minutes:[48]},
      {player:'Daryl Frame',team:'Finn Harps',goals:2,minutes:[59,73]},
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:[93],stoppageTime:true}
    ],
    events:[
      {minute:9,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'0:1'},
      {minute:13,type:'goal',team:'Finn Harps',player:'Raúl',text:'0:2'},
      {minute:20,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'0:3'},
      {minute:26,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'0:4'},
      {minute:48,type:'goal',team:"St Patrick's Athletic",player:'Karamoko Carbon',text:'1:4'},
      {minute:59,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'1:5'},
      {minute:73,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'1:6'},
      {minute:93,type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'1:7 · 90+3'}
    ],
    stats:[
      {label:'Schüsse',home:7,away:14,kind:'number'},
      {label:'Schüsse aufs Tor',home:3,away:10,kind:'number'},
      {label:'xG',home:0.85,away:3.65,kind:'decimal'},
      {label:'Ballbesitz',home:41,away:59,kind:'percent'},
      {label:'Ecken',home:3,away:6,kind:'number'},
      {label:'Fouls',home:10,away:9,kind:'number'},
      {label:'Passquote',home:86,away:89,kind:'percent'},
      {label:'Angekommene Pässe',home:'397/460',away:'578/646',kind:'text'},
      {label:'Gelbe Karten',home:3,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'}
    ],
    ratings:{
      'Evan Reilly':7.3,'Callum Brennan':7.0,'Mareks Istrankins':7.1,'Daniele Di Maio':6.9,'Raúl':7.8,
      "Jim O'Neill":6.9,'Justin Ramsey':8.2,"Cormac O'Kane":7.0,'Giacomo Papini':6.7,'Romano Maisto':10.0,
      'Ben Barry':7.8,'Diego Fernández':7.4,'Gustavo da Silva':7.0,'Alejandro López':6.9,'Daryl Frame':8.3,'Pol Muñoz':7.2
    },
    standout:{player:'Romano Maisto',team:'Finn Harps',rating:10.0,goals:2,assists:1,note:'Doppelpack in den ersten 20 Minuten, dazu eine Vorlage und die perfekte Note 10,0.'},
    otherStandouts:[
      {player:'Daryl Frame',rating:8.3,goals:2,note:'Kommt nach der Pause und schnürt innerhalb von 14 Minuten einen Doppelpack.'},
      {player:'Justin Ramsey',rating:8.2,assists:2,note:'Zwei Vorlagen und erneut enormer Einfluss aus dem Mittelfeld.'},
      {player:'Raúl',rating:7.8,goals:1,note:'Erstes Ligator für Finn Harps, per Kopf zum frühen 2:0.'},
      {player:'Ben Barry',rating:7.8,goals:1,note:'Trifft zum 4:0 und erreicht sein 25. Ligator der Karriere.'}
    ],
    leagueAfterMatch:{played:21,wins:19,draws:0,losses:2,goalsFor:71,goalsAgainst:9,goalDifference:62,points:57,position:1},
    form:{leagueWinningStreak:12,positionAfterMatch:1},
    milestones:[
      {player:'Raúl',achievement:'1. Ligator für Finn Harps'},
      {player:'Ben Barry',achievement:'25. Ligator seiner Karriere'},
      {player:'Ben Barry',achievement:'25. Ligator für Finn Harps'},
      {player:'Diego Fernández',achievement:'200. Profispiel'}
    ],
    analysis:{
      firstHalf:'Finn Harps entscheidet die Partie bereits in den ersten 26 Minuten. Maisto trifft zweimal, dazwischen köpft Raúl sein erstes Ligator für den Klub, Barry stellt noch vor der halben Stunde auf 4:0.',
      depth:'Die zweite Halbzeit unterstreicht erneut die außergewöhnliche Kaderbreite. Nach St Patrick’s Anschlusstreffer kommt Daryl Frame und erzielt als Einwechselspieler zwei Tore; Pol Muñoz setzt in der Nachspielzeit den Schlusspunkt.',
      midfield:'Justin Ramsey liefert aus dem Zentrum zwei Vorlagen und zeigt erneut, warum seine Entwicklung zur Mezzala dem Harps-Spiel zusätzliche Dynamik gibt.',
      maisto:'Romano Maisto liefert mit zwei Toren, einer Vorlage und Note 10,0 einen nahezu perfekten Auftritt.',
      league:'Zwölf Ligasiege in Folge, 57 Punkte aus 21 Spielen und 71:9 Tore: Die Harps kommen aus der WM-Pause nicht nur unbeschadet zurück, sondern wirken noch gefährlicher.'
    },
    notes:[
      "St Patrick's Athletic 1:7 Finn Harps.",
      'Zur Pause führen die Harps bereits 4:0.',
      'Romano Maisto erzielt zwei Tore und erhält die perfekte Note 10,0.',
      'Daryl Frame trifft nach seiner Einwechslung zweimal.',
      'Justin Ramsey liefert zwei Vorlagen.',
      'Raúl erzielt sein erstes Ligator für Finn Harps.',
      'Ben Barry erreicht sein 25. Ligator der Karriere und für Finn Harps.',
      'Diego Fernández absolviert sein 200. Profispiel.',
      'Zwölfter Ligasieg in Folge; nach 21 Spielen stehen 57 Punkte und 71:9 Tore.'
    ],
    sources:["FM-Spielübersicht St Patrick's Athletic – Finn Harps · 28.07.2042",'Finn-Harps-Spielerstatistiken · 28.07.2042','FourFourTwo · Premier Division: Finn Harps hat Erwartungen mit klarem Sieg erfüllt']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-07-28','19:45',"St Patrick's Athletic",'Auswärts','7:1','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[2]==="St Patrick's Athletic"&&x[5]==='Premier Division'&&x[0]===date);
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const club=window.FM_CLUBS.find(x=>x.id==='st-patricks-athletic'||x.name==="St Patrick's Athletic"||x.name==="St Patrick's Athletic FC");
  if(club){
    club.meetings=club.meetings||[];
    const meeting={date:'28.07.2042',competition:'Premier Division',venue:'A',result:'7:1'};
    const idx=club.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)club.meetings[idx]=meeting;else club.meetings.unshift(meeting);
    club.lastMeeting="28.07.2042 · St Patrick's Athletic 1:7 Finn Harps";
    club.summary='Finn Harps zerlegt St Patrick’s im Richmond Park 7:1. Maisto und Frame treffen doppelt, Raúl, Barry und Muñoz ebenfalls.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Machtdemonstration in Dublin: Finn Harps schlagen St Patrick’s Athletic 7:1. Maisto mit Note 10,0, Frame mit Doppelpack; zwölfter Ligasieg in Folge.';
    season.league=season.league||{};
    season.league.current={played:21,wins:19,draws:0,losses:2,goalsFor:71,goalsAgainst:9,goalDifference:62,points:57,position:1};
    season.league.latestForm='12 Ligasiege in Folge · Platz 1 · 71:9 Tore nach 21 Spielen';
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note="28.07.2042: Finn Harps gewinnt bei St Patrick's Athletic 7:1. Maisto und Frame treffen doppelt, Raúl erzielt sein erstes Ligator für den Klub, Barry sein 25. Ligator, Muñoz trifft in der Nachspielzeit. Maisto erhält Note 10,0. Zwölfter Ligasieg in Folge; 57 Punkte und 71:9 Tore nach 21 Spielen.";
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-07-28-maisto-perfect-ten',date,player:'Romano Maisto',type:'standout',title:'Perfekte 10,0 für Maisto',detail:'Zwei Tore und eine Vorlage beim 7:1 in Dublin.'},
    {id:'2042-07-28-frame-brace',date,player:'Daryl Frame',type:'standout',title:'Frame trifft doppelt von der Bank',detail:'Tore in Minute 59 und 73 beim 7:1 gegen St Patrick’s.'},
    {id:'2042-07-28-raul-first-league-goal',date,player:'Raúl',type:'milestone',title:'Raúl mit erstem Ligator für Harps',detail:'Kopfballtor in Minute 13 zum zwischenzeitlichen 2:0.'},
    {id:'2042-07-28-barry-25-league-goals',date,player:'Ben Barry',type:'milestone',title:'Barry erreicht 25 Ligatore',detail:'Der 19-Jährige erzielt in Minute 26 das 4:0 und damit sein 25. Ligator der Karriere und für Finn Harps.'},
    {id:'2042-07-28-fernandez-200-pro',date,player:'Diego Fernández',type:'milestone',title:'Fernández bei 200 Profispielen',detail:'Der Argentinier erreicht beim 7:1 in Dublin seinen 200. Profieinsatz.'},
    {id:'2042-07-28-ramsey-two-assists',date,player:'Justin Ramsey',type:'standout',title:'Ramsey dirigiert aus dem Mittelfeld',detail:'Zwei Vorlagen und Note 8,2 in der nächsten Harps-Machtdemonstration.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'28.07.2042',
    headline:'7:1 in Dublin: Harps schalten nach der WM endgültig in den Vernichtungsmodus',
    subheadline:'Maisto mit perfekter 10,0, Frame mit Doppelpack von der Bank, Raúl mit seinem ersten Ligator und Barry mit Treffer Nummer 25. Finn Harps feiern den zwölften Ligasieg in Folge.',
    label:'PREMIER DIVISION · MACHTDEMONSTRATION · 28. JULI 2042',
    heroStat:{label:'SERIE',value:'12 LIGASIEGE',note:'71:9 Tore nach 21 Spielen · 57 Punkte · Platz 1'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Wenn das 4:1 in Derry das Signal war, dass die WM-Unterbrechung den Rhythmus nicht gebrochen hat, dann ist das 7:1 bei St Patrick’s die Machtdemonstration dahinter. Finn Harps führt nach 26 Minuten bereits 4:0 und lässt auch nach der Pause nicht nach.',
    sections:[
      {title:'Maisto spielt die perfekte erste Halbzeit',text:'Romano Maisto trifft in Minute 9 und 20, bereitet zusätzlich ein Tor vor und beendet den Abend mit der perfekten Note 10,0. Dazwischen erzielt Raúl per Kopf sein erstes Ligator für Finn Harps.'},
      {title:'Barry setzt den nächsten Meilenstein',text:'Ben Barry erhöht in Minute 26 auf 4:0. Für den 19-Jährigen ist es das 25. Ligator seiner Karriere, gleichzeitig Nummer 25 für Finn Harps.'},
      {title:'Frame zeigt die Tiefe dieses Kaders',text:'Nach Karamoko Carbons 1:4 kommt Daryl Frame ins Spiel und antwortet mit einem Doppelpack in Minute 59 und 73. Selbst die zweite Welle der Harps bleibt für einen Liga-Gegner kaum zu kontrollieren.'},
      {title:'Ramsey dirigiert, Muñoz setzt den Punkt',text:'Justin Ramsey liefert aus dem Mittelfeld zwei Vorlagen und erhält Note 8,2. Pol Muñoz macht in Minute 90+3 das 7:1 perfekt.'}
    ],
    verdictHeading:'Vom WM-Finale direkt in den Liga-Rausch',
    verdict:'Zwei Spiele nach der Weltmeisterschaft, elf Harps-Tore und die Siegesserie wächst auf zwölf Ligapartien. Besonders bemerkenswert ist die Verteilung der Verantwortung: Maisto, Frame, Raúl, Barry, Ramsey und Muñoz prägen den Abend. Genau diese Breite macht Finn Harps für die zweite Saisonhälfte so bedrohlich.',
    sources:["FM-Spielübersicht St Patrick's Athletic – Finn Harps · 28.07.2042",'Finn-Harps-Spielerstatistiken · 28.07.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-28-st-patricks-finn-harps-1-7',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 1:7',
    title:'Machtdemonstration: Finn Harps zerlegen St Patrick’s in Dublin',
    summary:'Maisto spielt eine perfekte 10,0, Frame trifft doppelt von der Bank. Mit zwölf Ligasiegen in Folge, 57 Punkten und 71:9 Toren führen die Harps die Liga an.',
    href:`presse.html?id=${reportId}`
  });
})();