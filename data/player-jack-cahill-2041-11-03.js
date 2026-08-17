(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]={...list[index],...item};else list.push(item);
  };

  const player={
    id:'jack-cahill',
    name:'Jack Cahill',
    club:'Finn Harps U19',
    nation:'Irland',
    nationCode:'IRL',
    birthplace:'Letterkenny (Irland)',
    dateOfBirth:'2025-03-24',
    age:16,
    height:'192 cm',
    weight:'77 kg',
    positionCode:'V (Z)',
    group:'Abwehr',
    bestRole:'Innenverteidiger',
    role:'Innenverteidiger-Talent',
    teamStatus:'Perspektivspieler',
    status:'Perspektivspieler',
    personality:'Relativ loyal',
    morale:'Außergewöhnlich',
    preferredFoot:'Rechts',
    leftFoot:'Stark',
    rightFoot:'Sehr stark',
    contractUntil:'2044-12-31',
    wage:'€35',
    transferValue:'€4.3Mio - €6.6Mio',
    currentAbilityShown:84,
    potentialDisplay:'4 goldene Sterne + 1 weißer Stern im Skin; keine numerische PA sichtbar',
    appearances:'0',
    goals:0,
    assists:0,
    avgRating:null,
    availability:'Finn Harps U19',
    rating:4,
    attributes:{
      technical:{
        abschluss:2,ballannahme:8,deckung:11,dribbling:7,ecken:6,elfmeter:8,flanken:6,freistoesse:2,kopfballtechnik:9,passen:9,tackling:11,technik:12,weiteEinwuerfe:10,weitschuesse:5
      },
      mental:{
        aggressivitaet:15,antizipation:10,einsatzfreude:14,entscheidungen:12,flair:4,fuehrungsqualitaeten:4,konzentration:10,mut:9,nervenstaerke:13,ohneBall:7,stellungsspiel:8,teamwork:10,uebersicht:7,zielstrebigkeit:11
      },
      physical:{
        antritt:11,ausdauer:14,balance:9,beweglichkeit:11,grundfitness:11,kraft:9,schnelligkeit:10,sprunghoehe:14
      }
    },
    roles:['Innenverteidiger (V)','Ballspielender Verteidiger (V)','Kompromissloser Innenverteidiger (V)','Halbverteidiger (V)','Libero (V)'],
    summary:'16-jähriger, 192 cm großer irischer Innenverteidiger aus Letterkenny. Noch klar im Entwicklungsstadium, aber mit auffälliger Athletik, Aggressivität und beidfüßigem Profil.',
    strengths:[
      '192 cm Körpergröße und Sprunghöhe 14',
      'Aggressivität 15 und Einsatzfreude 14',
      'Ausdauer 14 und Nervenstärke 13',
      'Technik 12, Entscheidungen 12',
      'Linker Fuß stark, rechter Fuß sehr stark'
    ],
    risks:[
      'Kraft 9 ist für einen 192-cm-Innenverteidiger noch klar ausbaufähig',
      'Stellungsspiel 8 und Konzentration 10 brauchen Entwicklung für Erstliganiveau',
      'Kopfballtechnik 9 und Passen 9 liegen noch deutlich unter seinem langfristigen Zielniveau',
      'Noch ohne Profieinsatz und damit ohne belastbare Senior-Stichprobe'
    ],
    developmentPlan:[
      'Primär in der U19 entwickeln, keine vorschnelle Leihe',
      'Individueller Fokus zunächst Kraft bzw. Defensivpositionierung',
      'Als Innenverteidiger oder ballspielenden Verteidiger schulen',
      'Senior-Minuten nur gezielt in kontrollierten Pflichtspielen geben'
    ],
    future:'Langfristiges Innenverteidiger-Projekt. Seine Größe, Sprungkraft, Aggressivität und beidfüßige Basis geben ihm ein interessantes Fundament; für die erste Mannschaft muss vor allem die defensive Reife wachsen.',
    verdict:'Rohes IV-Talent mit sehr gutem körperlichem Rahmen',
    page:'spieler.html?id=jack-cahill',
    sourceDate:'2041-11-03'
  };

  upsert(window.FM_PLAYERS,player);

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2041-11-03-jack-cahill-u19-profile',
    date:'2041-11-03',
    player:'Jack Cahill',
    type:'development',
    title:'Jack Cahill rückt als neues IV-Talent in den Fokus',
    detail:'Der 16-jährige, 192 cm große Innenverteidiger aus Letterkenny spielt für die Finn Harps U19. Besonders auffällig sind Aggressivität 15, Einsatzfreude 14, Ausdauer 14, Sprunghöhe 14 sowie sein starker linker und sehr starker rechter Fuß. Kraft 9, Stellungsspiel 8 und Kopfballtechnik 9 zeigen zugleich, wo er noch wachsen muss.'
  });
})();