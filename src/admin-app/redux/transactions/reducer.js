import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import transactionsTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case transactionsTypes.FETCH_TRANSACTIONS_REQUEST:
      return requestData();
      case transactionsTypes.FETCH_TRANSACTIONS_SUCCESS:
      return setData(action.payload)
    case transactionsTypes.FETCH_TRANSACTIONS_FAILURE:
      return setError(action.payload)
    default:
      return state;
  }
};

export default transactionsReducer;
