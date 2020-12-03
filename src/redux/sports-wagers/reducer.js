import SportsWagersActionTypes from './types';
import { toggleWager } from './utils';

const INITIAL_STATE = {
  wagers: [],
  totalWagered: '0.00'
};

const sportsWagersReducer = (state = INITIAL_STATE, action) => {
  const { wagers, totalWagered } = state;
  switch (action.type) {
    case SportsWagersActionTypes.TOGGLE_SPORTS_WAGER:
      return {
        ...state,
        wagers: toggleWager(wagers, action.payload)
      }
    case SportsWagersActionTypes.REMOVE_SPORTS_WAGER:
      return {
        ...state,
        wagers: wagers.filter(({ id }) => id !== action.payload)
      }
    case SportsWagersActionTypes.CLEAR_SPORTS_WAGERS:
      return {
        ...state,
        wagers: []
      }
    case SportsWagersActionTypes.SET_TOTAL_WAGERED:
      return {
        ...state,
        totalWagered: parseInt(totalWagered) + parseInt(action.payload)
      }
    default:
      return state;
  }
};

export default sportsWagersReducer;
