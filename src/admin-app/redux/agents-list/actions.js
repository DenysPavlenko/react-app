import AgentsListActionTypes from './types';
import AgentsListService from 'admin-app/services/agents-list-service';

const agentsListService = new AgentsListService();

const agentsListRequested = () => ({
  type: AgentsListActionTypes.FETCH_AGENTS_LIST_REQUEST
});
const agentsListLoaded = data => ({
  type: AgentsListActionTypes.FETCH_AGENTS_LIST_SUCCESS,
  payload: data
});
const agentsListError = error => ({
  type: AgentsListActionTypes.FETCH_AGENTS_LIST_FAILURE,
  payload: error
});

export const fetchAgentsListData = (clientId, category) => dispatch => {
  dispatch(agentsListRequested());
  agentsListService.getAgentsList(clientId, category)
    .then(data => dispatch(agentsListLoaded(data)))
    .catch(error => dispatch(agentsListError(error)))
};
