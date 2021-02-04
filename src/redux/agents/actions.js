import AgentsTypes from './types';
import AgentsService from 'services/agents-service';

const agentsService = new AgentsService();

const agentsRequested = () => ({
  type: AgentsTypes.FETCH_AGENTS_REQUEST
});
const agentsLoaded = data => ({
  type: AgentsTypes.FETCH_AGENTS_SUCCESS,
  payload: data
});
const agentsError = error => ({
  type: AgentsTypes.FETCH_AGENTS_FAILURE,
  payload: error
});

export const fetchAgentsData = (clientId, category) => dispatch => {
  dispatch(agentsRequested());
  agentsService.getAgents(clientId, category)
    .then(data => dispatch(agentsLoaded(data)))
    .catch(error => dispatch(agentsError(error)))
};
