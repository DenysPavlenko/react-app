import { fetchState } from 'redux/_utils/fetch-state';
import ClientFreePlayTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientTransactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientFreePlayTypes.FETCH_CLIENT_FREE_PLAY_REQUEST:
      return fetchState('request');
    case ClientFreePlayTypes.FETCH_CLIENT_FREE_PLAY_SUCCESS:
      return fetchState('success', action.payload);
    case ClientFreePlayTypes.FETCH_CLIENT_FREE_PLAY_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientTransactionsReducer;
