import ClientWagersTypes from './types';

export const clientWagersRequested = payload => ({
  type: ClientWagersTypes.FETCH_CLIENT_WAGERS_REQUEST,
  payload
});
export const clientWagersLoaded = data => ({
  type: ClientWagersTypes.FETCH_CLIENT_WAGERS_SUCCESS,
  payload: data
});
export const clientWagersError = error => ({
  type: ClientWagersTypes.FETCH_CLIENT_WAGERS_FAILURE,
  payload: error
});
