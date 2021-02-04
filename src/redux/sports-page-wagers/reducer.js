import SportsPageWagersTypes from './types';

const INITIAL_STATE = {
  showSportsWagers: false
};

const sportsPageWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsPageWagersTypes.TOGGLE_SPORTS_PAGE_WAGERS:
      return {
        showSportsWagers: !state.showSportsWagers
      }
    case SportsPageWagersTypes.HIDE_SPORTS_PAGE_WAGERS:
      return {
        showSportsWagers: false
      }
    default:
      return state;
  }
};

export default sportsPageWagersReducer;
