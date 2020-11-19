import LiveProgramActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const liveProgramReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LiveProgramActionTypes.FETCH_LIVE_PROGRAM_REQUEST:
      return {
        loading: true,
        data: null,
        error: false,
        errorDetails: null,
      }
    case LiveProgramActionTypes.FETCH_LIVE_PROGRAM_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
        errorDetails: null,
      }
    case LiveProgramActionTypes.FETCH_LIVE_PROGRAM_FAILURE:
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

export default liveProgramReducer;
