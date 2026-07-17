(()=>{
  window.FM_PLAYERS=[];
  const fallback=[
    'data/players-1.js','data/players-2.js','data/players-3.js','data/players-4.js','data/birthdates.js',
    'data/player-updates-2040-11-06.js','data/player-results-2040-11-02.js','data/player-cormac-okane-2040-11-06.js',
    'data/player-ben-barry-2040-11-09.js','data/player-jim-oneill-2040-11-11.js','data/player-jim-oneill-2040-11-15.js',
    'data/player-jim-oneill-nationalteam-2040-11-16.js','data/player-ireland-result-2040-11-16.js',
    'data/player-rouviere-vinicius-2040-11-17.js','data/player-champions-league-count-fix-2040-11-17.js',
    'data/player-ireland-result-2040-11-19.js'
  ];
  const manifest=window.FM_DATA_MANIFEST;
  const urls=manifest?.flatten?manifest.flatten('players'):fallback;
  if(document.readyState==='loading'){
    if(window.FM_DATA_LOADER)window.FM_DATA_LOADER.writeSequential(urls);
    else document.write(urls.map(url=>`<script src="${url}"><\/script>`).join(''));
    window.FM_DATA_READY=Promise.resolve(window.FM_PLAYERS);
  }else if(window.FM_DATA_LOADER){
    window.FM_DATA_READY=window.FM_DATA_LOADER.loadSequential(urls).then(()=>window.FM_PLAYERS);
  }else{
    console.error('FM data loader is unavailable.');
    window.FM_DATA_READY=Promise.resolve(window.FM_PLAYERS);
  }
})();