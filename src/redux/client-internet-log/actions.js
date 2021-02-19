import ClientInternetLogTypes from './types';

export const clientInternetLogRequested = payload => ({
  type: ClientInternetLogTypes.FETCH_CLIENT_INTERNET_LOG_REQUEST,
  payload
});
export const clientInternetLogLoaded = data => ({
  type: ClientInternetLogTypes.FETCH_CLIENT_INTERNET_LOG_SUCCESS,
  payload: data
});
export const clientInternetLogError = error => ({
  type: ClientInternetLogTypes.FETCH_CLIENT_INTERNET_LOG_FAILURE,
  payload: error
});
