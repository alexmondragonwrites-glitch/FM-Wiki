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

  const fixtureId='2041-09-10-finn-harps-manchester-united-champions-league';
  const reportId='2041-09-10-manchester-united-ligaphase-spielbericht';

  const match={
    id:fixtureId,date:'2041-09-10',season:2041,competition:'UEFA Champions League',stage:'Ligaphase · 1. Spieltag',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    away:{id:'man-utd',name:'Manchester United',short:'MUN',score:0},
    score:'1:0',homeGoals:1,awayGoals:0,halfTime:'0:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:10000,awayFans:500,weather:'17 °C',referee:'Nicht bekannt',
    headline:'Revanche geglückt: O’Kane schießt Finn Harps zum 1:0 gegen Manchester United',
    verdict:'Vier Monate nach dem Champions-League-Halbfinal-Aus schlägt Finn Harps Manchester United zum Auftakt der neuen Ligaphase mit 1:0. Cormac O’Kane erzielt in der 78. Minute das einzige Tor. Das knappe Ergebnis täuscht über die Spielkontrolle hinweg: 17:4 Schüsse, 12:2 aufs Tor und 2,26:0,48 xG sprechen klar für die Harps.',
    scorers:[{player:'Cormac O’Kane',team:'Finn Harps',goals:1,minutes:[78]}],
    events:[{minute:78,type:'goal',team:'Finn Harps',player:'Cormac O’Kane',text:'1:0'}],
    stats:[
      {label:'Schüsse',home:17,away:4,kind:'number'},
      {label:'Schüsse aufs Tor',home:12,away:2,kind:'number'},
      {label:'xG',home:2.26,away:0.48,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:3,away:1,kind:'number'},
      {label:'Großchancen',home:2,away:1,kind:'number'},
      {label:'Ballbesitz',home:52,away:48,kind:'percent'},
      {label:'Ecken',home:8,away:5,kind:'number'},
      {label:'Fouls',home:10,away:12,kind:'number'},
      {label:'Angekommene Pässe',home:470,away:433,kind:'number',homeDetail:'85 % · 470/551',awayDetail:'86 % · 433/503'},
      {label:'Gewonnene Zweikämpfe',home:77,away:67,kind:'percent',homeDetail:'30/39',awayDetail:'22/33'},
      {label:'Gewonnene Kopfbälle',home:63,away:32,kind:'percent',homeDetail:'30/48',awayDetail:'16/50'},
      {label:'Gelbe Karten',home:0,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'}
    ],
    championsLeagueAfterMatch:{played:1,wins:1,draws:0,losses:0,goalsFor:1,goalsAgainst:0,goalDifference:1,points:3,position:4},
    standout:{player:'Cormac O’Kane',team:'Finn Harps',rating:8.8,goals:1,note:'Entscheidet die Partie in der 78. Minute und gewinnt laut Matchanalyse jeden seiner Zweikämpfe.'},
    opponentStandout:{player:'Santiago Ángel',team:'Manchester United',rating:7.8,note:'Verhindert mit elf Paraden ein deutlich höheres Ergebnis.'},
    playerRatings:{'Paulo Henrique':7.3,'Diego Fernández':7.1,'Torric Bruce':7.3,'Darcy Andrews':7.2,'Kevin Kelly':7.2,'Jim O’Neill':6.6,'Daryl Frame':6.8,'Cormac O’Kane':8.8,'Giacomo Papini':6.9,'Dom Docherty':6.7,'Emerson Escárcega':6.7,'Billy Walker':7.0,'Callum Brennan':6.8,'Romano Maisto':6.7,'Amir Mašić':6.7,'Justin Ramsey':6.7},
    milestones:[
      {player:'Jim O’Neill',text:'350. Einsatz für Finn Harps'},
      {player:'Jan Gewelke',text:'275. Spiel als Profi'},
      {player:'Aymar Kitenge',text:'225. Spiel als Profi'},
      {player:'Ricardo López',text:'325. Spiel als Profi'},
      {player:'Sosuke Usami',text:'125. Einsatz für Manchester United'}
    ],
    analysis:{
      summary:'Das 1:0 ist auf der Anzeigetafel knapp, das Spielbild ist es nicht. Finn Harps hält United bei vier Abschlüssen und 0,48 xG, bringt selbst zwölf von 17 Schüssen aufs Tor und erzwingt elf Paraden von Santiago Ángel.',
      firstHalf:'Zur Pause steht es 0:0, obwohl Finn Harps bereits die bessere Abschlusspräsenz besitzt. United verteidigt tief und Ángel hält die Gäste im Spiel.',
      breakthrough:'In der 78. Minute belohnt Cormac O’Kane die anhaltende Kontrolle mit dem 1:0. Es ist ein besonders passender Torschütze: O’Kane hatte im Mai auch im Halbfinal-Rückspiel in Old Trafford für Finn Harps getroffen.',
      defensiveControl:'United kommt auf nur vier Schüsse, zwei davon aufs Tor. Die Harps gewinnen 77 Prozent ihrer ausgewiesenen Zweikämpfe und 63 Prozent der Kopfbälle und verhindern damit genau die zweite-Ball- und Physisdominanz, die im Scoutbericht als United-Stärke markiert war.',
      mexicanDuel:'Das angekündigte mexikanische Stürmerduell entscheidet nicht die Neun. Emerson Escárcega wird mit 6,7 bewertet, Ricardo López laut Matchanalyse als United-Spieler mit dem geringsten Einfluss auf das Offensivspiel. Die Partie wird stattdessen von O’Kane entschieden.',
      revengeContext:'Im Mai verlor Finn Harps beide Halbfinalspiele gegen United mit 1:2. Vier Monate später dreht sich das Bild: Die Harps gewinnen nicht nur, sondern lassen United über 90 Minuten deutlich weniger Abschlusspräsenz als in beiden Halbfinalpartien.'
    },
    sources:['FM-Spielübersicht Finn Harps – Manchester United · 10.09.2041','Finn-Harps-Spielerstatistiken · 10.09.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-09-10';
    season.latestHeadline='Champions League: Finn Harps schlagen Manchester United zum Ligaphasen-Auftakt mit 1:0.';
    season.championsLeague='Ligaphase · 1 Spiel · 3 Punkte · 1:0 Tore';
    season.championsLeagueLeaguePhase={...(season.championsLeagueLeaguePhase||{}),played:1,wins:1,draws:0,losses:0,goalsFor:1,goalsAgainst:0,goalDifference:1,points:3,position:4,latestResult:'10.09.2041 · Finn Harps 1:0 Manchester United'};
    season.changes=season.changes||{notes:[]};
    const note='10.09.2041: 1:0 gegen Manchester United zum Auftakt der Champions-League-Ligaphase. Cormac O’Kane trifft in der 78. Minute. Finn Harps dominiert 17:4 Schüsse, 12:2 aufs Tor und 2,26:0,48 xG und nimmt Revanche für das Halbfinal-Aus im Mai.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const club=(window.FM_CLUBS||[]).find(x=>x.id==='man-utd');
  if(club){
    club.summary='Manchester United verlor am 10. September 2041 zum Auftakt der Champions-League-Ligaphase mit 0:1 im Donegal Stadium. Finn Harps dominierte 17:4 Schüsse und 2,26:0,48 xG; Cormac O’Kane erzielte das Siegtor in der 78. Minute.';
    club.meetings=[...(club.meetings||[]).filter(x=>x.date!=='10.09.2041'),{date:'10.09.2041',venue:'H',result:'1:0 · Champions-League-Ligaphase'}];
    club.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'O’Kane vollendet die Revanche gegen United'};
  }

  [
    {id:'2041-09-10-cormac-okane-manchester-united-winner',date:'2041-09-10',player:'Cormac O’Kane',type:'standout',title:'Siegtreffer gegen Manchester United',detail:'Erzielt in der 78. Minute das 1:0 zum Champions-League-Auftakt und wird mit 8,8 zum besten Spieler der Partie.'},
    {id:'2041-09-10-jim-oneill-350-harps',date:'2041-09-10',player:'Jim O’Neill',type:'milestone',title:'350 Einsätze für Finn Harps',detail:'Erreicht beim 1:0 gegen Manchester United die Marke von 350 Einsätzen für den Klub.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const player=(window.FM_PLAYERS||[]).find(p=>p.id==='cormac-okane'||p.name==='Cormac O’Kane');
  if(player){
    player.careerNarrative=player.careerNarrative||[];
    const narrative='10.09.2041: Cormac O’Kane erzielt beim 1:0 gegen Manchester United in der 78. Minute das Siegtor zum Auftakt der Champions-League-Ligaphase. Nach seinem Treffer im Halbfinal-Rückspiel im Mai trifft er damit erneut gegen United.';
    if(!player.careerNarrative.includes(narrative))player.careerNarrative.push(narrative);
  }

  const report={
    id:reportId,type:'Spielbericht',date:'2041-09-10',competition:'UEFA Champions League',fixtureDate:'Mittwoch, 10.09.2041',home:'Finn Harps',away:'Manchester United',score:'1:0',location:'Donegal Stadium · Ligaphase, 1. Spieltag · 10.000 Zuschauer',
    headline:'O’Kane vollendet die Revanche: Finn Harps schlagen Manchester United',
    subheadline:'Vier Monate nach dem Halbfinal-Aus kontrolliert Finn Harps den alten Bezwinger mit 17:4 Schüssen und 2,26:0,48 xG. Cormac O’Kane entscheidet das Spiel in der 78. Minute.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · FINN HARPS 1:0 MANCHESTER UNITED',
    heroStat:{label:'Abschlussverhältnis',value:'17:4',note:'12:2 aufs Tor · 2,26:0,48 xG · elf Paraden von Santiago Ángel'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Im Mai hatte Manchester United die Champions-League-Titelverteidigung der Harps mit zwei knappen 2:1-Siegen beendet. Beim Wiedersehen vier Monate später fällt das Ergebnis erneut knapp aus, diesmal aber bei einem völlig anderen Spielbild. Finn Harps drückt United über weite Strecken zurück und braucht lediglich bis zur 78. Minute, um die Dominanz auch auf der Anzeigetafel sichtbar zu machen.',
    sections:[
      {title:'Ángel hält United lange im Spiel',text:'Finn Harps bringt zwölf von 17 Abschlüssen auf das Tor. Uniteds Santiago Ángel pariert elf davon und verhindert damit, dass aus dem engen Ergebnis ein deutliches Resultat wird.'},
      {title:'O’Kane trifft wieder gegen United',text:'Cormac O’Kane erzielt in der 78. Minute das 1:0. Schon im Halbfinal-Rückspiel im Mai hatte er in Old Trafford für die Harps getroffen. Diesmal bleibt sein Treffer der Siegtreffer.'},
      {title:'Uniteds Offensive wird nahezu ausgeschaltet',text:'Manchester United kommt über 90 Minuten nur auf vier Schüsse, zwei aufs Tor und 0,48 xG. Ricardo López wird in der Matchanalyse als United-Spieler mit dem geringsten Einfluss auf das Offensivspiel genannt.'},
      {title:'Die Harps gewinnen sogar Uniteds vermeintliche Komfortzonen',text:'Der Scoutbericht hatte United bei Physis, Tackling, Kopfballspiel und zweiten Bällen stark eingeschätzt. Im Spiel gewinnt Finn Harps 77 Prozent der ausgewiesenen Zweikämpfe und 63 Prozent der Kopfbälle. United liegt bei 67 beziehungsweise 32 Prozent.'},
      {title:'Das mexikanische Duell bleibt torlos',text:'Emerson Escárcega und Ricardo López hatten vor dem Spiel als mexikanische Topstürmer die Schlagzeilen geliefert. Escárcega kommt auf eine 6,7, López bleibt ohne entscheidenden Einfluss. Der Abend gehört stattdessen O’Kane und der kollektiven Harps-Kontrolle.'},
      {title:'Ein anderer Abstand als im Halbfinale',text:'Im Mai waren beide Spiele eng und United in den entscheidenden Momenten effizienter. Diesmal ist Finn Harps klarer in den Abschlusszahlen, zwingt United zu einem tiefen Spiel und eröffnet die neue Ligaphase mit drei Punkten.'}
    ],
    strengthsTitle:'WAS DEN SIEG SO STARK MACHT',strengthsHeading:'Nicht nur Revanche, sondern klare Spielkontrolle',
    strengths:['17:4 Schüsse','12:2 Schüsse aufs Tor','2,26:0,48 xG','52 % Ballbesitz gegen United','77 % gewonnene Zweikämpfe','63 % gewonnene Kopfbälle','Nur vier United-Abschlüsse zugelassen','Cormac O’Kane mit Note 8,8'],
    vulnerabilitiesTitle:'WAS TROTZDEM OFFEN BLEIBT',vulnerabilitiesHeading:'Die Dominanz wird erst spät belohnt',
    vulnerabilities:['Nur ein Tor aus 2,26 xG','Santiago Ángel hält elf Abschlüsse','Bis zur 78. Minute bleibt das Spiel trotz Überlegenheit torlos','Escárcega und Ramsey bleiben ohne direkte Torbeteiligung'],
    verdictHeading:'Im Mai war United einen Tick reifer, im September sind die Harps die bessere Mannschaft',
    verdict:'Das 1:0 ist mehr als drei Punkte. Finn Harps schlägt genau den Gegner, der vier Monate zuvor die Titelverteidigung beendet hatte, und tut es mit einem überzeugenderen Spielbild als das Ergebnis vermuten lässt. United bleibt durch Ángel lange am Leben, findet offensiv aber kaum statt. Für die neue Champions-League-Saison ist das ein sehr ernstes Signal.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Champions-League-Spiel am 10. September 2041.',
    sources:['FM-Spielübersicht Finn Harps – Manchester United · 10.09.2041','Finn-Harps-Spielerstatistiken · 10.09.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{id:'2041-09-10-manchester-united-result',date:'2041-09-10',season:2041,category:'Champions League',accent:'gold',featured:true,eyebrow:'CHAMPIONS LEAGUE · LIGAPHASE · FINN HARPS 1:0 MANCHESTER UNITED',title:'Revanche geglückt: O’Kane schießt United aus Donegal',summary:'Cormac O’Kane trifft in der 78. Minute. Finn Harps kontrolliert Manchester United mit 17:4 Schüssen, 12:2 aufs Tor und 2,26:0,48 xG und eröffnet die Ligaphase mit drei Punkten.',href:`presse.html?id=${reportId}`,entities:['finn-harps','man-utd','cormac-okane','emerson-escarcega','ricardo-lopez','champions-league-2041','season-2041']});
})();