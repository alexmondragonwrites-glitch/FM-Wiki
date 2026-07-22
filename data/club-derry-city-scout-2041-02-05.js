(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='derry-city');
  if(!club)return;

  club.completion=88;
  club.manager='Ciaran Clark';
  club.formation='4-4-2 breit';
  club.summary='Derry City eröffnet gegen Finn Harps am 9. Februar 2041 im President\'s Cup die heimische Pflichtspielsaison. Der Scout erwartet ein körperlich robustes 4-4-2 mit Kavanagh Hamici und Andy Clark als Doppelspitze, Keil Else und Michael Yates im Zentrum sowie einer erfahrenen Viererkette.';
  club.keyPlayers=['Kavanagh Hamici','Keil Else','Michael Yates','Kieran McClelland'];
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('Scoutbericht')),'President\'s Cup 2041','Scoutbericht 05.02.2041','Hamici als Schlüsselspieler','Stark bei Mut und Teamwork'];
  club.probableXI=[
    {name:'Marcos Quintana',role:'Torwart',zone:'TW'},
    {name:'Sébastien Barbier',role:'Kompromissloser Außenverteidiger',zone:'RV'},
    {name:'Glenn Bolger',role:'Innenverteidiger',zone:'IV'},
    {name:'Calum Jenks',role:'Innenverteidiger',zone:'IV'},
    {name:'David Roberts',role:'Kompromissloser Außenverteidiger',zone:'LV'},
    {name:'Kieran McClelland',role:'Flügelspieler',zone:'RM'},
    {name:'Michael Yates',role:'Zurückgezogener Spielmacher',zone:'ZM'},
    {name:'Keil Else',role:'Zentraler Mittelfeldspieler',zone:'ZM'},
    {name:'Orestis Katsikis',role:'Flügelspieler',zone:'LM'},
    {name:'Andy Clark',role:'Hängende Spitze',zone:'ST'},
    {name:'Kavanagh Hamici',role:'Stoßstürmer',zone:'ST'}
  ];
  club.scouting={
    strengths:[
      'Hoher kollektiver Mut und große Einsatzfreude im gesamten Kader',
      'Ausgeprägtes Teamwork und starke Arbeit ohne Ball',
      'Gute Kopfballtechnik und körperlich robuste Innenverteidigung',
      'Torhüter mit gutem Abwurf und ordentlichen Eins-gegen-eins-Werten',
      'Keil Else und Michael Yates geben dem Zentrum Passqualität und Spielkontrolle',
      'Kavanagh Hamici ist der klare Zielspieler und aktuelle Schlüsselspieler',
      'Die Gesamtleistung liegt laut Analyse in sämtlichen Kategorien über dem Premier-Division-Durchschnitt'
    ],
    weaknesses:[
      'Torhüter neigen zum Fausten, statt hohe Bälle sicher festzuhalten',
      'Die Aggressivität des Kaders wird als zu gering eingeschätzt',
      'Beim Herauslaufen besitzt Derry nicht den besten Torhüter',
      'Acht der letzten 22 Gegentore entstanden nach Steilpässen',
      'Nur sieben der letzten 22 Gegentorvorlagen kamen von außerhalb des Strafraums',
      'Dion Davies befindet sich mit einer Formnote von 6,55 über fünf Spiele in schwacher Verfassung',
      'Die Defensive wird in der Analyse ausdrücklich als Bereich genannt, der eine genauere Betrachtung verdient'
    ],
    threats:[
      'Kavanagh Hamici attackiert als Stoßstürmer konsequent die Tiefe und traf im jüngsten 2:2 gegen CF Montréal doppelt.',
      'Andy Clark lässt sich als hängende Spitze fallen und verbindet Mittelfeld und Angriff.',
      'Michael Yates diktiert als zurückgezogener Spielmacher Tempo und erste Vertikalpässe.',
      'Keil Else bringt Physis, Passsicherheit und zweite Läufe aus dem Zentrum.',
      'Kieran McClelland und Orestis Katsikis geben dem 4-4-2 klassische Breite und suchen frühe Hereingaben.'
    ],
    plan:[
      'Das Zentrum mit drei Mittelfeldspielern gegen Derrys Zweierachse überladen und Yates unter Druck setzen.',
      'Hamici nicht mit einer hohen, ungesicherten Linie füttern; Tiefenläufe früh übergeben.',
      'Andy Clarks Zurückfallen nicht blind verfolgen, sondern die Übergabe zwischen Sechser und Innenverteidiger sauber halten.',
      'Nach Ballgewinnen sofort hinter die beiden Flügelspieler und in die Räume neben den Innenverteidigern spielen.',
      'Mit diagonalen Läufen und flachen Pässen hinter die Kette Derrys dokumentierte Anfälligkeit gegen Steilpässe angreifen.',
      'Bei Standards und Flanken konsequent auf zweite Bälle gehen, weil Quintana eher zum Fausten neigt.',
      'Das Tempo über längere Phasen hochhalten und Derrys erfahrene Startelf zu vielen Richtungswechseln zwingen.'
    ]
  };
  club.nextMatch={
    date:'09.02.2041',time:'16:00',competition:'President\'s Cup',opponent:'Finn Harps',venue:'Im Export noch offen',
    note:'Der President\'s Cup bildet den nationalen Pflichtspielauftakt der Saison 2041.'
  };
  club.pressReport={
    id:'2041-02-05-derry-city-presidents-cup-vorbericht',
    href:'presse.html?id=2041-02-05-derry-city-presidents-cup-vorbericht',
    label:'PRESIDENT\'S CUP · 05.02.2041',
    headline:'Die heimische Saison beginnt gegen den härtesten Verfolger',
    standfirst:'Derry City bringt Mut, Erfahrung und eine klare Doppelspitze in den President\'s Cup. Finn Harps muss vor allem Hamicis Tiefe und Yates’ Passspiel kontrollieren.'
  };
  club.checklist={...(club.checklist||{}),profile:true,squad:true,tactics:true,meetings:true};
})();