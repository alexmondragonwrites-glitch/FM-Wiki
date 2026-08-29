(()=>{
  const config={
    schemaVersion:2,
    referenceDate:'2042-05-31',
    currentSeason:2042,
    nextSeason:2043,
    updatedAt:'2042-05-31',
    locale:'de-DE',
    siteName:'Finn Harps FM Wiki',
    dataDates:Object.freeze({
      players:'2042-05-31',
      transfers:'2042-02-22',
      nationalTeam:'2042-05-31',
      clubs:'2042-05-31',
      matches:'2042-05-31',
      season:'2042-05-31',
      news:'2042-05-31',
      staff:'2041-06-17'
    }),
    navigation:[
      {id:'news',label:'News',href:'news.html'},
      {id:'squad',label:'Kader',href:'kader.html'},
      {id:'planning',label:'Planung',href:'kaderplanung.html'},
      {id:'archive',label:'Archiv',href:'kaderarchiv.html?year=2041'},
      {id:'players',label:'Spieler',href:'spieler.html?id=pol-munoz'},
      {id:'ireland',label:'Nationalteam',href:'nationalteam.html'},
      {id:'season',label:'Saison',href:'saison.html'},
      {id:'matches',label:'Spiele',href:'spiele.html'},
      {id:'clubs',label:'Klubs',href:'klubs.html'},
      {id:'press',label:'Presse',href:'presse.html?id=2042-05-31-champions-league-final-man-utd-finn-harps-1-0'},
      {id:'club',label:'Verein',href:'verein.html'},
      {id:'staff',label:'Mitarbeiter',href:'mitarbeiter.html'},
      {id:'docs',label:'Dokumentation',href:'dokumentation.html'}
    ],
    footerText:'Dynastie, Daten und Entscheidungen. Saison für Saison.'
  };
  window.FM_CONFIG=Object.freeze(config);
})();