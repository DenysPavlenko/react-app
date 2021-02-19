import { fetchState } from 'redux/_utils/fetch-state';
import ClientInternetLogTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientInternetLogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientInternetLogTypes.FETCH_CLIENT_INTERNET_LOG_REQUEST:
      return fetchState('request');
    case ClientInternetLogTypes.FETCH_CLIENT_INTERNET_LOG_SUCCESS:
      return fetchState('success', action.payload);
    case ClientInternetLogTypes.FETCH_CLIENT_INTERNET_LOG_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientInternetLogReducer;
