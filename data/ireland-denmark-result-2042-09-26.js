(()=>{
window.FM_IRELAND=window.FM_IRELAND||{};
window.FM_MATCHES=window.FM_MATCHES||[];
window.FM_NEWS=window.FM_NEWS||[];
window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
const upsert=(a,x)=>{const i=a.findIndex(e=>e&&e.id===x.id);if(i>=0)a[i]=x;else a.push(x);};
const date='2042-09-26';
const reportId='2042-09-26-denmark-ireland-2-2-nations-league';
upsert(window.FM_MATCHES,{
 id:'2042-09-26-denmark-ireland-nations-league',date,season:2042,
 competition:'UEFA Nations League A',stage:'Gruppe 3 · 1. Spieltag',
 home:{id:'denmark',name:'Dänemark',score:2},away:{id:'ireland',name:'Irland',score:2},
 score:'2:2',halfTime:'2:2',venue:'Parken',location:'Kopenhagen',attendance:38065,
 weather:'Böig, Nieselregen · 8 °C',
 scorers:[
  {player:'Granit Gega',team:'Dänemark',minutes:[16]},
  {player:"Harry O'Leary",team:'Irland',minutes:[26,39]},
  {player:'Søren Christiansen',team:'Dänemark',minutes:[45]}
 ],
 stats:{shots:'6:4',shotsOnTarget:'4:2',xG:'0.63:1.00',bigChances:'1:2',possession:'55:45',corners:'3:4',fouls:'5:12'},
 standout:{player:"Harry O'Leary",rating:8.0,goals:2}
});
window.FM_IRELAND.updated=date;
window.FM_IRELAND.nationsLeague2042={
 ...(window.FM_IRELAND.nationsLeague2042||{}),
 status:'1. Spieltag abgeschlossen',
 record:{played:1,wins:0,draws:1,losses:0,goalsFor:2,goalsAgainst:2,points:1},
 latestResult:'26.09.2042 · Dänemark 2:2 Irland',
 nextOpponent:'Israel'
};
window.FM_IRELAND.nextFocus={competition:'UEFA Nations League A',stage:'Gruppe 3 · 2. Spieltag',opponent:'Israel',venue:'Heim',date:'2042-09-29',status:'Vorbereitung'};
upsert(window.FM_PRESS_REPORTS,{
 id:reportId,type:'Nations-League-Spielbericht',date,competition:'UEFA Nations League A',
 headline:'O’Leary-Doppelpack: Irland startet mit 2:2 in Kopenhagen',
 subheadline:'Harry O’Leary trifft zweimal, Dänemark gleicht noch vor der Pause aus.',
 label:'UEFA NATIONS LEAGUE A · DÄNEMARK 2:2 IRLAND',
 heroStat:{label:'HARRY O’LEARY',value:'2 TORE',note:'26. und 39. Minute'},
 intro:'Vier Tore vor der Pause, danach keine mehr. Irland nimmt zum Auftakt einen Punkt aus Kopenhagen mit.',
 sections:[
  {title:'Gega eröffnet',text:'Granit Gega bringt Dänemark in Minute 16 in Führung.'},
  {title:'O’Leary dreht das Spiel',text:'Harry O’Leary trifft in Minute 26 und 39 und macht aus dem Rückstand eine irische Führung.'},
  {title:'Ausgleich vor der Pause',text:'Søren Christiansen trifft kurz vor dem Halbzeitpfiff zum 2:2.'},
  {title:'Statistisch eng',text:'Dänemark hat mehr Ballbesitz und Abschlüsse, Irland erzeugt mit 1,00 xG aber die besseren Chancen.'}
 ],
 verdictHeading:'Solider Auftakt',
 verdict:'Irland startet ungeschlagen in die Gruppe. Der Blick geht sofort auf das Heimspiel gegen Israel.'
});
upsert(window.FM_NEWS,{
 id:'2042-09-26-denmark-ireland-2-2',date,season:2042,category:'Nationalteam',accent:'green',featured:true,
 eyebrow:'NATIONS LEAGUE · 2:2',title:'O’Leary rettet Punkt in Kopenhagen',
 summary:'Irland spielt zum Auftakt 2:2 gegen Dänemark. O’Leary trifft doppelt.',
 href:`presse.html?id=${reportId}`
});
})();