import ClientLimitsTypes from './types';

export const clientLimitsRequested = payload => ({
  type: ClientLimitsTypes.FETCH_CLIENT_LIMITS_REQUEST,
  payload
});
export const clientLimitsLoaded = data => ({
  type: ClientLimitsTypes.FETCH_CLIENT_LIMITS_SUCCESS,
  payload: data
});
export const clientLimitsError = error => ({
  type: ClientLimitsTypes.FETCH_CLIENT_LIMITS_FAILURE,
  payload: error
});
