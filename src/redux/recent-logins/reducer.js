import { fetchState } from 'redux/_utils/fetch-state';
import RecentLoginsTypes from './types';

const INITIAL_STATE = fetchState('initial');

const recentLoginsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecentLoginsTypes.FETCH_RECENT_LOGINS_REQUEST:
      return fetchState('request');
    case RecentLoginsTypes.FETCH_RECENT_LOGINS_SUCCESS:
      return fetchState('success', action.payload);
    case RecentLoginsTypes.FETCH_RECENT_LOGINS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default recentLoginsReducer;
