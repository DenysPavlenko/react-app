import { createSelector } from 'reselect';

const clientPendingSelector = state => state.clientPending;

export const selectClientPending = createSelector(
  [clientPendingSelector],
  clientPending => clientPending
);
