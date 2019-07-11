const one = {
  currentLevel: 1,
  levels: {
    'level_1': {
      id: 'level_1',
      pack: 'pack_1',
      roundId: 'round_1',
      isOpened: true,
    },
    'level_2': {
      id: 'level_2',
      pack: 'pack_1',
      roundId: 'round_2',
      isOpened: false,
    },
  },
  selectedPackId: 'pack_1', // 'Pack1' | 'Pack2' | 'Pack3' | 'Pack4' | 'Pack5'
  rounds: {
    'round_1': {
      id: 'round_1',
      map: [],
    },
    'round_2': {
      id: 'round_2',
      map: [],
    },
  },
};


const initState = {
  currentLevel: 30,
  packs: {
    'pack_1': {
      id: 'pack_1',
      name: 'Pack 1',
      rounds: [
        [  1, true ], [  2, true ], [  3, true ], [  4, true ],
        [  5, true ], [  6, true ], [  7, true ], [  8, true ],
        [  9, true ], [ 10, true ], [ 11, true ], [ 12, true ],
        [ 13, true ], [ 14, true ], [ 15, true ], [ 16, true ],
        [ 17, true ], [ 18, true ], [ 19, true ], [ 20, true ],
      ],
      // opened: "20/20",
    },
    'pack_2': {
      id: 'pack_2',
      name: 'Pack 2',
      rounds: [
        [ 21, true  ], [ 22, true  ], [ 23, true  ], [ 24, true  ],
        [ 25, true  ], [ 26, true  ], [ 27, true  ], [ 28, true  ],
        [ 29, true  ], [ 30, true  ], [ 31, false ], [ 32, false ],
        [ 33, false ], [ 34, false ], [ 35, false ], [ 36, false ],
        [ 37, false ], [ 38, false ], [ 39, false ], [ 40, false ],
      ],
      // opened: "10/10",
    },
    // 'pack_3': { },
    // 'pack_4': { },
    // 'pack_5': { },
  },
  selectedPackId: 'pack_2',
  rounds: {
    'round_1': {
      id: 'round_1',
      name: 'Round 1',
      map: [],
    },
    'round_2': {
      id: 'round_2',
      name: 'Round 2',
      map: [],
    },
  },
}
