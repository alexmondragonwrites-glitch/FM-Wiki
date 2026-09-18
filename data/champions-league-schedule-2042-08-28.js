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
      participants:[
        {seed:1,club:'Finn Harps'},
        {seed:2,club:'Manchester United'},
        {seed:3,club:'Monaco'},
        {seed:4,club:'Barcelona'},
        {seed:5,club:'Tottenham'},
        {seed:6,club:'West Ham'},
        {seed:7,club:'Manchester City'},
        {seed:8,club:'Inter'},
        {seed:9,club:'Real Madrid'},
        {seed:10,club:'Borussia Dortmund'},
        {seed:11,club:'Wolfsburg'},
        {seed:12,club:'Liverpool'},
        {seed:13,club:'Napoli'},
        {seed:14,club:'Milan'},
        {seed:15,club:'Benfica'},
        {seed:16,club:'Villarreal'},
        {seed:17,club:'Roma'},
        {seed:18,club:'Atlético de Madrid'},
        {seed:19,club:'Bayer Leverkusen'},
        {seed:20,club:'Caen'},
        {seed:21,club:'Sporting CP'},
        {seed:22,club:'Young Boys'},
        {seed:23,club:'Cagliari'},
        {seed:24,club:'Galatasaray SK'},
        {seed:25,club:'Celtic'},
        {seed:26,club:'AEK'},
        {seed:27,club:'PSV Eindhoven'},
        {seed:28,club:'Eintracht Frankfurt'},
        {seed:29,club:'Grenoble Foot 38'},
        {seed:30,club:'Kortrijk'},
        {seed:31,club:'Crvena zvezda'},
        {seed:32,club:'Paris Saint-Germain'},
        {seed:33,club:"St Patrick's Athletic"},
        {seed:34,club:'Red Bull Salzburg'},
        {seed:35,club:'Bodø/Glimt'},
        {seed:36,club:'Dynamo Kyiv'}
      ],
      participantsNote:'Das vollständige 36er-Teilnehmerfeld der Champions-League-Ligaphase 2042/43 ist bestätigt. Neben Finn Harps hat sich mit St Patrick’s Athletic ein zweiter irischer Klub qualifiziert.'
    };
    season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='28.08.2042: Champions-League-Ligaphase 2042/43 ausgelost. Finn Harps trifft auf Inter, Benfica, Kortrijk, AEK, Tottenham, Villarreal, Grenoble Foot 38 und Atlético de Madrid. Das vollständige Feld umfasst 36 Vereine; St Patrick’s Athletic ist als zweiter irischer Klub ebenfalls qualifiziert.';
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