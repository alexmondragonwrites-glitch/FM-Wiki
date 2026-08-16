(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-10-23-red-bull-salzburg-finn-harps-champions-league';
  const reportId='2041-10-23-red-bull-salzburg-finn-harps-spielbericht';

  const match={
    id:fixtureId,date:'2041-10-23',season:2041,competition:'UEFA Champions League',stage:'Ligaphase · 3. Spieltag',
    home:{id:'red-bull-salzburg',name:'Red Bull Salzburg',short:'RBS',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    score:'1:4',homeGoals:1,awayGoals:4,halfTime:'0:1',
    venue:'Stadion Salzburg',location:'Wals-Siezenheim, Österreich',attendance:28553,awayFans:510,weather:'18 °C · windig und feucht',referee:'Gerhard Stürmer',
    headline:'Drei aus drei: Maisto-Doppelpack trägt Finn Harps zum 4:1 in Salzburg',
    verdict:'Finn Harps gewinnt auch das dritte Spiel der Champions-League-Ligaphase. Romano Maisto trifft doppelt, Billy Walker und Fionn Gavin erhöhen. Salzburg kommt nur durch Dylan van Huizen zum zwischenzeitlichen 1:2. Mit neun Punkten und 9:1 Toren stehen die Harps nach drei Spieltagen auf Rang zwei.',
    scorers:[
      {player:'Romano Maisto',team:'Finn Harps',goals:2,minutes:[16,78]},
      {player:'Billy Walker',team:'Finn Harps',goals:1,minutes:[54]},
      {player:'Dylan van Huizen',team:'Red Bull Salzburg',goals:1,minutes:[67]},
      {player:'Fionn Gavin',team:'Finn Harps',goals:1,minutes:[87]}
    ],
    events:[
      {minute:16,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'0:1'},
      {minute:22,type:'yellow',team:'Red Bull Salzburg',player:'Rüzgar Korkmaz',text:'Gelbe Karte'},
      {minute:54,type:'goal',team:'Finn Harps',player:'Billy Walker',text:'0:2'},
      {minute:67,type:'goal',team:'Red Bull Salzburg',player:'Dylan van Huizen',text:'1:2'},
      {minute:78,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'1:3'},
      {minute:87,type:'goal',team:'Finn Harps',player:'Fionn Gavin',text:'1:4'}
    ],
    stats:[
      {label:'Schüsse',home:4,away:12,kind:'number'},
      {label:'Schüsse aufs Tor',home:1,away:6,kind:'number'},
      {label:'xG',home:0.74,away:2.31,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:2,away:4,kind:'number'},
      {label:'Ballbesitz',home:49,away:51,kind:'percent'},
      {label:'Ecken',home:4,away:4,kind:'number'},
      {label:'Angekommene Pässe',home:516,away:526,kind:'number',homeDetail:'90 % · 516/574',awayDetail:'90 % · 526/589'},
      {label:'Gewonnene Zweikämpfe',home:73,away:78,kind:'percent',homeDetail:'16/22',awayDetail:'28/36'},
      {label:'Gewonnene Kopfbälle',home:41,away:58,kind:'percent',homeDetail:'11/27',awayDetail:'15/26'}
    ],
    championsLeagueAfterMatch:{position:2,played:3,wins:3,draws:0,losses:0,goalsFor:9,goalsAgainst:1,goalDifference:8,points:9},
    standout:{player:'Romano Maisto',team:'Finn Harps',rating:8.3,goals:2,note:'Eröffnet die Partie in der 16. Minute und entscheidet sie mit seinem zweiten Treffer zum 3:1.'},
    keyPerformers:[
      {player:'Callum Brennan',rating:8.2,note:'Starke Leistung in der Defensive und im Aufbau.'},
      {player:'Billy Walker',rating:7.4,goals:1,note:'Erhöht kurz nach der Pause auf 2:0.'},
      {player:'Fionn Gavin',rating:7.4,goals:1,note:'Setzt in der 87. Minute den Schlusspunkt zum 4:1.'}
    ],
    injuries:[
      {player:'Pol Muñoz',injury:'Bänderzerrung im Knie',expectedAbsence:'12 Tage bis 2 Wochen',context:'Verletzt beim Sprinten im Spiel bei Red Bull Salzburg.'}
    ],
    squadHealth:{
      giacomoPapini:{injury:'Knöchelverdrehung',status:'Rückkehr unmittelbar bevorstehend',remaining:'1 Tag'},
      domDocherty:{status:'noch verletzt',remaining:'7 Tage bis 2 Wochen'},
      amirMasic:{status:'noch verletzt',remaining:'6 bis 12 Tage'},
      polMunoz:{injury:'Bänderzerrung im Knie',remaining:'9 Tage bis 2 Wochen'}
    },
    analysis:{
      summary:'Finn Harps beantwortet den als eng erwarteten Härtetest mit einem klaren 4:1. Salzburg kommt nur zu vier Abschlüssen und einem Schuss aufs Tor, während die Harps aus 2,31 xG vier Tore erzielen.',
      firstHalf:'Romano Maisto bringt Finn Harps in der 16. Minute in Führung. Trotz der direkten Salzburger Ausrichtung bleibt die Harps-Defensive bis zur Pause ohne Gegentor.',
      secondHalf:'Billy Walker erhöht auf 2:0. Nach van Huizens Anschlusstreffer in Minute 67 bleibt die Partie kurz offen, bevor Maisto mit seinem zweiten Tor und Fionn Gavin das Ergebnis deutlich machen.',
      control:'12:4 Schüsse, 6:1 aufs Tor und 2,31:0,74 xG sprechen für den verdient klaren Auswärtssieg. Salzburgs lange Bälle und zentraler Fokus erzeugen nur selten echte Gefahr.',
      table:'Nach drei Spieltagen ist Finn Harps weiterhin perfekt: drei Siege, neun Punkte und 9:1 Tore. Nur Roma liegt in der Momentaufnahme vor den Harps; Monaco und Inter stehen ebenfalls bei neun Punkten.',
      injuryContext:'Pol Muñoz zieht sich eine Bänderzerrung im Knie zu und fällt voraussichtlich 12 Tage bis zwei Wochen aus. Gleichzeitig steht Giacomo Papini nach seiner Knöchelverletzung unmittelbar vor der Rückkehr.'
    },
    sources:['FM-Spielübersicht Red Bull Salzburg – Finn Harps · 23.10.2041','Finn-Harps-Spielerstatistiken · 23.10.2041','FM-Medizinischer Bericht Pol Muñoz · 23.10.2041']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const salzburg=window.FM_CLUBS.find(x=>x.id==='red-bull-salzburg');
  if(salzburg){
    salzburg.meetings=salzburg.meetings||[];
    const meeting={date:'23.10.2041',venue:'A',result:'4:1',competition:'UEFA Champions League · Ligaphase'};
    const i=salzburg.meetings.findIndex(x=>x.date===meeting.date);
    if(i>=0)salzburg.meetings[i]=meeting;else salzburg.meetings.push(meeting);
    salzburg.lastMeeting='23.10.2041 · Red Bull Salzburg 1:4 Finn Harps';
  }

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...current,
    season:'2041/42',format:'Ligaphase',
    matchday3:{...(current.matchday3||{}),finnHarpsResult:{date:'2041-10-23',home:'Red Bull Salzburg',away:'Finn Harps',score:'1:4'}},
    standingsSnapshot:{
      ...(current.standingsSnapshot||{}),date:'2041-10-23',
      finnHarps:{position:2,played:3,wins:3,draws:0,losses:0,goalsFor:9,goalsAgainst:1,goalDifference:8,points:9},
      derryCity:{position:9,played:3,wins:2,draws:0,losses:1,goalsFor:5,goalsAgainst:4,goalDifference:1,points:6},
      redBullSalzburg:{position:30,played:3,wins:0,draws:2,losses:1,goalsFor:4,goalsAgainst:7,goalDifference:-3,points:2}
    },
    headline:'Finn Harps gewinnt 4:1 bei Red Bull Salzburg und bleibt mit drei Siegen aus drei Spielen perfekt.'
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-10-23';
    season.latestHeadline='Champions League: Finn Harps gewinnt 4:1 bei Red Bull Salzburg und steht mit 9 Punkten und 9:1 Toren auf Rang zwei.';
    season.championsLeagueLeaguePhase={
      ...(season.championsLeagueLeaguePhase||{}),played:3,wins:3,draws:0,losses:0,goalsFor:9,goalsAgainst:1,goalDifference:8,points:9,position:2,
      latestResult:'23.10.2041 · Red Bull Salzburg 1:4 Finn Harps'
    };
  }

  [
    {id:'2041-10-23-romano-maisto-salzburg-brace',date:'2041-10-23',player:'Romano Maisto',type:'standout',title:'Doppelpack in Salzburg',detail:'Trifft beim 4:1-Auswärtssieg in der Champions League in der 16. und 78. Minute und erhält Note 8,3.'},
    {id:'2041-10-23-billy-walker-salzburg-goal',date:'2041-10-23',player:'Billy Walker',type:'goal',title:'Tor zum 2:0 in Salzburg',detail:'Erzielt in der 54. Minute das zweite Harps-Tor beim 4:1 in Salzburg.'},
    {id:'2041-10-23-fionn-gavin-salzburg-goal',date:'2041-10-23',player:'Fionn Gavin',type:'goal',title:'Schlusspunkt in Salzburg',detail:'Trifft in der 87. Minute zum 4:1-Endstand.'},
    {id:'2041-10-23-pol-munoz-knee-ligament-strain',date:'2041-10-23',player:'Pol Muñoz',type:'injury',title:'Bänderzerrung im Knie',detail:'Zieht sich beim Sprinten in Salzburg eine Bänderzerrung im Knie zu und fällt voraussichtlich 12 Tage bis zwei Wochen aus.'},
    {id:'2041-10-23-giacomo-papini-return-near',date:'2041-10-23',player:'Giacomo Papini',type:'recovery',title:'Rückkehr steht bevor',detail:'Nach der Knöchelverdrehung aus dem Irland-Debüt beträgt die Restdauer laut medizinischer Übersicht nur noch einen Tag.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-10-23',competition:'UEFA Champions League',fixtureDate:'23.10.2041',
    home:'Red Bull Salzburg',away:'Finn Harps',score:'1:4',location:'Stadion Salzburg · Wals-Siezenheim · 28.553 Zuschauer',
    headline:'Maisto führt Harps zum 4:1: Drei Spiele, drei Siege, neun Punkte',
    subheadline:'Romano Maisto trifft doppelt, Billy Walker und Fionn Gavin ebenfalls. Finn Harps gewinnt den als eng erwarteten Härtetest in Salzburg klar und steht nach drei Spieltagen bei 9:1 Toren.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · RED BULL SALZBURG 1:4 FINN HARPS',
    heroStat:{label:'Champions-League-Start',value:'9 Punkte · 9:1 Tore',note:'3 Spiele · 3 Siege · Rang 2'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Der Analyst hatte ein enges Duell zweier nahezu gleichstarker Mannschaften erwartet. Finn Harps macht daraus einen klaren Auswärtssieg. Die Mannschaft bleibt ruhig gegen Salzburgs direktes Spiel, erzeugt die besseren Chancen und schlägt nach dem zwischenzeitlichen 1:2 sofort wieder zurück.',
    sections:[
      {title:'Maisto eröffnet und beendet die entscheidende Phase',text:'Romano Maisto trifft bereits in der 16. Minute zum 1:0 und stellt in der 78. Minute mit seinem zweiten Treffer auf 3:1. Mit Note 8,3 ist er der auffälligste Harps-Spieler.'},
      {title:'Walker erhöht nach der Pause',text:'Billy Walker macht in der 54. Minute das 2:0. Salzburg kommt nur 13 Minuten später durch Dylan van Huizen noch einmal heran.'},
      {title:'Kein Wackeln nach dem Anschlusstreffer',text:'Der vielleicht wichtigste Abschnitt folgt nach dem 1:2. Finn Harps fällt nicht zurück, sondern stellt durch Maisto und später Fionn Gavin auf 4:1. Die Reaktion wirkt reif und kontrolliert.'},
      {title:'Salzburg bleibt offensiv klein',text:'Die Gastgeber kommen insgesamt nur auf vier Schüsse und einen Abschluss aufs Tor. Finn Harps produziert zwölf Abschlüsse, sechs davon aufs Tor, und gewinnt das xG-Duell mit 2,31:0,74.'},
      {title:'Drei aus drei in Europa',text:'Nach Siegen gegen Manchester United und Celta Vigo folgt nun der erste Champions-League-Auswärtssieg der Ligaphase. Die Bilanz lautet neun Punkte und 9:1 Tore; Finn Harps liegt in der Momentaufnahme auf Rang zwei.'},
      {title:'Pol raus, Papini fast zurück',text:'Pol Muñoz zieht sich eine Bänderzerrung im Knie zu und fällt voraussichtlich 12 Tage bis zwei Wochen aus. Gleichzeitig ist Giacomo Papinis Rückkehr nach seiner Knöchelverdrehung laut medizinischer Übersicht nur noch etwa einen Tag entfernt.'}
    ],
    strengthsTitle:'WAS DER SIEG ZEIGT',strengthsHeading:'Effizienz, Ruhe und europäische Reife',
    strengths:['4 Auswärtstore','12:4 Schüsse','6:1 Schüsse aufs Tor','2,31:0,74 xG','Maisto-Doppelpack','Nur ein Salzburger Schuss aufs Tor','3 Siege aus 3 Champions-League-Spielen','9:1 Tore in der Ligaphase'],
    vulnerabilitiesTitle:'DER PREIS DES ABENDS',vulnerabilitiesHeading:'Pol Muñoz fällt aus',
    vulnerabilities:['Bänderzerrung im Knie bei Pol Muñoz','Voraussichtliche Pause: 12 Tage bis 2 Wochen','Kader bleibt durch weitere Rückkehrer trotzdem breit'],
    verdictHeading:'Finn Harps startet wie ein Topklub',
    verdict:'United geschlagen, Celta zerlegt, Salzburg auswärts kontrolliert: Nach drei Spieltagen ist der perfekte Start kein Zufallsprodukt mehr. Die Harps erzeugen mehr Chancen als ihre Gegner, verteidigen den eigenen Strafraum sauber und besitzen inzwischen genug Erfahrung, um auch nach einem Anschlusstreffer nicht die Ordnung zu verlieren.',
    sources:['FM-Spielübersicht Red Bull Salzburg – Finn Harps · 23.10.2041','Finn-Harps-Spielerstatistiken · 23.10.2041','FM-Medizinischer Bericht Pol Muñoz · 23.10.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-23-red-bull-salzburg-result',date:'2041-10-23',season:2041,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · 3. SPIELTAG',
    title:'Drei aus drei: Harps gewinnen 4:1 in Salzburg',
    summary:'Maisto trifft doppelt, Walker und Gavin ebenfalls. Finn Harps steht mit neun Punkten und 9:1 Toren auf Rang zwei. Pol Muñoz fällt rund zwei Wochen aus, Papini steht vor dem Comeback.',
    href:'presse.html?id=2041-10-23-red-bull-salzburg-finn-harps-spielbericht',
    entities:['finn-harps','red-bull-salzburg','romano-maisto','billy-walker','fionn-gavin','pol-munoz','giacomo-papini','champions-league','season-2041']
  });
})();