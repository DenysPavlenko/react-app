import MyTransactionsTypes from './types';

export const myTransactionsRequested = () => ({
  type: MyTransactionsTypes.FETCH_MY_TRANSACTIONS_REQUEST
});
export const myTransactionsLoaded = data => ({
  type: MyTransactionsTypes.FETCH_MY_TRANSACTIONS_SUCCESS,
  payload: data
});
export const myTransactionsError = error => ({
  type: MyTransactionsTypes.FETCH_MY_TRANSACTIONS_FAILURE,
  payload: error
});
