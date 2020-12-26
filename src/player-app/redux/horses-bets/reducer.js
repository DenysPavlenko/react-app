import HorsesBetsTypes from './types';

const INITIAL_STATE = {
  bets: []
};

const horsesBetsReducer = (state = INITIAL_STATE, action) => {
  const { bets } = state;
  switch (action.type) {
    case HorsesBetsTypes.ADD_HORSES_BET:
      return {
        bets: [...bets, action.payload]
      }
    case HorsesBetsTypes.REMOVE_HORSES_BET:
      return {
        bets: bets.filter(({ id }) => id !== action.payload)
      }
    case HorsesBetsTypes.CLEAR_HORSES_BETS:
      return {
        bets: []
      }
    default:
      return state;
  }
};

export default horsesBetsReducer;
