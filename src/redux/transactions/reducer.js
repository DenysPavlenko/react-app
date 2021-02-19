import { fetchState } from 'redux/_utils/fetch-state';
import transactionsTypes from './types';

const INITIAL_STATE = fetchState('initial');

const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case transactionsTypes.FETCH_TRANSACTIONS_REQUEST:
      return fetchState('request');
    case transactionsTypes.FETCH_TRANSACTIONS_SUCCESS:
      return fetchState('success', action.payload);
    case transactionsTypes.FETCH_TRANSACTIONS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default transactionsReducer;
