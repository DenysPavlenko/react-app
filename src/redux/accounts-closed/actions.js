import AccountsClosedTypes from './types';

export const toggleAccountsClosed = () => ({
  type: AccountsClosedTypes.TOGGLE_ACCOUNTS_CLOSED
});
export const accountsClosedRequested = () => ({
  type: AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_REQUEST
});
export const accountsClosedLoaded = data => ({
  type: AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_SUCCESS,
  payload: data
});
export const accountsClosedError = error => ({
  type: AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_FAILURE,
  payload: error
});
