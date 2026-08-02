(()=>{
  const manifest=window.FM_DATA_MANIFEST;
  if(!manifest)return;
  const files=[
    'data/manchester-united-result-2041-05-01.js',
    'data/waterford-result-2041-05-04.js',
    'data/manchester-united-result-2041-05-07.js'
  ];
  const add=domain=>{
    const group=manifest[domain]||(manifest[domain]={current:[]});
    group.current=group.current||[];
    files.forEach(file=>{if(!group.current.includes(file))group.current.push(file);});
  };
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(add);
})();