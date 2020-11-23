import { createSelector } from 'reselect';

const liveHistorySelector = state => state.liveHistory;

export const selectLiveHistory = createSelector(
  [liveHistorySelector],
  liveHistory => liveHistory
);
