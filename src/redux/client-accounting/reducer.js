import { fetchState } from 'redux/_utils/fetch-state';
import ClientAccountingTypes from './types';

const INITIAL_STATE = fetchState('initial');

const clientAccountingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_REQUEST:
      return fetchState('request');
    case ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_SUCCESS:
      return fetchState('success', action.payload);
    case ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default clientAccountingReducer;
