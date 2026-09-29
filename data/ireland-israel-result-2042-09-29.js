(()=>{
window.FM_IRELAND=window.FM_IRELAND||{};
window.FM_MATCHES=window.FM_MATCHES||[];
window.FM_NEWS=window.FM_NEWS||[];
window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
const upsert=(a,x)=>{const i=a.findIndex(e=>e&&e.id===x.id);if(i>=0)a[i]=x;else a.push(x);};

const date='2042-09-29';
const reportId='2042-09-29-ireland-israel-2-1-nations-league';

upsert(window.FM_MATCHES,{
  id:'2042-09-29-ireland-israel-nations-league',
  date,season:2042,competition:'UEFA Nations League A',stage:'Gruppe 3 · 2. Spieltag',
  home:{id:'ireland',name:'Irland',score:2},
  away:{id:'israel',name:'Israel',score:1},
  score:'2:1',homeGoals:2,awayGoals:1,halfTime:'1:1',
  venue:'Aviva Stadium',location:'Dublin, Irland',attendance:60345,
  weather:'Leicht bewölkt · 25 °C',referee:'Liam Wilkinson',
  headline:'Gavin entscheidet: Irland schlägt Israel 2:1 im Aviva Stadium',
  scorers:[
    {player:'Shane Fox',team:'Irland',goals:1,minutes:[14]},
    {player:'Mahmoud Jenyat',team:'Israel',goals:1,minutes:[45]},
    {player:'Fionn Gavin',team:'Irland',goals:1,minutes:[47]}
  ],
  events:[
    {minute:14,type:'goal',team:'Irland',player:'Shane Fox',text:'1:0'},
    {minute:43,type:'yellow-card',team:'Irland',player:'Justin Ramsey',text:'Verwarnung'},
    {minute:'45+1',type:'goal',team:'Israel',player:'Mahmoud Jenyat',text:'1:1'},
    {minute:47,type:'goal',team:'Irland',player:'Fionn Gavin',text:'2:1'},
    {minute:59,type:'yellow-card',team:'Israel',player:'Gad Salner',text:'Verwarnung'},
    {minute:68,type:'yellow-card',team:'Irland',player:'Billy Walker',text:'Verwarnung'}
  ],
  stats:[
    {label:'Schüsse',home:12,away:3},
    {label:'Schüsse aufs Tor',home:5,away:2},
    {label:'xG',home:1.82,away:0.64},
    {label:'Neben das Tor',home:4,away:1},
    {label:'Großchancen',home:2,away:1},
    {label:'Ballbesitz',home:60,away:40},
    {label:'Ecken',home:5,away:1},
    {label:'Fouls',home:19,away:7},
    {label:'Angekommene Pässe',home:'88% (567/648)',away:'83% (372/447)'},
    {label:'Gewonnene Zweikämpfe',home:'77% (17/22)',away:'70% (25/33)'},
    {label:'Gewonnene Kopfduelle',home:'48% (20/42)',away:'52% (22/42)'},
    {label:'Gelbe Karten',home:2,away:1},
    {label:'Rote Karten',home:0,away:0},
    {label:'Notenschnitt',home:6.94,away:6.68},
    {label:'Intensive Sprints',home:118,away:122}
  ],
  irelandRatings:{
    'Evan Reilly':6.7,'Callum Duggan':7.3,'Mareks Istrankins':6.8,'Darcy Andrews':7.3,
    'Colum Winnall':6.3,"Jim O'Neill":6.8,'Justin Ramsey':6.3,"Cormac O'Kane":6.5,
    'Giacomo Papini':7.9,'Shane Fox':7.4,'Fionn Gavin':7.4,'Billy Walker':6.4,
    'Callum Lawless':6.9,"Harry O'Leary":6.8,'Kevin Murphy':6.7,'Ben Barry':6.8
  },
  standout:{player:'Giacomo Papini',team:'Irland',rating:7.9,note:'Sechs progressive Pässe und höchste irische Matchnote.'},
  milestones:[
    {player:"Jim O'Neill",achievement:'100. Länderspiel für Irland'},
    {player:'Fionn Gavin',achievement:'Debüt für Irland und erstes Länderspieltor'},
    {player:'Yaniv Levi',achievement:'50. Länderspiel für Israel'}
  ],
  sources:[
    'FM-Spielübersicht Irland – Israel · 29.09.2042',
    'Irland-Spielerstatistiken · 29.09.2042',
    'GOAL-Spielbericht · 29.09.2042'
  ]
});

window.FM_IRELAND.updated=date;
window.FM_IRELAND.nationsLeague2042={
  ...(window.FM_IRELAND.nationsLeague2042||{}),
  status:'2. Spieltag abgeschlossen',
  record:{played:2,wins:1,draws:1,losses:0,goalsFor:4,goalsAgainst:3,points:4},
  latestResult:'29.09.2042 · Irland 2:1 Israel',
  nextOpponent:'Niederlande'
};
window.FM_IRELAND.nextFocus={
  competition:'UEFA Nations League A',stage:'Gruppe 3 · 3. Spieltag',
  opponent:'Niederlande',venue:'Heim',date:'2042-10-03',status:'Vorbereitung'
};

[
  {id:'2042-09-29-jim-oneill-100-caps',date,player:"Jim O'Neill",type:'milestone',title:'100 Länderspiele für Irland',detail:'O’Neill erreicht beim 2:1 gegen Israel sein 100. Länderspiel.'},
  {id:'2042-09-29-fionn-gavin-ireland-debut-goal',date,player:'Fionn Gavin',type:'milestone',title:'Debüt und erstes Länderspieltor',detail:'Gavin debütiert für Irland und erzielt in Minute 47 direkt den 2:1-Siegtreffer.'},
  {id:'2042-09-29-papini-israel-7-9',date,player:'Giacomo Papini',type:'performance',title:'Starker Auftritt gegen Israel',detail:'Papini erhält mit 7,9 die höchste irische Note und spielt sechs progressive Pässe.'}
].forEach(x=>upsert(window.FM_PLAYER_UPDATES,x));

upsert(window.FM_PRESS_REPORTS,{
  id:reportId,type:'Nations-League-Spielbericht',date,competition:'UEFA Nations League A',
  headline:'Gavin trifft beim Debüt: Irland schlägt Israel 2:1 im Aviva Stadium',
  subheadline:'Shane Fox eröffnet, Israel gleicht vor der Pause aus, dann entscheidet Debütant Fionn Gavin die Partie unmittelbar nach Wiederbeginn.',
  label:'UEFA NATIONS LEAGUE A · GRUPPE 3 · IRLAND 2:1 ISRAEL',
  heroStat:{label:'FIONN GAVIN',value:'DEBÜT + SIEGTOR',note:'47. Minute'},
  backlink:{href:'nationalteam.html',label:'← ZUR NATIONALMANNSCHAFT'},
  intro:'Irland holt im zweiten Nations-League-Spiel den ersten Sieg. Vor 60.345 Zuschauern im Aviva Stadium kontrolliert die Mannschaft große Teile der Partie und beantwortet Israels Ausgleich mit einem Blitzstart in die zweite Hälfte.',
  sections:[
    {title:'Fox bringt Irland früh in Führung',text:'Shane Fox trifft in Minute 14 zum 1:0. Irland bestimmt anschließend mit 60 Prozent Ballbesitz und deutlich mehr Abschlüssen die Partie.'},
    {title:'Israel schlägt vor der Pause zurück',text:'Mahmoud Jenyat gleicht in der Nachspielzeit der ersten Hälfte aus und schickt beide Teams mit einem 1:1 in die Kabinen.'},
    {title:'Gavin braucht nur zwei Minuten',text:'Fionn Gavin erzielt in Minute 47 das 2:1. Es ist sein Debüt für Irland und zugleich sein erstes Länderspieltor.'},
    {title:'Papini zieht im Mittelfeld die Fäden',text:'Giacomo Papini erhält mit 7,9 die beste irische Note und steuert sechs progressive Pässe bei.'},
    {title:'O’Neill erreicht die 100',text:'Jim O’Neill absolviert gegen Israel sein 100. Länderspiel für Irland. Der Sieg macht den Jubiläumsabend komplett.'}
  ],
  verdictHeading:'Vier Punkte aus zwei Spielen',
  verdict:'Nach dem 2:2 in Dänemark folgt der erste Sieg. Irland steht nach zwei Nations-League-Spielen bei vier Punkten und bleibt ungeschlagen. Als Nächstes wartet erneut zuhause die Niederlande.',
  sources:['FM-Spielübersicht Irland – Israel · 29.09.2042','Irland-Spielerstatistiken · 29.09.2042','GOAL-Spielbericht · 29.09.2042']
});

(window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
upsert(window.FM_NEWS,{
  id:'2042-09-29-ireland-israel-2-1',date,season:2042,category:'Nationalteam',accent:'green',featured:true,
  eyebrow:'NATIONS LEAGUE · 2:1',
  title:'Gavin entscheidet beim Debüt: Irland schlägt Israel',
  summary:'Irland gewinnt vor 60.345 Zuschauern im Aviva Stadium 2:1. Shane Fox und Debütant Fionn Gavin treffen, Jim O’Neill feiert sein 100. Länderspiel.',
  href:`presse.html?id=${reportId}`,
  entities:['ireland','israel','nations-league','fionn-gavin','jim-oneill','giacomo-papini','season-2042']
});
})();