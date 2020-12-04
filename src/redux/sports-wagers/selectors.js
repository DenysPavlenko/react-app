import { createSelector } from 'reselect';

const sportsWagersSelector = state => state.sportsWagers;

export const selectSportsWages = createSelector(
  [sportsWagersSelector],
  sportsWagers => sportsWagers.wagers
);

export const selectActiveSportsWagers = createSelector(
  [sportsWagersSelector],
  ({ wagers }) => wagers.map(({ id }) => id)
);

export const selectTotalWagered = createSelector(
  [sportsWagersSelector],
  ({ wagers }) => {
    let total;
    if (wagers.length > 0) {
      total = wagers.reduce((acc, wager) => wager.risk ? acc + parseFloat(wager.risk) : acc, 0);
    } else {
      total = 0;
    }
    return total.toFixed(2);
  }
);

export const selectTotalPossibleWin = createSelector(
  [sportsWagersSelector],
  ({ wagers }) => {
    let total;
    if (wagers.length > 0) {
      total = wagers.reduce((acc, wager) => wager.toWin ? acc + parseFloat(wager.toWin) : acc, 0);
    } else {
      total = 0;
    }
    return total.toFixed(2);
  }
);
