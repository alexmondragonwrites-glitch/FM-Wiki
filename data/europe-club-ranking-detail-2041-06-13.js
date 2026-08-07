(()=>{
  window.FM_UEFA_RANKINGS=window.FM_UEFA_RANKINGS||[];
  const ranking=window.FM_UEFA_RANKINGS.find(x=>x.id==='uefa-rankings-2041-06-13');
  if(!ranking)return;

  ranking.sourceTable={
    seasons:['36/37','37/38','38/39','39/40','40/41','41/42'],
    currentCoefficientSeason:'41/42',
    nextCoefficientSeason:'42/43'
  };

  ranking.finnHarpsCoefficient={
    position:1,
    nation:'IRL',
    seasons:{'36/37':30,'37/38':36,'38/39':26,'39/40':36,'40/41':32,'41/42':0},
    coefficient41_42:160,
    coefficient42_43:130,
    lead41_42:18,
    lead42_43:4,
    note:'Finn Harps führt die aktuelle Wertung mit 160,000 Punkten an. Nach dem Herausfallen der 30,00 Punkte aus 2036/37 läge der 42/43-Koeffizient bei 130,000 Punkten und damit weiterhin vor Manchester United mit 126,000.'
  };

  ranking.top25=[
    {position:1,club:'Finn Harps',nation:'IRL',coefficient41_42:160,coefficient42_43:130,seasons:[30,36,26,36,32,0]},
    {position:2,club:'Man City',nation:'ENG',coefficient41_42:142,coefficient42_43:106,seasons:[36,30,29,22,25,0]},
    {position:3,club:'Monaco',nation:'FRA',coefficient41_42:138,coefficient42_43:111,seasons:[27,32,24,22,33,0]},
    {position:4,club:'West Ham',nation:'ENG',coefficient41_42:137,coefficient42_43:108.5,seasons:[28.5,30,22,28,28.5,0]},
    {position:5,club:'Barcelona',nation:'ESP',coefficient41_42:135,coefficient42_43:103,seasons:[32,25,29,19,30,0]},
    {position:6,club:'Newcastle',nation:'ENG',coefficient41_42:129,coefficient42_43:102,seasons:[27,27,23,29,23,0]},
    {position:7,club:'Man Utd',nation:'ENG',coefficient41_42:126,coefficient42_43:126,seasons:[0,33,36,23,34,0]},
    {position:8,club:'Real Madrid',nation:'ESP',coefficient41_42:125,coefficient42_43:102,seasons:[23,26,23,23,30,0]},
    {position:9,club:'Bayern München',nation:'GER',coefficient41_42:123,coefficient42_43:94,seasons:[29,18,25,28,23,0]},
    {position:10,club:'Dortmund',nation:'GER',coefficient41_42:119,coefficient42_43:91,seasons:[28,29,20,21,21,0]},
    {position:11,club:'Inter',nation:'ITA',coefficient41_42:118,coefficient42_43:96,seasons:[22,22,33,19,22,0]},
    {position:12,club:'Wolves',nation:'ENG',coefficient41_42:118,coefficient42_43:86,seasons:[32,16,14.5,27.5,28,0]},
    {position:13,club:'RB Leipzig',nation:'GER',coefficient41_42:117,coefficient42_43:96,seasons:[21,21,29,25,21,0]},
    {position:14,club:'Marseille',nation:'FRA',coefficient41_42:114,coefficient42_43:88,seasons:[26,23,19,26,20,0]},
    {position:15,club:'Milan',nation:'ITA',coefficient41_42:108,coefficient42_43:83,seasons:[25,20,24,19,20,0]},
    {position:16,club:'Nice',nation:'FRA',coefficient41_42:106,coefficient42_43:86,seasons:[20,23,29,16,18,0]},
    {position:17,club:'Napoli',nation:'ITA',coefficient41_42:105,coefficient42_43:83,seasons:[22,9,30,25,19,0]},
    {position:18,club:'Tottenham',nation:'ENG',coefficient41_42:105,coefficient42_43:105,seasons:[0,34,29,25,17,0]},
    {position:19,club:'Arsenal',nation:'ENG',coefficient41_42:104,coefficient42_43:79,seasons:[25,0,29,29,21,0]},
    {position:20,club:'Wolfsburg',nation:'GER',coefficient41_42:104,coefficient42_43:82,seasons:[22,10,23,28,21,0]},
    {position:21,club:'Liverpool',nation:'ENG',coefficient41_42:102,coefficient42_43:77,seasons:[25,21,23,33,0,0]},
    {position:22,club:'Lazio',nation:'ITA',coefficient41_42:101,coefficient42_43:76.5,seasons:[24.5,12,18,30,16.5,0]},
    {position:23,club:'Real Sociedad',nation:'ESP',coefficient41_42:100.5,coefficient42_43:82.5,seasons:[18,17,17,21.5,27,0]},
    {position:24,club:'Celta Vigo',nation:'ESP',coefficient41_42:100,coefficient42_43:83,seasons:[17,27,14,22,20,0]},
    {position:25,club:'Paris Saint-Germain',nation:'FRA',coefficient41_42:100,coefficient42_43:78,seasons:[22,19,22,9,28,0]}
  ];

  ranking.irishClubs=[
    {position:1,club:'Finn Harps',coefficient41_42:160,coefficient42_43:130,seasons:[30,36,26,36,32,0]},
    {position:48,club:'Derry City',coefficient41_42:59.5,coefficient42_43:50,seasons:[9.5,9,21,10,10,0]},
    {position:85,club:"St Patrick's Athletic",coefficient41_42:33.5,coefficient42_43:31,seasons:[2.5,3,4.5,18,5.5,0]},
    {position:236,club:'Bohemian',coefficient41_42:11.54,coefficient42_43:9.74,seasons:[0,0,2,0,0,0]},
    {position:237,club:'Cork City',coefficient41_42:11.54,coefficient42_43:9.74,seasons:[2,0,0,0,0,0]},
    {position:238,club:'Drogheda United',coefficient41_42:11.54,coefficient42_43:9.74,seasons:[0,0,0,0,0,0]},
    {position:239,club:'Dundalk',coefficient41_42:11.54,coefficient42_43:9.74,seasons:[0,0,0,0,0,0]},
    {position:240,club:'Shamrock Rovers',coefficient41_42:11.54,coefficient42_43:9.74,seasons:[3.5,3.5,0,2,1.5,0]},
    {position:241,club:'Shelbourne',coefficient41_42:11.54,coefficient42_43:9.74,seasons:[0,0,0,0,0,0]},
    {position:242,club:'Sligo Rovers',coefficient41_42:11.54,coefficient42_43:9.74,seasons:[0,0,0,0,4,0]},
    {position:243,club:'UCD',coefficient41_42:11.54,coefficient42_43:9.74,seasons:[0,0,0,0,0,0]},
    {position:244,club:'Waterford',coefficient41_42:11.54,coefficient42_43:9.74,seasons:[0,2,3.5,4,0,0]}
  ];

  const report=(window.FM_PRESS_REPORTS||[]).find(x=>x.id==='2041-06-13-europaeische-ranglisten');
  if(report){
    const extra=[
      {title:'160 Punkte: Der Vorsprung ist gewaltig',text:'Die vollständige Vereinsrangliste zeigt die Dimension der Harps-Serie. Finn Harps steht bei 160,000 Punkten und damit 18 Punkte vor Manchester City auf Rang zwei. Dahinter folgen Monaco mit 138,000, West Ham mit 137,000 und Barcelona mit 135,000 Punkten.'},
      {title:'Auch nach dem nächsten Streichjahr bleibt Platz eins möglich',text:'Für den Koeffizienten 2042/43 fallen bei Finn Harps die 30,00 Punkte aus der Saison 2036/37 aus der Wertung. Der Klub würde dadurch zunächst auf 130,000 Punkte sinken. Manchester United liegt in dieser Vorschau bei 126,000 Punkten, sodass der Vorsprung nur noch vier Punkte beträgt. Die kommende Europapokalsaison bekommt damit auch im Koeffizientenrennen Gewicht.'},
      {title:'Derry und St Patrick’s bilden die zweite irische Linie',text:'Hinter Finn Harps ist Derry City als zweitbester irischer Klub auf Rang 48 mit 59,500 Punkten notiert. St Patrick’s Athletic folgt auf Rang 85 mit 33,500 Punkten. Danach klafft eine große Lücke: Die übrigen erfassten irischen Vereine liegen ab Rang 236.'}
    ];
    const extraTitles=new Set(extra.map(x=>x.title));
    report.sections=[...(report.sections||[]).filter(x=>!extraTitles.has(x.title)),...extra];
    report.sources=[...(report.sources||[]).filter(x=>!String(x).startsWith('Vollständige Vereinsrangliste:')),
      'Vollständige Vereinsrangliste: Finn Harps 160,000 vor Man City 142,000 und Monaco 138,000',
      'Koeffizient 2042/43: Finn Harps 130,000 vor Man Utd 126,000',
      'Irische Klubs: Finn Harps 1., Derry City 48., St Patrick’s Athletic 85.'
    ];
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season&&season.uefaRanking){
    season.uefaRanking.clubCoefficient=160;
    season.uefaRanking.nextCoefficient=130;
    season.uefaRanking.currentLead=18;
    season.uefaRanking.nextLead=4;
    season.uefaRanking.secondIrishClub='Derry City · Rang 48 · 59,500';
  }

  const harps=(window.FM_CLUBS||[]).find(x=>x.id==='finn-harps'||x.name==='Finn Harps');
  if(harps){
    harps.europeanRanking={...(harps.europeanRanking||{}),position:1,coefficient:160,nextCoefficient:130,currentLead:18,nextLead:4,updated:'2041-06-13'};
  }
})();