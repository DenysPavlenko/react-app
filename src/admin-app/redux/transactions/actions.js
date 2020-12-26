import transactionsTypes from './types';
import TransactionsService from 'admin-app/services/transactions-service';

const transactionsService = new TransactionsService();

const transactionsRequested = () => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_REQUEST
});
const transactionsLoaded = data => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_SUCCESS,
  payload: data
});
const transactionsError = error => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_FAILURE,
  payload: error
});

export const fetchTransactionsData = agent => dispatch => {
  dispatch(transactionsRequested());
  transactionsService.getTransactions(agent)
    .then(data => dispatch(transactionsLoaded(data)))
    .catch(error => dispatch(transactionsError(error)))
};
