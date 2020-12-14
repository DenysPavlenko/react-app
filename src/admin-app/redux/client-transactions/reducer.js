import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ClientTransactionsActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientTransactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientTransactionsActionTypes.FETCH_CLIENT_TRANSACTIONS_REQUEST:
      return requestData();
    case ClientTransactionsActionTypes.FETCH_CLIENT_TRANSACTIONS_SUCCESS:
      return setData(action.payload);
    case ClientTransactionsActionTypes.FETCH_CLIENT_TRANSACTIONS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientTransactionsReducer;
