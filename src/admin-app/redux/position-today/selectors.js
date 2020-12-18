import { createSelector } from 'reselect';

const positionTodaySelector = state => state.positionToday;

export const selectPositionToday = createSelector(
  [positionTodaySelector],
  positionToday => positionToday
);
