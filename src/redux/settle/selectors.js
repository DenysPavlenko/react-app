import { createSelector } from 'reselect';

const settleSelector = state => state.settle;

export const selectSettle = createSelector(
  [settleSelector],
  settle => settle
);
