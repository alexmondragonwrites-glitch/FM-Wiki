(()=>{
  const loaded=new Set();
  const absolute=url=>new URL(url,document.baseURI).href;
  const loadOne=url=>new Promise((resolve,reject)=>{
    const key=absolute(url);
    if(loaded.has(key)){resolve(url);return;}
    const existing=[...document.scripts].find(script=>script.src===key);
    if(existing){loaded.add(key);resolve(url);return;}
    const script=document.createElement('script');
    script.src=url;
    script.async=false;
    script.onload=()=>{loaded.add(key);resolve(url);};
    script.onerror=()=>reject(new Error(`Datendatei konnte nicht geladen werden: ${url}`));
    document.head.appendChild(script);
  });
  const loadSequential=async urls=>{
    for(const url of urls)await loadOne(url);
    return urls;
  };
  const writeSequential=urls=>{
    const fresh=urls.filter(url=>!loaded.has(absolute(url)));
    if(!fresh.length)return;
    document.write(fresh.map(url=>`<script src="${url}"><\/script>`).join(''));
    fresh.forEach(url=>loaded.add(absolute(url)));
  };
  window.FM_DATA_LOADER={loaded,loadOne,loadSequential,writeSequential};
})();