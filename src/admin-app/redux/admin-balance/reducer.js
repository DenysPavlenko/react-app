import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import AdminBalanceActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const adminBalanceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdminBalanceActionTypes.FETCH_ADMIN_BALANCE_REQUEST:
      return requestData();
    case AdminBalanceActionTypes.FETCH_ADMIN_BALANCE_SUCCESS:
      return setData(action.payload);
    case AdminBalanceActionTypes.FETCH_ADMIN_BALANCE_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default adminBalanceReducer;
