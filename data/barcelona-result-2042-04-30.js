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

  const fixtureId='2042-04-30-barcelona-finn-harps-champions-league-semifinal-first-leg';
  const reportId='2042-04-30-barcelona-finn-harps-0-0-spielbericht';
  const date='2042-04-30';

  const match={
    id:fixtureId,date,season:2042,competition:'UEFA Champions League',stage:'Halbfinale · Hinspiel',
    home:{id:'barcelona',name:'FC Barcelona',short:'BAR',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:0},
    score:'0:0',homeGoals:0,awayGoals:0,halfTime:'0:0',aggregate:'0:0',
    venue:'Spotify Camp Nou',location:'Barcelona, Spanien',attendance:98523,awayFans:1150,weather:'14 °C',
    headline:'Alles offen: Finn Harps nehmen ein 0:0 aus Barcelona mit',
    verdict:'Finn Harps übersteht das Champions-League-Halbfinal-Hinspiel im Camp Nou ohne Gegentor und hält vor dem Rückspiel alle Karten in der Hand. Barcelona besitzt mehr Abschlüsse und drei Großchancen, doch Paulo Henrique und die Harps-Defensive bleiben standhaft. Gleichzeitig bringt Finn Harps alle vier eigenen Abschlüsse aufs Tor. Nach 180 möglichen Minuten ist nach den ersten 90 noch nichts entschieden.',
    events:[
      {minute:62,type:'substitution',team:'Finn Harps',player:'Justin Ramsey',text:'Ramsey feiert nach drei Wochen Verletzungspause sein Comeback'},
      {minute:64,type:'yellow',team:'FC Barcelona',player:'Fernandes',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:9,away:4,kind:'number'},
      {label:'Schüsse aufs Tor',home:2,away:4,kind:'number'},
      {label:'xG',home:0.87,away:0.43,kind:'decimal'},
      {label:'Großchancen',home:3,away:0,kind:'number'},
      {label:'Ballbesitz',home:52,away:48,kind:'percent'},
      {label:'Ecken',home:4,away:4,kind:'number'},
      {label:'Fouls',home:11,away:15,kind:'number'},
      {label:'Angekommene Pässe',home:'478/540',away:'434/514',kind:'text'},
      {label:'Passquote',home:89,away:84,kind:'percent'},
      {label:'Gewonnene Zweikämpfe',home:83,away:69,kind:'percent'},
      {label:'Gewonnene Kopfbälle',home:59,away:41,kind:'percent'},
      {label:'Mannschaftsnote',home:6.84,away:6.75,kind:'decimal'},
      {label:'Intensive Sprints',home:127,away:132,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':7.3,'Diego Fernández':6.6,'Mareks Istrankins':6.7,'Torric Bruce':7.4,'Kevin Kelly':6.7,
      'Amir Mašić':6.5,'Daryl Frame':6.7,"Cormac O'Kane":6.6,'Giacomo Papini':6.6,'Dom Docherty':6.4,
      'Emerson Escárcega':6.7,'Pol Muñoz':6.4,"Jim O'Neill":6.8,'Callum Brennan':6.8,'Romano Maisto':7.0,'Justin Ramsey':6.6
    },
    standout:{player:'Torric Bruce',team:'Finn Harps',rating:7.4,note:'Defensiv stärkster Harps-Feldspieler; gewinnt laut Spielerstatistik alle sechs ausgewiesenen Zweikämpfe.'},
    analysis:{
      balance:'Barcelona hat mit 9:4 mehr Abschlüsse und mit 0,87:0,43 das höhere xG, Finn Harps bringt dafür alle vier eigenen Schüsse aufs Tor. Das 0:0 ist daher kein dominanter Harps-Auftritt, aber ein belastbares Auswärtsergebnis.',
      defence:'Drei ausgewiesene Großchancen Barcelonas bleiben ungenutzt. Paulo Henrique und die Defensive halten im Camp Nou die Null; Torric Bruce sticht mit Note 7,4 hervor.',
      attack:'Offensiv bleibt Escárcega diesmal ohne entscheidende Aktion. Die Harps kommen nur zu vier Abschlüssen, treffen damit aber jedes Mal das Tor. Barcelonas Rangel pariert viermal.',
      ramsey:'Justin Ramsey kehrt nach drei Wochen Verletzungspause zurück und wird in der 62. Minute eingewechselt. Damit bekommt er erste Spielpraxis vor dem entscheidenden Rückspiel.',
      returnLeg:'Nach dem 0:0 gibt es keinen taktischen Puffer und keinen Rückstand. Im Rückspiel in Donegal entscheidet ein Sieg direkt über den Finaleinzug; das Halbfinale bleibt vollständig offen.'
    },
    notes:[
      'FC Barcelona und Finn Harps trennen sich im Champions-League-Halbfinal-Hinspiel 0:0.',
      'Barcelona kommt auf drei Großchancen, Finn Harps hält dennoch die Null.',
      'Finn Harps bringt alle vier Abschlüsse aufs Tor.',
      'Torric Bruce erhält mit 7,4 die beste Harps-Feldspielerbewertung.',
      'Justin Ramsey feiert in der 62. Minute nach drei Wochen Pause sein Comeback.',
      'Vor dem Rückspiel steht es im Gesamtergebnis 0:0.'
    ],
    sources:['FM-Spielübersicht Barcelona – Finn Harps · 30.04.2042','Finn-Harps-Spielerstatistiken · 30.04.2042']
  };

  upsert(window.FM_MATCHES,match);

  const barcelona=window.FM_CLUBS.find(x=>x.id==='barcelona'||x.id==='fc-barcelona'||x.name==='Barcelona'||x.name==='FC Barcelona');
  if(barcelona){
    barcelona.meetings=barcelona.meetings||[];
    const meeting={date:'30.04.2042',competition:'UEFA Champions League · Halbfinale Hinspiel',venue:'A',result:'0:0'};
    const idx=barcelona.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)barcelona.meetings[idx]=meeting;else barcelona.meetings.unshift(meeting);
    barcelona.lastMeeting='30.04.2042 · Barcelona 0:0 Finn Harps';
    barcelona.summary='Champions-League-Halbfinalgegner 2042. Das Hinspiel im Spotify Camp Nou endet 0:0. Barcelona besitzt drei Großchancen und mehr Abschlüsse, Finn Harps hält jedoch die Null und bringt alle vier eigenen Schüsse aufs Tor. Vor dem Rückspiel ist das Duell vollständig offen.';
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-04-30-justin-ramsey-comeback-barcelona',date,player:'Justin Ramsey',type:'return',
    title:'Ramsey sammelt erste Minuten nach Verletzung',
    detail:'Nach drei Wochen Pause wegen der Knöchelverdrehung wird Ramsey im Camp Nou in der 62. Minute eingewechselt und sammelt vor dem Rückspiel erste Spielpraxis.'
  });

  const cl=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...cl,
    knockoutStage:{
      ...(cl.knockoutStage||{}),
      semifinals:{
        ...((cl.knockoutStage||{}).semifinals||{}),
        finnHarps:{
          ...((((cl.knockoutStage||{}).semifinals||{}).finnHarps)||{}),
          opponent:'Barcelona',status:'nach Hinspiel offen',firstLeg:{date,venue:'Spotify Camp Nou',result:'0:0'},aggregate:'0:0',
          notes:['Auswärts ohne Gegentor','Barcelona mit drei Großchancen','Ramsey feiert sein Comeback','Rückspiel entscheidet über den Finaleinzug']
        }
      }
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Champions League: Finn Harps spielt im Halbfinal-Hinspiel beim FC Barcelona 0:0. Barcelona hat drei Großchancen, die Harps halten die Null; Justin Ramsey feiert sein Comeback.';
    season.nextFocus={competition:'UEFA Champions League',stage:'Halbfinale · Rückspiel',opponent:'Barcelona',aggregate:'0:0',status:'Alles offen'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='30.04.2042: Champions-League-Halbfinale, Hinspiel: Barcelona und Finn Harps trennen sich im Spotify Camp Nou 0:0. Barcelona verzeichnet 9:4 Schüsse, 3:0 Großchancen und 0,87:0,43 xG, doch Finn Harps hält die Null und bringt alle vier eigenen Abschlüsse aufs Tor. Justin Ramsey kehrt in Minute 62 nach drei Wochen Verletzungspause zurück. Vor dem Rückspiel steht das Duell 0:0.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,type:'Spielbericht',date,competition:'UEFA Champions League',fixtureDate:'30.04.2042',
    headline:'Alles offen: Finn Harps nehmen ein 0:0 aus Barcelona mit',
    subheadline:'Barcelona hat mehr Abschlüsse und drei Großchancen, doch die Harps halten im Camp Nou die Null. Ramsey feiert sein Comeback, vor dem Rückspiel steht das Halbfinale exakt auf Anfang.',
    label:'CHAMPIONS LEAGUE · HALBFINALE · HINSPIEL',
    heroStat:{label:'Gesamtergebnis',value:'0:0',note:'90 Minuten gespielt · 90 Minuten bleiben'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Finn Harps verlässt das Spotify Camp Nou ohne Tor, aber auch ohne Rückstand. Das 0:0 ist kein offensives Ausrufezeichen wie gegen Manchester City, dafür ein disziplinierter Auswärtsabend gegen einen erfahrenen Gegner. Barcelona erzeugt die besseren Chancen, findet aber keinen Weg an Paulo Henrique und der Harps-Defensive vorbei.',
    sections:[
      {title:'Barcelona hat die Chancen, Harps die Null',text:'Die Katalanen kommen auf neun Abschlüsse, zwei davon aufs Tor, und werden mit drei Großchancen geführt. Finn Harps hält dennoch stand. Paulo Henrique und die Defensive sorgen dafür, dass aus Barcelonas 0,87 xG kein Treffer entsteht.'},
      {title:'Vier Abschlüsse, viermal aufs Tor',text:'Finn Harps entwickelt mit nur vier Schüssen deutlich weniger Volumen als zuletzt, bringt aber jeden einzelnen Abschluss auf das Tor von José Antonio Rangel. Der Barça-Keeper pariert viermal und verhindert damit ebenfalls, dass das Hinspiel kippt.'},
      {title:'Bruce führt die Defensive',text:'Torric Bruce erhält mit 7,4 die beste Feldspielerbewertung der Harps und gewinnt laut Spielerstatistik alle sechs ausgewiesenen Zweikämpfe. Gegen Barcelonas erfahrene Offensive ist das ein zentraler Baustein des Clean Sheets.'},
      {title:'Ramsey ist wieder da',text:'Justin Ramsey wird in der 62. Minute eingewechselt und sammelt nach drei Wochen Verletzungspause seine ersten Wettkampfminuten. Für das Rückspiel könnte damit neben seiner Qualität auch wieder etwas mehr Rhythmus zur Verfügung stehen.'},
      {title:'Alles entscheidet sich in Donegal',text:'Nach 90 Minuten steht es 0:0. Es gibt keinen Vorsprung zu verwalten und keinen Rückstand aufzuholen. Das Rückspiel wird damit zu einem echten Endspiel um den Finaleinzug.'}
    ],
    verdictHeading:'Kein Vorteil auf der Anzeigetafel, aber eine gute Ausgangslage',
    verdict:'Finn Harps hat Barcelona nicht kontrolliert, aber das wichtigste Ziel eines europäischen Auswärtshinspiels erreicht: nicht verlieren und kein Gegentor kassieren. Das Halbfinale bleibt völlig offen. Jetzt entscheidet Donegal.',
    sources:['FM-Spielübersicht Barcelona – Finn Harps · 30.04.2042','Finn-Harps-Spielerstatistiken · 30.04.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-04-30-barcelona-finn-harps-0-0',date,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · HALBFINALE · 0:0',
    title:'Nullnummer im Camp Nou: Vor dem Rückspiel ist alles offen',
    summary:'Finn Harps hält beim FC Barcelona die Null. Barça hat drei Großchancen, die Harps bringen alle vier Abschlüsse aufs Tor; Ramsey feiert sein Comeback.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','barcelona','torric-bruce','paulo-henrique','justin-ramsey','season-2042']
  });
})();