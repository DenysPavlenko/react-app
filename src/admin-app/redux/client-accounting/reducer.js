import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ClientAccountingActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientAccountingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientAccountingActionTypes.FETCH_CLIENT_ACCOUNTING_REQUEST:
      return requestData();
    case ClientAccountingActionTypes.FETCH_CLIENT_ACCOUNTING_SUCCESS:
      return setData(action.payload);
    case ClientAccountingActionTypes.FETCH_CLIENT_ACCOUNTING_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientAccountingReducer;
