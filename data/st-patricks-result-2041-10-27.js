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

  const match={
    id:'2041-10-27-st-patricks-finn-harps-premier-division',date:'2041-10-27',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'st-patricks-athletic',name:"St Patrick's Athletic",short:'STP',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    score:'0:1',homeGoals:0,awayGoals:1,halfTime:'0:0',
    venue:'Richmond Park',location:'Dublin, Irland',attendance:5400,awayFans:270,weather:'Trocken · 13 °C',referee:'Robert Hennessy',
    headline:"Roberts entscheidet in Dublin: Finn Harps gewinnt 1:0 bei St Patrick's",
    verdict:'Vier Tage nach dem 4:1 in Salzburg gewinnt Finn Harps auch das schwere Ligaauswärtsspiel bei St Patrick\'s. Das Ergebnis bleibt knapp, das Spielbild ist es nicht: 17:1 Schüsse, 2,58:0,17 xG und 76 Prozent Ballbesitz sprechen klar für den Meister.',
    scorers:[
      {player:'Jake Roberts',team:'Finn Harps',goals:1,minutes:[47]}
    ],
    events:[
      {minute:19,type:'yellow',team:'Finn Harps',player:'Callum Brennan',text:'Gelbe Karte'},
      {minute:43,type:'yellow',team:"St Patrick's Athletic",player:'Daniel Dyson',text:'Gelbe Karte'},
      {minute:47,type:'goal',team:'Finn Harps',player:'Jake Roberts',text:'0:1'},
      {minute:60,type:'yellow',team:"St Patrick's Athletic",player:'Avram Samoledas',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:1,away:17,kind:'number'},
      {label:'Schüsse aufs Tor',home:0,away:5,kind:'number'},
      {label:'xG',home:0.17,away:2.58,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:1,away:8,kind:'number'},
      {label:'Großchancen',home:0,away:3,kind:'number'},
      {label:'Ballbesitz',home:24,away:76,kind:'percent'},
      {label:'Ecken',home:1,away:11,kind:'number'},
      {label:'Fouls',home:14,away:9,kind:'number'},
      {label:'Angekommene Pässe',home:217,away:697,kind:'number',homeDetail:'76 % · 217/285',awayDetail:'92 % · 697/758'},
      {label:'Gelbe Karten',home:2,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Intensität',home:6.43,away:7.06,kind:'decimal'},
      {label:'Intensive Sprints',home:42,away:57,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:33,wins:31,draws:2,losses:0,goalsFor:103,goalsAgainst:13,goalDifference:90,points:95},
    standout:{player:'Jake Roberts',team:'Finn Harps',rating:7.8,goals:1,note:'Erzielt in der 47. Minute das einzige Tor des Spiels.'},
    keyPerformers:[
      {player:'Paulo Henrique',rating:7.8,note:'Bleibt ohne Gegentor; St Patrick\'s bringt keinen Schuss aufs Tor.'},
      {player:'Basile Rouviere',rating:7.8,note:'Starker Auftritt bei seinem 175. Einsatz für Finn Harps.'},
      {player:'Billy Walker',rating:7.8,note:'Weiter zentraler Kreativfaktor in einem Spiel mit 76 Prozent Ballbesitz.'},
      {player:'Giacomo Papini',rating:6.9,note:'Kommt in der 63. Minute zurück und sammelt nach seiner Knöchelverletzung wieder Spielminuten.'}
    ],
    milestones:[
      {player:'Basile Rouviere',text:'175. Einsatz für Finn Harps.'},
      {player:'Giacomo Papini',text:'Comeback nach der am 26.09.2041 im Irland-Spiel erlittenen Knöchelverletzung; Einwechslung in der 63. Minute.'},
      {player:'Callum Lally',team:"St Patrick's Athletic",text:'Debüt.'},
      {player:'Callum Coffey',team:"St Patrick's Athletic",text:'Erstes Ligaspiel für St Patrick\'s Athletic.'}
    ],
    analysis:{
      control:'Finn Harps kontrolliert das Spiel fast vollständig: 76 Prozent Ballbesitz, 697 angekommene Pässe und 17:1 Schüsse.',
      efficiency:'Die einzige Kritik ist die Chancenverwertung. Aus 2,58 xG und drei Großchancen entsteht nur ein Treffer.',
      winner:'Jake Roberts entscheidet die Partie direkt nach der Pause in der 47. Minute.',
      defense:'St Patrick\'s kommt auf nur 0,17 xG und keinen Schuss aufs Tor. Paulo Henrique erlebt einen sehr ruhigen Nachmittag.',
      papiniReturn:'Giacomo Papini wird in der 63. Minute eingewechselt. Nach seiner Ende September erlittenen Knöchelverletzung ist das sein sichtbares Comeback in den Spielbetrieb.',
      leagueContext:'Nach 33 Ligaspielen steht Finn Harps bei 31 Siegen, zwei Remis, 95 Punkten und 103:13 Toren. Die Mannschaft bleibt weiterhin ungeschlagen.',
      europeContext:'Das 1:0 folgt nur vier Tage nach dem 4:1-Auswärtssieg bei Red Bull Salzburg in der Champions League. Trotz der engen Taktung bleibt die defensive Kontrolle stabil.'
    },
    sources:['FM-Spielübersicht St Patrick\'s Athletic – Finn Harps · 27.10.2041','Finn-Harps-Spielerstatistiken · 27.10.2041']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-10-27';
    season.latestHeadline="Premier Division: Jake Roberts schießt Finn Harps zum 1:0 bei St Patrick's Athletic.";
    season.league={
      ...(season.league||{}),position:1,played:33,wins:31,draws:2,losses:0,goalsFor:103,goalsAgainst:13,goalDifference:90,points:95,
      latestResult:"27.10.2041 · St Patrick's Athletic 0:1 Finn Harps",champion:true,titleClinchedDate:'2041-08-30'
    };
    season.changes=season.changes||{notes:[]};
    const note="27.10.2041: 1:0 bei St Patrick's Athletic durch Jake Roberts. Finn Harps bleibt nach 33 Ligaspielen ungeschlagen: 31 Siege, 2 Remis, 103:13 Tore, 95 Punkte. Giacomo Papini kehrt in Minute 63 nach seiner Knöchelverletzung zurück.";
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-10-27-jake-roberts-st-patricks-winner',date:'2041-10-27',player:'Jake Roberts',type:'standout',title:'Siegtreffer in Dublin',detail:"Erzielt in der 47. Minute das 1:0 bei St Patrick's Athletic und erhält die Note 7,8."},
    {id:'2041-10-27-giacomo-papini-comeback',date:'2041-10-27',player:'Giacomo Papini',type:'comeback',title:'Papini wieder auf dem Platz',detail:'Wird in der 63. Minute eingewechselt und feiert nach seiner Ende September erlittenen Knöchelverletzung das Comeback.'},
    {id:'2041-10-27-basile-rouviere-175-harps',date:'2041-10-27',player:'Basile Rouviere',type:'milestone',title:'175 Einsätze für Finn Harps',detail:"Erreicht beim 1:0 bei St Patrick's Athletic seinen 175. Einsatz für den Klub."}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-10-27-st-patricks-finn-harps-spielbericht',type:'Spielbericht',date:'2041-10-27',competition:'Premier Division',fixtureDate:'27.10.2041',
    home:"St Patrick's Athletic",away:'Finn Harps',score:'0:1',location:'Richmond Park · Dublin · 5.400 Zuschauer',
    headline:'Roberts reicht: Harps kontrolliert St Patrick’s und gewinnt 1:0',
    subheadline:'17:1 Schüsse und 76 Prozent Ballbesitz, aber nur ein Tor. Jake Roberts entscheidet kurz nach der Pause, Giacomo Papini feiert sein Comeback.',
    label:"PREMIER DIVISION · ST PATRICK'S 0:1 FINN HARPS",
    heroStat:{label:'Spielkontrolle',value:'17:1 Schüsse',note:'2,58:0,17 xG · 76 % Ballbesitz · 697 angekommene Pässe'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:"Vier Tage nach dem 4:1 in Salzburg muss Finn Harps im Richmond Park wieder in den Ligaalltag. Das Ergebnis bleibt mit 1:0 minimalistisch, doch das Spiel selbst ist fast vollständig unter Kontrolle der Harps.",
    sections:[
      {title:'Roberts trifft direkt nach der Pause',text:'Nach einem torlosen ersten Durchgang erzielt Jake Roberts in der 47. Minute den einzigen Treffer des Spiels. Seine Note 7,8 unterstreicht den entscheidenden Auftritt.'},
      {title:'Das Ergebnis täuscht über die Dominanz',text:'Finn Harps kommt auf 17 Schüsse, St Patrick\'s auf einen. Beim xG steht es 2,58:0,17, beim Ballbesitz 76:24 und bei den Ecken 11:1.'},
      {title:'Einziger Makel: Chancenverwertung',text:'Drei Großchancen und 2,58 xG ergeben nur ein Tor. Anders als beim 8:0 gegen Shelbourne wird die Überlegenheit diesmal nicht in ein deutliches Ergebnis übersetzt.'},
      {title:'Papini ist wieder da',text:'Giacomo Papini kommt in der 63. Minute ins Spiel. Nach seiner Knöchelverletzung aus dem Irland-Debüt Ende September sammelt er erstmals wieder Pflichtspielminuten.'},
      {title:'Rouviere erreicht 175 Harps-Einsätze',text:'Basile Rouviere absolviert sein 175. Spiel für Finn Harps und gehört mit Note 7,8 zu den besten Spielern der Partie.'},
      {title:'Ungeschlagen bleibt ungeschlagen',text:'Nach 33 Ligaspielen steht Finn Harps bei 31 Siegen, zwei Remis und keiner Niederlage. Die Bilanz lautet 103:13 Tore und 95 Punkte.'}
    ],
    verdictHeading:'Müde Beine, volle Kontrolle',
    verdict:'Nach der Champions-League-Reise nach Salzburg ist das kein glanzvoller Kantersieg, aber ein sehr reifer Auswärtserfolg. Finn Harps lässt praktisch nichts zu und gewinnt auch dann, wenn die eigene Chancenverwertung einmal nicht mitspielt. Das Comeback von Papini ist dabei fast genauso wertvoll wie der nächste Dreier.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-27-st-patricks-finn-harps',date:'2041-10-27',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · 33. SPIELTAG',
    title:"Roberts entscheidet: 1:0 bei St Patrick's",
    summary:'Finn Harps dominiert mit 17:1 Schüssen, gewinnt aber nur 1:0. Jake Roberts trifft, Giacomo Papini kehrt nach Verletzung zurück.',
    href:'presse.html?id=2041-10-27-st-patricks-finn-harps-spielbericht',
    entities:['finn-harps','st-patricks-athletic','jake-roberts','giacomo-papini','season-2041']
  });
})();
