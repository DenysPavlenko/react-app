import { createSelector } from 'reselect';

const distributionSelector = state => state.distribution;

export const selectDistribution = createSelector(
  [distributionSelector],
  distribution => distribution
);
