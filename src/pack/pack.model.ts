export interface Pack {
  name: string;
  progressRound: number;
  rounds: [number, number];
}

export interface PackObject {
  [packNumber: number]: Pack;
}

export interface InitialPacks {
  currentPack: number;
  packs: PackObject;
}

// export const initialPacks: Pack[] = [
//   { name: "Pack 1", progressRound: 0, rounds: [1, 20] },
//   { name: "Pack 2", progressRound: 0, rounds: [21, 40] },
//   { name: "Pack 3", progressRound: 0, rounds: [41, 60] },
//   { name: "Pack 4", progressRound: 0, rounds: [61, 80] },
//   { name: "Pack 5", progressRound: 0, rounds: [81, 100] },
// ];

export const initialPacks: InitialPacks = {
  currentPack: null,
  packs: {
    1: { name: "Pack 1", progressRound: 0, rounds: [1, 20] },
    2: { name: "Pack 2", progressRound: 0, rounds: [21, 40] },
    3: { name: "Pack 3", progressRound: 0, rounds: [41, 60] },
    4: { name: "Pack 4", progressRound: 0, rounds: [61, 80] },
    5: { name: "Pack 5", progressRound: 0, rounds: [81, 100] },
  },
};
