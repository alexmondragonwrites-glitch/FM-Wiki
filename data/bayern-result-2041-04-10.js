(()=>{
  const match={
    id:'2041-04-10-finn-harps-bayern',date:'2041-04-10',competition:'UEFA Champions League',stage:'Viertelfinale · Hinspiel',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1,formation:'4-3-3'},
    away:{id:'bayern',name:'Bayern München',short:'FCB',score:0,formation:'4-3-3'},
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:'10.000 · 500 Gästefans',weather:'18 °C',referee:'Ist nicht bekannt',
    headline:'Frame setzt den ersten Schnitt.',
    standfirst:'Finn Harps gewinnt das Hinspiel des Champions-League-Viertelfinals gegen Bayern München mit 1:0. Daryl Frame erzielt in der 55. Minute das einzige Tor, Paulo Henrique und die Defensive halten die Null.',
    verdict:'Ein knapper, aber verdienter Vorsprung vor dem Rückspiel in München',reportStatus:'complete',
    events:[
      {minute:3,type:'yellow',team:'Finn Harps',player:'Diego Fernández',text:'Verwarnung'},
      {minute:55,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'1:0'}
    ],
    stats:[
      {label:'Tore',home:1,away:0,kind:'number'},{label:'Schüsse',home:8,away:6,kind:'number'},{label:'Schüsse aufs Tor',home:4,away:1,kind:'number'},
      {label:'xG',home:0.96,away:0.38,kind:'decimal'},{label:'Schüsse neben das Tor',home:2,away:4,kind:'number'},{label:'Großchancen',home:0,away:0,kind:'number'},
      {label:'Ballbesitz',home:44,away:56,kind:'percent'},{label:'Angekommene Pässe',home:449,away:577,kind:'number',homeDetail:'89 % · 449/505',awayDetail:'92 % · 577/630'},
      {label:'Ecken',home:5,away:6,kind:'number'},{label:'Fouls',home:12,away:7,kind:'number'},
      {label:'Gewonnene Zweikämpfe',home:96,away:86,kind:'percent',homeDetail:'24/25',awayDetail:'25/29'},
      {label:'Gewonnene Kopfbälle',home:52,away:47,kind:'percent',homeDetail:'16/31',awayDetail:'14/30'},
      {label:'Gelbe Karten',home:1,away:0,kind:'number'},{label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:7.06,away:6.7,kind:'decimal'},{label:'Intensive Sprints',home:130,away:119,kind:'number'}
    ],
    analysis:{
      summary:'Bayern hatte mehr Ballbesitz und mehr angekommene Pässe, Finn Harps aber die klareren Abschlüsse. Vier Harps-Schüsse trafen das Tor, Bayern brachte nur einen Versuch auf Paulo Henrique. Frames Treffer in der 55. Minute belohnte die kompaktere und zielgerichtetere Mannschaft.',
      possession:'Bayern kontrollierte 56 Prozent Ballbesitz und spielte 577 erfolgreiche Pässe. Finn Harps ließ sich davon jedoch nicht auseinanderziehen und hielt die gefährlichen Zonen weitgehend geschlossen.',
      chanceCreation:'Mit acht Abschlüssen, vier Schüssen aufs Tor und 0,96 xG erzeugte Finn Harps mehr Gefahr als Bayern mit sechs Abschlüssen, einem Torschuss und 0,38 xG.',
      defensive:'Paulo Henrique musste nur einmal eingreifen. Andrews, Bruce, Kelly und Fernández hielten Bayerns prominente Offensive um Sosa und Palacios nahezu vollständig aus dem Strafraum.',
      turningPoint:'Daryl Frame nutzte in der 55. Minute eine der wenigen sauberen Abschlussgelegenheiten und traf präzise ins untere Eck.',
      nuance:'Der Vorsprung ist wertvoll, aber schmal. Bayern braucht im Rückspiel nur ein Tor, um das Duell wieder vollständig zu öffnen.'
    },
    keyPerformers:[
      {player:'Daryl Frame',rating:8.0,role:'Zentraler Mittelfeldspieler Finn Harps',note:'Siegtor in der 55. Minute und vier Abschlüsse.'},
      {player:'Kevin Kelly',rating:7.4,role:'Linksverteidiger Finn Harps',note:'Gewann alle vier ausgewerteten Zweikämpfe und stabilisierte die linke Seite.'},
      {player:'Paulo Henrique',rating:7.3,role:'Torwart Finn Harps',note:'Ein Torschuss, eine Parade und die weiße Weste.'},
      {player:'Darcy Andrews',rating:7.2,role:'Innenverteidiger Finn Harps',note:'Ruhiger Spielaufbau und starke Kontrolle gegen Bayerns Angriff.'},
      {player:'Justin Ramsey',rating:7.1,role:'Offensivspieler Finn Harps',note:'Arbeitete gegen den Ball und hielt Bayern durch seine Tiefenläufe beschäftigt.'}
    ],
    finnHarpsLineup:[
      {player:'Paulo Henrique',position:'TW',minutes:90,rating:7.3,cleanSheet:true},{player:'Diego Fernández',position:'VR',minutes:55,rating:6.9},
      {player:'Darcy Andrews',position:'VZ',minutes:90,rating:7.2},{player:'Torric Bruce',position:'VZ',minutes:90,rating:6.9},{player:'Kevin Kelly',position:'VL',minutes:90,rating:7.4},
      {player:"Jim O'Neill",position:'DM',minutes:73,rating:6.7},{player:'Daryl Frame',position:'MZ',minutes:90,rating:8.0,goals:1},{player:"Cormac O'Kane",position:'MZ',minutes:73,rating:7.0},
      {player:'Giacomo Papini',position:'OMR',minutes:55,rating:7.0},{player:'Dom Docherty',position:'OML',minutes:55,rating:6.5},{player:'Justin Ramsey',position:'ST',minutes:90,rating:7.1},
      {player:'Vinícius',position:'MZ',minutes:17,rating:6.7,sub:true},{player:'Billy Walker',position:'OMR',minutes:35,rating:6.8,sub:true},
      {player:'Romano Maisto',position:'VL',minutes:35,rating:6.4,sub:true},{player:'Callum Brennan',position:'VR',minutes:35,rating:7.0,sub:true},{player:'Amir Mašić',position:'DM',minutes:35,rating:6.7,sub:true}
    ],
    sources:['Spielübersicht Finn Harps – Bayern München, 10.04.2041','Finn-Harps-Spielerstatistiken und Noten','Spielbericht zum Champions-League-Viertelfinal-Hinspiel']
  };
  window.FM_MATCHES=window.FM_MATCHES||[];window.FM_MATCHES.push(match);
  window.FM_NEWS=window.FM_NEWS||[];window.FM_NEWS.push({id:'2041-04-10-bayern',date:'2041-04-10',season:2041,category:'Champions League',accent:'blue',eyebrow:'VIERTELFINALE · HINSPIEL',title:'Frame schießt Finn Harps zum 1:0 gegen Bayern',summary:'Daryl Frames Treffer in der 55. Minute entscheidet ein enges Hinspiel. Bayern hat mehr Ball, bringt aber nur einen Schuss aufs Tor.',href:'presse.html?id=2041-04-10-bayern-spielbericht',entities:['finn-harps','bayern','daryl-frame','champions-league'],featured:true});
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];window.FM_PRESS_REPORTS.push({id:'2041-04-10-bayern-spielbericht',type:'Spielbericht',date:'2041-04-10',competition:'UEFA Champions League',fixtureDate:'10.04.2041',home:'Finn Harps',away:'Bayern München',score:'1:0',headline:'Frame setzt den ersten Schnitt',subheadline:'Finn Harps nimmt einen knappen Vorsprung mit nach München. Daryl Frame trifft, Paulo Henrique hält die Null.',label:'CHAMPIONS LEAGUE · VIERTELFINALE',heroStat:{label:'Entscheidender Moment',value:'55.',note:'Daryl Frame trifft zum 1:0'},intro:'Finn Harps gewinnt das Viertelfinal-Hinspiel gegen Bayern München mit 1:0. Bayern kontrollierte mehr Ballbesitz, entwickelte daraus aber kaum Gefahr. Frame nutzte die beste Harps-Phase nach der Pause und traf präzise ins untere Eck.',sections:[{title:'Weniger Ball, mehr Schärfe',text:'Bayern kam auf 56 Prozent Ballbesitz und 577 angekommene Pässe. Finn Harps erzeugte dennoch die gefährlicheren Abschlüsse und brachte vier von acht Versuchen auf das Tor.'},{title:'Frame entscheidet das enge Spiel',text:'In der 55. Minute fand Daryl Frame den freien Abschluss und traf ins untere Eck. Es war sein 25. Tor für Finn Harps.'},{title:'Bayerns Offensive bleibt im Nebel',text:'Sosa, Palacios und Sánchez kamen gemeinsam kaum zur Geltung. Bayern brachte nur einen einzigen Schuss auf Paulo Henriques Tor und blieb bei 0,38 xG.'},{title:'Ein Vorsprung, kein Polster',text:'Das 1:0 verändert die Ausgangslage, beendet das Duell aber nicht. In München wird Bayern höher drücken und deutlich mehr Risiko nehmen müssen.'}],verdictHeading:'Finn Harps gewinnt den ersten Akt',verdict:'Das Ergebnis ist knapp, die defensive Kontrolle aber bemerkenswert. Finn Harps hat Bayern nicht dominiert, sondern dessen größte Stärken fast vollständig neutralisiert. Für das Rückspiel braucht es dieselbe Ruhe und eine noch bessere Nutzung der Umschalträume.'});
  const club=(window.FM_CLUBS||[]).find(c=>c.id==='bayern');if(club){club.summary='Bayern München verlor das Viertelfinal-Hinspiel der Champions League am 10. April 2041 mit 0:1 bei Finn Harps.';club.meetings=club.meetings||[];club.meetings.push({date:'10.04.2041',venue:'A',result:'0:1'});club.tags=[...(club.tags||[]).filter(x=>!String(x).includes('Hinspiel')),'Viertelfinale 2041 · Hinspiel 0:1'];}
})();