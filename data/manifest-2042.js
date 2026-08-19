(()=>{
  const manifest=window.FM_DATA_MANIFEST;
  if(!manifest)return;
  const fixtures=manifest.fixtures||(manifest.fixtures={current:[]});
  fixtures.current=fixtures.current||[];
  const schedule='data/fixture-schedule-2042.js';
  if(!fixtures.current.includes(schedule))fixtures.current.push(schedule);
})();