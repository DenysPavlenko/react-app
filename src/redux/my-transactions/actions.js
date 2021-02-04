import MyTransactionsTypes from './types';
// Transactions service
import MyTransactionsService from 'services/my-transactions-service';
const myTransactionsService = new MyTransactionsService();

const myTransactionsRequested = () => ({
  type: MyTransactionsTypes.FETCH_MY_TRANSACTIONS_REQUEST
});
const myTransactionsLoaded = data => ({
  type: MyTransactionsTypes.FETCH_MY_TRANSACTIONS_SUCCESS,
  payload: data
});
const myTransactionsError = error => ({
  type: MyTransactionsTypes.FETCH_MY_TRANSACTIONS_FAILURE,
  payload: error
});

export const fetchMyTransactionsData = () => dispatch => {
  dispatch(myTransactionsRequested());
  myTransactionsService.getMyTransactions()
    .then(data => dispatch(myTransactionsLoaded(data)))
    .catch(error => dispatch(myTransactionsError(error)))
};
