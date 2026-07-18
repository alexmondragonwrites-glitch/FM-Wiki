(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const additions=[
    ['2041-01-11','20:00','Cercle Brugge','Auswärts','','Testspiel',0],
    ['2041-01-14','19:45','Bohemian','Auswärts','','Testspiel',0],
    ['2041-01-20','17:30','FK Javor-Matis','Auswärts','','Testspiel',0],
    ['2041-01-23','20:00','Young Boys','Heim','','Ligaphase der UEFA Champions League',1],
    ['2041-01-26','17:00','Karviná','Auswärts','','Testspiel',0],
    ['2041-01-29','20:00','Paris Saint-Germain','Heim','','Ligaphase der UEFA Champions League',1]
  ];
  additions.forEach(item=>{
    const exists=window.FM_FIXTURES.some(x=>x[0]===item[0]&&x[2]===item[2]);
    if(!exists)window.FM_FIXTURES.push(item);
  });
})();