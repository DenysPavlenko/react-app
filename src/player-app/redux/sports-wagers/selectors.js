import { createSelector } from 'reselect';

const sportsWagersSelector = state => state.sportsWagers;

export const selectSportsWagers = createSelector(
  [sportsWagersSelector],
  sportsWagers => sportsWagers.wagers
);

export const selectActiveSportsWagers = createSelector(
  [sportsWagersSelector],
  ({ wagers }) => wagers.map(({ id }) => id)
);

export const selectTotalWagered = createSelector(
  [sportsWagersSelector],
  ({ wagers }) => getTotal(wagers, 'risk')
);

export const selectTotalPossibleWin = createSelector(
  [sportsWagersSelector],
  ({ wagers }) => getTotal(wagers, 'toWin')
);

const getTotal = (arr, key) => {
  let total = 0;
  if (arr.length > 0) {
    total = arr.reduce((acc, wager) => wager[key] ? acc + parseFloat(wager[key]) : acc, 0);
  }
  return total.toFixed(2);
}
