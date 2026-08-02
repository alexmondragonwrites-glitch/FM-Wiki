(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const match={
    id:'2041-05-04-waterford',date:'2041-05-04',season:2041,competition:'SSE Airtricity League Premier Division',round:'Ligaspiel',
    home:'Waterford',away:'Finn Harps',score:'0:2',venue:'Regional Sports Centre',attendance:4808,
    scorers:['Justin Ramsey 39.','Giacomo Papini 72.'],
    incidents:['Billy Kendrick verletzt 34.','Mareks Istrankins Gelb 50.','Jake Roberts Gelb 85.'],
    stats:{shots:'6:10',shotsOnTarget:'1:4',xG:'0,50:1,57',possession:'31:69',passesCompleted:'241:535',passCompletion:'79:89',corners:'2:6',fouls:'17:13'},
    summary:'Finn Harps reagiert auf die Champions-League-Niederlage mit einem kontrollierten 2:0-Auswärtssieg. Ramsey bringt den Tabellenführer vor der Pause in Führung, Papini entscheidet die Partie nach 72 Minuten.',
    standout:['Paulo Henrique 7,5','Billy Walker 7,5','Darcy Andrews 7,4','Jake Roberts 7,3','Giacomo Papini 7,3']
  };
  const mi=window.FM_MATCHES.findIndex(x=>x.id===match.id);if(mi>=0)window.FM_MATCHES[mi]=match;else window.FM_MATCHES.push(match);
  const fi=window.FM_FIXTURES.findIndex(x=>x.id===match.id);if(fi>=0)window.FM_FIXTURES[fi]=match;else window.FM_FIXTURES.push(match);

  const report={
    id:'2041-05-04-waterford-spielbericht',type:'Spielbericht',date:'2041-05-04',competition:'SSE Airtricity League Premier Division',
    home:'Waterford',away:'Finn Harps',score:'0:2',location:'Regional Sports Centre · Waterford',
    headline:'Finn Harps bleibt nach Europa-Rückschlag in der Liga eiskalt',
    subheadline:'Ramsey und Papini sichern einen kontrollierten 2:0-Auswärtssieg. 69 Prozent Ballbesitz und nur ein zugelassener Schuss aufs Tor unterstreichen die nationale Stabilität.',
    label:'PREMIER DIVISION · AUSWÄRTSSIEG',
    heroStat:{label:'Ballbesitz',value:'69 %',note:'535 angekommene Pässe'},
    intro:'Drei Tage nach dem 1:2 gegen Manchester United zeigte Finn Harps keinerlei Nachwirkung. Waterford wurde über weite Strecken vom Ball getrennt, während der Titelverteidiger geduldig auf die entscheidenden Lücken wartete.',
    sections:[
      {title:'Ramsey setzt das erste Zeichen',text:'Nach einer kontrollierten Anfangsphase erzielte Justin Ramsey in der 39. Minute die Führung. Der Treffer gab dem Spiel die erwartete Richtung, ohne dass Finn Harps dafür ins Risiko gehen musste.'},
      {title:'Papini macht den Deckel drauf',text:'In der 72. Minute erhöhte Giacomo Papini auf 2:0. Waterford kam danach nicht mehr ernsthaft zurück und blieb insgesamt bei nur einem Schuss auf das Tor von Paulo Henrique.'},
      {title:'Die Liga bleibt das Ruhebecken',text:'Trotz des europäischen Rückschlags wirkte die Mannschaft weder nervös noch müde. 69 Prozent Ballbesitz, 535 angekommene Pässe und ein xG-Vorteil von 1,57 zu 0,50 zeigen ein kontrolliertes Auswärtsspiel.'},
      {title:'Kendricks Verletzung ist der Schatten',text:'Billy Kendrick musste bereits in der 34. Minute verletzt ausgewechselt werden. Sportlich blieb Finn Harps stabil, doch mit Blick auf das Rückspiel in Manchester ist jede zusätzliche Ausfallgefahr unangenehm.'}
    ],
    strengthsTitle:'WAS DEN SIEG TRUG',strengthsHeading:'Geduld, Kontrolle und defensive Sauberkeit',
    strengths:['Ramsey trifft erneut in einem wichtigen Moment','Papini entscheidet das Spiel aus dem Mittelfeld','Nur ein gegnerischer Schuss aufs Tor','69 Prozent Ballbesitz','535 angekommene Pässe','Paulo Henrique mit einer weiteren weißen Weste'],
    vulnerabilitiesTitle:'KLEINE WARNLICHTER',vulnerabilitiesHeading:'Verletzung und nicht ganz maximale Effizienz',
    vulnerabilities:['Billy Kendrick musste verletzt vom Feld','Nur vier von zehn Abschlüssen gingen aufs Tor','Waterford kam trotz Unterlegenheit auf 0,50 xG','Roberts und Istrankins sahen Gelb'],
    verdictHeading:'Genau die richtige Antwort vor Old Trafford',
    verdict:'Finn Harps musste nach der Niederlage gegen Manchester United nicht glänzen, sondern Stabilität zeigen. Genau das gelang. Die Mannschaft kontrollierte Waterford, ließ kaum etwas zu und gewann ohne unnötigen Kraftverschleiß. National bleibt sie damit im Eisschrank-Modus: kühl, sauber, zuverlässig.',
    sourcesHeading:'Spieldaten vom 4. Mai 2041',
    sources:['FM-Spielbericht Waterford gegen Finn Harps','FM-Spielerstatistiken Finn Harps']
  };
  const ri=window.FM_PRESS_REPORTS.findIndex(x=>x.id===report.id);if(ri>=0)window.FM_PRESS_REPORTS[ri]=report;else window.FM_PRESS_REPORTS.push(report);

  const news={id:'2041-05-04-waterford',date:'2041-05-04',season:2041,category:'Premier Division',accent:'blue',eyebrow:'AUSWÄRTSSIEG · WATERFORD',title:'Finn Harps bleibt in der Liga cool',summary:'Ramsey und Papini treffen beim kontrollierten 2:0 in Waterford. Nach dem europäischen Rückschlag antwortet der Tabellenführer mit 69 Prozent Ballbesitz und einer weiteren weißen Weste.',href:'presse.html?id=2041-05-04-waterford-spielbericht',entities:['finn-harps','waterford','season-2041'],featured:true};
  const ni=window.FM_NEWS.findIndex(x=>x.id===news.id);if(ni>=0)window.FM_NEWS[ni]=news;else window.FM_NEWS.push(news);
})();