(()=>{
  const config={
    schemaVersion:2,
    referenceDate:'2041-08-21',
    currentSeason:2041,
    nextSeason:2042,
    updatedAt:'2041-08-21',
    locale:'de-DE',
    siteName:'Finn Harps FM Wiki',
    dataDates:Object.freeze({
      players:'2041-08-21',
      transfers:'2041-08-02',
      nationalTeam:'2041-08-04',
      clubs:'2041-07-07',
      matches:'2041-08-21',
      season:'2041-08-21',
      news:'2041-08-21',
      staff:'2041-06-17'
    }),
    navigation:[
      {id:'news',label:'News',href:'news.html'},
      {id:'squad',label:'Kader',href:'kader.html'},
      {id:'planning',label:'Planung',href:'kaderplanung.html'},
      {id:'archive',label:'Archiv',href:'kaderarchiv.html?year=2041'},
      {id:'players',label:'Spieler',href:'spieler.html?id=justin-ramsey'},
      {id:'ireland',label:'Nationalteam',href:'nationalteam.html'},
      {id:'season',label:'Saison',href:'saison.html'},
      {id:'matches',label:'Spiele',href:'spiele.html'},
      {id:'clubs',label:'Klubs',href:'klubs.html'},
      {id:'press',label:'Presse',href:'presse.html?id=2041-08-21-derry-city-fai-cup-spielbericht'},
      {id:'club',label:'Verein',href:'verein.html'},
      {id:'staff',label:'Mitarbeiter',href:'mitarbeiter.html'},
      {id:'docs',label:'Dokumentation',href:'dokumentation.html'}
    ],
    footerText:'Dynastie, Daten und Entscheidungen. Saison für Saison.'
  };
  window.FM_CONFIG=Object.freeze(config);
})();