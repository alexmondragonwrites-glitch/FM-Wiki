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

  const fixtureId='2041-08-02-shelbourne-finn-harps-premier-division';
  const reportId='2041-08-02-shelbourne-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-08-02',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'shelbourne',name:'Shelbourne',short:'SHE',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    score:'0:3',homeGoals:0,awayGoals:3,halfTime:'0:3',
    venue:'Tolka Park',location:'Dublin, Irland',attendance:4929,awayFans:270,weather:'Windig · 25 °C',referee:'James Carey',
    headline:'Eine Halbzeit reicht: Finn Harps erledigt Shelbourne vor der Pause',
    verdict:'Finn Harps gewinnt bei Shelbourne souverän mit 3:0. Daryl Frame, Kevin Kelly und Cormac O’Kane treffen bereits in den ersten 32 Minuten. Danach verwaltet der Tabellenführer das Spiel mit 79 Prozent Ballbesitz, 23:7 Schüssen und 3,38 xG kontrolliert bis zum Ende. Daniele Di Maio gibt dabei sein Debüt für die Harps.',
    events:[
      {minute:6,type:'yellow',team:'Finn Harps',player:'Callum Brennan',text:'Gelbe Karte'},
      {minute:9,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'0:1'},
      {minute:15,type:'goal',team:'Finn Harps',player:'Kevin Kelly',text:'0:2'},
      {minute:26,type:'yellow',team:'Shelbourne',player:'Ben Swales',text:'Gelbe Karte'},
      {minute:27,type:'yellow',team:'Shelbourne',player:'Ryan Blakeley',text:'Gelbe Karte'},
      {minute:32,type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'0:3'},
      {minute:44,type:'yellow',team:'Shelbourne',player:'Peter Cleary',text:'Gelbe Karte'},
      {minute:55,type:'yellow',team:'Shelbourne',player:'Callum Walker',text:'Gelbe Karte'},
      {minute:72,type:'yellow',team:'Shelbourne',player:'Fionn Mulcahy',text:'Gelbe Karte'}
    ],
    assists:[
      {player:'Mareks Istrankins',count:1},
      {player:'Giacomo Papini',count:1},
      {player:'Justin Ramsey',count:1}
    ],
    stats:[
      {label:'Schüsse',home:7,away:23,kind:'number'},
      {label:'Schüsse aufs Tor',home:4,away:7,kind:'number'},
      {label:'xG',home:1.28,away:3.38,kind:'decimal'},
      {label:'Großchancen',home:2,away:2,kind:'number'},
      {label:'Ballbesitz',home:21,away:79,kind:'percent'},
      {label:'Ecken',home:8,away:9,kind:'number'},
      {label:'Fouls',home:19,away:8,kind:'number'},
      {label:'Angekommene Pässe',home:152,away:567,kind:'number',homeDetail:'69 % · 152/219',awayDetail:'90 % · 567/633'},
      {label:'Gewonnene Zweikämpfe',home:69,away:80,kind:'percent',homeDetail:'18/26',awayDetail:'8/10'},
      {label:'Gewonnene Kopfbälle',home:21,away:77,kind:'percent',homeDetail:'11/53',awayDetail:'41/53'},
      {label:'Gelbe Karten',home:5,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:6.30,away:7.34,kind:'decimal'},
      {label:'Intensive Sprints',home:67,away:77,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:25,wins:23,draws:2,losses:0,goalsFor:77,goalsAgainst:7,goalDifference:70,points:71},
    standout:{player:'Giacomo Papini',rating:8.7,goals:0,assists:1,note:'1,49 Expected Assists'},
    milestones:[
      {player:'Daniele Di Maio',text:'Finn-Harps-Debüt'},
      {player:'Paulo Henrique',text:'125. Ligaspiel für Finn Harps'},
      {player:"Jim O'Neill",text:'200. Ligaspiel für Finn Harps'},
      {player:'Callum Kavanagh',text:'400. Ligaspiel seiner Karriere'}
    ],
    analysis:{
      summary:'Finn Harps entscheidet das Spiel im ersten Drittel. Drei Tore bis zur 32. Minute nehmen Shelbourne früh jede realistische Chance auf einen Punktgewinn.',
      firstHalf:'Daryl Frame trifft in der 9. Minute, Kevin Kelly erhöht sechs Minuten später und Cormac O’Kane stellt in der 32. Minute auf 0:3. Danach muss Finn Harps das Tempo nicht mehr weiter erhöhen.',
      secondHalf:'Nach der Pause bleibt es beim 0:3. Die Harps halten den Ball, kontrollieren Räume und vermeiden unnötiges Risiko. Shelbourne kommt zwar insgesamt auf vier Schüsse aufs Tor und 1,28 xG, findet aber keinen Weg zurück ins Spiel.',
      control:'79 Prozent Ballbesitz, 567 angekommene Pässe und 23 Abschlüsse zeigen erneut die strukturelle Dominanz. Besonders auffällig ist die Lufthoheit mit 77 Prozent gewonnenen Kopfbällen.',
      debut:'Daniele Di Maio startet direkt für Finn Harps und beendet sein Debüt mit Note 7,2. Der Deadline-Day-Neuzugang fügt sich damit ohne Anlaufzeit in die Rotation ein.',
      leagueContext:'Nach 25 Ligaspielen bleibt Finn Harps ungeschlagen: 23 Siege, zwei Remis, 77:7 Tore und 71 Punkte.'
    },
    sources:['FM-Spielübersicht Shelbourne – Finn Harps · 02.08.2041','Finn-Harps-Spielerstatistiken · 02.08.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-08-02';
    season.latestHeadline='Premier Division: Frame, Kelly und O’Kane erledigen Shelbourne beim 3:0 schon vor der Pause.';
    season.league={...(season.league||{}),position:1,played:25,wins:23,draws:2,losses:0,goalsFor:77,goalsAgainst:7,goalDifference:70,points:71,latestResult:'02.08.2041 · Shelbourne 0:3 Finn Harps'};
    season.changes=season.changes||{notes:[]};
    const note='02.08.2041: 3:0-Auswärtssieg bei Shelbourne. Frame, Kelly und O’Kane treffen bis zur 32. Minute; Di Maio gibt sein Debüt. Nach 25 Ligaspielen: 23 Siege, 2 Remis, 0 Niederlagen, 77:7 Tore und 71 Punkte.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-08-02-daniele-di-maio-debut',date:'2041-08-02',player:'Daniele Di Maio',type:'debut',title:'Debüt für Finn Harps',detail:'Startet beim 3:0-Auswärtssieg bei Shelbourne und erhält die Note 7,2.'},
    {id:'2041-08-02-paulo-henrique-125-league',date:'2041-08-02',player:'Paulo Henrique',type:'milestone',title:'125. Ligaspiel für Finn Harps',detail:'Erreicht beim 3:0 in Tolka Park sein 125. Ligaspiel für den Verein.'},
    {id:'2041-08-02-jim-oneill-200-league',date:'2041-08-02',player:"Jim O'Neill",type:'milestone',title:'200. Ligaspiel für Finn Harps',detail:'Bestreitet gegen Shelbourne sein 200. Ligaspiel für Finn Harps.'},
    {id:'2041-08-02-daryl-frame-shelbourne-goal',date:'2041-08-02',player:'Daryl Frame',type:'goal',title:'Frühe Führung in Tolka Park',detail:'Erzielt in der 9. Minute das 1:0 beim späteren 3:0-Auswärtssieg.'},
    {id:'2041-08-02-kevin-kelly-shelbourne-goal',date:'2041-08-02',player:'Kevin Kelly',type:'goal',title:'Kelly erhöht auf 2:0',detail:'Trifft in der 15. Minute und beendet die Partie mit Note 7,8.'},
    {id:'2041-08-02-cormac-okane-shelbourne-goal',date:'2041-08-02',player:"Cormac O'Kane",type:'goal',title:'O’Kane macht den Deckel früh drauf',detail:'Stellt in der 32. Minute den späteren 3:0-Endstand her.'},
    {id:'2041-08-02-giacomo-papini-shelbourne',date:'2041-08-02',player:'Giacomo Papini',type:'performance',title:'Papini zieht die Fäden',detail:'Beste Harps-Note mit 8,7, eine Vorlage und 1,49 Expected Assists.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-08-02',competition:'Premier Division',fixtureDate:'02.08.2041',
    home:'Shelbourne',away:'Finn Harps',score:'0:3',location:'Tolka Park · Dublin · 4.929 Zuschauer',
    headline:'Eine Halbzeit reicht: Frame, Kelly und O’Kane zerlegen Shelbourne früh',
    subheadline:'Drei Tore in den ersten 32 Minuten, 79 Prozent Ballbesitz und ein problemloses Debüt für Daniele Di Maio. Finn Harps bleibt auch nach 25 Ligaspielen ungeschlagen.',
    label:'PREMIER DIVISION · SHELBOURNE 0:3 FINN HARPS',
    heroStat:{label:'Ballbesitz',value:'79 %',note:'23:7 Schüsse · 3,38:1,28 xG · 567 angekommene Pässe'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Finn Harps braucht in Tolka Park keine lange Anlaufphase. Daryl Frame, Kevin Kelly und Cormac O’Kane treffen innerhalb der ersten 32 Minuten und nehmen Shelbourne damit schon vor der Pause aus dem Spiel. Danach folgt kein Torfestival mehr, sondern kontrollierte Verwaltung auf hohem Niveau.',
    sections:[
      {title:'Drei Treffer, bevor Shelbourne Luft bekommt',text:'Frame eröffnet in der 9. Minute, Kelly trifft in der 15. und O’Kane in der 32. Minute. Innerhalb von 23 Minuten entsteht ein 0:3, das bis zum Abpfiff Bestand hat.'},
      {title:'Papini kontrolliert das Zentrum',text:'Giacomo Papini beendet die Partie mit der besten Harps-Note von 8,7. Seine 1,49 Expected Assists und eine tatsächliche Vorlage unterstreichen, wie stark das Spiel über ihn gelenkt wird.'},
      {title:'Di Maio startet ohne Eingewöhnungsphase',text:'Nur wenige Tage nach seinem 33-Millionen-Euro-Wechsel von Juventus steht Daniele Di Maio direkt in der Startelf. Das Debüt endet mit einem 3:0-Auswärtssieg und einer soliden 7,2.'},
      {title:'Nach der Pause wird verwaltet',text:'Shelbourne kommt insgesamt auf sieben Abschlüsse und 1,28 xG, doch die Harps behalten mit 79 Prozent Ballbesitz und 567 erfolgreichen Pässen die Kontrolle. Der zweite Durchgang wird nicht spektakulär, sondern professionell.'},
      {title:'25 Spiele, weiterhin keine Niederlage',text:'Finn Harps steht nach 25 Ligaspielen bei 23 Siegen und zwei Remis. 77 erzielte Tore treffen auf nur sieben Gegentreffer, der Vorsprung an der Tabellenspitze bleibt gewaltig.'}
    ],
    strengthsTitle:'WAS DEN SIEG AUSMACHT',strengthsHeading:'Frühe Konsequenz und totale Spielkontrolle',
    strengths:['Drei Tore bis zur 32. Minute','79 % Ballbesitz','23 Abschlüsse','3,38 xG','567 angekommene Pässe','77 % gewonnene Kopfbälle','Papini mit Note 8,7'],
    vulnerabilitiesTitle:'WAS TROTZDEM AUFFÄLLT',vulnerabilitiesHeading:'Shelbourne kommt zu ein paar echten Momenten',
    vulnerabilities:['Vier Schüsse von Shelbourne gehen aufs Tor','1,28 xG für das Heimteam','Beide Teams kommen auf zwei Großchancen','Nach dem 0:3 fällt kein weiterer Treffer'],
    verdictHeading:'Früh entschieden, danach erwachsen heruntergespielt',
    verdict:'Das 3:0 ist weniger eine Explosion als ein Beweis der Reife. Finn Harps entscheidet das Spiel früh und muss danach nichts mehr erzwingen. Besonders passend für den aktuellen Kaderumbau: Di Maio fügt sich direkt ein, während die etablierten Kräfte das Spiel in der ersten halben Stunde entscheiden.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 2. August 2041.',
    sources:['FM-Spielübersicht Shelbourne – Finn Harps · 02.08.2041','Finn-Harps-Spielerstatistiken · 02.08.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-08-02-shelbourne-liga',date:'2041-08-02',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · SHELBOURNE 0:3 FINN HARPS',title:'Drei Tore in 32 Minuten: Harps erledigen Shelbourne früh',
    summary:'Frame, Kelly und O’Kane treffen beim 3:0 in Tolka Park. Di Maio gibt sein Debüt, Papini glänzt mit Note 8,7 und Finn Harps bleibt nach 25 Ligaspielen ungeschlagen.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','shelbourne','daryl-frame','kevin-kelly','cormac-okane','daniele-di-maio','giacomo-papini']
  });
})();