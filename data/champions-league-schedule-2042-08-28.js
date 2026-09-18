(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const competition='Ligaphase der UEFA Champions League';
  const fixtures=[
    ['2042-09-09','20:00','Inter','Heim','',competition,0],
    ['2042-09-16','20:00','Benfica','Heim','',competition,0],
    ['2042-10-22','20:00','Kortrijk','Auswärts','',competition,0],
    ['2042-11-04','20:00','AEK','Auswärts','',competition,0],
    ['2042-11-26','20:00','Tottenham','Auswärts','',competition,0],
    ['2042-12-09','20:00','Villarreal','Auswärts','',competition,0],
    ['2043-01-21','20:00','Grenoble Foot 38','Heim','',competition,0],
    ['2043-01-28','20:00','Atlético de Madrid','Heim','',competition,0]
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

  const season=(window.FM_SEASONS||[]).find(item=>item.year===2042||item.season===2042);
  if(season){
    season.status='Laufend';
    season.referenceDate='2042-08-28';
    season.snapshotDate='2042-08-28';
    season.headline='Inter zum Auftakt, Atlético zum Abschluss: Die Champions-League-Ligaphase 2042/43 steht';
    season.summary='Finn Harps startet zuhause gegen Inter und Benfica in die Champions-League-Ligaphase 2042/43. Es folgen vier Auswärtsspiele bei Kortrijk, AEK, Tottenham und Villarreal, ehe Grenoble Foot 38 und Atlético de Madrid im Januar nach Donegal kommen.';
    season.championsLeague2042_43={
      competition:'UEFA Champions League',
      stage:'Ligaphase',
      drawDate:'2042-08-28',
      favorite:'Napoli',
      format:{teams:36,directRoundOf16:'Plätze 1–8',playoffRound:'Plätze 9–24'},
      drawAssessment:'Laut Spielmeldung ein etwas leichterer Spielplan; besonders Kortrijk, AEK und Grenoble Foot 38 werden als günstigere Gegner hervorgehoben.',
      fixtures:[
        {date:'2042-09-09',time:'20:00',venue:'Heim',opponent:'Inter',country:'Italien',coefficientRank:9,pot:1},
        {date:'2042-09-16',time:'20:00',venue:'Heim',opponent:'Benfica',country:'Portugal',coefficientRank:22,pot:2},
        {date:'2042-10-22',time:'20:00',venue:'Auswärts',opponent:'Kortrijk',country:'Belgien',coefficientRank:73,pot:4},
        {date:'2042-11-04',time:'20:00',venue:'Auswärts',opponent:'AEK',country:'Griechenland',coefficientRank:46,pot:3},
        {date:'2042-11-26',time:'20:00',venue:'Auswärts',opponent:'Tottenham',country:'England',coefficientRank:6,pot:1},
        {date:'2042-12-09',time:'20:00',venue:'Auswärts',opponent:'Villarreal',country:'Spanien',coefficientRank:23,pot:2},
        {date:'2043-01-21',time:'20:00',venue:'Heim',opponent:'Grenoble Foot 38',country:'Frankreich',coefficientRank:71,pot:4},
        {date:'2043-01-28',time:'20:00',venue:'Heim',opponent:'Atlético de Madrid',country:'Spanien',coefficientRank:30,pot:3}
      ],
      confirmedParticipantsFromSchedule:[
        {club:'Finn Harps',country:'Irland',role:'Teilnehmer'},
        {club:'Inter',country:'Italien',pot:1,coefficientRank:9},
        {club:'Tottenham',country:'England',pot:1,coefficientRank:6},
        {club:'Benfica',country:'Portugal',pot:2,coefficientRank:22},
        {club:'Villarreal',country:'Spanien',pot:2,coefficientRank:23},
        {club:'AEK',country:'Griechenland',pot:3,coefficientRank:46},
        {club:'Atlético de Madrid',country:'Spanien',pot:3,coefficientRank:30},
        {club:'Kortrijk',country:'Belgien',pot:4,coefficientRank:73},
        {club:'Grenoble Foot 38',country:'Frankreich',pot:4,coefficientRank:71}
      ],
      participantsNote:'Der bereitgestellte Spielplan bestätigt Finn Harps und die acht zugelosten Gegner als Teilnehmer. Das vollständige 36er-Teilnehmerfeld ist in dieser Quelle nicht sichtbar.'
    };
    season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='28.08.2042: Champions-League-Ligaphase 2042/43 ausgelost. Finn Harps trifft auf Inter, Benfica, Kortrijk, AEK, Tottenham, Villarreal, Grenoble Foot 38 und Atlético de Madrid.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const news={
    id:'2042-08-28-champions-league-schedule',date:'2042-08-28',season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · LIGAPHASE 2042/43',
    title:'Inter eröffnet, Atlético beschließt: Der europäische Fahrplan steht',
    summary:'Finn Harps beginnt zuhause gegen Inter und Benfica. Danach folgen vier Auswärtsspiele bei Kortrijk, AEK, Tottenham und Villarreal, bevor Grenoble Foot 38 und Atlético de Madrid im Januar nach Donegal kommen.',
    href:'saison.html',
    entities:['finn-harps','season-2042','champions-league','inter','benfica','kortrijk','aek','tottenham','villarreal','grenoble-foot-38','atletico-madrid']
  };
  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  const newsIndex=window.FM_NEWS.findIndex(item=>item.id===news.id);
  if(newsIndex>=0)window.FM_NEWS[newsIndex]=news;else window.FM_NEWS.push(news);
})();