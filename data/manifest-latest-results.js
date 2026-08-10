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
    'data/shamrock-rovers-result-2041-07-15.js'
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
})();