import { fetchState } from 'redux/_utils/fetch-state';
import PositionTodayTypes from './types';

const INITIAL_STATE = fetchState('initial');

const positionTodayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PositionTodayTypes.FETCH_POSITION_TODAY_REQUEST:
      return fetchState('request');
    case PositionTodayTypes.FETCH_POSITION_TODAY_SUCCESS:
      return fetchState('success', action.payload);
    case PositionTodayTypes.FETCH_POSITION_TODAY_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default positionTodayReducer;
