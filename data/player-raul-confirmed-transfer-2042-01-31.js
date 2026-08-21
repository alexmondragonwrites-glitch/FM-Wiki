(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_TRANSFER_TARGETS=window.FM_TRANSFER_TARGETS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const playerId='raul-valencia';
  const reportId='2042-01-31-raul-finn-harps-transfer-bestaetigt';
  let player=window.FM_PLAYERS.find(item=>item.id===playerId||item.name==='Raúl');
  if(!player){
    player={id:playerId,name:'Raúl'};
    window.FM_PLAYERS.push(player);
  }

  Object.assign(player,{
    name:'Raúl',
    fullName:'Raúl',
    age:27,
    nation:'Spanien',
    currentClub:'Valencia',
    futureClub:'Finn Harps',
    club:'Valencia',
    positionCode:'VL',
    position:'Verteidiger (links)',
    group:'Kommende Transfers',
    availability:'Wechsel zu Finn Harps bestätigt · kommt am 01.07.2042',
    ability:195,
    value:'€39–58 Mio.',
    contractEnd:'30.06.2042',
    futureTransfer2042:{
      confirmed:'2042-01-31',
      joinDate:'2042-07-01',
      from:'Valencia',
      to:'Finn Harps',
      fee:'Ablösefrei',
      contract:'01.07.2042–31.12.2046',
      squadStatus:'Starspieler',
      wage:'€275.000/Woche',
      wageRise:'€325.000/Woche nach 30 Ligaspielen',
      loyaltyBonus:'€18,5 Mio.',
      agentFee:'€0',
      foreignReleaseClause:'€36 Mio.',
      sellOnShare:'20 %',
      appearanceFee:'€16.750',
      goalBonus:'€70.000',
      assistBonus:'€70.000',
      cleanSheetBonus:'€32.500',
      teamOfYearBonus:'€700.000',
      internationalAppearanceBonus:'€70.000',
      substituteBonus:'€3.600',
      leagueTitleBonus:'€1,4 Mio.',
      budgetImpact:'€3,4 Mio. werden laut FM beim Abschluss vom Transferbudget abgezogen.'
    }
  });

  const targetIndex=window.FM_TRANSFER_TARGETS.findIndex(item=>item.playerId===playerId||item.player==='Raúl');
  const completedTarget={
    id:'2042-01-31-raul-valencia-target',
    date:'2042-01-31',
    playerId,
    player:'Raúl',
    club:'Valencia',
    futureClub:'Finn Harps',
    age:27,
    nation:'Spanien',
    position:'Linksverteidiger',
    ability:195,
    fee:'Ablösefrei',
    joinDate:'01.07.2042',
    contract:'bis 31.12.2046',
    wage:'€275.000/Woche · €325.000 nach 30 Ligaspielen',
    status:'Verpflichtet',
    priority:'ABGESCHLOSSEN',
    summary:'Der Transfer ist bestätigt. Raúl verlässt Valencia nach Vertragsende ablösefrei und schließt sich Finn Harps zum 1. Juli 2042 an. Der 27-jährige spanische Nationalspieler kommt als Starspieler und gehört mit Fähigkeit 195 zur absoluten Weltklasse.'
  };
  if(targetIndex>=0)window.FM_TRANSFER_TARGETS[targetIndex]=completedTarget;else window.FM_TRANSFER_TARGETS.push(completedTarget);

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-01-31-raul-finn-harps-transfer-confirmed',
    date:'2042-01-31',
    player:'Raúl',
    type:'transfer-confirmed',
    title:'Raúl unterschreibt bei Finn Harps',
    detail:'Der 27-jährige spanische Linksverteidiger kommt am 01.07.2042 nach Ablauf seines Valencia-Vertrags ablösefrei zu Finn Harps. Vertrag bis 31.12.2046, zunächst 275.000 Euro pro Woche, nach 30 Ligaspielen 325.000 Euro.'
  });

  const report={
    id:reportId,
    type:'Transfer-Sondersendung',
    date:'2042-01-31',
    competition:'Finn Harps · Transfers 2042',
    headline:'Von Valencia nach Stranorlar: Raúl unterschreibt bei Finn Harps',
    subheadline:'Der vielleicht größte Name, den Finn Harps je im besten Fußballeralter verpflichtet hat: Der 27-jährige spanische Nationalspieler Raúl kommt am 1. Juli ablösefrei von Valencia. In Irland, Spanien und der europäischen Fußballpresse wird der Deal als weiterer Beleg dafür gelesen, wie sehr sich die Kräfteverhältnisse verschoben haben.',
    label:'TRANSFER-COUP · BESTÄTIGT AM 31.01.2042 · WECHSEL AM 01.07.2042',
    home:'FINN HARPS',
    fixtureDate:'RAÚL · ABLÖSEFREI',
    away:'VALENCIA',
    location:'Stranorlar / Valencia · Vorvertrag für Sommer 2042',
    heroStat:{label:'Spielerniveau',value:'195 CA',note:'27 Jahre · 59 Länderspiele für Spanien · Linksverteidiger'},
    backlink:{href:'spieler.html?id=raul-valencia',label:'← ZUM RAÚL-PROFIL'},
    intro:'Was vor wenigen Jahren wie ein Transfer aus einem anderen Universum geklungen hätte, ist nun unterschrieben. Raúl, 27 Jahre alt, spanischer Nationalspieler und bei Valencia als Starspieler geführt, wechselt nach Ablauf seines Vertrags zum 1. Juli 2042 ablösefrei zu Finn Harps. Der Deal ist sportlich ein Ausrufezeichen und wirtschaftlich ein bewusstes Premium-Paket: 275.000 Euro Wochengehalt, später 325.000 nach 30 Ligaspielen, dazu ein Loyalitätsbonus von 18,5 Mio. Euro. Für die Harps ist das kein Schnäppchen im klassischen Sinn. Es ist eine Investition in absolute Weltklasse.',
    sections:[
      {title:'Der Moment, in dem aus einem Gerücht ein Machtzeichen wird',text:'Raúl besitzt Fähigkeit 195 und befindet sich mit 27 Jahren mitten im Leistungsmaximum. Er kommt nicht als Talent, das in Donegal erst geformt werden soll, sondern als fertiger Weltklassespieler. Dass ein solcher Spieler Valencia ablösefrei verlässt und Finn Harps als nächste Station wählt, verändert die Wahrnehmung des Klubs weit über Irland hinaus.'},
      {title:'Der Vertrag ist teuer – aber die Ablöse ist null',text:'Der Grundlohn beträgt zunächst 275.000 Euro pro Woche und steigt nach 30 Ligaspielen auf 325.000 Euro. Hinzu kommen 18,5 Mio. Euro Loyalitätsbonus und leistungsabhängige Prämien. Eine Beratergebühr fällt nicht an. Der Vertrag läuft vom 1. Juli 2042 bis 31. Dezember 2046. Die größte Einschränkung bleibt eine Ausstiegsklausel von 36 Mio. Euro für ausländische Vereine sowie eine Beteiligung von 20 Prozent an einem Weiterverkauf.'},
      {title:'Irische Perspektive: Nicht mehr die Frage, ob Stars kommen – sondern welche',text:'In der redaktionellen In-Universe-Reaktion aus Irland dominiert weniger Überraschung über die sportliche Ambition als über die Größenordnung. Finn Harps hat die Champions-League-Ligaphase gerade auf Rang zwei beendet. Der Raúl-Deal wirkt deshalb nicht wie ein verrückter Einzeltransfer, sondern wie der nächste Schritt eines Klubs, der sich selbst inzwischen als europäische Spitzenadresse behandelt.'},
      {title:'Spanische Perspektive: Valencia verliert Weltklasse ohne Ablöse',text:'Aus spanischer Sicht liegt die Erzählung genau andersherum. Valencia verliert einen 27-jährigen, international erfahrenen Linksverteidiger ohne Transfererlös. Dass sein Ziel nicht Madrid, Manchester oder Paris heißt, sondern Stranorlar, wäre in dieser Save-Welt vor allem ein Symbol dafür, wie weit Finn Harps wirtschaftlich und sportlich inzwischen nach oben gerückt ist.'},
      {title:'In der Kabine verschiebt sich die Messlatte',text:'Für Spieler wie Kevin Kelly und Gustavo da Silva ist die Botschaft klar: Auf der linken Seite kommt im Sommer ein Spieler, der sofort als Star eingeplant ist. Für Führungsspieler wie Giacomo Papini, Justin Ramsey und Torric Bruce bedeutet der Deal zugleich, dass der Verein den Anspruch unterstreicht, nicht nur in Irland zu dominieren, sondern die Champions League erneut anzugreifen.'},
      {title:'Und die Fans? Euphorie mit einem kleinen Taschenrechner in der Hand',text:'Die fiktive Fanreaktion im Archiv ist erwartbar zweigeteilt: sportlich herrscht Begeisterung über einen 195-CA-Spieler im besten Alter, finanziell wird über 18,5 Mio. Euro Loyalitätsbonus, das spätere 325.000-Euro-Gehalt und die niedrige 36-Mio.-Ausstiegsklausel diskutiert. Der Grundton bleibt dennoch eindeutig: Einen Spieler dieser Klasse ablösefrei nach Donegal zu holen, ist ein Transfer, über den man noch Jahre sprechen wird.'}
    ],
    strengthsTitle:'PRESSERUND SCHAU',
    strengthsHeading:'Wie der Deal in der Save-Welt gelesen wird',
    strengths:[
      'Irische Sportpresse: „Finn Harps verpflichtet keinen Namen für das Poster, sondern einen Spieler auf absolutem Weltklasseniveau.“',
      'Spanische Regionalpresse: „Valencia verliert einen Nationalspieler im besten Alter ohne Ablöse – und Finn Harps gewinnt das Tauziehen.“',
      'Europäische Fußballpresse: „Platz zwei in der Champions-League-Ligaphase war kein Zufall. Der Raúl-Deal bestätigt den neuen Status.“',
      'Taktik-Kolumnisten: „Mit Raúl links und Fernández flexibel rechts oder im Zentrum bekommt Finn Harps eine neue strategische Tiefe.“',
      'Transferbeobachter: „275.000 Euro pro Woche sind viel – für einen ablösefreien 195-CA-Spieler aber eine andere Rechnung als bei einer 50-Millionen-Ablöse.“',
      'Donegal-Fans: „Vor zehn Jahren hätte man das als Fantasie-Transfer abgetan. Jetzt kommt er wirklich.“'
    ],
    vulnerabilitiesTitle:'DIE FRAGEN HINTER DER SCHLAGZEILE',
    vulnerabilitiesHeading:'Was trotz aller Euphorie diskutiert wird',
    vulnerabilities:[
      'Nach 30 Ligaspielen steigt das Gehalt von 275.000 auf 325.000 Euro pro Woche.',
      'Der Loyalitätsbonus von 18,5 Mio. Euro macht den ablösefreien Transfer zu einem teuren Gesamtpaket.',
      'Die 36-Mio.-Ausstiegsklausel für ausländische Vereine begrenzt die langfristige Kontrolle des Klubs.',
      '20 Prozent Beteiligung am Weiterverkauf drücken einen möglichen späteren Erlös zusätzlich.',
      'Der Transfer erhöht den Druck auf die bestehende Linksverteidiger-Hierarchie und auf künftige Vertragsverhandlungen im Kader.'
    ],
    keyDuelsTitle:'STIMMEN AUS DEM UMFELD',
    keyDuelsHeading:'Spieler, Funktionäre, Fans und Sponsor reagieren',
    keyDuels:[
      {title:'Callum Byrne · Sportdirektor',text:'„Wir wollten nicht irgendeinen großen Namen. Wir wollten einen Spieler, der unser Niveau sofort hebt. Dass Raúl sich für dieses Projekt entschieden hat, sagt viel darüber aus, wie Finn Harps heute wahrgenommen wird.“'},
      {title:'Giacomo Papini · Führungsspieler',text:'„Wenn ein Spieler mit seiner Erfahrung und Qualität hierherkommt, merkt jeder in der Kabine: Der Verein will wieder um die größten Spiele kämpfen.“'},
      {title:'Torric Bruce · Innenverteidiger',text:'„Für uns Verteidiger ist das großartig. Du willst neben Spielern trainieren, die dich jeden Tag zwingen, schneller und sauberer zu denken.“'},
      {title:'Wild Atlantic · Hauptsponsor',text:'„Der Transfer trägt den Namen Finn Harps weit über Irland hinaus. Für die Region ist das ein weiterer Moment, in dem internationale Aufmerksamkeit und lokale Identität zusammenkommen.“'},
      {title:'Supporter-Stimme aus Donegal',text:'„Über das Gehalt können wir morgen streiten. Heute unterschreibt ein spanischer Weltklassespieler bei Finn Harps. Das darf man auch einfach einmal genießen.“'}
    ],
    verdictHeading:'Ein Transfer, der den Status des Klubs neu vermisst',
    verdict:'Raúl ist nicht einfach der nächste gute Spieler in einem starken Kader. Der Deal ist ein Marker für die Entwicklung der gesamten Dynastie. Finn Harps verkauft inzwischen etablierte Profis, entwickelt eigene Talente und kann gleichzeitig einen 27-jährigen spanischen Nationalspieler auf Weltklasseniveau ablösefrei verpflichten. Die Vertragsklauseln verhindern, dass man das Paket romantisiert. Aber gerade deshalb ist die Botschaft so stark: Finn Harps handelt nicht mehr wie ein Außenseiter mit einem glücklichen Lauf, sondern wie ein Klub, der seinen Platz an Europas oberem Tisch verteidigen will.',
    sourcesHeading:'Faktenbasis und redaktionelle Pressestimmen',
    sourcesNote:'Transferdatum, Vertragslaufzeit, Gehalt, Prämien, Klauseln und Status basieren auf der bestätigten FM-Transfermeldung vom 31.01.2042. Die Presse-, Spieler-, Fan-, Funktionärs- und Sponsor-Stimmen sind als redaktionelle In-Universe-Inszenierung für das Finn-Harps-FM-Archiv formuliert und keine realen Zitate.',
    sources:[
      'FM24 · Transfermeldung: Raúl bestätigt Wechsel zu Finn Harps · 31.01.2042',
      'FM24 · Vertragsdetails Raúl · Wechsel zum 01.07.2042',
      'Finn Harps FM Wiki · Scoutprofil Raúl · Fähigkeit 195',
      'Redaktionelle In-Universe-Pressestimmen für die Save-Chronik'
    ]
  };

  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:reportId,
    date:'2042-01-31',
    season:2042,
    category:'Transfers',
    accent:'gold',
    featured:true,
    eyebrow:'TRANSFER-COUP · SOMMER 2042',
    title:'Raúl unterschreibt: Finn Harps holt Weltklasse ablösefrei aus Valencia',
    summary:'Der Deal ist fix: Raúl, 27, wechselt am 1. Juli ablösefrei von Valencia zu Finn Harps. Der spanische Nationalspieler mit Fähigkeit 195 unterschreibt bis Ende 2046. In Irland und Spanien sorgt der Transfer für entsprechend große Schlagzeilen.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','raul-valencia','valencia','season-2042']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-01-31';
    season.latestHeadline='Transfer-Coup für den Sommer: Raúl kommt am 1. Juli 2042 ablösefrei von Valencia. Der 27-jährige spanische Nationalspieler besitzt Fähigkeit 195 und unterschreibt bis Ende 2046.';
    season.summerTransfers=season.summerTransfers||[];
    const move={player:'Raúl',from:'Valencia',to:'Finn Harps',joinDate:'01.07.2042',fee:'ablösefrei',status:'bestätigt',ability:195};
    const idx=season.summerTransfers.findIndex(x=>x.player==='Raúl');
    if(idx>=0)season.summerTransfers[idx]=move;else season.summerTransfers.push(move);
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='31.01.2042: Raúl bestätigt seinen Wechsel zu Finn Harps. Der 27-jährige spanische Linksverteidiger kommt am 01.07.2042 nach Vertragsende ablösefrei von Valencia und unterschreibt bis 31.12.2046.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }
})();
