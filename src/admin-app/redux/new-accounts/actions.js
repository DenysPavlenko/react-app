import NewAccountsActionTypes from './types';
import NewAccountsService from 'admin-app/services/new-accounts-service';

const newAccountsService = new NewAccountsService();

const newAccountsRequested = () => ({
  type: NewAccountsActionTypes.FETCH_NEW_ACCOUNTS_REQUEST
});
const newAccountsLoaded = data => ({
  type: NewAccountsActionTypes.FETCH_NEW_ACCOUNTS_SUCCESS,
  payload: data
});
const newAccountsError = error => ({
  type: NewAccountsActionTypes.FETCH_NEW_ACCOUNTS_FAILURE,
  payload: error
});

export const fetchPendingData = () => dispatch => {
  dispatch(newAccountsRequested());
  newAccountsService.getNewAccounts()
    .then(data => dispatch(newAccountsLoaded(data)))
    .catch(error => dispatch(newAccountsError(error)))
};
