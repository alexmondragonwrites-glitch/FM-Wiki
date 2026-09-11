(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-20';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  wc.status='beendet';
  wc.updated=date;
  wc.finalStandings=['Mexiko','Irland','Niederlande','Brasilien'];
  wc.awards={
    playerOfTournament:{
      winner:{player:'Juan Sergio Tavares',nation:'Mexiko',apps:8,goals:3,assists:5,rating:7.32},
      second:{player:'Ben Barry',nation:'Irland',goals:5,assists:3,rating:7.26},
      third:{player:'Kiet Arana Barrantes',nation:'Niederlande',goals:5,assists:2,rating:7.34}
    },
    goldenBoot:{
      winner:{player:'Nico Aderholz',nation:'Deutschland',apps:4,goals:8,rating:8.00},
      second:{player:'Ben Barry',nation:'Irland',goals:5,assists:3,note:'Vor Arana Barrantes aufgrund der geringeren Einsatzzeit.'},
      third:{player:'Kiet Arana Barrantes',nation:'Niederlande',goals:5,assists:2}
    },
    bestYoungPlayer:{player:'Ben Barry',nation:'Irland',age:19,apps:8,goals:5,assists:3,rating:7.26},
    goalOfTournament:{
      winner:{player:'Callum Brennan',nation:'Irland',opponent:'China',date:'2042-06-15',description:'Alleingang durch Chinas Hälfte, zwei Gegenspieler ausgedribbelt und flach aus 19 Metern abgeschlossen.'},
      second:{player:'Alberto',nation:'Spanien',opponent:'Schweiz',date:'2042-07-03'},
      third:{player:'Nico Aderholz',nation:'Deutschland',opponent:'DR Kongo',date:'2042-06-29'}
    },
    dreamTeam:{
      finnHarps:[{player:'Emerson Escárcega',nation:'Mexiko',role:'Stoßstürmer'}],
      ireland:[{player:'Darcy Andrews',nation:'Irland',role:'Innenverteidiger'}],
      note:'Escárcega wird als aktueller Finn-Harps-Spieler in die WM-Elf gewählt. Darcy Andrews vertritt Irland ebenfalls im Dream Team.'
    }
  };

  wc.irelandFarewells={
    brendanMcHugh:{
      player:'Brendan McHugh',age:34,caps:127,goals:38,status:'Karriere beendet',
      career:'Aktive Karriere 2023–2042. Der WM-Finalist beendet seine Laufbahn unmittelbar nach Irlands historischem Turnier.',
      worldCup2042:'Ausgleich zum 2:2 gegen Spanien in Minute 115, Spieler des Spiels im 2:0-Halbfinale gegen die Niederlande und anschließend WM-Finalist.'
    },
    brendanCostello:{
      player:'Brendan Costello',age:34,caps:143,goals:12,status:'Karriere beendet',
      career:'Aktive Karriere 2023–2042. Langjähriger irischer Nationalspieler und Teil der erfolgreichen Generation um Nations-League-Sieg 2039 und Europameistertitel 2040.'
    }
  };

  [
    {id:'2042-07-20-ben-barry-world-cup-awards',date,player:'Ben Barry',type:'award',title:'Barry wird bester junger Spieler der WM und Zweiter bei zwei weiteren Hauptpreisen',detail:'Mit 19 Jahren beendet Barry die WM mit 8 Einsätzen, 5 Toren und 3 Vorlagen bei 7,26 im Schnitt. Er gewinnt die Auszeichnung als bester junger Spieler, wird Zweiter bei der Wahl zum Spieler des Turniers und Zweiter beim Goldenen Schuh.'},
    {id:'2042-07-20-callum-brennan-world-cup-goal-award',date,player:'Callum Brennan',type:'award',title:'Brennans Treffer gegen China ist das schönste Tor der WM',detail:'Der 20-jährige Ire gewinnt die Wahl zum schönsten WM-Tor. Nach einem Alleingang durch Chinas Hälfte und zwei ausgespielten Gegnern traf er flach aus 19 Metern.'},
    {id:'2042-07-20-escarcega-world-cup-dream-team',date,player:'Emerson Escárcega',type:'award',title:'Weltmeister Escárcega steht im Dream Team der WM',detail:'Der Finn-Harps-Stürmer krönt sein Turnier nach Mexikos Titelgewinn mit der Berufung in die offizielle WM-Elf.'},
    {id:'2042-07-20-brendan-mchugh-retirement',date,player:'Brendan McHugh',type:'retirement',title:'McHugh beendet seine Karriere nach dem WM-Finale',detail:'Brendan McHugh beendet mit 34 Jahren seine Laufbahn. Er kommt auf 127 Länderspiele und 38 Tore und verabschiedet sich nach Irlands historischem WM-Finale.'},
    {id:'2042-07-20-brendan-costello-retirement',date,player:'Brendan Costello',type:'retirement',title:'Costello beendet seine Karriere',detail:'Brendan Costello beendet mit 34 Jahren seine Laufbahn nach 143 Länderspielen und 12 Toren für Irland.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2042-07-20-world-cup-2042-aftermath-awards-reactions',
    type:'WM 2042 · Nachlese',date,competition:'FIFA World Cup 2042',
    headline:'Mexiko feiert, Irland trauert – und Finn Harps prägt die WM-Nachlese',
    subheadline:'Barry räumt trotz Finalniederlage ab, Brennan schießt das Tor des Turniers, Escárcega wird Weltmeister und Dream-Team-Spieler. McHugh und Costello verabschieden sich aus einer irischen Generation, die die Fußballwelt verändert hat.',
    label:'FIFA WORLD CUP 2042 · NACHLESE · AUSZEICHNUNGEN & STIMMEN',
    heroStat:{label:'WM 2042',value:'MEXIKO WELTMEISTER · IRLAND VIZE',note:'Barry bester junger Spieler · Escárcega im Dream Team'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Das 3:2 von Wembley bleibt das letzte Ergebnis, aber nicht die letzte Geschichte dieser WM. Mexiko feiert den größten Triumph seiner Fußballgeschichte. Irland verarbeitet eine Niederlage, die besonders schmerzt, weil Ben Barry die Mannschaft in Minute 83 noch 2:1 in Führung gebracht hatte. Gleichzeitig bestätigen die Turnierpreise, wie sehr Irland und Finn Harps diese Weltmeisterschaft geprägt haben.',
    sections:[
      {title:'Mexiko: fünf Minuten bis zur Ewigkeit',text:'Die mexikanische Nachlese kreist um die Schlussphase des Finals. Barry brachte Irland in Minute 83 mit 2:1 in Führung, Mario Ayala glich in Minute 85 aus und Ricardo López erzielte in Minute 88 das 3:2. Aus mexikanischer Sicht werden diese fünf Minuten als Moment gelten, in dem aus einer außergewöhnlichen Mannschaft ein Weltmeister wurde.'},
      {title:'Irland: „Wir waren fünf Minuten Weltmeister“',text:'In Irland treffen Stolz und Leere aufeinander. Der Weg über Brasilien, Italien, Österreich, Spanien und die Niederlande machte das Team zu einem verdienten Finalisten. Gerade deshalb schmerzt das Ende: Sieben Minuten vor Schluss führte Irland noch. Die zentrale Botschaft der Medien lautet dennoch, dass dieses Turnier die internationale Stellung des irischen Fußballs dauerhaft verändert hat.'},
      {title:'Barry verliert das Finale und gewinnt die Zukunft',text:'Ben Barry beendet die WM mit 8 Einsätzen, 5 Toren und 3 Vorlagen bei einer Durchschnittsnote von 7,26. Er wird bester junger Spieler der WM, landet hinter Juan Sergio Tavares auf Rang zwei beim Spieler des Turniers und wird auch beim Goldenen Schuh Zweiter. Sein Treffer zum zwischenzeitlichen 2:1 im Finale macht die Geschichte gleichzeitig größer und schmerzhafter.'},
      {title:'Tavares und Aderholz holen die großen Einzelpreise',text:'Juan Sergio Tavares wird nach 3 Toren und 5 Vorlagen in 8 Spielen zum besten Spieler des Turniers gewählt. Nico Aderholz gewinnt mit unglaublichen 8 Toren in nur 4 Einsätzen den Goldenen Schuh. Barry folgt in beiden Wertungen auf Rang zwei.'},
      {title:'Brennan besitzt das schönste Tor der WM',text:'Callum Brennans Treffer gegen China gewinnt die Wahl zum Tor des Turniers. Der Rechtsverteidiger dribbelte bei seinem Sololauf zwei Gegner aus und schloss aus 19 Metern flach ab. Es ist ein weiterer Einzelpreis für die junge irische Generation.'},
      {title:'Escárcega kommt als Weltmeister und Dream-Team-Spieler nach Donegal zurück',text:'Für Emerson Escárcega endet die Saison nach dem verlorenen Champions-League-Finale doch noch mit dem größten möglichen Titel. Mexiko ist Weltmeister und der Finn-Harps-Stürmer wird zusätzlich in das Dream Team der WM gewählt. Sein nächstes Wiedersehen mit Ryan Flannigan in Donegal besitzt damit eine ganz besondere Pointe.'},
      {title:'McHugh und Costello: zwei große Abschiede',text:'Brendan McHugh beendet seine Karriere mit 127 Länderspielen und 38 Toren. Sein letztes Turnier brachte den späten Ausgleich gegen Spanien, die Auszeichnung als Spieler des Spiels im Halbfinale gegen die Niederlande und schließlich das WM-Finale. Brendan Costello beendet seine Laufbahn mit 143 Länderspielen und 12 Toren. Mit beiden gehen wichtige Figuren der Generation, die 2039 die Nations League und 2040 die Europameisterschaft gewann.'},
      {title:'Die Welt schaut jetzt nach Donegal',text:'Die WM endet mit einem Weltmeister von Finn Harps, einem irischen Harps-Kern als Vizeweltmeister, Barry als bestem jungen Spieler, Brennan mit dem Tor des Turniers und Escárcega im Dream Team. Die internationale Debatte dreht sich deshalb nicht mehr darum, ob Finn Harps zur Elite gehören. Sie dreht sich darum, wie ein Klub aus Donegal zu einem der sichtbarsten Leistungszentren dieser Weltmeisterschaft geworden ist.'}
    ],
    mediaReactions:{simulated:true,note:'Simulierte Save-Welt-Stimmen',items:[
      {source:'TUDN',nation:'Mexiko',quote:'In der 83. Minute war der Traum fast vorbei. Fünf Minuten später gehörte die Welt Mexiko.'},
      {source:'RTÉ',nation:'Irland',quote:'Irland hat die Welt nicht gewonnen. Aber es hat ihr gezeigt, dass es dazugehört.'},
      {source:'Irish Independent',nation:'Irland',quote:'Fünf Minuten trennten Irland von der Unsterblichkeit.'},
      {source:'The Guardian',nation:'England',quote:'Barry lost the final and won the future.'},
      {source:'L’Équipe',nation:'Frankreich',quote:'Finn Harps war der unsichtbare Klub dieses Turniers.'},
      {source:'Marca',nation:'Spanien',quote:'Ein Weltmeister, ein Vizeweltmeisterblock, ein Wunderkind, ein Tor des Turniers – Donegal war überall.'}
    ]},
    interviewReactions:{simulated:true,note:'Simulierte Save-Welt-Interviews',items:[
      {speaker:'Ryan Flannigan',role:'Irland-Trainer',quote:'Wenn du 0:3 verlierst, gehst du vielleicht anders nach Hause. Aber wenn du sieben Minuten vor Schluss vorne bist, siehst du den Pokal praktisch schon. Genau deshalb tut es weh.'},
      {speaker:'Ryan Flannigan',role:'Irland-Trainer',quote:'Mexiko ist verdient Weltmeister. Sie haben uns in den letzten Minuten bestraft. Das macht eine große Mannschaft.'},
      {speaker:'Roy Keane',role:'Irland-Legende',quote:'Sie haben fünf Minuten lang nicht gut genug verteidigt. Mexiko war es. Aber wenn irgendein irischer Fan diese Mannschaft jetzt kritisiert, soll er sich ein anderes Hobby suchen.'},
      {speaker:'Ben Barry',role:'Irland',quote:'Die Auszeichnungen sind schön. Aber wir haben das Finale verloren.'},
      {speaker:'Justin Ramsey',role:'Irland',quote:'Ben wird dieses Tor sein ganzes Leben sehen. Heute wird er nur daran denken, was danach passiert ist.'},
      {speaker:'Brendan McHugh',role:'Irland',quote:'Wenn du mir mit 19 gesagt hättest, dass mein letztes Spiel ein WM-Finale in Wembley wird, hätte ich dich ausgelacht.'},
      {speaker:'Emerson Escárcega',role:'Mexiko / Finn Harps',quote:'Ich weiß nicht, was Ryan beim ersten Training sagen wird. Ein bisschen Angst habe ich schon.'}
    ]},
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Fanreaktionen',items:[
      'Mexiko-Fan: „Beim 1:2 dachte ich, das war es. Dann Ayala. Dann López. Diese fünf Minuten werde ich nie vergessen.“',
      'Irland-Fan: „Ich bin stolz. Aber wir waren fünf Minuten Weltmeister.“',
      'Harps-Fan: „Unser Stürmer ist Weltmeister, unser Trainer Vizeweltmeister und unser Teenager zweitbester Spieler der WM. Was ist aus diesem Verein geworden?“',
      'Harps-Fan: „Ich bin traurig wegen Irland und gleichzeitig stolz auf Esca. Das ist ein sehr merkwürdiger Montag.“',
      'Irland-Fan: „Barry ist 19. Reilly 19. Brennan 20. Das war vielleicht nicht nur unsere eine Chance.“'
    ]},
    conclusion:'Mexiko besitzt den Pokal. Irland besitzt eine neue internationale Identität. Finn Harps besitzen Weltmeister, Vizeweltmeister und mehrere der prägenden Figuren des Turniers. Damit schließt die WM 2042 – und der Fokus kehrt zurück nach Donegal.',
    sources:[
      'FM World Cup 2042 · Finale Irland 2:3 Mexiko · 20.07.2042',
      'FM World Cup 2042 · Spieler des Turniers · Juan Sergio Tavares vor Ben Barry und Kiet Arana Barrantes',
      'FM World Cup 2042 · Goldener Schuh · Nico Aderholz vor Ben Barry und Kiet Arana Barrantes',
      'FM World Cup 2042 · Bester junger Spieler · Ben Barry',
      'FM World Cup 2042 · Schönstes Tor · Callum Brennan gegen China',
      'FM World Cup 2042 · Dream Team · Emerson Escárcega und Darcy Andrews',
      'FM Karriereberichte · Brendan McHugh und Brendan Costello'
    ]
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-20-world-cup-2042-aftermath-awards-reactions',date,type:'world-cup',
    title:'WM-Nachlese: Barry räumt ab, Escárcega Weltmeister, zwei irische Legenden gehen',
    text:'Mexikos Titelgewinn beendet eine historische WM. Barry wird bester junger Spieler und zweimal Zweiter, Brennan gewinnt das Tor des Turniers, Escárcega steht im Dream Team. McHugh und Costello beenden ihre Karrieren.',
    href:'presse.html?id=2042-07-20-world-cup-2042-aftermath-awards-reactions'
  });
})();