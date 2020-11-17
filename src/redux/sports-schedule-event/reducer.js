import SportsScheduleEventActionTypes from './types';

const INITIAL_STATE = {
  event: 'Up next'
};

const sportsScheduleEventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsScheduleEventActionTypes.SET_SPORTS_SCHEDULE_EVENT:
      return {
        event: action.payload,
      }
    default:
      return state;
  }
};

export default sportsScheduleEventReducer;
