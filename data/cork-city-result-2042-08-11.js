(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];window.FM_FIXTURES=window.FM_FIXTURES||[];window.FM_NEWS=window.FM_NEWS||[];window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  const upsert=(a,x)=>{const i=a.findIndex(y=>y&&y.id===x.id);if(i>=0)a[i]=x;else a.push(x)};
  const date='2042-08-11',reportId='2042-08-11-finn-harps-cork-city-3-0-barry-frame-impact';

  upsert(window.FM_MATCHES,{
    id:'2042-08-11-finn-harps-cork-city-premier-division',date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',score:3},away:{id:'cork-city',name:'Cork City',score:0},score:'3:0',halfTime:'0:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12646,awayFans:486,weather:'Feucht · 22 °C',referee:'Callum Patton',
    scorers:[
      {player:'Ben Barry',team:'Finn Harps',goals:2,minutes:[59,88],penalties:[88]},
      {player:'Daryl Frame',team:'Finn Harps',goals:1,minutes:[95]}
    ],
    events:[
      {minute:45,type:'penalty-missed',team:'Finn Harps',player:'Justin Ramsey',text:'Elfmeter verschossen; Thomas Gill pariert'},
      {minute:53,type:'substitution',team:'Finn Harps',player:'Ben Barry',text:'Eingewechselt nach der Pause'},
      {minute:53,type:'substitution',team:'Finn Harps',player:'Daryl Frame',text:'Eingewechselt nach der Pause'},
      {minute:59,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'1:0'},
      {minute:88,type:'goal',team:'Finn Harps',player:'Ben Barry',text:'2:0 · Elfmeter'},
      {minute:95,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'3:0'}
    ],
    stats:[
      {label:'Schüsse',home:24,away:4},{label:'Schüsse aufs Tor',home:11,away:1},{label:'xG',home:4.79,away:0.62},
      {label:'Großchancen',home:6,away:2},{label:'Ballbesitz',home:72,away:28},{label:'Ecken',home:10,away:3},{label:'Fouls',home:10,away:25},
      {label:'Angekommene Pässe',home:'89% (601/674)',away:'75% (228/303)'}
    ],
    ratings:{
      'Paulo Henrique':7.8,'Diego Fernández':7.4,'Mareks Istrankins':6.8,'Daniele Di Maio':7.4,'Gustavo da Silva':7.2,
      "Jim O'Neill":7.0,'Pol Muñoz':6.6,"Cormac O'Kane":7.6,'Billy Walker':6.5,'Romano Maisto':7.4,'Justin Ramsey':5.9,
      'Jake Roberts':6.8,'Alejandro López':6.9,'Giacomo Papini':7.2,'Ben Barry':8.3,'Daryl Frame':7.8
    },
    standout:{player:'Ben Barry',team:'Finn Harps',rating:8.3,goals:2,note:'Kommt nach der Pause, bricht das 0:0 in Minute 59 auf und verwandelt in Minute 88 den Elfmeter zum 2:0.'},
    leagueAfterMatch:{played:25,wins:23,draws:0,losses:2,goalsFor:87,goalsAgainst:10,goalDifference:77,points:69,position:1},
    form:{leagueWinningStreak:16,positionAfterMatch:1},
    milestones:[
      {player:'Diego Fernández',achievement:'150. Einsatz für Finn Harps'},
      {player:'Gustavo da Silva',achievement:'125. Einsatz für Finn Harps'},
      {player:'Jake Roberts',achievement:'50. Ligaspiel seiner Karriere'},
      {player:'Darnell Tuppen',achievement:'325. Profispiel'}
    ],
    headline:'Barry und Frame kommen nach der Pause: Finn Harps schlagen Cork City 3:0',
    verdict:'Zur Halbzeit steht es trotz klarer Überlegenheit 0:0, Ramsey scheitert zudem vom Punkt. Dann kommen Ben Barry und Daryl Frame: Barry trifft doppelt, Frame setzt in der Nachspielzeit den Schlusspunkt. Es ist der 16. Ligasieg in Folge.'
  });

  const fx=['2042-08-11','19:45','Cork City','Heim','3:0','Premier Division',0];
  const i=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&['Cork City','Cork City FC'].includes(x[2]));if(i>=0)window.FM_FIXTURES[i]=fx;else window.FM_FIXTURES.push(fx);

  [
    {id:'2042-08-11-ben-barry-impact-cork',date,player:'Ben Barry',type:'performance',title:'Barry entscheidet das Spiel von der Bank',detail:'Nach seiner Einwechslung in Minute 53 erzielt Barry das 1:0 und verwandelt später den Elfmeter zum 2:0; Note 8,3.'},
    {id:'2042-08-11-daryl-frame-impact-cork',date,player:'Daryl Frame',type:'performance',title:'Frame setzt den Schlusspunkt',detail:'Frame kommt ebenfalls nach der Pause und erzielt in Minute 90+5 das 3:0.'},
    {id:'2042-08-11-ramsey-penalty-miss-cork',date,player:'Justin Ramsey',type:'match-event',title:'Ramsey scheitert vom Elfmeterpunkt',detail:'Kurz vor der Pause pariert Cork-Keeper Thomas Gill Ramseys Elfmeter.'},
    {id:'2042-08-11-diego-fernandez-150-harps',date,player:'Diego Fernández',type:'milestone',title:'150 Einsätze für Finn Harps',detail:'Fernández erreicht gegen Cork City seinen 150. Einsatz für den Klub.'},
    {id:'2042-08-11-gustavo-da-silva-125-harps',date,player:'Gustavo da Silva',type:'milestone',title:'125 Einsätze für Finn Harps',detail:'Da Silva erreicht gegen Cork City seinen 125. Einsatz für den Klub.'},
    {id:'2042-08-11-jake-roberts-50-league',date,player:'Jake Roberts',type:'milestone',title:'50. Ligaspiel',detail:'Roberts absolviert das 50. Ligaspiel seiner Karriere.'}
  ].forEach(x=>upsert(window.FM_PLAYER_UPDATES,x));

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'11.08.2042',
    headline:'Barry und Frame drehen nach der Pause den Schlüssel um',
    subheadline:'Zur Halbzeit steht es 0:0 und Ramsey hat einen Elfmeter vergeben. Dann kommen Barry und Frame von der Bank und Finn Harps gewinnt 3:0.',
    label:'PREMIER DIVISION · 11. AUGUST 2042',
    heroStat:{label:'BEN BARRY',value:'2 TORE',note:'Eingewechselt in Minute 53 · Treffer in Minute 59 und 88'},
    intro:'45 Minuten lang hält Cork City das Tor geschlossen. Finn Harps kontrolliert das Spiel, Ramsey bekommt sogar die Chance vom Punkt, doch Thomas Gill pariert. Nach der Pause verändert die Bank das Bild endgültig: Ben Barry und Daryl Frame kommen und entscheiden die Partie.',
    sections:[
      {title:'Ramsey scheitert, Cork rettet das 0:0 in die Pause',text:'Finn Harps dominiert die erste Hälfte, findet aber keinen Weg vorbei an Thomas Gill. Kurz vor dem Pausenpfiff erhält Ramsey die große Chance per Elfmeter, doch Corks Keeper hält. So bleibt die Partie trotz der Harps-Überlegenheit offen.'},
      {title:'Barry braucht sechs Minuten',text:'Ben Barry kommt in Minute 53 und trifft bereits in Minute 59 zum 1:0. In Minute 88 übernimmt er auch den nächsten Elfmeter und verwandelt zum 2:0. Seine Note 8,3 ist die beste eines Harps-Feldspielers.'},
      {title:'Frame macht den Deckel drauf',text:'Daryl Frame wird ebenfalls nach der Pause gebracht und setzt in Minute 90+5 mit dem 3:0 den Schlusspunkt. Die Wechsel verwandeln ein zähes 0:0 in einen letztlich klaren Sieg.'},
      {title:'16 Ligasiege in Folge',text:'Mit 24:4 Schüssen, 4,79:0,62 xG und 72 Prozent Ballbesitz ist das Ergebnis verdient. Nach 25 Ligaspielen steht Finn Harps bei 69 Punkten und 87:10 Toren.'}
    ],
    verdictHeading:'Die Bank entscheidet ein Spiel, das lange festhing',
    verdict:'Cork City hält eine Halbzeit lang stand und überlebt sogar Ramseys Elfmeter. Danach zeigt sich die Tiefe des Kaders: Barry und Frame kommen, erzielen alle drei Tore und verlängern die Siegesserie auf 16 Ligaspiele.'
  });

  upsert(window.FM_NEWS,{
    id:'2042-08-11-finn-harps-cork-city-3-0',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 3:0',title:'Barry und Frame kommen von der Bank und entscheiden Cork-Spiel',
    summary:'0:0 zur Pause, Ramsey verschießt einen Elfmeter. Danach kommen Barry und Frame: Barry trifft doppelt, Frame zum 3:0. Finn Harps feiert den 16. Ligasieg in Folge.',
    href:`presse.html?id=${reportId}`
  });
})();