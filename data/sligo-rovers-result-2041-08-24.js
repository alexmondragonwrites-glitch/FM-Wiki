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

  const fixtureId='2041-08-24-finn-harps-sligo-rovers-premier-division';
  const reportId='2041-08-24-sligo-rovers-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-08-24',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:2},
    away:{id:'sligo-rovers',name:'Sligo Rovers',short:'SLI',score:1},
    score:'2:1',homeGoals:2,awayGoals:1,halfTime:'1:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'28 °C',referee:'Dean McGee',
    headline:'Escárcega-Doppelpack bringt Finn Harps zurück auf die Siegerstraße',
    verdict:'Drei Tage nach dem FAI-Cup-Aus reagiert Finn Harps mit einem kontrollierten 2:1 gegen Sligo Rovers. Emerson Escárcega erzielt beide Harps-Tore und steht damit nach seinen ersten beiden Ligaspielen für den Klub bereits bei drei Treffern.',
    scorers:[
      {player:'Emerson Escárcega',team:'Finn Harps',goals:2,minutes:[31,62]},
      {player:'Stuart Taylor',team:'Sligo Rovers',goals:1,minutes:[78]}
    ],
    events:[
      {minute:31,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'1:0'},
      {minute:62,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'2:0'},
      {minute:78,type:'goal',team:'Sligo Rovers',player:'Stuart Taylor',text:'2:1'},
      {minute:'90+3',type:'yellow',team:'Finn Harps',player:'Amir Mašić',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:18,away:3,kind:'number'},
      {label:'Schüsse aufs Tor',home:7,away:1,kind:'number'},
      {label:'xG',home:3.52,away:0.41,kind:'decimal'},
      {label:'Großchancen',home:6,away:0,kind:'number'},
      {label:'Ballbesitz',home:76,away:24,kind:'percent'},
      {label:'Ecken',home:7,away:2,kind:'number'},
      {label:'Fouls',home:12,away:17,kind:'number'},
      {label:'Angekommene Pässe',home:673,away:208,kind:'number',homeDetail:'90 % · 673/749',awayDetail:'78 % · 208/267'},
      {label:'Gewonnene Zweikämpfe',home:93,away:71,kind:'percent',homeDetail:'13/14',awayDetail:'32/45'},
      {label:'Gewonnene Kopfbälle',home:60,away:36,kind:'percent',homeDetail:'30/50',awayDetail:'17/47'},
      {label:'Gelbe Karten',home:1,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:27,wins:25,draws:2,losses:0,goalsFor:82,goalsAgainst:9,goalDifference:73,points:77},
    standout:{player:'Emerson Escárcega',team:'Finn Harps',rating:8.6,goals:2,note:'Doppelpack in der 31. und 62. Minute.'},
    milestones:[
      {player:'Kevin Kelly',text:'150. Ligaspiel seiner Karriere'},
      {player:'Kevin Kelly',text:'150. Ligaspiel für Finn Harps'},
      {player:'Gustavo da Silva',text:'125. Ligaspiel für Finn Harps'}
    ],
    analysis:{
      summary:'Finn Harps beantwortet das Pokal-Aus mit einem dominanten Ligaauftritt. 76 Prozent Ballbesitz, 18:3 Schüsse und 3,52:0,41 xG ergeben ein deutlich klareres Spielbild als das knappe Endergebnis vermuten lässt.',
      firstHalf:'Escárcega bringt die Harps in der 31. Minute in Führung. Sligo kommt vor der Pause kaum zu Entlastung, während Finn Harps Ball und Räume kontrolliert.',
      secondHalf:'In der 62. Minute erhöht Escárcega auf 2:0. Stuart Taylor verkürzt in der 78. Minute mit Sligos einzigem Schuss aufs Tor, doch die Harps bringen den Sieg sicher über die Zeit.',
      escarcega:'Nach seinem Debüttor gegen St Patrick’s legt Escárcega direkt einen Doppelpack nach. Der ablösefreie Neuzugang steht damit nach zwei Ligaspielen für Finn Harps bei drei Toren.',
      leagueContext:'Finn Harps bleibt nach 27 Ligaspielen ungeschlagen: 25 Siege, zwei Remis, 82:9 Tore und 77 Punkte.'
    },
    sources:['FM-Spielübersicht Finn Harps – Sligo Rovers · 24.08.2041','Finn-Harps-Spielerstatistiken · 24.08.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-08-24';
    season.latestHeadline='Premier Division: Escárcega trifft doppelt beim 2:1 gegen Sligo Rovers.';
    season.league={...(season.league||{}),position:1,played:27,wins:25,draws:2,losses:0,goalsFor:82,goalsAgainst:9,goalDifference:73,points:77,latestResult:'24.08.2041 · Finn Harps 2:1 Sligo Rovers'};
    season.changes=season.changes||{notes:[]};
    const note='24.08.2041: 2:1 gegen Sligo Rovers. Emerson Escárcega erzielt beide Harps-Tore und steht nach seinen ersten beiden Ligaspielen bei drei Treffern. Liga: 27 Spiele, 25 Siege, 2 Remis, 0 Niederlagen, 82:9 Tore, 77 Punkte.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-08-24-emerson-escarcega-sligo-doppelpack',date:'2041-08-24',player:'Emerson Escárcega',type:'standout',title:'Doppelpack gegen Sligo',detail:'Erzielt beim 2:1 gegen Sligo Rovers beide Tore der Harps. Nach seinen ersten zwei Ligaspielen für Finn Harps steht er bei drei Treffern.'},
    {id:'2041-08-24-kevin-kelly-150-league-harps',date:'2041-08-24',player:'Kevin Kelly',type:'milestone',title:'150 Ligaspiele für Finn Harps',detail:'Bestreitet gegen Sligo sein 150. Ligaspiel für Finn Harps und zugleich sein 150. Ligaspiel der Karriere.'},
    {id:'2041-08-24-gustavo-da-silva-125-league-harps',date:'2041-08-24',player:'Gustavo da Silva',type:'milestone',title:'125 Ligaspiele für Finn Harps',detail:'Erreicht beim 2:1 gegen Sligo Rovers die Marke von 125 Ligaspielen für den Klub.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const player=(window.FM_PLAYERS||[]).find(p=>p.id==='emerson-escarcega'||p.name==='Emerson Escárcega');
  if(player){
    player.profileDate='2041-08-24';
    player.currentClub='Finn Harps';
    player.status='Finn Harps · starker Start nach Gold-Cup-Rückkehr';
    player.careerNarrative=player.careerNarrative||[];
    const narrative='24.08.2041: Beim 2:1 gegen Sligo Rovers erzielt Emerson Escárcega beide Tore. Nach seinem Debüttor gegen St Patrick’s steht er damit nach den ersten zwei Ligaspielen für Finn Harps bereits bei drei Treffern.';
    if(!player.careerNarrative.includes(narrative))player.careerNarrative.push(narrative);
  }

  const report={
    id:reportId,type:'Spielbericht',date:'2041-08-24',competition:'Premier Division',fixtureDate:'24.08.2041',
    home:'Finn Harps',away:'Sligo Rovers',score:'2:1',location:'Donegal Stadium · Stranorlar · 12.800 Zuschauer',
    headline:'Escárcega antwortet auf das Pokal-Aus mit einem Doppelpack',
    subheadline:'Finn Harps dominiert Sligo mit 76 Prozent Ballbesitz und 3,52 xG. Der mexikanische Neuzugang erzielt beide Tore und kommt nach zwei Ligaspielen bereits auf drei Treffer.',
    label:'PREMIER DIVISION · FINN HARPS 2:1 SLIGO ROVERS',
    heroStat:{label:'Escárcega',value:'2 Tore',note:'31. und 62. Minute · Note 8,6 · 3 Tore in den ersten 2 Ligaspielen'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Nur drei Tage nach dem historischen Pokal-Aus gegen Derry City kehrt Finn Harps im Ligaalltag sofort in die Spur zurück. Das 2:1 gegen Sligo wirkt auf der Anzeigetafel knapp, das Spiel selbst ist es kaum. Die Hauptrolle übernimmt erneut Emerson Escárcega.',
    sections:[
      {title:'Escárcega setzt seinen Start fort',text:'Nach seinem Tor beim Harps-Debüt gegen St Patrick’s trifft der mexikanische Gold-Cup-Sieger diesmal doppelt. In der 31. Minute fällt das 1:0, in der 62. Minute das 2:0.'},
      {title:'Das Ergebnis täuscht über die Dominanz',text:'Finn Harps kommt auf 18:3 Schüsse, 7:1 Schüsse aufs Tor, sechs Großchancen und 3,52:0,41 xG. Dazu stehen 76 Prozent Ballbesitz und 673 erfolgreiche Pässe.'},
      {title:'Sligo macht es spät noch einmal eng',text:'Stuart Taylor trifft in der 78. Minute mit Sligos einzigem Schuss aufs Tor zum 2:1. Mehr lässt Finn Harps nicht zu, sodass die drei Punkte im Donegal Stadium bleiben.'},
      {title:'Kelly und da Silva mit Jubiläen',text:'Kevin Kelly absolviert sein 150. Ligaspiel für Finn Harps und zugleich sein 150. Ligaspiel der Karriere. Gustavo da Silva erreicht die Marke von 125 Ligaspielen für den Klub.'},
      {title:'In der Liga bleibt die Null bei Niederlagen stehen',text:'Nach 27 Spielen steht Finn Harps bei 25 Siegen und zwei Remis. Die Bilanz von 82:9 Toren und 77 Punkten unterstreicht, dass das Pokal-Aus die nationale Ligadominanz nicht erschüttert.'}
    ],
    strengthsTitle:'WAS DIE REAKTION AUSZEICHNET',strengthsHeading:'Kontrolle und ein neuer Torjäger im Rhythmus',
    strengths:['Escárcega-Doppelpack','76 % Ballbesitz','18:3 Schüsse','7:1 aufs Tor','3,52:0,41 xG','6:0 Großchancen','673 angekommene Pässe'],
    vulnerabilitiesTitle:'WAS NOCH STÖRT',vulnerabilitiesHeading:'Ein völlig kontrolliertes Spiel wird unnötig knapp',
    vulnerabilities:['Nur zwei Tore aus 3,52 xG','Später Gegentreffer aus Sligos einzigem Schuss aufs Tor','Trotz sechs Großchancen bleibt die Entscheidung bis zum Ende formal offen'],
    verdictHeading:'Die beste Antwort ist ein Sieg, Escárcega liefert ihn persönlich',
    verdict:'Nach dem Pokal-Aus hätte Unruhe entstehen können. Stattdessen kontrolliert Finn Harps Sligo nahezu vollständig und gewinnt verdient. Noch wichtiger für die kommenden europäischen Aufgaben: Escárcega scheint ohne lange Anpassungsphase angekommen zu sein.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 24. August 2041.',
    sources:['FM-Spielübersicht Finn Harps – Sligo Rovers · 24.08.2041','Finn-Harps-Spielerstatistiken · 24.08.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-08-24-sligo-rovers-liga',date:'2041-08-24',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · FINN HARPS 2:1 SLIGO ROVERS',
    title:'Escárcega trifft doppelt: Harps reagieren sofort auf das Pokal-Aus',
    summary:'Emerson Escárcega erzielt beim 2:1 gegen Sligo Rovers beide Tore. Finn Harps dominiert mit 76 Prozent Ballbesitz, 18:3 Schüssen und 3,52:0,41 xG und bleibt nach 27 Ligaspielen ungeschlagen.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','sligo-rovers','emerson-escarcega','kevin-kelly','gustavo-da-silva']
  });
})();