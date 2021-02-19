import NewAccountsTypes from './types';

export const newAccountsRequested = () => ({
  type: NewAccountsTypes.FETCH_NEW_ACCOUNTS_REQUEST
});
export const newAccountsLoaded = data => ({
  type: NewAccountsTypes.FETCH_NEW_ACCOUNTS_SUCCESS,
  payload: data
});
export const newAccountsError = error => ({
  type: NewAccountsTypes.FETCH_NEW_ACCOUNTS_FAILURE,
  payload: error
});
