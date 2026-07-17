(()=>{
  const fallback=[
    'data/ireland-2040-11-16.js','data/ireland-result-2040-11-16.js','data/ireland-group-finale-belgium.js',
    'data/ireland-belgium-preview-adjustment-2040-11-16.js','data/ireland-result-2040-11-19-belgium.js'
  ];
  const urls=window.FM_DATA_MANIFEST?.nationalTeam?.current||fallback;
  if(document.readyState==='loading'){
    if(window.FM_DATA_LOADER)window.FM_DATA_LOADER.writeSequential(urls);
    else document.write(urls.map(url=>`<script src="${url}"><\/script>`).join(''));
    window.FM_NATIONALTEAM_READY=Promise.resolve(window.FM_IRELAND);
  }else if(window.FM_DATA_LOADER){
    window.FM_NATIONALTEAM_READY=window.FM_DATA_LOADER.loadSequential(urls).then(()=>window.FM_IRELAND);
  }
})();