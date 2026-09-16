(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];window.FM_FIXTURES=window.FM_FIXTURES||[];window.FM_NEWS=window.FM_NEWS||[];window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];window.FM_CLUBS=window.FM_CLUBS||[];
  const upsert=(a,x)=>{const i=a.findIndex(y=>y&&y.id===x.id);if(i>=0)a[i]=x;else a.push(x)};
  const date='2042-08-14',reportId='2042-08-14-galway-united-finn-harps-0-3-fai-cup';

  upsert(window.FM_MATCHES,{
    id:'2042-08-14-galway-united-finn-harps-fai-cup',date,season:2042,competition:'FAI Cup',stage:'2. Runde',
    home:{id:'galway-united',name:'Galway United',score:0},away:{id:'finn-harps',name:'Finn Harps',score:3},score:'0:3',halfTime:'0:3',
    venue:'Eamonn Deacy Park',location:'Galway, Irland',attendance:4851,awayFans:250,weather:'Starker Wind · 10 °C',referee:'Callum Dolan',
    scorers:[
      {player:'Alejandro López',team:'Finn Harps',goals:1,minutes:[5]},
      {player:'Ben Barry',team:'Finn Harps',goals:1,minutes:[7]},
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:[13]}
    ],
    events:[
      {minute:5,type:'goal',team:'Finn Harps',player:'Alejandro López',text:'0:1'},
      {minute:7,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'0:2'},
      {minute:13,type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'0:3'}
    ],
    stats:[
      {label:'Schüsse',home:6,away:15},{label:'Schüsse aufs Tor',home:2,away:5},{label:'xG',home:0.30,away:2.53},
      {label:'Großchancen',home:0,away:2},{label:'Ballbesitz',home:21,away:79},{label:'Ecken',home:5,away:5},{label:'Fouls',home:18,away:11},
      {label:'Angekommene Pässe',home:'74% (171/231)',away:'90% (647/718)'}
    ],
    ratings:{
      'Evan Reilly':7.4,'Callum Brennan':6.8,'Mareks Istrankins':7.0,'Daniele Di Maio':7.3,'Raúl':7.3,
      'Alejandro López':7.8,'Pol Muñoz':7.8,"Cormac O'Kane":7.3,'Germán Ferreira':8.1,'Dom Docherty':6.9,
      'Ben Barry':7.4,'Diego Fernández':6.9,'Gustavo da Silva':6.8,'Jake Roberts':6.8,"Jim O'Neill":6.5,'Amir Mašić':6.8
    },
    standout:{player:'Germán Ferreira',team:'Finn Harps',rating:8.1,assists:1,note:'Bei seinem Finn-Harps-Debüt liefert Ferreira eine Vorlage und erhält die beste Note der Harps.'},
    milestones:[
      {player:'Callum Byrne',achievement:'50. Profispiel'},
      {player:'Mareks Istrankins',achievement:'75. Profispiel'},
      {player:'Pol Muñoz',achievement:'50. Einsatz für Finn Harps'},
      {player:"Cormac O'Kane",achievement:'275. Einsatz für Finn Harps'},
      {player:'Germán Ferreira',achievement:'Finn-Harps-Debüt'}
    ],
    headline:'Drei Tore in 13 Minuten: Finn Harps ziehen souverän in die nächste Pokalrunde ein',
    verdict:'Alejandro López, Ben Barry und Pol Muñoz entscheiden die Partie praktisch in der Anfangsviertelstunde. Danach verwaltet Finn Harps mit 79 Prozent Ballbesitz den 3:0-Auswärtssieg bei Galway United kontrolliert.'
  });

  const fx=['2042-08-14','19:45','Galway United','Auswärts','0:3','FAI Cup',0];
  const i=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&['Galway United','Galway Utd'].includes(x[2]));if(i>=0)window.FM_FIXTURES[i]=fx;else window.FM_FIXTURES.push(fx);

  const galway=window.FM_CLUBS.find(x=>x.id==='galway-united'||x.name==='Galway United'||x.name==='Galway Utd');
  if(galway){galway.meetings=galway.meetings||[];const meeting={date:'14.08.2042',competition:'FAI Cup · 2. Runde',venue:'A',result:'0:3'};const m=galway.meetings.findIndex(x=>x.date===meeting.date);if(m>=0)galway.meetings[m]=meeting;else galway.meetings.unshift(meeting);galway.lastMeeting='14.08.2042 · Galway United 0:3 Finn Harps';}

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;season.latestHeadline='FAI Cup: Finn Harps gewinnt 3:0 bei Galway United und erreicht die nächste Runde.';
    season.faiCup={...(season.faiCup||{}),status:'3. Runde erreicht',latestResult:'14.08.2042 · Galway United 0:3 Finn Harps',round:'2. Runde'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='14.08.2042: 3:0 bei Galway United in der 2. Runde des FAI Cups. López (5.), Barry (7.) und Pol Muñoz (13.) entscheiden das Spiel früh; 79 Prozent Ballbesitz. Germán Ferreira feiert sein Harps-Debüt und liefert eine Vorlage.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-08-14-alejandro-lopez-goal-galway',date,player:'Alejandro López',type:'goal',title:'Frühes Pokaltor in Galway',detail:'López eröffnet den 3:0-Sieg bereits in Minute 5.'},
    {id:'2042-08-14-ben-barry-goal-galway',date,player:'Ben Barry',type:'goal',title:'Barry legt sofort nach',detail:'Barry erhöht in Minute 7 auf 2:0.'},
    {id:'2042-08-14-pol-munoz-50-harps',date,player:'Pol Muñoz',type:'milestone',title:'50 Einsätze für Finn Harps',detail:'Muñoz absolviert seinen 50. Harps-Einsatz und trifft in Minute 13 zum 3:0.'},
    {id:'2042-08-14-cormac-okane-275-harps',date,player:"Cormac O'Kane",type:'milestone',title:'275 Einsätze für Finn Harps',detail:'O’Kane erreicht im Pokalspiel bei Galway seinen 275. Einsatz für den Klub.'},
    {id:'2042-08-14-german-ferreira-debut',date,player:'Germán Ferreira',type:'debut',title:'Ferreira debütiert für Finn Harps',detail:'Ferreira feiert sein Harps-Debüt, liefert eine Vorlage und erhält mit 8,1 die beste Note der Mannschaft.'}
  ].forEach(x=>upsert(window.FM_PLAYER_UPDATES,x));

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielbericht',date,competition:'FAI Cup',fixtureDate:'14.08.2042',
    headline:'13 Minuten reichen: Harps erledigen Galway früh',
    subheadline:'López nach fünf, Barry nach sieben und Muñoz nach 13 Minuten: Finn Harps entscheidet die zweite FAI-Cup-Runde schon in der Anfangsphase.',
    label:'FAI CUP · 2. RUNDE · 14. AUGUST 2042',
    heroStat:{label:'STARTPHASE',value:'3 TORE',note:'5. · 7. · 13. Minute'},
    intro:'Galway United bekommt kaum Zeit, überhaupt in die Partie hineinzufinden. Nach 13 Minuten steht es bereits 0:3. Danach muss Finn Harps nicht mehr jagen, sondern kann das Spiel mit fast 80 Prozent Ballbesitz kontrollieren.',
    sections:[
      {title:'Drei Schläge in acht Minuten',text:'Alejandro López trifft in Minute 5, Ben Barry nur zwei Minuten später und Pol Muñoz stellt in Minute 13 auf 0:3. Damit ist die Pokalpartie praktisch entschieden, bevor Galway seinen Rhythmus findet.'},
      {title:'Kontrolle statt weiterer Torjagd',text:'Nach dem furiosen Beginn nimmt Finn Harps Tempo aus der Partie. 79 Prozent Ballbesitz und eine Passquote von 90 Prozent halten Galway weitgehend vom eigenen Tor fern. Die Gastgeber kommen auf sechs Schüsse und nur 0,30 xG.'},
      {title:'Ferreira debütiert mit Vorlage',text:'Germán Ferreira absolviert seinen ersten Einsatz für Finn Harps und setzt direkt ein kleines Ausrufezeichen: eine Torvorlage und Note 8,1, die beste Harps-Bewertung des Abends.'},
      {title:'Mehrere Marken fallen',text:'Callum Byrne absolviert sein 50. Profispiel, Mareks Istrankins sein 75. Profispiel, Pol Muñoz seinen 50. und Cormac O’Kane seinen 275. Einsatz für Finn Harps.'}
    ],
    verdictHeading:'Früh entschieden, danach professionell verwaltet',
    verdict:'Das 3:0 wirkt unspektakulärer als manche Ligavorstellung, ist aber ein sehr sauberer Pokalsieg. Finn Harps nimmt Galway mit drei frühen Toren jede Hoffnung und investiert anschließend nur noch so viel, wie für die sichere nächste Runde nötig ist.'
  });

  upsert(window.FM_NEWS,{
    id:'2042-08-14-galway-united-finn-harps-0-3',date,season:2042,category:'FAI Cup',accent:'gold',featured:true,
    eyebrow:'FAI CUP · 2. RUNDE · 0:3',title:'Drei Tore in 13 Minuten schicken Harps weiter',
    summary:'López, Barry und Pol Muñoz treffen schon in der Anfangsviertelstunde. Finn Harps gewinnt 3:0 bei Galway United und erreicht souverän die nächste Pokalrunde.',
    href:`presse.html?id=${reportId}`
  });
})();