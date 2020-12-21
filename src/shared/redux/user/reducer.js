import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import UserActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_REQUEST:
      return requestData();
    case UserActionTypes.FETCH_USER_SUCCESS:
      return setData(action.payload);
    case UserActionTypes.FETCH_USER_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default userReducer;
