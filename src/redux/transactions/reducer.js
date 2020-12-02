import { requestData, setData, setError } from '../_utils/fetch-utils';
import TransactionsActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TransactionsActionTypes.FETCH_TRANSACTIONS_REQUEST:
      return requestData();
    case TransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS:
      return setData(action.payload);
    case TransactionsActionTypes.FETCH_TRANSACTIONS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default transactionsReducer;
