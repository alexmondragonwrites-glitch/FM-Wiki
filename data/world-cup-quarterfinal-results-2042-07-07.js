(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-07';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const netherlandsKorea={
    id:'2042-world-cup-quarterfinal-netherlands-south-korea',stage:'Viertelfinale',date,
    home:'Niederlande',away:'Südkorea',score:'2:2 (4:3 i.E.)',homeScore:2,awayScore:2,
    winner:'Niederlande',status:'beendet',penalties:{home:4,away:3},
    venue:'Ibrox Stadium',attendance:51286,
    scorers:{home:['F. Sierskma 31','E. Musah 67'],away:['Noh Tae-Ho 45','Noh Tae-Ho 68']},
    note:'Südkorea gleicht zweimal aus, doch die Niederlande setzen sich nach 2:2 mit 4:3 im Elfmeterschießen durch und erreichen das Halbfinale.'
  };

  const mexicoJapan={
    id:'2042-world-cup-quarterfinal-mexico-japan',stage:'Viertelfinale',date,
    home:'Mexiko',away:'Japan',score:'4:1',homeScore:4,awayScore:1,winner:'Mexiko',status:'beendet',
    venue:'Wembley',attendance:90000,
    scorers:{home:['R. López 37','Emerson Escárcega 40','R. López 70 (Elfmeter)','I. Barragán 90+1'],away:['K. Uematsu 45+1']},
    harps:{
      player:'Emerson Escárcega',minutes:67,rating:7.1,goals:1,assists:0,xg:0.60,xa:0.07,
      role:'Hängende Spitze',
      note:'Escárcega trifft in Minute 40 per Volley aus kurzer Distanz. Der Ball geht an den Innenpfosten und ins Tor; der Treffer wird nach Videobeweis anerkannt.'
    },
    note:'Mexiko gewinnt überzeugend 4:1 gegen Japan und zieht ins Halbfinale ein. Nach dem 5:2 gegen England folgt damit das nächste klare K.-o.-Statement.'
  };

  const results=[netherlandsKorea,mexicoJapan];

  wc.status='K.-o.-Phase · Viertelfinale';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  results.forEach(result=>upsert(wc.knockoutResults,result));

  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;

  wc.quarterFinals=wc.quarterFinals||[];
  results.forEach(result=>{
    const index=wc.quarterFinals.findIndex(item=>item&&item.home===result.home&&item.away===result.away);
    const update={stage:'Viertelfinale',date,home:result.home,away:result.away,status:'beendet',score:result.score,winner:result.winner};
    if(index>=0)wc.quarterFinals[index]=Object.assign({},wc.quarterFinals[index],update);else wc.quarterFinals.push(update);
  });

  wc.semiFinalists=wc.semiFinalists||[];
  ['Niederlande','Mexiko'].forEach(team=>{if(!wc.semiFinalists.includes(team))wc.semiFinalists.push(team);});
  wc.semiFinals=wc.semiFinals||[];
  {
    const semi={stage:'Halbfinale',home:'Niederlande',away:'Mexiko',status:'angesetzt',basis:'Sieger der ersten beiden Viertelfinals'};
    const index=wc.semiFinals.findIndex(item=>item&&((item.home==='Niederlande'&&item.away==='Mexiko')||(item.home==='Mexiko'&&item.away==='Niederlande')));
    if(index>=0)wc.semiFinals[index]=Object.assign({},wc.semiFinals[index],semi);else wc.semiFinals.push(semi);
  }

  wc.july7QuarterFinalSummary={
    date,stage:'Viertelfinale',
    headline:'Mexiko und die Niederlande stehen im WM-Halbfinale.',
    results:['Niederlande 2:2 Südkorea · 4:3 i.E.','Mexiko 4:1 Japan'],
    harpsHeadline:'Emerson Escárcega trifft beim 4:1 gegen Japan und hält seinen Traum vom WM-Titel am Leben.',
    firstSemiFinal:'Niederlande gegen Mexiko'
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-07-escarcega-mexico-japan-world-cup',date,player:'Emerson Escárcega',type:'nationalteam',
    title:'Escárcega trifft Mexiko ins WM-Halbfinale',
    detail:'Beim 4:1 gegen Japan spielt Escárcega 67 Minuten als hängende Spitze, erzielt in Minute 40 das 2:0 und erhält die Note 7,1. Sein Treffer wird nach Videobeweis anerkannt. Mexiko steht im Halbfinale.'
  });

  const report={
    id:'2042-07-07-world-cup-quarterfinals-mexico-netherlands',type:'WM-Viertelfinale',date,competition:'FIFA World Cup 2042',
    headline:'Escárcegas Traum lebt weiter: Mexiko und Niederlande stehen im Halbfinale',
    subheadline:'Mexiko schlägt Japan überzeugend 4:1, Escárcega trifft. Zuvor überleben die Niederlande ein dramatisches 2:2 gegen Südkorea und gewinnen 4:3 im Elfmeterschießen.',
    label:'FIFA WORLD CUP 2042 · VIERTELFINALE · 7. JULI',
    heroStat:{label:'HALBFINALE',value:'NIEDERLANDE – MEXIKO',note:'Die ersten beiden Halbfinalisten stehen fest'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Die ersten beiden Viertelfinals sind gespielt. Die Niederlande müssen gegen Südkorea bis ins Elfmeterschießen, setzen sich dort aber 4:3 durch. Mexiko liefert dagegen das nächste klare Statement und schlägt Japan im Wembley-Stadion 4:1. Emerson Escárcega erzielt das zwischenzeitliche 2:0 und steht damit mit Mexiko im WM-Halbfinale.',
    sections:[
      {title:'Südkorea zwingt die Niederlande bis zum letzten Schuss',text:'F. Sierskma bringt die Niederlande in Minute 31 in Führung, Noh Tae-Ho gleicht kurz vor der Pause aus. E. Musah stellt in Minute 67 erneut auf niederländische Führung, doch nur eine Minute später trifft Noh Tae-Ho zum 2:2. Nach Verlängerung fällt die Entscheidung vom Punkt: Die Niederlande gewinnen 4:3 im Elfmeterschießen.'},
      {title:'Mexiko bleibt auf Titelkurs',text:'Mexiko schlägt Japan vor 90.000 Zuschauern in Wembley 4:1. R. López trifft in Minute 37 und später per Elfmeter in Minute 70, Emerson Escárcega erhöht in Minute 40 auf 2:0, I. Barragán setzt in der Nachspielzeit den Schlusspunkt. Japan kommt durch K. Uematsu kurz vor der Pause zum zwischenzeitlichen 1:2.'},
      {title:'Escárcega liefert wieder',text:'Nach seinem scorerlosen Auftritt beim 5:2 gegen England steht Escárcega diesmal wieder selbst auf der Anzeigetafel. Der 32-Jährige spielt 67 Minuten als hängende Spitze, trifft in Minute 40 per Volley aus kurzer Distanz und erhält die Note 7,1. Der Treffer wird nach Videobeweis anerkannt.'},
      {title:'Das erste Halbfinale steht',text:'Mit den Siegen der Niederlande und Mexikos ist die erste Halbfinalpaarung fix: Niederlande gegen Mexiko. Für Escárcega lebt damit die außergewöhnliche Geschichte weiter, nach dem verlorenen Champions-League-Finale mit Finn Harps nun mit Mexiko nach dem größten Titel im Nationalmannschaftsfußball zu greifen.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Mexiko schießt erst England fünf und Japan vier. Das ist längst kein Außenseiterlauf mehr.“',
      '„Südkorea hat alles verlangt, aber die Niederlande überleben wieder ein Spiel auf Messers Schneide.“',
      '„Escárcega ist noch zwei Siege davon entfernt, aus dem Champions-League-Frust einen WM-Traum zu machen.“'
    ]},
    sources:['FM World Cup 2042 · Niederlande 2:2 Südkorea, 4:3 i.E. · Viertelfinale','FM World Cup 2042 · Mexiko 4:1 Japan · Viertelfinale','FM-Länderspielbericht Emerson Escárcega · 67 Minuten · 1 Tor · Note 7,1']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-07-world-cup-quarterfinals-mexico-netherlands',date,type:'world-cup',
    title:'Mexiko und Niederlande im Halbfinale · Escárcega trifft erneut',
    text:'Mexiko schlägt Japan 4:1, Emerson Escárcega erzielt das 2:0. Die Niederlande setzen sich nach einem 2:2 mit 4:3 im Elfmeterschießen gegen Südkorea durch. Im Halbfinale treffen Niederlande und Mexiko aufeinander.',
    href:`presse.html?id=${report.id}`
  });
})();