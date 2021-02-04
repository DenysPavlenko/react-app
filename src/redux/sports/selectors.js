import { createSelector } from 'reselect';

const sportsSelector = state => state.sports;

export const selectSports = createSelector(
  [sportsSelector],
  sports => sports
);
