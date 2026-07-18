(()=>{
  const players=window.FM_PLAYERS||[];
  const byId=id=>players.find(p=>p.id===id);
  const byName=name=>players.find(p=>p.name===name);
  const addStart=p=>{if(!p)return;const s=String(p.appearances??'0');const m=s.match(/^(\d+)(?:\s*\((\d+)\))?/);if(!m)return;p.appearances=m[2]!=null?`${Number(m[1])+1} (${m[2]})`:String(Number(m[1])+1);};
  const addSub=p=>{if(!p)return;const s=String(p.appearances??'0');const m=s.match(/^(\d+)(?:\s*\((\d+)\))?/);if(!m)return;p.appearances=`${m[1]} (${Number(m[2]||0)+1})`;};
  const addNumber=(p,key,value=1)=>{if(!p)return;const current=Number(p[key]);if(Number.isFinite(current))p[key]=current+value;};

  const reilly=byId('evan-reilly');
  if(reilly){
    Object.assign(reilly,{
      profileDate:'2040-12-05',appearances:'14 (1)',avgRating:7.19,
      summary:'Evan Reilly hat sein erstes Champions-League-Spiel von Beginn an bestanden. Celta traf bereits in der vierten Minute, doch der 18-Jährige blieb ruhig, parierte anschließend fünf weitere Schüsse aufs Tor und half Finn Harps mit sauberem Aufbau zu einem 3:1-Auswärtssieg.',
      analysis:'Der Abend in Vigo war wertvoller als eine weitere weiße Weste gegen einen harmlosen Gegner. Reilly kassierte früh, musste danach aber mit einem offenen Spiel umgehen und hielt fünf weitere Abschlüsse. Seine Note von 6,9 war solide statt spektakulär. Entscheidend war, dass das Gegentor weder seine Positionierung noch seine Entscheidungen im Aufbau sichtbar beschädigte.',
      verdict:'Das erste Gegentor änderte nichts an seiner Ruhe',
      availability:'Einsatzbereit · erster Vertreter während Henriques Ausfall'
    });
    reilly.goalkeeperStats={...(reilly.goalkeeperStats||{}),appearances:'14 (1)',conceded:7,cleanSheets:9,goalsAgainstPer90:0.48,passPct:90,seasonRating:7.19};
    reilly.seasonSplits=(reilly.seasonSplits||[]).map(row=>row.competition==='UEFA Champions League'?{...row,appearances:'1 (1)',conceded:1,cleanSheets:1,passPct:90,rating:7.05}:row);
    reilly.strengths=[...(reilly.strengths||[]).filter(x=>!String(x).includes('Champions-League-Einsatz')&&!String(x).includes('Zu-null-Spiele')),'Neun Zu-null-Spiele in 15 Einsätzen 2040','Erster Champions-League-Start bei Celta: fünf Paraden nach frühem Gegentor','93 Prozent Passquote beim 3:1 in Vigo'];
    reilly.careerNarrative=[...(reilly.careerNarrative||[]),'Am 5. Dezember 2040 stand Reilly bei Celta Vigo erstmals in der Champions League in der Startelf. Nach Coopers Treffer in der vierten Minute parierte er die übrigen fünf Schüsse aufs Tor; Finn Harps gewann 3:1.'];
    reilly.honours=(reilly.honours||[]).map(h=>h.year==='2040'?{...h,items:[...(h.items||[]).filter(x=>x!=='Champions-League-Debüt bei Tottenham ohne Gegentor'),'Champions-League-Debüt bei Tottenham ohne Gegentor','Erster Champions-League-Start beim 3:1 in Vigo']}:h);
    reilly.deepAnalysis=[...(reilly.deepAnalysis||[]),{title:'Warum das Gegentor in Vigo sogar hilfreich sein kann',text:'Tottenham prüfte Reilly vor allem als spontanen Einwechselspieler. Celta prüfte ihn als Starter und traf sofort. Dass er danach fünf weitere Schüsse hielt und im Passspiel ruhig blieb, zeigt eine wichtigere Fähigkeit als Makellosigkeit: Er kann einen Fehler oder Gegentreffer innerhalb des Spiels mental abschließen.'}];
    reilly.lastMatch={date:'2040-12-05',opponent:'RC Celta de Vigo',result:'3:1',competition:'UEFA Champions League',rating:6.9,minutes:90,conceded:1,saves:5,passPct:93};
  }

  const ramsey=byId('justin-ramsey');
  if(ramsey){
    Object.assign(ramsey,{
      profileDate:'2040-12-05',appearances:'33 (8)',goals:36,
      summary:'Irlands Vollstrecker und das Gesicht der Finn-Harps-Offensive: 36 Vereinstore im Jahr 2040, bester irischer Torschütze der Europameisterschaft und nun Treffer gegen Schottland, Belgien, Tottenham und Celta Vigo in vier großen dokumentierten Einsätzen hintereinander.',
      analysis:'Ramseys November-Serie ist in Vigo in den Dezember hineingewachsen. Nach zwei Nations-League-Toren und dem Siegtor bei Tottenham traf er kurz vor der Pause auch bei Celta. Wieder war es kein irisches Ligaspiel, sondern ein enger europäischer Auswärtsabend. Die Frage, ob er außerhalb Irlands treffen kann, ist damit praktisch beantwortet; offen bleibt nur noch, wie dauerhaft er dieses Niveau reproduziert.',
      verdict:'Vier große Spiele, vier Tore'
    });
    ramsey.seasonSplits=(ramsey.seasonSplits||[]).map(row=>row.competition==='Kontinental'?{...row,appearances:'13 (1)',goals:9,rating:7.17}:row.competition==='Gesamt Verein'?{...row,appearances:'33 (8)',goals:36,rating:7.27}:row);
    ramsey.strengths=[...(ramsey.strengths||[]).filter(x=>!String(x).includes('Vereinstore')&&!String(x).includes('aufeinanderfolgenden')),'36 Vereinstore im Jahr 2040','Tore gegen Schottland, Belgien, Tottenham und Celta in vier großen dokumentierten Einsätzen hintereinander'];
    ramsey.bigGameRun=[...(ramsey.bigGameRun||[]),{date:'05.12.2040',competition:'UEFA Champions League',opponent:'RC Celta de Vigo',result:'3:1',goals:1,note:7.2,context:'Führungstor kurz vor der Pause'}];
    ramsey.careerNarrative=(ramsey.careerNarrative||[]).map(x=>String(x).startsWith('Im November 2040 traf er')?'Zwischen dem 16. November und dem 5. Dezember 2040 traf Ramsey gegen Schottland, Belgien, Tottenham und Celta Vigo in vier großen dokumentierten Einsätzen hintereinander. Unterschiedliche Rollen und Spielverläufe machten aus der alten Kritik endgültig ein überholtes Etikett.':x);
    ramsey.lastMatch={date:'2040-12-05',opponent:'RC Celta de Vigo',result:'3:1',competition:'UEFA Champions League',rating:7.2,minutes:60,goals:1,assists:0};
  }

  const papini=byName('Giacomo Papini');
  if(papini){addStart(papini);addNumber(papini,'goals');addNumber(papini,'assists');papini.profileDate='2040-12-05';papini.lastMatch={date:'2040-12-05',opponent:'RC Celta de Vigo',result:'3:1',rating:8.5,minutes:75,goals:1,assists:1,playerOfMatch:true};papini.latestHeadline:'Tor, Vorlage und Bestnote beim 3:1 in Vigo';}

  const blanco=byName('Eduardo Blanco');
  if(blanco){addSub(blanco);addNumber(blanco,'goals');blanco.profileDate='2040-12-05';blanco.lastMatch={date:'2040-12-05',opponent:'RC Celta de Vigo',result:'3:1',rating:7.4,minutes:30,goals:1,assists:0,sub:true};blanco.latestHeadline:'Jokertor zum 3:1 bei Celta Vigo';}

  const maisto=byName('Romano Maisto');
  if(maisto){addSub(maisto);addNumber(maisto,'assists');maisto.profileDate='2040-12-05';maisto.lastMatch={date:'2040-12-05',opponent:'RC Celta de Vigo',result:'3:1',rating:7.5,minutes:34,goals:0,assists:1,sub:true};maisto.latestHeadline:'Sofortwirkung als Joker in Vigo';}

  const okane=byId('cormac-okane')||byName("Cormac O'Kane");
  if(okane){addStart(okane);addNumber(okane,'assists');okane.profileDate='2040-12-05';okane.lastMatch={date:'2040-12-05',opponent:'RC Celta de Vigo',result:'3:1',rating:7.3,minutes:90,goals:0,assists:1,yellow:true};okane.latestHeadline:'Vorlage und Mittelfeldkontrolle beim 3:1 in Vigo';}
})();