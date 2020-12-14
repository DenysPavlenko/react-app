import { createSelector } from 'reselect';

const clientHistorySelector = state => state.clientHistory;

export const selectClientHistory = createSelector(
  [clientHistorySelector],
  clientHistory => clientHistory
);
