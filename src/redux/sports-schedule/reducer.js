import { requestData, setData, setError } from '../_utils/fetch-utils';
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
      return requestData();
    case SportsScheduleActionTypes.FETCH_SPORTS_SCHEDULE_SUCCESS:
      return setData(action.payload);
    case SportsScheduleActionTypes.FETCH_SPORTS_SCHEDULE_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default sportsScheduleReducer;
