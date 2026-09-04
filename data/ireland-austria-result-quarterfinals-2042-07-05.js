(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-05';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const irelandAustria={
    id:'2042-world-cup-round-of-16-austria-ireland',stage:'Achtelfinale',date,
    home:'Österreich',away:'Irland',score:'0:3',homeScore:0,awayScore:3,winner:'Irland',status:'beendet',
    venue:'Stadion an der Anfield Road, Liverpool',attendance:61276,
    scorers:{home:[],away:['Justin Ramsey 11','Oskar Schulze 14 (Eigentor)','Ben Barry 52']},
    redCards:['Österreich: Alexis Armand 10'],
    stats:{
      shots:{austria:8,ireland:15},shotsOnTarget:{austria:3,ireland:5},xg:{austria:0.76,ireland:2.54},
      possession:{austria:38,ireland:62},corners:{austria:8,ireland:8}
    },
    harpsNotes:[
      'Justin Ramsey startet im Mittelfeld, erzielt in Minute 11 das 1:0 und wird nach 55 Minuten geschont.',
      'Ben Barry startet in der Spitze und trifft in Minute 52 zum 3:0.',
      'Harry O’Leary beginnt auf der Bank und kommt nach 55 Minuten, nachdem er gegen Italien noch doppelt getroffen hatte.'
    ],
    note:'Österreich wird nach der Roten Karte für Alexis Armand in Minute 10 früh dezimiert. Irland nutzt die Überzahl sofort: Ramsey trifft eine Minute später, Schulze unterläuft kurz darauf ein Eigentor, Barry entscheidet die Partie nach der Pause.'
  };

  const saudiGermany={
    id:'2042-world-cup-round-of-16-saudi-arabia-germany',stage:'Achtelfinale',date,
    home:'Saudi-Arabien',away:'Deutschland',score:'2:3 n.V.',homeScore:2,awayScore:3,winner:'Deutschland',status:'beendet',extraTime:true,
    scorers:{home:['O. Otayf 31 (Elfmeter)','N. Al-Enezi 67'],away:['N. Aderholz 45+2','P. Rafelt 76','S. Halleux 116']},
    redCards:['Deutschland: M. Jung 38'],
    note:'Deutschland muss nach der Roten Karte für M. Jung ab Minute 38 in Unterzahl spielen und setzt sich erst in der Verlängerung durch. Halleux erzielt in Minute 116 den Siegtreffer.'
  };

  wc.status='K.-o.-Phase · Viertelfinale';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  [irelandAustria,saudiGermany].forEach(result=>upsert(wc.knockoutResults,result));
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=[irelandAustria,saudiGermany];

  wc.knockoutPairings=wc.knockoutPairings||[];
  [irelandAustria,saudiGermany].forEach(result=>{
    const index=wc.knockoutPairings.findIndex(item=>item&&(item.id===result.id||(item.home===result.home&&item.away===result.away&&item.stage==='Achtelfinale')));
    const pairing={id:result.id,stage:'Achtelfinale',date,home:result.home,away:result.away,status:'beendet',score:result.score,winner:result.winner};
    if(index>=0)wc.knockoutPairings[index]=Object.assign({},wc.knockoutPairings[index],pairing);else wc.knockoutPairings.push(pairing);
  });

  wc.quarterFinalists=['Mexiko','Niederlande','Japan','Südkorea','Brasilien','Spanien','Deutschland','Irland'];
  wc.quarterFinals=[
    {stage:'Viertelfinale',home:'Mexiko',away:'Japan',status:'angesetzt',basis:'fester Turnierbaum'},
    {stage:'Viertelfinale',home:'Niederlande',away:'Südkorea',status:'angesetzt',basis:'fester Turnierbaum'},
    {stage:'Viertelfinale',home:'Brasilien',away:'Deutschland',status:'angesetzt',basis:'fester Turnierbaum'},
    {stage:'Viertelfinale',home:'Spanien',away:'Irland',status:'angesetzt',date:'2042-07-09',basis:'im Spiel als Irlands nächster Gegner bestätigt'}
  ];

  wc.finnHarps=wc.finnHarps||{};
  wc.finnHarps.currentActivePlayersQuarterFinals=14;
  wc.finnHarps.currentActiveNationsQuarterFinals=['Irland','Mexiko','Spanien','Brasilien'];
  wc.finnHarps.quarterFinalHarpsLinks={
    ireland:['Callum Brennan','Giacomo Papini','Justin Ramsey','Cormac O’Kane','Jim O’Neill','Billy Walker','Ben Barry','Kevin Kelly','Mareks Istrankins','Evan Reilly'],
    mexico:['Emerson Escárcega'],
    spain:['Pol Muñoz','Raúl'],
    brazil:['Paulo Henrique']
  };
  wc.finnHarps.contextQuarterFinals='Nach dem Ausscheiden der Schweiz sind noch 14 aktuelle Finn-Harps-Spieler bei vier Viertelfinalisten vertreten. Irland trifft ausgerechnet auf Spanien mit Pol Muñoz und dem seit 1. Juli offiziell zu Finn Harps gehörenden Raúl.';

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-05-justin-ramsey-austria-world-cup',date,player:'Justin Ramsey',type:'nationalteam',
    title:'Ramsey eröffnet Irlands 3:0 im Achtelfinale',
    detail:'Ramsey startet im Mittelfeld gegen Österreich, erzielt in Minute 11 per Kopf das 1:0 und wird nach 55 Minuten geschont. Irland gewinnt 3:0 und zieht ins Viertelfinale ein.'
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-05-ben-barry-austria-world-cup',date,player:'Ben Barry',type:'nationalteam',
    title:'Barry trifft erneut auf der WM-Bühne',
    detail:'Der 18-Jährige startet gegen Österreich in der Spitze und erzielt in Minute 52 das 3:0. Damit bestätigt Barry erneut, warum er trotz der Schonung von Harry O’Leary von Beginn an das Vertrauen erhält.'
  });

  const report={
    id:'2042-07-05-ireland-austria-3-0-quarterfinal-spain',type:'WM-Achtelfinale',date,competition:'FIFA World Cup 2042',
    headline:'Schützenhilfe und Souveränität: Irland schlägt Österreich 3:0 und trifft nun auf Spanien',
    subheadline:'Eine frühe Rote Karte öffnet die Tür, Irland tritt sie sofort ein. Ramsey, ein österreichisches Eigentor und Barry schicken die Boys in Green ins Viertelfinale.',
    label:'FIFA WORLD CUP 2042 · ACHTELFINALE · 5. JULI',
    heroStat:{label:'VIERTELFINALE',value:'ÖSTERREICH 0:3 IRLAND',note:'Nächster Gegner: Spanien'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Irland steht im Viertelfinale der WM 2042. Österreich verliert Alexis Armand bereits in der 10. Minute nach einem harten Tackling, und Irland reagiert gnadenlos: Justin Ramsey trifft eine Minute später, Oskar Schulze lenkt in Minute 14 ins eigene Tor, Ben Barry macht in Minute 52 den Deckel drauf. Die Überzahl ist Schützenhilfe, aber die Zahlen sprechen auch für eine klare irische Kontrolle: 62 Prozent Ballbesitz, 15:8 Schüsse und 2,54 zu 0,76 xG.',
    sections:[
      {title:'Österreich hilft, Irland bestraft',text:'Die Rote Karte für Alexis Armand nach zehn Minuten verändert das Spiel sofort. Nur eine Minute später köpft Justin Ramsey Irland in Führung, drei Minuten danach fällt durch Oskar Schulzes Eigentor bereits das 0:2. Österreich liefert die Schützenhilfe, Irland nutzt sie ohne Zögern.'},
      {title:'Barry startet, O’Leary wird geschont',text:'Der Plan geht auf. Ben Barry beginnt als Mittelstürmer, Harry O’Leary sitzt zunächst auf der Bank. Barry erzielt in Minute 52 das 3:0. O’Leary kommt erst nach 55 Minuten. Damit erreicht Irland das Viertelfinale und kann seinen gegen Italien so wichtigen Routinier trotzdem dosieren.'},
      {title:'Ramsey bleibt im Mittelfeld Gold wert',text:'Ramsey wird erneut nicht nur über Scorer definiert. Er startet im Mittelfeld, gibt Irland Struktur und erzielt trotzdem das wichtige 1:0. Nach 55 Minuten ist sein Arbeitstag beendet. Die Kombination Barry vorne und Ramsey als Mezzala liefert genau die Balance, die sich vor dem Spiel angeboten hatte.'},
      {title:'Deutschland muss 120 Minuten leiden',text:'Im zweiten Spiel setzt sich Deutschland 3:2 nach Verlängerung gegen Saudi-Arabien durch. Nach der Roten Karte für M. Jung in Minute 38 spielt Deutschland lange in Unterzahl. Aderholz gleicht vor der Pause aus, Rafelt trifft in Minute 76, Halleux entscheidet die Partie erst in Minute 116.'},
      {title:'Jetzt wird es persönlich: Spanien gegen Irland',text:'Irlands nächster Gegner ist Spanien. Damit treffen zehn aktuelle Harps-Spieler im irischen Kader auf Pol Muñoz und Raúl, der seit dem 1. Juli offiziell selbst ein Harp ist. Ein WM-Viertelfinale wird damit gleichzeitig zu einem außergewöhnlichen Finn-Harps-internen Duell.'},
      {title:'Das Viertelfinale steht',text:'Die letzten acht sind komplett: Mexiko, Niederlande, Japan, Südkorea, Brasilien, Spanien, Deutschland und Irland. Aus dem festen Turnierbaum ergeben sich Mexiko gegen Japan, Niederlande gegen Südkorea, Brasilien gegen Deutschland und Spanien gegen Irland.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Österreich öffnet mit Rot und Eigentor die Tür, aber Irland geht da durch wie eine Mannschaft, die genau weiß, was sie will.“',
      '„Barry startet statt O’Leary und trifft. Ramsey bleibt im Mittelfeld und trifft trotzdem. Das ist inzwischen Luxus auf mehreren Ebenen.“',
      '„Spanien gegen Irland ist jetzt fast schon ein internes Finn-Harps-Spiel auf der größten Bühne der Welt.“'
    ]},
    sources:['FM World Cup 2042 · Österreich 0:3 Irland · Achtelfinale','FM Spielerstatistik Irland · Österreich 0:3 Irland','FM World Cup 2042 · Saudi-Arabien 2:3 n.V. Deutschland']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-05-ireland-beats-austria-quarterfinals-set',date,type:'world-cup',
    title:'Irland schlägt Österreich 3:0 · Viertelfinale gegen Spanien',
    text:'Irland nutzt eine frühe österreichische Rote Karte und gewinnt durch Ramsey, ein Eigentor und Barry 3:0. Deutschland setzt sich 3:2 nach Verlängerung gegen Saudi-Arabien durch. Die acht Viertelfinalisten stehen fest.',
    href:`presse.html?id=${report.id}`
  });
})();