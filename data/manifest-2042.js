(()=>{
  const manifest=window.FM_DATA_MANIFEST;
  if(!manifest)return;

  const add=(key,path)=>{
    const group=manifest[key]||(manifest[key]={current:[]});
    group.current=group.current||[];
    if(!group.current.includes(path))group.current.push(path);
  };

  add('fixtures','data/fixture-schedule-2042.js');

  const quarterFinalDraw='data/champions-league-quarterfinal-draw-2042-03-21.js';
  ['fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,quarterFinalDraw));

  const bohemianResult='data/bohemian-result-2042-03-21.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,bohemianResult));

  const derryResult='data/derry-city-result-2042-03-24.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,derryResult));

  const irelandPeruResult='data/ireland-peru-result-2042-03-29.js';
  ['players','matches','nationalTeam','archive','press','news'].forEach(key=>add(key,irelandPeruResult));

  const worldCupDraw='data/world-cup-draw-2042-04-03.js';
  ['nationalTeam','archive','press','news'].forEach(key=>add(key,worldCupDraw));

  const shamrockResult='data/shamrock-rovers-result-2042-04-06.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,shamrockResult));

  const manCityPreview='data/manchester-city-preview-2042-04-07.js';
  ['fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,manCityPreview));

  const manCityFirstLeg='data/manchester-city-result-2042-04-09.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,manCityFirstLeg));

  const ucdResult='data/ucd-result-2042-04-12.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,ucdResult));

  const manCitySecondLeg='data/manchester-city-result-2042-04-15.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,manCitySecondLeg));

  const semifinalPairings='data/champions-league-semifinal-pairings-2042-04-15.js';
  ['fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,semifinalPairings));

  const conferenceLeagueSemifinals='data/conference-league-semifinal-pairings-2042-04-15.js';
  ['fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,conferenceLeagueSemifinals));

  const stPatricksResult='data/st-patricks-result-2042-04-20.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,stPatricksResult));

  const corkCityResult='data/cork-city-result-2042-04-24.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,corkCityResult));

  const derryCityResultApril='data/derry-city-result-2042-04-27.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,derryCityResultApril));

  const barcelonaPreview='data/barcelona-preview-2042-04-28.js';
  ['players','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,barcelonaPreview));

  const barcelonaFirstLeg='data/barcelona-result-2042-04-30.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,barcelonaFirstLeg));

  const sligoRoversResult='data/sligo-rovers-result-2042-05-03.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,sligoRoversResult));

  const barcelonaSecondLeg='data/barcelona-result-2042-05-06.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,barcelonaSecondLeg));

  const championsLeagueFinalPairing='data/champions-league-final-pairing-2042-05-06.js';
  ['players','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,championsLeagueFinalPairing));

  const athloneTownResultMay='data/athlone-town-result-2042-05-09.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,athloneTownResultMay));

  const bohemianResultMay='data/bohemian-result-2042-05-16.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,bohemianResultMay));

  const waterfordResultMay='data/waterford-result-2042-05-19.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,waterfordResultMay));

  const waterfordHomeResultMay='data/waterford-result-2042-05-23.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,waterfordHomeResultMay));

  const worldCupNominations='data/world-cup-nominations-finn-harps-2042-05-23.js';
  ['players','nationalTeam','archive','clubs','league','press','news'].forEach(key=>add(key,worldCupNominations));

  const polMunozPortrait='data/pol-munoz-portrait-2042-05-25.js';
  ['players','nationalTeam','archive','clubs','league','press','news'].forEach(key=>add(key,polMunozPortrait));

  const polMunozCoventryContext='data/pol-munoz-coventry-context-2042-05-25.js';
  ['players','nationalTeam','archive','clubs','league','press','news'].forEach(key=>add(key,polMunozCoventryContext));

  const manUtdFinalScouting='data/manchester-united-final-scouting-2042-05-25.js';
  ['fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,manUtdFinalScouting));

  const championsLeagueFinalResult='data/champions-league-final-result-2042-05-31.js';
  ['players','matches','fixtures','clubs','archive','league','press','news','nationalTeam'].forEach(key=>add(key,championsLeagueFinalResult));

  const irelandCameroonResult='data/ireland-cameroon-result-2042-06-02.js';
  ['players','matches','nationalTeam','archive','press','news'].forEach(key=>add(key,irelandCameroonResult));

  const irelandDrCongoResult='data/ireland-dr-congo-result-2042-06-08.js';
  ['players','matches','nationalTeam','archive','press','news'].forEach(key=>add(key,irelandDrCongoResult));

  const harpsInternationalDutyJune='data/finn-harps-international-duty-2042-06-07.js';
  ['players','matches','nationalTeam','archive','press','news'].forEach(key=>add(key,harpsInternationalDutyJune));

  const worldCupOpeningResults='data/world-cup-opening-results-2042-06-12.js';
  ['players','nationalTeam','archive','press','news'].forEach(key=>add(key,worldCupOpeningResults));

  const worldCupGroupsDF='data/world-cup-results-2042-06-13.js';
  ['players','nationalTeam','archive','press','news'].forEach(key=>add(key,worldCupGroupsDF));

  const worldCupPreIrelandChina='data/world-cup-pre-ireland-china-2042-06-15.js';
  ['players','nationalTeam','archive','press','news'].forEach(key=>add(key,worldCupPreIrelandChina));

  const irelandChinaPreview='data/ireland-china-preview-2042-06-15.js';
  ['nationalTeam','archive','press','news'].forEach(key=>add(key,irelandChinaPreview));

  const irelandChinaResult='data/ireland-china-result-2042-06-15.js';
  ['players','matches','nationalTeam','archive','press','news'].forEach(key=>add(key,irelandChinaResult));

  const worldCupGroupsABCSecond='data/world-cup-results-2042-06-16.js';
  ['players','nationalTeam','archive','press','news'].forEach(key=>add(key,worldCupGroupsABCSecond));

  const worldCupGroupsDEFSecond='data/world-cup-results-2042-06-17.js';
  ['players','nationalTeam','archive','press','news'].forEach(key=>add(key,worldCupGroupsDEFSecond));

  const irelandSouthAfricaPreview='data/ireland-south-africa-preview-2042-06-17.js';
  ['nationalTeam','archive','press','news'].forEach(key=>add(key,irelandSouthAfricaPreview));

  const worldCupGroupsGHISecond='data/world-cup-results-2042-06-18.js';
  ['players','nationalTeam','archive','press','news'].forEach(key=>add(key,worldCupGroupsGHISecond));

  const irelandSouthAfricaResult='data/ireland-south-africa-result-2042-06-19.js';
  ['players','matches','nationalTeam','archive','press','news'].forEach(key=>add(key,irelandSouthAfricaResult));

  const worldCupGroupsABCFinal='data/world-cup-results-2042-06-20.js';
  ['nationalTeam','archive','press','news'].forEach(key=>add(key,worldCupGroupsABCFinal));

  const worldCupGroupsDEFFinal='data/world-cup-results-2042-06-21.js';
  ['players','nationalTeam','archive','press','news'].forEach(key=>add(key,worldCupGroupsDEFFinal));

  const irelandBrazilPreview='data/ireland-brazil-preview-2042-06-21.js';
  ['nationalTeam','archive','press','news'].forEach(key=>add(key,irelandBrazilPreview));
})();