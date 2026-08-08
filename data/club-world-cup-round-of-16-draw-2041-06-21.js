(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixture={
    id:'2041-06-25-bayern-club-world-cup-round-of-16',
    date:'2041-06-25',season:2041,competition:'FIFA Club World Cup',round:'2. Runde · Achtelfinale',
    home:'Bayern München',away:'Finn Harps',score:'–',homeGoals:null,awayGoals:null,status:'upcoming',
    venue:'Marcel Desailly-Arena, Rennes',attendance:null,weather:null,
    report:'presse.html?id=2041-06-21-klub-wm-achtelfinale-bayern-auslosung',
    summary:'Finn Harps trifft im Achtelfinale der Klub-WM 2041 am 25. Juni auf Bayern München. Der Sieger spielt im Viertelfinale gegen Marseille oder Barcelona.'
  };
  upsert(window.FM_FIXTURES,fixture);

  const current=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  const roundOf16=[
    {home:'Santos',away:'Arsenal'},
    {home:'São Paulo',away:'Inter'},
    {home:'Dortmund',away:'Caen'},
    {home:'Real Madrid',away:'Manchester United'},
    {home:'Milan',away:'Internacional'},
    {home:'Monaco',away:'Manchester City'},
    {home:'Marseille',away:'Barcelona'},
    {home:'Bayern München',away:'Finn Harps',featured:true}
  ];
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...current,
    id:'club-world-cup-2041',year:2041,status:'round-of-16',titleHolder:'Finn Harps',group:'H',
    groupProgress:{played:3,wins:2,draws:1,losses:0,goalsFor:4,goalsAgainst:2,points:7},
    knockout:{
      round:'Achtelfinale',label:'2. Runde',date:'2041-06-25',fixtureId:fixture.id,
      opponent:'Bayern München',venue:'Marcel Desailly-Arena, Rennes',
      quarterFinalPath:['Marseille','Barcelona'],
      bracket:roundOf16
    },
    headline:'Klub-WM 2041: Finn Harps trifft im Achtelfinale auf Bayern München. Bei einem Sieg wartet Marseille oder Barcelona.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.clubWorldCup={
      ...(season.clubWorldCup||{}),status:'Achtelfinale',titleHolder:true,group:'H',
      played:3,wins:2,draws:1,losses:0,goalsFor:4,goalsAgainst:2,points:7,position:1,
      nextOpponent:'Bayern München',nextMatch:'25.06.2041 · Marcel Desailly-Arena, Rennes',
      quarterFinalPath:'Marseille oder Barcelona'
    };
    season.latestHeadline='Klub-WM 2041: Nach dem Gruppensieg wartet im Achtelfinale Bayern München. Der Sieger trifft im Viertelfinale auf Marseille oder Barcelona.';
  }

  const bayern=(window.FM_CLUBS||[]).find(x=>x.name==='Bayern München'||x.name==='FC Bayern München'||x.id==='bayern-munchen'||x.id==='bayern-muenchen');
  if(bayern){
    bayern.nextMatch={date:'25.06.2041',competition:'FIFA Club World Cup · Achtelfinale',venue:'Marcel Desailly-Arena, Rennes',opponent:'Finn Harps'};
    bayern.clubWorldCup2041={stage:'Achtelfinale',opponent:'Finn Harps',date:'25.06.2041'};
  }

  const report={
    id:'2041-06-21-klub-wm-achtelfinale-bayern-auslosung',type:'Auslosung',date:'2041-06-21',competition:'FIFA Club World Cup',
    fixtureDate:'Dienstag, 25.06.2041',home:'Bayern München',away:'Finn Harps',score:'–',
    location:'Marcel Desailly-Arena · Rennes · Kapazität 43.400',
    headline:'Titelverteidiger gegen Bayern: Finn Harps bekommt ein Schwergewicht im Achtelfinale',
    subheadline:'Nach Platz eins in Gruppe H trifft Finn Harps in der 2. Runde auf den FC Bayern München. Der Sieger bekommt es im Viertelfinale mit Marseille oder Barcelona zu tun.',
    label:'FIFA CLUB WORLD CUP · ACHTELFINALE · AUSLOSUNG',
    heroStat:{label:'Nächster Gegner',value:'Bayern München',note:'25. Juni 2041 · Marcel Desailly-Arena, Rennes'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Die Gruppenphase ist überstanden, nun beginnt die K.-o.-Runde. Finn Harps wurde im Achtelfinale der Klub-WM 2041 dem FC Bayern München zugelost. Das Spiel findet am Dienstag, 25. Juni in der Marcel Desailly-Arena in Rennes statt. Der Titelverteidiger bekommt damit bereits in der ersten K.-o.-Runde einen der großen europäischen Namen vor die Brust.',
    sections:[
      {title:'Bayern wartet in der 2. Runde',text:'Die offizielle Auslosung setzt Bayern München gegen Finn Harps an. Bayern wird in der Meldung als Dritter der Bundesliga geführt, Finn Harps geht als amtierender Titelträger in das Duell.'},
      {title:'Der Weg wird danach nicht leichter',text:'Der Sieger des Achtelfinals trifft im Viertelfinale auf den Gewinner der Partie Marseille gegen Barcelona. Schon der erste Teil des K.-o.-Baums ist damit mit europäischen Schwergewichten besetzt.'},
      {title:'Die komplette Achtelfinal-Auslosung',text:'Santos – Arsenal; São Paulo – Inter; Dortmund – Caen; Real Madrid – Manchester United; Milan – Internacional; Monaco – Manchester City; Marseille – Barcelona; Bayern München – Finn Harps.'},
      {title:'Rennes als Schauplatz',text:'Die Partie wird in der Marcel Desailly-Arena ausgetragen. Das Stadion fasst 43.400 Zuschauer. In der Auslosungsmeldung werden Stadionzustand als sehr gut und der Rasen als perfekt angegeben.'},
      {title:'Titelverteidigung unter Druck',text:'Finn Harps gewann die Klub-WM 2037 und reist 2041 als Titelverteidiger in die K.-o.-Phase. Nach sieben Punkten und Platz eins in Gruppe H ist nun jeder weitere Schritt ein einzelnes Entscheidungsspiel.'}
    ],
    strengthsTitle:'WAS FÜR FINN HARPS SPRICHT',strengthsHeading:'Gruppensieg und Erfahrung als Titelverteidiger',
    strengths:['Platz eins in Gruppe H mit sieben Punkten','Sieg gegen Manchester City in der Gruppenphase','Finn Harps geht als Titelverteidiger in die K.-o.-Runde','Bayern muss ebenfalls in einem einzigen Spiel liefern'],
    vulnerabilitiesTitle:'WAS DEN WEG HART MACHT',vulnerabilitiesHeading:'Der K.-o.-Baum lässt keine Verschnaufpause',
    vulnerabilities:['Bayern München bereits im Achtelfinale','Bei einem Weiterkommen wartet Marseille oder Barcelona','Nach dem knappen 1:1 gegen Boca ist die Fehlertoleranz nun praktisch null'],
    verdictHeading:'Ab jetzt gibt es kein Sicherheitsnetz mehr',
    verdict:'Die Gruppenphase endete für Finn Harps mit Platz eins, aber die Auslosung schenkt dem Titelverteidiger keinen weichen Übergang. Bayern im Achtelfinale und danach Marseille oder Barcelona bedeuten, dass die Titelverteidigung spätestens jetzt in den Hochdruckbereich wechselt.',
    sourcesHeading:'Auslosung der 2. Runde',
    sourcesNote:'Der Bericht basiert ausschließlich auf den bereitgestellten Football-Manager-Screenshots zur Achtelfinal-Auslosung der Klub-WM 2041.',
    sources:['FM-Wettbewerbsübersicht FIFA Club World Cup · 2. Runde','FM-Meldung: Club World Cup-Auslosung · Finn Harps zieht Bayern München']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-21-klub-wm-bayern-auslosung',date:'2041-06-21',season:2041,category:'Klub-WM',accent:'blue',featured:true,
    eyebrow:'FIFA CLUB WORLD CUP · ACHTELFINALE',title:'Bayern wartet: Finn Harps bekommt einen schweren K.-o.-Weg',
    summary:'Finn Harps trifft am 25. Juni in Rennes auf Bayern München. Bei einem Sieg wartet im Viertelfinale Marseille oder Barcelona.',
    href:'presse.html?id=2041-06-21-klub-wm-achtelfinale-bayern-auslosung'
  });
})();