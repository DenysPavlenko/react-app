import CashierTypes from './types';

export const cashierRequested = () => ({
  type: CashierTypes.FETCH_CASHIER_REQUEST
});
export const cashierLoaded = data => ({
  type: CashierTypes.FETCH_CASHIER_SUCCESS,
  payload: data
});
export const cashierError = error => ({
  type: CashierTypes.FETCH_CASHIER_FAILURE,
  payload: error
});
