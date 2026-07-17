(()=>{
  const manifest={
    version:2,
    players:{
      base:[
        'data/players-1.js',
        'data/players-2.js',
        'data/players-3.js',
        'data/players-4.js',
        'data/birthdates.js'
      ],
      current:[
        'data/player-updates-2040-11-06.js',
        'data/player-results-2040-11-02.js',
        'data/player-cormac-okane-2040-11-06.js',
        'data/player-ben-barry-2040-11-09.js',
        'data/player-jim-oneill-2040-11-11.js',
        'data/player-jim-oneill-2040-11-15.js',
        'data/player-jim-oneill-nationalteam-2040-11-16.js',
        'data/player-ireland-result-2040-11-16.js',
        'data/player-rouviere-vinicius-2040-11-17.js',
        'data/player-champions-league-count-fix-2040-11-17.js',
        'data/player-ireland-result-2040-11-19.js'
      ],
      optional:{
        jakeRoberts:[
          'data/player-jake-roberts-transfer-2040-11-17.js',
          'data/player-jake-roberts-confirmed-2040-11-19.js'
        ]
      }
    },
    nationalTeam:{
      current:[
        'data/ireland-2040-11-16.js',
        'data/ireland-result-2040-11-16.js',
        'data/ireland-group-finale-belgium.js',
        'data/ireland-belgium-preview-adjustment-2040-11-16.js',
        'data/ireland-result-2040-11-19-belgium.js'
      ]
    },
    flatten(key){
      const group=this[key];
      if(!group)return [];
      return [...(group.base||[]),...(group.current||[])];
    }
  };
  window.FM_DATA_MANIFEST=manifest;
})();