import { createSelector } from 'reselect';

const balanceSelector = state => state.balance;

export const selectBalance = createSelector(
  [balanceSelector],
  balance => balance
);
