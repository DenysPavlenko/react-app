import RecentLoginsTypes from './types';

export const recentLoginsRequested = () => ({
  type: RecentLoginsTypes.FETCH_RECENT_LOGINS_REQUEST
});
export const recentLoginsLoaded = data => ({
  type: RecentLoginsTypes.FETCH_RECENT_LOGINS_SUCCESS,
  payload: data
});
export const recentLoginsError = error => ({
  type: RecentLoginsTypes.FETCH_RECENT_LOGINS_FAILURE,
  payload: error
});
