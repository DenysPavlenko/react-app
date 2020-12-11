import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import ClientGeneralActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const clientGeneralReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientGeneralActionTypes.FETCH_CLIENT_GENERAL_REQUEST:
      return requestData();
    case ClientGeneralActionTypes.FETCH_CLIENT_GENERAL_SUCCESS:
      return setData(action.payload);
    case ClientGeneralActionTypes.FETCH_CLIENT_GENERAL_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default clientGeneralReducer;
