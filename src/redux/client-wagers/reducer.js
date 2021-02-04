import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import ClientWagersTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientWagersTypes.FETCH_CLIENT_WAGERS_REQUEST:
      return requestData();
    case ClientWagersTypes.FETCH_CLIENT_WAGERS_SUCCESS:
      return setData(action.payload);
    case ClientWagersTypes.FETCH_CLIENT_WAGERS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientWagersReducer;
