import SportsWagersActionTypes from './types';
import { toggleWager } from './utils';

const INITIAL_STATE = {
  wagers: []
};

const sportsWagersReducer = (state = INITIAL_STATE, action) => {
  const { wagers } = state;
  switch (action.type) {
    case SportsWagersActionTypes.TOGGLE_SPORTS_WAGER:
      return {
        wagers: toggleWager(wagers, action.payload)
      }
    case SportsWagersActionTypes.REMOVE_SPORTS_WAGER:
      return {
        wagers: wagers.filter(({ id }) => id !== action.payload)
      }
    case SportsWagersActionTypes.CLEAR_SPORTS_WAGERS:
      return {
        wagers: []
      }
    default:
      return state;
  }
};

export default sportsWagersReducer;
