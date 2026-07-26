(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const result=['2041-03-13','20:00','A.S. Roma','Heim','2:0','UEFA Champions League · Achtelfinale',0];
  const index=window.FM_FIXTURES.findIndex(item=>item[0]===result[0]&&item[2]===result[2]);
  if(index>=0)window.FM_FIXTURES[index]=result;
  else window.FM_FIXTURES.push(result);
})();
