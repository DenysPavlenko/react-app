import { fetchState } from 'redux/_utils/fetch-state';
import PendingWagersTypes from './types';

const INITIAL_STATE = fetchState('initial');

const pendingWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PendingWagersTypes.FETCH_PENDING_WAGERS_REQUEST:
      return fetchState('request');
    case PendingWagersTypes.FETCH_PENDING_WAGERS_SUCCESS:
      return fetchState('success', action.payload);
    case PendingWagersTypes.FETCH_PENDING_WAGERS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default pendingWagersReducer;
