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

  const date='2042-09-05';
  const fixtureId='2042-09-05-ucd-finn-harps-premier-division';
  const reportId='2042-09-05-ucd-finn-harps-1-5-pre-inter';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'ucd',name:'UCD',short:'UCD',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:5},
    score:'1:5',homeGoals:1,awayGoals:5,halfTime:'0:4',
    venue:'UCD Bowl',location:'Dublin, Irland',attendance:2580,awayFans:300,weather:'Windig · 28 °C',referee:'Robert Markey',
    headline:'Generalprobe vor Inter: Finn Harps zerlegen UCD 5:1 und knacken die 100-Tore-Marke',
    verdict:'Vier Tore in den ersten 36 Minuten entscheiden die Partie früh. Daryl Frame trifft doppelt, Escárcega und Mašić erhöhen noch vor der Pause, Barry legt nach. Mit nun 101 Ligatoren reist der Meister mit breiter Brust ins Champions-League-Duell gegen Inter.',
    scorers:[
      {player:'Daryl Frame',team:'Finn Harps',goals:2,minutes:[8,10]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[14]},
      {player:'Amir Mašić',team:'Finn Harps',goals:1,minutes:[36]},
      {player:'Ben Barry',team:'Finn Harps',goals:1,minutes:[67]},
      {player:'Jerry Jefferies',team:'UCD',goals:1,minutes:[74]}
    ],
    events:[
      {minute:8,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'0:1'},
      {minute:10,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'0:2'},
      {minute:14,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'0:3'},
      {minute:30,type:'penalty-missed',team:'UCD',player:'Bryan Ashe',text:'Elfmeter verschossen'},
      {minute:36,type:'goal',team:'Finn Harps',player:'Amir Mašić',text:'0:4'},
      {minute:58,type:'yellow-card',team:'Finn Harps',player:'Amir Mašić'},
      {minute:67,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'0:5'},
      {minute:74,type:'goal',team:'UCD',player:'Jerry Jefferies',text:'1:5'},
      {minute:90,type:'yellow-card',team:'UCD',player:'Callum Dunne'}
    ],
    stats:[
      {label:'Schüsse',home:7,away:17,kind:'number'},
      {label:'Schüsse aufs Tor',home:2,away:10,kind:'number'},
      {label:'xG',home:2.18,away:2.29,kind:'decimal'},
      {label:'Großchancen',home:3,away:2,kind:'number'},
      {label:'Ballbesitz',home:31,away:69,kind:'percent'},
      {label:'Ecken',home:1,away:12,kind:'number'},
      {label:'Fouls',home:20,away:7,kind:'number'},
      {label:'Angekommene Pässe',home:'80% (270/338)',away:'88% (589/667)',kind:'text'},
      {label:'Gewonnene Zweikämpfe',home:'61% (14/23)',away:'80% (12/15)',kind:'text'},
      {label:'Gewonnene Kopfduelle',home:'58% (25/43)',away:'40% (18/45)',kind:'text'},
      {label:'Gelbe Karten',home:1,away:1,kind:'number'},
      {label:'Notenschnitt',home:6.31,away:7.27,kind:'decimal'},
      {label:'Intensive Sprints',home:49,away:80,kind:'number'}
    ],
    ratings:{
      'Thomas Kenny':7.7,'Callum Brennan':7.0,'Torric Bruce':7.4,'Daniele Di Maio':6.8,'Gustavo da Silva':7.6,
      'Amir Mašić':7.7,'Daryl Frame':8.1,'Jake Roberts':7.0,'Pol Muñoz':7.4,'Dom Docherty':7.3,'Emerson Escárcega':7.0,
      'Romano Maisto':6.5,'Ben Barry':7.8,'Justin Ramsey':6.8,'Alejandro López':6.5,'Giacomo Papini':6.5
    },
    standout:{player:'Daryl Frame',team:'Finn Harps',rating:8.1,goals:2,note:'Doppelpack innerhalb von zwei Minuten; Frame legt den Grundstein für den klaren Auswärtssieg.'},
    leagueAfterMatch:{played:29,wins:27,draws:0,losses:2,goalsFor:101,goalsAgainst:11,goalDifference:90,points:81,position:1},
    milestones:[
      'Torric Bruce absolviert seinen 150. Einsatz für Finn Harps.',
      'Daryl Frame absolviert sein 125. Spiel als Profi.',
      'Emerson Escárcega erzielt das 150. Ligator seiner Karriere.',
      'Finn Harps überschreitet mit dem 5:1 die Marke von 100 Ligatoren in der Saison 2042.'
    ],
    analysis:{
      blitzstart:'Frame trifft in Minute 8 und 10, Escárcega in Minute 14. Nach nur einer Viertelstunde steht es 3:0.',
      penalty:'UCD erhält in Minute 30 die Chance vom Punkt, doch Bryan Ashe scheitert an Thomas Kenny.',
      control:'Mašić macht noch vor der Pause das 4:0. Nach dem Seitenwechsel erhöht Barry auf 5:0, ehe Jefferies den Ehrentreffer erzielt.',
      century:'Das fünfte Tor bedeutet zugleich, dass Finn Harps in der laufenden Premier-Division-Saison die Marke von 100 Treffern überschreitet. Nach 29 Spielen steht das Torverhältnis bei 101:11.',
      inter:'Vier Tage später wartet zum Auftakt der Champions-League-Ligaphase Inter. Die Harps gehen mit fünf Treffern und einer früh entschiedenen Generalprobe in dieses Spiel.'
    },
    sources:['FM-Spielübersicht UCD – Finn Harps · 05.09.2042','Finn-Harps-Spielerstatistiken · 05.09.2042','FourFourTwo-Spielbericht · 05.09.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixture=['2042-09-05','19:45','UCD','Auswärts','1:5','Premier Division',0];
  const fixtureIndex=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&x[2]==='UCD'&&x[5]==='Premier Division');
  if(fixtureIndex>=0)window.FM_FIXTURES[fixtureIndex]=fixture;else window.FM_FIXTURES.push(fixture);

  const ucd=window.FM_CLUBS.find(x=>x.id==='ucd'||x.name==='UCD');
  if(ucd){
    ucd.meetings=ucd.meetings||[];
    const meeting={date:'05.09.2042',competition:'Premier Division',venue:'A',result:'1:5'};
    const idx=ucd.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)ucd.meetings[idx]=meeting;else ucd.meetings.unshift(meeting);
    ucd.lastMeeting='05.09.2042 · UCD 1:5 Finn Harps';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x&&(x.year===2042||x.season===2042));
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Premier Division: Finn Harps gewinnt 5:1 bei UCD und überschreitet vor dem Inter-Spiel die Marke von 100 Ligatoren.';
    season.league={...(season.league||{}),position:1,played:29,wins:27,draws:0,losses:2,goalsFor:101,goalsAgainst:11,goalDifference:90,points:81,latestResult:'05.09.2042 · UCD 1:5 Finn Harps'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='05.09.2042: Finn Harps gewinnt die Generalprobe vor Inter mit 5:1 bei UCD. Frame trifft doppelt, dazu Escárcega, Mašić und Barry. Nach 29 Ligaspielen stehen die Harps bei 81 Punkten und 101:11 Toren.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-09-05-daryl-frame-double-ucd',date,player:'Daryl Frame',type:'standout',title:'Doppelpack in zwei Minuten',detail:'Frame trifft in der 8. und 10. Minute beim 5:1 gegen UCD und erhält Note 8,1.'},
    {id:'2042-09-05-thomas-kenny-penalty-save',date,player:'Thomas Kenny',type:'standout',title:'Kenny hält Elfmeter',detail:'Pariert in Minute 30 Bryan Ashes Strafstoß und verhindert damit ein mögliches 1:3.'},
    {id:'2042-09-05-torric-bruce-150-harps',date,player:'Torric Bruce',type:'milestone',title:'150 Einsätze für Finn Harps',detail:'Bruce erreicht beim 5:1 in Dublin seinen 150. Einsatz für den Klub.'},
    {id:'2042-09-05-escarcega-150-league-goals',date,player:'Emerson Escárcega',type:'milestone',title:'150 Ligatore',detail:'Escárcega erzielt beim 5:1 gegen UCD das 150. Ligator seiner Karriere.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'05.09.2042',
    headline:'Fünf Tore vor Inter: Harps knacken in Dublin die 100er-Marke',
    subheadline:'Frame trifft zweimal binnen zwei Minuten, Escárcega und Mašić machen vor der Pause alles klar. Barry legt nach. Vier Tage vor Inter gewinnt Finn Harps bei UCD 5:1.',
    label:'PREMIER DIVISION · UCD 1:5 FINN HARPS',
    heroStat:{label:'LIGATORE 2042',value:'101',note:'nach 29 Spielen · 101:11 Torverhältnis'},
    intro:'Die Champions League kann kommen. Finn Harps erledigt die letzte Ligaaufgabe vor Inter bereits in der ersten Halbzeit und überschreitet nebenbei die Marke von 100 Ligatoren.',
    sections:[
      {title:'Frame zündet den Blitzstart',text:'Daryl Frame trifft in der 8. und 10. Minute. Nur vier Minuten später erhöht Emerson Escárcega auf 3:0. Das Spiel ist nach einer Viertelstunde praktisch entschieden.'},
      {title:'Kenny stoppt UCD vom Punkt',text:'UCD bekommt in Minute 30 einen Elfmeter, doch Thomas Kenny pariert gegen Bryan Ashe. Sechs Minuten später macht Amir Mašić auf der anderen Seite das 4:0.'},
      {title:'Barry macht die fünf voll',text:'Ben Barry erzielt in Minute 67 das 5:0. Jerry Jefferies gelingt UCD sieben Minuten später lediglich der Ehrentreffer.'},
      {title:'Die magische 100 fällt',text:'Nach dem 5:1 steht Finn Harps in der Liga bei 101 Toren und nur 11 Gegentreffern. 27 Siege aus 29 Spielen bringen 81 Punkte.'},
      {title:'Jetzt Inter',text:'Am 9. September beginnt die Champions-League-Ligaphase zuhause gegen Inter. Die Harps kommen mit einem klaren Auswärtssieg und einer Offensive im Vollbetrieb in die Königsklasse.'}
    ],
    verdictHeading:'Bessere Generalprobe kaum möglich',
    verdict:'Finn Harps braucht keine perfekte Chancenverwertung, um UCD früh zu brechen. Entscheidend ist die Wucht der Anfangsphase: drei Tore bis Minute 14, vier bis zur Pause. Vor Inter wirkt die Mannschaft nicht nur siegessicher, sondern offensiv ausgesprochen scharf.',
    sources:['FM-Spielübersicht UCD – Finn Harps · 05.09.2042','Finn-Harps-Spielerstatistiken · 05.09.2042','FourFourTwo-Spielbericht · 05.09.2042']
  });

  upsert(window.FM_NEWS,{
    id:'2042-09-05-ucd-finn-harps-1-5',date,season:2042,category:'Premier Division',accent:'green',featured:false,
    eyebrow:'GENERALPROBE VOR INTER · UCD 1:5',
    title:'101 Ligatore: Harps schießen sich für Inter warm',
    summary:'Frame trifft doppelt, Escárcega, Mašić und Barry ebenfalls. Finn Harps gewinnt 5:1 bei UCD und steht nach 29 Ligaspielen bei 101:11 Toren.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','ucd','daryl-frame','emerson-escarcega','amir-masic','ben-barry','thomas-kenny','inter','season-2042']
  });
})();