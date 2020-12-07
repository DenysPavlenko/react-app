import SportsPageScheduleActionTypes from './types';

const INITIAL_STATE = {
  isScheduleShown: false
};

const sportsPageScheduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsPageScheduleActionTypes.TOGGLE_SPORTS_PAGE_SCHEDULE:
      const { isScheduleShown } = state;
      return {
        isScheduleShown: !isScheduleShown
      }
    default:
      return state;
  }
};

export default sportsPageScheduleReducer;
