(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const result=['2041-02-22','19:45','Sligo Rovers','Auswärts','0:4','Premier Division',0];
  const index=window.FM_FIXTURES.findIndex(item=>item[0]===result[0]&&item[2]===result[2]&&item[5]===result[5]);
  if(index>=0)window.FM_FIXTURES[index]=result;
  else window.FM_FIXTURES.push(result);
})();