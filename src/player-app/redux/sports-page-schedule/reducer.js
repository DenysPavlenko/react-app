import SportsPageScheduleTypes from './types';

const INITIAL_STATE = {
  showSportsSchedule: false
};

const sportsPageScheduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsPageScheduleTypes.TOGGLE_SPORTS_PAGE_SCHEDULE:
      return {
        showSportsSchedule: !state.showSportsSchedule
      }
    default:
      return state;
  }
};

export default sportsPageScheduleReducer;
