import ClientAccountingTypes from './types';

export const clientAccountingRequested = payload => ({
  type: ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_REQUEST,
  payload
});
export const clientAccountingLoaded = data => ({
  type: ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_SUCCESS,
  payload: data
});
export const clientAccountingError = error => ({
  type: ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_FAILURE,
  payload: error
});
