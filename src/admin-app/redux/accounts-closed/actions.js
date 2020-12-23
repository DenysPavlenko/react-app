import AccountsClosedTypes from './types';
import AccountsClosedService from 'admin-app/services/accounts-closed-service';

const accountsClosedService = new AccountsClosedService();

export const toggleAccountsClosed = () => ({
  type: AccountsClosedTypes.TOGGLE_ACCOUNTS_CLOSED
});
const accountsClosedRequested = () => ({
  type: AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_REQUEST
});
const accountsClosedLoaded = data => ({
  type: AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_SUCCESS,
  payload: data
});
const accountsClosedError = error => ({
  type: AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_FAILURE,
  payload: error
});

export const fetchAccountsClosedData = () => dispatch => {
  dispatch(accountsClosedRequested());
  accountsClosedService.getAccountsClosed()
    .then(data => dispatch(accountsClosedLoaded(data)))
    .catch(error => dispatch(accountsClosedError(error)))
};
