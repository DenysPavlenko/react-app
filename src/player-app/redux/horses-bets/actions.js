import HorsesBetsTypes from './types';

export const addHorsesBet = bet => ({
  type: HorsesBetsTypes.ADD_HORSES_BET,
  payload: bet
});

export const removeHorsesBet = id => ({
  type: HorsesBetsTypes.REMOVE_HORSES_BET,
  payload: id
});

export const clearHorsesBet = () => ({
  type: HorsesBetsTypes.CLEAR_HORSES_BETS,
});
