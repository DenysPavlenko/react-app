import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import ClientHistoryTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientHistoryTypes.FETCH_CLIENT_HISTORY_REQUEST:
      return requestData();
    case ClientHistoryTypes.FETCH_CLIENT_HISTORY_SUCCESS:
      return setData(action.payload);
    case ClientHistoryTypes.FETCH_CLIENT_HISTORY_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientHistoryReducer;
