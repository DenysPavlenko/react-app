import { fetchState } from 'redux/_utils/fetch-state';
import BiggestPendingWagersTypes from './types';

const INITIAL_STATE = fetchState('initial');

const biggestPendingWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_REQUEST:
      return fetchState('request');
    case BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_SUCCESS:
      return fetchState('success', action.payload);
    case BiggestPendingWagersTypes.FETCH_BIGGEST_PENDING_WAGERS_FAILURE:
      return fetchState('error', action.payload);
    default:
      return state;
  }
};

export default biggestPendingWagersReducer;
