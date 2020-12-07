import RecentLoginsActionTypes from './types';
// Recent logins service
import RecentLoginsService from 'player-app/services/recent-logins-service';
const recentLoginsService = new RecentLoginsService();

const transactionsRequested = () => ({
  type: RecentLoginsActionTypes.FETCH_TRANSACTIONS_REQUEST
});
const transactionsLoaded = data => ({
  type: RecentLoginsActionTypes.FETCH_TRANSACTIONS_SUCCESS,
  payload: data
});
const transactionsError = error => ({
  type: RecentLoginsActionTypes.FETCH_TRANSACTIONS_FAILURE,
  payload: error
});

export const fetchTransactionsData = () => dispatch => {
  dispatch(transactionsRequested());
  recentLoginsService.getTransactions()
    .then(data => dispatch(transactionsLoaded(data)))
    .catch(error => dispatch(transactionsError(error)))
};
