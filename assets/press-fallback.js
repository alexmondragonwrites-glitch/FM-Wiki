(()=>{
  const id=new URLSearchParams(location.search).get('id');
  if(!id)return;
  const reports=window.FM_PRESS_REPORTS||[];
  if(reports.some(report=>report.id===id))return;

  const match=id.match(/^(\d{4}-\d{2}-\d{2})-(.+)-(spielbericht|vorbericht)$/);
  if(!match)return;
  const [,date,slug,type]=match;
  const candidates=type==='spielbericht'
    ?[`data/${slug}-result-${date}.js`]
    :[`data/${slug}-preview-${date}.js`,`data/press-reports-${date}-${slug}.js`,`data/club-${slug}-${date}.js`];

  for(const path of candidates){
    try{
      const request=new XMLHttpRequest();
      request.open('GET',path,false);
      request.send(null);
      if(request.status===200||request.status===0){
        (0,eval)(request.responseText);
        if((window.FM_PRESS_REPORTS||[]).some(report=>report.id===id))return;
      }
    }catch(error){
      console.warn('Fallback-Bericht konnte nicht geladen werden:',path,error);
    }
  }
  console.warn('Keine passende Fallback-Berichtsdatei gefunden:',id,candidates);
})();
