import { createSelector } from 'reselect';

const clientLimitsSelector = state => state.clientLimits;

export const selectClientLimits = createSelector(
  [clientLimitsSelector],
  clientLimits => clientLimits
);
