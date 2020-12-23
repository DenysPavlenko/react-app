import { createSelector } from 'reselect';

const accountsClosedSelector = state => state.accountsClosed;

export const selectAccountsClosed = createSelector(
  [accountsClosedSelector],
  accountsClosed => accountsClosed
);

export const selectShowAccountsClosed = createSelector(
  [accountsClosedSelector],
  accountsClosed => accountsClosed.isActive
);
