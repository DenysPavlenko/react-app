import SportsScheduleActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const sportsScheduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsScheduleActionTypes.FETCH_SPORTS_SCHEDULE_REQUEST:
      return {
        loading: true,
        data: null,
        error: false,
        errorDetails: null,
      }
    case SportsScheduleActionTypes.FETCH_SPORTS_SCHEDULE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
        errorDetails: null,
      }
    case SportsScheduleActionTypes.FETCH_SPORTS_SCHEDULE_FAILURE:
      return {
        loading: false,
        data: null,
        error: true,
        errorDetails: action.payload,
      }
    default:
      return state;
  }
};

export default sportsScheduleReducer;
