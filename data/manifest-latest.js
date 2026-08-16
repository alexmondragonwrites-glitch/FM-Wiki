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
  const stPatricksOctoberResult='data/st-patricks-result-2041-10-27.js';
  const waterfordOctoberResult='data/waterford-result-2041-10-29.js';
  const derryCityOctoberResult='data/derry-city-result-2041-10-31.js';
  const derryCitySeasonFinale='data/derry-city-result-2041-11-02.js';
  const irishLeaguesSeasonSummary='data/irish-leagues-season-summary-2041-11-02.js';

  add('players',[...recentResults,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale]);
  add('matches',[...recentResults,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale]);
  add('fixtures',[...recentResults,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale]);
  add('clubs',[...recentResults,manUnitedPreview,redBullSalzburgPreview,redBullSalzburgResult]);
  add('archive',[...recentResults,redBullSalzburgPreview,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,irishLeaguesSeasonSummary]);
  add('league',[...recentResults,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,irishLeaguesSeasonSummary]);
  add('press',[...recentResults,manUnitedPreview,redBullSalzburgPreview,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,irishLeaguesSeasonSummary]);
  add('news',[...recentResults,manUnitedPreview,redBullSalzburgPreview,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,irishLeaguesSeasonSummary]);
})();
