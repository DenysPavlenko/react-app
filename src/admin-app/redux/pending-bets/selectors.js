import { createSelector } from 'reselect';

const pendingBetsSelector = state => state.pendingBets;

export const selectPendingBets = createSelector(
  [pendingBetsSelector],
  pendingBets => pendingBets
);
