import { createSelector } from 'reselect';

const clientDetailLimitsSelector = state => state.clientDetailLimits;

export const selectClientDetailLimits = createSelector(
  [clientDetailLimitsSelector],
  clientDetailLimits => clientDetailLimits
);
