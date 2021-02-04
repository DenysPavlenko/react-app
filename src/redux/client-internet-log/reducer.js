import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import ClientInternetLogTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientInternetLogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientInternetLogTypes.FETCH_CLIENT_INTERNET_LOG_REQUEST:
      return requestData();
    case ClientInternetLogTypes.FETCH_CLIENT_INTERNET_LOG_SUCCESS:
      return setData(action.payload);
    case ClientInternetLogTypes.FETCH_CLIENT_INTERNET_LOG_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientInternetLogReducer;
