import { createSelector } from 'reselect';

const agentsListSelector = state => state.agentsList;

export const selectAgentsList = createSelector(
  [agentsListSelector],
  agentsList => agentsList
);
