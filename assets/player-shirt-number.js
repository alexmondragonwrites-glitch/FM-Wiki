(()=>{
  const id=new URLSearchParams(location.search).get('id');
  const player=(window.FM_PLAYERS||[]).find(item=>item.id===id);
  if(!player||player.shirtNumber===undefined)return;

  const facts=document.querySelector('.profile-facts');
  if(facts&&!facts.querySelector('[data-shirt-number]')){
    const item=document.createElement('div');
    item.dataset.shirtNumber='true';
    item.innerHTML=`<span>Rückennummer ${player.shirtNumberSeason||2041}</span><strong>#${player.shirtNumber}</strong>`;
    facts.insertBefore(item,facts.firstElementChild);
  }

  const title=document.querySelector('.profile-title h1');
  if(title&&!title.dataset.shirtNumber){
    title.dataset.shirtNumber=String(player.shirtNumber);
    title.setAttribute('aria-label',`${player.name}, Rückennummer ${player.shirtNumber}`);
  }
})();
