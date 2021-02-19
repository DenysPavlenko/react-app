import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import AccountsClosedTypes from './types';

const INITIAL_STATE = {
  isActive: false,
  ...requestData()
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
        ...requestData()
      };
    case AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_SUCCESS:
      return {
        ...state,
        ...setData(action.payload)
      };
    case AccountsClosedTypes.FETCH_ACCOUNTS_CLOSED_FAILURE:
      return {
        ...state,
        ...setError(action.payload)
      };
    default:
      return state;
  }
};

export default activePlayersReducer;
