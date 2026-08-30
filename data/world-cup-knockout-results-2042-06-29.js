(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});
  const date='2042-06-29';

  const completed=[
    {
      id:'2042-world-cup-round2-dr-congo-germany',stage:'2. Runde',date,
      home:'DR Kongo',away:'Deutschland',score:'2:7',homeScore:2,awayScore:7,winner:'Deutschland',status:'beendet',
      scorers:{home:['E. Mwamba 50','A. Mbombo 55'],away:['N. Aderholz 9 (Elfmeter)','N. Aderholz 33','N. Aderholz 39','B. Hoppe 56','N. Aderholz 64','N. Aderholz 70','N. Aderholz 84']},
      note:'Deutschland erreicht mit einem 7:2 die nächste Runde. N. Aderholz erzielt sechs Treffer.'
    },
    {
      id:'2042-world-cup-round2-morocco-saudi-arabia',stage:'2. Runde',date,
      home:'Marokko',away:'Saudi-Arabien',score:'1:2',homeScore:1,awayScore:2,winner:'Saudi-Arabien',status:'beendet',upset:true,
      scorers:{home:['M. El Fassi 90+4'],away:['A. Al-Dawsari 11','A. Al-Dawsari 74']},
      note:'A. Al-Dawsari trifft doppelt und Saudi-Arabien wirft Marokko aus dem Turnier.'
    },
    {
      id:'2042-world-cup-round2-france-austria',stage:'2. Runde',date,
      home:'Frankreich',away:'Österreich',score:'2:3',homeScore:2,awayScore:3,winner:'Österreich',status:'beendet',upset:true,
      scorers:{home:['N. Boulet 11','N. Boulet 44'],away:['J. Lenz 1','P. Wagner 61 (Elfmeter)','D. Berger 69']},
      redCards:['Frankreich: M. Leon 40'],
      note:'Der Titelverteidiger Frankreich scheidet nach einem 2:3 gegen Österreich aus.'
    }
  ];

  const irelandItaly={
    id:'2042-world-cup-round2-ireland-italy',stage:'2. Runde',date,time:'19:00',
    home:'Irland',away:'Italien',status:'offen',note:'Letzte noch offene Partie der 2. Runde am 29. Juni.'
  };

  wc.status='K.-o.-Phase · 2. Runde';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  completed.forEach(result=>upsert(wc.knockoutResults,result));
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=completed;

  wc.knockoutPairings=wc.knockoutPairings||[];
  completed.forEach(result=>{
    const index=wc.knockoutPairings.findIndex(item=>item&&(item.id===result.id||(item.home===result.home&&item.away===result.away&&item.stage==='2. Runde')));
    const pairing={id:result.id,stage:'2. Runde',date,home:result.home,away:result.away,status:'beendet',score:result.score,winner:result.winner};
    if(index>=0)wc.knockoutPairings[index]=Object.assign({},wc.knockoutPairings[index],pairing);else wc.knockoutPairings.push(pairing);
  });
  {
    const index=wc.knockoutPairings.findIndex(item=>item&&(item.id===irelandItaly.id||(item.home==='Irland'&&item.away==='Italien'&&item.stage==='2. Runde')));
    if(index>=0)wc.knockoutPairings[index]=Object.assign({},wc.knockoutPairings[index],irelandItaly);else wc.knockoutPairings.push(irelandItaly);
  }

  wc.june29KnockoutSummary={
    date,stage:'2. Runde',
    headline:'Frankreich ist raus: Österreich schlägt den Titelverteidiger 3:2. Deutschland zerlegt die DR Kongo 7:2, Saudi-Arabien schlägt Marokko 2:1.',
    surprises:['Österreich 3:2 gegen Titelverteidiger Frankreich','Saudi-Arabien 2:1 gegen Marokko'],
    spectacle:'Deutschland 7:2 DR Kongo · N. Aderholz mit sechs Toren',
    pending:'Irland gegen Italien · 19:00 · letzte offene Partie der 2. Runde'
  };

  const report={
    id:'2042-06-29-world-cup-round2-france-out-ireland-italy-pending',type:'WM-K.-o.-Roundup',date,competition:'FIFA World Cup 2042',
    headline:'Titelverteidiger raus: Österreich schockt Frankreich, jetzt fehlt nur noch Irland gegen Italien',
    subheadline:'Deutschland gewinnt 7:2 gegen die DR Kongo, Saudi-Arabien setzt seine Überraschungs-WM fort. Um 19:00 fällt im Duell Irland gegen Italien das letzte Ticket dieser Runde.',
    label:'FIFA WORLD CUP 2042 · 2. RUNDE · 29. JUNI',
    heroStat:{label:'PAUKENSCHLAG',value:'FRANKREICH 2:3 ÖSTERREICH',note:'Der Titelverteidiger ist ausgeschieden'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Der nächste große Favorit ist verschwunden. Österreich gewinnt 3:2 gegen Frankreich und beendet die Titelverteidigung bereits in der 2. Runde. Zuvor fertigt Deutschland die DR Kongo 7:2 ab, während Saudi-Arabien Marokko 2:1 schlägt. Danach bleibt nur noch Irland gegen Italien offen.',
    sections:[
      {title:'Österreich beendet Frankreichs Titelverteidigung',text:'J. Lenz trifft bereits in der 1. Minute. N. Boulet dreht das Spiel mit Toren in Minute 11 und 44 zunächst für Frankreich, doch nach der Roten Karte für M. Leon in Minute 40 schlägt Österreich zurück. P. Wagner verwandelt in Minute 61 einen Elfmeter, D. Berger erzielt in Minute 69 das 3:2.'},
      {title:'Deutschland im Torrausch',text:'Deutschland schlägt die DR Kongo 7:2. N. Aderholz erzielt sechs Treffer, darunter einen Elfmeter in Minute 9. B. Hoppe steuert in Minute 56 das siebte deutsche Tor bei.'},
      {title:'Saudi-Arabien schreibt die nächste Überraschung',text:'A. Al-Dawsari trifft in Minute 11 und 74 zum 2:1 gegen Marokko. M. El Fassi verkürzt erst in der Nachspielzeit. Damit zieht Saudi-Arabien in die nächste Runde ein.'},
      {title:'Ein Ticket ist noch frei',text:'Um 19:00 trifft Irland auf Italien. Es ist die letzte offene Begegnung der 2. Runde. Für Finn Harps steckt zusätzliche Spannung darin: Irlands großer Harps-Block trifft auf die italienischen Harps-Spieler Daniele Di Maio und Romano Maisto.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Argentinien, Portugal und jetzt Frankreich. Bei dieser WM gibt es keine Sicherheitszone für Favoriten.“',
      '„Sechs Tore von Aderholz in einem K.-o.-Spiel sind völlig absurd.“',
      '„Jetzt noch Irland gegen Italien. Dieses Turnier gönnt sich wirklich keine ruhige Nacht.“'
    ]},
    sources:['FM World Cup 2042 · Spiele & Ergebnisse · 29.06.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);
  upsert(window.FM_NEWS,{
    id:'2042-06-29-world-cup-round2-france-out',date,type:'world-cup',
    title:'Frankreich scheidet gegen Österreich aus · Irland gegen Italien beschließt die Runde',
    text:'Österreich schlägt Titelverteidiger Frankreich 3:2. Deutschland gewinnt 7:2 gegen die DR Kongo, Saudi-Arabien 2:1 gegen Marokko. Um 19:00 folgt Irland gegen Italien.',
    href:'presse.html?id=2042-06-29-world-cup-round2-france-out-ireland-italy-pending'
  });
})();