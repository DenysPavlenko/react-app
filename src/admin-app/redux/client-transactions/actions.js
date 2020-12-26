import ClientTransactionsTypes from './types';
import ClientTransactionsService from 'admin-app/services/client-transactions-service';
const clientTransactionsService = new ClientTransactionsService();

const clientTransactionsRequested = () => ({
  type: ClientTransactionsTypes.FETCH_CLIENT_TRANSACTIONS_REQUEST
});
const clientTransactionsLoaded = data => ({
  type: ClientTransactionsTypes.FETCH_CLIENT_TRANSACTIONS_SUCCESS,
  payload: data
});
const clientTransactionsError = error => ({
  type: ClientTransactionsTypes.FETCH_CLIENT_TRANSACTIONS_FAILURE,
  payload: error
});

export const fetchClientTransactionsData = clientId => dispatch => {
  dispatch(clientTransactionsRequested());
  clientTransactionsService.getClientTransactions(clientId)
    .then(data => dispatch(clientTransactionsLoaded(data)))
    .catch(error => dispatch(clientTransactionsError(error)))
};
