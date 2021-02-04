import { createSelector } from 'reselect';

const myTransactionsSelector = state => state.myTransactions;

export const selectMyTransactions = createSelector(
  [myTransactionsSelector],
  myTransactions => myTransactions
);
