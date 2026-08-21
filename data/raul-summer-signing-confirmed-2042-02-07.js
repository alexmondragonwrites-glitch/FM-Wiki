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
    club:'Valencia',
    futureClub:'Finn Harps',
    positionCode:'VL',
    position:'Verteidiger (links)',
    group:'Zugänge 2042',
    ability:195,
    statusAtClub:'Starspieler',
    personality:'Perfektionist',
    availability:'Vertrag unterschrieben · Wechsel zu Finn Harps am 01.07.2042',
    futureTransfer2042:{
      confirmed:'2042-02-07',
      joiningDate:'2042-07-01',
      from:'Valencia',
      to:'Finn Harps',
      fee:'Ablösefrei',
      contract:'01.07.2042–31.12.2046',
      squadStatus:'Starspieler',
      wage:'€275.000/Woche',
      wageRise:'€325.000/Woche nach 30 Ligaspielen',
      loyaltyBonus:'€18,5 Mio.',
      releaseClause:'€36 Mio. für ausländische Vereine',
      sellOn:'20 % Beteiligung am Weiterverkauf',
      appearanceFee:'€16.750',
      goalBonus:'€70.000',
      assistBonus:'€70.000',
      cleanSheetBonus:'€32.500',
      leagueTeamOfYearBonus:'€700.000',
      internationalAppearanceBonus:'€70.000',
      unusedSubBonus:'€3.600',
      premierDivisionTitleBonus:'€1,4 Mio.',
      medical:'Bestanden · ausgezeichneter Gesundheitszustand'
    }
  });

  const target=window.FM_TRANSFER_TARGETS.find(x=>x.playerId===playerId||x.player==='Raúl');
  if(target){
    target.status='Verpflichtet';
    target.priority='ERLEDIGT';
    target.joiningDate='2042-07-01';
    target.summary='Der Transfer ist fix: Raúl wechselt am 1. Juli 2042 nach Vertragsende bei Valencia ablösefrei zu Finn Harps. Der 27-jährige spanische Linksverteidiger unterschreibt bis Ende 2046.';
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-02-07-raul-finn-harps-summer-signing',
    date:'2042-02-07',
    player:'Raúl',
    type:'future-transfer',
    title:'Raúl unterschreibt bei Finn Harps',
    detail:'Der 27-jährige spanische Linksverteidiger wechselt am 1. Juli 2042 nach Ablauf seines Valencia-Vertrags ablösefrei zu Finn Harps. Der Vertrag läuft bis 31.12.2046; das Grundgehalt beträgt 275.000 Euro pro Woche und steigt nach 30 Ligaspielen auf 325.000 Euro.'
  });

  const report={
    id:'2042-02-07-raul-finn-harps-transfer-press',
    type:'Transfer-Sondersendung',
    date:'2042-02-07',
    competition:'Finn Harps · Transfers 2042',
    headline:'Vom Atlantik an die Weltspitze: Finn Harps sichern sich Raúl für den Sommer',
    subheadline:'Der nächste Transfer mit internationalem Echo ist perfekt. Nach Emerson Escárcega bindet Finn Harps erneut einen etablierten Namen aus einer großen europäischen Liga: Spaniens 27-jähriger Linksverteidiger Raúl kommt am 1. Juli ablösefrei von Valencia.',
    label:'TRANSFER FIX · RAÚL · WECHSEL AM 01.07.2042',
    home:'VALENCIA',
    fixtureDate:'ABLÖSEFREI',
    away:'FINN HARPS',
    location:'Stranorlar / Valencia · 07.02.2042',
    heroStat:{label:'Fähigkeit',value:'195',note:'27 Jahre · Spanien · Vertrag bis 31.12.2046'},
    backlink:{href:'spieler.html?id=raul-valencia',label:'← ZUM SPIELERPROFIL'},
    intro:'Finn Harps haben den nächsten Transfer abgeschlossen, der weit über Irland hinaus wahrgenommen werden dürfte. Raúl hat den Medizincheck bestanden und einen Vertrag unterschrieben, der am 1. Juli 2042 beginnt. Bis dahin bleibt er Spieler des FC Valencia. Für den Transfer fällt keine Ablöse an. Sportlich ist die Dimension dennoch enorm: Mit Fähigkeit 195 gehört der 27-Jährige im aktuellen Save zur absoluten Weltklasse auf der linken Abwehrseite.',
    sections:[
      {title:'Nach Escárcega folgt das nächste Signal',text:'Schon die Verpflichtung von Emerson Escárcega hatte gezeigt, dass Finn Harps für etablierte internationale Spieler kein exotisches Karriereende mehr sind. Raúl verschiebt diese Wahrnehmung noch einmal. Er kommt nicht als Veteran für eine letzte Saison, sondern mit 27 Jahren mitten im Leistungsmaximum. Der Transfer wirkt deshalb weniger wie eine kuriose Randnotiz und mehr wie ein Beleg dafür, dass Stranorlar inzwischen auf demselben Markt nach Spielern greifen kann wie etablierte Champions-League-Klubs.'},
      {title:'Der Vertrag: teuer, aber ohne Ablöse',text:'Raúl erhält zunächst 275.000 Euro pro Woche. Nach 30 Ligaspielen steigt das Grundgehalt auf 325.000 Euro. Hinzu kommen ein Loyalitätsbonus von 18,5 Mio. Euro und erfolgsabhängige Prämien. Die auffälligste Klausel ist die Ausstiegsmöglichkeit für ausländische Vereine bei 36 Mio. Euro. Außerdem erhält der Spieler 20 Prozent einer späteren Weiterverkaufssumme. Finn Harps bezahlen damit klar für Weltklassequalität, vermeiden aber eine Transferablöse.'},
      {title:'Irische Medien: „Das ist kein Märchenmarkt mehr“',text:'Die inländische Reaktion dreht sich weniger darum, ob Finn Harps einen solchen Namen verpflichten können, sondern was der Deal über die veränderte Stellung des Klubs aussagt. Der Tenor: Nach Jahren europäischer Erfolge und nach dem Escárcega-Coup ist Raúl kein Zufall mehr. Finn Harps werden auf dem internationalen Markt inzwischen als Zielverein wahrgenommen und nicht nur als Sprungbrett.'},
      {title:'Spanische Perspektive: Valencia verliert einen Nationalspieler ohne Ablöse',text:'In Spanien steht naturgemäß die Gegenseite der Geschichte im Vordergrund. Valencia verliert einen 27-jährigen Linksverteidiger im besten Fußballalter nach Vertragsende ohne Ablöse. Dass sein nächster Klub aus Irland kommt, sorgt dabei weniger für Spott als für Verwunderung über die neue wirtschaftliche und sportliche Reichweite der Harps. Besonders diskutiert wird, dass Raúl trotz seines bisherigen Gehalts von 350.000 Euro pro Woche einen Wechsel nach Stranorlar akzeptiert.'},
      {title:'Europäische Analysten: Die Ausstiegsklausel macht den Deal ungewöhnlich',text:'Aus neutraler Sicht ist die 36-Mio.-Klausel der interessante Gegenpol zum großen Namen. Finn Harps bekommen Weltklasse ohne Ablöse, geben dem Spieler aber einen vergleichsweise günstigen Ausgang zurück auf den kontinentalen Markt. Das kann als Risiko gelesen werden, zugleich aber auch als Teil des Kompromisses, der den Transfer überhaupt möglich machte.'},
      {title:'Stimmen aus dem Harps-Umfeld',text:'Im Klub dominiert Vorfreude. Sportdirektor Callum Byrne kann den Deal als Beleg dafür verkaufen, dass die sportliche Entwicklung der vergangenen Jahre nun auch auf dem Transfermarkt sichtbar wird. Aus dem Mannschaftsumfeld wird Raúls Erfahrung als zusätzlicher Qualitätsanker für die großen europäischen Abende gesehen. Emerson Escárcega gilt dabei fast automatisch als Referenzfall: Auch sein Wechsel hatte zunächst Fragen ausgelöst, bevor er schnell zeigte, dass große Namen in Stranorlar nicht nur Marketing, sondern sportliche Verstärkung sein können.'},
      {title:'Fans zwischen Euphorie und Taschenrechner',text:'Die Mehrheit der Harps-Anhänger dürfte vor allem eines sehen: einen 195er Weltklassespieler im besten Alter, der ohne Ablöse kommt. Kritischere Stimmen schauen auf das Gehalt, den hohen Loyalitätsbonus und vor allem die 36-Mio.-Ausstiegsklausel. Der Konsens ist trotzdem ungewöhnlich klar: Selbst wenn Raúl nur zwei starke Jahre bleibt, wäre allein die Tatsache, dass ein Spieler dieses Kalibers Finn Harps bewusst auswählt, ein weiteres Symbol für den Statuswechsel des Vereins.'}
    ],
    strengthsTitle:'PRESSEREAKTIONEN',
    strengthsHeading:'Warum der Transfer so groß wahrgenommen wird',
    strengths:[
      'Irland: Finn Harps verpflichten nicht mehr nur Talente, sondern Spieler aus der internationalen Spitze.',
      'Spanien: Valencia verliert einen Nationalspieler im besten Alter ablösefrei an einen irischen Champions-League-Klub.',
      'Europa: Nach Escárcega wirkt Raúl nicht mehr wie ein Einzelfall, sondern wie Teil einer neuen Transferstrategie.',
      'Harps-Fans: Fähigkeit 195 und Alter 27 machen den Deal sportlich zu einem der größten Namen der Vereinsgeschichte.'
    ],
    vulnerabilitiesTitle:'DEBATTE',
    vulnerabilitiesHeading:'Wo die Euphorie gebremst wird',
    vulnerabilities:[
      'Das Gehalt steigt nach 30 Ligaspielen von 275.000 auf 325.000 Euro pro Woche.',
      'Der Loyalitätsbonus von 18,5 Mio. Euro macht den ablösefreien Transfer keineswegs kostenlos.',
      'Die 36-Mio.-Ausstiegsklausel für ausländische Vereine begrenzt die langfristige Kontrolle des Klubs.',
      '20 Prozent Beteiligung am Weiterverkauf reduzieren zusätzlich den möglichen finanziellen Gewinn.'
    ],
    verdictHeading:'Ein Transfer, der mehr über Finn Harps erzählt als über Raúl',
    verdict:'Die Schlagzeile ist nicht nur, dass Raúl nach Irland wechselt. Die eigentliche Geschichte ist, dass dieser Wechsel inzwischen sportlich plausibel geworden ist. Nach Escárcega folgt mit Raúl ein weiterer Spieler, dessen Profil früher außerhalb jeder realistischen Harps-Reichweite gelegen hätte. Finn Harps bezahlen dafür erheblich, aber sie bezahlen nicht für Aufmerksamkeit, sondern für einen Spieler im unmittelbaren Weltklassealter. Wenn der Deal funktioniert, beginnt der Sommer 2042 nicht mit einem Neuzugang, sondern mit einer weiteren Verschiebung dessen, was für diesen Klub normal geworden ist.',
    sourcesHeading:'Grundlage und redaktionelle Einordnung',
    sourcesNote:'Transferdatum, Vertragswerte, Spielerdaten und Medizincheck basieren auf den FM-Screenshots vom 7. Februar 2042. Die Medien-, Fan-, Spieler- und Funktionärsstimmen sind als redaktionelle In-Universe-Inszenierung für das FM-Wiki formuliert und keine realen Zitate externer Medien.',
    sources:[
      'FM24 · Transferbestätigung Raúl zu Finn Harps · 07.02.2042',
      'FM24 · Spielerprofil Raúl bei Valencia · 07.02.2042',
      'Finn Harps · Transferhistorie und Escárcega-Kontext',
      'Redaktionelle FM-Wiki-Inszenierung der Pressereaktionen'
    ]
  };

  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-02-07-raul-finn-harps-summer-signing',
    date:'2042-02-07',
    season:2042,
    category:'Transfers',
    accent:'gold',
    featured:true,
    eyebrow:'TRANSFER FIX · SOMMER 2042 · ABLÖSEFREI',
    title:'Nach Escárcega der nächste Coup: Raúl unterschreibt bei Finn Harps',
    summary:'Der 27-jährige spanische Weltklasse-Linksverteidiger Raúl wechselt am 1. Juli ablösefrei von Valencia nach Stranorlar. Der Deal bis Ende 2046 sorgt wegen des Namens, des Gehalts und der 36-Mio.-Ausstiegsklausel schon Monate vor dem Wechsel für internationale Diskussionen.',
    href:'presse.html?id=2042-02-07-raul-finn-harps-transfer-press',
    entities:['finn-harps','raul-valencia','valencia','emerson-escarcega','season-2042']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-02-07';
    season.latestHeadline='Sommer-Coup fix: Raúl wechselt am 1. Juli 2042 ablösefrei von Valencia zu Finn Harps.';
    season.futureTransfers=season.futureTransfers||[];
    const future={player:'Raúl',from:'Valencia',to:'Finn Harps',joiningDate:'2042-07-01',fee:'Ablösefrei',contractUntil:'2046-12-31',ability:195};
    const idx=season.futureTransfers.findIndex(x=>x.player==='Raúl');
    if(idx>=0)season.futureTransfers[idx]=future;else season.futureTransfers.push(future);
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='07.02.2042: Raúl unterschreibt bei Finn Harps. Der 27-jährige spanische Linksverteidiger mit Fähigkeit 195 kommt am 01.07.2042 nach Vertragsende bei Valencia ablösefrei und erhält einen Vertrag bis 31.12.2046.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }
})();
