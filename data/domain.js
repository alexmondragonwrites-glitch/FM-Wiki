(()=>{
  const script=document.currentScript;
  const domain=script?.dataset?.domain;
  if(!domain){console.error('FM domain loader requires data-domain.');return;}
  const initializers={
    staff:()=>{window.FM_STAFF=[];}
  };
  initializers[domain]?.();
  const manifest=window.FM_DATA_MANIFEST;
  const urls=manifest?.flatten?manifest.flatten(domain):[];
  window.FM_DOMAIN_READY=window.FM_DOMAIN_READY||{};
  if(!urls.length){
    console.error(`No data files registered for domain: ${domain}`);
    window.FM_DOMAIN_READY[domain]=Promise.resolve([]);
    return;
  }
  if(document.readyState==='loading'){
    if(window.FM_DATA_LOADER)window.FM_DATA_LOADER.writeSequential(urls);
    else document.write(urls.map(url=>`<script src="${url}"><\/script>`).join(''));
    window.FM_DOMAIN_READY[domain]=Promise.resolve(urls);
  }else if(window.FM_DATA_LOADER){
    window.FM_DOMAIN_READY[domain]=window.FM_DATA_LOADER.loadSequential(urls);
  }else{
    console.error(`FM data loader is unavailable for domain: ${domain}`);
    window.FM_DOMAIN_READY[domain]=Promise.resolve([]);
  }
})();