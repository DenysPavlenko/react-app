import { createSelector } from 'reselect';

const positionLiveSportsSelector = state => state.positionLiveSports;

export const selectPositionLiveSports = createSelector(
  [positionLiveSportsSelector],
  positionLiveSports => positionLiveSports
);
