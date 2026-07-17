(()=>{
  const t=(window.FM_CLUBS||[]).find(x=>x.id==='tottenham');
  if(!t)return;
  Object.assign(t,{
    name:'Tottenham Hotspur',
    status:'partial',
    completion:88,
    summary:'Champions-League-Gegner am 28.11.2040: ein formstarkes 4-4-2 mit zwei klar getrennten Sturmrollen, hohem Tempo und einer verwundbaren Struktur gegen kurze Kombinationen.',
    manager:'Offen',
    stadium:'London · Auswärtsspiel',
    formation:'4-4-2',
    domesticPosition:7,
    tags:['Champions League','Kommendes Spiel','Matchday-Dossier','4-4-2'],
    pressReport:{
      id:'2040-11-23-tottenham-vorbericht',
      href:'presse.html?id=2040-11-23-tottenham-vorbericht',
      label:'PRESSEVORBERICHT · 23.11.2040',
      headline:'Zwei Spitzen gegen drei Mittelfeldspieler',
      standfirst:'Tottenham bringt Rückenwind, Tempo und ein eingespieltes 4-4-2. Finn Harps besitzt dafür im Zentrum die bessere Geometrie.'
    },
    probableXI:[
      {zone:'TW',name:'D. Jeame',role:'Torwart'},
      {zone:'LV',name:'E. Evrard',role:'Außenverteidiger'},
      {zone:'IV',name:'F. Oka',role:'Innenverteidiger'},
      {zone:'IV',name:'D. Braddock',role:'Innenverteidiger'},
      {zone:'RV',name:'Helton',role:'Außenverteidiger'},
      {zone:'LM',name:'M. Alavi',role:'Flügelspieler'},
      {zone:'ZM',name:'R. Lucarelli',role:'Zentraler Mittelfeldspieler'},
      {zone:'ZM',name:'V. Pimenta',role:'Zentraler Mittelfeldspieler'},
      {zone:'RM',name:'J. van den Broek',role:'Flügelspieler'},
      {zone:'ST',name:'Guilherme',role:'Stoßstürmer'},
      {zone:'ST',name:'B. de Haan',role:'Hängende Spitze'}
    ],
    scouting:{
      strengths:[
        'Hohe Einsatzfreude und starkes Teamwork über die gesamte Mannschaft.',
        'Überdurchschnittliches Tempo und technisch gute Ballannahme.',
        'Eingespieltes 4-4-2 mit klar getrennten Aufgaben für Guilherme und Bas de Haan.',
        'Guilherme führt mit acht Treffern die interne Torjägerliste an.',
        'Defensiv stark am ersten Pfosten bei gegnerischen Standards.',
        'Gute Konzentration und zuverlässige Elfmeterschützen.'
      ],
      weaknesses:[
        'Acht der letzten 22 Gegentore entstanden nach kurzen Passfolgen.',
        'Die Torhüter werden im Eins-gegen-eins nicht als herausragend eingeschätzt.',
        'Die Zielstrebigkeit des Kaders ist nur durchschnittlich ausgeprägt.',
        'Gegen ein 4-4-2 wurden zuletzt drei Großchancen pro 90 Minuten zugelassen.',
        'Tyler Friel befindet sich mit einer Durchschnittsnote von 6,54 außer Form.',
        'Offensive Standards erzeugen nur geringe Chancenqualität.'
      ],
      threats:[
        'Guilherme bindet die letzte Linie und attackiert mit Tempo den Raum hinter der Abwehr.',
        'Bas de Haan lässt sich als hängende Spitze fallen und verbindet Mittelfeld und Angriff.',
        'Lucarelli und Pimenta geben der Doppelsechs technische Qualität und Ballsicherheit.',
        'Alavi und van den Broek können das Spiel breit machen und offene Umschaltfelder bestrafen.',
        'Die jüngsten Siege gegen Wolves und Porto geben Tottenham sichtbaren Rückenwind.'
      ],
      plan:[
        'Das zentrale Drei-gegen-zwei mit O’Neill, O’Kane und Frame kontrolliert ausspielen.',
        'Eine Seite breit halten, die andere mit einrückendem Flügelspieler und nachstoßendem Achter überladen.',
        'Kurze Kombinationen, Cutbacks und flache Hereingaben priorisieren.',
        'Ramsey früh hinter die letzte Linie schicken, sobald Tottenham im Mittelfeld herausrückt.',
        'Bruce übernimmt Guilhermes ersten Kontakt, der zweite Innenverteidiger sichert de Haans Anschlussbewegung.',
        'Bei eigenen Standards den starken ersten Pfosten meiden und Rückraum- oder lange-Pfosten-Varianten nutzen.',
        'Hohe, aber nicht extreme Defensivlinie wählen, um Tottenhams Geschwindigkeit nicht mit offenem Feld zu füttern.'
      ]
    }
  });
  t.checklist={...(t.checklist||{}),profile:true,squad:true,tactics:true,meetings:true};
})();