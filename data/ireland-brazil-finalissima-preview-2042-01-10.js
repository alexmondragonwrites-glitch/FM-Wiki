(()=>{
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const brazilXI=[
    {zone:'TW',name:'Paulo Henrique',role:'Mitspielender Torwart · Finn Harps'},
    {zone:'VL',name:'Enzo',role:'Inverser Flügelverteidiger · Bayer Leverkusen'},
    {zone:'IV',name:'Luiz Carlos',role:'Kompromissloser Innenverteidiger · Wolves'},
    {zone:'IV',name:'Riquelme',role:'Innenverteidiger · Inter'},
    {zone:'VR',name:'Felipe',role:'Inverser Außenverteidiger · Cagliari'},
    {zone:'DM',name:'Heriberto',role:'Defensiver Mittelfeldspieler · Atlético de Madrid'},
    {zone:'DM',name:'Caetano',role:'Segundo Volante · Wolfsburg'},
    {zone:'OML',name:'Flavio Henrique',role:'Inverser Außenstürmer · Liverpool'},
    {zone:'OMZ',name:'Emerson',role:'Vorgeschobener Spielmacher · Caen'},
    {zone:'OMR',name:'Nathan Ribeiro',role:'Inverser Außenstürmer · Manchester United'},
    {zone:'ST',name:'Fernando',role:'Stoßstürmer · Liverpool'}
  ];

  const fixture={
    id:'2042-01-18-brazil-ireland-finalissima',
    date:'2042-01-18',
    competition:'Finalissima',
    opponent:'Brasilien',
    venue:'Arena Castelão',
    stadiumCapacity:63903,
    worldRanking:1,
    status:'Bevorstehend',
    previewDate:'2042-01-10',
    note:'Acht Tage vor der Finalissima liegt der aktuelle Brasilien-Scoutbericht vor. Brasilien wird als Weltranglistenerster geführt und setzt zuletzt auf einen torreichen Tiki-Taka-Stil.'
  };

  const upcoming=(window.FM_IRELAND.upcomingMatches||[]).filter(x=>!(x.date==='18.01.2042'&&x.opponent==='Brasilien'));
  Object.assign(window.FM_IRELAND,{
    updated:'10.01.2042',
    nextMatch:{
      opponent:'Brasilien',venue:'Arena Castelão',date:'18.01.2042',competition:'Finalissima',
      requirement:'Finalissima gegen die Nummer 1 der Weltrangliste',status:'Bevorstehend'
    },
    upcomingMatches:[{opponent:'Brasilien',venue:'Arena Castelão',date:'18.01.2042',competition:'Finalissima'},...upcoming],
    finalissima2042:{...(window.FM_IRELAND.finalissima2042||{}),...fixture},
    brazilFinalissimaScout:{
      date:'2042-01-10',formation:'4-2-3-1',style:'Tiki-Taka',probableXI:brazilXI,
      strengths:['Flanken und Dribbling','Abschluss und Weitschüsse','Deckung und Tackling','Bewegung ohne Ball, Passen und Technik','Antizipation und Entscheidungen','Torhüter stark bei hohen Bällen, Strafraumkontrolle, Abschlag, Abwurf und Eins-gegen-eins'],
      vulnerabilities:['Elfmeter','Halten und Kommunikation der Torhüter','Exzentrizität sowie Herauslaufen/Fausten der Torhüter','Ausdauer','Sprunghöhe','Aggressivität'],
      note:'Der Trainerbericht hebt die hohe Torproduktion im jüngsten Tiki-Taka hervor, nennt zugleich aber die vielen Gegentore mit diesem System als Sorge.'
    },
    latestHeadline:'Finalissima vor Augen: Brasilien wartet mit Tiki-Taka, Weltstars und Finn-Harps-Torwart Paulo Henrique.'
  });

  const report={
    id:'2042-01-10-irland-brasilien-finalissima-vorbericht',
    type:'Vorbericht',date:'2042-01-10',competition:'Finalissima',
    headline:'Finalissima vor Augen: Brasilien wartet mit Tiki-Taka, Weltstars und Paulo Henrique im Tor',
    subheadline:'Acht Tage vor dem Duell in der Arena Castelão zeigt der Scoutbericht ein technisch herausragendes Brasilien im 4-2-3-1. Der besondere Haken für Irland: Im brasilianischen Tor steht mit Paulo Henrique ausgerechnet der Keeper von Finn Harps.',
    label:'FINALISSIMA · BRASILIEN – IRLAND · VORBERICHT · 10. JANUAR 2042',
    heroStat:{label:'Anstoß',value:'18.01.2042',note:'Arena Castelão · Brasilien ist Weltranglisten-Nr. 1'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    home:'Brasilien',away:'Irland',fixtureDate:'18. Januar 2042',location:'Arena Castelão',
    intro:'Die Finalissima ist keine ferne Januar-Marke mehr, sondern die nächste konkrete Aufgabe. Der aktuelle Scoutbericht zeigt Brasilien in einem 4-2-3-1 mit zwei Sechsern, drei offensiven Mittelfeldspielern und einer klaren Tiki-Taka-Prägung. Die Mannschaft verbindet enorme technische Qualität mit vielen Spielern aus europäischen Spitzenklubs.',
    sections:[
      {title:'Das eigentümlichste Duell steht im Tor',text:'Paulo Henrique wird in Brasiliens bester Elf als mitspielender Torwart geführt. Sein Verein: Finn Harps. Damit trifft Irlands Trainer in der Finalissima auf einen eigenen Klubspieler, der die irische Mannschaft aus dem gemeinsamen Vereinsalltag bestens kennt.'},
      {title:'Eine Angriffsreihe voller Spitzenklasse',text:'Fernando von Liverpool führt die Spitze an. Dahinter bilden Flavio Henrique von Liverpool, Emerson von Caen und Nathan Ribeiro von Manchester United die offensive Dreierreihe. Im Zentrum sichern Heriberto von Atlético de Madrid und Caetano vom VfL Wolfsburg ab.'},
      {title:'Brasilien kann fast alles mit dem Ball',text:'Der Scoutbericht zählt Flanken, Dribbling, Abschluss, Weitschüsse, Passen, Technik, Bewegungen ohne Ball, Übersicht, Antizipation und Entscheidungen zu den Stärken. Auch Deckung und Tackling werden positiv bewertet. Es ist ein Profil ohne offensichtliche spielerische Sollbruchstelle.'},
      {title:'Das Tiki-Taka hat zwei Gesichter',text:'Der brasilianische Verband ist ausdrücklich zufrieden mit der Wirkung des Tiki-Taka und der Zahl der erzielten Tore. Gleichzeitig wird genau bei diesem Stil die Zahl der Gegentore als Sorge genannt. Die Qualität ist enorm, die Balance offenbar nicht immer perfekt.'},
      {title:'Die wenigen Ansatzpunkte liegen eher ohne Ball',text:'Ausdauer, Sprunghöhe und Aggressivität tauchen im Scoutbericht nicht als Stärken auf. Bei den Torhütern werden zudem Elfmeter, Halten, Kommunikation, Exzentrizität sowie Tendenzen beim Herauslaufen und Fausten kritisch bewertet. Gegen eine derart starke Mannschaft sind das keine offenen Türen, aber zumindest kleine Risse im Mauerwerk.'}
    ],
    probableXI:brazilXI,
    xiHeading:'Brasiliens beste Elf im Scoutbericht',
    strengthsTitle:'WAS BRASILIEN TRÄGT',strengthsHeading:'Technik, Bewegung und Abschluss',
    strengths:[
      '4-2-3-1 mit Tiki-Taka-Prägung und sehr hoher technischer Qualität.',
      'Starke Flankengeber und Dribbler auf mehreren Positionen.',
      'Gefahr sowohl im Strafraum als auch durch Weitschüsse aus der zweiten Reihe.',
      'Sehr gutes Passspiel, Bewegungen ohne Ball, Antizipation und Entscheidungsfindung.',
      'Defensiv gute Deckung und solides Tackling.',
      'Torhüterprofil stark bei hohen Bällen, Strafraumkontrolle, langen Eröffnungen und Eins-gegen-eins.'
    ],
    vulnerabilitiesTitle:'WO IRLAND ANSETZEN KANN',vulnerabilitiesHeading:'Wenige, aber erkennbare Risse',
    vulnerabilities:[
      'Der Trainerbericht sorgt sich trotz der vielen Tore um die Zahl der Gegentore im Tiki-Taka.',
      'Ausdauer, Sprunghöhe und Aggressivität werden nicht als brasilianische Stärken geführt.',
      'Bei den Torhütern werden Elfmeter, Halten und Kommunikation kritisch bewertet.',
      'Auch Exzentrizität sowie das Verhalten beim Herauslaufen und Fausten gelten als Schwachpunkte.',
      'Dudu wird im Scoutbericht als zuletzt außer Form geführt und ist damit keine ideale Stabilitätsreserve.'
    ],
    keyDuelsTitle:'SCHLÜSSELDUELLE',keyDuelsHeading:'Wo die Finalissima kippen kann',
    keyDuels:[
      {title:'Irlands Pressing gegen Emerson',text:'Emerson ist als vorgeschobener Spielmacher das kreative Zentrum hinter Fernando. Wird er sauber aus dem Rhythmus genommen, muss Brasilien stärker über die Flügel lösen.'},
      {title:'Tiefe hinter den brasilianischen Außenverteidigern',text:'Enzo und Felipe sind offensiv bzw. invers angelegt. Umschaltmomente hinter ihren Bewegungen könnten zu den wenigen Räumen gehören, die Brasilien freiwillig anbietet.'},
      {title:'Zweite Bälle gegen Heriberto und Caetano',text:'Das brasilianische Zentrum verbindet Absicherung und Vorwärtsdrang. Irland darf nach Ballgewinnen nicht sofort den nächsten Ball verlieren.'},
      {title:'Paulo Henrique gegen seine Klubkollegen',text:'Der Finn-Harps-Keeper kennt viele irische Nationalspieler aus dem täglichen Training. Gerade bei Standards und bekannten Abschlussmustern entsteht daraus ein ungewöhnliches taktisches Katz-und-Maus-Spiel.'}
    ],
    matchPlanTitle:'MATCHPLAN IRLAND',matchPlanHeading:'Keine Schönheitspunkte gegen Brasilien',
    matchPlan:[
      'Brasiliens ersten Aufbau lenken, statt blind durchzupressen.',
      'Emersons Zeit zwischen den Linien reduzieren und Fernando von der Versorgung abschneiden.',
      'Nach Ballgewinnen sofort die Räume hinter Enzo und Felipe suchen.',
      'Standards und zweite Bälle aggressiv attackieren, besonders wegen der schwächeren Sprunghöhe und Aggressivität im Gesamtprofil.',
      'Brasilien lange arbeiten lassen: Die im Scoutbericht nur durchschnittlich bewertete Ausdauer kann mit zunehmender Spielzeit relevant werden.',
      'Bei Elfmetern und Standards keine Scheu vor direkter Verantwortung: Genau dort weist das Torhüterprofil Schwächen aus.'
    ],
    verdictHeading:'Der schwerste Gegner, aber kein unlösbares Rätsel',
    verdict:'Brasilien ist auf dem Papier klarer Favorit und besitzt auf fast jeder Position Weltklasse. Der Scoutbericht liefert trotzdem ein interessantes Bild: Das Tiki-Taka produziert viele Tore, kostet aber offenbar defensive Stabilität. Irland muss nicht versuchen, Brasilien schöner zu bespielen. Es muss die Partie länger offenhalten als Brasilien lieb ist und dann die wenigen Unsauberkeiten brutal bestrafen.',
    sources:[
      'FM-Brasilienübersicht · Stärken/Schwächen und Trainerzusammenfassung · 10.01.2042',
      'FM-Spielerexport Brasilien · Kader und beste Elf · 10.01.2042',
      'Finalissima-Auslosung · Brasilien – Irland · 18.01.2042'
    ]
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-01-10-ireland-brazil-finalissima-preview',date:'2042-01-10',season:2042,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'FINALISSIMA · NOCH 8 TAGE',
    title:'Brasilien wartet: Irlands Finalissima wird zum Duell mit Paulo Henrique',
    summary:'Der Scoutbericht zeigt Brasilien im 4-2-3-1 mit Tiki-Taka, enormer technischer Qualität und einer ungewöhnlichen Pointe: Finn-Harps-Keeper Paulo Henrique steht im brasilianischen Tor.',
    href:'presse.html?id=2042-01-10-irland-brasilien-finalissima-vorbericht',
    entities:['ireland','brazil','finalissima','paulo-henrique','season-2042']
  });
})();