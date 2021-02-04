import { createSelector } from 'reselect';

const sportsPageWagersSelector = state => state.sportsPageWagers;

export const selectSportsPageWagers = createSelector(
  [sportsPageWagersSelector],
  sportsPageWagers => sportsPageWagers.showSportsWagers
);
