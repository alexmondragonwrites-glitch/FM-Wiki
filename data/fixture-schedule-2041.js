(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const schedule=[
    ["2041-01-11","20:00","Cercle Brugge","Auswärts","","Testspiel",0],
    ["2041-01-14","19:45","Bohemian","Auswärts","","Testspiel",0],
    ["2041-01-20","17:30","FK Javor-Matis","Auswärts","","Testspiel",0],
    ["2041-01-23","20:00","Young Boys","Heim","","Ligaphase der UEFA Champions League",0],
    ["2041-01-26","17:00","Karviná","Auswärts","","Testspiel",0],
    ["2041-01-29","20:00","Paris Saint-Germain","Heim","","Ligaphase der UEFA Champions League",0],
    ["2041-02-09","16:00","Unbekannt","Offen","","President's Cup",0],
    ["2041-02-15","19:45","Cork City","Heim","","Premier Division",0],
    ["2041-02-22","19:45","Sligo Rovers","Auswärts","","Premier Division",0],
    ["2041-03-01","19:45","Shamrock Rovers","Heim","","Premier Division",0],
    ["2041-03-04","19:45","Bohemian","Auswärts","","Premier Division",0],
    ["2041-03-08","19:45","Waterford","Heim","","Premier Division",0],
    ["2041-03-15","19:45","Athlone Town","Auswärts","","Premier Division",0],
    ["2041-03-22","19:45","Shelbourne","Auswärts","","Premier Division",0],
    ["2041-04-05","19:45","St Patrick's Athletic","Heim","","Premier Division",0],
    ["2041-04-08","19:45","Derry City","Auswärts","","Premier Division",0],
    ["2041-04-12","19:45","Sligo Rovers","Heim","","Premier Division",0],
    ["2041-04-19","19:45","Cork City","Auswärts","","Premier Division",0],
    ["2041-04-26","19:45","Shamrock Rovers","Auswärts","","Premier Division",0],
    ["2041-04-29","19:45","Bohemian","Heim","","Premier Division",0],
    ["2041-05-03","19:45","Waterford","Auswärts","","Premier Division",0],
    ["2041-05-10","19:45","Athlone Town","Heim","","Premier Division",0],
    ["2041-05-17","19:45","Shelbourne","Heim","","Premier Division",0],
    ["2041-05-24","19:45","St Patrick's Athletic","Auswärts","","Premier Division",0],
    ["2041-05-31","19:45","Derry City","Heim","","Premier Division",0],
    ["2041-06-03","19:45","Sligo Rovers","Auswärts","","Premier Division",0],
    ["2041-06-28","19:45","Cork City","Heim","","Premier Division",0],
    ["2041-07-05","19:45","Shamrock Rovers","Heim","","Premier Division",0],
    ["2041-07-12","19:45","Bohemian","Auswärts","","Premier Division",0],
    ["2041-07-19","19:45","Waterford","Heim","","Premier Division",0],
    ["2041-07-19","19:45","Unbekannt","Offen","","1. Runde im FAI Cup",0],
    ["2041-07-26","19:45","Athlone Town","Auswärts","","Premier Division",0],
    ["2041-08-02","19:45","Shelbourne","Auswärts","","Premier Division",0],
    ["2041-08-09","19:45","St Patrick's Athletic","Heim","","Premier Division",0],
    ["2041-08-16","19:45","Derry City","Auswärts","","Premier Division",0],
    ["2041-08-23","19:45","Sligo Rovers","Heim","","Premier Division",0],
    ["2041-08-30","19:45","Cork City","Auswärts","","Premier Division",0],
    ["2041-09-06","19:45","Shamrock Rovers","Auswärts","","Premier Division",0],
    ["2041-09-13","19:45","Bohemian","Heim","","Premier Division",0],
    ["2041-09-20","19:45","Waterford","Auswärts","","Premier Division",0],
    ["2041-10-11","19:45","Athlone Town","Heim","","Premier Division",0],
    ["2041-10-18","19:45","Shelbourne","Heim","","Premier Division",0],
    ["2041-10-25","19:45","St Patrick's Athletic","Auswärts","","Premier Division",0],
    ["2041-11-01","19:45","Derry City","Heim","","Premier Division",0]
  ];
  schedule.forEach(item=>{
    const index=window.FM_FIXTURES.findIndex(x=>x[0]===item[0]&&x[2]===item[2]&&x[5]===item[5]);
    if(index>=0)window.FM_FIXTURES[index]=item;
    else window.FM_FIXTURES.push(item);
  });
  window.FM_FIXTURES.sort((a,b)=>a[0].localeCompare(b[0])||a[1].localeCompare(b[1])||a[2].localeCompare(b[2]));
})();