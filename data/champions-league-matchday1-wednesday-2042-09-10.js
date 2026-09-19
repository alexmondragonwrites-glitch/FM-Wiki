(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-09-10';
  const reportId='2042-09-10-champions-league-wednesday-roundup';

  const wednesdayResults=[
    {home:'Benfica',away:'AEK',homeGoals:0,awayGoals:2,score:'0:2',scorers:{home:[],away:['M. Tasgran (69.)','J. Townsley (82.)']}},
    {home:'Dynamo Kyiv',away:'Barcelona',homeGoals:2,awayGoals:2,score:'2:2',scorers:{home:['V. Savchenko (7.)','A. Petrov (64.)'],away:['T. Yefremov (48.)','E. Musah (65.)']}},
    {home:'Grenoble Foot 38',away:'PSV Eindhoven',homeGoals:4,awayGoals:1,score:'4:1',scorers:{home:['A. Mapelli (23.)','S. Nikosi (54.)','B. Kaczorowski (77.)','C. Vega (80.)'],away:['I. Diomandé (45+2.)']}},
    {home:'Kortrijk',away:'Crvena zvezda',homeGoals:4,awayGoals:2,score:'4:2',scorers:{home:['G. Labonne (22., 39., 67.)','M. Mugisha (83.)'],away:['E. Rincón (81.)','Zafer Arslan (89.)']}},
    {home:'Manchester City',away:'Monaco',homeGoals:2,awayGoals:1,score:'2:1',scorers:{home:['F. Oroz (79.)','R. Joya (90+3., ET)'],away:['V. Hajduc (33.)']}},
    {home:'Milan',away:'Galatasaray SK',homeGoals:2,awayGoals:0,score:'2:0',scorers:{home:['F. Hoxha (45., 90+3.)'],away:[]}},
    {home:'Paris Saint-Germain',away:'Sporting CP',homeGoals:1,awayGoals:1,score:'1:1',scorers:{home:['Maik de Bone (76.)'],away:['A. Talal (60.)']}},
    {home:'Red Bull Salzburg',away:'Eintracht Frankfurt',homeGoals:0,awayGoals:1,score:'0:1',scorers:{home:[],away:['P. Teixeira (66.)']}},
    {home:'West Ham',away:'Tottenham',homeGoals:2,awayGoals:4,score:'2:4'}
  ];

  const finalTable=[
    {pos:1,team:'Finn Harps',p:1,w:1,d:0,l:0,gf:4,ga:0,gd:4,pts:3},
    {pos:2,team:'Grenoble Foot 38',p:1,w:1,d:0,l:0,gf:4,ga:1,gd:3,pts:3},
    {pos:3,team:'Roma',p:1,w:1,d:0,l:0,gf:3,ga:0,gd:3,pts:3},
    {pos:4,team:'Liverpool',p:1,w:1,d:0,l:0,gf:4,ga:2,gd:2,pts:3},
    {pos:5,team:'Tottenham',p:1,w:1,d:0,l:0,gf:4,ga:2,gd:2,pts:3},
    {pos:6,team:'Kortrijk',p:1,w:1,d:0,l:0,gf:4,ga:2,gd:2,pts:3},
    {pos:7,team:'Atlético de Madrid',p:1,w:1,d:0,l:0,gf:3,ga:1,gd:2,pts:3},
    {pos:8,team:'Wolfsburg',p:1,w:1,d:0,l:0,gf:3,ga:1,gd:2,pts:3},
    {pos:9,team:'AEK',p:1,w:1,d:0,l:0,gf:2,ga:0,gd:2,pts:3},
    {pos:10,team:'Milan',p:1,w:1,d:0,l:0,gf:2,ga:0,gd:2,pts:3},
    {pos:11,team:'Real Madrid',p:1,w:1,d:0,l:0,gf:3,ga:2,gd:1,pts:3},
    {pos:12,team:'Manchester City',p:1,w:1,d:0,l:0,gf:2,ga:1,gd:1,pts:3},
    {pos:13,team:'Eintracht Frankfurt',p:1,w:1,d:0,l:0,gf:1,ga:0,gd:1,pts:3},
    {pos:14,team:'Barcelona',p:1,w:0,d:1,l:0,gf:2,ga:2,gd:0,pts:1},
    {pos:15,team:'Dynamo Kyiv',p:1,w:0,d:1,l:0,gf:2,ga:2,gd:0,pts:1},
    {pos:16,team:'Cagliari',p:1,w:0,d:1,l:0,gf:1,ga:1,gd:0,pts:1},
    {pos:17,team:'Sporting CP',p:1,w:0,d:1,l:0,gf:1,ga:1,gd:0,pts:1},
    {pos:18,team:'Paris Saint-Germain',p:1,w:0,d:1,l:0,gf:1,ga:1,gd:0,pts:1},
    {pos:19,team:'Celtic',p:1,w:0,d:1,l:0,gf:1,ga:1,gd:0,pts:1},
    {pos:20,team:'Napoli',p:1,w:0,d:1,l:0,gf:0,ga:0,gd:0,pts:1},
    {pos:21,team:'Caen',p:1,w:0,d:1,l:0,gf:0,ga:0,gd:0,pts:1},
    {pos:22,team:"St Patrick's Athletic",p:1,w:0,d:1,l:0,gf:0,ga:0,gd:0,pts:1},
    {pos:23,team:'Bodø/Glimt',p:1,w:0,d:1,l:0,gf:0,ga:0,gd:0,pts:1},
    {pos:24,team:'Manchester United',p:1,w:0,d:0,l:1,gf:2,ga:3,gd:-1,pts:0},
    {pos:25,team:'Monaco',p:1,w:0,d:0,l:1,gf:1,ga:2,gd:-1,pts:0},
    {pos:26,team:'Red Bull Salzburg',p:1,w:0,d:0,l:1,gf:0,ga:1,gd:-1,pts:0},
    {pos:27,team:'Crvena zvezda',p:1,w:0,d:0,l:1,gf:2,ga:4,gd:-2,pts:0},
    {pos:28,team:'West Ham',p:1,w:0,d:0,l:1,gf:2,ga:4,gd:-2,pts:0},
    {pos:29,team:'Dortmund',p:1,w:0,d:0,l:1,gf:2,ga:4,gd:-2,pts:0},
    {pos:30,team:'Young Boys',p:1,w:0,d:0,l:1,gf:1,ga:3,gd:-2,pts:0},
    {pos:31,team:'Villarreal',p:1,w:0,d:0,l:1,gf:1,ga:3,gd:-2,pts:0},
    {pos:32,team:'Benfica',p:1,w:0,d:0,l:1,gf:0,ga:2,gd:-2,pts:0},
    {pos:33,team:'Galatasaray SK',p:1,w:0,d:0,l:1,gf:0,ga:2,gd:-2,pts:0},
    {pos:34,team:'PSV Eindhoven',p:1,w:0,d:0,l:1,gf:1,ga:4,gd:-3,pts:0},
    {pos:35,team:'Bayer Leverkusen',p:1,w:0,d:0,l:1,gf:0,ga:3,gd:-3,pts:0},
    {pos:36,team:'Inter',p:1,w:0,d:0,l:1,gf:0,ga:4,gd:-4,pts:0}
  ];

  const cl=window.FM_CHAMPIONS_LEAGUE['2042-43']||{};
  const leaguePhase=cl.leaguePhase||{};
  const matchday1=leaguePhase.matchday1||{};
  window.FM_CHAMPIONS_LEAGUE['2042-43']={
    ...cl,
    leaguePhase:{
      ...leaguePhase,
      matchday1:{
        ...matchday1,
        status:'1. Spieltag abgeschlossen',
        wednesdayDate:date,
        wednesdayResults,
        finalTable
      }
    }
  };

  const benfica=window.FM_CLUBS.find(x=>x.id==='benfica'||x.name==='Sport Lisboa e Benfica'||x.name==='Benfica');
  if(benfica){
    benfica.latestEuropeanResult={date:'10.09.2042',competition:'UEFA Champions League · Ligaphase',opponent:'AEK',venue:'Heim',score:'0:2'};
    benfica.summary=(benfica.summary||'')+' Benfica startet mit einer 0:2-Heimniederlage gegen AEK in die Champions-League-Ligaphase.';
    benfica.scouting=benfica.scouting||{};
    benfica.scouting.plan=benfica.scouting.plan||[];
    const note='Benfica kommt nach dem 0:2 zuhause gegen AEK ohne Champions-League-Punkt nach Donegal. Der Gegner wird daher eher unter Zugzwang stehen als Finn Harps.';
    if(!benfica.scouting.plan.includes(note))benfica.scouting.plan.push(note);
  }

  const season=(window.FM_SEASONS||[]).find(x=>x&&(x.year===2042||x.season===2042));
  if(season){
    season.referenceDate=date;
    season.snapshotDate=date;
    season.latestHeadline='Champions League: Der 1. Spieltag ist komplett. Finn Harps bleibt nach allen 18 Spielen mit 4:0 Toren Tabellenführer; Benfica startet mit einem 0:2 gegen AEK.';
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.current={played:1,wins:1,draws:0,losses:0,goalsFor:4,goalsAgainst:0,goalDifference:4,points:3,position:1};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='10.09.2042: Champions-League-Spieltag 1 komplett. Mittwoch: Benfica 0:2 AEK, Dynamo Kyiv 2:2 Barcelona, Grenoble 4:1 PSV, Kortrijk 4:2 Crvena zvezda, Man City 2:1 Monaco, Milan 2:0 Galatasaray, PSG 1:1 Sporting CP, Salzburg 0:1 Frankfurt, West Ham 2:4 Tottenham. Finn Harps bleibt mit +4 Tabellenführer.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Europapokal-Rundschau',date,competition:'UEFA Champions League',fixtureDate:date,
    headline:'Mittwoch in Europa: Benfica stolpert, Grenoble glänzt – Harps bleiben ganz oben',
    subheadline:'Der erste Champions-League-Spieltag ist komplett. Benfica verliert vor dem Donegal-Trip 0:2 gegen AEK, Grenoble gewinnt 4:1 gegen PSV und Tottenham setzt sich 4:2 bei West Ham durch. Finn Harps bleibt Tabellenführer.',
    label:'CHAMPIONS LEAGUE · MITTWOCHSRUNDSCHAU · 10.09.2042',
    heroStat:{label:'TABELLENFÜHRER',value:'FINN HARPS',note:'3 Punkte · 4:0 Tore · +4'},
    intro:'Der Mittwoch komplettiert den ersten Spieltag der neuen Ligaphase. Für Finn Harps ist das Ergebnis fast ideal: Niemand übertrifft das 4:0 gegen Inter, und der nächste Gegner Benfica startet mit einer 0:2-Heimniederlage gegen AEK.',
    sections:[
      {title:'Benfica 0:2 AEK',text:'Benfica beginnt die Ligaphase mit einer Heimniederlage. AEK entscheidet das Spiel nach der Pause durch Treffer von Tasgran in Minute 69 und Townsley in Minute 82. Eine Woche vor dem Duell in Donegal steht Benfica damit bereits unter frühem Druck.'},
      {title:'Dynamo Kyiv 2:2 Barcelona',text:'Barcelona nimmt nur einen Punkt aus Kyiv mit. Dynamo führt früh, Barcelona antwortet nach der Pause, doch keine Seite kann das Spiel vollständig an sich ziehen.'},
      {title:'Grenoble 4:1 PSV Eindhoven',text:'Grenoble liefert die größte Überraschung und das höchste Ergebnis des Mittwochs. Mit +3 Tordifferenz springt der französische Klub direkt auf Platz zwei hinter Finn Harps.'},
      {title:'Kortrijk 4:2 Crvena zvezda',text:'Kortrijk startet mit vier Toren und drei Punkten. Labonne erzielt dabei einen Hattrick.'},
      {title:'Manchester City 2:1 Monaco',text:'Monaco geht durch Hajduc in Führung, City dreht die Partie spät. Der entscheidende Treffer fällt in der Nachspielzeit durch ein Eigentor von Joya.'},
      {title:'Milan 2:0 Galatasaray',text:'Milan gewinnt ohne Gegentor. Hoxha trifft zweimal und sorgt für einen souveränen Auftakt.'},
      {title:'Paris Saint-Germain 1:1 Sporting CP',text:'Sporting geht durch Talal in Führung, PSG gleicht durch Maik de Bone aus. Beide starten mit einem Punkt.'},
      {title:'Red Bull Salzburg 0:1 Eintracht Frankfurt',text:'Eintracht holt mit einem knappen Auswärtssieg drei Punkte. Teixeira erzielt das einzige Tor.'},
      {title:'West Ham 2:4 Tottenham',text:'Tottenham gewinnt das Londoner Duell auswärts und schiebt sich mit vier Toren in die Spitzengruppe.'}
    ],
    verdictHeading:'Die erste volle Tabelle hat einen grünen Kopf',
    verdict:'Nach allen 18 Partien bleibt Finn Harps mit 4:0 Toren und der besten Tordifferenz auf Platz eins. Grenoble und Roma folgen mit +3. Am anderen Ende steht Inter nach dem 0:4 in Donegal auf Rang 36. Besonders relevant für den nächsten Spieltag: Benfica reist nach seiner 0:2-Heimniederlage gegen AEK ohne Punkt nach Irland.',
    results:wednesdayResults,
    table:finalTable,
    sources:['Champions-League-Ergebnisse · Mittwoch, 10.09.2042','Champions-League-Tabelle · nach Abschluss des 1. Spieltags']
  });

  upsert(window.FM_NEWS,{
    id:'2042-09-10-champions-league-wednesday-roundup',date,season:2042,category:'Champions League',accent:'blue',featured:false,
    eyebrow:'1. SPIELTAG KOMPLETT',
    title:'Benfica verliert – Finn Harps bleiben Tabellenführer',
    summary:'AEK gewinnt 2:0 bei Benfica, Grenoble schlägt PSV 4:1 und Tottenham siegt 4:2 bei West Ham. Nach allen 18 Partien steht Finn Harps weiter auf Platz eins.',
    href:`presse.html?id=${reportId}`,
    entities:['champions-league','finn-harps','benfica','aek','grenoble','tottenham','season-2042']
  });
})();