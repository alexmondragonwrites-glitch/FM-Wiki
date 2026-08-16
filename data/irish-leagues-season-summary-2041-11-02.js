(()=>{
  window.FM_IRISH_LEAGUES=window.FM_IRISH_LEAGUES||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const premierDivision={
    competition:'SSE Airtricity League Premier Division',season:2041,status:'abgeschlossen',reputationRank:11,
    champion:'Finn Harps',
    table:[
      {position:1,team:'Finn Harps',played:36,wins:34,draws:2,losses:0,goalDifference:99,points:104},
      {position:2,team:"St Patrick's Athletic",played:36,wins:21,draws:6,losses:9,goalDifference:26,points:69},
      {position:3,team:'Derry City',played:36,wins:19,draws:7,losses:10,goalDifference:19,points:64},
      {position:4,team:'Shamrock Rovers',played:36,wins:19,draws:1,losses:16,goalDifference:-5,points:58},
      {position:5,team:'Waterford',played:36,wins:17,draws:5,losses:14,goalDifference:4,points:56},
      {position:6,team:'Sligo Rovers',played:36,wins:13,draws:5,losses:18,goalDifference:-13,points:44},
      {position:7,team:'Bohemian',played:36,wins:10,draws:6,losses:20,goalDifference:-21,points:36},
      {position:8,team:'Cork City',played:36,wins:9,draws:7,losses:20,goalDifference:-25,points:34},
      {position:9,team:'Athlone Town',played:36,wins:6,draws:8,losses:22,goalDifference:-34,points:26,status:'Relegations-Playoff'},
      {position:10,team:'Shelbourne',played:36,wins:5,draws:7,losses:24,goalDifference:-50,points:22,status:'Abstieg'}
    ],
    finnHarpsLeaders:{
      goals:{player:'Justin Ramsey',value:26,leagueRank:1},
      averageRating:{player:'Justin Ramsey',value:7.38,leagueRank:1},
      assists:{player:'Billy Walker',value:15,leagueRank:1},
      cleanSheets:{player:'Paulo Henrique',value:14,leagueRank:1},
      playerOfTheMatch:{player:'Justin Ramsey',value:5,leagueRank:2}
    },
    titleRun:['2033','2034','2035','2036','2037','2038','2039','2040','2041']
  };

  const firstDivision={
    competition:'SSE Airtricity League First Division',season:2041,status:'Liga abgeschlossen · Aufstiegs-Playoff läuft',reputationRank:114,
    champion:'UCD',
    table:[
      {position:1,team:'UCD',played:36,wins:23,draws:10,losses:3,goalDifference:38,points:79,status:'Meister'},
      {position:2,team:'Wexford',played:36,wins:19,draws:12,losses:5,goalDifference:18,points:69},
      {position:3,team:'Dundalk',played:36,wins:17,draws:9,losses:10,goalDifference:14,points:60},
      {position:4,team:'Drogheda United',played:36,wins:15,draws:6,losses:15,goalDifference:-1,points:51},
      {position:5,team:'Bray Wanderers',played:36,wins:12,draws:14,losses:10,goalDifference:4,points:50,status:'Playoff-Sieger'},
      {position:6,team:'Kerry',played:36,wins:12,draws:12,losses:12,goalDifference:-2,points:48},
      {position:7,team:'Longford Town',played:36,wins:11,draws:10,losses:15,goalDifference:-11,points:43},
      {position:8,team:'Treaty Utd',played:36,wins:7,draws:13,losses:16,goalDifference:-9,points:34},
      {position:9,team:'Galway Utd',played:36,wins:8,draws:10,losses:18,goalDifference:null,points:34,note:'Tordifferenz ist in der bereitgestellten Tabellenansicht abgeschnitten.'},
      {position:10,team:'Cobh Ramblers',played:36,wins:5,draws:6,losses:25,goalDifference:-32,points:21}
    ],
    leaders:{
      goals:{player:'Bryan Ashe',team:'UCD',value:21},
      averageRating:{player:'Adama Yeboua',team:'UCD',value:7.30},
      assists:{player:'Trevor Tierney',team:'Treaty Utd',value:13},
      cleanSheets:{player:'Lukas Virtue',team:'Bray Wanderers',value:14}
    },
    promotionPlayoff:{
      final:{home:'Bray Wanderers',away:'Dundalk',score:'2:1',winner:'Bray Wanderers',date:'2041-11-02'},
      next:{home:'Athlone Town',away:'Bray Wanderers',competition:'Premier-Division-Relegations-/Aufstiegs-Playoff',date:null,status:'anstehend'},
      note:'Bray Wanderers gewinnt das First-Division-Playoff-Finale 2:1 gegen Dundalk und trifft nun auf Premier-Division-Neunten Athlone Town.'
    }
  };

  window.FM_IRISH_LEAGUES['2041']={
    season:2041,referenceDate:'2041-11-02',premierDivision,firstDivision,
    movement:{automaticPromotion:'UCD',automaticRelegation:'Shelbourne',playoff:{premier:'Athlone Town',first:'Bray Wanderers',status:'offen'}}
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.irishLeagueSystem={
      referenceDate:'2041-11-02',
      premierDivision:{champion:'Finn Harps',runnerUp:"St Patrick's Athletic",relegated:'Shelbourne',playoffTeam:'Athlone Town'},
      firstDivision:{champion:'UCD',playoffWinner:'Bray Wanderers',playoffFinal:'Bray Wanderers 2:1 Dundalk'},
      promotionRelegationPlayoff:'Athlone Town vs Bray Wanderers · anstehend'
    };
  }

  const report={
    id:'2041-11-02-irland-ligen-saisonabschluss',type:'Ligaübersicht',date:'2041-11-02',competition:'Irischer Ligafußball',
    headline:'Irlands Ligen stehen: UCD Meister, Bray fordert Athlone im letzten Aufstiegsduell',
    subheadline:'Finn Harps beendet die Premier Division ungeschlagen mit 104 Punkten. UCD gewinnt die First Division, Bray Wanderers schlägt Dundalk 2:1 und spielt nun gegen Athlone Town um den letzten Premier-Division-Platz.',
    label:'IRLAND · PREMIER DIVISION & FIRST DIVISION · SAISON 2041',
    heroStat:{label:'Finn Harps',value:'104 Punkte',note:'36 Spiele · 34 Siege · 2 Remis · 0 Niederlagen'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Die regulären irischen Ligen 2041 sind beendet. Finn Harps dominiert die Premier Division, während UCD die First Division mit 79 Punkten gewinnt. Offen bleibt nur noch die letzte Frage zwischen den Spielklassen: Athlone Town trifft auf Bray Wanderers.',
    sections:[
      {title:'Finn Harps beendet eine ungeschlagene Meistersaison',text:'104 Punkte aus 36 Spielen, 34 Siege und zwei Remis machen die Harps erneut zum klaren Meister. St Patrick’s Athletic wird mit 69 Punkten Zweiter, Derry City mit 64 Punkten Dritter.'},
      {title:'UCD gewinnt die First Division',text:'UCD holt 79 Punkte und beendet die Saison vor Wexford mit 69 und Dundalk mit 60 Punkten. Damit steht UCD an der Spitze der zweiten irischen Liga.'},
      {title:'Bray gewinnt das Playoff-Finale',text:'Bray Wanderers setzt sich im Finale der First-Division-Aufstiegsrunde mit 2:1 gegen Dundalk durch.'},
      {title:'Athlone gegen Bray entscheidet den letzten Premier-Division-Platz',text:'Athlone Town beendet die Premier Division auf Rang neun. Bray Wanderers kommt als Sieger der First-Division-Playoffs. Beide treffen nun im Aufstiegs-/Relegationsduell aufeinander.'},
      {title:'Shelbourne steigt ab',text:'Shelbourne beendet die Premier Division mit 22 Punkten auf Rang zehn. Der letzte offene Platz für die kommende Premier-Division-Saison wird zwischen Athlone und Bray ausgespielt.'}
    ],
    verdictHeading:'Ein letzter irischer Termin bleibt offen',
    verdict:'Für Finn Harps ist die nationale Saison beendet. Im irischen Ligasystem fehlt jetzt nur noch die Entscheidung zwischen Athlone Town und Bray Wanderers, bevor die Zusammensetzung der Premier Division für die nächste Saison vollständig feststeht.',
    sources:['Premier-Division-Abschlusstabelle · 02.11.2041','First-Division-Abschlusstabelle · 02.11.2041','First-Division-Playoff-Finale · Bray Wanderers 2:1 Dundalk']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-11-02-irland-ligen-abschluss',date:'2041-11-02',season:2041,category:'Irland',accent:'green',featured:false,
    eyebrow:'IRLAND · LIGAÜBERSICHT 2041',
    title:'UCD Meister, Bray trifft auf Athlone',
    summary:'Die Premier und First Division sind beendet. Bray gewinnt das Aufstiegs-Playoff-Finale 2:1 gegen Dundalk und trifft nun auf Athlone Town.',
    href:'presse.html?id=2041-11-02-irland-ligen-saisonabschluss',
    entities:['finn-harps','ucd','bray-wanderers','athlone-town','dundalk','season-2041']
  });
})();
