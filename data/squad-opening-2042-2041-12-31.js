(()=>{
  window.FM_SQUAD_SNAPSHOTS=window.FM_SQUAD_SNAPSHOTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYERS=window.FM_PLAYERS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };
  const slug=name=>name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

  const players=[
    {name:'Paulo Henrique',role:'Mitspielender Torwart',position:'TW',age:27,height:'188 cm',winPct:83,appearances:'40',starts:40,subs:0,assists:0,goals:0,lastFive:7.12,avgRating:7.16,load:'Gering',firstXI:true},
    {name:'Callum Brennan',role:'Inverser Flügelverteidiger',position:'V (R)',age:20,height:'174 cm',winPct:87,appearances:'27 (20)',starts:27,subs:20,assists:7,goals:1,lastFive:7.16,avgRating:6.96,load:'Gering',firstXI:true},
    {name:'Darcy Andrews',role:'Ballspielender Verteidiger',position:'V (Z)',age:28,height:'184 cm',winPct:84,appearances:'39 (4)',starts:39,subs:4,assists:3,goals:1,lastFive:7.20,avgRating:7.12,load:'Gering',firstXI:true},
    {name:'Mareks Istrankins',role:'Ballspielender Verteidiger',position:'V (Z)',age:19,height:'184 cm',winPct:88,appearances:'26 (7)',starts:26,subs:7,assists:2,goals:1,lastFive:7.22,avgRating:7.06,load:'Gering',firstXI:true},
    {name:'Kevin Kelly',role:'Inverser Flügelverteidiger',position:'V (LZ)',age:22,height:'183 cm',winPct:85,appearances:'38 (3)',starts:38,subs:3,assists:3,goals:4,lastFive:6.84,avgRating:6.97,load:'Gering',firstXI:true},
    {name:"Jim O'Neill",role:'Zurückgezogener Spielmacher',position:'DM, M/OM (Z)',age:28,height:'180 cm',winPct:84,appearances:'30 (15)',starts:30,subs:15,assists:1,goals:3,lastFive:6.82,avgRating:6.89,load:'Gering',firstXI:true},
    {name:'Daryl Frame',role:'Mezzala',position:'DM, M/OM (Z)',age:20,height:'178 cm',winPct:81,appearances:'37 (11)',starts:37,subs:11,assists:8,goals:21,lastFive:6.76,avgRating:7.19,load:'Gering',firstXI:true},
    {name:'Justin Ramsey',role:'Box-to-Box-Mittelfeldspieler',position:'M (Z), ST (Z)',age:22,height:'180 cm',winPct:81,appearances:'41 (12)',starts:41,subs:12,assists:10,goals:32,lastFive:7.00,avgRating:7.16,load:'Gering',firstXI:true},
    {name:'Billy Walker',role:'Inverser Flügelspieler',position:'M/OM (R)',age:20,height:'169 cm',winPct:83,appearances:'21 (25)',starts:21,subs:25,assists:20,goals:6,lastFive:6.84,avgRating:7.21,load:'Gering',firstXI:true},
    {name:'Romano Maisto',role:'Inverser Außenstürmer',position:'FV (L), M/OM (LZ)',age:21,height:'176 cm',winPct:83,appearances:'31 (16)',starts:31,subs:16,assists:6,goals:14,lastFive:7.12,avgRating:7.17,load:'Gering',firstXI:true},
    {name:'Emerson Escárcega',role:'Stoßstürmer',position:'ST (Z)',age:31,height:'177 cm',winPct:86,appearances:'12 (2)',starts:12,subs:2,assists:2,goals:12,lastFive:7.14,avgRating:7.41,load:'Gering',firstXI:true},
    {name:'Gustavo da Silva',position:'V (RLZ)',age:20,height:'195 cm',winPct:83,appearances:'21 (19)',starts:21,subs:19,assists:1,goals:3,lastFive:7.02,avgRating:6.89,load:'Gering'},
    {name:'Basile Rouviere',position:'M/OM (LZ)',age:30,height:'169 cm',winPct:80,appearances:'12 (18)',starts:12,subs:18,assists:4,goals:3,lastFive:6.92,avgRating:6.98,load:'Gering'},
    {name:'Amir Mašić',position:'DM, M (Z)',age:23,height:'181 cm',winPct:80,appearances:'26 (14)',starts:26,subs:14,assists:2,goals:0,lastFive:6.76,avgRating:6.91,load:'Gering'},
    {name:'Diego Fernández',position:'V (R), DM, M (Z)',age:21,height:'185 cm',winPct:81,appearances:'35 (13)',starts:35,subs:13,assists:8,goals:3,lastFive:7.14,avgRating:7.03,load:'Gering'},
    {name:'Daniele Di Maio',position:'V (Z), DM',age:21,height:'184 cm',winPct:85,appearances:'10 (3)',starts:10,subs:3,assists:1,goals:4,lastFive:7.30,avgRating:7.32,load:'Gering'},
    {name:'Dom Docherty',position:'M (L), OM (RL)',age:24,height:'172 cm',winPct:79,appearances:'21 (7)',starts:21,subs:7,assists:7,goals:1,lastFive:7.14,avgRating:6.95,load:'Gering'},
    {name:"Cormac O'Kane",position:'DM, M/OM (Z)',age:26,height:'185 cm',winPct:82,appearances:'32 (18)',starts:32,subs:18,assists:14,goals:10,lastFive:6.74,avgRating:7.23,load:'Gering'},
    {name:'Jake Roberts',position:'M (LZ)',age:20,height:'173 cm',winPct:85,appearances:'23 (17)',starts:23,subs:17,assists:8,goals:6,lastFive:7.16,avgRating:6.95,load:'Gering'},
    {name:'Ben Barry',position:'M (Z), ST (Z)',age:18,height:'182 cm',winPct:100,appearances:'8 (11)',starts:8,subs:11,assists:1,goals:7,lastFive:7.30,avgRating:7.03,load:'Gering'},
    {name:'Pol Muñoz',position:'M (LZ), OM (RLZ)',age:21,height:'186 cm',winPct:94,appearances:'7 (10)',starts:7,subs:10,assists:2,goals:3,lastFive:7.08,avgRating:7.06,load:'Gering'},
    {name:'Giacomo Papini',position:'M (RZ), OM (R)',age:28,height:'195 cm',winPct:77,appearances:'34 (10)',starts:34,subs:10,assists:6,goals:5,lastFive:6.84,avgRating:7.03,load:'Gering'},
    {name:'Fionn Gavin',position:'M (Z), ST (Z)',age:17,height:'176 cm',winPct:100,appearances:'1 (5)',starts:1,subs:5,assists:0,goals:7,lastFive:7.06,avgRating:7.75,load:'Gering'},
    {name:'Torric Bruce',position:'V (Z)',age:22,height:'193 cm',winPct:84,appearances:'36 (7)',starts:36,subs:7,assists:0,goals:4,lastFive:6.86,avgRating:7.04,load:'Gering'},
    {name:'Mark Kenny',position:'V (RZ)',age:18,height:'182 cm',winPct:null,appearances:null,starts:null,subs:null,assists:null,goals:null,lastFive:6.92,avgRating:null,load:'Gering'},
    {name:'Thomas Kenny',position:'TW',age:31,height:'191 cm',winPct:50,appearances:'16',starts:16,subs:0,assists:0,goals:0,lastFive:6.80,avgRating:6.89,load:'Gering'},
    {name:'Graham Varma',position:'TW',age:24,height:'186 cm',winPct:null,appearances:null,starts:null,subs:null,assists:null,goals:null,lastFive:7.30,avgRating:null,load:'Gering'},
    {name:'Evan Reilly',position:'TW',age:19,height:'184 cm',winPct:85,appearances:'20',starts:20,subs:0,assists:0,goals:0,lastFive:6.90,avgRating:7.10,load:'Gering'},
    {name:'Billy Kendrick',position:'V (RL), M (Z)',age:22,height:'181 cm',condition:98,winPct:33,appearances:'9',starts:9,subs:0,assists:1,goals:0,lastFive:6.64,avgRating:6.47,load:'Gering'},
    {name:'Eduardo Blanco',position:'OM (R), ST (Z)',age:29,height:'175 cm',condition:94,info:'TL',winPct:55,appearances:'29',starts:29,subs:0,assists:2,goals:15,lastFive:7.00,avgRating:7.08,load:'Normal'}
  ];

  const snapshot={
    id:'finn-harps-opening-squad-2042',date:'2041-12-31',season:2042,label:'Kader zum Start der Saison 2042',
    squadSize:players.length,players,
    firstXI:players.filter(player=>player.firstXI).map(player=>({name:player.name,role:player.role,position:player.position})),
    ageStructure:{underOrEqual21:players.filter(player=>player.age<=21).length,youngest:Math.min(...players.map(player=>player.age)),oldest:Math.max(...players.map(player=>player.age))},
    note:'Snapshot aus dem FM-Kaderexport vom 31.12.2041. Die aufgeführten Einsatz-, Tor-, Vorlagen- und Notenwerte stammen aus dem Export und bilden den Leistungsstand vor dem Start der Saison 2042 ab; fehlende Werte werden nicht ergänzt.'
  };
  upsert(window.FM_SQUAD_SNAPSHOTS,snapshot);
  window.FM_CURRENT_SQUAD_SNAPSHOT=snapshot;

  players.forEach(row=>{
    let player=window.FM_PLAYERS.find(item=>item.name===row.name);
    if(!player){
      player={id:slug(row.name),name:row.name,nation:'',group:'Nicht zugeordnet',availability:'Einsatzbereit'};
      window.FM_PLAYERS.push(player);
    }
    player.profileDate='2041-12-31';
    player.age=row.age;
    player.height=row.height;
    player.positionCode=row.position;
    if(row.role)player.systemRole=row.role;
    player.opening2042={...row};
    if(row.appearances!==null&&row.appearances!==undefined)player.appearances=row.appearances;
    if(row.goals!==null&&row.goals!==undefined)player.goals=row.goals;
    if(row.assists!==null&&row.assists!==undefined)player.assists=row.assists;
    if(row.avgRating!==null&&row.avgRating!==undefined)player.avgRating=row.avgRating;
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2041-12-31-finn-harps-opening-squad-2042',date:'2041-12-31',type:'squad',player:'Finn Harps',
    title:'30 Spieler bilden den ersten Kader für 2042',
    detail:'Der erste Kadersnapshot der neuen Saison umfasst 30 Spieler. 14 davon sind höchstens 21 Jahre alt; Fionn Gavin ist mit 17 der jüngste Spieler.'
  });

  const report={
    id:'2041-12-31-finn-harps-kader-2042',type:'Kader',date:'2041-12-31',competition:'Finn Harps · Saison 2042',
    headline:'Der erste Kader für 2042 steht',
    subheadline:'Finn Harps geht mit einem 30-Mann-Kader in die neue Saison. Die Mannschaft verbindet die etablierte Achse um Henrique, O’Neill und Escárcega mit einer außergewöhnlich jungen Gruppe um Frame, Brennan, Istrankins, Barry und Gavin.',
    label:'KADERSTART · SAISON 2042 · 31.12.2041',
    heroStat:{label:'Kadergröße',value:'30 Spieler',note:'14 Spieler sind 21 oder jünger · jüngster Spieler: Fionn Gavin, 17'},
    backlink:{href:'kader.html',label:'← ZUR KADERZENTRALE'},
    intro:'Der erste Export vor der Saison 2042 zeigt einen tiefen Finn-Harps-Kader mit zahlreichen Mehrpositionsspielern. Besonders auffällig bleibt die taktische Flexibilität: Justin Ramsey beginnt in der gezeigten Struktur als Box-to-Box-Mittelfeldspieler, obwohl er zugleich zentraler Stürmer ist, während Diego Fernández Verteidigung und Mittelfeld verbindet.',
    sections:[
      {title:'Die gezeigte erste Elf',text:'Paulo Henrique steht im Tor. Davor sind Callum Brennan, Darcy Andrews, Mareks Istrankins und Kevin Kelly eingeordnet. Im Zentrum folgen Jim O’Neill, Daryl Frame und Justin Ramsey; Billy Walker und Romano Maisto besetzen die offensiven Flügel, Emerson Escárcega ist die Spitze.'},
      {title:'Tiefe in fast jeder Linie',text:'Mit Gustavo da Silva, Basile Rouviere, Amir Mašić, Diego Fernández, Daniele Di Maio, Dom Docherty, Cormac O’Kane, Jake Roberts, Ben Barry, Pol Muñoz, Giacomo Papini, Fionn Gavin und Torric Bruce steht hinter der ersten Elf eine außergewöhnlich breite Gruppe bereit.'},
      {title:'Vier weitere Torhüter und zusätzliche Tiefe',text:'Neben Paulo Henrique führt der Export Thomas Kenny, Graham Varma und Evan Reilly als weitere Torhüter. Mark Kenny, Billy Kendrick und Eduardo Blanco komplettieren den erfassten 30-Mann-Kader.'},
      {title:'Jugend ist längst kein Nebenprojekt mehr',text:'14 der 30 Spieler sind höchstens 21 Jahre alt. Fionn Gavin ist mit 17 der jüngste, Ben Barry und Mark Kenny sind 18, Mareks Istrankins und Evan Reilly 19. Die nächste Generation sitzt damit nicht außerhalb des Kaders, sondern mitten in ihm.'}
    ],
    verdictHeading:'Mehr Optionen als feste Schubladen',
    verdict:'Der Kader für 2042 wirkt weniger wie eine Sammlung starrer Positionsprofile als wie ein Netzwerk aus Spielern, die mehrere Linien verbinden können. Gerade Ramsey, Barry, Fernández, Maisto, Di Maio, Mašić und Pol Muñoz erlauben während eines Spiels Rollenwechsel, ohne dass Finn Harps dafür zwingend wechseln muss.',
    sources:['FM-Kaderexport Finn Harps · 31.12.2041 · Saisonstart 2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-12-31-finn-harps-opening-squad-2042',date:'2041-12-31',season:2042,category:'Kader',accent:'green',featured:true,
    eyebrow:'SAISON 2042 · KADERSTART',title:'30 Spieler: Finn Harps startet in die neue Saison',
    summary:'Der erste Kadersnapshot für 2042 umfasst 30 Spieler, darunter 14 Akteure im Alter von höchstens 21 Jahren. Ramsey ist in der gezeigten ersten Elf als Box-to-Box-Mittelfeldspieler eingeordnet, Escárcega als Stoßstürmer.',
    href:'presse.html?id=2041-12-31-finn-harps-kader-2042',entities:['finn-harps','season-2042','squad']
  });
})();