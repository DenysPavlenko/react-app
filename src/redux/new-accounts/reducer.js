import { fetchState } from 'redux/_utils/fetch-state';
import NewAccountsTypes from './types';

const INITIAL_STATE = fetchState('initial');

const newAccountsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewAccountsTypes.FETCH_NEW_ACCOUNTS_REQUEST:
      return fetchState('request');
    case NewAccountsTypes.FETCH_NEW_ACCOUNTS_SUCCESS:
      return fetchState('success', action.payload);
    case NewAccountsTypes.FETCH_NEW_ACCOUNTS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default newAccountsReducer;
