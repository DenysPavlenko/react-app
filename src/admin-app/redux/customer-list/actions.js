import CustomerListActionTypes from './types';
// Recent logins service
import CustomerListService from 'admin-app/services/customer-list-service';
const customerListService = new CustomerListService();

const customerListRequested = () => ({
  type: CustomerListActionTypes.FETCH_CUSTOMER_LIST_REQUEST
});
const customerListLoaded = data => ({
  type: CustomerListActionTypes.FETCH_CUSTOMER_LIST_SUCCESS,
  payload: data
});
const customerListError = error => ({
  type: CustomerListActionTypes.FETCH_CUSTOMER_LIST_FAILURE,
  payload: error
});

export const fetchCustomerlistData = () => dispatch => {
  dispatch(customerListRequested());
  customerListService.getCustomerList()
    .then(data => dispatch(customerListLoaded(data)))
    .catch(error => dispatch(customerListError(error)))
};
