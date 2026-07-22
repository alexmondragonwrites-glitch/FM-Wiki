(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const fixture=['2041-02-09','16:00','Derry City','Offen','','President\'s Cup',0];
  const index=window.FM_FIXTURES.findIndex(item=>item[0]===fixture[0]&&item[5]===fixture[5]);
  if(index>=0)window.FM_FIXTURES[index]=fixture;
  else window.FM_FIXTURES.push(fixture);
  window.FM_FIXTURES.sort((a,b)=>a[0].localeCompare(b[0])||a[1].localeCompare(b[1])||a[2].localeCompare(b[2]));
})();