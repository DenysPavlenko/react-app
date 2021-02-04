import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import SportsScheduleTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const sportsScheduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_REQUEST:
      return requestData();
    case SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_SUCCESS:
      return setData(action.payload);
    case SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default sportsScheduleReducer;
