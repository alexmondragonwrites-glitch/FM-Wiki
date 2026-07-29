(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const date='2041-04-05',opponent="St Patrick's Athletic",competition='Premier Division';
  const exact=window.FM_FIXTURES.findIndex(item=>item[0]===date&&item[2]===opponent&&item[5]===competition);
  const fallback=window.FM_FIXTURES.findIndex(item=>item[0]===date&&String(item[2]).includes("St Patrick")&&item[5]===competition);
  const fixture=[date,'19:45',opponent,'Heim','0-0',competition,1];
  if(exact>=0)window.FM_FIXTURES[exact]=fixture;
  else if(fallback>=0)window.FM_FIXTURES[fallback]=fixture;
  else window.FM_FIXTURES.push(fixture);
  window.FM_FIXTURES.sort((a,b)=>a[0].localeCompare(b[0])||a[1].localeCompare(b[1])||a[2].localeCompare(b[2]));
})();