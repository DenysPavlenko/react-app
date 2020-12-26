import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import LivePendingTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const livePendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LivePendingTypes.FETCH_LIVE_PENDING_REQUEST:
      return requestData();
    case LivePendingTypes.FETCH_LIVE_PENDING_SUCCESS:
      return setData(action.payload);
    case LivePendingTypes.FETCH_LIVE_PENDING_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default livePendingReducer;
