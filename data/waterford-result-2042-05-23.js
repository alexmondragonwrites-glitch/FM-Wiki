(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-05-23';
  const fixtureId='2042-05-23-finn-harps-waterford-premier-division';
  const reportId='2042-05-23-finn-harps-waterford-3-1-spielbericht';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    away:{id:'waterford',name:'Waterford',short:'WAT',score:1},
    score:'3:1',homeGoals:3,awayGoals:1,halfTime:'3:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12474,awayFans:310,weather:'Schauer · 15 °C',referee:'James Carey',
    headline:'Ramsey-Doppelpack vor der Pause: Finn Harps schlägt Waterford erneut 3:1',
    verdict:'Vier Tage nach dem 3:0 in Waterford treffen beide Teams erneut aufeinander. Diesmal entscheidet Finn Harps die Partie schon vor der Pause: Justin Ramsey trifft in Minute 2 und 17, Daryl Frame erhöht in Minute 39 auf 3:0. Waterford kommt durch Rob Buffonge in der 81. Minute nur noch zum Ehrentreffer. Für die Harps ist es der zehnte Ligasieg in Folge.',
    scorers:[
      {player:'Justin Ramsey',team:'Finn Harps',goals:2,minutes:[2,17]},
      {player:'Daryl Frame',team:'Finn Harps',goals:1,minutes:[39]},
      {player:'Rob Buffonge',team:'Waterford',goals:1,minutes:[81]}
    ],
    events:[
      {minute:2,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'1:0'},
      {minute:11,type:'yellow-card',team:'Finn Harps',player:"Cormac O'Kane"},
      {minute:17,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'2:0'},
      {minute:18,type:'yellow-card',team:'Finn Harps',player:'Torric Bruce'},
      {minute:26,type:'yellow-card',team:'Waterford',player:'Sammy Keenleyside'},
      {minute:35,type:'yellow-card',team:'Finn Harps',player:"Jim O'Neill"},
      {minute:39,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'3:0'},
      {minute:45,type:'yellow-card',team:'Waterford',player:'Paulo Landim'},
      {minute:69,type:'yellow-card',team:'Waterford',player:'Max Bateman'},
      {minute:71,type:'yellow-card',team:'Waterford',player:'Steve Holt'},
      {minute:81,type:'goal',team:'Waterford',player:'Rob Buffonge',text:'3:1'}
    ],
    stats:[
      {label:'Schüsse',home:19,away:4,kind:'number'},
      {label:'Schüsse aufs Tor',home:10,away:2,kind:'number'},
      {label:'xG',home:2.86,away:0.63,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:6,away:2,kind:'number'},
      {label:'Großchancen',home:1,away:1,kind:'number'},
      {label:'Ballbesitz',home:76,away:24,kind:'percent'},
      {label:'Ecken',home:7,away:2,kind:'number'},
      {label:'Fouls',home:11,away:19,kind:'number'},
      {label:'Angekommene Pässe',home:'91% (662/728)',away:'75% (204/273)',kind:'text'},
      {label:'Gewonnene Zweikämpfe',home:'87% (20/23)',away:'73% (27/37)',kind:'text'},
      {label:'Gewonnene Kopfbälle',home:'57% (27/47)',away:'42% (20/48)',kind:'text'},
      {label:'Gelbe Karten',home:3,away:4,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:7.20,away:6.56,kind:'decimal'},
      {label:'Intensive Sprints',home:91,away:83,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':6.7,'Callum Brennan':6.9,'Daniele Di Maio':7.0,'Torric Bruce':7.0,'Kevin Kelly':7.3,
      "Jim O'Neill":7.1,'Daryl Frame':7.4,"Cormac O'Kane":8.7,'Billy Walker':7.3,'Dom Docherty':6.7,
      'Justin Ramsey':8.5,'Gustavo da Silva':6.6,'Pol Muñoz':6.7,'Diego Fernández':6.6,'Amir Mašić':6.7,'Ben Barry':6.7
    },
    standout:{player:"Cormac O'Kane",team:'Finn Harps',rating:8.7,note:'Höchste Harps-Note des Abends. Prägt das Angriffsspiel hinter dem frühen Ramsey-Doppelpack.'},
    leagueAfterMatch:{played:19,wins:17,draws:0,losses:2,goalsFor:60,goalsAgainst:7,goalDifference:53,points:51,position:1,currentWinningStreak:10,unbeatenRun:14},
    analysis:{
      earlyControl:'Finn Harps setzt Waterford sofort unter Druck. Ramsey trifft bereits in Minute 2 und legt nach 17 Minuten nach. Die Partie bekommt damit früh dieselbe Richtung wie das Auswärtsspiel vier Tage zuvor.',
      frame:'Daryl Frame macht in Minute 39 das 3:0 und sorgt dafür, dass die zweite Halbzeit weitgehend zur kontrollierten Verwaltung wird.',
      dominance:'19:4 Schüsse, 10:2 aufs Tor, 76 Prozent Ballbesitz und 91 Prozent Passquote zeigen erneut ein klares Kräfteverhältnis. Waterford kommt kaum in längere Ballbesitzphasen.',
      ramsey:'Justin Ramsey übernimmt mit seinem Doppelpack die Hauptrolle. Gleichzeitig erreicht er einen großen persönlichen Meilenstein: 100 Ligatore für Finn Harps.',
      cleanSheetEnded:'Rob Buffonge erzielt in Minute 81 den Ehrentreffer. Damit endet Paulo Henriques Serie nach 505 Minuten ohne Gegentor.',
      final:'Mit zehn Ligasiegen in Folge und 51 Punkten aus 19 Spielen bleibt die nationale Form makellos. Der Champions-League-Showdown gegen Manchester United in Athen bleibt der große Horizont.'
    },
    milestones:[
      'Justin Ramsey erreicht 100 Ligatore für Finn Harps.',
      'Daniele Di Maio absolviert sein 25. Ligaspiel für Finn Harps.',
      'Torric Bruce bestreitet sein 150. Ligaspiel seiner Karriere.',
      "Cormac O'Kane absolviert sein 175. Ligaspiel seiner Karriere.",
      'Paulo Henriques Serie ohne Gegentor endet nach 505 Minuten.',
      'Finn Harps feiert den zehnten Ligasieg in Folge.'
    ],
    notes:[
      'Finn Harps gewinnt zuhause 3:1 gegen Waterford.',
      'Justin Ramsey trifft in Minute 2 und 17, Daryl Frame in Minute 39.',
      'Waterford verkürzt durch Rob Buffonge in Minute 81.',
      'Finn Harps führt zur Pause bereits 3:0.',
      '19:4 Schüsse, 10:2 aufs Tor, 76 Prozent Ballbesitz und 2,86:0,63 xG.',
      'Nach 19 Ligaspielen stehen 51 Punkte und 60:7 Tore.',
      'Zehn Ligasiege in Folge und 14 Spiele ungeschlagen.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Waterford · 23.05.2042','Finn-Harps-Spielerstatistiken · 23.05.2042','Irisches Fußballblatt Spielbericht · 23.05.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-05-23','19:45','Waterford','Heim','3:1','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&['Waterford','Waterford FC'].includes(x[2])&&x[5]==='Premier Division'&&x[0]===date);
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const waterford=window.FM_CLUBS.find(x=>x.id==='waterford'||x.name==='Waterford'||x.name==='Waterford FC');
  if(waterford){
    waterford.meetings=waterford.meetings||[];
    const meeting={date:'23.05.2042',competition:'Premier Division',venue:'H',result:'3:1'};
    const idx=waterford.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)waterford.meetings[idx]=meeting;else waterford.meetings.unshift(meeting);
    waterford.lastMeeting='23.05.2042 · Finn Harps 3:1 Waterford';
    waterford.summary='Vier Tage nach dem 3:0 in Waterford gewinnt Finn Harps auch das Rückspiel im Donegal Stadium. Ramsey trifft doppelt, Frame macht noch vor der Pause das 3:0.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Premier Division: Finn Harps schlägt Waterford erneut. Ramsey trifft beim 3:1 doppelt, Frame macht das 3:0 noch vor der Pause.';
    season.league=season.league||{};
    season.league.current={played:19,wins:17,draws:0,losses:2,goalsFor:60,goalsAgainst:7,goalDifference:53,points:51,position:1};
    season.nextFocus={competition:'UEFA Champions League',stage:'Finale',opponent:'Manchester United',venue:'Olympic Athletic Center of Athens',location:'Athen, Griechenland',status:'Finale erreicht',form:'10 Ligasiege in Folge · 14 Spiele ungeschlagen',availability:['Emerson Escárcega: Handgelenksfraktur · Finaleinsatz fraglich']};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='23.05.2042: Finn Harps gewinnt auch das zweite Waterford-Spiel binnen vier Tagen. Ramsey trifft in Minute 2 und 17, Frame in Minute 39; Buffonge verkürzt spät zum 3:1. Liga: 19 Spiele, 51 Punkte, 60:7 Tore; zehn Ligasiege in Folge.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-05-23-justin-ramsey-double-waterford',date,player:'Justin Ramsey',type:'performance',title:'Ramsey-Doppelpack in 17 Minuten',detail:'Trifft in Minute 2 und 17 und legt damit die Grundlage für den 3:1-Heimsieg gegen Waterford.'},
    {id:'2042-05-23-justin-ramsey-100-league-goals-harps',date,player:'Justin Ramsey',type:'milestone',title:'100 Ligatore für Finn Harps',detail:'Ramsey erreicht gegen Waterford die Marke von 100 Ligatoren für Finn Harps.'},
    {id:'2042-05-23-daryl-frame-goal-waterford',date,player:'Daryl Frame',type:'goal',title:'Frame macht vor der Pause das 3:0',detail:'Erzielt in Minute 39 den dritten Harps-Treffer.'},
    {id:'2042-05-23-di-maio-25-league-harps',date,player:'Daniele Di Maio',type:'milestone',title:'25 Ligaspiele für Di Maio bei den Harps',detail:'Di Maio erreicht sein 25. Ligaspiel für Finn Harps.'},
    {id:'2042-05-23-torric-bruce-150-league',date,player:'Torric Bruce',type:'milestone',title:'150 Ligaspiele für Bruce',detail:'Bruce absolviert sein 150. Ligaspiel seiner Karriere.'},
    {id:'2042-05-23-cormac-okane-175-league',date,player:"Cormac O'Kane",type:'milestone',title:'175 Ligaspiele für O’Kane',detail:'O’Kane erreicht sein 175. Ligaspiel seiner Karriere.'},
    {id:'2042-05-23-paulo-henrique-505-streak-ended',date,player:'Paulo Henrique',type:'streak-ended',title:'Henriques Serie endet nach 505 Minuten',detail:'Waterfords spätes 1:3 beendet 505 Minuten ohne Gegentreffer.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'23.05.2042',
    headline:'Wieder Waterford, wieder früh entschieden: Ramsey führt Harps zum 3:1',
    subheadline:'Justin Ramsey trifft in der 2. und 17. Minute, Daryl Frame erhöht noch vor der Pause. Waterfords später Treffer ändert am zehnten Harps-Ligasieg in Folge nichts.',
    label:'PREMIER DIVISION · RAMSEY-SHOW',
    heroStat:{label:'Justin Ramsey',value:'2 Tore in 17 Minuten',note:'Doppelpack · 100 Ligatore für Finn Harps'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Vier Tage nach dem Blitzstart in Waterford gibt es dieselbe Paarung noch einmal. Diesmal heißt der frühe Spielverderber Justin Ramsey: zwei Tore in den ersten 17 Minuten, Frame legt noch vor der Pause nach.',
    sections:[
      {title:'Ramsey macht sofort ernst',text:'Bereits in Minute 2 fällt das 1:0, nach 17 Minuten steht es 2:0. Waterford bekommt kaum Gelegenheit, aus dem schnellen Wiedersehen eine neue Geschichte zu machen.'},
      {title:'Frame beendet die Diskussion vor der Pause',text:'Daryl Frame erhöht in Minute 39 auf 3:0. Damit ist die Partie schon zur Halbzeit praktisch entschieden und Finn Harps kann den zweiten Durchgang mit deutlich weniger Risiko kontrollieren.'},
      {title:'100 Ligatore für Ramsey',text:'Der Doppelpack ist mehr als nur spielentscheidend: Justin Ramsey erreicht damit die Marke von 100 Ligatoren für Finn Harps. Ein weiterer großer Meilenstein für einen Spieler, der nach seiner Verletzungspause wieder voll im Rhythmus angekommen ist.'},
      {title:'Die Kontrolle bleibt erdrückend',text:'19:4 Schüsse, 10:2 aufs Tor, 76 Prozent Ballbesitz, 91 Prozent Passquote und 2,86:0,63 xG. Waterford findet nur wenige Momente, in denen die Harps-Struktur wirklich geöffnet wird.'},
      {title:'Ein kleiner Makel am Ende',text:'Rob Buffonge verkürzt in Minute 81 auf 3:1 und beendet damit Paulo Henriques Serie nach 505 Minuten ohne Gegentor. Am Spielausgang ändert das nichts.'},
      {title:'Zehn in Serie',text:'Finn Harps steht nach 19 Ligaspielen bei 51 Punkten und 60:7 Toren. Der zehnte Ligasieg in Folge hält die Mannschaft weiter im perfekten Rhythmus vor dem großen europäischen Saisonfinale.'}
    ],
    verdictHeading:'Das Rückspiel war früher entschieden als das Hinspiel',
    verdict:'Waterford hatte diesmal keine sieben Minuten, sondern kaum zwei, bevor Finn Harps zuschlug. Ramsey entschied die Partie früh, Frame machte sie vor der Pause praktisch zu. Der zehnte Ligasieg in Folge wirkt inzwischen weniger wie eine Serie als wie ein Dauerzustand.',
    sources:['FM-Spielübersicht Finn Harps – Waterford · 23.05.2042','Finn-Harps-Spielerstatistiken · 23.05.2042','Irisches Fußballblatt Spielbericht · 23.05.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-05-23-finn-harps-waterford-3-1',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    title:'Ramsey-Doppelpack: Harps schlagen Waterford erneut',
    teaser:'2., 17., 39. Minute: Finn Harps führt schon zur Pause 3:0. Ramsey trifft doppelt und erreicht 100 Ligatore für die Harps.',
    href:'presse.html?id='+reportId,
    meta:'3:1 · 10. Ligasieg in Folge · 51 Punkte · 60:7 Tore'
  });
})();