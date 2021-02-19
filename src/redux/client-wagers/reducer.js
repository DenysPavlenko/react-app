import { fetchState } from 'redux/_utils/fetch-state';
import ClientWagersTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientWagersTypes.FETCH_CLIENT_WAGERS_REQUEST:
      return fetchState('request');
    case ClientWagersTypes.FETCH_CLIENT_WAGERS_SUCCESS:
      return fetchState('success', action.payload);
    case ClientWagersTypes.FETCH_CLIENT_WAGERS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientWagersReducer;
