import { fetchState } from 'redux/_utils/fetch-state';
import PositionLiveSportsService from './types';

const INITIAL_STATE = fetchState('initial');

const positionLiveSportsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PositionLiveSportsService.FETCH_POSITION_LIVE_SPORTS_REQUEST:
      return fetchState('request');
    case PositionLiveSportsService.FETCH_POSITION_LIVE_SPORTS_SUCCESS:
      return fetchState('success', action.payload);
    case PositionLiveSportsService.FETCH_POSITION_LIVE_SPORTS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default positionLiveSportsReducer;
