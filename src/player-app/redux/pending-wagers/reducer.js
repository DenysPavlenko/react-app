import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import PendingWagersTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const pendingWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PendingWagersTypes.FETCH_PENDING_WAGERS_REQUEST:
      return requestData();
    case PendingWagersTypes.FETCH_PENDING_WAGERS_SUCCESS:
      return setData(action.payload);
    case PendingWagersTypes.FETCH_PENDING_WAGERS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default pendingWagersReducer;
