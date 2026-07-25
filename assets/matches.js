(()=>{
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const search=document.querySelector('#matchSearch');
  const competition=document.querySelector('#matchCompetition');
  const grid=document.querySelector('#matchGrid');

  function renderArchive(){
    const matches=[...(window.FM_MATCHES||[])].sort((a,b)=>b.date.localeCompare(a.date)||String(b.id).localeCompare(String(a.id)));
    if(!search||!competition||!grid)return;

    competition.querySelectorAll('option:not([value="all"])').forEach(option=>option.remove());
    [...new Set(matches.map(match=>match.competition))].sort((a,b)=>a.localeCompare(b,'de')).forEach(value=>{
      competition.insertAdjacentHTML('beforeend',`<option value="${esc(value)}">${esc(value)}</option>`);
    });

    const getXg=match=>(match.stats||[]).find(stat=>stat.label==='xG')||{home:0,away:0};
    const render=()=>{
      const query=search.value.toLowerCase().trim();
      const selectedCompetition=competition.value;
      const visible=matches.filter(match=>{
        const players=(match.events||[]).map(event=>event.player).join(' ');
        const haystack=[match.home?.name,match.away?.name,match.competition,match.stage,match.headline,players].join(' ').toLowerCase();
        return (!query||haystack.includes(query))&&(selectedCompetition==='all'||match.competition===selectedCompetition);
      });

      grid.innerHTML=visible.map(match=>{
        const xg=getXg(match);
        return `<a class="match-card" href="spiel.html?id=${esc(match.id)}"><div class="match-card-top"><span>${esc(match.competition)}</span><time>${new Date(`${match.date}T12:00:00`).toLocaleDateString('de-DE',{day:'2-digit',month:'long',year:'numeric'})}</time></div><div class="match-score"><div><b>${esc(match.home.short)}</b><small>${esc(match.home.name)}</small></div><strong>${match.home.score}:${match.away.score}</strong><div><b>${esc(match.away.short)}</b><small>${esc(match.away.name)}</small></div></div><h3>${esc(match.headline)}</h3><p>${esc(match.standfirst)}</p><div class="match-card-stats"><span>xG ${Number(xg.home||0).toFixed(2).replace('.',',')} : ${Number(xg.away||0).toFixed(2).replace('.',',')}</span><span>${esc(match.verdict)}</span></div></a>`;
      }).join('')||'<div class="content-card"><b>Keine Berichte für diesen Filter.</b></div>';
    };

    search.addEventListener('input',render);
    competition.addEventListener('change',render);
    render();

    const finnGoals=match=>match.away?.id==='finn-harps'?match.away.score:match.home.score;
    const opponentGoals=match=>match.away?.id==='finn-harps'?match.home.score:match.away.score;
    const finnXg=match=>{const xg=getXg(match);return match.away?.id==='finn-harps'?Number(xg.away||0):Number(xg.home||0);};
    document.querySelector('#reportCount').textContent=matches.filter(match=>match.reportStatus==='complete').length;
    document.querySelector('#matchCount').textContent=matches.length;
    document.querySelector('#matchWins').textContent=matches.filter(match=>finnGoals(match)>opponentGoals(match)).length;
    document.querySelector('#matchGoals').textContent=matches.reduce((sum,match)=>sum+finnGoals(match),0);
    document.querySelector('#cleanSheets').textContent=matches.filter(match=>opponentGoals(match)===0).length;
    document.querySelector('#avgXg').textContent=(matches.reduce((sum,match)=>sum+finnXg(match),0)/Math.max(matches.length,1)).toFixed(2).replace('.',',');
  }

  const ready=window.FM_DOMAIN_READY?.matches;
  if(ready&&typeof ready.then==='function')ready.then(renderArchive).catch(error=>{
    console.error('Spieldaten konnten nicht vollständig geladen werden.',error);
    renderArchive();
  });
  else renderArchive();
})();
