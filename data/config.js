(()=>{
  const config={
    schemaVersion:2,
    referenceDate:'2041-04-22',
    currentSeason:2040,
    nextSeason:2041,
    updatedAt:'2041-04-22',
    locale:'de-DE',
    siteName:'Finn Harps FM Wiki',
    dataDates:Object.freeze({
      players:'2041-04-22',
      transfers:'2041-02-16',
      nationalTeam:'2041-04-01',
      clubs:'2041-04-22',
      matches:'2041-04-22',
      season:'2041-04-22',
      news:'2041-04-22',
      staff:'2040-11-02'
    }),
    navigation:[
      {id:'news',label:'News',href:'news.html'},
      {id:'squad',label:'Kader',href:'kader.html'},
      {id:'planning',label:'Planung',href:'kaderplanung.html'},
      {id:'archive',label:'Archiv',href:'kaderarchiv.html?year=2041'},
      {id:'players',label:'Spieler',href:'spieler.html?id=daryl-frame'},
      {id:'ireland',label:'Nationalteam',href:'nationalteam.html'},
      {id:'season',label:'Saison',href:'saison.html'},
      {id:'matches',label:'Spiele',href:'spiele.html'},
      {id:'clubs',label:'Klubs',href:'klubs.html'},
      {id:'press',label:'Presse',href:'presse.html?id=2041-04-22-derry-spielbericht'},
      {id:'club',label:'Verein',href:'verein.html'},
      {id:'staff',label:'Mitarbeiter',href:'mitarbeiter.html'},
      {id:'docs',label:'Dokumentation',href:'dokumentation.html'}
    ],
    footerText:'Dynastie, Daten und Entscheidungen. Saison für Saison.'
  };
  window.FM_CONFIG=Object.freeze(config);
  document.addEventListener('DOMContentLoaded',()=>{
    const latestFiles=['data/cork-result-2041-04-19.js','data/derry-result-2041-04-22.js'];
    latestFiles.forEach(path=>{
      const flag='__FM_'+path.replace(/\W/g,'_').toUpperCase()+'_LOADED__';
      if(window[flag])return;
      try{
        const request=new XMLHttpRequest();
        request.open('GET',path,false);
        request.send(null);
        if(request.status===200||request.status===0){
          window[flag]=true;
          (0,eval)(request.responseText);
        }
      }catch(error){console.warn('Latest result data could not be loaded',path,error);}
    });
  });
})();