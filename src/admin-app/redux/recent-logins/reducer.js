import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import RecentLoginsTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const recentLoginsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecentLoginsTypes.FETCH_RECENT_LOGINS_REQUEST:
      return requestData();
    case RecentLoginsTypes.FETCH_RECENT_LOGINS_SUCCESS:
      return setData(action.payload);
    case RecentLoginsTypes.FETCH_RECENT_LOGINS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default recentLoginsReducer;
