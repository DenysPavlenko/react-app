import { requestData, setData, setError } from 'redux/_utils/fetch-utils';
import AccountActivityTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const accountActivitiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_REQUEST:
      return requestData();
      case AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_SUCCESS:
      return setData(action.payload)
    case AccountActivityTypes.FETCH_ACOUNT_ACTIVITY_FAILURE:
      return setError(action.payload)
    default:
      return state;
  }
};

export default accountActivitiesReducer;
