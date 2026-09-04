(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-02';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {
      id:'2042-world-cup-round-of-16-england-mexico',stage:'Achtelfinale',date,
      home:'England',away:'Mexiko',score:'2:5',homeScore:2,awayScore:5,winner:'Mexiko',status:'beendet',
      note:'Mexiko wirft Co-Gastgeber England mit einem deutlichen 5:2 aus der WM und bleibt damit seit zehn Spielen ungeschlagen.',
      harps:{
        player:'Emerson Escárcega',minutes:57,rating:6.9,goals:0,assists:0,xg:0.06,xa:0.00,shots:0,
        role:'Hängende Spitze',
        note:'Escárcega startet, wird mehrfach gefoult und nach einer ordentlichen Vorstellung in der 57. Minute ausgewechselt.'
      }
    },
    {
      id:'2042-world-cup-round-of-16-netherlands-ivory-coast',stage:'Achtelfinale',date,
      home:'Niederlande',away:'Elfenbeinküste',score:'3:1',homeScore:3,awayScore:1,winner:'Niederlande',status:'beendet',
      note:'Die Niederlande beenden den Überraschungslauf der Elfenbeinküste mit einem 3:1.'
    }
  ];

  wc.status='K.-o.-Phase · Achtelfinale';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  results.forEach(result=>upsert(wc.knockoutResults,result));

  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;

  wc.knockoutPairings=wc.knockoutPairings||[];
  results.forEach(result=>{
    const index=wc.knockoutPairings.findIndex(item=>item&&(item.id===result.id||(item.home===result.home&&item.away===result.away&&item.stage==='Achtelfinale')));
    const pairing={id:result.id,stage:'Achtelfinale',date,home:result.home,away:result.away,status:'beendet',score:result.score,winner:result.winner};
    if(index>=0)wc.knockoutPairings[index]=Object.assign({},wc.knockoutPairings[index],pairing);else wc.knockoutPairings.push(pairing);
  });

  wc.quarterFinalists=wc.quarterFinalists||[];
  ['Mexiko','Niederlande'].forEach(team=>{if(!wc.quarterFinalists.includes(team))wc.quarterFinalists.push(team);});

  wc.july2RoundOf16Summary={
    date,stage:'Achtelfinale',
    headline:'Mexikos Traum lebt: 5:2 gegen England. Die Niederlande schlagen die Elfenbeinküste 3:1.',
    mexico:{result:'England 2:5 Mexiko',streak:'10 Spiele ohne Niederlage',harps:'Emerson Escárcega startet und spielt 57 Minuten.'},
    netherlands:{result:'Niederlande 3:1 Elfenbeinküste'}
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-02-escarcega-mexico-england-world-cup',date,player:'Emerson Escárcega',type:'nationalteam',
    title:'Escárcegas WM-Traum lebt nach 5:2 gegen England weiter',
    detail:'Escárcega startet als hängende Spitze beim 5:2 Mexikos gegen England, spielt 57 Minuten und erhält die Note 6,9. Ohne Tor oder Vorlage bleibt sein persönlicher Scorerbogen diesmal leer, Mexiko zieht aber eindrucksvoll ins Viertelfinale ein.'
  });

  const report={
    id:'2042-07-02-mexico-5-2-england-escarcega-dream-lives',type:'WM-Achtelfinale',date,competition:'FIFA World Cup 2042',
    headline:'Escárcegas Traum lebt: Mexiko zerlegt England 5:2',
    subheadline:'Der Co-Gastgeber ist raus. Mexiko bleibt seit zehn Spielen ungeschlagen und erreicht mit einem Statement-Sieg das Viertelfinale.',
    label:'FIFA WORLD CUP 2042 · ACHTELFINALE · 2. JULI',
    heroStat:{label:'STATEMENT',value:'ENGLAND 2:5 MEXIKO',note:'Mexiko steht im Viertelfinale'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Emerson Escárcegas WM-Traum geht weiter. Mexiko schlägt Co-Gastgeber England im Achtelfinale mit 5:2 und bestätigt damit endgültig, dass der bisherige Turnierlauf mehr ist als nur eine schöne Serie. Am selben Tag setzt sich die Niederlande mit 3:1 gegen die Elfenbeinküste durch.',
    sections:[
      {title:'Mexiko liefert das nächste Ausrufezeichen',text:'Nach der makellosen Gruppenphase und dem klaren 4:1 gegen Südafrika legt Mexiko im Achtelfinale nach. Das 5:2 gegen England ist nicht nur ein Weiterkommen, sondern ein Sieg gegen einen Gastgeber mit enormer individueller Qualität. Mexikos Serie wächst auf zehn Spiele ohne Niederlage.'},
      {title:'Escárcega diesmal ohne Scorer, aber weiter im Rennen',text:'Emerson Escárcega beginnt als hängende Spitze, spielt 57 Minuten und erhält die Note 6,9. Er bleibt ohne Tor und Vorlage, wird während seiner Einsatzzeit aber wiederholt gefoult. Nach seinen starken vorherigen WM-Auftritten muss er diesmal nicht der entscheidende Mann sein: Mexiko gewinnt trotzdem deutlich.'},
      {title:'Vom Außenseiter zum Titelkandidaten',text:'Spätestens nach fünf Toren gegen England kann Mexiko nicht mehr nur als Geheimfavorit gelten. Die Mannschaft kombiniert Ergebnisse, Selbstvertrauen und eine inzwischen bemerkenswerte Serie. Escárcegas persönlicher Traum, nach dem verlorenen Champions-League-Finale mit Finn Harps stattdessen bei der WM nach dem größten Titel zu greifen, bleibt damit vollständig intakt.'},
      {title:'Niederlande beenden den Lauf der Elfenbeinküste',text:'Im zweiten Achtelfinale des Tages gewinnt die Niederlande 3:1 gegen die Elfenbeinküste. Der Argentinien-Bezwinger scheidet damit aus, während die Niederlande ebenfalls das Viertelfinale erreichen.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Fünf Tore gegen England. Mexiko ist kein Geheimfavorit mehr.“',
      '„Escárcega muss diesmal nicht einmal treffen und trotzdem marschieren sie weiter.“',
      '„Erst Champions-League-Finale, jetzt WM-Viertelfinale: Escárcegas Saison weigert sich einfach, leise zu werden.“'
    ]},
    sources:['FM World Cup 2042 · England 2:5 Mexiko · Achtelfinale','FM-Länderspielbericht Emerson Escárcega · 57 Minuten · Note 6,9','FM World Cup 2042 · Niederlande 3:1 Elfenbeinküste · Achtelfinale']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-02-world-cup-mexico-england-netherlands-ivory-coast',date,type:'world-cup',
    title:'Mexiko schlägt England 5:2 · Escárcegas WM-Traum lebt',
    text:'Mexiko erreicht mit einem 5:2 gegen Co-Gastgeber England das Viertelfinale. Emerson Escárcega spielt 57 Minuten. Die Niederlande schlagen die Elfenbeinküste 3:1.',
    href:'presse.html?id=2042-07-02-mexico-5-2-england-escarcega-dream-lives'
  });
})();