import { createSelector } from 'reselect';

const livePendingSelector = state => state.livePending;

export const selectLivePending = createSelector(
  [livePendingSelector],
  livePending => livePending
);
