(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_TRANSFER_RUMOURS=window.FM_TRANSFER_RUMOURS||[];
  window.FM_TRANSFERS=window.FM_TRANSFERS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const transferReport={
    id:'2041-05-18-vinicius-celta-transfer-bestaetigt',type:'Transfermeldung',date:'2041-05-18',competition:'Transfermarkt',
    fixtureDate:'Wechsel am 1. Juli 2041',home:'Finn Harps · Vinícius',away:'Celta Vigo',location:'Donegal → Vigo',
    headline:'Vinícius unterschreibt bei Celta Vigo: Der 18-Millionen-Abschied ist perfekt',
    subheadline:'Der 27-jährige Mittelfeldspieler verlässt Finn Harps zum 1. Juli. Der Transfer öffnet ihm die Tür nach Spanien und schafft den Harps finanziell wie sportlich Raum für den nächsten Entwicklungsschritt.',
    label:'TRANSFER BESTÄTIGT · SOMMER 2041',
    heroStat:{label:'Ablösesumme',value:'€18 Mio.',note:'10 % Spielerbeteiligung · 4 % Ausbildungsentschädigung an Grêmio · €10 Mio. zusätzliches Transferbudget'},
    backlink:{href:'spieler.html?id=vinicius',label:'← ZUM SPIELERPROFIL'},
    intro:'Aus einem fortgeschrittenen Gerücht ist ein unterschriebener Vertrag geworden. Vinícius hat sich mit Celta Vigo geeinigt und wird Finn Harps am 1. Juli 2041 verlassen. Der Deal verbindet drei Interessen: Celta erhält einen international erprobten Mittelfeldspieler, Vinícius bekommt mit 27 Jahren seine Chance in Spanien und Finn Harps gewinnt Budget sowie Platz für die nächste Generation.',
    sections:[
      {title:'Ein Abschied ohne Verlierer',text:'Der Transfer fühlt sich nicht nach einem sportlichen Rückschritt oder einem erzwungenen Verkauf an. Vinícius wechselt in eine attraktive Liga und kann dort noch einmal eine neue Rolle aufbauen. Celta Vigo verpflichtet einen vielseitigen Achter, der Titelrennen, Champions-League-Abende und den besonderen Druck eines gewachsenen Spitzenklubs kennt. Finn Harps verkauft wiederum zu einem Zeitpunkt, an dem der Kader den Verlust auffangen und die frei werdenden Minuten gezielt neu verteilen kann.'},
      {title:'Was von den 18 Millionen bleibt',text:'Vinícius wird mit zehn Prozent an der Ablösesumme beteiligt und erhält damit 1,8 Millionen Euro. Weitere vier Prozent, rechnerisch 720.000 Euro, gehen als Ausbildungsentschädigung an Grêmio. Vor möglichen weiteren Buchungen verbleiben Finn Harps damit rund 15,48 Millionen Euro. Der Vorstand hat zugleich zugesagt, nach Abschluss des Geschäfts zehn Millionen Euro zusätzlich dem Transferbudget bereitzustellen.'},
      {title:'Der stille Wert seiner Harps-Jahre',text:'Vinícius war nicht immer der Spieler für die spektakulärste Schlagzeile, aber häufig derjenige, der zwischen Aufbau, Verbindungsspiel und Strafraumläufen die Mannschaft zusammenhielt. Gerade in einem Kader voller junger Hochbegabter war seine Verlässlichkeit ein wichtiges Gegengewicht. Sein Abschied beendet deshalb kein gescheitertes Kapitel. Er schließt ein erfolgreiches Kapitel zum richtigen Zeitpunkt.'},
      {title:'Raum für Roberts, Frame und die nächste Idee',text:'Der Abgang verändert die Hierarchie im zentralen Mittelfeld. Jake Roberts kann mehr Verantwortung als strukturgebender Achter übernehmen, Daryl Frame bleibt die aggressive Mezzala und Cormac O’Kane der dynamische Verbindungsspieler. Zugleich entsteht ein klarer Kaderplatz für einen jungen kreativen Zugang. Die Gespräche um Pol Muñoz bekommen dadurch eine andere Logik: Er müsste Vinícius nicht kopieren, sondern könnte eine neue Variante in ein bereits tragfähiges Gerüst einbringen.'},
      {title:'Celta kauft Erfahrung, Finn Harps Zukunftsspielraum',text:'Für Celta Vigo ist die Ablöse ein Preis für sofort einsetzbare Qualität. Für Finn Harps ist sie eine Gelegenheit, Erfahrung in jüngeres Potenzial umzuschichten, ohne dabei unter Verkaufsdruck zu stehen. Genau darin liegt die Reife dieses Transfers: Der Klub muss einen verdienten Spieler nicht festhalten, um seine eigene Stärke zu beweisen.'}
    ],
    keyDuelsTitle:'DIE BILANZ DES DEALS',keyDuelsHeading:'Vier Perspektiven auf den bestätigten Wechsel',
    keyDuels:[
      {title:'Vinícius',text:'Mit 27 Jahren öffnet sich die Chance auf ein neues Kapitel in Spanien.'},
      {title:'Celta Vigo',text:'Der Klub erhält einen vielseitigen und europäisch erfahrenen Mittelfeldspieler.'},
      {title:'Finn Harps',text:'Budget, Gehaltsraum und Einsatzminuten können in die nächste Kadergeneration fließen.'},
      {title:'Grêmio',text:'Der Ausbildungsverein profitiert mit vier Prozent der Transfersumme vom weiteren Karriereweg.'}
    ],
    verdictHeading:'Ein erfolgreicher Zyklus endet, der nächste beginnt',
    verdict:'Finn Harps verliert einen guten Spieler, aber nicht die Kontrolle über seine Entwicklung. Vinícius geht mit einem europäischen Siegerprofil nach Vigo, während die Harps wirtschaftlich profitieren und sportlich Platz für Roberts, Frame, O’Kane und möglicherweise Muñoz schaffen. Es ist kein Verkauf aus Not, sondern Kaderplanung aus einer Position der Stärke.',
    sourcesHeading:'Bestätigte Transferdaten',
    sourcesNote:'Der Wechsel wurde im Football Manager durch die Vertragsunterschrift bestätigt. Vollzug ist am 1. Juli 2041. Die angegebenen Beteiligungen und die Budgetzusage entsprechen der Transfermeldung im Spiel.',
    sources:['Ablösesumme: €18 Mio.','Spielerbeteiligung Vinícius: 10 % beziehungsweise €1,8 Mio.','Ausbildungsentschädigung Grêmio: 4 %','Zusätzliches Transferbudget nach Abschluss: €10 Mio.']
  };

  const worldCupReport={
    id:'2041-05-18-klub-wm-auslosung-gruppe-h',type:'Auslosung',date:'2041-05-18',competition:'FIFA Club World Cup',
    fixtureDate:'Klub-WM 2041',home:'Gruppe H · Finn Harps',away:'Boca Juniors · Manchester City · Charlotte FC',location:'Weltbühne',
    headline:'Titelverteidiger Finn Harps erwischt die große Bühne: City, Boca und Charlotte warten',
    subheadline:'Als gesetzter Klub und amtierender Weltmeister gehen die Harps in Gruppe H. Manchester City ist der Turnierfavorit, Boca Juniors bringt südamerikanisches Gewicht und Charlotte FC die Unberechenbarkeit des Gastgebersystems.',
    label:'FIFA CLUB WORLD CUP · AUSLOSUNG 2041',
    heroStat:{label:'Gruppe H',value:'BOC · FIN · MCI · CLT',note:'Boca Juniors · Finn Harps · Manchester City · Charlotte FC'},
    backlink:{href:'saison.html',label:'← ZUR SAISON 2041'},
    intro:'Die Klub-WM-Auslosung setzt Finn Harps keinen Nebenweg, sondern ein Flutlichtschild vor die Tür. Der Titelverteidiger trifft in Gruppe H auf Boca Juniors, Manchester City und Charlotte FC. Damit bekommt die Mannschaft zugleich Tradition, den offiziellen Turnierfavoriten und einen nordamerikanischen Gegner, gegen den jede Nachlässigkeit teuer werden kann.',
    sections:[
      {title:'Manchester City ist der Prüfstein der Gruppe',text:'Manchester City wird mit einer Quote von 6,50 als Turnierfavorit geführt. Für Finn Harps ist das Duell deshalb mehr als ein prestigeträchtiges Gruppenspiel. Es ist ein direkter Vergleich mit jenem finanziellen und sportlichen Maßstab, an dem der Aufstieg aus Donegal inzwischen gemessen wird. Die Harps sind Titelverteidiger, City bleibt dennoch der Name, der die Gruppe nach außen prägt.'},
      {title:'Boca Juniors bringt eine andere Art von Druck',text:'Boca Juniors steht für einen Wettbewerb, der weniger über Tabellenlogik als über Wucht, Atmosphäre und Turniererfahrung erzählt wird. Gegen diesen Gegner wird Finn Harps nicht nur saubere Ballzirkulation brauchen, sondern Ruhe in den emotionalen Phasen. Es ist das Spiel, das der Gruppe ihren weltweiten Charakter gibt.'},
      {title:'Charlotte FC darf nicht zur Fußnote werden',text:'Zwischen den großen Namen liegt die klassische Turnierfalle. Charlotte FC wird auf dem Papier als Außenseiter erscheinen, kann aber gerade dadurch freier auftreten. Für Finn Harps wird entscheidend sein, das Spiel nicht als Zwischenstation zu behandeln. In einer kurzen Gruppenphase kann ein einziger unkonzentrierter Abend die gesamte Dramaturgie kippen.'},
      {title:'Vom Überraschungsteam zum gesetzten Titelverteidiger',text:'Die bemerkenswerteste Nachricht steht nicht nur in den Gegnernamen. Finn Harps gehört zu den gesetzten Klubs und reist als Titelverteidiger an. Der Verein wird nicht mehr als exotische Randgeschichte in einen Wettbewerb gelost. Er ist selbst einer der Fixpunkte der Auslosung. Das verändert Erwartungen, Gegnerpläne und die Art, wie jeder Punktverlust bewertet wird.'},
      {title:'Eine Gruppe, die den ganzen Harps-Weg spiegelt',text:'Boca steht für globale Fußballgeschichte, Manchester City für die moderne Supermacht und Charlotte für das wachsende nordamerikanische Spiel. Dazwischen liegt Finn Harps, ein Klub aus Donegal, der sich seinen Platz nicht gekauft, sondern Saison für Saison erarbeitet hat. Gruppe H ist deshalb nicht nur schwer. Sie ist eine verdichtete Erzählung dessen, wie weit dieser Verein gekommen ist.'}
    ],
    keyDuelsTitle:'GRUPPE H IM BLICK',keyDuelsHeading:'Die vier Rollen der Auslosung',
    keyDuels:[
      {title:'Finn Harps',text:'Titelverteidiger und gesetzter Klub. Zum ersten Mal trägt die Mannschaft die Zielscheibe von Beginn an.'},
      {title:'Manchester City',text:'Turnierfavorit mit Quote 6,50 und der sportliche Referenzpunkt der Gruppe.'},
      {title:'Boca Juniors',text:'Traditionsgewicht mit eigener Turnierkultur und hoher emotionaler Intensität.'},
      {title:'Charlotte FC',text:'Außenseiter ohne Erwartungsballast und damit gefährlicher, als der Name zunächst vermuten lässt.'}
    ],
    verdictHeading:'Keine Todesgruppe, sondern eine Weltmeisterprüfung',
    verdict:'Finn Harps kann diese Gruppe überstehen, aber nicht im Verwaltungsmodus. Gegen City braucht es Spitzenleistung, gegen Boca Haltung und gegen Charlotte vollständige Konzentration. Der Titelverteidiger hat inzwischen die Qualität für alle drei Aufgaben. Die eigentliche Veränderung liegt im Blickwinkel: Früher wäre Finn Harps die Sensation dieser Gruppe gewesen. Heute sind die Harps der Klub, den die anderen stürzen wollen.',
    sourcesHeading:'Bestätigte Auslosungsdaten',
    sourcesNote:'Die Zusammensetzung der Gruppe, der Status als Titelverteidiger und die Setzung stammen aus der Klub-WM-Auslosung im Football Manager.',
    sources:['Gruppe H: Boca Juniors, Finn Harps, Manchester City, Charlotte FC','Finn Harps: Titelverteidiger und Topf 1','Manchester City: Turnierfavorit mit Quote 6,50','Turnierformat: 32 Vereine in acht Gruppen']
  };

  upsert(window.FM_PRESS_REPORTS,transferReport);
  upsert(window.FM_PRESS_REPORTS,worldCupReport);

  upsert(window.FM_NEWS,{
    id:'2041-05-18-vinicius-celta-transfer-bestaetigt',date:'2041-05-18',season:2041,category:'Transfer',accent:'gold',
    eyebrow:'TRANSFER BESTÄTIGT · CELTA VIGO',title:'Vinícius-Wechsel für €18 Mio. ist perfekt',
    summary:'Vinícius unterschreibt bei Celta Vigo und verlässt Finn Harps am 1. Juli. Der Vorstand stellt nach Abschluss des Geschäfts zehn Millionen Euro zusätzlich für Transfers bereit.',
    href:'presse.html?id=2041-05-18-vinicius-celta-transfer-bestaetigt',entities:['finn-harps','vinicius','celta-vigo','gremio','season-2041'],featured:false
  });

  upsert(window.FM_NEWS,{
    id:'2041-05-18-klub-wm-auslosung-gruppe-h',date:'2041-05-18',season:2041,category:'Klub-WM',accent:'blue',
    eyebrow:'FIFA CLUB WORLD CUP · GRUPPE H',title:'Titelverteidiger gegen City, Boca und Charlotte',
    summary:'Finn Harps wird als gesetzter Klub in Gruppe H gelost. Dort warten Manchester City, Boca Juniors und Charlotte FC auf den amtierenden Klub-Weltmeister.',
    href:'presse.html?id=2041-05-18-klub-wm-auslosung-gruppe-h',entities:['finn-harps','manchester-city','boca-juniors','charlotte-fc','club-world-cup','season-2041'],featured:true
  });

  const rumourNews=window.FM_NEWS.find(x=>x.id==='2041-05-18-transfergeruechte-munoz-vinicius');
  if(rumourNews)rumourNews.featured=false;

  const rumour=window.FM_TRANSFER_RUMOURS.find(x=>x.id==='2041-05-18-munoz-vinicius');
  if(rumour){
    rumour.status='partly-confirmed';
    rumour.outgoing={
      player:'Vinícius',club:'Celta Vigo',offer:'€18 Mio.',status:'Vertrag unterschrieben',completionDate:'01.07.2041',
      note:'10 % Spielerbeteiligung; 4 % Ausbildungsentschädigung an Grêmio'
    };
    rumour.managerTrip='Der Vinícius-Abgang ist bestätigt; der mögliche Zugang von Pol Muñoz bleibt separat offen.';
  }

  upsert(window.FM_TRANSFERS,{
    id:'2041-vinicius-celta-vigo',date:'2041-05-18',completionDate:'2041-07-01',season:2041,direction:'out',status:'confirmed',
    player:'Vinícius',from:'Finn Harps',to:'Celta Vigo',fee:18000000,feeLabel:'€18 Mio.',
    playerShare:1800000,playerShareLabel:'€1,8 Mio. · 10 %',trainingCompensation:720000,trainingCompensationLabel:'€720.000 · 4 % an Grêmio',
    estimatedClubReturn:15480000,estimatedClubReturnLabel:'ca. €15,48 Mio. vor weiteren Buchungen',budgetAdded:10000000,budgetAddedLabel:'€10 Mio.'
  });

  const vinicius=(window.FM_PLAYERS||[]).find(x=>x.id==='vinicius');
  if(vinicius){
    Object.assign(vinicius,{
      info:'Wechsel zu Celta Vigo bestätigt · 01.07.2041',
      status:'Abgang bestätigt · Celta Vigo',
      availability:'Abgang bestätigt',
      transferStatus:'Transfer bestätigt · Wechsel am 01.07.2041',
      transferStage:'confirmed',
      transferConfirmed:true,
      transferFee:'€18 Mio.',
      transferDate:'18.05.2041',
      transferCompletionDate:'01.07.2041',
      currentClub:'Finn Harps bis 30.06.2041',
      futureClub:'Celta Vigo',
      departureSummary:'Vinícius hat bei Celta Vigo unterschrieben. Der 27-jährige Mittelfeldspieler wechselt am 1. Juli 2041 für 18 Millionen Euro nach Spanien.'
    });
    const text='Am 18. Mai 2041 unterschrieb Vinícius bei Celta Vigo. Der Wechsel für 18 Millionen Euro wird am 1. Juli vollzogen und beendet ein erfolgreiches Harps-Kapitel aus einer Position gegenseitiger Stärke.';
    if(!((vinicius.careerNarrative||[]).includes(text)))vinicius.careerNarrative=[...(vinicius.careerNarrative||[]),text];
  }

  upsert(window.FM_CLUB_WORLD_CUPS,{
    id:'club-world-cup-2041',year:2041,status:'drawn',titleHolder:'Finn Harps',seededPot:1,group:'H',
    teams:[
      {name:'Boca Juniors',country:'Argentinien'},
      {name:'Finn Harps',country:'Irland',titleHolder:true,seeded:true},
      {name:'Manchester City',country:'England',tournamentFavourite:true,odds:'6.50'},
      {name:'Charlotte FC',country:'USA'}
    ],
    headline:'Titelverteidiger Finn Harps trifft in Gruppe H auf Boca Juniors, Manchester City und Charlotte FC.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.transferHeadline='Vinícius wechselt am 1. Juli für 18 Millionen Euro zu Celta Vigo. Der mögliche Zugang von Pol Muñoz bleibt Teil der Kaderplanung.';
    season.clubWorldCup={
      status:'Auslosung abgeschlossen',titleHolder:true,seededPot:1,group:'H',
      opponents:['Boca Juniors','Manchester City','Charlotte FC'],
      favourite:'Manchester City · Quote 6,50'
    };
    season.latestHeadline='Klub-WM 2041: Titelverteidiger Finn Harps wurde mit Boca Juniors, Manchester City und Charlotte FC in Gruppe H gelost.';
  }
})();