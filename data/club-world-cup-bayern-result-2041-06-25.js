(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-06-25-bayern-club-world-cup-round-of-16';
  const reportId='2041-06-25-klub-wm-bayern-spielbericht';

  const match={
    id:fixtureId,date:'2041-06-25',season:2041,competition:'FIFA Club World Cup',stage:'2. Runde · Achtelfinale',
    home:{id:'bayern',name:'Bayern München',short:'FCB',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    venue:'Marcel Desailly-Arena',location:'Rennes, Frankreich',attendance:43400,awayFans:2975,weather:'14 °C',
    halfTime:'0:0',headline:"O'Neill entscheidet das Wiedersehen",verdict:'Finn Harps zieht mit einem 1:0 gegen Bayern ins Klub-WM-Viertelfinale ein.',reportStatus:'complete',
    events:[
      {minute:5,type:'injury',team:'Bayern München',player:'Luis Sánchez',text:'verletzt'},
      {minute:7,type:'yellow',team:'Bayern München',player:'Alexander Fenske',text:'Verwarnung'},
      {minute:78,type:'goal',team:'Finn Harps',player:"Jim O'Neill",text:'0:1'}
    ],
    stats:[
      {label:'Tore',home:0,away:1,kind:'number'},
      {label:'Schüsse',home:5,away:5,kind:'number'},
      {label:'Schüsse aufs Tor',home:0,away:3,kind:'number'},
      {label:'xG',home:0.22,away:0.58,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:4,away:2,kind:'number'},
      {label:'Großchancen',home:0,away:0,kind:'number'},
      {label:'Ballbesitz',home:57,away:43,kind:'percent'},
      {label:'Ecken',home:5,away:1,kind:'number'},
      {label:'Fouls',home:8,away:12,kind:'number'},
      {label:'Angekommene Pässe',home:573,away:434,kind:'number',homeDetail:'92 % · 573/623',awayDetail:'88 % · 434/492'},
      {label:'Gelbe Karten',home:1,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:6.71,away:6.94,kind:'decimal'},
      {label:'Intensive Sprints',home:58,away:66,kind:'number'}
    ],
    analysis:{
      summary:"Finn Harps schlägt Bayern München erneut. Bayern hatte 57 Prozent Ballbesitz und 573 angekommene Pässe, brachte aber keinen einzigen Abschluss auf das Tor. Jim O'Neill entschied das enge K.-o.-Spiel in der 78. Minute.",
      possession:'Bayern kontrollierte mehr Ball und spielte deutlich mehr Pässe. Die Harps hielten die Münchner jedoch erneut außerhalb der wirklich gefährlichen Zonen.',
      chanceCreation:'Beide Teams kamen auf fünf Abschlüsse. Finn Harps brachte drei davon aufs Tor und erzeugte 0,58 xG, Bayern blieb bei 0,22 xG und null Schüssen aufs Tor.',
      defensive:'Zum dritten Mal im Jahr 2041 bleibt Finn Harps gegen Bayern ohne Gegentor. Über die drei Begegnungen im Champions-League-Viertelfinale und bei der Klub-WM kommt Bayern insgesamt nur auf zwei Schüsse aufs Tor und 0,69 xG.',
      turningPoint:"In der 78. Minute erzielte Jim O'Neill das einzige Tor. In einem Spiel ohne Großchancen reichte dieser eine saubere Moment zum Einzug ins Viertelfinale.",
      nuance:'Anders als im Champions-League-Viertelfinale gab es diesmal kein Rückspiel. Finn Harps musste die Partie in 90 Minuten entscheiden und tat es erneut mit defensiver Kontrolle statt offensivem Feuerwerk.'
    },
    keyPerformers:[
      {player:"Jim O'Neill",rating:8.1,role:'Mittelfeldspieler Finn Harps',note:'Siegtreffer in der 78. Minute und beste Harps-Note.'},
      {player:'Paulo Henrique',rating:7.3,role:'Torwart Finn Harps',note:'Bayern brachte keinen Schuss aufs Tor; erneut zu null gegen München.'},
      {player:'Diego Fernández',rating:7.2,role:'Verteidiger Finn Harps',note:'Stabile rechte Seite und Teil der erneut makellosen Defensive.'},
      {player:'Gustavo da Silva',rating:7.1,role:'Einwechselspieler Finn Harps',note:'Gute Wirkung nach seiner Einwechslung.'},
      {player:"Cormac O'Kane",rating:7.1,role:'Einwechselspieler Finn Harps',note:'Half, die Schlussphase nach der Führung zu kontrollieren.'}
    ],
    sources:['FM-Spielübersicht Bayern München – Finn Harps · 25.06.2041','Finn-Harps-Spielerstatistiken und Noten · Klub-WM-Achtelfinale']
  };
  upsert(window.FM_MATCHES,match);

  const fixture=window.FM_FIXTURES.find(x=>x.id===fixtureId);
  if(fixture){
    Object.assign(fixture,{status:'played',score:'0:1',homeGoals:0,awayGoals:1,attendance:43400,weather:'14 °C',report:`presse.html?id=${reportId}`,summary:"Jim O'Neill trifft in der 78. Minute. Finn Harps schlägt Bayern München 1:0 und steht im Viertelfinale der Klub-WM."});
  }

  const current=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...current,
    id:'club-world-cup-2041',year:2041,status:'quarter-final',titleHolder:'Finn Harps',group:'H',
    knockout:{
      ...(current.knockout||{}),
      round:'Viertelfinale',previousRound:'Achtelfinale · 1:0 gegen Bayern München',
      previousFixtureId:fixtureId,
      nextOpponent:'Marseille oder Barcelona',
      quarterFinalPath:['Marseille','Barcelona']
    },
    headline:"Klub-WM 2041: Finn Harps schlägt Bayern München 1:0. Jim O'Neill trifft in der 78. Minute; im Viertelfinale wartet Marseille oder Barcelona."
  });

  const bayern=(window.FM_CLUBS||[]).find(x=>x.id==='bayern'||x.name==='FC Bayern München'||x.name==='Bayern München');
  if(bayern){
    bayern.meetings=bayern.meetings||[];
    bayern.meetings.push({date:'25.06.2041',competition:'FIFA Club World Cup · Achtelfinale',venue:'Neutral · Rennes',result:'0:1'});
    bayern.summary='2041 traf Bayern dreimal auf Finn Harps und verlor alle drei Spiele ohne eigenes Tor: 0:1 und 0:2 im Champions-League-Viertelfinale sowie 0:1 im Klub-WM-Achtelfinale.';
    bayern.clubWorldCup2041={stage:'Achtelfinale',opponent:'Finn Harps',date:'25.06.2041',result:'0:1',status:'ausgeschieden'};
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-06-25';
    season.latestHeadline="Klub-WM: O'Neill schießt Finn Harps mit einem 1:0 gegen Bayern ins Viertelfinale.";
    season.clubWorldCup={
      ...(season.clubWorldCup||{}),status:'Viertelfinale',lastResult:'25.06.2041 · Bayern München 0:1 Finn Harps',
      nextOpponent:'Marseille oder Barcelona',knockoutWins:1
    };
    season.changes=season.changes||{notes:[]};
    season.changes.notes=[...(season.changes.notes||[]),"25.06.2041: 1:0 gegen Bayern München im Klub-WM-Achtelfinale; Jim O'Neill trifft in der 78. Minute."];
  }

  window.FM_PLAYER_UPDATES.push({date:'2041-06-25',player:"Jim O'Neill",type:'match-winner',title:'Siegtreffer gegen Bayern',detail:'Tor in der 78. Minute zum 1:0 im Klub-WM-Achtelfinale; Note 8,1.'});

  const report={
    id:reportId,type:'Spielbericht',date:'2041-06-25',competition:'FIFA Club World Cup',fixtureDate:'25.06.2041',
    home:'Bayern München',away:'Finn Harps',score:'0:1',location:'Marcel Desailly-Arena · Rennes · 43.400 Zuschauer',
    headline:"Dreimal Bayern, dreimal null: O'Neill schickt Finn Harps ins Viertelfinale",
    subheadline:"Auch das dritte Duell des Jahres geht an die Harps. Bayern hat mehr Ball, aber keinen Schuss aufs Tor. Jim O'Neill entscheidet das Achtelfinale in der 78. Minute.",
    label:'FIFA CLUB WORLD CUP · ACHTELFINALE',
    heroStat:{label:'Bayern gegen Finn Harps 2041',value:'0:4 Tore in drei Spielen',note:'0:1 · 0:2 · 0:1'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:"Die Revanche blieb aus. Bayern München bekam 70 Tage nach dem Champions-League-Viertelfinale die nächste Gelegenheit gegen Finn Harps und verlor erneut ohne eigenen Treffer. In Rennes brauchte es diesmal bis zur 78. Minute, ehe Jim O'Neill den Titelverteidiger mit dem 1:0 ins Viertelfinale schoss.",
    sections:[
      {title:'Bayern hat den Ball, Finn Harps die Kontrolle',text:'57 Prozent Ballbesitz und 573 angekommene Pässe lesen sich nach Münchner Dominanz. Doch Bayern brachte keinen seiner fünf Abschlüsse auf Paulo Henriques Tor. Finn Harps kam ebenfalls auf fünf Schüsse, davon drei aufs Tor.'},
      {title:"O'Neill findet den einen Moment",text:"Das Spiel produzierte keine einzige Großchance. In der 78. Minute reichte deshalb ein sauber ausgespielter Harps-Angriff: Jim O'Neill traf zum 1:0 und erhielt mit 8,1 die beste Note seiner Mannschaft."},
      {title:'Die Bayern-Serie wird langsam bizarr',text:'Im April gewann Finn Harps das Champions-League-Viertelfinale mit 1:0 und 2:0. Nun folgt das dritte Duell innerhalb von 76 Tagen und der dritte Sieg ohne Gegentor. Über alle drei Partien kommt Bayern gegen die Harps auf nur zwei Schüsse aufs Tor und 0,69 xG.'},
      {title:'Wieder dieselbe defensive Handschrift',text:'Bayern durfte passen, aber kaum in gefährliche Räume eindringen. Genau dieses Muster hatte schon im Champions-League-Viertelfinale funktioniert. Die Harps mussten dafür diesmal auf das Sicherheitsnetz eines Rückspiels verzichten und hielten trotzdem stand.'},
      {title:'Der Titelverteidiger lebt weiter',text:'Finn Harps steht im Viertelfinale der Klub-WM. Dort wartet der Sieger aus Marseille gegen Barcelona. Nach Manchester City in der Gruppenphase und Bayern im Achtelfinale bleibt der Turnierweg weiterhin mit europäischen Schwergewichten gepflastert.'}
    ],
    strengthsTitle:'WAS DIESER SIEG ÜBER FINN HARPS SAGT',strengthsHeading:'Kontrolle ohne Spektakel',
    strengths:['Drittes Zu-null-Spiel gegen Bayern im Jahr 2041','Bayern ohne einen einzigen Schuss aufs Tor','Jim O’Neill entscheidet ein enges K.-o.-Spiel spät','Finn Harps steht als Titelverteidiger im Klub-WM-Viertelfinale'],
    vulnerabilitiesTitle:'WAS KNAPP BLIEB',vulnerabilitiesHeading:'Ein Tor trennte Weiterkommen und Ausscheiden',
    vulnerabilities:['Nur 0,58 xG und keine Großchance','43 Prozent Ballbesitz und deutlich weniger Pässe als Bayern','Bis zur 78. Minute stand es 0:0','Im Viertelfinale wartet Marseille oder Barcelona'],
    verdictHeading:'Bayern findet auch im dritten Versuch keinen Schlüssel',
    verdict:'Es war kein glänzender Sieg und genau das macht ihn aussagekräftig. Finn Harps musste Bayern nicht überrollen. Die Harps ließen den Gegner spielen, nahmen ihm aber erneut fast jede klare Abschlussmöglichkeit. Drei Spiele innerhalb weniger Monate, drei Siege, 4:0 Tore. Aus einem günstigen Matchup ist inzwischen eine kleine Münchner Nemesis geworden.',
    sourcesHeading:'Spielbelege',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots zum Klub-WM-Achtelfinale am 25. Juni 2041 und den bereits dokumentierten Champions-League-Duellen im April.',
    sources:['FM-Spielübersicht Bayern München – Finn Harps · 25.06.2041','Finn-Harps-Spielerstatistiken · 25.06.2041','Champions-League-Viertelfinale gegen Bayern · April 2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-25-klub-wm-bayern',date:'2041-06-25',season:2041,category:'Klub-WM',accent:'blue',featured:true,
    eyebrow:'FIFA CLUB WORLD CUP · ACHTELFINALE',title:"O'Neill schießt Bayern erneut aus dem Weg",
    summary:"Finn Harps gewinnt 1:0 gegen Bayern. Jim O'Neill trifft in der 78. Minute, Bayern bleibt ohne Schuss aufs Tor. Im Viertelfinale wartet Marseille oder Barcelona.",
    href:`presse.html?id=${reportId}`,entities:['finn-harps','bayern','jim-oneill','club-world-cup']
  });
})();