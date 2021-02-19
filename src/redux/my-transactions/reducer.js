import { fetchState } from 'redux/_utils/fetch-state';
import MyTransactionsTypes from './types';

const INITIAL_STATE = fetchState('initial');

const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MyTransactionsTypes.FETCH_MY_TRANSACTIONS_REQUEST:
      return fetchState('request');
    case MyTransactionsTypes.FETCH_MY_TRANSACTIONS_SUCCESS:
      return fetchState('success', action.payload);
    case MyTransactionsTypes.FETCH_MY_TRANSACTIONS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default transactionsReducer;
