(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const obsolete=[
    ['2041-03-04','Bohemian','Premier Division'],
    ['2041-03-15','Athlone Town','Premier Division']
  ];
  window.FM_FIXTURES=window.FM_FIXTURES.filter(item=>!obsolete.some(old=>item[0]===old[0]&&item[2]===old[1]&&item[5]===old[2]));
  const fixture=['2041-03-25','19:45','Bohemian','Auswärts','','Premier Division',0];
  const index=window.FM_FIXTURES.findIndex(item=>item[0]===fixture[0]&&item[2]===fixture[2]&&item[5]===fixture[5]);
  if(index>=0)window.FM_FIXTURES[index]=fixture;
  else window.FM_FIXTURES.push(fixture);
  window.FM_FIXTURES.sort((a,b)=>a[0].localeCompare(b[0])||a[1].localeCompare(b[1])||a[2].localeCompare(b[2]));
})();