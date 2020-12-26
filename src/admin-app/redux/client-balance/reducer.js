import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ClientBalanceTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientBalanceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientBalanceTypes.FETCH_CLIENT_BALANCE_REQUEST:
      return requestData();
    case ClientBalanceTypes.FETCH_CLIENT_BALANCE_SUCCESS:
      return setData(action.payload);
    case ClientBalanceTypes.FETCH_CLIENT_BALANCE_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientBalanceReducer;
