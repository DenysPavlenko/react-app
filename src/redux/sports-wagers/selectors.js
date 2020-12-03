import { createSelector } from 'reselect';

const sportsWagersSelector = state => state.sportsWagers;

export const selectSportsWages = createSelector(
  [sportsWagersSelector],
  sportsWagers => sportsWagers.wagers
);

export const selectActiveSportsWagers = createSelector(
  [sportsWagersSelector],
  sportsWagers => sportsWagers.wagers.map(({ id }) => id)
);

export const selectTotalWagered = createSelector(
  [sportsWagersSelector],
  sportsWagers => sportsWagers.totalWagered
);
