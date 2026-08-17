(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2041-11-06-young-boys-finn-harps-champions-league',date:'2041-11-06',season:2041,competition:'UEFA Champions League',stage:'Ligaphase · 4. Spieltag',
    home:{id:'young-boys',name:'Young Boys',short:'YB',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    score:'0:1',homeGoals:0,awayGoals:1,halfTime:'0:1',
    venue:'Stadion Wankdorf',location:'Bern, Schweiz',attendance:30434,awayFans:609,weather:'Windig · 6 °C',referee:'Unbekannt',
    headline:'Di Maio reicht: Finn Harps gewinnt unspektakulär 1:0 bei Young Boys',
    verdict:'Kein Spektakel, aber maximale Kontrolle. Daniele Di Maio erzielt in der 22. Minute das einzige Tor. Young Boys kommt über 90 Minuten auf nur einen Schuss, keinen Abschluss aufs Tor und 0,07 xG. Nach vier Champions-League-Spielen steht Finn Harps bei vier Siegen, 10:1 Toren und zwölf Punkten an der Tabellenspitze.',
    scorers:[{player:'Daniele Di Maio',team:'Finn Harps',goals:1,minutes:[22]}],
    events:[
      {minute:22,type:'goal',team:'Finn Harps',player:'Daniele Di Maio',text:'0:1'},
      {minute:43,type:'red',team:'Young Boys',player:'Artan Mustafa',text:'Platzverweis'}
    ],
    stats:[
      {label:'Schüsse',home:1,away:9,kind:'number'},
      {label:'Schüsse aufs Tor',home:0,away:5,kind:'number'},
      {label:'xG',home:0.07,away:1.20,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:0,away:1,kind:'number'},
      {label:'Großchancen',home:0,away:1,kind:'number'},
      {label:'Ballbesitz',home:52,away:48,kind:'percent'},
      {label:'Ecken',home:0,away:9,kind:'number'},
      {label:'Fouls',home:17,away:15,kind:'number'},
      {label:'Angekommene Pässe',home:514,away:479,kind:'number',homeDetail:'91 % · 514/561',awayDetail:'89 % · 479/538'},
      {label:'Gewonnene Zweikämpfe',home:64,away:74,kind:'percent',homeDetail:'16/25',awayDetail:'20/35'},
      {label:'Gewonnene Kopfbälle',home:62,away:35,kind:'percent',homeDetail:'16/26',awayDetail:'9/26'},
      {label:'Gelbe Karten',home:0,away:0,kind:'number'},
      {label:'Rote Karten',home:1,away:0,kind:'number'},
      {label:'Intensität',home:6.66,away:6.96,kind:'decimal'},
      {label:'Intensive Sprints',home:78,away:107,kind:'number'}
    ],
    championsLeagueAfterMatch:{position:1,played:4,wins:4,draws:0,losses:0,goalsFor:10,goalsAgainst:1,goalDifference:9,points:12,note:'Inter und Monaco stehen ebenfalls bei zwölf Punkten; Finn Harps führt nach Tordifferenz.'},
    opponentAfterMatch:{team:'Young Boys',position:24,played:4,wins:1,draws:1,losses:2,goalsFor:3,goalsAgainst:4,goalDifference:-1,points:4},
    standout:{player:'Daniele Di Maio',team:'Finn Harps',rating:8.0,goals:1,note:'Erzielt in der 22. Minute das einzige Tor und bringt 98 Prozent seiner Pässe an.'},
    keyPerformers:[
      {player:'Evan Reilly',rating:7.4,note:'Bleibt ohne Gegentor; Young Boys bringt keinen Schuss aufs Tor.'},
      {player:'Diego Fernández',rating:7.3,note:'Teil einer Defensive, die Young Boys bei 0,07 xG hält.'},
      {player:'Torric Brice',rating:7.1,note:'Stabil in der Defensive und im Passspiel.'}
    ],
    milestones:[
      {player:'Daniele Di Maio',text:'Absolviert sein 100. Spiel als Profi.'},
      {player:"Cormac O'Kane",text:'Absolviert sein 250. Spiel als Profi.'},
      {team:'Finn Harps',text:'Baut den saisonübergreifenden Vereinsrekord auf 14 Siege in Serie aus.'}
    ],
    analysis:{
      calmControl:'Das 1:0 ist deutlich unspektakulärer als viele Harps-Siege, aber defensiv fast makellos. Young Boys produziert nur einen Schuss, keinen aufs Tor und 0,07 xG.',
      winner:'Daniele Di Maio entscheidet die Partie bereits in Minute 22. Es bleibt sein einziger Treffer, aber er reicht vollständig.',
      redCard:'Artan Mustafa sieht in der 43. Minute Rot. Finn Harps verwaltet die Führung danach ohne Hektik und lässt auch in Überzahl keine offene Partie entstehen.',
      possession:'Young Boys hat mit 52 Prozent sogar etwas mehr Ballbesitz, erzeugt daraus aber praktisch keine Gefahr. Finn Harps ist mit 48 Prozent Ballbesitz deutlich zielgerichteter und kommt auf neun Schüsse, fünf davon aufs Tor.',
      europeanRun:'Vier Spiele, vier Siege, 10:1 Tore und zwölf Punkte: Finn Harps führt die Champions-League-Ligaphase nach dem vierten Spieltag an.',
      qualificationContext:'Mit zwölf Punkten ist die Ausgangslage für die direkte Top-8-Qualifikation sehr stark; die verbleibenden Ligaphasen-Spiele entscheiden nun vor allem über die genaue Platzierung.'
    },
    sources:['FM-Spielübersicht Young Boys – Finn Harps · 06.11.2041','Finn-Harps-Spielerstatistiken · 06.11.2041','Champions-League-Tabelle nach dem 4. Spieltag · 06.11.2041']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const yb=window.FM_CLUBS.find(x=>x.id==='young-boys');
  if(yb){
    yb.meetings=yb.meetings||[];
    const meeting={date:'06.11.2041',venue:'A',result:'0:1',competition:'UEFA Champions League · Ligaphase'};
    const idx=yb.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)yb.meetings[idx]=meeting;else yb.meetings.push(meeting);
    yb.summary='Finn Harps gewinnt am 6. November 2041 im Stadion Wankdorf mit 1:0. Daniele Di Maio erzielt das einzige Tor; Young Boys bleibt bei nur einem Schuss und 0,07 xG.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-11-06';
    season.latestHeadline='Champions League: Finn Harps gewinnt 1:0 bei Young Boys und steht nach vier Spielen mit zwölf Punkten an der Spitze.';
    season.championsLeague={
      ...(season.championsLeague||{}),stage:'Ligaphase',played:4,wins:4,draws:0,losses:0,goalsFor:10,goalsAgainst:1,goalDifference:9,points:12,position:1,
      latestResult:'06.11.2041 · Young Boys 0:1 Finn Harps'
    };
    season.changes=season.changes||{notes:[]};
    const note='06.11.2041: Finn Harps gewinnt in Bern 1:0 gegen Young Boys. Daniele Di Maio trifft in Minute 22; Young Boys kommt auf nur einen Schuss und 0,07 xG. Nach vier Champions-League-Spielen: 4 Siege, 10:1 Tore, 12 Punkte, Platz 1.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-11-06-daniele-di-maio-young-boys-winner',date:'2041-11-06',player:'Daniele Di Maio',type:'standout',title:'Siegtreffer in Bern',detail:'Erzielt in der 22. Minute das einzige Tor beim 1:0 gegen Young Boys und erhält die Note 8,0.'},
    {id:'2041-11-06-daniele-di-maio-100-pro',date:'2041-11-06',player:'Daniele Di Maio',type:'milestone',title:'100. Profispiel',detail:'Absolviert beim Champions-League-Sieg in Bern sein 100. Spiel als Profi.'},
    {id:'2041-11-06-cormac-okane-250-pro',date:'2041-11-06',player:"Cormac O'Kane",type:'milestone',title:'250. Profispiel',detail:'Erreicht beim 1:0 gegen Young Boys sein 250. Spiel als Profi.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-11-06-young-boys-finn-harps-spielbericht',type:'Spielbericht',date:'2041-11-06',competition:'UEFA Champions League',fixtureDate:'06.11.2041',
    home:'Young Boys',away:'Finn Harps',score:'0:1',location:'Stadion Wankdorf · Bern · 30.434 Zuschauer',
    headline:'Ein Tor genügt: Harps gewinnt völlig unaufgeregt in Bern',
    subheadline:'Daniele Di Maio trifft in Minute 22. Young Boys bleibt bei einem einzigen Schuss und 0,07 xG, während Finn Harps nach vier Champions-League-Spielen bei zwölf Punkten steht.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · YOUNG BOYS 0:1 FINN HARPS',
    heroStat:{label:'Champions-League-Start',value:'4 Spiele · 4 Siege',note:'12 Punkte · 10:1 Tore · Platz 1'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Diesmal gibt es keine Torlawine. Finn Harps braucht in Bern genau einen Treffer und lässt danach fast nichts mehr zu. Di Maio entscheidet das Spiel in der 22. Minute, Young Boys findet offensiv über die gesamte Partie keinen Weg durch die Harps-Defensive.',
    sections:[
      {title:'Di Maio macht früh den Unterschied',text:'In der 22. Minute erzielt Daniele Di Maio das 1:0. Der Treffer bleibt der einzige des Abends und reicht zum vierten Champions-League-Sieg im vierten Spiel.'},
      {title:'Young Boys ohne echte Antwort',text:'Die Schweizer kommen in 90 Minuten auf nur einen Schuss, keinen Abschluss aufs Tor und 0,07 xG. Selbst 52 Prozent Ballbesitz führen zu praktisch keiner Gefahr.'},
      {title:'Rot kurz vor der Pause',text:'Artan Mustafa wird in der 43. Minute des Feldes verwiesen. Finn Harps nutzt die Überzahl nicht für ein Offensivfeuerwerk, sondern kontrolliert die Partie bis zum Ende.'},
      {title:'Vier aus vier',text:'Nach vier Ligaphasen-Spielen steht Finn Harps bei zwölf Punkten und 10:1 Toren. Inter und Monaco haben ebenfalls zwölf Punkte, die Harps führen aufgrund der besseren Tordifferenz.'},
      {title:'Zwei persönliche Marken',text:'Daniele Di Maio absolviert sein 100. Profispiel, Cormac O’Kane sein 250. Profispiel. Gleichzeitig wächst der saisonübergreifende Harps-Rekord auf 14 Siege in Folge.'}
    ],
    verdictHeading:'Kein Feuerwerk, aber genau die Art Sieg eines Spitzenteams',
    verdict:'Ein 1:0 auswärts, bei dem der Gegner keinen Schuss aufs Tor bringt, ist beinahe die unspektakulärste Form von Dominanz. Finn Harps muss in Bern weder glänzen noch Risiken eingehen. Di Maios Tor und eine extrem saubere Defensivleistung reichen für den nächsten europäischen Schritt.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-11-06-young-boys-finn-harps',date:'2041-11-06',season:2041,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · 4. SPIELTAG',
    title:'Di Maio reicht: 1:0 bei Young Boys',
    summary:'Finn Harps gewinnt völlig unaufgeregt in Bern. Young Boys bleibt ohne Schuss aufs Tor; die Harps stehen nach vier Spielen bei zwölf Punkten und führen die Ligaphase an.',
    href:'presse.html?id=2041-11-06-young-boys-finn-harps-spielbericht',
    entities:['finn-harps','young-boys','daniele-di-maio','cormac-okane','season-2041']
  });
})();