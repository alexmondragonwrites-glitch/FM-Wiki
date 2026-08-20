(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const probableXI=[
    {zone:'TW',name:'Carlos Pulido',role:'Torwart'},
    {zone:'VL',name:'Martin Henningsen',role:'Inverser Flügelverteidiger'},
    {zone:'IVL',name:'Cezary Szarpak',role:'Innenverteidiger'},
    {zone:'IVR',name:'Matheo Bruyere',role:'Kompromissloser Innenverteidiger'},
    {zone:'VR',name:'Amad Gnakouri',role:'Inverser Außenverteidiger'},
    {zone:'ML',name:'Backer Ibrahim',role:'Flügelspieler'},
    {zone:'MZ',name:'Óscar Zaragoza',role:'Zentraler Mittelfeldspieler'},
    {zone:'MZ',name:'Stanislav Kasálek',role:'Vertikaler Spielmacher'},
    {zone:'MR',name:'Lukas Borovskis',role:'Äußerer Spielmacher'},
    {zone:'ST',name:'Francisco Javier',role:'Stoßstürmer'},
    {zone:'ST',name:'Adama Coulibaly',role:'Hängende Spitze'}
  ];

  const previous=window.FM_CLUBS.find(x=>x.id==='anderlecht')||{};
  const meetings=[...(previous.meetings||[])];
  const upcoming={date:'22.01.2042',venue:'H',result:'Champions-League-Ligaphase · anstehend'};
  const meetingIndex=meetings.findIndex(x=>x.date===upcoming.date);
  if(meetingIndex>=0)meetings[meetingIndex]=upcoming;else meetings.push(upcoming);

  const clubData={
    ...previous,
    id:'anderlecht',name:'RSC Anderlecht',short:'AND',country:'Belgien',season:2042,status:'current',completion:94,
    summary:'Finn Harps eröffnet sein Champions-League-Jahr 2042 am 22. Januar zuhause gegen RSC Anderlecht. Der Scoutbericht vom 16. Januar zeigt einen Gegner, der in einem 4-4-2 viel Einsatz, gute Laufwege, Technik und Abschlussqualität mitbringt, zuletzt aber defensiv anfällig war.',
    formation:'Erwartete Best-XI: 4-4-2',
    tacticalStyle:'Ballbesitzorientiert mit zwei Spitzen, technisch sauberem Mittelfeld und aktiven Außenbahnen.',
    keyPlayers:['Francisco Javier','Lukas Borovskis','Stanislav Kasálek','Martin Henningsen','Backer Ibrahim'],
    tags:['Champions League 2041/42','Ligaphase','Heimspiel','4-4-2','Ballbesitz','Standards','Defensive Anfälligkeit'],
    meetings,
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true,meetings:true},
    probableXI,
    squadNotes:[
      {name:'Francisco Javier',detail:'31-jähriger Angreifer, 24 Einsätze, 10 Tore, 1 Vorlage, Ø 6,98. Im Scoutbericht zugleich als formstärkster Spieler mit 7,40 über die letzten fünf Partien hervorgehoben.'},
      {name:'Lukas Borovskis',detail:'28-jähriger rechter Mittelfeldspieler, 19 Einsätze, 2 Tore, 2 Vorlagen und Ø 7,16.'},
      {name:'Stanislav Kasálek',detail:'25 Jahre, 20 Startelf- und 7 Joker-Einsätze, 3 Tore, 5 Vorlagen und Ø 7,00.'},
      {name:'Martin Henningsen',detail:'28 Jahre, 24 Einsätze, 1 Vorlage und Ø 6,97. Der Scout merkt an, dass die linke Verteidigerrolle nicht seine natürliche Position ist.'},
      {name:'Backer Ibrahim',detail:'19 Jahre, 5 Startelf- und 18 Joker-Einsätze, 1 Tor, 3 Vorlagen und Ø 6,82.'},
      {name:'Arkadiusz Leśniak',detail:'21-jähriger Innenverteidiger, 27 Einsätze und Ø 6,75; im Formbericht zuletzt bei 6,62 über fünf Spiele.'}
    ],
    scouting:{
      sample:'Scoutbericht und Kaderexport vom 16.01.2042.',
      strengths:[
        'Hohe Einsatzfreude und gute Bewegung ohne Ball.',
        'Antritt, Tackling, Abschluss, Ballannahme, Passen und Technik werden positiv bewertet.',
        'Francisco Javier kommt mit starker Form und zehn Saisontoren.',
        'Anderlecht erzeugt regelmäßig Chancen nach Standards; der Bericht nennt einen durchschnittlichen xA-Wert von 0,21 aus 7,5 Standardsituationen pro Spiel.',
        'Gegen ein 4-2-3-1 DM breit hat Anderlecht bislang besonders viele Großchancen kreiert.'
      ],
      weaknesses:[
        'Der Vorstand ist mit den jüngsten Ergebnissen unzufrieden und verweist auf mehrere Niederlagen.',
        '26 Gegentore in den letzten 20 Spielen; acht davon entstanden aus kurzen Pässen.',
        'Acht von 26 Vorlagen zu Gegentreffern kamen innerhalb des Strafraums.',
        'Carlos Pulido gilt laut Scoutbericht als einzige wirklich brauchbare Option im Tor; Halten, Reflexe und Elfmeter werden kritisch bewertet.',
        'Martin Henningsen spielt links nicht auf seiner natürlichen Position.',
        'Arkadiusz Leśniak wird als aktuell außer Form markiert.',
        'Bei defensiven Standards am kurzen Pfosten liegt Anderlecht beim ersten Ballkontakt unter dem Ligadurchschnitt.'
      ],
      plan:[
        'Anderlecht nicht in ein bequemes Ballbesitzspiel kommen lassen, aber das Pressing kontrolliert auslösen, weil die Mannschaft technisch sauber und beweglich ist.',
        'Henningsens linke Seite früh testen und dort Überzahlsituationen herstellen.',
        'Francisco Javier eng führen und die Verbindung zur hängenden Spitze Coulibaly unterbrechen.',
        'Bei Standards konsequent den kurzen Pfosten attackieren und Pulido mit Verkehr im Fünfmeterraum beschäftigen.',
        'Flache Kombinationen und Rückpässe in den Strafraum suchen: Ein auffälliger Anteil der Gegentore entsteht nach kurzen Pässen und Assists innerhalb der Box.',
        'Borovskis und Kasálek nicht frei zwischen den Linien drehen lassen; beide liefern aktuell den saubersten Output aus dem Mittelfeld.'
      ]
    },
    pressReport:{id:'2042-01-16-finn-harps-anderlecht-vorbericht',href:'presse.html?id=2042-01-16-finn-harps-anderlecht-vorbericht',label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Zurück in der Königsklasse: Anderlecht eröffnet Finn Harps’ Champions-League-Jahr 2042'}
  };
  upsert(window.FM_CLUBS,clubData);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-01-16';
    season.latestHeadline='Champions League: Finn Harps empfängt am 22. Januar Anderlecht zum ersten Königsklassen-Spiel des Jahres 2042.';
  }

  const report={
    id:'2042-01-16-finn-harps-anderlecht-vorbericht',type:'Pressevorbericht',date:'2042-01-16',competition:'UEFA Champions League',
    fixtureDate:'Donnerstag, 22.01.2042 · 20:00',home:'Finn Harps',away:'RSC Anderlecht',location:'Heimspiel · Champions-League-Ligaphase',
    headline:'Zurück in der Königsklasse: Anderlecht eröffnet Finn Harps’ Champions-League-Jahr 2042',
    subheadline:'Sechs Tage vor dem Heimspiel zeigt der Scoutbericht ein technisch starkes Anderlecht im 4-4-2, das über Einsatz, Laufwege und Abschluss kommt, defensiv zuletzt aber deutliche Risse offenbart.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · FINN HARPS – ANDERLECHT',
    heroStat:{label:'Anderlecht · letzte 20 Spiele',value:'26 Gegentore',note:'8 nach kurzen Pässen · Scoutbericht vom 16.01.2042'},
    backlink:{href:'klub.html?id=anderlecht',label:'← ZUM ANDERLECHT-DOSSIER'},
    intro:'Nach Testspielen gegen Elversberg, Karlsruhe und Ferencváros wird es wieder ernst. Am 22. Januar kehrt Finn Harps in die Champions League zurück. Anderlecht kommt mit einem klaren 4-4-2, zwei unterschiedlichen Stürmertypen und einem Mittelfeld, das technisch und läuferisch viel anbietet. Gleichzeitig ist die belgische Defensive in den jüngsten Spielen alles andere als unverwundbar.',
    sections:[
      {title:'Francisco Javier ist der erste Name auf dem Zettel',text:'Der 31-jährige Stoßstürmer steht bei zehn Toren in 24 Einsätzen und wird im aktuellen Scoutbericht mit einer Durchschnittsnote von 7,40 über die letzten fünf Spiele als formstärkster Anderlecht-Spieler geführt. Neben ihm ergänzt Adama Coulibaly als hängende Spitze das Angriffspaar.'},
      {title:'Das Mittelfeld verbindet Technik und Laufarbeit',text:'Backer Ibrahim, Óscar Zaragoza, Stanislav Kasálek und Lukas Borovskis bilden die erwartete Viererreihe. Kasálek bringt drei Tore und fünf Vorlagen mit, Borovskis steht bei einer Durchschnittsnote von 7,16. Anderlecht besitzt damit genug Qualität, um sich auch unter Druck aus engen Räumen zu lösen.'},
      {title:'26 Gegentore erzählen die andere Hälfte der Geschichte',text:'In den letzten 20 Spielen kassierte Anderlecht 26 Gegentore. Acht davon entstanden aus kurzen Pässen, außerdem kamen acht der Vorlagen zu Gegentoren innerhalb des Strafraums. Das spricht für Probleme, sobald Gegner kontrolliert in die Box kommen und nicht nur aus der Distanz abschließen.'},
      {title:'Henningsens Seite und Pulido sind konkrete Angriffspunkte',text:'Der Scoutbericht weist darauf hin, dass Martin Henningsen links nicht auf seiner natürlichen Position eingesetzt wird. Im Tor gilt Carlos Pulido als einzige wirklich brauchbare Option, während Halten, Reflexe und Elfmeter als Schwächen markiert sind.'},
      {title:'Standards könnten mehr als nur Nebengeräusch sein',text:'Anderlecht erzeugt selbst regelmäßig Gefahr nach ruhenden Bällen, verteidigt den kurzen Pfosten aber schwächer als der Ligadurchschnitt. Für Finn Harps ist das ein klarer Hinweis: Standards nicht nur absichern, sondern offensiv gezielt auf den ersten Kontakt am kurzen Pfosten spielen.'}
    ],
    probableXI,
    xiHeading:'Anderlechts erwartete Elf',
    strengthsTitle:'WAS ANDERLECHT TRÄGT',strengthsHeading:'Einsatz, Technik und zwei Spitzen',
    strengths:[
      '4-4-2 mit Francisco Javier als Stoßstürmer und Coulibaly als hängender Spitze.',
      'Gute Bewegung ohne Ball und hoher Einsatz im gesamten Kader.',
      'Antritt, Tackling, Abschluss, Ballannahme, Passen und Technik werden positiv bewertet.',
      'Francisco Javier: 10 Tore in 24 Einsätzen und starke Form.',
      'Kasálek und Borovskis liefern aktuell den stabilsten Mittelfeld-Output.',
      'Regelmäßig gefährlich bei Standards.'
    ],
    vulnerabilitiesTitle:'WO FINN HARPS ANSETZEN KANN',vulnerabilitiesHeading:'Boxverteidigung, linker Flügel und Torwart',
    vulnerabilities:[
      '26 Gegentore in den letzten 20 Spielen.',
      '8 Gegentore nach kurzen Pässen und 8 Assists zu Gegentoren innerhalb des Strafraums.',
      'Henningsen spielt links nicht auf seiner natürlichen Position.',
      'Pulidos Halten, Reflexe und Elfmeter werden im Scoutbericht kritisch bewertet.',
      'Leśniak ist zuletzt außer Form.',
      'Defensiver erster Kontakt am kurzen Pfosten unter Ligadurchschnitt.'
    ],
    keyDuelsTitle:'SCHLÜSSELDUELLE',keyDuelsHeading:'Drei Stellen, an denen das Spiel kippen kann',
    keyDuels:[
      {title:'Harps-Innenverteidiger gegen Francisco Javier',text:'Der formstärkste Anderlecht-Spieler darf keine sauberen ersten Kontakte im Strafraum bekommen. Zehn Tore und die jüngste Form machen ihn zum klaren Referenzpunkt.'},
      {title:'Harps rechts gegen Henningsen',text:'Weil Henningsen links nicht auf seiner natürlichen Position spielt, kann konsequentes Überladen dieser Seite Anderlechts Viererkette aus der Balance ziehen.'},
      {title:'Standards gegen Pulido',text:'Anderlechts Schwäche am kurzen Pfosten und Pulidos kritische Torhüterwerte machen ruhende Bälle zu einer echten Waffe, nicht bloß zu Restarts.'}
    ],
    matchPlanTitle:'MATCHPLAN FINN HARPS',matchPlanHeading:'Nicht nur zurück in Europa, sondern sofort auf Kontrolle spielen',
    matchPlan:[
      'Francisco Javier vom Strafraum fernhalten und die Verbindung zu Coulibaly kappen.',
      'Anderlechts linke Seite mit Tempo und Überladungen testen.',
      'Nicht blind hoch flanken, sondern flach in den Strafraum kombinieren und Rückpässe suchen.',
      'Bei Standards den kurzen Pfosten priorisieren und Pulido unter Druck setzen.',
      'Borovskis und Kasálek bei zweiten Bällen sofort aufnehmen.',
      'Geduldig bleiben: Anderlechts jüngste Gegentorbilanz zeigt, dass die Defensive im Verlauf eines Spiels Fehler anbietet.'
    ],
    verdictHeading:'Ein gefährlicher Gegner, aber kein schlechter Zeitpunkt',
    verdict:'Anderlecht besitzt genug Qualität, um Finn Harps bei offenem Schlagabtausch weh zu tun. Der Scoutbericht zeichnet aber keinen unantastbaren Gegner. Die Belgier bringen offensive Qualität und saubere Technik mit, haben in den letzten 20 Spielen zugleich 26 Gegentore kassiert. Für die Harps ist das eine klare Einladung: kontrolliert beginnen, die linke Seite und den kurzen Pfosten bearbeiten und das Spiel mit zunehmender Dauer in die belgische Defensive drücken.',
    sources:[
      'FM-Anderlechtübersicht · Stärken/Schwächen und Trainerzusammenfassung · 16.01.2042',
      'FM-Spielerexport Anderlecht · Kader und beste Elf · 16.01.2042',
      'Finn-Harps-Spielplan 2042 · Champions-League-Ligaphase · 22.01.2042'
    ]
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-01-16-finn-harps-anderlecht-preview',date:'2042-01-16',season:2042,category:'Champions League',accent:'gold',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · RÜCKKEHR',
    title:'Zurück in der Königsklasse: Anderlecht kommt nach Donegal',
    summary:'Finn Harps empfängt am 22. Januar Anderlecht. Die Belgier bringen Technik und zwei gefährliche Spitzen mit, haben in ihren letzten 20 Spielen aber 26 Gegentore kassiert.',
    href:'presse.html?id=2042-01-16-finn-harps-anderlecht-vorbericht',
    entities:['finn-harps','anderlecht','champions-league','season-2042','francisco-javier']
  });
})();