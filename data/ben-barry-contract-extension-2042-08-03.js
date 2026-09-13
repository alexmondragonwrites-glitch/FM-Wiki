(()=>{
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-08-03';
  const contract={
    id:'2042-08-03-ben-barry-new-contract',
    date,
    player:'Ben Barry',
    type:'contract-extension',
    title:'Ben Barry bindet sich langfristig an Finn Harps',
    detail:'Der 19-jährige irische Angreifer unterschreibt einen neuen Vertrag bis 31.12.2046. Das Gesamtvolumen beträgt laut Vereinsmeldung rund 9,25 Mio. Euro; sein Wochengehalt liegt bei 35,5 Tsd. Euro. Aktuell ist Barry als Rotationsspieler eingeplant, für 2043 als Stammspieler.',
    contract:{
      start:'2042-08-03',
      end:'2046-12-31',
      weeklyWageEuro:35500,
      totalValueEuro:9250000,
      currentPlayingTime:'Rotationsspieler',
      futurePlayingTime2043:'Stammspieler',
      loyaltyBonusEuro:1200000,
      appearanceFeeEuro:775,
      goalBonusEuro:5750,
      substituteFeeEuro:375,
      championsLeagueTitleBonusEuro:62000,
      agentFeeEuro:83000
    },
    profileSnapshot:{
      age:19,
      heightCm:183,
      weightKg:76,
      currentAbility:153,
      marketValueRangeEuro:[73000000,85000000],
      description:'Wunderknabe'
    },
    context:[
      'Barry kommt aus einer herausragenden Weltmeisterschaft mit Irland: fünf Tore, drei Vorlagen, bester junger Spieler des Turniers und Zweiter bei Spieler des Turniers sowie Goldenem Schuh.',
      'Finn Harps sichert damit einen der zentralen Spieler der nächsten Generation bis Ende 2046 ab.',
      'Die Aussicht auf mehr Spielzeit war laut Vereinsmeldung ein wichtiger Faktor bei Barrys Entscheidung.'
    ]
  };

  upsert(window.FM_PLAYER_UPDATES,contract);

  upsert(window.FM_NEWS,{
    id:'2042-08-03-ben-barry-contract-2046',date,season:2042,category:'Vertrag',accent:'green',featured:true,
    eyebrow:'VERTRAGSVERLÄNGERUNG · BIS 2046',
    title:'Barry bleibt: Finn Harps bindet sein irisches Wunderkind langfristig',
    summary:'Ben Barry unterschreibt einen neuen Vertrag bis Ende 2046. Der 19-Jährige verdient 35,5 Tsd. Euro pro Woche und soll 2043 vom Rotations- zum Stammspieler aufsteigen.',
    href:'presse.html?id=2042-08-03-ben-barry-long-term-contract'
  });

  upsert(window.FM_PRESS_REPORTS,{
    id:'2042-08-03-ben-barry-long-term-contract',type:'Vertrag',date,
    headline:'Nach der Traum-WM folgt das Bekenntnis zu Donegal: Barry verlängert bis 2046',
    subheadline:'Finn Harps sichert die Zukunft eines seiner größten Talente. Ben Barry unterschreibt mit 19 Jahren einen langfristigen Vertrag und soll bereits 2043 zum Stammspieler aufsteigen.',
    label:'FINN HARPS · VERTRAG · 03. AUGUST 2042',
    heroStat:{label:'VERTRAG',value:'BIS 2046',note:'35,5 Tsd. €/Woche · rund 9,25 Mio. € Gesamtvolumen'},
    backlink:{href:'kader.html',label:'← ZUM KADER'},
    intro:'Wenige Wochen nach einer Weltmeisterschaft, die Ben Barry endgültig auf die internationale Fußballkarte gesetzt hat, schafft Finn Harps langfristige Klarheit. Der 19-jährige Ire unterschreibt einen neuen Vertrag bis zum 31. Dezember 2046.',
    sections:[
      {title:'Vom Wunderkind zum künftigen Stammspieler',text:'Barry ist aktuell noch als Rotationsspieler eingeplant. Für 2043 ist bereits der Status Stammspieler vorgesehen. Die Aussicht auf mehr Spielzeit spielte laut Vereinsmeldung eine erhebliche Rolle bei seiner Entscheidung.'},
      {title:'Die WM verändert seinen Status',text:'Barry kehrt als bester junger Spieler der WM zurück. Mit fünf Toren und drei Vorlagen wurde er außerdem Zweiter bei der Wahl zum Spieler des Turniers und Zweiter im Rennen um den Goldenen Schuh. Der neue Vertrag ist deshalb nicht nur eine Talentbindung, sondern die Absicherung eines bereits international etablierten Leistungsträgers.'},
      {title:'Ein Vertrag für die nächste Harps-Generation',text:'Mit Barry bindet Finn Harps einen Spieler, der sowohl als Mittelstürmer als auch im zentralen Mittelfeld eingesetzt werden kann. Gemeinsam mit Reilly, Brennan und weiteren jungen Leistungsträgern steht er für den nächsten Kern der Mannschaft.'}
    ],
    verdictHeading:'Ein strategisch wichtiger Vertrag',
    verdict:'Die Verlängerung nimmt einem möglichen Transfermarkt-Thema früh die Luft. Barry ist noch nicht am Ende seiner Entwicklung, gehört aber bereits jetzt zu den wertvollsten Spielern des Kaders. Finn Harps sichert sich damit bis Ende 2046 sportliche Qualität und erhebliche Planungssicherheit.',
    sources:['FM-Spielerprofil Ben Barry · 03.08.2042','Finn Harps Vereinsmeldung · Barry erhält Lohn für starke Leistungen · 03.08.2042']
  });
})();