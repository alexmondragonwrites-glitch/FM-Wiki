(()=>{
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtures=[
    {date:'2041-09-26',opponent:'Aserbaidschan',venue:'Auswärts',stadium:'Tofiq-Bəhramov-Stadion',competition:'WM-Qualifikation',opponentRank:170},
    {date:'2041-09-29',opponent:'Zypern',venue:'Heim',stadium:'Aviva Stadium',competition:'WM-Qualifikation',opponentRank:86},
    {date:'2041-10-03',opponent:'Tschechien',venue:'Heim',stadium:'Aviva Stadium',competition:'WM-Qualifikation',opponentRank:54},
    {date:'2041-10-06',opponent:'Kroatien',venue:'Auswärts',stadium:'Poljud-Stadion',competition:'WM-Qualifikation',opponentRank:36}
  ];

  const squad=[
    {name:'Evan Reilly',role:'Mitspielender Torwart',position:'TW',club:'Finn Harps',possibleDebut:true,lastFive:6.80},
    {name:'Callum Brennan',role:'Inverser Flügelverteidiger',position:'V (R)',club:'Finn Harps',appearances:2,goals:1,rating:7.35,lastFive:7.36},
    {name:'Darcy Andrews',role:'Ballspielender Verteidiger',position:'V (Z)',club:'Finn Harps',appearances:4,goals:0,rating:6.92,lastFive:6.90},
    {name:'Mareks Istrankins',role:'Ballspielender Verteidiger',position:'V (Z)',club:'Finn Harps',appearances:'1 (2)',goals:0,rating:6.83,lastFive:7.06},
    {name:'Colum Winnall',role:'Inverser Außenverteidiger',position:'V/FV (L)',appearances:'0 (1)',goals:0,rating:6.60,lastFive:6.72},
    {name:'Callum Duggan',role:'Zurückgezogener Spielmacher',position:'V (RZ), DM',appearances:3,goals:0,rating:6.60,lastFive:6.66},
    {name:'Justin Ramsey',role:'Mezzala',position:'M (Z), ST (Z)',club:'Finn Harps',appearances:4,goals:0,rating:6.88,lastFive:6.92},
    {name:"Cormac O'Kane",role:'Box-to-Box-Mittelfeldspieler',position:'DM, M/OM (Z)',club:'Finn Harps',appearances:4,goals:1,rating:6.83,lastFive:6.78},
    {name:'Giacomo Papini',role:'Inverser Flügelspieler',position:'M (RZ), OM (R)',club:'Finn Harps',possibleDebut:true,lastFive:7.52},
    {name:'Shane Fox',role:'Inverser Außenstürmer',position:'M/OM (RL)',appearances:1,goals:0,rating:6.30,lastFive:6.82},
    {name:"Harry O'Leary",role:'Stoßstürmer',position:'ST (Z)',appearances:'3 (1)',goals:4,rating:7.72,lastFive:7.46},
    {name:'Jayson Devitt',position:'TW',possibleDebut:true,lastFive:6.20},
    {name:'Simon Neville',position:'V (RL), FV/OM (R)',appearances:'1 (1)',goals:0,rating:6.55,lastFive:6.66},
    {name:'Billy Walker',position:'M/OM (R)',club:'Finn Harps',appearances:2,goals:0,rating:6.90,lastFive:6.96},
    {name:'Ben Barry',position:'ST (Z)',club:'Finn Harps',possibleDebut:true,u21Caps:4,u21Goals:8,lastFive:8.75},
    {name:'Kevin Kelly',position:'V (LZ)',club:'Finn Harps',appearances:4,goals:0,rating:6.67,lastFive:6.70},
    {name:'Ronan Reilly',position:'M/OM (Z)'},
    {name:'Brendan McHugh',position:'OM (L), ST (Z)',appearances:'1 (3)',goals:1,rating:6.62},
    {name:'Tariq Benson',position:'V (RZ), DM'},
    {name:'Richard Wilson',position:'M (L), OM (LZ)',lastFive:7.00},
    {name:'Brian Walsh',position:'TW',appearances:2,goals:0,rating:7.05,lastFive:7.22},
    {name:'Brendan Costello',position:'V (Z), DM',appearances:'2 (2)',goals:0,rating:6.67,lastFive:6.67},
    {name:"Jim O'Neill",position:'DM, M/OM (Z)',club:'Finn Harps',appearances:'3 (1)',goals:0,rating:6.72,lastFive:6.66,suspended:true}
  ];

  Object.assign(window.FM_IRELAND,{
    title:'Irland 2041',updated:'18.09.2041',competition:'WM-Qualifikation',group:'WM-Qualifikation · Herbst 2041',
    managerContext:'Ryan Flannigan · Doppelfunktion Finn Harps und Irland',
    nextMatch:{opponent:'Aserbaidschan',venue:'Auswärts',date:'26.09.2041',stadium:'Tofiq-Bəhramov-Stadion'},
    upcomingMatches:fixtures,
    players:squad,
    possibleDebuts:['Giacomo Papini','Ben Barry','Evan Reilly','Jayson Devitt'],
    harpsCore:['Evan Reilly','Callum Brennan','Darcy Andrews','Mareks Istrankins','Justin Ramsey',"Cormac O'Kane",'Giacomo Papini','Billy Walker','Ben Barry','Kevin Kelly',"Jim O'Neill"],
    harpsPlayersInSquad:11,
    squadHeadline:'Flannigan nominiert Irland für vier WM-Qualifikationsspiele. Elf Nationalspieler stehen bei Finn Harps unter Vertrag.'
  });

  [
    {id:'2041-09-18-giacomo-papini-possible-ireland-debut',date:'2041-09-18',player:'Giacomo Papini',type:'nationalteam',title:'Erstes Irland-Länderspiel möglich',detail:'Papini steht im Kader für die WM-Qualifikationsspiele gegen Aserbaidschan, Zypern, Tschechien und Kroatien.'},
    {id:'2041-09-18-ben-barry-possible-ireland-debut',date:'2041-09-18',player:'Ben Barry',type:'nationalteam',title:'A-Team-Debüt möglich',detail:'Der Finn-Harps-Stürmer steht nach 4 U21-Länderspielen und 8 U21-Toren erstmals vor einem möglichen Einsatz für Irlands A-Nationalmannschaft.'},
    {id:'2041-09-18-evan-reilly-possible-ireland-debut',date:'2041-09-18',player:'Evan Reilly',type:'nationalteam',title:'A-Team-Debüt möglich',detail:'Der Finn-Harps-Torhüter gehört zum Kader für den kommenden WM-Qualifikationsblock.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-09-18-irland-wm-quali-kader',type:'Nationalteam-Vorbericht',date:'2041-09-18',competition:'WM-Qualifikation',
    headline:'Flannigan beruft Irland-Kader: Papini vor möglichem Debüt',
    subheadline:'Vier WM-Qualifikationsspiele in elf Tagen warten auf Irland. Elf Spieler des Kaders stehen bei Finn Harps unter Vertrag; Giacomo Papini, Ben Barry, Evan Reilly und Jayson Devitt könnten ihr A-Länderspieldebüt feiern.',
    label:'IRLAND · WM-QUALIFIKATION · KADER',
    heroStat:{label:'Finn-Harps-Spieler im Kader',value:'11',note:'Vier mögliche A-Team-Debüts'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Nach dem Champions-League-Block mit Finn Harps wechselt Ryan Flannigan direkt zur Nationalmannschaft. Irland bestreitet innerhalb von elf Tagen vier WM-Qualifikationsspiele. Der Kader trägt dabei deutlich die Handschrift des Klubprojekts aus Donegal.',
    sections:[
      {title:'Papini kann sein Irland-Debüt feiern',text:'Giacomo Papini steht nach seinem Verbandswechsel erstmals vor einem möglichen Einsatz für Irlands A-Nationalmannschaft. Im aktuellen Kader wird er als inverser Flügelspieler geführt.'},
      {title:'Barry und Reilly gehören zur nächsten Welle',text:'Ben Barry und Evan Reilly stehen ebenfalls vor einem möglichen Debüt. Barry bringt aus der U21 bereits vier Länderspiele und acht Tore mit.'},
      {title:'Elf Harps-Spieler prägen den Kader',text:'Evan Reilly, Callum Brennan, Darcy Andrews, Mareks Istrankins, Justin Ramsey, Cormac O’Kane, Giacomo Papini, Billy Walker, Ben Barry, Kevin Kelly und Jim O’Neill stehen bei Finn Harps unter Vertrag.'},
      {title:'Vier Spiele, zwei unterschiedliche Aufgaben',text:'Aserbaidschan und Zypern eröffnen den Block, danach folgen mit Tschechien und Kroatien die nominell stärkeren Gegner. Besonders die Reise ins Poljud-Stadion bildet den harten Abschluss.'},
      {title:'O’Leary kommt mit Torform',text:'Harry O’Leary steht im aktuellen Nationalteam-Datensatz bei vier Toren aus drei Starts und einem Joker-Einsatz und einer Durchschnittsnote von 7,72.'},
      {title:'O’Neill ist gesperrt markiert',text:'Jim O’Neill ist im bereitgestellten Mannschaftsexport mit dem Status „Gsp“ geführt und wird deshalb im Wiki für diesen Kaderblock als gesperrt markiert.'}
    ],
    keyDuelsTitle:'DIE NÄCHSTEN SPIELE',keyDuelsHeading:'Vier WM-Qualifikationsspiele in elf Tagen',
    keyDuels:fixtures.map(f=>({title:`${f.date} · ${f.opponent}`,text:`${f.venue} · ${f.stadium} · Gegner-Rang ${f.opponentRank}`})),
    verdictHeading:'Der Harps-Kern wird zum Nationalteam-Kern',
    verdict:'Elf Spieler eines einzigen irischen Klubs im Nationalteam-Kader zeigen, wie stark Finn Harps inzwischen die Auswahl prägt. Gleichzeitig öffnet Flannigan die Tür für die nächste Generation: Papini, Barry, Reilly und Devitt können in diesem Qualifikationsblock erstmals A-Länderspielminuten sammeln.',
    sourcesHeading:'Kader und Spielplan',
    sourcesNote:'Der Eintrag basiert ausschließlich auf dem bereitgestellten Football-Manager-Artikel und Mannschaftsexport. Ein exaktes Veröffentlichungsdatum des Artikels ist im Screenshot nicht sichtbar; der Wiki-Snapshot bleibt deshalb auf dem bestehenden Stichtag 18.09.2041.',
    sources:['FM-Artikel „Flannigan gibt Irland-Kader bekannt“','FM-Mannschaftsexport Irland · WM-Qualifikationsblock']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-18-irland-wm-quali-kader',date:'2041-09-18',season:2041,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'IRLAND · WM-QUALIFIKATION',title:'Elf Harps-Spieler im Irland-Kader',
    summary:'Vier Qualifikationsspiele in elf Tagen. Papini, Ben Barry, Evan Reilly und Jayson Devitt könnten ihr A-Länderspieldebüt feiern.',
    href:'presse.html?id=2041-09-18-irland-wm-quali-kader',entities:['ireland','finn-harps','giacomo-papini','ben-barry','evan-reilly','season-2041']
  });
})();