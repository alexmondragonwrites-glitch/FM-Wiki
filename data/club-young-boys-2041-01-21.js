(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  let club=window.FM_CLUBS.find(item=>item.id==='young-boys');
  if(!club){
    club={id:'young-boys',name:'BSC Young Boys',short:'YB',country:'Schweiz',league:'Raiffeisen Super League',scope:['Champions League'],meetings:[],checklist:{}};
    window.FM_CLUBS.push(club);
  }

  Object.assign(club,{
    name:'BSC Young Boys',
    short:'YB',
    country:'Schweiz',
    league:'Raiffeisen Super League',
    scope:['Champions League'],
    status:'partial',
    completion:68,
    season:2041,
    summary:'Champions-League-Gegner am 23. Januar 2041: Young Boys wird auswärts in einer vorsichtigen 4-4-2-Grundordnung erwartet, verbindet geduldigen Ballbesitz mit hohem Gegenpressing und zeigt laut Datencenter sowohl offensiv als auch defensiv deutlich überdurchschnittliche Leistungen.',
    manager:'Offen',
    stadium:'Donegal Stadium · Heimspiel',
    formation:'4-4-2 erwartet · 5-3-2 häufig genutzt',
    squadValue:'Nicht im Scoutbericht',
    avgAge:'Offen',
    keyPlayers:['Walter Bollhalder','Hristijan Mihailov','S. Stöckli','Renato Ajdini'],
    tags:['Champions League','Ligaphase 2040/41','Ballbesitzspiel','Hohes Pressing','Vorsichtige Ausrichtung'],
    meetings:[{date:'23.01.2041',venue:'H',result:'offen'}],
    checklist:{profile:true,squad:false,tactics:true,transfers:false,meetings:true,history:false},
    probableXI:[
      {zone:'TW',name:'G. Martone',role:'Mitspielender Torwart'},
      {zone:'RV',name:'E. Andre',role:'Außenverteidiger'},
      {zone:'IV',name:'M. Husser',role:'Ballspielender Verteidiger'},
      {zone:'IV',name:'S. Zecchini',role:'Kompromissloser Innenverteidiger'},
      {zone:'LV',name:'L. Dettori',role:'Flügelverteidiger'},
      {zone:'RM',name:'H. Mihailov',role:'Flügelspieler'},
      {zone:'ZM',name:'E. Dumoulin',role:'Zentraler Mittelfeldspieler'},
      {zone:'ZM',name:'W. Bollhalder',role:'Vorgeschobener Spielmacher'},
      {zone:'LM',name:'E. Trunz',role:'Äußerer Spielmacher'},
      {zone:'ST',name:'R. Ajdini',role:'Knipser'},
      {zone:'ST',name:'S. Stöckli',role:'Hängende Spitze'}
    ],
    scouting:{
      planHeading:'So wird Young Boys’ Ballbesitz-4-4-2 kontrolliert',
      strengths:[
        'Das Datencenter bewertet die allgemeine Leistung sowie die Defensiv- und Offensivarbeit als deutlich überdurchschnittlich.',
        'Young Boys sucht geduldigen Kurzpassaufbau, will den Ball halten und ihn nach Verlust mit hohem Pressing unmittelbar zurückgewinnen.',
        'Bewegung ohne Ball, Antizipation, Konzentration, Nervenstärke, Flair und Ballannahme zählen zu den klaren Mannschaftsstärken.',
        'Vier Spieler besitzen laut Scoutbericht besondere Übersicht und Kreativität im Überfluss.',
        'Walter Bollhalder erreicht in den Schlüsselwerten seiner Rolle weit überdurchschnittliche Werte.',
        'Hristijan Mihailov fällt mit außergewöhnlichen physischen Leistungsparametern auf.',
        'Ecken und weite Einwürfe bieten zusätzliche Gefahr; auch der erste Kontakt am kurzen Pfosten wird bei defensiven Standards sehr gut verteidigt.'
      ],
      weaknesses:[
        'Die Torhüter gehören im Eins-gegen-eins nicht zu den Besten und neigen dazu, den Ball lieber wegzufausten.',
        'Die Einsatzfreude des Kaders liegt laut Scoutbericht im hinteren Drittel der Tabelle.',
        'Die Abwürfe der Torhüter sind nicht optimal ausgeprägt.',
        'Nur sechs von 17 Vorlagen zu Gegentoren in den letzten 20 Spielen kamen von außerhalb des Strafraums; daraus lässt sich eine erhöhte Anfälligkeit gegen strafraumnahe Kombinationen und Rücklagen ableiten.',
        'Renato Ajdini ist außer Form und kam in den letzten fünf Spielen nur auf eine Durchschnittsnote von 6,62.',
        'Im häufig genutzten 5-3-2 mit defensivem Mittelfeld und Flügelverteidigern wurden durchschnittlich drei Großchancen pro 90 Minuten zugelassen.'
      ],
      threats:[
        'Walter Bollhalder ist als vorgeschobener Spielmacher der auffälligste zentrale Verbindungsspieler.',
        'Hristijan Mihailov bringt auf rechts eine ungewöhnlich starke physische Komponente in das Flügelspiel.',
        'S. Stöckli kann als hängende Spitze zwischen Finn Harps’ Mittelfeld und Abwehr auftauchen und Ajdinis Tiefenläufe vorbereiten.',
        'E. Trunz spielt links als äußerer Spielmacher und sucht eher kreative Halbräume als reine Linienläufe.',
        'Ecken und weite Einwürfe dürfen Young Boys keine billigen zusätzlichen Strafraumszenen schenken.'
      ],
      plan:[
        'Das zentrale Drei-gegen-zwei mit O’Neill und den beiden Achtern konsequent nutzen und Bollhalder früh aus dem Rhythmus bringen.',
        'Den ruhigen Schweizer Aufbau auf eine Seite lenken und Martone zu schnellen Abwürfen oder langen Lösungen zwingen.',
        'Mit Tempowechseln und vielen Anschlussläufen die unterdurchschnittliche Einsatzfreude über 90 Minuten testen.',
        'Im letzten Drittel flach kombinieren, Cutbacks und Rücklagen suchen; die Gegentorvorlagen entstehen überwiegend aus strafraumnahen Zonen.',
        'Stöcklis Zurückfallen klar übergeben: O’Neill sichert den Zwischenraum, während ein Innenverteidiger Ajdinis Tiefe kontrolliert.',
        'Mihailov auf der rechten Young-Boys-Seite früh doppeln und seine physischen Läufe nicht in offene Räume kommen lassen.',
        'Unnötige Fouls und Einwürfe in Tornähe vermeiden, weil Young Boys bei Ecken und weiten Einwürfen echte Zusatzgefahr besitzt.',
        'Gegen einen möglichen Wechsel ins 5-3-2 die Flügelverteidiger tief binden und die Räume neben dem zentralen Dreierblock bespielen.'
      ]
    },
    pressReport:{
      id:'2041-01-21-young-boys-vorbericht',
      href:'presse.html?id=2041-01-21-young-boys-vorbericht',
      label:'CHAMPIONS-LEAGUE-VORBERICHT · 21.01.2041',
      headline:'Geduld gegen Geduld, Druck gegen Druck',
      standfirst:'Young Boys reist mit vorsichtiger Grundausrichtung, starkem Ballbesitzspiel und überdurchschnittlicher Arbeit in beiden Spielrichtungen nach Donegal. Finn Harps muss vor allem Bollhalder, Mihailov und die Verbindung der beiden Spitzen kontrollieren.'
    }
  });
})();