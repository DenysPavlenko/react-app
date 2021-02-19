import { fetchState } from 'redux/_utils/fetch-state';
import ClientPendingTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientPendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientPendingTypes.FETCH_CLIENT_PENDING_REQUEST:
      return fetchState('request');
    case ClientPendingTypes.FETCH_CLIENT_PENDING_SUCCESS:
      return fetchState('success', action.payload);
    case ClientPendingTypes.FETCH_CLIENT_PENDING_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientPendingReducer;
