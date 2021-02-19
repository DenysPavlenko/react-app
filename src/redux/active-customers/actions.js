import ActiveCustomersTypes from './types';

export const activeCustomersRequested = params => ({
  type: ActiveCustomersTypes.FETCH_ACTIVE_CUSTOMERS_REQUEST,
  payload: params
});
export const activeCustomersLoaded = data => ({
  type: ActiveCustomersTypes.FETCH_ACTIVE_CUSTOMERS_SUCCESS,
  payload: data
});
export const activeCustomersError = error => ({
  type: ActiveCustomersTypes.FETCH_ACTIVE_CUSTOMERS_FAILURE,
  payload: error
});
