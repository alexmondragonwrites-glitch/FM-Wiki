(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});
  const date='2042-06-28';

  const june27=[
    {id:'2042-world-cup-round2-serbia-nigeria',stage:'2. Runde',home:'Serbien',away:'Nigeria',score:'3:2',homeScore:3,awayScore:2,winner:'Serbien',status:'beendet',note:'Ljubomir Krasić erzielt zwei Treffer.'},
    {id:'2042-world-cup-round2-colombia-belgium',stage:'2. Runde',home:'Kolumbien',away:'Belgien',score:'0:3',homeScore:0,awayScore:3,winner:'Belgien',status:'beendet'},
    {id:'2042-world-cup-round2-japan-portugal',stage:'2. Runde',home:'Japan',away:'Portugal',score:'0:0 n.V. · 4:3 i.E.',homeScore:0,awayScore:0,winner:'Japan',status:'beendet',penalties:'4:3',upset:true,note:'Japan setzt sich nach torlosen 120 Minuten im Elfmeterschießen durch.'},
    {id:'2042-world-cup-round2-south-korea-sweden',stage:'2. Runde',home:'Südkorea',away:'Schweden',score:'2:0',homeScore:2,awayScore:0,winner:'Südkorea',status:'beendet',upset:true,note:'Baek Soon-Hak und Song Sang-Ho treffen.'}
  ];

  const june28=[
    {id:'2042-world-cup-round2-mali-denmark',stage:'2. Runde',home:'Mali',away:'Dänemark',score:'1:3 n.V.',homeScore:1,awayScore:3,winner:'Dänemark',status:'beendet',note:'Dänemark benötigt die Verlängerung.'},
    {id:'2042-world-cup-round2-switzerland-australia',stage:'2. Runde',home:'Schweiz',away:'Australien',score:'2:0',homeScore:2,awayScore:0,winner:'Schweiz',status:'beendet',harps:{player:'Amir Mašić',minutes:90,rating:7.6,assists:1,passes:'45',passCompletion:88,note:'Vorlage und starke 90 Minuten als defensiver Mittelfeldspieler.'}},
    {id:'2042-world-cup-round2-brazil-ukraine',stage:'2. Runde',home:'Brasilien',away:'Ukraine',score:'3:2',homeScore:3,awayScore:2,winner:'Brasilien',status:'beendet',note:'Brasilien führt 2:0, die Ukraine kommt auf 2:2 heran, ehe Mário Lúcio erneut trifft.',harps:{player:'Paulo Henrique',minutes:90,rating:6.4,shotsFacedOnTarget:4,saves:2,savePct:50,note:'Zwei Gegentore und nur zwei Paraden bei vier Schüssen aufs Tor.'}},
    {id:'2042-world-cup-round2-spain-senegal',stage:'2. Runde',home:'Spanien',away:'Senegal',score:'0:0 n.V. · 4:3 i.E.',homeScore:0,awayScore:0,winner:'Spanien',status:'beendet',penalties:'4:3',note:'Spanien entgeht nach torlosen 120 Minuten erst im Elfmeterschießen dem Aus.'}
  ];

  wc.status='K.-o.-Phase · 2. Runde';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  [...june27,...june28].forEach(result=>upsert(wc.knockoutResults,result));
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate['2042-06-27']=june27;
  wc.resultsByDate['2042-06-28']=june28;
  wc.knockoutPairings=wc.knockoutPairings||[];
  [...june27,...june28].forEach(result=>{
    const index=wc.knockoutPairings.findIndex(item=>item&&(item.id===result.id||(item.home===result.home&&item.away===result.away&&item.stage==='2. Runde')));
    const pairing={id:result.id,stage:'2. Runde',home:result.home,away:result.away,status:'beendet',score:result.score,winner:result.winner,date:result.id.includes('serbia')||result.id.includes('colombia')||result.id.includes('japan')||result.id.includes('south-korea')?'2042-06-27':'2042-06-28'};
    if(index>=0)wc.knockoutPairings[index]=Object.assign({},wc.knockoutPairings[index],pairing);else wc.knockoutPairings.push(pairing);
  });

  wc.june28KnockoutSummary={
    date,stage:'2. Runde',
    headline:'Japan wirft Portugal im Elfmeterschießen raus, Südkorea schlägt Schweden. Spanien braucht gegen Senegal ebenfalls Elfmeter, Brasilien übersteht ein 3:2 gegen die Ukraine.',
    surprises:['Japan 4:3 i.E. gegen Portugal','Südkorea 2:0 gegen Schweden','Spanien erst 4:3 i.E. gegen Senegal'],
    harpsHeadline:'Amir Mašić liefert beim 2:0 der Schweiz gegen Australien eine Vorlage. Paulo Henrique erlebt beim 3:2 Brasiliens gegen die Ukraine einen unruhigen Abend.'
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-28-masic-switzerland-australia-world-cup',date,player:'Amir Mašić',type:'nationalteam',
    title:'Mašić bereitet beim Schweizer 2:0 einen Treffer vor',
    detail:'90 Minuten gegen Australien, eine Vorlage, Note 7,6 und 88 Prozent Passquote.'
  });
  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-28-paulo-henrique-brazil-ukraine-world-cup',date,player:'Paulo Henrique',type:'nationalteam',
    title:'Paulo Henrique zieht mit Brasilien weiter',
    detail:'Brasilien gewinnt 3:2 gegen die Ukraine. Paulo Henrique spielt 90 Minuten, erhält Note 6,4 und pariert zwei von vier Schüssen aufs Tor.'
  });

  const report={
    id:'2042-06-28-world-cup-round2-japan-portugal-spain-scare',type:'WM-K.-o.-Roundup',date,competition:'FIFA World Cup 2042',
    headline:'Nächste Überraschungen: Japan wirft Portugal raus, Spanien zittert weiter',
    subheadline:'Die K.-o.-Runde bleibt wild. Südkorea eliminiert Schweden, Dänemark braucht Verlängerung und Brasilien muss gegen die Ukraine bis zum Ende arbeiten.',
    label:'FIFA WORLD CUP 2042 · 2. RUNDE · 27./28. JUNI',
    heroStat:{label:'ÜBERRASCHUNG',value:'JAPAN 4:3 i.E. PORTUGAL',note:'0:0 nach 120 Minuten'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Nach dem Aus Argentiniens verliert die WM den nächsten großen Namen. Japan hält Portugal 120 Minuten torlos und gewinnt das Elfmeterschießen 4:3. Südkorea schlägt Schweden 2:0. Auch Spanien wankt, setzt sich aber nach einem 0:0 gegen Senegal mit 4:3 im Elfmeterschießen durch.',
    sections:[
      {title:'Japan liefert den nächsten K.-o.-Schock',text:'Portugal findet in 120 Minuten kein Tor. Japan bleibt im Spiel und gewinnt anschließend das Elfmeterschießen 4:3. Nach Argentinien verabschiedet sich damit ein weiterer großer Name deutlich früher als erwartet.'},
      {title:'Südkorea nimmt Schweden auseinander',text:'Südkorea gewinnt 2:0 gegen Schweden und zieht ohne Gegentor weiter. Damit ist auch hier das nominell höher eingeschätzte europäische Team ausgeschieden.'},
      {title:'Spanien überlebt, Brasilien wackelt',text:'Spanien kommt gegen Senegal über 120 Minuten nicht zum Tor und braucht das Elfmeterschießen. Brasilien gewinnt zwar 3:2 gegen die Ukraine, lässt aber nach einer 2:0-Führung den Ausgleich zu und muss bis zum Ende kämpfen.'},
      {title:'Finn-Harps-Spieler mitten im Turnier',text:'Amir Mašić spielt beim 2:0 der Schweiz gegen Australien 90 Minuten, liefert eine Vorlage und erhält die Note 7,6. Paulo Henrique steht beim 3:2 Brasiliens gegen die Ukraine im Tor, erhält Note 6,4 und hält zwei von vier Schüssen aufs Tor.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Argentinien raus, jetzt Portugal raus. Diese WM frisst Favoriten zum Frühstück.“',
      '„Japan hat 120 Minuten gewartet und Portugal dann vom Punkt erledigt. Eiskalt.“',
      '„Spanien ist weiter, aber nach diesem Senegal-Spiel fühlt sich das eher nach Flucht als nach Marsch an.“'
    ]},
    sources:['FM World Cup 2042 Wettbewerbsübersicht · 27./28.06.2042','FM-Spielbericht Amir Mašić · Schweiz 2:0 Australien','FM-Spielbericht Paulo Henrique · Brasilien 3:2 Ukraine']
  };
  upsert(window.FM_PRESS_REPORTS,report);
  upsert(window.FM_NEWS,{
    id:'2042-06-28-world-cup-round2-surprises',date,type:'world-cup',
    title:'Japan eliminiert Portugal, Spanien entkommt Senegal im Elfmeterschießen',
    text:'Die K.-o.-Runde bleibt voller Überraschungen. Japan schlägt Portugal 4:3 im Elfmeterschießen, Südkorea gewinnt 2:0 gegen Schweden. Spanien setzt sich erst vom Punkt gegen Senegal durch.',
    href:'presse.html?id=2042-06-28-world-cup-round2-japan-portugal-spain-scare'
  });
})();