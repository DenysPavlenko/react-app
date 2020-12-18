import { createSelector } from 'reselect';

const positionContestsSelector = state => state.positionContests;

export const selectPositionContests = createSelector(
  [positionContestsSelector],
  positionContests => positionContests
);
