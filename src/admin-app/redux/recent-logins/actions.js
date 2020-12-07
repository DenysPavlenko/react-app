import RecentLoginsActionTypes from './types';
// Recent logins service
import RecentLoginsService from 'admin-app/services/recent-logins-service';
const recentLoginsService = new RecentLoginsService();

const recentLoginsRequested = () => ({
  type: RecentLoginsActionTypes.FETCH_RECENT_LOGINS_REQUEST
});
const recentLoginsLoaded = data => ({
  type: RecentLoginsActionTypes.FETCH_RECENT_LOGINS_SUCCESS,
  payload: data
});
const recentLoginsError = error => ({
  type: RecentLoginsActionTypes.FETCH_RECENT_LOGINS_FAILURE,
  payload: error
});

export const fetchRecentLoginsData = () => dispatch => {
  dispatch(recentLoginsRequested());
  recentLoginsService.getRecentLogins()
    .then(data => dispatch(recentLoginsLoaded(data)))
    .catch(error => dispatch(recentLoginsError(error)))
};
