(()=>{
  const manifest=window.FM_DATA_MANIFEST;
  if(!manifest)return;
  const file='data/manchester-united-result-2041-05-01.js';
  const add=domain=>{
    const group=manifest[domain]||(manifest[domain]={current:[]});
    group.current=group.current||[];
    if(!group.current.includes(file))group.current.push(file);
  };
  ['players','matches','fixtures','clubs','archive','press','news'].forEach(add);
})();