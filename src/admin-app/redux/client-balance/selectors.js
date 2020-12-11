import { createSelector } from 'reselect';

const clientBalanceSelector = state => state.clientBalance;

export const selectClientBalance = createSelector(
  [clientBalanceSelector],
  clientBalance => clientBalance
);
