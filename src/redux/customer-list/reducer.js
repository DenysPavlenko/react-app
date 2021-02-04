import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import CustomerListTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const customerListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomerListTypes.FETCH_CUSTOMER_LIST_REQUEST:
      return requestData();
    case CustomerListTypes.FETCH_CUSTOMER_LIST_SUCCESS:
      return setData(action.payload);
    case CustomerListTypes.FETCH_CUSTOMER_LIST_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default customerListReducer;
