(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='finn-harps');
  if(!club)return;

  club.profileDate='2041-01-12';
  club.infrastructure={
    ...(club.infrastructure||{}),
    stadiumPlanning:{
      status:'Planung eingeleitet',
      announced:'2041-01-12',
      expectedPlanningCompletion:'Januar 2043',
      expectedCapacity:20000,
      expectedCapacityLabel:'rund 20.000 Plätze',
      city:'Noch nicht bestimmt',
      cost:'Noch nicht bestimmt',
      fullRoof:'Noch nicht bestimmt',
      pitchHeating:'Noch nicht bestimmt',
      constructionStart:'Noch nicht bestimmt',
      expectedConstructionCompletion:'Noch nicht bestimmt',
      boardStatement:'Der Vorstand hat die Pläne für ein neues Stadion offiziell in die Wege geleitet. Die konkrete Bauentscheidung folgt erst nach Abschluss der Planungsphase.'
    }
  };

  club.developmentProjects=[
    ...((club.developmentProjects||[]).filter(project=>project.id!=='2041-new-stadium-planning')),
    {
      id:'2041-new-stadium-planning',
      type:'Stadion',
      status:'Planung',
      title:'Neues Stadion für Finn Harps wird geplant',
      approved:'2041-01-12',
      planningCompletion:'Januar 2043',
      capacity:'rund 20.000 Plätze',
      cost:'Noch offen',
      note:'Standort, Baukosten, Überdachung, Rasenheizung sowie Bau- und Fertigstellungstermine sind noch nicht festgelegt. Der Meilenstein markiert den Beginn der Planungsphase, noch nicht den endgültigen Baubeschluss.'
    }
  ];

  club.tags=[...new Set([...(club.tags||[]),'Stadionplanung 2041','20.000er-Stadion','Infrastrukturprojekt'])];
})();