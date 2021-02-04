import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import NewAccountsTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const newAccountsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewAccountsTypes.FETCH_NEW_ACCOUNTS_REQUEST:
      return requestData();
    case NewAccountsTypes.FETCH_NEW_ACCOUNTS_SUCCESS:
      return setData(action.payload);
    case NewAccountsTypes.FETCH_NEW_ACCOUNTS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default newAccountsReducer;
