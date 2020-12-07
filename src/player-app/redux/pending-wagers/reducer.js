import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import PendingWagersActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const pendingWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PendingWagersActionTypes.FETCH_PENDING_WAGERS_REQUEST:
      return requestData();
    case PendingWagersActionTypes.FETCH_PENDING_WAGERS_SUCCESS:
      return setData(action.payload);
    case PendingWagersActionTypes.FETCH_PENDING_WAGERS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default pendingWagersReducer;
