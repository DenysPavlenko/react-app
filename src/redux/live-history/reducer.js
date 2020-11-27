import { requestData, setData, setError } from '../_utils/fetch-utils';
import LiveHistoryActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const liveHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LiveHistoryActionTypes.FETCH_LIVE_HISTORY_REQUEST:
      return requestData();
    case LiveHistoryActionTypes.FETCH_LIVE_HISTORY_SUCCESS:
      return setData(action.payload);
    case LiveHistoryActionTypes.FETCH_LIVE_HISTORY_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default liveHistoryReducer;
