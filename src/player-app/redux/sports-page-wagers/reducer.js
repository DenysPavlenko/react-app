import SportsPageWagersActionTypes from './types';

const INITIAL_STATE = {
  showSportsWagers: false
};

const sportsPageWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsPageWagersActionTypes.TOGGLE_SPORTS_PAGE_WAGERS:
      return {
        showSportsWagers: !state.showSportsWagers
      }
    case SportsPageWagersActionTypes.HIDE_SPORTS_PAGE_WAGERS:
      return {
        showSportsWagers: false
      }
    default:
      return state;
  }
};

export default sportsPageWagersReducer;
