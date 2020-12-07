import { requestData, setData, setError } from '../../../shared/redux/_utils/fetch-utils';
import BalanceActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const balanceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BalanceActionTypes.FETCH_BALANCE_REQUEST:
      return requestData();
    case BalanceActionTypes.FETCH_BALANCE_SUCCESS:
      return setData(action.payload);
    case BalanceActionTypes.FETCH_BALANCE_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default balanceReducer;
