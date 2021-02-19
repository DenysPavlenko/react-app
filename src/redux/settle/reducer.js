import { fetchState } from 'redux/_utils/fetch-state';
import SettleTypes from './types';

const INITIAL_STATE = fetchState('initial');

const settleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettleTypes.FETCH_SETTLE_REQUEST:
      return fetchState('request');
    case SettleTypes.FETCH_SETTLE_SUCCESS:
      return fetchState('success', action.payload);
    case SettleTypes.FETCH_SETTLE_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default settleReducer;
