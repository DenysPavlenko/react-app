import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import LiveProgramTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const liveProgramReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LiveProgramTypes.FETCH_LIVE_PROGRAM_REQUEST:
      return requestData();
    case LiveProgramTypes.FETCH_LIVE_PROGRAM_SUCCESS:
      return setData(action.payload);
    case LiveProgramTypes.FETCH_LIVE_PROGRAM_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default liveProgramReducer;
