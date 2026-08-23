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

  const fixtureId='2042-04-06-finn-harps-shamrock-rovers-premier-division';
  const reportId='2042-04-06-finn-harps-shamrock-rovers-3-0-spielbericht';

  const match={
    id:fixtureId,date:'2042-04-06',season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    away:{id:'shamrock-rovers',name:'Shamrock Rovers',short:'SHR',score:0},
    score:'3:0',homeGoals:3,awayGoals:0,halfTime:'2:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Feucht · 14 °C',referee:'Callum Fallon',
    headline:'Negativserie beendet: Finn Harps schlägt Shamrock vor Manchester City mit 3:0',
    verdict:'Nach den Niederlagen gegen Bohemian und Derry City findet Finn Harps rechtzeitig vor dem Champions-League-Viertelfinale zurück in die Spur. Ohne den verletzten Justin Ramsey kontrollieren die Harps Shamrock Rovers mit 78 Prozent Ballbesitz, 14:6 Schüssen und 1,97:0,93 xG. Giacomo Papini trifft früh, Gustavo da Silva erhöht noch vor der Pause und Ben Barry setzt in der 72. Minute den Schlusspunkt.',
    scorers:[
      {player:'Giacomo Papini',team:'Finn Harps',goals:1,minutes:[4]},
      {player:'Gustavo da Silva',team:'Finn Harps',goals:1,minutes:[39]},
      {player:'Ben Barry',team:'Finn Harps',goals:1,minutes:[72]}
    ],
    events:[
      {minute:4,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'1:0'},
      {minute:30,type:'yellow',team:'Shamrock Rovers',player:'Andy Kirkwood',text:'Gelbe Karte'},
      {minute:39,type:'goal',team:'Finn Harps',player:'Gustavo da Silva',text:'2:0'},
      {minute:50,type:'yellow',team:'Shamrock Rovers',player:'Korn Nicholas',text:'Gelbe Karte'},
      {minute:72,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'3:0'},
      {minute:76,type:'yellow',team:'Finn Harps',player:'Torric Bruce',text:'Gelbe Karte'},
      {minute:78,type:'yellow',team:'Shamrock Rovers',player:'Steve Williams',text:'Gelbe Karte'},
      {minute:84,type:'yellow',team:'Shamrock Rovers',player:'Alioune Baldé',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:14,away:6,kind:'number'},
      {label:'Schüsse aufs Tor',home:9,away:4,kind:'number'},
      {label:'xG',home:1.97,away:0.93,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:3,away:1,kind:'number'},
      {label:'Großchancen',home:3,away:1,kind:'number'},
      {label:'Ballbesitz',home:78,away:22,kind:'percent'},
      {label:'Ecken',home:9,away:7,kind:'number'},
      {label:'Fouls',home:10,away:24,kind:'number'},
      {label:'Angekommene Pässe',home:'619/706',away:'173/252',kind:'text'},
      {label:'Passquote',home:88,away:69,kind:'percent'},
      {label:'Mannschaftsnote',home:7.28,away:6.22,kind:'decimal'},
      {label:'Intensive Sprints',home:102,away:88,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':7.7,'Callum Brennan':6.9,'Mareks Istrankins':7.3,'Torric Bruce':7.3,'Gustavo da Silva':8.4,
      "Jim O'Neill":7.1,'Daryl Frame':6.8,"Cormac O'Kane":7.8,'Giacomo Papini':7.6,'Romano Maisto':6.7,
      'Ben Barry':7.3,'Diego Fernández':6.7,'Jake Roberts':6.8,'Billy Walker':7.0,'Dom Docherty':6.6,'Emerson Escárcega':6.9
    },
    standout:{player:'Gustavo da Silva',team:'Finn Harps',rating:8.4,goals:1,note:'Beste Harps-Note. Trifft in der 39. Minute zum 2:0 und spielt mit hoher Passsicherheit.'},
    leagueAfterMatch:{played:10,wins:8,draws:0,losses:2,goalsFor:27,goalsAgainst:3,goalDifference:24,points:24,position:1,currentForm:['L','L','W']},
    availability:{
      absent:['Justin Ramsey'],
      note:'Justin Ramsey fehlt mit einer Knöchelverdrehung. Finn Harps beendet die Negativserie dennoch vor dem Champions-League-Viertelfinale gegen Manchester City.'
    },
    analysis:{
      response:'Nach zwei Niederlagen in Folge liefert Finn Harps die gewünschte Reaktion. Das frühe 1:0 nimmt sofort Druck aus dem Spiel, danach kontrolliert die Mannschaft Ball und Raum.',
      papini:'Giacomo Papini eröffnet die Partie bereits in der 4. Minute und feiert gleichzeitig sein 150. Ligaspiel für Finn Harps.',
      daSilva:'Gustavo da Silva macht in der 39. Minute das 2:0. Mit Note 8,4 ist er der beste Spieler der Harps und liefert eine starke Generalprobe vor Manchester City.',
      barry:'Ben Barry wird erneut im zentralen Mittelfeld eingesetzt und trifft in der 72. Minute zum 3:0. Nach seinem Siegtreffer für Irland gegen Peru setzt er seinen offensiven Lauf fort.',
      control:'78 Prozent Ballbesitz und 619 angekommene Pässe zeigen, wie eindeutig Finn Harps das Spiel kontrolliert. Shamrock kommt zwar zu vier Abschlüssen aufs Tor, aber nie zu einer echten Phase der Dominanz.',
      timing:'Der Sieg ist vor allem psychologisch wichtig. Die Liga-Negativserie endet unmittelbar vor dem Champions-League-Viertelfinale gegen Manchester City.'
    },
    notes:[
      'Finn Harps beendet eine Serie von zwei Premier-Division-Niederlagen in Folge.',
      'Ligabilanz 2042 nach zehn Spielen: 24 Punkte und 27:3 Tore.',
      'Justin Ramsey fehlt verletzt mit einer Knöchelverdrehung.',
      'Giacomo Papini absolviert sein 150. Ligaspiel für Finn Harps und erzielt das 1:0.',
      'Jake Roberts absolviert seinen 50. Einsatz für Finn Harps.',
      'Emerson Escárcega bestreitet seinen 25. Einsatz für Finn Harps.',
      'Gustavo da Silva wird mit Note 8,4 bester Harps-Spieler.',
      'Ben Barry trifft erneut aus dem zentralen Mittelfeld.',
      'Nächster großer Fokus: Champions-League-Viertelfinale gegen Manchester City.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Shamrock Rovers · 06.04.2042','Finn-Harps-Spielerstatistiken · 06.04.2042','Sportblatt Spielbericht · Finn Harps 3:0 Shamrock Rovers']
  };

  upsert(window.FM_MATCHES,match);

  const scheduledIndex=window.FM_FIXTURES.findIndex(entry=>Array.isArray(entry)&&['2042-04-06','2042-04-07'].includes(entry[0])&&entry[2]==='Shamrock Rovers'&&entry[5]==='Premier Division');
  const scheduledResult=['2042-04-06','15:00','Shamrock Rovers','Heim','3:0','Premier Division',0];
  if(scheduledIndex>=0)window.FM_FIXTURES[scheduledIndex]=scheduledResult;
  else if(!window.FM_FIXTURES.some(entry=>Array.isArray(entry)&&entry[0]==='2042-04-06'&&entry[2]==='Shamrock Rovers'))window.FM_FIXTURES.push(scheduledResult);

  const shamrock=window.FM_CLUBS.find(x=>x.id==='shamrock-rovers'||x.name==='Shamrock Rovers'||x.name==='Shamrock Rovers FC');
  if(shamrock){
    shamrock.meetings=shamrock.meetings||[];
    const meeting={date:'06.04.2042',competition:'Premier Division',venue:'A',result:'0:3'};
    const idx=shamrock.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)shamrock.meetings[idx]=meeting;else shamrock.meetings.unshift(meeting);
    shamrock.lastMeeting='06.04.2042 · Finn Harps 3:0 Shamrock Rovers';
    shamrock.summary='Finn Harps beendet gegen Shamrock Rovers seine Serie von zwei Ligapleiten. Papini, da Silva und Barry treffen beim 3:0 im Donegal Stadium.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-04-06';
    season.latestHeadline='Premier Division: 3:0 gegen Shamrock Rovers. Finn Harps beendet die Negativserie rechtzeitig vor Manchester City.';
    season.league=season.league||{};
    season.league.current={played:10,wins:8,draws:0,losses:2,goalsFor:27,goalsAgainst:3,goalDifference:24,points:24,position:1};
    season.league.currentLosingStreak=0;
    season.league.previousLosingStreak=2;
    season.nextFocus={competition:'UEFA Champions League',stage:'Viertelfinale',opponent:'Man City',status:'bevorstehend'};
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='06.04.2042: Finn Harps beendet ohne den verletzten Justin Ramsey die Serie von zwei Ligapleiten und schlägt Shamrock Rovers 3:0. Papini, da Silva und Barry treffen; nach zehn Ligaspielen stehen 24 Punkte und 27:3 Tore. Als Nächstes wartet Manchester City im Champions-League-Viertelfinale.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-04-06-giacomo-papini-150-ligaspiele',date:'2042-04-06',player:'Giacomo Papini',type:'milestone',title:'Papini feiert 150. Ligaspiel mit Tor',detail:'Trifft bereits in der 4. Minute zum 1:0 gegen Shamrock Rovers.'},
    {id:'2042-04-06-jake-roberts-50-harps-einsaetze',date:'2042-04-06',player:'Jake Roberts',type:'milestone',title:'Roberts erreicht 50 Harps-Einsätze',detail:'Absolviert beim 3:0 gegen Shamrock Rovers seinen 50. Einsatz für Finn Harps.'},
    {id:'2042-04-06-emerson-escarcega-25-harps-einsaetze',date:'2042-04-06',player:'Emerson Escárcega',type:'milestone',title:'Escárcega mit 25. Harps-Einsatz',detail:'Kommt beim Ende der Negativserie zu seinem 25. Einsatz für Finn Harps.'},
    {id:'2042-04-06-ben-barry-shamrock-goal',date:'2042-04-06',player:'Ben Barry',type:'goal',title:'Barry trifft erneut aus dem Zentrum',detail:'Erzielt in der 72. Minute das 3:0 und bestätigt seine starke Phase.'},
    {id:'2042-04-06-gustavo-da-silva-shamrock-standout',date:'2042-04-06',player:'Gustavo da Silva',type:'standout',title:'Da Silva führt die Reaktion an',detail:'Trifft zum 2:0 und erhält mit 8,4 die beste Harps-Note.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-04-06',competition:'Premier Division',fixtureDate:'06.04.2042',
    home:'Finn Harps',away:'Shamrock Rovers',score:'3:0',location:'Donegal Stadium · Stranorlar · 12.800 Zuschauer',
    headline:'Reaktion vor City: Finn Harps beendet die Negativserie mit einem 3:0',
    subheadline:'Ohne den verletzten Justin Ramsey finden die Harps nach zwei Ligapleiten zurück in die Spur. Papini trifft früh, da Silva legt nach und Barry vollendet eine kontrollierte Generalprobe vor Manchester City.',
    heroStat:{label:'Antwort auf den Formknick',value:'3:0',note:'78 % Ballbesitz · 14:6 Schüsse · 1,97:0,93 xG'},
    sections:[
      {title:'Papini nimmt sofort den Druck raus',text:'Nach zwei Niederlagen in Folge braucht Finn Harps kein langes Abtasten. Giacomo Papini köpft bereits in der 4. Minute das 1:0 und krönt damit zugleich sein 150. Ligaspiel für den Klub.'},
      {title:'Da Silva macht die Kontrolle sichtbar',text:'Gustavo da Silva erhöht in der 39. Minute auf 2:0 und wird mit Note 8,4 zum besten Harps-Spieler. 78 Prozent Ballbesitz und 619 angekommene Pässe zeigen, wie deutlich Finn Harps das Spiel kontrolliert.'},
      {title:'Barry bleibt im Mittelfeld torgefährlich',text:'Ben Barry agiert erneut im zentralen Mittelfeld und trifft in der 72. Minute zum 3:0. Nach seinem späten Siegtreffer für Irland gegen Peru bleibt er auch im Klub offensiv präsent.'},
      {title:'Ohne Ramsey, aber mit Antwort',text:'Justin Ramsey fehlt wegen seiner Knöchelverdrehung. Trotzdem wirkt die Mannschaft im Zentrum deutlich stabiler als bei den Niederlagen gegen Bohemian und Derry. Das ist vor allem vor dem nächsten Gegner wichtig.'},
      {title:'Jetzt wartet Manchester City',text:'Die nationale Negativserie ist beendet, die Stimmung dreht rechtzeitig. Der nächste Fokus liegt vollständig auf dem Champions-League-Viertelfinale gegen Manchester City.'}
    ],
    verdictHeading:'Genau die Generalprobe, die Finn Harps brauchte',
    verdict:'Der Sieg beseitigt nicht automatisch alle Fragen aus den beiden Niederlagen zuvor, aber er verändert die Ausgangslage vor Manchester City deutlich. Finn Harps kontrolliert wieder, trifft früh und hält hinten die Null. Nach einer Woche mit Rissen im Lack ist das 3:0 ein sauberer Neustart.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-04-06-finn-harps-shamrock-3-0',date:'2042-04-06',season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · ENDE DER NEGATIVSERIE',
    title:'3:0 vor City: Harps finden ohne Ramsey zurück in die Spur',
    summary:'Papini, da Silva und Barry treffen gegen Shamrock Rovers. Nach zwei Ligapleiten gewinnt Finn Harps wieder und geht mit einem Erfolgserlebnis ins Champions-League-Viertelfinale gegen Manchester City.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','shamrock-rovers','justin-ramsey','giacomo-papini','gustavo-da-silva','ben-barry','man-city','season-2042']
  });
})();