import { fetchState } from 'redux/_utils/fetch-state';
import AgentsTypes from './types';

const INITIAL_STATE = fetchState('initial');

const agentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AgentsTypes.FETCH_AGENTS_REQUEST:
      return fetchState('request');
    case AgentsTypes.FETCH_AGENTS_SUCCESS:
      return fetchState('success', action.payload);
    case AgentsTypes.FETCH_AGENTS_FAILURE:
      return fetchState('error', action.payload);
    default:
      return state;
  }
};

export default agentsReducer;
