import SettleTypes from './types';

export const settleRequested = payload => ({
  type: SettleTypes.FETCH_SETTLE_REQUEST,
  payload
});
export const settleLoaded = data => ({
  type: SettleTypes.FETCH_SETTLE_SUCCESS,
  payload: data
});
export const settleError = error => ({
  type: SettleTypes.FETCH_SETTLE_FAILURE,
  payload: error
});
