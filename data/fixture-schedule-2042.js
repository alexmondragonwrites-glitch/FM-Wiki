(()=>{
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  const schedule=[
    ["2042-01-08","20:00","SpVgg 07 Elversberg","Auswärts","","Testspiel",0],
    ["2042-01-11","15:30","Karlsruhe","Auswärts","","Testspiel",0],
    ["2042-01-15","20:00","Ferencvárosi TC","Auswärts","","Testspiel",0],
    ["2042-01-22","20:00","Anderlecht","Heim","2:0","Ligaphase der UEFA Champions League",1],
    ["2042-01-26","17:30","FK Vojvodina","Auswärts","","Testspiel",0],
    ["2042-01-29","20:00","AEK","Heim","","Ligaphase der UEFA Champions League",0],
    ["2042-02-08","16:00","Unbekannt","Offen","","President's Cup",0],
    ["2042-02-14","19:45","Shamrock Rovers","Auswärts","","Premier Division",0],
    ["2042-02-18","19:45","Waterford","Heim","","Premier Division",0],
    ["2042-02-21","19:45","UCD","Heim","","Premier Division",0],
    ["2042-02-28","19:45","St Patrick's Athletic","Auswärts","","Premier Division",0],
    ["2042-03-03","19:45","Cork City","Heim","","Premier Division",0],
    ["2042-03-07","19:45","Derry City","Auswärts","","Premier Division",0],
    ["2042-03-14","19:45","Sligo Rovers","Heim","","Premier Division",0],
    ["2042-03-18","19:45","Athlone Town","Auswärts","","Premier Division",0],
    ["2042-03-21","19:45","Bohemian","Heim","","Premier Division",0],
    ["2042-04-04","19:45","Waterford","Auswärts","","Premier Division",0],
    ["2042-04-07","19:45","Shamrock Rovers","Heim","","Premier Division",0],
    ["2042-04-11","19:45","UCD","Auswärts","","Premier Division",0],
    ["2042-04-18","19:45","St Patrick's Athletic","Heim","","Premier Division",0],
    ["2042-04-25","19:45","Cork City","Auswärts","","Premier Division",0],
    ["2042-04-28","19:45","Derry City","Heim","","Premier Division",0],
    ["2042-05-02","19:45","Sligo Rovers","Auswärts","","Premier Division",0],
    ["2042-05-09","19:45","Athlone Town","Heim","","Premier Division",0],
    ["2042-05-16","19:45","Bohemian","Auswärts","","Premier Division",0],
    ["2042-05-23","19:45","Waterford","Heim","","Premier Division",0],
    ["2042-05-30","19:45","Shamrock Rovers","Auswärts","","Premier Division",0],
    ["2042-06-02","19:45","UCD","Heim","","Premier Division",0],
    ["2042-07-11","19:45","St Patrick's Athletic","Auswärts","","Premier Division",0],
    ["2042-07-18","19:45","Unbekannt","Offen","","1. Runde im FAI Cup",0],
    ["2042-07-18","19:45","Cork City","Heim","","Premier Division",0],
    ["2042-07-25","19:45","Derry City","Auswärts","","Premier Division",0],
    ["2042-08-01","19:45","Sligo Rovers","Heim","","Premier Division",0],
    ["2042-08-08","19:45","Athlone Town","Auswärts","","Premier Division",0],
    ["2042-08-15","19:45","Bohemian","Heim","","Premier Division",0],
    ["2042-08-22","19:45","Waterford","Auswärts","","Premier Division",0],
    ["2042-08-29","19:45","Shamrock Rovers","Heim","","Premier Division",0],
    ["2042-09-05","19:45","","Auswärts","","Premier Division",0],
    ["2042-09-12","19:45","","Heim","","Premier Division",0],
    ["2042-09-19","19:45","","Auswärts","","Premier Division",0],
    ["2042-10-10","19:45","","Heim","","Premier Division",0],
    ["2042-10-17","19:45","","Auswärts","","Premier Division",0],
    ["2042-10-24","19:45","","Heim","","Premier Division",0],
    ["2042-10-31","19:45","","Auswärts","","Premier Division",0]
  ];
  schedule.forEach(item=>{
    const index=window.FM_FIXTURES.findIndex(x=>x[0]===item[0]&&x[2]===item[2]&&x[5]===item[5]);
    if(index>=0)window.FM_FIXTURES[index]=item;
    else window.FM_FIXTURES.push(item);
  });
  window.FM_FIXTURES.sort((a,b)=>a[0].localeCompare(b[0])||a[1].localeCompare(b[1])||a[2].localeCompare(b[2]));
})();