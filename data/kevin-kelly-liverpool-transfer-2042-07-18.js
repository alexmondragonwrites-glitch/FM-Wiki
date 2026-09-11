(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_TRANSFER_UPDATES=window.FM_TRANSFER_UPDATES||[];
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-18';
  const reportId='2042-07-18-kevin-kelly-liverpool-transfer';

  const transfer={
    id:'2042-07-18-kevin-kelly-liverpool',date,type:'departure',player:'Kevin Kelly',from:'Finn Harps',to:'Liverpool',
    age:22,position:'Verteidiger',fee:'€24 Mio.',maxFee:'bis zu €26,5 Mio.',
    clauses:{internationalAppearances:'€2,3 Mio. nach 20 Länderspieleinsätzen',sellOn:'30 % Gewinnbeteiligung bei Weiterverkauf'},
    budgetImpact:'€14,5 Mio. werden nach Abschluss dem Transferbudget von Finn Harps hinzugefügt.',
    status:'Vertrag bei Liverpool unterschrieben; Transfer kann abgeschlossen werden.',
    context:'Kelly verlässt Finn Harps unmittelbar vor dem WM-Finale Mexiko gegen Irland. Er bleibt Teil des irischen WM-Kaders, geht in das Endspiel aber nun als Liverpool-Spieler.'
  };
  upsert(window.FM_TRANSFER_UPDATES,transfer);

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-18-kevin-kelly-to-liverpool',date,player:'Kevin Kelly',type:'transfer',
    title:'Kevin Kelly wechselt zu Liverpool',
    detail:'Der 22-jährige Verteidiger verlässt Finn Harps für €24 Mio. Richtung Liverpool. Durch Klauseln kann das Paket bis auf €26,5 Mio. steigen. Zusätzlich erhält Finn Harps eine 30-prozentige Gewinnbeteiligung bei einem Weiterverkauf.'
  });

  const wc=window.FM_WORLD_CUP['2042'];
  if(wc){
    wc.updated=date;
    wc.finnHarps=wc.finnHarps||{};
    if(wc.finnHarps.finalAngle){
      wc.finnHarps.finalAngle.ireland=(wc.finnHarps.finalAngle.ireland||[]).filter(name=>name!=='Kevin Kelly');
      wc.finnHarps.finalAngle.note='Vor dem Finale wechselt Kevin Kelly von Finn Harps zu Liverpool. Damit stehen auf irischer Seite noch neun aktuelle Harps-Spieler im Kader; auf mexikanischer Seite wartet Emerson Escárcega. Mindestens ein aktueller Harps-Spieler wird weiterhin Weltmeister.';
      wc.finnHarps.finalAngle.transferUpdate='Kevin Kelly wechselt am 18.07.2042 für €24 Mio. zu Liverpool und geht damit nicht mehr als aktueller Harps-Spieler ins WM-Finale.';
    }
    if(wc.finalSquadComparison&&wc.finalSquadComparison.ireland){
      wc.finalSquadComparison.ireland.profile='Irland wird vor dem Finale von einem neun Spieler starken aktuellen Finn-Harps-Kern getragen. Kevin Kelly ist zwei Tage vor dem Endspiel für €24 Mio. zu Liverpool gewechselt. Andrews von Monaco, Duggan von Everton, O’Leary von Caen und weitere Akteure ergänzen das Harps-Rückgrat mit eigener Qualität.';
    }
    wc.finalTransferNotes=wc.finalTransferNotes||[];
    const note='18.07.2042: Kevin Kelly wechselt für €24 Mio. von Finn Harps zu Liverpool. Er bleibt im irischen WM-Kader und kann im Finale gegen Mexiko spielen.';
    if(!wc.finalTransferNotes.includes(note))wc.finalTransferNotes.push(note);
  }

  const finalReport=window.FM_PRESS_REPORTS.find(item=>item&&item.id==='2042-07-13-mexico-ireland-world-cup-final-mega-preview');
  if(finalReport&&Array.isArray(finalReport.sections)){
    const section=finalReport.sections.find(item=>item&&item.title==='Der Harps-Wahnsinn erreicht seinen Gipfel');
    if(section)section.text='Auf irischer Seite stehen nach Kevin Kellys Wechsel zu Liverpool noch neun aktuelle Finn-Harps-Spieler im Kader. Auf mexikanischer Seite wartet Emerson Escárcega. Kelly selbst bleibt natürlich Teil des irischen WM-Kaders, geht aber nun als Liverpool-Spieler ins Endspiel. Egal wie das Finale endet: Mindestens ein aktueller Harps-Spieler wird Weltmeister.';
  }

  const season=(window.FM_SEASONS||[]).find(item=>item&&(item.year===2042||item.season===2042));
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Kevin Kelly wechselt für €24 Mio. von Finn Harps zu Liverpool.';
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='18.07.2042: Kevin Kelly verlässt Finn Harps für €24 Mio. Richtung Liverpool. Durch Klauseln kann die Ablöse bis auf €26,5 Mio. steigen.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,type:'Transfer',date,competition:'Finn Harps · Transfermarkt',
    headline:'Kelly nach Liverpool: Finn Harps gibt den nächsten Nationalspieler ab',
    subheadline:'Der 22-jährige Kevin Kelly wechselt für €24 Mio. zu Liverpool. Mit Klauseln kann das Paket bis auf €26,5 Mio. steigen – zwei Tage vor dem WM-Finale bleibt er Teil von Ryans Irland, nun aber als Liverpool-Spieler.',
    label:'FINN HARPS · TRANSFER · 18. JULI 2042',
    heroStat:{label:'ABLÖSE',value:'€24 MIO.',note:'bis zu €26,5 Mio. · Liverpool'},
    backlink:{href:'kaderplanung.html',label:'← ZUR KADERPLANUNG'},
    intro:'Mitten in der WM-Finalwoche verändert sich auch bei Finn Harps der Kader. Kevin Kelly hat bei Liverpool unterschrieben und verlässt Donegal für eine Grundablöse von €24 Mio. Der Deal kann durch Klauseln noch bis auf €26,5 Mio. anwachsen.',
    sections:[
      {title:'Liverpool greift beim Harps-Kern zu',text:'Kelly ist erst 22 Jahre alt und gehört bereits zum irischen WM-Aufgebot. Sein Wechsel unterstreicht erneut, wie stark die internationale Wahrnehmung der Harps-Spieler inzwischen ist: Ein Premier-League-Gigant holt einen Verteidiger direkt aus Donegal.'},
      {title:'Das Transferpaket',text:'Die Grundablöse beträgt €24 Mio. Sichtbar vereinbart sind weitere €2,3 Mio. nach 20 Länderspieleinsätzen sowie 30 Prozent Gewinnbeteiligung bei einem Weiterverkauf. Laut Transfermeldung kann die Gesamtsumme bis auf €26,5 Mio. steigen.'},
      {title:'€14,5 Mio. zurück ins Transferbudget',text:'Nach Abschluss des Deals werden laut Vorstand €14,5 Mio. dem Transferbudget von Finn Harps gutgeschrieben. Der Verkauf schafft damit sofort neuen finanziellen Spielraum.'},
      {title:'Ein kurioser Zeitpunkt',text:'Kelly wechselt unmittelbar vor dem WM-Finale Mexiko gegen Irland. Für die Nationalmannschaft ändert sich nichts: Er bleibt im Kader von Ryan Flannigan. Für die große Harps-Finalgeschichte aber schon – Irland geht nun mit neun aktuellen Harps-Spielern statt zehn ins Endspiel.'}
    ],
    verdictHeading:'Sportlich ein Verlust, strategisch ein weiterer Beweis der Harps-Dimension',
    verdict:'Liverpool zahlt bereits die Grundablöse von €24 Mio. für einen 22-jährigen irischen Verteidiger aus Finn Harps. Allein der Zielklub zeigt, in welcher europäischen Gewichtsklasse sich Donegal inzwischen bewegt.',
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen.',items:[
      '„Von Donegal nach Anfield und zwei Tage später vielleicht Weltmeister – völlig normale Woche für Kevin Kelly.“',
      '„Wenn Liverpool inzwischen direkt bei Harps einkauft, muss niemand mehr fragen, ob diese Spieler internationales Topniveau haben.“',
      '„Schade ihn zu verlieren, aber €24 Millionen plus Klauseln und Beteiligung ist ein richtig großer Deal.“'
    ]},
    sources:['FM Transfermeldung · Kelly bestätigt Wechsel zu Liverpool · 18.07.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-18-kevin-kelly-liverpool',date,type:'transfer',
    title:'Kevin Kelly wechselt für €24 Mio. zu Liverpool',
    text:'Der 22-jährige Verteidiger verlässt Finn Harps Richtung Liverpool. Mit Klauseln kann die Ablöse bis auf €26,5 Mio. steigen. Kelly bleibt im irischen WM-Kader und kann im Finale gegen Mexiko spielen.',
    href:`presse.html?id=${reportId}`
  });
})();