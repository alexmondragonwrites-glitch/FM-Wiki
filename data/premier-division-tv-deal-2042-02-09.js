(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_LEAGUE_ECONOMICS=window.FM_LEAGUE_ECONOMICS||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const reportId='2042-02-09-premier-division-tv-deal';

  window.FM_LEAGUE_ECONOMICS.premierDivision2042={
    ...(window.FM_LEAGUE_ECONOMICS.premierDivision2042||{}),
    tvDeal:{
      announced:'2042-02-09',
      durationYears:5,
      displayedDealValue:'€3,8 Mio.',
      previousSeasonTotal:'€3,59 Mio.',
      currentSeasonTotal:'€3,82 Mio.',
      annualIncreasePercent:6,
      relegatedClubCompensation:'steigt ebenfalls',
      assessment:'Positiver Schritt, aber im Verhältnis zum sportlichen Niveau und zur europäischen Entwicklung der irischen Spitzenklubs weiterhin ein sehr kleines nationales Medienerlösfundament.'
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-02-09';
    season.latestHeadline='Premier Division: Neuer Fünfjahres-TV-Vertrag bringt 6 % mehr Geld. Die Gesamtsumme steigt von 3,59 auf 3,82 Mio. Euro, bleibt aber auf niedrigem Niveau.';
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='09.02.2042: Die Premier Division schließt einen neuen TV-Vertrag über fünf Jahre. Laut FM steigt die Gesamtsumme pro Saison um 6 % von 3,59 auf 3,82 Mio. Euro; auch die Ausgleichszahlungen für abgestiegene Vereine werden erhöht.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,
    type:'Liga-Wirtschaft',
    date:'2042-02-09',
    competition:'SSE Airtricity League Premier Division',
    headline:'Sechs Prozent mehr, aber weiter Kleingeld: Neuer TV-Vertrag für die Premier Division',
    subheadline:'Die Liga schließt einen neuen Fünfjahresvertrag ab. Der Geldtopf steigt von 3,59 auf 3,82 Mio. Euro pro Saison. Das ist Wachstum, aber noch kein finanzieller Durchbruch für eine Liga, deren Spitze längst auf europäischem Niveau spielt.',
    label:'LIGA-WIRTSCHAFT · TV-VERTRAG · 2042',
    home:'PREMIER DIVISION',
    fixtureDate:'5 JAHRE · +6 %',
    away:'€3,82 MIO.',
    location:'Irland · Premier Division',
    heroStat:{label:'TV-/Preisgeldtopf',value:'€3,82 Mio.',note:'Vorjahr: €3,59 Mio. · +6 %'},
    backlink:{href:'saison.html',label:'← ZUR SAISON 2042'},
    intro:'Die Premier Division meldet einen neuen fünfjährigen TV-Vertrag. Laut FM steigt die Gesamtsumme gegenüber der Vorsaison um sechs Prozent von 3,59 auf 3,82 Mio. Euro. Auch die Ausgleichszahlungen für abgestiegene Vereine werden angehoben. Für die Liga ist das ein positives Signal. Gemessen an der sportlichen Entwicklung von Finn Harps und der wachsenden europäischen Präsenz irischer Klubs bleibt die nationale Medienbasis allerdings auffallend klein.',
    sections:[
      {title:'Wachstum ist Wachstum',text:'Ein Plus von sechs Prozent ist besser als Stillstand. Der neue Vertrag schafft für fünf Jahre Planungssicherheit und hebt den Geldtopf leicht an. Gerade für kleinere Klubs kann selbst ein moderater Anstieg relevant sein.'},
      {title:'Der Abstand zwischen Sport und Vermarktung bleibt riesig',text:'Das Problem liegt weniger in der Richtung als in der Größenordnung. Finn Harps bewegt sich sportlich seit Jahren auf Champions-League-Niveau, Derry City erreicht ebenfalls regelmäßig europäische Wettbewerbe. Die heimische Liga monetarisiert diese Entwicklung bislang aber nur sehr begrenzt.'},
      {title:'Für Finn Harps ist Europa weiter die eigentliche Geldmaschine',text:'Die nationale TV-Entwicklung verändert die Finanzarchitektur der Harps kaum. Champions-League-Einnahmen, Transfers, Sponsoring und die eigene sportliche Marke bleiben um ein Vielfaches wichtiger als der heimische Medienvertrag.'},
      {title:'Für die Liga insgesamt trotzdem wichtig',text:'Gerade weil Finn Harps dem nationalen Markt finanziell entwachsen ist, zählt der Effekt auf die übrigen Klubs. Mehr verlässliche Einnahmen können Kader, Infrastruktur und Professionalisierung breiter stabilisieren. Das wäre langfristig wichtiger als ein paar zusätzliche Millionen für den Serienmeister allein.'}
    ],
    strengthsTitle:'POSITIV',
    strengthsHeading:'Was sich verbessert',
    strengths:[
      'Fünf Jahre Laufzeit geben der Liga Planungssicherheit.',
      'Die Gesamtsumme steigt laut FM von 3,59 auf 3,82 Mio. Euro pro Saison.',
      'Das entspricht einem Anstieg von 6 Prozent.',
      'Auch die Ausgleichszahlungen für abgestiegene Vereine steigen.'
    ],
    vulnerabilitiesTitle:'ABER',
    vulnerabilitiesHeading:'Warum es trotzdem wenig bleibt',
    vulnerabilities:[
      'Die absolute Summe ist für eine Liga mit regelmäßiger Champions-League-Präsenz weiterhin sehr klein.',
      'Finn Harps finanziert seinen europäischen Spitzenkader praktisch nicht über nationale Medienerlöse.',
      'Die wirtschaftliche Entwicklung der Liga hält mit der sportlichen Entwicklung an der Spitze noch nicht Schritt.'
    ],
    verdictHeading:'Ein Schritt nach vorn, kein Durchbruch',
    verdict:'Der neue Vertrag ist grundsätzlich gute Nachricht. Sechs Prozent Wachstum und fünf Jahre Sicherheit sind nicht nichts. Aber die Premier Division bleibt wirtschaftlich ein Zwerg neben dem europäischen Profil, das Finn Harps inzwischen aufgebaut hat. Für die nächste Entwicklungsstufe des irischen Fußballs braucht es irgendwann nicht nur bessere Ergebnisse, sondern eine deutlich stärkere Vermarktung der Liga selbst.',
    sourcesHeading:'Faktenbasis',
    sourcesNote:'Die Vertragslaufzeit, die angezeigten Summen, der prozentuale Anstieg und die höheren Ausgleichszahlungen basieren auf der FM-Mitteilung zum neuen TV-Vertrag. Die wirtschaftliche Einordnung ist redaktionelle Save-Analyse.',
    sources:[
      'FM24 · Premier Division: TV-Gelder steigen · Februar 2042',
      'Gesamtsumme Vorsaison: €3,59 Mio.',
      'Gesamtsumme aktuelle Saison: €3,82 Mio.',
      'Anpassung: +6 % · Vertragslaufzeit: 5 Jahre'
    ]
  };

  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:reportId,
    date:'2042-02-09',
    season:2042,
    category:'Liga',
    accent:'green',
    featured:false,
    eyebrow:'PREMIER DIVISION · TV-VERTRAG',
    title:'TV-Gelder steigen um 6 Prozent – bleiben aber überschaubar',
    summary:'Neuer Fünfjahresvertrag für die Premier Division: Der angezeigte Geldtopf steigt von 3,59 auf 3,82 Mio. Euro pro Saison. Ein Fortschritt, aber weiterhin weit entfernt von der wirtschaftlichen Dimension, die Finn Harps inzwischen in Europa erreicht.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','premier-division','season-2042']
  });
})();