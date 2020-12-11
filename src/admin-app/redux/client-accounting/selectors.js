import { createSelector } from 'reselect';

const clientAccountinSelector = state => state.clientAccounting;

export const selectClientAccounting = createSelector(
  [clientAccountinSelector],
  clientAccounting => clientAccounting
);
