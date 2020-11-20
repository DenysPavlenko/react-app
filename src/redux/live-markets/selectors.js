import { createSelector } from 'reselect';

const liveMarketsSelector = state => state.liveMarkets;

export const selectLiveMarkets = createSelector(
  [liveMarketsSelector],
  liveMarkets => liveMarkets
);
