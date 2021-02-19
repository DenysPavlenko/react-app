import transactionsTypes from './types';

export const transactionsRequested = payload => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_REQUEST,
  payload
});
export const transactionsLoaded = data => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_SUCCESS,
  payload: data
});
export const transactionsError = error => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_FAILURE,
  payload: error
});
