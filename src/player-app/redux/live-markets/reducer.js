import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import LiveMarketsTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const liveMarketsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LiveMarketsTypes.FETCH_LIVE_MARKETS_REQUEST:
      return requestData();
    case LiveMarketsTypes.FETCH_LIVE_MARKETS_SUCCESS:
      return setData(action.payload);
    case LiveMarketsTypes.FETCH_LIVE_MARKETS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default liveMarketsReducer;
