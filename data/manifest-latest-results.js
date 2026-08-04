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
    'data/vinicius-celta-cwc-draw-2041-05-18.js'
  ];
  const add=domain=>{
    const group=manifest[domain]||(manifest[domain]={current:[]});
    group.current=group.current||[];
    files.forEach(file=>{if(!group.current.includes(file))group.current.push(file);});
  };
  ['players','matches','fixtures','clubs','archive','league','transfers','press','news'].forEach(add);
})();