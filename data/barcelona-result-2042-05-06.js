(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-05-06';
  const fixtureId='2042-05-06-finn-harps-barcelona-champions-league-semifinal-second-leg';
  const reportId='2042-05-06-finn-harps-barcelona-1-0-nv-spielbericht';

  const match={
    id:fixtureId,date,season:2042,competition:'UEFA Champions League',stage:'Halbfinale · Rückspiel · n.V.',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    away:{id:'barcelona',name:'FC Barcelona',short:'BAR',score:0},
    score:'1:0 n.V.',homeGoals:1,awayGoals:0,halfTime:'0:0',aggregate:'1:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:10000,awayFans:500,weather:'21 °C',
    headline:'120 Minuten Kampf: O’Kane schießt Finn Harps ins Champions-League-Finale',
    verdict:'Nach dem 0:0 im Camp Nou braucht Finn Harps im Rückspiel die Verlängerung, setzt sich dort aber verdient durch. Cormac O’Kane erzielt in der 101. Minute nach Vorlage von Ben Barry das einzige Tor des Abends und zugleich sein 50. Tor für Finn Harps. Mit 15:9 Schüssen, 5:2 Schüssen aufs Tor, 2,96:0,86 xG und 4:1 Großchancen erarbeiten sich die Harps den Finaleinzug gegen einen erfahrenen Barcelona-Kader. Der Preis ist hoch: Emerson Escárcega erleidet eine Handgelenksfraktur, Romano Maisto eine Knöchelprellung.',
    events:[
      {minute:15,type:'yellow',team:'FC Barcelona',player:'Ángel',text:'Gelbe Karte'},
      {minute:39,type:'yellow',team:'FC Barcelona',player:'James Ward',text:'Gelbe Karte'},
      {minute:43,type:'yellow',team:'FC Barcelona',player:'Aleksandar Ilić',text:'Gelbe Karte'},
      {minute:78,type:'yellow',team:'FC Barcelona',player:'Isidro Valle',text:'Gelbe Karte'},
      {minute:87,type:'yellow',team:'FC Barcelona',player:'James Ward',text:'Gelbe Karte'},
      {minute:90,type:'yellow',team:'Finn Harps',player:'Callum Brennan',text:'Gelbe Karte'},
      {minute:96,type:'substitution',team:'Finn Harps',player:'Ben Barry',text:'Ben Barry kommt in der Verlängerung und bereitet später den Siegtreffer vor'},
      {minute:98,type:'injury',team:'Finn Harps',player:'Emerson Escárcega',text:'Handgelenksfraktur nach eigenem Tackling; voraussichtlich 3–4 Wochen Ausfall je nach Behandlung'},
      {minute:101,type:'goal',team:'Finn Harps',player:"Cormac O'Kane",assist:'Ben Barry',text:'1:0 nach Vorlage von Ben Barry'},
      {minute:111,type:'yellow',team:'Finn Harps',player:'Torric Bruce',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:15,away:9,kind:'number'},
      {label:'Schüsse aufs Tor',home:5,away:2,kind:'number'},
      {label:'xG',home:2.96,away:0.86,kind:'decimal'},
      {label:'Großchancen',home:4,away:1,kind:'number'},
      {label:'Ballbesitz',home:56,away:44,kind:'percent'},
      {label:'Ecken',home:8,away:4,kind:'number'},
      {label:'Fouls',home:15,away:13,kind:'number'},
      {label:'Angekommene Pässe',home:'748/832',away:'584/649',kind:'text'},
      {label:'Passquote',home:90,away:90,kind:'percent'},
      {label:'Gewonnene Zweikämpfe',home:89,away:86,kind:'percent'},
      {label:'Gewonnene Kopfbälle',home:39,away:54,kind:'percent'},
      {label:'Gelbe Karten',home:2,away:4,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:7.18,away:6.65,kind:'decimal'},
      {label:'Intensive Sprints',home:170,away:131,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':7.7,'Diego Fernández':7.4,'Daniele Di Maio':7.3,'Torric Bruce':7.4,'Kevin Kelly':6.5,
      'Amir Mašić':7.1,'Daryl Frame':6.8,"Cormac O'Kane":9.1,'Giacomo Papini':7.4,'Dom Docherty':6.0,
      'Emerson Escárcega':6.2,'Gustavo da Silva':6.8,'Pol Muñoz':6.4,'Callum Brennan':6.6,'Romano Maisto':6.5,
      'Ben Barry':7.4,'Justin Ramsey':6.8
    },
    standout:{player:"Cormac O'Kane",team:'Finn Harps',rating:9.1,note:'Matchwinner in der 101. Minute. Sein 50. Tor für Finn Harps entscheidet das Halbfinale; außerdem 1,22 Expected Assists laut Spielanalyse.'},
    analysis:{
      fight:'Nach 180 torlosen Minuten beider Halbfinalspiele erzwingt Finn Harps in Donegal die Verlängerung. Dort fällt in Minute 101 endlich die Entscheidung.',
      deserved:'Die Harps erzeugen das klar bessere Chancenprofil: 15:9 Schüsse, 5:2 aufs Tor, 2,96:0,86 xG und 4:1 Großchancen. Der knappe Endstand täuscht darüber hinweg, wie viel Druck Finn Harps über 120 Minuten aufgebaut hat.',
      okane:'Cormac O’Kane übernimmt im größten Moment Verantwortung. Der Treffer zum 1:0 ist zugleich sein 50. Tor für Finn Harps. Mit Note 9,1 ist er klarer Spieler des Spiels.',
      barry:'Ben Barry kommt in der Verlängerung und liefert die Vorlage zum entscheidenden Treffer. Der 18-Jährige beeinflusst damit direkt ein Champions-League-Halbfinale.',
      defence:'Paulo Henrique bleibt erneut ohne Gegentor und steht laut Spielanzeige nun seit 415 Minuten ohne Gegentor. Barcelona erzielt über beide Halbfinalspiele inklusive Verlängerung keinen Treffer.',
      injuries:'Der Finaleinzug fordert einen Preis: Escárcega erleidet eine Handgelenksfraktur und droht je nach Behandlung etwa drei bis vier Wochen auszufallen. Romano Maisto zieht sich eine Knöchelprellung zu und fällt voraussichtlich ein bis drei Tage aus.',
      final:'Finn Harps steht nach dem 1:0-Gesamtsieg im Champions-League-Finale. Der Finalgegner ist zum Zeitpunkt dieses Eintrags noch nicht ausgewiesen.'
    },
    notes:[
      'Finn Harps schlägt Barcelona nach Verlängerung 1:0 und zieht mit 1:0 im Gesamtergebnis ins Champions-League-Finale ein.',
      'Cormac O’Kane erzielt in Minute 101 das Siegtor nach Vorlage von Ben Barry.',
      'O’Kanes Treffer ist sein 50. Tor für Finn Harps.',
      'Finn Harps gewinnt das Chancenbild klar mit 2,96:0,86 xG und 4:1 Großchancen.',
      'Paulo Henrique steht laut Spielanzeige nun bei 415 Minuten ohne Gegentor.',
      'Barcelona bleibt in 210 Halbfinal-Minuten ohne Tor.',
      'Escárcega erleidet eine Handgelenksfraktur; Maisto eine Knöchelprellung.',
      'Nach dem 4:0 gegen Manchester City und dem 1:0 gegen Barcelona hat Finn Harps in den letzten beiden Champions-League-K.-o.-Runden kein Gegentor kassiert.'
    ],
    sources:['FM-Spielübersicht Finn Harps – FC Barcelona · 06.05.2042','Finn-Harps-Spielerstatistiken · 06.05.2042','Medizinische Berichte Escárcega und Maisto · 06.05.2042']
  };

  upsert(window.FM_MATCHES,match);

  const barcelona=window.FM_CLUBS.find(x=>x.id==='barcelona'||x.id==='fc-barcelona'||x.name==='Barcelona'||x.name==='FC Barcelona');
  if(barcelona){
    barcelona.meetings=barcelona.meetings||[];
    const meeting={date:'06.05.2042',competition:'UEFA Champions League · Halbfinale Rückspiel',venue:'H',result:'1:0 n.V.',aggregate:'1:0'};
    const idx=barcelona.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)barcelona.meetings[idx]=meeting;else barcelona.meetings.unshift(meeting);
    barcelona.lastMeeting='06.05.2042 · Finn Harps 1:0 n.V. Barcelona';
    barcelona.summary='Champions-League-Halbfinalgegner 2042. Nach dem 0:0 im Camp Nou verliert Barcelona das Rückspiel in Donegal nach Verlängerung 0:1. Cormac O’Kane entscheidet das Duell in Minute 101; Finn Harps zieht mit 1:0 im Gesamtergebnis ins Finale ein.';
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-05-06-emerson-escarcega-handgelenksfraktur',date,player:'Emerson Escárcega',type:'injury',
    title:'Escárcega verletzt sich beim Finaleinzug',
    detail:'Im Halbfinal-Rückspiel gegen Barcelona erleidet Escárcega eine Handgelenksfraktur. Je nach Behandlung wird mit ungefähr drei bis vier Wochen Ausfall gerechnet; die medizinische Entscheidung war im bereitgestellten Stand noch offen.'
  });
  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-05-06-romano-maisto-knoechelprellung',date,player:'Romano Maisto',type:'injury',
    title:'Maisto mit kurzer Zwangspause',
    detail:'Romano Maisto zieht sich gegen Barcelona nach einem schweren Foul eine Knöchelprellung zu und fällt voraussichtlich ein bis drei Tage aus.'
  });
  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-05-06-cormac-okane-50-tore',date,player:"Cormac O'Kane",type:'milestone',
    title:'O’Kane erreicht 50 Tore für Finn Harps',
    detail:'Sein 50. Harps-Tor fällt in der 101. Minute des Champions-League-Halbfinals gegen Barcelona und schießt Finn Harps ins Finale.'
  });

  const cl=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...cl,
    status:'Finale erreicht',
    knockoutStage:{
      ...(cl.knockoutStage||{}),
      semifinals:{
        ...((cl.knockoutStage||{}).semifinals||{}),
        finnHarps:{
          ...((((cl.knockoutStage||{}).semifinals||{}).finnHarps)||{}),
          opponent:'Barcelona',status:'gewonnen',
          firstLeg:{date:'2042-04-30',venue:'Spotify Camp Nou',result:'0:0'},
          secondLeg:{date,venue:'Donegal Stadium',result:'1:0 n.V.'},aggregate:'1:0',
          hero:"Cormac O'Kane (101.)",assist:'Ben Barry',
          notes:['Barcelona über 210 Minuten ohne Tor','O’Kane erzielt sein 50. Harps-Tor','Barry bereitet das Finaltor vor','Escárcega verletzt sich am Handgelenk','Finn Harps erreicht das Champions-League-Finale']
        }
      },
      final:{...((cl.knockoutStage||{}).final||{}),finnHarps:{qualified:true,status:'Finale erreicht',opponent:'noch offen'}}
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Champions League: Finn Harps schlägt Barcelona nach Verlängerung 1:0 und steht im Finale. Cormac O’Kane erzielt in Minute 101 sein 50. Tor für den Klub, Ben Barry liefert die Vorlage. Escárcega erleidet eine Handgelenksfraktur.';
    season.nextFocus={competition:'UEFA Champions League',stage:'Finale',opponent:'noch offen',status:'qualifiziert'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='06.05.2042: Champions-League-Halbfinale, Rückspiel: Finn Harps schlägt Barcelona nach Verlängerung 1:0 und zieht mit 1:0 im Gesamtergebnis ins Finale ein. O’Kane trifft in Minute 101 nach Vorlage von Ben Barry und erreicht damit 50 Tore für Finn Harps. Das Chancenbild lautet 15:9 Schüsse, 5:2 aufs Tor, 2,96:0,86 xG und 4:1 Großchancen. Paulo Henrique steht bei 415 Minuten ohne Gegentor. Escárcega erleidet eine Handgelenksfraktur, Maisto eine Knöchelprellung.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,type:'Spielbericht',date,competition:'UEFA Champions League',fixtureDate:'06.05.2042',
    headline:'120 Minuten Kampf: O’Kane schießt Finn Harps ins Finale',
    subheadline:'Barcelona hält 100 Minuten stand, dann entscheidet Cormac O’Kane das Halbfinale in der Verlängerung. Sein 50. Harps-Tor, vorbereitet vom 18-jährigen Ben Barry, bringt Donegal den nächsten Champions-League-Finaleinzug.',
    label:'CHAMPIONS LEAGUE · HALBFINALE · RÜCKSPIEL · NACH VERLÄNGERUNG',
    heroStat:{label:'Gesamtergebnis',value:'1:0',note:'0:0 in Barcelona · 1:0 n.V. in Donegal'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Was für ein Kampf in Donegal. Nach dem torlosen Hinspiel bleibt auch das Rückspiel 90 Minuten lang ohne Treffer. Finn Harps erzeugt die besseren Chancen, Barcelona verteidigt hartnäckig, und erst in der Verlängerung bricht Cormac O’Kane den Bann. In der 101. Minute verwertet er die Vorlage von Ben Barry zum 1:0. Es ist sein 50. Tor für Finn Harps und eines der wichtigsten seiner Karriere.',
    sections:[
      {title:'Harps drücken, Barça hält dagegen',text:'Der Endstand wirkt knapper als das Chancenbild. Finn Harps kommt auf 15:9 Schüsse, 5:2 aufs Tor, 2,96:0,86 xG und 4:1 Großchancen. Barcelona bleibt gefährlich genug, um das Spiel offen zu halten, doch über 120 Minuten liegt die größere offensive Wucht bei den Harps.'},
      {title:'Minute 101: O’Kane schreibt Geschichte',text:'Ben Barry wird in der Verlängerung eingewechselt und liefert die Vorlage. Cormac O’Kane vollendet zum 1:0. Ausgerechnet dieses Tor ist sein 50. Treffer für Finn Harps. Mit einer 9,1 wird er zum klaren Matchwinner des Abends.'},
      {title:'Die Null wird zur europäischen Waffe',text:'Paulo Henrique steht laut Spielanzeige inzwischen seit 415 Minuten ohne Gegentor. Barcelona schafft in beiden Halbfinalspielen inklusive Verlängerung keinen Treffer. Schon Manchester City blieb im Viertelfinale über beide Spiele torlos. In den letzten beiden Champions-League-K.-o.-Runden steht damit ein 5:0-Gesamttorverhältnis für Finn Harps.'},
      {title:'Der Preis des Finaleinzugs',text:'Emerson Escárcega verletzt sich im Rückspiel am Handgelenk. Die Diagnose lautet Fraktur; je nach Behandlung drohen ungefähr drei bis vier Wochen Pause. Romano Maisto kommt mit einer Knöchelprellung deutlich glimpflicher davon und soll nur ein bis drei Tage fehlen.'},
      {title:'Wieder ein Champions-League-Finale',text:'Nach Caen, Manchester City und Barcelona steht Finn Harps wieder im Endspiel der Königsklasse. Der Gegner ist in diesem Stand noch offen. Fest steht nur: Diese Mannschaft hat sich das Finale über 210 Minuten gegen Barcelona mit Geduld, Defensive und einem einzigen späten Stich erkämpft.'}
    ],
    verdictHeading:'Kein Spektakel, sondern ein europäischer Schwergewichtskampf',
    verdict:'Das 1:0 nach Verlängerung ist vielleicht weniger glamourös als das 4:0 gegen Manchester City, aber gerade deshalb bemerkenswert. Finn Harps kann dominieren, kontern, leiden und warten. Gegen Barcelona brauchte es 191 torlose Minuten des Halbfinals, bevor O’Kane die Tür zum Finale öffnete.',
    sources:['FM-Spielübersicht Finn Harps – FC Barcelona · 06.05.2042','Finn-Harps-Spielerstatistiken · 06.05.2042','Medizinische Berichte Escárcega und Maisto · 06.05.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-05-06-finn-harps-barcelona-finaleinzug',date,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · HALBFINALE · 1:0 N.V.',
    title:'FINALE! O’Kanes 50. Harps-Tor bricht Barcelona in Minute 101',
    summary:'Nach dem 0:0 im Hinspiel schlägt Finn Harps Barcelona in Donegal nach Verlängerung 1:0. Cormac O’Kane trifft nach Vorlage von Ben Barry; Henrique bleibt erneut ohne Gegentor. Escárcega verletzt sich am Handgelenk.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','barcelona','cormac-okane','ben-barry','paulo-henrique','emerson-escarcega','season-2042']
  });
})();