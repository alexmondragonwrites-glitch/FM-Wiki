(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_TRANSFERS=window.FM_TRANSFERS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const transferId='2042-02-22-graham-varma-bournemouth';
  const player=window.FM_PLAYERS.find(x=>x.name==='Graham Varma'||x.id==='graham-varma');
  if(player){
    player.profileDate='2042-02-22';
    player.futureTransfer={
      status:'Bestätigt',destination:'Bournemouth',fee:3500000,currency:'EUR',completionDate:'2042-06-10',
      trainingCompensation:{club:'Everton',percentage:4.5},transferBudgetIncrease:2000000,
      note:'Varma unterschreibt bei Bournemouth. Der Wechsel wird am 10. Juni 2042 vollzogen; ein Angebot der Colorado Rapids lehnte er ab.'
    };
  }

  upsert(window.FM_TRANSFERS,{
    id:transferId,date:'2042-02-22',season:2042,type:'Abgang',status:'Bestätigt',player:'Graham Varma',position:'TW',age:24,
    from:'Finn Harps',to:'Bournemouth',fee:3500000,currency:'EUR',completionDate:'2042-06-10',
    details:{trainingCompensationClub:'Everton',trainingCompensationPercentage:4.5,transferBudgetIncrease:2000000,rejectedClub:'Colorado Rapids'},
    headline:'Varma entscheidet sich für Bournemouth',
    summary:'Der 24-jährige Torhüter Graham Varma verlässt Finn Harps im Juni für 3,5 Mio. € und wechselt zu Bournemouth. Everton erhält 4,5 % der Transfersumme als Ausbildungsentschädigung; der Harps-Vorstand stellt nach Abschluss des Deals 2 Mio. € zusätzlich für das Transferbudget bereit.'
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:transferId,date:'2042-02-22',player:'Graham Varma',type:'transfer',title:'Wechsel zu Bournemouth bestätigt',
    detail:'Varma wechselt am 10. Juni 2042 für 3,5 Mio. € zu Bournemouth. Er hatte zuvor ein Angebot der Colorado Rapids abgelehnt.'
  });

  const reportId='2042-02-22-graham-varma-bournemouth-report';
  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Transfer',date:'2042-02-22',competition:'Finn Harps · Transfermarkt',
    headline:'Varma wählt Bournemouth: Harps-Torwart geht im Juni in die Premier League',
    subheadline:'Graham Varma hat seinen Vertrag unterschrieben. Bournemouth zahlt 3,5 Mio. €, Everton erhält 4,5 Prozent Ausbildungsentschädigung. Ein Angebot der Colorado Rapids lehnte der 24-Jährige ab.',
    label:'TRANSFER · ABGANG · 22.02.2042',
    heroStat:{label:'Ablöse',value:'3,5 Mio. €',note:'Wechsel am 10. Juni 2042'},
    backlink:{href:'kaderplanung.html',label:'← ZUR KADERPLANUNG'},
    intro:'Finn Harps hat den nächsten Sommerabgang geregelt. Graham Varma verlässt Stranorlar im Juni und schließt sich Bournemouth an. Für einen Torhüter, der im aktuellen Harps-Kader hinter Paulo Henrique und Evan Reilly um Minuten kämpfen muss, ist der Wechsel eine nachvollziehbare Chance auf einen Neustart in England.',
    sections:[
      {title:'Bournemouth statt Colorado',text:'Varma entschied sich für Bournemouth und lehnte zuvor ein Angebot der Colorado Rapids ab. Der Wechsel wird am 10. Juni 2042 vollzogen.'},
      {title:'3,5 Millionen Euro Ablöse',text:'Finn Harps erhält 3,5 Mio. € für den 24-Jährigen. Everton bekommt davon 4,5 Prozent als Ausbildungsentschädigung.'},
      {title:'Zwei Millionen zurück ins Transferbudget',text:'Der Vorstand hat zugesagt, nach Abschluss des Transfers 2 Mio. € zum Transferbudget hinzuzufügen. Damit bringt der Abgang nicht nur Platz im Torwartkader, sondern auch zusätzliche Flexibilität für die nächste Transferphase.'}
    ],
    verdictHeading:'Sauberer Abgang für alle Seiten',
    verdict:'Varma bekommt mit Bournemouth eine neue sportliche Perspektive, Finn Harps monetarisiert einen Kaderspieler und hält gleichzeitig die Torwartposition mit Henrique und Reilly weiterhin breit besetzt. Für 3,5 Mio. € ist das ein nüchterner, sinnvoller Deal statt eines spektakulären Transfers.',
    sourcesHeading:'Grundlage',
    sourcesNote:'Ablöse, Zielverein, Ausbildungsentschädigung, Transferdatum, abgelehntes Angebot und Budgetzusage basieren auf dem FM-Screenshot zur bestätigten Verpflichtung.',
    sources:['FM24 · Graham Varma bestätigt Wechsel zu Bournemouth · 2042']
  });

  upsert(window.FM_NEWS,{
    id:'2042-02-22-graham-varma-bournemouth-news',date:'2042-02-22',season:2042,category:'Transfers',accent:'blue',featured:false,
    eyebrow:'TRANSFER · ABGANG',title:'Varma wechselt im Juni für 3,5 Mio. € zu Bournemouth',
    summary:'Der 24-jährige Torhüter entscheidet sich für Bournemouth. Everton erhält 4,5 % Ausbildungsentschädigung, 2 Mio. € fließen nach Abschluss des Deals ins Harps-Transferbudget.',
    href:`presse.html?id=${reportId}`,reportId
  });
})();