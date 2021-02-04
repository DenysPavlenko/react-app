import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import ActiveCustomersTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const activeCustomersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActiveCustomersTypes.FETCH_ACTIVE_CUSTOMERS_REQUEST:
      return requestData();
    case ActiveCustomersTypes.FETCH_ACTIVE_CUSTOMERS_SUCCESS:
      return setData(action.payload)
    case ActiveCustomersTypes.FETCH_ACTIVE_CUSTOMERS_FAILURE:
      return setError(action.payload)
    default:
      return state;
  }
};

export default activeCustomersReducer;
