(()=>{
  const id=new URLSearchParams(location.search).get('id');
  const c=(window.FM_CLUBS||[]).find(x=>x.id===id);
  if(!c?.pressReport)return;
  const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const column=document.querySelector('.club-profile-grid>div');
  if(!column)return;
  const card=document.createElement('article');
  card.className='content-card club-press-card';
  card.innerHTML=`<p class="kicker dark">${esc(c.pressReport.label)}</p><h2>${esc(c.pressReport.headline)}</h2><p>${esc(c.pressReport.standfirst)}</p><a class="button button-blue" href="${esc(c.pressReport.href)}">Pressevorbericht öffnen</a>`;
  column.insertBefore(card,column.firstChild);
})();