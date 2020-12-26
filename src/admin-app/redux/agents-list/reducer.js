import { requestData, setData, setError } from 'shared/redux/_utils/fetch-utils';
import AgentsListTypes from './types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const agentsListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AgentsListTypes.FETCH_AGENTS_LIST_REQUEST:
      return requestData();
    case AgentsListTypes.FETCH_AGENTS_LIST_SUCCESS:
      return setData(action.payload);
    case AgentsListTypes.FETCH_AGENTS_LIST_FAILURE:
      return setError(action.payload);
    default:
      return state;
  }
};

export default agentsListReducer;
