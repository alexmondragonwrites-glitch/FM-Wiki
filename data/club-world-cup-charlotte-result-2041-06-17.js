(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2041-06-17-charlotte-club-world-cup',date:'2041-06-17',season:2041,competition:'FIFA Club World Cup',round:'Gruppe H · 2. Spieltag',
    home:'Finn Harps',away:'Charlotte FC',score:'1:0',homeGoals:1,awayGoals:0,
    venue:"Stade Pierre Mauroy, Villeneuve-d'Ascq",attendance:27587,awayAttendance:299,weather:'Böig, Nieselregen · 17 °C',
    report:'presse.html?id=2041-06-17-charlotte-klub-wm-spielbericht',
    scorers:['Daryl Frame 36.'],
    incidents:['Diego Henrique Gelb 10.','Luciano Gómez Gelb 85.'],
    stats:{
      shots:'14:3',shotsOnTarget:'5:1',xG:'2,04:0,31',shotsOffTarget:'6:1',bigChances:'1:0',possession:'73:27',
      corners:'7:3',fouls:'5:10',passesCompleted:'778:293',passesAttempted:'852:367',passCompletion:'91:80',
      tacklesWon:'73:54',headersWon:'49:52',yellowCards:'0:2',redCards:'0:0',averageRating:'7,11:6,54',intenseSprints:'92:95'
    },
    ratings:[
      {name:'Paulo Henrique',rating:7.3,starter:true},
      {name:'Diego Fernández',rating:7.2,starter:true},
      {name:'Radim Malý',rating:7.4,starter:true},
      {name:'Mareks Istrankins',rating:7.3,starter:true},
      {name:'Kevin Kelly',rating:6.8,starter:true,off:45},
      {name:'Amir Mašić',rating:7.0,starter:true,off:62},
      {name:'Daryl Frame',rating:7.4,starter:true,off:62,goals:1},
      {name:"Cormac O'Kane",rating:7.4,starter:true},
      {name:'Giacomo Papini',rating:7.2,starter:true,off:45},
      {name:'Dom Docherty',rating:6.8,starter:true},
      {name:'Ben Barry',rating:6.7,starter:true,off:62},
      {name:'Gustavo da Silva',rating:7.0,starter:false,on:45},
      {name:'Justin Ramsey',rating:6.5,starter:false,on:62},
      {name:"Jim O'Neill",rating:6.9,starter:false,on:62},
      {name:'Basile Rouvière',rating:7.0,starter:false,on:62},
      {name:'Romano Maisto',rating:7.5,starter:false,on:45,playerOfMatch:true}
    ],
    milestones:[
      'Ryan Flannigan saß zum 1000. Mal als Trainer auf der Bank von Finn Harps FC.',
      'Diego Fernández absolvierte sein 150. Spiel als Profi.',
      'Kevin Kelly absolvierte sein 225. Spiel als Profi.',
      "Jim O'Neill absolvierte sein 375. Spiel als Profi.",
      'Romano Maisto absolvierte seinen 100. Einsatz für Finn Harps.'
    ],
    summary:'Finn Harps gewinnt auch das zweite Gruppenspiel der Klub-WM 2041. Daryl Frame erzielt in der 36. Minute das einzige Tor gegen Charlotte FC. Die Harps kontrollieren die Partie mit 73 Prozent Ballbesitz, 14:3 Abschlüssen und 2,04:0,31 xG und führen Gruppe H nach zwei Spielen mit sechs Punkten an.',
    standout:['Romano Maisto 7,5 · beste Harps-Note nach seiner Einwechslung','Daryl Frame 7,4 · Siegtor in der 36. Minute','Radim Malý 7,4','Cormac O’Kane 7,4']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const currentCwc=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...currentCwc,
    id:'club-world-cup-2041',year:2041,status:'group-stage',titleHolder:'Finn Harps',seededPot:1,group:'H',
    teams:currentCwc.teams||[
      {name:'Boca Juniors',country:'Argentinien'},
      {name:'Finn Harps',country:'Irland',titleHolder:true,seeded:true},
      {name:'Manchester City',country:'England',tournamentFavourite:true,odds:'6.50'},
      {name:'Charlotte FC',country:'USA'}
    ],
    groupProgress:{played:2,wins:2,draws:0,losses:0,goalsFor:3,goalsAgainst:1,points:6},
    groupTable:[
      {position:1,name:'Finn Harps',played:2,wins:2,draws:0,losses:0,goalsFor:3,goalsAgainst:1,goalDifference:2,points:6},
      {position:2,name:'Manchester City',played:2,wins:1,draws:0,losses:1,goalsFor:4,goalsAgainst:3,goalDifference:1,points:3},
      {position:3,name:'Boca Juniors',played:2,wins:1,draws:0,losses:1,goalsFor:3,goalsAgainst:3,goalDifference:0,points:3},
      {position:4,name:'Charlotte FC',played:2,wins:0,draws:0,losses:2,goalsFor:0,goalsAgainst:3,goalDifference:-3,points:0}
    ],
    results:[...(currentCwc.results||[]).filter(x=>x.id!==match.id),{id:match.id,date:match.date,opponent:'Charlotte FC',result:'1:0',venue:"Villeneuve-d'Ascq"}],
    headline:'Zwei Spiele, zwei Siege: Finn Harps führt Gruppe H nach dem 1:0 gegen Charlotte FC mit sechs Punkten an.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.clubWorldCup={
      ...(season.clubWorldCup||{}),status:'Gruppenphase läuft',titleHolder:true,seededPot:1,group:'H',
      opponents:['Boca Juniors','Manchester City','Charlotte FC'],played:2,wins:2,draws:0,losses:0,goalsFor:3,goalsAgainst:1,points:6,
      latestResult:'Finn Harps 1:0 Charlotte FC',position:1
    };
    season.latestHeadline='Klub-WM 2041: Daryl Frame schießt Finn Harps zum 1:0 gegen Charlotte. Zwei Spiele, sechs Punkte, Platz eins in Gruppe H.';
  }

  const addPlayerUpdate=(id,name,text,update,milestone)=>{
    const player=(window.FM_PLAYERS||[]).find(x=>x.id===id||x.name===name);
    if(!player)return;
    player.profileDate='2041-06-17';
    const narrative=player.careerNarrative||[];
    if(text&&!narrative.includes(text))player.careerNarrative=[...narrative,text];
    if(milestone){
      player.milestones=player.milestones||[];
      if(!player.milestones.some(x=>String(typeof x==='string'?x:x.text||'').includes(milestone)))player.milestones.push({date:'2041-06-17',text:milestone});
    }
    if(update){
      player.matchUpdates=[...(player.matchUpdates||[]).filter(x=>!(x.date===update.date&&x.opponent===update.opponent&&x.competition===update.competition)),update];
      player.lastMatch=update;
    }
  };

  addPlayerUpdate('daryl-frame','Daryl Frame','Daryl Frame erzielte beim 1:0 gegen Charlotte FC am 17. Juni 2041 das einzige Tor des zweiten Klub-WM-Gruppenspiels.',{date:'2041-06-17',opponent:'Charlotte FC',competition:'FIFA Club World Cup · Gruppe H',result:'1:0',minutes:62,goals:1,assists:0,rating:7.4,note:'Siegtor in der 36. Minute'});
  addPlayerUpdate('romano-maisto','Romano Maisto','Romano Maisto kam beim 1:0 gegen Charlotte FC zur zweiten Halbzeit und erhielt mit 7,5 die beste Harps-Note.',{date:'2041-06-17',opponent:'Charlotte FC',competition:'FIFA Club World Cup · Gruppe H',result:'1:0',minutes:45,goals:0,assists:0,rating:7.5,note:'Beste Harps-Note nach Einwechslung'},'100. Einsatz für Finn Harps');
  addPlayerUpdate('diego-fernandez','Diego Fernández',null,{date:'2041-06-17',opponent:'Charlotte FC',competition:'FIFA Club World Cup · Gruppe H',result:'1:0',minutes:90,goals:0,assists:0,rating:7.2,note:'Souveräner Auftritt beim zweiten Gruppensieg'},'150. Spiel als Profi');
  addPlayerUpdate('kevin-kelly','Kevin Kelly',null,{date:'2041-06-17',opponent:'Charlotte FC',competition:'FIFA Club World Cup · Gruppe H',result:'1:0',minutes:45,goals:0,assists:0,rating:6.8,note:'Startelf beim zweiten Gruppensieg'},'225. Spiel als Profi');
  addPlayerUpdate('jim-oneill',"Jim O'Neill",null,{date:'2041-06-17',opponent:'Charlotte FC',competition:'FIFA Club World Cup · Gruppe H',result:'1:0',minutes:28,goals:0,assists:0,rating:6.9,note:'Eingewechselt beim zweiten Gruppensieg'},'375. Spiel als Profi');

  const staff=(window.FM_STAFF||[]).find(x=>x.name==='Ryan Flannigan'||x.id==='ryan-flannigan');
  if(staff){
    staff.milestones=staff.milestones||[];
    const text='1000. Spiel als Trainer auf der Bank von Finn Harps FC';
    if(!staff.milestones.some(x=>String(typeof x==='string'?x:x.text||'').includes('1000.')))staff.milestones.push({date:'2041-06-17',text});
  }

  const charlotte=(window.FM_CLUBS||[]).find(x=>x.id==='charlotte-fc'||x.name==='Charlotte FC');
  if(charlotte){
    charlotte.meetings=[{date:'17.06.2041',venue:'N',result:'0:1'},...(charlotte.meetings||[]).filter(item=>item.date!=='17.06.2041')];
    charlotte.lastMatch={date:'17.06.2041',competition:'FIFA Club World Cup · Gruppe H',result:'Finn Harps 1:0 Charlotte FC',scorers:['Daryl Frame 36.'],note:'Finn Harps dominierte Ball und Chancen mit 73 Prozent Ballbesitz und 2,04:0,31 xG.'};
  }

  const report={
    id:'2041-06-17-charlotte-klub-wm-spielbericht',type:'Spielbericht',date:'2041-06-17',competition:'FIFA Club World Cup',
    fixtureDate:'Montag, 17.06.2041',home:'Finn Harps',away:'Charlotte FC',score:'1:0',location:"Stade Pierre Mauroy · Villeneuve-d'Ascq · 27.587 Zuschauer",
    headline:'Frame reicht: Finn Harps kontrolliert Charlotte und bleibt makellos',
    subheadline:'Nach dem Auftaktsieg gegen Manchester City gewinnt der Titelverteidiger auch sein zweites Gruppenspiel. Daryl Frame erzielt das einzige Tor, während Charlotte offensiv kaum Raum bekommt.',
    label:'FIFA CLUB WORLD CUP · GRUPPE H · 1:0',
    heroStat:{label:'Ballbesitz',value:'73:27',note:'14:3 Schüsse · 5:1 aufs Tor · 2,04:0,31 xG'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Vier Tage nach dem 2:1 gegen Manchester City hat Finn Harps den zweiten Sieg bei der Klub-WM 2041 eingefahren. Gegen Charlotte FC war die Partie weniger spektakulär, aber deutlich kontrollierter. Daryl Frame traf in der 36. Minute zum 1:0. Danach verwalteten die Harps Ball, Raum und Tempo und ließen über 90 Minuten nur drei gegnerische Abschlüsse zu.',
    sections:[
      {title:'Frame bricht den Widerstand',text:'Charlotte hielt das Spiel zunächst torlos, doch in der 36. Minute fand Finn Harps die Lücke. Daryl Frame erzielte das 1:0 und belohnte eine erste Halbzeit, in der die Harps bereits deutlich mehr Ball und Abschlüsse kontrollierten.'},
      {title:'73 Prozent Ballbesitz, 778 angekommene Pässe',text:'Der zweite Gruppensieg entstand vor allem über Kontrolle. Finn Harps hatte 73 Prozent Ballbesitz und brachte 778 von 852 Pässen an. Charlotte kam lediglich auf 293 erfolgreiche Pässe und verbrachte lange Phasen ohne Zugriff auf den Rhythmus der Partie.'},
      {title:'14:3 Abschlüsse und kaum Gefahr für Henrique',text:'Auch die Chancenverteilung war eindeutig. Finn Harps kam auf 14 Abschlüsse und fünf Schüsse aufs Tor, Charlotte auf drei beziehungsweise einen. Das Expected-Goals-Verhältnis von 2,04 zu 0,31 beschreibt die Partie treffender als das knappe Endergebnis.'},
      {title:'Maisto setzt nach der Pause den besten Akzent',text:'Romano Maisto wurde zur zweiten Halbzeit eingewechselt und erhielt mit 7,5 die beste Harps-Note. Daryl Frame, Radim Malý und Cormac O’Kane folgten mit jeweils 7,4. Die Breite des Kaders blieb damit auch nach mehreren Wechseln sichtbar.'},
      {title:'Ein Abend voller Meilensteine',text:'Ryan Flannigan saß zum 1000. Mal als Trainer auf der Bank von Finn Harps. Diego Fernández absolvierte sein 150. Profispiel, Kevin Kelly sein 225. und Jim O’Neill sein 375. Romano Maisto feierte zugleich seinen 100. Einsatz für Finn Harps.'},
      {title:'Sechs Punkte und Platz eins',text:'Nach zwei Spieltagen führt Finn Harps Gruppe H mit sechs Punkten und 3:1 Toren an. Manchester City und Boca Juniors folgen mit jeweils drei Punkten, Charlotte steht noch ohne Zähler am Tabellenende.'}
    ],
    strengthsTitle:'WAS DEN SIEG TRUG',strengthsHeading:'Geduld, Ballkontrolle und defensive Ruhe',
    strengths:['Zweiter Sieg im zweiten Klub-WM-Spiel','73 Prozent Ballbesitz','14:3 Abschlüsse und 5:1 Schüsse aufs Tor','2,04:0,31 xG','Daryl Frame mit dem Siegtreffer','Romano Maisto mit der besten Harps-Note 7,5','Nur drei gegnerische Abschlüsse zugelassen'],
    vulnerabilitiesTitle:'WAS NOCH BESSER GEHEN KANN',vulnerabilitiesHeading:'Aus großer Überlegenheit entstand nur ein Tor',
    vulnerabilities:['Nur ein Treffer aus 14 Abschlüssen und 2,04 xG','Trotz 73 Prozent Ballbesitz blieb die Partie bis zum Ende formal offen'],
    verdictHeading:'Nicht spektakulär, aber meisterlich kontrolliert',
    verdict:'Nach dem emotionaleren 2:1 gegen Manchester City war das 1:0 gegen Charlotte ein anderes Stück Fußball. Finn Harps dominierte nahezu jede Spielphase, hielt den Gegner bei 0,31 xG und benötigte nur Frames Treffer. Zwei Spiele, zwei Siege und sechs Punkte geben dem Titelverteidiger eine ausgezeichnete Ausgangslage vor dem letzten Gruppenspiel.',
    sourcesHeading:'Spieldaten vom 17. Juni 2041',
    sourcesNote:'Der Bericht basiert ausschließlich auf den bereitgestellten Football-Manager-Screenshots mit Spielübersicht, Gruppenstand, Teamstatistiken, Einzelbewertungen und Meilensteinen.',
    sources:['FM-Spielübersicht Finn Harps – Charlotte FC, 17.06.2041','FM-Spielerstatistiken Finn Harps, 17.06.2041','FIFA Club World Cup · Gruppe H · Tabelle nach dem 2. Spieltag']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-17-charlotte-klub-wm',date:'2041-06-17',season:2041,category:'Klub-WM',accent:'blue',
    eyebrow:'FIFA CLUB WORLD CUP · FINN HARPS 1:0 CHARLOTTE FC',title:'Frame schießt Harps zum zweiten Gruppensieg',
    summary:'Daryl Frame trifft beim kontrollierten 1:0 gegen Charlotte. Finn Harps dominiert mit 73 Prozent Ballbesitz und 2,04:0,31 xG und führt Gruppe H nach zwei Spielen mit sechs Punkten.',
    href:'presse.html?id=2041-06-17-charlotte-klub-wm-spielbericht',featured:true
  });
})();