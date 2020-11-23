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
      return {
        loading: true,
        data: null,
        error: false,
        errorDetails: null,
      }
    case LiveHistoryActionTypes.FETCH_LIVE_HISTORY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
        errorDetails: null,
      }
    case LiveHistoryActionTypes.FETCH_LIVE_HISTORY_FAILURE:
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

export default liveHistoryReducer;
