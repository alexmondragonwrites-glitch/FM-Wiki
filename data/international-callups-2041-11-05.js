(()=>{
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_INTERNATIONAL_DUTY=window.FM_INTERNATIONAL_DUTY||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const callups=[
    {team:'Irland U19',matchDates:['2041-11-13','2041-11-16','2041-11-19'],players:['Jack Cahill','Callum Hoey','Kevin O’Brien','Callum Bonner','Callum Forde']},
    {team:'Irland U18',matchDates:['2041-11-13','2041-11-16','2041-11-19'],players:['Eoin Kierans','Callum Parke']},
    {team:'Italien',matchDates:['2041-11-14','2041-11-17'],players:['Daniele Di Maio']},
    {team:'Irland U21',matchDates:['2041-11-14','2041-11-18'],players:['Fionn Gavin','Callum McKevitt','Callum Gallagher','Callum Forde','Sean McSweeney','John Ogendo'],note:'Callum Gallagher und Callum Forde sind im Screenshot mit * markiert und momentan nicht im Verein.'},
    {team:'Irland',matchDates:['2041-11-15','2041-11-18'],players:['Callum Brennan','Justin Ramsey','Cormac O’Kane','Jim O’Neill','Darcy Andrews','Kevin Kelly','Billy Walker','Thomas Kenny','Mareks Istrankins','Ben Barry','Evan Reilly'],note:'Thomas Kenny ist im Screenshot mit * markiert und momentan nicht im Verein.'},
    {team:'Wales',matchDates:['2041-11-15','2041-11-18'],players:['Jake Roberts']},
    {team:'Portugal',matchDates:['2041-11-15','2041-11-19'],players:['Gustavo da Silva']},
    {team:'Schottland',matchDates:['2041-11-15','2041-11-19'],players:['Daryl Frame','Dom Docherty']},
    {team:'Schweiz',matchDates:['2041-11-16','2041-11-19'],players:['Amir Mašić']}
  ];

  const roundup={
    id:'2041-11-05-finn-harps-international-callups',date:'2041-11-05',type:'Nominierungen',count:30,callups,
    headline:'30 Nominierungen: Finn Harps schickt einen riesigen Block in die November-Länderspiele',
    summary:'Von der irischen U18 bis zu den A-Nationalteams von Italien, Wales, Portugal, Schottland und der Schweiz sind insgesamt 30 Finn-Harps-Nominierungen für das Novemberfenster gemeldet. Allein Irlands A-Team beruft elf Harps-Spieler.',
    sources:['FM-Posteingang · 30 Spieler für ihr Land abberufen · 05.11.2041']
  };
  upsert(window.FM_INTERNATIONAL_DUTY,roundup);

  callups.forEach(group=>group.players.forEach(player=>{
    const id=`2041-11-05-callup-${player.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}-${group.team.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`;
    upsert(window.FM_PLAYER_UPDATES,{id,date:'2041-11-05',player,type:'nationalteam',title:`Nominiert für ${group.team}`,detail:`Für die November-Länderspiele am ${group.matchDates.map(d=>d.split('-').reverse().join('.')).join(', ')} nominiert.`});
  }));

  const report={
    id:'2041-11-05-finn-harps-30-laenderspielnominierungen',type:'Länderspiel-Nominierungen',date:'2041-11-05',competition:'Nationalteams',
    headline:'30 Berufungen: Finn Harps wird im November zur Nationalmannschaftsfabrik',
    subheadline:'Elf Spieler gehen allein zur irischen A-Nationalmannschaft. Dazu kommen große Harps-Blöcke in Irlands U21, U19 und U18 sowie sechs weitere A-Nationalspieler.',
    label:'FINN HARPS · LÄNDERSPIELFENSTER · NOVEMBER 2041',
    heroStat:{label:'Abstellungen',value:'30 Nominierungen',note:'A-Nationalteams und irische Nachwuchsauswahlen'},
    backlink:{href:'kader.html',label:'← ZUM KADER'},
    intro:'Die nationale Saison ist beendet, doch Ruhe gibt es in Stranorlar nicht. Für das Novemberfenster werden 30 Finn-Harps-Spieler zu ihren Nationalmannschaften abgerufen. Besonders auffällig ist die irische Pyramide: Die Harps stellen Spieler von der U18 über U19 und U21 bis hin zum A-Team.',
    sections:[
      {title:'Elf Harps im irischen A-Team',text:'Callum Brennan, Justin Ramsey, Cormac O’Kane, Jim O’Neill, Darcy Andrews, Kevin Kelly, Billy Walker, Thomas Kenny, Mareks Istrankins, Ben Barry und Evan Reilly sind für die Spiele am 15. und 18. November nominiert.'},
      {title:'Auch die Nachwuchsteams sind voller Harps',text:'Irlands U21 beruft Fionn Gavin, Callum McKevitt, Callum Gallagher, Callum Forde, Sean McSweeney und John Ogendo. In der U19 stehen Jack Cahill, Callum Hoey, Kevin O’Brien, Callum Bonner und Callum Forde; die U18 nimmt Eoin Kierans und Callum Parke mit.'},
      {title:'Sechs weitere A-Nationalspieler',text:'Daniele Di Maio reist zu Italien, Jake Roberts zu Wales, Gustavo da Silva zu Portugal, Daryl Frame und Dom Docherty zu Schottland und Amir Mašić zur Schweiz.'},
      {title:'Papini fehlt im irischen Aufgebot',text:'Giacomo Papini ist in der aufgelisteten irischen A-Nationalmannschaft nicht enthalten. Das passt zum aktuellen Verletzungsstatus nach seiner Oberschenkelzerrung Ende Oktober.'},
      {title:'Der Preis der Weltklasse-Nachwuchsarbeit',text:'Die Nominierungen zeigen nicht nur die Qualität des Profikaders. Dass Finn Harps gleichzeitig mehrere irische Altersstufen beliefert, unterstreicht, wie stark der Klub inzwischen in die gesamte Talentpipeline des Landes hineinwirkt.'}
    ],
    verdictHeading:'Ein Klub, fast eine halbe Nationalmannschaftspyramide',
    verdict:'Sportlich ist die Zahl der Abstellungen ein Luxusproblem. Nach dem Ende der irischen Saison ist die Belastung besser verkraftbar als mitten im Ligabetrieb, gleichzeitig steigt aber das Verletzungsrisiko vor den verbleibenden Champions-League-Spielen. Besonders bemerkenswert bleibt die Breite: Finn Harps stellt nicht nur Stars für mehrere A-Nationalteams, sondern prägt zugleich Irlands Nachwuchsauswahlen.',
    sources:roundup.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-11-05-finn-harps-international-callups',date:'2041-11-05',season:2041,category:'Nationalteam',accent:'green',featured:false,
    eyebrow:'LÄNDERSPIELE · NOVEMBER 2041',title:'30 Harps-Nominierungen für das Novemberfenster',
    summary:'Elf Spieler stehen im irischen A-Team. Weitere Harps sind für Irlands U21, U19 und U18 sowie Italien, Wales, Portugal, Schottland und die Schweiz nominiert.',
    href:'presse.html?id=2041-11-05-finn-harps-30-laenderspielnominierungen',entities:['finn-harps','ireland','jack-cahill','justin-ramsey','ben-barry','season-2041']
  });
})();