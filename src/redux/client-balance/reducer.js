import { fetchState } from 'redux/_utils/fetch-state';
import ClientBalanceTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientBalanceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientBalanceTypes.FETCH_CLIENT_BALANCE_REQUEST:
      return fetchState('request');
    case ClientBalanceTypes.FETCH_CLIENT_BALANCE_SUCCESS:
      return fetchState('success', action.payload);
    case ClientBalanceTypes.FETCH_CLIENT_BALANCE_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientBalanceReducer;
