import { fetchState } from 'redux/_utils/fetch-state';
import PendingTypes from './types';

const INITIAL_STATE = fetchState('initial');

const pendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PendingTypes.FETCH_PENDING_REQUEST:
      return fetchState('request');
    case PendingTypes.FETCH_PENDING_SUCCESS:
      return fetchState('success', action.payload);
    case PendingTypes.FETCH_PENDING_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default pendingReducer;
