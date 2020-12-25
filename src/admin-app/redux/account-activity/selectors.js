import { createSelector } from 'reselect';

const accountActivitySelector = state => state.accountActivity;

export const selectAccountActivity = createSelector(
  [accountActivitySelector],
  accountActivity => accountActivity
);
