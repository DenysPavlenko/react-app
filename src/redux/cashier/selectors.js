import { createSelector } from 'reselect';

const cashierSelector = state => state.cashier;

export const selectCashier = createSelector(
  [cashierSelector],
  cashier => cashier
);
