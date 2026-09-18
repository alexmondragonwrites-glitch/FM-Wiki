(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_TRANSFER_UPDATES=window.FM_TRANSFER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-08-31';
  const reportId='2042-08-31-paulo-henrique-wolves-transfer';

  upsert(window.FM_TRANSFER_UPDATES,{
    id:'2042-08-31-paulo-henrique-wolves',date,type:'departure',
    player:'Paulo Henrique',from:'Finn Harps',to:'Wolves',
    age:28,nation:'Brasilien',position:'Torwart',
    fee:'€51 Mio.',maxFee:'bis zu €61 Mio.',
    clauses:{leagueAppearances:'€10 Mio. nach 50 Ligaeinsätzen'},
    compensation:{club:'Sporting CP',rate:'4,0 %',amount:'€2,03 Mio.'},
    context:'Paulo Henrique verlässt Finn Harps nach dem Gewinn der irischen Meisterschaft 2042. Im selben Jahr wurde er mit den Harps Zweiter in der UEFA Champions League.'
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-08-31-paulo-henrique-to-wolves',date,player:'Paulo Henrique',type:'transfer',
    title:'Paulo Henrique wechselt zu den Wolves',
    detail:'Der 28-jährige brasilianische Torwart verlässt Finn Harps für €51 Mio. Richtung Wolves. Nach 50 Ligaeinsätzen können weitere €10 Mio. hinzukommen. Sporting CP erhält €2,03 Mio. Ausbildungsentschädigung.'
  });

  const season=(window.FM_SEASONS||[]).find(item=>item&&(item.year===2042||item.season===2042));
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Nach der Meisterschaft verlässt Paulo Henrique Finn Harps für €51 Mio. Richtung Wolves.';
    season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
    season.changes.outgoing=season.changes.outgoing||[];
    if(!season.changes.outgoing.some(x=>x&&((x.player||x.name)==='Paulo Henrique'))){
      season.changes.outgoing.push({player:'Paulo Henrique',to:'Wolves',fee:'€51 Mio.',maxFee:'€61 Mio.',date});
    }
    season.changes.notes=season.changes.notes||[];
    const note='31.08.2042: Paulo Henrique wechselt für €51 Mio. von Finn Harps zu den Wolves. Nach 50 Ligaeinsätzen können weitere €10 Mio. fällig werden; Sporting CP erhält €2,03 Mio. Ausbildungsentschädigung. Henrique war 2042 mit den Harps Champions-League-Finalist.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Transfer',date,competition:'Finn Harps · Transfermarkt',
    headline:'Henrique geht auf dem Gipfel: Wolves zahlen €51 Mio.',
    subheadline:'Der 28-jährige brasilianische Torwart verlässt Finn Harps unmittelbar nach dem nächsten Meistertitel. Durch eine Einsatzklausel kann der Deal noch auf €61 Mio. anwachsen.',
    label:'FINN HARPS · TRANSFER · 31. AUGUST 2042',
    heroStat:{label:'ABLÖSE',value:'€51 MIO.',note:'bis zu €61 Mio. · Wolves'},
    backlink:{href:'kaderplanung.html',label:'← ZUR KADERPLANUNG'},
    intro:'Nur Stunden nach dem nächsten irischen Meistertitel endet ein großes Kapitel im Tor der Harps. Paulo Henrique wechselt zu den Wolves. Finn Harps erhält €51 Mio.; weitere €10 Mio. können nach 50 Ligaeinsätzen hinzukommen.',
    sections:[
      {title:'Ein Verkauf aus einer Position der Stärke',text:'Henrique geht mit 28 Jahren in seinen besten Torwartjahren. Finn Harps verkauft keinen Spieler aus finanzieller Not, sondern realisiert einen hohen Marktwert, nachdem intern bereits jüngere Torhüter aufgebaut wurden.'},
      {title:'Das Paket kann €61 Mio. erreichen',text:'Die garantierte Ablöse beträgt €51 Mio. Nach 50 Ligaeinsätzen für die Wolves werden weitere €10 Mio. fällig.'},
      {title:'Sporting CP erhält Ausbildungsentschädigung',text:'Vier Prozent der Transfersumme gehen als Ausbildungsentschädigung an Sporting CP. Der ausgewiesene Betrag beträgt €2,03 Mio.'},
      {title:'Abschied als Champions-League-Finalist und Meister',text:'Henrique verlässt Donegal in einem außergewöhnlichen Jahr. 2042 wurde er mit Finn Harps Zweiter in der UEFA Champions League; am 31. August sicherten sich die Harps zudem den 16. Premier-Division-Titel in Folge.'},
      {title:'Jetzt beginnt die neue Torwartgeneration',text:'Mit Henriques Abgang ist der Weg für die jüngere Torwartgeneration frei. Evan Reilly hat in dieser Saison bereits mehrfach gezeigt, dass er auf Erstmannschaftsniveau bestehen kann.'}
    ],
    verdictHeading:'Ein sportlich schmerzhafter Abschied, aber ein sauber getimter Generationswechsel',
    verdict:'Finn Harps verkauft einen 28-jährigen Topkeeper für eine garantierte Summe von €51 Mio. und behält zugleich die Möglichkeit auf weitere €10 Mio. Entscheidend ist, dass der Klub nicht ohne Plan dasteht: Die nächste Torwartgeneration ist bereits im Kader.',
    sources:['FM Transfermeldung · Paulo Henrique zu Wolves · 31.08.2042']
  });

  upsert(window.FM_NEWS,{
    id:'2042-08-31-paulo-henrique-wolves',date,season:2042,category:'Transfer',accent:'blue',featured:false,
    eyebrow:'TRANSFER · €51 MIO.',
    title:'Paulo Henrique verlässt Finn Harps Richtung Wolves',
    summary:'Der 28-jährige brasilianische Keeper wechselt für €51 Mio. zu den Wolves. Durch eine Klausel kann die Ablöse auf €61 Mio. steigen.',
    href:`presse.html?id=${reportId}`,
    entities:['paulo-henrique','finn-harps','wolves','season-2042']
  });
})();