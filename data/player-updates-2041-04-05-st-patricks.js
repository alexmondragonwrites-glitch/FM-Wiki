(()=>{
  const players=window.FM_PLAYERS||[];
  const byName=name=>players.find(player=>String(player.name||'').toLowerCase()===name.toLowerCase());
  const papini=byName('Giacomo Papini');
  if(papini){
    papini.tags=[...(papini.tags||[]).filter(tag=>!String(tag).includes('125. Ligaspiel')),'125. Ligaspiel für Finn Harps'];
    papini.milestones=[...(papini.milestones||[]).filter(item=>String(item.date||'')!=='2041-04-05'),{date:'2041-04-05',label:'125. Ligaspiel für Finn Harps',detail:"0:0 gegen St Patrick's Athletic"}];
    papini.lastMatch={date:'2041-04-05',opponent:"St Patrick's Athletic",result:'0:0',minutes:56,rating:7.2,note:'125. Ligaspiel für Finn Harps'};
  }
  const walker=byName('Billy Walker');
  if(walker){
    walker.lastMatch={date:'2041-04-05',opponent:"St Patrick's Athletic",result:'0:0',minutes:34,rating:7.7,note:'Bester Finn-Harps-Spieler nach seiner Einwechslung'};
    walker.tags=[...(walker.tags||[]).filter(tag=>!String(tag).includes('7,7 gegen St Patrick')),"Note 7,7 gegen St Patrick's"];
  }
})();