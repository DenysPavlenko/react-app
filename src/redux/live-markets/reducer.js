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
      return {
        loading: true,
        data: null,
        error: false,
        errorDetails: null,
      }
    case LiveMarketsActionTypes.FETCH_LIVE_MARKETS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
        errorDetails: null,
      }
    case LiveMarketsActionTypes.FETCH_LIVE_MARKETS_FAILURE:
      return {
        loading: false,
        data: null,
        error: true,
        errorDetails: action.payload,
      }
    default:
      return state;
  }
};

export default liveMarketsReducer;
