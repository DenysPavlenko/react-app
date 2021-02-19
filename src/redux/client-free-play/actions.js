import ClientFreePlayTypes from './types';

export const clientFreePlayRequested = payload => ({
  type: ClientFreePlayTypes.FETCH_CLIENT_FREE_PLAY_REQUEST,
  payload
});
export const clientFreePlayLoaded = data => ({
  type: ClientFreePlayTypes.FETCH_CLIENT_FREE_PLAY_SUCCESS,
  payload: data
});
export const clientFreePlayError = error => ({
  type: ClientFreePlayTypes.FETCH_CLIENT_FREE_PLAY_FAILURE,
  payload: error
});
