import AccountActivityTypes from './types';

export const accountActivityRequested = params => ({
  type: AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_REQUEST,
  payload: params
});
export const accountActivityLoaded = data => ({
  type: AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_SUCCESS,
  payload: data
});
export const accountActivityError = error => ({
  type: AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_FAILURE,
  payload: error
});
