import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import LiveHistoryTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const liveHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LiveHistoryTypes.FETCH_LIVE_HISTORY_REQUEST:
      return requestData();
    case LiveHistoryTypes.FETCH_LIVE_HISTORY_SUCCESS:
      return setData(action.payload);
    case LiveHistoryTypes.FETCH_LIVE_HISTORY_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default liveHistoryReducer;
