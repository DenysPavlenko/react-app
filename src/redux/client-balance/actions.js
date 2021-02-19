import ClientBalanceTypes from './types';

export const clientBalanceRequested = () => ({
  type: ClientBalanceTypes.FETCH_CLIENT_BALANCE_REQUEST
});
export const clientBalanceLoaded = data => ({
  type: ClientBalanceTypes.FETCH_CLIENT_BALANCE_SUCCESS,
  payload: data
});
export const clientBalanceError = error => ({
  type: ClientBalanceTypes.FETCH_CLIENT_BALANCE_FAILURE,
  payload: error
});
