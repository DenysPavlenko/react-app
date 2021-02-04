import ActiveCustomersTypes from './types';
import ActiveCustomersService from 'services/active-customers-service';

const activeCustomersService = new ActiveCustomersService();

const activeCustomersRequested = () => ({
  type: ActiveCustomersTypes.FETCH_ACTIVE_CUSTOMERS_REQUEST
});
const activeCustomersLoaded = data => ({
  type: ActiveCustomersTypes.FETCH_ACTIVE_CUSTOMERS_SUCCESS,
  payload: data
});
const activeCustomersError = error => ({
  type: ActiveCustomersTypes.FETCH_ACTIVE_CUSTOMERS_FAILURE,
  payload: error
});

export const fetchActiveCustomersData = agent => dispatch => {
  dispatch(activeCustomersRequested());
  activeCustomersService.getActiveCustomers(agent)
    .then(data => dispatch(activeCustomersLoaded(data)))
    .catch(error => dispatch(activeCustomersError(error)))
};
