import PendingWagersTypes from './types';

export const pendingWagersRequested = () => ({
  type: PendingWagersTypes.FETCH_PENDING_WAGERS_REQUEST
});
export const pendingWagersLoaded = data => ({
  type: PendingWagersTypes.FETCH_PENDING_WAGERS_SUCCESS,
  payload: data
});
export const pendingWagersError = error => ({
  type: PendingWagersTypes.FETCH_PENDING_WAGERS_FAILURE,
  payload: error
});
