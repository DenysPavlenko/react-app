import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import CashierActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const cashierReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CashierActionTypes.FETCH_CASHIER_REQUEST:
      return requestData();
    case CashierActionTypes.FETCH_CASHIER_SUCCESS:
      return setData(action.payload);
    case CashierActionTypes.FETCH_CASHIER_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default cashierReducer;
