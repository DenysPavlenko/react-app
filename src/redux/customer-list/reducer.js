import { fetchState } from 'redux/_utils/fetch-state';
import CustomerListTypes from './types';

const INITIAL_STATE = fetchState('initial');

const customerListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomerListTypes.FETCH_CUSTOMER_LIST_REQUEST:
      return fetchState('request');
    case CustomerListTypes.FETCH_CUSTOMER_LIST_SUCCESS:
      return fetchState('success', action.payload);
    case CustomerListTypes.FETCH_CUSTOMER_LIST_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default customerListReducer;
