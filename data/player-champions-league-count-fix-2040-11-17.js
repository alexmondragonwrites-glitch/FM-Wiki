(()=>{
const players=window.FM_PLAYERS||[];
const rouviere=players.find(x=>x.id==='basile-rouviere');
if(rouviere){
  rouviere.summary='Der ablösefreie Benfica-Fund wurde zum kreativen Spezialisten einer europäischen Dynastie: 88 Ligaspiele für Finn Harps, 16 Tore, zwei Champions-League-Titel und weiterhin jene seltene Mischung aus Dribbling, Passschärfe und Improvisation.';
  rouviere.strengths=(rouviere.strengths||[]).map(x=>x==='Drei Champions-League-Titel mit Finn Harps'?'Zwei Champions-League-Titel mit Finn Harps':x);
  if(rouviere.careerNarrative?.[3]) rouviere.careerNarrative[3]='Sein Debüt für Frankreich folgte kurz vor dem Wechsel. Die Nationalmannschaft blieb eine Randnotiz, während seine Vereinskarriere mit zwei Champions-League-Siegen, nationalen Titeln und mehreren Berufungen in Finn Harps’ beste Elf explodierte.';
  if(rouviere.deepAnalysis?.[3]) rouviere.deepAnalysis[3]={title:'Historischer Wert und Nachfolge',text:'Ablösefrei gekommen, zwei Champions-League-Titel gewonnen und über Jahre produktiv geblieben: Rouvières Transfer ist bereits ein Meisterstück. Mit 29 geht es nicht um einen abrupten Schnitt, sondern darum, sein Spezialwissen an die nächste Mittelfeldgeneration weiterzugeben.'};
}
const vinicius=players.find(x=>x.id==='vinicius');
if(vinicius?.careerNarrative?.[3]) vinicius.careerNarrative[3]='Bis November 2040 stehen 146 Ligaspiele für Finn Harps, nationale Serienerfolge, die Klub-WM und zwei Champions-League-Titel. Seine Laufbahn ist weniger eine Sammlung einzelner Höhepunkte als die durchgehende Mittellinie der gesamten Harps-Dynastie.';
})();