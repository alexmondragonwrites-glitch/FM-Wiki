(()=>{
  const match=(window.FM_MATCHES||[]).find(x=>x.id==='2042-03-05-caen-finn-harps-champions-league-round16-first-leg');
  if(match&&match.analysis){
    match.analysis.escarcega='Escárcega liefert auf der anderen Seite eine Antwort auf höchstem Niveau. Der 31-jährige Stürmer erzielt das 0:2 und steuert insgesamt zwei Vorlagen bei. Drei direkte Torbeteiligungen in einem Champions-League-Achtelfinale sind ein weiterer Beleg dafür, dass sein Transfer nicht nur nach Namen, sondern auch sportlich funktioniert.';
  }

  const player=(window.FM_PLAYERS||[]).find(x=>x.name==='Emerson Escárcega'||x.id==='emerson-escarcega');
  if(player)player.age=31;

  const report=(window.FM_PRESS_REPORTS||[]).find(x=>x.id==='2042-03-05-caen-finn-harps-4-4-spielbericht');
  if(report){
    const replaceAge=text=>typeof text==='string'?text.replace(/42-jährig(?:e|er|en)?/g,'31-jährig').replace(/mit 42 Jahren/g,'mit 31 Jahren'):text;
    report.intro=replaceAge(report.intro);
    report.subheadline=replaceAge(report.subheadline);
    report.verdict=replaceAge(report.verdict);
    (report.sections||[]).forEach(section=>{section.text=replaceAge(section.text);});
  }
})();