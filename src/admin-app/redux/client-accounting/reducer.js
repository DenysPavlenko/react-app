import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ClientAccountingTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientAccountingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_REQUEST:
      return requestData();
    case ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_SUCCESS:
      return setData(action.payload);
    case ClientAccountingTypes.FETCH_CLIENT_ACCOUNTING_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientAccountingReducer;
