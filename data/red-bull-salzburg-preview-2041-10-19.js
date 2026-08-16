(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const previous=window.FM_CLUBS.find(x=>x.id==='red-bull-salzburg')||{};
  const meetings=[...(previous.meetings||[])];
  const upcoming={date:'23.10.2041',venue:'A',result:'Champions-League-Ligaphase · anstehend'};
  const meetingIndex=meetings.findIndex(x=>x.date===upcoming.date);
  if(meetingIndex>=0)meetings[meetingIndex]=upcoming;else meetings.push(upcoming);

  const clubData={
    ...previous,
    id:'red-bull-salzburg',name:'Red Bull Salzburg',short:'RBS',country:'Österreich',season:2041,
    status:'current',completion:92,
    summary:'Finn Harps reist am 23. Oktober 2041 zum dritten Spieltag der Champions-League-Ligaphase nach Salzburg. Der aktuelle Analystenbericht erwartet ein enges Duell zweier nahezu gleichstarker Mannschaften. Salzburg spielt insgesamt ausgewogen, sucht aber auffällig häufig den langen Ball und bringt viel Qualität über das Zentrum und die rechte Offensivseite.',
    formation:'Erwartete Best-XI: 4-2-3-1 mit zwei defensiven/zentralen Mittelfeldspielern',
    tacticalStyle:'Ausgewogener Grundstil mit direktem langen Ball nach vorne; Ziel ist ein früher Eintritt in den gegnerischen Strafraum.',
    keyPlayers:['Sebastián Martínez','Adama Ouattara','Nayef Al-Enezi','Jannes Meijer','José Teodoro','Hossam Refaey','Chris van de Wetering'],
    tags:['Champions League 2041/42','Ligaphase','Auswärtsspiel','4-2-3-1','Lange Bälle','Zentrumsfokus','Kurzpfosten-Standards'],
    meetings,
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true,meetings:true},
    probableXI:[
      {name:'Hossam Refaey',role:'Mitspielender Torwart',zone:'TW'},
      {name:'Chris van de Wetering',role:'Inverser Außenverteidiger',zone:'VL'},
      {name:'Rüzgar Korkmaz',role:'Ballspielender Verteidiger',zone:'IVL'},
      {name:'Luca Schiattarella',role:'Innenverteidiger',zone:'IVR'},
      {name:'Robin Rodier',role:'Inverser Flügelverteidiger',zone:'VR'},
      {name:'Mohamed Fathi',role:'Abräumer',zone:'DMZL'},
      {name:'Jannes Meijer',role:'Segundo Volante',zone:'DMZR'},
      {name:'Dylan van Huizen',role:'Flügelspieler',zone:'OML'},
      {name:'Adama Ouattara',role:'Schattenstürmer',zone:'OMZ'},
      {name:'Nayef Al-Enezi',role:'Flügelspieler',zone:'OMR'},
      {name:'Sebastián Martínez',role:'Pressender Stürmer',zone:'ST'}
    ],
    squadNotes:[
      {name:'Hossam Refaey',detail:'26-jähriger Torwart, 11 Einsätze, Durchschnittsnote 6,95 und geschätzter Transferwert 59–69 Mio. Euro.'},
      {name:'Adama Ouattara',detail:'31 Jahre, 7 Startelf- plus 5 Joker-Einsätze, 4 Tore, 4 Vorlagen und Durchschnittsnote 7,24.'},
      {name:'Nayef Al-Enezi',detail:'28 Jahre, 8 Einsätze, 3 Tore, 1 Vorlage und Durchschnittsnote 7,39.'},
      {name:'Jannes Meijer',detail:'28 Jahre, 12 Einsätze, 2 Vorlagen und Durchschnittsnote 7,08; seine physischen Leistungsdaten werden im Analystenbericht als auffällig markiert.'},
      {name:'José Teodoro',detail:'24 Jahre, 12 Startelf- plus 2 Joker-Einsätze, 5 Tore und Durchschnittsnote 6,87; sein erwarteter Offensiv-Output wird im Analystenbericht als auffällig markiert.'},
      {name:'Sebastián Martínez',detail:'30 Jahre, 10 Startelf- plus 1 Joker-Einsatz, 4 Tore, 1 Vorlage und Durchschnittsnote 6,95.'},
      {name:'Ahmed Al-Marzooqi',detail:'28 Jahre, 6 Startelf- plus 6 Joker-Einsätze, 2 Tore, 2 Vorlagen und starke Durchschnittsnote 7,49.'},
      {name:'Chris van de Wetering',detail:'31 Jahre, 14 Einsätze, 2 Tore und Durchschnittsnote 7,28.'}
    ],
    scouting:{
      sample:'Analyse der letzten 20 Spiele; Torbilanz laut Analystenansicht 39:8.',
      strengths:[
        'Der Analystenbericht bewertet Salzburgs allgemeine Leistung in allen Kategorien deutlich überdurchschnittlich.',
        'Auch die Defensivarbeit wird als weit überdurchschnittlich eingestuft.',
        'Salzburg lässt nur wenige gegnerische Ballkontakte im eigenen Strafraum zu.',
        'In der betrachteten Probe endete keiner von fünf gegnerischen Schüssen innerhalb des Strafraums in einem Gegentor.',
        'Von 73 Vorstößen ins letzte Drittel kamen 35 aus zentralen Positionen; das Zentrum ist ein klarer Schwerpunkt.',
        'Die Mannschaft kommt aus 73 Vorstößen ins letzte Drittel auf 11 Torversuche und erzeugt damit regelmäßig Abschlusssituationen.',
        'Bei offensiven Standards werden Hereingaben auf den kurzen Pfosten mit Schnitt zum Tor bevorzugt.',
        'Bei defensiven Standards verteidigt Salzburg bevorzugt mannorientiert und sichert den kurzen Pfosten ab.'
      ],
      weaknesses:[
        'Gegner können aus vergleichsweise wenigen Ballkontakten im Salzburger Strafraum zu Abschlüssen kommen; der Analyst markiert das Verhältnis Ballkontakte zu Schüssen als Negativpunkt.',
        'Die linke Angriffsseite wird deutlich seltener genutzt: Nur 18 von 73 Vorstößen ins letzte Drittel kamen über links.',
        'Gegner dringen häufig zentral ins letzte Drittel vor: 38 von 62 gegnerischen Vorstößen kamen aus zentralen Positionen.',
        'John van der Linden war in der betrachteten Probe nur an einem von 19 Angriffen beteiligt, die zu Torversuchen führten.',
        'Als anfälligste gegnerische Formation weist die Analyse ein 4-2-3-1 mit defensivem Mittelfeld und Breite aus; in 737 analysierten Minuten entstand im Schnitt alle 33 Minuten eine zugelassene Chance.'
      ],
      plan:[
        'Salzburgs langen Ball nicht nur am Zielspieler verteidigen: zweite Bälle vor der Abwehr sichern und Meijer/Ouattara den Zugriff auf Abpraller nehmen.',
        'Das Zentrum aktiv überladen. Die Analystenansicht zeigt dort sowohl Salzburgs stärksten eigenen Vorstoßweg als auch einen der häufigsten gegnerischen Wege in ihr letztes Drittel.',
        'Die eigene 4-2-3-1-Struktur breit halten. Genau gegen dieses Grundmuster weist Salzburg in der Formationsanalyse die höchste Anfälligkeit aus.',
        'Salzburgs linke Seite zum Spielaufbau zwingen. Ihre eigenen Angriffe kommen deutlich seltener über links als über Zentrum oder rechte Seite.',
        'Bei Standards den kurzen Pfosten besonders aufmerksam verteidigen und nach abgewehrten Bällen sofort den Konter absichern.',
        'Refaey und die Innenverteidiger nicht durch planlose hohe Bälle entlasten. Lieber Salzburgs kompakte Boxverteidigung mit Rückpässen, zweiten Wellen und flachen Kombinationen auseinanderziehen.',
        'Ouattara zwischen den Linien und Al-Enezi auf rechts früh aufnehmen; beide bringen aktuell Tore und Vorlagen aus der offensiven Dreierreihe.'
      ],
      setPieces:{offense:'Hereingaben bevorzugt auf den kurzen Pfosten mit Schnitt zum Tor.',defense:'Mannorientierte Deckung, ein Spieler sichert den kurzen Pfosten; bei Defensivaktionen bleiben Spieler für Konter vorne.'}
    },
    pressReport:{id:'2041-10-19-red-bull-salzburg-ligaphase-vorbericht',href:'presse.html?id=2041-10-19-red-bull-salzburg-ligaphase-vorbericht',label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Nach dem 8:0 wartet Salzburg: Harps vor dem dritten Champions-League-Test'}
  };
  upsert(window.FM_CLUBS,clubData);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-10-19';
    season.latestHeadline='Champions League: Nach dem 8:0 gegen Shelbourne bereitet sich Finn Harps auf das Auswärtsspiel bei Red Bull Salzburg am 23.10.2041 vor.';
  }

  const report={
    id:'2041-10-19-red-bull-salzburg-ligaphase-vorbericht',type:'Pressevorbericht',date:'2041-10-19',competition:'UEFA Champions League',
    fixtureDate:'Donnerstag, 23.10.2041',home:'Red Bull Salzburg',away:'Finn Harps',location:'Auswärtsspiel · Champions-League-Ligaphase, 3. Spieltag',
    headline:'Nach dem 8:0 wartet Salzburg: Harps vor dem dritten Champions-League-Test',
    subheadline:'Der Analyst erwartet ein enges Spiel zweier nahezu gleichstarker Teams. Salzburg kombiniert überdurchschnittliche Defensive mit langen Bällen, zentralen Vorstößen und gefährlichen Kurzpfosten-Standards.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · 3. SPIELTAG',
    heroStat:{label:'Salzburg · letzte 20 Spiele',value:'39:8 Tore',note:'Analystenansicht vom 19.10.2041'},
    backlink:{href:'klub.html?id=red-bull-salzburg',label:'← ZUM SALZBURG-DOSSIER'},
    intro:'Fünf Tage nach dem 8:0 gegen Shelbourne wartet ein deutlich härterer Prüfstein. Red Bull Salzburg wird vom Analysten als nahezu gleichstarker Gegner eingeschätzt. Die Österreicher spielen grundsätzlich ausgewogen, suchen aber sehr direkt den langen Ball und sind defensiv in der 20-Spiele-Probe ausgesprochen stabil.',
    sections:[
      {title:'Direkter als der Name vermuten lässt',text:'Salzburgs erwarteter Stil wird ausdrücklich als „langer Hafer“ beschrieben. Statt den Ball endlos durch die erste Linie zu tragen, soll der längstmögliche Ball nach vorne gespielt werden, um schnell in Strafraumnähe zu kommen. Für Finn Harps bedeutet das vor allem Arbeit bei zweiten Bällen.'},
      {title:'Das Zentrum ist die Hauptverkehrsader',text:'35 von 73 Salzburger Vorstößen ins letzte Drittel kamen in der Analystenprobe aus zentralen Positionen. Gleichzeitig kamen auch 38 von 62 gegnerischen Vorstößen gegen Salzburg durch die Mitte. Der zentrale Raum ist damit zugleich Stärke und potenzieller Angriffspunkt.'},
      {title:'Ouattara und Al-Enezi liefern Output',text:'Adama Ouattara steht bei vier Toren und vier Vorlagen, Nayef Al-Enezi bei drei Toren und einer Vorlage. Hinter Sebastián Martínez bringen beide genug direkte Produktivität mit, um die Harps-Abwehr bei Ballverlusten sofort zu bestrafen.'},
      {title:'Meijer ist der physische Motor',text:'Jannes Meijer wird als Segundo Volante erwartet. Seine physischen Leistungsdaten werden im Analystenbericht ausdrücklich als auffällige Ausnahme markiert. Er ist damit ein Schlüsselspieler für zweite Bälle und nachrückende Läufe.'},
      {title:'Salzburg verteidigt den Strafraum effizient',text:'Der Scout hebt hervor, dass Salzburg wenige gegnerische Ballkontakte im eigenen Strafraum zulässt. In der betrachteten Probe führte keiner von fünf gegnerischen Strafraumschüssen zu einem Gegentor. Einfache Flanken und harmlose Boxkontakte dürften deshalb wenig bringen.'},
      {title:'Das Harps-System passt zum ausgewiesenen Schwachpunkt',text:'In der Formationsanalyse wird Salzburg gegen ein 4-2-3-1 mit defensivem Mittelfeld und Breite als am anfälligsten ausgewiesen. Über 737 Minuten ließ dieses Matchup im Schnitt alle 33 Minuten eine Chance zu. Das ist kein automatischer Vorteil, aber ein bemerkenswert passender taktischer Fingerzeig.'}
    ],
    strengthsTitle:'WAS SALZBURG GEFÄHRLICH MACHT',strengthsHeading:'Direktheit, Defensive und klare Laufwege',
    strengths:['39:8 Torbilanz in der 20-Spiele-Analyse','Allgemeine Leistung deutlich überdurchschnittlich','Defensivarbeit weit überdurchschnittlich','Wenige gegnerische Ballkontakte im Strafraum','Zentraler Vorstoßfokus','Ouattara: 4 Tore und 4 Vorlagen','Al-Enezi: 3 Tore und 1 Vorlage','Kurzpfosten-Standards mit Schnitt zum Tor'],
    vulnerabilitiesTitle:'WO FINN HARPS ANSETZEN KANN',vulnerabilitiesHeading:'Zentrum, linke Seite und das passende 4-2-3-1-Matchup',
    vulnerabilities:['38 von 62 gegnerischen Vorstößen ins letzte Drittel kamen zentral','Nur 18 von 73 eigenen Vorstößen kamen über links','Gegner kommen aus relativ wenigen Strafraumkontakten zu Abschlüssen','4-2-3-1 DM breit als anfälligste gegnerische Formation ausgewiesen','Lange Bälle erzeugen Räume für zweite Bälle, wenn der erste Kontakt sauber verteidigt wird'],
    keyDuelsTitle:'SCHLÜSSELDUELLE',keyDuelsHeading:'Drei Zonen, die das Spiel prägen dürften',
    keyDuels:[
      {title:'Harps-Sechser gegen Meijer und Ouattara',text:'Meijer schiebt aus der Tiefe nach, Ouattara besetzt als Schattenstürmer den Raum dahinter. Wer zweite Bälle und Rückraumläufe kontrolliert, kontrolliert Salzburgs direktestes Angriffsmuster.'},
      {title:'Harps-Innenverteidigung gegen Martínez',text:'Martínez bringt vier Tore aus zehn Starts und einem Joker-Einsatz mit. Seine Rolle als pressender Stürmer macht ihn sowohl beim langen Ball als auch gegen den Harps-Aufbau relevant.'},
      {title:'Harps-Flügel gegen Rodier und van de Wetering',text:'Salzburg nutzt auf beiden Seiten einrückende Außenverteidiger. Breite und schnelle Seitenwechsel können deshalb die Räume außerhalb der kompakten Zentrumsstaffel öffnen.'}
    ],
    matchPlanTitle:'MATCHPLAN FINN HARPS',matchPlanHeading:'Zweite Bälle gewinnen, Breite halten, Zentrum gezielt überladen',
    matchPlan:[
      'Bei langen Salzburger Bällen nicht nur den ersten Zweikampf verteidigen, sondern die Zone für den zweiten Ball besetzen.',
      'Das 4-2-3-1 breit staffeln und Salzburgs ausgewiesene Anfälligkeit gegen genau dieses Grundmuster testen.',
      'Ouattara zwischen den Linien früh unter Druck setzen und Meijers Nachrückbewegungen verfolgen.',
      'Salzburg nach links lenken, wo ihr Vorstoßvolumen in der Analyse deutlich geringer ist.',
      'Eigene Angriffe nicht mit frühen hohen Flanken beenden; Rückraum, Cutbacks und zweite Wellen suchen.',
      'Bei Salzburger Standards den kurzen Pfosten schützen und gleichzeitig die für Konter vorne bleibenden Spieler im Blick behalten.'
    ],
    verdictHeading:'Schwerer als Celta, aber das Matchup ist interessant',
    verdict:'Salzburg wirkt in der Analyse wie ein Gegner, der wenig verschenkt und mit klaren, direkten Mechanismen spielt. Gleichzeitig passt der ausgewiesene Schwachpunkt gegen ein breites 4-2-3-1 auffällig gut zum Harps-Werkzeugkasten. Nach dem 8:0 gegen Shelbourne kommt Finn Harps mit maximalem offensiven Selbstvertrauen, muss in Österreich aber vor allem bei zweiten Bällen und Standards deutlich sauberer arbeiten.',
    sourcesHeading:'Analystenbericht und Mannschaftsexport vom 19. Oktober 2041',
    sourcesNote:'Der Vorbericht basiert ausschließlich auf den bereitgestellten Football-Manager-Screenshots und dem Mannschaftsexport. Nicht eindeutig sichtbare Detailwerte wurden nicht ergänzt.',
    sources:['FM-Analystenbericht Red Bull Salzburg · 19.10.2041','FM-Mannschaftsexport Red Bull Salzburg · 19.10.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-19-red-bull-salzburg-preview',date:'2041-10-19',season:2041,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · LIGAPHASE · SALZBURG',
    title:'Nach dem 8:0 wartet Salzburg: direkter Stil, starke Defensive',
    summary:'Finn Harps reist am 23. Oktober nach Salzburg. Der Analyst erwartet ein enges Duell und markiert lange Bälle, zentrale Vorstöße sowie die starke Defensivarbeit der Österreicher.',
    href:'presse.html?id=2041-10-19-red-bull-salzburg-ligaphase-vorbericht',entities:['finn-harps','red-bull-salzburg','champions-league','season-2041']
  });
})();