(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const result=['2041-01-11','20:00','Cercle Brugge','Auswärts','0:3','Testspiel',0];
  const index=window.FM_FIXTURES.findIndex(item=>item[0]===result[0]&&item[2]===result[2]&&item[5]===result[5]);
  if(index>=0)window.FM_FIXTURES[index]=result;
  else window.FM_FIXTURES.push(result);
})();