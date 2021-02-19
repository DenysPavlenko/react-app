import { fetchState } from 'redux/_utils/fetch-state';
import SportsTypes from './types';

const INITIAL_STATE = fetchState('initial');

const sportsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SportsTypes.FETCH_SPORTS_REQUEST:
      return fetchState('request');
    case SportsTypes.FETCH_SPORTS_SUCCESS:
      return fetchState('success', action.payload);
    case SportsTypes.FETCH_SPORTS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default sportsReducer;
