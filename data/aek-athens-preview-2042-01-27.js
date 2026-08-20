(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const probableXI=[
    {zone:'TW',name:'Alexander Knudsen',role:'Mitspielender Torwart'},
    {zone:'VL',name:'Francisco Javier Fornals',role:'Außenverteidiger'},
    {zone:'IVL',name:'Stevan Duguid',role:'Ballspielender Verteidiger'},
    {zone:'IVR',name:'Florent Raynaud',role:'Kompromissloser Innenverteidiger'},
    {zone:'VR',name:'Álex Mejías',role:'Inverser Flügelverteidiger'},
    {zone:'ML',name:'Ethan Del Portillo',role:'Flügelspieler'},
    {zone:'MZ',name:'Jordyn Townsley',role:'Vorgeschobener Spielmacher'},
    {zone:'MZ',name:'Michael Mathiesen',role:'Zentraler Mittelfeldspieler'},
    {zone:'MR',name:'David Lacombe',role:'Flügelspieler'},
    {zone:'ST',name:'Rodrigo Medina',role:'Kompletter Stürmer'},
    {zone:'ST',name:'Antoine Giraudeau',role:'Stoßstürmer'}
  ];

  const previous=window.FM_CLUBS.find(x=>x.id==='aek-athens'||x.id==='aek'||x.name==='AEK Athens'||x.name==='AEK')||{};
  const meetings=[...(previous.meetings||[])];
  const upcoming={date:'29.01.2042',venue:'H',result:'Champions-League-Ligaphase · 8. Spieltag · anstehend'};
  const meetingIndex=meetings.findIndex(x=>x.date===upcoming.date);
  if(meetingIndex>=0)meetings[meetingIndex]=upcoming;else meetings.push(upcoming);

  const clubData={
    ...previous,
    id:'aek-athens',name:'AEK Athens',short:'AEK',country:'Griechenland',season:2042,status:'current',completion:96,
    summary:'AEK Athens ist Finn Harps’ letzter Gegner in der Champions-League-Ligaphase 2041/42. Der Scoutbericht vom 27. Januar zeigt ein körperlich robustes, laufstarkes und technisch sauberes 4-4-2 mit gefährlichen Standards. Gleichzeitig kassierte AEK in den letzten 20 Spielen 22 Gegentore, acht davon nach Flanken.',
    formation:'Erwartete Best-XI: 4-4-2',
    tacticalStyle:'Ballbesitzorientiertes 4-4-2 mit zwei Spitzen, viel Bewegung ohne Ball, guter Technik und hoher Standardgefahr.',
    keyPlayers:['Antoine Giraudeau','Michalis Charalabous','Aday Suárez','David Lacombe','Stevan Duguid'],
    tags:['Champions League 2041/42','Ligaphase','8. Spieltag','4-4-2','Standards','Flanken anfällig','Ballbesitz'],
    meetings,
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true,meetings:true},
    probableXI,
    squadNotes:[
      {name:'Antoine Giraudeau',detail:'33-jähriger Angreifer. 25 Startelf- und 1 Joker-Einsatz, 19 Tore, 1 Vorlage, Ø 7,14. Im Kaderexport als Stammspitze geführt.'},
      {name:'Michalis Charalabous',detail:'31 Jahre. 9 Startelf- und 9 Joker-Einsätze, 11 Tore, 6 Vorlagen, Ø 7,76. Der Scoutbericht nennt für die letzten fünf Spiele sogar Ø 8,12.'},
      {name:'Aday Suárez',detail:'23-jähriger vielseitiger Mittelfeldspieler. 25 Startelf- und 1 Joker-Einsatz, 3 Tore, 6 Vorlagen, Ø 7,12; Transferwert laut Export 47 bis 69 Mio. Euro.'},
      {name:'David Lacombe',detail:'33 Jahre. 20 Startelf- und 2 Joker-Einsätze, 5 Tore, 6 Vorlagen, Ø 7,33.'},
      {name:'Stevan Duguid',detail:'25-jähriger Innenverteidiger/Defensivspieler. 30 Startelf- und 1 Joker-Einsatz, 4 Vorlagen, Ø 7,03.'},
      {name:'Francisco Javier Fornals',detail:'28-jähriger Linksverteidiger. 25 Startelf- und 1 Joker-Einsatz, 1 Tor, 3 Vorlagen, Ø 7,04.'},
      {name:'Rodrigo Medina',detail:'23-jähriger Angreifer. 24 Startelf- und 1 Joker-Einsatz, 6 Tore, 3 Vorlagen, Ø 6,82.'},
      {name:'Alexander Knudsen',detail:'29-jähriger Torhüter. 8 Startelf- und 1 Joker-Einsatz, Ø 6,93. Der Scoutbericht nennt den Abschlag der Torhüter als potenziellen Schwachpunkt.'}
    ],
    scouting:{
      sample:'Scoutbericht und Kaderexport vom 27.01.2042.',
      strengths:[
        'Hohe Einsatzfreude und sehr gute Bewegungen ohne Ball.',
        'Passen, Kopfballtechnik, Dribbling, Abschluss und Weitschüsse werden positiv bewertet.',
        'Physisch stark: Geschwindigkeit, Beweglichkeit und Ausdauer gehören zu den Stärken.',
        'Sehr gefährliche Standards: Ø 0,26 xA aus 9,0 Standardsituationen pro Spiel, laut Scoutbericht Platz 2 der Liga.',
        'Gute Deckung, Zielstrebigkeit, Nervenstärke und Übersicht im Kader.',
        'Michalis Charalabous kommt mit außergewöhnlicher Form: Ø 8,12 in den letzten fünf Spielen.'
      ],
      weaknesses:[
        'Sprunghöhe wird als generelle Schwäche des Kaders genannt.',
        'Es fehlt laut Scoutbericht an Aggressivität.',
        '22 Gegentore in den letzten 20 Spielen; 8 davon entstanden aus Flanken.',
        'Der Abschlag der Torhüter bereitet den Scouts etwas Sorge.',
        'Julio César Bustamante war zuletzt außer Form mit Ø 6,56 über fünf Spiele.',
        'Gegen ein 4-4-2 zeigte sich AEK verwundbar und ließ laut Scoutbericht pro 90 Minuten drei Großchancen zu.'
      ],
      plan:[
        'Die Flankenanfälligkeit konsequent testen: Breite herstellen und Bruce bzw. die kopfballstarken Zielspieler mit hohen Bällen suchen.',
        'AEKs Standardstärke ernst nehmen und unnötige Fouls rund um den eigenen Strafraum vermeiden.',
        'Die beiden Spitzen früh voneinander trennen und Giraudeau keine sauberen Kontakte im Strafraum geben.',
        'Charalabous bei Einwechslung oder Startelf sofort eng aufnehmen; seine Form ist aktuell außergewöhnlich.',
        'Den Torwart bei Rückpässen und langen Abschlägen unter Druck setzen, statt AEK einen ruhigen Aufbau zu erlauben.',
        'Ein 4-4-2 bzw. 4-4-2-artige Staffelungen als mögliche Angriffsschablone nutzen, weil AEK dagegen im Scoutmodell deutlich mehr Großchancen zuließ.'
      ]
    },
    pressReport:{id:'2042-01-27-finn-harps-aek-vorbericht',href:'presse.html?id=2042-01-27-finn-harps-aek-vorbericht',label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Letzter Schritt der Ligaphase: AEK bringt Tore, Standards und eine offene Flanke mit'}
  };
  upsert(window.FM_CLUBS,clubData);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-01-27';
    season.latestHeadline='Champions League: Nach dem 2:0 gegen Anderlecht empfängt Finn Harps am 29. Januar AEK Athens zum letzten Spiel der Ligaphase.';
    season.changes=season.changes||{notes:[]};
    const note='27.01.2042: Scoutbericht vor dem letzten Champions-League-Ligaphasenspiel gegen AEK Athens. Giraudeau steht bei 19 Toren, Charalabous bei Ø 8,12 Form über fünf Spiele; AEK kassierte 8 seiner 22 letzten Gegentore nach Flanken.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const report={
    id:'2042-01-27-finn-harps-aek-vorbericht',type:'Pressevorbericht',date:'2042-01-27',competition:'UEFA Champions League',
    fixtureDate:'Donnerstag, 29.01.2042 · 20:00',home:'Finn Harps',away:'AEK Athens',location:'Donegal Stadium · Champions-League-Ligaphase · 8. Spieltag',
    headline:'Letzter Schritt der Ligaphase: AEK bringt Tore, Standards und eine offene Flanke mit',
    subheadline:'Finn Harps geht als Tabellenzweiter mit 18 Punkten ins letzte Ligaphasen-Spiel. AEK kommt mit einem robusten 4-4-2, einem 19-Tore-Stürmer und enormer Standardgefahr, zeigt aber klare Probleme gegen Flanken.',
    label:'CHAMPIONS LEAGUE · 8. SPIELTAG · FINN HARPS – AEK ATHENS',
    heroStat:{label:'AEK · Gegentore letzte 20 Spiele',value:'8 von 22 nach Flanken',note:'Klarster Angriffspunkt im Scoutbericht vom 27.01.2042'},
    backlink:{href:'klub.html?id=aek-athens',label:'← ZUM AEK-DOSSIER'},
    intro:'Nach dem kontrollierten 2:0 gegen Anderlecht steht Finn Harps bei 18 Punkten und auf Rang zwei. Nun kommt AEK Athens zum Abschluss der Ligaphase nach Stranorlar. Die Griechen sind kein Gegner für einen gemütlichen letzten Spieltag: Der Scoutbericht zeichnet eine laufstarke, technisch saubere und bei Standards sehr gefährliche Mannschaft. Gleichzeitig gibt es eine auffällige Nahtstelle. Acht der 22 Gegentore aus den letzten 20 Partien entstanden nach Flanken.',
    sections:[
      {title:'Giraudeau ist die klare Referenz im Strafraum',text:'Antoine Giraudeau führt AEKs Angriff mit 19 Toren aus 25 Startelf- und einem Joker-Einsatz an. Der 33-Jährige ist der Zielspieler einer Mannschaft, die Abschluss, Kopfballtechnik und Bewegungen ohne Ball zu ihren Stärken zählt.'},
      {title:'Charalabous kommt in absurd guter Form',text:'Michalis Charalabous steht im Kaderexport bei 11 Toren und 6 Vorlagen aus 18 Einsätzen. Noch auffälliger ist die aktuelle Form: Der Scoutbericht weist für seine letzten fünf Spiele einen Notenschnitt von 8,12 aus. Ob Startelf oder Bank, er ist der Spieler, dessen Einfluss Finn Harps am engsten kontrollieren muss.'},
      {title:'Standards sind AEKs zweite große Waffe',text:'Mit durchschnittlich 0,26 xA aus 9,0 Standardsituationen pro Spiel liegt AEK laut Scoutbericht ligaweit auf Rang zwei. Freistöße und Ecken rund um den eigenen Strafraum sind deshalb keine Nebensache, sondern potenzielle Hochrisiko-Situationen.'},
      {title:'Die Flanke ist der Riss in der gelben Wand',text:'Acht der 22 Gegentore in den letzten 20 Spielen resultierten aus Flanken. Dazu zählt Sprunghöhe nicht zu den Stärken des Kaders. Für Finn Harps ist das eine ungewöhnlich klare Einladung, Breite, zweite Pfostenläufe und Bruce’ Kopfballspiel bewusst einzusetzen.'},
      {title:'AEK lebt von Erfahrung, besitzt aber auch großen Marktwert',text:'Der Kader mischt erfahrene Leistungsträger wie Giraudeau, Lacombe und Charalabous mit jüngeren Spielern. Besonders Aday Suárez fällt heraus: 23 Jahre, 3 Tore, 6 Vorlagen, Ø 7,12 und ein im Export ausgewiesener Transferwert von 47 bis 69 Mio. Euro.'}
    ],
    probableXI,
    xiHeading:'AEKs erwartete Elf',
    strengthsTitle:'WAS AEK GEFÄHRLICH MACHT',strengthsHeading:'Zwei Spitzen, Standards und viel Bewegung',
    strengths:[
      '4-4-2 mit Giraudeau und Medina als erwarteter Doppelspitze.',
      'Giraudeau: 19 Tore und Ø 7,14.',
      'Charalabous: 11 Tore, 6 Vorlagen und aktuell Ø 8,12 über fünf Spiele.',
      'Ø 0,26 xA aus 9,0 Standardsituationen pro Spiel, ligaweit Platz 2 laut Scoutbericht.',
      'Gute Werte bei Passen, Kopfballtechnik, Dribbling, Abschluss und Weitschüssen.',
      'Geschwindigkeit, Beweglichkeit und Ausdauer geben dem 4-4-2 viel Reichweite.'
    ],
    vulnerabilitiesTitle:'WO FINN HARPS ANSETZEN KANN',vulnerabilitiesHeading:'Flanken, Sprunghöhe und Druck auf den Torwart',
    vulnerabilities:[
      '8 der 22 Gegentore aus den letzten 20 Spielen entstanden nach Flanken.',
      'Sprunghöhe gehört laut Scoutbericht nicht zu den Stärken des Kaders.',
      'Aggressivität wird ausdrücklich als Schwäche genannt.',
      'Die Torhüter-Abschläge werden kritisch bewertet.',
      'Gegen ein 4-4-2 ließ AEK im Scoutmodell deutlich mehr Großchancen zu.',
      'Bustamante kommt mit schwacher Form von Ø 6,56 über fünf Spiele.'
    ],
    keyDuelsTitle:'SCHLÜSSELDUELLE',keyDuelsHeading:'Drei Stellen, an denen Finn Harps das Spiel lenken kann',
    keyDuels:[
      {title:'Bruce und die Harps-Läufer gegen AEKs Flankenverteidigung',text:'Die Zahlen sind eindeutig genug, um daraus einen Plan zu machen: acht Gegentore nach Flanken. Finn Harps sollte die Box mit klaren Zielzonen besetzen und nicht jede Hereingabe flach erzwingen.'},
      {title:'Innenverteidigung gegen Giraudeau',text:'19 Tore machen Giraudeau zum wichtigsten Fixpunkt. Seine Kontakte im Strafraum müssen früh gestört werden, bevor AEK seine gute Bewegung ohne Ball in Abschlüsse übersetzen kann.'},
      {title:'Fernández gegen AEKs Passspiel',text:'AEK wird für sauberes Passspiel gelobt. Genau hier kann Fernández mit Ballgewinnen und seiner Arbeit gegen den Ball die Griechen aus ihrer Komfortzone ziehen.'}
    ],
    matchPlanTitle:'MATCHPLAN FINN HARPS',matchPlanHeading:'Breite geben, Standards vermeiden, den Rhythmus diktieren',
    matchPlan:[
      'Gezielt über Außen kommen und Flanken nicht nur als Notlösung, sondern als geplanten Abschlussweg nutzen.',
      'Bei Hereingaben zweiten Pfosten und Rückraum gleichzeitig besetzen.',
      'Unnötige Fouls rund um die Box vermeiden: AEK erzeugt überdurchschnittlich viel xA aus Standards.',
      'Giraudeau eng führen und die Verbindung zu Medina unterbrechen.',
      'Charalabous sofort aufnehmen, sobald er auf dem Platz steht.',
      'Knudsen und den Aufbau nach Rückpässen anlaufen, weil der Scout den Torwart-Abschlag als Schwäche markiert.'
    ],
    verdictHeading:'Kein Pflichtsieg, aber ein Gegner mit sehr klarer Sollbruchstelle',
    verdict:'AEK ist stärker, als die reine Außenseiterrolle vermuten lässt. Die Mannschaft hat Tore, Erfahrung, Tempo und gefährliche Standards. Gleichzeitig liefert der Scoutbericht Finn Harps ungewöhnlich konkrete Angriffspunkte. Wer acht von 22 Gegentoren nach Flanken kassiert und bei Sprunghöhe Schwächen zeigt, lädt eine Mannschaft mit guten Kopfballspielern geradezu ein, diese Zone konsequent zu bearbeiten. Nach dem reifen 2:0 gegen Anderlecht wäre ein weiterer kontrollierter Auftritt der passende Schlusspunkt unter eine starke Ligaphase.',
    sources:[
      'FM-AEK-Übersicht · Stärken/Schwächen und Trainerzusammenfassung · 27.01.2042',
      'AEK-Kaderexport · 27.01.2042'
    ]
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-01-27-finn-harps-aek-preview',date:'2042-01-27',season:2042,category:'Champions League',accent:'yellow',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · 8. SPIELTAG',
    title:'AEK zum Ligaphasen-Finale: Finn Harps hat die Flanke im Visier',
    summary:'AEK bringt Giraudeaus 19 Tore, starke Standards und Charalabous’ Ausnahmeform nach Stranorlar. Der klare Angriffspunkt: 8 der 22 letzten Gegentore fielen nach Flanken.',
    href:'presse.html?id=2042-01-27-finn-harps-aek-vorbericht',
    entities:['finn-harps','aek-athens','season-2042','champions-league']
  });
})();