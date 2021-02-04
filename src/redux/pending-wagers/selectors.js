import { createSelector } from 'reselect';

const pendingWagersSelector = state => state.pendingWagers;

export const selectPendingWagers = createSelector(
  [pendingWagersSelector],
  pendingWagers => pendingWagers
);
