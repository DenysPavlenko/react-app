import { requestData, setData, setError } from '../_utils/fetch-utils';
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
      return requestData();
    case LiveProgramActionTypes.FETCH_LIVE_PROGRAM_SUCCESS:
      return setData(action.payload);
    case LiveProgramActionTypes.FETCH_LIVE_PROGRAM_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default liveProgramReducer;
