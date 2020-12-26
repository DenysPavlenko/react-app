import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import TransactionsTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TransactionsTypes.FETCH_TRANSACTIONS_REQUEST:
      return requestData();
    case TransactionsTypes.FETCH_TRANSACTIONS_SUCCESS:
      return setData(action.payload);
    case TransactionsTypes.FETCH_TRANSACTIONS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default transactionsReducer;
