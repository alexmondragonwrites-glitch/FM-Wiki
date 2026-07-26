(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const result=['2041-03-05','20:00','A.S. Roma','Auswärts','2:1','Hinspiel im Achtelfinale der UEFA Champions League',1];
  const index=window.FM_FIXTURES.findIndex(item=>item[0]===result[0]&&item[2]===result[2]&&item[5]===result[5]);
  if(index>=0)window.FM_FIXTURES[index]=result;
  else window.FM_FIXTURES.push(result);
  window.FM_FIXTURES.sort((a,b)=>a[0].localeCompare(b[0])||a[1].localeCompare(b[1])||a[2].localeCompare(b[2]));
})();
