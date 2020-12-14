import { createSelector } from 'reselect';

const clientTransactionsSelector = state => state.clientTransactions;

export const selectClientTransactions = createSelector(
  [clientTransactionsSelector],
  clientTransactions => clientTransactions
);
