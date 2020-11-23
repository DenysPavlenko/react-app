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
      return {
        loading: true,
        data: null,
        error: false,
        errorDetails: null,
      }
    case LivePendingActionTypes.FETCH_LIVE_PENDING_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
        errorDetails: null,
      }
    case LivePendingActionTypes.FETCH_LIVE_PENDING_FAILURE:
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

export default livePendingReducer;
