import { fetchState } from 'redux/_utils/fetch-state';
import DeletedWagersService from './types';

const INITIAL_STATE = fetchState('initial');

const deletedWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DeletedWagersService.FETCH_DELETED_WAGERS_REQUEST:
      return fetchState('request');
    case DeletedWagersService.FETCH_DELETED_WAGERS_SUCCESS:
      return fetchState('success', action.payload);
    case DeletedWagersService.FETCH_DELETED_WAGERS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default deletedWagersReducer;
