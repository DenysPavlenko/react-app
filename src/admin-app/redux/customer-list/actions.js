import CustomerListTypes from './types';
import CustomerListService from 'admin-app/services/customer-list-service';
const customerListService = new CustomerListService();

const customerListRequested = () => ({
  type: CustomerListTypes.FETCH_CUSTOMER_LIST_REQUEST
});
const customerListLoaded = data => ({
  type: CustomerListTypes.FETCH_CUSTOMER_LIST_SUCCESS,
  payload: data
});
const customerListError = error => ({
  type: CustomerListTypes.FETCH_CUSTOMER_LIST_FAILURE,
  payload: error
});

export const fetchCustomerListData = clientId => dispatch => {
  dispatch(customerListRequested());
  customerListService.getCustomerList(clientId)
    .then(data => dispatch(customerListLoaded(data)))
    .catch(error => dispatch(customerListError(error)))
};
