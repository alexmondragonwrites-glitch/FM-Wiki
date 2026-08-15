(()=>{
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const opponentScout={
    name:'Tschechien',
    date:'2041-10-01',
    competition:'FIFA World Cup European Qualification · Gruppe C',
    position:'2. Platz',
    formation:'5-2-2-1 DM OM',
    mentality:'Kontrolliert',
    summary:'Tschechien geht mit einer sehr kompakten 5-2-2-1-Struktur in das Spitzenspiel gegen Irland. Drei Innenverteidiger, zwei Wingbacks und die Doppelsechs sollen das Zentrum schließen; davor besetzen Filip Bartoň und Michal Matoušek die beiden Zehnerräume hinter Petr Procházka.',
    probableXI:[
      {name:'Pavel Kuivalainen',club:'Nice',position:'TW',role:'Torwart',age:32,condition:'92%'},
      {name:'Ivo Marek',club:'Monaco',position:'V (Z), DM',role:'Rechter Innenverteidiger',age:33,condition:'77%',value:'€15Mio - €21Mio'},
      {name:'Patrik Hrdlovič',club:'Slavia Prague',position:'V (Z)',role:'Zentraler Innenverteidiger',age:23,condition:'83%',rating:6.60},
      {name:'Tomáš Hanousek',club:'Al-Faysali',position:'V (RZ), DM',role:'Linker Innenverteidiger',age:26,condition:'78%',value:'€18Mio - €27Mio'},
      {name:'Milan Beneš',club:'Caen',position:'V/FV (R)',role:'Rechter Flügelverteidiger',age:29,condition:'78%',rating:7.55,value:'€13.5Mio - €20Mio'},
      {name:'Vladimír Ulbrich',club:'Bayer Leverkusen',position:'DM, M (Z)',role:'Defensiver Mittelfeldspieler rechts',age:28,condition:'75%',rating:7.10,value:'€62Mio - €75Mio'},
      {name:'Petr Chládek',club:'Feyenoord',position:'V (RZ), DM, M (Z)',role:'Defensiver Mittelfeldspieler links',age:33,condition:'75%',rating:6.85,value:'€5.8Mio - €10Mio'},
      {name:'Lukáš Fišer',club:'Leicester',position:'V/FV (L)',role:'Linker Flügelverteidiger',age:29,condition:'80%',rating:6.72,value:'€28Mio - €33Mio'},
      {name:'Michal Matoušek',club:'CF Monterrey',position:'OM (Z), ST (Z)',role:'Offensiver Mittelfeldspieler rechts',age:32,condition:'84%',rating:6.45,value:'€500K - €1.5Mio'},
      {name:'Filip Bartoň',club:'Braga',position:'M/OM (Z)',role:'Offensiver Mittelfeldspieler links',age:25,condition:'76%',rating:7.22,goals:1,assists:2},
      {name:'Petr Procházka',club:'Barcelona',position:'OM (RLZ), ST (Z)',role:'Stürmer',age:29,condition:'71%',rating:7.20,value:'€21Mio - €31Mio',goals:1,assists:1}
    ],
    benchThreats:[
      {name:'Michal Sobotka',club:'Bologna',position:'OM (R), ST (Z)',rating:7.80,value:'€35Mio - €40Mio'},
      {name:'Jiří Pánek',club:'Sparta Prague',position:'M/OM (Z)',rating:7.70,goals:3,assists:1,value:'€9.4Mio - €13.5Mio'},
      {name:'Lukáš Knötig',club:'FC Utrecht',position:'V (RZ), FV (R)',rating:7.40,assists:1,value:'€27Mio - €39Mio'},
      {name:'Václav Vaniak',club:'Bayern München',position:'TW',age:20,value:'€18Mio - €23Mio'}
    ],
    keyPoints:[
      'Die tschechische Formation ist klar auf zentrale Kompaktheit ausgelegt: Dreierkette plus Doppelsechs vor zwei Zehnern.',
      'Vladimír Ulbrich ist mit einem Marktwert von €62–75 Mio. der wertvollste Feldspieler im aktuellen Export und die zentrale Schaltstelle vor der Abwehr.',
      'Petr Procházka von Barcelona startet als alleinige Spitze, ist im aktuellen Snapshot aber nur bei 71 Prozent Athletik.',
      'Auch Ulbrich, Chládek, Bartoň und mehrere Verteidiger liegen nur im Bereich von 75 bis 83 Prozent Athletik.',
      'Von der Bank kommen mit Jiří Pánek und Michal Sobotka zwei Spieler mit sehr starken aktuellen Notenschnitten.'
    ],
    tacticalRead:'Irland sollte die tschechische Fünferkette nicht frontal bespielen. Breite, schnelle Seitenwechsel und Läufe hinter die Wingbacks versprechen mehr als dauerhaftes Spiel durch die verdichtete Mitte. Gleichzeitig darf Procházka bei Umschaltmomenten nicht isoliert gegen die Innenverteidigung kommen.'
  };

  Object.assign(window.FM_IRELAND,{
    updated:'01.10.2041',
    competition:'FIFA World Cup European Qualification',
    group:'Gruppe C',
    position:'1. Platz',
    nextMatch:{opponent:'Tschechien',venue:'Heim',date:'03.10.2041',stadium:'Aviva Stadium',competition:'WM-Qualifikation'},
    groupStatus:'WM-Qualifikation · Gruppe C · Irland 12 Punkte aus 4 Spielen · Tschechien 12 Punkte aus 5 Spielen',
    opponentScout
  });

  const report={
    id:'2041-10-01-irland-tschechien-wm-quali-vorbericht',type:'Gegneranalyse',date:'2041-10-01',competition:'WM-Qualifikation',
    headline:'Spitzenspiel in Dublin: Tschechien kommt mit Fünferkette und dichtem Zentrum',
    subheadline:'Irland empfängt den punktgleichen Verfolger aus Tschechien. Ryan Flannigan trifft auf ein kontrolliertes 5-2-2-1 mit Procházka als alleiniger Spitze und Ulbrich als zentralem Taktgeber.',
    label:'IRLAND · WM-QUALIFIKATION · VORBERICHT TSCHECHIEN',
    heroStat:{label:'Gruppe C',value:'12 gegen 12 Punkte',note:'Irland hat ein Spiel weniger absolviert'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Nach den klaren Siegen gegen Aserbaidschan und Zypern steigt der Schwierigkeitsgrad deutlich. Tschechien steht auf Rang zwei und baut auf eine kompakte Fünferkette. Genau für dieses Spiel hatte Flannigan gegen Zypern rotiert und mehrere Stammkräfte geschont.',
    sections:[
      {title:'Das System: 5-2-2-1 kontrolliert',text:'Pavel Kuivalainen steht hinter einer Dreierkette aus Ivo Marek, Patrik Hrdlovič und Tomáš Hanousek. Milan Beneš und Lukáš Fišer geben die Wingbacks, davor sichern Vladimír Ulbrich und Petr Chládek.'},
      {title:'Ulbrich kontrolliert das Zentrum',text:'Der Leverkusener Mittelfeldspieler ist mit einem angegebenen Marktwert von 62 bis 75 Millionen Euro der prominenteste Feldspieler im aktuellen Export. Neben ihm bringt Chládek Erfahrung und defensive Präsenz.'},
      {title:'Procházka allein gegen Irlands Abwehr',text:'Barcelona-Stürmer Petr Procházka beginnt als einzige Spitze. Hinter ihm sollen Filip Bartoň und Michal Matoušek die Zwischenräume besetzen.'},
      {title:'Fitness könnte zum Faktor werden',text:'Mehrere tschechische Starter liegen im aktuellen Snapshot unter 85 Prozent Athletik. Procházka steht bei 71 Prozent, Ulbrich und Chládek jeweils bei 75 Prozent und Bartoň bei 76 Prozent.'},
      {title:'Gefährliche Bank',text:'Jiří Pánek kommt mit 7,70 Durchschnittsnote und drei Toren, Michal Sobotka mit 7,80. Tschechien kann das Spiel also auch nach Wechseln qualitativ verändern.'},
      {title:'Irlands Ansatz',text:'Die Fünferkette schreit nach Breite und schnellen Verlagerungen. Statt dauerhaft durch die Doppelsechs zu spielen, sollte Irland die Wingbacks auseinanderziehen und die Räume neben der Dreierkette attackieren.'}
    ],
    verdictHeading:'Der erste echte Härtetest dieses Qualifikationsblocks',
    verdict:'Aserbaidschan und Zypern wurden deutlich geschlagen, aber Tschechien bringt wesentlich mehr individuelle Qualität und eine unangenehme defensive Struktur mit. Durch die Rotation gegen Zypern sollte Irland jedoch körperlich frischer in das direkte Duell um die Gruppenspitze gehen.',
    sources:['FM-Taktikansicht Tschechien · 01.10.2041','FM-Mannschaftsexport Tschechien · 01.10.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-01-irland-tschechien-vorbericht',date:'2041-10-01',season:2041,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'IRLAND · WM-QUALIFIKATION',title:'Tschechien wartet: Spitzenspiel um Rang eins',
    summary:'Tschechien kommt mit kontrolliertem 5-2-2-1, Procházka von Barcelona im Sturm und Ulbrich als Schlüsselspieler im Zentrum.',
    href:'presse.html?id=2041-10-01-irland-tschechien-wm-quali-vorbericht',entities:['ireland','czechia','world-cup-qualification','season-2041']
  });
})();