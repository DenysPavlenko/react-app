import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import ClientFreePlayTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientTransactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientFreePlayTypes.FETCH_CLIENT_FREE_PLAY_REQUEST:
      return requestData();
    case ClientFreePlayTypes.FETCH_CLIENT_FREE_PLAY_SUCCESS:
      return setData(action.payload);
    case ClientFreePlayTypes.FETCH_CLIENT_FREE_PLAY_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientTransactionsReducer;
