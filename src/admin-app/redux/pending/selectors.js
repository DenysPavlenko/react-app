import { createSelector } from 'reselect';

const pendingSelector = state => state.pending;

export const selectPending = createSelector(
  [pendingSelector],
  pending => pending
);
