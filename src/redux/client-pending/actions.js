import ClientPendingTypes from './types';

export const clientPendingRequested = payload => ({
  type: ClientPendingTypes.FETCH_CLIENT_PENDING_REQUEST,
  payload
});
export const clientPendingLoaded = data => ({
  type: ClientPendingTypes.FETCH_CLIENT_PENDING_SUCCESS,
  payload: data
});
export const clientPendingError = error => ({
  type: ClientPendingTypes.FETCH_CLIENT_PENDING_FAILURE,
  payload: error
});
