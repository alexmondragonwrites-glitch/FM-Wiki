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

  add('players',recentResults);
  add('matches',recentResults);
  add('fixtures',recentResults);
  add('clubs',[...recentResults,manUnitedPreview,redBullSalzburgPreview]);
  add('archive',[...recentResults,redBullSalzburgPreview]);
  add('league',recentResults);
  add('press',[...recentResults,manUnitedPreview,redBullSalzburgPreview]);
  add('news',[...recentResults,manUnitedPreview,redBullSalzburgPreview]);
})();
