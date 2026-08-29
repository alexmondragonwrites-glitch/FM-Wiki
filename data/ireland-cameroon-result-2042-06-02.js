(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_IRELAND=window.FM_IRELAND||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-02';
  const matchId='2042-06-02-ireland-cameroon-friendly';
  const reportId='2042-06-02-irland-kamerun-4-0-wm-test';

  const match={
    id:matchId,date,season:2042,competition:'Testländerspiel',
    home:'Irland',away:'Kamerun',homeScore:4,awayScore:0,score:'4:0',halfTime:'3:0',
    venue:'Universitätssportplatz',location:'Limerick, Irland',attendance:1000,weather:'Nieselregen · 20°C',referee:'Gabriel Ignea',
    context:'Erstes Testländerspiel vor der FIFA World Cup 2042. Die Partie findet nur zwei Tage nach dem Champions-League-Finale von Finn Harps gegen Manchester United statt.',
    events:[
      {minute:5,team:'Irland',type:'goal',player:"Harry O'Leary",text:'1:0 · Kopfball aus kurzer Distanz'},
      {minute:16,team:'Irland',type:'goal',player:'Robert Boylan',text:'2:0 · Abschluss aus kurzer Distanz'},
      {minute:25,team:'Kamerun',type:'yellow',player:'Isaac Nembot',text:'Gelbe Karte'},
      {minute:28,team:'Irland',type:'goal',player:"Harry O'Leary",text:'3:0 · Heber nach Ballgewinn'},
      {minute:46,team:'Kamerun',type:'yellow',player:'Stéphane Kanga',text:'Gelbe Karte'},
      {minute:48,team:'Irland',type:'yellow',player:'Callum Duggan',text:'Gelbe Karte'},
      {minute:54,team:'Irland',type:'goal',player:'Brendan Costello',text:'4:0 · Distanzschuss aus 25 Metern'},
      {minute:76,team:'Irland',type:'yellow',player:"Jim O'Neill",text:'Gelbe Karte'}
    ],
    scorers:[
      {team:'Irland',player:"Harry O'Leary",minutes:[5,28],goals:2},
      {team:'Irland',player:'Robert Boylan',minutes:[16],goals:1},
      {team:'Irland',player:'Brendan Costello',minutes:[54],goals:1}
    ],
    stats:{
      shots:[25,9],shotsOnTarget:[15,3],xg:[3.06,0.77],shotsOffTarget:[5,2],bigChances:[2,0],possession:[74,26],
      corners:[9,6],fouls:[9,23],yellowCards:[2,2],redCards:[0,0],completedPasses:['458/527','158/224'],
      passCompletion:[87,71],duelsWon:[75,58],headersWon:[48,47],averageRating:[7.34,6.39],intensiveSprints:[101,89]
    },
    ratings:{
      'Evan Reilly':7.4,'Callum Brennan':7.9,'Darcy Andrews':7.4,'Mareks Istrankins':7.0,'Colum Winnall':7.0,
      'Callum Duggan':7.0,'Ben Barry':6.8,"Jim O'Neill":7.2,'Robert Boylan':8.7,'Brendan McHugh':7.0,
      "Harry O'Leary":8.7,'Jonathan Douglas':6.8,'Brendan Costello':7.8,'Callum Mooney':6.8,'Callum Lawless':7.1,'Simon Neville':7.1
    },
    playerOfMatch:{player:'Robert Boylan',team:'Irland',rating:8.7,goals:1,assists:1,note:'Trifft zum 2:0 und beteiligt sich mit einer Vorlage an der klaren ersten Halbzeit.'},
    irelandStandouts:[
      {player:"Harry O'Leary",rating:8.7,goals:2,note:'Doppelpack in Minute 5 und 28; absolviert zugleich sein 50. Länderspiel.'},
      {player:'Callum Brennan',rating:7.9,assists:2,note:'Zwei Vorlagen und damit auffälligster Finn-Harps-Spieler im ersten WM-Test.'},
      {player:'Brendan Costello',rating:7.8,goals:1,note:'Kommt ins Spiel und setzt mit einem Distanzschuss in Minute 54 den Schlusspunkt.'}
    ],
    harpsUsage:{
      starters:['Evan Reilly','Callum Brennan','Mareks Istrankins','Ben Barry',"Jim O'Neill"],
      unused:['Giacomo Papini','Billy Walker','Kevin Kelly','Justin Ramsey',"Cormac O'Kane"],
      note:'Flannigan verteilt die Belastung nur zwei Tage nach dem Champions-League-Finale. Fünf Harps-Spieler beginnen, mehrere der großen Namen bleiben komplett draußen.'
    },
    milestones:[
      "Harry O'Leary absolviert sein 50. Länderspiel für Irland.",
      'Colum Winnall absolviert sein 25. Länderspiel für Irland.',
      'Irland gewinnt den ersten WM-Test vor dem Turnierstart am 12.06.2042 mit 4:0.'
    ],
    analysis:{
      fastStart:'Irland entscheidet den ersten WM-Test praktisch in den ersten 28 Minuten. O’Leary trifft nach fünf Minuten, Boylan nach 16 und O’Leary erneut nach 28 Minuten.',
      control:'74 Prozent Ballbesitz, 25:9 Schüsse, 15:3 Schüsse aufs Tor und 3,06:0,77 xG zeigen eine sehr klare irische Kontrolle.',
      pressing:'Flannigans Gegenpressing setzt sich gegen Kameruns direktes Konterspiel deutlich durch. Kamerun kommt trotz neun Abschlüssen nur dreimal aufs Tor und erzeugt keine Großchance.',
      rotation:'Der Zeitpunkt ist bemerkenswert: Nur zwei Tage nach dem Champions-League-Finale beginnt Flannigan bereits die WM-Vorbereitung. Ramsey, O’Kane, Papini, Walker und Kelly werden komplett geschont, während Brennan mit zwei Vorlagen sofort Wirkung zeigt.',
      worldCup:'Der Auftakt der Vorbereitung ist überzeugend, ohne dass die komplette erste Garnitur belastet werden muss. Bis zum WM-Start am 12. Juni bleiben zehn Tage.'
    },
    notes:[
      'Irland gewinnt das erste Testländerspiel vor der WM 2042 mit 4:0 gegen Kamerun.',
      'Harry O’Leary trifft in Minute 5 und 28, Robert Boylan in Minute 16 und Brendan Costello in Minute 54.',
      'Irland führt bereits zur Pause 3:0.',
      '25:9 Schüsse, 15:3 aufs Tor, 74 Prozent Ballbesitz und 3,06:0,77 xG.',
      'Callum Brennan liefert zwei Vorlagen und erhält die Note 7,9.',
      'Mehrere Finn-Harps-Stars werden nur zwei Tage nach dem Champions-League-Finale komplett geschont.'
    ],
    sources:['FM-Spielübersicht Irland – Kamerun · 02.06.2042','Irland-Spielerstatistiken · 02.06.2042','Irische Fußballzeitung Spielbericht · Irland 4:0 Kamerun']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_IRELAND_MATCHES,match);

  Object.assign(window.FM_IRELAND,{
    title:'Irland 2042',season:2042,updated:'02.06.2042',competition:'Nationalmannschaft',
    lastMatch:match,
    latestMatch:{date,opponent:'Kamerun',venue:'Universitätssportplatz · Limerick',result:'4:0',competition:'Testländerspiel'},
    latestHeadline:'Erster WM-Test bestanden: Irland schlägt Kamerun 4:0. O’Leary trifft doppelt, Brennan legt zweimal auf.',
    worldCupPreparation:{status:'Läuft',firstFriendly:{date,opponent:'Kamerun',result:'4:0'},worldCupStart:'12.06.2042'},
    nextFocus:{competition:'FIFA World Cup 2042',stage:'Gruppenphase',group:'K',opponents:['Brasilien','China','Südafrika'],start:'12.06.2042'}
  });

  [
    {id:'2042-06-02-callum-brennan-cameroon-two-assists',date,player:'Callum Brennan',type:'nationalteam',title:'Brennan mit zwei Vorlagen im ersten WM-Test',detail:'Bereitet beim 4:0 gegen Kamerun zwei Treffer vor und erhält die Note 7,9.'},
    {id:'2042-06-02-evan-reilly-cameroon-start',date,player:'Evan Reilly',type:'nationalteam',title:'Reilly hält im WM-Test die Null',detail:'Startet beim 4:0 gegen Kamerun im Tor und erhält die Note 7,4.'},
    {id:'2042-06-02-mareks-istrankins-cameroon-start',date,player:'Mareks Istrankins',type:'nationalteam',title:'Istrankins startet gegen Kamerun',detail:'Steht beim 4:0 im ersten WM-Test in der Startelf und erhält die Note 7,0.'},
    {id:'2042-06-02-ben-barry-cameroon-start',date,player:'Ben Barry',type:'nationalteam',title:'Barry startet im ersten WM-Test',detail:'Beginnt beim 4:0 gegen Kamerun und erhält die Note 6,8.'},
    {id:'2042-06-02-jim-oneill-cameroon-start',date,player:"Jim O'Neill",type:'nationalteam',title:'O’Neill im Zentrum beim 4:0',detail:'Startet gegen Kamerun, erhält die Note 7,2 und sieht in Minute 76 Gelb.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date,competition:'Testländerspiel',fixtureDate:'Montag, 02.06.2042',home:'Irland',away:'Kamerun',score:'4:0',location:'Universitätssportplatz · Limerick · 1.000 Zuschauer',
    headline:'Erster WM-Test sitzt: Irland schlägt Kamerun 4:0',
    subheadline:'Nur zwei Tage nach dem Champions-League-Finale beginnt Ryan Flannigan die WM-Vorbereitung mit einem klaren Sieg. O’Leary trifft doppelt, Boylan und Costello ergänzen; Callum Brennan liefert zwei Vorlagen.',
    label:'WM-VORBEREITUNG · IRLAND 4:0 KAMERUN · 2. JUNI 2042',
    heroStat:{label:'Erster WM-Test',value:'4:0',note:'25:9 Schüsse · 74 % Ballbesitz · 3,06:0,77 xG'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Der Schmerz von Athen ist kaum zwei Tage alt, da beginnt für Flannigan bereits das nächste Kapitel. Irland startet gegen Kamerun in die unmittelbare WM-Vorbereitung und macht früh klar, dass die Champions-League-Nacht keinen Kater hinterlassen soll: Nach 28 Minuten steht es 3:0.',
    sections:[
      {title:'28 Minuten reichen für die Entscheidung',text:'Harry O’Leary köpft Irland schon in der 5. Minute in Führung. Robert Boylan erhöht nach 16 Minuten, ehe O’Leary in der 28. Minute seinen Doppelpack komplettiert. Zur Pause führt Irland 3:0 und hat das Spiel vollständig unter Kontrolle.'},
      {title:'Costello setzt den Schlusspunkt',text:'Brendan Costello kommt ins Spiel und trifft in der 54. Minute mit einem Distanzschuss aus rund 25 Metern zum 4:0. Danach muss Irland nicht mehr forcieren.'},
      {title:'Die Zahlen sehen bereits WM-reif aus',text:'Irland kommt auf 74 Prozent Ballbesitz, 25:9 Schüsse, 15:3 Abschlüsse aufs Tor und 3,06:0,77 xG. Kamerun erspielt sich keine einzige Großchance. Flannigans Gegenpressing gewinnt den philosophischen Vergleich gegen das direkte Konterspiel deutlich.'},
      {title:'Brennan nutzt seine Chance',text:'Callum Brennan liefert zwei Vorlagen und erhält mit 7,9 die beste Note eines Finn-Harps-Spielers. Evan Reilly hält die Null und kommt auf 7,4; Jim O’Neill erhält 7,2, Mareks Istrankins 7,0 und Ben Barry 6,8.'},
      {title:'Belastung nach Athen bewusst verteilt',text:'Das Timing ist außergewöhnlich: Das Testspiel findet nur zwei Tage nach dem Champions-League-Finale statt. Flannigan lässt mit Justin Ramsey, Cormac O’Kane, Giacomo Papini, Billy Walker und Kevin Kelly mehrere Harps-Stars komplett draußen. Trotzdem dominiert Irland klar.'},
      {title:'O’Leary erreicht die 50',text:'Für Harry O’Leary wird der Doppelpack zum Jubiläum: Der erfahrene Stürmer absolviert sein 50. Länderspiel für Irland. Colum Winnall erreicht gleichzeitig die Marke von 25 Länderspielen.'}
    ],
    verdictHeading:'Ein Auftakt ohne unnötige Nebengeräusche',
    verdict:'Ein 4:0 im ersten WM-Test ist vor allem deshalb wertvoll, weil Irland es ohne Vollbelastung der Finn-Harps-Achse erreicht. Die Mannschaft ist früh scharf, kontrolliert den Ball und lässt kaum Gefahr zu. Zehn Tage vor dem WM-Start ist das ein sehr sauberes erstes Signal.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-02-ireland-cameroon-4-0',date,season:2042,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'WM-VORBEREITUNG · IRLAND 4:0 KAMERUN',
    title:'Erster WM-Test sitzt: Irland zerlegt Kamerun früh',
    summary:'O’Learys Doppelpack und Boylans Treffer machen nach 28 Minuten praktisch alles klar. Costello setzt den Schlusspunkt; Brennan liefert beim 4:0 zwei Vorlagen.',
    href:`presse.html?id=${reportId}`,
    entities:['ireland','cameroon','callum-brennan','evan-reilly','mareks-istrankins','ben-barry','jim-oneill','world-cup-2042']
  });
})();