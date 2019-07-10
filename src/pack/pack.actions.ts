import { Action, ActionCreator } from 'redux';
import { Pack } from './pack.model';

export const SELECT_PACK = '[Pack] Select';
export interface SelectPackAction extends Action {
  pack: Pack;
}
export const selectPack: ActionCreator<SelectPackAction> =
  (pack) => ({
    type: SELECT_PACK,
    pack,
  });


export const LEVEL_UP_PACK = '[Pack] Level Up';
export interface LevelUpPackAction extends Action {
  level: number;
  pack: Pack;
}
export const levelUpPack: ActionCreator<LevelUpPackAction> =
  (level, pack) => ({
    type: LEVEL_UP_PACK,
    level,
    pack,
  });
