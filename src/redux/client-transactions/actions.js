import ClientTransactionsTypes from './types';

export const clientTransactionsRequested = payload => ({
  type: ClientTransactionsTypes.FETCH_CLIENT_TRANSACTIONS_REQUEST,
  payload
});
export const clientTransactionsLoaded = data => ({
  type: ClientTransactionsTypes.FETCH_CLIENT_TRANSACTIONS_SUCCESS,
  payload: data
});
export const clientTransactionsError = error => ({
  type: ClientTransactionsTypes.FETCH_CLIENT_TRANSACTIONS_FAILURE,
  payload: error
});
