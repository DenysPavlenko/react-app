import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ClientInternetLogActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientInternetLogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientInternetLogActionTypes.FETCH_CLIENT_INTERNET_LOG_REQUEST:
      return requestData();
    case ClientInternetLogActionTypes.FETCH_CLIENT_INTERNET_LOG_SUCCESS:
      return setData(action.payload);
    case ClientInternetLogActionTypes.FETCH_CLIENT_INTERNET_LOG_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientInternetLogReducer;
