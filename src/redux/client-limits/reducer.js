import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import ClientLimitsTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientLimitsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientLimitsTypes.FETCH_CLIENT_LIMITS_REQUEST:
      return requestData();
    case ClientLimitsTypes.FETCH_CLIENT_LIMITS_SUCCESS:
      return setData(action.payload);
    case ClientLimitsTypes.FETCH_CLIENT_LIMITS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientLimitsReducer;
