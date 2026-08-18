(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const previous=window.FM_CLUBS.find(x=>x.id==='real-sociedad')||{};
  const meetings=[...(previous.meetings||[])];
  const upcoming={date:'11.12.2041',venue:'A',result:'UEFA Champions League · Ligaphase · anstehend'};
  const meetingIndex=meetings.findIndex(x=>x.date===upcoming.date);
  if(meetingIndex>=0)meetings[meetingIndex]=upcoming;else meetings.push(upcoming);

  const clubData={
    ...previous,
    id:'real-sociedad',name:'Real Sociedad',fullName:'Real Sociedad de Fútbol',short:'RSO',country:'Spanien',season:2041,
    status:'current',completion:92,
    summary:'Finn Harps beendet das Kalenderjahr 2041 mit dem Champions-League-Auswärtsspiel bei Real Sociedad. Der Scoutbericht zeigt eine aggressive und physisch starke 4-4-2-Mannschaft, die aus dieser Grundordnung viele Großchancen erzeugt, aber gegen 4-3-3 DM breit zugleich verwundbar ist. Real Sociedad steht zum Scoutzeitpunkt auf Rang vier in La Liga.',
    formation:'Erwartete Best-XI laut Scoutbericht: 4-4-2',
    tacticalStyle:'Aggressives 4-4-2 mit zwei Stürmern, viel Arbeit ohne Ball, guter Physis und klarer Chance-Erzeugung aus der Grundordnung. Die Mannschaft kann im Zentrum und über die Flügel Druck entwickeln, bietet bei gegnerischem 4-3-3 DM breit aber ebenfalls Räume an.',
    keyPlayers:['Matteo Roose','Lucas Espíndola','Moussa Camara','Alexandre Munoz','Martin Hesse','Alain Meoqui'],
    tags:['Champions League 2041/42','Ligaphase','Auswärtsspiel','4-4-2','La Liga','Aggressivität','Standards','Letztes Spiel 2041'],
    meetings,
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true,meetings:true},
    probableXI:[
      {name:'Jocelyn Metz-Riehl',role:'Mitspielender Torwart',zone:'TW'},
      {name:'Diego Bellini',role:'Außenverteidiger',zone:'VL'},
      {name:'Daniel Nieto',role:'Innenverteidiger',zone:'IVL'},
      {name:'Fabrício Barbosa',role:'Kompromissloser Innenverteidiger',zone:'IVR'},
      {name:'Moussa Camara',role:'Flügelverteidiger',zone:'VR'},
      {name:'Lucas Espíndola',role:'Flügelspieler',zone:'ML'},
      {name:'Matteo Roose',role:'Vorgeschobener Spielmacher',zone:'MZL'},
      {name:'Sven Hölzenbein',role:'Ballgewinnender Mittelfeldspieler',zone:'MZR'},
      {name:'Alain Meoqui',role:'Äußerer Spielmacher',zone:'MR'},
      {name:'Alexandre Munoz',role:'Stoßstürmer',zone:'STL'},
      {name:'Samuel Heller',role:'Hängende Spitze',zone:'STR'}
    ],
    squadNotes:[
      {name:'Alexandre Munoz',detail:'27-jähriger französischer Offensivspieler. 17 Startelf- plus 1 Joker-Einsatz, 5 Tore, Durchschnittsnote 6,86; Transferwert €203–223 Mio.'},
      {name:'Lucas Espíndola',detail:'29-jähriger kolumbianischer Linksaußen. 16 Einsätze, 5 Tore, 2 Vorlagen und Durchschnittsnote 7,15.'},
      {name:'Moussa Camara',detail:'29-jähriger deutscher Rechtsverteidiger/-flügel. 16 Einsätze, 2 Vorlagen und Durchschnittsnote 7,26; der Scoutbericht hebt seine rechte Verteidigerseite ausdrücklich hervor.'},
      {name:'Matteo Roose',detail:'31-jähriger belgischer Mittelfeldspieler. 18 Einsätze, 3 Tore, 6 Vorlagen und Durchschnittsnote 7,09; laut Scoutbericht zuletzt in sehr starker Form.'},
      {name:'Alain Meoqui',detail:'31-jähriger spanischer rechter Mittelfeld-/Offensivspieler. 17 Startelf- plus 1 Joker-Einsatz, 3 Tore, 3 Vorlagen und Durchschnittsnote 7,10.'},
      {name:'Martin Hesse',detail:'30-jähriger bosnischer Offensivspieler. 7 Startelf- plus 9 Joker-Einsätze und bereits 7 Tore; gefährliche Option aus Startelf oder Bank.'},
      {name:'Samuel Heller',detail:'32-jähriger brasilianischer Offensivspieler. 12 Startelf- plus 1 Joker-Einsatz, 2 Tore, 3 Vorlagen und Durchschnittsnote 6,92; im Scoutbericht als zuletzt formschwach markiert.'},
      {name:'Daniel Nieto',detail:'27-jähriger spanischer Innenverteidiger/Sechser. 18 Einsätze, 1 Tor, Durchschnittsnote 6,82 und Transferwert €151–177 Mio.'},
      {name:'Fabrício Barbosa',detail:'27-jähriger brasilianischer Innenverteidiger, 197 cm. 14 Einsätze, 1 Tor und Durchschnittsnote 6,82.'},
      {name:'Diego Bellini',detail:'33-jähriger brasilianischer Linksverteidiger/Innenverteidiger. 17 Einsätze, 1 Vorlage und Durchschnittsnote 6,92; laut Scoutbericht sowohl links als auch innen zuverlässig.'},
      {name:'Jocelyn Metz-Riehl',detail:'32-jähriger belgischer Torwart. 14 Einsätze und Durchschnittsnote 6,87.'}
    ],
    scouting:{
      strengths:[
        'Das 4-4-2 erzeugt laut Scoutbericht sehr viele Großchancen und ist die zentrale offensive Grundordnung.',
        'Real Sociedad wird als physisch starke und aggressive Mannschaft beschrieben, ohne regelmäßig über die Stränge zu schlagen.',
        'Die Arbeit ohne Ball und das Stellungsspiel werden positiv hervorgehoben.',
        'Matteo Roose war unmittelbar vor dem Spiel in sehr starker Form und ist mit 3 Toren sowie 6 Vorlagen der sichtbar produktivste zentrale Kreativspieler des exportierten Kaders.',
        'Lucas Espíndola verbindet auf links 5 Tore mit 2 Vorlagen und einer Durchschnittsnote von 7,15.',
        'Moussa Camara wird im Scoutbericht ausdrücklich als starke Besetzung der rechten Verteidigerseite genannt.',
        'Martin Hesse hat trotz vieler Jokerauftritte bereits 7 Treffer erzielt.',
        'Standards erzeugen regelmäßig Chancen; bei der Verteidigung dieser Situationen bleibt die Harps-Lufthoheit wichtig.'
      ],
      weaknesses:[
        'Der Scoutbericht markiert Abschläge der Torhüter als Unsicherheitsbereich.',
        'Ein relevanter Teil der jüngsten Gegentore entstand nach kurzen Pässen, was Kombinationen in und um den Strafraum attraktiv macht.',
        'Die Verteidigung am ersten Pfosten wird bei Standards als unterdurchschnittlicher Bereich ausgewiesen.',
        'Samuel Heller wird unmittelbar vor dem Spiel als formschwach beschrieben.',
        'Das eigene 4-4-2 lässt laut Scoutbericht ebenfalls mehrere Großchancen pro 90 Minuten zu.',
        'Gegen ein 4-3-3 DM breit zeigte sich Real Sociedad verwundbar und ließ in dieser Formation regelmäßig Großchancen zu.'
      ],
      plan:[
        'Am gewohnten 4-3-3 DM breit festhalten: Genau diese gegnerische Formation wird im Scoutbericht als problematisch für Sociedad markiert.',
        'Matteo Roose im Aufbau früh unter Druck setzen und seine Verbindungen zu Espíndola, Meoqui und den beiden Spitzen stören.',
        'Die zentrale Überzahl gegen das 4-4-2 nutzen und mit zusätzlichen Läufen zwischen Mittelfeld- und Abwehrlinie arbeiten.',
        'Kurze Kombinationen und Rückpässe im Strafraum suchen, weil Sociedad zuletzt auffällig viele Gegentore nach kurzen Pässen kassierte.',
        'Standards auf den ersten Pfosten und zweite Bälle vorbereiten; dort weist der Scoutbericht einen defensiven Schwachpunkt aus.',
        'Martin Hesse auch von der Bank im Blick behalten: Seine 7 Tore bei nur 7 Startelfeinsätzen machen ihn zu einer gefährlichen späten Option.',
        'Nach der 1:2-Niederlage in Barcelona nicht vorsichtiger werden, sondern die eigene Struktur beibehalten und Sociedad zu Entscheidungen unter Tempo zwingen.'
      ]
    },
    pressReport:{id:'2041-11-28-real-sociedad-ligaphase-vorbericht',href:'presse.html?id=2041-11-28-real-sociedad-ligaphase-vorbericht',label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Jahresfinale in San Sebastián: Real Sociedad wartet auf Finn Harps'}
  };
  upsert(window.FM_CLUBS,clubData);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-11-28';
    season.latestHeadline='Champions League: Real Sociedad ist der letzte Gegner von Finn Harps im Kalenderjahr 2041.';
    season.changes=season.changes||{notes:[]};
    const note='28.11.2041: Scoutbericht für das letzte Spiel des Kalenderjahres gegen Real Sociedad. Die Spanier spielen ein offensiv gefährliches 4-4-2, zeigen aber Verwundbarkeit gegen 4-3-3 DM breit.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const report={
    id:'2041-11-28-real-sociedad-ligaphase-vorbericht',type:'Pressevorbericht',date:'2041-11-28',competition:'UEFA Champions League',
    fixtureDate:'11.12.2041',home:'Real Sociedad',away:'Finn Harps',location:'San Sebastián · Auswärtsspiel · Champions-League-Ligaphase, 6. Spieltag',
    headline:'Jahresfinale in San Sebastián: Real Sociedad wartet auf Finn Harps',
    subheadline:'Nach der ersten Ligaphasen-Niederlage in Barcelona wartet mit Real Sociedad der nächste spanische Gegner. Das 4-4-2 erzeugt viele Großchancen, ist gegen 4-3-3 DM breit aber selbst verwundbar.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · 6. SPIELTAG',
    heroStat:{label:'Finn Harps vor Spieltag 6',value:'12 Punkte',note:'5 Spiele · 4 Siege · 11:3 Tore · Platz 5'},
    backlink:{href:'klub.html?id=real-sociedad',label:'← ZUM REAL-SOCIEDAD-DOSSIER'},
    intro:'Das Kalenderjahr 2041 endet mit einem zweiten Champions-League-Auswärtsspiel in Spanien. Nach dem 1:2 bei Barcelona reist Finn Harps zu Real Sociedad, das zum Scoutzeitpunkt Vierter in La Liga ist. Die Mannschaft spielt ein klares 4-4-2, arbeitet aggressiv und physisch und erzeugt aus dieser Struktur viele Chancen. Gleichzeitig zeigt der Bericht genau gegen das 4-3-3 DM breit der Harps eine erkennbare Verwundbarkeit.',
    sections:[
      {title:'Roose ist der kreative Taktgeber',text:'Matteo Roose kommt auf 18 Einsätze, 3 Tore und 6 Vorlagen. Der Scoutbericht hebt zusätzlich seine jüngste Form hervor. Finn Harps sollte verhindern, dass er ungestört die beiden Stürmer und die Außenspieler verbinden kann.'},
      {title:'Espíndola und Camara geben links und rechts Qualität',text:'Lucas Espíndola steht bei fünf Toren und zwei Vorlagen, Moussa Camara bei einer Durchschnittsnote von 7,26. Sociedad besitzt damit auf beiden Seiten Spieler, die konstant Einfluss auf das Spiel nehmen.'},
      {title:'Hesse ist die Bankgranate',text:'Martin Hesse hat bei sieben Startelf- und neun Jokereinsätzen sieben Tore erzielt. Auch wenn er nicht zwingend beginnt, bleibt er für die Schlussphase eine klare Gefahr.'},
      {title:'Das 4-4-2 ist Stärke und offene Tür zugleich',text:'Der Scoutbericht beschreibt die Grundordnung als produktiv bei der Chance-Erzeugung. Gleichzeitig lässt Sociedad daraus ebenfalls Großchancen zu und wirkt speziell gegen ein 4-3-3 DM breit verwundbar.'},
      {title:'Kurze Kombinationen statt blinder Flanken',text:'Ein auffälliger Anteil der jüngsten Gegentore entstand nach kurzen Pässen. Das spricht für die übliche Harps-Idee mit Kombinationen, Rückpässen und Läufen zwischen den Linien statt für eine reine Flankenstrategie.'},
      {title:'Das letzte Kapitel von 2041',text:'Nach dem Spiel in San Sebastián ist das Kalenderjahr sportlich abgeschlossen. Anschließend kann die 2041er Saisonbilanz im Wiki finalisiert und die Datenebene für 2042 aufgesetzt werden, während die laufende Champions-League-Saison 2041/42 sauber fortgeführt wird.'}
    ],
    strengthsTitle:'WAS REAL SOCIEDAD GEFÄHRLICH MACHT',strengthsHeading:'4-4-2, Physis und mehrere produktive Achsen',
    strengths:['Produktives 4-4-2','Aggressive und physisch starke Mannschaft','Roose: 3 Tore und 6 Vorlagen','Espíndola: 5 Tore und 2 Vorlagen','Camara: Ø 7,26','Hesse: 7 Tore trotz vieler Jokerauftritte','Gute Arbeit ohne Ball','Regelmäßige Standardchancen'],
    vulnerabilitiesTitle:'WO FINN HARPS ANSETZEN KANN',vulnerabilitiesHeading:'Das eigene 4-3-3 trifft eine erkennbare Sollbruchstelle',
    vulnerabilities:['4-3-3 DM breit wird als problematische gegnerische Formation markiert','4-4-2 lässt selbst mehrere Großchancen zu','Gegentore nach kurzen Pässen','Schwäche am ersten Pfosten bei Standards','Unsicherheit bei Torwart-Abschlägen','Samuel Heller zuletzt außer Form'],
    keyDuelsTitle:'SCHLÜSSELDUELLE',keyDuelsHeading:'Wo das Jahresfinale kippen kann',
    keyDuels:[
      {title:'Harps-Mittelfeld gegen Matteo Roose',text:'Roose ist die wichtigste sichtbare Kreativquelle. Wird er unter Druck gesetzt, muss Sociedad häufiger direkt über Außen oder auf die beiden Spitzen spielen.'},
      {title:'Harps-Flügel gegen Bellini und Camara',text:'Camara ist rechts stark, Bellini links verlässlich. Die Harps müssen beide mit Tiefe und Positionswechseln beschäftigen, statt ihnen freie Vorwärtsläufe zu erlauben.'},
      {title:'Escárcega gegen Nieto/Barbosa',text:'Barbosa bringt mit 197 Zentimetern enorme Präsenz mit. Escárcega sollte deshalb über Bewegung, flache Zuspiele und Läufe in die Schnittstellen kommen, nicht über statische Luftduelle.'},
      {title:'Schlussphase gegen Martin Hesse',text:'Sieben Tore bei vielen Jokerauftritten machen Hesse zu einem Spieler, der ein enges Spiel spät verändern kann.'}
    ],
    verdictHeading:'Kein Grund für einen Systemwechsel',
    verdict:'Real Sociedad ist ein starker Gegner und steht in La Liga weit oben, aber der Scoutbericht liefert keinen Grund, die Harps-Idee nach Barcelona zu verbiegen. Im Gegenteil: Das vertraute 4-3-3 DM breit trifft genau eine Struktur, gegen die Sociedad Probleme gezeigt hat. Wenn Finn Harps Roose kontrolliert, die zentrale Überzahl sauber nutzt und bei kurzen Kombinationen geduldig bleibt, ist ein starker Abschluss des Kalenderjahres realistisch.',
    sources:['FM-Scoutbericht Real Sociedad · 28.11.2041','FM-Kaderexport Real Sociedad · 28.11.2041','Champions-League-Spielplan Finn Harps 2041/42']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-11-28-real-sociedad-preview',date:'2041-11-28',season:2041,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · JAHRESFINALE 2041',title:'Nach Barcelona wartet Real Sociedad',
    summary:'Finn Harps beendet das Kalenderjahr auswärts in San Sebastián. Sociedad bringt ein gefährliches 4-4-2, zeigt gegen 4-3-3 DM breit aber genau die Räume, die den Harps liegen können.',
    href:'presse.html?id=2041-11-28-real-sociedad-ligaphase-vorbericht',
    entities:['finn-harps','real-sociedad','matteo-roose','martin-hesse','champions-league','season-2041']
  });
})();