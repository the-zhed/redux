import { Action, ActionCreator } from 'redux';

export const LEVEL_UP_ROUND = '[Round] Level Up';
export interface LevelUpRoundAction extends Action { }
export const levelUpRound: ActionCreator<LevelUpRoundAction> =
  () => ({
    type: LEVEL_UP_ROUND,
  });

export const SELECT_ROUND = '[Round] Select';
export interface SelectRoundAction extends Action {
  roundId: string;
}
export const selectRound: ActionCreator<SelectRoundAction> =
  (roundId) => ({
    type: SELECT_ROUND,
    roundId,
  });
