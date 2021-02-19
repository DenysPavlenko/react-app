import AgentsTypes from './types';

export const agentsRequested = () => ({
  type: AgentsTypes.FETCH_AGENTS_REQUEST
});
export const agentsLoaded = data => ({
  type: AgentsTypes.FETCH_AGENTS_SUCCESS,
  payload: data
});
export const agentsError = error => ({
  type: AgentsTypes.FETCH_AGENTS_FAILURE,
  payload: error
});
