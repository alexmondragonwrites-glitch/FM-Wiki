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

  const fixtureId='2041-09-06-shamrock-rovers-finn-harps-premier-division';
  const reportId='2041-09-06-shamrock-rovers-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-09-06',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'shamrock-rovers',name:'Shamrock Rovers',short:'SHR',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    score:'1:4',homeGoals:1,awayGoals:4,halfTime:'0:2',
    venue:'Tallaght Stadium',location:'Dublin, Irland',attendance:9567,awayFans:500,weather:'15 °C',referee:'James Carey',
    headline:'Generalprobe geglückt: Frame-Doppelpack und Ramsey-Tor beim 4:1 in Tallaght',
    verdict:'Vier Tage vor dem Champions-League-Auftakt gegen Manchester United gewinnt Finn Harps souverän mit 4:1 bei Shamrock Rovers. Dom Docherty eröffnet, Daryl Frame trifft doppelt und Justin Ramsey beendet seine kurze Torflaute. 77 Prozent Ballbesitz, 19:4 Schüsse und 3,25:0,73 xG unterstreichen die Kontrolle.',
    scorers:[
      {player:'Dom Docherty',team:'Finn Harps',goals:1,minutes:[33]},
      {player:'Daryl Frame',team:'Finn Harps',goals:2,minutes:[40,80]},
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[55]},
      {player:'Wildin Glinton',team:'Shamrock Rovers',goals:1,minutes:[81]}
    ],
    events:[
      {minute:23,type:'yellow',team:'Shamrock Rovers',player:'Graham Lafferty',text:'Gelbe Karte'},
      {minute:27,type:'yellow',team:'Shamrock Rovers',player:'Kyle Campbell',text:'Gelbe Karte'},
      {minute:33,type:'goal',team:'Finn Harps',player:'Dom Docherty',text:'0:1'},
      {minute:40,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'0:2'},
      {minute:48,type:'yellow',team:'Shamrock Rovers',player:'Evan O’Connor',text:'Gelbe Karte'},
      {minute:55,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'0:3'},
      {minute:64,type:'yellow',team:'Finn Harps',player:'Amir Mašić',text:'Gelbe Karte'},
      {minute:67,type:'yellow',team:'Finn Harps',player:'Mareks Istrankins',text:'Gelbe Karte'},
      {minute:71,type:'yellow',team:'Shamrock Rovers',player:'Kendry Páez',text:'Gelbe Karte'},
      {minute:80,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'0:4'},
      {minute:81,type:'goal',team:'Shamrock Rovers',player:'Wildin Glinton',text:'1:4'}
    ],
    stats:[
      {label:'Schüsse',home:4,away:19,kind:'number'},
      {label:'Schüsse aufs Tor',home:1,away:8,kind:'number'},
      {label:'xG',home:0.73,away:3.25,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:3,away:6,kind:'number'},
      {label:'Großchancen',home:0,away:3,kind:'number'},
      {label:'Ballbesitz',home:23,away:77,kind:'percent'},
      {label:'Ecken',home:1,away:9,kind:'number'},
      {label:'Fouls',home:11,away:10,kind:'number'},
      {label:'Angekommene Pässe',home:210,away:710,kind:'number',homeDetail:'73 % · 210/289',awayDetail:'90 % · 710/788'},
      {label:'Gewonnene Zweikämpfe',home:78,away:82,kind:'percent',homeDetail:'29/37',awayDetail:'18/22'},
      {label:'Gewonnene Kopfbälle',home:27,away:69,kind:'percent',homeDetail:'17/62',awayDetail:'41/59'},
      {label:'Gelbe Karten',home:4,away:2,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:30,wins:28,draws:2,losses:0,goalsFor:91,goalsAgainst:11,goalDifference:80,points:86},
    standout:{player:'Dom Docherty',team:'Finn Harps',rating:9.0,goals:1,note:'Eröffnet das 4:1 und liefert mit 1,07 Expected Assists die auffälligste Kreativleistung des Spiels.'},
    keyPerformers:[
      {player:'Daryl Frame',rating:8.3,goals:2,note:'Doppelpack in seinem 50. Ligaspiel für Finn Harps.'},
      {player:'Justin Ramsey',rating:7.4,goals:1,note:'Trifft zum 3:0 und beendet damit unmittelbar vor Manchester United seine kurze torlose Phase.'}
    ],
    milestones:[
      {player:'Daryl Frame',text:'50. Ligaspiel seiner Karriere'},
      {player:'Daryl Frame',text:'50. Ligaspiel für Finn Harps'},
      {player:'Jake Roberts',text:'25. Ligaspiel für Finn Harps'},
      {player:'Callum Daly',text:'350. Ligaspiel seiner Karriere'},
      {player:'Callum Daly',text:'350. Ligaspiel für Shamrock Rovers'},
      {player:'Evan O’Connor',text:'400. Ligaspiel seiner Karriere'},
      {player:'Tom Hayes',text:'100. Einsatz für Shamrock Rovers'}
    ],
    analysis:{
      summary:'Die letzte Liga-Generalprobe vor Manchester United gelingt eindrucksvoll. Finn Harps kontrolliert Tallaght mit 77 Prozent Ballbesitz und 710 erfolgreichen Pässen und verteilt die vier Tore auf Docherty, Ramsey und den doppelt erfolgreichen Frame.',
      firstHalf:'Dom Docherty bricht in der 33. Minute den Widerstand, Daryl Frame erhöht sieben Minuten später auf 2:0. Shamrock bleibt vor der Pause ohne echten Zugriff auf die Partie.',
      ramsey:'Justin Ramsey bekommt die Chance im Sturm und nutzt sie. Sein Treffer zum 3:0 in der 55. Minute ist besonders mit Blick auf seine zuletzt torlose Phase und das anstehende Duell mit Manchester United wichtig.',
      frame:'Daryl Frame macht aus seinem Jubiläum einen besonderen Abend. In seinem 50. Ligaspiel für Finn Harps trifft er in der 40. und 80. Minute und kommt auf die starke Note 8,3.',
      docherty:'Dom Docherty ist mit Note 9,0 der beste Spieler auf dem Platz. Neben seinem Führungstor fällt vor allem seine Kreativität auf; 1,07 Expected Assists spiegeln seinen Einfluss wider.',
      control:'19:4 Schüsse, 8:1 aufs Tor, 3:0 Großchancen und 3,25:0,73 xG ergeben ein klares Bild. Shamrocks Treffer in der 81. Minute ist der einzige Makel eines ansonsten sehr souveränen Auswärtsspiels.',
      leagueContext:'Nach 30 Ligaspielen steht der bereits feststehende Meister bei 28 Siegen, zwei Remis und keiner Niederlage. Die Bilanz lautet 91:11 Tore und 86 Punkte.',
      europeContext:'Vier Tage später wartet Manchester United im Donegal Stadium. Nach dem Halbfinal-Aus gegen United in der Vorsaison ist das erste Champions-League-Spiel 2041/42 zugleich ein früher europäischer Standorttest.'
    },
    sources:['FM-Spielübersicht Shamrock Rovers – Finn Harps · 06.09.2041','Finn-Harps-Spielerstatistiken · 06.09.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-09-06';
    season.latestHeadline='Premier Division: Finn Harps gewinnen die Generalprobe vor Manchester United mit 4:1 bei Shamrock Rovers.';
    season.league={
      ...(season.league||{}),position:1,played:30,wins:28,draws:2,losses:0,goalsFor:91,goalsAgainst:11,goalDifference:80,points:86,
      latestResult:'06.09.2041 · Shamrock Rovers 1:4 Finn Harps',champion:true,titleClinchedDate:'2041-08-30'
    };
    season.changes=season.changes||{notes:[]};
    const note='06.09.2041: 4:1 bei Shamrock Rovers. Dom Docherty trifft zur Führung, Daryl Frame erzielt in seinem 50. Ligaspiel für Finn Harps einen Doppelpack und Justin Ramsey trifft zum 3:0. Liga: 30 Spiele, 28 Siege, 2 Remis, 0 Niederlagen, 91:11 Tore, 86 Punkte. Nächstes Pflichtspiel: Champions League gegen Manchester United am 10.09.2041.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-09-06-dom-docherty-shamrock',date:'2041-09-06',player:'Dom Docherty',type:'standout',title:'Matchwinner in Tallaght',detail:'Eröffnet beim 4:1 gegen Shamrock Rovers die Partie und ist mit Note 9,0 sowie 1,07 Expected Assists der auffälligste Spieler.'},
    {id:'2041-09-06-daryl-frame-50-league-double',date:'2041-09-06',player:'Daryl Frame',type:'milestone',title:'Doppelpack zum 50. Ligaspiel',detail:'Bestreitet sein 50. Ligaspiel der Karriere und für Finn Harps und feiert das Jubiläum mit zwei Treffern.'},
    {id:'2041-09-06-justin-ramsey-goal',date:'2041-09-06',player:'Justin Ramsey',type:'goal',title:'Tor vor Manchester United',detail:'Erzielt beim 4:1 in Tallaght das 3:0 und beendet damit seine kurze torlose Phase unmittelbar vor dem Champions-League-Auftakt.'},
    {id:'2041-09-06-jake-roberts-25-harps-league',date:'2041-09-06',player:'Jake Roberts',type:'milestone',title:'25 Ligaspiele für Finn Harps',detail:'Erreicht beim 4:1 gegen Shamrock Rovers die Marke von 25 Ligaspielen für den Klub.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-09-06',competition:'Premier Division',fixtureDate:'06.09.2041',
    home:'Shamrock Rovers',away:'Finn Harps',score:'1:4',location:'Tallaght Stadium · Dublin · 9.567 Zuschauer',
    headline:'Generalprobe mit vier Toren: Finn Harps ist bereit für United',
    subheadline:'Dom Docherty eröffnet, Daryl Frame trifft doppelt und Justin Ramsey beendet seine Torflaute. Finn Harps dominiert Shamrock Rovers mit 77 Prozent Ballbesitz und 3,25 xG.',
    label:'PREMIER DIVISION · SHAMROCK ROVERS 1:4 FINN HARPS',
    heroStat:{label:'Vor Manchester United',value:'4:1',note:'77 % Ballbesitz · 19:4 Schüsse · 3,25:0,73 xG · Ramsey trifft wieder'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Vier Tage vor dem Wiedersehen mit Manchester United wirkt Finn Harps nicht wie eine Mannschaft, die bereits an Europa denkt. Im Tallaght Stadium wird Shamrock Rovers mit langen Ballbesitzphasen, hoher Passsicherheit und vier Toren kontrolliert. Besonders passend für die Dramaturgie: Justin Ramsey findet unmittelbar vor dem europäischen Härtetest zurück ins Tor.',
    sections:[
      {title:'Docherty öffnet die Tür',text:'Nach einer halben Stunde voller Harps-Kontrolle erzielt Dom Docherty in der 33. Minute das 1:0. Mit Note 9,0 und 1,07 Expected Assists ist er anschließend der prägende Kreativspieler des Abends.'},
      {title:'Frame macht sein Jubiläum doppelt besonders',text:'Daryl Frame erhöht in der 40. Minute und trifft in der 80. Minute erneut. Ausgerechnet in seinem 50. Ligaspiel für Finn Harps gelingt ihm damit der Doppelpack.'},
      {title:'Ramsey trifft wieder',text:'Nach einigen torlosen Spielen erzielt Justin Ramsey in der 55. Minute das 3:0. Vier Tage vor Manchester United kommt der Treffer für den Stürmer zum idealen Zeitpunkt.'},
      {title:'Das Spiel bleibt einseitig',text:'Finn Harps kommt auf 77 Prozent Ballbesitz, 710 erfolgreiche Pässe, 19:4 Schüsse, 8:1 Schüsse aufs Tor und 3,25:0,73 xG. Shamrocks Treffer durch Wildin Glinton in der 81. Minute ändert am Spielbild nichts.'},
      {title:'30 Ligaspiele ohne Niederlage',text:'Die Harps erhöhen ihre Bilanz auf 28 Siege und zwei Remis. Nach 30 Spielen stehen 86 Punkte und 91:11 Tore. Der Titel ist längst gesichert, die perfekte Saison ohne Niederlage bleibt möglich.'},
      {title:'Jetzt kommt der eigentliche Test',text:'Am 10. September wartet Manchester United. Nach dem knappen Halbfinal-Aus der Vorsaison ist dieses Duell der erste echte europäische Gradmesser der neuen Champions-League-Saison.'}
    ],
    strengthsTitle:'WAS DIE GENERALPROBE AUSSAGT',strengthsHeading:'Rhythmus, Kontrolle und mehrere offensive Antworten',
    strengths:['4 Auswärtstore','77 % Ballbesitz','19:4 Schüsse','8:1 Schüsse aufs Tor','3,25:0,73 xG','710 angekommene Pässe','Frame-Doppelpack','Ramsey trifft wieder'],
    vulnerabilitiesTitle:'DER KLEINE MAKEL',vulnerabilitiesHeading:'Wieder ein Gegentor aus sehr wenig gegnerischem Volumen',
    vulnerabilities:['Shamrock erzielt aus nur einem Schuss aufs Tor ein Tor','Nach dem 4:0 geht die weiße Weste sofort verloren','Vor Manchester United bleibt die Restverteidigung bei seltenen gegnerischen Angriffen ein Beobachtungspunkt'],
    verdictHeading:'Besser kann man sich kaum für Manchester United warmschießen',
    verdict:'Die Aussage des Spiels liegt weniger im vierten Tor als in der Breite der Leistung. Docherty kreiert, Frame trifft doppelt, Ramsey findet zurück auf die Anzeigetafel und die Harps kontrollieren über 90 Minuten Ball und Räume. Gegen United wird das Tempo höher und jeder Fehler teurer, aber die Formkurve zeigt klar nach oben.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 6. September 2041.',
    sources:['FM-Spielübersicht Shamrock Rovers – Finn Harps · 06.09.2041','Finn-Harps-Spielerstatistiken · 06.09.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-06-shamrock-rovers-liga',date:'2041-09-06',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · SHAMROCK ROVERS 1:4 FINN HARPS',
    title:'Generalprobe geglückt: Frame-Doppelpack, Ramsey trifft vor United',
    summary:'Finn Harps gewinnt vier Tage vor dem Champions-League-Auftakt gegen Manchester United mit 4:1 in Tallaght. Daryl Frame trifft doppelt, Dom Docherty glänzt mit Note 9,0 und Justin Ramsey beendet seine kurze Torflaute.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','shamrock-rovers','daryl-frame','dom-docherty','justin-ramsey','jake-roberts','manchester-united']
  });
})();