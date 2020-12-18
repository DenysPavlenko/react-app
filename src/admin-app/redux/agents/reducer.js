import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import AgentsActionTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const agentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AgentsActionTypes.FETCH_AGENTS_REQUEST:
      return requestData();
    case AgentsActionTypes.FETCH_AGENTS_SUCCESS:
      return setData(action.payload);
    case AgentsActionTypes.FETCH_AGENTS_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default agentsReducer;
