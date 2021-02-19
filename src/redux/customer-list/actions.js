import CustomerListTypes from './types';

export const customerListRequested = () => ({
  type: CustomerListTypes.FETCH_CUSTOMER_LIST_REQUEST
});
export const customerListLoaded = data => ({
  type: CustomerListTypes.FETCH_CUSTOMER_LIST_SUCCESS,
  payload: data
});
export const customerListError = error => ({
  type: CustomerListTypes.FETCH_CUSTOMER_LIST_FAILURE,
  payload: error
});
