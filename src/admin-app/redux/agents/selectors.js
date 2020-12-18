import { createSelector } from 'reselect';

const agentsSelector = state => state.agents;

export const selectAgents = createSelector(
  [agentsSelector],
  agents => agents
);
