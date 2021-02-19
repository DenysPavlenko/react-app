import { fetchState } from 'redux/_utils/fetch-state';
import SportsScheduleTypes from './types';

const INITIAL_STATE = fetchState('initial');

const sportsScheduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_REQUEST:
      return fetchState('request');
    case SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_SUCCESS:
      return fetchState('success', action.payload);
    case SportsScheduleTypes.FETCH_SPORTS_SCHEDULE_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default sportsScheduleReducer;
