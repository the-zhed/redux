import { Action } from 'redux';

import { Round } from './round.model';
import * as RoundActions from './round.actions';

export interface RoundsEntities {
  [id: string]: Round;
}

export interface RoundsState {
  currentLevel: number;
  currentRoundId: string;
  entities: RoundsEntities;
}

const initialState: RoundsState = {
  currentLevel: 1,
  currentRoundId: null,
  entities: {},
};

export const RoundsReducer = (state: RoundsState = initialState, action: Action): RoundsState => {
  switch (action.type) {
    case RoundActions.LEVEL_UP_ROUND: {
      return {
        currentLevel: state.currentLevel + 1,
        currentRoundId: state.currentRoundId,
        entities: state.entities,
      };
    }
    case RoundActions.SELECT_ROUND: {
      return {
        currentLevel: state.currentLevel,
        currentRoundId: (action as RoundActions.SelectRoundAction).roundId,
        entities: state.entities,
      };
    }
    default: {
      return state;
    }
  }
}
