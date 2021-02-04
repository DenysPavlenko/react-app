import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import MyTransactionsTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MyTransactionsTypes.FETCH_MY_TRANSACTIONS_REQUEST:
      return requestData();
    case MyTransactionsTypes.FETCH_MY_TRANSACTIONS_SUCCESS:
      return setData(action.payload);
    case MyTransactionsTypes.FETCH_MY_TRANSACTIONS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default transactionsReducer;
