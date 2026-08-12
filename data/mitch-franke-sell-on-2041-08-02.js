(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_FINANCE_EVENTS=window.FM_FINANCE_EVENTS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]={...list[index],...item};else list.push(item);
  };

  const reportId='2041-08-02-mitch-franke-sell-on';

  upsert(window.FM_FINANCE_EVENTS,{
    id:'2041-08-02-mitch-franke-sell-on',date:'2041-08-02',season:2041,type:'sell-on-income',
    player:'Mitch Franke',from:'Almería',to:'Atlético de Madrid',transferFee:20500000,transferFeeLabel:'€20,5 Mio.',
    sellOnRate:0.30,sellOnIncome:6250000,sellOnIncomeLabel:'€6,25 Mio.',solidarityIncome:300000,solidarityIncomeLabel:'€300.000',
    trainingCompensation:[
      {club:'IVOZ',rate:0.01,amountApprox:61660,label:'1,0 % · ca. €61,66K'},
      {club:'Feyenoord',rate:0.025,amountApprox:154000,label:'2,5 % · ca. €154K'}
    ],
    note:'Football Manager weist Finn Harps nach Frankes €20,5-Mio.-Wechsel von Almería zu Atlético de Madrid €6,25 Mio. aus einer 30-%-Weiterverkaufsklausel sowie zusätzlich €300.000 Solidaritätszahlung zu.'
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2041-08-02-mitch-franke-atletico',date:'2041-08-02',player:'Mitch Franke',type:'former-player',
    title:'Franke wechselt zu Atlético und zahlt Jahre später noch einmal für die Harps',
    detail:'Der ehemalige Finn-Harps-Offensivspieler wechselt für €20,5 Mio. von Almería zu Atlético de Madrid. Eine 30-%-Weiterverkaufsklausel bringt Finn Harps laut Spielmeldung €6,25 Mio.; hinzu kommen €300.000 Solidaritätszahlung.'
  });

  const franke=(window.FM_PLAYERS||[]).find(p=>p.id==='mitch-franke'||p.name==='Mitch Franke');
  if(franke){
    franke.profileDate='2041-08-02';
    franke.currentClub='Atlético de Madrid';
    franke.status='Ehemaliger Finn-Harps-Spieler · Atlético de Madrid';
    franke.transferStatus='Von Almería zu Atlético de Madrid gewechselt';
    franke.transferFee='€20,5 Mio.';
    franke.careerNarrative=franke.careerNarrative||[];
    const note='02.08.2041: Mitch Franke wechselt für €20,5 Mio. von Almería zu Atlético de Madrid. Finn Harps profitiert von einer früher ausgehandelten 30-%-Weiterverkaufsklausel und erhält laut Spielmeldung €6,25 Mio. plus €300.000 Solidaritätszahlung.';
    if(!franke.careerNarrative.includes(note))franke.careerNarrative.push(note);
  }

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Ehemalige Harps',date:'2041-08-02',competition:'Transfermarkt',fixtureDate:'02.08.2041',
    home:'Mitch Franke',away:'Atlético de Madrid',score:'€6,25 Mio. für Finn Harps',location:'Almería → Madrid',
    headline:'Ein alter Vertrag zahlt noch einmal: Franke bringt den Harps €6,25 Mio.',
    subheadline:'Mitch Franke wechselt für €20,5 Mio. von Almería zu Atlético. Finn Harps kassiert dank einer 30-Prozent-Weiterverkaufsklausel Jahre nach seinem Abschied erneut kräftig mit.',
    label:'FORMER HARPS · SELL-ON WINDFALL · MITCH FRANKE',
    heroStat:{label:'Weiterverkaufserlös',value:'€6,25 Mio.',note:'plus €300.000 Solidaritätszahlung · Atlético zahlt €20,5 Mio. an Almería'},
    backlink:{href:'news.html',label:'← ZU DEN NEWS'},
    intro:'Mitch Franke ist längst kein Spieler der Finn Harps mehr, doch ein alter Transfervertrag produziert im August 2041 noch einmal einen Millionenbetrag für Donegal. Atlético de Madrid verpflichtet den 27-jährigen Niederländer für 20,5 Millionen Euro von Almería. Weil Finn Harps beim früheren Verkauf eine 30-Prozent-Weiterverkaufsklausel gesichert hatten, fließen laut Spielmeldung 6,25 Millionen Euro an den Klub. Zusätzlich kommen 300.000 Euro Solidaritätszahlung hinzu.',
    sections:[
      {title:'Von Donegal über Almería bis Atlético',text:'Franke kam 2035 für €8,5 Mio. von Feyenoord zu Finn Harps. In der irischen Liga absolvierte er 19 Spiele, erzielte ein Tor und bereitete vier weitere Treffer vor. Nach einer Leihe zu Swansea wechselte er 2036/37 für €2,6 Mio. zu Almería, wo seine Karriere deutlich Fahrt aufnahm.'},
      {title:'In Spanien wird aus dem ehemaligen Harp ein Torjäger',text:'Bei Almería entwickelte sich Franke zu einem produktiven Offensivspieler. Seine Ligabilanz enthält unter anderem Spielzeiten mit 17 Toren 2038/39 sowie 16 Toren und sechs Vorlagen 2040/41. Der Wechsel zu Atlético ist deshalb kein Zufallsprodukt, sondern der nächste Schritt einer Karriere, die nach dem Abschied aus Donegal erst richtig beschleunigte.'},
      {title:'Die Klausel macht einen alten Transfer wieder wertvoll',text:'Finn Harps verkaufte Franke einst für deutlich weniger, als sie selbst für ihn gezahlt hatten. Die 30-Prozent-Klausel verschob jedoch einen Teil des wirtschaftlichen Potenzials in die Zukunft. Jetzt zahlt sich genau diese Geduld aus: Die Spielmeldung weist €6,25 Mio. Weiterverkaufserlös aus.'},
      {title:'Noch einmal Geld, ohne einen Kaderplatz zu brauchen',text:'Zusätzlich erhält Finn Harps €300.000 als Solidaritätszahlung. Ausbildungsanteile gehen an IVOZ und Feyenoord. Für die Harps bleibt trotzdem ein erheblicher unerwarteter Zufluss aus einem Spieler, der sportlich längst anderswo zuhause ist.'},
      {title:'Ein Muster für die Transferstrategie',text:'Nicht jeder junge Spieler muss bei Finn Harps selbst zum Superstar werden. Entscheidend ist, Entwicklungspotenzial nicht vollständig aus der Hand zu geben. Frankes Weg zeigt, wie Weiterverkaufsklauseln aus einem zunächst mäßigen Verkauf Jahre später doch noch ein gutes Geschäft machen können.'}
    ],
    strengthsTitle:'WARUM DIE KLAUSEL GOLD WERT WAR',strengthsHeading:'Wertschöpfung nach dem Abschied',
    strengths:['€6,25 Mio. aus der Weiterverkaufsklausel','zusätzlich €300.000 Solidaritätszahlung','Atlético zahlt €20,5 Mio. für den ehemaligen Harp','Franke entwickelt sich nach seinem Abschied weiter','Kein sportlicher Kaderplatz nötig, um finanziell zu profitieren'],
    vulnerabilitiesTitle:'DER URSPRÜNGLICHE HAKEN',vulnerabilitiesHeading:'Nicht jeder Transfer funktioniert sofort',
    vulnerabilities:['Franke kam 2035 für €8,5 Mio. und spielte nur 19 Ligapartien für Finn Harps','Der direkte Verkauf zu Almería lag mit €2,6 Mio. deutlich unter der ursprünglichen Ablöse','Der langfristige Wert entstand erst durch die Klausel und seine spätere Entwicklung in Spanien'],
    verdictHeading:'Manchmal ist die beste Transferarbeit Jahre alt',
    verdict:'Franke wurde in Donegal nicht zur großen Erfolgsgeschichte auf dem Platz. Genau deshalb ist dieser Nachschlag interessant: Gute Transferarbeit endet nicht zwingend mit dem Verkauf. Eine klug gesetzte Weiterverkaufsklausel hält den Verein am Entwicklungspfad eines Spielers beteiligt. Jahre später wird aus einem ehemaligen Harp ein Atlético-Spieler und aus einer alten Vertragszeile plötzlich wieder echtes Transferbudget.',
    sourcesHeading:'Bestätigte Spieldaten',sourcesNote:'Der Beitrag basiert auf der Football-Manager-Meldung zum Wechsel von Mitch Franke zu Atlético de Madrid sowie seiner sichtbaren Karrierehistorie.',
    sources:['Mitch Franke: Almería → Atlético de Madrid · €20,5 Mio. · 02.08.2041','Finn Harps: €6,25 Mio. aus 30-%-Weiterverkaufsklausel','Finn Harps: €300.000 Solidaritätszahlung','Karriere: Finn Harps 2035 · Almería ab 2036/37 · Atlético ab 2041/42']
  });

  upsert(window.FM_NEWS,{
    id:'2041-08-02-mitch-franke-sell-on',date:'2041-08-02',season:2041,category:'Ehemalige Harps',accent:'gold',featured:false,
    eyebrow:'FORMER HARPS · MITCH FRANKE → ATLÉTICO',title:'Franke bringt den Harps Jahre später noch €6,25 Mio.',
    summary:'Atlético de Madrid verpflichtet Mitch Franke für €20,5 Mio. von Almería. Eine alte 30-%-Weiterverkaufsklausel spült laut Spielmeldung €6,25 Mio. nach Donegal, dazu kommen €300.000 Solidaritätszahlung.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','mitch-franke','atletico-madrid','almeria']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-08-02';
    season.changes=season.changes||{notes:[]};
    const note='02.08.2041: Ex-Harp Mitch Franke wechselt für €20,5 Mio. von Almería zu Atlético de Madrid. Finn Harps kassiert laut Spielmeldung €6,25 Mio. aus einer 30-%-Weiterverkaufsklausel plus €300.000 Solidaritätszahlung.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }
})();