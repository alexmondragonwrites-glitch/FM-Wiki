(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]={...list[index],...item};else list.push(item);
  };

  const fixtureId='2041-08-09-finn-harps-st-patricks-premier-division';
  const reportId='2041-08-09-st-patricks-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-08-09',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    away:{id:'st-patricks-athletic',name:"St Patrick's Athletic",short:'STP',score:1},
    score:'3:1',homeGoals:3,awayGoals:1,halfTime:'0:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Böig · 23 °C',referee:'Marc Lynch',
    headline:'Gold-Cup-Sieger kommt an: Escárcega trifft direkt bei seinem Harps-Debüt',
    verdict:'Finn Harps schlägt St Patrick’s Athletic mit 3:1. Nach einer torlosen ersten Halbzeit eröffnet Cormac O’Kane in der 60. Minute, St Pat gleicht per Elfmeter aus, ehe Emerson Escárcega nur wenige Tage nach dem Gold-Cup-Titel bei seinem Debüt das 2:1 erzielt. O’Kane setzt in der Nachspielzeit den Schlusspunkt.',
    events:[
      {minute:60,type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'1:0'},
      {minute:68,type:'goal',team:"St Patrick's Athletic",player:'Greg Smith',text:'1:1 · Elfmeter'},
      {minute:71,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'2:1 · erstes Tor für Finn Harps'},
      {minute:'90+2',type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'3:1'}
    ],
    stats:[
      {label:'Schüsse',home:17,away:1,kind:'number'},
      {label:'Schüsse aufs Tor',home:6,away:1,kind:'number'},
      {label:'Fouls',home:15,away:17,kind:'number'},
      {label:'Gelbe Karten',home:0,away:5,kind:'number'},
      {label:'Ballbesitz',home:60,away:40,kind:'percent'},
      {label:'Angekommene Pässe',home:545,away:382,kind:'number'},
      {label:'Notenschnitt',home:7.23,away:6.56,kind:'decimal'}
    ],
    leagueAfterMatch:{position:1,played:26,wins:24,draws:2,losses:0,goalsFor:80,goalsAgainst:8,goalDifference:72,points:74},
    standout:{player:"Cormac O'Kane",rating:8.6,goals:2,assists:0,note:'Doppelpack beim 3:1'},
    milestones:[
      {player:'Emerson Escárcega',text:'Finn-Harps-Debüt'},
      {player:'Emerson Escárcega',text:'Erstes Tor für Finn Harps'},
      {player:'Emerson Escárcega',text:'125. Ligator seiner Karriere'},
      {player:'Callum Brennan',text:'150. Spiel als Profi'},
      {player:'Torric Bruce',text:'175. Spiel als Profi'},
      {player:'Darcy Andrews',text:'125. Ligaspiel für Finn Harps'},
      {player:'Billy Walker',text:'50. Ligaspiel seiner Karriere und für Finn Harps'},
      {player:'Dom Docherty',text:'150. Ligaspiel für Finn Harps'}
    ],
    analysis:{
      summary:'Nach einer torlosen ersten Hälfte zieht Finn Harps das Spiel nach der Pause auf seine Seite. O’Kane trifft doppelt, doch die große Geschichte gehört Escárcega: Debüt, Führungstor und gleichzeitig sein 125. Ligator der Karriere.',
      firstHalf:'St Patrick’s hält bis zur Pause das 0:0. Die Harps kontrollieren viel Ballbesitz, finden aber zunächst keinen Durchbruch.',
      secondHalf:'O’Kane eröffnet nach einer Stunde. Der Elfmeter zum 1:1 bringt kurz Spannung zurück, doch nur drei Minuten später trifft Escárcega bei seinem ersten Harps-Einsatz. O’Kane macht in der 92. Minute alles klar.',
      control:'17:1 Schüsse und 60 Prozent Ballbesitz zeigen, wie wenig St Patrick’s aus dem Spiel heraus zustande bringt. Das einzige Tor der Gäste fällt per Elfmeter.',
      debut:'Emerson Escárcega kehrt als Gold-Cup-Sieger und bester Spieler des Turniers nach Donegal zurück und braucht für sein erstes Harps-Tor nur sein Debütspiel. Der Treffer zum 2:1 ist zugleich sein 125. Ligator der Karriere.',
      leagueContext:'Nach 26 Ligaspielen bleiben die Harps ungeschlagen: 24 Siege, zwei Remis, 80:8 Tore und 74 Punkte.'
    },
    sources:['FM-Spielübersicht Finn Harps – St Patrick’s Athletic · 09.08.2041','Finn-Harps-Spielerstatistiken · 09.08.2041']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const esc=(window.FM_PLAYERS||[]).find(p=>p.id==='emerson-escarcega'||p.name==='Emerson Escárcega');
  if(esc){
    esc.profileDate='2041-08-09';
    esc.currentClub='Finn Harps';
    esc.status='Finn Harps · Debüt mit Tor';
    esc.availability='Verfügbar';
    esc.internationalDuty={
      ...(esc.internationalDuty||{}),
      status:'Gold-Cup-Sieger · zum Klub zurückgekehrt',
      referenceDate:'2041-08-09',
      note:'Nach Mexikos Gold-Cup-Titel ist Escárcega zu Finn Harps zurückgekehrt und hat am 9. August sein Klubdebüt gegeben.'
    };
    esc.finnHarpsDebut='09.08.2041 · 3:1 gegen St Patrick’s Athletic';
    esc.finnHarpsFirstGoal='09.08.2041 · 71. Minute zum 2:1 gegen St Patrick’s Athletic';
    esc.careerNarrative=esc.careerNarrative||[];
    const note='09.08.2041: Emerson Escárcega gibt beim 3:1 gegen St Patrick’s Athletic sein Debüt für Finn Harps. In der 71. Minute erzielt er das 2:1, sein erstes Tor für die Harps und zugleich das 125. Ligator seiner Karriere.';
    if(!esc.careerNarrative.includes(note))esc.careerNarrative.push(note);
  }

  [
    {id:'2041-08-09-emerson-escarcega-harps-debut',date:'2041-08-09',player:'Emerson Escárcega',type:'debut',title:'Debüt und erstes Harps-Tor',detail:'Escárcega trifft beim 3:1 gegen St Patrick’s Athletic in der 71. Minute zum 2:1. Es ist sein erstes Tor für Finn Harps und zugleich sein 125. Ligator der Karriere.'},
    {id:'2041-08-09-cormac-okane-st-patricks',date:'2041-08-09',player:"Cormac O'Kane",type:'performance',title:'O’Kane entscheidet mit Doppelpack',detail:'Trifft in der 60. Minute zum 1:0 und in der 90.+2 zum 3:1-Endstand; Note 8,6.'},
    {id:'2041-08-09-darcy-andrews-125-harps-league',date:'2041-08-09',player:'Darcy Andrews',type:'milestone',title:'125. Ligaspiel für Finn Harps',detail:'Erreicht gegen St Patrick’s Athletic sein 125. Ligaspiel für den Klub.'},
    {id:'2041-08-09-dom-docherty-150-harps-league',date:'2041-08-09',player:'Dom Docherty',type:'milestone',title:'150. Ligaspiel für Finn Harps',detail:'Bestreitet beim 3:1 sein 150. Ligaspiel für die Harps.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-08-09';
    season.latestHeadline='Premier Division: Escárcega trifft beim Debüt, O’Kane schnürt beim 3:1 gegen St Patrick’s einen Doppelpack.';
    season.league={...(season.league||{}),position:1,played:26,wins:24,draws:2,losses:0,goalsFor:80,goalsAgainst:8,goalDifference:72,points:74,latestResult:'09.08.2041 · Finn Harps 3:1 St Patrick’s Athletic'};
    season.changes=season.changes||{notes:[]};
    const note='09.08.2041: 3:1 gegen St Patrick’s Athletic. O’Kane trifft doppelt; Gold-Cup-Sieger Emerson Escárcega erzielt bei seinem Finn-Harps-Debüt direkt sein erstes Klubtor. Nach 26 Ligaspielen: 24 Siege, 2 Remis, 0 Niederlagen, 80:8 Tore, 74 Punkte.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const report={
    id:reportId,type:'Spielbericht',date:'2041-08-09',competition:'Premier Division',fixtureDate:'09.08.2041',
    home:'Finn Harps',away:"St Patrick's Athletic",score:'3:1',location:'Donegal Stadium · Stranorlar · 12.800 Zuschauer',
    headline:'Escárcega ist angekommen: Debüttor beim 3:1 gegen St Patrick’s',
    subheadline:'Nur fünf Tage nach Mexikos Gold-Cup-Triumph trifft der ablösefreie Neuzugang bei seinem ersten Einsatz für Finn Harps. O’Kane entscheidet die Partie mit einem Doppelpack.',
    label:'PREMIER DIVISION · FINN HARPS 3:1 ST PATRICK’S ATHLETIC',
    heroStat:{label:'Escárcegas erster Harps-Abend',value:'Debüt + Tor',note:'71. Minute zum 2:1 · zugleich 125. Ligator der Karriere'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Emerson Escárcegas Ankunft in Donegal hätte kaum sauberer geschrieben werden können. Nach dem Gold-Cup-Sieg mit Mexiko steht der neue Stürmer erstmals für Finn Harps auf dem Platz und erzielt beim 3:1 gegen St Patrick’s Athletic direkt den entscheidenden Führungstreffer. Cormac O’Kane liefert mit zwei Toren den Rahmen für ein Debüt, das sofort hängen bleibt.',
    sections:[
      {title:'Erst Geduld, dann O’Kane',text:'Die erste Halbzeit bleibt torlos. In der 60. Minute löst Cormac O’Kane den Knoten und bringt die Harps in Führung.'},
      {title:'Der Elfmeter macht es kurz wieder offen',text:'Greg Smith gleicht in der 68. Minute per Strafstoß für St Patrick’s aus. Es bleibt der einzige Abschluss der Gäste, der im Spielbericht als Schuss aufs Tor ausgewiesen wird.'},
      {title:'Drei Minuten später beginnt Escárcegas Harps-Geschichte',text:'In der 71. Minute trifft Emerson Escárcega zum 2:1. Es ist sein erster Treffer für Finn Harps, fällt direkt bei seinem Debüt und markiert zugleich das 125. Ligator seiner Karriere.'},
      {title:'O’Kane setzt den Schlusspunkt',text:'In der 90.+2 Minute trifft O’Kane zum zweiten Mal und stellt den 3:1-Endstand her. Mit Note 8,6 ist er der beste Spieler der Partie.'},
      {title:'Die Serie bleibt makellos',text:'Finn Harps steht nach 26 Ligaspielen bei 24 Siegen und zwei Remis. 80 Tore stehen nur acht Gegentreffern gegenüber, die Mannschaft bleibt weiterhin ungeschlagen.'}
    ],
    strengthsTitle:'DIE GESCHICHTEN DES ABENDS',strengthsHeading:'Ein Debüt, ein Doppelpack, eine Serie',
    strengths:['Escárcega trifft bei seinem Finn-Harps-Debüt','125. Ligator für Escárcega','O’Kane mit Doppelpack und Note 8,6','17:1 Schüsse','60 % Ballbesitz','24 Siege aus 26 Ligaspielen'],
    vulnerabilitiesTitle:'DER KURZE WACKLER',vulnerabilitiesHeading:'Ein Elfmeter bringt St Pat zurück',
    vulnerabilities:['Zur Pause noch 0:0','Ausgleich zum 1:1 per Elfmeter','Trotz klarer Schussbilanz bleibt es bis zur 92. Minute nur ein Tor Unterschied'],
    verdictHeading:'Vom Gold Cup direkt ins Donegal Stadium',
    verdict:'Escárcega kommt nicht nur mit internationalem Glanz nach Donegal, sondern liefert sofort einen sportlichen Beleg. Sein erster Harps-Einsatz endet mit dem entscheidenden Tor, während O’Kane mit dem Doppelpack zeigt, dass der neue Konkurrenzkampf im Sturm die bestehende Qualität nicht ersetzt, sondern erweitert.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 9. August 2041.',
    sources:['FM-Spielübersicht Finn Harps – St Patrick’s Athletic · 09.08.2041','Finn-Harps-Spielerstatistiken · 09.08.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-08-09-escarcega-debuttor-st-patricks',date:'2041-08-09',season:2041,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · FINN HARPS 3:1 ST PATRICK’S',title:'Escárcega trifft direkt bei seinem Harps-Debüt',
    summary:'Gold-Cup-Sieger Emerson Escárcega erzielt beim ersten Einsatz für Finn Harps sofort das 2:1. O’Kane trifft doppelt, die Harps bleiben nach 26 Ligaspielen ungeschlagen.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','emerson-escarcega','cormac-okane','st-patricks-athletic','season-2041']
  });
})();