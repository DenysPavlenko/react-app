import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import SettleActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const settleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettleActionTypes.FETCH_SETTLE_REQUEST:
      return requestData();
    case SettleActionTypes.FETCH_SETTLE_SUCCESS:
      return setData(action.payload);
    case SettleActionTypes.FETCH_SETTLE_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default settleReducer;
