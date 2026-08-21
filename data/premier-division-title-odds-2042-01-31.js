(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_SEASONS=window.FM_SEASONS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const odds=[
    {position:1,team:'Finn Harps',odds:1.05},
    {position:2,team:'Derry City',odds:26.00},
    {position:3,team:"St Patrick's Athletic",odds:34.00},
    {position:4,team:'Shamrock Rovers',odds:51.00},
    {position:5,team:'Waterford',odds:101.00},
    {position:6,team:'Bohemian',odds:151.00},
    {position:7,team:'Cork City',odds:151.00},
    {position:8,team:'Sligo Rovers',odds:151.00},
    {position:9,team:'Athlone Town',odds:251.00},
    {position:10,team:'UCD',odds:401.00}
  ];

  const season=window.FM_SEASONS.find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-01-31';
    season.latestHeadline='Premier Division: Wie in den Vorjahren startet Finn Harps mit einer Meisterschaftsquote von 1,05 als klarer Titelfavorit.';
    season.premierDivisionPreview={
      date:'2042-01-31',
      source:'WhoScored.com · FM-Nachricht',
      titleFavourite:'Finn Harps',
      titleOdds:1.05,
      relegationOdds:601.00,
      predictedOrder:odds,
      relegationFavourite:{team:'UCD',odds:1.44},
      note:'Die extreme Favoritenrolle ist für Finn Harps inzwischen eher Saisonroutine als neue Schlagzeile. Derry City wird mit 26,00 als erster Verfolger geführt.'
    };
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='31.01.2042: Buchmacher sehen Finn Harps erneut als überwältigenden Premier-Division-Favoriten. Meisterschaftsquote 1,05; Derry City folgt mit 26,00. Für die Harps ist diese Ausgangslage inzwischen jährliche Normalität.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  upsert(window.FM_NEWS,{
    id:'2042-01-31-premier-division-title-odds',
    date:'2042-01-31',
    season:2042,
    category:'Premier Division',
    accent:'green',
    featured:false,
    eyebrow:'SAISONVORSCHAU · PREMIER DIVISION',
    title:'Wie jedes Jahr: Finn Harps mit Quote 1,05 klarer Titelfavorit',
    summary:'Die Buchmacher sehen Finn Harps erneut in einer eigenen Gewichtsklasse. Auf die Harps gibt es nur 1,05 für den Titel, Derry City folgt bereits bei 26,00. Die extreme Favoritenrolle ist in Stranorlar längst eher Routine als Überraschung.',
    details:{
      odds,
      relegationOddsFinnHarps:601.00,
      relegationFavourite:{team:'UCD',odds:1.44}
    },
    href:'saison.html',
    entities:['finn-harps','derry-city','premier-division','season-2042']
  });
})();