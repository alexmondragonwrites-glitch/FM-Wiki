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
    'data/club-world-cup-charlotte-result-2041-06-17.js'
  ];
  const add=(domain,entries=files)=>{
    const group=manifest[domain]||(manifest[domain]={current:[]});
    group.current=group.current||[];
    entries.forEach(file=>{if(!group.current.includes(file))group.current.push(file);});
  };
  ['players','matches','fixtures','clubs','archive','league','transfers','press','news'].forEach(domain=>add(domain));

  add('nationalTeam',['data/ireland-result-2041-06-06-france.js','data/ireland-result-2041-06-09-spain.js']);
  add('players',['data/player-ireland-result-2041-06-06-france.js','data/player-ireland-result-2041-06-09-spain.js']);
  add('press',['data/press-reports-2041-06-06-france.js','data/press-reports-2041-06-09-nations-league.js']);
  add('news',['data/news-2041-06-06-france.js','data/news-2041-06-09-nations-league.js']);
})();