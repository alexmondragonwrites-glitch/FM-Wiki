(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const previewId='2041-06-21-bayern-klub-wm-vorbericht';
  const fixtureId='2041-06-25-bayern-club-world-cup-round-of-16';

  const fixture=window.FM_FIXTURES.find(x=>x.id===fixtureId);
  if(fixture){
    fixture.report=`presse.html?id=${previewId}`;
    fixture.preview={
      previousTie:'Champions-League-Viertelfinale 2041 · Finn Harps gewinnt 3:0 insgesamt',
      firstLeg:'10.04.2041 · Finn Harps 1:0 Bayern München',
      secondLeg:'16.04.2041 · Bayern München 0:2 Finn Harps',
      context:'70 Tage nach dem Rückspiel in München treffen beide Teams in einem einzelnen K.-o.-Spiel auf neutralem Platz erneut aufeinander.'
    };
  }

  const bayern=(window.FM_CLUBS||[]).find(x=>x.id==='bayern'||x.name==='FC Bayern München'||x.name==='Bayern München');
  if(bayern){
    bayern.clubWorldCupPreview2041={
      date:'25.06.2041',opponent:'Finn Harps',venue:'Marcel Desailly-Arena, Rennes',
      reunion:'70 Tage nach dem 0:2 im Champions-League-Viertelfinal-Rückspiel',
      previousMeetings:[
        {date:'10.04.2041',competition:'UEFA Champions League · Viertelfinale',result:'Finn Harps 1:0 Bayern München',note:'Daryl Frame 55.'},
        {date:'16.04.2041',competition:'UEFA Champions League · Viertelfinale',result:'Bayern München 0:2 Finn Harps',note:'Daryl Frame 6., Romano Maisto 48. · 0:3 gesamt'}
      ],
      lastDetailedScoutingSnapshot:{
        date:'06.04.2041',manager:'Carlos García',formation:'4-4-2 / 4-3-3 DM breit',
        keyPlayers:['Lucas Sosa','Adrián Palacios','Alexander Fenske','Omar Otayf','Guus Pinas'],
        note:'Diese Personaldaten stammen aus der detaillierten Scoutingakte vor dem Champions-League-Viertelfinale im April und werden für die Klub-WM als historische Vergleichsbasis geführt; Änderungen bis Juni sind möglich.'
      }
    };
  }

  const report={
    id:previewId,
    type:'Vorbericht',
    date:'2041-06-21',
    competition:'FIFA Club World Cup',
    fixtureDate:'Dienstag, 25.06.2041',
    home:'Bayern München',away:'Finn Harps',score:'–',
    location:'Marcel Desailly-Arena · Rennes',
    headline:'70 Tage später: Bayern bekommt seine Revanchechance gegen Finn Harps',
    subheadline:'Im April war das Champions-League-Viertelfinale eine klare Angelegenheit für die Harps. Nun treffen beide Klubs im Klub-WM-Achtelfinale wieder aufeinander, diesmal ohne Rückspiel und ohne Sicherheitsnetz.',
    label:'FIFA CLUB WORLD CUP · ACHTELFINALE · VORBERICHT',
    heroStat:{label:'Letztes Duell über zwei Spiele',value:'3:0 für Finn Harps',note:'1:0 in Stranorlar · 2:0 in München · Bayern ohne Großchance'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Manchmal zieht ein Turnier keinen neuen Gegner, sondern eine Erinnerung aus dem Hut. Nur 70 Tage nach dem Champions-League-Rückspiel in München stehen sich Bayern München und Finn Harps wieder gegenüber. Damals gewann Finn Harps beide Viertelfinalspiele, blieb ohne Gegentor und zog mit 3:0 insgesamt ins Halbfinale ein. Jetzt wird aus dem Wiedersehen ein einzelnes K.-o.-Spiel in Rennes. Für Bayern ist es die Chance auf Revanche, für die Harps die Gelegenheit zu beweisen, dass der April kein einmaliger taktischer Volltreffer war.',
    sections:[
      {title:'April: Zwei Spiele, zwei Harps-Siege, kein Bayern-Tor',text:'Das erste Kapitel dieses Duells ist noch frisch. Am 10. April gewann Finn Harps das Hinspiel im Donegal Stadium mit 1:0 durch Daryl Frames Treffer in der 55. Minute. Sechs Tage später traf Frame bereits in der sechsten Minute in München, Romano Maisto erhöhte kurz nach der Pause auf 2:0. Das ergab 3:0 nach Hin- und Rückspiel.'},
      {title:'Die Zahlen hinter dem 3:0 waren noch deutlicher',text:'Bayern kam in 180 Minuten auf insgesamt nur zwei Schüsse aufs Tor und keine einzige Großchance. Die Münchner erzeugten zusammen 0,47 xG, Finn Harps 2,04 xG. Im Rückspiel lag Bayern sogar nur bei 0,09 xG. Die Harps gewannen also nicht nur auf der Anzeigetafel, sondern nahmen Bayerns Offensive fast vollständig aus dem Spiel.'},
      {title:'Frame trifft erneut auf seinen Lieblingsgegner des Frühlings',text:'Daryl Frame erzielte in beiden Champions-League-Partien gegen Bayern ein Tor. Nun kommt er mit einem weiteren wichtigen Treffer im Rücken nach Rennes: Sein spätes 1:1 gegen Boca Juniors in der Gruppenphase rettete Finn Harps vor dem möglichen Ausscheiden und sicherte am Ende sogar Platz eins in Gruppe H.'},
      {title:'Die Bayern-Akte vom April',text:'Die letzte detaillierte Finn-Harps-Scoutingakte vor dem Viertelfinale führte Lucas Sosa, Adrián Palacios, Alexander Fenske, Omar Otayf und Guus Pinas als zentrale Namen. Bayern wurde unter Carlos García vor allem im 4-4-2 beziehungsweise 4-3-3 mit breitem defensiven Mittelfeld erwartet. Diese Personaldaten sind eine historische April-Aufnahme und nicht automatisch eine Bestätigung der aktuellen Juni-Elf.'},
      {title:'Wo die Qualität sitzt',text:'Im April verband die Bayern-Offensive um Sosa, Palacios und Luis Sánchez bereits 37 Tore und 20 Vorlagen. Innenverteidiger Alexander Fenske wurde als defensiver Fixpunkt geführt, mit einem damaligen Spitzenwert von bis zu 207 Millionen Euro. Der Kader enthielt mehrere Spieler jenseits der 100-Millionen-Marke und Topwerte bis 242 Millionen Euro.'},
      {title:'Was Finn Harps damals gegen Bayern funktionierte',text:'Die alte Matchvorbereitung setzte auf flache Hereingaben statt hoher Flanken gegen Fenske und Djassi, engen Zugriff auf Sosa, das Sichern der zweiten Bälle vor Otayf und Pinas sowie Druck auf Bayerns linke Seite. Besonders wichtig war, Pinas nicht frei aufdrehen zu lassen und Bayerns Passspiel zwar zuzulassen, aber aus den gefährlichen Zonen herauszuhalten.'},
      {title:'Diesmal gibt es kein Rückspiel',text:'Der größte Unterschied zum April ist das Format. Im Champions-League-Viertelfinale konnten die Harps einen knappen Hinspielsieg verwalten und Bayerns Risiko im Rückspiel bestrafen. In Rennes entscheidet ein einziges Spiel. Ein früher Rückstand, eine rote Karte oder eine Standardszene kann diesmal die gesamte Geschichte drehen.'},
      {title:'Und danach wartet der nächste Brocken',text:'Wer dieses Achtelfinale gewinnt, trifft im Viertelfinale auf Marseille oder Barcelona. Selbst ein Sieg gegen Bayern wäre also kein Zielstrich, sondern nur die nächste Tür in einem brutal besetzten Turnierbaum.'}
    ],
    strengthsTitle:'WARUM DIE HARPS SICH AUF DAS DUELL FREUEN DÜRFEN',
    strengthsHeading:'Erinnerung, Matchup und das Selbstvertrauen aus dem Frühjahr',
    strengths:[
      '3:0 Gesamtsieg im Champions-League-Viertelfinale vor nur 70 Tagen',
      'Bayern blieb in beiden April-Spielen ohne Großchance',
      'Daryl Frame traf in Hin- und Rückspiel gegen Bayern',
      'Finn Harps hat in der Klub-WM bereits Manchester City geschlagen',
      'Die Mannschaft kennt Bayerns zentrale Stärken und Schwächen aus einer detaillierten Scoutingakte'
    ],
    vulnerabilitiesTitle:'WARUM DIESMAL ALLES ANDERS LAUFEN KANN',
    vulnerabilitiesHeading:'Ein Spiel, neue Form, neue Details',
    vulnerabilities:[
      'Kein Hin- und Rückspiel, sondern 90 Minuten K.-o.-Fußball',
      'Die detaillierten Bayern-Spielerdaten stammen aus dem April und können sich bis Juni verändert haben',
      'Finn Harps musste gegen Boca bis zur 84. Minute um das Weiterkommen zittern',
      'Bayern kennt nach zwei Niederlagen nun ebenfalls sehr genau, welche Muster Finn Harps im Frühjahr erfolgreich gemacht haben'
    ],
    verdictHeading:'Revanche für Bayern oder Bestätigung für Finn Harps?',
    verdict:'Dieses Achtelfinale lebt von seiner Vorgeschichte. Finn Harps braucht vor Bayern keine Ehrfurcht zu haben, denn der direkte Vergleich des Frühjahrs ist eindeutig. Gleichzeitig wäre es gefährlich, daraus einen Automatismus abzuleiten. Bayern bekommt ein neues Spiel, eine neue Bühne und nur eine Aufgabe: die 180 Minuten aus dem April ungeschehen zu machen. Genau deshalb fühlt sich dieses Achtelfinale größer an als eine normale 2. Runde. Es ist ein Wiedersehen mit Rechnung.',
    sourcesHeading:'Bayern-Wiedersehen auf Basis der Harps-Chronik',
    sourcesNote:'Aktuelle Turnierdaten und Termin stammen aus der Klub-WM-Auslosung vom 21. Juni. Die Bayern-Spieler- und Scoutingdetails stammen aus der Finn-Harps-Gegneranalyse vom 6. April sowie den beiden Champions-League-Viertelfinalspielen vom 10. und 16. April 2041. Sie werden bewusst als historische Vergleichsdaten gekennzeichnet.',
    sources:[
      'Klub-WM-Auslosung · Bayern München – Finn Harps · 25.06.2041',
      'Finn-Harps-Gegneranalyse FC Bayern München · 06.04.2041',
      'Champions-League-Viertelfinale Hinspiel · Finn Harps 1:0 Bayern · 10.04.2041',
      'Champions-League-Viertelfinale Rückspiel · Bayern 0:2 Finn Harps · 16.04.2041'
    ]
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-21-bayern-wiedersehen-vorschau',date:'2041-06-21',season:2041,category:'Klub-WM',accent:'blue',featured:true,
    eyebrow:'KLUB-WM · ACHTELFINALE · BAYERN-WIEDERSEHEN',
    title:'70 Tage nach dem 3:0: Bayern bekommt Finn Harps wieder',
    summary:'Im April schalteten die Harps Bayern im Champions-League-Viertelfinale mit 3:0 insgesamt aus. Nun entscheidet ein einziges Spiel in Rennes über das Klub-WM-Viertelfinale.',
    href:`presse.html?id=${previewId}`,
    entities:['finn-harps','bayern','daryl-frame','club-world-cup']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.latestHeadline='Klub-WM-Achtelfinale: 70 Tage nach dem 3:0 im Champions-League-Viertelfinale trifft Finn Harps erneut auf Bayern München.';
    season.clubWorldCup={
      ...(season.clubWorldCup||{}),
      preview:'Bayern-Wiedersehen: Im April gewann Finn Harps beide Champions-League-Viertelfinalspiele ohne Gegentor. Am 25. Juni folgt das K.-o.-Duell in Rennes.'
    };
  }
})();