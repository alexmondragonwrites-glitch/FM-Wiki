(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-17';
  const matchDate='2042-06-19';
  const reportId='2042-06-17-irland-suedafrika-wm-vorbericht';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const southAfricaXI=[
    {player:'Tebogo Mofokeng',position:'TW',club:'Sporting CP',age:27,heightCm:190,value:'€12,5–18 Mio.',worldCup:{apps:1,rating:6.60}},
    {player:'Siyabonga Manuel',position:'V (R)',club:'Derry City',age:27,heightCm:177,value:'€0,05–0,5 Mio.',worldCup:{apps:1,rating:6.70}},
    {player:'Robert Hlongwa',position:'V (Z)',club:'Al-Arabi',age:20,heightCm:183,value:'€0,4–3,9 Mio.',worldCup:{apps:1,rating:6.50}},
    {player:'Talent Mbanjwa',position:'V (Z), DM',club:'Al-Gharrafa',age:25,heightCm:181,value:'€8,4–12,5 Mio.',worldCup:{apps:1,rating:6.80}},
    {player:'Luke Nkosi',position:'V (LZ), DM, M (Z)',club:'Sturm Graz',age:28,heightCm:196,value:'€10–12,5 Mio.',worldCup:{apps:1,rating:6.80}},
    {player:'Sfiso Nkosi',position:'M/OM (R)',club:'Al Ain',age:28,heightCm:184,value:'€9,8–14,5 Mio.',worldCup:{apps:1,rating:6.30}},
    {player:'Giovanni Hlatshwayo',position:'DM, M/OM (Z)',club:'Arsenal',age:29,heightCm:169,value:'€163–191 Mio.',worldCup:{apps:1,rating:6.70}},
    {player:'Siphamandla Mthombeni',position:'DM, M (Z)',club:'Freiburg',age:26,heightCm:192,value:'€14–20 Mio.',worldCup:{apps:1,rating:6.50}},
    {player:'Lucky Dube',position:'V/FV (L), M (LZ), OM (L)',club:'Cape Town Spurs',age:26,heightCm:181,value:'€0,007–0,07 Mio.',worldCup:{apps:1,assists:1,rating:7.20}},
    {player:'Kabelo Khumalo',position:'M (Z), OM (R), ST (Z)',club:'Antwerp',age:24,heightCm:186,value:'€15,5–18,5 Mio.',worldCup:{apps:1,goals:2,rating:8.50}},
    {player:'Mandla Mkhathini',position:'OM (RZ), ST (Z)',club:'Al-Rayyan',age:24,heightCm:179,value:'€10,5–15,5 Mio.',worldCup:{apps:1,goals:1,assists:1,rating:7.90}}
  ];

  const notableBench=[
    {player:'Angelo Mkhize',position:'V (Z), DM',club:'Qatar SC',age:21,heightCm:182,value:'€8,2–10,5 Mio.'},
    {player:'Neo Lekalakala',position:'DM, M/OM (Z)',club:'Internacional',age:21,heightCm:189,value:'€5–7,6 Mio.'},
    {player:'Tshepo Ngcobo',position:'TW',club:'Parma',age:32,heightCm:183,value:'€0,3–3 Mio.'},
    {player:'Wandile Mbatha',position:'M/OM (Z)',club:'Derry City',age:24,heightCm:175,value:'€3,9–7,6 Mio.'}
  ];

  const comparison={
    ireland:{averageAge:27.15,averageHeightCm:183,averageWeightKg:77,averageCaps:45,averageYouthCaps:8,averageWeeklyWage:'€70.000',averageTransferValue:'€30,5 Mio.',unavailable:0},
    southAfrica:{averageAge:25.42,averageHeightCm:183,averageWeightKg:77,averageCaps:42,averageYouthCaps:3,averageWeeklyWage:'€31.500',averageTransferValue:'€13,5 Mio.',unavailable:0}
  };

  const scouting={
    likelyShape:'4-4-2 als auffälligste Formation; der Scoutbericht nennt außerdem eine 4-3-3-DM-breit-Variante als häufiges gegnerisches Vergleichsmuster',
    strengths:[
      'Südafrika verfügt mit Giovanni Hlatshwayo von Arsenal über einen klaren Weltklasse-Ausreißer im zentralen Mittelfeld.',
      'Kurze Pässe sind ein wiederkehrendes Angriffsmuster: 15 von 33 Torvorlagen der letzten 20 Spiele wurden über kurze Pässe vorbereitet.',
      'Kabelo Khumalo und Mandla Mkhathini starteten mit drei Toren und einer Vorlage zusammen in das Turnier und bilden ein gefährliches Sturmduo.',
      'Die Mannschaft bringt viel Sprunghöhe und mehrere sehr große Spieler mit; Luke Nkosi misst 196 cm, Mthombeni 192 cm und Mofokeng 190 cm.',
      'Tebogo Mofokeng wird beim Herauslaufen positiv bewertet, Lucky Dube war zuletzt der formstärkste Spieler des Kaders.'
    ],
    weaknesses:[
      'Kopfballtechnik wird trotz guter Sprunghöhe als Schwäche geführt.',
      'Passqualität, Dribbling und Abschluss werden im Scoutbericht nicht als Stärken bewertet.',
      'Teamwork, Aggressivität, Zielstrebigkeit, Antizipation und Entscheidungen werden als Problemfelder genannt.',
      'Beim Torwart werden Abwurf, Strafraumkontrolle, Kommunikation und Eins-gegen-eins als angreifbare Bereiche geführt.',
      'Flanken und Standards vom Punkt gehören nicht zu den hervorgehobenen Qualitäten.'
    ],
    tacticalKeysForIreland:[
      'Giovanni Hlatshwayo im Zentrum permanent unter Zeitdruck setzen und ihn möglichst selten mit Blick zum irischen Tor aufdrehen lassen.',
      'Nicht kopflos hoch pressen: Wenn Südafrika die erste Pressinglinie überspielt, warten mit Khumalo und Mkhathini zwei formstarke Zielspieler auf direkte Zuspiele.',
      'Nach Ballgewinnen flach und schnell in die Räume hinter Südafrikas Mittelfeld kommen; die Schwächen bei Entscheidungen, Antizipation und Passqualität sollen unter Stress sichtbar werden.',
      'Bei Standards auf zweite Bälle achten. Südafrika gewinnt durch Größe viele erste Luftduelle, klärt sie wegen schwächerer Kopfballtechnik aber nicht zwingend sauber.',
      'Mofokeng zu Entscheidungen zwingen: Läufe hinter die letzte Linie und flache Rücklagen sind attraktiver als ein reines Flankenfestival.'
    ]
  };

  wc.preIrelandSouthAfrica={
    date,
    matchDate,
    fixture:'Irland – Südafrika',
    group:'K',
    context:'Irland führt die Gruppe nach dem 4:0 gegen China mit drei Punkten an. Südafrika hat beim 3:3 gegen Brasilien bereits gezeigt, dass es Favoriten offensiv ernsthaft verletzen kann.',
    opponentScout:{
      name:'Südafrika',comparison,likelyBestXI:southAfricaXI,notableBench,scouting,
      standout:{player:'Giovanni Hlatshwayo',club:'Arsenal',age:29,value:'€163–191 Mio.',role:'Zentraler Spielmacher / Mittelfeldzentrum'},
      formThreats:[
        {player:'Kabelo Khumalo',club:'Antwerp',goals:2,rating:8.50},
        {player:'Mandla Mkhathini',club:'Al-Rayyan',goals:1,assists:1,rating:7.90},
        {player:'Lucky Dube',club:'Cape Town Spurs',assists:1,rating:7.20}
      ],
      note:'Der Kader ist im Schnitt jünger als Irland, körperlich nahezu identisch und mit vielen Legionären ausgestattet. Der durchschnittliche Marktwert liegt zwar deutlich unter Irland, doch Hlatshwayo und das formstarke Sturmduo geben Südafrika echte individuelle Spitzen.'
    }
  };

  Object.assign(window.FM_IRELAND,{
    updated:'17.06.2042',
    competition:'FIFA World Cup 2042',
    latestHeadline:'Nach dem 4:0 gegen China wartet Südafrika: drei Tore gegen Brasilien machen aus dem zweiten Gruppenspiel den ersten echten Härtetest.',
    nextFocus:{competition:'FIFA World Cup 2042',stage:'Gruppenphase · Gruppe K · 2. Spiel',opponent:'Südafrika',date:'19.06.2042'}
  });

  const report={
    id:reportId,type:'WM-Vorschau',date,competition:'FIFA World Cup 2042',fixtureDate:'Irland – Südafrika · Gruppe K · 19.06.2042',
    headline:'Drei Tore gegen Brasilien waren Warnung genug: Südafrika ist Irlands erster echter WM-Härtetest',
    subheadline:'Irland besitzt mehr Marktwert und Tiefe, doch Südafrika ist jung, körperlich ebenbürtig und bringt mit Arsenal-Star Giovanni Hlatshwayo sowie dem formstarken Duo Khumalo/Mkhathini konkrete Waffen mit.',
    label:'FIFA WORLD CUP 2042 · IRLAND – SÜDAFRIKA · SCOUTING',
    heroStat:{label:'WARNUNG AUS SPIEL 1',value:'SÜDAFRIKA 3:3 BRASILIEN',note:'Khumalo: 2 Tore · Mkhathini: 1 Tor + 1 Vorlage'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM / WM'},
    intro:'China war ein Spiel, in dem Irland seine Qualitätsvorteile beinahe klinisch ausgespielt hat. Südafrika ist eine andere Kategorie. Das 3:3 gegen Brasilien passt zum Scoutbild: Die Mannschaft besitzt genug Tempo, Direktheit und individuelle Qualität, um auch einen Favoriten zu bestrafen, wenn dessen Gegenpressing nur einmal unsauber steht.',
    sections:[
      {title:'Der Vergleich: weniger Geld, aber keine körperliche Lücke',text:'Irland ist mit 27,15 Jahren im Schnitt älter als Südafrika mit 25,42. Beide Teams liegen bei 183 cm und 77 kg im Durchschnitt praktisch gleichauf. Irland hat mit 45 zu 42 A-Länderspielen etwas mehr Erfahrung. Deutlich ist der wirtschaftliche Abstand: 30,5 Mio. Euro durchschnittlicher Transferwert gegenüber 13,5 Mio. Euro und 70.000 gegenüber 31.500 Euro durchschnittliches Wochengehalt.'},
      {title:'Hlatshwayo ist die Schaltzentrale',text:'Giovanni Hlatshwayo spielt bei Arsenal und wird auf 163 bis 191 Mio. Euro geschätzt. Er ist der klare individuelle Ausreißer im Kader und im Scoutbericht ausdrücklich eine hervorragende Wahl im zentralen Mittelfeld. Irlands Pressing sollte sich deshalb weniger blind auf die beiden Stürmer und stärker auf seine erste saubere Drehung im Zentrum konzentrieren.'},
      {title:'Khumalo und Mkhathini haben Brasilien bereits gewarnt',text:'Kabelo Khumalo von Antwerp erzielte im ersten WM-Spiel zwei Tore und erhielt die Note 8,50. Mandla Mkhathini von Al-Rayyan kam auf ein Tor, eine Vorlage und 7,90. Das Duo gibt Südafrikas 4-4-2 eine echte Spitze: Wird Irlands erste Pressinglinie überspielt, warten sofort zwei formstarke Zielspieler auf vertikale Zuspiele.'},
      {title:'Kurze Pässe statt reiner Brechstange',text:'Der Scoutbericht weist 15 von 33 Torvorlagen der letzten 20 Spiele kurzen Pässen zu. Südafrika ist also trotz seiner Größe kein Team, das nur hohe Bälle sucht. Die Gefahr entsteht aus kurzen Kombinationen im Mittelfeld und dem anschließenden direkten Spiel auf die beiden Spitzen.'},
      {title:'Groß, sprungstark und trotzdem angreifbar in der Luft',text:'Mehrere Spieler bringen enorme Größe mit: Luke Nkosi misst 196 cm, Siphamandla Mthombeni 192 cm, Tebogo Mofokeng 190 cm. Gleichzeitig wird Kopfballtechnik als Schwäche geführt. Für Irland bedeutet das: Nicht blind Flanken schlagen, aber bei Standards und zweiten Bällen dranbleiben. Der erste Kopfball kann Südafrika gehören, die saubere Klärung muss es nicht.'},
      {title:'Mofokeng ist gut, aber nicht unangreifbar',text:'Der 27-jährige Keeper von Sporting CP wird beim Herauslaufen positiv bewertet. Gleichzeitig nennt das Scouting Abwurf, Strafraumkontrolle, Kommunikation und Eins-gegen-eins als Schwachpunkte. Läufe hinter die letzte Linie und flache Rücklagen können ihn häufiger zu schwierigen Entscheidungen zwingen als hohe Standardflanken.'},
      {title:'Der Matchplan für Irland',text:'Hlatshwayo unter Zeitdruck setzen, aber die Struktur hinter dem Pressing nicht öffnen. Südafrikas Passqualität, Entscheidungen und Antizipation unter Stress testen. Nach Ballgewinnen schnell und flach durch das Zentrum spielen. Barry, Ramsey und O’Kane können genau die Räume attackieren, die entstehen, wenn Südafrikas Mittelfeld nach einem Ballverlust zu spät reagiert.'}
    ],
    verdictHeading:'Favorit, aber diesmal mit echtem Gegengift auf der anderen Seite',
    verdict:'Irland ist nach dem 4:0 gegen China Favorit und besitzt den tieferen, wertvolleren Kader. Doch Südafrika ist nicht der nächste Pflichttermin. Das 3:3 gegen Brasilien, Hlatshwayos individuelle Klasse und die aktuelle Form von Khumalo und Mkhathini machen die Partie zum ersten echten taktischen Test der irischen WM. Ein Sieg wäre deshalb deutlich aussagekräftiger als das klare Auftaktergebnis.',
    comparison,southAfricaXI,scouting,
    sources:['FM-Scoutbericht Südafrika · 17.06.2042','FM-Kadervergleich Irland – Südafrika · 17.06.2042','FM-Kaderexport Südafrika · vor Irland – Südafrika','FIFA World Cup 2042 · Südafrika 3:3 Brasilien']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-17-ireland-south-africa-preview',date,season:2042,category:'World Cup',accent:'green',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · IRLAND – SÜDAFRIKA',
    title:'Südafrika-Scout: Hlatshwayo und das formstarke Sturmduo sind die Warnsignale',
    summary:'Südafrika ist jünger, körperlich ebenbürtig und kommt aus einem 3:3 gegen Brasilien. Arsenal-Star Hlatshwayo sowie Khumalo und Mkhathini machen den zweiten Gruppengegner zu einem echten Härtetest.',
    href:`presse.html?id=${reportId}`,
    entities:['ireland','south-africa','world-cup-2042','giovanni-hlatshwayo','kabelo-khumalo','mandla-mkhathini']
  });
})();