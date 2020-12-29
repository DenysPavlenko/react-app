import { createSelector } from 'reselect';

const biggestPendingWagersSelector = state => state.biggestPendingWagers;

export const selectBiggestPendingWagers = createSelector(
  [biggestPendingWagersSelector],
  biggestPendingWagers => biggestPendingWagers
);
