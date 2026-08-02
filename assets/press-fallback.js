(()=>{
  const id=new URLSearchParams(location.search).get('id');
  if(!id||!(id.endsWith('-spielbericht')))return;
  const reports=window.FM_PRESS_REPORTS||[];
  if(reports.some(report=>report.id===id))return;
  const match=id.match(/^(\d{4}-\d{2}-\d{2})-(.+)-spielbericht$/);
  if(!match)return;
  const [,date,slug]=match;
  const path=`data/${slug}-result-${date}.js`;
  try{
    const request=new XMLHttpRequest();
    request.open('GET',path,false);
    request.send(null);
    if(request.status===200||request.status===0){
      (0,eval)(request.responseText);
      return;
    }
    console.warn('Fallback-Berichtsdatei nicht gefunden:',path,request.status);
  }catch(error){
    console.warn('Fallback-Bericht konnte nicht geladen werden:',path,error);
  }
})();