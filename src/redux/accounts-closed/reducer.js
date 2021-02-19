import { fetchState } from 'redux/_utils/fetch-state';
import AccountsClosedTypes from './types';

const INITIAL_STATE = {
  isActive: false,
  ...fetchState('initial')
};

const activePlayersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountsClosedTypes.TOGGLE_ACCOUNTS_CLOSED:
      return {
        ...state,
        isActive: !state.isActive,
      };
    case AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_REQUEST:
      return {
        ...state,
        ...fetchState('request')
      };
    case AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_SUCCESS:
      return {
        ...state,
        ...fetchState('success', action.payload)
      };
    case AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_FAILURE:
      return {
        ...state,
        ...fetchState('failure', action.payload)
      };
    default:
      return state;
  }
};

export default activePlayersReducer;
