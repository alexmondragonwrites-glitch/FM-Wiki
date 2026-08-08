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
    id:'2041-06-21-boca-club-world-cup',date:'2041-06-21',season:2041,competition:'FIFA Club World Cup',round:'Gruppe H · 3. Spieltag',
    home:'Finn Harps',away:'Boca Juniors',score:'1:1',homeGoals:1,awayGoals:1,
    venue:"Stade Pierre Mauroy, Villeneuve-d'Ascq",attendance:44408,awayAttendance:24115,weather:'Sonnig · 25 °C',
    report:'presse.html?id=2041-06-21-boca-klub-wm-spielbericht',
    scorers:['Joaquín Rosales 29.','Daryl Frame 84.'],
    incidents:['Evan Reilly verletzt 65.','Billy Kendrick eingewechselt 66.'],
    stats:{
      shots:'20:2',shotsOnTarget:'5:1',xG:'1,68:0,24',shotsOffTarget:'10:1',bigChances:'0:0',possession:'38:62',
      corners:'8:1',fouls:'10:12',passesCompleted:'377:626',passesAttempted:'444:688',passCompletion:'85:91',
      tacklesWon:'73:69',headersWon:'48:47',yellowCards:'0:0',redCards:'0:0',averageRating:'6,75:6,79',intenseSprints:'91:56'
    },
    ratings:[
      {name:'Evan Reilly',rating:6.5,starter:true,off:65,injured:true},
      {name:'Callum Brennan',rating:6.6,starter:true},
      {name:'Darcy Andrews',rating:6.5,starter:true},
      {name:'Torric Bruce',rating:6.4,starter:true},
      {name:'Kevin Kelly',rating:6.8,starter:true},
      {name:'Amir Mašić',rating:6.9,starter:true},
      {name:'Daryl Frame',rating:7.9,starter:true,goals:1},
      {name:'Jake Roberts',rating:6.5,starter:true,off:54},
      {name:'Billy Walker',rating:6.2,starter:true},
      {name:'Romano Maisto',rating:6.6,starter:true},
      {name:'Justin Ramsey',rating:6.7,starter:true},
      {name:'Giacomo Papini',rating:7.3,starter:false,on:46},
      {name:'Basile Rouvière',rating:6.6,starter:false,on:54},
      {name:"Cormac O'Kane",rating:6.7,starter:false,on:54},
      {name:'Billy Kendrick',rating:6.9,starter:false,on:66}
    ],
    summary:'Finn Harps entgeht am letzten Spieltag der Klub-WM-Gruppe H nur knapp dem Aus. Boca Juniors führt durch Joaquín Rosales seit der 29. Minute, ehe Daryl Frame in der 84. Minute zum 1:1 trifft. Eine Niederlage hätte die Harps laut Ausgangslage aus dem Turnier geworfen. Stattdessen beendet der Titelverteidiger die Gruppe mit sieben Punkten als Gruppensieger.',
    standout:['Daryl Frame 7,9 · rettender Ausgleich in der 84. Minute','Giacomo Papini 7,3 · stärkster offensiver Impuls nach seiner Einwechslung','Billy Kendrick 6,9 · kommt nach Reillys Verletzung ins Tor'],
    stakes:{before:'Niederlage bedeutet Ausscheiden',actual:'1:1 · Gruppensieg mit 7 Punkten',qualified:true,groupWinner:true}
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const currentCwc=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...currentCwc,
    id:'club-world-cup-2041',year:2041,status:'qualified',titleHolder:'Finn Harps',seededPot:1,group:'H',groupCompleted:true,qualified:true,groupWinner:true,
    teams:currentCwc.teams||[
      {name:'Boca Juniors',country:'Argentinien'},
      {name:'Finn Harps',country:'Irland',titleHolder:true,seeded:true},
      {name:'Manchester City',country:'England',tournamentFavourite:true,odds:'6.50'},
      {name:'Charlotte FC',country:'USA'}
    ],
    groupProgress:{played:3,wins:2,draws:1,losses:0,goalsFor:4,goalsAgainst:2,points:7,position:1},
    groupTable:[
      {position:1,name:'Finn Harps',played:3,wins:2,draws:1,losses:0,goalsFor:4,goalsAgainst:2,goalDifference:2,points:7,qualified:true},
      {position:2,name:'Manchester City',played:3,wins:2,draws:0,losses:1,goalsFor:5,goalsAgainst:3,goalDifference:2,points:6,qualified:true},
      {position:3,name:'Boca Juniors',played:3,wins:1,draws:1,losses:1,goalsFor:4,goalsAgainst:4,goalDifference:0,points:4,qualified:false},
      {position:4,name:'Charlotte FC',played:3,wins:0,draws:0,losses:3,goalsFor:0,goalsAgainst:4,goalDifference:-4,points:0,qualified:false}
    ],
    results:[...(currentCwc.results||[]).filter(x=>x.id!==match.id),{id:match.id,date:match.date,opponent:'Boca Juniors',result:'1:1',venue:"Villeneuve-d'Ascq"}],
    qualificationDrama:{defeatOutcome:'Ausscheiden',equaliserMinute:84,scorer:'Daryl Frame',finalPosition:1},
    headline:'Frame rettet den Titelverteidiger in der 84. Minute: 1:1 gegen Boca, sieben Punkte und Gruppensieg in Gruppe H.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.clubWorldCup={
      ...(season.clubWorldCup||{}),status:'Gruppenphase abgeschlossen · als Gruppensieger weiter',titleHolder:true,seededPot:1,group:'H',
      opponents:['Boca Juniors','Manchester City','Charlotte FC'],played:3,wins:2,draws:1,losses:0,goalsFor:4,goalsAgainst:2,points:7,
      latestResult:'Finn Harps 1:1 Boca Juniors',position:1,qualified:true,groupWinner:true,
      qualificationNote:'Daryl Frame glich in der 84. Minute aus. Bei einer Niederlage wäre Finn Harps ausgeschieden.'
    };
    season.latestHeadline='Klub-WM 2041: Daryl Frame rettet Finn Harps sechs Minuten vor Schluss. 1:1 gegen Boca bedeutet Gruppensieg statt Ausscheiden.';
  }

  const addPlayerUpdate=(id,name,text,update)=>{
    const player=(window.FM_PLAYERS||[]).find(x=>x.id===id||x.name===name);
    if(!player)return;
    player.profileDate='2041-06-21';
    if(text){
      const narrative=player.careerNarrative||[];
      if(!narrative.includes(text))player.careerNarrative=[...narrative,text];
    }
    if(update){
      player.matchUpdates=[...(player.matchUpdates||[]).filter(x=>!(x.date===update.date&&x.opponent===update.opponent&&x.competition===update.competition)),update];
      player.lastMatch=update;
    }
  };

  addPlayerUpdate('daryl-frame','Daryl Frame','Daryl Frame rettete Finn Harps am 21. Juni 2041 in der Klub-WM gegen Boca Juniors mit dem Ausgleich in der 84. Minute vor dem Gruppen-Aus. Das 1:1 machte die Harps mit sieben Punkten zum Sieger der Gruppe H.',{date:'2041-06-21',opponent:'Boca Juniors',competition:'FIFA Club World Cup · Gruppe H',result:'1:1',minutes:90,goals:1,assists:0,rating:7.9,note:'Ausgleich in der 84. Minute · Gruppensieg gerettet'});
  addPlayerUpdate('evan-reilly','Evan Reilly','Evan Reilly musste beim entscheidenden 1:1 gegen Boca Juniors in der 65. Minute verletzt ausgewechselt werden.',{date:'2041-06-21',opponent:'Boca Juniors',competition:'FIFA Club World Cup · Gruppe H',result:'1:1',minutes:65,goals:0,assists:0,rating:6.5,note:'Verletzt ausgewechselt in der 65. Minute'});
  addPlayerUpdate('billy-kendrick','Billy Kendrick','Billy Kendrick kam beim entscheidenden Klub-WM-Gruppenspiel gegen Boca Juniors nach Evan Reillys Verletzung in der 66. Minute ins Tor und half, das 1:1 bis zum Ende zu sichern.',{date:'2041-06-21',opponent:'Boca Juniors',competition:'FIFA Club World Cup · Gruppe H',result:'1:1',minutes:24,goals:0,assists:0,rating:6.9,note:'Notfall-Einwechslung nach Reilly-Verletzung'});
  addPlayerUpdate('giacomo-papini','Giacomo Papini','Giacomo Papini wurde gegen Boca zur Pause gebracht und erhielt beim 1:1 mit 7,3 die zweitbeste Harps-Note.',{date:'2041-06-21',opponent:'Boca Juniors',competition:'FIFA Club World Cup · Gruppe H',result:'1:1',minutes:45,goals:0,assists:0,rating:7.3,note:'Starker offensiver Impuls nach der Pause'});

  const boca=(window.FM_CLUBS||[]).find(x=>x.id==='boca-juniors'||x.name==='Boca Juniors');
  if(boca){
    boca.meetings=[{date:'21.06.2041',venue:'N',result:'1:1'},...(boca.meetings||[]).filter(item=>item.date!=='21.06.2041')];
    boca.lastMatch={date:'21.06.2041',competition:'FIFA Club World Cup · Gruppe H',result:'Finn Harps 1:1 Boca Juniors',scorers:['Joaquín Rosales 29.','Daryl Frame 84.'],note:'Boca führte bis zur 84. Minute, ehe Frame den Gruppensieg der Harps rettete.'};
  }

  const report={
    id:'2041-06-21-boca-klub-wm-spielbericht',type:'Spielbericht',date:'2041-06-21',competition:'FIFA Club World Cup',
    fixtureDate:'Freitag, 21.06.2041',home:'Finn Harps',away:'Boca Juniors',score:'1:1',location:"Stade Pierre Mauroy · Villeneuve-d'Ascq · 44.408 Zuschauer",
    headline:'Sechs Minuten vor dem Aus: Frame rettet Finn Harps gegen Boca',
    subheadline:'Joaquín Rosales bringt Boca in Führung, Evan Reilly muss verletzt raus und der Titelverteidiger steht vor dem Gruppen-Aus. Dann trifft Daryl Frame in der 84. Minute zum 1:1 und macht Finn Harps sogar zum Gruppensieger.',
    label:'FIFA CLUB WORLD CUP · GRUPPE H · 1:1',
    heroStat:{label:'Die rettende Minute',value:'84.',note:'Daryl Frame zum 1:1 · bei einer Niederlage wäre Finn Harps ausgeschieden'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Das 1:1 gegen Boca Juniors sieht auf dem Papier unscheinbar aus. Tatsächlich war es eines der gefährlichsten Spiele der bisherigen Saison. Boca führte seit der 29. Minute durch Joaquín Rosales. Finn Harps brauchte mindestens den Ausgleich, denn eine Niederlage hätte das Aus in der Gruppenphase bedeutet. Trotz 20:2 Abschlüssen und 1,68:0,24 xG blieb der Ball bis tief in die Schlussphase draußen. Erst Daryl Frame traf in der 84. Minute und verwandelte ein drohendes Ausscheiden in Platz eins der Gruppe H.',
    sections:[
      {title:'Rosales stellt die Gruppe auf den Kopf',text:'Boca brauchte kaum Chancen. Joaquín Rosales traf in der 29. Minute zur Führung, obwohl Finn Harps im gesamten Spiel nur zwei Abschlüsse der Argentinier zuließ. Zur Pause stand es 0:1 und plötzlich hing die Titelverteidigung an einem einzigen Tor.'},
      {title:'20:2 Schüsse, aber das Tor will nicht fallen',text:'Finn Harps produzierte Abschlüsse in Serie: 20 insgesamt, fünf davon aufs Tor, dazu acht Ecken. Boca kam nur auf zwei Schüsse und einen Versuch aufs Tor. Trotzdem blieb es lange beim 0:1. Das Expected-Goals-Verhältnis von 1,68 zu 0,24 machte die zunehmende Absurdität des Spielstands sichtbar.'},
      {title:'Boca hat den Ball, Finn Harps die Abschlüsse',text:'Das Spiel hatte eine ungewöhnliche Statik. Boca hielt 62 Prozent Ballbesitz und brachte 626 von 688 Pässen an. Finn Harps hatte nur 38 Prozent Ballbesitz und 377 erfolgreiche Pässe, erzeugte daraus aber zehnmal so viele Abschlüsse. Die Harps waren direkter, Boca kontrollierter.'},
      {title:'Dann verletzt sich auch noch Reilly',text:'In der 65. Minute musste Torhüter Evan Reilly verletzt vom Feld. Billy Kendrick kam in der 66. Minute ins Tor und erhielt am Ende die Note 6,9. In einem Spiel, in dem ohnehin jede Minute schwerer wurde, kam damit noch ein zusätzlicher Unsicherheitsfaktor hinzu.'},
      {title:'Frame in der 84. Minute',text:'Sechs Minuten vor dem Ende fiel das Tor, das die gesamte Gruppenphase veränderte. Daryl Frame erzielte das 1:1 und erhielt mit 7,9 die beste Harps-Note. Giacomo Papini, zur Pause eingewechselt, folgte mit 7,3. Aus einem drohenden Ausscheiden wurde innerhalb eines Moments die sichere Qualifikation.'},
      {title:'Nicht nur weiter, sondern Gruppensieger',text:'Finn Harps beendet Gruppe H mit sieben Punkten und 4:2 Toren auf Platz eins. Manchester City folgt mit sechs Punkten, Boca Juniors mit vier und Charlotte FC ohne Punkt. Der Titelverteidiger bleibt damit im Turnier, obwohl er sechs Minuten vor Schluss noch vor dem Aus stand.'}
    ],
    strengthsTitle:'WAS FINN HARPS RETTETE',strengthsHeading:'Druck, Hartnäckigkeit und Frame im richtigen Moment',
    strengths:['20:2 Abschlüsse trotz nur 38 Prozent Ballbesitz','8:1 Ecken und dauerhaft höhere Abschlussgefahr','Daryl Frame mit dem 1:1 in der 84. Minute und Note 7,9','Giacomo Papini bringt nach der Pause zusätzlichen Druck','Billy Kendrick bleibt nach der verletzungsbedingten Einwechslung stabil','Die Mannschaft akzeptiert den Rückstand nicht und arbeitet bis zum Ende weiter'],
    vulnerabilitiesTitle:'WARUM ES FAST SCHIEFGEGANGEN WÄRE',vulnerabilitiesHeading:'Ein einziges Gegentor brachte den Titelverteidiger an die Kante',
    vulnerabilities:['Boca erzielt aus nur zwei Abschlüssen die Führung','Nur fünf der 20 Harps-Schüsse gehen tatsächlich aufs Tor','Trotz 1,68 xG entsteht bis zur 84. Minute kein Treffer','62 Prozent Ballbesitz und 91 Prozent Passquote für Boca','Evan Reilly muss in der entscheidenden Phase verletzt ausgewechselt werden'],
    verdictHeading:'Vom Gruppen-Aus zum Gruppensieg in sechs Minuten',
    verdict:'Dieses 1:1 ist wesentlich größer als ein gewöhnliches Unentschieden. Finn Harps war statistisch klar gefährlicher, lag aber 55 Minuten zurück und stand damit unmittelbar vor dem Ausscheiden. Frames Tor in der 84. Minute rettete nicht nur die Qualifikation, sondern sicherte mit sieben Punkten sogar Platz eins. Genau solche Spiele machen eine Titelverteidigung gefährlich: nicht weil alles funktioniert, sondern weil die Mannschaft einen Abend überlebt, an dem fast alles gegen sie kippt.',
    sourcesHeading:'Spieldaten vom 21. Juni 2041',
    sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots mit Spielübersicht, Gruppentabelle und Finn-Harps-Spielerstatistiken sowie auf der vom Nutzer bestätigten Ausgangslage, dass eine Niederlage das Ausscheiden bedeutet hätte.',
    sources:['FM-Spielübersicht Finn Harps – Boca Juniors, 21.06.2041','FM-Gruppentabelle FIFA Club World Cup · Gruppe H, 21.06.2041','FM-Spielerstatistiken Finn Harps, 21.06.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-21-boca-klub-wm',date:'2041-06-21',season:2041,category:'Klub-WM',accent:'gold',featured:true,
    eyebrow:'FIFA CLUB WORLD CUP · FINN HARPS 1:1 BOCA JUNIORS',title:'Frame rettet die Harps in Minute 84 vor dem Aus',
    summary:'Boca führt seit der 29. Minute, Reilly verletzt sich und Finn Harps steht vor dem Gruppen-Aus. Daryl Frame trifft sechs Minuten vor Schluss zum 1:1. Die Harps beenden Gruppe H mit sieben Punkten sogar auf Platz eins.',
    href:'presse.html?id=2041-06-21-boca-klub-wm-spielbericht',tags:['Klub-WM','Gruppensieg','Daryl Frame','Boca Juniors']
  });
})();