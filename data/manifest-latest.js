(()=>{
  const manifest=window.FM_DATA_MANIFEST;
  if(!manifest)return;

  const add=(domain,files)=>{
    const group=manifest[domain]||(manifest[domain]={current:[]});
    group.current=group.current||[];
    files.forEach(file=>{if(!group.current.includes(file))group.current.push(file);});
  };

  const recentResults=[
    'data/derry-result-2041-04-22.js',
    'data/shamrock-result-2041-04-25.js',
    'data/bohemian-result-2041-04-28.js'
  ];
  const manUnitedPreview='data/manchester-united-preview-2041-04-30.js';
  const redBullSalzburgPreview='data/red-bull-salzburg-preview-2041-10-19.js';
  const championsLeagueMatchdayThreeTuesday='data/champions-league-matchday-3-tuesday-results-2041-10-22.js';
  const redBullSalzburgResult='data/red-bull-salzburg-result-2041-10-23.js';

  add('players',[...recentResults,redBullSalzburgResult]);
  add('matches',[...recentResults,redBullSalzburgResult]);
  add('fixtures',[...recentResults,redBullSalzburgResult]);
  add('clubs',[...recentResults,manUnitedPreview,redBullSalzburgPreview,redBullSalzburgResult]);
  add('archive',[...recentResults,redBullSalzburgPreview,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult]);
  add('league',[...recentResults,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult]);
  add('press',[...recentResults,manUnitedPreview,redBullSalzburgPreview,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult]);
  add('news',[...recentResults,manUnitedPreview,redBullSalzburgPreview,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult]);
})();
