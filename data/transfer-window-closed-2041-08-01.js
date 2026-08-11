(()=>{
  window.FM_TRANSFERS=window.FM_TRANSFERS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]={...list[index],...item};else list.push(item);
  };

  upsert(window.FM_TRANSFERS,{
    id:'2041-daniele-di-maio-finn-harps',date:'2041-07-31',completionDate:'2041-07-31',season:2041,direction:'in',status:'completed',
    player:'Daniele Di Maio',from:'Juventus',to:'Finn Harps',fee:33000000,feeLabel:'€33 Mio.',budgetCharge:28000000,budgetChargeLabel:'€28 Mio. Transferbudget',
    sellOnProfitRate:0.30,sellOnProfitLabel:'30 % Gewinnbeteiligung bei Weiterverkauf an Juventus',
    contractStart:'2041-07-31',contractUntil:'2045-12-31',wage:82000,wageLabel:'€82.000 pro Woche',playingTime:'Stammspieler',
    annualRaise:'5 %',loyaltyBonus:3000000,appearanceFee:1500,cleanSheetBonus:14000,teamOfYearBonus:150000,unusedSubFee:375,
    championsLeagueTitleBonus:275000,agentFee:325000,medicalStatus:'Ausgezeichneter Gesundheitszustand',
    note:'Der 20-jährige Defensivspieler kommt am Deadline Day von Juventus. Im offiziellen irischen Fensterabschluss wird der Wechsel als Top-Transfer des Deadline Day geführt.'
  });

  upsert(window.FM_TRANSFERS,{
    id:'2041-radim-maly-real-zaragoza',date:'2041-07-31',completionDate:'2041-07-31',season:2041,direction:'out',status:'completed',
    player:'Radim Malý',from:'Finn Harps',to:'Real Zaragoza',fee:12000000,feeLabel:'€12 Mio.',
    trainingCompensation:[
      {club:'Slovan Liberec',rate:0.035,amount:420000,label:'3,5 % · €420K'},
      {club:'AEK',rate:0.015,amount:179000,label:'1,5 % · €179K'}
    ],
    note:'Finn Harps verkauft den 26-jährigen Innenverteidiger bei nur noch knapp über einem Jahr Vertragslaufzeit. Malý wurde 2040 mit den Harps irischer Meister.'
  });

  [
    {id:'2041-07-31-daniele-di-maio-signing',date:'2041-07-31',player:'Daniele Di Maio',type:'transfer',title:'Deadline-Day-Transfer perfekt',detail:'Daniele Di Maio wechselt für €33 Mio. von Juventus zu Finn Harps. Vertrag bis 31.12.2045, €82.000 pro Woche, Rolle Stammspieler; Juventus erhält 30 % Gewinnbeteiligung bei einem Weiterverkauf.'},
    {id:'2041-07-31-radim-maly-zaragoza',date:'2041-07-31',player:'Radim Malý',type:'transfer',title:'Malý wechselt zu Real Zaragoza',detail:'Der 26-jährige Innenverteidiger verlässt Finn Harps für €12 Mio. Richtung Real Zaragoza. Slovan Liberec und AEK erhalten Ausbildungsentschädigungen.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const diMaio=(window.FM_PLAYERS||[]).find(p=>p.id==='daniele-di-maio'||p.name==='Daniele Di Maio');
  if(diMaio){
    Object.assign(diMaio,{
      profileDate:'2041-07-31',currentClub:'Finn Harps',status:'Finn Harps · Stammspieler',availability:'Verfügbar',
      transferStatus:'Transfer abgeschlossen',transferStage:'completed',transferConfirmed:true,transferFee:'€33 Mio.',transferDate:'31.07.2041',
      contractUntil:'31.12.2045',wage:'€82.000 pro Woche',medicalStatus:'Ausgezeichneter Gesundheitszustand',
      contractDetails:{annualRaise:'5 %',loyaltyBonus:'€3 Mio.',appearanceFee:'€1.500',cleanSheetBonus:'€14.000',teamOfYearBonus:'€150.000',unusedSubFee:'€375',championsLeagueTitleBonus:'€275.000',agentFee:'€325.000'},
      sellOnClause:'30 % Gewinnbeteiligung bei Weiterverkauf an Juventus'
    });
    diMaio.careerNarrative=diMaio.careerNarrative||[];
    const note='31.07.2041: Finn Harps verpflichtet Daniele Di Maio am Deadline Day für €33 Mio. von Juventus. Der 20-Jährige unterschreibt bis Ende 2045 und kommt als Stammspieler.';
    if(!diMaio.careerNarrative.includes(note))diMaio.careerNarrative.push(note);
  }

  const maly=(window.FM_PLAYERS||[]).find(p=>p.id==='radim-maly'||p.name==='Radim Malý');
  if(maly){
    Object.assign(maly,{profileDate:'2041-07-31',currentClub:'Real Zaragoza',status:'Ehemaliger Finn-Harps-Spieler',transferStatus:'Zu Real Zaragoza gewechselt',transferStage:'completed',transferFee:'€12 Mio.',transferDate:'31.07.2041'});
    maly.careerNarrative=maly.careerNarrative||[];
    const note='31.07.2041: Radim Malý verlässt Finn Harps für €12 Mio. und wechselt zu Real Zaragoza.';
    if(!maly.careerNarrative.includes(note))maly.careerNarrative.push(note);
  }

  const reportId='2041-08-01-transferfenster-sommer-abschluss';
  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Transferanalyse',date:'2041-08-01',competition:'Transfermarkt',fixtureDate:'Fenster geschlossen · 01.08.2041',
    home:'Finn Harps',away:'Sommertransferfenster 2041',score:'GESCHLOSSEN',location:'Donegal · Irland',
    headline:'Deadline Day setzt den Schlusspunkt: Di Maio kommt, Malý geht',
    subheadline:'Finn Harps verpflichtet Juventus-Wunderkind Daniele Di Maio für €33 Mio. und verkauft Radim Malý für €12 Mio. nach Zaragoza. Der offizielle Fensterabschluss führt die Harps als größten Geldgeber Irlands und Escárcega als Top-Geschäft.',
    label:'TRANSFERFENSTER GESCHLOSSEN · SOMMER 2041',
    heroStat:{label:'Deadline-Day-Toptransfer',value:'€33 Mio.',note:'Daniele Di Maio · Juventus → Finn Harps'},
    backlink:{href:'kaderplanung.html',label:'← ZUR KADERPLANUNG'},
    intro:'Kurz vor Mitternacht steht der Sommerumbau der Finn Harps endgültig. Die letzte große Bewegung betrifft direkt die Innenverteidigung: Daniele Di Maio kommt für 33 Millionen Euro von Juventus, Radim Malý verlässt den Klub für 12 Millionen Euro Richtung Real Zaragoza. Damit wird aus der zuvor diskutierten Verjüngung ein vollzogener Kaderwechsel.',
    sections:[
      {title:'Di Maio ist der große Deadline-Day-Deal',text:'Der 20-jährige Daniele Di Maio unterschreibt bis zum 31. Dezember 2045 und erhält 82.000 Euro pro Woche. Finn Harps sagt ihm die Rolle als Stammspieler zu. Die Ablöse beträgt 33 Millionen Euro, wovon 28 Millionen das aktuelle Transferbudget belasten. Juventus sichert sich zusätzlich 30 Prozent Gewinnbeteiligung bei einem späteren Weiterverkauf.'},
      {title:'Ein teurer Vertrag, aber klare Kontrolle',text:'Zum Paket gehören drei Millionen Euro Loyalitätsbonus, 325.000 Euro Beratergebühr und eine jährliche Gehaltssteigerung von fünf Prozent. Dazu kommen leistungsabhängige Prämien, unter anderem 14.000 Euro pro Spiel ohne Gegentor und 275.000 Euro bei einem Champions-League-Titel. Der Medizincheck bescheinigt einen ausgezeichneten Gesundheitszustand.'},
      {title:'Malý macht den Platz frei',text:'Fast zeitgleich wechselt Radim Malý für 12 Millionen Euro zu Real Zaragoza. Sein Vertrag bei Finn Harps hatte nur noch knapp über ein Jahr Laufzeit. Slovan Liberec erhält 3,5 Prozent beziehungsweise 420.000 Euro Ausbildungsentschädigung, AEK weitere 1,5 Prozent beziehungsweise 179.000 Euro.'},
      {title:'Der Fensterabschluss zeichnet ein klares Bild',text:'Der offizielle Football-Manager-Rückblick meldet für Irland 70 abgeschlossene Transfers und insgesamt 48 Millionen Euro Ausgaben. Finn Harps werden mit 45 Millionen Euro als Verein mit den höchsten Ausgaben des Fensters geführt und zugleich mit vier Abgängen als Klub mit den meisten Abgängen.'},
      {title:'Escárcega bleibt das Geschäft des Fensters',text:'Trotz Di Maios 33-Millionen-Transfer führt der Rückblick Emerson Escárcegas ablösefreien Wechsel von Sevilla zu Finn Harps als Top-Geschäft des Transferfensters. Di Maio erhält dafür die separate Auszeichnung als Top-Transfer des Deadline Day.'}
    ],
    strengthsTitle:'WAS DER SOMMERUMBAU ERREICHT',strengthsHeading:'Qualität, Verjüngung und Marktwert',
    strengths:['Di Maio: 20 Jahre · €33 Mio. · Vertrag bis Ende 2045','Malý für €12 Mio. verkauft bei kurzer Restlaufzeit','Escárcega ablösefrei als Top-Geschäft des Fensters','Di Maio als Top-Transfer des Deadline Day','Innenverteidigung gezielt verjüngt'],
    vulnerabilitiesTitle:'DER PREIS DES UMBAUS',vulnerabilitiesHeading:'Di Maio setzt einen neuen Gehaltsmaßstab',
    vulnerabilities:['€82.000 Wochengehalt bereits mit 20 Jahren','5 % jährliche Gehaltssteigerung','€3 Mio. Loyalitätsbonus','30 % Gewinnbeteiligung bei Weiterverkauf an Juventus'],
    verdictHeading:'Der Plan ist nicht mehr Theorie',
    verdict:'Der Tausch Malý gegen Di Maio fasst die Transferstrategie dieses Sommers in einer Bewegung zusammen. Finn Harps verkauft einen soliden 26-Jährigen mit begrenzter Vertragskontrolle und investiert deutlich mehr in einen 20-Jährigen, der sofort spielen und zugleich über Jahre Wert entwickeln soll. Das ist kein Sparfenster, sondern das Transferfenster eines Klubs, der seine europäische Stellung verteidigen will.',
    sourcesHeading:'Bestätigte Transferdaten',sourcesNote:'Der Bericht basiert auf den Football-Manager-Bestätigungen des Di-Maio-Transfers, des Malý-Verkaufs und der offiziellen Zusammenfassung des geschlossenen irischen Transferfensters.',
    sources:['Daniele Di Maio: Juventus → Finn Harps · €33 Mio. · 31.07.2041','Radim Malý: Finn Harps → Real Zaragoza · €12 Mio. · 31.07.2041','Irisches Transferfenster: 70 abgeschlossene Transfers · €48 Mio. Gesamtausgaben','Top-Geschäft: Emerson Escárcega ablösefrei · Top-Deadline-Day-Transfer: Daniele Di Maio €33 Mio.']
  });

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-08-01-transferfenster-geschlossen',date:'2041-08-01',season:2041,category:'Transfer',accent:'gold',featured:true,
    eyebrow:'TRANSFERFENSTER GESCHLOSSEN · FINN HARPS',title:'Di Maio kommt, Malý geht: Der Sommerumbau steht',
    summary:'Finn Harps beendet das Transferfenster mit dem €33-Mio.-Transfer von Daniele Di Maio und dem €12-Mio.-Verkauf von Radim Malý. Escárcega wird im offiziellen Rückblick als Top-Geschäft des Fensters geführt.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','daniele-di-maio','radim-maly','juventus','real-zaragoza','emerson-escarcega']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-08-01';
    season.transferHeadline='Sommerfenster geschlossen: Di Maio kommt für €33 Mio. von Juventus, Malý geht für €12 Mio. zu Real Zaragoza. Escárcega wird als Top-Geschäft des Fensters geführt.';
    season.changes=season.changes||{notes:[]};
    const note='01.08.2041: Das irische Transferfenster ist geschlossen. Finn Harps verpflichtet Daniele Di Maio für €33 Mio. von Juventus und verkauft Radim Malý für €12 Mio. an Real Zaragoza. Der offizielle Rückblick führt Escárcega als Top-Geschäft und Di Maio als Top-Deadline-Day-Transfer.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }
})();