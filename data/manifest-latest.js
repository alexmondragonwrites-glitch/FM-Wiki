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
  const jackCahillProfile='data/player-jack-cahill-2041-11-03.js';
  const youngBoysPreview='data/young-boys-preview-2041-11-04.js';
  const internationalCallups='data/international-callups-2041-11-05.js';
  const youngBoysResult='data/young-boys-result-2041-11-06.js';
  const faiCupFinal='data/fai-cup-final-2041-11-10.js';
  const irelandAzerbaijanResult='data/ireland-result-2041-11-15-azerbaijan.js';
  const irelandCyprusFinalResult='data/ireland-result-2041-11-18-cyprus.js';
  const internationalDutyNovember='data/finn-harps-international-duty-2041-11-19.js';
  const barcelonaResult='data/barcelona-result-2041-11-27.js';
  const realSociedadPreview='data/real-sociedad-preview-2041-11-28.js';
  const irelandFinalissimaDraw='data/ireland-finalissima-draw-2041-11-28.js';
  const realSociedadResult='data/real-sociedad-result-2041-12-11.js';
  const year2041Closeout='data/year-2041-closeout-2041-12-11.js';
  const torricBruceContract='data/player-torric-bruce-contract-2041-12-31.js';

  add('players',[...recentResults,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,jackCahillProfile,internationalCallups,youngBoysResult,irelandAzerbaijanResult,irelandCyprusFinalResult,internationalDutyNovember,barcelonaResult,realSociedadResult,torricBruceContract]);
  add('nationalTeam',[internationalCallups,irelandAzerbaijanResult,irelandCyprusFinalResult,irelandFinalissimaDraw]);
  add('matches',[...recentResults,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,youngBoysResult,faiCupFinal,irelandAzerbaijanResult,irelandCyprusFinalResult,barcelonaResult,realSociedadResult]);
  add('fixtures',[...recentResults,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,youngBoysResult,faiCupFinal,irelandAzerbaijanResult,irelandCyprusFinalResult,barcelonaResult,irelandFinalissimaDraw,realSociedadResult]);
  add('clubs',[...recentResults,manUnitedPreview,redBullSalzburgPreview,redBullSalzburgResult,youngBoysPreview,youngBoysResult,barcelonaResult,realSociedadPreview,realSociedadResult]);
  add('archive',[...recentResults,redBullSalzburgPreview,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,irishLeaguesSeasonSummary,jackCahillProfile,youngBoysPreview,internationalCallups,youngBoysResult,faiCupFinal,irelandAzerbaijanResult,irelandCyprusFinalResult,internationalDutyNovember,barcelonaResult,realSociedadPreview,irelandFinalissimaDraw,realSociedadResult,year2041Closeout,torricBruceContract]);
  add('league',[...recentResults,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,irishLeaguesSeasonSummary,youngBoysResult,faiCupFinal,barcelonaResult,realSociedadResult,year2041Closeout]);
  add('press',[...recentResults,manUnitedPreview,redBullSalzburgPreview,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,irishLeaguesSeasonSummary,youngBoysPreview,internationalCallups,youngBoysResult,faiCupFinal,irelandAzerbaijanResult,irelandCyprusFinalResult,internationalDutyNovember,barcelonaResult,realSociedadPreview,irelandFinalissimaDraw,realSociedadResult,year2041Closeout,torricBruceContract]);
  add('news',[...recentResults,manUnitedPreview,redBullSalzburgPreview,championsLeagueMatchdayThreeTuesday,redBullSalzburgResult,stPatricksOctoberResult,waterfordOctoberResult,derryCityOctoberResult,derryCitySeasonFinale,irishLeaguesSeasonSummary,youngBoysPreview,internationalCallups,youngBoysResult,faiCupFinal,irelandAzerbaijanResult,irelandCyprusFinalResult,internationalDutyNovember,barcelonaResult,realSociedadPreview,irelandFinalissimaDraw,realSociedadResult,year2041Closeout,torricBruceContract]);
})();