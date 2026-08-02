(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  const clubData={
    id:'man-utd',name:'Manchester United',short:'MUN',country:'England',league:'Premier League',scope:['Champions League'],status:'partial',completion:88,season:2041,
    summary:'Champions-League-Halbfinalgegner 2041. Manchester United reist als Vierter der Premier League mit einem sehr wertvollen, erfahrenen und körperlich starken 4-4-2-Kader nach Donegal.',
    manager:'Nicht im Export ausgewiesen',stadium:'Old Trafford',formation:'4-4-2 · Flügelspiel',squadValue:'Mehrere Offensivspieler zwischen €200 Mio. und €374 Mio.',avgAge:'Erwartete Elf überwiegend im besten Fußballalter, aber mit mehreren Routiniers',
    keyPlayers:['Ricardo López','Guillermo Villano','Aymar Kitenge','Yizhar Kricheli','Shea Lacey'],
    tags:['Champions League 2041','Halbfinale','Premier League Rang 4','4-4-2','Flügelspiel','starkes Passspiel','körperlich stark','Standards gefährlich'],
    meetings:[...(window.FM_CLUBS.find(x=>x.id==='man-utd')?.meetings||[]).filter(x=>x.date!=='01.05.2041'),{date:'01.05.2041',venue:'H',result:'Halbfinal-Hinspiel'}],
    checklist:{profile:true,squad:true,tactics:true,transfers:false,meetings:true,history:false},
    squadMeta:{count:33,knownValue:'Spitzenwerte bis €374 Mio.',contracts2041:6},
    probableXI:[
      {name:'Santiago Ángel',role:'Mitspielender Torwart',zone:'TW'},
      {name:'William Lebrun',role:'Außenverteidiger',zone:'VR'},
      {name:'Said Toufiqui',role:'Ballspielender Verteidiger',zone:'IVR'},
      {name:'Mërgim Lluca',role:'Kompromissloser Innenverteidiger',zone:'IVL'},
      {name:'Marco Ciliberti',role:'Kompletter Flügelverteidiger',zone:'VL'},
      {name:'Shea Lacey',role:'Äußerer Spielmacher',zone:'MR'},
      {name:'Jhoao Talero',role:'Ballerobernder Mittelfeldspieler',zone:'MZR'},
      {name:'Guillermo Villano',role:'Vorgeschobener Spielmacher',zone:'MZL'},
      {name:'Mayquinho',role:'Flügelspieler',zone:'ML'},
      {name:'Aymar Kitenge',role:'Stoßstürmer',zone:'STR'},
      {name:'Ricardo López',role:'Kompletter Stürmer',zone:'STL'}
    ],
    scouting:{
      strengths:[
        'Sehr hohes Niveau im Passspiel und in der Bewegung ohne Ball',
        'Körperlich einer der stärksten Kader des Wettbewerbs',
        'Gute Arbeitseinstellung, Antizipation und Eins-gegen-eins-Qualität',
        'Ricardo López kommt auf 29 Tore in 38 Einsätzen',
        'Guillermo Villano liefert acht Tore, acht Vorlagen und eine Note von 7,36',
        'Breite Offensivtiefe mit Kricheli, Želko, Kitenge, McMinn und El Fassi'
      ],
      weaknesses:[
        'Laut Scout fehlt es an Aggressivität und teilweise an Zielstrebigkeit',
        'Santiago Ángel ist beim Halten und Herauslaufen nicht auf absolutem Spitzenniveau',
        'Beim ersten Kontakt am kurzen Pfosten nach Standards liegt United deutlich unter dem Ligadurchschnitt',
        'William Lebrun war zuletzt außer Form',
        'Mehrere wahrscheinliche Stammspieler starten nicht bei voller Athletik',
        'Sechs der letzten 19 Gegentore entstanden nach kurzen Passkombinationen'
      ],
      plan:[
        'Standards konsequent auf den kurzen Pfosten zuschneiden und den zweiten Ball besetzen.',
        'Uniteds Flügelspiel nicht durch blindes Herausrücken öffnen; Außenbahnen doppeln und Rückpässe erzwingen.',
        'Villano beim Aufdrehen stören, weil er Uniteds kreativster Verbindungsspieler ist.',
        'Hinter Ciliberti und Lebrun mit frühen diagonalen Läufen angreifen, sobald die Außenverteidiger hochschieben.',
        'Das Spiel nicht in einen offenen Kraftvergleich verwandeln; United ist physisch und in Umschaltmomenten enorm stark.',
        'Die zweite Hälfte aktiv planen, weil Lacey, Villano, Ciliberti und Toufiqui laut Export nicht voll frisch wirken.'
      ]
    },
    pressReport:{id:'2041-04-30-manchester-united-vorbericht',href:'presse.html?id=2041-04-30-manchester-united-vorbericht',label:'CHAMPIONS LEAGUE · HALBFINALE',headline:'Der Titelverteidiger empfängt Manchester United'}
  };
  const ci=window.FM_CLUBS.findIndex(x=>x.id==='man-utd');
  if(ci>=0)window.FM_CLUBS[ci]={...window.FM_CLUBS[ci],...clubData};else window.FM_CLUBS.push(clubData);

  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  const report={
    id:'2041-04-30-manchester-united-vorbericht',type:'Pressevorbericht',date:'2041-04-30',competition:'UEFA Champions League',fixtureDate:'Donnerstag, 01.05.2041',home:'Finn Harps',away:'Manchester United',location:'Donegal Stadium · Halbfinale, Hinspiel',
    headline:'Der Titelverteidiger empfängt Manchester United',
    subheadline:'United bringt 29 Tore von Ricardo López, einen extrem wertvollen Kreativkern und ein gefährliches Flügelspiel mit. Finn Harps besitzt jedoch klare Angriffspunkte bei Standards, Fitness und der Absicherung hinter den Außenverteidigern.',
    label:'CHAMPIONS LEAGUE · HALBFINALE · HINSPIEL',
    heroStat:{label:'Uniteds Torjäger',value:'29 Tore',note:'Ricardo López in 38 Einsätzen'},
    backlink:{href:'klub.html?id=man-utd',label:'← ZUM MANCHESTER-UNITED-DOSSIER'},
    intro:'Nach dem souveränen 3:0 gegen Bohemian wartet die größte Prüfung seit dem Bayern-Duell. Manchester United reist als Vierter der Premier League an und bevorzugt ein 4-4-2 mit konsequentem Flügelspiel. Die Mannschaft ist technisch stark, physisch wuchtig und besitzt in fast jeder Offensivrolle eine zweite hochwertige Option.',
    sections:[
      {title:'López ist das Zentrum der Gefahr',text:'Ricardo López steht bei 29 Toren in 38 Einsätzen und wird mit bis zu 374 Millionen Euro bewertet. United kann daneben Kitenge, Kricheli oder Želko einsetzen. Finn Harps muss deshalb nicht nur den ersten Lauf verteidigen, sondern auch Ablagen und zweite Bälle vor dem Strafraum kontrollieren.'},
      {title:'Villano gibt dem Flügelspiel ein Gehirn',text:'Guillermo Villano verbindet acht Tore mit acht Vorlagen und einer Durchschnittsnote von 7,36. Er ist der Spieler, der Uniteds Breite mit Pässen durch das Zentrum zusammenführt. Wird seine erste Drehung verhindert, werden viele Angriffe berechenbarer.'},
      {title:'Die Aufstellung besitzt eine echte Unbekannte',text:'Die beiden Scoutansichten unterscheiden sich im Angriff. Eine Variante zeigt Kricheli neben López und Kitenge auf dem linken Flügel, die andere Kitenge als zweiten Stürmer mit Mayquinho links. Die Grundidee bleibt gleich: zwei Strafraumspieler, Breite und frühe Hereingaben.'},
      {title:'Der kurze Pfosten ist die sichtbare Nahtstelle',text:'Der Scout weist United bei Standards eine auffällige Schwäche beim ersten Kontakt am kurzen Pfosten zu. Gegen einen ansonsten kopfballstarken Kader sollte Finn Harps deshalb keine beliebigen hohen Bälle schlagen, sondern gezielte Laufwege und Ablagen am ersten Pfosten vorbereiten.'},
      {title:'Fitness kann das Rückspiel bereits im Hinspiel formen',text:'Mehrere mögliche Stammspieler liegen nur zwischen 70 und 83 Prozent Athletik. Finn Harps kommt dagegen aus einer kontrollierten Generalprobe. Bleibt das Spiel bis zur Schlussphase eng, kann die höhere Frische zu einem echten strategischen Vorteil werden.'}
    ],
    strengthsTitle:'WAS UNITED TRÄGT',strengthsHeading:'Wert, Wucht und eine tiefe Offensive',
    strengths:['Ricardo López mit 29 Toren','Kricheli mit 17 Toren und sechs Vorlagen','Želko mit zehn Toren und 13 Vorlagen','Villano mit acht Toren und acht Vorlagen','Lacey mit sechs Toren und 14 Vorlagen','Sehr starkes Passspiel, Physis und Bewegung ohne Ball'],
    vulnerabilitiesTitle:'WO FINN HARPS ANSETZEN KANN',vulnerabilitiesHeading:'Kurzer Pfosten, Fitness und Räume hinter den Außenverteidigern',
    vulnerabilities:['Schwacher erster Kontakt am kurzen Pfosten bei Standards','Torhüter nicht herausragend beim Halten und Herauslaufen','Mehrere Stammspieler nicht voll frisch','Lebrun zuletzt außer Form','Laut Scout fehlende Aggressivität und durchschnittliche Zielstrebigkeit','Gegentore nach kurzen Passkombinationen'],
    keyDuelsTitle:'SCHLÜSSELDUELLE',keyDuelsHeading:'Vier Stellen, an denen das Hinspiel kippen kann',
    keyDuels:[
      {title:'Andrews gegen López',text:'López darf nicht sauber in Richtung Tor aufdrehen. Andrews braucht vor allem Unterstützung beim zweiten Ball, weil United mit zwei Spitzen den Strafraum früh besetzt.'},
      {title:'O’Neill gegen Villano',text:'Villano ist der kreative Fixpunkt. O’Neill muss Passwege schließen, ohne sich aus dem Raum vor der Abwehr ziehen zu lassen.'},
      {title:'Brennan gegen Uniteds linke Seite',text:'Kitenge oder Mayquinho werden zusammen mit Ciliberti Breite und Tiefenläufe suchen. Brennan darf nicht dauerhaft in Unterzahl geraten.'},
      {title:'Frame gegen Talero',text:'Talero soll Bälle gewinnen und Villano absichern. Frames Läufe aus dem Halbraum können ihn vor die Entscheidung stellen, tief zu bleiben oder die Linie zu verlassen.'}
    ],
    matchPlanTitle:'MATCHPLAN FINN HARPS',matchPlanHeading:'Das Heimspiel gewinnen, ohne das Duell zu öffnen',
    matchPlan:[
      'Uniteds erste Flügelverlagerung kontrollieren und den Ballführer nach außen isolieren.',
      'Villano und Talero mit unterschiedlichen Höhen beschäftigen: O’Neill sichert, Frame und O’Kane attackieren die Halbräume.',
      'Nach Ballgewinnen diagonal hinter die aufrückenden Außenverteidiger spielen.',
      'Standards mit klaren Laufwegen am kurzen Pfosten vorbereiten.',
      'Keine unnötigen hohen Flanken gegen Toufiqui, Lluca oder Gewelke.',
      'Ab Minute 60 gezielt Frische von der Bank bringen und Uniteds ältere Flügelachse zu langen Rückwegen zwingen.'
    ],
    verdictHeading:'United ist gefährlicher als Bayern im offenen Spiel',
    verdict:'Manchester United besitzt mehr offensive Varianten und wahrscheinlich die größere individuelle Durchschlagskraft als Bayern. Gleichzeitig wirkt die Mannschaft weniger kontrolliert und bietet hinter ihren Flügelangriffen Räume an. Finn Harps sollte zu Hause auf Sieg spielen, aber nicht in ein wildes 3:3 hineinstolpern. Ein 1:0 oder 2:0 wäre ideal; ein kontrolliertes 2:1 bliebe ebenfalls eine gute Ausgangslage.',
    sourcesHeading:'Scoutbericht und Mannschaftsexport vom 30. April 2041',
    sourcesNote:'Die beiden Scoutansichten zeigen unterschiedliche Angriffsvarianten. Diese Unsicherheit wird im Bericht ausdrücklich beibehalten und nicht künstlich aufgelöst.',
    sources:['FM-Datencenter Manchester United, 30.04.2041','FM-Scoutbericht Manchester United, 30.04.2041','FM-Mannschaftsexport Manchester United, 30.04.2041']
  };
  const ri=window.FM_PRESS_REPORTS.findIndex(x=>x.id===report.id);if(ri>=0)window.FM_PRESS_REPORTS[ri]=report;else window.FM_PRESS_REPORTS.push(report);

  window.FM_NEWS=window.FM_NEWS||[];
  const news={id:'2041-04-30-manchester-united',date:'2041-04-30',season:2041,category:'Champions League',accent:'blue',eyebrow:'HALBFINALE · HINSPIEL · DONEGAL STADIUM',title:'Manchester United wartet im Halbfinale',summary:'Finn Harps empfängt den englischen Premier-League-Vierten. López, Villano und Kitenge führen einen körperlich starken 4-4-2-Kader an, doch Standards und Fitness bieten Angriffspunkte.',href:'presse.html?id=2041-04-30-manchester-united-vorbericht',entities:['finn-harps','man-utd','champions-league-2041','season-2041'],featured:true};
  const ni=window.FM_NEWS.findIndex(x=>x.id===news.id);if(ni>=0)window.FM_NEWS[ni]=news;else window.FM_NEWS.push(news);
})();
