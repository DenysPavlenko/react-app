import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import DeletedWagersService from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const deletedWagersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DeletedWagersService.FETCH_DELETED_WAGERS_REQUEST:
      return requestData();
    case DeletedWagersService.FETCH_DELETED_WAGERS_SUCCESS:
      return setData(action.payload);
    case DeletedWagersService.FETCH_DELETED_WAGERS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default deletedWagersReducer;
