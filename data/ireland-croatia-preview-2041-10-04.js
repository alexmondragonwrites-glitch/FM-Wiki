(()=>{
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const croatia={
    name:'Kroatien',competition:'FIFA World Cup European Qualification',group:'Gruppe C',position:3,
    manager:'Edin Terzić',captain:'Miroslav Čečura',viceCaptain:'Večeslav Lukanić',
    venue:'Poljud-Stadion',matchDate:'2041-10-06',
    recentMatch:{opponent:'Zypern',result:'2:2',scorers:['Josip Mitrović (Elfmeter, 47.)','Karlo Ivušić (78.)']},
    formation:'4-3-3 DM breit',
    probableXI:[
      {name:'Andrijano Galonja',position:'TW',club:'Palermo',condition:92,rating:7.00},
      {name:'Vanja Biljan',position:'RV',club:'Stuttgart',condition:90,rating:6.96},
      {name:'Silvijo Krovinović',position:'IV',club:'Oostende',condition:98,rating:6.50},
      {name:'Matej Šuto',position:'IV',club:'Toulouse',condition:73,rating:6.80},
      {name:'Večeslav Lukanić',position:'LV/IV',club:'Atlético de Madrid',condition:73,rating:7.07},
      {name:'Dejan Malkić',position:'DM',club:'RB Leipzig',condition:78,rating:7.27,goals:1,assists:2,value:'€91–131 Mio.'},
      {name:'Tomislav Kolarić',position:'ZM/DM',club:'Dinamo Zagreb',condition:72,rating:7.02,assists:2},
      {name:'Karlo Ivušić',position:'ZM/OM',club:'Sunderland',condition:76,rating:7.52,goals:3,assists:2,value:'€48–73 Mio.'},
      {name:'Anđelko Žeželj',position:'LA/RA',club:'West Brom',condition:92,rating:7.78,goals:2,assists:3,value:'€35 Mio.'},
      {name:'Andrijano Hlebec',position:'RA/LA',club:'Al-Arabi',condition:93,rating:7.18,assists:1,value:'€12,5–15 Mio.'},
      {name:'Josip Mitrović',position:'ST/OM',club:'Dortmund',condition:72,rating:8.25,goals:10,assists:1,value:'€241–265 Mio.'}
    ],
    keyPlayers:[
      {name:'Josip Mitrović',note:'Dortmund · 27 Jahre · 6 Einsätze, 10 Tore, 1 Vorlage, Ø 8,25 · 72 % Athletik'},
      {name:'Anđelko Žeželj',note:'West Brom · 2 Tore, 3 Vorlagen, Ø 7,78 · 92 % Athletik'},
      {name:'Karlo Ivušić',note:'Sunderland · 3 Tore, 2 Vorlagen, Ø 7,52 · 76 % Athletik'},
      {name:'Dejan Malkić',note:'RB Leipzig · 1 Tor, 2 Vorlagen, Ø 7,27 · 78 % Athletik'}
    ],
    strengths:[
      'Mit Josip Mitrović besitzt Kroatien den bislang gefährlichsten Einzelspieler des Kaders: zehn Tore in sechs Einsätzen.',
      'Žeželj und Hlebec geben auf beiden Flügeln Breite und Tempo.',
      'Malkić und Ivušić verbinden Physis, Dynamik und Torgefahr aus dem Mittelfeld.',
      'Mehrere Stammspieler stehen bei europäischen Spitzenklubs unter Vertrag.'
    ],
    weaknesses:[
      'Mehrere Schlüsselspieler gehen angeschlagen bzw. mit niedriger Athletik in den Block: Mitrović 72 %, Kolarić 72 %, Lukanić 73 %, Šuto 73 %, Ivušić 76 %, Malkić 78 %.',
      'Das jüngste 2:2 gegen Zypern zeigt, dass Kroatien trotz individueller Klasse defensiv verwundbar ist.',
      'Die linke und zentrale Defensivseite ist körperlich deutlich weniger frisch als die irischen Schlüsselspieler nach der Rotation gegen Zypern.',
      'Bei hohem Tempo über 90 Minuten könnte die Belastung der kroatischen Achse zum Faktor werden.'
    ],
    matchPlan:[
      'Mitrović eng in der Box kontrollieren, aber nicht die gesamte Struktur auf ihn ausrichten; die Passwege aus Malkić/Ivušić sollen vorher gestört werden.',
      'Von Beginn an hohes Tempo auf Kroatiens weniger frische Achse geben und besonders Lukanić/Šuto sowie Kolarić seitlich zu Laufduellen zwingen.',
      'Walker und die Außenverteidiger sollen die kroatischen Flügel nach hinten drücken, damit Žeželj und Hlebec weniger Umschaltmomente bekommen.',
      'O’Neill und O’Kane können Kroatiens Dreiermittelfeld mit schnellen Verlagerungen auseinanderziehen statt dauerhaft durch das Zentrum zu dribbeln.',
      'Die bessere Frische aus der Rotation gegen Zypern konsequent als Vorteil für die Schlussphase nutzen.'
    ]
  };

  Object.assign(window.FM_IRELAND,{
    updated:'04.10.2041',competition:'WM-Qualifikation',group:'Gruppe C',position:'1. Platz',
    nextMatch:{opponent:'Kroatien',venue:'Auswärts',date:'06.10.2041',stadium:'Poljud-Stadion'},
    opponentScout:croatia,
    qualification:{stage:'FIFA World Cup European Qualification · Gruppe C',label:'WM-Qualifikation',status:'Rang 1',detail:'Irland reist nach fünf Siegen aus fünf Spielen zum Tabellendritten Kroatien. Nach dem 2:1 gegen Tschechien folgt im Poljud-Stadion der härteste Auswärtstest des Blocks.'}
  });

  const report={
    id:'2041-10-04-irland-kroatien-wm-quali-vorbericht',type:'Nationalteam-Vorbericht',date:'2041-10-04',competition:'WM-Qualifikation',
    headline:'Letzter Härtetest in Split: Irland trifft auf Kroatiens müde Starachse',
    subheadline:'Kroatien bringt mit Dortmund-Stürmer Josip Mitrović einen Torjäger in Ausnahmeform, doch mehrere Schlüsselspieler gehen mit deutlich reduzierter Athletik in das Duell. Irlands Rotation gegen Zypern könnte nun ihren größten Wert entfalten.',
    label:'IRLAND · WM-QUALIFIKATION · KROATIEN-VORSCHAU',
    heroStat:{label:'Josip Mitrović',value:'10 Tore in 6 Einsätzen',note:'Ø 8,25 · Dortmund · 72 % Athletik'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Nach fünf Siegen aus fünf Qualifikationsspielen reist Irland zum Tabellendritten Kroatien. Die Mannschaft von Edin Terzić besitzt enorme individuelle Qualität, wirkt vor dem Duell aber körperlich deutlich weniger frisch. Besonders Josip Mitrović bleibt trotz 72 Prozent Athletik die zentrale Gefahr.',
    sections:[
      {title:'Mitrović ist die große Alarmglocke',text:'Der 27-jährige Dortmunder steht im Export bei zehn Toren und einer Vorlage aus sechs Einsätzen sowie einem Notenschnitt von 8,25. Sein Marktwert wird mit 241 bis 265 Millionen Euro angegeben. Beim 2:2 gegen Zypern traf er per Elfmeter.'},
      {title:'Kroatiens Zentrum ist stark, aber müde',text:'Dejan Malkić von RB Leipzig kommt auf 7,27, Karlo Ivušić auf 7,52. Gleichzeitig liegen beide bei nur 78 beziehungsweise 76 Prozent Athletik; Tomislav Kolarić sogar bei 72 Prozent.'},
      {title:'Die Flügel bleiben gefährlich',text:'Anđelko Žeželj bringt zwei Tore und drei Vorlagen bei einem Notenschnitt von 7,78 mit. Andrijano Hlebec ist mit 93 Prozent Athletik einer der frischesten möglichen Starter Kroatiens.'},
      {title:'Die Abwehr bietet Angriffsflächen',text:'Matej Šuto und Večeslav Lukanić stehen jeweils nur bei 73 Prozent Athletik. Das jüngste 2:2 gegen Zypern zeigt zudem, dass Kroatien trotz hoher individueller Qualität nicht unverwundbar ist.'},
      {title:'Irlands Rotation kann jetzt auszahlen',text:'Gegen Zypern wurde bewusst rotiert, bevor Tschechien mit 2:1 geschlagen wurde. Gegen Kroatien sollte deshalb nicht nur die individuelle Qualität, sondern auch die bessere Frische ein echter Wettbewerbsvorteil sein.'}
    ],
    verdictHeading:'Nicht zurückweichen, sondern Kroatiens Beine testen',
    verdict:'Kroatien hat vermutlich den gefährlichsten Einzelspieler des Blocks, aber genau deshalb wäre ein passiver Ansatz riskant. Irland sollte das Spieltempo hochhalten, die kroatische Achse früh zu Laufwegen zwingen und Mitrović möglichst von der Versorgung abschneiden. Je länger das Spiel offen bleibt, desto stärker dürfte die bessere irische Frische wiegen.',
    sources:['FM-Kroatien-Screenshot · 04.10.2041','FM-Kroatien-Mannschaftsexport · 04.10.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-04-irland-kroatien-vorschau',date:'2041-10-04',season:2041,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'IRLAND · WM-QUALIFIKATION',title:'Kroatien wartet: Mitrović als größte Gefahr',
    summary:'Kroatiens Dortmunder Torjäger steht bei zehn Toren in sechs Einsätzen, doch mehrere Schlüsselspieler gehen mit niedriger Athletik ins Duell. Irlands Rotation könnte in Split zum Trumpf werden.',
    href:'presse.html?id=2041-10-04-irland-kroatien-wm-quali-vorbericht',entities:['ireland','croatia','world-cup-qualification','season-2041']
  });
})();