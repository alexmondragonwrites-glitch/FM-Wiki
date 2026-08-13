(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const competition='Ligaphase der UEFA Champions League';
  const fixtures=[
    ['2041-09-10','20:00','Manchester United','Heim','',competition,0],
    ['2041-09-18','20:00','Celta Vigo','Heim','',competition,0],
    ['2041-10-23','20:00','Red Bull Salzburg','Auswärts','',competition,0],
    ['2041-11-05','20:00','Young Boys','Auswärts','',competition,0],
    ['2041-11-27','20:00','Barcelona','Auswärts','',competition,0],
    ['2041-12-11','20:00','Real Sociedad','Auswärts','',competition,0],
    ['2042-01-22','20:00','Anderlecht','Heim','',competition,0],
    ['2042-01-29','20:00','AEK','Heim','',competition,0]
  ];

  fixtures.forEach(item=>{
    const index=window.FM_FIXTURES.findIndex(entry=>Array.isArray(entry)&&entry[0]===item[0]&&entry[2]===item[2]&&entry[5]===item[5]);
    if(index>=0)window.FM_FIXTURES[index]=item;
    else window.FM_FIXTURES.push(item);
  });
  window.FM_FIXTURES.sort((a,b)=>{
    if(!Array.isArray(a)||!Array.isArray(b))return 0;
    return String(a[0]).localeCompare(String(b[0]))||String(a[1]).localeCompare(String(b[1]))||String(a[2]).localeCompare(String(b[2]));
  });

  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041||item.season===2041);
  if(season){
    season.status='Laufend';
    season.referenceDate='2041-08-28';
    season.snapshotDate='2041-08-28';
    season.headline='Acht europäische Prüfungen: Die Champions-League-Ligaphase 2041/42 steht';
    season.summary='Finn Harps startet zuhause gegen Manchester United und Celta Vigo in die Champions-League-Ligaphase 2041/42. Danach folgen vier Auswärtsspiele in Salzburg, Bern, Barcelona und San Sebastián, ehe Anderlecht und AEK im Januar nach Donegal kommen.';
    season.championsLeague2041_42={
      competition:'UEFA Champions League',
      stage:'Ligaphase',
      drawDate:'2041-08-28',
      favorite:'Napoli',
      format:{teams:36,directRoundOf16:'Plätze 1–8',playoffRound:'Plätze 9–24'},
      fixtures:[
        {date:'2041-09-10',time:'20:00',venue:'Heim',opponent:'Manchester United',country:'England',coefficientRank:7,pot:1},
        {date:'2041-09-18',time:'20:00',venue:'Heim',opponent:'Celta Vigo',country:'Spanien',coefficientRank:24,pot:2},
        {date:'2041-10-23',time:'20:00',venue:'Auswärts',opponent:'Red Bull Salzburg',country:'Österreich',coefficientRank:47,pot:4},
        {date:'2041-11-05',time:'20:00',venue:'Auswärts',opponent:'Young Boys',country:'Schweiz',coefficientRank:42,pot:3},
        {date:'2041-11-27',time:'20:00',venue:'Auswärts',opponent:'Barcelona',country:'Spanien',coefficientRank:5,pot:1},
        {date:'2041-12-11',time:'20:00',venue:'Auswärts',opponent:'Real Sociedad',country:'Spanien',coefficientRank:23,pot:2},
        {date:'2042-01-22',time:'20:00',venue:'Heim',opponent:'Anderlecht',country:'Belgien',coefficientRank:96,pot:4},
        {date:'2042-01-29',time:'20:00',venue:'Heim',opponent:'AEK',country:'Griechenland',coefficientRank:39,pot:3}
      ]
    };
    season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
    const note='28.08.2041: Champions-League-Ligaphase 2041/42 ausgelost. Finn Harps trifft auf Manchester United, Celta Vigo, Red Bull Salzburg, Young Boys, Barcelona, Real Sociedad, Anderlecht und AEK.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const news={
    id:'2041-08-28-champions-league-schedule',date:'2041-08-28',season:2041,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · LIGAPHASE 2041/42',
    title:'United zum Auftakt, Barcelona auswärts: Der europäische Fahrplan steht',
    summary:'Finn Harps beginnt die Ligaphase zuhause gegen Manchester United und Celta Vigo. Es folgen vier Auswärtsspiele am Stück gegen Salzburg, Young Boys, Barcelona und Real Sociedad, bevor Anderlecht und AEK im Januar nach Donegal kommen.',
    href:'spielplan-2041.html',
    entities:['finn-harps','season-2041','champions-league','manchester-united','celta-vigo','red-bull-salzburg','young-boys','barcelona','real-sociedad','anderlecht','aek']
  };
  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  const newsIndex=window.FM_NEWS.findIndex(item=>item.id===news.id);
  if(newsIndex>=0)window.FM_NEWS[newsIndex]=news;else window.FM_NEWS.push(news);
})();
