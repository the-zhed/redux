import { Pack } from './pack.model';

import { Action } from 'redux';
import * as PackActions from './pack.actions';

export interface PacksState {
  currentPackIndex: number;
  entities: Pack[];
}

const initialState: PacksState = {
  currentPackIndex: null,
  entities: [
    { name: "Pack 1", progressRound: 0, rounds: makeRounds(1, 20, false) },
    { name: "Pack 2", progressRound: 0, rounds: makeRounds(21, 20, false) },
    { name: "Pack 3", progressRound: 0, rounds: makeRounds(41, 20, false) },
    { name: "Pack 4", progressRound: 0, rounds: makeRounds(61, 20, false) },
    { name: "Pack 5", progressRound: 0, rounds: makeRounds(81, 20, false) },
  ],
};

export const PacksReducer = (state: PacksState = initialState, action: Action): PacksState => {
  switch (action.type) {
    case PackActions.LEVEL_UP_PACK: {
      const packIndex = (action as PackActions.SelectPackAction).packIndex;
      return {
        currentPackIndex: packIndex,
        entities: state.entities,
      };
    }
    case PackActions.LEVEL_UP_PACK: {
      const pack = (action as PackActions.LevelUpPackAction).pack;
      const level = (action as PackActions.LevelUpPackAction).level;
    }
    default: {
      return state;
    }
  }
}

/**
 * rounds
 * @param start 시작 숫자
 * @param range 숫자 범위
 * @param isClear 해당 round를 성공한 여부
 * @returns Array<[number, boolean]>
 * @example
 * // returns [[21, false], [22, false], [23, false], [24, false]]
 * makeRounds(21, 4, false)
 */
function makeRounds(start: number, range: number, isClear: boolean): [number, boolean][] {
  return Array(range).map((_, index) => ([start + index + 1, isClear]));
}
