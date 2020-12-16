import ClientTransactionsActionTypes from './types';
import ClientTransactionsService from 'admin-app/services/client-transactions-service';
const clientTransactionsService = new ClientTransactionsService();

const clientTransactionsRequested = () => ({
  type: ClientTransactionsActionTypes.FETCH_CLIENT_TRANSACTIONS_REQUEST
});
const clientTransactionsLoaded = data => ({
  type: ClientTransactionsActionTypes.FETCH_CLIENT_TRANSACTIONS_SUCCESS,
  payload: data
});
const clientTransactionsError = error => ({
  type: ClientTransactionsActionTypes.FETCH_CLIENT_TRANSACTIONS_FAILURE,
  payload: error
});

export const fetchClientTransactionsData = clientId => dispatch => {
  dispatch(clientTransactionsRequested());
  clientTransactionsService.getClientTransactions(clientId)
    .then(data => dispatch(clientTransactionsLoaded(data)))
    .catch(error => dispatch(clientTransactionsError(error)))
};
