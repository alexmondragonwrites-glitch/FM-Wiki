(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const previous=window.FM_CLUBS.find(x=>x.id==='man-utd')||{};
  const meetings=[...(previous.meetings||[])];
  const upcoming={date:'10.09.2041',venue:'H',result:'Champions-League-Ligaphase · anstehend'};
  const meetingIndex=meetings.findIndex(x=>x.date===upcoming.date);
  if(meetingIndex>=0)meetings[meetingIndex]=upcoming;else meetings.push(upcoming);

  const clubData={
    ...previous,
    id:'man-utd',name:'Manchester United',short:'MUN',country:'England',league:'Premier League',season:2041,
    status:'current',completion:96,
    summary:'Manchester United kommt am 10. September 2041 zum Auftakt der Champions-League-Ligaphase nach Donegal. Der Premier-League-Vierte ist zugleich der Gegner, der Finn Harps im Frühjahr mit zwei 2:1-Siegen und 4:2 insgesamt aus dem Champions-League-Halbfinale warf.',
    manager:previous.manager||'Nicht im Export ausgewiesen',stadium:'Old Trafford',
    formation:'Best-XI-Ansicht: 4-2-3-1; Scouttrend: 4-4-2 und 4-4-2 eng als häufige beziehungsweise erfolgreiche Varianten',
    squadValue:'Kadervergleich am 07.09.2041: Transferwert-Anzeige ca. €82,99 Mio. gegenüber €35,5 Mio. bei Finn Harps',
    avgAge:'27,56 Jahre im Kadervergleich; Finn Harps 22,30 Jahre',
    keyPlayers:['Aymar Kitenge','Guillermo Villano','Aleš Želko','Yizhar Kricheli','Nathan Ribeiro','Said Toufiqui','Santiago Ángel'],
    tags:['Champions League 2041/42','Ligaphase','Premier League Rang 4','Revanche nach Halbfinale','4-2-3-1','4-4-2','Flügelspiel','physisch stark','Standards gefährlich'],
    meetings,
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true,meetings:true},
    squadMeta:{
      ...(previous.squadMeta||{}),exportedPlayers:32,comparisonDate:'2041-09-07',avgAge:27.56,avgHeightCm:180,avgWeightKg:75,
      seniorInternationalCaps:52,juniorInternationalCaps:6,wageComparison:'€250.000/W. vs. €44.500/W. Finn Harps',
      transferValueComparison:'ca. €82,99 Mio. vs. €35,5 Mio. Finn Harps',unavailable:1
    },
    probableXI:[
      {name:'Santiago Ángel',role:'Mitspielender Torwart',zone:'TW'},
      {name:'Mërgim Lluca',role:'Inverser Außenverteidiger',zone:'VL'},
      {name:'Said Toufiqui',role:'Kompromissloser Innenverteidiger',zone:'IVL'},
      {name:'Karim Loulanti',role:'Ballspielender Verteidiger',zone:'IVR'},
      {name:'William Lebrun',role:'Inverser Flügelverteidiger',zone:'VR'},
      {name:'Şükrü Şeker',role:'Abräumer',zone:'DMZL'},
      {name:'Jhoao Talero',role:'Segundo Volante',zone:'DMZR'},
      {name:'Guillermo Villano',role:'Flügelspieler',zone:'OML'},
      {name:'Mouhssine El Fassi',role:'Offensiver Mittelfeldspieler',zone:'OMZ'},
      {name:'Aleš Želko',role:'Inverser Flügelspieler',zone:'OMR'},
      {name:'Aymar Kitenge',role:'Pressender Stürmer',zone:'ST'}
    ],
    currentForm:[
      {name:'Nathan Ribeiro',detail:'Scout nennt 7,58 im Schnitt über die letzten fünf Spiele.'},
      {name:'Guillermo Villano',detail:'Mannschaftsexport: 7,98 in den letzten fünf Spielen und 7,80 Durchschnittsnote.'},
      {name:'Aleš Želko',detail:'Mannschaftsexport: drei Vorlagen, 7,18 in den letzten fünf Spielen und 7,40 Durchschnittsnote.'},
      {name:'Aymar Kitenge',detail:'Mannschaftsexport: vier Einsätze, zwei Vorlagen, ein Tor und 7,38 Durchschnittsnote.'},
      {name:'Yizhar Kricheli',detail:'Mannschaftsexport: zwei Startelfeinsätze plus ein Einsatz als Joker und zwei Tore.'},
      {name:'Jhoao Talero',detail:'Scout markiert ihn als formschwach: 6,48 im Schnitt in den letzten fünf Spielen.'}
    ],
    scouting:{
      strengths:[
        'Sehr gute Einsatzfreude und Arbeitsmoral im Kader.',
        'Ausdauer und Kraft gehören laut Scout zu den klaren Mannschaftsstärken.',
        'Gutes Tackling, gutes Deckungsverhalten, starkes Stellungsspiel und hohe Antizipation.',
        'Said Toufiqui wird als hervorragende Wahl in der Innenverteidigung bewertet.',
        'Mërgim Lluca gilt als exzellente Option auf der linken Verteidigerseite.',
        'Santiago Ángel wird als hervorragender Torwart bewertet; die geringe Exzentrizität und gute Strafraumkontrolle werden positiv hervorgehoben.',
        'United ist bei Ecken gefährlich und besitzt gutes Niveau in der Kopfballtechnik.',
        'Der Scout bewertet Uniteds 4-4-2-Varianten als sehr produktiv: rund vier herausgespielte Großchancen pro 90 Minuten in den ausgewiesenen Vergleichsphasen.',
        'Nathan Ribeiro wird als formstärkster Spieler mit 7,58 über die letzten fünf Spiele hervorgehoben.'
      ],
      weaknesses:[
        'Beim Einsatz eines 4-4-2 ließ United in der ausgewiesenen Scoutprobe im Mittel etwa fünf Großchancen pro 90 Minuten zu.',
        'Der Scout sieht beim Halten und beim Herauslaufen des Torhüters beziehungsweise der Torhüter Verbesserungspotenzial.',
        'Sieben der letzten 15 Gegentore in den betrachteten 20 Spielen entstanden nach kurzen Passfolgen.',
        'Jhoao Talero ist laut Scout außer Form und kam in den letzten fünf Spielen nur auf 6,48 im Schnitt.',
        'Das Best-XI-Bild und die Formationshistorie zeigen unterschiedliche Grundordnungen; Finn Harps muss auf einen Wechsel zwischen 4-2-3-1 und 4-4-2 vorbereitet sein.'
      ],
      plan:[
        'Nicht in einen reinen Physis- und Zweikampfvergleich gehen. United ist bei Kraft, Ausdauer, Tackling und Kopfballspiel stark.',
        'Kurze Kombinationen und saubere Dreiecke durch die Halbräume priorisieren; genau nach kurzen Passfolgen fielen zuletzt auffällig viele United-Gegentore.',
        'Talero unter Druck setzen und seine aktuelle Formschwäche testen, ohne Şeker dadurch freie zweite Bälle zu schenken.',
        'Ángel früh mit flachen, scharfen Abschlüssen und Tiefenläufen prüfen. Der Scout sieht beim Halten und Herauslaufen eher Angriffspunkte als bei seiner grundsätzlichen Torwartqualität.',
        'Eigene Standards selektiv ausspielen, defensive Standards dagegen sauber verteidigen: United ist bei Ecken und Kopfballtechnik gefährlich.',
        'Kitenge und Kricheli besonders eng verfolgen. Kricheli entschied das Halbfinal-Hinspiel im Mai mit zwei Toren, Kitenge das Rückspiel ebenfalls mit einem Doppelpack.',
        'Wenn United ins 4-4-2 wechselt, zentrale Überzahlen herstellen und die Räume zwischen Mittelfeld und Abwehr attackieren; die Scoutdaten zeigen dort zugleich hohe eigene Produktion und hohe gegnerische Chancenwerte.'
      ]
    },
    pressReport:{id:'2041-09-07-manchester-united-ligaphase-vorbericht',href:'presse.html?id=2041-09-07-manchester-united-ligaphase-vorbericht',label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'United kommt zurück nach Donegal: Revanche mit verändertem Bild'}
  };
  upsert(window.FM_CLUBS,clubData);

  const report={
    id:'2041-09-07-manchester-united-ligaphase-vorbericht',type:'Pressevorbericht',date:'2041-09-07',competition:'UEFA Champions League',
    fixtureDate:'Mittwoch, 10.09.2041',home:'Finn Harps',away:'Manchester United',location:'Donegal Stadium · Ligaphase, 1. Spieltag',
    headline:'United kommt zurück nach Donegal: Der alte Halbfinalgegner als erster Härtetest',
    subheadline:'Manchester United ist Vierter der Premier League und besitzt den deutlich älteren, teureren und international erfahreneren Kader. Der aktuelle Scoutbericht zeigt aber auch konkrete Angriffspunkte bei kurzen Passkombinationen, Talero und den 4-4-2-Abständen.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · 1. SPIELTAG',
    heroStat:{label:'Letztes Europaduell',value:'2:4 gesamt',note:'Zwei 1:2-Niederlagen im Champions-League-Halbfinale 2041'},
    backlink:{href:'klub.html?id=man-utd',label:'← ZUM MANCHESTER-UNITED-DOSSIER'},
    intro:'Vier Monate nach dem Halbfinal-Aus bekommt Finn Harps sofort die Gelegenheit zum Wiedersehen. United steht aktuell auf Rang vier der Premier League. Der Kadervergleich zeigt einen deutlichen Ressourcenunterschied, während die Best-XI-Ansicht zugleich eine andere Struktur als im Frühjahr erkennen lässt: ein einzelner Kitenge vor Villano, El Fassi und Želko, abgesichert von Şeker und Talero.',
    sections:[
      {title:'Die Gesichter des Halbfinales sind noch da',text:'Yizhar Kricheli erzielte im Mai beim 2:1 in Donegal beide United-Tore. Im Rückspiel war es Aymar Kitenge, der mit zwei Treffern das zweite 2:1 und das 4:2 insgesamt besiegelte. Kitenge steht in der aktuellen Best-XI-Ansicht wieder ganz vorne; Kricheli bleibt eine hochwertige Alternative.'},
      {title:'Das aktuelle Bild wirkt eher wie 4-2-3-1',text:'Die Best-XI-Ansicht zeigt Şükrü Şeker und Jhoao Talero als Doppelsechs, davor Villano, El Fassi und Želko hinter Kitenge. Der Scout hebt gleichzeitig 4-4-2 und 4-4-2 eng als oft genutzte beziehungsweise produktive Formationen hervor. Finn Harps sollte deshalb nicht auf nur eine United-Ordnung vorbereiten.'},
      {title:'Uniteds defensive Basis ist unangenehm',text:'Tackling, Deckung, Stellungsspiel, Antizipation, Kraft und Ausdauer gehören laut Scout zu den Stärken. Said Toufiqui, Mërgim Lluca und Santiago Ángel werden einzeln ausdrücklich positiv bewertet. Ein Spiel mit vielen hohen Flanken und direkten Zweikämpfen würde United eher entgegenkommen.'},
      {title:'Kurze Kombinationen sind die interessanteste Nahtstelle',text:'Sieben der letzten 15 Gegentore in der ausgewiesenen 20-Spiele-Probe fielen nach kurzen Passfolgen. Gleichzeitig ließ United in der Scoutprobe mit einem 4-4-2 durchschnittlich etwa fünf Großchancen pro 90 Minuten zu. Für Finn Harps spricht das eher für geduldige Kombinationen durch Halbräume als für frühe Zufallsflanken.'},
      {title:'Talero ist der sichtbare Formpunkt',text:'Jhoao Talero wird vom Scout mit 6,48 über die letzten fünf Spiele als formschwach markiert. Auf der anderen Seite wird Nathan Ribeiro mit 7,58 als besonders formstark genannt. Der Mannschaftsexport weist zudem Villano und Želko mit starken jüngsten Noten aus.'},
      {title:'Der Größenunterschied bleibt real',text:'Im Kadervergleich liegt das Durchschnittsalter bei 27,56 Jahren gegenüber 22,30 bei Finn Harps. Die Gehaltsanzeige steht bei €250.000 pro Woche gegenüber €44.500, die Transferwert-Anzeige bei rund €82,99 Mio. gegenüber €35,5 Mio. Dazu weist United 52 A-Länderspiele gegenüber 21 auf. Die Harps treffen also weiterhin auf einen finanziell und erfahrungsmäßig größeren Gegner.'}
    ],
    strengthsTitle:'WAS UNITED GEFÄHRLICH MACHT',strengthsHeading:'Physis, Struktur und mehrere Wege zum Tor',
    strengths:['Kraft und Ausdauer','Tackling und Deckung','Stellungsspiel und Antizipation','Starke Innenverteidigung um Toufiqui','Ángel als starker Torwart','Gefährliche Ecken und gutes Kopfballspiel','Kitenge und Kricheli als bekannte Harps-Schreckgespenster'],
    vulnerabilitiesTitle:'WO DIE HARPS ANSETZEN KÖNNEN',vulnerabilitiesHeading:'Kurze Pässe, Talero und die Räume im 4-4-2',
    vulnerabilities:['7 der letzten 15 Gegentore nach kurzen Passfolgen','Etwa 5 zugelassene Großchancen pro 90 Minuten in der ausgewiesenen 4-4-2-Probe','Talero zuletzt nur 6,48','Scout sieht beim Halten und Herauslaufen der Torhüter Angriffspunkte','Formationswechsel zwischen 4-2-3-1 und 4-4-2 können Abstimmungsräume öffnen'],
    keyDuelsTitle:'SCHLÜSSELDUELLE',keyDuelsHeading:'Die Stellen, an denen die Revanche entschieden werden kann',
    keyDuels:[
      {title:'Harps-Innenverteidigung gegen Kitenge',text:'Kitenge entschied das Rückspiel im Mai mit zwei Toren und steht wieder als zentrale Spitze in der Best-XI-Ansicht. Seine Pressing- und Tiefenläufe dürfen die letzte Linie nicht auseinanderziehen.'},
      {title:'Harps-Halbräume gegen Talero und Şeker',text:'Talero ist aktuell der sichtbarste Formschwachpunkt. Finn Harps sollte ihn mit schnellen Dreiecken zu Richtungswechseln zwingen, ohne Şeker freie Ballgewinne zu schenken.'},
      {title:'O’Kane/Frame gegen Uniteds zentrale Ordnung',text:'Im Halbfinale nahm United den Harps die Halbräume phasenweise gut weg. Diesmal spricht die Scoutprobe dafür, gerade dort mit kurzen Kombinationen und nachrückenden Läufen anzusetzen.'},
      {title:'United-Standards gegen Harps-Disziplin',text:'United ist bei Ecken und in der Luft stark. Unnötige Fouls und vermeidbare Ecken würden eine ihrer klarsten Stärken füttern.'}
    ],
    matchPlanTitle:'MATCHPLAN FINN HARPS',matchPlanHeading:'Nicht kleiner machen als nötig, aber Uniteds Stärken nicht freiwillig bedienen',
    matchPlan:[
      'Ballbesitz nicht nur als Kontrolle nutzen, sondern mit kurzen, schnellen Passfolgen in die Halbräume beschleunigen.',
      'United nicht durch viele hohe Flanken und zweite Bälle in einen Physiswettkampf einladen.',
      'Talero gezielt pressen und bei Uniteds Wechsel ins 4-4-2 die zentralen Abstände attackieren.',
      'Nach Ballverlusten Kitenge sofort absichern und Kricheli als möglichen Joker im Blick behalten.',
      'Ángel mit klaren Tiefenläufen und flachen Abschlüssen testen, statt auf Zufall aus der Distanz zu setzen.',
      'Defensive Standards maximal sauber verteidigen und unnötige Ecken vermeiden.'
    ],
    verdictHeading:'Das ist kein Spiel mehr zwischen Wunderteam und Gigant, sondern ein echter europäischer Vergleich',
    verdict:'United bleibt aufgrund von Kaderwert, Gehalt, Erfahrung und individueller Qualität ein gewaltiger Gegner. Aber die beiden Halbfinalspiele im Mai waren enger, als das 2:4 insgesamt klingt, und Finn Harps kommt diesmal als souveräner irischer Meister mit enormem Rhythmus in das Duell. Der Schlüssel ist nicht, United zu kopieren, sondern die eigene Ballkontrolle in saubere Chancen zu verwandeln und die wenigen zugelassenen Umschaltmomente konsequent zu verteidigen.',
    sourcesHeading:'Scoutbericht und Mannschaftsexport vom 7. September 2041',
    sourcesNote:'Die Best-XI-Ansicht zeigt ein 4-2-3-1-artiges Bild, während der Scoutbericht 4-4-2-Varianten als wiederkehrende Formation beschreibt. Beide Hinweise werden bewusst nebeneinander dokumentiert.',
    sources:['FM-Datencenter Manchester United · 07.09.2041','FM-Kadervergleich Finn Harps – Manchester United · 07.09.2041','FM-Mannschaftsexport Manchester United · 07.09.2041','Champions-League-Halbfinale Finn Harps – Manchester United · Mai 2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-09-07';
    season.championsLeague='Ligaphase 2041/42 · Auftakt am 10.09.2041 gegen Manchester United';
    season.europeContext={
      ...(season.europeContext||{}),nextMatch:'10.09.2041 · Finn Harps – Manchester United',
      opponentContext:'Manchester United beendete die Champions-League-Titelverteidigung der Harps im Mai 2041 mit zwei 2:1-Siegen und 4:2 insgesamt.',
      scoutingDate:'2041-09-07'
    };
  }

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-07-manchester-united-ligaphase-preview',date:'2041-09-07',season:2041,category:'Champions League',accent:'red',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · LIGAPHASE · 3 TAGE BIS UNITED',
    title:'Der Halbfinalgegner kehrt zurück: United-Scoutbericht liegt vor',
    summary:'United kommt als Premier-League-Vierter nach Donegal. Der aktuelle Bericht zeigt enorme Physis und starke Defensivgrundlagen, aber auch Angriffspunkte bei kurzen Passkombinationen, Talero und den 4-4-2-Abständen.',
    href:'presse.html?id=2041-09-07-manchester-united-ligaphase-vorbericht',
    entities:['finn-harps','man-utd','champions-league','aymar-kitenge','yizhar-kricheli','jhoao-talero']
  });
})();