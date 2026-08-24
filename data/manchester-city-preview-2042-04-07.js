(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-04-07';
  const reportId='2042-04-07-manchester-city-viertelfinale-vorbericht';
  const previous=window.FM_CLUBS.find(x=>x.id==='man-city'||x.id==='manchester-city'||x.name==='Manchester City')||{};
  const meetings=[...(previous.meetings||[])];
  [
    {date:'11.09.2040',venue:'H',result:'3:1',competition:'UEFA Champions League · Ligaphase'},
    {date:'13.06.2041',venue:'N',result:'2:1',competition:'FIFA Club World Cup · Gruppe H'}
  ].forEach(meeting=>{
    const idx=meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)meetings[idx]={...meetings[idx],...meeting};else meetings.push(meeting);
  });

  const probableXI=[
    {name:'Chris Widdowson',zone:'TW',role:'Torwart',age:26,value:'€126Mio–€154Mio',rating:6.89},
    {name:'Conor Blythe',zone:'VL',role:'Inverser Flügelverteidiger',age:25,value:'€47Mio–€68Mio',rating:6.98},
    {name:'José Ruvalcaba',zone:'IVL',role:'Innenverteidiger',age:29,value:'€152Mio–€177Mio',rating:6.97},
    {name:'Kevon Allman',zone:'IVR',role:'Ballspielender Verteidiger',age:26,value:'€136Mio–€192Mio',rating:6.98},
    {name:'Alexandr Kondratjev',zone:'VR',role:'Inverser Flügelverteidiger',age:32,value:'Nicht zum Verkauf',rating:7.03},
    {name:'Faiser Oroz',zone:'DM/MZ',role:'Ballerobernder Mittelfeldspieler',age:29,value:'€215Mio–€234Mio',rating:7.01},
    {name:'Melvin Jong-A-Pin',zone:'DM/MZ',role:'Segundo Volante',age:30,value:'€83Mio–€100Mio',rating:7.07},
    {name:'Callum Shaughnessy',zone:'OML',role:'Flügelspieler',age:31,value:'Nicht zum Verkauf',rating:7.09},
    {name:'Marian Peterges',zone:'OMZ',role:'Vorgeschobener Spielmacher',age:26,value:'€324Mio–€396Mio',rating:7.19},
    {name:'Toprak Gül',zone:'OMR',role:'Flügelspieler',age:27,value:'€218Mio–€261Mio',rating:7.35},
    {name:'Souleymane Kouamé',zone:'ST',role:'Stoßstürmer',age:29,value:'€213Mio–€234Mio',rating:7.38}
  ];

  const clubData={
    ...previous,
    id:'man-city',name:'Manchester City',short:'MCI',country:'England',league:'Premier League',season:2042,
    status:'current',completion:98,
    summary:'Champions-League-Viertelfinalgegner 2042. Manchester City kommt als weltweiter Fünf-Sterne-Klub mit einem geschätzten Vereinswert von €1,22 Mrd., enormer Kaderbreite und Platz fünf in der Premier League. Finn Harps hat die beiden jüngsten dokumentierten Duelle 3:1 und 2:1 gewonnen.',
    manager:previous.manager||'Nicht im bereitgestellten Export ausgewiesen',stadium:'Etihad Stadium · 61.100',
    formation:'Best-XI-Bild mit Doppelsechs und Dreierreihe hinter Kouamé; Scout hebt 4-3-3 DM breit als produktive Formation hervor. 4-4-2 wurde ebenfalls genutzt, laut Scout aber deutlich weniger effizient.',
    squadValue:'Spitzenkader mit mehreren Einzelwerten jenseits von €200 Mio.; Marian Peterges wird mit €324–396 Mio. ausgewiesen.',
    avgAge:'Best-XI überwiegend im Bereich 25–32 Jahre; deutlich erfahrene Kernmannschaft.',
    keyPlayers:['Souleymane Kouamé','Toprak Gül','Marian Peterges','Cristian Compagnucci','Jhonathan Galindrez','Melvin Jong-A-Pin','Faiser Oroz'],
    tags:['Champions League 2041/42','Viertelfinale','Premier League Rang 5','Weltweites Ansehen','€1,22 Mrd. Vereinswert','4-3-3 DM breit','starkes Passspiel','starke Flanken','Standards gefährlich','enorme Kaderbreite'],
    meetings,
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true,meetings:true,history:true},
    leagueSnapshot:{date,position:5,played:31,wins:17,draws:5,losses:9,goalsFor:56,goalsAgainst:37,goalDifference:19,points:56,leader:'Tottenham',leaderPoints:64,gapToLeader:8},
    clubSnapshot:{date,reputation:'5 Sterne · weltweit',estimatedClubValue:'€1,22 Mrd.',stadium:'Etihad Stadium',capacity:61100,youthRecruitment:20,trainingFacilities:'Erstklassig',youthFacilities:'Hochmodern'},
    probableXI,
    squadMeta:{
      comparisonDate:date,
      exportedPlayers:30,
      standoutValues:[
        'Marian Peterges €324–396 Mio.','Toprak Gül €218–261 Mio.','Souleymane Kouamé €213–234 Mio.','Faiser Oroz €215–234 Mio.',
        'José Ruvalcaba €152–177 Mio.','Kevon Allman €136–192 Mio.','Chris Widdowson €126–154 Mio.'
      ],
      depthNotes:[
        'Jhonathan Galindrez: 14 Tore und 5 Vorlagen bei 26 Startelf- plus 6 Joker-Einsätzen.',
        'Cristian Compagnucci: 12 Tore, 4 Vorlagen und Ø 7,35.',
        'Callum Shaughnessy: 8 Tore, 7 Vorlagen und Ø 7,09.',
        'Alex Lazenbury: 21 Jahre, bereits mit €96–112 Mio. bewertet.'
      ]
    },
    currentForm:[
      {name:'Souleymane Kouamé',detail:'13 Tore und 7 Vorlagen bei 19 Startelf- und 11 Joker-Einsätzen; Ø 7,38.'},
      {name:'Toprak Gül',detail:'10 Tore, 4 Vorlagen und Ø 7,35.'},
      {name:'Marian Peterges',detail:'4 Tore, 8 Vorlagen und Ø 7,19; teuerster Spieler im bereitgestellten Export.'},
      {name:'Cristian Compagnucci',detail:'12 Tore, 4 Vorlagen und Ø 7,35.'},
      {name:'Jhonathan Galindrez',detail:'14 Tore und 5 Vorlagen. Trotz seiner Treffer nennt der Scout Citys Gesamtwert bei den Top-Torschützen nicht außergewöhnlich dominant.'},
      {name:'Melvin Jong-A-Pin',detail:'3 Tore, 6 Vorlagen und Ø 7,07 aus dem zentralen Mittelfeld.'}
    ],
    scouting:{
      strengths:[
        'Sehr hohes Passniveau und technisch starker Kader.',
        'Flanken gehören laut Scout zu den klaren Mannschaftsstärken.',
        'Gutes Kopfballspiel und gefährliche Standards, besonders Freistöße und Ecken.',
        'Hohe Konzentration und ausgeprägte Führungsqualitäten.',
        'Abschlussqualität im Kader wird insgesamt positiv bewertet.',
        'Das 4-3-3 DM breit produziert laut Scout deutlich mehr Großchancen, als es zulässt.',
        'Am ersten Pfosten bei gegnerischen Standards arbeitet City überdurchschnittlich gut: 53 Prozent der Ballkontakte gegenüber 47 Prozent Ligadurchschnitt.',
        'Die Offensivbreite ist außergewöhnlich: Kouamé, Gül, Compagnucci, Galindrez und Shaughnessy liefern alle zweistellige oder nahezu zweistellige Scorerwerte.'
      ],
      weaknesses:[
        'Der Scout sieht bei den Torhütern Defizite bei den Reflexen.',
        'Citys Torhüter neigen dazu, bei Flanken eher auf der Linie zu bleiben.',
        'Abwürfe der Torhüter werden als nicht optimal bewertet.',
        'Das 4-4-2 war in der ausgewiesenen Scoutprobe wesentlich weniger produktiv und erzeugte nur wenige Großchancen.',
        'City ist in der Premier League nur Fünfter: 56 Punkte aus 31 Spielen, bereits neun Niederlagen und 37 Gegentore.',
        'Salvatore Orrù wird vom Scout als formschwach markiert; die jüngsten fünf Spiele lagen nur bei Ø 6,68.'
      ],
      plan:[
        'Nicht versuchen, City über hohe Dauerflanken zu knacken. Kopfballtechnik und Flankenverteidigung gehören eher zu ihren Stärken.',
        'Widdowson und die Torhüter mit schnellen Abschlüssen aus klaren Zonen testen. Der Scout sieht Reflexe als konkreten Angriffspunkt.',
        'Flache Hereingaben und Rückpässe in den Rückraum können sinnvoller sein als hohe Bälle, weil Citys Keeper bei Flanken eher auf der Linie bleibt.',
        'Peterges zwischen den Linien nicht frei drehen lassen. Mit 8 Vorlagen und dem höchsten Marktwert ist er der zentrale Kreativknoten.',
        'Gül und Kouamé früh binden: beide verbinden hohe individuelle Qualität mit direktem Output.',
        'Citys Aufbau aggressiv, aber kontrolliert pressen. Ihr Passspiel ist stark, deshalb müssen Pressingauslöser klar sein; wildes Hinterherlaufen würde Räume öffnen.',
        'Wenn City ins 4-4-2 wechselt, mutiger auf Kontrolle gehen. Die Scoutdaten bewerten diese Variante deutlich weniger gefährlich als das 4-3-3 DM breit.',
        'Das psychologische Bild nutzen: Finn Harps hat die beiden letzten dokumentierten Duelle gegen City gewonnen, 3:1 im September 2040 und 2:1 bei der Klub-WM 2041.'
      ]
    },
    pressReport:{id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · VIERTELFINALE',headline:'Gigant mit Rissen: Manchester City vor dem Viertelfinale im Check'}
  };
  upsert(window.FM_CLUBS,clubData);

  const cl=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...cl,
    knockoutStage:{
      ...(cl.knockoutStage||{}),
      quarterFinals:{
        ...((cl.knockoutStage||{}).quarterFinals||{}),
        finnHarps:{
          ...((((cl.knockoutStage||{}).quarterFinals||{}).finnHarps)||{}),
          opponent:'Man City',status:'anstehend',scoutingDate:date,
          opponentSnapshot:'Premier League Platz 5 · 31 Spiele · 56 Punkte · 56:37 Tore'
        }
      }
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Champions League: Manchester City ist analysiert. Der Premier-League-Fünfte bringt einen extrem teuren Kader, starkes Passspiel und enorme Offensivbreite mit, zeigt aber Angriffspunkte im Tor und im 4-4-2.';
    season.nextFocus={competition:'UEFA Champions League',stage:'Viertelfinale',opponent:'Manchester City',status:'anstehend',scoutingDate:date};
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='07.04.2042: Gegneranalyse vor dem Champions-League-Viertelfinale. Manchester City ist Fünfter der Premier League mit 56 Punkten aus 31 Spielen und 56:37 Toren. Der Scout hebt Passspiel, Flanken, Kopfballspiel und Standards hervor; Reflexe der Torhüter und die 4-4-2-Variante gelten als Angriffspunkte.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,type:'Gegneranalyse',date,competition:'UEFA Champions League',fixtureDate:'Viertelfinale 2041/42',
    home:'Finn Harps',away:'Manchester City',
    headline:'Gigant mit Rissen: Manchester City vor dem Viertelfinale im Check',
    subheadline:'€1,22 Milliarden Vereinswert, Weltklasse auf fast jeder Position und trotzdem nur Rang fünf in England. City kommt mit Kouamé, Gül und Peterges, aber auch mit neun Premier-League-Niederlagen und klaren Torwart-Angriffspunkten.',
    label:'CHAMPIONS LEAGUE · VIERTELFINALE · GEGNERANALYSE · 07.04.2042',
    heroStat:{label:'Premier League',value:'5. · 56 Punkte',note:'31 Spiele · 17 Siege · 5 Remis · 9 Niederlagen · 56:37 Tore'},
    backlink:{href:'klub.html?id=man-city',label:'← ZUM MANCHESTER-CITY-DOSSIER'},
    intro:'Manchester City bleibt ein europäischer Schwergewichtskader, aber der aktuelle Tabellenstand nimmt dem Namen etwas von seiner Unantastbarkeit. Nach 31 Premier-League-Spielen steht City nur auf Rang fünf und hat bereits neun Niederlagen kassiert. Gleichzeitig liest sich der Kader wie ein Transfermarkt-Fiebertraum: Peterges wird mit bis zu €396 Mio. bewertet, Gül, Kouamé und Oroz liegen jeweils oberhalb von €200 Mio. Finn Harps trifft damit auf enorme Einzelqualität, aber nicht auf eine fehlerfreie Maschine.',
    sections:[
      {title:'Die Premier League zeigt: City ist verwundbar',text:'17 Siege aus 31 Spielen sind stark, aber nicht dominant. Mit 56 Punkten liegt City acht Zähler hinter Tabellenführer Tottenham. 37 Gegentore und neun Niederlagen zeigen, dass dieses Team trotz Weltklasse-Kader regelmäßig Spiele hergibt.'},
      {title:'Kouamé ist die Spitze eines breiten Angriffs',text:'Souleymane Kouamé kommt auf 13 Tore und 7 Vorlagen bei Ø 7,38. Hinter ihm liefert Toprak Gül 10 Tore und 4 Vorlagen, Cristian Compagnucci 12 Tore und 4 Vorlagen, Jhonathan Galindrez sogar 14 Tore und 5 Vorlagen. City ist deshalb nicht über einen einzelnen Torschützen zu kontrollieren.'},
      {title:'Peterges ist der kreative Luxusartikel',text:'Marian Peterges steht bei 4 Toren und 8 Vorlagen und wird mit €324–396 Mio. bewertet. Im Best-XI-Bild sitzt er zentral hinter der Spitze. Wenn Finn Harps ihm Raum zwischen Mittelfeld und Abwehr gibt, kann er Citys komplette Offensivreihe bedienen.'},
      {title:'Der Scout mag Citys 4-3-3 deutlich lieber als das 4-4-2',text:'Das 4-3-3 DM breit wird als produktive Variante hervorgehoben, die mehr Großchancen erzeugt als zulässt. Das ebenfalls genutzte 4-4-2 fällt in der Scoutprobe deutlich ab. Ein Formationswechsel wäre deshalb eher ein Signal für Finn Harps, mutiger Kontrolle zu suchen.'},
      {title:'Nicht in Citys Luftschlacht einsteigen',text:'Kopfballtechnik, Flanken, Ecken und Freistöße gehören laut Scout zu den Stärken. Ein Spiel mit vielen hohen Bällen würde genau in das Profil des Gegners laufen. Flache Kombinationen, Rückpässe und schnelle Abschlüsse erscheinen sinnvoller.'},
      {title:'Der Torwart ist der sichtbarste Angriffspunkt',text:'Chris Widdowson ist zwar ein extrem wertvoller Stammkeeper, doch der Team-Scout nennt Reflexe als Schwäche der City-Torhüter. Zudem bleiben sie bei Flanken eher auf der Linie und ihre Abwürfe werden nicht besonders positiv bewertet. Das ist ein konkreter Ansatzpunkt für präzise Abschlüsse statt blindem Volumen.'},
      {title:'Und dann ist da noch die Geschichte',text:'Finn Harps muss City respektieren, aber nicht fürchten. Das 3:1 in der Champions-League-Ligaphase 2040 und das 2:1 bei der Klub-WM 2041 gingen beide an die Harps. Beim letzten Duell drehten Papini und Ramsey sogar einen frühen Rückstand.'}
    ],
    strengthsTitle:'WAS CITY SO GEFÄHRLICH MACHT',strengthsHeading:'Technik, Breite und ein Angriff ohne schwachen Namen',
    strengths:['Extrem hohes Passniveau','Starke Flanken und gutes Kopfballspiel','Gefährliche Freistöße und Ecken','Kouamé: 13 Tore, 7 Vorlagen, Ø 7,38','Gül und Compagnucci jeweils Ø 7,35','Peterges als zentraler Kreativspieler mit 8 Vorlagen','Enorme Kaderbreite mit Galindrez als 14-Tore-Option','4-3-3 DM breit laut Scout klar produktiv'],
    vulnerabilitiesTitle:'WO FINN HARPS ANSETZEN KANN',vulnerabilitiesHeading:'Der Name ist größer als die aktuelle Unverwundbarkeit',
    vulnerabilities:['Nur Platz fünf in England','9 Niederlagen nach 31 Ligaspielen','37 Gegentore','Torwartreflexe laut Scout ein Schwachpunkt','Keeper bleiben bei Flanken eher auf der Linie','Abwürfe der Torhüter nicht optimal','4-4-2 in der Scoutprobe deutlich weniger produktiv','Finn Harps gewann die letzten beiden dokumentierten direkten Duelle'],
    keyDuelsTitle:'SCHLÜSSELDUELLE',keyDuelsHeading:'Wo dieses Viertelfinale kippen kann',
    keyDuels:[
      {title:'Harps-Zentrum gegen Peterges',text:'Peterges ist Citys Verbindung zwischen Kontrolle und letzter Aktion. Ihn von Kouamé und den Flügeln zu trennen ist wichtiger, als blind den Ballführenden zu jagen.'},
      {title:'Finn-Harps-Abwehr gegen Kouamé',text:'13 Tore und 7 Vorlagen zeigen, dass Kouamé nicht nur Vollstrecker ist. Er muss sowohl im Strafraum als auch beim Ablegen auf nachrückende Spieler kontrolliert werden.'},
      {title:'Papini und die Flügel gegen Citys inverse Außenverteidiger',text:'Blythe und Kondratjev rücken in ihrer Rollenstruktur gerne ein. Genau dadurch können außen Räume entstehen, wenn Finn Harps Umschaltmomente sauber und früh erkennt.'},
      {title:'Harps-Abschluss gegen Widdowson',text:'Der Scout nennt Reflexe als Angriffspunkt. Präzision und gute Abschlusspositionen sind deshalb wertvoller als ein reines Schussfeuerwerk aus schlechten Winkeln.'}
    ],
    verdictHeading:'Ein Gigant, aber kein Mythos',
    verdict:'Manchester City besitzt auf dem Papier den klar teureren und erfahreneren Kader. Trotzdem ist die Ausgangslage nicht die eines David-gegen-Goliath-Spiels. Finn Harps ist amtierender europäischer Spitzenklub, hat City zweimal in Folge geschlagen und bekommt einen Gegner, der in England bereits neunmal verloren hat. Die Aufgabe ist brutal, aber sie ist absolut spielbar. Entscheidend wird sein, City nicht auf seinem bevorzugten Terrain aus Flanken, Standards und technischer Kontrolle zu begegnen, sondern die eigenen Halbräume, flachen Kombinationen und Abschlussqualität durchzudrücken.',
    sources:[
      'FM-Scoutbericht Manchester City · 07.04.2042',
      'FM-Premier-League-Tabelle · 07.04.2042',
      'FM-Vereinsübersicht Manchester City · 07.04.2042',
      'FM-Mannschaftsexport Manchester City · 07.04.2042'
    ]
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-04-07-manchester-city-quarterfinal-preview',date,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · VIERTELFINALE · GEGNERCHECK',
    title:'€1,22-Mrd.-Gigant mit Rissen: Manchester City im Harps-Check',
    summary:'City ist nur Fünfter der Premier League und hat bereits neunmal verloren, bringt aber mit Kouamé, Gül, Peterges, Compagnucci und Galindrez eine Offensivbreite auf absolutem Weltklasseniveau mit.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','man-city','champions-league','season-2042']
  });
})();