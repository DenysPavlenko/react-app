import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ClientPendingTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientPendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientPendingTypes.FETCH_CLIENT_PENDING_REQUEST:
      return requestData();
    case ClientPendingTypes.FETCH_CLIENT_PENDING_SUCCESS:
      return setData(action.payload);
    case ClientPendingTypes.FETCH_CLIENT_PENDING_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientPendingReducer;
