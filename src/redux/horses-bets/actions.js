import HorsesBetsActionTypes from './types';

export const addHorsesBet = bet => ({
  type: HorsesBetsActionTypes.ADD_HORSES_BET,
  payload: bet
});

export const removeHorsesBet = id => ({
  type: HorsesBetsActionTypes.REMOVE_HORSES_BET,
  payload: id
});

export const clearHorsesBet = () => ({
  type: HorsesBetsActionTypes.CLEAR_HORSES_BETS,
});
