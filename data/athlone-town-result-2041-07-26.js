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

  const fixtureId='2041-07-26-athlone-town-finn-harps-premier-division';
  const reportId='2041-07-26-athlone-town-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-07-26',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'athlone-town',name:'Athlone Town',short:'ATH',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:5},
    score:'1:5',homeGoals:1,awayGoals:5,halfTime:'1:3',
    venue:'Athlone Town Stadium',location:'Athlone, Irland',attendance:3661,awayFans:1481,weather:'Sonnig · 23 °C',referee:'Dermot Connolly',
    headline:'Brutales 1:5: Athlone hält gut mit und wird spät doch deutlich geschlagen',
    verdict:'Der Tabellenletzte Athlone Town liefert deutlich mehr Widerstand, als das 1:5 vermuten lässt. Drei Großchancen, 1,24 xG und vier Schüsse aufs Tor zeigen ein mutiges Heimspiel. Finn Harps besitzt aber die größere Qualität, führt zur Pause 3:1 und macht durch Daryl Frames späten Doppelpack aus einem lange respektablen Auftritt eine klare Niederlage.',
    events:[
      {minute:1,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'0:1'},
      {minute:24,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'0:2'},
      {minute:26,type:'goal',team:'Athlone Town',player:'Jordan Griffiths',text:'1:2'},
      {minute:39,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'1:3'},
      {minute:55,type:'yellow',team:'Athlone Town',player:'Ben Campbell',text:'Gelbe Karte'},
      {minute:70,type:'yellow',team:'Athlone Town',player:'Daniel Masterson',text:'Gelbe Karte'},
      {minute:82,type:'injury',team:'Athlone Town',player:'Callum Bonner',text:'Verletzt'},
      {minute:89,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'1:4'},
      {minute:90,stoppage:2,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'1:5 · 90+2'}
    ],
    stats:[
      {label:'Schüsse',home:8,away:16,kind:'number'},
      {label:'Schüsse aufs Tor',home:4,away:6,kind:'number'},
      {label:'xG',home:1.24,away:2.39,kind:'decimal'},
      {label:'Großchancen',home:3,away:4,kind:'number'},
      {label:'Ballbesitz',home:22,away:78,kind:'percent'},
      {label:'Ecken',home:3,away:2,kind:'number'},
      {label:'Fouls',home:36,away:10,kind:'number'},
      {label:'Angekommene Pässe',home:162,away:573,kind:'number',homeDetail:'73 % · 162/223',awayDetail:'91 % · 573/632'},
      {label:'Gewonnene Zweikämpfe',home:77,away:83,kind:'percent',homeDetail:'10/13',awayDetail:'10/12'},
      {label:'Gewonnene Kopfbälle',home:45,away:47,kind:'percent',homeDetail:'23/51',awayDetail:'23/49'},
      {label:'Gelbe Karten',home:2,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Durchschnittsnote',home:6.19,away:7.31,kind:'decimal'},
      {label:'Intensive Sprints',home:116,away:95,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:23,wins:21,draws:2,losses:0,goalsFor:72,goalsAgainst:6,goalDifference:66,points:65},
    standout:{player:'Justin Ramsey',rating:8.2,goals:2,assists:0},
    milestones:[
      {player:'Giacomo Papini',text:'25. Ligator für Finn Harps'},
      {player:'Justin Ramsey',text:'125. Tor für Finn Harps'},
      {player:'Ben Barry',text:'25. Ligaspiel seiner Karriere und für Finn Harps'},
      {player:'Darcy Andrews',text:'225. Einsatz für Finn Harps'}
    ],
    analysis:{
      summary:'Das Endergebnis ist wesentlich deutlicher als der Spielverlauf. Athlone Town verteidigt als Tabellenletzter nicht nur passiv, sondern kommt selbst auf drei Großchancen, vier Schüsse aufs Tor und 1,24 xG.',
      firstHalf:'Justin Ramsey trifft bereits in der 1. Minute, Papini erhöht in der 24. Minute. Jordan Griffiths antwortet nur zwei Minuten später und bringt Athlone auf 1:2 heran, ehe Ramsey mit seinem zweiten Treffer in der 39. Minute den 1:3-Pausenstand herstellt.',
      secondHalf:'Nach der Pause hält Athlone den Abstand lange bei zwei Toren. Erst in der 89. Minute und in der 90.+2 Minute trifft Daryl Frame doppelt und verwandelt ein bis dahin respektables 1:3 in das brutale 1:5.',
      opponentCredit:'Athlone verdient trotz der Niederlage Anerkennung. 3:4 Großchancen und 1,24:2,39 xG sind gegen diese Finn-Harps-Mannschaft kein typisches Tabellenletzten-Profil.',
      control:'Finn Harps behält mit 78 Prozent Ballbesitz und 573 angekommenden Pässen die strukturelle Kontrolle, muss defensiv aber mehr zulassen als in vielen anderen Ligaspielen.',
      leagueContext:'Nach 23 Ligaspielen bleibt Finn Harps ungeschlagen: 21 Siege, zwei Remis, 72:6 Tore und 65 Punkte.'
    },
    sources:['FM-Spielübersicht Athlone Town – Finn Harps · 26.07.2041','Finn-Harps-Spielerstatistiken · 26.07.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-26';
    season.latestHeadline='Premier Division: Athlone spielt mutig, verliert aber nach Frames spätem Doppelpack 1:5 gegen Finn Harps.';
    season.league={...(season.league||{}),position:1,played:23,wins:21,draws:2,losses:0,goalsFor:72,goalsAgainst:6,goalDifference:66,points:65,latestResult:'26.07.2041 · Athlone Town 1:5 Finn Harps'};
    season.changes=season.changes||{notes:[]};
    const note='26.07.2041: 5:1-Auswärtssieg bei Athlone Town. Der Tabellenletzte hält mit 3:4 Großchancen und 1,24 xG bemerkenswert gut dagegen; erst Daryl Frames Treffer in der 89. und 90.+2 Minute machen das Ergebnis deutlich. Nach 23 Ligaspielen: 21 Siege, 2 Remis, 0 Niederlagen, 72:6 Tore und 65 Punkte.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-07-26-justin-ramsey-athlone-brace',date:'2041-07-26',player:'Justin Ramsey',type:'brace',title:'Doppelpack in Athlone',detail:'Trifft in der 1. und 39. Minute beim 5:1-Auswärtssieg und erhält die Note 8,2. Der erste Treffer fällt praktisch mit dem Anpfiff.'},
    {id:'2041-07-26-justin-ramsey-125',date:'2041-07-26',player:'Justin Ramsey',type:'milestone',title:'125 Tore für Finn Harps',detail:'Der Spielbildschirm vermerkt in Athlone Ramseys 125. Treffer für den Verein.'},
    {id:'2041-07-26-giacomo-papini-athlone',date:'2041-07-26',player:'Giacomo Papini',type:'milestone',title:'25. Ligator für Finn Harps',detail:'Trifft in der 24. Minute zum 0:2 und erreicht damit laut Spielbildschirm 25 Ligatore für Finn Harps.'},
    {id:'2041-07-26-daryl-frame-late-brace',date:'2041-07-26',player:'Daryl Frame',type:'brace',title:'Später Doppelpack macht das Ergebnis brutal',detail:'Trifft in der 89. und 90.+2 Minute und macht aus einem lange engen 1:3 noch ein 1:5.'},
    {id:'2041-07-26-ben-barry-25-league',date:'2041-07-26',player:'Ben Barry',type:'milestone',title:'25. Ligaspiel',detail:'Absolviert in Athlone sein 25. Ligaspiel der Karriere und zugleich sein 25. Ligaspiel für Finn Harps.'},
    {id:'2041-07-26-darcy-andrews-225',date:'2041-07-26',player:'Darcy Andrews',type:'milestone',title:'225 Einsätze für Finn Harps',detail:'Erreicht beim 5:1-Auswärtssieg in Athlone seinen 225. Einsatz für den Verein.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-07-26',competition:'Premier Division',fixtureDate:'26.07.2041',
    home:'Athlone Town',away:'Finn Harps',score:'1:5',location:'Athlone Town Stadium · Athlone · 3.661 Zuschauer',
    headline:'Athlone spielt gut und verliert trotzdem 1:5: Frame macht es ganz spät brutal',
    subheadline:'Der Tabellenletzte kommt auf drei Großchancen und 1,24 xG, hält das 1:3 bis zur 89. Minute und kassiert dann noch Frames Doppelpack. Ramsey trifft zweimal, Papini erreicht sein 25. Ligator für die Harps.',
    label:'PREMIER DIVISION · ATHLONE TOWN 1:5 FINN HARPS',
    heroStat:{label:'Großchancen',value:'3:4',note:'Athlone hält erstaunlich gut mit · xG 1,24:2,39 · Endstand trotzdem 1:5'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Manchmal lügt ein Ergebnis nicht, aber es verschweigt sehr viel. Athlone Town spielt als Tabellenletzter ein mutiges und für seine Position erstaunlich konkurrenzfähiges Spiel. Drei Großchancen und 1,24 xG sind gegen Finn Harps bemerkenswert. Trotzdem steht am Ende ein 1:5, weil die Harps ihre Qualität früh zeigen und Daryl Frame in den letzten Minuten noch zweimal zuschlägt.',
    sections:[
      {title:'Ramsey trifft nach kaum einer Minute',text:'Finn Harps beginnt maximal effizient. Justin Ramsey erzielt bereits in der 1. Minute das 0:1. Giacomo Papini erhöht in der 24. Minute, doch Athlone antwortet sofort: Jordan Griffiths trifft in der 26. Minute zum 1:2. Ramsey stellt mit seinem zweiten Tor in der 39. Minute den Zwei-Tore-Abstand wieder her.'},
      {title:'Athlone spielt nicht wie ein Tabellenletzter',text:'Das Heimteam kommt auf acht Abschlüsse, vier davon aufs Tor, drei Großchancen und 1,24 xG. Gegen eine Mannschaft, die in der Liga zuvor erst fünf Gegentore zugelassen hatte, ist das ein ernstzunehmender offensiver Auftritt.'},
      {title:'78 Prozent Ballbesitz, aber keine sterile Kontrolle',text:'Finn Harps dominiert den Ball mit 78 Prozent und bringt 573 von 632 Pässen an. Trotzdem gelingt es Athlone immer wieder, aus wenig Ballbesitz echte Gefahr zu erzeugen. Die Harps kontrollieren das Spiel, ohne den Gegner vollständig zu ersticken.'},
      {title:'Frame macht aus 1:3 ein 1:5',text:'Bis zur 89. Minute hält Athlone den Rückstand bei zwei Toren. Dann trifft Daryl Frame zunächst zum 1:4 und in der 90.+2 Minute noch einmal. Zwei sehr späte Tore verändern die Optik des Ergebnisses grundlegend.'},
      {title:'21 Siege aus 23 Ligaspielen',text:'Finn Harps bleibt national ungeschlagen. Nach 23 Partien stehen 21 Siege, zwei Remis, 72:6 Tore und 65 Punkte. Selbst an einem Tag, an dem der Tabellenletzte echte Chancen produziert, endet das Spiel mit vier Toren Vorsprung.'}
    ],
    strengthsTitle:'WARUM DIE HARPS TROTZ ATHLONES GUTEM SPIEL DEUTLICH GEWINNEN',strengthsHeading:'Qualität in den entscheidenden Momenten',
    strengths:['Ramsey trifft doppelt','Papini mit seinem 25. Ligator für Finn Harps','78 % Ballbesitz','573 angekommene Pässe','16:8 Schüsse','Frame trifft in der 89. und 90.+2 Minute doppelt'],
    vulnerabilitiesTitle:'WARUM ATHLONE RESPEKT VERDIENT',vulnerabilitiesHeading:'Der Tabellenletzte erzeugt echte Gefahr',
    vulnerabilities:['Athlone kommt auf 3 Großchancen','1,24 xG gegen Finn Harps','4 Schüsse aufs Tor','Das 1:3 hält bis zur 89. Minute','Das Endergebnis ist deutlicher als der Spielverlauf'],
    verdictHeading:'Ein brutales Ergebnis für einen guten Verlierer',
    verdict:'Athlone Town macht vieles richtig und bekommt dafür auf der Anzeigetafel keinerlei Trost. Das 1:5 wirkt wie die nächste irische Demontage, tatsächlich ist es über lange Strecken ein respektabler Auftritt des Tabellenletzten. Genau darin liegt die Härte dieses Finn-Harps-Teams: Selbst wenn der Gegner gut spielt, können zwei späte Aktionen aus einem ordentlichen 1:3 noch ein 1:5 machen.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 26. Juli 2041.',
    sources:['FM-Spielübersicht Athlone Town – Finn Harps · 26.07.2041','Finn-Harps-Spielerstatistiken · 26.07.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-07-26-athlone-town-liga',date:'2041-07-26',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · ATHLONE TOWN 1:5 FINN HARPS',title:'Ein gutes Athlone-Spiel endet brutal 1:5',
    summary:'Athlone Town liefert als Tabellenletzter mit drei Großchancen und 1,24 xG einen starken Auftritt, hält das 1:3 bis zur 89. Minute und verliert durch Frames späten Doppelpack trotzdem noch 1:5.',
    href:`presse.html?id=${reportId}`,entities:['athlone-town','finn-harps','justin-ramsey','giacomo-papini','daryl-frame','ben-barry','darcy-andrews']
  });
})();