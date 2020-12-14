import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ClientDetailLimitsActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientDetailLimitsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientDetailLimitsActionTypes.FETCH_CLIENT_DETAIL_LIMITS_REQUEST:
      return requestData();
    case ClientDetailLimitsActionTypes.FETCH_CLIENT_DETAIL_LIMITS_SUCCESS:
      return setData(action.payload);
    case ClientDetailLimitsActionTypes.FETCH_CLIENT_DETAIL_LIMITS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientDetailLimitsReducer;
