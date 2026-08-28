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
})();