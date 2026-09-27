(()=>{
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-09-25';
  const reportId='2042-09-25-ireland-denmark-nations-league-preview';

  const irelandLikelyXI=[
    {player:'Evan Reilly',position:'TW',role:'Mitspielender Torwart'},
    {player:'Callum Brennan',position:'V (R)',role:'Inverser Flügelverteidiger'},
    {player:'Darcy Andrews',position:'V (Z)',role:'Ballspielender Verteidiger'},
    {player:'Callum Duggan',position:'V (RZ), DM',role:'Ballspielender Verteidiger'},
    {player:'Kevin Kelly',position:'V (LZ)',role:'Inverser Außenverteidiger'},
    {player:"Jim O'Neill",position:'DM, M/OM (Z)',role:'Zurückgezogener Spielmacher'},
    {player:'Ben Barry',position:'M (Z), ST (Z)',role:'Mezzala'},
    {player:'Justin Ramsey',position:'M (Z), ST (Z)',role:'Box-to-Box-Mittelfeldspieler'},
    {player:'Billy Walker',position:'M/OM (R)',role:'Inverser Flügelspieler'},
    {player:'Ron-Robert Kersken',position:'OM (L), ST (Z)',role:'Inverser Außenstürmer'},
    {player:"Harry O'Leary",position:'ST (Z)',role:'Stoßstürmer'}
  ];

  const denmarkLikelyXI=[
    {player:'Simon Skafte',club:'Sunderland',position:'TW',role:'Mitspielender Torwart'},
    {player:'Kim Nielsen',club:'Wolfsburg',position:'V (R)',role:'Flügelverteidiger'},
    {player:'Andreas Dahl Bagger',club:'Dortmund',position:'V (Z)',role:'Ballspielender Verteidiger'},
    {player:'Anders Bonde',club:'Dortmund',position:'V (Z)',role:'Innenverteidiger'},
    {player:'Jan Jensen',club:'FC Köln',position:'V (L)',role:'Kompromissloser Außenverteidiger'},
    {player:'Jeppe Christensen',club:'AGF',position:'V (Z), DM, ST (Z)',role:'Defensiver Mittelfeldspieler'},
    {player:'Granit Gega',club:'Valencia',position:'M (RZ), OM (Z)',role:'Vertikaler Spielmacher'},
    {player:'Kenneth Moos',club:'PSV Eindhoven',position:'M/OM (Z)',role:'Zentraler Mittelfeldspieler'},
    {player:'Daniel Hørby',club:'Eintracht Frankfurt',position:'M/OM (R)',role:'Flügelspieler'},
    {player:'Morten Sørensen',club:'Augsburg',position:'M/OM (L)',role:'Flügelspieler'},
    {player:'Mathias Ottesen',club:'Wolfsburg',position:'OM (RZ), ST (Z)',role:'Hängende Spitze'}
  ];

  const denmark={
    team:'Dänemark',
    competition:'UEFA Nations League A',
    group:'Gruppe 3',
    likelyXI:denmarkLikelyXI,
    comparison:{
      ireland:{avgAge:26.78,avgHeightCm:182,avgWeightKg:76,avgCaps:43,avgYouthCaps:8,avgWagePerWeek:'€72.000',avgTransferValue:'€42,5 Mio',unavailable:0},
      denmark:{avgAge:27.57,avgHeightCm:182,avgWeightKg:77,avgCaps:43,avgYouthCaps:11,avgWagePerWeek:'€80.000',avgTransferValue:'€61 Mio',unavailable:2}
    },
    strengths:[
      'Torwart',
      'Innenverteidigung',
      'Mittelfeld mit Granit Gega',
      'Abschluss',
      'Strafraumkontrolle',
      'Reflexe',
      'Führungsqualitäten',
      'Kreativität'
    ],
    weaknesses:[
      'Kopfballtechnik',
      'Deckung',
      'Stellungsspiel',
      'Antritt',
      'Kraft',
      'Aggressivität',
      'Flanken',
      'Dribbling',
      'Spiel ohne Ball',
      'Passspiel',
      'Übersicht',
      'Halten',
      'Abschlag',
      'Entscheidungen',
      'Technik',
      'Flair',
      'Ecken',
      'Teamwork',
      'Exzentrizität'
    ],
    tacticalNotes:[
      'Dänemark wird im Scoutbericht besonders in einer 4-4-2-Variante als problematisch beschrieben: zuletzt über 90 Minuten drei Großchancen zugelassen.',
      'Das dänische Mittelfeld besitzt mit Granit Gega einen herausragenden vertikalen Spielmacher.',
      'Dänemark hat zwei nicht verfügbare Spieler, Irland keinen.',
      'Finanziell ist Dänemark im Durchschnitt teurer, bei Alter, Größe und Länderspielerfahrung liegen beide Kader eng beieinander.'
    ]
  };

  Object.assign(window.FM_IRELAND,{
    updated:'25.09.2042',
    currentCompetition:'UEFA Nations League A',
    currentGroup:'Gruppe 3',
    nextFocus:{competition:'UEFA Nations League A',stage:'Gruppe 3 · Auftakt',opponent:'Dänemark',status:'Vorbereitung'},
    currentLikelyXI:irelandLikelyXI,
    denmarkPreview:denmark,
    nationsLeague2042:{
      competition:'UEFA Nations League A',
      group:'Gruppe 3',
      status:'Auftakt steht bevor',
      openingOpponent:'Dänemark',
      irelandLikelyXI,
      denmarkLikelyXI,
      comparison:denmark.comparison
    }
  });

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Nations-League-Vorbericht',date,competition:'UEFA Nations League A',
    headline:'Zurück im grünen Trikot: Irland startet gegen Dänemark in die Nations League',
    subheadline:'Nach dem WM-Sommer beginnt für Irland die nächste Etappe. Zum Auftakt der Liga A wartet ein dänischer Kader mit hoher individueller Qualität, aber auch klar benannten Schwachstellen.',
    label:'UEFA NATIONS LEAGUE A · GRUPPE 3 · IRLAND – DÄNEMARK',
    heroStat:{label:'KADERVERGLEICH',value:'€42,5 Mio vs. €61 Mio',note:'durchschnittlicher Transferwert pro Spieler: Irland vs. Dänemark'},
    backlink:{href:'nationalteam.html',label:'← ZUR NATIONALMANNSCHAFT'},
    intro:'Der WM-Lauf ist Geschichte, die Nations League beginnt. Irland startet in Liga A, Gruppe 3, gegen Dänemark. Die Mannschaft bleibt stark vom Finn-Harps-Kern geprägt: Reilly, Brennan, O’Neill, Barry, Ramsey und Walker stehen in der aktuellen ersten Elf, weitere Harps-Spieler sitzen im Aufgebot.',
    sections:[
      {title:'Irlands Achse bleibt vertraut',text:'Evan Reilly steht im Tor. Callum Brennan verteidigt rechts, Jim O’Neill organisiert vor der Abwehr, Ben Barry und Justin Ramsey besetzen das zentrale Mittelfeld und Billy Walker startet rechts offensiv. Dazu führt Harry O’Leary als Stoßstürmer die Angriffslinie an.'},
      {title:'Dänemark bringt europäische Klubqualität',text:'Die voraussichtliche dänische Elf enthält Spieler von Dortmund, Wolfsburg, PSV Eindhoven, Valencia, Eintracht Frankfurt, Augsburg und Sunderland. Besonders Granit Gega wird im Scoutbericht als herausragende Option im Mittelfeld hervorgehoben.'},
      {title:'Fast gleich alt, deutlich teurer',text:'Irland und Dänemark kommen beide auf durchschnittlich 43 A-Länderspiele und 182 cm Körpergröße. Dänemark ist im Schnitt etwas älter und schwerer; der durchschnittliche Transferwert liegt mit €61 Mio klar über Irlands €42,5 Mio.'},
      {title:'Wo Dänemark verwundbar wirkt',text:'Der Scoutbericht nennt unter anderem Deckung, Stellungsspiel, Antritt, Kraft, Flanken, Dribbling, Spiel ohne Ball, Passspiel und Übersicht als Schwachstellen. In einer zuletzt genutzten 4-4-2-Formation ließ Dänemark über 90 Minuten durchschnittlich drei Großchancen zu.'},
      {title:'Die neue Prüfung nach der WM',text:'Für Irland geht es weniger darum, den WM-Lauf zu kopieren, als die dort aufgebaute Stabilität in einen neuen Wettbewerb zu übertragen. Der Kern kennt sich, die Rollen sind vertraut und mit Dänemark wartet zum Auftakt sofort ein Gegner, der Fehler bestrafen kann.'}
    ],
    verdictHeading:'Kein Neustart bei null',
    verdict:'Die Nations League beginnt, aber Irland startet nicht als Mannschaft auf der Suche nach sich selbst. Die Achse ist eingespielt, mehrere Schlüsselrollen werden von Finn-Harps-Spielern getragen und der Gegner ist klar analysiert. Dänemark besitzt den teureren Kader, Irland dagegen viel strukturelle Kontinuität.',
    sources:['FM Irland-Kader-/Taktikexport · 25.09.2042','FM Dänemark-Kaderexport · 25.09.2042','FM Dänemark-Scoutbericht und Kadervergleich · 25.09.2042']
  });

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-09-25-ireland-denmark-nations-league-preview',date,season:2042,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'NATIONS LEAGUE · AUFTAKT',
    title:'Irland startet gegen Dänemark in die Nations League',
    summary:'Liga A, Gruppe 3 beginnt. Irland setzt weiter auf einen starken Finn-Harps-Kern; Dänemark bringt den teureren Kader und mehrere Spieler aus europäischen Topligen.',
    href:`presse.html?id=${reportId}`,
    entities:['ireland','denmark','nations-league','evan-reilly','ben-barry','justin-ramsey','billy-walker','season-2042']
  });
})();