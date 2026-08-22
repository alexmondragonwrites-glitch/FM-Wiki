(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2042-03-18-athlone-town-finn-harps-premier-division';
  const reportId='2042-03-18-athlone-town-finn-harps-0-3-spielbericht';

  const match={
    id:fixtureId,date:'2042-03-18',season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'athlone-town',name:'Athlone Town',short:'ATH',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    score:'0:3',homeGoals:0,awayGoals:3,halfTime:'0:1',
    venue:'Athlone Town Stadium',location:'Athlone, Irland',attendance:3757,awayFans:1500,weather:'Heiter · 8 °C',referee:'Ronan Collins',
    headline:'Nächster Sieg, nächste Null: Finn Harps kontrolliert Athlone beim 3:0',
    verdict:'Finn Harps lässt Athlone Town beim 3:0 praktisch nicht am Spiel teilnehmen. 75 Prozent Ballbesitz, 20:0 Schüsse, 4:0 Schüsse aufs Tor und 2,39:0,00 xG erzählen die Partie fast vollständig. Cormac O’Kane öffnet das Spiel vor der Pause, Daryl Frame trifft bei seinem 100. Profieinsatz direkt nach Wiederbeginn und Ben Barry setzt per Elfmeter den Schlusspunkt. Nach sieben Ligaspielen steht die Bilanz bei 21 Punkten und 23:0 Toren; saisonübergreifend sind es 24 Ligasiege in Serie.',
    scorers:[
      {player:"Cormac O'Kane",team:'Finn Harps',goals:1,minutes:[37]},
      {player:'Daryl Frame',team:'Finn Harps',goals:1,minutes:[49]},
      {player:'Ben Barry',team:'Finn Harps',goals:1,minutes:[61],penalties:[61]}
    ],
    events:[
      {minute:32,type:'yellow',team:'Athlone Town',player:'Faton Dervishi',text:'Gelbe Karte'},
      {minute:34,type:'yellow',team:'Athlone Town',player:'Rakish Colkett',text:'Gelbe Karte'},
      {minute:37,type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'0:1'},
      {minute:46,type:'yellow',team:'Finn Harps',player:'Mareks Istrankins',text:'Gelbe Karte'},
      {minute:49,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'0:2'},
      {minute:61,type:'penalty-goal',team:'Finn Harps',player:'Ben Barry',text:'0:3 · Elfmeter'},
      {minute:90,type:'yellow',team:'Athlone Town',player:'Quentin Roach',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:0,away:20,kind:'number'},
      {label:'Schüsse aufs Tor',home:0,away:4,kind:'number'},
      {label:'xG',home:0.00,away:2.39,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:0,away:11,kind:'number'},
      {label:'Großchancen',home:0,away:2,kind:'number'},
      {label:'Ballbesitz',home:25,away:75,kind:'percent'},
      {label:'Fouls',home:28,away:10,kind:'number'},
      {label:'Gelbe Karten',home:3,away:1,kind:'number'},
      {label:'Angekommene Pässe',home:207,away:607,kind:'number'},
      {label:'Mannschaftsleistung',home:10.9,away:11.5,kind:'decimal'}
    ],
    ratings:{
      'Evan Reilly':7.4,'Diego Fernández':7.0,'Mareks Istrankins':6.7,'Daniele Di Maio':7.0,'Kevin Kelly':7.0,
      'Amir Mašić':6.9,'Daryl Frame':8.1,"Cormac O'Kane":7.8,'Giacomo Papini':6.9,'Dom Docherty':7.1,
      'Ben Barry':7.2,'Callum Brennan':6.8,"Jim O'Neill":6.8,'Billy Walker':6.9,'Torric Bruce':6.9,'Gustavo da Silva':6.8
    },
    standout:{player:'Daryl Frame',team:'Finn Harps',rating:8.1,goals:1,note:'Krönt seinen 100. Profieinsatz mit dem Treffer zum 2:0 unmittelbar nach der Pause.'},
    leagueAfterMatch:{played:7,wins:7,draws:0,losses:0,goalsFor:23,goalsAgainst:0,goalDifference:23,points:21,position:1,consecutiveLeagueWinsAcrossSeasons:24},
    analysis:{
      control:'Athlone kommt über die gesamte Partie zu keinem einzigen Abschluss. Finn Harps hält 75 Prozent Ballbesitz und bringt 607 Pässe an den Mitspieler. Das 3:0 ist weniger ein Schlagabtausch als eine vollständige territoriale Kontrolle.',
      frame:'Daryl Frame macht aus seinem 100. Profieinsatz eine kleine Jubiläumsfeier. Sein Tor in der 49. Minute nimmt Athlone direkt nach der Pause jede Hoffnung auf einen engen Abend; mit 8,1 erhält er die beste Harps-Note.',
      barry:'Ben Barry bestätigt direkt nach seinem aktuellen Entwicklungssprung, warum er zunehmend als interner Nachfolger für die Neun gilt. Der 18-Jährige übernimmt den Elfmeter in Minute 61 und trifft zum 3:0.',
      defensive:'Evan Reilly bleibt erneut ohne Gegentor. Der FM-Hinweis beziffert seine aktuelle Serie im Harps-Tor nach diesem Spiel auf 367 Minuten ohne Gegentreffer.',
      streak:'Die Ligabilanz 2042 steht bei sieben Siegen aus sieben Spielen und 23:0 Toren. Der offizielle Spielbericht nennt zugleich 24 Premier-Division-Siege in Serie über die Saisongrenze hinweg.'
    },
    notes:[
      'Siebter Sieg im siebten Ligaspiel 2042.',
      'Ligabilanz 2042: 21 Punkte und 23:0 Tore.',
      'Saisonübergreifend 24 Ligasiege in Serie.',
      'Athlone Town bleibt bei 0 Schüssen und 0,00 xG.',
      'Daryl Frame erzielt bei seinem 100. Profieinsatz das 2:0.',
      'Ben Barry trifft per Elfmeter zum 3:0.',
      'Evan Reilly steht laut FM-Hinweis bei 367 Minuten ohne Gegentor für Finn Harps.'
    ],
    sources:['FM-Spielübersicht Athlone Town – Finn Harps · 18.03.2042','Finn-Harps-Spielerstatistiken · 18.03.2042','Irisches Fußballblatt Spielbericht · Athlone Town 0:3 Finn Harps']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const athlone=window.FM_CLUBS.find(x=>x.id==='athlone-town'||x.name==='Athlone Town'||x.name==='Athlone Town FC');
  if(athlone){
    athlone.meetings=athlone.meetings||[];
    const meeting={date:'18.03.2042',competition:'Premier Division',venue:'H',result:'0:3'};
    const idx=athlone.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)athlone.meetings[idx]=meeting;else athlone.meetings.unshift(meeting);
    athlone.lastMeeting='18.03.2042 · Athlone Town 0:3 Finn Harps';
    athlone.summary='Athlone verliert zuhause 0:3 gegen Finn Harps und kommt dabei zu keinem einzigen Abschluss. O’Kane, Frame und Barry treffen für den Tabellenführer.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-03-18';
    season.latestHeadline='Premier Division: 3:0 bei Athlone Town. Finn Harps steht nach sieben Ligaspielen bei sieben Siegen und 23:0 Toren.';
    season.league=season.league||{};
    season.league.current={played:7,wins:7,draws:0,losses:0,goalsFor:23,goalsAgainst:0,goalDifference:23,points:21,position:1};
    season.league.consecutiveWinsAcrossSeasons=24;
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='18.03.2042: Finn Harps gewinnt bei Athlone Town 3:0. O’Kane, Frame und Barry treffen; Athlone bleibt ohne einen einzigen Schuss. Nach sieben Ligaspielen stehen 21 Punkte und 23:0 Tore, saisonübergreifend 24 Ligasiege in Serie.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-03-18-daryl-frame-100-profi-spiele',date:'2042-03-18',player:'Daryl Frame',type:'milestone',title:'Frame feiert 100. Profieinsatz mit Tor',detail:'Trifft in der 49. Minute zum 2:0 und erhält mit 8,1 die beste Harps-Note.'},
    {id:'2042-03-18-ben-barry-athlone-elfmeter',date:'2042-03-18',player:'Ben Barry',type:'goal',title:'Barry trifft direkt nach dem Entwicklungssprung',detail:'Der 18-Jährige verwandelt in Minute 61 den Elfmeter zum 3:0.'},
    {id:'2042-03-18-evan-reilly-367-minuten-ohne-gegentor',date:'2042-03-18',player:'Evan Reilly',type:'streak',title:'Reilly seit 367 Minuten ohne Gegentor',detail:'Der Keeper bleibt auch bei Athlone Town sauber; der FM-Hinweis nennt nach dem Spiel 367 Minuten ohne Gegentreffer für Finn Harps.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-03-18',competition:'Premier Division',fixtureDate:'18.03.2042',
    home:'Athlone Town',away:'Finn Harps',score:'0:3',location:'Athlone Town Stadium · Athlone · 3.757 Zuschauer',
    headline:'20:0 Schüsse: Finn Harps erstickt Athlone beim nächsten 3:0',
    subheadline:'O’Kane öffnet die Partie, Frame trifft bei seinem 100. Profieinsatz und Barry legt per Elfmeter nach. Nach sieben Ligaspielen steht Finn Harps bei sieben Siegen, 23:0 Toren und 24 Premier-Division-Erfolgen in Serie.',
    heroStat:{label:'Ligastart 2042',value:'7 Spiele · 7 Siege · 23:0 Tore',note:'24 Ligasiege saisonübergreifend in Serie'},
    sections:[
      {title:'Athlone bekommt keinen einzigen Schuss',text:'Die deutlichste Zahl des Abends ist die Null bei den Gastgebern: 0 Schüsse, 0 aufs Tor und 0,00 xG. Finn Harps kontrolliert 75 Prozent Ballbesitz, kommt selbst auf 20 Abschlüsse und 2,39 xG.'},
      {title:'O’Kane findet den Türöffner',text:'Trotz der vollständigen Spielkontrolle dauert es bis zur 37. Minute, ehe Cormac O’Kane den Bann bricht. Sein Treffer nimmt die 1:0-Führung mit in die Pause.'},
      {title:'Frames Jubiläum bekommt ein Ausrufezeichen',text:'Vier Minuten nach Wiederbeginn trifft Daryl Frame zum 2:0. Für den Wunderknaben ist es zugleich der 100. Profieinsatz. Mit Note 8,1 wird er zum besten Harps-Spieler des Abends.'},
      {title:'Barry verwandelt und die nächste Generation klopft weiter',text:'Ben Barry übernimmt in der 61. Minute den Elfmeter und macht das 3:0 perfekt. Nur wenige Stunden nach dem aktualisierten Entwicklungsprofil liefert der 18-Jährige die passende Fußnote auf dem Platz.'},
      {title:'Die Null wird zur Gewohnheit',text:'Auch nach sieben Ligaspielen hat Finn Harps 2042 noch kein Gegentor kassiert. Evan Reilly steht laut Spielhinweis inzwischen bei 367 Minuten ohne Gegentreffer im Harps-Tor.'}
    ],
    verdictHeading:'Dominanz ohne Drama',
    verdict:'Das Ergebnis ist erneut 3:0, aber die Art des Sieges ist fast noch deutlicher als gegen Sligo: Athlone wird auf null Abschlüsse gehalten. Finn Harps gewinnt nicht nur, die Mannschaft nimmt dem Gegner praktisch jede Möglichkeit, überhaupt ein Fußballspiel entstehen zu lassen.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-03-18-athlone-town-finn-harps-0-3',date:'2042-03-18',type:'Liga',importance:'normal',
    title:'24. Ligasieg in Serie: Harps schlagen Athlone 3:0',
    summary:'20:0 Schüsse, 75 Prozent Ballbesitz und 23:0 Tore nach sieben Ligaspielen. O’Kane, Frame und Barry treffen beim nächsten souveränen Harps-Sieg.',
    href:`presse.html?id=${reportId}`
  });
})();