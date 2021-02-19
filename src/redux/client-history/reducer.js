import { fetchState } from 'redux/_utils/fetch-state';
import ClientHistoryTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientHistoryTypes.FETCH_CLIENT_HISTORY_REQUEST:
      return fetchState('request');
    case ClientHistoryTypes.FETCH_CLIENT_HISTORY_SUCCESS:
      return fetchState('success', action.payload);
    case ClientHistoryTypes.FETCH_CLIENT_HISTORY_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientHistoryReducer;
