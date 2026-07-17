(()=>{
const players=window.FM_PLAYERS||[];
const update=(id,data)=>{const p=players.find(x=>x.id===id);if(p)Object.assign(p,data);};

update('basile-rouviere',{
  birthDate:'2011-09-30',
  birthPlace:'Romilly-sur-Seine, Frankreich',
  positionCode:'M (L), M/OM (Z)',
  bestRole:'Vorgeschobener Spielmacher',
  systemRole:'Mezzala auf Angriff',
  nation:'Frankreich',
  nationCode:'FRA',
  height:'169 cm',
  weight:'67 kg',
  preferredFoot:'Rechts sehr stark · links gut',
  personality:'Konsequent',
  mediaDescription:'Mittelfeldspieler',
  international:'Frankreich · 1 Länderspiel / 0 Tore',
  youthInternational:'Frankreich U21 · 7 Spiele / 1 Tor',
  contractUntil:'31.12.2041',
  wage:'€41.000/Woche',
  currentAbility:'16',
  potentialAbility:'16',
  conditionLabel:'Ausgezeichnet',
  condition:'95%',
  morale:'Außergewöhnlich',
  appearances:'26 (20)',
  goals:5,
  assists:12,
  avgRating:7.05,
  playerOfMatch:2,
  transferValue:'€16.5Mio - €21Mio',
  status:'Rotationsspieler',
  rating:4,
  role:'Kreativer Mezzala',
  summary:'Der ablösefreie Benfica-Fund wurde zum kreativen Spezialisten einer europäischen Dynastie: 88 Ligaspiele für Finn Harps, 16 Tore, drei Champions-League-Titel und weiterhin jene seltene Mischung aus Dribbling, Passschärfe und Improvisation.',
  analysis:'Rouvière ist der Spieler für Partien, in denen Ordnung allein nicht genügt. Dribbling 16, Flair 17, Passen 16 und Technik 16 erlauben ihm, aus dem linken oder zentralen Halbraum enge Blöcke aufzuschneiden. Er ist kein defensiver Taktgeber und auch kein physischer Dauerläufer, aber als Mezzala oder vorgeschobener Spielmacher verändert er die Textur eines Angriffs: weniger Metronom, mehr Dietrich.',
  strengths:[
    'Dribbling 16, Passen 16 und Technik 16',
    'Flair 17 und Beweglichkeit 17',
    'Nervenstärke, Zielstrebigkeit und Übersicht jeweils 15',
    '12 Vorlagen im Kalenderjahr 2040',
    'Beidfüßig genug für beide Halbräume',
    'Drei Champions-League-Titel mit Finn Harps'
  ],
  risks:[
    'Tackling 7 und Stellungsspiel 9 begrenzen seine defensive Eigenständigkeit',
    'Sprunghöhe 2 macht ihn im Luftspiel praktisch unsichtbar',
    'Mit 29 Jahren und Vertrag nur bis Ende 2041 beginnt die Nachfolgephase',
    'Aktuell leicht müde nach hoher Belastung',
    'Kein natürlicher Führungsspieler'
  ],
  future:'Den Vertrag nicht vorschnell entwerten: 2041 bleibt Rouvière als Kreativjoker und Spezialist gegen tiefe Gegner wertvoll. Parallel sollte ein jüngerer Achter Minuten in seiner Rolle sammeln, damit der Übergang geplant und nicht erzwungen wird.',
  verdict:'Der Dietrich der Dynastie',
  availability:'Einsatzbereit',
  traits:['Versucht oft Steilpässe'],
  attributes:{
    Technik:{Abschluss:10,Ballannahme:15,Deckung:6,Dribbling:16,Ecken:10,Elfmeter:4,Flanken:10,Freistöße:11,Kopfballtechnik:7,Passen:16,Tackling:7,Technik:16,'Weite Einwürfe':3,Weitschüsse:14},
    Mental:{Aggressivität:13,Antizipation:14,Einsatzfreude:15,Entscheidungen:14,Flair:17,Führungsqualitäten:10,Konzentration:12,Mut:11,Nervenstärke:15,'Ohne Ball':14,Stellungsspiel:9,Teamwork:12,Übersicht:15,Zielstrebigkeit:15},
    Physis:{Antritt:13,Ausdauer:14,Balance:13,Beweglichkeit:17,Grundfitness:14,Kraft:13,Schnelligkeit:14,Sprunghöhe:2}
  },
  seasonSplits:[
    {competition:'Premier Division',appearances:'17 (14)',goals:3,assists:8,pom:1,rating:7.06},
    {competition:'Pokal',appearances:'4 (1)',goals:0,assists:4,pom:1,rating:7.28},
    {competition:'Kontinental',appearances:'5 (5)',goals:2,assists:0,pom:0,rating:6.90},
    {competition:'Sonstige Spiele',appearances:'3 (1)',goals:0,assists:0,pom:0,rating:6.88}
  ],
  careerSeasons:[
    {season:'2040',club:'Finn Harps',league:'Premier Division',appearances:31,goals:3,assists:8,pom:1,rating:7.06},
    {season:'2039',club:'Finn Harps',league:'Premier Division',appearances:25,goals:6,assists:5,pom:2,rating:7.10},
    {season:'2038',club:'Finn Harps',league:'Premier Division',appearances:20,goals:6,assists:5,pom:1,rating:7.20},
    {season:'2037',club:'Finn Harps',league:'Premier Division',appearances:12,goals:1,assists:2,pom:0,rating:6.87},
    {season:'2036/37',club:'Benfica',league:'Liga Portugal Betclic',appearances:2,goals:0,assists:0,pom:0,rating:'-'},
    {season:'2035/36',club:'Montpellier',league:'Ligue 1',appearances:16,goals:0,assists:2,pom:0,rating:6.88},
    {season:'2035/36',club:'Benfica',league:'Liga Portugal Betclic',appearances:10,goals:2,assists:0,pom:0,rating:7.42},
    {season:'2034/35',club:'Benfica',league:'Liga Portugal Betclic',appearances:12,goals:1,assists:2,pom:0,rating:7.07},
    {season:'2033/34',club:'Benfica',league:'Liga Portugal Betclic',appearances:10,goals:0,assists:2,pom:0,rating:7.09},
    {season:'2032/33',club:'Benfica',league:'Liga Portugal Betclic',appearances:3,goals:0,assists:0,pom:0,rating:7.40},
    {season:'2030/31',club:'Benfica',league:'Liga Portugal Betclic',appearances:1,goals:0,assists:0,pom:0,rating:6.70},
    {season:'2030/31',club:'Benfica B',league:'Liga Portugal 2 SABSEG',appearances:33,goals:4,assists:5,pom:2,rating:7.36},
    {season:'2029/30',club:'Benfica B',league:'Liga Portugal 2 SABSEG',appearances:31,goals:2,assists:4,pom:2,rating:6.83},
    {season:'2028/29',club:'Benfica B',league:'Liga Portugal 2 SABSEG',appearances:33,goals:1,assists:5,pom:0,rating:7.35}
  ],
  careerTotals:{appearances:239,goals:26,assists:40,pom:8,rating:7.11},
  careerTitle:'Von Benfica zum europäischen Seriensieger',
  careerNarrativeTitle:'Ein ablösefreier Fund mit historischem Ertrag',
  careerNarrative:[
    'Rouvière durchlief Benficas Nachwuchs und sammelte früh 97 Ligaspiele für Benfica B. Der dauerhafte Sprung zum Stammspieler der ersten Mannschaft gelang trotz technisch starker Einzeljahre jedoch nicht.',
    'Eine Leihe nach Montpellier brachte 2035/36 regelmäßige Ligue-1-Minuten, aber noch keinen endgültigen Durchbruch. Nach der portugiesischen Meisterschaft und dem Pokalsieg 2037 endete sein Benfica-Kapitel.',
    'Finn Harps verpflichtete ihn am 1. Juli 2037 ablösefrei. Aus einem Spieler an der europäischen Schwelle wurde in Irland ein prägender Rotations- und Kreativspieler mit 88 Ligaspielen, 16 Toren und 20 Vorlagen.',
    'Sein Debüt für Frankreich folgte kurz vor dem Wechsel. Die Nationalmannschaft blieb eine Randnotiz, während seine Vereinskarriere mit drei Champions-League-Siegen, nationalen Titeln und mehreren Berufungen in Finn Harps’ beste Elf explodierte.'
  ],
  honours:[
    {year:'2040',type:'Vierfach gekrönt',items:['UEFA Champions League','UEFA-Superpokal','SSE Airtricity League Premier Division','Sports Direct FAI Cup']},
    {year:'2039',type:'Nationale Dominanz',items:['SSE Airtricity League Premier Division','Sports Direct FAI Cup','President’s Cup','In Finn Harps’ beste Elf der Saison aufgenommen']},
    {year:'2038',type:'Erste europäische Krönung',items:['UEFA Champions League','UEFA-Superpokal','SSE Airtricity League Premier Division','Sports Direct FAI Cup','President’s Cup','In Finn Harps’ beste Elf der Saison aufgenommen']},
    {year:'2037',type:'Der Wendepunkt',items:['Taça de Portugal mit Benfica','Erstes A-Länderspiel für Frankreich','Ablösefreier Wechsel zu Finn Harps','SSE Airtricity League Premier Division','Sports Direct FAI Cup','Premier-Division-Tor des Monats']},
    {year:'2036',type:'Zwischenstation Montpellier',items:['In Montpelliers beste Elf der Saison aufgenommen','Portugiesischer Meister mit Benfica']},
    {year:'2030',type:'Frühe internationale Titel',items:['UEFA-U19-Europameister mit Frankreich','Sieger des Tournoi Maurice Revello mit Frankreich U20']}
  ],
  deepAnalysisTitle:'Warum Rouvière im Kader mehr als Rotation ist',
  deepAnalysis:[
    {title:'Kreativität aus enger Position',text:'Rouvière benötigt keinen offenen Flügel, um Wirkung zu erzeugen. Seine Kombination aus Dribbling 16, Technik 16, Übersicht 15 und Flair 17 macht ihn besonders wertvoll gegen Gegner, die den Strafraum mit vielen Spielern verriegeln.'},
    {title:'Der Unterschied zu einem Kontrollachter',text:'Er hält den Rhythmus nicht wie ein klassischer Regista. Rouvière sucht häufiger den riskanten Pass, trägt den Ball selbst in den Halbraum und akzeptiert Ballverluste als Preis für Durchbrüche. Genau deshalb ergänzt er strukturiertere Spieler wie O’Neill oder Vinícius.'},
    {title:'Defensive Grenzen brauchen ein Gerüst',text:'Tackling 7, Stellungsspiel 9 und geringe Luftpräsenz bedeuten, dass hinter und neben ihm Absicherung stehen muss. In einem stabilen Mittelfeld kann diese Schwäche getragen werden; ohne Struktur wird sie sichtbar.'},
    {title:'Historischer Wert und Nachfolge',text:'Ablösefrei gekommen, drei Champions-League-Titel gewonnen und über Jahre produktiv geblieben: Rouvières Transfer ist bereits ein Meisterstück. Mit 29 geht es nicht um einen abrupten Schnitt, sondern darum, sein Spezialwissen an die nächste Mittelfeldgeneration weiterzugeben.'}
  ]
});

update('vinicius',{
  birthDate:'2013-09-02',
  birthPlace:'Porto Alegre, Brasilien',
  positionCode:'DM, M (LZ), OM (Z)',
  bestRole:'Vorgeschobener Spielmacher',
  systemRole:'Mezzala auf Unterstützen',
  nation:'Brasilien',
  nationCode:'BRA',
  height:'188 cm',
  weight:'83 kg',
  preferredFoot:'Rechts sehr stark · links stark',
  personality:'Konsequent',
  mediaDescription:'Mittelfeldspieler',
  international:'Brasilien · ohne A-Länderspiel',
  youthInternational:'Brasilien U20 · U20-Weltmeister 2031',
  contractUntil:'31.12.2043',
  wage:'€54.000/Woche',
  currentAbility:'16',
  potentialAbility:'16',
  conditionLabel:'Ausgezeichnet',
  condition:'95%',
  morale:'Perfekt',
  appearances:'26 (12)',
  goals:10,
  assists:8,
  avgRating:7.12,
  playerOfMatch:1,
  transferValue:'€19Mio - €21Mio',
  status:'Stammspieler',
  rating:4,
  role:'Ausbalancierter Achter',
  summary:'Seit dem Zehn-Millionen-Wechsel aus Porto Alegre ist Vinícius der leise Stahlträger des Mittelfelds: 146 Ligaspiele für Finn Harps, 34 Tore, 33 Vorlagen und eine Rolle in jeder Phase der europäischen Dynastie.',
  analysis:'Vinícius ist kein Spieler mit einem einzelnen grellen Superwert. Sein Gewicht entsteht aus der Verkettung vieler guter bis sehr guter Eigenschaften: Technik 16, Ausdauer 16, Balance 16, Beweglichkeit 16, Schnelligkeit 15 und ausreichend defensive Substanz. Er verbindet Aufbau, Gegenpressing, Tiefenläufe und Strafraumbesetzung, ohne dass das System seine Form für ihn verändern muss.',
  strengths:[
    'Technik, Ausdauer, Balance und Beweglichkeit jeweils 16',
    'Schnelligkeit und Sprunghöhe jeweils 15',
    'Entscheidungen 14 und Übersicht 14',
    '10 Tore und 8 Vorlagen im Kalenderjahr 2040',
    'Beidfüßiges, positionsflexibles Profil',
    '146 Ligaspiele und fünf volle Jahre als tragende Kraft'
  ],
  risks:[
    'Abschluss 6 passt nicht zu seiner überraschend hohen Torproduktion',
    'Führungsqualitäten 5 und Konzentration 9',
    'Aktuell erhöhtes Verletzungsrisiko trotz fehlender wiederkehrender Verletzung',
    'Mit 27 und hohem Gehalt nähert er sich der Phase, in der Belastung bewusster gesteuert werden sollte',
    'Kein dominanter alleiniger Spielmacher'
  ],
  future:'Bis mindestens 2042 als Stamm- und Führungsspieler durch Leistung behandeln. Er ist der ideale Übergangsspieler zwischen Rouvières Generation und den jungen Achtern: nicht spektakulär um jeden Preis, aber taktisch belastbar und in großen Spielen bewährt.',
  verdict:'Der leise Stahlträger der Harps-Ära',
  availability:'Einsatzbereit',
  traits:[
    'Versucht oft Steilpässe',
    'Spielt lieber ab als selbst zu schießen',
    'Grätscht bei Zweikämpfen',
    'Spielt den Ball auf die Flügel'
  ],
  attributes:{
    Technik:{Abschluss:6,Ballannahme:13,Deckung:12,Dribbling:12,Ecken:4,Elfmeter:6,Flanken:9,Freistöße:4,Kopfballtechnik:8,Passen:13,Tackling:12,Technik:16,'Weite Einwürfe':12,Weitschüsse:12},
    Mental:{Aggressivität:13,Antizipation:14,Einsatzfreude:12,Entscheidungen:14,Flair:13,Führungsqualitäten:5,Konzentration:9,Mut:16,Nervenstärke:15,'Ohne Ball':13,Stellungsspiel:10,Teamwork:11,Übersicht:14,Zielstrebigkeit:15},
    Physis:{Antritt:12,Ausdauer:16,Balance:16,Beweglichkeit:16,Grundfitness:12,Kraft:13,Schnelligkeit:15,Sprunghöhe:15}
  },
  seasonSplits:[
    {competition:'Premier Division',appearances:'19 (7)',goals:6,assists:5,pom:1,rating:7.12},
    {competition:'Pokal',appearances:'3',goals:0,assists:1,pom:0,rating:6.93},
    {competition:'Kontinental',appearances:'4 (5)',goals:4,assists:2,pom:0,rating:7.19},
    {competition:'Sonstige Spiele',appearances:'2 (2)',goals:0,assists:0,pom:0,rating:6.82}
  ],
  careerSeasons:[
    {season:'2040',club:'Finn Harps',league:'Premier Division',appearances:26,goals:6,assists:5,pom:1,rating:7.12},
    {season:'2039',club:'Finn Harps',league:'Premier Division',appearances:27,goals:7,assists:3,pom:1,rating:7.10},
    {season:'2038',club:'Finn Harps',league:'Premier Division',appearances:21,goals:8,assists:4,pom:3,rating:7.31},
    {season:'2037',club:'Finn Harps',league:'Premier Division',appearances:30,goals:2,assists:8,pom:1,rating:6.98},
    {season:'2036',club:'Finn Harps',league:'Premier Division',appearances:30,goals:9,assists:11,pom:2,rating:7.34},
    {season:'2035',club:'Finn Harps',league:'Premier Division',appearances:12,goals:2,assists:2,pom:1,rating:7.12},
    {season:'2035',club:'Grêmio',league:'Série A',appearances:7,goals:1,assists:1,pom:0,rating:7.27},
    {season:'2034',club:'Grêmio',league:'Série A',appearances:8,goals:0,assists:2,pom:1,rating:6.95},
    {season:'2033',club:'Grêmio',league:'Série A',appearances:5,goals:0,assists:0,pom:0,rating:6.55},
    {season:'2032',club:'Grêmio',league:'Série A',appearances:4,goals:0,assists:2,pom:0,rating:6.78},
    {season:'2031',club:'Grêmio',league:'Série A',appearances:5,goals:0,assists:0,pom:0,rating:6.57}
  ],
  careerTotals:{appearances:175,goals:35,assists:38,pom:10,rating:7.13},
  careerTitle:'Von Porto Alegre zur Finn-Harps-Legende',
  careerNarrativeTitle:'Der Zehn-Millionen-Transfer, der eine Ära verband',
  careerNarrative:[
    'Vinícius debütierte 2031 für Grêmio und wurde im selben Jahr mit Brasilien U20 Weltmeister sowie mit seinem Klub Sieger der Copa Sudamericana. Der Weg zur Stammkraft verlief anschließend geduldig statt geradlinig.',
    'Finn Harps verpflichtete ihn am 20. Juli 2035 für zehn Millionen Euro. Noch im ersten Halbjahr gewann er Meisterschaft und FAI Cup und wurde in die beste Elf des Klubs aufgenommen.',
    '2036 folgte seine produktivste Ligasaison mit neun Toren, elf Vorlagen und einer Durchschnittsnote von 7,34. Die Auszeichnung als Talent des Jahres bestätigte, dass der Transfer nicht nur Tiefe, sondern einen neuen Fixpunkt geschaffen hatte.',
    'Bis November 2040 stehen 146 Ligaspiele für Finn Harps, nationale Serienerfolge, die Klub-WM und drei Champions-League-Titel. Seine Laufbahn ist weniger eine Sammlung einzelner Höhepunkte als die durchgehende Mittellinie der gesamten Harps-Dynastie.'
  ],
  honours:[
    {year:'2040',type:'Das nächste Triple plus Supercup',items:['UEFA Champions League','UEFA-Superpokal','SSE Airtricity League Premier Division','Sports Direct FAI Cup','President’s Cup']},
    {year:'2039',type:'Vereinsgeschichte',items:['SSE Airtricity League Premier Division','Sports Direct FAI Cup','President’s Cup','In Finn Harps’ beste Elf aller Zeiten aufgenommen','In Finn Harps’ beste Elf der Saison aufgenommen','Premier-Division-Tor des Monats']},
    {year:'2038',type:'Europäische Krönung',items:['UEFA Champions League','UEFA-Superpokal','SSE Airtricity League Premier Division','Sports Direct FAI Cup','President’s Cup','In Finn Harps’ beste Elf der Saison aufgenommen','Premier-Division-Tor des Monats']},
    {year:'2037',type:'Weltmeister auf Klubebene',items:['FIFA Club World Cup','SSE Airtricity League Premier Division','President’s Cup']},
    {year:'2036',type:'Der endgültige Durchbruch',items:['SSE Airtricity League Premier Division','Sports Direct FAI Cup','President’s Cup','Irlands Premier-Division-Talent des Jahres','In Finn Harps’ beste Elf der Saison aufgenommen']},
    {year:'2035',type:'Ankunft und sofortige Titel',items:['Wechsel von Grêmio für €10 Mio.','SSE Airtricity League Premier Division','Sports Direct FAI Cup','In Finn Harps’ beste Elf der Saison aufgenommen','Premier-Division-Tor des Monats','Campeonato Gaúcho mit Grêmio']},
    {year:'2031',type:'Brasilianischer Auftakt',items:['FIFA-U20-Weltmeister mit Brasilien','Copa Sudamericana mit Grêmio','Profidebüt für Grêmio']}
  ],
  deepAnalysisTitle:'Warum Vinícius die Balance des Mittelfelds hält',
  deepAnalysis:[
    {title:'Ein Profil ohne Sollbruchstelle',text:'Vinícius besitzt nicht Rouvières Flair oder O’Neills Übersicht, aber kaum einen Bereich, der das System zu einer Schutzmaßnahme zwingt. Er kann auf der Sechs, als Achter und im offensiven Zentrum eingesetzt werden und bleibt dabei funktional.'},
    {title:'Athletik als Verbindungselement',text:'Ausdauer 16, Balance 16, Beweglichkeit 16 und Schnelligkeit 15 lassen ihn Räume mehrfach bespielen. Er kann im Aufbau tief helfen, anschließend nachrücken und nach Ballverlust wieder in die Gegenpressingstruktur gelangen.'},
    {title:'Warum zehn Tore trotz Abschluss 6 möglich sind',text:'Seine Tore entstehen weniger aus individueller Schussqualität als aus wiederholter Präsenz. Gute Physis, Nervenstärke 15, Zielstrebigkeit 15 und intelligente Einbindung bringen ihn oft genug in günstige Räume, um den schwachen Abschlusswert teilweise zu überdecken.'},
    {title:'Historische Rolle',text:'Vinícius war weder der teuerste noch der glamouröseste Baustein der Dynastie. Genau darin liegt sein Wert: Über fünf Jahre verband er verschiedene Mittelfeldgenerationen und machte taktische Veränderungen möglich, ohne selbst aus der Mannschaft geschrieben werden zu müssen.'}
  ]
});
})();