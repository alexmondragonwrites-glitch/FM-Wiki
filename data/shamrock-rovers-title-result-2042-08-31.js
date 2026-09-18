(()=>{
window.FM_MATCHES=window.FM_MATCHES||[];
window.FM_FIXTURES=window.FM_FIXTURES||[];
window.FM_NEWS=window.FM_NEWS||[];
window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
const upsert=(list,item)=>{const i=list.findIndex(x=>x&&x.id===item.id);if(i>=0)list[i]=item;else list.push(item);};
const date='2042-08-31';
const match={
id:'2042-08-31-finn-harps-shamrock-rovers-premier-division',date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
home:{id:'finn-harps',name:'Finn Harps',score:3},away:{id:'shamrock-rovers',name:'Shamrock Rovers',score:0},score:'3:0',homeGoals:3,awayGoals:0,halfTime:'1:0',
venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Nieselregen · 14 °C',referee:'James Carey',
headline:'Meister! Finn Harps schlagen Shamrock 3:0 und holen den 16. Ligatitel in Folge',
scorers:[{player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:[13]},{player:'Emerson Escárcega',team:'Finn Harps',goals:2,minutes:[86,95],penalties:[86]}],
stats:[
{label:'Schüsse',home:21,away:5,kind:'number'},{label:'Schüsse aufs Tor',home:6,away:3,kind:'number'},{label:'xG',home:4.36,away:0.66,kind:'decimal'},
{label:'Großchancen',home:5,away:0,kind:'number'},{label:'Ballbesitz',home:74,away:26,kind:'percent'},{label:'Ecken',home:6,away:6,kind:'number'},
{label:'Fouls',home:11,away:22,kind:'number'},{label:'Angekommene Pässe',home:'91% (618/682)',away:'73% (215/296)',kind:'text'}
],
standout:{player:'Emerson Escárcega',team:'Finn Harps',rating:8.3,goals:2,note:'Doppelpack im Meisterspiel; laut Meistermeldung 17 Ligatore.'},
leagueAfterMatch:{played:28,wins:26,draws:0,losses:2,goalsFor:96,goalsAgainst:10,goalDifference:86,points:78,position:1,currentWinningStreak:19},
titleRace:{mathematicallyClinched:true,titleNumberInRow:16,note:'Mit dem 3:0 gegen Shamrock Rovers sichert sich Finn Harps den 16. Premier-Division-Titel in Folge.'},
sources:['FM-Spielübersicht Finn Harps – Shamrock Rovers · 31.08.2042','Finn-Harps-Spielerstatistiken · 31.08.2042','Planet-Football-Spielbericht · 31.08.2042','Meisterschaftsmeldung · 31.08.2042']
};
upsert(window.FM_MATCHES,match);
const fixture=['2042-08-31','15:00','Shamrock Rovers','Heim','3:0','Premier Division',0];
const fi=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&x[2]==='Shamrock Rovers'&&x[5]==='Premier Division');
if(fi>=0)window.FM_FIXTURES[fi]=fixture;else window.FM_FIXTURES.push(fixture);
const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
if(season){
season.referenceDate=date;season.snapshotDate=date;
season.latestHeadline='MEISTER: Finn Harps schlägt Shamrock Rovers 3:0 und gewinnt den 16. Premier-Division-Titel in Folge.';
season.league={...(season.league||{}),position:1,played:28,wins:26,draws:0,losses:2,goalsFor:96,goalsAgainst:10,goalDifference:86,points:78,latestResult:'31.08.2042 · Finn Harps 3:0 Shamrock Rovers',champion:true,titleClinchedDate:date,consecutiveTitles:16,currentWinningStreak:19};
season.honours=season.honours||[];if(!season.honours.includes('SSE Airtricity League Premier Division'))season.honours.push('SSE Airtricity League Premier Division');
season.title2042={competition:'SSE Airtricity League Premier Division',clinchedDate:date,opponent:'Shamrock Rovers',score:'3:0',consecutiveTitleNumber:16};
season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
const note='31.08.2042: Meister! 3:0 gegen Shamrock Rovers durch Pol Muñoz (13.) und Emerson Escárcega (86./Elfmeter, 90+5). Finn Harps sichert sich den 16. Premier-Division-Titel in Folge. Liga: 28 Spiele, 26 Siege, 78 Punkte, 96:10 Tore und 19 Ligasiege in Serie.';
if(!season.changes.notes.includes(note))season.changes.notes.push(note);
}
[
{id:'2042-08-31-pol-munoz-title-opener',date,player:'Pol Muñoz',type:'goal',title:'Führung im Meisterspiel',detail:'Trifft in Minute 13 zum 1:0 gegen Shamrock Rovers.'},
{id:'2042-08-31-escarcega-title-double',date,player:'Emerson Escárcega',type:'standout',title:'Doppelpack zur Meisterschaft',detail:'Trifft in Minute 86 per Elfmeter und in 90+5 zum 3:0. Laut Meistermeldung 17 Ligatore.'},
{id:'2042-08-31-evan-reilly-title-clean-sheet',date,player:'Evan Reilly',type:'standout',title:'Zu null im Meisterspiel',detail:'Hält beim 3:0 gegen Shamrock Rovers die Null.'}
].forEach(x=>upsert(window.FM_PLAYER_UPDATES,x));
const reportId='2042-08-31-finn-harps-shamrock-rovers-title-clinch';
upsert(window.FM_PRESS_REPORTS,{id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'31.08.2042',
headline:'16 in Folge: Finn Harps krönen die Saison gegen Shamrock',
subheadline:'Pol Muñoz trifft früh, Emerson Escárcega spät doppelt. Das 3:0 im Donegal Stadium macht den nächsten Meistertitel offiziell.',
label:'PREMIER DIVISION · FINN HARPS 3:0 SHAMROCK ROVERS',
heroStat:{label:'MEISTERSERIE',value:'16 TITEL',note:'in Folge · 2042 erneut verteidigt'},
intro:'Finn Harps kontrolliert Shamrock Rovers, gewinnt 3:0 und macht damit den 16. Premier-Division-Titel hintereinander perfekt.',
sections:[
{title:'Muñoz eröffnet',text:'Pol Muñoz trifft bereits in der 13. Minute zum 1:0.'},
{title:'Escárcega macht die Party auf',text:'In Minute 86 verwandelt Escárcega einen Elfmeter. In 90+5 legt er das 3:0 nach.'},
{title:'16 Titel in Folge',text:'Mit dem Abpfiff ist die Titelverteidigung offiziell. Finn Harps gewinnt die Premier Division zum 16. Mal hintereinander.'},
{title:'Die Zahlen',text:'28 Spiele, 26 Siege, 78 Punkte, 96:10 Tore und 19 Ligasiege in Folge.'}
],
verdictHeading:'Eine Dynastie wird zur Epoche',
verdict:'Der 16. Meistertitel in Folge fällt vor 12.800 Zuschauern im Donegal Stadium. Die Harps dominieren mit 74 Prozent Ballbesitz, 21:5 Schüssen und 4,36:0,66 xG.',
sources:['FM-Spielübersicht Finn Harps – Shamrock Rovers · 31.08.2042','Meisterschaftsmeldung · 31.08.2042']});
(window.FM_NEWS||[]).forEach(x=>{if(x.featured)x.featured=false;});
upsert(window.FM_NEWS,{id:'2042-08-31-finn-harps-champions',date,season:2042,category:'Premier Division',accent:'gold',featured:true,
eyebrow:'MEISTER 2042 · 16. TITEL IN FOLGE',title:'Sechzehnfacher Dauerchampion: Harps machen gegen Shamrock alles klar',
summary:'Finn Harps schlägt Shamrock Rovers 3:0. Pol Muñoz trifft früh, Escárcega spät doppelt. Damit ist der 16. Premier-Division-Titel in Folge perfekt.',
href:`presse.html?id=${reportId}`,entities:['finn-harps','shamrock-rovers','pol-munoz','emerson-escarcega','evan-reilly','premier-division','season-2042']});
})();