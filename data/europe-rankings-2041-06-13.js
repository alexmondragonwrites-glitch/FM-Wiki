(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_UEFA_RANKINGS=window.FM_UEFA_RANKINGS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const ranking={
    id:'uefa-rankings-2041-06-13',
    date:'2041-06-13',
    season:2041,
    clubRanking:{
      club:'Finn Harps',
      position:1,
      previousPosition:1,
      status:'Europäische Vereinsrangliste · Platz 1 verteidigt',
      note:'Finn Harps verteidigt für die kommende Saison den ersten Platz der europäischen Vereinsrangliste.'
    },
    countryRanking:{
      country:'Irland',
      position:9,
      previousPosition:10,
      movement:1,
      overtook:'Niederlande',
      status:'UEFA 5-Jahreswertung · Rang 9',
      note:'Irland steigt um einen Rang auf Platz 9 und überholt die Niederlande.'
    },
    championsLeagueAllocation2042_43:[
      {stage:'Ligaphase',clubs:1,previousClubs:1},
      {stage:'3. Qualifikationsrunde des Platzierungswegs',clubs:1,previousClubs:0},
      {stage:'2. Qualifikationsrunde des Platzierungswegs',clubs:0,previousClubs:1}
    ],
    biggestClubClimber:{club:'Olimpija Ljubljana',from:484,to:251,gain:233}
  };
  upsert(window.FM_UEFA_RANKINGS,ranking);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.uefaRanking={
      clubPosition:1,
      clubStatus:'Platz 1 der europäischen Vereinsrangliste verteidigt',
      irelandPosition:9,
      irelandPreviousPosition:10,
      irelandOvertook:'Niederlande',
      championsLeague2042_43:ranking.championsLeagueAllocation2042_43
    };
  }

  const harps=(window.FM_CLUBS||[]).find(x=>x.id==='finn-harps'||x.name==='Finn Harps');
  if(harps){
    harps.europeanRanking={position:1,previousPosition:1,updated:'2041-06-13',status:'Europas Nummer eins'};
    harps.tags=[...(harps.tags||[]).filter(tag=>!String(tag).includes('Europäische Vereinsrangliste')),'Europäische Vereinsrangliste: Platz 1'];
  }

  const report={
    id:'2041-06-13-europaeische-ranglisten',
    type:'UEFA-Ranglisten',
    date:'2041-06-13',
    competition:'UEFA',
    fixtureDate:'Saison 2041/42 · Ausblick 2042/43',
    home:'Finn Harps · Platz 1',
    away:'Irland · Rang 9',
    location:'Europäische Vereinsrangliste und UEFA 5-Jahreswertung',
    headline:'Finn Harps bleibt Europas Nummer eins – Irland klettert auf Rang neun',
    subheadline:'Die Harps verteidigen Platz eins der europäischen Vereinsrangliste. Gleichzeitig steigt Irland in der UEFA-5-Jahreswertung um einen Rang und überholt die Niederlande.',
    label:'UEFA-RANGLISTEN · 2041',
    heroStat:{label:'Europäische Vereinsrangliste',value:'1.',note:'Finn Harps verteidigt die Spitzenposition'},
    backlink:{href:'saison.html',label:'← ZUR SAISON 2041'},
    intro:'Die sportliche Entwicklung der Finn Harps ist inzwischen nicht mehr nur an Titeln und einzelnen großen Abenden abzulesen. Für die kommende Saison bleibt der Klub auf Platz eins der europäischen Vereinsrangliste. Parallel dazu setzt sich der Aufstieg des irischen Fußballs fort: Irland verbessert sich in der UEFA-5-Jahreswertung auf Rang neun und zieht an den Niederlanden vorbei.',
    sections:[
      {title:'Finn Harps verteidigt Platz eins in Europa',text:'Die europäische Vereinsrangliste führt Finn Harps auch in der kommenden Saison an erster Stelle. Damit ist der Klub nicht nur Titelverteidiger bei der Klub-WM, sondern über mehrere Spielzeiten hinweg der am höchsten eingestufte Verein Europas.'},
      {title:'Irland steigt auf Rang neun',text:'In der UEFA-5-Jahreswertung verbessert sich Irland um einen Platz von Rang zehn auf Rang neun. Dabei wird die Niederlande überholt. Der nationale Aufstieg ist damit längst mehr als eine reine Finn-Harps-Geschichte und schlägt sich zunehmend in den europäischen Startplätzen nieder.'},
      {title:'Die Champions-League-Verteilung verändert sich',text:'Für die UEFA Champions League 2042/43 erhält Irland weiterhin einen direkten Platz in der Ligaphase. Zusätzlich steht nun ein Startplatz in der dritten Qualifikationsrunde des Platzierungswegs zur Verfügung. Der bisherige Platz in der zweiten Qualifikationsrunde des Platzierungswegs entfällt entsprechend.'},
      {title:'Vom irischen Außenseiter zum europäischen Faktor',text:'Die Kombination aus Europas Vereinsranglistenplatz eins und Irlands Rang neun in der Länderwertung zeigt zwei Ebenen derselben Entwicklung. Finn Harps zieht die Spitze nach oben, während die gesamte Liga von den europäischen Ergebnissen und den verbesserten Startbedingungen profitiert.'},
      {title:'Olimpija Ljubljana macht den größten Sprung',text:'Als größter Aufsteiger der veröffentlichten Vereinsrangliste wird Olimpija Ljubljana geführt. Der Klub verbessert sich von Platz 484 auf Rang 251 und gewinnt damit 233 Positionen.'}
    ],
    keyDuelsTitle:'DIE NEUEN EUROPÄISCHEN MARKEN',
    keyDuelsHeading:'Was sich für Finn Harps und Irland verändert',
    keyDuels:[
      {title:'Finn Harps',text:'Platz 1 der europäischen Vereinsrangliste wird für die kommende Saison verteidigt.'},
      {title:'Irland',text:'Aufstieg auf Rang 9 der UEFA-5-Jahreswertung, vorbei an den Niederlanden.'},
      {title:'Champions League 2042/43',text:'Ein direkter Ligaphasenplatz und ein zusätzlicher Einstieg in der dritten Qualifikationsrunde des Platzierungswegs.'},
      {title:'Olimpija Ljubljana',text:'Größter Ranglistenaufsteiger: von 484 auf 251.'}
    ],
    verdictHeading:'Der Aufstieg ist inzwischen strukturell',
    verdict:'Dass Finn Harps Europas Vereinsrangliste anführt, ist die Spitze der Entwicklung. Bedeutender für den irischen Fußball als Ganzes ist Rang neun der 5-Jahreswertung: bessere Zugangswege, mehr europäische Chancen und eine Liga, deren Ergebnisse nicht mehr nur als Ausnahme wahrgenommen werden. Die Harps haben aus einer Erfolgsgeschichte einen Hebel für das gesamte Land gemacht.',
    sourcesHeading:'Offizielle FM-Mitteilungen zu den UEFA-Ranglisten',
    sourcesNote:'Die Daten stammen aus den bereitgestellten Football-Manager-Mitteilungen zur europäischen Vereinsrangliste und zur UEFA-5-Jahreswertung.',
    sources:['Finn Harps verteidigt Platz 1 der europäischen Vereinsrangliste','Irland steigt auf Rang 9 und überholt die Niederlande','Champions-League-Plätze 2042/43: Ligaphase 1, 3. Qualifikationsrunde Platzierungsweg 1, 2. Qualifikationsrunde Platzierungsweg 0','Olimpija Ljubljana steigt von Rang 484 auf 251']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-06-13-europaeische-ranglisten',date:'2041-06-13',season:2041,category:'UEFA',accent:'gold',
    eyebrow:'UEFA-RANGLISTEN · FINN HARPS 1. · IRLAND 9.',
    title:'Harps bleiben Europas Nummer eins, Irland überholt die Niederlande',
    summary:'Finn Harps verteidigt Platz eins der europäischen Vereinsrangliste. Irland verbessert sich in der UEFA-5-Jahreswertung auf Rang neun und erhält für 2042/43 einen zusätzlichen Einstieg in der dritten Champions-League-Qualifikationsrunde des Platzierungswegs.',
    href:'presse.html?id=2041-06-13-europaeische-ranglisten',
    entities:['finn-harps','ireland','uefa','champions-league','season-2041'],featured:false
  });
})();