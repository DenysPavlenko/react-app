import PendingTypes from './types';

export const pendingRequested = payload => ({
  type: PendingTypes.FETCH_PENDING_REQUEST,
  payload
});
export const pendingLoaded = data => ({
  type: PendingTypes.FETCH_PENDING_SUCCESS,
  payload: data
});
export const pendingError = error => ({
  type: PendingTypes.FETCH_PENDING_FAILURE,
  payload: error
});
