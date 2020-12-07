import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import LivePendingActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const livePendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LivePendingActionTypes.FETCH_LIVE_PENDING_REQUEST:
      return requestData();
    case LivePendingActionTypes.FETCH_LIVE_PENDING_SUCCESS:
      return setData(action.payload);
    case LivePendingActionTypes.FETCH_LIVE_PENDING_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default livePendingReducer;
