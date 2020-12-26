import TransactionsTypes from './types';
// Transactions service
import TransactionsService from 'player-app/services/transactions-service';
const transactionsService = new TransactionsService();

const transactionsRequested = () => ({
  type: TransactionsTypes.FETCH_TRANSACTIONS_REQUEST
});
const transactionsLoaded = data => ({
  type: TransactionsTypes.FETCH_TRANSACTIONS_SUCCESS,
  payload: data
});
const transactionsError = error => ({
  type: TransactionsTypes.FETCH_TRANSACTIONS_FAILURE,
  payload: error
});

export const fetchTransactionsData = () => dispatch => {
  dispatch(transactionsRequested());
  transactionsService.getTransactions()
    .then(data => dispatch(transactionsLoaded(data)))
    .catch(error => dispatch(transactionsError(error)))
};
