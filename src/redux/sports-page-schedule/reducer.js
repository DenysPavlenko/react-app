import SportsPageScheduleActionTypes from './types';

const INITIAL_STATE = {
  isScheduleActive: false
};

const sportsPageScheduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsPageScheduleActionTypes.TOGGLE_SPORTS_PAGE_SCHEDULE:
      const { isScheduleActive } = state;
      return {
        isScheduleActive: !isScheduleActive
      }
    default:
      return state;
  }
};

export default sportsPageScheduleReducer;
