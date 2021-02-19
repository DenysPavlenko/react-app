import { fetchState } from 'redux/_utils/fetch-state';
import CashierTypes from './types';

const INITIAL_STATE = fetchState('initial');

const cashierReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CashierTypes.FETCH_CASHIER_REQUEST:
      return fetchState('request');
    case CashierTypes.FETCH_CASHIER_SUCCESS:
      return fetchState('success', action.payload);
    case CashierTypes.FETCH_CASHIER_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default cashierReducer;
