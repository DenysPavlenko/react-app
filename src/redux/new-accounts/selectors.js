import { createSelector } from 'reselect';

const newAccountsSelector = state => state.newAccounts;

export const selectNewAccounts = createSelector(
  [newAccountsSelector],
  newAccounts => newAccounts
);
