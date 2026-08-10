(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-07-12-bohemian-finn-harps-premier-division';
  const reportId='2041-07-12-bohemian-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-07-12',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'bohemian',name:'Bohemian',short:'BOH',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:2},
    score:'1:2',homeGoals:1,awayGoals:2,halfTime:'1:1',
    venue:'Dalymount Park',location:'Dublin, Irland',attendance:5986,awayFans:320,weather:'20 °C',
    headline:'Zurück im Ligaalltag: Finn Harps gewinnt 2:1 bei Bohemian',
    verdict:'Das Ergebnis ist knapp, die Spieldaten sind es nicht. Finn Harps dominiert mit 73 Prozent Ballbesitz, 16:3 Schüssen und 3,17:0,39 xG und bleibt nach 20 Ligaspielen ungeschlagen.',
    events:[
      {minute:20,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'0:1'},
      {minute:29,type:'goal',team:'Bohemian',player:'Steve Meyler',text:'1:1'},
      {minute:60,type:'penalty-missed',team:'Finn Harps',player:'Justin Ramsey',text:'Elfmeter verschossen'},
      {minute:66,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'1:2 · Elfmeter'},
      {minute:75,type:'yellow',team:'Finn Harps',player:'Darcy Andrews',text:'Verwarnung'}
    ],
    stats:[
      {label:'Schüsse',home:3,away:16,kind:'number'},
      {label:'Schüsse aufs Tor',home:1,away:9,kind:'number'},
      {label:'xG',home:0.39,away:3.17,kind:'decimal'},
      {label:'Großchancen',home:0,away:4,kind:'number'},
      {label:'Ballbesitz',home:27,away:73,kind:'percent'},
      {label:'Ecken',home:1,away:8,kind:'number'},
      {label:'Fouls',home:29,away:15,kind:'number'},
      {label:'Angekommene Pässe',home:197,away:523,kind:'number',homeDetail:'75 % · 197/263',awayDetail:'89 % · 523/589'},
      {label:'Gelbe Karten',home:0,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:6.64,away:6.71,kind:'decimal'},
      {label:'Intensive Sprints',home:49,away:85,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:20,wins:18,draws:2,losses:0,goalsFor:57,goalsAgainst:4,goalDifference:53,points:56},
    analysis:{
      summary:'Nach dem langen Klub-WM-Block schaltet Finn Harps sofort zurück in den Ligamodus. Bohemian hält das Ergebnis bis zum Ende knapp, wird in den meisten Leistungsindikatoren aber klar dominiert.',
      chanceCreation:'16 Abschlüsse, neun Schüsse aufs Tor, vier Großchancen und 3,17 xG zeigen, dass das 2:1 deutlich enger ausfällt als die Partie selbst.',
      possession:'Mit 73 Prozent Ballbesitz und 523 angekommene Pässen kontrollieren die Harps fast durchgehend den Rhythmus.',
      turningPoint:'Justin Ramsey vergibt in der 60. Minute einen Elfmeter. Sechs Minuten später übernimmt Daryl Frame die Verantwortung vom Punkt und erzielt das 2:1.',
      nuance:'Der erste Ligaauftritt nach der Klub-WM wirkt weniger spektakulär als die Spiele gegen Bayern oder Barcelona, bestätigt aber genau die nationale Stabilität, auf der diese internationalen Läufe aufbauen.'
    },
    sources:['FM-Spielübersicht Bohemian – Finn Harps · 12.07.2041','Finn-Harps-Spielerstatistiken · 12.07.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-12';
    season.latestHeadline='Premier Division: Finn Harps kehrt mit einem 2:1 bei Bohemian in den Ligaalltag zurück.';
    season.league={...(season.league||{}),position:1,played:20,wins:18,draws:2,losses:0,goalsFor:57,goalsAgainst:4,goalDifference:53,points:56,latestResult:'12.07.2041 · Bohemian 1:2 Finn Harps'};
    season.changes=season.changes||{notes:[]};
    const note='12.07.2041: 2:1 bei Bohemian. Papini trifft früh, Frame entscheidet per Elfmeter; Finn Harps steht nach 20 Ligaspielen bei 18 Siegen, 2 Remis und 56 Punkten.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  window.FM_PLAYER_UPDATES.push({date:'2041-07-12',player:'Giacomo Papini',type:'goal',title:'Treffer bei Bohemian',detail:'Tor zum 1:0 in der 20. Minute beim 2:1-Auswärtssieg.'});
  window.FM_PLAYER_UPDATES.push({date:'2041-07-12',player:'Daryl Frame',type:'goal',title:'Entscheidet vom Punkt',detail:'Verwandelt in der 66. Minute den Elfmeter zum 2:1-Siegtreffer.'});
  window.FM_PLAYER_UPDATES.push({date:'2041-07-12',player:'Justin Ramsey',type:'penalty-missed',title:'Elfmeter vergeben',detail:'Verschießt in der 60. Minute beim 2:1 gegen Bohemian.'});

  const report={
    id:reportId,type:'Spielbericht',date:'2041-07-12',competition:'Premier Division',fixtureDate:'12.07.2041',
    home:'Bohemian',away:'Finn Harps',score:'1:2',location:'Dalymount Park · Dublin · 5.986 Zuschauer',
    headline:'Ligaalltag? Finn Harps gewinnt 2:1 und dominiert deutlicher als das Ergebnis',
    subheadline:'Papini trifft früh, Ramsey vergibt vom Punkt und Frame macht es sechs Minuten später besser. 73 Prozent Ballbesitz und 3,17 xG unterstreichen die klare Harps-Überlegenheit.',
    label:'PREMIER DIVISION · BOHEMIAN 1:2 FINN HARPS',
    heroStat:{label:'Expected Goals',value:'0,39:3,17',note:'16:3 Schüsse · 9:1 aufs Tor · 73 % Ballbesitz'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Fünf Tage nach dem Ende der Klub-WM ist Finn Harps zurück im irischen Ligaalltag und wirkt, als hätte es den internationalen Marathon kaum gegeben. Giacomo Papini bringt den Tabellenführer nach 20 Minuten in Führung. Bohemian antwortet durch Steve Meyler, doch die Harps kontrollieren den Rest des Spiels fast vollständig und gewinnen durch Daryl Frames Elfmeter 2:1.',
    sections:[
      {title:'Papini eröffnet, Bohemian antwortet',text:'Giacomo Papini erzielt in der 20. Minute das 1:0. Steve Meyler gleicht neun Minuten später mit Bohemians einziger wirklich erfolgreichen Offensivaktion zum 1:1 aus.'},
      {title:'Zwei Elfmeter, zwei verschiedene Geschichten',text:'Justin Ramsey hat in der 60. Minute die große Gelegenheit zur erneuten Führung, verschießt aber. Daryl Frame übernimmt sechs Minuten später beim nächsten Strafstoß und verwandelt zum 2:1.'},
      {title:'Das Ergebnis täuscht über die Dominanz hinweg',text:'Finn Harps kommt auf 16 Abschlüsse, neun Schüsse aufs Tor, vier Großchancen und 3,17 xG. Bohemian bleibt bei drei Schüssen, einem Abschluss aufs Tor und 0,39 xG.'},
      {title:'73 Prozent Ballbesitz nach der Klub-WM',text:'Die bemerkenswerteste Zahl liegt vielleicht im Spielaufbau: 523 angekommene Pässe und 73 Prozent Ballbesitz zeigen, dass Finn Harps nach dem langen internationalen Turnier sofort wieder die nationale Kontrolle übernimmt.'},
      {title:'20 Spiele, noch immer ungeschlagen',text:'Nach dem Sieg steht Finn Harps in der Premier Division bei 20 Spielen, 18 Siegen, zwei Unentschieden, 57:4 Toren und 56 Punkten. Der Vorsprung an der Tabellenspitze bleibt gewaltig.'}
    ],
    strengthsTitle:'WAS NACH DER KLUB-WM SOFORT WIEDER DA WAR',strengthsHeading:'Nationale Kontrolle ohne Anlaufphase',
    strengths:['73 % Ballbesitz','3,17 xG','16:3 Schüsse','9:1 Schüsse aufs Tor','Vier Großchancen','Nach 20 Ligaspielen weiter ungeschlagen'],
    vulnerabilitiesTitle:'WARUM ES TROTZDEM NUR 2:1 WURDE',vulnerabilitiesHeading:'Chancenverwertung verhindert ein klares Ergebnis',
    vulnerabilities:['Nur zwei Tore aus 3,17 xG','Ramsey verschießt einen Elfmeter','Bohemian gleicht mit sehr wenig Offensivvolumen zwischenzeitlich aus','Die Dominanz wird auf der Anzeigetafel kaum sichtbar'],
    verdictHeading:'Der internationale Rausch endet, die nationale Maschine läuft weiter',
    verdict:'Nach Manchester City, Bayern, Barcelona, Caen und São Paulo wirkt ein Freitagabend im Dalymount Park beinahe klein. Genau deshalb ist dieser Sieg aussagekräftig: Finn Harps fällt nach der Klub-WM nicht in ein Loch, sondern übernimmt sofort wieder den Ball, die Chancen und letztlich die drei Punkte. Das 2:1 ist enger als die Leistung.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 12. Juli 2041.',
    sources:['FM-Spielübersicht Bohemian – Finn Harps · 12.07.2041','Finn-Harps-Spielerstatistiken · 12.07.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-07-12-bohemian-liga',date:'2041-07-12',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · BOHEMIAN 1:2 FINN HARPS',title:'Zurück im Ligaalltag, zurück bei drei Punkten',
    summary:'Finn Harps gewinnt fünf Tage nach der Klub-WM mit 2:1 bei Bohemian. Papini und Frame treffen, Ramsey vergibt einen Elfmeter. Die Harps dominieren mit 73 % Ballbesitz und 3,17 xG.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','bohemian','giacomo-papini','daryl-frame','justin-ramsey']
  });
})();