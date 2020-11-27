import { requestData, setData, setError } from '../_utils/fetch-utils';
import LiveMarketsActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const liveMarketsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LiveMarketsActionTypes.FETCH_LIVE_MARKETS_REQUEST:
      return requestData();
    case LiveMarketsActionTypes.FETCH_LIVE_MARKETS_SUCCESS:
      return setData(action.payload);
    case LiveMarketsActionTypes.FETCH_LIVE_MARKETS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default liveMarketsReducer;
