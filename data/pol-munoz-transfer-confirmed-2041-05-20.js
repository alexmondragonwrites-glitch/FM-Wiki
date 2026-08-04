(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_TRANSFER_RUMOURS=window.FM_TRANSFER_RUMOURS||[];
  window.FM_TRANSFERS=window.FM_TRANSFERS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const report={
    id:'2041-05-20-pol-munoz-transfer-bestaetigt',type:'Transfermeldung',date:'2041-05-20',competition:'Transfermarkt',
    fixtureDate:'Wechsel am 1. Juli 2041',home:'Finn Harps · Pol Muñoz',away:'Coventry City',location:'Coventry → Donegal',
    headline:'Pol Muñoz unterschreibt: Finn Harps vollendet den Mittelfeldwechsel',
    subheadline:'Der 20-jährige Spielmacher kommt für 12,25 Millionen Euro aus Coventry und soll zunächst als Rotationsspieler wachsen. Ab 2042 ist der Schritt zum Stammspieler vereinbart.',
    label:'TRANSFER BESTÄTIGT · SOMMER 2041',
    heroStat:{label:'Ablösesumme',value:'€12,25 Mio.',note:'Vertrag bis 31.12.2045 · €35.500 pro Woche · Wechsel am 1. Juli'},
    backlink:{href:'kaderplanung.html',label:'← ZUR KADERPLANUNG'},
    intro:'Zwei Tage nach dem bestätigten Abschied von Vinícius ist auch die andere Hälfte des geplanten Mittelfeldumbaus perfekt. Pol Muñoz hat den Vertrag bei Finn Harps unterschrieben, den Medizincheck mit ausgezeichnetem Gesundheitszustand bestanden und wechselt am 1. Juli 2041 von Coventry City nach Donegal. Der Klub tauscht damit Erfahrung gegen Entwicklungspotenzial, ohne seine sportliche Gegenwart aus den Augen zu verlieren.',
    sections:[
      {title:'Aus dem Gerücht wird ein klarer Kaderplan',text:'Der Transfer bestätigt, dass Finn Harps Vinícius nicht durch einen möglichst ähnlichen Spieler ersetzen wollte. Muñoz bringt ein anderes Profil: mehr Übersicht, Improvisation und letzter Pass, dafür weniger körperliche und taktische Fertigkeit. Roberts, Frame, O’Kane und Mašić bilden weiterhin das stabile Gerüst. Muñoz soll diesem Mittelfeld eine zusätzliche kreative Sprache geben.'},
      {title:'Rotation 2041, Stammplatzperspektive 2042',text:'Die vereinbarte Einsatzzeit ist ungewöhnlich sauber gestaffelt. In seiner ersten Saison kommt Muñoz als Rotationsspieler, ab 2042 ist die Rolle als Stammspieler vorgesehen. Damit verspricht Finn Harps weder einen sofortigen Freifahrtschein noch bloß vage Entwicklung. Der Klub kauft Zeit für Anpassung und setzt zugleich einen klaren Erwartungshorizont.'},
      {title:'Ein Vertrag mit Wachstumsprämie',text:'Muñoz erhält 35.500 Euro pro Woche und unterschreibt bis Ende 2045. Die jährliche Gehaltssteigerung von zehn Prozent lässt den Vertrag mit seiner sportlichen Bedeutung wachsen. Hinzu kommen ein Loyalitätsbonus von 1,2 Millionen Euro, 775 Euro Auflaufprämie, 5.750 Euro Vorlagenprämie, 400 Euro Ersatzspielerprämie und 65.000 Euro für einen Champions-League-Titel.'},
      {title:'Der Preis bleibt unter Kontrolle',text:'Die Ablöse beträgt 12,25 Millionen Euro, während das Transferbudget mit 12,5 Millionen Euro belastet wird. Danach stehen weiterhin 48,5 Millionen Euro zur Verfügung. Der Transfer ist damit kein finanzieller Kraftakt, sondern eine gezielte Umschichtung innerhalb eines inzwischen sehr großen Handlungsspielraums.'},
      {title:'Sevilla verdient am nächsten Entwicklungsschritt',text:'Drei Prozent der Transfersumme gehen als Ausbildungsentschädigung an Sevilla. Rechnerisch entspricht das 367.500 Euro. Der frühere Ausbildungsklub profitiert damit noch einmal von einem Spieler, der sich dort nicht durchsetzte, über Coventry Spielpraxis sammelte und nun beim amtierenden Champions-League- und Klub-WM-Sieger seine bislang größte Bühne erhält.'},
      {title:'Die eigentliche Prüfung beginnt erst jetzt',text:'Muñoz wird nicht daran gemessen, ob er schon bessere Geschichten geschrieben hat als die Spieler im Harps-Kader. Er wird daran gemessen, ob er in diesem Umfeld schneller lernt als anderswo. Seine Kreativität ist bereits außergewöhnlich. Entscheidend werden Grundfitness, Einsatzfreude, Stellungsspiel und die Anpassung an das Tempo einer Mannschaft sein, die in Europa nicht mehr überrascht, sondern gejagt wird.'}
    ],
    keyDuelsTitle:'DER TRANSFER IM PROFIL',keyDuelsHeading:'Vier Linien des neuen Harps-Projekts',
    keyDuels:[
      {title:'27 wird 20',text:'Vinícius geht, Muñoz kommt. Finn Harps verjüngt den zentralen Kreativplatz um sieben Jahre.'},
      {title:'Rotation vor Verantwortung',text:'2041 dient der Anpassung, ab 2042 soll Muñoz als Stammspieler tragen.'},
      {title:'Kreativität statt Kopie',text:'Muñoz ersetzt nicht Vinícius’ Funktionsprofil, sondern erweitert die Möglichkeiten neben Roberts und Frame.'},
      {title:'Budget bleibt mächtig',text:'Nach der Reservierung von 12,5 Millionen Euro verbleiben 48,5 Millionen Euro Transferbudget.'}
    ],
    verdictHeading:'Der Dreifachgewinn ist vollständig',
    verdict:'Vinícius erhält seinen Wechsel nach Spanien, Celta Vigo einen erfahrenen Achter und Finn Harps mit Muñoz einen jüngeren kreativen Baustein. Coventry erzielt eine bedeutende Ablöse für einen Spieler aus einem schwierigen Vereinsjahr, während Muñoz aus einem Championship-Absteiger direkt in die Welt eines europäischen Titelverteidigers springt. Der Deal ist kein Beweis, dass er bereits fertig ist. Er ist ein starkes Zeichen dafür, dass Finn Harps inzwischen Entwicklung nicht nur verspricht, sondern mit Infrastruktur, Einsatzplan und sportlicher Bühne glaubwürdig verkaufen kann.',
    sourcesHeading:'Bestätigte Vertrags- und Transferdaten',
    sourcesNote:'Der Wechsel wurde im Football Manager durch Vertragsunterschrift und bestandenen Medizincheck bestätigt. Vollzug ist am 1. Juli 2041.',
    sources:['Ablösesumme: €12,25 Mio.','Budgetbelastung: €12,5 Mio. · verbleibendes Transferbudget €48,5 Mio.','Vertrag: 01.07.2041 bis 31.12.2045 · €35.500 pro Woche','Einsatzzeit: 2041 Rotationsspieler · 2042 Stammspieler','Ausbildungsentschädigung Sevilla: 3 %']
  };

  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-05-20-pol-munoz-transfer-bestaetigt',date:'2041-05-20',season:2041,category:'Transfer',accent:'gold',
    eyebrow:'TRANSFER BESTÄTIGT · POL MUÑOZ',title:'Muñoz unterschreibt bei Finn Harps',
    summary:'Der 20-jährige Kreativspieler kommt für 12,25 Millionen Euro aus Coventry. Er startet als Rotationsspieler und soll ab 2042 zum Stammspieler aufsteigen.',
    href:'presse.html?id=2041-05-20-pol-munoz-transfer-bestaetigt',entities:['finn-harps','pol-munoz','coventry-city','sevilla','season-2041'],featured:true
  });

  (window.FM_NEWS||[]).forEach(item=>{
    if(item.id==='2041-05-18-klub-wm-auslosung-gruppe-h'||item.id==='2041-05-18-transfergeruechte-munoz-vinicius')item.featured=false;
  });

  const rumour=window.FM_TRANSFER_RUMOURS.find(x=>x.id==='2041-05-18-munoz-vinicius');
  if(rumour){
    rumour.status='confirmed';
    rumour.outgoing={
      player:'Vinícius',club:'Celta Vigo',offer:'€18 Mio.',status:'Vertrag unterschrieben',completionDate:'01.07.2041',
      note:'10 % Spielerbeteiligung; 4 % Ausbildungsentschädigung an Grêmio'
    };
    rumour.incoming={
      player:'Pol Muñoz',club:'Coventry City',fee:'€12,25 Mio.',status:'Vertrag unterschrieben',completionDate:'01.07.2041',
      role:'2041 Rotationsspieler · 2042 Stammspieler',note:'Ausgezeichneter Gesundheitszustand; 3 % Ausbildungsentschädigung an Sevilla'
    };
    rumour.managerTrip='Beide Seiten des geplanten Mittelfeldwechsels sind bestätigt. Vinícius geht zu Celta Vigo, Pol Muñoz kommt von Coventry City.';
  }

  upsert(window.FM_TRANSFERS,{
    id:'2041-pol-munoz-finn-harps',date:'2041-05-20',completionDate:'2041-07-01',season:2041,direction:'in',status:'confirmed',
    player:'Pol Muñoz',from:'Coventry City',to:'Finn Harps',fee:12250000,feeLabel:'€12,25 Mio.',
    budgetCharge:12500000,budgetChargeLabel:'€12,5 Mio.',remainingTransferBudget:48500000,remainingTransferBudgetLabel:'€48,5 Mio.',
    trainingCompensationRate:0.03,trainingCompensation:367500,trainingCompensationLabel:'€367.500 · 3 % an Sevilla',
    contractStart:'2041-07-01',contractUntil:'2045-12-31',wage:35500,wageLabel:'€35.500 pro Woche',
    playingTime:'Rotationsspieler',futurePlayingTime:'2042 · Stammspieler',medicalStatus:'Ausgezeichneter Gesundheitszustand',
    annualRaise:'10 %',loyaltyBonus:1200000,appearanceFee:775,assistBonus:5750,unusedSubFee:400,
    championsLeagueTitleBonus:65000,agentFee:100000
  });

  const pol=(window.FM_PLAYERS||[]).find(x=>x.id==='pol-munoz');
  if(pol){
    Object.assign(pol,{
      selectedPosition:'Zugang 2041',info:'Transfer bestätigt · Wechsel am 01.07.2041',status:'Zugang bestätigt · Rotationsspieler',
      availability:'Zugang bestätigt',currentClub:'Coventry City bis 30.06.2041',futureClub:'Finn Harps',
      transferStatus:'Transfer bestätigt · Wechsel am 01.07.2041',transferStage:'confirmed',transferConfirmed:true,
      transferFee:'€12,25 Mio.',transferDate:'20.05.2041',transferCompletionDate:'01.07.2041',medicalStatus:'Ausgezeichneter Gesundheitszustand',
      contractUntil:'31.12.2045 bei Finn Harps · ab 01.07.2041',wage:'€35.500 pro Woche bei Finn Harps',
      proposedContract:{
        start:'01.07.2041',until:'31.12.2045',wage:'€35.500 pro Woche',playingTime:'Rotationsspieler',futurePlayingTime:'2042 · Stammspieler',
        annualRaise:'10 %',loyaltyBonus:'€1,2 Mio.',appearanceFee:'€775',assistBonus:'€5.750',unusedSubFee:'€400',
        championsLeagueTitleBonus:'€65.000',agentFee:'€100.000'
      }
    });
    const note='Am 20. Mai 2041 unterschrieb Pol Muñoz bei Finn Harps. Der Wechsel von Coventry City wird am 1. Juli für 12,25 Millionen Euro vollzogen; ab 2042 ist die Rolle als Stammspieler vorgesehen.';
    if(!((pol.careerNarrative||[]).includes(note)))pol.careerNarrative=[...(pol.careerNarrative||[]),note];
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season)season.transferHeadline='Mittelfeldwechsel perfekt: Vinícius geht für €18 Mio. zu Celta Vigo, Pol Muñoz kommt für €12,25 Mio. aus Coventry und soll ab 2042 Stammspieler werden.';
})();