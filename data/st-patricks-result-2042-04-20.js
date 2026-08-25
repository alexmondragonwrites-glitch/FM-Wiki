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

  const fixtureId='2042-04-20-finn-harps-st-patricks-premier-division';
  const reportId='2042-04-20-finn-harps-st-patricks-4-0-spielbericht';

  const match={
    id:fixtureId,date:'2042-04-20',season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    away:{id:'st-patricks',name:"St Patrick's Athletic",short:'STP',score:0},
    score:'4:0',homeGoals:4,awayGoals:0,halfTime:'3:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Heiter · 8 °C',referee:'Declan Toland',
    headline:"Escárcega-Doppelpack: Finn Harps schlagen St Patrick's 4:0",
    verdict:"Finn Harps bestätigt die starke Form nach dem 4:0-Gesamtsieg über Manchester City auch national. Emerson Escárcega trifft doppelt, Torric Bruce und Dom Docherty sorgen schon vor der Pause für klare Verhältnisse. Besonders auffällig: St Patrick's kommt bei elf Abschlüssen kein einziges Mal aufs Tor, während die Harps elf ihrer 17 Schüsse auf das Gehäuse bringen. Mit dem dritten Ligasieg in Folge festigt Finn Harps Platz eins.",
    scorers:[
      {player:'Emerson Escárcega',team:'Finn Harps',goals:2,minutes:[8,47],penaltyMinutes:[47]},
      {player:'Torric Bruce',team:'Finn Harps',goals:1,minutes:[35]},
      {player:'Dom Docherty',team:'Finn Harps',goals:1,minutes:[39]}
    ],
    events:[
      {minute:8,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'1:0'},
      {minute:35,type:'goal',team:'Finn Harps',player:'Torric Bruce',text:'2:0'},
      {minute:39,type:'goal',team:'Finn Harps',player:'Dom Docherty',text:'3:0'},
      {minute:47,type:'penalty-goal',team:'Finn Harps',player:'Emerson Escárcega',text:'4:0 · Elfmeter'},
      {minute:'90+4',type:'injury',team:"St Patrick's Athletic",player:'Karanoko Carbon',text:'Zehenfraktur nach Tackling gegen Diego Fernández'}
    ],
    stats:[
      {label:'Schüsse',home:17,away:11,kind:'number'},
      {label:'Schüsse aufs Tor',home:11,away:0,kind:'number'},
      {label:'xG',home:2.47,away:null,kind:'decimal'},
      {label:'Ballbesitz',home:68,away:32,kind:'percent'}
    ],
    ratings:{
      'Evan Reilly':7.8,'Callum Brennan':7.2,'Daniele Di Maio':7.3,'Torric Bruce':8.1,'Kevin Kelly':7.1,
      "Jim O'Neill":7.4,'Ben Barry':6.8,'Jake Roberts':6.7,'Pol Muñoz':7.2,'Dom Docherty':8.5,
      'Emerson Escárcega':8.5,'Gustavo da Silva':6.8,'Diego Fernández':6.9,'Romano Maisto':6.7,
      'Daryl Frame':6.6,'Mareks Istrankins':6.9
    },
    standout:{player:'Emerson Escárcega',team:'Finn Harps',rating:8.5,goals:2,note:'Trifft früh zum 1:0 und verwandelt direkt nach der Pause den Elfmeter zum 4:0.'},
    leagueAfterMatch:{played:12,wins:10,draws:0,losses:2,goalsFor:36,goalsAgainst:4,goalDifference:32,points:30,position:1},
    analysis:{
      escarcega:'Escárcega setzt seine ruhige, effiziente Form fort. Nach Tor und Vorlage über beide City-Spiele folgt gegen St Patrick’s ein Doppelpack; er entscheidet erneut, ohne das Spiel an sich reißen zu müssen.',
      firstHalf:'Nach Escárcegas frühem 1:0 bauen Bruce und Docherty die Führung innerhalb von vier Minuten auf 3:0 aus. Das Spiel ist damit noch vor der Pause praktisch entschieden.',
      control:'68 Prozent Ballbesitz und 11:0 Schüsse aufs Tor zeigen eine klare Kontrolle. St Patrick’s kommt zwar zu elf Abschlüssen, zwingt Evan Reilly aber kein einziges Mal zu einer Parade.',
      context:"Der Sieg ist auch deshalb bemerkenswert, weil St Patrick's Athletic wenige Tage zuvor als irischer Vertreter im Halbfinale der UEFA Europa Conference League bestätigt wurde. National bleibt der Abstand zu Finn Harps dennoch deutlich.",
      titleRace:'Finn Harps steht nach zwölf Spielen bei 30 Punkten und 36:4 Toren. Die Mannschaft reagiert damit endgültig auf die beiden März-Niederlagen und gewinnt zum dritten Mal in Folge in der Liga.'
    },
    notes:[
      "Finn Harps schlägt St Patrick's Athletic 4:0.",
      'Emerson Escárcega erzielt einen Doppelpack in Minute 8 und 47.',
      'Torric Bruce und Dom Docherty treffen ebenfalls.',
      "St Patrick's bringt keinen seiner elf Abschlüsse aufs Tor.",
      'Finn Harps steht nach zwölf Ligaspielen bei 30 Punkten und 36:4 Toren.',
      'Dritter Ligasieg in Folge.'
    ],
    sources:["FM-Spielübersicht Finn Harps – St Patrick's Athletic · 20.04.2042","Finn-Harps-Spielerstatistiken · 20.04.2042","Irische Fußballzeitung · Spielbericht 20.04.2042"]
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-04-20','15:00',"St Patrick's Athletic",'Heim','4:0','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&["St Patrick's Athletic","St Patrick's Athletic FC"].includes(x[2])&&x[5]==='Premier Division'&&x[0]==='2042-04-20');
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const stPatricks=window.FM_CLUBS.find(x=>x.id==='st-patricks'||x.name==="St Patrick's Athletic"||x.name==="St Patrick's Athletic FC");
  if(stPatricks){
    stPatricks.meetings=stPatricks.meetings||[];
    const meeting={date:'20.04.2042',competition:'Premier Division',venue:'A',result:'4:0'};
    const idx=stPatricks.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)stPatricks.meetings[idx]=meeting;else stPatricks.meetings.unshift(meeting);
    stPatricks.lastMeeting="20.04.2042 · Finn Harps 4:0 St Patrick's Athletic";
    stPatricks.summary="St Patrick's Athletic erlebt unmittelbar vor der Conference-League-Halbfinalphase national einen harten Vergleich mit dem irischen Spitzenreiter: Finn Harps gewinnt in Stranorlar 4:0. Der europäische Lauf der Saints bleibt davon unberührt und führt im Halbfinale gegen Rapid Wien weiter.";
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-04-20';
    season.latestHeadline="Premier Division: Finn Harps schlagen St Patrick's Athletic 4:0. Escárcega trifft doppelt, Bruce und Docherty ebenfalls.";
    season.league=season.league||{};
    season.league.current={played:12,wins:10,draws:0,losses:2,goalsFor:36,goalsAgainst:4,goalDifference:32,points:30,position:1};
    season.nextFocus={competition:'UEFA Champions League',stage:'Halbfinale',opponent:'Barcelona',status:'Nach 4:0 gegen St Patrick’s mit drei Ligasiegen in Folge in Form'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note="20.04.2042: Finn Harps schlägt St Patrick's Athletic 4:0. Escárcega trifft in Minute 8 und per Elfmeter in Minute 47, Bruce und Docherty sorgen schon vor der Pause für das 3:0. Die Harps lassen bei 17:11 Schüssen keinen einzigen Schuss aufs eigene Tor zu und stehen nach zwölf Ligaspielen bei 30 Punkten sowie 36:4 Toren.";
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-04-20-escarcega-st-patricks',date:'2042-04-20',player:'Emerson Escárcega',type:'standout',title:'Escárcega mit Doppelpack gegen St Patrick’s',detail:'Trifft zum 1:0 und per Elfmeter zum 4:0; Note 8,5.'},
    {id:'2042-04-20-torric-bruce-st-patricks',date:'2042-04-20',player:'Torric Bruce',type:'goal',title:'Bruce trifft zum 2:0',detail:'Kopfballtreffer in Minute 35; Note 8,1.'},
    {id:'2042-04-20-dom-docherty-st-patricks',date:'2042-04-20',player:'Dom Docherty',type:'goal',title:'Docherty setzt starke Phase fort',detail:'Erzielt in Minute 39 das 3:0 und erhält die Note 8,5.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-04-20',competition:'Premier Division',fixtureDate:'20.04.2042',
    headline:"Vier Tore, null Zweifel: Finn Harps überrollen St Patrick's",
    subheadline:"Escárcega trifft doppelt, Bruce und Docherty ebenfalls. Der Conference-League-Halbfinalist aus Dublin bringt beim 0:4 keinen einzigen Schuss aufs Tor.",
    label:'PREMIER DIVISION · 12. SPIELTAG',
    heroStat:{label:'Schüsse aufs Tor',value:'11:0',note:'Finn Harps kontrolliert den Nachmittag in Stranorlar'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:"Nach der europäischen Machtdemonstration gegen Manchester City bleibt Finn Harps auch national auf Temperatur. Gegen St Patrick's Athletic reichen 39 Minuten, um das Spiel praktisch zu entscheiden.",
    sections:[
      {title:'Escárcega eröffnet und beendet',text:'Emerson Escárcega trifft bereits in der 8. Minute zum 1:0 und verwandelt in der 47. Minute einen Elfmeter zum 4:0. Der erfahrene Stürmer bestätigt damit seine außergewöhnliche Ruhe und Effizienz in der entscheidenden Saisonphase.'},
      {title:'Bruce und Docherty schlagen vor der Pause zu',text:'Torric Bruce erhöht in Minute 35, Dom Docherty nur vier Minuten später. Mit dem 3:0 zur Pause ist die Partie entschieden.'},
      {title:'Conference-League-Halbfinalist ohne Torschuss aufs Tor',text:"St Patrick's kommt insgesamt zu elf Abschlüssen, aber keiner davon findet den Weg auf Evan Reillys Tor. Finn Harps bringt dagegen elf von 17 Schüssen aufs Gehäuse und hält 68 Prozent Ballbesitz."},
      {title:'Drei Ligasiege in Folge',text:'Nach den beiden Niederlagen gegen Bohemian und Derry hat Finn Harps national wieder drei Spiele hintereinander gewonnen. Die Bilanz steht nun bei zehn Siegen aus zwölf Spielen, 30 Punkten und 36:4 Toren.'}
    ],
    verdictHeading:'Die Maschine läuft wieder',
    verdict:"Der kurze März-Wackler ist endgültig beantwortet. Finn Harps verbindet europäische Spitzenleistung mit nationaler Dominanz und geht mit wachsendem Selbstvertrauen in das Champions-League-Halbfinale gegen Barcelona.",
    sources:["FM-Spielübersicht Finn Harps – St Patrick's Athletic · 20.04.2042","Finn-Harps-Spielerstatistiken · 20.04.2042"]
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-04-20-finn-harps-st-patricks-4-0',date:'2042-04-20',season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 4:0',
    title:"Escárcega-Doppelpack: Harps lassen St Patrick's keine Luft",
    summary:"Finn Harps gewinnt 4:0. Escárcega trifft doppelt, Bruce und Docherty ebenfalls; St Patrick's bleibt trotz elf Abschlüssen ohne Schuss aufs Tor.",
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','st-patricks','emerson-escarcega','torric-bruce','dom-docherty','season-2042']
  });
})();