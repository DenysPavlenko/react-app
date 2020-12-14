import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ClientWagersActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientWagersActionTypes.FETCH_CLIENT_WAGERS_REQUEST:
      return requestData();
    case ClientWagersActionTypes.FETCH_CLIENT_WAGERS_SUCCESS:
      return setData(action.payload);
    case ClientWagersActionTypes.FETCH_CLIENT_WAGERS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientWagersReducer;
