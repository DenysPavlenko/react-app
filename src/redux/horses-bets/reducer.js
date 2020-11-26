import HorsesBetsActionTypes from './types';

const INITIAL_STATE = {
  bets: []
};

const HorsesBetsReducer = (state = INITIAL_STATE, action) => {
  const { bets } = state;
  switch (action.type) {
    case HorsesBetsActionTypes.ADD_HORSES_BET:
      return {
        ...state,
        bets: [...bets, action.payload]
      }
    case HorsesBetsActionTypes.REMOVE_HORSES_BET:
      return {
        ...state,
        bets: bets.filter(({ id }) => id !== action.payload)
      }
    case HorsesBetsActionTypes.CLEAR_HORSES_BETS:
      return {
        ...state,
        bets: []
      }
    default:
      return state;
  }
};

export default HorsesBetsReducer;
