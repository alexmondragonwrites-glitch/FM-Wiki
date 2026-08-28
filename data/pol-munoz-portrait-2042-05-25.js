(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-05-25';
  const reportId='2042-05-25-pol-munoz-portrait-von-coventry-zur-wm';

  const snapshot={
    player:'Pol Muñoz',
    age:21,
    nationality:'Spanien',
    club:'Finn Harps',
    positions:['M (LZ)','OM (RLZ)'],
    personality:'Professionell',
    squadStatus:'Stammspieler',
    currentAbility:163,
    estimatedValue:'€29Mio – €32Mio',
    wage:'€39K/Woche',
    contractEnd:'31.12.2045',
    seniorCaps:0,
    worldCupGroup:'L',
    worldCupNation:'Spanien'
  };

  const career=[
    {season:'2036/37',club:'Sevilla C',league:'Spanien',apps:9,goals:0,assists:0,avg:'6.63'},
    {season:'2037/38',club:'Sevilla C',league:'Spanien',apps:34,goals:1,assists:20,avg:'7.32'},
    {season:'2038/39',club:'Sevilla C',league:'Spanien',apps:34,goals:3,assists:18,avg:'7.31'},
    {season:'2039/40',club:'Sevilla C',league:'Spanien',apps:3,goals:1,assists:0,avg:'8.60'},
    {season:'2040/41',club:'Coventry City',league:'EFL Championship',apps:40,goals:2,assists:9,avg:'6.80',transfer:'ablösefrei'},
    {season:'2041',club:'Finn Harps',league:'Premier Division',apps:11,goals:2,assists:1,avg:'7.03',transfer:'€12.95Mio'},
    {season:'2042',club:'Finn Harps',league:'Premier Division',apps:15,goals:4,assists:6,avg:'7.37'}
  ];

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-05-25-pol-munoz-portrait-update',date,player:'Pol Muñoz',type:'profile',
    title:'Vom Sevilla-Unterbau über Coventry in Spaniens WM-Kader',
    detail:'Mit 21 Jahren, einer aktuellen Fähigkeit von 163 und einem geschätzten Wert von €29–32 Mio gehört Pol Muñoz inzwischen zum spanischen WM-Aufgebot. Bemerkenswert: Im Spielerprofil stehen weiterhin 0 A-Länderspiele.'
  });

  const report={
    id:reportId,
    type:'Spielerporträt',
    date,
    competition:'FIFA World Cup 2042',
    fixtureDate:'Vor dem Turnier',
    headline:'Pol Muñoz: Der Umweg, der ihn bis zur spanischen WM führte',
    subheadline:'Sevilla bildete ihn aus, Coventry gab ihm 40 Spiele, Finn Harps machte aus dem Talent einen 163er Stammspieler. Nun fährt der 21-Jährige ohne bisherigen A-Länderspieleinsatz mit Spanien zur WM.',
    label:'SPIELERPORTRÄT · POL MUÑOZ · WM 2042',
    heroStat:{label:'Vom Transfer zum WM-Fahrer',value:'€12,95 Mio → €29–32 Mio',note:'21 Jahre · Fähigkeit 163 · Spanien'},
    backlink:{href:'spieler.html?id=pol-munoz',label:'← ZU POL MUÑOZ'},
    intro:'Pol Muñoz ist vielleicht die sauberste Fallstudie dafür, was Finn Harps inzwischen mit Spielerkarrieren macht. Er war kein fertiger Weltstar, als er nach Donegal kam. Sein Weg führte durch den Unterbau des FC Sevilla, über einen langen Übergang bei Coventry City und erst dann auf die große Bühne. Heute ist er Stammspieler bei Finn Harps und Teil des spanischen WM-Kaders.',
    snapshot,
    career,
    sections:[
      {title:'Sevilla: Ausbildung, Zahlen – aber kein Durchbruch oben',text:'Muñoz kam aus dem System des FC Sevilla und sammelte den Großteil seiner frühen Einsatzzeit bei Sevilla C. Besonders 2037/38 und 2038/39 fallen auf: 34 Spiele mit 20 Vorlagen, danach erneut 34 Spiele mit 18 Vorlagen. In der Karriereübersicht steht trotzdem kein etablierter Durchbruch in Sevillas erster Mannschaft. Das Talent war sichtbar, der Weg nach oben blieb versperrt.'},
      {title:'Coventry: 40 Spiele in einer Übergangssaison',text:'2040/41 wechselte Muñoz ablösefrei nach Coventry City und absolvierte dort 40 Ligaspiele in der EFL Championship. Zwei Tore, neun Vorlagen und eine Durchschnittsnote von 6,80 zeigen: Er spielte regelmäßig, war aber noch kein internationaler Star. Coventry steht im Vereinsprofil vom 25. Mai 2042 inzwischen auf Rang drei der League One.'},
      {title:'Die Infrastruktur macht den Kontrast sichtbar',text:'Das aktuelle Coventry-Profil bewertet sowohl die Jugendeinrichtungen als auch die Trainingseinrichtungen als „Schlecht“. Das sagt nicht automatisch, dass die Bedingungen während Muñoz’ kompletter Zeit identisch waren. Es zeigt aber, wie groß der infrastrukturelle Abstand zu der Umgebung ist, in der er sich bei Finn Harps heute entwickelt. Sevilla gab ihm die technische Basis, Coventry die Erwachsenenminuten, Donegal die Eliteplattform.'},
      {title:'Finn Harps setzt €12,95 Millionen auf Entwicklung',text:'2041 zahlten die Harps €12,95 Millionen für einen Spieler, dessen vorangegangene Championship-Saison eher solide als spektakulär war. Schon im ersten Jahr kam Muñoz in elf Ligaspielen auf zwei Tore und eine Vorlage. 2042 folgte der nächste Schritt: 15 Ligaspiele, vier Tore, sechs Vorlagen und eine Durchschnittsnote von 7,37.'},
      {title:'Was aus ihm geworden ist',text:'Mit 21 Jahren steht Muñoz bei einer aktuellen Fähigkeit von 163. Sein Marktwert wird auf €29 bis €32 Millionen geschätzt, er ist Stammspieler und besitzt eine professionelle Persönlichkeit. Besonders auffällig sind Aggressivität 20, Entscheidungen 18, Flair 18, Übersicht 18, Nervenstärke 17, Schnelligkeit 17 und Beweglichkeit 18. Dazu ist er auf mehreren zentralen und offensiven Mittelfeldpositionen einsetzbar.'},
      {title:'Spanien nominiert ihn vor dem ersten A-Länderspiel',text:'Der vielleicht stärkste Satz des Porträts steht ganz oben im Spielerprofil: 0 A-Länderspiele, 0 Tore. Trotzdem gehört Muñoz zum spanischen WM-Kader für Gruppe L. Eine Weltmeisterschaftsnominierung, bevor die erste A-Länderspielminute im Profil auftaucht, zeigt, wie schnell sich sein Status verändert hat.'},
      {title:'Nicht „aus League One gespielt“ – sondern noch interessanter',text:'Die Karrierehistorie führt Muñoz’ Coventry-Saison 2040/41 noch in der EFL Championship. Coventry spielt 2042 in League One. Die präzise Geschichte lautet deshalb: Finn Harps holte ihn von einem Coventry-Team, das anschließend in die dritte englische Liga fiel, und entwickelte ihn innerhalb kurzer Zeit zum spanischen WM-Spieler. Das macht den Sprung nicht kleiner, sondern sauberer erzählt sogar größer.'}
    ],
    verdictHeading:'Der Transfer, der Finn Harps als Entwicklungsverein erklärt',
    verdict:'Pol Muñoz ist kein Produkt einer einzigen Akademie und auch kein klassischer Wunderknabe, der direkt vom Großklub zur Nationalmannschaft durchmarschierte. Seine Karriere besteht aus drei Bausteinen: Sevilla bildete aus, Coventry gab Spielpraxis, Finn Harps öffnete die Tür zur europäischen Elite. Dass am Ende Spanien anruft, ist deshalb nicht nur seine Geschichte. Es ist auch ein Qualitätsnachweis für das Modell Finn Harps.',
    sources:[
      'FM-Spielerprofil Pol Muñoz · 25.05.2042',
      'FM-Karrierestatistik Pol Muñoz · 25.05.2042',
      'FM-Vereinsprofil Coventry City · 25.05.2042',
      'FM-HTML-Kaderexport Coventry City · 25.05.2042'
    ]
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-05-25-pol-munoz-portrait',
    date,season:2042,category:'Spielerporträt',accent:'red',featured:true,
    eyebrow:'POL MUÑOZ · VON COVENTRY ZUR WM',
    title:'Der Umweg nach Spanien: Pol Muñoz’ Aufstieg bei Finn Harps',
    summary:'Mit 21 Jahren, Fähigkeit 163 und einem Wert von €29–32 Mio fährt Pol Muñoz zur WM. Sein Weg führte vom Sevilla-Unterbau über Coventry und dessen Absturz in League One bis nach Donegal.',
    href:`presse.html?id=${reportId}`,
    entities:['pol-munoz','finn-harps','coventry-city','sevilla','spain','world-cup-2042']
  });
})();