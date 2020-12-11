import { createSelector } from 'reselect';

const adminBalanceSelector = state => state.adminBalance;

export const selectAdminBalance = createSelector(
  [adminBalanceSelector],
  adminBalance => adminBalance
);
