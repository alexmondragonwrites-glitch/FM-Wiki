(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-03';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {
      id:'2042-world-cup-round-of-16-belgium-japan',stage:'Achtelfinale',date,
      home:'Belgien',away:'Japan',score:'2:2',homeScore:2,awayScore:2,winner:'Japan',status:'beendet',
      decidedBy:'Elfmeterschießen',penalties:'5:6',upset:true,
      scorers:{home:['Marian Peterges 43','E. Pierre 90+1'],away:['N. Doan 80','H. Oiwa 90+3 (Elfmeter)']},
      note:'Belgien scheidet nach 2:2 mit 5:6 im Elfmeterschießen gegen Japan aus. Die belgische Serie von 13 Spielen ohne Niederlage endet.',
      harpsConnection:{player:'Marian Peterges',relation:'ehemaliger Finn-Harps-Spieler',goals:1,note:'Peterges bringt Belgien in der 43. Minute in Führung, erlebt aber das bittere Aus im Elfmeterschießen.'}
    },
    {
      id:'2042-world-cup-round-of-16-serbia-south-korea',stage:'Achtelfinale',date,
      home:'Serbien',away:'Südkorea',score:'2:2',homeScore:2,awayScore:2,winner:'Südkorea',status:'beendet',
      decidedBy:'Elfmeterschießen',penalties:'2:4',
      scorers:{home:['P. Cooper 82','G. Gajić 87 (Elfmeter)'],away:['Baek Jin-Hyuk 46','Hwang Hyun-Joon 70']},
      note:'Südkorea setzt sich nach 2:2 mit 4:2 im Elfmeterschießen gegen Serbien durch.'
    }
  ];

  wc.status='K.-o.-Phase · Achtelfinale';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  results.forEach(result=>upsert(wc.knockoutResults,result));

  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=(wc.resultsByDate[date]||[]).filter(existing=>!results.some(result=>result.id===existing.id)).concat(results);

  wc.knockoutPairings=wc.knockoutPairings||[];
  results.forEach(result=>{
    const index=wc.knockoutPairings.findIndex(item=>item&&(item.id===result.id||(item.home===result.home&&item.away===result.away&&item.stage==='Achtelfinale')));
    const pairing={id:result.id,stage:'Achtelfinale',date,home:result.home,away:result.away,status:'beendet',score:result.score,winner:result.winner,decidedBy:result.decidedBy,penalties:result.penalties};
    if(index>=0)wc.knockoutPairings[index]=Object.assign({},wc.knockoutPairings[index],pairing);else wc.knockoutPairings.push(pairing);
  });

  wc.quarterFinalists=wc.quarterFinalists||[];
  ['Japan','Südkorea'].forEach(team=>{if(!wc.quarterFinalists.includes(team))wc.quarterFinalists.push(team);});

  wc.july3LateRoundOf16Summary={
    date,stage:'Achtelfinale',
    headline:'Bitteres Belgien-Aus: Japan gewinnt 6:5 im Elfmeterschießen. Südkorea setzt sich ebenfalls vom Punkt gegen Serbien durch.',
    belgium:{result:'Belgien 2:2 Japan',penalties:'5:6',streakEnded:'13 Spiele ohne Niederlage',harps:'Marian Peterges trifft zum 1:0, scheidet aber mit Belgien aus.'},
    southKorea:{result:'Serbien 2:2 Südkorea',penalties:'2:4'}
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-03-peterges-belgium-japan-world-cup',date,player:'Marian Peterges',type:'nationalteam',
    title:'Peterges trifft, Belgien scheitert dennoch dramatisch an Japan',
    detail:'Marian Peterges erzielt in der 43. Minute die belgische Führung. Nach einem 2:2 geht das Achtelfinale ins Elfmeterschießen, wo Japan 6:5 gewinnt. Belgiens Serie von 13 Spielen ohne Niederlage endet.'
  });

  const report={
    id:'2042-07-03-belgium-out-japan-peterges-heartbreak',type:'WM-Achtelfinale',date,competition:'FIFA World Cup 2042',
    headline:'Bitter für Peterges und Belgien: Japan gewinnt den Elfmeterkrimi',
    subheadline:'Marian Peterges trifft zur Führung, Belgien rettet sich spät ins 2:2 und scheidet dann trotzdem mit 5:6 im Elfmeterschießen aus. Südkorea erreicht ebenfalls vom Punkt das Viertelfinale.',
    label:'FIFA WORLD CUP 2042 · ACHTELFINALE · 3. JULI',
    heroStat:{label:'ELFMETERDRAMA',value:'BELGIEN 2:2 JAPAN · 5:6 i.E.',note:'Belgiens Serie von 13 Spielen ohne Niederlage endet'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Für einen der bislang stabilsten Turnierfavoriten ist die WM vorbei. Belgien scheidet nach einem dramatischen 2:2 mit 5:6 im Elfmeterschießen gegen Japan aus. Besonders bitter aus Finn-Harps-Sicht: Ex-Harp Marian Peterges bringt Belgien in Führung, kann das spätere Aus aber nicht verhindern. Südkorea setzt sich im zweiten Elfmeterschießen des Tages gegen Serbien durch.',
    sections:[
      {title:'Peterges trifft, Belgien verliert trotzdem',text:'Marian Peterges erzielt in der 43. Minute das 1:0 für Belgien. Japan gleicht in der 80. Minute durch N. Doan aus. E. Pierre bringt Belgien in der Nachspielzeit erneut in Führung, doch H. Oiwa verwandelt in Minute 90+3 einen Elfmeter zum 2:2. Im anschließenden Elfmeterschießen setzt sich Japan 6:5 durch.'},
      {title:'Ein Favorit weniger',text:'Belgien war bis zu diesem Achtelfinale seit 13 Spielen ungeschlagen und gehörte nach seiner starken Gruppenphase zum engeren Favoritenkreis. Dieses Turnier bleibt jedoch erbarmungslos mit großen Namen: Nach Argentinien, Portugal, Frankreich, Italien und England trifft es nun auch Belgien.'},
      {title:'Südkorea bleibt im Rennen',text:'Serbien und Südkorea trennen sich ebenfalls 2:2. Baek Jin-Hyuk und Hwang Hyun-Joon bringen Südkorea zunächst 2:0 in Führung, bevor Serbien spät zurückkommt. Im Elfmeterschießen behält Südkorea mit 4:2 die Nerven und erreicht das Viertelfinale.'},
      {title:'Harps-Spuren werden weniger, aber nicht leiser',text:'Mit Peterges scheidet eine weitere große Figur aus der Finn-Harps-Geschichte aus. Gleichzeitig bleiben aktuelle Harps-Spieler mit Irland, Mexiko, Spanien und Brasilien weiterhin mitten im Titelrennen.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Peterges trifft und trotzdem ist Schluss. Das ist die brutalste Art, ein Turnier zu verlassen.“',
      '„Belgien war 13 Spiele ungeschlagen und dann entscheidet ein Elfmeterschießen alles.“',
      '„Japan hat erst Portugal und jetzt Belgien überlebt. Das ist kein Zufallslauf mehr.“'
    ]},
    sources:['FM World Cup 2042 · Belgien 2:2 Japan · Japan 6:5 im Elfmeterschießen','FM World Cup 2042 · Serbien 2:2 Südkorea · Südkorea 4:2 im Elfmeterschießen']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-03-world-cup-belgium-japan-serbia-korea',date,type:'world-cup',
    title:'Belgien scheidet im Elfmeterkrimi gegen Japan aus',
    text:'Marian Peterges trifft beim 2:2 gegen Japan, doch Belgien verliert das Elfmeterschießen 5:6. Südkorea schlägt Serbien nach 2:2 ebenfalls vom Punkt mit 4:2.',
    href:'presse.html?id=2042-07-03-belgium-out-japan-peterges-heartbreak'
  });
})();