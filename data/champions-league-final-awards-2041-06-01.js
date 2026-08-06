(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_FINANCIAL_EVENTS=window.FM_FINANCIAL_EVENTS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const final={
    id:'2041-06-01-champions-league-final',date:'2041-06-01',season:2041,competition:'UEFA Champions League',stage:'Finale',
    home:'Real Madrid',away:'Manchester United',score:'0:4',homeGoals:0,awayGoals:4,venue:'Estadio Santiago Bernabéu',
    scorers:['R. López 30., 85.','Y. Kricheli 70.','A. Kitenge 81.'],winner:'Manchester United',runnerUp:'Real Madrid',
    note:'Manchester United folgt Finn Harps als Champions-League-Sieger. Der Klub, der die Harps im Halbfinale zweimal knapp mit 2:1 bezwang, gewann das Finale gegen Real Madrid deutlich mit 4:0.'
  };

  window.FM_CHAMPIONS_LEAGUE_2041={
    season:'2040/41',winner:'Manchester United',runnerUp:'Real Madrid',final,
    finnHarps:{stage:'Halbfinale',eliminatedBy:'Manchester United',aggregate:'2:4',legs:['Finn Harps 1:2 Manchester United','Manchester United 2:1 Finn Harps']}
  };

  upsert(window.FM_FINANCIAL_EVENTS,{
    id:'2041-06-02-champions-league-coefficient-payment',date:'2041-06-02',season:2041,type:'UEFA-Prämie',
    competition:'UEFA Champions League',amount:30930000,amountLabel:'€30,93 Mio.',
    description:'Ausschüttung aus dem Prämienpool der zehnjährigen UEFA-Koeffizientenrangliste.'
  });

  const report={
    id:'2041-06-02-champions-league-finale-und-koeffizientenpraemie',type:'Saisonbilanz',date:'2041-06-02',competition:'UEFA Champions League',
    fixtureDate:'Finale 2040/41 und UEFA-Ausschüttung',home:'Manchester United · neuer Titelträger',away:'Finn Harps · €30,93 Mio. Koeffizientenprämie',location:'Madrid und Donegal',
    headline:'United übernimmt Europas Krone, Finn Harps kassiert €30,93 Millionen',
    subheadline:'Manchester United besiegt Real Madrid im Champions-League-Finale mit 4:0. Einen Tag später erhalten die Harps 30,93 Millionen Euro aus dem Prämienpool der zehnjährigen UEFA-Koeffizientenrangliste.',
    label:'CHAMPIONS LEAGUE · FINALE UND FINANZEN',
    heroStat:{label:'UEFA-Koeffizientenprämie',value:'€30,93 Mio.',note:'Ausschüttung nach der Platzierung in der zehnjährigen Rangliste'},
    backlink:{href:'saison.html',label:'← ZUR SAISON 2041'},
    intro:'Die Champions-League-Saison endet mit einem neuen Sieger und einer erheblichen finanziellen Nachwirkung für Finn Harps. Manchester United schlägt Real Madrid im Estadio Santiago Bernabéu mit 4:0 und bestätigt damit die Qualität jenes Gegners, an dem die Titelverteidigung der Harps im Halbfinale knapp scheiterte. Am folgenden Tag fließen 30,93 Millionen Euro aus dem UEFA-Koeffizientenpool nach Donegal.',
    sections:[
      {title:'Manchester United gewinnt das Finale deutlich',text:'R. López traf in der 30. und 85. Minute, Yizhar Kricheli in der 70. und Aymar Kitenge in der 81. Minute. Real Madrid blieb im eigenen Stadion ohne Treffer, während United den Titel mit einem 4:0 vollendete.'},
      {title:'Das Harps-Aus bekommt einen klaren Maßstab',text:'Finn Harps verlor beide Halbfinalspiele gegen Manchester United jeweils nur mit 1:2. Dass United anschließend Real Madrid mit vier Toren Unterschied besiegt, ändert das Ausscheiden nicht, ordnet es aber ein: Die Harps scheiterten knapp am späteren Sieger.'},
      {title:'€30,93 Millionen aus dem Koeffizientenpool',text:'Finn Harps erhält 30,93 Millionen Euro aus jenem Prämienpool, der nach den Platzierungen der Vereine in der zehnjährigen UEFA-Koeffizientenrangliste verteilt wird. Die Zahlung ist ein finanzieller Beleg dafür, dass die europäischen Erfolge des Klubs längst nicht mehr nur einzelne Pokalnächte sind, sondern sich über Jahre in der Rangliste niederschlagen.'},
      {title:'Europäischer Status wird zu strukturellem Kapital',text:'Der Betrag stärkt nicht nur das laufende Budget. Er zeigt, wie sportliche Kontinuität, regelmäßige tiefe Champions-League-Läufe und der Titelgewinn von 2040 inzwischen eine zweite Ertragssäule neben Transfers und nationalen Einnahmen geschaffen haben.'}
    ],
    keyDuelsTitle:'DIE BESTÄTIGTEN SCHLUSSDATEN',keyDuelsHeading:'Finale, Halbfinale und Ausschüttung',
    keyDuels:[
      {title:'Manchester United',text:'Champions-League-Sieger nach einem 4:0 gegen Real Madrid.'},
      {title:'Real Madrid',text:'Finalist, im eigenen Estadio Santiago Bernabéu jedoch ohne Treffer.'},
      {title:'Finn Harps sportlich',text:'Halbfinal-Aus mit 2:4 insgesamt gegen den späteren Sieger.'},
      {title:'Finn Harps finanziell',text:'€30,93 Millionen aus dem Prämienpool der zehnjährigen UEFA-Koeffizientenrangliste.'}
    ],
    verdictHeading:'Der Titel ist fort, der europäische Wert bleibt',
    verdict:'Manchester United ist der verdiente neue Champion. Für Finn Harps bleibt eine Saison, in der die Mannschaft erneut das Halbfinale erreichte, nur knapp am späteren Sieger scheiterte und ihren langfristigen europäischen Aufstieg in eine Ausschüttung von 30,93 Millionen Euro verwandelte. Das ist keine individuelle Auszeichnung, sondern ein belastbarer struktureller Erfolg.',
    sourcesHeading:'Bestätigte Daten vom 1. und 2. Juni 2041',
    sourcesNote:'Erfasst wurden ausschließlich die Angaben aus den Football-Manager-Ansichten zum Champions-League-Finale und zur Koeffizientenprämie. Spieler- oder Nachwuchsauszeichnungen sind auf den vorliegenden Screenshots nicht enthalten.',
    sources:['Champions-League-Finale: Real Madrid 0:4 Manchester United','Torschützen: R. López 30. und 85., Y. Kricheli 70., A. Kitenge 81.','UEFA-Koeffizientenprämie für Finn Harps: €30,93 Mio.']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-06-02-champions-league-finale-und-koeffizientenpraemie',date:'2041-06-02',season:2041,category:'Champions League',accent:'gold',
    eyebrow:'FINALE · KOEFFIZIENTENPRÄMIE',title:'United gewinnt, Harps erhalten €30,93 Mio.',
    summary:'Manchester United schlägt Real Madrid im Finale 4:0. Finn Harps erhalten anschließend 30,93 Millionen Euro aus dem zehnjährigen UEFA-Koeffizientenpool.',
    href:'presse.html?id=2041-06-02-champions-league-finale-und-koeffizientenpraemie',entities:['finn-harps','man-utd','real-madrid','champions-league-2041','uefa-koeffizient'],featured:true
  });
  (window.FM_NEWS||[]).forEach(item=>{if(item.id!=='2041-06-02-champions-league-finale-und-koeffizientenpraemie')item.featured=false;});

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.championsLeague='Halbfinale · ausgeschieden gegen den späteren Sieger Manchester United (2:4 insgesamt)';
    season.championsLeagueWinner='Manchester United · 4:0 im Finale gegen Real Madrid';
    season.championsLeagueCoefficientPrize='€30,93 Mio. · zehnjährige UEFA-Koeffizientenrangliste';
    delete season.championsLeagueAwards;
    season.summary='Finn Harps führt national mit 52 Punkten und 54:2 Toren nach 18 Spielen. In der Champions League endete die Titelverteidigung knapp im Halbfinale gegen den späteren Sieger Manchester United. Aus dem Prämienpool der zehnjährigen UEFA-Koeffizientenrangliste erhielt der Klub 30,93 Millionen Euro.';
  }

  const united=(window.FM_CLUBS||[]).find(x=>x.id==='man-utd'||x.name==='Manchester United');
  if(united){
    united.summary='Manchester United gewann die UEFA Champions League 2040/41. Nach zwei 2:1-Siegen im Halbfinale gegen Titelverteidiger Finn Harps besiegte der Klub Real Madrid im Finale im Santiago Bernabéu mit 4:0.';
    united.honours=[...(united.honours||[]).filter(x=>!(x&&x.year===2041&&x.title==='UEFA Champions League')),{year:2041,title:'UEFA Champions League',note:'4:0 im Finale gegen Real Madrid'}];
  }
  const real=(window.FM_CLUBS||[]).find(x=>x.id==='real-madrid'||x.name==='Real Madrid');
  if(real)real.summary='Real Madrid erreichte 2041 das Champions-League-Finale im eigenen Estadio Santiago Bernabéu, unterlag Manchester United dort jedoch deutlich mit 0:4.';
})();