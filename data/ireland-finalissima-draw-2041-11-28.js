(()=>{
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixture={
    id:'2042-01-18-brazil-ireland-finalissima',
    date:'2042-01-18',
    competition:'Finalissima',
    opponent:'Brasilien',
    venue:'Arena Castelão',
    stadiumCapacity:63903,
    worldRanking:1,
    currentTitleHolder:'England',
    status:'Ausgelost',
    note:'Die offizielle Auslosung bestätigt Brasilien gegen Irland für Samstag, den 18. Januar 2042.'
  };

  const existingUpcoming=(window.FM_IRELAND.upcomingMatches||[]).filter(x=>!(x.date==='18.01.2042'&&x.opponent==='Brasilien'));
  Object.assign(window.FM_IRELAND,{
    updated:'28.11.2041',
    nextMatch:{
      opponent:'Brasilien',
      venue:'Arena Castelão',
      date:'18.01.2042',
      competition:'Finalissima',
      requirement:'Finalissima gegen die Nummer 1 der Weltrangliste'
    },
    upcomingMatches:[
      {opponent:'Brasilien',venue:'Arena Castelão',date:'18.01.2042',competition:'Finalissima'},
      ...existingUpcoming
    ],
    finalissima2042:fixture,
    latestHeadline:'Finalissima ausgelost: Irland trifft am 18. Januar 2042 in der Arena Castelão auf Brasilien.'
  });

  const report={
    id:'2041-11-28-irland-brasilien-finalissima-auslosung',
    type:'Auslosung',
    date:'2041-11-28',
    competition:'Finalissima',
    headline:'Finalissima: Irland erwartet Brasilien',
    subheadline:'Die Auslosung steht: Irland trifft am 18. Januar 2042 in der Arena Castelão auf Brasilien, die Nummer 1 der Weltrangliste.',
    label:'FINALISSIMA · BRASILIEN – IRLAND · 18. JANUAR 2042',
    heroStat:{label:'Gegner',value:'Brasilien · Weltrangliste 1',note:'Arena Castelão · Kapazität 63.903'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Noch vor dem Jahreswechsel ist das nächste große Kapitel der irischen Nationalmannschaft terminiert. Die offizielle Auslosung bringt Irland in der Finalissima gegen Brasilien. Gespielt wird am Samstag, 18. Januar 2042, in der Arena Castelão.',
    sections:[
      {title:'Brasilien wartet',text:'Der ausgeloste Gegner ist Brasilien. Im bereitgestellten Wettbewerbsbild wird Brasilien als Nummer 1 der Weltrangliste geführt.'},
      {title:'Termin und Spielort stehen fest',text:'Die Finalissima findet am Samstag, 18. Januar 2042, in der Arena Castelão statt. Für das Stadion wird eine Kapazität von 63.903 ausgewiesen.'},
      {title:'England ist aktueller Titelträger',text:'Die Wettbewerbsansicht nennt England als aktuellen Titelträger der Finalissima.'},
      {title:'Direkt ein Schwergewicht zum Start in 2042',text:'Nach der perfekten WM-Qualifikation 2041 beginnt das neue Kalenderjahr für Irland damit sofort mit einem Spiel gegen den Weltranglistenersten.'}
    ],
    verdictHeading:'2042 beginnt ohne Aufwärmrunde',
    verdict:'Brasilien ist auf dem Papier die maximal schwere Aufgabe. Gleichzeitig ist die Partie ein idealer früher Gradmesser für eine irische Mannschaft, die 2041 ihre WM-Qualifikationsgruppe mit acht Siegen aus acht Spielen abgeschlossen hat.',
    sources:['FM-Wettbewerbsansicht Finalissima · Auslosung · 28.11.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-11-28-ireland-brazil-finalissima',
    date:'2041-11-28',season:2041,category:'Nationalteam',accent:'green',featured:false,
    eyebrow:'FINALISSIMA · AUSLOSUNG',
    title:'Irland trifft in der Finalissima auf Brasilien',
    summary:'Am 18. Januar 2042 wartet in der Arena Castelão Brasilien, die Nummer 1 der Weltrangliste. England ist aktueller Titelträger.',
    href:'presse.html?id=2041-11-28-irland-brasilien-finalissima-auslosung',
    entities:['ireland','brazil','finalissima','season-2041','season-2042']
  });
})();