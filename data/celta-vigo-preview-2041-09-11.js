(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const previous=window.FM_CLUBS.find(x=>x.id==='celta-vigo')||{};
  const meetings=[...(previous.meetings||[])];
  const upcoming={date:'18.09.2041',venue:'H',result:'Champions-League-Ligaphase · anstehend'};
  const meetingIndex=meetings.findIndex(x=>x.date===upcoming.date);
  if(meetingIndex>=0)meetings[meetingIndex]=upcoming;else meetings.push(upcoming);

  const clubData={
    ...previous,
    id:'celta-vigo',name:'RC Celta de Vigo',short:'CEL',country:'Spanien',league:'LaLiga EA Sports',season:2041,
    status:'current',completion:94,
    summary:'Celta Vigo kommt am 18. September 2041 zum zweiten Spieltag der Champions-League-Ligaphase nach Donegal. Der spanische Klub liegt laut aktuellem Scoutbericht auf Rang 11 der LaLiga und bringt mit Ex-Harps-Mittelfeldspieler Vinícius ein vertrautes Gesicht mit.',
    formation:'Best-XI-Ansicht: 4-1-2-2-1/4-3-3 mit defensivem Mittelfeld',
    keyPlayers:['Pete Cooper','Adam Medjahed','Omar Benzerga','Jorge Paiva','Miguel Ángel','Vinícius'],
    tags:['Champions League 2041/42','Ligaphase','LaLiga Rang 11','Vinícius-Wiedersehen','4-3-3','Standards','Pete Cooper'],
    meetings,
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true,meetings:true},
    probableXI:[
      {name:'Omar Benzerga',role:'Mitspielender Torwart',zone:'TW'},
      {name:'Miguel Ángel',role:'Inverser Außenverteidiger',zone:'VL'},
      {name:'Eric Eloy',role:'Kompromissloser Innenverteidiger',zone:'IVL'},
      {name:'Lucas Daniel',role:'Kompromissloser Innenverteidiger',zone:'IVR'},
      {name:'Jorge Paiva',role:'Inverser Flügelverteidiger',zone:'VR'},
      {name:'Vinícius',role:'Abräumer',zone:'DM'},
      {name:'Borja Simón',role:'Zentraler Mittelfeldspieler',zone:'MZL'},
      {name:'Jordan Brückmann',role:'Mezzala',zone:'MZR'},
      {name:'Gomes',role:'Flügelspieler',zone:'OML'},
      {name:'Adam Medjahed',role:'Vorgeschobener Spielmacher',zone:'OMR'},
      {name:'Pete Cooper',role:'Stoßstürmer',zone:'ST'}
    ],
    currentForm:[
      {name:'Pete Cooper',detail:'6 Einsätze, 5 Tore, letzte fünf Spiele 7,28 und Durchschnittsnote 7,15.'},
      {name:'Adam Medjahed',detail:'4 Einsätze, 2 Vorlagen, letzte fünf Spiele 7,30 und Durchschnittsnote 7,28.'},
      {name:'Vinícius',detail:'6 Einsätze, keine Tore oder Vorlagen, letzte fünf Spiele 6,76 und Durchschnittsnote 6,67.'},
      {name:'Hans Boeve',detail:'Scout markiert ihn als formschwach: 6,35 über die letzten fünf Spiele.'},
      {name:'Unai Salvatierra',detail:'3 Einsätze, 1 Vorlage und Durchschnittsnote 7,60.'}
    ],
    scouting:{
      strengths:[
        'Celta erzeugt laut Scout überdurchschnittlich gute Chancen nach Standards; der ausgewiesene Standard-xG-Wert liegt bei 0,33 und damit auf Rang 2 im Ligavergleich.',
        'Die Torhüter werden beim Halten, bei der Strafraumkontrolle, beim Herauslaufen und bei langen Abschlägen positiv bewertet.',
        'Omar Benzerga wird ausdrücklich als hervorragender Torwart hervorgehoben.',
        'Jorge Paiva gilt als gute Option auf der rechten, Miguel Ángel als hervorragende Option auf der linken Verteidigerseite.',
        'Pete Cooper ist mit fünf Treffern in sechs Einsätzen der klare aktuelle Torjäger.',
        'Teamwork, Einsatzfreude, Deckung und Tackling werden im Scoutbericht positiv hervorgehoben.'
      ],
      weaknesses:[
        'Celta kassierte in der ausgewiesenen 20-Spiele-Probe auffällig viele Gegentore in der Anfangsviertelstunde.',
        'Vier der letzten zwölf Gegentore entstanden nach Standards.',
        'Der Scout sieht bei der Exzentrizität der Torhüter Verbesserungspotenzial.',
        'Abwürfe und Antritt gehören nicht zu den klaren Stärken des Torwartspiels.',
        'Es fehlt laut Scout an einem wirklich guten Freistoßschützen.',
        'Hans Boeve ist mit 6,35 über die letzten fünf Spiele deutlich außer Form.',
        'Gegen ein 4-2-3-1 mit defensivem Mittelfeld und Breite wurden in der Scoutprobe im Schnitt drei Großchancen pro 90 Minuten zugelassen.'
      ],
      plan:[
        'Die ersten 15 bis 20 Minuten aktiv angehen. Celta kassiert in der Scoutprobe überproportional viele frühe Gegentore.',
        'Vinícius als alleinigen Abräumer mit kurzen Kombinationen und Läufen aus beiden Halbräumen beschäftigen.',
        'Standards offensiv ernst nehmen: Vier der letzten zwölf Gegentore fielen nach ruhenden Bällen.',
        'Pete Cooper eng kontrollieren und zweite Bälle vor dem Strafraum sichern; er steht bei fünf Toren in sechs Einsätzen.',
        'Medjahed nicht frei zwischen Linie und Flügel aufdrehen lassen; er ist aktuell einer der formstärksten Kreativspieler Celtas.',
        'Keine unnötigen hohen Zufallsbälle gegen die robuste Innenverteidigung. Lieber flach und geduldig durch die Zwischenräume kombinieren.',
        'Benzerga mit scharfen Abschlüssen und Nachsetzbewegungen prüfen, statt auf reine Torwartfehler zu hoffen.'
      ]
    },
    pressReport:{id:'2041-09-11-celta-vigo-ligaphase-vorbericht',href:'presse.html?id=2041-09-11-celta-vigo-ligaphase-vorbericht',label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Nach United wartet Celta: Vinícius kehrt nach Donegal zurück'}
  };
  upsert(window.FM_CLUBS,clubData);

  const report={
    id:'2041-09-11-celta-vigo-ligaphase-vorbericht',type:'Pressevorbericht',date:'2041-09-11',competition:'UEFA Champions League',
    fixtureDate:'Donnerstag, 18.09.2041',home:'Finn Harps',away:'RC Celta de Vigo',location:'Donegal Stadium · Ligaphase, 2. Spieltag',
    headline:'Nach United wartet Celta: Vinícius kehrt nach Donegal zurück',
    subheadline:'Finn Harps geht nach dem 1:0 gegen Manchester United mit Rückenwind in den zweiten Ligaphasen-Spieltag. Celta bringt Pete Cooper als formstarken Torjäger, starke Standards und mit Vinícius einen alten Bekannten mit.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · 2. SPIELTAG',
    heroStat:{label:'Celtas Torjäger',value:'5 Tore',note:'Pete Cooper in 6 Einsätzen'},
    backlink:{href:'klub.html?id=celta-vigo',label:'← ZUM CELTA-VIGO-DOSSIER'},
    intro:'Eine Woche nach dem großen Sieg über Manchester United folgt eine andere Art von Prüfung. Celta Vigo ist individuell weniger einschüchternd als United, besitzt aber ein klares 4-3-3-Gerüst, gefährliche Standards und mit Pete Cooper einen Stürmer in guter Frühform. Dazu kehrt Vinícius erstmals als Gegner nach Donegal zurück.',
    sections:[
      {title:'Vinícius steht vor der Abwehr',text:'Der frühere Harps-Mittelfeldspieler wird in Celtas Best-XI-Ansicht als Abräumer eingesetzt. Seine ersten sechs Ligaeinsätze in Spanien brachten noch kein Tor und keine Vorlage; die aktuelle Durchschnittsnote liegt bei 6,67. Für Finn Harps ist seine Position trotzdem taktisch wichtig, weil viele Angriffe genau in seinem Raum zwischen Abwehr und Mittelfeld zusammenlaufen werden.'},
      {title:'Cooper ist die klare Abschlussgefahr',text:'Pete Cooper hat in sechs Einsätzen bereits fünf Tore erzielt und wird vom Scout als einer der auffälligsten Torjäger des Wettbewerbs hervorgehoben. Celta muss nicht viele Chancen produzieren, wenn Cooper in der Box saubere Kontakte bekommt.'},
      {title:'Medjahed liefert die Kreativität',text:'Adam Medjahed kommt in vier Einsätzen auf zwei Vorlagen, 7,30 über die letzten fünf Spiele und 7,28 im Schnitt. Von der rechten Offensivseite aus ist er der Spieler, der Cooper und die nachrückenden Mittelfeldspieler mit dem letzten Pass verbinden kann.'},
      {title:'Standards sind in beide Richtungen relevant',text:'Celta erzeugt nach ruhenden Bällen laut Scout überdurchschnittlich gute Chancen. Gleichzeitig entstanden vier der letzten zwölf Gegentore selbst nach Standards. Für Finn Harps bedeutet das: eigene ruhende Bälle gezielt vorbereiten, defensiv aber keine billigen Freistöße und Ecken schenken.'},
      {title:'Der Start kann das Spiel öffnen',text:'In der ausgewiesenen 20-Spiele-Probe kassierte Celta auffällig viele Gegentore in der Anfangsviertelstunde. Nach dem emotionalen United-Abend sollte Finn Harps deshalb nicht in einen langsamen Verwaltungsstart verfallen, sondern die erste Phase bewusst nutzen.'},
      {title:'Das 4-3-3 bietet einen klaren Angriffspunkt',text:'Vinícius sichert zentral vor der Viererkette, Brückmann und Simón arbeiten davor. Werden diese drei mit schnellen Dreiecken und Läufen aus beiden Halbräumen auseinandergezogen, können Räume zwischen Mittelfeld und Abwehr entstehen. Genau dort besitzen O’Kane, Frame und die Harps-Außen ihre stärksten Verbindungen.'}
    ],
    strengthsTitle:'WAS CELTA GEFÄHRLICH MACHT',strengthsHeading:'Standards, Cooper und ein stabiles Torwartfundament',
    strengths:['Pete Cooper mit 5 Toren in 6 Einsätzen','Gefährliche Standards','Omar Benzerga als starker Torwart','Gute Strafraumkontrolle und Herauslaufen','Paiva und Miguel Ángel als solide Außenverteidiger','Medjahed als formstarker Kreativspieler'],
    vulnerabilitiesTitle:'WO FINN HARPS ANSETZEN KANN',vulnerabilitiesHeading:'Frühe Gegentore, Standards und der Raum um Vinícius',
    vulnerabilities:['Auffällig viele Gegentore in der Anfangsviertelstunde','4 der letzten 12 Gegentore nach Standards','Hans Boeve zuletzt nur 6,35','Anfälligkeit gegen 4-2-3-1 mit breiter Staffelung in der Scoutprobe','Vinícius muss als alleiniger Abräumer große zentrale Räume kontrollieren'],
    keyDuelsTitle:'SCHLÜSSELDUELLE',keyDuelsHeading:'Drei Stellen, an denen der zweite Spieltag kippen kann',
    keyDuels:[
      {title:'Harps-Innenverteidigung gegen Pete Cooper',text:'Cooper ist mit fünf Toren in sechs Spielen Celtas klarer Abschlussmann. Er darf bei Flanken und zweiten Bällen nicht frei zum ersten Kontakt kommen.'},
      {title:'O’Kane und Frame gegen Vinícius',text:'Das Wiedersehen ist zugleich ein taktisches Duell. Vinícius kennt die Harps, muss aber als Abräumer gleich mehrere dynamische Läufe aus dem Zentrum aufnehmen.'},
      {title:'Harps linke Seite gegen Medjahed',text:'Medjahed ist aktuell Celtas kreativster Flügelspieler. Seine zwei Vorlagen und starken Noten machen ihn zum wichtigsten Verbindungsspieler hinter Cooper.'}
    ],
    matchPlanTitle:'MATCHPLAN FINN HARPS',matchPlanHeading:'Früh Druck machen, danach über Kontrolle gewinnen',
    matchPlan:[
      'Die Anfangsviertelstunde aggressiv spielen und Celtas bekannte Frühphasen-Anfälligkeit testen.',
      'Vinícius mit Überladungen und Läufen aus beiden Halbräumen aus seiner zentralen Sicherungsposition ziehen.',
      'Eigene Standards gezielt auf zweite Bälle und klare Laufwege vorbereiten.',
      'Cooper im Strafraum doppeln und Medjaheds erste Drehung verhindern.',
      'Nicht nach dem United-Sieg in einen emotionalen Leerlauf geraten: Celta ist schwächer als United, aber strukturell gefährlich.',
      'Bei Führung Ball und Gegner bewegen, statt ein wildes Übergangsspiel zuzulassen.'
    ],
    verdictHeading:'Finn Harps ist Favorit, aber Celta ist ein Konzentrationstest',
    verdict:'Nach dem 1:0 gegen Manchester United wäre alles andere als eine klare Favoritenrolle der Harps künstlich klein geredet. Celta besitzt aber genug Qualität, um Nachlässigkeit zu bestrafen. Der Schlüssel liegt darin, den United-Abend nicht emotional nachhallen zu lassen: frühe Intensität, saubere Halbraumkombinationen und konsequente Restverteidigung sollten Finn Harps in die bessere Position bringen.',
    sourcesHeading:'Scoutbericht und Mannschaftsexport vom 11. September 2041',
    sourcesNote:'Der Vorbericht basiert ausschließlich auf den bereitgestellten Football-Manager-Screenshots und dem Mannschaftsexport. Nicht eindeutig sichtbare Detailwerte wurden bewusst nicht ergänzt.',
    sources:['FM-Scoutbericht RC Celta de Vigo · 11.09.2041','FM-Mannschaftsexport RC Celta de Vigo · 11.09.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-11-celta-vigo-preview',date:'2041-09-11',season:2041,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · LIGAPHASE · CELTA VIGO',
    title:'Vinícius kehrt zurück: Nach United wartet Celta Vigo',
    summary:'Celta kommt mit Pete Cooper als Fünf-Tore-Stürmer und gefährlichen Standards nach Donegal. Im Zentrum wartet Ex-Harps-Spieler Vinícius als Abräumer.',
    href:'presse.html?id=2041-09-11-celta-vigo-ligaphase-vorbericht',
    entities:['finn-harps','celta-vigo','vinicius','pete-cooper','champions-league','season-2041']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-09-11';
    season.latestHeadline='Champions League: Nach dem 1:0 gegen Manchester United wartet am 18. September Celta Vigo mit Ex-Harps-Mittelfeldspieler Vinícius.';
    season.changes=season.changes||{notes:[]};
    const note='11.09.2041: Celta Vigo als nächster Champions-League-Gegner analysiert. Vinícius kehrt als Abräumer nach Donegal zurück; Pete Cooper steht bei fünf Toren in sechs Einsätzen.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const vinicius=(window.FM_PLAYERS||[]).find(x=>x.id==='vinicius');
  if(vinicius){
    const text='Am 18. September 2041 kehrt Vinícius mit Celta Vigo als Champions-League-Gegner ins Donegal Stadium zurück. In Celtas aktueller Best-XI-Ansicht spielt er als Abräumer vor der Abwehr.';
    if(!((vinicius.careerNarrative||[]).includes(text)))vinicius.careerNarrative=[...(vinicius.careerNarrative||[]),text];
  }
})();