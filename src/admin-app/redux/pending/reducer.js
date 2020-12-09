import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import RecentLoginsActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const pendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecentLoginsActionTypes.FETCH_PENDING_REQUEST:
      return requestData();
    case RecentLoginsActionTypes.FETCH_PENDING_SUCCESS:
      return setData(action.payload);
    case RecentLoginsActionTypes.FETCH_PENDING_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default pendingReducer;
