import { fetchState } from 'redux/_utils/fetch-state';
import UserTypes from './types';

const INITIAL_STATE = fetchState('initial');

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.FETCH_USER_REQUEST:
      return fetchState('request');
    case UserTypes.FETCH_USER_SUCCESS:
      return fetchState('success', action.payload);
    case UserTypes.FETCH_USER_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default userReducer;
