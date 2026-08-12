(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]={...list[index],...item};else list.push(item);
  };

  const player=(window.FM_PLAYERS||[]).find(p=>p.id==='emerson-escarcega'||p.name==='Emerson Escárcega');
  if(player){
    player.profileDate='2041-08-04';
    player.currentClub='Finn Harps';
    player.status='Finn Harps · CONCACAF-Gold-Cup-Sieger 2041 mit Mexiko';
    player.availability='Rückkehr von der Nationalmannschaft nach Gold-Cup-Titel';
    player.internationalDuty={
      ...(player.internationalDuty||{}),
      nation:'Mexiko',
      competition:'CONCACAF Gold Cup',
      status:'Turniersieger',
      referenceDate:'2041-08-04',
      latestResult:'Barbados 0:2 Mexiko · Finale · 04.08.2041',
      nextOpponent:null,
      nextStage:null,
      tournamentContext:'Mexiko verteidigt den Titel und gewinnt nach 2037 und 2039 zum dritten Mal in Folge den Gold Cup.',
      note:'Escárcega beendet seine Länderspielreise als Gold-Cup-Sieger und kehrt anschließend als amtierender Kontinentalmeister zu Finn Harps zurück.'
    };
    player.internationalTournamentStats={
      competition:'CONCACAF Gold Cup 2041',
      referenceDate:'2041-08-04',
      teamResult:'Sieger',
      averageRating:8.20,
      averageRatingRank:1,
      goals:4,
      goalsRank:'geteilt 2.',
      assists:4,
      assistsRank:'geteilt 1.',
      note:'Escárcega beendet den Gold Cup mit der besten Durchschnittsnote des Turniers (8,20), vier Toren und vier Vorlagen. Damit liegt er bei den Vorlagen geteilt an der Spitze und bei den Toren in der Verfolgergruppe hinter Ricardo López.'
    };
    player.careerNarrative=player.careerNarrative||[];
    const narrative='04.08.2041: Emerson Escárcega gewinnt mit Mexiko den CONCACAF Gold Cup. Im Finale schlägt Mexiko Barbados 2:0. Escárcega beendet das Turnier mit vier Toren, vier Vorlagen und der besten Durchschnittsnote des Wettbewerbs von 8,20.';
    if(!player.careerNarrative.includes(narrative))player.careerNarrative.push(narrative);
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2041-08-04-emerson-escarcega-gold-cup-champion',
    date:'2041-08-04',
    player:'Emerson Escárcega',
    type:'international-title',
    title:'Gold-Cup-Sieger mit Mexiko',
    detail:'Mexiko gewinnt das Finale gegen Barbados 2:0. Escárcega beendet das Turnier mit vier Toren, vier Vorlagen und der besten Durchschnittsnote des Wettbewerbs von 8,20.'
  });

  const reportId='2041-08-04-escarcega-gold-cup-sieger';
  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Nationalteam',date:'2041-08-04',competition:'CONCACAF Gold Cup',fixtureDate:'04.08.2041',
    home:'Barbados',away:'Mexiko',score:'0:2',location:'Michigan Stadium · Ann Arbor · USA',
    headline:'Escárcega kommt als Gold-Cup-Sieger nach Donegal',
    subheadline:'Mexiko schlägt Barbados im Finale 2:0 und verteidigt seinen Titel. Finn-Harps-Neuzugang Emerson Escárcega beendet das Turnier mit vier Toren, vier Vorlagen und der besten Durchschnittsnote des Wettbewerbs.',
    label:'CONCACAF GOLD CUP 2041 · MEXIKO TITELVERTEIDIGER',
    heroStat:{label:'Escárcega · Turniernote',value:'8,20',note:'1. im Wettbewerb · 4 Tore · 4 Vorlagen'},
    backlink:{href:'spieler.html?id=emerson-escarcega',label:'← ZU ESCÁRCEGA'},
    intro:'Noch bevor Emerson Escárcega seinen neuen Kluballtag bei Finn Harps vollständig aufnehmen konnte, liefert er bereits das erste große Kapitel seiner Harps-Zeit. Mexiko gewinnt im Michigan Stadium das Gold-Cup-Finale gegen Barbados mit 2:0. Escárcega gehört über das gesamte Turnier hinweg zu den prägenden Figuren des Titelverteidigers.',
    sections:[
      {title:'2:0 im Finale gegen Barbados',text:'Mexiko setzt sich auf neutralem Platz im Michigan Stadium mit 2:0 gegen Barbados durch und holt erneut den CONCACAF Gold Cup. Nach den Titeln 2037 und 2039 ist es der dritte mexikanische Gold-Cup-Sieg in Folge.'},
      {title:'Escárcega beendet das Turnier an der Spitze der Noten',text:'Mit einer Durchschnittsnote von 8,20 führt Escárcega die Turnierwertung an. Ricardo López folgt mit 8,10. Damit kommt der neue Finn-Harps-Stürmer nicht nur als Titelträger zurück, sondern als statistisch konstantester Spieler des Wettbewerbs.'},
      {title:'Vier Tore und vier Vorlagen',text:'Escárcega erzielt vier Treffer und liegt damit gemeinsam mit mehreren Spielern in der Verfolgergruppe hinter Torschützenkönig Ricardo López. Mit vier Vorlagen teilt er sich zugleich die Spitze der Assistwertung. Sein Turnier ist damit gleichermaßen von Abschlussstärke und Kreativität geprägt.'},
      {title:'Mexikos Weg war eine Machtdemonstration',text:'Auf dem Weg zum Titel liefert Mexiko mehrere deutliche Ergebnisse, darunter ein 11:3 gegen Haiti, ein 6:1 gegen Martinique, ein 4:1 im Viertelfinale gegen Panama und ein 6:0 gegen El Salvador. Das 2:0 im Finale setzt den kontrollierten Schlusspunkt.'},
      {title:'Ein Neuzugang kehrt bereits als Champion zurück',text:'Für Finn Harps ist der Zeitpunkt bemerkenswert: Escárcega wurde im Sommer ablösefrei von Sevilla verpflichtet und war wegen des Gold Cups zunächst nicht regulär verfügbar. Nun kommt er mit einem Kontinentaltitel, vier Toren, vier Assists und Turnierbestnote nach Donegal.'}
    ],
    strengthsTitle:'ESCÁRCEGAS GOLD CUP',strengthsHeading:'Mehr als nur ein Titel',
    strengths:['CONCACAF-Gold-Cup-Sieger 2041','Beste Durchschnittsnote des Turniers: 8,20','4 Tore','4 Vorlagen · geteilter Bestwert','Schlüsselspieler auf Mexikos Weg zum Titel'],
    vulnerabilitiesTitle:'WAS JETZT FÜR DIE HARPS ZÄHLT',vulnerabilitiesHeading:'Vom Turniermodus in den Kluballtag',
    vulnerabilities:['Späte Rückkehr in den laufenden irischen Spielbetrieb','Belastungssteuerung nach einem langen Nationalmannschaftsturnier','Integration in eine Offensive, die bereits eingespielt ist'],
    verdictHeading:'Der ablösefreie Transfer bekommt sofort internationales Gewicht',
    verdict:'Escárcega hat noch kaum Gelegenheit gehabt, seine Finn-Harps-Geschichte auf Klubebene zu schreiben, und bringt trotzdem bereits Silberware und eine außergewöhnliche Turnierbilanz mit. Vier Tore, vier Vorlagen und Rang eins nach Durchschnittsnote bestätigen, warum sein ablösefreier Wechsel als eines der Geschäfte des Sommers galt. Jetzt beginnt die spannendere Frage: Wie viel dieser Form kann er direkt in die Champions-League-Saison der Harps tragen?',
    sourcesHeading:'Turnierdaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots des Gold-Cup-Finales und der Turnierstatistiken vom 4. August 2041.',
    sources:['Barbados 0:2 Mexiko · Gold-Cup-Finale · 04.08.2041','CONCACAF-Gold-Cup-Turnierübersicht 2041','Spielerstatistiken Gold Cup 2041 · Escárcega: 8,20 · 4 Tore · 4 Vorlagen']
  });

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-08-04-escarcega-gold-cup-sieger',date:'2041-08-04',season:2041,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'CONCACAF GOLD CUP · MEXIKO TITELVERTEIDIGER',title:'Escárcega kehrt als Gold-Cup-Champion zurück',
    summary:'Mexiko schlägt Barbados im Finale 2:0. Finn-Harps-Neuzugang Emerson Escárcega beendet den Gold Cup mit vier Toren, vier Vorlagen und der besten Durchschnittsnote des gesamten Turniers von 8,20.',
    href:`presse.html?id=${reportId}`,
    entities:['emerson-escarcega','finn-harps','mexico','barbados','concacaf-gold-cup']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-08-04';
    season.changes=season.changes||{notes:[]};
    const note='04.08.2041: Emerson Escárcega gewinnt mit Mexiko den CONCACAF Gold Cup. Mexiko schlägt Barbados im Finale 2:0; Escárcega beendet das Turnier mit 4 Toren, 4 Vorlagen und der besten Durchschnittsnote (8,20).';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }
})();