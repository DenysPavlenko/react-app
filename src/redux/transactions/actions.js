import TransactionsActionTypes from './types';
// Transactions service
import TransactionsService from 'services/transactions-service';
const transactionsService = new TransactionsService();

const transactionsRequested = () => ({
  type: TransactionsActionTypes.FETCH_TRANSACTIONS_REQUEST
});
const transactionsLoaded = data => ({
  type: TransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS,
  payload: data
});
const transactionsError = error => ({
  type: TransactionsActionTypes.FETCH_TRANSACTIONS_FAILURE,
  payload: error
});

export const fetchTransactionsData = () => (dispatch) => {
  dispatch(transactionsRequested());
  transactionsService.getTransactions()
    .then(data => dispatch(transactionsLoaded(data)))
    .catch(error => dispatch(transactionsError(error)))
};
