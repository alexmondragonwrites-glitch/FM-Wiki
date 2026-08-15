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

  const match={
    id:'2041-10-18-finn-harps-shelbourne-premier-division',date:'2041-10-18',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:8},
    away:{id:'shelbourne',name:'Shelbourne',short:'SHE',score:0},
    score:'8:0',homeGoals:8,awayGoals:0,halfTime:'4:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12509,awayFans:726,weather:'Windig, feucht · 8 °C',referee:'Callum Fallon',
    headline:'Acht Tore vor Salzburg: Finn Harps zerlegt Shelbourne 8:0',
    verdict:'Nach dem knappen 3:2 gegen Athlone folgt die maximale Antwort. Finn Harps führt schon zur Pause 4:0, gewinnt 8:0 und geht mit 102 Ligatoren sowie einer weiter ungeschlagenen Bilanz in die Champions-League-Woche vor dem Auswärtsspiel bei Red Bull Salzburg.',
    scorers:[
      {player:'Billy Walker',team:'Finn Harps',goals:2,minutes:[13,54]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[25]},
      {player:'Daniele Di Maio',team:'Finn Harps',goals:2,minutes:[26,38]},
      {player:'Daryl Frame',team:'Finn Harps',goals:1,minutes:[53]},
      {player:'Romano Maisto',team:'Finn Harps',goals:1,minutes:[59]},
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:[],note:'Torschütze laut Spielerstatistik; die Tor-Minute ist in der bereitgestellten Spielübersicht nicht sichtbar.'}
    ],
    events:[
      {minute:13,type:'goal',team:'Finn Harps',player:'Billy Walker',text:'1:0'},
      {minute:25,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'2:0'},
      {minute:26,type:'goal',team:'Finn Harps',player:'Daniele Di Maio',text:'3:0'},
      {minute:38,type:'goal',team:'Finn Harps',player:'Daniele Di Maio',text:'4:0'},
      {minute:46,type:'red',team:'Shelbourne',player:'Jordan Spencer Platzerweis',text:'Rote Karte'},
      {minute:53,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'5:0'},
      {minute:54,type:'goal',team:'Finn Harps',player:'Billy Walker',text:'6:0'},
      {minute:59,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'7:0'},
      {minute:64,type:'yellow',team:'Shelbourne',player:'Jordan Nowakowski',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:21,away:3,kind:'number'},
      {label:'Schüsse aufs Tor',home:14,away:0,kind:'number'},
      {label:'xG',home:3.62,away:0.61,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:2,away:2,kind:'number'},
      {label:'Großchancen',home:4,away:2,kind:'number'},
      {label:'Ballbesitz',home:78,away:22,kind:'percent'},
      {label:'Ecken',home:13,away:5,kind:'number'},
      {label:'Fouls',home:7,away:16,kind:'number'},
      {label:'Angekommene Pässe',home:596,away:117,kind:'number',homeDetail:'91 % · 596/652',awayDetail:'72 % · 117/239'},
      {label:'Gewonnene Zweikämpfe',home:83,away:68,kind:'percent',homeDetail:'15/18',awayDetail:'23/34'},
      {label:'Gewonnene Kopfbälle',home:60,away:37,kind:'percent',homeDetail:'34/57',awayDetail:'21/57'},
      {label:'Gelbe Karten',home:1,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:1,kind:'number'},
      {label:'Intensität',home:8.01,away:6.07,kind:'decimal'},
      {label:'Intensive Sprints',home:85,away:72,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:32,wins:30,draws:2,losses:0,goalsFor:102,goalsAgainst:13,goalDifference:89,points:92},
    standout:{player:'Billy Walker',team:'Finn Harps',rating:10.0,goals:2,note:'Doppelpack beim 8:0 und gemeinsam mit Di Maio mit Bestnote 10,0.'},
    keyPerformers:[
      {player:'Daniele Di Maio',rating:10.0,goals:2,note:'Doppelpack innerhalb von zwölf Minuten in der ersten Halbzeit.'},
      {player:'Romano Maisto',rating:8.2,goals:1,note:'Trifft in der 59. Minute und feiert sein 150. Profispiel.'},
      {player:'Emerson Escárcega',rating:7.6,goals:1,note:'Erzielt das 2:0 in der 25. Minute.'},
      {player:'Pol Muñoz',rating:7.7,goals:1,note:'Kommt in der zweiten Halbzeit und trägt sich ebenfalls in die Torschützenliste ein.'}
    ],
    milestones:[
      {player:'Paulo Henrique',text:'225. Einsatz für Finn Harps; anschließend 411 Minuten ohne Gegentor.'},
      {player:'Mareks Istrankins',text:'50. Profispiel.'},
      {player:'Romano Maisto',text:'150. Profispiel.'},
      {player:'Basile Rouviere',text:'325. Profispiel.'},
      {player:'Justin Ramsey',text:'175. Einsatz für Finn Harps.'},
      {player:'Iolo Evans',team:'Shelbourne',text:'25. Ligaspiel für Shelbourne.'}
    ],
    analysis:{
      response:'Auf das überraschend enge 3:2 gegen Athlone folgt eine kompromisslose Reaktion. Finn Harps entscheidet die Partie bereits mit vier Toren vor der Pause.',
      firstHalf:'Walker eröffnet in der 13. Minute, Escárcega erhöht auf 2:0 und Di Maio trifft in der 26. und 38. Minute doppelt. Zur Pause steht es 4:0.',
      secondHalf:'Nach der roten Karte gegen Shelbourne unmittelbar nach der Pause wird das Spiel endgültig einseitig. Frame, Walker und Maisto erhöhen schnell; Pol Muñoz erzielt laut Spielerstatistik ebenfalls einen Treffer.',
      control:'21:3 Schüsse, 14:0 aufs Tor, 78 Prozent Ballbesitz und 596 erfolgreiche Pässe zeigen die komplette Kontrolle. Shelbourne kommt trotz 0,61 xG zu keinem einzigen Schuss aufs Tor.',
      cleanSheet:'Paulo Henrique bleibt erneut ohne Gegentor. Seine Serie im Harps-Tor steigt laut Spielmeldung auf 411 Minuten.',
      leagueContext:'Nach 32 Ligaspielen bleibt Finn Harps ungeschlagen: 30 Siege, zwei Remis, 92 Punkte und 102:13 Tore.',
      europeContext:'Fünf Tage später wartet Red Bull Salzburg auswärts in der Champions-League-Ligaphase. Nach zwei Siegen aus den ersten beiden Europapokalspielen reist Finn Harps mit einer 8:0-Generalprobe an.'
    },
    sources:['FM-Spielübersicht Finn Harps – Shelbourne · 18.10.2041','Finn-Harps-Spielerstatistiken · 18.10.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-10-18';
    season.latestHeadline='Premier Division: Finn Harps schlägt Shelbourne vor dem Champions-League-Spiel in Salzburg mit 8:0.';
    season.league={
      ...(season.league||{}),position:1,played:32,wins:30,draws:2,losses:0,goalsFor:102,goalsAgainst:13,goalDifference:89,points:92,
      latestResult:'18.10.2041 · Finn Harps 8:0 Shelbourne',champion:true,titleClinchedDate:'2041-08-30'
    };
    season.changes=season.changes||{notes:[]};
    const note='18.10.2041: 8:0 gegen Shelbourne. Walker und Di Maio treffen doppelt, Escárcega, Frame, Maisto und Pol Muñoz ebenfalls. Liga: 32 Spiele, 30 Siege, 2 Remis, 0 Niederlagen, 102:13 Tore, 92 Punkte. Nächstes Pflichtspiel: Champions League auswärts bei Red Bull Salzburg am 23.10.2041.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-10-18-billy-walker-shelbourne-double',date:'2041-10-18',player:'Billy Walker',type:'standout',title:'Doppelpack und Bestnote',detail:'Trifft beim 8:0 gegen Shelbourne in der 13. und 54. Minute doppelt und erhält die Note 10,0.'},
    {id:'2041-10-18-daniele-di-maio-shelbourne-double',date:'2041-10-18',player:'Daniele Di Maio',type:'standout',title:'Doppelpack gegen Shelbourne',detail:'Erzielt beim 8:0 die Treffer zum 3:0 und 4:0 in der 26. und 38. Minute und erhält ebenfalls die Note 10,0.'},
    {id:'2041-10-18-paulo-henrique-411-clean-sheet',date:'2041-10-18',player:'Paulo Henrique',type:'milestone',title:'411 Minuten ohne Gegentor',detail:'Bestreitet seinen 225. Einsatz für Finn Harps und bleibt laut Spielmeldung seit 411 Minuten ohne Gegentor.'},
    {id:'2041-10-18-romano-maisto-150-pro',date:'2041-10-18',player:'Romano Maisto',type:'milestone',title:'150. Profispiel mit Tor',detail:'Erreicht gegen Shelbourne sein 150. Profispiel und trifft in der 59. Minute.'},
    {id:'2041-10-18-justin-ramsey-175-harps',date:'2041-10-18',player:'Justin Ramsey',type:'milestone',title:'175 Einsätze für Finn Harps',detail:'Erreicht beim 8:0 gegen Shelbourne die Marke von 175 Einsätzen für den Klub.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-10-18-finn-harps-shelbourne-spielbericht',type:'Spielbericht',date:'2041-10-18',competition:'Premier Division',fixtureDate:'18.10.2041',
    home:'Finn Harps',away:'Shelbourne',score:'8:0',location:'Donegal Stadium · Stranorlar · 12.509 Zuschauer',
    headline:'Acht Tore als Warnsignal nach Salzburg',
    subheadline:'Walker und Di Maio treffen doppelt, sechs verschiedene Torschützen tragen sich ein. Finn Harps schießt sich fünf Tage vor Red Bull Salzburg mit 8:0 warm.',
    label:'PREMIER DIVISION · FINN HARPS 8:0 SHELBOURNE',
    heroStat:{label:'Generalprobe vor Salzburg',value:'8:0',note:'21:3 Schüsse · 14:0 aufs Tor · 78 % Ballbesitz · 3,62:0,61 xG'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Das 3:2 gegen Athlone hatte noch nach schweren Beinen gerochen. Eine Woche später ist davon nichts mehr zu sehen. Finn Harps zerlegt Shelbourne bereits vor der Pause und produziert anschließend die deutlichste Generalprobe, die man vor einem Champions-League-Auswärtsspiel bestellen könnte.',
    sections:[
      {title:'Vier Tore vor der Pause',text:'Billy Walker eröffnet in der 13. Minute. Escárcega trifft zum 2:0, ehe Daniele Di Maio mit Toren in der 26. und 38. Minute den 4:0-Pausenstand herstellt.'},
      {title:'Die rote Karte öffnet endgültig die Schleusen',text:'Shelbournes Jordan Spencer Platzerweis sieht in der 46. Minute Rot. Frame trifft in der 53. Minute, Walker nur eine Minute später erneut und Maisto erhöht in der 59. Minute.'},
      {title:'Pol komplettiert die Torschützenliste',text:'Auch Pol Muñoz trägt sich laut Spielerstatistik in die Torschützenliste ein. Die genaue Tor-Minute ist in der bereitgestellten Spielübersicht nicht sichtbar, deshalb wird sie nicht ergänzt.'},
      {title:'Komplette Kontrolle',text:'Finn Harps kommt auf 21 Schüsse, 14 davon aufs Tor. Shelbourne bleibt bei drei Abschlüssen und keinem einzigen Schuss aufs Tor. 78 Prozent Ballbesitz und 596 angekommene Pässe machen das Spielbild eindeutig.'},
      {title:'Paulo Henrique baut seine Serie aus',text:'Der Torhüter absolviert seinen 225. Einsatz für Finn Harps. Nach dem nächsten Zu-null-Spiel steht seine laufende Serie bei 411 Minuten ohne Gegentor.'},
      {title:'Salzburg bekommt eine ziemlich laute Nachricht',text:'Am 23. Oktober wartet Red Bull Salzburg in der Champions League. Nach dem 1:0 gegen Manchester United und dem 4:0 gegen Celta Vigo reist Finn Harps nun mit einem 8:0 im Rücken nach Österreich.'}
    ],
    verdictHeading:'Vom müden 3:2 zum Tororkan',
    verdict:'Vor einer Woche musste Finn Harps gegen Athlone bis in die Nachspielzeit kämpfen. Gegen Shelbourne ist die Energie wieder da. Die acht Tore sind schön, aber für Salzburg ist vielleicht die Art wichtiger: hohe Passsicherheit, 14 Schüsse aufs Tor und erneut kein Gegentor. Die Harps wirken rechtzeitig vor Europa wieder scharf.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-18-finn-harps-shelbourne-8-0',date:'2041-10-18',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · GENERALPROBE',title:'8:0 vor Salzburg: Harps zerlegen Shelbourne',
    summary:'Walker und Di Maio treffen doppelt. Finn Harps bleibt nach 32 Ligaspielen ungeschlagen und reist mit 102 Saisontoren zum Champions-League-Spiel nach Salzburg.',
    href:'presse.html?id=2041-10-18-finn-harps-shelbourne-spielbericht',entities:['finn-harps','shelbourne','billy-walker','daniele-di-maio','red-bull-salzburg','season-2041']
  });
})();