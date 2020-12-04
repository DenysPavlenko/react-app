import SportsWagersActionTypes from './types';
import { toggleWager, addRiskAndWin } from './utils';

const INITIAL_STATE = {
  wagers: []
};

const sportsWagersReducer = (state = INITIAL_STATE, action) => {
  const { wagers } = state;
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
    case SportsWagersActionTypes.ADD_RISK_AND_WIN:
      return {
        ...state,
        wagers: addRiskAndWin(wagers, action.payload)
      }
    default:
      return state;
  }
};

export default sportsWagersReducer;
