(()=>{
  const manifest=window.FM_DATA_MANIFEST;
  if(!manifest)return;

  const add=(key,path)=>{
    const group=manifest[key]||(manifest[key]={current:[]});
    group.current=group.current||[];
    if(!group.current.includes(path))group.current.push(path);
  };

  add('fixtures','data/fixture-schedule-2042.js');

  const quarterFinalDraw='data/champions-league-quarterfinal-draw-2042-03-21.js';
  ['fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,quarterFinalDraw));

  const bohemianResult='data/bohemian-result-2042-03-21.js';
  ['players','matches','fixtures','clubs','archive','league','press','news'].forEach(key=>add(key,bohemianResult));
})();