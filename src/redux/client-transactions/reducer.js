import { fetchState } from 'redux/_utils/fetch-state';
import ClientTransactionsTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientTransactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientTransactionsTypes.FETCH_CLIENT_TRANSACTIONS_REQUEST:
      return fetchState('request');
    case ClientTransactionsTypes.FETCH_CLIENT_TRANSACTIONS_SUCCESS:
      return fetchState('success', action.payload);
    case ClientTransactionsTypes.FETCH_CLIENT_TRANSACTIONS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientTransactionsReducer;
