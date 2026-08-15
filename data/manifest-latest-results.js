(()=>{
  const manifest=window.FM_DATA_MANIFEST;
  if(!manifest)return;
  const files=[
    'data/manchester-united-result-2041-05-01.js',
    'data/waterford-result-2041-05-04.js',
    'data/manchester-united-result-2041-05-07.js',
    'data/ryan-flannigan-pressconference-2041-05-07.js',
    'data/athlone-town-result-2041-05-10.js',
    'data/shelbourne-result-2041-05-17.js',
    'data/transfer-rumours-2041-05-18.js',
    'data/vinicius-celta-cwc-draw-2041-05-18.js',
    'data/pol-munoz-transfer-confirmed-2041-05-20.js',
    'data/st-patricks-result-2041-05-24.js',
    'data/derry-city-result-2041-05-31.js',
    'data/champions-league-final-awards-2041-06-01.js',
    'data/sligo-rovers-result-2041-06-03.js',
    'data/club-world-cup-man-city-result-2041-06-13.js',
    'data/europe-rankings-2041-06-13.js',
    'data/europe-club-ranking-detail-2041-06-13.js',
    'data/club-world-cup-charlotte-result-2041-06-17.js',
    'data/emerson-escarcega-transfer-confirmed-2041-06-20.js',
    'data/club-world-cup-boca-result-2041-06-21.js',
    'data/club-world-cup-round-of-16-draw-2041-06-21.js',
    'data/club-world-cup-bayern-preview-2041-06-21.js',
    'data/club-world-cup-round-of-16-first-results-2041-06-24.js',
    'data/club-world-cup-bayern-result-2041-06-25.js',
    'data/club-world-cup-barcelona-quarterfinal-preview-2041-06-25.js',
    'data/club-world-cup-barcelona-result-2041-06-29.js',
    'data/club-world-cup-caen-semifinal-preview-2041-06-29.js',
    'data/club-world-cup-milan-semifinal-result-2041-07-02.js',
    'data/club-world-cup-caen-semifinal-result-2041-07-03.js',
    'data/club-world-cup-third-place-sao-paulo-result-2041-07-06.js',
    'data/club-world-cup-final-milan-result-2041-07-07.js',
    'data/player-emerson-escarcega-gold-cup-2041-07-10.js',
    'data/bohemian-result-2041-07-12.js',
    'data/player-giacomo-papini-ireland-switch-2041-07-14.js',
    'data/shamrock-rovers-result-2041-07-15.js',
    'data/athenry-fai-cup-result-2041-07-18.js',
    'data/cork-city-result-2041-07-22.js',
    'data/athlone-town-result-2041-07-26.js',
    'data/player-emerson-escarcega-gold-cup-semifinal-2041-07-26.js',
    'data/robert-boylan-retrospective-2041-07-29.js',
    'data/waterford-result-2041-07-29.js',
    'data/transfer-window-closed-2041-08-01.js',
    'data/mitch-franke-sell-on-2041-08-02.js',
    'data/shelbourne-result-2041-08-02.js',
    'data/player-emerson-escarcega-gold-cup-champion-2041-08-04.js',
    'data/st-patricks-result-2041-08-09.js',
    'data/derry-city-fai-cup-result-2041-08-21.js',
    'data/sligo-rovers-result-2041-08-24.js',
    'data/cork-city-result-2041-08-30.js',
    'data/bohemian-result-2041-09-02.js',
    'data/shamrock-rovers-result-2041-09-06.js',
    'data/manchester-united-result-2041-09-10.js',
    'data/celta-vigo-result-2041-09-18.js'
  ];
  const add=(domain,entries=files)=>{
    const group=manifest[domain]||(manifest[domain]={current:[]});
    group.current=group.current||[];
    entries.forEach(file=>{if(!group.current.includes(file))group.current.push(file);});
  };
  ['players','matches','fixtures','clubs','archive','league','transfers','press','news'].forEach(domain=>add(domain));

  add('nationalTeam',['data/ireland-result-2041-06-06-france.js','data/ireland-result-2041-06-09-spain.js','data/player-giacomo-papini-ireland-switch-2041-07-14.js']);
  add('players',['data/player-ireland-result-2041-06-06-france.js','data/player-ireland-result-2041-06-09-spain.js']);
  add('press',['data/press-reports-2041-06-06-france.js','data/press-reports-2041-06-09-nations-league.js']);
  add('news',['data/news-2041-06-06-france.js','data/news-2041-06-09-nations-league.js']);

  const championsLeagueSchedule='data/champions-league-schedule-2041-08-28.js';
  add('fixtures',[championsLeagueSchedule]);
  add('archive',[championsLeagueSchedule]);
  add('news',[championsLeagueSchedule]);

  const manUnitedPreview='data/manchester-united-preview-2041-09-07.js';
  add('clubs',[manUnitedPreview]);
  add('archive',[manUnitedPreview]);
  add('press',[manUnitedPreview]);
  add('news',[manUnitedPreview]);

  const championsLeagueMatchdayOne='data/champions-league-matchday-1-results-2041-09-11.js';
  add('archive',[championsLeagueMatchdayOne]);
  add('league',[championsLeagueMatchdayOne]);
  add('press',[championsLeagueMatchdayOne]);
  add('news',[championsLeagueMatchdayOne]);

  const celtaPreview='data/celta-vigo-preview-2041-09-11.js';
  add('players',[celtaPreview]);
  add('clubs',[celtaPreview]);
  add('archive',[celtaPreview]);
  add('press',[celtaPreview]);
  add('news',[celtaPreview]);

  const championsLeagueMatchdayTwo='data/champions-league-matchday-2-results-2041-09-18.js';
  add('archive',[championsLeagueMatchdayTwo]);
  add('league',[championsLeagueMatchdayTwo]);
  add('press',[championsLeagueMatchdayTwo]);
  add('news',[championsLeagueMatchdayTwo]);

  const irelandWorldCupQualifiers='data/ireland-world-cup-qualifiers-squad-2041-09-18.js';
  add('nationalTeam',[irelandWorldCupQualifiers]);
  add('players',[irelandWorldCupQualifiers]);
  add('archive',[irelandWorldCupQualifiers]);
  add('press',[irelandWorldCupQualifiers]);
  add('news',[irelandWorldCupQualifiers]);

  const irelandAzerbaijanResult='data/ireland-result-2041-09-26-azerbaijan.js';
  add('nationalTeam',[irelandAzerbaijanResult]);
  add('players',[irelandAzerbaijanResult]);
  add('archive',[irelandAzerbaijanResult]);
  add('press',[irelandAzerbaijanResult]);
  add('news',[irelandAzerbaijanResult]);

  const internationalDuty='data/finn-harps-international-duty-2041-09-27.js';
  add('players',[internationalDuty]);
  add('archive',[internationalDuty]);
  add('press',[internationalDuty]);
  add('news',[internationalDuty]);

  const irelandCyprusResult='data/ireland-result-2041-09-29-cyprus.js';
  add('nationalTeam',[irelandCyprusResult]);
  add('players',[irelandCyprusResult]);
  add('archive',[irelandCyprusResult]);
  add('press',[irelandCyprusResult]);
  add('news',[irelandCyprusResult]);

  const irelandCzechiaPreview='data/ireland-czechia-preview-2041-10-01.js';
  add('nationalTeam',[irelandCzechiaPreview]);
  add('archive',[irelandCzechiaPreview]);
  add('press',[irelandCzechiaPreview]);
  add('news',[irelandCzechiaPreview]);

  const octoberInternationalDuty='data/finn-harps-international-duty-2041-10-01.js';
  add('players',[octoberInternationalDuty]);
  add('archive',[octoberInternationalDuty]);
  add('press',[octoberInternationalDuty]);
  add('news',[octoberInternationalDuty]);

  const irelandCzechiaResult='data/ireland-result-2041-10-03-czechia.js';
  add('nationalTeam',[irelandCzechiaResult]);
  add('players',[irelandCzechiaResult]);
  add('archive',[irelandCzechiaResult]);
  add('press',[irelandCzechiaResult]);
  add('news',[irelandCzechiaResult]);
})();