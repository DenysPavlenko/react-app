import ClientDetailLimitsTypes from './types';

export const clientDetailLimitsRequested = payload => ({
  type: ClientDetailLimitsTypes.FETCH_CLIENT_DETAIL_LIMITS_REQUEST,
  payload
});
export const clientDetailLimitsLoaded = data => ({
  type: ClientDetailLimitsTypes.FETCH_CLIENT_DETAIL_LIMITS_SUCCESS,
  payload: data
});
export const clientDetailLimitsError = error => ({
  type: ClientDetailLimitsTypes.FETCH_CLIENT_DETAIL_LIMITS_FAILURE,
  payload: error
});
